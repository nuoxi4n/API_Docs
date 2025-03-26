import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "nuoxian's API 使用文档",
  description: "nuoxian's API是免费为用户提供网络数据接口调用的服务平台，我们致力于为用户提供稳定、快速的免费API数据接口服务。",
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
          { text: '快速开始', link: '/doc/getting-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nuoxi4n/API_Docs' }
    ]
  }
})
