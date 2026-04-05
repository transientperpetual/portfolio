"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Edges,
  PresentationControls,
  Environment,
  ContactShadows,
  useAnimations,
  OrbitControls,
} from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

export default function ProjectDCanvas() {
  const [hovered, setHovered] = useState(false);
  return (
    <Canvas
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      shadows
      camera={{ position: [0, -2, 8], fov: 25 }}
      style={{ touchAction: "none", background: "#EBEBEB" }}
    >
      <ambientLight intensity={0} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={2048}
        castShadow
      />
      {/* <OrbitControls /> */}
      <PresentationControls
        global
        enabled={true} // the controls can be disabled by setting this to false
        cursor={true}
        snap={true}
        config={{ mass: 2, tension: 500 }} // Spring config
        rotation={[Math.atan(1 / Math.sqrt(2)), Math.PI / 4, 0]} // Default rotation
        polar={[-Math.PI / 3, Math.PI / 3]} // Vertical limits
        azimuth={[-Math.PI / 1.4, Math.PI / 2]} // Horizontal limits
      >
        {/* <PiCase scale={18} position={[0, -1, 0]} /> */}
        <AutoRotatingModel />
      </PresentationControls>
      {/* <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={3} far={4} /> */}
      <Environment preset="sunset" environmentIntensity={1.2} />
    </Canvas>
  );
}

const edgeMaterial = new THREE.MeshBasicMaterial({
  color: "black",
  wireframe: true,
});

function AutoRotatingModel() {
  const groupRef = useRef();

  // Auto-rotate every frame
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01 * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <CB350Guard scale={2.6} position={[0, -0.3, 0]} />
    </group>
  );
}

function CB350Guard(props) {
  const group = useRef(null);
  const { nodes, materials, animations } = useGLTF("/cb350_guard.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play all available animations
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.reset().play();
      });
    }
  }, [actions]);

  // const translucentMaterial1 =
  //   materials["0.101961_0.101961_0.101961_0.000000_0.000000"].clone();
  // translucentMaterial1.transparent = true;
  // translucentMaterial1.opacity = 0.6;

 return (
    <group {...props} dispose={null}>
      <group scale={0.001}>
        <group scale={10}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mat_02_mat_02_0001.geometry}
            material={materials['mat_02.001']}
            position={[0, -46.199, -3.64]}
          />
        </group>
      </group>
      <group position={[0, 0, 0.37]} rotation={[-Math.PI / 2, 0, 0]} scale={0.004}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001.geometry}
          material={materials['Scene_-_Root.001']}
          position={[-2.864, 8.9, 39.571]}
          rotation={[-Math.PI, 1.566, -Math.PI]}
        />
      </group>
      <group position={[0, -0.151, -0.08]} rotation={[-Math.PI / 2, 0, 0]} scale={0.004}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2002.geometry}
          material={materials['Scene_-_Root.002']}
          position={[11.424, 8.9, 39.571]}
          rotation={[-Math.PI, 1.566, -Math.PI]}
        />
      </group>
      <group position={[0.16, -0.18, 0.287]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['crash_guard_single_mesh_revamped_del-1'].geometry}
          material={materials.mattesteel}
          position={[-0.127, 0.138, -0.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['slider(acetal)-1'].geometry}
          material={materials.blackmediumglossplastic}
          position={[0.114, 0.138, -0.039]}
          rotation={[0.209, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['slider_fastener-1'].geometry}
          material={materials.polishedsteel}
          position={[0.156, 0.138, -0.039]}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['bike_chassis-1'].geometry}
        material={materials.defaultplastic}
        position={[0.004, -0.482, 0.823]}
      />
    </group>
  )

}
