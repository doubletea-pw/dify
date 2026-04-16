import { a as useParams } from "../index.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as IconBase } from "./IconBase-CEF_UoQI.js";
import { i as useToastContext } from "./toast-BY3OifkP.js";
import { t as ALLOW_FILE_EXTENSIONS, u as TransferMethod } from "./app-DPjSIfgb.js";
import { n as imageUpload, t as getImageUploadErrorMessage } from "./utils-J89sp7A8.js";
import { useCallback, useMemo, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region app/components/base/image-uploader/hooks.ts
var useImageFiles = () => {
	const params = useParams();
	const { t } = useTranslation();
	const { notify } = useToastContext();
	const [files, setFiles] = useState([]);
	const filesRef = useRef([]);
	const handleUpload = (imageFile) => {
		const files = filesRef.current;
		const index = files.findIndex((file) => file._id === imageFile._id);
		if (index > -1) {
			const currentFile = files[index];
			const newFiles = [
				...files.slice(0, index),
				{
					...currentFile,
					...imageFile
				},
				...files.slice(index + 1)
			];
			setFiles(newFiles);
			filesRef.current = newFiles;
		} else {
			const newFiles = [...files, imageFile];
			setFiles(newFiles);
			filesRef.current = newFiles;
		}
	};
	const handleRemove = (imageFileId) => {
		const files = filesRef.current;
		const index = files.findIndex((file) => file._id === imageFileId);
		if (index > -1) {
			const currentFile = files[index];
			const newFiles = [
				...files.slice(0, index),
				{
					...currentFile,
					deleted: true
				},
				...files.slice(index + 1)
			];
			setFiles(newFiles);
			filesRef.current = newFiles;
		}
	};
	const handleImageLinkLoadError = (imageFileId) => {
		const files = filesRef.current;
		const index = files.findIndex((file) => file._id === imageFileId);
		if (index > -1) {
			const currentFile = files[index];
			const newFiles = [
				...files.slice(0, index),
				{
					...currentFile,
					progress: -1
				},
				...files.slice(index + 1)
			];
			filesRef.current = newFiles;
			setFiles(newFiles);
		}
	};
	const handleImageLinkLoadSuccess = (imageFileId) => {
		const files = filesRef.current;
		const index = files.findIndex((file) => file._id === imageFileId);
		if (index > -1) {
			const currentImageFile = files[index];
			const newFiles = [
				...files.slice(0, index),
				{
					...currentImageFile,
					progress: 100
				},
				...files.slice(index + 1)
			];
			filesRef.current = newFiles;
			setFiles(newFiles);
		}
	};
	const handleReUpload = (imageFileId) => {
		const files = filesRef.current;
		const index = files.findIndex((file) => file._id === imageFileId);
		if (index > -1) {
			const currentImageFile = files[index];
			imageUpload({
				file: currentImageFile.file,
				onProgressCallback: (progress) => {
					const newFiles = [
						...files.slice(0, index),
						{
							...currentImageFile,
							progress
						},
						...files.slice(index + 1)
					];
					filesRef.current = newFiles;
					setFiles(newFiles);
				},
				onSuccessCallback: (res) => {
					const newFiles = [
						...files.slice(0, index),
						{
							...currentImageFile,
							fileId: res.id,
							progress: 100
						},
						...files.slice(index + 1)
					];
					filesRef.current = newFiles;
					setFiles(newFiles);
				},
				onErrorCallback: (error) => {
					notify({
						type: "error",
						message: getImageUploadErrorMessage(error, t("imageUploader.uploadFromComputerUploadError", { ns: "common" }), t)
					});
					const newFiles = [
						...files.slice(0, index),
						{
							...currentImageFile,
							progress: -1
						},
						...files.slice(index + 1)
					];
					filesRef.current = newFiles;
					setFiles(newFiles);
				}
			}, !!params.token);
		}
	};
	const handleClear = () => {
		setFiles([]);
		filesRef.current = [];
	};
	return {
		files: useMemo(() => {
			return files.filter((file) => !file.deleted);
		}, [files]),
		onUpload: handleUpload,
		onRemove: handleRemove,
		onImageLinkLoadError: handleImageLinkLoadError,
		onImageLinkLoadSuccess: handleImageLinkLoadSuccess,
		onReUpload: handleReUpload,
		onClear: handleClear
	};
};
var useLocalFileUploader = ({ limit, disabled = false, onUpload }) => {
	const { notify } = useToastContext();
	const params = useParams();
	const { t } = useTranslation();
	return {
		disabled,
		handleLocalFileUpload: useCallback((file) => {
			if (disabled) return;
			if (!ALLOW_FILE_EXTENSIONS.includes(file.type.split("/")[1])) return;
			if (limit && file.size > limit * 1024 * 1024) {
				notify({
					type: "error",
					message: t("imageUploader.uploadFromComputerLimit", {
						ns: "common",
						size: limit
					})
				});
				return;
			}
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				const imageFile = {
					type: TransferMethod.local_file,
					_id: `${Date.now()}`,
					fileId: "",
					file,
					url: reader.result,
					base64Url: reader.result,
					progress: 0
				};
				onUpload(imageFile);
				imageUpload({
					file: imageFile.file,
					onProgressCallback: (progress) => {
						onUpload({
							...imageFile,
							progress
						});
					},
					onSuccessCallback: (res) => {
						onUpload({
							...imageFile,
							fileId: res.id,
							progress: 100
						});
					},
					onErrorCallback: (error) => {
						notify({
							type: "error",
							message: getImageUploadErrorMessage(error, t("imageUploader.uploadFromComputerUploadError", { ns: "common" }), t)
						});
						onUpload({
							...imageFile,
							progress: -1
						});
					}
				}, !!params.token);
			}, false);
			reader.addEventListener("error", () => {
				notify({
					type: "error",
					message: t("imageUploader.uploadFromComputerReadError", { ns: "common" })
				});
			}, false);
			reader.readAsDataURL(file);
		}, [
			disabled,
			limit,
			notify,
			t,
			onUpload,
			params.token
		])
	};
};
var ImagePlus_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "image-plus" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"d": "M8.33333 2.00016H5.2C4.0799 2.00016 3.51984 2.00016 3.09202 2.21815C2.71569 2.4099 2.40973 2.71586 2.21799 3.09218C2 3.52001 2 4.08006 2 5.20016V10.8002C2 11.9203 2 12.4803 2.21799 12.9081C2.40973 13.2845 2.71569 13.5904 3.09202 13.7822C3.51984 14.0002 4.07989 14.0002 5.2 14.0002H11.3333C11.9533 14.0002 12.2633 14.0002 12.5176 13.932C13.2078 13.7471 13.7469 13.208 13.9319 12.5178C14 12.2635 14 11.9535 14 11.3335M12.6667 5.3335V1.3335M10.6667 3.3335H14.6667M7 5.66683C7 6.40321 6.40305 7.00016 5.66667 7.00016C4.93029 7.00016 4.33333 6.40321 4.33333 5.66683C4.33333 4.93045 4.93029 4.3335 5.66667 4.3335C6.40305 4.3335 7 4.93045 7 5.66683ZM9.99336 7.94559L4.3541 13.0722C4.03691 13.3605 3.87831 13.5047 3.86429 13.6296C3.85213 13.7379 3.89364 13.8453 3.97546 13.9172C4.06985 14.0002 4.28419 14.0002 4.71286 14.0002H10.9707C11.9301 14.0002 12.4098 14.0002 12.7866 13.839C13.2596 13.6366 13.6365 13.2598 13.8388 12.7868C14 12.41 14 11.9303 14 10.9708C14 10.648 14 10.4866 13.9647 10.3363C13.9204 10.1474 13.8353 9.9704 13.7155 9.81776C13.6202 9.6963 13.4941 9.59546 13.242 9.3938L11.3772 7.90194C11.1249 7.7001 10.9988 7.59919 10.8599 7.56357C10.7374 7.53218 10.6086 7.53624 10.4884 7.57529C10.352 7.61959 10.2324 7.72826 9.99336 7.94559Z",
					"stroke": "currentColor",
					"stroke-width": "1.25",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "ImagePlus"
};
//#endregion
//#region app/components/base/icons/src/vender/line/images/ImagePlus.tsx
var Icon = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: ImagePlus_default
});
Icon.displayName = "ImagePlus";
//#endregion
export { useImageFiles as n, useLocalFileUploader as r, Icon as t };
