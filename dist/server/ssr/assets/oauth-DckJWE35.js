//#region i18n/id-ID/oauth.json
var connect = "Hubungkan";
var login = "Masuk";
var switchAccount = "Ganti Akun";
var unknownApp = "Aplikasi tidak dikenal";
var oauth_default = {
	connect,
	"continue": "Lanjut",
	"error.authAppInfoFetchFailed": "Gagal mengambil info aplikasi untuk otorisasi",
	"error.authorizeFailed": "Otorisasi gagal",
	"error.invalidParams": "Parameter tidak valid",
	login,
	"scopes.avatar": "Avatar",
	"scopes.email": "Email",
	"scopes.languagePreference": "Preferensi Bahasa",
	"scopes.name": "Nama",
	"scopes.timezone": "Zona waktu",
	switchAccount,
	"tips.common": "Kami menghormati privasi Anda dan hanya akan menggunakan informasi ini untuk meningkatkan pengalaman Anda dengan alat pengembang kami.",
	"tips.loggedIn": "Aplikasi ini ingin mengakses informasi berikut dari akun Dify Cloud Anda.",
	"tips.needLogin": "Silakan masuk untuk mengotorisasi",
	"tips.notLoggedIn": "Aplikasi ini ingin mengakses akun Dify Cloud Anda",
	unknownApp
};
//#endregion
export { connect, oauth_default as default, login, switchAccount, unknownApp };
