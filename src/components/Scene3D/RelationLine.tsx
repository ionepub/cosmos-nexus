import { useMemo, useRef } from 'react';
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { Relation, PositionedPerson } from '@/types/graph';

interface RelationLineProps {
  relation: Relation;
  positionedNodes: PositionedPerson[];
  animatedNodes: Map<string, Vector3>;
}

export function RelationLine({ relation, positionedNodes, animatedNodes }: RelationLineProps) {
  const lineRef = useRef<any>(null);

  const sourceNode = positionedNodes.find(n => n.id === relation.source);
  const targetNode = positionedNodes.find(n => n.id === relation.target);

  const baseOpacity = 0.15 + relation.strength * 0.25;
  const lineWidth = 0.5 + relation.strength * 1.5;
  const twinkleSpeed = 1.5 + Math.random();
  const twinkleOffset = Math.random() * Math.PI * 2;

  useFrame((state) => {
    if (lineRef.current && sourceNode && targetNode) {
      const startPos = animatedNodes.get(sourceNode.id) || sourceNode.position;
      const endPos = animatedNodes.get(targetNode.id) || targetNode.position;
      lineRef.current.geometry.setFromPoints([startPos, endPos]);
      lineRef.current.geometry.attributes.position.needsUpdate = true;

      const twinkle = 0.8 + 0.2 * Math.sin(state.clock.elapsedTime * twinkleSpeed + twinkleOffset);
      lineRef.current.material.opacity = baseOpacity * twinkle;
    }
  });

  return (
    <line ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial
        color="#FFFFFF"
        transparent
        opacity={baseOpacity}
        linewidth={lineWidth}
      />
    </line>
  );
}