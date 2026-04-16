import { v as __toESM } from "../index.js";
import { Gr as s7, Qn as dU, _r as ka, an as VU, p as B7, rr as f1, un as WA, zr as r2 } from "./react-D5xHzNYo.js";
import { a as isUndef, n as isFunction$1 } from "./useUnmount-LxWHCkGT.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { a as __read } from "./tslib.es6-BSnKF3gl.js";
import { n as useBoolean, t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { i as isBrowser } from "./useEffectWithTarget-B62zcRzE.js";
import { o as useEventListener } from "./app-icon-DPKtAo3e.js";
import { i as useEventEmitterContextContext } from "./utils-pMdyvQan.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { A as Type } from "./utils-DqpfZ3W-.js";
import { u as ModelTypeEnum } from "./declarations-DYMEe7hD.js";
import { L as PROVIDER_WITH_PRESET_TONE, Lt as SupportUploadFileTypes, Ot as BlockEnum, U as TONE_LIST, z as STOP_PARAMETER_RULE, zt as VarType } from "./config-Dopncj5R.js";
import { $n as useWorkflowStore, Nt as file_type_icon_default, Qn as useStore, nn as Slider, nr as useHooksStore, t as useWorkflowVariableType } from "./hooks-Bj_4KA1b.js";
import { h as ssePost, l as post, r as get } from "./base-BuKAg6Le.js";
import { a as SelectContent, c as SelectValue, i as Select, l as flow, n as preprocessLaTeX, o as SelectItem, r as preprocessThinkTag, s as SelectTrigger } from "./markdown-utils-D9ZHqkyo.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { t as IconBase } from "./IconBase-CEF_UoQI.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as confirm_default } from "./confirm-CKQP3hdx.js";
import { t as ActionButton } from "./action-button-BK9WUMzU.js";
import { t as switch_default } from "./switch-CFJdYxEh.js";
import { t as Loading } from "./loading-BryKikzY.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import { l as Theme, r as AppModeEnum } from "./app-DPjSIfgb.js";
import { t as basePath } from "./var-DPpHtpXT.js";
import { C as ModelIcon, D as TooltipContent, E as Tooltip, g as isNullOrUndefined, k as TooltipTrigger } from "./credential-item-C22_bUSw.js";
import { m as useGenerateRuleTemplate } from "./use-apps-t6Q_ZP4w.js";
import { t as useDebounceFn } from "./useDebounceFn-Y4NS6c4S.js";
import { t as require_copy_to_clipboard } from "./copy-to-clipboard-CEvVSVWT.js";
import { t as Textarea } from "./textarea-Ngtow1st.js";
import { n as useProviderContext } from "./provider-context-CToT0pwd.js";
import { c as Icon$7 } from "./other-sSUV3aYW.js";
import { t as dynamic } from "./dynamic-6-R69YAE.js";
import { Bt as Icon$9, Nt as Icon$8, n as PROMPT_EDITOR_INSERT_QUICKLY, p as GeneratorType, t as PromptEditor } from "./prompt-editor-PJuCbabP.js";
import { c as useModelListAndDefaultModelAndCurrentProviderAndModel, f as useTextGenerationCurrentProviderAndModelAndModelList, i as useLanguage } from "./hooks-BTelimHS.js";
import { _ as useModelParameterRules } from "./use-common-BJ1aZaXJ.js";
import { i as PopoverTrigger, n as PopoverClose, r as PopoverContent, t as Popover } from "./popover-CTEbJchz.js";
import { d as DERIVED_MODEL_STATUS_BADGE_I18N, f as DERIVED_MODEL_STATUS_TOOLTIP_I18N, l as useCredentialPanelState, p as deriveModelStatus, t as ModelSelector } from "./model-selector-ahzffqOG.js";
import { t as useTheme } from "./use-theme-3YxPQV4B.js";
import { t as ModelName } from "./model-name-DBTGJc7a.js";
import { t as Radio } from "./radio-4K5OYxdz.js";
import { o as getFilesInLogs, r as getFileAppearanceType } from "./utils-Dh7W533Q.js";
import { t as CodeLanguage } from "./types-C18Ag7fa.js";
import { n as file_item_default, o as FileImageRender, t as TagInput } from "./tag-input-9kTFEfAj.js";
import { I as Icon$11, L as Icon$10, i as DropdownMenuItem, n as DropdownMenuContent, t as DropdownMenu, u as DropdownMenuTrigger } from "./dropdown-menu-DdKnIBZG.js";
import { a as Icon$12 } from "./arrows-fbeBWnky.js";
import { s as useAvailableVarList } from "./var-reference-picker-PlAsXjUc.js";
import * as React$1 from "react";
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/@monaco-editor+loader@1.7.0/node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js
function _arrayLikeToArray(r, a) {
	(null == a || a > r.length) && (a = r.length);
	for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	return n;
}
function _arrayWithHoles(r) {
	if (Array.isArray(r)) return r;
}
function _defineProperty$1(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: true,
		configurable: true,
		writable: true
	}) : e[r] = t, e;
}
function _iterableToArrayLimit(r, l) {
	var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	if (null != t) {
		var e, n, i, u, a = [], f = true, o = false;
		try {
			if (i = (t = t.call(r)).next, 0 === l);
			else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
		} catch (r) {
			o = true, n = r;
		} finally {
			try {
				if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
			} finally {
				if (o) throw n;
			}
		}
		return a;
	}
}
function _nonIterableRest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys$1(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2$1(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$1(Object(t), true).forEach(function(r) {
			_defineProperty$1(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function _slicedToArray(r, e) {
	return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r);
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, a);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	}
}
//#endregion
//#region node_modules/.pnpm/state-local@1.0.7/node_modules/state-local/lib/es/state-local.js
function _defineProperty(obj, key, value) {
	if (key in obj) Object.defineProperty(obj, key, {
		value,
		enumerable: true,
		configurable: true,
		writable: true
	});
	else obj[key] = value;
	return obj;
}
function ownKeys(object, enumerableOnly) {
	var keys = Object.keys(object);
	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(object);
		if (enumerableOnly) symbols = symbols.filter(function(sym) {
			return Object.getOwnPropertyDescriptor(object, sym).enumerable;
		});
		keys.push.apply(keys, symbols);
	}
	return keys;
}
function _objectSpread2(target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i] != null ? arguments[i] : {};
		if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
			_defineProperty(target, key, source[key]);
		});
		else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
		else ownKeys(Object(source)).forEach(function(key) {
			Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
		});
	}
	return target;
}
function compose$1() {
	for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) fns[_key] = arguments[_key];
	return function(x) {
		return fns.reduceRight(function(y, f) {
			return f(y);
		}, x);
	};
}
function curry$1(fn) {
	return function curried() {
		var _this = this;
		for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
		return args.length >= fn.length ? fn.apply(this, args) : function() {
			for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) nextArgs[_key3] = arguments[_key3];
			return curried.apply(_this, [].concat(args, nextArgs));
		};
	};
}
function isObject$1(value) {
	return {}.toString.call(value).includes("Object");
}
function isEmpty(obj) {
	return !Object.keys(obj).length;
}
function isFunction(value) {
	return typeof value === "function";
}
function hasOwnProperty(object, property) {
	return Object.prototype.hasOwnProperty.call(object, property);
}
function validateChanges(initial, changes) {
	if (!isObject$1(changes)) errorHandler$1("changeType");
	if (Object.keys(changes).some(function(field) {
		return !hasOwnProperty(initial, field);
	})) errorHandler$1("changeField");
	return changes;
}
function validateSelector(selector) {
	if (!isFunction(selector)) errorHandler$1("selectorType");
}
function validateHandler(handler) {
	if (!(isFunction(handler) || isObject$1(handler))) errorHandler$1("handlerType");
	if (isObject$1(handler) && Object.values(handler).some(function(_handler) {
		return !isFunction(_handler);
	})) errorHandler$1("handlersType");
}
function validateInitial(initial) {
	if (!initial) errorHandler$1("initialIsRequired");
	if (!isObject$1(initial)) errorHandler$1("initialType");
	if (isEmpty(initial)) errorHandler$1("initialContent");
}
function throwError$1(errorMessages, type) {
	throw new Error(errorMessages[type] || errorMessages["default"]);
}
var errorHandler$1 = curry$1(throwError$1)({
	initialIsRequired: "initial state is required",
	initialType: "initial state should be an object",
	initialContent: "initial state shouldn't be an empty object",
	handlerType: "handler should be an object or a function",
	handlersType: "all handlers should be a functions",
	selectorType: "selector should be a function",
	changeType: "provided value of changes should be an object",
	changeField: "it seams you want to change a field in the state which is not specified in the \"initial\" state",
	"default": "an unknown error accured in `state-local` package"
});
var validators$1 = {
	changes: validateChanges,
	selector: validateSelector,
	handler: validateHandler,
	initial: validateInitial
};
function create(initial) {
	var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	validators$1.initial(initial);
	validators$1.handler(handler);
	var state = { current: initial };
	var didUpdate = curry$1(didStateUpdate)(state, handler);
	var update = curry$1(updateState)(state);
	var validate = curry$1(validators$1.changes)(initial);
	var getChanges = curry$1(extractChanges)(state);
	function getState() {
		var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(state) {
			return state;
		};
		validators$1.selector(selector);
		return selector(state.current);
	}
	function setState(causedChanges) {
		compose$1(didUpdate, update, validate, getChanges)(causedChanges);
	}
	return [getState, setState];
}
function extractChanges(state, causedChanges) {
	return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}
function updateState(state, changes) {
	state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
	return changes;
}
function didStateUpdate(state, handler, changes) {
	isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function(field) {
		var _handler$field;
		return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
	});
	return changes;
}
var index = { create };
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.7.0/node_modules/@monaco-editor/loader/lib/es/config/index.js
var config$1 = { paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs" } };
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.7.0/node_modules/@monaco-editor/loader/lib/es/utils/curry.js
function curry(fn) {
	return function curried() {
		var _this = this;
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		return args.length >= fn.length ? fn.apply(this, args) : function() {
			for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) nextArgs[_key2] = arguments[_key2];
			return curried.apply(_this, [].concat(args, nextArgs));
		};
	};
}
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.7.0/node_modules/@monaco-editor/loader/lib/es/utils/isObject.js
function isObject(value) {
	return {}.toString.call(value).includes("Object");
}
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.7.0/node_modules/@monaco-editor/loader/lib/es/validators/index.js
/**
* validates the configuration object and informs about deprecation
* @param {Object} config - the configuration object 
* @return {Object} config - the validated configuration object
*/
function validateConfig(config) {
	if (!config) errorHandler("configIsRequired");
	if (!isObject(config)) errorHandler("configType");
	if (config.urls) {
		informAboutDeprecation();
		return { paths: { vs: config.urls.monacoBase } };
	}
	return config;
}
/**
* logs deprecation message
*/
function informAboutDeprecation() {
	console.warn(errorMessages.deprecation);
}
function throwError(errorMessages, type) {
	throw new Error(errorMessages[type] || errorMessages["default"]);
}
var errorMessages = {
	configIsRequired: "the configuration object is required",
	configType: "the configuration object should be an object",
	"default": "an unknown error accured in `@monaco-editor/loader` package",
	deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler = curry(throwError)(errorMessages);
var validators = { config: validateConfig };
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.7.0/node_modules/@monaco-editor/loader/lib/es/utils/compose.js
var compose = function compose() {
	for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) fns[_key] = arguments[_key];
	return function(x) {
		return fns.reduceRight(function(y, f) {
			return f(y);
		}, x);
	};
};
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.7.0/node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js
function merge(target, source) {
	Object.keys(source).forEach(function(key) {
		if (source[key] instanceof Object) {
			if (target[key]) Object.assign(source[key], merge(target[key], source[key]));
		}
	});
	return _objectSpread2$1(_objectSpread2$1({}, target), source);
}
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.7.0/node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js
var CANCELATION_MESSAGE = {
	type: "cancelation",
	msg: "operation is manually canceled"
};
function makeCancelable(promise) {
	var hasCanceled_ = false;
	var wrappedPromise = new Promise(function(resolve, reject) {
		promise.then(function(val) {
			return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
		});
		promise["catch"](reject);
	});
	return wrappedPromise.cancel = function() {
		return hasCanceled_ = true;
	}, wrappedPromise;
}
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.7.0/node_modules/@monaco-editor/loader/lib/es/loader/index.js
var _excluded = ["monaco"];
/** the local state of the module */
var _state$create2 = _slicedToArray(index.create({
	config: config$1,
	isInitialized: false,
	resolve: null,
	reject: null,
	monaco: null
}), 2), getState = _state$create2[0], setState = _state$create2[1];
/**
* set the loader configuration
* @param {Object} config - the configuration object
*/
function config(globalConfig) {
	var _validators$config = validators.config(globalConfig), monaco = _validators$config.monaco, config = _objectWithoutProperties(_validators$config, _excluded);
	setState(function(state) {
		return {
			config: merge(state.config, config),
			monaco
		};
	});
}
/**
* handles the initialization of the monaco-editor
* @return {Promise} - returns an instance of monaco (with a cancelable promise)
*/
function init() {
	var state = getState(function(_ref) {
		return {
			monaco: _ref.monaco,
			isInitialized: _ref.isInitialized,
			resolve: _ref.resolve
		};
	});
	if (!state.isInitialized) {
		setState({ isInitialized: true });
		if (state.monaco) {
			state.resolve(state.monaco);
			return makeCancelable(wrapperPromise);
		}
		if (window.monaco && window.monaco.editor) {
			storeMonacoInstance(window.monaco);
			state.resolve(window.monaco);
			return makeCancelable(wrapperPromise);
		}
		compose(injectScripts, getMonacoLoaderScript)(configureLoader);
	}
	return makeCancelable(wrapperPromise);
}
/**
* injects provided scripts into the document.body
* @param {Object} script - an HTML script element
* @return {Object} - the injected HTML script element
*/
function injectScripts(script) {
	return document.body.appendChild(script);
}
/**
* creates an HTML script element with/without provided src
* @param {string} [src] - the source path of the script
* @return {Object} - the created HTML script element
*/
function createScript(src) {
	var script = document.createElement("script");
	return src && (script.src = src), script;
}
/**
* creates an HTML script element with the monaco loader src
* @return {Object} - the created HTML script element
*/
function getMonacoLoaderScript(configureLoader) {
	var state = getState(function(_ref2) {
		return {
			config: _ref2.config,
			reject: _ref2.reject
		};
	});
	var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));
	loaderScript.onload = function() {
		return configureLoader();
	};
	loaderScript.onerror = state.reject;
	return loaderScript;
}
/**
* configures the monaco loader
*/
function configureLoader() {
	var state = getState(function(_ref3) {
		return {
			config: _ref3.config,
			resolve: _ref3.resolve,
			reject: _ref3.reject
		};
	});
	var require = window.require;
	require.config(state.config);
	require(["vs/editor/editor.main"], function(loaded) {
		var monaco = loaded.m || loaded;
		storeMonacoInstance(monaco);
		state.resolve(monaco);
	}, function(error) {
		state.reject(error);
	});
}
/**
* store monaco instance in local state
*/
function storeMonacoInstance(monaco) {
	if (!getState().monaco) setState({ monaco });
}
/**
* internal helper function
* extracts stored monaco instance
* @return {Object|null} - the monaco instance
*/
function __getMonacoInstance() {
	return getState(function(_ref4) {
		return _ref4.monaco;
	});
}
var wrapperPromise = new Promise(function(resolve, reject) {
	return setState({
		resolve,
		reject
	});
});
var loader = {
	config,
	init,
	__getMonacoInstance
};
//#endregion
//#region node_modules/.pnpm/@monaco-editor+react@4.7.0_monaco-editor@0.55.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@monaco-editor/react/dist/index.mjs
var v = {
	wrapper: {
		display: "flex",
		position: "relative",
		textAlign: "initial"
	},
	fullWidth: { width: "100%" },
	hide: { display: "none" }
};
var Y = { container: {
	display: "flex",
	height: "100%",
	width: "100%",
	justifyContent: "center",
	alignItems: "center"
} };
function Me({ children: e }) {
	return React.createElement("div", { style: Y.container }, e);
}
var $ = Me;
function Ee({ width: e, height: r, isEditorReady: n, loading: t, _ref: a, className: m, wrapperProps: E }) {
	return React.createElement("section", {
		style: {
			...v.wrapper,
			width: e,
			height: r
		},
		...E
	}, !n && React.createElement($, null, t), React.createElement("div", {
		ref: a,
		style: {
			...v.fullWidth,
			...!n && v.hide
		},
		className: m
	}));
}
var H = memo(Ee);
function Ce(e) {
	useEffect(e, []);
}
var k = Ce;
function he(e, r, n = !0) {
	let t = useRef(!0);
	useEffect(t.current || !n ? () => {
		t.current = !1;
	} : e, r);
}
var l = he;
function D() {}
function h(e, r, n, t) {
	return De(e, t) || be(e, r, n, t);
}
function De(e, r) {
	return e.editor.getModel(te(e, r));
}
function be(e, r, n, t) {
	return e.editor.createModel(r, n, t ? te(e, t) : void 0);
}
function te(e, r) {
	return e.Uri.parse(r);
}
function Oe({ original: e, modified: r, language: n, originalLanguage: t, modifiedLanguage: a, originalModelPath: m, modifiedModelPath: E, keepCurrentOriginalModel: g = !1, keepCurrentModifiedModel: N = !1, theme: x = "light", loading: P = "Loading...", options: y = {}, height: V = "100%", width: z = "100%", className: F, wrapperProps: j = {}, beforeMount: A = D, onMount: q = D }) {
	let [M, O] = useState(!1), [T, s] = useState(!0), u = useRef(null), c = useRef(null), w = useRef(null), d = useRef(q), o = useRef(A), b = useRef(!1);
	k(() => {
		let i = loader.init();
		return i.then((f) => (c.current = f) && s(!1)).catch((f) => f?.type !== "cancelation" && console.error("Monaco initialization: error:", f)), () => u.current ? I() : i.cancel();
	}), l(() => {
		if (u.current && c.current) {
			let i = u.current.getOriginalEditor(), f = h(c.current, e || "", t || n || "text", m || "");
			f !== i.getModel() && i.setModel(f);
		}
	}, [m], M), l(() => {
		if (u.current && c.current) {
			let i = u.current.getModifiedEditor(), f = h(c.current, r || "", a || n || "text", E || "");
			f !== i.getModel() && i.setModel(f);
		}
	}, [E], M), l(() => {
		let i = u.current.getModifiedEditor();
		i.getOption(c.current.editor.EditorOption.readOnly) ? i.setValue(r || "") : r !== i.getValue() && (i.executeEdits("", [{
			range: i.getModel().getFullModelRange(),
			text: r || "",
			forceMoveMarkers: !0
		}]), i.pushUndoStop());
	}, [r], M), l(() => {
		u.current?.getModel()?.original.setValue(e || "");
	}, [e], M), l(() => {
		let { original: i, modified: f } = u.current.getModel();
		c.current.editor.setModelLanguage(i, t || n || "text"), c.current.editor.setModelLanguage(f, a || n || "text");
	}, [
		n,
		t,
		a
	], M), l(() => {
		c.current?.editor.setTheme(x);
	}, [x], M), l(() => {
		u.current?.updateOptions(y);
	}, [y], M);
	let L = useCallback(() => {
		if (!c.current) return;
		o.current(c.current);
		let i = h(c.current, e || "", t || n || "text", m || ""), f = h(c.current, r || "", a || n || "text", E || "");
		u.current?.setModel({
			original: i,
			modified: f
		});
	}, [
		n,
		r,
		a,
		e,
		t,
		m,
		E
	]), U = useCallback(() => {
		!b.current && w.current && (u.current = c.current.editor.createDiffEditor(w.current, {
			automaticLayout: !0,
			...y
		}), L(), c.current?.editor.setTheme(x), O(!0), b.current = !0);
	}, [
		y,
		x,
		L
	]);
	useEffect(() => {
		M && d.current(u.current, c.current);
	}, [M]), useEffect(() => {
		!T && !M && U();
	}, [
		T,
		M,
		U
	]);
	function I() {
		let i = u.current?.getModel();
		g || i?.original?.dispose(), N || i?.modified?.dispose(), u.current?.dispose();
	}
	return React.createElement(H, {
		width: z,
		height: V,
		isEditorReady: M,
		loading: P,
		_ref: w,
		className: F,
		wrapperProps: j
	});
}
memo(Oe);
function He(e) {
	let r = useRef();
	return useEffect(() => {
		r.current = e;
	}, [e]), r.current;
}
var se = He;
var _ = /* @__PURE__ */ new Map();
function Ve({ defaultValue: e, defaultLanguage: r, defaultPath: n, value: t, language: a, path: m, theme: E = "light", line: g, loading: N = "Loading...", options: x = {}, overrideServices: P = {}, saveViewState: y = !0, keepCurrentModel: V = !1, width: z = "100%", height: F = "100%", className: j, wrapperProps: A = {}, beforeMount: q = D, onMount: M = D, onChange: O, onValidate: T = D }) {
	let [s, u] = useState(!1), [c, w] = useState(!0), d = useRef(null), o = useRef(null), b = useRef(null), L = useRef(M), U = useRef(q), I = useRef(), i = useRef(t), f = se(m), Q = useRef(!1), B = useRef(!1);
	k(() => {
		let p = loader.init();
		return p.then((R) => (d.current = R) && w(!1)).catch((R) => R?.type !== "cancelation" && console.error("Monaco initialization: error:", R)), () => o.current ? pe() : p.cancel();
	}), l(() => {
		let p = h(d.current, e || t || "", r || a || "", m || n || "");
		p !== o.current?.getModel() && (y && _.set(f, o.current?.saveViewState()), o.current?.setModel(p), y && o.current?.restoreViewState(_.get(m)));
	}, [m], s), l(() => {
		o.current?.updateOptions(x);
	}, [x], s), l(() => {
		!o.current || t === void 0 || (o.current.getOption(d.current.editor.EditorOption.readOnly) ? o.current.setValue(t) : t !== o.current.getValue() && (B.current = !0, o.current.executeEdits("", [{
			range: o.current.getModel().getFullModelRange(),
			text: t,
			forceMoveMarkers: !0
		}]), o.current.pushUndoStop(), B.current = !1));
	}, [t], s), l(() => {
		let p = o.current?.getModel();
		p && a && d.current?.editor.setModelLanguage(p, a);
	}, [a], s), l(() => {
		g !== void 0 && o.current?.revealLine(g);
	}, [g], s), l(() => {
		d.current?.editor.setTheme(E);
	}, [E], s);
	let X = useCallback(() => {
		if (!(!b.current || !d.current) && !Q.current) {
			U.current(d.current);
			let p = m || n, R = h(d.current, t || e || "", r || a || "", p || "");
			o.current = d.current?.editor.create(b.current, {
				model: R,
				automaticLayout: !0,
				...x
			}, P), y && o.current.restoreViewState(_.get(p)), d.current.editor.setTheme(E), g !== void 0 && o.current.revealLine(g), u(!0), Q.current = !0;
		}
	}, [
		e,
		r,
		n,
		t,
		a,
		m,
		x,
		P,
		y,
		E,
		g
	]);
	useEffect(() => {
		s && L.current(o.current, d.current);
	}, [s]), useEffect(() => {
		!c && !s && X();
	}, [
		c,
		s,
		X
	]), i.current = t, useEffect(() => {
		s && O && (I.current?.dispose(), I.current = o.current?.onDidChangeModelContent((p) => {
			B.current || O(o.current.getValue(), p);
		}));
	}, [s, O]), useEffect(() => {
		if (s) {
			let p = d.current.editor.onDidChangeMarkers((R) => {
				let G = o.current.getModel()?.uri;
				if (G && R.find((J) => J.path === G.path)) {
					let J = d.current.editor.getModelMarkers({ resource: G });
					T?.(J);
				}
			});
			return () => {
				p?.dispose();
			};
		}
		return () => {};
	}, [s, T]);
	function pe() {
		I.current?.dispose(), V ? y && _.set(m, o.current.saveViewState()) : o.current.getModel()?.dispose(), o.current.dispose();
	}
	return React.createElement(H, {
		width: z,
		height: F,
		isEditorReady: s,
		loading: N,
		_ref: b,
		className: j,
		wrapperProps: A
	});
}
var de = memo(Ve);
var Ft = de;
//#endregion
//#region app/components/app/configuration/config-prompt/prompt-editor-height-resize-wrap.tsx
var PromptEditorHeightResizeWrap = ({ className, height, minHeight, onHeightChange, children, footer, hideResize }) => {
	const [clientY, setClientY] = useState(0);
	const [isResizing, setIsResizing] = useState(false);
	const [prevUserSelectStyle, setPrevUserSelectStyle] = useState(() => getComputedStyle(document.body).userSelect);
	const [oldHeight, setOldHeight] = useState(height);
	const handleStartResize = useCallback((e) => {
		setClientY(e.clientY);
		setIsResizing(true);
		setOldHeight(height);
		setPrevUserSelectStyle(getComputedStyle(document.body).userSelect);
		document.body.style.userSelect = "none";
	}, [height]);
	const handleStopResize = useCallback(() => {
		setIsResizing(false);
		document.body.style.userSelect = prevUserSelectStyle;
	}, [prevUserSelectStyle]);
	const { run: didHandleResize } = useDebounceFn((e) => {
		if (!isResizing) return;
		let newHeight = oldHeight + (e.clientY - clientY);
		if (newHeight < minHeight) newHeight = minHeight;
		onHeightChange(newHeight);
	}, { wait: 0 });
	const handleResize = useCallback(didHandleResize, [
		isResizing,
		height,
		minHeight,
		clientY
	]);
	useEffect(() => {
		document.addEventListener("mousemove", handleResize);
		return () => {
			document.removeEventListener("mousemove", handleResize);
		};
	}, [handleResize]);
	useEffect(() => {
		document.addEventListener("mouseup", handleStopResize);
		return () => {
			document.removeEventListener("mouseup", handleStopResize);
		};
	}, [handleStopResize]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: cn(className, "overflow-y-auto"),
				style: { height },
				children
			}),
			footer,
			!hideResize && /* @__PURE__ */ jsx("div", {
				className: "absolute bottom-0 left-0 flex h-2 w-full cursor-row-resize justify-center",
				onMouseDown: handleStartResize,
				children: /* @__PURE__ */ jsx("div", { className: "h-[3px] w-5 rounded-sm bg-gray-300" })
			})
		]
	});
};
var prompt_editor_height_resize_wrap_default = React$1.memo(PromptEditorHeightResizeWrap);
//#endregion
//#region app/components/base/file-uploader/file-list-in-log.tsx
var FileListInLog = ({ fileList, isExpanded = false, noBorder = false, noPadding = false }) => {
	const { t } = useTranslation();
	const [expanded, setExpanded] = useState(isExpanded);
	const fullList = useMemo(() => {
		return fileList.reduce((acc, { list }) => {
			return [...acc, ...list];
		}, []);
	}, [fileList]);
	if (!fileList.length) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("px-3 py-2", expanded && "py-3", !noBorder && "border-t border-divider-subtle", noPadding && "!p-0"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex justify-between gap-1",
			children: [
				expanded && /* @__PURE__ */ jsx("div", {
					className: "system-xs-semibold-uppercase grow cursor-pointer py-1 text-text-secondary",
					onClick: () => setExpanded(!expanded),
					children: t("runDetail.fileListLabel", { ns: "appLog" })
				}),
				!expanded && /* @__PURE__ */ jsx("div", {
					className: "flex gap-1",
					children: fullList.map((file) => {
						const { id, name, type, supportFileType, base64Url, url } = file;
						const isImageFile = supportFileType === SupportUploadFileTypes.image;
						return /* @__PURE__ */ jsxs(Fragment$1, { children: [isImageFile && /* @__PURE__ */ jsx(tooltip_default, {
							popupContent: name,
							children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(FileImageRender, {
								className: "h-8 w-8",
								imageUrl: base64Url || url || ""
							}) }, id)
						}), !isImageFile && /* @__PURE__ */ jsx(tooltip_default, {
							popupContent: name,
							children: /* @__PURE__ */ jsx("div", {
								className: "rounded-md border-[0.5px] border-components-panel-border bg-components-panel-on-panel-item-bg p-1.5 shadow-xs",
								children: /* @__PURE__ */ jsx(file_type_icon_default, {
									type: getFileAppearanceType(name, type),
									size: "lg"
								})
							}, id)
						})] });
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex cursor-pointer items-center gap-1",
					onClick: () => setExpanded(!expanded),
					children: [!expanded && /* @__PURE__ */ jsx("div", {
						className: "system-xs-medium-uppercase text-text-tertiary",
						children: t("runDetail.fileListDetail", { ns: "appLog" })
					}), /* @__PURE__ */ jsx(r2, { className: cn("h-4 w-4 text-text-tertiary", expanded && "rotate-90") })]
				})
			]
		}), expanded && /* @__PURE__ */ jsx("div", {
			className: "flex flex-col gap-3",
			children: fileList.map((item) => /* @__PURE__ */ jsxs("div", {
				className: "system-xs-regular flex flex-col gap-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "py-1 text-text-tertiary ",
					children: item.varName
				}), item.list.map((file) => /* @__PURE__ */ jsx(file_item_default, {
					file,
					showDeleteAction: false,
					showDownloadAction: true,
					canPreview: true
				}, file.id))]
			}, item.varName))
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/_base/hooks/use-toggle-expend.ts
var useToggleExpend = ({ ref, hasFooter = true, isInNode }) => {
	const [isExpand, setIsExpand] = useState(false);
	const [wrapHeight, setWrapHeight] = useState(ref?.current?.clientHeight);
	const editorExpandHeight = isExpand ? wrapHeight - (hasFooter ? 56 : 29) : 0;
	useEffect(() => {
		if (!ref?.current) return;
		setWrapHeight(ref.current?.clientHeight);
	}, [isExpand]);
	return {
		wrapClassName: (() => {
			if (!isExpand) return "";
			if (isInNode) return "fixed z-10  right-[9px] top-[166px] bottom-[8px]  p-4 bg-components-panel-bg rounded-xl";
			return "absolute z-10 left-4 right-6 top-[52px] bottom-0 pb-4 bg-components-panel-bg";
		})(),
		wrapStyle: isExpand ? { boxShadow: "0px 0px 12px -4px rgba(16, 24, 40, 0.05), 0px -3px 6px -2px rgba(16, 24, 40, 0.03)" } : {},
		editorExpandHeight,
		isExpand,
		setIsExpand
	};
};
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/useMemoizedFn/index.js
var useMemoizedFn = function(fn) {
	var fnRef = useRef(fn);
	fnRef.current = useMemo(function() {
		return fn;
	}, [fn]);
	var memoizedFn = useRef(void 0);
	if (!memoizedFn.current) memoizedFn.current = function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		return fnRef.current.apply(this, args);
	};
	return memoizedFn.current;
};
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/createUpdateEffect/index.js
var createUpdateEffect = function(hook) {
	return function(effect, deps) {
		var isMounted = useRef(false);
		hook(function() {
			return function() {
				isMounted.current = false;
			};
		}, []);
		hook(function() {
			if (!isMounted.current) isMounted.current = true;
			else return effect();
		}, deps);
	};
};
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/useUpdateEffect/index.js
var useUpdateEffect_default = createUpdateEffect(useEffect);
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/createUseStorageState/index.js
var SYNC_STORAGE_EVENT_NAME = "AHOOKS_SYNC_STORAGE_EVENT_NAME";
function createUseStorageState(getStorage) {
	function useStorageState(key, options) {
		if (options === void 0) options = {};
		var storage;
		var _a = options.listenStorageChange, listenStorageChange = _a === void 0 ? false : _a, _b = options.onError, onError = _b === void 0 ? function(e) {
			console.error(e);
		} : _b;
		try {
			storage = getStorage();
		} catch (err) {
			onError(err);
		}
		var serializer = function(value) {
			if (options.serializer) return options.serializer(value);
			return JSON.stringify(value);
		};
		var deserializer = function(value) {
			if (options.deserializer) return options.deserializer(value);
			return JSON.parse(value);
		};
		function getStoredValue() {
			try {
				var raw = storage === null || storage === void 0 ? void 0 : storage.getItem(key);
				if (raw) return deserializer(raw);
			} catch (e) {
				onError(e);
			}
			if (isFunction$1(options.defaultValue)) return options.defaultValue();
			return options.defaultValue;
		}
		var _c = __read(useState(getStoredValue), 2), state = _c[0], setState = _c[1];
		useUpdateEffect_default(function() {
			setState(getStoredValue());
		}, [key]);
		var updateState = function(value) {
			var currentState = isFunction$1(value) ? value(state) : value;
			if (!listenStorageChange) setState(currentState);
			try {
				var newValue = void 0;
				var oldValue = storage === null || storage === void 0 ? void 0 : storage.getItem(key);
				if (isUndef(currentState)) {
					newValue = null;
					storage === null || storage === void 0 || storage.removeItem(key);
				} else {
					newValue = serializer(currentState);
					storage === null || storage === void 0 || storage.setItem(key, newValue);
				}
				dispatchEvent(new CustomEvent(SYNC_STORAGE_EVENT_NAME, { detail: {
					key,
					newValue,
					oldValue,
					storageArea: storage
				} }));
			} catch (e) {
				onError(e);
			}
		};
		var syncState = function(event) {
			if (event.key !== key || event.storageArea !== storage) return;
			setState(getStoredValue());
		};
		var syncStateFromCustomEvent = function(event) {
			syncState(event.detail);
		};
		useEventListener("storage", syncState, { enable: listenStorageChange });
		useEventListener(SYNC_STORAGE_EVENT_NAME, syncStateFromCustomEvent, { enable: listenStorageChange });
		return [state, useMemoizedFn(updateState)];
	}
	return useStorageState;
}
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/useSessionStorageState/index.js
var useSessionStorageState = createUseStorageState(function() {
	return isBrowser ? sessionStorage : void 0;
});
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-parameter-modal/parameter-item.tsx
function ParameterItem({ parameterRule, value, onChange, onSwitch, isInWorkflow, nodesOutputVars, availableNodes = [] }) {
	const { t } = useTranslation();
	const language = useLanguage();
	const [localValue, setLocalValue] = useState(value);
	const numberInputRef = useRef(null);
	const workflowNodesMap = useMemo(() => {
		if (!isInWorkflow || !availableNodes.length) return void 0;
		return availableNodes.reduce((acc, node) => {
			acc[node.id] = {
				title: node.data.title,
				type: node.data.type
			};
			if (node.data.type === BlockEnum.Start) acc.sys = {
				title: t("blocks.start", { ns: "workflow" }),
				type: BlockEnum.Start
			};
			return acc;
		}, {});
	}, [
		availableNodes,
		isInWorkflow,
		t
	]);
	const getDefaultValue = () => {
		let defaultValue;
		if (parameterRule.type === "int" || parameterRule.type === "float") defaultValue = isNullOrUndefined(parameterRule.default) ? parameterRule.min || 0 : parameterRule.default;
		else if (parameterRule.type === "string" || parameterRule.type === "text") defaultValue = parameterRule.default || "";
		else if (parameterRule.type === "boolean") defaultValue = !isNullOrUndefined(parameterRule.default) ? parameterRule.default : false;
		else if (parameterRule.type === "tag") defaultValue = !isNullOrUndefined(parameterRule.default) ? parameterRule.default : [];
		return defaultValue;
	};
	const renderValue = value ?? localValue ?? getDefaultValue();
	const sliderLabel = parameterRule.label[language] || parameterRule.label.en_US;
	const handleInputChange = (newValue) => {
		setLocalValue(newValue);
		if (onChange && (parameterRule.name === "stop" || !isNullOrUndefined(value) || parameterRule.required)) onChange(newValue);
	};
	const handleNumberInputChange = (e) => {
		let num = +e.target.value;
		if (!isNullOrUndefined(parameterRule.max) && num > parameterRule.max) {
			num = parameterRule.max;
			numberInputRef.current.value = `${num}`;
		}
		if (!isNullOrUndefined(parameterRule.min) && num < parameterRule.min) num = parameterRule.min;
		handleInputChange(num);
	};
	const handleNumberInputBlur = () => {
		if (numberInputRef.current) numberInputRef.current.value = renderValue;
	};
	const handleSlideChange = (num) => {
		if (!isNullOrUndefined(parameterRule.max) && num > parameterRule.max) {
			handleInputChange(parameterRule.max);
			numberInputRef.current.value = `${parameterRule.max}`;
			return;
		}
		if (!isNullOrUndefined(parameterRule.min) && num < parameterRule.min) {
			handleInputChange(parameterRule.min);
			numberInputRef.current.value = `${parameterRule.min}`;
			return;
		}
		handleInputChange(num);
		numberInputRef.current.value = `${num}`;
	};
	const handleRadioChange = (v) => {
		handleInputChange(v);
	};
	const handleStringInputChange = (e) => {
		handleInputChange(e.target.value);
	};
	const handleTagChange = (newSequences) => {
		handleInputChange(newSequences);
	};
	const handleSwitch = (checked) => {
		if (onSwitch) onSwitch(checked, localValue ?? getDefaultValue());
	};
	useEffect(() => {
		if ((parameterRule.type === "int" || parameterRule.type === "float") && numberInputRef.current) numberInputRef.current.value = `${renderValue}`;
	}, [
		value,
		parameterRule.type,
		renderValue
	]);
	const renderInput = () => {
		const numberInputWithSlide = (parameterRule.type === "int" || parameterRule.type === "float") && !isNullOrUndefined(parameterRule.min) && !isNullOrUndefined(parameterRule.max);
		if (parameterRule.type === "int") {
			let step = 100;
			if (parameterRule.max) {
				if (parameterRule.max < 100) step = 1;
				else if (parameterRule.max < 1e3) step = 10;
			}
			return /* @__PURE__ */ jsxs(Fragment$1, { children: [numberInputWithSlide && /* @__PURE__ */ jsx(Slider, {
				className: "w-[120px]",
				value: renderValue,
				min: parameterRule.min,
				max: parameterRule.max,
				step,
				onValueChange: handleSlideChange,
				"aria-label": sliderLabel
			}), /* @__PURE__ */ jsx("input", {
				ref: numberInputRef,
				className: "ml-4 block h-8 w-16 shrink-0 appearance-none rounded-lg bg-components-input-bg-normal pl-3 text-components-input-text-filled outline-none system-sm-regular",
				type: "number",
				max: parameterRule.max,
				min: parameterRule.min,
				step: numberInputWithSlide ? step : +`0.${parameterRule.precision || 0}`,
				onChange: handleNumberInputChange,
				onBlur: handleNumberInputBlur
			})] });
		}
		if (parameterRule.type === "float") return /* @__PURE__ */ jsxs(Fragment$1, { children: [numberInputWithSlide && /* @__PURE__ */ jsx(Slider, {
			className: "w-[120px]",
			value: renderValue,
			min: parameterRule.min,
			max: parameterRule.max,
			step: .1,
			onValueChange: handleSlideChange,
			"aria-label": sliderLabel
		}), /* @__PURE__ */ jsx("input", {
			ref: numberInputRef,
			className: "ml-4 block h-8 w-16 shrink-0 appearance-none rounded-lg bg-components-input-bg-normal pl-3 text-components-input-text-filled outline-none system-sm-regular",
			type: "number",
			max: parameterRule.max,
			min: parameterRule.min,
			step: numberInputWithSlide ? .1 : +`0.${parameterRule.precision || 0}`,
			onChange: handleNumberInputChange,
			onBlur: handleNumberInputBlur
		})] });
		if (parameterRule.type === "boolean") return /* @__PURE__ */ jsxs(Radio.Group, {
			className: "flex w-[150px] items-center",
			value: renderValue,
			onChange: handleRadioChange,
			children: [/* @__PURE__ */ jsx(Radio, {
				value: true,
				className: "w-[70px] px-[18px]",
				children: "True"
			}), /* @__PURE__ */ jsx(Radio, {
				value: false,
				className: "w-[70px] px-[18px]",
				children: "False"
			})]
		});
		if (parameterRule.type === "string" && !parameterRule.options?.length) {
			if (isInWorkflow && nodesOutputVars) return /* @__PURE__ */ jsx("div", {
				className: "ml-4 w-[200px] rounded-lg bg-components-input-bg-normal px-2 py-1",
				children: /* @__PURE__ */ jsx(PromptEditor, {
					compact: true,
					className: "min-h-[22px] text-[13px]",
					value: renderValue,
					onChange: (text) => {
						handleInputChange(text);
					},
					workflowVariableBlock: {
						show: true,
						variables: nodesOutputVars,
						workflowNodesMap
					},
					editable: true
				})
			});
			return /* @__PURE__ */ jsx("input", {
				className: cn(isInWorkflow ? "w-[150px]" : "w-full", "ml-4 flex h-8 appearance-none items-center rounded-lg bg-components-input-bg-normal px-3 text-components-input-text-filled outline-none system-sm-regular"),
				value: renderValue,
				onChange: handleStringInputChange
			});
		}
		if (parameterRule.type === "text") {
			if (isInWorkflow && nodesOutputVars) return /* @__PURE__ */ jsx("div", {
				className: "ml-4 w-full rounded-lg bg-components-input-bg-normal px-2 py-1",
				children: /* @__PURE__ */ jsx(PromptEditor, {
					compact: true,
					className: "min-h-[56px] text-[13px]",
					value: renderValue,
					onChange: (text) => {
						handleInputChange(text);
					},
					workflowVariableBlock: {
						show: true,
						variables: nodesOutputVars,
						workflowNodesMap
					},
					editable: true
				})
			});
			return /* @__PURE__ */ jsx("textarea", {
				className: "ml-4 h-20 w-full rounded-lg bg-components-input-bg-normal px-1 text-components-input-text-filled system-sm-regular",
				value: renderValue,
				onChange: handleStringInputChange
			});
		}
		if (parameterRule.type === "string" && !!parameterRule.options?.length) return /* @__PURE__ */ jsxs(Select, {
			value: renderValue,
			onValueChange: (v) => handleInputChange(v ?? void 0),
			children: [/* @__PURE__ */ jsx(SelectTrigger, {
				className: "w-full",
				children: /* @__PURE__ */ jsx(SelectValue, {})
			}), /* @__PURE__ */ jsx(SelectContent, { children: parameterRule.options.map((option) => /* @__PURE__ */ jsx(SelectItem, {
				value: option,
				children: option
			}, option)) })]
		});
		if (parameterRule.type === "tag") return /* @__PURE__ */ jsx("div", {
			className: cn("!h-8 w-full"),
			children: /* @__PURE__ */ jsx(TagInput, {
				items: renderValue,
				onChange: handleTagChange,
				customizedConfirmKey: "Tab",
				isInWorkflow,
				required: parameterRule.required
			})
		});
		return null;
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-2 flex items-center justify-between",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "shrink-0 basis-1/2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: cn("flex w-full shrink-0 items-center"),
				children: [
					!parameterRule.required && parameterRule.name !== "stop" && /* @__PURE__ */ jsx("div", {
						className: "mr-2 w-7",
						children: /* @__PURE__ */ jsx(switch_default, {
							value: !isNullOrUndefined(value),
							onChange: handleSwitch,
							size: "md"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mr-0.5 truncate text-text-secondary system-xs-regular",
						title: sliderLabel,
						children: sliderLabel
					}),
					parameterRule.help && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsx("span", {
						className: "mr-1 flex h-4 w-4 shrink-0 items-center justify-center",
						children: /* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							className: "i-ri-question-line h-3.5 w-3.5 text-text-quaternary"
						})
					}) }), /* @__PURE__ */ jsx(TooltipContent, {
						popupClassName: "mr-1",
						children: /* @__PURE__ */ jsx("div", {
							className: "w-[150px] whitespace-pre-wrap",
							children: parameterRule.help[language] || parameterRule.help.en_US
						})
					})] })
				]
			}), parameterRule.type === "tag" && /* @__PURE__ */ jsx("div", {
				className: cn(!isInWorkflow && "w-[150px]", "text-text-tertiary system-xs-regular"),
				children: parameterRule?.tagPlaceholder?.[language]
			})]
		}), renderInput()]
	});
}
var Brush01_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M17.264 2.20765C18.5274 1.0378 20.4895 1.07552 21.707 2.29307C22.9246 3.51061 22.9623 5.47268 21.7924 6.73612L15.4019 13.638C15.008 14.0634 14.811 14.2761 14.579 14.3585C14.3751 14.4309 14.1531 14.4352 13.9465 14.3707C13.7115 14.2973 13.5065 14.0923 13.0965 13.6823L10.3178 10.9036C9.9078 10.4936 9.7028 10.2886 9.62943 10.0536C9.56493 9.84699 9.5692 9.62504 9.6416 9.42107C9.72395 9.18906 9.93667 8.9921 10.3621 8.59817L17.264 2.20765Z",
				"fill": "currentColor"
			},
			"children": []
		}, {
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M8.76212 12.1763C8.35165 11.7659 8.14641 11.5606 7.9013 11.4888C7.7037 11.4308 7.43858 11.4436 7.24747 11.5203C7.01041 11.6154 6.86226 11.7953 6.56595 12.1551C6.46827 12.2737 6.37864 12.398 6.30066 12.53C6.03001 12.9883 5.8908 13.5013 5.88405 14.0163C4.608 13.9077 3.29445 14.3416 2.31799 15.318C1.28682 16.3492 1.34471 17.8002 1.38417 18.7893L1.38921 18.9154C1.43381 20.027 1.46675 20.848 1.11009 21.5439C0.951191 21.8539 0.965076 22.2242 1.14673 22.5215C1.32839 22.8187 1.65165 23 2 23C2.27235 23 2.58299 23.0081 2.91511 23.0167C3.66655 23.0362 4.52805 23.0586 5.30424 22.9968C6.44876 22.9057 7.7418 22.6221 8.68195 21.682C9.65838 20.7056 10.0923 19.3921 9.98366 18.1161C10.4987 18.1093 11.0118 17.9701 11.4701 17.6994C11.6021 17.6215 11.7264 17.5318 11.845 17.4341C12.2048 17.1378 12.3847 16.9897 12.4798 16.7526C12.5565 16.5615 12.5693 16.2964 12.5113 16.0988C12.4395 15.8537 12.2342 15.6484 11.8238 15.238L8.76212 12.1763Z",
				"fill": "currentColor"
			},
			"children": []
		}]
	},
	name: "Brush01"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/editor/Brush01.tsx
var Icon$6 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Brush01_default
});
Icon$6.displayName = "Brush01";
var Citations_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "citations" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Subtract",
					"d": "M0.666992 7.99996C0.666992 3.94987 3.95024 0.666626 8.00033 0.666626C12.0504 0.666626 15.3337 3.94987 15.3337 7.99996C15.3337 12.05 12.0504 15.3333 8.00033 15.3333C3.95024 15.3333 0.666992 12.05 0.666992 7.99996ZM4.66699 7.9801V9.97196H7.35742V7.48922H5.87533C5.85644 7.21231 5.90365 6.94484 6.01693 6.68681C6.2372 6.19592 6.66829 5.84979 7.31022 5.6484V4.66663C6.44803 4.83655 5.79036 5.19527 5.33724 5.7428C4.89041 6.29032 4.66699 7.03609 4.66699 7.9801ZM10.0264 6.70569C10.2466 6.19592 10.6746 5.84349 11.3102 5.6484V4.66663C10.4732 4.83655 9.82183 5.19212 9.35612 5.73336C8.8967 6.27459 8.66699 7.02351 8.66699 7.9801V9.97196H11.3574V7.48922H9.87533C9.85015 7.23748 9.9005 6.9763 10.0264 6.70569Z",
					"fill": "currentColor"
				},
				"children": []
			}]
		}]
	},
	name: "Citations"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/editor/Citations.tsx
var Icon$5 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Citations_default
});
Icon$5.displayName = "Citations";
var Colors_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "colors" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Solid" },
				"children": [
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M13.4494 13.2298C12.9854 13.3409 12.5002 13.3999 12 13.3999C10.2804 13.3999 8.72326 12.6997 7.59953 11.5677C6.4872 10.4471 5.8 8.90382 5.8 7.20007C5.8 3.77586 8.57584 1 12 1C15.4241 1 18.2 3.77586 18.2 7.20007C18.2 8.44569 17.8327 9.60551 17.2005 10.5771C16.3665 11.8588 15.0715 12.8131 13.5506 13.2047C13.517 13.2133 13.4833 13.2217 13.4494 13.2298Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M15.1476 14.7743C16.6646 14.1431 17.9513 13.0695 18.8465 11.7146C19.0004 11.4817 19.0773 11.3652 19.1762 11.3066C19.2615 11.2561 19.3659 11.2312 19.4648 11.2379C19.5795 11.2457 19.6773 11.3015 19.8728 11.4133C21.7413 12.4817 23 14.4946 23 16.7999C23 20.2241 20.2242 23 16.8 23C15.9123 23 15.0689 22.8139 14.3059 22.4782C14.0549 22.3678 13.9294 22.3126 13.8502 22.2049C13.7822 22.1126 13.7468 21.9922 13.7539 21.8777C13.7622 21.7444 13.8565 21.6018 14.045 21.3167C14.8373 20.1184 15.3234 18.6997 15.3917 17.1723C15.3969 17.0566 15.3996 16.9402 15.4 16.8233L15.4 16.7999C15.4 16.1888 15.333 15.5926 15.2057 15.0185C15.1876 14.9366 15.1682 14.8552 15.1476 14.7743Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M4.12723 11.4133C4.32273 11.3015 4.42049 11.2457 4.53516 11.2379C4.63414 11.2312 4.73848 11.2561 4.82382 11.3066C4.92269 11.3652 4.99964 11.4817 5.15355 11.7146C6.62074 13.9352 9.13929 15.4001 12 15.4001C12.4146 15.4001 12.822 15.3694 13.2201 15.31L13.2263 15.3357C13.3398 15.8045 13.4 16.2947 13.4 16.7999L13.4 16.8214C13.3997 16.9056 13.3977 16.9895 13.3941 17.0728C13.2513 20.3704 10.5327 23 7.2 23C3.77584 23 1 20.2241 1 16.7999C1 14.4946 2.25869 12.4817 4.12723 11.4133Z",
							"fill": "currentColor"
						},
						"children": []
					}
				]
			}]
		}]
	},
	name: "Colors"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/editor/Colors.tsx
var Icon$4 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Colors_default
});
Icon$4.displayName = "Colors";
var Paragraph_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M2 6.5C2 5.67157 2.67157 5 3.5 5H20.5C21.3284 5 22 5.67157 22 6.5C22 7.32843 21.3284 8 20.5 8H3.5C2.67157 8 2 7.32843 2 6.5Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M2 12.5C2 11.6716 2.67157 11 3.5 11H20.5C21.3284 11 22 11.6716 22 12.5C22 13.3284 21.3284 14 20.5 14H3.5C2.67157 14 2 13.3284 2 12.5Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M2 18.5C2 17.6716 2.67157 17 3.5 17H12.5C13.3284 17 14 17.6716 14 18.5C14 19.3284 13.3284 20 12.5 20H3.5C2.67157 20 2 19.3284 2 18.5Z",
					"fill": "currentColor"
				},
				"children": []
			}
		]
	},
	name: "Paragraph"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/editor/Paragraph.tsx
var Icon$3 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Paragraph_default
});
Icon$3.displayName = "Paragraph";
var TypeSquare_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				"d": "M7.7587 2H16.2413C17.0463 1.99999 17.7106 1.99998 18.2518 2.0442C18.8139 2.09012 19.3306 2.18868 19.816 2.43598C20.5686 2.81947 21.1805 3.43139 21.564 4.18404C21.8113 4.66938 21.9099 5.18608 21.9558 5.74818C22 6.28937 22 6.95372 22 7.75868V16.2413C22 17.0463 22 17.7106 21.9558 18.2518C21.9099 18.8139 21.8113 19.3306 21.564 19.816C21.1805 20.5686 20.5686 21.1805 19.816 21.564C19.3306 21.8113 18.8139 21.9099 18.2518 21.9558C17.7106 22 17.0463 22 16.2413 22H7.75868C6.95372 22 6.28937 22 5.74818 21.9558C5.18608 21.9099 4.66938 21.8113 4.18404 21.564C3.43139 21.1805 2.81947 20.5686 2.43598 19.816C2.18868 19.3306 2.09012 18.8139 2.0442 18.2518C1.99998 17.7106 1.99999 17.0463 2 16.2413V7.75869C1.99999 6.95373 1.99998 6.28936 2.0442 5.74818C2.09012 5.18608 2.18868 4.66938 2.43598 4.18404C2.81947 3.43139 3.43139 2.81947 4.18404 2.43598C4.66938 2.18868 5.18608 2.09012 5.74818 2.0442C6.28936 1.99998 6.95375 1.99999 7.7587 2ZM7 7C7 6.44772 7.44772 6 8 6H16C16.5523 6 17 6.44772 17 7C17 7.55229 16.5523 8 16 8H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V8H8C7.44772 8 7 7.55229 7 7Z",
				"fill": "currentColor"
			},
			"children": []
		}]
	},
	name: "TypeSquare"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/editor/TypeSquare.tsx
var Icon$2 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: TypeSquare_default
});
Icon$2.displayName = "TypeSquare";
var GoldCoin_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85383C4.07979 4.06253 2.66989 5.7805 1.83733 7.79048C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7886C11.9878 23.2131 14.1995 22.9952 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C23 9.08262 21.8411 6.28473 19.7782 4.22183C17.7153 2.15893 14.9174 1 12 1ZM15.0296 6.26992L16.1076 4.78675C16.1784 4.6893 16.2677 4.60675 16.3703 4.54381C16.473 4.48087 16.5871 4.43877 16.7061 4.41992C16.825 4.40106 16.9465 4.40582 17.0636 4.43393C17.1807 4.46203 17.2912 4.51293 17.3886 4.58371C17.4861 4.65449 17.5686 4.74377 17.6316 4.84646C17.6945 4.94915 17.7366 5.06322 17.7555 5.18218C17.7743 5.30113 17.7696 5.42264 17.7415 5.53975C17.7134 5.65687 17.6625 5.7673 17.5917 5.86475L16.5137 7.34792C16.3707 7.54472 16.1554 7.67667 15.9152 7.71475C15.675 7.75283 15.4294 7.69391 15.2326 7.55096C15.0358 7.40801 14.9039 7.19273 14.8658 6.95249C14.8277 6.71225 14.8866 6.46672 15.0296 6.26992ZM6.61184 4.58417C6.70931 4.51294 6.81989 4.46167 6.93722 4.4333C7.05456 4.40493 7.17635 4.40002 7.29559 4.41884C7.41484 4.43766 7.52919 4.47985 7.63208 4.54299C7.73497 4.60613 7.82438 4.68897 7.89517 4.78675L8.97501 6.26992C9.11796 6.46733 9.17663 6.71344 9.13813 6.95411C9.09962 7.19478 8.96708 7.4103 8.76967 7.55325C8.57226 7.6962 8.32615 7.75488 8.08548 7.71637C7.84481 7.67786 7.62929 7.54533 7.48634 7.34792L6.40834 5.86475C6.33759 5.76731 6.28673 5.65689 6.25867 5.5398C6.23061 5.4227 6.22589 5.30122 6.24479 5.1823C6.26368 5.06338 6.30583 4.94935 6.36881 4.84672C6.43179 4.74409 6.51437 4.65487 6.61184 4.58417ZM6.18101 14.8508L4.43934 15.4173C4.32353 15.4604 4.2002 15.4797 4.07677 15.4739C3.95333 15.4681 3.83234 15.4375 3.72106 15.3837C3.60978 15.33 3.51051 15.2544 3.42922 15.1613C3.34793 15.0682 3.28629 14.9597 3.24801 14.8422C3.20973 14.7247 3.19561 14.6007 3.20648 14.4776C3.21735 14.3545 3.253 14.2349 3.31128 14.1259C3.36955 14.017 3.44926 13.9209 3.54561 13.8435C3.64195 13.7662 3.75295 13.7091 3.87192 13.6757L5.61359 13.1092C5.72952 13.0656 5.85308 13.046 5.9768 13.0515C6.10053 13.057 6.22185 13.0875 6.33345 13.1412C6.44505 13.1949 6.54461 13.2707 6.62613 13.3639C6.70764 13.4572 6.76941 13.566 6.80772 13.6837C6.84603 13.8015 6.86007 13.9258 6.84901 14.0492C6.83794 14.1725 6.802 14.2923 6.74334 14.4014C6.68468 14.5105 6.60453 14.6065 6.50773 14.6838C6.41092 14.761 6.30038 14.8179 6.18101 14.8508ZM12.9167 20.25C12.9167 20.4931 12.8201 20.7263 12.6482 20.8982C12.4763 21.0701 12.2431 21.1667 12 21.1667C11.7569 21.1667 11.5237 21.0701 11.3518 20.8982C11.1799 20.7263 11.0833 20.4931 11.0833 20.25V18.4167C11.0833 18.1736 11.1799 17.9404 11.3518 17.7685C11.5237 17.5966 11.7569 17.5 12 17.5C12.2431 17.5 12.4763 17.5966 12.6482 17.7685C12.8201 17.9404 12.9167 18.1736 12.9167 18.4167V20.25ZM12 14.9333L8.54967 16.7483L9.20876 12.9066L6.4175 10.1859L10.2748 9.62583L12 6.13333L13.7252 9.62583L17.5825 10.1859L14.7913 12.9066L15.4503 16.7483L12 14.9333ZM19.5625 15.4192L17.8208 14.8527C17.7015 14.8197 17.59 14.7629 17.4932 14.6856C17.3964 14.6084 17.3162 14.5123 17.2576 14.4032C17.1989 14.2942 17.163 14.1743 17.1519 14.051C17.1409 13.9276 17.1549 13.8033 17.1932 13.6856C17.2315 13.5678 17.2933 13.459 17.3748 13.3658C17.4563 13.2725 17.5559 13.1968 17.6675 13.1431C17.7791 13.0894 17.9004 13.0588 18.0241 13.0533C18.1479 13.0478 18.2714 13.0674 18.3873 13.111L20.129 13.6775C20.248 13.7109 20.359 13.768 20.4553 13.8454C20.5517 13.9227 20.6314 14.0188 20.6897 14.1278C20.7479 14.2367 20.7836 14.3563 20.7944 14.4794C20.8053 14.6025 20.7912 14.7265 20.7529 14.844C20.7146 14.9615 20.653 15.0701 20.5717 15.1631C20.4904 15.2562 20.3911 15.3319 20.2799 15.3856C20.1686 15.4393 20.0476 15.47 19.9242 15.4757C19.8007 15.4815 19.6783 15.4623 19.5625 15.4192Z",
				"fill": "currentColor"
			},
			"children": []
		}]
	},
	name: "GoldCoin"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/FinanceAndECommerce/GoldCoin.tsx
var Icon$1 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: GoldCoin_default
});
Icon$1.displayName = "GoldCoin";
var Scales02_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M8.64494 5.5L4 5.50001C3.44772 5.50001 3 5.05229 3 4.50001C3 3.94772 3.44771 3.50001 4 3.50001L8.64494 3.5C9.07521 2.05426 10.4145 1 12 1C13.5855 1 14.9248 2.05426 15.3551 3.5L20 3.5C20.5523 3.5 21 3.94772 21 4.5C21 5.05229 20.5523 5.5 20 5.5L15.3551 5.5C15.0191 6.62889 14.1289 7.51909 13 7.85506V20H20C20.5523 20 21 20.4477 21 21C21 21.5523 20.5523 22 20 22L4 22C3.44772 22 3 21.5523 3 21C3 20.4477 3.44772 20 4 20H11V7.85506C9.87111 7.51909 8.98091 6.62889 8.64494 5.5Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M5.49998 7C5.83892 7 6.15479 7.17168 6.33914 7.4561L9.34294 12.0905C9.5058 12.3416 9.65261 12.5678 9.77323 12.9247C9.82544 13.0792 9.86232 13.2714 9.88454 13.4092C9.90677 13.5471 9.93212 13.7411 9.93109 13.9042C9.9302 14.0459 9.92522 14.1726 9.90862 14.2966C9.89198 14.421 9.86633 14.5189 9.85041 14.5797L9.84797 14.5891C9.33962 16.5355 7.60137 18 5.49998 18C3.3986 18 1.66034 16.5355 1.152 14.5891L1.14959 14.5798C1.13367 14.5191 1.108 14.421 1.09135 14.2966C1.07475 14.1726 1.06977 14.0459 1.06888 13.9042C1.06785 13.7411 1.0932 13.5471 1.11542 13.4092C1.13765 13.2714 1.17453 13.0792 1.22674 12.9247C1.34736 12.5678 1.49417 12.3416 1.65703 12.0905L4.66083 7.4561C4.84518 7.17168 5.16105 7 5.49998 7ZM5.49998 9.83859L4.09907 12H6.9009L5.49998 9.83859Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M19.3391 7.4561C19.1548 7.17168 18.8389 7 18.5 7C18.161 7 17.8452 7.17168 17.6608 7.4561L14.657 12.0905C14.4942 12.3416 14.3474 12.5678 14.2267 12.9247C14.1745 13.0792 14.1376 13.2714 14.1154 13.4092C14.0932 13.5471 14.0679 13.7411 14.0689 13.9042C14.0698 14.0459 14.0748 14.1726 14.0914 14.2966C14.108 14.421 14.1337 14.519 14.1496 14.5798L14.152 14.5891C14.6603 16.5355 16.3986 18 18.5 18C20.6014 18 22.3396 16.5355 22.848 14.5891L22.8504 14.5798C22.8663 14.5191 22.892 14.421 22.9086 14.2966C22.9252 14.1726 22.9302 14.0459 22.9311 13.9042C22.9321 13.7411 22.9068 13.5471 22.8845 13.4092C22.8623 13.2714 22.8254 13.0792 22.7732 12.9247C22.6526 12.5678 22.5058 12.3416 22.3429 12.0905L19.3391 7.4561ZM17.0991 12L18.5 9.83859L19.9009 12H17.0991Z",
					"fill": "currentColor"
				},
				"children": []
			}
		]
	},
	name: "Scales02"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/FinanceAndECommerce/Scales02.tsx
var Icon = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Scales02_default
});
Icon.displayName = "Scales02";
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-parameter-modal/presets-parameter.tsx
var toneI18nKeyMap = {
	Creative: "model.tone.Creative",
	Balanced: "model.tone.Balanced",
	Precise: "model.tone.Precise",
	Custom: "model.tone.Custom"
};
var TONE_ICONS = {
	1: /* @__PURE__ */ jsx(Icon$6, { className: "mr-2 h-[14px] w-[14px] text-[#6938EF]" }),
	2: /* @__PURE__ */ jsx(Icon, { className: "mr-2 h-[14px] w-[14px] text-indigo-600" }),
	3: /* @__PURE__ */ jsx(Icon$8, { className: "mr-2 h-[14px] w-[14px] text-[#107569]" })
};
function PresetsParameter({ onSelect }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsxs(DropdownMenuTrigger, {
		render: /* @__PURE__ */ jsx(Button, {
			size: "small",
			variant: "secondary",
			className: "data-[popup-open]:bg-state-base-hover"
		}),
		children: [t("modelProvider.loadPresets", { ns: "common" }), /* @__PURE__ */ jsx("span", { className: "i-ri-arrow-down-s-line ml-0.5 h-3.5 w-3.5" })]
	}), /* @__PURE__ */ jsx(DropdownMenuContent, { children: TONE_LIST.slice(0, 3).map((tone) => /* @__PURE__ */ jsxs(DropdownMenuItem, {
		onClick: () => onSelect(tone.id),
		children: [TONE_ICONS[tone.id], t(toneI18nKeyMap[tone.name], { ns: "common" })]
	}, tone.id)) })] });
}
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-parameter-modal/derive-trigger-status.ts
var deriveTriggerStatus = deriveModelStatus;
var TRIGGER_STATUS_BADGE_I18N = DERIVED_MODEL_STATUS_BADGE_I18N;
var TRIGGER_STATUS_TOOLTIP_I18N = DERIVED_MODEL_STATUS_TOOLTIP_I18N;
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-parameter-modal/trigger.tsx
var Trigger = ({ currentProvider, currentModel, providerName, modelId, isInWorkflow, settingsRef }) => {
	const { t } = useTranslation();
	const { modelProviders } = useProviderContext();
	const currentModelProvider = modelProviders.find((p) => p.provider === providerName);
	const status = deriveTriggerStatus(modelId, providerName, currentModelProvider, currentModel, useCredentialPanelState(currentModelProvider));
	const badgeKey = TRIGGER_STATUS_BADGE_I18N[status];
	const tooltipKey = TRIGGER_STATUS_TOOLTIP_I18N[status];
	const badgeLabel = badgeKey ? t(badgeKey, { ns: "common" }) : null;
	const tooltipLabel = tooltipKey ? t(tooltipKey, { ns: "common" }) : null;
	const isActive = status === "active";
	const iconProvider = currentProvider || modelProviders.find((item) => item.provider === providerName);
	if (status === "empty") return /* @__PURE__ */ jsxs("div", {
		className: cn("relative flex h-8 min-w-[296px] cursor-pointer items-center rounded-lg px-2", isInWorkflow ? "border border-text-warning bg-state-warning-hover pr-[30px]" : "border border-text-warning bg-state-warning-hover ring-inset ring-text-warning hover:ring-[0.5px]"),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mr-2 flex h-6 w-6 shrink-0 items-center justify-center",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex h-5 w-5 items-center justify-center rounded-md border-[0.5px] border-components-panel-border-subtle bg-background-default-subtle",
					children: /* @__PURE__ */ jsx("span", { className: "i-ri-brain-2-line h-3.5 w-3.5 text-text-quaternary" })
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mr-1 flex-1 truncate text-[13px] font-normal text-text-secondary",
				children: t("workflow:errorMsg.configureModel")
			}),
			/* @__PURE__ */ jsx("span", { className: cn("i-ri-arrow-down-s-line h-4 w-4 shrink-0 text-text-tertiary", isInWorkflow && "absolute right-2 top-[9px] h-3.5 w-3.5") })
		]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-8 min-w-[296px] cursor-pointer items-center gap-px overflow-hidden rounded-lg",
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("flex flex-1 items-center gap-0.5 rounded-l-lg p-1", isInWorkflow ? "border border-workflow-block-parma-bg bg-workflow-block-parma-bg" : "bg-components-input-bg-normal"),
			children: [
				/* @__PURE__ */ jsx(ModelIcon, {
					className: "p-0.5",
					provider: iconProvider,
					modelName: currentModel?.model || modelId
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex flex-1 items-center truncate px-1 py-[3px]",
					children: currentModel ? /* @__PURE__ */ jsx(ModelName, {
						className: "grow",
						modelItem: currentModel,
						showMode: isActive,
						showFeatures: isActive
					}) : /* @__PURE__ */ jsx("div", {
						className: "truncate text-[13px] font-normal text-components-input-text-filled",
						children: modelId
					})
				}),
				badgeKey && (tooltipLabel ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsx("div", {
					className: "flex shrink-0 items-center pr-0.5",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex min-w-[20px] shrink-0 items-center justify-center gap-[3px] rounded-md border border-text-warning bg-components-badge-bg-dimm px-[5px] py-0.5",
						children: [/* @__PURE__ */ jsx("span", { className: "i-ri-alert-fill h-3 w-3 text-text-warning" }), /* @__PURE__ */ jsx("span", {
							className: "whitespace-nowrap text-text-warning system-xs-medium",
							children: badgeLabel
						})]
					})
				}) }), /* @__PURE__ */ jsx(TooltipContent, {
					placement: "top",
					children: tooltipLabel
				})] }) : /* @__PURE__ */ jsx("div", {
					className: "flex shrink-0 items-center pr-0.5",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex min-w-[20px] shrink-0 items-center justify-center gap-[3px] rounded-md border border-text-warning bg-components-badge-bg-dimm px-[5px] py-0.5",
						children: [/* @__PURE__ */ jsx("span", { className: "i-ri-alert-fill h-3 w-3 text-text-warning" }), /* @__PURE__ */ jsx("span", {
							className: "whitespace-nowrap text-text-warning system-xs-medium",
							children: badgeLabel
						})]
					})
				})),
				!badgeKey && /* @__PURE__ */ jsx("div", {
					className: "flex shrink-0 items-center pr-1",
					children: /* @__PURE__ */ jsx("span", { className: "i-ri-arrow-down-s-line h-4 w-4 text-text-tertiary" })
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			ref: settingsRef,
			className: cn("flex shrink-0 items-center justify-center rounded-r-lg p-2", isInWorkflow ? "border border-workflow-block-parma-bg bg-workflow-block-parma-bg" : "bg-components-button-tertiary-bg"),
			children: /* @__PURE__ */ jsx("span", { className: "i-ri-equalizer-2-line h-4 w-4 text-text-tertiary" })
		})]
	});
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-parameter-modal/index.tsx
var ModelParameterModal = ({ popupClassName, isAdvancedMode, modelId, provider, setModel, completionParams, onCompletionParamsChange, hideDebugWithMultipleModel, debugWithMultipleModel, onDebugWithMultipleModelChange, renderTrigger, readonly, isInWorkflow, nodesOutputVars, availableNodes }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const settingsIconRef = useRef(null);
	const { data: parameterRulesData, isPending, isLoading } = useModelParameterRules(provider, modelId);
	const isRulesLoading = isPending || isLoading;
	const { currentProvider, currentModel, activeTextGenerationModelList } = useTextGenerationCurrentProviderAndModelAndModelList({
		provider,
		model: modelId
	});
	const parameterRules = useMemo(() => {
		return parameterRulesData?.data || [];
	}, [parameterRulesData]);
	const handleParamChange = (key, value) => {
		onCompletionParamsChange({
			...completionParams,
			[key]: value
		});
	};
	const handleChangeModel = ({ provider, model }) => {
		const targetModelItem = activeTextGenerationModelList.find((modelItem) => modelItem.provider === provider)?.models.find((modelItem) => modelItem.model === model);
		setModel({
			modelId: model,
			provider,
			mode: targetModelItem?.model_properties.mode,
			features: targetModelItem?.features || []
		});
	};
	const handleSwitch = (key, value, assignValue) => {
		if (!value) {
			const newCompletionParams = { ...completionParams };
			delete newCompletionParams[key];
			onCompletionParamsChange(newCompletionParams);
		}
		if (value) onCompletionParamsChange({
			...completionParams,
			[key]: assignValue
		});
	};
	const handleSelectPresetParameter = (toneId) => {
		const tone = TONE_LIST.find((tone) => tone.id === toneId);
		if (tone) onCompletionParamsChange({
			...completionParams,
			...tone.config
		});
	};
	return /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: (newOpen) => {
			if (readonly) return;
			setOpen(newOpen);
		},
		children: [/* @__PURE__ */ jsx(PopoverTrigger, { render: /* @__PURE__ */ jsx("button", {
			type: "button",
			className: "block w-full border-none bg-transparent p-0 text-left [color:inherit] [font:inherit]",
			children: renderTrigger ? renderTrigger({
				open,
				currentProvider,
				currentModel,
				providerName: provider,
				modelId
			}) : /* @__PURE__ */ jsx(Trigger, {
				isInWorkflow,
				currentProvider,
				currentModel,
				providerName: provider,
				modelId,
				settingsRef: settingsIconRef
			})
		}) }), /* @__PURE__ */ jsxs(PopoverContent, {
			placement: isInWorkflow ? "left" : renderTrigger ? "bottom-end" : "left-start",
			sideOffset: 4,
			popupClassName: cn(popupClassName, "w-[400px] rounded-2xl"),
			positionerProps: !renderTrigger ? { anchor: settingsIconRef } : void 0,
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "relative px-3 pb-1 pt-3.5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "pl-1 pr-8 text-text-primary system-xl-semibold",
						children: t("modelProvider.modelSettings", { ns: "common" })
					}), /* @__PURE__ */ jsx(PopoverClose, {
						className: "absolute right-2.5 top-2.5 flex items-center justify-center rounded-lg p-1.5 hover:bg-state-base-hover",
						children: /* @__PURE__ */ jsx("span", { className: "i-ri-close-line h-4 w-4 text-text-tertiary" })
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "max-h-[420px] overflow-y-auto",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "px-4 pb-4 pt-2",
							children: /* @__PURE__ */ jsx(ModelSelector, {
								defaultModel: provider || modelId ? {
									provider,
									model: modelId
								} : void 0,
								modelList: activeTextGenerationModelList,
								onSelect: handleChangeModel,
								onHide: () => setOpen(false)
							})
						}),
						!!parameterRules.length && /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-2 border-t border-divider-subtle px-4 pb-4 pt-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex flex-1 items-center text-text-secondary system-sm-semibold-uppercase",
									children: t("modelProvider.parameters", { ns: "common" })
								}), PROVIDER_WITH_PRESET_TONE.includes(provider) && /* @__PURE__ */ jsx(PresetsParameter, { onSelect: handleSelectPresetParameter })]
							}), isRulesLoading ? /* @__PURE__ */ jsx("div", {
								className: "py-5",
								children: /* @__PURE__ */ jsx(Loading, {})
							}) : [...parameterRules, ...isAdvancedMode ? [STOP_PARAMETER_RULE] : []].map((parameter) => /* @__PURE__ */ jsx(ParameterItem, {
								parameterRule: parameter,
								value: completionParams?.[parameter.name],
								onChange: (v) => handleParamChange(parameter.name, v),
								onSwitch: (checked, assignValue) => handleSwitch(parameter.name, checked, assignValue),
								isInWorkflow,
								nodesOutputVars,
								availableNodes
							}, `${modelId}-${parameter.name}`))]
						}),
						!parameterRules.length && isRulesLoading && /* @__PURE__ */ jsx("div", {
							className: "px-4 py-5",
							children: /* @__PURE__ */ jsx(Loading, {})
						})
					]
				}),
				!hideDebugWithMultipleModel && /* @__PURE__ */ jsxs("div", {
					className: "flex h-[50px] cursor-pointer items-center justify-between rounded-b-xl border-t border-t-divider-subtle px-4 text-text-accent system-sm-regular",
					onClick: () => onDebugWithMultipleModelChange?.(),
					children: [debugWithMultipleModel ? t("debugAsSingleModel", { ns: "appDebug" }) : t("debugAsMultipleModel", { ns: "appDebug" }), /* @__PURE__ */ jsx(Icon$12, { className: "h-3 w-3 rotate-180" })]
				})
			]
		})]
	});
};
//#endregion
//#region service/debug.ts
var stopChatMessageResponding = async (appId, taskId) => {
	return post(`apps/${appId}/chat-messages/${taskId}/stop`);
};
var sendCompletionMessage = async (appId, body, { onData, onCompleted, onError, onMessageReplace }) => {
	return ssePost(`apps/${appId}/completion-messages`, { body: {
		...body,
		response_mode: "streaming"
	} }, {
		onData,
		onCompleted,
		onError,
		onMessageReplace
	});
};
var fetchSuggestedQuestions = (appId, messageId, getAbortController) => {
	return get(`apps/${appId}/chat-messages/${messageId}/suggested-questions`, {}, { getAbortController });
};
var fetchConversationMessages = (appId, conversation_id, getAbortController) => {
	return get(`apps/${appId}/chat-messages`, { params: { conversation_id } }, { getAbortController });
};
var generateBasicAppFirstTimeRule = (body) => {
	return post("/rule-generate", { body });
};
var generateRule = (body) => {
	return post("/instruction-generate", { body });
};
var fetchPromptTemplate = ({ appMode, mode, modelName, hasSetDataSet }) => {
	return get("/app/prompt-templates", { params: {
		app_mode: appMode,
		model_mode: mode,
		model_name: modelName,
		has_context: hasSetDataSet
	} });
};
var fetchTextGenerationMessage = ({ appId, messageId }) => {
	return get(`/apps/${appId}/messages/${messageId}`);
};
//#endregion
//#region app/components/app/configuration/config/automatic/idea-output.tsx
var i18nPrefix$2 = "generate";
var IdeaOutput = ({ value, onChange }) => {
	const { t } = useTranslation();
	const [isFoldIdeaOutput, { toggle: toggleFoldIdeaOutput }] = useBoolean(true);
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-4 text-[0px]",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-1.5 flex  cursor-pointer items-center text-sm font-medium leading-5 text-text-primary",
			onClick: toggleFoldIdeaOutput,
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "system-sm-semibold-uppercase mr-1 text-text-secondary",
					children: t(`${i18nPrefix$2}.idealOutput`, { ns: "appDebug" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "system-xs-regular text-text-tertiary",
					children: [
						"(",
						t(`${i18nPrefix$2}.optional`, { ns: "appDebug" }),
						")"
					]
				}),
				/* @__PURE__ */ jsx(Icon$9, { className: cn("size text-text-quaternary", isFoldIdeaOutput && "relative top-[1px] rotate-[-90deg]") })
			]
		}), !isFoldIdeaOutput && /* @__PURE__ */ jsx(Textarea, {
			className: "h-[80px]",
			placeholder: t(`${i18nPrefix$2}.idealOutputPlaceholder`, { ns: "appDebug" }),
			value,
			onChange: (e) => onChange(e.target.value)
		})]
	});
};
var idea_output_default = React$1.memo(IdeaOutput);
//#endregion
//#region app/components/app/configuration/config/automatic/instruction-editor.tsx
var i18nPrefix$1 = "generate";
var InstructionEditor = ({ editorKey, generatorType, value, onChange, availableVars, availableNodes, getVarType = () => Type.string, isShowCurrentBlock, isShowLastRunBlock }) => {
	const { t } = useTranslation();
	const { eventEmitter } = useEventEmitterContextContext();
	const isCode = generatorType === "code";
	const placeholder = isCode ? /* @__PURE__ */ jsx("div", {
		className: "system-sm-regular whitespace-break-spaces !leading-6 text-text-placeholder",
		children: t(`${i18nPrefix$1}.codeGenInstructionPlaceHolderLine`, { ns: "appDebug" })
	}) : /* @__PURE__ */ jsxs("div", {
		className: "system-sm-regular text-text-placeholder",
		children: [/* @__PURE__ */ jsx("div", {
			className: "leading-6",
			children: t(`${i18nPrefix$1}.instructionPlaceHolderTitle`, { ns: "appDebug" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-2",
			children: [
				/* @__PURE__ */ jsx("div", { children: t(`${i18nPrefix$1}.instructionPlaceHolderLine1`, { ns: "appDebug" }) }),
				/* @__PURE__ */ jsx("div", { children: t(`${i18nPrefix$1}.instructionPlaceHolderLine2`, { ns: "appDebug" }) }),
				/* @__PURE__ */ jsx("div", { children: t(`${i18nPrefix$1}.instructionPlaceHolderLine3`, { ns: "appDebug" }) })
			]
		})]
	});
	const handleInsertVariable = () => {
		eventEmitter?.emit({
			type: PROMPT_EDITOR_INSERT_QUICKLY,
			instanceId: editorKey
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx(PromptEditor, {
			wrapperClassName: "border !border-components-input-bg-normal bg-components-input-bg-normal hover:!border-components-input-bg-hover rounded-[10px] px-4 pt-3",
			instanceId: editorKey,
			placeholder,
			placeholderClassName: "px-4 pt-3",
			className: cn("min-h-[240px] pb-8"),
			value,
			workflowVariableBlock: {
				show: true,
				variables: availableVars,
				getVarType,
				workflowNodesMap: availableNodes.reduce((acc, node) => {
					acc[node.id] = {
						title: node.data.title,
						type: node.data.type,
						width: node.width,
						height: node.height,
						position: node.position
					};
					if (node.data.type === BlockEnum.Start) acc.sys = {
						title: t("blocks.start", { ns: "workflow" }),
						type: BlockEnum.Start
					};
					return acc;
				}, {})
			},
			currentBlock: {
				show: isShowCurrentBlock,
				generatorType
			},
			errorMessageBlock: { show: isCode },
			lastRunBlock: { show: isShowLastRunBlock },
			onChange,
			editable: true,
			isSupportFileVar: false
		}, editorKey), /* @__PURE__ */ jsxs("div", {
			className: "system-xs-regular absolute bottom-0 left-4 flex h-8 items-center space-x-0.5 text-components-input-text-placeholder",
			children: [
				/* @__PURE__ */ jsx("span", { children: t("generate.press", { ns: "appDebug" }) }),
				/* @__PURE__ */ jsx("span", {
					className: "system-kbd flex h-4 w-3.5 items-center justify-center rounded-[4px] bg-components-kbd-bg-gray text-text-placeholder",
					children: "/"
				}),
				/* @__PURE__ */ jsx("span", { children: t("generate.to", { ns: "appDebug" }) }),
				/* @__PURE__ */ jsx("span", {
					onClick: handleInsertVariable,
					className: "!ml-1 cursor-pointer hover:border-b hover:border-dotted hover:border-text-tertiary hover:text-text-tertiary",
					children: t("generate.insertContext", { ns: "appDebug" })
				})
			]
		})]
	});
};
var instruction_editor_default = React$1.memo(InstructionEditor);
//#endregion
//#region app/components/app/configuration/config/automatic/instruction-editor-in-workflow.tsx
var InstructionEditorInWorkflow = ({ nodeId, value, editorKey, onChange, generatorType, isShowCurrentBlock }) => {
	const workflowStore = useWorkflowStore();
	const { availableVars, availableNodes } = useAvailableVarList(nodeId, {
		onlyLeafNodeVar: false,
		filterVar: useCallback((payload, selector) => {
			const { nodesWithInspectVars } = workflowStore.getState();
			const nodeId = selector?.[0];
			return !!nodesWithInspectVars.find((node) => node.nodeId === nodeId) && payload.type !== VarType.file && payload.type !== VarType.arrayFile;
		}, [workflowStore])
	});
	return /* @__PURE__ */ jsx(instruction_editor_default, {
		value,
		onChange,
		editorKey,
		generatorType,
		availableVars,
		availableNodes,
		getVarType: useWorkflowVariableType(),
		isShowCurrentBlock,
		isShowLastRunBlock: true
	});
};
var instruction_editor_in_workflow_default = React$1.memo(InstructionEditorInWorkflow);
//#endregion
//#region app/components/app/configuration/config/automatic/res-placeholder.tsx
var ResPlaceholder = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full w-0 grow flex-col items-center justify-center space-y-3 px-8",
		children: [/* @__PURE__ */ jsx(Icon$7, { className: "size-8 text-text-quaternary" }), /* @__PURE__ */ jsx("div", {
			className: "text-center text-[13px] font-normal leading-5 text-text-tertiary",
			children: /* @__PURE__ */ jsx("div", { children: t("generate.newNoDataLine1", { ns: "appDebug" }) })
		})]
	});
};
var res_placeholder_default = React$1.memo(ResPlaceholder);
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/code-editor.tsx
var import_copy_to_clipboard = /* @__PURE__ */ __toESM(require_copy_to_clipboard(), 1);
var CodeEditor$1 = ({ value, onUpdate, showFormatButton = true, editorWrapperClassName, readOnly = false, hideTopMenu = false, topContent, className, onFocus, onBlur }) => {
	const { t } = useTranslation();
	const { theme } = useTheme();
	const monacoRef = useRef(null);
	const editorRef = useRef(null);
	const [isMounted, setIsMounted] = React$1.useState(false);
	const containerRef = useRef(null);
	useEffect(() => {
		if (monacoRef.current) if (theme === Theme.light) monacoRef.current.editor.setTheme("light-theme");
		else monacoRef.current.editor.setTheme("dark-theme");
	}, [theme]);
	const handleEditorDidMount = useCallback((editor, monaco) => {
		editorRef.current = editor;
		monacoRef.current = monaco;
		editor.onDidFocusEditorText(() => {
			onFocus?.();
		});
		editor.onDidBlurEditorText(() => {
			onBlur?.();
		});
		monaco.editor.defineTheme("light-theme", {
			base: "vs",
			inherit: true,
			rules: [],
			colors: {
				"editor.background": "#00000000",
				"editor.lineHighlightBackground": "#00000000",
				"focusBorder": "#00000000"
			}
		});
		monaco.editor.defineTheme("dark-theme", {
			base: "vs-dark",
			inherit: true,
			rules: [],
			colors: {
				"editor.background": "#00000000",
				"editor.lineHighlightBackground": "#00000000",
				"focusBorder": "#00000000"
			}
		});
		monaco.editor.setTheme("light-theme");
		setIsMounted(true);
	}, []);
	const formatJsonContent = useCallback(() => {
		if (editorRef.current) editorRef.current.getAction("editor.action.formatDocument")?.run();
	}, []);
	const handleEditorChange = useCallback((value) => {
		if (value !== void 0) onUpdate?.(value);
	}, [onUpdate]);
	const editorTheme = useMemo(() => {
		if (theme === Theme.light) return "light-theme";
		return "dark-theme";
	}, [theme]);
	useEffect(() => {
		const resizeObserver = new ResizeObserver(() => {
			editorRef.current?.layout();
		});
		if (containerRef.current) resizeObserver.observe(containerRef.current);
		return () => {
			resizeObserver.disconnect();
		};
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-full flex-col overflow-hidden bg-components-input-bg-normal", hideTopMenu && "pt-2", className),
		children: [
			!hideTopMenu && /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between pl-2 pr-1 pt-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "system-xs-semibold-uppercase py-0.5 text-text-secondary",
					children: /* @__PURE__ */ jsx("span", {
						className: "px-1 py-0.5",
						children: "JSON"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-x-0.5",
					children: [showFormatButton && /* @__PURE__ */ jsx(tooltip_default, {
						popupContent: t("operation.format", { ns: "common" }),
						children: /* @__PURE__ */ jsx("button", {
							type: "button",
							className: "flex h-6 w-6 items-center justify-center",
							onClick: formatJsonContent,
							children: /* @__PURE__ */ jsx(ka, { className: "h-4 w-4 text-text-tertiary" })
						})
					}), /* @__PURE__ */ jsx(tooltip_default, {
						popupContent: t("operation.copy", { ns: "common" }),
						children: /* @__PURE__ */ jsx("button", {
							type: "button",
							className: "flex h-6 w-6 items-center justify-center",
							onClick: () => (0, import_copy_to_clipboard.default)(value),
							children: /* @__PURE__ */ jsx(B7, { className: "h-4 w-4 text-text-tertiary" })
						})
					})]
				})]
			}),
			topContent,
			/* @__PURE__ */ jsx("div", {
				className: cn("relative overflow-hidden", editorWrapperClassName),
				children: /* @__PURE__ */ jsx(de, {
					defaultLanguage: "json",
					theme: isMounted ? editorTheme : "default-theme",
					value,
					onChange: handleEditorChange,
					onMount: handleEditorDidMount,
					options: {
						readOnly,
						domReadOnly: true,
						minimap: { enabled: false },
						tabSize: 2,
						scrollBeyondLastLine: false,
						wordWrap: "on",
						wrappingIndent: "same",
						overviewRulerBorder: false,
						hideCursorInOverviewRuler: true,
						renderLineHighlightOnlyWhenFocus: false,
						renderLineHighlight: "none",
						scrollbar: {
							vertical: "hidden",
							horizontal: "hidden",
							verticalScrollbarSize: 0,
							horizontalScrollbarSize: 0,
							alwaysConsumeMouseWheel: false
						}
					}
				})
			})
		]
	});
};
var code_editor_default$1 = React$1.memo(CodeEditor$1);
//#endregion
//#region app/components/app/configuration/config/automatic/prompt-res.tsx
var keyIdPrefix = "prompt-res-editor";
var PromptRes = ({ value, workflowVariableBlock }) => {
	const [editorKey, setEditorKey] = React$1.useState("keyIdPrefix-0");
	useEffect(() => {
		setEditorKey(`${keyIdPrefix}-${Date.now()}`);
	}, [value]);
	return /* @__PURE__ */ jsx(PromptEditor, {
		value,
		editable: false,
		className: "h-full bg-transparent pt-0",
		workflowVariableBlock
	}, editorKey);
};
var prompt_res_default = React$1.memo(PromptRes);
//#endregion
//#region app/components/app/configuration/config/automatic/prompt-res-in-workflow.tsx
var PromptResInWorkflow = ({ value, nodeId }) => {
	const { t } = useTranslation();
	const { availableVars, availableNodes } = useAvailableVarList(nodeId, {
		onlyLeafNodeVar: false,
		filterVar: (_payload) => true
	});
	return /* @__PURE__ */ jsx(prompt_res_default, {
		value,
		workflowVariableBlock: {
			show: true,
			variables: availableVars || [],
			getVarType: () => Type.string,
			workflowNodesMap: availableNodes.reduce((acc, node) => {
				acc[node.id] = {
					title: node.data.title,
					type: node.data.type,
					width: node.width,
					height: node.height,
					position: node.position
				};
				if (node.data.type === BlockEnum.Start) acc.sys = {
					title: t("blocks.start", { ns: "workflow" }),
					type: BlockEnum.Start
				};
				return acc;
			}, {})
		}
	});
};
var prompt_res_in_workflow_default = React$1.memo(PromptResInWorkflow);
//#endregion
//#region app/components/base/markdown/index.tsx
var StreamdownWrapper = dynamic(() => import("./streamdown-wrapper-DmNsRZyU.js"), { ssr: false });
var preprocess = flow([preprocessThinkTag, preprocessLaTeX]);
var EMPTY_COMPONENTS = {};
var Markdown = memo((props) => {
	const { content, customComponents = EMPTY_COMPONENTS, pluginInfo, isAnimating, customDisallowedElements, remarkPlugins, rehypePlugins, mode, className } = props;
	const latexContent = useMemo(() => preprocess(content), [content]);
	return /* @__PURE__ */ jsx("div", {
		className: cn("markdown-body", "!text-text-primary", className),
		"data-testid": "markdown-body",
		children: /* @__PURE__ */ jsx(StreamdownWrapper, {
			pluginInfo,
			latexContent,
			customComponents,
			customDisallowedElements,
			remarkPlugins,
			rehypePlugins,
			isAnimating,
			mode
		})
	});
});
Markdown.displayName = "Markdown";
var style_module_default = {
	textGradient: "_textGradient_1s11a_1",
	optimizationNoteText: "_optimizationNoteText_1s11a_8"
};
//#endregion
//#region app/components/app/configuration/config/automatic/prompt-toast.tsx
var PromptToast = ({ message, className }) => {
	const { t } = useTranslation();
	const [isFold, { toggle: toggleFold }] = useBoolean(false);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("rounded-xl border-[0.5px] border-components-panel-border bg-background-section-burn pl-4 shadow-xs", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "my-3 flex h-4 items-center justify-between pr-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center space-x-1",
				children: [/* @__PURE__ */ jsx(WA, { className: "size-3.5 text-components-input-border-active-prompt-1" }), /* @__PURE__ */ jsx("span", {
					className: cn(style_module_default.optimizationNoteText, "system-xs-semibold-uppercase"),
					children: t("generate.optimizationNote", { ns: "appDebug" })
				})]
			}), /* @__PURE__ */ jsx(f1, {
				className: cn("size-4 cursor-pointer text-text-tertiary", isFold && "rotate-[-90deg]"),
				onClick: toggleFold
			})]
		}), !isFold && /* @__PURE__ */ jsx("div", {
			className: "pb-4 pr-4",
			children: /* @__PURE__ */ jsx(Markdown, {
				className: "!text-sm",
				content: message
			})
		})]
	});
};
//#endregion
//#region app/components/app/configuration/config/automatic/version-selector.tsx
var VersionSelector = ({ versionLen, value, onChange }) => {
	const { t } = useTranslation();
	const [isOpen, { setFalse: handleOpenFalse, toggle: handleOpenToggle, set: handleOpenSet }] = useBoolean(false);
	const moreThanOneVersion = versionLen > 1;
	const handleOpen = useCallback((value) => {
		if (moreThanOneVersion) handleOpenSet(value);
	}, [moreThanOneVersion, handleOpenToggle]);
	const handleToggle = useCallback(() => {
		if (moreThanOneVersion) handleOpenToggle();
	}, [moreThanOneVersion, handleOpenToggle]);
	const versions = Array.from({ length: versionLen }, (_, index) => ({
		label: `${t("generate.version", { ns: "appDebug" })} ${index + 1}${index === versionLen - 1 ? ` · ${t("generate.latest", { ns: "appDebug" })}` : ""}`,
		value: index
	}));
	const isLatest = value === versionLen - 1;
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		placement: "bottom-start",
		offset: {
			mainAxis: 4,
			crossAxis: -12
		},
		open: isOpen,
		onOpenChange: handleOpen,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: handleToggle,
			asChild: true,
			children: /* @__PURE__ */ jsxs("div", {
				className: cn("system-xs-medium flex items-center text-text-tertiary", isOpen && "text-text-secondary", moreThanOneVersion && "cursor-pointer"),
				children: [/* @__PURE__ */ jsxs("div", { children: [
					t("generate.version", { ns: "appDebug" }),
					" ",
					value + 1,
					isLatest && ` · ${t("generate.latest", { ns: "appDebug" })}`
				] }), moreThanOneVersion && /* @__PURE__ */ jsx(f1, { className: "size-3 " })]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: cn("z-[99]"),
			children: /* @__PURE__ */ jsxs("div", {
				className: cn("w-[208px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-1 shadow-lg"),
				children: [/* @__PURE__ */ jsx("div", {
					className: cn("system-xs-medium-uppercase flex h-[22px] items-center px-3 pl-3 text-text-tertiary"),
					children: t("generate.versions", { ns: "appDebug" })
				}), versions.map((option) => /* @__PURE__ */ jsxs("div", {
					className: cn("system-sm-medium flex h-7 cursor-pointer items-center rounded-lg px-2 text-text-secondary hover:bg-state-base-hover"),
					title: option.label,
					onClick: () => {
						onChange(option.value);
						handleOpenFalse();
					},
					children: [/* @__PURE__ */ jsx("div", {
						className: "mr-1 grow truncate px-1 pl-1",
						children: option.label
					}), value === option.value && /* @__PURE__ */ jsx(s7, { className: "h-4 w-4 shrink-0 text-text-accent" })]
				}, option.value))]
			})
		})]
	});
};
//#endregion
//#region app/components/app/configuration/config/automatic/result.tsx
var Result = ({ isBasicMode, nodeId, current, currentVersionIndex, setCurrentVersionIndex, versions, onApply, generatorType }) => {
	const { t } = useTranslation();
	const isGeneratorPrompt = generatorType === GeneratorType.prompt;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-3 flex shrink-0 items-center justify-between",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
				className: "shrink-0 text-base font-semibold leading-[160%] text-text-secondary",
				children: t("generate.resTitle", { ns: "appDebug" })
			}), /* @__PURE__ */ jsx(VersionSelector, {
				versionLen: versions.length,
				value: currentVersionIndex,
				onChange: setCurrentVersionIndex
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center space-x-2",
				children: [/* @__PURE__ */ jsx(Button, {
					className: "px-2",
					onClick: () => {
						(0, import_copy_to_clipboard.default)(current.modified);
						Toast.notify({
							type: "success",
							message: t("actionMsg.copySuccessfully", { ns: "common" })
						});
					},
					children: /* @__PURE__ */ jsx(B7, { className: "h-4 w-4 text-text-secondary" })
				}), /* @__PURE__ */ jsx(Button, {
					variant: "primary",
					onClick: onApply,
					children: t("generate.apply", { ns: "appDebug" })
				})]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex grow flex-col overflow-y-auto",
			children: [current?.message && /* @__PURE__ */ jsx(PromptToast, {
				message: current.message,
				className: "mb-3 shrink-0"
			}), /* @__PURE__ */ jsx("div", {
				className: "grow pb-6",
				children: isGeneratorPrompt ? isBasicMode ? /* @__PURE__ */ jsx(prompt_res_default, {
					value: current?.modified,
					workflowVariableBlock: { show: false }
				}) : /* @__PURE__ */ jsx(prompt_res_in_workflow_default, {
					value: current?.modified || "",
					nodeId
				}) : /* @__PURE__ */ jsx(code_editor_default$1, {
					editorWrapperClassName: "h-full",
					className: "bg-transparent pt-0",
					value: current?.modified,
					readOnly: true,
					hideTopMenu: true
				})
			})]
		})]
	});
};
var result_default = React$1.memo(Result);
//#endregion
//#region app/components/app/configuration/config/automatic/use-gen-data.ts
var keyPrefix = "gen-data-";
var useGenData = ({ storageKey }) => {
	const [versions, setVersions] = useSessionStorageState(`${keyPrefix}${storageKey}-versions`, { defaultValue: [] });
	const [currentVersionIndex, setCurrentVersionIndex] = useSessionStorageState(`${keyPrefix}${storageKey}-version-index`, { defaultValue: 0 });
	const current = versions?.[currentVersionIndex || 0];
	return {
		versions,
		addVersion: useCallback((version) => {
			setCurrentVersionIndex(() => versions?.length || 0);
			setVersions((prev) => {
				return [...prev, version];
			});
		}, [
			setVersions,
			setCurrentVersionIndex,
			versions?.length
		]),
		currentVersionIndex,
		setCurrentVersionIndex,
		current
	};
};
//#endregion
//#region app/components/app/configuration/config/code-generator/get-code-generator-res.tsx
var i18nPrefix = "generate";
var GetCodeGeneratorResModal = ({ flowId, nodeId, currentCode, mode, isShow, codeLanguages, onClose, onFinished }) => {
	const { t } = useTranslation();
	const defaultCompletionParams = {
		temperature: .7,
		max_tokens: 0,
		top_p: 0,
		echo: false,
		stop: [],
		presence_penalty: 0,
		frequency_penalty: 0
	};
	const localModel = localStorage.getItem("auto-gen-model") ? JSON.parse(localStorage.getItem("auto-gen-model")) : null;
	const [model, setModel] = React$1.useState(localModel || {
		name: "",
		provider: "",
		mode,
		completion_params: defaultCompletionParams
	});
	const { defaultModel } = useModelListAndDefaultModelAndCurrentProviderAndModel(ModelTypeEnum.textGeneration);
	const [instructionFromSessionStorage, setInstruction] = useSessionStorageState(`improve-instruction-${flowId}-${nodeId}`);
	const instruction = instructionFromSessionStorage || "";
	const [ideaOutput, setIdeaOutput] = useState("");
	const [isLoading, { setTrue: setLoadingTrue, setFalse: setLoadingFalse }] = useBoolean(false);
	const { addVersion, current, currentVersionIndex, setCurrentVersionIndex, versions } = useGenData({ storageKey: `${flowId}-${nodeId}` });
	const [editorKey, setEditorKey] = useState(`${flowId}-0`);
	const { data: instructionTemplate } = useGenerateRuleTemplate(GeneratorType.code);
	useEffect(() => {
		if (!instruction && instructionTemplate) setInstruction(instructionTemplate.data);
		setEditorKey(`${flowId}-${Date.now()}`);
	}, [instructionTemplate]);
	const isValid = () => {
		if (instruction.trim() === "") {
			Toast.notify({
				type: "error",
				message: t("errorMsg.fieldRequired", {
					ns: "common",
					field: t("code.instruction", { ns: "appDebug" })
				})
			});
			return false;
		}
		return true;
	};
	const handleModelChange = useCallback((newValue) => {
		const newModel = {
			...model,
			provider: newValue.provider,
			name: newValue.modelId,
			mode: newValue.mode
		};
		setModel(newModel);
		localStorage.setItem("auto-gen-model", JSON.stringify(newModel));
	}, [model, setModel]);
	const handleCompletionParamsChange = useCallback((newParams) => {
		const newModel = {
			...model,
			completion_params: newParams
		};
		setModel(newModel);
		localStorage.setItem("auto-gen-model", JSON.stringify(newModel));
	}, [model, setModel]);
	const onGenerate = async () => {
		if (!isValid()) return;
		if (isLoading) return;
		setLoadingTrue();
		try {
			const { error, ...res } = await generateRule({
				flow_id: flowId,
				node_id: nodeId,
				current: currentCode,
				instruction,
				model_config: model,
				ideal_output: ideaOutput,
				language: languageMap[codeLanguages] || "javascript"
			});
			if (res.code) res.modified = res.code;
			if (error) Toast.notify({
				type: "error",
				message: error
			});
			else addVersion(res);
		} finally {
			setLoadingFalse();
		}
	};
	const [isShowConfirmOverwrite, { setTrue: showConfirmOverwrite, setFalse: hideShowConfirmOverwrite }] = useBoolean(false);
	useEffect(() => {
		if (defaultModel) {
			const localModel = localStorage.getItem("auto-gen-model") ? JSON.parse(localStorage.getItem("auto-gen-model") || "") : null;
			if (localModel) setModel({
				...localModel,
				completion_params: {
					...defaultCompletionParams,
					...localModel.completion_params
				}
			});
			else setModel((prev) => ({
				...prev,
				name: defaultModel.model,
				provider: defaultModel.provider.provider
			}));
		}
	}, [defaultModel]);
	const renderLoading = /* @__PURE__ */ jsxs("div", {
		className: "flex h-full w-0 grow flex-col items-center justify-center space-y-3",
		children: [/* @__PURE__ */ jsx(Loading, {}), /* @__PURE__ */ jsx("div", {
			className: "text-[13px] text-text-tertiary",
			children: t("codegen.loading", { ns: "appDebug" })
		})]
	});
	return /* @__PURE__ */ jsxs(Modal, {
		isShow,
		onClose,
		className: "min-w-[1140px] !p-0",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative flex h-[680px] flex-wrap",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "h-full w-[570px] shrink-0 overflow-y-auto border-r border-divider-regular p-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-5",
							children: [/* @__PURE__ */ jsx("div", {
								className: `text-lg font-bold leading-[28px] ${style_module_default.textGradient}`,
								children: t("codegen.title", { ns: "appDebug" })
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-1 text-[13px] font-normal text-text-tertiary",
								children: t("codegen.description", { ns: "appDebug" })
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mb-4",
							children: /* @__PURE__ */ jsx(ModelParameterModal, {
								popupClassName: "!w-[520px]",
								isAdvancedMode: true,
								provider: model.provider,
								completionParams: model.completion_params,
								modelId: model.name,
								setModel: handleModelChange,
								onCompletionParamsChange: handleCompletionParamsChange,
								hideDebugWithMultipleModel: true
							})
						}),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "text-[0px]",
								children: [/* @__PURE__ */ jsx("div", {
									className: "mb-1.5 text-text-secondary system-sm-semibold-uppercase",
									children: t("codegen.instruction", { ns: "appDebug" })
								}), /* @__PURE__ */ jsx(instruction_editor_in_workflow_default, {
									editorKey,
									value: instruction,
									onChange: setInstruction,
									nodeId,
									generatorType: GeneratorType.code,
									isShowCurrentBlock: !!currentCode
								})]
							}),
							/* @__PURE__ */ jsx(idea_output_default, {
								value: ideaOutput,
								onChange: setIdeaOutput
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-7 flex justify-end space-x-2",
								children: [/* @__PURE__ */ jsx(Button, {
									onClick: onClose,
									children: t(`${i18nPrefix}.dismiss`, { ns: "appDebug" })
								}), /* @__PURE__ */ jsxs(Button, {
									className: "flex space-x-1",
									variant: "primary",
									onClick: onGenerate,
									disabled: isLoading,
									children: [/* @__PURE__ */ jsx(Icon$7, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
										className: "text-xs font-semibold",
										children: t("codegen.generate", { ns: "appDebug" })
									})]
								})]
							})
						] })
					]
				}),
				isLoading && renderLoading,
				!isLoading && !current && /* @__PURE__ */ jsx(res_placeholder_default, {}),
				!isLoading && current && /* @__PURE__ */ jsx("div", {
					className: "h-full w-0 grow bg-background-default-subtle p-6 pb-0",
					children: /* @__PURE__ */ jsx(result_default, {
						current,
						currentVersionIndex: currentVersionIndex || 0,
						setCurrentVersionIndex,
						versions: versions || [],
						onApply: showConfirmOverwrite,
						generatorType: GeneratorType.code
					})
				})
			]
		}), isShowConfirmOverwrite && /* @__PURE__ */ jsx(confirm_default, {
			title: t("codegen.overwriteConfirmTitle", { ns: "appDebug" }),
			content: t("codegen.overwriteConfirmMessage", { ns: "appDebug" }),
			isShow: true,
			onConfirm: () => {
				hideShowConfirmOverwrite();
				onFinished(current);
			},
			onCancel: hideShowConfirmOverwrite
		})]
	});
};
var get_code_generator_res_default = React$1.memo(GetCodeGeneratorResModal);
//#endregion
//#region app/components/workflow/nodes/_base/components/code-generator-button.tsx
var CodeGenerateBtn = ({ nodeId, currentCode, className, codeLanguages, onGenerated }) => {
	const [showAutomatic, { setTrue: showAutomaticTrue, setFalse: showAutomaticFalse }] = useBoolean(false);
	const handleAutomaticRes = useCallback((res) => {
		onGenerated?.(res.modified);
		showAutomaticFalse();
	}, [onGenerated, showAutomaticFalse]);
	const configsMap = useHooksStore((s) => s.configsMap);
	return /* @__PURE__ */ jsxs("div", {
		className: cn(className),
		children: [/* @__PURE__ */ jsx(ActionButton, {
			className: "hover:bg-[#155EFF]/8",
			onClick: showAutomaticTrue,
			children: /* @__PURE__ */ jsx(Icon$7, { className: "h-4 w-4 text-primary-600" })
		}), showAutomatic && /* @__PURE__ */ jsx(GetCodeGeneratorResModal, {
			mode: AppModeEnum.CHAT,
			isShow: showAutomatic,
			codeLanguages,
			onClose: showAutomaticFalse,
			onFinished: handleAutomaticRes,
			flowId: configsMap?.flowId || "",
			nodeId,
			currentCode
		})]
	});
};
var code_generator_button_default = React$1.memo(CodeGenerateBtn);
//#endregion
//#region app/components/workflow/nodes/_base/components/toggle-expand-btn.tsx
var ExpandBtn = ({ isExpand, onExpandChange }) => {
	return /* @__PURE__ */ jsx(ActionButton, {
		onClick: useCallback(() => {
			onExpandChange(!isExpand);
		}, [isExpand]),
		children: /* @__PURE__ */ jsx(isExpand ? VU : dU, { className: "h-4 w-4" })
	});
};
var toggle_expand_btn_default = React$1.memo(ExpandBtn);
//#endregion
//#region app/components/workflow/nodes/_base/components/editor/wrap.tsx
var WrapInWebApp = ({ className, style, children }) => {
	return /* @__PURE__ */ jsx("div", {
		className,
		style,
		children
	});
};
var Wrap = ({ className, style, isExpand, children }) => {
	const panelWidth = useStore((state) => state.panelWidth);
	return /* @__PURE__ */ jsx("div", {
		className,
		style: (() => {
			if (isExpand) return {
				...style,
				width: panelWidth - 1
			};
			return style;
		})(),
		children
	});
};
var Main = ({ isInNode, ...otherProps }) => {
	return isInNode ? /* @__PURE__ */ jsx(Wrap, { ...otherProps }) : /* @__PURE__ */ jsx(WrapInWebApp, { ...otherProps });
};
var wrap_default = React$1.memo(Main);
//#endregion
//#region app/components/workflow/nodes/_base/components/editor/base.tsx
var Base = ({ nodeId, className, title, headerRight, children, minHeight = 120, value, isFocus, isInNode, onGenerated, codeLanguages, fileList = [], showFileList, showCodeGenerator = false, tip, footer }) => {
	const ref = useRef(null);
	const { wrapClassName, wrapStyle, isExpand, setIsExpand, editorExpandHeight } = useToggleExpend({
		ref,
		hasFooter: false,
		isInNode
	});
	const editorContentMinHeight = minHeight - 28;
	const [editorContentHeight, setEditorContentHeight] = useState(editorContentMinHeight);
	const [isCopied, setIsCopied] = React$1.useState(false);
	const handleCopy = useCallback(() => {
		(0, import_copy_to_clipboard.default)(value);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 2e3);
	}, [value]);
	return /* @__PURE__ */ jsx(wrap_default, {
		className: cn(wrapClassName),
		style: wrapStyle,
		isInNode,
		isExpand,
		children: /* @__PURE__ */ jsxs("div", {
			ref,
			className: cn(className, isExpand && "h-full", "rounded-lg border", !isFocus ? "border-transparent bg-components-input-bg-normal" : "overflow-hidden border-components-input-border-hover bg-components-input-bg-hover"),
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex h-7 items-center justify-between pl-3 pr-2 pt-1",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-xs-semibold-uppercase text-text-secondary",
						children: title
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center",
						onClick: (e) => {
							e.nativeEvent.stopImmediatePropagation();
							e.stopPropagation();
						},
						children: [
							headerRight,
							!!(showCodeGenerator && codeLanguages) && /* @__PURE__ */ jsx("div", {
								className: "ml-1",
								children: /* @__PURE__ */ jsx(code_generator_button_default, {
									onGenerated,
									codeLanguages,
									currentCode: value,
									nodeId
								})
							}),
							/* @__PURE__ */ jsx(ActionButton, {
								className: "ml-1",
								onClick: handleCopy,
								children: !isCopied ? /* @__PURE__ */ jsx(Icon$10, { className: "h-4 w-4 cursor-pointer" }) : /* @__PURE__ */ jsx(Icon$11, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ jsx("div", {
								className: "ml-1",
								children: /* @__PURE__ */ jsx(toggle_expand_btn_default, {
									isExpand,
									onExpandChange: setIsExpand
								})
							})
						]
					})]
				}),
				!!tip && /* @__PURE__ */ jsx("div", {
					className: "px-1 py-0.5",
					children: tip
				}),
				/* @__PURE__ */ jsx(prompt_editor_height_resize_wrap_default, {
					height: isExpand ? editorExpandHeight : editorContentHeight,
					minHeight: editorContentMinHeight,
					onHeightChange: setEditorContentHeight,
					hideResize: isExpand,
					children: /* @__PURE__ */ jsx("div", {
						className: "h-full pb-2 pl-2",
						children
					})
				}),
				showFileList && fileList.length > 0 && /* @__PURE__ */ jsx(FileListInLog, { fileList }),
				footer
			]
		})
	});
};
var base_default = React$1.memo(Base);
//#endregion
//#region app/components/workflow/nodes/_base/components/editor/code-editor/index.tsx
if (typeof window !== "undefined") loader.config({ paths: { vs: `${window.location.origin}${basePath}/vs` } });
var CODE_EDITOR_LINE_HEIGHT = 18;
var languageMap = {
	[CodeLanguage.javascript]: "javascript",
	[CodeLanguage.python3]: "python",
	[CodeLanguage.json]: "json"
};
var CodeEditor = ({ nodeId, value = "", placeholder = "", onChange = noop, title = "", headerRight, language, readOnly, isJSONStringifyBeauty, height, isInNode, onMount, noWrapper, isExpand, showFileList, onGenerated, showCodeGenerator = false, className, tip, footer }) => {
	const [isFocus, setIsFocus] = React$1.useState(false);
	const [isMounted, setIsMounted] = React$1.useState(false);
	const minHeight = height || 200;
	const [editorContentHeight, setEditorContentHeight] = useState(56);
	const { theme: appTheme } = useTheme();
	const valueRef = useRef(value);
	useEffect(() => {
		valueRef.current = value;
	}, [value]);
	const fileList = useMemo(() => {
		if (typeof value === "object") return getFilesInLogs(value);
		return [];
	}, [value]);
	const editorRef = useRef(null);
	const resizeEditorToContent = () => {
		if (editorRef.current) setEditorContentHeight(editorRef.current.getContentHeight());
	};
	const handleEditorChange = (value) => {
		onChange(value || "");
		setTimeout(() => {
			resizeEditorToContent();
		}, 10);
	};
	const handleEditorDidMount = (editor, monaco) => {
		editorRef.current = editor;
		resizeEditorToContent();
		editor.onDidFocusEditorText(() => {
			setIsFocus(true);
		});
		editor.onDidBlurEditorText(() => {
			setIsFocus(false);
		});
		monaco.editor.setTheme(appTheme === Theme.light ? "light" : "vs-dark");
		onMount?.(editor, monaco);
		setIsMounted(true);
	};
	const outPutValue = (() => {
		if (!isJSONStringifyBeauty) return value;
		try {
			return JSON.stringify(value, null, 2);
		} catch {
			return value;
		}
	})();
	const theme = useMemo(() => {
		if (appTheme === Theme.light) return "light";
		return "vs-dark";
	}, [appTheme]);
	const main = /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Ft, {
		language: languageMap[language] || "javascript",
		theme: isMounted ? theme : "default-theme",
		value: outPutValue,
		loading: /* @__PURE__ */ jsx("span", {
			className: "text-text-primary",
			children: "Loading..."
		}),
		onChange: handleEditorChange,
		options: {
			readOnly,
			domReadOnly: true,
			quickSuggestions: false,
			minimap: { enabled: false },
			lineNumbersMinChars: 1,
			wordWrap: "on",
			unicodeHighlight: { ambiguousCharacters: false },
			stickyScroll: { enabled: false }
		},
		onMount: handleEditorDidMount
	}), !outPutValue && !isFocus && /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none absolute left-[36px] top-0 text-[13px] font-normal leading-[18px] text-components-input-text-placeholder",
		children: placeholder
	})] });
	return /* @__PURE__ */ jsx("div", {
		className: cn(isExpand && "h-full", className),
		children: noWrapper ? /* @__PURE__ */ jsx("div", {
			className: "no-wrapper relative",
			style: {
				height: isExpand ? "100%" : editorContentHeight / 2 + CODE_EDITOR_LINE_HEIGHT,
				minHeight: CODE_EDITOR_LINE_HEIGHT
			},
			children: main
		}) : /* @__PURE__ */ jsx(base_default, {
			nodeId,
			className: "relative",
			title,
			value: outPutValue,
			headerRight,
			isFocus: isFocus && !readOnly,
			minHeight,
			isInNode,
			onGenerated,
			codeLanguages: language,
			fileList,
			showFileList,
			showCodeGenerator,
			tip,
			footer,
			children: main
		})
	});
};
var code_editor_default = React$1.memo(CodeEditor);
//#endregion
export { useMemoizedFn as A, ModelParameterModal as C, useSessionStorageState as D, ParameterItem as E, prompt_editor_height_resize_wrap_default as M, createUseStorageState as O, stopChatMessageResponding as S, PresetsParameter as T, fetchSuggestedQuestions as _, get_code_generator_res_default as a, generateRule as b, style_module_default as c, res_placeholder_default as d, instruction_editor_in_workflow_default as f, fetchPromptTemplate as g, fetchConversationMessages as h, toggle_expand_btn_default as i, useToggleExpend as j, useUpdateEffect_default as k, Markdown as l, idea_output_default as m, base_default as n, useGenData as o, instruction_editor_default as p, wrap_default as r, result_default as s, code_editor_default as t, code_editor_default$1 as u, fetchTextGenerationMessage as v, Trigger as w, sendCompletionMessage as x, generateBasicAppFirstTimeRule as y };
