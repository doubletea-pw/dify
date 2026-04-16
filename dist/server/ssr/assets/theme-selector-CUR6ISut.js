import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as ActionButton } from "./action-button-BK9WUMzU.js";
import { n as z } from "./dist-CGvyUAMR.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/theme-selector.tsx
function ThemeSelector() {
	const { t } = useTranslation();
	const { theme, setTheme } = z();
	const [open, setOpen] = useState(false);
	const handleThemeChange = (newTheme) => {
		setTheme(newTheme);
		setOpen(false);
	};
	const getCurrentIcon = () => {
		switch (theme) {
			case "light": return /* @__PURE__ */ jsx("span", { className: "i-ri-sun-line h-4 w-4 text-text-tertiary" });
			case "dark": return /* @__PURE__ */ jsx("span", { className: "i-ri-moon-line h-4 w-4 text-text-tertiary" });
			default: return /* @__PURE__ */ jsx("span", { className: "i-ri-computer-line h-4 w-4 text-text-tertiary" });
		}
	};
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-end",
		offset: { mainAxis: 6 },
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen(!open),
			children: /* @__PURE__ */ jsx(ActionButton, {
				className: `h-8 w-8 p-[6px] ${open && "bg-state-base-hover"}`,
				children: getCurrentIcon()
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[1000]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex w-[144px] flex-col items-start rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-1 shadow-lg",
				children: [
					/* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "flex w-full items-center gap-1 rounded-lg px-2 py-1.5 text-text-secondary hover:bg-state-base-hover",
						onClick: () => handleThemeChange("light"),
						children: [
							/* @__PURE__ */ jsx("span", { className: "i-ri-sun-line h-4 w-4 text-text-tertiary" }),
							/* @__PURE__ */ jsx("div", {
								className: "flex grow items-center justify-start px-1",
								children: /* @__PURE__ */ jsx("span", {
									className: "system-md-regular",
									children: t("theme.light", { ns: "common" })
								})
							}),
							theme === "light" && /* @__PURE__ */ jsx("div", {
								className: "flex h-4 w-4 shrink-0 items-center justify-center",
								children: /* @__PURE__ */ jsx("span", {
									className: "i-ri-check-line h-4 w-4 text-text-accent",
									"data-testid": "light-icon"
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "flex w-full items-center gap-1 rounded-lg px-2 py-1.5 text-text-secondary hover:bg-state-base-hover",
						onClick: () => handleThemeChange("dark"),
						children: [
							/* @__PURE__ */ jsx("span", { className: "i-ri-moon-line h-4 w-4 text-text-tertiary" }),
							/* @__PURE__ */ jsx("div", {
								className: "flex grow items-center justify-start px-1",
								children: /* @__PURE__ */ jsx("span", {
									className: "system-md-regular",
									children: t("theme.dark", { ns: "common" })
								})
							}),
							theme === "dark" && /* @__PURE__ */ jsx("div", {
								className: "flex h-4 w-4 shrink-0 items-center justify-center",
								children: /* @__PURE__ */ jsx("span", {
									className: "i-ri-check-line h-4 w-4 text-text-accent",
									"data-testid": "dark-icon"
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "flex w-full items-center gap-1 rounded-lg px-2 py-1.5 text-text-secondary hover:bg-state-base-hover",
						onClick: () => handleThemeChange("system"),
						children: [
							/* @__PURE__ */ jsx("span", { className: "i-ri-computer-line h-4 w-4 text-text-tertiary" }),
							/* @__PURE__ */ jsx("div", {
								className: "flex grow items-center justify-start px-1",
								children: /* @__PURE__ */ jsx("span", {
									className: "system-md-regular",
									children: t("theme.auto", { ns: "common" })
								})
							}),
							theme === "system" && /* @__PURE__ */ jsx("div", {
								className: "flex h-4 w-4 shrink-0 items-center justify-center",
								children: /* @__PURE__ */ jsx("span", {
									className: "i-ri-check-line h-4 w-4 text-text-accent",
									"data-testid": "system-icon"
								})
							})
						]
					})
				]
			})
		})]
	});
}
//#endregion
export { ThemeSelector as default };
