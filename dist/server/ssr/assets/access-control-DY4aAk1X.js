//#region models/access-control.ts
var SubjectType = /* @__PURE__ */ function(SubjectType) {
	SubjectType["GROUP"] = "group";
	SubjectType["ACCOUNT"] = "account";
	return SubjectType;
}({});
var AccessMode = /* @__PURE__ */ function(AccessMode) {
	AccessMode["PUBLIC"] = "public";
	AccessMode["SPECIFIC_GROUPS_MEMBERS"] = "private";
	AccessMode["ORGANIZATION"] = "private_all";
	AccessMode["EXTERNAL_MEMBERS"] = "sso_verified";
	return AccessMode;
}({});
//#endregion
export { SubjectType as n, AccessMode as t };
