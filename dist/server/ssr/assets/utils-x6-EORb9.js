import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { Nt as InputVarType } from "./config-Dopncj5R.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as ALLOW_FILE_EXTENSIONS, u as TransferMethod } from "./app-DPjSIfgb.js";
import { t as Checkbox } from "./checkbox-DTSgkYdc.js";
import { n as useImageFiles, r as useLocalFileUploader, t as Icon } from "./images-D3Uv050C.js";
import { l as Icon$1 } from "./general-C8w9hIeL.js";
import { t as Icon$2 } from "./alertsAndFeedback-BpcdEYpr.js";
import { s as getProcessedFiles } from "./utils-Dh7W533Q.js";
import { t as ImagePreview } from "./image-preview-D0J1Go0B.js";
import * as React$1 from "react";
import { Fragment, useCallback, useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/image-uploader/image-link-input.tsx
var regex = /^(https?|ftp):\/\//;
var ImageLinkInput = ({ onUpload, disabled }) => {
	const { t } = useTranslation();
	const [imageLink, setImageLink] = useState("");
	/* v8 ignore next -- defensive i18n fallback; translation key resolves to non-empty text in normal runtime/test setup, so empty-placeholder branch is not exercised without forcing i18n internals. @preserve */
	const safeText = t("imageUploader.pasteImageLinkInputPlaceholder", { ns: "common" }) || "";
	const handleClick = () => {
		/* v8 ignore next 2 -- same condition drives Button.disabled; when true, click does not invoke onClick in user-level flow. @preserve */
		if (disabled) return;
		onUpload({
			type: TransferMethod.remote_url,
			_id: `${Date.now()}`,
			fileId: "",
			progress: regex.test(imageLink) ? 0 : -1,
			url: imageLink
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-8 items-center rounded-lg border border-components-panel-border bg-components-panel-bg pl-1.5 pr-1 shadow-xs",
		children: [/* @__PURE__ */ jsx("input", {
			type: "text",
			className: "mr-0.5 h-[18px] grow appearance-none bg-transparent px-1 text-[13px] text-text-primary outline-none",
			value: imageLink,
			onChange: (e) => setImageLink(e.target.value),
			placeholder: safeText,
			"data-testid": "image-link-input"
		}), /* @__PURE__ */ jsx(Button, {
			variant: "primary",
			size: "small",
			disabled: !imageLink || disabled,
			onClick: handleClick,
			children: t("operation.ok", { ns: "common" })
		})]
	});
};
//#endregion
//#region app/components/base/image-uploader/image-list.tsx
var ImageList = ({ list, readonly, onRemove, onReUpload, onImageLinkLoadSuccess, onImageLinkLoadError }) => {
	const { t } = useTranslation();
	const [imagePreviewUrl, setImagePreviewUrl] = useState("");
	const handleImageLinkLoadSuccess = (item) => {
		if (item.type === TransferMethod.remote_url && onImageLinkLoadSuccess && item.progress !== -1) onImageLinkLoadSuccess(item._id);
	};
	const handleImageLinkLoadError = (item) => {
		if (item.type === TransferMethod.remote_url && onImageLinkLoadError) onImageLinkLoadError(item._id);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-wrap",
		"data-testid": "image-list",
		children: [list.map((item) => /* @__PURE__ */ jsxs("div", {
			className: "group relative mr-1 rounded-lg border-[0.5px] border-black/5",
			children: [
				item.type === TransferMethod.local_file && item.progress !== 100 && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 z-[1] flex items-center justify-center bg-black/30",
					style: { left: item.progress > -1 ? `${item.progress}%` : 0 },
					children: item.progress === -1 && /* @__PURE__ */ jsx("span", {
						className: "i-custom-vender-line-arrows-refresh-ccw-01 h-5 w-5 text-white",
						onClick: () => onReUpload?.(item._id),
						"data-testid": "retry-icon"
					})
				}), item.progress > -1 && /* @__PURE__ */ jsxs("span", {
					className: "absolute left-[50%] top-[50%] z-[1] translate-x-[-50%] translate-y-[-50%] text-sm text-white mix-blend-lighten",
					children: [item.progress, "%"]
				})] }),
				item.type === TransferMethod.remote_url && item.progress !== 100 && /* @__PURE__ */ jsxs("div", {
					className: `
                  absolute inset-0 z-[1] flex items-center justify-center rounded-lg border
                  ${item.progress === -1 ? "border-[#DC6803] bg-[#FEF0C7]" : "border-transparent bg-black/[0.16]"}
                `,
					"data-testid": "image-error-container",
					children: [item.progress > -1 && /* @__PURE__ */ jsx("span", {
						className: "i-ri-loader-2-line h-5 w-5 animate-spin text-white",
						"data-testid": "image-loader"
					}), item.progress === -1 && /* @__PURE__ */ jsx(tooltip_default, {
						popupContent: t("imageUploader.pasteImageLinkInvalid", { ns: "common" }),
						children: /* @__PURE__ */ jsx(Icon$2, { className: "h-4 w-4 text-[#DC6803]" })
					})]
				}),
				/* @__PURE__ */ jsx("img", {
					className: "h-16 w-16 cursor-pointer rounded-lg border-[0.5px] border-black/5 object-cover",
					alt: item.file?.name,
					onLoad: () => handleImageLinkLoadSuccess(item),
					onError: () => handleImageLinkLoadError(item),
					src: item.type === TransferMethod.remote_url ? item.url : item.base64Url,
					onClick: () => item.progress === 100 && setImagePreviewUrl(item.type === TransferMethod.remote_url ? item.url : item.base64Url)
				}),
				!readonly && /* @__PURE__ */ jsx("button", {
					type: "button",
					className: cn("absolute -right-[9px] -top-[9px] z-10 h-[18px] w-[18px] items-center justify-center", "rounded-2xl shadow-lg hover:bg-state-base-hover", item.progress === -1 ? "flex" : "hidden group-hover:flex"),
					onClick: () => onRemove?.(item._id),
					"data-testid": "remove-button",
					children: /* @__PURE__ */ jsx("span", { className: "i-ri-close-line h-3 w-3 text-text-tertiary" })
				})
			]
		}, item._id)), imagePreviewUrl && /* @__PURE__ */ jsx(ImagePreview, {
			url: imagePreviewUrl,
			onCancel: () => setImagePreviewUrl(""),
			title: ""
		})]
	});
};
//#endregion
//#region app/components/base/image-uploader/uploader.tsx
var Uploader = ({ children, onUpload, closePopover, limit, disabled }) => {
	const [hovering, setHovering] = useState(false);
	const { handleLocalFileUpload } = useLocalFileUploader({
		limit,
		onUpload,
		disabled
	});
	const handleChange = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		handleLocalFileUpload(file);
		closePopover?.();
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		onMouseEnter: () => setHovering(true),
		onMouseLeave: () => setHovering(false),
		children: [children(hovering), /* @__PURE__ */ jsx("input", {
			"data-testid": "local-file-input",
			className: "absolute inset-0 block w-full cursor-pointer text-[0] opacity-0 disabled:cursor-not-allowed",
			onClick: (e) => e.target.value = "",
			type: "file",
			accept: ALLOW_FILE_EXTENSIONS.map((ext) => `.${ext}`).join(","),
			onChange: handleChange,
			disabled
		})]
	});
};
//#endregion
//#region app/components/base/image-uploader/text-generation-image-uploader.tsx
var PasteImageLinkButton = ({ onUpload, disabled }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const handleUpload = (imageFile) => {
		setOpen(false);
		onUpload(imageFile);
	};
	const handleToggle = () => {
		if (disabled) return;
		setOpen((v) => !v);
	};
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "top-start",
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: handleToggle,
			children: /* @__PURE__ */ jsxs("div", {
				className: `
          relative flex h-8 items-center justify-center rounded-lg bg-components-button-tertiary-bg px-3 text-xs text-text-tertiary hover:bg-components-button-tertiary-bg-hover
          ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
        `,
				children: [/* @__PURE__ */ jsx(Icon$1, { className: "mr-2 h-4 w-4" }), t("imageUploader.pasteImageLink", { ns: "common" })]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-10",
			children: /* @__PURE__ */ jsx("div", {
				className: "w-[320px] rounded-lg border-[0.5px] border-components-panel-border bg-components-panel-bg p-2 shadow-lg",
				children: /* @__PURE__ */ jsx(ImageLinkInput, { onUpload: handleUpload })
			})
		})]
	});
};
var TextGenerationImageUploader = ({ settings, onFilesChange, disabled }) => {
	const { t } = useTranslation();
	const { files, onUpload, onRemove, onImageLinkLoadError, onImageLinkLoadSuccess, onReUpload } = useImageFiles();
	useEffect(() => {
		onFilesChange(files);
	}, [files]);
	const localUpload = /* @__PURE__ */ jsx(Uploader, {
		onUpload,
		disabled: files.length >= settings.number_limits || disabled,
		limit: +settings.image_file_size_limit,
		children: (hovering) => /* @__PURE__ */ jsxs("div", {
			className: `
            flex h-8 cursor-pointer items-center justify-center rounded-lg
            bg-components-button-tertiary-bg px-3 text-xs text-text-tertiary
            ${hovering && "hover:bg-components-button-tertiary-bg-hover"}
          `,
			children: [/* @__PURE__ */ jsx(Icon, { className: "mr-2 h-4 w-4" }), t("imageUploader.uploadFromComputer", { ns: "common" })]
		})
	});
	const urlUpload = /* @__PURE__ */ jsx(PasteImageLinkButton, {
		onUpload,
		disabled: files.length >= settings.number_limits || disabled
	});
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
		className: "mb-1",
		children: /* @__PURE__ */ jsx(ImageList, {
			list: files,
			onRemove,
			onReUpload,
			onImageLinkLoadError,
			onImageLinkLoadSuccess
		})
	}), /* @__PURE__ */ jsx("div", {
		className: `grid gap-1 ${settings.transfer_methods.length === 2 ? "grid-cols-2" : "grid-cols-1"}`,
		"data-testid": "upload-actions",
		children: settings.transfer_methods.map((method) => {
			if (method === TransferMethod.local_file) return /* @__PURE__ */ jsx(Fragment, { children: localUpload }, TransferMethod.local_file);
			if (method === TransferMethod.remote_url) return /* @__PURE__ */ jsx(Fragment, { children: urlUpload }, TransferMethod.remote_url);
			return null;
		})
	})] });
};
//#endregion
//#region app/components/workflow/nodes/_base/components/before-run-form/bool-input.tsx
var BoolInput = ({ value, onChange, name, required, readonly }) => {
	const { t } = useTranslation();
	const handleChange = useCallback(() => {
		onChange(!value);
	}, [value, onChange]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-6 items-center gap-2",
		children: [/* @__PURE__ */ jsx(Checkbox, {
			className: "!h-4 !w-4",
			checked: !!value,
			onCheck: handleChange,
			disabled: readonly
		}), /* @__PURE__ */ jsxs("div", {
			className: "system-sm-medium flex items-center gap-1 text-text-secondary",
			children: [name, !required && /* @__PURE__ */ jsx("span", {
				className: "system-xs-regular text-text-tertiary",
				children: t("panel.optional", { ns: "workflow" })
			})]
		})]
	});
};
var bool_input_default = React$1.memo(BoolInput);
//#endregion
//#region app/components/base/chat/chat/utils.ts
var processOpeningStatement = (openingStatement, inputs, inputsForm) => {
	if (!openingStatement) return openingStatement;
	return openingStatement.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
		const name = inputs[key];
		if (name) return name;
		const valueObj = inputsForm.find((v) => v.variable === key);
		return valueObj ? `{{${valueObj.label}}}` : match;
	});
};
var processInputFileFromServer = (fileItem) => {
	return {
		type: fileItem.type,
		transfer_method: fileItem.transfer_method,
		url: fileItem.remote_url,
		upload_file_id: fileItem.related_id
	};
};
var getProcessedInputs = (inputs, inputsForm) => {
	const processedInputs = { ...inputs };
	inputsForm.forEach((item) => {
		const inputValue = inputs[item.variable];
		if (item.type === InputVarType.checkbox) {
			processedInputs[item.variable] = !!inputValue;
			return;
		}
		if (inputValue == null) return;
		if (item.type === InputVarType.singleFile) if ("transfer_method" in inputValue) processedInputs[item.variable] = processInputFileFromServer(inputValue);
		else processedInputs[item.variable] = getProcessedFiles([inputValue])[0];
		else if (item.type === InputVarType.multiFiles) if ("transfer_method" in inputValue[0]) processedInputs[item.variable] = inputValue.map(processInputFileFromServer);
		else processedInputs[item.variable] = getProcessedFiles(inputValue);
		else if (item.type === InputVarType.jsonObject) try {
			const v = typeof inputValue === "string" ? JSON.parse(inputValue) : inputValue;
			if (v && typeof v === "object" && !Array.isArray(v)) processedInputs[item.variable] = v;
			else processedInputs[item.variable] = inputValue;
		} catch {
			processedInputs[item.variable] = inputValue;
		}
	});
	return processedInputs;
};
//#endregion
export { TextGenerationImageUploader as i, processOpeningStatement as n, bool_input_default as r, getProcessedInputs as t };
