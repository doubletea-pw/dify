import { Gr as s7, K as Ib, Mr as p, Un as c4, b as Ct, ct as M6, rr as f1, sr as he, xt as P7 } from "./react-D5xHzNYo.js";
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
import { t as cn } from "./classnames-LHQnX9lX.js";
import "./divider-DZD56ykp.js";
import { mt as useStoreApi } from "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import { Ot as BlockEnum } from "./config-Dopncj5R.js";
import { $n as useWorkflowStore, F as useInspectVarsCrud, Qn as useStore, V as useNodesSyncDraft, _n as findUsedVarNodes, ir as produce, jn as updateNodeVars, zr as block_icon_default } from "./hooks-Bj_4KA1b.js";
import { t as capitalize } from "./capitalize-DDeTGiHs.js";
import "./i18n-config-jsJ9YUFd.js";
import { T as toast } from "./base-BuKAg6Le.js";
import "./src-BByrOQhU.js";
import "./markdown-utils-D9ZHqkyo.js";
import { t as v4 } from "./v4-C1y4vc1I.js";
import "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./workflow-CULNEjcb.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import "./confirm-CKQP3hdx.js";
import { n as ActionButtonState, t as ActionButton } from "./action-button-BK9WUMzU.js";
import { t as Input } from "./input-BOHL-qYi.js";
import "./switch-CFJdYxEh.js";
import "./select-C87OPWpf.js";
import "./loading-BryKikzY.js";
import "./dialog-DCCIZLOh.js";
import "./modal-9VFVByDR.js";
import "./dayjs.min-CNlMkMP6.js";
import "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import { c as replaceSpaceWithUnderscoreInVarNameInput, n as checkKeys } from "./var-DPpHtpXT.js";
import "./credential-item-C22_bUSw.js";
import "./apps-b6zqLiv3.js";
import "./datasets-hfpkpjNW.js";
import "./use-base-DLpNl2rR.js";
import "./client-CLQTU2Oi.js";
import "./use-apps-t6Q_ZP4w.js";
import "./global-public-context-DpzzsplY.js";
import "./common-qRxT6xi0.js";
import "./i18n-lDm19WzR.js";
import "./useDebounceFn-Y4NS6c4S.js";
import "./checkbox-DTSgkYdc.js";
import "./copy-to-clipboard-CEvVSVWT.js";
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
import { t as code_editor_default } from "./code-editor-BPvpmrXg.js";
import "./utils-Dh7W533Q.js";
import { t as CodeLanguage } from "./types-C18Ag7fa.js";
import "./tag-input-9kTFEfAj.js";
import "./dist-DV9-MooO2.js";
import "./image-preview-D0J1Go0B.js";
import "./dropdown-menu-DdKnIBZG.js";
import "./arrows-fbeBWnky.js";
import { r as remove_button_default } from "./var-reference-picker-PlAsXjUc.js";
import { n as Icon$1, s as Icon, t as Icon$2 } from "./others-CYlDNVYO.js";
import "./Warning-BiM5Lre1.js";
import "./option-card-ChUs8MBx.js";
import { a as objectPlaceholder, i as arrayStringPlaceholder, n as arrayNumberPlaceholder, o as array_bool_list_default, r as arrayObjectPlaceholder, s as bool_value_default, t as arrayBoolPlaceholder } from "./utils-ZBC8iYjl.js";
import { t as remove_effect_var_confirm_default } from "./remove-effect-var-confirm-BGYVfUdV.js";
import { t as ChatVarType } from "./type-DLUzUsVc.js";
import * as React$1 from "react";
import { memo, useCallback, useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow/panel/chat-variable-panel/components/variable-item.tsx
var VariableItem = ({ item, onEdit, onDelete }) => {
	const [destructive, setDestructive] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("radius-md mb-1 border border-components-panel-border-subtle bg-components-panel-on-panel-item-bg px-2.5 py-2 shadow-xs hover:bg-components-panel-on-panel-item-bg-hover", destructive && "border-state-destructive-border hover:bg-state-destructive-hover"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex grow items-center gap-1",
				children: [
					/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-util-colors-teal-teal-700" }),
					/* @__PURE__ */ jsx("div", {
						className: "system-sm-medium text-text-primary",
						children: item.name
					}),
					/* @__PURE__ */ jsx("div", {
						className: "system-xs-medium text-text-tertiary",
						children: capitalize(item.value_type)
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center gap-1 text-text-tertiary",
				children: [/* @__PURE__ */ jsx("div", {
					className: "radius-md cursor-pointer p-1 hover:bg-state-base-hover hover:text-text-secondary",
					children: /* @__PURE__ */ jsx(Ct, {
						className: "h-4 w-4",
						onClick: () => onEdit(item)
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "radius-md cursor-pointer p-1 hover:bg-state-destructive-hover hover:text-text-destructive",
					onMouseOver: () => setDestructive(true),
					onMouseOut: () => setDestructive(false),
					children: /* @__PURE__ */ jsx(M6, {
						className: "h-4 w-4",
						onClick: () => onDelete(item)
					})
				})]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "system-xs-regular truncate text-text-tertiary",
			children: item.description
		})]
	});
};
var variable_item_default = memo(VariableItem);
//#endregion
//#region app/components/workflow/panel/chat-variable-panel/components/variable-type-select.tsx
var VariableTypeSelector = ({ inCell = false, value, list, onSelect, popupClassName }) => {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: () => setOpen((v) => !v),
		placement: "bottom",
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			className: "w-full",
			onClick: () => setOpen((v) => !v),
			children: /* @__PURE__ */ jsxs("div", {
				className: cn("flex w-full cursor-pointer items-center px-2", !inCell && "radius-md bg-components-input-bg-normal py-1 hover:bg-state-base-hover-alt", inCell && "py-0.5 hover:bg-state-base-hover", open && !inCell && "bg-state-base-hover-alt hover:bg-state-base-hover-alt", open && inCell && "bg-state-base-hover hover:bg-state-base-hover"),
				children: [/* @__PURE__ */ jsx("div", {
					className: cn("system-sm-regular grow truncate p-1 text-components-input-text-filled", inCell && "system-xs-regular text-text-secondary"),
					children: value
				}), /* @__PURE__ */ jsx(f1, { className: "ml-0.5 h-4 w-4 text-text-quaternary" })]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: cn("z-[11] w-full", popupClassName),
			children: /* @__PURE__ */ jsx("div", {
				className: "radius-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-1 shadow-lg",
				children: list.map((item) => /* @__PURE__ */ jsxs("div", {
					className: "radius-md flex cursor-pointer items-center gap-2 py-[6px] pl-3 pr-2 hover:bg-state-base-hover",
					onClick: () => {
						onSelect(item);
						setOpen(false);
					},
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-md-regular grow truncate text-text-secondary",
						children: item
					}), value === item && /* @__PURE__ */ jsx(s7, { className: "h-4 w-4 text-text-accent" })]
				}, item))
			})
		})]
	});
};
//#endregion
//#region app/components/workflow/panel/chat-variable-panel/components/object-value-item.tsx
var typeList$1 = [ChatVarType.String, ChatVarType.Number];
var DEFAULT_OBJECT_VALUE = {
	key: "",
	type: ChatVarType.String,
	value: void 0
};
var ObjectValueItem = ({ index, list, onChange }) => {
	const { t } = useTranslation();
	const [isFocus, setIsFocus] = useState(false);
	const handleKeyChange = useCallback((index) => {
		return (e) => {
			if (!/^\w+$/.test(e.target.value)) {
				toast.error(t("chatVariable.modal.objectKeyPatternError", { ns: "workflow" }));
				return;
			}
			onChange(produce(list, (draft) => {
				draft[index].key = e.target.value;
			}));
		};
	}, [
		list,
		onChange,
		t
	]);
	const handleTypeChange = useCallback((index) => {
		return (type) => {
			onChange(produce(list, (draft) => {
				draft[index].type = type;
				if (type === ChatVarType.Number) draft[index].value = isNaN(Number(draft[index].value)) ? void 0 : Number(draft[index].value);
				else draft[index].value = draft[index].value ? String(draft[index].value) : void 0;
			}));
		};
	}, [list, onChange]);
	const handleValueChange = useCallback((index) => {
		return (e) => {
			onChange(produce(list, (draft) => {
				draft[index].value = draft[index].type === ChatVarType.String ? e.target.value : isNaN(Number(e.target.value)) ? void 0 : Number(e.target.value);
			}));
		};
	}, [list, onChange]);
	const handleItemRemove = useCallback((index) => {
		return () => {
			onChange(produce(list, (draft) => {
				draft.splice(index, 1);
			}));
		};
	}, [list, onChange]);
	const handleItemAdd = useCallback(() => {
		onChange(produce(list, (draft) => {
			draft.push(DEFAULT_OBJECT_VALUE);
		}));
	}, [list, onChange]);
	const handleFocusChange = useCallback(() => {
		setIsFocus(true);
		if (index === list.length - 1) handleItemAdd();
	}, [
		handleItemAdd,
		index,
		list.length
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "group flex border-t border-gray-200",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "w-[120px] border-r border-gray-200",
				children: /* @__PURE__ */ jsx("input", {
					className: "block h-7 w-full appearance-none px-2 text-text-secondary caret-primary-600 outline-none system-xs-regular placeholder:text-components-input-text-placeholder placeholder:system-xs-regular hover:bg-state-base-hover focus:bg-components-input-bg-active",
					placeholder: t("chatVariable.modal.objectKey", { ns: "workflow" }) || "",
					value: list[index].key,
					onChange: handleKeyChange(index)
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "w-[96px] border-r border-gray-200",
				children: /* @__PURE__ */ jsx(VariableTypeSelector, {
					inCell: true,
					value: list[index].type,
					list: typeList$1,
					onSelect: handleTypeChange(index),
					popupClassName: "w-[120px]"
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative w-[230px]",
				children: [/* @__PURE__ */ jsx("input", {
					className: "block h-7 w-full appearance-none px-2 text-text-secondary caret-primary-600 outline-none system-xs-regular placeholder:text-components-input-text-placeholder placeholder:system-xs-regular hover:bg-state-base-hover focus:bg-components-input-bg-active",
					placeholder: t("chatVariable.modal.objectValue", { ns: "workflow" }) || "",
					value: list[index].value,
					onChange: handleValueChange(index),
					onFocus: () => handleFocusChange(),
					onBlur: () => setIsFocus(false),
					type: list[index].type === ChatVarType.Number ? "number" : "text"
				}), list.length > 1 && !isFocus && /* @__PURE__ */ jsx(remove_button_default, {
					className: "absolute right-1 top-0.5 z-10 hidden group-hover:block",
					onClick: handleItemRemove(index)
				})]
			})
		]
	});
};
var object_value_item_default = React$1.memo(ObjectValueItem);
//#endregion
//#region app/components/workflow/panel/chat-variable-panel/components/variable-modal.helpers.ts
var typeList = [
	ChatVarType.String,
	ChatVarType.Number,
	ChatVarType.Boolean,
	ChatVarType.Object,
	ChatVarType.ArrayString,
	ChatVarType.ArrayNumber,
	ChatVarType.ArrayBoolean,
	ChatVarType.ArrayObject
];
var getEditorMinHeight = (type) => type === ChatVarType.ArrayObject ? "240px" : "120px";
var getPlaceholderByType = (type) => {
	if (type === ChatVarType.ArrayString) return arrayStringPlaceholder;
	if (type === ChatVarType.ArrayNumber) return arrayNumberPlaceholder;
	if (type === ChatVarType.ArrayObject) return arrayObjectPlaceholder;
	if (type === ChatVarType.ArrayBoolean) return arrayBoolPlaceholder;
	return objectPlaceholder;
};
var buildObjectValueItems = (chatVar) => {
	if (!chatVar || !chatVar.value || Object.keys(chatVar.value).length === 0) return [DEFAULT_OBJECT_VALUE];
	return Object.keys(chatVar.value).map((key) => {
		const itemValue = chatVar.value[key];
		return {
			key,
			type: typeof itemValue === "string" ? ChatVarType.String : ChatVarType.Number,
			value: itemValue
		};
	});
};
var formatObjectValueFromList = (list) => {
	return list.reduce((acc, curr) => {
		if (curr.key) acc[curr.key] = curr.value === "" || curr.value === void 0 ? null : curr.value;
		return acc;
	}, {});
};
var formatChatVariableValue = ({ editInJSON, objectValue, type, value }) => {
	const compactArrayValue = (items) => items.filter((item) => item !== null && item !== void 0 && item !== "");
	switch (type) {
		case ChatVarType.String: return value || "";
		case ChatVarType.Number: return value || 0;
		case ChatVarType.Boolean: return value === void 0 ? true : value;
		case ChatVarType.Object: return editInJSON ? value : formatObjectValueFromList(objectValue);
		case ChatVarType.ArrayString:
		case ChatVarType.ArrayNumber:
		case ChatVarType.ArrayObject: return Array.isArray(value) ? compactArrayValue(value) : [];
		case ChatVarType.ArrayBoolean: return value || [];
	}
};
var validateVariableName = ({ name, notify, t }) => {
	const { isValid, errorMessageKey } = checkKeys([name], false);
	if (!isValid) {
		notify({
			type: "error",
			message: t(`varKeyError.${errorMessageKey}`, {
				ns: "appDebug",
				key: t("env.modal.name", { ns: "workflow" })
			})
		});
		return false;
	}
	return true;
};
var getTypeChangeState = (nextType) => {
	return {
		editInJSON: nextType === ChatVarType.ArrayObject,
		editorContent: void 0,
		objectValue: nextType === ChatVarType.Object ? [DEFAULT_OBJECT_VALUE] : void 0,
		value: nextType === ChatVarType.Boolean ? false : nextType === ChatVarType.ArrayBoolean ? [false] : void 0
	};
};
var parseEditorContent = ({ content, type }) => {
	const parsed = JSON.parse(content);
	if (type !== ChatVarType.ArrayBoolean) return parsed;
	if (!Array.isArray(parsed)) throw new TypeError("ArrayBoolean editor content must be a JSON array");
	return parsed.map((item) => {
		if (item === "True" || item === "true" || item === true) return true;
		if (item === "False" || item === "false" || item === false) return false;
	}).filter((item) => item !== void 0);
};
var getEditorToggleLabelKey = (type, editInJSON) => {
	if (type === ChatVarType.Object) return editInJSON ? "chatVariable.modal.editInForm" : "chatVariable.modal.editInJSON";
	return editInJSON ? "chatVariable.modal.oneByOne" : "chatVariable.modal.editInJSON";
};
//#endregion
//#region app/components/workflow/panel/chat-variable-panel/components/use-variable-modal-state.ts
var buildObjectValueListFromRecord = (record) => {
	return Object.keys(record).map((key) => ({
		key,
		type: typeof record[key] === "string" ? ChatVarType.String : ChatVarType.Number,
		value: record[key]
	}));
};
var buildInitialState = (chatVar) => {
	if (!chatVar) return {
		description: "",
		editInJSON: false,
		editorContent: void 0,
		name: "",
		objectValue: [DEFAULT_OBJECT_VALUE],
		type: ChatVarType.String,
		value: void 0
	};
	return {
		description: chatVar.description,
		editInJSON: chatVar.value_type === ChatVarType.ArrayObject,
		editorContent: chatVar.value_type === ChatVarType.ArrayObject ? JSON.stringify(chatVar.value) : void 0,
		name: chatVar.name,
		objectValue: buildObjectValueItems(chatVar),
		type: chatVar.value_type,
		value: chatVar.value
	};
};
var useVariableModalState = ({ chatVar, conversationVariables, notify, onClose, onSave, t }) => {
	const [state, setState] = useState(() => buildInitialState(chatVar));
	const editorMinHeight = useMemo(() => getEditorMinHeight(state.type), [state.type]);
	const placeholder = useMemo(() => getPlaceholderByType(state.type), [state.type]);
	const handleVarNameChange = (e) => {
		setState((prev) => ({
			...prev,
			name: e.target.value || ""
		}));
	};
	const handleTypeChange = (nextType) => {
		const nextState = getTypeChangeState(nextType);
		setState((prev) => ({
			...prev,
			editInJSON: nextState.editInJSON,
			editorContent: nextState.editorContent,
			objectValue: nextState.objectValue ?? prev.objectValue,
			type: nextType,
			value: nextState.value
		}));
	};
	const handleStringOrNumberChange = (nextValue) => {
		setState((prev) => ({
			...prev,
			value: nextValue[0]
		}));
	};
	const handleEditorChange = (nextEditInJSON) => {
		setState((prev) => {
			const nextState = {
				...prev,
				editInJSON: nextEditInJSON
			};
			if (prev.type === ChatVarType.Object) {
				if (nextEditInJSON) {
					const nextValue = prev.objectValue.some((item) => item.key) ? formatObjectValueFromList(prev.objectValue) : void 0;
					nextState.value = nextValue;
					nextState.editorContent = JSON.stringify(nextValue);
					return nextState;
				}
				if (!prev.editorContent) {
					nextState.value = void 0;
					nextState.objectValue = [DEFAULT_OBJECT_VALUE];
					return nextState;
				}
				try {
					const nextValue = JSON.parse(prev.editorContent);
					nextState.value = nextValue;
					nextState.objectValue = buildObjectValueListFromRecord(nextValue);
				} catch {}
				return nextState;
			}
			if (prev.type === ChatVarType.ArrayString || prev.type === ChatVarType.ArrayNumber) {
				if (nextEditInJSON) {
					const compactValues = Array.isArray(prev.value) ? prev.value.filter((item) => item !== null && item !== void 0 && item !== "") : [];
					const nextValue = compactValues.length ? compactValues : void 0;
					nextState.value = nextValue;
					if (!prev.editorContent) nextState.editorContent = JSON.stringify(nextValue);
					return nextState;
				}
				nextState.value = Array.isArray(prev.value) && prev.value.length ? prev.value : [void 0];
				return nextState;
			}
			if (prev.type === ChatVarType.ArrayBoolean && Array.isArray(prev.value) && nextEditInJSON) nextState.editorContent = JSON.stringify(prev.value.map((item) => item ? "True" : "False"));
			return nextState;
		});
	};
	const handleEditorValueChange = (content) => {
		setState((prev) => {
			const nextState = {
				...prev,
				editorContent: content
			};
			if (!content) {
				nextState.value = void 0;
				return nextState;
			}
			try {
				nextState.value = parseEditorContent({
					content,
					type: prev.type
				});
			} catch {}
			return nextState;
		});
	};
	const handleSave = () => {
		if (!validateVariableName({
			name: state.name,
			notify,
			t
		})) return;
		if (!chatVar && conversationVariables.some((item) => item.name === state.name)) {
			notify({
				type: "error",
				message: t("varKeyError.keyAlreadyExists", {
					ns: "appDebug",
					key: t("chatVariable.modal.name", { ns: "workflow" })
				})
			});
			return;
		}
		if (state.type === ChatVarType.Object && state.objectValue.some((item) => !item.key && item.value !== void 0 && item.value !== "")) {
			notify({
				type: "error",
				message: t("chatVariable.modal.objectKeyRequired", { ns: "workflow" })
			});
			return;
		}
		onSave({
			description: state.description,
			id: chatVar ? chatVar.id : v4(),
			name: state.name,
			value: formatChatVariableValue({
				editInJSON: state.editInJSON,
				objectValue: state.objectValue,
				type: state.type,
				value: state.value
			}),
			value_type: state.type
		});
		onClose();
	};
	return {
		description: state.description,
		editInJSON: state.editInJSON,
		editorContent: state.editorContent,
		editorMinHeight,
		handleEditorChange,
		handleEditorValueChange,
		handleSave,
		handleStringOrNumberChange,
		handleTypeChange,
		handleVarNameChange,
		name: state.name,
		objectValue: state.objectValue,
		placeholder,
		setDescription: (description) => setState((prev) => ({
			...prev,
			description
		})),
		setObjectValue: (objectValue) => setState((prev) => ({
			...prev,
			objectValue
		})),
		setValue: (value) => setState((prev) => ({
			...prev,
			value
		})),
		type: state.type,
		value: state.value
	};
};
//#endregion
//#region app/components/workflow/panel/chat-variable-panel/components/array-value-list.tsx
var ArrayValueList = ({ isString = true, list, onChange }) => {
	const { t } = useTranslation();
	const handleNameChange = useCallback((index) => {
		return (e) => {
			onChange(produce(list, (draft) => {
				draft[index] = isString ? e.target.value : Number(e.target.value);
			}));
		};
	}, [
		isString,
		list,
		onChange
	]);
	const handleItemRemove = useCallback((index) => {
		return () => {
			onChange(produce(list, (draft) => {
				draft.splice(index, 1);
			}));
		};
	}, [list, onChange]);
	const handleItemAdd = useCallback(() => {
		onChange(produce(list, (draft) => {
			draft.push(void 0);
		}));
	}, [list, onChange]);
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full space-y-2",
		children: [list.map((item, index) => /* @__PURE__ */ jsxs("div", {
			className: "flex items-center space-x-1",
			children: [/* @__PURE__ */ jsx(Input, {
				placeholder: t("chatVariable.modal.arrayValue", { ns: "workflow" }) || "",
				value: list[index],
				onChange: handleNameChange(index),
				type: isString ? "text" : "number"
			}), /* @__PURE__ */ jsx(remove_button_default, {
				className: "!bg-gray-100 !p-2 hover:!bg-gray-200",
				onClick: handleItemRemove(index)
			})]
		}, index)), /* @__PURE__ */ jsxs(Button, {
			variant: "tertiary",
			className: "w-full",
			onClick: handleItemAdd,
			children: [/* @__PURE__ */ jsx(p, { className: "mr-1 h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: t("chatVariable.modal.addArrayValue", { ns: "workflow" }) })]
		})]
	});
};
var array_value_list_default = React$1.memo(ArrayValueList);
//#endregion
//#region app/components/workflow/panel/chat-variable-panel/components/object-value-list.tsx
var ObjectValueList = ({ list, onChange }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full overflow-hidden rounded-lg border border-gray-200",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "system-xs-medium flex h-7 items-center uppercase text-text-tertiary",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex h-full w-[120px] items-center border-r border-gray-200 pl-2",
					children: t("chatVariable.modal.objectKey", { ns: "workflow" })
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex h-full w-[96px] items-center border-r border-gray-200 pl-2",
					children: t("chatVariable.modal.objectType", { ns: "workflow" })
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex h-full w-[230px] items-center pl-2 pr-1",
					children: t("chatVariable.modal.objectValue", { ns: "workflow" })
				})
			]
		}), list.map((item, index) => /* @__PURE__ */ jsx(object_value_item_default, {
			index,
			list,
			onChange
		}, index))]
	});
};
var object_value_list_default = React$1.memo(ObjectValueList);
//#endregion
//#region app/components/workflow/panel/chat-variable-panel/components/variable-modal.sections.tsx
var SectionTitle = ({ children }) => /* @__PURE__ */ jsx("div", {
	className: "mb-1 flex h-6 items-center text-text-secondary system-sm-semibold",
	children
});
var NameSection = ({ name, onBlur, onChange, placeholder, title }) => /* @__PURE__ */ jsxs("div", {
	className: "mb-4",
	children: [/* @__PURE__ */ jsx(SectionTitle, { children: title }), /* @__PURE__ */ jsx("div", {
		className: "flex",
		children: /* @__PURE__ */ jsx(Input, {
			placeholder,
			value: name,
			onChange,
			onBlur: (e) => onBlur(e.target.value),
			type: "text"
		})
	})]
});
var TypeSection = ({ list, onSelect, title, type }) => /* @__PURE__ */ jsxs("div", {
	className: "mb-4",
	children: [/* @__PURE__ */ jsx(SectionTitle, { children: title }), /* @__PURE__ */ jsx("div", {
		className: "flex",
		children: /* @__PURE__ */ jsx(VariableTypeSelector, {
			value: type,
			list,
			onSelect,
			popupClassName: "w-[327px]"
		})
	})]
});
var ValueSection = ({ editorContent, editorMinHeight, editInJSON, objectValue, onArrayBoolChange, onArrayChange, onEditorChange, onEditorValueChange, onObjectChange, onValueChange, placeholder, t, toggleLabelKey, type, value }) => /* @__PURE__ */ jsxs("div", {
	className: "mb-4",
	children: [/* @__PURE__ */ jsxs("div", {
		className: "mb-1 flex h-6 items-center justify-between text-text-secondary system-sm-semibold",
		children: [/* @__PURE__ */ jsx("div", { children: t("chatVariable.modal.value", { ns: "workflow" }) }), toggleLabelKey && /* @__PURE__ */ jsxs(Button, {
			variant: "ghost",
			size: "small",
			className: "text-text-tertiary",
			onClick: () => onEditorChange(!editInJSON),
			children: [editInJSON ? /* @__PURE__ */ jsx(Ib, { className: "mr-1 h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(he, { className: "mr-1 h-3.5 w-3.5" }), t(toggleLabelKey, { ns: "workflow" })]
		})]
	}), /* @__PURE__ */ jsxs("div", {
		className: "flex",
		children: [
			type === ChatVarType.String && /* @__PURE__ */ jsx("textarea", {
				className: "block h-20 w-full resize-none appearance-none rounded-lg border border-transparent bg-components-input-bg-normal p-2 text-components-input-text-filled caret-primary-600 outline-none system-sm-regular placeholder:text-components-input-text-placeholder placeholder:system-sm-regular hover:border-components-input-border-hover hover:bg-components-input-bg-hover focus:border-components-input-border-active focus:bg-components-input-bg-active focus:shadow-xs",
				value: value || "",
				placeholder: t("chatVariable.modal.valuePlaceholder", { ns: "workflow" }) || "",
				onChange: (e) => onArrayChange([e.target.value])
			}),
			type === ChatVarType.Number && /* @__PURE__ */ jsx(Input, {
				placeholder: t("chatVariable.modal.valuePlaceholder", { ns: "workflow" }) || "",
				value,
				onChange: (e) => {
					const rawValue = e.target.value;
					onArrayChange([rawValue === "" ? void 0 : Number(rawValue)]);
				},
				type: "number"
			}),
			type === ChatVarType.Boolean && /* @__PURE__ */ jsx(bool_value_default, {
				value,
				onChange: onValueChange
			}),
			type === ChatVarType.Object && !editInJSON && /* @__PURE__ */ jsx(object_value_list_default, {
				list: objectValue,
				onChange: onObjectChange
			}),
			type === ChatVarType.ArrayString && !editInJSON && /* @__PURE__ */ jsx(array_value_list_default, {
				isString: true,
				list: value || [void 0],
				onChange: onArrayChange
			}),
			type === ChatVarType.ArrayNumber && !editInJSON && /* @__PURE__ */ jsx(array_value_list_default, {
				isString: false,
				list: value || [void 0],
				onChange: onArrayChange
			}),
			type === ChatVarType.ArrayBoolean && !editInJSON && /* @__PURE__ */ jsx(array_bool_list_default, {
				list: value || [true],
				onChange: onArrayBoolChange
			}),
			editInJSON && /* @__PURE__ */ jsx("div", {
				className: "w-full rounded-[10px] bg-components-input-bg-normal py-2 pl-3 pr-1",
				style: { height: editorMinHeight },
				children: /* @__PURE__ */ jsx(code_editor_default, {
					isExpand: true,
					noWrapper: true,
					language: CodeLanguage.json,
					value: editorContent,
					placeholder: /* @__PURE__ */ jsx("div", {
						className: "whitespace-pre",
						children: placeholder
					}),
					onChange: onEditorValueChange
				})
			})
		]
	})]
});
var DescriptionSection = ({ description, onChange, placeholder, title }) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(SectionTitle, { children: title }), /* @__PURE__ */ jsx("div", {
	className: "flex",
	children: /* @__PURE__ */ jsx("textarea", {
		className: "block h-20 w-full resize-none appearance-none rounded-lg border border-transparent bg-components-input-bg-normal p-2 text-components-input-text-filled caret-primary-600 outline-none system-sm-regular placeholder:text-components-input-text-placeholder placeholder:system-sm-regular hover:border-components-input-border-hover hover:bg-components-input-bg-hover focus:border-components-input-border-active focus:bg-components-input-bg-active focus:shadow-xs",
		value: description,
		placeholder,
		onChange: (e) => onChange(e.target.value)
	})
})] });
//#endregion
//#region app/components/workflow/panel/chat-variable-panel/components/variable-modal.tsx
var ChatVariableModal = ({ chatVar, onClose, onSave }) => {
	const { t } = useTranslation();
	const workflowStore = useWorkflowStore();
	const notify = React$1.useCallback(({ children, message, type = "info" }) => {
		toast[type](message, children ? { description: children } : void 0);
	}, []);
	const { description, editInJSON, editorContent, editorMinHeight, handleEditorChange, handleEditorValueChange, handleSave, handleStringOrNumberChange, handleTypeChange, handleVarNameChange, name, objectValue, placeholder, setDescription, setObjectValue, setValue, type, value } = useVariableModalState({
		chatVar,
		conversationVariables: workflowStore.getState().conversationVariables,
		notify,
		onClose,
		onSave,
		t
	});
	const handleNameChange = (e) => {
		replaceSpaceWithUnderscoreInVarNameInput(e.target);
		if (e.target.value && !validateVariableName({
			name: e.target.value,
			notify,
			t
		})) return;
		handleVarNameChange(e);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-full w-[360px] flex-col rounded-2xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-2xl", type === ChatVarType.Object && "w-[480px]"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mb-3 flex shrink-0 items-center justify-between p-4 pb-0 text-text-primary system-xl-semibold",
				children: [!chatVar ? t("chatVariable.modal.title", { ns: "workflow" }) : t("chatVariable.modal.editTitle", { ns: "workflow" }), /* @__PURE__ */ jsx("div", {
					className: "flex items-center",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex h-6 w-6 cursor-pointer items-center justify-center",
						onClick: onClose,
						children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-text-tertiary" })
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "max-h-[480px] overflow-y-auto px-4 py-2",
				children: [
					/* @__PURE__ */ jsx(NameSection, {
						name,
						onBlur: (nextName) => validateVariableName({
							name: nextName,
							notify,
							t
						}),
						onChange: handleNameChange,
						placeholder: t("chatVariable.modal.namePlaceholder", { ns: "workflow" }) || "",
						title: t("chatVariable.modal.name", { ns: "workflow" })
					}),
					/* @__PURE__ */ jsx(TypeSection, {
						type,
						list: typeList,
						onSelect: handleTypeChange,
						title: t("chatVariable.modal.type", { ns: "workflow" })
					}),
					/* @__PURE__ */ jsx(ValueSection, {
						type,
						value,
						objectValue,
						editInJSON,
						editorContent,
						editorMinHeight,
						onArrayBoolChange: setValue,
						onArrayChange: type === ChatVarType.String || type === ChatVarType.Number ? handleStringOrNumberChange : setValue,
						onEditorChange: handleEditorChange,
						onEditorValueChange: handleEditorValueChange,
						onObjectChange: setObjectValue,
						onValueChange: setValue,
						placeholder,
						t,
						toggleLabelKey: type === ChatVarType.Object || type === ChatVarType.ArrayString || type === ChatVarType.ArrayNumber || type === ChatVarType.ArrayBoolean ? getEditorToggleLabelKey(type, editInJSON) : void 0
					}),
					/* @__PURE__ */ jsx(DescriptionSection, {
						description,
						onChange: setDescription,
						placeholder: t("chatVariable.modal.descriptionPlaceholder", { ns: "workflow" }) || "",
						title: t("chatVariable.modal.description", { ns: "workflow" })
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-row-reverse rounded-b-2xl p-4 pt-2",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ jsx(Button, {
						onClick: onClose,
						children: t("operation.cancel", { ns: "common" })
					}), /* @__PURE__ */ jsx(Button, {
						variant: "primary",
						onClick: handleSave,
						children: t("operation.save", { ns: "common" })
					})]
				})
			})
		]
	});
};
//#endregion
//#region app/components/workflow/panel/chat-variable-panel/components/variable-modal-trigger.tsx
var VariableModalTrigger = ({ open, setOpen, showTip, chatVar, onClose, onSave }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: () => {
			setOpen((v) => !v);
			if (open) onClose();
		},
		placement: "left-start",
		offset: {
			mainAxis: 8,
			alignmentAxis: showTip ? -278 : -48
		},
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => {
				setOpen((v) => !v);
				if (open) onClose();
			},
			children: /* @__PURE__ */ jsxs(Button, {
				variant: "primary",
				children: [/* @__PURE__ */ jsx(p, { className: "mr-1 h-4 w-4" }), /* @__PURE__ */ jsx("span", {
					className: "system-sm-medium",
					children: t("chatVariable.button", { ns: "workflow" })
				})]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[11]",
			children: /* @__PURE__ */ jsx(ChatVariableModal, {
				chatVar,
				onSave,
				onClose: () => {
					onClose();
					setOpen(false);
				}
			})
		})]
	});
};
//#endregion
//#region app/components/workflow/panel/chat-variable-panel/index.tsx
var ChatVariablePanel = () => {
	const { t } = useTranslation();
	const store = useStoreApi();
	const setShowChatVariablePanel = useStore((s) => s.setShowChatVariablePanel);
	const varList = useStore((s) => s.conversationVariables);
	const updateChatVarList = useStore((s) => s.setConversationVariables);
	const { doSyncWorkflowDraft } = useNodesSyncDraft();
	const { invalidateConversationVarValues } = useInspectVarsCrud();
	const handleVarChanged = useCallback(() => {
		doSyncWorkflowDraft(false, { onSuccess() {
			invalidateConversationVarValues();
		} });
	}, [doSyncWorkflowDraft, invalidateConversationVarValues]);
	const [showTip, setShowTip] = useState(true);
	const [showVariableModal, setShowVariableModal] = useState(false);
	const [currentVar, setCurrentVar] = useState();
	const [showRemoveVarConfirm, setShowRemoveConfirm] = useState(false);
	const [cacheForDelete, setCacheForDelete] = useState();
	const getEffectedNodes = useCallback((chatVar) => {
		const { getNodes } = store.getState();
		const allNodes = getNodes();
		return findUsedVarNodes(["conversation", chatVar.name], allNodes);
	}, [store]);
	const removeUsedVarInNodes = useCallback((chatVar) => {
		const { getNodes, setNodes } = store.getState();
		const effectedNodes = getEffectedNodes(chatVar);
		setNodes(getNodes().map((node) => {
			if (effectedNodes.find((n) => n.id === node.id)) return updateNodeVars(node, ["conversation", chatVar.name], []);
			return node;
		}));
	}, [getEffectedNodes, store]);
	const handleEdit = (chatVar) => {
		setCurrentVar(chatVar);
		setShowVariableModal(true);
	};
	const handleDelete = useCallback((chatVar) => {
		removeUsedVarInNodes(chatVar);
		updateChatVarList(varList.filter((v) => v.id !== chatVar.id));
		setCacheForDelete(void 0);
		setShowRemoveConfirm(false);
		handleVarChanged();
	}, [
		handleVarChanged,
		removeUsedVarInNodes,
		updateChatVarList,
		varList
	]);
	const deleteCheck = useCallback((chatVar) => {
		if (getEffectedNodes(chatVar).length > 0) {
			setCacheForDelete(chatVar);
			setShowRemoveConfirm(true);
		} else handleDelete(chatVar);
	}, [getEffectedNodes, handleDelete]);
	const handleSave = useCallback(async (chatVar) => {
		if (!currentVar) {
			updateChatVarList([chatVar, ...varList]);
			handleVarChanged();
			return;
		}
		updateChatVarList(varList.map((v) => v.id === currentVar.id ? chatVar : v));
		if (currentVar.name !== chatVar.name) {
			const { getNodes, setNodes } = store.getState();
			const effectedNodes = getEffectedNodes(currentVar);
			setNodes(getNodes().map((node) => {
				if (effectedNodes.find((n) => n.id === node.id)) return updateNodeVars(node, ["conversation", currentVar.name], ["conversation", chatVar.name]);
				return node;
			}));
		}
		handleVarChanged();
	}, [
		currentVar,
		getEffectedNodes,
		handleVarChanged,
		store,
		updateChatVarList,
		varList
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative flex h-full w-[420px] flex-col rounded-l-2xl border border-components-panel-border bg-components-panel-bg-alt"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "system-xl-semibold flex shrink-0 items-center justify-between p-4 pb-0 text-text-primary",
				children: [t("chatVariable.panelTitle", { ns: "workflow" }), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ jsx(ActionButton, {
						state: showTip ? ActionButtonState.Active : void 0,
						onClick: () => setShowTip(!showTip),
						children: /* @__PURE__ */ jsx(c4, { className: "h-4 w-4" })
					}), /* @__PURE__ */ jsx("div", {
						className: "flex h-6 w-6 cursor-pointer items-center justify-center",
						onClick: () => setShowChatVariablePanel(false),
						children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-text-tertiary" })
					})]
				})]
			}),
			showTip && /* @__PURE__ */ jsx("div", {
				className: "shrink-0 px-3 pb-2 pt-2.5",
				children: /* @__PURE__ */ jsxs("div", {
					className: "radius-2xl relative bg-background-section-burn p-3",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "system-2xs-medium-uppercase inline-block rounded-[5px] border border-divider-deep px-[5px] py-[3px] text-text-tertiary",
							children: "TIPS"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "system-sm-regular mb-4 mt-1 text-text-secondary",
							children: t("chatVariable.panelDescription", { ns: "workflow" })
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "radius-lg flex flex-col border border-workflow-block-border bg-workflow-block-bg p-3 pb-4 shadow-md",
								children: [
									/* @__PURE__ */ jsx(Icon, { className: "mb-1 h-4 w-4 shrink-0 text-util-colors-teal-teal-700" }),
									/* @__PURE__ */ jsx("div", {
										className: "system-xs-semibold text-text-secondary",
										children: "conversation_var"
									}),
									/* @__PURE__ */ jsx("div", {
										className: "system-2xs-regular text-text-tertiary",
										children: "String"
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "grow",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "mb-2 flex items-center gap-2 py-1",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex h-3 w-16 shrink-0 items-center gap-1 px-1",
											children: [/* @__PURE__ */ jsx(Icon$1, { className: "h-2 grow text-text-quaternary" }), /* @__PURE__ */ jsx("div", {
												className: "system-2xs-medium shrink-0 text-text-tertiary",
												children: "WRITE"
											})]
										}),
										/* @__PURE__ */ jsx(block_icon_default, {
											className: "shrink-0",
											type: BlockEnum.Assigner
										}),
										/* @__PURE__ */ jsx("div", {
											className: "system-xs-semibold grow truncate text-text-secondary",
											children: t("blocks.assigner", { ns: "workflow" })
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 py-1",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex h-3 w-16 shrink-0 items-center gap-1 px-1",
											children: [/* @__PURE__ */ jsx("div", {
												className: "system-2xs-medium shrink-0 text-text-tertiary",
												children: "READ"
											}), /* @__PURE__ */ jsx(Icon$2, { className: "h-2 grow text-text-quaternary" })]
										}),
										/* @__PURE__ */ jsx(block_icon_default, {
											className: "shrink-0",
											type: BlockEnum.LLM
										}),
										/* @__PURE__ */ jsx("div", {
											className: "system-xs-semibold grow truncate text-text-secondary",
											children: t("blocks.llm", { ns: "workflow" })
										})
									]
								})]
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute right-[38px] top-[-4px] z-10 h-3 w-3 rotate-45 bg-background-section-burn" })
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "shrink-0 px-4 pb-3 pt-2",
				children: /* @__PURE__ */ jsx(VariableModalTrigger, {
					open: showVariableModal,
					setOpen: setShowVariableModal,
					showTip,
					chatVar: currentVar,
					onSave: handleSave,
					onClose: () => setCurrentVar(void 0)
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grow overflow-y-auto rounded-b-2xl px-4",
				children: varList.map((chatVar) => /* @__PURE__ */ jsx(variable_item_default, {
					item: chatVar,
					onEdit: handleEdit,
					onDelete: deleteCheck
				}, chatVar.id))
			}),
			/* @__PURE__ */ jsx(remove_effect_var_confirm_default, {
				isShow: showRemoveVarConfirm,
				onCancel: () => setShowRemoveConfirm(false),
				onConfirm: () => cacheForDelete && handleDelete(cacheForDelete)
			})
		]
	});
};
var chat_variable_panel_default = memo(ChatVariablePanel);
//#endregion
export { chat_variable_panel_default as default };
