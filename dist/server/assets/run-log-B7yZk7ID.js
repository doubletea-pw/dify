//#region i18n/es-ES/run-log.json
var actionLogs = "Registros de acciones";
var circularInvocationTip = "Hay una invocación circular de herramientas/nodos en el flujo de trabajo actual.";
var detail = "DETALLE";
var input = "ENTRADA";
var result = "RESULTADO";
var tracing = "TRAZADO";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "Ejecutor",
	"meta.startTime": "Hora de inicio",
	"meta.status": "Estado",
	"meta.steps": "Pasos de ejecución",
	"meta.time": "Tiempo transcurrido",
	"meta.title": "METADATOS",
	"meta.tokens": "Total de tokens",
	"meta.version": "Versión",
	result,
	"resultEmpty.link": "panel de detalle",
	"resultEmpty.tipLeft": "por favor ve al ",
	"resultEmpty.tipRight": " para verlo.",
	"resultEmpty.title": "Esta ejecución solo produce formato JSON,",
	"resultPanel.status": "ESTADO",
	"resultPanel.time": "TIEMPO TRANSCURRIDO",
	"resultPanel.tokens": "TOTAL DE TOKENS",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
