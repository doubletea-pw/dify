//#region i18n/th-TH/run-log.json
var actionLogs = "บันทึกการดําเนินการ";
var circularInvocationTip = "มีการเรียกใช้เครื่องมือ/โหนดแบบวงกลมในเวิร์กโฟลว์ปัจจุบัน";
var detail = "รายละเอียด";
var input = "อินพุต";
var result = "ผล";
var tracing = "ติดตาม";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "ผู้ปฏิบัติการ",
	"meta.startTime": "เวลาเริ่มต้น",
	"meta.status": "สถานะ",
	"meta.steps": "เรียกใช้ขั้นตอน",
	"meta.time": "เวลาที่ผ่านไป",
	"meta.title": "ข้อมูลเมตา",
	"meta.tokens": "โทเค็นทั้งหมด",
	"meta.version": "เวอร์ชัน",
	result,
	"resultEmpty.link": "แผงรายละเอียด",
	"resultEmpty.tipLeft": "กรุณาไปที่",
	"resultEmpty.tipRight": "ดูมัน",
	"resultEmpty.title": "เรียกใช้เฉพาะรูปแบบ JSON เอาต์พุต",
	"resultPanel.status": "สถานะ",
	"resultPanel.time": "เวลาที่ผ่านไป",
	"resultPanel.tokens": "โทเค็นทั้งหมด",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
