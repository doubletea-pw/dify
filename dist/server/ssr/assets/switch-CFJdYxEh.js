import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as cva } from "./dist-1O6DB-eK.js";
import { $t as visuallyHidden, Et as createChangeEventDetails, Wt as none, en as visuallyHiddenInput } from "./base-BuKAg6Le.js";
import { _ as mergeProps, b as useStableCallback, g as formatErrorMessage, m as useButton, p as useMergedRefs, t as useRenderElement, u as EMPTY_OBJECT, v as useIsoLayoutEffect } from "./useRenderElement-BTEjG3-d.js";
import { a as useFormContext, i as useFieldRootContext, n as useLabelableContext, o as fieldValidityMapping, r as useField, s as useControlled, t as useLabelableId } from "./useLabelableId-VnS7zcRD.js";
import { n as useBaseUiId, t as useValueChanged } from "./useValueChanged-D4oB7b6Z.js";
import * as React$1 from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/switch/root/SwitchRootContext.js
var SwitchRootContext = /* @__PURE__ */ React$1.createContext(void 0);
function useSwitchRootContext() {
	const context = React$1.useContext(SwitchRootContext);
	if (context === void 0) throw new Error(formatErrorMessage(63));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/switch/root/SwitchRootDataAttributes.js
var SwitchRootDataAttributes = /* @__PURE__ */ function(SwitchRootDataAttributes) {
	/**
	* Present when the switch is checked.
	*/
	SwitchRootDataAttributes["checked"] = "data-checked";
	/**
	* Present when the switch is not checked.
	*/
	SwitchRootDataAttributes["unchecked"] = "data-unchecked";
	/**
	* Present when the switch is disabled.
	*/
	SwitchRootDataAttributes["disabled"] = "data-disabled";
	/**
	* Present when the switch is readonly.
	*/
	SwitchRootDataAttributes["readonly"] = "data-readonly";
	/**
	* Present when the switch is required.
	*/
	SwitchRootDataAttributes["required"] = "data-required";
	/**
	* Present when the switch is in valid state (when wrapped in Field.Root).
	*/
	SwitchRootDataAttributes["valid"] = "data-valid";
	/**
	* Present when the switch is in invalid state (when wrapped in Field.Root).
	*/
	SwitchRootDataAttributes["invalid"] = "data-invalid";
	/**
	* Present when the switch has been touched (when wrapped in Field.Root).
	*/
	SwitchRootDataAttributes["touched"] = "data-touched";
	/**
	* Present when the switch's value has changed (when wrapped in Field.Root).
	*/
	SwitchRootDataAttributes["dirty"] = "data-dirty";
	/**
	* Present when the switch is active (when wrapped in Field.Root).
	*/
	SwitchRootDataAttributes["filled"] = "data-filled";
	/**
	* Present when the switch is focused (when wrapped in Field.Root).
	*/
	SwitchRootDataAttributes["focused"] = "data-focused";
	return SwitchRootDataAttributes;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/switch/stateAttributesMapping.js
var stateAttributesMapping = {
	...fieldValidityMapping,
	checked(value) {
		if (value) return { [SwitchRootDataAttributes.checked]: "" };
		return { [SwitchRootDataAttributes.unchecked]: "" };
	}
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/labelable-provider/useAriaLabelledBy.js
/**
* @internal
*/
function useAriaLabelledBy(explicitAriaLabelledBy, labelId, labelSourceRef, enableFallback = true, labelSourceId) {
	const [fallbackAriaLabelledBy, setFallbackAriaLabelledBy] = React$1.useState();
	const generatedLabelId = useBaseUiId(labelSourceId ? `${labelSourceId}-label` : void 0);
	const ariaLabelledBy = explicitAriaLabelledBy ?? labelId ?? fallbackAriaLabelledBy;
	useIsoLayoutEffect(() => {
		const nextAriaLabelledBy = explicitAriaLabelledBy || labelId || !enableFallback ? void 0 : getAriaLabelledBy(labelSourceRef.current, generatedLabelId);
		if (fallbackAriaLabelledBy !== nextAriaLabelledBy) setFallbackAriaLabelledBy(nextAriaLabelledBy);
	});
	return ariaLabelledBy;
}
function getAriaLabelledBy(labelSource, generatedLabelId) {
	const label = findAssociatedLabel(labelSource);
	if (!label) return;
	if (!label.id && generatedLabelId) label.id = generatedLabelId;
	return label.id || void 0;
}
function findAssociatedLabel(labelSource) {
	if (!labelSource) return;
	const parent = labelSource.parentElement;
	if (parent && parent.tagName === "LABEL") return parent;
	const controlId = labelSource.id;
	if (controlId) {
		const nextSibling = labelSource.nextElementSibling;
		if (nextSibling && nextSibling.htmlFor === controlId) return nextSibling;
	}
	const labels = labelSource.labels;
	return labels && labels[0];
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/switch/root/SwitchRoot.js
/**
* Represents the switch itself.
* Renders a `<span>` element and a hidden `<input>` beside.
*
* Documentation: [Base UI Switch](https://base-ui.com/react/components/switch)
*/
var SwitchRoot = /* @__PURE__ */ React$1.forwardRef(function SwitchRoot(componentProps, forwardedRef) {
	const { checked: checkedProp, className, defaultChecked, "aria-labelledby": ariaLabelledByProp, id: idProp, inputRef: externalInputRef, name: nameProp, nativeButton = false, onCheckedChange: onCheckedChangeProp, readOnly = false, required = false, disabled: disabledProp = false, render, uncheckedValue, value, ...elementProps } = componentProps;
	const { clearErrors } = useFormContext();
	const { state: fieldState, setTouched, setDirty, validityData, setFilled, setFocused, shouldValidateOnChange, validationMode, disabled: fieldDisabled, name: fieldName, validation } = useFieldRootContext();
	const { labelId } = useLabelableContext();
	const disabled = fieldDisabled || disabledProp;
	const name = fieldName ?? nameProp;
	const onCheckedChange = useStableCallback(onCheckedChangeProp);
	const inputRef = React$1.useRef(null);
	const handleInputRef = useMergedRefs(inputRef, externalInputRef, validation.inputRef);
	const switchRef = React$1.useRef(null);
	const id = useBaseUiId();
	const controlId = useLabelableId({
		id: idProp,
		implicit: false,
		controlRef: switchRef
	});
	const hiddenInputId = nativeButton ? void 0 : controlId;
	const [checked, setCheckedState] = useControlled({
		controlled: checkedProp,
		default: Boolean(defaultChecked),
		name: "Switch",
		state: "checked"
	});
	useField({
		id,
		commit: validation.commit,
		value: checked,
		controlRef: switchRef,
		name,
		getValue: () => checked
	});
	useIsoLayoutEffect(() => {
		if (inputRef.current) setFilled(inputRef.current.checked);
	}, [inputRef, setFilled]);
	useValueChanged(checked, () => {
		clearErrors(name);
		setDirty(checked !== validityData.initialValue);
		setFilled(checked);
		if (shouldValidateOnChange()) validation.commit(checked);
		else validation.commit(checked, true);
	});
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, hiddenInputId);
	const rootProps = {
		id: nativeButton ? controlId : id,
		role: "switch",
		"aria-checked": checked,
		"aria-readonly": readOnly || void 0,
		"aria-required": required || void 0,
		"aria-labelledby": ariaLabelledBy,
		onFocus() {
			if (!disabled) setFocused(true);
		},
		onBlur() {
			const element = inputRef.current;
			if (!element || disabled) return;
			setTouched(true);
			setFocused(false);
			if (validationMode === "onBlur") validation.commit(element.checked);
		},
		onClick(event) {
			if (readOnly || disabled) return;
			event.preventDefault();
			inputRef.current?.dispatchEvent(new PointerEvent("click", {
				bubbles: true,
				shiftKey: event.shiftKey,
				ctrlKey: event.ctrlKey,
				altKey: event.altKey,
				metaKey: event.metaKey
			}));
		}
	};
	const inputProps = React$1.useMemo(() => mergeProps({
		checked,
		disabled,
		id: hiddenInputId,
		name,
		required,
		style: name ? visuallyHiddenInput : visuallyHidden,
		tabIndex: -1,
		type: "checkbox",
		"aria-hidden": true,
		ref: handleInputRef,
		onChange(event) {
			if (event.nativeEvent.defaultPrevented) return;
			const nextChecked = event.target.checked;
			const eventDetails = createChangeEventDetails(none, event.nativeEvent);
			onCheckedChange?.(nextChecked, eventDetails);
			if (eventDetails.isCanceled) return;
			setCheckedState(nextChecked);
		},
		onFocus() {
			switchRef.current?.focus();
		}
	}, validation.getInputValidationProps, value !== void 0 ? { value } : EMPTY_OBJECT), [
		checked,
		disabled,
		handleInputRef,
		hiddenInputId,
		name,
		onCheckedChange,
		required,
		setCheckedState,
		validation,
		value
	]);
	const state = React$1.useMemo(() => ({
		...fieldState,
		checked,
		disabled,
		readOnly,
		required
	}), [
		fieldState,
		checked,
		disabled,
		readOnly,
		required
	]);
	const element = useRenderElement("span", componentProps, {
		state,
		ref: [
			forwardedRef,
			switchRef,
			buttonRef
		],
		props: [
			rootProps,
			validation.getValidationProps,
			elementProps,
			getButtonProps
		],
		stateAttributesMapping
	});
	return /* @__PURE__ */ jsxs(SwitchRootContext.Provider, {
		value: state,
		children: [
			element,
			!checked && name && uncheckedValue !== void 0 && /* @__PURE__ */ jsx("input", {
				type: "hidden",
				name,
				value: uncheckedValue
			}),
			/* @__PURE__ */ jsx("input", { ...inputProps })
		]
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/switch/thumb/SwitchThumb.js
/**
* The movable part of the switch that indicates whether the switch is on or off.
* Renders a `<span>`.
*
* Documentation: [Base UI Switch](https://base-ui.com/react/components/switch)
*/
var SwitchThumb = /* @__PURE__ */ React$1.forwardRef(function SwitchThumb(componentProps, forwardedRef) {
	const { render, className, ...elementProps } = componentProps;
	const { state: fieldState } = useFieldRootContext();
	const state = useSwitchRootContext();
	return useRenderElement("span", componentProps, {
		state: {
			...fieldState,
			...state
		},
		ref: forwardedRef,
		stateAttributesMapping,
		props: elementProps
	});
});
//#endregion
//#region app/components/base/switch/index.tsx
var switchRootVariants = cva(`group relative inline-flex shrink-0 cursor-pointer touch-manipulation items-center transition-colors duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-components-toggle-bg motion-reduce:transition-none bg-components-toggle-bg-unchecked hover:bg-components-toggle-bg-unchecked-hover data-[checked]:bg-components-toggle-bg data-[checked]:hover:bg-components-toggle-bg-hover data-[disabled]:cursor-not-allowed data-[disabled]:bg-components-toggle-bg-unchecked-disabled data-[disabled]:hover:bg-components-toggle-bg-unchecked-disabled data-[disabled]:data-[checked]:bg-components-toggle-bg-disabled data-[disabled]:data-[checked]:hover:bg-components-toggle-bg-disabled`, {
	variants: { size: {
		xs: "h-2.5 w-3.5 rounded-[2px] p-0.5",
		sm: "h-3 w-5 rounded-[3.5px] p-0.5",
		md: "h-4 w-7 rounded-[5px] p-0.5",
		lg: "h-5 w-9 rounded-[6px] p-[3px]"
	} },
	defaultVariants: { size: "md" }
});
var switchThumbVariants = cva("block bg-components-toggle-knob shadow-sm transition-transform duration-200 ease-in-out group-hover:bg-components-toggle-knob-hover group-hover:shadow-md group-data-[disabled]:bg-components-toggle-knob-disabled group-data-[disabled]:shadow-none motion-reduce:transition-none", {
	variants: { size: {
		xs: "h-1.5 w-1 rounded-[1px] data-[checked]:translate-x-1.5",
		sm: "h-2 w-[7px] rounded-[2px] data-[checked]:translate-x-[9px]",
		md: "h-3 w-2.5 rounded-[3px] data-[checked]:translate-x-[14px]",
		lg: "size-3.5 rounded-[4px] data-[checked]:translate-x-4"
	} },
	defaultVariants: { size: "md" }
});
var spinnerSizeConfig = {
	md: {
		icon: "size-2",
		uncheckedPosition: "left-[calc(50%+6px)]",
		checkedPosition: "left-[calc(50%-6px)]"
	},
	lg: {
		icon: "size-2.5",
		uncheckedPosition: "left-[calc(50%+8px)]",
		checkedPosition: "left-[calc(50%-8px)]"
	}
};
var Switch = ({ ref, value, onChange, size = "md", disabled = false, loading = false, className, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "data-testid": dataTestid }) => {
	const isDisabled = disabled || loading;
	const spinner = loading ? spinnerSizeConfig[size] : void 0;
	return /* @__PURE__ */ jsxs(SwitchRoot, {
		ref,
		checked: value,
		onCheckedChange: (checked) => onChange?.(checked),
		disabled: isDisabled,
		"aria-busy": loading || void 0,
		"aria-label": ariaLabel,
		"aria-labelledby": ariaLabelledBy,
		className: cn(switchRootVariants({ size }), className),
		"data-testid": dataTestid,
		children: [/* @__PURE__ */ jsx(SwitchThumb, { className: switchThumbVariants({ size }) }), spinner ? /* @__PURE__ */ jsx("span", {
			className: cn("absolute top-1/2 -translate-x-1/2 -translate-y-1/2", spinner.icon, value ? spinner.checkedPosition : spinner.uncheckedPosition),
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsx("i", { className: "i-ri-loader-2-line size-full animate-spin text-text-tertiary motion-reduce:animate-none" })
		}) : null]
	});
};
Switch.displayName = "Switch";
var switch_default = React$1.memo(Switch);
//#endregion
export { switch_default as t };
