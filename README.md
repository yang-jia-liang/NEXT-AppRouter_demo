
# 目录结构

  src
  ├─ middleware.js                        - 中间件
  ├─ styles                               - 样式
  │  └─ variables.module.scss
  ├─ public
  │  └─ favicon.ico
  ├─ components                           - 组件
  │  └─ loading                           - 全局loading组件
  │     ├─ index.js
  │     └─ index.module.scss
  ├─ assets                               - 静态资源
  │  └─ images
  │     ├─ bear.jpg
  │     └─ transport.jpg
  ├─ app                                  - 页面目录
  │  ├─ layout.js                         - 全局布局
  │  ├─ page.js                           - 项目首页
  │  ├─ _private
  │  │  └─ page.js
  │  ├─ photo
  │  │  └─ [id]
  │  │     └─ page.js
  │  ├─ login
  │  │  ├─ layout.js
  │  │  └─ page.js
  │  ├─ blog
  │  │  ├─ loading.js
  │  │  ├─ page.js
  │  │  └─ page.module.scss
  │  ├─ about
  │  │  └─ page.js
  │  └─ (group_1)
  │     ├─ group_item_2
  │     │  └─ page.js
  │     └─ group_item_1
  │        └─ page.js
  └─ api                                    - 请求文件夹
  ├─ common.js                              -
  └─ route.js                               - 封装axios


# 前期准备
 - 划分功能目录
 - 设置端口号，HOST=0.0.0.0，方便访问
 - 设置打包输入目录名 dist，默认.next，和其他框架保持一致，减少理解时间
 - 安装axios，封装公共请求方法，请求拦截，响应结果处理
 - 安装sass，作为页面个性化需要的样式文件
 - 配置tailwindCSS，根据项目字体、颜色等规范，设置统一类名
 - 配置 git cz 规范 // todo
 - 配置 git 提交钩子，避免跳过git cz进行不规范提交 // todo


# 实现功能
- 私有化文件夹，按需求屏蔽对应路由文件
- 路由分组合并，按功能归类相关页面
- 动态路由文件夹，按请求处理不同输出


# 中间件功能
- 