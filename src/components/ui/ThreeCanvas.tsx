"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stars } from "@react-three/drei";

export default function ThreeCanvas({ children }: { children: React.ReactNode }) {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.8} />
                    <pointLight position={[10, 10, 10]} intensity={2} />
                    <Stars radius={100} depth={60} count={10000} factor={6} saturation={0} fade speed={1.5} />
                    {children}
                </Suspense>
                {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
            </Canvas>
        </div>
    );
}
