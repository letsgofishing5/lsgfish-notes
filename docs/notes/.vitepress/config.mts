import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "笔记",
  description: "自学笔记与日常随笔",
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "总览", link: "/overview/index.md" },
      { text: "我的博客", link: "https://www.cnblogs.com/letgofishing/" },
      { text: "日常随笔", items: 随笔() },
      { text: "自学笔记", items: 自学笔记() },
    ],

    sidebar: {
      "/overview/index.md": createPublicSiderNav(),
      "/learn": createPublicSiderNav(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
/**
 * 创建侧边公共导航栏
 * @returns
 */
function createPublicSiderNav() {
  return [
    {
      text: "总览",
      items: [
        {
          text: "介绍",
          link: "/overview/index.md",
        },
      ],
    },
    {
      text: "日常随笔",
      collapsible: true,
      collapsed: true,
      items: 随笔(),
    },
    {
      text: "自学笔记",
      collapsible: true,
      collapsed: true,
      items: 自学笔记(),
    },
  ];
}

// 日常随笔
function 随笔() {
  return [
    {
      text: "ts的配置文件",
      link: "/前端/ts/tsconfig.md",
    },
  ]
}
function 自学笔记() {
  return [

  ]
}