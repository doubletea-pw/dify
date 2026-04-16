//#region i18n/ro-RO/run-log.json
var actionLogs = "Jurnale de acțiuni";
var circularInvocationTip = "Există o invocare circulară a instrumentelor/nodurilor în fluxul de lucru curent.";
var detail = "DETALIU";
var input = "INTRARE";
var result = "REZULTAT";
var tracing = "URMĂRIRE";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "Executor",
	"meta.startTime": "Timp de început",
	"meta.status": "Stare",
	"meta.steps": "Pași de rulare",
	"meta.time": "Timp scurs",
	"meta.title": "METADATE",
	"meta.tokens": "Total tokeni",
	"meta.version": "Versiune",
	result,
	"resultEmpty.link": "panoul de detalii",
	"resultEmpty.tipLeft": "vă rugăm să mergeți la ",
	"resultEmpty.tipRight": " pentru a o vizualiza.",
	"resultEmpty.title": "Această rulare generează doar format JSON,",
	"resultPanel.status": "STARE",
	"resultPanel.time": "TIMP SCURS",
	"resultPanel.tokens": "TOTAL TOKENI",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
