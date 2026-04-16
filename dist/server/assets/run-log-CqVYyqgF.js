//#region i18n/uk-UA/run-log.json
var actionLogs = "Журнали дій";
var circularInvocationTip = "У поточному робочому процесі існує круговий виклик інструментів/вузлів.";
var detail = "ДЕТАЛІ";
var input = "ВВЕДЕННЯ";
var result = "РЕЗУЛЬТАТ";
var tracing = "ВІДСЛІДКУВАННЯ";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "Виконавець",
	"meta.startTime": "Час початку",
	"meta.status": "Статус",
	"meta.steps": "Кроки виконання",
	"meta.time": "Час виконання",
	"meta.title": "МЕТАДАНІ",
	"meta.tokens": "Загальна кількість токенів",
	"meta.version": "Версія",
	result,
	"resultEmpty.link": "панель деталей",
	"resultEmpty.tipLeft": "будь ласка, перейдіть до ",
	"resultEmpty.tipRight": " переглянути.",
	"resultEmpty.title": "Цей запуск лише вихідного формату JSON,",
	"resultPanel.status": "СТАТУС",
	"resultPanel.time": "ЧАС ВИКОНАННЯ",
	"resultPanel.tokens": "ЗАГАЛЬНА КІЛЬКІСТЬ ТОКЕНІВ",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
