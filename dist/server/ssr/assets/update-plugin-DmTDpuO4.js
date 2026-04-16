import "./i18next-CxGFEMD9.js";
import "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import "./app-icon-DPKtAo3e.js";
import "./dist-mUzjAi-W.js";
import "./declarations-DYMEe7hD.js";
import "./config-Dopncj5R.js";
import "./i18n-config-jsJ9YUFd.js";
import "./base-BuKAg6Le.js";
import "./semver-olnXAeJC.js";
import "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import "./button-BqYXL-Bc.js";
import "./action-button-BK9WUMzU.js";
import "./select-C87OPWpf.js";
import "./loading-BryKikzY.js";
import "./dialog-DCCIZLOh.js";
import "./modal-9VFVByDR.js";
import "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import "./use-base-DLpNl2rR.js";
import "./client-CLQTU2Oi.js";
import "./global-public-context-DpzzsplY.js";
import "./common-qRxT6xi0.js";
import "./i18n-lDm19WzR.js";
import "./useDebounceFn-Y4NS6c4S.js";
import "./badge-DnA7gOK5.js";
import "./modal-context-CphlqvPm.js";
import "./config-DUQ_rYOW.js";
import "./provider-context-CToT0pwd.js";
import "./use-refresh-plugin-list-C8aKRYG-.js";
import "./use-triggers-DguQxV9N.js";
import "./other-sSUV3aYW.js";
import { U as PluginSource } from "./hooks-BTelimHS.js";
import "./use-common-BJ1aZaXJ.js";
import "./dist-CGvyUAMR.js";
import "./use-theme-3YxPQV4B.js";
import "./skeleton-Brd40zkS.js";
import "./use-get-icon-D8ihnTYG.js";
import "./dialog-CKL1xdm0.js";
import { r as from_market_place_default } from "./hooks-vGx4my_Z.js";
import { t as InstallFromGitHub } from "./install-from-github-BjqSKLWd.js";
import * as React$1 from "react";
import { jsx } from "react/jsx-runtime";
//#region app/components/plugins/update-plugin/from-github.tsx
var FromGitHub = ({ payload, onSave, onCancel }) => {
	return /* @__PURE__ */ jsx(InstallFromGitHub, {
		updatePayload: payload,
		onClose: onCancel,
		onSuccess: onSave
	});
};
var from_github_default = React$1.memo(FromGitHub);
//#endregion
//#region app/components/plugins/update-plugin/index.tsx
var UpdatePlugin = ({ type, marketPlace, github, onCancel, onSave }) => {
	if (type === PluginSource.github) return /* @__PURE__ */ jsx(from_github_default, {
		payload: github,
		onSave,
		onCancel
	});
	return /* @__PURE__ */ jsx(from_market_place_default, {
		payload: marketPlace,
		onSave,
		onCancel
	});
};
var update_plugin_default = React$1.memo(UpdatePlugin);
//#endregion
export { update_plugin_default as default };
