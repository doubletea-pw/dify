import { l as Theme } from "./app-DPjSIfgb.js";
import { n as z } from "./dist-CGvyUAMR.js";
//#region hooks/use-theme.ts
var useTheme = () => {
	const { theme, resolvedTheme, ...rest } = z();
	return {
		theme: theme === Theme.system ? resolvedTheme : theme,
		...rest
	};
};
//#endregion
export { useTheme as t };
