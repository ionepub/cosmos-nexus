# Cosmos Nexus

## 项目概述
3D 星空人物关系图谱可视化工具，使用 React + Three.js 构建，提供沉浸式的视觉体验。支持多套人物关系数据集切换。

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
│   ├── Scene3D/              # 3D 场景组件
│   │   ├── GalaxyBackground.tsx    # 星空背景（6000颗动态星星）
│   │   ├── PersonNode.tsx          # 人物节点（发光星体）
│   │   ├── RelationLine.tsx        # 关系连线（动态光轨）
│   │   └── index.tsx               # 主场景容器
│   └── UI/                  # UI 组件
│       └── DatasetSelector.tsx     # 数据集下拉选择器
├── data/                      # 数据文件
│   ├── sampleData.ts         # 古代文人数据
│   ├── wanderingEarth.ts     # 流浪地球数据
│   ├── journeyToTheWest.ts   # 西游记数据
│   └── index.ts              # 数据集管理导出
├── hooks/
│   └── useGravityLayout.ts   # 引力布局算法（计算节点位置和连接数）
├── store/
│   └── graphStore.ts         # Zustand 全局状态（数据、选中、当前数据集）
├── types/
│   └── graph.ts              # TypeScript 类型定义
├── App.tsx                   # 主应用组件
├── main.tsx                  # 入口文件
└── index.css                 # 样式入口
```

## 核心概念

### 人物节点 (PersonNode)
- 以发光星体呈现，统一白色系
- 大小根据 `importance` 和 `connectionCount` 动态计算
  - 核心节点: `0.25 + (连接数 / 最大连接数) × 0.15`
  - 普通节点: `0.12 + importance × 0.06 + (连接数 / 最大连接数) × 0.04`
- 亮度根据 `connectionCount` 调整（连接越多越亮）
- 支持闪烁动画（opacity 和 emissiveIntensity 脉动）
- 绕核心轨道运动（随机速度和偏移）
- 悬停暂停运动 + 显示姓名标签
- 点击显示详情卡片

### 关系连线 (RelationLine)
- 半透明白色直线
- 粗细根据 `strength` 调整
- 随节点实时移动
- 支持闪烁动画（opacity 脉动）

### 引力布局 (GravityLayout)
- 核心人物位于中心 (0, 0, 0)
- 其他人物基于球坐标随机分布
- 轨道半径 = 基础距离 + (1 - 重要性) × 12 + 随机偏移
- 计算每个节点的 `connectionCount`（连接数）

### 动画系统
- 轨道运动: 每个节点有随机的轨道速度（0.02-0.05）
- 闪烁效果: 每个节点有随机的闪烁频率和相位偏移
- 平滑过渡: 鼠标悬停/移开时使用 lerp 插值避免闪跳

## 数据结构

### Person
```typescript
{
  id: string;          // 唯一标识
  name: string;        // 姓名
  dynasty: string;     // 朝代/时代
  description: string; // 简介
  importance: number;  // 重要性权重 0.5-1.0
  works?: string[];    // 代表作品/事迹
}
```

### Relation
```typescript
{
  source: string;      // 源节点ID
  target: string;      // 目标节点ID
  type: string;        // 关系类型（如"父子"、"朋友"、"对手"）
  strength: number;    // 关系强度 0.5-1.0
  description?: string; // 关系描述
}
```

### PositionedPerson (Person 扩展)
```typescript
{
  ...Person,           // Person 的所有字段
  position: Vector3;   // 3D 位置
  connectionCount: number; // 连接数
}
```

### GraphDataset
```typescript
{
  id: string;          // 数据集 ID
  name: string;        // 显示名称
  description: string; // 描述
  centerNodeId: string; // 核心节点 ID
  data: GraphData;     // 图数据
  category?: string;   // 可选分类
}
```

## 开发工作流

### 添加新数据集
1. 在 `src/data/` 目录下创建新的数据文件（如 `myDataset.ts`）
2. 实现 `GraphData` 接口，包含 `nodes` 和 `links`
3. 在 `src/data/index.ts` 的 `graphDatasets` 数组中注册
4. 刷新页面即可在下拉菜单中选择

### 修改布局算法
编辑 `src/hooks/useGravityLayout.ts`：
- 调整轨道半径计算逻辑
- 修改连接数计算方式

### 调整视觉效果
**节点动画**: 编辑 `src/components/Scene3D/PersonNode.tsx`
- 轨道速度 (`orbitSpeed`)
- 闪烁频率 (`twinkleSpeed`)
- 过渡平滑度 (lerp 系数)

**连线效果**: 编辑 `src/components/Scene3D/RelationLine.tsx`
- 透明度计算
- 闪烁效果

**星空背景**: 编辑 `src/components/Scene3D/GalaxyBackground.tsx`
- 星星数量
- 亮度因子
- 旋转速度

### 运行开发服务器
```bash
npm run dev
```

## 交互说明
- **拖拽**: 左键旋转视角
- **缩放**: 鼠标滚轮
- **平移**: 右键拖拽
- **悬停**: 节点暂停运动并显示姓名
- **点击**: 显示详情卡片（右侧弹窗）
- **切换数据**: 左上角下拉菜单

## Claude Code 配置
项目配置了以下 hooks（见 `.claude/settings.json`）:
- **PostToolUse**: 每次编辑后自动运行 TypeScript 类型检查 (`npx tsc --noEmit`)
- **PreToolUse**: 阻止直接编辑 lock 文件（需用 npm/pnpm/yarn 管理）