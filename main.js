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



console.time('Threejs')

THREE.ColorManagement.enabled = false;

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

//Camera 
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

const camera = new THREE.PerspectiveCamera(50, sizes.width/sizes.height, 0.1, 100);
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
//Parameters


//Environment



//Objects

camera.position.set(0, 0, 10)

//Create particles
const debug = {
    //Fingerprint
    fingerprintBaseColor: 60,
    fingerprintWidth: 10,
    fingerprintHeight: 10,
    fingerprintResolution: 150,
    fingerprintParticlesSize : 40,
    fingerprintparticlesRandomOffset: 0.0,

    //Random particles 
    ranodmCount: 1000,
    randomSize: 40,
    randomParticlesDepth: 20,

    
};

let randomColors = null;

let fingerprintParticlesMaterial = null;
let fingerprintParticlesGeometry = null;
let fingerprintParticles = null;

let randomParticlesGeometry = null
let randomParticlesMaterial = null
let randomParticles = null

const cameraX = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 1.0), new THREE.MeshBasicMaterial());
scene.add(cameraX)

createFingerprint();
// fingerprintParticles.position.z = -20;


createRandomParticles();

//Gui

addDebugUI();

//Scroll event
let timeLine = 0;
window.addEventListener('wheel', (event)=>{
    console.log(event)
    if(event.deltaY < 100){
        console.log('move up');
    } else {
        console.log('move down');
    }
})

//Animate

const clock = new THREE.Clock();
let previousTime = 0;

const tick = ()=>{
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    //Update objects
    cameraX.position.z = -elapsedTime;

    //Update materials 
    fingerprintParticlesMaterial.uniforms.uTime.value = elapsedTime
    randomParticlesMaterial.uniforms.uTime.value = elapsedTime
    randomParticlesMaterial.uniforms.uCameraPositionZ.value = cameraX.position.z;

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
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
    const color = debug.fingerprintBaseColor;

    //Geometry 
    fingerprintParticlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(resolution*resolution*3);
    randomColors = new Float32Array(resolution*resolution*3);

    let v = 0;
    for (let i = 0; i < positions.length; i++ ){
        const x = i*3+0;
        const y = (i*3)+1;
        const z = (i*3)+2;

        //Position
        for (let h = 0; h < resolution; h++){
            positions[v*3+0] = i*(width/resolution)+ (Math.random()*debug.fingerprintparticlesRandomOffset);
            positions[v*3+1] = h*(height/resolution)+ (Math.random()*debug.fingerprintparticlesRandomOffset);
            v++;
        }

         //Colors

         const h = color;
         const l = (Math.random()*0.2)+0.25;
         const baseColor = new THREE.Color().setHSL(h*Math.PI/180, 1.0, l);
         randomColors[x] = baseColor.r
         randomColors[y] = baseColor.g
         randomColors[z] = baseColor.b

    }

    fingerprintParticlesGeometry.setAttribute('position' ,new THREE.BufferAttribute(positions, 3));
    fingerprintParticlesGeometry.setAttribute('aRandomColors', new THREE.BufferAttribute(randomColors, 3));
    fingerprintParticlesGeometry.center();

    //Material
    fingerprintParticlesMaterial = new THREE.ShaderMaterial({
        vertexShader: fingerprintParticlesVS,
        fragmentShader: fingerprintParticlesFS,
        transparent: true,
        alphaTest: 0.01,
        uniforms:{
            uPointSize: { value: size },
            uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
            uTexture: { value: fingerprintTexture },
            uWidth: { value: width },
            uHeight: { value: height },
            uTime: { value: 0 }
        }
    })

    //Particles 
    fingerprintParticles = new THREE.Points(fingerprintParticlesGeometry, fingerprintParticlesMaterial)
    scene.add(fingerprintParticles);
    fingerprintParticles.visible = false;

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

    randomParticlesGeometry.setAttribute('position' ,new THREE.BufferAttribute(positions, 3));
    randomParticlesGeometry.setAttribute('aRandomColors' ,new THREE.BufferAttribute(randomColors, 3));

    //Material
    randomParticlesMaterial = new THREE.ShaderMaterial({
        vertexShader: randomParticlesVS,
        fragmentShader: randomParticlesFS,
        uniforms: {
            uPointSize: { value: size },
            uPixelRatio: { value : Math.min(window.devicePixelRatio, 2)},
            uTime: { value: 0 },
            uDepth: { value: depth },
            uCameraPositionZ: {value: cameraX.position.z}
        }
    })

    randomParticles = new THREE.Points(randomParticlesGeometry, randomParticlesMaterial);
    scene.add(randomParticles);
}

function addDebugUI(){
    const gui = new GUI();
    
    const fingerprintGui = gui.addFolder('Finger print').close().onFinishChange(()=>{
        createFingerprint();
        createRandomParticles();
    })

    fingerprintGui.add(debug, 'fingerprintBaseColor', 0, 360);
    fingerprintGui.add(debug, 'fingerprintWidth', 0, 20, 1);
    fingerprintGui.add(debug, 'fingerprintHeight', 0, 20, 1);
    fingerprintGui.add(debug, 'fingerprintResolution', 0, 200, 1);
    fingerprintGui.add(debug, 'fingerprintParticlesSize', 0, 100);
    fingerprintGui.add(debug, 'fingerprintparticlesRandomOffset', 0, 2).name('Random offset');

    const randomParticlesGui = gui.addFolder('Random Particles').onFinishChange(()=>{
        createFingerprint();
        createRandomParticles();
    })

    randomParticlesGui.add(debug, 'ranodmCount', 100, 10000, 1);
    randomParticlesGui.add(debug, 'randomSize', 1, 150, 1);
    randomParticlesGui.add(debug, 'randomParticlesDepth', 1, 150, 1);

}