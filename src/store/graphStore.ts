import { create } from 'zustand';
import { GraphData, PositionedPerson } from '@/types/graph';
import { GraphDataset } from '@/data';

interface GraphState {
  data: GraphData;
  centerNodeId: string | undefined;
  selectedPerson: PositionedPerson | null;
  currentDatasetId: string;
  setData: (data: GraphData) => void;
  setCenterNodeId: (id: string | undefined) => void;
  setSelectedPerson: (person: PositionedPerson | null) => void;
  setCurrentDatasetId: (id: string) => void;
}

export const useGraphStore = create<GraphState>((set) => ({
  data: { nodes: [], links: [] },
  centerNodeId: undefined,
  selectedPerson: null,
  currentDatasetId: 'literature',
  setData: (data) => set({ data }),
  setCenterNodeId: (id) => set({ centerNodeId: id }),
  setSelectedPerson: (person) => set({ selectedPerson: person }),
  setCurrentDatasetId: (id) => set({ currentDatasetId: id }),
}));