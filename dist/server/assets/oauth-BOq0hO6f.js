//#region i18n/ja-JP/oauth.json
var connect = "接続する";
var login = "ログイン";
var switchAccount = "アカウントを切り替える";
var unknownApp = "不明なアプリ";
var oauth_default = {
	connect,
	"continue": "続行",
	"error.authAppInfoFetchFailed": "認証のためのアプリ情報の取得に失敗しました",
	"error.authorizeFailed": "認証に失敗しました",
	"error.invalidParams": "無効なパラメータ",
	login,
	"scopes.avatar": "アバター",
	"scopes.email": "メール",
	"scopes.languagePreference": "言語の好み",
	"scopes.name": "名前",
	"scopes.timezone": "タイムゾーン",
	switchAccount,
	"tips.common": "私たちはあなたのプライバシーを尊重し、この情報を私たちの開発者ツールによる体験を向上させるためにのみ使用します。",
	"tips.loggedIn": "このアプリはあなたのDify Cloudアカウントから以下の情報にアクセスしたいと思っています。",
	"tips.needLogin": "ログインして認証してください",
	"tips.notLoggedIn": "このアプリはあなたのDify Cloudアカウントにアクセスしたいです",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
