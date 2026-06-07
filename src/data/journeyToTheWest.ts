import { GraphData } from '@/types/graph';

export const journeyToTheWestData: GraphData = {
  nodes: [
    // 师徒四人组
    {
      id: '1',
      name: '唐三藏',
      dynasty: '西游记',
      description: '取经团队的核心，如来佛祖二弟子金蝉子转世',
      importance: 1.0,
      works: ['西天取经', '念经'],
    },
    {
      id: '2',
      name: '孙悟空',
      dynasty: '西游记',
      description: '齐天大圣，取经团队的大师兄，法力高强',
      importance: 0.95,
      works: ['降妖除魔', '七十二变'],
    },
    {
      id: '3',
      name: '猪八戒',
      dynasty: '西游记',
      description: '天蓬元帅转世，取经团队的二师兄',
      importance: 0.85,
      works: ['担担子', '好色'],
    },
    {
      id: '4',
      name: '沙悟净',
      dynasty: '西游记',
      description: '卷帘大将转世，取经团队的三师弟',
      importance: 0.75,
      works: ['牵马', '老实'],
    },

    // 天庭神仙系列
    {
      id: '5',
      name: '玉皇大帝',
      dynasty: '西游记',
      description: '天庭的最高统治者',
      importance: 0.8,
      works: ['统领三界'],
    },
    {
      id: '6',
      name: '观音菩萨',
      dynasty: '西游记',
      description: '南海观世音菩萨，取经团队的护持者',
      importance: 0.85,
      works: ['救苦救难', '指点迷津'],
    },
    {
      id: '7',
      name: '太上老君',
      dynasty: '西游记',
      description: '道教始祖，住在兜率宫',
      importance: 0.7,
      works: ['炼丹', '八卦炉'],
    },
    {
      id: '8',
      name: '二郎神',
      dynasty: '西游记',
      description: '玉帝外甥，天庭战神，与孙悟空是故交',
      importance: 0.75,
      works: ['降妖', '哮天犬'],
    },
    {
      id: '9',
      name: '哪吒',
      dynasty: '西游记',
      description: '托塔天王之子，三太子',
      importance: 0.7,
      works: ['降妖除魔'],
    },

    // 妖魔鬼怪系列
    {
      id: '10',
      name: '白骨精',
      dynasty: '西游记',
      description: '白骨岭的妖精，三次变化欺骗唐僧',
      importance: 0.6,
      works: ['三打白骨精'],
    },
    {
      id: '11',
      name: '牛魔王',
      dynasty: '西游记',
      description: '孙悟空结拜兄弟，芭蕉洞洞主',
      importance: 0.75,
      works: ['大战孙悟空'],
    },
    {
      id: '12',
      name: '铁扇公主',
      dynasty: '西游记',
      description: '牛魔王之妻，芭蕉扇持有者',
      importance: 0.65,
      works: ['芭蕉扇'],
    },
    {
      id: '13',
      name: '红孩儿',
      dynasty: '西游记',
      description: '牛魔王和铁扇公主之子，圣婴大王',
      importance: 0.7,
      works: ['三昧真火'],
    },
    {
      id: '14',
      name: '黄袍怪',
      dynasty: '西游记',
      description: '奎木狼下凡，百花羞公主的丈夫',
      importance: 0.6,
      works: ['宝象国'],
    },
    {
      id: '15',
      name: '金角大王',
      dynasty: '西游记',
      description: '太上老君的童子，持有紫金红葫芦',
      importance: 0.65,
      works: ['葫芦收妖'],
    },
    {
      id: '16',
      name: '银角大王',
      dynasty: '西游记',
      description: '太上老君的童子，金角大王的弟弟',
      importance: 0.65,
      works: ['葫芦收妖'],
    },
    {
      id: '17',
      name: '蜘蛛精',
      dynasty: '西游记',
      description: '盘丝洞的七个妖精',
      importance: 0.6,
      works: ['盘丝洞'],
    },

    // 佛教系列
    {
      id: '18',
      name: '如来佛祖',
      dynasty: '西游记',
      description: '佛教的最高领袖，压住孙悟空',
      importance: 0.9,
      works: ['五指山', '取经'],
    },
    {
      id: '19',
      name: '阿弥陀佛',
      dynasty: '西游记',
      description: '西方极乐世界教主',
      importance: 0.75,
      works: ['西天'],
    },
    {
      id: '20',
      name: '地藏王菩萨',
      dynasty: '西游记',
      description: '幽冥教主，地府之主',
      importance: 0.7,
      works: ['地狱不空'],
    },

    // 其他重要角色
    {
      id: '21',
      name: '东海龙王',
      dynasty: '西游记',
      description: '四海龙王之首',
      importance: 0.65,
      works: ['龙宫'],
    },
    {
      id: '22',
      name: '阎罗王',
      dynasty: '西游记',
      description: '地府十殿阎罗之首',
      importance: 0.65,
      works: ['生死簿'],
    },
    {
      id: '23',
      name: '女儿国国王',
      dynasty: '西游记',
      description: '西梁女国国王，对唐僧有爱慕之情',
      importance: 0.7,
      works: ['女儿国'],
    },
  ],
  links: [
    // 师徒四人关系
    { source: '1', target: '2', type: '师徒', strength: 0.95, description: '唐僧是孙悟空的师父' },
    { source: '1', target: '3', type: '师徒', strength: 0.9, description: '唐僧收猪八戒为徒' },
    { source: '1', target: '4', type: '师徒', strength: 0.85, description: '唐僧收沙悟净为徒' },
    { source: '2', target: '3', type: '师兄弟', strength: 0.85, description: '孙悟空和猪八戒是师兄弟' },
    { source: '2', target: '4', type: '师兄弟', strength: 0.8, description: '孙悟空和沙悟净是师兄弟' },
    { source: '3', target: '4', type: '师兄弟', strength: 0.75, description: '猪八戒和沙悟净是师兄弟' },

    // 唐三藏与各路神仙
    { source: '1', target: '6', type: '护持', strength: 0.9, description: '观音菩萨护持唐僧取经' },
    { source: '1', target: '18', type: '前世', strength: 0.85, description: '唐僧是金蝉子转世' },
    { source: '1', target: '23', type: '情缘', strength: 0.7, description: '女儿国国王对唐僧有情' },

    // 孙悟空关系网
    { source: '2', target: '5', type: '对手', strength: 0.75, description: '孙悟空大闹天宫' },
    { source: '2', target: '6', type: '师徒', strength: 0.8, description: '观音指点孙悟空' },
    { source: '2', target: '7', type: '对手', strength: 0.7, description: '太上老君用八卦炉炼孙悟空' },
    { source: '2', target: '8', type: '故交', strength: 0.75, description: '二郎神与孙悟空的恩怨' },
    { source: '2', target: '9', type: '对手', strength: 0.7, description: '哪吒与孙悟空交战' },
    { source: '2', target: '18', type: '对手', strength: 0.85, description: '如来佛祖压住孙悟空' },
    { source: '2', target: '21', type: '朋友', strength: 0.7, description: '孙悟空向东海龙王借兵器' },
    { source: '2', target: '22', type: '对手', strength: 0.7, description: '孙悟空大闹地府' },

    // 猪八戒关系网
    { source: '3', target: '5', type: '贬下凡', strength: 0.65, description: '天蓬元帅被贬下凡' },
    { source: '3', target: '7', type: '师徒', strength: 0.65, description: '天蓬元帅与太上老君的关系' },
    { source: '3', target: '23', type: '情缘', strength: 0.6, description: '猪八戒也看中女儿国国王' },

    // 沙悟净关系网
    { source: '4', target: '5', type: '贬下凡', strength: 0.6, description: '卷帘大将被贬下凡' },

    // 天庭关系
    { source: '5', target: '6', type: '下属', strength: 0.7, description: '观音菩萨听命玉帝' },
    { source: '5', target: '7', type: '臣属', strength: 0.7, description: '太上老君辅助玉帝' },
    { source: '5', target: '8', type: '外甥', strength: 0.75, description: '二郎神是玉帝外甥' },
    { source: '5', target: '9', type: '臣属', strength: 0.7, description: '托塔天王父子效忠玉帝' },
    { source: '6', target: '18', type: '同事', strength: 0.8, description: '观音与如来同属佛教' },
    { source: '7', target: '15', type: '主人', strength: 0.65, description: '太上老君的童子' },
    { source: '7', target: '16', type: '主人', strength: 0.65, description: '太上老君的童子' },

    // 牛魔王家族
    { source: '11', target: '2', type: '结拜兄弟', strength: 0.85, description: '孙悟空与牛魔王结拜' },
    { source: '11', target: '12', type: '夫妻', strength: 0.9, description: '牛魔王与铁扇公主是夫妻' },
    { source: '11', target: '13', type: '父子', strength: 0.85, description: '红孩儿是牛魔王的儿子' },
    { source: '12', target: '13', type: '母子', strength: 0.85, description: '铁扇公主与红孩儿' },
    { source: '2', target: '12', type: '对手', strength: 0.8, description: '孙悟空向铁扇公主借扇' },
    { source: '2', target: '13', type: '对手', strength: 0.8, description: '孙悟空大战红孩儿' },

    // 妖精关系
    { source: '10', target: '1', type: '加害', strength: 0.7, description: '白骨精想吃唐僧肉' },
    { source: '10', target: '2', type: '死敌', strength: 0.75, description: '孙悟空三打白骨精' },
    { source: '14', target: '1', type: '丈夫', strength: 0.65, description: '黄袍怪与百花羞公主' },
    { source: '14', target: '18', type: '前世', strength: 0.6, description: '黄袍怪原是奎木狼' },
    { source: '15', target: '16', type: '兄弟', strength: 0.85, description: '金角银角大王是兄弟' },
    { source: '15', target: '2', type: '对手', strength: 0.7, description: '金角大王与孙悟空交战' },
    { source: '16', target: '2', type: '对手', strength: 0.7, description: '银角大王与孙悟空交战' },
    { source: '17', target: '2', type: '对手', strength: 0.65, description: '蜘蛛精与孙悟空交战' },

    // 佛教关系
    { source: '18', target: '19', type: '同事', strength: 0.75, description: '如来与阿弥陀佛' },
    { source: '18', target: '20', type: '同事', strength: 0.75, description: '如来与地藏王菩萨' },

    // 其他关系
    { source: '21', target: '22', type: '合作', strength: 0.6, description: '龙宫与地府有联系' },
  ],
};