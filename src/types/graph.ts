import { Vector3 } from 'three';

export interface Person {
  id: string;
  name: string;
  dynasty: string;
  description: string;
  importance: number;
  works?: string[];
}

export interface Relation {
  source: string;
  target: string;
  type: '互赠诗词' | '政敌' | '师徒' | '朋友' | '同僚';
  strength: number;
  description?: string;
}

export interface GraphData {
  nodes: Person[];
  links: Relation[];
}

export interface PositionedPerson extends Person {
  position: Vector3;
  connectionCount: number;
}

export type DynastyColor = 'gold' | 'cyan' | 'orange' | 'purple' | 'green';

export const dynastyColors: Record<string, DynastyColor> = {
  '北宋': 'gold',
  '南宋': 'gold',
  '唐': 'cyan',
  '宋代': 'gold',
};

export const colorHex: Record<DynastyColor, string> = {
  'gold': '#FFD700',
  'cyan': '#00CED1',
  'orange': '#FFA500',
  'purple': '#9333EA',
  'green': '#22C55E',
};