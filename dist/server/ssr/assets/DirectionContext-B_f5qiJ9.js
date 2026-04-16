import * as React$1 from "react";
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/direction-provider/DirectionContext.js
/**
* @internal
*/
var DirectionContext = /* @__PURE__ */ React$1.createContext(void 0);
function useDirection() {
	return React$1.useContext(DirectionContext)?.direction ?? "ltr";
}
//#endregion
export { useDirection as t };
