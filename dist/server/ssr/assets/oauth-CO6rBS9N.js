//#region i18n/ro-RO/oauth.json
var connect = "Conectează la";
var login = "Conectare";
var switchAccount = "Schimbă contul";
var unknownApp = "Aplicație necunoscută";
var oauth_default = {
	connect,
	"continue": "Continuați",
	"error.authAppInfoFetchFailed": "Nu s-au putut obține informațiile aplicației pentru autorizare",
	"error.authorizeFailed": "Autorizarea a eșuat",
	"error.invalidParams": "Parametrii invalizi",
	login,
	"scopes.avatar": "Avatar",
	"scopes.email": "Email",
	"scopes.languagePreference": "Preferință lingvistică",
	"scopes.name": "Nume",
	"scopes.timezone": "Fus orar",
	switchAccount,
	"tips.common": "Respectăm confidențialitatea dvs. și vom folosi aceste informații doar pentru a îmbunătăți experiența dvs. cu instrumentele noastre pentru dezvoltatori.",
	"tips.loggedIn": "Această aplicație vrea să acceseze următoarele informații din contul tău Dify Cloud.",
	"tips.needLogin": "Vă rugăm să vă conectați pentru a autoriza",
	"tips.notLoggedIn": "Această aplicație vrea să acceseze contul tău Dify Cloud",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
