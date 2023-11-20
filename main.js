import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const geometry2 = new THREE.BoxGeometry( 2, 2, 0.5 );
const geometry3 = new THREE.BoxGeometry( 0.5, 0.5, 1.25 );
const material = new THREE.MeshBasicMaterial( { color: "white" } );
const material2 = new THREE.MeshBasicMaterial( { color: "orange" } );
const material3 = new THREE.MeshBasicMaterial( { color: "green" } );
const cube = new THREE.Mesh( geometry, material );
const cubiod = new THREE.Mesh( geometry2, material2 );
const cabar=new THREE.Mesh(geometry3,material3)
scene.add( cube );
scene.add( cubiod );
scene.add(cabar)

camera.position.z = 3;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
    cubiod.rotation.x += 0.01;
	cubiod.rotation.y += 0.01;
    cabar.rotation.x += 0.01;
	cabar.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();