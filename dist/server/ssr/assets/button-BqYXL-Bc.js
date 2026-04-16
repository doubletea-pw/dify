import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as cva } from "./dist-1O6DB-eK.js";
import { m as useButton, t as useRenderElement } from "./useRenderElement-BTEjG3-d.js";
import * as React$1 from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/button/Button.js
/**
* A button component that can be used to trigger actions.
* Renders a `<button>` element.
*
* Documentation: [Base UI Button](https://base-ui.com/react/components/button)
*/
var Button$1 = /* @__PURE__ */ React$1.forwardRef(function Button(componentProps, forwardedRef) {
	const { render, className, disabled = false, focusableWhenDisabled = false, nativeButton = true, ...elementProps } = componentProps;
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		focusableWhenDisabled,
		native: nativeButton
	});
	return useRenderElement("button", componentProps, {
		state: { disabled },
		ref: [forwardedRef, buttonRef],
		props: [elementProps, getButtonProps]
	});
});
//#endregion
//#region app/components/base/spinner/index.tsx
var Spinner = ({ loading = false, children, className }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: `inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-gray-200 ${loading ? "motion-reduce:animate-[spin_1.5s_linear_infinite]" : "hidden"} ${className ?? ""}`,
		role: "status",
		children: [/* @__PURE__ */ jsx("span", {
			className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
			children: "Loading..."
		}), children]
	});
};
//#endregion
//#region app/components/base/button/index.tsx
var buttonVariants = cva("btn", {
	variants: {
		variant: {
			"primary": "btn-primary",
			"warning": "btn-warning",
			"secondary": "btn-secondary",
			"secondary-accent": "btn-secondary-accent",
			"ghost": "btn-ghost",
			"ghost-accent": "btn-ghost-accent",
			"tertiary": "btn-tertiary"
		},
		size: {
			small: "btn-small",
			medium: "btn-medium",
			large: "btn-large"
		},
		destructive: { true: "btn-destructive" }
	},
	defaultVariants: {
		variant: "secondary",
		size: "medium"
	}
});
var Button = ({ className, variant, size, destructive, loading, children, spinnerClassName, ref, render, focusableWhenDisabled, disabled, type = "button", ...props }) => {
	const isDisabled = disabled || loading;
	return /* @__PURE__ */ jsxs(Button$1, {
		type,
		className: cn(buttonVariants({
			variant,
			size,
			destructive,
			className
		})),
		ref,
		render,
		...props,
		disabled: isDisabled,
		focusableWhenDisabled,
		"aria-busy": loading || void 0,
		children: [children, loading && /* @__PURE__ */ jsx(Spinner, {
			loading,
			className: cn("!ml-1 !h-3 !w-3 !border-2 !text-white", spinnerClassName)
		})]
	});
};
Button.displayName = "Button";
//#endregion
export { Spinner as n, Button as t };
