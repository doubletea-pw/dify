import { rr as f1, xt as P7 } from "./react-D5xHzNYo.js";
import "./i18next-CxGFEMD9.js";
import "./Trans-UjBkHktY.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import "./app-icon-DPKtAo3e.js";
import "./useKeyPress-DtHtlpBY.js";
import { t as useStore } from "./store-BCKZaSV6.js";
import "./dist-mUzjAi-W.js";
import "./utils-pMdyvQan.js";
import "./use-breakpoints-Ij85IgkK.js";
import "./navigation-C_u5Brbk.js";
import "./divider-DZD56ykp.js";
import { hn as formatWorkflowRunIdentifier } from "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import "./config-Dopncj5R.js";
import { $n as useWorkflowStore, Qn as useStore$1, u as useWorkflowRun } from "./hooks-Bj_4KA1b.js";
import "./i18n-config-jsJ9YUFd.js";
import "./base-BuKAg6Le.js";
import "./src-BByrOQhU.js";
import "./markdown-utils-D9ZHqkyo.js";
import { c as getThreadMessages, d as chat_default, t as buildChatItemTree } from "./utils-Dep53bT6.js";
import "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./workflow-CULNEjcb.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import "./button-BqYXL-Bc.js";
import "./confirm-CKQP3hdx.js";
import "./action-button-BK9WUMzU.js";
import "./input-BOHL-qYi.js";
import "./switch-CFJdYxEh.js";
import "./select-C87OPWpf.js";
import { t as Loading } from "./loading-BryKikzY.js";
import "./dialog-DCCIZLOh.js";
import "./modal-9VFVByDR.js";
import "./dayjs.min-CNlMkMP6.js";
import "./utc-CCXXQ2Pp.js";
import "./use-timestamp-DPYGivGq.js";
import "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import "./credential-item-C22_bUSw.js";
import "./apps-b6zqLiv3.js";
import "./datasets-hfpkpjNW.js";
import "./use-base-DLpNl2rR.js";
import "./client-CLQTU2Oi.js";
import "./use-apps-t6Q_ZP4w.js";
import "./global-public-context-DpzzsplY.js";
import "./common-qRxT6xi0.js";
import "./i18n-lDm19WzR.js";
import "./share-Bnl8cbPg.js";
import "./useDebounceFn-Y4NS6c4S.js";
import "./checkbox-DTSgkYdc.js";
import "./copy-to-clipboard-CEvVSVWT.js";
import "./common-fiYzNZ23.js";
import "./upgrade-btn-CpSPytX5.js";
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
import "./status-CPKUa4Vg.js";
import "./fast-deep-equal-T8EktbR5.js";
import "./format-BCVnrx09.js";
import "./general-C8w9hIeL.js";
import "./prompt-editor-PJuCbabP.js";
import "./pipeline-EQygYMXw.js";
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
import "./radio-4K5OYxdz.js";
import "./modal-C9_LwvXw.js";
import "./use-get-icon-D8ihnTYG.js";
import { h as fetchConversationMessages } from "./code-editor-BPvpmrXg.js";
import { c as getProcessedFilesFromResponse } from "./utils-Dh7W533Q.js";
import "./tag-input-9kTFEfAj.js";
import "./dist-DV9-MooO2.js";
import "./image-preview-D0J1Go0B.js";
import "./dropdown-menu-DdKnIBZG.js";
import "./arrows-fbeBWnky.js";
import "./var-reference-picker-PlAsXjUc.js";
import "./others-CYlDNVYO.js";
import "./Warning-BiM5Lre1.js";
import "./check-input-forms-hooks-D5-pytt0.js";
import "./relativeTime-BAkB0A3u.js";
import "./file-uploader-DuOqY7O5.js";
import "./audio.player.manager-BbxYn4nN.js";
import "./files-Do6W6gRz.js";
import "./context-X_lHIALZ.js";
import "./log-C5ooGRGD.js";
import "./loading-anim-Ck_Modzp.js";
import "./usage-CsZ9mdCY.js";
import "./grid-mask-BR99s5KY.js";
import "./progress-bar-B_Dpla84.js";
import "./usage-info-T9FNDAad.js";
import "./annotation-D2xI61pO.js";
import "./features-D2eB-UM8.js";
import { memo, useCallback, useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow/panel/chat-record/user-input.tsx
var UserInput = ({ variables = [], initialExpanded = true }) => {
	const { t } = useTranslation();
	const [expanded, setExpanded] = useState(initialExpanded);
	if (!variables.length) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: `
        rounded-xl border
        ${!expanded ? "border-components-panel-border-subtle bg-components-panel-on-panel-item-bg shadow-none" : "border-transparent bg-white shadow-xs"}
      `,
		children: [/* @__PURE__ */ jsxs("div", {
			className: `
          flex h-[18px] cursor-pointer items-center px-2 pt-4 text-[13px] font-semibold
          ${!expanded ? "text-text-accent-secondary" : "text-text-secondary"}
        `,
			onClick: () => setExpanded(!expanded),
			children: [/* @__PURE__ */ jsx(f1, { className: `mr-1 h-3 w-3 ${!expanded ? "-rotate-90 text-text-accent" : "text-text-tertiary"}` }), t("panel.userInputField", { ns: "workflow" }).toLocaleUpperCase()]
		}), /* @__PURE__ */ jsx("div", {
			className: "px-2 pb-3 pt-1",
			children: expanded && /* @__PURE__ */ jsx("div", {
				className: "py-2 text-[13px] text-text-primary",
				children: variables.map((variable) => /* @__PURE__ */ jsx("div", { className: "mb-2 last-of-type:mb-0" }, variable.variable))
			})
		})]
	});
};
var user_input_default = memo(UserInput);
//#endregion
//#region app/components/workflow/panel/chat-record/index.tsx
function getFormattedChatList(messages) {
	const res = [];
	messages.forEach((item) => {
		const questionFiles = item.message_files?.filter((file) => file.belongs_to === "user") || [];
		res.push({
			id: `question-${item.id}`,
			content: item.query,
			isAnswer: false,
			message_files: getProcessedFilesFromResponse(questionFiles.map((item) => ({
				...item,
				related_id: item.id
			}))),
			parentMessageId: item.parent_message_id || void 0
		});
		const answerFiles = item.message_files?.filter((file) => file.belongs_to === "assistant") || [];
		res.push({
			id: item.id,
			content: item.answer,
			feedback: item.feedback,
			isAnswer: true,
			citation: item.metadata?.retriever_resources,
			message_files: getProcessedFilesFromResponse(answerFiles.map((item) => ({
				...item,
				related_id: item.id
			}))),
			workflow_run_id: item.workflow_run_id,
			parentMessageId: `question-${item.id}`
		});
	});
	return res;
}
var ChatRecord = () => {
	const [fetched, setFetched] = useState(false);
	const [chatItemTree, setChatItemTree] = useState([]);
	const [threadChatItems, setThreadChatItems] = useState([]);
	const appDetail = useStore((s) => s.appDetail);
	const workflowStore = useWorkflowStore();
	const { handleLoadBackupDraft } = useWorkflowRun();
	const historyWorkflowData = useStore$1((s) => s.historyWorkflowData);
	const currentConversationID = historyWorkflowData?.conversation_id;
	const handleFetchConversationMessages = useCallback(async () => {
		if (appDetail && currentConversationID) try {
			setFetched(false);
			const newAllChatItems = getFormattedChatList((await fetchConversationMessages(appDetail.id, currentConversationID)).data);
			const tree = buildChatItemTree(newAllChatItems);
			setChatItemTree(tree);
			setThreadChatItems(getThreadMessages(tree, newAllChatItems.at(-1)?.id));
		} catch {} finally {
			setFetched(true);
		}
	}, [appDetail, currentConversationID]);
	useEffect(() => {
		handleFetchConversationMessages();
	}, [
		currentConversationID,
		appDetail,
		handleFetchConversationMessages
	]);
	const switchSibling = useCallback((siblingMessageId) => {
		setThreadChatItems(getThreadMessages(chatItemTree, siblingMessageId));
	}, [chatItemTree]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full w-[420px] flex-col rounded-l-2xl border border-components-panel-border bg-chatbot-bg shadow-xl",
		children: [!fetched && /* @__PURE__ */ jsx("div", {
			className: "flex h-full items-center justify-center",
			children: /* @__PURE__ */ jsx(Loading, {})
		}), fetched && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 items-center justify-between p-4 pb-1 text-base font-semibold text-text-primary",
			children: [`TEST CHAT${formatWorkflowRunIdentifier(historyWorkflowData?.finished_at)}`, /* @__PURE__ */ jsx("div", {
				className: "flex h-6 w-6 cursor-pointer items-center justify-center",
				onClick: () => {
					handleLoadBackupDraft();
					workflowStore.setState({ historyWorkflowData: void 0 });
				},
				children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-text-tertiary" })
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "h-0 grow",
			children: /* @__PURE__ */ jsx(chat_default, {
				config: {
					supportCitationHitInfo: true,
					questionEditEnable: false
				},
				chatList: threadChatItems,
				chatContainerClassName: "px-3",
				chatContainerInnerClassName: "pt-6 w-full max-w-full mx-auto",
				chatFooterClassName: "px-4 rounded-b-2xl",
				chatFooterInnerClassName: "pb-4 w-full max-w-full mx-auto",
				chatNode: /* @__PURE__ */ jsx(user_input_default, {}),
				noChatInput: true,
				allToolIcons: {},
				showPromptLog: true,
				switchSibling,
				noSpacing: true,
				chatAnswerContainerInner: "!pr-2"
			})
		})] })]
	});
};
var chat_record_default = memo(ChatRecord);
//#endregion
export { chat_record_default as default };
