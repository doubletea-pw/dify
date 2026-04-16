//#region i18n/de-DE/oauth.json
var connect = "Verbinden mit";
var login = "Anmelden";
var switchAccount = "Konto wechseln";
var unknownApp = "Unbekannte App";
var oauth_default = {
	connect,
	"continue": "Fortsetzen",
	"error.authAppInfoFetchFailed": "Fehler beim Abrufen der App-Informationen für die Autorisierung",
	"error.authorizeFailed": "Autorisierung fehlgeschlagen",
	"error.invalidParams": "Ungültige Parameter",
	login,
	"scopes.avatar": "Avatar",
	"scopes.email": "E-Mail",
	"scopes.languagePreference": "Sprachauswahl",
	"scopes.name": "Name",
	"scopes.timezone": "Zeitzone",
	switchAccount,
	"tips.common": "Wir respektieren Ihre Privatsphäre und werden diese Informationen nur verwenden, um Ihre Erfahrung mit unseren Entwickler-Tools zu verbessern.",
	"tips.loggedIn": "Diese App möchte auf die folgenden Informationen aus Ihrem Dify Cloud-Konto zugreifen.",
	"tips.needLogin": "Bitte melden Sie sich an, um zu autorisieren.",
	"tips.notLoggedIn": "Diese App möchte auf Ihr Dify Cloud-Konto zugreifen",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
