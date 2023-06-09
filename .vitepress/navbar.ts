export const navbar = [
  {
    text: 'X',
    link: '/x/npm',
    activeMatch: '^/(x|py|go|java|rust)/',
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
        ],
      },
    ],
  },

  {
    text: 'Problems',
    activeMatch: '^/(daily|interview)/',
    items: [
      {
        text: '小镇做题家',
        items: [
          { text: '每日一题', link: '/daily/', activeMatch: '/daily/' },
          { text: '面试题', link: '/interview/', activeMatch: '/interview/' },
        ],
      },
    ],
  },
]
