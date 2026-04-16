import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import "./dist-mUzjAi-W.js";
import "./IconBase-CEF_UoQI.js";
import { i as Icon } from "./workflow-CULNEjcb.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import "./button-BqYXL-Bc.js";
import "./dialog-DCCIZLOh.js";
import "./modal-9VFVByDR.js";
import "./common-fiYzNZ23.js";
import "./upgrade-btn-CpSPytX5.js";
import "./modal-context-CphlqvPm.js";
import "./config-DUQ_rYOW.js";
import "./other-sSUV3aYW.js";
import "./progress-bar-B_Dpla84.js";
import { t as usage_info_default } from "./usage-info-T9FNDAad.js";
import { t as plan_upgrade_modal_default } from "./plan-upgrade-modal-abWmp_vN.js";
import * as React$1 from "react";
import { jsx } from "react/jsx-runtime";
//#region app/components/billing/trigger-events-limit-modal/index.tsx
var TriggerEventsLimitModal = ({ show, onClose, onUpgrade, usage, total, resetInDays }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(plan_upgrade_modal_default, {
		show,
		onClose,
		onUpgrade,
		Icon,
		title: t("triggerLimitModal.title", { ns: "billing" }),
		description: t("triggerLimitModal.description", { ns: "billing" }),
		extraInfo: /* @__PURE__ */ jsx(usage_info_default, {
			className: "mt-4 w-full rounded-[12px] bg-components-panel-on-panel-item-bg",
			Icon,
			name: t("triggerLimitModal.usageTitle", { ns: "billing" }),
			usage,
			total,
			resetInDays,
			hideIcon: true
		})
	});
};
var trigger_events_limit_modal_default = React$1.memo(TriggerEventsLimitModal);
//#endregion
export { trigger_events_limit_modal_default as default };
