//#region i18n/ko-KR/run-log.json
var actionLogs = "작업 로그";
var circularInvocationTip = "현재 워크플로우에 도구/노드의 순환 호출이 있습니다.";
var detail = "상세정보";
var input = "입력";
var result = "결과";
var tracing = "트레이싱";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "실행자",
	"meta.startTime": "시작 시간",
	"meta.status": "상태",
	"meta.steps": "실행 단계",
	"meta.time": "소요 시간",
	"meta.title": "메타데이터",
	"meta.tokens": "토큰 총합",
	"meta.version": "버전",
	result,
	"resultEmpty.link": "상세 정보 패널",
	"resultEmpty.tipLeft": "를 방문해주세요",
	"resultEmpty.tipRight": "를 확인하세요.",
	"resultEmpty.title": "이 실행에서는 JSON 형식만 출력됩니다",
	"resultPanel.status": "상태",
	"resultPanel.time": "소요 시간",
	"resultPanel.tokens": "토큰 총합",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
