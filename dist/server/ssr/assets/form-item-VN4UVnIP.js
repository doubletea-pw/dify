import { ct as M6 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { n as useBoolean } from "./tooltip-ZeeerRdq.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { Lt as SupportUploadFileTypes, Nt as InputVarType, Ot as BlockEnum } from "./config-Dopncj5R.js";
import { Rr as VarBlockIcon, ir as produce, nr as useHooksStore } from "./hooks-Bj_4KA1b.js";
import { t as Input } from "./input-BOHL-qYi.js";
import { r as select_default } from "./select-C87OPWpf.js";
import { c as Resolution, u as TransferMethod } from "./app-DPjSIfgb.js";
import { f as FILE_EXTS } from "./var-DPpHtpXT.js";
import { a as Icon } from "./common-fiYzNZ23.js";
import { t as Textarea } from "./textarea-Ngtow1st.js";
import { n as base_default, t as code_editor_default } from "./code-editor-BPvpmrXg.js";
import { t as CodeLanguage } from "./types-C18Ag7fa.js";
import { v as Icon$1 } from "./var-reference-picker-PlAsXjUc.js";
import { s as Icon$2 } from "./others-CYlDNVYO.js";
import { i as FileUploaderInAttachmentWrapper } from "./file-uploader-DuOqY7O5.js";
import { i as TextGenerationImageUploader, r as bool_input_default } from "./utils-x6-EORb9.js";
import * as React$1 from "react";
import { useCallback, useMemo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow/nodes/_base/components/editor/text-editor.tsx
var TextEditor = ({ value, onChange, title, headerRight, minHeight, onBlur, placeholder, readonly, isInNode }) => {
	const [isFocus, { setTrue: setIsFocus, setFalse: setIsNotFocus }] = useBoolean(false);
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(base_default, {
		title,
		value,
		headerRight,
		isFocus,
		minHeight,
		isInNode,
		children: /* @__PURE__ */ jsx("textarea", {
			value,
			onChange: (e) => onChange(e.target.value),
			onFocus: setIsFocus,
			onBlur: useCallback(() => {
				setIsNotFocus();
				onBlur?.();
			}, [setIsNotFocus, onBlur]),
			className: "h-full w-full resize-none border-none bg-transparent px-3 text-[13px] font-normal leading-[18px] text-gray-900 placeholder:text-gray-300 focus:outline-none",
			placeholder,
			readOnly: readonly
		})
	}) });
};
var text_editor_default = React$1.memo(TextEditor);
//#endregion
//#region app/components/workflow/nodes/_base/components/before-run-form/form-item.tsx
var FormItem = ({ payload, value, onChange, className, autoFocus, inStepRun = false }) => {
	const { t } = useTranslation();
	const { type } = payload;
	const fileSettings = useHooksStore((s) => s.configsMap?.fileSettings);
	const jsonSchemaPlaceholder = React$1.useMemo(() => {
		const schema = payload?.json_schema;
		if (!schema) return "";
		return typeof schema === "string" ? schema : JSON.stringify(schema, null, 2);
	}, [payload]);
	const handleArrayItemChange = useCallback((index) => {
		return (newValue) => {
			onChange(produce(value, (draft) => {
				draft[index] = newValue;
			}));
		};
	}, [value, onChange]);
	const handleArrayItemRemove = useCallback((index) => {
		return () => {
			onChange(produce(value, (draft) => {
				draft.splice(index, 1);
			}));
		};
	}, [value, onChange]);
	const nodeKey = (() => {
		if (typeof payload.label === "object") {
			const { nodeType, nodeName, variable, isChatVar } = payload.label;
			return /* @__PURE__ */ jsxs("div", {
				className: "flex h-full items-center",
				children: [!isChatVar && /* @__PURE__ */ jsxs("div", {
					className: "flex items-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "p-[1px]",
							children: /* @__PURE__ */ jsx(VarBlockIcon, { type: nodeType || BlockEnum.Start })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mx-0.5 max-w-[150px] truncate text-xs font-medium text-text-secondary",
							title: nodeName,
							children: nodeName
						}),
						/* @__PURE__ */ jsx(Icon, { className: "mr-0.5" })
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center text-primary-600",
					children: [
						!isChatVar && /* @__PURE__ */ jsx(Icon$1, { className: "h-3.5 w-3.5" }),
						isChatVar && /* @__PURE__ */ jsx(Icon$2, { className: "h-3.5 w-3.5 text-util-colors-teal-teal-700" }),
						/* @__PURE__ */ jsx("div", {
							className: cn("ml-0.5 max-w-[150px] truncate text-xs font-medium", isChatVar && "text-text-secondary"),
							title: variable,
							children: variable
						})
					]
				})]
			});
		}
		return "";
	})();
	const isBooleanType = type === InputVarType.checkbox;
	const isArrayLikeType = [InputVarType.contexts, InputVarType.iterator].includes(type);
	const isContext = type === InputVarType.contexts;
	const isIterator = type === InputVarType.iterator;
	const isIteratorItemFile = isIterator && payload.isFileItem;
	const singleFileValue = useMemo(() => {
		if (payload.variable === "#files#") return value || [];
		return value ? [value] : [];
	}, [payload.variable, value]);
	const handleSingleFileChange = useCallback((files) => {
		if (payload.variable === "#files#") onChange(files);
		else if (files.length) onChange(files[0]);
		else onChange(null);
	}, [onChange, payload.variable]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn(className),
		children: [!isArrayLikeType && !isBooleanType && /* @__PURE__ */ jsxs("div", {
			className: "mb-1 flex h-6 items-center gap-1 text-text-secondary system-sm-semibold",
			children: [/* @__PURE__ */ jsx("div", {
				className: "truncate",
				children: typeof payload.label === "object" ? nodeKey : payload.label
			}), payload.hide === true ? /* @__PURE__ */ jsx("span", {
				className: "text-text-tertiary system-xs-regular",
				children: t("panel.optional_and_hidden", { ns: "workflow" })
			}) : !payload.required && /* @__PURE__ */ jsx("span", {
				className: "text-text-tertiary system-xs-regular",
				children: t("panel.optional", { ns: "workflow" })
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grow",
			children: [
				type === InputVarType.textInput && /* @__PURE__ */ jsx(Input, {
					value: value || "",
					onChange: (e) => onChange(e.target.value),
					placeholder: typeof payload.label === "object" ? payload.label.variable : payload.label,
					autoFocus
				}),
				type === InputVarType.number && /* @__PURE__ */ jsx(Input, {
					type: "number",
					value: value || "",
					onChange: (e) => onChange(e.target.value),
					placeholder: typeof payload.label === "object" ? payload.label.variable : payload.label,
					autoFocus
				}),
				type === InputVarType.paragraph && /* @__PURE__ */ jsx(Textarea, {
					value: value || "",
					onChange: (e) => onChange(e.target.value),
					placeholder: typeof payload.label === "object" ? payload.label.variable : payload.label,
					autoFocus
				}),
				type === InputVarType.select && /* @__PURE__ */ jsx(select_default, {
					className: "w-full",
					defaultValue: value || payload.default || "",
					items: payload.options?.map((option) => ({
						name: option,
						value: option
					})) || [],
					onSelect: (i) => onChange(i.value),
					allowSearch: false
				}),
				isBooleanType && /* @__PURE__ */ jsx(bool_input_default, {
					name: payload.label,
					value: !!value,
					required: payload.required,
					onChange
				}),
				type === InputVarType.json && /* @__PURE__ */ jsx(code_editor_default, {
					value,
					title: /* @__PURE__ */ jsx("span", { children: "JSON" }),
					language: CodeLanguage.json,
					onChange
				}),
				type === InputVarType.jsonObject && /* @__PURE__ */ jsx(code_editor_default, {
					value,
					language: CodeLanguage.json,
					onChange,
					noWrapper: true,
					className: "bg h-[80px] overflow-y-auto rounded-[10px] bg-components-input-bg-normal p-1",
					placeholder: /* @__PURE__ */ jsx("div", {
						className: "whitespace-pre",
						children: jsonSchemaPlaceholder
					})
				}),
				type === InputVarType.singleFile && /* @__PURE__ */ jsx(FileUploaderInAttachmentWrapper, {
					value: singleFileValue,
					onChange: handleSingleFileChange,
					fileConfig: {
						allowed_file_types: inStepRun && (!payload.allowed_file_types || payload.allowed_file_types.length === 0) ? [
							SupportUploadFileTypes.image,
							SupportUploadFileTypes.document,
							SupportUploadFileTypes.audio,
							SupportUploadFileTypes.video
						] : payload.allowed_file_types,
						allowed_file_extensions: inStepRun && (!payload.allowed_file_extensions || payload.allowed_file_extensions.length === 0) ? [
							...FILE_EXTS[SupportUploadFileTypes.image],
							...FILE_EXTS[SupportUploadFileTypes.document],
							...FILE_EXTS[SupportUploadFileTypes.audio],
							...FILE_EXTS[SupportUploadFileTypes.video]
						] : payload.allowed_file_extensions,
						allowed_file_upload_methods: inStepRun ? [TransferMethod.local_file, TransferMethod.remote_url] : payload.allowed_file_upload_methods,
						number_limits: 1,
						fileUploadConfig: fileSettings?.fileUploadConfig
					}
				}),
				(type === InputVarType.multiFiles || isIteratorItemFile) && /* @__PURE__ */ jsx(FileUploaderInAttachmentWrapper, {
					value,
					onChange: (files) => onChange(files),
					fileConfig: {
						allowed_file_types: (inStepRun || isIteratorItemFile) && (!payload.allowed_file_types || payload.allowed_file_types.length === 0) ? [
							SupportUploadFileTypes.image,
							SupportUploadFileTypes.document,
							SupportUploadFileTypes.audio,
							SupportUploadFileTypes.video
						] : payload.allowed_file_types,
						allowed_file_extensions: (inStepRun || isIteratorItemFile) && (!payload.allowed_file_extensions || payload.allowed_file_extensions.length === 0) ? [
							...FILE_EXTS[SupportUploadFileTypes.image],
							...FILE_EXTS[SupportUploadFileTypes.document],
							...FILE_EXTS[SupportUploadFileTypes.audio],
							...FILE_EXTS[SupportUploadFileTypes.video]
						] : payload.allowed_file_extensions,
						allowed_file_upload_methods: inStepRun || isIteratorItemFile ? [TransferMethod.local_file, TransferMethod.remote_url] : payload.allowed_file_upload_methods,
						number_limits: inStepRun || isIteratorItemFile ? 5 : payload.max_length,
						fileUploadConfig: fileSettings?.fileUploadConfig
					}
				}),
				type === InputVarType.files && /* @__PURE__ */ jsx(TextGenerationImageUploader, {
					settings: {
						...fileSettings,
						detail: fileSettings?.image?.detail || Resolution.high,
						transfer_methods: fileSettings?.allowed_file_upload_methods || []
					},
					onFilesChange: (files) => onChange(files.filter((file) => file.progress !== -1).map((fileItem) => ({
						type: "image",
						transfer_method: fileItem.type,
						url: fileItem.url,
						upload_file_id: fileItem.fileId
					})))
				}),
				isContext && /* @__PURE__ */ jsx("div", {
					className: "space-y-2",
					children: (value || []).map((item, index) => /* @__PURE__ */ jsx(code_editor_default, {
						value: item,
						title: /* @__PURE__ */ jsx("span", { children: "JSON" }),
						headerRight: value.length > 1 ? /* @__PURE__ */ jsx(M6, {
							onClick: handleArrayItemRemove(index),
							className: "mr-1 h-3.5 w-3.5 cursor-pointer text-text-tertiary"
						}) : void 0,
						language: CodeLanguage.json,
						onChange: handleArrayItemChange(index)
					}, index))
				}),
				isIterator && !isIteratorItemFile && /* @__PURE__ */ jsx("div", {
					className: "space-y-2",
					children: (value || []).map((item, index) => /* @__PURE__ */ jsx(text_editor_default, {
						isInNode: true,
						value: item,
						title: /* @__PURE__ */ jsxs("span", { children: [
							t("variableConfig.content", { ns: "appDebug" }),
							" ",
							index + 1,
							" "
						] }),
						onChange: handleArrayItemChange(index),
						headerRight: value.length > 1 ? /* @__PURE__ */ jsx(M6, {
							onClick: handleArrayItemRemove(index),
							className: "mr-1 h-3.5 w-3.5 cursor-pointer text-text-tertiary"
						}) : void 0
					}, index))
				})
			]
		})]
	});
};
var form_item_default = React$1.memo(FormItem);
//#endregion
export { form_item_default as t };
