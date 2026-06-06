import { useEffect } from 'react';
import { Scene3D } from '@/components/Scene3D';
import { DatasetSelector } from '@/components/UI/DatasetSelector';
import { useGraphStore } from '@/store/graphStore';
import { getDataset } from '@/data';
import { PositionedPerson } from '@/types/graph';

function App() {
  const { data, setData, centerNodeId, setCenterNodeId, selectedPerson, setSelectedPerson, currentDatasetId, setCurrentDatasetId } = useGraphStore();

  useEffect(() => {
    const dataset = getDataset(currentDatasetId);
    if (dataset) {
      setData(dataset.data);
      setCenterNodeId(dataset.centerNodeId);
    }
  }, [currentDatasetId, setData, setCenterNodeId]);

  const handleNodeClick = (person: PositionedPerson) => {
    setSelectedPerson(person);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <DatasetSelector />

      <Scene3D
        data={data}
        centerNodeId={centerNodeId}
        onNodeClick={handleNodeClick}
      />

      {selectedPerson && (
        <div className="absolute top-4 right-4 bg-space-800/90 backdrop-blur-md border border-space-900 rounded-lg p-6 max-w-sm text-white shadow-2xl">
          <button
            onClick={() => setSelectedPerson(null)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
          >
            ×
          </button>
          <h2 className="text-2xl font-bold mb-2 text-white">{selectedPerson.name}</h2>
          <p className="text-sm text-gray-400 mb-3">{selectedPerson.dynasty}</p>
          <p className="text-sm leading-relaxed mb-4">{selectedPerson.description}</p>
          {selectedPerson.works && selectedPerson.works.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold mb-2 text-gray-300">代表作品 / 事迹</h3>
              <div className="flex flex-wrap gap-2">
                {selectedPerson.works.map((work, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-space-900 rounded-full text-xs text-gray-300"
                  >
                    {work}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="absolute bottom-6 left-6 text-white/60 text-sm">
        <p>拖拽旋转视角 | 滚轮缩放 | 右键平移</p>
        <p>点击节点查看详情</p>
      </div>
    </div>
  );
}

export default App;