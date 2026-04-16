//#region i18n/pt-BR/run-log.json
var actionLogs = "Logs de ação";
var circularInvocationTip = "Há uma invocação circular de ferramentas/nós no fluxo de trabalho atual.";
var detail = "DETALHE";
var input = "ENTRADA";
var result = "RESULTADO";
var tracing = "RASTREIO";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "Executor",
	"meta.startTime": "Hora de Início",
	"meta.status": "Status",
	"meta.steps": "Passos de Execução",
	"meta.time": "Tempo Decorrido",
	"meta.title": "METADADOS",
	"meta.tokens": "Total de Tokens",
	"meta.version": "Versão",
	result,
	"resultEmpty.link": "painel de detalhes",
	"resultEmpty.tipLeft": "por favor vá para ",
	"resultEmpty.tipRight": " veja.",
	"resultEmpty.title": "Esta execução apenas produz o formato JSON,",
	"resultPanel.status": "STATUS",
	"resultPanel.time": "TEMPO DECORRIDO",
	"resultPanel.tokens": "TOTAL DE TOKENS",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
