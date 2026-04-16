//#region i18n/zh-Hans/dataset-hit-testing.json
var chunkDetail = "段落详情";
var dateTimeFormat = "YYYY-MM-DD HH:mm";
var desc = "根据给定的查询文本测试知识的召回效果。";
var hitChunks = "命中 {{num}} 个子段落";
var keyword = "关键词";
var noRecentTip = "最近无查询结果";
var open = "打开";
var records = "记录";
var settingTitle = "召回设置";
var title = "召回测试";
var viewChart = "查看向量图表";
var viewDetail = "查看详情";
var dataset_hit_testing_default = {
	chunkDetail,
	dateTimeFormat,
	desc,
	"hit.emptyTip": "召回测试结果将展示在这里",
	"hit.title": "{{num}} 个召回段落",
	hitChunks,
	"imageUploader.dropZoneTip": "拖拽文件到这里上传",
	"imageUploader.singleChunkAttachmentLimitTooltip": "单个分段附件数量不能超过 {{limit}}",
	"imageUploader.tip": "上传或拖拽图片 (最多 {{batchCount}} 个，每个大小不超过 {{size}}MB)",
	"imageUploader.tooltip": "上传图片 (最多 {{batchCount}} 个，每个大小不超过 {{size}}MB)",
	"input.countWarning": "不超过 200 个字符",
	"input.indexWarning": "仅支持高质量模式知识库",
	"input.placeholder": "请输入文本，建议使用简短的陈述句。",
	"input.testing": "测试",
	"input.title": "源文本",
	keyword,
	noRecentTip,
	open,
	records,
	settingTitle,
	"table.header.queryContent": "查询内容",
	"table.header.source": "数据源",
	"table.header.time": "时间",
	title,
	viewChart,
	viewDetail
};
//#endregion
export { chunkDetail, dateTimeFormat, dataset_hit_testing_default as default, desc, hitChunks, keyword, noRecentTip, open, records, settingTitle, title, viewChart, viewDetail };
