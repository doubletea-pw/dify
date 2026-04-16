import { E as Dm, Gr as s7, N as Fl, Pr as pG, Un as c4, _ as CH, c as AD, ct as M6, ht as Nf, ir as ft, rr as f1, zr as r2 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as useShallow } from "./shallow-CK1lOAji.js";
import { n as useBoolean, t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { n as useContext$1 } from "./dist-mUzjAi-W.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as Divider } from "./divider-DZD56ykp.js";
import { S as IS_CE_EDITION, St as object, _t as boolean, ht as any, it as OnlineDriveFileType, rt as DatasourceType, st as BaseFieldType, wt as string, xt as number } from "./config-Dopncj5R.js";
import { Ir as useDatasetDetailContextWithSelector, Mt as document_file_icon_default, Nt as file_type_icon_default, Pt as FileAppearanceTypeEnum, ir as produce, kr as Icon$4, kt as summary_label_default, or as ChunkingMode, sr as CrawlStep, wt as PreviewSlice, yr as Icon$3 } from "./hooks-Bj_4KA1b.js";
import { T as toast, g as upload, h as ssePost } from "./base-BuKAg6Le.js";
import { t as IconBase } from "./IconBase-CEF_UoQI.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as Input } from "./input-BOHL-qYi.js";
import { t as Loading } from "./loading-BryKikzY.js";
import { r as ToastContext } from "./toast-BY3OifkP.js";
import { l as Theme } from "./app-DPjSIfgb.js";
import { f as FILE_EXTS } from "./var-DPpHtpXT.js";
import { a as useLocale, n as useDocLink, o as LanguagesSupported } from "./i18n-lDm19WzR.js";
import { t as useDebounceFn } from "./useDebounceFn-Y4NS6c4S.js";
import { t as Checkbox } from "./checkbox-DTSgkYdc.js";
import { n as ACCOUNT_SETTING_TAB } from "./constants-P0J540jJ.js";
import { r as useModalContextSelector } from "./modal-context-CphlqvPm.js";
import { N as useGetDataSourceAuth, _t as usePublishedPipelinePreProcessingParams, rt as useDraftPipelinePreProcessingParams } from "./use-refresh-plugin-list-C8aKRYG-.js";
import { t as dynamic } from "./dynamic-6-R69YAE.js";
import { n as formatNumber, o as getFileExtension$1, t as formatFileSize } from "./format-BCVnrx09.js";
import { Bt as Icon$5 } from "./prompt-editor-PJuCbabP.js";
import { o as useFileSupportTypes, s as useFileUploadConfig } from "./use-common-BJ1aZaXJ.js";
import { t as useTheme } from "./use-theme-3YxPQV4B.js";
import { n as useAppForm } from "./form-D-kYI7ic.js";
import { t as ui_default } from "./ui-hwb8ZSx9.js";
import { a as getFileUploadErrorMessage } from "./utils-Dh7W533Q.js";
import { n as _extends, t as _objectWithoutPropertiesLoose } from "./objectWithoutPropertiesLoose-YXuGTkTk.js";
import { c as BaseField, l as useDataSourceStore, o as useConfigurations, s as useInitialData, u as useDataSourceStoreWithSelector } from "./hooks-DYOKBJw_.js";
import * as React$1 from "react";
import { PureComponent, createElement, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/datasets/common/image-uploader/constants.ts
var ACCEPT_TYPES = [
	"jpg",
	"jpeg",
	"png",
	"gif"
];
//#endregion
//#region app/components/datasets/common/image-uploader/utils.ts
var getFileType$1 = (currentFile) => {
	if (!currentFile) return "";
	const arr = currentFile.name.split(".");
	return arr[arr.length - 1];
};
var traverseFileEntry = (entry, prefix = "") => {
	return new Promise((resolve) => {
		if (entry.isFile) entry.file((file) => {
			file.relativePath = `${prefix}${file.name}`;
			resolve([file]);
		});
		else if (entry.isDirectory) {
			const reader = entry.createReader();
			const entries = [];
			const read = () => {
				reader.readEntries(async (results) => {
					if (!results.length) resolve((await Promise.all(entries.map((ent) => traverseFileEntry(ent, `${prefix}${entry.name}/`)))).flat());
					else {
						entries.push(...results);
						read();
					}
				});
			};
			read();
		} else resolve([]);
	});
};
var fileIsUploaded = (file) => {
	if (file.uploadedId || file.progress === 100) return true;
};
var getNumberValue = (value) => {
	if (value === void 0 || value === null) return 0;
	if (typeof value === "number") return value;
	if (typeof value === "string") return Number(value);
	return 0;
};
var getFileUploadConfig = (fileUploadConfigResponse) => {
	if (!fileUploadConfigResponse) return {
		imageFileSizeLimit: 2,
		imageFileBatchLimit: 5,
		singleChunkAttachmentLimit: 10
	};
	const { image_file_batch_limit, single_chunk_attachment_limit, attachment_image_file_size_limit } = fileUploadConfigResponse;
	const imageFileSizeLimit = getNumberValue(attachment_image_file_size_limit);
	const imageFileBatchLimit = getNumberValue(image_file_batch_limit);
	const singleChunkAttachmentLimit = getNumberValue(single_chunk_attachment_limit);
	return {
		imageFileSizeLimit: imageFileSizeLimit > 0 ? imageFileSizeLimit : 2,
		imageFileBatchLimit: imageFileBatchLimit > 0 ? imageFileBatchLimit : 5,
		singleChunkAttachmentLimit: singleChunkAttachmentLimit > 0 ? singleChunkAttachmentLimit : 10
	};
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/local-file/components/file-list-item.tsx
var SimplePieChart = dynamic(() => import("./simple-pie-chart-B53FWZXx.js").then((n) => n.n), { ssr: false });
var FileListItem = ({ fileItem, onPreview, onRemove }) => {
	const { theme } = useTheme();
	const chartColor = useMemo(() => theme === Theme.dark ? "#5289ff" : "#296dff", [theme]);
	const isUploading = fileItem.progress >= 0 && fileItem.progress < 100;
	const isError = fileItem.progress === -2;
	const handleClick = () => {
		onPreview(fileItem.file);
	};
	const handleRemove = (e) => {
		e.stopPropagation();
		onRemove(fileItem.fileID);
	};
	return /* @__PURE__ */ jsxs("div", {
		onClick: handleClick,
		className: cn("flex h-12 items-center rounded-lg border border-components-panel-border bg-components-panel-on-panel-item-bg shadow-xs shadow-shadow-shadow-4", isError && "border-state-destructive-border bg-state-destructive-hover"),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex w-12 shrink-0 items-center justify-center",
				children: /* @__PURE__ */ jsx(document_file_icon_default, {
					size: "lg",
					className: "shrink-0",
					name: fileItem.file.name,
					extension: getFileType$1(fileItem.file)
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex shrink grow flex-col gap-0.5",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex w-full",
					children: /* @__PURE__ */ jsx("div", {
						className: "w-0 grow truncate text-xs text-text-secondary",
						children: fileItem.file.name
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "w-full truncate text-2xs leading-3 text-text-tertiary",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "uppercase",
							children: getFileType$1(fileItem.file)
						}),
						/* @__PURE__ */ jsx("span", {
							className: "px-1 text-text-quaternary",
							children: "·"
						}),
						/* @__PURE__ */ jsx("span", { children: formatFileSize(fileItem.file.size) })
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex w-16 shrink-0 items-center justify-end gap-1 pr-3",
				children: [
					isUploading && /* @__PURE__ */ jsx(SimplePieChart, {
						percentage: fileItem.progress,
						stroke: chartColor,
						fill: chartColor,
						animationDuration: 0
					}),
					isError && /* @__PURE__ */ jsx(ft, { className: "size-4 text-text-destructive" }),
					/* @__PURE__ */ jsx("span", {
						className: "flex h-6 w-6 cursor-pointer items-center justify-center",
						onClick: handleRemove,
						children: /* @__PURE__ */ jsx(M6, { className: "size-4 text-text-tertiary" })
					})
				]
			})
		]
	});
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/local-file/components/upload-dropzone.tsx
var UploadDropzone = ({ dropRef, dragRef, fileUploaderRef, dragging, supportBatchUpload, supportTypesShowNames, fileUploadConfig, acceptTypes, onSelectFile, onFileChange, allowedExtensions }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("input", {
		ref: fileUploaderRef,
		id: "fileUploader",
		className: "hidden",
		type: "file",
		multiple: supportBatchUpload,
		accept: acceptTypes.join(","),
		onChange: onFileChange
	}), /* @__PURE__ */ jsxs("div", {
		ref: dropRef,
		className: cn("relative box-border flex min-h-20 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-components-dropzone-border bg-components-dropzone-bg px-4 py-3 text-xs leading-4 text-text-tertiary", dragging && "border-components-dropzone-border-accent bg-components-dropzone-bg-accent"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex min-h-5 items-center justify-center text-sm leading-4 text-text-secondary",
				children: [/* @__PURE__ */ jsx(Nf, { className: "mr-2 size-5" }), /* @__PURE__ */ jsxs("span", { children: [supportBatchUpload ? t("stepOne.uploader.button", { ns: "datasetCreation" }) : t("stepOne.uploader.buttonSingleFile", { ns: "datasetCreation" }), allowedExtensions.length > 0 && /* @__PURE__ */ jsx("label", {
					className: "ml-1 cursor-pointer text-text-accent",
					onClick: onSelectFile,
					children: t("stepOne.uploader.browse", { ns: "datasetCreation" })
				})] })]
			}),
			/* @__PURE__ */ jsx("div", { children: t("stepOne.uploader.tip", {
				ns: "datasetCreation",
				size: fileUploadConfig.file_size_limit,
				supportTypes: supportTypesShowNames,
				batchCount: fileUploadConfig.batch_count_limit,
				totalCount: fileUploadConfig.file_upload_limit
			}) }),
			dragging && /* @__PURE__ */ jsx("div", {
				ref: dragRef,
				className: "absolute left-0 top-0 h-full w-full"
			})
		]
	})] });
};
//#endregion
//#region app/components/datasets/create/file-uploader/hooks/use-file-upload.ts
var useFileUpload = ({ fileList, prepareFileList, onFileUpdate, onFileListUpdate, onPreview, supportBatchUpload = false, allowedExtensions }) => {
	const { t } = useTranslation();
	const { notify } = useContext$1(ToastContext);
	const locale = useLocale();
	const [dragging, setDragging] = useState(false);
	const dropRef = useRef(null);
	const dragRef = useRef(null);
	const fileUploaderRef = useRef(null);
	const fileListRef = useRef([]);
	const hideUpload = !supportBatchUpload && fileList.length > 0;
	const { data: fileUploadConfigResponse } = useFileUploadConfig();
	const { data: supportFileTypesResponse } = useFileSupportTypes();
	const supportTypes = useMemo(() => allowedExtensions ?? supportFileTypesResponse?.allowed_extensions ?? [], [allowedExtensions, supportFileTypesResponse?.allowed_extensions]);
	const supportTypesShowNames = useMemo(() => {
		const extensionMap = {
			md: "markdown",
			pptx: "pptx",
			htm: "html",
			xlsx: "xlsx",
			docx: "docx"
		};
		return [...supportTypes].map((item) => extensionMap[item] || item).map((item) => item.toLowerCase()).filter((item, index, self) => self.indexOf(item) === index).map((item) => item.toUpperCase()).join(locale !== LanguagesSupported[1] ? ", " : "、 ");
	}, [supportTypes, locale]);
	const acceptTypes = useMemo(() => supportTypes.map((ext) => `.${ext}`), [supportTypes]);
	const fileUploadConfig = useMemo(() => ({
		file_size_limit: fileUploadConfigResponse?.file_size_limit ?? 15,
		batch_count_limit: supportBatchUpload ? fileUploadConfigResponse?.batch_count_limit ?? 5 : 1,
		file_upload_limit: supportBatchUpload ? fileUploadConfigResponse?.file_upload_limit ?? 5 : 1
	}), [fileUploadConfigResponse, supportBatchUpload]);
	const isValid = useCallback((file) => {
		const { size } = file;
		const ext = `.${getFileExtension$1(file.name)}`;
		const isValidType = acceptTypes.includes(ext.toLowerCase());
		if (!isValidType) notify({
			type: "error",
			message: t("stepOne.uploader.validation.typeError", { ns: "datasetCreation" })
		});
		const isValidSize = size <= fileUploadConfig.file_size_limit * 1024 * 1024;
		if (!isValidSize) notify({
			type: "error",
			message: t("stepOne.uploader.validation.size", {
				ns: "datasetCreation",
				size: fileUploadConfig.file_size_limit
			})
		});
		return isValidType && isValidSize;
	}, [
		fileUploadConfig,
		notify,
		t,
		acceptTypes
	]);
	const fileUpload = useCallback(async (fileItem) => {
		const formData = new FormData();
		formData.append("file", fileItem.file);
		const onProgress = (e) => {
			if (e.lengthComputable) onFileUpdate(fileItem, Math.floor(e.loaded / e.total * 100), fileListRef.current);
		};
		return upload({
			xhr: new XMLHttpRequest(),
			data: formData,
			onprogress: onProgress
		}, false, void 0, "?source=datasets").then((res) => {
			const completeFile = {
				fileID: fileItem.fileID,
				file: res,
				progress: -1
			};
			const index = fileListRef.current.findIndex((item) => item.fileID === fileItem.fileID);
			fileListRef.current[index] = completeFile;
			onFileUpdate(completeFile, 100, fileListRef.current);
			return Promise.resolve({ ...completeFile });
		}).catch((e) => {
			notify({
				type: "error",
				message: getFileUploadErrorMessage(e, t("stepOne.uploader.failed", { ns: "datasetCreation" }), t)
			});
			onFileUpdate(fileItem, -2, fileListRef.current);
			return Promise.resolve({ ...fileItem });
		}).finally();
	}, [
		notify,
		onFileUpdate,
		t
	]);
	const uploadBatchFiles = useCallback((bFiles) => {
		bFiles.forEach((bf) => bf.progress = 0);
		return Promise.all(bFiles.map(fileUpload));
	}, [fileUpload]);
	const uploadMultipleFiles = useCallback(async (files) => {
		const batchCountLimit = fileUploadConfig.batch_count_limit;
		const length = files.length;
		let start = 0;
		let end = 0;
		while (start < length) {
			if (start + batchCountLimit > length) end = length;
			else end = start + batchCountLimit;
			await uploadBatchFiles(files.slice(start, end));
			start = end;
		}
	}, [fileUploadConfig, uploadBatchFiles]);
	const initialUpload = useCallback((files) => {
		const filesCountLimit = fileUploadConfig.file_upload_limit;
		if (!files.length) return false;
		if (files.length + fileList.length > filesCountLimit && !IS_CE_EDITION) {
			notify({
				type: "error",
				message: t("stepOne.uploader.validation.filesNumber", {
					ns: "datasetCreation",
					filesNumber: filesCountLimit
				})
			});
			return false;
		}
		const preparedFiles = files.map((file, index) => ({
			fileID: `file${index}-${Date.now()}`,
			file,
			progress: -1
		}));
		const newFiles = [...fileListRef.current, ...preparedFiles];
		prepareFileList(newFiles);
		fileListRef.current = newFiles;
		uploadMultipleFiles(preparedFiles);
	}, [
		prepareFileList,
		uploadMultipleFiles,
		notify,
		t,
		fileList,
		fileUploadConfig
	]);
	const traverseFileEntry = useCallback((entry, prefix = "") => {
		return new Promise((resolve) => {
			if (entry.isFile) entry.file((file) => {
				file.relativePath = `${prefix}${file.name}`;
				resolve([file]);
			});
			else if (entry.isDirectory) {
				const reader = entry.createReader();
				const entries = [];
				const read = () => {
					reader.readEntries(async (results) => {
						if (!results.length) resolve((await Promise.all(entries.map((ent) => traverseFileEntry(ent, `${prefix}${entry.name}/`)))).flat());
						else {
							entries.push(...results);
							read();
						}
					});
				};
				read();
			} else resolve([]);
		});
	}, []);
	const handleDragEnter = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.target !== dragRef.current) setDragging(true);
	}, []);
	const handleDragOver = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
	}, []);
	const handleDragLeave = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.target === dragRef.current) setDragging(false);
	}, []);
	const handleDrop = useCallback(async (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragging(false);
		if (!e.dataTransfer) return;
		let files = (await Promise.all(Array.from(e.dataTransfer.items).map((it) => {
			const entry = it.webkitGetAsEntry?.();
			if (entry) return traverseFileEntry(entry);
			const f = it.getAsFile?.();
			return f ? Promise.resolve([f]) : Promise.resolve([]);
		}))).flat();
		if (!supportBatchUpload) files = files.slice(0, 1);
		files = files.slice(0, fileUploadConfig.batch_count_limit);
		initialUpload(files.filter(isValid));
	}, [
		initialUpload,
		isValid,
		supportBatchUpload,
		traverseFileEntry,
		fileUploadConfig
	]);
	const selectHandle = useCallback(() => {
		if (fileUploaderRef.current) fileUploaderRef.current.click();
	}, []);
	const removeFile = useCallback((fileID) => {
		if (fileUploaderRef.current) fileUploaderRef.current.value = "";
		fileListRef.current = fileListRef.current.filter((item) => item.fileID !== fileID);
		onFileListUpdate?.([...fileListRef.current]);
	}, [onFileListUpdate]);
	const fileChangeHandle = useCallback((e) => {
		let files = Array.from(e.target.files ?? []);
		files = files.slice(0, fileUploadConfig.batch_count_limit);
		initialUpload(files.filter(isValid));
	}, [
		isValid,
		initialUpload,
		fileUploadConfig
	]);
	const handlePreview = useCallback((file) => {
		if (file?.id) onPreview(file);
	}, [onPreview]);
	useEffect(() => {
		const dropArea = dropRef.current;
		dropArea?.addEventListener("dragenter", handleDragEnter);
		dropArea?.addEventListener("dragover", handleDragOver);
		dropArea?.addEventListener("dragleave", handleDragLeave);
		dropArea?.addEventListener("drop", handleDrop);
		return () => {
			dropArea?.removeEventListener("dragenter", handleDragEnter);
			dropArea?.removeEventListener("dragover", handleDragOver);
			dropArea?.removeEventListener("dragleave", handleDragLeave);
			dropArea?.removeEventListener("drop", handleDrop);
		};
	}, [
		handleDragEnter,
		handleDragOver,
		handleDragLeave,
		handleDrop
	]);
	return {
		dropRef,
		dragRef,
		fileUploaderRef,
		dragging,
		fileUploadConfig,
		acceptTypes,
		supportTypesShowNames,
		hideUpload,
		selectHandle,
		fileChangeHandle,
		removeFile,
		handlePreview
	};
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/local-file/hooks/use-local-file-upload.ts
/**
* Hook for handling local file uploads in the create-from-pipeline flow.
* This is a thin wrapper around the generic useFileUpload hook that provides
* Zustand store integration for state management.
*/
var useLocalFileUpload = ({ allowedExtensions, supportBatchUpload = true }) => {
	const localFileList = useDataSourceStoreWithSelector((state) => state.localFileList);
	const dataSourceStore = useDataSourceStore();
	const fileListRef = useRef([]);
	fileListRef.current = localFileList;
	const { dropRef, dragRef, fileUploaderRef, dragging, fileUploadConfig, acceptTypes, supportTypesShowNames, hideUpload, selectHandle, fileChangeHandle, removeFile, handlePreview } = useFileUpload({
		fileList: localFileList,
		prepareFileList: useCallback((files) => {
			const { setLocalFileList } = dataSourceStore.getState();
			setLocalFileList(files);
			fileListRef.current = files;
		}, [dataSourceStore]),
		onFileUpdate: useCallback((fileItem, progress, list) => {
			const { setLocalFileList } = dataSourceStore.getState();
			setLocalFileList(produce(list, (draft) => {
				const targetIndex = draft.findIndex((file) => file.fileID === fileItem.fileID);
				if (targetIndex !== -1) draft[targetIndex] = {
					...draft[targetIndex],
					...fileItem,
					progress
				};
			}));
		}, [dataSourceStore]),
		onFileListUpdate: useCallback((files) => {
			const { setLocalFileList } = dataSourceStore.getState();
			setLocalFileList(files);
			fileListRef.current = files;
		}, [dataSourceStore]),
		onPreview: useCallback((file) => {
			const { setCurrentLocalFile } = dataSourceStore.getState();
			setCurrentLocalFile(file);
		}, [dataSourceStore]),
		supportBatchUpload,
		allowedExtensions
	});
	return {
		dropRef,
		dragRef,
		fileUploaderRef,
		dragging,
		localFileList,
		fileUploadConfig,
		acceptTypes,
		supportTypesShowNames,
		hideUpload,
		selectHandle,
		fileChangeHandle,
		removeFile,
		handlePreview
	};
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/local-file/index.tsx
var LocalFile = ({ allowedExtensions, supportBatchUpload = true }) => {
	const { dropRef, dragRef, fileUploaderRef, dragging, localFileList, fileUploadConfig, acceptTypes, supportTypesShowNames, hideUpload, selectHandle, fileChangeHandle, removeFile, handlePreview } = useLocalFileUpload({
		allowedExtensions,
		supportBatchUpload
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [!hideUpload && /* @__PURE__ */ jsx(UploadDropzone, {
			dropRef,
			dragRef,
			fileUploaderRef,
			dragging,
			supportBatchUpload,
			supportTypesShowNames,
			fileUploadConfig,
			acceptTypes,
			onSelectFile: selectHandle,
			onFileChange: fileChangeHandle,
			allowedExtensions
		}), localFileList.length > 0 && /* @__PURE__ */ jsx("div", {
			className: "mt-1 flex flex-col gap-y-1",
			children: localFileList.map((fileItem, index) => /* @__PURE__ */ jsx(FileListItem, {
				fileItem,
				onPreview: handlePreview,
				onRemove: removeFile
			}, `${fileItem.fileID}-${index}`))
		})]
	});
};
//#endregion
//#region app/components/base/notion-page-selector/search-input/index.tsx
var SearchInput = ({ value, onChange }) => {
	const { t } = useTranslation();
	const handleClear = useCallback(() => {
		onChange("");
	}, [onChange]);
	/* v8 ignore next -- i18n test mock always returns a non-empty string; runtime fallback is defensive. -- @preserve */
	const safePlaceholderText = t("dataSource.notion.selector.searchPages", { ns: "common" }) || "";
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-8 w-[200px] items-center rounded-lg bg-components-input-bg-normal p-2"),
		"data-testid": "notion-search-input-container",
		children: [
			/* @__PURE__ */ jsx("div", { className: "i-ri-search-line mr-0.5 h-4 w-4 shrink-0 text-components-input-text-placeholder" }),
			/* @__PURE__ */ jsx("input", {
				className: "min-w-0 grow appearance-none border-0 bg-transparent px-1 text-[13px] leading-[16px] text-components-input-text-filled outline-0 placeholder:text-components-input-text-placeholder",
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder: safePlaceholderText,
				"data-testid": "notion-search-input"
			}),
			value && /* @__PURE__ */ jsx("div", {
				className: "i-ri-close-circle-fill h-4 w-4 shrink-0 cursor-pointer text-components-input-text-placeholder",
				onClick: handleClear,
				"data-testid": "notion-search-input-clear"
			})
		]
	});
};
//#endregion
//#region app/components/datasets/common/credential-icon.tsx
var ICON_BG_COLORS = [
	"bg-components-icon-bg-orange-dark-solid",
	"bg-components-icon-bg-pink-solid",
	"bg-components-icon-bg-indigo-solid",
	"bg-components-icon-bg-teal-solid"
];
var CredentialIcon = ({ avatarUrl, name, size = 20, className = "" }) => {
	const [showAvatar, setShowAvatar] = useState(!!avatarUrl && avatarUrl !== "default");
	const firstLetter = useMemo(() => name.charAt(0).toUpperCase(), [name]);
	const bgColor = useMemo(() => ICON_BG_COLORS[firstLetter.charCodeAt(0) % ICON_BG_COLORS.length], [firstLetter]);
	const onImgLoadError = useCallback(() => {
		setShowAvatar(false);
	}, []);
	if (avatarUrl && avatarUrl !== "default" && showAvatar) return /* @__PURE__ */ jsx("div", {
		className: cn("flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-divider-regular", className),
		style: {
			width: `${size}px`,
			height: `${size}px`
		},
		children: /* @__PURE__ */ jsx("img", {
			src: avatarUrl,
			width: size,
			height: size,
			className: "shrink-0 object-contain",
			onError: onImgLoadError
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex shrink-0 items-center justify-center rounded-md border border-divider-regular", bgColor, className),
		style: {
			width: `${size}px`,
			height: `${size}px`
		},
		children: /* @__PURE__ */ jsx("span", {
			className: "bg-gradient-to-b from-components-avatar-shape-fill-stop-0 to-components-avatar-shape-fill-stop-100 bg-clip-text text-[13px] font-semibold leading-[1.2] text-transparent opacity-90",
			children: firstLetter
		})
	});
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/base/credential-selector/item.tsx
var Item$4 = ({ credential, isSelected, onCredentialChange }) => {
	const { avatar_url, name } = credential;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex cursor-pointer items-center gap-x-2 rounded-lg p-2 hover:bg-state-base-hover",
		onClick: useCallback(() => {
			onCredentialChange(credential.id);
		}, [credential.id, onCredentialChange]),
		children: [
			/* @__PURE__ */ jsx(CredentialIcon, {
				avatarUrl: avatar_url,
				name,
				size: 20
			}),
			/* @__PURE__ */ jsx("span", {
				className: "system-sm-medium grow truncate text-text-secondary",
				children: name
			}),
			isSelected && /* @__PURE__ */ jsx(s7, { className: "size-4 shrink-0 text-text-accent" })
		]
	});
};
var item_default$4 = React$1.memo(Item$4);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/base/credential-selector/list.tsx
var List$1 = ({ currentCredentialId, credentials, onCredentialChange }) => {
	return /* @__PURE__ */ jsx("div", {
		className: "flex w-[280px] flex-col gap-y-1 rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-1 shadow-lg shadow-shadow-shadow-5 backdrop-blur-[5px]",
		children: credentials.map((credential) => {
			return /* @__PURE__ */ jsx(item_default$4, {
				credential,
				isSelected: credential.id === currentCredentialId,
				onCredentialChange
			}, credential.id);
		})
	});
};
var list_default$1 = React$1.memo(List$1);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/base/credential-selector/trigger.tsx
var Trigger = ({ currentCredential, isOpen }) => {
	const { avatar_url, name = "" } = currentCredential || {};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex cursor-pointer items-center gap-x-2 rounded-md p-1 pr-2", isOpen ? "bg-state-base-hover" : "hover:bg-state-base-hover"),
		children: [/* @__PURE__ */ jsx(CredentialIcon, {
			avatarUrl: avatar_url,
			name,
			size: 20
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex grow items-center gap-x-1 overflow-hidden",
			children: [/* @__PURE__ */ jsx("span", {
				className: "system-md-semibold grow truncate text-text-secondary",
				children: name
			}), /* @__PURE__ */ jsx(f1, { className: "size-4 shrink-0 text-text-secondary" })]
		})]
	});
};
var trigger_default = React$1.memo(Trigger);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/base/credential-selector/index.tsx
var CredentialSelector = ({ currentCredentialId, onCredentialChange, credentials }) => {
	const [open, { toggle }] = useBoolean(false);
	const currentCredential = useMemo(() => {
		return credentials.find((cred) => cred.id === currentCredentialId);
	}, [credentials, currentCredentialId]);
	useEffect(() => {
		if (!currentCredential && credentials.length) onCredentialChange(credentials[0].id);
	}, [currentCredential, credentials]);
	const handleCredentialChange = useCallback((credentialId) => {
		onCredentialChange(credentialId);
		toggle();
	}, [onCredentialChange, toggle]);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: toggle,
		placement: "bottom-start",
		offset: { mainAxis: 4 },
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: toggle,
			className: "grow overflow-hidden",
			children: /* @__PURE__ */ jsx(trigger_default, {
				currentCredential,
				isOpen: open
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-10",
			children: /* @__PURE__ */ jsx(list_default$1, {
				currentCredentialId,
				credentials,
				onCredentialChange: handleCredentialChange
			})
		})]
	});
};
var credential_selector_default = React$1.memo(CredentialSelector);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/base/header.tsx
var Header$1 = ({ docTitle, docLink, onClickConfiguration, pluginName, ...rest }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between gap-x-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-x-1 overflow-hidden",
			children: [
				/* @__PURE__ */ jsx(credential_selector_default, { ...rest }),
				/* @__PURE__ */ jsx(Divider, {
					type: "vertical",
					className: "mx-1 h-3.5 shrink-0"
				}),
				/* @__PURE__ */ jsx(tooltip_default, {
					popupContent: t("configurationTip", {
						ns: "datasetPipeline",
						pluginName
					}),
					position: "top",
					children: /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "small",
						className: "size-6 shrink-0 px-1",
						children: /* @__PURE__ */ jsx(AD, {
							className: "h-4 w-4",
							onClick: onClickConfiguration
						})
					})
				})
			]
		}), /* @__PURE__ */ jsxs("a", {
			className: "system-xs-medium flex shrink-0 items-center gap-x-1 text-text-accent",
			href: docLink,
			target: "_blank",
			rel: "noopener noreferrer",
			children: [/* @__PURE__ */ jsx(c4, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ jsx("span", {
				title: docTitle,
				children: docTitle
			})]
		})]
	});
};
var header_default$1 = React$1.memo(Header$1);
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
	if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
	return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
		return t.__proto__ = e, t;
	}, _setPrototypeOf(t, e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
	t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
//#endregion
//#region node_modules/.pnpm/memoize-one@5.2.1/node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
	return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
	if (first === second) return true;
	if (safeIsNaN(first) && safeIsNaN(second)) return true;
	return false;
}
function areInputsEqual(newInputs, lastInputs) {
	if (newInputs.length !== lastInputs.length) return false;
	for (var i = 0; i < newInputs.length; i++) if (!isEqual(newInputs[i], lastInputs[i])) return false;
	return true;
}
function memoizeOne(resultFn, isEqual) {
	if (isEqual === void 0) isEqual = areInputsEqual;
	var lastThis;
	var lastArgs = [];
	var lastResult;
	var calledOnce = false;
	function memoized() {
		var newArgs = [];
		for (var _i = 0; _i < arguments.length; _i++) newArgs[_i] = arguments[_i];
		if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) return lastResult;
		lastResult = resultFn.apply(this, newArgs);
		calledOnce = true;
		lastThis = this;
		lastArgs = newArgs;
		return lastResult;
	}
	return memoized;
}
//#endregion
//#region node_modules/.pnpm/react-window@1.8.11_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-window/dist/index.esm.js
var now = typeof performance === "object" && typeof performance.now === "function" ? function() {
	return performance.now();
} : function() {
	return Date.now();
};
function cancelTimeout(timeoutID) {
	cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
	var start = now();
	function tick() {
		if (now() - start >= delay) callback.call(null);
		else timeoutID.id = requestAnimationFrame(tick);
	}
	var timeoutID = { id: requestAnimationFrame(tick) };
	return timeoutID;
}
var size = -1;
function getScrollbarSize(recalculate) {
	if (recalculate === void 0) recalculate = false;
	if (size === -1 || recalculate) {
		var div = document.createElement("div");
		var style = div.style;
		style.width = "50px";
		style.height = "50px";
		style.overflow = "scroll";
		document.body.appendChild(div);
		size = div.offsetWidth - div.clientWidth;
		document.body.removeChild(div);
	}
	return size;
}
var cachedRTLResult = null;
function getRTLOffsetType(recalculate) {
	if (recalculate === void 0) recalculate = false;
	if (cachedRTLResult === null || recalculate) {
		var outerDiv = document.createElement("div");
		var outerStyle = outerDiv.style;
		outerStyle.width = "50px";
		outerStyle.height = "50px";
		outerStyle.overflow = "scroll";
		outerStyle.direction = "rtl";
		var innerDiv = document.createElement("div");
		var innerStyle = innerDiv.style;
		innerStyle.width = "100px";
		innerStyle.height = "100px";
		outerDiv.appendChild(innerDiv);
		document.body.appendChild(outerDiv);
		if (outerDiv.scrollLeft > 0) cachedRTLResult = "positive-descending";
		else {
			outerDiv.scrollLeft = 1;
			if (outerDiv.scrollLeft === 0) cachedRTLResult = "negative";
			else cachedRTLResult = "positive-ascending";
		}
		document.body.removeChild(outerDiv);
		return cachedRTLResult;
	}
	return cachedRTLResult;
}
var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;
var defaultItemKey$1 = function defaultItemKey(index, data) {
	return index;
};
function createListComponent(_ref) {
	var _class;
	var getItemOffset = _ref.getItemOffset, getEstimatedTotalSize = _ref.getEstimatedTotalSize, getItemSize = _ref.getItemSize, getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment, getStartIndexForOffset = _ref.getStartIndexForOffset, getStopIndexForStartIndex = _ref.getStopIndexForStartIndex, initInstanceProps = _ref.initInstanceProps, shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange, validateProps = _ref.validateProps;
	return _class = /* @__PURE__ */ function(_PureComponent) {
		_inheritsLoose(List, _PureComponent);
		function List(props) {
			var _this = _PureComponent.call(this, props) || this;
			_this._instanceProps = initInstanceProps(_this.props, _assertThisInitialized(_this));
			_this._outerRef = void 0;
			_this._resetIsScrollingTimeoutId = null;
			_this.state = {
				instance: _assertThisInitialized(_this),
				isScrolling: false,
				scrollDirection: "forward",
				scrollOffset: typeof _this.props.initialScrollOffset === "number" ? _this.props.initialScrollOffset : 0,
				scrollUpdateWasRequested: false
			};
			_this._callOnItemsRendered = void 0;
			_this._callOnItemsRendered = memoizeOne(function(overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
				return _this.props.onItemsRendered({
					overscanStartIndex,
					overscanStopIndex,
					visibleStartIndex,
					visibleStopIndex
				});
			});
			_this._callOnScroll = void 0;
			_this._callOnScroll = memoizeOne(function(scrollDirection, scrollOffset, scrollUpdateWasRequested) {
				return _this.props.onScroll({
					scrollDirection,
					scrollOffset,
					scrollUpdateWasRequested
				});
			});
			_this._getItemStyle = void 0;
			_this._getItemStyle = function(index) {
				var _this$props = _this.props, direction = _this$props.direction, itemSize = _this$props.itemSize, layout = _this$props.layout;
				var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);
				var style;
				if (itemStyleCache.hasOwnProperty(index)) style = itemStyleCache[index];
				else {
					var _offset = getItemOffset(_this.props, index, _this._instanceProps);
					var size = getItemSize(_this.props, index, _this._instanceProps);
					var isHorizontal = direction === "horizontal" || layout === "horizontal";
					var isRtl = direction === "rtl";
					var offsetHorizontal = isHorizontal ? _offset : 0;
					itemStyleCache[index] = style = {
						position: "absolute",
						left: isRtl ? void 0 : offsetHorizontal,
						right: isRtl ? offsetHorizontal : void 0,
						top: !isHorizontal ? _offset : 0,
						height: !isHorizontal ? size : "100%",
						width: isHorizontal ? size : "100%"
					};
				}
				return style;
			};
			_this._getItemStyleCache = void 0;
			_this._getItemStyleCache = memoizeOne(function(_, __, ___) {
				return {};
			});
			_this._onScrollHorizontal = function(event) {
				var _event$currentTarget = event.currentTarget, clientWidth = _event$currentTarget.clientWidth, scrollLeft = _event$currentTarget.scrollLeft, scrollWidth = _event$currentTarget.scrollWidth;
				_this.setState(function(prevState) {
					if (prevState.scrollOffset === scrollLeft) return null;
					var direction = _this.props.direction;
					var scrollOffset = scrollLeft;
					if (direction === "rtl") switch (getRTLOffsetType()) {
						case "negative":
							scrollOffset = -scrollLeft;
							break;
						case "positive-descending":
							scrollOffset = scrollWidth - clientWidth - scrollLeft;
							break;
					}
					scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
					return {
						isScrolling: true,
						scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
						scrollOffset,
						scrollUpdateWasRequested: false
					};
				}, _this._resetIsScrollingDebounced);
			};
			_this._onScrollVertical = function(event) {
				var _event$currentTarget2 = event.currentTarget, clientHeight = _event$currentTarget2.clientHeight, scrollHeight = _event$currentTarget2.scrollHeight, scrollTop = _event$currentTarget2.scrollTop;
				_this.setState(function(prevState) {
					if (prevState.scrollOffset === scrollTop) return null;
					var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
					return {
						isScrolling: true,
						scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
						scrollOffset,
						scrollUpdateWasRequested: false
					};
				}, _this._resetIsScrollingDebounced);
			};
			_this._outerRefSetter = function(ref) {
				var outerRef = _this.props.outerRef;
				_this._outerRef = ref;
				if (typeof outerRef === "function") outerRef(ref);
				else if (outerRef != null && typeof outerRef === "object" && outerRef.hasOwnProperty("current")) outerRef.current = ref;
			};
			_this._resetIsScrollingDebounced = function() {
				if (_this._resetIsScrollingTimeoutId !== null) cancelTimeout(_this._resetIsScrollingTimeoutId);
				_this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
			};
			_this._resetIsScrolling = function() {
				_this._resetIsScrollingTimeoutId = null;
				_this.setState({ isScrolling: false }, function() {
					_this._getItemStyleCache(-1, null);
				});
			};
			return _this;
		}
		List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
			validateSharedProps$1(nextProps, prevState);
			validateProps(nextProps);
			return null;
		};
		var _proto = List.prototype;
		_proto.scrollTo = function scrollTo(scrollOffset) {
			scrollOffset = Math.max(0, scrollOffset);
			this.setState(function(prevState) {
				if (prevState.scrollOffset === scrollOffset) return null;
				return {
					scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
					scrollOffset,
					scrollUpdateWasRequested: true
				};
			}, this._resetIsScrollingDebounced);
		};
		_proto.scrollToItem = function scrollToItem(index, align) {
			if (align === void 0) align = "auto";
			var _this$props2 = this.props, itemCount = _this$props2.itemCount, layout = _this$props2.layout;
			var scrollOffset = this.state.scrollOffset;
			index = Math.max(0, Math.min(index, itemCount - 1));
			var scrollbarSize = 0;
			if (this._outerRef) {
				var outerRef = this._outerRef;
				if (layout === "vertical") scrollbarSize = outerRef.scrollWidth > outerRef.clientWidth ? getScrollbarSize() : 0;
				else scrollbarSize = outerRef.scrollHeight > outerRef.clientHeight ? getScrollbarSize() : 0;
			}
			this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps, scrollbarSize));
		};
		_proto.componentDidMount = function componentDidMount() {
			var _this$props3 = this.props, direction = _this$props3.direction, initialScrollOffset = _this$props3.initialScrollOffset, layout = _this$props3.layout;
			if (typeof initialScrollOffset === "number" && this._outerRef != null) {
				var outerRef = this._outerRef;
				if (direction === "horizontal" || layout === "horizontal") outerRef.scrollLeft = initialScrollOffset;
				else outerRef.scrollTop = initialScrollOffset;
			}
			this._callPropsCallbacks();
		};
		_proto.componentDidUpdate = function componentDidUpdate() {
			var _this$props4 = this.props, direction = _this$props4.direction, layout = _this$props4.layout;
			var _this$state = this.state, scrollOffset = _this$state.scrollOffset;
			if (_this$state.scrollUpdateWasRequested && this._outerRef != null) {
				var outerRef = this._outerRef;
				if (direction === "horizontal" || layout === "horizontal") if (direction === "rtl") switch (getRTLOffsetType()) {
					case "negative":
						outerRef.scrollLeft = -scrollOffset;
						break;
					case "positive-ascending":
						outerRef.scrollLeft = scrollOffset;
						break;
					default:
						var clientWidth = outerRef.clientWidth;
						outerRef.scrollLeft = outerRef.scrollWidth - clientWidth - scrollOffset;
						break;
				}
				else outerRef.scrollLeft = scrollOffset;
				else outerRef.scrollTop = scrollOffset;
			}
			this._callPropsCallbacks();
		};
		_proto.componentWillUnmount = function componentWillUnmount() {
			if (this._resetIsScrollingTimeoutId !== null) cancelTimeout(this._resetIsScrollingTimeoutId);
		};
		_proto.render = function render() {
			var _this$props5 = this.props, children = _this$props5.children, className = _this$props5.className, direction = _this$props5.direction, height = _this$props5.height, innerRef = _this$props5.innerRef, innerElementType = _this$props5.innerElementType, innerTagName = _this$props5.innerTagName, itemCount = _this$props5.itemCount, itemData = _this$props5.itemData, _this$props5$itemKey = _this$props5.itemKey, itemKey = _this$props5$itemKey === void 0 ? defaultItemKey$1 : _this$props5$itemKey, layout = _this$props5.layout, outerElementType = _this$props5.outerElementType, outerTagName = _this$props5.outerTagName, style = _this$props5.style, useIsScrolling = _this$props5.useIsScrolling, width = _this$props5.width;
			var isScrolling = this.state.isScrolling;
			var isHorizontal = direction === "horizontal" || layout === "horizontal";
			var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;
			var _this$_getRangeToRend = this._getRangeToRender(), startIndex = _this$_getRangeToRend[0], stopIndex = _this$_getRangeToRend[1];
			var items = [];
			if (itemCount > 0) for (var _index = startIndex; _index <= stopIndex; _index++) items.push(createElement(children, {
				data: itemData,
				key: itemKey(_index, itemData),
				index: _index,
				isScrolling: useIsScrolling ? isScrolling : void 0,
				style: this._getItemStyle(_index)
			}));
			var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
			return createElement(outerElementType || outerTagName || "div", {
				className,
				onScroll,
				ref: this._outerRefSetter,
				style: _extends({
					position: "relative",
					height,
					width,
					overflow: "auto",
					WebkitOverflowScrolling: "touch",
					willChange: "transform",
					direction
				}, style)
			}, createElement(innerElementType || innerTagName || "div", {
				children: items,
				ref: innerRef,
				style: {
					height: isHorizontal ? "100%" : estimatedTotalSize,
					pointerEvents: isScrolling ? "none" : void 0,
					width: isHorizontal ? estimatedTotalSize : "100%"
				}
			}));
		};
		_proto._callPropsCallbacks = function _callPropsCallbacks() {
			if (typeof this.props.onItemsRendered === "function") {
				if (this.props.itemCount > 0) {
					var _this$_getRangeToRend2 = this._getRangeToRender(), _overscanStartIndex = _this$_getRangeToRend2[0], _overscanStopIndex = _this$_getRangeToRend2[1], _visibleStartIndex = _this$_getRangeToRend2[2], _visibleStopIndex = _this$_getRangeToRend2[3];
					this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
				}
			}
			if (typeof this.props.onScroll === "function") {
				var _this$state2 = this.state, _scrollDirection = _this$state2.scrollDirection, _scrollOffset = _this$state2.scrollOffset, _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;
				this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
			}
		};
		_proto._getRangeToRender = function _getRangeToRender() {
			var _this$props6 = this.props, itemCount = _this$props6.itemCount, overscanCount = _this$props6.overscanCount;
			var _this$state3 = this.state, isScrolling = _this$state3.isScrolling, scrollDirection = _this$state3.scrollDirection, scrollOffset = _this$state3.scrollOffset;
			if (itemCount === 0) return [
				0,
				0,
				0,
				0
			];
			var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
			var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps);
			var overscanBackward = !isScrolling || scrollDirection === "backward" ? Math.max(1, overscanCount) : 1;
			var overscanForward = !isScrolling || scrollDirection === "forward" ? Math.max(1, overscanCount) : 1;
			return [
				Math.max(0, startIndex - overscanBackward),
				Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)),
				startIndex,
				stopIndex
			];
		};
		return List;
	}(PureComponent), _class.defaultProps = {
		direction: "ltr",
		itemData: void 0,
		layout: "vertical",
		overscanCount: 2,
		useIsScrolling: false
	}, _class;
}
var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
	_ref2.children;
	_ref2.direction;
	_ref2.height;
	_ref2.layout;
	_ref2.innerTagName;
	_ref2.outerTagName;
	_ref2.width;
	_ref3.instance;
};
var FixedSizeList = /* @__PURE__ */ createListComponent({
	getItemOffset: function getItemOffset(_ref, index) {
		return index * _ref.itemSize;
	},
	getItemSize: function getItemSize(_ref2, index) {
		return _ref2.itemSize;
	},
	getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
		var itemCount = _ref3.itemCount;
		return _ref3.itemSize * itemCount;
	},
	getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset, instanceProps, scrollbarSize) {
		var direction = _ref4.direction, height = _ref4.height, itemCount = _ref4.itemCount, itemSize = _ref4.itemSize, layout = _ref4.layout, width = _ref4.width;
		var size = direction === "horizontal" || layout === "horizontal" ? width : height;
		var lastItemOffset = Math.max(0, itemCount * itemSize - size);
		var maxOffset = Math.min(lastItemOffset, index * itemSize);
		var minOffset = Math.max(0, index * itemSize - size + itemSize + scrollbarSize);
		if (align === "smart") if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) align = "auto";
		else align = "center";
		switch (align) {
			case "start": return maxOffset;
			case "end": return minOffset;
			case "center":
				var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);
				if (middleOffset < Math.ceil(size / 2)) return 0;
				else if (middleOffset > lastItemOffset + Math.floor(size / 2)) return lastItemOffset;
				else return middleOffset;
			default: if (scrollOffset >= minOffset && scrollOffset <= maxOffset) return scrollOffset;
			else if (scrollOffset < minOffset) return minOffset;
			else return maxOffset;
		}
	},
	getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
		var itemCount = _ref5.itemCount, itemSize = _ref5.itemSize;
		return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
	},
	getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
		var direction = _ref6.direction, height = _ref6.height, itemCount = _ref6.itemCount, itemSize = _ref6.itemSize, layout = _ref6.layout, width = _ref6.width;
		var isHorizontal = direction === "horizontal" || layout === "horizontal";
		var offset = startIndex * itemSize;
		var numVisibleItems = Math.ceil(((isHorizontal ? width : height) + scrollOffset - offset) / itemSize);
		return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1));
	},
	initInstanceProps: function initInstanceProps(props) {},
	shouldResetStyleCacheOnItemSizeChange: true,
	validateProps: function validateProps(_ref7) {
		_ref7.itemSize;
	}
});
function shallowDiffers(prev, next) {
	for (var attribute in prev) if (!(attribute in next)) return true;
	for (var _attribute in next) if (prev[_attribute] !== next[_attribute]) return true;
	return false;
}
var _excluded = ["style"], _excluded2 = ["style"];
function areEqual(prevProps, nextProps) {
	var prevStyle = prevProps.style, prevRest = _objectWithoutPropertiesLoose(prevProps, _excluded);
	var nextStyle = nextProps.style, nextRest = _objectWithoutPropertiesLoose(nextProps, _excluded2);
	return !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest);
}
//#endregion
//#region app/components/base/notion-icon/index.tsx
var NotionIcon = ({ type = "workspace", src, name, className }) => {
	if (type === "workspace") {
		if (typeof src === "string") {
			if (src.startsWith("https://") || src.startsWith("http://")) return /* @__PURE__ */ jsx("img", {
				alt: "workspace icon",
				src,
				className: cn("block h-5 w-5 object-cover", className)
			});
			return /* @__PURE__ */ jsx("div", {
				className: cn("flex h-5 w-5 items-center justify-center", className),
				children: src
			});
		}
		return /* @__PURE__ */ jsx("div", {
			className: cn("flex h-5 w-5 items-center justify-center rounded bg-gray-200 text-xs font-medium text-gray-500", className),
			children: name?.[0].toLocaleUpperCase()
		});
	}
	if (typeof src === "object" && src !== null) {
		if (src?.type === "url") return /* @__PURE__ */ jsx("img", {
			alt: "page icon",
			src: src.url || "",
			className: cn("block h-5 w-5 object-cover", className)
		});
		return /* @__PURE__ */ jsx("div", {
			className: cn("flex h-5 w-5 items-center justify-center", className),
			children: src?.emoji
		});
	}
	return /* @__PURE__ */ jsx(Fl, { className: cn("h-5 w-5 text-text-tertiary", className) });
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-documents/page-selector/item.tsx
var Item$3 = ({ index, style, data }) => {
	const { t } = useTranslation();
	const { dataList, handleToggle, checkedIds, disabledCheckedIds, handleCheck, canPreview, handlePreview, listMapWithChildrenAndDescendants, searchValue, previewPageId, pagesMap, isMultipleChoice } = data;
	const current = dataList[index];
	const currentWithChildrenAndDescendants = listMapWithChildrenAndDescendants[current.page_id];
	const hasChild = currentWithChildrenAndDescendants.descendants.size > 0;
	const ancestors = currentWithChildrenAndDescendants.ancestors;
	const breadCrumbs = ancestors.length ? [...ancestors, current.page_name] : [current.page_name];
	const disabled = disabledCheckedIds.has(current.page_id);
	const renderArrow = () => {
		if (hasChild) return /* @__PURE__ */ jsx("div", {
			className: "mr-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md hover:bg-components-button-ghost-bg-hover",
			style: { marginLeft: current.depth * 8 },
			onClick: () => handleToggle(index),
			children: current.expand ? /* @__PURE__ */ jsx(f1, { className: "h-4 w-4 text-text-tertiary" }) : /* @__PURE__ */ jsx(r2, { className: "h-4 w-4 text-text-tertiary" })
		});
		if (current.parent_id === "root" || !pagesMap[current.parent_id]) return /* @__PURE__ */ jsx("div", {});
		return /* @__PURE__ */ jsx("div", {
			className: "mr-1 h-5 w-5 shrink-0",
			style: { marginLeft: current.depth * 8 }
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("group flex cursor-pointer items-center rounded-md pl-2 pr-[2px] hover:bg-state-base-hover", previewPageId === current.page_id && "bg-state-base-hover"),
		style: {
			...style,
			top: style.top + 8,
			left: 8,
			right: 8,
			width: "calc(100% - 16px)"
		},
		children: [
			isMultipleChoice ? /* @__PURE__ */ jsx(Checkbox, {
				className: "mr-2 shrink-0",
				checked: checkedIds.has(current.page_id),
				disabled,
				onCheck: () => {
					handleCheck(index);
				}
			}) : /* @__PURE__ */ jsx(ui_default, {
				className: "mr-2 shrink-0",
				isChecked: checkedIds.has(current.page_id),
				disabled,
				onCheck: () => {
					handleCheck(index);
				}
			}),
			!searchValue && renderArrow(),
			/* @__PURE__ */ jsx(NotionIcon, {
				className: "mr-1 shrink-0",
				type: "page",
				src: current.page_icon
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grow truncate text-[13px] font-medium leading-4 text-text-secondary",
				title: current.page_name,
				children: current.page_name
			}),
			canPreview && /* @__PURE__ */ jsx("div", {
				className: "ml-1 hidden h-6 shrink-0 cursor-pointer items-center rounded-md border-[0.5px] border-components-button-secondary-border bg-components-button-secondary-bg px-2 text-xs\n            font-medium leading-4 text-components-button-secondary-text shadow-xs shadow-shadow-shadow-3 backdrop-blur-[10px]\n            hover:border-components-button-secondary-border-hover hover:bg-components-button-secondary-bg-hover group-hover:flex",
				onClick: () => handlePreview(index),
				children: t("dataSource.notion.selector.preview", { ns: "common" })
			}),
			searchValue && /* @__PURE__ */ jsx("div", {
				className: "ml-1 max-w-[120px] shrink-0 truncate text-xs text-text-quaternary",
				title: breadCrumbs.join(" / "),
				children: breadCrumbs.join(" / ")
			})
		]
	});
};
var item_default$3 = React$1.memo(Item$3, areEqual);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-documents/page-selector/utils.ts
var recursivePushInParentDescendants = (pagesMap, listTreeMap, current, leafItem) => {
	const parentId = current.parent_id;
	const pageId = current.page_id;
	if (!parentId || !pageId) return;
	if (parentId !== "root" && pagesMap[parentId]) {
		if (!listTreeMap[parentId]) {
			const children = new Set([pageId]);
			const descendants = new Set([pageId, leafItem.page_id]);
			listTreeMap[parentId] = {
				...pagesMap[parentId],
				children,
				descendants,
				depth: 0,
				ancestors: []
			};
		} else {
			listTreeMap[parentId].children.add(pageId);
			listTreeMap[parentId].descendants.add(pageId);
			listTreeMap[parentId].descendants.add(leafItem.page_id);
		}
		leafItem.depth++;
		leafItem.ancestors.unshift(listTreeMap[parentId].page_name);
		if (listTreeMap[parentId].parent_id !== "root") recursivePushInParentDescendants(pagesMap, listTreeMap, listTreeMap[parentId], leafItem);
	}
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-documents/page-selector/index.tsx
var PageSelector = ({ checkedIds, disabledValue, searchValue, pagesMap, list, onSelect, canPreview = true, onPreview, isMultipleChoice = true, currentCredentialId }) => {
	const { t } = useTranslation();
	const [dataList, setDataList] = useState([]);
	const [currentPreviewPageId, setCurrentPreviewPageId] = useState("");
	useEffect(() => {
		setDataList(list.filter((item) => item.parent_id === "root" || !pagesMap[item.parent_id]).map((item) => {
			return {
				...item,
				expand: false,
				depth: 0
			};
		}));
	}, [currentCredentialId]);
	const searchDataList = list.filter((item) => {
		return item.page_name.includes(searchValue);
	}).map((item) => {
		return {
			...item,
			expand: false,
			depth: 0
		};
	});
	const currentDataList = searchValue ? searchDataList : dataList;
	const listMapWithChildrenAndDescendants = useMemo(() => {
		return list.reduce((prev, next) => {
			const pageId = next.page_id;
			if (!prev[pageId]) prev[pageId] = {
				...next,
				children: /* @__PURE__ */ new Set(),
				descendants: /* @__PURE__ */ new Set(),
				depth: 0,
				ancestors: []
			};
			recursivePushInParentDescendants(pagesMap, prev, prev[pageId], prev[pageId]);
			return prev;
		}, {});
	}, [list, pagesMap]);
	const handleToggle = useCallback((index) => {
		const current = dataList[index];
		const currentWithChildrenAndDescendants = listMapWithChildrenAndDescendants[current.page_id];
		const descendantsIds = Array.from(currentWithChildrenAndDescendants.descendants);
		const childrenIds = Array.from(currentWithChildrenAndDescendants.children);
		let newDataList = [];
		if (current.expand) {
			current.expand = false;
			newDataList = dataList.filter((item) => !descendantsIds.includes(item.page_id));
		} else {
			current.expand = true;
			newDataList = [
				...dataList.slice(0, index + 1),
				...childrenIds.map((item) => ({
					...pagesMap[item],
					expand: false,
					depth: listMapWithChildrenAndDescendants[item].depth
				})),
				...dataList.slice(index + 1)
			];
		}
		setDataList(newDataList);
	}, [
		dataList,
		listMapWithChildrenAndDescendants,
		pagesMap
	]);
	const handleCheck = useCallback((index) => {
		const copyValue = new Set(checkedIds);
		const pageId = currentDataList[index].page_id;
		const currentWithChildrenAndDescendants = listMapWithChildrenAndDescendants[pageId];
		if (copyValue.has(pageId)) {
			if (!searchValue && isMultipleChoice) for (const item of currentWithChildrenAndDescendants.descendants) copyValue.delete(item);
			copyValue.delete(pageId);
		} else {
			if (!searchValue && isMultipleChoice) for (const item of currentWithChildrenAndDescendants.descendants) copyValue.add(item);
			if (!isMultipleChoice && copyValue.size > 0) {
				copyValue.clear();
				copyValue.add(pageId);
			} else copyValue.add(pageId);
		}
		onSelect(new Set(copyValue));
	}, [
		currentDataList,
		isMultipleChoice,
		listMapWithChildrenAndDescendants,
		onSelect,
		searchValue,
		checkedIds
	]);
	const handlePreview = useCallback((index) => {
		const pageId = currentDataList[index].page_id;
		setCurrentPreviewPageId(pageId);
		if (onPreview) onPreview(pageId);
	}, [currentDataList, onPreview]);
	if (!currentDataList.length) return /* @__PURE__ */ jsx("div", {
		className: "flex h-[296px] items-center justify-center text-[13px] text-text-tertiary",
		children: t("dataSource.notion.selector.noSearchResult", { ns: "common" })
	});
	return /* @__PURE__ */ jsx(FixedSizeList, {
		className: "py-2",
		height: 296,
		itemCount: currentDataList.length,
		itemSize: 28,
		width: "100%",
		itemKey: (index, data) => data.dataList[index].page_id,
		itemData: {
			dataList: currentDataList,
			handleToggle,
			checkedIds,
			disabledCheckedIds: disabledValue,
			handleCheck,
			canPreview,
			handlePreview,
			listMapWithChildrenAndDescendants,
			searchValue,
			previewPageId: currentPreviewPageId,
			pagesMap,
			isMultipleChoice
		},
		children: item_default$3
	});
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-documents/title.tsx
var Title = ({ name }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("div", {
		className: "system-sm-medium px-[5px] py-1 text-text-secondary",
		children: t("onlineDocument.pageSelectorTitle", {
			ns: "datasetPipeline",
			name
		})
	});
};
var title_default = React$1.memo(Title);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-documents/index.tsx
var OnlineDocuments = ({ nodeId, nodeData, isInPipeline = false, supportBatchUpload = true, onCredentialChange }) => {
	const docLink = useDocLink();
	const pipelineId = useDatasetDetailContextWithSelector((s) => s.dataset?.pipeline_id);
	const setShowAccountSettingModal = useModalContextSelector((s) => s.setShowAccountSettingModal);
	const { documentsData, searchValue, selectedPagesId, currentCredentialId } = useDataSourceStoreWithSelector(useShallow((state) => ({
		documentsData: state.documentsData,
		searchValue: state.searchValue,
		selectedPagesId: state.selectedPagesId,
		currentCredentialId: state.currentCredentialId
	})));
	const { data: dataSourceAuth } = useGetDataSourceAuth({
		pluginId: nodeData.plugin_id,
		provider: nodeData.provider_name
	});
	const dataSourceStore = useDataSourceStore();
	const PagesMapAndSelectedPagesId = useMemo(() => {
		return (documentsData || []).reduce((prev, next) => {
			next.pages.forEach((page) => {
				prev[page.page_id] = {
					...page,
					workspace_id: next.workspace_id
				};
			});
			return prev;
		}, {});
	}, [documentsData]);
	const datasourceNodeRunURL = !isInPipeline ? `/rag/pipelines/${pipelineId}/workflows/published/datasource/nodes/${nodeId}/run` : `/rag/pipelines/${pipelineId}/workflows/draft/datasource/nodes/${nodeId}/run`;
	const getOnlineDocuments = useCallback(async () => {
		const { currentCredentialId } = dataSourceStore.getState();
		ssePost(datasourceNodeRunURL, { body: {
			inputs: Object.entries(nodeData.datasource_parameters || {}).reduce((acc, [key, value]) => {
				acc[key] = typeof value === "object" && value !== null && "value" in value ? value.value : value;
				return acc;
			}, {}),
			credential_id: currentCredentialId,
			datasource_type: DatasourceType.onlineDocument
		} }, {
			onDataSourceNodeCompleted: (documentsData) => {
				const { setDocumentsData } = dataSourceStore.getState();
				setDocumentsData(documentsData.data);
			},
			onDataSourceNodeError: (error) => {
				toast.error(error.error);
			}
		});
	}, [
		dataSourceStore,
		datasourceNodeRunURL,
		nodeData.datasource_parameters
	]);
	useEffect(() => {
		if (!currentCredentialId) return;
		getOnlineDocuments();
	}, [currentCredentialId]);
	const handleSearchValueChange = useCallback((value) => {
		const { setSearchValue } = dataSourceStore.getState();
		setSearchValue(value);
	}, [dataSourceStore]);
	const handleSelectPages = useCallback((newSelectedPagesId) => {
		const { setSelectedPagesId, setOnlineDocuments } = dataSourceStore.getState();
		const selectedPages = Array.from(newSelectedPagesId).map((pageId) => PagesMapAndSelectedPagesId[pageId]);
		setSelectedPagesId(new Set(Array.from(newSelectedPagesId)));
		setOnlineDocuments(selectedPages);
	}, [dataSourceStore, PagesMapAndSelectedPagesId]);
	const handlePreviewPage = useCallback((previewPageId) => {
		const { setCurrentDocument } = dataSourceStore.getState();
		setCurrentDocument(PagesMapAndSelectedPagesId[previewPageId]);
	}, [PagesMapAndSelectedPagesId, dataSourceStore]);
	const handleSetting = useCallback(() => {
		setShowAccountSettingModal({ payload: ACCOUNT_SETTING_TAB.DATA_SOURCE });
	}, [setShowAccountSettingModal]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-y-2",
		children: [/* @__PURE__ */ jsx(header_default$1, {
			docTitle: "Docs",
			docLink: docLink("/use-dify/knowledge/knowledge-pipeline/authorize-data-source"),
			onClickConfiguration: handleSetting,
			pluginName: nodeData.datasource_label,
			currentCredentialId,
			onCredentialChange,
			credentials: dataSourceAuth?.result || []
		}), /* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-components-panel-border bg-background-default-subtle",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-x-2 rounded-t-xl border-b border-b-divider-regular bg-components-panel-bg p-1 pl-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex grow items-center",
					children: /* @__PURE__ */ jsx(title_default, { name: nodeData.datasource_label })
				}), /* @__PURE__ */ jsx(SearchInput, {
					value: searchValue,
					onChange: handleSearchValueChange
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-b-xl",
				children: documentsData?.length ? /* @__PURE__ */ jsx(PageSelector, {
					checkedIds: selectedPagesId,
					disabledValue: /* @__PURE__ */ new Set(),
					searchValue,
					list: documentsData[0].pages || [],
					pagesMap: PagesMapAndSelectedPagesId,
					onSelect: handleSelectPages,
					canPreview: !isInPipeline,
					onPreview: handlePreviewPage,
					isMultipleChoice: supportBatchUpload,
					currentCredentialId
				}) : /* @__PURE__ */ jsx("div", {
					className: "flex h-[296px] items-center justify-center",
					children: /* @__PURE__ */ jsx(Loading, { type: "app" })
				})
			})]
		})]
	});
};
var BucketsBlue_default = {
	icon: /* @__PURE__ */ JSON.parse("{\"type\":\"element\",\"isRootNode\":true,\"name\":\"svg\",\"attributes\":{\"width\":\"20\",\"height\":\"21\",\"viewBox\":\"0 0 20 21\",\"fill\":\"none\",\"xmlns\":\"http://www.w3.org/2000/svg\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"filter\":\"url(#filter0_dg_9100_35711)\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"fill-rule\":\"evenodd\",\"clip-rule\":\"evenodd\",\"d\":\"M2.93353 4.92661C2.89594 4.7923 2.875 4.65006 2.875 4.49999C2.875 3.87927 3.23334 3.39224 3.64546 3.04834C4.06181 2.70093 4.61943 2.4217 5.24258 2.20177C6.49565 1.75951 8.1777 1.5 10 1.5C11.8223 1.5 13.5044 1.75951 14.7574 2.20177C15.3806 2.4217 15.9382 2.70093 16.3545 3.04834C16.7667 3.39224 17.125 3.87927 17.125 4.49999C17.125 4.65011 17.104 4.79242 17.0664 4.92676L15.5233 14.6092C15.4517 15.1277 15.1621 15.5477 14.8098 15.867C14.456 16.1877 14.0028 16.4419 13.5123 16.6392C12.5299 17.0342 11.2752 17.2499 10 17.2499C8.72762 17.2499 7.48138 17.0419 6.50197 16.6499C5.58181 16.2816 4.63932 15.6399 4.47799 14.6173L4.47785 14.6165L2.93353 4.92661ZM15.3935 4.79995C15.1646 4.99091 14.7887 5.19651 14.2582 5.38375C13.2039 5.75583 11.6985 6 10 6C8.30148 6 6.79603 5.75583 5.7418 5.38375C5.2113 5.19651 4.83532 4.99091 4.60649 4.79995C4.35379 4.58909 4.34365 4.41936 4.60649 4.20004C4.83532 4.00908 5.2113 3.80347 5.7418 3.61624C6.79603 3.24416 8.30148 2.99998 10 2.99998C11.6985 2.99998 13.2039 3.24416 14.2582 3.61624C14.7887 3.80347 15.1646 4.00908 15.3935 4.20004C15.6535 4.41698 15.6591 4.57832 15.3935 4.79995Z\",\"fill\":\"url(#paint0_linear_9100_35711)\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M10 1.75C11.8015 1.75 13.454 2.00701 14.6738 2.4375C15.2815 2.65197 15.8093 2.91891 16.1943 3.24023C16.5772 3.55975 16.875 3.98319 16.875 4.5C16.875 4.6265 16.8569 4.74611 16.8252 4.85938L16.8223 4.87305L16.8193 4.8877L15.2764 14.5693L15.2754 14.5752C15.2141 15.0182 14.9653 15.3882 14.6416 15.6816C14.3164 15.9764 13.8919 16.2171 13.4189 16.4072C12.4721 16.788 11.2501 17 10 17C8.75169 17 7.53815 16.7956 6.59473 16.418C5.68992 16.0559 4.86386 15.4608 4.72461 14.5781V14.5762L3.18066 4.8877L3.17773 4.87305L3.17383 4.85938L3.1377 4.68457C3.12934 4.62474 3.125 4.56323 3.125 4.5C3.125 3.98318 3.42277 3.55974 3.80566 3.24023C4.19077 2.91891 4.71851 2.65197 5.32617 2.4375C6.54607 2.00701 8.1985 1.75 10 1.75ZM10 2.75C8.28084 2.75 6.74557 2.99708 5.6582 3.38086C5.11261 3.57347 4.70632 3.79086 4.44629 4.00781C4.30195 4.12826 4.16025 4.29177 4.16309 4.50684C4.16605 4.71916 4.30918 4.87778 4.44629 4.99219C4.70632 5.20914 5.11262 5.42654 5.6582 5.61914C6.74557 6.00292 8.28084 6.25 10 6.25C11.7192 6.25 13.2544 6.00292 14.3418 5.61914C14.8874 5.42653 15.2937 5.20915 15.5537 4.99219C15.6953 4.87406 15.8424 4.71212 15.8408 4.49609C15.8391 4.2817 15.6913 4.12258 15.5537 4.00781C15.2937 3.79085 14.8874 3.57347 14.3418 3.38086C13.2544 2.99708 11.7192 2.75 10 2.75Z\",\"stroke\":\"white\",\"stroke-opacity\":\"0.01\",\"stroke-width\":\"0.5\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"opacity\":\"0.8\",\"d\":\"M10 9.375C9.28547 9.375 8.67149 9.8031 8.39956 10.4162C7.7401 10.5741 7.25 11.1672 7.25 11.875C7.25 12.7034 7.92157 13.375 8.75 13.375H11.5C12.1904 13.375 12.75 12.8154 12.75 12.125C12.75 11.5151 12.3132 11.0072 11.7353 10.8971C11.6236 10.0383 10.8893 9.375 10 9.375Z\",\"fill\":\"white\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"fill-rule\":\"evenodd\",\"clip-rule\":\"evenodd\",\"d\":\"M2.93353 4.92665C2.89594 4.79234 2.875 4.6501 2.875 4.50003C2.875 4.36905 2.89096 4.24402 2.92001 4.12503C2.92424 4.14236 2.92875 4.15957 2.93353 4.17665L4.47799 13.8674C4.63931 14.8899 5.58181 15.5316 6.50197 15.8999C7.48138 16.2919 8.72762 16.5 10 16.5C11.2752 16.5 12.5299 16.2843 13.5123 15.8892C14.0028 15.692 14.456 15.4377 14.8098 15.117C15.1621 14.7977 15.4517 14.3777 15.5233 13.8592L17.0664 4.1768C17.0712 4.15967 17.0757 4.1424 17.08 4.125C17.109 4.244 17.125 4.36904 17.125 4.50003C17.125 4.65015 17.104 4.79246 17.0664 4.9268L15.5233 14.6092C15.4517 15.1277 15.1621 15.5477 14.8098 15.867C14.456 16.1877 14.0028 16.442 13.5123 16.6392C12.5299 17.0343 11.2752 17.25 10 17.25C8.72762 17.25 7.48138 17.0419 6.50197 16.6499C5.58181 16.2816 4.63931 15.6399 4.47799 14.6174L2.93353 4.92665Z\",\"fill\":\"#101828\",\"fill-opacity\":\"0.14\"},\"children\":[]},{\"type\":\"element\",\"name\":\"defs\",\"attributes\":{},\"children\":[{\"type\":\"element\",\"name\":\"filter\",\"attributes\":{\"id\":\"filter0_dg_9100_35711\",\"x\":\"0.875\",\"y\":\"0.3\",\"width\":\"18.25\",\"height\":\"19.95\",\"filterUnits\":\"userSpaceOnUse\",\"color-interpolation-filters\":\"sRGB\"},\"children\":[{\"type\":\"element\",\"name\":\"feFlood\",\"attributes\":{\"flood-opacity\":\"0\",\"result\":\"BackgroundImageFix\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"SourceAlpha\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\",\"result\":\"hardAlpha\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feOffset\",\"attributes\":{\"dy\":\"1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feGaussianBlur\",\"attributes\":{\"stdDeviation\":\"1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"hardAlpha\",\"operator\":\"out\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0.0352941 0 0 0 0 0.0352941 0 0 0 0 0.0431373 0 0 0 0.05 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in2\":\"BackgroundImageFix\",\"result\":\"effect1_dropShadow_9100_35711\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in\":\"BackgroundImageFix\",\"in2\":\"effect1_dropShadow_9100_35711\",\"result\":\"BackgroundImageFix\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in\":\"SourceGraphic\",\"in2\":\"BackgroundImageFix\",\"result\":\"shape\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feTurbulence\",\"attributes\":{\"type\":\"fractalNoise\",\"baseFrequency\":\"9.0909090042114258 9.0909090042114258\",\"numOctaves\":\"3\",\"seed\":\"5297\",\"result\":\"displacementX\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feTurbulence\",\"attributes\":{\"type\":\"fractalNoise\",\"baseFrequency\":\"9.0909090042114258 9.0909090042114258\",\"numOctaves\":\"3\",\"seed\":\"5298\",\"result\":\"displacementY\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"displacementX\",\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1\",\"result\":\"displacementXRed\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"displacementY\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 1 0  0 0 0 0 0  0 0 0 0 1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementXRed\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feDisplacementMap\",\"attributes\":{\"in\":\"shape\",\"scale\":\"2.4000000953674316\",\"xChannelSelector\":\"R\",\"yChannelSelector\":\"G\",\"width\":\"100%\",\"height\":\"100%\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComponentTransfer\",\"attributes\":{\"result\":\"sourceDisplacedAlpha\"},\"children\":[{\"type\":\"element\",\"name\":\"feFuncA\",\"attributes\":{\"type\":\"gamma\",\"exponent\":\"0.2\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"shape\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComponentTransfer\",\"attributes\":{\"result\":\"inputSourceAlpha\"},\"children\":[{\"type\":\"element\",\"name\":\"feFuncA\",\"attributes\":{\"type\":\"gamma\",\"exponent\":\"0.2\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"sourceDisplacedAlpha\",\"operator\":\"arithmetic\",\"k1\":\"1\",\"k2\":\"0\",\"k3\":\"0\",\"k4\":\"0\",\"result\":\"displacementAlphasMultiplied\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementAlphasMultiplied\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"0\",\"k3\":\"-0.5\",\"k4\":\"0.5\",\"result\":\"centeringAdjustment\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementX\",\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"arithmetic\",\"k1\":\"1\",\"k2\":\"0\",\"k3\":\"0\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"centeringAdjustment\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1\",\"result\":\"displacementXFinal\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementY\",\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"arithmetic\",\"k1\":\"1\",\"k2\":\"0\",\"k3\":\"0\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"centeringAdjustment\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 1 0  0 0 0 0 0  0 0 0 0 1\",\"result\":\"displacementYFinal\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementXFinal\",\"in2\":\"displacementYFinal\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"in\",\"result\":\"displacementMap\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feFlood\",\"attributes\":{\"flood-color\":\"rgb(127, 127, 127)\",\"flood-opacity\":\"1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"out\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"displacementMap\",\"operator\":\"over\",\"result\":\"displacementMapWithBg\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feDisplacementMap\",\"attributes\":{\"in\":\"shape\",\"scale\":\"2.4000000953674316\",\"xChannelSelector\":\"R\",\"yChannelSelector\":\"G\",\"width\":\"100%\",\"height\":\"100%\",\"result\":\"displacedImage\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"shape\",\"type\":\"matrix\",\"values\":\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 127 0\",\"result\":\"imageOpaque\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feDisplacementMap\",\"attributes\":{\"in\":\"imageOpaque\",\"in2\":\"displacementMapWithBg\",\"scale\":\"2.4000000953674316\",\"xChannelSelector\":\"R\",\"yChannelSelector\":\"G\",\"width\":\"100%\",\"height\":\"100%\",\"result\":\"displacedImageOpaque\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"displacedImage\",\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0\",\"result\":\"displacedImageRed\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"shape\",\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacedImageRed\",\"operator\":\"atop\",\"result\":\"transparencyRedMap\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"transparencyRedMap\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0\",\"result\":\"transparencyAlphaMap\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacedImageOpaque\",\"in2\":\"imageOpaque\",\"operator\":\"over\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"transparencyAlphaMap\",\"operator\":\"in\",\"result\":\"effect2_texture_9100_35711\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint0_linear_9100_35711\",\"x1\":\"10\",\"y1\":\"1.5\",\"x2\":\"10\",\"y2\":\"17.2499\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"#296DFF\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#155AEF\"},\"children\":[]}]}]}]}"),
	name: "BucketsBlue"
};
//#endregion
//#region app/components/base/icons/src/public/knowledge/online-drive/BucketsBlue.tsx
var Icon$2 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: BucketsBlue_default
});
Icon$2.displayName = "BucketsBlue";
var BucketsGray_default = {
	icon: /* @__PURE__ */ JSON.parse("{\"type\":\"element\",\"isRootNode\":true,\"name\":\"svg\",\"attributes\":{\"width\":\"18\",\"height\":\"19\",\"viewBox\":\"0 0 18 19\",\"fill\":\"none\",\"xmlns\":\"http://www.w3.org/2000/svg\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"filter\":\"url(#filter0_dg_9155_106569)\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"fill-rule\":\"evenodd\",\"clip-rule\":\"evenodd\",\"d\":\"M2.71865 4.37937C2.68524 4.25999 2.66663 4.13355 2.66663 4.00016C2.66663 3.4484 2.98515 3.01549 3.35148 2.7098C3.72157 2.40099 4.21723 2.15279 4.77114 1.95729C5.88498 1.56417 7.38013 1.3335 8.99996 1.3335C10.6198 1.3335 12.115 1.56417 13.2288 1.95729C13.7827 2.15279 14.2784 2.40099 14.6484 2.7098C15.0148 3.01549 15.3333 3.4484 15.3333 4.00016C15.3333 4.1336 15.3146 4.26009 15.2812 4.37951L13.9096 12.9861C13.8459 13.447 13.5885 13.8203 13.2754 14.1042C12.9608 14.3892 12.558 14.6152 12.122 14.7906C11.2488 15.1417 10.1334 15.3334 8.99996 15.3334C7.86896 15.3334 6.76119 15.1485 5.8906 14.8C5.07268 14.4727 4.23491 13.9023 4.09151 12.9934L4.09139 12.9926L2.71865 4.37937ZM13.7942 4.26678C13.5908 4.43652 13.2566 4.61928 12.785 4.78572C11.8479 5.11646 10.5098 5.3335 8.99996 5.3335C7.49016 5.3335 6.15199 5.11646 5.21489 4.78572C4.74334 4.61928 4.40913 4.43652 4.20573 4.26678C3.98111 4.07936 3.97209 3.92848 4.20573 3.73353C4.40913 3.56379 4.74334 3.38103 5.21489 3.2146C6.15199 2.88386 7.49016 2.66682 8.99996 2.66682C10.5098 2.66682 11.8479 2.88386 12.785 3.2146C13.2566 3.38103 13.5908 3.56379 13.7942 3.73353C14.0253 3.92637 14.0303 4.06978 13.7942 4.26678Z\",\"fill\":\"url(#paint0_linear_9155_106569)\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M8.99963 1.5835C10.5986 1.5835 12.0645 1.81154 13.1451 2.19287C13.6835 2.38289 14.1491 2.61917 14.4879 2.90186C14.825 3.18316 15.0836 3.55264 15.0836 4.00049C15.0836 4.11011 15.0681 4.21383 15.0406 4.31201L15.0367 4.32568L15.0348 4.34033L13.6627 12.9468L13.6617 12.9517C13.6085 13.3371 13.3916 13.6605 13.1071 13.9185C12.8211 14.1776 12.4474 14.3908 12.0289 14.5591C11.1912 14.8959 10.1081 15.0835 8.99963 15.0835C7.89281 15.0835 6.81755 14.9019 5.98303 14.5679C5.18068 14.2467 4.4599 13.7234 4.3385 12.9546V12.9526L2.96545 4.34033L2.9635 4.32568L2.95959 4.31201L2.92737 4.16064C2.92011 4.10875 2.91664 4.05535 2.91663 4.00049C2.91663 3.55274 3.17436 3.18313 3.51135 2.90186C3.85017 2.61914 4.31573 2.38291 4.85413 2.19287C5.93475 1.81147 7.40056 1.58353 8.99963 1.5835ZM8.99963 2.4165C7.46933 2.41654 6.10163 2.63659 5.13147 2.979C4.64464 3.15085 4.28017 3.34571 4.04553 3.5415C3.91579 3.64976 3.78112 3.80197 3.78381 4.00635C3.7865 4.20806 3.92243 4.35576 4.04553 4.4585C4.28015 4.65428 4.64467 4.84915 5.13147 5.021C6.10163 5.36341 7.46933 5.58346 8.99963 5.5835C10.5299 5.5835 11.8975 5.36338 12.8678 5.021C13.3547 4.84912 13.72 4.65433 13.9547 4.4585C14.0815 4.35269 14.2209 4.20184 14.2194 3.99658C14.2178 3.79281 14.0778 3.64424 13.9547 3.5415C13.72 3.34567 13.3547 3.15088 12.8678 2.979C11.8975 2.63664 10.5299 2.4165 8.99963 2.4165Z\",\"stroke\":\"white\",\"stroke-opacity\":\"0.01\",\"stroke-width\":\"0.5\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"opacity\":\"0.8\",\"d\":\"M8.99999 8.3335C8.36485 8.3335 7.81909 8.71403 7.57737 9.25902C6.99119 9.39939 6.55554 9.92652 6.55554 10.5557C6.55554 11.2921 7.1525 11.8891 7.88888 11.8891H10.3333C10.947 11.8891 11.4444 11.3916 11.4444 10.7779C11.4444 10.2358 11.0561 9.78432 10.5425 9.68647C10.4432 8.92308 9.79045 8.3335 8.99999 8.3335Z\",\"fill\":\"white\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"fill-rule\":\"evenodd\",\"clip-rule\":\"evenodd\",\"d\":\"M2.71865 4.37908C2.68524 4.2597 2.66663 4.13326 2.66663 3.99986C2.66663 3.88343 2.68081 3.7723 2.70663 3.66653C2.71039 3.68194 2.7144 3.69723 2.71865 3.71241L4.09151 12.3264C4.23491 13.2353 5.07268 13.8057 5.8906 14.1331C6.76119 14.4815 7.86896 14.6665 8.99996 14.6665C10.1334 14.6665 11.2488 14.4747 12.122 14.1236C12.558 13.9483 12.9608 13.7223 13.2754 13.4372C13.5885 13.1533 13.8459 12.78 13.9096 12.3191L15.2812 3.71255C15.2855 3.69732 15.2895 3.68197 15.2933 3.6665C15.3191 3.77228 15.3333 3.88343 15.3333 3.99986C15.3333 4.1333 15.3146 4.2598 15.2812 4.37922L13.9096 12.9858C13.8459 13.4467 13.5885 13.82 13.2754 14.1039C12.9608 14.3889 12.558 14.6149 12.122 14.7903C11.2488 15.1414 10.1334 15.3331 8.99996 15.3331C7.86896 15.3331 6.76119 15.1482 5.8906 14.7997C5.07268 14.4724 4.23491 13.902 4.09151 12.9931L2.71865 4.37908Z\",\"fill\":\"#101828\",\"fill-opacity\":\"0.14\"},\"children\":[]},{\"type\":\"element\",\"name\":\"defs\",\"attributes\":{},\"children\":[{\"type\":\"element\",\"name\":\"filter\",\"attributes\":{\"id\":\"filter0_dg_9155_106569\",\"x\":\"0.666626\",\"y\":\"0.133496\",\"width\":\"16.6666\",\"height\":\"18.2\",\"filterUnits\":\"userSpaceOnUse\",\"color-interpolation-filters\":\"sRGB\"},\"children\":[{\"type\":\"element\",\"name\":\"feFlood\",\"attributes\":{\"flood-opacity\":\"0\",\"result\":\"BackgroundImageFix\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"SourceAlpha\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\",\"result\":\"hardAlpha\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feOffset\",\"attributes\":{\"dy\":\"1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feGaussianBlur\",\"attributes\":{\"stdDeviation\":\"1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"hardAlpha\",\"operator\":\"out\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0.0352941 0 0 0 0 0.0352941 0 0 0 0 0.0431373 0 0 0 0.05 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in2\":\"BackgroundImageFix\",\"result\":\"effect1_dropShadow_9155_106569\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in\":\"BackgroundImageFix\",\"in2\":\"effect1_dropShadow_9155_106569\",\"result\":\"BackgroundImageFix\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in\":\"SourceGraphic\",\"in2\":\"BackgroundImageFix\",\"result\":\"shape\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feTurbulence\",\"attributes\":{\"type\":\"fractalNoise\",\"baseFrequency\":\"9.0909090042114258 9.0909090042114258\",\"numOctaves\":\"3\",\"seed\":\"5297\",\"result\":\"displacementX\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feTurbulence\",\"attributes\":{\"type\":\"fractalNoise\",\"baseFrequency\":\"9.0909090042114258 9.0909090042114258\",\"numOctaves\":\"3\",\"seed\":\"5298\",\"result\":\"displacementY\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"displacementX\",\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1\",\"result\":\"displacementXRed\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"displacementY\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 1 0  0 0 0 0 0  0 0 0 0 1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementXRed\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feDisplacementMap\",\"attributes\":{\"in\":\"shape\",\"scale\":\"2.4000000953674316\",\"xChannelSelector\":\"R\",\"yChannelSelector\":\"G\",\"width\":\"100%\",\"height\":\"100%\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComponentTransfer\",\"attributes\":{\"result\":\"sourceDisplacedAlpha\"},\"children\":[{\"type\":\"element\",\"name\":\"feFuncA\",\"attributes\":{\"type\":\"gamma\",\"exponent\":\"0.2\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"shape\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComponentTransfer\",\"attributes\":{\"result\":\"inputSourceAlpha\"},\"children\":[{\"type\":\"element\",\"name\":\"feFuncA\",\"attributes\":{\"type\":\"gamma\",\"exponent\":\"0.2\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"sourceDisplacedAlpha\",\"operator\":\"arithmetic\",\"k1\":\"1\",\"k2\":\"0\",\"k3\":\"0\",\"k4\":\"0\",\"result\":\"displacementAlphasMultiplied\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementAlphasMultiplied\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"0\",\"k3\":\"-0.5\",\"k4\":\"0.5\",\"result\":\"centeringAdjustment\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementX\",\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"arithmetic\",\"k1\":\"1\",\"k2\":\"0\",\"k3\":\"0\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"centeringAdjustment\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1\",\"result\":\"displacementXFinal\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementY\",\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"arithmetic\",\"k1\":\"1\",\"k2\":\"0\",\"k3\":\"0\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"centeringAdjustment\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 1 0  0 0 0 0 0  0 0 0 0 1\",\"result\":\"displacementYFinal\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementXFinal\",\"in2\":\"displacementYFinal\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"in\",\"result\":\"displacementMap\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feFlood\",\"attributes\":{\"flood-color\":\"rgb(127, 127, 127)\",\"flood-opacity\":\"1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"out\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"displacementMap\",\"operator\":\"over\",\"result\":\"displacementMapWithBg\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feDisplacementMap\",\"attributes\":{\"in\":\"shape\",\"scale\":\"2.4000000953674316\",\"xChannelSelector\":\"R\",\"yChannelSelector\":\"G\",\"width\":\"100%\",\"height\":\"100%\",\"result\":\"displacedImage\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"shape\",\"type\":\"matrix\",\"values\":\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 127 0\",\"result\":\"imageOpaque\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feDisplacementMap\",\"attributes\":{\"in\":\"imageOpaque\",\"in2\":\"displacementMapWithBg\",\"scale\":\"2.4000000953674316\",\"xChannelSelector\":\"R\",\"yChannelSelector\":\"G\",\"width\":\"100%\",\"height\":\"100%\",\"result\":\"displacedImageOpaque\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"displacedImage\",\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0\",\"result\":\"displacedImageRed\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"shape\",\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacedImageRed\",\"operator\":\"atop\",\"result\":\"transparencyRedMap\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"transparencyRedMap\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0\",\"result\":\"transparencyAlphaMap\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacedImageOpaque\",\"in2\":\"imageOpaque\",\"operator\":\"over\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"transparencyAlphaMap\",\"operator\":\"in\",\"result\":\"effect2_texture_9155_106569\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint0_linear_9155_106569\",\"x1\":\"8.99996\",\"y1\":\"1.3335\",\"x2\":\"8.99996\",\"y2\":\"15.3334\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"#98A2B2\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#676F83\"},\"children\":[]}]}]}]}"),
	name: "BucketsGray"
};
//#endregion
//#region app/components/base/icons/src/public/knowledge/online-drive/BucketsGray.tsx
var Icon$1 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: BucketsGray_default
});
Icon$1.displayName = "BucketsGray";
var Folder_default = {
	icon: /* @__PURE__ */ JSON.parse("{\"type\":\"element\",\"isRootNode\":true,\"name\":\"svg\",\"attributes\":{\"width\":\"20\",\"height\":\"19\",\"viewBox\":\"0 0 20 19\",\"fill\":\"none\",\"xmlns\":\"http://www.w3.org/2000/svg\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"filter\":\"url(#filter0_dg_9155_106307)\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M11.8106 3.75L8.81065 6.75H2.5V15C2.5 15.4142 2.83579 15.75 3.25 15.75H16.75C17.1642 15.75 17.5 15.4142 17.5 15V4.5C17.5 4.08579 17.1642 3.75 16.75 3.75H11.8106Z\",\"fill\":\"url(#paint0_linear_9155_106307)\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M16.75 4C17.0262 4 17.25 4.22386 17.25 4.5V15C17.25 15.2762 17.0262 15.5 16.75 15.5H3.25C2.97386 15.5 2.75 15.2762 2.75 15V7H8.91406L11.9141 4H16.75Z\",\"stroke\":\"white\",\"stroke-opacity\":\"0.01\",\"stroke-width\":\"0.5\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"opacity\":\"0.6\",\"filter\":\"url(#filter1_dg_9155_106307)\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M3.25 2.25C2.83579 2.25 2.5 2.58579 2.5 3V5.25H8.18934L10 3.43934L8.81065 2.25H3.25Z\",\"fill\":\"#296DFF\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M3.25 2.5H8.70703L9.64648 3.43945L8.08594 5H2.75V3C2.75 2.72386 2.97386 2.5 3.25 2.5Z\",\"stroke\":\"white\",\"stroke-opacity\":\"0.01\",\"stroke-width\":\"0.5\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M17.5 15C17.5 15.4142 17.1642 15.75 16.75 15.75H3.25C2.83579 15.75 2.5 15.4142 2.5 15V14.25H17.5V15Z\",\"fill\":\"#101828\",\"fill-opacity\":\"0.14\"},\"children\":[]},{\"type\":\"element\",\"name\":\"defs\",\"attributes\":{},\"children\":[{\"type\":\"element\",\"name\":\"filter\",\"attributes\":{\"id\":\"filter0_dg_9155_106307\",\"x\":\"0.5\",\"y\":\"2.55\",\"width\":\"19\",\"height\":\"16.2\",\"filterUnits\":\"userSpaceOnUse\",\"color-interpolation-filters\":\"sRGB\"},\"children\":[{\"type\":\"element\",\"name\":\"feFlood\",\"attributes\":{\"flood-opacity\":\"0\",\"result\":\"BackgroundImageFix\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"SourceAlpha\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\",\"result\":\"hardAlpha\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feOffset\",\"attributes\":{\"dy\":\"1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feGaussianBlur\",\"attributes\":{\"stdDeviation\":\"1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"hardAlpha\",\"operator\":\"out\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0.0352941 0 0 0 0 0.0352941 0 0 0 0 0.0431373 0 0 0 0.05 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in2\":\"BackgroundImageFix\",\"result\":\"effect1_dropShadow_9155_106307\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in\":\"BackgroundImageFix\",\"in2\":\"effect1_dropShadow_9155_106307\",\"result\":\"BackgroundImageFix\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in\":\"SourceGraphic\",\"in2\":\"BackgroundImageFix\",\"result\":\"shape\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feTurbulence\",\"attributes\":{\"type\":\"fractalNoise\",\"baseFrequency\":\"9.0909090042114258 9.0909090042114258\",\"numOctaves\":\"3\",\"seed\":\"8029\",\"result\":\"displacementX\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feTurbulence\",\"attributes\":{\"type\":\"fractalNoise\",\"baseFrequency\":\"9.0909090042114258 9.0909090042114258\",\"numOctaves\":\"3\",\"seed\":\"8030\",\"result\":\"displacementY\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"displacementX\",\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1\",\"result\":\"displacementXRed\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"displacementY\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 1 0  0 0 0 0 0  0 0 0 0 1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementXRed\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feDisplacementMap\",\"attributes\":{\"in\":\"shape\",\"scale\":\"2.4000000953674316\",\"xChannelSelector\":\"R\",\"yChannelSelector\":\"G\",\"width\":\"100%\",\"height\":\"100%\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComponentTransfer\",\"attributes\":{\"result\":\"sourceDisplacedAlpha\"},\"children\":[{\"type\":\"element\",\"name\":\"feFuncA\",\"attributes\":{\"type\":\"gamma\",\"exponent\":\"0.2\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"shape\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComponentTransfer\",\"attributes\":{\"result\":\"inputSourceAlpha\"},\"children\":[{\"type\":\"element\",\"name\":\"feFuncA\",\"attributes\":{\"type\":\"gamma\",\"exponent\":\"0.2\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"sourceDisplacedAlpha\",\"operator\":\"arithmetic\",\"k1\":\"1\",\"k2\":\"0\",\"k3\":\"0\",\"k4\":\"0\",\"result\":\"displacementAlphasMultiplied\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementAlphasMultiplied\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"0\",\"k3\":\"-0.5\",\"k4\":\"0.5\",\"result\":\"centeringAdjustment\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementX\",\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"arithmetic\",\"k1\":\"1\",\"k2\":\"0\",\"k3\":\"0\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"centeringAdjustment\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1\",\"result\":\"displacementXFinal\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementY\",\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"arithmetic\",\"k1\":\"1\",\"k2\":\"0\",\"k3\":\"0\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"centeringAdjustment\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 1 0  0 0 0 0 0  0 0 0 0 1\",\"result\":\"displacementYFinal\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementXFinal\",\"in2\":\"displacementYFinal\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"in\",\"result\":\"displacementMap\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feFlood\",\"attributes\":{\"flood-color\":\"rgb(127, 127, 127)\",\"flood-opacity\":\"1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"out\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"displacementMap\",\"operator\":\"over\",\"result\":\"displacementMapWithBg\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feDisplacementMap\",\"attributes\":{\"in\":\"shape\",\"scale\":\"2.4000000953674316\",\"xChannelSelector\":\"R\",\"yChannelSelector\":\"G\",\"width\":\"100%\",\"height\":\"100%\",\"result\":\"displacedImage\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"shape\",\"type\":\"matrix\",\"values\":\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 127 0\",\"result\":\"imageOpaque\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feDisplacementMap\",\"attributes\":{\"in\":\"imageOpaque\",\"in2\":\"displacementMapWithBg\",\"scale\":\"2.4000000953674316\",\"xChannelSelector\":\"R\",\"yChannelSelector\":\"G\",\"width\":\"100%\",\"height\":\"100%\",\"result\":\"displacedImageOpaque\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"displacedImage\",\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0\",\"result\":\"displacedImageRed\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"shape\",\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacedImageRed\",\"operator\":\"atop\",\"result\":\"transparencyRedMap\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"transparencyRedMap\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0\",\"result\":\"transparencyAlphaMap\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacedImageOpaque\",\"in2\":\"imageOpaque\",\"operator\":\"over\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"transparencyAlphaMap\",\"operator\":\"in\",\"result\":\"effect2_texture_9155_106307\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"filter\",\"attributes\":{\"id\":\"filter1_dg_9155_106307\",\"x\":\"0.5\",\"y\":\"1.05\",\"width\":\"11.5\",\"height\":\"7.2\",\"filterUnits\":\"userSpaceOnUse\",\"color-interpolation-filters\":\"sRGB\"},\"children\":[{\"type\":\"element\",\"name\":\"feFlood\",\"attributes\":{\"flood-opacity\":\"0\",\"result\":\"BackgroundImageFix\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"SourceAlpha\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\",\"result\":\"hardAlpha\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feOffset\",\"attributes\":{\"dy\":\"1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feGaussianBlur\",\"attributes\":{\"stdDeviation\":\"1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"hardAlpha\",\"operator\":\"out\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0.0352941 0 0 0 0 0.0352941 0 0 0 0 0.0431373 0 0 0 0.05 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in2\":\"BackgroundImageFix\",\"result\":\"effect1_dropShadow_9155_106307\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in\":\"BackgroundImageFix\",\"in2\":\"effect1_dropShadow_9155_106307\",\"result\":\"BackgroundImageFix\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in\":\"SourceGraphic\",\"in2\":\"BackgroundImageFix\",\"result\":\"shape\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feTurbulence\",\"attributes\":{\"type\":\"fractalNoise\",\"baseFrequency\":\"9.0909090042114258 9.0909090042114258\",\"numOctaves\":\"3\",\"seed\":\"8754\",\"result\":\"displacementX\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feTurbulence\",\"attributes\":{\"type\":\"fractalNoise\",\"baseFrequency\":\"9.0909090042114258 9.0909090042114258\",\"numOctaves\":\"3\",\"seed\":\"8755\",\"result\":\"displacementY\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"displacementX\",\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1\",\"result\":\"displacementXRed\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"displacementY\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 1 0  0 0 0 0 0  0 0 0 0 1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementXRed\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feDisplacementMap\",\"attributes\":{\"in\":\"shape\",\"scale\":\"2.4000000953674316\",\"xChannelSelector\":\"R\",\"yChannelSelector\":\"G\",\"width\":\"100%\",\"height\":\"100%\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComponentTransfer\",\"attributes\":{\"result\":\"sourceDisplacedAlpha\"},\"children\":[{\"type\":\"element\",\"name\":\"feFuncA\",\"attributes\":{\"type\":\"gamma\",\"exponent\":\"0.2\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"shape\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComponentTransfer\",\"attributes\":{\"result\":\"inputSourceAlpha\"},\"children\":[{\"type\":\"element\",\"name\":\"feFuncA\",\"attributes\":{\"type\":\"gamma\",\"exponent\":\"0.2\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"sourceDisplacedAlpha\",\"operator\":\"arithmetic\",\"k1\":\"1\",\"k2\":\"0\",\"k3\":\"0\",\"k4\":\"0\",\"result\":\"displacementAlphasMultiplied\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementAlphasMultiplied\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"0\",\"k3\":\"-0.5\",\"k4\":\"0.5\",\"result\":\"centeringAdjustment\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementX\",\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"arithmetic\",\"k1\":\"1\",\"k2\":\"0\",\"k3\":\"0\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"centeringAdjustment\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1\",\"result\":\"displacementXFinal\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementY\",\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"arithmetic\",\"k1\":\"1\",\"k2\":\"0\",\"k3\":\"0\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"centeringAdjustment\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 1 0  0 0 0 0 0  0 0 0 0 1\",\"result\":\"displacementYFinal\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacementXFinal\",\"in2\":\"displacementYFinal\",\"operator\":\"arithmetic\",\"k1\":\"0\",\"k2\":\"1\",\"k3\":\"1\",\"k4\":\"0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"in\",\"result\":\"displacementMap\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feFlood\",\"attributes\":{\"flood-color\":\"rgb(127, 127, 127)\",\"flood-opacity\":\"1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"displacementAlphasMultiplied\",\"operator\":\"out\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"displacementMap\",\"operator\":\"over\",\"result\":\"displacementMapWithBg\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feDisplacementMap\",\"attributes\":{\"in\":\"shape\",\"scale\":\"2.4000000953674316\",\"xChannelSelector\":\"R\",\"yChannelSelector\":\"G\",\"width\":\"100%\",\"height\":\"100%\",\"result\":\"displacedImage\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"shape\",\"type\":\"matrix\",\"values\":\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 127 0\",\"result\":\"imageOpaque\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feDisplacementMap\",\"attributes\":{\"in\":\"imageOpaque\",\"in2\":\"displacementMapWithBg\",\"scale\":\"2.4000000953674316\",\"xChannelSelector\":\"R\",\"yChannelSelector\":\"G\",\"width\":\"100%\",\"height\":\"100%\",\"result\":\"displacedImageOpaque\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"displacedImage\",\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0\",\"result\":\"displacedImageRed\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"shape\",\"type\":\"matrix\",\"values\":\"0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacedImageRed\",\"operator\":\"atop\",\"result\":\"transparencyRedMap\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"transparencyRedMap\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0\",\"result\":\"transparencyAlphaMap\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in\":\"displacedImageOpaque\",\"in2\":\"imageOpaque\",\"operator\":\"over\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"transparencyAlphaMap\",\"operator\":\"in\",\"result\":\"effect2_texture_9155_106307\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint0_linear_9155_106307\",\"x1\":\"10\",\"y1\":\"3.75\",\"x2\":\"10\",\"y2\":\"15.75\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"#296DFF\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#155AEF\"},\"children\":[]}]}]}]}"),
	name: "Folder"
};
//#endregion
//#region app/components/base/icons/src/public/knowledge/online-drive/Folder.tsx
var Icon = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Folder_default
});
Icon.displayName = "Folder";
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/header/breadcrumbs/bucket.tsx
var Bucket = ({ bucketName, handleBackToBucketList, handleClickBucketName, disabled = false, isActive = false, showSeparator = true }) => {
	const { t } = useTranslation();
	const handleClickItem = useCallback(() => {
		if (!disabled) handleClickBucketName();
	}, [disabled, handleClickBucketName]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(tooltip_default, {
			popupContent: t("onlineDrive.breadcrumbs.allBuckets", { ns: "datasetPipeline" }),
			children: /* @__PURE__ */ jsx("button", {
				type: "button",
				className: "flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-md hover:bg-state-base-hover",
				onClick: handleBackToBucketList,
				children: /* @__PURE__ */ jsx(Icon$1, {})
			})
		}),
		/* @__PURE__ */ jsx("span", {
			className: "system-xs-regular text-divider-deep",
			children: "/"
		}),
		/* @__PURE__ */ jsx("button", {
			type: "button",
			className: cn("max-w-full shrink truncate rounded-md px-[5px] py-1", isActive ? "system-sm-medium text-text-secondary" : "system-sm-regular text-text-tertiary", !disabled && "hover:bg-state-base-hover"),
			disabled,
			onClick: handleClickItem,
			title: bucketName,
			children: bucketName
		}),
		showSeparator && /* @__PURE__ */ jsx("span", {
			className: "system-xs-regular shrink-0 text-divider-deep",
			children: "/"
		})
	] });
};
var bucket_default = React$1.memo(Bucket);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/header/breadcrumbs/drive.tsx
var Drive = ({ breadcrumbs, handleBackToRoot }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("button", {
		type: "button",
		className: cn("max-w-full shrink truncate rounded-md px-[5px] py-1", breadcrumbs.length > 0 && "system-sm-regular text-text-tertiary hover:bg-state-base-hover", breadcrumbs.length === 0 && "system-sm-medium text-text-secondary"),
		onClick: handleBackToRoot,
		disabled: breadcrumbs.length === 0,
		children: t("onlineDrive.breadcrumbs.allFiles", { ns: "datasetPipeline" })
	}), breadcrumbs.length > 0 && /* @__PURE__ */ jsx("span", {
		className: "system-xs-regular text-divider-deep",
		children: "/"
	})] });
};
var drive_default = React$1.memo(Drive);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/header/breadcrumbs/dropdown/item.tsx
var Item$2 = ({ name, index, onBreadcrumbClick }) => {
	return /* @__PURE__ */ jsx("div", {
		className: "system-md-regular rounded-lg px-3 py-1.5 text-text-secondary hover:bg-state-base-hover",
		onClick: useCallback(() => {
			onBreadcrumbClick(index);
		}, [index, onBreadcrumbClick]),
		children: name
	});
};
var item_default$2 = React$1.memo(Item$2);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/header/breadcrumbs/dropdown/menu.tsx
var Menu = ({ breadcrumbs, startIndex, onBreadcrumbClick }) => {
	return /* @__PURE__ */ jsx("div", {
		className: "flex w-[136px] flex-col rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-1 shadow-lg shadow-shadow-shadow-5 backdrop-blur-[5px]",
		children: breadcrumbs.map((breadcrumb, index) => {
			return /* @__PURE__ */ jsx(item_default$2, {
				name: breadcrumb,
				index: startIndex + index,
				onBreadcrumbClick
			}, `${breadcrumb}-${index}`);
		})
	});
};
var menu_default = React$1.memo(Menu);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/header/breadcrumbs/dropdown/index.tsx
var Dropdown = ({ startIndex, breadcrumbs, onBreadcrumbClick }) => {
	const [open, setOpen] = useState(false);
	const handleTrigger = useCallback(() => {
		setOpen((prev) => !prev);
	}, []);
	const handleBreadCrumbClick = useCallback((index) => {
		onBreadcrumbClick(index);
		setOpen(false);
	}, [onBreadcrumbClick]);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-start",
		offset: {
			mainAxis: 4,
			crossAxis: -13
		},
		children: [
			/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
				onClick: handleTrigger,
				children: /* @__PURE__ */ jsx("button", {
					type: "button",
					className: cn("flex size-6 items-center justify-center rounded-md", open ? "bg-state-base-hover" : "hover:bg-state-base-hover"),
					children: /* @__PURE__ */ jsx(CH, { className: "size-4 text-text-tertiary" })
				})
			}),
			/* @__PURE__ */ jsx(PortalToFollowElemContent, {
				className: "z-[11]",
				children: /* @__PURE__ */ jsx(menu_default, {
					breadcrumbs,
					startIndex,
					onBreadcrumbClick: handleBreadCrumbClick
				})
			}),
			/* @__PURE__ */ jsx("span", {
				className: "system-xs-regular text-divider-deep",
				children: "/"
			})
		]
	});
};
var dropdown_default = React$1.memo(Dropdown);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/header/breadcrumbs/item.tsx
var BreadcrumbItem = ({ name, index, handleClick, disabled = false, isActive = false, showSeparator = true }) => {
	const handleClickItem = useCallback(() => {
		if (!disabled) handleClick(index);
	}, [
		disabled,
		handleClick,
		index
	]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("button", {
		type: "button",
		className: cn("max-w-full shrink truncate rounded-md px-[5px] py-1", isActive ? "system-sm-medium text-text-secondary" : "system-sm-regular text-text-tertiary", !disabled && "hover:bg-state-base-hover"),
		disabled,
		onClick: handleClickItem,
		title: name,
		children: name
	}), showSeparator && /* @__PURE__ */ jsx("span", {
		className: "system-xs-regular shrink-0 text-divider-deep",
		children: "/"
	})] });
};
BreadcrumbItem.displayName = "BreadcrumbItem";
var item_default$1 = React$1.memo(BreadcrumbItem);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/header/breadcrumbs/index.tsx
var Breadcrumbs = ({ breadcrumbs, keywords, bucket, searchResultsLength, isInPipeline }) => {
	const { t } = useTranslation();
	const dataSourceStore = useDataSourceStore();
	const hasBucket = useDataSourceStoreWithSelector((s) => s.hasBucket);
	const showSearchResult = !!keywords && searchResultsLength > 0;
	const showBucketListTitle = breadcrumbs.length === 0 && hasBucket && bucket === "";
	const displayBreadcrumbNum = useMemo(() => {
		const num = isInPipeline ? 2 : 3;
		return bucket ? num - 1 : num;
	}, [isInPipeline, bucket]);
	const breadcrumbsConfig = useMemo(() => {
		const prefixToDisplay = breadcrumbs.slice(0, displayBreadcrumbNum - 1);
		const collapsedBreadcrumbs = breadcrumbs.slice(displayBreadcrumbNum - 1, breadcrumbs.length - 1);
		return {
			original: breadcrumbs,
			needCollapsed: breadcrumbs.length > displayBreadcrumbNum,
			prefixBreadcrumbs: prefixToDisplay,
			collapsedBreadcrumbs,
			lastBreadcrumb: breadcrumbs[breadcrumbs.length - 1]
		};
	}, [displayBreadcrumbNum, breadcrumbs]);
	const handleBackToBucketList = useCallback(() => {
		const { setOnlineDriveFileList, setSelectedFileIds, setBreadcrumbs, setPrefix, setBucket } = dataSourceStore.getState();
		setOnlineDriveFileList([]);
		setSelectedFileIds([]);
		setBucket("");
		setBreadcrumbs([]);
		setPrefix([]);
	}, [dataSourceStore]);
	const handleClickBucketName = useCallback(() => {
		const { setOnlineDriveFileList, setSelectedFileIds, setBreadcrumbs, setPrefix } = dataSourceStore.getState();
		setOnlineDriveFileList([]);
		setSelectedFileIds([]);
		setBreadcrumbs([]);
		setPrefix([]);
	}, [dataSourceStore]);
	const handleBackToRoot = useCallback(() => {
		const { setOnlineDriveFileList, setSelectedFileIds, setBreadcrumbs, setPrefix } = dataSourceStore.getState();
		setOnlineDriveFileList([]);
		setSelectedFileIds([]);
		setBreadcrumbs([]);
		setPrefix([]);
	}, [dataSourceStore]);
	const handleClickBreadcrumb = useCallback((index) => {
		const { breadcrumbs, prefix, setOnlineDriveFileList, setSelectedFileIds, setBreadcrumbs, setPrefix } = dataSourceStore.getState();
		const newBreadcrumbs = breadcrumbs.slice(0, index + 1);
		const newPrefix = prefix.slice(0, index + 1);
		setOnlineDriveFileList([]);
		setSelectedFileIds([]);
		setBreadcrumbs(newBreadcrumbs);
		setPrefix(newPrefix);
	}, [dataSourceStore]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex grow items-center overflow-hidden",
		children: [
			showSearchResult && /* @__PURE__ */ jsx("div", {
				className: "system-sm-medium text-test-secondary px-[5px]",
				children: t("onlineDrive.breadcrumbs.searchResult", {
					ns: "datasetPipeline",
					searchResultsLength,
					folderName: breadcrumbs.length > 0 ? breadcrumbs[breadcrumbs.length - 1] : bucket
				})
			}),
			!showSearchResult && showBucketListTitle && /* @__PURE__ */ jsx("div", {
				className: "system-sm-medium text-test-secondary px-[5px]",
				children: t("onlineDrive.breadcrumbs.allBuckets", { ns: "datasetPipeline" })
			}),
			!showSearchResult && !showBucketListTitle && /* @__PURE__ */ jsxs("div", {
				className: "flex w-full items-center gap-x-0.5 overflow-hidden",
				children: [
					hasBucket && bucket && /* @__PURE__ */ jsx(bucket_default, {
						bucketName: bucket,
						handleBackToBucketList,
						handleClickBucketName,
						isActive: breadcrumbs.length === 0,
						disabled: breadcrumbs.length === 0,
						showSeparator: breadcrumbs.length > 0
					}),
					!hasBucket && /* @__PURE__ */ jsx(drive_default, {
						breadcrumbs,
						handleBackToRoot
					}),
					!breadcrumbsConfig.needCollapsed && /* @__PURE__ */ jsx(Fragment$1, { children: breadcrumbsConfig.original.map((breadcrumb, index) => {
						const isLast = index === breadcrumbsConfig.original.length - 1;
						return /* @__PURE__ */ jsx(item_default$1, {
							index,
							handleClick: handleClickBreadcrumb,
							name: breadcrumb,
							isActive: isLast,
							showSeparator: !isLast,
							disabled: isLast
						}, `${breadcrumb}-${index}`);
					}) }),
					breadcrumbsConfig.needCollapsed && /* @__PURE__ */ jsxs(Fragment$1, { children: [
						breadcrumbsConfig.prefixBreadcrumbs.map((breadcrumb, index) => {
							return /* @__PURE__ */ jsx(item_default$1, {
								index,
								handleClick: handleClickBreadcrumb,
								name: breadcrumb
							}, `${breadcrumb}-${index}`);
						}),
						/* @__PURE__ */ jsx(dropdown_default, {
							startIndex: breadcrumbsConfig.prefixBreadcrumbs.length,
							breadcrumbs: breadcrumbsConfig.collapsedBreadcrumbs,
							onBreadcrumbClick: handleClickBreadcrumb
						}),
						/* @__PURE__ */ jsx(item_default$1, {
							index: breadcrumbs.length - 1,
							handleClick: handleClickBreadcrumb,
							name: breadcrumbsConfig.lastBreadcrumb,
							isActive: true,
							disabled: true,
							showSeparator: false
						})
					] })
				]
			})
		]
	});
};
var breadcrumbs_default = React$1.memo(Breadcrumbs);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/header/index.tsx
var Header = ({ breadcrumbs, inputValue, keywords, bucket, isInPipeline, searchResultsLength, handleInputChange, handleResetKeywords }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-x-2 bg-components-panel-bg p-1 pl-3",
		children: [/* @__PURE__ */ jsx(breadcrumbs_default, {
			breadcrumbs,
			keywords,
			bucket,
			searchResultsLength,
			isInPipeline
		}), /* @__PURE__ */ jsx(Input, {
			value: inputValue,
			onChange: handleInputChange,
			onClear: handleResetKeywords,
			placeholder: t("onlineDrive.breadcrumbs.searchPlaceholder", { ns: "datasetPipeline" }),
			showLeftIcon: true,
			showClearIcon: true,
			wrapperClassName: "w-[200px] h-8 shrink-0"
		})]
	});
};
var header_default = React$1.memo(Header);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/list/empty-folder.tsx
var EmptyFolder = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("div", {
		className: "flex size-full items-center justify-center rounded-[10px] bg-background-section px-1 py-1.5",
		children: /* @__PURE__ */ jsx("span", {
			className: "system-xs-regular text-text-tertiary",
			children: t("onlineDrive.emptyFolder", { ns: "datasetPipeline" })
		})
	});
};
var empty_folder_default = React$1.memo(EmptyFolder);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/list/empty-search-result.tsx
var EmptySearchResult = ({ onResetKeywords }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex size-full flex-col items-center justify-center gap-y-2 rounded-[10px] bg-background-section p-6",
		children: [
			/* @__PURE__ */ jsx(Icon$3, { className: "size-8 text-text-tertiary" }),
			/* @__PURE__ */ jsx("div", {
				className: "system-sm-regular text-text-secondary",
				children: t("onlineDrive.emptySearchResult", { ns: "datasetPipeline" })
			}),
			/* @__PURE__ */ jsx(Button, {
				variant: "secondary-accent",
				size: "small",
				onClick: onResetKeywords,
				className: "px-1.5",
				children: /* @__PURE__ */ jsx("span", {
					className: "px-[3px]",
					children: t("onlineDrive.resetKeywords", { ns: "datasetPipeline" })
				})
			})
		]
	});
};
var empty_search_result_default = React$1.memo(EmptySearchResult);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/list/utils.ts
var getFileExtension = (fileName) => {
	if (!fileName) return "";
	const parts = fileName.split(".");
	if (parts.length <= 1 || parts[0] === "" && parts.length === 2) return "";
	return parts[parts.length - 1].toLowerCase();
};
var getFileType = (fileName) => {
	const extension = getFileExtension(fileName);
	if (extension === "gif") return FileAppearanceTypeEnum.gif;
	if (FILE_EXTS.image.includes(extension.toUpperCase())) return FileAppearanceTypeEnum.image;
	if (FILE_EXTS.video.includes(extension.toUpperCase())) return FileAppearanceTypeEnum.video;
	if (FILE_EXTS.audio.includes(extension.toUpperCase())) return FileAppearanceTypeEnum.audio;
	if (extension === "html" || extension === "htm" || extension === "xml" || extension === "json") return FileAppearanceTypeEnum.code;
	if (extension === "pdf") return FileAppearanceTypeEnum.pdf;
	if (extension === "md" || extension === "markdown" || extension === "mdx") return FileAppearanceTypeEnum.markdown;
	if (extension === "xlsx" || extension === "xls" || extension === "csv") return FileAppearanceTypeEnum.excel;
	if (extension === "docx" || extension === "doc") return FileAppearanceTypeEnum.word;
	if (extension === "pptx" || extension === "ppt") return FileAppearanceTypeEnum.ppt;
	if (FILE_EXTS.document.includes(extension.toUpperCase())) return FileAppearanceTypeEnum.document;
	return FileAppearanceTypeEnum.custom;
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/list/file-icon.tsx
var FileIcon = ({ type, fileName, size = "md", className }) => {
	const fileType = useMemo(() => {
		if (type === OnlineDriveFileType.bucket || type === OnlineDriveFileType.folder) return "custom";
		return getFileType(fileName);
	}, [type, fileName]);
	if (type === OnlineDriveFileType.bucket) return /* @__PURE__ */ jsx(Icon$2, { className: cn("size-[18px]", className) });
	if (type === OnlineDriveFileType.folder) return /* @__PURE__ */ jsx(Icon, { className: cn("size-[18px]", className) });
	return /* @__PURE__ */ jsx(file_type_icon_default, {
		size,
		type: fileType,
		className: cn("size-[18px]", className)
	});
};
var file_icon_default = React$1.memo(FileIcon);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/list/item.tsx
var Item$1 = ({ file, isSelected, disabled = false, isMultipleChoice = true, onSelect, onOpen }) => {
	const { t } = useTranslation();
	const { id, name, type, size } = file;
	const isBucket = type === "bucket";
	const isFolder = type === "folder";
	const Wrapper = disabled ? tooltip_default : React$1.Fragment;
	const wrapperProps = disabled ? {
		popupContent: t("onlineDrive.notSupportedFileType", { ns: "datasetPipeline" }),
		position: "top-end",
		offset: {
			mainAxis: 4,
			crossAxis: -104
		}
	} : {};
	const handleSelect = useCallback((e) => {
		e.stopPropagation();
		onSelect(file);
	}, [file, onSelect]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-[3px] hover:bg-state-base-hover",
		onClick: useCallback((e) => {
			e.stopPropagation();
			if (disabled) return;
			if (isBucket || isFolder) {
				onOpen(file);
				return;
			}
			onSelect(file);
		}, [
			disabled,
			file,
			isBucket,
			isFolder,
			onOpen,
			onSelect
		]),
		children: [
			!isBucket && isMultipleChoice && /* @__PURE__ */ jsx(Checkbox, {
				className: "shrink-0",
				disabled,
				id,
				checked: isSelected,
				onCheck: handleSelect
			}),
			!isBucket && !isMultipleChoice && /* @__PURE__ */ jsx(ui_default, {
				className: "shrink-0",
				disabled,
				isChecked: isSelected,
				onCheck: handleSelect
			}),
			/* @__PURE__ */ jsx(Wrapper, {
				...wrapperProps,
				children: /* @__PURE__ */ jsxs("div", {
					className: cn("flex grow items-center gap-x-1 overflow-hidden py-0.5", disabled && "opacity-30"),
					children: [
						/* @__PURE__ */ jsx(file_icon_default, {
							type,
							fileName: name,
							className: "shrink-0 transform-gpu"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "grow truncate text-text-secondary system-sm-medium",
							title: name,
							children: name
						}),
						!isFolder && typeof size === "number" && /* @__PURE__ */ jsx("span", {
							className: "shrink-0 text-text-tertiary system-xs-regular",
							children: formatFileSize(size)
						})
					]
				})
			})
		]
	});
};
var item_default = React$1.memo(Item$1);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/list/index.tsx
var List = ({ fileList, selectedFileIds, keywords, handleResetKeywords, handleSelectFile, handleOpenFolder, isLoading, supportBatchUpload }) => {
	const { t } = useTranslation();
	const anchorRef = useRef(null);
	const observerRef = useRef(null);
	const dataSourceStore = useDataSourceStore();
	useEffect(() => {
		if (anchorRef.current) {
			observerRef.current = new IntersectionObserver((entries) => {
				const { setNextPageParameters, currentNextPageParametersRef, isTruncated } = dataSourceStore.getState();
				if (entries[0].isIntersecting && isTruncated.current && !isLoading) setNextPageParameters(currentNextPageParametersRef.current);
			}, { rootMargin: "100px" });
			observerRef.current.observe(anchorRef.current);
		}
		return () => observerRef.current?.disconnect();
	}, [
		anchorRef,
		isLoading,
		dataSourceStore
	]);
	const isAllLoading = isLoading && fileList.length === 0 && keywords.length === 0;
	const isPartialLoading = isLoading && fileList.length > 0;
	const isEmptyFolder = !isLoading && fileList.length === 0 && keywords.length === 0;
	const isSearchResultEmpty = !isLoading && fileList.length === 0 && keywords.length > 0;
	return /* @__PURE__ */ jsxs("div", {
		className: "grow overflow-hidden p-1 pt-0",
		children: [
			isAllLoading && /* @__PURE__ */ jsx(Loading, { type: "app" }),
			isEmptyFolder && /* @__PURE__ */ jsx(empty_folder_default, {}),
			isSearchResultEmpty && /* @__PURE__ */ jsx(empty_search_result_default, { onResetKeywords: handleResetKeywords }),
			fileList.length > 0 && /* @__PURE__ */ jsxs("div", {
				className: "flex h-full flex-col gap-y-px overflow-y-auto rounded-[10px] bg-background-section px-1 py-1.5",
				children: [
					fileList.map((file) => {
						return /* @__PURE__ */ jsx(item_default, {
							file,
							isSelected: selectedFileIds.includes(file.id),
							onSelect: handleSelectFile,
							onOpen: handleOpenFolder,
							isMultipleChoice: supportBatchUpload
						}, file.id);
					}),
					isPartialLoading && /* @__PURE__ */ jsx("div", {
						className: "flex items-center justify-center py-2",
						role: "status",
						"aria-live": "polite",
						"aria-label": t("loading", { ns: "appApi" }),
						children: /* @__PURE__ */ jsx(Dm, { className: "animation-spin size-4 text-text-tertiary" })
					}),
					/* @__PURE__ */ jsx("div", {
						ref: anchorRef,
						className: "h-0"
					})
				]
			})
		]
	});
};
var list_default = React$1.memo(List);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/file-list/index.tsx
var FileList = ({ fileList, selectedFileIds, breadcrumbs, keywords, bucket, resetKeywords, updateKeywords, searchResultsLength, handleSelectFile, handleOpenFolder, isInPipeline, isLoading, supportBatchUpload }) => {
	const [inputValue, setInputValue] = useState(keywords);
	const { run: updateKeywordsWithDebounce } = useDebounceFn((keywords) => {
		updateKeywords(keywords);
	}, { wait: 500 });
	const handleInputChange = (e) => {
		const keywords = e.target.value;
		setInputValue(keywords);
		updateKeywordsWithDebounce(keywords);
	};
	const handleResetKeywords = () => {
		setInputValue("");
		resetKeywords();
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-[400px] flex-col overflow-hidden rounded-xl border border-components-panel-border bg-components-panel-bg shadow-xs shadow-shadow-shadow-3",
		children: [/* @__PURE__ */ jsx(header_default, {
			breadcrumbs,
			inputValue,
			keywords,
			bucket,
			isInPipeline,
			handleInputChange,
			searchResultsLength,
			handleResetKeywords
		}), /* @__PURE__ */ jsx(list_default, {
			fileList,
			selectedFileIds,
			keywords,
			handleResetKeywords,
			handleOpenFolder,
			handleSelectFile,
			isLoading,
			supportBatchUpload
		})]
	});
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/utils.ts
var isFile = (type) => {
	return type === "file";
};
var isBucketListInitiation = (data, prefix, bucket) => {
	if (bucket || prefix.length > 0) return false;
	return data.every((item) => !!item.bucket) && (data.length > 1 || data.length === 1 && !!data[0].bucket && data[0].files.length === 0);
};
var convertOnlineDriveData = (data, prefix, bucket) => {
	const fileList = [];
	let isTruncated = false;
	let nextPageParameters = {};
	let hasBucket = false;
	if (data.length === 0) return {
		fileList,
		isTruncated,
		nextPageParameters,
		hasBucket
	};
	if (isBucketListInitiation(data, prefix, bucket)) {
		data.forEach((item) => {
			fileList.push({
				id: item.bucket,
				name: item.bucket,
				type: OnlineDriveFileType.bucket
			});
		});
		hasBucket = true;
	} else {
		data[0].files.forEach((file) => {
			const { id, name, size, type } = file;
			const isFileType = isFile(type);
			fileList.push({
				id,
				name,
				size: isFileType ? size : void 0,
				type: isFileType ? OnlineDriveFileType.file : OnlineDriveFileType.folder
			});
		});
		isTruncated = data[0].is_truncated ?? false;
		nextPageParameters = data[0].next_page_parameters ?? {};
		hasBucket = !!data[0].bucket;
	}
	return {
		fileList,
		isTruncated,
		nextPageParameters,
		hasBucket
	};
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/online-drive/index.tsx
var OnlineDrive = ({ nodeId, nodeData, isInPipeline = false, supportBatchUpload = true, onCredentialChange }) => {
	const docLink = useDocLink();
	const [isInitialMount, setIsInitialMount] = useState(true);
	const pipelineId = useDatasetDetailContextWithSelector((s) => s.dataset?.pipeline_id);
	const setShowAccountSettingModal = useModalContextSelector((s) => s.setShowAccountSettingModal);
	const { nextPageParameters, breadcrumbs, prefix, keywords, bucket, selectedFileIds, onlineDriveFileList, currentCredentialId } = useDataSourceStoreWithSelector(useShallow((state) => ({
		nextPageParameters: state.nextPageParameters,
		breadcrumbs: state.breadcrumbs,
		prefix: state.prefix,
		keywords: state.keywords,
		bucket: state.bucket,
		selectedFileIds: state.selectedFileIds,
		onlineDriveFileList: state.onlineDriveFileList,
		currentCredentialId: state.currentCredentialId
	})));
	const dataSourceStore = useDataSourceStore();
	const [isLoading, setIsLoading] = useState(false);
	const isLoadingRef = useRef(false);
	const { data: dataSourceAuth } = useGetDataSourceAuth({
		pluginId: nodeData.plugin_id,
		provider: nodeData.provider_name
	});
	const datasourceNodeRunURL = !isInPipeline ? `/rag/pipelines/${pipelineId}/workflows/published/datasource/nodes/${nodeId}/run` : `/rag/pipelines/${pipelineId}/workflows/draft/datasource/nodes/${nodeId}/run`;
	const getOnlineDriveFiles = useCallback(async () => {
		if (isLoadingRef.current) return;
		const { nextPageParameters, prefix, bucket, onlineDriveFileList, currentCredentialId } = dataSourceStore.getState();
		setIsLoading(true);
		isLoadingRef.current = true;
		ssePost(datasourceNodeRunURL, { body: {
			inputs: {
				prefix: prefix[prefix.length - 1],
				bucket,
				next_page_parameters: nextPageParameters,
				max_keys: 30
			},
			datasource_type: DatasourceType.onlineDrive,
			credential_id: currentCredentialId
		} }, {
			onDataSourceNodeCompleted: (documentsData) => {
				const { setOnlineDriveFileList, isTruncated, currentNextPageParametersRef, setHasBucket } = dataSourceStore.getState();
				const { fileList: newFileList, isTruncated: newIsTruncated, nextPageParameters: newNextPageParameters, hasBucket: newHasBucket } = convertOnlineDriveData(documentsData.data, breadcrumbs, bucket);
				setOnlineDriveFileList([...onlineDriveFileList, ...newFileList]);
				isTruncated.current = newIsTruncated;
				currentNextPageParametersRef.current = newNextPageParameters;
				setHasBucket(newHasBucket);
				setIsLoading(false);
				isLoadingRef.current = false;
			},
			onDataSourceNodeError: (error) => {
				toast.error(error.error);
				setIsLoading(false);
				isLoadingRef.current = false;
			}
		});
	}, [
		dataSourceStore,
		datasourceNodeRunURL,
		breadcrumbs
	]);
	useEffect(() => {
		if (!currentCredentialId) return;
		if (isInitialMount) {
			if (onlineDriveFileList.length === 0) getOnlineDriveFiles();
			setIsInitialMount(false);
		} else getOnlineDriveFiles();
	}, [
		nextPageParameters,
		prefix,
		bucket,
		currentCredentialId
	]);
	const filteredOnlineDriveFileList = useMemo(() => {
		if (keywords) return onlineDriveFileList.filter((file) => file.name.toLowerCase().includes(keywords.toLowerCase()));
		return onlineDriveFileList;
	}, [onlineDriveFileList, keywords]);
	const updateKeywords = useCallback((keywords) => {
		const { setKeywords } = dataSourceStore.getState();
		setKeywords(keywords);
	}, [dataSourceStore]);
	const resetKeywords = useCallback(() => {
		const { setKeywords } = dataSourceStore.getState();
		setKeywords("");
	}, [dataSourceStore]);
	const handleSelectFile = useCallback((file) => {
		const { selectedFileIds, setSelectedFileIds } = dataSourceStore.getState();
		if (file.type === OnlineDriveFileType.bucket) return;
		setSelectedFileIds(produce(selectedFileIds, (draft) => {
			if (draft.includes(file.id)) {
				const index = draft.indexOf(file.id);
				draft.splice(index, 1);
			} else {
				if (!supportBatchUpload && draft.length >= 1) return;
				draft.push(file.id);
			}
		}));
	}, [dataSourceStore, supportBatchUpload]);
	const handleOpenFolder = useCallback((file) => {
		const { breadcrumbs, prefix, setBreadcrumbs, setPrefix, setBucket, setOnlineDriveFileList, setSelectedFileIds } = dataSourceStore.getState();
		if (file.type === OnlineDriveFileType.file) return;
		setOnlineDriveFileList([]);
		if (file.type === OnlineDriveFileType.bucket) setBucket(file.name);
		else {
			setSelectedFileIds([]);
			const newBreadcrumbs = produce(breadcrumbs, (draft) => {
				draft.push(file.name);
			});
			const newPrefix = produce(prefix, (draft) => {
				draft.push(file.id);
			});
			setBreadcrumbs(newBreadcrumbs);
			setPrefix(newPrefix);
		}
	}, [dataSourceStore]);
	const handleSetting = useCallback(() => {
		setShowAccountSettingModal({ payload: ACCOUNT_SETTING_TAB.DATA_SOURCE });
	}, [setShowAccountSettingModal]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-y-2",
		children: [/* @__PURE__ */ jsx(header_default$1, {
			docTitle: "Docs",
			docLink: docLink("/use-dify/knowledge/knowledge-pipeline/authorize-data-source"),
			onClickConfiguration: handleSetting,
			pluginName: nodeData.datasource_label,
			currentCredentialId,
			onCredentialChange,
			credentials: dataSourceAuth?.result || []
		}), /* @__PURE__ */ jsx(FileList, {
			fileList: filteredOnlineDriveFileList,
			selectedFileIds,
			breadcrumbs,
			keywords,
			bucket,
			resetKeywords,
			updateKeywords,
			searchResultsLength: filteredOnlineDriveFileList.length,
			handleSelectFile,
			handleOpenFolder,
			isInPipeline,
			isLoading,
			supportBatchUpload
		})]
	});
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/website-crawl/base/checkbox-with-label.tsx
var CheckboxWithLabel = ({ className = "", isChecked, onChange, label, labelClassName, tooltip }) => {
	return /* @__PURE__ */ jsxs("label", {
		className: cn("flex items-center space-x-2", className),
		children: [
			/* @__PURE__ */ jsx(Checkbox, {
				checked: isChecked,
				onCheck: () => onChange(!isChecked)
			}),
			/* @__PURE__ */ jsx("div", {
				className: cn("system-sm-medium text-text-secondary", labelClassName),
				children: label
			}),
			tooltip && /* @__PURE__ */ jsx(tooltip_default, {
				popupContent: /* @__PURE__ */ jsx("div", {
					className: "w-[200px]",
					children: tooltip
				}),
				triggerClassName: "ml-0.5 w-4 h-4"
			})
		]
	});
};
var checkbox_with_label_default = React$1.memo(CheckboxWithLabel);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/website-crawl/base/crawled-result-item.tsx
var CrawledResultItem = ({ payload, isChecked, onCheckChange, isPreview, onPreview, showPreview, isMultipleChoice = true }) => {
	const { t } = useTranslation();
	const handleCheckChange = useCallback(() => {
		onCheckChange(!isChecked);
	}, [isChecked, onCheckChange]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative flex cursor-pointer gap-x-2 rounded-lg p-2", isPreview ? "bg-state-base-active" : "group hover:bg-state-base-hover"),
		children: [
			isMultipleChoice ? /* @__PURE__ */ jsx(Checkbox, {
				className: "shrink-0",
				checked: isChecked,
				onCheck: handleCheckChange
			}) : /* @__PURE__ */ jsx(ui_default, {
				className: "shrink-0",
				isChecked,
				onCheck: handleCheckChange
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 grow flex-col gap-y-0.5",
				children: [/* @__PURE__ */ jsx("div", {
					className: "system-sm-medium truncate text-text-secondary",
					title: payload.title,
					children: payload.title
				}), /* @__PURE__ */ jsx("div", {
					className: "system-xs-regular truncate text-text-tertiary",
					title: payload.source_url,
					children: payload.source_url
				})]
			}),
			showPreview && /* @__PURE__ */ jsx(Button, {
				size: "small",
				onClick: onPreview,
				className: "system-xs-medium-uppercase right-2 top-2 hidden px-1.5 group-hover:absolute group-hover:block",
				children: t("stepOne.website.preview", { ns: "datasetCreation" })
			})
		]
	});
};
var crawled_result_item_default = React$1.memo(CrawledResultItem);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/website-crawl/base/crawled-result.tsx
var I18N_PREFIX$2 = "stepOne.website";
var CrawledResult = ({ className = "", previewIndex, list, checkedList, onSelectedChange, usedTime, onPreview, showPreview = false, isMultipleChoice = true }) => {
	const { t } = useTranslation();
	const isCheckAll = checkedList.length === list.length;
	const handleCheckedAll = useCallback(() => {
		if (!isCheckAll) onSelectedChange(list);
		else onSelectedChange([]);
	}, [
		isCheckAll,
		list,
		onSelectedChange
	]);
	const handleItemCheckChange = useCallback((item) => {
		return (checked) => {
			if (checked) if (isMultipleChoice) onSelectedChange([...checkedList, item]);
			else onSelectedChange([item]);
			else onSelectedChange(checkedList.filter((checkedItem) => checkedItem.source_url !== item.source_url));
		};
	}, [
		checkedList,
		onSelectedChange,
		isMultipleChoice
	]);
	const handlePreview = useCallback((index) => {
		if (!onPreview) return;
		onPreview(list[index], index);
	}, [list, onPreview]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-y-2", className),
		children: [/* @__PURE__ */ jsx("div", {
			className: "system-sm-medium pt-2 text-text-primary",
			children: t(`${I18N_PREFIX$2}.scrapTimeInfo`, {
				ns: "datasetCreation",
				total: list.length,
				time: usedTime.toFixed(1)
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "overflow-hidden rounded-xl border border-components-panel-border bg-components-panel-bg",
			children: [isMultipleChoice && /* @__PURE__ */ jsx("div", {
				className: "flex items-center px-4 py-2",
				children: /* @__PURE__ */ jsx(checkbox_with_label_default, {
					isChecked: isCheckAll,
					onChange: handleCheckedAll,
					label: isCheckAll ? t(`${I18N_PREFIX$2}.resetAll`, { ns: "datasetCreation" }) : t(`${I18N_PREFIX$2}.selectAll`, { ns: "datasetCreation" })
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-y-px border-t border-divider-subtle bg-background-default-subtle p-2",
				children: list.map((item, index) => /* @__PURE__ */ jsx(crawled_result_item_default, {
					payload: item,
					isChecked: checkedList.some((checkedItem) => checkedItem.source_url === item.source_url),
					onCheckChange: handleItemCheckChange(item),
					isPreview: index === previewIndex,
					onPreview: handlePreview.bind(null, index),
					showPreview,
					isMultipleChoice
				}, item.source_url))
			})]
		})]
	});
};
var crawled_result_default = React$1.memo(CrawledResult);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/website-crawl/base/crawling.tsx
var Block = React$1.memo(({ className }) => {
	return /* @__PURE__ */ jsx("div", { className: cn("bg-text-quaternary opacity-20", className) });
});
var Item = React$1.memo(({ firstLineWidth, secondLineWidth }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex gap-x-2 px-2 py-[5px]",
		children: [/* @__PURE__ */ jsx("div", {
			className: "py-0.5",
			children: /* @__PURE__ */ jsx(Block, { className: "size-4 rounded-[4px]" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex grow flex-col",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex h-5 w-full items-center",
				children: /* @__PURE__ */ jsx(Block, { className: cn("h-2.5 rounded-sm", firstLineWidth) })
			}), /* @__PURE__ */ jsx("div", {
				className: "flex h-[18px] w-full items-center",
				children: /* @__PURE__ */ jsx(Block, { className: cn("h-1.5 rounded-sm", secondLineWidth) })
			})]
		})]
	});
});
var Crawling = ({ className = "", crawledNum, totalNum }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("mt-2 flex flex-col gap-y-2 pt-2", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "system-sm-medium text-text-primary",
			children: [
				t("stepOne.website.totalPageScraped", { ns: "datasetCreation" }),
				" ",
				crawledNum,
				"/",
				totalNum
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "overflow-hidden rounded-xl border border-components-panel-border bg-components-panel-bg",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-x-2 px-4 py-2",
				children: [/* @__PURE__ */ jsx(Block, { className: "size-4 rounded-[4px]" }), /* @__PURE__ */ jsx(Block, { className: "h-2.5 w-14 rounded-sm" })]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-px border-t border-divider-subtle bg-background-default-subtle p-2",
				children: [
					{
						firstLineWidth: "w-[35%]",
						secondLineWidth: "w-[50%]"
					},
					{
						firstLineWidth: "w-[40%]",
						secondLineWidth: "w-[45%]"
					},
					{
						firstLineWidth: "w-[30%]",
						secondLineWidth: "w-[36%]"
					}
				].map((item, index) => /* @__PURE__ */ jsx(Item, {
					firstLineWidth: item.firstLineWidth,
					secondLineWidth: item.secondLineWidth
				}, index))
			})]
		})]
	});
};
var crawling_default = React$1.memo(Crawling);
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/website-crawl/base/error-message.tsx
var ErrorMessage = ({ className, title, errorMsg }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex gap-x-0.5 rounded-xl border-[0.5px] border-components-panel-border bg-opacity-40 bg-toast-error-bg p-2 shadow-xs shadow-shadow-shadow-3", className),
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex size-6 items-center justify-center",
			children: /* @__PURE__ */ jsx(ft, { className: "h-4 w-4 text-text-destructive" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-y-0.5 py-1",
			children: [/* @__PURE__ */ jsx("div", {
				className: "system-xs-medium text-text-primary",
				children: title
			}), errorMsg && /* @__PURE__ */ jsx("div", {
				className: "system-xs-regular text-text-secondary",
				children: errorMsg
			})]
		})]
	});
};
var error_message_default = React$1.memo(ErrorMessage);
//#endregion
//#region app/components/base/form/form-scenarios/base/utils.ts
var generateZodSchema = (fields) => {
	const shape = {};
	fields.forEach((field) => {
		let zodType;
		switch (field.type) {
			case BaseFieldType.textInput:
			case BaseFieldType.paragraph:
				zodType = string();
				break;
			case BaseFieldType.numberInput:
				zodType = number();
				break;
			case BaseFieldType.checkbox:
				zodType = boolean();
				break;
			case BaseFieldType.select:
				zodType = string();
				break;
			default:
				zodType = any();
				break;
		}
		if (field.maxLength) {
			if ([BaseFieldType.textInput, BaseFieldType.paragraph].includes(field.type)) zodType = zodType.max(field.maxLength, `${field.label} exceeds max length of ${field.maxLength}`);
		}
		if (field.min) {
			if ([BaseFieldType.numberInput].includes(field.type)) zodType = zodType.min(field.min, `${field.label} must be at least ${field.min}`);
		}
		if (field.max) {
			if ([BaseFieldType.numberInput].includes(field.type)) zodType = zodType.max(field.max, `${field.label} exceeds max value of ${field.max}`);
		}
		if (field.required) {
			if ([BaseFieldType.textInput, BaseFieldType.paragraph].includes(field.type)) zodType = zodType.nonempty(`${field.label} is required`);
		} else zodType = zodType.optional().nullable();
		shape[field.variable] = zodType;
	});
	return object(shape);
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/website-crawl/base/options/index.tsx
var I18N_PREFIX$1 = "stepOne.website";
var Options = ({ variables, step, runDisabled, onSubmit }) => {
	const { t } = useTranslation();
	const initialData = useInitialData(variables);
	const configurations = useConfigurations(variables);
	const schema = useMemo(() => {
		return generateZodSchema(configurations);
	}, [configurations]);
	const form = useAppForm({
		defaultValues: initialData,
		validators: { onSubmit: ({ value }) => {
			const result = schema.safeParse(value);
			if (!result.success) {
				const firstIssue = result.error.issues[0];
				const errorMessage = `"${firstIssue.path.join(".")}" ${firstIssue.message}`;
				toast.error(errorMessage);
				return errorMessage;
			}
		} },
		onSubmit: ({ value }) => {
			onSubmit(value);
		}
	});
	const [fold, { toggle: foldToggle, setTrue: foldHide, setFalse: foldShow }] = useBoolean(false);
	useEffect(() => {
		if (step !== CrawlStep.init) foldHide();
		else foldShow();
	}, [step]);
	const isRunning = useMemo(() => step === CrawlStep.running, [step]);
	return /* @__PURE__ */ jsxs("form", {
		className: "w-full",
		onSubmit: (e) => {
			e.preventDefault();
			e.stopPropagation();
			form.handleSubmit();
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-x-1 px-4 py-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex grow cursor-pointer select-none items-center gap-x-0.5",
				onClick: foldToggle,
				children: [/* @__PURE__ */ jsx("span", {
					className: "system-sm-semibold-uppercase text-text-secondary",
					children: t(`${I18N_PREFIX$1}.options`, { ns: "datasetCreation" })
				}), /* @__PURE__ */ jsx(Icon$5, { className: cn("h-4 w-4 shrink-0 text-text-quaternary", fold && "-rotate-90") })]
			}), /* @__PURE__ */ jsxs(Button, {
				variant: "primary",
				onClick: form.handleSubmit,
				disabled: runDisabled || isRunning,
				loading: isRunning,
				className: "shrink-0 gap-x-0.5",
				spinnerClassName: "!ml-0",
				children: [/* @__PURE__ */ jsx(pG, { className: "size-4" }), /* @__PURE__ */ jsx("span", {
					className: "px-0.5",
					children: !isRunning ? t(`${I18N_PREFIX$1}.run`, { ns: "datasetCreation" }) : t(`${I18N_PREFIX$1}.running`, { ns: "datasetCreation" })
				})]
			})]
		}), !fold && /* @__PURE__ */ jsx("div", {
			className: "flex flex-col gap-3 border-t border-divider-subtle px-4 py-3",
			children: configurations.map((config, index) => {
				return /* @__PURE__ */ jsx(BaseField({
					initialData,
					config
				}), { form }, index);
			})
		})]
	});
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/website-crawl/index.tsx
var I18N_PREFIX = "stepOne.website";
var WebsiteCrawl = ({ nodeId, nodeData, isInPipeline = false, supportBatchUpload = true, onCredentialChange }) => {
	const { t } = useTranslation();
	const docLink = useDocLink();
	const [totalNum, setTotalNum] = useState(0);
	const [crawledNum, setCrawledNum] = useState(0);
	const [crawlErrorMessage, setCrawlErrorMessage] = useState("");
	const pipelineId = useDatasetDetailContextWithSelector((s) => s.dataset?.pipeline_id);
	const setShowAccountSettingModal = useModalContextSelector((s) => s.setShowAccountSettingModal);
	const { crawlResult, step, checkedCrawlResult, previewIndex, currentCredentialId } = useDataSourceStoreWithSelector(useShallow((state) => ({
		crawlResult: state.crawlResult,
		step: state.step,
		checkedCrawlResult: state.websitePages,
		previewIndex: state.previewIndex,
		currentCredentialId: state.currentCredentialId
	})));
	const { data: dataSourceAuth } = useGetDataSourceAuth({
		pluginId: nodeData.plugin_id,
		provider: nodeData.provider_name
	});
	const dataSourceStore = useDataSourceStore();
	const { data: paramsConfig, isFetching: isFetchingParams } = useRef(!isInPipeline ? usePublishedPipelinePreProcessingParams : useDraftPipelinePreProcessingParams).current({
		pipeline_id: pipelineId,
		node_id: nodeId
	}, !!pipelineId && !!nodeId);
	const isInit = step === CrawlStep.init;
	const isCrawlFinished = step === CrawlStep.finished;
	const isRunning = step === CrawlStep.running;
	const showError = isCrawlFinished && crawlErrorMessage;
	const datasourceNodeRunURL = !isInPipeline ? `/rag/pipelines/${pipelineId}/workflows/published/datasource/nodes/${nodeId}/run` : `/rag/pipelines/${pipelineId}/workflows/draft/datasource/nodes/${nodeId}/run`;
	const handleCheckedCrawlResultChange = useCallback((checkedCrawlResult) => {
		const { setWebsitePages } = dataSourceStore.getState();
		setWebsitePages(checkedCrawlResult);
	}, [dataSourceStore]);
	const handlePreview = useCallback((website, index) => {
		const { setCurrentWebsite, setPreviewIndex } = dataSourceStore.getState();
		setCurrentWebsite(website);
		setPreviewIndex(index);
	}, [dataSourceStore]);
	const handleRun = useCallback(async (value) => {
		const { setStep, setCrawlResult, currentCredentialId } = dataSourceStore.getState();
		setStep(CrawlStep.running);
		ssePost(datasourceNodeRunURL, { body: {
			inputs: value,
			datasource_type: DatasourceType.websiteCrawl,
			credential_id: currentCredentialId,
			response_mode: "streaming"
		} }, {
			onDataSourceNodeProcessing: (data) => {
				setTotalNum(data.total ?? 0);
				setCrawledNum(data.completed ?? 0);
			},
			onDataSourceNodeCompleted: (data) => {
				const { data: crawlData, time_consuming } = data;
				setCrawlResult({
					data: crawlData,
					time_consuming: time_consuming ?? 0
				});
				handleCheckedCrawlResultChange(supportBatchUpload ? crawlData : crawlData.slice(0, 1));
				setCrawlErrorMessage("");
				setStep(CrawlStep.finished);
			},
			onDataSourceNodeError: (error) => {
				setCrawlErrorMessage(error.error || t(`${I18N_PREFIX}.unknownError`, { ns: "datasetCreation" }));
				setStep(CrawlStep.finished);
			}
		});
	}, [
		dataSourceStore,
		datasourceNodeRunURL,
		handleCheckedCrawlResultChange,
		supportBatchUpload,
		t
	]);
	const handleSubmit = useCallback((value) => {
		handleRun(value);
	}, [handleRun]);
	const handleSetting = useCallback(() => {
		setShowAccountSettingModal({ payload: ACCOUNT_SETTING_TAB.DATA_SOURCE });
	}, [setShowAccountSettingModal]);
	const handleCredentialChange = useCallback((credentialId) => {
		setCrawledNum(0);
		setTotalNum(0);
		setCrawlErrorMessage("");
		onCredentialChange(credentialId);
	}, [onCredentialChange]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ jsx(header_default$1, {
				docTitle: "Docs",
				docLink: docLink("/use-dify/knowledge/knowledge-pipeline/authorize-data-source"),
				onClickConfiguration: handleSetting,
				pluginName: nodeData.datasource_label,
				currentCredentialId,
				onCredentialChange: handleCredentialChange,
				credentials: dataSourceAuth?.result || []
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-2 rounded-xl border border-components-panel-border bg-background-default-subtle",
				children: /* @__PURE__ */ jsx(Options, {
					variables: paramsConfig?.variables || [],
					step,
					runDisabled: !currentCredentialId || isFetchingParams,
					onSubmit: handleSubmit
				})
			}),
			!isInit && /* @__PURE__ */ jsxs("div", {
				className: "relative flex flex-col",
				children: [
					isRunning && /* @__PURE__ */ jsx(crawling_default, {
						crawledNum,
						totalNum
					}),
					showError && /* @__PURE__ */ jsx(error_message_default, {
						className: "mt-2",
						title: t(`${I18N_PREFIX}.exceptionErrorTitle`, { ns: "datasetCreation" }),
						errorMsg: crawlErrorMessage
					}),
					isCrawlFinished && !showError && /* @__PURE__ */ jsx(crawled_result_default, {
						className: "mt-2",
						list: crawlResult?.data || [],
						checkedList: checkedCrawlResult,
						onSelectedChange: handleCheckedCrawlResultChange,
						usedTime: Number.parseFloat(crawlResult?.time_consuming) || 0,
						previewIndex,
						onPreview: handlePreview,
						showPreview: !isInPipeline,
						isMultipleChoice: supportBatchUpload
					})
				]
			})
		]
	});
};
var website_crawl_default = React$1.memo(WebsiteCrawl);
//#endregion
//#region app/components/datasets/documents/detail/completed/common/dot.tsx
var Dot = () => {
	return /* @__PURE__ */ jsx("div", {
		className: "system-xs-medium text-text-quaternary",
		children: "·"
	});
};
Dot.displayName = "Dot";
var dot_default = React$1.memo(Dot);
//#endregion
//#region app/components/datasets/documents/detail/completed/common/segment-index-tag.tsx
var SegmentIndexTag = ({ positionId, label, className, labelPrefix = "Chunk", iconClassName, labelClassName }) => {
	const localPositionId = useMemo(() => {
		const positionIdStr = String(positionId);
		if (positionIdStr.length >= 2) return `${labelPrefix}-${positionId}`;
		return `${labelPrefix}-${positionIdStr.padStart(2, "0")}`;
	}, [positionId, labelPrefix]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center", className),
		children: [/* @__PURE__ */ jsx(Icon$4, { className: cn("mr-0.5 h-3 w-3 p-[1px] text-text-tertiary", iconClassName) }), /* @__PURE__ */ jsx("div", {
			className: cn("system-xs-medium text-text-tertiary", labelClassName),
			children: label || localPositionId
		})]
	});
};
SegmentIndexTag.displayName = "SegmentIndexTag";
var segment_index_tag_default = React$1.memo(SegmentIndexTag);
//#endregion
//#region app/components/rag-pipeline/components/chunk-card-list/types.ts
var QAItemType = /* @__PURE__ */ function(QAItemType) {
	QAItemType["Question"] = "question";
	QAItemType["Answer"] = "answer";
	return QAItemType;
}({});
//#endregion
//#region app/components/rag-pipeline/components/chunk-card-list/q-a-item.tsx
var QAItem = (props) => {
	const { type, text } = props;
	return /* @__PURE__ */ jsxs("div", {
		className: "inline-flex items-start justify-start gap-1 self-stretch",
		children: [/* @__PURE__ */ jsx("div", {
			className: "w-4 text-[13px] font-medium leading-5 text-text-tertiary",
			children: type === QAItemType.Question ? "Q" : "A"
		}), /* @__PURE__ */ jsx("div", {
			className: "body-md-regular flex-1 text-text-secondary",
			children: text
		})]
	});
};
var q_a_item_default = React$1.memo(QAItem);
//#endregion
//#region app/components/rag-pipeline/components/chunk-card-list/chunk-card.tsx
var ChunkCard = (props) => {
	const { chunkType, parentMode, content, positionId, wordCount } = props;
	const { t } = useTranslation();
	const isFullDoc = useMemo(() => {
		return chunkType === ChunkingMode.parentChild && parentMode === "full-doc";
	}, [chunkType, parentMode]);
	const isParagraph = useMemo(() => {
		return chunkType === ChunkingMode.parentChild && parentMode === "paragraph";
	}, [chunkType, parentMode]);
	const contentElement = useMemo(() => {
		if (chunkType === ChunkingMode.parentChild) return content.child_contents.map((child, index) => {
			const indexForLabel = index + 1;
			return /* @__PURE__ */ jsx(PreviewSlice, {
				label: `C-${indexForLabel}`,
				text: child,
				tooltip: `Child-chunk-${indexForLabel} · ${child.length} Characters`,
				labelInnerClassName: "text-[10px] font-semibold align-bottom leading-7",
				dividerClassName: "leading-7"
			}, child);
		});
		if (chunkType === ChunkingMode.qa) return /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-2",
			children: [/* @__PURE__ */ jsx(q_a_item_default, {
				type: QAItemType.Question,
				text: content.question
			}), /* @__PURE__ */ jsx(q_a_item_default, {
				type: QAItemType.Answer,
				text: content.answer
			})]
		});
		return content.content;
	}, [content, chunkType]);
	const summaryElement = useMemo(() => {
		if (chunkType === ChunkingMode.parentChild) return content.parent_summary;
		if (chunkType === ChunkingMode.text) return content.summary;
		return null;
	}, [content, chunkType]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-1 rounded-lg bg-components-panel-bg px-3 py-2.5",
		children: [
			!isFullDoc && /* @__PURE__ */ jsxs("div", {
				className: "inline-flex items-center justify-start gap-2",
				children: [
					/* @__PURE__ */ jsx(segment_index_tag_default, {
						positionId,
						labelPrefix: isParagraph ? "Parent-Chunk" : "Chunk"
					}),
					/* @__PURE__ */ jsx(dot_default, {}),
					/* @__PURE__ */ jsx("div", {
						className: "system-xs-medium text-text-tertiary",
						children: `${formatNumber(wordCount)} ${t("segment.characters", {
							ns: "datasetDocuments",
							count: wordCount
						})}`
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "body-md-regular text-text-secondary",
				children: contentElement
			}),
			summaryElement && /* @__PURE__ */ jsx(summary_label_default, { summary: summaryElement })
		]
	});
};
var chunk_card_default = React$1.memo(ChunkCard);
//#endregion
//#region app/components/rag-pipeline/components/chunk-card-list/index.tsx
var ChunkCardList = (props) => {
	const { chunkType, parentMode, chunkInfo, className } = props;
	const chunkList = useMemo(() => {
		if (chunkType === ChunkingMode.text) return chunkInfo;
		if (chunkType === ChunkingMode.parentChild) return chunkInfo.parent_child_chunks;
		return chunkInfo.qa_chunks;
	}, [chunkInfo, chunkType]);
	const getWordCount = (seg) => {
		if (chunkType === ChunkingMode.parentChild) return seg.parent_content?.length;
		if (chunkType === ChunkingMode.text) return seg.content.length;
		return seg.question.length + seg.answer.length;
	};
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex w-full flex-col gap-y-1", className),
		children: chunkList.map((seg, index) => {
			return /* @__PURE__ */ jsx(chunk_card_default, {
				chunkType,
				parentMode,
				content: seg,
				wordCount: getWordCount(seg),
				positionId: index + 1
			}, `${chunkType}-${index}`);
		})
	});
};
//#endregion
export { getFileType$1 as _, generateZodSchema as a, ACCEPT_TYPES as b, OnlineDocuments as c, areEqual as d, CredentialIcon as f, fileIsUploaded as g, useFileUpload as h, website_crawl_default as i, NotionIcon as l, LocalFile as m, SegmentIndexTag as n, OnlineDrive as o, SearchInput as p, dot_default as r, getFileExtension as s, ChunkCardList as t, FixedSizeList as u, getFileUploadConfig as v, traverseFileEntry as y };
