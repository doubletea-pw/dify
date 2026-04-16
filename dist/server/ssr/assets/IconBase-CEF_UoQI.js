import * as React$1 from "react";
//#region app/components/base/icons/utils.ts
function normalizeAttrs(attrs = {}) {
	return Object.keys(attrs).reduce((acc, key) => {
		if (key.startsWith("inkscape:") || key.startsWith("sodipodi:") || key.startsWith("xmlns:inkscape") || key.startsWith("xmlns:sodipodi") || key.startsWith("xmlns:svg") || key === "data-name") return acc;
		const val = attrs[key];
		if (val === void 0) return acc;
		key = key.replace(/(-\w)/g, (g) => g[1].toUpperCase());
		key = key.replace(/(:\w)/g, (g) => g[1].toUpperCase());
		if (key === "xmlnsInkscape" || key === "xmlnsSodipodi" || key === "xmlnsSvg" || key === "dataName") return acc;
		switch (key) {
			case "class":
				acc.className = val;
				delete acc.class;
				break;
			case "style":
				acc.style = val.split(";").reduce((prev, next) => {
					const pairs = next?.split(":");
					if (pairs[0] && pairs[1]) {
						const k = pairs[0].replace(/(-\w)/g, (g) => g[1].toUpperCase());
						prev[k] = pairs[1];
					}
					return prev;
				}, {});
				break;
			default: acc[key] = val;
		}
		return acc;
	}, {});
}
function generate(node, key, rootProps) {
	if (!rootProps) return React$1.createElement(node.name, {
		key,
		...normalizeAttrs(node.attributes)
	}, (node.children || []).map((child, index) => generate(child, `${key}-${node.name}-${index}`)));
	return React$1.createElement(node.name, {
		key,
		...normalizeAttrs(node.attributes),
		...rootProps
	}, (node.children || []).map((child, index) => generate(child, `${key}-${node.name}-${index}`)));
}
//#endregion
//#region app/components/base/icons/IconBase.tsx
var IconBase = ({ ref, ...props }) => {
	const { data, className, onClick, style, ...restProps } = props;
	return generate(data.icon, `svg-${data.name}`, {
		className,
		onClick,
		style,
		"data-icon": data.name,
		"aria-hidden": "true",
		...restProps,
		"ref": ref
	});
};
IconBase.displayName = "IconBase";
//#endregion
export { IconBase as t };
