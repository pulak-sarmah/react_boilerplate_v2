import { useEffect, useRef } from "react";
import * as THREE from "three";
import type { FunctionComponent } from "@/common/types";

type UniformValue = { value: number };

interface CustomUniforms {
	[key: string]: THREE.IUniform<number>;
	uTime: UniformValue;
}
const ParticleWave = (): FunctionComponent => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (!canvasRef.current) return;

		const particleVertex = `
      attribute float scale;
      uniform float uTime;
      void main() {
        vec3 p = position;
        float s = scale;
        p.y += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;
        p.x += (sin(p.y + uTime) * 0.5);
        s += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = s * 15.0 * (1.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

		const particleFragment = `
      void main() {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 0.5);
      }
    `;

		let animationFrameId: number;
		const canvas = canvasRef.current;

		// Scene setup
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.01,
			1000
		);
		camera.position.set(0, 6, 5);

		const renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
		});
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);

		// Particle setup
		const gap = 0.3;
		const amountX = 200;
		const amountY = 200;
		const particleNumber = amountX * amountY;
		const particlePositions = new Float32Array(particleNumber * 3);
		const particleScales = new Float32Array(particleNumber);

		let index = 0;
		let index_ = 0;
		for (let ix = 0; ix < amountX; ix++) {
			for (let iy = 0; iy < amountY; iy++) {
				particlePositions[index] = ix * gap - (amountX * gap) / 2;
				particlePositions[index + 1] = 0;
				particlePositions[index + 2] = iy * gap - (amountX * gap) / 2;
				particleScales[index_] = 1;
				index += 3;
				index_++;
			}
		}

		const particleGeometry = new THREE.BufferGeometry();
		particleGeometry.setAttribute(
			"position",
			new THREE.BufferAttribute(particlePositions, 3)
		);
		particleGeometry.setAttribute(
			"scale",
			new THREE.BufferAttribute(particleScales, 1)
		);
		const uniforms: CustomUniforms = {
			uTime: { value: 0 },
		};

		const particleMaterial = new THREE.ShaderMaterial({
			transparent: true,
			vertexShader: particleVertex,
			fragmentShader: particleFragment,
			uniforms,
		});

		const particles = new THREE.Points(particleGeometry, particleMaterial);
		scene.add(particles);

		// Animation loop
		const animate = (): void => {
			uniforms.uTime.value += 0.05;
			camera.lookAt(scene.position);
			renderer.render(scene, camera);
			animationFrameId = requestAnimationFrame(animate);
		};

		// Handle window resize
		const handleResize = (): void => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener("resize", handleResize);
		animate();

		// Cleanup
		return (): void => {
			window.removeEventListener("resize", handleResize);
			cancelAnimationFrame(animationFrameId);
			scene.remove(particles);
			particleGeometry.dispose();
			particleMaterial.dispose();
			renderer.dispose();
		};
	}, []);

	return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default ParticleWave;
