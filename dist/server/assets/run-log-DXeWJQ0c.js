//#region i18n/ar-TN/run-log.json
var actionLogs = "سجلات العمل";
var circularInvocationTip = "يوجد استدعاء دائري للأدوات/العقد في سير العمل الحالي.";
var detail = "تفاصيل";
var input = "إدخال";
var result = "نتيجة";
var tracing = "تتبع";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "المنفذ",
	"meta.startTime": "وقت البدء",
	"meta.status": "الحالة",
	"meta.steps": "خطوات التشغيل",
	"meta.time": "الوقت المستغرق",
	"meta.title": "البيانات الوصفية",
	"meta.tokens": "إجمالي الرموز",
	"meta.version": "الإصدار",
	result,
	"resultEmpty.link": "لوحة التفاصيل",
	"resultEmpty.tipLeft": "يرجى الذهاب إلى ",
	"resultEmpty.tipRight": " لعرضه.",
	"resultEmpty.title": "هذا التشغيل يخرج فقط تنسيق JSON،",
	"resultPanel.status": "الحالة",
	"resultPanel.time": "الوقت المستغرق",
	"resultPanel.tokens": "إجمالي الرموز",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
