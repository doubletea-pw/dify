import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { t as upgrade_btn_default } from "./upgrade-btn-CpSPytX5.js";
import { n as useModalContext } from "./modal-context-CphlqvPm.js";
import { t as Icon } from "./other-sSUV3aYW.js";
import * as React$1 from "react";
import { useCallback } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var style_module_default = {
	surface: "_surface_c6m3q_1",
	heroOverlay: "_heroOverlay_c6m3q_8",
	icon: "_icon_c6m3q_17",
	highlight: "_highlight_c6m3q_24"
};
//#endregion
//#region app/components/billing/plan-upgrade-modal/index.tsx
var PlanUpgradeModal = ({ Icon: Icon$1 = Icon, title, description, extraInfo, show, onClose, onUpgrade }) => {
	const { t } = useTranslation();
	const { setShowPricingModal } = useModalContext();
	const handleUpgrade = useCallback(() => {
		onClose();
		if (onUpgrade) onUpgrade();
		else setShowPricingModal();
	}, [
		onClose,
		onUpgrade,
		setShowPricingModal
	]);
	return /* @__PURE__ */ jsxs(Modal, {
		isShow: show,
		onClose,
		closable: false,
		clickOutsideNotClose: true,
		className: `${style_module_default.surface} w-[580px] rounded-2xl !p-0`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: `${style_module_default.heroOverlay} pointer-events-none absolute inset-0`
			}), /* @__PURE__ */ jsxs("div", {
				className: "px-8 pt-8",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: `${style_module_default.icon} flex size-12 items-center justify-center rounded-xl shadow-lg backdrop-blur-[5px]`,
						children: /* @__PURE__ */ jsx(Icon$1, { className: "size-6 text-text-primary-on-surface" })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-6 space-y-2",
						children: [/* @__PURE__ */ jsx("div", {
							className: `${style_module_default.highlight} title-3xl-semi-bold`,
							children: title
						}), /* @__PURE__ */ jsx("div", {
							className: "system-md-regular text-text-tertiary",
							children: description
						})]
					}),
					extraInfo
				]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mb-8 mt-10 flex justify-end space-x-2 px-8",
			children: [/* @__PURE__ */ jsx(Button, {
				onClick: onClose,
				children: t("triggerLimitModal.dismiss", { ns: "billing" })
			}), /* @__PURE__ */ jsx(upgrade_btn_default, {
				size: "custom",
				isShort: true,
				onClick: handleUpgrade,
				className: "!h-8 !rounded-lg px-2",
				labelKey: "triggerLimitModal.upgrade",
				loc: "trigger-events-limit-modal"
			})]
		})]
	});
};
var plan_upgrade_modal_default = React$1.memo(PlanUpgradeModal);
//#endregion
export { plan_upgrade_modal_default as t };
