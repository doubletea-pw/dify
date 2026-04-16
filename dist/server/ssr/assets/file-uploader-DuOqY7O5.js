import { a as useParams } from "../index.js";
import { di as we, ht as Nf, mi as xm, xt as P7, yi as z2 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { n as useStore$1, t as create } from "./react-CHKO_ryu.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { Lt as SupportUploadFileTypes } from "./config-Dopncj5R.js";
import { Nt as file_type_icon_default, ir as produce } from "./hooks-Bj_4KA1b.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { t as v4 } from "./v4-C1y4vc1I.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as ActionButton } from "./action-button-BK9WUMzU.js";
import { n as downloadUrl } from "./download-Cg9gmIRx.js";
import { i as useToastContext } from "./toast-BY3OifkP.js";
import { u as TransferMethod } from "./app-DPjSIfgb.js";
import { f as FILE_EXTS } from "./var-DPpHtpXT.js";
import { H as uploadRemoteFileInfo } from "./common-qRxT6xi0.js";
import { n as Icon } from "./other-sSUV3aYW.js";
import { t as dynamic } from "./dynamic-6-R69YAE.js";
import { t as formatFileSize } from "./format-BCVnrx09.js";
import { a as getFileUploadErrorMessage, i as getFileExtension, l as getSupportFileType, n as fileUpload, r as getFileAppearanceType, t as fileIsUploaded, u as isAllowedFileExtension } from "./utils-Dh7W533Q.js";
import { n as file_item_default, o as FileImageRender, r as progress_circle_default } from "./tag-input-9kTFEfAj.js";
import { t as fe } from "./dist-DV9-MooO2.js";
import { t as ImagePreview } from "./image-preview-D0J1Go0B.js";
import { createContext, memo, useCallback, useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var FILE_URL_REGEX = /^(https?|ftp):\/\//;
//#endregion
//#region app/components/base/file-uploader/store.tsx
var createFileStore = (value = [], onChange) => {
	return create((set) => ({
		files: value ? [...value] : [],
		setFiles: (files) => {
			set({ files });
			onChange?.(files);
		}
	}));
};
var FileContext = createContext(null);
function useStore(selector) {
	const store = useContext(FileContext);
	if (!store) throw new Error("Missing FileContext.Provider in the tree");
	return useStore$1(store, selector);
}
var useFileStore = () => {
	return useContext(FileContext);
};
var FileContextProvider = ({ children, value, onChange }) => {
	const storeRef = useRef(void 0);
	if (!storeRef.current) storeRef.current = createFileStore(value, onChange);
	return /* @__PURE__ */ jsx(FileContext.Provider, {
		value: storeRef.current,
		children
	});
};
//#endregion
//#region app/components/base/file-uploader/hooks.ts
var useFileSizeLimit = (fileUploadConfig) => {
	return {
		imgSizeLimit: Number(fileUploadConfig?.image_file_size_limit) * 1024 * 1024 || 10485760,
		docSizeLimit: Number(fileUploadConfig?.file_size_limit) * 1024 * 1024 || 15728640,
		audioSizeLimit: Number(fileUploadConfig?.audio_file_size_limit) * 1024 * 1024 || 52428800,
		videoSizeLimit: Number(fileUploadConfig?.video_file_size_limit) * 1024 * 1024 || 104857600,
		maxFileUploadLimit: Number(fileUploadConfig?.workflow_file_upload_limit) || 10
	};
};
var useFile = (fileConfig, noNeedToCheckEnable = true) => {
	const { t } = useTranslation();
	const { notify } = useToastContext();
	const fileStore = useFileStore();
	const params = useParams();
	const { imgSizeLimit, docSizeLimit, audioSizeLimit, videoSizeLimit } = useFileSizeLimit(fileConfig.fileUploadConfig);
	const checkSizeLimit = useCallback((fileType, fileSize) => {
		switch (fileType) {
			case SupportUploadFileTypes.image:
				if (fileSize > imgSizeLimit) {
					notify({
						type: "error",
						message: t("fileUploader.uploadFromComputerLimit", {
							ns: "common",
							type: SupportUploadFileTypes.image,
							size: formatFileSize(imgSizeLimit)
						})
					});
					return false;
				}
				return true;
			case SupportUploadFileTypes.custom:
			case SupportUploadFileTypes.document:
				if (fileSize > docSizeLimit) {
					notify({
						type: "error",
						message: t("fileUploader.uploadFromComputerLimit", {
							ns: "common",
							type: SupportUploadFileTypes.document,
							size: formatFileSize(docSizeLimit)
						})
					});
					return false;
				}
				return true;
			case SupportUploadFileTypes.audio:
				if (fileSize > audioSizeLimit) {
					notify({
						type: "error",
						message: t("fileUploader.uploadFromComputerLimit", {
							ns: "common",
							type: SupportUploadFileTypes.audio,
							size: formatFileSize(audioSizeLimit)
						})
					});
					return false;
				}
				return true;
			case SupportUploadFileTypes.video:
				if (fileSize > videoSizeLimit) {
					notify({
						type: "error",
						message: t("fileUploader.uploadFromComputerLimit", {
							ns: "common",
							type: SupportUploadFileTypes.video,
							size: formatFileSize(videoSizeLimit)
						})
					});
					return false;
				}
				return true;
			default: return true;
		}
	}, [
		audioSizeLimit,
		docSizeLimit,
		imgSizeLimit,
		notify,
		t,
		videoSizeLimit
	]);
	const handleAddFile = useCallback((newFile) => {
		const { files, setFiles } = fileStore.getState();
		setFiles(produce(files, (draft) => {
			draft.push(newFile);
		}));
	}, [fileStore]);
	const handleUpdateFile = useCallback((newFile) => {
		const { files, setFiles } = fileStore.getState();
		setFiles(produce(files, (draft) => {
			const index = draft.findIndex((file) => file.id === newFile.id);
			if (index > -1) draft[index] = newFile;
		}));
	}, [fileStore]);
	const handleRemoveFile = useCallback((fileId) => {
		const { files, setFiles } = fileStore.getState();
		setFiles(files.filter((file) => file.id !== fileId));
	}, [fileStore]);
	const handleReUploadFile = useCallback((fileId) => {
		const { files, setFiles } = fileStore.getState();
		const index = files.findIndex((file) => file.id === fileId);
		if (index > -1) {
			const uploadingFile = files[index];
			setFiles(produce(files, (draft) => {
				draft[index].progress = 0;
			}));
			fileUpload({
				file: uploadingFile.originalFile,
				onProgressCallback: (progress) => {
					handleUpdateFile({
						...uploadingFile,
						progress
					});
				},
				onSuccessCallback: (res) => {
					handleUpdateFile({
						...uploadingFile,
						uploadedId: res.id,
						progress: 100
					});
				},
				onErrorCallback: (error) => {
					notify({
						type: "error",
						message: getFileUploadErrorMessage(error, t("fileUploader.uploadFromComputerUploadError", { ns: "common" }), t)
					});
					handleUpdateFile({
						...uploadingFile,
						progress: -1
					});
				}
			}, !!params.token);
		}
	}, [
		fileStore,
		notify,
		t,
		handleUpdateFile,
		params
	]);
	const startProgressTimer = useCallback((fileId) => {
		const timer = setInterval(() => {
			const file = fileStore.getState().files.find((file) => file.id === fileId);
			if (file && file.progress < 80 && file.progress >= 0) handleUpdateFile({
				...file,
				progress: file.progress + 20
			});
			else clearTimeout(timer);
		}, 200);
	}, [fileStore, handleUpdateFile]);
	const handleLoadFileFromLink = useCallback((url) => {
		const allowedFileTypes = fileConfig.allowed_file_types;
		const uploadingFile = {
			id: v4(),
			name: url,
			type: "",
			size: 0,
			progress: 0,
			transferMethod: TransferMethod.remote_url,
			supportFileType: "",
			url,
			isRemote: true
		};
		handleAddFile(uploadingFile);
		startProgressTimer(uploadingFile.id);
		uploadRemoteFileInfo(url, !!params.token).then((res) => {
			const newFile = {
				...uploadingFile,
				type: res.mime_type,
				size: res.size,
				progress: 100,
				supportFileType: getSupportFileType(res.name, res.mime_type, allowedFileTypes?.includes(SupportUploadFileTypes.custom)),
				uploadedId: res.id,
				url: res.url
			};
			if (!isAllowedFileExtension(res.name, res.mime_type, fileConfig.allowed_file_types || [], fileConfig.allowed_file_extensions || [])) {
				notify({
					type: "error",
					message: `${t("fileUploader.fileExtensionNotSupport", { ns: "common" })} ${newFile.type}`
				});
				handleRemoveFile(uploadingFile.id);
			}
			if (!checkSizeLimit(newFile.supportFileType, newFile.size)) handleRemoveFile(uploadingFile.id);
			else handleUpdateFile(newFile);
		}).catch(() => {
			notify({
				type: "error",
				message: t("fileUploader.pasteFileLinkInvalid", { ns: "common" })
			});
			handleRemoveFile(uploadingFile.id);
		});
	}, [
		checkSizeLimit,
		handleAddFile,
		handleUpdateFile,
		notify,
		t,
		handleRemoveFile,
		fileConfig?.allowed_file_types,
		fileConfig.allowed_file_extensions,
		startProgressTimer,
		params.token
	]);
	const handleLoadFileFromLinkSuccess = useCallback(noop, []);
	const handleLoadFileFromLinkError = useCallback(noop, []);
	const handleClearFiles = useCallback(() => {
		const { setFiles } = fileStore.getState();
		setFiles([]);
	}, [fileStore]);
	const handleLocalFileUpload = useCallback((file) => {
		if (!noNeedToCheckEnable && !fileConfig.enabled) {
			notify({
				type: "error",
				message: t("fileUploader.uploadDisabled", { ns: "common" })
			});
			return;
		}
		if (!isAllowedFileExtension(file.name, file.type, fileConfig.allowed_file_types || [], fileConfig.allowed_file_extensions || [])) {
			notify({
				type: "error",
				message: `${t("fileUploader.fileExtensionNotSupport", { ns: "common" })} ${file.type}`
			});
			return;
		}
		const allowedFileTypes = fileConfig.allowed_file_types;
		if (!checkSizeLimit(getSupportFileType(file.name, file.type, allowedFileTypes?.includes(SupportUploadFileTypes.custom)), file.size)) return;
		const reader = new FileReader();
		const isImage = file.type.startsWith("image");
		reader.addEventListener("load", () => {
			const uploadingFile = {
				id: v4(),
				name: file.name,
				type: file.type,
				size: file.size,
				progress: 0,
				transferMethod: TransferMethod.local_file,
				supportFileType: getSupportFileType(file.name, file.type, allowedFileTypes?.includes(SupportUploadFileTypes.custom)),
				originalFile: file,
				base64Url: isImage ? reader.result : ""
			};
			handleAddFile(uploadingFile);
			fileUpload({
				file: uploadingFile.originalFile,
				onProgressCallback: (progress) => {
					handleUpdateFile({
						...uploadingFile,
						progress
					});
				},
				onSuccessCallback: (res) => {
					handleUpdateFile({
						...uploadingFile,
						uploadedId: res.id,
						progress: 100
					});
				},
				onErrorCallback: (error) => {
					notify({
						type: "error",
						message: getFileUploadErrorMessage(error, t("fileUploader.uploadFromComputerUploadError", { ns: "common" }), t)
					});
					handleUpdateFile({
						...uploadingFile,
						progress: -1
					});
				}
			}, !!params.token);
		}, false);
		reader.addEventListener("error", () => {
			notify({
				type: "error",
				message: t("fileUploader.uploadFromComputerReadError", { ns: "common" })
			});
		}, false);
		reader.readAsDataURL(file);
	}, [
		noNeedToCheckEnable,
		checkSizeLimit,
		notify,
		t,
		handleAddFile,
		handleUpdateFile,
		params.token,
		fileConfig?.allowed_file_types,
		fileConfig?.allowed_file_extensions,
		fileConfig?.enabled
	]);
	const handleClipboardPasteFile = useCallback((e) => {
		const file = e.clipboardData?.files[0];
		const text = e.clipboardData?.getData("text/plain");
		if (file && !text) {
			e.preventDefault();
			handleLocalFileUpload(file);
		}
	}, [handleLocalFileUpload]);
	const [isDragActive, setIsDragActive] = useState(false);
	return {
		handleAddFile,
		handleUpdateFile,
		handleRemoveFile,
		handleReUploadFile,
		handleLoadFileFromLink,
		handleLoadFileFromLinkSuccess,
		handleLoadFileFromLinkError,
		handleClearFiles,
		handleLocalFileUpload,
		handleClipboardPasteFile,
		isDragActive,
		handleDragFileEnter: useCallback((e) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragActive(true);
		}, []),
		handleDragFileOver: useCallback((e) => {
			e.preventDefault();
			e.stopPropagation();
		}, []),
		handleDragFileLeave: useCallback((e) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragActive(false);
		}, []),
		handleDropFile: useCallback((e) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragActive(false);
			const file = e.dataTransfer.files[0];
			if (file) handleLocalFileUpload(file);
		}, [handleLocalFileUpload])
	};
};
//#endregion
//#region app/components/base/file-uploader/file-input.tsx
var FileInput = ({ fileConfig }) => {
	const files = useStore((s) => s.files);
	const { handleLocalFileUpload } = useFile(fileConfig);
	const handleChange = (e) => {
		const targetFiles = e.target.files;
		if (targetFiles) if (fileConfig.number_limits) {
			for (let i = 0; i < targetFiles.length; i++) if (i + 1 + files.length <= fileConfig.number_limits) handleLocalFileUpload(targetFiles[i]);
		} else handleLocalFileUpload(targetFiles[0]);
	};
	const allowedFileTypes = fileConfig.allowed_file_types;
	return /* @__PURE__ */ jsx("input", {
		className: "absolute inset-0 block w-full cursor-pointer text-[0] opacity-0 disabled:cursor-not-allowed",
		onClick: (e) => e.target.value = "",
		type: "file",
		onChange: handleChange,
		accept: (allowedFileTypes?.includes(SupportUploadFileTypes.custom) ? fileConfig.allowed_file_extensions || [] : (allowedFileTypes?.map((type) => FILE_EXTS[type]) || []).flat().map((item) => `.${item}`)).join(","),
		disabled: !!(fileConfig.number_limits && files.length >= fileConfig?.number_limits),
		multiple: !!fileConfig.number_limits && fileConfig.number_limits > 1
	});
};
//#endregion
//#region app/components/base/file-uploader/file-from-link-or-local/index.tsx
var FileFromLinkOrLocal = ({ showFromLink = true, showFromLocal = true, trigger, fileConfig }) => {
	const { t } = useTranslation();
	const files = useStore((s) => s.files);
	const [open, setOpen] = useState(false);
	const [url, setUrl] = useState("");
	const [showError, setShowError] = useState(false);
	const { handleLoadFileFromLink } = useFile(fileConfig);
	const disabled = !!fileConfig.number_limits && files.length >= fileConfig.number_limits;
	/* v8 ignore next -- fallback for missing i18n key is not reliably testable under current global translation mocks in jsdom @preserve */
	const fileLinkPlaceholderText = t("fileUploader.pasteFileLinkInputPlaceholder", { ns: "common" }) || "";
	const handleSaveUrl = () => {
		/* v8 ignore next -- guarded by UI-level disabled state (`disabled={!url || disabled}`), not reachable in jsdom click flow  @preserve */
		if (!url) return;
		if (!FILE_URL_REGEX.test(url)) {
			setShowError(true);
			return;
		}
		handleLoadFileFromLink(url);
		setUrl("");
	};
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		placement: "top",
		offset: 4,
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen((v) => !v),
			asChild: true,
			children: trigger(open)
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[1001]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "w-[280px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-3 shadow-lg",
				children: [
					showFromLink && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
						className: cn("flex h-8 items-center rounded-lg border border-components-input-border-active bg-components-input-bg-active p-1 shadow-xs", showError && "border-components-input-border-destructive"),
						children: [/* @__PURE__ */ jsx("input", {
							className: "mr-0.5 block grow appearance-none bg-transparent px-1 outline-none system-sm-regular",
							placeholder: fileLinkPlaceholderText,
							value: url,
							onChange: (e) => {
								setShowError(false);
								setUrl(e.target.value.trim());
							},
							disabled
						}), /* @__PURE__ */ jsx(Button, {
							className: "shrink-0",
							size: "small",
							variant: "primary",
							disabled: !url || disabled,
							onClick: handleSaveUrl,
							children: t("operation.ok", { ns: "common" })
						})]
					}), showError && /* @__PURE__ */ jsx("div", {
						className: "mt-0.5 text-text-destructive body-xs-regular",
						children: t("fileUploader.pasteFileLinkInvalid", { ns: "common" })
					})] }),
					showFromLink && showFromLocal && /* @__PURE__ */ jsxs("div", {
						className: "flex h-7 items-center p-2 text-text-quaternary system-2xs-medium-uppercase",
						children: [
							/* @__PURE__ */ jsx("div", { className: "mr-2 h-px w-[93px] bg-gradient-to-l from-[rgba(16,24,40,0.08)]" }),
							"OR",
							/* @__PURE__ */ jsx("div", { className: "ml-2 h-px w-[93px] bg-gradient-to-r from-[rgba(16,24,40,0.08)]" })
						]
					}),
					showFromLocal && /* @__PURE__ */ jsxs(Button, {
						className: "relative w-full",
						variant: "secondary-accent",
						disabled,
						children: [
							/* @__PURE__ */ jsx(Nf, { className: "mr-1 h-4 w-4" }),
							t("fileUploader.uploadFromComputer", { ns: "common" }),
							/* @__PURE__ */ jsx(FileInput, { fileConfig })
						]
					})
				]
			})
		})]
	});
};
var file_from_link_or_local_default = memo(FileFromLinkOrLocal);
//#endregion
//#region app/components/base/file-uploader/file-uploader-in-attachment/index.tsx
var FileUploaderInAttachment = ({ isDisabled, fileConfig }) => {
	const { t } = useTranslation();
	const files = useStore((s) => s.files);
	const { handleRemoveFile, handleReUploadFile } = useFile(fileConfig);
	const options = [{
		value: TransferMethod.local_file,
		label: t("fileUploader.uploadFromComputer", { ns: "common" }),
		icon: /* @__PURE__ */ jsx(Nf, { className: "h-4 w-4" })
	}, {
		value: TransferMethod.remote_url,
		label: t("fileUploader.pasteFileLink", { ns: "common" }),
		icon: /* @__PURE__ */ jsx(xm, { className: "h-4 w-4" })
	}];
	const renderButton = useCallback((option, open) => {
		return /* @__PURE__ */ jsxs(Button, {
			variant: "tertiary",
			className: cn("relative grow", open && "bg-components-button-tertiary-bg-hover"),
			disabled: !!(fileConfig.number_limits && files.length >= fileConfig.number_limits),
			children: [
				option.icon,
				/* @__PURE__ */ jsx("span", {
					className: "ml-1",
					children: option.label
				}),
				option.value === TransferMethod.local_file && /* @__PURE__ */ jsx(FileInput, { fileConfig })
			]
		}, option.value);
	}, [fileConfig, files.length]);
	const renderTrigger = useCallback((option) => {
		return (open) => renderButton(option, open);
	}, [renderButton]);
	const renderOption = useCallback((option) => {
		if (option.value === TransferMethod.local_file && fileConfig?.allowed_file_upload_methods?.includes(TransferMethod.local_file)) return renderButton(option);
		if (option.value === TransferMethod.remote_url && fileConfig?.allowed_file_upload_methods?.includes(TransferMethod.remote_url)) return /* @__PURE__ */ jsx(file_from_link_or_local_default, {
			showFromLocal: false,
			trigger: renderTrigger(option),
			fileConfig
		}, option.value);
	}, [
		renderButton,
		renderTrigger,
		fileConfig
	]);
	return /* @__PURE__ */ jsxs("div", { children: [!isDisabled && /* @__PURE__ */ jsx("div", {
		className: "flex items-center space-x-1",
		children: options.map(renderOption)
	}), /* @__PURE__ */ jsx("div", {
		className: "mt-1 space-y-1",
		children: files.map((file) => /* @__PURE__ */ jsx(file_item_default, {
			file,
			showDeleteAction: !isDisabled,
			showDownloadAction: false,
			onRemove: () => handleRemoveFile(file.id),
			onReUpload: () => handleReUploadFile(file.id),
			canPreview: fileConfig.preview_config?.file_type_list?.includes(file.type),
			previewMode: fileConfig.preview_config?.mode
		}, file.id))
	})] });
};
var FileUploaderInAttachmentWrapper = ({ value, onChange, fileConfig, isDisabled }) => {
	return /* @__PURE__ */ jsx(FileContextProvider, {
		value,
		onChange,
		children: /* @__PURE__ */ jsx(FileUploaderInAttachment, {
			isDisabled,
			fileConfig
		})
	});
};
//#endregion
//#region app/components/base/file-uploader/file-uploader-in-chat-input/index.tsx
var FileUploaderInChatInput = ({ fileConfig, readonly }) => {
	const renderTrigger = useCallback((open) => {
		return /* @__PURE__ */ jsx(ActionButton, {
			size: "l",
			className: cn(open && "bg-state-base-hover"),
			disabled: readonly,
			children: /* @__PURE__ */ jsx(z2, { className: "h-5 w-5" })
		});
	}, []);
	if (readonly) return renderTrigger(false);
	return /* @__PURE__ */ jsx(file_from_link_or_local_default, {
		trigger: renderTrigger,
		fileConfig,
		showFromLocal: fileConfig?.allowed_file_upload_methods?.includes(TransferMethod.local_file),
		showFromLink: fileConfig?.allowed_file_upload_methods?.includes(TransferMethod.remote_url)
	});
};
var file_uploader_in_chat_input_default = memo(FileUploaderInChatInput);
//#endregion
//#region app/components/base/file-uploader/audio-preview.tsx
var AudioPreview = ({ url, title, onCancel }) => {
	fe("esc", onCancel);
	return createPortal(/* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-8",
		onClick: (e) => e.stopPropagation(),
		tabIndex: -1,
		children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("audio", {
			controls: true,
			title,
			autoPlay: false,
			preload: "metadata",
			children: /* @__PURE__ */ jsx("source", {
				type: "audio/mpeg",
				src: url,
				className: "max-h-full max-w-full"
			})
		}) }), /* @__PURE__ */ jsx("div", {
			className: "absolute right-6 top-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-white/[0.08] backdrop-blur-[2px]",
			onClick: onCancel,
			children: /* @__PURE__ */ jsx("span", {
				className: "i-ri-close-line h-4 w-4 text-gray-500",
				"data-testid": "close-btn"
			})
		})]
	}), document.body);
};
//#endregion
//#region app/components/base/file-uploader/dynamic-pdf-preview.tsx
var DynamicPdfPreview = dynamic((() => {
	if (typeof window !== "undefined") return import("./pdf-preview-5rhzlXY9.js");
}), { ssr: false });
//#endregion
//#region app/components/base/file-uploader/video-preview.tsx
var VideoPreview = ({ url, title, onCancel }) => {
	fe("esc", onCancel);
	return createPortal(/* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-8",
		onClick: (e) => e.stopPropagation(),
		tabIndex: -1,
		children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("video", {
			controls: true,
			title,
			autoPlay: false,
			preload: "metadata",
			children: /* @__PURE__ */ jsx("source", {
				type: "video/mp4",
				src: url,
				className: "max-h-full max-w-full"
			})
		}) }), /* @__PURE__ */ jsx("div", {
			className: "absolute right-6 top-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-white/[0.08] backdrop-blur-[2px]",
			onClick: onCancel,
			children: /* @__PURE__ */ jsx("span", {
				className: "i-ri-close-line h-4 w-4 text-gray-500",
				"data-testid": "video-preview-close-btn"
			})
		})]
	}), document.body);
};
//#endregion
//#region app/components/base/file-uploader/file-uploader-in-chat-input/file-item.tsx
var FileItem = ({ file, showDeleteAction, showDownloadAction = true, onRemove, onReUpload, canPreview }) => {
	const { id, name, type, progress, url, base64Url, isRemote } = file;
	const [previewUrl, setPreviewUrl] = useState("");
	const ext = getFileExtension(name, type, isRemote);
	const uploadError = progress === -1;
	let tmp_preview_url = url || base64Url;
	if (!tmp_preview_url && file?.originalFile) tmp_preview_url = URL.createObjectURL(file.originalFile.slice()).toString();
	const download_url = url ? `${url}&as_attachment=true` : base64Url;
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: cn("group/file-item relative h-[68px] w-[144px] rounded-lg border-[0.5px] border-components-panel-border bg-components-card-bg p-2 shadow-xs", !uploadError && "hover:bg-components-card-bg-alt", uploadError && "border border-state-destructive-border bg-state-destructive-hover", uploadError && "bg-state-destructive-hover-alt hover:border-[0.5px] hover:border-state-destructive-border"),
			children: [
				showDeleteAction && /* @__PURE__ */ jsx(Button, {
					className: "absolute -right-1.5 -top-1.5 z-[11] hidden h-5 w-5 rounded-full p-0 group-hover/file-item:flex",
					onClick: () => onRemove?.(id),
					"data-testid": "delete-button",
					children: /* @__PURE__ */ jsx("span", { className: "i-ri-close-line h-4 w-4 text-components-button-secondary-text" })
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mb-1 line-clamp-2 h-8 cursor-pointer break-all text-text-tertiary system-xs-medium",
					title: name,
					onClick: () => canPreview && setPreviewUrl(tmp_preview_url || ""),
					children: name
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative flex items-center justify-between",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center text-text-tertiary system-2xs-medium-uppercase",
							children: [
								/* @__PURE__ */ jsx(file_type_icon_default, {
									size: "sm",
									type: getFileAppearanceType(name, type),
									className: "mr-1"
								}),
								ext && /* @__PURE__ */ jsxs(Fragment$1, { children: [ext, /* @__PURE__ */ jsx("div", {
									className: "mx-1",
									children: "·"
								})] }),
								!!file.size && formatFileSize(file.size)
							]
						}),
						showDownloadAction && download_url && /* @__PURE__ */ jsx(ActionButton, {
							size: "m",
							className: "absolute -right-1 -top-1 hidden group-hover/file-item:flex",
							onClick: (e) => {
								e.stopPropagation();
								downloadUrl({
									url: download_url || "",
									fileName: name,
									target: "_blank"
								});
							},
							"data-testid": "download-button",
							children: /* @__PURE__ */ jsx("span", { className: "i-ri-download-line h-3.5 w-3.5 text-text-tertiary" })
						}),
						progress >= 0 && !fileIsUploaded(file) && /* @__PURE__ */ jsx(progress_circle_default, {
							percentage: progress,
							size: 12,
							className: "shrink-0"
						}),
						uploadError && /* @__PURE__ */ jsx("span", {
							className: "i-custom-vender-other-replay-line h-4 w-4 cursor-pointer text-text-tertiary",
							onClick: () => onReUpload?.(id),
							"data-testid": "replay-icon",
							role: "button",
							tabIndex: 0
						})
					]
				})
			]
		}),
		type.split("/")[0] === "audio" && canPreview && previewUrl && /* @__PURE__ */ jsx(AudioPreview, {
			title: name,
			url: previewUrl,
			onCancel: () => setPreviewUrl("")
		}),
		type.split("/")[0] === "video" && canPreview && previewUrl && /* @__PURE__ */ jsx(VideoPreview, {
			title: name,
			url: previewUrl,
			onCancel: () => setPreviewUrl("")
		}),
		type.split("/")[1] === "pdf" && canPreview && previewUrl && /* @__PURE__ */ jsx(DynamicPdfPreview, {
			url: previewUrl,
			onCancel: () => {
				setPreviewUrl("");
			}
		})
	] });
};
//#endregion
//#region app/components/base/file-uploader/file-uploader-in-chat-input/file-image-item.tsx
var FileImageItem = ({ file, showDeleteAction, showDownloadAction, canPreview, onRemove, onReUpload }) => {
	const { id, progress, base64Url, url, name } = file;
	const [imagePreviewUrl, setImagePreviewUrl] = useState("");
	const download_url = url ? `${url}&as_attachment=true` : base64Url;
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
		className: "group/file-image relative cursor-pointer",
		onClick: () => canPreview && setImagePreviewUrl(base64Url || url || ""),
		children: [
			showDeleteAction && /* @__PURE__ */ jsx(Button, {
				className: "absolute -right-1.5 -top-1.5 z-[11] hidden h-5 w-5 rounded-full p-0 group-hover/file-image:flex",
				onClick: () => onRemove?.(id),
				children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-components-button-secondary-text" })
			}),
			/* @__PURE__ */ jsx(FileImageRender, {
				className: "h-[68px] w-[68px] shadow-md",
				imageUrl: base64Url || url || "",
				showDownloadAction
			}),
			progress >= 0 && !fileIsUploaded(file) && /* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 z-10 flex items-center justify-center border-[2px] border-effects-image-frame bg-background-overlay-alt",
				children: /* @__PURE__ */ jsx(progress_circle_default, {
					percentage: progress,
					size: 12,
					circleStrokeColor: "stroke-components-progress-white-border",
					circleFillColor: "fill-transparent",
					sectorFillColor: "fill-components-progress-white-progress"
				})
			}),
			progress === -1 && /* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 z-10 flex items-center justify-center border-[2px] border-state-destructive-border bg-background-overlay-destructive",
				children: /* @__PURE__ */ jsx(Icon, {
					className: "h-5 w-5",
					onClick: () => onReUpload?.(id)
				})
			}),
			showDownloadAction && /* @__PURE__ */ jsx("div", {
				className: "absolute inset-0.5 z-10 hidden bg-background-overlay-alt bg-opacity-[0.3] group-hover/file-image:block",
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute bottom-0.5 right-0.5  flex h-6 w-6 items-center justify-center rounded-lg bg-components-actionbar-bg shadow-md",
					onClick: (e) => {
						e.stopPropagation();
						downloadUrl({
							url: download_url || "",
							fileName: name,
							target: "_blank"
						});
					},
					children: /* @__PURE__ */ jsx(we, { className: "h-4 w-4 text-text-tertiary" })
				})
			})
		]
	}), imagePreviewUrl && canPreview && /* @__PURE__ */ jsx(ImagePreview, {
		title: name,
		url: imagePreviewUrl,
		onCancel: () => setImagePreviewUrl("")
	})] });
};
//#endregion
//#region app/components/base/file-uploader/file-uploader-in-chat-input/file-list.tsx
var FileList = ({ className, files, onReUpload, onRemove, showDeleteAction = true, showDownloadAction = false, canPreview = true }) => {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-wrap gap-2", className),
		"data-testid": "file-list",
		children: files.map((file) => {
			if (file.supportFileType === SupportUploadFileTypes.image) return /* @__PURE__ */ jsx(FileImageItem, {
				file,
				showDeleteAction,
				showDownloadAction,
				onRemove,
				onReUpload,
				canPreview
			}, file.id);
			return /* @__PURE__ */ jsx(FileItem, {
				file,
				showDeleteAction,
				showDownloadAction,
				onRemove,
				onReUpload,
				canPreview
			}, file.id);
		})
	});
};
var FileListInChatInput = ({ fileConfig }) => {
	const files = useStore((s) => s.files);
	const { handleRemoveFile, handleReUploadFile } = useFile(fileConfig);
	return /* @__PURE__ */ jsx(FileList, {
		files,
		onReUpload: handleReUploadFile,
		onRemove: handleRemoveFile
	});
};
//#endregion
export { useFile as a, useFileStore as c, FileUploaderInAttachmentWrapper as i, FileListInChatInput as n, useFileSizeLimit as o, file_uploader_in_chat_input_default as r, FileContextProvider as s, FileList as t };
