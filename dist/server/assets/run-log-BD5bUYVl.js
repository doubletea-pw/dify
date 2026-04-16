//#region i18n/zh-Hant/run-log.json
var actionLogs = "作日誌";
var circularInvocationTip = "當前工作流中存在工具/節點的迴圈調用。";
var detail = "詳情";
var input = "輸入";
var result = "結果";
var tracing = "追蹤";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "執行人",
	"meta.startTime": "開始時間",
	"meta.status": "狀態",
	"meta.steps": "執行步數",
	"meta.time": "執行時間",
	"meta.title": "元資料",
	"meta.tokens": "總 token 數",
	"meta.version": "版本",
	result,
	"resultEmpty.link": "詳細資訊面板",
	"resultEmpty.tipLeft": "請到",
	"resultEmpty.tipRight": "查看它。",
	"resultEmpty.title": "本運行僅輸出 JSON 格式，",
	"resultPanel.status": "狀態",
	"resultPanel.time": "執行時間",
	"resultPanel.tokens": "總 token 數",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
