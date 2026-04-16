//#region i18n/ar-TN/oauth.json
var connect = "الاتصال بـ";
var login = "تسجيل الدخول";
var switchAccount = "تبديل الحساب";
var unknownApp = "تطبيق غير معروف";
var oauth_default = {
	connect,
	"continue": "متابعة",
	"error.authAppInfoFetchFailed": "فشل جلب معلومات التطبيق للتفويض",
	"error.authorizeFailed": "فشل التفويض",
	"error.invalidParams": "معلمات غير صالحة",
	login,
	"scopes.avatar": "الصورة الرمزية",
	"scopes.email": "البريد الإلكتروني",
	"scopes.languagePreference": "تفضيل اللغة",
	"scopes.name": "الاسم",
	"scopes.timezone": "المنطقة الزمنية",
	switchAccount,
	"tips.common": "نحن نحترم خصوصيتك وسنستخدم هذه المعلومات فقط لتحسين تجربتك مع أدوات المطورين لدينا.",
	"tips.loggedIn": "يريد هذا التطبيق الوصول إلى المعلومات التالية من حساب Dify Cloud الخاص بك.",
	"tips.needLogin": "يرجى تسجيل الدخول للتفويض",
	"tips.notLoggedIn": "يريد هذا التطبيق الوصول إلى حساب Dify Cloud الخاص بك",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
