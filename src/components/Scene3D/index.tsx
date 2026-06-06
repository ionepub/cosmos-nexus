import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GalaxyBackground } from './GalaxyBackground';
import { PersonNode } from './PersonNode';
import { RelationLine } from './RelationLine';
import { useGravityLayout } from '@/hooks/useGravityLayout';
import { GraphData, PositionedPerson } from '@/types/graph';
import { useState, useRef, useCallback } from 'react';

interface Scene3DProps {
  data: GraphData;
  centerNodeId?: string;
  onNodeClick?: (person: PositionedPerson) => void;
}

export function Scene3D({ data, centerNodeId, onNodeClick }: Scene3DProps) {
  const positionedNodes = useGravityLayout(data.nodes, data.links, centerNodeId);
  const animatedNodes = useRef<Map<string, THREE.Vector3>>(new Map());

  const handlePositionUpdate = useCallback((id: string, position: THREE.Vector3) => {
    animatedNodes.current.set(id, position);
  }, []);

  return (
    <div className="w-full h-screen bg-space-900">
      <Canvas
        camera={{ position: [0, 20, 35], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#050510']} />
        <fog attach="fog" args={['#050510', 20, 80]} />

        <ambientLight intensity={0.15} />
        <pointLight position={[8, 8, 8]} intensity={0.8} />
        <pointLight position={[-8, -8, -8]} intensity={0.4} />

        <OrbitControls
          enableDamping
          dampingFactor={0.08}
          maxDistance={80}
          minDistance={8}
          maxPolarAngle={Math.PI}
        />

        <GalaxyBackground />

        {data.links.map((link, index) => (
          <RelationLine
            key={index}
            relation={link}
            positionedNodes={positionedNodes}
            animatedNodes={animatedNodes.current}
          />
        ))}

        {positionedNodes.map((person) => (
          <PersonNode
            key={person.id}
            person={person}
            isCore={person.id === centerNodeId}
            onClick={onNodeClick || (() => {})}
            onPositionUpdate={handlePositionUpdate}
          />
        ))}
      </Canvas>
    </div>
  );
}