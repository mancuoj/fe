export const navbar = [
  {
    text: 'X',
    link: '/x/npm',
    activeMatch: 'x',
  },

  {
    text: 'Reading',
    activeMatch: '^/(hbs|patterns|juejin)/',
    items: [
      {
        text: '常看常新',
        items: [
          { text: '红宝书', link: '/hbs/4/', activeMatch: '/hbs/' },
          { text: '设计模式', link: '/patterns/', activeMatch: '/patterns/' },
        ],
      },
      {
        text: '掘金小册',
        items: [
          { text: 'TS 类型体操通关秘籍', link: '/juejin/tsch/', activeMatch: '/juejin/tsch/' },
          { text: 'TS 全面进阶指南', link: '/juejin/ts/', activeMatch: '/juejin/ts/' },
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
    ],
  },

  {
    text: 'Problems',
    activeMatch: '^/(algo|tsch|interview)/',
    items: [
      {
        text: '小镇做题家',
        items: [
          { text: '算法', link: '/algo/', activeMatch: '/algo/' },
          { text: '类型体操', link: '/tsch/', activeMatch: '/tsch/' },
        ],
      },
      { text: '面试题', link: '/interview/', activeMatch: '/interview/' },
    ],
  },
]
