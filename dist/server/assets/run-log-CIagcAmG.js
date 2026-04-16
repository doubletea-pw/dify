//#region i18n/de-DE/run-log.json
var actionLogs = "Aktionsprotokolle";
var circularInvocationTip = "Es gibt einen zirkulären Aufruf von Werkzeugen/Knoten im aktuellen Workflow.";
var detail = "DETAILS";
var input = "EINGABE";
var result = "ERGEBNIS";
var tracing = "NACHVERFOLGUNG";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "Ausführender",
	"meta.startTime": "Startzeit",
	"meta.status": "Status",
	"meta.steps": "Ausführungsschritte",
	"meta.time": "Verstrichene Zeit",
	"meta.title": "METADATEN",
	"meta.tokens": "Gesamtzeichen",
	"meta.version": "Version",
	result,
	"resultEmpty.link": "Gruppe Detail",
	"resultEmpty.tipLeft": "Bitte gehen Sie zum ",
	"resultEmpty.tipRight": "ansehen.",
	"resultEmpty.title": "Dieser Lauf gibt nur das JSON-Format aus",
	"resultPanel.status": "STATUS",
	"resultPanel.time": "VERSTRICHENE ZEIT",
	"resultPanel.tokens": "GESAMTZEICHEN",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
