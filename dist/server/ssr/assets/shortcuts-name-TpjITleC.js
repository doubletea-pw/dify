import { t as cn } from "./classnames-LHQnX9lX.js";
import { _n as getKeyboardKeyNameBySystem } from "./utils-DqpfZ3W-.js";
import { memo } from "react";
import { jsx } from "react/jsx-runtime";
//#region app/components/workflow/shortcuts-name.tsx
var ShortcutsName = ({ keys, className, textColor = "default", bgColor = "gray" }) => {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex items-center gap-0.5", className),
		children: keys.map((key) => /* @__PURE__ */ jsx("div", {
			className: cn("system-kbd flex h-4 min-w-4 items-center justify-center rounded-[4px] px-1 capitalize", bgColor === "gray" && "bg-components-kbd-bg-gray", bgColor === "white" && "bg-components-kbd-bg-white text-text-primary-on-surface", textColor === "secondary" && "text-text-tertiary"),
			children: getKeyboardKeyNameBySystem(key)
		}, key))
	});
};
var shortcuts_name_default = memo(ShortcutsName);
//#endregion
export { shortcuts_name_default as t };
