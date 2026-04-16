//#region i18n/fa-IR/run-log.json
var actionLogs = "گزارش های اکشن";
var circularInvocationTip = "فراخوانی دایره ای ابزارها/گره ها در گردش کار فعلی وجود دارد.";
var detail = "جزئیات";
var input = "ورودی";
var result = "نتیجه";
var tracing = "ردیابی";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "اجراکننده",
	"meta.startTime": "زمان شروع",
	"meta.status": "وضعیت",
	"meta.steps": "گام‌های اجرا",
	"meta.time": "زمان گذشته",
	"meta.title": "فراداده",
	"meta.tokens": "کل توکن‌ها",
	"meta.version": "نسخه",
	result,
	"resultEmpty.link": "پنل جزئیات",
	"resultEmpty.tipLeft": "لطفاً به ",
	"resultEmpty.tipRight": " بروید و آن را مشاهده کنید.",
	"resultEmpty.title": "این اجرا فقط خروجی به فرمت JSON دارد،",
	"resultPanel.status": "وضعیت",
	"resultPanel.time": "زمان گذشته",
	"resultPanel.tokens": "کل توکن‌ها",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
