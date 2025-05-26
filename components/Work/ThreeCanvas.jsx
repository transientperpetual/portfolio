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

export default function App() {
  const [hovered, setHovered] = useState(false);
  return (
    <Canvas
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      shadows
      camera={{ position: [0, -2, 8], fov: 25 }}
      style={{ touchAction: "none", background: "#E0E0E0" }}
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
      <axesHelper args={[5]} />
      {/* <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={3} far={4} /> */}
      <Environment preset="city" />
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
      <PiCase scale={18} position={[0, -0.6, 0]} />
    </group>
  );
}

function PiCase(props) {
  const group = useRef(null);
  const { nodes, materials, animations } = useGLTF("/pi.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play all available animations
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.reset().play();
      });
    }
  }, [actions]);

  const translucentMaterial1 =
    materials["0.101961_0.101961_0.101961_0.000000_0.000000"].clone();
  translucentMaterial1.transparent = true;
  translucentMaterial1.opacity = 0.8;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="base" position={[0, 0.014, 0]} rotation={[-3.14, 0, 0]}>
          <mesh
            name="mesh24_mesh"
            castShadow
            receiveShadow
            geometry={nodes.mesh24_mesh.geometry}
            material={materials["0.101961_0.101961_0.101961_0.000000_0.000000"]}
            showEdges={true}
          />
          <mesh
            name="mesh24_mesh_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh24_mesh_1.geometry}
            material={materials["1.000000_1.000000_1.000000_0.000000_0.000000"]}
          >
            <Edges scale={1} color="black" threshold={15} lineWidth={1} />
          </mesh>
        </group>
        <group name="motor_house" position={[0.014, 0.075, -0.004]}>
          <mesh
            name="mesh267_mesh_3"
            castShadow
            receiveShadow
            geometry={nodes.mesh267_mesh_3.geometry}
            material={materials["0.101961_0.101961_0.101961_0.000000_0.000000"]}
          />
        </group>
        <mesh
          name="top"
          castShadow
          receiveShadow
          geometry={nodes.top.geometry}
          material={translucentMaterial1}
          position={[0, 0.118, 0]}
        >
          <Edges scale={1} color="black" threshold={15} lineWidth={1} />
        </mesh>
        <group name="fan_blade" position={[0.014, 0.075, -0.004]}>
          <mesh
            name="mesh3480_mesh"
            castShadow
            receiveShadow
            geometry={nodes.mesh3480_mesh.geometry}
            material={materials["0.796078_0.823529_0.937255_0.000000_0.000000"]}
          />
        </group>
        <group
          name="pi_4"
          position={[0, 0.046, 0]}
          rotation={[Math.PI, -0.001, Math.PI]}
        >
          <group name="254_mm_DUPONT_MALE_PIN_HEADER,_IO,_2X20,_RPi4ModelB_<1>">
            <group
              name="occurrence_of_254_mm_DUPONT_MALE_PIN_HEADER,_IO,_2X20,_RPi012"
              position={[-0.01, 0.001, -0.024]}
            >
              <mesh
                name="254_mm_DUPONT_MALE_PIN_HEADER,_IO,_2X20,_RPi4ModelB013"
                castShadow
                receiveShadow
                geometry={
                  nodes[
                    "254_mm_DUPONT_MALE_PIN_HEADER,_IO,_2X20,_RPi4ModelB013"
                  ].geometry
                }
                material={
                  materials["0.250980_0.250980_0.250980_0.000000_0.001"]
                }
              />
            </group>
          </group>

          <group name="Broadcom_BCM2711B0_CPU,_RPi4ModelB_<1>">
            <group
              name="occurrence_of_Broadcom_BCM2711B0_CPU,_RPi4ModelB"
              position={[-0.013, 0.001, -0.004]}
            >
              <mesh
                name="Broadcom_BCM2711B0_CPU,_RPi4ModelB"
                castShadow
                receiveShadow
                geometry={nodes["Broadcom_BCM2711B0_CPU,_RPi4ModelB"].geometry}
                material={
                  materials["0.776471_0.756863_0.737255_0.000000_0.002"]
                }
              />
            </group>
            <group
              name="occurrence_of_Broadcom_BCM2711B0_CPU,_RPi4ModelB001"
              position={[-0.013, 0.001, -0.004]}
            />
          </group>

          <group name="Microphone_Plug,_RPi4ModelB_<1>">
            <group
              name="occurrence_of_Microphone_Plug,_RPi4ModelB002"
              position={[0.011, 0.001, 0.022]}
            >
              <mesh
                name="Microphone_Plug,_RPi4ModelB002"
                castShadow
                receiveShadow
                geometry={nodes["Microphone_Plug,_RPi4ModelB002"].geometry}
                material={
                  materials["0.101961_0.101961_0.101961_0.000000_0.002"]
                }
              />
            </group>
          </group>
          <group
            name="occurrence_of_2X_USB20_PORTS,_RPi4ModelB"
            position={[0.037, 0.001, 0.019]}
          >
            <group name="2X_USB20_PORTS,_RPi4ModelB">
              <mesh
                name="mesh694_mesh001"
                castShadow
                receiveShadow
                geometry={nodes.mesh694_mesh001.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.002"]
                }
              />
              <mesh
                name="mesh694_mesh001_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh694_mesh001_1.geometry}
                material={
                  materials["0.501961_0.501961_0.501961_0.000000_0.002"]
                }
              />
              <mesh
                name="mesh694_mesh001_2"
                castShadow
                receiveShadow
                geometry={nodes.mesh694_mesh001_2.geometry}
                material={
                  materials["1.000000_0.807843_0.501961_0.000000_0.001"]
                }
              />
            </group>
          </group>
          <group
            name="occurrence_of_2X_USB30_PORTS,_RPi4ModelB"
            position={[0.037, 0.001, 0.001]}
          >
            <group name="2X_USB30_PORTS,_RPi4ModelB">
              <mesh
                name="mesh4169_mesh001"
                castShadow
                receiveShadow
                geometry={nodes.mesh4169_mesh001.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.002"]
                }
              />
              <mesh
                name="mesh4169_mesh001_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh4169_mesh001_1.geometry}
                material={
                  materials["0.007843_0.235294_0.823529_0.000000_0.001"]
                }
              />
              <mesh
                name="mesh4169_mesh001_2"
                castShadow
                receiveShadow
                geometry={nodes.mesh4169_mesh001_2.geometry}
                material={
                  materials["1.000000_0.807843_0.501961_0.000000_0.001"]
                }
              />
            </group>
          </group>
          <group
            name="occurrence_of_91D77_D9WHV_778K,_4_GB_LPDDR4_SDRAM,_RPi4ModelB"
            position={[0.002, 0.001, -0.004]}
          >
            <group name="91D77_D9WHV_778K,_4_GB_LPDDR4_SDRAM,_RPi4ModelB">
              <mesh
                name="mesh2235_mesh001"
                castShadow
                receiveShadow
                geometry={nodes.mesh2235_mesh001.geometry}
                material={
                  materials["1.000000_1.000000_1.000000_0.000000_0.002"]
                }
              />
              <mesh
                name="mesh2235_mesh001_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh2235_mesh001_1.geometry}
                material={
                  materials["0.501961_0.501961_0.501961_0.000000_0.002"]
                }
              />
            </group>
          </group>

          <group
            name="occurrence_of_Cypress_CYW43455_Wireless_Module_Cover,_RPi4Model"
            position={[-0.03, 0.001, -0.014]}
          >
            <mesh
              name="Cypress_CYW43455_Wireless_Module_Cover,_RPi4ModelB"
              castShadow
              receiveShadow
              geometry={
                nodes["Cypress_CYW43455_Wireless_Module_Cover,_RPi4ModelB"]
                  .geometry
              }
              material={materials["0.639216_0.666667_0.678431_0.000000_0.002"]}
            />
          </group>
          <group
            name="occurrence_of_Female_Micro_HDMI_Connector,_RPi4ModelB"
            position={[-0.016, 0.001, 0.027]}
          >
            <group name="Female_Micro_HDMI_Connector,_RPi4ModelB">
              <mesh
                name="mesh2689_mesh001"
                castShadow
                receiveShadow
                geometry={nodes.mesh2689_mesh001.geometry}
                material={
                  materials["0.968627_0.878431_0.600000_0.000000_0.001"]
                }
              />
              <mesh
                name="mesh2689_mesh001_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh2689_mesh001_1.geometry}
                material={
                  materials["0.901961_0.901961_0.901961_0.000000_0.001"]
                }
              />
            </group>
          </group>
          <group
            name="occurrence_of_Female_Micro_HDMI_Connector,_RPi4ModelB001"
            position={[-0.003, 0.001, 0.027]}
          >
            <group name="Female_Micro_HDMI_Connector,_RPi4ModelB001">
              <mesh
                name="mesh2689_mesh001"
                castShadow
                receiveShadow
                geometry={nodes.mesh2689_mesh001.geometry}
                material={
                  materials["0.968627_0.878431_0.600000_0.000000_0.001"]
                }
              />
              <mesh
                name="mesh2689_mesh001_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh2689_mesh001_1.geometry}
                material={
                  materials["0.901961_0.901961_0.901961_0.000000_0.001"]
                }
              />
            </group>
          </group>
          <group
            name="occurrence_of_Female_USB_Type_C_Connector,_RPi4ModelB"
            position={[-0.031, 0.001, 0.027]}
          >
            <group name="Female_USB_Type_C_Connector,_RPi4ModelB">
              <mesh
                name="mesh297_mesh001"
                castShadow
                receiveShadow
                geometry={nodes.mesh297_mesh001.geometry}
                material={
                  materials["0.901961_0.901961_0.901961_0.000000_0.001"]
                }
              />
              <mesh
                name="mesh297_mesh001_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh297_mesh001_1.geometry}
                material={
                  materials["0.968627_0.878431_0.600000_0.000000_0.001"]
                }
              />
            </group>
          </group>
          <group
            name="occurrence_of_Gigabit_Ethernet_Port,_RPi4ModelB"
            position={[0.045, 0.008, -0.018]}
            rotation={[0, 1.571, 0]}
          >
            <group name="Gigabit_Ethernet_Port,_RPi4ModelB">
              <mesh
                name="mesh1769_mesh001"
                castShadow
                receiveShadow
                geometry={nodes.mesh1769_mesh001.geometry}
                material={
                  materials["0.000000_0.752941_0.000000_0.000000_0.001"]
                }
              />
              <mesh
                name="mesh1769_mesh001_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh1769_mesh001_1.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.002"]
                }
              />
              <mesh
                name="mesh1769_mesh001_2"
                castShadow
                receiveShadow
                geometry={nodes.mesh1769_mesh001_2.geometry}
                material={
                  materials["1.000000_1.000000_0.000000_0.000000_0.001"]
                }
              />
              <mesh
                name="mesh1769_mesh001_3"
                castShadow
                receiveShadow
                geometry={nodes.mesh1769_mesh001_3.geometry}
                material={
                  materials["1.000000_0.807843_0.501961_0.000000_0.001"]
                }
              />
              <mesh
                name="mesh1769_mesh001_4"
                castShadow
                receiveShadow
                geometry={nodes.mesh1769_mesh001_4.geometry}
                material={
                  materials["0.501961_0.501961_0.501961_0.000000_0.002"]
                }
              />
            </group>
          </group>

          <group name="occurrence_of_PCB,_RPi4ModelB">
            <group name="PCB,_RPi4ModelB">
              <mesh
                name="mesh6155_mesh001"
                castShadow
                receiveShadow
                geometry={nodes.mesh6155_mesh001.geometry}
                material={
                  materials["0.000000_0.752941_0.000000_0.000000_0.001"]
                }
              />
              <mesh
                name="mesh6155_mesh001_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh6155_mesh001_1.geometry}
                material={
                  materials["1.000000_1.000000_0.501961_0.000000_0.001"]
                }
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

// function Watch(props) {
//   const { nodes, materials } = useGLTF('/watch-v1.glb')
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Object005_glass_0.geometry}>
//         <meshStandardMaterial {...materials.glass} wireframe />
//         <Html scale={100} rotation={[Math.PI / 2, 0, 0]} position={[180, -350, 50]} transform occlude>
//           <div className="annotation">
//             6.550 $ <span style={{ fontSize: '1.5em' }}>🥲</span>
//           </div>
//         </Html>
//       </mesh>
//       <mesh castShadow receiveShadow geometry={nodes.Object006_watch_0.geometry}>
//         <meshStandardMaterial {...materials.watch} wireframe />
//       </mesh>
//     </group>
//   )
// }

// function Watch(props) {
//   const { nodes } = useGLTF('/rasp.glb')

//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Object_2.geometry} rotation={[-Math.PI / 2, 0, 0]}>
//         {/* Make surface invisible */}
//         <meshBasicMaterial transparent opacity={0} />
//         {/* Draw only the edges */}
//         <Edges scale={1.01} threshold={15} color="black" />
//       </mesh>
//     </group>
//   )
// }
