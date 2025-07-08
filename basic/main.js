import * as THREE from 'three';
import { DirectionalLight } from 'three';
// NOTE: all constructors must be CAPITALIZED (e.g., Scene(), PerspectiveCamera())

// 1. Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Add the camera
    // PerspectiveCamera(Field of Vision, Aspect Ratio, Near Plane, Far Plane)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // z = z-axis
camera.position.z = 5;

// 3. Create and add a cube object
const geometry = new THREE.BoxGeometry();
    // emissive default is black (is not explicitly set, material won't react with light)
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4. Add lighting
    // DirectionalLight(color, intensity)
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
    // position.set(x, y, z)
light.position.set(1, 1, 1);
scene.add(light);

// 5. Set up the renderer
const renderer = new THREE.WebGLRenderer();
    // setSize to utilize full window
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6. Animate the scene
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();