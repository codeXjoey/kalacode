import './style.css';

import * as THREE from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import fingerprintParticlesVS from '/resources/shaders/fingerprintShader/vertex.glsl'
import fingerprintParticlesFS from '/resources/shaders/fingerprintShader/fragment.glsl'

import randomParticlesVS from '/resources/shaders/randomParticlesShader/vertex.glsl'
import randomParticlesFS from '/resources/shaders/randomParticlesShader/fragment.glsl'

import gsap from 'gsap';
import GUI from 'lil-gui';
import Stats from 'stats.js';

console.time('Threejs')


//Stats
const stats = new Stats()
stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom)

//Variables 
const debug = {
    //Fingerprint
    fingerprintBaseColor1: '#1e00ff',
    fingerprintBaseColor2: '#ffffff',
    fingerprintBaseColor3: '#ff8800',
    fingerprintWidth: 10,
    fingerprintHeight: 15,
    fingerprintResolution: 110,
    fingerprintParticlesSize : 45,
    fingerprintparticlesRandomOffset: 0.035,

    //Random particles 
    ranodmCount: 3000,
    randomSize: 40,
    randomParticlesDepth: 50,

    
};

let randomColors = null;

let fingerprintParticlesMaterial = null;
let fingerprintParticlesGeometry = null;
let fingerprintParticles = null;

let randomParticlesGeometry = null;
let randomParticlesMaterial = null;
let randomParticles = null;
let randomPositions = null;

let qrCodes = [
    {
        'image': '/resources/textures/QrCode.png',
        'prompt': 'The best Qr Ever',
    }
]

const qrCodeGeometry = new THREE.PlaneGeometry();
let qrCodesGroup = new THREE.Group();
let qrCodesArray = [];
let qrCodeMaterial  = null;



// THREE.ColorManagement.enabled = false;

//Sizes 
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//Resize

window.addEventListener('resize', ()=>{
    //Update Sizes 
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    //Update camera
    camera.aspect = sizes.width/sizes.height;
    camera.updateProjectionMatrix();

    //Update Renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    //Update Material
    fingerprintParticlesMaterial.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
    randomParticlesMaterial.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
});

//Textures

const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);

const fingerprintTexture = textureLoader.load('/resources/textures/fingerprint.jpg');

//Scene 
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(new THREE.Color('#000000'), 1, 40);


//Camera 
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

const camera = new THREE.PerspectiveCamera(50, sizes.width/sizes.height, 0.01, 50);
cameraGroup.add(camera)

//Renderer
const canvas = document.querySelector('.experience')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas, 
    alpha:true
}); 

renderer.setClearAlpha = 0;

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(sizes.width, sizes.height);

//Controls 
const orbitControls = new OrbitControls(camera, canvas)
orbitControls.target = new THREE.Vector3(0, 0, -20)
//Parameters


//Environment



//Objects

// camera.position.set(0, 0, 10);

//Create particles

createFingerprint();
createRandomParticles();
scene.add(qrCodesGroup);
qrCodesGroup.position.z = 0
let countQrCodes = +80;


//Gui

addDebugUI();

//-------------------------------------------- Animation ----------------------------------

//Scroll event
let timeLine = { t : 0 };
let aux = 0;
window.addEventListener('scroll', (event)=>{
    gsap.to(timeLine, {duration:1, delay: 0, t: scrollY*0.05});
    if (aux < 10){
        aux++
    }else{
        aux = 0;
        createQrCodes(event);
    }
})

//Animate
const cursor = {
    x: 0,
    y: 0,
}

window.addEventListener('mousemove', (event)=>{
    cursor.x = -((event.clientX/ sizes.width)-0.5);
    cursor.y = -((event.clientY/ sizes.height)-0.5);  
})

const clock = new THREE.Clock();
let previousTime = 0;

const tick = ()=>{
    stats.begin()

    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    //Parallax Effect
    const parallaxX = -cursor.x*1.5;
    const parallaxY = cursor.y*1.5;

    cameraGroup.position.x += (parallaxX - cameraGroup.position.x)*2 * deltaTime;
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y)*2 * deltaTime;

    //Animating QrCodes 
    // createQrCodes();

    if(qrCodesArray){
        qrCodesGroup.position.z = (timeLine.t);
        for (let i = 0; i < qrCodesArray.length; i++){
            qrCodesArray[i].setRotationFromAxisAngle(new THREE.Vector3(randomColors[i*6+0], randomColors[i*12+2], randomColors[i*3+2]).normalize(), timeLine.t*0.1);
        }
    }


    // QrCode.

    //Update objects
    // camera.position.z = -timeLine;

    //Update materials 
    fingerprintParticlesMaterial.uniforms.uTimeLine.value = timeLine.t;
    fingerprintParticlesMaterial.uniforms.uTime.value = elapsedTime;
    
    randomParticlesMaterial.uniforms.uTime.value = elapsedTime;
    randomParticlesMaterial.uniforms.uTimeLine.value = timeLine.t;

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
    stats.end()
} 

console.timeEnd('Threejs')
tick();

function createFingerprint(){
    //Errase last fingertip
    if(fingerprintParticles){
        fingerprintParticlesGeometry.dispose();
        fingerprintParticlesMaterial.dispose();
        scene.remove(fingerprintParticles);
    }

    //Options
    const width = debug.fingerprintWidth;
    const height = debug.fingerprintHeight;
    const resolution = debug.fingerprintResolution;
    const size = debug.fingerprintParticlesSize;
    const randomOffset = debug.fingerprintparticlesRandomOffset;
    const colors = [debug.fingerprintBaseColor1, debug.fingerprintBaseColor2, debug.fingerprintBaseColor3]

    //Geometry 
    fingerprintParticlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(resolution*resolution*3);
    const randomValues = new Float32Array(resolution*resolution);
    randomColors = new Float32Array(resolution*resolution*3);
    
    let v = 0;
    for (let i = 0; i < positions.length; i++ ){
        const x = i*3+0;
        const y = (i*3)+1;
        const z = (i*3)+2;

        //Position
        for (let h = 0; h < resolution; h++){
            positions[v*3+0] = i*(width/resolution)+ (Math.random()*randomOffset);
            positions[v*3+1] = h*(height/resolution)+ (Math.random()*randomOffset);
            v++;
        }

        //Colors         
        const baseColor = new THREE.Color(colors[Math.floor(Math.random()*3)])
        
        baseColor.getHSL(baseColor, THREE.SRGBColorSpace);
        const h = baseColor.h
        
        let l = 0;
        l =  ((Math.random()-0.5)*0.2)+baseColor.l;
        
        // if(baseColor.l > 0.75 || baseColor.l < 0.25){
        //     l = baseColor.l
        // }else{
        // }

        
        const finalColor = new THREE.Color().setHSL( baseColor.h, baseColor.s, l);
        randomColors[x] = finalColor.r
        randomColors[y] = finalColor.g
        randomColors[z] = finalColor.b

        //Randomnes
        randomValues[i] = Math.random();
    }
    

    fingerprintParticlesGeometry.setAttribute('position' ,new THREE.BufferAttribute(positions, 3));
    fingerprintParticlesGeometry.setAttribute('aRandomColors', new THREE.BufferAttribute(randomColors, 3));
    fingerprintParticlesGeometry.setAttribute('aRandom', new THREE.BufferAttribute(randomValues, 1));
    fingerprintParticlesGeometry.center();

    //Material
    fingerprintParticlesMaterial = new THREE.ShaderMaterial({
        vertexShader: fingerprintParticlesVS,
        fragmentShader: fingerprintParticlesFS,
        // transparent: true,
        depthWrite: false,
        uniforms:{
            uPointSize: { value: size },
            uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
            uTexture: { value: fingerprintTexture },
            uWidth: { value: width },
            uHeight: { value: height },
            uTime: { value: 0 },
            uTimeLine: { value: 0 },
        }
    })

    //Particles 
    fingerprintParticles = new THREE.Points(fingerprintParticlesGeometry, fingerprintParticlesMaterial)
    fingerprintParticles.position.z = -45;

    scene.add(fingerprintParticles);
}

function createRandomParticles(){
    if(randomParticles){
        scene.remove(randomParticles);
        randomParticlesGeometry.dispose();
        randomParticlesMaterial.dispose();
    }
    //Options
    const count = debug.ranodmCount;
    const size = debug.randomSize;
    const width = debug.fingerprintWidth; 
    const height = debug.fingerprintHeight;
    const depth = debug.randomParticlesDepth;

    //Geometry 
    randomParticlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count*3);

    for(let i = 0; i < count; i++){
        positions[i*3+0] = (Math.random()-0.5)*width;
        positions[i*3+1] = (Math.random()-0.5)*height;
        positions[i*3+2] = (Math.random()-1.0)*depth;
    }
    randomPositions = positions;

    randomParticlesGeometry.setAttribute('position' ,new THREE.BufferAttribute(positions, 3));
    randomParticlesGeometry.setAttribute('aRandomColors' ,new THREE.BufferAttribute(randomColors, 3));

    //Material
    randomParticlesMaterial = new THREE.ShaderMaterial({
        vertexShader: randomParticlesVS,
        fragmentShader: randomParticlesFS,
        // depthWrite: false,
        uniforms: {
            uPointSize: { value: size },
            uPixelRatio: { value : Math.min(window.devicePixelRatio, 2)},
            uTime: { value: 0 },
            uTimeLine: { value: 0 },
            uDepth: { value: depth },
        }
    })

    randomParticles = new THREE.Points(randomParticlesGeometry, randomParticlesMaterial);
    randomParticles.position.z = 0;
    scene.add(randomParticles);

}

function createQrCodes(event){
    if(timeLine.t>233){
        console.log(timeLine.t)        
    }
    const image = textureLoader.load('/resoruces/')

    qrCodeMaterial = new THREE.MeshBasicMaterial({side: THREE.DoubleSide})
    const qr = new THREE.Mesh(qrCodeGeometry, qrCodeMaterial);
    qr.position.x = (Math.random()-0.5)*5
    qr.position.y = (Math.random()-0.5)*5
    qr.position.z = -countQrCodes;
    countQrCodes += 5;

    qrCodesGroup.add(qr);
    qrCodesArray.push(qr)

}


function createText(){
    
}

function addDebugUI(){
    const gui = new GUI();
    
    const fingerprintGui = gui.addFolder('Finger print').close().onFinishChange(()=>{
        createFingerprint();
        createRandomParticles();
    })

    fingerprintGui.addColor(debug, 'fingerprintBaseColor1').name('Random Color 1');
    fingerprintGui.addColor(debug, 'fingerprintBaseColor2').name('Random Color 2');
    fingerprintGui.addColor(debug, 'fingerprintBaseColor3').name('Random Color 3');
    fingerprintGui.add(debug, 'fingerprintWidth', 0, 20, 1);
    fingerprintGui.add(debug, 'fingerprintHeight', 0, 20, 1);
    fingerprintGui.add(debug, 'fingerprintResolution', 0, 400, 1);
    fingerprintGui.add(debug, 'fingerprintParticlesSize', 0, 200);
    fingerprintGui.add(debug, 'fingerprintparticlesRandomOffset', 0, 2).name('Random offset');

    const randomParticlesGui = gui.addFolder('Random Particles').close().onFinishChange(()=>{
        createFingerprint();
        createRandomParticles();
    })

    randomParticlesGui.add(debug, 'ranodmCount', 100, 10000, 1);
    randomParticlesGui.add(debug, 'randomSize', 1, 150, 1);
    randomParticlesGui.add(debug, 'randomParticlesDepth', 1, 150, 1);

}