//#region i18n/zh-Hant/dataset-hit-testing.json
var chunkDetail = "資料區塊詳細資訊";
var dateTimeFormat = "YYYY-MM-DD HH:mm";
var desc = "基於給定的查詢文字測試知識庫的檢索效果。";
var hitChunks = "命中 {{num}} 個子區塊";
var keyword = "關鍵字";
var noRecentTip = "最近無查詢結果";
var open = "打開";
var records = "記錄";
var settingTitle = "檢索設置";
var title = "檢索測試";
var viewChart = "查看向量圖表";
var viewDetail = "查看詳情";
var dataset_hit_testing_default = {
	chunkDetail,
	dateTimeFormat,
	desc,
	"hit.emptyTip": "檢索測試結果將展示在這裡",
	"hit.title": "{{num}} 檢索段落",
	hitChunks,
	"imageUploader.dropZoneTip": "將檔案拖曳到此上傳",
	"imageUploader.singleChunkAttachmentLimitTooltip": "單個區塊附件的數量不能超過 {{limit}}",
	"imageUploader.tip": "上傳或拖曳圖片（每張最多 {{batchCount}}，{{size}}MB）",
	"imageUploader.tooltip": "上傳圖片（每張最大 {{batchCount}}，{{size}}MB）",
	"input.countWarning": "不超過 200 個字元",
	"input.indexWarning": "僅支援高品質模式知識庫",
	"input.placeholder": "請輸入文字，建議使用簡短的陳述句。",
	"input.testing": "測試",
	"input.title": "來源文字",
	keyword,
	noRecentTip,
	open,
	records,
	settingTitle,
	"table.header.queryContent": "查詢內容",
	"table.header.source": "資料來源",
	"table.header.time": "時間",
	title,
	viewChart,
	viewDetail
};
//#endregion
export { chunkDetail, dateTimeFormat, dataset_hit_testing_default as default, desc, hitChunks, keyword, noRecentTip, open, records, settingTitle, title, viewChart, viewDetail };
