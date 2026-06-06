# Cosmos Nexus

## 项目概述
3D 星空历史人物关系图谱，使用 React + Three.js 构建，提供沉浸式的视觉体验。

## 技术栈
- **React 18** + TypeScript
- **Three.js** + react-three-fiber + @react-three/drei (3D 渲染)
- **Zustand** (状态管理)
- **Tailwind CSS** (样式)
- **Vite** (构建工具)

## 项目结构
```
src/
├── components/
│   └── Scene3D/              # 3D 场景组件
│       ├── GalaxyBackground.tsx    # 星空背景
│       ├── PersonNode.tsx          # 人物节点（星体）
│       ├── RelationLine.tsx        # 关系连线（光轨）
│       └── index.tsx               # 主场景容器
├── data/
│   └── sampleData.ts         # 示例人物关系数据
├── hooks/
│   └── useGravityLayout.ts   # 引力布局算法
├── store/
│   └── graphStore.ts         # Zustand 全局状态
├── types/
│   └── graph.ts              # TypeScript 类型定义
├── App.tsx                   # 主应用组件
└── main.tsx                  # 入口文件
```

## 核心概念

### 人物节点 (PersonNode)
- 以发光星体呈现
- 大小根据 `importance` (0.7-1.0) 调整
- 颜色根据朝代映射（北宋=金色，唐代=青色）
- 悬停显示姓名标签
- 点击显示详情卡片

### 关系连线 (RelationLine)
- 半透明白色虚线
- 粗细根据 `strength` (0.6-0.9) 调整
- 使用贝塞尔曲线连接节点

### 引力布局 (GravityLayout)
- 核心人物位于中心 (0, 0, 0)
- 其他人物基于球坐标随机分布
- 轨道半径 = 基础距离 + (1 - 重要性) × 15 + 随机偏移

## 数据结构

### Person
```typescript
{
  id: string;          // 唯一标识
  name: string;        // 姓名
  dynasty: string;     // 朝代
  description: string; // 简介
  importance: number;  // 重要性权重 0.7-1.0
  works?: string[];    // 代表作品
}
```

### Relation
```typescript
{
  source: string;      // 源节点ID
  target: string;      // 目标节点ID
  type: string;        // 关系类型
  strength: number;    // 关系强度 0.6-0.9
  description?: string; // 关系描述
}
```

## 开发工作流

### 添加新人物
1. 在 `src/data/sampleData.ts` 的 `nodes` 数组中添加人物
2. 在 `links` 数组中添加关系
3. 重新加载页面查看效果

### 修改布局算法
编辑 `src/hooks/useGravityLayout.ts`，调整轨道半径计算逻辑

### 更新配色方案
修改 `src/types/graph.ts` 中的 `dynastyColors` 和 `colorHex`

### 运行开发服务器
```bash
npm run dev
```

## 交互说明
- **拖拽**: 左键旋转视角
- **缩放**: 鼠标滚轮
- **平移**: 右键拖拽
- **详情**: 点击节点查看