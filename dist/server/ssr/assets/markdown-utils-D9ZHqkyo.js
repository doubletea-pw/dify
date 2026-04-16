import { l as getWindow } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as cva } from "./dist-1O6DB-eK.js";
import { n as ALLOW_UNSAFE_DATA_SCHEME } from "./config-Dopncj5R.js";
import { $t as visuallyHidden, A as useOpenChangeComplete, Ct as createSelector, D as FloatingPortal, Et as createChangeEventDetails, F as inertValue, G as getFloatingFocusElement, Ot as cancelOpen, P as transitionStatusMapping, Vt as itemPress, W as contains, Wt as none, Zt as windowResize, _t as useAnimationFrame, bt as useStore, en as visuallyHiddenInput, ft as isWebKit, ht as useTimeout, pt as ownerDocument, yt as Store } from "./base-BuKAg6Le.js";
import { v as rectToClientRect } from "./floating-ui.utils-D0NRuJKu.js";
import { S as platform } from "./portal-to-follow-elem-DU-Awe3a.js";
import { _ as mergeProps, a as DROPDOWN_COLLISION_AVOIDANCE, b as useStableCallback, g as formatErrorMessage, l as EMPTY_ARRAY, m as useButton, p as useMergedRefs, t as useRenderElement, u as EMPTY_OBJECT, v as useIsoLayoutEffect, x as useRefWithInit } from "./useRenderElement-BTEjG3-d.js";
import { a as useFormContext, i as useFieldRootContext, n as useLabelableContext, o as fieldValidityMapping, r as useField, s as useControlled, t as useLabelableId } from "./useLabelableId-VnS7zcRD.js";
import { t as useValueChanged } from "./useValueChanged-D4oB7b6Z.js";
import { _ as useValueAsRef, a as pressableTriggerOpenStateMapping, i as popupStateMapping, o as triggerOpenStateMapping, s as useInteractions, t as useOnFirstRender, u as useDismiss } from "./useOnFirstRender-DefDNImt.js";
import { a as COMPOSITE_KEYS, c as useOpenInteractionType, d as FloatingFocusManager, l as useScrollLock, s as InternalBackdrop, u as useClick } from "./composite-CWej4ctq.js";
import { t as useTransitionStatus } from "./useTransitionStatus-B1Eyjbjd.js";
import { a as useFloatingRootContext, n as getDisabledMountTransitionStyles, r as useAnchorPositioning, t as parsePlacement } from "./placement-C7DHLE4Z.js";
import { i as useListNavigation, n as getPseudoElementBounds, r as useTypeahead } from "./Separator-C3sy-MgZ.js";
import { t as useToolbarRootContext } from "./ToolbarRootContext-541RpF1q.js";
import { n as clamp, t as useCSPContext } from "./CSPContext-CEpVbYt0.js";
import { n as useCompositeListItem, r as CompositeList, t as IndexGuessBehavior } from "./useCompositeListItem-RbImWXML.js";
import { n as resolveAriaLabelledBy } from "./resolveAriaLabelledBy-Cl6bqgac.js";
import { t as styleDisableScrollbar } from "./styles-BtM869BO.js";
import * as React$1 from "react";
import * as ReactDOM$1 from "react-dom";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/array/flatten.mjs
function flatten(arr, depth = 1) {
	const result = [];
	const flooredDepth = Math.floor(depth);
	const recursive = (arr, currentDepth) => {
		for (let i = 0; i < arr.length; i++) {
			const item = arr[i];
			if (Array.isArray(item) && currentDepth < flooredDepth) recursive(item, currentDepth + 1);
			else result.push(item);
		}
	};
	recursive(arr, 0);
	return result;
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/function/flow.mjs
function flow$1(...funcs) {
	return function(...args) {
		let result = funcs.length ? funcs[0].apply(this, args) : args[0];
		for (let i = 1; i < funcs.length; i++) result = funcs[i].call(this, result);
		return result;
	};
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/function/flow.mjs
function flow(...funcs) {
	const flattenFuncs = flatten(funcs, 1);
	if (flattenFuncs.some((func) => typeof func !== "function")) throw new TypeError("Expected a function");
	return flow$1(...flattenFuncs);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js
var SelectRootContext = /* @__PURE__ */ React$1.createContext(null);
var SelectFloatingContext = /* @__PURE__ */ React$1.createContext(null);
function useSelectRootContext() {
	const context = React$1.useContext(SelectRootContext);
	if (context === null) throw new Error(formatErrorMessage(60));
	return context;
}
function useSelectFloatingContext() {
	const context = React$1.useContext(SelectFloatingContext);
	if (context === null) throw new Error(formatErrorMessage(61));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/itemEquality.js
var defaultItemEquality = (itemValue, selectedValue) => Object.is(itemValue, selectedValue);
function compareItemEquality(itemValue, selectedValue, comparer) {
	if (itemValue == null || selectedValue == null) return Object.is(itemValue, selectedValue);
	return comparer(itemValue, selectedValue);
}
function selectedValueIncludes(selectedValues, itemValue, comparer) {
	if (!selectedValues || selectedValues.length === 0) return false;
	return selectedValues.some((selectedValue) => {
		if (selectedValue === void 0) return false;
		return compareItemEquality(itemValue, selectedValue, comparer);
	});
}
function findItemIndex(itemValues, selectedValue, comparer) {
	if (!itemValues || itemValues.length === 0) return -1;
	return itemValues.findIndex((itemValue) => {
		if (itemValue === void 0) return false;
		return compareItemEquality(itemValue, selectedValue, comparer);
	});
}
function removeItem(selectedValues, itemValue, comparer) {
	return selectedValues.filter((selectedValue) => !compareItemEquality(itemValue, selectedValue, comparer));
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/serializeValue.js
function serializeValue(value) {
	if (value == null) return "";
	if (typeof value === "string") return value;
	try {
		return JSON.stringify(value);
	} catch {
		return String(value);
	}
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/resolveValueLabel.js
function isGroupedItems(items) {
	return items != null && items.length > 0 && typeof items[0] === "object" && items[0] != null && "items" in items[0];
}
/**
* Checks if the items array contains an item with a null value that has a non-null label.
*/
function hasNullItemLabel(items) {
	if (!Array.isArray(items)) return items != null && "null" in items;
	const arrayItems = items;
	if (isGroupedItems(arrayItems)) {
		for (const group of arrayItems) for (const item of group.items) if (item && item.value == null && item.label != null) return true;
		return false;
	}
	for (const item of arrayItems) if (item && item.value == null && item.label != null) return true;
	return false;
}
function stringifyAsLabel(item, itemToStringLabel) {
	if (itemToStringLabel && item != null) return itemToStringLabel(item) ?? "";
	if (item && typeof item === "object") {
		if ("label" in item && item.label != null) return String(item.label);
		if ("value" in item) return String(item.value);
	}
	return serializeValue(item);
}
function stringifyAsValue(item, itemToStringValue) {
	if (itemToStringValue && item != null) return itemToStringValue(item) ?? "";
	if (item && typeof item === "object" && "value" in item && "label" in item) return serializeValue(item.value);
	return serializeValue(item);
}
function resolveSelectedLabel(value, items, itemToStringLabel) {
	function fallback() {
		return stringifyAsLabel(value, itemToStringLabel);
	}
	if (itemToStringLabel && value != null) return itemToStringLabel(value);
	if (value && typeof value === "object" && "label" in value && value.label != null) return value.label;
	if (items && !Array.isArray(items)) return items[value] ?? fallback();
	if (Array.isArray(items)) {
		const arrayItems = items;
		const flatItems = isGroupedItems(arrayItems) ? arrayItems.flatMap((group) => group.items) : arrayItems;
		if (value == null || typeof value !== "object") {
			const match = flatItems.find((item) => item.value === value);
			if (match && match.label != null) return match.label;
			return fallback();
		}
		if ("value" in value) {
			const match = flatItems.find((item) => item && item.value === value.value);
			if (match && match.label != null) return match.label;
		}
	}
	return fallback();
}
function resolveMultipleLabels(values, items, itemToStringLabel) {
	return values.reduce((acc, value, index) => {
		if (index > 0) acc.push(", ");
		acc.push(/* @__PURE__ */ jsx(React$1.Fragment, { children: resolveSelectedLabel(value, items, itemToStringLabel) }, index));
		return acc;
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/store.js
var selectors = {
	id: createSelector((state) => state.id),
	labelId: createSelector((state) => state.labelId),
	modal: createSelector((state) => state.modal),
	multiple: createSelector((state) => state.multiple),
	items: createSelector((state) => state.items),
	itemToStringLabel: createSelector((state) => state.itemToStringLabel),
	itemToStringValue: createSelector((state) => state.itemToStringValue),
	isItemEqualToValue: createSelector((state) => state.isItemEqualToValue),
	value: createSelector((state) => state.value),
	hasSelectedValue: createSelector((state) => {
		const { value, multiple, itemToStringValue } = state;
		if (value == null) return false;
		if (multiple && Array.isArray(value)) return value.length > 0;
		return stringifyAsValue(value, itemToStringValue) !== "";
	}),
	hasNullItemLabel: createSelector((state, enabled) => {
		return enabled ? hasNullItemLabel(state.items) : false;
	}),
	open: createSelector((state) => state.open),
	mounted: createSelector((state) => state.mounted),
	forceMount: createSelector((state) => state.forceMount),
	transitionStatus: createSelector((state) => state.transitionStatus),
	openMethod: createSelector((state) => state.openMethod),
	activeIndex: createSelector((state) => state.activeIndex),
	selectedIndex: createSelector((state) => state.selectedIndex),
	isActive: createSelector((state, index) => state.activeIndex === index),
	isSelected: createSelector((state, index, itemValue) => {
		const comparer = state.isItemEqualToValue;
		const storeValue = state.value;
		if (state.multiple) return Array.isArray(storeValue) && storeValue.some((selectedItem) => compareItemEquality(itemValue, selectedItem, comparer));
		if (state.selectedIndex === index && state.selectedIndex !== null) return true;
		return compareItemEquality(itemValue, storeValue, comparer);
	}),
	isSelectedByFocus: createSelector((state, index) => {
		return state.selectedIndex === index;
	}),
	popupProps: createSelector((state) => state.popupProps),
	triggerProps: createSelector((state) => state.triggerProps),
	triggerElement: createSelector((state) => state.triggerElement),
	positionerElement: createSelector((state) => state.positionerElement),
	listElement: createSelector((state) => state.listElement),
	scrollUpArrowVisible: createSelector((state) => state.scrollUpArrowVisible),
	scrollDownArrowVisible: createSelector((state) => state.scrollDownArrowVisible),
	hasScrollArrows: createSelector((state) => state.hasScrollArrows)
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/root/SelectRoot.js
/**
* Groups all parts of the select.
* Doesn’t render its own HTML element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
function SelectRoot(props) {
	const { id, value: valueProp, defaultValue = null, onValueChange, open: openProp, defaultOpen = false, onOpenChange, name: nameProp, autoComplete, disabled: disabledProp = false, readOnly = false, required = false, modal = true, actionsRef, inputRef, onOpenChangeComplete, items, multiple = false, itemToStringLabel, itemToStringValue, isItemEqualToValue = defaultItemEquality, highlightItemOnHover = true, children } = props;
	const { clearErrors } = useFormContext();
	const { setDirty, setTouched, setFocused, shouldValidateOnChange, validityData, setFilled, name: fieldName, disabled: fieldDisabled, validation, validationMode } = useFieldRootContext();
	const generatedId = useLabelableId({ id });
	const disabled = fieldDisabled || disabledProp;
	const name = fieldName ?? nameProp;
	const [value, setValueUnwrapped] = useControlled({
		controlled: valueProp,
		default: multiple ? defaultValue ?? EMPTY_ARRAY : defaultValue,
		name: "Select",
		state: "value"
	});
	const [open, setOpenUnwrapped] = useControlled({
		controlled: openProp,
		default: defaultOpen,
		name: "Select",
		state: "open"
	});
	const listRef = React$1.useRef([]);
	const labelsRef = React$1.useRef([]);
	const popupRef = React$1.useRef(null);
	const scrollHandlerRef = React$1.useRef(null);
	const scrollArrowsMountedCountRef = React$1.useRef(0);
	const valueRef = React$1.useRef(null);
	const valuesRef = React$1.useRef([]);
	const typingRef = React$1.useRef(false);
	const keyboardActiveRef = React$1.useRef(false);
	const selectedItemTextRef = React$1.useRef(null);
	const selectionRef = React$1.useRef({
		allowSelectedMouseUp: false,
		allowUnselectedMouseUp: false
	});
	const alignItemWithTriggerActiveRef = React$1.useRef(false);
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open);
	const { openMethod, triggerProps: interactionTypeProps } = useOpenInteractionType(open);
	const store = useRefWithInit(() => new Store({
		id: generatedId,
		labelId: void 0,
		modal,
		multiple,
		itemToStringLabel,
		itemToStringValue,
		isItemEqualToValue,
		value,
		open,
		mounted,
		transitionStatus,
		items,
		forceMount: false,
		openMethod: null,
		activeIndex: null,
		selectedIndex: null,
		popupProps: {},
		triggerProps: {},
		triggerElement: null,
		positionerElement: null,
		listElement: null,
		scrollUpArrowVisible: false,
		scrollDownArrowVisible: false,
		hasScrollArrows: false
	})).current;
	const activeIndex = useStore(store, selectors.activeIndex);
	const selectedIndex = useStore(store, selectors.selectedIndex);
	const triggerElement = useStore(store, selectors.triggerElement);
	const positionerElement = useStore(store, selectors.positionerElement);
	const serializedValue = React$1.useMemo(() => {
		if (multiple && Array.isArray(value) && value.length === 0) return "";
		return stringifyAsValue(value, itemToStringValue);
	}, [
		multiple,
		value,
		itemToStringValue
	]);
	const fieldStringValue = React$1.useMemo(() => {
		if (multiple && Array.isArray(value)) return value.map((currentValue) => stringifyAsValue(currentValue, itemToStringValue));
		return stringifyAsValue(value, itemToStringValue);
	}, [
		multiple,
		value,
		itemToStringValue
	]);
	const controlRef = useValueAsRef(store.state.triggerElement);
	useField({
		id: generatedId,
		commit: validation.commit,
		value,
		controlRef,
		name,
		getValue: () => fieldStringValue
	});
	const initialValueRef = React$1.useRef(value);
	useIsoLayoutEffect(() => {
		if (value !== initialValueRef.current) store.set("forceMount", true);
	}, [store, value]);
	useIsoLayoutEffect(() => {
		setFilled(multiple ? Array.isArray(value) && value.length > 0 : value != null);
	}, [
		multiple,
		value,
		setFilled
	]);
	useIsoLayoutEffect(function syncSelectedIndex() {
		if (open) return;
		const registry = valuesRef.current;
		if (multiple) {
			const currentValue = Array.isArray(value) ? value : [];
			if (currentValue.length === 0) {
				store.set("selectedIndex", null);
				return;
			}
			const lastValue = currentValue[currentValue.length - 1];
			const lastIndex = findItemIndex(registry, lastValue, isItemEqualToValue);
			store.set("selectedIndex", lastIndex === -1 ? null : lastIndex);
			return;
		}
		const index = findItemIndex(registry, value, isItemEqualToValue);
		store.set("selectedIndex", index === -1 ? null : index);
	}, [
		multiple,
		open,
		value,
		valuesRef,
		isItemEqualToValue,
		store
	]);
	useValueChanged(value, () => {
		clearErrors(name);
		setDirty(value !== validityData.initialValue);
		if (shouldValidateOnChange()) validation.commit(value);
		else validation.commit(value, true);
	});
	const setOpen = useStableCallback((nextOpen, eventDetails) => {
		onOpenChange?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		setOpenUnwrapped(nextOpen);
		if (!nextOpen && (eventDetails.reason === "focus-out" || eventDetails.reason === "outside-press")) {
			setTouched(true);
			setFocused(false);
			if (validationMode === "onBlur") validation.commit(value);
		}
		if (!nextOpen && store.state.activeIndex !== null) {
			const activeOption = listRef.current[store.state.activeIndex];
			queueMicrotask(() => {
				activeOption?.setAttribute("tabindex", "-1");
			});
		}
	});
	const handleUnmount = useStableCallback(() => {
		setMounted(false);
		store.set("activeIndex", null);
		onOpenChangeComplete?.(false);
	});
	useOpenChangeComplete({
		enabled: !actionsRef,
		open,
		ref: popupRef,
		onComplete() {
			if (!open) handleUnmount();
		}
	});
	React$1.useImperativeHandle(actionsRef, () => ({ unmount: handleUnmount }), [handleUnmount]);
	const setValue = useStableCallback((nextValue, eventDetails) => {
		onValueChange?.(nextValue, eventDetails);
		if (eventDetails.isCanceled) return;
		setValueUnwrapped(nextValue);
	});
	const handleScrollArrowVisibility = useStableCallback(() => {
		const scroller = store.state.listElement || popupRef.current;
		if (!scroller) return;
		const viewportTop = scroller.scrollTop;
		const viewportBottom = scroller.scrollTop + scroller.clientHeight;
		const shouldShowUp = viewportTop > 1;
		const shouldShowDown = viewportBottom < scroller.scrollHeight - 1;
		if (store.state.scrollUpArrowVisible !== shouldShowUp) store.set("scrollUpArrowVisible", shouldShowUp);
		if (store.state.scrollDownArrowVisible !== shouldShowDown) store.set("scrollDownArrowVisible", shouldShowDown);
	});
	const floatingContext = useFloatingRootContext({
		open,
		onOpenChange: setOpen,
		elements: {
			reference: triggerElement,
			floating: positionerElement
		}
	});
	const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
		useClick(floatingContext, {
			enabled: !readOnly && !disabled,
			event: "mousedown"
		}),
		useDismiss(floatingContext, { bubbles: false }),
		useListNavigation(floatingContext, {
			enabled: !readOnly && !disabled,
			listRef,
			activeIndex,
			selectedIndex,
			disabledIndices: EMPTY_ARRAY,
			onNavigate(nextActiveIndex) {
				if (nextActiveIndex === null && !open) return;
				store.set("activeIndex", nextActiveIndex);
			},
			focusItemOnHover: false
		}),
		useTypeahead(floatingContext, {
			enabled: !readOnly && !disabled && (open || !multiple),
			listRef: labelsRef,
			activeIndex,
			selectedIndex,
			onMatch(index) {
				if (open) store.set("activeIndex", index);
				else setValue(valuesRef.current[index], createChangeEventDetails("none"));
			},
			onTypingChange(typing) {
				typingRef.current = typing;
			}
		})
	]);
	const mergedTriggerProps = React$1.useMemo(() => {
		return mergeProps(getReferenceProps(), interactionTypeProps, generatedId ? { id: generatedId } : EMPTY_OBJECT);
	}, [
		getReferenceProps,
		interactionTypeProps,
		generatedId
	]);
	useOnFirstRender(() => {
		store.update({
			popupProps: getFloatingProps(),
			triggerProps: mergedTriggerProps
		});
	});
	useIsoLayoutEffect(() => {
		store.update({
			id: generatedId,
			modal,
			multiple,
			value,
			open,
			mounted,
			transitionStatus,
			popupProps: getFloatingProps(),
			triggerProps: mergedTriggerProps,
			items,
			itemToStringLabel,
			itemToStringValue,
			isItemEqualToValue,
			openMethod
		});
	}, [
		store,
		generatedId,
		modal,
		multiple,
		value,
		open,
		mounted,
		transitionStatus,
		getFloatingProps,
		mergedTriggerProps,
		items,
		itemToStringLabel,
		itemToStringValue,
		isItemEqualToValue,
		openMethod
	]);
	const contextValue = React$1.useMemo(() => ({
		store,
		name,
		required,
		disabled,
		readOnly,
		multiple,
		itemToStringLabel,
		itemToStringValue,
		highlightItemOnHover,
		setValue,
		setOpen,
		listRef,
		popupRef,
		scrollHandlerRef,
		handleScrollArrowVisibility,
		scrollArrowsMountedCountRef,
		getItemProps,
		events: floatingContext.context.events,
		valueRef,
		valuesRef,
		labelsRef,
		typingRef,
		selectionRef,
		selectedItemTextRef,
		validation,
		onOpenChangeComplete,
		keyboardActiveRef,
		alignItemWithTriggerActiveRef,
		initialValueRef
	}), [
		store,
		name,
		required,
		disabled,
		readOnly,
		multiple,
		itemToStringLabel,
		itemToStringValue,
		highlightItemOnHover,
		setValue,
		setOpen,
		getItemProps,
		floatingContext.context.events,
		validation,
		onOpenChangeComplete,
		handleScrollArrowVisibility
	]);
	const ref = useMergedRefs(inputRef, validation.inputRef);
	const hasMultipleSelection = multiple && Array.isArray(value) && value.length > 0;
	const hiddenInputName = multiple ? void 0 : name;
	const hiddenInputs = React$1.useMemo(() => {
		if (!multiple || !Array.isArray(value) || !name) return null;
		return value.map((v) => {
			const currentSerializedValue = stringifyAsValue(v, itemToStringValue);
			return /* @__PURE__ */ jsx("input", {
				type: "hidden",
				name,
				value: currentSerializedValue
			}, currentSerializedValue);
		});
	}, [
		multiple,
		value,
		name,
		itemToStringValue
	]);
	return /* @__PURE__ */ jsx(SelectRootContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ jsxs(SelectFloatingContext.Provider, {
			value: floatingContext,
			children: [
				children,
				/* @__PURE__ */ jsx("input", {
					...validation.getInputValidationProps({
						onFocus() {
							store.state.triggerElement?.focus({ focusVisible: true });
						},
						onChange(event) {
							if (event.nativeEvent.defaultPrevented) return;
							const nextValue = event.target.value;
							const details = createChangeEventDetails(none, event.nativeEvent);
							function handleChange() {
								if (multiple) return;
								const matchingValue = valuesRef.current.find((v) => {
									if (stringifyAsValue(v, itemToStringValue).toLowerCase() === nextValue.toLowerCase()) return true;
									return false;
								});
								if (matchingValue != null) {
									setDirty(matchingValue !== validityData.initialValue);
									setValue(matchingValue, details);
									if (shouldValidateOnChange()) validation.commit(matchingValue);
								}
							}
							store.set("forceMount", true);
							queueMicrotask(handleChange);
						}
					}),
					id: generatedId && hiddenInputName == null ? `${generatedId}-hidden-input` : void 0,
					name: hiddenInputName,
					autoComplete,
					value: serializedValue,
					disabled,
					required: required && !hasMultipleSelection,
					readOnly,
					ref,
					style: name ? visuallyHiddenInput : visuallyHidden,
					tabIndex: -1,
					"aria-hidden": true
				}),
				hiddenInputs
			]
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/trigger/SelectTrigger.js
var BOUNDARY_OFFSET = 2;
var SELECTED_DELAY = 400;
var UNSELECTED_DELAY = 200;
var stateAttributesMapping$2 = {
	...pressableTriggerOpenStateMapping,
	...fieldValidityMapping,
	value: () => null
};
/**
* A button that opens the select popup.
* Renders a `<button>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectTrigger$1 = /* @__PURE__ */ React$1.forwardRef(function SelectTrigger(componentProps, forwardedRef) {
	const { render, className, id: idProp, disabled: disabledProp = false, nativeButton = true, ...elementProps } = componentProps;
	const { setTouched, setFocused, validationMode, state: fieldState, disabled: fieldDisabled } = useFieldRootContext();
	const { labelId: fieldLabelId } = useLabelableContext();
	const { store, setOpen, selectionRef, validation, readOnly, required, alignItemWithTriggerActiveRef, disabled: selectDisabled, keyboardActiveRef } = useSelectRootContext();
	const disabled = fieldDisabled || selectDisabled || disabledProp;
	const open = useStore(store, selectors.open);
	const value = useStore(store, selectors.value);
	const triggerProps = useStore(store, selectors.triggerProps);
	const positionerElement = useStore(store, selectors.positionerElement);
	const listElement = useStore(store, selectors.listElement);
	const rootId = useStore(store, selectors.id);
	const selectLabelId = useStore(store, selectors.labelId);
	const hasSelectedValue = useStore(store, selectors.hasSelectedValue);
	const shouldCheckNullItemLabel = !hasSelectedValue && open;
	const hasNullItemLabel = useStore(store, selectors.hasNullItemLabel, shouldCheckNullItemLabel);
	const id = idProp ?? rootId;
	const ariaLabelledBy = resolveAriaLabelledBy(fieldLabelId, selectLabelId);
	useLabelableId({ id });
	const positionerRef = useValueAsRef(positionerElement);
	const triggerRef = React$1.useRef(null);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	const mergedRef = useMergedRefs(forwardedRef, triggerRef, buttonRef, useStableCallback((element) => {
		store.set("triggerElement", element);
	}));
	const timeoutFocus = useTimeout();
	const timeoutMouseDown = useTimeout();
	const selectedDelayTimeout = useTimeout();
	const unselectedDelayTimeout = useTimeout();
	React$1.useEffect(() => {
		if (open) {
			if (!(hasSelectedValue || hasNullItemLabel)) selectedDelayTimeout.start(SELECTED_DELAY, () => {
				selectionRef.current.allowUnselectedMouseUp = true;
				selectionRef.current.allowSelectedMouseUp = true;
			});
			else unselectedDelayTimeout.start(UNSELECTED_DELAY, () => {
				selectionRef.current.allowUnselectedMouseUp = true;
				selectedDelayTimeout.start(UNSELECTED_DELAY, () => {
					selectionRef.current.allowSelectedMouseUp = true;
				});
			});
			return () => {
				selectedDelayTimeout.clear();
				unselectedDelayTimeout.clear();
			};
		}
		selectionRef.current = {
			allowSelectedMouseUp: false,
			allowUnselectedMouseUp: false
		};
		timeoutMouseDown.clear();
	}, [
		open,
		hasSelectedValue,
		hasNullItemLabel,
		selectionRef,
		timeoutMouseDown,
		selectedDelayTimeout,
		unselectedDelayTimeout
	]);
	const ariaControlsId = React$1.useMemo(() => {
		return listElement?.id ?? getFloatingFocusElement(positionerElement)?.id;
	}, [listElement, positionerElement]);
	const props = mergeProps(triggerProps, {
		id,
		role: "combobox",
		"aria-expanded": open ? "true" : "false",
		"aria-haspopup": "listbox",
		"aria-controls": open ? ariaControlsId : void 0,
		"aria-labelledby": ariaLabelledBy,
		"aria-readonly": readOnly || void 0,
		"aria-required": required || void 0,
		tabIndex: disabled ? -1 : 0,
		ref: mergedRef,
		onFocus(event) {
			setFocused(true);
			if (open && alignItemWithTriggerActiveRef.current) setOpen(false, createChangeEventDetails(none, event.nativeEvent));
			timeoutFocus.start(0, () => {
				store.set("forceMount", true);
			});
		},
		onBlur(event) {
			if (contains(positionerElement, event.relatedTarget)) return;
			setTouched(true);
			setFocused(false);
			if (validationMode === "onBlur") validation.commit(value);
		},
		onPointerMove() {
			keyboardActiveRef.current = false;
		},
		onKeyDown() {
			keyboardActiveRef.current = true;
		},
		onMouseDown(event) {
			if (open) return;
			const doc = ownerDocument(event.currentTarget);
			function handleMouseUp(mouseEvent) {
				if (!triggerRef.current) return;
				const mouseUpTarget = mouseEvent.target;
				if (contains(triggerRef.current, mouseUpTarget) || contains(positionerRef.current, mouseUpTarget) || mouseUpTarget === triggerRef.current) return;
				const bounds = getPseudoElementBounds(triggerRef.current);
				if (mouseEvent.clientX >= bounds.left - BOUNDARY_OFFSET && mouseEvent.clientX <= bounds.right + BOUNDARY_OFFSET && mouseEvent.clientY >= bounds.top - BOUNDARY_OFFSET && mouseEvent.clientY <= bounds.bottom + BOUNDARY_OFFSET) return;
				setOpen(false, createChangeEventDetails(cancelOpen, mouseEvent));
			}
			timeoutMouseDown.start(0, () => {
				doc.addEventListener("mouseup", handleMouseUp, { once: true });
			});
		}
	}, validation.getValidationProps, elementProps, getButtonProps);
	props.role = "combobox";
	const state = {
		...fieldState,
		open,
		disabled,
		value,
		readOnly,
		placeholder: !hasSelectedValue
	};
	return useRenderElement("button", componentProps, {
		ref: [forwardedRef, triggerRef],
		state,
		stateAttributesMapping: stateAttributesMapping$2,
		props
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/value/SelectValue.js
var stateAttributesMapping$1 = { value: () => null };
/**
* A text label of the currently selected item.
* Renders a `<span>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectValue$1 = /* @__PURE__ */ React$1.forwardRef(function SelectValue(componentProps, forwardedRef) {
	const { className, render, children: childrenProp, placeholder, ...elementProps } = componentProps;
	const { store, valueRef } = useSelectRootContext();
	const value = useStore(store, selectors.value);
	const items = useStore(store, selectors.items);
	const itemToStringLabel = useStore(store, selectors.itemToStringLabel);
	const hasSelectedValue = useStore(store, selectors.hasSelectedValue);
	const shouldCheckNullItemLabel = !hasSelectedValue && placeholder != null && childrenProp == null;
	const hasNullLabel = useStore(store, selectors.hasNullItemLabel, shouldCheckNullItemLabel);
	const state = {
		value,
		placeholder: !hasSelectedValue
	};
	let children = null;
	if (typeof childrenProp === "function") children = childrenProp(value);
	else if (childrenProp != null) children = childrenProp;
	else if (!hasSelectedValue && placeholder != null && !hasNullLabel) children = placeholder;
	else if (Array.isArray(value)) children = resolveMultipleLabels(value, items, itemToStringLabel);
	else children = resolveSelectedLabel(value, items, itemToStringLabel);
	return useRenderElement("span", componentProps, {
		state,
		ref: [forwardedRef, valueRef],
		props: [{ children }, elementProps],
		stateAttributesMapping: stateAttributesMapping$1
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/icon/SelectIcon.js
/**
* An icon that indicates that the trigger button opens a select popup.
* Renders a `<span>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectIcon = /* @__PURE__ */ React$1.forwardRef(function SelectIcon(componentProps, forwardedRef) {
	const { className, render, ...elementProps } = componentProps;
	const { store } = useSelectRootContext();
	return useRenderElement("span", componentProps, {
		state: { open: useStore(store, selectors.open) },
		ref: forwardedRef,
		props: [{
			"aria-hidden": true,
			children: "▼"
		}, elementProps],
		stateAttributesMapping: triggerOpenStateMapping
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/portal/SelectPortalContext.js
var SelectPortalContext = /* @__PURE__ */ React$1.createContext(void 0);
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/portal/SelectPortal.js
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectPortal = /* @__PURE__ */ React$1.forwardRef(function SelectPortal(portalProps, forwardedRef) {
	const { store } = useSelectRootContext();
	const mounted = useStore(store, selectors.mounted);
	const forceMount = useStore(store, selectors.forceMount);
	if (!(mounted || forceMount)) return null;
	return /* @__PURE__ */ jsx(SelectPortalContext.Provider, {
		value: true,
		children: /* @__PURE__ */ jsx(FloatingPortal, {
			ref: forwardedRef,
			...portalProps
		})
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/positioner/SelectPositionerContext.js
var SelectPositionerContext = /* @__PURE__ */ React$1.createContext(void 0);
function useSelectPositionerContext() {
	const context = React$1.useContext(SelectPositionerContext);
	if (!context) throw new Error(formatErrorMessage(59));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/popup/utils.js
function clearStyles(element, originalStyles) {
	if (element) Object.assign(element.style, originalStyles);
}
var LIST_FUNCTIONAL_STYLES = {
	position: "relative",
	maxHeight: "100%",
	overflowX: "hidden",
	overflowY: "auto"
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/positioner/SelectPositioner.js
var FIXED = { position: "fixed" };
/**
* Positions the select popup.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectPositioner = /* @__PURE__ */ React$1.forwardRef(function SelectPositioner(componentProps, forwardedRef) {
	const { anchor, positionMethod = "absolute", className, render, side = "bottom", align = "center", sideOffset = 0, alignOffset = 0, collisionBoundary = "clipping-ancestors", collisionPadding, arrowPadding = 5, sticky = false, disableAnchorTracking, alignItemWithTrigger = true, collisionAvoidance = DROPDOWN_COLLISION_AVOIDANCE, ...elementProps } = componentProps;
	const { store, listRef, labelsRef, alignItemWithTriggerActiveRef, selectedItemTextRef, valuesRef, initialValueRef, popupRef, setValue } = useSelectRootContext();
	const floatingRootContext = useSelectFloatingContext();
	const open = useStore(store, selectors.open);
	const mounted = useStore(store, selectors.mounted);
	const modal = useStore(store, selectors.modal);
	const value = useStore(store, selectors.value);
	const openMethod = useStore(store, selectors.openMethod);
	const positionerElement = useStore(store, selectors.positionerElement);
	const triggerElement = useStore(store, selectors.triggerElement);
	const isItemEqualToValue = useStore(store, selectors.isItemEqualToValue);
	const transitionStatus = useStore(store, selectors.transitionStatus);
	const scrollUpArrowRef = React$1.useRef(null);
	const scrollDownArrowRef = React$1.useRef(null);
	const [controlledAlignItemWithTrigger, setControlledAlignItemWithTrigger] = React$1.useState(alignItemWithTrigger);
	const alignItemWithTriggerActive = mounted && controlledAlignItemWithTrigger && openMethod !== "touch";
	if (!mounted && controlledAlignItemWithTrigger !== alignItemWithTrigger) setControlledAlignItemWithTrigger(alignItemWithTrigger);
	useIsoLayoutEffect(() => {
		if (!mounted) {
			if (selectors.scrollUpArrowVisible(store.state)) store.set("scrollUpArrowVisible", false);
			if (selectors.scrollDownArrowVisible(store.state)) store.set("scrollDownArrowVisible", false);
		}
	}, [store, mounted]);
	React$1.useImperativeHandle(alignItemWithTriggerActiveRef, () => alignItemWithTriggerActive);
	useScrollLock((alignItemWithTriggerActive || modal) && open && openMethod !== "touch", triggerElement);
	const positioning = useAnchorPositioning({
		anchor,
		floatingRootContext,
		positionMethod,
		mounted,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		collisionBoundary,
		collisionPadding,
		sticky,
		disableAnchorTracking: disableAnchorTracking ?? alignItemWithTriggerActive,
		collisionAvoidance,
		keepMounted: true
	});
	const renderedSide = alignItemWithTriggerActive ? "none" : positioning.side;
	const positionerStyles = alignItemWithTriggerActive ? FIXED : positioning.positionerStyles;
	const defaultProps = React$1.useMemo(() => {
		const hiddenStyles = {};
		if (!open) hiddenStyles.pointerEvents = "none";
		return {
			role: "presentation",
			hidden: !mounted,
			style: {
				...positionerStyles,
				...hiddenStyles
			}
		};
	}, [
		open,
		mounted,
		positionerStyles
	]);
	const state = {
		open,
		side: renderedSide,
		align: positioning.align,
		anchorHidden: positioning.anchorHidden
	};
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, useStableCallback((element) => {
			store.set("positionerElement", element);
		})],
		state,
		stateAttributesMapping: popupStateMapping,
		props: [
			defaultProps,
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps
		]
	});
	const prevMapSizeRef = React$1.useRef(0);
	const onMapChange = useStableCallback((map) => {
		if (map.size === 0 && prevMapSizeRef.current === 0) return;
		if (valuesRef.current.length === 0) return;
		const prevSize = prevMapSizeRef.current;
		prevMapSizeRef.current = map.size;
		if (map.size === prevSize) return;
		const eventDetails = createChangeEventDetails(none);
		if (prevSize !== 0 && !store.state.multiple && value !== null) {
			if (findItemIndex(valuesRef.current, value, isItemEqualToValue) === -1) {
				const initialSelectedValue = initialValueRef.current;
				const nextValue = initialSelectedValue != null && findItemIndex(valuesRef.current, initialSelectedValue, isItemEqualToValue) !== -1 ? initialSelectedValue : null;
				setValue(nextValue, eventDetails);
				if (nextValue === null) {
					store.set("selectedIndex", null);
					selectedItemTextRef.current = null;
				}
			}
		}
		if (prevSize !== 0 && store.state.multiple && Array.isArray(value)) {
			const hasVisibleItem = (selectedItemValue) => findItemIndex(valuesRef.current, selectedItemValue, isItemEqualToValue) !== -1;
			const nextValue = value.filter((selectedItemValue) => hasVisibleItem(selectedItemValue));
			if (nextValue.length !== value.length || nextValue.some((selectedItemValue) => !selectedValueIncludes(value, selectedItemValue, isItemEqualToValue))) {
				setValue(nextValue, eventDetails);
				if (nextValue.length === 0) {
					store.set("selectedIndex", null);
					selectedItemTextRef.current = null;
				}
			}
		}
		if (open && alignItemWithTriggerActive) {
			store.update({
				scrollUpArrowVisible: false,
				scrollDownArrowVisible: false
			});
			const stylesToClear = { height: "" };
			clearStyles(positionerElement, stylesToClear);
			clearStyles(popupRef.current, stylesToClear);
		}
	});
	const contextValue = React$1.useMemo(() => ({
		...positioning,
		side: renderedSide,
		alignItemWithTriggerActive,
		setControlledAlignItemWithTrigger,
		scrollUpArrowRef,
		scrollDownArrowRef
	}), [
		positioning,
		renderedSide,
		alignItemWithTriggerActive,
		setControlledAlignItemWithTrigger
	]);
	return /* @__PURE__ */ jsx(CompositeList, {
		elementsRef: listRef,
		labelsRef,
		onMapChange,
		children: /* @__PURE__ */ jsxs(SelectPositionerContext.Provider, {
			value: contextValue,
			children: [mounted && modal && /* @__PURE__ */ jsx(InternalBackdrop, {
				inert: inertValue(!open),
				cutout: triggerElement
			}), element]
		})
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/isMouseWithinBounds.js
function isMouseWithinBounds(event) {
	const targetRect = event.currentTarget.getBoundingClientRect();
	return targetRect.top + 1 <= event.clientY && event.clientY <= targetRect.bottom - 1 && targetRect.left + 1 <= event.clientX && event.clientX <= targetRect.right - 1;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/popup/SelectPopup.js
var SCROLL_EPS_PX = 1;
var stateAttributesMapping = {
	...popupStateMapping,
	...transitionStatusMapping
};
/**
* A container for the select list.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectPopup = /* @__PURE__ */ React$1.forwardRef(function SelectPopup(componentProps, forwardedRef) {
	const { render, className, finalFocus, ...elementProps } = componentProps;
	const { store, popupRef, onOpenChangeComplete, setOpen, valueRef, selectedItemTextRef, keyboardActiveRef, multiple, handleScrollArrowVisibility, scrollHandlerRef, highlightItemOnHover } = useSelectRootContext();
	const { side, align, alignItemWithTriggerActive, setControlledAlignItemWithTrigger, scrollDownArrowRef, scrollUpArrowRef } = useSelectPositionerContext();
	const insideToolbar = useToolbarRootContext(true) != null;
	const floatingRootContext = useSelectFloatingContext();
	const { nonce, disableStyleElements } = useCSPContext();
	const highlightTimeout = useTimeout();
	const id = useStore(store, selectors.id);
	const open = useStore(store, selectors.open);
	const mounted = useStore(store, selectors.mounted);
	const popupProps = useStore(store, selectors.popupProps);
	const transitionStatus = useStore(store, selectors.transitionStatus);
	const triggerElement = useStore(store, selectors.triggerElement);
	const positionerElement = useStore(store, selectors.positionerElement);
	const listElement = useStore(store, selectors.listElement);
	const initialHeightRef = React$1.useRef(0);
	const reachedMaxHeightRef = React$1.useRef(false);
	const maxHeightRef = React$1.useRef(0);
	const initialPlacedRef = React$1.useRef(false);
	const originalPositionerStylesRef = React$1.useRef({});
	const scrollArrowFrame = useAnimationFrame();
	const handleScroll = useStableCallback((scroller) => {
		if (!positionerElement || !popupRef.current || !initialPlacedRef.current) return;
		if (reachedMaxHeightRef.current || !alignItemWithTriggerActive) {
			handleScrollArrowVisibility();
			return;
		}
		const isTopPositioned = positionerElement.style.top === "0px";
		const isBottomPositioned = positionerElement.style.bottom === "0px";
		const currentHeight = positionerElement.getBoundingClientRect().height;
		const doc = ownerDocument(positionerElement);
		const positionerStyles = getComputedStyle(positionerElement);
		const marginTop = parseFloat(positionerStyles.marginTop);
		const marginBottom = parseFloat(positionerStyles.marginBottom);
		const maxPopupHeight = getMaxPopupHeight(getComputedStyle(popupRef.current));
		const maxAvailableHeight = Math.min(doc.documentElement.clientHeight - marginTop - marginBottom, maxPopupHeight);
		const scrollTop = scroller.scrollTop;
		const maxScrollTop = getMaxScrollTop(scroller);
		let nextPositionerHeight = 0;
		let nextScrollTop = null;
		let setReachedMax = false;
		let scrollToMax = false;
		const setHeight = (height) => {
			positionerElement.style.height = `${height}px`;
		};
		const handleSmallDiff = (diff, targetScrollTop) => {
			const heightDelta = clamp(diff, 0, maxAvailableHeight - currentHeight);
			if (heightDelta > 0) setHeight(currentHeight + heightDelta);
			scroller.scrollTop = targetScrollTop;
			if (maxAvailableHeight - (currentHeight + heightDelta) <= SCROLL_EPS_PX) reachedMaxHeightRef.current = true;
			handleScrollArrowVisibility();
		};
		if (isTopPositioned) {
			const diff = maxScrollTop - scrollTop;
			const idealHeight = currentHeight + diff;
			const nextHeight = Math.min(idealHeight, maxAvailableHeight);
			nextPositionerHeight = nextHeight;
			if (diff <= SCROLL_EPS_PX) {
				handleSmallDiff(diff, maxScrollTop);
				return;
			}
			if (maxAvailableHeight - nextHeight > SCROLL_EPS_PX) scrollToMax = true;
			else setReachedMax = true;
		} else if (isBottomPositioned) {
			const diff = scrollTop;
			const idealHeight = currentHeight + diff;
			const nextHeight = Math.min(idealHeight, maxAvailableHeight);
			const overshoot = idealHeight - maxAvailableHeight;
			nextPositionerHeight = nextHeight;
			if (diff <= SCROLL_EPS_PX) {
				handleSmallDiff(diff, 0);
				return;
			}
			if (maxAvailableHeight - nextHeight > SCROLL_EPS_PX) nextScrollTop = 0;
			else {
				setReachedMax = true;
				if (scrollTop < maxScrollTop) nextScrollTop = scrollTop - (diff - overshoot);
			}
		}
		nextPositionerHeight = Math.ceil(nextPositionerHeight);
		if (nextPositionerHeight !== 0) setHeight(nextPositionerHeight);
		if (scrollToMax || nextScrollTop != null) {
			const nextMaxScrollTop = getMaxScrollTop(scroller);
			const target = scrollToMax ? nextMaxScrollTop : clamp(nextScrollTop, 0, nextMaxScrollTop);
			if (Math.abs(scroller.scrollTop - target) > SCROLL_EPS_PX) scroller.scrollTop = target;
		}
		if (setReachedMax || nextPositionerHeight >= maxAvailableHeight - SCROLL_EPS_PX) reachedMaxHeightRef.current = true;
		handleScrollArrowVisibility();
	});
	React$1.useImperativeHandle(scrollHandlerRef, () => handleScroll, [handleScroll]);
	useOpenChangeComplete({
		open,
		ref: popupRef,
		onComplete() {
			if (open) onOpenChangeComplete?.(true);
		}
	});
	const state = {
		open,
		transitionStatus,
		side,
		align
	};
	useIsoLayoutEffect(() => {
		if (!positionerElement || !popupRef.current || Object.keys(originalPositionerStylesRef.current).length) return;
		originalPositionerStylesRef.current = {
			top: positionerElement.style.top || "0",
			left: positionerElement.style.left || "0",
			right: positionerElement.style.right,
			height: positionerElement.style.height,
			bottom: positionerElement.style.bottom,
			minHeight: positionerElement.style.minHeight,
			maxHeight: positionerElement.style.maxHeight,
			marginTop: positionerElement.style.marginTop,
			marginBottom: positionerElement.style.marginBottom
		};
	}, [popupRef, positionerElement]);
	useIsoLayoutEffect(() => {
		if (open || alignItemWithTriggerActive) return;
		initialPlacedRef.current = false;
		reachedMaxHeightRef.current = false;
		initialHeightRef.current = 0;
		maxHeightRef.current = 0;
		clearStyles(positionerElement, originalPositionerStylesRef.current);
	}, [
		open,
		alignItemWithTriggerActive,
		positionerElement,
		popupRef
	]);
	useIsoLayoutEffect(() => {
		const popupElement = popupRef.current;
		if (!open || !triggerElement || !positionerElement || !popupElement || store.state.transitionStatus === "ending") return;
		if (!alignItemWithTriggerActive) {
			initialPlacedRef.current = true;
			scrollArrowFrame.request(handleScrollArrowVisibility);
			popupElement.style.removeProperty("--transform-origin");
			return;
		}
		queueMicrotask(() => {
			const restoreTransformStyles = unsetTransformStyles(popupElement);
			popupElement.style.removeProperty("--transform-origin");
			try {
				const positionerStyles = getComputedStyle(positionerElement);
				const popupStyles = getComputedStyle(popupElement);
				const doc = ownerDocument(triggerElement);
				const win = getWindow(positionerElement);
				const scale = getScale(triggerElement);
				const triggerRect = normalizeRect(triggerElement.getBoundingClientRect(), scale);
				const positionerRect = normalizeRect(positionerElement.getBoundingClientRect(), scale);
				const triggerX = triggerRect.left;
				const triggerHeight = triggerRect.height;
				const scroller = listElement || popupElement;
				const scrollHeight = scroller.scrollHeight;
				const borderBottom = parseFloat(popupStyles.borderBottomWidth);
				const marginTop = parseFloat(positionerStyles.marginTop) || 10;
				const marginBottom = parseFloat(positionerStyles.marginBottom) || 10;
				const minHeight = parseFloat(positionerStyles.minHeight) || 100;
				const maxPopupHeight = getMaxPopupHeight(popupStyles);
				const paddingLeft = 5;
				const paddingRight = 5;
				const triggerCollisionThreshold = 20;
				const viewportHeight = doc.documentElement.clientHeight - marginTop - marginBottom;
				const viewportWidth = doc.documentElement.clientWidth;
				const availableSpaceBeneathTrigger = viewportHeight - triggerRect.bottom + triggerHeight;
				const textElement = selectedItemTextRef.current;
				const valueElement = valueRef.current;
				let textRect;
				let offsetX = 0;
				let offsetY = 0;
				if (textElement && valueElement) {
					const valueRect = normalizeRect(valueElement.getBoundingClientRect(), scale);
					textRect = normalizeRect(textElement.getBoundingClientRect(), scale);
					const valueLeftFromTriggerLeft = valueRect.left - triggerX;
					const textLeftFromPositionerLeft = textRect.left - positionerRect.left;
					const valueCenterFromPositionerTop = valueRect.top - triggerRect.top + valueRect.height / 2;
					const textCenterFromTriggerTop = textRect.top - positionerRect.top + textRect.height / 2;
					offsetX = valueLeftFromTriggerLeft - textLeftFromPositionerLeft;
					offsetY = textCenterFromTriggerTop - valueCenterFromPositionerTop;
				}
				const idealHeight = availableSpaceBeneathTrigger + offsetY + marginBottom + borderBottom;
				let height = Math.min(viewportHeight, idealHeight);
				const maxHeight = viewportHeight - marginTop - marginBottom;
				const scrollTop = idealHeight - height;
				const left = Math.max(paddingLeft, triggerX + offsetX);
				const maxRight = viewportWidth - paddingRight;
				const rightOverflow = Math.max(0, left + positionerRect.width - maxRight);
				positionerElement.style.left = `${left - rightOverflow}px`;
				positionerElement.style.height = `${height}px`;
				positionerElement.style.maxHeight = "auto";
				positionerElement.style.marginTop = `${marginTop}px`;
				positionerElement.style.marginBottom = `${marginBottom}px`;
				popupElement.style.height = "100%";
				const maxScrollTop = getMaxScrollTop(scroller);
				const isTopPositioned = scrollTop >= maxScrollTop - SCROLL_EPS_PX;
				if (isTopPositioned) height = Math.min(viewportHeight, positionerRect.height) - (scrollTop - maxScrollTop);
				const fallbackToAlignPopupToTrigger = triggerRect.top < triggerCollisionThreshold || triggerRect.bottom > viewportHeight - triggerCollisionThreshold || Math.ceil(height) + SCROLL_EPS_PX < Math.min(scrollHeight, minHeight);
				const isPinchZoomed = (win.visualViewport?.scale ?? 1) !== 1 && isWebKit;
				if (fallbackToAlignPopupToTrigger || isPinchZoomed) {
					initialPlacedRef.current = true;
					clearStyles(positionerElement, originalPositionerStylesRef.current);
					ReactDOM$1.flushSync(() => setControlledAlignItemWithTrigger(false));
					return;
				}
				if (isTopPositioned) {
					const topOffset = Math.max(0, viewportHeight - idealHeight);
					positionerElement.style.top = positionerRect.height >= maxHeight ? "0" : `${topOffset}px`;
					positionerElement.style.height = `${height}px`;
					scroller.scrollTop = getMaxScrollTop(scroller);
					initialHeightRef.current = Math.max(minHeight, height);
				} else {
					positionerElement.style.bottom = "0";
					initialHeightRef.current = Math.max(minHeight, height);
					scroller.scrollTop = scrollTop;
				}
				if (textRect) {
					const popupTop = positionerRect.top;
					const popupHeight = positionerRect.height;
					const textCenterY = textRect.top + textRect.height / 2;
					const clampedY = clamp(popupHeight > 0 ? (textCenterY - popupTop) / popupHeight * 100 : 50, 0, 100);
					popupElement.style.setProperty("--transform-origin", `50% ${clampedY}%`);
				}
				if (initialHeightRef.current === viewportHeight || height >= maxPopupHeight) reachedMaxHeightRef.current = true;
				handleScrollArrowVisibility();
				setTimeout(() => {
					initialPlacedRef.current = true;
				});
			} finally {
				restoreTransformStyles();
			}
		});
	}, [
		store,
		open,
		positionerElement,
		triggerElement,
		valueRef,
		selectedItemTextRef,
		popupRef,
		handleScrollArrowVisibility,
		alignItemWithTriggerActive,
		setControlledAlignItemWithTrigger,
		scrollArrowFrame,
		scrollDownArrowRef,
		scrollUpArrowRef,
		listElement
	]);
	React$1.useEffect(() => {
		if (!alignItemWithTriggerActive || !positionerElement || !open) return;
		const win = getWindow(positionerElement);
		function handleResize(event) {
			setOpen(false, createChangeEventDetails(windowResize, event));
		}
		win.addEventListener("resize", handleResize);
		return () => {
			win.removeEventListener("resize", handleResize);
		};
	}, [
		setOpen,
		alignItemWithTriggerActive,
		positionerElement,
		open
	]);
	const defaultProps = {
		...listElement ? {
			role: "presentation",
			"aria-orientation": void 0
		} : {
			role: "listbox",
			"aria-multiselectable": multiple || void 0,
			id: `${id}-list`
		},
		onKeyDown(event) {
			keyboardActiveRef.current = true;
			if (insideToolbar && COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
		},
		onMouseMove() {
			keyboardActiveRef.current = false;
		},
		onPointerLeave(event) {
			if (!highlightItemOnHover || isMouseWithinBounds(event) || event.pointerType === "touch") return;
			const popup = event.currentTarget;
			highlightTimeout.start(0, () => {
				store.set("activeIndex", null);
				popup.focus({ preventScroll: true });
			});
		},
		onScroll(event) {
			if (listElement) return;
			handleScroll(event.currentTarget);
		},
		...alignItemWithTriggerActive && { style: listElement ? { height: "100%" } : LIST_FUNCTIONAL_STYLES }
	};
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, popupRef],
		state,
		stateAttributesMapping,
		props: [
			popupProps,
			defaultProps,
			getDisabledMountTransitionStyles(transitionStatus),
			{ className: !listElement && alignItemWithTriggerActive ? styleDisableScrollbar.className : void 0 },
			elementProps
		]
	});
	return /* @__PURE__ */ jsxs(React$1.Fragment, { children: [!disableStyleElements && styleDisableScrollbar.getElement(nonce), /* @__PURE__ */ jsx(FloatingFocusManager, {
		context: floatingRootContext,
		modal: false,
		disabled: !mounted,
		returnFocus: finalFocus,
		restoreFocus: true,
		children: element
	})] });
});
function getMaxPopupHeight(popupStyles) {
	const maxHeightStyle = popupStyles.maxHeight || "";
	return maxHeightStyle.endsWith("px") ? parseFloat(maxHeightStyle) || Infinity : Infinity;
}
function getMaxScrollTop(scroller) {
	return Math.max(0, scroller.scrollHeight - scroller.clientHeight);
}
function getScale(element) {
	return platform.getScale(element);
}
function normalizeRect(rect, scale) {
	return rectToClientRect({
		x: rect.x / scale.x,
		y: rect.y / scale.y,
		width: rect.width / scale.x,
		height: rect.height / scale.y
	});
}
var TRANSFORM_STYLE_RESETS = [
	["transform", "none"],
	["scale", "1"],
	["translate", "0 0"]
];
function unsetTransformStyles(popupElement) {
	const { style } = popupElement;
	const originalStyles = {};
	for (const [property, value] of TRANSFORM_STYLE_RESETS) {
		originalStyles[property] = style.getPropertyValue(property);
		style.setProperty(property, value, "important");
	}
	return () => {
		for (const [property] of TRANSFORM_STYLE_RESETS) {
			const originalValue = originalStyles[property];
			if (originalValue) style.setProperty(property, originalValue);
			else style.removeProperty(property);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/list/SelectList.js
/**
* A container for the select items.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectList = /* @__PURE__ */ React$1.forwardRef(function SelectList(componentProps, forwardedRef) {
	const { className, render, ...elementProps } = componentProps;
	const { store, scrollHandlerRef } = useSelectRootContext();
	const { alignItemWithTriggerActive } = useSelectPositionerContext();
	const hasScrollArrows = useStore(store, selectors.hasScrollArrows);
	const openMethod = useStore(store, selectors.openMethod);
	const multiple = useStore(store, selectors.multiple);
	const defaultProps = {
		id: `${useStore(store, selectors.id)}-list`,
		role: "listbox",
		"aria-multiselectable": multiple || void 0,
		onScroll(event) {
			scrollHandlerRef.current?.(event.currentTarget);
		},
		...alignItemWithTriggerActive && { style: LIST_FUNCTIONAL_STYLES },
		className: hasScrollArrows && openMethod !== "touch" ? styleDisableScrollbar.className : void 0
	};
	return useRenderElement("div", componentProps, {
		ref: [forwardedRef, useStableCallback((element) => {
			store.set("listElement", element);
		})],
		props: [defaultProps, elementProps]
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/item/SelectItemContext.js
var SelectItemContext = /* @__PURE__ */ React$1.createContext(void 0);
function useSelectItemContext() {
	const context = React$1.useContext(SelectItemContext);
	if (!context) throw new Error(formatErrorMessage(57));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/item/SelectItem.js
/**
* An individual option in the select popup.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectItem$1 = /* @__PURE__ */ React$1.memo(/* @__PURE__ */ React$1.forwardRef(function SelectItem(componentProps, forwardedRef) {
	const { render, className, value: itemValue = null, label, disabled = false, nativeButton = false, ...elementProps } = componentProps;
	const textRef = React$1.useRef(null);
	const listItem = useCompositeListItem({
		label,
		textRef,
		indexGuessBehavior: IndexGuessBehavior.GuessFromOrder
	});
	const { store, getItemProps, setOpen, setValue, selectionRef, typingRef, valuesRef, keyboardActiveRef, multiple, highlightItemOnHover } = useSelectRootContext();
	const highlightTimeout = useTimeout();
	const highlighted = useStore(store, selectors.isActive, listItem.index);
	const selected = useStore(store, selectors.isSelected, listItem.index, itemValue);
	const selectedByFocus = useStore(store, selectors.isSelectedByFocus, listItem.index);
	const isItemEqualToValue = useStore(store, selectors.isItemEqualToValue);
	const index = listItem.index;
	const hasRegistered = index !== -1;
	const itemRef = React$1.useRef(null);
	const indexRef = useValueAsRef(index);
	useIsoLayoutEffect(() => {
		if (!hasRegistered) return;
		const values = valuesRef.current;
		values[index] = itemValue;
		return () => {
			delete values[index];
		};
	}, [
		hasRegistered,
		index,
		itemValue,
		valuesRef
	]);
	useIsoLayoutEffect(() => {
		if (!hasRegistered) return;
		const selectedValue = store.state.value;
		let selectedCandidate = selectedValue;
		if (multiple && Array.isArray(selectedValue) && selectedValue.length > 0) selectedCandidate = selectedValue[selectedValue.length - 1];
		if (selectedCandidate !== void 0 && compareItemEquality(itemValue, selectedCandidate, isItemEqualToValue)) store.set("selectedIndex", index);
	}, [
		hasRegistered,
		index,
		multiple,
		isItemEqualToValue,
		store,
		itemValue
	]);
	const state = {
		disabled,
		selected,
		highlighted
	};
	const rootProps = getItemProps({
		active: highlighted,
		selected
	});
	rootProps.onFocus = void 0;
	rootProps.id = void 0;
	const lastKeyRef = React$1.useRef(null);
	const pointerTypeRef = React$1.useRef("mouse");
	const didPointerDownRef = React$1.useRef(false);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		focusableWhenDisabled: true,
		native: nativeButton,
		composite: true
	});
	function commitSelection(event) {
		const selectedValue = store.state.value;
		if (multiple) {
			const currentValue = Array.isArray(selectedValue) ? selectedValue : [];
			setValue(selected ? removeItem(currentValue, itemValue, isItemEqualToValue) : [...currentValue, itemValue], createChangeEventDetails(itemPress, event));
		} else {
			setValue(itemValue, createChangeEventDetails(itemPress, event));
			setOpen(false, createChangeEventDetails(itemPress, event));
		}
	}
	const defaultProps = {
		role: "option",
		"aria-selected": selected,
		tabIndex: highlighted ? 0 : -1,
		onFocus() {
			store.set("activeIndex", index);
		},
		onMouseEnter() {
			if (!keyboardActiveRef.current && store.state.selectedIndex === null && highlightItemOnHover) store.set("activeIndex", index);
		},
		onMouseMove() {
			if (highlightItemOnHover) store.set("activeIndex", index);
		},
		onMouseLeave(event) {
			if (!highlightItemOnHover || keyboardActiveRef.current || isMouseWithinBounds(event)) return;
			highlightTimeout.start(0, () => {
				if (store.state.activeIndex === index) store.set("activeIndex", null);
			});
		},
		onTouchStart() {
			selectionRef.current = {
				allowSelectedMouseUp: false,
				allowUnselectedMouseUp: false
			};
		},
		onKeyDown(event) {
			lastKeyRef.current = event.key;
			store.set("activeIndex", index);
			if (event.key === " " && typingRef.current) event.preventDefault();
		},
		onClick(event) {
			didPointerDownRef.current = false;
			if (event.type === "keydown" && lastKeyRef.current === null) return;
			if (disabled || event.type === "keydown" && lastKeyRef.current === " " && typingRef.current || pointerTypeRef.current !== "touch" && !highlighted) return;
			lastKeyRef.current = null;
			commitSelection(event.nativeEvent);
		},
		onPointerEnter(event) {
			pointerTypeRef.current = event.pointerType;
		},
		onPointerDown(event) {
			pointerTypeRef.current = event.pointerType;
			didPointerDownRef.current = true;
		},
		onMouseUp() {
			if (disabled) return;
			if (didPointerDownRef.current) {
				didPointerDownRef.current = false;
				return;
			}
			const disallowSelectedMouseUp = !selectionRef.current.allowSelectedMouseUp && selected;
			const disallowUnselectedMouseUp = !selectionRef.current.allowUnselectedMouseUp && !selected;
			if (disallowSelectedMouseUp || disallowUnselectedMouseUp || pointerTypeRef.current !== "touch" && !highlighted) return;
			itemRef.current?.click();
		}
	};
	const element = useRenderElement("div", componentProps, {
		ref: [
			buttonRef,
			forwardedRef,
			listItem.ref,
			itemRef
		],
		state,
		props: [
			rootProps,
			defaultProps,
			elementProps,
			getButtonProps
		]
	});
	const contextValue = React$1.useMemo(() => ({
		selected,
		indexRef,
		textRef,
		selectedByFocus,
		hasRegistered
	}), [
		selected,
		indexRef,
		textRef,
		selectedByFocus,
		hasRegistered
	]);
	return /* @__PURE__ */ jsx(SelectItemContext.Provider, {
		value: contextValue,
		children: element
	});
}));
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/item-indicator/SelectItemIndicator.js
/**
* Indicates whether the select item is selected.
* Renders a `<span>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectItemIndicator = /* @__PURE__ */ React$1.forwardRef(function SelectItemIndicator(componentProps, forwardedRef) {
	const keepMounted = componentProps.keepMounted ?? false;
	const { selected } = useSelectItemContext();
	if (!(keepMounted || selected)) return null;
	return /* @__PURE__ */ jsx(Inner, {
		...componentProps,
		ref: forwardedRef
	});
});
var Inner = /* @__PURE__ */ React$1.memo(/* @__PURE__ */ React$1.forwardRef((componentProps, forwardedRef) => {
	const { render, className, keepMounted, ...elementProps } = componentProps;
	const { selected } = useSelectItemContext();
	const indicatorRef = React$1.useRef(null);
	const { transitionStatus, setMounted } = useTransitionStatus(selected);
	const element = useRenderElement("span", componentProps, {
		ref: [forwardedRef, indicatorRef],
		state: {
			selected,
			transitionStatus
		},
		props: [{
			"aria-hidden": true,
			children: "✔️"
		}, elementProps],
		stateAttributesMapping: transitionStatusMapping
	});
	useOpenChangeComplete({
		open: selected,
		ref: indicatorRef,
		onComplete() {
			if (!selected) setMounted(false);
		}
	});
	return element;
}));
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/select/item-text/SelectItemText.js
/**
* A text label of the select item.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectItemText = /* @__PURE__ */ React$1.memo(/* @__PURE__ */ React$1.forwardRef(function SelectItemText(componentProps, forwardedRef) {
	const { indexRef, textRef, selectedByFocus, hasRegistered } = useSelectItemContext();
	const { selectedItemTextRef } = useSelectRootContext();
	const { className, render, ...elementProps } = componentProps;
	return useRenderElement("div", componentProps, {
		ref: [
			React$1.useCallback((node) => {
				if (!node || !hasRegistered) return;
				const hasNoSelectedItemText = selectedItemTextRef.current === null || !selectedItemTextRef.current.isConnected;
				if (selectedByFocus || hasNoSelectedItemText && indexRef.current === 0) selectedItemTextRef.current = node;
			}, [
				selectedItemTextRef,
				indexRef,
				selectedByFocus,
				hasRegistered
			]),
			forwardedRef,
			textRef
		],
		props: elementProps
	});
}));
//#endregion
//#region app/components/base/ui/select/index.tsx
var Select = SelectRoot;
var SelectValue = SelectValue$1;
var selectTriggerVariants = cva("", {
	variants: {
		size: {
			small: "h-6 gap-px rounded-md px-[5px] py-0 system-xs-regular",
			regular: "h-8 gap-0.5 rounded-lg px-2 py-1 system-sm-regular",
			large: "h-9 gap-0.5 rounded-[10px] px-2.5 py-1 system-md-regular"
		},
		variant: {
			default: "",
			destructive: "border border-components-input-border-destructive bg-components-input-bg-destructive shadow-xs hover:border-components-input-border-destructive hover:bg-components-input-bg-destructive"
		}
	},
	defaultVariants: {
		size: "regular",
		variant: "default"
	}
});
var contentPadding = {
	small: "px-[3px] py-1",
	regular: "p-1",
	large: "px-1.5 py-1"
};
function SelectTrigger({ className, children, size = "regular", variant = "default", clearable = false, onClear, loading = false, ...props }) {
	const paddingClass = contentPadding[size ?? "regular"];
	const isDestructive = variant === "destructive";
	let trailingIcon = null;
	if (loading) trailingIcon = /* @__PURE__ */ jsx("span", {
		className: "shrink-0 text-text-quaternary",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("span", { className: "i-ri-loader-4-line h-3.5 w-3.5 animate-spin" })
	});
	else if (isDestructive) trailingIcon = /* @__PURE__ */ jsx("span", {
		className: "shrink-0 text-text-destructive-secondary",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("span", { className: "i-ri-error-warning-line h-4 w-4" })
	});
	else if (clearable) trailingIcon = /* @__PURE__ */ jsx("span", {
		role: "button",
		"aria-label": "Clear selection",
		tabIndex: -1,
		className: "shrink-0 cursor-pointer text-text-quaternary hover:text-text-secondary group-data-[disabled]:hidden group-data-[readonly]:hidden",
		onClick: (e) => {
			e.stopPropagation();
			onClear?.();
		},
		onMouseDown: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ jsx("span", {
			className: "i-ri-close-circle-fill h-3.5 w-3.5",
			"aria-hidden": "true"
		})
	});
	else trailingIcon = /* @__PURE__ */ jsx(SelectIcon, {
		className: "shrink-0 text-text-quaternary transition-colors group-hover:text-text-secondary data-[open]:text-text-secondary group-data-[readonly]:hidden",
		children: /* @__PURE__ */ jsx("span", {
			className: "i-ri-arrow-down-s-line h-4 w-4",
			"aria-hidden": "true"
		})
	});
	return /* @__PURE__ */ jsxs(SelectTrigger$1, {
		className: cn("group relative flex w-full items-center border-0 bg-components-input-bg-normal text-left text-components-input-text-filled outline-none", "hover:bg-state-base-hover-alt focus-visible:bg-state-base-hover-alt", "data-[placeholder]:text-components-input-text-placeholder", selectTriggerVariants({
			size,
			variant
		}), "data-[readonly]:cursor-default data-[readonly]:bg-transparent data-[readonly]:hover:bg-transparent", "data-[disabled]:cursor-not-allowed data-[disabled]:bg-components-input-bg-disabled data-[disabled]:text-components-input-text-filled-disabled data-[disabled]:hover:bg-components-input-bg-disabled", "data-[disabled]:data-[placeholder]:text-components-input-text-disabled", className),
		...props,
		children: [/* @__PURE__ */ jsx("span", {
			className: cn("min-w-0 grow truncate", paddingClass),
			children
		}), trailingIcon]
	});
}
function SelectContent({ children, placement = "bottom-start", sideOffset = 4, alignOffset = 0, className, popupClassName, listClassName, positionerProps, popupProps, listProps }) {
	const { side, align } = parsePlacement(placement);
	return /* @__PURE__ */ jsx(SelectPortal, { children: /* @__PURE__ */ jsx(SelectPositioner, {
		side,
		align,
		sideOffset,
		alignOffset,
		alignItemWithTrigger: false,
		className: cn("z-[1002] outline-none", className),
		...positionerProps,
		children: /* @__PURE__ */ jsx(SelectPopup, {
			className: cn("rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-lg", "origin-[var(--transform-origin)] transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 motion-reduce:transition-none", popupClassName),
			...popupProps,
			children: /* @__PURE__ */ jsx(SelectList, {
				className: cn("max-h-80 min-w-[10rem] overflow-auto p-1 outline-none", listClassName),
				...listProps,
				children
			})
		})
	}) });
}
function SelectItem({ className, children, ...props }) {
	return /* @__PURE__ */ jsxs(SelectItem$1, {
		className: cn("flex h-8 cursor-pointer items-center rounded-lg px-2 text-text-secondary outline-none system-sm-medium", "data-[disabled]:cursor-not-allowed data-[highlighted]:bg-state-base-hover data-[disabled]:opacity-50", className),
		...props,
		children: [/* @__PURE__ */ jsx(SelectItemText, {
			className: "mr-1 min-w-0 grow truncate px-1",
			children
		}), /* @__PURE__ */ jsx(SelectItemIndicator, {
			className: "flex shrink-0 items-center text-text-accent",
			children: /* @__PURE__ */ jsx("span", {
				className: "i-ri-check-line h-4 w-4",
				"aria-hidden": "true"
			})
		})]
	});
}
//#endregion
//#region app/components/base/markdown/markdown-utils.ts
/**
* @fileoverview Utility functions for preprocessing Markdown content.
* These functions were extracted from the main markdown renderer for better separation of concerns.
* Includes preprocessing for LaTeX and custom "think" tags.
*/
var preprocessLaTeX = (content) => {
	if (typeof content !== "string") return content;
	const codeBlockRegex = /```[\s\S]*?```/g;
	const codeBlocks = content.match(codeBlockRegex) || [];
	const escapeReplacement = (str) => str.replace(/\$/g, "_TMP_REPLACE_DOLLAR_");
	let processedContent = content.replace(codeBlockRegex, "CODE_BLOCK_PLACEHOLDER");
	processedContent = flow([
		(str) => str.replace(/\\\[(.*?)\\\]/g, (_, equation) => `$$${equation}$$`),
		(str) => str.replace(/\\\[([\s\S]*?)\\\]/g, (_, equation) => `$$${equation}$$`),
		(str) => str.replace(/\\\((.*?)\\\)/g, (_, equation) => `$$${equation}$$`),
		(str) => str.replace(/(^|[^\\])\$(.+?)\$/g, (_, prefix, equation) => `${prefix}$${equation}$`)
	])(processedContent);
	codeBlocks.forEach((block) => {
		processedContent = processedContent.replace("CODE_BLOCK_PLACEHOLDER", escapeReplacement(block));
	});
	processedContent = processedContent.replace(/_TMP_REPLACE_DOLLAR_/g, "$");
	return processedContent;
};
var preprocessThinkTag = (content) => {
	const thinkOpenTagRegex = /(<think>\s*)+/g;
	const thinkCloseTagRegex = /(\s*<\/think>)+/g;
	return flow([
		(str) => str.replace(thinkOpenTagRegex, "<details data-think=true>\n"),
		(str) => str.replace(thinkCloseTagRegex, "\n[ENDTHINKFLAG]</details>"),
		(str) => str.replace(/(<\/details>)(?![^\S\r\n]*[\r\n])(?![^\S\r\n]*$)/g, "$1\n")
	])(content);
};
/**
* Transforms a URI for use in react-markdown, ensuring security and compatibility.
* This function is designed to work with react-markdown v9+ which has stricter
* default URL handling.
*
* Behavior:
* 1. Always allows the custom 'abbr:' protocol.
* 2. Always allows page-local fragments (e.g., "#some-id").
* 3. Always allows protocol-relative URLs (e.g., "//example.com/path").
* 4. Always allows purely relative paths (e.g., "path/to/file", "/abs/path").
* 5. Allows absolute URLs if their scheme is in a permitted list (case-insensitive):
*    'http:', 'https:', 'mailto:', 'xmpp:', 'irc:', 'ircs:'.
* 6. Intelligently distinguishes colons used for schemes from colons within
*    paths, query parameters, or fragments of relative-like URLs.
* 7. Returns the original URI if allowed, otherwise returns `undefined` to
*    signal that the URI should be removed/disallowed by react-markdown.
*/
var customUrlTransform = (uri) => {
	const PERMITTED_SCHEME_REGEX = /^(https?|ircs?|mailto|xmpp|abbr):$/i;
	if (uri.startsWith("#")) return uri;
	if (uri.startsWith("//")) return uri;
	const colonIndex = uri.indexOf(":");
	if (colonIndex === -1) return uri;
	const slashIndex = uri.indexOf("/");
	const questionMarkIndex = uri.indexOf("?");
	const hashIndex = uri.indexOf("#");
	if (slashIndex !== -1 && colonIndex > slashIndex || questionMarkIndex !== -1 && colonIndex > questionMarkIndex || hashIndex !== -1 && colonIndex > hashIndex) return uri;
	const scheme = uri.substring(0, colonIndex + 1).toLowerCase();
	if (PERMITTED_SCHEME_REGEX.test(scheme)) return uri;
	if (ALLOW_UNSAFE_DATA_SCHEME && scheme === "data:") return uri;
};
//#endregion
export { SelectContent as a, SelectValue as c, Select as i, flow as l, preprocessLaTeX as n, SelectItem as o, preprocessThinkTag as r, SelectTrigger as s, customUrlTransform as t };
