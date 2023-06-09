export const sidebar = [
  { text: 'Start', link: '/' },

  {
    text: 'JavaScript',
    collapsed: true,
    items: [
      { text: 'TodoMVC', link: '/js/todomvc' },
      {
        text: 'Remake',
        // collapsed: true,
        items: [
          { text: 'JavaScript Info', link: '/js/remake/1' },
          { text: 'ES6 入门教程', link: '/js/remake/2' },
          { text: '红宝书', link: '/js/remake/3' },
        ],
      },
    ],
  },

  {
    text: 'Angular',
    collapsed: true,
    items: [
      { text: 'TodoMVC', link: '/angular/todomvc' },
      {
        text: 'Learn',
        // collapsed: true,
        items: [
          { text: '启动', link: '/angular/learn/docs/' },
          { text: 'Cheatsheet', link: '/angular/learn/docs/cheatsheet' },
          { text: 'First App', link: '/angular/learn/docs/first-app' },
          { text: 'Tour of Heroes', link: '/angular/learn/docs/tour-of-heroes' },
        ],
      },
    ],
  },

  {
    text: 'React',
    collapsed: true,
    items: [
      { text: 'React 项目的文件结构', link: '/react/file-structure' },
      {
        text: 'Learn',
        items: [
          { text: '启动', link: '/react/learn/docs/' },
        ],
      },
      {
        text: 'Next',
        items: [
          { text: '启动', link: '/react/next/' },
        ],
      },
    ],
  },

  {
    text: 'Vue',
    collapsed: true,
    items: [
      { text: 'VitePress 速通', link: '/vue/vitepress' },
    ],
  },
  { text: 'About Me', link: '/about' },
]

export const xSidebar = [
  { text: 'npm', link: '/x/npm' },
  { text: 'Monorepo', link: '/x/monorepo' },
  { text: 'Linux', link: '/x/linux' },
  { text: 'Git', link: '/x/git' },
  { text: 'MongoDB', link: '/x/mongodb' },
  {
    text: 'Go',
    // collapsed: true,
    items: [
      { text: '启动', link: '/go/' },
      { text: 'Cheatsheet', link: '/go/cheatsheet' },
      { text: 'TDD', link: '/go/tdd' },
      { text: 'Snippetbox', link: '/go/snippetbox' },
    ],
  },
  {
    text: 'Python',
    // collapsed: true,
    items: [
      { text: '启动', link: '/py/' },
      { text: 'Rye', link: '/py/rye' },
      { text: 'Poetry', link: '/py/poetry' },
      { text: 'Type Hints', link: '/py/types' },
      {
        text: 'FastAPI',
        items: [
          { text: '启动', link: '/py/fastapi/' },
          { text: 'FARM', link: '/py/fastapi/farm' },
        ],
      },
      {
        text: 'Flask',
        items: [
          { text: '启动', link: '/py/flask/' },
        ],
      },
    ],
  },
]

export const dailySidebar = [
  { text: '蠢人的总结', link: '/daily/' },
  {
    text: '每日一题',
    items: [
      { text: '23-06-27', link: 'https://juejin.cn/post/7249228528574414909' },
      { text: '23-06-28', link: 'https://juejin.cn/post/7249514793421783095' },
      { text: '23-06-29', link: 'https://juejin.cn/post/7250179028647624763' },
      { text: '23-06-30', link: 'https://juejin.cn/post/7250328942842150973' },
      { text: '23-07-03', link: 'https://juejin.cn/post/7251776511220465723' },
      { text: '23-07-04', link: 'https://juejin.cn/post/7251786367788613687' },
    ],
  },
]

export const patternsSidebar = [
  { text: '蠢人的总结', link: '/patterns/' },
  { text: '单例模式', link: '/patterns/singleton' },
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

export const hbsSidebar = [
  {
    text: 'Features',
    // collapsed: true,
    items: [
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
      {
        text: '第 9 章：代理与反射',
        link: '/hbs/9/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 10 章：函数',
        link: '/hbs/10/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 11 章：期约与异步函数',
        link: '/hbs/11/',
        collapsed: true,
        items: [
        ],
      },
    ],
  },

  {
    text: 'Advanced',
    // collapsed: true,
    items: [
      {
        text: '第 12 章：BOM',
        link: '/hbs/12/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 14 章：DOM',
        link: '/hbs/14/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 15 章：DOM 扩展',
        link: '/hbs/15/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 16 章：DOM2 和 DOM3',
        link: '/hbs/16/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 17 章：事件',
        link: '/hbs/17/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 19 章：表单脚本',
        link: '/hbs/19/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 23 章：JSON',
        link: '/hbs/23/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 24 章：网络请求与远程资源',
        link: '/hbs/24/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 25 章：客户端存储',
        link: '/hbs/25/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 26 章：模块',
        link: '/hbs/26/',
        collapsed: true,
        items: [
        ],
      },
    ],
  },

  {
    text: 'Others',
    items: [
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
        text: '第 13 章：客户端检测',
        link: '/hbs/13/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 18 章：动画与 Canvas 图形',
        link: '/hbs/18/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 20 章：JavaScript API',
        link: '/hbs/20/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 21 章：错误处理与调试',
        link: '/hbs/21/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 22 章：处理 XML',
        link: '/hbs/22/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 27 章：工作者线程',
        link: '/hbs/27/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: '第 28 章：最佳实践',
        link: '/hbs/28/',
        collapsed: true,
        items: [
        ],
      },
    ],
  },
]

export const juejinTschSidebar = [
  { text: '蠢人的总结', link: '/juejin/tsch/' },
  {
    text: '简介',
    collapsed: false,
    items: [
      { text: '1. 如何阅读', link: '/juejin/tsch/1' },
      { text: '2. TypeScript', link: '/juejin/tsch/2' },
      { text: '3. 类型体操', link: '/juejin/tsch/3' },
      { text: '4. 类型和类型运算', link: '/juejin/tsch/4' },
    ],
  },
  {
    text: '方法',
    collapsed: false,
    items: [
      { text: '5. 模式匹配做提取', link: '/juejin/tsch/5' },
      { text: '6. 重新构造做变换', link: '/juejin/tsch/6' },
      { text: '7. 递归复用做循环', link: '/juejin/tsch/7' },
      { text: '8. 数组长度做计数', link: '/juejin/tsch/8' },
      { text: '9. 联合分散可简化', link: '/juejin/tsch/9' },
      { text: '10. 特殊特性要记清', link: '/juejin/tsch/10' },
      { text: '11. 类型体操顺口溜', link: '/juejin/tsch/11' },
    ],
  },
  {
    text: '实战',
    collapsed: true,
    items: [
      { text: '12. 内置的高级类型', link: '/juejin/tsch/12' },
      { text: '13. 类型编程的意义', link: '/juejin/tsch/13' },
      { text: '14. 综合实战一', link: '/juejin/tsch/14' },
      { text: '15. 综合实战二', link: '/juejin/tsch/15' },
      { text: '16. 新语法 infer extends', link: '/juejin/tsch/16' },
    ],
  },
  {
    text: '原理和总结',
    collapsed: true,
    items: [
      { text: '17. 逆变、协变、双向协变、不变', link: '/juejin/tsch/17' },
      { text: '18. tsc 还是 babel', link: '/juejin/tsch/18' },
      { text: '19. 实现简易 TS 类型检查', link: '/juejin/tsch/19' },
      { text: '20. 如何阅读 TS 源码', link: '/juejin/tsch/20' },
      { text: '21. 一些特殊情况', link: '/juejin/tsch/21' },
      { text: '22. 小册总结', link: '/juejin/tsch/22' },
    ],
  },
  {
    text: '加餐',
    collapsed: true,
    items: [
      { text: '23. 三种类型来源和三种模块语法', link: '/juejin/tsch/23' },
      { text: '24. 优化 tsc 编译性能', link: '/juejin/tsch/24' },
      { text: '25. 一道三层的 ts 面试题', link: '/juejin/tsch/25' },
      { text: '26. 两个真实的类型编程案例', link: '/juejin/tsch/26' },
      { text: '27. 新语法 satisfies', link: '/juejin/tsch/27' },
    ],
  },
]
