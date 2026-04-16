import { m as __exportAll } from "../index.js";
import { f as put, l as post, r as get, s as patch, t as del } from "./base-BuKAg6Le.js";
//#region service/common.ts
var common_exports = /* @__PURE__ */ __exportAll({
	activateMember: () => activateMember,
	addApiBasedExtension: () => addApiBasedExtension,
	changePasswordWithToken: () => changePasswordWithToken,
	changeWebAppPasswordWithToken: () => changeWebAppPasswordWithToken,
	checkEmailExisted: () => checkEmailExisted,
	deleteApiBasedExtension: () => deleteApiBasedExtension,
	deleteMemberOrCancelInvitation: () => deleteMemberOrCancelInvitation,
	disableModel: () => disableModel,
	emailLoginWithCode: () => emailLoginWithCode,
	enableModel: () => enableModel,
	fetchDefaultModal: () => fetchDefaultModal,
	fetchFilePreview: () => fetchFilePreview,
	fetchInitValidateStatus: () => fetchInitValidateStatus,
	fetchModelList: () => fetchModelList,
	fetchModelParameterRules: () => fetchModelParameterRules,
	fetchModelProviderModelList: () => fetchModelProviderModelList,
	fetchSetupStatus: () => fetchSetupStatus,
	getDocDownloadUrl: () => getDocDownloadUrl,
	initValidate: () => initValidate,
	invitationCheck: () => invitationCheck,
	inviteMember: () => inviteMember,
	login: () => login,
	ownershipTransfer: () => ownershipTransfer,
	resetEmail: () => resetEmail,
	sendDeleteAccountCode: () => sendDeleteAccountCode,
	sendEMailLoginCode: () => sendEMailLoginCode,
	sendForgotPasswordEmail: () => sendForgotPasswordEmail,
	sendOwnerEmail: () => sendOwnerEmail,
	sendResetPasswordCode: () => sendResetPasswordCode,
	sendVerifyCode: () => sendVerifyCode,
	sendWebAppEMailLoginCode: () => sendWebAppEMailLoginCode,
	sendWebAppResetPasswordCode: () => sendWebAppResetPasswordCode,
	setup: () => setup,
	submitDeleteAccountFeedback: () => submitDeleteAccountFeedback,
	switchWorkspace: () => switchWorkspace,
	updateApiBasedExtension: () => updateApiBasedExtension,
	updateCurrentWorkspace: () => updateCurrentWorkspace,
	updateDefaultModel: () => updateDefaultModel,
	updateMemberRole: () => updateMemberRole,
	updateUserProfile: () => updateUserProfile,
	updateWorkspaceInfo: () => updateWorkspaceInfo,
	uploadRemoteFileInfo: () => uploadRemoteFileInfo,
	verifyDeleteAccountCode: () => verifyDeleteAccountCode,
	verifyEmail: () => verifyEmail,
	verifyOwnerEmail: () => verifyOwnerEmail,
	verifyResetPasswordCode: () => verifyResetPasswordCode,
	verifyWebAppResetPasswordCode: () => verifyWebAppResetPasswordCode,
	webAppEmailLoginWithCode: () => webAppEmailLoginWithCode,
	webAppLogin: () => webAppLogin
});
var login = ({ url, body }) => {
	return post(url, { body });
};
var webAppLogin = ({ url, body }) => {
	return post(url, { body }, { isPublicAPI: true });
};
var setup = ({ body }) => {
	return post("/setup", { body });
};
var initValidate = ({ body }) => {
	return post("/init", { body });
};
var fetchInitValidateStatus = () => {
	return get("/init");
};
var fetchSetupStatus = () => {
	return get("/setup");
};
var updateUserProfile = ({ url, body }) => {
	return post(url, { body });
};
var inviteMember = ({ url, body }) => {
	return post(url, { body });
};
var updateMemberRole = ({ url, body }) => {
	return put(url, { body });
};
var deleteMemberOrCancelInvitation = ({ url }) => {
	return del(url);
};
var sendOwnerEmail = (body) => post("/workspaces/current/members/send-owner-transfer-confirm-email", { body });
var verifyOwnerEmail = (body) => post("/workspaces/current/members/owner-transfer-check", { body });
var ownershipTransfer = (memberID, body) => post(`/workspaces/current/members/${memberID}/owner-transfer`, { body });
var fetchFilePreview = ({ fileID }) => {
	return get(`/files/${fileID}/preview`);
};
var updateCurrentWorkspace = ({ url, body }) => {
	return post(url, { body });
};
var switchWorkspace = ({ url, body }) => {
	return post(url, { body });
};
var updateWorkspaceInfo = ({ url, body }) => {
	return post(url, { body });
};
var invitationCheck = ({ url, params }) => {
	return get(url, { params });
};
var activateMember = ({ url, body }) => {
	return post(url, { body });
};
var fetchModelProviderModelList = (url) => {
	return get(url);
};
var fetchModelList = (url) => {
	return get(url);
};
var fetchDefaultModal = (url) => {
	return get(url);
};
var updateDefaultModel = ({ url, body }) => {
	return post(url, { body });
};
var fetchModelParameterRules = (url) => {
	return get(url);
};
var addApiBasedExtension = ({ url, body }) => {
	return post(url, { body });
};
var updateApiBasedExtension = ({ url, body }) => {
	return post(url, { body });
};
var deleteApiBasedExtension = (url) => {
	return del(url);
};
var enableModel = (url, body) => patch(url, { body });
var disableModel = (url, body) => patch(url, { body });
var sendForgotPasswordEmail = ({ url, body }) => post(url, { body });
var changePasswordWithToken = ({ url, body }) => post(url, { body });
var changeWebAppPasswordWithToken = ({ url, body }) => post(url, { body }, { isPublicAPI: true });
var uploadRemoteFileInfo = (url, isPublic, silent) => {
	return post("/remote-files/upload", { body: { url } }, {
		isPublicAPI: isPublic,
		silent
	});
};
var sendEMailLoginCode = (email, language = "en-US") => post("/email-code-login", { body: {
	email,
	language
} });
var emailLoginWithCode = (data) => post("/email-code-login/validity", { body: data });
var sendResetPasswordCode = (email, language = "en-US") => post("/forgot-password", { body: {
	email,
	language
} });
var verifyResetPasswordCode = (body) => post("/forgot-password/validity", { body });
var sendWebAppEMailLoginCode = (email, language = "en-US") => post("/email-code-login", { body: {
	email,
	language
} }, { isPublicAPI: true });
var webAppEmailLoginWithCode = (data) => post("/email-code-login/validity", { body: data }, { isPublicAPI: true });
var sendWebAppResetPasswordCode = (email, language = "en-US") => post("/forgot-password", { body: {
	email,
	language
} }, { isPublicAPI: true });
var verifyWebAppResetPasswordCode = (body) => post("/forgot-password/validity", { body }, { isPublicAPI: true });
var sendDeleteAccountCode = () => get("/account/delete/verify");
var verifyDeleteAccountCode = (body) => post("/account/delete", { body });
var submitDeleteAccountFeedback = (body) => post("/account/delete/feedback", { body });
var getDocDownloadUrl = (doc_name) => get("/compliance/download", { params: { doc_name } }, { silent: true });
var sendVerifyCode = (body) => post("/account/change-email", { body });
var verifyEmail = (body) => post("/account/change-email/validity", { body });
var resetEmail = (body) => post("/account/change-email/reset", { body });
var checkEmailExisted = (body) => post("/account/change-email/check-email-unique", { body }, { silent: true });
//#endregion
export { sendVerifyCode as A, updateUserProfile as B, ownershipTransfer as C, sendForgotPasswordEmail as D, sendEMailLoginCode as E, switchWorkspace as F, verifyOwnerEmail as G, uploadRemoteFileInfo as H, updateApiBasedExtension as I, webAppEmailLoginWithCode as J, verifyResetPasswordCode as K, updateCurrentWorkspace as L, sendWebAppResetPasswordCode as M, setup as N, sendOwnerEmail as O, submitDeleteAccountFeedback as P, updateDefaultModel as R, login as S, sendDeleteAccountCode as T, verifyDeleteAccountCode as U, updateWorkspaceInfo as V, verifyEmail as W, webAppLogin as Y, fetchSetupStatus as _, checkEmailExisted as a, invitationCheck as b, deleteMemberOrCancelInvitation as c, enableModel as d, fetchDefaultModal as f, fetchModelProviderModelList as g, fetchModelList as h, changeWebAppPasswordWithToken as i, sendWebAppEMailLoginCode as j, sendResetPasswordCode as k, disableModel as l, fetchInitValidateStatus as m, addApiBasedExtension as n, common_exports as o, fetchFilePreview as p, verifyWebAppResetPasswordCode as q, changePasswordWithToken as r, deleteApiBasedExtension as s, activateMember as t, emailLoginWithCode as u, getDocDownloadUrl as v, resetEmail as w, inviteMember as x, initValidate as y, updateMemberRole as z };
