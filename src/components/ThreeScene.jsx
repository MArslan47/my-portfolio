import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, ContactShadows, Environment } from '@react-three/drei'

function SpinningShape() {
  const ref = useRef()
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.01
  })
  return (
    <Float speed={0.8} rotationIntensity={0.8} floatIntensity={0.6}>
      <mesh ref={ref} castShadow receiveShadow>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshStandardMaterial color="#6d28d9" metalness={0.7} roughness={0.15} emissive="#2a0b5a" emissiveIntensity={0.08} />
      </mesh>
    </Float>
  )
}

export default function ThreeScene() {
  return (
    <div className="three-wrap" aria-hidden>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.35} />
        <directionalLight castShadow position={[5, 8, 5]} intensity={0.8} shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <SpinningShape />
        <ContactShadows position={[0, -1.2, 0]} opacity={0.35} scale={6} blur={2} />
        <Environment preset="city" />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} enableRotate={true} />
      </Canvas>
    </div>
  )
}
