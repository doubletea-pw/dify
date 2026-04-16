import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as cva } from "./dist-1O6DB-eK.js";
import * as React$1 from "react";
import { jsx } from "react/jsx-runtime";
//#region app/components/base/textarea/index.tsx
var textareaVariants = cva("", {
	variants: { size: {
		small: "rounded-md py-1 system-xs-regular",
		regular: "rounded-md px-3 system-sm-regular",
		large: "rounded-lg px-4 system-md-regular"
	} },
	defaultVariants: { size: "regular" }
});
var Textarea = React$1.forwardRef(({ className, value, onChange, disabled, size, destructive, styleCss, onFocus, onBlur, ...props }, ref) => {
	return /* @__PURE__ */ jsx("textarea", {
		ref,
		onFocus,
		onBlur,
		style: styleCss,
		className: cn("min-h-20 w-full appearance-none border border-transparent bg-components-input-bg-normal p-2 text-components-input-text-filled caret-primary-600 outline-none placeholder:text-components-input-text-placeholder hover:border-components-input-border-hover hover:bg-components-input-bg-hover focus:border-components-input-border-active focus:bg-components-input-bg-active focus:shadow-xs", textareaVariants({ size }), disabled && "cursor-not-allowed border-transparent bg-components-input-bg-disabled text-components-input-text-filled-disabled hover:border-transparent hover:bg-components-input-bg-disabled", destructive && "border-components-input-border-destructive bg-components-input-bg-destructive text-components-input-text-filled hover:border-components-input-border-destructive hover:bg-components-input-bg-destructive focus:border-components-input-border-destructive focus:bg-components-input-bg-destructive", className),
		value: value ?? "",
		onChange,
		disabled,
		"data-testid": "text-area",
		...props
	});
});
Textarea.displayName = "Textarea";
//#endregion
export { Textarea as t };
