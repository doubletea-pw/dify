import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/agentation@2.3.3_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/agentation/dist/index.mjs
var css = ".styles-module__popup___IhzrD svg[fill=none] {\n  fill: none !important;\n}\n.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {\n  fill: none !important;\n}\n\n@keyframes styles-module__popupEnter___AuQDN {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) scale(0.95) translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) scale(1) translateY(0);\n  }\n}\n@keyframes styles-module__popupExit___JJKQX {\n  from {\n    opacity: 1;\n    transform: translateX(-50%) scale(1) translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateX(-50%) scale(0.95) translateY(4px);\n  }\n}\n@keyframes styles-module__shake___jdbWe {\n  0%, 100% {\n    transform: translateX(-50%) scale(1) translateY(0) translateX(0);\n  }\n  20% {\n    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);\n  }\n  40% {\n    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);\n  }\n  60% {\n    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);\n  }\n  80% {\n    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);\n  }\n}\n.styles-module__popup___IhzrD {\n  position: fixed;\n  transform: translateX(-50%);\n  width: 280px;\n  padding: 0.75rem 1rem 14px;\n  background: #1a1a1a;\n  border-radius: 16px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);\n  cursor: default;\n  z-index: 100001;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  will-change: transform, opacity;\n  opacity: 0;\n}\n.styles-module__popup___IhzrD.styles-module__enter___L7U7N {\n  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n.styles-module__popup___IhzrD.styles-module__entered___COX-w {\n  opacity: 1;\n  transform: translateX(-50%) scale(1) translateY(0);\n}\n.styles-module__popup___IhzrD.styles-module__exit___5eGjE {\n  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;\n}\n.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {\n  animation: styles-module__shake___jdbWe 0.25s ease-out;\n}\n\n.styles-module__header___wWsSi {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5625rem;\n}\n\n.styles-module__element___fTV2z {\n  font-size: 0.75rem;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.5);\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n}\n\n.styles-module__headerToggle___WpW0b {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  flex: 1;\n  min-width: 0;\n  text-align: left;\n}\n.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {\n  flex: 1;\n}\n\n.styles-module__chevron___ZZJlR {\n  color: rgba(255, 255, 255, 0.5);\n  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  flex-shrink: 0;\n}\n.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {\n  transform: rotate(90deg);\n}\n\n.styles-module__stylesWrapper___pnHgy {\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {\n  grid-template-rows: 1fr;\n}\n\n.styles-module__stylesInner___YYZe2 {\n  overflow: hidden;\n}\n\n.styles-module__stylesBlock___VfQKn {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 0.375rem;\n  padding: 0.5rem 0.625rem;\n  margin-bottom: 0.5rem;\n  font-family: ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, monospace;\n  font-size: 0.6875rem;\n  line-height: 1.5;\n}\n\n.styles-module__styleLine___1YQiD {\n  color: rgba(255, 255, 255, 0.85);\n  word-break: break-word;\n}\n\n.styles-module__styleProperty___84L1i {\n  color: #c792ea;\n}\n\n.styles-module__styleValue___q51-h {\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.styles-module__timestamp___Dtpsv {\n  font-size: 0.625rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.35);\n  font-variant-numeric: tabular-nums;\n  margin-left: 0.5rem;\n  flex-shrink: 0;\n}\n\n.styles-module__quote___mcMmQ {\n  font-size: 12px;\n  font-style: italic;\n  color: rgba(255, 255, 255, 0.6);\n  margin-bottom: 0.5rem;\n  padding: 0.4rem 0.5rem;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 0.25rem;\n  line-height: 1.45;\n}\n\n.styles-module__textarea___jrSae {\n  width: 100%;\n  padding: 0.5rem 0.625rem;\n  font-size: 0.8125rem;\n  font-family: inherit;\n  background: rgba(255, 255, 255, 0.05);\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  resize: none;\n  outline: none;\n  transition: border-color 0.15s ease;\n}\n.styles-module__textarea___jrSae:focus {\n  border-color: var(--agentation-color-blue);\n}\n.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {\n  border-color: var(--agentation-color-green);\n}\n.styles-module__textarea___jrSae::placeholder {\n  color: rgba(255, 255, 255, 0.35);\n}\n.styles-module__textarea___jrSae::-webkit-scrollbar {\n  width: 6px;\n}\n.styles-module__textarea___jrSae::-webkit-scrollbar-track {\n  background: transparent;\n}\n.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 3px;\n}\n\n.styles-module__actions___D6x3f {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.375rem;\n  margin-top: 0.5rem;\n}\n\n.styles-module__cancel___hRjnL,\n.styles-module__submit___K-mIR {\n  padding: 0.4rem 0.875rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  border-radius: 1rem;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;\n}\n\n.styles-module__cancel___hRjnL {\n  background: transparent;\n  color: rgba(255, 255, 255, 0.5);\n}\n.styles-module__cancel___hRjnL:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.styles-module__submit___K-mIR {\n  color: white;\n}\n.styles-module__submit___K-mIR:hover:not(:disabled) {\n  filter: brightness(0.9);\n}\n.styles-module__submit___K-mIR:disabled {\n  cursor: not-allowed;\n}\n\n.styles-module__deleteWrapper___oSjdo {\n  margin-right: auto;\n}\n\n.styles-module__deleteButton___4VuAE {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.4);\n  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;\n}\n.styles-module__deleteButton___4VuAE:hover {\n  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);\n  color: var(--agentation-color-red);\n}\n.styles-module__deleteButton___4VuAE:active {\n  transform: scale(0.92);\n}\n\n.styles-module__light___6AaSQ.styles-module__popup___IhzrD {\n  background: #fff;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);\n}\n.styles-module__light___6AaSQ .styles-module__element___fTV2z {\n  color: rgba(0, 0, 0, 0.6);\n}\n.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {\n  color: rgba(0, 0, 0, 0.4);\n}\n.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {\n  color: rgba(0, 0, 0, 0.4);\n}\n.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {\n  background: rgba(0, 0, 0, 0.03);\n}\n.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {\n  color: rgba(0, 0, 0, 0.75);\n}\n.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {\n  color: #7c3aed;\n}\n.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {\n  color: rgba(0, 0, 0, 0.75);\n}\n.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {\n  color: rgba(0, 0, 0, 0.55);\n  background: rgba(0, 0, 0, 0.04);\n}\n.styles-module__light___6AaSQ .styles-module__textarea___jrSae {\n  background: rgba(0, 0, 0, 0.03);\n  color: #1a1a1a;\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {\n  color: rgba(0, 0, 0, 0.4);\n}\n.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.15);\n}\n.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {\n  color: rgba(0, 0, 0, 0.5);\n}\n.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {\n  background: rgba(0, 0, 0, 0.06);\n  color: rgba(0, 0, 0, 0.75);\n}\n.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {\n  color: rgba(0, 0, 0, 0.4);\n}\n.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {\n  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);\n  color: var(--agentation-color-red);\n}";
var classNames = {
	"popup": "styles-module__popup___IhzrD",
	"enter": "styles-module__enter___L7U7N",
	"popupEnter": "styles-module__popupEnter___AuQDN",
	"entered": "styles-module__entered___COX-w",
	"exit": "styles-module__exit___5eGjE",
	"popupExit": "styles-module__popupExit___JJKQX",
	"shake": "styles-module__shake___jdbWe",
	"header": "styles-module__header___wWsSi",
	"element": "styles-module__element___fTV2z",
	"headerToggle": "styles-module__headerToggle___WpW0b",
	"chevron": "styles-module__chevron___ZZJlR",
	"expanded": "styles-module__expanded___2Hxgv",
	"stylesWrapper": "styles-module__stylesWrapper___pnHgy",
	"stylesInner": "styles-module__stylesInner___YYZe2",
	"stylesBlock": "styles-module__stylesBlock___VfQKn",
	"styleLine": "styles-module__styleLine___1YQiD",
	"styleProperty": "styles-module__styleProperty___84L1i",
	"styleValue": "styles-module__styleValue___q51-h",
	"timestamp": "styles-module__timestamp___Dtpsv",
	"quote": "styles-module__quote___mcMmQ",
	"textarea": "styles-module__textarea___jrSae",
	"green": "styles-module__green___99l3h",
	"actions": "styles-module__actions___D6x3f",
	"cancel": "styles-module__cancel___hRjnL",
	"submit": "styles-module__submit___K-mIR",
	"deleteWrapper": "styles-module__deleteWrapper___oSjdo",
	"deleteButton": "styles-module__deleteButton___4VuAE",
	"light": "styles-module__light___6AaSQ"
};
if (typeof document !== "undefined") {
	let style = document.getElementById("feedback-tool-styles-annotation-popup-css-styles");
	if (!style) {
		style = document.createElement("style");
		style.id = "feedback-tool-styles-annotation-popup-css-styles";
		style.textContent = css;
		document.head.appendChild(style);
	}
}
var styles_module_default = classNames;
var css2 = ".icon-transitions-module__iconState___uqK9J {\n  transition: opacity 0.2s ease, transform 0.2s ease;\n  transform-origin: center;\n}\n\n.icon-transitions-module__iconStateFast___HxlMm {\n  transition: opacity 0.15s ease, transform 0.15s ease;\n  transform-origin: center;\n}\n\n.icon-transitions-module__iconFade___nPwXg {\n  transition: opacity 0.2s ease;\n}\n\n.icon-transitions-module__iconFadeFast___Ofb2t {\n  transition: opacity 0.15s ease;\n}\n\n.icon-transitions-module__visible___PlHsU {\n  opacity: 1 !important;\n}\n\n.icon-transitions-module__visibleScaled___8Qog- {\n  opacity: 1 !important;\n  transform: scale(1);\n}\n\n.icon-transitions-module__hidden___ETykt {\n  opacity: 0 !important;\n}\n\n.icon-transitions-module__hiddenScaled___JXn-m {\n  opacity: 0 !important;\n  transform: scale(0.8);\n}\n\n.icon-transitions-module__sending___uaLN- {\n  opacity: 0.5 !important;\n  transform: scale(0.8);\n}";
var classNames2 = {
	"iconState": "icon-transitions-module__iconState___uqK9J",
	"iconStateFast": "icon-transitions-module__iconStateFast___HxlMm",
	"iconFade": "icon-transitions-module__iconFade___nPwXg",
	"iconFadeFast": "icon-transitions-module__iconFadeFast___Ofb2t",
	"visible": "icon-transitions-module__visible___PlHsU",
	"visibleScaled": "icon-transitions-module__visibleScaled___8Qog-",
	"hidden": "icon-transitions-module__hidden___ETykt",
	"hiddenScaled": "icon-transitions-module__hiddenScaled___JXn-m",
	"sending": "icon-transitions-module__sending___uaLN-"
};
if (typeof document !== "undefined") {
	let style = document.getElementById("feedback-tool-styles-components-icon-transitions");
	if (!style) {
		style = document.createElement("style");
		style.id = "feedback-tool-styles-components-icon-transitions";
		style.textContent = css2;
		document.head.appendChild(style);
	}
}
var icon_transitions_module_default = classNames2;
var IconClose = ({ size = 16 }) => /* @__PURE__ */ jsx("svg", {
	width: size,
	height: size,
	viewBox: "0 0 16 16",
	fill: "none",
	children: /* @__PURE__ */ jsx("path", {
		d: "M4 4l8 8M12 4l-8 8",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round"
	})
});
var IconPlus = ({ size = 16 }) => /* @__PURE__ */ jsx("svg", {
	width: size,
	height: size,
	viewBox: "0 0 16 16",
	fill: "none",
	children: /* @__PURE__ */ jsx("path", {
		d: "M8 3v10M3 8h10",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round"
	})
});
var IconListSparkle = ({ size = 24, style = {} }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	style,
	children: [/* @__PURE__ */ jsxs("g", {
		clipPath: "url(#clip0_list_sparkle)",
		children: [
			/* @__PURE__ */ jsx("path", {
				d: "M11.5 12L5.5 12",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M18.5 6.75L5.5 6.75",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M9.25 17.25L5.5 17.25",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinejoin: "round"
			})
		]
	}), /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", {
		id: "clip0_list_sparkle",
		children: /* @__PURE__ */ jsx("rect", {
			width: "24",
			height: "24",
			fill: "white"
		})
	}) })]
});
var IconHelp = ({ size = 20, ...props }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 20 20",
	fill: "none",
	...props,
	children: [
		/* @__PURE__ */ jsx("circle", {
			cx: "10",
			cy: "10",
			r: "6",
			stroke: "currentColor",
			strokeWidth: "1.25"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M8.24 8.19C8.38 7.78 8.66 7.44 9.03 7.23C9.4 7.01 9.84 6.93 10.26 7C10.68 7.07 11.06 7.29 11.34 7.62C11.61 7.95 11.76 8.36 11.76 8.79152C11.76 10 10 10.6 10 10.6V10.83",
			stroke: "currentColor",
			strokeWidth: "1.25",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "10",
			cy: "13",
			r: "0.625",
			fill: "currentColor"
		})
	]
});
var IconCheckSmallAnimated = ({ size = 14 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 14 14",
	fill: "none",
	children: [/* @__PURE__ */ jsx("style", { children: `
      @keyframes checkDraw {
        0% {
          stroke-dashoffset: 12;
        }
        100% {
          stroke-dashoffset: 0;
        }
      }
      @keyframes checkBounce {
        0% {
          transform: scale(0.5);
          opacity: 0;
        }
        50% {
          transform: scale(1.12);
          opacity: 1;
        }
        75% {
          transform: scale(0.95);
        }
        100% {
          transform: scale(1);
        }
      }
      .check-path-animated {
        stroke-dasharray: 12;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: checkDraw 0.18s ease-out, checkBounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
    ` }), /* @__PURE__ */ jsx("path", {
		className: "check-path-animated",
		d: "M3.9375 7L6.125 9.1875L10.5 4.8125",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
});
var IconCopyAnimated = ({ size = 24, copied = false }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	children: [/* @__PURE__ */ jsxs("g", {
		className: `${icon_transitions_module_default.iconState} ${copied ? icon_transitions_module_default.hiddenScaled : icon_transitions_module_default.visibleScaled}`,
		children: [/* @__PURE__ */ jsx("path", {
			d: "M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}), /* @__PURE__ */ jsx("path", {
			d: "M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		})]
	}), /* @__PURE__ */ jsxs("g", {
		className: `${icon_transitions_module_default.iconState} ${copied ? icon_transitions_module_default.visibleScaled : icon_transitions_module_default.hiddenScaled}`,
		children: [/* @__PURE__ */ jsx("path", {
			d: "M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",
			stroke: "var(--agentation-color-green)",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ jsx("path", {
			d: "M15 10L11 14.25L9.25 12.25",
			stroke: "var(--agentation-color-green)",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	})]
});
var IconSendArrow = ({ size = 24, state = "idle" }) => {
	const showArrow = state === "idle";
	const showCheck = state === "sent";
	const showError = state === "failed";
	const isSending = state === "sending";
	return /* @__PURE__ */ jsxs("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		children: [
			/* @__PURE__ */ jsx("g", {
				className: `${icon_transitions_module_default.iconStateFast} ${showArrow ? icon_transitions_module_default.visibleScaled : isSending ? icon_transitions_module_default.sending : icon_transitions_module_default.hiddenScaled}`,
				children: /* @__PURE__ */ jsx("path", {
					d: "M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",
					stroke: "currentColor",
					strokeWidth: "1.5",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			}),
			/* @__PURE__ */ jsxs("g", {
				className: `${icon_transitions_module_default.iconStateFast} ${showCheck ? icon_transitions_module_default.visibleScaled : icon_transitions_module_default.hiddenScaled}`,
				children: [/* @__PURE__ */ jsx("path", {
					d: "M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",
					stroke: "var(--agentation-color-green)",
					strokeWidth: "1.5",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}), /* @__PURE__ */ jsx("path", {
					d: "M15 10L11 14.25L9.25 12.25",
					stroke: "var(--agentation-color-green)",
					strokeWidth: "1.5",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})]
			}),
			/* @__PURE__ */ jsxs("g", {
				className: `${icon_transitions_module_default.iconStateFast} ${showError ? icon_transitions_module_default.visibleScaled : icon_transitions_module_default.hiddenScaled}`,
				children: [
					/* @__PURE__ */ jsx("path", {
						d: "M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",
						stroke: "var(--agentation-color-red)",
						strokeWidth: "1.5",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M12 8V12",
						stroke: "var(--agentation-color-red)",
						strokeWidth: "1.5",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "12",
						cy: "15",
						r: "0.5",
						fill: "var(--agentation-color-red)",
						stroke: "var(--agentation-color-red)",
						strokeWidth: "1"
					})
				]
			})
		]
	});
};
var IconEyeAnimated = ({ size = 24, isOpen = true }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	children: [/* @__PURE__ */ jsxs("g", {
		className: `${icon_transitions_module_default.iconFade} ${isOpen ? icon_transitions_module_default.visible : icon_transitions_module_default.hidden}`,
		children: [/* @__PURE__ */ jsx("path", {
			d: "M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ jsx("path", {
			d: "M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	}), /* @__PURE__ */ jsxs("g", {
		className: `${icon_transitions_module_default.iconFade} ${isOpen ? icon_transitions_module_default.hidden : icon_transitions_module_default.visible}`,
		children: [/* @__PURE__ */ jsx("path", {
			d: "M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",
			fill: "currentColor"
		}), /* @__PURE__ */ jsx("path", {
			d: "M5 19L19 5",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		})]
	})]
});
var IconPausePlayAnimated = ({ size = 24, isPaused = false }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	children: [/* @__PURE__ */ jsxs("g", {
		className: `${icon_transitions_module_default.iconFadeFast} ${isPaused ? icon_transitions_module_default.hidden : icon_transitions_module_default.visible}`,
		children: [/* @__PURE__ */ jsx("path", {
			d: "M8 6L8 18",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		}), /* @__PURE__ */ jsx("path", {
			d: "M16 18L16 6",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		})]
	}), /* @__PURE__ */ jsx("path", {
		className: `${icon_transitions_module_default.iconFadeFast} ${isPaused ? icon_transitions_module_default.visible : icon_transitions_module_default.hidden}`,
		d: "M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",
		stroke: "currentColor",
		strokeWidth: "1.5"
	})]
});
var IconGear = ({ size = 16 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	children: [/* @__PURE__ */ jsx("path", {
		d: "M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /* @__PURE__ */ jsx("circle", {
		cx: "12",
		cy: "12",
		r: "2.5",
		stroke: "currentColor",
		strokeWidth: "1.5"
	})]
});
var IconTrashAlt = ({ size = 16 }) => /* @__PURE__ */ jsx("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	children: /* @__PURE__ */ jsx("path", {
		d: "M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",
		fill: "currentColor"
	})
});
var IconXmark = ({ size = 16 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	children: [/* @__PURE__ */ jsxs("g", {
		clipPath: "url(#clip0_2_53)",
		children: [/* @__PURE__ */ jsx("path", {
			d: "M16.25 16.25L7.75 7.75",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ jsx("path", {
			d: "M7.75 16.25L16.25 7.75",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	}), /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", {
		id: "clip0_2_53",
		children: /* @__PURE__ */ jsx("rect", {
			width: "24",
			height: "24",
			fill: "white"
		})
	}) })]
});
var IconXmarkLarge = ({ size = 24 }) => /* @__PURE__ */ jsx("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	children: /* @__PURE__ */ jsx("path", {
		d: "M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",
		fill: "currentColor"
	})
});
var IconSun = ({ size = 16 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 20 20",
	fill: "none",
	children: [
		/* @__PURE__ */ jsx("path", {
			d: "M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",
			stroke: "currentColor",
			strokeWidth: "1.25",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M10 3.9585V5.05698",
			stroke: "currentColor",
			strokeWidth: "1.25",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M10 14.9429V16.0414",
			stroke: "currentColor",
			strokeWidth: "1.25",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M5.7269 5.72656L6.50682 6.50649",
			stroke: "currentColor",
			strokeWidth: "1.25",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M13.4932 13.4932L14.2731 14.2731",
			stroke: "currentColor",
			strokeWidth: "1.25",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M3.95834 10H5.05683",
			stroke: "currentColor",
			strokeWidth: "1.25",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M14.9432 10H16.0417",
			stroke: "currentColor",
			strokeWidth: "1.25",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M5.7269 14.2731L6.50682 13.4932",
			stroke: "currentColor",
			strokeWidth: "1.25",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M13.4932 6.50649L14.2731 5.72656",
			stroke: "currentColor",
			strokeWidth: "1.25",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	]
});
var IconMoon = ({ size = 16 }) => /* @__PURE__ */ jsx("svg", {
	width: size,
	height: size,
	viewBox: "0 0 20 20",
	fill: "none",
	children: /* @__PURE__ */ jsx("path", {
		d: "M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",
		stroke: "currentColor",
		strokeWidth: "1.13793",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
});
var IconEdit = ({ size = 16 }) => /* @__PURE__ */ jsx("svg", {
	width: size,
	height: size,
	viewBox: "0 0 16 16",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ jsx("path", {
		d: "M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",
		stroke: "currentColor",
		strokeWidth: "0.9",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
});
var IconTrash = ({ size = 24 }) => /* @__PURE__ */ jsx("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ jsx("path", {
		d: "M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",
		fill: "currentColor"
	})
});
var IconChevronLeft = ({ size = 16 }) => /* @__PURE__ */ jsx("svg", {
	width: size,
	height: size,
	viewBox: "0 0 16 16",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ jsx("path", {
		d: "M8.5 3.5L4 8L8.5 12.5",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
});
var EXCLUDE_ATTRS = [
	"data-feedback-toolbar",
	"data-annotation-popup",
	"data-annotation-marker"
];
var NOT_SELECTORS = EXCLUDE_ATTRS.flatMap((a) => [`:not([${a}])`, `:not([${a}] *)`]).join("");
var STYLE_ID = "feedback-freeze-styles";
var STATE_KEY = "__agentation_freeze";
function getState() {
	if (typeof window === "undefined") return {
		frozen: false,
		installed: true,
		origSetTimeout: setTimeout,
		origSetInterval: setInterval,
		origRAF: (cb) => 0,
		pausedAnimations: [],
		frozenTimeoutQueue: [],
		frozenRAFQueue: []
	};
	const w = window;
	if (!w[STATE_KEY]) w[STATE_KEY] = {
		frozen: false,
		installed: false,
		origSetTimeout: null,
		origSetInterval: null,
		origRAF: null,
		pausedAnimations: [],
		frozenTimeoutQueue: [],
		frozenRAFQueue: []
	};
	return w[STATE_KEY];
}
var _s = getState();
if (typeof window !== "undefined" && !_s.installed) {
	_s.origSetTimeout = window.setTimeout.bind(window);
	_s.origSetInterval = window.setInterval.bind(window);
	_s.origRAF = window.requestAnimationFrame.bind(window);
	window.setTimeout = (handler, timeout, ...args) => {
		if (typeof handler === "string") return _s.origSetTimeout(handler, timeout);
		return _s.origSetTimeout((...a) => {
			if (_s.frozen) _s.frozenTimeoutQueue.push(() => handler(...a));
			else handler(...a);
		}, timeout, ...args);
	};
	window.setInterval = (handler, timeout, ...args) => {
		if (typeof handler === "string") return _s.origSetInterval(handler, timeout);
		return _s.origSetInterval((...a) => {
			if (!_s.frozen) handler(...a);
		}, timeout, ...args);
	};
	window.requestAnimationFrame = (callback) => {
		return _s.origRAF((timestamp) => {
			if (_s.frozen) _s.frozenRAFQueue.push(callback);
			else callback(timestamp);
		});
	};
	_s.installed = true;
}
var originalSetTimeout = _s.origSetTimeout;
var originalSetInterval = _s.origSetInterval;
function isAgentationElement(el) {
	if (!el) return false;
	return EXCLUDE_ATTRS.some((attr) => !!el.closest?.(`[${attr}]`));
}
function freeze() {
	if (typeof document === "undefined") return;
	if (_s.frozen) return;
	_s.frozen = true;
	_s.frozenTimeoutQueue = [];
	_s.frozenRAFQueue = [];
	let style = document.getElementById(STYLE_ID);
	if (!style) {
		style = document.createElement("style");
		style.id = STYLE_ID;
	}
	style.textContent = `
    *${NOT_SELECTORS},
    *${NOT_SELECTORS}::before,
    *${NOT_SELECTORS}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `;
	document.head.appendChild(style);
	_s.pausedAnimations = [];
	try {
		document.getAnimations().forEach((anim) => {
			if (anim.playState !== "running") return;
			const target = anim.effect?.target;
			if (!isAgentationElement(target)) {
				anim.pause();
				_s.pausedAnimations.push(anim);
			}
		});
	} catch {}
	document.querySelectorAll("video").forEach((video) => {
		if (!video.paused) {
			video.dataset.wasPaused = "false";
			video.pause();
		}
	});
}
function unfreeze() {
	if (typeof document === "undefined") return;
	if (!_s.frozen) return;
	_s.frozen = false;
	const timeoutQueue = _s.frozenTimeoutQueue;
	_s.frozenTimeoutQueue = [];
	for (const cb of timeoutQueue) _s.origSetTimeout(() => {
		if (_s.frozen) {
			_s.frozenTimeoutQueue.push(cb);
			return;
		}
		try {
			cb();
		} catch (e) {
			console.warn("[agentation] Error replaying queued timeout:", e);
		}
	}, 0);
	const rafQueue = _s.frozenRAFQueue;
	_s.frozenRAFQueue = [];
	for (const cb of rafQueue) _s.origRAF((ts) => {
		if (_s.frozen) {
			_s.frozenRAFQueue.push(cb);
			return;
		}
		cb(ts);
	});
	for (const anim of _s.pausedAnimations) try {
		anim.play();
	} catch (e) {
		console.warn("[agentation] Error resuming animation:", e);
	}
	_s.pausedAnimations = [];
	document.getElementById(STYLE_ID)?.remove();
	document.querySelectorAll("video").forEach((video) => {
		if (video.dataset.wasPaused === "false") {
			video.play().catch(() => {});
			delete video.dataset.wasPaused;
		}
	});
}
function focusBypassingTraps(el) {
	if (!el) return;
	const trap = (e) => e.stopImmediatePropagation();
	document.addEventListener("focusin", trap, true);
	document.addEventListener("focusout", trap, true);
	try {
		el.focus();
	} finally {
		document.removeEventListener("focusin", trap, true);
		document.removeEventListener("focusout", trap, true);
	}
}
var AnnotationPopupCSS = forwardRef(function AnnotationPopupCSS2({ element, timestamp, selectedText, placeholder = "What should change?", initialValue = "", submitLabel = "Add", onSubmit, onCancel, onDelete, style, accentColor = "#3c82f7", isExiting = false, lightMode = false, computedStyles }, ref) {
	const [text, setText] = useState(initialValue);
	const [isShaking, setIsShaking] = useState(false);
	const [animState, setAnimState] = useState("initial");
	const [isFocused, setIsFocused] = useState(false);
	const [isStylesExpanded, setIsStylesExpanded] = useState(false);
	const textareaRef = useRef(null);
	const popupRef = useRef(null);
	const cancelTimerRef = useRef(null);
	const shakeTimerRef = useRef(null);
	useEffect(() => {
		if (isExiting && animState !== "exit") setAnimState("exit");
	}, [isExiting, animState]);
	useEffect(() => {
		originalSetTimeout(() => {
			setAnimState("enter");
		}, 0);
		const enterTimer = originalSetTimeout(() => {
			setAnimState("entered");
		}, 200);
		const focusTimer = originalSetTimeout(() => {
			const textarea = textareaRef.current;
			if (textarea) {
				focusBypassingTraps(textarea);
				textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
				textarea.scrollTop = textarea.scrollHeight;
			}
		}, 50);
		return () => {
			clearTimeout(enterTimer);
			clearTimeout(focusTimer);
			if (cancelTimerRef.current) clearTimeout(cancelTimerRef.current);
			if (shakeTimerRef.current) clearTimeout(shakeTimerRef.current);
		};
	}, []);
	const shake = useCallback(() => {
		if (shakeTimerRef.current) clearTimeout(shakeTimerRef.current);
		setIsShaking(true);
		shakeTimerRef.current = originalSetTimeout(() => {
			setIsShaking(false);
			focusBypassingTraps(textareaRef.current);
		}, 250);
	}, []);
	useImperativeHandle(ref, () => ({ shake }), [shake]);
	const handleCancel = useCallback(() => {
		setAnimState("exit");
		cancelTimerRef.current = originalSetTimeout(() => {
			onCancel();
		}, 150);
	}, [onCancel]);
	const handleSubmit = useCallback(() => {
		if (!text.trim()) return;
		onSubmit(text.trim());
	}, [text, onSubmit]);
	const handleKeyDown = useCallback((e) => {
		e.stopPropagation();
		if (e.nativeEvent.isComposing) return;
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSubmit();
		}
		if (e.key === "Escape") handleCancel();
	}, [handleSubmit, handleCancel]);
	return /* @__PURE__ */ jsxs("div", {
		ref: popupRef,
		className: [
			styles_module_default.popup,
			lightMode ? styles_module_default.light : "",
			animState === "enter" ? styles_module_default.enter : "",
			animState === "entered" ? styles_module_default.entered : "",
			animState === "exit" ? styles_module_default.exit : "",
			isShaking ? styles_module_default.shake : ""
		].filter(Boolean).join(" "),
		"data-annotation-popup": true,
		style,
		onClick: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: styles_module_default.header,
				children: [computedStyles && Object.keys(computedStyles).length > 0 ? /* @__PURE__ */ jsxs("button", {
					className: styles_module_default.headerToggle,
					onClick: () => {
						const wasExpanded = isStylesExpanded;
						setIsStylesExpanded(!isStylesExpanded);
						if (wasExpanded) originalSetTimeout(() => focusBypassingTraps(textareaRef.current), 0);
					},
					type: "button",
					children: [/* @__PURE__ */ jsx("svg", {
						className: `${styles_module_default.chevron} ${isStylesExpanded ? styles_module_default.expanded : ""}`,
						width: "14",
						height: "14",
						viewBox: "0 0 14 14",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: /* @__PURE__ */ jsx("path", {
							d: "M5.5 10.25L9 7.25L5.75 4",
							stroke: "currentColor",
							strokeWidth: "1.5",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					}), /* @__PURE__ */ jsx("span", {
						className: styles_module_default.element,
						children: element
					})]
				}) : /* @__PURE__ */ jsx("span", {
					className: styles_module_default.element,
					children: element
				}), timestamp && /* @__PURE__ */ jsx("span", {
					className: styles_module_default.timestamp,
					children: timestamp
				})]
			}),
			computedStyles && Object.keys(computedStyles).length > 0 && /* @__PURE__ */ jsx("div", {
				className: `${styles_module_default.stylesWrapper} ${isStylesExpanded ? styles_module_default.expanded : ""}`,
				children: /* @__PURE__ */ jsx("div", {
					className: styles_module_default.stylesInner,
					children: /* @__PURE__ */ jsx("div", {
						className: styles_module_default.stylesBlock,
						children: Object.entries(computedStyles).map(([key, value]) => /* @__PURE__ */ jsxs("div", {
							className: styles_module_default.styleLine,
							children: [
								/* @__PURE__ */ jsx("span", {
									className: styles_module_default.styleProperty,
									children: key.replace(/([A-Z])/g, "-$1").toLowerCase()
								}),
								": ",
								/* @__PURE__ */ jsx("span", {
									className: styles_module_default.styleValue,
									children: value
								}),
								";"
							]
						}, key))
					})
				})
			}),
			selectedText && /* @__PURE__ */ jsxs("div", {
				className: styles_module_default.quote,
				children: [
					"“",
					selectedText.slice(0, 80),
					selectedText.length > 80 ? "..." : "",
					"”"
				]
			}),
			/* @__PURE__ */ jsx("textarea", {
				ref: textareaRef,
				className: styles_module_default.textarea,
				style: { borderColor: isFocused ? accentColor : void 0 },
				placeholder,
				value: text,
				onChange: (e) => setText(e.target.value),
				onFocus: () => setIsFocused(true),
				onBlur: () => setIsFocused(false),
				rows: 2,
				onKeyDown: handleKeyDown
			}),
			/* @__PURE__ */ jsxs("div", {
				className: styles_module_default.actions,
				children: [
					onDelete && /* @__PURE__ */ jsx("div", {
						className: styles_module_default.deleteWrapper,
						children: /* @__PURE__ */ jsx("button", {
							className: styles_module_default.deleteButton,
							onClick: onDelete,
							type: "button",
							children: /* @__PURE__ */ jsx(IconTrash, { size: 22 })
						})
					}),
					/* @__PURE__ */ jsx("button", {
						className: styles_module_default.cancel,
						onClick: handleCancel,
						children: "Cancel"
					}),
					/* @__PURE__ */ jsx("button", {
						className: styles_module_default.submit,
						style: {
							backgroundColor: accentColor,
							opacity: text.trim() ? 1 : .4
						},
						onClick: handleSubmit,
						disabled: !text.trim(),
						children: submitLabel
					})
				]
			})
		]
	});
});
function getParentElement(element) {
	if (element.parentElement) return element.parentElement;
	const root = element.getRootNode();
	if (root instanceof ShadowRoot) return root.host;
	return null;
}
function closestCrossingShadow(element, selector) {
	let current = element;
	while (current) {
		if (current.matches(selector)) return current;
		current = getParentElement(current);
	}
	return null;
}
function getElementPath(target, maxDepth = 4) {
	const parts = [];
	let current = target;
	let depth = 0;
	while (current && depth < maxDepth) {
		const tag = current.tagName.toLowerCase();
		if (tag === "html" || tag === "body") break;
		let identifier = tag;
		if (current.id) identifier = `#${current.id}`;
		else if (current.className && typeof current.className === "string") {
			const meaningfulClass = current.className.split(/\s+/).find((c) => c.length > 2 && !c.match(/^[a-z]{1,2}$/) && !c.match(/[A-Z0-9]{5,}/));
			if (meaningfulClass) identifier = `.${meaningfulClass.split("_")[0]}`;
		}
		const nextParent = getParentElement(current);
		if (!current.parentElement && nextParent) identifier = `\u27E8shadow\u27E9 ${identifier}`;
		parts.unshift(identifier);
		current = nextParent;
		depth++;
	}
	return parts.join(" > ");
}
function identifyElement(target) {
	const path = getElementPath(target);
	if (target.dataset.element) return {
		name: target.dataset.element,
		path
	};
	const tag = target.tagName.toLowerCase();
	if ([
		"path",
		"circle",
		"rect",
		"line",
		"g"
	].includes(tag)) {
		const svg = closestCrossingShadow(target, "svg");
		if (svg) {
			const parent = getParentElement(svg);
			if (parent instanceof HTMLElement) return {
				name: `graphic in ${identifyElement(parent).name}`,
				path
			};
		}
		return {
			name: "graphic element",
			path
		};
	}
	if (tag === "svg") {
		const parent = getParentElement(target);
		if (parent?.tagName.toLowerCase() === "button") {
			const btnText = parent.textContent?.trim();
			return {
				name: btnText ? `icon in "${btnText}" button` : "button icon",
				path
			};
		}
		return {
			name: "icon",
			path
		};
	}
	if (tag === "button") {
		const text = target.textContent?.trim();
		const ariaLabel = target.getAttribute("aria-label");
		if (ariaLabel) return {
			name: `button [${ariaLabel}]`,
			path
		};
		return {
			name: text ? `button "${text.slice(0, 25)}"` : "button",
			path
		};
	}
	if (tag === "a") {
		const text = target.textContent?.trim();
		const href = target.getAttribute("href");
		if (text) return {
			name: `link "${text.slice(0, 25)}"`,
			path
		};
		if (href) return {
			name: `link to ${href.slice(0, 30)}`,
			path
		};
		return {
			name: "link",
			path
		};
	}
	if (tag === "input") {
		const type = target.getAttribute("type") || "text";
		const placeholder = target.getAttribute("placeholder");
		const name = target.getAttribute("name");
		if (placeholder) return {
			name: `input "${placeholder}"`,
			path
		};
		if (name) return {
			name: `input [${name}]`,
			path
		};
		return {
			name: `${type} input`,
			path
		};
	}
	if ([
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6"
	].includes(tag)) {
		const text = target.textContent?.trim();
		return {
			name: text ? `${tag} "${text.slice(0, 35)}"` : tag,
			path
		};
	}
	if (tag === "p") {
		const text = target.textContent?.trim();
		if (text) return {
			name: `paragraph: "${text.slice(0, 40)}${text.length > 40 ? "..." : ""}"`,
			path
		};
		return {
			name: "paragraph",
			path
		};
	}
	if (tag === "span" || tag === "label") {
		const text = target.textContent?.trim();
		if (text && text.length < 40) return {
			name: `"${text}"`,
			path
		};
		return {
			name: tag,
			path
		};
	}
	if (tag === "li") {
		const text = target.textContent?.trim();
		if (text && text.length < 40) return {
			name: `list item: "${text.slice(0, 35)}"`,
			path
		};
		return {
			name: "list item",
			path
		};
	}
	if (tag === "blockquote") return {
		name: "blockquote",
		path
	};
	if (tag === "code") {
		const text = target.textContent?.trim();
		if (text && text.length < 30) return {
			name: `code: \`${text}\``,
			path
		};
		return {
			name: "code",
			path
		};
	}
	if (tag === "pre") return {
		name: "code block",
		path
	};
	if (tag === "img") {
		const alt = target.getAttribute("alt");
		return {
			name: alt ? `image "${alt.slice(0, 30)}"` : "image",
			path
		};
	}
	if (tag === "video") return {
		name: "video",
		path
	};
	if ([
		"div",
		"section",
		"article",
		"nav",
		"header",
		"footer",
		"aside",
		"main"
	].includes(tag)) {
		const className = target.className;
		const role = target.getAttribute("role");
		const ariaLabel = target.getAttribute("aria-label");
		if (ariaLabel) return {
			name: `${tag} [${ariaLabel}]`,
			path
		};
		if (role) return {
			name: `${role}`,
			path
		};
		if (typeof className === "string" && className) {
			const words = className.split(/[\s_-]+/).map((c) => c.replace(/[A-Z0-9]{5,}.*$/, "")).filter((c) => c.length > 2 && !/^[a-z]{1,2}$/.test(c)).slice(0, 2);
			if (words.length > 0) return {
				name: words.join(" "),
				path
			};
		}
		return {
			name: tag === "div" ? "container" : tag,
			path
		};
	}
	return {
		name: tag,
		path
	};
}
function getNearbyText(element) {
	const texts = [];
	const ownText = element.textContent?.trim();
	if (ownText && ownText.length < 100) texts.push(ownText);
	const prev = element.previousElementSibling;
	if (prev) {
		const prevText = prev.textContent?.trim();
		if (prevText && prevText.length < 50) texts.unshift(`[before: "${prevText.slice(0, 40)}"]`);
	}
	const next = element.nextElementSibling;
	if (next) {
		const nextText = next.textContent?.trim();
		if (nextText && nextText.length < 50) texts.push(`[after: "${nextText.slice(0, 40)}"]`);
	}
	return texts.join(" ");
}
function getNearbyElements(element) {
	const parent = getParentElement(element);
	if (!parent) return "";
	const siblings = (element.getRootNode() instanceof ShadowRoot && element.parentElement ? Array.from(element.parentElement.children) : Array.from(parent.children)).filter((child) => child !== element && child instanceof HTMLElement);
	if (siblings.length === 0) return "";
	const siblingIds = siblings.slice(0, 4).map((sib) => {
		const tag = sib.tagName.toLowerCase();
		const className = sib.className;
		let cls = "";
		if (typeof className === "string" && className) {
			const meaningful = className.split(/\s+/).map((c) => c.replace(/[_][a-zA-Z0-9]{5,}.*$/, "")).find((c) => c.length > 2 && !/^[a-z]{1,2}$/.test(c));
			if (meaningful) cls = `.${meaningful}`;
		}
		if (tag === "button" || tag === "a") {
			const text = sib.textContent?.trim().slice(0, 15);
			if (text) return `${tag}${cls} "${text}"`;
		}
		return `${tag}${cls}`;
	});
	let parentId = parent.tagName.toLowerCase();
	if (typeof parent.className === "string" && parent.className) {
		const parentCls = parent.className.split(/\s+/).map((c) => c.replace(/[_][a-zA-Z0-9]{5,}.*$/, "")).find((c) => c.length > 2 && !/^[a-z]{1,2}$/.test(c));
		if (parentCls) parentId = `.${parentCls}`;
	}
	const total = parent.children.length;
	const suffix = total > siblingIds.length + 1 ? ` (${total} total in ${parentId})` : "";
	return siblingIds.join(", ") + suffix;
}
function getElementClasses(target) {
	const className = target.className;
	if (typeof className !== "string" || !className) return "";
	return className.split(/\s+/).filter((c) => c.length > 0).map((c) => {
		const match = c.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);
		return match ? match[1] : c;
	}).filter((c, i, arr) => arr.indexOf(c) === i).join(", ");
}
var DEFAULT_STYLE_VALUES = /* @__PURE__ */ new Set([
	"none",
	"normal",
	"auto",
	"0px",
	"rgba(0, 0, 0, 0)",
	"transparent",
	"static",
	"visible"
]);
var TEXT_ELEMENTS = /* @__PURE__ */ new Set([
	"p",
	"span",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"label",
	"li",
	"td",
	"th",
	"blockquote",
	"figcaption",
	"caption",
	"legend",
	"dt",
	"dd",
	"pre",
	"code",
	"em",
	"strong",
	"b",
	"i",
	"a",
	"time",
	"cite",
	"q"
]);
var FORM_INPUT_ELEMENTS = /* @__PURE__ */ new Set([
	"input",
	"textarea",
	"select"
]);
var MEDIA_ELEMENTS = /* @__PURE__ */ new Set([
	"img",
	"video",
	"canvas",
	"svg"
]);
var CONTAINER_ELEMENTS = /* @__PURE__ */ new Set([
	"div",
	"section",
	"article",
	"nav",
	"header",
	"footer",
	"aside",
	"main",
	"ul",
	"ol",
	"form",
	"fieldset"
]);
function getDetailedComputedStyles(target) {
	if (typeof window === "undefined") return {};
	const styles = window.getComputedStyle(target);
	const result = {};
	const tag = target.tagName.toLowerCase();
	let properties;
	if (TEXT_ELEMENTS.has(tag)) properties = [
		"color",
		"fontSize",
		"fontWeight",
		"fontFamily",
		"lineHeight"
	];
	else if (tag === "button" || tag === "a" && target.getAttribute("role") === "button") properties = [
		"backgroundColor",
		"color",
		"padding",
		"borderRadius",
		"fontSize"
	];
	else if (FORM_INPUT_ELEMENTS.has(tag)) properties = [
		"backgroundColor",
		"color",
		"padding",
		"borderRadius",
		"fontSize"
	];
	else if (MEDIA_ELEMENTS.has(tag)) properties = [
		"width",
		"height",
		"objectFit",
		"borderRadius"
	];
	else if (CONTAINER_ELEMENTS.has(tag)) properties = [
		"display",
		"padding",
		"margin",
		"gap",
		"backgroundColor"
	];
	else properties = [
		"color",
		"fontSize",
		"margin",
		"padding",
		"backgroundColor"
	];
	for (const prop of properties) {
		const cssPropertyName = prop.replace(/([A-Z])/g, "-$1").toLowerCase();
		const value = styles.getPropertyValue(cssPropertyName);
		if (value && !DEFAULT_STYLE_VALUES.has(value)) result[prop] = value;
	}
	return result;
}
var FORENSIC_PROPERTIES = [
	"color",
	"backgroundColor",
	"borderColor",
	"fontSize",
	"fontWeight",
	"fontFamily",
	"lineHeight",
	"letterSpacing",
	"textAlign",
	"width",
	"height",
	"padding",
	"margin",
	"border",
	"borderRadius",
	"display",
	"position",
	"top",
	"right",
	"bottom",
	"left",
	"zIndex",
	"flexDirection",
	"justifyContent",
	"alignItems",
	"gap",
	"opacity",
	"visibility",
	"overflow",
	"boxShadow",
	"transform"
];
function getForensicComputedStyles(target) {
	if (typeof window === "undefined") return "";
	const styles = window.getComputedStyle(target);
	const parts = [];
	for (const prop of FORENSIC_PROPERTIES) {
		const cssPropertyName = prop.replace(/([A-Z])/g, "-$1").toLowerCase();
		const value = styles.getPropertyValue(cssPropertyName);
		if (value && !DEFAULT_STYLE_VALUES.has(value)) parts.push(`${cssPropertyName}: ${value}`);
	}
	return parts.join("; ");
}
function parseComputedStylesString(stylesStr) {
	if (!stylesStr) return void 0;
	const result = {};
	const parts = stylesStr.split(";").map((p) => p.trim()).filter(Boolean);
	for (const part of parts) {
		const colonIndex = part.indexOf(":");
		if (colonIndex > 0) {
			const key = part.slice(0, colonIndex).trim();
			const value = part.slice(colonIndex + 1).trim();
			if (key && value) result[key] = value;
		}
	}
	return Object.keys(result).length > 0 ? result : void 0;
}
function getAccessibilityInfo(target) {
	const parts = [];
	const role = target.getAttribute("role");
	const ariaLabel = target.getAttribute("aria-label");
	const ariaDescribedBy = target.getAttribute("aria-describedby");
	const tabIndex = target.getAttribute("tabindex");
	const ariaHidden = target.getAttribute("aria-hidden");
	if (role) parts.push(`role="${role}"`);
	if (ariaLabel) parts.push(`aria-label="${ariaLabel}"`);
	if (ariaDescribedBy) parts.push(`aria-describedby="${ariaDescribedBy}"`);
	if (tabIndex) parts.push(`tabindex=${tabIndex}`);
	if (ariaHidden === "true") parts.push("aria-hidden");
	if (target.matches("a, button, input, select, textarea, [tabindex]")) parts.push("focusable");
	return parts.join(", ");
}
function getFullElementPath(target) {
	const parts = [];
	let current = target;
	while (current && current.tagName.toLowerCase() !== "html") {
		const tag = current.tagName.toLowerCase();
		let identifier = tag;
		if (current.id) identifier = `${tag}#${current.id}`;
		else if (current.className && typeof current.className === "string") {
			const cls = current.className.split(/\s+/).map((c) => c.replace(/[_][a-zA-Z0-9]{5,}.*$/, "")).find((c) => c.length > 2);
			if (cls) identifier = `${tag}.${cls}`;
		}
		const nextParent = getParentElement(current);
		if (!current.parentElement && nextParent) identifier = `\u27E8shadow\u27E9 ${identifier}`;
		parts.unshift(identifier);
		current = nextParent;
	}
	return parts.join(" > ");
}
var STORAGE_PREFIX = "feedback-annotations-";
var DEFAULT_RETENTION_DAYS = 7;
function getStorageKey(pathname) {
	return `${STORAGE_PREFIX}${pathname}`;
}
function loadAnnotations(pathname) {
	if (typeof window === "undefined") return [];
	try {
		const stored = localStorage.getItem(getStorageKey(pathname));
		if (!stored) return [];
		const data = JSON.parse(stored);
		const cutoff = Date.now() - DEFAULT_RETENTION_DAYS * 24 * 60 * 60 * 1e3;
		return data.filter((a) => !a.timestamp || a.timestamp > cutoff);
	} catch {
		return [];
	}
}
function saveAnnotations(pathname, annotations) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(getStorageKey(pathname), JSON.stringify(annotations));
	} catch {}
}
function loadAllAnnotations() {
	const result = /* @__PURE__ */ new Map();
	if (typeof window === "undefined") return result;
	try {
		const cutoff = Date.now() - DEFAULT_RETENTION_DAYS * 24 * 60 * 60 * 1e3;
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if (key?.startsWith(STORAGE_PREFIX)) {
				const pathname = key.slice(STORAGE_PREFIX.length);
				const stored = localStorage.getItem(key);
				if (stored) {
					const filtered = JSON.parse(stored).filter((a) => !a.timestamp || a.timestamp > cutoff);
					if (filtered.length > 0) result.set(pathname, filtered);
				}
			}
		}
	} catch {}
	return result;
}
function saveAnnotationsWithSyncMarker(pathname, annotations, sessionId) {
	saveAnnotations(pathname, annotations.map((annotation) => ({
		...annotation,
		_syncedTo: sessionId
	})));
}
var SESSION_PREFIX = "agentation-session-";
function getSessionStorageKey(pathname) {
	return `${SESSION_PREFIX}${pathname}`;
}
function loadSessionId(pathname) {
	if (typeof window === "undefined") return null;
	try {
		return localStorage.getItem(getSessionStorageKey(pathname));
	} catch {
		return null;
	}
}
function saveSessionId(pathname, sessionId) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(getSessionStorageKey(pathname), sessionId);
	} catch {}
}
function clearSessionId(pathname) {
	if (typeof window === "undefined") return;
	try {
		localStorage.removeItem(getSessionStorageKey(pathname));
	} catch {}
}
var TOOLBAR_HIDDEN_SESSION_KEY = `${SESSION_PREFIX}toolbar-hidden`;
function loadToolbarHidden() {
	if (typeof window === "undefined") return false;
	try {
		return sessionStorage.getItem(TOOLBAR_HIDDEN_SESSION_KEY) === "1";
	} catch {
		return false;
	}
}
function saveToolbarHidden(hidden) {
	if (typeof window === "undefined") return;
	try {
		if (hidden) sessionStorage.setItem(TOOLBAR_HIDDEN_SESSION_KEY, "1");
		else sessionStorage.removeItem(TOOLBAR_HIDDEN_SESSION_KEY);
	} catch {}
}
async function createSession(endpoint, url) {
	const response = await fetch(`${endpoint}/sessions`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ url })
	});
	if (!response.ok) throw new Error(`Failed to create session: ${response.status}`);
	return response.json();
}
async function getSession(endpoint, sessionId) {
	const response = await fetch(`${endpoint}/sessions/${sessionId}`);
	if (!response.ok) throw new Error(`Failed to get session: ${response.status}`);
	return response.json();
}
async function syncAnnotation(endpoint, sessionId, annotation) {
	const response = await fetch(`${endpoint}/sessions/${sessionId}/annotations`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(annotation)
	});
	if (!response.ok) throw new Error(`Failed to sync annotation: ${response.status}`);
	return response.json();
}
async function updateAnnotation(endpoint, annotationId, data) {
	const response = await fetch(`${endpoint}/annotations/${annotationId}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data)
	});
	if (!response.ok) throw new Error(`Failed to update annotation: ${response.status}`);
	return response.json();
}
async function deleteAnnotation(endpoint, annotationId) {
	const response = await fetch(`${endpoint}/annotations/${annotationId}`, { method: "DELETE" });
	if (!response.ok) throw new Error(`Failed to delete annotation: ${response.status}`);
}
var FiberTags = {
	FunctionComponent: 0,
	ClassComponent: 1,
	IndeterminateComponent: 2,
	HostRoot: 3,
	HostPortal: 4,
	HostComponent: 5,
	HostText: 6,
	Fragment: 7,
	Mode: 8,
	ContextConsumer: 9,
	ContextProvider: 10,
	ForwardRef: 11,
	Profiler: 12,
	SuspenseComponent: 13,
	MemoComponent: 14,
	SimpleMemoComponent: 15,
	LazyComponent: 16,
	IncompleteClassComponent: 17,
	DehydratedFragment: 18,
	SuspenseListComponent: 19,
	ScopeComponent: 21,
	OffscreenComponent: 22,
	LegacyHiddenComponent: 23,
	CacheComponent: 24,
	TracingMarkerComponent: 25,
	HostHoistable: 26,
	HostSingleton: 27,
	IncompleteFunctionComponent: 28,
	Throw: 29,
	ViewTransitionComponent: 30,
	ActivityComponent: 31
};
var DEFAULT_SKIP_EXACT = /* @__PURE__ */ new Set([
	"Component",
	"PureComponent",
	"Fragment",
	"Suspense",
	"Profiler",
	"StrictMode",
	"Routes",
	"Route",
	"Outlet",
	"Root",
	"ErrorBoundaryHandler",
	"HotReload",
	"Hot"
]);
var DEFAULT_SKIP_PATTERNS = [
	/Boundary$/,
	/BoundaryHandler$/,
	/Provider$/,
	/Consumer$/,
	/^(Inner|Outer)/,
	/Router$/,
	/^Client(Page|Segment|Root)/,
	/^Segment(ViewNode|Node)$/,
	/^LayoutSegment/,
	/^Server(Root|Component|Render)/,
	/^RSC/,
	/Context$/,
	/^Hot(Reload)?$/,
	/^(Dev|React)(Overlay|Tools|Root)/,
	/Overlay$/,
	/Handler$/,
	/^With[A-Z]/,
	/Wrapper$/,
	/^Root$/
];
var DEFAULT_USER_PATTERNS = [
	/Page$/,
	/View$/,
	/Screen$/,
	/Section$/,
	/Card$/,
	/List$/,
	/Item$/,
	/Form$/,
	/Modal$/,
	/Dialog$/,
	/Button$/,
	/Nav$/,
	/Header$/,
	/Footer$/,
	/Layout$/,
	/Panel$/,
	/Tab$/,
	/Menu$/
];
function resolveConfig(config) {
	const mode = config?.mode ?? "filtered";
	let skipExact = DEFAULT_SKIP_EXACT;
	if (config?.skipExact) {
		const additional = config.skipExact instanceof Set ? config.skipExact : new Set(config.skipExact);
		skipExact = /* @__PURE__ */ new Set([...DEFAULT_SKIP_EXACT, ...additional]);
	}
	return {
		maxComponents: config?.maxComponents ?? 6,
		maxDepth: config?.maxDepth ?? 30,
		mode,
		skipExact,
		skipPatterns: config?.skipPatterns ? [...DEFAULT_SKIP_PATTERNS, ...config.skipPatterns] : DEFAULT_SKIP_PATTERNS,
		userPatterns: config?.userPatterns ?? DEFAULT_USER_PATTERNS,
		filter: config?.filter
	};
}
function normalizeComponentName(name) {
	return name.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function getAncestorClasses(element, maxDepth = 10) {
	const classes = /* @__PURE__ */ new Set();
	let current = element;
	let depth = 0;
	while (current && depth < maxDepth) {
		if (current.className && typeof current.className === "string") current.className.split(/\s+/).forEach((cls) => {
			if (cls.length > 1) {
				const normalized = cls.replace(/[_][a-zA-Z0-9]{5,}.*$/, "").toLowerCase();
				if (normalized.length > 1) classes.add(normalized);
			}
		});
		current = current.parentElement;
		depth++;
	}
	return classes;
}
function componentCorrelatesWithDOM(componentName, domClasses) {
	const normalized = normalizeComponentName(componentName);
	for (const cls of domClasses) {
		if (cls === normalized) return true;
		const componentWords = normalized.split("-").filter((w) => w.length > 2);
		const classWords = cls.split("-").filter((w) => w.length > 2);
		for (const cWord of componentWords) for (const dWord of classWords) if (cWord === dWord || cWord.includes(dWord) || dWord.includes(cWord)) return true;
	}
	return false;
}
function shouldIncludeComponent(name, depth, config, domClasses) {
	if (config.filter) return config.filter(name, depth);
	switch (config.mode) {
		case "all": return true;
		case "filtered":
			if (config.skipExact.has(name)) return false;
			if (config.skipPatterns.some((p) => p.test(name))) return false;
			return true;
		case "smart":
			if (config.skipExact.has(name)) return false;
			if (config.skipPatterns.some((p) => p.test(name))) return false;
			if (domClasses && componentCorrelatesWithDOM(name, domClasses)) return true;
			if (config.userPatterns.some((p) => p.test(name))) return true;
			return false;
		default: return true;
	}
}
var reactDetectionCache = null;
var componentCacheAll = /* @__PURE__ */ new WeakMap();
function hasReactFiber(element) {
	return Object.keys(element).some((key) => key.startsWith("__reactFiber$") || key.startsWith("__reactInternalInstance$") || key.startsWith("__reactProps$"));
}
function isReactPage() {
	if (reactDetectionCache !== null) return reactDetectionCache;
	if (typeof document === "undefined") return false;
	if (document.body && hasReactFiber(document.body)) {
		reactDetectionCache = true;
		return true;
	}
	for (const selector of [
		"#root",
		"#app",
		"#__next",
		"[data-reactroot]"
	]) {
		const el = document.querySelector(selector);
		if (el && hasReactFiber(el)) {
			reactDetectionCache = true;
			return true;
		}
	}
	if (document.body) {
		for (const child of document.body.children) if (hasReactFiber(child)) {
			reactDetectionCache = true;
			return true;
		}
	}
	reactDetectionCache = false;
	return false;
}
var componentCacheAllRef = { map: componentCacheAll };
function getReactFiberKey(element) {
	return Object.keys(element).find((key) => key.startsWith("__reactFiber$") || key.startsWith("__reactInternalInstance$")) || null;
}
function getFiberFromElement(element) {
	const key = getReactFiberKey(element);
	if (!key) return null;
	return element[key];
}
function getComponentNameFromType(type) {
	if (!type) return null;
	if (type.displayName) return type.displayName;
	if (type.name) return type.name;
	return null;
}
function getComponentNameFromFiber(fiber) {
	const { tag, type, elementType } = fiber;
	if (tag === FiberTags.HostComponent || tag === FiberTags.HostText || tag === FiberTags.HostHoistable || tag === FiberTags.HostSingleton) return null;
	if (tag === FiberTags.Fragment || tag === FiberTags.Mode || tag === FiberTags.Profiler || tag === FiberTags.DehydratedFragment) return null;
	if (tag === FiberTags.HostRoot || tag === FiberTags.HostPortal || tag === FiberTags.ScopeComponent || tag === FiberTags.OffscreenComponent || tag === FiberTags.LegacyHiddenComponent || tag === FiberTags.CacheComponent || tag === FiberTags.TracingMarkerComponent || tag === FiberTags.Throw || tag === FiberTags.ViewTransitionComponent || tag === FiberTags.ActivityComponent) return null;
	if (tag === FiberTags.ForwardRef) {
		const elType = elementType;
		if (elType?.render) {
			const innerName = getComponentNameFromType(elType.render);
			if (innerName) return innerName;
		}
		if (elType?.displayName) return elType.displayName;
		return getComponentNameFromType(type);
	}
	if (tag === FiberTags.MemoComponent || tag === FiberTags.SimpleMemoComponent) {
		const elType = elementType;
		if (elType?.type) {
			const innerName = getComponentNameFromType(elType.type);
			if (innerName) return innerName;
		}
		if (elType?.displayName) return elType.displayName;
		return getComponentNameFromType(type);
	}
	if (tag === FiberTags.ContextProvider) {
		const elType = type;
		if (elType?._context?.displayName) return `${elType._context.displayName}.Provider`;
		return null;
	}
	if (tag === FiberTags.ContextConsumer) {
		const elType = type;
		if (elType?.displayName) return `${elType.displayName}.Consumer`;
		return null;
	}
	if (tag === FiberTags.LazyComponent) {
		const elType = elementType;
		if (elType?._status === 1 && elType._result) return getComponentNameFromType(elType._result);
		return null;
	}
	if (tag === FiberTags.SuspenseComponent || tag === FiberTags.SuspenseListComponent) return null;
	if (tag === FiberTags.IncompleteClassComponent || tag === FiberTags.IncompleteFunctionComponent) return getComponentNameFromType(type);
	if (tag === FiberTags.FunctionComponent || tag === FiberTags.ClassComponent || tag === FiberTags.IndeterminateComponent) return getComponentNameFromType(type);
	return null;
}
function isMinifiedName(name) {
	if (name.length <= 2) return true;
	if (name.length <= 3 && name === name.toLowerCase()) return true;
	return false;
}
function getReactComponentName(element, config) {
	const resolved = resolveConfig(config);
	const useCache = resolved.mode === "all";
	if (useCache) {
		const cached = componentCacheAllRef.map.get(element);
		if (cached !== void 0) return cached;
	}
	if (!isReactPage()) {
		const result2 = {
			path: null,
			components: []
		};
		if (useCache) componentCacheAllRef.map.set(element, result2);
		return result2;
	}
	const domClasses = resolved.mode === "smart" ? getAncestorClasses(element) : void 0;
	const components = [];
	try {
		let fiber = getFiberFromElement(element);
		let depth = 0;
		while (fiber && depth < resolved.maxDepth && components.length < resolved.maxComponents) {
			const name = getComponentNameFromFiber(fiber);
			if (name && !isMinifiedName(name) && shouldIncludeComponent(name, depth, resolved, domClasses)) components.push(name);
			fiber = fiber.return;
			depth++;
		}
	} catch {
		const result2 = {
			path: null,
			components: []
		};
		if (useCache) componentCacheAllRef.map.set(element, result2);
		return result2;
	}
	if (components.length === 0) {
		const result2 = {
			path: null,
			components: []
		};
		if (useCache) componentCacheAllRef.map.set(element, result2);
		return result2;
	}
	const result = {
		path: components.slice().reverse().map((c) => `<${c}>`).join(" "),
		components
	};
	if (useCache) componentCacheAllRef.map.set(element, result);
	return result;
}
var FIBER_TAGS = {
	FunctionComponent: 0,
	ClassComponent: 1,
	IndeterminateComponent: 2,
	HostRoot: 3,
	HostPortal: 4,
	HostComponent: 5,
	HostText: 6,
	Fragment: 7,
	Mode: 8,
	ContextConsumer: 9,
	ContextProvider: 10,
	ForwardRef: 11,
	Profiler: 12,
	SuspenseComponent: 13,
	MemoComponent: 14,
	SimpleMemoComponent: 15,
	LazyComponent: 16
};
function getFiberFromElement2(element) {
	if (!element || typeof element !== "object") return null;
	const keys = Object.keys(element);
	const fiberKey = keys.find((key) => key.startsWith("__reactFiber$"));
	if (fiberKey) return element[fiberKey] || null;
	const instanceKey = keys.find((key) => key.startsWith("__reactInternalInstance$"));
	if (instanceKey) return element[instanceKey] || null;
	const possibleFiberKey = keys.find((key) => {
		if (!key.startsWith("__react")) return false;
		const value = element[key];
		return value && typeof value === "object" && "_debugSource" in value;
	});
	if (possibleFiberKey) return element[possibleFiberKey] || null;
	return null;
}
function getComponentName(fiber) {
	if (!fiber.type) return null;
	if (typeof fiber.type === "string") return null;
	if (typeof fiber.type === "object" || typeof fiber.type === "function") {
		const type = fiber.type;
		if (type.displayName) return type.displayName;
		if (type.name) return type.name;
	}
	return null;
}
function findDebugSource(fiber, maxDepth = 50) {
	let current = fiber;
	let depth = 0;
	while (current && depth < maxDepth) {
		if (current._debugSource) return {
			source: current._debugSource,
			componentName: getComponentName(current)
		};
		if (current._debugOwner?._debugSource) return {
			source: current._debugOwner._debugSource,
			componentName: getComponentName(current._debugOwner)
		};
		current = current.return;
		depth++;
	}
	return null;
}
function findDebugSourceReact19(fiber) {
	let current = fiber;
	let depth = 0;
	const maxDepth = 50;
	while (current && depth < maxDepth) {
		const anyFiber = current;
		for (const key of [
			"_debugSource",
			"__source",
			"_source",
			"debugSource"
		]) {
			const source = anyFiber[key];
			if (source && typeof source === "object" && "fileName" in source) return {
				source,
				componentName: getComponentName(current)
			};
		}
		if (current.memoizedProps) {
			const props = current.memoizedProps;
			if (props.__source && typeof props.__source === "object") {
				const source = props.__source;
				if (source.fileName && source.lineNumber) return {
					source: {
						fileName: source.fileName,
						lineNumber: source.lineNumber,
						columnNumber: source.columnNumber
					},
					componentName: getComponentName(current)
				};
			}
		}
		current = current.return;
		depth++;
	}
	return null;
}
var sourceProbeCache = /* @__PURE__ */ new Map();
function unwrapComponentType(fiber) {
	const tag = fiber.tag;
	const type = fiber.type;
	const elementType = fiber.elementType;
	if (typeof type === "string" || type == null) return null;
	if (typeof type === "function" && type.prototype?.isReactComponent) return null;
	if ((tag === FIBER_TAGS.FunctionComponent || tag === FIBER_TAGS.IndeterminateComponent) && typeof type === "function") return type;
	if (tag === FIBER_TAGS.ForwardRef && elementType) {
		const render = elementType.render;
		if (typeof render === "function") return render;
	}
	if ((tag === FIBER_TAGS.MemoComponent || tag === FIBER_TAGS.SimpleMemoComponent) && elementType) {
		const inner = elementType.type;
		if (typeof inner === "function") return inner;
	}
	if (typeof type === "function") return type;
	return null;
}
function getReactDispatcher() {
	const reactModule = React;
	const r19 = reactModule.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	if (r19 && "H" in r19) return {
		get: () => r19.H,
		set: (d) => {
			r19.H = d;
		}
	};
	const r18 = reactModule.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	if (r18) {
		const dispatcher = r18.ReactCurrentDispatcher;
		if (dispatcher && "current" in dispatcher) return {
			get: () => dispatcher.current,
			set: (d) => {
				dispatcher.current = d;
			}
		};
	}
	return null;
}
function parseComponentFrame(stack) {
	const lines = stack.split("\n");
	const skipPatterns = [
		/source-location/,
		/\/dist\/index\./,
		/node_modules\//,
		/react-dom/,
		/react\.development/,
		/react\.production/,
		/chunk-[A-Z0-9]+/i,
		/react-stack-bottom-frame/,
		/react-reconciler/,
		/scheduler/,
		/<anonymous>/
	];
	const v8Re = /^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/;
	const webkitRe = /^[^@]*@(.+?):(\d+):(\d+)$/;
	for (const line of lines) {
		const trimmed = line.trim();
		if (!trimmed) continue;
		if (skipPatterns.some((p) => p.test(trimmed))) continue;
		const match = v8Re.exec(trimmed) || webkitRe.exec(trimmed);
		if (match) return {
			fileName: match[1],
			line: parseInt(match[2], 10),
			column: parseInt(match[3], 10)
		};
	}
	return null;
}
function cleanSourcePath(rawPath) {
	let path = rawPath;
	path = path.replace(/[?#].*$/, "");
	path = path.replace(/^turbopack:\/\/\/\[project\]\//, "");
	path = path.replace(/^webpack-internal:\/\/\/\.\//, "");
	path = path.replace(/^webpack-internal:\/\/\//, "");
	path = path.replace(/^webpack:\/\/\/\.\//, "");
	path = path.replace(/^webpack:\/\/\//, "");
	path = path.replace(/^turbopack:\/\/\//, "");
	path = path.replace(/^https?:\/\/[^/]+\//, "");
	path = path.replace(/^file:\/\/\//, "/");
	path = path.replace(/^\([^)]+\)\/\.\//, "");
	path = path.replace(/^\.\//, "");
	return path;
}
function probeComponentSource(fiber) {
	const fn = unwrapComponentType(fiber);
	if (!fn) return null;
	if (sourceProbeCache.has(fn)) return sourceProbeCache.get(fn);
	const dispatcher = getReactDispatcher();
	if (!dispatcher) {
		sourceProbeCache.set(fn, null);
		return null;
	}
	const original = dispatcher.get();
	let result = null;
	try {
		const stackCapturingDispatcher = new Proxy({}, { get() {
			throw new Error("probe");
		} });
		dispatcher.set(stackCapturingDispatcher);
		try {
			fn({});
		} catch (e) {
			if (e instanceof Error && e.message === "probe" && e.stack) {
				const frame = parseComponentFrame(e.stack);
				if (frame) result = {
					fileName: cleanSourcePath(frame.fileName),
					lineNumber: frame.line,
					columnNumber: frame.column,
					componentName: getComponentName(fiber) || void 0
				};
			}
		}
	} finally {
		dispatcher.set(original);
	}
	sourceProbeCache.set(fn, result);
	return result;
}
function probeSourceWalk(fiber, maxDepth = 15) {
	let current = fiber;
	let depth = 0;
	while (current && depth < maxDepth) {
		const source = probeComponentSource(current);
		if (source) return source;
		current = current.return;
		depth++;
	}
	return null;
}
function getSourceLocation(element) {
	const fiber = getFiberFromElement2(element);
	if (!fiber) return {
		found: false,
		reason: "no-fiber",
		isReactApp: false,
		isProduction: false
	};
	let debugInfo = findDebugSource(fiber);
	if (!debugInfo) debugInfo = findDebugSourceReact19(fiber);
	if (debugInfo?.source) return {
		found: true,
		source: {
			fileName: debugInfo.source.fileName,
			lineNumber: debugInfo.source.lineNumber,
			columnNumber: debugInfo.source.columnNumber,
			componentName: debugInfo.componentName || void 0
		},
		isReactApp: true,
		isProduction: false
	};
	const probed = probeSourceWalk(fiber);
	if (probed) return {
		found: true,
		source: probed,
		isReactApp: true,
		isProduction: false
	};
	return {
		found: false,
		reason: "no-debug-source",
		isReactApp: true,
		isProduction: false
	};
}
function formatSourceLocation(source, format = "path") {
	const { fileName, lineNumber, columnNumber } = source;
	let location = `${fileName}:${lineNumber}`;
	if (columnNumber !== void 0) location += `:${columnNumber}`;
	if (format === "vscode") return `vscode://file${fileName.startsWith("/") ? "" : "/"}${location}`;
	return location;
}
function findNearestComponentSource(element, maxAncestors = 10) {
	let current = element;
	let depth = 0;
	while (current && depth < maxAncestors) {
		const result = getSourceLocation(current);
		if (result.found) return result;
		current = current.parentElement;
		depth++;
	}
	return getSourceLocation(element);
}
var css3 = ".styles-module__toolbar___wNsdK svg[fill=none],\n.styles-module__markersLayer___-25j1 svg[fill=none],\n.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {\n  fill: none !important;\n}\n.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),\n.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),\n.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {\n  fill: none !important;\n}\n\n.styles-module__toolbar___wNsdK :where(button, input, select, textarea, label) {\n  background: unset;\n  border: unset;\n  border-radius: unset;\n  padding: unset;\n  margin: unset;\n  color: unset;\n  font: unset;\n  letter-spacing: unset;\n  text-transform: unset;\n  text-decoration: unset;\n  box-shadow: unset;\n  outline: unset;\n}\n\n@keyframes styles-module__toolbarEnter___u8RRu {\n  from {\n    opacity: 0;\n    transform: scale(0.5) rotate(90deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) rotate(0deg);\n  }\n}\n@keyframes styles-module__toolbarHide___y8kaT {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n}\n@keyframes styles-module__badgeEnter___mVQLj {\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes styles-module__scaleIn___c-r1K {\n  from {\n    opacity: 0;\n    transform: scale(0.85);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes styles-module__scaleOut___Wctwz {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(0.85);\n  }\n}\n@keyframes styles-module__slideUp___kgD36 {\n  from {\n    opacity: 0;\n    transform: scale(0.85) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes styles-module__slideDown___zcdje {\n  from {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: scale(0.85) translateY(8px);\n  }\n}\n@keyframes styles-module__markerIn___5FaAP {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.3);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n@keyframes styles-module__markerOut___GU5jX {\n  0% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.3);\n  }\n}\n@keyframes styles-module__fadeIn___b9qmf {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes styles-module__fadeOut___6Ut6- {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes styles-module__tooltipIn___0N31w {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(2px) scale(0.891);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0) scale(0.909);\n  }\n}\n@keyframes styles-module__hoverHighlightIn___6WYHY {\n  from {\n    opacity: 0;\n    transform: scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes styles-module__hoverTooltipIn___FYGQx {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes styles-module__settingsPanelIn___MGfO8 {\n  from {\n    opacity: 0;\n    transform: translateY(10px) scale(0.95);\n    filter: blur(5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n    filter: blur(0px);\n  }\n}\n@keyframes styles-module__settingsPanelOut___Zfymi {\n  from {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n    filter: blur(0px);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(20px) scale(0.95);\n    filter: blur(5px);\n  }\n}\n.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {\n  transition: none !important;\n}\n\n.styles-module__toolbar___wNsdK {\n  position: fixed;\n  width: 297px;\n  z-index: 100000;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  pointer-events: none;\n  transition: left 0s, top 0s, right 0s, bottom 0s;\n}\n\n:where(.styles-module__toolbar___wNsdK) {\n  bottom: 1.25rem;\n  right: 1.25rem;\n}\n\n.styles-module__toolbarContainer___dIhma {\n  user-select: none;\n  margin-left: auto;\n  align-self: flex-end;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #1a1a1a;\n  color: #fff;\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);\n  pointer-events: auto;\n  cursor: grab;\n  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n}\n.styles-module__toolbarContainer___dIhma.styles-module__dragging___xrolZ {\n  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  cursor: grabbing;\n}\n.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {\n  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;\n}\n.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {\n  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;\n  pointer-events: none;\n}\n.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {\n  width: 44px;\n  height: 44px;\n  border-radius: 22px;\n  padding: 0;\n  cursor: pointer;\n}\n.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {\n  margin-top: -1px;\n}\n.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {\n  background: #2a2a2a;\n}\n.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {\n  transform: scale(0.95);\n}\n.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {\n  height: 44px;\n  border-radius: 1.5rem;\n  padding: 0.375rem;\n  width: 257px;\n}\n.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {\n  width: 297px;\n}\n\n.styles-module__toggleContent___0yfyP {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);\n}\n.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}\n.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.styles-module__controlsContent___9GJWU {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);\n}\n.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {\n  opacity: 1;\n  filter: blur(0px);\n  transform: scale(1);\n  visibility: visible;\n  pointer-events: auto;\n}\n.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {\n  pointer-events: none;\n  opacity: 0;\n  filter: blur(10px);\n  transform: scale(0.4);\n}\n\n.styles-module__badge___2XsgF {\n  position: absolute;\n  top: -13px;\n  right: -13px;\n  user-select: none;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 9px;\n  background-color: var(--agentation-color-accent);\n  color: white;\n  font-size: 0.625rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);\n  opacity: 1;\n  transition: transform 0.3s ease, opacity 0.2s ease;\n  transform: scale(1);\n}\n.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {\n  opacity: 0;\n  transform: scale(0);\n  pointer-events: none;\n}\n.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {\n  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;\n}\n\n.styles-module__controlButton___8Q0jc {\n  position: relative;\n  cursor: pointer !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.85);\n  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;\n}\n.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n}\n.styles-module__controlButton___8Q0jc:active:not(:disabled) {\n  transform: scale(0.92);\n}\n.styles-module__controlButton___8Q0jc:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.styles-module__controlButton___8Q0jc[data-active=true] {\n  color: var(--agentation-color-blue);\n  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);\n}\n.styles-module__controlButton___8Q0jc[data-error=true] {\n  color: var(--agentation-color-red);\n  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);\n}\n.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {\n  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);\n  color: var(--agentation-color-red);\n}\n.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {\n  cursor: default !important;\n  pointer-events: none;\n  background: transparent !important;\n}\n.styles-module__controlButton___8Q0jc[data-auto-sync=true] {\n  color: var(--agentation-color-green);\n  background: transparent;\n  cursor: default;\n}\n.styles-module__controlButton___8Q0jc[data-failed=true] {\n  color: var(--agentation-color-red);\n  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);\n}\n\n.styles-module__buttonBadge___NeFWb {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 4px;\n  border-radius: 8px;\n  background-color: var(--agentation-color-accent);\n  color: white;\n  font-size: 0.625rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);\n  pointer-events: none;\n}\n[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {\n  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\n@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {\n  0%, 100% {\n    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);\n  }\n  50% {\n    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);\n  }\n}\n@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {\n  0%, 100% {\n    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);\n  }\n  50% {\n    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);\n  }\n}\n.styles-module__mcpIndicator___zGJeL {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;\n  opacity: 1;\n  transform: scale(1);\n}\n.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {\n  background-color: var(--agentation-color-green);\n  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;\n}\n.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {\n  background-color: var(--agentation-color-yellow);\n  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;\n}\n.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {\n  opacity: 0;\n  transform: scale(0);\n  animation: none;\n}\n\n@keyframes styles-module__connectionPulse___-Zycw {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: scale(0.9);\n  }\n}\n.styles-module__connectionIndicatorWrapper___L-e-3 {\n  width: 8px;\n  height: 34px;\n  margin-left: 6px;\n  margin-right: 6px;\n}\n\n.styles-module__connectionIndicator___afk9p {\n  position: relative;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  opacity: 0;\n  transition: opacity 0.3s ease, background-color 0.3s ease;\n  cursor: default;\n}\n\n.styles-module__connectionIndicatorVisible___C-i5B {\n  opacity: 1;\n}\n\n.styles-module__connectionIndicatorConnected___IY8pR {\n  background-color: var(--agentation-color-green);\n  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;\n}\n\n.styles-module__connectionIndicatorDisconnected___kmpaZ {\n  background-color: var(--agentation-color-red);\n  animation: none;\n}\n\n.styles-module__connectionIndicatorConnecting___QmSLH {\n  background-color: var(--agentation-color-yellow);\n  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;\n}\n\n.styles-module__buttonWrapper___rBcdv {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-50%) scale(1);\n  transition-delay: 0.85s;\n}\n.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {\n  transition-delay: 0s;\n}\n\n.styles-module__sendButtonWrapper___UUxG6 {\n  width: 0;\n  opacity: 0;\n  overflow: hidden;\n  pointer-events: none;\n  margin-left: -0.375rem;\n  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n}\n.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {\n  transform: scale(0.8);\n  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n}\n.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {\n  width: 34px;\n  opacity: 1;\n  overflow: visible;\n  pointer-events: auto;\n  margin-left: 0;\n}\n.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {\n  transform: scale(1);\n}\n\n.styles-module__buttonTooltip___Burd9 {\n  position: absolute;\n  bottom: calc(100% + 14px);\n  left: 50%;\n  transform: translateX(-50%) scale(0.95);\n  padding: 6px 10px;\n  background: #1a1a1a;\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 8px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  z-index: 100001;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;\n}\n.styles-module__buttonTooltip___Burd9::after {\n  content: \"\";\n  position: absolute;\n  top: calc(100% - 4px);\n  left: 50%;\n  transform: translateX(-50%) rotate(45deg);\n  width: 8px;\n  height: 8px;\n  background: #1a1a1a;\n  border-radius: 0 0 2px 0;\n}\n\n.styles-module__shortcut___lEAQk {\n  margin-left: 4px;\n  opacity: 0.5;\n}\n\n.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {\n  bottom: auto;\n  top: calc(100% + 14px);\n  transform: translateX(-50%) scale(0.95);\n}\n.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {\n  top: -4px;\n  bottom: auto;\n  border-radius: 2px 0 0 0;\n}\n\n.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {\n  transform: translateX(-50%) scale(1);\n}\n\n.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {\n  opacity: 0 !important;\n  visibility: hidden !important;\n  transition: none !important;\n}\n\n.styles-module__tooltipVisible___0jcCv,\n.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {\n  opacity: 1 !important;\n  visibility: visible !important;\n  transform: translateX(-50%) scale(1) !important;\n  transition-delay: 0s !important;\n}\n\n.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {\n  left: 50%;\n  transform: translateX(-12px) scale(0.95);\n}\n.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {\n  left: 16px;\n}\n.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {\n  transform: translateX(-12px) scale(1);\n}\n\n.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {\n  transform: translateX(-12px) scale(0.95);\n}\n.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {\n  transform: translateX(-12px) scale(1);\n}\n\n.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {\n  left: 50%;\n  transform: translateX(calc(-100% + 12px)) scale(0.95);\n}\n.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {\n  left: auto;\n  right: 8px;\n}\n.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {\n  transform: translateX(calc(-100% + 12px)) scale(1);\n}\n\n.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {\n  transform: translateX(calc(-100% + 12px)) scale(0.95);\n}\n.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {\n  transform: translateX(calc(-100% + 12px)) scale(1);\n}\n\n.styles-module__divider___c--s1 {\n  width: 1px;\n  height: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  margin: 0 0.125rem;\n}\n\n.styles-module__overlay___Q1O9y {\n  position: fixed;\n  inset: 0;\n  z-index: 99997;\n  pointer-events: none;\n}\n.styles-module__overlay___Q1O9y > * {\n  pointer-events: auto;\n}\n\n.styles-module__hoverHighlight___ogakW {\n  position: fixed;\n  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);\n  border-radius: 4px;\n  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);\n  pointer-events: none !important;\n  box-sizing: border-box;\n  will-change: opacity;\n  contain: layout style;\n}\n.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {\n  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;\n}\n\n.styles-module__multiSelectOutline___cSJ-m {\n  position: fixed;\n  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);\n  border-radius: 4px;\n  pointer-events: none !important;\n  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);\n  box-sizing: border-box;\n  will-change: opacity;\n}\n.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {\n  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;\n}\n.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {\n  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;\n}\n\n.styles-module__singleSelectOutline___QhX-O {\n  position: fixed;\n  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);\n  border-radius: 4px;\n  pointer-events: none !important;\n  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);\n  box-sizing: border-box;\n  will-change: opacity;\n}\n.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {\n  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;\n}\n.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {\n  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;\n}\n\n.styles-module__hoverTooltip___bvLk7 {\n  position: fixed;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.85);\n  padding: 0.35rem 0.6rem;\n  border-radius: 0.375rem;\n  pointer-events: none !important;\n  white-space: nowrap;\n  max-width: 280px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {\n  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;\n}\n\n.styles-module__hoverReactPath___gx1IJ {\n  font-size: 0.625rem;\n  color: rgba(255, 255, 255, 0.6);\n  margin-bottom: 0.15rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.styles-module__hoverElementName___QMLMl {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.styles-module__markersLayer___-25j1 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  z-index: 99998;\n  pointer-events: none;\n}\n.styles-module__markersLayer___-25j1 > * {\n  pointer-events: auto;\n}\n\n.styles-module__fixedMarkersLayer___ffyX6 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99998;\n  pointer-events: none;\n}\n.styles-module__fixedMarkersLayer___ffyX6 > * {\n  pointer-events: auto;\n}\n\n.styles-module__marker___6sQrs {\n  position: absolute;\n  width: 22px;\n  height: 22px;\n  background: var(--agentation-color-blue);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);\n  user-select: none;\n  will-change: transform, opacity;\n  contain: layout style;\n  z-index: 1;\n}\n.styles-module__marker___6sQrs:hover {\n  z-index: 2;\n}\n.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {\n  transition: background-color 0.15s ease, transform 0.1s ease;\n}\n.styles-module__marker___6sQrs.styles-module__enter___WFIki {\n  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {\n  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;\n  pointer-events: none;\n}\n.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {\n  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;\n  pointer-events: none;\n}\n.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {\n  transform: translate(-50%, -50%) scale(1.1);\n}\n.styles-module__marker___6sQrs.styles-module__pending___2IHLC {\n  position: fixed;\n  background-color: var(--agentation-color-blue);\n}\n.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {\n  position: fixed;\n}\n.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {\n  background-color: var(--agentation-color-green);\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n}\n.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {\n  background-color: var(--agentation-color-green);\n}\n.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {\n  background-color: var(--agentation-color-red);\n}\n\n.styles-module__renumber___nCTxD {\n  display: block;\n  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;\n}\n\n@keyframes styles-module__renumberRoll___Wgbq3 {\n  0% {\n    transform: translateX(-40%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.styles-module__markerTooltip___aLJID {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%) scale(0.909);\n  z-index: 100002;\n  background: #1a1a1a;\n  padding: 8px 0.75rem;\n  border-radius: 0.75rem;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  font-weight: 400;\n  color: #fff;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);\n  min-width: 120px;\n  max-width: 200px;\n  pointer-events: none;\n  cursor: default;\n}\n.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {\n  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;\n}\n\n.styles-module__markerQuote___FHmrz {\n  display: block;\n  font-size: 12px;\n  font-style: italic;\n  color: rgba(255, 255, 255, 0.6);\n  margin-bottom: 0.3125rem;\n  line-height: 1.4;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.styles-module__markerNote___QkrrS {\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 1.4;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-bottom: 2px;\n}\n\n.styles-module__markerHint___2iF-6 {\n  display: block;\n  font-size: 0.625rem;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.6);\n  margin-top: 0.375rem;\n  white-space: nowrap;\n}\n\n.styles-module__settingsPanel___OxX3Y {\n  position: absolute;\n  right: 5px;\n  bottom: calc(100% + 0.5rem);\n  z-index: 1;\n  overflow: hidden;\n  background: #1c1c1c;\n  border-radius: 1rem;\n  padding: 13px 0 16px;\n  min-width: 205px;\n  cursor: default;\n  opacity: 1;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);\n  transition: background-color 0.25s ease, box-shadow 0.25s ease;\n}\n.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 16px;\n  z-index: 2;\n  pointer-events: none;\n}\n.styles-module__settingsPanel___OxX3Y::before {\n  left: 0;\n  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);\n}\n.styles-module__settingsPanel___OxX3Y::after {\n  right: 0;\n  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);\n}\n.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,\n.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,\n.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,\n.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,\n.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,\n.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,\n.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,\n.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,\n.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,\n.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,\n.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,\n.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,\n.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,\n.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {\n  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;\n}\n.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n  filter: blur(0px);\n  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;\n}\n.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {\n  opacity: 0;\n  transform: translateY(8px) scale(0.95);\n  filter: blur(5px);\n  pointer-events: none;\n  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;\n}\n[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {\n  background: #1a1a1a;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);\n}\n[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {\n  color: rgba(255, 255, 255, 0.6);\n}\n[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {\n  color: rgba(255, 255, 255, 0.85);\n}\n[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n}\n[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.styles-module__settingsPanelContainer___Xksv8 {\n  overflow: visible;\n  position: relative;\n  display: flex;\n  padding: 0 1rem;\n}\n\n.styles-module__settingsPage___6YfHH {\n  min-width: 100%;\n  flex-shrink: 0;\n  transition: transform 0.2s ease, opacity 0.2s ease;\n  transition-delay: 0s;\n  opacity: 1;\n}\n\n.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {\n  transform: translateX(-24px);\n  opacity: 0;\n  pointer-events: none;\n}\n\n.styles-module__automationsPage___uvCq6 {\n  position: absolute;\n  top: 0;\n  left: 24px;\n  width: 100%;\n  height: 100%;\n  padding: 3px 1rem 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s ease, opacity 0.2s ease;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {\n  transform: translateX(-24px);\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.styles-module__settingsNavLink___wCzJt {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0;\n  border: none;\n  background: transparent;\n  font-family: inherit;\n  font-size: 0.8125rem;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  transition: color 0.15s ease;\n}\n.styles-module__settingsNavLink___wCzJt:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {\n  color: rgba(0, 0, 0, 0.5);\n}\n[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {\n  color: rgba(0, 0, 0, 0.8);\n}\n.styles-module__settingsNavLink___wCzJt svg {\n  color: rgba(255, 255, 255, 0.4);\n  transition: color 0.15s ease;\n}\n.styles-module__settingsNavLink___wCzJt:hover svg {\n  color: #fff;\n}\n[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {\n  color: rgba(0, 0, 0, 0.25);\n}\n[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.styles-module__settingsNavLinkRight___ZWwhj {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.styles-module__mcpNavIndicator___cl9pO {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {\n  background-color: var(--agentation-color-green);\n  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;\n}\n.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {\n  background-color: var(--agentation-color-yellow);\n  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;\n}\n\n.styles-module__settingsBackButton___bIe2j {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 0 12px 0;\n  margin: -6px 0 0.5rem 0;\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  letter-spacing: -0.15px;\n  color: #fff;\n  cursor: pointer;\n  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);\n}\n.styles-module__settingsBackButton___bIe2j svg {\n  opacity: 0.4;\n  flex-shrink: 0;\n  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);\n}\n.styles-module__settingsBackButton___bIe2j:hover {\n  border-bottom-color: rgba(255, 255, 255, 0.07);\n}\n.styles-module__settingsBackButton___bIe2j:hover svg {\n  opacity: 1;\n}\n[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {\n  color: rgba(0, 0, 0, 0.85);\n  border-bottom-color: rgba(0, 0, 0, 0.08);\n}\n[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {\n  border-bottom-color: rgba(0, 0, 0, 0.08);\n}\n\n.styles-module__automationHeader___InP0r {\n  display: flex;\n  align-items: center;\n  gap: 0.125rem;\n  font-size: 0.8125rem;\n  font-weight: 400;\n  color: #fff;\n}\n[data-agentation-theme=light] .styles-module__automationHeader___InP0r {\n  color: rgba(0, 0, 0, 0.85);\n}\n\n.styles-module__automationDescription___NKlmo {\n  font-size: 0.6875rem;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  margin-top: 2px;\n  line-height: 14px;\n}\n[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.styles-module__learnMoreLink___8xv-x {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: underline dotted;\n  text-decoration-color: rgba(255, 255, 255, 0.2);\n  text-underline-offset: 2px;\n  transition: color 0.15s ease;\n}\n.styles-module__learnMoreLink___8xv-x:hover {\n  color: #fff;\n}\n[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {\n  color: rgba(0, 0, 0, 0.6);\n  text-decoration-color: rgba(0, 0, 0, 0.2);\n}\n[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {\n  color: rgba(0, 0, 0, 0.85);\n}\n\n.styles-module__autoSendRow___UblX5 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.styles-module__autoSendLabel___icDc2 {\n  font-size: 0.6875rem;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.4);\n  transition: color 0.15s ease;\n}\n.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {\n  color: #66b8ff;\n  color: color(display-p3 0.4 0.72 1);\n}\n[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {\n  color: rgba(0, 0, 0, 0.4);\n}\n[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {\n  color: var(--agentation-color-blue);\n}\n\n.styles-module__webhookUrlInput___2375C {\n  display: block;\n  width: 100%;\n  flex: 1;\n  min-height: 60px;\n  box-sizing: border-box;\n  margin-top: 11px;\n  padding: 8px 10px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.03);\n  font-family: inherit;\n  font-size: 0.75rem;\n  font-weight: 400;\n  color: #fff;\n  outline: none;\n  resize: none;\n  cursor: text !important;\n  user-select: text;\n  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;\n}\n.styles-module__webhookUrlInput___2375C::placeholder {\n  color: rgba(255, 255, 255, 0.3);\n}\n.styles-module__webhookUrlInput___2375C:focus {\n  border-color: rgba(255, 255, 255, 0.3);\n  background: rgba(255, 255, 255, 0.08);\n}\n[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {\n  border-color: rgba(0, 0, 0, 0.1);\n  background: rgba(0, 0, 0, 0.03);\n  color: rgba(0, 0, 0, 0.85);\n}\n[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {\n  color: rgba(0, 0, 0, 0.3);\n}\n[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {\n  border-color: rgba(0, 0, 0, 0.25);\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.styles-module__settingsHeader___pwDY9 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 24px;\n  margin-bottom: 0.5rem;\n  padding-bottom: 9px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n\n.styles-module__settingsBrand___0gJeM {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  letter-spacing: -0.0094em;\n  color: #fff;\n}\n\n.styles-module__settingsBrandSlash___uTG18 {\n  color: var(--agentation-color-accent);\n  transition: color 0.2s ease;\n}\n\n.styles-module__settingsVersion___TUcFq {\n  font-size: 11px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.4);\n  margin-left: auto;\n  letter-spacing: -0.0094em;\n}\n\n.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n}\n.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {\n  padding-top: calc(0.5rem + 4px);\n}\n\n.styles-module__settingsSectionGrow___h-5HZ {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.styles-module__settingsRow___3sdhc {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 24px;\n}\n.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {\n  margin-top: 8px;\n}\n\n.styles-module__dropdownContainer___BVnxe {\n  position: relative;\n}\n\n.styles-module__dropdownButton___16NPz {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0.5rem;\n  border: none;\n  border-radius: 0.375rem;\n  background: transparent;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #fff;\n  cursor: pointer;\n  transition: background-color 0.15s ease, color 0.15s ease;\n  letter-spacing: -0.0094em;\n}\n.styles-module__dropdownButton___16NPz:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.styles-module__dropdownButton___16NPz svg {\n  opacity: 0.6;\n}\n\n.styles-module__cycleButton___FMKfw {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0;\n  border: none;\n  background: transparent;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #fff;\n  cursor: pointer;\n  letter-spacing: -0.0094em;\n}\n[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {\n  color: rgba(0, 0, 0, 0.85);\n}\n.styles-module__cycleButton___FMKfw:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n\n.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {\n  color: rgba(255, 255, 255, 0.2);\n}\n[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {\n  color: rgba(0, 0, 0, 0.2);\n}\n.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n@keyframes styles-module__cycleTextIn___Q6zJf {\n  0% {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.styles-module__cycleButtonText___fD1LR {\n  display: inline-block;\n  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;\n}\n\n.styles-module__cycleDots___LWuoQ {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.styles-module__cycleDot___nPgLY {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(0.667);\n  transition: background-color 0.25s ease-out, transform 0.25s ease-out;\n}\n.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {\n  background: #fff;\n  transform: scale(1);\n}\n[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {\n  background: rgba(0, 0, 0, 0.2);\n}\n[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.styles-module__dropdownMenu___k73ER {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 0.25rem);\n  background: #1a1a1a;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n  min-width: 120px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);\n  z-index: 10;\n  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;\n}\n\n.styles-module__dropdownItem___ylsLj {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 0.625rem;\n  border: none;\n  border-radius: 0.375rem;\n  background: transparent;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  text-align: left;\n  transition: background-color 0.15s ease, color 0.15s ease;\n  letter-spacing: -0.0094em;\n}\n.styles-module__dropdownItem___ylsLj:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  font-weight: 600;\n}\n\n.styles-module__settingsLabel___8UjfX {\n  font-size: 0.8125rem;\n  font-weight: 400;\n  letter-spacing: -0.0094em;\n  color: rgba(255, 255, 255, 0.5);\n  display: flex;\n  align-items: center;\n  gap: 0.125rem;\n}\n[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.styles-module__settingsLabelMarker___ewdtV {\n  padding-top: 3px;\n  margin-bottom: 10px;\n}\n\n.styles-module__settingsOptions___LyrBA {\n  display: flex;\n  gap: 0.25rem;\n}\n\n.styles-module__settingsOption___UNa12 {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25rem;\n  padding: 0.375rem 0.5rem;\n  border: none;\n  border-radius: 0.375rem;\n  background: transparent;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.7);\n  cursor: pointer;\n  transition: background-color 0.15s ease, color 0.15s ease;\n}\n.styles-module__settingsOption___UNa12:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {\n  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);\n  color: var(--agentation-color-blue);\n}\n\n.styles-module__sliderContainer___ducXj {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.styles-module__slider___GLdxp {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 100%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n}\n.styles-module__slider___GLdxp::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 14px;\n  height: 14px;\n  background: white;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.styles-module__slider___GLdxp::-moz-range-thumb {\n  width: 14px;\n  height: 14px;\n  background: white;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {\n  transform: scale(1.15);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);\n}\n.styles-module__slider___GLdxp:hover::-moz-range-thumb {\n  transform: scale(1.15);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);\n}\n\n.styles-module__sliderLabels___FhLDB {\n  display: flex;\n  justify-content: space-between;\n}\n\n.styles-module__sliderLabel___U8sPr {\n  font-size: 0.625rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  transition: color 0.15s ease;\n}\n.styles-module__sliderLabel___U8sPr:hover {\n  color: rgba(255, 255, 255, 0.7);\n}\n.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.styles-module__colorOptions___iHCNX {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.375rem;\n  margin-bottom: 1px;\n}\n\n.styles-module__colorOption___IodiY {\n  display: block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  background-color: var(--swatch);\n  cursor: pointer;\n  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);\n}\n@supports (color: color(display-p3 0 0 0)) {\n  .styles-module__colorOption___IodiY {\n    background-color: var(--swatch-p3);\n  }\n}\n.styles-module__colorOption___IodiY:hover {\n  transform: scale(1.15);\n}\n.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {\n  transform: scale(0.83);\n}\n\n.styles-module__colorOptionRing___U2xpo {\n  display: flex;\n  width: 24px;\n  height: 24px;\n  border: 2px solid transparent;\n  border-radius: 50%;\n  transition: border-color 0.3s ease;\n}\n.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {\n  border-color: var(--swatch);\n}\n@supports (color: color(display-p3 0 0 0)) {\n  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {\n    border-color: var(--swatch-p3);\n  }\n}\n\n.styles-module__settingsToggle___fBrFn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {\n  margin-top: calc(0.5rem + 6px);\n}\n.styles-module__settingsToggle___fBrFn input[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {\n  margin-bottom: calc(0.5rem + 6px);\n}\n\n.styles-module__customCheckbox___U39ax {\n  position: relative;\n  width: 14px;\n  height: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: background-color 0.25s ease, border-color 0.25s ease;\n}\n.styles-module__customCheckbox___U39ax svg {\n  color: #1a1a1a;\n  opacity: 1;\n  transition: opacity 0.15s ease;\n}\ninput[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {\n  border-color: rgba(255, 255, 255, 0.3);\n  background: rgb(255, 255, 255);\n}\n[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  background: #fff;\n}\n[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {\n  border-color: #1a1a1a;\n  background: #1a1a1a;\n}\n[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {\n  color: #fff;\n}\n\n.styles-module__toggleLabel___Xm8Aa {\n  font-size: 0.8125rem;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.5);\n  letter-spacing: -0.0094em;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.styles-module__toggleSwitch___l4Ygm {\n  position: relative;\n  display: inline-block;\n  width: 24px;\n  height: 16px;\n  flex-shrink: 0;\n  cursor: pointer;\n  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.styles-module__toggleSwitch___l4Ygm input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {\n  background-color: var(--agentation-color-blue);\n}\n.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {\n  transform: translateX(8px);\n}\n.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {\n  opacity: 0.4;\n  pointer-events: none;\n}\n.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {\n  cursor: not-allowed;\n}\n\n.styles-module__toggleSlider___wprIn {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  border-radius: 16px;\n  background: #484848;\n}\n[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {\n  background: #dddddd;\n}\n.styles-module__toggleSlider___wprIn::before {\n  content: \"\";\n  position: absolute;\n  height: 12px;\n  width: 12px;\n  left: 2px;\n  bottom: 2px;\n  background: white;\n  border-radius: 50%;\n  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@keyframes styles-module__mcpPulse___uNggr {\n  0% {\n    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);\n  }\n  70% {\n    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);\n  }\n  100% {\n    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);\n  }\n}\n@keyframes styles-module__mcpPulseError___fov9B {\n  0% {\n    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);\n  }\n  70% {\n    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);\n  }\n  100% {\n    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);\n  }\n}\n.styles-module__mcpStatusDot___ibgkc {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {\n  background-color: var(--agentation-color-yellow);\n  animation: styles-module__mcpPulse___uNggr 1.5s infinite;\n}\n.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {\n  background-color: var(--agentation-color-green);\n  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;\n}\n.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {\n  background-color: var(--agentation-color-red);\n  animation: styles-module__mcpPulseError___fov9B 2s infinite;\n}\n\n.styles-module__dragSelection___kZLq2 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);\n  border-radius: 4px;\n  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);\n  pointer-events: none;\n  z-index: 99997;\n  will-change: transform, width, height;\n  contain: layout style;\n}\n\n.styles-module__dragCount___KM90j {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--agentation-color-green);\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 1rem;\n  min-width: 1.5rem;\n  text-align: center;\n}\n\n.styles-module__highlightsContainer___-0xzG {\n  position: fixed;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  z-index: 99996;\n}\n\n.styles-module__selectedElementHighlight___fyVlI {\n  position: fixed;\n  top: 0;\n  left: 0;\n  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);\n  border-radius: 4px;\n  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);\n  pointer-events: none;\n  will-change: transform, width, height;\n  contain: layout style;\n}\n\n[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {\n  background: #fff;\n  color: rgba(0, 0, 0, 0.85);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);\n}\n[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {\n  background: #f5f5f5;\n}\n[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {\n  color: rgba(0, 0, 0, 0.5);\n}\n[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {\n  background: rgba(0, 0, 0, 0.06);\n  color: rgba(0, 0, 0, 0.85);\n}\n[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {\n  color: var(--agentation-color-blue);\n  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);\n}\n[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {\n  color: var(--agentation-color-red);\n  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);\n}\n[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {\n  color: var(--agentation-color-red);\n  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);\n}\n[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {\n  color: var(--agentation-color-green);\n  background: transparent;\n}\n[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {\n  color: var(--agentation-color-red);\n  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);\n}\n[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {\n  background: #fff;\n  color: rgba(0, 0, 0, 0.85);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);\n}\n[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {\n  background: #fff;\n}\n[data-agentation-theme=light] .styles-module__divider___c--s1 {\n  background: rgba(0, 0, 0, 0.1);\n}\n[data-agentation-theme=light] .styles-module__markerTooltip___aLJID {\n  background: #fff;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);\n}\n[data-agentation-theme=light] .styles-module__markerTooltip___aLJID .styles-module__markerQuote___FHmrz {\n  color: rgba(0, 0, 0, 0.5);\n}\n[data-agentation-theme=light] .styles-module__markerTooltip___aLJID .styles-module__markerNote___QkrrS {\n  color: rgba(0, 0, 0, 0.85);\n}\n[data-agentation-theme=light] .styles-module__markerTooltip___aLJID .styles-module__markerHint___2iF-6 {\n  color: rgba(0, 0, 0, 0.35);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y {\n  background: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y::before {\n  background: linear-gradient(to right, #fff 0%, transparent 100%);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y::after {\n  background: linear-gradient(to left, #fff 0%, transparent 100%);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9 {\n  border-bottom-color: rgba(0, 0, 0, 0.08);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM {\n  color: rgba(0, 0, 0, 0.85);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq {\n  color: rgba(0, 0, 0, 0.4);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2 {\n  border-top-color: rgba(0, 0, 0, 0.08);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {\n  color: rgba(0, 0, 0, 0.5);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw {\n  color: rgba(0, 0, 0, 0.85);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY {\n  background: rgba(0, 0, 0, 0.2);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {\n  background: rgba(0, 0, 0, 0.7);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz {\n  color: rgba(0, 0, 0, 0.85);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {\n  color: rgba(0, 0, 0, 0.5);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax {\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  background: #fff;\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {\n  border-color: #1a1a1a;\n  background: #1a1a1a;\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {\n  color: #fff;\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr {\n  color: rgba(0, 0, 0, 0.4);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr:hover {\n  color: rgba(0, 0, 0, 0.7);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {\n  color: rgba(0, 0, 0, 0.9);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp {\n  background: rgba(0, 0, 0, 0.1);\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-webkit-slider-thumb {\n  background: #1a1a1a;\n}\n[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-moz-range-thumb {\n  background: #1a1a1a;\n}\n\n.styles-module__themeToggle___2rUjA {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  margin-left: 0.5rem;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  transition: background-color 0.15s ease, color 0.15s ease;\n}\n.styles-module__themeToggle___2rUjA:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.8);\n}\n[data-agentation-theme=light] .styles-module__themeToggle___2rUjA {\n  color: rgba(0, 0, 0, 0.4);\n}\n[data-agentation-theme=light] .styles-module__themeToggle___2rUjA:hover {\n  background: rgba(0, 0, 0, 0.06);\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.styles-module__themeIconWrapper___LsJIM {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 20px;\n  height: 20px;\n}\n\n.styles-module__themeIcon___lCCmo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: styles-module__themeIconIn___TU6ML 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n\n@keyframes styles-module__themeIconIn___TU6ML {\n  0% {\n    opacity: 0;\n    transform: scale(0.8) rotate(-30deg);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) rotate(0deg);\n  }\n}";
var classNames3 = {
	"toolbar": "styles-module__toolbar___wNsdK",
	"markersLayer": "styles-module__markersLayer___-25j1",
	"fixedMarkersLayer": "styles-module__fixedMarkersLayer___ffyX6",
	"disableTransitions": "styles-module__disableTransitions___EopxO",
	"toolbarContainer": "styles-module__toolbarContainer___dIhma",
	"dragging": "styles-module__dragging___xrolZ",
	"entrance": "styles-module__entrance___sgHd8",
	"toolbarEnter": "styles-module__toolbarEnter___u8RRu",
	"hiding": "styles-module__hiding___1td44",
	"toolbarHide": "styles-module__toolbarHide___y8kaT",
	"collapsed": "styles-module__collapsed___Rydsn",
	"expanded": "styles-module__expanded___ofKPx",
	"serverConnected": "styles-module__serverConnected___Gfbou",
	"toggleContent": "styles-module__toggleContent___0yfyP",
	"visible": "styles-module__visible___KHwEW",
	"hidden": "styles-module__hidden___Ae8H4",
	"controlsContent": "styles-module__controlsContent___9GJWU",
	"badge": "styles-module__badge___2XsgF",
	"fadeOut": "styles-module__fadeOut___6Ut6-",
	"badgeEnter": "styles-module__badgeEnter___mVQLj",
	"controlButton": "styles-module__controlButton___8Q0jc",
	"statusShowing": "styles-module__statusShowing___te6iu",
	"buttonBadge": "styles-module__buttonBadge___NeFWb",
	"mcpIndicator": "styles-module__mcpIndicator___zGJeL",
	"connected": "styles-module__connected___7c28g",
	"mcpIndicatorPulseConnected": "styles-module__mcpIndicatorPulseConnected___EDodZ",
	"connecting": "styles-module__connecting___uo-CW",
	"mcpIndicatorPulseConnecting": "styles-module__mcpIndicatorPulseConnecting___cCYte",
	"connectionIndicatorWrapper": "styles-module__connectionIndicatorWrapper___L-e-3",
	"connectionIndicator": "styles-module__connectionIndicator___afk9p",
	"connectionIndicatorVisible": "styles-module__connectionIndicatorVisible___C-i5B",
	"connectionIndicatorConnected": "styles-module__connectionIndicatorConnected___IY8pR",
	"connectionPulse": "styles-module__connectionPulse___-Zycw",
	"connectionIndicatorDisconnected": "styles-module__connectionIndicatorDisconnected___kmpaZ",
	"connectionIndicatorConnecting": "styles-module__connectionIndicatorConnecting___QmSLH",
	"buttonWrapper": "styles-module__buttonWrapper___rBcdv",
	"buttonTooltip": "styles-module__buttonTooltip___Burd9",
	"tooltipsInSession": "styles-module__tooltipsInSession___-0lHH",
	"sendButtonWrapper": "styles-module__sendButtonWrapper___UUxG6",
	"sendButtonVisible": "styles-module__sendButtonVisible___WPSQU",
	"shortcut": "styles-module__shortcut___lEAQk",
	"tooltipBelow": "styles-module__tooltipBelow___m6ats",
	"tooltipsHidden": "styles-module__tooltipsHidden___VtLJG",
	"tooltipVisible": "styles-module__tooltipVisible___0jcCv",
	"buttonWrapperAlignLeft": "styles-module__buttonWrapperAlignLeft___myzIp",
	"buttonWrapperAlignRight": "styles-module__buttonWrapperAlignRight___HCQFR",
	"divider": "styles-module__divider___c--s1",
	"overlay": "styles-module__overlay___Q1O9y",
	"hoverHighlight": "styles-module__hoverHighlight___ogakW",
	"enter": "styles-module__enter___WFIki",
	"hoverHighlightIn": "styles-module__hoverHighlightIn___6WYHY",
	"multiSelectOutline": "styles-module__multiSelectOutline___cSJ-m",
	"fadeIn": "styles-module__fadeIn___b9qmf",
	"exit": "styles-module__exit___fyOJ0",
	"singleSelectOutline": "styles-module__singleSelectOutline___QhX-O",
	"hoverTooltip": "styles-module__hoverTooltip___bvLk7",
	"hoverTooltipIn": "styles-module__hoverTooltipIn___FYGQx",
	"hoverReactPath": "styles-module__hoverReactPath___gx1IJ",
	"hoverElementName": "styles-module__hoverElementName___QMLMl",
	"marker": "styles-module__marker___6sQrs",
	"clearing": "styles-module__clearing___FQ--7",
	"markerIn": "styles-module__markerIn___5FaAP",
	"markerOut": "styles-module__markerOut___GU5jX",
	"pending": "styles-module__pending___2IHLC",
	"fixed": "styles-module__fixed___dBMHC",
	"multiSelect": "styles-module__multiSelect___YWiuz",
	"hovered": "styles-module__hovered___ZgXIy",
	"renumber": "styles-module__renumber___nCTxD",
	"renumberRoll": "styles-module__renumberRoll___Wgbq3",
	"markerTooltip": "styles-module__markerTooltip___aLJID",
	"tooltipIn": "styles-module__tooltipIn___0N31w",
	"markerQuote": "styles-module__markerQuote___FHmrz",
	"markerNote": "styles-module__markerNote___QkrrS",
	"markerHint": "styles-module__markerHint___2iF-6",
	"settingsPanel": "styles-module__settingsPanel___OxX3Y",
	"settingsHeader": "styles-module__settingsHeader___pwDY9",
	"settingsBrand": "styles-module__settingsBrand___0gJeM",
	"settingsBrandSlash": "styles-module__settingsBrandSlash___uTG18",
	"settingsVersion": "styles-module__settingsVersion___TUcFq",
	"settingsSection": "styles-module__settingsSection___m-YM2",
	"settingsLabel": "styles-module__settingsLabel___8UjfX",
	"cycleButton": "styles-module__cycleButton___FMKfw",
	"cycleDot": "styles-module__cycleDot___nPgLY",
	"dropdownButton": "styles-module__dropdownButton___16NPz",
	"toggleLabel": "styles-module__toggleLabel___Xm8Aa",
	"customCheckbox": "styles-module__customCheckbox___U39ax",
	"sliderLabel": "styles-module__sliderLabel___U8sPr",
	"slider": "styles-module__slider___GLdxp",
	"themeToggle": "styles-module__themeToggle___2rUjA",
	"settingsOption": "styles-module__settingsOption___UNa12",
	"selected": "styles-module__selected___OwRqP",
	"settingsPanelContainer": "styles-module__settingsPanelContainer___Xksv8",
	"settingsPage": "styles-module__settingsPage___6YfHH",
	"slideLeft": "styles-module__slideLeft___Ps01J",
	"automationsPage": "styles-module__automationsPage___uvCq6",
	"slideIn": "styles-module__slideIn___4-qXe",
	"settingsNavLink": "styles-module__settingsNavLink___wCzJt",
	"settingsNavLinkRight": "styles-module__settingsNavLinkRight___ZWwhj",
	"mcpNavIndicator": "styles-module__mcpNavIndicator___cl9pO",
	"mcpPulse": "styles-module__mcpPulse___uNggr",
	"settingsBackButton": "styles-module__settingsBackButton___bIe2j",
	"automationHeader": "styles-module__automationHeader___InP0r",
	"automationDescription": "styles-module__automationDescription___NKlmo",
	"learnMoreLink": "styles-module__learnMoreLink___8xv-x",
	"autoSendRow": "styles-module__autoSendRow___UblX5",
	"autoSendLabel": "styles-module__autoSendLabel___icDc2",
	"active": "styles-module__active___-zoN6",
	"webhookUrlInput": "styles-module__webhookUrlInput___2375C",
	"settingsSectionExtraPadding": "styles-module__settingsSectionExtraPadding___jdhFV",
	"settingsSectionGrow": "styles-module__settingsSectionGrow___h-5HZ",
	"settingsRow": "styles-module__settingsRow___3sdhc",
	"settingsRowMarginTop": "styles-module__settingsRowMarginTop___zA0Sp",
	"dropdownContainer": "styles-module__dropdownContainer___BVnxe",
	"settingsRowDisabled": "styles-module__settingsRowDisabled___EgS0V",
	"toggleSwitch": "styles-module__toggleSwitch___l4Ygm",
	"cycleButtonText": "styles-module__cycleButtonText___fD1LR",
	"cycleTextIn": "styles-module__cycleTextIn___Q6zJf",
	"cycleDots": "styles-module__cycleDots___LWuoQ",
	"dropdownMenu": "styles-module__dropdownMenu___k73ER",
	"scaleIn": "styles-module__scaleIn___c-r1K",
	"dropdownItem": "styles-module__dropdownItem___ylsLj",
	"settingsLabelMarker": "styles-module__settingsLabelMarker___ewdtV",
	"settingsOptions": "styles-module__settingsOptions___LyrBA",
	"sliderContainer": "styles-module__sliderContainer___ducXj",
	"sliderLabels": "styles-module__sliderLabels___FhLDB",
	"colorOptions": "styles-module__colorOptions___iHCNX",
	"colorOption": "styles-module__colorOption___IodiY",
	"colorOptionRing": "styles-module__colorOptionRing___U2xpo",
	"settingsToggle": "styles-module__settingsToggle___fBrFn",
	"settingsToggleMarginBottom": "styles-module__settingsToggleMarginBottom___MZUyF",
	"checked": "styles-module__checked___mnZLo",
	"toggleSlider": "styles-module__toggleSlider___wprIn",
	"disabled": "styles-module__disabled___332Jw",
	"mcpStatusDot": "styles-module__mcpStatusDot___ibgkc",
	"disconnected": "styles-module__disconnected___cHPxR",
	"mcpPulseError": "styles-module__mcpPulseError___fov9B",
	"dragSelection": "styles-module__dragSelection___kZLq2",
	"dragCount": "styles-module__dragCount___KM90j",
	"highlightsContainer": "styles-module__highlightsContainer___-0xzG",
	"selectedElementHighlight": "styles-module__selectedElementHighlight___fyVlI",
	"themeIconWrapper": "styles-module__themeIconWrapper___LsJIM",
	"themeIcon": "styles-module__themeIcon___lCCmo",
	"themeIconIn": "styles-module__themeIconIn___TU6ML",
	"scaleOut": "styles-module__scaleOut___Wctwz",
	"slideUp": "styles-module__slideUp___kgD36",
	"slideDown": "styles-module__slideDown___zcdje",
	"settingsPanelIn": "styles-module__settingsPanelIn___MGfO8",
	"settingsPanelOut": "styles-module__settingsPanelOut___Zfymi"
};
if (typeof document !== "undefined") {
	let style = document.getElementById("feedback-tool-styles-page-toolbar-css-styles");
	if (!style) {
		style = document.createElement("style");
		style.id = "feedback-tool-styles-page-toolbar-css-styles";
		style.textContent = css3;
		document.head.appendChild(style);
	}
}
var styles_module_default2 = classNames3;
var Tooltip = ({ content, children, ...props }) => {
	const [visible, setVisible] = useState(false);
	const [shouldRender, setShouldRender] = useState(false);
	const [position, setPosition] = useState({
		top: 0,
		right: 0
	});
	const triggerRef = useRef(null);
	const timeoutRef = useRef(null);
	const exitTimeoutRef = useRef(null);
	const updatePosition = () => {
		if (triggerRef.current) {
			const rect = triggerRef.current.getBoundingClientRect();
			setPosition({
				top: rect.top + rect.height / 2,
				right: window.innerWidth - rect.left + 8
			});
		}
	};
	const handleMouseEnter = () => {
		setShouldRender(true);
		if (exitTimeoutRef.current) {
			clearTimeout(exitTimeoutRef.current);
			exitTimeoutRef.current = null;
		}
		updatePosition();
		timeoutRef.current = originalSetTimeout(() => {
			setVisible(true);
		}, 500);
	};
	const handleMouseLeave = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		setVisible(false);
		exitTimeoutRef.current = originalSetTimeout(() => {
			setShouldRender(false);
		}, 150);
	};
	useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
		};
	}, []);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", {
		ref: triggerRef,
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		...props,
		children
	}), shouldRender && createPortal(/* @__PURE__ */ jsx("div", {
		"data-feedback-toolbar": true,
		style: {
			position: "fixed",
			top: position.top,
			right: position.right,
			transform: "translateY(-50%)",
			padding: "6px 10px",
			background: "#383838",
			color: "rgba(255, 255, 255, 0.7)",
			fontSize: "11px",
			fontWeight: 400,
			lineHeight: "14px",
			borderRadius: "10px",
			width: "180px",
			textAlign: "left",
			zIndex: 100020,
			pointerEvents: "none",
			boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.28)",
			opacity: visible ? 1 : 0,
			transition: "opacity 0.15s ease"
		},
		children: content
	}), document.body)] });
};
var css4 = ".styles-module__tooltip___mcXL2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: help;\n}\n\n.styles-module__tooltipIcon___Nq2nD {\n  transform: translateY(0.5px);\n  color: #fff;\n  opacity: 0.2;\n  transition: opacity 0.15s ease;\n  will-change: transform;\n}\n.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {\n  opacity: 0.5;\n}\n[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {\n  color: #000;\n}";
var classNames4 = {
	"tooltip": "styles-module__tooltip___mcXL2",
	"tooltipIcon": "styles-module__tooltipIcon___Nq2nD"
};
if (typeof document !== "undefined") {
	let style = document.getElementById("feedback-tool-styles-help-tooltip-styles");
	if (!style) {
		style = document.createElement("style");
		style.id = "feedback-tool-styles-help-tooltip-styles";
		style.textContent = css4;
		document.head.appendChild(style);
	}
}
var styles_module_default3 = classNames4;
var HelpTooltip = ({ content }) => {
	return /* @__PURE__ */ jsx(Tooltip, {
		className: styles_module_default3.tooltip,
		content,
		children: /* @__PURE__ */ jsx(IconHelp, { className: styles_module_default3.tooltipIcon })
	});
};
function identifyElementWithReact(element, reactMode = "filtered") {
	const { name: elementName, path } = identifyElement(element);
	if (reactMode === "off") return {
		name: elementName,
		elementName,
		path,
		reactComponents: null
	};
	const reactInfo = getReactComponentName(element, { mode: reactMode });
	return {
		name: reactInfo.path ? `${reactInfo.path} ${elementName}` : elementName,
		elementName,
		path,
		reactComponents: reactInfo.path
	};
}
var hasPlayedEntranceAnimation = false;
var DEFAULT_SETTINGS = {
	outputDetail: "standard",
	autoClearAfterCopy: false,
	annotationColorId: "blue",
	blockInteractions: true,
	reactEnabled: true,
	markerClickBehavior: "edit",
	webhookUrl: "",
	webhooksEnabled: true
};
var isValidUrl = (url) => {
	if (!url || !url.trim()) return false;
	try {
		const parsed = new URL(url.trim());
		return parsed.protocol === "http:" || parsed.protocol === "https:";
	} catch {
		return false;
	}
};
var OUTPUT_DETAIL_OPTIONS = [
	{
		value: "compact",
		label: "Compact"
	},
	{
		value: "standard",
		label: "Standard"
	},
	{
		value: "detailed",
		label: "Detailed"
	},
	{
		value: "forensic",
		label: "Forensic"
	}
];
var COLOR_OPTIONS = [
	{
		id: "indigo",
		label: "Indigo",
		srgb: "#6155F5",
		p3: "color(display-p3 0.38 0.33 0.96)"
	},
	{
		id: "blue",
		label: "Blue",
		srgb: "#0088FF",
		p3: "color(display-p3 0.00 0.53 1.00)"
	},
	{
		id: "cyan",
		label: "Cyan",
		srgb: "#00C3D0",
		p3: "color(display-p3 0.00 0.76 0.82)"
	},
	{
		id: "green",
		label: "Green",
		srgb: "#34C759",
		p3: "color(display-p3 0.20 0.78 0.35)"
	},
	{
		id: "yellow",
		label: "Yellow",
		srgb: "#FFCC00",
		p3: "color(display-p3 1.00 0.80 0.00)"
	},
	{
		id: "orange",
		label: "Orange",
		srgb: "#FF8D28",
		p3: "color(display-p3 1.00 0.55 0.16)"
	},
	{
		id: "red",
		label: "Red",
		srgb: "#FF383C",
		p3: "color(display-p3 1.00 0.22 0.24)"
	}
];
var injectAgentationColorTokens = () => {
	if (typeof document === "undefined") return;
	if (document.getElementById("agentation-color-tokens")) return;
	const style = document.createElement("style");
	style.id = "agentation-color-tokens";
	style.textContent = [
		...COLOR_OPTIONS.map((c) => `
      [data-agentation-accent="${c.id}"] {
        --agentation-color-accent: ${c.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${c.id}"] {
          --agentation-color-accent: ${c.p3};
        }
      }
    `),
		`:root {
      ${COLOR_OPTIONS.map((c) => `--agentation-color-${c.id}: ${c.srgb};`).join("\n")}
    }`,
		`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${COLOR_OPTIONS.map((c) => `--agentation-color-${c.id}: ${c.p3};`).join("\n")}
      }
    }`
	].join("");
	document.head.appendChild(style);
};
injectAgentationColorTokens();
function deepElementFromPoint(x, y) {
	let element = document.elementFromPoint(x, y);
	if (!element) return null;
	while (element?.shadowRoot) {
		const deeper = element.shadowRoot.elementFromPoint(x, y);
		if (!deeper || deeper === element) break;
		element = deeper;
	}
	return element;
}
function isElementFixed(element) {
	let current = element;
	while (current && current !== document.body) {
		const position = window.getComputedStyle(current).position;
		if (position === "fixed" || position === "sticky") return true;
		current = current.parentElement;
	}
	return false;
}
function isRenderableAnnotation(annotation) {
	return annotation.status !== "resolved" && annotation.status !== "dismissed";
}
function detectSourceFile(element) {
	const result = getSourceLocation(element);
	const loc = result.found ? result : findNearestComponentSource(element);
	if (loc.found && loc.source) return formatSourceLocation(loc.source, "path");
}
function generateOutput(annotations, pathname, detailLevel = "standard", reactMode = "filtered") {
	if (annotations.length === 0) return "";
	const viewport = typeof window !== "undefined" ? `${window.innerWidth}\xD7${window.innerHeight}` : "unknown";
	let output = `## Page Feedback: ${pathname}
`;
	if (detailLevel === "forensic") {
		output += `
**Environment:**
`;
		output += `- Viewport: ${viewport}
`;
		if (typeof window !== "undefined") {
			output += `- URL: ${window.location.href}
`;
			output += `- User Agent: ${navigator.userAgent}
`;
			output += `- Timestamp: ${(/* @__PURE__ */ new Date()).toISOString()}
`;
			output += `- Device Pixel Ratio: ${window.devicePixelRatio}
`;
		}
		output += `
---
`;
	} else if (detailLevel !== "compact") output += `**Viewport:** ${viewport}
`;
	output += "\n";
	annotations.forEach((a, i) => {
		if (detailLevel === "compact") {
			output += `${i + 1}. **${a.element}**${a.sourceFile ? ` (${a.sourceFile})` : ""}: ${a.comment}`;
			if (a.selectedText) output += ` (re: "${a.selectedText.slice(0, 30)}${a.selectedText.length > 30 ? "..." : ""}")`;
			output += "\n";
		} else if (detailLevel === "forensic") {
			output += `### ${i + 1}. ${a.element}
`;
			if (a.isMultiSelect && a.fullPath) output += `*Forensic data shown for first element of selection*
`;
			if (a.fullPath) output += `**Full DOM Path:** ${a.fullPath}
`;
			if (a.cssClasses) output += `**CSS Classes:** ${a.cssClasses}
`;
			if (a.boundingBox) output += `**Position:** x:${Math.round(a.boundingBox.x)}, y:${Math.round(a.boundingBox.y)} (${Math.round(a.boundingBox.width)}\xD7${Math.round(a.boundingBox.height)}px)
`;
			output += `**Annotation at:** ${a.x.toFixed(1)}% from left, ${Math.round(a.y)}px from top
`;
			if (a.selectedText) output += `**Selected text:** "${a.selectedText}"
`;
			if (a.nearbyText && !a.selectedText) output += `**Context:** ${a.nearbyText.slice(0, 100)}
`;
			if (a.computedStyles) output += `**Computed Styles:** ${a.computedStyles}
`;
			if (a.accessibility) output += `**Accessibility:** ${a.accessibility}
`;
			if (a.nearbyElements) output += `**Nearby Elements:** ${a.nearbyElements}
`;
			if (a.sourceFile) output += `**Source:** ${a.sourceFile}
`;
			if (a.reactComponents) output += `**React:** ${a.reactComponents}
`;
			output += `**Feedback:** ${a.comment}

`;
		} else {
			output += `### ${i + 1}. ${a.element}
`;
			output += `**Location:** ${a.elementPath}
`;
			if (a.sourceFile) output += `**Source:** ${a.sourceFile}
`;
			if (a.reactComponents) output += `**React:** ${a.reactComponents}
`;
			if (detailLevel === "detailed") {
				if (a.cssClasses) output += `**Classes:** ${a.cssClasses}
`;
				if (a.boundingBox) output += `**Position:** ${Math.round(a.boundingBox.x)}px, ${Math.round(a.boundingBox.y)}px (${Math.round(a.boundingBox.width)}\xD7${Math.round(a.boundingBox.height)}px)
`;
			}
			if (a.selectedText) output += `**Selected text:** "${a.selectedText}"
`;
			if (detailLevel === "detailed" && a.nearbyText && !a.selectedText) output += `**Context:** ${a.nearbyText.slice(0, 100)}
`;
			output += `**Feedback:** ${a.comment}

`;
		}
	});
	return output.trim();
}
function PageFeedbackToolbarCSS({ demoAnnotations, demoDelay = 1e3, enableDemoMode = false, onAnnotationAdd, onAnnotationDelete, onAnnotationUpdate, onAnnotationsClear, onCopy, onSubmit, copyToClipboard = true, endpoint, sessionId: initialSessionId, onSessionCreated, webhookUrl, className: userClassName } = {}) {
	const [isActive, setIsActive] = useState(false);
	const [annotations, setAnnotations] = useState([]);
	const [showMarkers, setShowMarkers] = useState(true);
	const [isToolbarHidden, setIsToolbarHidden] = useState(() => loadToolbarHidden());
	const [isToolbarHiding, setIsToolbarHiding] = useState(false);
	const portalWrapperRef = useRef(null);
	useEffect(() => {
		const stop = (e) => {
			const wrapper = portalWrapperRef.current;
			if (wrapper && wrapper.contains(e.target)) e.stopPropagation();
		};
		const events = [
			"mousedown",
			"click",
			"pointerdown"
		];
		events.forEach((evt) => document.body.addEventListener(evt, stop));
		return () => {
			events.forEach((evt) => document.body.removeEventListener(evt, stop));
		};
	}, []);
	const [markersVisible, setMarkersVisible] = useState(false);
	const [markersExiting, setMarkersExiting] = useState(false);
	const [hoverInfo, setHoverInfo] = useState(null);
	const [hoverPosition, setHoverPosition] = useState({
		x: 0,
		y: 0
	});
	const [pendingAnnotation, setPendingAnnotation] = useState(null);
	const [copied, setCopied] = useState(false);
	const [sendState, setSendState] = useState("idle");
	const [cleared, setCleared] = useState(false);
	const [isClearing, setIsClearing] = useState(false);
	const [hoveredMarkerId, setHoveredMarkerId] = useState(null);
	const [hoveredTargetElement, setHoveredTargetElement] = useState(null);
	const [hoveredTargetElements, setHoveredTargetElements] = useState([]);
	const [deletingMarkerId, setDeletingMarkerId] = useState(null);
	const [renumberFrom, setRenumberFrom] = useState(null);
	const [editingAnnotation, setEditingAnnotation] = useState(null);
	const [editingTargetElement, setEditingTargetElement] = useState(null);
	const [editingTargetElements, setEditingTargetElements] = useState([]);
	const [scrollY, setScrollY] = useState(0);
	const [isScrolling, setIsScrolling] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [isFrozen, setIsFrozen] = useState(false);
	const [showSettings, setShowSettings] = useState(false);
	const [showSettingsVisible, setShowSettingsVisible] = useState(false);
	const [settingsPage, setSettingsPage] = useState("main");
	const [tooltipsHidden, setTooltipsHidden] = useState(false);
	const [tooltipSessionActive, setTooltipSessionActive] = useState(false);
	const tooltipSessionTimerRef = useRef(null);
	const [pendingMultiSelectElements, setPendingMultiSelectElements] = useState([]);
	const modifiersHeldRef = useRef({
		cmd: false,
		shift: false
	});
	const hideTooltipsUntilMouseLeave = () => {
		setTooltipsHidden(true);
	};
	const showTooltipsAgain = () => {
		setTooltipsHidden(false);
	};
	const handleControlsMouseEnter = () => {
		if (!tooltipSessionActive) tooltipSessionTimerRef.current = setTimeout(() => setTooltipSessionActive(true), 850);
	};
	const handleControlsMouseLeave = () => {
		if (tooltipSessionTimerRef.current) {
			clearTimeout(tooltipSessionTimerRef.current);
			tooltipSessionTimerRef.current = null;
		}
		setTooltipSessionActive(false);
		showTooltipsAgain();
	};
	useEffect(() => {
		return () => {
			if (tooltipSessionTimerRef.current) clearTimeout(tooltipSessionTimerRef.current);
		};
	}, []);
	const [settings, setSettings] = useState(() => {
		try {
			const saved = JSON.parse(localStorage.getItem("feedback-toolbar-settings") ?? "");
			return {
				...DEFAULT_SETTINGS,
				...saved,
				annotationColorId: COLOR_OPTIONS.find((c) => c.id === saved.annotationColorId) ? saved.annotationColorId : DEFAULT_SETTINGS.annotationColorId
			};
		} catch {
			return DEFAULT_SETTINGS;
		}
	});
	const [isDarkMode, setIsDarkMode] = useState(true);
	const [showEntranceAnimation, setShowEntranceAnimation] = useState(false);
	const toggleTheme = () => {
		portalWrapperRef.current?.classList.add(styles_module_default2.disableTransitions);
		setIsDarkMode((previous) => !previous);
		requestAnimationFrame(() => {
			portalWrapperRef.current?.classList.remove(styles_module_default2.disableTransitions);
		});
	};
	const isDevMode = false;
	const effectiveReactMode = "off";
	const [currentSessionId, setCurrentSessionId] = useState(initialSessionId ?? null);
	const sessionInitializedRef = useRef(false);
	const [connectionStatus, setConnectionStatus] = useState(endpoint ? "connecting" : "disconnected");
	const [toolbarPosition, setToolbarPosition] = useState(null);
	const [isDraggingToolbar, setIsDraggingToolbar] = useState(false);
	const [dragStartPos, setDragStartPos] = useState(null);
	const [dragRotation, setDragRotation] = useState(0);
	const justFinishedToolbarDragRef = useRef(false);
	const [animatedMarkers, setAnimatedMarkers] = useState(/* @__PURE__ */ new Set());
	const [exitingMarkers, setExitingMarkers] = useState(/* @__PURE__ */ new Set());
	const [pendingExiting, setPendingExiting] = useState(false);
	const [editExiting, setEditExiting] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const mouseDownPosRef = useRef(null);
	const dragStartRef = useRef(null);
	const dragRectRef = useRef(null);
	const highlightsContainerRef = useRef(null);
	const justFinishedDragRef = useRef(false);
	const lastElementUpdateRef = useRef(0);
	const recentlyAddedIdRef = useRef(null);
	const prevConnectionStatusRef = useRef(null);
	const DRAG_THRESHOLD = 8;
	const ELEMENT_UPDATE_THROTTLE = 50;
	const popupRef = useRef(null);
	const editPopupRef = useRef(null);
	const scrollTimeoutRef = useRef(null);
	const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
	useEffect(() => {
		if (showSettings) setShowSettingsVisible(true);
		else {
			setTooltipsHidden(false);
			setSettingsPage("main");
			const timer = originalSetTimeout(() => setShowSettingsVisible(false), 0);
			return () => clearTimeout(timer);
		}
	}, [showSettings]);
	const shouldShowMarkers = isActive && showMarkers;
	useEffect(() => {
		if (shouldShowMarkers) {
			setMarkersExiting(false);
			setMarkersVisible(true);
			setAnimatedMarkers(/* @__PURE__ */ new Set());
			const timer = originalSetTimeout(() => {
				setAnimatedMarkers((prev) => {
					const newSet = new Set(prev);
					annotations.forEach((a) => newSet.add(a.id));
					return newSet;
				});
			}, 350);
			return () => clearTimeout(timer);
		} else if (markersVisible) {
			setMarkersExiting(true);
			const timer = originalSetTimeout(() => {
				setMarkersVisible(false);
				setMarkersExiting(false);
			}, 250);
			return () => clearTimeout(timer);
		}
	}, [shouldShowMarkers]);
	useEffect(() => {
		setMounted(true);
		setScrollY(window.scrollY);
		setAnnotations(loadAnnotations(pathname).filter(isRenderableAnnotation));
		if (!hasPlayedEntranceAnimation) {
			setShowEntranceAnimation(true);
			hasPlayedEntranceAnimation = true;
			originalSetTimeout(() => setShowEntranceAnimation(false), 750);
		}
		try {
			const savedTheme = localStorage.getItem("feedback-toolbar-theme");
			if (savedTheme !== null) setIsDarkMode(savedTheme === "dark");
		} catch (e) {}
		try {
			const savedPosition = localStorage.getItem("feedback-toolbar-position");
			if (savedPosition) {
				const pos = JSON.parse(savedPosition);
				if (typeof pos.x === "number" && typeof pos.y === "number") setToolbarPosition(pos);
			}
		} catch (e) {}
	}, [pathname]);
	useEffect(() => {
		if (mounted) localStorage.setItem("feedback-toolbar-settings", JSON.stringify(settings));
	}, [settings, mounted]);
	useEffect(() => {
		if (mounted) localStorage.setItem("feedback-toolbar-theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode, mounted]);
	const prevDraggingRef = useRef(false);
	useEffect(() => {
		const wasDragging = prevDraggingRef.current;
		prevDraggingRef.current = isDraggingToolbar;
		if (wasDragging && !isDraggingToolbar && toolbarPosition && mounted) localStorage.setItem("feedback-toolbar-position", JSON.stringify(toolbarPosition));
	}, [
		isDraggingToolbar,
		toolbarPosition,
		mounted
	]);
	useEffect(() => {
		if (!endpoint || !mounted || sessionInitializedRef.current) return;
		sessionInitializedRef.current = true;
		setConnectionStatus("connecting");
		const initSession = async () => {
			try {
				const storedSessionId = loadSessionId(pathname);
				const sessionIdToJoin = initialSessionId || storedSessionId;
				let sessionEstablished = false;
				if (sessionIdToJoin) try {
					const session = await getSession(endpoint, sessionIdToJoin);
					setCurrentSessionId(session.id);
					setConnectionStatus("connected");
					saveSessionId(pathname, session.id);
					sessionEstablished = true;
					const allLocalAnnotations = loadAnnotations(pathname);
					const serverIds = new Set(session.annotations.map((a) => a.id));
					const localToMerge = allLocalAnnotations.filter((a) => {
						if (serverIds.has(a.id)) return false;
						return true;
					});
					if (localToMerge.length > 0) {
						const pageUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${pathname}`;
						const syncedAnnotations = (await Promise.allSettled(localToMerge.map((annotation) => syncAnnotation(endpoint, session.id, {
							...annotation,
							sessionId: session.id,
							url: pageUrl
						})))).map((result, i) => {
							if (result.status === "fulfilled") return result.value;
							console.warn("[Agentation] Failed to sync annotation:", result.reason);
							return localToMerge[i];
						});
						const allAnnotations = [...session.annotations, ...syncedAnnotations];
						setAnnotations(allAnnotations.filter(isRenderableAnnotation));
						saveAnnotationsWithSyncMarker(pathname, allAnnotations.filter(isRenderableAnnotation), session.id);
					} else {
						setAnnotations(session.annotations.filter(isRenderableAnnotation));
						saveAnnotationsWithSyncMarker(pathname, session.annotations.filter(isRenderableAnnotation), session.id);
					}
				} catch (joinError) {
					console.warn("[Agentation] Could not join session, creating new:", joinError);
					clearSessionId(pathname);
				}
				if (!sessionEstablished) {
					const session = await createSession(endpoint, typeof window !== "undefined" ? window.location.href : "/");
					setCurrentSessionId(session.id);
					setConnectionStatus("connected");
					saveSessionId(pathname, session.id);
					onSessionCreated?.(session.id);
					const allAnnotations = loadAllAnnotations();
					const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
					const syncPromises = [];
					for (const [pagePath, annotations2] of allAnnotations) {
						const unsyncedAnnotations = annotations2.filter((a) => !a._syncedTo);
						if (unsyncedAnnotations.length === 0) continue;
						const pageUrl = `${baseUrl}${pagePath}`;
						const isCurrentPage = pagePath === pathname;
						syncPromises.push((async () => {
							try {
								const targetSession = isCurrentPage ? session : await createSession(endpoint, pageUrl);
								const renderableSyncedAnnotations = (await Promise.allSettled(unsyncedAnnotations.map((annotation) => syncAnnotation(endpoint, targetSession.id, {
									...annotation,
									sessionId: targetSession.id,
									url: pageUrl
								})))).map((result, i) => {
									if (result.status === "fulfilled") return result.value;
									console.warn("[Agentation] Failed to sync annotation:", result.reason);
									return unsyncedAnnotations[i];
								}).filter(isRenderableAnnotation);
								saveAnnotationsWithSyncMarker(pagePath, renderableSyncedAnnotations, targetSession.id);
								if (isCurrentPage) {
									const originalIds = new Set(unsyncedAnnotations.map((a) => a.id));
									setAnnotations((prev) => {
										const newDuringSync = prev.filter((a) => !originalIds.has(a.id));
										return [...renderableSyncedAnnotations, ...newDuringSync];
									});
								}
							} catch (err) {
								console.warn(`[Agentation] Failed to sync annotations for ${pagePath}:`, err);
							}
						})());
					}
					await Promise.allSettled(syncPromises);
				}
			} catch (error) {
				setConnectionStatus("disconnected");
				console.warn("[Agentation] Failed to initialize session, using local storage:", error);
			}
		};
		initSession();
	}, [
		endpoint,
		initialSessionId,
		mounted,
		onSessionCreated,
		pathname
	]);
	useEffect(() => {
		if (!endpoint || !mounted) return;
		const checkHealth = async () => {
			try {
				if ((await fetch(`${endpoint}/health`)).ok) setConnectionStatus("connected");
				else setConnectionStatus("disconnected");
			} catch {
				setConnectionStatus("disconnected");
			}
		};
		checkHealth();
		const interval = originalSetInterval(checkHealth, 1e4);
		return () => clearInterval(interval);
	}, [endpoint, mounted]);
	useEffect(() => {
		if (!endpoint || !mounted || !currentSessionId) return;
		const eventSource = new EventSource(`${endpoint}/sessions/${currentSessionId}/events`);
		const removedStatuses = ["resolved", "dismissed"];
		const handler = (e) => {
			try {
				const event = JSON.parse(e.data);
				if (removedStatuses.includes(event.payload?.status)) {
					const id = event.payload.id;
					setExitingMarkers((prev) => new Set(prev).add(id));
					originalSetTimeout(() => {
						setAnnotations((prev) => prev.filter((a) => a.id !== id));
						setExitingMarkers((prev) => {
							const next = new Set(prev);
							next.delete(id);
							return next;
						});
					}, 150);
				}
			} catch {}
		};
		eventSource.addEventListener("annotation.updated", handler);
		return () => {
			eventSource.removeEventListener("annotation.updated", handler);
			eventSource.close();
		};
	}, [
		endpoint,
		mounted,
		currentSessionId
	]);
	useEffect(() => {
		if (!endpoint || !mounted) return;
		const wasDisconnected = prevConnectionStatusRef.current === "disconnected";
		const isNowConnected = connectionStatus === "connected";
		prevConnectionStatusRef.current = connectionStatus;
		if (wasDisconnected && isNowConnected) {
			const syncLocalAnnotations = async () => {
				try {
					const localAnnotations = loadAnnotations(pathname);
					if (localAnnotations.length === 0) return;
					const pageUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${pathname}`;
					let sessionId = currentSessionId;
					let serverAnnotations = [];
					if (sessionId) try {
						serverAnnotations = (await getSession(endpoint, sessionId)).annotations;
					} catch {
						sessionId = null;
					}
					if (!sessionId) {
						sessionId = (await createSession(endpoint, pageUrl)).id;
						setCurrentSessionId(sessionId);
						saveSessionId(pathname, sessionId);
					}
					const serverIds = new Set(serverAnnotations.map((a) => a.id));
					const unsyncedLocal = localAnnotations.filter((a) => !serverIds.has(a.id));
					if (unsyncedLocal.length > 0) {
						const syncedAnnotations = (await Promise.allSettled(unsyncedLocal.map((annotation) => syncAnnotation(endpoint, sessionId, {
							...annotation,
							sessionId,
							url: pageUrl
						})))).map((result, i) => {
							if (result.status === "fulfilled") return result.value;
							console.warn("[Agentation] Failed to sync annotation on reconnect:", result.reason);
							return unsyncedLocal[i];
						});
						const renderableAnnotations = [...serverAnnotations, ...syncedAnnotations].filter(isRenderableAnnotation);
						setAnnotations(renderableAnnotations);
						saveAnnotationsWithSyncMarker(pathname, renderableAnnotations, sessionId);
					}
				} catch (err) {
					console.warn("[Agentation] Failed to sync on reconnect:", err);
				}
			};
			syncLocalAnnotations();
		}
	}, [
		connectionStatus,
		endpoint,
		mounted,
		currentSessionId,
		pathname
	]);
	const hideToolbarTemporarily = useCallback(() => {
		if (isToolbarHiding) return;
		setIsToolbarHiding(true);
		setShowSettings(false);
		setIsActive(false);
		originalSetTimeout(() => {
			saveToolbarHidden(true);
			setIsToolbarHidden(true);
			setIsToolbarHiding(false);
		}, 400);
	}, [isToolbarHiding]);
	useEffect(() => {
		if (!enableDemoMode) return;
		if (!mounted || !demoAnnotations || demoAnnotations.length === 0) return;
		if (annotations.length > 0) return;
		const timeoutIds = [];
		timeoutIds.push(originalSetTimeout(() => {
			setIsActive(true);
		}, demoDelay - 200));
		demoAnnotations.forEach((demo, index) => {
			const annotationDelay = demoDelay + index * 300;
			timeoutIds.push(originalSetTimeout(() => {
				const element = document.querySelector(demo.selector);
				if (!element) return;
				const rect = element.getBoundingClientRect();
				const { name, path } = identifyElement(element);
				const newAnnotation = {
					id: `demo-${Date.now()}-${index}`,
					x: (rect.left + rect.width / 2) / window.innerWidth * 100,
					y: rect.top + rect.height / 2 + window.scrollY,
					comment: demo.comment,
					element: name,
					elementPath: path,
					timestamp: Date.now(),
					selectedText: demo.selectedText,
					boundingBox: {
						x: rect.left,
						y: rect.top + window.scrollY,
						width: rect.width,
						height: rect.height
					},
					nearbyText: getNearbyText(element),
					cssClasses: getElementClasses(element)
				};
				setAnnotations((prev) => [...prev, newAnnotation]);
			}, annotationDelay));
		});
		return () => {
			timeoutIds.forEach(clearTimeout);
		};
	}, [
		enableDemoMode,
		mounted,
		demoAnnotations,
		demoDelay
	]);
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
			setIsScrolling(true);
			if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
			scrollTimeoutRef.current = originalSetTimeout(() => {
				setIsScrolling(false);
			}, 150);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
		};
	}, []);
	useEffect(() => {
		if (mounted && annotations.length > 0) if (currentSessionId) saveAnnotationsWithSyncMarker(pathname, annotations, currentSessionId);
		else saveAnnotations(pathname, annotations);
		else if (mounted && annotations.length === 0) localStorage.removeItem(getStorageKey(pathname));
	}, [
		annotations,
		pathname,
		mounted,
		currentSessionId
	]);
	const freezeAnimations = useCallback(() => {
		if (isFrozen) return;
		freeze();
		setIsFrozen(true);
	}, [isFrozen]);
	const unfreezeAnimations = useCallback(() => {
		if (!isFrozen) return;
		unfreeze();
		setIsFrozen(false);
	}, [isFrozen]);
	const toggleFreeze = useCallback(() => {
		if (isFrozen) unfreezeAnimations();
		else freezeAnimations();
	}, [
		isFrozen,
		freezeAnimations,
		unfreezeAnimations
	]);
	const createMultiSelectPendingAnnotation = useCallback(() => {
		if (pendingMultiSelectElements.length === 0) return;
		const firstItem = pendingMultiSelectElements[0];
		const firstEl = firstItem.element;
		const isMulti = pendingMultiSelectElements.length > 1;
		const freshRects = pendingMultiSelectElements.map((item) => item.element.getBoundingClientRect());
		if (!isMulti) {
			const rect = freshRects[0];
			const isFixed = isElementFixed(firstEl);
			setPendingAnnotation({
				x: rect.left / window.innerWidth * 100,
				y: isFixed ? rect.top : rect.top + window.scrollY,
				clientY: rect.top,
				element: firstItem.name,
				elementPath: firstItem.path,
				boundingBox: {
					x: rect.left,
					y: isFixed ? rect.top : rect.top + window.scrollY,
					width: rect.width,
					height: rect.height
				},
				isFixed,
				fullPath: getFullElementPath(firstEl),
				accessibility: getAccessibilityInfo(firstEl),
				computedStyles: getForensicComputedStyles(firstEl),
				computedStylesObj: getDetailedComputedStyles(firstEl),
				nearbyElements: getNearbyElements(firstEl),
				cssClasses: getElementClasses(firstEl),
				nearbyText: getNearbyText(firstEl),
				reactComponents: firstItem.reactComponents,
				sourceFile: detectSourceFile(firstEl)
			});
		} else {
			const bounds = {
				left: Math.min(...freshRects.map((r) => r.left)),
				top: Math.min(...freshRects.map((r) => r.top)),
				right: Math.max(...freshRects.map((r) => r.right)),
				bottom: Math.max(...freshRects.map((r) => r.bottom))
			};
			const names = pendingMultiSelectElements.slice(0, 5).map((item) => item.name).join(", ");
			const suffix = pendingMultiSelectElements.length > 5 ? ` +${pendingMultiSelectElements.length - 5} more` : "";
			const elementBoundingBoxes = freshRects.map((rect) => ({
				x: rect.left,
				y: rect.top + window.scrollY,
				width: rect.width,
				height: rect.height
			}));
			const lastEl = pendingMultiSelectElements[pendingMultiSelectElements.length - 1].element;
			const lastRect = freshRects[freshRects.length - 1];
			const lastCenterX = lastRect.left + lastRect.width / 2;
			const lastCenterY = lastRect.top + lastRect.height / 2;
			const lastIsFixed = isElementFixed(lastEl);
			setPendingAnnotation({
				x: lastCenterX / window.innerWidth * 100,
				y: lastIsFixed ? lastCenterY : lastCenterY + window.scrollY,
				clientY: lastCenterY,
				element: `${pendingMultiSelectElements.length} elements: ${names}${suffix}`,
				elementPath: "multi-select",
				boundingBox: {
					x: bounds.left,
					y: bounds.top + window.scrollY,
					width: bounds.right - bounds.left,
					height: bounds.bottom - bounds.top
				},
				isMultiSelect: true,
				isFixed: lastIsFixed,
				elementBoundingBoxes,
				multiSelectElements: pendingMultiSelectElements.map((item) => item.element),
				targetElement: lastEl,
				fullPath: getFullElementPath(firstEl),
				accessibility: getAccessibilityInfo(firstEl),
				computedStyles: getForensicComputedStyles(firstEl),
				computedStylesObj: getDetailedComputedStyles(firstEl),
				nearbyElements: getNearbyElements(firstEl),
				cssClasses: getElementClasses(firstEl),
				nearbyText: getNearbyText(firstEl),
				sourceFile: detectSourceFile(firstEl)
			});
		}
		setPendingMultiSelectElements([]);
		setHoverInfo(null);
	}, [pendingMultiSelectElements]);
	useEffect(() => {
		if (!isActive) {
			setPendingAnnotation(null);
			setEditingAnnotation(null);
			setEditingTargetElement(null);
			setEditingTargetElements([]);
			setHoverInfo(null);
			setShowSettings(false);
			setPendingMultiSelectElements([]);
			modifiersHeldRef.current = {
				cmd: false,
				shift: false
			};
			if (isFrozen) unfreezeAnimations();
		}
	}, [
		isActive,
		isFrozen,
		unfreezeAnimations
	]);
	useEffect(() => {
		return () => {
			unfreeze();
		};
	}, []);
	useEffect(() => {
		if (!isActive) return;
		const style = document.createElement("style");
		style.id = "feedback-cursor-styles";
		style.textContent = `
      body * {
        cursor: crosshair !important;
      }
      body p, body span, body h1, body h2, body h3, body h4, body h5, body h6,
      body li, body td, body th, body label, body blockquote, body figcaption,
      body caption, body legend, body dt, body dd, body pre, body code,
      body em, body strong, body b, body i, body u, body s, body a,
      body time, body address, body cite, body q, body abbr, body dfn,
      body mark, body small, body sub, body sup, body [contenteditable],
      body p *, body span *, body h1 *, body h2 *, body h3 *, body h4 *,
      body h5 *, body h6 *, body li *, body a *, body label *, body pre *,
      body code *, body blockquote *, body [contenteditable] * {
        cursor: text !important;
      }
      [data-feedback-toolbar], [data-feedback-toolbar] * {
        cursor: auto !important;
      }
      [data-feedback-toolbar] textarea,
      [data-feedback-toolbar] input[type="text"],
      [data-feedback-toolbar] input[type="url"] {
        cursor: text !important;
      }
      [data-feedback-toolbar] button,
      [data-feedback-toolbar] button *,
      [data-feedback-toolbar] label,
      [data-feedback-toolbar] label *,
      [data-feedback-toolbar] a,
      [data-feedback-toolbar] a *,
      [data-feedback-toolbar] [role="button"],
      [data-feedback-toolbar] [role="button"] * {
        cursor: pointer !important;
      }
      [data-annotation-marker], [data-annotation-marker] * {
        cursor: pointer !important;
      }
    `;
		document.head.appendChild(style);
		return () => {
			const existingStyle = document.getElementById("feedback-cursor-styles");
			if (existingStyle) existingStyle.remove();
		};
	}, [isActive]);
	useEffect(() => {
		if (!isActive || pendingAnnotation) return;
		const handleMouseMove = (e) => {
			if (closestCrossingShadow(e.composedPath()[0] || e.target, "[data-feedback-toolbar]")) {
				setHoverInfo(null);
				return;
			}
			const elementUnder = deepElementFromPoint(e.clientX, e.clientY);
			if (!elementUnder || closestCrossingShadow(elementUnder, "[data-feedback-toolbar]")) {
				setHoverInfo(null);
				return;
			}
			const { name, elementName, path, reactComponents } = identifyElementWithReact(elementUnder, effectiveReactMode);
			setHoverInfo({
				element: name,
				elementName,
				elementPath: path,
				rect: elementUnder.getBoundingClientRect(),
				reactComponents
			});
			setHoverPosition({
				x: e.clientX,
				y: e.clientY
			});
		};
		document.addEventListener("mousemove", handleMouseMove);
		return () => document.removeEventListener("mousemove", handleMouseMove);
	}, [
		isActive,
		pendingAnnotation,
		effectiveReactMode
	]);
	useEffect(() => {
		if (!isActive) return;
		const handleClick = (e) => {
			if (justFinishedDragRef.current) {
				justFinishedDragRef.current = false;
				return;
			}
			const target = e.composedPath()[0] || e.target;
			if (closestCrossingShadow(target, "[data-feedback-toolbar]")) return;
			if (closestCrossingShadow(target, "[data-annotation-popup]")) return;
			if (closestCrossingShadow(target, "[data-annotation-marker]")) return;
			if (e.metaKey && e.shiftKey && !pendingAnnotation && !editingAnnotation) {
				e.preventDefault();
				e.stopPropagation();
				const elementUnder2 = deepElementFromPoint(e.clientX, e.clientY);
				if (!elementUnder2) return;
				const rect2 = elementUnder2.getBoundingClientRect();
				const { name: name2, path: path2, reactComponents: reactComponents2 } = identifyElementWithReact(elementUnder2, effectiveReactMode);
				const existingIndex = pendingMultiSelectElements.findIndex((item) => item.element === elementUnder2);
				if (existingIndex >= 0) setPendingMultiSelectElements((prev) => prev.filter((_, i) => i !== existingIndex));
				else setPendingMultiSelectElements((prev) => [...prev, {
					element: elementUnder2,
					rect: rect2,
					name: name2,
					path: path2,
					reactComponents: reactComponents2 ?? void 0
				}]);
				return;
			}
			const isInteractive = closestCrossingShadow(target, "button, a, input, select, textarea, [role='button'], [onclick]");
			if (settings.blockInteractions && isInteractive) {
				e.preventDefault();
				e.stopPropagation();
			}
			if (pendingAnnotation) {
				if (isInteractive && !settings.blockInteractions) return;
				e.preventDefault();
				popupRef.current?.shake();
				return;
			}
			if (editingAnnotation) {
				if (isInteractive && !settings.blockInteractions) return;
				e.preventDefault();
				editPopupRef.current?.shake();
				return;
			}
			e.preventDefault();
			const elementUnder = deepElementFromPoint(e.clientX, e.clientY);
			if (!elementUnder) return;
			const { name, path, reactComponents } = identifyElementWithReact(elementUnder, effectiveReactMode);
			const rect = elementUnder.getBoundingClientRect();
			const x = e.clientX / window.innerWidth * 100;
			const isFixed = isElementFixed(elementUnder);
			const y = isFixed ? e.clientY : e.clientY + window.scrollY;
			const selection = window.getSelection();
			let selectedText;
			if (selection && selection.toString().trim().length > 0) selectedText = selection.toString().trim().slice(0, 500);
			const computedStylesObj = getDetailedComputedStyles(elementUnder);
			const computedStylesStr = getForensicComputedStyles(elementUnder);
			setPendingAnnotation({
				x,
				y,
				clientY: e.clientY,
				element: name,
				elementPath: path,
				selectedText,
				boundingBox: {
					x: rect.left,
					y: isFixed ? rect.top : rect.top + window.scrollY,
					width: rect.width,
					height: rect.height
				},
				nearbyText: getNearbyText(elementUnder),
				cssClasses: getElementClasses(elementUnder),
				isFixed,
				fullPath: getFullElementPath(elementUnder),
				accessibility: getAccessibilityInfo(elementUnder),
				computedStyles: computedStylesStr,
				computedStylesObj,
				nearbyElements: getNearbyElements(elementUnder),
				reactComponents: reactComponents ?? void 0,
				sourceFile: detectSourceFile(elementUnder),
				targetElement: elementUnder
			});
			setHoverInfo(null);
		};
		document.addEventListener("click", handleClick, true);
		return () => document.removeEventListener("click", handleClick, true);
	}, [
		isActive,
		pendingAnnotation,
		editingAnnotation,
		settings.blockInteractions,
		effectiveReactMode,
		pendingMultiSelectElements
	]);
	useEffect(() => {
		if (!isActive) return;
		const handleKeyDown = (e) => {
			if (e.key === "Meta") modifiersHeldRef.current.cmd = true;
			if (e.key === "Shift") modifiersHeldRef.current.shift = true;
		};
		const handleKeyUp = (e) => {
			const wasHoldingBoth = modifiersHeldRef.current.cmd && modifiersHeldRef.current.shift;
			if (e.key === "Meta") modifiersHeldRef.current.cmd = false;
			if (e.key === "Shift") modifiersHeldRef.current.shift = false;
			const nowHoldingBoth = modifiersHeldRef.current.cmd && modifiersHeldRef.current.shift;
			if (wasHoldingBoth && !nowHoldingBoth && pendingMultiSelectElements.length > 0) createMultiSelectPendingAnnotation();
		};
		const handleBlur = () => {
			modifiersHeldRef.current = {
				cmd: false,
				shift: false
			};
			setPendingMultiSelectElements([]);
		};
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		window.addEventListener("blur", handleBlur);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
			window.removeEventListener("blur", handleBlur);
		};
	}, [
		isActive,
		pendingMultiSelectElements,
		createMultiSelectPendingAnnotation
	]);
	useEffect(() => {
		if (!isActive || pendingAnnotation) return;
		const handleMouseDown = (e) => {
			const target = e.composedPath()[0] || e.target;
			if (closestCrossingShadow(target, "[data-feedback-toolbar]")) return;
			if (closestCrossingShadow(target, "[data-annotation-marker]")) return;
			if (closestCrossingShadow(target, "[data-annotation-popup]")) return;
			if ((/* @__PURE__ */ new Set([
				"P",
				"SPAN",
				"H1",
				"H2",
				"H3",
				"H4",
				"H5",
				"H6",
				"LI",
				"TD",
				"TH",
				"LABEL",
				"BLOCKQUOTE",
				"FIGCAPTION",
				"CAPTION",
				"LEGEND",
				"DT",
				"DD",
				"PRE",
				"CODE",
				"EM",
				"STRONG",
				"B",
				"I",
				"U",
				"S",
				"A",
				"TIME",
				"ADDRESS",
				"CITE",
				"Q",
				"ABBR",
				"DFN",
				"MARK",
				"SMALL",
				"SUB",
				"SUP"
			])).has(target.tagName) || target.isContentEditable) return;
			mouseDownPosRef.current = {
				x: e.clientX,
				y: e.clientY
			};
		};
		document.addEventListener("mousedown", handleMouseDown);
		return () => document.removeEventListener("mousedown", handleMouseDown);
	}, [isActive, pendingAnnotation]);
	useEffect(() => {
		if (!isActive || pendingAnnotation) return;
		const handleMouseMove = (e) => {
			if (!mouseDownPosRef.current) return;
			const dx = e.clientX - mouseDownPosRef.current.x;
			const dy = e.clientY - mouseDownPosRef.current.y;
			const distance = dx * dx + dy * dy;
			const thresholdSq = DRAG_THRESHOLD * DRAG_THRESHOLD;
			if (!isDragging && distance >= thresholdSq) {
				dragStartRef.current = mouseDownPosRef.current;
				setIsDragging(true);
			}
			if ((isDragging || distance >= thresholdSq) && dragStartRef.current) {
				if (dragRectRef.current) {
					const left2 = Math.min(dragStartRef.current.x, e.clientX);
					const top2 = Math.min(dragStartRef.current.y, e.clientY);
					const width = Math.abs(e.clientX - dragStartRef.current.x);
					const height = Math.abs(e.clientY - dragStartRef.current.y);
					dragRectRef.current.style.transform = `translate(${left2}px, ${top2}px)`;
					dragRectRef.current.style.width = `${width}px`;
					dragRectRef.current.style.height = `${height}px`;
				}
				const now = Date.now();
				if (now - lastElementUpdateRef.current < ELEMENT_UPDATE_THROTTLE) return;
				lastElementUpdateRef.current = now;
				const startX = dragStartRef.current.x;
				const startY = dragStartRef.current.y;
				const left = Math.min(startX, e.clientX);
				const top = Math.min(startY, e.clientY);
				const right = Math.max(startX, e.clientX);
				const bottom = Math.max(startY, e.clientY);
				const midX = (left + right) / 2;
				const midY = (top + bottom) / 2;
				const candidateElements = /* @__PURE__ */ new Set();
				const points = [
					[left, top],
					[right, top],
					[left, bottom],
					[right, bottom],
					[midX, midY],
					[midX, top],
					[midX, bottom],
					[left, midY],
					[right, midY]
				];
				for (const [x, y] of points) {
					const elements = document.elementsFromPoint(x, y);
					for (const el of elements) if (el instanceof HTMLElement) candidateElements.add(el);
				}
				const nearbyElements = document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");
				for (const el of nearbyElements) if (el instanceof HTMLElement) {
					const rect = el.getBoundingClientRect();
					const centerX = rect.left + rect.width / 2;
					const centerY = rect.top + rect.height / 2;
					const centerInside = centerX >= left && centerX <= right && centerY >= top && centerY <= bottom;
					const overlapX = Math.min(rect.right, right) - Math.max(rect.left, left);
					const overlapY = Math.min(rect.bottom, bottom) - Math.max(rect.top, top);
					const overlapArea = overlapX > 0 && overlapY > 0 ? overlapX * overlapY : 0;
					const elementArea = rect.width * rect.height;
					const overlapRatio = elementArea > 0 ? overlapArea / elementArea : 0;
					if (centerInside || overlapRatio > .5) candidateElements.add(el);
				}
				const allMatching = [];
				const meaningfulTags = /* @__PURE__ */ new Set([
					"BUTTON",
					"A",
					"INPUT",
					"IMG",
					"P",
					"H1",
					"H2",
					"H3",
					"H4",
					"H5",
					"H6",
					"LI",
					"LABEL",
					"TD",
					"TH",
					"SECTION",
					"ARTICLE",
					"ASIDE",
					"NAV"
				]);
				for (const el of candidateElements) {
					if (closestCrossingShadow(el, "[data-feedback-toolbar]") || closestCrossingShadow(el, "[data-annotation-marker]")) continue;
					const rect = el.getBoundingClientRect();
					if (rect.width > window.innerWidth * .8 && rect.height > window.innerHeight * .5) continue;
					if (rect.width < 10 || rect.height < 10) continue;
					if (rect.left < right && rect.right > left && rect.top < bottom && rect.bottom > top) {
						const tagName = el.tagName;
						let shouldInclude = meaningfulTags.has(tagName);
						if (!shouldInclude && (tagName === "DIV" || tagName === "SPAN")) {
							const hasText = el.textContent && el.textContent.trim().length > 0;
							const isInteractive = el.onclick !== null || el.getAttribute("role") === "button" || el.getAttribute("role") === "link" || el.classList.contains("clickable") || el.hasAttribute("data-clickable");
							if ((hasText || isInteractive) && !el.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")) shouldInclude = true;
						}
						if (shouldInclude) {
							let dominated = false;
							for (const existingRect of allMatching) if (existingRect.left <= rect.left && existingRect.right >= rect.right && existingRect.top <= rect.top && existingRect.bottom >= rect.bottom) {
								dominated = true;
								break;
							}
							if (!dominated) allMatching.push(rect);
						}
					}
				}
				if (highlightsContainerRef.current) {
					const container = highlightsContainerRef.current;
					while (container.children.length > allMatching.length) container.removeChild(container.lastChild);
					allMatching.forEach((rect, i) => {
						let div = container.children[i];
						if (!div) {
							div = document.createElement("div");
							div.className = styles_module_default2.selectedElementHighlight;
							container.appendChild(div);
						}
						div.style.transform = `translate(${rect.left}px, ${rect.top}px)`;
						div.style.width = `${rect.width}px`;
						div.style.height = `${rect.height}px`;
					});
				}
			}
		};
		document.addEventListener("mousemove", handleMouseMove, { passive: true });
		return () => document.removeEventListener("mousemove", handleMouseMove);
	}, [
		isActive,
		pendingAnnotation,
		isDragging,
		DRAG_THRESHOLD
	]);
	useEffect(() => {
		if (!isActive) return;
		const handleMouseUp = (e) => {
			const wasDragging = isDragging;
			const dragStart = dragStartRef.current;
			if (isDragging && dragStart) {
				justFinishedDragRef.current = true;
				const left = Math.min(dragStart.x, e.clientX);
				const top = Math.min(dragStart.y, e.clientY);
				const right = Math.max(dragStart.x, e.clientX);
				const bottom = Math.max(dragStart.y, e.clientY);
				const allMatching = [];
				document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach((el) => {
					if (!(el instanceof HTMLElement)) return;
					if (closestCrossingShadow(el, "[data-feedback-toolbar]") || closestCrossingShadow(el, "[data-annotation-marker]")) return;
					const rect = el.getBoundingClientRect();
					if (rect.width > window.innerWidth * .8 && rect.height > window.innerHeight * .5) return;
					if (rect.width < 10 || rect.height < 10) return;
					if (rect.left < right && rect.right > left && rect.top < bottom && rect.bottom > top) allMatching.push({
						element: el,
						rect
					});
				});
				const finalElements = allMatching.filter(({ element: el }) => !allMatching.some(({ element: other }) => other !== el && el.contains(other)));
				const x = e.clientX / window.innerWidth * 100;
				const y = e.clientY + window.scrollY;
				if (finalElements.length > 0) {
					const bounds = finalElements.reduce((acc, { rect }) => ({
						left: Math.min(acc.left, rect.left),
						top: Math.min(acc.top, rect.top),
						right: Math.max(acc.right, rect.right),
						bottom: Math.max(acc.bottom, rect.bottom)
					}), {
						left: Infinity,
						top: Infinity,
						right: -Infinity,
						bottom: -Infinity
					});
					const elementNames = finalElements.slice(0, 5).map(({ element }) => identifyElement(element).name).join(", ");
					const suffix = finalElements.length > 5 ? ` +${finalElements.length - 5} more` : "";
					const firstElement = finalElements[0].element;
					const firstElementComputedStyles = getDetailedComputedStyles(firstElement);
					const firstElementComputedStylesStr = getForensicComputedStyles(firstElement);
					setPendingAnnotation({
						x,
						y,
						clientY: e.clientY,
						element: `${finalElements.length} elements: ${elementNames}${suffix}`,
						elementPath: "multi-select",
						boundingBox: {
							x: bounds.left,
							y: bounds.top + window.scrollY,
							width: bounds.right - bounds.left,
							height: bounds.bottom - bounds.top
						},
						isMultiSelect: true,
						fullPath: getFullElementPath(firstElement),
						accessibility: getAccessibilityInfo(firstElement),
						computedStyles: firstElementComputedStylesStr,
						computedStylesObj: firstElementComputedStyles,
						nearbyElements: getNearbyElements(firstElement),
						cssClasses: getElementClasses(firstElement),
						nearbyText: getNearbyText(firstElement),
						sourceFile: detectSourceFile(firstElement)
					});
				} else {
					const width = Math.abs(right - left);
					const height = Math.abs(bottom - top);
					if (width > 20 && height > 20) setPendingAnnotation({
						x,
						y,
						clientY: e.clientY,
						element: "Area selection",
						elementPath: `region at (${Math.round(left)}, ${Math.round(top)})`,
						boundingBox: {
							x: left,
							y: top + window.scrollY,
							width,
							height
						},
						isMultiSelect: true
					});
				}
				setHoverInfo(null);
			} else if (wasDragging) justFinishedDragRef.current = true;
			mouseDownPosRef.current = null;
			dragStartRef.current = null;
			setIsDragging(false);
			if (highlightsContainerRef.current) highlightsContainerRef.current.innerHTML = "";
		};
		document.addEventListener("mouseup", handleMouseUp);
		return () => document.removeEventListener("mouseup", handleMouseUp);
	}, [isActive, isDragging]);
	const fireWebhook = useCallback(async (event, payload, force) => {
		const targetUrl = settings.webhookUrl || webhookUrl;
		if (!targetUrl || !settings.webhooksEnabled && !force) return false;
		try {
			return (await fetch(targetUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					event,
					timestamp: Date.now(),
					url: typeof window !== "undefined" ? window.location.href : void 0,
					...payload
				})
			})).ok;
		} catch (error) {
			console.warn("[Agentation] Webhook failed:", error);
			return false;
		}
	}, [
		webhookUrl,
		settings.webhookUrl,
		settings.webhooksEnabled
	]);
	const addAnnotation = useCallback((comment) => {
		if (!pendingAnnotation) return;
		const newAnnotation = {
			id: Date.now().toString(),
			x: pendingAnnotation.x,
			y: pendingAnnotation.y,
			comment,
			element: pendingAnnotation.element,
			elementPath: pendingAnnotation.elementPath,
			timestamp: Date.now(),
			selectedText: pendingAnnotation.selectedText,
			boundingBox: pendingAnnotation.boundingBox,
			nearbyText: pendingAnnotation.nearbyText,
			cssClasses: pendingAnnotation.cssClasses,
			isMultiSelect: pendingAnnotation.isMultiSelect,
			isFixed: pendingAnnotation.isFixed,
			fullPath: pendingAnnotation.fullPath,
			accessibility: pendingAnnotation.accessibility,
			computedStyles: pendingAnnotation.computedStyles,
			nearbyElements: pendingAnnotation.nearbyElements,
			reactComponents: pendingAnnotation.reactComponents,
			sourceFile: pendingAnnotation.sourceFile,
			elementBoundingBoxes: pendingAnnotation.elementBoundingBoxes,
			...endpoint && currentSessionId ? {
				sessionId: currentSessionId,
				url: typeof window !== "undefined" ? window.location.href : void 0,
				status: "pending"
			} : {}
		};
		setAnnotations((prev) => [...prev, newAnnotation]);
		recentlyAddedIdRef.current = newAnnotation.id;
		originalSetTimeout(() => {
			recentlyAddedIdRef.current = null;
		}, 300);
		originalSetTimeout(() => {
			setAnimatedMarkers((prev) => new Set(prev).add(newAnnotation.id));
		}, 250);
		onAnnotationAdd?.(newAnnotation);
		fireWebhook("annotation.add", { annotation: newAnnotation });
		setPendingExiting(true);
		originalSetTimeout(() => {
			setPendingAnnotation(null);
			setPendingExiting(false);
		}, 150);
		window.getSelection()?.removeAllRanges();
		if (endpoint && currentSessionId) syncAnnotation(endpoint, currentSessionId, newAnnotation).then((serverAnnotation) => {
			if (serverAnnotation.id !== newAnnotation.id) {
				setAnnotations((prev) => prev.map((a) => a.id === newAnnotation.id ? {
					...a,
					id: serverAnnotation.id
				} : a));
				setAnimatedMarkers((prev) => {
					const next = new Set(prev);
					next.delete(newAnnotation.id);
					next.add(serverAnnotation.id);
					return next;
				});
			}
		}).catch((error) => {
			console.warn("[Agentation] Failed to sync annotation:", error);
		});
	}, [
		pendingAnnotation,
		onAnnotationAdd,
		fireWebhook,
		endpoint,
		currentSessionId
	]);
	const cancelAnnotation = useCallback(() => {
		setPendingExiting(true);
		originalSetTimeout(() => {
			setPendingAnnotation(null);
			setPendingExiting(false);
		}, 150);
	}, []);
	const deleteAnnotation2 = useCallback((id) => {
		const deletedIndex = annotations.findIndex((a) => a.id === id);
		const deletedAnnotation = annotations[deletedIndex];
		if (editingAnnotation?.id === id) {
			setEditExiting(true);
			originalSetTimeout(() => {
				setEditingAnnotation(null);
				setEditingTargetElement(null);
				setEditingTargetElements([]);
				setEditExiting(false);
			}, 150);
		}
		setDeletingMarkerId(id);
		setExitingMarkers((prev) => new Set(prev).add(id));
		if (deletedAnnotation) {
			onAnnotationDelete?.(deletedAnnotation);
			fireWebhook("annotation.delete", { annotation: deletedAnnotation });
		}
		if (endpoint) deleteAnnotation(endpoint, id).catch((error) => {
			console.warn("[Agentation] Failed to delete annotation from server:", error);
		});
		originalSetTimeout(() => {
			setAnnotations((prev) => prev.filter((a) => a.id !== id));
			setExitingMarkers((prev) => {
				const next = new Set(prev);
				next.delete(id);
				return next;
			});
			setDeletingMarkerId(null);
			if (deletedIndex < annotations.length - 1) {
				setRenumberFrom(deletedIndex);
				originalSetTimeout(() => setRenumberFrom(null), 200);
			}
		}, 150);
	}, [
		annotations,
		editingAnnotation,
		onAnnotationDelete,
		fireWebhook,
		endpoint
	]);
	const startEditAnnotation = useCallback((annotation) => {
		setEditingAnnotation(annotation);
		setHoveredMarkerId(null);
		setHoveredTargetElement(null);
		setHoveredTargetElements([]);
		if (annotation.elementBoundingBoxes?.length) {
			const elements = [];
			for (const bb of annotation.elementBoundingBoxes) {
				const el = deepElementFromPoint(bb.x + bb.width / 2, bb.y + bb.height / 2 - window.scrollY);
				if (el) elements.push(el);
			}
			setEditingTargetElements(elements);
			setEditingTargetElement(null);
		} else if (annotation.boundingBox) {
			const bb = annotation.boundingBox;
			const el = deepElementFromPoint(bb.x + bb.width / 2, annotation.isFixed ? bb.y + bb.height / 2 : bb.y + bb.height / 2 - window.scrollY);
			if (el) {
				const elRect = el.getBoundingClientRect();
				const widthRatio = elRect.width / bb.width;
				const heightRatio = elRect.height / bb.height;
				if (widthRatio < .5 || heightRatio < .5) setEditingTargetElement(null);
				else setEditingTargetElement(el);
			} else setEditingTargetElement(null);
			setEditingTargetElements([]);
		} else {
			setEditingTargetElement(null);
			setEditingTargetElements([]);
		}
	}, []);
	const handleMarkerHover = useCallback((annotation) => {
		if (!annotation) {
			setHoveredMarkerId(null);
			setHoveredTargetElement(null);
			setHoveredTargetElements([]);
			return;
		}
		setHoveredMarkerId(annotation.id);
		if (annotation.elementBoundingBoxes?.length) {
			const elements = [];
			for (const bb of annotation.elementBoundingBoxes) {
				const centerX = bb.x + bb.width / 2;
				const centerY = bb.y + bb.height / 2 - window.scrollY;
				const el = document.elementsFromPoint(centerX, centerY).find((e) => !e.closest("[data-annotation-marker]") && !e.closest("[data-agentation-root]"));
				if (el) elements.push(el);
			}
			setHoveredTargetElements(elements);
			setHoveredTargetElement(null);
		} else if (annotation.boundingBox) {
			const bb = annotation.boundingBox;
			const el = deepElementFromPoint(bb.x + bb.width / 2, annotation.isFixed ? bb.y + bb.height / 2 : bb.y + bb.height / 2 - window.scrollY);
			if (el) {
				const elRect = el.getBoundingClientRect();
				const widthRatio = elRect.width / bb.width;
				const heightRatio = elRect.height / bb.height;
				if (widthRatio < .5 || heightRatio < .5) setHoveredTargetElement(null);
				else setHoveredTargetElement(el);
			} else setHoveredTargetElement(null);
			setHoveredTargetElements([]);
		} else {
			setHoveredTargetElement(null);
			setHoveredTargetElements([]);
		}
	}, []);
	const updateAnnotation2 = useCallback((newComment) => {
		if (!editingAnnotation) return;
		const updatedAnnotation = {
			...editingAnnotation,
			comment: newComment
		};
		setAnnotations((prev) => prev.map((a) => a.id === editingAnnotation.id ? updatedAnnotation : a));
		onAnnotationUpdate?.(updatedAnnotation);
		fireWebhook("annotation.update", { annotation: updatedAnnotation });
		if (endpoint) updateAnnotation(endpoint, editingAnnotation.id, { comment: newComment }).catch((error) => {
			console.warn("[Agentation] Failed to update annotation on server:", error);
		});
		setEditExiting(true);
		originalSetTimeout(() => {
			setEditingAnnotation(null);
			setEditingTargetElement(null);
			setEditingTargetElements([]);
			setEditExiting(false);
		}, 150);
	}, [
		editingAnnotation,
		onAnnotationUpdate,
		fireWebhook,
		endpoint
	]);
	const cancelEditAnnotation = useCallback(() => {
		setEditExiting(true);
		originalSetTimeout(() => {
			setEditingAnnotation(null);
			setEditingTargetElement(null);
			setEditingTargetElements([]);
			setEditExiting(false);
		}, 150);
	}, []);
	const clearAll = useCallback(() => {
		const count = annotations.length;
		if (count === 0) return;
		onAnnotationsClear?.(annotations);
		fireWebhook("annotations.clear", { annotations });
		if (endpoint) Promise.all(annotations.map((a) => deleteAnnotation(endpoint, a.id).catch((error) => {
			console.warn("[Agentation] Failed to delete annotation from server:", error);
		})));
		setIsClearing(true);
		setCleared(true);
		originalSetTimeout(() => {
			setAnnotations([]);
			setAnimatedMarkers(/* @__PURE__ */ new Set());
			localStorage.removeItem(getStorageKey(pathname));
			setIsClearing(false);
		}, count * 30 + 200);
		originalSetTimeout(() => setCleared(false), 1500);
	}, [
		pathname,
		annotations,
		onAnnotationsClear,
		fireWebhook,
		endpoint
	]);
	const copyOutput = useCallback(async () => {
		const output = generateOutput(annotations, typeof window !== "undefined" ? window.location.pathname + window.location.search + window.location.hash : pathname, settings.outputDetail, effectiveReactMode);
		if (!output) return;
		if (copyToClipboard) try {
			await navigator.clipboard.writeText(output);
		} catch {}
		onCopy?.(output);
		setCopied(true);
		originalSetTimeout(() => setCopied(false), 2e3);
		if (settings.autoClearAfterCopy) originalSetTimeout(() => clearAll(), 500);
	}, [
		annotations,
		pathname,
		settings.outputDetail,
		effectiveReactMode,
		settings.autoClearAfterCopy,
		clearAll,
		copyToClipboard,
		onCopy
	]);
	const sendToWebhook = useCallback(async () => {
		const output = generateOutput(annotations, typeof window !== "undefined" ? window.location.pathname + window.location.search + window.location.hash : pathname, settings.outputDetail, effectiveReactMode);
		if (!output) return;
		if (onSubmit) onSubmit(output, annotations);
		setSendState("sending");
		await new Promise((resolve) => originalSetTimeout(resolve, 150));
		const success = await fireWebhook("submit", {
			output,
			annotations
		}, true);
		setSendState(success ? "sent" : "failed");
		originalSetTimeout(() => setSendState("idle"), 2500);
		if (success && settings.autoClearAfterCopy) originalSetTimeout(() => clearAll(), 500);
	}, [
		onSubmit,
		fireWebhook,
		annotations,
		pathname,
		settings.outputDetail,
		effectiveReactMode,
		settings.autoClearAfterCopy,
		clearAll
	]);
	useEffect(() => {
		if (!dragStartPos) return;
		const DRAG_THRESHOLD2 = 10;
		const handleMouseMove = (e) => {
			const deltaX = e.clientX - dragStartPos.x;
			const deltaY = e.clientY - dragStartPos.y;
			const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
			if (!isDraggingToolbar && distance > DRAG_THRESHOLD2) setIsDraggingToolbar(true);
			if (isDraggingToolbar || distance > DRAG_THRESHOLD2) {
				let newX = dragStartPos.toolbarX + deltaX;
				let newY = dragStartPos.toolbarY + deltaY;
				const padding = 20;
				const wrapperWidth = 297;
				const toolbarHeight = 44;
				const minX = padding - (wrapperWidth - (isActive ? connectionStatus === "connected" ? 297 : 257 : 44));
				const maxX = window.innerWidth - padding - wrapperWidth;
				newX = Math.max(minX, Math.min(maxX, newX));
				newY = Math.max(padding, Math.min(window.innerHeight - toolbarHeight - padding, newY));
				setToolbarPosition({
					x: newX,
					y: newY
				});
			}
		};
		const handleMouseUp = () => {
			if (isDraggingToolbar) justFinishedToolbarDragRef.current = true;
			setIsDraggingToolbar(false);
			setDragStartPos(null);
		};
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [
		dragStartPos,
		isDraggingToolbar,
		isActive,
		connectionStatus
	]);
	const handleToolbarMouseDown = useCallback((e) => {
		if (e.target.closest("button") || e.target.closest(`.${styles_module_default2.settingsPanel}`)) return;
		const toolbarParent = e.currentTarget.parentElement;
		if (!toolbarParent) return;
		const rect = toolbarParent.getBoundingClientRect();
		const currentX = toolbarPosition?.x ?? rect.left;
		const currentY = toolbarPosition?.y ?? rect.top;
		setDragRotation((Math.random() - .5) * 10);
		setDragStartPos({
			x: e.clientX,
			y: e.clientY,
			toolbarX: currentX,
			toolbarY: currentY
		});
	}, [toolbarPosition]);
	useEffect(() => {
		if (!toolbarPosition) return;
		const constrainPosition = () => {
			const padding = 20;
			const wrapperWidth = 297;
			const toolbarHeight = 44;
			let newX = toolbarPosition.x;
			let newY = toolbarPosition.y;
			const minX = padding - (wrapperWidth - (isActive ? connectionStatus === "connected" ? 297 : 257 : 44));
			const maxX = window.innerWidth - padding - wrapperWidth;
			newX = Math.max(minX, Math.min(maxX, newX));
			newY = Math.max(padding, Math.min(window.innerHeight - toolbarHeight - padding, newY));
			if (newX !== toolbarPosition.x || newY !== toolbarPosition.y) setToolbarPosition({
				x: newX,
				y: newY
			});
		};
		constrainPosition();
		window.addEventListener("resize", constrainPosition);
		return () => window.removeEventListener("resize", constrainPosition);
	}, [
		toolbarPosition,
		isActive,
		connectionStatus
	]);
	useEffect(() => {
		const handleKeyDown = (e) => {
			const target = e.target;
			const isTyping = target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;
			if (e.key === "Escape") {
				if (pendingMultiSelectElements.length > 0) {
					setPendingMultiSelectElements([]);
					return;
				}
				if (pendingAnnotation) {} else if (isActive) {
					hideTooltipsUntilMouseLeave();
					setIsActive(false);
				}
			}
			if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === "f" || e.key === "F")) {
				e.preventDefault();
				hideTooltipsUntilMouseLeave();
				setIsActive((prev) => !prev);
				return;
			}
			if (isTyping || e.metaKey || e.ctrlKey) return;
			if (e.key === "p" || e.key === "P") {
				e.preventDefault();
				hideTooltipsUntilMouseLeave();
				toggleFreeze();
			}
			if (e.key === "h" || e.key === "H") {
				if (annotations.length > 0) {
					e.preventDefault();
					hideTooltipsUntilMouseLeave();
					setShowMarkers((prev) => !prev);
				}
			}
			if (e.key === "c" || e.key === "C") {
				if (annotations.length > 0) {
					e.preventDefault();
					hideTooltipsUntilMouseLeave();
					copyOutput();
				}
			}
			if (e.key === "x" || e.key === "X") {
				if (annotations.length > 0) {
					e.preventDefault();
					hideTooltipsUntilMouseLeave();
					clearAll();
				}
			}
			if (e.key === "s" || e.key === "S") {
				const hasValidWebhook = isValidUrl(settings.webhookUrl) || isValidUrl(webhookUrl || "");
				if (annotations.length > 0 && hasValidWebhook && sendState === "idle") {
					e.preventDefault();
					hideTooltipsUntilMouseLeave();
					sendToWebhook();
				}
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [
		isActive,
		pendingAnnotation,
		annotations.length,
		settings.webhookUrl,
		webhookUrl,
		sendState,
		sendToWebhook,
		toggleFreeze,
		copyOutput,
		clearAll,
		pendingMultiSelectElements
	]);
	if (!mounted) return null;
	if (isToolbarHidden) return null;
	const hasAnnotations = annotations.length > 0;
	const visibleAnnotations = annotations.filter((a) => !exitingMarkers.has(a.id) && isRenderableAnnotation(a));
	const exitingAnnotationsList = annotations.filter((a) => exitingMarkers.has(a.id));
	const getTooltipPosition = (annotation) => {
		const tooltipMaxWidth = 200;
		const tooltipEstimatedHeight = 80;
		const markerSize = 22;
		const gap = 10;
		const markerX = annotation.x / 100 * window.innerWidth;
		const markerY = typeof annotation.y === "string" ? parseFloat(annotation.y) : annotation.y;
		const styles = {};
		if (window.innerHeight - markerY - markerSize - gap < tooltipEstimatedHeight) {
			styles.top = "auto";
			styles.bottom = `calc(100% + ${gap}px)`;
		}
		const centerX = markerX - tooltipMaxWidth / 2;
		const edgePadding = 10;
		if (centerX < edgePadding) styles.left = `calc(50% + ${edgePadding - centerX}px)`;
		else if (centerX + tooltipMaxWidth > window.innerWidth - edgePadding) styles.left = `calc(50% - ${centerX + tooltipMaxWidth - (window.innerWidth - edgePadding)}px)`;
		return styles;
	};
	return createPortal(/* @__PURE__ */ jsxs("div", {
		ref: portalWrapperRef,
		style: { display: "contents" },
		"data-agentation-theme": isDarkMode ? "dark" : "light",
		"data-agentation-accent": settings.annotationColorId,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: `${styles_module_default2.toolbar}${userClassName ? ` ${userClassName}` : ""}`,
				"data-feedback-toolbar": true,
				style: toolbarPosition ? {
					left: toolbarPosition.x,
					top: toolbarPosition.y,
					right: "auto",
					bottom: "auto"
				} : void 0,
				children: /* @__PURE__ */ jsxs("div", {
					className: `${styles_module_default2.toolbarContainer} ${isActive ? styles_module_default2.expanded : styles_module_default2.collapsed} ${showEntranceAnimation ? styles_module_default2.entrance : ""} ${isToolbarHiding ? styles_module_default2.hiding : ""} ${isDraggingToolbar ? styles_module_default2.dragging : ""} ${!settings.webhooksEnabled && (isValidUrl(settings.webhookUrl) || isValidUrl(webhookUrl || "")) ? styles_module_default2.serverConnected : ""}`,
					onClick: !isActive ? (e) => {
						if (justFinishedToolbarDragRef.current) {
							justFinishedToolbarDragRef.current = false;
							e.preventDefault();
							return;
						}
						setIsActive(true);
					} : void 0,
					onMouseDown: handleToolbarMouseDown,
					role: !isActive ? "button" : void 0,
					tabIndex: !isActive ? 0 : -1,
					title: !isActive ? "Start feedback mode" : void 0,
					style: { ...isDraggingToolbar && {
						transform: `scale(1.05) rotate(${dragRotation}deg)`,
						cursor: "grabbing"
					} },
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: `${styles_module_default2.toggleContent} ${!isActive ? styles_module_default2.visible : styles_module_default2.hidden}`,
							children: [/* @__PURE__ */ jsx(IconListSparkle, { size: 24 }), hasAnnotations && /* @__PURE__ */ jsx("span", {
								className: `${styles_module_default2.badge} ${isActive ? styles_module_default2.fadeOut : ""} ${showEntranceAnimation ? styles_module_default2.entrance : ""}`,
								children: annotations.length
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: `${styles_module_default2.controlsContent} ${isActive ? styles_module_default2.visible : styles_module_default2.hidden} ${toolbarPosition && toolbarPosition.y < 100 ? styles_module_default2.tooltipBelow : ""} ${tooltipsHidden || showSettings ? styles_module_default2.tooltipsHidden : ""} ${tooltipSessionActive ? styles_module_default2.tooltipsInSession : ""}`,
							onMouseEnter: handleControlsMouseEnter,
							onMouseLeave: handleControlsMouseLeave,
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: `${styles_module_default2.buttonWrapper} ${toolbarPosition && toolbarPosition.x < 120 ? styles_module_default2.buttonWrapperAlignLeft : ""}`,
									children: [/* @__PURE__ */ jsx("button", {
										className: styles_module_default2.controlButton,
										onClick: (e) => {
											e.stopPropagation();
											hideTooltipsUntilMouseLeave();
											toggleFreeze();
										},
										"data-active": isFrozen,
										children: /* @__PURE__ */ jsx(IconPausePlayAnimated, {
											size: 24,
											isPaused: isFrozen
										})
									}), /* @__PURE__ */ jsxs("span", {
										className: styles_module_default2.buttonTooltip,
										children: [isFrozen ? "Resume animations" : "Pause animations", /* @__PURE__ */ jsx("span", {
											className: styles_module_default2.shortcut,
											children: "P"
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: styles_module_default2.buttonWrapper,
									children: [/* @__PURE__ */ jsx("button", {
										className: styles_module_default2.controlButton,
										onClick: (e) => {
											e.stopPropagation();
											hideTooltipsUntilMouseLeave();
											setShowMarkers(!showMarkers);
										},
										disabled: !hasAnnotations,
										children: /* @__PURE__ */ jsx(IconEyeAnimated, {
											size: 24,
											isOpen: showMarkers
										})
									}), /* @__PURE__ */ jsxs("span", {
										className: styles_module_default2.buttonTooltip,
										children: [showMarkers ? "Hide markers" : "Show markers", /* @__PURE__ */ jsx("span", {
											className: styles_module_default2.shortcut,
											children: "H"
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: styles_module_default2.buttonWrapper,
									children: [/* @__PURE__ */ jsx("button", {
										className: `${styles_module_default2.controlButton} ${copied ? styles_module_default2.statusShowing : ""}`,
										onClick: (e) => {
											e.stopPropagation();
											hideTooltipsUntilMouseLeave();
											copyOutput();
										},
										disabled: !hasAnnotations,
										"data-active": copied,
										children: /* @__PURE__ */ jsx(IconCopyAnimated, {
											size: 24,
											copied
										})
									}), /* @__PURE__ */ jsxs("span", {
										className: styles_module_default2.buttonTooltip,
										children: ["Copy feedback", /* @__PURE__ */ jsx("span", {
											className: styles_module_default2.shortcut,
											children: "C"
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: `${styles_module_default2.buttonWrapper} ${styles_module_default2.sendButtonWrapper} ${isActive && !settings.webhooksEnabled && (isValidUrl(settings.webhookUrl) || isValidUrl(webhookUrl || "")) ? styles_module_default2.sendButtonVisible : ""}`,
									children: [/* @__PURE__ */ jsxs("button", {
										className: `${styles_module_default2.controlButton} ${sendState === "sent" || sendState === "failed" ? styles_module_default2.statusShowing : ""}`,
										onClick: (e) => {
											e.stopPropagation();
											hideTooltipsUntilMouseLeave();
											sendToWebhook();
										},
										disabled: !hasAnnotations || !isValidUrl(settings.webhookUrl) && !isValidUrl(webhookUrl || "") || sendState === "sending",
										"data-no-hover": sendState === "sent" || sendState === "failed",
										tabIndex: isValidUrl(settings.webhookUrl) || isValidUrl(webhookUrl || "") ? 0 : -1,
										children: [/* @__PURE__ */ jsx(IconSendArrow, {
											size: 24,
											state: sendState
										}), hasAnnotations && sendState === "idle" && /* @__PURE__ */ jsx("span", {
											className: styles_module_default2.buttonBadge,
											children: annotations.length
										})]
									}), /* @__PURE__ */ jsxs("span", {
										className: styles_module_default2.buttonTooltip,
										children: ["Send Annotations", /* @__PURE__ */ jsx("span", {
											className: styles_module_default2.shortcut,
											children: "S"
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: styles_module_default2.buttonWrapper,
									children: [/* @__PURE__ */ jsx("button", {
										className: styles_module_default2.controlButton,
										onClick: (e) => {
											e.stopPropagation();
											hideTooltipsUntilMouseLeave();
											clearAll();
										},
										disabled: !hasAnnotations,
										"data-danger": true,
										children: /* @__PURE__ */ jsx(IconTrashAlt, { size: 24 })
									}), /* @__PURE__ */ jsxs("span", {
										className: styles_module_default2.buttonTooltip,
										children: ["Clear all", /* @__PURE__ */ jsx("span", {
											className: styles_module_default2.shortcut,
											children: "X"
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: styles_module_default2.buttonWrapper,
									children: [
										/* @__PURE__ */ jsx("button", {
											className: styles_module_default2.controlButton,
											onClick: (e) => {
												e.stopPropagation();
												hideTooltipsUntilMouseLeave();
												setShowSettings(!showSettings);
											},
											children: /* @__PURE__ */ jsx(IconGear, { size: 24 })
										}),
										endpoint && connectionStatus !== "disconnected" && /* @__PURE__ */ jsx("span", {
											className: `${styles_module_default2.mcpIndicator} ${styles_module_default2[connectionStatus]} ${showSettings ? styles_module_default2.hidden : ""}`,
											title: connectionStatus === "connected" ? "MCP Connected" : "MCP Connecting..."
										}),
										/* @__PURE__ */ jsx("span", {
											className: styles_module_default2.buttonTooltip,
											children: "Settings"
										})
									]
								}),
								/* @__PURE__ */ jsx("div", { className: styles_module_default2.divider }),
								/* @__PURE__ */ jsxs("div", {
									className: `${styles_module_default2.buttonWrapper} ${toolbarPosition && typeof window !== "undefined" && toolbarPosition.x > window.innerWidth - 120 ? styles_module_default2.buttonWrapperAlignRight : ""}`,
									children: [/* @__PURE__ */ jsx("button", {
										className: styles_module_default2.controlButton,
										onClick: (e) => {
											e.stopPropagation();
											hideTooltipsUntilMouseLeave();
											setIsActive(false);
										},
										children: /* @__PURE__ */ jsx(IconXmarkLarge, { size: 24 })
									}), /* @__PURE__ */ jsxs("span", {
										className: styles_module_default2.buttonTooltip,
										children: ["Exit", /* @__PURE__ */ jsx("span", {
											className: styles_module_default2.shortcut,
											children: "Esc"
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: `${styles_module_default2.settingsPanel} ${showSettingsVisible ? styles_module_default2.enter : styles_module_default2.exit}`,
							onClick: (e) => e.stopPropagation(),
							style: toolbarPosition && toolbarPosition.y < 230 ? {
								bottom: "auto",
								top: "calc(100% + 0.5rem)"
							} : void 0,
							children: /* @__PURE__ */ jsxs("div", {
								className: styles_module_default2.settingsPanelContainer,
								children: [/* @__PURE__ */ jsxs("div", {
									className: `${styles_module_default2.settingsPage} ${settingsPage === "automations" ? styles_module_default2.slideLeft : ""}`,
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: styles_module_default2.settingsHeader,
											children: [
												/* @__PURE__ */ jsxs("span", {
													className: styles_module_default2.settingsBrand,
													children: [/* @__PURE__ */ jsx("span", {
														className: styles_module_default2.settingsBrandSlash,
														children: "/"
													}), "agentation"]
												}),
												/* @__PURE__ */ jsxs("span", {
													className: styles_module_default2.settingsVersion,
													children: ["v", "2.3.3"]
												}),
												/* @__PURE__ */ jsx("button", {
													className: styles_module_default2.themeToggle,
													onClick: toggleTheme,
													title: isDarkMode ? "Switch to light mode" : "Switch to dark mode",
													children: /* @__PURE__ */ jsx("span", {
														className: styles_module_default2.themeIconWrapper,
														children: /* @__PURE__ */ jsx("span", {
															className: styles_module_default2.themeIcon,
															children: isDarkMode ? /* @__PURE__ */ jsx(IconSun, { size: 20 }) : /* @__PURE__ */ jsx(IconMoon, { size: 20 })
														}, isDarkMode ? "sun" : "moon")
													})
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: styles_module_default2.settingsSection,
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: styles_module_default2.settingsRow,
													children: [/* @__PURE__ */ jsxs("div", {
														className: styles_module_default2.settingsLabel,
														children: ["Output Detail", /* @__PURE__ */ jsx(HelpTooltip, { content: "Controls how much detail is included in the copied output" })]
													}), /* @__PURE__ */ jsxs("button", {
														className: styles_module_default2.cycleButton,
														onClick: () => {
															const nextIndex = (OUTPUT_DETAIL_OPTIONS.findIndex((opt) => opt.value === settings.outputDetail) + 1) % OUTPUT_DETAIL_OPTIONS.length;
															setSettings((s) => ({
																...s,
																outputDetail: OUTPUT_DETAIL_OPTIONS[nextIndex].value
															}));
														},
														children: [/* @__PURE__ */ jsx("span", {
															className: styles_module_default2.cycleButtonText,
															children: OUTPUT_DETAIL_OPTIONS.find((opt) => opt.value === settings.outputDetail)?.label
														}, settings.outputDetail), /* @__PURE__ */ jsx("span", {
															className: styles_module_default2.cycleDots,
															children: OUTPUT_DETAIL_OPTIONS.map((option, i) => /* @__PURE__ */ jsx("span", { className: `${styles_module_default2.cycleDot} ${settings.outputDetail === option.value ? styles_module_default2.active : ""}` }, option.value))
														})]
													})]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: `${styles_module_default2.settingsRow} ${styles_module_default2.settingsRowMarginTop} ${styles_module_default2.settingsRowDisabled}`,
													children: [/* @__PURE__ */ jsxs("div", {
														className: styles_module_default2.settingsLabel,
														children: ["React Components", /* @__PURE__ */ jsx(HelpTooltip, { content: "Disabled — production builds minify component names, making detection unreliable. Use in development mode." })]
													}), /* @__PURE__ */ jsxs("label", {
														className: `${styles_module_default2.toggleSwitch} ${styles_module_default2.disabled}`,
														children: [/* @__PURE__ */ jsx("input", {
															type: "checkbox",
															checked: isDevMode,
															disabled: true,
															onChange: () => setSettings((s) => ({
																...s,
																reactEnabled: !s.reactEnabled
															}))
														}), /* @__PURE__ */ jsx("span", { className: styles_module_default2.toggleSlider })]
													})]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: `${styles_module_default2.settingsRow} ${styles_module_default2.settingsRowMarginTop}`,
													children: [/* @__PURE__ */ jsxs("div", {
														className: styles_module_default2.settingsLabel,
														children: ["Hide Until Restart", /* @__PURE__ */ jsx(HelpTooltip, { content: "Hides the toolbar until you open a new tab" })]
													}), /* @__PURE__ */ jsxs("label", {
														className: styles_module_default2.toggleSwitch,
														children: [/* @__PURE__ */ jsx("input", {
															type: "checkbox",
															checked: false,
															onChange: (e) => {
																if (e.target.checked) hideToolbarTemporarily();
															}
														}), /* @__PURE__ */ jsx("span", { className: styles_module_default2.toggleSlider })]
													})]
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: styles_module_default2.settingsSection,
											children: [/* @__PURE__ */ jsx("div", {
												className: `${styles_module_default2.settingsLabel} ${styles_module_default2.settingsLabelMarker}`,
												children: "Marker Color"
											}), /* @__PURE__ */ jsx("div", {
												className: styles_module_default2.colorOptions,
												children: COLOR_OPTIONS.map((color) => /* @__PURE__ */ jsx("div", {
													role: "button",
													onClick: () => setSettings((s) => ({
														...s,
														annotationColorId: color.id
													})),
													style: {
														"--swatch": color.srgb,
														"--swatch-p3": color.p3
													},
													className: `${styles_module_default2.colorOptionRing} ${settings.annotationColorId === color.id ? styles_module_default2.selected : ""}`,
													children: /* @__PURE__ */ jsx("div", {
														className: `${styles_module_default2.colorOption} ${settings.annotationColorId === color.id ? styles_module_default2.selected : ""}`,
														title: color.label
													})
												}, color.id))
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: styles_module_default2.settingsSection,
											children: [/* @__PURE__ */ jsxs("label", {
												className: styles_module_default2.settingsToggle,
												children: [
													/* @__PURE__ */ jsx("input", {
														type: "checkbox",
														id: "autoClearAfterCopy",
														checked: settings.autoClearAfterCopy,
														onChange: (e) => setSettings((s) => ({
															...s,
															autoClearAfterCopy: e.target.checked
														}))
													}),
													/* @__PURE__ */ jsx("label", {
														className: `${styles_module_default2.customCheckbox} ${settings.autoClearAfterCopy ? styles_module_default2.checked : ""}`,
														htmlFor: "autoClearAfterCopy",
														children: settings.autoClearAfterCopy && /* @__PURE__ */ jsx(IconCheckSmallAnimated, { size: 14 })
													}),
													/* @__PURE__ */ jsxs("span", {
														className: styles_module_default2.toggleLabel,
														children: ["Clear on copy/send", /* @__PURE__ */ jsx(HelpTooltip, { content: "Automatically clear annotations after copying" })]
													})
												]
											}), /* @__PURE__ */ jsxs("label", {
												className: `${styles_module_default2.settingsToggle} ${styles_module_default2.settingsToggleMarginBottom}`,
												children: [
													/* @__PURE__ */ jsx("input", {
														type: "checkbox",
														id: "blockInteractions",
														checked: settings.blockInteractions,
														onChange: (e) => setSettings((s) => ({
															...s,
															blockInteractions: e.target.checked
														}))
													}),
													/* @__PURE__ */ jsx("label", {
														className: `${styles_module_default2.customCheckbox} ${settings.blockInteractions ? styles_module_default2.checked : ""}`,
														htmlFor: "blockInteractions",
														children: settings.blockInteractions && /* @__PURE__ */ jsx(IconCheckSmallAnimated, { size: 14 })
													}),
													/* @__PURE__ */ jsx("span", {
														className: styles_module_default2.toggleLabel,
														children: "Block page interactions"
													})
												]
											})]
										}),
										/* @__PURE__ */ jsx("div", {
											className: `${styles_module_default2.settingsSection} ${styles_module_default2.settingsSectionExtraPadding}`,
											children: /* @__PURE__ */ jsxs("button", {
												className: styles_module_default2.settingsNavLink,
												onClick: () => setSettingsPage("automations"),
												children: [/* @__PURE__ */ jsx("span", { children: "Manage MCP & Webhooks" }), /* @__PURE__ */ jsxs("span", {
													className: styles_module_default2.settingsNavLinkRight,
													children: [endpoint && connectionStatus !== "disconnected" && /* @__PURE__ */ jsx("span", { className: `${styles_module_default2.mcpNavIndicator} ${styles_module_default2[connectionStatus]}` }), /* @__PURE__ */ jsx("svg", {
														width: "16",
														height: "16",
														viewBox: "0 0 16 16",
														fill: "none",
														xmlns: "http://www.w3.org/2000/svg",
														children: /* @__PURE__ */ jsx("path", {
															d: "M7.5 12.5L12 8L7.5 3.5",
															stroke: "currentColor",
															strokeWidth: "1.5",
															strokeLinecap: "round",
															strokeLinejoin: "round"
														})
													})]
												})]
											})
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: `${styles_module_default2.settingsPage} ${styles_module_default2.automationsPage} ${settingsPage === "automations" ? styles_module_default2.slideIn : ""}`,
									children: [
										/* @__PURE__ */ jsxs("button", {
											className: styles_module_default2.settingsBackButton,
											onClick: () => setSettingsPage("main"),
											children: [/* @__PURE__ */ jsx(IconChevronLeft, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "Manage MCP & Webhooks" })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: styles_module_default2.settingsSection,
											children: [/* @__PURE__ */ jsxs("div", {
												className: styles_module_default2.settingsRow,
												children: [/* @__PURE__ */ jsxs("span", {
													className: styles_module_default2.automationHeader,
													children: ["MCP Connection", /* @__PURE__ */ jsx(HelpTooltip, { content: "Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time." })]
												}), endpoint && /* @__PURE__ */ jsx("div", {
													className: `${styles_module_default2.mcpStatusDot} ${styles_module_default2[connectionStatus]}`,
													title: connectionStatus === "connected" ? "Connected" : connectionStatus === "connecting" ? "Connecting..." : "Disconnected"
												})]
											}), /* @__PURE__ */ jsxs("p", {
												className: styles_module_default2.automationDescription,
												style: { paddingBottom: 6 },
												children: [
													"MCP connection allows agents to receive and act on annotations.",
													" ",
													/* @__PURE__ */ jsx("a", {
														href: "https://agentation.dev/mcp",
														target: "_blank",
														rel: "noopener noreferrer",
														className: styles_module_default2.learnMoreLink,
														children: "Learn more"
													})
												]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: `${styles_module_default2.settingsSection} ${styles_module_default2.settingsSectionGrow}`,
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: styles_module_default2.settingsRow,
													children: [/* @__PURE__ */ jsxs("span", {
														className: styles_module_default2.automationHeader,
														children: ["Webhooks", /* @__PURE__ */ jsx(HelpTooltip, { content: "Send annotation data to any URL endpoint when annotations change. Useful for custom integrations." })]
													}), /* @__PURE__ */ jsxs("div", {
														className: styles_module_default2.autoSendRow,
														children: [/* @__PURE__ */ jsx("span", {
															className: `${styles_module_default2.autoSendLabel} ${settings.webhooksEnabled ? styles_module_default2.active : ""}`,
															children: "Auto-Send"
														}), /* @__PURE__ */ jsxs("label", {
															className: `${styles_module_default2.toggleSwitch} ${!settings.webhookUrl ? styles_module_default2.disabled : ""}`,
															children: [/* @__PURE__ */ jsx("input", {
																type: "checkbox",
																checked: settings.webhooksEnabled,
																disabled: !settings.webhookUrl,
																onChange: () => setSettings((s) => ({
																	...s,
																	webhooksEnabled: !s.webhooksEnabled
																}))
															}), /* @__PURE__ */ jsx("span", { className: styles_module_default2.toggleSlider })]
														})]
													})]
												}),
												/* @__PURE__ */ jsx("p", {
													className: styles_module_default2.automationDescription,
													children: "The webhook URL will receive live annotation changes and annotation data."
												}),
												/* @__PURE__ */ jsx("textarea", {
													className: styles_module_default2.webhookUrlInput,
													placeholder: "Webhook URL",
													value: settings.webhookUrl,
													onKeyDown: (e) => e.stopPropagation(),
													onChange: (e) => setSettings((s) => ({
														...s,
														webhookUrl: e.target.value
													}))
												})
											]
										})
									]
								})]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: styles_module_default2.markersLayer,
				"data-feedback-toolbar": true,
				children: [markersVisible && visibleAnnotations.filter((a) => !a.isFixed).map((annotation, index) => {
					const isHovered = !markersExiting && hoveredMarkerId === annotation.id;
					const isDeleting = deletingMarkerId === annotation.id;
					const showDeleteState = (isHovered || isDeleting) && !editingAnnotation;
					const isMulti = annotation.isMultiSelect;
					const markerColor = isMulti ? "var(--agentation-color-green)" : "var(--agentation-color-accent)";
					const globalIndex = annotations.findIndex((a) => a.id === annotation.id);
					const needsEnterAnimation = !animatedMarkers.has(annotation.id);
					const animClass = markersExiting ? styles_module_default2.exit : isClearing ? styles_module_default2.clearing : needsEnterAnimation ? styles_module_default2.enter : "";
					const showDeleteHover = showDeleteState && settings.markerClickBehavior === "delete";
					return /* @__PURE__ */ jsxs("div", {
						className: `${styles_module_default2.marker} ${isMulti ? styles_module_default2.multiSelect : ""} ${animClass} ${showDeleteHover ? styles_module_default2.hovered : ""}`,
						"data-annotation-marker": true,
						style: {
							left: `${annotation.x}%`,
							top: annotation.y,
							backgroundColor: showDeleteHover ? void 0 : markerColor,
							animationDelay: markersExiting ? `${(visibleAnnotations.length - 1 - index) * 20}ms` : `${index * 20}ms`
						},
						onMouseEnter: () => !markersExiting && annotation.id !== recentlyAddedIdRef.current && handleMarkerHover(annotation),
						onMouseLeave: () => handleMarkerHover(null),
						onClick: (e) => {
							e.stopPropagation();
							if (!markersExiting) if (settings.markerClickBehavior === "delete") deleteAnnotation2(annotation.id);
							else startEditAnnotation(annotation);
						},
						onContextMenu: (e) => {
							if (settings.markerClickBehavior === "delete") {
								e.preventDefault();
								e.stopPropagation();
								if (!markersExiting) startEditAnnotation(annotation);
							}
						},
						children: [showDeleteState ? showDeleteHover ? /* @__PURE__ */ jsx(IconXmark, { size: isMulti ? 18 : 16 }) : /* @__PURE__ */ jsx(IconEdit, { size: 16 }) : /* @__PURE__ */ jsx("span", {
							className: renumberFrom !== null && globalIndex >= renumberFrom ? styles_module_default2.renumber : void 0,
							children: globalIndex + 1
						}), isHovered && !editingAnnotation && /* @__PURE__ */ jsxs("div", {
							className: `${styles_module_default2.markerTooltip} ${styles_module_default2.enter}`,
							style: getTooltipPosition(annotation),
							children: [/* @__PURE__ */ jsxs("span", {
								className: styles_module_default2.markerQuote,
								children: [annotation.element, annotation.selectedText && ` "${annotation.selectedText.slice(0, 30)}${annotation.selectedText.length > 30 ? "..." : ""}"`]
							}), /* @__PURE__ */ jsx("span", {
								className: styles_module_default2.markerNote,
								children: annotation.comment
							})]
						})]
					}, annotation.id);
				}), markersVisible && !markersExiting && exitingAnnotationsList.filter((a) => !a.isFixed).map((annotation) => {
					const isMulti = annotation.isMultiSelect;
					return /* @__PURE__ */ jsx("div", {
						className: `${styles_module_default2.marker} ${styles_module_default2.hovered} ${isMulti ? styles_module_default2.multiSelect : ""} ${styles_module_default2.exit}`,
						"data-annotation-marker": true,
						style: {
							left: `${annotation.x}%`,
							top: annotation.y
						},
						children: /* @__PURE__ */ jsx(IconXmark, { size: isMulti ? 12 : 10 })
					}, annotation.id);
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: styles_module_default2.fixedMarkersLayer,
				"data-feedback-toolbar": true,
				children: [markersVisible && visibleAnnotations.filter((a) => a.isFixed).map((annotation, index) => {
					const fixedAnnotations = visibleAnnotations.filter((a) => a.isFixed);
					const isHovered = !markersExiting && hoveredMarkerId === annotation.id;
					const isDeleting = deletingMarkerId === annotation.id;
					const showDeleteState = (isHovered || isDeleting) && !editingAnnotation;
					const isMulti = annotation.isMultiSelect;
					const markerColor = isMulti ? "var(--agentation-color-green)" : "var(--agentation-color-accent)";
					const globalIndex = annotations.findIndex((a) => a.id === annotation.id);
					const needsEnterAnimation = !animatedMarkers.has(annotation.id);
					const animClass = markersExiting ? styles_module_default2.exit : isClearing ? styles_module_default2.clearing : needsEnterAnimation ? styles_module_default2.enter : "";
					const showDeleteHover = showDeleteState && settings.markerClickBehavior === "delete";
					return /* @__PURE__ */ jsxs("div", {
						className: `${styles_module_default2.marker} ${styles_module_default2.fixed} ${isMulti ? styles_module_default2.multiSelect : ""} ${animClass} ${showDeleteHover ? styles_module_default2.hovered : ""}`,
						"data-annotation-marker": true,
						style: {
							left: `${annotation.x}%`,
							top: annotation.y,
							backgroundColor: showDeleteHover ? void 0 : markerColor,
							animationDelay: markersExiting ? `${(fixedAnnotations.length - 1 - index) * 20}ms` : `${index * 20}ms`
						},
						onMouseEnter: () => !markersExiting && annotation.id !== recentlyAddedIdRef.current && handleMarkerHover(annotation),
						onMouseLeave: () => handleMarkerHover(null),
						onClick: (e) => {
							e.stopPropagation();
							if (!markersExiting) if (settings.markerClickBehavior === "delete") deleteAnnotation2(annotation.id);
							else startEditAnnotation(annotation);
						},
						onContextMenu: (e) => {
							if (settings.markerClickBehavior === "delete") {
								e.preventDefault();
								e.stopPropagation();
								if (!markersExiting) startEditAnnotation(annotation);
							}
						},
						children: [showDeleteState ? showDeleteHover ? /* @__PURE__ */ jsx(IconXmark, { size: isMulti ? 18 : 16 }) : /* @__PURE__ */ jsx(IconEdit, { size: 16 }) : /* @__PURE__ */ jsx("span", {
							className: renumberFrom !== null && globalIndex >= renumberFrom ? styles_module_default2.renumber : void 0,
							children: globalIndex + 1
						}), isHovered && !editingAnnotation && /* @__PURE__ */ jsxs("div", {
							className: `${styles_module_default2.markerTooltip} ${styles_module_default2.enter}`,
							style: getTooltipPosition(annotation),
							children: [/* @__PURE__ */ jsxs("span", {
								className: styles_module_default2.markerQuote,
								children: [annotation.element, annotation.selectedText && ` "${annotation.selectedText.slice(0, 30)}${annotation.selectedText.length > 30 ? "..." : ""}"`]
							}), /* @__PURE__ */ jsx("span", {
								className: styles_module_default2.markerNote,
								children: annotation.comment
							})]
						})]
					}, annotation.id);
				}), markersVisible && !markersExiting && exitingAnnotationsList.filter((a) => a.isFixed).map((annotation) => {
					const isMulti = annotation.isMultiSelect;
					return /* @__PURE__ */ jsx("div", {
						className: `${styles_module_default2.marker} ${styles_module_default2.fixed} ${styles_module_default2.hovered} ${isMulti ? styles_module_default2.multiSelect : ""} ${styles_module_default2.exit}`,
						"data-annotation-marker": true,
						style: {
							left: `${annotation.x}%`,
							top: annotation.y
						},
						children: /* @__PURE__ */ jsx(IconClose, { size: isMulti ? 12 : 10 })
					}, annotation.id);
				})]
			}),
			isActive && /* @__PURE__ */ jsxs("div", {
				className: styles_module_default2.overlay,
				"data-feedback-toolbar": true,
				style: pendingAnnotation || editingAnnotation ? { zIndex: 99999 } : void 0,
				children: [
					hoverInfo?.rect && !pendingAnnotation && !isScrolling && !isDragging && /* @__PURE__ */ jsx("div", {
						className: `${styles_module_default2.hoverHighlight} ${styles_module_default2.enter}`,
						style: {
							left: hoverInfo.rect.left,
							top: hoverInfo.rect.top,
							width: hoverInfo.rect.width,
							height: hoverInfo.rect.height,
							borderColor: "color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",
							backgroundColor: "color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"
						}
					}),
					pendingMultiSelectElements.filter((item) => document.contains(item.element)).map((item, index) => {
						const rect = item.element.getBoundingClientRect();
						const isMulti = pendingMultiSelectElements.length > 1;
						return /* @__PURE__ */ jsx("div", {
							className: isMulti ? styles_module_default2.multiSelectOutline : styles_module_default2.singleSelectOutline,
							style: {
								position: "fixed",
								left: rect.left,
								top: rect.top,
								width: rect.width,
								height: rect.height,
								...isMulti ? {} : {
									borderColor: "color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",
									backgroundColor: "color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"
								}
							}
						}, index);
					}),
					hoveredMarkerId && !pendingAnnotation && (() => {
						const hoveredAnnotation = annotations.find((a) => a.id === hoveredMarkerId);
						if (!hoveredAnnotation?.boundingBox) return null;
						if (hoveredAnnotation.elementBoundingBoxes?.length) {
							if (hoveredTargetElements.length > 0) return hoveredTargetElements.filter((el) => document.contains(el)).map((el, index) => {
								const rect2 = el.getBoundingClientRect();
								return /* @__PURE__ */ jsx("div", {
									className: `${styles_module_default2.multiSelectOutline} ${styles_module_default2.enter}`,
									style: {
										left: rect2.left,
										top: rect2.top,
										width: rect2.width,
										height: rect2.height
									}
								}, `hover-outline-live-${index}`);
							});
							return hoveredAnnotation.elementBoundingBoxes.map((bb2, index) => /* @__PURE__ */ jsx("div", {
								className: `${styles_module_default2.multiSelectOutline} ${styles_module_default2.enter}`,
								style: {
									left: bb2.x,
									top: bb2.y - scrollY,
									width: bb2.width,
									height: bb2.height
								}
							}, `hover-outline-${index}`));
						}
						const rect = hoveredTargetElement && document.contains(hoveredTargetElement) ? hoveredTargetElement.getBoundingClientRect() : null;
						const bb = rect ? {
							x: rect.left,
							y: rect.top,
							width: rect.width,
							height: rect.height
						} : {
							x: hoveredAnnotation.boundingBox.x,
							y: hoveredAnnotation.isFixed ? hoveredAnnotation.boundingBox.y : hoveredAnnotation.boundingBox.y - scrollY,
							width: hoveredAnnotation.boundingBox.width,
							height: hoveredAnnotation.boundingBox.height
						};
						const isMulti = hoveredAnnotation.isMultiSelect;
						return /* @__PURE__ */ jsx("div", {
							className: `${isMulti ? styles_module_default2.multiSelectOutline : styles_module_default2.singleSelectOutline} ${styles_module_default2.enter}`,
							style: {
								left: bb.x,
								top: bb.y,
								width: bb.width,
								height: bb.height,
								...isMulti ? {} : {
									borderColor: "color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",
									backgroundColor: "color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"
								}
							}
						});
					})(),
					hoverInfo && !pendingAnnotation && !isScrolling && !isDragging && /* @__PURE__ */ jsxs("div", {
						className: `${styles_module_default2.hoverTooltip} ${styles_module_default2.enter}`,
						style: {
							left: Math.max(8, Math.min(hoverPosition.x, window.innerWidth - 100)),
							top: Math.max(hoverPosition.y - (hoverInfo.reactComponents ? 48 : 32), 8)
						},
						children: [hoverInfo.reactComponents && /* @__PURE__ */ jsx("div", {
							className: styles_module_default2.hoverReactPath,
							children: hoverInfo.reactComponents
						}), /* @__PURE__ */ jsx("div", {
							className: styles_module_default2.hoverElementName,
							children: hoverInfo.elementName
						})]
					}),
					pendingAnnotation && /* @__PURE__ */ jsxs(Fragment$1, { children: [pendingAnnotation.multiSelectElements?.length ? pendingAnnotation.multiSelectElements.filter((el) => document.contains(el)).map((el, index) => {
						const rect = el.getBoundingClientRect();
						return /* @__PURE__ */ jsx("div", {
							className: `${styles_module_default2.multiSelectOutline} ${pendingExiting ? styles_module_default2.exit : styles_module_default2.enter}`,
							style: {
								left: rect.left,
								top: rect.top,
								width: rect.width,
								height: rect.height
							}
						}, `pending-multi-${index}`);
					}) : pendingAnnotation.targetElement && document.contains(pendingAnnotation.targetElement) ? (() => {
						const rect = pendingAnnotation.targetElement.getBoundingClientRect();
						return /* @__PURE__ */ jsx("div", {
							className: `${styles_module_default2.singleSelectOutline} ${pendingExiting ? styles_module_default2.exit : styles_module_default2.enter}`,
							style: {
								left: rect.left,
								top: rect.top,
								width: rect.width,
								height: rect.height,
								borderColor: "color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",
								backgroundColor: "color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"
							}
						});
					})() : pendingAnnotation.boundingBox && /* @__PURE__ */ jsx("div", {
						className: `${pendingAnnotation.isMultiSelect ? styles_module_default2.multiSelectOutline : styles_module_default2.singleSelectOutline} ${pendingExiting ? styles_module_default2.exit : styles_module_default2.enter}`,
						style: {
							left: pendingAnnotation.boundingBox.x,
							top: pendingAnnotation.boundingBox.y - scrollY,
							width: pendingAnnotation.boundingBox.width,
							height: pendingAnnotation.boundingBox.height,
							...pendingAnnotation.isMultiSelect ? {} : {
								borderColor: "color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",
								backgroundColor: "color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"
							}
						}
					}), (() => {
						const markerX = pendingAnnotation.x;
						const markerY = pendingAnnotation.isFixed ? pendingAnnotation.y : pendingAnnotation.y - scrollY;
						return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
							className: `${styles_module_default2.marker} ${styles_module_default2.pending} ${pendingAnnotation.isMultiSelect ? styles_module_default2.multiSelect : ""} ${pendingExiting ? styles_module_default2.exit : styles_module_default2.enter}`,
							style: {
								left: `${markerX}%`,
								top: markerY,
								backgroundColor: pendingAnnotation.isMultiSelect ? "var(--agentation-color-green)" : "var(--agentation-color-accent)"
							},
							children: /* @__PURE__ */ jsx(IconPlus, { size: 12 })
						}), /* @__PURE__ */ jsx(AnnotationPopupCSS, {
							ref: popupRef,
							element: pendingAnnotation.element,
							selectedText: pendingAnnotation.selectedText,
							computedStyles: pendingAnnotation.computedStylesObj,
							placeholder: pendingAnnotation.element === "Area selection" ? "What should change in this area?" : pendingAnnotation.isMultiSelect ? "Feedback for this group of elements..." : "What should change?",
							onSubmit: addAnnotation,
							onCancel: cancelAnnotation,
							isExiting: pendingExiting,
							lightMode: !isDarkMode,
							accentColor: pendingAnnotation.isMultiSelect ? "var(--agentation-color-green)" : "var(--agentation-color-accent)",
							style: {
								left: Math.max(160, Math.min(window.innerWidth - 160, markerX / 100 * window.innerWidth)),
								...markerY > window.innerHeight - 290 ? { bottom: window.innerHeight - markerY + 20 } : { top: markerY + 20 }
							}
						})] });
					})()] }),
					editingAnnotation && /* @__PURE__ */ jsxs(Fragment$1, { children: [editingAnnotation.elementBoundingBoxes?.length ? (() => {
						if (editingTargetElements.length > 0) return editingTargetElements.filter((el) => document.contains(el)).map((el, index) => {
							const rect = el.getBoundingClientRect();
							return /* @__PURE__ */ jsx("div", {
								className: `${styles_module_default2.multiSelectOutline} ${styles_module_default2.enter}`,
								style: {
									left: rect.left,
									top: rect.top,
									width: rect.width,
									height: rect.height
								}
							}, `edit-multi-live-${index}`);
						});
						return editingAnnotation.elementBoundingBoxes.map((bb, index) => /* @__PURE__ */ jsx("div", {
							className: `${styles_module_default2.multiSelectOutline} ${styles_module_default2.enter}`,
							style: {
								left: bb.x,
								top: bb.y - scrollY,
								width: bb.width,
								height: bb.height
							}
						}, `edit-multi-${index}`));
					})() : (() => {
						const rect = editingTargetElement && document.contains(editingTargetElement) ? editingTargetElement.getBoundingClientRect() : null;
						const bb = rect ? {
							x: rect.left,
							y: rect.top,
							width: rect.width,
							height: rect.height
						} : editingAnnotation.boundingBox ? {
							x: editingAnnotation.boundingBox.x,
							y: editingAnnotation.isFixed ? editingAnnotation.boundingBox.y : editingAnnotation.boundingBox.y - scrollY,
							width: editingAnnotation.boundingBox.width,
							height: editingAnnotation.boundingBox.height
						} : null;
						if (!bb) return null;
						return /* @__PURE__ */ jsx("div", {
							className: `${editingAnnotation.isMultiSelect ? styles_module_default2.multiSelectOutline : styles_module_default2.singleSelectOutline} ${styles_module_default2.enter}`,
							style: {
								left: bb.x,
								top: bb.y,
								width: bb.width,
								height: bb.height,
								...editingAnnotation.isMultiSelect ? {} : {
									borderColor: "color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",
									backgroundColor: "color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"
								}
							}
						});
					})(), /* @__PURE__ */ jsx(AnnotationPopupCSS, {
						ref: editPopupRef,
						element: editingAnnotation.element,
						selectedText: editingAnnotation.selectedText,
						computedStyles: parseComputedStylesString(editingAnnotation.computedStyles),
						placeholder: "Edit your feedback...",
						initialValue: editingAnnotation.comment,
						submitLabel: "Save",
						onSubmit: updateAnnotation2,
						onCancel: cancelEditAnnotation,
						onDelete: () => deleteAnnotation2(editingAnnotation.id),
						isExiting: editExiting,
						lightMode: !isDarkMode,
						accentColor: editingAnnotation.isMultiSelect ? "var(--agentation-color-green)" : "var(--agentation-color-accent)",
						style: (() => {
							const markerY = editingAnnotation.isFixed ? editingAnnotation.y : editingAnnotation.y - scrollY;
							return {
								left: Math.max(160, Math.min(window.innerWidth - 160, editingAnnotation.x / 100 * window.innerWidth)),
								...markerY > window.innerHeight - 290 ? { bottom: window.innerHeight - markerY + 20 } : { top: markerY + 20 }
							};
						})()
					})] }),
					isDragging && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
						ref: dragRectRef,
						className: styles_module_default2.dragSelection
					}), /* @__PURE__ */ jsx("div", {
						ref: highlightsContainerRef,
						className: styles_module_default2.highlightsContainer
					})] })
				]
			})
		]
	}), document.body);
}
//#endregion
export { PageFeedbackToolbarCSS as Agentation, PageFeedbackToolbarCSS };
