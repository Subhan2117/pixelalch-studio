"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei"
import { useRef, Suspense } from "react"

function FloatingRing() {
  const ringRef = useRef(null)

  useFrame((state) => {
    if (ringRef.current) {
      const t = state.clock.elapsedTime
      ringRef.current.rotation.x =
        Math.PI / 2 + Math.sin(t * 0.5) * 0.2
      ringRef.current.rotation.z = t * 0.3
      ringRef.current.position.x = 0.9 + Math.sin(t * 0.6) * 0.65
      ringRef.current.position.y = 0.35 + Math.cos(t * 0.5) * 0.15
      ringRef.current.position.z = -0.6 + Math.sin(t * 0.6 + Math.PI / 2) * 0.15
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ringRef} position={[0.9, 0.35, -0.6]} scale={1.55}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <MeshDistortMaterial color="#0d9488" roughness={0.25} metalness={0.9} distort={0.12} speed={2.2} />
      </mesh>
    </Float>
  )
}

function FloatingSphere() {
  const sphereRef = useRef(null)

  useFrame((state) => {
    if (sphereRef.current) {
      const t = state.clock.elapsedTime
      sphereRef.current.position.x = -0.9 + Math.sin(t * 0.6 + Math.PI) * 0.65
      sphereRef.current.position.y = -0.35 + Math.cos(t * 0.5 + Math.PI / 2) * 0.12
      sphereRef.current.position.z = -0.7 + Math.sin(t * 0.6 + Math.PI) * 0.15
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh ref={sphereRef} position={[-0.9, -0.35, -0.7]} scale={0.45}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial color="#5eead4" roughness={0.35} metalness={0.6} distort={0.25} speed={3} />
      </mesh>
    </Float>
  )
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#14b8a6" />
          <FloatingRing />
          <FloatingSphere />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}
