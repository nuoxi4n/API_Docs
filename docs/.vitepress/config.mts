import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  title: "nuoxian's API 使用文档",
  description: "nuoxian's API是免费为用户提供网络数据接口调用的服务平台，我们致力于为用户提供稳定、快速的免费API数据接口服务。",
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/doc/about-us' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '关于本站', link: '/doc/about-us' },
          { text: '快速开始', link: '/doc/getting-started' },
          { text: '更新日志', link: '/doc/changelog' },
          { text: '服务条款', link: 'https://api.nxvav.cn/tos.html' }
        ]
      },
      {
        text: '接口文档',
        items: [
          { text: '一言', link: '/doc/yiyan' }
        ]
      }
    ],

    // 编辑文章
    editLink: {
      pattern: 'https://github.com/nuoxi4n/API_Docs/blob/dev/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    // 模糊搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: "搜索文档" }
        }
      },
    },

    // 当前页面
    outlineTitle: "页面内容",

    // 文章翻页
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    
    //404页面的配置
    notFound: {
      title: "页面未找到",
      quote: "哎呀，您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！",
      linkText: "返回首页",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nuoxi4n/API_Docs' }
    ]
  },
  sitemap: {
    hostname: 'https://api.nxvav.cn'
  }
})
