import { r as t } from "./i18next-CxGFEMD9.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { n as downloadUrl } from "./download-Cg9gmIRx.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import { t as fe } from "./dist-DV9-MooO2.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/image-uploader/image-preview.tsx
var isBase64 = (str) => {
	try {
		return btoa(atob(str)) === str;
	} catch {
		return false;
	}
};
var ImagePreview = ({ url, title, onCancel, onPrev, onNext }) => {
	const [scale, setScale] = useState(1);
	const [position, setPosition] = useState({
		x: 0,
		y: 0
	});
	const [isDragging, setIsDragging] = useState(false);
	const imgRef = useRef(null);
	const dragStartRef = useRef({
		x: 0,
		y: 0
	});
	const [isCopied, setIsCopied] = useState(false);
	const openInNewTab = () => {
		if (url.startsWith("http") || url.startsWith("https")) window.open(url, "_blank");
		else if (url.startsWith("data:image")) window.open()?.document.write(`<img src="${url}" alt="${title}" />`);
		else Toast.notify({
			type: "error",
			message: `Unable to open image: ${url}`
		});
	};
	const downloadImage = () => {
		if (url.startsWith("http") || url.startsWith("https") || url.startsWith("data:image")) {
			downloadUrl({
				url,
				fileName: title,
				target: "_blank"
			});
			return;
		}
		Toast.notify({
			type: "error",
			message: `Unable to open image: ${url}`
		});
	};
	const zoomIn = () => {
		setScale((prevScale) => Math.min(prevScale * 1.2, 15));
	};
	const zoomOut = () => {
		setScale((prevScale) => {
			const newScale = Math.max(prevScale / 1.2, .5);
			if (newScale === 1) setPosition({
				x: 0,
				y: 0
			});
			return newScale;
		});
	};
	const imageBase64ToBlob = (base64, type = "image/png") => {
		const byteCharacters = atob(base64);
		const byteArrays = [];
		for (let offset = 0; offset < byteCharacters.length; offset += 512) {
			const slice = byteCharacters.slice(offset, offset + 512);
			const byteNumbers = Array.from({ length: slice.length });
			for (let i = 0; i < slice.length; i++) byteNumbers[i] = slice.charCodeAt(i);
			const byteArray = new Uint8Array(byteNumbers);
			byteArrays.push(byteArray);
		}
		return new Blob(byteArrays, { type });
	};
	const imageCopy = useCallback(() => {
		const shareImage = async () => {
			try {
				const base64Data = url.split(",")[1];
				const blob = imageBase64ToBlob(base64Data, "image/png");
				await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
				setIsCopied(true);
				Toast.notify({
					type: "success",
					message: t("operation.imageCopied", { ns: "common" })
				});
			} catch (err) {
				console.error("Failed to copy image:", err);
				downloadUrl({
					url,
					fileName: `${title}.png`
				});
				Toast.notify({
					type: "info",
					message: t("operation.imageDownloaded", { ns: "common" })
				});
			}
		};
		shareImage();
	}, [title, url]);
	const handleWheel = useCallback((e) => {
		if (e.deltaY < 0) zoomIn();
		else zoomOut();
	}, []);
	const handleMouseDown = useCallback((e) => {
		if (scale > 1) {
			setIsDragging(true);
			dragStartRef.current = {
				x: e.clientX - position.x,
				y: e.clientY - position.y
			};
		}
	}, [scale, position]);
	const handleMouseMove = useCallback((e) => {
		if (isDragging && scale > 1) {
			const deltaX = e.clientX - dragStartRef.current.x;
			const deltaY = e.clientY - dragStartRef.current.y;
			const imgRect = imgRef.current?.getBoundingClientRect();
			const containerRect = imgRef.current?.parentElement?.getBoundingClientRect();
			if (imgRect && containerRect) {
				const maxX = (imgRect.width * scale - containerRect.width) / 2;
				const maxY = (imgRect.height * scale - containerRect.height) / 2;
				setPosition({
					x: Math.max(-maxX, Math.min(maxX, deltaX)),
					y: Math.max(-maxY, Math.min(maxY, deltaY))
				});
			}
		}
	}, [isDragging, scale]);
	const handleMouseUp = useCallback(() => {
		setIsDragging(false);
	}, []);
	useEffect(() => {
		document.addEventListener("mouseup", handleMouseUp);
		return () => {
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [handleMouseUp]);
	fe("esc", onCancel);
	fe("up", zoomIn);
	fe("down", zoomOut);
	fe("left", onPrev || noop);
	fe("right", onNext || noop);
	return createPortal(/* @__PURE__ */ jsxs("div", {
		className: "image-preview-container fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-8",
		onClick: (e) => e.stopPropagation(),
		onWheel: handleWheel,
		onMouseDown: handleMouseDown,
		onMouseMove: handleMouseMove,
		onMouseUp: handleMouseUp,
		style: { cursor: scale > 1 ? "move" : "default" },
		tabIndex: -1,
		"data-testid": "image-preview-container",
		children: [
			/* @__PURE__ */ jsx("img", {
				ref: imgRef,
				alt: title,
				src: isBase64(url) ? `data:image/png;base64,${url}` : url,
				className: "max-h-full max-w-full",
				style: {
					transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
					transition: isDragging ? "none" : "transform 0.2s ease-in-out"
				},
				"data-testid": "image-preview-image"
			}),
			/* @__PURE__ */ jsx(tooltip_default, {
				popupContent: t("operation.copyImage", { ns: "common" }),
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute right-48 top-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg",
					onClick: imageCopy,
					children: isCopied ? /* @__PURE__ */ jsx("span", {
						className: "i-ri-file-copy-line h-4 w-4 text-green-500",
						"data-testid": "image-preview-copied-icon"
					}) : /* @__PURE__ */ jsx("span", {
						className: "i-ri-file-copy-line h-4 w-4 text-gray-500",
						"data-testid": "image-preview-copy-button"
					})
				})
			}),
			/* @__PURE__ */ jsx(tooltip_default, {
				popupContent: t("operation.zoomOut", { ns: "common" }),
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute right-40 top-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg",
					onClick: zoomOut,
					children: /* @__PURE__ */ jsx("span", {
						className: "i-ri-zoom-out-line h-4 w-4 text-gray-500",
						"data-testid": "image-preview-zoom-out-button"
					})
				})
			}),
			/* @__PURE__ */ jsx(tooltip_default, {
				popupContent: t("operation.zoomIn", { ns: "common" }),
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute right-32 top-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg",
					onClick: zoomIn,
					children: /* @__PURE__ */ jsx("span", {
						className: "i-ri-zoom-in-line h-4 w-4 text-gray-500",
						"data-testid": "image-preview-zoom-in-button"
					})
				})
			}),
			/* @__PURE__ */ jsx(tooltip_default, {
				popupContent: t("operation.download", { ns: "common" }),
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute right-24 top-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg",
					onClick: downloadImage,
					children: /* @__PURE__ */ jsx("span", {
						className: "i-ri-download-cloud-2-line h-4 w-4 text-gray-500",
						"data-testid": "image-preview-download-button"
					})
				})
			}),
			/* @__PURE__ */ jsx(tooltip_default, {
				popupContent: t("operation.openInNewTab", { ns: "common" }),
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute right-16 top-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg",
					onClick: openInNewTab,
					children: /* @__PURE__ */ jsx("span", {
						className: "i-ri-add-box-line h-4 w-4 text-gray-500",
						"data-testid": "image-preview-open-in-tab-button"
					})
				})
			}),
			/* @__PURE__ */ jsx(tooltip_default, {
				popupContent: t("operation.cancel", { ns: "common" }),
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute right-6 top-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-white/8 backdrop-blur-[2px]",
					onClick: onCancel,
					children: /* @__PURE__ */ jsx("span", {
						className: "i-ri-close-line h-4 w-4 text-gray-500",
						"data-testid": "image-preview-close-button"
					})
				})
			})
		]
	}), document.body);
};
//#endregion
export { ImagePreview as t };
