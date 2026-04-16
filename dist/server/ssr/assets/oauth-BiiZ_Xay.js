//#region i18n/tr-TR/oauth.json
var connect = "Bağlan";
var login = "Giriş";
var switchAccount = "Hesabı Değiştir";
var unknownApp = "Bilinmeyen Uygulama";
var oauth_default = {
	connect,
	"continue": "Devam et",
	"error.authAppInfoFetchFailed": "Yetkilendirme için uygulama bilgisi alınamadı",
	"error.authorizeFailed": "Yetkilendirme başarısız",
	"error.invalidParams": "Geçersiz parametreler",
	login,
	"scopes.avatar": "Avatar",
	"scopes.email": "E-posta",
	"scopes.languagePreference": "Dil Tercihi",
	"scopes.name": "İsim",
	"scopes.timezone": "Saat Dilimi",
	switchAccount,
	"tips.common": "Gizliliğinize saygı gösteriyoruz ve bu bilgiyi yalnızca geliştirici araçlarımızla deneyiminizi geliştirmek için kullanacağız.",
	"tips.loggedIn": "Bu uygulama Dify Cloud hesabınızdaki aşağıdaki bilgilere erişmek istiyor.",
	"tips.needLogin": "Lütfen yetkilendirmek için giriş yapın",
	"tips.notLoggedIn": "Bu uygulama Dify Cloud hesabınıza erişmek istiyor",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
