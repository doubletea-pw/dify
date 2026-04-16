import { m as __exportAll } from "../index.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { t as upgrade_btn_default } from "./upgrade-btn-CpSPytX5.js";
import { n as style_module_default, t as usage_default } from "./usage-CsZ9mdCY.js";
import { t as GridMask } from "./grid-mask-BR99s5KY.js";
import * as React$1 from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/billing/annotation-full/modal.tsx
var modal_exports = /* @__PURE__ */ __exportAll({ default: () => modal_default });
var AnnotationFullModal = ({ show, onHide }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(Modal, {
		isShow: show,
		onClose: onHide,
		closable: true,
		className: "!p-0",
		children: /* @__PURE__ */ jsx(GridMask, {
			wrapperClassName: "rounded-lg",
			canvasClassName: "rounded-lg",
			gradientClassName: "rounded-lg",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mt-6 flex cursor-pointer flex-col rounded-lg border-2 border-solid border-transparent px-7 py-6 shadow-md transition-all duration-200 ease-in-out",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex items-center justify-between",
						children: /* @__PURE__ */ jsxs("div", {
							className: cn(style_module_default.textGradient, "text-[18px] font-semibold leading-[27px]"),
							children: [/* @__PURE__ */ jsx("div", { children: t("annotatedResponse.fullTipLine1", { ns: "billing" }) }), /* @__PURE__ */ jsx("div", { children: t("annotatedResponse.fullTipLine2", { ns: "billing" }) })]
						})
					}),
					/* @__PURE__ */ jsx(usage_default, { className: "mt-4" }),
					/* @__PURE__ */ jsx("div", {
						className: "mt-7 flex justify-end",
						children: /* @__PURE__ */ jsx(upgrade_btn_default, { loc: "annotation-create" })
					})
				]
			})
		})
	});
};
var modal_default = React$1.memo(AnnotationFullModal);
//#endregion
export { modal_exports as n, modal_default as t };
