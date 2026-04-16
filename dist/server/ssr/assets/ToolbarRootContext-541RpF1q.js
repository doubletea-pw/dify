import { g as formatErrorMessage } from "./useRenderElement-BTEjG3-d.js";
import * as React$1 from "react";
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toolbar/root/ToolbarRootContext.js
var ToolbarRootContext = /* @__PURE__ */ React$1.createContext(void 0);
function useToolbarRootContext(optional) {
	const context = React$1.useContext(ToolbarRootContext);
	if (context === void 0 && !optional) throw new Error(formatErrorMessage(69));
	return context;
}
//#endregion
export { useToolbarRootContext as t };
