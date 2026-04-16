//#region i18n/hi-IN/run-log.json
var actionLogs = "क्रिया लॉग";
var circularInvocationTip = "वर्तमान कार्यप्रवाह में उपकरणों/नोड्स का वृत्ताकार आह्वान है।";
var detail = "विवरण";
var input = "इनपुट";
var result = "नतीजा";
var tracing = "ट्रेसिंग";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "एक्ज़ीक्यूटर",
	"meta.startTime": "शुरुआत की समय",
	"meta.status": "स्थिति",
	"meta.steps": "चालाने के चरण",
	"meta.time": "समय की अवधि",
	"meta.title": "मेटाडाटा",
	"meta.tokens": "कुल टोकन्स",
	"meta.version": "वर्ज़न",
	result,
	"resultEmpty.link": "विवरण पैनल",
	"resultEmpty.tipLeft": "लेखक ",
	"resultEmpty.tipRight": " देखें।",
	"resultEmpty.title": "इस रन में सिर्फ JSON फार्मेट का नतीजा है,",
	"resultPanel.status": "स्थिति",
	"resultPanel.time": "समय की अवधि",
	"resultPanel.tokens": "कुल टोकन्स",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
