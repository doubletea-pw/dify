import { Bn as bb, Vt as S7, a as $l, rr as f1 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { r as AppModeEnum } from "./app-DPjSIfgb.js";
import { i as PopoverTrigger, r as PopoverContent, t as Popover } from "./popover-CTEbJchz.js";
import { a as Icon, n as Icon$1, o as Icon$2, r as Icon$3 } from "./communication-BPZjiuBr.js";
import * as React$1 from "react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/app/type-selector/index.tsx
var allTypes = [
	AppModeEnum.WORKFLOW,
	AppModeEnum.ADVANCED_CHAT,
	AppModeEnum.CHAT,
	AppModeEnum.AGENT_CHAT,
	AppModeEnum.COMPLETION
];
var AppTypeSelector = ({ value, onChange }) => {
	const [open, setOpen] = useState(false);
	const { t } = useTranslation();
	const triggerLabel = value.length === 0 ? t("typeSelector.all", { ns: "app" }) : value.map((type) => getAppTypeLabel(type, t)).join(", ");
	return /* @__PURE__ */ jsx(Popover, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ jsx(PopoverTrigger, {
					"aria-label": triggerLabel,
					className: cn("flex cursor-pointer items-center justify-between rounded-md px-2 hover:bg-state-base-hover", value.length > 0 && "pr-7"),
					children: /* @__PURE__ */ jsx(AppTypeSelectTrigger, { values: value })
				}),
				value.length > 0 && /* @__PURE__ */ jsx("button", {
					type: "button",
					"aria-label": t("operation.clear", { ns: "common" }),
					className: "group absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2",
					onClick: () => onChange([]),
					children: /* @__PURE__ */ jsx(S7, { className: "h-3.5 w-3.5 text-text-quaternary group-hover:text-text-tertiary" })
				}),
				/* @__PURE__ */ jsx(PopoverContent, {
					placement: "bottom-start",
					sideOffset: 4,
					popupClassName: "w-[240px] rounded-xl border border-components-panel-border bg-components-panel-bg-blur shadow-lg backdrop-blur-[5px]",
					children: /* @__PURE__ */ jsx("ul", {
						className: "relative w-full p-1",
						children: allTypes.map((mode) => /* @__PURE__ */ jsx(AppTypeSelectorItem, {
							type: mode,
							checked: Boolean(value.length > 0 && value?.indexOf(mode) !== -1),
							onClick: () => {
								if (value?.indexOf(mode) !== -1) onChange(value?.filter((v) => v !== mode) ?? []);
								else onChange([...value || [], mode]);
							}
						}, mode))
					})
				})
			]
		})
	});
};
var AppTypeIcon = React$1.memo(({ type, className, wrapperClassName, style }) => {
	const wrapperClassNames = cn("inline-flex h-5 w-5 items-center justify-center rounded-md border border-divider-regular", wrapperClassName);
	const iconClassNames = cn("h-3.5 w-3.5 text-components-avatar-shape-fill-stop-100", className);
	if (type === AppModeEnum.CHAT) return /* @__PURE__ */ jsx("div", {
		style,
		className: cn(wrapperClassNames, "bg-components-icon-bg-blue-solid"),
		children: /* @__PURE__ */ jsx(Icon, { className: iconClassNames })
	});
	if (type === AppModeEnum.AGENT_CHAT) return /* @__PURE__ */ jsx("div", {
		style,
		className: cn(wrapperClassNames, "bg-components-icon-bg-violet-solid"),
		children: /* @__PURE__ */ jsx(Icon$1, { className: iconClassNames })
	});
	if (type === AppModeEnum.ADVANCED_CHAT) return /* @__PURE__ */ jsx("div", {
		style,
		className: cn(wrapperClassNames, "bg-components-icon-bg-blue-light-solid"),
		children: /* @__PURE__ */ jsx(Icon$2, { className: iconClassNames })
	});
	if (type === AppModeEnum.WORKFLOW) return /* @__PURE__ */ jsx("div", {
		style,
		className: cn(wrapperClassNames, "bg-components-icon-bg-indigo-solid"),
		children: /* @__PURE__ */ jsx(bb, { className: iconClassNames })
	});
	if (type === AppModeEnum.COMPLETION) return /* @__PURE__ */ jsx("div", {
		style,
		className: cn(wrapperClassNames, "bg-components-icon-bg-teal-solid"),
		children: /* @__PURE__ */ jsx(Icon$3, { className: iconClassNames })
	});
	return null;
});
function AppTypeSelectTrigger({ values }) {
	const { t } = useTranslation();
	if (!values || values.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-8 items-center justify-between gap-1"),
		children: [
			/* @__PURE__ */ jsx($l, { className: "h-4 w-4 text-text-tertiary" }),
			/* @__PURE__ */ jsx("div", {
				className: "system-sm-medium min-w-[65px] grow text-center text-text-tertiary",
				children: t("typeSelector.all", { ns: "app" })
			}),
			/* @__PURE__ */ jsx(f1, { className: "h-4 w-4 text-text-tertiary" })
		]
	});
	if (values.length === 1) return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-8 flex-nowrap items-center justify-between gap-1"),
		children: [/* @__PURE__ */ jsx(AppTypeIcon, { type: values[0] }), /* @__PURE__ */ jsx("div", {
			className: "line-clamp-1 flex flex-1 items-center text-center",
			children: /* @__PURE__ */ jsx(AppTypeLabel, {
				type: values[0],
				className: "system-sm-medium text-components-menu-item-text"
			})
		})]
	});
	return /* @__PURE__ */ jsx("div", {
		className: cn("relative flex h-8 items-center justify-between -space-x-2"),
		children: values.map((mode, index) => /* @__PURE__ */ jsx(AppTypeIcon, {
			type: mode,
			wrapperClassName: "border border-components-panel-on-panel-item-bg",
			style: { zIndex: 5 - index }
		}, mode))
	});
}
function AppTypeSelectorItem({ checked, type, onClick }) {
	return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
		type: "button",
		className: "flex w-full items-center space-x-2 rounded-lg py-1 pl-2 pr-1 text-left hover:bg-state-base-hover",
		"aria-pressed": checked,
		onClick,
		children: [
			/* @__PURE__ */ jsx("span", {
				"aria-hidden": "true",
				className: cn("flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] shadow-xs shadow-shadow-shadow-3", checked ? "bg-components-checkbox-bg text-components-checkbox-icon" : "border border-components-checkbox-border bg-components-checkbox-bg-unchecked"),
				children: checked && /* @__PURE__ */ jsx("span", { className: "i-ri-check-line h-3 w-3" })
			}),
			/* @__PURE__ */ jsx(AppTypeIcon, { type }),
			/* @__PURE__ */ jsx("div", {
				className: "grow p-1 pl-0",
				children: /* @__PURE__ */ jsx(AppTypeLabel, {
					type,
					className: "system-sm-medium text-components-menu-item-text"
				})
			})
		]
	}) });
}
function getAppTypeLabel(type, t) {
	if (type === AppModeEnum.CHAT) return t("typeSelector.chatbot", { ns: "app" });
	if (type === AppModeEnum.AGENT_CHAT) return t("typeSelector.agent", { ns: "app" });
	if (type === AppModeEnum.COMPLETION) return t("typeSelector.completion", { ns: "app" });
	if (type === AppModeEnum.ADVANCED_CHAT) return t("typeSelector.advanced", { ns: "app" });
	if (type === AppModeEnum.WORKFLOW) return t("typeSelector.workflow", { ns: "app" });
	return "";
}
function AppTypeLabel({ type, className }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("span", {
		className,
		children: getAppTypeLabel(type, t)
	});
}
//#endregion
export { AppTypeLabel as n, AppTypeSelector as r, AppTypeIcon as t };
