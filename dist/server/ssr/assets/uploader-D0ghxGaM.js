import { ct as M6, ht as Nf } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { n as useContext$1 } from "./dist-mUzjAi-W.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as ActionButton } from "./action-button-BK9WUMzU.js";
import { r as ToastContext } from "./toast-BY3OifkP.js";
import { t as formatFileSize } from "./format-BCVnrx09.js";
import { t as Icon } from "./files-Do6W6gRz.js";
import * as React$1 from "react";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/app/create-from-dsl-modal/uploader.tsx
var Uploader = ({ file, updateFile, className, accept = ".yaml,.yml", displayName = "YAML" }) => {
	const { t } = useTranslation();
	const { notify } = useContext$1(ToastContext);
	const [dragging, setDragging] = useState(false);
	const dropRef = useRef(null);
	const dragRef = useRef(null);
	const fileUploader = useRef(null);
	const handleDragEnter = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.target !== dragRef.current) setDragging(true);
	};
	const handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};
	const handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.target === dragRef.current) setDragging(false);
	};
	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragging(false);
		if (!e.dataTransfer) return;
		const files = Array.from(e.dataTransfer.files);
		if (files.length > 1) {
			notify({
				type: "error",
				message: t("stepOne.uploader.validation.count", { ns: "datasetCreation" })
			});
			return;
		}
		updateFile(files[0]);
	};
	const selectHandle = () => {
		const originalFile = file;
		if (fileUploader.current) {
			fileUploader.current.value = "";
			fileUploader.current.click();
			fileUploader.current.oncancel = () => updateFile(originalFile);
		}
	};
	const removeFile = () => {
		if (fileUploader.current) fileUploader.current.value = "";
		updateFile();
	};
	const fileChangeHandle = (e) => {
		const currentFile = e.target.files?.[0];
		updateFile(currentFile);
	};
	useEffect(() => {
		dropRef.current?.addEventListener("dragenter", handleDragEnter);
		dropRef.current?.addEventListener("dragover", handleDragOver);
		dropRef.current?.addEventListener("dragleave", handleDragLeave);
		dropRef.current?.addEventListener("drop", handleDrop);
		return () => {
			dropRef.current?.removeEventListener("dragenter", handleDragEnter);
			dropRef.current?.removeEventListener("dragover", handleDragOver);
			dropRef.current?.removeEventListener("dragleave", handleDragLeave);
			dropRef.current?.removeEventListener("drop", handleDrop);
		};
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("mt-6", className),
		children: [/* @__PURE__ */ jsx("input", {
			ref: fileUploader,
			style: { display: "none" },
			type: "file",
			id: "fileUploader",
			accept,
			onChange: fileChangeHandle
		}), /* @__PURE__ */ jsxs("div", {
			ref: dropRef,
			children: [!file && /* @__PURE__ */ jsxs("div", {
				className: cn("flex h-12 items-center rounded-[10px] border border-dashed border-components-dropzone-border bg-components-dropzone-bg text-sm font-normal", dragging && "border-components-dropzone-border-accent bg-components-dropzone-bg-accent"),
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex w-full items-center justify-center space-x-2",
					children: [/* @__PURE__ */ jsx(Nf, { className: "h-6 w-6 text-text-tertiary" }), /* @__PURE__ */ jsxs("div", {
						className: "text-text-tertiary",
						children: [t("dslUploader.button", { ns: "app" }), /* @__PURE__ */ jsx("span", {
							className: "cursor-pointer pl-1 text-text-accent",
							onClick: selectHandle,
							children: t("dslUploader.browse", { ns: "app" })
						})]
					})]
				}), dragging && /* @__PURE__ */ jsx("div", {
					ref: dragRef,
					className: "absolute left-0 top-0 h-full w-full"
				})]
			}), file && /* @__PURE__ */ jsxs("div", {
				className: cn("group flex items-center rounded-lg border-[0.5px] border-components-panel-border bg-components-panel-on-panel-item-bg shadow-xs", "hover:bg-components-panel-on-panel-item-bg-hover"),
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex items-center justify-center p-3",
						children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 shrink-0" })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex grow flex-col items-start gap-0.5 py-1 pr-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-inter max-w-[calc(100%_-_30px)] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] font-medium leading-4 text-text-secondary",
							children: file.name
						}), /* @__PURE__ */ jsxs("div", {
							className: "font-inter flex h-3 items-center gap-1 self-stretch text-[10px] font-medium uppercase leading-3 text-text-tertiary",
							children: [
								/* @__PURE__ */ jsx("span", { children: displayName }),
								/* @__PURE__ */ jsx("span", {
									className: "text-text-quaternary",
									children: "·"
								}),
								/* @__PURE__ */ jsx("span", { children: formatFileSize(file.size) })
							]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hidden items-center pr-3 group-hover:flex",
						children: /* @__PURE__ */ jsx(ActionButton, {
							onClick: removeFile,
							children: /* @__PURE__ */ jsx(M6, { className: "h-4 w-4 text-text-tertiary" })
						})
					})
				]
			})]
		})]
	});
};
var uploader_default = React$1.memo(Uploader);
//#endregion
export { uploader_default as t };
