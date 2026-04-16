//#region i18n/ru-RU/run-log.json
var actionLogs = "Журналы действий";
var circularInvocationTip = "В текущем рабочем процессе существует циклический вызов инструментов/узлов.";
var detail = "ДЕТАЛИ";
var input = "ВВОД";
var result = "РЕЗУЛЬТАТ";
var tracing = "ТРАССИРОВКА";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "Исполнитель",
	"meta.startTime": "Время начала",
	"meta.status": "Статус",
	"meta.steps": "Шаги выполнения",
	"meta.time": "Прошедшее время",
	"meta.title": "МЕТАДАННЫЕ",
	"meta.tokens": "Всего токенов",
	"meta.version": "Версия",
	result,
	"resultEmpty.link": "панель деталей",
	"resultEmpty.tipLeft": "пожалуйста, перейдите на ",
	"resultEmpty.tipRight": " чтобы просмотреть его.",
	"resultEmpty.title": "Этот запуск выводит только формат JSON,",
	"resultPanel.status": "СТАТУС",
	"resultPanel.time": "ПРОШЕДШЕЕ ВРЕМЯ",
	"resultPanel.tokens": "ВСЕГО ТОКЕНОВ",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
