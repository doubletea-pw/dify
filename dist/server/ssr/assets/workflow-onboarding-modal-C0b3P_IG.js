import "./i18next-CxGFEMD9.js";
import "./Trans-UjBkHktY.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import "./app-icon-DPKtAo3e.js";
import "./useKeyPress-DtHtlpBY.js";
import "./store-BCKZaSV6.js";
import "./dist-mUzjAi-W.js";
import "./utils-pMdyvQan.js";
import "./use-breakpoints-Ij85IgkK.js";
import "./navigation-C_u5Brbk.js";
import "./divider-DZD56ykp.js";
import { St as TabsEnum } from "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import { Ot as BlockEnum } from "./config-Dopncj5R.js";
import "./hooks-Bj_4KA1b.js";
import "./i18n-config-jsJ9YUFd.js";
import "./base-BuKAg6Le.js";
import "./src-BByrOQhU.js";
import "./utils-oRnrO3yr.js";
import { t as NodeSelectorWrapper } from "./block-selector-3FQlv2eg.js";
import "./semver-olnXAeJC.js";
import "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import { b as Icon, i as Icon$1 } from "./workflow-CULNEjcb.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import "./button-BqYXL-Bc.js";
import "./action-button-BK9WUMzU.js";
import "./input-BOHL-qYi.js";
import "./switch-CFJdYxEh.js";
import "./loading-BryKikzY.js";
import "./dialog-DCCIZLOh.js";
import "./modal-9VFVByDR.js";
import "./dayjs.min-CNlMkMP6.js";
import "./utc-CCXXQ2Pp.js";
import "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import "./credential-item-C22_bUSw.js";
import "./apps-b6zqLiv3.js";
import "./datasets-hfpkpjNW.js";
import "./use-base-DLpNl2rR.js";
import "./client-CLQTU2Oi.js";
import "./global-public-context-DpzzsplY.js";
import "./common-qRxT6xi0.js";
import "./i18n-lDm19WzR.js";
import "./share-Bnl8cbPg.js";
import "./useDebounceFn-Y4NS6c4S.js";
import "./checkbox-DTSgkYdc.js";
import "./badge-DnA7gOK5.js";
import "./textarea-Ngtow1st.js";
import "./constants-P0J540jJ.js";
import "./modal-context-CphlqvPm.js";
import "./config-DUQ_rYOW.js";
import "./provider-context-CToT0pwd.js";
import "./link-1R-efKLW.js";
import "./use-refresh-plugin-list-C8aKRYG-.js";
import "./use-triggers-DguQxV9N.js";
import "./other-sSUV3aYW.js";
import "./dynamic-6-R69YAE.js";
import "./workflow-Dbk_had1.js";
import { t as shortcuts_name_default } from "./shortcuts-name-TpjITleC.js";
import "./fast-deep-equal-T8EktbR5.js";
import "./format-BCVnrx09.js";
import "./dayjs-7JTRFpGV.js";
import "./general-C8w9hIeL.js";
import "./hooks-BTelimHS.js";
import "./use-common-BJ1aZaXJ.js";
import "./popover-CTEbJchz.js";
import "./model-selector-ahzffqOG.js";
import "./dist-CGvyUAMR.js";
import "./use-theme-3YxPQV4B.js";
import "./model-name-DBTGJc7a.js";
import "./skeleton-Brd40zkS.js";
import "./alert-dialog-_9biHzKe.js";
import "./alertsAndFeedback-BpcdEYpr.js";
import "./amplitude-BnPDazhN.js";
import "./esm-CfW7DN4f.js";
import "./use-get-icon-D8ihnTYG.js";
import "./utils-Dh7W533Q.js";
import "./all-tools-CeIs_t-g.js";
import "./install-from-marketplace-xx52t9E_.js";
import "./use-workflow-run-event-Bl1EmFYx.js";
import "./audio.player.manager-BbxYn4nN.js";
import { a as DialogPortal, i as DialogDescription, n as DialogCloseButton, o as DialogTitle, r as DialogContent, t as Dialog } from "./dialog-CKL1xdm0.js";
import { useCallback, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow-app/components/workflow-onboarding-modal/start-node-option.tsx
var StartNodeOption = ({ icon, title, subtitle, description, onClick }) => {
	return /* @__PURE__ */ jsxs("div", {
		onClick,
		className: "flex h-40 w-[280px] cursor-pointer flex-col gap-2 rounded-xl border-[0.5px] border-components-option-card-option-border bg-components-panel-on-panel-item-bg p-4 shadow-sm transition-all hover:shadow-md",
		children: [/* @__PURE__ */ jsx("div", {
			className: "shrink-0",
			children: icon
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex h-[74px] flex-col gap-1 py-0.5",
			children: [/* @__PURE__ */ jsx("div", {
				className: "h-5 leading-5",
				children: /* @__PURE__ */ jsxs("h3", {
					className: "text-text-primary",
					children: [title, subtitle && /* @__PURE__ */ jsxs("span", {
						className: "text-text-quaternary system-md-regular",
						children: [" ", subtitle]
					})]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "h-12 leading-4",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-text-tertiary system-xs-regular",
					children: description
				})
			})]
		})]
	});
};
//#endregion
//#region app/components/workflow-app/components/workflow-onboarding-modal/start-node-selection-panel.tsx
var StartNodeSelectionPanel = ({ onSelectUserInput, onSelectTrigger }) => {
	const { t } = useTranslation();
	const [showTriggerSelector, setShowTriggerSelector] = useState(false);
	const handleTriggerSelect = useCallback((nodeType, toolConfig) => {
		setShowTriggerSelector(false);
		onSelectTrigger(nodeType, toolConfig);
	}, [onSelectTrigger]);
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-2 gap-4",
		children: [/* @__PURE__ */ jsx(StartNodeOption, {
			icon: /* @__PURE__ */ jsx("div", {
				className: "flex h-9 w-9 items-center justify-center rounded-[10px] border-[0.5px] border-transparent bg-util-colors-blue-brand-blue-brand-500 p-2",
				children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-white" })
			}),
			title: t("onboarding.userInputFull", { ns: "workflow" }),
			description: t("onboarding.userInputDescription", { ns: "workflow" }),
			onClick: onSelectUserInput
		}), /* @__PURE__ */ jsx(NodeSelectorWrapper, {
			open: showTriggerSelector,
			onOpenChange: setShowTriggerSelector,
			onSelect: handleTriggerSelect,
			placement: "right",
			offset: -200,
			noBlocks: true,
			showStartTab: true,
			defaultActiveTab: TabsEnum.Start,
			forceShowStartContent: true,
			availableBlocksTypes: [
				BlockEnum.TriggerSchedule,
				BlockEnum.TriggerWebhook,
				BlockEnum.TriggerPlugin
			],
			trigger: () => /* @__PURE__ */ jsx(StartNodeOption, {
				icon: /* @__PURE__ */ jsx("div", {
					className: "flex h-9 w-9 items-center justify-center rounded-[10px] border-[0.5px] border-transparent bg-util-colors-blue-brand-blue-brand-500 p-2",
					children: /* @__PURE__ */ jsx(Icon$1, { className: "h-5 w-5 text-white" })
				}),
				title: t("onboarding.trigger", { ns: "workflow" }),
				description: t("onboarding.triggerDescription", { ns: "workflow" }),
				onClick: () => setShowTriggerSelector(true)
			})
		})]
	});
};
//#endregion
//#region app/components/workflow-app/components/workflow-onboarding-modal/index.tsx
var WorkflowOnboardingModal = ({ isShow, onClose, onSelectStartNode }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Dialog, {
		open: isShow,
		onOpenChange: onClose,
		disablePointerDismissal: true,
		children: [/* @__PURE__ */ jsxs(DialogContent, {
			className: "w-[618px] max-w-[618px] rounded-2xl border border-effects-highlight bg-background-default-subtle shadow-lg",
			overlayClassName: "bg-workflow-canvas-canvas-overlay",
			children: [/* @__PURE__ */ jsx(DialogCloseButton, {}), /* @__PURE__ */ jsxs("div", {
				className: "pb-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-6",
					children: [/* @__PURE__ */ jsx(DialogTitle, {
						className: "mb-2 text-text-primary title-2xl-semi-bold",
						children: t("onboarding.title", { ns: "workflow" })
					}), /* @__PURE__ */ jsx(DialogDescription, {
						className: "leading-4 text-text-tertiary body-xs-regular",
						children: t("onboarding.description", { ns: "workflow" })
					})]
				}), /* @__PURE__ */ jsx(StartNodeSelectionPanel, {
					onSelectUserInput: () => onSelectStartNode(BlockEnum.Start),
					onSelectTrigger: onSelectStartNode
				})]
			})]
		}), /* @__PURE__ */ jsx(DialogPortal, { children: /* @__PURE__ */ jsxs("div", {
			className: "pointer-events-none fixed left-1/2 top-1/2 z-[1002] flex -translate-x-1/2 translate-y-[165px] items-center gap-1 text-text-quaternary body-xs-regular",
			children: [
				/* @__PURE__ */ jsx("span", { children: t("onboarding.escTip.press", { ns: "workflow" }) }),
				/* @__PURE__ */ jsx(shortcuts_name_default, {
					keys: [t("onboarding.escTip.key", { ns: "workflow" })],
					textColor: "secondary"
				}),
				/* @__PURE__ */ jsx("span", { children: t("onboarding.escTip.toDismiss", { ns: "workflow" }) })
			]
		}) })]
	});
};
//#endregion
export { WorkflowOnboardingModal as default };
