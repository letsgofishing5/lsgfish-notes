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
      // { text: "总览", link: "/overview/index.md" },
      { text: "随笔", link: "/前端/index.md" },
      { text: "笔记", link: "/overview/index.md" },
      { text: "博客", link: "https://www.cnblogs.com/letgofishing/" },
    ],

    sidebar: {
      "/overview/index.md": createPublicSiderNav(),
      "/前端/": 随笔(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
/**
 * 创建侧边公共导航栏-总览
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
      "text": "前端组件库",
      items: [
        {
          text: "文章推荐",
          link: "/前端/组件库/recommend.md"
        }
      ]
    },
    {
      text: "typescript记录",
      items: [
        {
          text: "tsconfig.json配置说明",
          link: "/前端/ts/tsconfig.md",
        }
      ]
    },
    {
      text: "项目架构",
      items: [
        {
          text: "monorepo+pnpm",
          link: "/前端/项目架构/monorepo_pnpm.md",
        }
      ]
    }, {
      text: '三维开发',
      items: [
        {
          text: "cesium",
          link: "/前端/三维/cesium.md"
        }
      ]
    }
  ]
}
function 自学笔记() {
  return [

  ]
}