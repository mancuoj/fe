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

  { text: '前端', link: '/' },

  {
    text: '阅读',
    activeMatch: '^/(hbs|xns|juejin|patterns)/',
    items: [
      {
        text: '常看常新',
        items: [
          { text: '红宝书', link: '/hbs/4/', activeMatch: '/hbs/' },
          { text: '犀牛书', link: '/xns/1/', activeMatch: '/xns/' },
          { text: 'ES6 入门', link: 'https://es6.ruanyifeng.com/#docs/intro' },
          { text: 'javascript.info', link: 'https://zh.javascript.info/' },
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
        text: 'patterns.dev',
        items: [
          { text: '设计模式', link: '/patterns/design/', activeMatch: '/patterns/design/' },
          { text: '渲染模式', link: '/patterns/rendering/', activeMatch: '/patterns/rendering/' },
        ],
      }
    ]
  },

  {
    text: '做题家',
    activeMatch: '^/(algo|tsch|interview)/',
    items: [
      { text: '算法', link: '/algo/', activeMatch: '/algo/' },
      { text: '面试题', link: '/interview/', activeMatch: '/interview/' },
      { text: '类型体操', link: '/tsch/', activeMatch: '/tsch/' },
    ]
  },
]
