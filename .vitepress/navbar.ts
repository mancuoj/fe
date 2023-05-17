export const navbar = [
  // {
  //   text: '前端',
  //   activeMatch: '^/($|vue|nuxt|react|next|angular)',
  //   items: [
  //     { text: 'React', link: '/react/', activeMatch: '/react/'  },
  //     { text: 'Next', link: '/next/', activeMatch: '/next/'  },
  //     { text: 'Vue', link: '/vue/', activeMatch: '/vue/'  },
  //     { text: 'Nuxt', link: '/nuxt/', activeMatch: '/nuxt/'  },
  //     { text: 'Angular', link: '/angular/', activeMatch: '/angular/'  },
  //   ]
  // },

  {
    text: 'Reading',
    activeMatch: '^/(hbs|xns|juejin)/',
    items: [
      {
        text: '常看常新',
        items: [
          { text: '红宝书', link: '/hbs/4/', activeMatch: '/hbs/' },
          { text: '犀牛书', link: '/xns/1/', activeMatch: '/xns/' },
        ],
      },
      {
        text: '掘金小册',
        items: [
          { text: 'TS 类型体操通关秘籍', link: '/juejin/tsch/', activeMatch: '/juejin/tsch' },
          { text: 'TS 全面进阶指南', link: '/juejin/ts/', activeMatch: '/juejin/ts/' },
        ],
      },
      {
        text: '在线阅读',
        items: [
          { text: 'ES6 入门', link: 'https://es6.ruanyifeng.com/#docs/intro' },
          { text: 'javascript.info', link: 'https://zh.javascript.info/' },
          { text: 'patterns.dev', link: 'https://www.patterns.dev/' },
        ]
      }
    ]
  },

  {
    text: 'Problems',
    activeMatch: '^/(algo|tsch|interview)/',
    items: [
      { text: '算法', link: '/algo/', activeMatch: '/algo/' },
      { text: '面试题', link: '/interview/', activeMatch: '/interview/' },
      { text: '类型体操', link: '/tsch/', activeMatch: '/tsch/' },
    ]
  },
]
