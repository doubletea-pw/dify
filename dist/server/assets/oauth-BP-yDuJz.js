//#region i18n/it-IT/oauth.json
var connect = "Connetti a";
var login = "Accesso";
var switchAccount = "Cambia account";
var unknownApp = "App sconosciuta";
var oauth_default = {
	connect,
	"continue": "Continua",
	"error.authAppInfoFetchFailed": "Impossibile recuperare le informazioni sull'app per l'autorizzazione",
	"error.authorizeFailed": "Autorizzazione fallita",
	"error.invalidParams": "Parametri non validi",
	login,
	"scopes.avatar": "Avatar",
	"scopes.email": "Email",
	"scopes.languagePreference": "Preferenza Linguistica",
	"scopes.name": "Nome",
	"scopes.timezone": "Fuso orario",
	switchAccount,
	"tips.common": "Rispettiamo la tua privacy e utilizzeremo queste informazioni solo per migliorare la tua esperienza con i nostri strumenti per sviluppatori.",
	"tips.loggedIn": "Questa app vuole accedere alle seguenti informazioni dal tuo account Dify Cloud.",
	"tips.needLogin": "Per favore, accedi per autorizzare",
	"tips.notLoggedIn": "Questa app vuole accedere al tuo account Dify Cloud",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
