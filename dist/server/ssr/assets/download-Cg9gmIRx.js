//#region utils/download.ts
var triggerDownload = ({ url, fileName, rel, target }) => {
	if (!url) return;
	const anchor = document.createElement("a");
	anchor.href = url;
	if (fileName) anchor.download = fileName;
	if (rel) anchor.rel = rel;
	if (target) anchor.target = target;
	anchor.style.display = "none";
	document.body.appendChild(anchor);
	anchor.click();
	anchor.remove();
};
var downloadUrl = ({ url, fileName, rel = "noopener noreferrer", target }) => {
	triggerDownload({
		url,
		fileName,
		rel,
		target
	});
};
var downloadBlob = ({ data, fileName }) => {
	const url = window.URL.createObjectURL(data);
	triggerDownload({
		url,
		fileName,
		rel: "noopener noreferrer"
	});
	window.URL.revokeObjectURL(url);
};
//#endregion
export { downloadUrl as n, downloadBlob as t };
