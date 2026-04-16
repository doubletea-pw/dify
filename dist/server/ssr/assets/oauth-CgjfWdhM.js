//#region i18n/ru-RU/oauth.json
var connect = "Подключиться к";
var login = "Вход";
var switchAccount = "Сменить аккаунт";
var unknownApp = "Неизвестное приложение";
var oauth_default = {
	connect,
	"continue": "Продолжить",
	"error.authAppInfoFetchFailed": "Не удалось получить информацию об приложении для авторизации",
	"error.authorizeFailed": "Авторизация не удалась",
	"error.invalidParams": "Неверные параметры",
	login,
	"scopes.avatar": "Аватар",
	"scopes.email": "Электронная почта",
	"scopes.languagePreference": "Предпочтение языка",
	"scopes.name": "Имя",
	"scopes.timezone": "Часовой пояс",
	switchAccount,
	"tips.common": "Мы уважаем вашу конфиденциальность и будем использовать эту информацию только для улучшения вашего опыта с нашими инструментами разработчика.",
	"tips.loggedIn": "Это приложение хочет получить следующую информацию из вашего аккаунта Dify Cloud.",
	"tips.needLogin": "Пожалуйста, войдите, чтобы авторизоваться",
	"tips.notLoggedIn": "Это приложение хочет получить доступ к вашей учетной записи Dify Cloud",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
