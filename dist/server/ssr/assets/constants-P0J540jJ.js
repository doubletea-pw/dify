//#region app/components/header/account-setting/constants.ts
var ACCOUNT_SETTING_MODAL_ACTION = "showSettings";
var ACCOUNT_SETTING_TAB = {
	PROVIDER: "provider",
	MEMBERS: "members",
	BILLING: "billing",
	DATA_SOURCE: "data-source",
	API_BASED_EXTENSION: "api-based-extension",
	CUSTOM: "custom",
	LANGUAGE: "language"
};
var DEFAULT_ACCOUNT_SETTING_TAB = ACCOUNT_SETTING_TAB.MEMBERS;
var isValidAccountSettingTab = (tab) => {
	if (!tab) return false;
	return Object.values(ACCOUNT_SETTING_TAB).includes(tab);
};
//#endregion
export { isValidAccountSettingTab as i, ACCOUNT_SETTING_TAB as n, DEFAULT_ACCOUNT_SETTING_TAB as r, ACCOUNT_SETTING_MODAL_ACTION as t };
