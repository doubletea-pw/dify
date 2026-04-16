//#region i18n/th-TH/education.json
var currentSigned = "ลงชื่อเข้าใช้ในฐานะ";
var emailLabel = "อีเมลปัจจุบันของคุณ";
var learn = "เรียนรู้วิธีการตรวจสอบการศึกษา";
var rejectContent = "น่าเสียดายที่คุณไม่มีสิทธิ์ได้รับสถานะการตรวจสอบการศึกษาและดังนั้นคุณจึงไม่สามารถรับคูปองพิเศษ 100% สำหรับแผนมืออาชีพ Dify หากคุณใช้ที่อยู่อีเมลนี้.";
var rejectTitle = "การตรวจสอบการศึกษา Dify ของคุณถูกปฏิเสธ";
var submit = "ส่ง";
var submitError = "การส่งแบบฟอร์มล้มเหลว โปรดลองอีกครั้งในภายหลัง.";
var successContent = "เราได้ออกคูปองส่วนลด 100% สำหรับแผน Dify Professional ให้กับบัญชีของคุณ คูปองนี้สามารถใช้ได้เป็นระยะเวลา 1 ปี กรุณาใช้ภายในช่วงระยะเวลาที่กำหนด.";
var successTitle = "คุณได้รับการรับรองการศึกษา Dify";
var toVerified = "ตรวจสอบการศึกษา";
var education_default = {
	currentSigned,
	emailLabel,
	"form.schoolName.placeholder": "กรุณาใส่ชื่อของโรงเรียนอย่างเป็นทางการที่ไม่มีการย่อ",
	"form.schoolName.title": "ชื่อโรงเรียนของคุณ",
	"form.schoolRole.option.administrator": "ผู้ดูแลโรงเรียน",
	"form.schoolRole.option.student": "นักเรียน",
	"form.schoolRole.option.teacher": "ครู",
	"form.schoolRole.title": "บทบาทของคุณในโรงเรียน",
	"form.terms.desc.and": "และ",
	"form.terms.desc.end": ". โดยการส่ง:",
	"form.terms.desc.front": "ข้อมูลของคุณและการใช้สถานะการตรวจสอบการศึกษาอยู่ภายใต้เงื่อนไขของเรา",
	"form.terms.desc.privacyPolicy": "นโยบายความเป็นส่วนตัว",
	"form.terms.desc.termsOfService": "ข้อกำหนดในการให้บริการ",
	"form.terms.option.age": "ฉันยืนยันว่าฉันมีอายุอย่างน้อย 18 ปี",
	"form.terms.option.inSchool": "ฉันยืนยันว่าฉันได้ลงทะเบียนหรือทำงานที่สถาบันที่ระบุไว้ Dify อาจขอหลักฐานการลงทะเบียน/การจ้างงาน หากฉันแสดงความไม่ถูกต้องเกี่ยวกับคุณสมบัติของฉัน ฉันตกลงที่จะชำระค่าธรรมเนียมใด ๆ ที่ถูกยกเว้นไปในเบื้องต้นตามสถานะการศึกษาของฉัน.",
	"form.terms.title": "ข้อกำหนดและเงื่อนไข",
	learn,
	"notice.action.dismiss": "ปฏิเสธ",
	"notice.action.reVerify": "ตรวจสอบอีกครั้ง",
	"notice.action.upgrade": "อัปเกรด",
	"notice.alreadyGraduated.expired": "สามารถอัปเกรดเมื่อใดก็ได้เพื่อเข้าถึงฟีเจอร์แบบชำระเงินอย่างเต็มที่",
	"notice.alreadyGraduated.isAboutToExpire": "การสมัครสมาชิกปัจจุบันของคุณจะยังคงมีผลต่อไป เมื่อมันสิ้นสุดลง คุณจะถูกย้ายไปยังแผน Sandbox หรือคุณสามารถอัปเกรดได้ทุกเมื่อเพื่อคืนสิทธิ์การเข้าถึงฟีเจอร์แบบชำระเงินทั้งหมด.",
	"notice.alreadyGraduated.title": "จบการศึกษาแล้วเหรอ?",
	"notice.dateFormat": "วัน/เดือน/ปี",
	"notice.expired.summary.line1": "คุณยังสามารถเข้าถึงและใช้ Dify ได้อยู่",
	"notice.expired.summary.line2": "อย่างไรก็ตาม คุณไม่มีสิทธิ์ในการใช้คูปองส่วนลดการศึกษาใหม่อีกต่อไป",
	"notice.expired.title": "สถานภาพการศึกษาของคุณหมดอายุแล้ว",
	"notice.isAboutToExpire.summary": "ไม่ต้องกังวล — สิ่งนี้จะไม่กระทบต่อการสมัครสมาชิกปัจจุบันของคุณ แต่คุณจะไม่ได้รับส่วนลดการศึกษาขณะต่ออายุเว้นแต่คุณจะยืนยันสถานะของคุณอีกครั้ง.",
	"notice.isAboutToExpire.title": "สถานะการศึกษาของคุณจะหมดอายุในวันที่ {{date}}",
	"notice.stillInEducation.expired": "ตรวจสอบอีกครั้งตอนนี้เพื่อรับคูปองใหม่สำหรับปีการศึกษาใหม่ เราจะเพิ่มมันเข้ากับบัญชีของคุณและคุณสามารถใช้มันสำหรับการอัปเกรดครั้งถัดไปได้",
	"notice.stillInEducation.isAboutToExpire": "ตรวจสอบอีกครั้งเดี๋ยวนี้เพื่อรับคูปองใหม่สำหรับปีการศึกษาที่จะมาถึง มันจะถูกบันทึกในบัญชีของคุณและพร้อมใช้งานในการต่ออายุครั้งถัดไปของคุณ.",
	"notice.stillInEducation.title": "ยังอยู่ในวัยเรียนใช่ไหม?",
	rejectContent,
	rejectTitle,
	submit,
	submitError,
	successContent,
	successTitle,
	toVerified,
	"toVerifiedTip.coupon": "คูปองพิเศษ 100%",
	"toVerifiedTip.end": "สำหรับแผนมืออาชีพของ Dify.",
	"toVerifiedTip.front": "คุณมีสิทธิ์ได้รับสถานะการตรวจสอบการศึกษาแล้ว กรุณากรอกข้อมูลการศึกษาของคุณด้านล่างเพื่อดำเนินการให้เสร็จสิ้นและรับสิทธิ์"
};
//#endregion
export { currentSigned, education_default as default, emailLabel, learn, rejectContent, rejectTitle, submit, submitError, successContent, successTitle, toVerified };
