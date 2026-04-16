import { m as __exportAll } from "../index.js";
import { xt as P7 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as useStore } from "./store-BCKZaSV6.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { a as useClickAway } from "./var-reference-picker-PlAsXjUc.js";
import { t as RunPanel } from "./run-Fd933dHo.js";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/message-log-modal/index.tsx
var message_log_modal_exports = /* @__PURE__ */ __exportAll({ default: () => MessageLogModal });
var MessageLogModal = ({ currentLogItem, defaultTab = "DETAIL", width, fixedWidth, onCancel }) => {
	const { t } = useTranslation();
	const ref = useRef(null);
	const [mounted, setMounted] = useState(false);
	const appDetail = useStore((state) => state.appDetail);
	useClickAway(() => {
		if (mounted) onCancel();
	}, ref);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!currentLogItem || !currentLogItem.workflow_run_id) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative z-10 flex flex-col rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg pt-3 shadow-xl"),
		style: {
			width: fixedWidth ? width : 480,
			...!fixedWidth ? {
				position: "fixed",
				top: 64,
				left: 8 + (width - 480),
				bottom: 16
			} : { marginRight: 8 }
		},
		ref,
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "shrink-0 px-4 py-1 text-text-primary system-xl-semibold",
				children: t("runDetail.title", { ns: "appLog" })
			}),
			/* @__PURE__ */ jsx("span", {
				className: "absolute right-3 top-4 z-20 cursor-pointer p-1",
				onClick: onCancel,
				"data-testid": "close-button",
				children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-text-tertiary" })
			}),
			/* @__PURE__ */ jsx(RunPanel, {
				hideResult: true,
				activeTab: defaultTab,
				runDetailUrl: `/apps/${appDetail?.id}/workflow-runs/${currentLogItem.workflow_run_id}`,
				tracingListUrl: `/apps/${appDetail?.id}/workflow-runs/${currentLogItem.workflow_run_id}/node-executions`
			})
		]
	});
};
//#endregion
export { message_log_modal_exports as n, MessageLogModal as t };
