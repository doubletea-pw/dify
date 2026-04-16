//#region i18n/id-ID/run-log.json
var actionLogs = "Log Tindakan";
var circularInvocationTip = "Ada pemanggilan melingkar alat/simpul dalam alur kerja saat ini.";
var detail = "DETAIL";
var input = "MASUKAN";
var result = "HASIL";
var tracing = "MENELUSURI";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "Pelaksana",
	"meta.startTime": "Waktu Mulai",
	"meta.status": "Keadaan",
	"meta.steps": "Jalankan Langkah-langkah",
	"meta.time": "Waktu yang telah berlalu",
	"meta.title": "METADATA",
	"meta.tokens": "Total Token",
	"meta.version": "Versi",
	result,
	"resultEmpty.link": "Panel Detail",
	"resultEmpty.tipLeft": "silakan pergi ke",
	"resultEmpty.tipRight": "lihat itu.",
	"resultEmpty.title": "Eksekusi ini hanya mengeluarkan format JSON,",
	"resultPanel.status": "KEADAAN",
	"resultPanel.time": "WAKTU BERLALU",
	"resultPanel.tokens": "TOTAL TOKEN",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
