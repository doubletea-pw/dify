//#region i18n/th-TH/oauth.json
var connect = "เชื่อมต่อกับ";
var login = "เข้าสู่ระบบ";
var switchAccount = "เปลี่ยนบัญชี";
var unknownApp = "แอปพลิเคชันที่ไม่รู้จัก";
var oauth_default = {
	connect,
	"continue": "ดำเนินต่อไป",
	"error.authAppInfoFetchFailed": "ไม่สามารถดึงข้อมูลแอปเพื่อการอนุญาตได้",
	"error.authorizeFailed": "การอนุญาตล้มเหลว",
	"error.invalidParams": "พารามิเตอร์ไม่ถูกต้อง",
	login,
	"scopes.avatar": "อวตาร",
	"scopes.email": "อีเมล",
	"scopes.languagePreference": "ความชอบภาษา",
	"scopes.name": "ชื่อ",
	"scopes.timezone": "เขตเวลา",
	switchAccount,
	"tips.common": "เรามีความเคารพต่อความเป็นส่วนตัวของคุณและจะใช้ข้อมูลนี้เพื่อปรับปรุงประสบการณ์ของคุณกับเครื่องมือนักพัฒนาของเราเท่านั้น.",
	"tips.loggedIn": "แอปพลิเคชันนี้ต้องการเข้าถึงข้อมูลต่อไปนี้จากบัญชี Dify Cloud ของคุณ.",
	"tips.needLogin": "โปรดเข้าสู่ระบบเพื่ออนุญาต",
	"tips.notLoggedIn": "แอปพลิเคชันนี้ต้องการเข้าถึงบัญชี Dify Cloud ของคุณ",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
