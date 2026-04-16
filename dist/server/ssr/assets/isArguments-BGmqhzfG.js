import { A as getTag } from "./cloneDeep-nndvIxet.js";
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/predicate/isLength.mjs
function isLength(value) {
	return Number.isSafeInteger(value) && value >= 0;
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/predicate/isArrayLike.mjs
function isArrayLike(value) {
	return value != null && typeof value !== "function" && isLength(value.length);
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/predicate/isArguments.mjs
function isArguments(value) {
	return value !== null && typeof value === "object" && getTag(value) === "[object Arguments]";
}
//#endregion
export { isArrayLike as n, isArguments as t };
