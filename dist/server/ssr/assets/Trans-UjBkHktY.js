import { f as __commonJSMin, v as __toESM } from "../index.js";
import { n as keysFromSelector } from "./i18next-CxGFEMD9.js";
import { A as warnOnce, D as isObject, E as unescape, O as isString, S as I18nContext, T as getDefaults, k as warn, w as getI18n } from "./floating-ui.utils.dom-B62kDwTz.js";
import { Children, Fragment, cloneElement, createElement, isValidElement, useContext } from "react";
//#endregion
//#region node_modules/.pnpm/html-parse-stringify@3.0.1/node_modules/html-parse-stringify/dist/html-parse-stringify.module.js
var import_void_elements = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This file automatically generated from `pre-publish.js`.
	* Do not manually edit.
	*/
	module.exports = {
		"area": true,
		"base": true,
		"br": true,
		"col": true,
		"embed": true,
		"hr": true,
		"img": true,
		"input": true,
		"link": true,
		"meta": true,
		"param": true,
		"source": true,
		"track": true,
		"wbr": true
	};
})))());
var t = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function n(n) {
	var r = {
		type: "tag",
		name: "",
		voidElement: !1,
		attrs: {},
		children: []
	}, i = n.match(/<\/?([^\s]+?)[/\s>]/);
	if (i && (r.name = i[1], (import_void_elements.default[i[1]] || "/" === n.charAt(n.length - 2)) && (r.voidElement = !0), r.name.startsWith("!--"))) {
		var s = n.indexOf("-->");
		return {
			type: "comment",
			comment: -1 !== s ? n.slice(4, s) : ""
		};
	}
	for (var a = new RegExp(t), c = null; null !== (c = a.exec(n));) if (c[0].trim()) if (c[1]) {
		var o = c[1].trim(), l = [o, ""];
		o.indexOf("=") > -1 && (l = o.split("=")), r.attrs[l[0]] = l[1], a.lastIndex--;
	} else c[2] && (r.attrs[c[2]] = c[3].trim().substring(1, c[3].length - 1));
	return r;
}
var r = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, i = /^\s*$/, s = Object.create(null);
function a(e, t) {
	switch (t.type) {
		case "text": return e + t.content;
		case "tag": return e += "<" + t.name + (t.attrs ? function(e) {
			var t = [];
			for (var n in e) t.push(n + "=\"" + e[n] + "\"");
			return t.length ? " " + t.join(" ") : "";
		}(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(a, "") + "</" + t.name + ">";
		case "comment": return e + "<!--" + t.comment + "-->";
	}
}
var c = {
	parse: function(e, t) {
		t || (t = {}), t.components || (t.components = s);
		var a, c = [], o = [], l = -1, m = !1;
		if (0 !== e.indexOf("<")) {
			var u = e.indexOf("<");
			c.push({
				type: "text",
				content: -1 === u ? e : e.substring(0, u)
			});
		}
		return e.replace(r, function(r, s) {
			if (m) {
				if (r !== "</" + a.name + ">") return;
				m = !1;
			}
			var u, f = "/" !== r.charAt(1), h = r.startsWith("<!--"), p = s + r.length, d = e.charAt(p);
			if (h) {
				var v = n(r);
				return l < 0 ? (c.push(v), c) : ((u = o[l]).children.push(v), c);
			}
			if (f && (l++, "tag" === (a = n(r)).type && t.components[a.name] && (a.type = "component", m = !0), a.voidElement || m || !d || "<" === d || a.children.push({
				type: "text",
				content: e.slice(p, e.indexOf("<", p))
			}), 0 === l && c.push(a), (u = o[l - 1]) && u.children.push(a), o[l] = a), (!f || a.voidElement) && (l > -1 && (a.voidElement || a.name === r.slice(2, -1)) && (l--, a = -1 === l ? c : o[l]), !m && "<" !== d && d)) {
				u = -1 === l ? c : o[l].children;
				var x = e.indexOf("<", p), g = e.slice(p, -1 === x ? void 0 : x);
				i.test(g) && (g = " "), (x > -1 && l + u.length >= 0 || " " !== g) && u.push({
					type: "text",
					content: g
				});
			}
		}), c;
	},
	stringify: function(e) {
		return e.reduce(function(e, t) {
			return e + a("", t);
		}, "");
	}
};
//#endregion
//#region node_modules/.pnpm/react-i18next@16.6.1_i18next@25.10.4_typescript@5.9.3__react-dom@19.2.4_react@19.2.4__react@19.2.4_typescript@5.9.3/node_modules/react-i18next/dist/es/TransWithoutContext.js
var hasChildren = (node, checkLength) => {
	if (!node) return false;
	const base = node.props?.children ?? node.children;
	if (checkLength) return base.length > 0;
	return !!base;
};
var getChildren = (node) => {
	if (!node) return [];
	const children = node.props?.children ?? node.children;
	return node.props?.i18nIsDynamicList ? getAsArray(children) : children;
};
var hasValidReactChildren = (children) => Array.isArray(children) && children.every(isValidElement);
var getAsArray = (data) => Array.isArray(data) ? data : [data];
var mergeProps = (source, target) => {
	const newTarget = { ...target };
	newTarget.props = {
		...target.props,
		...source.props
	};
	return newTarget;
};
var getValuesFromChildren = (children) => {
	const values = {};
	if (!children) return values;
	const getData = (childs) => {
		getAsArray(childs).forEach((child) => {
			if (isString(child)) return;
			if (hasChildren(child)) getData(getChildren(child));
			else if (isObject(child) && !isValidElement(child)) Object.assign(values, child);
		});
	};
	getData(children);
	return values;
};
var nodesToString = (children, i18nOptions, i18n, i18nKey) => {
	if (!children) return "";
	let stringNode = "";
	const childrenArray = getAsArray(children);
	const keepArray = i18nOptions?.transSupportBasicHtmlNodes ? i18nOptions.transKeepBasicHtmlNodesFor ?? [] : [];
	childrenArray.forEach((child, childIndex) => {
		if (isString(child)) {
			stringNode += `${child}`;
			return;
		}
		if (isValidElement(child)) {
			const { props, type } = child;
			const childPropsCount = Object.keys(props).length;
			const shouldKeepChild = keepArray.indexOf(type) > -1;
			const childChildren = props.children;
			if (!childChildren && shouldKeepChild && !childPropsCount) {
				stringNode += `<${type}/>`;
				return;
			}
			if (!childChildren && (!shouldKeepChild || childPropsCount) || props.i18nIsDynamicList) {
				stringNode += `<${childIndex}></${childIndex}>`;
				return;
			}
			if (shouldKeepChild && childPropsCount === 1 && isString(childChildren)) {
				stringNode += `<${type}>${childChildren}</${type}>`;
				return;
			}
			const content = nodesToString(childChildren, i18nOptions, i18n, i18nKey);
			stringNode += `<${childIndex}>${content}</${childIndex}>`;
			return;
		}
		if (child === null) {
			warn(i18n, "TRANS_NULL_VALUE", `Passed in a null value as child`, { i18nKey });
			return;
		}
		if (isObject(child)) {
			const { format, ...clone } = child;
			const keys = Object.keys(clone);
			if (keys.length === 1) {
				const value = format ? `${keys[0]}, ${format}` : keys[0];
				stringNode += `{{${value}}}`;
				return;
			}
			warn(i18n, "TRANS_INVALID_OBJ", `Invalid child - Object should only have keys {{ value, format }} (format is optional).`, {
				i18nKey,
				child
			});
			return;
		}
		warn(i18n, "TRANS_INVALID_VAR", `Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.`, {
			i18nKey,
			child
		});
	});
	return stringNode;
};
var escapeLiteralLessThan = (str, keepArray = [], knownComponentsMap = {}) => {
	if (!str) return str;
	const knownNames = Object.keys(knownComponentsMap);
	const allValidNames = [...keepArray, ...knownNames];
	let result = "";
	let i = 0;
	while (i < str.length) if (str[i] === "<") {
		let isValidTag = false;
		const closingMatch = str.slice(i).match(/^<\/(\d+|[a-zA-Z][a-zA-Z0-9_-]*)>/);
		if (closingMatch) {
			const tagName = closingMatch[1];
			if (/^\d+$/.test(tagName) || allValidNames.includes(tagName)) {
				isValidTag = true;
				result += closingMatch[0];
				i += closingMatch[0].length;
			}
		}
		if (!isValidTag) {
			const openingMatch = str.slice(i).match(/^<(\d+|[a-zA-Z][a-zA-Z0-9_-]*)(\s+[\w-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*(\/)?>/);
			if (openingMatch) {
				const tagName = openingMatch[1];
				if (/^\d+$/.test(tagName) || allValidNames.includes(tagName)) {
					isValidTag = true;
					result += openingMatch[0];
					i += openingMatch[0].length;
				}
			}
		}
		if (!isValidTag) {
			result += "&lt;";
			i += 1;
		}
	} else {
		result += str[i];
		i += 1;
	}
	return result;
};
var renderNodes = (children, knownComponentsMap, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) => {
	if (targetString === "") return [];
	const keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
	const emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.map((keep) => `<${keep}`).join("|")).test(targetString);
	if (!children && !knownComponentsMap && !emptyChildrenButNeedsHandling && !shouldUnescape) return [targetString];
	const data = knownComponentsMap ?? {};
	const getData = (childs) => {
		getAsArray(childs).forEach((child) => {
			if (isString(child)) return;
			if (hasChildren(child)) getData(getChildren(child));
			else if (isObject(child) && !isValidElement(child)) Object.assign(data, child);
		});
	};
	getData(children);
	const escapedString = escapeLiteralLessThan(targetString, keepArray, data);
	const ast = c.parse(`<0>${escapedString}</0>`);
	const opts = {
		...data,
		...combinedTOpts
	};
	const renderInner = (child, node, rootReactNode) => {
		const childs = getChildren(child);
		const mappedChildren = mapAST(childs, node.children, rootReactNode);
		return hasValidReactChildren(childs) && mappedChildren.length === 0 || child.props?.i18nIsDynamicList ? childs : mappedChildren;
	};
	const pushTranslatedJSX = (child, inner, mem, i, isVoid) => {
		if (child.dummy) {
			child.children = inner;
			mem.push(cloneElement(child, { key: i }, isVoid ? void 0 : inner));
		} else mem.push(...Children.map([child], (c) => {
			const INTERNAL_DYNAMIC_MARKER = "data-i18n-is-dynamic-list";
			const override = {
				key: i,
				[INTERNAL_DYNAMIC_MARKER]: void 0
			};
			if (c && c.props) Object.keys(c.props).forEach((k) => {
				if (k === "ref" || k === "children" || k === "i18nIsDynamicList" || k === INTERNAL_DYNAMIC_MARKER) return;
				override[k] = c.props[k];
			});
			return cloneElement(c, override, isVoid ? null : inner);
		}));
	};
	const mapAST = (reactNode, astNode, rootReactNode) => {
		const reactNodes = getAsArray(reactNode);
		return getAsArray(astNode).reduce((mem, node, i) => {
			const translationContent = node.children?.[0]?.content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);
			if (node.type === "tag") {
				let tmp = reactNodes[parseInt(node.name, 10)];
				if (!tmp && knownComponentsMap) tmp = knownComponentsMap[node.name];
				if (rootReactNode.length === 1 && !tmp) tmp = rootReactNode[0][node.name];
				if (!tmp) tmp = {};
				const props = { ...node.attrs };
				if (shouldUnescape) Object.keys(props).forEach((p) => {
					const val = props[p];
					if (isString(val)) props[p] = unescape(val);
				});
				const child = Object.keys(props).length !== 0 ? mergeProps({ props }, tmp) : tmp;
				const isElement = isValidElement(child);
				const isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
				const isEmptyTransWithHTML = emptyChildrenButNeedsHandling && isObject(child) && child.dummy && !isElement;
				const isKnownComponent = isObject(knownComponentsMap) && Object.hasOwnProperty.call(knownComponentsMap, node.name);
				if (isString(child)) {
					const value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
					mem.push(value);
				} else if (hasChildren(child) || isValidTranslationWithChildren) pushTranslatedJSX(child, renderInner(child, node, rootReactNode), mem, i);
				else if (isEmptyTransWithHTML) pushTranslatedJSX(child, mapAST(reactNodes, node.children, rootReactNode), mem, i);
				else if (Number.isNaN(parseFloat(node.name))) if (isKnownComponent) pushTranslatedJSX(child, renderInner(child, node, rootReactNode), mem, i, node.voidElement);
				else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) if (node.voidElement) mem.push(createElement(node.name, { key: `${node.name}-${i}` }));
				else {
					const inner = mapAST(reactNodes, node.children, rootReactNode);
					mem.push(createElement(node.name, { key: `${node.name}-${i}` }, inner));
				}
				else if (node.voidElement) mem.push(`<${node.name} />`);
				else {
					const inner = mapAST(reactNodes, node.children, rootReactNode);
					mem.push(`<${node.name}>${inner}</${node.name}>`);
				}
				else if (isObject(child) && !isElement) {
					const content = node.children[0] ? translationContent : null;
					if (content) mem.push(content);
				} else pushTranslatedJSX(child, translationContent, mem, i, node.children.length !== 1 || !translationContent);
			} else if (node.type === "text") {
				const wrapTextNodes = i18nOptions.transWrapTextNodes;
				const unescapeFn = typeof i18nOptions.unescape === "function" ? i18nOptions.unescape : getDefaults().unescape;
				const content = shouldUnescape ? unescapeFn(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);
				if (wrapTextNodes) mem.push(createElement(wrapTextNodes, { key: `${node.name}-${i}` }, content));
				else mem.push(content);
			}
			return mem;
		}, []);
	};
	return getChildren(mapAST([{
		dummy: true,
		children: children || []
	}], ast, getAsArray(children || []))[0]);
};
var fixComponentProps = (component, index, translation) => {
	const componentKey = component.key || index;
	const comp = cloneElement(component, { key: componentKey });
	if (!comp.props || !comp.props.children || translation.indexOf(`${index}/>`) < 0 && translation.indexOf(`${index} />`) < 0) return comp;
	function Componentized() {
		return createElement(Fragment, null, comp);
	}
	return createElement(Componentized, { key: componentKey });
};
var generateArrayComponents = (components, translation) => components.map((c, index) => fixComponentProps(c, index, translation));
var generateObjectComponents = (components, translation) => {
	const componentMap = {};
	Object.keys(components).forEach((c) => {
		Object.assign(componentMap, { [c]: fixComponentProps(components[c], c, translation) });
	});
	return componentMap;
};
var generateComponents = (components, translation, i18n, i18nKey) => {
	if (!components) return null;
	if (Array.isArray(components)) return generateArrayComponents(components, translation);
	if (isObject(components)) return generateObjectComponents(components, translation);
	warnOnce(i18n, "TRANS_INVALID_COMPONENTS", `<Trans /> "components" prop expects an object or array`, { i18nKey });
	return null;
};
var isComponentsMap = (object) => {
	if (!isObject(object)) return false;
	if (Array.isArray(object)) return false;
	return Object.keys(object).reduce((acc, key) => acc && Number.isNaN(Number.parseFloat(key)), true);
};
function Trans$1({ children, count, parent, i18nKey, context, tOptions = {}, values, defaults, components, ns, i18n: i18nFromProps, t: tFromProps, shouldUnescape, ...additionalProps }) {
	const i18n = i18nFromProps || getI18n();
	if (!i18n) {
		warnOnce(i18n, "NO_I18NEXT_INSTANCE", `Trans: You need to pass in an i18next instance using i18nextReactModule`, { i18nKey });
		return children;
	}
	const t = tFromProps || i18n.t.bind(i18n) || ((k) => k);
	const reactI18nextOptions = {
		...getDefaults(),
		...i18n.options?.react
	};
	let namespaces = ns || t.ns || i18n.options?.defaultNS;
	namespaces = isString(namespaces) ? [namespaces] : namespaces || ["translation"];
	const { transDefaultProps } = reactI18nextOptions;
	const mergedTOptions = transDefaultProps?.tOptions ? {
		...transDefaultProps.tOptions,
		...tOptions
	} : tOptions;
	const mergedShouldUnescape = shouldUnescape ?? transDefaultProps?.shouldUnescape;
	const mergedValues = transDefaultProps?.values ? {
		...transDefaultProps.values,
		...values
	} : values;
	const mergedComponents = transDefaultProps?.components ? {
		...transDefaultProps.components,
		...components
	} : components;
	const nodeAsString = nodesToString(children, reactI18nextOptions, i18n, i18nKey);
	const defaultValue = defaults || mergedTOptions?.defaultValue || nodeAsString || reactI18nextOptions.transEmptyNodeValue || (typeof i18nKey === "function" ? keysFromSelector(i18nKey) : i18nKey);
	const { hashTransKey } = reactI18nextOptions;
	const key = i18nKey || (hashTransKey ? hashTransKey(nodeAsString || defaultValue) : nodeAsString || defaultValue);
	if (i18n.options?.interpolation?.defaultVariables) values = mergedValues && Object.keys(mergedValues).length > 0 ? {
		...mergedValues,
		...i18n.options.interpolation.defaultVariables
	} : { ...i18n.options.interpolation.defaultVariables };
	else values = mergedValues;
	const valuesFromChildren = getValuesFromChildren(children);
	if (valuesFromChildren && typeof valuesFromChildren.count === "number" && count === void 0) count = valuesFromChildren.count;
	const interpolationOverride = values || count !== void 0 && !i18n.options?.interpolation?.alwaysFormat || !children ? mergedTOptions.interpolation : { interpolation: {
		...mergedTOptions.interpolation,
		prefix: "#$?",
		suffix: "?$#"
	} };
	const combinedTOpts = {
		...mergedTOptions,
		context: context || mergedTOptions.context,
		count,
		...values,
		...interpolationOverride,
		defaultValue,
		ns: namespaces
	};
	let translation = key ? t(key, combinedTOpts) : defaultValue;
	if (translation === key && defaultValue) translation = defaultValue;
	const generatedComponents = generateComponents(mergedComponents, translation, i18n, i18nKey);
	let indexedChildren = generatedComponents || children;
	let componentsMap = null;
	if (isComponentsMap(generatedComponents)) {
		componentsMap = generatedComponents;
		indexedChildren = children;
	}
	const content = renderNodes(indexedChildren, componentsMap, translation, i18n, reactI18nextOptions, combinedTOpts, mergedShouldUnescape);
	const useAsParent = parent ?? reactI18nextOptions.defaultTransParent;
	return useAsParent ? createElement(useAsParent, additionalProps, content) : content;
}
//#endregion
//#region node_modules/.pnpm/react-i18next@16.6.1_i18next@25.10.4_typescript@5.9.3__react-dom@19.2.4_react@19.2.4__react@19.2.4_typescript@5.9.3/node_modules/react-i18next/dist/es/Trans.js
function Trans({ children, count, parent, i18nKey, context, tOptions = {}, values, defaults, components, ns, i18n: i18nFromProps, t: tFromProps, shouldUnescape, ...additionalProps }) {
	const { i18n: i18nFromContext, defaultNS: defaultNSFromContext } = useContext(I18nContext) || {};
	const i18n = i18nFromProps || i18nFromContext || getI18n();
	const t = tFromProps || i18n?.t.bind(i18n);
	return Trans$1({
		children,
		count,
		parent,
		i18nKey,
		context,
		tOptions,
		values,
		defaults,
		components,
		ns: ns || t?.ns || defaultNSFromContext || i18n?.options?.defaultNS,
		i18n,
		t: tFromProps,
		shouldUnescape,
		...additionalProps
	});
}
//#endregion
export { Trans as t };
