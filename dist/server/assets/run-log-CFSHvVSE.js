//#region i18n/pl-PL/run-log.json
var actionLogs = "Dzienniki akcji";
var circularInvocationTip = "W bieżącym przepływie pracy istnieje cykliczne wywoływanie narzędzi/węzłów.";
var detail = "SZCZEGÓŁY";
var input = "WEJŚCIE";
var result = "WYNIK";
var tracing = "ŚLEDZENIE";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "Wykonawca",
	"meta.startTime": "Czas rozpoczęcia",
	"meta.status": "Status",
	"meta.steps": "Kroki wykonania",
	"meta.time": "Czas trwania",
	"meta.title": "METADANE",
	"meta.tokens": "Liczba tokenów",
	"meta.version": "Wersja",
	result,
	"resultEmpty.link": "panelu szczegółów",
	"resultEmpty.tipLeft": "proszę przejdź do ",
	"resultEmpty.tipRight": " aby je zobaczyć.",
	"resultEmpty.title": "To wykonanie generuje tylko format JSON,",
	"resultPanel.status": "STATUS",
	"resultPanel.time": "CZAS WYKONANIA",
	"resultPanel.tokens": "CAŁKOWITA LICZBA TOKENÓW",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
