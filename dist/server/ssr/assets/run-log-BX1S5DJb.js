//#region i18n/it-IT/run-log.json
var actionLogs = "Registri delle azioni";
var circularInvocationTip = "C'è una chiamata circolare di strumenti/nodi nel flusso di lavoro corrente.";
var detail = "DETTAGLIO";
var input = "INPUT";
var result = "RISULTATO";
var tracing = "TRACCIAMENTO";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "Esecutore",
	"meta.startTime": "Ora di Inizio",
	"meta.status": "Stato",
	"meta.steps": "Fasi Eseguite",
	"meta.time": "Tempo Trascorso",
	"meta.title": "METADATI",
	"meta.tokens": "Token Totali",
	"meta.version": "Versione",
	result,
	"resultEmpty.link": "pannello dei dettagli",
	"resultEmpty.tipLeft": "per favore vai al ",
	"resultEmpty.tipRight": " per visualizzarlo.",
	"resultEmpty.title": "Questa esecuzione ha prodotto solo output in formato JSON,",
	"resultPanel.status": "STATO",
	"resultPanel.time": "TEMPO TRASCORSO",
	"resultPanel.tokens": "TOKEN TOTALI",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
