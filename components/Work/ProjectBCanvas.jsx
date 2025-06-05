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

export default function ProjectBCanvas() {
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
        rotation={[Math.atan(1 / Math.sqrt(2)), Math.PI / 2.6, 0]} // Default rotation
        polar={[-Math.PI / 3, Math.PI / 3]} // Vertical limits
        azimuth={[-Math.PI / 1.4, Math.PI / 2]} // Horizontal limits
      >
        {/* <PiCase scale={18} position={[0, -1, 0]} /> */}
        <AutoRotatingModel />
      </PresentationControls>
      {/* <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={3} far={4} /> */}
      <Environment preset="sunset" environmentIntensity={0.6} />
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
      <PiCase scale={7} position={[0, -0.3, 0]} />
    </group>
  );
}

function PiCase(props) {
  const group = useRef(null);
  const { nodes, materials, animations } = useGLTF("/mini_cs.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play all available animations
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.reset().play();
      });
    }
  }, [actions]);

  const translucentMaterial1 = new THREE.MeshBasicMaterial({
    color: 0xff0000, // Red color
    transparent: true,
    opacity: 0.6,
  });

  const translucentMaterial2 = new THREE.MeshBasicMaterial({
    color: 0xffffff, // black color
    transparent: true,
    opacity: 0.4,
  });

  const translucentMaterial3 = new THREE.MeshBasicMaterial({
    color: 0x000000, // black color
    transparent: true,
    opacity: 0.6,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="MINI" position={[0.029, 0, -0.016]}>
          <group name="CBLid_<1>">
            <group
              name="occurrence_of_CBLid"
              position={[0.033, 0.058, -0.019]}
              rotation={[Math.PI / 2, 0, -0.524]}
            >
              <mesh
                name="CBLid"
                castShadow
                receiveShadow
                geometry={nodes.CBLid.geometry}
                material={
                  materials["0.796078_0.823529_0.937255_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_CBLid001"
              position={[0.033, 0.058, -0.019]}
              rotation={[Math.PI / 2, 0, -0.524]}
            >
              <mesh
                name="CBLid001"
                castShadow
                receiveShadow
                geometry={nodes.CBLid001.geometry}
                material={
                  materials["1.000000_1.000000_1.000000_0.000000_0.000000"]
                }
              />
            </group>
          </group>
          <group name="converterLM2596_<1>">
            <group
              name="occurrence_of_converterLM2596"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <group name="converterLM2596">
                <mesh
                  name="mesh8338_mesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8338_mesh.geometry}
                  material={
                    materials["1.000000_1.000000_1.000000_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh8338_mesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8338_mesh_1.geometry}
                  material={
                    materials["0.117647_0.117647_0.117647_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh8338_mesh_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8338_mesh_2.geometry}
                  material={
                    materials["0.501961_0.501961_0.501961_0.000000_0.000000"]
                  }
                />
              </group>
            </group>
            <group
              name="occurrence_of_converterLM2596001"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596001"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596001.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596002"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <group name="converterLM2596002">
                <mesh
                  name="mesh8358_mesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8358_mesh.geometry}
                  material={
                    materials["0.117647_0.117647_0.117647_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh8358_mesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8358_mesh_1.geometry}
                  material={
                    materials["1.000000_1.000000_1.000000_0.000000_0.000000"]
                  }
                />
              </group>
            </group>
            <group
              name="occurrence_of_converterLM2596003"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596003"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596003.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596004"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596004"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596004.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596005"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <group name="converterLM2596005">
                <mesh
                  name="mesh8401_mesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8401_mesh.geometry}
                  material={
                    materials["1.000000_1.000000_1.000000_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh8401_mesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8401_mesh_1.geometry}
                  material={
                    materials["0.117647_0.117647_0.117647_0.000000_0.000000"]
                  }
                />
              </group>
            </group>
            <group
              name="occurrence_of_converterLM2596006"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596006"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596006.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596007"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596007"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596007.geometry}
                material={
                  materials["0.078431_0.078431_0.078431_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596008"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596008"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596008.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596009"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <group name="converterLM2596009">
                <mesh
                  name="mesh8454_mesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8454_mesh.geometry}
                  material={
                    materials["0.007843_0.364706_0.823529_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh8454_mesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8454_mesh_1.geometry}
                  material={
                    materials["1.000000_1.000000_1.000000_0.000000_0.000000"]
                  }
                />
              </group>
            </group>
            <group
              name="occurrence_of_converterLM2596010"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596010"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596010.geometry}
                material={
                  materials["1.000000_1.000000_0.901961_0.000000_0.501961"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596011"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596011"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596011.geometry}
                material={
                  materials["0.078431_0.078431_0.078431_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596012"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596012"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596012.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596013"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596013"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596013.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596014"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596014"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596014.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596015"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596015"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596015.geometry}
                material={
                  materials["1.000000_0.784314_0.196078_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596016"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596016"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596016.geometry}
                material={
                  materials["0.901961_0.921569_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596017"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596017"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596017.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596018"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <group name="converterLM2596018">
                <mesh
                  name="mesh8579_mesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8579_mesh.geometry}
                  material={
                    materials["1.000000_1.000000_1.000000_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh8579_mesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8579_mesh_1.geometry}
                  material={
                    materials["0.117647_0.117647_0.117647_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh8579_mesh_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8579_mesh_2.geometry}
                  material={
                    materials["0.501961_0.501961_0.501961_0.000000_0.000000"]
                  }
                />
              </group>
            </group>
            <group
              name="occurrence_of_converterLM2596019"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596019"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596019.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596020"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596020"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596020.geometry}
                material={
                  materials["0.901961_0.921569_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596021"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596021"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596021.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596022"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596022"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596022.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596023"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <group name="converterLM2596023">
                <mesh
                  name="mesh8632_mesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8632_mesh.geometry}
                  material={
                    materials["0.078431_0.078431_0.078431_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh8632_mesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8632_mesh_1.geometry}
                  material={
                    materials["0.901961_0.921569_0.929412_0.000000_0.000000"]
                  }
                />
              </group>
            </group>
            <group
              name="occurrence_of_converterLM2596024"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596024"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596024.geometry}
                material={
                  materials["0.901961_0.921569_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596025"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <group name="converterLM2596025">
                <mesh
                  name="mesh8670_mesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8670_mesh.geometry}
                  material={
                    materials["1.000000_1.000000_1.000000_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh8670_mesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8670_mesh_1.geometry}
                  material={
                    materials["0.117647_0.117647_0.117647_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh8670_mesh_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8670_mesh_2.geometry}
                  material={
                    materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                  }
                />
              </group>
            </group>
            <group
              name="occurrence_of_converterLM2596026"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <group name="converterLM2596026">
                <mesh
                  name="mesh8709_mesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8709_mesh.geometry}
                  material={
                    materials["0.078431_0.078431_0.078431_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh8709_mesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8709_mesh_1.geometry}
                  material={
                    materials["0.901961_0.921569_0.929412_0.000000_0.000000"]
                  }
                />
              </group>
            </group>
            <group
              name="occurrence_of_converterLM2596027"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596027"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596027.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596028"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596028"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596028.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596029"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596029"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596029.geometry}
                material={
                  materials["1.000000_0.784314_0.196078_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596030"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596030"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596030.geometry}
                material={
                  materials["0.901961_0.921569_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596031"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596031"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596031.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596032"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596032"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596032.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596033"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596033"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596033.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596034"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596034"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596034.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596035"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596035"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596035.geometry}
                material={
                  materials["0.901961_0.921569_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596036"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596036"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596036.geometry}
                material={
                  materials["0.901961_0.921569_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596037"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596037"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596037.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596038"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596038"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596038.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596039"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596039"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596039.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596040"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596040"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596040.geometry}
                material={
                  materials["0.901961_0.921569_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596041"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <group name="converterLM2596041">
                <mesh
                  name="mesh8855_mesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8855_mesh.geometry}
                  material={
                    materials["1.000000_1.000000_1.000000_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh8855_mesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8855_mesh_1.geometry}
                  material={
                    materials["0.000000_0.411765_0.686275_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh8855_mesh_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8855_mesh_2.geometry}
                  material={
                    materials["0.866667_0.968627_1.000000_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh8855_mesh_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh8855_mesh_3.geometry}
                  material={
                    materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                  }
                />
              </group>
            </group>
            <group
              name="occurrence_of_converterLM2596042"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596042"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596042.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596043"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596043"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596043.geometry}
                material={
                  materials["0.901961_0.921569_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596044"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596044"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596044.geometry}
                material={
                  materials["1.000000_0.807843_0.501961_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596045"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596045"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596045.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
            <group
              name="occurrence_of_converterLM2596046"
              position={[0.06, 0.059, 0.026]}
              rotation={[0, Math.PI / 6, 0]}
            >
              <mesh
                name="converterLM2596046"
                castShadow
                receiveShadow
                geometry={nodes.converterLM2596046.geometry}
                material={
                  materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                }
              />
            </group>
          </group>
          <group name="ExhaustFan_<1>">
            <group
              name="occurrence_of_ExhaustFan001"
              position={[-0.181, 0.076, -0.059]}
              rotation={[-0.007, -0.514, -1.554]}
            >
              <group name="ExhaustFan001">
                <mesh
                  name="mesh4811_mesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh4811_mesh.geometry}
                  material={
                    materials["0.776471_0.756863_0.737255_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh4811_mesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh4811_mesh_1.geometry}
                  material={
                    materials["0.839216_0.466667_0.368627_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh4811_mesh_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh4811_mesh_2.geometry}
                  material={
                    materials["0.639216_0.666667_0.678431_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh4811_mesh_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh4811_mesh_3.geometry}
                  material={
                    materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
                  }
                />
              </group>
            </group>
          </group>
          <group name="final_assembly_<1>">
            <group
              name="occurrence_of_MotorHouse"
              position={[-0.103, 0.069, -0.062]}
              rotation={[0, -Math.PI / 6, Math.PI / 2]}
            >
              <group name="MotorHouse">
                <mesh
                  name="mesh1417_mesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh1417_mesh.geometry}
                  material={
                    materials["0.776471_0.756863_0.737255_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh1417_mesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh1417_mesh_1.geometry}
                  material={
                    materials["0.839216_0.466667_0.368627_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh1417_mesh_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh1417_mesh_2.geometry}
                  material={
                    materials["0.639216_0.666667_0.678431_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh1417_mesh_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh1417_mesh_3.geometry}
                  material={
                    materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
                  }
                />
              </group>
            </group>
            <group
              name="occurrence_of_RotorBlades"
              position={[-0.104, 0.069, -0.063]}
              rotation={[-0.073, -0.522, 1.534]}
            >
              <group name="RotorBlades">
                <mesh
                  name="mesh4399_mesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh4399_mesh.geometry}
                  material={
                    materials["0.796078_0.823529_0.937255_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh4399_mesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh4399_mesh_1.geometry}
                  material={
                    materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                  }
                />
              </group>
            </group>
          </group>
          <group
            name="occurrence_of_28byj-48_5v_stepper_motor"
            position={[-0.007, 0.078, 0.062]}
            rotation={[0, 0.421, 0]}
          >
            <group name="28byj-48_5v_stepper_motor">
              <mesh
                name="mesh7805_mesh"
                castShadow
                receiveShadow
                geometry={nodes.mesh7805_mesh.geometry}
                material={
                  materials["0.901961_0.745098_0.105882_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh7805_mesh_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh7805_mesh_1.geometry}
                material={
                  materials["0.250980_0.250980_0.250980_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh7805_mesh_2"
                castShadow
                receiveShadow
                geometry={nodes.mesh7805_mesh_2.geometry}
                material={
                  materials["1.000000_1.000000_1.000000_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh7805_mesh_3"
                castShadow
                receiveShadow
                geometry={nodes.mesh7805_mesh_3.geometry}
                material={
                  materials["0.184314_0.411765_1.000000_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh7805_mesh_4"
                castShadow
                receiveShadow
                geometry={nodes.mesh7805_mesh_4.geometry}
                material={
                  materials["0.501961_0.501961_0.501961_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh7805_mesh_5"
                castShadow
                receiveShadow
                geometry={nodes.mesh7805_mesh_5.geometry}
                material={
                  materials["1.000000_0.980392_0.611765_0.000000_0.000000"]
                }
              />
            </group>
          </group>
          <group
            name="occurrence_of_acryclicHold"
            position={[-0.029, 0.09, 0.017]}
          >
            <mesh
              name="acryclicHold"
              castShadow
              receiveShadow
              geometry={nodes.acryclicHold.geometry}
              material={
                materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_CGHolder"
            position={[-0.029, 0.089, 0.017]}
            rotation={[-Math.PI, 1.41, 0]}
          >
            <mesh
              name="CGHolder"
              castShadow
              receiveShadow
              geometry={nodes.CGHolder.geometry}
              material={
                materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_CircuitBed"
            position={[0.043, 0.059, -0.023]}
            rotation={[0, -Math.PI / 3, 0]}
          >
            <mesh
              name="CircuitBed"
              castShadow
              receiveShadow
              geometry={nodes.CircuitBed.geometry}
              material={translucentMaterial1}
            />
          </group>
          <group
            name="occurrence_of_circumferenceGear"
            position={[-0.015, 0.082, -0.02]}
            rotation={[-Math.PI / 2, 0, -1.404]}
          >
            <mesh
              name="circumferenceGear"
              castShadow
              receiveShadow
              geometry={nodes.circumferenceGear.geometry}
              material={
                materials["0.694118_0.101961_0.101961_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_circumferenceGear001"
            position={[-0.068, 0.082, 0.023]}
            rotation={[-Math.PI / 2, 0, 1.418]}
          >
            <mesh
              name="circumferenceGear001"
              castShadow
              receiveShadow
              geometry={nodes.circumferenceGear001.geometry}
              material={
                materials["0.694118_0.101961_0.101961_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_fogChamber"
            position={[-0.029, -0.017, 0.017]}
            rotation={[-Math.PI / 2, 0, 0.559]}
          >
            <mesh
              name="fogChamber"
              castShadow
              receiveShadow
              geometry={nodes.fogChamber.geometry}
              material={
                materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_FS-MB"
            position={[-0.03, 0.089, 0.014]}
            rotation={[-Math.PI, 1.034, 0]}
          >
            <mesh
              name="FS-MB"
              castShadow
              receiveShadow
              geometry={nodes["FS-MB"].geometry}
              material={
                materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_FS-MB001"
            position={[-0.056, 0.089, 0.008]}
            rotation={[0, -0.579, -Math.PI]}
          >
            <mesh
              name="FS-MB001"
              castShadow
              receiveShadow
              geometry={nodes["FS-MB001"].geometry}
              material={
                materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_FS-MB002"
            position={[0.064, 0.089, 0.02]}
            rotation={[-Math.PI, 1.071, 0]}
          >
            <mesh
              name="FS-MB002"
              castShadow
              receiveShadow
              geometry={nodes["FS-MB002"].geometry}
              material={
                materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_gear3"
            position={[-0.011, 0.083, 0.054]}
            rotation={[Math.PI, -0.421, Math.PI]}
          >
            <mesh
              name="gear3"
              castShadow
              receiveShadow
              geometry={nodes.gear3.geometry}
              material={
                materials["0.694118_0.101961_0.101961_0.000000_0.000000"]
              }
              position={[0, 0.001, 0]}
            />
          </group>
          <group
            name="occurrence_of_gearFixature"
            position={[-0.029, 0.079, 0.017]}
            rotation={[0, -0.363, 0]}
          >
            <mesh
              name="gearFixature"
              castShadow
              receiveShadow
              geometry={nodes.gearFixature.geometry}
              material={
                materials["0.007843_0.239216_0.823529_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_masterBed"
            position={[-0.029, 0.09, 0.017]}
            rotation={[Math.PI / 2, 0, -Math.PI / 3]}
          >
            <mesh
              name="masterBed"
              castShadow
              receiveShadow
              geometry={nodes.masterBed.geometry}
              material={translucentMaterial2}
            >
              <Edges scale={1} color="black" threshold={15} lineWidth={1} />
            </mesh>
          </group>
          <group
            name="occurrence_of_primeGear"
            position={[-0.029, 0.085, 0.017]}
            rotation={[-Math.PI / 2, 0, -0.583]}
          >
            <group name="primeGear">
              <mesh
                name="mesh697_mesh"
                castShadow
                receiveShadow
                geometry={nodes.mesh697_mesh.geometry}
                material={
                  materials["1.000000_0.937255_0.137255_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh697_mesh_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh697_mesh_1.geometry}
                material={
                  materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh697_mesh_2"
                castShadow
                receiveShadow
                geometry={nodes.mesh697_mesh_2.geometry}
                material={
                  materials["1.000000_1.000000_1.000000_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh697_mesh_3"
                castShadow
                receiveShadow
                geometry={nodes.mesh697_mesh_3.geometry}
                material={
                  materials["0.796078_0.823529_0.937255_0.000000_0.000000"]
                }
              />
            </group>
          </group>
          <group
            name="occurrence_of_reservoir"
            position={[-0.029, 0.002, 0.017]}
            rotation={[Math.PI, -1.004, Math.PI]}
          >
            <group name="reservoir">
              <mesh
                name="mesh8193_mesh"
                castShadow
                receiveShadow
                geometry={nodes.mesh8193_mesh.geometry}
                material={
                  materials["0.286275_0.662745_0.329412_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh8193_mesh_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh8193_mesh_1.geometry}
                material={
                  materials["0.796078_0.823529_0.937255_0.000000_0.000000"]
                }
              />
            </group>
          </group>
          <group
            name="occurrence_of_reservoirPipe"
            position={[-0.026, -0.033, -0.037]}
            rotation={[-Math.PI / 2, 0, -0.551]}
          >
            <mesh
              name="reservoirPipe"
              castShadow
              receiveShadow
              geometry={nodes.reservoirPipe.geometry}
              material={
                materials["0.796078_0.823529_0.937255_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_reservoirPump"
            position={[-0.063, -0.051, -0.045]}
            rotation={[-Math.PI, 1.554, -Math.PI]}
          >
            <group name="reservoirPump">
              <mesh
                name="mesh8036_mesh"
                castShadow
                receiveShadow
                geometry={nodes.mesh8036_mesh.geometry}
                material={
                  materials["0.007843_0.239216_0.823529_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh8036_mesh_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh8036_mesh_1.geometry}
                material={
                  materials["0.301961_0.301961_0.301961_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh8036_mesh_2"
                castShadow
                receiveShadow
                geometry={nodes.mesh8036_mesh_2.geometry}
                material={
                  materials["0.501961_0.501961_0.501961_0.000000_0.000000"]
                }
              />
            </group>
          </group>
          <group
            name="occurrence_of_stepperFixature"
            position={[-0.008, 0.089, 0.061]}
            rotation={[0, 0.397, Math.PI]}
          >
            <mesh
              name="stepperFixature"
              castShadow
              receiveShadow
              geometry={nodes.stepperFixature.geometry}
              material={
                materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_tank_-_Copy"
            position={[-0.029, -0.064, 0.017]}
          >
            <mesh
              name="tank_-_Copy"
              castShadow
              receiveShadow
              geometry={nodes["tank_-_Copy"].geometry}
              material={translucentMaterial3}
            >
              <Edges scale={1} color="black" threshold={15} lineWidth={1} />
            </mesh>
          </group>
          <group
            name="occurrence_of_ventilationCover"
            position={[-0.099, 0.054, 0.006]}
            rotation={[Math.PI / 2, 0, -Math.PI / 3]}
          >
            <mesh
              name="ventilationCover"
              castShadow
              receiveShadow
              geometry={nodes.ventilationCover.geometry}
              material={
                materials["1.000000_1.000000_1.000000_0.000000_0.000000"]
              }
              position={[0, 0, 0.005]}
            />
          </group>
          <group
            name="occurrence_of_Venus32PCB"
            position={[-0.654, 0.05, 5.18]}
            rotation={[-Math.PI / 2, 0, 2.086]}
          >
            <group name="Venus32PCB">
              <mesh
                name="mesh38_mesh"
                castShadow
                receiveShadow
                geometry={nodes.mesh38_mesh.geometry}
                material={
                  materials["0.917647_0.917647_0.917647_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh38_mesh_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh38_mesh_1.geometry}
                material={
                  materials["0.972549_0.529412_0.003922_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh38_mesh_2"
                castShadow
                receiveShadow
                geometry={nodes.mesh38_mesh_2.geometry}
                material={
                  materials["0.768627_0.886275_0.952941_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh38_mesh_3"
                castShadow
                receiveShadow
                geometry={nodes.mesh38_mesh_3.geometry}
                material={
                  materials["0.615686_0.811765_0.929412_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh38_mesh_4"
                castShadow
                receiveShadow
                geometry={nodes.mesh38_mesh_4.geometry}
                material={
                  materials["0.498039_0.498039_0.498039_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh38_mesh_5"
                castShadow
                receiveShadow
                geometry={nodes.mesh38_mesh_5.geometry}
                material={
                  materials["0.980392_0.713725_0.003922_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh38_mesh_6"
                castShadow
                receiveShadow
                geometry={nodes.mesh38_mesh_6.geometry}
                material={
                  materials["0.647059_0.647059_0.647059_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh38_mesh_7"
                castShadow
                receiveShadow
                geometry={nodes.mesh38_mesh_7.geometry}
                material={
                  materials["0.231373_0.380392_0.705882_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh38_mesh_8"
                castShadow
                receiveShadow
                geometry={nodes.mesh38_mesh_8.geometry}
                material={
                  materials["0.910000_0.910000_0.910000_0.000000_0.000000"]
                }
              />
            </group>
          </group>
        </group>
        <group name="Copy_of_sssss001" position={[0.032, 0.006, -0.083]}>
          <group name="final_assembly_<1>001">
            <group
              name="occurrence_of_RotorBlades001"
              position={[-0.104, 0.069, -0.063]}
              rotation={[-0.073, -0.522, 1.534]}
            >
              <group
                name="RotorBlades001"
                position={[-0.013, -0.027, 0.116]}
                rotation={[-3.139, 0, 0.005]}
                scale={1.281}
              >
                <mesh
                  name="mesh4399_mesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh4399_mesh.geometry}
                  material={
                    materials["0.796078_0.823529_0.937255_0.000000_0.000000"]
                  }
                />
                <mesh
                  name="mesh4399_mesh_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh4399_mesh_1.geometry}
                  material={
                    materials["0.901961_0.917647_0.929412_0.000000_0.000000"]
                  }
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
