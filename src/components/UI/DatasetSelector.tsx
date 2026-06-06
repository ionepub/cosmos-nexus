import { useState } from 'react';
import { useGraphStore } from '@/store/graphStore';
import { graphDatasets } from '@/data';

export function DatasetSelector() {
  const { currentDatasetId, setCurrentDatasetId } = useGraphStore();
  const [isOpen, setIsOpen] = useState(false);

  const currentDataset = graphDatasets.find(d => d.id === currentDatasetId);

  return (
    <div className="absolute top-6 left-6 z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-space-800/90 backdrop-blur-md border border-space-900 text-white px-5 py-3 rounded-lg hover:bg-space-800 transition-all shadow-lg flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        {currentDataset?.name}
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-space-800/95 backdrop-blur-md border border-space-900 rounded-lg shadow-xl overflow-hidden">
          {graphDatasets.map((dataset) => (
            <button
              key={dataset.id}
              onClick={() => {
                setCurrentDatasetId(dataset.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-5 py-3 hover:bg-space-900 transition-colors ${
                dataset.id === currentDatasetId ? 'bg-space-900 border-l-2 border-white' : ''
              }`}
            >
              <div className="text-white font-medium">{dataset.name}</div>
              <div className="text-gray-400 text-xs mt-1">{dataset.description}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}