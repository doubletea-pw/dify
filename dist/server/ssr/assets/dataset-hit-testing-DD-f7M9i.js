//#region i18n/en-US/dataset-hit-testing.json
var chunkDetail = "Chunk Detail";
var dateTimeFormat = "MM/DD/YYYY hh:mm A";
var desc = "Test the hitting effect of the Knowledge based on the given query text.";
var hitChunks = "Hit {{num}} child chunks";
var keyword = "Keywords";
var noRecentTip = "No recent query results here";
var open = "Open";
var records = "Records";
var settingTitle = "Retrieval Setting";
var title = "Retrieval Test";
var viewChart = "View VECTOR CHART";
var viewDetail = "View Detail";
var dataset_hit_testing_default = {
	chunkDetail,
	dateTimeFormat,
	desc,
	"hit.emptyTip": "Retrieval Testing results will show here",
	"hit.title": "{{num}} Retrieved Chunks",
	hitChunks,
	"imageUploader.dropZoneTip": "Drag file here to upload",
	"imageUploader.singleChunkAttachmentLimitTooltip": "The number of single chunk attachments cannot exceed {{limit}}",
	"imageUploader.tip": "Upload or drop images (Max {{batchCount}}, {{size}}MB each)",
	"imageUploader.tooltip": "Upload images (Max {{batchCount}}, {{size}}MB each)",
	"input.countWarning": "Up to 200 characters.",
	"input.indexWarning": "High quality Knowledge only.",
	"input.placeholder": "Please enter a text, a short declarative sentence is recommended.",
	"input.testing": "Test",
	"input.title": "Source text",
	keyword,
	noRecentTip,
	open,
	records,
	settingTitle,
	"table.header.queryContent": "Query Content",
	"table.header.source": "Source",
	"table.header.time": "Time",
	title,
	viewChart,
	viewDetail
};
//#endregion
export { chunkDetail, dateTimeFormat, dataset_hit_testing_default as default, desc, hitChunks, keyword, noRecentTip, open, records, settingTitle, title, viewChart, viewDetail };
