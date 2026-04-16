//#region i18n/ja-JP/dataset-hit-testing.json
var chunkDetail = "チャンクの詳細";
var dateTimeFormat = "YYYY/MM/DD hh:mm A";
var desc = "与えられたクエリテキストに基づいたナレッジのヒット効果をテストします。";
var hitChunks = "{{num}}個の子チャンクをヒット";
var keyword = "キーワード";
var noRecentTip = "最近のクエリ結果はありません。";
var open = "開く";
var records = "記録";
var settingTitle = "検索設定";
var title = "検索テスト";
var viewChart = "ベクトルチャートを表示";
var viewDetail = "詳細を表示";
var dataset_hit_testing_default = {
	chunkDetail,
	dateTimeFormat,
	desc,
	"hit.emptyTip": "検索テストの結果がここに表示されます。",
	"hit.title": "取得したチャンク{{num}}個",
	hitChunks,
	"imageUploader.dropZoneTip": "ファイルをここにドラッグしてアップロード",
	"imageUploader.singleChunkAttachmentLimitTooltip": "単一チャンクの添付ファイルの数は {{limit}} を超えることはできません",
	"imageUploader.tip": "画像をアップロードまたはドラッグ＆ドロップしてください（最大 {{batchCount}} 件、各 {{size}}MB まで）",
	"imageUploader.tooltip": "画像をアップロード（最大 {{batchCount}} 件、各 {{size}}MB まで）",
	"input.countWarning": "最大 200 文字まで入力できます。",
	"input.indexWarning": "高品質のナレッジのみ。",
	"input.placeholder": "テキストを入力してください。短い記述文がおすすめです。",
	"input.testing": "テスト",
	"input.title": "ソーステキスト",
	keyword,
	noRecentTip,
	open,
	records,
	settingTitle,
	"table.header.queryContent": "クエリ内容",
	"table.header.source": "ソース",
	"table.header.time": "時間",
	title,
	viewChart,
	viewDetail
};
//#endregion
export { chunkDetail, dateTimeFormat, dataset_hit_testing_default as default, desc, hitChunks, keyword, noRecentTip, open, records, settingTitle, title, viewChart, viewDetail };
