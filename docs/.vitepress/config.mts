import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "笔记",
  base: "/lsgfish-notes/",
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
      { text: "随笔", link: "/overview/index.md" },
      { text: "文章阅读", link: "/目录文档/文章阅读/read" },
      { text: "博客", link: "https://www.cnblogs.com/letgofishing/" },
    ],

    sidebar: {
      "/overview/index.md": createPublicSiderNav(),
      "目录文档": [
        ...随笔()
      ],
      "/目录文档/文章阅读/": [
        {
          text: "文章阅读",
          link: "./read"
        }
      ],
      // "/目录文档/前端/三维/": [
      //   {
      //     text: "cesium知识点",
      //     link: "./cesium"
      //   },
      //   {
      //     text: "cesium代码片段",
      //     link: "./cesium-snippet"
      //   },
      // ],
      // "/目录文档/前端/基础内容/": [
      //   {
      //     text: "HTML",
      //     link: "./HTML"
      //   },
      // ],
      // "/目录文档/前端/js/": [
      //   {
      //     text: "JS设计模式",
      //     link: "./JS设计模式"
      //   },
      // ],
      // "/目录文档/前端/ts/": [
      //   {
      //     text: "typescript笔记",
      //     link: "./typescript"
      //   },
      //   {
      //     text: "tsconfig.json配置说明",
      //     link: "./tsconfig",
      //   }
      // ],
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
    ...随笔()
  ];
}

// 日常随笔
function 随笔() {
  return [
    {
      text: "零碎记录",
      items: [
        {
          text: "async/await 异步传染性与解决方案",
          link: "/目录文档/随笔/async与await的异步传染"
        }
      ]
    },
    {
      "text": "HTML",
      "link": "/目录文档/前端/基础内容/HTML"
    },
    {
      "text": "js",
      items: [{
        "text": "JS设计模式",
        "link": "/目录文档/前端/js/JS设计模式"
      },
      ]
    },
    {
      text: "TypeScript",
      items: [
        {
          text: "typescript笔记",
          link: "/目录文档/前端/ts/typescript.md",
        },
      ]
    },
    {
      text: "vue3",
      link: "/目录文档/前端/vue3/vue3+ts学习疑问笔记"
    }, {
      text: '三维开发',
      items: [
        {
          text: "cesium",
          link: "/目录文档/前端/三维/cesium.md"
        }
      ]
    },
    {
      "text": "前端组件库",
      items: [
        {
          text: "文章推荐",
          link: "/目录文档/前端/组件库/recommend.md"
        }
      ]
    },
    {
      "text": "打包工具",
      items: [
        {
          text: "vite打包工具使用",
          link: "/目录文档/前端/打包工具/vite.md"
        }
      ]
    },

    {
      text: "项目架构",
      items: [
        {
          text: "monorepo+pnpm",
          link: "/目录文档/前端/项目架构/monorepo_pnpm.md",
        }
      ]
    },
  ]
}