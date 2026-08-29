import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'MyZsh文档',
  description: 'Oh-My-Zsh的轻量，快速代替',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      markdown: {
        codeCopyButton: {
          tooltipText: '复制',
          copiedText: '已复制'
        }
      },
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '文档', link: '/docs' }
        ],
        sidebar: [
          {
            text: '文档',
            items: [
              { text: '快速开始', link: '/quick-start' },
              { text: '安装', link: '/docs/install' },
              { text: '管理CLI', link: '/docs/myzsh-cli' },
              { text: '包管理CLI', link: '/docs/myzshpack-cli' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/mcmineleng/myzsh-docs' }
        ],
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        outline: {
          label: '页面导航'
        },
        lastUpdated: '最后更新于',
        editLink: {
          pattern: 'https://github.com/mcmineleng/myzsh-docs/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到明亮模式',
        darkModeSwitchTitle: '切换到暗黑模式',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单'
      }
    }
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索'
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '返回',
            noResultsText: '未找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '导航',
              closeText: '关闭'
            }
          }
        }
      }
    }
  }
})