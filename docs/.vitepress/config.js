import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Whale',
  description: 'Whale 的个人网站',
  lang: 'zh-CN',

  base: '/Whale.github.io/',

  themeConfig: {
    logo: false,

    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about/' },
      {
        text: '游戏 Wiki',
        items: [
          { text: '总览', link: '/wiki/' },
        ]
      },
      { text: '博客', link: '/blog/' },
      { text: '工具箱', link: '/tools/' },
    ],

    sidebar: {
      '/wiki/': [
        {
          text: '游戏 Wiki',
          items: [
            { text: '总览', link: '/wiki/' },
          ]
        }
      ],
      '/blog/': [
        {
          text: '博客',
          items: [
            { text: '文章列表', link: '/blog/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Whale' }
    ],

    footer: {
      message: '用 VitePress 构建',
      copyright: 'Copyright © 2024-present Whale'
    }
  }
})
