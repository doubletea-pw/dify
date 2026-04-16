import { B as H7, En as Z7, Pn as _c, Si as zb, dt as NC, ln as W, ri as v4, wn as YC } from "./react-D5xHzNYo.js";
import { b as isEqualsSameValueZero } from "./utils-DqpfZ3W-.js";
import { Nt as InputVarType } from "./config-Dopncj5R.js";
import { A as getTag, C as setTag, D as uint32ArrayTag, E as uint16ArrayTag, O as uint8ArrayTag, S as regexpTag, T as symbolTag, _ as int32ArrayTag, a as arrayBufferTag, b as numberTag, c as bigUint64ArrayTag, d as dateTag, f as errorTag, g as int16ArrayTag, h as functionTag, j as getSymbols, k as uint8ClampedArrayTag, l as booleanTag, m as float64ArrayTag, o as arrayTag, p as float32ArrayTag, s as bigInt64ArrayTag, u as dataViewTag, v as int8ArrayTag, w as stringTag, x as objectTag, y as mapTag } from "./cloneDeep-nndvIxet.js";
import { t as noop } from "./noop--k6oqy4d.js";
import * as React$1 from "react";
import { jsx } from "react/jsx-runtime";
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/predicate/isPlainObject.mjs
function isPlainObject(value) {
	if (!value || typeof value !== "object") return false;
	const proto = Object.getPrototypeOf(value);
	if (!(proto === null || proto === Object.prototype || Object.getPrototypeOf(proto) === null)) return false;
	return Object.prototype.toString.call(value) === "[object Object]";
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/predicate/isEqualWith.mjs
function isEqualWith(a, b, areValuesEqual) {
	return isEqualWithImpl(a, b, void 0, void 0, void 0, void 0, areValuesEqual);
}
function isEqualWithImpl(a, b, property, aParent, bParent, stack, areValuesEqual) {
	const result = areValuesEqual(a, b, property, aParent, bParent, stack);
	if (result !== void 0) return result;
	if (typeof a === typeof b) switch (typeof a) {
		case "bigint":
		case "string":
		case "boolean":
		case "symbol":
		case "undefined": return a === b;
		case "number": return a === b || Object.is(a, b);
		case "function": return a === b;
		case "object": return areObjectsEqual(a, b, stack, areValuesEqual);
	}
	return areObjectsEqual(a, b, stack, areValuesEqual);
}
function areObjectsEqual(a, b, stack, areValuesEqual) {
	if (Object.is(a, b)) return true;
	let aTag = getTag(a);
	let bTag = getTag(b);
	if (aTag === "[object Arguments]") aTag = objectTag;
	if (bTag === "[object Arguments]") bTag = objectTag;
	if (aTag !== bTag) return false;
	switch (aTag) {
		case stringTag: return a.toString() === b.toString();
		case numberTag: return isEqualsSameValueZero(a.valueOf(), b.valueOf());
		case booleanTag:
		case dateTag:
		case symbolTag: return Object.is(a.valueOf(), b.valueOf());
		case regexpTag: return a.source === b.source && a.flags === b.flags;
		case functionTag: return a === b;
	}
	stack = stack ?? /* @__PURE__ */ new Map();
	const aStack = stack.get(a);
	const bStack = stack.get(b);
	if (aStack != null && bStack != null) return aStack === b;
	stack.set(a, b);
	stack.set(b, a);
	try {
		switch (aTag) {
			case mapTag:
				if (a.size !== b.size) return false;
				for (const [key, value] of a.entries()) if (!b.has(key) || !isEqualWithImpl(value, b.get(key), key, a, b, stack, areValuesEqual)) return false;
				return true;
			case setTag: {
				if (a.size !== b.size) return false;
				const aValues = Array.from(a.values());
				const bValues = Array.from(b.values());
				for (let i = 0; i < aValues.length; i++) {
					const aValue = aValues[i];
					const index = bValues.findIndex((bValue) => {
						return isEqualWithImpl(aValue, bValue, void 0, a, b, stack, areValuesEqual);
					});
					if (index === -1) return false;
					bValues.splice(index, 1);
				}
				return true;
			}
			case arrayTag:
			case uint8ArrayTag:
			case uint8ClampedArrayTag:
			case uint16ArrayTag:
			case uint32ArrayTag:
			case bigUint64ArrayTag:
			case int8ArrayTag:
			case int16ArrayTag:
			case int32ArrayTag:
			case bigInt64ArrayTag:
			case float32ArrayTag:
			case float64ArrayTag:
				if (typeof Buffer !== "undefined" && Buffer.isBuffer(a) !== Buffer.isBuffer(b)) return false;
				if (a.length !== b.length) return false;
				for (let i = 0; i < a.length; i++) if (!isEqualWithImpl(a[i], b[i], i, a, b, stack, areValuesEqual)) return false;
				return true;
			case arrayBufferTag:
				if (a.byteLength !== b.byteLength) return false;
				return areObjectsEqual(new Uint8Array(a), new Uint8Array(b), stack, areValuesEqual);
			case dataViewTag:
				if (a.byteLength !== b.byteLength || a.byteOffset !== b.byteOffset) return false;
				return areObjectsEqual(new Uint8Array(a), new Uint8Array(b), stack, areValuesEqual);
			case errorTag: return a.name === b.name && a.message === b.message;
			case objectTag: {
				if (!(areObjectsEqual(a.constructor, b.constructor, stack, areValuesEqual) || isPlainObject(a) && isPlainObject(b))) return false;
				const aKeys = [...Object.keys(a), ...getSymbols(a)];
				const bKeys = [...Object.keys(b), ...getSymbols(b)];
				if (aKeys.length !== bKeys.length) return false;
				for (let i = 0; i < aKeys.length; i++) {
					const propKey = aKeys[i];
					const aProp = a[propKey];
					if (!Object.hasOwn(b, propKey)) return false;
					const bProp = b[propKey];
					if (!isEqualWithImpl(aProp, bProp, propKey, a, b, stack, areValuesEqual)) return false;
				}
				return true;
			}
			default: return false;
		}
	} finally {
		stack.delete(a);
		stack.delete(b);
	}
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/predicate/isEqual.mjs
function isEqual(a, b) {
	return isEqualWith(a, b, noop);
}
//#endregion
//#region app/components/workflow/nodes/_base/components/input-var-type-icon.tsx
var getIcon = (type) => {
	return {
		[InputVarType.textInput]: zb,
		[InputVarType.paragraph]: W,
		[InputVarType.select]: Z7,
		[InputVarType.number]: _c,
		[InputVarType.checkbox]: H7,
		[InputVarType.jsonObject]: v4,
		[InputVarType.singleFile]: YC,
		[InputVarType.multiFiles]: NC
	}[type] || zb;
};
var InputVarTypeIcon = ({ className, type }) => {
	return /* @__PURE__ */ jsx(getIcon(type), { className });
};
var input_var_type_icon_default = React$1.memo(InputVarTypeIcon);
//#endregion
export { isEqual as n, input_var_type_icon_default as t };
