import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'zh-Hans',
  title: "nuoxian's API 使用文档",
  description: "nuoxian's API是免费为用户提供网络数据接口调用的服务平台，我们致力于为用户提供稳定、快速的免费API数据接口服务。",
  head: [
    ['link', { rel: 'icon', href: '/statics/static/img/favicon.ico' }]
  ],
  lastUpdated: true,
  markdown: {
    config ( md ) {
      md.use ( groupIconMdPlugin )
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin ()
    ],
  },
  themeConfig: {
    nav: nav,
    sidebar: sidebar,

    // 编辑文章
    editLink: {
      pattern: 'https://github.com/nuoxi4n/API_Docs/blob/docs/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    // 最后更新
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    // 模糊搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: "搜索文档", buttonAriaLabel: '搜索文档' },
          modal: {
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            },
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件'
          }
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

    // 社交链接 
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nuoxi4n/API_Docs' }
    ],

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
  sitemap: {
    hostname: 'https://docs.nxvav.cn/'
  }
})
