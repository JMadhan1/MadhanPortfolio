"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

interface AIOrbProps {
    position?: [number, number, number];
    color?: string;
    distort?: number;
    speed?: number;
    size?: number;
}

export default function AIOrb({
    position = [0, 0, 0],
    color = "#00d4ff",
    distort = 0.4,
    speed = 2,
    size = 1
}: AIOrbProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Sphere args={[size, 64, 64]} ref={meshRef} position={position}>
            <MeshDistortMaterial
                color={color}
                attach="material"
                distort={distort}
                speed={speed}
                roughness={0.2}
                metalness={0.8}
                emissive={color}
                emissiveIntensity={0.5}
            />
        </Sphere>
    );
}
