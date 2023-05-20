export const sidebar = [
  {
    items: [
      { text: 'Recent', link: '/' },
    ],
  },

  {
    text: 'Angular',
    link: '/angular/',
    // collapsed: false,
    items: [
      {
        text: 'Docs',
        link: '/angular/docs/',
        // collapsed: false,
        items: [
          { text: 'Cheat Sheet', link: '/angular/docs/cheat-sheet' },
          { text: 'First App', link: '/angular/docs/first-app' },
          { text: 'Tour of Heroes', link: '/angular/docs/tour-of-heroes' },
        ],
      },
    ],
  },

  {
    text: 'CSS',
    link: '/css/',
    // collapsed: false,
    items: [
    ],
  },

  {
    text: 'JavaScript',
    link: '/js/',
    // collapsed: false,
    items: [
    ],
  },

  {
    text: 'React',
    link: '/react/',
    // collapsed: true,
    items: [
    ],
  },

  {
    text: 'Next',
    link: '/next/',
    collapsed: true,
    items: [
      {
        text: 'Docs',
        link: '/next/docs/',
        items: [
          { text: 'Learn', link: '/next/docs/learn' },
        ],
      },
    ],
  },

  {
    text: 'Vue',
    link: '/vue/',
    collapsed: true,
    items: [
      { text: 'VitePress 速通', link: '/vue/vitepress' },
    ],
  },

  {
    text: 'Nuxt',
    link: '/nuxt/',
    // collapsed: true,
    items: [
    ],
  },
]

export const algoSidebar = [
  { text: '蠢人的总结', link: '/algo/' },
  {
    text: 'labuladong 的算法小抄',
    // collapsed: false,
    items: [
      {
        text: '二叉树',
        link: '/algo/binary-tree/',
        // collapsed: false,
        items: [
          { text: '104. 二叉树的最大深度', link: '/algo/binary-tree/104' },
          { text: '144. 二叉树的前序遍历', link: '/algo/binary-tree/144' },
        ],
      },
      {
        text: '链表',
        items: [
        ],
      },
    ],
  },
  {
    text: 'LeetCode',
    // collapsed: false,
    items: [
      {
        text: 'JavaScript',
        link: '/algo/js/',
        // collapsed: false,
        items: [
          { text: '2620. 计数器', link: '/algo/js/2620' },
          { text: '2621. 睡眠函数', link: '/algo/js/2621' },
        ],
      },
      {
        text: '剑指 Offer',
        link: '/algo/offer/',
        // collapsed: false,
        items: [
        ],
      },
    ],
  },

]

export const interviewSidebar = [
  { text: '😍😍😍', link: '/interview/' },
  { text: '🤮🤮🤮', link: '/interview/1' },
  { text: '😢😢😢', link: '/interview/2' },
  { text: '😢😢😢', link: '/interview/3' },
  { text: '😅😅😅', link: '/interview/4' },
  { text: '🤡🤡🤡', link: '/interview/5' },
  { text: '😉😉😉', link: '/interview/6' },
  { text: '🤡🤡🤡', link: '/interview/7' },
  { text: '🤡🤡🤡', link: '/interview/8' },
  { text: '🤡🤡🤡', link: '/interview/9' },
]

export const tschSidebar = [
  { text: '蠢人的总结', link: '/tsch/' },
  { text: '13. Hello World', link: '/tsch/13' },
]

export const hbsSidebar = [
  {
    text: '第 1 章：什么是 JavaScript',
    link: '/hbs/1/',
    collapsed: true,
    items: [
      { text: '1.1 简短的历史回顾', link: '/hbs/1/1' },
      { text: '1.2 JavaScript 实现', link: '/hbs/1/2' },
      { text: '1.3 JavaScript 版本', link: '/hbs/1/3' },
      { text: '1.4 小结', link: '/hbs/1/4' },
    ],
  },
  {
    text: '第 2 章：HTML 中的 JavaScript',
    link: '/hbs/2/',
    collapsed: true,
    items: [
      { text: '2.1 script 元素', link: '/hbs/2/1' },
      { text: '2.2 行内代码与外部文件', link: '/hbs/2/2' },
      { text: '2.3 文档模式', link: '/hbs/2/3' },
      { text: '2.4 noscript 元素', link: '/hbs/2/4' },
      { text: '2.5 小结', link: '/hbs/2/5' },
    ],
  },
  {
    text: '第 3 章：语言基础',
    link: '/hbs/3/',
    collapsed: true,
    items: [
      { text: '3.1 语法', link: '/hbs/3/1' },
      { text: '3.2 关键字与保留字', link: '/hbs/3/2' },
      { text: '3.3 变量', link: '/hbs/3/3' },
      { text: '3.4 数据类型', link: '/hbs/3/4' },
      { text: '3.5 操作符', link: '/hbs/3/5' },
      { text: '3.6 语句', link: '/hbs/3/6' },
      { text: '3.7 函数', link: '/hbs/3/7' },
      { text: '3.8 小结', link: '/hbs/3/8' },
    ],
  },
  {
    text: '第 4 章：变量、作用域与内存',
    link: '/hbs/4/',
    collapsed: true,
    items: [
      { text: '4.1 原始值与引用值', link: '/hbs/4/1' },
      { text: '4.2 执行上下文与作用域', link: '/hbs/4/2' },
      { text: '4.3 垃圾回收', link: '/hbs/4/3' },
      { text: '4.4 小结', link: '/hbs/4/4' },
    ],
  },
  {
    text: '第 5 章：基本引用类型',
    link: '/hbs/5/',
    collapsed: true,
    items: [
      { text: '5.1 Date', link: '/hbs/5/1' },
      { text: '5.2 RegExp', link: '/hbs/5/2' },
      { text: '5.3 原始值包装类型', link: '/hbs/5/3' },
      { text: '5.4 单例内置对象', link: '/hbs/5/4' },
      { text: '5.5 小结', link: '/hbs/5/5' },
    ],
  },
  {
    text: '第 6 章：集合引用类型',
    link: '/hbs/6/',
    collapsed: true,
    items: [
      { text: '6.1 Object', link: '/hbs/6/1' },
      { text: '6.2 Array', link: '/hbs/6/2' },
      { text: '6.3 定型数组', link: '/hbs/6/3' },
      { text: '6.4 Map', link: '/hbs/6/4' },
      { text: '6.5 WeakMap', link: '/hbs/6/5' },
      { text: '6.6 Set', link: '/hbs/6/6' },
      { text: '6.7 WeakSet', link: '/hbs/6/7' },
      { text: '6.8 迭代与扩展操作', link: '/hbs/6/8' },
      { text: '6.9 小结', link: '/hbs/6/9' },
    ],
  },
  {
    text: '第 7 章：迭代器与生成器',
    link: '/hbs/7/',
    collapsed: true,
    items: [
      { text: '7.1 理解迭代', link: '/hbs/7/1' },
      { text: '7.2 迭代器模式', link: '/hbs/7/2' },
      { text: '7.3 生成器', link: '/hbs/7/3' },
      { text: '7.4 小结', link: '/hbs/7/4' },
    ],
  },
  {
    text: '第 8 章：对象、类与面向对象编程',
    link: '/hbs/8/',
    collapsed: true,
    items: [
      { text: '8.1 理解对象', link: '/hbs/8/1' },
      { text: '8.2 创建对象', link: '/hbs/8/2' },
      { text: '8.3 继承', link: '/hbs/8/3' },
      { text: '8.4 类', link: '/hbs/8/4' },
      { text: '8.5 小结', link: '/hbs/8/5' },
    ],
  },
]

export const xnsSidebar = [
  {
    text: '第 1 章：JavaScript 简介',
    link: '/xns/1/',
    collapsed: false,
    items: [
      { text: '1.1 探索 JavaScript', link: '/xns/1/1' },
      { text: '1.2 Hello World', link: '/xns/1/2' },
      { text: '1.3 JavaScript 之旅', link: '/xns/1/3' },
      { text: '1.4 示例：字符频率柱形图', link: '/xns/1/4' },
      { text: '1.5 小结', link: '/xns/1/5' },
    ],
  },
  {
    text: '第 2 章：词法结构',
    link: '/xns/2/',
    collapsed: true,
    items: [
    ],
  },
  {
    text: '第 3 章：类型、值和变量',
    link: '/xns/3/',
    collapsed: true,
    items: [
    ],
  },
  {
    text: '第 4 章：表达式和运算符',
    link: '/xns/4/',
    collapsed: true,
    items: [
    ],
  },
  {
    text: '第 5 章：语句',
    link: '/xns/5/',
    collapsed: true,
    items: [
    ],
  },
  {
    text: '第 6 章：对象',
    link: '/xns/6/',
    collapsed: true,
    items: [
    ],
  },
  // {
  //   text: '第 7 章：数组',
  //   link: '/xns/7/',
  //   collapsed: true,
  //   items: [,
  //   ]
  // },
  // {
  //   text: '第 8 章：函数',
  //   link: '/xns/8/',
  //   collapsed: true,
  //   items: [
  //   ]
  // },
  // {
  //   text: '第 9 章：类',
  //   link: '/xns/9/',
  //   collapsed: true,
  //   items: [
  //   ]
  // },
  // {
  //   text: '第 10 章：模块',
  //   link: '/xns/10/',
  //   collapsed: true,
  //   items: [
  //   ]
  // },
  // {
  //   text: '第 11 章：JavaScript 标准库',
  //   link: '/xns/11/',
  //   collapsed: true,
  //   items: [
  //   ]
  // },
  // {
  //   text: '第 12 章：迭代器和生成器',
  //   link: '/xns/12/',
  //   collapsed: true,
  //   items: [
  //   ]
  // },
  // {
  //   text: '第 13 章：异步 JavaScript',
  //   link: '/xns/13/',
  //   collapsed: true,
  //   items: [
  //   ]
  // },
  // {
  //   text: '第 14 章：元编程',
  //   link: '/xns/14/',
  //   collapsed: true,
  //   items: [
  //   ]
  // },
  // {
  //   text: '第 15 章：浏览器中的 JavaScript',
  //   link: '/xns/15/',
  //   collapsed: true,
  //   items: [
  //   ]
  // },
  // {
  //   text: '第 16 章：Node 服务器端 JavaScript',
  //   link: '/xns/16/',
  //   collapsed: true,
  //   items: [
  //   ]
  // },
  // {
  //   text: '第 17 章：JavaScript 工具和扩展',
  //   link: '/xns/17/',
  //   collapsed: true,
  //   items: [
  //   ]
  // },
]

export const jsdpSidebar = [
  {
    text: '第 1 章：面向对象的JavaScript',
    link: '/jsdp/1/',
    collapsed: true,
    items: [
      { text: '1.1 动态类型语言和鸭子类型', link: '/jsdp/1/1' },
      { text: '1.2 多态', link: '/jsdp/1/2' },
      { text: '1.3 封装', link: '/jsdp/1/3' },
      { text: '1.4 原型模式和基于原型继承的 JavaScript 对象系统', link: '/jsdp/1/4' },
    ],
  },
]

export const juejinTschSidebar = [
  { text: '0. 个人总结', link: '/juejin/tsch/' },
  { text: '1. 如何阅读', link: '/juejin/tsch/1' },
  { text: '2. TypeScript', link: '/juejin/tsch/2' },
  { text: '3. 类型体操', link: '/juejin/tsch/3' },
  { text: '4. 类型和类型运算', link: '/juejin/tsch/4' },
  { text: '5. 模式匹配做提取', link: '/juejin/tsch/5' },
  { text: '6. 重新构造做变换', link: '/juejin/tsch/6' },
  { text: '7. 递归复用做循环', link: '/juejin/tsch/7' },
  { text: '8. 数组长度做计数', link: '/juejin/tsch/8' },
  { text: '9. 联合分散可简化', link: '/juejin/tsch/9' },
  { text: '10. 特殊特性要记清', link: '/juejin/tsch/10' },
  { text: '11. 类型体操顺口溜', link: '/juejin/tsch/11' },
  { text: '12. ', link: '/juejin/tsch/12' },
  { text: '13. ', link: '/juejin/tsch/13' },
  { text: '14. ', link: '/juejin/tsch/14' },
  { text: '15. ', link: '/juejin/tsch/15' },
  { text: '16. ', link: '/juejin/tsch/16' },
  { text: '17. ', link: '/juejin/tsch/17' },
  { text: '18. ', link: '/juejin/tsch/18' },
  { text: '19. ', link: '/juejin/tsch/19' },
  { text: '20. ', link: '/juejin/tsch/20' },
  { text: '21. ', link: '/juejin/tsch/21' },
  { text: '22. 小册总结', link: '/juejin/tsch/22' },
  { text: '23. ', link: '/juejin/tsch/23' },
  { text: '24. ', link: '/juejin/tsch/24' },
  { text: '25. ', link: '/juejin/tsch/25' },
  { text: '26. ', link: '/juejin/tsch/26' },
  { text: '27. 新语法 satisfies', link: '/juejin/tsch/27' },
]

export const juejinTsSidebar = [
  { text: '0. Overview', link: '/juejin/ts/' },
  { text: '1. 用正确的方式学习 TS', link: '/juejin/ts/1' },
  { text: '2. ', link: '/juejin/ts/2' },
  { text: '3. ', link: '/juejin/ts/3' },
  { text: '4. ', link: '/juejin/ts/4' },
  { text: '5. ', link: '/juejin/ts/5' },
  { text: '6. ', link: '/juejin/ts/6' },
  { text: '7. ', link: '/juejin/ts/7' },
  { text: '8. ', link: '/juejin/ts/8' },
  { text: '9. ', link: '/juejin/ts/9' },
  { text: '10. ', link: '/juejin/ts/10' },
  { text: '11. ', link: '/juejin/ts/11' },
  { text: '12. ', link: '/juejin/ts/12' },
  { text: '13. ', link: '/juejin/ts/13' },
  { text: '14. ', link: '/juejin/ts/14' },
  { text: '15. ', link: '/juejin/ts/15' },
  { text: '16. ', link: '/juejin/ts/16' },
  { text: '17. ', link: '/juejin/ts/17' },
  { text: '18. ', link: '/juejin/ts/18' },
  { text: '19. ', link: '/juejin/ts/19' },
  { text: '20. ', link: '/juejin/ts/20' },
  { text: '21. ', link: '/juejin/ts/21' },
  { text: '22. ', link: '/juejin/ts/22' },
  { text: '23. ', link: '/juejin/ts/23' },
  { text: '24. ', link: '/juejin/ts/24' },
  { text: '25. ', link: '/juejin/ts/25' },
  { text: '26. ', link: '/juejin/ts/26' },
  { text: '27. ', link: '/juejin/ts/27' },
  { text: '28. ', link: '/juejin/ts/28' },
  { text: '29. ', link: '/juejin/ts/29' },
  { text: '30. ', link: '/juejin/ts/30' },
  { text: '31. ', link: '/juejin/ts/31' },
  { text: '32. ', link: '/juejin/ts/32' },
  { text: '33. ', link: '/juejin/ts/33' },
]
