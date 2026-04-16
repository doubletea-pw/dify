import { xt as P7, zr as r2 } from "./react-D5xHzNYo.js";
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
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as Divider } from "./divider-DZD56ykp.js";
import { Mt as DEFAULT_FILE_UPLOAD_SETTING } from "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import { G as VAR_ITEM_TEMPLATE_IN_PIPELINE, St as object, _t as boolean, at as PipelineInputVarType, gt as array, kt as ChangeType, pt as _enum, wt as string, xt as number } from "./config-Dopncj5R.js";
import "./hooks-Bj_4KA1b.js";
import "./i18n-config-jsJ9YUFd.js";
import "./base-BuKAg6Le.js";
import "./src-BByrOQhU.js";
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
import "./dayjs.min-CNlMkMP6.js";
import { t as Toast } from "./toast-BY3OifkP.js";
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
import { t as formatFileSize } from "./format-BCVnrx09.js";
import "./general-C8w9hIeL.js";
import "./pipeline-EQygYMXw.js";
import "./hooks-BTelimHS.js";
import { s as useFileUploadConfig } from "./use-common-BJ1aZaXJ.js";
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
import { i as useStore } from "./pure-Dr1CeacW.js";
import { i as InputTypeEnum, n as useAppForm, r as withForm } from "./form-D-kYI7ic.js";
import "./utils-Dh7W533Q.js";
import "./tag-input-9kTFEfAj.js";
import "./dist-DV9-MooO2.js";
import "./image-preview-D0J1Go0B.js";
import "./arrows-fbeBWnky.js";
import "./var-reference-picker-PlAsXjUc.js";
import "./others-CYlDNVYO.js";
import "./Warning-BiM5Lre1.js";
import { o as useFileSizeLimit } from "./file-uploader-DuOqY7O5.js";
import "./input-number-with-slider-CP7hkeZs.js";
import "./dist-BcmQ9DaV.js";
import "./config-select-BdPKxz_Z.js";
import "./option-card-ChUs8MBx.js";
import { t as useFloatingRight } from "./hooks-Dn_sKEJk.js";
import { useCallback, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/form/form-scenarios/input-field/types.ts
var InputFieldType = /* @__PURE__ */ function(InputFieldType) {
	InputFieldType["textInput"] = "textInput";
	InputFieldType["numberInput"] = "numberInput";
	InputFieldType["numberSlider"] = "numberSlider";
	InputFieldType["checkbox"] = "checkbox";
	InputFieldType["options"] = "options";
	InputFieldType["select"] = "select";
	InputFieldType["inputTypeSelect"] = "inputTypeSelect";
	InputFieldType["uploadMethod"] = "uploadMethod";
	InputFieldType["fileTypes"] = "fileTypes";
	return InputFieldType;
}({});
//#endregion
//#region app/components/base/form/form-scenarios/input-field/field.tsx
var InputField = ({ initialData, config }) => withForm({
	defaultValues: initialData,
	render: function Render({ form }) {
		const { type, label, placeholder, variable, tooltip, showConditions, max, min, required, showOptional, supportFile, description, options, listeners, popupProps } = config;
		if (!useStore(form.store, (state) => {
			const fieldValues = state.values;
			return showConditions.every((condition) => {
				const { variable, value } = condition;
				return fieldValues[variable] === value;
			});
		})) return /* @__PURE__ */ jsx(Fragment$1, {});
		if (type === InputFieldType.textInput) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			listeners,
			children: (field) => /* @__PURE__ */ jsx(field.TextField, {
				label,
				labelOptions: {
					tooltip,
					isRequired: required,
					showOptional
				},
				placeholder
			})
		});
		if (type === InputFieldType.numberInput) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			children: (field) => /* @__PURE__ */ jsx(field.NumberInputField, {
				label,
				labelOptions: {
					tooltip,
					isRequired: required,
					showOptional
				},
				placeholder,
				max,
				min
			})
		});
		if (type === InputFieldType.numberSlider) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			children: (field) => /* @__PURE__ */ jsx(field.NumberSliderField, {
				label,
				labelOptions: {
					tooltip,
					isRequired: required,
					showOptional
				},
				description,
				max,
				min
			})
		});
		if (type === InputFieldType.checkbox) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			children: (field) => /* @__PURE__ */ jsx(field.CheckboxField, { label })
		});
		if (type === InputFieldType.select) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			children: (field) => /* @__PURE__ */ jsx(field.SelectField, {
				label,
				labelOptions: {
					tooltip,
					isRequired: required,
					showOptional
				},
				options,
				popupProps
			})
		});
		if (type === InputFieldType.inputTypeSelect) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			listeners,
			children: (field) => /* @__PURE__ */ jsx(field.InputTypeSelectField, {
				label,
				labelOptions: {
					tooltip,
					isRequired: required,
					showOptional
				},
				supportFile: !!supportFile
			})
		});
		if (type === InputFieldType.uploadMethod) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			children: (field) => /* @__PURE__ */ jsx(field.UploadMethodField, {
				label,
				labelOptions: {
					tooltip,
					isRequired: required,
					showOptional
				}
			})
		});
		if (type === InputFieldType.fileTypes) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			children: (field) => /* @__PURE__ */ jsx(field.FileTypesField, {
				label,
				labelOptions: {
					tooltip,
					isRequired: required,
					showOptional
				}
			})
		});
		if (type === InputFieldType.options) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			children: (field) => /* @__PURE__ */ jsx(field.OptionsField, {
				label,
				labelOptions: {
					tooltip,
					isRequired: required,
					showOptional
				}
			})
		});
		return /* @__PURE__ */ jsx(Fragment$1, {});
	}
});
var TransferMethod = _enum([
	"all",
	"local_file",
	"remote_url"
]);
var SupportedFileTypes = _enum([
	"image",
	"document",
	"video",
	"audio",
	"custom"
]);
var createInputFieldSchema = (type, t, options) => {
	const { maxFileUploadLimit } = options;
	const commonSchema = object({
		type: InputTypeEnum,
		variable: string().nonempty({ message: t("varKeyError.canNoBeEmpty", {
			ns: "appDebug",
			key: t("variableConfig.varName", { ns: "appDebug" })
		}) }).max(30, { message: t("varKeyError.tooLong", {
			ns: "appDebug",
			key: t("variableConfig.varName", { ns: "appDebug" })
		}) }).regex(/^(?!\d)\w+/, { message: t("varKeyError.notStartWithNumber", {
			ns: "appDebug",
			key: t("variableConfig.varName", { ns: "appDebug" })
		}) }).regex(/^[a-z_]\w{0,29}$/i, { message: t("varKeyError.notValid", {
			ns: "appDebug",
			key: t("variableConfig.varName", { ns: "appDebug" })
		}) }),
		label: string().nonempty({ message: t("variableConfig.errorMsg.labelNameRequired", { ns: "appDebug" }) }),
		required: boolean(),
		tooltips: string().optional()
	});
	if (type === PipelineInputVarType.textInput || type === PipelineInputVarType.paragraph) return object({
		maxLength: number().min(1).max(256),
		default: string().optional()
	}).merge(commonSchema).passthrough();
	if (type === PipelineInputVarType.number) return object({
		default: number().optional(),
		unit: string().optional(),
		placeholder: string().optional()
	}).merge(commonSchema).passthrough();
	if (type === PipelineInputVarType.select) return object({
		options: array(string()).nonempty({ message: t("variableConfig.errorMsg.atLeastOneOption", { ns: "appDebug" }) }).refine((arr) => new Set(arr).size === arr.length, { message: t("variableConfig.errorMsg.optionRepeat", { ns: "appDebug" }) }),
		default: string().optional()
	}).merge(commonSchema).passthrough();
	if (type === PipelineInputVarType.singleFile) return object({
		allowedFileUploadMethods: array(TransferMethod),
		allowedTypesAndExtensions: object({
			allowedFileExtensions: array(string()).optional(),
			allowedFileTypes: array(SupportedFileTypes)
		})
	}).merge(commonSchema).passthrough();
	if (type === PipelineInputVarType.multiFiles) return object({
		allowedFileUploadMethods: array(TransferMethod),
		allowedTypesAndExtensions: object({
			allowedFileExtensions: array(string()).optional(),
			allowedFileTypes: array(SupportedFileTypes)
		}),
		maxLength: number().min(1).max(maxFileUploadLimit)
	}).merge(commonSchema).passthrough();
	return commonSchema.passthrough();
};
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/editor/form/hooks.ts
var useHiddenFieldNames = (type) => {
	const { t } = useTranslation();
	return useMemo(() => {
		let fieldNames = [];
		switch (type) {
			case PipelineInputVarType.textInput:
			case PipelineInputVarType.paragraph:
				fieldNames = [
					t("variableConfig.defaultValue", { ns: "appDebug" }),
					t("variableConfig.placeholder", { ns: "appDebug" }),
					t("variableConfig.tooltips", { ns: "appDebug" })
				];
				break;
			case PipelineInputVarType.number:
				fieldNames = [
					t("variableConfig.defaultValue", { ns: "appDebug" }),
					t("variableConfig.unit", { ns: "appDebug" }),
					t("variableConfig.placeholder", { ns: "appDebug" }),
					t("variableConfig.tooltips", { ns: "appDebug" })
				];
				break;
			case PipelineInputVarType.select:
				fieldNames = [t("variableConfig.defaultValue", { ns: "appDebug" }), t("variableConfig.tooltips", { ns: "appDebug" })];
				break;
			case PipelineInputVarType.singleFile:
				fieldNames = [t("variableConfig.uploadMethod", { ns: "appDebug" }), t("variableConfig.tooltips", { ns: "appDebug" })];
				break;
			case PipelineInputVarType.multiFiles:
				fieldNames = [
					t("variableConfig.uploadMethod", { ns: "appDebug" }),
					t("variableConfig.maxNumberOfUploads", { ns: "appDebug" }),
					t("variableConfig.tooltips", { ns: "appDebug" })
				];
				break;
			case PipelineInputVarType.checkbox:
				fieldNames = [t("variableConfig.startChecked", { ns: "appDebug" }), t("variableConfig.tooltips", { ns: "appDebug" })];
				break;
			default: fieldNames = [t("variableConfig.tooltips", { ns: "appDebug" })];
		}
		return fieldNames.map((name) => name.toLowerCase()).join(", ");
	}, [type, t]);
};
var useConfigurations = (props) => {
	const { t } = useTranslation();
	const { getFieldValue, setFieldValue, supportFile } = props;
	const handleTypeChange = useCallback((type) => {
		if ([PipelineInputVarType.singleFile, PipelineInputVarType.multiFiles].includes(type)) {
			setFieldValue("allowedFileUploadMethods", DEFAULT_FILE_UPLOAD_SETTING.allowed_file_upload_methods);
			setFieldValue("allowedTypesAndExtensions", {
				allowedFileTypes: DEFAULT_FILE_UPLOAD_SETTING.allowed_file_types,
				allowedFileExtensions: DEFAULT_FILE_UPLOAD_SETTING.allowed_file_extensions
			});
			if (type === PipelineInputVarType.multiFiles) setFieldValue("maxLength", DEFAULT_FILE_UPLOAD_SETTING.max_length);
		}
	}, [setFieldValue]);
	const handleVariableNameBlur = useCallback((value) => {
		const label = getFieldValue("label");
		if (!value || label) return;
		setFieldValue("label", value);
	}, [getFieldValue, setFieldValue]);
	const handleDisplayNameBlur = useCallback((value) => {
		if (!value) setFieldValue("label", getFieldValue("variable"));
	}, [getFieldValue, setFieldValue]);
	return useMemo(() => {
		return [
			{
				type: InputFieldType.inputTypeSelect,
				label: t("variableConfig.fieldType", { ns: "appDebug" }),
				variable: "type",
				required: true,
				showConditions: [],
				listeners: { onChange: ({ value }) => handleTypeChange(value) },
				supportFile
			},
			{
				type: InputFieldType.textInput,
				label: t("variableConfig.varName", { ns: "appDebug" }),
				variable: "variable",
				placeholder: t("variableConfig.inputPlaceholder", { ns: "appDebug" }),
				required: true,
				listeners: { onBlur: ({ value }) => handleVariableNameBlur(value) },
				showConditions: []
			},
			{
				type: InputFieldType.textInput,
				label: t("variableConfig.displayName", { ns: "appDebug" }),
				variable: "label",
				placeholder: t("variableConfig.inputPlaceholder", { ns: "appDebug" }),
				required: false,
				listeners: { onBlur: ({ value }) => handleDisplayNameBlur(value) },
				showConditions: []
			},
			{
				type: InputFieldType.numberInput,
				label: t("variableConfig.maxLength", { ns: "appDebug" }),
				variable: "maxLength",
				placeholder: t("variableConfig.inputPlaceholder", { ns: "appDebug" }),
				required: true,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.textInput
				}],
				min: 1,
				max: 256
			},
			{
				type: InputFieldType.options,
				label: t("variableConfig.options", { ns: "appDebug" }),
				variable: "options",
				required: true,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.select
				}]
			},
			{
				type: InputFieldType.fileTypes,
				label: t("variableConfig.file.supportFileTypes", { ns: "appDebug" }),
				variable: "allowedTypesAndExtensions",
				required: true,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.singleFile
				}]
			},
			{
				type: InputFieldType.fileTypes,
				label: t("variableConfig.file.supportFileTypes", { ns: "appDebug" }),
				variable: "allowedTypesAndExtensions",
				required: true,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.multiFiles
				}]
			},
			{
				type: InputFieldType.checkbox,
				label: t("variableConfig.required", { ns: "appDebug" }),
				variable: "required",
				required: true,
				showConditions: []
			}
		];
	}, [
		t,
		supportFile,
		handleTypeChange,
		handleVariableNameBlur,
		handleDisplayNameBlur
	]);
};
var useHiddenConfigurations = (props) => {
	const { t } = useTranslation();
	const { options } = props;
	const { data: fileUploadConfigResponse } = useFileUploadConfig();
	const { imgSizeLimit, docSizeLimit, audioSizeLimit, videoSizeLimit } = useFileSizeLimit(fileUploadConfigResponse);
	const defaultSelectOptions = useMemo(() => {
		if (options) {
			const defaultOptions = [{
				value: "",
				label: t("variableConfig.noDefaultSelected", { ns: "appDebug" })
			}];
			const otherOptions = options.map((option) => ({
				value: option,
				label: option
			}));
			return [...defaultOptions, ...otherOptions];
		}
		return [];
	}, [options, t]);
	return useMemo(() => {
		return [
			{
				type: InputFieldType.textInput,
				label: t("variableConfig.defaultValue", { ns: "appDebug" }),
				variable: "default",
				placeholder: t("variableConfig.defaultValuePlaceholder", { ns: "appDebug" }),
				required: false,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.textInput
				}],
				showOptional: true
			},
			{
				type: InputFieldType.textInput,
				label: t("variableConfig.defaultValue", { ns: "appDebug" }),
				variable: "default",
				placeholder: t("variableConfig.defaultValuePlaceholder", { ns: "appDebug" }),
				required: false,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.paragraph
				}],
				showOptional: true
			},
			{
				type: InputFieldType.numberInput,
				label: t("variableConfig.defaultValue", { ns: "appDebug" }),
				variable: "default",
				placeholder: t("variableConfig.defaultValuePlaceholder", { ns: "appDebug" }),
				required: false,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.number
				}],
				showOptional: true
			},
			{
				type: InputFieldType.select,
				label: t("variableConfig.startSelectedOption", { ns: "appDebug" }),
				variable: "default",
				required: false,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.select
				}],
				showOptional: true,
				options: defaultSelectOptions,
				popupProps: { wrapperClassName: "z-40" }
			},
			{
				type: InputFieldType.checkbox,
				label: t("variableConfig.startChecked", { ns: "appDebug" }),
				variable: "default",
				required: false,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.checkbox
				}]
			},
			{
				type: InputFieldType.textInput,
				label: t("variableConfig.placeholder", { ns: "appDebug" }),
				variable: "placeholder",
				placeholder: t("variableConfig.placeholderPlaceholder", { ns: "appDebug" }),
				required: false,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.textInput
				}],
				showOptional: true
			},
			{
				type: InputFieldType.textInput,
				label: t("variableConfig.placeholder", { ns: "appDebug" }),
				variable: "placeholder",
				placeholder: t("variableConfig.placeholderPlaceholder", { ns: "appDebug" }),
				required: false,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.paragraph
				}],
				showOptional: true
			},
			{
				type: InputFieldType.textInput,
				label: t("variableConfig.unit", { ns: "appDebug" }),
				variable: "unit",
				placeholder: t("variableConfig.unitPlaceholder", { ns: "appDebug" }),
				required: false,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.number
				}],
				showOptional: true
			},
			{
				type: InputFieldType.textInput,
				label: t("variableConfig.placeholder", { ns: "appDebug" }),
				variable: "placeholder",
				placeholder: t("variableConfig.placeholderPlaceholder", { ns: "appDebug" }),
				required: false,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.number
				}],
				showOptional: true
			},
			{
				type: InputFieldType.uploadMethod,
				label: t("variableConfig.uploadFileTypes", { ns: "appDebug" }),
				variable: "allowedFileUploadMethods",
				required: false,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.singleFile
				}]
			},
			{
				type: InputFieldType.uploadMethod,
				label: t("variableConfig.uploadFileTypes", { ns: "appDebug" }),
				variable: "allowedFileUploadMethods",
				required: false,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.multiFiles
				}]
			},
			{
				type: InputFieldType.numberSlider,
				label: t("variableConfig.maxNumberOfUploads", { ns: "appDebug" }),
				variable: "maxLength",
				required: false,
				showConditions: [{
					variable: "type",
					value: PipelineInputVarType.multiFiles
				}],
				description: t("variableConfig.maxNumberTip", {
					ns: "appDebug",
					imgLimit: formatFileSize(imgSizeLimit),
					docLimit: formatFileSize(docSizeLimit),
					audioLimit: formatFileSize(audioSizeLimit),
					videoLimit: formatFileSize(videoSizeLimit)
				})
			},
			{
				type: InputFieldType.textInput,
				label: t("variableConfig.tooltips", { ns: "appDebug" }),
				variable: "tooltips",
				required: false,
				showConditions: [],
				showOptional: true
			}
		];
	}, [
		defaultSelectOptions,
		imgSizeLimit,
		docSizeLimit,
		audioSizeLimit,
		videoSizeLimit,
		t
	]);
};
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/editor/form/hidden-fields.tsx
var HiddenFields = ({ initialData }) => withForm({
	defaultValues: initialData,
	render: function Render({ form }) {
		return /* @__PURE__ */ jsx(Fragment$1, { children: useHiddenConfigurations({ options: useStore(form.store, (state) => state.values.options) }).map((config, index) => {
			return /* @__PURE__ */ jsx(InputField({
				initialData,
				config
			}), { form }, index);
		}) });
	}
});
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/editor/form/initial-fields.tsx
var InitialFields = ({ initialData, supportFile }) => withForm({
	defaultValues: initialData,
	render: function Render({ form }) {
		return /* @__PURE__ */ jsx(Fragment$1, { children: useConfigurations({
			getFieldValue: useCallback((fieldName) => {
				return form.getFieldValue(fieldName);
			}, [form]),
			setFieldValue: useCallback((fieldName, value) => {
				form.setFieldValue(fieldName, value);
			}, [form]),
			supportFile
		}).map((config, index) => {
			return /* @__PURE__ */ jsx(InputField({
				initialData,
				config
			}), { form }, index);
		}) });
	}
});
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/editor/form/show-all-settings.tsx
var ShowAllSettings = ({ initialData, handleShowAllSettings }) => withForm({
	defaultValues: initialData,
	render: function Render({ form }) {
		const { t } = useTranslation();
		const hiddenFieldNames = useHiddenFieldNames(useStore(form.store, (state) => state.values.type));
		return /* @__PURE__ */ jsxs("div", {
			className: "flex cursor-pointer items-center gap-x-4",
			onClick: handleShowAllSettings,
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex grow flex-col",
				children: [/* @__PURE__ */ jsx("span", {
					className: "system-sm-medium flex min-h-6 items-center text-text-secondary",
					children: t("variableConfig.showAllSettings", { ns: "appDebug" })
				}), /* @__PURE__ */ jsx("span", {
					className: "body-xs-regular pb-0.5 text-text-tertiary first-letter:capitalize",
					children: hiddenFieldNames
				})]
			}), /* @__PURE__ */ jsx(r2, { className: "h-4 w-4 shrink-0 text-text-secondary" })]
		});
	}
});
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/editor/form/index.tsx
var InputFieldForm = ({ initialData, supportFile = false, onCancel, onSubmit, isEditMode = true }) => {
	const { t } = useTranslation();
	const { data: fileUploadConfigResponse } = useFileUploadConfig();
	const { maxFileUploadLimit } = useFileSizeLimit(fileUploadConfigResponse);
	const inputFieldForm = useAppForm({
		defaultValues: initialData,
		validators: { onSubmit: ({ value }) => {
			const { type } = value;
			const result = createInputFieldSchema(type, t, { maxFileUploadLimit }).safeParse(value);
			if (!result.success) {
				const firstIssue = result.error.issues[0];
				const errorMessage = `"${firstIssue.path.join(".")}" ${firstIssue.message}`;
				Toast.notify({
					type: "error",
					message: errorMessage
				});
				return errorMessage;
			}
		} },
		onSubmit: ({ value }) => {
			let moreInfo;
			if (isEditMode && value.variable !== initialData?.variable) moreInfo = {
				type: ChangeType.changeVarName,
				payload: {
					beforeKey: initialData?.variable || "",
					afterKey: value.variable
				}
			};
			onSubmit(value, moreInfo);
		}
	});
	const [showAllSettings, setShowAllSettings] = useState(false);
	const InitialFieldsComp = InitialFields({
		initialData,
		supportFile
	});
	const HiddenFieldsComp = HiddenFields({ initialData });
	const ShowAllSettingComp = ShowAllSettings({
		initialData,
		handleShowAllSettings: useCallback(() => {
			setShowAllSettings(true);
		}, [])
	});
	return /* @__PURE__ */ jsxs("form", {
		className: "w-full",
		onSubmit: (e) => {
			e.preventDefault();
			e.stopPropagation();
			inputFieldForm.handleSubmit();
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-4 px-4 py-2",
			children: [
				/* @__PURE__ */ jsx(InitialFieldsComp, { form: inputFieldForm }),
				/* @__PURE__ */ jsx(Divider, { type: "horizontal" }),
				!showAllSettings && /* @__PURE__ */ jsx(ShowAllSettingComp, { form: inputFieldForm }),
				showAllSettings && /* @__PURE__ */ jsx(HiddenFieldsComp, { form: inputFieldForm })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-end gap-x-2 p-4 pt-2",
			children: [/* @__PURE__ */ jsx(Button, {
				variant: "secondary",
				onClick: onCancel,
				children: t("operation.cancel", { ns: "common" })
			}), /* @__PURE__ */ jsx(inputFieldForm.AppForm, { children: /* @__PURE__ */ jsx(inputFieldForm.Actions, {}) })]
		})]
	});
};
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/editor/utils.ts
var getNewInputVarInRagPipeline = () => {
	return { ...VAR_ITEM_TEMPLATE_IN_PIPELINE };
};
var convertToInputFieldFormData = (data) => {
	const { type, label, variable, max_length, default_value, required, tooltips, options, placeholder, unit, allowed_file_upload_methods, allowed_file_types, allowed_file_extensions } = data || getNewInputVarInRagPipeline();
	const formData = {
		type,
		label,
		variable,
		maxLength: max_length,
		required,
		options,
		allowedTypesAndExtensions: {}
	};
	if (default_value !== void 0 && default_value !== null) formData.default = default_value;
	if (tooltips !== void 0 && tooltips !== null) formData.tooltips = tooltips;
	if (placeholder !== void 0 && placeholder !== null) formData.placeholder = placeholder;
	if (unit !== void 0 && unit !== null) formData.unit = unit;
	if (allowed_file_upload_methods) formData.allowedFileUploadMethods = allowed_file_upload_methods;
	if (allowed_file_types && allowed_file_extensions) formData.allowedTypesAndExtensions = {
		allowedFileTypes: allowed_file_types,
		allowedFileExtensions: allowed_file_extensions
	};
	return formData;
};
var convertFormDataToINputField = (data) => {
	const { type, label, variable, maxLength, default: defaultValue, required, tooltips, options, placeholder, unit, allowedFileUploadMethods, allowedTypesAndExtensions: { allowedFileTypes, allowedFileExtensions } } = data;
	return {
		type,
		label,
		variable,
		max_length: maxLength,
		default_value: defaultValue,
		required,
		tooltips,
		options,
		placeholder,
		unit,
		allowed_file_upload_methods: allowedFileUploadMethods,
		allowed_file_types: allowedFileTypes,
		allowed_file_extensions: allowedFileExtensions
	};
};
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/editor/index.tsx
var InputFieldEditorPanel = ({ onClose, onSubmit, initialData }) => {
	const { t } = useTranslation();
	const { floatingRight, floatingRightWidth } = useFloatingRight(400);
	const formData = useMemo(() => {
		return convertToInputFieldFormData(initialData);
	}, [initialData]);
	const handleSubmit = useCallback((value, moreInfo) => {
		onSubmit(convertFormDataToINputField(value), moreInfo);
	}, [onSubmit]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative mr-1 flex h-fit max-h-full w-[400px] flex-col overflow-y-auto rounded-2xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-2xl shadow-shadow-shadow-9", "transition-all duration-300 ease-in-out", floatingRight && "absolute right-0 z-[100]"),
		style: { width: `${floatingRightWidth}px` },
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "system-xl-semibold flex items-center pb-1 pl-4 pr-11 pt-3.5 text-text-primary",
				children: initialData ? t("inputFieldPanel.editInputField", { ns: "datasetPipeline" }) : t("inputFieldPanel.addInputField", { ns: "datasetPipeline" })
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				"data-testid": "input-field-editor-close-btn",
				className: "absolute right-2.5 top-2.5 flex size-8 items-center justify-center",
				onClick: onClose,
				children: /* @__PURE__ */ jsx(P7, { className: "size-4 text-text-tertiary" })
			}),
			/* @__PURE__ */ jsx(InputFieldForm, {
				initialData: formData,
				supportFile: true,
				onCancel: onClose,
				onSubmit: handleSubmit,
				isEditMode: !!initialData
			})
		]
	});
};
//#endregion
export { InputFieldEditorPanel as default };
