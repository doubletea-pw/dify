//#region i18n/pl-PL/oauth.json
var connect = "Połącz z";
var login = "Zaloguj się";
var switchAccount = "Zmień konto";
var unknownApp = "Nieznana aplikacja";
var oauth_default = {
	connect,
	"continue": "Kontynuuj",
	"error.authAppInfoFetchFailed": "Nie udało się pobrać informacji o aplikacji w celu autoryzacji",
	"error.authorizeFailed": "Autoryzacja nie powiodła się",
	"error.invalidParams": "Nieprawidłowe parametry",
	login,
	"scopes.avatar": "Avatar",
	"scopes.email": "Email",
	"scopes.languagePreference": "Preferencje językowe",
	"scopes.name": "Imię",
	"scopes.timezone": "Strefa czasowa",
	switchAccount,
	"tips.common": "Szanujemy Twoją prywatność i będziemy wykorzystywać te informacje tylko w celu ulepszenia Twojego doświadczenia z naszymi narzędziami deweloperskimi.",
	"tips.loggedIn": "Ta aplikacja chce uzyskać dostęp do następujących informacji z twojego konta Dify Cloud.",
	"tips.needLogin": "Proszę się zalogować, aby autoryzować",
	"tips.notLoggedIn": "Ta aplikacja chce uzyskać dostęp do twojego konta Dify Cloud",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
