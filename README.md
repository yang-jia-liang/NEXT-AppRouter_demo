
# 目录结构
- src/api                   请求文件夹
- src/api/common.js         通用模块请求
- src/api/route.js          封装axios，请求拦截，响应结果处理

- src/app                   页面文件目录
- src/app/favicon.ico       网站图标
- src/app/[lang]            国际化动态路由文件目录
- src/app/[lang]/layout.js  全局布局文件

- src/assets                静态资源目录

- src/components            组件目录
- src/components/loading.js loading组件

- src/styles                样式目录
- src/utils                 工具目录

- src/middleware.js         中间件文件


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
- 支持国际化


# 中间件功能
- 匹配国际化路由，动态切换语言