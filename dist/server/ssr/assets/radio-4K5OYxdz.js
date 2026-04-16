import { n as useContext$1, t as createContext$1 } from "./dist-mUzjAi-W.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { useId } from "react";
import { jsx } from "react/jsx-runtime";
//#region app/components/base/radio/context/index.ts
var RadioGroupContext = createContext$1(null);
var style_module_default = {
	container: "_container_1vnf5_1",
	label: "_label_1vnf5_6"
};
//#endregion
//#region app/components/base/radio/component/group/index.tsx
function Group({ children, value, onChange, className = "" }) {
	const onRadioChange = (value) => {
		onChange?.(value);
	};
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex items-center bg-workflow-block-parma-bg text-text-secondary", style_module_default.container, className),
		children: /* @__PURE__ */ jsx(RadioGroupContext.Provider, {
			value: {
				value,
				onChange: onRadioChange
			},
			children
		})
	});
}
//#endregion
//#region app/components/base/radio/component/radio/index.tsx
function Radio$1({ className = "", labelClassName, children = "", checked, value, disabled, onChange }) {
	const groupContext = useContext$1(RadioGroupContext);
	const labelId = useId();
	const handleChange = (e) => {
		if (disabled) return;
		onChange?.(e);
		groupContext?.onChange(e);
	};
	const isChecked = groupContext ? groupContext.value === value : checked;
	return /* @__PURE__ */ jsx("div", {
		className: cn(style_module_default.label, disabled ? style_module_default.disabled : "", isChecked ? "bg-components-option-card-option-bg-hover shadow-xs" : "", `
    flex items-center py-1 relative
    px-7 cursor-pointer text-text-secondary rounded
    hover:bg-components-option-card-option-bg-hover hover:shadow-xs
  `, className),
		onClick: () => handleChange(value),
		children: !!children && /* @__PURE__ */ jsx("label", {
			className: cn(labelClassName, "cursor-pointer text-sm"),
			id: labelId,
			children
		})
	});
}
//#endregion
//#region app/components/base/radio/index.tsx
var Radio = Radio$1;
/**
* Radio 组件出现一般是以一组的形式出现
*/
Radio.Group = Group;
//#endregion
export { Radio as t };
