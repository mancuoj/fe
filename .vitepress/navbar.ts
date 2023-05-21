export const navbar = [
  {
    text: 'Reading',
    activeMatch: '^/(hbs|xns|jsdp|juejin)/',
    items: [
      {
        text: '常看常新',
        items: [
          { text: '红宝书', link: '/hbs/4/', activeMatch: '/hbs/' },
          { text: '犀牛书', link: '/xns/1/', activeMatch: '/xns/' },
          { text: '设计模式', link: '/jsdp/1/', activeMatch: '/jsdp/' },
        ],
      },
      {
        text: '在线阅读',
        items: [
          { text: 'ES6 入门', link: 'https://es6.ruanyifeng.com/#docs/intro' },
          { text: 'javascript.info', link: 'https://zh.javascript.info/' },
          { text: 'patterns.dev', link: 'https://www.patterns.dev/' },
          { text: 'JavaScript 二十年', link: 'https://cn.history.js.org/' },
        ],
      },
      {
        text: '掘金小册',
        items: [
          { text: 'TS 类型体操通关秘籍', link: '/juejin/tsch/', activeMatch: '/juejin/tsch' },
          { text: 'TS 全面进阶指南', link: '/juejin/ts/', activeMatch: '/juejin/ts/' },
        ],
      },
    ],
  },

  {
    text: 'Problems',
    activeMatch: '^/(algo|tsch|interview)/',
    items: [
      { text: '算法', link: '/algo/', activeMatch: '/algo/' },
      { text: '面试题', link: '/interview/', activeMatch: '/interview/' },
      { text: '类型体操', link: '/tsch/', activeMatch: '/tsch/' },
    ],
  },
]
