# Cosmos Nexus

<div align="center">

一个具有视觉冲击力的 3D 星空人物关系图谱可视化工具

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.170-lightgrey)](https://threejs.org/)

</div>

## ✨ 特性

- 🌌 **沉浸式星空背景** - 6000 颗动态闪烁的星星营造宇宙氛围
- 🌟 **发光星体节点** - 人物以发光星体呈现，大小和亮度根据关系连接数动态调整
- 💫 **轨道运动动画** - 节点绕核心缓慢旋转，每个节点有独特的轨道速度和闪烁频率
- 🔗 **动态光轨连线** - 半透明连线随节点实时移动，具有呼吸般的闪烁效果
- 🎯 **交互式 3D 视角** - 支持拖拽旋转、滚轮缩放、右键平移
- 📊 **多数据集切换** - 内置古代文人、流浪地球、西游记等多套人物关系数据
- 📱 **响应式设计** - 适配桌面端浏览器

## 🎬 演示

| 古代文人关系 | 流浪地球 | 西游记 |
|-------------|---------|-------|
| ![古代文人](docs/images/literature.png) | ![流浪地球](docs/images/wandering-earth.png) | ![西游记](docs/images/journey-to-west.png) |

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- npm 或 pnpm

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看效果

### 构建生产版本

```bash
npm run build
```

## 📖 使用说明

### 视角控制

- **旋转**: 鼠标左键拖拽
- **缩放**: 鼠标滚轮
- **平移**: 鼠标右键拖拽

### 查看详情

点击任意星体节点，右侧会弹出人物详情卡片，包含：
- 人物姓名和朝代
- 生平简介
- 代表作品/事迹
- 与其他人物的关系简述

### 切换数据集

点击左上角下拉菜单，选择不同的人物关系数据集。

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **3D 引擎**: Three.js + react-three-fiber + @react-three/drei
- **状态管理**: Zustand
- **样式**: Tailwind CSS
- **构建工具**: Vite

## 📁 项目结构

```
cosmos-nexus/
├── src/
│   ├── components/
│   │   ├── Scene3D/              # 3D 场景组件
│   │   │   ├── GalaxyBackground.tsx    # 星空背景
│   │   │   ├── PersonNode.tsx          # 人物节点
│   │   │   ├── RelationLine.tsx        # 关系连线
│   │   │   └── index.tsx               # 主场景容器
│   │   └── UI/
│   │       └── DatasetSelector.tsx     # 数据集选择器
│   ├── data/                      # 数据文件
│   │   ├── sampleData.ts         # 古代文人数据
│   │   ├── wanderingEarth.ts     # 流浪地球数据
│   │   ├── journeyToTheWest.ts   # 西游记数据
│   │   └── index.ts              # 数据集管理
│   ├── hooks/
│   │   └── useGravityLayout.ts   # 引力布局算法
│   ├── store/
│   │   └── graphStore.ts         # Zustand 全局状态
│   ├── types/
│   │   └── graph.ts              # TypeScript 类型定义
│   ├── App.tsx
│   └── main.tsx
├── .claude/
│   └── settings.json             # Claude Code 配置
├── CLAUDE.md                     # 项目文档
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 🔧 添加新数据集

在 `src/data/` 目录下创建新的数据文件：

```typescript
// src/data/myDataset.ts
import { GraphData } from '@/types/graph';

export const myDataset: GraphData = {
  nodes: [
    {
      id: '1',
      name: '人物名称',
      dynasty: '朝代/时代',
      description: '人物简介',
      importance: 1.0,  // 重要性权重 0.5-1.0
      works: ['代表作品'],
    },
    // ... 更多节点
  ],
  links: [
    {
      source: '1',      // 源节点 ID
      target: '2',      // 目标节点 ID
      type: '关系类型',
      strength: 0.9,    // 关系强度 0.5-1.0
      description: '关系描述',
    },
    // ... 更多连线
  ],
};
```

然后在 `src/data/index.ts` 中注册：

```typescript
import { myDataset } from './myDataset';

export const graphDatasets: GraphDataset[] = [
  // ... 已有数据集
  {
    id: 'my-dataset',
    name: '我的数据集',
    description: '数据集描述',
    centerNodeId: '1',
    data: myDataset,
    category: '分类',
  },
];
```

## 🎨 核心概念

### 节点大小
根据人物的 `importance`（重要性）和 `connectionCount`（连接数）动态计算：

- 核心节点: `0.25 + (连接数 / 最大连接数) × 0.15`
- 普通节点: `0.12 + importance × 0.06 + (连接数 / 最大连接数) × 0.04`

### 节点亮度
根据连接数调整发光强度：

- 连接越多，亮度越高
- 基础亮度 + 连接数加成

### 轨道运动
- 非核心节点绕中心旋转
- 每个节点有随机的轨道速度和偏移
- 鼠标悬停时暂停运动

## 📝 开发日志

- [x] 基础 3D 场景搭建
- [x] 星空背景与粒子系统
- [x] 发光节点与动态连线
- [x] 引力布局算法
- [x] 交互控制（旋转、缩放、平移）
- [x] 人物详情卡片
- [x] 数据集切换系统
- [x] 轨道运动动画
- [x] 闪烁效果
- [x] 平滑过渡动画

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

- [Three.js](https://threejs.org/) - 3D 图形库
- [react-three-fiber](https://docs.pmnd.rs/react-three-fiber) - React 渲染器
- [@react-three/drei](https://github.com/pmndrs/drei) - 有用的 Three.js 组件
- [Vite](https://vitejs.dev/) - 构建工具

---

<div align="center">

Made with ❤️ by [Cosmos Nexus Team](https://github.com/yourusername/cosmos-nexus)

</div>