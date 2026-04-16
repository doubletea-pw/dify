//#region i18n/tr-TR/run-log.json
var actionLogs = "Eylem Günlükleri";
var circularInvocationTip = "Geçerli iş akışında araçların/düğümlerin döngüsel olarak çağrılması vardır.";
var detail = "DETAY";
var input = "GİRİŞ";
var result = "SONUÇ";
var tracing = "İZLEME";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "Yürütücü",
	"meta.startTime": "Başlama Zamanı",
	"meta.status": "Durum",
	"meta.steps": "Çalıştırma Adımları",
	"meta.time": "Geçen Zaman",
	"meta.title": "METADATA",
	"meta.tokens": "Toplam Token",
	"meta.version": "Sürüm",
	result,
	"resultEmpty.link": "detay paneli",
	"resultEmpty.tipLeft": "lütfen ",
	"resultEmpty.tipRight": "ne gidin ve görüntüleyin.",
	"resultEmpty.title": "Bu çalıştırma sadece JSON formatında çıktı verdi,",
	"resultPanel.status": "DURUM",
	"resultPanel.time": "GEÇEN ZAMAN",
	"resultPanel.tokens": "TOPLAM TOKEN",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
