//#region i18n/fr-FR/oauth.json
var connect = "Se connecter à";
var login = "Connexion";
var switchAccount = "Changer de compte";
var unknownApp = "Application inconnue";
var oauth_default = {
	connect,
	"continue": "Continuer",
	"error.authAppInfoFetchFailed": "Échec de la récupération des informations de l'application pour l'autorisation",
	"error.authorizeFailed": "Autorisation échouée",
	"error.invalidParams": "Paramètres invalides",
	login,
	"scopes.avatar": "Avatar",
	"scopes.email": "E-mail",
	"scopes.languagePreference": "Préférence de langue",
	"scopes.name": "Nom",
	"scopes.timezone": "Fuseau horaire",
	switchAccount,
	"tips.common": "Nous respectons votre vie privée et n'utiliserons ces informations que pour améliorer votre expérience avec nos outils de développement.",
	"tips.loggedIn": "Cette application veut accéder aux informations suivantes de votre compte Dify Cloud.",
	"tips.needLogin": "Veuillez vous connecter pour autoriser",
	"tips.notLoggedIn": "Cette application veut accéder à votre compte Dify Cloud",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
