import './style.css';

import * as THREE from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import fingerprintParticlesVS from '/resources/shaders/fingerprintShader/vertex.glsl'
import fingerprintParticlesFS from '/resources/shaders/fingerprintShader/fragment.glsl'

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


//Lights

//Objects

camera.position.set(0, 0, 20)

//Create particles
const debug = {
    fingerprintWidth: 10,
    fingerprintHeight: 10,
    fingerprintResolution: 150,
    fingerprintParticlesSize : 40,
    fingerprintparticlesRandomOffset: 0.0,
};

let fingerprintParticlesMaterial = null;
let fingerprintParticlesGeometry = null;
let fingerprintParticles = null;

createFingertip();

//Gui

addDebugUI();


//Animate
const clock = new THREE.Clock();
let previousTime = 0;

const tick = ()=>{
    const time = clock.getElapsedTime();
    const deltaTime = time - previousTime;
    previousTime = time;

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
} 

console.timeEnd('Threejs')
tick();

function createFingertip(){
    //Errase last fingertip
    if(fingerprintParticles){
        fingerprintParticlesGeometry.dispose();
        fingerprintParticlesMaterial.dispose();
        scene.remove(fingerprintParticles);
    }

    //Sizes
    const width = debug.fingerprintWidth;
    const height = debug.fingerprintHeight;
    const resolution = debug.fingerprintResolution;
    const size = debug.fingerprintParticlesSize;

    //Geometry 
    fingerprintParticlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(resolution*resolution*3);
    const colors = new Float32Array(resolution*resolution*3);

    let v = 0;
    for (let i = 0; i < positions.length; i++ ){
        const x = i*3+0;
        const y = (i*3)+1;
        const z = (i*3)+2;

        //Position
        for (let h = 0; h < resolution; h++){
            positions[v*3+0] = i*(width/resolution)+ (Math.random()*debug.fingerprintparticlesRandomOffset);
            positions[v*3+1] = h*(height/resolution)+ (Math.random()*debug.fingerprintparticlesRandomOffset);
            // positions[v*3+2] = Math. random()*100;
            v++;
        }

         //Colors

         const h = 60;
         const l = (Math.random()*0.2)+0.25;
         const baseColor = new THREE.Color().setHSL(h*Math.PI/180, 1.0, l);
         colors[x] = baseColor.r
         colors[y] = baseColor.g
         colors[z] = baseColor.b

    }

    fingerprintParticlesGeometry.setAttribute('position' ,new THREE.BufferAttribute(positions, 3));
    fingerprintParticlesGeometry.setAttribute('aRandomColors', new THREE.BufferAttribute(colors, 3));
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
        }
    })

    //Particles 
    fingerprintParticles = new THREE.Points(fingerprintParticlesGeometry, fingerprintParticlesMaterial)
    scene.add(fingerprintParticles);
}

function addDebugUI(){
    const gui = new GUI();
    
    const fingerprintGui = gui.addFolder('fingerprint').onFinishChange(()=>{
        createFingertip();
    })
    fingerprintGui.add(debug, 'fingerprintWidth', 0, 20, 1);
    fingerprintGui.add(debug, 'fingerprintHeight', 0, 20, 1);
    fingerprintGui.add(debug, 'fingerprintResolution', 0, 200, 1);
    fingerprintGui.add(debug, 'fingerprintParticlesSize', 0, 100);
    fingerprintGui.add(debug, 'fingerprintparticlesRandomOffset', 0, 2).name('Random offset');
}