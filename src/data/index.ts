import { GraphData } from '@/types/graph';
import { sampleData } from './sampleData';
import { wanderingEarthData } from './wanderingEarth';

export interface GraphDataset {
  id: string;
  name: string;
  description: string;
  centerNodeId: string;
  data: GraphData;
}

export const graphDatasets: GraphDataset[] = [
  {
    id: 'literature',
    name: '古代文人关系',
    description: '苏轼、李白、杜甫等古代诗人的人脉网络',
    centerNodeId: '1',
    data: sampleData,
  },
  {
    id: 'wandering-earth',
    name: '流浪地球',
    description: '刘培强、刘启等人物关系与创作背景',
    centerNodeId: '1',
    data: wanderingEarthData,
  },
];

export const getDataset = (id: string): GraphDataset | undefined => {
  return graphDatasets.find(d => d.id === id);
};