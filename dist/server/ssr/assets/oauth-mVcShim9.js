//#region i18n/sl-SI/oauth.json
var connect = "Poveži se z";
var login = "Prijava";
var switchAccount = "Preklopi račun";
var unknownApp = "Nepoznana aplikacija";
var oauth_default = {
	connect,
	"continue": "Nadaljuj",
	"error.authAppInfoFetchFailed": "Pridobivanje informacij o aplikaciji za avtorizacijo ni uspelo",
	"error.authorizeFailed": "Avtentikacija je spodletela",
	"error.invalidParams": "Neveljavni parametri",
	login,
	"scopes.avatar": "Avatar",
	"scopes.email": "Email",
	"scopes.languagePreference": "Jezikovna prednost",
	"scopes.name": "Ime",
	"scopes.timezone": "Časovni pas",
	switchAccount,
	"tips.common": "Soočamo se z vašo zasebnostjo in te informacije bomo uporabili le za izboljšanje vaših izkušenj z našimi orodji za razvijalce.",
	"tips.loggedIn": "Ta aplikacija želi dostopati do naslednjih informacij iz vašega računa Dify Cloud.",
	"tips.needLogin": "Prosimo, prijavite se za avtorizacijo",
	"tips.notLoggedIn": "Ta aplikacija želi dostopati do vašega Dify Cloud računa",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
