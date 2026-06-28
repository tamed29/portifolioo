import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float } from '@react-three/drei'
import { useRef } from 'react'

function AnimatedSphere() {
    const meshRef = useRef()
    useFrame((state) => {
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    })
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1, 4]} />
                <MeshDistortMaterial
                    color="#6366f1"
                    wireframe
                    distort={0.3}
                    speed={2}
                />
            </mesh>
        </Float>
    )
}

export default function HeroCanvas() {
    return (
        <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AnimatedSphere />
        </Canvas>
    )
}