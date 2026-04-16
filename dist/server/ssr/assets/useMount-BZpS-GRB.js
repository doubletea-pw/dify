import "./useUnmount-LxWHCkGT.js";
import { useCallback, useEffect, useRef, useState } from "react";
//#region app/components/workflow/nodes/_base/hooks/use-resize-panel.ts
var useResizePanel = (params) => {
	const { direction = "both", triggerDirection = "bottom-right", minWidth = -Infinity, maxWidth = Infinity, minHeight = -Infinity, maxHeight = Infinity, onResized, onResize } = params || {};
	const triggerRef = useRef(null);
	const containerRef = useRef(null);
	const initXRef = useRef(0);
	const initYRef = useRef(0);
	const initContainerWidthRef = useRef(0);
	const initContainerHeightRef = useRef(0);
	const isResizingRef = useRef(false);
	const [prevUserSelectStyle, setPrevUserSelectStyle] = useState(() => getComputedStyle(document.body).userSelect);
	const handleStartResize = useCallback((e) => {
		initXRef.current = e.clientX;
		initYRef.current = e.clientY;
		initContainerWidthRef.current = containerRef.current?.offsetWidth || minWidth;
		initContainerHeightRef.current = containerRef.current?.offsetHeight || minHeight;
		isResizingRef.current = true;
		setPrevUserSelectStyle(getComputedStyle(document.body).userSelect);
		document.body.style.userSelect = "none";
	}, [minWidth, minHeight]);
	const handleResize = useCallback((e) => {
		if (!isResizingRef.current) return;
		if (!containerRef.current) return;
		if (direction === "horizontal" || direction === "both") {
			const offsetX = e.clientX - initXRef.current;
			let width = 0;
			if (triggerDirection === "left" || triggerDirection === "top-left" || triggerDirection === "bottom-left") width = initContainerWidthRef.current - offsetX;
			else if (triggerDirection === "right" || triggerDirection === "top-right" || triggerDirection === "bottom-right") width = initContainerWidthRef.current + offsetX;
			if (width < minWidth) width = minWidth;
			if (width > maxWidth) width = maxWidth;
			containerRef.current.style.width = `${width}px`;
			onResize?.(width, 0);
		}
		if (direction === "vertical" || direction === "both") {
			const offsetY = e.clientY - initYRef.current;
			let height = 0;
			if (triggerDirection === "top" || triggerDirection === "top-left" || triggerDirection === "top-right") height = initContainerHeightRef.current - offsetY;
			else if (triggerDirection === "bottom" || triggerDirection === "bottom-left" || triggerDirection === "bottom-right") height = initContainerHeightRef.current + offsetY;
			if (height < minHeight) height = minHeight;
			if (height > maxHeight) height = maxHeight;
			containerRef.current.style.height = `${height}px`;
			onResize?.(0, height);
		}
	}, [
		direction,
		triggerDirection,
		minWidth,
		maxWidth,
		minHeight,
		maxHeight,
		onResize
	]);
	const handleStopResize = useCallback(() => {
		isResizingRef.current = false;
		document.body.style.userSelect = prevUserSelectStyle;
		if (onResized && containerRef.current) onResized(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
	}, [prevUserSelectStyle, onResized]);
	useEffect(() => {
		const element = triggerRef.current;
		element?.addEventListener("mousedown", handleStartResize);
		document.addEventListener("mousemove", handleResize);
		document.addEventListener("mouseup", handleStopResize);
		return () => {
			if (element) element.removeEventListener("mousedown", handleStartResize);
			document.removeEventListener("mousemove", handleResize);
			document.removeEventListener("mouseup", handleStopResize);
		};
	}, [
		handleStartResize,
		handleResize,
		handleStopResize
	]);
	return {
		triggerRef,
		containerRef
	};
};
//#endregion
//#region app/components/workflow/variable-inspect/types.ts
var EVENT_WORKFLOW_STOP = "WORKFLOW_STOP";
var CHUNK_SCHEMA_TYPES = [
	"general_structure",
	"parent_child_structure",
	"qa_structure"
];
var ViewMode = /* @__PURE__ */ function(ViewMode) {
	ViewMode["Code"] = "code";
	ViewMode["Preview"] = "preview";
	return ViewMode;
}({});
var PreviewType = /* @__PURE__ */ function(PreviewType) {
	PreviewType["Markdown"] = "markdown";
	PreviewType["Chunks"] = "chunks";
	return PreviewType;
}({});
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/useMount/index.js
var useMount = function(fn) {
	useEffect(function() {
		var result = fn === null || fn === void 0 ? void 0 : fn();
		if (result && typeof result === "object" && typeof result.then === "function") return;
		return result;
	}, []);
};
//#endregion
export { ViewMode as a, PreviewType as i, CHUNK_SCHEMA_TYPES as n, useResizePanel as o, EVENT_WORKFLOW_STOP as r, useMount as t };
