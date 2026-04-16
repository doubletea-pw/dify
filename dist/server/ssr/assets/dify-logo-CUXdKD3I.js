import { m as __exportAll } from "../index.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as basePath } from "./var-DPpHtpXT.js";
import { t as useTheme } from "./use-theme-3YxPQV4B.js";
import { jsx } from "react/jsx-runtime";
//#region app/components/base/logo/dify-logo.tsx
var dify_logo_exports = /* @__PURE__ */ __exportAll({
	default: () => DifyLogo,
	logoPathMap: () => logoPathMap,
	logoSizeMap: () => logoSizeMap
});
var logoPathMap = {
	default: "/logo/logo.svg",
	monochromeWhite: "/logo/logo-monochrome-white.svg"
};
var logoSizeMap = {
	large: "w-16 h-7",
	medium: "w-12 h-[22px]",
	small: "w-9 h-4"
};
var DifyLogo = ({ style = "default", size = "medium", className }) => {
	const { theme } = useTheme();
	return /* @__PURE__ */ jsx("img", {
		src: `${basePath}${logoPathMap[theme === "dark" && style === "default" ? "monochromeWhite" : style]}`,
		className: cn("block object-contain", logoSizeMap[size], className),
		alt: "Dify logo"
	});
};
//#endregion
export { dify_logo_exports as n, DifyLogo as t };
