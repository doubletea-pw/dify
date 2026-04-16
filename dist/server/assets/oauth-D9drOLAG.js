//#region i18n/uk-UA/oauth.json
var connect = "Підключитися до";
var login = "Увійти";
var switchAccount = "Переключити акаунт";
var unknownApp = "Невідома програма";
var oauth_default = {
	connect,
	"continue": "Продовжувати",
	"error.authAppInfoFetchFailed": "Не вдалося отримати інформацію про додаток для авторизації",
	"error.authorizeFailed": "Авторизація не вдалася",
	"error.invalidParams": "Недійсні параметри",
	login,
	"scopes.avatar": "Аватар",
	"scopes.email": "Електронна пошта",
	"scopes.languagePreference": "Перевага мови",
	"scopes.name": "Ім'я",
	"scopes.timezone": "Часовий пояс",
	switchAccount,
	"tips.common": "Ми поважаємо вашу конфіденційність і використовуватимемо цю інформацію лише для покращення вашого досвіду з нашими інструментами для розробників.",
	"tips.loggedIn": "Цей додаток хоче отримати доступ до наступної інформації з вашого облікового запису Dify Cloud.",
	"tips.needLogin": "Будь ласка, увійдіть, щоб авторизуватися.",
	"tips.notLoggedIn": "Цей додаток хоче отримати доступ до вашого облікового запису Dify Cloud",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
