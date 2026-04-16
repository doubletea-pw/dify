import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { hn as formatWorkflowRunIdentifier } from "./utils-DqpfZ3W-.js";
import { At as ControlMode, Vt as WorkflowRunningStatus } from "./config-Dopncj5R.js";
import { $n as useWorkflowStore, H as useIsChatMode, Qn as useStore, j as useNodesInteractions, m as useWorkflowInteractions, si as useWorkflowRunHistory, u as useWorkflowRun } from "./hooks-Bj_4KA1b.js";
import { t as IconBase } from "./IconBase-CEF_UoQI.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Loading } from "./loading-BryKikzY.js";
import { o as useInputFieldPanel } from "./hooks-BneekglK.js";
import { t as useFormatTimeFromNow } from "./use-format-time-from-now-D16rGv8R.js";
import { memo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var ClockFastForward_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M22.7 11.5L20.7005 13.5L18.7 11.5M20.9451 13C20.9814 12.6717 21 12.338 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.8273 21 17.35 19.6963 19 17.6573M12 7V12L15 14",
				"stroke": "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			},
			"children": []
		}]
	},
	name: "ClockFastForward"
};
//#endregion
//#region app/components/base/icons/src/vender/line/time/ClockFastForward.tsx
var Icon$3 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: ClockFastForward_default
});
Icon$3.displayName = "ClockFastForward";
var ClockPlay_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": {
				"id": "Icon",
				"clip-path": "url(#clip0_635_10941)"
			},
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Vector",
					"d": "M14.6334 8.66683C14.6552 8.44756 14.6663 8.22516 14.6663 8.00016C14.6663 4.31826 11.6816 1.3335 7.99967 1.3335C4.31778 1.3335 1.33301 4.31826 1.33301 8.00016C1.33301 11.6821 4.31778 14.6668 7.99967 14.6668C8.11145 14.6668 8.22258 14.6641 8.33301 14.6586C8.44487 14.6531 8.556 14.6449 8.66634 14.6339M7.99967 4.00016V8.00016L5.42265 9.25534M11.853 9.97346L14.4308 11.9068C14.6238 12.0515 14.7203 12.1239 14.7548 12.2126C14.785 12.2904 14.785 12.3766 14.7548 12.4543C14.7203 12.543 14.6238 12.6154 14.4308 12.7601L11.853 14.6935C11.5784 14.8995 11.441 15.0024 11.3261 15.0001C11.226 14.998 11.1322 14.9511 11.0706 14.8723C10.9997 14.7818 10.9997 14.6101 10.9997 14.2668V10.4001C10.9997 10.0568 10.9997 9.88516 11.0706 9.79463C11.1322 9.71585 11.226 9.66895 11.3261 9.66687C11.441 9.66448 11.5784 9.76747 11.853 9.97346Z",
					"stroke": "currentColor",
					"stroke-width": "1.5",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}, {
			"type": "element",
			"name": "defs",
			"attributes": {},
			"children": [{
				"type": "element",
				"name": "clipPath",
				"attributes": { "id": "clip0_635_10941" },
				"children": [{
					"type": "element",
					"name": "rect",
					"attributes": {
						"width": "16",
						"height": "16",
						"fill": "white"
					},
					"children": []
				}]
			}]
		}]
	},
	name: "ClockPlay"
};
//#endregion
//#region app/components/base/icons/src/vender/line/time/ClockPlay.tsx
var Icon$2 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: ClockPlay_default
});
Icon$2.displayName = "ClockPlay";
var ClockPlaySlim_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "32",
			"height": "32",
			"viewBox": "0 0 32 32",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "Icon" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Vector",
					"d": "M29.2673 17.3332C29.3109 16.8946 29.3332 16.4498 29.3332 15.9998C29.3332 8.63604 23.3636 2.6665 15.9998 2.6665C8.63604 2.6665 2.6665 8.63604 2.6665 15.9998C2.6665 23.3636 8.63604 29.3332 15.9998 29.3332C16.2234 29.3332 16.4457 29.3277 16.6665 29.3168C16.8902 29.3058 17.1125 29.2892 17.3332 29.2673M15.9998 7.99984V15.9998L10.8458 18.5102M23.7065 19.9464L28.8621 23.8131C29.2481 24.1026 29.441 24.2473 29.5101 24.4248C29.5705 24.5802 29.5705 24.7527 29.5101 24.9081C29.441 25.0855 29.2481 25.2303 28.8621 25.5198L23.7065 29.3864C23.1572 29.7984 22.8825 30.0044 22.6526 29.9996C22.4526 29.9955 22.265 29.9017 22.1416 29.7441C21.9998 29.5631 21.9998 29.2197 21.9998 28.5331V20.7998C21.9998 20.1131 21.9998 19.7698 22.1416 19.5888C22.265 19.4312 22.4526 19.3374 22.6526 19.3333C22.8825 19.3285 23.1572 19.5345 23.7065 19.9464Z",
					"stroke": "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "ClockPlaySlim"
};
//#endregion
//#region app/components/base/icons/src/vender/line/time/ClockPlaySlim.tsx
var Icon$1 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: ClockPlaySlim_default
});
Icon$1.displayName = "ClockPlaySlim";
var ClockRefresh_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "12",
			"height": "12",
			"viewBox": "0 0 12 12",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "clock-refresh" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Solid" },
				"children": [
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M9.76984 2.8375L9.71551 3.04027C8.27602 1.22839 5.68891 0.69459 3.62457 1.88644C2.25681 2.67611 1.43067 4.04369 1.27558 5.50073C1.24636 5.77532 1.44526 6.02161 1.71985 6.05084C1.99444 6.08007 2.24074 5.88116 2.26997 5.60657C2.39268 4.4537 3.04533 3.37556 4.12456 2.75247C5.7025 1.84145 7.66731 2.20754 8.82211 3.53002L8.65016 3.48395C8.38343 3.41248 8.10926 3.57077 8.03779 3.8375C7.96632 4.10424 8.12461 4.37841 8.39134 4.44988L9.75737 4.8159C10.0241 4.88737 10.2983 4.72908 10.3697 4.46235L10.7358 3.09632C10.8072 2.82959 10.6489 2.55542 10.3822 2.48395C10.1155 2.41248 9.84131 2.57077 9.76984 2.8375Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M10.2792 5.94921C10.5538 5.97844 10.7527 6.22473 10.7235 6.49932C10.5684 7.95635 9.74225 9.32394 8.3745 10.1136C6.31011 11.3055 3.72295 10.7716 2.28347 8.95968L2.22918 9.1623C2.15771 9.42903 1.88354 9.58732 1.61681 9.51585C1.35008 9.44438 1.19178 9.17021 1.26325 8.90348L1.62928 7.53746C1.70075 7.27072 1.97492 7.11243 2.24165 7.1839L3.60768 7.54993C3.87441 7.6214 4.0327 7.89557 3.96123 8.1623C3.88976 8.42903 3.61559 8.58732 3.34886 8.51585L3.17668 8.46972C4.33144 9.79246 6.29644 10.1587 7.8745 9.24758C8.95373 8.62449 9.60638 7.54634 9.72909 6.39348C9.75832 6.11889 10.0046 5.91998 10.2792 5.94921Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M6.49954 3.74997C6.49954 3.47382 6.27568 3.24997 5.99954 3.24997C5.7234 3.24997 5.49954 3.47382 5.49954 3.74997V5.99997C5.49954 6.1756 5.59169 6.33835 5.74229 6.42871L6.99229 7.17871C7.22908 7.32079 7.53621 7.244 7.67828 7.00721C7.82036 6.77042 7.74358 6.46329 7.50679 6.32122L6.49954 5.71687V3.74997Z",
							"fill": "currentColor"
						},
						"children": []
					}
				]
			}]
		}]
	},
	name: "ClockRefresh"
};
//#endregion
//#region app/components/base/icons/src/vender/line/time/ClockRefresh.tsx
var Icon = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: ClockRefresh_default
});
Icon.displayName = "ClockRefresh";
//#endregion
//#region app/components/workflow/header/view-history.tsx
var ViewHistory = ({ withText, onClearLogAndMessageModal, historyUrl }) => {
	const { t } = useTranslation();
	const isChatMode = useIsChatMode();
	const [open, setOpen] = useState(false);
	const { formatTimeFromNow } = useFormatTimeFromNow();
	const { handleNodesCancelSelected } = useNodesInteractions();
	const { handleCancelDebugAndPreviewPanel } = useWorkflowInteractions();
	const workflowStore = useWorkflowStore();
	const setControlMode = useStore((s) => s.setControlMode);
	const historyWorkflowData = useStore((s) => s.historyWorkflowData);
	const { handleBackupDraft } = useWorkflowRun();
	const { closeAllInputFieldPanels } = useInputFieldPanel();
	const { data, isLoading } = useWorkflowRunHistory(historyUrl, open && !!historyUrl);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		placement: withText ? "bottom-start" : "bottom-end",
		offset: {
			mainAxis: 4,
			crossAxis: withText ? -8 : 10
		},
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsxs(PortalToFollowElemTrigger, {
			onClick: () => setOpen((v) => !v),
			children: [withText && /* @__PURE__ */ jsxs("button", {
				type: "button",
				"aria-label": t("common.showRunHistory", { ns: "workflow" }),
				className: cn("flex h-8 items-center rounded-lg border-[0.5px] border-components-button-secondary-border bg-components-button-secondary-bg px-3 shadow-xs", "cursor-pointer text-[13px] font-medium text-components-button-secondary-text hover:bg-components-button-secondary-bg-hover", open && "bg-components-button-secondary-bg-hover"),
				children: [/* @__PURE__ */ jsx("span", { className: "i-custom-vender-line-time-clock-play mr-1 h-4 w-4" }), t("common.showRunHistory", { ns: "workflow" })]
			}), !withText && /* @__PURE__ */ jsx(tooltip_default, {
				popupContent: t("common.viewRunHistory", { ns: "workflow" }),
				children: /* @__PURE__ */ jsx("button", {
					type: "button",
					"aria-label": t("common.viewRunHistory", { ns: "workflow" }),
					className: cn("group flex h-7 w-7 cursor-pointer items-center justify-center rounded-md hover:bg-state-accent-hover", open && "bg-state-accent-hover"),
					onClick: () => {
						onClearLogAndMessageModal?.();
					},
					children: /* @__PURE__ */ jsx("span", { className: cn("i-custom-vender-line-time-clock-play", "h-4 w-4 group-hover:text-components-button-secondary-accent-text", open ? "text-components-button-secondary-accent-text" : "text-components-button-ghost-text") })
				})
			})]
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[12]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "ml-2 flex w-[240px] flex-col overflow-y-auto rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-xl",
				style: { maxHeight: "calc(2 / 3 * 100vh)" },
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "sticky top-0 flex items-center justify-between bg-components-panel-bg px-4 pt-3 text-base font-semibold text-text-primary",
						children: [/* @__PURE__ */ jsx("div", {
							className: "grow",
							children: t("common.runHistory", { ns: "workflow" })
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							"aria-label": t("operation.close", { ns: "common" }),
							className: "flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center",
							onClick: () => {
								onClearLogAndMessageModal?.();
								setOpen(false);
							},
							children: /* @__PURE__ */ jsx("span", { className: "i-ri-close-line h-4 w-4 text-text-tertiary" })
						})]
					}),
					isLoading && /* @__PURE__ */ jsx("div", {
						className: "flex h-10 items-center justify-center",
						children: /* @__PURE__ */ jsx(Loading, {})
					}),
					!isLoading && /* @__PURE__ */ jsxs("div", {
						className: "p-2",
						children: [!data?.data.length && /* @__PURE__ */ jsxs("div", {
							className: "py-12",
							children: [/* @__PURE__ */ jsx("span", { className: "i-custom-vender-line-time-clock-play-slim mx-auto mb-2 h-8 w-8 text-text-quaternary" }), /* @__PURE__ */ jsx("div", {
								className: "text-center text-[13px] text-text-quaternary",
								children: t("common.notRunning", { ns: "workflow" })
							})]
						}), data?.data.map((item) => /* @__PURE__ */ jsxs("div", {
							className: cn("mb-0.5 flex cursor-pointer rounded-lg px-2 py-[7px] hover:bg-state-base-hover", item.id === historyWorkflowData?.id && "bg-state-accent-hover hover:bg-state-accent-hover"),
							onClick: () => {
								workflowStore.setState({
									historyWorkflowData: item,
									showInputsPanel: false,
									showEnvPanel: false
								});
								closeAllInputFieldPanels();
								handleBackupDraft();
								setOpen(false);
								handleNodesCancelSelected();
								handleCancelDebugAndPreviewPanel();
								setControlMode(ControlMode.Hand);
							},
							children: [
								!isChatMode && [WorkflowRunningStatus.Stopped, WorkflowRunningStatus.Paused].includes(item.status) && /* @__PURE__ */ jsx("span", { className: "i-custom-vender-line-alertsAndFeedback-alert-triangle mr-1.5 mt-0.5 h-3.5 w-3.5 text-[#F79009]" }),
								!isChatMode && item.status === WorkflowRunningStatus.Failed && /* @__PURE__ */ jsx("span", { className: "i-ri-error-warning-line mr-1.5 mt-0.5 h-3.5 w-3.5 text-[#F04438]" }),
								!isChatMode && item.status === WorkflowRunningStatus.Succeeded && /* @__PURE__ */ jsx("span", { className: "i-ri-checkbox-circle-line mr-1.5 mt-0.5 h-3.5 w-3.5 text-[#12B76A]" }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: cn("flex items-center text-[13px] font-medium leading-[18px] text-text-primary", item.id === historyWorkflowData?.id && "text-text-accent"),
									children: `Test ${isChatMode ? "Chat" : "Run"}${formatWorkflowRunIdentifier(item.finished_at, item.status)}`
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center text-xs leading-[18px] text-text-tertiary",
									children: [
										item.created_by_account?.name,
										" ",
										"·",
										formatTimeFromNow((item.finished_at || item.created_at) * 1e3)
									]
								})] })
							]
						}, item.id))]
					})
				]
			})
		})]
	});
};
var view_history_default = memo(ViewHistory);
//#endregion
export { Icon$2 as n, Icon$3 as r, view_history_default as t };
