import { Kn as cc, _ as CH, b as Ct$4 } from "./react-D5xHzNYo.js";
import { t as Trans } from "./Trans-UjBkHktY.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { n as useBoolean, t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as app_icon_default } from "./app-icon-DPKtAo3e.js";
import { i as useEventEmitterContextContext } from "./utils-pMdyvQan.js";
import { t as cn$1 } from "./classnames-LHQnX9lX.js";
import { A as Type, _n as getKeyboardKeyNameBySystem, ft as useReactFlow, mt as useStoreApi, w as isExceptionVariable } from "./utils-DqpfZ3W-.js";
import { Nt as InputVarType, Ot as BlockEnum, q as VAR_REGEX, tt as resetReg, x as HITL_INPUT_REG, zt as VarType } from "./config-Dopncj5R.js";
import { Cn as isConversationVar, En as isRagVariableVar, On as isSystemVar, Tn as isGlobalVar, ir as produce, vt as extractPluginId, wn as isENV } from "./hooks-Bj_4KA1b.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { t as IconBase } from "./IconBase-CEF_UoQI.js";
import { r as Icon$40 } from "./workflow-CULNEjcb.js";
import { _ as shift, b as autoUpdate, c as useFloating, f as flip, g as offset, n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem, v as size } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as ActionButton } from "./action-button-BK9WUMzU.js";
import { t as Input } from "./input-BOHL-qYi.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { _ as REQUEST_URL_PLACEHOLDER_TEXT, d as ERROR_MESSAGE_PLACEHOLDER_TEXT, g as QUERY_PLACEHOLDER_TEXT, l as CONTEXT_PLACEHOLDER_TEXT, m as LAST_RUN_PLACEHOLDER_TEXT, p as HISTORY_PLACEHOLDER_TEXT, u as CURRENT_PLACEHOLDER_TEXT, v as UPDATE_DATASETS_EVENT_EMITTER, y as UPDATE_HISTORY_EVENT_EMITTER } from "./var-DPpHtpXT.js";
import { D as TooltipContent, E as Tooltip, k as TooltipTrigger } from "./credential-item-C22_bUSw.js";
import { t as Textarea } from "./textarea-Ngtow1st.js";
import { r as useProviderContextSelector } from "./provider-context-CToT0pwd.js";
import { o as Icon$41, u as Icon$42 } from "./general-C8w9hIeL.js";
import { i as Icon$43 } from "./arrows-fbeBWnky.js";
import { l as var_full_path_panel_default, m as variable_label_in_editor_default, t as var_reference_picker_default, u as var_reference_vars_default, v as Icon$44 } from "./var-reference-picker-PlAsXjUc.js";
import * as React$1 from "react";
import React, { Component, Fragment, Suspense, createContext, createElement, forwardRef, memo, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import ReactDOM, { createPortal, flushSync } from "react-dom";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var AnswerTriangle_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "8",
			"height": "12",
			"viewBox": "0 0 8 12",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"id": "Rectangle 1",
				"d": "M1.03647 1.5547C0.59343 0.890144 1.06982 0 1.86852 0H8V12L1.03647 1.5547Z",
				"fill": "currentColor"
			},
			"children": []
		}]
	},
	name: "AnswerTriangle"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/AnswerTriangle.tsx
var Icon$39 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: AnswerTriangle_default
});
Icon$39.displayName = "AnswerTriangle";
var ArrowDownRoundFill_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "arrow-down-round-fill" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Vector",
					"d": "M6.02913 6.23572C5.08582 6.23572 4.56482 7.33027 5.15967 8.06239L7.13093 10.4885C7.57922 11.0403 8.42149 11.0403 8.86986 10.4885L10.8411 8.06239C11.4359 7.33027 10.9149 6.23572 9.97158 6.23572H6.02913Z",
					"fill": "currentColor"
				},
				"children": []
			}]
		}]
	},
	name: "ArrowDownRoundFill"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/ArrowDownRoundFill.tsx
var Icon$38 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: ArrowDownRoundFill_default
});
Icon$38.displayName = "ArrowDownRoundFill";
var CheckCircle_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "check-circle" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Solid",
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M8 0.666626C3.94992 0.666626 0.666672 3.94987 0.666672 7.99996C0.666672 12.05 3.94992 15.3333 8 15.3333C12.0501 15.3333 15.3333 12.05 15.3333 7.99996C15.3333 3.94987 12.0501 0.666626 8 0.666626ZM11.4714 6.47136C11.7318 6.21101 11.7318 5.7889 11.4714 5.52855C11.2111 5.26821 10.7889 5.26821 10.5286 5.52855L7 9.05715L5.47141 7.52855C5.21106 7.2682 4.78895 7.2682 4.5286 7.52855C4.26825 7.7889 4.26825 8.21101 4.5286 8.47136L6.5286 10.4714C6.78895 10.7317 7.21106 10.7317 7.47141 10.4714L11.4714 6.47136Z",
					"fill": "currentColor"
				},
				"children": []
			}]
		}]
	},
	name: "CheckCircle"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/CheckCircle.tsx
var Icon$37 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: CheckCircle_default
});
Icon$37.displayName = "CheckCircle";
var CheckDone01_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				"d": "M12.8385 7H5.16146C4.63433 6.99998 4.17954 6.99997 3.80497 7.03057C3.40963 7.06287 3.01641 7.13419 2.63803 7.32698C2.07354 7.6146 1.6146 8.07354 1.32698 8.63803C1.13419 9.01641 1.06287 9.40963 1.03057 9.80497C0.999969 10.1795 0.999984 10.6343 1 11.1614V18.8385C0.999984 19.3657 0.999969 19.8205 1.03057 20.195C1.06287 20.5904 1.13419 20.9836 1.32698 21.362C1.6146 21.9265 2.07354 22.3854 2.63803 22.673C3.01641 22.8658 3.40963 22.9371 3.80497 22.9694C4.17952 23 4.63425 23 5.16136 23H12.8385C13.3656 23 13.8205 23 14.195 22.9694C14.5904 22.9371 14.9836 22.8658 15.362 22.673C15.9265 22.3854 16.3854 21.9265 16.673 21.362C16.8658 20.9836 16.9371 20.5904 16.9694 20.195C17 19.8205 17 19.3657 17 18.8385V11.1615C17 10.6343 17 10.1796 16.9694 9.80497C16.9371 9.40963 16.8658 9.01641 16.673 8.63803C16.3854 8.07354 15.9265 7.6146 15.362 7.32698C14.9836 7.13419 14.5904 7.06287 14.195 7.03057C13.8205 6.99997 13.3657 6.99998 12.8385 7ZM13.2071 13.2071C13.5976 12.8166 13.5976 12.1834 13.2071 11.7929C12.8166 11.4024 12.1834 11.4024 11.7929 11.7929L8 15.5858L6.70711 14.2929C6.31658 13.9024 5.68342 13.9024 5.29289 14.2929C4.90237 14.6834 4.90237 15.3166 5.29289 15.7071L7.29289 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071L13.2071 13.2071Z",
				"fill": "currentColor"
			},
			"children": []
		}, {
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M18.8385 1H11.1615C10.6343 0.999984 10.1795 0.999969 9.80497 1.03057C9.40963 1.06287 9.01641 1.13419 8.63803 1.32698C8.07354 1.6146 7.6146 2.07354 7.32698 2.63803C7.13419 3.01641 7.06287 3.40963 7.03057 3.80497C7.00314 4.14076 7.00031 4.54098 7.00003 5.00003L12.8809 5.00001C13.3695 4.9999 13.8993 4.99977 14.3579 5.03724C14.8769 5.07964 15.5626 5.1846 16.2699 5.54499C17.2108 6.02436 17.9757 6.78926 18.455 7.73007C18.8154 8.43739 18.9204 9.12311 18.9628 9.64213C19.0003 10.1007 19.0001 10.6305 19 11.1192L19 17C19.459 16.9997 19.8593 16.9969 20.195 16.9694C20.5904 16.9371 20.9836 16.8658 21.362 16.673C21.9265 16.3854 22.3854 15.9265 22.673 15.362C22.8658 14.9836 22.9371 14.5904 22.9694 14.195C23 13.8205 23 13.3658 23 12.8386V5.16148C23 4.63437 23 4.17952 22.9694 3.80497C22.9371 3.40963 22.8658 3.01641 22.673 2.63803C22.3854 2.07354 21.9265 1.6146 21.362 1.32698C20.9836 1.13419 20.5904 1.06287 20.195 1.03057C19.8205 0.999969 19.3657 0.999984 18.8385 1Z",
				"fill": "currentColor"
			},
			"children": []
		}]
	},
	name: "CheckDone01"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/CheckDone01.tsx
var Icon$36 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: CheckDone01_default
});
Icon$36.displayName = "CheckDone01";
var Download02_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M21 21H3M18 11L12 17M12 17L6 11M12 17V3",
				"stroke": "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			},
			"children": []
		}]
	},
	name: "Download02"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/Download02.tsx
var Icon$35 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Download02_default
});
Icon$35.displayName = "Download02";
var Edit03_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "12",
			"height": "12",
			"viewBox": "0 0 12 12",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "edit-03" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Solid" },
				"children": [{
					"type": "element",
					"name": "path",
					"attributes": {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						"d": "M5.50004 10.0001C5.50004 9.72398 5.7239 9.50012 6.00004 9.50012H10.5C10.7762 9.50012 11 9.72398 11 10.0001C11 10.2763 10.7762 10.5001 10.5 10.5001H6.00004C5.7239 10.5001 5.50004 10.2763 5.50004 10.0001Z",
						"fill": "currentColor"
					},
					"children": []
				}, {
					"type": "element",
					"name": "path",
					"attributes": {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						"d": "M7.89651 1.39656C8.50599 0.787085 9.49414 0.787084 10.1036 1.39656C10.7131 2.00604 10.7131 2.99419 10.1036 3.60367L3.82225 9.88504C3.81235 9.89494 3.80254 9.90476 3.79281 9.91451C3.64909 10.0585 3.52237 10.1855 3.3696 10.2791C3.23539 10.3613 3.08907 10.4219 2.93602 10.4587C2.7618 10.5005 2.58242 10.5003 2.37897 10.5001C2.3652 10.5001 2.35132 10.5001 2.33732 10.5001H1.50005C1.22391 10.5001 1.00005 10.2763 1.00005 10.0001V9.16286C1.00005 9.14886 1.00004 9.13497 1.00003 9.1212C0.999836 8.91776 0.999669 8.73838 1.0415 8.56416C1.07824 8.4111 1.13885 8.26479 1.22109 8.13058C1.31471 7.97781 1.44166 7.85109 1.58566 7.70736C1.5954 7.69764 1.60523 7.68783 1.61513 7.67793L7.89651 1.39656Z",
						"fill": "currentColor"
					},
					"children": []
				}]
			}]
		}]
	},
	name: "Edit03"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/Edit03.tsx
var Icon$34 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Edit03_default
});
Icon$34.displayName = "Edit03";
var Edit04_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				"d": "M21.6747 17.2619C22.0824 17.6345 22.1107 18.2671 21.7381 18.6747L20.738 19.7687C20.0284 20.5448 19.0458 21 18.0002 21C16.9549 21 15.9726 20.5452 15.2631 19.7696C14.9112 19.3863 14.4549 19.1901 14.0002 19.1901C13.5454 19.1901 13.0889 19.3864 12.7369 19.7701C12.3635 20.177 11.7309 20.2043 11.324 19.8309C10.917 19.4575 10.8898 18.8249 11.2632 18.418C11.9735 17.6438 12.9555 17.1901 14.0002 17.1901C15.045 17.1901 16.0269 17.6438 16.7373 18.418L16.7384 18.4192C17.0897 18.8034 17.5458 19 18.0002 19C18.4545 19 18.9106 18.8034 19.2618 18.4193L20.2619 17.3253C20.6346 16.9177 21.2671 16.8893 21.6747 17.2619Z",
				"fill": "currentColor"
			},
			"children": []
		}, {
			"type": "element",
			"name": "path",
			"attributes": {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				"d": "M15.793 2.79287C17.0119 1.57393 18.9882 1.57392 20.2072 2.79287C21.4261 4.01183 21.4261 5.98814 20.2072 7.20709L7.64443 19.7698C7.62463 19.7896 7.60502 19.8093 7.58556 19.8288C7.29811 20.1168 7.04467 20.3707 6.73914 20.5579C6.47072 20.7224 6.17809 20.8436 5.87198 20.9171C5.52353 21.0007 5.16478 21.0004 4.75788 21C4.73034 21 4.70258 21 4.67458 21H3.00004C2.44776 21 2.00004 20.5523 2.00004 20V18.3255C2.00004 18.2975 2.00001 18.2697 1.99999 18.2422C1.99961 17.8353 1.99928 17.4765 2.08293 17.1281C2.15642 16.822 2.27763 16.5293 2.44212 16.2609C2.62936 15.9554 2.88327 15.7019 3.17125 15.4145C3.19075 15.395 3.2104 15.3754 3.23019 15.3556L15.793 2.79287Z",
				"fill": "currentColor"
			},
			"children": []
		}]
	},
	name: "Edit04"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/Edit04.tsx
var Icon$33 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Edit04_default
});
Icon$33.displayName = "Edit04";
var Eye_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z",
				"fill": "currentColor"
			},
			"children": []
		}, {
			"type": "element",
			"name": "path",
			"attributes": {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				"d": "M12 4C9.13833 4 6.80535 5.26472 5.07675 6.70743C3.3505 8.14818 2.16697 9.81429 1.57422 10.7528L1.55014 10.7908C1.43252 10.976 1.27981 11.2164 1.2026 11.5532C1.14027 11.8251 1.14027 12.1749 1.2026 12.4468C1.2798 12.7836 1.43252 13.024 1.55014 13.2092L1.57423 13.2472C2.16697 14.1857 3.3505 15.8518 5.07675 17.2926C6.80535 18.7353 9.13833 20 12 20C14.8617 20 17.1947 18.7353 18.9233 17.2926C20.6495 15.8518 21.833 14.1857 22.4258 13.2472L22.4499 13.2092C22.5675 13.024 22.7202 12.7837 22.7974 12.4468C22.8597 12.1749 22.8597 11.8251 22.7974 11.5532C22.7202 11.2163 22.5675 10.976 22.4499 10.7908L22.4258 10.7528C21.833 9.81429 20.6495 8.14818 18.9233 6.70743C17.1947 5.26472 14.8617 4 12 4ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z",
				"fill": "currentColor"
			},
			"children": []
		}]
	},
	name: "Eye"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/Eye.tsx
var Icon$32 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Eye_default
});
Icon$32.displayName = "Eye";
var Github_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "Icon" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Vector",
					"d": "M8 1C4.1325 1 1 4.1325 1 8C1 11.0975 3.00375 13.7137 5.78625 14.6413C6.13625 14.7025 6.2675 14.4925 6.2675 14.3088C6.2675 14.1425 6.25875 13.5913 6.25875 13.005C4.5 13.3288 4.045 12.5763 3.905 12.1825C3.82625 11.9812 3.485 11.36 3.1875 11.1937C2.9425 11.0625 2.5925 10.7387 3.17875 10.73C3.73 10.7212 4.12375 11.2375 4.255 11.4475C4.885 12.5062 5.89125 12.2088 6.29375 12.025C6.355 11.57 6.53875 11.2638 6.74 11.0887C5.1825 10.9137 3.555 10.31 3.555 7.6325C3.555 6.87125 3.82625 6.24125 4.2725 5.75125C4.2025 5.57625 3.9575 4.85875 4.3425 3.89625C4.3425 3.89625 4.92875 3.7125 6.2675 4.61375C6.8275 4.45625 7.4225 4.3775 8.0175 4.3775C8.6125 4.3775 9.2075 4.45625 9.7675 4.61375C11.1063 3.70375 11.6925 3.89625 11.6925 3.89625C12.0775 4.85875 11.8325 5.57625 11.7625 5.75125C12.2087 6.24125 12.48 6.8625 12.48 7.6325C12.48 10.3187 10.8438 10.9137 9.28625 11.0887C9.54 11.3075 9.75875 11.7275 9.75875 12.3837C9.75875 13.32 9.75 14.0725 9.75 14.3088C9.75 14.4925 9.88125 14.7113 10.2312 14.6413C11.6209 14.1721 12.8284 13.279 13.6839 12.0877C14.5393 10.8963 14.9996 9.46668 15 8C15 4.1325 11.8675 1 8 1Z",
					"fill": "currentColor"
				},
				"children": []
			}]
		}]
	},
	name: "Github"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/Github.tsx
var Icon$31 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Github_default
});
Icon$31.displayName = "Github";
var MessageClockCircle_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "message-clock-circle" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Solid",
					"d": "M1.33301 8.00016C1.33301 4.31826 4.31778 1.3335 7.99967 1.3335C11.6816 1.3335 14.6663 4.31826 14.6663 8.00016C14.6663 11.6821 11.6816 14.6668 7.99967 14.6668C7.11413 14.6668 6.26734 14.4938 5.49248 14.1791C5.42249 14.1507 5.38209 14.1344 5.35225 14.1231L5.34304 14.1197L5.33987 14.1202C5.31527 14.1235 5.28173 14.129 5.21771 14.1397L2.82667 14.5382C2.71958 14.5561 2.59976 14.5761 2.4957 14.5839C2.38225 14.5925 2.20175 14.5955 2.01101 14.5137C1.77521 14.4125 1.5873 14.2246 1.48616 13.9888C1.40435 13.7981 1.40733 13.6176 1.41589 13.5041C1.42375 13.4001 1.44375 13.2803 1.46163 13.1732L1.86015 10.7821C1.87082 10.7181 1.87634 10.6846 1.87967 10.66L1.8801 10.6568L1.87669 10.6476C1.86549 10.6178 1.84914 10.5773 1.82071 10.5074C1.50602 9.7325 1.33301 8.88571 1.33301 8.00016ZM7.99967 5.3335C7.99967 4.96531 7.7012 4.66683 7.33301 4.66683C6.96482 4.66683 6.66634 4.96531 6.66634 5.3335V8.66683C6.66634 9.03502 6.96482 9.3335 7.33301 9.3335H10.6663C11.0345 9.3335 11.333 9.03502 11.333 8.66683C11.333 8.29864 11.0345 8.00016 10.6663 8.00016H7.99967V5.3335Z",
					"fill": "currentColor"
				},
				"children": []
			}]
		}]
	},
	name: "MessageClockCircle"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/MessageClockCircle.tsx
var Icon$30 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: MessageClockCircle_default
});
Icon$30.displayName = "MessageClockCircle";
var PlusCircle_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "plus-circle" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Solid",
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8C11 7.44772 11.4477 7 12 7Z",
					"fill": "currentColor"
				},
				"children": []
			}]
		}]
	},
	name: "PlusCircle"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/PlusCircle.tsx
var Icon$29 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: PlusCircle_default
});
Icon$29.displayName = "PlusCircle";
var QuestionTriangle_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "8",
			"height": "12",
			"viewBox": "0 0 8 12",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "Rectangle 2" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M6.96353 1.5547C7.40657 0.890144 6.93018 0 6.13148 0H0V12L6.96353 1.5547Z",
					"fill": "currentColor"
				},
				"children": []
			}, {
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M6.96353 1.5547C7.40657 0.890144 6.93018 0 6.13148 0H0V12L6.96353 1.5547Z",
					"fill": "currentColor",
					"fill-opacity": "0.5"
				},
				"children": []
			}]
		}]
	},
	name: "QuestionTriangle"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/QuestionTriangle.tsx
var Icon$28 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: QuestionTriangle_default
});
Icon$28.displayName = "QuestionTriangle";
var SearchMd_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "search-md" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Solid",
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2ZM4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11Z",
					"fill": "currentColor"
				},
				"children": []
			}]
		}]
	},
	name: "SearchMd"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/SearchMd.tsx
var Icon$27 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: SearchMd_default
});
Icon$27.displayName = "SearchMd";
var Target04_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M19.1601 1.01292C19.4774 1.06441 19.7506 1.26529 19.8944 1.5528L20.7453 3.25466L22.4472 4.10558C22.7347 4.24934 22.9355 4.52254 22.987 4.83983C23.0385 5.15712 22.9343 5.47982 22.707 5.70712L19.707 8.70712C19.5195 8.89466 19.2652 9.00001 18.9999 9.00001H16.4142L12.7071 12.7071C12.3166 13.0976 11.6834 13.0976 11.2929 12.7071C10.9024 12.3166 10.9024 11.6834 11.2929 11.2929L14.9999 7.58585V5.00001C14.9999 4.7348 15.1053 4.48044 15.2928 4.29291L18.2928 1.29291C18.5201 1.06561 18.8428 0.961435 19.1601 1.01292Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M3 12C3 7.02944 7.02944 3 12 3C12.5523 3 13 2.55228 13 2C13 1.44772 12.5523 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 11.4477 22.5523 11 22 11C21.4477 11 21 11.4477 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M8 12C8 9.79086 9.79086 8 12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z",
					"fill": "currentColor"
				},
				"children": []
			}
		]
	},
	name: "Target04"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/Target04.tsx
var Icon$26 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Target04_default
});
Icon$26.displayName = "Target04";
var Tool03_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "tool-03" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Vector" },
				"children": [
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M5.10516 6.61092L6.45642 5.41856C6.43816 5.25959 6.43018 5.09961 6.43253 4.93962V4.9285L2.91826 1.41365C2.89245 1.38778 2.86179 1.36725 2.82804 1.35325C2.79429 1.33924 2.75811 1.33203 2.72157 1.33203C2.68503 1.33203 2.64884 1.33924 2.61509 1.35325C2.58134 1.36725 2.55069 1.38778 2.52488 1.41365L1.41365 2.52489C1.38778 2.5507 1.36725 2.58135 1.35325 2.6151C1.33924 2.64885 1.33203 2.68504 1.33203 2.72158C1.33203 2.75812 1.33924 2.7943 1.35325 2.82806C1.36725 2.86181 1.38778 2.89246 1.41365 2.91827L5.10516 6.61092Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M12.5043 9.33348C12.3512 9.3848 12.1956 9.42819 12.0381 9.46349L11.9748 9.47461C11.7112 9.51388 11.4451 9.53375 11.1786 9.53406C10.9848 9.53389 10.7912 9.52314 10.5985 9.50183L8.58942 11.7604L10.8297 14.0007C11.0335 14.2097 11.2767 14.3763 11.5452 14.4907C11.8138 14.6052 12.1024 14.6652 12.3943 14.6674H12.4176C12.8604 14.6643 13.2924 14.5307 13.6596 14.2832C14.0268 14.0356 14.3128 13.6853 14.4818 13.276C14.6508 12.8667 14.6952 12.4167 14.6096 11.9822C14.524 11.5478 14.3122 11.1483 14.0006 10.8337L12.5043 9.33348Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M14.4606 3.79227C14.4443 3.74889 14.4174 3.71027 14.3823 3.67995C14.3472 3.64963 14.3051 3.62857 14.2599 3.61868C14.2146 3.6088 14.1675 3.6104 14.123 3.62335C14.0785 3.6363 14.0379 3.66018 14.005 3.69282L12.4132 5.27745L10.7224 3.5928L12.3132 2.00929C12.3454 1.97739 12.3692 1.93802 12.3825 1.89468C12.3957 1.85134 12.3981 1.80539 12.3893 1.76092C12.3805 1.7159 12.3606 1.67376 12.3315 1.63828C12.3024 1.60279 12.265 1.57506 12.2226 1.55757C11.7685 1.35982 11.2688 1.29063 10.778 1.35754C9.88338 1.43541 9.05173 1.8501 8.45122 2.51777C7.8507 3.18544 7.52615 4.05624 7.54319 4.95408C7.53907 5.24983 7.58317 5.54428 7.67376 5.82584L2.09204 10.7442C1.64427 11.1439 1.3735 11.7051 1.33923 12.3043C1.30495 12.9036 1.50997 13.4919 1.90924 13.9401L1.95703 13.9924C2.35812 14.411 2.90891 14.6533 3.4885 14.6662C4.06809 14.6791 4.62913 14.4616 5.04848 14.0613C5.11213 14.0008 5.17189 13.9364 5.22739 13.8685L10.1801 8.30058C10.7141 8.43272 11.2688 8.45821 11.8126 8.37559C12.4502 8.24485 13.04 7.9423 13.5182 7.50065C13.9964 7.05899 14.3447 6.49503 14.5256 5.86974C14.7321 5.18882 14.7092 4.45895 14.4606 3.79227Z",
							"fill": "currentColor"
						},
						"children": []
					}
				]
			}]
		}]
	},
	name: "Tool03"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/Tool03.tsx
var Icon$25 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Tool03_default
});
Icon$25.displayName = "Tool03";
var XCircle_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"id": "Solid",
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				"d": "M8.00008 0.666016C3.94999 0.666016 0.666748 3.94926 0.666748 7.99935C0.666748 12.0494 3.94999 15.3327 8.00008 15.3327C12.0502 15.3327 15.3334 12.0494 15.3334 7.99935C15.3334 3.94926 12.0502 0.666016 8.00008 0.666016ZM10.4715 5.52794C10.7318 5.78829 10.7318 6.2104 10.4715 6.47075L8.94289 7.99935L10.4715 9.52794C10.7318 9.78829 10.7318 10.2104 10.4715 10.4708C10.2111 10.7311 9.78903 10.7311 9.52868 10.4708L8.00008 8.94216L6.47149 10.4708C6.21114 10.7311 5.78903 10.7311 5.52868 10.4708C5.26833 10.2104 5.26833 9.78829 5.52868 9.52794L7.05727 7.99935L5.52868 6.47075C5.26833 6.2104 5.26833 5.78829 5.52868 5.52794C5.78903 5.26759 6.21114 5.26759 6.47149 5.52794L8.00008 7.05654L9.52868 5.52794C9.78903 5.26759 10.2111 5.26759 10.4715 5.52794Z",
				"fill": "currentColor"
			},
			"children": []
		}]
	},
	name: "XCircle"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/XCircle.tsx
var Icon$24 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: XCircle_default
});
Icon$24.displayName = "XCircle";
var ZapFast_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "12",
			"height": "12",
			"viewBox": "0 0 12 12",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "zap-fast" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Solid" },
				"children": [
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							"d": "M1.25 8.75004C1.25 8.4739 1.47386 8.25004 1.75 8.25004H4.5C4.77614 8.25004 5 8.4739 5 8.75004C5 9.02618 4.77614 9.25004 4.5 9.25004H1.75C1.47386 9.25004 1.25 9.02618 1.25 8.75004Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							"d": "M0.5 6.00004C0.5 5.7239 0.723858 5.50004 1 5.50004H3.25C3.52614 5.50004 3.75 5.7239 3.75 6.00004C3.75 6.27618 3.52614 6.50004 3.25 6.50004H1C0.723858 6.50004 0.5 6.27618 0.5 6.00004Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							"d": "M1.5 3.25004C1.5 2.9739 1.72386 2.75004 2 2.75004H4.5C4.77614 2.75004 5 2.9739 5 3.25004C5 3.52618 4.77614 3.75004 4.5 3.75004H2C1.72386 3.75004 1.5 3.52618 1.5 3.25004Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							"d": "M8.68379 1.03505C8.89736 1.11946 9.02596 1.33849 8.99561 1.56612L8.57109 4.75004H10.4727C10.4785 4.75004 10.4842 4.75004 10.49 4.75004C10.6003 4.75002 10.7147 4.74999 10.8092 4.75863C10.9022 4.76713 11.0713 4.78965 11.2224 4.90631C11.3987 5.04237 11.5054 5.24972 11.5137 5.47225C11.5208 5.66306 11.4408 5.81376 11.3937 5.89434C11.3458 5.97625 11.2793 6.06932 11.2151 6.15912C11.2118 6.16381 11.2084 6.16849 11.2051 6.17316L7.90687 10.7907C7.77339 10.9775 7.52978 11.0495 7.31621 10.965C7.10264 10.8806 6.97404 10.6616 7.00439 10.434L7.42891 7.25004H5.52728C5.52154 7.25004 5.51579 7.25004 5.51003 7.25004C5.39966 7.25007 5.28526 7.25009 5.19077 7.24145C5.09782 7.23296 4.92871 7.21044 4.77755 7.09377C4.60127 6.95771 4.49456 6.75036 4.48631 6.52783C4.47924 6.33702 4.5592 6.18632 4.60631 6.10575C4.65421 6.02383 4.72072 5.93076 4.78489 5.84097C4.78824 5.83628 4.79158 5.8316 4.79492 5.82693L8.09313 1.20942C8.22661 1.02255 8.47022 0.950633 8.68379 1.03505Z",
							"fill": "currentColor"
						},
						"children": []
					}
				]
			}]
		}]
	},
	name: "ZapFast"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/ZapFast.tsx
var Icon$23 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: ZapFast_default
});
Icon$23.displayName = "ZapFast";
var ZapNarrow_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "12",
			"height": "12",
			"viewBox": "0 0 12 12",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "zap-narrow" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Solid",
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M6.69792 1.03505C6.91148 1.11946 7.04009 1.33849 7.00974 1.56612L6.58522 4.75004H8.48685C8.49259 4.75004 8.49834 4.75004 8.5041 4.75004C8.61447 4.75002 8.72887 4.74999 8.82336 4.75863C8.91631 4.76713 9.08541 4.78965 9.23657 4.90631C9.41286 5.04237 9.51956 5.24972 9.52781 5.47225C9.53489 5.66306 9.45493 5.81376 9.40781 5.89434C9.35992 5.97625 9.29341 6.06932 9.22924 6.15912C9.22589 6.16381 9.22255 6.16849 9.21921 6.17316L5.92099 10.7907C5.78752 10.9775 5.54391 11.0495 5.33034 10.965C5.11677 10.8806 4.98816 10.6616 5.01851 10.434L5.44304 7.25004H3.5414C3.53567 7.25004 3.52992 7.25004 3.52416 7.25004C3.41378 7.25007 3.29939 7.25009 3.2049 7.24145C3.11194 7.23296 2.94284 7.21044 2.79168 7.09377C2.6154 6.95771 2.50869 6.75036 2.50044 6.52783C2.49336 6.33702 2.57333 6.18632 2.62044 6.10575C2.66833 6.02383 2.73484 5.93076 2.79901 5.84097C2.80236 5.83628 2.80571 5.8316 2.80904 5.82693L6.10726 1.20942C6.24074 1.02255 6.48435 0.950633 6.69792 1.03505Z",
					"fill": "currentColor"
				},
				"children": []
			}]
		}]
	},
	name: "ZapNarrow"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/general/ZapNarrow.tsx
var Icon$22 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: ZapNarrow_default
});
Icon$22.displayName = "ZapNarrow";
//#endregion
//#region node_modules/.pnpm/lexical@0.42.0/node_modules/lexical/Lexical.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function t$1(t, ...e) {
	const n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", t);
	for (const t of e) r.append("v", t);
	throw n.search = r.toString(), Error(`Minified Lexical error #${t}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function e(t, ...e) {
	const n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", t);
	for (const t of e) r.append("v", t);
	n.search = r.toString(), console.warn(`Minified Lexical warning #${t}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var n$2 = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement, r$3 = n$2 && "documentMode" in document ? document.documentMode : null, i = n$2 && /Mac|iPod|iPhone|iPad/.test(navigator.platform), o$1 = n$2 && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), s$2 = !(!n$2 || !("InputEvent" in window) || r$3) && "getTargetRanges" in new window.InputEvent("input"), l = n$2 && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), c$3 = n$2 && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, a$2 = n$2 && /Android/.test(navigator.userAgent), u$3 = n$2 && /^(?=.*Chrome).*/i.test(navigator.userAgent), f$3 = n$2 && a$2 && u$3, d$2 = n$2 && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && i && !u$3, h$1 = 0, g$3 = 1, _$3 = 2, N$1 = 1, b$5 = 2, w$3 = 3, E$5 = 4, O$6 = 5, M$4 = 6, A$3 = l || c$3 || d$2 ? "\xA0" : "​", P$2 = "\n\n", D$4 = o$1 ? "\xA0" : A$3;
new RegExp("^[^֑-߿יִ-﷽ﹰ-ﻼ]*[A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿]");
var z$3 = {
	bold: 1,
	capitalize: 1024,
	code: 16,
	highlight: 128,
	italic: 2,
	lowercase: 256,
	strikethrough: 4,
	subscript: 32,
	superscript: 64,
	underline: 8,
	uppercase: 512
}, R$4 = {
	directionless: 1,
	unmergeable: 2
}, B$3 = {
	center: 2,
	end: 6,
	justify: 4,
	left: 1,
	right: 3,
	start: 5
}, W$2 = {
	[b$5]: "center",
	[M$4]: "end",
	[E$5]: "justify",
	[N$1]: "left",
	[w$3]: "right",
	[O$6]: "start"
}, J$2 = {
	normal: 0,
	segmented: 2,
	token: 1
}, j$2 = {
	[h$1]: "normal",
	[_$3]: "segmented",
	[g$3]: "token"
}, $$3 = "$config";
function V$2(t, e, n, r, i, o) {
	let s = t.getFirstChild();
	for (; null !== s;) {
		const t = s.__key;
		s.__parent === e && (Pi(s) && V$2(s, t, n, r, i, o), n.has(t) || o.delete(t), i.push(t)), s = s.getNextSibling();
	}
}
var Y$3 = !1, q$2 = 0;
function H$3(t) {
	q$2 = t.timeStamp;
}
function G$1(t, e, n) {
	const r = "BR" === t.nodeName, i = e.__lexicalLineBreak;
	return i && (t === i || r && t.previousSibling === i) || r && void 0 !== Fo(t, n);
}
function X$2(t, e, n) {
	const r = Es(ms(n));
	let i = null, o = null;
	null !== r && r.anchorNode === t && (i = r.anchorOffset, o = r.focusOffset);
	const s = t.nodeValue;
	null !== s && Yo(e, s, i, o, !1);
}
function Q$3(t, e, n) {
	if (wr(t)) {
		const e = t.anchor.getNode();
		if (e.is(n) && t.format !== e.getFormat()) return !1;
	}
	return vo(e) && n.isAttached();
}
function Z$2(t, e, n, r) {
	for (let i = t; i && !Vs(i); i = fs(i)) {
		const t = Fo(i, e);
		if (void 0 !== t) {
			const e = Po(t, n);
			if (e) return Li(e) || !Ps(i) ? void 0 : [i, e];
		} else if (i === r) return [r, Ro(n)];
	}
}
function tt$2(t, e, n) {
	Y$3 = !0;
	const r = performance.now() - q$2 > 100;
	try {
		Ei(t, () => {
			const i = $r() || function(t) {
				return t.getEditorState().read(() => {
					const t = $r();
					return null !== t ? t.clone() : null;
				});
			}(t), s = /* @__PURE__ */ new Map(), l = t.getRootElement(), c = t._editorState, a = t._blockCursorElement;
			let u = !1, f = "";
			for (let n = 0; n < e.length; n++) {
				const d = e[n], h = d.type, g = d.target, _ = Z$2(g, t, c, l);
				if (!_) continue;
				const [p, y] = _;
				if ("characterData" === h) r && yr(y) && vo(g) && Q$3(i, g, y) && X$2(g, y, t);
				else if ("childList" === h) {
					u = !0;
					const e = d.addedNodes;
					for (let n = 0; n < e.length; n++) {
						const r = e[n], i = Do(r), s = r.parentNode;
						if (null != s && r !== a && null === i && !G$1(r, s, t)) {
							if (o$1) {
								const t = (Ps(r) ? r.innerText : null) || r.nodeValue;
								t && (f += t);
							}
							s.removeChild(r);
						}
					}
					const n = d.removedNodes, r = n.length;
					if (r > 0) {
						let e = 0;
						for (let i = 0; i < r; i++) {
							const r = n[i];
							(G$1(r, g, t) || a === r) && (g.appendChild(r), e++);
						}
						r !== e && s.set(p, y);
					}
				}
			}
			if (s.size > 0) for (const [e, n] of s) n.reconcileObservedMutation(e, t);
			const d = n.takeRecords();
			if (d.length > 0) {
				for (let e = 0; e < d.length; e++) {
					const n = d[e], r = n.addedNodes, i = n.target;
					for (let e = 0; e < r.length; e++) {
						const n = r[e], o = n.parentNode;
						null == o || "BR" !== n.nodeName || G$1(n, i, t) || o.removeChild(n);
					}
				}
				n.takeRecords();
			}
			null !== i && (u && Bo(i), o$1 && cs(t) && i.insertRawText(f));
		});
	} finally {
		Y$3 = !1;
	}
}
function et$2(t) {
	const e = t._observer;
	if (null !== e) tt$2(t, e.takeRecords(), e);
}
function nt$2(t) {
	(function(t) {
		0 === q$2 && ms(t).addEventListener("textInput", H$3, !0);
	})(t), t._observer = new MutationObserver((e, n) => {
		tt$2(t, e, n);
	});
}
var rt$2 = class {
	key;
	parse;
	unparse;
	isEqual;
	defaultValue;
	resetOnCopyNode;
	constructor(t, e) {
		this.key = t, this.parse = e.parse.bind(e), this.unparse = (e.unparse || ht$2).bind(e), this.isEqual = (e.isEqual || Object.is).bind(e), this.defaultValue = this.parse(void 0), this.resetOnCopyNode = e.resetOnCopyNode || !1;
	}
};
function it$2(t, e) {
	return new rt$2(t, e);
}
function ot$2(t, e, n = "latest") {
	const r = ("latest" === n ? t.getLatest() : t).__state;
	return r ? r.getValue(e) : e.defaultValue;
}
function lt$2(t, e, n) {
	let r;
	if (di(), "function" == typeof n) {
		const i = t.getLatest(), o = ot$2(i, e);
		if (r = n(o), e.isEqual(o, r)) return i;
	} else r = n;
	const i = t.getWritable();
	return ut$2(i).updateFromKnown(e, r), i;
}
function ct$2(t) {
	const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
	for (let r = "function" == typeof t ? t : t.replace; r.prototype && void 0 !== r.prototype.getType; r = Object.getPrototypeOf(r)) {
		const { ownNodeConfig: t } = qs(r);
		if (t && t.stateConfigs) for (const r of t.stateConfigs) {
			let t;
			"stateConfig" in r ? (t = r.stateConfig, r.flat && n.add(t.key)) : t = r, e.set(t.key, t);
		}
	}
	return {
		flatKeys: n,
		sharedConfigMap: e
	};
}
var at$1 = class at$1 {
	node;
	knownState;
	unknownState;
	sharedNodeState;
	size;
	constructor(t, e, n = void 0, r = /* @__PURE__ */ new Map(), i = void 0) {
		this.node = t, this.sharedNodeState = e, this.unknownState = n, this.knownState = r;
		const { sharedConfigMap: o } = this.sharedNodeState;
		this.size = void 0 !== i ? i : function(t, e, n) {
			let r = n.size;
			if (e) for (const i in e) {
				const e = t.get(i);
				e && n.has(e) || r++;
			}
			return r;
		}(o, n, r);
	}
	getValue(t) {
		const e = this.knownState.get(t);
		if (void 0 !== e) return e;
		this.sharedNodeState.sharedConfigMap.set(t.key, t);
		let n = t.defaultValue;
		if (this.unknownState && t.key in this.unknownState) {
			const e = this.unknownState[t.key];
			void 0 !== e && (n = t.parse(e)), this.updateFromKnown(t, n);
		}
		return n;
	}
	getInternalState() {
		return [this.unknownState, this.knownState];
	}
	toJSON() {
		const t = { ...this.unknownState }, e = {};
		for (const [e, n] of this.knownState) e.isEqual(n, e.defaultValue) ? delete t[e.key] : t[e.key] = e.unparse(n);
		for (const n of this.sharedNodeState.flatKeys) n in t && (e[n] = t[n], delete t[n]);
		return dt$1(t) && (e.$ = t), e;
	}
	getWritable(t) {
		if (this.node === t) return this;
		const { sharedNodeState: e, unknownState: n } = this, r = new Map(this.knownState);
		return new at$1(t, e, function(t, e, n) {
			let r;
			if (n) for (const [i, o] of Object.entries(n)) {
				const n = t.get(i);
				n ? e.has(n) || e.set(n, n.parse(o)) : (r = r || {}, r[i] = o);
			}
			return r;
		}(e.sharedConfigMap, r, n), r, this.size);
	}
	resetOnCopyNode() {
		for (const t of this.knownState.keys()) t.resetOnCopyNode && this.knownState.set(t, t.defaultValue);
		return this;
	}
	updateFromKnown(t, e) {
		const n = t.key;
		this.sharedNodeState.sharedConfigMap.set(n, t);
		const { knownState: r, unknownState: i } = this;
		r.has(t) || i && n in i || (i && (delete i[n], this.unknownState = dt$1(i)), this.size++), r.set(t, e);
	}
	updateFromUnknown(t, e) {
		const n = this.sharedNodeState.sharedConfigMap.get(t);
		n ? this.updateFromKnown(n, n.parse(e)) : (this.unknownState = this.unknownState || {}, t in this.unknownState || this.size++, this.unknownState[t] = e);
	}
	updateFromJSON(t) {
		const { knownState: e } = this;
		for (const t of e.keys()) e.set(t, t.defaultValue);
		if (this.size = e.size, this.unknownState = void 0, t) for (const [e, n] of Object.entries(t)) this.updateFromUnknown(e, n);
	}
};
function ut$2(t) {
	const e = t.getWritable(), n = e.__state ? e.__state.getWritable(e) : new at$1(e, ft$1(e));
	return e.__state = n, n;
}
function ft$1(t) {
	return t.__state ? t.__state.sharedNodeState : ao(zs(), t.getType()).sharedNodeState;
}
function dt$1(t) {
	if (t) for (const e in t) return t;
}
function ht$2(t) {
	return t;
}
function gt$2(t, e, n) {
	for (const [r, i] of e.knownState) {
		if (t.has(r.key)) continue;
		t.add(r.key);
		const e = n ? n.getValue(r) : r.defaultValue;
		if (e !== i && !r.isEqual(e, i)) return !0;
	}
	return !1;
}
function _t$2(t, e, n) {
	const { unknownState: r } = e, i = n ? n.unknownState : void 0;
	if (r) for (const [e, n] of Object.entries(r)) {
		if (t.has(e)) continue;
		t.add(e);
		if (n !== (i ? i[e] : void 0)) return !0;
	}
	return !1;
}
function pt$2(t, e) {
	const n = t.__state;
	return n && n.node === t ? n.getWritable(e) : n;
}
function yt$2(t, e) {
	const n = t.__mode, r = t.__format, i = t.__style, o = e.__mode, s = e.__format, l = e.__style, c = t.__state, a = e.__state;
	return (null === n || n === o) && (null === r || r === s) && (null === i || i === l) && (null === t.__state || c === a || function(t, e) {
		if (t === e) return !0;
		if (t && e && t.size !== e.size) return !1;
		const n = /* @__PURE__ */ new Set();
		return !(t && gt$2(n, t, e) || e && gt$2(n, e, t) || t && _t$2(n, t, e) || e && _t$2(n, e, t));
	}(c, a));
}
function mt$1(t, e) {
	const n = t.mergeWithSibling(e), r = _i()._normalizedNodes;
	return r.add(t.__key), r.add(e.__key), n;
}
function xt$2(t) {
	let e, n, r = t;
	if ("" !== r.__text || !r.isSimpleText() || r.isUnmergeable()) {
		for (; null !== (e = r.getPreviousSibling()) && yr(e) && e.isSimpleText() && !e.isUnmergeable();) {
			if ("" !== e.__text) {
				if (yt$2(e, r)) {
					r = mt$1(e, r);
					break;
				}
				break;
			}
			e.remove();
		}
		for (; null !== (n = r.getNextSibling()) && yr(n) && n.isSimpleText() && !n.isUnmergeable();) {
			if ("" !== n.__text) {
				if (yt$2(r, n)) {
					r = mt$1(r, n);
					break;
				}
				break;
			}
			n.remove();
		}
	} else r.remove();
}
function Ct$3(t) {
	return St$3(t.anchor), St$3(t.focus), t;
}
function St$3(t) {
	for (; "element" === t.type;) {
		const e = t.getNode(), n = t.offset;
		let r, i;
		if (n === e.getChildrenSize() ? (r = e.getChildAtIndex(n - 1), i = !0) : (r = e.getChildAtIndex(n), i = !1), yr(r)) {
			t.set(r.__key, i ? r.getTextContentSize() : 0, "text", !0);
			break;
		}
		if (!Pi(r)) break;
		t.set(r.__key, i ? r.getChildrenSize() : 0, "element", !0);
	}
}
var vt$2, kt$3, Tt$2, Nt$2, bt$3, wt$1, Et$2, Ot$1, Mt$2, At$2, Pt$2 = "", Dt$1 = null, Ft$1 = null, Lt$3 = !1, It$1 = !1;
function Kt$3(t, e) {
	const n = Et$2.get(t);
	if (null !== e) {
		const n = ee$2(t);
		n.parentNode === e && e.removeChild(n);
	}
	if (Ot$1.has(t) || kt$3._keyToDOMMap.delete(t), Pi(n)) {
		const t = Ht$1(n, Et$2);
		zt$1(t, 0, t.length - 1, null);
	}
	void 0 !== n && is(At$2, Tt$2, Nt$2, n, "destroyed");
}
function zt$1(t, e, n, r) {
	for (let i = e; i <= n; ++i) {
		const e = t[i];
		void 0 !== e && Kt$3(e, r);
	}
}
function Rt$1(t, e) {
	t.setProperty("text-align", e);
}
var Bt$2 = "40px";
function Wt$1(t, e) {
	const n = vt$2.theme.indent;
	if ("string" == typeof n) {
		const r = t.classList.contains(n);
		e > 0 && !r ? t.classList.add(n) : e < 1 && r && t.classList.remove(n);
	}
	if (0 === e) return void t.style.setProperty("padding-inline-start", "");
	const r = getComputedStyle(kt$3._rootElement || t).getPropertyValue("--lexical-indent-base-value") || Bt$2;
	t.style.setProperty("padding-inline-start", `calc(${e} * ${r})`);
}
function Jt$2(t, e) {
	const n = t.style;
	0 === e ? Rt$1(n, "") : 1 === e ? Rt$1(n, "left") : 2 === e ? Rt$1(n, "center") : 3 === e ? Rt$1(n, "right") : 4 === e ? Rt$1(n, "justify") : 5 === e ? Rt$1(n, "start") : 6 === e && Rt$1(n, "end");
}
function jt$1(t, e) {
	const n = function(t) {
		const e = t.__dir;
		if (null !== e) return e;
		if (Ki(t)) return null;
		const n = t.getParentOrThrow();
		return Ki(n) && null === n.__dir ? "auto" : null;
	}(e);
	null !== n ? t.dir = n : t.removeAttribute("dir");
}
function Ut$1(e, n) {
	const r = Ot$1.get(e);
	void 0 === r && t$1(60);
	const i = r.createDOM(vt$2, kt$3);
	if (function(t, e, n) {
		const r = n._keyToDOMMap;
		(function(t, e, n) {
			const r = `__lexicalKey_${e._key}`;
			t[r] = n;
		})(e, n, t), r.set(t, e);
	}(e, i, kt$3), yr(r) ? i.setAttribute("data-lexical-text", "true") : Li(r) && i.setAttribute("data-lexical-decorator", "true"), Pi(r)) {
		const t = r.__indent, e = r.__size;
		if (jt$1(i, r), 0 !== t && Wt$1(i, t), 0 !== e) {
			const t = e - 1;
			$t$1(Ht$1(r, Ot$1), r, 0, t, r.getDOMSlot(i));
		}
		const n = r.__format;
		0 !== n && Jt$2(i, n), r.isInline() || Yt$1(null, r, i);
	} else {
		const t = r.getTextContent();
		if (Li(r)) {
			const t = r.decorate(kt$3, vt$2);
			null !== t && Xt$1(e, t), i.contentEditable = "false";
		}
		Pt$2 += t;
	}
	return null !== n && n.insertChild(i), is(At$2, Tt$2, Nt$2, r, "created"), i;
}
function $t$1(t, e, n, r, i) {
	const o = Pt$2;
	Pt$2 = "";
	let s = n;
	for (; s <= r; ++s) {
		Ut$1(t[s], i);
		const e = Ot$1.get(t[s]);
		null !== e && yr(e) ? null === Dt$1 && (Dt$1 = e.getFormat(), Ft$1 = e.getStyle()) : Pi(e) && s < r && !e.isInline() && (Pt$2 += P$2);
	}
	i.element.__lexicalTextContent = Pt$2, Pt$2 = o + Pt$2;
}
function Vt$1(t, e) {
	if (t) {
		const n = t.__last;
		if (n) {
			const t = e.get(n);
			if (t) return Zn(t) ? "line-break" : Li(t) && t.isInline() ? "decorator" : null;
		}
		return "empty";
	}
	return null;
}
function Yt$1(t, e, n) {
	const r = Vt$1(t, Et$2), i = Vt$1(e, Ot$1);
	r !== i && e.getDOMSlot(n).setManagedLineBreak(i);
}
function qt$1(e, n, r) {
	var i;
	Dt$1 = null, Ft$1 = null, function(e, n, r) {
		const i = Pt$2, o = e.__size, s = n.__size;
		Pt$2 = "";
		const l = r.element;
		if (1 === o && 1 === s) {
			const t = e.__first, r = n.__first;
			if (t === r) Gt$1(t, l);
			else {
				const e = ee$2(t), n = Ut$1(r, null);
				try {
					l.replaceChild(n, e);
				} catch (i) {
					if ("object" == typeof i && null != i) {
						const o = `${i.toString()} Parent: ${l.tagName}, new child: {tag: ${n.tagName} key: ${r}}, old child: {tag: ${e.tagName}, key: ${t}}.`;
						throw new Error(o);
					}
					throw i;
				}
				Kt$3(t, null);
			}
			const i = Ot$1.get(r);
			yr(i) && null === Dt$1 && (Dt$1 = i.getFormat(), Ft$1 = i.getStyle());
		} else {
			const i = Ht$1(e, Et$2), c = Ht$1(n, Ot$1);
			if (i.length !== o && t$1(227), c.length !== s && t$1(228), 0 === o) 0 !== s && $t$1(c, 0, 0, s - 1, r);
			else if (0 === s) {
				if (0 !== o) {
					const t = null == r.after && null == r.before && null == r.element.__lexicalLineBreak;
					zt$1(i, 0, o - 1, t ? null : l), t && (l.textContent = "");
				}
			} else (function(t, e, n, r, i, o) {
				const s = r - 1, l = i - 1;
				let c, a, u = o.getFirstChild(), f = 0, d = 0;
				for (; f <= s && d <= l;) {
					const t = e[f], r = n[d];
					if (t === r) u = Qt$1(Gt$1(r, o.element)), f++, d++;
					else {
						if (void 0 === a && (a = Zt$1(n, d)), void 0 === c) c = Zt$1(e, f);
						else if (!c.has(t)) {
							f++;
							continue;
						}
						if (!a.has(t)) {
							u = Qt$1(ee$2(t)), Kt$3(t, o.element), f++, c.delete(t);
							continue;
						}
						if (c.has(r)) {
							const t = us(kt$3, r);
							t !== u && o.withBefore(u).insertChild(t), u = Qt$1(Gt$1(r, o.element)), f++, d++;
						} else Ut$1(r, o.withBefore(u)), d++;
					}
					const i = Ot$1.get(r);
					null !== i && yr(i) ? null === Dt$1 && (Dt$1 = i.getFormat(), Ft$1 = i.getStyle()) : Pi(i) && d <= l && !i.isInline() && (Pt$2 += P$2);
				}
				const h = f > s, g = d > l;
				if (h && !g) {
					const t = n[l + 1], e = void 0 === t ? null : kt$3.getElementByKey(t);
					$t$1(n, 0, d, l, o.withBefore(e));
				} else g && !h && zt$1(e, f, s, o.element);
			})(0, i, c, o, s, r);
		}
		l.__lexicalTextContent = Pt$2, Pt$2 = i + Pt$2;
	}(e, n, n.getDOMSlot(r)), i = n, null == Dt$1 || Dt$1 === i.__textFormat || It$1 || i.setTextFormat(Dt$1), function(t) {
		null == Ft$1 || Ft$1 === t.__textStyle || It$1 || t.setTextStyle(Ft$1);
	}(n);
}
function Ht$1(e, n) {
	const r = [];
	let i = e.__first;
	for (; null !== i;) {
		const e = n.get(i);
		void 0 === e && t$1(101), r.push(i), i = e.__next;
	}
	return r;
}
function Gt$1(e, n) {
	const r = Et$2.get(e);
	let i = Ot$1.get(e);
	void 0 !== r && void 0 !== i || t$1(61);
	const o = Lt$3 || wt$1.has(e) || bt$3.has(e), s = us(kt$3, e);
	if (r === i && !o) {
		let t;
		if (Pi(r)) {
			const e = s.__lexicalTextContent;
			"string" == typeof e ? t = e : (t = r.getTextContent(), s.__lexicalTextContent = t);
		} else t = r.getTextContent();
		return Pt$2 += t, s;
	}
	if (r !== i && o && is(At$2, Tt$2, Nt$2, i, "updated"), i.updateDOM(r, s, vt$2)) {
		const r = Ut$1(e, null);
		return null === n && t$1(62), n.replaceChild(r, s), Kt$3(e, null), r;
	}
	if (Pi(r)) {
		Pi(i) || t$1(334, e);
		const n = i.__indent;
		(Lt$3 || n !== r.__indent) && Wt$1(s, n);
		const l = i.__format;
		if ((Lt$3 || l !== r.__format) && Jt$2(s, l), o) qt$1(r, i, s), Ki(i) || i.isInline() || Yt$1(r, i, s);
		else {
			const t = s.__lexicalTextContent;
			let e;
			"string" == typeof t ? e = t : (e = r.getTextContent(), s.__lexicalTextContent = e), Pt$2 += e;
		}
		if ((Lt$3 || i.__dir !== r.__dir) && (jt$1(s, i), Ki(i) && !Lt$3)) {
			for (const t of i.getChildren()) if (Pi(t)) jt$1(us(kt$3, t.getKey()), t);
		}
	} else {
		const t = i.getTextContent();
		if (Li(i)) {
			const t = i.decorate(kt$3, vt$2);
			null !== t && Xt$1(e, t);
		}
		Pt$2 += t;
	}
	if (!It$1 && Ki(i) && i.__cachedText !== Pt$2) {
		const t = i.getWritable();
		t.__cachedText = Pt$2, i = t;
	}
	return s;
}
function Xt$1(t, e) {
	let n = kt$3._pendingDecorators;
	const r = kt$3._decorators;
	if (null === n) {
		if (r[t] === e) return;
		n = Io(kt$3);
	}
	n[t] = e;
}
function Qt$1(t) {
	let e = t.nextSibling;
	return null !== e && e === kt$3._blockCursorElement && (e = e.nextSibling), e;
}
function Zt$1(t, e) {
	const n = /* @__PURE__ */ new Set();
	for (let r = e; r < t.length; r++) n.add(t[r]);
	return n;
}
function te$1(t, e, n, r, i, o) {
	Pt$2 = "", Lt$3 = 2 === r, kt$3 = n, vt$2 = n._config, Tt$2 = n._nodes, Nt$2 = kt$3._listeners.mutation, bt$3 = i, wt$1 = o, Et$2 = t._nodeMap, Ot$1 = e._nodeMap, It$1 = e._readOnly, Mt$2 = new Map(n._keyToDOMMap);
	const s = /* @__PURE__ */ new Map();
	return At$2 = s, Gt$1("root", null), kt$3 = void 0, Tt$2 = void 0, bt$3 = void 0, wt$1 = void 0, Et$2 = void 0, Ot$1 = void 0, vt$2 = void 0, Mt$2 = void 0, At$2 = void 0, s;
}
function ee$2(e) {
	const n = Mt$2.get(e);
	return void 0 === n && t$1(75, e), n;
}
function ne$2(t) {
	return { type: t };
}
var re = ne$2("SELECTION_CHANGE_COMMAND"), ie$1 = ne$2("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"), oe$2 = ne$2("CLICK_COMMAND"), se$1 = ne$2("BEFORE_INPUT_COMMAND"), le$2 = ne$2("INPUT_COMMAND"), ce$1 = ne$2("COMPOSITION_START_COMMAND"), ae = ne$2("COMPOSITION_END_COMMAND"), ue$1 = ne$2("DELETE_CHARACTER_COMMAND"), fe$1 = ne$2("INSERT_LINE_BREAK_COMMAND"), de$1 = ne$2("INSERT_PARAGRAPH_COMMAND"), he$1 = ne$2("CONTROLLED_TEXT_INSERTION_COMMAND"), ge$1 = ne$2("PASTE_COMMAND"), _e = ne$2("REMOVE_TEXT_COMMAND"), pe$1 = ne$2("DELETE_WORD_COMMAND"), ye$1 = ne$2("DELETE_LINE_COMMAND"), me$1 = ne$2("FORMAT_TEXT_COMMAND"), xe$1 = ne$2("UNDO_COMMAND"), Ce = ne$2("REDO_COMMAND"), Se$1 = ne$2("KEYDOWN_COMMAND"), ve$1 = ne$2("KEY_ARROW_RIGHT_COMMAND"), ke = ne$2("MOVE_TO_END"), Te = ne$2("KEY_ARROW_LEFT_COMMAND"), Ne = ne$2("MOVE_TO_START"), be = ne$2("KEY_ARROW_UP_COMMAND"), we = ne$2("KEY_ARROW_DOWN_COMMAND"), Ee$1 = ne$2("KEY_ENTER_COMMAND"), Oe = ne$2("KEY_SPACE_COMMAND"), Me = ne$2("KEY_BACKSPACE_COMMAND"), Ae = ne$2("KEY_ESCAPE_COMMAND"), Pe = ne$2("KEY_DELETE_COMMAND"), De = ne$2("KEY_TAB_COMMAND"), Fe = ne$2("INSERT_TAB_COMMAND"), Le = ne$2("INDENT_CONTENT_COMMAND"), Ie = ne$2("OUTDENT_CONTENT_COMMAND"), Ke = ne$2("DROP_COMMAND"), ze = ne$2("FORMAT_ELEMENT_COMMAND"), Re = ne$2("DRAGSTART_COMMAND"), Be = ne$2("DRAGOVER_COMMAND"), We = ne$2("DRAGEND_COMMAND"), Je = ne$2("COPY_COMMAND"), je = ne$2("CUT_COMMAND"), Ue = ne$2("SELECT_ALL_COMMAND"), $e = ne$2("CLEAR_EDITOR_COMMAND"), Ve = ne$2("CLEAR_HISTORY_COMMAND"), Ye = ne$2("CAN_REDO_COMMAND"), qe = ne$2("CAN_UNDO_COMMAND"), He = ne$2("FOCUS_COMMAND"), Ge = ne$2("BLUR_COMMAND"), Xe = ne$2("KEY_MODIFIER_COMMAND"), Qe = Object.freeze({}), Ze = [
	["keydown", function(t, e) {
		if (tn = t.timeStamp, en = t.key, e.isComposing()) return;
		as(e, Se$1, t);
	}],
	["pointerdown", function(t, e) {
		const n = t.target, r = t.pointerType;
		Ds(n) && "touch" !== r && "pen" !== r && 0 === t.button && Ei(e, () => {
			ho(n) || (cn = !0);
		});
	}],
	["compositionstart", function(t, e) {
		as(e, ce$1, t);
	}],
	["compositionend", function(t, e) {
		o$1 ? un = !0 : c$3 || !l && !d$2 ? as(e, ae, t) : (fn = !0, dn = t.data);
	}],
	["input", function(t, e) {
		t.stopPropagation(), Ei(e, () => {
			e.dispatchCommand(le$2, t);
		}, { event: t }), rn = null;
	}],
	["click", function(t, e) {
		Ei(e, () => {
			const n = $r(), r = Es(ms(e)), i = Vr();
			if (r) {
				if (wr(n)) {
					const e = n.anchor, o = e.getNode();
					if ("element" === e.type && 0 === e.offset && n.isCollapsed() && !Ki(o) && 1 === zo().getChildrenSize() && o.getTopLevelElementOrThrow().isEmpty() && null !== i && n.is(i)) r.removeAllRanges(), n.dirty = !0;
					else if (3 === t.detail && !n.isCollapsed()) {
						if (o !== n.focus.getNode()) {
							const t = Gs(o, (t) => Pi(t) && !t.isInline());
							Pi(t) && t.select(0);
						}
					}
				} else if ("touch" === t.pointerType || "pen" === t.pointerType) {
					const n = r.anchorNode;
					if (Ps(n) || vo(n)) Bo(Ur(i, r, e, t));
				}
			}
			as(e, oe$2, t);
		});
	}],
	["cut", Qe],
	["copy", Qe],
	["dragstart", Qe],
	["dragover", Qe],
	["dragend", Qe],
	["paste", Qe],
	["focus", Qe],
	["blur", Qe],
	["drop", Qe]
];
s$2 && Ze.push(["beforeinput", (t, e) => function(t, e) {
	const n = t.inputType;
	if ("deleteCompositionText" === n || o$1 && cs(e)) return;
	if ("insertCompositionText" === n) return;
	as(e, se$1, t);
}(t, e)]);
var tn = 0, en = null, nn = 0, rn = null;
var on = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap();
var ln = !1, cn = !1, an = !1, un = !1, fn = !1, dn = "", hn = null, gn = [
	0,
	"",
	0,
	"root",
	0
];
function _n(t, e, n, r, i) {
	const o = t.anchor, l = t.focus, c = o.getNode(), a = _i(), u = Es(ms(a)), f = null !== u ? u.anchorNode : null, d = o.key, h = a.getElementByKey(d), g = n.length;
	return d !== l.key || !yr(c) || (!i && (!s$2 || nn < r + 50) || c.isDirty() && g < 2 || Jo(n)) && o.offset !== l.offset && !c.isComposing() || So(c) || c.isDirty() && g > 1 || (i || !s$2) && null !== h && !c.isComposing() && f !== To(h) || null !== u && null !== e && (!e.collapsed || e.startContainer !== u.anchorNode || e.startOffset !== u.anchorOffset) || !c.isComposing() && (c.getFormat() !== t.format || c.getStyle() !== t.style) || function(t, e) {
		if (e.isSegmented()) return !0;
		if (!t.isCollapsed()) return !1;
		const n = t.anchor.offset, r = e.getParentOrThrow(), i = Co(e);
		return 0 === n ? !e.canInsertTextBefore() || !r.canInsertTextBefore() && !e.isComposing() || i || function(t) {
			const e = t.getPreviousSibling();
			return (yr(e) || Pi(e) && e.isInline()) && !e.canInsertTextAfter();
		}(e) : n === e.getTextContentSize() && (!e.canInsertTextAfter() || !r.canInsertTextAfter() && !e.isComposing() || i);
	}(t, c);
}
function pn(t, e) {
	return vo(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length;
}
function yn(e, n, r) {
	const { anchorNode: i, anchorOffset: o, focusNode: s, focusOffset: l } = e;
	ln && (ln = !1, pn(i, o) && pn(s, l) && !hn) || Ei(n, () => {
		if (!r) return void Bo(null);
		if (!_o(n, i, s)) return;
		let c = $r();
		if (hn && wr(c) && c.isCollapsed()) {
			const t = c.anchor, e = hn.anchor;
			(t.key === e.key && t.offset === e.offset + 1 || 1 === t.offset && e.getNode().is(t.getNode().getPreviousSibling())) && (c = hn.clone(), Bo(c));
		}
		if (hn = null, wr(c)) {
			const r = c.anchor, i = r.getNode();
			if (c.isCollapsed()) {
				"Range" === e.type && e.anchorNode === e.focusNode && (c.dirty = !0);
				const o = ms(n).event, s = o ? o.timeStamp : performance.now(), [l, a, u, f, d] = gn, h = zo(), g = !1 === n.isComposing() && "" === h.getTextContent();
				if (s < d + 200 && r.offset === u && r.key === f) mn(c, l, a);
				else if ("text" === r.type) yr(i) || t$1(141), xn(c, i);
				else if ("element" === r.type && !g) {
					Pi(i) || t$1(259);
					const e = r.getNode();
					e.isEmpty() ? function(t, e) {
						mn(t, e.getTextFormat(), e.getTextStyle());
					}(c, e) : mn(c, c.format, "");
				}
			} else {
				const t = r.key, e = c.focus.key, n = c.getNodes(), i = n.length, s = c.isBackward(), a = s ? l : o, u = s ? o : l, f = s ? e : t, d = s ? t : e;
				let h = 2047, g = !1;
				for (let t = 0; t < i; t++) {
					const e = n[t], r = e.getTextContentSize();
					if (yr(e) && 0 !== r && !(0 === t && e.__key === f && a === r || t === i - 1 && e.__key === d && 0 === u) && (g = !0, h &= e.getFormat(), 0 === h)) break;
				}
				c.format = g ? h : 0;
			}
		}
		as(n, re, void 0);
	});
}
function mn(t, e, n) {
	t.format === e && t.style === n || (t.format = e, t.style = n, t.dirty = !0);
}
function xn(t, e) {
	mn(t, e.getFormat(), e.getStyle());
}
function Cn(t) {
	if (!t.getTargetRanges) return null;
	const e = t.getTargetRanges();
	return 0 === e.length ? null : e[0];
}
function Sn(e) {
	const n = e.inputType, r = Cn(e), i = _i(), o = $r();
	if ("deleteContentBackward" === n) {
		if (null === o) {
			const t = Vr();
			if (!wr(t)) return !0;
			Bo(t.clone());
		}
		if (wr(o)) {
			const n = o.anchor.key === o.focus.key;
			if (s = e.timeStamp, "MediaLast" === en && s < tn + 30 && i.isComposing() && n) {
				if (Mo(null), tn = 0, setTimeout(() => {
					Ei(i, () => {
						Mo(null);
					});
				}, 30), wr(o)) {
					const e = o.anchor.getNode();
					e.markDirty(), yr(e) || t$1(142), xn(o, e);
				}
			} else {
				Mo(null), e.preventDefault();
				const t = o.anchor.getNode(), r = t.getTextContent(), s = t.canInsertTextAfter(), l = 0 === o.anchor.offset && o.focus.offset === r.length;
				let c = f$3 && n && !l && s;
				if (c && o.isCollapsed() && (c = !Li(ls(o.anchor, !0))), !c) {
					as(i, ue$1, !0);
					const t = $r();
					f$3 && wr(t) && t.isCollapsed() && (hn = t, setTimeout(() => hn = null));
				}
			}
			return !0;
		}
	}
	var s;
	if (!wr(o)) return !0;
	const l = e.data;
	null !== rn && Vo(!1, i, rn), o.dirty && null === rn || !o.isCollapsed() || Ki(o.anchor.getNode()) || null === r || o.applyDOMRange(r), rn = null;
	const a = o.anchor, u = o.focus, d = a.getNode(), h = u.getNode();
	if ("insertText" === n || "insertTranspose" === n) {
		if ("\n" === l) e.preventDefault(), as(i, fe$1, !1);
		else if (l === P$2) e.preventDefault(), as(i, de$1, void 0);
		else if (null == l && e.dataTransfer) {
			const t = e.dataTransfer.getData("text/plain");
			e.preventDefault(), o.insertRawText(t);
		} else null != l && _n(o, r, l, e.timeStamp, !0) ? (e.preventDefault(), as(i, he$1, l)) : rn = l;
		return nn = e.timeStamp, !0;
	}
	switch (e.preventDefault(), n) {
		case "insertFromYank":
		case "insertFromDrop":
		case "insertReplacementText":
			as(i, he$1, e);
			break;
		case "insertFromComposition":
			Mo(null), as(i, he$1, e);
			break;
		case "insertLineBreak":
			Mo(null), as(i, fe$1, !1);
			break;
		case "insertParagraph":
			Mo(null), an && !c$3 ? (an = !1, as(i, fe$1, !1)) : as(i, de$1, void 0);
			break;
		case "insertFromPaste":
		case "insertFromPasteAsQuotation":
			as(i, ge$1, e);
			break;
		case "deleteByComposition":
			(function(t, e) {
				return t !== e || Pi(t) || Pi(e) || !Co(t) || !Co(e);
			})(d, h) && as(i, _e, e);
			break;
		case "deleteByDrag":
		case "deleteByCut":
			as(i, _e, e);
			break;
		case "deleteContent":
			as(i, ue$1, !1);
			break;
		case "deleteWordBackward":
			as(i, pe$1, !0);
			break;
		case "deleteWordForward":
			as(i, pe$1, !1);
			break;
		case "deleteHardLineBackward":
		case "deleteSoftLineBackward":
			as(i, ye$1, !0);
			break;
		case "deleteContentForward":
		case "deleteHardLineForward":
		case "deleteSoftLineForward":
			as(i, ye$1, !1);
			break;
		case "formatStrikeThrough":
			as(i, me$1, "strikethrough");
			break;
		case "formatBold":
			as(i, me$1, "bold");
			break;
		case "formatItalic":
			as(i, me$1, "italic");
			break;
		case "formatUnderline":
			as(i, me$1, "underline");
			break;
		case "historyUndo":
			as(i, xe$1, void 0);
			break;
		case "historyRedo": as(i, Ce, void 0);
	}
	return !0;
}
function vn(t) {
	if (Ps(t.target) && ho(t.target)) return !0;
	const e = _i(), n = $r(), r = t.data, i = Cn(t);
	if (null != r && wr(n) && _n(n, i, r, t.timeStamp, !1)) {
		un && (Nn(e, r), un = !1);
		const i = n.anchor.getNode(), l = Es(ms(e));
		if (null === l) return !0;
		const c = n.isBackward(), a = c ? n.anchor.offset : n.focus.offset, u = c ? n.focus.offset : n.anchor.offset;
		s$2 && !n.isCollapsed() && yr(i) && null !== l.anchorNode && i.getTextContent().slice(0, a) + r + i.getTextContent().slice(a + u) === $o(l.anchorNode) || as(e, he$1, r);
		const d = r.length;
		o$1 && d > 1 && "insertCompositionText" === t.inputType && !e.isComposing() && (n.anchor.offset -= d), f$3 && e.isComposing() && (tn = 0, Mo(null));
	} else Vo(!1, e, null !== r ? r : void 0), un && (Nn(e, r || void 0), un = !1);
	return function() {
		di();
		et$2(_i());
	}(), !0;
}
function kn(t) {
	const e = _i(), n = $r();
	if (wr(n) && !e.isComposing()) {
		const r = n.anchor, i = n.anchor.getNode();
		Mo(r.key), gs(qn), (t.timeStamp < tn + 30 || "element" === r.type || !n.isCollapsed() || i.getFormat() !== n.format || yr(i) && i.getStyle() !== n.style) && as(e, he$1, D$4);
	}
	return !0;
}
function Tn(t) {
	return Nn(_i(), t.data), gs(Hn), !0;
}
function Nn(t, e) {
	const n = t._compositionKey;
	if (Mo(null), null !== n && null != e) {
		if ("" === e) {
			const e = Po(n), r = To(t.getElementByKey(n));
			if (null !== r && null !== r.nodeValue && yr(e)) {
				const n = Es(ms(t));
				let i = null, o = null;
				null !== n && n.anchorNode === r && (i = n.anchorOffset, o = n.focusOffset), Yo(e, r.nodeValue, i, o, !0);
			}
			return;
		}
		if ("\n" === e[e.length - 1]) {
			const e = $r();
			if (wr(e) || Or(e)) {
				if (wr(e)) {
					const t = e.focus;
					e.anchor.set(t.key, t.offset, t.type);
				}
				as(t, Ee$1, null);
				return;
			}
		}
	}
	Vo(!0, t, e);
}
function bn(t) {
	const e = _i();
	if (null == t.key) return !0;
	if (fn) {
		if (ts(t)) return Ei(e, () => {
			Nn(e, dn);
		}), fn = !1, dn = "", !0;
		fn = !1, dn = "";
	}
	if (function(t) {
		return Xo(t, "ArrowRight", { shiftKey: "any" });
	}(t)) as(e, ve$1, t);
	else if (function(t) {
		return Xo(t, "ArrowRight", Qo);
	}(t)) as(e, ke, t);
	else if (function(t) {
		return Xo(t, "ArrowLeft", { shiftKey: "any" });
	}(t)) as(e, Te, t);
	else if (function(t) {
		return Xo(t, "ArrowLeft", Qo);
	}(t)) as(e, Ne, t);
	else if (function(t) {
		return Xo(t, "ArrowUp", {
			altKey: "any",
			shiftKey: "any"
		});
	}(t)) as(e, be, t);
	else if (function(t) {
		return Xo(t, "ArrowDown", {
			altKey: "any",
			shiftKey: "any"
		});
	}(t)) as(e, we, t);
	else if (function(t) {
		return Xo(t, "Enter", {
			altKey: "any",
			ctrlKey: "any",
			metaKey: "any",
			shiftKey: !0
		});
	}(t)) an = !0, as(e, Ee$1, t);
	else if (function(t) {
		return " " === t.key;
	}(t)) as(e, Oe, t);
	else if (function(t) {
		return i && Xo(t, "o", { ctrlKey: !0 });
	}(t)) t.preventDefault(), an = !0, as(e, fe$1, !0);
	else if (function(t) {
		return Xo(t, "Enter", {
			altKey: "any",
			ctrlKey: "any",
			metaKey: "any"
		});
	}(t)) an = !1, as(e, Ee$1, t);
	else if (function(t) {
		return Xo(t, "Backspace", { shiftKey: "any" }) || i && Xo(t, "h", { ctrlKey: !0 });
	}(t)) ts(t) ? as(e, Me, t) : (t.preventDefault(), as(e, ue$1, !0));
	else if (function(t) {
		return "Escape" === t.key;
	}(t)) as(e, Ae, t);
	else if (function(t) {
		return Xo(t, "Delete", {}) || i && Xo(t, "d", { ctrlKey: !0 });
	}(t)) !function(t) {
		return "Delete" === t.key;
	}(t) ? (t.preventDefault(), as(e, ue$1, !1)) : as(e, Pe, t);
	else if (function(t) {
		return Xo(t, "Backspace", Zo);
	}(t)) t.preventDefault(), as(e, pe$1, !0);
	else if (function(t) {
		return Xo(t, "Delete", Zo);
	}(t)) t.preventDefault(), as(e, pe$1, !1);
	else if (function(t) {
		return i && Xo(t, "Backspace", { metaKey: !0 });
	}(t)) t.preventDefault(), as(e, ye$1, !0);
	else if (function(t) {
		return i && (Xo(t, "Delete", { metaKey: !0 }) || Xo(t, "k", { ctrlKey: !0 }));
	}(t)) t.preventDefault(), as(e, ye$1, !1);
	else if (function(t) {
		return Xo(t, "b", Qo);
	}(t)) t.preventDefault(), as(e, me$1, "bold");
	else if (function(t) {
		return Xo(t, "u", Qo);
	}(t)) t.preventDefault(), as(e, me$1, "underline");
	else if (function(t) {
		return Xo(t, "i", Qo);
	}(t)) t.preventDefault(), as(e, me$1, "italic");
	else if (function(t) {
		return Xo(t, "Tab", { shiftKey: "any" });
	}(t)) as(e, De, t);
	else if (function(t) {
		return Xo(t, "z", Qo);
	}(t)) t.preventDefault(), as(e, xe$1, void 0);
	else if (function(t) {
		if (i) return Xo(t, "z", {
			metaKey: !0,
			shiftKey: !0
		});
		return Xo(t, "y", { ctrlKey: !0 }) || Xo(t, "z", {
			ctrlKey: !0,
			shiftKey: !0
		});
	}(t)) t.preventDefault(), as(e, Ce, void 0);
	else {
		const n = e._editorState._selection;
		null === n || wr(n) ? es(t) && (t.preventDefault(), as(e, Ue, t)) : !function(t) {
			return Xo(t, "c", Qo);
		}(t) ? !function(t) {
			return Xo(t, "x", Qo);
		}(t) ? es(t) && (t.preventDefault(), as(e, Ue, t)) : (t.preventDefault(), as(e, je, t)) : (t.preventDefault(), as(e, Je, t));
	}
	return function(t) {
		return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
	}(t) && e.dispatchCommand(Xe, t), !0;
}
function wn(t) {
	let e = t.__lexicalEventHandles;
	return void 0 === e && (e = [], t.__lexicalEventHandles = e), e;
}
var En = /* @__PURE__ */ new Map();
function On(t) {
	const e = Os(t.target);
	if (null === e) return;
	const n = yo(e.anchorNode);
	if (null === n) return;
	cn && (cn = !1, Ei(n, () => {
		const r = Vr(), i = e.anchorNode;
		if (Ps(i) || vo(i)) Bo(Ur(r, e, n, t));
	}));
	const r = jo(n), i = r[r.length - 1], o = i._key, s = En.get(o), l = s || i;
	l !== n && yn(e, l, !1), yn(e, n, !0), n !== i ? En.set(o, n) : s && En.delete(o);
}
function Mn(t) {
	t._lexicalHandled = !0;
}
function An(t) {
	return !0 === t._lexicalHandled;
}
var Pn = () => {};
function Dn(e) {
	const n = on.get(e);
	if (void 0 === n) return void Pn();
	const r = sn.get(n);
	if (void 0 === r) return void Pn();
	const i = r - 1;
	i >= 0 || t$1(164), on.delete(e), sn.set(n, i), 0 === i && n.removeEventListener("selectionchange", On);
	const o = mo(e);
	po(o) ? (function(t) {
		if (null !== t._parentEditor) {
			const e = jo(t), n = e[e.length - 1]._key;
			En.get(n) === t && En.delete(n);
		} else En.delete(t._key);
	}(o), e.__lexicalEditor = null) : o && t$1(198);
	const s = wn(e);
	for (let t = 0; t < s.length; t++) s[t]();
	e.__lexicalEventHandles = [];
}
function Fn(t, e, n) {
	di();
	const r = t.__key, i = t.getParent();
	if (null === i) return;
	const o = function(t) {
		const e = $r();
		if (!wr(e) || !Pi(t)) return e;
		const { anchor: n, focus: r } = e, i = n.getNode(), o = r.getNode();
		ps(i, t) && n.set(t.__key, 0, "element");
		ps(o, t) && r.set(t.__key, 0, "element");
		return e;
	}(t);
	let s = !1;
	if (wr(o) && e) {
		const e = o.anchor, n = o.focus;
		e.key === r && (Hr(e, t, i, t.getPreviousSibling(), t.getNextSibling()), s = !0), n.key === r && (Hr(n, t, i, t.getPreviousSibling(), t.getNextSibling()), s = !0);
	} else Or(o) && e && t.isSelected() && t.selectPrevious();
	if (wr(o) && e && !s) {
		const e = t.getIndexWithinParent();
		Eo(t), Yr(o, i, e, -1);
	} else Eo(t);
	n || Ss(i) || i.canBeEmpty() || !i.isEmpty() || Fn(i, e), e && o && Ki(i) && i.isEmpty() && i.selectEnd();
}
function Ln(t) {
	return t;
}
var In = Symbol.for("ephemeral");
function Kn(t) {
	return t[In] || !1;
}
var zn = class {
	__type;
	__key;
	__parent;
	__prev;
	__next;
	__state;
	static getType() {
		const { ownNodeType: e } = qs(this);
		return void 0 === e && t$1(64, this.name), e;
	}
	static clone(e) {
		t$1(65, this.name);
	}
	$config() {
		return {};
	}
	config(t, e) {
		const n = e.extends || Object.getPrototypeOf(this.constructor);
		return Object.assign(e, {
			extends: n,
			type: t
		}), { [t]: e };
	}
	afterCloneFrom(t) {
		this.__key === t.__key ? (this.__parent = t.__parent, this.__next = t.__next, this.__prev = t.__prev, this.__state = t.__state) : t.__state && (this.__state = t.__state.getWritable(this));
	}
	resetOnCopyNodeFrom(t) {
		this.__state && (this.__state = this.__state.getWritable(this).resetOnCopyNode());
	}
	static importDOM;
	constructor(t) {
		this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", {
			configurable: !0,
			enumerable: !1,
			value: void 0,
			writable: !0
		}), wo(this, t);
	}
	getType() {
		return this.__type;
	}
	isInline() {
		t$1(137, this.constructor.name);
	}
	isAttached() {
		let t = this.__key;
		for (; null !== t;) {
			if ("root" === t) return !0;
			const e = Po(t);
			if (null === e) break;
			t = e.__parent;
		}
		return !1;
	}
	isSelected(t) {
		const e = t || $r();
		if (null == e) return !1;
		const n = e.getNodes().some((t) => t.__key === this.__key);
		if (yr(this)) return n;
		if (wr(e) && "element" === e.anchor.type && "element" === e.focus.type) {
			if (e.isCollapsed()) return !1;
			const t = this.getParent();
			if (Li(this) && this.isInline() && t) {
				const n = e.isBackward() ? e.focus : e.anchor;
				if (t.is(n.getNode()) && n.offset === t.getChildrenSize() && this.is(t.getLastChild())) return !1;
			}
		}
		return n;
	}
	getKey() {
		return this.__key;
	}
	getIndexWithinParent() {
		const t = this.getParent();
		if (null === t) return -1;
		let e = t.getFirstChild(), n = 0;
		for (; null !== e;) {
			if (this.is(e)) return n;
			n++, e = e.getNextSibling();
		}
		return -1;
	}
	getParent() {
		const t = this.getLatest().__parent;
		return null === t ? null : Po(t);
	}
	getParentOrThrow() {
		const e = this.getParent();
		return null === e && t$1(66, this.__key), e;
	}
	getTopLevelElement() {
		let e = this;
		for (; null !== e;) {
			const n = e.getParent();
			if (Ss(n)) return Pi(e) || e === this && Li(e) || t$1(194), e;
			e = n;
		}
		return null;
	}
	getTopLevelElementOrThrow() {
		const e = this.getTopLevelElement();
		return null === e && t$1(67, this.__key), e;
	}
	getParents() {
		const t = [];
		let e = this.getParent();
		for (; null !== e;) t.push(e), e = e.getParent();
		return t;
	}
	getParentKeys() {
		const t = [];
		let e = this.getParent();
		for (; null !== e;) t.push(e.__key), e = e.getParent();
		return t;
	}
	getPreviousSibling() {
		const t = this.getLatest().__prev;
		return null === t ? null : Po(t);
	}
	getPreviousSiblings() {
		const t = [], e = this.getParent();
		if (null === e) return t;
		let n = e.getFirstChild();
		for (; null !== n && !n.is(this);) t.push(n), n = n.getNextSibling();
		return t;
	}
	getNextSibling() {
		const t = this.getLatest().__next;
		return null === t ? null : Po(t);
	}
	getNextSiblings() {
		const t = [];
		let e = this.getNextSibling();
		for (; null !== e;) t.push(e), e = e.getNextSibling();
		return t;
	}
	getCommonAncestor(t) {
		const e = Pi(this) ? this : this.getParent(), n = Pi(t) ? t : t.getParent(), r = e && n ? Ml(e, n) : null;
		return r ? r.commonAncestor : null;
	}
	is(t) {
		return null != t && this.__key === t.__key;
	}
	isBefore(e) {
		const n = Ml(this, e);
		return null !== n && ("descendant" === n.type || ("branch" === n.type ? -1 === wl(n) : ("same" !== n.type && "ancestor" !== n.type && t$1(279), !1)));
	}
	isParentOf(t) {
		const e = Ml(this, t);
		return null !== e && "ancestor" === e.type;
	}
	getNodesBetween(e) {
		const n = this.isBefore(e), r = [], i = /* @__PURE__ */ new Set();
		let o = this;
		for (; null !== o;) {
			const s = o.__key;
			if (i.has(s) || (i.add(s), r.push(o)), o === e) break;
			const l = Pi(o) ? n ? o.getFirstChild() : o.getLastChild() : null;
			if (null !== l) {
				o = l;
				continue;
			}
			const c = n ? o.getNextSibling() : o.getPreviousSibling();
			if (null !== c) {
				o = c;
				continue;
			}
			const a = o.getParentOrThrow();
			if (i.has(a.__key) || r.push(a), a === e) break;
			let u = null, f = a;
			do {
				if (null === f && t$1(68), u = n ? f.getNextSibling() : f.getPreviousSibling(), f = f.getParent(), null === f) break;
				null !== u || i.has(f.__key) || r.push(f);
			} while (null === u);
			o = u;
		}
		return n || r.reverse(), r;
	}
	isDirty() {
		const t = _i()._dirtyLeaves;
		return null !== t && t.has(this.__key);
	}
	getLatest() {
		if (Kn(this)) return this;
		const e = Po(this.__key);
		return null === e && t$1(113), e;
	}
	getWritable() {
		if (Kn(this)) return this;
		di();
		const t = gi(), e = _i(), n = t._nodeMap, r = this.__key, i = this.getLatest(), o = e._cloneNotNeeded, s = $r();
		if (null !== s && s.setCachedNodes(null), o.has(r)) return Oo(i), i;
		const l = Js(i);
		return o.add(r), Oo(l), n.set(r, l), l;
	}
	getTextContent() {
		return "";
	}
	getTextContentSize() {
		return this.getTextContent().length;
	}
	createDOM(e, n) {
		t$1(70);
	}
	updateDOM(e, n, r) {
		t$1(71);
	}
	exportDOM(t) {
		return { element: this.createDOM(t._config, t) };
	}
	exportJSON() {
		const t = this.__state ? this.__state.toJSON() : void 0;
		return {
			type: this.__type,
			version: 1,
			...t
		};
	}
	static importJSON(e) {
		t$1(18, this.name);
	}
	updateFromJSON(t) {
		return function(t, e) {
			const n = t.getWritable(), r = e.$;
			let i = r;
			for (const t of ft$1(n).flatKeys) t in e && (void 0 !== i && i !== r || (i = { ...r }), i[t] = e[t]);
			return (n.__state || i) && ut$2(t).updateFromJSON(i), n;
		}(this, t);
	}
	static transform() {
		return null;
	}
	remove(t) {
		Fn(this, !0, t);
	}
	replace(e, n) {
		di();
		let r = $r();
		null !== r && (r = r.clone()), Ts(this, e);
		const i = this.getLatest(), o = this.__key, s = e.__key, l = e.getWritable(), c = this.getParentOrThrow().getWritable(), a = c.__size;
		Eo(l);
		const u = i.getPreviousSibling(), f = i.getNextSibling(), d = i.__prev, h = i.__next, g = i.__parent;
		if (Fn(i, !1, !0), null === u) c.__first = s;
		else u.getWritable().__next = s;
		if (l.__prev = d, null === f) c.__last = s;
		else f.getWritable().__prev = s;
		if (l.__next = h, l.__parent = g, c.__size = a, n && (Pi(this) && Pi(l) || t$1(139), this.getChildren().forEach((t) => {
			l.append(t);
		})), wr(r)) {
			Bo(r);
			const t = r.anchor, e = r.focus;
			t.key === o && Nr(t, l), e.key === o && Nr(e, l);
		}
		return Ao() === o && Mo(s), l;
	}
	insertAfter(t, e = !0) {
		di(), Ts(this, t);
		const n = this.getWritable(), r = t.getWritable(), i = r.getParent(), o = $r();
		let s = !1, l = !1;
		if (null !== i) {
			const e = t.getIndexWithinParent();
			if (Eo(r), wr(o)) {
				const t = i.__key, n = o.anchor, r = o.focus;
				s = "element" === n.type && n.key === t && n.offset === e + 1, l = "element" === r.type && r.key === t && r.offset === e + 1;
			}
		}
		const c = this.getNextSibling(), a = this.getParentOrThrow().getWritable(), u = r.__key, f = n.__next;
		if (null === c) a.__last = u;
		else c.getWritable().__prev = u;
		if (a.__size++, n.__next = u, r.__next = f, r.__prev = n.__key, r.__parent = n.__parent, e && wr(o)) {
			const t = this.getIndexWithinParent();
			Yr(o, a, t + 1);
			const e = a.__key;
			s && o.anchor.set(e, t + 2, "element"), l && o.focus.set(e, t + 2, "element");
		}
		return t;
	}
	insertBefore(t, e = !0) {
		di(), Ts(this, t);
		const n = this.getWritable(), r = t.getWritable(), i = r.__key;
		Eo(r);
		const o = this.getPreviousSibling(), s = this.getParentOrThrow().getWritable(), l = n.__prev, c = this.getIndexWithinParent();
		if (null === o) s.__first = i;
		else o.getWritable().__next = i;
		s.__size++, n.__prev = i, r.__prev = l, r.__next = n.__key, r.__parent = n.__parent;
		const a = $r();
		if (e && wr(a)) Yr(a, this.getParentOrThrow(), c);
		return t;
	}
	isParentRequired() {
		return !1;
	}
	createParentElementNode() {
		return Vi();
	}
	selectStart() {
		return this.selectPrevious();
	}
	selectEnd() {
		return this.selectNext(0, 0);
	}
	selectPrevious(t, e) {
		di();
		const n = this.getPreviousSibling(), r = this.getParentOrThrow();
		if (null === n) return r.select(0, 0);
		if (Pi(n)) return n.select();
		if (!yr(n)) {
			const t = n.getIndexWithinParent() + 1;
			return r.select(t, t);
		}
		return n.select(t, e);
	}
	selectNext(t, e) {
		di();
		const n = this.getNextSibling(), r = this.getParentOrThrow();
		if (null === n) return r.select();
		if (Pi(n)) return n.select(0, 0);
		if (!yr(n)) {
			const t = n.getIndexWithinParent();
			return r.select(t, t);
		}
		return n.select(t, e);
	}
	markDirty() {
		this.getWritable();
	}
	reconcileObservedMutation(t, e) {
		this.markDirty();
	}
}, Bn = "history-push", Wn = "history-merge", Vn = "skip-dom-selection", Yn = "skip-selection-focus", qn = "composition-start", Hn = "composition-end";
var Gn = class Gn extends zn {
	static getType() {
		return "linebreak";
	}
	static clone(t) {
		return new Gn(t.__key);
	}
	constructor(t) {
		super(t);
	}
	getTextContent() {
		return "\n";
	}
	createDOM() {
		return document.createElement("br");
	}
	updateDOM() {
		return !1;
	}
	isInline() {
		return !0;
	}
	static importDOM() {
		return { br: (t) => function(t) {
			const e = t.parentElement;
			if (null !== e && Is(e)) {
				const n = e.firstChild;
				if (n === t || n.nextSibling === t && tr(n)) {
					const n = e.lastChild;
					if (n === t || n.previousSibling === t && tr(n)) return !0;
				}
			}
			return !1;
		}(t) || function(t) {
			const e = t.parentElement;
			if (null !== e && Is(e)) {
				const n = e.firstChild;
				if (n === t || n.nextSibling === t && tr(n)) return !1;
				const r = e.lastChild;
				if (r === t || r.previousSibling === t && tr(r)) return !0;
			}
			return !1;
		}(t) ? null : {
			conversion: Xn,
			priority: 0
		} };
	}
	static importJSON(t) {
		return Qn().updateFromJSON(t);
	}
};
function Xn(t) {
	return { node: Qn() };
}
function Qn() {
	return ks(new Gn());
}
function Zn(t) {
	return t instanceof Gn;
}
function tr(t) {
	return vo(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
}
function er(t, e) {
	return 16 & e ? "code" : e & 128 ? "mark" : 32 & e ? "sub" : 64 & e ? "sup" : null;
}
function nr(t, e) {
	return 1 & e ? "strong" : 2 & e ? "em" : "span";
}
function rr(t, e, n, r, i) {
	const o = r.classList;
	let s = rs(i, "base");
	void 0 !== s && o.add(...s), s = rs(i, "underlineStrikethrough");
	let l = !1;
	const c = 8 & e && 4 & e;
	void 0 !== s && (8 & n && 4 & n ? (l = !0, c || o.add(...s)) : c && o.remove(...s));
	for (const t in z$3) {
		const r = z$3[t];
		if (s = rs(i, t), void 0 !== s) if (n & r) {
			if (l && ("underline" === t || "strikethrough" === t)) {
				e & r && o.remove(...s);
				continue;
			}
			(0 === (e & r) || c && "underline" === t || "strikethrough" === t) && o.add(...s);
		} else e & r && o.remove(...s);
	}
}
function ir(t, e, n) {
	const r = e.firstChild, i = n.isComposing(), s = t + (i ? A$3 : "");
	if (null == r) e.textContent = s;
	else {
		const t = r.nodeValue;
		if (t !== s) if (i || o$1) {
			const [e, n, i] = function(t, e) {
				const n = t.length, r = e.length;
				let i = 0, o = 0;
				for (; i < n && i < r && t[i] === e[i];) i++;
				for (; o + i < n && o + i < r && t[n - o - 1] === e[r - o - 1];) o++;
				return [
					i,
					n - i - o,
					e.slice(i, r - o)
				];
			}(t, s);
			0 !== n && r.deleteData(e, n), r.insertData(e, i);
		} else r.nodeValue = s;
	}
}
function or(t, e, n, r, i, o) {
	ir(i, t, e);
	const s = o.theme.text;
	void 0 !== s && rr(0, 0, r, t, s);
}
function sr(t, e) {
	const n = document.createElement(e);
	return n.appendChild(t), n;
}
var lr = class lr extends zn {
	__text;
	__format;
	__style;
	__mode;
	__detail;
	static getType() {
		return "text";
	}
	static clone(t) {
		return new lr(t.__text, t.__key);
	}
	afterCloneFrom(t) {
		super.afterCloneFrom(t), this.__text = t.__text, this.__format = t.__format, this.__style = t.__style, this.__mode = t.__mode, this.__detail = t.__detail;
	}
	constructor(t = "", e) {
		super(e), this.__text = t, this.__format = 0, this.__style = "", this.__mode = 0, this.__detail = 0;
	}
	getFormat() {
		return this.getLatest().__format;
	}
	getDetail() {
		return this.getLatest().__detail;
	}
	getMode() {
		return j$2[this.getLatest().__mode];
	}
	getStyle() {
		return this.getLatest().__style;
	}
	isToken() {
		return 1 === this.getLatest().__mode;
	}
	isComposing() {
		return this.__key === Ao();
	}
	isSegmented() {
		return 2 === this.getLatest().__mode;
	}
	isDirectionless() {
		return !!(1 & this.getLatest().__detail);
	}
	isUnmergeable() {
		return !!(2 & this.getLatest().__detail);
	}
	hasFormat(t) {
		const e = z$3[t];
		return 0 !== (this.getFormat() & e);
	}
	isSimpleText() {
		return "text" === this.__type && 0 === this.__mode;
	}
	getTextContent() {
		return this.getLatest().__text;
	}
	getFormatFlags(t, e) {
		return No(this.getLatest().__format, t, e);
	}
	canHaveFormat() {
		return !0;
	}
	isInline() {
		return !0;
	}
	createDOM(t, e) {
		const n = this.__format, r = er(0, n), i = nr(0, n), o = null === r ? i : r, s = document.createElement(o);
		let l = s;
		this.hasFormat("code") && s.setAttribute("spellcheck", "false"), null !== r && (l = document.createElement(i), s.appendChild(l));
		or(l, this, 0, n, this.__text, t);
		const c = this.__style;
		return "" !== c && (s.style.cssText = c), s;
	}
	updateDOM(e, n, r) {
		const i = this.__text, o = e.__format, s = this.__format, l = er(0, o), c = er(0, s), a = nr(0, o), u = nr(0, s);
		if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
		if (l === c && a !== u) {
			const e = n.firstChild;
			e ?? t$1(48);
			const o = document.createElement(u);
			return or(o, this, 0, s, i, r), n.replaceChild(o, e), !1;
		}
		let f = n;
		null !== c && null !== l && (f = n.firstChild, f ?? t$1(49)), ir(i, f, this);
		const d = r.theme.text;
		void 0 !== d && o !== s && rr(0, o, s, f, d);
		const h = e.__style, g = this.__style;
		return h !== g && (n.style.cssText = g), !1;
	}
	static importDOM() {
		return {
			"#text": () => ({
				conversion: dr,
				priority: 0
			}),
			b: () => ({
				conversion: ar,
				priority: 0
			}),
			code: () => ({
				conversion: _r,
				priority: 0
			}),
			em: () => ({
				conversion: _r,
				priority: 0
			}),
			i: () => ({
				conversion: _r,
				priority: 0
			}),
			mark: () => ({
				conversion: _r,
				priority: 0
			}),
			s: () => ({
				conversion: _r,
				priority: 0
			}),
			span: () => ({
				conversion: cr,
				priority: 0
			}),
			strong: () => ({
				conversion: _r,
				priority: 0
			}),
			sub: () => ({
				conversion: _r,
				priority: 0
			}),
			sup: () => ({
				conversion: _r,
				priority: 0
			}),
			u: () => ({
				conversion: _r,
				priority: 0
			})
		};
	}
	static importJSON(t) {
		return pr().updateFromJSON(t);
	}
	updateFromJSON(t) {
		return super.updateFromJSON(t).setTextContent(t.text).setFormat(t.format).setDetail(t.detail).setMode(t.mode).setStyle(t.style);
	}
	exportDOM(e) {
		let { element: n } = super.exportDOM(e);
		return Ps(n) || t$1(132), n.style.whiteSpace = "pre-wrap", this.hasFormat("lowercase") ? n.style.textTransform = "lowercase" : this.hasFormat("uppercase") ? n.style.textTransform = "uppercase" : this.hasFormat("capitalize") && (n.style.textTransform = "capitalize"), this.hasFormat("bold") && (n = sr(n, "b")), this.hasFormat("italic") && (n = sr(n, "i")), this.hasFormat("strikethrough") && (n = sr(n, "s")), this.hasFormat("underline") && (n = sr(n, "u")), { element: n };
	}
	exportJSON() {
		return {
			detail: this.getDetail(),
			format: this.getFormat(),
			mode: this.getMode(),
			style: this.getStyle(),
			text: this.getTextContent(),
			...super.exportJSON()
		};
	}
	selectionTransform(t, e) {}
	setFormat(t) {
		const e = this.getWritable();
		return e.__format = "string" == typeof t ? z$3[t] : t, e;
	}
	setDetail(t) {
		const e = this.getWritable();
		return e.__detail = "string" == typeof t ? R$4[t] : t, e;
	}
	setStyle(t) {
		const e = this.getWritable();
		return e.__style = t, e;
	}
	toggleFormat(t) {
		const e = No(this.getFormat(), t, null);
		return this.setFormat(e);
	}
	toggleDirectionless() {
		const t = this.getWritable();
		return t.__detail ^= 1, t;
	}
	toggleUnmergeable() {
		const t = this.getWritable();
		return t.__detail ^= 2, t;
	}
	setMode(t) {
		const e = J$2[t];
		if (this.__mode === e) return this;
		const n = this.getWritable();
		return n.__mode = e, n;
	}
	setTextContent(t) {
		if (this.__text === t) return this;
		const e = this.getWritable();
		return e.__text = t, e;
	}
	select(t, e) {
		di();
		let n = t, r = e;
		const i = $r(), o = this.getTextContent(), s = this.__key;
		if ("string" == typeof o) {
			const t = o.length;
			void 0 === n && (n = t), void 0 === r && (r = t);
		} else n = 0, r = 0;
		if (!wr(i)) return Br(s, n, s, r, "text", "text");
		{
			const t = Ao();
			t !== i.anchor.key && t !== i.focus.key || Mo(s), i.setTextNodeRange(this, n, this, r);
		}
		return i;
	}
	selectStart() {
		return this.select(0, 0);
	}
	selectEnd() {
		const t = this.getTextContentSize();
		return this.select(t, t);
	}
	spliceText(t, e, n, r) {
		const i = this.getWritable(), o = i.__text, s = n.length;
		let l = t;
		l < 0 && (l = s + l, l < 0 && (l = 0));
		const c = $r();
		if (r && wr(c)) {
			const e = t + s;
			c.setTextNodeRange(i, e, i, e);
		}
		return i.__text = o.slice(0, l) + n + o.slice(l + e), i;
	}
	canInsertTextBefore() {
		return !0;
	}
	canInsertTextAfter() {
		return !0;
	}
	splitText(...t) {
		di();
		const e = this.getLatest(), n = e.getTextContent();
		if ("" === n) return [];
		const r = e.__key, i = Ao(), o = n.length;
		t.sort((t, e) => t - e), t.push(o);
		const s = [], l = t.length;
		for (let e = 0, r = 0; e < o && r <= l; r++) {
			const i = t[r];
			i > e && (s.push(n.slice(e, i)), e = i);
		}
		const c = s.length;
		if (1 === c) return [e];
		const a = s[0], u = e.getParent();
		let f;
		const d = e.getFormat(), h = e.getStyle(), g = e.__detail;
		let _ = !1, p = null, y = null;
		const m = $r();
		if (wr(m)) {
			const [t, e] = m.isBackward() ? [m.focus, m.anchor] : [m.anchor, m.focus];
			"text" === t.type && t.key === r && (p = t), "text" === e.type && e.key === r && (y = e);
		}
		e.isSegmented() ? (f = pr(a), f.__format = d, f.__style = h, f.__detail = g, f.__state = pt$2(e, f), _ = !0) : f = e.setTextContent(a);
		const x = [f];
		for (let t = 1; t < c; t++) {
			const n = pr(s[t]);
			n.__format = d, n.__style = h, n.__detail = g, n.__state = pt$2(e, n);
			const o = n.__key;
			i === r && Mo(o), x.push(n);
		}
		const C = p ? p.offset : null, S = y ? y.offset : null;
		let v = 0;
		for (const t of x) {
			if (!p && !y) break;
			const e = v + t.getTextContentSize();
			if (null !== p && null !== C && C <= e && C >= v && (p.set(t.getKey(), C - v, "text"), C < e && (p = null)), null !== y && null !== S && S <= e && S >= v) {
				y.set(t.getKey(), S - v, "text");
				break;
			}
			v = e;
		}
		if (null !== u) {
			(function(t) {
				const e = t.getPreviousSibling(), n = t.getNextSibling();
				null !== e && Oo(e);
				null !== n && Oo(n);
			})(this);
			const t = u.getWritable(), e = this.getIndexWithinParent();
			_ ? (t.splice(e, 0, x), this.remove()) : t.splice(e, 1, x), wr(m) && Yr(m, u, e, c - 1);
		}
		return x;
	}
	mergeWithSibling(e) {
		const n = e === this.getPreviousSibling();
		n || e === this.getNextSibling() || t$1(50);
		const r = this.__key, i = e.__key, o = this.__text, s = o.length;
		Ao() === i && Mo(r);
		const l = $r();
		if (wr(l)) {
			const t = l.anchor, o = l.focus;
			null !== t && t.key === i && Gr(t, n, r, e, s), null !== o && o.key === i && Gr(o, n, r, e, s);
		}
		const c = e.__text, a = n ? c + o : o + c;
		this.setTextContent(a);
		const u = this.getWritable();
		return e.remove(), u;
	}
	isTextEntity() {
		return !1;
	}
};
function cr(t) {
	return {
		forChild: mr(t.style),
		node: null
	};
}
function ar(t) {
	const e = t, n = "normal" === e.style.fontWeight;
	return {
		forChild: mr(e.style, n ? void 0 : "bold"),
		node: null
	};
}
var ur = /* @__PURE__ */ new WeakMap();
function fr(t) {
	if (!Ps(t)) return !1;
	if ("PRE" === t.nodeName) return !0;
	const e = t.style.whiteSpace;
	return "string" == typeof e && e.startsWith("pre");
}
function dr(e) {
	const n = e;
	null === e.parentElement && t$1(129);
	let r = n.textContent || "";
	if (null !== function(t) {
		let e, n = t.parentNode;
		const r = [t];
		for (; null !== n && void 0 === (e = ur.get(n)) && !fr(n);) r.push(n), n = n.parentNode;
		const i = void 0 === e ? n : e;
		for (let t = 0; t < r.length; t++) ur.set(r[t], i);
		return i;
	}(n)) {
		const t = r.split(/(\r?\n|\t)/), e = [], n = t.length;
		for (let r = 0; r < n; r++) {
			const n = t[r];
			"\n" === n || "\r\n" === n ? e.push(Qn()) : "	" === n ? e.push(Cr()) : "" !== n && e.push(pr(n));
		}
		return { node: e };
	}
	if (r = r.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), "" === r) return { node: null };
	if (" " === r[0]) {
		let t = n, e = !0;
		for (; null !== t && null !== (t = hr(t, !1));) {
			const n = t.textContent || "";
			if (n.length > 0) {
				/[ \t\n]$/.test(n) && (r = r.slice(1)), e = !1;
				break;
			}
		}
		e && (r = r.slice(1));
	}
	if (" " === r[r.length - 1]) {
		let t = n, e = !0;
		for (; null !== t && null !== (t = hr(t, !0));) if ((t.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
			e = !1;
			break;
		}
		e && (r = r.slice(0, r.length - 1));
	}
	return "" === r ? { node: null } : { node: pr(r) };
}
function hr(t, e) {
	let n = t;
	for (;;) {
		let t;
		for (; null === (t = e ? n.nextSibling : n.previousSibling);) {
			const t = n.parentElement;
			if (null === t) return null;
			n = t;
		}
		if (n = t, Ps(n)) {
			const t = n.style.display;
			if ("" === t && !Ls(n) || "" !== t && !t.startsWith("inline")) return null;
		}
		let r = n;
		for (; null !== (r = e ? n.firstChild : n.lastChild);) n = r;
		if (vo(n)) return n;
		if ("BR" === n.nodeName) return null;
	}
}
var gr = {
	code: "code",
	em: "italic",
	i: "italic",
	mark: "highlight",
	s: "strikethrough",
	strong: "bold",
	sub: "subscript",
	sup: "superscript",
	u: "underline"
};
function _r(t) {
	const e = gr[t.nodeName.toLowerCase()];
	return void 0 === e ? { node: null } : {
		forChild: mr(t.style, e),
		node: null
	};
}
function pr(t = "") {
	return ks(new lr(t));
}
function yr(t) {
	return t instanceof lr;
}
function mr(t, e) {
	const n = t.fontWeight, r = t.textDecoration.split(" "), i = "700" === n || "bold" === n, o = r.includes("line-through"), s = "italic" === t.fontStyle, l = r.includes("underline"), c = t.verticalAlign;
	return (t) => yr(t) ? (i && !t.hasFormat("bold") && t.toggleFormat("bold"), o && !t.hasFormat("strikethrough") && t.toggleFormat("strikethrough"), s && !t.hasFormat("italic") && t.toggleFormat("italic"), l && !t.hasFormat("underline") && t.toggleFormat("underline"), "sub" !== c || t.hasFormat("subscript") || t.toggleFormat("subscript"), "super" !== c || t.hasFormat("superscript") || t.toggleFormat("superscript"), e && !t.hasFormat(e) && t.toggleFormat(e), t) : t;
}
var xr = class xr extends lr {
	static getType() {
		return "tab";
	}
	static clone(t) {
		return new xr(t.__key);
	}
	constructor(t) {
		super("	", t), this.__detail = 2;
	}
	static importDOM() {
		return null;
	}
	createDOM(t) {
		const e = super.createDOM(t), n = rs(t.theme, "tab");
		if (void 0 !== n) e.classList.add(...n);
		return e;
	}
	static importJSON(t) {
		return Cr().updateFromJSON(t);
	}
	setTextContent(t) {
		return "	" !== t && "" !== t && e(126), super.setTextContent("	");
	}
	spliceText(e, n, r, i) {
		return "" === r && 0 === n || "	" === r && 1 === n || t$1(286), this;
	}
	setDetail(e) {
		return 2 !== e && t$1(127), this;
	}
	setMode(e) {
		return "normal" !== e && t$1(128), this;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !1;
	}
};
function Cr() {
	return ks(new xr());
}
function Sr(t) {
	return t instanceof xr;
}
var vr = class {
	key;
	offset;
	type;
	_selection;
	constructor(t, e, n) {
		this._selection = null, this.key = t, this.offset = e, this.type = n;
	}
	is(t) {
		return this.key === t.key && this.offset === t.offset && this.type === t.type;
	}
	isBefore(t) {
		if (this.key === t.key) return this.offset < t.offset;
		return bl(Bl(Al(this, "next")), Bl(Al(t, "next"))) < 0;
	}
	getNode() {
		const e = Po(this.key);
		return null === e && t$1(20), e;
	}
	set(t, e, n, r) {
		const i = this._selection, o = this.key;
		r && this.key === t && this.offset === e && this.type === n || (this.key = t, this.offset = e, this.type = n, fi() || (Ao() === o && Mo(t), null !== i && (i.setCachedNodes(null), i.dirty = !0)));
	}
};
function kr(t, e, n) {
	return new vr(t, e, n);
}
function Tr(t, e) {
	let n = e.__key, r = t.offset, i = "element";
	if (yr(e)) {
		i = "text";
		const t = e.getTextContentSize();
		r > t && (r = t);
	} else if (!Pi(e)) {
		const t = e.getNextSibling();
		if (yr(t)) n = t.__key, r = 0, i = "text";
		else {
			const t = e.getParent();
			t && (n = t.__key, r = e.getIndexWithinParent() + 1);
		}
	}
	t.set(n, r, i);
}
function Nr(t, e) {
	if (Pi(e)) {
		const n = e.getLastDescendant();
		Pi(n) || yr(n) ? Tr(t, n) : Tr(t, e);
	} else Tr(t, e);
}
var br = class br {
	_nodes;
	_cachedNodes;
	dirty;
	constructor(t) {
		this._cachedNodes = null, this._nodes = t, this.dirty = !1;
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(t) {
		this._cachedNodes = t;
	}
	is(t) {
		if (!Or(t)) return !1;
		const e = this._nodes, n = t._nodes;
		return e.size === n.size && Array.from(e).every((t) => n.has(t));
	}
	isCollapsed() {
		return !1;
	}
	isBackward() {
		return !1;
	}
	getStartEndPoints() {
		return null;
	}
	add(t) {
		this.dirty = !0, this._nodes.add(t), this._cachedNodes = null;
	}
	delete(t) {
		this.dirty = !0, this._nodes.delete(t), this._cachedNodes = null;
	}
	clear() {
		this.dirty = !0, this._nodes.clear(), this._cachedNodes = null;
	}
	has(t) {
		return this._nodes.has(t);
	}
	clone() {
		return new br(new Set(this._nodes));
	}
	extract() {
		return this.getNodes();
	}
	insertRawText(t) {}
	insertText() {}
	insertNodes(t) {
		const e = this.getNodes(), n = e.length, r = e[n - 1];
		let i;
		if (yr(r)) i = r.select();
		else {
			const t = r.getIndexWithinParent() + 1;
			i = r.getParentOrThrow().select(t, t);
		}
		i.insertNodes(t);
		for (let t = 0; t < n; t++) e[t].remove();
	}
	getNodes() {
		const t = this._cachedNodes;
		if (null !== t) return t;
		const e = this._nodes, n = [];
		for (const t of e) {
			const e = Po(t);
			null !== e && n.push(e);
		}
		return fi() || (this._cachedNodes = n), n;
	}
	getTextContent() {
		const t = this.getNodes();
		let e = "";
		for (let n = 0; n < t.length; n++) e += t[n].getTextContent();
		return e;
	}
	deleteNodes() {
		const t = this.getNodes();
		if (($r() || Vr()) === this && t[0]) {
			const e = dl(t[0], "next");
			Dl(Tl(e, e));
		}
		for (const e of t) e.remove();
	}
};
function wr(t) {
	return t instanceof Er;
}
var Er = class Er {
	format;
	style;
	anchor;
	focus;
	_cachedNodes;
	dirty;
	constructor(t, e, n, r) {
		this.anchor = t, this.focus = e, t._selection = this, e._selection = this, this._cachedNodes = null, this.format = n, this.style = r, this.dirty = !1;
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(t) {
		this._cachedNodes = t;
	}
	is(t) {
		return !!wr(t) && this.anchor.is(t.anchor) && this.focus.is(t.focus) && this.format === t.format && this.style === t.style;
	}
	isCollapsed() {
		return this.anchor.is(this.focus);
	}
	getNodes() {
		const t = this._cachedNodes;
		if (null !== t) return t;
		const e = function(t) {
			const e = [], [n, r] = t.getTextSlices();
			n && e.push(n.caret.origin);
			const i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			for (const n of t) if (cl(n)) {
				const { origin: t } = n;
				0 === e.length ? i.add(t) : (o.add(t), e.push(t));
			} else {
				const { origin: t } = n;
				Pi(t) && o.has(t) || e.push(t);
			}
			r && e.push(r.caret.origin);
			if (ll(t.focus) && Pi(t.focus.origin) && null === t.focus.getNodeAtCaret()) for (let n = pl(t.focus.origin, "previous"); cl(n) && i.has(n.origin) && !n.origin.isEmpty() && n.origin.is(e[e.length - 1]); n = ml(n)) i.delete(n.origin), e.pop();
			for (; e.length > 1;) {
				const t = e[e.length - 1];
				if (!Pi(t) || o.has(t) || t.isEmpty() || i.has(t)) break;
				e.pop();
			}
			if (0 === e.length && t.isCollapsed()) {
				const n = Bl(t.anchor), r = Bl(t.anchor.getFlipped()), i = (t) => ol(t) ? t.origin : t.getNodeAtCaret(), o = i(n) || i(r) || (t.anchor.getNodeAtCaret() ? n.origin : r.origin);
				e.push(o);
			}
			return e;
		}(jl(Ll(this), "next"));
		return fi() || (this._cachedNodes = e), e;
	}
	setTextNodeRange(t, e, n, r) {
		this.anchor.set(t.__key, e, "text"), this.focus.set(n.__key, r, "text");
	}
	getTextContent() {
		const t = this.getNodes();
		if (0 === t.length) return "";
		const e = t[0], n = t[t.length - 1], r = this.anchor, i = this.focus, o = r.isBefore(i), [s, l] = Ar(this);
		let c = "", a = !0;
		for (let u = 0; u < t.length; u++) {
			const f = t[u];
			if (Pi(f) && !f.isInline()) a || (c += "\n"), a = !f.isEmpty();
			else if (a = !1, yr(f)) {
				let t = f.getTextContent();
				f === e ? f === n ? "element" === r.type && "element" === i.type && i.offset !== r.offset || (t = s < l ? t.slice(s, l) : t.slice(l, s)) : t = o ? t.slice(s) : t.slice(l) : f === n && (t = o ? t.slice(0, l) : t.slice(0, s)), c += t;
			} else !Li(f) && !Zn(f) || f === n && this.isCollapsed() || (c += f.getTextContent());
		}
		return c;
	}
	applyDOMRange(t) {
		const e = _i(), n = e.getEditorState()._selection, r = zr(t.startContainer, t.startOffset, t.endContainer, t.endOffset, e, n);
		if (null === r) return;
		const [i, o] = r;
		this.anchor.set(i.key, i.offset, i.type, !0), this.focus.set(o.key, o.offset, o.type, !0), Ct$3(this);
	}
	clone() {
		const t = this.anchor, e = this.focus;
		return new Er(kr(t.key, t.offset, t.type), kr(e.key, e.offset, e.type), this.format, this.style);
	}
	toggleFormat(t) {
		this.format = No(this.format, t, null), this.dirty = !0;
	}
	setFormat(t) {
		this.format = t, this.dirty = !0;
	}
	setStyle(t) {
		this.style = t, this.dirty = !0;
	}
	hasFormat(t) {
		const e = z$3[t];
		return 0 !== (this.format & e);
	}
	insertRawText(t) {
		const e = t.split(/(\r?\n|\t)/), n = [], r = e.length;
		for (let t = 0; t < r; t++) {
			const r = e[t];
			"\n" === r || "\r\n" === r ? n.push(Qn()) : "	" === r ? n.push(Cr()) : n.push(pr(r));
		}
		this.insertNodes(n);
	}
	insertText(e) {
		const n = this.anchor, r = this.focus, i = this.format, o = this.style;
		let s = n, l = r;
		!this.isCollapsed() && r.isBefore(n) && (s = r, l = n), "element" === s.type && function(t, e, n, r) {
			const i = t.getNode(), o = i.getChildAtIndex(t.offset), s = pr();
			if (s.setFormat(n), s.setStyle(r), Yi(o)) o.splice(0, 0, [s]);
			else {
				const t = Ki(i) ? Vi().append(s) : s;
				null === o ? i.append(t) : o.insertBefore(t);
			}
			t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text");
		}(s, l, i, o), "element" === l.type && Pl(l, Bl(Al(l, "next")));
		const c = s.offset;
		let a = l.offset;
		const u = this.getNodes(), f = u.length;
		let d = u[0];
		yr(d) || t$1(26);
		const h = d.getTextContent().length, g = d.getParentOrThrow();
		let _ = u[f - 1];
		if (1 === f && "element" === l.type && (a = h, l.set(s.key, a, "text")), this.isCollapsed() && c === h && (So(d) || !d.canInsertTextAfter() || !g.canInsertTextAfter() && null === d.getNextSibling())) {
			let t = d.getNextSibling();
			if (yr(t) && t.canInsertTextBefore() && !So(t) || (t = pr(), t.setFormat(i), t.setStyle(o), g.canInsertTextAfter() ? d.insertAfter(t) : g.insertAfter(t)), t.select(0, 0), d = t, "" !== e) return void this.insertText(e);
		} else if (this.isCollapsed() && 0 === c && (So(d) || !d.canInsertTextBefore() || !g.canInsertTextBefore() && null === d.getPreviousSibling())) {
			let t = d.getPreviousSibling();
			if (yr(t) && !So(t) || (t = pr(), t.setFormat(i), g.canInsertTextBefore() ? d.insertBefore(t) : g.insertBefore(t)), t.select(), d = t, "" !== e) return void this.insertText(e);
		} else if (d.isSegmented() && c !== h) {
			const t = pr(d.getTextContent());
			t.setFormat(i), d.replace(t), d = t;
		} else if (!this.isCollapsed() && "" !== e) {
			const t = _.getParent();
			if (!g.canInsertTextBefore() || !g.canInsertTextAfter() || Pi(t) && (!t.canInsertTextBefore() || !t.canInsertTextAfter())) return this.insertText(""), Kr(this.anchor, this.focus), void this.insertText(e);
		}
		if (1 === f) {
			if (Co(d)) {
				const t = pr(e);
				t.select(), d.replace(t);
				return;
			}
			const t = d.getFormat(), n = d.getStyle();
			if (c !== a || t === i && n === o) {
				if (Sr(d)) {
					const t = pr(e);
					t.setFormat(i), t.setStyle(o), t.select(), d.replace(t);
					return;
				}
			} else {
				if ("" !== d.getTextContent()) {
					const t = pr(e);
					if (t.setFormat(i), t.setStyle(o), t.select(), 0 === c) d.insertBefore(t, !1);
					else {
						const [e] = d.splitText(c);
						e.insertAfter(t, !1);
					}
					t.isComposing() && "text" === this.anchor.type && (this.anchor.offset -= e.length);
					return;
				}
				d.setFormat(i), d.setStyle(o);
			}
			const r = a - c;
			d = d.spliceText(c, r, e, !0), "" === d.getTextContent() ? d.remove() : "text" === this.anchor.type && (this.format = t, this.style = n, d.isComposing() && (this.anchor.offset -= e.length));
		} else {
			const t = new Set([...d.getParentKeys(), ..._.getParentKeys()]), n = Pi(d) ? d : d.getParentOrThrow();
			let r = Pi(_) ? _ : _.getParentOrThrow(), i = _;
			if (!n.is(r) && r.isInline()) do
				i = r, r = r.getParentOrThrow();
			while (r.isInline());
			if ("text" === l.type && (0 !== a || "" === _.getTextContent()) || "element" === l.type && _.getIndexWithinParent() < a) if (yr(_) && !Co(_) && a !== _.getTextContentSize()) {
				if (_.isSegmented()) {
					const t = pr(_.getTextContent());
					_.replace(t), _ = t;
				}
				Ki(l.getNode()) || "text" !== l.type || (_ = _.spliceText(0, a, "")), t.add(_.__key);
			} else {
				const t = _.getParentOrThrow();
				t.canBeEmpty() || 1 !== t.getChildrenSize() ? _.remove() : t.remove();
			}
			else t.add(_.__key);
			const o = r.getChildren(), s = new Set(u), g = n.is(r), p = n.isInline() && null === d.getNextSibling() ? n : d;
			for (let t = o.length - 1; t >= 0; t--) {
				const e = o[t];
				if (e.is(d) || Pi(e) && e.isParentOf(d)) break;
				e.isAttached() && (!s.has(e) || e.is(i) ? g || p.insertAfter(e, !1) : e.remove());
			}
			if (!g) {
				let e = r, n = null;
				for (; null !== e;) {
					const r = e.getChildren(), i = r.length;
					(0 === i || r[i - 1].is(n)) && (t.delete(e.__key), n = e), e = e.getParent();
				}
			}
			if (Co(d)) if (c === h) d.select();
			else {
				const t = pr(e);
				t.select(), d.replace(t);
			}
			else d = d.spliceText(c, h - c, e, !0), "" === d.getTextContent() ? d.remove() : "text" === this.anchor.type && (this.format = d.getFormat(), this.style = d.getStyle(), d.isComposing() && (this.anchor.offset -= e.length));
			for (let e = 1; e < f; e++) {
				const n = u[e], r = n.__key;
				t.has(r) || n.remove();
			}
		}
	}
	removeText() {
		const t = $r() === this;
		Fl(this, Rl(Ll(this))), t && $r() !== this && Bo(this);
	}
	formatText(t, e = null) {
		if (this.isCollapsed()) return this.toggleFormat(t), void Mo(null);
		const n = this.getNodes(), r = [];
		for (const t of n) yr(t) && r.push(t);
		const i = (e) => {
			n.forEach((n) => {
				if (Pi(n)) {
					const r = n.getFormatFlags(t, e);
					n.setTextFormat(r);
				}
			});
		}, o = r.length;
		if (0 === o) return this.toggleFormat(t), Mo(null), void i(e);
		const s = this.anchor, l = this.focus, c = this.isBackward(), a = c ? l : s, u = c ? s : l;
		let f = 0, d = r[0], h = "element" === a.type ? 0 : a.offset;
		if ("text" === a.type && h === d.getTextContentSize() && (f = 1, d = r[1], h = 0), null == d) return;
		const g = d.getFormatFlags(t, e);
		i(g);
		const _ = o - 1;
		let p = r[_];
		const y = "text" === u.type ? u.offset : p.getTextContentSize();
		if (d.is(p)) {
			if (h === y) return;
			if (So(d) || 0 === h && y === d.getTextContentSize()) d.setFormat(g);
			else {
				const t = d.splitText(h, y), e = 0 === h ? t[0] : t[1];
				e.setFormat(g), "text" === a.type && a.set(e.__key, 0, "text"), "text" === u.type && u.set(e.__key, y - h, "text");
			}
			this.format = g;
			return;
		}
		0 === h || So(d) || ([, d] = d.splitText(h), h = 0), d.setFormat(g);
		const m = p.getFormatFlags(t, g);
		y > 0 && (y === p.getTextContentSize() || So(p) || ([p] = p.splitText(y)), p.setFormat(m));
		for (let e = f + 1; e < _; e++) {
			const n = r[e], i = n.getFormatFlags(t, m);
			n.setFormat(i);
		}
		"text" === a.type && a.set(d.__key, h, "text"), "text" === u.type && u.set(p.__key, y, "text"), this.format = g | m;
	}
	insertNodes(e) {
		if (0 === e.length) return;
		if (this.isCollapsed() || this.removeText(), "root" === this.anchor.key) {
			this.insertParagraph();
			const n = $r();
			return wr(n) || t$1(134), n.insertNodes(e);
		}
		const n = (this.isBackward() ? this.focus : this.anchor).getNode(), r = Gs(n, Ks), i = e[e.length - 1];
		if (Pi(r) && "__language" in r) {
			if ("__language" in e[0]) this.insertText(e[0].getTextContent());
			else {
				const t = ni(this);
				r.splice(t, 0, e), i.selectEnd();
			}
			return;
		}
		if (!e.some((t) => (Pi(t) || Li(t)) && !t.isInline())) {
			Pi(r) || t$1(211, n.constructor.name, n.getType());
			const o = ni(this);
			r.splice(o, 0, e), i.selectEnd();
			return;
		}
		const o = function(t) {
			const e = Vi();
			let n = null;
			for (let r = 0; r < t.length; r++) {
				const i = t[r], o = Zn(i);
				if (o || Li(i) && i.isInline() || Pi(i) && i.isInline() || yr(i) || i.isParentRequired()) {
					if (null === n && (n = i.createParentElementNode(), e.append(n), o)) continue;
					null !== n && n.append(i);
				} else e.append(i), n = null;
			}
			return e;
		}(e), s = o.getLastDescendant(), l = o.getChildren(), c = !Pi(r) || !r.isEmpty() ? this.insertParagraph() : null, a = l[l.length - 1];
		let u = l[0];
		var f;
		Pi(f = u) && Ks(f) && !f.isEmpty() && Pi(r) && (!r.isEmpty() || r.canMergeWhenEmpty()) && (Pi(r) || t$1(211, n.constructor.name, n.getType()), r.append(...u.getChildren()), u = l[1]), u && (null === r && t$1(212, n.constructor.name, n.getType()), function(e, n) {
			const r = n.getParentOrThrow().getLastChild();
			let i = n;
			const o = [n];
			for (; i !== r;) i.getNextSibling() || t$1(140), i = i.getNextSibling(), o.push(i);
			let s = e;
			for (const t of o) s = s.insertAfter(t);
		}(r, u));
		const d = Gs(s, Ks);
		c && Pi(d) && (c.canMergeWhenEmpty() || Ks(a)) && (d.append(...c.getChildren()), c.remove()), Pi(r) && r.isEmpty() && r.remove(), s.selectEnd();
		const h = Pi(r) ? r.getLastChild() : null;
		Zn(h) && d !== r && h.remove();
	}
	insertParagraph() {
		if ("root" === this.anchor.key) {
			const t = Vi();
			return zo().splice(this.anchor.offset, 0, [t]), t.select(), t;
		}
		const e = ni(this), n = Gs(this.anchor.getNode(), Ks);
		Pi(n) || t$1(213);
		const r = n.getChildAtIndex(e), i = r ? [r, ...r.getNextSiblings()] : [], o = n.insertNewAfter(this, !1);
		return o ? (o.append(...i), o.selectStart(), o) : null;
	}
	insertLineBreak(t) {
		const e = Qn();
		if (this.insertNodes([e]), t) {
			const t = e.getParentOrThrow(), n = e.getIndexWithinParent();
			t.select(n, n);
		}
	}
	extract() {
		const t = [...this.getNodes()], e = t.length;
		let n = t[0], r = t[e - 1];
		const [i, o] = Ar(this), s = this.isBackward(), [l, c] = s ? [this.focus, this.anchor] : [this.anchor, this.focus], [a, u] = s ? [o, i] : [i, o];
		if (0 === e) return [];
		if (1 === e) {
			if (yr(n) && !this.isCollapsed()) {
				const t = n.splitText(a, u), e = 0 === a ? t[0] : t[1];
				return e ? (l.set(e.getKey(), 0, "text"), c.set(e.getKey(), e.getTextContentSize(), "text"), [e]) : [];
			}
			return [n];
		}
		if (yr(n) && (a === n.getTextContentSize() ? t.shift() : 0 !== a && ([, n] = n.splitText(a), t[0] = n, l.set(n.getKey(), 0, "text"))), yr(r)) {
			const e = r.getTextContent().length;
			0 === u ? t.pop() : u !== e && ([r] = r.splitText(u), t[t.length - 1] = r, c.set(r.getKey(), r.getTextContentSize(), "text"));
		}
		return t;
	}
	modify(t, e, n) {
		if (ii(this, t, e, n)) return;
		const r = "move" === t, i = _i(), o = Es(ms(i));
		if (!o) return;
		const s = i._blockCursorElement, l = i._rootElement, c = this.focus.getNode();
		if (null === l || null === s || !Pi(c) || c.isInline() || c.canBeEmpty() || ws(s, i, l), this.dirty) {
			let t = us(i, this.anchor.key), e = us(i, this.focus.key);
			"text" === this.anchor.type && (t = To(t)), "text" === this.focus.type && (e = To(e)), t && e && Xr(o, t, this.anchor.offset, e, this.focus.offset);
		}
		if (function(t, e, n, r) {
			t.modify(e, n, r);
		}(o, t, e ? "backward" : "forward", n), o.rangeCount > 0) {
			const t = o.getRangeAt(0), n = this.anchor.getNode(), i = Ki(n) ? n : Cs(n);
			if (this.applyDOMRange(t), this.dirty = !0, !r) {
				const n = this.getNodes(), r = [];
				let s = !1;
				for (let t = 0; t < n.length; t++) {
					const e = n[t];
					ps(e, i) ? r.push(e) : s = !0;
				}
				if (s && r.length > 0) if (e) {
					const t = r[0];
					Pi(t) ? t.selectStart() : t.getParentOrThrow().selectStart();
				} else {
					const t = r[r.length - 1];
					Pi(t) ? t.selectEnd() : t.getParentOrThrow().selectEnd();
				}
				o.anchorNode === t.startContainer && o.anchorOffset === t.startOffset || function(t) {
					const e = t.focus, n = t.anchor, r = n.key, i = n.offset, o = n.type;
					n.set(e.key, e.offset, e.type, !0), e.set(r, i, o, !0);
				}(this);
			}
		}
		"lineboundary" === n && ii(this, t, e, n, "decorators");
	}
	forwardDeletion(t, e, n) {
		if (!n && ("element" === t.type && Pi(e) && t.offset === e.getChildrenSize() || "text" === t.type && t.offset === e.getTextContentSize())) {
			const t = e.getParent(), n = e.getNextSibling() || (null === t ? null : t.getNextSibling());
			if (Pi(n) && n.isShadowRoot()) return !0;
		}
		return !1;
	}
	deleteCharacter(t) {
		const e = this.isCollapsed();
		if (this.isCollapsed()) {
			const e = this.anchor;
			let n = e.getNode();
			if (this.forwardDeletion(e, n, t)) return;
			const r = vl(Al(e, t ? "previous" : "next"));
			if (r.getTextSlices().every((t) => null === t || 0 === t.distance)) {
				let t = { type: "initial" };
				for (const e of r.iterNodeCarets("shadowRoot")) if (cl(e)) if (e.origin.isInline());
				else {
					if (e.origin.isShadowRoot()) {
						if ("merge-block" === t.type) break;
						if (Pi(r.anchor.origin) && r.anchor.origin.isEmpty()) {
							const t = Bl(e);
							Fl(this, Tl(t, t)), r.anchor.origin.remove();
						}
						return;
					}
					"merge-next-block" !== t.type && "merge-block" !== t.type || (t = {
						block: t.block,
						caret: e,
						type: "merge-block"
					});
				}
				else {
					if ("merge-block" === t.type) break;
					if (ll(e)) {
						if (Pi(e.origin)) {
							if (e.origin.isInline()) {
								if (!e.origin.isParentOf(r.anchor.origin)) break;
							} else t = {
								block: e.origin,
								type: "merge-next-block"
							};
							continue;
						}
						if (Li(e.origin)) {
							if (e.origin.isIsolated());
							else if ("merge-next-block" === t.type && (e.origin.isKeyboardSelectable() || !e.origin.isInline()) && Pi(r.anchor.origin) && r.anchor.origin.isEmpty()) {
								r.anchor.origin.remove();
								const t = Jr();
								t.add(e.origin.getKey()), Bo(t);
							} else e.origin.remove();
							return;
						}
						break;
					}
				}
				if ("merge-block" === t.type) {
					const { caret: e, block: n } = t;
					return Fl(this, Tl(!e.origin.isEmpty() && n.isEmpty() ? Il(dl(n, e.direction)) : r.anchor, e)), this.removeText();
				}
			}
			const i = this.focus;
			if (this.modify("extend", t, "character"), this.isCollapsed()) {
				if (t && 0 === e.offset && Pr(this, e.getNode())) return;
			} else {
				const r = "text" === i.type ? i.getNode() : null;
				if (n = "text" === e.type ? e.getNode() : null, null !== r && r.isSegmented()) {
					const e = i.offset, o = r.getTextContentSize();
					if (r.is(n) || t && e !== o || !t && 0 !== e) return void Fr(r, t, e);
				} else if (null !== n && n.isSegmented()) {
					const i = e.offset, o = n.getTextContentSize();
					if (n.is(r) || t && 0 !== i || !t && i !== o) return void Fr(n, t, i);
				}
				(function(t, e) {
					const n = t.anchor, r = t.focus, i = n.getNode();
					if (i === r.getNode() && "text" === n.type && "text" === r.type) {
						const t = n.offset, o = r.offset, s = t < o, l = s ? t : o, c = s ? o : t, a = c - 1;
						if (l !== a) (function(t) {
							return !(Jo(t) || Dr(t));
						})(i.getTextContent().slice(l, c)) && (e ? r.set(r.key, a, r.type) : n.set(n.key, a, n.type));
					}
				})(this, t);
			}
		}
		if (this.removeText(), t && !e && this.isCollapsed() && "element" === this.anchor.type && 0 === this.anchor.offset) {
			const t = this.anchor.getNode();
			t.isEmpty() && Ki(t.getParent()) && null === t.getPreviousSibling() && Pr(this, t);
		}
	}
	deleteLine(t) {
		this.isCollapsed() && this.modify("extend", t, "lineboundary"), this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
	}
	deleteWord(t) {
		if (this.isCollapsed()) {
			const e = this.anchor, n = e.getNode();
			if (this.forwardDeletion(e, n, t)) return;
			this.modify("extend", t, "word");
		}
		this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
	}
	isBackward() {
		return this.focus.isBefore(this.anchor);
	}
	getStartEndPoints() {
		return [this.anchor, this.focus];
	}
};
function Or(t) {
	return t instanceof br;
}
function Mr(t) {
	const e = t.offset;
	if ("text" === t.type) return e;
	const n = t.getNode();
	return e === n.getChildrenSize() ? n.getTextContent().length : 0;
}
function Ar(t) {
	const e = t.getStartEndPoints();
	if (null === e) return [0, 0];
	const [n, r] = e;
	return "element" === n.type && "element" === r.type && n.key === r.key && n.offset === r.offset ? [0, 0] : [Mr(n), Mr(r)];
}
function Pr(t, e) {
	for (let n = e; n; n = n.getParent()) {
		if (Pi(n)) {
			if (n.collapseAtStart(t)) return !0;
			if (Ss(n)) break;
		}
		if (n.getPreviousSibling()) break;
	}
	return !1;
}
var Dr = (() => {
	try {
		const t = /* @__PURE__ */ new RegExp("\\p{Emoji}", "u"), e = t.test.bind(t);
		if (e("❤️") && e("#️⃣") && e("👍")) return e;
	} catch (t) {}
	return () => !1;
})();
function Fr(t, e, n) {
	const r = t, i = r.getTextContent().split(/(?=\s)/g), o = i.length;
	let s = 0, l = 0;
	for (let t = 0; t < o; t++) {
		const r = t === o - 1;
		if (l = s, s += i[t].length, e && s === n || s > n || r) {
			i.splice(t, 1), r && (l = void 0);
			break;
		}
	}
	const c = i.join("").trim();
	"" === c ? r.remove() : (r.setTextContent(c), r.select(l, l));
}
function Lr(e, n, r, i) {
	let o, s = n;
	if (Ps(e)) {
		let l = !1;
		const c = e.childNodes, a = c.length, u = i._blockCursorElement;
		s === a && (l = !0, s = a - 1);
		let f = c[s], d = !1;
		if (f === u) f = c[s + 1], d = !0;
		else if (null !== u) {
			const t = u.parentNode;
			if (e === t) n > Array.prototype.indexOf.call(t.children, u) && s--;
		}
		if (o = Wo(f), yr(o)) s = gl(o, l ? "next" : "previous");
		else {
			let c = Wo(e);
			if (null === c) return null;
			if (Pi(c)) {
				const a = i.getElementByKey(c.getKey());
				null === a && t$1(214);
				const u = c.getDOMSlot(a);
				[c, s] = u.resolveChildIndex(c, a, e, n), Pi(c) || t$1(215), l && s >= c.getChildrenSize() && (s = Math.max(0, c.getChildrenSize() - 1));
				let f = c.getChildAtIndex(s);
				if (Pi(f) && function(t, e, n) {
					const r = t.getParent();
					return null === n || null === r || !r.canBeEmpty() || r !== n.getNode();
				}(f, 0, r)) {
					const t = l ? f.getLastDescendant() : f.getFirstDescendant();
					null === t ? c = f : (f = t, c = Pi(f) ? f : f.getParentOrThrow()), s = 0;
				}
				yr(f) ? (o = f, c = null, s = gl(f, l ? "next" : "previous")) : f !== c && l && !d && (Pi(c) || t$1(216), s = Math.min(c.getChildrenSize(), s + 1));
			} else {
				const t = c.getIndexWithinParent();
				s = 0 === n && Li(c) && Wo(e) === c ? t : t + 1, c = c.getParentOrThrow();
			}
			if (Pi(c)) return kr(c.__key, s, "element");
		}
	} else o = Wo(e);
	return yr(o) ? kr(o.__key, gl(o, s, "clamp"), "text") : null;
}
function Ir(t, e, n) {
	const r = t.offset, i = t.getNode();
	if (0 === r) {
		const r = i.getPreviousSibling(), o = i.getParent();
		if (e) {
			if ((n || !e) && null === r && Pi(o) && o.isInline()) {
				const e = o.getPreviousSibling();
				yr(e) && t.set(e.__key, e.getTextContent().length, "text");
			}
		} else Pi(r) && !n && r.isInline() ? t.set(r.__key, r.getChildrenSize(), "element") : yr(r) && t.set(r.__key, r.getTextContent().length, "text");
	} else if (r === i.getTextContent().length) {
		const r = i.getNextSibling(), o = i.getParent();
		if (e && Pi(r) && r.isInline()) t.set(r.__key, 0, "element");
		else if ((n || e) && null === r && Pi(o) && o.isInline() && !o.canInsertTextAfter()) {
			const e = o.getNextSibling();
			yr(e) && t.set(e.__key, 0, "text");
		}
	}
}
function Kr(t, e, n) {
	if ("text" === t.type && "text" === e.type) {
		const n = t.isBefore(e), r = t.is(e);
		Ir(t, n, r), Ir(e, !n, r), r && e.set(t.key, t.offset, t.type);
	}
}
function zr(t, e, n, r, i, o) {
	if (null === t || null === n || !_o(i, t, n)) return null;
	const s = Lr(t, e, wr(o) ? o.anchor : null, i);
	if (null === s) return null;
	const l = Lr(n, r, wr(o) ? o.focus : null, i);
	if (null === l) return null;
	if ("element" === s.type && "element" === l.type) {
		const e = Wo(t), r = Wo(n);
		if (Li(e) && Li(r)) return null;
	}
	return Kr(s, l), [s, l];
}
function Rr(t) {
	return Pi(t) && !t.isInline();
}
function Br(t, e, n, r, i, o) {
	const s = gi(), l = new Er(kr(t, e, i), kr(n, r, o), 0, "");
	return l.dirty = !0, s._selection = l, l;
}
function Wr() {
	return new Er(kr("root", 0, "element"), kr("root", 0, "element"), 0, "");
}
function Jr() {
	return new br(/* @__PURE__ */ new Set());
}
function Ur(t, e, n, r) {
	const i = n._window;
	if (null === i) return null;
	const o = r || i.event, s = o ? o.type : void 0, l = "selectionchange" === s, c = !Y$3 && (l || "beforeinput" === s || "compositionstart" === s || "compositionend" === s || "click" === s && o && 3 === o.detail || "drop" === s || void 0 === s);
	let a, u, f, d;
	if (wr(t) && !c) return t.clone();
	if (null === e) return null;
	if (a = e.anchorNode, u = e.focusNode, f = e.anchorOffset, d = e.focusOffset, (l || void 0 === s) && wr(t) && !_o(n, a, u)) return t.clone();
	const h = zr(a, f, u, d, n, t);
	if (null === h) return null;
	const [g, _] = h;
	let p = 0, y = "";
	if (wr(t)) {
		const e = t.anchor;
		if (g.key === e.key) p = t.format, y = t.style;
		else {
			const t = g.getNode();
			yr(t) ? (p = t.getFormat(), y = t.getStyle()) : Pi(t) && (p = t.getTextFormat(), y = t.getTextStyle());
		}
	}
	return new Er(g, _, p, y);
}
function $r() {
	return gi()._selection;
}
function Vr() {
	return _i()._editorState._selection;
}
function Yr(t, e, n, r = 1) {
	const i = t.anchor, o = t.focus, s = i.getNode(), l = o.getNode();
	if (!e.is(s) && !e.is(l)) return;
	const c = e.__key;
	if (t.isCollapsed()) {
		const e = i.offset;
		if (n <= e && r > 0 || n < e && r < 0) {
			const n = Math.max(0, e + r);
			i.set(c, n, "element"), o.set(c, n, "element"), qr(t);
		}
	} else {
		const s = t.isBackward(), l = s ? o : i, a = l.getNode(), u = s ? i : o, f = u.getNode();
		if (e.is(a)) {
			const t = l.offset;
			(n <= t && r > 0 || n < t && r < 0) && l.set(c, Math.max(0, t + r), "element");
		}
		if (e.is(f)) {
			const t = u.offset;
			(n <= t && r > 0 || n < t && r < 0) && u.set(c, Math.max(0, t + r), "element");
		}
	}
	qr(t);
}
function qr(t) {
	const e = t.anchor, n = e.offset, r = t.focus, i = r.offset, o = e.getNode(), s = r.getNode();
	if (t.isCollapsed()) {
		if (!Pi(o)) return;
		const t = o.getChildrenSize(), i = n >= t, s = i ? o.getChildAtIndex(t - 1) : o.getChildAtIndex(n);
		if (yr(s)) {
			let t = 0;
			i && (t = s.getTextContentSize()), e.set(s.__key, t, "text"), r.set(s.__key, t, "text");
		}
		return;
	}
	if (Pi(o)) {
		const t = o.getChildrenSize(), r = n >= t, i = r ? o.getChildAtIndex(t - 1) : o.getChildAtIndex(n);
		if (yr(i)) {
			let t = 0;
			r && (t = i.getTextContentSize()), e.set(i.__key, t, "text");
		}
	}
	if (Pi(s)) {
		const t = s.getChildrenSize(), e = i >= t, n = e ? s.getChildAtIndex(t - 1) : s.getChildAtIndex(i);
		if (yr(n)) {
			let t = 0;
			e && (t = n.getTextContentSize()), r.set(n.__key, t, "text");
		}
	}
}
function Hr(t, e, n, r, i) {
	let o = null, s = 0, l = null;
	null !== r ? (o = r.__key, yr(r) ? (s = r.getTextContentSize(), l = "text") : Pi(r) && (s = r.getChildrenSize(), l = "element")) : null !== i && (o = i.__key, yr(i) ? l = "text" : Pi(i) && (l = "element")), null !== o && null !== l ? t.set(o, s, l) : (s = e.getIndexWithinParent(), -1 === s && (s = n.getChildrenSize()), t.set(n.__key, s, "element"));
}
function Gr(t, e, n, r, i) {
	"text" === t.type ? t.set(n, t.offset + (e ? 0 : i), "text") : t.offset > r.getIndexWithinParent() && t.set(t.key, t.offset - 1, "element");
}
function Xr(t, e, n, r, i) {
	try {
		t.setBaseAndExtent(e, n, r, i);
	} catch (t) {}
}
function Qr(t, e, n) {
	const r = us(t, e.getKey());
	if (Pi(e)) {
		const t = e.getDOMSlot(r);
		return [t.element, n + t.getFirstChildOffset()];
	}
	return [r, n];
}
function Zr(t, e, n, r, i, s, l) {
	const c = r.anchorNode, a = r.focusNode, u = r.anchorOffset, f = r.focusOffset, d = document.activeElement;
	if (i.has("collaboration") && d !== s || null !== d && go(d)) return;
	if (!wr(e)) return void (null !== t && _o(n, c, a) && r.removeAllRanges());
	const h = e.anchor, g = e.focus, _ = h.getNode(), p = g.getNode(), [y, m] = Qr(n, _, h.offset), [x, C] = Qr(n, p, g.offset), S = e.format, v = e.style, k = e.isCollapsed();
	let T = y, N = x, b = !1;
	var w, E, O, M, A;
	if (("text" === h.type ? (T = To(y), b = _.getFormat() !== S || _.getStyle() !== v) : wr(t) && "text" === t.anchor.type && (b = !0), "text" === g.type && (N = To(x)), null !== T && null !== N) && (k && (null === t || b || wr(t) && (t.format !== S || t.style !== v)) && (w = S, E = v, O = m, M = h.key, A = performance.now(), gn = [
		w,
		E,
		O,
		M,
		A
	]), u !== m || f !== C || c !== T || a !== N || "Range" === r.type && k || (null !== d && s.contains(d) || i.has("skip-selection-focus") || s.focus({ preventScroll: !0 }), "element" === h.type))) {
		if (Xr(r, T, m, N, C), !o$1 || !e.isCollapsed() || null === s || i.has("skip-selection-focus") || null !== document.activeElement && s.contains(document.activeElement) || s.focus({ preventScroll: !0 }), !i.has("skip-scroll-into-view") && e.isCollapsed() && null !== s && s === document.activeElement) {
			const t = wr(e) && "element" === e.anchor.type ? T.childNodes[m] || null : r.rangeCount > 0 ? r.getRangeAt(0) : null;
			if (null !== t) {
				let e;
				if (t instanceof Text) {
					const n = document.createRange();
					n.selectNode(t), e = n.getBoundingClientRect();
				} else e = t.getBoundingClientRect();
				(function(t, e, n) {
					const r = ds(n), i = ys(r);
					if (null === r || null === i) return;
					let { top: o, bottom: s } = e, l = 0, c = 0, a = n;
					for (; null !== a;) {
						const e = a === r.body;
						if (e) {
							l = 0, c = ms(t).innerHeight;
							const e = i.getComputedStyle(r.documentElement), n = parseFloat(e.scrollPaddingTop), o = parseFloat(e.scrollPaddingBottom);
							isFinite(n) && (l += n), isFinite(o) && (c -= o);
						} else {
							const t = a.getBoundingClientRect();
							l = t.top, c = t.bottom;
						}
						let n = 0;
						if (o < l ? n = -(l - o) : s > c && (n = s - c), 0 !== n) if (e) i.scrollBy(0, n);
						else {
							const t = a.scrollTop;
							a.scrollTop += n;
							const e = a.scrollTop - t;
							o -= e, s -= e;
						}
						if (e) break;
						a = fs(a);
					}
				})(n, e, s);
			}
		}
		ln = !0;
	}
}
function ti(t) {
	let e = $r() || Vr();
	null === e && (e = zo().selectEnd()), e.insertNodes(t);
}
function ni(e) {
	let n = e;
	e.isCollapsed() || n.removeText();
	const r = $r();
	wr(r) && (n = r), wr(n) || t$1(161);
	const i = n.anchor;
	let o = i.getNode(), s = i.offset;
	for (; !Ks(o);) {
		const t = o;
		if ([o, s] = ri(o, s), t.is(o)) break;
	}
	return s;
}
function ri(t, e) {
	const n = t.getParent();
	if (!n) {
		const t = Vi();
		return zo().append(t), t.select(), [zo(), 0];
	}
	if (yr(t)) {
		const r = t.splitText(e);
		if (0 === r.length) return [n, t.getIndexWithinParent()];
		const i = 0 === e ? 0 : 1;
		return [n, r[0].getIndexWithinParent() + i];
	}
	if (!Pi(t) || 0 === e) return [n, t.getIndexWithinParent()];
	const r = t.getChildAtIndex(e);
	if (r) {
		const n = new Er(kr(t.__key, e, "element"), kr(t.__key, e, "element"), 0, ""), i = t.insertNewAfter(n);
		i && i.append(r, ...r.getNextSiblings());
	}
	return [n, t.getIndexWithinParent() + 1];
}
function ii(t, e, n, r, i = "decorators-and-blocks") {
	if ("move" === e && "character" === r && !t.isCollapsed()) {
		const [e, r] = n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus];
		return r.set(e.key, e.offset, e.type), !0;
	}
	const o = Al(t.focus, n ? "previous" : "next"), s = "lineboundary" === r, l = "move" === e;
	let c = o, a = "decorators-and-blocks" === i;
	if (!Wl(c)) {
		for (const t of c) {
			a = !1;
			const { origin: e } = t;
			if (!Li(e) || e.isIsolated() || (c = t, !s || !e.isInline())) break;
		}
		if (a) for (const t of vl(o).iterNodeCarets("extend" === e ? "shadowRoot" : "root")) {
			if (cl(t)) t.origin.isInline() || (c = t);
			else {
				if (Pi(t.origin)) continue;
				Li(t.origin) && !t.origin.isInline() && (c = t);
			}
			break;
		}
	}
	if (c === o) return !1;
	if (l && !s && Li(c.origin) && c.origin.isKeyboardSelectable()) {
		const t = Jr();
		return t.add(c.origin.getKey()), Bo(t), !0;
	}
	return c = Bl(c), l && Pl(t.anchor, c), Pl(t.focus, c), a || !s;
}
var oi = null, si = null, li = !1, ci = !1, ai = 0;
var ui = {
	characterData: !0,
	childList: !0,
	subtree: !0
};
function fi() {
	return li || null !== oi && oi._readOnly;
}
function di() {
	li && t$1(13);
}
function hi() {
	ai > 99 && t$1(14);
}
function gi() {
	return null === oi && t$1(195, pi()), oi;
}
function _i() {
	return null === si && t$1(196, pi()), si;
}
function pi() {
	let t = 0;
	const e = /* @__PURE__ */ new Set(), n = io.version;
	if ("undefined" != typeof window) for (const r of document.querySelectorAll("[contenteditable]")) {
		const i = mo(r);
		if (po(i)) t++;
		else if (i) {
			let t = String(i.constructor.version || "<0.17.1");
			t === n && (t += " (separately built, likely a bundler configuration issue)"), e.add(t);
		}
	}
	let r = ` Detected on the page: ${t} compatible editor(s) with version ${n}`;
	return e.size && (r += ` and incompatible editors with versions ${Array.from(e).join(", ")}`), r;
}
function yi() {
	return si;
}
function mi(t, e, n) {
	const r = e.__type, i = ao(t, r);
	let o = n.get(r);
	void 0 === o && (o = Array.from(i.transforms), n.set(r, o));
	const s = o.length;
	for (let t = 0; t < s && (o[t](e), e.isAttached()); t++);
}
function xi(t, e) {
	return void 0 !== t && t.__key !== e && t.isAttached();
}
function Ci(t, e) {
	if (!e) return;
	const n = t._updateTags;
	let r = e;
	Array.isArray(e) || (r = [e]);
	for (const t of r) n.add(t);
}
function Si(t) {
	return vi(t, _i()._nodes);
}
function vi(e, n) {
	const r = e.type, i = n.get(r);
	void 0 === i && t$1(17, r);
	const o = i.klass;
	e.type !== o.getType() && t$1(18, o.name);
	const s = o.importJSON(e), l = e.children;
	if (Pi(s) && Array.isArray(l)) for (let t = 0; t < l.length; t++) {
		const e = vi(l[t], n);
		s.append(e);
	}
	return s;
}
function ki(t, e, n) {
	const r = oi, i = li, o = si;
	oi = e, li = !0, si = t;
	try {
		return n();
	} finally {
		oi = r, li = i, si = o;
	}
}
function Ti(t, e) {
	const n = t._pendingEditorState, r = t._rootElement, i = t._headless || null === r;
	if (null === n) return;
	const o = t._editorState, s = o._selection, l = n._selection, c = 0 !== t._dirtyType, a = oi, u = li, f = si, d = t._updating, h = t._observer;
	let g = null;
	if (t._pendingEditorState = null, t._editorState = n, !i && c && null !== h) {
		si = t, oi = n, li = !1, t._updating = !0;
		try {
			const e = t._dirtyType, r = t._dirtyElements, i = t._dirtyLeaves;
			h.disconnect(), g = te$1(o, n, t, e, r, i);
		} catch (e) {
			if (e instanceof Error && t._onError(e), ci) throw e;
			Zi(t, null, r, n), nt$2(t), t._dirtyType = 2, ci = !0, Ti(t, o), ci = !1;
			return;
		} finally {
			h.observe(r, ui), t._updating = d, oi = a, li = u, si = f;
		}
	}
	n._readOnly || (n._readOnly = !0);
	const _ = t._dirtyLeaves, p = t._dirtyElements, y = t._normalizedNodes, m = t._updateTags, x = t._deferred;
	c && (t._dirtyType = 0, t._cloneNotNeeded.clear(), t._dirtyLeaves = /* @__PURE__ */ new Set(), t._dirtyElements = /* @__PURE__ */ new Map(), t._normalizedNodes = /* @__PURE__ */ new Set(), t._updateTags = /* @__PURE__ */ new Set()), function(t, e) {
		const n = t._decorators;
		let r = t._pendingDecorators || n;
		const i = e._nodeMap;
		let o;
		for (o in r) i.has(o) || (r === n && (r = Io(t)), delete r[o]);
	}(t, n);
	const C = i ? null : Es(ms(t));
	if (t._editable && null !== C && (c || null === l || l.dirty || !l.is(s)) && null !== r && !m.has("skip-dom-selection")) {
		si = t, oi = n;
		try {
			if (null !== h && h.disconnect(), c || null === l || l.dirty) {
				const e = t._blockCursorElement;
				null !== e && ws(e, t, r), Zr(s, l, t, C, m, r);
			}
			(function(t, e, n) {
				let r = t._blockCursorElement;
				if (wr(n) && n.isCollapsed() && "element" === n.anchor.type && e.contains(document.activeElement)) {
					const i = n.anchor, o = i.getNode(), s = i.offset;
					let l = !1, c = null;
					if (s === o.getChildrenSize()) bs(o.getChildAtIndex(s - 1)) && (l = !0);
					else {
						const e = o.getChildAtIndex(s);
						if (null !== e && bs(e)) {
							const n = e.getPreviousSibling();
							(null === n || bs(n)) && (l = !0, c = t.getElementByKey(e.__key));
						}
					}
					if (l) {
						const n = t.getElementByKey(o.__key);
						null === r && (t._blockCursorElement = r = function(t) {
							const e = t.theme, n = document.createElement("div");
							n.contentEditable = "false", n.setAttribute("data-lexical-cursor", "true");
							let r = e.blockCursor;
							if (void 0 !== r) {
								if ("string" == typeof r) r = e.blockCursor = tc(r);
								void 0 !== r && n.classList.add(...r);
							}
							return n;
						}(t._config)), e.style.caretColor = "transparent", null === c ? n.appendChild(r) : n.insertBefore(r, c);
						return;
					}
				}
				null !== r && ws(r, t, e);
			})(t, r, l);
		} finally {
			null !== h && h.observe(r, ui), si = f, oi = a;
		}
	}
	null !== g && function(t, e, n, r, i) {
		const o = Array.from(t._listeners.mutation), s = o.length;
		for (let t = 0; t < s; t++) {
			const [s, l] = o[t];
			for (const t of l) {
				const o = e.get(t);
				void 0 !== o && s(o, {
					dirtyLeaves: r,
					prevEditorState: i,
					updateTags: n
				});
			}
		}
	}(t, g, m, _, o), wr(l) || null === l || null !== s && s.is(l) || t.dispatchCommand(re, void 0);
	const S = t._pendingDecorators;
	null !== S && (t._decorators = S, t._pendingDecorators = null, Ni("decorator", t, !0, S)), function(t, e, n) {
		const r = Ko(e), i = Ko(n);
		r !== i && Ni("textcontent", t, !0, i);
	}(t, e || o, n), Ni("update", t, !0, {
		dirtyElements: p,
		dirtyLeaves: _,
		editorState: n,
		mutatedNodes: g,
		normalizedNodes: y,
		prevEditorState: e || o,
		tags: m
	}), function(t, e) {
		if (t._deferred = [], 0 !== e.length) {
			const n = t._updating;
			t._updating = !0;
			try {
				for (let t = 0; t < e.length; t++) e[t]();
			} finally {
				t._updating = n;
			}
		}
	}(t, x), function(t) {
		const e = t._updates;
		if (0 !== e.length) {
			const n = e.shift();
			if (n) {
				const [e, r] = n;
				wi(t, e, r);
			}
		}
	}(t);
}
function Ni(t, e, n, ...r) {
	const i = e._updating;
	e._updating = n;
	try {
		const n = e._listeners[t], i = Array.from(n);
		for (const [t, e] of i) {
			e && e();
			const i = t(...r);
			n.has(t) ? n.set(t, i) : i && i();
		}
	} finally {
		e._updating = i;
	}
}
function bi(e, n) {
	const r = e._updates;
	let i = n || !1;
	for (; 0 !== r.length;) {
		const n = r.shift();
		if (n) {
			const [r, o] = n, s = e._pendingEditorState;
			let l;
			void 0 !== o && (l = o.onUpdate, o.skipTransforms && (i = !0), o.discrete && (null === s && t$1(191), s._flushSync = !0), l && e._deferred.push(l), Ci(e, o.tag)), null == s ? wi(e, r, o) : r();
		}
	}
	return i;
}
function wi(e, n, r) {
	const i = e._updateTags;
	let o, s = !1, l = !1;
	void 0 !== r && (o = r.onUpdate, Ci(e, r.tag), s = r.skipTransforms || !1, l = r.discrete || !1), o && e._deferred.push(o);
	const c = e._editorState;
	let a = e._pendingEditorState, u = !1;
	(null === a || a._readOnly) && (a = e._pendingEditorState = zi(a || c), u = !0), a._flushSync = l;
	const f = oi, d = li, h = si, g = e._updating;
	oi = a, li = !1, e._updating = !0, si = e;
	const _ = e._headless || null === e.getRootElement();
	so(null);
	try {
		u && (_ ? null !== c._selection && (a._selection = c._selection.clone()) : a._selection = function(t, e) {
			const n = t.getEditorState()._selection, r = Es(ms(t));
			return wr(n) || null == n ? Ur(n, r, t, e) : n.clone();
		}(e, r && r.event || null));
		const i = e._compositionKey;
		n(), s = bi(e, s), function(t, e) {
			const n = e.getEditorState()._selection, r = t._selection;
			if (wr(r)) {
				const t = r.anchor, e = r.focus;
				let i;
				if ("text" === t.type && (i = t.getNode(), i.selectionTransform(n, r)), "text" === e.type) {
					const t = e.getNode();
					i !== t && t.selectionTransform(n, r);
				}
			}
		}(a, e), 0 !== e._dirtyType && (s ? function(t, e) {
			const n = e._dirtyLeaves, r = t._nodeMap;
			for (const t of n) {
				const e = r.get(t);
				yr(e) && e.isAttached() && e.isSimpleText() && !e.isUnmergeable() && xt$2(e);
			}
		}(a, e) : function(t, e) {
			const n = e._dirtyLeaves, r = e._dirtyElements, i = t._nodeMap, o = Ao(), s = /* @__PURE__ */ new Map();
			let l = n, c = l.size, a = r, u = a.size;
			for (; c > 0 || u > 0;) {
				if (c > 0) {
					e._dirtyLeaves = /* @__PURE__ */ new Set();
					for (const t of l) {
						const r = i.get(t);
						yr(r) && r.isAttached() && r.isSimpleText() && !r.isUnmergeable() && xt$2(r), void 0 !== r && xi(r, o) && mi(e, r, s), n.add(t);
					}
					if (l = e._dirtyLeaves, c = l.size, c > 0) {
						ai++;
						continue;
					}
				}
				e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements = /* @__PURE__ */ new Map(), a.delete("root") && a.set("root", !0);
				for (const t of a) {
					const n = t[0], l = t[1];
					if (r.set(n, l), !l) continue;
					const c = i.get(n);
					void 0 !== c && xi(c, o) && mi(e, c, s);
				}
				l = e._dirtyLeaves, c = l.size, a = e._dirtyElements, u = a.size, ai++;
			}
			e._dirtyLeaves = n, e._dirtyElements = r;
		}(a, e), bi(e), function(t, e, n, r) {
			const i = t._nodeMap, o = e._nodeMap, s = [];
			for (const [t] of r) {
				const e = o.get(t);
				void 0 !== e && (e.isAttached() || (Pi(e) && V$2(e, t, i, o, s, r), i.has(t) || r.delete(t), s.push(t)));
			}
			for (const t of s) o.delete(t);
			for (const t of n) {
				const e = o.get(t);
				void 0 === e || e.isAttached() || (i.has(t) || n.delete(t), o.delete(t));
			}
		}(c, a, e._dirtyLeaves, e._dirtyElements));
		i !== e._compositionKey && (a._flushSync = !0);
		const o = a._selection;
		if (wr(o)) {
			const e = a._nodeMap, n = o.anchor.key, r = o.focus.key;
			void 0 !== e.get(n) && void 0 !== e.get(r) || t$1(19);
		} else Or(o) && 0 === o._nodes.size && (a._selection = null);
	} catch (t) {
		t instanceof Error && e._onError(t), e._pendingEditorState = c, e._dirtyType = 2, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), Ti(e);
		return;
	} finally {
		oi = f, li = d, si = h, e._updating = g, ai = 0;
	}
	0 !== e._dirtyType || e._deferred.length > 0 || function(t, e) {
		const n = e.getEditorState()._selection, r = t._selection;
		if (null !== r) {
			if (r.dirty || !r.is(n)) return !0;
		} else if (null !== n) return !0;
		return !1;
	}(a, e) ? a._flushSync ? (a._flushSync = !1, Ti(e)) : u && fo(() => {
		Ti(e);
	}) : (a._flushSync = !1, u && (i.clear(), e._deferred = [], e._pendingEditorState = null));
}
function Ei(t, e, n) {
	si === t && void 0 === n ? e() : wi(t, e, n);
}
var Oi = class Oi {
	element;
	before;
	after;
	constructor(t, e, n) {
		this.element = t, this.before = e || null, this.after = n || null;
	}
	withBefore(t) {
		return new Oi(this.element, t, this.after);
	}
	withAfter(t) {
		return new Oi(this.element, this.before, t);
	}
	withElement(t) {
		return this.element === t ? this : new Oi(t, this.before, this.after);
	}
	insertChild(e) {
		const n = this.before || this.getManagedLineBreak();
		return null !== n && n.parentElement !== this.element && t$1(222), this.element.insertBefore(e, n), this;
	}
	removeChild(e) {
		return e.parentElement !== this.element && t$1(223), this.element.removeChild(e), this;
	}
	replaceChild(e, n) {
		return n.parentElement !== this.element && t$1(224), this.element.replaceChild(e, n), this;
	}
	getFirstChild() {
		const t = this.after ? this.after.nextSibling : this.element.firstChild;
		return t === this.before || t === this.getManagedLineBreak() ? null : t;
	}
	getManagedLineBreak() {
		return this.element.__lexicalLineBreak || null;
	}
	setManagedLineBreak(t) {
		if (null === t) this.removeManagedLineBreak();
		else {
			const e = "decorator" === t && (d$2 || c$3 || l);
			this.insertManagedLineBreak(e);
		}
	}
	removeManagedLineBreak() {
		const t = this.getManagedLineBreak();
		if (t) {
			const e = this.element, n = "IMG" === t.nodeName ? t.nextSibling : null;
			n && e.removeChild(n), e.removeChild(t), e.__lexicalLineBreak = void 0;
		}
	}
	insertManagedLineBreak(t) {
		const e = this.getManagedLineBreak();
		if (e) {
			if (t === ("IMG" === e.nodeName)) return;
			this.removeManagedLineBreak();
		}
		const n = this.element, r = this.before, i = document.createElement("br");
		if (n.insertBefore(i, r), t) {
			const t = document.createElement("img");
			t.setAttribute("data-lexical-linebreak", "true"), t.style.cssText = "display: inline !important; border: 0px !important; margin: 0px !important;", t.alt = "", n.insertBefore(t, i), n.__lexicalLineBreak = t;
		} else n.__lexicalLineBreak = i;
	}
	getFirstChildOffset() {
		let t = 0;
		for (let e = this.after; null !== e; e = e.previousSibling) t++;
		return t;
	}
	resolveChildIndex(t, e, n, r) {
		if (n === this.element) {
			const e = this.getFirstChildOffset();
			return [t, Math.min(e + t.getChildrenSize(), Math.max(e, r))];
		}
		const i = Mi(e, n);
		i.push(r);
		const o = Mi(e, this.element);
		let s = t.getIndexWithinParent();
		for (let t = 0; t < o.length; t++) {
			const e = i[t], n = o[t];
			if (void 0 === e || e < n) break;
			if (e > n) {
				s += 1;
				break;
			}
		}
		return [t.getParentOrThrow(), s];
	}
};
function Mi(e, n) {
	const r = [];
	let i = n;
	for (; i !== e && null !== i; i = i.parentNode) {
		let t = 0;
		for (let e = i.previousSibling; null !== e; e = e.previousSibling) t++;
		r.push(t);
	}
	return i !== e && t$1(225), r.reverse();
}
var Ai = class extends zn {
	__first;
	__last;
	__size;
	__format;
	__style;
	__indent;
	__dir;
	__textFormat;
	__textStyle;
	constructor(t) {
		super(t), this.__first = null, this.__last = null, this.__size = 0, this.__format = 0, this.__style = "", this.__indent = 0, this.__dir = null, this.__textFormat = 0, this.__textStyle = "";
	}
	afterCloneFrom(t) {
		super.afterCloneFrom(t), this.__key === t.__key && (this.__first = t.__first, this.__last = t.__last, this.__size = t.__size), this.__indent = t.__indent, this.__format = t.__format, this.__style = t.__style, this.__dir = t.__dir, this.__textFormat = t.__textFormat, this.__textStyle = t.__textStyle;
	}
	getFormat() {
		return this.getLatest().__format;
	}
	getFormatType() {
		return W$2[this.getFormat()] || "";
	}
	getStyle() {
		return this.getLatest().__style;
	}
	getIndent() {
		return this.getLatest().__indent;
	}
	getChildren() {
		const t = [];
		let e = this.getFirstChild();
		for (; null !== e;) t.push(e), e = e.getNextSibling();
		return t;
	}
	getChildrenKeys() {
		const t = [];
		let e = this.getFirstChild();
		for (; null !== e;) t.push(e.__key), e = e.getNextSibling();
		return t;
	}
	getChildrenSize() {
		return this.getLatest().__size;
	}
	isEmpty() {
		return 0 === this.getChildrenSize();
	}
	isDirty() {
		const t = _i()._dirtyElements;
		return null !== t && t.has(this.__key);
	}
	isLastChild() {
		const t = this.getLatest(), e = this.getParentOrThrow().getLastChild();
		return null !== e && e.is(t);
	}
	getAllTextNodes() {
		const t = [];
		let e = this.getFirstChild();
		for (; null !== e;) {
			if (yr(e) && t.push(e), Pi(e)) {
				const n = e.getAllTextNodes();
				t.push(...n);
			}
			e = e.getNextSibling();
		}
		return t;
	}
	getFirstDescendant() {
		let t = this.getFirstChild();
		for (; Pi(t);) {
			const e = t.getFirstChild();
			if (null === e) break;
			t = e;
		}
		return t;
	}
	getLastDescendant() {
		let t = this.getLastChild();
		for (; Pi(t);) {
			const e = t.getLastChild();
			if (null === e) break;
			t = e;
		}
		return t;
	}
	getDescendantByIndex(t) {
		const e = this.getChildren(), n = e.length;
		if (t >= n) {
			const t = e[n - 1];
			return Pi(t) && t.getLastDescendant() || t || null;
		}
		const r = e[t];
		return Pi(r) && r.getFirstDescendant() || r || null;
	}
	getFirstChild() {
		const t = this.getLatest().__first;
		return null === t ? null : Po(t);
	}
	getFirstChildOrThrow() {
		const e = this.getFirstChild();
		return null === e && t$1(45, this.__key), e;
	}
	getLastChild() {
		const t = this.getLatest().__last;
		return null === t ? null : Po(t);
	}
	getLastChildOrThrow() {
		const e = this.getLastChild();
		return null === e && t$1(96, this.__key), e;
	}
	getChildAtIndex(t) {
		const e = this.getChildrenSize();
		let n, r;
		if (t < e / 2) {
			for (n = this.getFirstChild(), r = 0; null !== n && r <= t;) {
				if (r === t) return n;
				n = n.getNextSibling(), r++;
			}
			return null;
		}
		for (n = this.getLastChild(), r = e - 1; null !== n && r >= t;) {
			if (r === t) return n;
			n = n.getPreviousSibling(), r--;
		}
		return null;
	}
	getTextContent() {
		let t = "";
		const e = this.getChildren(), n = e.length;
		for (let r = 0; r < n; r++) {
			const i = e[r];
			t += i.getTextContent(), Pi(i) && r !== n - 1 && !i.isInline() && (t += P$2);
		}
		return t;
	}
	getTextContentSize() {
		let t = 0;
		const e = this.getChildren(), n = e.length;
		for (let r = 0; r < n; r++) {
			const i = e[r];
			t += i.getTextContentSize(), Pi(i) && r !== n - 1 && !i.isInline() && (t += 2);
		}
		return t;
	}
	getDirection() {
		return this.getLatest().__dir;
	}
	getTextFormat() {
		return this.getLatest().__textFormat;
	}
	hasFormat(t) {
		if ("" !== t) {
			const e = B$3[t];
			return 0 !== (this.getFormat() & e);
		}
		return !1;
	}
	hasTextFormat(t) {
		const e = z$3[t];
		return 0 !== (this.getTextFormat() & e);
	}
	getFormatFlags(t, e) {
		return No(this.getLatest().__textFormat, t, e);
	}
	getTextStyle() {
		return this.getLatest().__textStyle;
	}
	select(t, e) {
		di();
		const n = $r();
		let r = t, i = e;
		const o = this.getChildrenSize();
		if (!this.canBeEmpty()) {
			if (0 === t && 0 === e) {
				const t = this.getFirstChild();
				if (yr(t) || Pi(t)) return t.select(0, 0);
			} else if (!(void 0 !== t && t !== o || void 0 !== e && e !== o)) {
				const t = this.getLastChild();
				if (yr(t) || Pi(t)) return t.select();
			}
		}
		void 0 === r && (r = o), void 0 === i && (i = o);
		const s = this.__key;
		return wr(n) ? (n.anchor.set(s, r, "element"), n.focus.set(s, i, "element"), n.dirty = !0, n) : Br(s, r, s, i, "element", "element");
	}
	selectStart() {
		const t = this.getFirstDescendant();
		return t ? t.selectStart() : this.select();
	}
	selectEnd() {
		const t = this.getLastDescendant();
		return t ? t.selectEnd() : this.select();
	}
	clear() {
		const t = this.getWritable();
		return this.getChildren().forEach((t) => t.remove()), t;
	}
	append(...t) {
		return this.splice(this.getChildrenSize(), 0, t);
	}
	setDirection(t) {
		const e = this.getWritable();
		return e.__dir = t, e;
	}
	setFormat(t) {
		return this.getWritable().__format = "" !== t ? B$3[t] : 0, this;
	}
	setStyle(t) {
		return this.getWritable().__style = t || "", this;
	}
	setTextFormat(t) {
		const e = this.getWritable();
		return e.__textFormat = t, e;
	}
	setTextStyle(t) {
		const e = this.getWritable();
		return e.__textStyle = t, e;
	}
	setIndent(t) {
		return this.getWritable().__indent = t, this;
	}
	splice(e, n, r) {
		Kn(this) && t$1(324, this.__key, this.__type);
		const i = this.getChildrenSize(), o = this.getWritable();
		e + n <= i || t$1(226, String(e), String(n), String(i));
		const s = o.__key, l = [], c = [], a = this.getChildAtIndex(e + n);
		let u = null, f = i - n + r.length;
		if (0 !== e) if (e === i) u = this.getLastChild();
		else {
			const t = this.getChildAtIndex(e);
			null !== t && (u = t.getPreviousSibling());
		}
		if (n > 0) {
			let e = null === u ? this.getFirstChild() : u.getNextSibling();
			for (let r = 0; r < n; r++) {
				null === e && t$1(100);
				const n = e.getNextSibling(), r = e.__key;
				Eo(e.getWritable()), c.push(r), e = n;
			}
		}
		let d = u;
		for (const e of r) {
			null !== d && e.is(d) && (u = d = d.getPreviousSibling());
			const n = e.getWritable();
			n.__parent === s && f--, Eo(n);
			const r = e.__key;
			if (null === d) o.__first = r, n.__prev = null;
			else {
				const t = d.getWritable();
				t.__next = r, n.__prev = t.__key;
			}
			e.__key === s && t$1(76), n.__parent = s, l.push(r), d = e;
		}
		if (e + n === i) {
			if (null !== d) d.getWritable().__next = null, o.__last = d.__key;
		} else if (null !== a) {
			const t = a.getWritable();
			if (null !== d) {
				const e = d.getWritable();
				t.__prev = d.__key, e.__next = a.__key;
			} else t.__prev = null;
		}
		if (o.__size = f, c.length) {
			const t = $r();
			if (wr(t)) {
				const e = new Set(c), n = new Set(l), { anchor: r, focus: i } = t;
				Di(r, e, n) && Hr(r, r.getNode(), this, u, a), Di(i, e, n) && Hr(i, i.getNode(), this, u, a), 0 !== f || this.canBeEmpty() || Ss(this) || this.remove();
			}
		}
		return o;
	}
	getDOMSlot(t) {
		return new Oi(t);
	}
	exportDOM(t) {
		const { element: e } = super.exportDOM(t);
		if (Ps(e)) {
			const t = this.getIndent();
			t > 0 && (e.style.paddingInlineStart = 40 * t + "px");
			const n = this.getDirection();
			n && (e.dir = n);
		}
		return { element: e };
	}
	exportJSON() {
		const t = {
			children: [],
			direction: this.getDirection(),
			format: this.getFormatType(),
			indent: this.getIndent(),
			...super.exportJSON()
		}, e = this.getTextFormat(), n = this.getTextStyle();
		return 0 === e && "" === n || Ss(this) || this.getChildren().some(yr) || (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)), t;
	}
	updateFromJSON(t) {
		return super.updateFromJSON(t).setFormat(t.format).setIndent(t.indent).setDirection(t.direction).setTextFormat(t.textFormat || 0).setTextStyle(t.textStyle || "");
	}
	insertNewAfter(t, e) {
		return null;
	}
	canIndent() {
		return !0;
	}
	collapseAtStart(t) {
		return !1;
	}
	excludeFromCopy(t) {
		return !1;
	}
	canReplaceWith(t) {
		return !0;
	}
	canInsertAfter(t) {
		return !0;
	}
	canBeEmpty() {
		return !0;
	}
	canInsertTextBefore() {
		return !0;
	}
	canInsertTextAfter() {
		return !0;
	}
	isInline() {
		return !1;
	}
	isShadowRoot() {
		return !1;
	}
	canMergeWith(t) {
		return !1;
	}
	extractWithChild(t, e, n) {
		return !1;
	}
	canMergeWhenEmpty() {
		return !1;
	}
	reconcileObservedMutation(t, e) {
		const n = this.getDOMSlot(t);
		let r = n.getFirstChild();
		for (let t = this.getFirstChild(); t; t = t.getNextSibling()) {
			const i = e.getElementByKey(t.getKey());
			null !== i && (null == r ? (n.insertChild(i), r = i) : r !== i && n.replaceChild(i, r), r = r.nextSibling);
		}
	}
};
function Pi(t) {
	return t instanceof Ai;
}
function Di(t, e, n) {
	let r = t.getNode();
	for (; r;) {
		const t = r.__key;
		if (e.has(t) && !n.has(t)) return !0;
		r = r.getParent();
	}
	return !1;
}
var Fi = class extends zn {
	decorate(t, e) {
		return null;
	}
	isIsolated() {
		return !1;
	}
	isInline() {
		return !0;
	}
	isKeyboardSelectable() {
		return !0;
	}
};
function Li(t) {
	return t instanceof Fi;
}
var Ii = class Ii extends Ai {
	__cachedText;
	static getType() {
		return "root";
	}
	static clone() {
		return new Ii();
	}
	constructor() {
		super("root"), this.__cachedText = null;
	}
	getTopLevelElementOrThrow() {
		t$1(51);
	}
	getTextContent() {
		const t = this.__cachedText;
		return !fi() && 0 !== _i()._dirtyType || null === t ? super.getTextContent() : t;
	}
	remove() {
		t$1(52);
	}
	replace(e) {
		t$1(53);
	}
	insertBefore(e) {
		t$1(54);
	}
	insertAfter(e) {
		t$1(55);
	}
	updateDOM(t, e) {
		return !1;
	}
	splice(e, n, r) {
		for (const e of r) Pi(e) || Li(e) || t$1(282);
		return super.splice(e, n, r);
	}
	static importJSON(t) {
		return zo().updateFromJSON(t);
	}
	collapseAtStart() {
		return !0;
	}
};
function Ki(t) {
	return t instanceof Ii;
}
function zi(t) {
	return new Ji(new Map(t._nodeMap));
}
function Ri() {
	return new Ji(new Map([["root", new Ii()]]));
}
function Bi(e) {
	const n = e.exportJSON(), r = e.constructor;
	if (n.type !== r.getType() && t$1(130, r.name), Pi(e)) {
		const i = n.children;
		Array.isArray(i) || t$1(59, r.name);
		const o = e.getChildren();
		for (let t = 0; t < o.length; t++) {
			const e = Bi(o[t]);
			i.push(e);
		}
	}
	return n;
}
function Wi(t) {
	return t instanceof Ji;
}
var Ji = class Ji {
	_nodeMap;
	_selection;
	_flushSync;
	_readOnly;
	constructor(t, e) {
		this._nodeMap = t, this._selection = e || null, this._flushSync = !1, this._readOnly = !1;
	}
	isEmpty() {
		return 1 === this._nodeMap.size && null === this._selection;
	}
	read(t, e) {
		return ki(e && e.editor || null, this, t);
	}
	clone(t) {
		const e = new Ji(this._nodeMap, void 0 === t ? this._selection : t);
		return e._readOnly = !0, e;
	}
	toJSON() {
		return ki(null, this, () => ({ root: Bi(zo()) }));
	}
};
var ji = class extends Ai {
	static getType() {
		return "artificial";
	}
	createDOM(t) {
		return document.createElement("div");
	}
};
var Ui = class Ui extends Ai {
	static getType() {
		return "paragraph";
	}
	static clone(t) {
		return new Ui(t.__key);
	}
	createDOM(t) {
		const e = document.createElement("p"), n = rs(t.theme, "paragraph");
		if (void 0 !== n) e.classList.add(...n);
		return e;
	}
	updateDOM(t, e, n) {
		return !1;
	}
	static importDOM() {
		return { p: (t) => ({
			conversion: $i,
			priority: 0
		}) };
	}
	exportDOM(t) {
		const { element: e } = super.exportDOM(t);
		if (Ps(e)) {
			this.isEmpty() && e.append(document.createElement("br"));
			const t = this.getFormatType();
			t && (e.style.textAlign = t);
		}
		return { element: e };
	}
	static importJSON(t) {
		return Vi().updateFromJSON(t);
	}
	exportJSON() {
		const t = super.exportJSON();
		if (void 0 === t.textFormat || void 0 === t.textStyle) {
			const e = this.getChildren().find(yr);
			e ? (t.textFormat = e.getFormat(), t.textStyle = e.getStyle()) : (t.textFormat = this.getTextFormat(), t.textStyle = this.getTextStyle());
		}
		return t;
	}
	insertNewAfter(t, e) {
		const n = Vi();
		n.setTextFormat(t.format), n.setTextStyle(t.style);
		const r = this.getDirection();
		return n.setDirection(r), n.setFormat(this.getFormatType()), n.setStyle(this.getStyle()), this.insertAfter(n, e), n;
	}
	collapseAtStart() {
		const t = this.getChildren();
		if (0 === t.length || yr(t[0]) && "" === t[0].getTextContent().trim()) {
			if (null !== this.getNextSibling()) return this.selectNext(), this.remove(), !0;
			if (null !== this.getPreviousSibling()) return this.selectPrevious(), this.remove(), !0;
		}
		return !1;
	}
};
function $i(t) {
	const e = Vi();
	if (t.style && (e.setFormat(t.style.textAlign), Us(t, e)), "" === e.getFormatType()) {
		const n = t.getAttribute("align");
		n && n && n in B$3 && e.setFormat(n);
	}
	return { node: e };
}
function Vi() {
	return ks(new Ui());
}
function Yi(t) {
	return t instanceof Ui;
}
function Zi(t, e, n, r) {
	const i = t._keyToDOMMap;
	i.clear(), t._editorState = Ri(), t._pendingEditorState = r, t._compositionKey = null, t._dirtyType = 0, t._cloneNotNeeded.clear(), t._dirtyLeaves = /* @__PURE__ */ new Set(), t._dirtyElements.clear(), t._normalizedNodes = /* @__PURE__ */ new Set(), t._updateTags = /* @__PURE__ */ new Set(), t._updates = [], t._blockCursorElement = null;
	const o = t._observer;
	null !== o && (o.disconnect(), t._observer = null), null !== e && (e.textContent = ""), null !== n && (n.textContent = "", i.set("root", n));
}
function to(t) {
	const e = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	let r = t;
	for (; r;) {
		const { ownNodeConfig: t } = qs(r), i = r.transform;
		if (!n.has(i)) {
			n.add(i);
			const t = r.transform();
			t && e.add(t);
		}
		if (t) {
			const n = t.$transform;
			n && e.add(n), r = t.extends;
		} else {
			const t = Object.getPrototypeOf(r);
			r = t.prototype instanceof zn && t !== zn ? t : void 0;
		}
	}
	return e;
}
function eo(t) {
	const e = t || {}, n = yi(), r = e.theme || {}, i = void 0 === t ? n : e.parentEditor || null, o = e.disableEvents || !1, s = Ri(), l = e.namespace || (null !== i ? i._config.namespace : Uo()), c = e.editorState, a = [
		Ii,
		lr,
		Gn,
		xr,
		Ui,
		ji,
		...e.nodes || []
	], { onError: u, html: f } = e, d = void 0 === e.editable || e.editable;
	let h;
	if (void 0 === t && null !== n) h = n._nodes;
	else {
		h = /* @__PURE__ */ new Map();
		for (let t = 0; t < a.length; t++) {
			let e = a[t], n = null, r = null;
			if ("function" != typeof e) {
				const t = e;
				e = t.replace, n = t.with, r = t.withKlass || null;
			}
			qs(e);
			const i = e.getType(), o = to(e);
			h.set(i, {
				exportDOM: f && f.export ? f.export.get(e) : void 0,
				klass: e,
				replace: n,
				replaceWithKlass: r,
				sharedNodeState: ct$2(a[t]),
				transforms: o
			});
		}
	}
	const g = new io(s, i, h, {
		disableEvents: o,
		namespace: l,
		theme: r
	}, u || console.error, function(t, e) {
		const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), i = (t) => {
			Object.keys(t).forEach((e) => {
				let r = n.get(e);
				void 0 === r && (r = [], n.set(e, r)), r.push(t[e]);
			});
		};
		return t.forEach((t) => {
			const e = t.klass.importDOM;
			if (null == e || r.has(e)) return;
			r.add(e);
			const n = e.call(t.klass);
			null !== n && i(n);
		}), e && i(e), n;
	}(h, f ? f.import : void 0), d, t);
	return void 0 !== c && (g._pendingEditorState = c, g._dirtyType = 2), function(t) {
		t.registerCommand(se$1, Sn, 0), t.registerCommand(le$2, vn, 0), t.registerCommand(ce$1, kn, 0), t.registerCommand(ae, Tn, 0), t.registerCommand(Se$1, bn, 0);
	}(g), g;
}
function no(t, e) {
	const n = t.get(e);
	t.delete(e), n && n();
}
function ro(t, e, n) {
	return t.set(e, n), no.bind(null, t, e);
}
var io = class {
	static version;
	_headless;
	_parentEditor;
	_rootElement;
	_editorState;
	_pendingEditorState;
	_compositionKey;
	_deferred;
	_keyToDOMMap;
	_updates;
	_updating;
	_listeners;
	_commands;
	_nodes;
	_decorators;
	_pendingDecorators;
	_config;
	_dirtyType;
	_cloneNotNeeded;
	_dirtyLeaves;
	_dirtyElements;
	_normalizedNodes;
	_updateTags;
	_observer;
	_key;
	_onError;
	_htmlConversions;
	_window;
	_editable;
	_blockCursorElement;
	_createEditorArgs;
	constructor(t, e, n, r, i, o, s, l) {
		this._createEditorArgs = l, this._parentEditor = e, this._rootElement = null, this._editorState = t, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = {
			decorator: /* @__PURE__ */ new Map(),
			editable: /* @__PURE__ */ new Map(),
			mutation: /* @__PURE__ */ new Map(),
			root: /* @__PURE__ */ new Map(),
			textcontent: /* @__PURE__ */ new Map(),
			update: /* @__PURE__ */ new Map()
		}, this._commands = /* @__PURE__ */ new Map(), this._config = r, this._nodes = n, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = Uo(), this._onError = i, this._htmlConversions = o, this._editable = s, this._headless = null !== e && e._headless, this._window = null, this._blockCursorElement = null;
	}
	isComposing() {
		return null != this._compositionKey;
	}
	registerUpdateListener(t) {
		return ro(this._listeners.update, t);
	}
	registerEditableListener(t) {
		return ro(this._listeners.editable, t);
	}
	registerDecoratorListener(t) {
		return ro(this._listeners.decorator, t);
	}
	registerTextContentListener(t) {
		return ro(this._listeners.textcontent, t);
	}
	registerRootListener(t) {
		const e = this._listeners.root;
		return rc(ro(e, t, t(this._rootElement, null) || void 0), () => function(t, e, n) {
			const r = t.get(e);
			r && r(), t.set(e, e(...n) || void 0);
		}(e, t, [null, this._rootElement]));
	}
	registerCommand(e, n, r) {
		void 0 === r && t$1(35);
		const i = this._commands;
		i.has(e) || i.set(e, [
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set()
		]);
		const o = i.get(e);
		void 0 === o && t$1(36, String(e));
		const s = o[r];
		return s.add(n), () => {
			s.delete(n), o.every((t) => 0 === t.size) && i.delete(e);
		};
	}
	registerMutationListener(t, e, n) {
		const r = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(t)).klass, i = this._listeners.mutation;
		let o = i.get(e);
		void 0 === o && (o = /* @__PURE__ */ new Set(), i.set(e, o)), o.add(r);
		const s = n && n.skipInitialization;
		return void 0 !== s && s || this.initializeMutationListener(e, r), () => {
			o.delete(r), 0 === o.size && i.delete(e);
		};
	}
	getRegisteredNode(e) {
		const n = this._nodes.get(e.getType());
		return void 0 === n && t$1(37, e.name), n;
	}
	resolveRegisteredNodeAfterReplacements(t) {
		for (; t.replaceWithKlass;) t = this.getRegisteredNode(t.replaceWithKlass);
		return t;
	}
	initializeMutationListener(t, e) {
		const n = this._editorState, r = Ws(n).get(e.getType());
		if (!r) return;
		const i = /* @__PURE__ */ new Map();
		for (const t of r.keys()) i.set(t, "created");
		i.size > 0 && t(i, {
			dirtyLeaves: /* @__PURE__ */ new Set(),
			prevEditorState: n,
			updateTags: new Set(["registerMutationListener"])
		});
	}
	registerNodeTransformToKlass(t, e) {
		const n = this.getRegisteredNode(t);
		return n.transforms.add(e), n;
	}
	registerNodeTransform(t, e) {
		const n = this.registerNodeTransformToKlass(t, e), r = [n], i = n.replaceWithKlass;
		if (null != i) {
			const t = this.registerNodeTransformToKlass(i, e);
			r.push(t);
		}
		return function(t, e) {
			const n = Ws(t.getEditorState()), r = [];
			for (const t of e) {
				const e = n.get(t);
				e && r.push(e);
			}
			if (0 === r.length) return;
			t.update(() => {
				for (const t of r) for (const e of t.keys()) {
					const t = Po(e);
					t && t.markDirty();
				}
			}, null === t._pendingEditorState ? { tag: Wn } : void 0);
		}(this, r.map((t) => t.klass.getType())), () => {
			r.forEach((t) => t.transforms.delete(e));
		};
	}
	hasNode(t) {
		return this._nodes.has(t.getType());
	}
	hasNodes(t) {
		return t.every(this.hasNode.bind(this));
	}
	dispatchCommand(t, e) {
		return as(this, t, e);
	}
	getDecorators() {
		return this._decorators;
	}
	getRootElement() {
		return this._rootElement;
	}
	getKey() {
		return this._key;
	}
	setRootElement(t) {
		const e = this._rootElement;
		if (t !== e) {
			const n = rs(this._config.theme, "root"), r = this._pendingEditorState || this._editorState;
			if (this._rootElement = t, Zi(this, e, t, r), null !== e && (this._config.disableEvents || Dn(e), null != n && e.classList.remove(...n)), null !== t) {
				const e = ys(t), r = t.style;
				r.userSelect = "text", r.whiteSpace = "pre-wrap", r.wordBreak = "break-word", t.setAttribute("data-lexical-editor", "true"), this._window = e, this._dirtyType = 2, nt$2(this), this._updateTags.add(Wn), Ti(this), this._config.disableEvents || function(t, e) {
					const n = t.ownerDocument;
					on.set(t, n);
					const r = sn.get(n) ?? 0;
					r < 1 && n.addEventListener("selectionchange", On), sn.set(n, r + 1), t.__lexicalEditor = e;
					const i = wn(t);
					for (let n = 0; n < Ze.length; n++) {
						const [r, o] = Ze[n], s = "function" == typeof o ? (t) => {
							An(t) || (Mn(t), (e.isEditable() || "click" === r) && o(t, e));
						} : (t) => {
							if (An(t)) return;
							Mn(t);
							const n = e.isEditable();
							switch (r) {
								case "cut": return n && as(e, je, t);
								case "copy": return as(e, Je, t);
								case "paste": return n && as(e, ge$1, t);
								case "dragstart": return n && as(e, Re, t);
								case "dragover": return n && as(e, Be, t);
								case "dragend": return n && as(e, We, t);
								case "focus": return n && as(e, He, t);
								case "blur": return n && as(e, Ge, t);
								case "drop": return n && as(e, Ke, t);
							}
						};
						t.addEventListener(r, s), i.push(() => {
							t.removeEventListener(r, s);
						});
					}
				}(t, this), null != n && t.classList.add(...n);
			} else this._window = null, this._updateTags.add(Wn), Ti(this);
			Ni("root", this, !1, t, e);
		}
	}
	getElementByKey(t) {
		return this._keyToDOMMap.get(t) || null;
	}
	getEditorState() {
		return this._editorState;
	}
	setEditorState(e, n) {
		e.isEmpty() && t$1(38);
		let r = e;
		r._readOnly && (r = zi(e), r._selection = e._selection ? e._selection.clone() : null), et$2(this);
		const i = this._pendingEditorState, o = this._updateTags, s = void 0 !== n ? n.tag : null;
		null === i || i.isEmpty() || (null != s && o.add(s), Ti(this)), this._pendingEditorState = r, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, null != s && o.add(s), this._updating || Ti(this);
	}
	parseEditorState(t, e) {
		return function(t, e, n) {
			const r = Ri(), i = oi, o = li, s = si, l = e._dirtyElements, c = e._dirtyLeaves, a = e._cloneNotNeeded, u = e._dirtyType;
			e._dirtyElements = /* @__PURE__ */ new Map(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._cloneNotNeeded = /* @__PURE__ */ new Set(), e._dirtyType = 0, oi = r, li = !1, si = e, so(null);
			try {
				const i = e._nodes;
				vi(t.root, i), n && n(), r._readOnly = !0;
			} catch (t) {
				t instanceof Error && e._onError(t);
			} finally {
				e._dirtyElements = l, e._dirtyLeaves = c, e._cloneNotNeeded = a, e._dirtyType = u, oi = i, li = o, si = s;
			}
			return r;
		}("string" == typeof t ? JSON.parse(t) : t, this, e);
	}
	read(t) {
		return Ti(this), this.getEditorState().read(t, { editor: this });
	}
	update(t, e) {
		(function(t, e, n) {
			t._updating ? t._updates.push([e, n]) : wi(t, e, n);
		})(this, t, e);
	}
	focus(t, e = {}) {
		const n = this._rootElement;
		null !== n && (n.setAttribute("autocapitalize", "off"), Ei(this, () => {
			const r = $r(), i = zo();
			null !== r ? r.dirty || Bo(r.clone()) : 0 !== i.getChildrenSize() && ("rootStart" === e.defaultSelection ? i.selectStart() : i.selectEnd()), gs("focus"), _s(() => {
				n.removeAttribute("autocapitalize"), t && t();
			});
		}), null === this._pendingEditorState && n.removeAttribute("autocapitalize"));
	}
	blur() {
		const t = this._rootElement;
		null !== t && t.blur();
		const e = Es(this._window);
		null !== e && e.removeAllRanges();
	}
	isEditable() {
		return this._editable;
	}
	setEditable(t) {
		this._editable !== t && (this._editable = t, Ni("editable", this, !0, t));
	}
	toJSON() {
		return { editorState: this._editorState.toJSON() };
	}
};
io.version = "0.42.0+prod.esm";
var oo = null;
function so(t) {
	oo = t;
}
var lo = 1;
function ao(e, n) {
	const r = uo(e, n);
	return void 0 === r && t$1(30, n), r;
}
function uo(t, e) {
	return t._nodes.get(e);
}
var fo = "function" == typeof queueMicrotask ? queueMicrotask : (t) => {
	Promise.resolve().then(t);
};
function ho(t) {
	return Li(Lo(t));
}
function go(t) {
	const e = document.activeElement;
	if (!Ps(e)) return !1;
	const n = e.nodeName;
	return Li(Lo(t)) && ("INPUT" === n || "TEXTAREA" === n || "true" === e.contentEditable && null == mo(e));
}
function _o(t, e, n) {
	const r = t.getRootElement();
	try {
		return null !== r && r.contains(e) && r.contains(n) && null !== e && !go(e) && yo(e) === t;
	} catch (t) {
		return !1;
	}
}
function po(t) {
	return t instanceof io;
}
function yo(t) {
	let e = t;
	for (; null != e;) {
		const t = mo(e);
		if (po(t)) return t;
		e = fs(e);
	}
	return null;
}
function mo(t) {
	return t ? t.__lexicalEditor : null;
}
function Co(t) {
	return Sr(t) || t.isToken();
}
function So(t) {
	return Co(t) || t.isSegmented();
}
function vo(t) {
	return Ds(t) && 3 === t.nodeType;
}
function ko(t) {
	return Ds(t) && 9 === t.nodeType;
}
function To(t) {
	let e = t;
	for (; null != e;) {
		if (vo(e)) return e;
		e = e.firstChild;
	}
	return null;
}
function No(t, e, n) {
	const r = z$3[e];
	if (null !== n && (t & r) === (n & r)) return t;
	let i = t ^ r;
	return "subscript" === e ? i &= ~z$3.superscript : "superscript" === e ? i &= ~z$3.subscript : "lowercase" === e ? (i &= ~z$3.uppercase, i &= ~z$3.capitalize) : "uppercase" === e ? (i &= ~z$3.lowercase, i &= ~z$3.capitalize) : "capitalize" === e && (i &= ~z$3.lowercase, i &= ~z$3.uppercase), i;
}
function bo(t) {
	return yr(t) || Zn(t) || Li(t);
}
function wo(t, e) {
	const n = function() {
		const t = oo;
		return oo = null, t;
	}();
	if (null != (e = e || n && n.__key)) return void (t.__key = e);
	di(), hi();
	const r = _i(), i = gi(), o = "" + lo++;
	i._nodeMap.set(o, t), Pi(t) ? r._dirtyElements.set(o, !0) : r._dirtyLeaves.add(o), r._cloneNotNeeded.add(o), r._dirtyType = 1, t.__key = o;
}
function Eo(t) {
	const e = t.getParent();
	if (null !== e) {
		const n = t.getWritable(), r = e.getWritable(), i = t.getPreviousSibling(), o = t.getNextSibling(), s = null !== o ? o.__key : null, l = null !== i ? i.__key : null, c = null !== i ? i.getWritable() : null, a = null !== o ? o.getWritable() : null;
		null === i && (r.__first = s), null === o && (r.__last = l), null !== c && (c.__next = s), null !== a && (a.__prev = l), n.__prev = null, n.__next = null, n.__parent = null, r.__size--;
	}
}
function Oo(e) {
	hi(), Kn(e) && t$1(323, e.__key, e.__type);
	const n = e.getLatest(), r = n.__parent, i = gi(), o = _i(), s = i._nodeMap, l = o._dirtyElements;
	null !== r && function(t, e, n) {
		let r = t;
		for (; null !== r;) {
			if (n.has(r)) return;
			const t = e.get(r);
			if (void 0 === t) break;
			n.set(r, !1), r = t.__parent;
		}
	}(r, s, l);
	const c = n.__key;
	o._dirtyType = 1, Pi(e) ? l.set(c, !0) : o._dirtyLeaves.add(c);
}
function Mo(t) {
	di();
	const e = _i(), n = e._compositionKey;
	if (t !== n) {
		if (e._compositionKey = t, null !== n) {
			const t = Po(n);
			null !== t && t.getWritable();
		}
		if (null !== t) {
			const e = Po(t);
			null !== e && e.getWritable();
		}
	}
}
function Ao() {
	if (fi()) return null;
	return _i()._compositionKey;
}
function Po(t, e) {
	const n = (e || gi())._nodeMap.get(t);
	return void 0 === n ? null : n;
}
function Do(t, e) {
	const n = Fo(t, _i());
	return void 0 !== n ? Po(n, e) : null;
}
function Fo(t, e) {
	return t[`__lexicalKey_${e._key}`];
}
function Lo(t, e) {
	let n = t;
	for (; null != n;) {
		const t = Do(n, e);
		if (null !== t) return t;
		n = fs(n);
	}
	return null;
}
function Io(t) {
	const e = t._decorators, n = Object.assign({}, e);
	return t._pendingDecorators = n, n;
}
function Ko(t) {
	return t.read(() => zo().getTextContent());
}
function zo() {
	return Ro(gi());
}
function Ro(t) {
	return t._nodeMap.get("root");
}
function Bo(t) {
	di();
	const e = gi();
	null !== t && (t.dirty = !0, t.setCachedNodes(null)), e._selection = t;
}
function Wo(t) {
	const e = _i(), n = function(t, e) {
		let n = t;
		for (; null != n;) {
			const t = Fo(n, e);
			if (void 0 !== t) return t;
			n = fs(n);
		}
		return null;
	}(t, e);
	if (null === n) return t === e.getRootElement() ? Po("root") : null;
	return Po(n);
}
function Jo(t) {
	return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
}
function jo(t) {
	const e = [];
	for (let n = t; null !== n; n = n._updating ? null : n._parentEditor) e.push(n);
	return e;
}
function Uo() {
	return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function $o(t) {
	return vo(t) ? t.nodeValue : null;
}
function Vo(t, e, n) {
	const r = Es(ms(e));
	if (null === r) return;
	const i = r.anchorNode;
	let { anchorOffset: o, focusOffset: s } = r;
	if (null !== i) {
		let e = $o(i);
		const r = Lo(i);
		if (null !== e && yr(r)) {
			if ((e === A$3 || e === D$4) && n) {
				const t = n.length;
				e = n, o = t, s = t;
			}
			null !== e && Yo(r, e, o, s, t);
		}
	}
}
function Yo(t, e, n, r, i) {
	let o = t;
	if (o.isAttached() && (i || !o.isDirty())) {
		const s = o.isComposing();
		let a = e;
		if ((s || i) && (e.endsWith(A$3) && (a = e.slice(0, -A$3.length)), i)) {
			const t = D$4;
			let e;
			for (; -1 !== (e = a.indexOf(t));) a = a.slice(0, e) + a.slice(e + t.length), null !== n && n > e && (n = Math.max(e, n - t.length)), null !== r && r > e && (r = Math.max(e, r - t.length));
		}
		const u = o.getTextContent();
		if (i || a !== u) {
			if ("" === a) {
				if (Mo(null), l || c$3 || d$2) o.remove();
				else {
					const t = _i();
					setTimeout(() => {
						t.update(() => {
							o.isAttached() && o.remove();
						});
					}, 20);
				}
				return;
			}
			const e = o.getParent(), i = Vr(), u = o.getTextContentSize(), f = Ao(), h = o.getKey();
			if (o.isToken() || null !== f && h === f && !s || wr(i) && (null !== e && !e.canInsertTextBefore() && 0 === i.anchor.offset || i.anchor.key === t.__key && 0 === i.anchor.offset && !o.canInsertTextBefore() && !s || i.focus.key === t.__key && i.focus.offset === u && !o.canInsertTextAfter() && !s)) return void o.markDirty();
			const g = $r();
			if (!wr(g) || null === n || null === r) return void qo(o, a, g);
			if (g.setTextNodeRange(o, n, o, r), o.isSegmented()) {
				const t = pr(o.getTextContent());
				o.replace(t), o = t;
			}
			qo(o, a, g);
		}
	}
}
function qo(t, e, n) {
	if (t.setTextContent(e), wr(n)) {
		const e = t.getKey();
		for (const r of ["anchor", "focus"]) {
			const i = n[r];
			"text" === i.type && i.key === e && (i.offset = gl(t, i.offset, "clamp"));
		}
	}
}
function Ho(t, e, n) {
	const r = e[n] || !1;
	return "any" === r || r === t[n];
}
function Go(t, e) {
	return Ho(t, e, "altKey") && Ho(t, e, "ctrlKey") && Ho(t, e, "shiftKey") && Ho(t, e, "metaKey");
}
function Xo(t, e, n) {
	if (!Go(t, n)) return !1;
	if (t.key.toLowerCase() === e.toLowerCase()) return !0;
	if (e.length > 1) return !1;
	if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
	const r = "Key" + e.toUpperCase();
	return t.code === r;
}
var Qo = {
	ctrlKey: !i,
	metaKey: i
}, Zo = {
	altKey: i,
	ctrlKey: !i
};
function ts(t) {
	return "Backspace" === t.key;
}
function es(t) {
	return Xo(t, "a", Qo);
}
function ns(t) {
	const e = zo();
	if (wr(t)) {
		const e = t.anchor, n = t.focus, r = e.getNode().getTopLevelElementOrThrow().getParentOrThrow();
		return e.set(r.getKey(), 0, "element"), n.set(r.getKey(), r.getChildrenSize(), "element"), Ct$3(t), t;
	}
	{
		const t = e.select(0, e.getChildrenSize());
		return Bo(Ct$3(t)), t;
	}
}
function rs(t, e) {
	void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
	const n = t.__lexicalClassNameCache, r = n[e];
	if (void 0 !== r) return r;
	const i = t[e];
	if ("string" == typeof i) {
		const t = tc(i);
		return n[e] = t, t;
	}
	return i;
}
function is(e, n, r, i, o) {
	if (0 === r.size) return;
	const s = i.__type, l = i.__key, c = n.get(s);
	void 0 === c && t$1(33, s);
	const a = c.klass;
	let u = e.get(a);
	void 0 === u && (u = /* @__PURE__ */ new Map(), e.set(a, u));
	const f = u.get(l), d = "destroyed" === f && "created" === o;
	(void 0 === f || d) && u.set(l, d ? "updated" : o);
}
function ss(t, e, n) {
	const r = t.getParent();
	let i = n, o = t;
	return null !== r && (e && 0 === n ? (i = o.getIndexWithinParent(), o = r) : e || n !== o.getChildrenSize() || (i = o.getIndexWithinParent() + 1, o = r)), o.getChildAtIndex(e ? i - 1 : i);
}
function ls(t, e) {
	const n = t.offset;
	if ("element" === t.type) return ss(t.getNode(), e, n);
	{
		const r = t.getNode();
		if (e && 0 === n || !e && n === r.getTextContentSize()) {
			const t = e ? r.getPreviousSibling() : r.getNextSibling();
			return null === t ? ss(r.getParentOrThrow(), e, r.getIndexWithinParent() + (e ? 0 : 1)) : t;
		}
	}
	return null;
}
function cs(t) {
	const e = ms(t).event, n = e && e.inputType;
	return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
}
function as(t, e, n) {
	return function(t, e, n) {
		const r = jo(t);
		for (let i = 4; i >= 0; i--) for (let o = 0; o < r.length; o++) {
			const s = r[o], l = s._commands.get(e);
			if (void 0 !== l) {
				const e = l[i];
				if (void 0 !== e) {
					const r = Array.from(e), i = r.length;
					let o = !1;
					if (Ei(s, () => {
						for (let e = 0; e < i; e++) if (r[e](n, t)) return void (o = !0);
					}), o) return o;
				}
			}
		}
		return !1;
	}(t, e, n);
}
function us(e, n) {
	const r = e._keyToDOMMap.get(n);
	return void 0 === r && t$1(75, n), r;
}
function fs(t) {
	const e = t.assignedSlot || t.parentElement;
	return Fs(e) ? e.host : e;
}
function ds(t) {
	return ko(t) ? t : Ps(t) ? t.ownerDocument : null;
}
function gs(t) {
	di();
	_i()._updateTags.add(t);
}
function _s(t) {
	di();
	_i()._deferred.push(t);
}
function ps(t, e) {
	let n = t.getParent();
	for (; null !== n;) {
		if (n.is(e)) return !0;
		n = n.getParent();
	}
	return !1;
}
function ys(t) {
	const e = ds(t);
	return e ? e.defaultView : null;
}
function ms(e) {
	const n = e._window;
	return null === n && t$1(78), n;
}
function Cs(t) {
	let e = t.getParentOrThrow();
	for (; null !== e;) {
		if (Ss(e)) return e;
		e = e.getParentOrThrow();
	}
	return e;
}
function Ss(t) {
	return Ki(t) || Pi(t) && t.isShadowRoot();
}
function vs(t, e = !1) {
	const n = t.constructor.clone(t);
	return wo(n, null), n.afterCloneFrom(t), e || n.resetOnCopyNodeFrom(t), n;
}
function ks(e) {
	const n = _i(), r = e.getType(), i = uo(n, r);
	void 0 === i && t$1(200, e.constructor.name, r);
	const { replace: o, replaceWithKlass: s } = i;
	if (null !== o) {
		const n = o(e), i = n.constructor;
		return null !== s ? n instanceof s || t$1(201, s.name, s.getType(), i.name, i.getType(), e.constructor.name, r) : n instanceof e.constructor && i !== e.constructor || t$1(202, i.name, i.getType(), e.constructor.name, r), n.__key === e.__key && t$1(203, e.constructor.name, r, i.name, i.getType()), n;
	}
	return e;
}
function Ts(e, n) {
	!Ki(e.getParent()) || Pi(n) || Li(n) || t$1(99);
}
function Ns(e) {
	const n = Po(e);
	return null === n && t$1(63, e), n;
}
function bs(t) {
	return (Li(t) || Pi(t) && !t.canBeEmpty()) && !t.isInline();
}
function ws(t, e, n) {
	n.style.removeProperty("caret-color"), e._blockCursorElement = null;
	const r = t.parentElement;
	null !== r && r.removeChild(t);
}
function Es(t) {
	return n$2 ? (t || window).getSelection() : null;
}
function Os(t) {
	const e = ys(t);
	return e ? e.getSelection() : null;
}
function As(t) {
	return Ps(t) && "A" === t.tagName;
}
function Ps(t) {
	return Ds(t) && 1 === t.nodeType;
}
function Ds(t) {
	return "object" == typeof t && null !== t && "nodeType" in t && "number" == typeof t.nodeType;
}
function Fs(t) {
	return Ds(t) && 11 === t.nodeType;
}
function Ls(t) {
	const e = /* @__PURE__ */ new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
	return null !== t.nodeName.match(e);
}
function Is(t) {
	const e = /* @__PURE__ */ new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
	return null !== t.nodeName.match(e);
}
function Ks(t) {
	if (Li(t) && !t.isInline()) return !0;
	if (!Pi(t) || Ss(t)) return !1;
	const e = t.getFirstChild(), n = null === e || Zn(e) || yr(e) || e.isInline();
	return !t.isInline() && !1 !== t.canBeEmpty() && n;
}
function zs() {
	return _i();
}
var Rs = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new Map();
function Ws(e) {
	if (!e._readOnly && e.isEmpty()) return Bs;
	e._readOnly || t$1(192);
	let n = Rs.get(e);
	return n || (n = function(t) {
		const e = /* @__PURE__ */ new Map();
		for (const [n, r] of t._nodeMap) {
			const t = r.__type;
			let i = e.get(t);
			i || (i = /* @__PURE__ */ new Map(), e.set(t, i)), i.set(n, r);
		}
		return e;
	}(e), Rs.set(e, n)), n;
}
function Js(t) {
	const e = t.constructor.clone(t);
	return e.afterCloneFrom(t), e;
}
function js(t) {
	return (e = Js(t))[In] = !0, e;
	var e;
}
function Us(t, e) {
	const n = parseInt(t.style.paddingInlineStart, 10) || 0, r = Math.round(n / 40);
	e.setIndent(r);
}
function Vs(t) {
	return !0 === t.__lexicalUnmanaged;
}
function Ys(t, e) {
	return function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e);
	}(t, e) && t[e] !== zn[e];
}
function qs(e) {
	const n = $$3 in e.prototype ? e.prototype[$$3]() : void 0, r = function(e) {
		if (!(e === zn || e.prototype instanceof zn)) {
			let n = "<unknown>", r = "<unknown>";
			try {
				n = e.getType();
			} catch (t) {}
			try {
				io.version && (r = JSON.parse(io.version));
			} catch (t) {}
			t$1(290, e.name, n, r);
		}
		return e === Fi || e === Ai || e === zn;
	}(e), i = !r && Ys(e, "getType") ? e.getType() : void 0;
	let o, s = i;
	if (n) if (i) o = n[i];
	else for (const [t, e] of Object.entries(n)) s = t, o = e;
	if (!r && s && (Ys(e, "getType") || (e.getType = () => s), Ys(e, "clone") || (e.clone = (t) => (so(t), new e())), Ys(e, "importJSON") || (e.importJSON = o && o.$importJSON || ((t) => new e().updateFromJSON(t))), !Ys(e, "importDOM") && o)) {
		const { importDOM: t } = o;
		t && (e.importDOM = () => t);
	}
	return {
		ownNodeConfig: o,
		ownNodeType: s
	};
}
function Hs(t) {
	const e = zs();
	di();
	return new (e.resolveRegisteredNodeAfterReplacements(e.getRegisteredNode(t))).klass();
}
var Gs = (t, e) => {
	let n = t;
	for (; null != n && !Ki(n);) {
		if (e(n)) return n;
		n = n.getParent();
	}
	return null;
}, Xs = {
	next: "previous",
	previous: "next"
};
var Qs = class {
	origin;
	constructor(t) {
		this.origin = t;
	}
	[Symbol.iterator]() {
		return Nl({
			hasNext: ll,
			initial: this.getAdjacentCaret(),
			map: (t) => t,
			step: (t) => t.getAdjacentCaret()
		});
	}
	getAdjacentCaret() {
		return dl(this.getNodeAtCaret(), this.direction);
	}
	getSiblingCaret() {
		return dl(this.origin, this.direction);
	}
	remove() {
		const t = this.getNodeAtCaret();
		return t && t.remove(), this;
	}
	replaceOrInsert(t, e) {
		const n = this.getNodeAtCaret();
		return t.is(this.origin) || t.is(n) || (null === n ? this.insert(t) : n.replace(t, e)), this;
	}
	splice(e, n, r = "next") {
		const i = r === this.direction ? n : Array.from(n).reverse();
		let o = this;
		const s = this.getParentAtCaret(), l = /* @__PURE__ */ new Map();
		for (let t = o.getAdjacentCaret(); null !== t && l.size < e; t = t.getAdjacentCaret()) {
			const e = t.origin.getWritable();
			l.set(e.getKey(), e);
		}
		for (const e of i) {
			if (l.size > 0) {
				const n = o.getNodeAtCaret();
				if (n) if (l.delete(n.getKey()), l.delete(e.getKey()), n.is(e) || o.origin.is(e));
				else {
					const t = e.getParent();
					t && t.is(s) && e.remove(), n.replace(e);
				}
				else null === n && t$1(263, Array.from(l).join(" "));
			} else o.insert(e);
			o = dl(e, this.direction);
		}
		for (const t of l.values()) t.remove();
		return this;
	}
};
var Zs = class Zs extends Qs {
	type = "child";
	getLatest() {
		const t = this.origin.getLatest();
		return t === this.origin ? this : pl(t, this.direction);
	}
	getParentCaret(t = "root") {
		return dl(nl(this.getParentAtCaret(), t), this.direction);
	}
	getFlipped() {
		const t = el(this.direction);
		return dl(this.getNodeAtCaret(), t) || pl(this.origin, t);
	}
	getParentAtCaret() {
		return this.origin;
	}
	getChildCaret() {
		return this;
	}
	isSameNodeCaret(t) {
		return t instanceof Zs && this.direction === t.direction && this.origin.is(t.origin);
	}
	isSamePointCaret(t) {
		return this.isSameNodeCaret(t);
	}
};
var tl = {
	root: Ki,
	shadowRoot: Ss
};
function el(t) {
	return Xs[t];
}
function nl(t, e = "root") {
	return tl[e](t) ? null : t;
}
var rl = class rl extends Qs {
	type = "sibling";
	getLatest() {
		const t = this.origin.getLatest();
		return t === this.origin ? this : dl(t, this.direction);
	}
	getSiblingCaret() {
		return this;
	}
	getParentAtCaret() {
		return this.origin.getParent();
	}
	getChildCaret() {
		return Pi(this.origin) ? pl(this.origin, this.direction) : null;
	}
	getParentCaret(t = "root") {
		return dl(nl(this.getParentAtCaret(), t), this.direction);
	}
	getFlipped() {
		const t = el(this.direction);
		return dl(this.getNodeAtCaret(), t) || pl(this.origin.getParentOrThrow(), t);
	}
	isSamePointCaret(t) {
		return t instanceof rl && this.direction === t.direction && this.origin.is(t.origin);
	}
	isSameNodeCaret(t) {
		return (t instanceof rl || t instanceof il) && this.direction === t.direction && this.origin.is(t.origin);
	}
};
var il = class il extends Qs {
	type = "text";
	offset;
	constructor(t, e) {
		super(t), this.offset = e;
	}
	getLatest() {
		const t = this.origin.getLatest();
		return t === this.origin ? this : hl(t, this.direction, this.offset);
	}
	getParentAtCaret() {
		return this.origin.getParent();
	}
	getChildCaret() {
		return null;
	}
	getParentCaret(t = "root") {
		return dl(nl(this.getParentAtCaret(), t), this.direction);
	}
	getFlipped() {
		return hl(this.origin, el(this.direction), this.offset);
	}
	isSamePointCaret(t) {
		return t instanceof il && this.direction === t.direction && this.origin.is(t.origin) && this.offset === t.offset;
	}
	isSameNodeCaret(t) {
		return (t instanceof rl || t instanceof il) && this.direction === t.direction && this.origin.is(t.origin);
	}
	getSiblingCaret() {
		return dl(this.origin, this.direction);
	}
};
function ol(t) {
	return t instanceof il;
}
function ll(t) {
	return t instanceof rl;
}
function cl(t) {
	return t instanceof Zs;
}
var al = {
	next: class extends il {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getNextSibling();
		}
		insert(t) {
			return this.origin.insertAfter(t), this;
		}
	},
	previous: class extends il {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getPreviousSibling();
		}
		insert(t) {
			return this.origin.insertBefore(t), this;
		}
	}
}, ul = {
	next: class extends rl {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getNextSibling();
		}
		insert(t) {
			return this.origin.insertAfter(t), this;
		}
	},
	previous: class extends rl {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getPreviousSibling();
		}
		insert(t) {
			return this.origin.insertBefore(t), this;
		}
	}
}, fl = {
	next: class extends Zs {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getFirstChild();
		}
		insert(t) {
			return this.origin.splice(0, 0, [t]), this;
		}
	},
	previous: class extends Zs {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getLastChild();
		}
		insert(t) {
			return this.origin.splice(this.origin.getChildrenSize(), 0, [t]), this;
		}
	}
};
function dl(t, e) {
	return t ? new ul[e](t) : null;
}
function hl(t, e, n) {
	return t ? new al[e](t, gl(t, n)) : null;
}
function gl(t, n, r = "error") {
	const i = t.getTextContentSize();
	let o = "next" === n ? i : "previous" === n ? 0 : n;
	return (o < 0 || o > i) && ("clamp" !== r && e(284, String(n), String(i), t.getKey()), o = o < 0 ? 0 : i), o;
}
function _l(t, e) {
	return new Cl(t, e);
}
function pl(t, e) {
	return Pi(t) ? new fl[e](t) : null;
}
function yl(t) {
	return t && t.getChildCaret() || t;
}
function ml(t) {
	return t && yl(t.getAdjacentCaret());
}
var xl = class xl {
	type = "node-caret-range";
	direction;
	anchor;
	focus;
	constructor(t, e, n) {
		this.anchor = t, this.focus = e, this.direction = n;
	}
	getLatest() {
		const t = this.anchor.getLatest(), e = this.focus.getLatest();
		return t === this.anchor && e === this.focus ? this : new xl(t, e, this.direction);
	}
	isCollapsed() {
		return this.anchor.isSamePointCaret(this.focus);
	}
	getTextSlices() {
		const t = (t) => {
			const e = this[t].getLatest();
			return ol(e) ? function(t, e) {
				const { direction: n, origin: r } = t;
				return _l(t, gl(r, "focus" === e ? el(n) : n) - t.offset);
			}(e, t) : null;
		}, e = t("anchor"), n = t("focus");
		if (e && n) {
			const { caret: t } = e, { caret: r } = n;
			if (t.isSameNodeCaret(r)) return [_l(t, r.offset - t.offset), null];
		}
		return [e, n];
	}
	iterNodeCarets(t = "root") {
		const e = ol(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), n = this.focus.getLatest(), r = ol(n), i = (e) => e.isSameNodeCaret(n) ? null : ml(e) || e.getParentCaret(t);
		return Nl({
			hasNext: (t) => null !== t && !(r && n.isSameNodeCaret(t)),
			initial: e.isSameNodeCaret(n) ? null : i(e),
			map: (t) => t,
			step: i
		});
	}
	[Symbol.iterator]() {
		return this.iterNodeCarets("root");
	}
};
var Cl = class {
	type = "slice";
	caret;
	distance;
	constructor(t, e) {
		this.caret = t, this.distance = e;
	}
	getSliceIndices() {
		const { distance: t, caret: { offset: e } } = this, n = e + t;
		return n < e ? [n, e] : [e, n];
	}
	getTextContent() {
		const [t, e] = this.getSliceIndices();
		return this.caret.origin.getTextContent().slice(t, e);
	}
	getTextContentSize() {
		return Math.abs(this.distance);
	}
	removeTextSlice() {
		const { caret: { origin: t, direction: e } } = this, [n, r] = this.getSliceIndices(), i = t.getTextContent();
		return hl(t.setTextContent(i.slice(0, n) + i.slice(r)), e, n);
	}
};
function vl(t) {
	return Tl(t, dl(zo(), t.direction));
}
function kl(t) {
	return Tl(t, t);
}
function Tl(e, n) {
	return e.direction !== n.direction && t$1(265), new xl(e, n, e.direction);
}
function Nl(t) {
	const { initial: e, hasNext: n, step: r, map: i } = t;
	let o = e;
	return {
		[Symbol.iterator]() {
			return this;
		},
		next() {
			if (!n(o)) return {
				done: !0,
				value: void 0
			};
			const t = {
				done: !1,
				value: i(o)
			};
			return o = r(o), t;
		}
	};
}
function bl(e, n) {
	const r = Ml(e.origin, n.origin);
	switch (null === r && t$1(275, e.origin.getKey(), n.origin.getKey()), r.type) {
		case "same": {
			const t = "text" === e.type, r = "text" === n.type;
			return t && r ? function(t, e) {
				return Math.sign(t - e);
			}(e.offset, n.offset) : e.type === n.type ? 0 : t ? -1 : r ? 1 : "child" === e.type ? -1 : 1;
		}
		case "ancestor": return "child" === e.type ? -1 : 1;
		case "descendant": return "child" === n.type ? 1 : -1;
		case "branch": return wl(r);
	}
}
function wl(t) {
	const { a: e, b: n } = t, r = e.__key, i = n.__key;
	let o = e, s = n;
	for (; o && s; o = o.getNextSibling(), s = s.getNextSibling()) {
		if (o.__key === i) return -1;
		if (s.__key === r) return 1;
	}
	return null === o ? 1 : -1;
}
function El(t, e) {
	return e.is(t);
}
function Ol(t) {
	return Pi(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
}
function Ml(e, n) {
	if (e.is(n)) return {
		commonAncestor: e,
		type: "same"
	};
	const r = /* @__PURE__ */ new Map();
	for (let [t, n] = Ol(e); t; n = t, t = t.getParent()) r.set(t, n);
	for (let [i, o] = Ol(n); i; o = i, i = i.getParent()) {
		const s = r.get(i);
		if (void 0 !== s) return null === s ? (El(e, i) || t$1(276), {
			commonAncestor: i,
			type: "ancestor"
		}) : null === o ? (El(n, i) || t$1(277), {
			commonAncestor: i,
			type: "descendant"
		}) : ((Pi(s) || El(e, s)) && (Pi(o) || El(n, o)) && i.is(s.getParent()) && i.is(o.getParent()) || t$1(278), {
			a: s,
			b: o,
			commonAncestor: i,
			type: "branch"
		});
	}
	return null;
}
function Al(e, n) {
	const { type: r, key: i, offset: o } = e, s = Ns(e.key);
	return "text" === r ? (yr(s) || t$1(266, s.getType(), i), hl(s, n, o)) : (Pi(s) || t$1(267, s.getType(), i), Ul(s, e.offset, n));
}
function Pl(e, n) {
	const { origin: r, direction: i } = n, o = "next" === i;
	ol(n) ? e.set(r.getKey(), n.offset, "text") : ll(n) ? yr(r) ? e.set(r.getKey(), gl(r, i), "text") : e.set(r.getParentOrThrow().getKey(), r.getIndexWithinParent() + (o ? 1 : 0), "element") : (cl(n) && Pi(r) || t$1(268), e.set(r.getKey(), o ? 0 : r.getChildrenSize(), "element"));
}
function Dl(t) {
	const e = $r(), n = wr(e) ? e : Wr();
	return Fl(n, t), Bo(n), n;
}
function Fl(t, e) {
	Pl(t.anchor, e.anchor), Pl(t.focus, e.focus);
}
function Ll(t) {
	const { anchor: e, focus: n } = t, r = Al(e, "next"), i = Al(n, "next"), o = bl(r, i) <= 0 ? "next" : "previous";
	return Tl(Jl(r, o), Jl(i, o));
}
function Il(t) {
	const { direction: e, origin: n } = t, r = dl(n, el(e)).getNodeAtCaret();
	return r ? dl(r, e) : pl(n.getParentOrThrow(), e);
}
function Kl(t, e = "root") {
	const n = [t];
	for (let r = cl(t) ? t.getParentCaret(e) : t.getSiblingCaret(); null !== r; r = r.getParentCaret(e)) n.push(Il(r));
	return n;
}
function zl(t) {
	return !!t && t.origin.isAttached();
}
function Rl(e, n = "removeEmptySlices") {
	if (e.isCollapsed()) return e;
	const r = "root", i = "next";
	let o = n;
	const s = jl(e, i), l = Kl(s.anchor, r), c = Kl(s.focus.getFlipped(), r), a = /* @__PURE__ */ new Set(), u = [];
	for (const t of s.iterNodeCarets(r)) if (cl(t)) a.add(t.origin.getKey());
	else if (ll(t)) {
		const { origin: e } = t;
		Pi(e) && !a.has(e.getKey()) || u.push(e);
	}
	for (const t of u) t.remove();
	for (const t of s.getTextSlices()) {
		if (!t) continue;
		const { origin: e } = t.caret, n = e.getTextContentSize(), r = Il(dl(e, i)), s = e.getMode();
		if (Math.abs(t.distance) === n && "removeEmptySlices" === o || "token" === s && 0 !== t.distance) r.remove();
		else if (0 !== t.distance) {
			o = "removeEmptySlices";
			let e = t.removeTextSlice();
			const n = t.caret.origin;
			if ("segmented" === s) {
				const t = e.origin, n = pr(t.getTextContent()).setStyle(t.getStyle()).setFormat(t.getFormat());
				r.replaceOrInsert(n), e = hl(n, i, e.offset);
			}
			n.is(l[0].origin) && (l[0] = e), n.is(c[0].origin) && (c[0] = e.getFlipped());
		}
	}
	let f, d;
	for (const t of l) if (zl(t)) {
		f = Bl(t);
		break;
	}
	for (const t of c) if (zl(t)) {
		d = Bl(t);
		break;
	}
	const h = function(t, e, n) {
		if (!t || !e) return null;
		const r = t.getParentAtCaret(), i = e.getParentAtCaret();
		if (!r || !i) return null;
		const o = r.getParents().reverse();
		o.push(r);
		const s = i.getParents().reverse();
		s.push(i);
		const l = Math.min(o.length, s.length);
		let c;
		for (c = 0; c < l && o[c] === s[c]; c++);
		const a = (t, e) => {
			let n;
			for (let r = c; r < t.length; r++) {
				const i = t[r];
				if (Ss(i)) return;
				!n && e(i) && (n = i);
			}
			return n;
		}, u = a(o, Ks), f = u && a(s, (t) => n.has(t.getKey()) && Ks(t));
		return u && f ? [u, f] : null;
	}(f, d, a);
	if (h) {
		const [t, e] = h;
		pl(t, "previous").splice(0, e.getChildren());
		let n = e.getParent();
		for (e.remove(!0); n && n.isEmpty();) {
			const t = n;
			n = n.getParent(), t.remove(!0);
		}
	}
	const g = [
		f,
		d,
		...l,
		...c
	].find(zl);
	if (g) return kl(Jl(Bl(g), e.direction));
	t$1(269, JSON.stringify(l.map((t) => t.origin.__key)));
}
function Bl(t) {
	const e = function(t) {
		let e = t;
		for (; cl(e);) {
			const t = ml(e);
			if (!cl(t)) break;
			e = t;
		}
		return e;
	}(t.getLatest()), { direction: n } = e;
	if (yr(e.origin)) return ol(e) ? e : hl(e.origin, n, n);
	const r = e.getAdjacentCaret();
	return ll(r) && yr(r.origin) ? hl(r.origin, n, el(n)) : e;
}
function Wl(t) {
	return ol(t) && t.offset !== gl(t.origin, t.direction);
}
function Jl(t, e) {
	return t.direction === e ? t : t.getFlipped();
}
function jl(t, e) {
	return t.direction === e ? t : Tl(Jl(t.focus, e), Jl(t.anchor, e));
}
function Ul(t, e, n) {
	let r = pl(t, "next");
	for (let t = 0; t < e; t++) {
		const t = r.getAdjacentCaret();
		if (null === t) break;
		r = t;
	}
	return Jl(r, n);
}
function Vl(e) {
	const { origin: n, offset: r, direction: i } = e;
	if (r === gl(n, i)) return e.getSiblingCaret();
	if (r === gl(n, el(i))) return Il(e.getSiblingCaret());
	const [o] = n.splitText(r);
	return yr(o) || t$1(281), Jl(dl(o, "next"), i);
}
function Yl(t, e) {
	return !0;
}
function ql(t, { $copyElementNode: e = vs, $splitTextPointCaretNext: n = Vl, rootMode: r = "shadowRoot", $shouldSplit: i = Yl } = {}) {
	if (ol(t)) return n(t);
	const o = t.getParentCaret(r);
	if (o) {
		const { origin: n } = o;
		if (cl(t) && (!n.canBeEmpty() || !i(n, "first"))) return Il(o);
		const r = function(t) {
			const e = [];
			for (let n = t.getAdjacentCaret(); n; n = n.getAdjacentCaret()) e.push(n.origin);
			return e;
		}(t);
		(r.length > 0 || n.canBeEmpty() && i(n, "last")) && o.insert(e(n).splice(0, 0, r));
	}
	return o;
}
function Hl(t) {
	return t;
}
function Gl(...t) {
	return t;
}
function Ql(t) {
	return t;
}
function Zl(t, e) {
	if (!e || t === e) return t;
	for (const n in e) if (t[n] !== e[n]) return {
		...t,
		...e
	};
	return t;
}
function tc(...t) {
	const e = [];
	for (const n of t) if (n && "string" == typeof n) for (const [t] of n.matchAll(/\S+/g)) e.push(t);
	return e;
}
function ec(t, ...e) {
	const n = tc(...e);
	n.length > 0 && t.classList.add(...n);
}
function nc(t, ...e) {
	const n = tc(...e);
	n.length > 0 && t.classList.remove(...n);
}
function rc(...t) {
	return () => {
		for (let e = t.length - 1; e >= 0; e--) t[e]();
		t.length = 0;
	};
}
//#endregion
//#region node_modules/.pnpm/@lexical+selection@0.42.0/node_modules/@lexical/selection/LexicalSelection.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function K(e, ...t) {
	const n = new URL("https://lexical.dev/docs/error"), o = new URLSearchParams();
	o.append("code", e);
	for (const e of t) o.append("v", e);
	throw n.search = o.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var E$4 = /* @__PURE__ */ new Map();
function B$2(e, t) {
	const n = e.getRootElement();
	if (null === n) return [];
	const o = n.getBoundingClientRect(), l = getComputedStyle(n), r = parseFloat(l.paddingLeft) + parseFloat(l.paddingRight), s = Array.from(t.getClientRects());
	let i, c = s.length;
	s.sort((e, t) => {
		const n = e.top - t.top;
		return Math.abs(n) <= 3 ? e.left - t.left : n;
	});
	for (let e = 0; e < c; e++) {
		const t = s[e], n = i && i.top <= t.top && i.top + i.height > t.top && i.left + i.width > t.left, l = t.width + r === o.width;
		n || l ? (s.splice(e--, 1), c--) : i = t;
	}
	return s;
}
function F$3(e) {
	const t = {};
	if (!e) return t;
	const n = e.split(";");
	for (const e of n) if ("" !== e) {
		const [n, o] = e.split(/:([^]+)/);
		n && o && (t[n.trim()] = o.trim());
	}
	return t;
}
function b$4(e) {
	let t = E$4.get(e);
	return void 0 === t && (t = F$3(e), E$4.set(e, t)), t;
}
function R$3(e) {
	let t = "";
	for (const n in e) n && (t += `${n}: ${e[n]};`);
	return t;
}
function z$2(e) {
	const n = zs().getElementByKey(e.getKey());
	if (null === n) return null;
	const o = n.ownerDocument.defaultView;
	return null === o ? null : o.getComputedStyle(n);
}
function O$5(e) {
	return z$2(Ki(e) ? e : e.getParentOrThrow());
}
function A$2(e) {
	const t = O$5(e);
	return null !== t && "rtl" === t.direction;
}
function M$3(e, t, n = "self") {
	const o = e.getStartEndPoints();
	if (t.isSelected(e) && !So(t) && null !== o) {
		const [l, r] = o, s = e.isBackward(), i = l.getNode(), u = r.getNode(), g = t.is(i), a = t.is(u);
		if (g || a) {
			const [o, l] = Ar(e), r = i.is(u), g = t.is(s ? u : i), a = t.is(s ? i : u);
			let d, p = 0;
			if (r) p = o > l ? l : o, d = o > l ? o : l;
			else if (g) p = s ? l : o, d = void 0;
			else if (a) p = 0, d = s ? o : l;
			const h = t.__text.slice(p, d);
			h !== t.__text && ("clone" === n && (t = js(t)), t.__text = h);
		}
	}
	return t;
}
function _$2(e) {
	if ("text" === e.type) return e.offset === e.getNode().getTextContentSize();
	const t = e.getNode();
	return Pi(t) || K(177), e.offset === t.getChildrenSize();
}
function $$2(e) {
	const t = e.getStyle(), n = F$3(t);
	E$4.set(t, n);
}
function D$3(t, n) {
	(wr(t) ? t.isCollapsed() : yr(t) || Pi(t)) || K(280);
	const o = b$4(wr(t) ? t.style : yr(t) ? t.getStyle() : t.getTextStyle()), r = Object.entries(n).reduce((e, [n, l]) => ("function" == typeof l ? e[n] = l(o[n], t) : null === l ? delete e[n] : e[n] = l, e), { ...o }), s = R$3(r);
	wr(t) || yr(t) ? t.setStyle(s) : t.setTextStyle(s), E$4.set(s, r);
}
function U$1(e, t) {
	if (wr(e) && e.isCollapsed()) {
		D$3(e, t);
		const n = e.anchor.getNode();
		Pi(n) && n.isEmpty() && D$3(n, t);
	}
	j$1((e) => {
		D$3(e, t);
	});
	const n = e.getNodes();
	if (n.length > 0) {
		const e = /* @__PURE__ */ new Set();
		for (const o of n) {
			if (!Pi(o) || !o.canBeEmpty() || 0 !== o.getChildrenSize()) continue;
			const n = o.getKey();
			e.has(n) || (e.add(n), D$3(o, t));
		}
	}
}
function j$1(t) {
	const n = $r();
	if (!n) return;
	const i = /* @__PURE__ */ new Map(), c = (e) => i.get(e.getKey()) || [0, e.getTextContentSize()];
	if (wr(n)) for (const e of Ll(n).getTextSlices()) e && i.set(e.caret.origin.getKey(), e.getSliceIndices());
	const f = n.getNodes();
	for (const n of f) {
		if (!yr(n) || !n.canHaveFormat()) continue;
		const [o, l] = c(n);
		if (l !== o) if (So(n) || 0 === o && l === n.getTextContentSize()) t(n);
		else t(n.splitText(o, l)[0 === o ? 0 : 1]);
	}
	wr(n) && "text" === n.anchor.type && "text" === n.focus.type && n.anchor.key === n.focus.key && H$2(n);
}
function H$2(e) {
	if (e.isBackward()) {
		const { anchor: t, focus: n } = e, { key: o, offset: l, type: r } = t;
		t.set(n.key, n.offset, n.type), n.set(o, l, r);
	}
}
function V$1(e, t) {
	const n = e.getFormatType(), o = e.getIndent();
	n !== t.getFormatType() && t.setFormat(n), o !== t.getIndent() && t.setIndent(o);
}
function W$1(e, t, n = V$1) {
	if (null === e) return;
	const l = e.getStartEndPoints(), r = /* @__PURE__ */ new Map();
	let s = null;
	if (l) {
		const [e, t] = l;
		s = Wr(), s.anchor.set(e.key, e.offset, e.type), s.focus.set(t.key, t.offset, t.type);
		const n = Gs(e.getNode(), Ks), o = Gs(t.getNode(), Ks);
		Pi(n) && r.set(n.getKey(), n), Pi(o) && r.set(o.getKey(), o);
	}
	for (const t of e.getNodes()) if (Pi(t) && Ks(t)) r.set(t.getKey(), t);
	else if (null === l) {
		const e = Gs(t, Ks);
		Pi(e) && r.set(e.getKey(), e);
	}
	for (const [e, o] of r) {
		const l = t();
		n(o, l), o.replace(l, !0), s && (e === s.anchor.key && s.anchor.set(l.getKey(), s.anchor.offset, s.anchor.type), e === s.focus.key && s.focus.set(l.getKey(), s.focus.offset, s.focus.type));
	}
	s && e.is($r()) && Bo(s);
}
function Q$2(e) {
	const t = Y$2(e);
	return null !== t && "vertical-rl" === t.writingMode;
}
function Y$2(e) {
	const t = e.anchor.getNode();
	return Pi(t) ? z$2(t) : O$5(t);
}
function Z$1(e, t) {
	let n = Q$2(e) ? !t : t;
	te(e) && (n = !n);
	const o = Al(e.focus, n ? "previous" : "next");
	if (Wl(o)) return !1;
	for (const e of vl(o)) {
		if (cl(e)) return !e.origin.isInline();
		if (!Pi(e.origin)) {
			if (Li(e.origin)) return !0;
			break;
		}
	}
	return !1;
}
function ee$1(e, t, n, o) {
	e.modify(t ? "extend" : "move", n, o);
}
function te(e) {
	const t = Y$2(e);
	return null !== t && "rtl" === t.direction;
}
function ne$1(e, t, n) {
	const o = te(e);
	let l;
	l = Q$2(e) || o ? !n : n, ee$1(e, t, l, "character");
}
function oe$1(e, t, n) {
	const o = b$4(e.getStyle());
	return null !== o && o[t] || n;
}
function le$1(t, n, o = "") {
	let r = null;
	const s = t.getNodes(), i = t.anchor, c = t.focus, f = t.isBackward(), u = f ? c.offset : i.offset, g = f ? c.getNode() : i.getNode();
	if (wr(t) && t.isCollapsed() && "" !== t.style) {
		const e = b$4(t.style);
		if (null !== e && n in e) return e[n];
	}
	for (let t = 0; t < s.length; t++) {
		const l = s[t];
		if ((0 === t || 0 !== u || !l.is(g)) && yr(l)) {
			const e = oe$1(l, n, o);
			if (null === r) r = e;
			else if (r !== e) {
				r = "";
				break;
			}
		}
	}
	return null === r ? o : r;
}
//#endregion
//#region node_modules/.pnpm/@lexical+utils@0.42.0/node_modules/@lexical/utils/LexicalUtils.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function k(t, ...e) {
	const n = new URL("https://lexical.dev/docs/error"), o = new URLSearchParams();
	o.append("code", t);
	for (const t of e) o.append("v", t);
	throw n.search = o.toString(), Error(`Minified Lexical error #${t}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var $$1 = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement, I$1 = $$1 && "documentMode" in document ? document.documentMode : null;
$$1 && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
var D$2 = $$1 && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
!(!$$1 || !("InputEvent" in window) || I$1) && "getTargetRanges" in new window.InputEvent("input");
$$1 && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
$$1 && /iPad|iPhone|iPod/.test(navigator.userAgent) && window.MSStream;
$$1 && /Android/.test(navigator.userAgent);
$$1 && /^(?=.*Chrome).*/i.test(navigator.userAgent);
$$1 && /AppleWebKit\/[\d.]+/.test(navigator.userAgent);
function G(t) {
	return `${t}px`;
}
var q$1 = {
	attributes: !0,
	characterData: !0,
	childList: !0,
	subtree: !0
};
function J$1(e, n, o) {
	let r = null, i = null, l = null, s = [];
	const u = document.createElement("div");
	function c() {
		null === r && k(182), null === i && k(183);
		const { left: t, top: l } = i.getBoundingClientRect(), c = B$2(e, n);
		var a, f;
		u.isConnected || (f = u, (a = i).insertBefore(f, a.firstChild));
		let d = !1;
		for (let e = 0; e < c.length; e++) {
			const n = c[e], o = s[e] || document.createElement("div"), r = o.style;
			"absolute" !== r.position && (r.position = "absolute", d = !0);
			const i = G(n.left - t);
			r.left !== i && (r.left = i, d = !0);
			const a = G(n.top - l);
			r.top !== a && (o.style.top = a, d = !0);
			const f = G(n.width);
			r.width !== f && (o.style.width = f, d = !0);
			const g = G(n.height);
			r.height !== g && (o.style.height = g, d = !0), o.parentNode !== u && (u.append(o), d = !0), s[e] = o;
		}
		for (; s.length > c.length;) s.pop();
		d && o(s);
	}
	function a() {
		i = null, r = null, null !== l && l.disconnect(), l = null, u.remove();
		for (const t of s) t.remove();
		s = [];
	}
	u.style.position = "relative";
	const f = e.registerRootListener(function n() {
		const o = e.getRootElement();
		if (null === o) return a();
		const s = o.parentElement;
		if (!Ps(s)) return a();
		a(), r = o, i = s, l = new MutationObserver((t) => {
			const o = e.getRootElement(), l = o && o.parentElement;
			if (o !== r || l !== i) return n();
			for (const e of t) if (!u.contains(e.target)) return c();
		}), l.observe(s, q$1), c();
	});
	return () => {
		f(), a();
	};
}
function Q$1(t, e, n) {
	if ("text" !== t.type && Pi(e)) {
		const o = e.getDOMSlot(n);
		return [o.element, o.getFirstChildOffset() + t.offset];
	}
	return [To(n) || n, t.offset];
}
function X$1(t) {
	for (const e of t) {
		const t = e.style;
		"Highlight" !== t.background && (t.background = "Highlight"), "HighlightText" !== t.color && (t.color = "HighlightText"), t.marginTop !== G(-1.5) && (t.marginTop = G(-1.5)), t.paddingTop !== G(4) && (t.paddingTop = G(4)), t.paddingBottom !== G(0) && (t.paddingBottom = G(0));
	}
}
function Y$1(t, r = X$1) {
	let i = null, l = null, s = null, u = null, c = null, a = null, f = () => {};
	function d(e) {
		e.read(() => {
			const e = $r();
			if (!wr(e)) return i = null, s = null, u = null, a = null, f(), void (f = () => {});
			const [d, g] = function(t) {
				const e = t.getStartEndPoints();
				return t.isBackward() ? [e[1], e[0]] : e;
			}(e), p = d.getNode(), m = p.getKey(), h = d.offset, v = g.getNode(), y = v.getKey(), w = g.offset, x = t.getElementByKey(m), E = t.getElementByKey(y), S = null === i || x !== l || h !== s || m !== i.getKey(), C = null === u || E !== c || w !== a || y !== u.getKey();
			if ((S || C) && null !== x && null !== E) {
				const e = function(t, e, n, o, r, i, l) {
					const s = (t._window ? t._window.document : document).createRange();
					return s.setStart(...Q$1(e, n, o)), s.setEnd(...Q$1(r, i, l)), s;
				}(t, d, p, x, g, v, E);
				f(), f = J$1(t, e, r);
			}
			i = p, l = x, s = h, u = v, c = E, a = w;
		});
	}
	return d(t.getEditorState()), rc(t.registerUpdateListener(({ editorState: t }) => d(t)), () => {
		f();
	});
}
function Z(t, e) {
	let n = null;
	const o = () => {
		const o = getSelection(), r = o && o.anchorNode, i = t.getRootElement();
		null !== r && null !== i && i.contains(r) ? null !== n && (n(), n = null) : null === n && (n = Y$1(t, e));
	};
	return t.registerRootListener((t) => {
		if (t) {
			const e = t.ownerDocument;
			return e.addEventListener("selectionchange", o), o(), () => {
				null !== n && n(), e.removeEventListener("selectionchange", o);
			};
		}
	});
}
var et$1 = $$1, st$1 = D$2;
function gt$1(t) {
	return t ? t.getAdjacentCaret() : null;
}
function St$2(t, e) {
	let n = t;
	for (; null != n;) {
		if (n instanceof e) return n;
		n = n.getParent();
	}
	return null;
}
function Ct$2(t) {
	const e = Gs(t, (t) => Pi(t) && !t.isInline());
	return Pi(e) || k(4, t.__key), e;
}
function bt$2(t) {
	const e = $r() || Vr();
	let r;
	if (wr(e)) r = Al(e.focus, "next");
	else {
		if (null != e) {
			const t = e.getNodes(), n = t[t.length - 1];
			n && (r = dl(n, "next"));
		}
		r = r || pl(zo(), "previous").getFlipped().insert(Vi());
	}
	const i = Lt$2(t, r), s = ml(i);
	return Dl(kl(cl(s) ? Bl(s) : i)), t.getLatest();
}
function Lt$2(t, e, n) {
	let o = Jl(e, "next");
	for (let t = o; t; t = ql(t, n)) o = t;
	return ol(o) && k(283), o.insert(t.isInline() ? Vi().append(t) : t), Jl(dl(t.getLatest(), "next"), e.direction);
}
function Mt$1(t, e) {
	return null !== t && Object.getPrototypeOf(t).constructor.name === e.name;
}
function Bt$1(t) {
	const e = $r();
	if (!wr(e)) return !1;
	const i = /* @__PURE__ */ new Set(), l = e.getNodes();
	for (let e = 0; e < l.length; e++) {
		const n = l[e], o = n.getKey();
		if (i.has(o)) continue;
		const u = Gs(n, (t) => Pi(t) && !t.isInline());
		if (null === u) continue;
		const c = u.getKey();
		u.canIndent() && !i.has(c) && (i.add(c), t(u));
	}
	return i.size > 0;
}
var Kt$2 = !(st$1 || !et$1) && void 0;
function kt$2(t, e = !1) {
	let n = 1;
	if (function() {
		if (void 0 === Kt$2) {
			const t = document.createElement("div");
			t.style.cssText = "position: absolute; opacity: 0; width: 100px; left: -1000px;", document.body.appendChild(t);
			const e = t.getBoundingClientRect();
			t.style.setProperty("zoom", "2"), Kt$2 = t.getBoundingClientRect().width === e.width, document.body.removeChild(t);
		}
		return Kt$2;
	}() || e) for (; t;) n *= Number(window.getComputedStyle(t).getPropertyValue("zoom")), t = t.parentElement;
	return n;
}
//#endregion
//#region node_modules/.pnpm/lexical-code-no-prism@0.41.0_@lexical+utils@0.42.0_lexical@0.42.0/node_modules/lexical-code-no-prism/dist/index.mjs
function hasChildDOMNodeTag(node, tagName) {
	for (const child of node.childNodes) {
		if (Ps(child) && child.tagName === tagName) return true;
		hasChildDOMNodeTag(child, tagName);
	}
	return false;
}
var LANGUAGE_DATA_ATTRIBUTE = "data-language";
var HIGHLIGHT_LANGUAGE_DATA_ATTRIBUTE = "data-highlight-language";
var THEME_DATA_ATTRIBUTE = "data-theme";
var CodeNode = class _CodeNode extends Ai {
	static getType() {
		return "code";
	}
	static clone(node) {
		return new _CodeNode(node.__language, node.__key);
	}
	constructor(language, key) {
		super(key);
		this.__language = language || void 0;
		this.__isSyntaxHighlightSupported = false;
		this.__theme = void 0;
	}
	afterCloneFrom(prevNode) {
		super.afterCloneFrom(prevNode);
		this.__language = prevNode.__language;
		this.__theme = prevNode.__theme;
		this.__isSyntaxHighlightSupported = prevNode.__isSyntaxHighlightSupported;
	}
	createDOM(config) {
		const element = document.createElement("code");
		ec(element, config.theme.code);
		element.setAttribute("spellcheck", "false");
		const language = this.getLanguage();
		if (language) {
			element.setAttribute(LANGUAGE_DATA_ATTRIBUTE, language);
			if (this.getIsSyntaxHighlightSupported()) element.setAttribute(HIGHLIGHT_LANGUAGE_DATA_ATTRIBUTE, language);
		}
		const theme = this.getTheme();
		if (theme) element.setAttribute(THEME_DATA_ATTRIBUTE, theme);
		const style = this.getStyle();
		if (style) element.setAttribute("style", style);
		return element;
	}
	updateDOM(prevNode, dom, config) {
		const language = this.__language;
		const prevLanguage = prevNode.__language;
		if (language) {
			if (language !== prevLanguage) dom.setAttribute(LANGUAGE_DATA_ATTRIBUTE, language);
		} else if (prevLanguage) dom.removeAttribute(LANGUAGE_DATA_ATTRIBUTE);
		const isSyntaxHighlightSupported = this.__isSyntaxHighlightSupported;
		if (prevNode.__isSyntaxHighlightSupported && prevLanguage) if (isSyntaxHighlightSupported && language) {
			if (language !== prevLanguage) dom.setAttribute(HIGHLIGHT_LANGUAGE_DATA_ATTRIBUTE, language);
		} else dom.removeAttribute(HIGHLIGHT_LANGUAGE_DATA_ATTRIBUTE);
		else if (isSyntaxHighlightSupported && language) dom.setAttribute(HIGHLIGHT_LANGUAGE_DATA_ATTRIBUTE, language);
		const theme = this.__theme;
		const prevTheme = prevNode.__theme;
		if (theme) {
			if (theme !== prevTheme) dom.setAttribute(THEME_DATA_ATTRIBUTE, theme);
		} else if (prevTheme) dom.removeAttribute(THEME_DATA_ATTRIBUTE);
		const style = this.__style;
		const prevStyle = prevNode.__style;
		if (style) {
			if (style !== prevStyle) dom.setAttribute("style", style);
		} else if (prevStyle) dom.removeAttribute("style");
		return false;
	}
	exportDOM(editor) {
		const element = document.createElement("pre");
		ec(element, editor._config.theme.code);
		element.setAttribute("spellcheck", "false");
		const language = this.getLanguage();
		if (language) {
			element.setAttribute(LANGUAGE_DATA_ATTRIBUTE, language);
			if (this.getIsSyntaxHighlightSupported()) element.setAttribute(HIGHLIGHT_LANGUAGE_DATA_ATTRIBUTE, language);
		}
		const theme = this.getTheme();
		if (theme) element.setAttribute(THEME_DATA_ATTRIBUTE, theme);
		const style = this.getStyle();
		if (style) element.setAttribute("style", style);
		return { element };
	}
	static importDOM() {
		return {
			code: (node) => {
				return node.textContent != null && (/\r?\n/.test(node.textContent) || hasChildDOMNodeTag(node, "BR")) ? {
					conversion: $convertPreElement,
					priority: 1
				} : null;
			},
			div: () => ({
				conversion: $convertDivElement,
				priority: 1
			}),
			pre: () => ({
				conversion: $convertPreElement,
				priority: 0
			}),
			table: (node) => {
				if (isGitHubCodeTable(node)) return {
					conversion: $convertTableElement,
					priority: 3
				};
				return null;
			},
			td: (node) => {
				const td = node;
				const table = td.closest("table");
				if (isGitHubCodeCell(td) || table && isGitHubCodeTable(table)) return {
					conversion: convertCodeNoop,
					priority: 3
				};
				return null;
			},
			tr: (node) => {
				const table = node.closest("table");
				if (table && isGitHubCodeTable(table)) return {
					conversion: convertCodeNoop,
					priority: 3
				};
				return null;
			}
		};
	}
	static importJSON(serializedNode) {
		return $createCodeNode().updateFromJSON(serializedNode);
	}
	updateFromJSON(serializedNode) {
		return super.updateFromJSON(serializedNode).setLanguage(serializedNode.language).setTheme(serializedNode.theme);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			language: this.getLanguage(),
			theme: this.getTheme()
		};
	}
	insertNewAfter(selection, restoreSelection = true) {
		const children = this.getChildren();
		const childrenLength = children.length;
		if (childrenLength >= 2 && children[childrenLength - 1].getTextContent() === "\n" && children[childrenLength - 2].getTextContent() === "\n" && selection.isCollapsed() && selection.anchor.key === this.__key && selection.anchor.offset === childrenLength) {
			children[childrenLength - 1].remove();
			children[childrenLength - 2].remove();
			const newElement = Vi();
			this.insertAfter(newElement, restoreSelection);
			return newElement;
		}
		const { anchor, focus } = selection;
		const firstSelectionNode = (anchor.isBefore(focus) ? anchor : focus).getNode();
		if (yr(firstSelectionNode)) {
			let node = $getFirstCodeNodeOfLine(firstSelectionNode);
			const insertNodes = [];
			while (true) if (Sr(node)) {
				insertNodes.push(Cr());
				node = node.getNextSibling();
			} else if ($isCodeHighlightNode(node)) {
				let spaces = 0;
				const text = node.getTextContent();
				const textSize = node.getTextContentSize();
				while (spaces < textSize && text[spaces] === " ") spaces++;
				if (spaces !== 0) insertNodes.push($createCodeHighlightNode(" ".repeat(spaces)));
				if (spaces !== textSize) break;
				node = node.getNextSibling();
			} else break;
			const split = firstSelectionNode.splitText(anchor.offset)[0];
			const x = anchor.offset === 0 ? 0 : 1;
			const index = split.getIndexWithinParent() + x;
			const codeNode = firstSelectionNode.getParentOrThrow();
			const nodesToInsert = [Qn(), ...insertNodes];
			codeNode.splice(index, 0, nodesToInsert);
			const last = insertNodes[insertNodes.length - 1];
			if (last) last.select();
			else if (anchor.offset === 0) split.selectPrevious();
			else split.getNextSibling().selectNext(0, 0);
		}
		if ($isCodeNode(firstSelectionNode)) {
			const { offset } = selection.anchor;
			firstSelectionNode.splice(offset, 0, [Qn()]);
			firstSelectionNode.select(offset + 1, offset + 1);
		}
		return null;
	}
	canIndent() {
		return false;
	}
	collapseAtStart() {
		const paragraph = Vi();
		this.getChildren().forEach((child) => paragraph.append(child));
		this.replace(paragraph);
		return true;
	}
	setLanguage(language) {
		const writable = this.getWritable();
		writable.__language = language || void 0;
		return writable;
	}
	getLanguage() {
		return this.getLatest().__language;
	}
	setIsSyntaxHighlightSupported(isSupported) {
		const writable = this.getWritable();
		writable.__isSyntaxHighlightSupported = isSupported;
		return writable;
	}
	getIsSyntaxHighlightSupported() {
		return this.getLatest().__isSyntaxHighlightSupported;
	}
	setTheme(theme) {
		const writable = this.getWritable();
		writable.__theme = theme || void 0;
		return writable;
	}
	getTheme() {
		return this.getLatest().__theme;
	}
};
function $createCodeNode(language, theme) {
	return Hs(CodeNode).setLanguage(language).setTheme(theme);
}
function $isCodeNode(node) {
	return node instanceof CodeNode;
}
function $convertPreElement(domNode) {
	return { node: $createCodeNode(domNode.getAttribute(LANGUAGE_DATA_ATTRIBUTE)) };
}
function $convertDivElement(domNode) {
	const div = domNode;
	const isCode = isCodeElement(div);
	if (!isCode && !isCodeChildElement(div)) return { node: null };
	return { node: isCode ? $createCodeNode() : null };
}
function $convertTableElement() {
	return { node: $createCodeNode() };
}
function convertCodeNoop() {
	return { node: null };
}
function isCodeElement(div) {
	return div.style.fontFamily.match("monospace") !== null;
}
function isCodeChildElement(node) {
	let parent = node.parentElement;
	while (parent !== null) {
		if (isCodeElement(parent)) return true;
		parent = parent.parentElement;
	}
	return false;
}
function isGitHubCodeCell(cell) {
	return cell.classList.contains("js-file-line");
}
function isGitHubCodeTable(table) {
	return table.classList.contains("js-file-line-container");
}
var CodeHighlightNode = class _CodeHighlightNode extends lr {
	constructor(text = "", highlightType, key) {
		super(text, key);
		this.__highlightType = highlightType;
	}
	static getType() {
		return "code-highlight";
	}
	static clone(node) {
		return new _CodeHighlightNode(node.__text, node.__highlightType || void 0, node.__key);
	}
	getHighlightType() {
		return this.getLatest().__highlightType;
	}
	setHighlightType(highlightType) {
		const self = this.getWritable();
		self.__highlightType = highlightType || void 0;
		return self;
	}
	canHaveFormat() {
		return false;
	}
	createDOM(config) {
		const element = super.createDOM(config);
		ec(element, getHighlightThemeClass(config.theme, this.__highlightType));
		return element;
	}
	updateDOM(prevNode, dom, config) {
		const update = super.updateDOM(prevNode, dom, config);
		const prevClassName = getHighlightThemeClass(config.theme, prevNode.__highlightType);
		const nextClassName = getHighlightThemeClass(config.theme, this.__highlightType);
		if (prevClassName !== nextClassName) {
			if (prevClassName) nc(dom, prevClassName);
			if (nextClassName) ec(dom, nextClassName);
		}
		return update;
	}
	static importJSON(serializedNode) {
		return $createCodeHighlightNode().updateFromJSON(serializedNode);
	}
	updateFromJSON(serializedNode) {
		return super.updateFromJSON(serializedNode).setHighlightType(serializedNode.highlightType);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			highlightType: this.getHighlightType()
		};
	}
	setFormat(format) {
		return this;
	}
	isParentRequired() {
		return true;
	}
	createParentElementNode() {
		return $createCodeNode();
	}
};
function getHighlightThemeClass(theme, highlightType) {
	return highlightType && theme && theme.codeHighlight && theme.codeHighlight[highlightType];
}
function $createCodeHighlightNode(text = "", highlightType) {
	return ks(new CodeHighlightNode(text, highlightType));
}
function $isCodeHighlightNode(node) {
	return node instanceof CodeHighlightNode;
}
function $getLastMatchingCodeNode(anchor, direction) {
	let matchingNode = anchor;
	for (let caret = dl(anchor, direction); caret && ($isCodeHighlightNode(caret.origin) || Sr(caret.origin)); caret = gt$1(caret)) matchingNode = caret.origin;
	return matchingNode;
}
function $getFirstCodeNodeOfLine(anchor) {
	return $getLastMatchingCodeNode(anchor, "previous");
}
Hl({
	name: "@lexical/code",
	nodes: () => [CodeNode, CodeHighlightNode]
});
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/LexicalComposerContext.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var r$2 = createContext(null);
function t(n, e) {
	let r = null;
	return null != n && (r = n[1]), { getTheme: function() {
		return null != e ? e : null != r ? r.getTheme() : null;
	} };
}
function o() {
	const n = useContext(r$2);
	return n ?? function(n, ...e) {
		const r = new URL("https://lexical.dev/docs/error"), t = new URLSearchParams();
		t.append("code", n);
		for (const n of e) t.append("v", n);
		throw r.search = t.toString(), Error(`Minified Lexical error #${n}; visit ${r.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
	}(8), n;
}
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/LexicalComposer.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var m$3 = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement, u$2 = m$3 ? useLayoutEffect : useEffect, p$1 = { tag: Wn };
function f$2({ initialConfig: a, children: c }) {
	const l = useMemo(() => {
		const { theme: t$2, namespace: c, nodes: l, onError: d, editorState: s, html: u } = a, f = t(null, t$2), E = eo({
			editable: a.editable,
			html: u,
			namespace: c,
			nodes: l,
			onError: (e) => d(e, E),
			theme: t$2
		});
		return function(e, t) {
			if (null === t) return;
			if (void 0 === t) e.update(() => {
				const t = zo();
				if (t.isEmpty()) {
					const o = Vi();
					t.append(o);
					const n = m$3 ? document.activeElement : null;
					(null !== $r() || null !== n && n === e.getRootElement()) && o.select();
				}
			}, p$1);
			else if (null !== t) switch (typeof t) {
				case "string": {
					const o = e.parseEditorState(t);
					e.setEditorState(o, p$1);
					break;
				}
				case "object":
					e.setEditorState(t, p$1);
					break;
				case "function": e.update(() => {
					zo().isEmpty() && t(e);
				}, p$1);
			}
		}(E, s), [E, f];
	}, []);
	return u$2(() => {
		const e = a.editable, [t] = l;
		t.setEditable(void 0 === e || e);
	}, []), jsx(r$2.Provider, {
		value: l,
		children: c
	});
}
//#endregion
//#region node_modules/.pnpm/@lexical+text@0.42.0/node_modules/@lexical/text/LexicalText.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function s$1() {
	return zo().getTextContent();
}
function f$1(t, e = !0) {
	if (t) return !1;
	let n = s$1();
	return e && (n = n.trim()), "" === n;
}
function c$2(o) {
	if (!f$1(o, !1)) return !1;
	const l = zo().getChildren(), s = l.length;
	if (s > 1) return !1;
	for (let t = 0; t < s; t++) {
		const o = l[t];
		if (Li(o)) return !1;
		if (Pi(o)) {
			if (!Yi(o)) return !1;
			if (0 !== o.__indent) return !1;
			const e = o.getChildren(), n = e.length;
			for (let r = 0; r < n; r++) {
				const n = e[t];
				if (!yr(n)) return !1;
			}
		}
	}
	return !0;
}
function g$2(t) {
	return () => c$2(t);
}
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/LexicalContentEditable.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var m$2 = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? useLayoutEffect : useEffect;
function f({ editor: e, ariaActiveDescendant: t, ariaAutoComplete: i, ariaControls: a, ariaDescribedBy: d, ariaErrorMessage: c, ariaExpanded: s, ariaInvalid: u, ariaLabel: f, ariaLabelledBy: b, ariaMultiline: p, ariaOwns: x, ariaRequired: E, autoCapitalize: v, className: w, id: y, role: C = "textbox", spellCheck: g = !0, style: L, tabIndex: h, "data-testid": D, ...I }, R) {
	const [k, q] = useState(e.isEditable()), z = useCallback((t) => {
		t && t.ownerDocument && t.ownerDocument.defaultView ? e.setRootElement(t) : e.setRootElement(null);
	}, [e]), A = useMemo(() => function(...e) {
		return (t) => {
			for (const i of e) "function" == typeof i ? i(t) : null != i && (i.current = t);
		};
	}(R, z), [z, R]);
	return m$2(() => (q(e.isEditable()), e.registerEditableListener((e) => {
		q(e);
	})), [e]), jsx("div", {
		"aria-activedescendant": k ? t : void 0,
		"aria-autocomplete": k ? i : "none",
		"aria-controls": k ? a : void 0,
		"aria-describedby": d,
		...null != c ? { "aria-errormessage": c } : {},
		"aria-expanded": k && "combobox" === C ? !!s : void 0,
		...null != u ? { "aria-invalid": u } : {},
		"aria-label": f,
		"aria-labelledby": b,
		"aria-multiline": p,
		"aria-owns": k ? x : void 0,
		"aria-readonly": !k || void 0,
		"aria-required": E,
		autoCapitalize: v,
		className: w,
		contentEditable: k,
		"data-testid": D,
		id: y,
		ref: A,
		role: C,
		spellCheck: g,
		style: L,
		tabIndex: h,
		...I
	});
}
var b$3 = forwardRef(f);
function p(e) {
	return e.getEditorState().read(g$2(e.isComposing()));
}
var x$2 = forwardRef(E$3);
function E$3(t, i) {
	const { placeholder: a, ...r } = t, [n] = o();
	return jsxs(Fragment$1, { children: [jsx(b$3, {
		editor: n,
		...r,
		ref: i
	}), null != a && jsx(v$2, {
		editor: n,
		content: a
	})] });
}
function v$2({ content: e, editor: i }) {
	const a = function(e) {
		const [t, i] = useState(() => p(e));
		return m$2(() => {
			function t() {
				i(p(e));
			}
			return t(), rc(e.registerUpdateListener(() => {
				t();
			}), e.registerEditableListener(() => {
				t();
			}));
		}, [e]), t;
	}(i), [n, o] = useState(i.isEditable());
	if (useLayoutEffect(() => (o(i.isEditable()), i.registerEditableListener((e) => {
		o(e);
	})), [i]), !a) return null;
	let d = null;
	return "function" == typeof e ? d = e(n) : null !== e && (d = e), null === d ? null : jsx("div", {
		"aria-hidden": !0,
		children: d
	});
}
//#endregion
//#region node_modules/.pnpm/react-error-boundary@6.1.1_react@19.2.4/node_modules/react-error-boundary/dist/react-error-boundary.js
var h = createContext(null), c$1 = {
	didCatch: !1,
	error: null
};
var m$1 = class extends Component {
	constructor(e) {
		super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = c$1;
	}
	static getDerivedStateFromError(e) {
		return {
			didCatch: !0,
			error: e
		};
	}
	resetErrorBoundary(...e) {
		const { error: t } = this.state;
		t !== null && (this.props.onReset?.({
			args: e,
			reason: "imperative-api"
		}), this.setState(c$1));
	}
	componentDidCatch(e, t) {
		this.props.onError?.(e, t);
	}
	componentDidUpdate(e, t) {
		const { didCatch: o } = this.state, { resetKeys: s } = this.props;
		o && t.error !== null && C$3(e.resetKeys, s) && (this.props.onReset?.({
			next: s,
			prev: e.resetKeys,
			reason: "keys"
		}), this.setState(c$1));
	}
	render() {
		const { children: e, fallbackRender: t, FallbackComponent: o, fallback: s } = this.props, { didCatch: n, error: a } = this.state;
		let i = e;
		if (n) {
			const u = {
				error: a,
				resetErrorBoundary: this.resetErrorBoundary
			};
			if (typeof t == "function") i = t(u);
			else if (o) i = createElement(o, u);
			else if (s !== void 0) i = s;
			else throw a;
		}
		return createElement(h.Provider, { value: {
			didCatch: n,
			error: a,
			resetErrorBoundary: this.resetErrorBoundary
		} }, i);
	}
};
function C$3(r = [], e = []) {
	return r.length !== e.length || r.some((t, o) => !Object.is(t, e[o]));
}
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/LexicalErrorBoundary.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function n$1({ children: n, onError: e }) {
	return jsx(m$1, {
		fallback: jsx("div", {
			style: {
				border: "1px solid #f00",
				color: "#f00",
				padding: "8px"
			},
			children: "An error was thrown."
		}),
		onError: e,
		children: n
	});
}
//#endregion
//#region node_modules/.pnpm/@lexical+extension@0.42.0/node_modules/@lexical/extension/LexicalExtension.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var q = Symbol.for("preact-signals");
function Q() {
	if (nt > 1) return void nt--;
	let t, e = !1;
	for (; void 0 !== tt;) {
		let n = tt;
		for (tt = void 0, it++; void 0 !== n;) {
			const i = n.o;
			if (n.o = void 0, n.f &= -3, !(8 & n.f) && at(n)) try {
				n.c();
			} catch (n) {
				e || (t = n, e = !0);
			}
			n = i;
		}
	}
	if (it = 0, nt--, e) throw t;
}
function X(t) {
	if (nt > 0) return t();
	nt++;
	try {
		return t();
	} finally {
		Q();
	}
}
var Y, tt;
function et(t) {
	const e = Y;
	Y = void 0;
	try {
		return t();
	} finally {
		Y = e;
	}
}
var nt = 0, it = 0, ot = 0;
function st(t) {
	if (void 0 === Y) return;
	let e = t.n;
	return void 0 === e || e.t !== Y ? (e = {
		i: 0,
		S: t,
		p: Y.s,
		n: void 0,
		t: Y,
		e: void 0,
		x: void 0,
		r: e
	}, void 0 !== Y.s && (Y.s.n = e), Y.s = e, t.n = e, 32 & Y.f && t.S(e), e) : -1 === e.i ? (e.i = 0, void 0 !== e.n && (e.n.p = e.p, void 0 !== e.p && (e.p.n = e.n), e.p = Y.s, e.n = void 0, Y.s.n = e, Y.s = e), e) : void 0;
}
function rt(t, e) {
	this.v = t, this.i = 0, this.n = void 0, this.t = void 0, this.W = null == e ? void 0 : e.watched, this.Z = null == e ? void 0 : e.unwatched, this.name = null == e ? void 0 : e.name;
}
function ct(t, e) {
	return new rt(t, e);
}
function at(t) {
	for (let e = t.s; void 0 !== e; e = e.n) if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i) return !0;
	return !1;
}
function dt(t) {
	for (let e = t.s; void 0 !== e; e = e.n) {
		const n = e.S.n;
		if (void 0 !== n && (e.r = n), e.S.n = e, e.i = -1, void 0 === e.n) {
			t.s = e;
			break;
		}
	}
}
function ut(t) {
	let e, n = t.s;
	for (; void 0 !== n;) {
		const t = n.p;
		-1 === n.i ? (n.S.U(n), void 0 !== t && (t.n = n.n), void 0 !== n.n && (n.n.p = t)) : e = n, n.S.n = n.r, void 0 !== n.r && (n.r = void 0), n = t;
	}
	t.s = e;
}
function ft(t, e) {
	rt.call(this, void 0), this.x = t, this.s = void 0, this.g = ot - 1, this.f = 4, this.W = null == e ? void 0 : e.watched, this.Z = null == e ? void 0 : e.unwatched, this.name = null == e ? void 0 : e.name;
}
function lt(t, e) {
	return new ft(t, e);
}
function ht$1(t) {
	const e = t.u;
	if (t.u = void 0, "function" == typeof e) {
		nt++;
		const n = Y;
		Y = void 0;
		try {
			e();
		} catch (e) {
			throw t.f &= -2, t.f |= 8, gt(t), e;
		} finally {
			Y = n, Q();
		}
	}
}
function gt(t) {
	for (let e = t.s; void 0 !== e; e = e.n) e.S.U(e);
	t.x = void 0, t.s = void 0, ht$1(t);
}
function pt$1(t) {
	if (Y !== this) throw new Error("Out-of-order effect");
	ut(this), Y = t, this.f &= -2, 8 & this.f && gt(this), Q();
}
function mt(t, e) {
	this.x = t, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32, this.name = null == e ? void 0 : e.name;
}
function vt$1(t, e) {
	const n = new mt(t, e);
	try {
		n.c();
	} catch (t) {
		throw n.d(), t;
	}
	const i = n.d.bind(n);
	return i[Symbol.dispose] = i, i;
}
function xt$1(t, e = {}) {
	const n = {};
	for (const i in t) {
		const o = e[i];
		n[i] = ct(void 0 === o ? t[i] : o);
	}
	return n;
}
rt.prototype.brand = q, rt.prototype.h = function() {
	return !0;
}, rt.prototype.S = function(t) {
	const e = this.t;
	e !== t && void 0 === t.e && (t.x = e, this.t = t, void 0 !== e ? e.e = t : et(() => {
		var t;
		null == (t = this.W) || t.call(this);
	}));
}, rt.prototype.U = function(t) {
	if (void 0 !== this.t) {
		const e = t.e, n = t.x;
		void 0 !== e && (e.x = n, t.e = void 0), void 0 !== n && (n.e = e, t.x = void 0), t === this.t && (this.t = n, void 0 === n && et(() => {
			var t;
			null == (t = this.Z) || t.call(this);
		}));
	}
}, rt.prototype.subscribe = function(t) {
	return vt$1(() => {
		const e = this.value, n = Y;
		Y = void 0;
		try {
			t(e);
		} finally {
			Y = n;
		}
	}, { name: "sub" });
}, rt.prototype.valueOf = function() {
	return this.value;
}, rt.prototype.toString = function() {
	return this.value + "";
}, rt.prototype.toJSON = function() {
	return this.value;
}, rt.prototype.peek = function() {
	const t = Y;
	Y = void 0;
	try {
		return this.value;
	} finally {
		Y = t;
	}
}, Object.defineProperty(rt.prototype, "value", {
	get() {
		const t = st(this);
		return void 0 !== t && (t.i = this.i), this.v;
	},
	set(t) {
		if (t !== this.v) {
			if (it > 100) throw new Error("Cycle detected");
			this.v = t, this.i++, ot++, nt++;
			try {
				for (let t = this.t; void 0 !== t; t = t.x) t.t.N();
			} finally {
				Q();
			}
		}
	}
}), ft.prototype = new rt(), ft.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if (32 == (36 & this.f)) return !0;
	if (this.f &= -5, this.g === ot) return !0;
	if (this.g = ot, this.f |= 1, this.i > 0 && !at(this)) return this.f &= -2, !0;
	const t = Y;
	try {
		dt(this), Y = this;
		const t = this.x();
		(16 & this.f || this.v !== t || 0 === this.i) && (this.v = t, this.f &= -17, this.i++);
	} catch (t) {
		this.v = t, this.f |= 16, this.i++;
	}
	return Y = t, ut(this), this.f &= -2, !0;
}, ft.prototype.S = function(t) {
	if (void 0 === this.t) {
		this.f |= 36;
		for (let t = this.s; void 0 !== t; t = t.n) t.S.S(t);
	}
	rt.prototype.S.call(this, t);
}, ft.prototype.U = function(t) {
	if (void 0 !== this.t && (rt.prototype.U.call(this, t), void 0 === this.t)) {
		this.f &= -33;
		for (let t = this.s; void 0 !== t; t = t.n) t.S.U(t);
	}
}, ft.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (let t = this.t; void 0 !== t; t = t.x) t.t.N();
	}
}, Object.defineProperty(ft.prototype, "value", { get() {
	if (1 & this.f) throw new Error("Cycle detected");
	const t = st(this);
	if (this.h(), void 0 !== t && (t.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} }), mt.prototype.c = function() {
	const t = this.S();
	try {
		if (8 & this.f) return;
		if (void 0 === this.x) return;
		const t = this.x();
		"function" == typeof t && (this.u = t);
	} finally {
		t();
	}
}, mt.prototype.S = function() {
	if (1 & this.f) throw new Error("Cycle detected");
	this.f |= 1, this.f &= -9, ht$1(this), dt(this), nt++;
	const t = Y;
	return Y = this, pt$1.bind(this, t);
}, mt.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.o = tt, tt = this);
}, mt.prototype.d = function() {
	this.f |= 8, 1 & this.f || gt(this);
}, mt.prototype.dispose = function() {
	this.d();
};
Hl({
	build: (t, e, n) => xt$1(e),
	config: Ql({
		defaultSelection: "rootEnd",
		disabled: !1
	}),
	name: "@lexical/extension/AutoFocus",
	register(t, e, n) {
		const i = n.getOutput();
		return vt$1(() => i.disabled.value ? void 0 : t.registerRootListener((e) => {
			t.focus(() => {
				const t = document.activeElement;
				null === e || null !== t && e.contains(t) || e.focus({ preventScroll: !0 });
			}, { defaultSelection: i.defaultSelection.peek() });
		}));
	}
});
function yt$1() {
	const t = zo(), e = $r(), n = Vi();
	t.clear(), t.append(n), null !== e && n.select(), wr(e) && (e.format = 0);
}
function St$1(t, e = yt$1) {
	return t.registerCommand($e, (n) => (t.update(e), !0), 0);
}
Hl({
	build: (t, e, n) => xt$1(e),
	config: Ql({ $onClear: yt$1 }),
	name: "@lexical/extension/ClearEditor",
	register(t, e, n) {
		const { $onClear: i } = n.getOutput();
		return vt$1(() => St$1(t, i.value));
	}
});
function Nt$1(t) {
	return ("function" == typeof t.nodes ? t.nodes() : t.nodes) || [];
}
var Ot = it$2("format", { parse: (t) => "number" == typeof t ? t : 0 });
var Rt = class extends Fi {
	$config() {
		return this.config("decorator-text", {
			extends: Fi,
			stateConfigs: [{
				flat: !0,
				stateConfig: Ot
			}]
		});
	}
	getFormat() {
		return ot$2(this, Ot);
	}
	getFormatFlags(t, e) {
		return No(this.getFormat(), t, e);
	}
	hasFormat(t) {
		const e = z$3[t];
		return 0 !== (this.getFormat() & e);
	}
	setFormat(t) {
		return lt$2(this, Ot, t);
	}
	toggleFormat(t) {
		const n = No(this.getFormat(), t, null);
		return this.setFormat(n);
	}
	isInline() {
		return !0;
	}
	createDOM() {
		return document.createElement("span");
	}
	updateDOM() {
		return !1;
	}
};
function Ct$1(t) {
	return t instanceof Rt;
}
Hl({
	name: "@lexical/extension/DecoratorText",
	nodes: () => [Rt],
	register: (t, e, n) => t.registerCommand(me$1, (t) => {
		const e = $r();
		if (Or(e) || wr(e)) for (const n of e.getNodes()) Ct$1(n) && n.toggleFormat(t);
		return !1;
	}, 1)
});
function Pt$1(t, e) {
	let n;
	return ct(t(), {
		unwatched() {
			n && (n(), n = void 0);
		},
		watched() {
			this.value = t(), n = e(this);
		}
	});
}
var At$1 = Hl({
	build: (t) => Pt$1(() => t.getEditorState(), (e) => t.registerUpdateListener((t) => {
		e.value = t.editorState;
	})),
	name: "@lexical/extension/EditorState"
});
function jt(t, ...e) {
	const n = new URL("https://lexical.dev/docs/error"), i = new URLSearchParams();
	i.append("code", t);
	for (const t of e) i.append("v", t);
	throw n.search = i.toString(), Error(`Minified Lexical error #${t}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function kt$1(t, e) {
	if (t && e && !Array.isArray(e) && "object" == typeof t && "object" == typeof e) {
		const n = t, i = e;
		for (const t in i) n[t] = kt$1(n[t], i[t]);
		return t;
	}
	return e;
}
var $t = 0, Kt$1 = 1, zt = 2, Lt$1 = 3, Ut = 4, Tt$1 = 5, Bt = 6, Wt = 7;
function Gt(t) {
	return t.id === $t;
}
function Vt(t) {
	return t.id === zt;
}
function Zt(t) {
	return function(t) {
		return t.id === Kt$1;
	}(t) || jt(305, String(t.id), String(Kt$1)), Object.assign(t, { id: zt });
}
var Jt$1 = /* @__PURE__ */ new Set();
var Ht = class {
	builder;
	configs;
	_dependency;
	_peerNameSet;
	extension;
	state;
	_signal;
	constructor(t, e) {
		this.builder = t, this.extension = e, this.configs = /* @__PURE__ */ new Set(), this.state = { id: $t };
	}
	mergeConfigs() {
		let t = this.extension.config || {};
		const e = this.extension.mergeConfig ? this.extension.mergeConfig.bind(this.extension) : Zl;
		for (const n of this.configs) t = e(t, n);
		return t;
	}
	init(t) {
		const e = this.state;
		Vt(e) || jt(306, String(e.id));
		const n = {
			getDependency: this.getInitDependency.bind(this),
			getDirectDependentNames: this.getDirectDependentNames.bind(this),
			getPeer: this.getInitPeer.bind(this),
			getPeerNameSet: this.getPeerNameSet.bind(this)
		}, i = {
			...n,
			getDependency: this.getDependency.bind(this),
			getInitResult: this.getInitResult.bind(this),
			getPeer: this.getPeer.bind(this)
		}, o = function(t, e, n) {
			return Object.assign(t, {
				config: e,
				id: Lt$1,
				registerState: n
			});
		}(e, this.mergeConfigs(), n);
		let s;
		this.state = o, this.extension.init && (s = this.extension.init(t, o.config, n)), this.state = function(t, e, n) {
			return Object.assign(t, {
				id: Ut,
				initResult: e,
				registerState: n
			});
		}(o, s, i);
	}
	build(t) {
		const e = this.state;
		let n;
		e.id !== Ut && jt(307, String(e.id), String(Tt$1)), this.extension.build && (n = this.extension.build(t, e.config, e.registerState));
		const i = {
			...e.registerState,
			getOutput: () => n,
			getSignal: this.getSignal.bind(this)
		};
		this.state = function(t, e, n) {
			return Object.assign(t, {
				id: Tt$1,
				output: e,
				registerState: n
			});
		}(e, n, i);
	}
	register(t, e) {
		this._signal = e;
		const n = this.state;
		n.id !== Tt$1 && jt(308, String(n.id), String(Tt$1));
		const i = this.extension.register && this.extension.register(t, n.config, n.registerState);
		return this.state = function(t) {
			return Object.assign(t, { id: Bt });
		}(n), () => {
			const t = this.state;
			t.id !== Wt && jt(309, String(n.id), String(Wt)), this.state = function(t) {
				return Object.assign(t, { id: Tt$1 });
			}(t), i && i();
		};
	}
	afterRegistration(t) {
		const e = this.state;
		let n;
		return e.id !== Bt && jt(310, String(e.id), String(Bt)), this.extension.afterRegistration && (n = this.extension.afterRegistration(t, e.config, e.registerState)), this.state = function(t) {
			return Object.assign(t, { id: Wt });
		}(e), n;
	}
	getSignal() {
		return void 0 === this._signal && jt(311), this._signal;
	}
	getInitResult() {
		void 0 === this.extension.init && jt(312, this.extension.name);
		const t = this.state;
		return function(t) {
			return t.id >= Ut;
		}(t) || jt(313, String(t.id), String(Ut)), t.initResult;
	}
	getInitPeer(t) {
		const e = this.builder.extensionNameMap.get(t);
		return e ? e.getExtensionInitDependency() : void 0;
	}
	getExtensionInitDependency() {
		const t = this.state;
		return function(t) {
			return t.id >= Lt$1;
		}(t) || jt(314, String(t.id), String(Lt$1)), { config: t.config };
	}
	getPeer(t) {
		const e = this.builder.extensionNameMap.get(t);
		return e ? e.getExtensionDependency() : void 0;
	}
	getInitDependency(t) {
		const e = this.builder.getExtensionRep(t);
		return void 0 === e && jt(315, this.extension.name, t.name), e.getExtensionInitDependency();
	}
	getDependency(t) {
		const e = this.builder.getExtensionRep(t);
		return void 0 === e && jt(315, this.extension.name, t.name), e.getExtensionDependency();
	}
	getState() {
		const t = this.state;
		return function(t) {
			return t.id >= Wt;
		}(t) || jt(316, String(t.id), String(Wt)), t;
	}
	getDirectDependentNames() {
		return this.builder.incomingEdges.get(this.extension.name) || Jt$1;
	}
	getPeerNameSet() {
		let t = this._peerNameSet;
		return t || (t = new Set((this.extension.peerDependencies || []).map(([t]) => t)), this._peerNameSet = t), t;
	}
	getExtensionDependency() {
		if (!this._dependency) {
			const t = this.state;
			(function(t) {
				return t.id >= Tt$1;
			})(t) || jt(317, this.extension.name), this._dependency = {
				config: t.config,
				init: t.initResult,
				output: t.output
			};
		}
		return this._dependency;
	}
};
var qt = { tag: Wn };
function Qt() {
	const t = zo();
	t.isEmpty() && t.append(Vi());
}
var Xt = Hl({
	config: Ql({
		setOptions: qt,
		updateOptions: qt
	}),
	init: ({ $initialEditorState: t = Qt }) => ({
		$initialEditorState: t,
		initialized: !1
	}),
	afterRegistration(t, { updateOptions: e, setOptions: n }, i) {
		const o = i.getInitResult();
		if (!o.initialized) {
			o.initialized = !0;
			const { $initialEditorState: i } = o;
			if (Wi(i)) t.setEditorState(i, n);
			else if ("function" == typeof i) t.update(() => {
				i(t);
			}, e);
			else if (i && ("string" == typeof i || "object" == typeof i)) {
				const e = t.parseEditorState(i);
				t.setEditorState(e, n);
			}
		}
		return () => {};
	},
	name: "@lexical/extension/InitialState",
	nodes: [
		Ii,
		lr,
		Gn,
		xr,
		Ui
	]
}), Yt = Symbol.for("@lexical/extension/LexicalBuilder");
function ee() {}
function ne(t) {
	throw t;
}
function ie(t) {
	return Array.isArray(t) ? t : [t];
}
var oe = "0.42.0+prod.esm";
var se = class se {
	roots;
	extensionNameMap;
	outgoingConfigEdges;
	incomingEdges;
	conflicts;
	_sortedExtensionReps;
	PACKAGE_VERSION;
	constructor(t) {
		this.outgoingConfigEdges = /* @__PURE__ */ new Map(), this.incomingEdges = /* @__PURE__ */ new Map(), this.extensionNameMap = /* @__PURE__ */ new Map(), this.conflicts = /* @__PURE__ */ new Map(), this.PACKAGE_VERSION = oe, this.roots = t;
		for (const e of t) this.addExtension(e);
	}
	static fromExtensions(t) {
		const e = [ie(Xt)];
		for (const n of t) e.push(ie(n));
		return new se(e);
	}
	static maybeFromEditor(t) {
		const e = t[Yt];
		return e && (e.PACKAGE_VERSION !== oe && jt(292, e.PACKAGE_VERSION, oe), e instanceof se || jt(293)), e;
	}
	static fromEditor(t) {
		const e = se.maybeFromEditor(t);
		return void 0 === e && jt(294), e;
	}
	constructEditor() {
		const { $initialEditorState: t, onError: e, ...n } = this.buildCreateEditorArgs(), i = Object.assign(eo({
			...n,
			...e ? { onError: (t) => {
				e(t, i);
			} } : {}
		}), { [Yt]: this });
		for (const t of this.sortedExtensionReps()) t.build(i);
		return i;
	}
	buildEditor() {
		let t = ee;
		function e() {
			try {
				t();
			} finally {
				t = ee;
			}
		}
		const n = Object.assign(this.constructEditor(), {
			dispose: e,
			[Symbol.dispose]: e
		});
		return t = rc(this.registerEditor(n), () => n.setRootElement(null)), n;
	}
	hasExtensionByName(t) {
		return this.extensionNameMap.has(t);
	}
	getExtensionRep(t) {
		const e = this.extensionNameMap.get(t.name);
		if (e) return e.extension !== t && jt(295, t.name), e;
	}
	addEdge(t, e, n) {
		const i = this.outgoingConfigEdges.get(t);
		i ? i.set(e, n) : this.outgoingConfigEdges.set(t, new Map([[e, n]]));
		const o = this.incomingEdges.get(e);
		o ? o.add(t) : this.incomingEdges.set(e, new Set([t]));
	}
	addExtension(t) {
		void 0 !== this._sortedExtensionReps && jt(296);
		const [n] = ie(t);
		"string" != typeof n.name && jt(297, typeof n.name);
		let i = this.extensionNameMap.get(n.name);
		if (void 0 !== i && i.extension !== n && jt(298, n.name), !i) {
			i = new Ht(this, n), this.extensionNameMap.set(n.name, i);
			const t = this.conflicts.get(n.name);
			"string" == typeof t && jt(299, n.name, t);
			for (const t of n.conflictsWith || []) this.extensionNameMap.has(t) && jt(299, n.name, t), this.conflicts.set(t, n.name);
			for (const t of n.dependencies || []) {
				const e = ie(t);
				this.addEdge(n.name, e[0].name, e.slice(1)), this.addExtension(e);
			}
			for (const [t, e] of n.peerDependencies || []) this.addEdge(n.name, t, e ? [e] : []);
		}
	}
	sortedExtensionReps() {
		if (this._sortedExtensionReps) return this._sortedExtensionReps;
		const t = [], e = (n, i) => {
			let o = n.state;
			if (Vt(o)) return;
			const s = n.extension.name;
			var r;
			Gt(o) || jt(300, s, i || "[unknown]"), Gt(r = o) || jt(304, String(r.id), String($t)), o = Object.assign(r, { id: Kt$1 }), n.state = o;
			const c = this.outgoingConfigEdges.get(s);
			if (c) for (const t of c.keys()) {
				const n = this.extensionNameMap.get(t);
				n && e(n, s);
			}
			o = Zt(o), n.state = o, t.push(n);
		};
		for (const t of this.extensionNameMap.values()) Gt(t.state) && e(t);
		for (const e of t) for (const [t, n] of this.outgoingConfigEdges.get(e.extension.name) || []) if (n.length > 0) {
			const e = this.extensionNameMap.get(t);
			if (e) for (const t of n) e.configs.add(t);
		}
		for (const [t, ...e] of this.roots) if (e.length > 0) {
			const n = this.extensionNameMap.get(t.name);
			void 0 === n && jt(301, t.name);
			for (const t of e) n.configs.add(t);
		}
		return this._sortedExtensionReps = t, this._sortedExtensionReps;
	}
	registerEditor(t) {
		const e = this.sortedExtensionReps(), n = new AbortController(), i = [() => n.abort()], o = n.signal;
		for (const n of e) {
			const e = n.register(t, o);
			e && i.push(e);
		}
		for (const n of e) {
			const e = n.afterRegistration(t);
			e && i.push(e);
		}
		return rc(...i);
	}
	buildCreateEditorArgs() {
		const t = {}, e = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = {}, s = {}, r = this.sortedExtensionReps();
		for (const c of r) {
			const { extension: r } = c;
			if (void 0 !== r.onError && (t.onError = r.onError), void 0 !== r.disableEvents && (t.disableEvents = r.disableEvents), void 0 !== r.parentEditor && (t.parentEditor = r.parentEditor), void 0 !== r.editable && (t.editable = r.editable), void 0 !== r.namespace && (t.namespace = r.namespace), void 0 !== r.$initialEditorState && (t.$initialEditorState = r.$initialEditorState), r.nodes) for (const t of Nt$1(r)) {
				if ("function" != typeof t) {
					const e = n.get(t.replace);
					e && jt(302, r.name, t.replace.name, e.extension.name), n.set(t.replace, c);
				}
				e.add(t);
			}
			if (r.html) {
				if (r.html.export) for (const [t, e] of r.html.export.entries()) i.set(t, e);
				r.html.import && Object.assign(o, r.html.import);
			}
			r.theme && kt$1(s, r.theme);
		}
		Object.keys(s).length > 0 && (t.theme = s), e.size && (t.nodes = [...e]);
		const c = Object.keys(o).length > 0, a = i.size > 0;
		(c || a) && (t.html = {}, c && (t.html.import = o), a && (t.html.export = i));
		for (const e of r) e.init(t);
		return t.onError || (t.onError = ne), t;
	}
};
function ce(t, e) {
	const n = se.fromEditor(t).extensionNameMap.get(e);
	return n ? n.getExtensionDependency() : void 0;
}
var de = /* @__PURE__ */ new Set(), ue = Hl({
	build(t, e, n) {
		const i = n.getDependency(At$1).output, o = ct({ watchedNodeKeys: /* @__PURE__ */ new Map() }), r = Pt$1(() => {}, () => vt$1(() => {
			const t = r.peek(), { watchedNodeKeys: e } = o.value;
			let n, c = !1;
			i.value.read(() => {
				if ($r()) for (const [i, o] of e.entries()) {
					if (0 === o.size) {
						e.delete(i);
						continue;
					}
					const s = Po(i), r = s && s.isSelected() || !1;
					c = c || r !== (!!t && t.has(i)), r && (n = n || /* @__PURE__ */ new Set(), n.add(i));
				}
			}), !c && n && t && n.size === t.size || (r.value = n);
		}));
		return { watchNodeKey: function(t) {
			const e = lt(() => (r.value || de).has(t)), { watchedNodeKeys: n } = o.peek();
			let i = n.get(t);
			const s = void 0 !== i;
			return i = i || /* @__PURE__ */ new Set(), i.add(e), s || (n.set(t, i), o.value = { watchedNodeKeys: n }), e;
		} };
	},
	dependencies: [At$1],
	name: "@lexical/extension/NodeSelection"
}), fe = ne$2("INSERT_HORIZONTAL_RULE_COMMAND");
var le = class le extends Fi {
	static getType() {
		return "horizontalrule";
	}
	static clone(t) {
		return new le(t.__key);
	}
	static importJSON(t) {
		return ge().updateFromJSON(t);
	}
	static importDOM() {
		return { hr: () => ({
			conversion: he,
			priority: 0
		}) };
	}
	exportDOM() {
		return { element: document.createElement("hr") };
	}
	createDOM(t) {
		const e = document.createElement("hr");
		return ec(e, t.theme.hr), e;
	}
	getTextContent() {
		return "\n";
	}
	isInline() {
		return !1;
	}
	updateDOM() {
		return !1;
	}
};
function he() {
	return { node: ge() };
}
function ge() {
	return Hs(le);
}
function pe(t) {
	return t instanceof le;
}
Hl({
	dependencies: [At$1, ue],
	name: "@lexical/extension/HorizontalRule",
	nodes: () => [le],
	register(t, e, n) {
		const { watchNodeKey: o } = n.getDependency(ue).output, r = ct({ nodeSelections: /* @__PURE__ */ new Map() }), a = t._config.theme.hrSelected ?? "selected";
		return rc(t.registerCommand(fe, (t) => {
			const e = $r();
			if (!wr(e)) return !1;
			if (null !== e.focus.getNode()) bt$2(ge());
			return !0;
		}, 0), t.registerCommand(oe$2, (t) => {
			if (Ds(t.target)) {
				const e = Do(t.target);
				if (pe(e)) return function(t, e = !1) {
					const n = $r(), i = t.isSelected(), o = t.getKey();
					let r;
					e && Or(n) ? r = n : (r = Jr(), Bo(r)), i ? r.delete(o) : r.add(o);
				}(e, t.shiftKey), !0;
			}
			return !1;
		}, 1), t.registerMutationListener(le, (e, n) => {
			X(() => {
				let n = !1;
				const { nodeSelections: i } = r.peek();
				for (const [s, r] of e.entries()) if ("destroyed" === r) i.delete(s), n = !0;
				else {
					const e = i.get(s), r = t.getElementByKey(s);
					e ? e.domNode.value = r : (n = !0, i.set(s, {
						domNode: ct(r),
						selectedSignal: o(s)
					}));
				}
				n && (r.value = { nodeSelections: i });
			});
		}), vt$1(() => {
			const t = [];
			for (const { domNode: e, selectedSignal: n } of r.value.nodeSelections.values()) t.push(vt$1(() => {
				const t = e.value;
				if (t) n.value ? ec(t, a) : nc(t, a);
			}));
			return rc(...t);
		}));
	}
});
Hl({
	build: (t, e) => xt$1({ inheritEditableFromParent: e.inheritEditableFromParent }),
	config: Ql({
		$getParentEditor: function() {
			const t = zs();
			return se.fromEditor(t), t;
		},
		inheritEditableFromParent: !1
	}),
	init: (t, e, n) => {
		const i = e.$getParentEditor();
		t.parentEditor = i, t.theme = t.theme || i._config.theme;
	},
	name: "@lexical/extension/NestedEditor",
	register: (t, e, n) => vt$1(() => {
		const e = t._parentEditor;
		if (e && n.getOutput().inheritEditableFromParent.value) return t.setEditable(e.isEditable()), e.registerEditableListener(t.setEditable.bind(t));
	})
});
Hl({
	build: (t, e, n) => xt$1(e),
	config: Ql({
		disabled: !1,
		onReposition: void 0
	}),
	name: "@lexical/utils/SelectionAlwaysOnDisplay",
	register: (t, e, n) => {
		const i = n.getOutput();
		return vt$1(() => {
			if (!i.disabled.value) return Z(t, i.onReposition.value);
		});
	}
});
function Ee(t) {
	return t.canBeEmpty();
}
function ye(t, e, n = Ee) {
	return rc(t.registerCommand(De, (e) => {
		const n = $r();
		if (!wr(n)) return !1;
		e.preventDefault();
		const i = function(t) {
			if (t.getNodes().filter((t) => Rr(t) && t.canIndent()).length > 0) return !0;
			const e = t.anchor, n = t.focus, i = n.isBefore(e) ? n : e, s = Ct$2(i.getNode());
			if (s.canIndent()) {
				const t = s.getKey();
				let e = Wr();
				if (e.anchor.set(t, 0, "element"), e.focus.set(t, 0, "element"), e = Ct$3(e), e.anchor.is(i)) return !0;
			}
			return !1;
		}(n) ? e.shiftKey ? Ie : Le : Fe;
		return t.dispatchCommand(i, void 0);
	}, 0), t.registerCommand(Le, () => {
		const t = "number" == typeof e ? e : e ? e.peek() : null;
		if (!wr($r())) return !1;
		const o = "function" == typeof n ? n : n.peek();
		return Bt$1((e) => {
			if (o(e)) {
				const n = e.getIndent() + 1;
				(!t || n < t) && e.setIndent(n);
			}
		});
	}, 4));
}
Hl({
	build: (t, e, n) => xt$1(e),
	config: Ql({
		$canIndent: Ee,
		disabled: !1,
		maxIndent: null
	}),
	name: "@lexical/extension/TabIndentation",
	register(t, e, n) {
		const { disabled: i, maxIndent: o, $canIndent: s } = n.getOutput();
		return vt$1(() => {
			if (!i.value) return ye(t, o, s);
		});
	}
});
//#endregion
//#region node_modules/.pnpm/@lexical+history@0.42.0/node_modules/@lexical/history/LexicalHistory.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function C$2(t, e, n, r, o) {
	if (null === t || 0 === n.size && 0 === r.size && !o) return 0;
	const i = e._selection, a = t._selection;
	if (o) return 1;
	if (!(wr(i) && wr(a) && a.isCollapsed() && i.isCollapsed())) return 0;
	const s = function(t, e, n) {
		const r = t._nodeMap, o = [];
		for (const t of e) {
			const e = r.get(t);
			void 0 !== e && o.push(e);
		}
		for (const [t, e] of n) {
			if (!e) continue;
			const n = r.get(t);
			void 0 === n || Ki(n) || o.push(n);
		}
		return o;
	}(e, n, r);
	if (0 === s.length) return 0;
	if (s.length > 1) {
		const n = e._nodeMap, r = n.get(i.anchor.key), o = n.get(a.anchor.key);
		return r && o && !t._nodeMap.has(r.__key) && yr(r) && 1 === r.__text.length && 1 === i.anchor.offset ? 2 : 0;
	}
	const d = s[0], l = t._nodeMap.get(d.__key);
	if (!yr(l) || !yr(d) || l.__mode !== d.__mode) return 0;
	const u = l.__text, c = d.__text;
	if (u === c) return 0;
	const f = i.anchor, p = a.anchor;
	if (f.key !== p.key || "text" !== f.type) return 0;
	const h = f.offset, m = p.offset, g = c.length - u.length;
	return 1 === g && m === h - 1 ? 2 : -1 === g && m === h + 1 ? 3 : -1 === g && m === h ? 4 : 0;
}
function b$2(t, e, n) {
	let r = n(), o = 0, i = r, a = 0, s = null;
	return (d, l, u, c, f, p) => {
		const h = n();
		if (p.has("composition-start") && (i = r, a = o, s = d), p.has("historic")) return o = 0, r = h, 2;
		p.has("composition-end") && s && (r = i, o = a, d = s);
		const x = C$2(d, l, c, f, t.isComposing()), b = (() => {
			const n = null === u || u.editor === t, i = p.has(Bn);
			if (!i && n && p.has("history-merge")) return 0;
			if (1 === x) return 2;
			if (null === d) return 1;
			const a = l._selection;
			if (!(c.size > 0 || f.size > 0)) return null !== a ? 0 : 2;
			const s = "number" == typeof e ? e : e.peek();
			if (!1 === i && 0 !== x && x === o && h < r + s && n) return 0;
			if (1 === c.size) {
				if (function(t, e, n) {
					const r = e._nodeMap.get(t), o = n._nodeMap.get(t), i = e._selection, a = n._selection;
					return !(wr(i) && wr(a) && "element" === i.anchor.type && "element" === i.focus.type && "text" === a.anchor.type && "text" === a.focus.type || !yr(r) || !yr(o) || r.__parent !== o.__parent) && JSON.stringify(e.read(() => r.exportJSON())) === JSON.stringify(n.read(() => o.exportJSON()));
				}(Array.from(c)[0], d, l)) return 0;
			}
			return 1;
		})();
		return r = h, o = x, b;
	};
}
function w$2(t) {
	t.undoStack = [], t.redoStack = [], t.current = null;
}
function E$2(t, e, n, r = Date.now) {
	const i = b$2(t, n, r);
	return rc(t.registerCommand(xe$1, () => (function(t, e) {
		const n = e.redoStack, r = e.undoStack;
		if (0 !== r.length) {
			const o = e.current, i = r.pop();
			null !== o && (n.push(o), t.dispatchCommand(Ye, !0)), 0 === r.length && t.dispatchCommand(qe, !1), e.current = i || null, i && i.editor.setEditorState(i.editorState, { tag: "historic" });
		}
	}(t, e), !0), 0), t.registerCommand(Ce, () => (function(t, e) {
		const n = e.redoStack, r = e.undoStack;
		if (0 !== n.length) {
			const o = e.current;
			null !== o && (r.push(o), t.dispatchCommand(qe, !0));
			const i = n.pop();
			0 === n.length && t.dispatchCommand(Ye, !1), e.current = i || null, i && i.editor.setEditorState(i.editorState, { tag: "historic" });
		}
	}(t, e), !0), 0), t.registerCommand($e, () => (w$2(e), !1), 0), t.registerCommand(Ve, () => (w$2(e), t.dispatchCommand(Ye, !1), t.dispatchCommand(qe, !1), !0), 0), t.registerUpdateListener(({ editorState: n, prevEditorState: r, dirtyLeaves: o, dirtyElements: a, tags: s }) => {
		const d = e.current, l = e.redoStack, u = e.undoStack, c = null === d ? null : d.editorState;
		if (null !== d && n === c) return;
		const f = i(r, n, d, o, a, s);
		if (1 === f) 0 !== l.length && (e.redoStack = [], t.dispatchCommand(Ye, !1)), null !== d && (u.push({ ...d }), t.dispatchCommand(qe, !0));
		else if (2 === f) return;
		e.current = {
			editor: t,
			editorState: n
		};
	}));
}
function M$2() {
	return {
		current: null,
		redoStack: [],
		undoStack: []
	};
}
var O$3 = Hl({
	build: (t, { delay: n, createInitialHistoryState: r, disabled: o, now: i }) => xt$1({
		delay: n,
		disabled: o,
		historyState: r(t),
		now: i
	}),
	config: Ql({
		createInitialHistoryState: M$2,
		delay: 300,
		disabled: "undefined" == typeof window,
		now: Date.now
	}),
	name: "@lexical/history/History",
	register: (e, n, r) => {
		const o = r.getOutput();
		return vt$1(() => o.disabled.value ? void 0 : E$2(e, o.historyState.value, o.delay, () => o.now.peek()()));
	}
});
Hl({
	build: (t, { disabled: n, parentEditor: r }) => xt$1({
		disabled: n,
		parentEditor: r || t._parentEditor
	}),
	config: Ql({
		disabled: !1,
		parentEditor: null
	}),
	dependencies: [Gl(O$3, { disabled: !0 })],
	name: "@lexical/history/SharedHistory",
	register: (e, o, i) => vt$1(() => {
		const { disabled: t, parentEditor: e } = i.getOutput();
		if (!t.value) {
			const { output: t } = i.getDependency(O$3), o = function(t) {
				return t ? ce(t, O$3.name) : null;
			}(e.value);
			if (!o) return;
			const a = o.output;
			X(() => {
				t.delay.value = a.delay.value, t.historyState.value = a.historyState.value, t.now.value = a.now.value, t.disabled.value = a.disabled.value;
			});
		}
	})
});
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/LexicalHistoryPlugin.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function a$1({ delay: a, externalHistoryState: c }) {
	const [l] = o();
	return function(t, a, c = 1e3) {
		const l = useMemo(() => a || M$2(), [a]);
		useEffect(() => E$2(t, l, c), [
			c,
			t,
			l
		]);
	}(l, c, a), null;
}
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/LexicalOnChangePlugin.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var r$1 = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? useLayoutEffect : useEffect;
function n({ ignoreHistoryMergeTagChange: o$8 = !0, ignoreSelectionChange: i = !1, onChange: n }) {
	const [a] = o();
	return r$1(() => {
		if (n) return a.registerUpdateListener(({ editorState: e, dirtyElements: r, dirtyLeaves: d, prevEditorState: s, tags: c }) => {
			i && 0 === r.size && 0 === d.size || o$8 && c.has("history-merge") || s.isEmpty() || n(e, a, c);
		});
	}, [
		a,
		o$8,
		i,
		n
	]), null;
}
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/useLexicalEditable.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var c = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? useLayoutEffect : useEffect;
function u$1(e) {
	return {
		initialValueFn: () => e.isEditable(),
		subscribe: (n) => e.registerEditableListener(n)
	};
}
function a() {
	return function(n) {
		const [t] = o(), u = useMemo(() => n(t), [t, n]), [a, l] = useState(() => u.initialValueFn()), d = useRef(a);
		return c(() => {
			const { initialValueFn: e, subscribe: n } = u, t = e();
			return d.current !== t && (d.current = t, l(t)), n((e) => {
				d.current = e, l(e);
			});
		}, [u, n]), a;
	}(u$1);
}
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/LexicalReactProviderExtension.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var r = Hl({ name: "@lexical/react/ReactProvider" });
//#endregion
//#region node_modules/.pnpm/@lexical+dragon@0.42.0/node_modules/@lexical/dragon/LexicalDragon.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function s(e) {
	const t = window.location.origin, n = (n) => {
		if (n.origin !== t) return;
		const o = e.getRootElement();
		if (document.activeElement !== o) return;
		const s = n.data;
		if ("string" == typeof s) {
			let t;
			try {
				t = JSON.parse(s);
			} catch (e) {
				return;
			}
			if (t && "nuanria_messaging" === t.protocol && "request" === t.type) {
				const o = t.payload;
				if (o && "makeChanges" === o.functionId) {
					const t = o.args;
					if (t) {
						const [o, s, d, c, g] = t;
						e.update(() => {
							const e = $r();
							if (wr(e)) {
								const t = e.anchor;
								let i = t.getNode(), a = 0, l = 0;
								if (yr(i) && o >= 0 && s >= 0 && (a = o, l = o + s, e.setTextNodeRange(i, a, i, l)), a === l && "" === d || (e.insertRawText(d), i = t.getNode()), yr(i)) {
									a = c, l = c + g;
									const t = i.getTextContentSize();
									a = a > t ? t : a, l = l > t ? t : l, e.setTextNodeRange(i, a, i, l);
								}
								n.stopImmediatePropagation();
							}
						});
					}
				}
			}
		}
	};
	return window.addEventListener("message", n, !0), () => {
		window.removeEventListener("message", n, !0);
	};
}
var d$1 = Hl({
	build: (e, n, o) => xt$1(n),
	config: Ql({ disabled: "undefined" == typeof window }),
	name: "@lexical/dragon",
	register: (t, n, o) => vt$1(() => o.getOutput().disabled.value ? void 0 : s(t))
});
//#endregion
//#region node_modules/.pnpm/@lexical+html@0.42.0/node_modules/@lexical/html/LexicalHtml.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function m(e, n) {
	const t = ko(n) ? n.body.childNodes : n.childNodes;
	let l = [];
	const r = [];
	for (const n of t) if (!w$1.has(n.nodeName)) {
		const t = y$1(n, e, r, !1);
		null !== t && (l = l.concat(t));
	}
	return function(e) {
		for (const n of e) n.getNextSibling() instanceof ji && n.insertAfter(Qn());
		for (const n of e) {
			const e = n.getChildren();
			for (const t of e) n.insertBefore(t);
			n.remove();
		}
	}(r), l;
}
function g$1(e, n) {
	if ("undefined" == typeof document || "undefined" == typeof window && void 0 === global.window) throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
	const t = document.createElement("div"), o = zo().getChildren();
	for (let l = 0; l < o.length; l++) x$1(e, o[l], t, n);
	return t.innerHTML;
}
function x$1(t, o, l, u = null) {
	let f = null === u || o.isSelected(u);
	const a = Pi(o) && o.excludeFromCopy("html");
	let d = o;
	null !== u && yr(o) && (d = M$3(u, o, "clone"));
	const p = Pi(d) ? d.getChildren() : [], h = uo(t, d.getType());
	let m;
	m = h && void 0 !== h.exportDOM ? h.exportDOM(t, d) : d.exportDOM(t);
	const { element: g, after: w } = m;
	if (!g) return !1;
	const y = document.createDocumentFragment();
	for (let e = 0; e < p.length; e++) {
		const n = p[e], l = x$1(t, n, y, u);
		!f && Pi(o) && l && o.extractWithChild(n, u, "html") && (f = !0);
	}
	if (f && !a) {
		if ((Ps(g) || Fs(g)) && g.append(y), l.append(g), w) {
			const e = w.call(d, g);
			e && (Fs(g) ? g.replaceChildren(e) : g.replaceWith(e));
		}
	} else l.append(y);
	return f;
}
var w$1 = new Set(["STYLE", "SCRIPT"]);
function y$1(e, n, o, l, i = /* @__PURE__ */ new Map(), s) {
	let c = [];
	if (w$1.has(e.nodeName)) return c;
	let m = null;
	const g = function(e, n) {
		const { nodeName: t } = e, o = n._htmlConversions.get(t.toLowerCase());
		let l = null;
		if (void 0 !== o) for (const n of o) {
			const t = n(e);
			null !== t && (null === l || (l.priority || 0) <= (t.priority || 0)) && (l = t);
		}
		return null !== l ? l.conversion : null;
	}(e, n), x = g ? g(e) : null;
	let b = null;
	if (null !== x) {
		b = x.after;
		const n = x.node;
		if (m = Array.isArray(n) ? n[n.length - 1] : n, null !== m) {
			for (const [, e] of i) if (m = e(m, s), !m) break;
			m && c.push(...Array.isArray(n) ? n : [m]);
		}
		null != x.forChild && i.set(e.nodeName, x.forChild);
	}
	const S = e.childNodes;
	let v = [];
	const N = (null == m || !Ss(m)) && (null != m && Rr(m) || l);
	for (let e = 0; e < S.length; e++) v.push(...y$1(S[e], n, o, N, new Map(i), m));
	return null != b && (v = b(v)), Is(e) && (v = C$1(e, v, N ? () => {
		const e = new ji();
		return o.push(e), e;
	} : Vi)), null == m ? v.length > 0 ? c = c.concat(v) : Is(e) && function(e) {
		if (null == e.nextSibling || null == e.previousSibling) return !1;
		return Ls(e.nextSibling) && Ls(e.previousSibling);
	}(e) && (c = c.concat(Qn())) : Pi(m) && m.append(...v), c;
}
function C$1(e, n, t) {
	const o = e.style.textAlign, l = [];
	let r = [];
	for (let e = 0; e < n.length; e++) {
		const i = n[e];
		if (Rr(i)) o && !i.getFormat() && i.setFormat(o), l.push(i);
		else if (r.push(i), e === n.length - 1 || e < n.length - 1 && Rr(n[e + 1])) {
			const e = t();
			e.setFormat(o), e.append(...r), l.push(e), r = [];
		}
	}
	return l;
}
//#endregion
//#region node_modules/.pnpm/@lexical+clipboard@0.42.0/node_modules/@lexical/clipboard/LexicalClipboard.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function v$1(t, ...e) {
	const n = new URL("https://lexical.dev/docs/error"), o = new URLSearchParams();
	o.append("code", t);
	for (const t of e) o.append("v", t);
	throw n.search = o.toString(), Error(`Minified Lexical error #${t}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function D$1(e, n = $r()) {
	return n ?? v$1(166), wr(n) && n.isCollapsed() || 0 === n.getNodes().length ? "" : g$1(e, n);
}
function S$2(t, e = $r()) {
	return e ?? v$1(166), wr(e) && e.isCollapsed() || 0 === e.getNodes().length ? null : JSON.stringify(E$1(t, e));
}
function R$2(t, n, o) {
	const r = t.getData("application/x-lexical-editor");
	if (r) try {
		const t = JSON.parse(r);
		if (t.namespace === o._config.namespace && Array.isArray(t.nodes)) return A$1(o, L$3(t.nodes), n);
	} catch (t) {
		console.error(t);
	}
	const c = t.getData("text/html"), a = t.getData("text/plain");
	if (c && a !== c) try {
		return A$1(o, m(o, new DOMParser().parseFromString(function(t) {
			if (window.trustedTypes && window.trustedTypes.createPolicy) return window.trustedTypes.createPolicy("lexical", { createHTML: (t) => t }).createHTML(t);
			return t;
		}(c), "text/html")), n);
	} catch (t) {
		console.error(t);
	}
	const u = a || t.getData("text/uri-list");
	if (null != u) if (wr(n)) {
		const t = u.split(/(\r?\n|\t)/);
		"" === t[t.length - 1] && t.pop();
		for (let e = 0; e < t.length; e++) {
			const n = $r();
			if (wr(n)) {
				const o = t[e];
				"\n" === o || "\r\n" === o ? n.insertParagraph() : "	" === o ? n.insertNodes([Cr()]) : n.insertText(o);
			}
		}
	} else n.insertRawText(u);
}
function A$1(t, e, n) {
	t.dispatchCommand(ie$1, {
		nodes: e,
		selection: n
	}) || (n.insertNodes(e), function(t) {
		if (wr(t) && t.isCollapsed()) {
			const e = t.anchor;
			let n = null;
			const o = Al(e, "previous");
			if (o) if (ol(o)) n = o.origin;
			else {
				const t = Tl(o, pl(zo(), "next").getFlipped());
				for (const e of t) {
					if (yr(e.origin)) {
						n = e.origin;
						break;
					}
					if (Pi(e.origin) && !e.origin.isInline()) break;
				}
			}
			if (n && yr(n)) {
				const e = n.getFormat(), o = n.getStyle();
				t.format === e && t.style === o || (t.format = e, t.style = o, t.dirty = !0);
			}
		}
	}(n));
}
function P$1(t, e, n, r = []) {
	let i = null === e || n.isSelected(e);
	const l = Pi(n) && n.excludeFromCopy("html");
	let s = n;
	null !== e && yr(s) && (s = M$3(e, s, "clone"));
	const c = Pi(s) ? s.getChildren() : [], a = function(t) {
		const e = t.exportJSON(), n = t.constructor;
		if (e.type !== n.getType() && v$1(58, n.name), Pi(t)) {
			const t = e.children;
			Array.isArray(t) || v$1(59, n.name);
		}
		return e;
	}(s);
	yr(s) && 0 === s.getTextContentSize() && (i = !1);
	for (let o = 0; o < c.length; o++) {
		const r = c[o], l = P$1(t, e, r, a.children);
		!i && Pi(n) && l && n.extractWithChild(r, e, "clone") && (i = !0);
	}
	if (i && !l) r.push(a);
	else if (Array.isArray(a.children)) for (let t = 0; t < a.children.length; t++) {
		const e = a.children[t];
		r.push(e);
	}
	return i;
}
function E$1(t, e) {
	const n = [], o = zo().getChildren();
	for (let r = 0; r < o.length; r++) P$1(t, e, o[r], n);
	return {
		namespace: t._config.namespace,
		nodes: n
	};
}
function L$3(t) {
	const e = [];
	for (let o = 0; o < t.length; o++) {
		const r = t[o], i = Si(r);
		yr(i) && $$2(i), e.push(i);
	}
	return e;
}
var b$1 = null;
async function F$1(t, e, n) {
	if (null !== b$1) return !1;
	if (null !== e) return new Promise((o, r) => {
		t.update(() => {
			o(M$1(t, e, n));
		});
	});
	const o = t.getRootElement(), i = t._window || window, l = i.document, s = Es(i);
	if (null === o || null === s) return !1;
	const c = l.createElement("span");
	c.style.cssText = "position: fixed; top: -1000px;", c.append(l.createTextNode("#")), o.append(c);
	const a = new Range();
	return a.setStart(c, 0), a.setEnd(c, 1), s.removeAllRanges(), s.addRange(a), new Promise((e, o) => {
		const s = t.registerCommand(Je, (o) => (Mt$1(o, ClipboardEvent) && (s(), null !== b$1 && (i.clearTimeout(b$1), b$1 = null), e(M$1(t, o, n))), !0), 4);
		b$1 = i.setTimeout(() => {
			s(), b$1 = null, e(!1);
		}, 50), l.execCommand("copy"), c.remove();
	});
}
function M$1(t, e, n) {
	if (void 0 === n) {
		const e = Es(t._window), o = $r();
		if (!o || o.isCollapsed()) return !1;
		if (!e) return !1;
		const r = e.anchorNode, i = e.focusNode;
		if (null !== r && null !== i && !_o(t, r, i)) return !1;
		n = _$1(o);
	}
	e.preventDefault();
	const o = e.clipboardData;
	return null !== o && (J(o, n), !0);
}
var O$2 = [["text/html", D$1], ["application/x-lexical-editor", S$2]];
function _$1(t = $r()) {
	const e = { "text/plain": t ? t.getTextContent() : "" };
	if (t) {
		const n = zs();
		for (const [o, r] of O$2) {
			const i = r(n, t);
			null !== i && (e[o] = i);
		}
	}
	return e;
}
function J(t, e) {
	for (const [n] of O$2) void 0 === e[n] && t.setData(n, "");
	for (const n in e) {
		const o = e[n];
		void 0 !== o && t.setData(n, o);
	}
}
//#endregion
//#region node_modules/.pnpm/@lexical+rich-text@0.42.0/node_modules/@lexical/rich-text/LexicalRichText.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function pt(t, e) {
	if (void 0 !== document.caretRangeFromPoint) {
		const n = document.caretRangeFromPoint(t, e);
		return null === n ? null : {
			node: n.startContainer,
			offset: n.startOffset
		};
	}
	if ("undefined" !== document.caretPositionFromPoint) {
		const n = document.caretPositionFromPoint(t, e);
		return null === n ? null : {
			node: n.offsetNode,
			offset: n.offset
		};
	}
	return null;
}
var ht = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement, Ct = ht && "documentMode" in document ? document.documentMode : null, vt = ht && /Mac|iPod|iPhone|iPad/.test(navigator.platform), yt = !(!ht || !("InputEvent" in window) || Ct) && "getTargetRanges" in new window.InputEvent("input"), xt = ht && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Dt = ht && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, _t = ht && /^(?=.*Chrome).*/i.test(navigator.userAgent), Nt = ht && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && vt && !_t, wt = ne$2("DRAG_DROP_PASTE_FILE");
var Et = class Et extends Ai {
	static getType() {
		return "quote";
	}
	static clone(t) {
		return new Et(t.__key);
	}
	createDOM(t) {
		const e = document.createElement("blockquote");
		return ec(e, t.theme.quote), e;
	}
	updateDOM(t, e) {
		return !1;
	}
	static importDOM() {
		return { blockquote: (t) => ({
			conversion: St,
			priority: 0
		}) };
	}
	exportDOM(t) {
		const { element: e } = super.exportDOM(t);
		if (Ps(e)) {
			this.isEmpty() && e.append(document.createElement("br"));
			const t = this.getFormatType();
			t && (e.style.textAlign = t);
			const n = this.getDirection();
			n && (e.dir = n);
		}
		return { element: e };
	}
	static importJSON(t) {
		return Ft().updateFromJSON(t);
	}
	insertNewAfter(t, e) {
		const n = Vi(), r = this.getDirection();
		return n.setDirection(r), this.insertAfter(n, e), n;
	}
	collapseAtStart() {
		const t = Vi();
		return this.getChildren().forEach((e) => t.append(e)), this.replace(t), !0;
	}
	canMergeWhenEmpty() {
		return !0;
	}
};
function Ft() {
	return ks(new Et());
}
var Pt = class Pt extends Ai {
	__tag;
	static getType() {
		return "heading";
	}
	static clone(t) {
		return new Pt(t.__tag, t.__key);
	}
	afterCloneFrom(t) {
		super.afterCloneFrom(t), this.__tag = t.__tag;
	}
	constructor(t = "h1", e) {
		super(e), this.__tag = t;
	}
	getTag() {
		return this.getLatest().__tag;
	}
	setTag(t) {
		const e = this.getWritable();
		return e.__tag = t, e;
	}
	createDOM(t) {
		const e = this.__tag, n = document.createElement(e), r = t.theme.heading;
		if (void 0 !== r) {
			const t = r[e];
			ec(n, t);
		}
		return n;
	}
	updateDOM(t, e, n) {
		return t.__tag !== this.__tag;
	}
	static importDOM() {
		return {
			h1: (t) => ({
				conversion: At,
				priority: 0
			}),
			h2: (t) => ({
				conversion: At,
				priority: 0
			}),
			h3: (t) => ({
				conversion: At,
				priority: 0
			}),
			h4: (t) => ({
				conversion: At,
				priority: 0
			}),
			h5: (t) => ({
				conversion: At,
				priority: 0
			}),
			h6: (t) => ({
				conversion: At,
				priority: 0
			}),
			p: (t) => {
				const e = t.firstChild;
				return null !== e && Tt(e) ? {
					conversion: () => ({ node: null }),
					priority: 3
				} : null;
			},
			span: (t) => Tt(t) ? {
				conversion: (t) => ({ node: Mt("h1") }),
				priority: 3
			} : null
		};
	}
	exportDOM(t) {
		const { element: e } = super.exportDOM(t);
		if (Ps(e)) {
			this.isEmpty() && e.append(document.createElement("br"));
			const t = this.getFormatType();
			t && (e.style.textAlign = t);
			const n = this.getDirection();
			n && (e.dir = n);
		}
		return { element: e };
	}
	static importJSON(t) {
		return Mt(t.tag).updateFromJSON(t);
	}
	updateFromJSON(t) {
		return super.updateFromJSON(t).setTag(t.tag);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			tag: this.getTag()
		};
	}
	insertNewAfter(t, e = !0) {
		const n = t ? t.anchor.offset : 0, r = this.getLastDescendant(), o = !r || t && t.anchor.key === r.getKey() && n === r.getTextContentSize() || !t ? Vi() : Mt(this.getTag()), i = this.getDirection();
		if (o.setDirection(i), this.insertAfter(o, e), 0 === n && !this.isEmpty() && t) {
			const t = Vi();
			t.select(), this.replace(t, !0);
		}
		return o;
	}
	collapseAtStart() {
		const t = this.isEmpty() ? Vi() : Mt(this.getTag());
		return this.getChildren().forEach((e) => t.append(e)), this.replace(t), !0;
	}
	extractWithChild() {
		return !0;
	}
};
function Tt(t) {
	return "span" === t.nodeName.toLowerCase() && "26pt" === t.style.fontSize;
}
function At(t) {
	const e = t.nodeName.toLowerCase();
	let n = null;
	return "h1" !== e && "h2" !== e && "h3" !== e && "h4" !== e && "h5" !== e && "h6" !== e || (n = Mt(e), null !== t.style && (Us(t, n), n.setFormat(t.style.textAlign))), { node: n };
}
function St(t) {
	const e = Ft();
	return null !== t.style && (e.setFormat(t.style.textAlign), Us(t, e)), { node: e };
}
function Mt(t = "h1") {
	return ks(new Pt(t));
}
function bt(t) {
	let e = null;
	if (Mt$1(t, DragEvent) ? e = t.dataTransfer : Mt$1(t, ClipboardEvent) && (e = t.clipboardData), null === e) return [
		!1,
		[],
		!1
	];
	const n = e.types, r = n.includes("Files"), o = n.includes("text/html") || n.includes("text/plain");
	return [
		r,
		Array.from(e.files),
		o
	];
}
function Kt(t) {
	return Li(Lo(t));
}
function kt(t) {
	for (const e of [
		"lowercase",
		"uppercase",
		"capitalize"
	]) t.hasFormat(e) && t.toggleFormat(e);
}
function Jt(n) {
	return rc(n.registerCommand(oe$2, (t) => {
		const e = $r();
		return !!Or(e) && (e.clear(), !0);
	}, 0), n.registerCommand(ue$1, (t) => {
		const e = $r();
		return wr(e) ? (e.deleteCharacter(t), !0) : !!Or(e) && (e.deleteNodes(), !0);
	}, 0), n.registerCommand(pe$1, (t) => {
		const e = $r();
		return !!wr(e) && (e.deleteWord(t), !0);
	}, 0), n.registerCommand(ye$1, (t) => {
		const e = $r();
		return !!wr(e) && (e.deleteLine(t), !0);
	}, 0), n.registerCommand(he$1, (e) => {
		const r = $r();
		if ("string" == typeof e) null !== r && r.insertText(e);
		else {
			if (null === r) return !1;
			const o = e.dataTransfer;
			if (null != o) R$2(o, r, n);
			else if (wr(r)) {
				const t = e.data;
				return t && r.insertText(t), !0;
			}
		}
		return !0;
	}, 0), n.registerCommand(_e, () => {
		const t = $r();
		return !!wr(t) && (t.removeText(), !0);
	}, 0), n.registerCommand(me$1, (t) => {
		const e = $r();
		return !!wr(e) && (e.formatText(t), !0);
	}, 0), n.registerCommand(ze, (t) => {
		const e = $r();
		if (!wr(e) && !Or(e)) return !1;
		const n = e.getNodes();
		for (const e of n) {
			const n = Gs(e, (t) => Pi(t) && !t.isInline());
			null !== n && n.setFormat(t);
		}
		return !0;
	}, 0), n.registerCommand(fe$1, (t) => {
		const e = $r();
		return !!wr(e) && (e.insertLineBreak(t), !0);
	}, 0), n.registerCommand(de$1, () => {
		const t = $r();
		return !!wr(t) && (t.insertParagraph(), !0);
	}, 0), n.registerCommand(Fe, () => {
		const t = Cr(), e = $r();
		return wr(e) && (t.setFormat(e.format), t.setStyle(e.style)), ti([t]), !0;
	}, 0), n.registerCommand(Le, () => Bt$1((t) => {
		const e = t.getIndent();
		t.setIndent(e + 1);
	}), 0), n.registerCommand(Ie, () => Bt$1((t) => {
		const e = t.getIndent();
		e > 0 && t.setIndent(Math.max(0, e - 1));
	}), 0), n.registerCommand(be, (t) => {
		const e = $r();
		if (Or(e)) {
			const n = e.getNodes();
			if (n.length > 0) return t.preventDefault(), n[0].selectPrevious(), !0;
		} else if (wr(e)) {
			const n = ls(e.focus, !0);
			if (!t.shiftKey && Li(n) && !n.isIsolated() && !n.isInline()) return n.selectPrevious(), t.preventDefault(), !0;
		}
		return !1;
	}, 0), n.registerCommand(we, (t) => {
		const e = $r();
		if (Or(e)) {
			const n = e.getNodes();
			if (n.length > 0) return t.preventDefault(), n[0].selectNext(0, 0), !0;
		} else if (wr(e)) {
			if (function(t) {
				const e = t.focus;
				return "root" === e.key && e.offset === zo().getChildrenSize();
			}(e)) return t.preventDefault(), !0;
			const n = ls(e.focus, !1);
			if (!t.shiftKey && Li(n) && !n.isIsolated() && !n.isInline()) return n.selectNext(), t.preventDefault(), !0;
		}
		return !1;
	}, 0), n.registerCommand(Te, (t) => {
		const e = $r();
		if (Or(e)) {
			const n = e.getNodes();
			if (n.length > 0) return t.preventDefault(), A$2(n[0]) ? n[0].selectNext(0, 0) : n[0].selectPrevious(), !0;
		}
		if (!wr(e)) return !1;
		if (Z$1(e, !0)) {
			const n = t.shiftKey;
			return t.preventDefault(), ne$1(e, n, !0), !0;
		}
		return !1;
	}, 0), n.registerCommand(ve$1, (t) => {
		const e = $r();
		if (Or(e)) {
			const n = e.getNodes();
			if (n.length > 0) return t.preventDefault(), A$2(n[0]) ? n[0].selectPrevious() : n[0].selectNext(0, 0), !0;
		}
		if (!wr(e)) return !1;
		const n = t.shiftKey;
		return !!Z$1(e, !1) && (t.preventDefault(), ne$1(e, n, !1), !0);
	}, 0), n.registerCommand(Me, (t) => {
		if (Kt(t.target)) return !1;
		const e = $r();
		if (wr(e)) {
			if (function(t) {
				if (!t.isCollapsed()) return !1;
				const { anchor: e } = t;
				if (0 !== e.offset) return !1;
				const n = e.getNode();
				if (Ki(n)) return !1;
				const r = Ct$2(n);
				return r.getIndent() > 0 && (r.is(n) || n.is(r.getFirstDescendant()));
			}(e)) return t.preventDefault(), n.dispatchCommand(Ie, void 0);
			if (Dt && "ko-KR" === navigator.language) return !1;
		} else if (!Or(e)) return !1;
		return t.preventDefault(), n.dispatchCommand(ue$1, !0);
	}, 0), n.registerCommand(Pe, (t) => {
		if (Kt(t.target)) return !1;
		const e = $r();
		return !(!wr(e) && !Or(e)) && (t.preventDefault(), n.dispatchCommand(ue$1, !1));
	}, 0), n.registerCommand(Ee$1, (t) => {
		const e = $r();
		if (!wr(e)) return !1;
		if (kt(e), null !== t) {
			if ((Dt || xt || Nt) && yt) return !1;
			if (t.preventDefault(), t.shiftKey) return n.dispatchCommand(fe$1, !1);
		}
		return n.dispatchCommand(de$1, void 0);
	}, 0), n.registerCommand(Ae, () => {
		return !!wr($r()) && (n.blur(), !0);
	}, 0), n.registerCommand(Ke, (t) => {
		const [, e] = bt(t);
		if (e.length > 0) {
			const r = pt(t.clientX, t.clientY);
			if (null !== r) {
				const { offset: t, node: o } = r, i = Lo(o);
				if (null !== i) {
					const e = Wr();
					if (yr(i)) e.anchor.set(i.getKey(), t, "text"), e.focus.set(i.getKey(), t, "text");
					else {
						const t = i.getParentOrThrow().getKey(), n = i.getIndexWithinParent() + 1;
						e.anchor.set(t, n, "element"), e.focus.set(t, n, "element");
					}
					Bo(Ct$3(e));
				}
				n.dispatchCommand(wt, e);
			}
			return t.preventDefault(), !0;
		}
		return !!wr($r());
	}, 0), n.registerCommand(Re, (t) => {
		const [e] = bt(t), n = $r();
		return !(e && !wr(n));
	}, 0), n.registerCommand(Be, (t) => {
		const [e] = bt(t), n = $r();
		if (e && !wr(n)) return !1;
		const r = pt(t.clientX, t.clientY);
		if (null !== r) Li(Lo(r.node)) && t.preventDefault();
		return !0;
	}, 0), n.registerCommand(Ue, () => (ns(), !0), 0), n.registerCommand(Je, (t) => (F$1(n, Mt$1(t, ClipboardEvent) ? t : null), !0), 0), n.registerCommand(je, (t) => (async function(t, n) {
		await F$1(n, Mt$1(t, ClipboardEvent) ? t : null), n.update(() => {
			const t = $r();
			wr(t) ? t.removeText() : Or(t) && t.getNodes().forEach((t) => t.remove());
		});
	}(t, n), !0), 0), n.registerCommand(ge$1, (e) => {
		const [, r, o] = bt(e);
		if (r.length > 0 && !o) return n.dispatchCommand(wt, r), !0;
		if (Ds(e.target) && go(e.target)) return !1;
		return null !== $r() && (function(e, n) {
			e.preventDefault(), n.update(() => {
				const r = $r(), o = Mt$1(e, InputEvent) || Mt$1(e, KeyboardEvent) ? null : e.clipboardData;
				null != o && null !== r && R$2(o, r, n);
			}, { tag: "paste" });
		}(e, n), !0);
	}, 0), n.registerCommand(Oe, (t) => {
		const e = $r();
		return wr(e) && kt(e), !1;
	}, 0), n.registerCommand(De, (t) => {
		const e = $r();
		return wr(e) && kt(e), !1;
	}, 0));
}
Hl({
	conflictsWith: ["@lexical/plain-text"],
	dependencies: [d$1],
	name: "@lexical/rich-text",
	nodes: () => [Pt, Et],
	register: Jt
});
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/LexicalRichTextPlugin.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function g(r, ...e) {
	const t = new URL("https://lexical.dev/docs/error"), o = new URLSearchParams();
	o.append("code", r);
	for (const r of e) o.append("v", r);
	throw t.search = o.toString(), Error(`Minified Lexical error #${r}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var y = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? useLayoutEffect : useEffect;
function w({ editor: r, ErrorBoundary: e }) {
	return function(r, e) {
		const [t, o] = useState(() => r.getDecorators());
		return y(() => r.registerDecoratorListener((r) => {
			flushSync(() => {
				o(r);
			});
		}), [r]), useEffect(() => {
			o(r.getDecorators());
		}, [r]), useMemo(() => {
			const o = [], n = Object.keys(t);
			for (let i = 0; i < n.length; i++) {
				const c = n[i], a = jsx(e, {
					onError: (e) => r._onError(e),
					children: jsx(Suspense, {
						fallback: null,
						children: t[c]
					})
				}), s = r.getElementByKey(c);
				null !== s && o.push(createPortal(a, s, c));
			}
			return o;
		}, [
			e,
			t,
			r
		]);
	}(r, e);
}
function v({ editor: r$5, ErrorBoundary: e }) {
	return function(r$4) {
		const e = se.maybeFromEditor(r$4);
		if (e && e.hasExtensionByName(r.name)) {
			for (const r of ["@lexical/plain-text", "@lexical/rich-text"]) e.hasExtensionByName(r) && g(320, r);
			return !0;
		}
		return !1;
	}(r$5) ? null : jsx(w, {
		editor: r$5,
		ErrorBoundary: e
	});
}
function B$1(r) {
	return r.getEditorState().read(g$2(r.isComposing()));
}
function L$2({ contentEditable: e, placeholder: t = null, ErrorBoundary: o$6 }) {
	const [n] = o();
	return function(r) {
		y(() => rc(Jt(r), s(r)), [r]);
	}(n), jsxs(Fragment$1, { children: [
		e,
		jsx(b, { content: t }),
		jsx(v, {
			editor: n,
			ErrorBoundary: o$6
		})
	] });
}
function b({ content: t }) {
	const [o$7] = o(), n = function(r) {
		const [e, t] = useState(() => B$1(r));
		return y(() => {
			function e() {
				t(B$1(r));
			}
			return e(), rc(r.registerUpdateListener(() => {
				e();
			}), r.registerEditableListener(() => {
				e();
			}));
		}, [r]), e;
	}(o$7), i = a();
	return n ? "function" == typeof t ? t(i) : t : null;
}
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/LexicalTypeaheadMenuPlugin.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var x = "startTransition";
var S$1 = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement, R$1 = S$1 ? useLayoutEffect : useEffect;
var O$1 = class {
	key;
	ref;
	icon;
	title;
	constructor(t) {
		this.key = t, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
	}
	setRefElement(t) {
		this.ref = { current: t };
	}
};
var I = (t) => {
	const e = document.getElementById("typeahead-menu");
	if (!e) return;
	const n = e.getBoundingClientRect();
	n.top + n.height > window.innerHeight && e.scrollIntoView({ block: "center" }), n.top < 0 && e.scrollIntoView({ block: "center" }), t.scrollIntoView({ block: "nearest" });
};
function N(t, e) {
	const n = t.getBoundingClientRect(), o = e.getBoundingClientRect();
	return n.top >= o.top - 6 && n.top <= o.bottom + 6;
}
function A(e, n, o$3, r) {
	const [l] = o();
	useEffect(() => {
		if (null != n && null != e) {
			const t = l.getRootElement(), e = null != t ? function(t) {
				let e = getComputedStyle(t);
				const n = "absolute" === e.position, o = /(auto|scroll)/;
				if ("fixed" === e.position) return document.body;
				for (let r = t; r = r.parentElement;) if (e = getComputedStyle(r), (!n || "static" !== e.position) && o.test(e.overflow + e.overflowY + e.overflowX)) return r;
				return document.body;
			}(t) : document.body;
			let i = !1, s = N(n, e);
			const u = function() {
				i || (window.requestAnimationFrame(function() {
					o$3(), i = !1;
				}), i = !0);
				const t = N(n, e);
				t !== s && (s = t, r?.(t));
			}, c = new ResizeObserver(o$3);
			return window.addEventListener("resize", o$3), document.addEventListener("scroll", u, {
				capture: !0,
				passive: !0
			}), c.observe(n), () => {
				c.unobserve(n), window.removeEventListener("resize", o$3), document.removeEventListener("scroll", u, !0);
			};
		}
	}, [
		n,
		l,
		r,
		o$3,
		e
	]);
}
var P = ne$2("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function T$1({ index: t, isSelected: e, onClick: n, onMouseEnter: o, option: r }) {
	let l = "item";
	return e && (l += " selected"), jsxs("li", {
		tabIndex: -1,
		className: l,
		ref: r.setRefElement,
		role: "option",
		"aria-selected": e,
		id: "typeahead-item-" + t,
		onMouseEnter: o,
		onClick: n,
		children: [r.icon, jsx("span", {
			className: "text",
			children: r.title
		})]
	}, r.key);
}
function L$1({ close: t, editor: e, anchorElementRef: a, resolution: d, options: m, menuRenderFn: p, onSelectOption: g, shouldSplitNodeWithQuery: b = !1, commandPriority: x = 1, preselectFirstItem: S = !0 }) {
	const [O, N] = useState(null), A = null !== O ? Math.min(m.length - 1, O) : null;
	useEffect(() => {
		S && N(0);
	}, [d.match && d.match.matchingString, S]);
	const _ = useCallback((n) => {
		e.update(() => {
			g(n, null != d.match && b ? function(t) {
				const e = $r();
				if (!wr(e) || !e.isCollapsed()) return null;
				const n = e.anchor;
				if ("text" !== n.type) return null;
				const o = n.getNode();
				if (!o.isSimpleText()) return null;
				const r = n.offset, l = o.getTextContent().slice(0, r), i = t.replaceableString.length, s = r - function(t, e, n) {
					let o = n;
					for (let n = o; n <= e.length; n++) t.slice(-n) === e.substring(0, n) && (o = n);
					return o;
				}(l, t.matchingString, i);
				if (s < 0) return null;
				let a;
				return 0 === s ? [a] = o.splitText(r) : [, a] = o.splitText(s, r), a;
			}(d.match) : null, t, d.match ? d.match.matchingString : "");
		});
	}, [
		e,
		b,
		d.match,
		g,
		t
	]), k = useCallback((t) => {
		const n = e.getRootElement();
		null !== n && (n.setAttribute("aria-activedescendant", "typeahead-item-" + t), N(t));
	}, [e]), D = useCallback(() => a.current && m.length ? ReactDOM.createPortal(jsx("div", {
		className: "typeahead-popover mentions-menu",
		children: jsx("ul", { children: m.map((t, e) => jsx(T$1, {
			index: e,
			isSelected: A === e,
			onClick: () => {
				N(e), _(t);
			},
			onMouseEnter: () => {
				N(e);
			},
			option: t
		}, t.key)) })
	}), a.current) : null, [
		a,
		m,
		A,
		_,
		N
	]);
	useEffect(() => () => {
		const t = e.getRootElement();
		null !== t && t.removeAttribute("aria-activedescendant");
	}, [e]), R$1(() => {
		null === m ? N(null) : null === A && S && k(0);
	}, [
		m,
		A,
		k,
		S
	]), useEffect(() => rc(e.registerCommand(P, ({ option: t }) => !(!t.ref || null == t.ref.current) && (I(t.ref.current), !0), x)), [
		e,
		k,
		x
	]), useEffect(() => rc(e.registerCommand(we, (t) => {
		const n = t;
		if (null !== m && m.length) {
			const t = null === A ? 0 : A !== m.length - 1 ? A + 1 : 0;
			k(t);
			const o = m[t];
			if (!o) return k(-1), n.preventDefault(), n.stopImmediatePropagation(), !0;
			o.ref && o.ref.current && e.dispatchCommand(P, {
				index: t,
				option: o
			}), n.preventDefault(), n.stopImmediatePropagation();
		}
		return !0;
	}, x), e.registerCommand(be, (t) => {
		const e = t;
		if (null !== m && m.length) {
			const t = null === A ? m.length - 1 : 0 !== A ? A - 1 : m.length - 1;
			k(t);
			const n = m[t];
			if (!n) return k(-1), e.preventDefault(), e.stopImmediatePropagation(), !0;
			n.ref && n.ref.current && I(n.ref.current), e.preventDefault(), e.stopImmediatePropagation();
		}
		return !0;
	}, x), e.registerCommand(Ae, (e) => {
		const n = e;
		return n.preventDefault(), n.stopImmediatePropagation(), t(), !0;
	}, x), e.registerCommand(De, (t) => {
		const e = t;
		return null !== m && null !== A && null != m[A] && (e.preventDefault(), e.stopImmediatePropagation(), _(m[A]), !0);
	}, x), e.registerCommand(Ee$1, (t) => null !== m && null !== A && null != m[A] && (null !== t && (t.preventDefault(), t.stopImmediatePropagation()), _(m[A]), !0), x)), [
		_,
		t,
		e,
		m,
		A,
		k,
		x
	]);
	const $ = useMemo(() => ({
		options: m,
		selectOptionAndCleanUp: _,
		selectedIndex: A,
		setHighlightedIndex: N
	}), [
		_,
		A,
		m
	]);
	return null != p ? p(a, $, d.match ? d.match.matchingString : "") : D();
}
function _(t, e) {
	null != e && (t.className = e), t.setAttribute("aria-label", "Typeahead menu"), t.setAttribute("role", "listbox"), t.style.display = "block", t.style.position = "absolute";
}
ne$2("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function F({ options: e, onQueryChange: o$4, onSelectOption: r, onOpen: l, onClose: i, menuRenderFn: s, triggerFn: p, anchorClassName: w, commandPriority: v = 1, parent: C, preselectFirstItem: b = !0, ignoreEntityBoundary: R = !1 }) {
	const [O] = o(), [I, N] = useState(null), P = function(e, n, o$5, r = S$1 ? document.body : void 0, l = !0) {
		const [i] = o(), s = S$1 ? document.createElement("div") : null, u = useRef(s), c = useCallback(() => {
			if (null === u.current || void 0 === r) return;
			u.current.style.top = u.current.style.bottom;
			const t = i.getRootElement(), n = u.current, s = n.firstChild;
			if (null !== t && null !== e) {
				const { left: i, top: c, width: a, height: d } = e.getRect(), m = u.current.offsetHeight;
				if (n.style.top = `${c + m + 3 + (l ? window.pageYOffset : 0)}px`, n.style.left = `${i + window.pageXOffset}px`, n.style.height = `${d}px`, n.style.width = `${a}px`, null !== s) {
					s.style.top = `${c}`;
					const e = s.getBoundingClientRect(), o = e.height, r = e.width, u = t.getBoundingClientRect();
					i + r > u.right && (n.style.left = `${u.right - r + window.pageXOffset}px`), (c + o > window.innerHeight || c + o > u.bottom) && c - u.top > o + d && (n.style.top = `${c - o - d + (l ? window.pageYOffset : 0)}px`);
				}
				n.isConnected || (_(n, o$5), r.append(n)), n.setAttribute("id", "typeahead-menu"), t.setAttribute("aria-controls", "typeahead-menu");
			}
		}, [
			i,
			e,
			l,
			o$5,
			r
		]);
		useEffect(() => {
			const t = i.getRootElement();
			return null !== e && c(), () => {
				null !== t && t.removeAttribute("aria-controls");
				const e = u.current;
				null !== e && e.isConnected && (e.remove(), e.removeAttribute("id"));
			};
		}, [
			i,
			c,
			e
		]);
		const a = useCallback((t) => {
			null !== e && (t || n(null));
		}, [e, n]);
		return A(e, u.current, c, a), null != s && s === u.current && (_(s, o$5), r?.append(s)), u;
	}(I, N, w, C), T = useCallback(() => {
		N(null), null != i && null !== I && i();
	}, [i, I]), k = useCallback((t) => {
		N(t), null != l && null === I && l(t);
	}, [l, I]);
	return useEffect(() => {
		const t = O.registerUpdateListener(() => {
			O.getEditorState().read(() => {
				if (!O.isEditable()) return void T();
				if (O.isComposing()) return;
				const t = O._window || window, e = t.document.createRange(), n = $r(), r = function(t) {
					let e = null;
					return t.getEditorState().read(() => {
						const t = $r();
						wr(t) && (e = function(t) {
							const e = t.anchor;
							if ("text" !== e.type) return null;
							const n = e.getNode();
							if (!n.isSimpleText()) return null;
							const o = e.offset;
							return n.getTextContent().slice(0, o);
						}(t));
					}), e;
				}(O);
				if (!wr(n) || !n.isCollapsed() || null === r || null === e) return void T();
				const l = p(r, O);
				if (o$4(l ? l.matchingString : null), null !== l && (R || !function(t, e) {
					return 0 === e && t.getEditorState().read(() => {
						const t = $r();
						if (wr(t)) {
							const e = t.anchor.getNode().getPreviousSibling();
							return yr(e) && e.isTextEntity();
						}
						return !1;
					});
				}(O, l.leadOffset))) {
					if (null !== function(t, e, n) {
						const o = Es(n);
						if (null === o || !o.isCollapsed) return !1;
						const r = o.anchorNode, l = t, i = o.anchorOffset;
						if (null == r || null == i) return !1;
						try {
							e.setStart(r, l), e.setEnd(r, i);
						} catch (t) {
							return !1;
						}
						return !0;
					}(l.leadOffset, e, t)) return i = () => k({
						getRect: () => e.getBoundingClientRect(),
						match: l
					}), void (x in React ? React[x](i) : i());
				}
				var i;
				T();
			});
		});
		return () => {
			t();
		};
	}, [
		O,
		p,
		o$4,
		I,
		T,
		k,
		R
	]), useEffect(() => O.registerEditableListener((t) => {
		t || T();
	}), [O, T]), null === I || null === O || null === P.current ? null : jsx(L$1, {
		close: T,
		resolution: I,
		editor: O,
		anchorElementRef: P,
		options: e,
		menuRenderFn: s,
		shouldSplitNodeWithQuery: !0,
		onSelectOption: r,
		commandPriority: v,
		preselectFirstItem: b
	});
}
//#endregion
//#region app/components/app/configuration/config/automatic/types.ts
var GeneratorType = /* @__PURE__ */ function(GeneratorType) {
	GeneratorType["prompt"] = "prompt";
	GeneratorType["code"] = "code";
	return GeneratorType;
}({});
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/useLexicalNodeSelection.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function d(e, t) {
	return e.getEditorState().read(() => {
		const e = Po(t);
		return null !== e && e.isSelected();
	});
}
function u(c) {
	const [u] = o(), [p, s] = useState(() => d(u, c));
	useEffect(() => {
		let e = !0;
		const t = u.registerUpdateListener(() => {
			e && s(d(u, c));
		});
		return () => {
			e = !1, t();
		};
	}, [u, c]);
	return [
		p,
		useCallback((e) => {
			u.update(() => {
				let a = $r();
				Or(a) || (a = Jr(), Bo(a)), Or(a) && (e ? a.add(c) : a.delete(c));
			});
		}, [u, c]),
		useCallback(() => {
			u.update(() => {
				const e = $r();
				Or(e) && e.clear();
			});
		}, [u])
	];
}
//#endregion
//#region app/components/base/prompt-editor/plugins/context-block/component.tsx
var ContextBlockComponent = ({ nodeKey, datasets = [], onAddContext, canNotAddContext }) => {
	const { t } = useTranslation();
	const [ref, isSelected] = useSelectOrDelete(nodeKey, DELETE_CONTEXT_BLOCK_COMMAND);
	const [triggerRef, open, setOpen] = useTrigger();
	const { eventEmitter } = useEventEmitterContextContext();
	const [localDatasets, setLocalDatasets] = useState(datasets);
	eventEmitter?.useSubscription((v) => {
		if (v?.type === "prompt-editor-context-block-update-datasets") setLocalDatasets(v.payload);
	});
	return /* @__PURE__ */ jsxs("div", {
		className: `
      group inline-flex h-6 items-center rounded-[5px] border border-transparent bg-[#F4F3FF] pl-1 pr-0.5 text-[#6938EF] hover:bg-[#EBE9FE]
      ${open ? "bg-[#EBE9FE]" : ""}
      ${isSelected && "!border-[#9B8AFB]"}
    `,
		ref,
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "i-custom-vender-solid-files-file-05 mr-1 h-[14px] w-[14px]",
				"data-testid": "file-icon"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mr-1 text-xs font-medium",
				children: t("promptEditor.context.item.title", { ns: "common" })
			}),
			!canNotAddContext && /* @__PURE__ */ jsxs(PortalToFollowElem, {
				open,
				onOpenChange: setOpen,
				placement: "bottom-end",
				offset: {
					mainAxis: 3,
					alignmentAxis: -147
				},
				children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
					ref: triggerRef,
					children: /* @__PURE__ */ jsx("div", {
						className: `
            flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded text-[11px] font-semibold
            ${open ? "bg-[#6938EF] text-white" : "bg-white/50 group-hover:bg-white group-hover:shadow-xs"}
          `,
						children: localDatasets.length
					})
				}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
					style: { zIndex: 100 },
					children: /* @__PURE__ */ jsxs("div", {
						className: "w-[360px] rounded-xl bg-white shadow-lg",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "p-4",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "mb-2 text-xs font-medium text-gray-500",
									children: t("promptEditor.context.modal.title", {
										ns: "common",
										num: localDatasets.length
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "max-h-[270px] overflow-y-auto",
									children: localDatasets.map((dataset) => /* @__PURE__ */ jsxs("div", {
										className: "flex h-8 items-center",
										children: [/* @__PURE__ */ jsx("div", {
											className: "mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-[0.5px] border-[#EAECF5] bg-[#F5F8FF]",
											children: /* @__PURE__ */ jsx("span", {
												className: "i-custom-vender-solid-files-folder h-4 w-4 text-[#444CE7]",
												"data-testid": "folder-icon"
											})
										}), /* @__PURE__ */ jsx("div", {
											className: "truncate text-sm text-gray-800",
											title: "",
											children: dataset.name
										})]
									}, dataset.id))
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex h-8 cursor-pointer items-center text-[#155EEF]",
									onClick: onAddContext,
									children: [/* @__PURE__ */ jsx("div", {
										className: "mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-[0.5px] border-gray-100",
										"data-testid": "add-button",
										children: /* @__PURE__ */ jsx("span", { className: "i-ri-add-line h-[14px] w-[14px]" })
									}), /* @__PURE__ */ jsx("div", {
										className: "text-[13px] font-medium",
										title: "",
										children: t("promptEditor.context.modal.add", { ns: "common" })
									})]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "rounded-b-xl border-t-[0.5px] border-gray-50 bg-gray-50 px-4 py-3 text-xs text-gray-500",
							children: t("promptEditor.context.modal.footer", { ns: "common" })
						})]
					})
				})]
			})
		]
	});
};
//#endregion
//#region app/components/base/prompt-editor/plugins/context-block/node.tsx
var ContextBlockNode = class ContextBlockNode extends Fi {
	__datasets;
	__onAddContext;
	__canNotAddContext;
	static getType() {
		return "context-block";
	}
	static clone(node) {
		return new ContextBlockNode(node.__datasets, node.__onAddContext, node.getKey(), node.__canNotAddContext);
	}
	isInline() {
		return true;
	}
	constructor(datasets, onAddContext, key, canNotAddContext) {
		super(key);
		this.__datasets = datasets;
		this.__onAddContext = onAddContext;
		this.__canNotAddContext = canNotAddContext || false;
	}
	createDOM() {
		const div = document.createElement("div");
		div.classList.add("inline-flex", "items-center", "align-middle");
		return div;
	}
	updateDOM() {
		return false;
	}
	decorate() {
		return /* @__PURE__ */ jsx(ContextBlockComponent, {
			nodeKey: this.getKey(),
			datasets: this.getDatasets(),
			onAddContext: this.getOnAddContext(),
			canNotAddContext: this.getCanNotAddContext()
		});
	}
	getDatasets() {
		return this.getLatest().__datasets;
	}
	getOnAddContext() {
		return this.getLatest().__onAddContext;
	}
	getCanNotAddContext() {
		return this.getLatest().__canNotAddContext;
	}
	static importJSON(serializedNode) {
		return $createContextBlockNode(serializedNode.datasets, serializedNode.onAddContext, serializedNode.canNotAddContext);
	}
	exportJSON() {
		return {
			type: "context-block",
			version: 1,
			datasets: this.getDatasets(),
			onAddContext: this.getOnAddContext(),
			canNotAddContext: this.getCanNotAddContext()
		};
	}
	getTextContent() {
		return "{{#context#}}";
	}
};
function $createContextBlockNode(datasets, onAddContext, canNotAddContext) {
	return new ContextBlockNode(datasets, onAddContext, void 0, canNotAddContext);
}
function $isContextBlockNode(node) {
	return node instanceof ContextBlockNode;
}
//#endregion
//#region app/components/base/prompt-editor/plugins/custom-text/node.tsx
var CustomTextNode = class CustomTextNode extends lr {
	static getType() {
		return "custom-text";
	}
	static clone(node) {
		return new CustomTextNode(node.__text, node.__key);
	}
	createDOM(config) {
		return super.createDOM(config);
	}
	static importJSON(serializedNode) {
		const node = pr(serializedNode.text);
		node.setFormat(serializedNode.format);
		node.setDetail(serializedNode.detail);
		node.setMode(serializedNode.mode);
		node.setStyle(serializedNode.style);
		return node;
	}
	exportJSON() {
		return {
			detail: this.getDetail(),
			format: this.getFormat(),
			mode: this.getMode(),
			style: this.getStyle(),
			text: this.getTextContent(),
			type: "custom-text",
			version: 1
		};
	}
	isSimpleText() {
		return (this.__type === "text" || this.__type === "custom-text") && this.__mode === 0;
	}
};
function $createCustomTextNode(text) {
	return new CustomTextNode(text);
}
//#endregion
//#region app/components/base/prompt-editor/utils.ts
function registerLexicalTextEntity(editor, getMatch, targetNode, createNode) {
	const isTargetNode = (node) => {
		return node instanceof targetNode;
	};
	const replaceWithSimpleText = (node) => {
		const textNode = pr(node.getTextContent());
		textNode.setFormat(node.getFormat());
		node.replace(textNode);
	};
	const getMode = (node) => {
		return node.getLatest().__mode;
	};
	const textNodeTransform = (node) => {
		if (!node.isSimpleText()) return;
		const prevSibling = node.getPreviousSibling();
		let text = node.getTextContent();
		let currentNode = node;
		let match;
		if (yr(prevSibling)) {
			const previousText = prevSibling.getTextContent();
			const prevMatch = getMatch(previousText + text);
			if (isTargetNode(prevSibling)) if (prevMatch === null || getMode(prevSibling) !== 0) {
				replaceWithSimpleText(prevSibling);
				return;
			} else {
				const diff = prevMatch.end - previousText.length;
				if (diff > 0) {
					const newTextContent = previousText + text.slice(0, diff);
					prevSibling.select();
					prevSibling.setTextContent(newTextContent);
					if (diff === text.length) node.remove();
					else {
						const remainingText = text.slice(diff);
						node.setTextContent(remainingText);
					}
					return;
				}
			}
			else if (prevMatch === null || prevMatch.start < previousText.length) return;
		}
		while (true) {
			match = getMatch(text);
			let nextText = match === null ? "" : text.slice(match.end);
			text = nextText;
			if (nextText === "") {
				const nextSibling = currentNode.getNextSibling();
				if (yr(nextSibling)) {
					nextText = currentNode.getTextContent() + nextSibling.getTextContent();
					const nextMatch = getMatch(nextText);
					if (nextMatch === null) {
						if (isTargetNode(nextSibling)) replaceWithSimpleText(nextSibling);
						else nextSibling.markDirty();
						return;
					} else if (nextMatch.start !== 0) return;
				}
			} else {
				const nextMatch = getMatch(nextText);
				if (nextMatch !== null && nextMatch.start === 0) return;
			}
			if (match === null) return;
			if (match.start === 0 && yr(prevSibling) && prevSibling.isTextEntity()) continue;
			let nodeToReplace;
			if (match.start === 0) [nodeToReplace, currentNode] = currentNode.splitText(match.end);
			else [, nodeToReplace, currentNode] = currentNode.splitText(match.start, match.end);
			const replacementNode = createNode(nodeToReplace);
			replacementNode.setFormat(nodeToReplace.getFormat());
			nodeToReplace.replace(replacementNode);
			if (currentNode == null) return;
		}
	};
	const reverseNodeTransform = (node) => {
		const text = node.getTextContent();
		const match = getMatch(text);
		if (match === null || match.start !== 0) {
			replaceWithSimpleText(node);
			return;
		}
		if (text.length > match.end) {
			node.splitText(match.end);
			return;
		}
		const prevSibling = node.getPreviousSibling();
		if (yr(prevSibling) && prevSibling.isTextEntity()) {
			replaceWithSimpleText(prevSibling);
			replaceWithSimpleText(node);
		}
		const nextSibling = node.getNextSibling();
		if (yr(nextSibling) && nextSibling.isTextEntity()) {
			replaceWithSimpleText(nextSibling);
			if (isTargetNode(node)) replaceWithSimpleText(node);
		}
	};
	return [editor.registerNodeTransform(CustomTextNode, textNodeTransform), editor.registerNodeTransform(targetNode, reverseNodeTransform)];
}
var decoratorTransform = (node, getMatch, createNode) => {
	if (!node.isSimpleText()) return;
	const prevSibling = node.getPreviousSibling();
	let text = node.getTextContent();
	let currentNode = node;
	let match;
	while (true) {
		match = getMatch(text);
		let nextText = match === null ? "" : text.slice(match.end);
		text = nextText;
		if (nextText === "") {
			const nextSibling = currentNode.getNextSibling();
			if (yr(nextSibling)) {
				nextText = currentNode.getTextContent() + nextSibling.getTextContent();
				const nextMatch = getMatch(nextText);
				if (nextMatch === null) {
					nextSibling.markDirty();
					return;
				} else if (nextMatch.start !== 0) return;
			}
		} else {
			const nextMatch = getMatch(nextText);
			if (nextMatch !== null && nextMatch.start === 0) return;
		}
		if (match === null) return;
		if (match.start === 0 && yr(prevSibling) && prevSibling.isTextEntity()) continue;
		let nodeToReplace;
		if (match.start === 0) [nodeToReplace, currentNode] = currentNode.splitText(match.end);
		else [, nodeToReplace, currentNode] = currentNode.splitText(match.start, match.end);
		const replacementNode = createNode(nodeToReplace);
		nodeToReplace.replace(replacementNode);
		if (currentNode == null) return;
	}
};
function getFullMatchOffset(documentText, entryText, offset) {
	let triggerOffset = offset;
	for (let i = triggerOffset; i <= entryText.length; i++) if (documentText.slice(-i) === entryText.slice(0, i)) triggerOffset = i;
	return triggerOffset;
}
function $splitNodeContainingQuery(match) {
	const selection = $r();
	if (!wr(selection) || !selection.isCollapsed()) return null;
	const anchor = selection.anchor;
	if (anchor.type !== "text") return null;
	const anchorNode = anchor.getNode();
	if (!anchorNode.isSimpleText()) return null;
	const selectionOffset = anchor.offset;
	const textContent = anchorNode.getTextContent().slice(0, selectionOffset);
	const characterOffset = match.replaceableString.length;
	const startOffset = selectionOffset - getFullMatchOffset(textContent, match.matchingString, characterOffset);
	if (startOffset < 0) return null;
	let newNode;
	if (startOffset === 0) [newNode] = anchorNode.splitText(selectionOffset);
	else [, newNode] = anchorNode.splitText(startOffset, selectionOffset);
	return newNode;
}
function textToEditorState(text) {
	const paragraph = text && typeof text === "string" ? text.split("\n") : [""];
	return JSON.stringify({ root: {
		children: paragraph.map((p) => {
			return {
				children: [{
					detail: 0,
					format: 0,
					mode: "normal",
					style: "",
					text: p,
					type: "custom-text",
					version: 1
				}],
				direction: "ltr",
				format: "",
				indent: 0,
				type: "paragraph",
				version: 1
			};
		}),
		direction: "ltr",
		format: "",
		indent: 0,
		type: "root",
		version: 1
	} });
}
//#endregion
//#region app/components/base/prompt-editor/plugins/context-block/context-block-replacement-block.tsx
var REGEX$8 = new RegExp(CONTEXT_PLACEHOLDER_TEXT);
var ContextBlockReplacementBlock = ({ datasets = [], onAddContext = noop, onInsert, canNotAddContext }) => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([ContextBlockNode])) throw new Error("ContextBlockNodePlugin: ContextBlockNode not registered on editor");
	}, [editor]);
	const createContextBlockNode = useCallback(() => {
		if (onInsert) onInsert();
		return ks($createContextBlockNode(datasets, onAddContext, canNotAddContext));
	}, [
		datasets,
		onAddContext,
		onInsert,
		canNotAddContext
	]);
	const getMatch = useCallback((text) => {
		const matchArr = REGEX$8.exec(text);
		if (matchArr === null) return null;
		const startOffset = matchArr.index;
		return {
			end: startOffset + CONTEXT_PLACEHOLDER_TEXT.length,
			start: startOffset
		};
	}, []);
	useEffect(() => {
		REGEX$8.lastIndex = 0;
		return rc(editor.registerNodeTransform(CustomTextNode, (textNode) => decoratorTransform(textNode, getMatch, createContextBlockNode)));
	}, []);
	return null;
};
var context_block_replacement_block_default = memo(ContextBlockReplacementBlock);
//#endregion
//#region app/components/base/prompt-editor/plugins/context-block/index.tsx
var INSERT_CONTEXT_BLOCK_COMMAND = ne$2("INSERT_CONTEXT_BLOCK_COMMAND");
var DELETE_CONTEXT_BLOCK_COMMAND = ne$2("DELETE_CONTEXT_BLOCK_COMMAND");
var ContextBlock = memo(({ datasets = [], onAddContext = noop, onInsert, onDelete, canNotAddContext }) => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([ContextBlockNode])) throw new Error("ContextBlockPlugin: ContextBlock not registered on editor");
		return rc(editor.registerCommand(INSERT_CONTEXT_BLOCK_COMMAND, () => {
			ti([$createContextBlockNode(datasets, onAddContext, canNotAddContext)]);
			if (onInsert) onInsert();
			return true;
		}, 0), editor.registerCommand(DELETE_CONTEXT_BLOCK_COMMAND, () => {
			if (onDelete) onDelete();
			return true;
		}, 0));
	}, [
		editor,
		datasets,
		onAddContext,
		onInsert,
		onDelete,
		canNotAddContext
	]);
	return null;
});
ContextBlock.displayName = "ContextBlock";
//#endregion
//#region app/components/base/prompt-editor/plugins/history-block/component.tsx
var HistoryBlockComponent = ({ nodeKey, roleName = {
	user: "",
	assistant: ""
}, onEditRole }) => {
	const { t } = useTranslation();
	const [ref, isSelected] = useSelectOrDelete(nodeKey, DELETE_HISTORY_BLOCK_COMMAND);
	const [triggerRef, open, setOpen] = useTrigger();
	const { eventEmitter } = useEventEmitterContextContext();
	const [localRoleName, setLocalRoleName] = useState(roleName);
	eventEmitter?.useSubscription((v) => {
		if (v?.type === "prompt-editor-history-block-update-role") setLocalRoleName(v.payload);
	});
	return /* @__PURE__ */ jsxs("div", {
		className: `
      group inline-flex h-6 items-center rounded-[5px] border border-transparent pl-1 pr-0.5 text-[#DD2590] hover:bg-[#FCE7F6]
      ${open ? "bg-[#FCE7F6]" : "bg-[#FDF2FA]"}
      ${isSelected && "!border-[#F670C7]"}
    `,
		ref,
		children: [
			/* @__PURE__ */ jsx(Icon$30, { className: "mr-1 h-[14px] w-[14px]" }),
			/* @__PURE__ */ jsx("div", {
				className: "mr-1 text-xs font-medium",
				children: t("promptEditor.history.item.title", { ns: "common" })
			}),
			/* @__PURE__ */ jsxs(PortalToFollowElem, {
				open,
				onOpenChange: setOpen,
				placement: "top-end",
				offset: {
					mainAxis: 4,
					alignmentAxis: -148
				},
				children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
					ref: triggerRef,
					children: /* @__PURE__ */ jsx("div", {
						className: `
            flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded
            ${open ? "bg-[#DD2590] text-white" : "bg-white/50 group-hover:bg-white group-hover:shadow-xs"}
          `,
						children: /* @__PURE__ */ jsx(CH, { className: "h-3 w-3" })
					})
				}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
					style: { zIndex: 100 },
					children: /* @__PURE__ */ jsxs("div", {
						className: "w-[360px] rounded-xl bg-white shadow-lg",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "p-4",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "mb-2 text-xs font-medium text-gray-500",
									children: t("promptEditor.history.modal.title", { ns: "common" })
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center text-sm text-gray-700",
									children: [/* @__PURE__ */ jsx("div", {
										className: "mr-1 w-20 text-xs font-semibold",
										children: localRoleName?.user
									}), t("promptEditor.history.modal.user", { ns: "common" })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center text-sm text-gray-700",
									children: [/* @__PURE__ */ jsx("div", {
										className: "mr-1 w-20 text-xs font-semibold",
										children: localRoleName?.assistant
									}), t("promptEditor.history.modal.assistant", { ns: "common" })]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "cursor-pointer rounded-b-xl border-t border-black/5 px-4 py-3 text-xs text-[#155EEF]",
							onClick: onEditRole,
							children: t("promptEditor.history.modal.edit", { ns: "common" })
						})]
					})
				})]
			})
		]
	});
};
//#endregion
//#region app/components/base/prompt-editor/plugins/history-block/node.tsx
var HistoryBlockNode = class HistoryBlockNode extends Fi {
	__roleName;
	__onEditRole;
	static getType() {
		return "history-block";
	}
	static clone(node) {
		return new HistoryBlockNode(node.__roleName, node.__onEditRole, node.__key);
	}
	constructor(roleName, onEditRole, key) {
		super(key);
		this.__roleName = roleName;
		this.__onEditRole = onEditRole;
	}
	isInline() {
		return true;
	}
	createDOM() {
		const div = document.createElement("div");
		div.classList.add("inline-flex", "items-center", "align-middle");
		return div;
	}
	updateDOM() {
		return false;
	}
	decorate() {
		return /* @__PURE__ */ jsx(HistoryBlockComponent, {
			nodeKey: this.getKey(),
			roleName: this.getRoleName(),
			onEditRole: this.getOnEditRole()
		});
	}
	getRoleName() {
		return this.getLatest().__roleName;
	}
	getOnEditRole() {
		return this.getLatest().__onEditRole;
	}
	static importJSON(serializedNode) {
		return $createHistoryBlockNode(serializedNode.roleName, serializedNode.onEditRole);
	}
	exportJSON() {
		return {
			type: "history-block",
			version: 1,
			roleName: this.getRoleName(),
			onEditRole: this.getOnEditRole
		};
	}
	getTextContent() {
		return "{{#histories#}}";
	}
};
function $createHistoryBlockNode(roleName, onEditRole) {
	return new HistoryBlockNode(roleName, onEditRole);
}
function $isHistoryBlockNode(node) {
	return node instanceof HistoryBlockNode;
}
//#endregion
//#region app/components/base/prompt-editor/plugins/history-block/history-block-replacement-block.tsx
var REGEX$7 = new RegExp(HISTORY_PLACEHOLDER_TEXT);
var HistoryBlockReplacementBlock = ({ history = {
	user: "",
	assistant: ""
}, onEditRole = noop, onInsert }) => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([HistoryBlockNode])) throw new Error("HistoryBlockNodePlugin: HistoryBlockNode not registered on editor");
	}, [editor]);
	const createHistoryBlockNode = useCallback(() => {
		if (onInsert) onInsert();
		return ks($createHistoryBlockNode(history, onEditRole));
	}, [
		history,
		onEditRole,
		onInsert
	]);
	const getMatch = useCallback((text) => {
		const matchArr = REGEX$7.exec(text);
		if (matchArr === null) return null;
		const startOffset = matchArr.index;
		return {
			end: startOffset + HISTORY_PLACEHOLDER_TEXT.length,
			start: startOffset
		};
	}, []);
	useEffect(() => {
		REGEX$7.lastIndex = 0;
		return rc(editor.registerNodeTransform(CustomTextNode, (textNode) => decoratorTransform(textNode, getMatch, createHistoryBlockNode)));
	}, []);
	return null;
};
//#endregion
//#region app/components/base/prompt-editor/plugins/history-block/index.tsx
var INSERT_HISTORY_BLOCK_COMMAND = ne$2("INSERT_HISTORY_BLOCK_COMMAND");
var DELETE_HISTORY_BLOCK_COMMAND = ne$2("DELETE_HISTORY_BLOCK_COMMAND");
var HistoryBlock = memo(({ history = {
	user: "",
	assistant: ""
}, onEditRole = noop, onInsert, onDelete }) => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([HistoryBlockNode])) throw new Error("HistoryBlockPlugin: HistoryBlock not registered on editor");
		return rc(editor.registerCommand(INSERT_HISTORY_BLOCK_COMMAND, () => {
			ti([$createHistoryBlockNode(history, onEditRole)]);
			if (onInsert) onInsert();
			return true;
		}, 0), editor.registerCommand(DELETE_HISTORY_BLOCK_COMMAND, () => {
			if (onDelete) onDelete();
			return true;
		}, 0));
	}, [
		editor,
		history,
		onEditRole,
		onInsert,
		onDelete
	]);
	return null;
});
HistoryBlock.displayName = "HistoryBlock";
var User01_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "user-01" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Solid" },
				"children": [{
					"type": "element",
					"name": "path",
					"attributes": {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						"d": "M5.85731 9.66669C7.28575 9.66701 8.71419 9.66701 10.1426 9.66669C10.6271 9.66659 10.9572 9.66652 11.2455 9.71735C12.6255 9.96068 13.706 11.0412 13.9493 12.4212C14.0002 12.7095 14.0001 13.0396 14 13.524C14 13.6296 14.0032 13.7359 13.9848 13.8404C13.9118 14.2544 13.5876 14.5785 13.1736 14.6515C13.0828 14.6675 12.9872 14.667 12.9396 14.6668C9.64686 14.6491 6.35308 14.6491 3.06031 14.6668C3.01274 14.667 2.9171 14.6675 2.82632 14.6515C2.41231 14.5785 2.08816 14.2544 2.01516 13.8404C1.99675 13.7359 1.99998 13.6296 1.99996 13.524C1.99985 13.0396 1.99978 12.7095 2.05061 12.4212C2.29395 11.0412 3.37444 9.96068 4.75447 9.71735C5.04275 9.66652 5.37286 9.66659 5.85731 9.66669Z",
						"fill": "currentColor"
					},
					"children": []
				}, {
					"type": "element",
					"name": "path",
					"attributes": {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						"d": "M4.3333 5.00004C4.3333 2.975 5.97493 1.33337 7.99997 1.33337C10.025 1.33337 11.6666 2.975 11.6666 5.00004C11.6666 7.02508 10.025 8.66671 7.99997 8.66671C5.97493 8.66671 4.3333 7.02508 4.3333 5.00004Z",
						"fill": "currentColor"
					},
					"children": []
				}]
			}]
		}]
	},
	name: "User01"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/users/User01.tsx
var Icon$21 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: User01_default
});
Icon$21.displayName = "User01";
var UserEdit02_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "14",
			"height": "14",
			"viewBox": "0 0 14 14",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": {
				"id": "user-edit 2",
				"clip-path": "url(#clip0_10419_49994)"
			},
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Group" },
				"children": [
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"id": "Vector",
							"d": "M5.83333 6.41667C7.60525 6.41667 9.04167 4.98025 9.04167 3.20833C9.04167 1.43642 7.60525 0 5.83333 0C4.06142 0 2.625 1.43642 2.625 3.20833C2.625 4.98025 4.06142 6.41667 5.83333 6.41667Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"id": "Vector_2",
							"d": "M5.90917 13.2465L6.78417 10.6221C6.85533 10.4086 6.97725 10.2114 7.1365 10.0522L8.79083 8.39783C7.92225 7.88391 6.91308 7.5835 5.83333 7.5835C2.61683 7.5835 0 10.2003 0 13.4168C0 13.7394 0.261333 14.0002 0.583333 14.0002H5.86717C5.817 13.7546 5.82575 13.4962 5.90917 13.2465Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"id": "Vector_3",
							"d": "M13.5524 7.44766C12.9562 6.85208 11.9856 6.85208 11.39 7.44766L7.96057 10.8771C7.92849 10.9092 7.90457 10.9482 7.88999 10.9908L7.01499 13.6158C6.97999 13.7208 7.0074 13.8363 7.08557 13.9145C7.14099 13.9705 7.21565 13.9997 7.29207 13.9997C7.32299 13.9997 7.3539 13.9944 7.38424 13.9851L10.0092 13.1101C10.0524 13.0961 10.0915 13.0716 10.123 13.0395L13.5524 9.61008C14.148 9.0145 14.148 8.04383 13.5524 7.44766Z",
							"fill": "currentColor"
						},
						"children": []
					}
				]
			}]
		}, {
			"type": "element",
			"name": "defs",
			"attributes": {},
			"children": [{
				"type": "element",
				"name": "clipPath",
				"attributes": { "id": "clip0_10419_49994" },
				"children": [{
					"type": "element",
					"name": "rect",
					"attributes": {
						"width": "14",
						"height": "14",
						"fill": "white"
					},
					"children": []
				}]
			}]
		}]
	},
	name: "UserEdit02"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/users/UserEdit02.tsx
var Icon$20 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: UserEdit02_default
});
Icon$20.displayName = "UserEdit02";
var Users01_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "users-01" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Solid" },
				"children": [
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							"d": "M12.0211 9.91782C12.1128 9.56125 12.4763 9.34659 12.8329 9.43837C14.2704 9.80837 15.3334 11.1125 15.3334 12.6666V14C15.3334 14.3682 15.0349 14.6666 14.6667 14.6666C14.2985 14.6666 14 14.3682 14 14V12.6666C14 11.7356 13.3633 10.9517 12.5005 10.7296C12.1439 10.6378 11.9293 10.2744 12.0211 9.91782Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							"d": "M9.7154 1.94368C9.85355 1.60239 10.2422 1.43771 10.5835 1.57586C11.8039 2.06985 12.6667 3.26669 12.6667 4.66665C12.6667 6.0666 11.8039 7.26344 10.5835 7.75743C10.2422 7.89558 9.85355 7.73091 9.7154 7.38962C9.57725 7.04833 9.74193 6.65967 10.0832 6.52152C10.8174 6.22432 11.3334 5.50494 11.3334 4.66665C11.3334 3.82835 10.8174 3.10897 10.0832 2.81178C9.74193 2.67363 9.57725 2.28496 9.7154 1.94368Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							"d": "M4.78598 9.33329C5.81757 9.33363 6.84915 9.33363 7.88073 9.33329C8.60781 9.33305 9.10395 9.33289 9.52942 9.44689C10.6797 9.75512 11.5782 10.6536 11.8864 11.8039C12.0399 12.3768 11.9955 12.989 12.0001 13.576C12.0007 13.6473 12.0019 13.7915 11.966 13.9255C11.8735 14.2706 11.6039 14.5401 11.2588 14.6326C11.1248 14.6685 10.9807 14.6673 10.9094 14.6668C7.85941 14.6424 4.80731 14.6424 1.7573 14.6668C1.68602 14.6673 1.54188 14.6685 1.40787 14.6326C1.06278 14.5401 0.793233 14.2706 0.700765 13.9255C0.664858 13.7915 0.666007 13.6473 0.666575 13.576C0.671243 12.9905 0.627014 12.3759 0.780272 11.8039C1.0885 10.6536 1.98699 9.75512 3.13729 9.44689C3.56277 9.33289 4.05891 9.33305 4.78598 9.33329Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							"d": "M3.00002 4.66665C3.00002 2.8257 4.49241 1.33331 6.33336 1.33331C8.17431 1.33331 9.66669 2.8257 9.66669 4.66665C9.66669 6.5076 8.17431 7.99998 6.33336 7.99998C4.49241 7.99998 3.00002 6.5076 3.00002 4.66665Z",
							"fill": "currentColor"
						},
						"children": []
					}
				]
			}]
		}]
	},
	name: "Users01"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/users/Users01.tsx
var Icon$19 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Users01_default
});
Icon$19.displayName = "Users01";
var UsersPlus_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "users-plus" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Solid" },
				"children": [
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M20 15C20 14.4477 19.5523 14 19 14C18.4477 14 18 14.4477 18 15V17H16C15.4477 17 15 17.4477 15 18C15 18.5523 15.4477 19 16 19H18V21C18 21.5523 18.4477 22 19 22C19.5523 22 20 21.5523 20 21V19H22C22.5523 19 23 18.5523 23 18C23 17.4477 22.5523 17 22 17H20V15Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							"d": "M12.181 14.1635C12.4632 14.3073 12.6927 14.5368 12.8365 14.819C12.9896 15.1194 13.0001 15.4476 13 15.7769C13 15.7847 13 15.7924 13 15.8C13 17.2744 12.9995 18.7488 13 20.2231C13.0001 20.3422 13.0001 20.4845 12.9899 20.6098C12.978 20.755 12.9476 20.963 12.8365 21.181C12.6927 21.4632 12.4632 21.6927 12.181 21.8365C11.963 21.9476 11.7551 21.978 11.6098 21.9899C11.4845 22.0001 11.3423 22.0001 11.2231 22C8.4077 21.999 5.59226 21.999 2.77682 22C2.65755 22.0001 2.51498 22.0001 2.38936 21.9898C2.24364 21.9778 2.03523 21.9472 1.81695 21.8356C1.53435 21.6911 1.30428 21.46 1.16109 21.1767C1.05079 20.9585 1.02087 20.7506 1.0095 20.6046C0.999737 20.4791 1.00044 20.3369 1.00103 20.2185C1.00619 19.1792 0.975203 18.0653 1.38061 17.0866C1.88808 15.8614 2.86145 14.8881 4.08659 14.3806C4.59629 14.1695 5.13457 14.0819 5.74331 14.0404C6.33532 14 7.06273 14 7.96449 14C9.05071 14 10.1369 14.0004 11.2231 14C11.5524 13.9999 11.8806 14.0104 12.181 14.1635Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							"d": "M14.5731 2.91554C14.7803 2.40361 15.3633 2.1566 15.8752 2.36382C17.7058 3.10481 19 4.90006 19 7C19 9.09994 17.7058 10.8952 15.8752 11.6362C15.3633 11.8434 14.7803 11.5964 14.5731 11.0845C14.3658 10.5725 14.6129 9.98953 15.1248 9.7823C16.2261 9.33652 17 8.25744 17 7C17 5.74256 16.2261 4.66348 15.1248 4.2177C14.6129 4.01047 14.3658 3.42748 14.5731 2.91554Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							"d": "M4.50001 7C4.50001 4.23858 6.73858 2 9.50001 2C12.2614 2 14.5 4.23858 14.5 7C14.5 9.76142 12.2614 12 9.50001 12C6.73858 12 4.50001 9.76142 4.50001 7Z",
							"fill": "currentColor"
						},
						"children": []
					}
				]
			}]
		}]
	},
	name: "UsersPlus"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/users/UsersPlus.tsx
var Icon$18 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: UsersPlus_default
});
Icon$18.displayName = "UsersPlus";
//#endregion
//#region app/components/base/prompt-editor/plugins/query-block/component.tsx
var QueryBlockComponent = ({ nodeKey }) => {
	const { t } = useTranslation();
	const [ref, isSelected] = useSelectOrDelete(nodeKey, DELETE_QUERY_BLOCK_COMMAND);
	return /* @__PURE__ */ jsxs("div", {
		className: `
        inline-flex h-6 items-center rounded-[5px] border border-transparent bg-[#FFF6ED] pl-1 pr-0.5 hover:bg-[#FFEAD5]
        ${isSelected && "!border-[#FD853A]"}
      `,
		ref,
		children: [
			/* @__PURE__ */ jsx(Icon$20, { className: "mr-1 h-[14px] w-[14px] text-[#FD853A]" }),
			/* @__PURE__ */ jsx("div", {
				className: "text-xs font-medium text-[#EC4A0A] opacity-60",
				children: "{{"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "text-xs font-medium text-[#EC4A0A]",
				children: t("promptEditor.query.item.title", { ns: "common" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "text-xs font-medium text-[#EC4A0A] opacity-60",
				children: "}}"
			})
		]
	});
};
//#endregion
//#region app/components/base/prompt-editor/plugins/query-block/node.tsx
var QueryBlockNode = class QueryBlockNode extends Fi {
	static getType() {
		return "query-block";
	}
	static clone() {
		return new QueryBlockNode();
	}
	isInline() {
		return true;
	}
	createDOM() {
		const div = document.createElement("div");
		div.classList.add("inline-flex", "items-center", "align-middle");
		return div;
	}
	updateDOM() {
		return false;
	}
	decorate() {
		return /* @__PURE__ */ jsx(QueryBlockComponent, { nodeKey: this.getKey() });
	}
	static importJSON() {
		return $createQueryBlockNode();
	}
	exportJSON() {
		return {
			type: "query-block",
			version: 1
		};
	}
	getTextContent() {
		return "{{#query#}}";
	}
};
function $createQueryBlockNode() {
	return new QueryBlockNode();
}
function $isQueryBlockNode(node) {
	return node instanceof QueryBlockNode;
}
//#endregion
//#region app/components/base/prompt-editor/plugins/query-block/query-block-replacement-block.tsx
var REGEX$6 = new RegExp(QUERY_PLACEHOLDER_TEXT);
var QueryBlockReplacementBlock = ({ onInsert }) => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([QueryBlockNode])) throw new Error("QueryBlockNodePlugin: QueryBlockNode not registered on editor");
	}, [editor]);
	const createQueryBlockNode = useCallback(() => {
		if (onInsert) onInsert();
		return ks($createQueryBlockNode());
	}, [onInsert]);
	const getMatch = useCallback((text) => {
		const matchArr = REGEX$6.exec(text);
		if (matchArr === null) return null;
		const startOffset = matchArr.index;
		return {
			end: startOffset + QUERY_PLACEHOLDER_TEXT.length,
			start: startOffset
		};
	}, []);
	useEffect(() => {
		REGEX$6.lastIndex = 0;
		return rc(editor.registerNodeTransform(CustomTextNode, (textNode) => decoratorTransform(textNode, getMatch, createQueryBlockNode)));
	}, []);
	return null;
};
var query_block_replacement_block_default = memo(QueryBlockReplacementBlock);
//#endregion
//#region app/components/base/prompt-editor/plugins/query-block/index.tsx
var INSERT_QUERY_BLOCK_COMMAND = ne$2("INSERT_QUERY_BLOCK_COMMAND");
var DELETE_QUERY_BLOCK_COMMAND = ne$2("DELETE_QUERY_BLOCK_COMMAND");
var QueryBlock = memo(({ onInsert, onDelete }) => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([QueryBlockNode])) throw new Error("QueryBlockPlugin: QueryBlock not registered on editor");
		return rc(editor.registerCommand(INSERT_QUERY_BLOCK_COMMAND, () => {
			ti([$createQueryBlockNode()]);
			if (onInsert) onInsert();
			return true;
		}, 0), editor.registerCommand(DELETE_QUERY_BLOCK_COMMAND, () => {
			if (onDelete) onDelete();
			return true;
		}, 0));
	}, [
		editor,
		onInsert,
		onDelete
	]);
	return null;
});
QueryBlock.displayName = "QueryBlock";
//#endregion
//#region app/components/base/prompt-editor/hooks.ts
var useSelectOrDelete = (nodeKey, command) => {
	const ref = useRef(null);
	const [editor] = o();
	const [isSelected, setSelected, clearSelection] = u(nodeKey);
	const handleDelete = useCallback((event) => {
		const selection = $r();
		const nodes = selection?.getNodes();
		if (!isSelected && nodes?.length === 1 && ($isContextBlockNode(nodes[0]) && command === DELETE_CONTEXT_BLOCK_COMMAND || $isHistoryBlockNode(nodes[0]) && command === DELETE_HISTORY_BLOCK_COMMAND || $isQueryBlockNode(nodes[0]) && command === DELETE_QUERY_BLOCK_COMMAND)) editor.dispatchCommand(command, void 0);
		if (isSelected && Or(selection)) {
			event.preventDefault();
			const node = Po(nodeKey);
			if (Li(node)) {
				if (command) editor.dispatchCommand(command, void 0);
				node.remove();
				return true;
			}
		}
		return false;
	}, [
		isSelected,
		nodeKey,
		command,
		editor
	]);
	const handleSelect = useCallback((e) => {
		if (!e.metaKey && !e.ctrlKey) {
			e.stopPropagation();
			clearSelection();
			setSelected(true);
		}
	}, [setSelected, clearSelection]);
	useEffect(() => {
		const ele = ref.current;
		if (ele) ele.addEventListener("click", handleSelect);
		return () => {
			if (ele) ele.removeEventListener("click", handleSelect);
		};
	}, [handleSelect]);
	useEffect(() => {
		return rc(editor.registerCommand(Pe, handleDelete, 1), editor.registerCommand(Me, handleDelete, 1));
	}, [
		editor,
		clearSelection,
		handleDelete
	]);
	return [ref, isSelected];
};
var useTrigger = () => {
	const triggerRef = useRef(null);
	const [open, setOpen] = useState(false);
	const handleOpen = useCallback((e) => {
		e.stopPropagation();
		setOpen((v) => !v);
	}, []);
	useEffect(() => {
		const trigger = triggerRef.current;
		if (trigger) trigger.addEventListener("click", handleOpen);
		return () => {
			if (trigger) trigger.removeEventListener("click", handleOpen);
		};
	}, [handleOpen]);
	return [
		triggerRef,
		open,
		setOpen
	];
};
function useLexicalTextEntity(getMatch, targetNode, createNode) {
	const [editor] = o();
	useEffect(() => {
		return rc(...registerLexicalTextEntity(editor, getMatch, targetNode, createNode));
	}, [
		createNode,
		editor,
		getMatch,
		targetNode
	]);
}
var PUNCTUATION = "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;";
function useBasicTypeaheadTriggerMatch(trigger, { minLength = 1, maxLength = 75 }) {
	return useCallback((text) => {
		const validChars = `[${PUNCTUATION}\\s]`;
		const match = new RegExp(`(.*)([${trigger}]((?:${validChars}){0,${maxLength}}))\$`).exec(text);
		if (match !== null) {
			const maybeLeadingWhitespace = match[1];
			const matchingString = match[3];
			if (matchingString.length >= minLength) return {
				leadOffset: match.index + maybeLeadingWhitespace.length,
				matchingString,
				replaceableString: match[2]
			};
		}
		return null;
	}, [
		maxLength,
		minLength,
		trigger
	]);
}
//#endregion
//#region app/components/base/prompt-editor/plugins/current-block/component.tsx
var CurrentBlockComponent = ({ nodeKey, generatorType }) => {
	const [editor] = o();
	const [ref, isSelected] = useSelectOrDelete(nodeKey, DELETE_CURRENT_BLOCK_COMMAND);
	const Icon = generatorType === GeneratorType.prompt ? Icon$41 : Icon$42;
	useEffect(() => {
		if (!editor.hasNodes([CurrentBlockNode])) throw new Error("WorkflowVariableBlockPlugin: WorkflowVariableBlock not registered on editor");
	}, [editor]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn$1("group/wrap relative mx-0.5 flex h-[18px] select-none items-center rounded-[5px] border pl-0.5 pr-[3px] text-util-colors-violet-violet-600 hover:border-state-accent-solid hover:bg-state-accent-hover", isSelected ? " border-state-accent-solid bg-state-accent-hover" : " border-components-panel-border-subtle bg-components-badge-white-to-dark"),
		onClick: (e) => {
			e.stopPropagation();
		},
		ref,
		children: [/* @__PURE__ */ jsx(Icon, { className: "mr-0.5 h-[14px] w-[14px]" }), /* @__PURE__ */ jsx("div", {
			className: "text-xs font-medium",
			children: generatorType === GeneratorType.prompt ? "current_prompt" : "current_code"
		})]
	});
};
//#endregion
//#region app/components/base/prompt-editor/plugins/current-block/node.tsx
var CurrentBlockNode = class CurrentBlockNode extends Fi {
	__generatorType;
	static getType() {
		return "current-block";
	}
	static clone(node) {
		return new CurrentBlockNode(node.__generatorType, node.getKey());
	}
	isInline() {
		return true;
	}
	constructor(generatorType, key) {
		super(key);
		this.__generatorType = generatorType;
	}
	createDOM() {
		const div = document.createElement("div");
		div.classList.add("inline-flex", "items-center", "align-middle");
		return div;
	}
	updateDOM() {
		return false;
	}
	decorate() {
		return /* @__PURE__ */ jsx(CurrentBlockComponent, {
			nodeKey: this.getKey(),
			generatorType: this.getGeneratorType()
		});
	}
	getGeneratorType() {
		return this.getLatest().__generatorType;
	}
	static importJSON(serializedNode) {
		return $createCurrentBlockNode(serializedNode.generatorType);
	}
	exportJSON() {
		return {
			type: "current-block",
			version: 1,
			generatorType: this.getGeneratorType()
		};
	}
	getTextContent() {
		return "{{#current#}}";
	}
};
function $createCurrentBlockNode(type) {
	return new CurrentBlockNode(type);
}
//#endregion
//#region app/components/base/prompt-editor/plugins/current-block/current-block-replacement-block.tsx
var REGEX$5 = new RegExp(CURRENT_PLACEHOLDER_TEXT);
var CurrentBlockReplacementBlock = ({ generatorType, onInsert }) => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([CurrentBlockNode])) throw new Error("CurrentBlockNodePlugin: CurrentBlockNode not registered on editor");
	}, [editor]);
	const createCurrentBlockNode = useCallback(() => {
		if (onInsert) onInsert();
		return ks($createCurrentBlockNode(generatorType));
	}, [onInsert, generatorType]);
	const getMatch = useCallback((text) => {
		const matchArr = REGEX$5.exec(text);
		if (matchArr === null) return null;
		const startOffset = matchArr.index;
		return {
			end: startOffset + CURRENT_PLACEHOLDER_TEXT.length,
			start: startOffset
		};
	}, []);
	useEffect(() => {
		REGEX$5.lastIndex = 0;
		return rc(editor.registerNodeTransform(CustomTextNode, (textNode) => decoratorTransform(textNode, getMatch, createCurrentBlockNode)));
	}, []);
	return null;
};
var current_block_replacement_block_default = memo(CurrentBlockReplacementBlock);
//#endregion
//#region app/components/base/prompt-editor/plugins/current-block/index.tsx
var INSERT_CURRENT_BLOCK_COMMAND = ne$2("INSERT_CURRENT_BLOCK_COMMAND");
var DELETE_CURRENT_BLOCK_COMMAND = ne$2("DELETE_CURRENT_BLOCK_COMMAND");
var CurrentBlock = memo(({ generatorType, onInsert, onDelete }) => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([CurrentBlockNode])) throw new Error("CURRENTBlockPlugin: CURRENTBlock not registered on editor");
		return rc(editor.registerCommand(INSERT_CURRENT_BLOCK_COMMAND, () => {
			ti([$createCurrentBlockNode(generatorType)]);
			if (onInsert) onInsert();
			return true;
		}, 0), editor.registerCommand(DELETE_CURRENT_BLOCK_COMMAND, () => {
			if (onDelete) onDelete();
			return true;
		}, 0));
	}, [
		editor,
		generatorType,
		onDelete,
		onInsert
	]);
	return null;
});
CurrentBlock.displayName = "CurrentBlock";
//#endregion
//#region app/components/base/prompt-editor/plugins/error-message-block/component.tsx
var ErrorMessageBlockComponent = ({ nodeKey }) => {
	const [editor] = o();
	const [ref, isSelected] = useSelectOrDelete(nodeKey, DELETE_ERROR_MESSAGE_COMMAND);
	useEffect(() => {
		if (!editor.hasNodes([ErrorMessageBlockNode])) throw new Error("WorkflowVariableBlockPlugin: WorkflowVariableBlock not registered on editor");
	}, [editor]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn$1("group/wrap relative mx-0.5 flex h-[18px] select-none items-center rounded-[5px] border pl-0.5 pr-[3px] text-util-colors-orange-dark-orange-dark-600 hover:border-state-accent-solid hover:bg-state-accent-hover", isSelected ? " border-state-accent-solid bg-state-accent-hover" : " border-components-panel-border-subtle bg-components-badge-white-to-dark"),
		onClick: (e) => {
			e.stopPropagation();
		},
		ref,
		children: [/* @__PURE__ */ jsx(Icon$44, { className: "mr-0.5 h-[14px] w-[14px]" }), /* @__PURE__ */ jsx("div", {
			className: "text-xs font-medium",
			children: "error_message"
		})]
	});
};
//#endregion
//#region app/components/base/prompt-editor/plugins/error-message-block/node.tsx
var ErrorMessageBlockNode = class ErrorMessageBlockNode extends Fi {
	static getType() {
		return "error-message-block";
	}
	static clone(node) {
		return new ErrorMessageBlockNode(node.getKey());
	}
	isInline() {
		return true;
	}
	constructor(key) {
		super(key);
	}
	createDOM() {
		const div = document.createElement("div");
		div.classList.add("inline-flex", "items-center", "align-middle");
		return div;
	}
	updateDOM() {
		return false;
	}
	decorate() {
		return /* @__PURE__ */ jsx(ErrorMessageBlockComponent, { nodeKey: this.getKey() });
	}
	static importJSON() {
		return $createErrorMessageBlockNode();
	}
	exportJSON() {
		return {
			type: "error-message-block",
			version: 1
		};
	}
	getTextContent() {
		return "{{#error_message#}}";
	}
};
function $createErrorMessageBlockNode() {
	return new ErrorMessageBlockNode();
}
//#endregion
//#region app/components/base/prompt-editor/plugins/error-message-block/error-message-block-replacement-block.tsx
var REGEX$4 = new RegExp(ERROR_MESSAGE_PLACEHOLDER_TEXT);
var ErrorMessageBlockReplacementBlock = ({ onInsert }) => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([ErrorMessageBlockNode])) throw new Error("ErrorMessageBlockNodePlugin: ErrorMessageBlockNode not registered on editor");
	}, [editor]);
	const createErrorMessageBlockNode = useCallback(() => {
		if (onInsert) onInsert();
		return ks($createErrorMessageBlockNode());
	}, [onInsert]);
	const getMatch = useCallback((text) => {
		const matchArr = REGEX$4.exec(text);
		if (matchArr === null) return null;
		const startOffset = matchArr.index;
		return {
			end: startOffset + ERROR_MESSAGE_PLACEHOLDER_TEXT.length,
			start: startOffset
		};
	}, []);
	useEffect(() => {
		REGEX$4.lastIndex = 0;
		return rc(editor.registerNodeTransform(CustomTextNode, (textNode) => decoratorTransform(textNode, getMatch, createErrorMessageBlockNode)));
	}, []);
	return null;
};
var error_message_block_replacement_block_default = memo(ErrorMessageBlockReplacementBlock);
//#endregion
//#region app/components/base/prompt-editor/plugins/error-message-block/index.tsx
var INSERT_ERROR_MESSAGE_BLOCK_COMMAND = ne$2("INSERT_ERROR_MESSAGE_BLOCK_COMMAND");
var DELETE_ERROR_MESSAGE_COMMAND = ne$2("DELETE_ERROR_MESSAGE_COMMAND");
var ErrorMessageBlock = memo(({ onInsert, onDelete }) => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([ErrorMessageBlockNode])) throw new Error("ERROR_MESSAGEBlockPlugin: ERROR_MESSAGEBlock not registered on editor");
		return rc(editor.registerCommand(INSERT_ERROR_MESSAGE_BLOCK_COMMAND, () => {
			ti([$createErrorMessageBlockNode()]);
			if (onInsert) onInsert();
			return true;
		}, 0), editor.registerCommand(DELETE_ERROR_MESSAGE_COMMAND, () => {
			if (onDelete) onDelete();
			return true;
		}, 0));
	}, [
		editor,
		onDelete,
		onInsert
	]);
	return null;
});
ErrorMessageBlock.displayName = "ErrorMessageBlock";
//#endregion
//#region app/components/base/prompt-editor/plugins/last-run-block/component.tsx
var LastRunBlockComponent = ({ nodeKey }) => {
	const [editor] = o();
	const [ref, isSelected] = useSelectOrDelete(nodeKey, DELETE_LAST_RUN_COMMAND);
	useEffect(() => {
		if (!editor.hasNodes([LastRunBlockNode])) throw new Error("WorkflowVariableBlockPlugin: WorkflowVariableBlock not registered on editor");
	}, [editor]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn$1("group/wrap relative mx-0.5 flex h-[18px] select-none items-center rounded-[5px] border pl-0.5 pr-[3px] text-text-accent hover:border-state-accent-solid hover:bg-state-accent-hover", isSelected ? " border-state-accent-solid bg-state-accent-hover" : " border-components-panel-border-subtle bg-components-badge-white-to-dark"),
		onClick: (e) => {
			e.stopPropagation();
		},
		ref,
		children: [/* @__PURE__ */ jsx(Icon$44, { className: "mr-0.5 h-[14px] w-[14px]" }), /* @__PURE__ */ jsx("div", {
			className: "text-xs font-medium",
			children: "last_run"
		})]
	});
};
//#endregion
//#region app/components/base/prompt-editor/plugins/last-run-block/node.tsx
var LastRunBlockNode = class LastRunBlockNode extends Fi {
	static getType() {
		return "last-run-block";
	}
	static clone(node) {
		return new LastRunBlockNode(node.getKey());
	}
	isInline() {
		return true;
	}
	constructor(key) {
		super(key);
	}
	createDOM() {
		const div = document.createElement("div");
		div.classList.add("inline-flex", "items-center", "align-middle");
		return div;
	}
	updateDOM() {
		return false;
	}
	decorate() {
		return /* @__PURE__ */ jsx(LastRunBlockComponent, { nodeKey: this.getKey() });
	}
	static importJSON() {
		return $createLastRunBlockNode();
	}
	exportJSON() {
		return {
			type: "last-run-block",
			version: 1
		};
	}
	getTextContent() {
		return "{{#last_run#}}";
	}
};
function $createLastRunBlockNode() {
	return new LastRunBlockNode();
}
//#endregion
//#region app/components/base/prompt-editor/plugins/last-run-block/last-run-block-replacement-block.tsx
var REGEX$3 = new RegExp(LAST_RUN_PLACEHOLDER_TEXT);
var LastRunReplacementBlock = ({ onInsert }) => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([LastRunBlockNode])) throw new Error("LastRunMessageBlockNodePlugin: LastRunMessageBlockNode not registered on editor");
	}, [editor]);
	const createLastRunBlockNode = useCallback(() => {
		if (onInsert) onInsert();
		return ks($createLastRunBlockNode());
	}, [onInsert]);
	const getMatch = useCallback((text) => {
		const matchArr = REGEX$3.exec(text);
		if (matchArr === null) return null;
		const startOffset = matchArr.index;
		return {
			end: startOffset + LAST_RUN_PLACEHOLDER_TEXT.length,
			start: startOffset
		};
	}, []);
	useEffect(() => {
		REGEX$3.lastIndex = 0;
		return rc(editor.registerNodeTransform(CustomTextNode, (textNode) => decoratorTransform(textNode, getMatch, createLastRunBlockNode)));
	}, []);
	return null;
};
var last_run_block_replacement_block_default = memo(LastRunReplacementBlock);
//#endregion
//#region app/components/base/prompt-editor/plugins/last-run-block/index.tsx
var INSERT_LAST_RUN_BLOCK_COMMAND = ne$2("INSERT_LAST_RUN_BLOCK_COMMAND");
var DELETE_LAST_RUN_COMMAND = ne$2("DELETE_LAST_RUN_COMMAND");
var LastRunBlock = memo(({ onInsert, onDelete }) => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([LastRunBlockNode])) throw new Error("Last_RunBlockPlugin: Last_RunBlock not registered on editor");
		return rc(editor.registerCommand(INSERT_LAST_RUN_BLOCK_COMMAND, () => {
			ti([$createLastRunBlockNode()]);
			if (onInsert) onInsert();
			return true;
		}, 0), editor.registerCommand(DELETE_LAST_RUN_COMMAND, () => {
			if (onDelete) onDelete();
			return true;
		}, 0));
	}, [
		editor,
		onDelete,
		onInsert
	]);
	return null;
});
LastRunBlock.displayName = "LastRunBlock";
//#endregion
//#region app/components/base/prompt-editor/plugins/variable-block/index.tsx
var INSERT_VARIABLE_BLOCK_COMMAND = ne$2("INSERT_VARIABLE_BLOCK_COMMAND");
var INSERT_VARIABLE_VALUE_BLOCK_COMMAND = ne$2("INSERT_VARIABLE_VALUE_BLOCK_COMMAND");
var VariableBlock = () => {
	const [editor] = o();
	useEffect(() => {
		return rc(editor.registerCommand(INSERT_VARIABLE_BLOCK_COMMAND, () => {
			ti([new CustomTextNode("{")]);
			return true;
		}, 0), editor.registerCommand(INSERT_VARIABLE_VALUE_BLOCK_COMMAND, (value) => {
			ti([new CustomTextNode(value)]);
			return true;
		}, 0));
	}, [editor]);
	return null;
};
//#endregion
//#region app/components/base/prompt-editor/plugins/workflow-variable-block/use-llm-model-plugin-installed.ts
function useLlmModelPluginInstalled(nodeId, workflowNodesMap) {
	const node = workflowNodesMap?.[nodeId];
	const modelProvider = node?.type === BlockEnum.LLM ? node.modelProvider : void 0;
	const modelPluginId = modelProvider ? extractPluginId(modelProvider) : void 0;
	return useProviderContextSelector((state) => {
		if (!modelPluginId) return true;
		return state.modelProviders.some((p) => extractPluginId(p.provider) === modelPluginId);
	});
}
//#endregion
//#region app/components/base/prompt-editor/plugins/workflow-variable-block/component.tsx
var WorkflowVariableBlockComponent = ({ nodeKey, variables, workflowNodesMap = {}, getVarType, environmentVariables, conversationVariables, ragVariables }) => {
	const { t } = useTranslation();
	const [editor] = o();
	const [ref, isSelected] = useSelectOrDelete(nodeKey, DELETE_WORKFLOW_VARIABLE_BLOCK_COMMAND);
	const variablesLength = variables.length;
	const isRagVar = isRagVariableVar(variables);
	const isShowAPart = variablesLength > 2 && !isRagVar;
	const varName = (() => {
		const isSystem = isSystemVar(variables);
		const varName = variables[variablesLength - 1];
		return `${isSystem ? "sys." : ""}${varName}`;
	})();
	const [localWorkflowNodesMap, setLocalWorkflowNodesMap] = useState(workflowNodesMap);
	const node = localWorkflowNodesMap[variables[isRagVar ? 1 : 0]];
	const isException = isExceptionVariable(varName, node?.type);
	const sourceNodeId = variables[isRagVar ? 1 : 0];
	const isLlmModelInstalled = useLlmModelPluginInstalled(sourceNodeId, localWorkflowNodesMap);
	const variableValid = useMemo(() => {
		let variableValid = true;
		const isEnv = isENV(variables);
		const isChatVar = isConversationVar(variables);
		if (isGlobalVar(variables)) return true;
		if (isEnv) {
			if (environmentVariables) variableValid = environmentVariables.some((v) => v.variable === `${variables?.[0] ?? ""}.${variables?.[1] ?? ""}`);
		} else if (isChatVar) {
			if (conversationVariables) variableValid = conversationVariables.some((v) => v.variable === `${variables?.[0] ?? ""}.${variables?.[1] ?? ""}`);
		} else if (isRagVar) {
			if (ragVariables) variableValid = ragVariables.some((v) => v.variable === `${variables?.[0] ?? ""}.${variables?.[1] ?? ""}.${variables?.[2] ?? ""}`);
		} else variableValid = !!node;
		return variableValid;
	}, [
		variables,
		node,
		environmentVariables,
		conversationVariables,
		isRagVar,
		ragVariables
	]);
	const reactflow = useReactFlow();
	const store = useStoreApi();
	useEffect(() => {
		if (!editor.hasNodes([WorkflowVariableBlockNode])) throw new Error("WorkflowVariableBlockPlugin: WorkflowVariableBlock not registered on editor");
		return rc(editor.registerCommand(UPDATE_WORKFLOW_NODES_MAP$1, (workflowNodesMap) => {
			setLocalWorkflowNodesMap(workflowNodesMap);
			return true;
		}, 0));
	}, [editor]);
	const handleVariableJump = useCallback(() => {
		const { clientWidth, clientHeight } = document.getElementById("workflow-container");
		const { setViewport } = reactflow;
		const { transform } = store.getState();
		const zoom = transform[2];
		const position = node.position;
		setViewport({
			x: (clientWidth - 400 - node.width * zoom) / 2 - position.x * zoom,
			y: (clientHeight - node.height * zoom) / 2 - position.y * zoom,
			zoom: transform[2]
		});
	}, [
		node,
		reactflow,
		store
	]);
	const Item = /* @__PURE__ */ jsx(variable_label_in_editor_default, {
		nodeType: node?.type,
		nodeTitle: node?.title,
		variables,
		onClick: (e) => {
			e.stopPropagation();
			handleVariableJump();
		},
		isExceptionVariable: isException,
		errorMsg: !variableValid ? t("errorMsg.invalidVariable", { ns: "workflow" }) : !isLlmModelInstalled ? t("errorMsg.modelPluginNotInstalled", { ns: "workflow" }) : void 0,
		isSelected,
		ref,
		notShowFullPath: isShowAPart
	});
	if (!node) return Item;
	return /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		disabled: !isShowAPart,
		render: /* @__PURE__ */ jsx("div", { children: Item })
	}), /* @__PURE__ */ jsx(TooltipContent, {
		variant: "plain",
		children: /* @__PURE__ */ jsx(var_full_path_panel_default, {
			nodeName: node.title,
			path: variables.slice(1),
			varType: getVarType ? getVarType({
				nodeId: variables[0],
				valueSelector: variables
			}) : Type.string,
			nodeType: node?.type
		})
	})] });
};
var component_default = memo(WorkflowVariableBlockComponent);
//#endregion
//#region app/components/base/prompt-editor/plugins/workflow-variable-block/node.tsx
var WorkflowVariableBlockNode = class WorkflowVariableBlockNode extends Fi {
	__variables;
	__workflowNodesMap;
	__getVarType;
	__environmentVariables;
	__conversationVariables;
	__ragVariables;
	static getType() {
		return "workflow-variable-block";
	}
	static clone(node) {
		return new WorkflowVariableBlockNode(node.__variables, node.__workflowNodesMap, node.__getVarType, node.__key, node.__environmentVariables, node.__conversationVariables, node.__ragVariables);
	}
	isInline() {
		return true;
	}
	constructor(variables, workflowNodesMap, getVarType, key, environmentVariables, conversationVariables, ragVariables) {
		super(key);
		this.__variables = variables;
		this.__workflowNodesMap = workflowNodesMap;
		this.__getVarType = getVarType;
		this.__environmentVariables = environmentVariables;
		this.__conversationVariables = conversationVariables;
		this.__ragVariables = ragVariables;
	}
	createDOM() {
		const div = document.createElement("div");
		div.classList.add("inline-flex", "items-center", "align-middle");
		return div;
	}
	updateDOM() {
		return false;
	}
	decorate() {
		return /* @__PURE__ */ jsx(component_default, {
			nodeKey: this.getKey(),
			variables: this.__variables,
			workflowNodesMap: this.__workflowNodesMap,
			getVarType: this.__getVarType,
			environmentVariables: this.__environmentVariables,
			conversationVariables: this.__conversationVariables,
			ragVariables: this.__ragVariables
		});
	}
	static importJSON(serializedNode) {
		return $createWorkflowVariableBlockNode(serializedNode.variables, serializedNode.workflowNodesMap, serializedNode.getVarType, serializedNode.environmentVariables, serializedNode.conversationVariables, serializedNode.ragVariables);
	}
	exportJSON() {
		return {
			type: "workflow-variable-block",
			version: 1,
			variables: this.getVariables(),
			workflowNodesMap: this.getWorkflowNodesMap(),
			getVarType: this.getVarType(),
			environmentVariables: this.getEnvironmentVariables(),
			conversationVariables: this.getConversationVariables(),
			ragVariables: this.getRagVariables()
		};
	}
	getVariables() {
		return this.getLatest().__variables;
	}
	getWorkflowNodesMap() {
		return this.getLatest().__workflowNodesMap;
	}
	getVarType() {
		return this.getLatest().__getVarType;
	}
	getEnvironmentVariables() {
		return this.getLatest().__environmentVariables;
	}
	getConversationVariables() {
		return this.getLatest().__conversationVariables;
	}
	getRagVariables() {
		return this.getLatest().__ragVariables;
	}
	getTextContent() {
		return `{{#${this.getVariables().join(".")}#}}`;
	}
};
function $createWorkflowVariableBlockNode(variables, workflowNodesMap, getVarType, environmentVariables, conversationVariables, ragVariables) {
	return new WorkflowVariableBlockNode(variables, workflowNodesMap, getVarType, void 0, environmentVariables, conversationVariables, ragVariables);
}
//#endregion
//#region app/components/base/prompt-editor/plugins/workflow-variable-block/workflow-variable-block-replacement-block.tsx
var WorkflowVariableBlockReplacementBlock = ({ workflowNodesMap, getVarType, onInsert, variables }) => {
	const [editor] = o();
	const ragVariables = variables?.reduce((acc, curr) => {
		if (curr.nodeId === "rag") acc.push(...curr.vars);
		else acc.push(...curr.vars.filter((v) => v.isRagVariable));
		return acc;
	}, []);
	useEffect(() => {
		if (!editor.hasNodes([WorkflowVariableBlockNode])) throw new Error("WorkflowVariableBlockNodePlugin: WorkflowVariableBlockNode not registered on editor");
	}, [editor]);
	const createWorkflowVariableBlockNode = useCallback((textNode) => {
		if (onInsert) onInsert();
		return ks($createWorkflowVariableBlockNode(textNode.getTextContent().slice(3, -3).split("."), workflowNodesMap, getVarType, variables?.find((o) => o.nodeId === "env")?.vars || [], variables?.find((o) => o.nodeId === "conversation")?.vars || [], ragVariables));
	}, [
		onInsert,
		workflowNodesMap,
		getVarType,
		variables,
		ragVariables
	]);
	const getMatch = useCallback((text) => {
		const matchArr = VAR_REGEX.exec(text);
		if (matchArr === null) return null;
		const startOffset = matchArr.index;
		return {
			end: startOffset + matchArr[0].length,
			start: startOffset
		};
	}, []);
	const transformListener = useCallback((textNode) => {
		resetReg();
		return decoratorTransform(textNode, getMatch, createWorkflowVariableBlockNode);
	}, [createWorkflowVariableBlockNode, getMatch]);
	useEffect(() => {
		resetReg();
		return rc(editor.registerNodeTransform(CustomTextNode, transformListener));
	}, []);
	return null;
};
var workflow_variable_block_replacement_block_default = memo(WorkflowVariableBlockReplacementBlock);
//#endregion
//#region app/components/base/prompt-editor/plugins/workflow-variable-block/index.tsx
var INSERT_WORKFLOW_VARIABLE_BLOCK_COMMAND = ne$2("INSERT_WORKFLOW_VARIABLE_BLOCK_COMMAND");
var DELETE_WORKFLOW_VARIABLE_BLOCK_COMMAND = ne$2("DELETE_WORKFLOW_VARIABLE_BLOCK_COMMAND");
var CLEAR_HIDE_MENU_TIMEOUT = ne$2("CLEAR_HIDE_MENU_TIMEOUT");
var UPDATE_WORKFLOW_NODES_MAP$1 = ne$2("UPDATE_WORKFLOW_NODES_MAP");
var WorkflowVariableBlock = memo(({ workflowNodesMap, onInsert, onDelete, getVarType }) => {
	const [editor] = o();
	useEffect(() => {
		editor.update(() => {
			editor.dispatchCommand(UPDATE_WORKFLOW_NODES_MAP$1, workflowNodesMap);
		});
	}, [editor, workflowNodesMap]);
	useEffect(() => {
		if (!editor.hasNodes([WorkflowVariableBlockNode])) throw new Error("WorkflowVariableBlockPlugin: WorkflowVariableBlock not registered on editor");
		return rc(editor.registerCommand(INSERT_WORKFLOW_VARIABLE_BLOCK_COMMAND, (variables) => {
			editor.dispatchCommand(CLEAR_HIDE_MENU_TIMEOUT, void 0);
			ti([$createWorkflowVariableBlockNode(variables, workflowNodesMap, getVarType)]);
			if (onInsert) onInsert();
			return true;
		}, 0), editor.registerCommand(DELETE_WORKFLOW_VARIABLE_BLOCK_COMMAND, () => {
			if (onDelete) onDelete();
			return true;
		}, 0));
	}, [
		editor,
		onInsert,
		onDelete,
		workflowNodesMap,
		getVarType
	]);
	return null;
});
WorkflowVariableBlock.displayName = "WorkflowVariableBlock";
var ArtificialBrain_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M17.4542 11.9996H11.9999V13.8177M17.4542 11.9996C17.4542 13.0037 18.2682 13.8177 19.2724 13.8177C20.2765 13.8177 21.0905 13.0037 21.0905 11.9996C21.0905 10.9955 20.2765 10.1815 19.2724 10.1815C18.2682 10.1815 17.4542 10.9955 17.4542 11.9996ZM6.54554 12.9087C5.318 12.9012 4.14258 12.4115 3.27293 11.5451M6.54554 12.9087C6.53904 13.471 6.71172 14.0207 7.03861 14.4783C7.36549 14.936 7.82958 15.2776 8.36365 15.4539M6.54554 12.9087C6.54223 12.5292 6.62185 12.1534 6.77888 11.808C6.9359 11.4625 7.16652 11.1556 7.45459 10.9086M3.27293 11.5451C2.8848 11.7842 2.56415 12.1184 2.34142 12.5161C2.1187 12.9139 2.00125 13.3619 2.00022 13.8177C1.99583 14.2518 2.10201 14.6799 2.30876 15.0616C2.51552 15.4433 2.81603 15.766 3.182 15.9995C3.00399 16.4639 2.91159 16.9567 2.90928 17.454C2.90333 18.0525 3.01683 18.6463 3.24315 19.2004C3.46946 19.7546 3.80404 20.258 4.2273 20.6813C4.65056 21.1045 5.154 21.4391 5.70815 21.6654C6.2623 21.8917 6.85603 22.0052 7.45458 21.9993C8.05314 22.0052 8.64686 21.8917 9.20101 21.6654C9.75516 21.4391 10.2586 21.1045 10.6819 20.6813C11.1051 20.258 11.4397 19.7546 11.666 19.2004C11.8923 18.6463 12.0058 18.0525 11.9999 17.454V16.5449H14.7271L16.1688 17.9867M3.27293 11.5451C2.44984 10.6912 1.9931 9.54938 2.00022 8.36339C1.99427 7.76484 2.10777 7.17111 2.33409 6.61696C2.5604 6.06281 2.89498 5.55937 3.31824 5.13611C3.7415 4.71285 4.24494 4.37827 4.79909 4.15195C5.35324 3.92564 5.94697 3.81214 6.54552 3.81809H6.72733C6.90356 3.28402 7.24525 2.81993 7.70289 2.49304C8.16052 2.16616 8.71035 1.99346 9.2727 1.99997C9.63267 1.99331 9.99029 2.0593 10.3242 2.19399C10.6581 2.32869 10.9614 2.52933 11.2159 2.78391C11.4705 3.03849 11.6712 3.34179 11.8059 3.67567C11.9406 4.00956 12.0065 4.36718 11.9999 4.72715M16.1688 6.0126L14.7271 7.45437H11.9999V9.27249M19.2724 19.2721C19.2724 20.2762 18.4584 21.0902 17.4542 21.0902C16.4501 21.0902 15.6361 20.2762 15.6361 19.2721C15.6361 18.268 16.4501 17.454 17.4542 17.454C18.4584 17.454 19.2724 18.268 19.2724 19.2721ZM19.2724 4.72714C19.2724 5.73126 18.4584 6.54526 17.4542 6.54526C16.4501 6.54526 15.6361 5.73126 15.6361 4.72714C15.6361 3.72302 16.4501 2.90902 17.4542 2.90902C18.4584 2.90902 19.2724 3.72302 19.2724 4.72714Z",
				"stroke": "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			},
			"children": []
		}]
	},
	name: "ArtificialBrain"
};
//#endregion
//#region app/components/base/icons/src/vender/line/development/ArtificialBrain.tsx
var Icon$17 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: ArtificialBrain_default
});
Icon$17.displayName = "ArtificialBrain";
var BarChartSquare02_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "bar-chart-square-02" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"d": "M5.33333 10V11.3333M8 7.33333V11.3333M10.6667 4.66667V11.3333M5.2 14H10.8C11.9201 14 12.4802 14 12.908 13.782C13.2843 13.5903 13.5903 13.2843 13.782 12.908C14 12.4802 14 11.9201 14 10.8V5.2C14 4.0799 14 3.51984 13.782 3.09202C13.5903 2.71569 13.2843 2.40973 12.908 2.21799C12.4802 2 11.9201 2 10.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.0799 2 5.2V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14Z",
					"stroke": "currentColor",
					"stroke-width": "1.25",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "BarChartSquare02"
};
//#endregion
//#region app/components/base/icons/src/vender/line/development/BarChartSquare02.tsx
var Icon$16 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: BarChartSquare02_default
});
Icon$16.displayName = "BarChartSquare02";
var BracketsX_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M18.5708 20C19.8328 20 20.8568 18.977 20.8568 17.714V13.143L21.9998 12L20.8568 10.857V6.286C20.8568 5.023 19.8338 4 18.5708 4M5.429 4C4.166 4 3.143 5.023 3.143 6.286V10.857L2 12L3.143 13.143V17.714C3.143 18.977 4.166 20 5.429 20M15 9L9 15M9 9L15 15",
				"stroke": "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			},
			"children": []
		}]
	},
	name: "BracketsX"
};
//#endregion
//#region app/components/base/icons/src/vender/line/development/BracketsX.tsx
var Icon$15 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: BracketsX_default
});
Icon$15.displayName = "BracketsX";
var CodeBrowser_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "code-browser" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"d": "M22 9H2M14 17.5L16.5 15L14 12.5M10 12.5L7.5 15L10 17.5M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z",
					"stroke": "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "CodeBrowser"
};
//#endregion
//#region app/components/base/icons/src/vender/line/development/CodeBrowser.tsx
var Icon$14 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: CodeBrowser_default
});
Icon$14.displayName = "CodeBrowser";
var Container_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M13.6666 4.85185L7.99998 8M7.99998 8L2.33331 4.85185M7.99998 8L8 14.3333M14 10.7057V5.29431C14 5.06588 14 4.95167 13.9663 4.8498C13.9366 4.75969 13.8879 4.67696 13.8236 4.60717C13.7509 4.52828 13.651 4.47281 13.4514 4.36188L8.51802 1.62114C8.32895 1.5161 8.23442 1.46358 8.1343 1.44299C8.0457 1.42477 7.95431 1.42477 7.8657 1.44299C7.76559 1.46358 7.67105 1.5161 7.48198 1.62114L2.54865 4.36188C2.34896 4.47281 2.24912 4.52828 2.17642 4.60717C2.11211 4.67697 2.06343 4.75969 2.03366 4.84981C2 4.95167 2 5.06588 2 5.29431V10.7057C2 10.9341 2 11.0484 2.03366 11.1502C2.06343 11.2403 2.11211 11.3231 2.17642 11.3929C2.24912 11.4718 2.34897 11.5272 2.54865 11.6382L7.48198 14.3789C7.67105 14.4839 7.76559 14.5365 7.8657 14.557C7.95431 14.5753 8.0457 14.5753 8.1343 14.557C8.23442 14.5365 8.32895 14.4839 8.51802 14.3789L13.4514 11.6382C13.651 11.5272 13.7509 11.4718 13.8236 11.3929C13.8879 11.3231 13.9366 11.2403 13.9663 11.1502C14 11.0484 14 10.9341 14 10.7057Z",
				"stroke": "currentColor",
				"stroke-width": "1.25",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			},
			"children": []
		}]
	},
	name: "Container"
};
//#endregion
//#region app/components/base/icons/src/vender/line/development/Container.tsx
var Icon$13 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Container_default
});
Icon$13.displayName = "Container";
var Database01_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "17",
			"height": "16",
			"viewBox": "0 0 17 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M14.5 3.33337C14.5 4.43794 11.8137 5.33337 8.5 5.33337C5.18629 5.33337 2.5 4.43794 2.5 3.33337M14.5 3.33337C14.5 2.2288 11.8137 1.33337 8.5 1.33337C5.18629 1.33337 2.5 2.2288 2.5 3.33337M14.5 3.33337V12.6667C14.5 13.7734 11.8333 14.6667 8.5 14.6667C5.16667 14.6667 2.5 13.7734 2.5 12.6667V3.33337M14.5 8.00004C14.5 9.10671 11.8333 10 8.5 10C5.16667 10 2.5 9.10671 2.5 8.00004",
				"stroke": "currentColor",
				"stroke-width": "1.25",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			},
			"children": []
		}]
	},
	name: "Database01"
};
//#endregion
//#region app/components/base/icons/src/vender/line/development/Database01.tsx
var Icon$12 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Database01_default
});
Icon$12.displayName = "Database01";
var Database03_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M9.33333 13.3333C9.33333 14.0696 8.73638 14.6666 8 14.6666C7.26362 14.6666 6.66667 14.0696 6.66667 13.3333M9.33333 13.3333C9.33333 12.5969 8.73638 11.9999 8 11.9999M9.33333 13.3333H14M6.66667 13.3333C6.66667 12.5969 7.26362 11.9999 8 11.9999M6.66667 13.3333H2M8 11.9999V9.33325M14 3.33325C14 4.43782 11.3137 5.33325 8 5.33325C4.68629 5.33325 2 4.43782 2 3.33325M14 3.33325C14 2.22868 11.3137 1.33325 8 1.33325C4.68629 1.33325 2 2.22868 2 3.33325M14 3.33325V7.33325C14 8.43992 11.3333 9.33325 8 9.33325M2 3.33325V7.33325C2 8.43992 4.66667 9.33325 8 9.33325",
				"stroke": "currentColor",
				"stroke-width": "1.25",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			},
			"children": []
		}]
	},
	name: "Database03"
};
//#endregion
//#region app/components/base/icons/src/vender/line/development/Database03.tsx
var Icon$11 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Database03_default
});
Icon$11.displayName = "Database03";
var FileHeart02_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "file-heart-02" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"d": "M13.5709 13.9883C13.5108 14.3786 13.175 14.6666 12.7802 14.6666H9.19984C8.90529 14.6666 8.6665 14.4279 8.6665 14.1333V12.2666C8.6665 11.9721 8.90529 11.7333 9.19984 11.7333H9.82654C9.93192 11.7333 10.0274 11.6713 10.0702 11.5749L11.0087 9.46348C11.0438 9.38432 11.1223 9.33331 11.2089 9.33331C11.5721 9.33331 11.8665 9.62771 11.8665 9.99087V10.9333C11.8665 11.0806 11.9859 11.2 12.1332 11.2H13.0673C13.5577 11.2 13.9326 11.637 13.858 12.1216L13.5709 13.9883Z",
					"stroke": "currentColor",
					"stroke-width": "1.25",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}, {
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Vector",
					"d": "M13.3332 6.66665V4.53331C13.3332 3.41321 13.3332 2.85316 13.1152 2.42533C12.9234 2.04901 12.6175 1.74305 12.2412 1.5513C11.8133 1.33331 11.2533 1.33331 10.1332 1.33331H5.8665C4.7464 1.33331 4.18635 1.33331 3.75852 1.5513C3.3822 1.74305 3.07624 2.04901 2.88449 2.42533C2.6665 2.85316 2.6665 3.41321 2.6665 4.53331V11.3333C2.6665 11.9533 2.6665 12.2633 2.73465 12.5176C2.91959 13.2078 3.45868 13.7469 4.14887 13.9318C4.4032 14 4.71319 14 5.33317 14M8.33317 7.33331H5.33317M5.99984 9.99998H5.33317M10.6665 4.66665H5.33317",
					"stroke": "currentColor",
					"stroke-width": "1.25",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "FileHeart02"
};
//#endregion
//#region app/components/base/icons/src/vender/line/development/FileHeart02.tsx
var Icon$10 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: FileHeart02_default
});
Icon$10.displayName = "FileHeart02";
var GitBranch01_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "git-branch-01" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"d": "M2 2V8.8C2 9.92011 2 10.4802 2.21799 10.908C2.40973 11.2843 2.71569 11.5903 3.09202 11.782C3.51984 12 4.0799 12 5.2 12H10M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12ZM2 5.33333L10 5.33333M10 5.33333C10 6.4379 10.8954 7.33333 12 7.33333C13.1046 7.33333 14 6.4379 14 5.33333C14 4.22876 13.1046 3.33333 12 3.33333C10.8954 3.33333 10 4.22876 10 5.33333Z",
					"stroke": "currentColor",
					"stroke-width": "1.25",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "GitBranch01"
};
//#endregion
//#region app/components/base/icons/src/vender/line/development/GitBranch01.tsx
var Icon$9 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: GitBranch01_default
});
Icon$9.displayName = "GitBranch01";
var PromptEngineering_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "prompt-engineering" },
			"children": [
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"id": "Icon",
						"d": "M14 6V5.2C14 4.0799 14 3.51984 13.782 3.09202C13.5903 2.7157 13.2843 2.40974 12.908 2.21799C12.4802 2 11.9201 2 10.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.7157 2.40973 2.40973 2.7157 2.21799 3.09202C2 3.51984 2 4.0799 2 5.2V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.07989 14 5.2 14H6",
						"stroke": "currentColor",
						"stroke-width": "1.25",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"id": "Vector",
						"d": "M4.6665 4.66669H4.67317M6.6665 4.66669H6.67317M8.6665 4.66669H8.67317",
						"stroke": "currentColor",
						"stroke-width": "1.25",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"id": "Icon_2",
						"d": "M11.3333 8L11.5343 8.80399C11.7036 9.48123 11.7883 9.81985 11.9646 10.0954C12.1206 10.3391 12.3275 10.5461 12.5713 10.7021C12.8468 10.8784 13.1854 10.963 13.8627 11.1323L14.6667 11.3333L13.8627 11.5343C13.1854 11.7036 12.8468 11.7883 12.5713 11.9646C12.3275 12.1206 12.1206 12.3275 11.9646 12.5713C11.7883 12.8468 11.7036 13.1854 11.5343 13.8627L11.3333 14.6667L11.1323 13.8627C10.963 13.1854 10.8784 12.8468 10.7021 12.5713C10.5461 12.3275 10.3391 12.1206 10.0954 11.9646C9.81985 11.7883 9.48123 11.7036 8.80399 11.5343L8 11.3333L8.80399 11.1323C9.48123 10.963 9.81985 10.8784 10.0954 10.7021C10.3391 10.5461 10.5461 10.3391 10.7021 10.0954C10.8784 9.81985 10.963 9.48123 11.1323 8.80399L11.3333 8Z",
						"stroke": "currentColor",
						"stroke-width": "1.25",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					},
					"children": []
				}
			]
		}]
	},
	name: "PromptEngineering"
};
//#endregion
//#region app/components/base/icons/src/vender/line/development/PromptEngineering.tsx
var Icon$8 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: PromptEngineering_default
});
Icon$8.displayName = "PromptEngineering";
var PuzzlePiece01_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": {
				"id": "puzzle-piece-01",
				"clip-path": "url(#clip0_6770_9698)"
			},
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"d": "M4.99992 3.00004C4.99992 2.07957 5.74611 1.33337 6.66659 1.33337C7.58706 1.33337 8.33325 2.07957 8.33325 3.00004V4.00004H8.99992C9.9318 4.00004 10.3977 4.00004 10.7653 4.15228C11.2553 4.35527 11.6447 4.74462 11.8477 5.23467C11.9999 5.60222 11.9999 6.06816 11.9999 7.00004H12.9999C13.9204 7.00004 14.6666 7.74623 14.6666 8.66671C14.6666 9.58718 13.9204 10.3334 12.9999 10.3334H11.9999V11.4667C11.9999 12.5868 11.9999 13.1469 11.7819 13.5747C11.5902 13.951 11.2842 14.257 10.9079 14.4487C10.4801 14.6667 9.92002 14.6667 8.79992 14.6667H8.33325V13.5C8.33325 12.6716 7.66168 12 6.83325 12C6.00483 12 5.33325 12.6716 5.33325 13.5V14.6667H4.53325C3.41315 14.6667 2.85309 14.6667 2.42527 14.4487C2.04895 14.257 1.74299 13.951 1.55124 13.5747C1.33325 13.1469 1.33325 12.5868 1.33325 11.4667V10.3334H2.33325C3.25373 10.3334 3.99992 9.58718 3.99992 8.66671C3.99992 7.74623 3.25373 7.00004 2.33325 7.00004H1.33325C1.33325 6.06816 1.33325 5.60222 1.48549 5.23467C1.68848 4.74462 2.07783 4.35527 2.56789 4.15228C2.93543 4.00004 3.40137 4.00004 4.33325 4.00004H4.99992V3.00004Z",
					"stroke": "currentColor",
					"stroke-width": "1.25",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}, {
			"type": "element",
			"name": "defs",
			"attributes": {},
			"children": [{
				"type": "element",
				"name": "clipPath",
				"attributes": { "id": "clip0_6770_9698" },
				"children": [{
					"type": "element",
					"name": "rect",
					"attributes": {
						"width": "16",
						"height": "16",
						"fill": "white"
					},
					"children": []
				}]
			}]
		}]
	},
	name: "PuzzlePiece01"
};
//#endregion
//#region app/components/base/icons/src/vender/line/development/PuzzlePiece01.tsx
var Icon$7 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: PuzzlePiece01_default
});
Icon$7.displayName = "PuzzlePiece01";
var TerminalSquare_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "terminal-square" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"d": "M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z",
					"stroke": "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "TerminalSquare"
};
//#endregion
//#region app/components/base/icons/src/vender/line/development/TerminalSquare.tsx
var Icon$6 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: TerminalSquare_default
});
Icon$6.displayName = "TerminalSquare";
var Variable_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "variable" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Solid" },
				"children": [
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M13.8686 1.70487C13.7055 1.37481 13.3056 1.23952 12.9756 1.40268C12.6455 1.56585 12.5102 1.9657 12.6734 2.29576C13.5225 4.01329 14.0003 5.94969 14.0003 8.00031C14.0003 10.0509 13.5225 11.9873 12.6734 13.7049C12.5102 14.0349 12.6455 14.4348 12.9756 14.5979C13.3056 14.7611 13.7055 14.6258 13.8686 14.2958C14.8066 12.3984 15.3336 10.2602 15.3336 8.00031C15.3336 5.74041 14.8066 3.60221 13.8686 1.70487Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M3.32724 2.29576C3.49041 1.9657 3.35511 1.56585 3.02506 1.40268C2.695 1.23952 2.29515 1.37481 2.13198 1.70487C1.19401 3.60221 0.666992 5.74041 0.666992 8.00031C0.666992 10.2602 1.19401 12.3984 2.13198 14.2958C2.29515 14.6258 2.695 14.7611 3.02506 14.5979C3.35511 14.4348 3.49041 14.0349 3.32724 13.7049C2.47815 11.9873 2.00033 10.0509 2.00033 8.00031C2.00033 5.94969 2.47815 4.01329 3.32724 2.29576Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M9.33274 5.84142C9.74245 5.36093 10.3415 5.0835 10.973 5.0835H11.0328C11.4009 5.0835 11.6994 5.38197 11.6994 5.75016C11.6994 6.11835 11.4009 6.41683 11.0328 6.41683H10.973C10.7333 6.41683 10.5046 6.52209 10.3473 6.70653L8.78729 8.53612L9.28122 10.2739C9.29182 10.3112 9.32425 10.3335 9.35733 10.3335H10.2867C10.6549 10.3335 10.9534 10.632 10.9534 11.0002C10.9534 11.3684 10.6549 11.6668 10.2867 11.6668H9.35733C8.72419 11.6668 8.17111 11.2451 7.99868 10.6385L7.74768 9.75536L6.7641 10.9089C6.35439 11.3894 5.75537 11.6668 5.12387 11.6668H5.06409C4.6959 11.6668 4.39742 11.3684 4.39742 11.0002C4.39742 10.632 4.6959 10.3335 5.06409 10.3335H5.12387C5.36357 10.3335 5.59225 10.2282 5.74952 10.0438L7.30963 8.21412L6.81573 6.47639C6.80513 6.43909 6.7727 6.41683 6.73962 6.41683H5.81022C5.44203 6.41683 5.14355 6.11835 5.14355 5.75016C5.14355 5.38197 5.44203 5.0835 5.81022 5.0835H6.73962C7.37276 5.0835 7.92584 5.5052 8.09826 6.11186L8.34924 6.99487L9.33274 5.84142Z",
							"fill": "currentColor"
						},
						"children": []
					}
				]
			}]
		}]
	},
	name: "Variable"
};
//#endregion
//#region app/components/base/icons/src/vender/line/development/Variable.tsx
var Icon$5 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Variable_default
});
Icon$5.displayName = "Variable";
var Webhooks_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "webhooks" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Vector" },
				"children": [
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M12.0007 11.9999C12.5529 11.9999 13.0007 11.5522 13.0007 10.9999C13.0007 10.4476 12.5529 9.99993 12.0007 9.99993C11.4484 9.99993 11.0007 10.4476 11.0007 10.9999C11.0007 11.5522 11.4484 11.9999 12.0007 11.9999Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M8.00065 5.49993C8.55294 5.49993 9.00065 5.05222 9.00065 4.49993C9.00065 3.94765 8.55294 3.49993 8.00065 3.49993C7.44837 3.49993 7.00065 3.94765 7.00065 4.49993C7.00065 5.05222 7.44837 5.49993 8.00065 5.49993Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M4.00065 11.9999C4.55294 11.9999 5.00065 11.5522 5.00065 10.9999C5.00065 10.4476 4.55294 9.99993 4.00065 9.99993C3.44837 9.99993 3.00065 10.4476 3.00065 10.9999C3.00065 11.5522 3.44837 11.9999 4.00065 11.9999Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M2.40065 8.9666C2.6952 9.18751 2.7549 9.60538 2.53398 9.89993C2.35969 10.1323 2.24311 10.4028 2.19386 10.6891C2.14461 10.9754 2.16409 11.2693 2.25071 11.5466C2.33733 11.8239 2.48859 12.0766 2.69205 12.2839C2.8955 12.4913 3.14531 12.6473 3.4209 12.7392C3.69649 12.831 3.98996 12.8561 4.27713 12.8123C4.56431 12.7685 4.83696 12.6571 5.07262 12.4872C5.30828 12.3174 5.50021 12.0939 5.63258 11.8353C5.76495 11.5768 5.83398 11.2904 5.83398 10.9999C5.83398 10.6317 6.13246 10.3333 6.50065 10.3333H12.0007C12.3688 10.3333 12.6673 10.6317 12.6673 10.9999C12.6673 11.3681 12.3688 11.6666 12.0007 11.6666H7.09635C7.03846 11.9354 6.94561 12.1965 6.81944 12.4429C6.5908 12.8896 6.25929 13.2755 5.85223 13.5689C5.44518 13.8623 4.97424 14.0547 4.47821 14.1304C3.98219 14.2061 3.47528 14.1628 2.99926 14.0041C2.52325 13.8454 2.09175 13.5759 1.74033 13.2178C1.38891 12.8596 1.12763 12.4231 0.978025 11.9441C0.828415 11.4652 0.794759 10.9575 0.879828 10.463C0.964898 9.96855 1.16626 9.50134 1.46732 9.09993C1.68823 8.80538 2.1061 8.74568 2.40065 8.9666Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M7.22821 1.43134C7.70981 1.31005 8.21318 1.30373 8.69767 1.41291C9.18216 1.52208 9.63418 1.74367 10.0172 2.05979C10.4003 2.37591 10.7036 2.77769 10.9027 3.23268C11.0503 3.56999 10.8965 3.96309 10.5592 4.11069C10.2218 4.25828 9.82874 4.10449 9.68115 3.76718C9.56589 3.50377 9.39028 3.27116 9.16852 3.08814C8.94676 2.90512 8.68507 2.77683 8.40458 2.71363C8.12408 2.65042 7.83265 2.65408 7.55383 2.7243C7.27501 2.79452 7.01662 2.92933 6.79952 3.11785C6.58242 3.30637 6.41271 3.54331 6.30409 3.80953C6.19547 4.07575 6.15099 4.36379 6.17424 4.65038C6.19749 4.93696 6.28782 5.21406 6.43794 5.45929C6.58806 5.70452 6.79375 5.911 7.0384 6.06206C7.35127 6.25524 7.44865 6.66527 7.25605 6.9785L4.56855 11.3491C4.37569 11.6628 3.96509 11.7607 3.65145 11.5678C3.33781 11.375 3.2399 10.9644 3.43276 10.6507L5.80875 6.7867C5.61374 6.59953 5.44284 6.38752 5.30076 6.15541C5.04146 5.73184 4.88544 5.25321 4.84527 4.7582C4.80511 4.26319 4.88194 3.76567 5.06956 3.30584C5.25717 2.846 5.55031 2.43674 5.9253 2.11111C6.30029 1.78549 6.74661 1.55262 7.22821 1.43134Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M7.65145 3.93204C7.96509 3.73918 8.37569 3.83709 8.56855 4.15073L10.944 8.01384C11.1917 7.9264 11.4501 7.86984 11.7135 7.84608C12.2008 7.80211 12.6917 7.87167 13.1476 8.04931C13.6036 8.22695 14.0121 8.50783 14.3413 8.86991C14.6704 9.23199 14.9111 9.66542 15.0446 10.1362C15.1781 10.6069 15.2006 11.1022 15.1105 11.5832C15.0204 12.0641 14.82 12.5176 14.5252 12.9081C14.2303 13.2986 13.849 13.6155 13.4111 13.8338C12.9732 14.0522 12.4907 14.1661 12.0014 14.1666C11.6332 14.167 11.3344 13.8688 11.334 13.5006C11.3336 13.1324 11.6318 12.8337 12 12.8333C12.2832 12.833 12.5626 12.767 12.8161 12.6406C13.0696 12.5142 13.2904 12.3308 13.4611 12.1047C13.6318 11.8786 13.7478 11.616 13.8 11.3376C13.8522 11.0592 13.8391 10.7724 13.7618 10.4999C13.6846 10.2273 13.5452 9.97639 13.3546 9.76676C13.1641 9.55714 12.9276 9.39452 12.6636 9.29168C12.3996 9.18884 12.1154 9.14856 11.8333 9.17402C11.5511 9.19947 11.2787 9.28996 11.0375 9.43839C10.8868 9.53104 10.7056 9.56006 10.5336 9.51905C10.3616 9.47805 10.2129 9.37039 10.1203 9.21975L7.43276 4.84913C7.2399 4.53549 7.33781 4.12489 7.65145 3.93204Z",
							"fill": "currentColor"
						},
						"children": []
					}
				]
			}]
		}]
	},
	name: "Webhooks"
};
//#endregion
//#region app/components/base/icons/src/vender/line/development/Webhooks.tsx
var Icon$4 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Webhooks_default
});
Icon$4.displayName = "Webhooks";
var File05_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "file-05" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Solid" },
				"children": [{
					"type": "element",
					"name": "path",
					"attributes": {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						"d": "M8.66667 1.34356C8.66667 1.32602 8.66667 1.31725 8.66591 1.30135C8.65018 0.972168 8.3607 0.682824 8.03151 0.667251C8.01562 0.666499 8.0104 0.666501 8.00001 0.666504H5.8391C5.30248 0.666497 4.85957 0.666491 4.49878 0.695968C4.12405 0.726585 3.77958 0.792295 3.45603 0.957155C2.95426 1.21282 2.54631 1.62077 2.29065 2.12253C2.12579 2.44609 2.06008 2.79056 2.02946 3.16529C1.99999 3.52608 1.99999 3.96899 2 4.50562V11.494C1.99999 12.0307 1.99999 12.4736 2.02946 12.8344C2.06008 13.2091 2.12579 13.5536 2.29065 13.8771C2.54631 14.3789 2.95426 14.7869 3.45603 15.0425C3.77958 15.2074 4.12405 15.2731 4.49878 15.3037C4.85958 15.3332 5.30248 15.3332 5.83912 15.3332H10.1609C10.6975 15.3332 11.1404 15.3332 11.5012 15.3037C11.8759 15.2731 12.2204 15.2074 12.544 15.0425C13.0457 14.7869 13.4537 14.3789 13.7093 13.8771C13.8742 13.5536 13.9399 13.2091 13.9705 12.8344C14 12.4736 14 12.0307 14 11.4941V6.66646C14 6.65611 14 6.65093 13.9993 6.63505C13.9837 6.30583 13.6943 6.01631 13.3651 6.0006C13.3492 5.99985 13.3405 5.99985 13.323 5.99985L10.3787 5.99985C10.2105 5.99987 10.0466 5.99989 9.90785 5.98855C9.75545 5.9761 9.57563 5.94672 9.39468 5.85452C9.1438 5.72669 8.93983 5.52272 8.81199 5.27183C8.7198 5.09088 8.69042 4.91106 8.67797 4.75867C8.66663 4.61989 8.66665 4.45603 8.66667 4.28778L8.66667 1.34356ZM5.33333 8.6665C4.96514 8.6665 4.66667 8.96498 4.66667 9.33317C4.66667 9.70136 4.96514 9.99984 5.33333 9.99984H10.6667C11.0349 9.99984 11.3333 9.70136 11.3333 9.33317C11.3333 8.96498 11.0349 8.6665 10.6667 8.6665H5.33333ZM5.33333 11.3332C4.96514 11.3332 4.66667 11.6316 4.66667 11.9998C4.66667 12.368 4.96514 12.6665 5.33333 12.6665H9.33333C9.70152 12.6665 10 12.368 10 11.9998C10 11.6316 9.70152 11.3332 9.33333 11.3332H5.33333Z",
						"fill": "currentColor"
					},
					"children": []
				}, {
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M12.6053 4.6665C12.8011 4.6665 12.8989 4.6665 12.9791 4.61735C13.0923 4.54794 13.16 4.3844 13.129 4.25526C13.107 4.16382 13.0432 4.10006 12.9155 3.97253L10.694 1.75098C10.5664 1.62333 10.5027 1.5595 10.4112 1.53752C10.2821 1.50648 10.1186 1.57417 10.0492 1.6874C10 1.76757 10 1.86545 10 2.0612L10 4.13315C10 4.31982 10 4.41316 10.0363 4.48446C10.0683 4.54718 10.1193 4.59818 10.182 4.63014C10.2533 4.66647 10.3466 4.66647 10.5333 4.66647L12.6053 4.6665Z",
						"fill": "currentColor"
					},
					"children": []
				}]
			}]
		}]
	},
	name: "File05"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/files/File05.tsx
var Icon$3 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: File05_default
});
Icon$3.displayName = "File05";
var FileSearch02_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "file-search-02" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Solid" },
				"children": [{
					"type": "element",
					"name": "path",
					"attributes": {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						"d": "M10.1609 0.666748H5.83913C5.3025 0.66674 4.85958 0.666734 4.49878 0.696212C4.12405 0.726828 3.77958 0.792538 3.45603 0.957399C2.95426 1.21306 2.54631 1.62101 2.29065 2.12277C2.12579 2.44633 2.06008 2.7908 2.02946 3.16553C1.99999 3.52632 1.99999 3.96924 2 4.50587V11.4943C1.99999 12.0309 1.99999 12.4738 2.02946 12.8346C2.06008 13.2094 2.12579 13.5538 2.29065 13.8774C2.54631 14.3792 2.95426 14.7871 3.45603 15.0428C3.77958 15.2076 4.12405 15.2733 4.49878 15.304C4.85958 15.3334 5.30248 15.3334 5.83912 15.3334H7.75554C8.22798 15.3334 8.4642 15.3334 8.55219 15.2689C8.64172 15.2033 8.67645 15.1421 8.68693 15.0316C8.69724 14.9229 8.55693 14.6879 8.27632 14.2177C7.88913 13.5689 7.66667 12.8105 7.66667 12.0001C7.66667 9.60685 9.60677 7.66675 12 7.66675C12.4106 7.66675 12.8078 7.72385 13.1842 7.83055C13.5061 7.92177 13.667 7.96739 13.7581 7.94138C13.847 7.91602 13.9015 7.87486 13.9501 7.79623C14 7.71563 14 7.56892 14 7.27549V4.50587C14 3.96923 14 3.52633 13.9705 3.16553C13.9399 2.7908 13.8742 2.44633 13.7093 2.12277C13.4537 1.62101 13.0457 1.21306 12.544 0.957399C12.2204 0.792538 11.8759 0.726828 11.5012 0.696212C11.1404 0.666734 10.6975 0.66674 10.1609 0.666748ZM4.66667 3.33342C4.29848 3.33342 4 3.63189 4 4.00008C4 4.36827 4.29848 4.66675 4.66667 4.66675H10.6667C11.0349 4.66675 11.3333 4.36827 11.3333 4.00008C11.3333 3.63189 11.0349 3.33342 10.6667 3.33342H4.66667ZM4 6.66675C4 6.29856 4.29848 6.00008 4.66667 6.00008H8.66667C9.03486 6.00008 9.33333 6.29856 9.33333 6.66675C9.33333 7.03494 9.03486 7.33342 8.66667 7.33342H4.66667C4.29848 7.33342 4 7.03494 4 6.66675ZM4 9.33342C4 8.96523 4.29848 8.66675 4.66667 8.66675H6C6.36819 8.66675 6.66667 8.96523 6.66667 9.33342C6.66667 9.7016 6.36819 10.0001 6 10.0001H4.66667C4.29848 10.0001 4 9.7016 4 9.33342Z",
						"fill": "currentColor"
					},
					"children": []
				}, {
					"type": "element",
					"name": "path",
					"attributes": {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						"d": "M9 12.0001C9 10.3432 10.3431 9.00008 12 9.00008C13.6569 9.00008 15 10.3432 15 12.0001C15 12.5871 14.8314 13.1348 14.54 13.5972L15.1381 14.1953C15.3984 14.4557 15.3984 14.8778 15.1381 15.1382C14.8777 15.3985 14.4556 15.3985 14.1953 15.1382L13.5972 14.54C13.1347 14.8315 12.587 15.0001 12 15.0001C10.3431 15.0001 9 13.6569 9 12.0001ZM12 10.3334C11.0795 10.3334 10.3333 11.0796 10.3333 12.0001C10.3333 12.9206 11.0795 13.6667 12 13.6667C12.9205 13.6667 13.6667 12.9206 13.6667 12.0001C13.6667 11.0796 12.9205 10.3334 12 10.3334Z",
						"fill": "currentColor"
					},
					"children": []
				}]
			}]
		}]
	},
	name: "FileSearch02"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/files/FileSearch02.tsx
var Icon$2 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: FileSearch02_default
});
Icon$2.displayName = "FileSearch02";
var FileZip_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "Icon" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Vector",
					"d": "M3.99999 1.33325H7.99999V5.33325C7.99999 6.06963 8.59692 6.66659 9.33332 6.66659H13.3333V13.3333C13.3333 14.0697 12.7364 14.6666 12 14.6666H6.66666V13.3333H7.99999V11.9999H6.66666V10.6666H7.99999V9.33325H6.66666V7.99992H5.33332V9.33325H6.66666V10.6666H5.33332V11.9999H6.66666V13.3333H5.33332V14.6666H3.99999C3.26361 14.6666 2.66666 14.0697 2.66666 13.3333V2.66659C2.66666 1.93021 3.26361 1.33325 3.99999 1.33325Z",
					"fill": "currentColor"
				},
				"children": []
			}, {
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Vector_2",
					"opacity": "0.5",
					"d": "M12.9428 4.99993C13.0415 5.09868 13.1232 5.21133 13.1859 5.33327H9.33334V1.48071C9.45528 1.54338 9.56794 1.62504 9.66668 1.72379L12.9428 4.99993Z",
					"fill": "currentColor"
				},
				"children": []
			}]
		}]
	},
	name: "FileZip"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/files/FileZip.tsx
var Icon$1 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: FileZip_default
});
Icon$1.displayName = "FileZip";
var Folder_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "Icon" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Solid",
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M0.666993 4.10794C0.666981 3.75652 0.666972 3.45333 0.687374 3.20362C0.708908 2.94006 0.756452 2.67791 0.884981 2.42566C1.07673 2.04933 1.38269 1.74337 1.75901 1.55163C2.01127 1.4231 2.27341 1.37555 2.53698 1.35402C2.78669 1.33362 3.08986 1.33363 3.4413 1.33364L6.0981 1.33357C6.4938 1.33304 6.84179 1.33258 7.16176 1.44295C7.44201 1.53961 7.69726 1.69737 7.90905 1.9048C8.15086 2.14164 8.30607 2.45309 8.48257 2.80725L9.07895 4.00016H11.4945C12.0312 4.00015 12.4741 4.00015 12.8349 4.02963C13.2096 4.06024 13.5541 4.12595 13.8776 4.29081C14.3794 4.54648 14.7873 4.95442 15.043 5.45619C15.2079 5.77975 15.2736 6.12421 15.3042 6.49895C15.3337 6.85974 15.3337 7.30264 15.3337 7.83928V10.8277C15.3337 11.3644 15.3337 11.8073 15.3042 12.168C15.2736 12.5428 15.2079 12.8872 15.043 13.2108C14.7873 13.7126 14.3794 14.1205 13.8776 14.3762C13.5541 14.541 13.2096 14.6068 12.8349 14.6374C12.4741 14.6668 12.0312 14.6668 11.4945 14.6668H4.50614C3.9695 14.6668 3.52657 14.6668 3.16578 14.6374C2.79104 14.6068 2.44658 14.541 2.12302 14.3762C1.62125 14.1205 1.2133 13.7126 0.957643 13.2108C0.792782 12.8872 0.727073 12.5428 0.696456 12.168C0.666978 11.8073 0.666985 11.3643 0.666993 10.8277V4.10794ZM6.01519 2.66697C6.54213 2.66697 6.64658 2.67567 6.727 2.70341C6.82041 2.73563 6.9055 2.78822 6.97609 2.85736C7.03687 2.91688 7.09136 3.00642 7.32701 3.47773L7.58823 4.00016L2.00038 4.00016C2.00067 3.69017 2.00271 3.47827 2.01628 3.3122C2.03108 3.13109 2.05619 3.06394 2.07299 3.03098C2.13691 2.90554 2.23889 2.80355 2.36433 2.73964C2.3973 2.72284 2.46444 2.69772 2.64555 2.68292C2.83444 2.66749 3.08263 2.66697 3.46699 2.66697H6.01519Z",
					"fill": "currentColor"
				},
				"children": []
			}]
		}]
	},
	name: "Folder"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/files/Folder.tsx
var Icon = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Folder_default
});
Icon.displayName = "Folder";
//#endregion
//#region app/components/base/prompt-editor/plugins/request-url-block/component.tsx
var RequestURLBlockComponent = ({ nodeKey }) => {
	const { t } = useTranslation();
	const [ref, isSelected] = useSelectOrDelete(nodeKey, DELETE_REQUEST_URL_BLOCK_COMMAND);
	return /* @__PURE__ */ jsxs("div", {
		className: cn$1("group/wrap relative mx-0.5 flex h-[18px] select-none items-center rounded-[5px] border border-components-panel-border-subtle bg-components-badge-white-to-dark px-1 hover:border-[#7839ee]", isSelected && "!border-[#7839ee] hover:!border-[#7839ee]"),
		ref,
		children: [/* @__PURE__ */ jsx(cc, { className: "mr-0.5 h-3.5 w-3.5 text-util-colors-violet-violet-600" }), /* @__PURE__ */ jsx("div", {
			className: "system-xs-medium text-util-colors-violet-violet-600",
			children: t("promptEditor.requestURL.item.title", { ns: "common" })
		})]
	});
};
//#endregion
//#region app/components/base/prompt-editor/plugins/request-url-block/node.tsx
var RequestURLBlockNode = class RequestURLBlockNode extends Fi {
	static getType() {
		return "request-url-block";
	}
	static clone(node) {
		return new RequestURLBlockNode(node.__key);
	}
	isInline() {
		return true;
	}
	createDOM() {
		const div = document.createElement("div");
		div.classList.add("inline-flex", "items-center", "align-middle");
		return div;
	}
	updateDOM() {
		return false;
	}
	decorate() {
		return /* @__PURE__ */ jsx(RequestURLBlockComponent, { nodeKey: this.getKey() });
	}
	static importJSON() {
		return $createRequestURLBlockNode();
	}
	exportJSON() {
		return {
			type: "request-url-block",
			version: 1
		};
	}
	getTextContent() {
		return "{{#url#}}";
	}
};
function $createRequestURLBlockNode() {
	return new RequestURLBlockNode();
}
//#endregion
//#region app/components/base/prompt-editor/plugins/request-url-block/request-url-block-replacement-block.tsx
var REGEX$2 = new RegExp(REQUEST_URL_PLACEHOLDER_TEXT);
var RequestURLBlockReplacementBlock = ({ onInsert }) => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([RequestURLBlockNode])) throw new Error("RequestURLBlockNodePlugin: RequestURLBlockNode not registered on editor");
	}, [editor]);
	const createRequestURLBlockNode = useCallback(() => {
		if (onInsert) onInsert();
		return ks($createRequestURLBlockNode());
	}, [onInsert]);
	const getMatch = useCallback((text) => {
		const matchArr = REGEX$2.exec(text);
		if (matchArr === null) return null;
		const startOffset = matchArr.index;
		return {
			end: startOffset + REQUEST_URL_PLACEHOLDER_TEXT.length,
			start: startOffset
		};
	}, []);
	useEffect(() => {
		REGEX$2.lastIndex = 0;
		return rc(editor.registerNodeTransform(CustomTextNode, (textNode) => decoratorTransform(textNode, getMatch, createRequestURLBlockNode)));
	}, []);
	return null;
};
var request_url_block_replacement_block_default = memo(RequestURLBlockReplacementBlock);
//#endregion
//#region app/components/base/prompt-editor/plugins/request-url-block/index.tsx
var INSERT_REQUEST_URL_BLOCK_COMMAND = ne$2("INSERT_REQUEST_URL_BLOCK_COMMAND");
var DELETE_REQUEST_URL_BLOCK_COMMAND = ne$2("DELETE_REQUEST_URL_BLOCK_COMMAND");
var RequestURLBlock = memo(({ onInsert, onDelete }) => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([RequestURLBlockNode])) throw new Error("RequestURLBlockPlugin: RequestURLBlock not registered on editor");
		return rc(editor.registerCommand(INSERT_REQUEST_URL_BLOCK_COMMAND, () => {
			ti([$createRequestURLBlockNode()]);
			if (onInsert) onInsert();
			return true;
		}, 0), editor.registerCommand(DELETE_REQUEST_URL_BLOCK_COMMAND, () => {
			if (onDelete) onDelete();
			return true;
		}, 0));
	}, [
		editor,
		onInsert,
		onDelete
	]);
	return null;
});
RequestURLBlock.displayName = "RequestURLBlock";
//#endregion
//#region app/components/base/prompt-editor/plugins/component-picker-block/menu.tsx
var PickerBlockMenuOption = class extends O$1 {
	group;
	constructor(data) {
		super(data.key);
		this.data = data;
		this.group = data.group;
	}
	onSelectMenuOption = () => this.data.onSelect?.();
	renderMenuOption = (menuRenderProps) => /* @__PURE__ */ jsx(Fragment, { children: this.data.render(menuRenderProps) }, this.data.key);
};
//#endregion
//#region app/components/base/prompt-editor/plugins/component-picker-block/prompt-option.tsx
var PromptMenuItem = memo(({ icon, title, disabled, isSelected, onClick, onMouseEnter, setRefElement }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: `
        flex h-6 cursor-pointer items-center rounded-md px-3 hover:bg-state-base-hover
        ${isSelected && !disabled && "!bg-state-base-hover"}
        ${disabled ? "cursor-not-allowed opacity-30" : "cursor-pointer hover:bg-state-base-hover"}
      `,
		tabIndex: -1,
		ref: setRefElement,
		onMouseEnter: () => {
			if (disabled) return;
			onMouseEnter();
		},
		onMouseDown: (e) => {
			e.preventDefault();
			e.stopPropagation();
		},
		onClick: () => {
			if (disabled) return;
			onClick();
		},
		children: [icon, /* @__PURE__ */ jsx("div", {
			className: "ml-1 text-[13px] text-text-secondary",
			children: title
		})]
	});
});
PromptMenuItem.displayName = "PromptMenuItem";
//#endregion
//#region app/components/base/prompt-editor/plugins/component-picker-block/variable-option.tsx
var VariableMenuItem = memo(({ title, icon, extraElement, isSelected, queryString, onClick, onMouseEnter, setRefElement }) => {
	let before = title;
	let middle = "";
	let after = "";
	if (queryString) {
		const match = new RegExp(queryString, "i").exec(title);
		if (match) {
			before = title.substring(0, match.index);
			middle = match[0];
			after = title.substring(match.index + match[0].length);
		}
	}
	return /* @__PURE__ */ jsxs("div", {
		className: `
        flex h-6 cursor-pointer items-center rounded-md px-3 hover:bg-state-base-hover
        ${isSelected && "bg-state-base-hover"}
      `,
		tabIndex: -1,
		ref: setRefElement,
		onMouseEnter,
		onMouseDown: (e) => {
			e.preventDefault();
			e.stopPropagation();
		},
		onClick,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mr-2",
				children: icon
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grow truncate text-[13px] text-text-secondary",
				title,
				children: [
					before,
					/* @__PURE__ */ jsx("span", {
						className: "text-text-accent",
						children: middle
					}),
					after
				]
			}),
			extraElement
		]
	});
});
VariableMenuItem.displayName = "VariableMenuItem";
//#endregion
//#region app/components/base/prompt-editor/plugins/component-picker-block/hooks.tsx
var usePromptOptions = (contextBlock, queryBlock, historyBlock, requestURLBlock) => {
	const { t } = useTranslation();
	const [editor] = o();
	const promptOptions = [];
	if (contextBlock?.show) promptOptions.push(new PickerBlockMenuOption({
		key: t("promptEditor.context.item.title", { ns: "common" }),
		group: "prompt context",
		render: ({ isSelected, onSelect, onSetHighlight }) => {
			return /* @__PURE__ */ jsx(PromptMenuItem, {
				title: t("promptEditor.context.item.title", { ns: "common" }),
				icon: /* @__PURE__ */ jsx(Icon$3, { className: "h-4 w-4 text-[#6938EF]" }),
				disabled: !contextBlock.selectable,
				isSelected,
				onClick: onSelect,
				onMouseEnter: onSetHighlight
			});
		},
		onSelect: () => {
			if (!contextBlock?.selectable) return;
			editor.dispatchCommand(INSERT_CONTEXT_BLOCK_COMMAND, void 0);
		}
	}));
	if (queryBlock?.show) promptOptions.push(new PickerBlockMenuOption({
		key: t("promptEditor.query.item.title", { ns: "common" }),
		group: "prompt query",
		render: ({ isSelected, onSelect, onSetHighlight }) => {
			return /* @__PURE__ */ jsx(PromptMenuItem, {
				title: t("promptEditor.query.item.title", { ns: "common" }),
				icon: /* @__PURE__ */ jsx(Icon$20, { className: "h-4 w-4 text-[#FD853A]" }),
				disabled: !queryBlock.selectable,
				isSelected,
				onClick: onSelect,
				onMouseEnter: onSetHighlight
			});
		},
		onSelect: () => {
			if (!queryBlock?.selectable) return;
			editor.dispatchCommand(INSERT_QUERY_BLOCK_COMMAND, void 0);
		}
	}));
	if (requestURLBlock?.show) promptOptions.push(new PickerBlockMenuOption({
		key: t("promptEditor.requestURL.item.title", { ns: "common" }),
		group: "request URL",
		render: ({ isSelected, onSelect, onSetHighlight }) => {
			return /* @__PURE__ */ jsx(PromptMenuItem, {
				title: t("promptEditor.requestURL.item.title", { ns: "common" }),
				icon: /* @__PURE__ */ jsx(cc, { className: "h-4 w-4 text-util-colors-violet-violet-600" }),
				disabled: !requestURLBlock.selectable,
				isSelected,
				onClick: onSelect,
				onMouseEnter: onSetHighlight
			});
		},
		onSelect: () => {
			if (!requestURLBlock?.selectable) return;
			editor.dispatchCommand(INSERT_REQUEST_URL_BLOCK_COMMAND, void 0);
		}
	}));
	if (historyBlock?.show) promptOptions.push(new PickerBlockMenuOption({
		key: t("promptEditor.history.item.title", { ns: "common" }),
		group: "prompt history",
		render: ({ isSelected, onSelect, onSetHighlight }) => {
			return /* @__PURE__ */ jsx(PromptMenuItem, {
				title: t("promptEditor.history.item.title", { ns: "common" }),
				icon: /* @__PURE__ */ jsx(Icon$30, { className: "h-4 w-4 text-[#DD2590]" }),
				disabled: !historyBlock.selectable,
				isSelected,
				onClick: onSelect,
				onMouseEnter: onSetHighlight
			});
		},
		onSelect: () => {
			if (!historyBlock?.selectable) return;
			editor.dispatchCommand(INSERT_HISTORY_BLOCK_COMMAND, void 0);
		}
	}));
	return promptOptions;
};
var useVariableOptions = (variableBlock, queryString) => {
	const { t } = useTranslation();
	const [editor] = o();
	const options = useMemo(() => {
		if (!variableBlock?.variables) return [];
		const baseOptions = variableBlock.variables.map((item) => {
			return new PickerBlockMenuOption({
				key: item.value,
				group: "prompt variable",
				render: ({ queryString, isSelected, onSelect, onSetHighlight }) => {
					return /* @__PURE__ */ jsx(VariableMenuItem, {
						title: item.value,
						icon: /* @__PURE__ */ jsx(Icon$15, { className: "h-[14px] w-[14px] text-text-accent" }),
						queryString,
						isSelected,
						onClick: onSelect,
						onMouseEnter: onSetHighlight
					});
				},
				onSelect: () => {
					editor.dispatchCommand(INSERT_VARIABLE_VALUE_BLOCK_COMMAND, `{{${item.value}}}`);
				}
			});
		});
		if (!queryString) return baseOptions;
		const regex = new RegExp(queryString, "i");
		return baseOptions.filter((option) => regex.test(option.key));
	}, [
		editor,
		queryString,
		variableBlock
	]);
	const addOption = useMemo(() => {
		return new PickerBlockMenuOption({
			key: t("promptEditor.variable.modal.add", { ns: "common" }),
			group: "prompt variable",
			render: ({ queryString, isSelected, onSelect, onSetHighlight }) => {
				return /* @__PURE__ */ jsx(VariableMenuItem, {
					title: t("promptEditor.variable.modal.add", { ns: "common" }),
					icon: /* @__PURE__ */ jsx(Icon$15, { className: "h-[14px] w-[14px] text-text-accent" }),
					queryString,
					isSelected,
					onClick: onSelect,
					onMouseEnter: onSetHighlight
				});
			},
			onSelect: () => {
				editor.update(() => {
					const prefixNode = $createCustomTextNode("{{");
					ti([prefixNode, $createCustomTextNode("}}")]);
					prefixNode.select();
				});
			}
		});
	}, [editor, t]);
	return useMemo(() => {
		return variableBlock?.show ? [...options, addOption] : [];
	}, [
		options,
		addOption,
		variableBlock?.show
	]);
};
var useExternalToolOptions = (externalToolBlockType, queryString) => {
	const { t } = useTranslation();
	const [editor] = o();
	const options = useMemo(() => {
		if (!externalToolBlockType?.externalTools) return [];
		const baseToolOptions = externalToolBlockType.externalTools.map((item) => {
			return new PickerBlockMenuOption({
				key: item.name,
				group: "external tool",
				render: ({ queryString, isSelected, onSelect, onSetHighlight }) => {
					return /* @__PURE__ */ jsx(VariableMenuItem, {
						title: item.name,
						icon: /* @__PURE__ */ jsx(app_icon_default, {
							className: "!h-[14px] !w-[14px]",
							icon: item.icon,
							background: item.icon_background
						}),
						extraElement: /* @__PURE__ */ jsx("div", {
							className: "text-xs text-text-tertiary",
							children: item.variableName
						}),
						queryString,
						isSelected,
						onClick: onSelect,
						onMouseEnter: onSetHighlight
					});
				},
				onSelect: () => {
					editor.dispatchCommand(INSERT_VARIABLE_VALUE_BLOCK_COMMAND, `{{${item.variableName}}}`);
				}
			});
		});
		if (!queryString) return baseToolOptions;
		const regex = new RegExp(queryString, "i");
		return baseToolOptions.filter((option) => regex.test(option.key));
	}, [
		editor,
		queryString,
		externalToolBlockType
	]);
	const addOption = useMemo(() => {
		return new PickerBlockMenuOption({
			key: t("promptEditor.variable.modal.addTool", { ns: "common" }),
			group: "external tool",
			render: ({ queryString, isSelected, onSelect, onSetHighlight }) => {
				return /* @__PURE__ */ jsx(VariableMenuItem, {
					title: t("promptEditor.variable.modal.addTool", { ns: "common" }),
					icon: /* @__PURE__ */ jsx(Icon$25, { className: "h-[14px] w-[14px] text-text-accent" }),
					extraElement: /* @__PURE__ */ jsx(Icon$43, { className: "h-3 w-3 text-text-tertiary" }),
					queryString,
					isSelected,
					onClick: onSelect,
					onMouseEnter: onSetHighlight
				});
			},
			onSelect: () => {
				externalToolBlockType?.onAddExternalTool?.();
			}
		});
	}, [externalToolBlockType, t]);
	return useMemo(() => {
		return externalToolBlockType?.show ? [...options, addOption] : [];
	}, [
		options,
		addOption,
		externalToolBlockType?.show
	]);
};
var useOptions = (contextBlock, queryBlock, historyBlock, variableBlock, externalToolBlockType, workflowVariableBlockType, requestURLBlock, currentBlockType, errorMessageBlockType, lastRunBlockType, queryString) => {
	const promptOptions = usePromptOptions(contextBlock, queryBlock, historyBlock, requestURLBlock);
	const variableOptions = useVariableOptions(variableBlock, queryString);
	const externalToolOptions = useExternalToolOptions(externalToolBlockType, queryString);
	const workflowVariableOptions = useMemo(() => {
		if (!workflowVariableBlockType?.show) return [];
		const res = workflowVariableBlockType.variables || [];
		if (errorMessageBlockType?.show && res.findIndex((v) => v.nodeId === "error_message") === -1) res.unshift({
			nodeId: "error_message",
			title: "error_message",
			isFlat: true,
			vars: [{
				variable: "error_message",
				type: VarType.string
			}]
		});
		if (lastRunBlockType?.show && res.findIndex((v) => v.nodeId === "last_run") === -1) res.unshift({
			nodeId: "last_run",
			title: "last_run",
			isFlat: true,
			vars: [{
				variable: "last_run",
				type: VarType.object
			}]
		});
		if (currentBlockType?.show && res.findIndex((v) => v.nodeId === "current") === -1) {
			const title = currentBlockType.generatorType === "prompt" ? "current_prompt" : "current_code";
			res.unshift({
				nodeId: "current",
				title,
				isFlat: true,
				vars: [{
					variable: "current",
					type: VarType.string
				}]
			});
		}
		return res;
	}, [
		workflowVariableBlockType?.show,
		workflowVariableBlockType?.variables,
		errorMessageBlockType?.show,
		lastRunBlockType?.show,
		currentBlockType?.show,
		currentBlockType?.generatorType
	]);
	return useMemo(() => {
		return {
			workflowVariableOptions,
			allFlattenOptions: [
				...promptOptions,
				...variableOptions,
				...externalToolOptions
			]
		};
	}, [
		promptOptions,
		variableOptions,
		externalToolOptions,
		workflowVariableOptions
	]);
};
//#endregion
//#region app/components/base/prompt-editor/plugins/component-picker-block/index.tsx
var ComponentPicker = ({ triggerString, contextBlock, queryBlock, requestURLBlock, historyBlock, variableBlock, externalToolBlock, workflowVariableBlock, currentBlock, errorMessageBlock, lastRunBlock, isSupportFileVar }) => {
	const { eventEmitter } = useEventEmitterContextContext();
	const { refs, floatingStyles, isPositioned } = useFloating({
		placement: "bottom-start",
		middleware: [
			offset(0),
			shift({ padding: 8 }),
			flip()
		]
	});
	const [editor] = o();
	const checkForTriggerMatch = useBasicTypeaheadTriggerMatch(triggerString, {
		minLength: 0,
		maxLength: 0
	});
	const [queryString, setQueryString] = useState(null);
	eventEmitter?.useSubscription((v) => {
		if (v.type === INSERT_VARIABLE_VALUE_BLOCK_COMMAND) editor.dispatchCommand(INSERT_VARIABLE_VALUE_BLOCK_COMMAND, `{{${v.payload}}}`);
	});
	const { allFlattenOptions, workflowVariableOptions } = useOptions(contextBlock, queryBlock, historyBlock, variableBlock, externalToolBlock, workflowVariableBlock, requestURLBlock, currentBlock, errorMessageBlock, lastRunBlock);
	const onSelectOption = useCallback((selectedOption, nodeToRemove, closeMenu) => {
		editor.update(() => {
			if (nodeToRemove && selectedOption?.key) nodeToRemove.remove();
			selectedOption.onSelectMenuOption();
			closeMenu();
		});
	}, [editor]);
	const handleSelectWorkflowVariable = useCallback((variables) => {
		editor.update(() => {
			const needRemove = $splitNodeContainingQuery(checkForTriggerMatch(triggerString, editor));
			if (needRemove) needRemove.remove();
		});
		if (variables.length === 1) {
			const varName = variables[0];
			if (varName === "current") editor.dispatchCommand(INSERT_CURRENT_BLOCK_COMMAND, currentBlock?.generatorType);
			else if (varName === "error_message") editor.dispatchCommand(INSERT_ERROR_MESSAGE_BLOCK_COMMAND, null);
			else if (varName === "last_run") editor.dispatchCommand(INSERT_LAST_RUN_BLOCK_COMMAND, null);
		} else if (variables[1] === "sys.query" || variables[1] === "sys.files") editor.dispatchCommand(INSERT_WORKFLOW_VARIABLE_BLOCK_COMMAND, [variables[1]]);
		else editor.dispatchCommand(INSERT_WORKFLOW_VARIABLE_BLOCK_COMMAND, variables);
	}, [
		editor,
		currentBlock?.generatorType,
		checkForTriggerMatch,
		triggerString
	]);
	const handleClose = useCallback(() => {
		const escapeEvent = new KeyboardEvent("keydown", { key: "Escape" });
		editor.dispatchCommand(Ae, escapeEvent);
	}, [editor]);
	return /* @__PURE__ */ jsx(F, {
		options: allFlattenOptions,
		onQueryChange: setQueryString,
		onSelectOption,
		anchorClassName: "z-[999999] translate-y-[calc(-100%-3px)]",
		menuRenderFn: useCallback((anchorElementRef, { options, selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }) => {
			if (!(anchorElementRef.current && (allFlattenOptions.length || workflowVariableBlock?.show))) return null;
			setTimeout(() => {
				if (anchorElementRef.current) refs.setReference(anchorElementRef.current);
			}, 0);
			return /* @__PURE__ */ jsx(Fragment$1, { children: ReactDOM.createPortal(/* @__PURE__ */ jsx("div", {
				className: "h-0 w-0",
				children: /* @__PURE__ */ jsxs("div", {
					className: "w-[260px] rounded-lg border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-1 shadow-lg",
					style: {
						...floatingStyles,
						visibility: isPositioned ? "visible" : "hidden"
					},
					ref: refs.setFloating,
					children: [
						workflowVariableBlock?.show && /* @__PURE__ */ jsx("div", {
							className: "p-1",
							children: /* @__PURE__ */ jsx(var_reference_vars_default, {
								searchBoxClassName: "mt-1",
								vars: workflowVariableOptions,
								onChange: (variables) => {
									handleSelectWorkflowVariable(variables);
								},
								maxHeightClass: "max-h-[34vh]",
								isSupportFileVar,
								onClose: handleClose,
								onBlur: handleClose,
								showManageInputField: workflowVariableBlock.showManageInputField,
								onManageInputField: workflowVariableBlock.onManageInputField,
								autoFocus: false,
								isInCodeGeneratorInstructionEditor: currentBlock?.generatorType === GeneratorType.code
							})
						}),
						workflowVariableBlock?.show && !!options.length && /* @__PURE__ */ jsx("div", { className: "my-1 h-px w-full -translate-x-1 bg-divider-subtle" }),
						/* @__PURE__ */ jsx("div", { children: options.map((option, index) => /* @__PURE__ */ jsxs(Fragment, { children: [index !== 0 && options.at(index - 1)?.group !== option.group && /* @__PURE__ */ jsx("div", { className: "my-1 h-px w-full -translate-x-1 bg-divider-subtle" }), option.renderMenuOption({
							queryString,
							isSelected: selectedIndex === index,
							onSelect: () => {
								selectOptionAndCleanUp(option);
							},
							onSetHighlight: () => {
								setHighlightedIndex(index);
							}
						})] }, option.key)) })
					]
				})
			}), anchorElementRef.current) });
		}, [
			allFlattenOptions.length,
			workflowVariableBlock?.show,
			floatingStyles,
			isPositioned,
			refs,
			workflowVariableOptions,
			isSupportFileVar,
			handleClose,
			currentBlock?.generatorType,
			handleSelectWorkflowVariable,
			queryString,
			workflowVariableBlock?.showManageInputField,
			workflowVariableBlock?.onManageInputField
		]),
		triggerFn: checkForTriggerMatch
	});
};
var component_picker_block_default = memo(ComponentPicker);
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/LexicalDraggableBlockPlugin.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var E = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement, T = E && "documentMode" in document ? document.documentMode : null, B = E && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
E && "InputEvent" in window && !T && new window.InputEvent("input");
var C = class {
	_x;
	_y;
	constructor(t, e) {
		this._x = t, this._y = e;
	}
	get x() {
		return this._x;
	}
	get y() {
		return this._y;
	}
	equals({ x: t, y: e }) {
		return this.x === t && this.y === e;
	}
	calcDeltaXTo({ x: t }) {
		return this.x - t;
	}
	calcDeltaYTo({ y: t }) {
		return this.y - t;
	}
	calcHorizontalDistanceTo(t) {
		return Math.abs(this.calcDeltaXTo(t));
	}
	calcVerticalDistance(t) {
		return Math.abs(this.calcDeltaYTo(t));
	}
	calcDistanceTo(t) {
		return Math.sqrt(Math.pow(this.calcDeltaXTo(t), 2) + Math.pow(this.calcDeltaYTo(t), 2));
	}
};
var R = class R {
	_left;
	_top;
	_right;
	_bottom;
	constructor(t, e, n, o) {
		const [r, i] = e <= o ? [e, o] : [o, e], [s, l] = t <= n ? [t, n] : [n, t];
		this._top = r, this._right = l, this._left = s, this._bottom = i;
	}
	get top() {
		return this._top;
	}
	get right() {
		return this._right;
	}
	get bottom() {
		return this._bottom;
	}
	get left() {
		return this._left;
	}
	get width() {
		return Math.abs(this._left - this._right);
	}
	get height() {
		return Math.abs(this._bottom - this._top);
	}
	equals({ top: t, left: e, bottom: n, right: o }) {
		return t === this._top && n === this._bottom && e === this._left && o === this._right;
	}
	contains(t) {
		if (t instanceof C) {
			const { x: e, y: n } = t, o = n < this._top, r = n > this._bottom, i = e < this._left, s = e > this._right;
			return {
				reason: {
					isOnBottomSide: r,
					isOnLeftSide: i,
					isOnRightSide: s,
					isOnTopSide: o
				},
				result: !(o || r || i || s)
			};
		}
		{
			const { top: e, left: n, bottom: o, right: r } = t;
			return e >= this._top && e <= this._bottom && o >= this._top && o <= this._bottom && n >= this._left && n <= this._right && r >= this._left && r <= this._right;
		}
	}
	intersectsWith(t) {
		const { left: e, top: n, width: o, height: r } = t, { left: i, top: s, width: l, height: a } = this;
		return (e + o >= i + l ? e + o : i + l) - (e <= i ? e : i) <= o + l && (n + r >= s + a ? n + r : s + a) - (n <= s ? n : s) <= r + a;
	}
	generateNewRect({ left: t = this.left, top: e = this.top, right: n = this.right, bottom: o = this.bottom }) {
		return new R(t, e, n, o);
	}
	static fromLTRB(t, e, n, o) {
		return new R(t, e, n, o);
	}
	static fromLWTH(t, e, n, o) {
		return new R(t, n, t + e, n + o);
	}
	static fromPoints(t, e) {
		const { y: n, x: o } = t, { y: r, x: i } = e;
		return R.fromLTRB(o, n, i, r);
	}
	static fromDOM(t) {
		const { top: e, width: n, left: o, height: r } = t.getBoundingClientRect();
		return R.fromLWTH(o, n, e, r);
	}
};
var S = "application/x-lexical-drag-block";
var D = Infinity;
function L(t) {
	const e = (t, e) => t ? parseFloat(window.getComputedStyle(t)[e]) : 0, { marginTop: n, marginBottom: o } = window.getComputedStyle(t), r = e(t.previousElementSibling, "marginBottom"), i = e(t.nextElementSibling, "marginTop");
	return {
		marginBottom: Math.max(parseFloat(o), i),
		marginTop: Math.max(parseFloat(n), r)
	};
}
function M(t, e, o, r = !1) {
	const i = t.getBoundingClientRect(), s = function(t) {
		return t.getEditorState().read(() => zo().getChildrenKeys());
	}(e);
	let l = null;
	return e.getEditorState().read(() => {
		if (r) {
			const [t, r] = [e.getElementByKey(s[0]), e.getElementByKey(s[s.length - 1])], [i, a] = [null != t ? t.getBoundingClientRect() : void 0, null != r ? r.getBoundingClientRect() : void 0];
			if (i && a) {
				const e = kt$2(t), s = kt$2(r);
				if (o.y / e < i.top ? l = t : o.y / s > a.bottom && (l = r), l) return;
			}
		}
		let t = 0 === (a = s.length) ? Infinity : D >= 0 && D < a ? D : Math.floor(a / 2);
		var a;
		let c = 0;
		for (; t >= 0 && t < s.length;) {
			const r = s[t], a = e.getElementByKey(r);
			if (null === a) break;
			const u = kt$2(a), m = new C(o.x / u, o.y / u), g = R.fromDOM(a), { marginTop: h, marginBottom: f } = L(a), { result: p, reason: { isOnTopSide: y, isOnBottomSide: _ } } = g.generateNewRect({
				bottom: g.bottom + f,
				left: i.left,
				right: i.right,
				top: g.top - h
			}).contains(m);
			if (p) {
				l = a, D = t;
				break;
			}
			0 === c && (c = y ? -1 : _ ? 1 : Infinity), t += c;
		}
	}), l;
}
function O(t, f, E, T, C, R, D, O, H) {
	const I = f.parentElement, K = useRef(!1), [N, Y] = useState(null), k = useCallback((t) => {
		Y(t), H && H(t);
	}, [H]);
	return useEffect(() => {
		function e(e) {
			const n = e.target;
			if (!Ps(n)) return void k(null);
			if (O(n)) return;
			k(M(f, t, e));
		}
		function n() {
			k(null);
		}
		return null != I && (I.addEventListener("mousemove", e), I.addEventListener("mouseleave", n)), () => {
			null != I && (I.removeEventListener("mousemove", e), I.removeEventListener("mouseleave", n));
		};
	}, [
		I,
		f,
		t,
		O,
		k
	]), useEffect(() => {
		const t = kt$2(document.getElementsByClassName("ContentEditable__root")[0], !0);
		E.current && function(t, e, n, o) {
			if (!t) return void (e.style.display = "none");
			const r = t.getBoundingClientRect(), i = window.getComputedStyle(t), s = e.getBoundingClientRect(), l = n.getBoundingClientRect();
			let a = parseInt(i.lineHeight, 10);
			isNaN(a) && (a = r.bottom - r.top);
			const c = (r.top + (a - (s.height || a)) / 2 - l.top + n.scrollTop) / o;
			e.style.display = "flex", e.style.opacity = "1", e.style.transform = `translate(4px, ${c}px)`;
		}(N, E.current, f, t);
	}, [
		f,
		N,
		E
	]), useEffect(() => {
		function c(o) {
			if (!K.current) return !1;
			const [i] = bt(o);
			if (i) return !1;
			const { pageY: s, target: l } = o;
			if (!Ps(l)) return !1;
			const a = M(f, t, o, !0), c = T.current;
			return null !== a && null !== c && (function(t, e, n, o) {
				const { top: r, height: i } = e.getBoundingClientRect(), { top: s, width: l } = o.getBoundingClientRect(), { marginTop: a, marginBottom: c } = L(e);
				let u = r;
				n >= r ? u += i + c / 2 : u -= a / 2;
				const m = u - s - 2 + o.scrollTop;
				t.style.transform = `translate(24px, ${m}px)`, t.style.width = l - 48 + "px", t.style.opacity = ".4";
			}(c, a, s / kt$2(l), f), o.preventDefault(), !0);
		}
		return rc(t.registerCommand(Be, (t) => c(t), 1), t.registerCommand(Ke, (o) => function(o) {
			if (!K.current) return !1;
			const [i] = bt(o);
			if (i) return !1;
			const { target: s, dataTransfer: l, pageY: a } = o, u = Po(null != l ? l.getData(S) : "");
			if (!u) return !1;
			if (!Ps(s)) return !1;
			const d = M(f, t, o, !0);
			if (!d) return !1;
			const p = Lo(d);
			if (!p) return !1;
			if (p === u) return B && t.focus(), !0;
			const y = d.getBoundingClientRect().top;
			return a / kt$2(s) >= y ? p.insertAfter(u) : p.insertBefore(u), k(null), B && _s(() => {
				t.focus();
			}), !0;
		}(o), 3));
	}, [
		f,
		t,
		T,
		k
	]), useEffect(() => {
		if (B && C) return rc(t.registerRootListener((e) => {
			function n(n) {
				const o = n.relatedTarget;
				o && o instanceof HTMLElement && O(o) && (e && (e.focus({ preventScroll: !0 }), t.update(() => {
					const t = $r();
					null === t || t.dirty || (t.dirty = !0);
				})), n.stopImmediatePropagation());
			}
			if (e) return e.addEventListener("blur", n, !0), () => e.removeEventListener("blur", n, !0);
		}), t.registerCommand(Ge, () => {
			const e = t.getRootElement(), n = document.activeElement;
			return !!(e && n && n instanceof HTMLElement && O(n)) && (e.focus({ preventScroll: !0 }), t.update(() => {
				const t = $r();
				null === t || t.dirty || (t.dirty = !0);
			}), !0);
		}, 3));
	}, [
		t,
		C,
		O
	]), createPortal(jsxs(Fragment$1, { children: [jsx("div", {
		draggable: !0,
		onDragStart: function(e) {
			const n = e.dataTransfer;
			if (!n || !N) return;
			(function(t, e) {
				const { transform: n } = e.style;
				e.style.transform = "translateZ(0)", t.setDragImage(e, 0, 0), setTimeout(() => {
					e.style.transform = n;
				});
			})(n, N);
			let o = "";
			if (t.update(() => {
				const t = Lo(N);
				t && (o = t.getKey());
			}), K.current = !0, n.setData(S, o), B) {
				const e = t.getRootElement();
				null !== e && document.activeElement !== e && (e.focus({ preventScroll: !0 }), t.update(() => {
					const t = $r();
					null === t || t.dirty || (t.dirty = !0);
				}));
			}
		},
		onDragEnd: function() {
			var e;
			K.current = !1, (e = T.current) && (e.style.opacity = "0", e.style.transform = "translate(-10000px, -10000px)"), B && t.focus();
		},
		children: C && R
	}), D] }), f);
}
function H({ anchorElem: e = document.body, menuRef: n, targetLineRef: o$2, menuComponent: r, targetLineComponent: i, isOnMenu: s, onElementChanged: l }) {
	const [a] = o();
	return O(a, e, n, o$2, a._editable, r, i, s, l);
}
//#endregion
//#region app/components/base/prompt-editor/plugins/draggable-plugin/index.tsx
var DRAGGABLE_BLOCK_MENU_CLASSNAME = "draggable-block-menu";
function isOnMenu(element) {
	return !!element.closest(`.${DRAGGABLE_BLOCK_MENU_CLASSNAME}`);
}
var SUPPORT_DRAG_CLASS = "support-drag";
function checkSupportDrag(element) {
	if (!element) return false;
	if (element.classList.contains(SUPPORT_DRAG_CLASS)) return true;
	if (element.querySelector(`.${SUPPORT_DRAG_CLASS}`)) return true;
	return !!element.closest(`.${SUPPORT_DRAG_CLASS}`);
}
function DraggableBlockPlugin({ anchorElem = document.body }) {
	const menuRef = useRef(null);
	const targetLineRef = useRef(null);
	const [, setDraggableElement] = useState(null);
	const [editor] = o();
	const [isSupportDrag, setIsSupportDrag] = useState(false);
	useEffect(() => {
		const root = editor.getRootElement();
		if (!root) return;
		const onMove = (e) => {
			setIsSupportDrag(checkSupportDrag(e.target));
		};
		root.addEventListener("mousemove", onMove);
		return () => root.removeEventListener("mousemove", onMove);
	}, [editor]);
	return /* @__PURE__ */ jsx(H, {
		anchorElem,
		menuRef,
		targetLineRef,
		menuComponent: isSupportDrag ? /* @__PURE__ */ jsx("div", {
			ref: menuRef,
			className: cn$1(DRAGGABLE_BLOCK_MENU_CLASSNAME, "absolute right-2.5 top-4 cursor-grab opacity-0 will-change-transform active:cursor-move"),
			"data-testid": "draggable-menu",
			children: /* @__PURE__ */ jsx("span", {
				className: "i-ri-draggable size-3.5 text-text-tertiary",
				"data-testid": "draggable-menu-icon"
			})
		}) : null,
		targetLineComponent: /* @__PURE__ */ jsx("div", {
			ref: targetLineRef,
			className: "pointer-events-none absolute left-[-21px] top-0 opacity-0 will-change-transform",
			"data-testid": "draggable-target-line",
			children: /* @__PURE__ */ jsx("div", { className: "absolute -right-10 left-0 top-0 h-[2px] bg-text-accent-secondary" })
		}),
		isOnMenu,
		onElementChanged: setDraggableElement
	});
}
//#endregion
//#region app/components/base/prompt-editor/plugins/hitl-input-block/tag-label.tsx
var TagLabel = ({ type, children, className, onClick }) => {
	const Icon = type === "edit" ? Ct$4 : Icon$44;
	return /* @__PURE__ */ jsxs("div", {
		className: cn$1("inline-flex h-5 cursor-pointer items-center space-x-1 rounded-md bg-components-button-secondary-bg px-1 text-text-accent", className),
		onClick,
		children: [/* @__PURE__ */ jsx(Icon, { className: "size-3.5" }), /* @__PURE__ */ jsx("div", {
			className: "system-xs-medium ",
			children
		})]
	});
};
var tag_label_default = React$1.memo(TagLabel);
//#endregion
//#region app/components/base/prompt-editor/plugins/hitl-input-block/type-switch.tsx
var TypeSwitch = ({ className, isVariable, onIsVariableChange }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: cn$1("inline-flex h-6 cursor-pointer select-none items-center space-x-1 rounded-md pl-1.5 pr-2 text-text-tertiary hover:bg-components-button-ghost-bg-hover", className),
		onClick: () => onIsVariableChange?.(!isVariable),
		children: [/* @__PURE__ */ jsx(Icon$44, { className: "size-3.5" }), /* @__PURE__ */ jsx("div", {
			className: "system-xs-medium",
			children: t(`nodes.humanInput.insertInputField.${isVariable ? "useConstantInstead" : "useVarInstead"}`, { ns: "workflow" })
		})]
	});
};
var type_switch_default = React$1.memo(TypeSwitch);
//#endregion
//#region app/components/base/prompt-editor/plugins/hitl-input-block/pre-populate.tsx
var i18nPrefix$1 = "nodes.humanInput.insertInputField";
var Placeholder$1 = ({ varPickerProps, onTypeClick }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("div", {
		className: "system-sm-regular mt-1 h-[80px] rounded-lg bg-components-input-bg-normal px-3 pt-2 text-text-tertiary",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex flex-wrap items-center leading-5",
			children: /* @__PURE__ */ jsx(Trans, {
				i18nKey: `${i18nPrefix$1}.prePopulateFieldPlaceholder`,
				ns: "workflow",
				components: {
					staticContent: /* @__PURE__ */ jsx(tag_label_default, {
						type: "edit",
						className: "mx-1",
						onClick: () => onTypeClick(false),
						children: t(`${i18nPrefix$1}.staticContent`, { ns: "workflow" })
					}),
					variable: /* @__PURE__ */ jsx(var_reference_picker_default, {
						...varPickerProps,
						trigger: /* @__PURE__ */ jsx(tag_label_default, {
							type: "variable",
							className: "mx-1",
							children: t(`${i18nPrefix$1}.variable`, { ns: "workflow" })
						})
					})
				}
			})
		})
	});
};
var PrePopulate = ({ isVariable = false, onIsVariableChange, nodeId, valueSelector, onValueSelectorChange, value, onValueChange }) => {
	const [onPlaceholderClicked, setOnPlaceholderClicked] = useState(false);
	const handleTypeChange = useCallback((isVar) => {
		setOnPlaceholderClicked(true);
		onIsVariableChange?.(isVar);
	}, [onIsVariableChange]);
	const [isFocus, setIsFocus] = useState(false);
	const varPickerProps = {
		nodeId,
		value: valueSelector || [],
		onChange: onValueSelectorChange,
		readonly: false,
		zIndex: 1e6,
		filterVar: (varPayload) => {
			return [
				VarType.string,
				VarType.number,
				VarType.secret
			].includes(varPayload.type);
		}
	};
	const isShowPlaceholder = !onPlaceholderClicked && (isVariable ? !valueSelector || valueSelector.length === 0 : !value);
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Tab" && !onPlaceholderClicked) {
				e.preventDefault();
				setOnPlaceholderClicked(true);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onPlaceholderClicked, setOnPlaceholderClicked]);
	if (isShowPlaceholder) return /* @__PURE__ */ jsx(Placeholder$1, {
		varPickerProps,
		onTypeClick: handleTypeChange
	});
	if (isVariable) return /* @__PURE__ */ jsxs("div", {
		className: "relative h-[80px] rounded-lg border border-transparent bg-components-input-bg-normal px-3 pt-2",
		children: [/* @__PURE__ */ jsx(var_reference_picker_default, {
			...varPickerProps,
			isJustShowValue: true
		}), /* @__PURE__ */ jsx(type_switch_default, {
			className: "absolute bottom-1 left-1.5",
			isVariable,
			onIsVariableChange: handleTypeChange
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn$1("relative min-h-[80px] rounded-lg border border-transparent bg-components-input-bg-normal pb-1", isFocus && "border-components-input-border-active bg-components-input-bg-active shadow-xs"),
		children: [/* @__PURE__ */ jsx(Textarea, {
			value: value || "",
			className: "h-[43px] min-h-[43px] rounded-none border-none bg-transparent px-3 hover:bg-transparent focus:bg-transparent focus:shadow-none",
			onChange: (e) => onValueChange?.(e.target.value),
			onFocus: () => {
				setOnPlaceholderClicked(true);
				setIsFocus(true);
			},
			onBlur: () => setIsFocus(false),
			autoFocus: true
		}), /* @__PURE__ */ jsx(type_switch_default, {
			className: "absolute bottom-1 left-1.5",
			isVariable,
			onIsVariableChange: handleTypeChange
		})]
	});
};
var pre_populate_default = React$1.memo(PrePopulate);
//#endregion
//#region app/components/base/prompt-editor/plugins/hitl-input-block/input-field.tsx
var i18nPrefix = "nodes.humanInput.insertInputField";
var defaultPayload = {
	type: InputVarType.paragraph,
	output_variable_name: "",
	default: {
		type: "constant",
		selector: [],
		value: ""
	}
};
var InputField = ({ nodeId, isEdit, payload, onChange, onCancel }) => {
	const { t } = useTranslation();
	const [tempPayload, setTempPayload] = useState(payload || defaultPayload);
	const nameValid = useMemo(() => {
		const name = tempPayload.output_variable_name.trim();
		if (!name) return false;
		if (name.includes(" ")) return false;
		return /^[a-z_]\w{0,29}$/.test(name);
	}, [tempPayload.output_variable_name]);
	const handleSave = useCallback(() => {
		if (!nameValid) return;
		onChange(tempPayload);
	}, [
		nameValid,
		onChange,
		tempPayload
	]);
	const defaultValueConfig = tempPayload.default;
	const handleDefaultValueChange = useCallback((key) => {
		return (value) => {
			setTempPayload(produce(tempPayload, (draft) => {
				if (!draft.default) draft.default = {
					type: "constant",
					selector: [],
					value: ""
				};
				if (key === "selector") {
					draft.default.type = "variable";
					draft.default.selector = value;
				} else if (key === "value") {
					draft.default.type = "constant";
					draft.default.value = value;
				} else if (key === "type") draft.default.type = value;
			}));
		};
	}, [tempPayload]);
	useEffect(() => {
		const handleKeyDown = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
				e.preventDefault();
				handleSave();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleSave]);
	return /* @__PURE__ */ jsxs("div", {
		className: "w-[372px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-3 shadow-lg backdrop-blur-[5px]",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "text-text-primary system-md-semibold",
				children: t(`${i18nPrefix}.title`, { ns: "workflow" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-3",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "text-text-secondary system-xs-medium",
						children: [t(`${i18nPrefix}.saveResponseAs`, { ns: "workflow" }), /* @__PURE__ */ jsx("span", {
							className: "relative text-text-destructive-secondary system-xs-regular",
							children: "*"
						})]
					}),
					/* @__PURE__ */ jsx(Input, {
						className: "mt-1.5",
						placeholder: t(`${i18nPrefix}.saveResponseAsPlaceholder`, { ns: "workflow" }),
						value: tempPayload.output_variable_name,
						onChange: (e) => {
							setTempPayload((prev) => ({
								...prev,
								output_variable_name: e.target.value
							}));
						},
						autoFocus: true
					}),
					tempPayload.output_variable_name && !nameValid && /* @__PURE__ */ jsx("div", {
						className: "mt-1 px-1 text-text-destructive-secondary system-xs-regular",
						children: t(`${i18nPrefix}.variableNameInvalid`, { ns: "workflow" })
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "mb-1.5 text-text-secondary system-xs-medium",
					children: t(`${i18nPrefix}.prePopulateField`, { ns: "workflow" })
				}), /* @__PURE__ */ jsx(pre_populate_default, {
					isVariable: defaultValueConfig?.type === "variable",
					onIsVariableChange: (isVariable) => {
						handleDefaultValueChange("type")(isVariable ? "variable" : "constant");
					},
					nodeId,
					valueSelector: defaultValueConfig?.selector,
					onValueSelectorChange: handleDefaultValueChange("selector"),
					value: defaultValueConfig?.value,
					onValueChange: handleDefaultValueChange("value")
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-4 flex justify-end space-x-2",
				children: [/* @__PURE__ */ jsx(Button, {
					"data-testid": "hitl-input-cancel-btn",
					onClick: onCancel,
					children: t("operation.cancel", { ns: "common" })
				}), isEdit ? /* @__PURE__ */ jsx(Button, {
					"data-testid": "hitl-input-save-btn",
					variant: "primary",
					onClick: handleSave,
					disabled: !nameValid,
					children: t("operation.save", { ns: "common" })
				}) : /* @__PURE__ */ jsxs(Button, {
					"data-testid": "hitl-input-insert-btn",
					className: "flex",
					variant: "primary",
					disabled: !nameValid,
					onClick: handleSave,
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "mr-1",
							children: t(`${i18nPrefix}.insert`, { ns: "workflow" })
						}),
						/* @__PURE__ */ jsx("span", {
							className: "mr-0.5 flex h-4 items-center rounded-[4px] bg-components-kbd-bg-white px-1 system-kbd",
							children: getKeyboardKeyNameBySystem("ctrl")
						}),
						/* @__PURE__ */ jsx("span", {
							className: "flex h-4 items-center rounded-[4px] bg-components-kbd-bg-white px-1 system-kbd",
							children: "↩︎"
						})
					]
				})]
			})
		]
	});
};
//#endregion
//#region app/components/base/prompt-editor/plugins/hitl-input-block/variable-block.tsx
var HITLInputVariableBlockComponent = ({ variables, workflowNodesMap = {}, getVarType, environmentVariables, conversationVariables, ragVariables }) => {
	const { t } = useTranslation();
	const [editor] = o();
	const variablesLength = variables.length;
	const isRagVar = isRagVariableVar(variables);
	const isShowAPart = variablesLength > 2 && !isRagVar;
	const varName = (() => {
		const isSystem = isSystemVar(variables);
		const varName = variables[variablesLength - 1];
		return `${isSystem ? "sys." : ""}${varName}`;
	})();
	const [localWorkflowNodesMap, setLocalWorkflowNodesMap] = useState(workflowNodesMap);
	const node = localWorkflowNodesMap[variables[isRagVar ? 1 : 0]];
	const isException = isExceptionVariable(varName, node?.type);
	const variableValid = useMemo(() => {
		let variableValid = true;
		const isEnv = isENV(variables);
		const isChatVar = isConversationVar(variables);
		if (isGlobalVar(variables)) return true;
		if (isEnv) {
			if (environmentVariables) variableValid = environmentVariables.some((v) => v.variable === `${variables?.[0] ?? ""}.${variables?.[1] ?? ""}`);
		} else if (isChatVar) {
			if (conversationVariables) variableValid = conversationVariables.some((v) => v.variable === `${variables?.[0] ?? ""}.${variables?.[1] ?? ""}`);
		} else if (isRagVar) {
			if (ragVariables) variableValid = ragVariables.some((v) => v.variable === `${variables?.[0] ?? ""}.${variables?.[1] ?? ""}.${variables?.[2] ?? ""}`);
		} else variableValid = !!node;
		return variableValid;
	}, [
		variables,
		node,
		environmentVariables,
		conversationVariables,
		isRagVar,
		ragVariables
	]);
	useEffect(() => {
		if (!editor.hasNodes([HITLInputNode])) throw new Error("HITLInputNodePlugin: HITLInputNode not registered on editor");
		return rc(editor.registerCommand(UPDATE_WORKFLOW_NODES_MAP$1, (workflowNodesMap) => {
			setLocalWorkflowNodesMap(workflowNodesMap);
			return true;
		}, 0));
	}, [editor]);
	const Item = /* @__PURE__ */ jsx(variable_label_in_editor_default, {
		nodeType: node?.type,
		nodeTitle: node?.title,
		variables,
		isExceptionVariable: isException,
		errorMsg: !variableValid ? t("errorMsg.invalidVariable", { ns: "workflow" }) : void 0,
		notShowFullPath: isShowAPart
	});
	if (!node) return Item;
	return /* @__PURE__ */ jsx(tooltip_default, {
		noDecoration: true,
		popupContent: /* @__PURE__ */ jsx(var_full_path_panel_default, {
			nodeName: node.title,
			path: variables.slice(1),
			varType: getVarType ? getVarType({
				nodeId: variables[0],
				valueSelector: variables
			}) : Type.string,
			nodeType: node?.type
		}),
		disabled: !isShowAPart,
		children: /* @__PURE__ */ jsx("div", { children: Item })
	});
};
var variable_block_default = memo(HITLInputVariableBlockComponent);
//#endregion
//#region app/components/base/prompt-editor/plugins/hitl-input-block/component-ui.tsx
var HITLInputComponentUI = ({ nodeId, varName, formInput = {
	type: InputVarType.paragraph,
	output_variable_name: varName,
	default: {
		type: "constant",
		selector: [],
		value: ""
	}
}, onChange, onRename, onRemove, workflowNodesMap = {}, getVarType, environmentVariables, conversationVariables, ragVariables, readonly }) => {
	const { t } = useTranslation();
	const [isShowEditModal, { setTrue: showEditModal, setFalse: hideEditModal }] = useBoolean(false);
	const editBtnRef = useRef(null);
	useEffect(() => {
		const editBtn = editBtnRef.current;
		if (editBtn) editBtn.addEventListener("click", showEditModal);
		return () => {
			if (editBtn) editBtn.removeEventListener("click", showEditModal);
		};
	}, []);
	const removeBtnRef = useRef(null);
	useEffect(() => {
		const removeBtn = removeBtnRef.current;
		const removeHandler = () => onRemove(varName);
		if (removeBtn) removeBtn.addEventListener("click", removeHandler);
		return () => {
			if (removeBtn) removeBtn.removeEventListener("click", removeHandler);
		};
	}, [onRemove, varName]);
	const handleChange = useCallback((newPayload) => {
		if (varName === newPayload.output_variable_name) onChange(newPayload);
		else onRename(newPayload, varName);
		hideEditModal();
	}, [
		hideEditModal,
		onChange,
		onRename,
		varName
	]);
	const isDefaultValueVariable = useMemo(() => {
		return formInput.default?.type === "variable";
	}, [formInput.default?.type]);
	return /* @__PURE__ */ jsxs("div", {
		className: "group relative flex h-8 w-full select-none items-center rounded-[8px] border-[1.5px] border-components-input-border-active bg-background-default-hover pl-1.5 pr-0.5",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "absolute left-2.5 top-[-12px]",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute bottom-1 h-[1.5px] w-full bg-background-default-subtle" }), /* @__PURE__ */ jsxs("div", {
					className: "relative flex items-center space-x-0.5 px-1 text-text-accent-light-mode-only",
					children: [/* @__PURE__ */ jsx(Icon$40, { className: "size-3" }), /* @__PURE__ */ jsx("div", {
						className: "system-xs-medium",
						children: varName
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex w-full items-center gap-x-0.5 pr-5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 grow",
					children: [isDefaultValueVariable && /* @__PURE__ */ jsx(variable_block_default, {
						variables: formInput.default?.selector,
						workflowNodesMap,
						getVarType,
						environmentVariables,
						conversationVariables,
						ragVariables
					}), !isDefaultValueVariable && /* @__PURE__ */ jsx("div", {
						className: "max-w-full truncate text-components-input-text-filled system-xs-medium",
						children: formInput.default?.value
					})]
				}), !readonly && /* @__PURE__ */ jsxs("div", {
					className: "hidden h-full shrink-0 items-center space-x-1 group-hover:flex",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-full items-center",
						ref: editBtnRef,
						children: /* @__PURE__ */ jsx(ActionButton, {
							size: "s",
							"data-testid": "action-btn-edit",
							"aria-label": t("operation.edit", { ns: "common" }),
							children: /* @__PURE__ */ jsx("span", { className: "i-ri-edit-line size-4 text-text-tertiary" })
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "flex h-full items-center",
						ref: removeBtnRef,
						children: /* @__PURE__ */ jsx(ActionButton, {
							size: "s",
							"data-testid": "action-btn-remove",
							"aria-label": t("operation.remove", { ns: "common" }),
							children: /* @__PURE__ */ jsx("span", { className: "i-ri-delete-bin-line size-4 text-text-tertiary" })
						})
					})]
				})]
			}),
			isShowEditModal && /* @__PURE__ */ jsx(Modal, {
				isShow: true,
				onClose: hideEditModal,
				wrapperClassName: "z-[999]",
				className: "max-w-[372px] !p-0",
				children: /* @__PURE__ */ jsx(InputField, {
					nodeId,
					isEdit: true,
					payload: formInput,
					onChange: handleChange,
					onCancel: hideEditModal
				})
			})
		]
	});
};
var component_ui_default = React$1.memo(HITLInputComponentUI);
//#endregion
//#region app/components/base/prompt-editor/plugins/hitl-input-block/component.tsx
var HITLInputComponent = ({ nodeKey, nodeId, varName, formInputs = [], onChange, onRename, onRemove, workflowNodesMap = {}, getVarType, environmentVariables, conversationVariables, ragVariables, readonly }) => {
	const [ref] = useSelectOrDelete(nodeKey, DELETE_HITL_INPUT_BLOCK_COMMAND);
	const payload = formInputs.find((item) => item.output_variable_name === varName);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: "w-full pb-1 pt-3",
		children: /* @__PURE__ */ jsx(component_ui_default, {
			nodeId,
			varName,
			formInput: payload,
			onChange: useCallback((newPayload) => {
				if (!payload) {
					onChange([...formInputs, newPayload]);
					return;
				}
				if (payload?.output_variable_name !== newPayload.output_variable_name) {
					onChange(produce(formInputs, (draft) => {
						draft.splice(draft.findIndex((item) => item.output_variable_name === payload?.output_variable_name), 1, newPayload);
					}));
					return;
				}
				onChange(formInputs.map((item) => item.output_variable_name === varName ? newPayload : item));
			}, [
				formInputs,
				onChange,
				payload,
				varName
			]),
			onRename,
			onRemove,
			workflowNodesMap,
			getVarType,
			environmentVariables,
			conversationVariables,
			ragVariables,
			readonly
		})
	});
};
//#endregion
//#region app/components/base/prompt-editor/plugins/hitl-input-block/node.tsx
var HITLInputNode = class HITLInputNode extends Fi {
	__variableName;
	__nodeId;
	__formInputs;
	__onFormInputsChange;
	__onFormInputItemRename;
	__onFormInputItemRemove;
	__workflowNodesMap;
	__getVarType;
	__environmentVariables;
	__conversationVariables;
	__ragVariables;
	__readonly;
	isIsolated() {
		return true;
	}
	isTopLevel() {
		return true;
	}
	static getType() {
		return "hitl-input-block";
	}
	getVariableName() {
		return this.getLatest().__variableName;
	}
	getNodeId() {
		return this.getLatest().__nodeId;
	}
	getFormInputs() {
		return this.getLatest().__formInputs || [];
	}
	getOnFormInputsChange() {
		return this.getLatest().__onFormInputsChange;
	}
	getOnFormInputItemRename() {
		return this.getLatest().__onFormInputItemRename;
	}
	getOnFormInputItemRemove() {
		return this.getLatest().__onFormInputItemRemove;
	}
	getWorkflowNodesMap() {
		return this.getLatest().__workflowNodesMap;
	}
	getGetVarType() {
		return this.getLatest().__getVarType;
	}
	getEnvironmentVariables() {
		return this.getLatest().__environmentVariables || [];
	}
	getConversationVariables() {
		return this.getLatest().__conversationVariables || [];
	}
	getRagVariables() {
		return this.getLatest().__ragVariables || [];
	}
	getReadonly() {
		return this.getLatest().__readonly || false;
	}
	static clone(node) {
		return new HITLInputNode(node.__variableName, node.__nodeId, node.__formInputs || [], node.__onFormInputsChange, node.__onFormInputItemRename, node.__onFormInputItemRemove, node.__workflowNodesMap, node.__getVarType, node.__environmentVariables, node.__conversationVariables, node.__ragVariables, node.__readonly, node.__key);
	}
	isInline() {
		return true;
	}
	constructor(varName, nodeId, formInputs, onFormInputsChange, onFormInputItemRename, onFormInputItemRemove, workflowNodesMap, getVarType, environmentVariables, conversationVariables, ragVariables, readonly, key) {
		super(key);
		this.__variableName = varName;
		this.__nodeId = nodeId;
		this.__formInputs = formInputs;
		this.__onFormInputsChange = onFormInputsChange;
		this.__onFormInputItemRename = onFormInputItemRename;
		this.__onFormInputItemRemove = onFormInputItemRemove;
		this.__workflowNodesMap = workflowNodesMap;
		this.__getVarType = getVarType;
		this.__environmentVariables = environmentVariables;
		this.__conversationVariables = conversationVariables;
		this.__ragVariables = ragVariables;
		this.__readonly = readonly;
	}
	createDOM() {
		const div = document.createElement("div");
		div.classList.add("inline-flex", "w-[calc(100%-1px)]", "items-center", "align-middle", "support-drag");
		return div;
	}
	updateDOM() {
		return false;
	}
	decorate() {
		return /* @__PURE__ */ jsx(HITLInputComponent, {
			nodeKey: this.getKey(),
			varName: this.getVariableName(),
			nodeId: this.getNodeId(),
			formInputs: this.getFormInputs(),
			onChange: this.getOnFormInputsChange(),
			onRename: this.getOnFormInputItemRename(),
			onRemove: this.getOnFormInputItemRemove(),
			workflowNodesMap: this.getWorkflowNodesMap(),
			getVarType: this.getGetVarType(),
			environmentVariables: this.getEnvironmentVariables(),
			conversationVariables: this.getConversationVariables(),
			ragVariables: this.getRagVariables(),
			readonly: this.getReadonly()
		});
	}
	static importJSON(serializedNode) {
		return $createHITLInputNode(serializedNode.variableName, serializedNode.nodeId, serializedNode.formInputs, serializedNode.onFormInputsChange, serializedNode.onFormInputItemRename, serializedNode.onFormInputItemRemove, serializedNode.workflowNodesMap, serializedNode.getVarType, serializedNode.environmentVariables, serializedNode.conversationVariables, serializedNode.ragVariables, serializedNode.readonly);
	}
	exportJSON() {
		return {
			type: "hitl-input-block",
			version: 1,
			variableName: this.getVariableName(),
			nodeId: this.getNodeId(),
			formInputs: this.getFormInputs(),
			onFormInputsChange: this.getOnFormInputsChange(),
			onFormInputItemRename: this.getOnFormInputItemRename(),
			onFormInputItemRemove: this.getOnFormInputItemRemove(),
			workflowNodesMap: this.getWorkflowNodesMap(),
			getVarType: this.getGetVarType(),
			environmentVariables: this.getEnvironmentVariables(),
			conversationVariables: this.getConversationVariables(),
			ragVariables: this.getRagVariables(),
			readonly: this.getReadonly()
		};
	}
	getTextContent() {
		return `{{#$output.${this.getVariableName()}#}}`;
	}
};
function $createHITLInputNode(variableName, nodeId, formInputs, onFormInputsChange, onFormInputItemRename, onFormInputItemRemove, workflowNodesMap, getVarType, environmentVariables, conversationVariables, ragVariables, readonly) {
	return new HITLInputNode(variableName, nodeId, formInputs, onFormInputsChange, onFormInputItemRename, onFormInputItemRemove, workflowNodesMap, getVarType, environmentVariables, conversationVariables, ragVariables, readonly);
}
//#endregion
//#region app/components/base/prompt-editor/plugins/hitl-input-block/hitl-input-block-replacement-block.tsx
var REGEX$1 = new RegExp(HITL_INPUT_REG);
var HITLInputReplacementBlock = ({ nodeId, formInputs, onFormInputsChange, onFormInputItemRename, onFormInputItemRemove, workflowNodesMap, getVarType, variables, readonly }) => {
	const [editor] = o();
	const environmentVariables = useMemo(() => variables?.find((o) => o.nodeId === "env")?.vars || [], [variables]);
	const conversationVariables = useMemo(() => variables?.find((o) => o.nodeId === "conversation")?.vars || [], [variables]);
	const ragVariables = useMemo(() => variables?.reduce((acc, curr) => {
		if (curr.nodeId === "rag") acc.push(...curr.vars);
		else acc.push(...curr.vars.filter((v) => v.isRagVariable));
		return acc;
	}, []), [variables]);
	useEffect(() => {
		if (!editor.hasNodes([HITLInputNode])) throw new Error("HITLInputNodePlugin: HITLInputNode not registered on editor");
	}, [editor]);
	const createHITLInputBlockNode = useCallback((textNode) => {
		return ks($createHITLInputNode(textNode.getTextContent().split(".")[1].replace(/#\}\}$/, ""), nodeId, formInputs || [], onFormInputsChange, onFormInputItemRename, onFormInputItemRemove, workflowNodesMap, getVarType, environmentVariables, conversationVariables, ragVariables, readonly));
	}, [
		nodeId,
		formInputs,
		onFormInputsChange,
		onFormInputItemRename,
		onFormInputItemRemove,
		workflowNodesMap,
		getVarType,
		environmentVariables,
		conversationVariables,
		ragVariables,
		readonly
	]);
	const getMatch = useCallback((text) => {
		const matchArr = REGEX$1.exec(text);
		if (matchArr === null) return null;
		const startOffset = matchArr.index;
		return {
			end: startOffset + matchArr[0].length,
			start: startOffset
		};
	}, []);
	useEffect(() => {
		REGEX$1.lastIndex = 0;
		return rc(editor.registerNodeTransform(CustomTextNode, (textNode) => decoratorTransform(textNode, getMatch, createHITLInputBlockNode)));
	}, []);
	return null;
};
var hitl_input_block_replacement_block_default = memo(HITLInputReplacementBlock);
//#endregion
//#region app/components/base/prompt-editor/plugins/hitl-input-block/index.tsx
var INSERT_HITL_INPUT_BLOCK_COMMAND = ne$2("INSERT_HITL_INPUT_BLOCK_COMMAND");
var DELETE_HITL_INPUT_BLOCK_COMMAND = ne$2("DELETE_HITL_INPUT_BLOCK_COMMAND");
var UPDATE_WORKFLOW_NODES_MAP = ne$2("UPDATE_WORKFLOW_NODES_MAP");
var HITLInputBlock = memo(({ onInsert, onDelete, workflowNodesMap, getVarType, readonly }) => {
	const [editor] = o();
	useEffect(() => {
		editor.update(() => {
			editor.dispatchCommand(UPDATE_WORKFLOW_NODES_MAP, workflowNodesMap);
		});
	}, [editor, workflowNodesMap]);
	useEffect(() => {
		if (!editor.hasNodes([HITLInputNode])) throw new Error("HITLInputBlockPlugin: HITLInputBlock not registered on editor");
		return rc(editor.registerCommand(INSERT_HITL_INPUT_BLOCK_COMMAND, (nodeProps) => {
			const { variableName, nodeId, formInputs, onFormInputsChange, onFormInputItemRename, onFormInputItemRemove } = nodeProps;
			const currentHITLNode = $createHITLInputNode(variableName, nodeId, formInputs, onFormInputsChange, onFormInputItemRename, onFormInputItemRemove, workflowNodesMap, getVarType, void 0, void 0, void 0, readonly);
			ti([new CustomTextNode("\n")]);
			ti([currentHITLNode]);
			ti([new CustomTextNode("\n")]);
			if (onInsert) onInsert();
			return true;
		}, 0), editor.registerCommand(DELETE_HITL_INPUT_BLOCK_COMMAND, () => {
			if (onDelete) onDelete();
			return true;
		}, 0));
	}, [
		editor,
		onInsert,
		onDelete
	]);
	return null;
});
HITLInputBlock.displayName = "HITLInputBlock";
//#endregion
//#region app/components/base/prompt-editor/plugins/on-blur-or-focus-block.tsx
var OnBlurBlock = ({ onBlur, onFocus }) => {
	const [editor] = o();
	const ref = useRef(null);
	useEffect(() => {
		const clearHideMenuTimeout = () => {
			if (ref.current) {
				clearTimeout(ref.current);
				ref.current = null;
			}
		};
		const unregister = rc(editor.registerCommand(CLEAR_HIDE_MENU_TIMEOUT, () => {
			clearHideMenuTimeout();
			return true;
		}, 0), editor.registerCommand(Ge, (event) => {
			if (!(event?.relatedTarget)?.classList?.contains("var-search-input")) {
				clearHideMenuTimeout();
				ref.current = setTimeout(() => {
					editor.dispatchCommand(Ae, new KeyboardEvent("keydown", { key: "Escape" }));
				}, 200);
				if (onBlur) onBlur();
			}
			return true;
		}, 0), editor.registerCommand(He, () => {
			if (onFocus) onFocus();
			return true;
		}, 0));
		return () => {
			clearHideMenuTimeout();
			unregister();
		};
	}, [
		editor,
		onBlur,
		onFocus
	]);
	return null;
};
//#endregion
//#region app/components/base/prompt-editor/plugins/placeholder.tsx
var Placeholder = ({ compact, value, className }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("div", {
		className: cn$1("pointer-events-none absolute left-0 top-0 h-full w-full select-none text-sm text-components-input-text-placeholder", compact ? "text-[13px] leading-5" : "text-sm leading-6", className),
		children: value || t("promptEditor.placeholder", { ns: "common" })
	});
};
var placeholder_default = memo(Placeholder);
var META_ALIASES = new Set([
	"meta",
	"cmd",
	"command"
]);
var CTRL_ALIASES = new Set(["ctrl"]);
var ALT_ALIASES = new Set(["alt", "option"]);
var SHIFT_ALIASES = new Set(["shift"]);
function matchHotkey(event, hotkey) {
	/* v8 ignore next 2 -- plugin always provides a default hotkey ('mod+/'); undefined hotkey is not reachable via public props flow. @preserve */
	if (!hotkey) return false;
	if (typeof hotkey === "function") return hotkey(event);
	const matchCombo = (tokens) => {
		const parts = tokens.map((t) => t.toLowerCase().trim()).filter(Boolean);
		let expectedKey = null;
		let needMod = false;
		let needCtrl = false;
		let needMeta = false;
		let needAlt = false;
		let needShift = false;
		for (const p of parts) {
			if (p === "mod") {
				needMod = true;
				continue;
			}
			if (CTRL_ALIASES.has(p)) {
				needCtrl = true;
				continue;
			}
			if (META_ALIASES.has(p)) {
				needMeta = true;
				continue;
			}
			if (ALT_ALIASES.has(p)) {
				needAlt = true;
				continue;
			}
			if (SHIFT_ALIASES.has(p)) {
				needShift = true;
				continue;
			}
			expectedKey = p;
		}
		if (needMod && !(event.metaKey || event.ctrlKey)) return false;
		if (needCtrl && !event.ctrlKey) return false;
		if (needMeta && !event.metaKey) return false;
		if (needAlt && !event.altKey) return false;
		if (needShift && !event.shiftKey) return false;
		if (expectedKey) {
			const k = event.key.toLowerCase();
			if ((k === " " ? "space" : k) !== expectedKey) return false;
		}
		return true;
	};
	if (Array.isArray(hotkey)) if (hotkey.length > 0 && Array.isArray(hotkey[0])) return hotkey.some((tokens) => matchCombo(tokens));
	else return matchCombo(hotkey);
	return matchCombo(hotkey.toLowerCase().split("+").map((t) => t.trim()).filter(Boolean));
}
function ShortcutsPopupPlugin({ hotkey = "mod+/", children, className, container, onOpen, onClose }) {
	const [editor] = o();
	const [open, setOpen] = useState(false);
	const portalRef = useRef(null);
	const lastSelectionRef = useRef(null);
	/* v8 ignore next -- defensive non-browser fallback; this client-only plugin runs where document exists (browser/jsdom). @preserve */
	const containerEl = useMemo(() => container ?? (typeof document !== "undefined" ? document.body : null), [container]);
	const useContainer = !!containerEl && containerEl !== document.body;
	const { refs, floatingStyles, isPositioned } = useFloating({
		placement: "bottom-start",
		middleware: [
			offset(0),
			shift({
				padding: 8,
				altBoundary: true
			}),
			flip(),
			size({
				apply({ availableWidth, availableHeight, elements }) {
					Object.assign(elements.floating.style, {
						maxWidth: `${Math.min(400, availableWidth)}px`,
						maxHeight: `${Math.min(300, availableHeight)}px`,
						overflow: "auto"
					});
				},
				padding: 8
			})
		],
		whileElementsMounted: autoUpdate
	});
	useEffect(() => {
		return editor.registerUpdateListener(({ editorState }) => {
			editorState.read(() => {
				if (wr($r())) {
					const domSelection = window.getSelection();
					/* v8 ignore next 2 -- selection availability is timing-dependent during Lexical updates; guard exists for transient null/zero-range states. @preserve */
					if (domSelection && domSelection.rangeCount > 0) lastSelectionRef.current = domSelection.getRangeAt(0).cloneRange();
				}
			});
		});
	}, [editor]);
	const isEditorFocused = useCallback(() => {
		const root = editor.getRootElement();
		/* v8 ignore next 2 -- root can be null during Lexical mount/unmount transitions before DOM root attachment. @preserve */
		if (!root) return false;
		return root.contains(document.activeElement);
	}, [editor]);
	const openPortal = useCallback(() => {
		const domSelection = window.getSelection();
		let range = null;
		if (domSelection && domSelection.rangeCount > 0) range = domSelection.getRangeAt(0).cloneRange();
		else range = lastSelectionRef.current;
		if (range) {
			const rects = range.getClientRects();
			let rect = null;
			if (rects && rects.length) rect = rects[rects.length - 1];
			else rect = range.getBoundingClientRect();
			if (rect.width === 0 && rect.height === 0) {
				const root = editor.getRootElement();
				/* v8 ignore next 10 -- zero-size rect recovery depends on browser layout/selection geometry; deterministic reproduction in jsdom is unreliable. @preserve */
				if (root) {
					const sc = range.startContainer;
					rect = (sc.nodeType === Node.ELEMENT_NODE ? sc : sc.parentElement || root).getBoundingClientRect();
					if (rect.width === 0 && rect.height === 0) rect = root.getBoundingClientRect();
				}
			}
			if (rect && !(rect.top === 0 && rect.left === 0 && rect.width === 0 && rect.height === 0)) refs.setReference({ getBoundingClientRect() {
				return rect;
			} });
		}
		setOpen(true);
		onOpen?.();
	}, [onOpen]);
	const closePortal = useCallback(() => {
		setOpen(false);
		onClose?.();
	}, [onClose]);
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (open && event.key === "Escape") {
				event.stopPropagation();
				event.preventDefault();
				closePortal();
				return;
			}
			if (!isEditorFocused()) return;
			if (matchHotkey(event, hotkey)) {
				event.preventDefault();
				openPortal();
			}
		};
		document.addEventListener("keydown", handleKeyDown, true);
		return () => document.removeEventListener("keydown", handleKeyDown, true);
	}, [
		hotkey,
		open,
		isEditorFocused,
		openPortal,
		closePortal
	]);
	useEffect(() => {
		if (!open) return;
		const onMouseDown = (e) => {
			/* v8 ignore next 2 -- outside-click listener can race with ref cleanup during close/unmount; null-ref path is a safety guard. @preserve */
			if (!portalRef.current) return;
			if (!portalRef.current.contains(e.target)) closePortal();
		};
		document.addEventListener("mousedown", onMouseDown, false);
		return () => document.removeEventListener("mousedown", onMouseDown, false);
	}, [open, closePortal]);
	const handleInsert = useCallback((command, params) => {
		editor.dispatchCommand(command, params);
		closePortal();
	}, [editor, closePortal]);
	if (!open || !containerEl) return null;
	return createPortal(/* @__PURE__ */ jsx("div", {
		ref: (node) => {
			portalRef.current = node;
			refs.setFloating(node);
		},
		className: cn$1(useContainer ? "" : "z-[999999]", "absolute rounded-xl bg-components-panel-bg-blur shadow-lg", className),
		style: {
			...floatingStyles,
			visibility: isPositioned ? "visible" : "hidden"
		},
		children: typeof children === "function" ? children(closePortal, handleInsert) : children ?? "shortcuts_empty_content"
	}), containerEl);
}
//#endregion
//#region app/components/base/prompt-editor/plugins/update-block.tsx
var PROMPT_EDITOR_UPDATE_VALUE_BY_EVENT_EMITTER = "PROMPT_EDITOR_UPDATE_VALUE_BY_EVENT_EMITTER";
var PROMPT_EDITOR_INSERT_QUICKLY = "PROMPT_EDITOR_INSERT_QUICKLY";
var UpdateBlock = ({ instanceId }) => {
	const { eventEmitter } = useEventEmitterContextContext();
	const [editor] = o();
	eventEmitter?.useSubscription((v) => {
		if (v.type === "PROMPT_EDITOR_UPDATE_VALUE_BY_EVENT_EMITTER" && v.instanceId === instanceId) {
			const editorState = editor.parseEditorState(textToEditorState(v.payload));
			editor.setEditorState(editorState);
		}
	});
	eventEmitter?.useSubscription((v) => {
		if (v.type === "PROMPT_EDITOR_INSERT_QUICKLY" && v.instanceId === instanceId) {
			editor.focus();
			editor.update(() => {
				ti([new CustomTextNode("/")]);
				editor.dispatchCommand(CLEAR_HIDE_MENU_TIMEOUT, void 0);
			});
		}
	});
	return null;
};
//#endregion
//#region app/components/base/prompt-editor/plugins/variable-value-block/node.tsx
var VariableValueBlockNode = class VariableValueBlockNode extends lr {
	static getType() {
		return "variable-value-block";
	}
	static clone(node) {
		return new VariableValueBlockNode(node.__text, node.__key);
	}
	createDOM(config) {
		const element = super.createDOM(config);
		element.classList.add("inline-flex", "items-center", "px-0.5", "h-[22px]", "text-text-accent", "rounded-[5px]", "align-middle");
		return element;
	}
	static importJSON(serializedNode) {
		const node = $createVariableValueBlockNode(serializedNode.text);
		node.setFormat(serializedNode.format);
		node.setDetail(serializedNode.detail);
		node.setMode(serializedNode.mode);
		node.setStyle(serializedNode.style);
		return node;
	}
	exportJSON() {
		return {
			detail: this.getDetail(),
			format: this.getFormat(),
			mode: this.getMode(),
			style: this.getStyle(),
			text: this.getTextContent(),
			type: "variable-value-block",
			version: 1
		};
	}
	canInsertTextBefore() {
		return false;
	}
};
function $createVariableValueBlockNode(text = "") {
	return ks(new VariableValueBlockNode(text));
}
//#endregion
//#region app/components/base/prompt-editor/plugins/variable-value-block/utils.ts
function getHashtagRegexString() {
	return "\\{\\{[a-zA-Z_][a-zA-Z0-9_]{0,29}\\}\\}";
}
//#endregion
//#region app/components/base/prompt-editor/plugins/variable-value-block/index.tsx
var REGEX = new RegExp(getHashtagRegexString(), "i");
var VariableValueBlock = () => {
	const [editor] = o();
	useEffect(() => {
		if (!editor.hasNodes([VariableValueBlockNode])) throw new Error("VariableValueBlockPlugin: VariableValueNode not registered on editor");
	}, [editor]);
	const createVariableValueBlockNode = useCallback((textNode) => {
		return $createVariableValueBlockNode(textNode.getTextContent());
	}, []);
	useLexicalTextEntity(useCallback((text) => {
		const matchArr = REGEX.exec(text);
		if (matchArr === null) return null;
		const hashtagLength = matchArr[0].length;
		const startOffset = matchArr.index;
		return {
			end: startOffset + hashtagLength,
			start: startOffset
		};
	}, []), VariableValueBlockNode, createVariableValueBlockNode);
	return null;
};
//#endregion
//#region app/components/base/prompt-editor/index.tsx
var PromptEditor = ({ instanceId, compact, wrapperClassName, className, placeholder, placeholderClassName, style, value, editable = true, onChange, onBlur, onFocus, contextBlock, queryBlock, requestURLBlock, historyBlock, variableBlock, externalToolBlock, workflowVariableBlock, hitlInputBlock, currentBlock, errorMessageBlock, lastRunBlock, isSupportFileVar, shortcutPopups = [] }) => {
	const { eventEmitter } = useEventEmitterContextContext();
	const initialConfig = {
		theme: { paragraph: "group-[.clamp]:line-clamp-5 group-focus/editable:!line-clamp-none" },
		namespace: "prompt-editor",
		nodes: [
			CodeNode,
			CustomTextNode,
			{
				replace: lr,
				with: (node) => new CustomTextNode(node.__text)
			},
			ContextBlockNode,
			HistoryBlockNode,
			QueryBlockNode,
			RequestURLBlockNode,
			WorkflowVariableBlockNode,
			VariableValueBlockNode,
			HITLInputNode,
			CurrentBlockNode,
			ErrorMessageBlockNode,
			LastRunBlockNode
		],
		editorState: textToEditorState(value || ""),
		onError: (error) => {
			throw error;
		}
	};
	const handleEditorChange = (editorState) => {
		const text = editorState.read(() => {
			return zo().getChildren().map((p) => p.getTextContent()).join("\n");
		});
		if (onChange) onChange(text);
	};
	useEffect(() => {
		eventEmitter?.emit({
			type: UPDATE_DATASETS_EVENT_EMITTER,
			payload: contextBlock?.datasets
		});
	}, [eventEmitter, contextBlock?.datasets]);
	useEffect(() => {
		eventEmitter?.emit({
			type: UPDATE_HISTORY_EVENT_EMITTER,
			payload: historyBlock?.history
		});
	}, [eventEmitter, historyBlock?.history]);
	const [floatingAnchorElem, setFloatingAnchorElem] = useState(null);
	const onRef = (_floatingAnchorElem) => {
		if (_floatingAnchorElem !== null) setFloatingAnchorElem(_floatingAnchorElem);
	};
	return /* @__PURE__ */ jsx(f$2, {
		initialConfig: {
			...initialConfig,
			editable
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: cn$1("relative", wrapperClassName),
			ref: onRef,
			children: [
				/* @__PURE__ */ jsx(L$2, {
					contentEditable: /* @__PURE__ */ jsx(x$2, {
						className: cn$1("group/editable text-text-secondary outline-none group-[.clamp]:max-h-24 group-[.clamp]:overflow-y-auto", compact ? "text-[13px] leading-5" : "text-sm leading-6", className),
						style: style || {}
					}),
					placeholder: /* @__PURE__ */ jsx(placeholder_default, {
						value: placeholder,
						className: cn$1("truncate", placeholderClassName),
						compact
					}),
					ErrorBoundary: n$1
				}),
				shortcutPopups?.map(({ hotkey, Popup }, idx) => /* @__PURE__ */ jsx(ShortcutsPopupPlugin, {
					hotkey,
					children: (closePortal, onInsert) => /* @__PURE__ */ jsx(Popup, {
						onClose: closePortal,
						onInsert
					})
				}, idx)),
				/* @__PURE__ */ jsx(component_picker_block_default, {
					triggerString: "/",
					contextBlock,
					historyBlock,
					queryBlock,
					requestURLBlock,
					variableBlock,
					externalToolBlock,
					workflowVariableBlock,
					currentBlock,
					errorMessageBlock,
					lastRunBlock,
					isSupportFileVar
				}),
				/* @__PURE__ */ jsx(component_picker_block_default, {
					triggerString: "{",
					contextBlock,
					historyBlock,
					queryBlock,
					requestURLBlock,
					variableBlock,
					externalToolBlock,
					workflowVariableBlock,
					currentBlock,
					errorMessageBlock,
					lastRunBlock,
					isSupportFileVar
				}),
				contextBlock?.show && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(ContextBlock, { ...contextBlock }), /* @__PURE__ */ jsx(context_block_replacement_block_default, { ...contextBlock })] }),
				queryBlock?.show && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(QueryBlock, { ...queryBlock }), /* @__PURE__ */ jsx(query_block_replacement_block_default, {})] }),
				historyBlock?.show && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(HistoryBlock, { ...historyBlock }), /* @__PURE__ */ jsx(HistoryBlockReplacementBlock, { ...historyBlock })] }),
				(variableBlock?.show || externalToolBlock?.show) && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(VariableBlock, {}), /* @__PURE__ */ jsx(VariableValueBlock, {})] }),
				workflowVariableBlock?.show && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(WorkflowVariableBlock, { ...workflowVariableBlock }), /* @__PURE__ */ jsx(workflow_variable_block_replacement_block_default, { ...workflowVariableBlock })] }),
				hitlInputBlock?.show && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(HITLInputBlock, { ...hitlInputBlock }), /* @__PURE__ */ jsx(hitl_input_block_replacement_block_default, { ...hitlInputBlock })] }),
				currentBlock?.show && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(CurrentBlock, { ...currentBlock }), /* @__PURE__ */ jsx(current_block_replacement_block_default, { ...currentBlock })] }),
				requestURLBlock?.show && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(RequestURLBlock, { ...requestURLBlock }), /* @__PURE__ */ jsx(request_url_block_replacement_block_default, { ...requestURLBlock })] }),
				errorMessageBlock?.show && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(ErrorMessageBlock, { ...errorMessageBlock }), /* @__PURE__ */ jsx(error_message_block_replacement_block_default, { ...errorMessageBlock })] }),
				lastRunBlock?.show && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(LastRunBlock, { ...lastRunBlock }), /* @__PURE__ */ jsx(last_run_block_replacement_block_default, { ...lastRunBlock })] }),
				isSupportFileVar && /* @__PURE__ */ jsx(VariableValueBlock, {}),
				/* @__PURE__ */ jsx(n, { onChange: handleEditorChange }),
				/* @__PURE__ */ jsx(OnBlurBlock, {
					onBlur,
					onFocus
				}),
				/* @__PURE__ */ jsx(UpdateBlock, { instanceId }),
				/* @__PURE__ */ jsx(a$1, {}),
				floatingAnchorElem && /* @__PURE__ */ jsx(DraggableBlockPlugin, { anchorElem: floatingAnchorElem })
			]
		})
	});
};
//#endregion
export { Ql as $, b$4 as A, yr as At, Ds as B, Icon$38 as Bt, Lt$2 as C, re as Ct, U$1 as D, we as Dt, kt$2 as E, vs as Et, Al as F, Icon$31 as Ft, Ln as G, He as H, As as I, Icon$32 as It, Or as J, Lo as K, Bl as L, Icon$34 as Lt, $r as M, Icon$24 as Mt, Ae as N, Icon$26 as Nt, W$1 as O, wr as Ot, Ai as P, Icon$30 as Pt, Ps as Q, Bo as R, Icon$35 as Rt, o as S, rc as St, St$2 as T, ti as Tt, Hl as U, Gs as V, Il as W, Pl as X, Pi as Y, Po as Z, vt$1 as _, nc as _t, INSERT_HITL_INPUT_BLOCK_COMMAND as a, Yn as at, x$2 as b, pl as bt, Icon$1 as c, be as ct, INSERT_VARIABLE_VALUE_BLOCK_COMMAND as d, ec as dt, Ss as et, CustomTextNode as f, ge$1 as ft, a$1 as g, me$1 as gt, n as h, lr as ht, placeholder_default as i, Yi as it, le$1 as j, Icon$23 as jt, _$2 as k, yo as kt, Icon$14 as l, bo as lt, L$2 as m, ks as mt, PROMPT_EDITOR_INSERT_QUICKLY as n, Vi as nt, InputField as o, Zl as ot, GeneratorType as p, gs as pt, Oe as q, PROMPT_EDITOR_UPDATE_VALUE_BY_EVENT_EMITTER as r, Vn as rt, Icon as s, Zn as st, PromptEditor as t, Te as tt, Icon$15 as u, de$1 as ut, xt$1 as v, ne$2 as vt, Mt$1 as w, tc as wt, f$2 as x, pr as xt, n$1 as y, oe$2 as yt, Ct$3 as z, Icon$37 as zt };
