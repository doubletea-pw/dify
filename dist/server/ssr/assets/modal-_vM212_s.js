import "./i18next-CxGFEMD9.js";
import "./Trans-UjBkHktY.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { n as useBoolean } from "./tooltip-ZeeerRdq.js";
import "./app-icon-DPKtAo3e.js";
import "./useKeyPress-DtHtlpBY.js";
import "./store-BCKZaSV6.js";
import "./dist-mUzjAi-W.js";
import "./utils-pMdyvQan.js";
import "./use-breakpoints-Ij85IgkK.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as Divider } from "./divider-DZD56ykp.js";
import "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import "./config-Dopncj5R.js";
import { ir as produce } from "./hooks-Bj_4KA1b.js";
import "./i18n-config-jsJ9YUFd.js";
import "./base-BuKAg6Le.js";
import "./src-BByrOQhU.js";
import { t as noop } from "./noop--k6oqy4d.js";
import "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./workflow-CULNEjcb.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import "./action-button-BK9WUMzU.js";
import "./input-BOHL-qYi.js";
import "./switch-CFJdYxEh.js";
import "./select-C87OPWpf.js";
import "./loading-BryKikzY.js";
import "./dialog-DCCIZLOh.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import "./dayjs.min-CNlMkMP6.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import { i as getNewVar, n as checkKeys } from "./var-DPpHtpXT.js";
import "./credential-item-C22_bUSw.js";
import "./apps-b6zqLiv3.js";
import "./datasets-hfpkpjNW.js";
import "./use-base-DLpNl2rR.js";
import "./client-CLQTU2Oi.js";
import "./global-public-context-DpzzsplY.js";
import "./common-qRxT6xi0.js";
import "./i18n-lDm19WzR.js";
import "./useDebounceFn-Y4NS6c4S.js";
import "./checkbox-DTSgkYdc.js";
import "./common-fiYzNZ23.js";
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
import "./fast-deep-equal-T8EktbR5.js";
import "./format-BCVnrx09.js";
import "./general-C8w9hIeL.js";
import { t as PromptEditor } from "./prompt-editor-PJuCbabP.js";
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
import "./arrows-fbeBWnky.js";
import "./var-reference-picker-PlAsXjUc.js";
import "./others-CYlDNVYO.js";
import "./Warning-BiM5Lre1.js";
import { t as require_dist } from "./dist-BcmQ9DaV.js";
import { n as var_highlight_default, t as confirm_add_var_default } from "./confirm-add-var-B3rmLWXj.js";
import * as React$1 from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/block-input/index.tsx
var import_dist = require_dist();
var regex = /\{\{([^}]+)\}\}/g;
var getInputKeys = (value) => {
	const keys = value.match(regex)?.map((item) => {
		return item.replace("{{", "").replace("}}", "");
	}) || [];
	const keyObj = {};
	const res = [];
	keys.forEach((key) => {
		if (keyObj[key]) return;
		keyObj[key] = true;
		res.push(key);
	});
	return res;
};
var BlockInput = ({ value = "", className, readonly = false, onConfirm }) => {
	const { t } = useTranslation();
	const [currentValue, setCurrentValue] = useState(value);
	useEffect(() => {
		setCurrentValue(value);
	}, [value]);
	const contentEditableRef = useRef(null);
	const [isEditing, setIsEditing] = useState(false);
	useEffect(() => {
		if (isEditing && contentEditableRef.current) {
			if (currentValue) contentEditableRef.current.setSelectionRange(currentValue.length, currentValue.length);
			contentEditableRef.current.focus();
		}
	}, [isEditing]);
	const style = cn({
		"block h-full w-full break-all border-0 px-4 py-2 text-sm text-gray-900 outline-0": true,
		"block-input--editing": isEditing
	});
	const renderSafeContent = (value) => {
		return value.split(/(\{\{[^}]+\}\}|\n)/g).map((part, index) => {
			const variableMatch = /^\{\{([^}]+)\}\}$/.exec(part);
			if (variableMatch) return /* @__PURE__ */ jsx(var_highlight_default, { name: variableMatch[1] }, `var-${index}`);
			if (part === "\n") return /* @__PURE__ */ jsx("br", {}, `br-${index}`);
			return /* @__PURE__ */ jsx("span", { children: part }, `text-${index}`);
		});
	};
	const handleSubmit = (value) => {
		if (onConfirm) {
			const keys = getInputKeys(value);
			const result = checkKeys(keys);
			if (!result.isValid) {
				Toast.notify({
					type: "error",
					message: t(`varKeyError.${result.errorMessageKey}`, {
						ns: "appDebug",
						key: result.errorKey
					})
				});
				return;
			}
			onConfirm(value, keys);
		}
	};
	const onValueChange = useCallback((e) => {
		const value = e.target.value;
		setCurrentValue(value);
		handleSubmit(value);
	}, []);
	const TextAreaContentView = () => {
		return /* @__PURE__ */ jsx("div", {
			className: cn(style, className),
			"data-testid": "block-input-content",
			children: renderSafeContent(currentValue || "")
		});
	};
	const textAreaContent = /* @__PURE__ */ jsx("div", {
		className: cn(readonly ? "max-h-[180px] pb-5" : "h-[180px]", "overflow-y-auto"),
		onClick: () => !readonly && setIsEditing(true),
		children: isEditing ? /* @__PURE__ */ jsx("div", {
			className: "h-full px-4 py-2",
			children: /* @__PURE__ */ jsx("textarea", {
				ref: contentEditableRef,
				className: cn("focus:outline-none bg-transparent text-sm", "block h-full w-full resize-none"),
				placeholder: "",
				onChange: onValueChange,
				value: currentValue,
				onBlur: () => {
					blur();
					setIsEditing(false);
				}
			})
		}) : /* @__PURE__ */ jsx(TextAreaContentView, {})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn("block-input w-full overflow-y-auto rounded-xl border-none bg-white"),
		"data-testid": "block-input",
		children: [textAreaContent, !readonly && /* @__PURE__ */ jsx("div", {
			className: "flex pb-2 pl-4",
			children: /* @__PURE__ */ jsx("div", {
				className: "h-[18px] rounded-md bg-gray-100 px-1 text-xs leading-[18px] text-gray-500",
				children: currentValue?.length
			})
		})]
	});
};
React$1.memo(BlockInput);
//#endregion
//#region app/components/base/features/new-feature-panel/conversation-opener/modal.tsx
var MAX_QUESTION_NUM = 10;
var OpeningSettingModal = ({ data, onSave, onCancel, promptVariables = [], workflowVariables = [], onAutoAddPromptVariable }) => {
	const { t } = useTranslation();
	const [tempValue, setTempValue] = useState(data?.opening_statement || "");
	useEffect(() => {
		setTempValue(data.opening_statement || "");
	}, [data.opening_statement]);
	const [tempSuggestedQuestions, setTempSuggestedQuestions] = useState(data.suggested_questions || []);
	const [isShowConfirmAddVar, { setTrue: showConfirmAddVar, setFalse: hideConfirmAddVar }] = useBoolean(false);
	const [notIncludeKeys, setNotIncludeKeys] = useState([]);
	const isSaveDisabled = useMemo(() => !tempValue.trim(), [tempValue]);
	const handleSave = useCallback((ignoreVariablesCheck) => {
		if (isSaveDisabled) return;
		if (!ignoreVariablesCheck) {
			const keys = getInputKeys(tempValue)?.filter((key) => {
				const { isValid } = checkKeys([key], true);
				return isValid;
			});
			const promptKeys = promptVariables.map((item) => item.key);
			const workflowVariableKeys = workflowVariables.map((item) => item.variable);
			let notIncludeKeys = [];
			if (promptKeys.length === 0 && workflowVariables.length === 0) {
				if (keys.length > 0) notIncludeKeys = keys;
			} else if (workflowVariables.length > 0) notIncludeKeys = keys.filter((key) => !workflowVariableKeys.includes(key));
			else notIncludeKeys = keys.filter((key) => !promptKeys.includes(key));
			if (notIncludeKeys.length > 0) {
				setNotIncludeKeys(notIncludeKeys);
				showConfirmAddVar();
				return;
			}
		}
		onSave(produce(data, (draft) => {
			if (draft) {
				draft.opening_statement = tempValue;
				draft.suggested_questions = tempSuggestedQuestions;
			}
		}));
	}, [
		data,
		onSave,
		promptVariables,
		workflowVariables,
		showConfirmAddVar,
		tempSuggestedQuestions,
		tempValue,
		isSaveDisabled
	]);
	const cancelAutoAddVar = useCallback(() => {
		hideConfirmAddVar();
		handleSave(true);
	}, [handleSave, hideConfirmAddVar]);
	const autoAddVar = useCallback(() => {
		onAutoAddPromptVariable?.(notIncludeKeys.map((key) => getNewVar(key, "string")));
		hideConfirmAddVar();
		handleSave(true);
	}, [
		handleSave,
		hideConfirmAddVar,
		notIncludeKeys,
		onAutoAddPromptVariable
	]);
	const [focusID, setFocusID] = useState(null);
	const [deletingID, setDeletingID] = useState(null);
	const renderQuestions = () => {
		return /* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center py-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 space-x-0.5 text-xs font-medium leading-[18px] text-text-tertiary",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "uppercase",
							children: t("openingStatement.openingQuestion", { ns: "appDebug" })
						}),
						/* @__PURE__ */ jsx("div", { children: "·" }),
						/* @__PURE__ */ jsxs("div", { children: [
							tempSuggestedQuestions.length,
							"/",
							MAX_QUESTION_NUM
						] })
					]
				}), /* @__PURE__ */ jsx(Divider, {
					bgStyle: "gradient",
					className: "ml-3 h-px w-0 grow"
				})]
			}),
			/* @__PURE__ */ jsx(import_dist.ReactSortable, {
				className: "space-y-1",
				list: tempSuggestedQuestions.map((name, index) => {
					return {
						id: index,
						name
					};
				}),
				setList: (list) => setTempSuggestedQuestions(list.map((item) => item.name)),
				handle: ".handle",
				ghostClass: "opacity-50",
				animation: 150,
				children: tempSuggestedQuestions.map((question, index) => {
					return /* @__PURE__ */ jsxs("div", {
						className: cn("group relative flex items-center rounded-lg border border-components-panel-border-subtle bg-components-panel-on-panel-item-bg pl-2.5 hover:bg-components-panel-on-panel-item-bg-hover", focusID === index && "border-components-input-border-active bg-components-input-bg-active hover:border-components-input-border-active hover:bg-components-input-bg-active", deletingID === index && "border-components-input-border-destructive bg-state-destructive-hover hover:border-components-input-border-destructive hover:bg-state-destructive-hover"),
						children: [
							/* @__PURE__ */ jsx("span", { className: "handle i-ri-draggable h-4 w-4 cursor-grab text-text-quaternary" }),
							/* @__PURE__ */ jsx("input", {
								type: "input",
								value: question || "",
								placeholder: t("openingStatement.openingQuestionPlaceholder", { ns: "appDebug" }),
								onChange: (e) => {
									const value = e.target.value;
									setTempSuggestedQuestions(tempSuggestedQuestions.map((item, i) => {
										if (index === i) return value;
										return item;
									}));
								},
								className: "h-9 w-full grow cursor-pointer overflow-x-auto rounded-lg border-0 bg-transparent pl-1.5 pr-8 text-sm leading-9 text-text-secondary focus:outline-none",
								onFocus: () => setFocusID(index),
								onBlur: () => setFocusID(null)
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute right-1.5 top-1/2 block translate-y-[-50%] cursor-pointer rounded-md p-1 text-text-tertiary hover:bg-state-destructive-hover hover:text-text-destructive",
								onClick: () => {
									setTempSuggestedQuestions(tempSuggestedQuestions.filter((_, i) => index !== i));
								},
								onMouseEnter: () => setDeletingID(index),
								onMouseLeave: () => setDeletingID(null),
								children: /* @__PURE__ */ jsx("span", {
									className: "i-ri-delete-bin-line h-3.5 w-3.5",
									"data-testid": `delete-question-${question}`
								})
							})
						]
					}, index);
				})
			}),
			tempSuggestedQuestions.length < MAX_QUESTION_NUM && /* @__PURE__ */ jsxs("div", {
				onClick: () => {
					setTempSuggestedQuestions([...tempSuggestedQuestions, ""]);
				},
				className: "mt-1 flex h-9 cursor-pointer items-center gap-2 rounded-lg bg-components-button-tertiary-bg px-3 text-components-button-tertiary-text hover:bg-components-button-tertiary-bg-hover",
				children: [/* @__PURE__ */ jsx("span", { className: "i-ri-add-line h-4 w-4" }), /* @__PURE__ */ jsx("div", {
					className: "text-[13px] system-sm-medium",
					children: t("variableConfig.addOption", { ns: "appDebug" })
				})]
			})
		] });
	};
	return /* @__PURE__ */ jsxs(Modal, {
		isShow: true,
		onClose: noop,
		className: "!mt-14 !w-[640px] !max-w-none !bg-components-panel-bg-blur !p-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mb-6 flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-text-primary title-2xl-semi-bold",
					children: t("feature.conversationOpener.title", { ns: "appDebug" })
				}), /* @__PURE__ */ jsx("div", {
					className: "cursor-pointer p-1",
					onClick: onCancel,
					"data-testid": "close-modal",
					role: "button",
					tabIndex: 0,
					onKeyDown: (e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							onCancel();
						}
					},
					children: /* @__PURE__ */ jsx("span", { className: "i-ri-close-line h-4 w-4 text-text-tertiary" })
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mb-8 flex gap-2",
				children: [/* @__PURE__ */ jsx("div", {
					className: "mt-1.5 h-8 w-8 shrink-0 rounded-lg border-components-panel-border bg-util-colors-orange-dark-orange-dark-500 p-1.5",
					children: /* @__PURE__ */ jsx("span", { className: "i-ri-asterisk h-5 w-5 text-text-primary-on-surface" })
				}), /* @__PURE__ */ jsxs("div", {
					className: "grow rounded-2xl border-t border-divider-subtle bg-chat-bubble-bg p-3 shadow-xs",
					children: [/* @__PURE__ */ jsx(PromptEditor, {
						value: tempValue,
						onChange: setTempValue,
						placeholder: t("openingStatement.placeholder", { ns: "appDebug" }),
						variableBlock: {
							show: true,
							variables: [...promptVariables.map((item) => ({
								name: item.name || item.key,
								value: item.key
							})), ...workflowVariables.map((item) => ({
								name: item.variable,
								value: item.variable
							}))]
						}
					}), renderQuestions()]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					onClick: onCancel,
					className: "mr-2",
					children: t("operation.cancel", { ns: "common" })
				}), /* @__PURE__ */ jsx(Button, {
					variant: "primary",
					onClick: () => handleSave(),
					disabled: isSaveDisabled,
					children: t("operation.save", { ns: "common" })
				})]
			}),
			isShowConfirmAddVar && /* @__PURE__ */ jsx(confirm_add_var_default, {
				varNameArr: notIncludeKeys,
				onConfirm: autoAddVar,
				onCancel: cancelAutoAddVar,
				onHide: hideConfirmAddVar
			})
		]
	});
};
//#endregion
export { OpeningSettingModal as default };
