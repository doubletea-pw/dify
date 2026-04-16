import { m as __exportAll } from "../index.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/app/create-from-dsl-modal/dsl-confirm-modal.tsx
var dsl_confirm_modal_exports = /* @__PURE__ */ __exportAll({ default: () => DSLConfirmModal });
var DSLConfirmModal = ({ versions = {
	importedVersion: "",
	systemVersion: ""
}, onCancel, onConfirm, confirmDisabled = false }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Modal, {
		isShow: true,
		onClose: () => onCancel(),
		className: "w-[480px]",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-start gap-2 self-stretch pb-4",
			children: [/* @__PURE__ */ jsx("div", {
				className: "title-2xl-semi-bold text-text-primary",
				children: t("newApp.appCreateDSLErrorTitle", { ns: "app" })
			}), /* @__PURE__ */ jsxs("div", {
				className: "system-md-regular flex grow flex-col text-text-secondary",
				children: [
					/* @__PURE__ */ jsx("div", { children: t("newApp.appCreateDSLErrorPart1", { ns: "app" }) }),
					/* @__PURE__ */ jsx("div", { children: t("newApp.appCreateDSLErrorPart2", { ns: "app" }) }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsxs("div", { children: [t("newApp.appCreateDSLErrorPart3", { ns: "app" }), /* @__PURE__ */ jsx("span", {
						className: "system-md-medium",
						children: versions.importedVersion
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [t("newApp.appCreateDSLErrorPart4", { ns: "app" }), /* @__PURE__ */ jsx("span", {
						className: "system-md-medium",
						children: versions.systemVersion
					})] })
				]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-start justify-end gap-2 self-stretch pt-6",
			children: [/* @__PURE__ */ jsx(Button, {
				variant: "secondary",
				onClick: () => onCancel(),
				children: t("newApp.Cancel", { ns: "app" })
			}), /* @__PURE__ */ jsx(Button, {
				variant: "primary",
				destructive: true,
				onClick: onConfirm,
				disabled: confirmDisabled,
				children: t("newApp.Confirm", { ns: "app" })
			})]
		})]
	});
};
//#endregion
export { dsl_confirm_modal_exports as n, DSLConfirmModal as t };
