import { c as getParentNode, f as isHTMLElement, p as isLastTraversableNode } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { A as useOpenChangeComplete, B as getTabbableBeforeElement, Ct as createSelector, D as FloatingPortal, Et as createChangeEventDetails, F as inertValue, Ft as imperativeAction, H as isOutsideEvent, I as FocusGuard, Kt as siblingOpen, L as getNextTabbable, Ot as cancelOpen, P as transitionStatusMapping, Pt as focusOut, Qt as useId$1, St as fastComponentRef, Vt as itemPress, W as contains, ht as useTimeout, j as useAnimationsFinished, pt as ownerDocument, ut as isMac, vt as ReactStore, xt as fastComponent, z as getTabbableAfterElement } from "./base-BuKAg6Le.js";
import { t as IconBase } from "./IconBase-CEF_UoQI.js";
import { _ as mergeProps, a as DROPDOWN_COLLISION_AVOIDANCE, b as useStableCallback, g as formatErrorMessage, h as useCompositeRootContext, l as EMPTY_ARRAY, m as useButton, p as useMergedRefs, s as POPUP_COLLISION_AVOIDANCE, t as useRenderElement, u as EMPTY_OBJECT, v as useIsoLayoutEffect, x as useRefWithInit } from "./useRenderElement-BTEjG3-d.js";
import { s as useControlled } from "./useLabelableId-VnS7zcRD.js";
import { n as useBaseUiId } from "./useValueChanged-D4oB7b6Z.js";
import { a as pressableTriggerOpenStateMapping, c as PopupTriggerMap, d as FloatingNode, f as FloatingTree, g as FloatingTreeStore, h as useFloatingTree, i as popupStateMapping, m as useFloatingParentNodeId, o as triggerOpenStateMapping, p as useFloatingNodeId, s as useInteractions, t as useOnFirstRender, u as useDismiss } from "./useOnFirstRender-DefDNImt.js";
import { a as COMPOSITE_KEYS, c as useOpenInteractionType, d as FloatingFocusManager, l as useScrollLock, s as InternalBackdrop, u as useClick } from "./composite-CWej4ctq.js";
import { n as useHoverReferenceInteraction, r as useHoverFloatingInteraction, t as safePolygon } from "./safePolygon-DEtoYQt_.js";
import { j as useFocus } from "./credential-item-C22_bUSw.js";
import { a as useOpenStateTransitions, i as useImplicitActiveTrigger, n as createInitialPopupStoreState, o as useTriggerDataForwarding, r as popupStoreSelectors, s as useTriggerRegistration, t as useSyncedFloatingRootContext } from "./useSyncedFloatingRootContext-Dhu-5zf9.js";
import { i as adaptiveOrigin, n as getDisabledMountTransitionStyles, r as useAnchorPositioning, t as parsePlacement } from "./placement-C7DHLE4Z.js";
import { i as useListNavigation, n as getPseudoElementBounds, r as useTypeahead, t as Separator } from "./Separator-C3sy-MgZ.js";
import { t as useRole } from "./useRole-Cm4Xn7XU.js";
import { t as useDirection } from "./DirectionContext-B_f5qiJ9.js";
import { t as useToolbarRootContext } from "./ToolbarRootContext-541RpF1q.js";
import { n as useCompositeListItem, r as CompositeList } from "./useCompositeListItem-RbImWXML.js";
import * as React$1 from "react";
import * as ReactDOM$1 from "react-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var Copy_default = {
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
				"d": "M10.6665 2.66634H11.9998C12.3535 2.66634 12.6926 2.80682 12.9426 3.05687C13.1927 3.30691 13.3332 3.64605 13.3332 3.99967V13.333C13.3332 13.6866 13.1927 14.0258 12.9426 14.2758C12.6926 14.5259 12.3535 14.6663 11.9998 14.6663H3.99984C3.64622 14.6663 3.30708 14.5259 3.05703 14.2758C2.80698 14.0258 2.6665 13.6866 2.6665 13.333V3.99967C2.6665 3.64605 2.80698 3.30691 3.05703 3.05687C3.30708 2.80682 3.64622 2.66634 3.99984 2.66634H5.33317M5.99984 1.33301H9.99984C10.368 1.33301 10.6665 1.63148 10.6665 1.99967V3.33301C10.6665 3.7012 10.368 3.99967 9.99984 3.99967H5.99984C5.63165 3.99967 5.33317 3.7012 5.33317 3.33301V1.99967C5.33317 1.63148 5.63165 1.33301 5.99984 1.33301Z",
				"stroke": "currentColor",
				"stroke-width": "1.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			},
			"children": []
		}]
	},
	name: "Copy"
};
//#endregion
//#region app/components/base/icons/src/vender/line/files/Copy.tsx
var Icon$10 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Copy_default
});
Icon$10.displayName = "Copy";
var CopyCheck_default = {
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
				"d": "M10.6665 2.66683C11.2865 2.66683 11.5965 2.66683 11.8508 2.73498C12.541 2.91991 13.0801 3.45901 13.265 4.14919C13.3332 4.40352 13.3332 4.71352 13.3332 5.3335V11.4668C13.3332 12.5869 13.3332 13.147 13.1152 13.5748C12.9234 13.9511 12.6175 14.2571 12.2412 14.4488C11.8133 14.6668 11.2533 14.6668 10.1332 14.6668H5.8665C4.7464 14.6668 4.18635 14.6668 3.75852 14.4488C3.3822 14.2571 3.07624 13.9511 2.88449 13.5748C2.6665 13.147 2.6665 12.5869 2.6665 11.4668V5.3335C2.6665 4.71352 2.6665 4.40352 2.73465 4.14919C2.91959 3.45901 3.45868 2.91991 4.14887 2.73498C4.4032 2.66683 4.71319 2.66683 5.33317 2.66683M5.99984 10.0002L7.33317 11.3335L10.3332 8.3335M6.39984 4.00016H9.59984C9.9732 4.00016 10.1599 4.00016 10.3025 3.9275C10.4279 3.86359 10.5299 3.7616 10.5938 3.63616C10.6665 3.49355 10.6665 3.30686 10.6665 2.9335V2.40016C10.6665 2.02679 10.6665 1.84011 10.5938 1.6975C10.5299 1.57206 10.4279 1.47007 10.3025 1.40616C10.1599 1.3335 9.97321 1.3335 9.59984 1.3335H6.39984C6.02647 1.3335 5.83978 1.3335 5.69718 1.40616C5.57174 1.47007 5.46975 1.57206 5.40583 1.6975C5.33317 1.84011 5.33317 2.02679 5.33317 2.40016V2.9335C5.33317 3.30686 5.33317 3.49355 5.40583 3.63616C5.46975 3.7616 5.57174 3.86359 5.69718 3.9275C5.83978 4.00016 6.02647 4.00016 6.39984 4.00016Z",
				"stroke": "currentColor",
				"stroke-width": "1.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			},
			"children": []
		}]
	},
	name: "CopyCheck"
};
//#endregion
//#region app/components/base/icons/src/vender/line/files/CopyCheck.tsx
var Icon$9 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: CopyCheck_default
});
Icon$9.displayName = "CopyCheck";
var File02_default = {
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
					"id": "Icon_2",
					"d": "M9.33366 7.3335H5.33366M6.66699 10.0002H5.33366M10.667 4.66683H5.33366M13.3337 4.5335V11.4668C13.3337 12.5869 13.3337 13.147 13.1157 13.5748C12.9239 13.9511 12.618 14.2571 12.2416 14.4488C11.8138 14.6668 11.2538 14.6668 10.1337 14.6668H5.86699C4.74689 14.6668 4.18683 14.6668 3.75901 14.4488C3.38269 14.2571 3.07673 13.9511 2.88498 13.5748C2.66699 13.147 2.66699 12.5869 2.66699 11.4668V4.5335C2.66699 3.41339 2.66699 2.85334 2.88498 2.42552C3.07673 2.04919 3.38269 1.74323 3.75901 1.55148C4.18683 1.3335 4.74689 1.3335 5.86699 1.3335H10.1337C11.2538 1.3335 11.8138 1.3335 12.2416 1.55148C12.618 1.74323 12.9239 2.04919 13.1157 2.42552C13.3337 2.85334 13.3337 3.41339 13.3337 4.5335Z",
					"stroke": "currentColor",
					"stroke-width": "1.5",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "File02"
};
//#endregion
//#region app/components/base/icons/src/vender/line/files/File02.tsx
var Icon$8 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: File02_default
});
Icon$8.displayName = "File02";
var FileArrow01_default = {
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
			"attributes": { "id": "file-arrow-01" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Vector",
					"d": "M3.33333 12.333C3.33333 12.6426 3.33333 12.7974 3.35044 12.9274C3.4686 13.8249 4.17481 14.5311 5.07228 14.6492C5.20225 14.6663 5.35705 14.6663 5.66667 14.6663H10.8C11.9201 14.6663 12.4802 14.6663 12.908 14.4484C13.2843 14.2566 13.5903 13.9506 13.782 13.5743C14 13.1465 14 12.5864 14 11.4663V6.65849C14 6.16931 14 5.92472 13.9447 5.69454C13.8957 5.49047 13.8149 5.29538 13.7053 5.11644C13.5816 4.91461 13.4086 4.74165 13.0627 4.39575L10.9373 2.27027C10.5914 1.92436 10.4184 1.75141 10.2166 1.62773C10.0376 1.51807 9.84254 1.43726 9.63846 1.38827C9.40829 1.33301 9.1637 1.33301 8.67452 1.33301H5.66667C5.35705 1.33301 5.20225 1.33301 5.07228 1.35012C4.17481 1.46827 3.4686 2.17449 3.35044 3.07196M5.33333 5.99967L7.33333 7.99967M7.33333 7.99967L5.33333 9.99967M7.33333 7.99967H2",
					"stroke": "currentColor",
					"stroke-width": "1.5",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "FileArrow01"
};
//#endregion
//#region app/components/base/icons/src/vender/line/files/FileArrow01.tsx
var Icon$7 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: FileArrow01_default
});
Icon$7.displayName = "FileArrow01";
var FileCheck02_default = {
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
			"attributes": { "id": "file-check-02" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"d": "M13.3337 8.33301V4.53301C13.3337 3.4129 13.3337 2.85285 13.1157 2.42503C12.9239 2.0487 12.618 1.74274 12.2416 1.55099C11.8138 1.33301 11.2538 1.33301 10.1337 1.33301H5.86699C4.74689 1.33301 4.18683 1.33301 3.75901 1.55099C3.38269 1.74274 3.07673 2.0487 2.88498 2.42503C2.66699 2.85285 2.66699 3.4129 2.66699 4.53301V11.4663C2.66699 12.5864 2.66699 13.1465 2.88498 13.5743C3.07673 13.9506 3.38269 14.2566 3.75901 14.4484C4.18683 14.6663 4.74689 14.6663 5.86699 14.6663H8.00033M9.33366 7.33301H5.33366M6.66699 9.99967H5.33366M10.667 4.66634H5.33366M9.66699 12.6663L11.0003 13.9997L14.0003 10.9997",
					"stroke": "currentColor",
					"stroke-width": "1.25",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "FileCheck02"
};
//#endregion
//#region app/components/base/icons/src/vender/line/files/FileCheck02.tsx
var Icon$6 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: FileCheck02_default
});
Icon$6.displayName = "FileCheck02";
var FileDownload02_default = {
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
				"d": "M20 12.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.1198 22 8.79986 22H12.5M14 11H8M10 15H8M16 7H8M15 19L18 22M18 22L21 19M18 22V16",
				"stroke": "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			},
			"children": []
		}]
	},
	name: "FileDownload02"
};
//#endregion
//#region app/components/base/icons/src/vender/line/files/FileDownload02.tsx
var Icon$5 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: FileDownload02_default
});
Icon$5.displayName = "FileDownload02";
var FilePlus01_default = {
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
			"attributes": { "id": "file-plus-01" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"d": "M13.3332 6.99967V4.53301C13.3332 3.4129 13.3332 2.85285 13.1152 2.42503C12.9234 2.0487 12.6175 1.74274 12.2412 1.55099C11.8133 1.33301 11.2533 1.33301 10.1332 1.33301H5.8665C4.7464 1.33301 4.18635 1.33301 3.75852 1.55099C3.3822 1.74274 3.07624 2.0487 2.88449 2.42503C2.6665 2.85285 2.6665 3.4129 2.6665 4.53301V11.4663C2.6665 12.5864 2.6665 13.1465 2.88449 13.5743C3.07624 13.9506 3.3822 14.2566 3.75852 14.4484C4.18635 14.6663 4.7464 14.6663 5.8665 14.6663H7.99984M11.9998 13.9997V9.99967M9.99984 11.9997H13.9998",
					"stroke": "currentColor",
					"stroke-width": "1.5",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "FilePlus01"
};
//#endregion
//#region app/components/base/icons/src/vender/line/files/FilePlus01.tsx
var Icon$4 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: FilePlus01_default
});
Icon$4.displayName = "FilePlus01";
var FilePlus02_default = {
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
				"d": "M13.3333 6.99992V4.53325C13.3333 3.41315 13.3333 2.85309 13.1153 2.42527C12.9236 2.04895 12.6176 1.74299 12.2413 1.55124C11.8135 1.33325 11.2534 1.33325 10.1333 1.33325H5.86666C4.74655 1.33325 4.1865 1.33325 3.75868 1.55124C3.38235 1.74299 3.07639 2.04895 2.88464 2.42527C2.66666 2.85309 2.66666 3.41315 2.66666 4.53325V11.4666C2.66666 12.5867 2.66666 13.1467 2.88464 13.5746C3.07639 13.9509 3.38235 14.2569 3.75868 14.4486C4.1865 14.6666 4.74655 14.6666 5.86666 14.6666H7.99999M9.33332 7.33325H5.33332M6.66666 9.99992H5.33332M10.6667 4.66659H5.33332M12 13.9999V9.99992M9.99999 11.9999H14",
				"stroke": "currentColor",
				"stroke-width": "1.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			},
			"children": []
		}]
	},
	name: "FilePlus02"
};
//#endregion
//#region app/components/base/icons/src/vender/line/files/FilePlus02.tsx
var Icon$3 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: FilePlus02_default
});
Icon$3.displayName = "FilePlus02";
var FileText_default = {
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
			"attributes": { "id": "file-text" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"d": "M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8M14 2L20 8M14 2V8H20M16 13H8M16 17H8M10 9H8",
					"stroke": "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "FileText"
};
//#endregion
//#region app/components/base/icons/src/vender/line/files/FileText.tsx
var Icon$2 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: FileText_default
});
Icon$2.displayName = "FileText";
var FileUpload_default = {
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
			"attributes": { "id": "file-upload" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"d": "M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12M14 11H8M10 15H8M16 7H8",
					"stroke": "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}, {
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon_2",
					"d": "M15 18L18 15M18 15L21 18M18 15L18 21",
					"stroke": "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "FileUpload"
};
//#endregion
//#region app/components/base/icons/src/vender/line/files/FileUpload.tsx
var Icon$1 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: FileUpload_default
});
Icon$1.displayName = "FileUpload";
var Folder_default = {
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
			"attributes": { "id": "folder" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"d": "M12.8327 11.0833C12.8327 11.3928 12.7098 11.6895 12.491 11.9083C12.2722 12.1271 11.9754 12.25 11.666 12.25H2.33268C2.02326 12.25 1.72652 12.1271 1.50772 11.9083C1.28893 11.6895 1.16602 11.3928 1.16602 11.0833V2.91667C1.16602 2.60725 1.28893 2.3105 1.50772 2.09171C1.72652 1.87292 2.02326 1.75 2.33268 1.75H5.24935L6.41602 3.5H11.666C11.9754 3.5 12.2722 3.62292 12.491 3.84171C12.7098 4.0605 12.8327 4.35725 12.8327 4.66667V11.0833Z",
					"stroke": "currentColor",
					"stroke-width": "1.5",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "Folder"
};
//#endregion
//#region app/components/base/icons/src/vender/line/files/Folder.tsx
var Icon = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Folder_default
});
Icon.displayName = "Folder";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/positioner/MenuPositionerContext.js
var MenuPositionerContext = /* @__PURE__ */ React$1.createContext(void 0);
function useMenuPositionerContext(optional) {
	const context = React$1.useContext(MenuPositionerContext);
	if (context === void 0 && !optional) throw new Error(formatErrorMessage(33));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/root/MenuRootContext.js
var MenuRootContext = /* @__PURE__ */ React$1.createContext(void 0);
function useMenuRootContext(optional) {
	const context = React$1.useContext(MenuRootContext);
	if (context === void 0 && !optional) throw new Error(formatErrorMessage(36));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/context-menu/root/ContextMenuRootContext.js
var ContextMenuRootContext = /* @__PURE__ */ React$1.createContext(void 0);
function useContextMenuRootContext(optional = true) {
	const context = React$1.useContext(ContextMenuRootContext);
	if (context === void 0 && !optional) throw new Error(formatErrorMessage(25));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/item/useMenuItemCommonProps.js
/**
* Returns common props shared by all menu item types.
* This hook extracts the shared logic for id, role, tabIndex, onKeyDown,
* onMouseMove, onClick, and onMouseUp handlers.
*/
function useMenuItemCommonProps(params) {
	const { closeOnClick, highlighted, id, nodeId, store, typingRef, itemRef, itemMetadata } = params;
	const { events: menuEvents } = store.useState("floatingTreeRoot");
	const contextMenuContext = useContextMenuRootContext(true);
	const isContextMenu = contextMenuContext !== void 0;
	return React$1.useMemo(() => ({
		id,
		role: "menuitem",
		tabIndex: highlighted ? 0 : -1,
		onKeyDown(event) {
			if (event.key === " " && typingRef?.current) event.preventDefault();
		},
		onMouseMove(event) {
			if (!nodeId) return;
			menuEvents.emit("itemhover", {
				nodeId,
				target: event.currentTarget
			});
		},
		onClick(event) {
			if (closeOnClick) menuEvents.emit("close", {
				domEvent: event,
				reason: itemPress
			});
		},
		onMouseUp(event) {
			if (contextMenuContext) {
				const initialCursorPoint = contextMenuContext.initialCursorPointRef.current;
				contextMenuContext.initialCursorPointRef.current = null;
				if (isContextMenu && initialCursorPoint && Math.abs(event.clientX - initialCursorPoint.x) <= 1 && Math.abs(event.clientY - initialCursorPoint.y) <= 1) return;
				if (isContextMenu && !isMac && event.button === 2) return;
			}
			if (itemRef.current && store.context.allowMouseUpTriggerRef.current && (!isContextMenu || event.button === 2)) {
				if (!itemMetadata || itemMetadata.type === "regular-item") itemRef.current.click();
			}
		}
	}), [
		closeOnClick,
		highlighted,
		id,
		menuEvents,
		nodeId,
		store,
		typingRef,
		itemRef,
		contextMenuContext,
		isContextMenu,
		itemMetadata
	]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/item/useMenuItem.js
var REGULAR_ITEM = { type: "regular-item" };
function useMenuItem(params) {
	const { closeOnClick, disabled = false, highlighted, id, store, typingRef = store.context.typingRef, nativeButton, itemMetadata, nodeId } = params;
	const itemRef = React$1.useRef(null);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		focusableWhenDisabled: true,
		native: nativeButton,
		composite: true
	});
	const commonProps = useMenuItemCommonProps({
		closeOnClick,
		highlighted,
		id,
		nodeId,
		store,
		typingRef,
		itemRef,
		itemMetadata
	});
	const getItemProps = React$1.useCallback((externalProps) => {
		return mergeProps(commonProps, { onMouseEnter() {
			if (itemMetadata.type !== "submenu-trigger") return;
			itemMetadata.setActive();
		} }, externalProps, getButtonProps);
	}, [
		commonProps,
		getButtonProps,
		itemMetadata
	]);
	const mergedRef = useMergedRefs(itemRef, buttonRef);
	return React$1.useMemo(() => ({
		getItemProps,
		itemRef: mergedRef
	}), [getItemProps, mergedRef]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/group/MenuGroupContext.js
var MenuGroupContext = /* @__PURE__ */ React$1.createContext(void 0);
function useMenuGroupRootContext() {
	const context = React$1.useContext(MenuGroupContext);
	if (context === void 0) throw new Error(formatErrorMessage(31));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/group/MenuGroup.js
/**
* Groups related menu items with the corresponding label.
* Renders a `<div>` element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuGroup = /* @__PURE__ */ React$1.forwardRef(function MenuGroup(componentProps, forwardedRef) {
	const { render, className, ...elementProps } = componentProps;
	const [labelId, setLabelId] = React$1.useState(void 0);
	const context = React$1.useMemo(() => ({ setLabelId }), [setLabelId]);
	const element = useRenderElement("div", componentProps, {
		ref: forwardedRef,
		props: {
			role: "group",
			"aria-labelledby": labelId,
			...elementProps
		}
	});
	return /* @__PURE__ */ jsx(MenuGroupContext.Provider, {
		value: context,
		children: element
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/item/MenuItem.js
/**
* An individual interactive item in the menu.
* Renders a `<div>` element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuItem = /* @__PURE__ */ React$1.forwardRef(function MenuItem(componentProps, forwardedRef) {
	const { render, className, id: idProp, label, nativeButton = false, disabled = false, closeOnClick = true, ...elementProps } = componentProps;
	const listItem = useCompositeListItem({ label });
	const menuPositionerContext = useMenuPositionerContext(true);
	const id = useBaseUiId(idProp);
	const { store } = useMenuRootContext();
	const highlighted = store.useState("isActive", listItem.index);
	const itemProps = store.useState("itemProps");
	const { getItemProps, itemRef } = useMenuItem({
		closeOnClick,
		disabled,
		highlighted,
		id,
		store,
		nativeButton,
		nodeId: menuPositionerContext?.nodeId,
		itemMetadata: REGULAR_ITEM
	});
	return useRenderElement("div", componentProps, {
		state: {
			disabled,
			highlighted
		},
		props: [
			itemProps,
			elementProps,
			getItemProps
		],
		ref: [
			itemRef,
			forwardedRef,
			listItem.ref
		]
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/link-item/MenuLinkItem.js
/**
* A link in the menu that can be used to navigate to a different page or section.
* Renders an `<a>` element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuLinkItem = /* @__PURE__ */ React$1.forwardRef(function MenuLinkItem(componentProps, forwardedRef) {
	const { render, className, id: idProp, label, closeOnClick = false, ...elementProps } = componentProps;
	const linkRef = React$1.useRef(null);
	const listItem = useCompositeListItem({ label });
	const nodeId = useMenuPositionerContext(true)?.nodeId;
	const id = useBaseUiId(idProp);
	const { store } = useMenuRootContext();
	const highlighted = store.useState("isActive", listItem.index);
	const itemProps = store.useState("itemProps");
	const typingRef = store.context.typingRef;
	const { getButtonProps, buttonRef } = useButton({
		native: false,
		composite: true
	});
	const commonProps = useMenuItemCommonProps({
		closeOnClick,
		highlighted,
		id,
		nodeId,
		store,
		typingRef,
		itemRef: linkRef
	});
	function getItemProps(externalProps) {
		return mergeProps(commonProps, externalProps, getButtonProps);
	}
	return useRenderElement("a", componentProps, {
		state: React$1.useMemo(() => ({ highlighted }), [highlighted]),
		props: [
			itemProps,
			elementProps,
			getItemProps
		],
		ref: [
			linkRef,
			buttonRef,
			forwardedRef,
			listItem.ref
		]
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/popup/MenuPopup.js
var stateAttributesMapping = {
	...popupStateMapping,
	...transitionStatusMapping
};
/**
* A container for the menu items.
* Renders a `<div>` element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuPopup = /* @__PURE__ */ React$1.forwardRef(function MenuPopup(componentProps, forwardedRef) {
	const { render, className, finalFocus, ...elementProps } = componentProps;
	const { store } = useMenuRootContext();
	const { side, align } = useMenuPositionerContext();
	const insideToolbar = useToolbarRootContext(true) != null;
	const open = store.useState("open");
	const transitionStatus = store.useState("transitionStatus");
	const popupProps = store.useState("popupProps");
	const mounted = store.useState("mounted");
	const instantType = store.useState("instantType");
	const triggerElement = store.useState("activeTriggerElement");
	const parent = store.useState("parent");
	const lastOpenChangeReason = store.useState("lastOpenChangeReason");
	const rootId = store.useState("rootId");
	const floatingContext = store.useState("floatingRootContext");
	const floatingTreeRoot = store.useState("floatingTreeRoot");
	const closeDelay = store.useState("closeDelay");
	const activeTriggerElement = store.useState("activeTriggerElement");
	const isContextMenu = parent.type === "context-menu";
	useOpenChangeComplete({
		open,
		ref: store.context.popupRef,
		onComplete() {
			if (open) store.context.onOpenChangeComplete?.(true);
		}
	});
	React$1.useEffect(() => {
		function handleClose(event) {
			store.setOpen(false, createChangeEventDetails(event.reason, event.domEvent));
		}
		floatingTreeRoot.events.on("close", handleClose);
		return () => {
			floatingTreeRoot.events.off("close", handleClose);
		};
	}, [floatingTreeRoot.events, store]);
	const hoverEnabled = store.useState("hoverEnabled");
	const disabled = store.useState("disabled");
	useHoverFloatingInteraction(floatingContext, {
		enabled: hoverEnabled && !disabled && !isContextMenu && parent.type !== "menubar",
		closeDelay
	});
	const state = {
		transitionStatus,
		side,
		align,
		open,
		nested: parent.type === "menu",
		instant: instantType
	};
	const setPopupElement = React$1.useCallback((element) => {
		store.set("popupElement", element);
	}, [store]);
	const element = useRenderElement("div", componentProps, {
		state,
		ref: [
			forwardedRef,
			store.context.popupRef,
			setPopupElement
		],
		stateAttributesMapping,
		props: [
			popupProps,
			{ onKeyDown(event) {
				if (insideToolbar && COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
			} },
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps,
			{ "data-rootownerid": rootId }
		]
	});
	let returnFocus = parent.type === void 0 || isContextMenu;
	if (triggerElement || parent.type === "menubar" && lastOpenChangeReason !== "outside-press") returnFocus = true;
	return /* @__PURE__ */ jsx(FloatingFocusManager, {
		context: floatingContext,
		modal: isContextMenu,
		disabled: !mounted,
		returnFocus: finalFocus === void 0 ? returnFocus : finalFocus,
		initialFocus: parent.type !== "menu",
		restoreFocus: true,
		externalTree: parent.type !== "menubar" ? floatingTreeRoot : void 0,
		previousFocusableElement: activeTriggerElement,
		nextFocusableElement: parent.type === void 0 ? store.context.triggerFocusTargetRef : void 0,
		beforeContentFocusGuardRef: parent.type === void 0 ? store.context.beforeContentFocusGuardRef : void 0,
		children: element
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/portal/MenuPortalContext.js
var MenuPortalContext = /* @__PURE__ */ React$1.createContext(void 0);
function useMenuPortalContext() {
	const value = React$1.useContext(MenuPortalContext);
	if (value === void 0) throw new Error(formatErrorMessage(32));
	return value;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/portal/MenuPortal.js
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuPortal = /* @__PURE__ */ React$1.forwardRef(function MenuPortal(props, forwardedRef) {
	const { keepMounted = false, ...portalProps } = props;
	const { store } = useMenuRootContext();
	if (!(store.useState("mounted") || keepMounted)) return null;
	return /* @__PURE__ */ jsx(MenuPortalContext.Provider, {
		value: keepMounted,
		children: /* @__PURE__ */ jsx(FloatingPortal, {
			ref: forwardedRef,
			...portalProps
		})
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/positioner/MenuPositioner.js
/**
* Positions the menu popup against the trigger.
* Renders a `<div>` element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuPositioner = /* @__PURE__ */ React$1.forwardRef(function MenuPositioner(componentProps, forwardedRef) {
	const { anchor: anchorProp, positionMethod: positionMethodProp = "absolute", className, render, side, align: alignProp, sideOffset: sideOffsetProp = 0, alignOffset: alignOffsetProp = 0, collisionBoundary = "clipping-ancestors", collisionPadding = 5, arrowPadding = 5, sticky = false, disableAnchorTracking = false, collisionAvoidance: collisionAvoidanceProp = DROPDOWN_COLLISION_AVOIDANCE, ...elementProps } = componentProps;
	const { store } = useMenuRootContext();
	const keepMounted = useMenuPortalContext();
	const contextMenuContext = useContextMenuRootContext(true);
	const parent = store.useState("parent");
	const floatingRootContext = store.useState("floatingRootContext");
	const floatingTreeRoot = store.useState("floatingTreeRoot");
	const mounted = store.useState("mounted");
	const open = store.useState("open");
	const modal = store.useState("modal");
	const triggerElement = store.useState("activeTriggerElement");
	const transitionStatus = store.useState("transitionStatus");
	const positionerElement = store.useState("positionerElement");
	const instantType = store.useState("instantType");
	const hasViewport = store.useState("hasViewport");
	const lastOpenChangeReason = store.useState("lastOpenChangeReason");
	const floatingNodeId = store.useState("floatingNodeId");
	const floatingParentNodeId = store.useState("floatingParentNodeId");
	const domReference = floatingRootContext.useState("domReferenceElement");
	const previousTriggerRef = React$1.useRef(null);
	const runOnceAnimationsFinish = useAnimationsFinished(positionerElement, false, false);
	let anchor = anchorProp;
	let sideOffset = sideOffsetProp;
	let alignOffset = alignOffsetProp;
	let align = alignProp;
	let collisionAvoidance = collisionAvoidanceProp;
	if (parent.type === "context-menu") {
		anchor = anchorProp ?? parent.context?.anchor;
		align = align ?? "start";
		if (!side && align !== "center") {
			alignOffset = componentProps.alignOffset ?? 2;
			sideOffset = componentProps.sideOffset ?? -5;
		}
	}
	let computedSide = side;
	let computedAlign = align;
	if (parent.type === "menu") {
		computedSide = computedSide ?? "inline-end";
		computedAlign = computedAlign ?? "start";
		collisionAvoidance = componentProps.collisionAvoidance ?? POPUP_COLLISION_AVOIDANCE;
	} else if (parent.type === "menubar") {
		computedSide = computedSide ?? "bottom";
		computedAlign = computedAlign ?? "start";
	}
	const contextMenu = parent.type === "context-menu";
	const positioner = useAnchorPositioning({
		anchor,
		floatingRootContext,
		positionMethod: contextMenuContext ? "fixed" : positionMethodProp,
		mounted,
		side: computedSide,
		sideOffset,
		align: computedAlign,
		alignOffset,
		arrowPadding: contextMenu ? 0 : arrowPadding,
		collisionBoundary,
		collisionPadding,
		sticky,
		nodeId: floatingNodeId,
		keepMounted,
		disableAnchorTracking,
		collisionAvoidance,
		shiftCrossAxis: contextMenu && !("side" in collisionAvoidance && collisionAvoidance.side === "flip"),
		externalTree: floatingTreeRoot,
		adaptiveOrigin: hasViewport ? adaptiveOrigin : void 0
	});
	const positionerProps = React$1.useMemo(() => {
		const hiddenStyles = {};
		if (!open) hiddenStyles.pointerEvents = "none";
		return {
			role: "presentation",
			hidden: !mounted,
			style: {
				...positioner.positionerStyles,
				...hiddenStyles
			}
		};
	}, [
		open,
		mounted,
		positioner.positionerStyles
	]);
	React$1.useEffect(() => {
		function onMenuOpenChange(details) {
			if (details.open) {
				if (details.parentNodeId === floatingNodeId) store.set("hoverEnabled", false);
				if (details.nodeId !== floatingNodeId && details.parentNodeId === store.select("floatingParentNodeId")) store.setOpen(false, createChangeEventDetails(siblingOpen));
			}
		}
		floatingTreeRoot.events.on("menuopenchange", onMenuOpenChange);
		return () => {
			floatingTreeRoot.events.off("menuopenchange", onMenuOpenChange);
		};
	}, [
		store,
		floatingTreeRoot.events,
		floatingNodeId
	]);
	React$1.useEffect(() => {
		if (store.select("floatingParentNodeId") == null) return;
		function onParentClose(details) {
			if (details.open || details.nodeId !== store.select("floatingParentNodeId")) return;
			const reason = details.reason ?? "sibling-open";
			store.setOpen(false, createChangeEventDetails(reason));
		}
		floatingTreeRoot.events.on("menuopenchange", onParentClose);
		return () => {
			floatingTreeRoot.events.off("menuopenchange", onParentClose);
		};
	}, [floatingTreeRoot.events, store]);
	const closeTimeout = useTimeout();
	React$1.useEffect(() => {
		if (!open) closeTimeout.clear();
	}, [open, closeTimeout]);
	React$1.useEffect(() => {
		function onItemHover(event) {
			if (!open || event.nodeId !== store.select("floatingParentNodeId")) return;
			if (event.target && triggerElement && triggerElement !== event.target) {
				const delay = store.select("closeDelay");
				if (delay > 0) {
					if (!closeTimeout.isStarted()) closeTimeout.start(delay, () => {
						store.setOpen(false, createChangeEventDetails(siblingOpen));
					});
				} else store.setOpen(false, createChangeEventDetails(siblingOpen));
			} else closeTimeout.clear();
		}
		floatingTreeRoot.events.on("itemhover", onItemHover);
		return () => {
			floatingTreeRoot.events.off("itemhover", onItemHover);
		};
	}, [
		floatingTreeRoot.events,
		open,
		triggerElement,
		store,
		closeTimeout
	]);
	React$1.useEffect(() => {
		const eventDetails = {
			open,
			nodeId: floatingNodeId,
			parentNodeId: floatingParentNodeId,
			reason: store.select("lastOpenChangeReason")
		};
		floatingTreeRoot.events.emit("menuopenchange", eventDetails);
	}, [
		floatingTreeRoot.events,
		open,
		store,
		floatingNodeId,
		floatingParentNodeId
	]);
	useIsoLayoutEffect(() => {
		const currentTrigger = domReference;
		const previousTrigger = previousTriggerRef.current;
		if (currentTrigger) previousTriggerRef.current = currentTrigger;
		if (previousTrigger && currentTrigger && currentTrigger !== previousTrigger) {
			store.set("instantType", void 0);
			const abortController = new AbortController();
			runOnceAnimationsFinish(() => {
				store.set("instantType", "trigger-change");
			}, abortController.signal);
			return () => {
				abortController.abort();
			};
		}
	}, [
		domReference,
		runOnceAnimationsFinish,
		store
	]);
	const state = {
		open,
		side: positioner.side,
		align: positioner.align,
		anchorHidden: positioner.anchorHidden,
		nested: parent.type === "menu",
		instant: instantType
	};
	const contextValue = React$1.useMemo(() => ({
		side: positioner.side,
		align: positioner.align,
		arrowRef: positioner.arrowRef,
		arrowUncentered: positioner.arrowUncentered,
		arrowStyles: positioner.arrowStyles,
		nodeId: positioner.context.nodeId
	}), [
		positioner.side,
		positioner.align,
		positioner.arrowRef,
		positioner.arrowUncentered,
		positioner.arrowStyles,
		positioner.context.nodeId
	]);
	const element = useRenderElement("div", componentProps, {
		state,
		stateAttributesMapping: popupStateMapping,
		ref: [forwardedRef, store.useStateSetter("positionerElement")],
		props: [
			positionerProps,
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps
		]
	});
	const shouldRenderBackdrop = mounted && parent.type !== "menu" && (parent.type !== "menubar" && modal && lastOpenChangeReason !== "trigger-hover" || parent.type === "menubar" && parent.context.modal);
	let backdropCutout = null;
	if (parent.type === "menubar") backdropCutout = parent.context.contentElement;
	else if (parent.type === void 0) backdropCutout = triggerElement;
	return /* @__PURE__ */ jsxs(MenuPositionerContext.Provider, {
		value: contextValue,
		children: [shouldRenderBackdrop && /* @__PURE__ */ jsx(InternalBackdrop, {
			ref: parent.type === "context-menu" || parent.type === "nested-context-menu" ? parent.context.internalBackdropRef : null,
			inert: inertValue(!open),
			cutout: backdropCutout
		}), /* @__PURE__ */ jsx(FloatingNode, {
			id: floatingNodeId,
			children: /* @__PURE__ */ jsx(CompositeList, {
				elementsRef: store.context.itemDomElements,
				labelsRef: store.context.itemLabels,
				children: element
			})
		})]
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/radio-group/MenuRadioGroupContext.js
var MenuRadioGroupContext = /* @__PURE__ */ React$1.createContext(void 0);
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/radio-group/MenuRadioGroup.js
/**
* Groups related radio items.
* Renders a `<div>` element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuRadioGroup = /* @__PURE__ */ React$1.memo(/* @__PURE__ */ React$1.forwardRef(function MenuRadioGroup(componentProps, forwardedRef) {
	const { render, className, value: valueProp, defaultValue, onValueChange: onValueChangeProp, disabled = false, ...elementProps } = componentProps;
	const [value, setValueUnwrapped] = useControlled({
		controlled: valueProp,
		default: defaultValue,
		name: "MenuRadioGroup"
	});
	const onValueChange = useStableCallback(onValueChangeProp);
	const setValue = useStableCallback((newValue, eventDetails) => {
		onValueChange?.(newValue, eventDetails);
		if (eventDetails.isCanceled) return;
		setValueUnwrapped(newValue);
	});
	const element = useRenderElement("div", componentProps, {
		state: { disabled },
		ref: forwardedRef,
		props: {
			role: "group",
			"aria-disabled": disabled || void 0,
			...elementProps
		}
	});
	const context = React$1.useMemo(() => ({
		value,
		setValue,
		disabled
	}), [
		value,
		setValue,
		disabled
	]);
	return /* @__PURE__ */ jsx(MenuRadioGroupContext.Provider, {
		value: context,
		children: element
	});
}));
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menubar/MenubarContext.js
var MenubarContext = /* @__PURE__ */ React$1.createContext(null);
function useMenubarContext(optional) {
	const context = React$1.useContext(MenubarContext);
	if (context === null && !optional) throw new Error(formatErrorMessage(5));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/store/MenuStore.js
var selectors = {
	...popupStoreSelectors,
	disabled: createSelector((state) => state.parent.type === "menubar" ? state.parent.context.disabled || state.disabled : state.disabled),
	modal: createSelector((state) => (state.parent.type === void 0 || state.parent.type === "context-menu") && (state.modal ?? true)),
	allowMouseEnter: createSelector((state) => state.allowMouseEnter),
	stickIfOpen: createSelector((state) => state.stickIfOpen),
	parent: createSelector((state) => state.parent),
	rootId: createSelector((state) => {
		if (state.parent.type === "menu") return state.parent.store.select("rootId");
		return state.parent.type !== void 0 ? state.parent.context.rootId : state.rootId;
	}),
	activeIndex: createSelector((state) => state.activeIndex),
	isActive: createSelector((state, itemIndex) => state.activeIndex === itemIndex),
	hoverEnabled: createSelector((state) => state.hoverEnabled),
	instantType: createSelector((state) => state.instantType),
	lastOpenChangeReason: createSelector((state) => state.openChangeReason),
	floatingTreeRoot: createSelector((state) => {
		if (state.parent.type === "menu") return state.parent.store.select("floatingTreeRoot");
		return state.floatingTreeRoot;
	}),
	floatingNodeId: createSelector((state) => state.floatingNodeId),
	floatingParentNodeId: createSelector((state) => state.floatingParentNodeId),
	itemProps: createSelector((state) => state.itemProps),
	closeDelay: createSelector((state) => state.closeDelay),
	hasViewport: createSelector((state) => state.hasViewport),
	keyboardEventRelay: createSelector((state) => {
		if (state.keyboardEventRelay) return state.keyboardEventRelay;
		if (state.parent.type === "menu") return state.parent.store.select("keyboardEventRelay");
	})
};
var MenuStore = class MenuStore extends ReactStore {
	constructor(initialState) {
		super({
			...createInitialState(),
			...initialState
		}, {
			positionerRef: /* @__PURE__ */ React$1.createRef(),
			popupRef: /* @__PURE__ */ React$1.createRef(),
			typingRef: { current: false },
			itemDomElements: { current: [] },
			itemLabels: { current: [] },
			allowMouseUpTriggerRef: { current: false },
			triggerFocusTargetRef: /* @__PURE__ */ React$1.createRef(),
			beforeContentFocusGuardRef: /* @__PURE__ */ React$1.createRef(),
			onOpenChangeComplete: void 0,
			triggerElements: new PopupTriggerMap()
		}, selectors);
		this.unsubscribeParentListener = this.observe("parent", (parent) => {
			this.unsubscribeParentListener?.();
			if (parent.type === "menu") {
				let rootId = parent.store.select("rootId");
				let floatingTreeRoot = parent.store.select("floatingTreeRoot");
				let keyboardEventRelay = parent.store.select("keyboardEventRelay");
				this.unsubscribeParentListener = parent.store.subscribe(() => {
					const nextRootId = parent.store.select("rootId");
					const nextFloatingTreeRoot = parent.store.select("floatingTreeRoot");
					const nextKeyboardEventRelay = parent.store.select("keyboardEventRelay");
					if (rootId === nextRootId && floatingTreeRoot === nextFloatingTreeRoot && keyboardEventRelay === nextKeyboardEventRelay) return;
					rootId = nextRootId;
					floatingTreeRoot = nextFloatingTreeRoot;
					keyboardEventRelay = nextKeyboardEventRelay;
					this.notifyAll();
				});
				this.context.allowMouseUpTriggerRef = parent.store.context.allowMouseUpTriggerRef;
				return;
			}
			if (parent.type !== void 0) this.context.allowMouseUpTriggerRef = parent.context.allowMouseUpTriggerRef;
			this.unsubscribeParentListener = null;
		});
	}
	setOpen(open, eventDetails) {
		this.state.floatingRootContext.context.events.emit("setOpen", {
			open,
			eventDetails
		});
	}
	static useStore(externalStore, initialState) {
		const internalStore = useRefWithInit(() => {
			return new MenuStore(initialState);
		}).current;
		return externalStore ?? internalStore;
	}
	unsubscribeParentListener = null;
};
function createInitialState() {
	return {
		...createInitialPopupStoreState(),
		disabled: false,
		modal: true,
		allowMouseEnter: false,
		stickIfOpen: true,
		parent: { type: void 0 },
		rootId: void 0,
		activeIndex: null,
		hoverEnabled: true,
		instantType: void 0,
		openChangeReason: null,
		floatingTreeRoot: new FloatingTreeStore(),
		floatingNodeId: void 0,
		floatingParentNodeId: null,
		itemProps: EMPTY_OBJECT,
		keyboardEventRelay: void 0,
		closeDelay: 0,
		hasViewport: false
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/submenu-root/MenuSubmenuRootContext.js
var MenuSubmenuRootContext = /* @__PURE__ */ React$1.createContext(void 0);
function useMenuSubmenuRootContext() {
	return React$1.useContext(MenuSubmenuRootContext);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/root/MenuRoot.js
/**
* Groups all parts of the menu.
* Doesn’t render its own HTML element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuRoot = fastComponent(function MenuRoot(props) {
	const { children, open: openProp, onOpenChange, onOpenChangeComplete, defaultOpen = false, disabled: disabledProp = false, modal: modalProp, loopFocus = true, orientation = "vertical", actionsRef, closeParentOnEsc = false, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null, highlightItemOnHover = true } = props;
	const contextMenuContext = useContextMenuRootContext(true);
	const parentMenuRootContext = useMenuRootContext(true);
	const menubarContext = useMenubarContext(true);
	const isSubmenu = useMenuSubmenuRootContext();
	const parentFromContext = React$1.useMemo(() => {
		if (isSubmenu && parentMenuRootContext) return {
			type: "menu",
			store: parentMenuRootContext.store
		};
		if (menubarContext) return {
			type: "menubar",
			context: menubarContext
		};
		if (contextMenuContext && !parentMenuRootContext) return {
			type: "context-menu",
			context: contextMenuContext
		};
		return { type: void 0 };
	}, [
		contextMenuContext,
		parentMenuRootContext,
		menubarContext,
		isSubmenu
	]);
	const store = MenuStore.useStore(handle?.store, {
		open: defaultOpen,
		openProp,
		activeTriggerId: defaultTriggerIdProp,
		triggerIdProp,
		parent: parentFromContext
	});
	useOnFirstRender(() => {
		if (openProp === void 0 && store.state.open === false && defaultOpen === true) store.update({
			open: true,
			activeTriggerId: defaultTriggerIdProp
		});
	});
	store.useControlledProp("openProp", openProp);
	store.useControlledProp("triggerIdProp", triggerIdProp);
	store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
	const floatingTreeRoot = store.useState("floatingTreeRoot");
	const floatingNodeIdFromContext = useFloatingNodeId(floatingTreeRoot);
	const floatingParentNodeIdFromContext = useFloatingParentNodeId();
	useIsoLayoutEffect(() => {
		if (contextMenuContext && !parentMenuRootContext) store.update({
			parent: {
				type: "context-menu",
				context: contextMenuContext
			},
			floatingNodeId: floatingNodeIdFromContext,
			floatingParentNodeId: floatingParentNodeIdFromContext
		});
		else if (parentMenuRootContext) store.update({
			floatingNodeId: floatingNodeIdFromContext,
			floatingParentNodeId: floatingParentNodeIdFromContext
		});
	}, [
		contextMenuContext,
		parentMenuRootContext,
		floatingNodeIdFromContext,
		floatingParentNodeIdFromContext,
		store
	]);
	const open = store.useState("open");
	const activeTriggerElement = store.useState("activeTriggerElement");
	const positionerElement = store.useState("positionerElement");
	const hoverEnabled = store.useState("hoverEnabled");
	const modal = store.useState("modal");
	const disabled = store.useState("disabled");
	const lastOpenChangeReason = store.useState("lastOpenChangeReason");
	const parent = store.useState("parent");
	const activeIndex = store.useState("activeIndex");
	const payload = store.useState("payload");
	const floatingParentNodeId = store.useState("floatingParentNodeId");
	const openEventRef = React$1.useRef(null);
	const nested = floatingParentNodeId != null;
	let floatingEvents;
	store.useSyncedValues({
		disabled: disabledProp,
		modal: parent.type === void 0 ? modalProp : void 0,
		rootId: useId$1()
	});
	const { openMethod, triggerProps: interactionTypeProps } = useOpenInteractionType(open);
	useImplicitActiveTrigger(store);
	const { forceUnmount } = useOpenStateTransitions(open, store, () => {
		store.update({
			allowMouseEnter: false,
			stickIfOpen: true
		});
	});
	const allowOutsidePressDismissalRef = React$1.useRef(parent.type !== "context-menu");
	const allowOutsidePressDismissalTimeout = useTimeout();
	React$1.useEffect(() => {
		if (!open) openEventRef.current = null;
		if (parent.type !== "context-menu") return;
		if (!open) {
			allowOutsidePressDismissalTimeout.clear();
			allowOutsidePressDismissalRef.current = false;
			return;
		}
		allowOutsidePressDismissalTimeout.start(500, () => {
			allowOutsidePressDismissalRef.current = true;
		});
	}, [
		allowOutsidePressDismissalTimeout,
		open,
		parent.type
	]);
	useScrollLock(open && modal && lastOpenChangeReason !== "trigger-hover" && openMethod !== "touch", positionerElement);
	useIsoLayoutEffect(() => {
		if (!open && !hoverEnabled) store.set("hoverEnabled", true);
	}, [
		open,
		hoverEnabled,
		store
	]);
	const allowTouchToCloseRef = React$1.useRef(true);
	const allowTouchToCloseTimeout = useTimeout();
	const setOpen = useStableCallback((nextOpen, eventDetails) => {
		const reason = eventDetails.reason;
		if (open === nextOpen && eventDetails.trigger === activeTriggerElement && lastOpenChangeReason === reason) return;
		eventDetails.preventUnmountOnClose = () => {
			store.set("preventUnmountingOnClose", true);
		};
		if (!nextOpen && eventDetails.trigger == null) eventDetails.trigger = activeTriggerElement ?? void 0;
		onOpenChange?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		const details = {
			open: nextOpen,
			nativeEvent: eventDetails.event,
			reason: eventDetails.reason,
			nested
		};
		floatingEvents?.emit("openchange", details);
		const nativeEvent = eventDetails.event;
		if (nextOpen === false && nativeEvent?.type === "click" && nativeEvent.pointerType === "touch" && !allowTouchToCloseRef.current) return;
		if (!nextOpen && activeIndex !== null) {
			const activeOption = store.context.itemDomElements.current[activeIndex];
			queueMicrotask(() => {
				activeOption?.setAttribute("tabindex", "-1");
			});
		}
		if (nextOpen && reason === "trigger-focus") {
			allowTouchToCloseRef.current = false;
			allowTouchToCloseTimeout.start(300, () => {
				allowTouchToCloseRef.current = true;
			});
		} else {
			allowTouchToCloseRef.current = true;
			allowTouchToCloseTimeout.clear();
		}
		const isKeyboardClick = (reason === "trigger-press" || reason === "item-press") && nativeEvent.detail === 0 && nativeEvent?.isTrusted;
		const isDismissClose = !nextOpen && (reason === "escape-key" || reason == null);
		const updatedState = {
			open: nextOpen,
			openChangeReason: reason
		};
		openEventRef.current = eventDetails.event ?? null;
		const newTriggerId = eventDetails.trigger?.id ?? null;
		if (newTriggerId || nextOpen) {
			updatedState.activeTriggerId = newTriggerId;
			updatedState.activeTriggerElement = eventDetails.trigger ?? null;
		}
		store.update(updatedState);
		if (parent.type === "menubar" && (reason === "trigger-focus" || reason === "focus-out" || reason === "trigger-hover" || reason === "list-navigation" || reason === "sibling-open")) store.set("instantType", "group");
		else if (isKeyboardClick || isDismissClose) store.set("instantType", isKeyboardClick ? "click" : "dismiss");
		else store.set("instantType", void 0);
	});
	const createMenuEventDetails = React$1.useCallback((reason) => {
		const details = createChangeEventDetails(reason);
		details.preventUnmountOnClose = () => {
			store.set("preventUnmountingOnClose", true);
		};
		return details;
	}, [store]);
	const handleImperativeClose = React$1.useCallback(() => {
		store.setOpen(false, createMenuEventDetails(imperativeAction));
	}, [store, createMenuEventDetails]);
	React$1.useImperativeHandle(actionsRef, () => ({
		unmount: forceUnmount,
		close: handleImperativeClose
	}), [forceUnmount, handleImperativeClose]);
	let ctx;
	if (parent.type === "context-menu") ctx = parent.context;
	React$1.useImperativeHandle(ctx?.positionerRef, () => positionerElement, [positionerElement]);
	React$1.useImperativeHandle(ctx?.actionsRef, () => ({ setOpen }), [setOpen]);
	const floatingRootContext = useSyncedFloatingRootContext({
		popupStore: store,
		onOpenChange: setOpen
	});
	floatingEvents = floatingRootContext.context.events;
	React$1.useEffect(() => {
		const handleSetOpenEvent = ({ open: nextOpen, eventDetails }) => setOpen(nextOpen, eventDetails);
		floatingEvents.on("setOpen", handleSetOpenEvent);
		return () => {
			floatingEvents?.off("setOpen", handleSetOpenEvent);
		};
	}, [floatingEvents, setOpen]);
	const dismiss = useDismiss(floatingRootContext, {
		enabled: !disabled,
		bubbles: { escapeKey: closeParentOnEsc && parent.type === "menu" },
		outsidePress() {
			if (parent.type !== "context-menu" || openEventRef.current?.type === "contextmenu") return true;
			return allowOutsidePressDismissalRef.current;
		},
		externalTree: nested ? floatingTreeRoot : void 0
	});
	const role = useRole(floatingRootContext, { role: "menu" });
	const direction = useDirection();
	const setActiveIndex = React$1.useCallback((index) => {
		if (store.select("activeIndex") === index) return;
		store.set("activeIndex", index);
	}, [store]);
	const listNavigation$1 = useListNavigation(floatingRootContext, {
		enabled: !disabled,
		listRef: store.context.itemDomElements,
		activeIndex,
		nested: parent.type !== void 0,
		loopFocus,
		orientation,
		parentOrientation: parent.type === "menubar" ? parent.context.orientation : void 0,
		rtl: direction === "rtl",
		disabledIndices: EMPTY_ARRAY,
		onNavigate: setActiveIndex,
		openOnArrowKeyDown: parent.type !== "context-menu",
		externalTree: nested ? floatingTreeRoot : void 0,
		focusItemOnHover: highlightItemOnHover
	});
	const onTypingChange = React$1.useCallback((nextTyping) => {
		store.context.typingRef.current = nextTyping;
	}, [store]);
	const { getReferenceProps, getFloatingProps, getItemProps, getTriggerProps } = useInteractions([
		dismiss,
		role,
		listNavigation$1,
		useTypeahead(floatingRootContext, {
			listRef: store.context.itemLabels,
			elementsRef: store.context.itemDomElements,
			activeIndex,
			resetMs: 500,
			onMatch: (index) => {
				if (open && index !== activeIndex) store.set("activeIndex", index);
			},
			onTypingChange
		})
	]);
	const activeTriggerProps = React$1.useMemo(() => {
		const mergedProps = mergeProps(getReferenceProps(), { onMouseMove() {
			store.set("allowMouseEnter", true);
		} }, interactionTypeProps);
		delete mergedProps.role;
		return mergedProps;
	}, [
		getReferenceProps,
		store,
		interactionTypeProps
	]);
	const inactiveTriggerProps = React$1.useMemo(() => {
		const triggerProps = getTriggerProps();
		if (!triggerProps) return triggerProps;
		const mergedProps = mergeProps(triggerProps, interactionTypeProps);
		delete mergedProps.role;
		delete mergedProps["aria-controls"];
		return mergedProps;
	}, [getTriggerProps, interactionTypeProps]);
	const popupProps = React$1.useMemo(() => getFloatingProps({
		onMouseMove() {
			store.set("allowMouseEnter", true);
			if (parent.type === "menu") store.set("hoverEnabled", false);
		},
		onClick() {
			if (store.select("hoverEnabled")) store.set("hoverEnabled", false);
		},
		onKeyDown(event) {
			const relay = store.select("keyboardEventRelay");
			if (relay && !event.isPropagationStopped()) relay(event);
		}
	}), [
		getFloatingProps,
		parent.type,
		store
	]);
	const itemProps = React$1.useMemo(() => getItemProps(), [getItemProps]);
	store.useSyncedValues({
		floatingRootContext,
		activeTriggerProps,
		inactiveTriggerProps,
		popupProps,
		itemProps
	});
	const context = React$1.useMemo(() => ({
		store,
		parent: parentFromContext
	}), [store, parentFromContext]);
	const content = /* @__PURE__ */ jsx(MenuRootContext.Provider, {
		value: context,
		children: typeof children === "function" ? children({ payload }) : children
	});
	if (parent.type === void 0 || parent.type === "context-menu") return /* @__PURE__ */ jsx(FloatingTree, {
		externalTree: floatingTreeRoot,
		children: content
	});
	return content;
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/submenu-root/MenuSubmenuRoot.js
/**
* Groups all parts of a submenu.
* Doesn’t render its own HTML element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
function MenuSubmenuRoot(props) {
	const parentMenu = useMenuRootContext().store;
	const contextValue = React$1.useMemo(() => ({ parentMenu }), [parentMenu]);
	return /* @__PURE__ */ jsx(MenuSubmenuRootContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ jsx(MenuRoot, { ...props })
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/composite/item/useCompositeItem.js
function useCompositeItem(params = {}) {
	const { highlightItemOnHover, highlightedIndex, onHighlightedIndexChange } = useCompositeRootContext();
	const { ref, index } = useCompositeListItem(params);
	const isHighlighted = highlightedIndex === index;
	const itemRef = React$1.useRef(null);
	const mergedRef = useMergedRefs(ref, itemRef);
	return {
		compositeProps: React$1.useMemo(() => ({
			tabIndex: isHighlighted ? 0 : -1,
			onFocus() {
				onHighlightedIndexChange(index);
			},
			onMouseMove() {
				const item = itemRef.current;
				if (!highlightItemOnHover || !item) return;
				const disabled = item.hasAttribute("disabled") || item.ariaDisabled === "true";
				if (!isHighlighted && !disabled) item.focus();
			}
		}), [
			isHighlighted,
			onHighlightedIndexChange,
			index,
			highlightItemOnHover
		]),
		compositeRef: mergedRef,
		index
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/composite/item/CompositeItem.js
/**
* @internal
*/
function CompositeItem(componentProps) {
	const { render, className, state = EMPTY_OBJECT, props = EMPTY_ARRAY, refs = EMPTY_ARRAY, metadata, stateAttributesMapping, tag = "div", ...elementProps } = componentProps;
	const { compositeProps, compositeRef } = useCompositeItem({ metadata });
	return useRenderElement(tag, componentProps, {
		state,
		ref: [...refs, compositeRef],
		props: [
			compositeProps,
			...props,
			elementProps
		],
		stateAttributesMapping
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/utils/findRootOwnerId.js
function findRootOwnerId(node) {
	if (isHTMLElement(node) && node.hasAttribute("data-rootownerid")) return node.getAttribute("data-rootownerid") ?? void 0;
	if (isLastTraversableNode(node)) return;
	return findRootOwnerId(getParentNode(node));
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useMixedToggleClickHandler.js
/**
* Returns `click` and `mousedown` handlers that fix the behavior of triggers of popups that are toggled by different events.
* For example, a button that opens a popup on mousedown and closes it on click.
* This hook prevents the popup from closing immediately after the mouse button is released.
*/
function useMixedToggleClickHandler(params) {
	const { enabled = true, mouseDownAction, open } = params;
	const ignoreClickRef = React$1.useRef(false);
	return React$1.useMemo(() => {
		if (!enabled) return EMPTY_OBJECT;
		return {
			onMouseDown: (event) => {
				if (mouseDownAction === "open" && !open || mouseDownAction === "close" && open) {
					ignoreClickRef.current = true;
					ownerDocument(event.currentTarget).addEventListener("click", () => {
						ignoreClickRef.current = false;
					}, { once: true });
				}
			},
			onClick: (event) => {
				if (ignoreClickRef.current) {
					ignoreClickRef.current = false;
					event.preventBaseUIHandler();
				}
			}
		};
	}, [
		enabled,
		mouseDownAction,
		open
	]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/trigger/MenuTrigger.js
var BOUNDARY_OFFSET = 2;
/**
* A button that opens the menu.
* Renders a `<button>` element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuTrigger = fastComponentRef(function MenuTrigger(componentProps, forwardedRef) {
	const { render, className, disabled: disabledProp = false, nativeButton = true, id: idProp, openOnHover: openOnHoverProp, delay = 100, closeDelay = 0, handle, payload, ...elementProps } = componentProps;
	const rootContext = useMenuRootContext(true);
	const store = handle?.store ?? rootContext?.store;
	if (!store) throw new Error(formatErrorMessage(85));
	const thisTriggerId = useBaseUiId(idProp);
	const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
	const floatingRootContext = store.useState("floatingRootContext");
	const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
	const triggerElementRef = React$1.useRef(null);
	const parent = useMenuParent();
	const compositeRootContext = useCompositeRootContext(true);
	const floatingTreeRootFromContext = useFloatingTree();
	const floatingTreeRoot = React$1.useMemo(() => {
		return floatingTreeRootFromContext ?? new FloatingTreeStore();
	}, [floatingTreeRootFromContext]);
	const { registerTrigger, isMountedByThisTrigger } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
		payload,
		closeDelay,
		parent,
		floatingTreeRoot,
		floatingNodeId: useFloatingNodeId(floatingTreeRoot),
		floatingParentNodeId: useFloatingParentNodeId(),
		keyboardEventRelay: compositeRootContext?.relayKeyboardEvent
	});
	const isInMenubar = parent.type === "menubar";
	const rootDisabled = store.useState("disabled");
	const disabled = disabledProp || rootDisabled || isInMenubar && parent.context.disabled;
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	React$1.useEffect(() => {
		if (!isOpenedByThisTrigger && parent.type === void 0) store.context.allowMouseUpTriggerRef.current = false;
	}, [
		store,
		isOpenedByThisTrigger,
		parent.type
	]);
	const triggerRef = React$1.useRef(null);
	const allowMouseUpTriggerTimeout = useTimeout();
	const handleDocumentMouseUp = useStableCallback((mouseEvent) => {
		if (!triggerRef.current) return;
		allowMouseUpTriggerTimeout.clear();
		store.context.allowMouseUpTriggerRef.current = false;
		const mouseUpTarget = mouseEvent.target;
		if (contains(triggerRef.current, mouseUpTarget) || contains(store.select("positionerElement"), mouseUpTarget) || mouseUpTarget === triggerRef.current) return;
		if (mouseUpTarget != null && findRootOwnerId(mouseUpTarget) === store.select("rootId")) return;
		const bounds = getPseudoElementBounds(triggerRef.current);
		if (mouseEvent.clientX >= bounds.left - BOUNDARY_OFFSET && mouseEvent.clientX <= bounds.right + BOUNDARY_OFFSET && mouseEvent.clientY >= bounds.top - BOUNDARY_OFFSET && mouseEvent.clientY <= bounds.bottom + BOUNDARY_OFFSET) return;
		floatingTreeRoot.events.emit("close", {
			domEvent: mouseEvent,
			reason: cancelOpen
		});
	});
	React$1.useEffect(() => {
		if (isOpenedByThisTrigger && store.select("lastOpenChangeReason") === "trigger-hover") ownerDocument(triggerRef.current).addEventListener("mouseup", handleDocumentMouseUp, { once: true });
	}, [
		isOpenedByThisTrigger,
		handleDocumentMouseUp,
		store
	]);
	const parentMenubarHasSubmenuOpen = isInMenubar && parent.context.hasSubmenuOpen;
	const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
		enabled: (openOnHoverProp ?? parentMenubarHasSubmenuOpen) && !disabled && parent.type !== "context-menu" && (!isInMenubar || parentMenubarHasSubmenuOpen && !isMountedByThisTrigger),
		handleClose: safePolygon({ blockPointerEvents: !isInMenubar }),
		mouseOnly: true,
		move: false,
		restMs: parent.type === void 0 ? delay : void 0,
		delay: { close: closeDelay },
		triggerElementRef,
		externalTree: floatingTreeRoot,
		isActiveTrigger: isTriggerActive
	});
	const stickIfOpen = useStickIfOpen(isOpenedByThisTrigger, store.select("lastOpenChangeReason"));
	const click = useClick(floatingRootContext, {
		enabled: !disabled && parent.type !== "context-menu",
		event: isOpenedByThisTrigger && isInMenubar ? "click" : "mousedown",
		toggle: true,
		ignoreMouse: false,
		stickIfOpen: parent.type === void 0 ? stickIfOpen : false
	});
	const focus = useFocus(floatingRootContext, { enabled: !disabled && parentMenubarHasSubmenuOpen });
	const mixedToggleHandlers = useMixedToggleClickHandler({
		open: isOpenedByThisTrigger,
		enabled: isInMenubar,
		mouseDownAction: "open"
	});
	const localInteractionProps = useInteractions([click, focus]);
	const state = {
		disabled,
		open: isOpenedByThisTrigger
	};
	const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
	const ref = [
		triggerRef,
		forwardedRef,
		buttonRef,
		registerTrigger,
		triggerElementRef
	];
	const props = [
		localInteractionProps.getReferenceProps(),
		hoverProps ?? EMPTY_OBJECT,
		rootTriggerProps,
		{
			"aria-haspopup": "menu",
			id: thisTriggerId,
			onMouseDown: (event) => {
				if (store.select("open")) return;
				allowMouseUpTriggerTimeout.start(200, () => {
					store.context.allowMouseUpTriggerRef.current = true;
				});
				ownerDocument(event.currentTarget).addEventListener("mouseup", handleDocumentMouseUp, { once: true });
			}
		},
		isInMenubar ? { role: "menuitem" } : {},
		mixedToggleHandlers,
		elementProps,
		getButtonProps
	];
	const preFocusGuardRef = React$1.useRef(null);
	const handlePreFocusGuardFocus = useStableCallback((event) => {
		ReactDOM$1.flushSync(() => {
			store.setOpen(false, createChangeEventDetails(focusOut, event.nativeEvent, event.currentTarget));
		});
		getTabbableBeforeElement(preFocusGuardRef.current)?.focus();
	});
	const handleFocusTargetFocus = useStableCallback((event) => {
		const currentPositionerElement = store.select("positionerElement");
		if (currentPositionerElement && isOutsideEvent(event, currentPositionerElement)) store.context.beforeContentFocusGuardRef.current?.focus();
		else {
			ReactDOM$1.flushSync(() => {
				store.setOpen(false, createChangeEventDetails(focusOut, event.nativeEvent, event.currentTarget));
			});
			let nextTabbable = getTabbableAfterElement(store.context.triggerFocusTargetRef.current || triggerElementRef.current);
			while (nextTabbable !== null && contains(currentPositionerElement, nextTabbable)) {
				const prevTabbable = nextTabbable;
				nextTabbable = getNextTabbable(nextTabbable);
				if (nextTabbable === prevTabbable) break;
			}
			nextTabbable?.focus();
		}
	});
	const element = useRenderElement("button", componentProps, {
		enabled: !isInMenubar,
		stateAttributesMapping: pressableTriggerOpenStateMapping,
		state,
		ref,
		props
	});
	if (isInMenubar) return /* @__PURE__ */ jsx(CompositeItem, {
		tag: "button",
		render,
		className,
		state,
		refs: ref,
		props,
		stateAttributesMapping: pressableTriggerOpenStateMapping
	});
	if (isOpenedByThisTrigger) return /* @__PURE__ */ jsxs(React$1.Fragment, { children: [
		/* @__PURE__ */ jsx(FocusGuard, {
			ref: preFocusGuardRef,
			onFocus: handlePreFocusGuardFocus
		}, `${thisTriggerId}-pre-focus-guard`),
		/* @__PURE__ */ jsx(React$1.Fragment, { children: element }, thisTriggerId),
		/* @__PURE__ */ jsx(FocusGuard, {
			ref: store.context.triggerFocusTargetRef,
			onFocus: handleFocusTargetFocus
		}, `${thisTriggerId}-post-focus-guard`)
	] });
	return /* @__PURE__ */ jsx(React$1.Fragment, { children: element }, thisTriggerId);
});
/**
* Determines whether to ignore clicks after a hover-open.
*/
function useStickIfOpen(open, openReason) {
	const stickIfOpenTimeout = useTimeout();
	const [stickIfOpen, setStickIfOpen] = React$1.useState(false);
	useIsoLayoutEffect(() => {
		if (open && openReason === "trigger-hover") {
			setStickIfOpen(true);
			stickIfOpenTimeout.start(500, () => {
				setStickIfOpen(false);
			});
		} else if (!open) {
			stickIfOpenTimeout.clear();
			setStickIfOpen(false);
		}
	}, [
		open,
		openReason,
		stickIfOpenTimeout
	]);
	return stickIfOpen;
}
function useMenuParent() {
	const contextMenuContext = useContextMenuRootContext(true);
	const parentContext = useMenuRootContext(true);
	const menubarContext = useMenubarContext(true);
	return React$1.useMemo(() => {
		if (menubarContext) return {
			type: "menubar",
			context: menubarContext
		};
		if (contextMenuContext && !parentContext) return {
			type: "context-menu",
			context: contextMenuContext
		};
		return { type: void 0 };
	}, [
		contextMenuContext,
		parentContext,
		menubarContext
	]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/menu/submenu-trigger/MenuSubmenuTrigger.js
/**
* A menu item that opens a submenu.
* Renders a `<div>` element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuSubmenuTrigger = /* @__PURE__ */ React$1.forwardRef(function SubmenuTriggerComponent(componentProps, forwardedRef) {
	const { render, className, label, id: idProp, nativeButton = false, openOnHover = true, delay = 100, closeDelay = 0, disabled: disabledProp = false, ...elementProps } = componentProps;
	const listItem = useCompositeListItem();
	const menuPositionerContext = useMenuPositionerContext();
	const { store } = useMenuRootContext();
	const thisTriggerId = useBaseUiId(idProp);
	const open = store.useState("open");
	const floatingRootContext = store.useState("floatingRootContext");
	const floatingTreeRoot = store.useState("floatingTreeRoot");
	const baseRegisterTrigger = useTriggerRegistration(thisTriggerId, store);
	const registerTrigger = React$1.useCallback((element) => {
		const cleanup = baseRegisterTrigger(element);
		if (element !== null && store.select("open") && store.select("activeTriggerId") == null) store.update({
			activeTriggerId: thisTriggerId,
			activeTriggerElement: element,
			closeDelay
		});
		return cleanup;
	}, [
		baseRegisterTrigger,
		closeDelay,
		store,
		thisTriggerId
	]);
	const triggerElementRef = React$1.useRef(null);
	const handleTriggerElementRef = React$1.useCallback((el) => {
		triggerElementRef.current = el;
		store.set("activeTriggerElement", el);
	}, [store]);
	const submenuRootContext = useMenuSubmenuRootContext();
	if (!submenuRootContext?.parentMenu) throw new Error(formatErrorMessage(37));
	store.useSyncedValue("closeDelay", closeDelay);
	const parentMenuStore = submenuRootContext.parentMenu;
	const itemProps = parentMenuStore.useState("itemProps");
	const highlighted = parentMenuStore.useState("isActive", listItem.index);
	const itemMetadata = React$1.useMemo(() => ({
		type: "submenu-trigger",
		setActive() {
			parentMenuStore.set("activeIndex", listItem.index);
		}
	}), [parentMenuStore, listItem.index]);
	const rootDisabled = store.useState("disabled");
	const disabled = disabledProp || rootDisabled;
	const { getItemProps, itemRef } = useMenuItem({
		closeOnClick: false,
		disabled,
		highlighted,
		id: thisTriggerId,
		store,
		typingRef: parentMenuStore.context.typingRef,
		nativeButton,
		itemMetadata,
		nodeId: menuPositionerContext?.nodeId
	});
	const hoverEnabled = store.useState("hoverEnabled");
	const allowMouseEnter = parentMenuStore.useState("allowMouseEnter");
	const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
		enabled: hoverEnabled && openOnHover && !disabled,
		handleClose: safePolygon({ blockPointerEvents: true }),
		mouseOnly: true,
		move: true,
		restMs: delay,
		delay: allowMouseEnter ? {
			open: delay,
			close: closeDelay
		} : 0,
		triggerElementRef,
		externalTree: floatingTreeRoot
	});
	const localInteractionProps = useInteractions([useClick(floatingRootContext, {
		enabled: !disabled,
		event: "mousedown",
		toggle: !openOnHover,
		ignoreMouse: openOnHover,
		stickIfOpen: false
	})]);
	const rootTriggerProps = store.useState("triggerProps", true);
	delete rootTriggerProps.id;
	return useRenderElement("div", componentProps, {
		state: {
			disabled,
			highlighted,
			open
		},
		stateAttributesMapping: triggerOpenStateMapping,
		props: [
			localInteractionProps.getReferenceProps(),
			hoverProps,
			rootTriggerProps,
			itemProps,
			{
				tabIndex: open || highlighted ? 0 : -1,
				onBlur() {
					if (highlighted) parentMenuStore.set("activeIndex", null);
				}
			},
			elementProps,
			getItemProps
		],
		ref: [
			forwardedRef,
			listItem.ref,
			itemRef,
			registerTrigger,
			handleTriggerElementRef
		]
	});
});
//#endregion
//#region app/components/base/ui/menu-shared.ts
var menuRowClassName = "mx-1 flex h-8 cursor-pointer select-none items-center gap-1 rounded-lg px-2 outline-none data-[highlighted]:bg-state-base-hover data-[disabled]:cursor-not-allowed data-[disabled]:opacity-30";
var menuGroupLabelClassName = "px-3 pb-0.5 pt-1 text-text-tertiary system-xs-medium-uppercase";
var menuSeparatorClassName = "my-1 h-px bg-divider-subtle";
var menuPopupBaseClassName = "max-h-[var(--available-height)] overflow-y-auto overflow-x-hidden rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur py-1 text-sm text-text-secondary shadow-lg outline-none focus:outline-none focus-visible:outline-none backdrop-blur-[5px]";
var menuPopupAnimationClassName = "origin-[var(--transform-origin)] transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 motion-reduce:transition-none";
var menuBackdropClassName = "fixed inset-0 z-[1002] bg-transparent transition-opacity duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 motion-reduce:transition-none";
//#endregion
//#region app/components/base/ui/dropdown-menu/index.tsx
var DropdownMenu = MenuRoot;
var DropdownMenuTrigger = MenuTrigger;
var DropdownMenuSub = MenuSubmenuRoot;
var DropdownMenuGroup = MenuGroup;
function renderDropdownMenuPopup({ children, placement, sideOffset, alignOffset, className, popupClassName, positionerProps, popupProps }) {
	const { side, align } = parsePlacement(placement);
	return /* @__PURE__ */ jsx(MenuPortal, { children: /* @__PURE__ */ jsx(MenuPositioner, {
		side,
		align,
		sideOffset,
		alignOffset,
		className: cn("z-[1002] outline-none", className),
		...positionerProps,
		children: /* @__PURE__ */ jsx(MenuPopup, {
			className: cn(menuPopupBaseClassName, menuPopupAnimationClassName, popupClassName),
			...popupProps,
			children
		})
	}) });
}
function DropdownMenuContent({ children, placement = "bottom-end", sideOffset = 4, alignOffset = 0, className, popupClassName, positionerProps, popupProps }) {
	return renderDropdownMenuPopup({
		children,
		placement,
		sideOffset,
		alignOffset,
		className,
		popupClassName,
		positionerProps,
		popupProps
	});
}
function DropdownMenuSubTrigger({ className, destructive, children, ...props }) {
	return /* @__PURE__ */ jsxs(MenuSubmenuTrigger, {
		className: cn(menuRowClassName, destructive && "text-text-destructive", className),
		...props,
		children: [children, /* @__PURE__ */ jsx("span", {
			"aria-hidden": true,
			className: "i-ri-arrow-right-s-line ml-auto size-4 shrink-0 text-text-tertiary"
		})]
	});
}
function DropdownMenuSubContent({ children, placement = "left-start", sideOffset = 4, alignOffset = 0, className, popupClassName, positionerProps, popupProps }) {
	return renderDropdownMenuPopup({
		children,
		placement,
		sideOffset,
		alignOffset,
		className,
		popupClassName,
		positionerProps,
		popupProps
	});
}
function DropdownMenuItem({ className, destructive, ...props }) {
	return /* @__PURE__ */ jsx(MenuItem, {
		className: cn(menuRowClassName, destructive && "text-text-destructive", className),
		...props
	});
}
function DropdownMenuLinkItem({ className, destructive, closeOnClick = true, ...props }) {
	return /* @__PURE__ */ jsx(MenuLinkItem, {
		className: cn(menuRowClassName, destructive && "text-text-destructive", className),
		closeOnClick,
		...props
	});
}
function DropdownMenuSeparator({ className, ...props }) {
	return /* @__PURE__ */ jsx(Separator, {
		className: cn(menuSeparatorClassName, className),
		...props
	});
}
//#endregion
export { useMenuRootContext as A, MenuPopup as C, ContextMenuRootContext as D, useMenuGroupRootContext as E, Icon$7 as F, Icon$9 as I, Icon$10 as L, Icon$3 as M, Icon$4 as N, useContextMenuRootContext as O, Icon$5 as P, MenuPortal as S, MenuGroup as T, findRootOwnerId as _, DropdownMenuLinkItem as a, MenuRadioGroup as b, DropdownMenuSubContent as c, menuBackdropClassName as d, menuGroupLabelClassName as f, menuSeparatorClassName as g, menuRowClassName as h, DropdownMenuItem as i, Icon as j, MenuRootContext as k, DropdownMenuSubTrigger as l, menuPopupBaseClassName as m, DropdownMenuContent as n, DropdownMenuSeparator as o, menuPopupAnimationClassName as p, DropdownMenuGroup as r, DropdownMenuSub as s, DropdownMenu as t, DropdownMenuTrigger as u, MenuSubmenuRoot as v, MenuItem as w, MenuPositioner as x, MenuRoot as y };
