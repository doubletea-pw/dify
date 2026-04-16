//#region i18n/zh-Hans/run-log.json
var actionLogs = "Action 日志";
var circularInvocationTip = "当前工作流中存在工具/节点的循环调用。";
var detail = "详情";
var input = "输入";
var result = "结果";
var tracing = "追踪";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "执行人",
	"meta.startTime": "开始时间",
	"meta.status": "状态",
	"meta.steps": "运行步数",
	"meta.time": "运行时间",
	"meta.title": "元数据",
	"meta.tokens": "总 token 数",
	"meta.version": "版本",
	result,
	"resultEmpty.link": "详细信息面板",
	"resultEmpty.tipLeft": "请转到",
	"resultEmpty.tipRight": "查看它。",
	"resultEmpty.title": "本次运行仅输出 JSON 格式，",
	"resultPanel.status": "状态",
	"resultPanel.time": "运行时间",
	"resultPanel.tokens": "总 token 数",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
