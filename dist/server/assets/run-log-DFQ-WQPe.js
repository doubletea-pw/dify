//#region i18n/sl-SI/run-log.json
var actionLogs = "Dnevniki dejanj";
var circularInvocationTip = "V trenutnem poteku dela obstaja krožno sklicevanje orodij / vozlišč.";
var detail = "PODROBNOSTI";
var input = "VNOS";
var result = "REZULTAT";
var tracing = "SLEDENJE";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "Izvajalec",
	"meta.startTime": "Čas začetka",
	"meta.status": "Status",
	"meta.steps": "Koraki izvajanja",
	"meta.time": "Pretečeni čas",
	"meta.title": "METAPODATKI",
	"meta.tokens": "Skupni žetoni",
	"meta.version": "Različica",
	result,
	"resultEmpty.link": "panel podrobnosti",
	"resultEmpty.tipLeft": "prosimo, pojdite na ",
	"resultEmpty.tipRight": " za ogled.",
	"resultEmpty.title": "Ta zagon je izpisal samo format JSON,",
	"resultPanel.status": "STATUS",
	"resultPanel.time": "PRETEČENI ČAS",
	"resultPanel.tokens": "SKUPNI ŽETONI",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
