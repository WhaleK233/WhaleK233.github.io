import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Whale',
      description: 'Whale 的个人网站',
      label: '中文'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Whale',
      description: "Whale's personal site",
      label: 'English'
    }
  },

  themeConfig: {
    logo: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/WhaleK233' }
    ],

    locales: {
      '/': {
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
          ],
          '/tools/': [
            {
              text: '工具箱',
              items: [
                { text: '总览', link: '/tools/' },
              ]
            }
          ]
        },

        footer: {
          message: '用 VitePress 构建',
          copyright: 'Copyright © 2024-present Whale'
        }
      },

      '/en/': {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'About', link: '/en/about/' },
          {
            text: 'Game Wiki',
            items: [
              { text: 'Overview', link: '/en/wiki/' },
            ]
          },
          { text: 'Blog', link: '/en/blog/' },
          { text: 'Tools', link: '/en/tools/' },
        ],

        sidebar: {
          '/en/wiki/': [
            {
              text: 'Game Wiki',
              items: [
                { text: 'Overview', link: '/en/wiki/' },
              ]
            }
          ],
          '/en/blog/': [
            {
              text: 'Blog',
              items: [
                { text: 'Posts', link: '/en/blog/' },
              ]
            }
          ],
          '/en/tools/': [
            {
              text: 'Tools',
              items: [
                { text: 'Overview', link: '/en/tools/' },
              ]
            }
          ]
        },

        footer: {
          message: 'Built with VitePress',
          copyright: 'Copyright © 2024-present Whale'
        }
      }
    }
  }
})
