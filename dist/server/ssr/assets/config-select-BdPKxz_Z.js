import { Mr as p, ct as M6, k as Ek } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as require_dist } from "./dist-BcmQ9DaV.js";
import * as React$1 from "react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/app/configuration/config-var/config-select/index.tsx
var import_dist = require_dist();
var ConfigSelect = ({ options, onChange }) => {
	const { t } = useTranslation();
	const [focusID, setFocusID] = useState(null);
	const [deletingID, setDeletingID] = useState(null);
	const optionList = options.map((content, index) => {
		return {
			id: index,
			name: content
		};
	});
	return /* @__PURE__ */ jsxs("div", { children: [options.length > 0 && /* @__PURE__ */ jsx("div", {
		className: "mb-1",
		children: /* @__PURE__ */ jsx(import_dist.ReactSortable, {
			className: "space-y-1",
			list: optionList,
			setList: (list) => onChange(list.map((item) => item.name)),
			handle: ".handle",
			ghostClass: "opacity-50",
			animation: 150,
			children: options.map((o, index) => /* @__PURE__ */ jsxs("div", {
				className: cn("group relative flex items-center rounded-lg border border-components-panel-border-subtle bg-components-panel-on-panel-item-bg pl-2.5 hover:bg-components-panel-on-panel-item-bg-hover", focusID === index && "border-components-input-border-active bg-components-input-bg-active hover:border-components-input-border-active hover:bg-components-input-bg-active", deletingID === index && "border-components-input-border-destructive bg-state-destructive-hover hover:border-components-input-border-destructive hover:bg-state-destructive-hover"),
				children: [
					/* @__PURE__ */ jsx(Ek, { className: "handle h-4 w-4 cursor-grab text-text-quaternary" }),
					/* @__PURE__ */ jsx("input", {
						type: "input",
						value: o || "",
						onChange: (e) => {
							const value = e.target.value;
							onChange(options.map((item, i) => {
								if (index === i) return value;
								return item;
							}));
						},
						className: "h-9 w-full grow cursor-pointer overflow-x-auto rounded-lg border-0 bg-transparent pl-1.5 pr-8 text-sm leading-9 text-text-secondary focus:outline-none",
						onFocus: () => setFocusID(index),
						onBlur: () => setFocusID(null)
					}, index),
					/* @__PURE__ */ jsx("div", {
						role: "button",
						className: "absolute right-1.5 top-1/2 block translate-y-[-50%] cursor-pointer rounded-md p-1 text-text-tertiary hover:bg-state-destructive-hover hover:text-text-destructive",
						onClick: () => {
							onChange(options.filter((_, i) => index !== i));
							setDeletingID(null);
						},
						onMouseEnter: () => setDeletingID(index),
						onMouseLeave: () => setDeletingID(null),
						children: /* @__PURE__ */ jsx(M6, { className: "h-3.5 w-3.5" })
					})
				]
			}, index))
		})
	}), /* @__PURE__ */ jsxs("div", {
		onClick: () => {
			onChange([...options, ""]);
		},
		className: "mt-1 flex h-9 cursor-pointer items-center gap-2 rounded-lg bg-components-button-tertiary-bg px-3  text-components-button-tertiary-text hover:bg-components-button-tertiary-bg-hover",
		children: [/* @__PURE__ */ jsx(p, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("div", {
			className: "system-sm-medium text-[13px]",
			children: t("variableConfig.addOption", { ns: "appDebug" })
		})]
	})] });
};
var config_select_default = React$1.memo(ConfigSelect);
//#endregion
export { config_select_default as t };
