import { useMemo } from 'react';
import * as THREE from 'three';
import { Person, Relation, PositionedPerson } from '@/types/graph';

export function useGravityLayout(
  nodes: Person[],
  links: Relation[],
  centerNodeId?: string
): PositionedPerson[] {
  return useMemo(() => {
    if (!nodes.length) return [];

    const connectionCountMap = new Map<string, number>();
    nodes.forEach(node => connectionCountMap.set(node.id, 0));
    links.forEach(link => {
      connectionCountMap.set(link.source, (connectionCountMap.get(link.source) || 0) + 1);
      connectionCountMap.set(link.target, (connectionCountMap.get(link.target) || 0) + 1);
    });

    const maxConnections = Math.max(...Array.from(connectionCountMap.values()));

    const positioned = nodes.map((node) => {
      const position = new THREE.Vector3();

      if (node.id === centerNodeId) {
        return {
          ...node,
          position: new THREE.Vector3(0, 0, 0),
          connectionCount: connectionCountMap.get(node.id) || 0
        };
      }

      const randomTheta = Math.random() * Math.PI * 2;
      const randomPhi = Math.acos((Math.random() * 2) - 1);

      const baseOrbit = 10;
      const orbitRadius = baseOrbit + (1 - node.importance) * 12 + Math.random() * 3;

      position.x = orbitRadius * Math.sin(randomPhi) * Math.cos(randomTheta);
      position.y = orbitRadius * Math.sin(randomPhi) * Math.sin(randomTheta);
      position.z = orbitRadius * Math.cos(randomPhi);

      return {
        ...node,
        position,
        connectionCount: connectionCountMap.get(node.id) || 0
      };
    });

    return positioned;
  }, [nodes, links, centerNodeId]);
}