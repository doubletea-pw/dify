import { G as getFloatingFocusElement, Qt as useId$1 } from "./base-BuKAg6Le.js";
import { u as EMPTY_OBJECT } from "./useRenderElement-BTEjG3-d.js";
import { m as useFloatingParentNodeId } from "./useOnFirstRender-DefDNImt.js";
import * as React$1 from "react";
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useRole.js
var componentRoleToAriaRoleMap = new Map([
	["select", "listbox"],
	["combobox", "listbox"],
	["label", false]
]);
/**
* Adds base screen reader props to the reference and floating elements for a
* given floating element `role`.
* @see https://floating-ui.com/docs/useRole
*/
function useRole(context, props = {}) {
	const store = "rootStore" in context ? context.rootStore : context;
	const open = store.useState("open");
	const defaultFloatingId = store.useState("floatingId");
	const domReference = store.useState("domReferenceElement");
	const floatingElement = store.useState("floatingElement");
	const { role = "dialog" } = props;
	const defaultReferenceId = useId$1();
	const referenceId = domReference?.id || defaultReferenceId;
	const floatingId = React$1.useMemo(() => getFloatingFocusElement(floatingElement)?.id || defaultFloatingId, [floatingElement, defaultFloatingId]);
	const ariaRole = componentRoleToAriaRoleMap.get(role) ?? role;
	const isNested = useFloatingParentNodeId() != null;
	const trigger = React$1.useMemo(() => {
		if (ariaRole === "tooltip" || role === "label") return EMPTY_OBJECT;
		return {
			"aria-haspopup": ariaRole === "alertdialog" ? "dialog" : ariaRole,
			"aria-expanded": "false",
			...ariaRole === "listbox" && { role: "combobox" },
			...ariaRole === "menu" && isNested && { role: "menuitem" },
			...role === "select" && { "aria-autocomplete": "none" },
			...role === "combobox" && { "aria-autocomplete": "list" }
		};
	}, [
		ariaRole,
		isNested,
		role
	]);
	const reference = React$1.useMemo(() => {
		if (ariaRole === "tooltip" || role === "label") return { [`aria-${role === "label" ? "labelledby" : "describedby"}`]: open ? floatingId : void 0 };
		return {
			...trigger,
			"aria-expanded": open ? "true" : "false",
			"aria-controls": open ? floatingId : void 0,
			...ariaRole === "menu" && { id: referenceId }
		};
	}, [
		ariaRole,
		floatingId,
		open,
		referenceId,
		role,
		trigger
	]);
	const floating = React$1.useMemo(() => {
		const floatingProps = {
			id: floatingId,
			...ariaRole && { role: ariaRole }
		};
		if (ariaRole === "tooltip" || role === "label") return floatingProps;
		return {
			...floatingProps,
			...ariaRole === "menu" && { "aria-labelledby": referenceId }
		};
	}, [
		ariaRole,
		floatingId,
		referenceId,
		role
	]);
	const item = React$1.useCallback(({ active, selected }) => {
		const commonProps = {
			role: "option",
			...active && { id: `${floatingId}-fui-option` }
		};
		switch (role) {
			case "select":
			case "combobox": return {
				...commonProps,
				"aria-selected": selected
			};
			default:
		}
		return {};
	}, [floatingId, role]);
	return React$1.useMemo(() => ({
		reference,
		floating,
		item,
		trigger
	}), [
		reference,
		floating,
		trigger,
		item
	]);
}
//#endregion
export { useRole as t };
