import { g as upload } from "./base-BuKAg6Le.js";
//#region app/components/base/image-uploader/utils.ts
/**
* Get appropriate error message for image upload errors
* @param error - The error object from upload failure
* @param defaultMessage - Default error message to use if no specific error is matched
* @param t - Translation function
* @returns Localized error message
*/
var getImageUploadErrorMessage = (error, defaultMessage, t) => {
	const errorCode = error?.response?.code;
	if (errorCode === "forbidden") return error?.response?.message;
	if (errorCode === "file_extension_blocked") return t("fileUploader.fileExtensionBlocked", { ns: "common" });
	return defaultMessage;
};
var imageUpload = ({ file, onProgressCallback, onSuccessCallback, onErrorCallback }, isPublic, url) => {
	const formData = new FormData();
	formData.append("file", file);
	const onProgress = (e) => {
		if (e.lengthComputable) onProgressCallback(Math.floor(e.loaded / e.total * 100));
	};
	upload({
		xhr: new XMLHttpRequest(),
		data: formData,
		onprogress: onProgress
	}, isPublic, url).then((res) => {
		onSuccessCallback(res);
	}).catch((error) => {
		onErrorCallback(error);
	});
};
//#endregion
export { imageUpload as n, getImageUploadErrorMessage as t };
