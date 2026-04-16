import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { Lt as SupportUploadFileTypes } from "./config-Dopncj5R.js";
import { ir as produce } from "./hooks-Bj_4KA1b.js";
import { u as TransferMethod } from "./app-DPjSIfgb.js";
import { t as formatFileSize } from "./format-BCVnrx09.js";
import { s as useFileUploadConfig } from "./use-common-BJ1aZaXJ.js";
import { o as useFileSizeLimit } from "./file-uploader-DuOqY7O5.js";
import { n as file_type_item_default, t as input_number_with_slider_default } from "./input-number-with-slider-CP7hkeZs.js";
import { t as option_card_default } from "./option-card-ChUs8MBx.js";
import * as React$1 from "react";
import { useCallback } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/app/configuration/config-var/config-modal/field.tsx
var Field = ({ className, title, isOptional, children }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: cn(className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "!leading-8 text-text-secondary system-sm-semibold",
			children: [title, isOptional && /* @__PURE__ */ jsxs("span", {
				className: "ml-1 text-text-tertiary system-xs-regular",
				children: [
					"(",
					t("variableConfig.optional", { ns: "appDebug" }),
					")"
				]
			})]
		}), /* @__PURE__ */ jsx("div", { children })]
	});
};
var field_default = React$1.memo(Field);
//#endregion
//#region app/components/workflow/nodes/_base/components/file-upload-setting.tsx
var FileUploadSetting = ({ payload, isMultiple, inFeaturePanel = false, hideSupportFileType = false, onChange }) => {
	const { t } = useTranslation();
	const { allowed_file_upload_methods, max_length, allowed_file_types, allowed_file_extensions } = payload;
	const { data: fileUploadConfigResponse } = useFileUploadConfig();
	const { imgSizeLimit, docSizeLimit, audioSizeLimit, videoSizeLimit, maxFileUploadLimit } = useFileSizeLimit(fileUploadConfigResponse);
	const handleSupportFileTypeChange = useCallback((type) => {
		onChange(produce(payload, (draft) => {
			if (type === SupportUploadFileTypes.custom) if (!draft.allowed_file_types.includes(SupportUploadFileTypes.custom)) draft.allowed_file_types = [SupportUploadFileTypes.custom];
			else draft.allowed_file_types = draft.allowed_file_types.filter((v) => v !== type);
			else {
				draft.allowed_file_types = draft.allowed_file_types.filter((v) => v !== SupportUploadFileTypes.custom);
				if (draft.allowed_file_types.includes(type)) draft.allowed_file_types = draft.allowed_file_types.filter((v) => v !== type);
				else draft.allowed_file_types.push(type);
			}
		}));
	}, [onChange, payload]);
	const handleUploadMethodChange = useCallback((method) => {
		return () => {
			onChange(produce(payload, (draft) => {
				if (method === TransferMethod.all) draft.allowed_file_upload_methods = [TransferMethod.local_file, TransferMethod.remote_url];
				else draft.allowed_file_upload_methods = [method];
			}));
		};
	}, [onChange, payload]);
	const handleCustomFileTypesChange = useCallback((customFileTypes) => {
		onChange(produce(payload, (draft) => {
			draft.allowed_file_extensions = customFileTypes.map((v) => {
				return v;
			});
		}));
	}, [onChange, payload]);
	const handleMaxUploadNumLimitChange = useCallback((value) => {
		onChange(produce(payload, (draft) => {
			draft.max_length = value;
		}));
	}, [onChange, payload]);
	return /* @__PURE__ */ jsxs("div", { children: [
		!inFeaturePanel && /* @__PURE__ */ jsx(field_default, {
			title: t("variableConfig.file.supportFileTypes", { ns: "appDebug" }),
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-1",
				children: [[
					SupportUploadFileTypes.document,
					SupportUploadFileTypes.image,
					SupportUploadFileTypes.audio,
					SupportUploadFileTypes.video
				].map((type) => /* @__PURE__ */ jsx(file_type_item_default, {
					type,
					selected: allowed_file_types.includes(type),
					onToggle: handleSupportFileTypeChange
				}, type)), /* @__PURE__ */ jsx(file_type_item_default, {
					type: SupportUploadFileTypes.custom,
					selected: allowed_file_types.includes(SupportUploadFileTypes.custom),
					onToggle: handleSupportFileTypeChange,
					customFileTypes: allowed_file_extensions,
					onCustomFileTypesChange: handleCustomFileTypesChange
				})]
			})
		}),
		/* @__PURE__ */ jsx(field_default, {
			title: t("variableConfig.uploadFileTypes", { ns: "appDebug" }),
			className: "mt-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-3 gap-2",
				children: [
					/* @__PURE__ */ jsx(option_card_default, {
						title: t("variableConfig.localUpload", { ns: "appDebug" }),
						selected: allowed_file_upload_methods.length === 1 && allowed_file_upload_methods.includes(TransferMethod.local_file),
						onSelect: handleUploadMethodChange(TransferMethod.local_file)
					}),
					/* @__PURE__ */ jsx(option_card_default, {
						title: "URL",
						selected: allowed_file_upload_methods.length === 1 && allowed_file_upload_methods.includes(TransferMethod.remote_url),
						onSelect: handleUploadMethodChange(TransferMethod.remote_url)
					}),
					/* @__PURE__ */ jsx(option_card_default, {
						title: t("variableConfig.both", { ns: "appDebug" }),
						selected: allowed_file_upload_methods.includes(TransferMethod.local_file) && allowed_file_upload_methods.includes(TransferMethod.remote_url),
						onSelect: handleUploadMethodChange(TransferMethod.all)
					})
				]
			})
		}),
		isMultiple && /* @__PURE__ */ jsx(field_default, {
			className: "mt-4",
			title: t("variableConfig.maxNumberOfUploads", { ns: "appDebug" }),
			children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
				className: "body-xs-regular mb-1.5 text-text-tertiary",
				children: t("variableConfig.maxNumberTip", {
					ns: "appDebug",
					imgLimit: formatFileSize(imgSizeLimit),
					docLimit: formatFileSize(docSizeLimit),
					audioLimit: formatFileSize(audioSizeLimit),
					videoLimit: formatFileSize(videoSizeLimit)
				})
			}), /* @__PURE__ */ jsx(input_number_with_slider_default, {
				value: max_length,
				min: 1,
				max: maxFileUploadLimit,
				onChange: handleMaxUploadNumLimitChange
			})] })
		}),
		inFeaturePanel && !hideSupportFileType && /* @__PURE__ */ jsx(field_default, {
			title: t("variableConfig.file.supportFileTypes", { ns: "appDebug" }),
			className: "mt-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-1",
				children: [[
					SupportUploadFileTypes.document,
					SupportUploadFileTypes.image,
					SupportUploadFileTypes.audio,
					SupportUploadFileTypes.video
				].map((type) => /* @__PURE__ */ jsx(file_type_item_default, {
					type,
					selected: allowed_file_types.includes(type),
					onToggle: handleSupportFileTypeChange
				}, type)), /* @__PURE__ */ jsx(file_type_item_default, {
					type: SupportUploadFileTypes.custom,
					selected: allowed_file_types.includes(SupportUploadFileTypes.custom),
					onToggle: handleSupportFileTypeChange,
					customFileTypes: allowed_file_extensions,
					onCustomFileTypesChange: handleCustomFileTypesChange
				})]
			})
		})
	] });
};
var file_upload_setting_default = React$1.memo(FileUploadSetting);
//#endregion
export { field_default as n, file_upload_setting_default as t };
