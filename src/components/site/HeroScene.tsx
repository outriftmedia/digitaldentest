// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float, MeshDistortMaterial, Icosahedron, Torus } from "@react-three/drei";
// import { Suspense, useRef, useState, useEffect } from "react";
// import * as THREE from "three";

// const PURPLE = "#A78BFA";
// const PURPLE_DEEP = "#7C3AED";

// function MorphingOrb() {
//   const ref = useRef<THREE.Mesh>(null);
//   const [hovered, setHovered] = useState(false);

//   useFrame((state) => {
//     if (!ref.current) return;
//     const t = state.clock.getElapsedTime();
//     ref.current.rotation.x = t * 0.15;
//     ref.current.rotation.y = t * 0.2;
//     const target = hovered ? 1.15 : 1;
//     ref.current.scale.lerp(new THREE.Vector3(target, target, target), 0.06);
//   });

//   return (
//     <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
//       <Icosahedron
//         ref={ref}
//         args={[1.6, 4]}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//       >
//         <MeshDistortMaterial
//           color={PURPLE_DEEP}
//           roughness={0.2}
//           metalness={0.6}
//           distort={hovered ? 0.55 : 0.38}
//           speed={2.2}
//           wireframe
//         />
//       </Icosahedron>
//     </Float>
//   );
// }

// function OrbitRings() {
//   const g1 = useRef<THREE.Mesh>(null);
//   const g2 = useRef<THREE.Mesh>(null);
//   useFrame((s) => {
//     const t = s.clock.getElapsedTime();
//     if (g1.current) {
//       g1.current.rotation.x = t * 0.3;
//       g1.current.rotation.y = t * 0.4;
//     }
//     if (g2.current) {
//       g2.current.rotation.x = -t * 0.25;
//       g2.current.rotation.z = t * 0.35;
//     }
//   });
//   return (
//     <>
//       <Torus ref={g1} args={[2.6, 0.008, 16, 120]}>
//         <meshBasicMaterial color={PURPLE} transparent opacity={0.4} />
//       </Torus>
//       <Torus ref={g2} args={[3.1, 0.005, 16, 120]}>
//         <meshBasicMaterial color="#ffffff" transparent opacity={0.18} />
//       </Torus>
//     </>
//   );
// }

// function Particles({ count = 180 }: { count?: number }) {
//   const ref = useRef<THREE.Points>(null);
//   const positions = new Float32Array(count * 3);
//   for (let i = 0; i < count; i++) {
//     const r = 4 + Math.random() * 3;
//     const theta = Math.random() * Math.PI * 2;
//     const phi = Math.acos(2 * Math.random() - 1);
//     positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
//     positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
//     positions[i * 3 + 2] = r * Math.cos(phi);
//   }
//   useFrame((s) => {
//     if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.05;
//   });
//   return (
//     <points ref={ref}>
//       <bufferGeometry>
//         <bufferAttribute attach="attributes-position" args={[positions, 3]} />
//       </bufferGeometry>
//       <pointsMaterial size={0.025} color="#ffffff" transparent opacity={0.6} sizeAttenuation />
//     </points>
//   );
// }

// function detectWebGL(): boolean {
//   if (typeof window === "undefined") return false;
//   try {
//     const canvas = document.createElement("canvas");
//     const gl =
//       canvas.getContext("webgl2") ||
//       canvas.getContext("webgl") ||
//       canvas.getContext("experimental-webgl");
//     return !!gl;
//   } catch {
//     return false;
//   }
// }

// function GradientFallback() {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <div className="absolute inset-0 hero-gradient-bg" />
//       <div className="absolute -top-1/4 -right-1/4 size-[80vw] max-w-[700px] rounded-full bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_60%)] opacity-40 blur-3xl animate-float" />
//       <div
//         className="absolute bottom-0 left-1/4 size-[60vw] max-w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_#a78bfa_0%,_transparent_60%)] opacity-30 blur-3xl animate-float"
//         style={{ animationDelay: "-4s" }}
//       />
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="relative size-[60vw] max-w-[420px] aspect-square">
//           <div className="absolute inset-0 rounded-full border border-primary/40 animate-hero-spin" />
//           <div className="absolute inset-6 rounded-full border border-white/10 animate-hero-spin-reverse" />
//           <div className="absolute inset-16 rounded-full border border-primary/30 animate-hero-spin" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export function HeroScene() {
//   const [mode, setMode] = useState<"loading" | "webgl" | "fallback">("loading");

//   useEffect(() => {
//     const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     if (reduced || !detectWebGL()) {
//       setMode("fallback");
//     } else {
//       setMode("webgl");
//     }
//   }, []);

//   if (mode === "loading") return null;
//   if (mode === "fallback") return <GradientFallback />;

//   return (
//     <div className="absolute inset-0 -z-0 pointer-events-none">
//       <div className="absolute inset-0 pointer-events-auto">
//         <Canvas
//           dpr={[1, 1.5]}
//           camera={{ position: [0, 0, 6], fov: 50 }}
//           gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: true }}
//           onCreated={({ gl }) => {
//             gl.domElement.addEventListener("webglcontextlost", (e) => {
//               e.preventDefault();
//               setMode("fallback");
//             });
//           }}
//         >
//           <Suspense fallback={null}>
//             <ambientLight intensity={0.4} />
//             <directionalLight position={[5, 5, 5]} intensity={1.2} color={PURPLE} />
//             <directionalLight position={[-5, -3, -2]} intensity={0.6} color="#5b21b6" />
//             <MorphingOrb />
//             <OrbitRings />
//             <Particles />
//           </Suspense>
//         </Canvas>
//       </div>
//     </div>
//   );
// }


import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Torus } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

const PURPLE = "#A78BFA";
const PURPLE_DEEP = "#7C3AED";

function MorphingOrb() {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.2;
    const target = hovered ? 1.15 : 1;
    ref.current.scale.lerp(new THREE.Vector3(target, target, target), 0.06);
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron
        ref={ref}
        args={[1.6, 4]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={PURPLE_DEEP}
          roughness={0.2}
          metalness={0.6}
          distort={hovered ? 0.55 : 0.38}
          speed={2.2}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
}

function OrbitRings() {
  const g1 = useRef<THREE.Mesh>(null);
  const g2 = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    const t = s.clock.getElapsedTime();
    if (g1.current) {
      g1.current.rotation.x = t * 0.3;
      g1.current.rotation.y = t * 0.4;
    }
    if (g2.current) {
      g2.current.rotation.x = -t * 0.25;
      g2.current.rotation.z = t * 0.35;
    }
  });
  return (
    <>
      <Torus ref={g1} args={[2.6, 0.008, 16, 120]}>
        <meshBasicMaterial color={PURPLE} transparent opacity={0.4} />
      </Torus>
      <Torus ref={g2} args={[3.1, 0.005, 16, 120]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.18} />
      </Torus>
    </>
  );
}

function Particles({ count = 180 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 4 + Math.random() * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.05;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#ffffff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function detectWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

function GradientFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 hero-gradient-bg" />
      <div className="absolute -top-1/4 -right-1/4 size-[80vw] max-w-[700px] rounded-full bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_60%)] opacity-40 blur-3xl animate-float" />
      <div
        className="absolute bottom-0 left-1/4 size-[60vw] max-w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_#a78bfa_0%,_transparent_60%)] opacity-30 blur-3xl animate-float"
        style={{ animationDelay: "-4s" }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative size-[60vw] max-w-[420px] aspect-square">
          <div className="absolute inset-0 rounded-full border border-primary/40 animate-hero-spin" />
          <div className="absolute inset-6 rounded-full border border-white/10 animate-hero-spin-reverse" />
          <div className="absolute inset-16 rounded-full border border-primary/30 animate-hero-spin" />
        </div>
      </div>
    </div>
  );
}

export function HeroScene() {
  const [mode, setMode] = useState<"loading" | "webgl" | "fallback">("loading");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !detectWebGL()) {
      setMode("fallback");
    } else {
      setMode("webgl");
    }
  }, []);

  if (mode === "loading") return null;
  if (mode === "fallback") return <GradientFallback />;

  return (
    <div className="absolute inset-0 -z-0 pointer-events-none">
      <div className="absolute inset-0 pointer-events-auto">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 6], fov: 50 }}
          gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: true }}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener("webglcontextlost", (e) => {
              e.preventDefault();
              setMode("fallback");
            });
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} color={PURPLE} />
            <directionalLight position={[-5, -3, -2]} intensity={0.6} color="#5b21b6" />
            <MorphingOrb />
            <OrbitRings />
            <Particles />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
