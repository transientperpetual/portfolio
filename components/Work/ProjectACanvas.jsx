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

export default function ProjectACanvas() {
  const [hovered, setHovered] = useState(false);
  return (
    <Canvas
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      shadows
      camera={{ position: [0, -2, 8], fov: 25 }}
      style={{ touchAction: "none", background: "#ffffff", borderRadius: 6 }}
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
        polar={[-Math.PI / 4, Math.PI / 6]} // Vertical limits
        azimuth={[-Math.PI / 1.4, Math.PI / 2]} // Horizontal limits
      >
        {/* <PiCase scale={18} position={[0, -1, 0]} /> */}
        <AutoRotatingModel />
      </PresentationControls>
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
      <Model scale={4.4} position={[0, -0, 0]} />
    </group>
  );
}

function Model(props) {
  const group = useRef(null);
  const { nodes, materials, animations } = useGLTF("/mini_mechanics.glb");
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
    color: 0xff00ff, // Red color
    transparent: true,
    opacity: 0.2,
  });

  const translucentMaterial2 = new THREE.MeshBasicMaterial({
    color: 0x000000, // Red color
    transparent: true,
    opacity: 0.5,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Copy_of_sssss" position={[0.029, -0.2, -0.017]}>
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
            name="occurrence_of_acrylic"
            position={[-0.029, 0.275, 0.124]}
            rotation={[0, 0.001, 0]}
          >
            <mesh
              name="acrylic"
              castShadow
              receiveShadow
              geometry={nodes.acrylic.geometry}
              material={translucentMaterial1}
            />
          </group>
          <group
            name="occurrence_of_acrylic001"
            position={[-0.029, 0.275, -0.093]}
          >
            <mesh
              name="acrylic001"
              castShadow
              receiveShadow
              geometry={nodes.acrylic001.geometry}
              material={translucentMaterial1}
            />
          </group>
          <group
            name="occurrence_of_acrylic002"
            position={[0.066, 0.275, -0.038]}
            rotation={[0, -Math.PI / 3, 0]}
          >
            <mesh
              name="acrylic002"
              castShadow
              receiveShadow
              geometry={nodes.acrylic002.geometry}
              material={translucentMaterial1}
            />
          </group>
          <group
            name="occurrence_of_acrylic003"
            position={[-0.122, 0.275, -0.037]}
            rotation={[Math.PI, -Math.PI / 3, Math.PI]}
          >
            <mesh
              name="acrylic003"
              castShadow
              receiveShadow
              geometry={nodes.acrylic003.geometry}
              material={translucentMaterial1}
            />
          </group>
          <group
            name="occurrence_of_acrylic004"
            position={[-0.122, 0.275, 0.07]}
            rotation={[0, -Math.PI / 3, 0]}
          >
            <mesh
              name="acrylic004"
              castShadow
              receiveShadow
              geometry={nodes.acrylic004.geometry}
              material={translucentMaterial1}
            />
          </group>
          <group
            name="occurrence_of_acrylic005"
            position={[0.065, 0.275, 0.07]}
            rotation={[0, Math.PI / 3, 0]}
          >
            <mesh
              name="acrylic005"
              castShadow
              receiveShadow
              geometry={nodes.acrylic005.geometry}
              material={translucentMaterial1}
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
              material={
                materials["1.000000_1.000000_1.000000_0.000000_0.000000"]
              }
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
            name="occurrence_of_lidBlock"
            position={[-0.028, 0.092, 0.017]}
            rotation={[-Math.PI, 1.04, -Math.PI]}
          >
            <mesh
              name="lidBlock"
              castShadow
              receiveShadow
              geometry={nodes.lidBlock.geometry}
              material={
                materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_lidBlock001"
            position={[-0.029, 0.092, 0.017]}
            rotation={[Math.PI, -1.047, Math.PI]}
          >
            <mesh
              name="lidBlock001"
              castShadow
              receiveShadow
              geometry={nodes.lidBlock001.geometry}
              material={
                materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_lidBlock002"
            position={[-0.029, 0.092, 0.017]}
          >
            <mesh
              name="lidBlock002"
              castShadow
              receiveShadow
              geometry={nodes.lidBlock002.geometry}
              material={
                materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
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
              material={
                materials["1.000000_1.000000_1.000000_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_midSection"
            position={[-0.029, 0.258, 0.017]}
            rotation={[0, 0.194, 0]}
          >
            <group name="midSection">
              <mesh
                name="mesh1333_mesh"
                castShadow
                receiveShadow
                geometry={nodes.mesh1333_mesh.geometry}
                material={
                  materials["1.000000_1.000000_1.000000_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh1333_mesh_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh1333_mesh_1.geometry}
                material={
                  materials["0.796078_0.823529_0.937255_0.000000_0.000000"]
                }
              />
              <mesh
                name="mesh1333_mesh_2"
                castShadow
                receiveShadow
                geometry={nodes.mesh1333_mesh_2.geometry}
                material={
                  materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
                }
              />
            </group>
          </group>
          <group
            name="occurrence_of_primeGear"
            position={[-0.029, 0.085, 0.017]}
            rotation={[-Math.PI / 2, 0, -0.583]}
          >
            <mesh
              name="primeGear"
              castShadow
              receiveShadow
              geometry={nodes.primeGear.geometry}
              material={
                materials["1.000000_0.937255_0.137255_0.000000_0.000000"]
              }
            />
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
              material={
                materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
              }
            />
          </group>
          <group
            name="occurrence_of_TopLid"
            position={[-0.029, 0.46, 0.017]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              name="TopLid"
              castShadow
              receiveShadow
              geometry={nodes.TopLid.geometry}
              material={
                materials["0.101961_0.101961_0.101961_0.000000_0.000000"]
              }
              position={[0, 0, -0.004]}
            />
          </group>
        </group>
        <group name="Copy_of_sssss002" position={[-0.01, -0.198, 0.022]}>
          <group name="final_assembly_<1>001">
            <group
              name="occurrence_of_RotorBlades001"
              position={[-0.104, 0.069, -0.063]}
              rotation={[-0.073, -0.522, 1.534]}
            >
              <group
                name="RotorBlades001"
                position={[-0.002, -0.011, 0.004]}
                rotation={[-3.136, 0, 0]}
                scale={1.217}
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
