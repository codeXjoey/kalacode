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
// const stats = new Stats()
// stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
// document.body.appendChild(stats.dom)

//------------------------- Variables 
const debug = {
    //Fingerprint
    fingerprintBaseColor1: '#e17209',
    fingerprintBaseColor2: '#ffffff',
    fingerprintBaseColor3: '#1d5ef7',
    fingerprintWidth: 10,
    fingerprintHeight: 14,
    fingerprintResolution: 190,
    fingerprintParticlesSize : 50,
    fingerprintparticlesRandomOffset: 0.3,

    //Random particles 
    ranodmCount: 2500,
    randomSize: 20,
    randomParticlesDepth: 50,

    
};

let experienceStarted = false;

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
        'image': '/textures/QrCode.png',
        'prompt': 'The best Qr Ever',
        'id': '1'
    },
    {
        'image': '/textures/QrCode1.jpeg',
        'prompt': 'The best Qr Ever',
        'id': '1'
    },
    {
        'image': '/textures/QrCode.png',
        'prompt': 'The best Qr Ever',
        'id': '1'
    }
]

const qrCodeGeometry = new THREE.PlaneGeometry(0.5, 0.5);
let qrCodesArray = [];
let qrCodeMaterial  = null;

let texts = null;

// let currentIntersect = false;
let mouseIntersects = null;
let isObjectSelected = false;
let qrCodeSelected = null;


//-------------------------------- Utils ----------------------------------------------------------
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
    
    //Scroll speed update
    if(sizes.width > 700){
        scrollVelocity = 0.12;
        scrollContainer.style.height = '26000px';    
    }else{
        scrollVelocity = 0.075;
        scrollContainer.style.height = '40500px';
    }
});

//------------------------------ Loaders --------------------------------------------------

const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);

loadingManager.onLoad = ()=>{
    loaded();
}


//Fingerprint
const fingerprintTexture = textureLoader.load('/textures/fingerprint2.jpg');

//QrCodes
const qrCodesTextures = [];
for(let i = 0; i < (qrCodes.length > 300 ? 300 : qrCodes.length ); i++){
    const texture = textureLoader.load(qrCodes[i].image)
    texture .generateMipmaps = false;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    qrCodesTextures.push(texture)
}

//--------------------------------------------- Setup ----------------------------

//Scene 
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(new THREE.Color('#000000'), 1, 40);

//Camera 
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

const camera = new THREE.PerspectiveCamera(50, sizes.width/sizes.height, 0.01, 50);
camera.position.set(0, 0, 0);
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


//---------------------------------------------- Overlay------------------------------

const scrollContainer = document.querySelector('.scrollable-container');

const buttonGenerateThenActive = document.querySelector('.button_generate-then--active')
const buttonGenerateThen = document.querySelector('.button_generate-then')


const loaded = ()=>{
    setTimeout(()=>{
        experienceStarted = true;
    }, 500)
    if(sizes.width > 700){
        scrollVelocity = 0.12;
        scrollContainer.style.height = '26000px';    
    }else{
        scrollVelocity = 0.075;
        scrollContainer.style.height = '40500px';
    }
}



buttonGenerateThen.addEventListener('pointerdown', ()=>{
    window.scrollTo(0, sizes.width > 700 ? 5300 : 8400);
})
buttonGenerateThenActive.addEventListener('pointerdown', ()=>{
    window.scrollTo(0, sizes.width > 700 ? 5300 : 8400);
})




//-------------------------------------------- Creating elements ---------------------------

createFingerprint();
// // fingerprintParticles.visible = false;
createRandomParticles();
// randomParticles.visible = false;
createQrCodes();

createText();

//-------------------------------------------- Ray caster ---------------------------------
const raycaster = new THREE.Raycaster();

const qrCodeOnClick = (event)=>{
    const clickCoord = new THREE.Vector2(
        (event.clientX/sizes.width-0.5)*2,
        -(event.clientY/sizes.height-0.5)*2,
    )

    // console.log(clickCoord);
    raycaster.setFromCamera(clickCoord, camera);
    mouseIntersects = raycaster.intersectObjects(qrCodesArray);

    if(mouseIntersects.length > 0 && mouseIntersects[0].distance < 35 ){
        qrCodeSelected = mouseIntersects[0].object;
        
        qrCodeSelected.isSelected = true;
        isObjectSelected = true;
        const i = qrCodesArray.indexOf(qrCodeSelected);
        console.log(qrCodeSelected.rotation.x);
        // qrCodesArray[i].setRotationFromAxisAngle(new THREE.Vector3(randomColors[i*3+2], randomColors[i*3+1], randomColors[i*3+0]).normalize(), 0);
        

        gsap.to(qrCodeSelected.position, {duration: 0.5, delay: 0, x: 0});
        gsap.to(qrCodeSelected.position, {duration: 0.5, delay: 0, y: 0});
        gsap.to(qrCodeSelected.position, {duration: 0.5, delay: 0, z: -2.5});

        gsap.to(qrCodeSelected.rotation, {duration: 0.5, delay: 0, x: 0 })
        gsap.to(qrCodeSelected.rotation, {duration: 0.5, delay: 0, y: 0 })
        gsap.to(qrCodeSelected.rotation, {duration: 0.5, delay: 0, z: 0 })

        gsap.to(cameraGroup.position, {duration: 0.5, delay: 0, x: 0});
        gsap.to(cameraGroup.position, {duration: 0.5, delay: 0, y: 0});
    } else {
        if(isObjectSelected){
            // gsap.to(qrCodeSelected.rotation, {duration: 0.5, delay: 0, x: qe })
            // gsap.to(qrCodeSelected.rotation, {duration: 0.5, delay: 0, y: 0 })
            // gsap.to(qrCodeSelected.rotation, {duration: 0.5, delay: 0, z: 0 })
        }
    }
} 
window.addEventListener('pointerdown', qrCodeOnClick);


//-------------------------------------------- Animation ----------------------------------

//Scroll event
let timeLine = { t : 0 };
let scrollVelocity = null;
window.addEventListener('scroll', (event)=>{
    gsap.to(timeLine, {duration:1, delay: 0, t: scrollY*scrollVelocity});
    console.log(scrollY)
    if(qrCodeSelected){
        isObjectSelected = false;
        qrCodeSelected.isSelected = false;
    }
})

//Animate
const cursor = new THREE.Vector2();
window.addEventListener('mousemove', (event)=>{
    cursor.x = ((event.clientX/ sizes.width)-0.5)*2;
    cursor.y = -((event.clientY/ sizes.height)-0.5)*2;  
})

const clock = new THREE.Clock();
let previousTime = 0;

const tick = ()=>{
    // stats.begin()

    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    //Animating buttons
    const buttonPercentage = Math.max(0 ,Math.min(1, (timeLine.t - 400)/(600 - 400)))*100;
    buttonGenerateThenActive.style.clipPath = `polygon(${buttonPercentage}% 0, ${buttonPercentage}% 100%, 0 100%, 0 0)`;

    //Parallax Effect
    const parallaxX = cursor.x*0.5;
    const parallaxY = cursor.y*0.5;

    if(!isObjectSelected){
        cameraGroup.position.x += (parallaxX - cameraGroup.position.x)*2 * deltaTime;
        cameraGroup.position.y += (parallaxY - cameraGroup.position.y)*2 * deltaTime;
    }

    //Animating QrCodes 
    if(qrCodesArray && timeLine.t > 400){
        for (let i = 0; i < qrCodesArray.length; i++){
            if(!qrCodesArray[i].isSelected){
                qrCodesArray[i].position.z = (timeLine.t*0.25+randomPositions[i*3+2]*12)-160
                qrCodesArray[i].setRotationFromAxisAngle(new THREE.Vector3(randomColors[i*3+2], randomColors[i*3+1], randomColors[i*3+0]).normalize(),  (((timeLine.t+i)*0.2)+elapsedTime)*0.1);                
            }
        }
        // qrCodesGroup.position.z = (timeLine.t*0.25)-225;
    }


    //Animating text

    for (const text of texts){
        //Animating position
        text.position.z = Math.pow(((timeLine.t*text.speed)-text.appearTime), text.staticTime)-text.distance;

        //Adding perspective 
        const scale = -1.0 * (1.0/ text.position.z)
        if(text.position.z < -0.01 && text.position.z > -15){
            text.element.style.display = 'flex';
            text.element.style.scale = scale;
            text.element.style.opacity = 2/Math.abs((text.position.z));
        }else{
            text.element.style.display = 'none';
        }   
    }
    

    //Update materials 
    fingerprintParticlesMaterial.uniforms.uTimeLine.value = timeLine.t;
    fingerprintParticlesMaterial.uniforms.uTime.value = elapsedTime;
    
    randomParticlesMaterial.uniforms.uTime.value = elapsedTime;
    randomParticlesMaterial.uniforms.uTimeLine.value = timeLine.t;

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
    // stats.end()
} 

console.timeEnd('Threejs')
tick();

//---------------------------------------- Functions ------------------------------

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
        transparent: true,
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
    fingerprintParticles.position.z = -40;

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
        const phi = Math.random() * Math.PI * 2; // Ángulo alrededor del eje Y (0 a 2π)
        const costheta = Math.random() * 2 - 1; // Valor entre -1 y 1
        const u = Math.random(); // Valor entre 0 y 1
        const theta = Math.acos(costheta); // Ángulo respecto al eje Y (0 a π)
        const r = height/2 * Math.cbrt(u); // Aplicamos la distancia radial para distribuir las partículas uniformemente en el volumen de la esfera
      
        // Coordenadas cartesianas
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(theta);
      
        positions[i*3+0] = x
        positions[i*3+1] = y
        positions[i*3+2] = (Math.random()-1.0)*depth;

        // positions[i*3+0] = (Math.random()-0.5)*width;
        // positions[i*3+1] = (Math.random()-0.5)*height;
        // positions[i*3+2] = (Math.random()-1.0)*depth;
    }
    randomPositions = positions;

    randomParticlesGeometry.setAttribute('position' ,new THREE.BufferAttribute(positions, 3));
    randomParticlesGeometry.setAttribute('aRandomColors' ,new THREE.BufferAttribute(randomColors, 3));

    //Material
    randomParticlesMaterial = new THREE.ShaderMaterial({
        vertexShader: randomParticlesVS,
        fragmentShader: randomParticlesFS,
        depthWrite: false,
        transparent: true,
        uniforms: {
            uPointSize: { value: size },
            uPixelRatio: { value : Math.min(window.devicePixelRatio, 2)},
            uTime: { value: 0 },
            uTimeLine: { value: 0 },
            uDepth: { value: depth },
        }
    })

    randomParticles = new THREE.Points(randomParticlesGeometry, randomParticlesMaterial);
    scene.add(randomParticles);

}

function createQrCodes(){
    for (let i = 0; i < 300; i++){
        let randomImage = 0;
        if(i <= qrCodesTextures.length){
           randomImage = i;
        }else{
            randomImage = Math.floor(Math.random()*qrCodesTextures.length)
        }
        qrCodeMaterial = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            map: qrCodesTextures[randomImage]
        });

        const qrCodeMesh = new THREE.Mesh(qrCodeGeometry, qrCodeMaterial)
        qrCodeMesh.position.x = randomPositions[i*3+0]/2
        qrCodeMesh.position.y = randomPositions[i*3+1]/2
        qrCodeMesh.position.z = 5;
        qrCodeMesh.isSelected = false;
        
        scene.add(qrCodeMesh);
        qrCodesArray.push(qrCodeMesh);      
    }    
}


function createText(){
    texts = [
        {
            position: new THREE.Vector3(0, 0, 0),
            element: document.querySelector('.text-0'),
            appearTime: 0,
            speed: 0.03,
            distance: 1,
            staticTime: 3
        },
        {
            position: new THREE.Vector3(0, 0, 0),
            element: document.querySelector('.text-1'),
            appearTime: 2.5,
            speed: 0.03,
            distance: 1,
            staticTime: 3
        },
        {
            position: new THREE.Vector3(0, 0, 0),
            element: document.querySelector('.text-2'),
            appearTime: 5,
            speed: 0.03,
            distance: 1,
            staticTime: 3
        },
        {
            position: new THREE.Vector3(0, 0, 0),
            element: document.querySelector('.text-3'),
            appearTime: 7.5,
            speed: 0.03,
            distance: 1,
            staticTime: 3
        },
        {
            position: new THREE.Vector3(0, 0, 0),
            element: document.querySelector('.text-4'),
            appearTime: 3.75,
            speed: 0.008,
            distance: 1,
            staticTime: 13
        },
    ];
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

// Una pasion no es mas que la interseccion entre multiples curiosidades. Averigua que tienen en comun esas cosas que realmente te interesan y habras encontrado una pasion
// Conecta esa pasion con un problema existente en el mundo que quieras resolver y habras encontrado un propositio
// Alinea es e poropositoi con cualquier tectnologia o servicio emergente y tendras el mapa para cualquier negocio a largo plazo