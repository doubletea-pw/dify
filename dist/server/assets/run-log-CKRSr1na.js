//#region i18n/nl-NL/run-log.json
var actionLogs = "Action Logs";
var circularInvocationTip = "There is circular invocation of tools/nodes in the current workflow.";
var detail = "DETAIL";
var input = "INPUT";
var result = "RESULT";
var tracing = "TRACING";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "Executor",
	"meta.startTime": "Start Time",
	"meta.status": "Status",
	"meta.steps": "Run Steps",
	"meta.time": "Elapsed Time",
	"meta.title": "METADATA",
	"meta.tokens": "Total Tokens",
	"meta.version": "Version",
	result,
	"resultEmpty.link": "detail panel",
	"resultEmpty.tipLeft": "please go to the ",
	"resultEmpty.tipRight": " view it.",
	"resultEmpty.title": "This run only output JSON format,",
	"resultPanel.status": "STATUS",
	"resultPanel.time": "ELAPSED TIME",
	"resultPanel.tokens": "TOTAL TOKENS",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
