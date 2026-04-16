import { t as cn } from "./classnames-LHQnX9lX.js";
import * as React$1 from "react";
import { jsx } from "react/jsx-runtime";
//#region app/components/base/chat/chat/loading-anim/style.module.css
var text = "_text_1ttqr_46";
var avatar = "_avatar_1ttqr_71";
var style_module_default = {
	"dot-flashing": "_dot-flashing_1ttqr_1",
	text,
	avatar,
	"dot-flashing-avatar": "_dot-flashing-avatar_1ttqr_1"
};
//#endregion
//#region app/components/base/chat/chat/loading-anim/index.tsx
var LoadingAnim = ({ type }) => {
	return /* @__PURE__ */ jsx("div", { className: cn(style_module_default["dot-flashing"], style_module_default[type]) });
};
var loading_anim_default = React$1.memo(LoadingAnim);
//#endregion
export { loading_anim_default as t };
