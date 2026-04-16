import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as confirm_default } from "./confirm-CKQP3hdx.js";
import * as React$1 from "react";
import { jsx } from "react/jsx-runtime";
//#region app/components/workflow/nodes/_base/components/remove-effect-var-confirm.tsx
var i18nPrefix = "common.effectVarConfirm";
var RemoveVarConfirm = ({ isShow, onConfirm, onCancel }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(confirm_default, {
		isShow,
		title: t(`${i18nPrefix}.title`, { ns: "workflow" }),
		content: t(`${i18nPrefix}.content`, { ns: "workflow" }),
		onConfirm,
		onCancel
	});
};
var remove_effect_var_confirm_default = React$1.memo(RemoveVarConfirm);
//#endregion
export { remove_effect_var_confirm_default as t };
