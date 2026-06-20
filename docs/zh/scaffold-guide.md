# OpsKit Scaffold 中文使用指南

## 1. OpsKit Scaffold 是什么

OpsKit Scaffold 是一个 AI-assisted B2B SaaS Admin UI Scaffold。

它不是一个真实商业系统，也不是 production-ready frontend framework。它的目标是帮助设计师沉淀 B 端后台常见页面模式，并用 Codex 辅助生成可运行 Demo。

它适合用来表达这些能力：

- 理解 B 端后台常见页面结构
- 能拆解列表页、详情抽屉、状态、空状态、加载状态、响应式布局
- 有组件化和页面模式抽象意识
- 能用 Codex 辅助把设计结构转成可访问 Demo
- 能通过 build、git status、commit 控制修改质量

## 2. 它适合用来做什么

OpsKit Scaffold 适合：

- 搭建 B2B SaaS 后台 Demo
- 快速生成后台模块页面骨架
- 沉淀常见页面模式
- 作为作品集里的 AI-assisted Demo Kit
- 练习设计师与 AI Coding 工具协作

它不适合：

- 直接当真实商业系统上线
- 宣称自己是专业前端开发成果
- 一次性生成大型复杂系统
- 不经过检查就直接合并代码

## 3. 当前已沉淀的页面模式

- AdminShell：后台整体布局，包括桌面端侧边栏和移动端菜单。
- PageHeader：页面标题、说明文字和右上角操作区。
- SummaryCardGrid：展示模块概览指标的卡片组。
- DataTableCard：带搜索框的表格列表区域，支持移动端横向滚动。
- StatusBadge：统一展示不同业务状态。
- DetailSection：详情抽屉里的信息分区，用来统一标题、内容和间距。
- EmptyState：用于没有数据或暂无内容的状态展示。
- LoadingState：用于异步加载或等待数据时的状态展示。
- Detail Drawer：在列表页中快速查看记录详情，不离开当前页面。

## 4. 新增一个模块前应该先想清楚什么

在让 Codex 写代码之前，建议先定义：

- 模块名称
- 路由
- 管理的业务对象
- 主要使用角色
- 页面模式
- 用户主要目标
- 列表字段
- 状态字段
- 概览卡片
- 详情抽屉结构
- 空状态和加载状态
- 预期会修改哪些文件
- 明确哪些文件不能修改

不要一开始就追求完整系统。先做一个小而清晰的模块骨架，让页面结构、字段、状态和主要操作先跑通。

## 5. 推荐的 Codex 工作方式

推荐流程：

1. 先填写 module brief
2. 再让 Codex 生成一个小模块
3. 限定 Codex 只能改预期文件
4. 不允许 Codex 安装新依赖
5. 不允许 Codex 大范围重构
6. 生成后先运行 npm run build
7. 再运行 git status
8. 浏览器检查页面
9. 确认没问题再 commit

常用检查命令：

```bash
npm run build
git status
```

## 6. 每次修改后的检查标准

每次修改后建议检查：

- build 是否通过
- git status 是否只显示预期文件
- 页面是否能正常打开
- 表格是否能横向滚动
- drawer 是否能打开和关闭
- 状态 badge 是否清楚
- 空状态和加载状态是否合理
- 是否没有修改无关文件

## 7. 作品集里的表达方式

可以这样描述：

“这个项目不是我独立开发的商业系统，而是我用 Codex 辅助搭建的 B2B SaaS Admin Demo Kit。我的重点是拆解页面结构、定义模块和组件职责、控制每一步修改范围，并通过 build、浏览器检查和 git commit 保证结果稳定。我能理解基本项目结构和组件关系，但不把自己包装成前端工程师。”

## 8. 后续可以扩展的方向

- 增加更多模块 brief 示例
- 增加在线中文示例页面
- 增加模块生成器说明页
- 增加行业模板，比如物业、维修、供应商、账单、客户运营
- 增加更多精选 shared patterns
- 把常用 Codex prompts 整理成可复制模板
