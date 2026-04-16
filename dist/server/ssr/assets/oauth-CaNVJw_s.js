//#region i18n/pt-BR/oauth.json
var connect = "Conectar a";
var login = "Entrar";
var switchAccount = "Mudar Conta";
var unknownApp = "Aplicativo Desconhecido";
var oauth_default = {
	connect,
	"continue": "Continue",
	"error.authAppInfoFetchFailed": "Falha ao buscar informações do aplicativo para autorização",
	"error.authorizeFailed": "Autorização falhou",
	"error.invalidParams": "Parâmetros inválidos",
	login,
	"scopes.avatar": "Avatar",
	"scopes.email": "Email",
	"scopes.languagePreference": "Preferência de Idioma",
	"scopes.name": "Nome",
	"scopes.timezone": "Fuso horário",
	switchAccount,
	"tips.common": "Respeitamos sua privacidade e usaremos essas informações apenas para melhorar sua experiência com nossas ferramentas de desenvolvedor.",
	"tips.loggedIn": "Este aplicativo quer acessar as seguintes informações da sua conta Dify Cloud.",
	"tips.needLogin": "Por favor, faça login para autorizar",
	"tips.notLoggedIn": "Este aplicativo quer acessar sua conta do Dify Cloud",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
