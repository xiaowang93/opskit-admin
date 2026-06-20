import { AdminShell } from "@/components/admin-shell";
import { DetailSection } from "@/components/detail-section";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";

const pagePatterns = [
  "AdminShell：后台整体布局，包括桌面端侧边栏和移动端菜单。",
  "PageHeader：页面标题、说明文字和右上角操作区。",
  "SummaryCardGrid：展示模块概览指标的卡片组。",
  "DataTableCard：带搜索框的表格列表区域，支持移动端横向滚动。",
  "StatusBadge：统一展示不同业务状态。",
  "DetailSection：详情抽屉里的信息分区，用来统一标题、内容和间距。",
  "EmptyState：用于没有数据或暂无内容的状态展示。",
  "LoadingState：用于异步加载或等待数据时的状态展示。",
  "Detail Drawer：在列表页中快速查看记录详情，不离开当前页面。",
];

const moduleQuestions = [
  "模块名称",
  "路由",
  "管理的业务对象",
  "主要使用角色",
  "页面模式",
  "用户主要目标",
  "列表字段",
  "状态字段",
  "概览卡片",
  "详情抽屉结构",
  "空状态和加载状态",
  "预期会修改哪些文件",
  "明确哪些文件不能修改",
];

const codexWorkflow = [
  "先填写 module brief",
  "再让 Codex 生成一个小而清晰的模块",
  "限定 Codex 只能改预期文件",
  "不允许 Codex 安装新依赖",
  "不允许 Codex 大范围重构",
  "生成后先运行 npm run build",
  "再运行 git status",
  "浏览器检查页面",
  "确认没问题再 commit",
];

const reviewChecklist = [
  "build 是否通过",
  "git status 是否只显示预期文件",
  "页面是否能正常打开",
  "表格是否能横向滚动",
  "drawer 是否能打开和关闭",
  "状态 badge 是否清楚",
  "空状态和加载状态是否合理",
  "是否没有修改无关文件",
];

const futureDirections = [
  "增加更多模块 brief 示例",
  "增加在线中文示例页面",
  "增加模块生成器说明页",
  "增加行业模板，比如物业、维修、供应商、账单、客户运营",
  "增加更多精选 shared patterns",
  "把常用 Codex prompts 整理成可复制模板",
];

const vendorOverview = [
  ["模块名称", "Vendors / 供应商管理"],
  ["路由", "/vendors"],
  ["业务对象", "外部服务商或供应商"],
  ["主要使用角色", "运营经理"],
  ["页面模式", "列表页 + 详情抽屉"],
  ["用户目标", "查看供应商状态、服务范围和运营可用性"],
  ["主要操作", "新增供应商"],
  ["次要操作", "查看详情、按状态筛选、检查风险供应商"],
];

const vendorFields = [
  "Vendor ID",
  "Vendor name",
  "Service type",
  "Status",
  "Coverage area",
  "Open jobs",
  "Last updated",
  "Actions",
];

const vendorStatuses = ["Active", "Pending review", "Inactive", "At risk"];

const vendorDrawerSections = [
  "Header：供应商名称、ID、服务类型、覆盖区域",
  "Summary section：状态、开放任务数、最近更新时间、联系人",
  "Context section：服务范围、可用性说明、风险说明",
  "Activity section：最近分配、审核记录、状态变更",
  "Next action：判断是否可以继续分配任务",
];

const vendorExpectedFiles = [
  "src/app/vendors/page.tsx",
  "src/data/vendors.ts",
  "src/components/vendor-detail-drawer.tsx",
  "src/components/admin-shell.tsx only if navigation needs a new link",
];

export default function ScaffoldGuidePage() {
  return (
    <AdminShell activeItem="Scaffold Guide">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <PageHeader
          title="OpsKit Scaffold 中文指南"
          description="用于沉淀 B2B SaaS 后台页面模式、模块生成流程和 AI-assisted prototyping 工作流。"
        />

        <Card>
          <DetailSection title="OpsKit Scaffold 是什么">
            <div className="space-y-3 text-sm leading-7 text-muted-foreground">
              <p>
                OpsKit Scaffold 是一个 AI-assisted B2B SaaS Admin UI
                Scaffold，用于页面模式探索、模块骨架生成和可运行 Demo
                搭建。
              </p>
              <p>
                它帮助团队沉淀 B 端后台常见页面结构，并通过 Codex
                辅助把模块 brief 转换为可访问的原型页面。
              </p>
              <p>
                OpsKit Scaffold
                不包含真实后端、权限系统或生产数据流程，适合用于演示页面模式和验证 AI-assisted
                prototyping 工作流。
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>理解 B 端后台常见页面结构</li>
                <li>
                  拆解列表页、详情抽屉、状态、空状态、加载状态、响应式布局
                </li>
                <li>建立组件化和页面模式抽象意识</li>
                <li>用 Codex 辅助把设计结构转成可访问 Demo</li>
                <li>通过 build、git status、commit 控制修改质量</li>
              </ul>
            </div>
          </DetailSection>
        </Card>

        <Card>
          <DetailSection title="它适合用来做什么">
            <div className="grid gap-4 text-sm leading-7 text-muted-foreground md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">适合</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>搭建 B2B SaaS 后台 Demo</li>
                  <li>快速生成后台模块页面骨架</li>
                  <li>沉淀常见页面模式</li>
                  <li>验证模块生成流程和页面结构</li>
                  <li>练习设计结构与 AI Coding 工具协作</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">使用边界</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>不包含真实后端、权限系统或生产数据流程</li>
                  <li>不用于替代正式产品研发流程</li>
                  <li>一次性生成大型复杂系统</li>
                  <li>不经过检查就直接合并代码</li>
                </ul>
              </div>
            </div>
          </DetailSection>
        </Card>

        <Card>
          <DetailSection title="当前已沉淀的页面模式">
            <ul className="grid gap-2 text-sm leading-7 text-muted-foreground md:grid-cols-2">
              {pagePatterns.map((pattern) => (
                <li key={pattern}>{pattern}</li>
              ))}
            </ul>
          </DetailSection>
        </Card>

        <Card>
          <DetailSection title="新增模块前要先想清楚什么">
            <div className="space-y-3 text-sm leading-7 text-muted-foreground">
              <p>
                在让 Codex 写代码之前，先定义模块范围。不要一开始就追求完整系统，先做一个小而清晰的模块骨架。
              </p>
              <ul className="grid list-disc gap-2 pl-5 md:grid-cols-2">
                {moduleQuestions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </DetailSection>
        </Card>

        <Card>
          <DetailSection
            title="模块 Brief 示例：供应商管理"
            description="这个示例展示新模块在生成代码前如何定义范围、字段、状态和详情抽屉结构。"
          >
            <div className="space-y-6 text-sm leading-7 text-muted-foreground">
              <div className="space-y-3">
                <h3 className="font-medium text-foreground">模块概览</h3>
                <dl className="grid gap-3 md:grid-cols-2">
                  {vendorOverview.map(([label, value]) => (
                    <div key={label} className="grid gap-1">
                      <dt className="text-muted-foreground">{label}</dt>
                      <dd className="font-medium text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-foreground">列表页字段</h3>
                <ul className="grid list-disc gap-2 pl-5 md:grid-cols-2">
                  {vendorFields.map((field) => (
                    <li key={field}>{field}</li>
                  ))}
                </ul>
                <p>
                  列表字段应该优先支持扫描、比较和行动，不要一开始就铺太多字段。
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-foreground">状态模型</h3>
                <ul className="grid list-disc gap-2 pl-5 md:grid-cols-2">
                  {vendorStatuses.map((status) => (
                    <li key={status}>{status}</li>
                  ))}
                </ul>
                <p>
                  状态会影响 badge 展示、筛选、行优先级和详情抽屉中的可用操作。
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-foreground">
                  详情抽屉结构
                </h3>
                <ul className="list-disc space-y-2 pl-5">
                  {vendorDrawerSections.map((section) => (
                    <li key={section}>{section}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-foreground">
                  未来代码生成范围
                </h3>
                <ul className="list-disc space-y-2 pl-5 font-mono text-xs leading-6 text-foreground">
                  {vendorExpectedFiles.map((file) => (
                    <li key={file}>{file}</li>
                  ))}
                </ul>
                <p>
                  当前区块只是 Brief 示例，不代表已经生成 Vendors 模块。
                </p>
              </div>
            </div>
          </DetailSection>
        </Card>

        <Card>
          <DetailSection title="推荐的模块生成流程">
            <div className="space-y-4 text-sm leading-7 text-muted-foreground">
              <ol className="list-decimal space-y-2 pl-5">
                {codexWorkflow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="rounded-lg border bg-muted/40 p-4 font-mono text-xs leading-6 text-foreground">
                <div>npm run build</div>
                <div>git status</div>
              </div>
            </div>
          </DetailSection>
        </Card>

        <Card>
          <DetailSection title="每次修改后的检查标准">
            <ul className="grid list-disc gap-2 pl-5 text-sm leading-7 text-muted-foreground md:grid-cols-2">
              {reviewChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </DetailSection>
        </Card>

        <Card>
          <DetailSection title="后续可以扩展的方向">
            <ul className="grid list-disc gap-2 pl-5 text-sm leading-7 text-muted-foreground md:grid-cols-2">
              {futureDirections.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </DetailSection>
        </Card>
      </div>
    </AdminShell>
  );
}
