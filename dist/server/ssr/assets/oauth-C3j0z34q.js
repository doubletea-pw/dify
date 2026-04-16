//#region i18n/es-ES/oauth.json
var connect = "Conectar a";
var login = "Iniciar sesión";
var switchAccount = "Cambiar de cuenta";
var unknownApp = "Aplicación Desconocida";
var oauth_default = {
	connect,
	"continue": "Continuar",
	"error.authAppInfoFetchFailed": "No se pudo obtener la información de la aplicación para la autorización",
	"error.authorizeFailed": "La autorización falló",
	"error.invalidParams": "Parámetros inválidos",
	login,
	"scopes.avatar": "Avatar",
	"scopes.email": "Correo electrónico",
	"scopes.languagePreference": "Preferencia de idioma",
	"scopes.name": "Nombre",
	"scopes.timezone": "Zona horaria",
	switchAccount,
	"tips.common": "Respetamos su privacidad y solo utilizaremos esta información para mejorar su experiencia con nuestras herramientas para desarrolladores.",
	"tips.loggedIn": "Esta aplicación quiere acceder a la siguiente información de su cuenta de Dify Cloud.",
	"tips.needLogin": "Por favor inicie sesión para autorizar",
	"tips.notLoggedIn": "Esta aplicación quiere acceder a su cuenta de Dify Cloud",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
