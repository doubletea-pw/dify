import { d as isElement } from "./floating-ui.utils.dom-B62kDwTz.js";
import { b as useStableCallback, d as NOOP, g as formatErrorMessage, u as EMPTY_OBJECT, v as useIsoLayoutEffect, x as useRefWithInit } from "./useRenderElement-BTEjG3-d.js";
import { n as useBaseUiId } from "./useValueChanged-D4oB7b6Z.js";
import * as React$1 from "react";
import * as ReactDOM$1 from "react-dom";
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useControlled.js
function useControlled({ controlled, default: defaultProp, name, state = "value" }) {
	const { current: isControlled } = React$1.useRef(controlled !== void 0);
	const [valueState, setValue] = React$1.useState(defaultProp);
	return [isControlled ? controlled : valueState, React$1.useCallback((newValue) => {
		if (!isControlled) setValue(newValue);
	}, [])];
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/field/control/FieldControlDataAttributes.js
var FieldControlDataAttributes = /* @__PURE__ */ function(FieldControlDataAttributes) {
	/**
	* Present when the field is disabled.
	*/
	FieldControlDataAttributes["disabled"] = "data-disabled";
	/**
	* Present when the field is in valid state.
	*/
	FieldControlDataAttributes["valid"] = "data-valid";
	/**
	* Present when the field is in invalid state.
	*/
	FieldControlDataAttributes["invalid"] = "data-invalid";
	/**
	* Present when the field has been touched.
	*/
	FieldControlDataAttributes["touched"] = "data-touched";
	/**
	* Present when the field's value has changed.
	*/
	FieldControlDataAttributes["dirty"] = "data-dirty";
	/**
	* Present when the field is filled.
	*/
	FieldControlDataAttributes["filled"] = "data-filled";
	/**
	* Present when the field control is focused.
	*/
	FieldControlDataAttributes["focused"] = "data-focused";
	return FieldControlDataAttributes;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/field/utils/constants.js
var DEFAULT_VALIDITY_STATE = {
	badInput: false,
	customError: false,
	patternMismatch: false,
	rangeOverflow: false,
	rangeUnderflow: false,
	stepMismatch: false,
	tooLong: false,
	tooShort: false,
	typeMismatch: false,
	valid: null,
	valueMissing: false
};
var DEFAULT_FIELD_STATE_ATTRIBUTES = {
	valid: null,
	touched: false,
	dirty: false,
	filled: false,
	focused: false
};
var DEFAULT_FIELD_ROOT_STATE = {
	disabled: false,
	...DEFAULT_FIELD_STATE_ATTRIBUTES
};
var fieldValidityMapping = { valid(value) {
	if (value === null) return null;
	if (value) return { [FieldControlDataAttributes.valid]: "" };
	return { [FieldControlDataAttributes.invalid]: "" };
} };
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js
/**
* Combines the field's client-side, stateful validity data with the external invalid state to
* determine the field's true validity.
*/
function getCombinedFieldValidityData(validityData, invalid) {
	return {
		...validityData,
		state: {
			...validityData.state,
			valid: !invalid && validityData.state.valid
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/form/FormContext.js
var FormContext = /* @__PURE__ */ React$1.createContext({
	formRef: { current: { fields: /* @__PURE__ */ new Map() } },
	errors: {},
	clearErrors: NOOP,
	validationMode: "onSubmit",
	submitAttemptedRef: { current: false }
});
function useFormContext() {
	return React$1.useContext(FormContext);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js
var FieldRootContext = /* @__PURE__ */ React$1.createContext({
	invalid: void 0,
	name: void 0,
	validityData: {
		state: DEFAULT_VALIDITY_STATE,
		errors: [],
		error: "",
		value: "",
		initialValue: null
	},
	setValidityData: NOOP,
	disabled: void 0,
	touched: DEFAULT_FIELD_STATE_ATTRIBUTES.touched,
	setTouched: NOOP,
	dirty: DEFAULT_FIELD_STATE_ATTRIBUTES.dirty,
	setDirty: NOOP,
	filled: DEFAULT_FIELD_STATE_ATTRIBUTES.filled,
	setFilled: NOOP,
	focused: DEFAULT_FIELD_STATE_ATTRIBUTES.focused,
	setFocused: NOOP,
	validate: () => null,
	validationMode: "onSubmit",
	validationDebounceTime: 0,
	shouldValidateOnChange: () => false,
	state: DEFAULT_FIELD_ROOT_STATE,
	markedDirtyRef: { current: false },
	validation: {
		getValidationProps: (props = EMPTY_OBJECT) => props,
		getInputValidationProps: (props = EMPTY_OBJECT) => props,
		inputRef: { current: null },
		commit: async () => {}
	}
});
function useFieldRootContext(optional = true) {
	const context = React$1.useContext(FieldRootContext);
	if (context.setValidityData === NOOP && !optional) throw new Error(formatErrorMessage(28));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/field/useField.js
function useField(params) {
	const { enabled = true, value, id, name, controlRef, commit } = params;
	const { formRef } = useFormContext();
	const { invalid, markedDirtyRef, validityData, setValidityData } = useFieldRootContext();
	const getValue = useStableCallback(params.getValue);
	useIsoLayoutEffect(() => {
		if (!enabled) return;
		let initialValue = value;
		if (initialValue === void 0) initialValue = getValue();
		if (validityData.initialValue === null && initialValue !== null) setValidityData((prev) => ({
			...prev,
			initialValue
		}));
	}, [
		enabled,
		setValidityData,
		value,
		validityData.initialValue,
		getValue
	]);
	useIsoLayoutEffect(() => {
		if (!enabled || !id) return;
		formRef.current.fields.set(id, {
			getValue,
			name,
			controlRef,
			validityData: getCombinedFieldValidityData(validityData, invalid),
			validate(flushSync = true) {
				let nextValue = value;
				if (nextValue === void 0) nextValue = getValue();
				markedDirtyRef.current = true;
				if (!flushSync) commit(nextValue);
				else ReactDOM$1.flushSync(() => commit(nextValue));
			}
		});
	}, [
		commit,
		controlRef,
		enabled,
		formRef,
		getValue,
		id,
		invalid,
		markedDirtyRef,
		name,
		validityData,
		value
	]);
	useIsoLayoutEffect(() => {
		const fields = formRef.current.fields;
		return () => {
			if (id) fields.delete(id);
		};
	}, [formRef, id]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js
/**
* A context for providing [labelable elements](https://html.spec.whatwg.org/multipage/forms.html#category-label)\
* with an accessible name (label) and description.
*/
var LabelableContext = /* @__PURE__ */ React$1.createContext({
	controlId: void 0,
	registerControlId: NOOP,
	labelId: void 0,
	setLabelId: NOOP,
	messageIds: [],
	setMessageIds: NOOP,
	getDescriptionProps: (externalProps) => externalProps
});
function useLabelableContext() {
	return React$1.useContext(LabelableContext);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/labelable-provider/useLabelableId.js
function useLabelableId(params = {}) {
	const { id, implicit = false, controlRef } = params;
	const { controlId, registerControlId } = useLabelableContext();
	const defaultId = useBaseUiId(id);
	const controlIdForEffect = implicit ? controlId : void 0;
	const controlSourceRef = useRefWithInit(() => Symbol("labelable-control"));
	const hasRegisteredRef = React$1.useRef(false);
	const hadExplicitIdRef = React$1.useRef(id != null);
	const unregisterControlId = useStableCallback(() => {
		if (!hasRegisteredRef.current || registerControlId === NOOP) return;
		hasRegisteredRef.current = false;
		registerControlId(controlSourceRef.current, void 0);
	});
	useIsoLayoutEffect(() => {
		if (registerControlId === NOOP) return;
		let nextId;
		if (implicit) {
			const elem = controlRef?.current;
			if (isElement(elem) && elem.closest("label") != null) nextId = id ?? null;
			else nextId = controlIdForEffect ?? defaultId;
		} else if (id != null) {
			hadExplicitIdRef.current = true;
			nextId = id;
		} else if (hadExplicitIdRef.current) nextId = defaultId;
		else {
			unregisterControlId();
			return;
		}
		if (nextId === void 0) {
			unregisterControlId();
			return;
		}
		hasRegisteredRef.current = true;
		registerControlId(controlSourceRef.current, nextId);
	}, [
		id,
		controlRef,
		controlIdForEffect,
		registerControlId,
		implicit,
		defaultId,
		controlSourceRef,
		unregisterControlId
	]);
	React$1.useEffect(() => {
		return unregisterControlId;
	}, [unregisterControlId]);
	return controlId ?? defaultId;
}
//#endregion
export { useFormContext as a, useFieldRootContext as i, useLabelableContext as n, fieldValidityMapping as o, useField as r, useControlled as s, useLabelableId as t };
