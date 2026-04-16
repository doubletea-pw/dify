//#region i18n/en-US/oauth.json
var connect = "Connect to";
var login = "Login";
var switchAccount = "Switch Account";
var unknownApp = "Unknown App";
var oauth_default = {
	connect,
	"continue": "Continue",
	"error.authAppInfoFetchFailed": "Failed to fetch app info for authorization",
	"error.authorizeFailed": "Authorization failed",
	"error.invalidParams": "Invalid parameters",
	login,
	"scopes.avatar": "Avatar",
	"scopes.email": "Email",
	"scopes.languagePreference": "Language Preference",
	"scopes.name": "Name",
	"scopes.timezone": "Timezone",
	switchAccount,
	"tips.common": "We respect your privacy and will only use this information to enhance your experience with our developer tools.",
	"tips.loggedIn": "This app wants to access the following information from your Dify Cloud account.",
	"tips.needLogin": "Please log in to authorize",
	"tips.notLoggedIn": "This app wants to access your Dify Cloud account",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
