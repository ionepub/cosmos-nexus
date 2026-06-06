import { useRef, useState, useMemo, useEffect } from 'react';
import { Mesh, Group, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { PositionedPerson } from '@/types/graph';

interface PersonNodeProps {
  person: PositionedPerson;
  isCore: boolean;
  onClick: (person: PositionedPerson) => void;
  onPositionUpdate: (id: string, position: Vector3) => void;
}

export function PersonNode({ person, isCore, onClick, onPositionUpdate }: PersonNodeProps) {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const baseSize = isCore ? 0.25 : 0.12 + person.importance * 0.08;
  const maxSize = Math.max(1, person.connectionCount);

  const orbitSpeed = useMemo(() => 0.05 + Math.random() * 0.1, []);
  const orbitRadius = person.position.length();
  const orbitAngle = useMemo(() => Math.atan2(person.position.x, person.position.z), []);
  const twinkleSpeed = useMemo(() => 2 + Math.random() * 3, []);
  const twinkleOffset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (groupRef.current) {
      if (!hovered) {
        if (!isCore) {
          const currentAngle = orbitAngle + state.clock.elapsedTime * orbitSpeed;
          const currentRadius = orbitRadius + Math.sin(state.clock.elapsedTime * 0.5 + twinkleOffset) * 0.2;

          groupRef.current.position.x = currentRadius * Math.sin(currentAngle);
          groupRef.current.position.y = person.position.y + Math.sin(state.clock.elapsedTime * 0.8 + twinkleOffset) * 0.2;
          groupRef.current.position.z = currentRadius * Math.cos(currentAngle);
        } else {
          groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
        }
      }

      onPositionUpdate(person.id, groupRef.current.position.clone());
    }

    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x += 0.001;
    }
  });

  const brightness = Math.min(0.3 + (person.connectionCount / maxSize) * 0.7, 1);
  const opacity = 0.5 + brightness * 0.4;
  const baseEmissiveIntensity = 0.5 + brightness * 0.7;

  const size = hovered ? baseSize * 1.6 : baseSize;

  const animatedOpacity = hovered ? opacity : opacity * (0.8 + 0.2 * Math.sin(Date.now() * 0.003 + twinkleOffset));
  const animatedEmissiveIntensity = hovered ? 1.2 + brightness * 0.3 : baseEmissiveIntensity * (0.85 + 0.15 * Math.sin(Date.now() * 0.004 + twinkleOffset));

  return (
    <group ref={groupRef} position={person.position}>
      <mesh
        ref={meshRef}
        scale={size}
        onClick={() => onClick(person)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive="#FFFFFF"
          emissiveIntensity={animatedEmissiveIntensity}
          transparent
          opacity={animatedOpacity}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>

      <pointLight
        position={[0, 0, 0]}
        color="#FFFFFF"
        intensity={0.8 + brightness * 1.5}
        distance={8 + person.connectionCount * 2}
      />

      {hovered && (
        <Text
          position={[0, baseSize * 3 + 0.5, 0]}
          fontSize={0.35}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#050510"
        >
          {person.name}
        </Text>
      )}
    </group>
  );
}