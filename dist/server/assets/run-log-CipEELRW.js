//#region i18n/vi-VN/run-log.json
var actionLogs = "Nhật ký hành động";
var circularInvocationTip = "Có lệnh gọi vòng tròn các công cụ/nút trong quy trình làm việc hiện tại.";
var detail = "CHI TIẾT";
var input = "NHẬP";
var result = "KẾT QUẢ";
var tracing = "THEO DÕI";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "Người thực thi",
	"meta.startTime": "Thời gian bắt đầu",
	"meta.status": "Trạng thái",
	"meta.steps": "Các bước chạy",
	"meta.time": "Thời gian đã trôi qua",
	"meta.title": "DỮ LIỆU META",
	"meta.tokens": "Tổng số token",
	"meta.version": "Phiên bản",
	result,
	"resultEmpty.link": "bảng chi tiết",
	"resultEmpty.tipLeft": "vui lòng truy cập ",
	"resultEmpty.tipRight": " xem nó.",
	"resultEmpty.title": "Chạy này chỉ xuất ra định dạng JSON,",
	"resultPanel.status": "TRẠNG THÁI",
	"resultPanel.time": "THỜI GIAN",
	"resultPanel.tokens": "TỔNG SỐ TOKEN",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
