//#region i18n/ko-KR/dataset-hit-testing.json
var chunkDetail = "청크 디테일 (Chunk Detail)";
var dateTimeFormat = "YYYY/MM/DD HH:mm";
var desc = "주어진 쿼리 텍스트에 기반하여 지식의 검색 효과를 테스트합니다.";
var hitChunks = "{{num}}개의 자식 청크를 히트했습니다.";
var keyword = "키워드";
var noRecentTip = "최근 쿼리 결과가 없습니다.";
var open = "열다";
var records = "레코드";
var settingTitle = "검색 설정";
var title = "검색 테스트";
var viewChart = "벡터 차트 보기";
var viewDetail = "자세히보기";
var dataset_hit_testing_default = {
	chunkDetail,
	dateTimeFormat,
	desc,
	"hit.emptyTip": "검색 테스트 결과가 여기에 표시됩니다.",
	"hit.title": "{{num}} 검색 결과 단락",
	hitChunks,
	"imageUploader.dropZoneTip": "업로드할 파일을 여기에 끌어놓으세요",
	"imageUploader.singleChunkAttachmentLimitTooltip": "단일 청크 첨부 파일의 수는 {{limit}}를 초과할 수 없습니다",
	"imageUploader.tip": "이미지를 업로드하거나 드래그하세요 (최대 {{batchCount}}장, 장당 {{size}}MB)",
	"imageUploader.tooltip": "이미지 업로드 (최대 {{batchCount}}개, 개당 {{size}}MB)",
	"input.countWarning": "최대 200 자까지 입력할 수 있습니다.",
	"input.indexWarning": "고품질 지식만.",
	"input.placeholder": "텍스트를 입력하세요. 간결한 설명문이 좋습니다.",
	"input.testing": "테스트 중",
	"input.title": "소스 텍스트",
	keyword,
	noRecentTip,
	open,
	records,
	settingTitle,
	"table.header.queryContent": "질의 내용",
	"table.header.source": "소스",
	"table.header.time": "시간",
	title,
	viewChart,
	viewDetail
};
//#endregion
export { chunkDetail, dateTimeFormat, dataset_hit_testing_default as default, desc, hitChunks, keyword, noRecentTip, open, records, settingTitle, title, viewChart, viewDetail };
