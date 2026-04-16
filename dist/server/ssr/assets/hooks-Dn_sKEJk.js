import { t as useShallow } from "./shallow-CK1lOAji.js";
import { pt as useStore } from "./utils-DqpfZ3W-.js";
import { Qn as useStore$1 } from "./hooks-Bj_4KA1b.js";
import { useEffect, useMemo, useState } from "react";
//#region app/components/rag-pipeline/components/panel/input-field/hooks.ts
var useFloatingRight = (targetElementWidth) => {
	const [floatingRight, setFloatingRight] = useState(false);
	const nodePanelWidth = useStore$1((state) => state.nodePanelWidth);
	const workflowCanvasWidth = useStore$1((state) => state.workflowCanvasWidth);
	const otherPanelWidth = useStore$1((state) => state.otherPanelWidth);
	const selectedNodeId = useStore(useShallow((s) => {
		const currentNode = s.getNodes().find((node) => node.data.selected);
		if (currentNode) return currentNode.id;
	}));
	useEffect(() => {
		if (typeof workflowCanvasWidth === "number") {
			const inputFieldPanelWidth = 400;
			const marginRight = 4;
			setFloatingRight(workflowCanvasWidth - (selectedNodeId ? nodePanelWidth : 0) - otherPanelWidth - inputFieldPanelWidth - marginRight < targetElementWidth + marginRight);
		}
	}, [
		workflowCanvasWidth,
		nodePanelWidth,
		otherPanelWidth,
		selectedNodeId,
		targetElementWidth
	]);
	return {
		floatingRight,
		floatingRightWidth: useMemo(() => {
			if (!floatingRight) return targetElementWidth;
			return Math.min(targetElementWidth, (selectedNodeId ? nodePanelWidth : 0) + otherPanelWidth);
		}, [
			floatingRight,
			selectedNodeId,
			nodePanelWidth,
			otherPanelWidth,
			targetElementWidth
		])
	};
};
//#endregion
export { useFloatingRight as t };
