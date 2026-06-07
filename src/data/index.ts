import { GraphData } from '@/types/graph';
import { sampleData } from './sampleData';
import { wanderingEarthData } from './wanderingEarth';
import { journeyToTheWestData } from './journeyToTheWest';

export interface GraphDataset {
  id: string;
  name: string;
  description: string;
  centerNodeId: string;
  data: GraphData;
  category?: string;
}

export const graphDatasets: GraphDataset[] = [
  {
    id: 'literature',
    name: '古代文人关系',
    description: '苏轼、李白、杜甫等古代诗人的人脉网络',
    centerNodeId: '1',
    data: sampleData,
    category: '文学',
  },
  {
    id: 'wandering-earth',
    name: '流浪地球',
    description: '刘培强、刘启等人物关系与创作背景',
    centerNodeId: '1',
    data: wanderingEarthData,
    category: '科幻',
  },
  {
    id: 'journey-to-the-west',
    name: '西游记',
    description: '师徒四人、妖魔鬼怪、天庭神仙等人物关系',
    centerNodeId: '1',
    data: journeyToTheWestData,
    category: '神话',
  },
];

export const getDataset = (id: string): GraphDataset | undefined => {
  return graphDatasets.find(d => d.id === id);
};

export const getDatasetsByCategory = (category: string): GraphDataset[] => {
  return graphDatasets.filter(d => d.category === category);
};

export const getCategories = (): string[] => {
  return Array.from(new Set(graphDatasets.map(d => d.category).filter(Boolean)));
};