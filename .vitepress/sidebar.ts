export const sidebar = [
  {
    items: [
      { text: 'Get Started', link: '/' },
    ]
  },


  {
    text: 'React',
    collapsed: true,
    items: [
      {
        text: 'Next.js',
        collapsed: true,
        items: [
          { text: 'Learn', link: '/react/next/learn' },
        ]
      },
    ]
  },


  {
    text: 'Vue',
    collapsed: true,
    items: [
      { text: 'Get Started', link: '/vue/' },
    ]
  },

  {
    text: 'Type Challenges',
    collapsed: true,
    items: [
      { text: 'Get Started', link: '/tsch/' },
      { text: '13. Hello World', link: '/tsch/13' },
    ]
  },

  {
    text: '力扣算法',
    collapsed: true,
    items: [
      { text: 'Get Started', link: '/leetcode/' },
      {
        text: 'JS',
        collapsed: true,
        items: [
          { text: '2620. 计数器', link: '/leetcode/js/2620' },
          { text: '2621. 睡眠函数', link: '/leetcode/js/2621' },
        ]
      },
      {
        text: '二叉树',
        collapsed: true,
        items: [
          { text: '104. 二叉树的最大深度', link: '/leetcode/binary-tree/104' },
        ]
      },
      {
        text: '链表',
        collapsed: true,
        items: [
        ]
      },
    ]
  },


  {
    text: '掘金小册',
    collapsed: true,
    items: [
      {
        text: 'TS 类型体操通关秘籍',
        collapsed: true,
        items: [
          { text: '如何阅读本小册', link: '/juejin/tsch/' },
        ]
      },
      {
        text: 'TS 全面进阶指南',
        collapsed: true,
        items: [
          { text: '用正确的方式学习 TS', link: '/juejin/ts/' },
        ]
      },
    ]
  },


  {
    text: '红宝书',
    collapsed: true,
    items: [
      {
        text: '什么是 JavaScript',
        collapsed: true,
        items: [
          { text: '1. 简短的历史回顾', link: '/js/1/1' },
          { text: '2. JavaScript 实现', link: '/js/1/2' },
          { text: '3. JavaScript 版本', link: '/js/1/3' },
          { text: '4. 小结', link: '/js/1/4' },
        ]
      },
      {
        text: 'HTML 中的 JavaScript',
        collapsed: true,
        items: [
          { text: '1. script 元素', link: '/js/2/1' },
          { text: '2. 行内代码与外部文件', link: '/js/2/2' },
          { text: '3. 文档模式', link: '/js/2/3' },
          { text: '4. noscript 元素', link: '/js/2/4' },
          { text: '5. 小结', link: '/js/2/5' },
        ]
      },
      {
        text: '语言基础',
        collapsed: true,
        items: [
          { text: '1. 语法', link: '/js/3/1' },
          { text: '2. 关键字与保留字', link: '/js/3/2' },
          { text: '3. 变量', link: '/js/3/3' },
          { text: '4. 数据类型', link: '/js/3/4' },
          { text: '5. 操作符', link: '/js/3/5' },
          { text: '6. 语句', link: '/js/3/6' },
          { text: '7. 函数', link: '/js/3/7' },
          { text: '8. 小结', link: '/js/3/8' },
        ]
      },
      {
        text: '变量、作用域与内存',
        collapsed: true,
        items: [
          { text: '1. 原始值与引用值', link: '/js/4/1' },
          { text: '2. 执行上下文与作用域', link: '/js/4/2' },
          { text: '3. 垃圾回收', link: '/js/4/3' },
          { text: '4. 小结', link: '/js/4/4' },
        ]
      },
      {
        text: '基本引用类型',
        collapsed: true,
        items: [
          { text: '1. Date', link: '/js/5/1' },
          { text: '2. RegExp', link: '/js/5/2' },
          { text: '3. 原始值包装类型', link: '/js/5/3' },
          { text: '4. 单例内置对象', link: '/js/5/4' },
          { text: '5. 小结', link: '/js/5/5' },
        ]
      },
      {
        text: '集合引用类型',
        collapsed: true,
        items: [
          { text: '1. Object', link: '/js/6/1' },
          { text: '2. Array', link: '/js/6/2' },
          { text: '3. 定型数组', link: '/js/6/3' },
          { text: '4. Map', link: '/js/6/4' },
          { text: '5. WeakMap', link: '/js/6/5' },
          { text: '6. Set', link: '/js/6/6' },
          { text: '7. WeakSet', link: '/js/6/7' },
          { text: '8. 迭代与扩展操作', link: '/js/6/8' },
          { text: '9. 小结', link: '/js/6/9' },
        ]
      },
      {
        text: '迭代器与生成器',
        collapsed: true,
        items: [
          { text: '1. 理解迭代', link: '/js/7/1' },
          { text: '2. 迭代器模式', link: '/js/7/2' },
          { text: '3. 生成器', link: '/js/7/3' },
          { text: '4. 小结', link: '/js/7/4' },
        ]
      },
      {
        text: '对象、类与面向对象编程',
        collapsed: true,
        items: [
          { text: '1. 理解对象', link: '/js/8/1' },
          { text: '2. 创建对象', link: '/js/8/2' },
          { text: '3. 继承', link: '/js/8/3' },
          { text: '4. 类', link: '/js/8/4' },
          { text: '5. 小结', link: '/js/8/5' },
        ]
      },
    ]
  },


  {
    text: 'ES6 入门',
    collapsed: true,
    items: [
      { text: '1. ECMAScript 6 简介', link: '/es6/1' },
      { text: '2. let 和 const 命令', link: '/es6/2' },
      { text: '3. 变量的解构赋值', link: '/es6/3' },
      { text: '4. 字符串的扩展', link: '/es6/4' },
      { text: '5. 字符串的新增方法', link: '/es6/5' },
      { text: '6. 正则的扩展', link: '/es6/6' },
      { text: '7. 数值的扩展', link: '/es6/7' },
      { text: '8. 函数的扩展', link: '/es6/8' },
      { text: '9. 数组的扩展', link: '/es6/9' },
      { text: '10. 对象的扩展', link: '/es6/10' },
      { text: '11. 对象的新增方法', link: '/es6/11' },
      { text: '12. 运算符的扩展', link: '/es6/12' },
      { text: '13. Symbol', link: '/es6/13' },
      { text: '14. Set 和 Map 数据结构', link: '/es6/14' },
      { text: '15. Proxy', link: '/es6/15' },
      { text: '16. Reflect', link: '/es6/16' },
      { text: '17. Promise 对象', link: '/es6/17' },
      { text: '18. Iterator 和 for...of 循环', link: '/es6/18' },
      { text: '19. Generator 函数的语法', link: '/es6/19' },
      { text: '20. Generator 函数的异步应用', link: '/es6/20' },
      { text: '21. async 函数', link: '/es6/21' },
      { text: '22. Class 的基本语法', link: '/es6/22' },
      { text: '23. Class 的继承', link: '/es6/23' },
      { text: '24. Module 的语法', link: '/es6/24' },
      { text: '25. Module 的加载实现', link: '/es6/25' },
      { text: '26. 编程风格', link: '/es6/26' },
      { text: '27. 读懂规格', link: '/es6/27' },
      { text: '28. 异步遍历器', link: '/es6/28' },
      { text: '29. ArrayBuffer', link: '/es6/29' },
      { text: '30. 最新提案', link: '/es6/30' },
      { text: '31. Decorator', link: '/es6/31' },
    ]
  },


  {
    text: '设计模式',
    collapsed: true,
    items: [
      { text: 'Get Started', link: '/patterns/design/' },
      { text: 'Singleton Pattern', link: '/patterns/design/singleton' },
      { text: 'Proxy Pattern', link: '/patterns/design/proxy' },
    ]
  },


  {
    text: '渲染模式',
    collapsed: true,
    items: [
      { text: 'Get Started', link: '/patterns/rendering/' },
      { text: 'Overview of React.js', link: '/patterns/rendering/react' },
      { text: 'Client-side Rendering', link: '/patterns/rendering/csr' },
      { text: 'Server-side Rendering', link: '/patterns/rendering/ssr' },
      { text: 'Static Rendering', link: '/patterns/rendering/ssg' },
    ]
  }
]