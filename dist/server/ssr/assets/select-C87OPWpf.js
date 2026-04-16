import { Gr as s7, nn as Um } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { A as f$1, C as i, Ct as o$2, Dt as n, Et as s, G as n$4, H as u$2, I as A, L as K, O as y$1, Ot as o$1, R as V, S as c$1, T as u$3, Tt as E, U as k$2, _ as p$1, _t as o, b as w, bt as u$1, c as x$1, ct as n$3, d as n$2, dt as d, f as m, gt as S, h as c, ht as r, k as n$1, ot as l, pt as l$1, q as G, s as N, tt as p$2, u as te$1, ut as y$2, vt as k$1, x as a, xt as T, yt as x, z as Y } from "./dialog-DCCIZLOh.js";
import { d as $f7dceffc5ad7768b$export$4e328f61c538687f, f as $6179b936705e76d3$export$ae780daf29e6d456, i as Te, l as w$2, n as Fe, o as ye, r as Re, s as e, t as Ae, u as w$1 } from "./floating-BSQrJiwr.js";
import { C as g, E as u$4, S as s$1, T as b$1, _ as u$6, b as L, c as p$3, d as V$1, f as Z, g as s$2, h as u$5, i as Mt, m as f$2, n as It, o as a$1, p as c$3, r as Mo$1, s as c$2, t as Bt, u as N$1, v as j$1, w as l$2, x as S$1, y as u$7 } from "./listbox-BDQqoM7N.js";
import { t as Badge } from "./badge-DnA7gOK5.js";
import * as React$1 from "react";
import React, { Fragment, createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/@heroicons+react@2.2.0_react@19.2.4/node_modules/@heroicons/react/20/solid/esm/ChevronDownIcon.js
function ChevronDownIcon({ title, titleId, ...props }, svgRef) {
	return /* @__PURE__ */ React$1.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /* @__PURE__ */ React$1.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React$1.createElement("path", {
		fillRule: "evenodd",
		d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$2 = /* @__PURE__ */ React$1.forwardRef(ChevronDownIcon);
//#endregion
//#region node_modules/.pnpm/@heroicons+react@2.2.0_react@19.2.4/node_modules/@heroicons/react/20/solid/esm/ChevronUpIcon.js
function ChevronUpIcon({ title, titleId, ...props }, svgRef) {
	return /* @__PURE__ */ React$1.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /* @__PURE__ */ React$1.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React$1.createElement("path", {
		fillRule: "evenodd",
		d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$1 = /* @__PURE__ */ React$1.forwardRef(ChevronUpIcon);
//#endregion
//#region node_modules/.pnpm/@heroicons+react@2.2.0_react@19.2.4/node_modules/@heroicons/react/20/solid/esm/XMarkIcon.js
function XMarkIcon({ title, titleId, ...props }, svgRef) {
	return /* @__PURE__ */ React$1.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /* @__PURE__ */ React$1.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React$1.createElement("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" }));
}
var ForwardRef = /* @__PURE__ */ React$1.forwardRef(XMarkIcon);
//#endregion
//#region node_modules/.pnpm/@tanstack+virtual-core@3.13.23/node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo$1(getDeps, fn, opts) {
	let deps = opts.initialDeps ?? [];
	let result;
	let isInitial = true;
	function memoizedFunction() {
		var _a, _b, _c;
		let depTime;
		if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
		const newDeps = getDeps();
		if (!(newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep))) return result;
		deps = newDeps;
		let resultTime;
		if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
		result = fn(...newDeps);
		if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
			const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
			const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
			const resultFpsPercentage = resultEndTime / 16;
			const pad = (str, num) => {
				str = String(str);
				while (str.length < num) str = " " + str;
				return str;
			};
			console.info(`%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? void 0 : opts.key);
		}
		if ((opts == null ? void 0 : opts.onChange) && !(isInitial && opts.skipInitialOnChange)) opts.onChange(result);
		isInitial = false;
		return result;
	}
	memoizedFunction.updateDeps = (newDeps) => {
		deps = newDeps;
	};
	return memoizedFunction;
}
function notUndefined(value, msg) {
	if (value === void 0) throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
	else return value;
}
var approxEqual = (a, b) => Math.abs(a - b) < 1.01;
var debounce = (targetWindow, fn, ms) => {
	let timeoutId;
	return function(...args) {
		targetWindow.clearTimeout(timeoutId);
		timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
	};
};
//#endregion
//#region node_modules/.pnpm/@tanstack+virtual-core@3.13.23/node_modules/@tanstack/virtual-core/dist/esm/index.js
var getRect = (element) => {
	const { offsetWidth, offsetHeight } = element;
	return {
		width: offsetWidth,
		height: offsetHeight
	};
};
var defaultKeyExtractor = (index) => index;
var defaultRangeExtractor = (range) => {
	const start = Math.max(range.startIndex - range.overscan, 0);
	const end = Math.min(range.endIndex + range.overscan, range.count - 1);
	const arr = [];
	for (let i = start; i <= end; i++) arr.push(i);
	return arr;
};
var observeElementRect = (instance, cb) => {
	const element = instance.scrollElement;
	if (!element) return;
	const targetWindow = instance.targetWindow;
	if (!targetWindow) return;
	const handler = (rect) => {
		const { width, height } = rect;
		cb({
			width: Math.round(width),
			height: Math.round(height)
		});
	};
	handler(getRect(element));
	if (!targetWindow.ResizeObserver) return () => {};
	const observer = new targetWindow.ResizeObserver((entries) => {
		const run = () => {
			const entry = entries[0];
			if (entry == null ? void 0 : entry.borderBoxSize) {
				const box = entry.borderBoxSize[0];
				if (box) {
					handler({
						width: box.inlineSize,
						height: box.blockSize
					});
					return;
				}
			}
			handler(getRect(element));
		};
		instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
	});
	observer.observe(element, { box: "border-box" });
	return () => {
		observer.unobserve(element);
	};
};
var addEventListenerOptions = { passive: true };
var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
var observeElementOffset = (instance, cb) => {
	const element = instance.scrollElement;
	if (!element) return;
	const targetWindow = instance.targetWindow;
	if (!targetWindow) return;
	let offset = 0;
	const fallback = instance.options.useScrollendEvent && supportsScrollend ? () => void 0 : debounce(targetWindow, () => {
		cb(offset, false);
	}, instance.options.isScrollingResetDelay);
	const createHandler = (isScrolling) => () => {
		const { horizontal, isRtl } = instance.options;
		offset = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
		fallback();
		cb(offset, isScrolling);
	};
	const handler = createHandler(true);
	const endHandler = createHandler(false);
	element.addEventListener("scroll", handler, addEventListenerOptions);
	const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
	if (registerScrollendEvent) element.addEventListener("scrollend", endHandler, addEventListenerOptions);
	return () => {
		element.removeEventListener("scroll", handler);
		if (registerScrollendEvent) element.removeEventListener("scrollend", endHandler);
	};
};
var measureElement = (element, entry, instance) => {
	if (entry == null ? void 0 : entry.borderBoxSize) {
		const box = entry.borderBoxSize[0];
		if (box) return Math.round(box[instance.options.horizontal ? "inlineSize" : "blockSize"]);
	}
	return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
};
var elementScroll = (offset, { adjustments = 0, behavior }, instance) => {
	var _a, _b;
	const toOffset = offset + adjustments;
	(_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null || _b.call(_a, {
		[instance.options.horizontal ? "left" : "top"]: toOffset,
		behavior
	});
};
var Virtualizer = class {
	constructor(opts) {
		this.unsubs = [];
		this.scrollElement = null;
		this.targetWindow = null;
		this.isScrolling = false;
		this.scrollState = null;
		this.measurementsCache = [];
		this.itemSizeCache = /* @__PURE__ */ new Map();
		this.laneAssignments = /* @__PURE__ */ new Map();
		this.pendingMeasuredCacheIndexes = [];
		this.prevLanes = void 0;
		this.lanesChangedFlag = false;
		this.lanesSettling = false;
		this.scrollRect = null;
		this.scrollOffset = null;
		this.scrollDirection = null;
		this.scrollAdjustments = 0;
		this.elementsCache = /* @__PURE__ */ new Map();
		this.now = () => {
			var _a, _b, _c;
			return ((_c = (_b = (_a = this.targetWindow) == null ? void 0 : _a.performance) == null ? void 0 : _b.now) == null ? void 0 : _c.call(_b)) ?? Date.now();
		};
		this.observer = /* @__PURE__ */ (() => {
			let _ro = null;
			const get = () => {
				if (_ro) return _ro;
				if (!this.targetWindow || !this.targetWindow.ResizeObserver) return null;
				return _ro = new this.targetWindow.ResizeObserver((entries) => {
					entries.forEach((entry) => {
						const run = () => {
							const node = entry.target;
							const index = this.indexFromElement(node);
							if (!node.isConnected) {
								this.observer.unobserve(node);
								return;
							}
							if (this.shouldMeasureDuringScroll(index)) this.resizeItem(index, this.options.measureElement(node, entry, this));
						};
						this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
					});
				});
			};
			return {
				disconnect: () => {
					var _a;
					(_a = get()) == null || _a.disconnect();
					_ro = null;
				},
				observe: (target) => {
					var _a;
					return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
				},
				unobserve: (target) => {
					var _a;
					return (_a = get()) == null ? void 0 : _a.unobserve(target);
				}
			};
		})();
		this.range = null;
		this.setOptions = (opts2) => {
			Object.entries(opts2).forEach(([key, value]) => {
				if (typeof value === "undefined") delete opts2[key];
			});
			this.options = {
				debug: false,
				initialOffset: 0,
				overscan: 1,
				paddingStart: 0,
				paddingEnd: 0,
				scrollPaddingStart: 0,
				scrollPaddingEnd: 0,
				horizontal: false,
				getItemKey: defaultKeyExtractor,
				rangeExtractor: defaultRangeExtractor,
				onChange: () => {},
				measureElement,
				initialRect: {
					width: 0,
					height: 0
				},
				scrollMargin: 0,
				gap: 0,
				indexAttribute: "data-index",
				initialMeasurementsCache: [],
				lanes: 1,
				isScrollingResetDelay: 150,
				enabled: true,
				isRtl: false,
				useScrollendEvent: false,
				useAnimationFrameWithResizeObserver: false,
				...opts2
			};
		};
		this.notify = (sync) => {
			var _a, _b;
			(_b = (_a = this.options).onChange) == null || _b.call(_a, this, sync);
		};
		this.maybeNotify = memo$1(() => {
			this.calculateRange();
			return [
				this.isScrolling,
				this.range ? this.range.startIndex : null,
				this.range ? this.range.endIndex : null
			];
		}, (isScrolling) => {
			this.notify(isScrolling);
		}, {
			key: false,
			debug: () => this.options.debug,
			initialDeps: [
				this.isScrolling,
				this.range ? this.range.startIndex : null,
				this.range ? this.range.endIndex : null
			]
		});
		this.cleanup = () => {
			this.unsubs.filter(Boolean).forEach((d) => d());
			this.unsubs = [];
			this.observer.disconnect();
			if (this.rafId != null && this.targetWindow) {
				this.targetWindow.cancelAnimationFrame(this.rafId);
				this.rafId = null;
			}
			this.scrollState = null;
			this.scrollElement = null;
			this.targetWindow = null;
		};
		this._didMount = () => {
			return () => {
				this.cleanup();
			};
		};
		this._willUpdate = () => {
			var _a;
			const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
			if (this.scrollElement !== scrollElement) {
				this.cleanup();
				if (!scrollElement) {
					this.maybeNotify();
					return;
				}
				this.scrollElement = scrollElement;
				if (this.scrollElement && "ownerDocument" in this.scrollElement) this.targetWindow = this.scrollElement.ownerDocument.defaultView;
				else this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
				this.elementsCache.forEach((cached) => {
					this.observer.observe(cached);
				});
				this.unsubs.push(this.options.observeElementRect(this, (rect) => {
					this.scrollRect = rect;
					this.maybeNotify();
				}));
				this.unsubs.push(this.options.observeElementOffset(this, (offset, isScrolling) => {
					this.scrollAdjustments = 0;
					this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
					this.scrollOffset = offset;
					this.isScrolling = isScrolling;
					if (this.scrollState) this.scheduleScrollReconcile();
					this.maybeNotify();
				}));
				this._scrollToOffset(this.getScrollOffset(), {
					adjustments: void 0,
					behavior: void 0
				});
			}
		};
		this.rafId = null;
		this.getSize = () => {
			if (!this.options.enabled) {
				this.scrollRect = null;
				return 0;
			}
			this.scrollRect = this.scrollRect ?? this.options.initialRect;
			return this.scrollRect[this.options.horizontal ? "width" : "height"];
		};
		this.getScrollOffset = () => {
			if (!this.options.enabled) {
				this.scrollOffset = null;
				return 0;
			}
			this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
			return this.scrollOffset;
		};
		this.getFurthestMeasurement = (measurements, index) => {
			const furthestMeasurementsFound = /* @__PURE__ */ new Map();
			const furthestMeasurements = /* @__PURE__ */ new Map();
			for (let m = index - 1; m >= 0; m--) {
				const measurement = measurements[m];
				if (furthestMeasurementsFound.has(measurement.lane)) continue;
				const previousFurthestMeasurement = furthestMeasurements.get(measurement.lane);
				if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) furthestMeasurements.set(measurement.lane, measurement);
				else if (measurement.end < previousFurthestMeasurement.end) furthestMeasurementsFound.set(measurement.lane, true);
				if (furthestMeasurementsFound.size === this.options.lanes) break;
			}
			return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a, b) => {
				if (a.end === b.end) return a.index - b.index;
				return a.end - b.end;
			})[0] : void 0;
		};
		this.getMeasurementOptions = memo$1(() => [
			this.options.count,
			this.options.paddingStart,
			this.options.scrollMargin,
			this.options.getItemKey,
			this.options.enabled,
			this.options.lanes
		], (count, paddingStart, scrollMargin, getItemKey, enabled, lanes) => {
			if (this.prevLanes !== void 0 && this.prevLanes !== lanes) this.lanesChangedFlag = true;
			this.prevLanes = lanes;
			this.pendingMeasuredCacheIndexes = [];
			return {
				count,
				paddingStart,
				scrollMargin,
				getItemKey,
				enabled,
				lanes
			};
		}, { key: false });
		this.getMeasurements = memo$1(() => [this.getMeasurementOptions(), this.itemSizeCache], ({ count, paddingStart, scrollMargin, getItemKey, enabled, lanes }, itemSizeCache) => {
			if (!enabled) {
				this.measurementsCache = [];
				this.itemSizeCache.clear();
				this.laneAssignments.clear();
				return [];
			}
			if (this.laneAssignments.size > count) {
				for (const index of this.laneAssignments.keys()) if (index >= count) this.laneAssignments.delete(index);
			}
			if (this.lanesChangedFlag) {
				this.lanesChangedFlag = false;
				this.lanesSettling = true;
				this.measurementsCache = [];
				this.itemSizeCache.clear();
				this.laneAssignments.clear();
				this.pendingMeasuredCacheIndexes = [];
			}
			if (this.measurementsCache.length === 0 && !this.lanesSettling) {
				this.measurementsCache = this.options.initialMeasurementsCache;
				this.measurementsCache.forEach((item) => {
					this.itemSizeCache.set(item.key, item.size);
				});
			}
			const min = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
			this.pendingMeasuredCacheIndexes = [];
			if (this.lanesSettling && this.measurementsCache.length === count) this.lanesSettling = false;
			const measurements = this.measurementsCache.slice(0, min);
			const laneLastIndex = new Array(lanes).fill(void 0);
			for (let m = 0; m < min; m++) {
				const item = measurements[m];
				if (item) laneLastIndex[item.lane] = m;
			}
			for (let i = min; i < count; i++) {
				const key = getItemKey(i);
				const cachedLane = this.laneAssignments.get(i);
				let lane;
				let start;
				if (cachedLane !== void 0 && this.options.lanes > 1) {
					lane = cachedLane;
					const prevIndex = laneLastIndex[lane];
					const prevInLane = prevIndex !== void 0 ? measurements[prevIndex] : void 0;
					start = prevInLane ? prevInLane.end + this.options.gap : paddingStart + scrollMargin;
				} else {
					const furthestMeasurement = this.options.lanes === 1 ? measurements[i - 1] : this.getFurthestMeasurement(measurements, i);
					start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
					lane = furthestMeasurement ? furthestMeasurement.lane : i % this.options.lanes;
					if (this.options.lanes > 1) this.laneAssignments.set(i, lane);
				}
				const measuredSize = itemSizeCache.get(key);
				const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
				const end = start + size;
				measurements[i] = {
					index: i,
					start,
					size,
					end,
					key,
					lane
				};
				laneLastIndex[lane] = i;
			}
			this.measurementsCache = measurements;
			return measurements;
		}, {
			key: false,
			debug: () => this.options.debug
		});
		this.calculateRange = memo$1(() => [
			this.getMeasurements(),
			this.getSize(),
			this.getScrollOffset(),
			this.options.lanes
		], (measurements, outerSize, scrollOffset, lanes) => {
			return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
				measurements,
				outerSize,
				scrollOffset,
				lanes
			}) : null;
		}, {
			key: false,
			debug: () => this.options.debug
		});
		this.getVirtualIndexes = memo$1(() => {
			let startIndex = null;
			let endIndex = null;
			const range = this.calculateRange();
			if (range) {
				startIndex = range.startIndex;
				endIndex = range.endIndex;
			}
			this.maybeNotify.updateDeps([
				this.isScrolling,
				startIndex,
				endIndex
			]);
			return [
				this.options.rangeExtractor,
				this.options.overscan,
				this.options.count,
				startIndex,
				endIndex
			];
		}, (rangeExtractor, overscan, count, startIndex, endIndex) => {
			return startIndex === null || endIndex === null ? [] : rangeExtractor({
				startIndex,
				endIndex,
				overscan,
				count
			});
		}, {
			key: false,
			debug: () => this.options.debug
		});
		this.indexFromElement = (node) => {
			const attributeName = this.options.indexAttribute;
			const indexStr = node.getAttribute(attributeName);
			if (!indexStr) {
				console.warn(`Missing attribute name '${attributeName}={index}' on measured element.`);
				return -1;
			}
			return parseInt(indexStr, 10);
		};
		this.shouldMeasureDuringScroll = (index) => {
			var _a;
			if (!this.scrollState || this.scrollState.behavior !== "smooth") return true;
			const scrollIndex = this.scrollState.index ?? ((_a = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : _a.index);
			if (scrollIndex !== void 0 && this.range) {
				const bufferSize = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2));
				const minIndex = Math.max(0, scrollIndex - bufferSize);
				const maxIndex = Math.min(this.options.count - 1, scrollIndex + bufferSize);
				return index >= minIndex && index <= maxIndex;
			}
			return true;
		};
		this.measureElement = (node) => {
			if (!node) {
				this.elementsCache.forEach((cached, key2) => {
					if (!cached.isConnected) {
						this.observer.unobserve(cached);
						this.elementsCache.delete(key2);
					}
				});
				return;
			}
			const index = this.indexFromElement(node);
			const key = this.options.getItemKey(index);
			const prevNode = this.elementsCache.get(key);
			if (prevNode !== node) {
				if (prevNode) this.observer.unobserve(prevNode);
				this.observer.observe(node);
				this.elementsCache.set(key, node);
			}
			if ((!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(index)) this.resizeItem(index, this.options.measureElement(node, void 0, this));
		};
		this.resizeItem = (index, size) => {
			var _a;
			const item = this.measurementsCache[index];
			if (!item) return;
			const delta = size - (this.itemSizeCache.get(item.key) ?? item.size);
			if (delta !== 0) {
				if (((_a = this.scrollState) == null ? void 0 : _a.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments)) this._scrollToOffset(this.getScrollOffset(), {
					adjustments: this.scrollAdjustments += delta,
					behavior: void 0
				});
				this.pendingMeasuredCacheIndexes.push(item.index);
				this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
				this.notify(false);
			}
		};
		this.getVirtualItems = memo$1(() => [this.getVirtualIndexes(), this.getMeasurements()], (indexes, measurements) => {
			const virtualItems = [];
			for (let k = 0, len = indexes.length; k < len; k++) {
				const measurement = measurements[indexes[k]];
				virtualItems.push(measurement);
			}
			return virtualItems;
		}, {
			key: false,
			debug: () => this.options.debug
		});
		this.getVirtualItemForOffset = (offset) => {
			const measurements = this.getMeasurements();
			if (measurements.length === 0) return;
			return notUndefined(measurements[findNearestBinarySearch(0, measurements.length - 1, (index) => notUndefined(measurements[index]).start, offset)]);
		};
		this.getMaxScrollOffset = () => {
			if (!this.scrollElement) return 0;
			if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
			else {
				const doc = this.scrollElement.document.documentElement;
				return this.options.horizontal ? doc.scrollWidth - this.scrollElement.innerWidth : doc.scrollHeight - this.scrollElement.innerHeight;
			}
		};
		this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
			if (!this.scrollElement) return 0;
			const size = this.getSize();
			const scrollOffset = this.getScrollOffset();
			if (align === "auto") align = toOffset >= scrollOffset + size ? "end" : "start";
			if (align === "center") toOffset += (itemSize - size) / 2;
			else if (align === "end") toOffset -= size;
			const maxOffset = this.getMaxScrollOffset();
			return Math.max(Math.min(maxOffset, toOffset), 0);
		};
		this.getOffsetForIndex = (index, align = "auto") => {
			index = Math.max(0, Math.min(index, this.options.count - 1));
			const size = this.getSize();
			const scrollOffset = this.getScrollOffset();
			const item = this.measurementsCache[index];
			if (!item) return;
			if (align === "auto") if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) align = "end";
			else if (item.start <= scrollOffset + this.options.scrollPaddingStart) align = "start";
			else return [scrollOffset, align];
			if (align === "end" && index === this.options.count - 1) return [this.getMaxScrollOffset(), align];
			const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
			return [this.getOffsetForAlignment(toOffset, align, item.size), align];
		};
		this.scrollToOffset = (toOffset, { align = "start", behavior = "auto" } = {}) => {
			const offset = this.getOffsetForAlignment(toOffset, align);
			this.scrollState = {
				index: null,
				align,
				behavior,
				startedAt: this.now(),
				lastTargetOffset: offset,
				stableFrames: 0
			};
			this._scrollToOffset(offset, {
				adjustments: void 0,
				behavior
			});
			this.scheduleScrollReconcile();
		};
		this.scrollToIndex = (index, { align: initialAlign = "auto", behavior = "auto" } = {}) => {
			index = Math.max(0, Math.min(index, this.options.count - 1));
			const offsetInfo = this.getOffsetForIndex(index, initialAlign);
			if (!offsetInfo) return;
			const [offset, align] = offsetInfo;
			const now = this.now();
			this.scrollState = {
				index,
				align,
				behavior,
				startedAt: now,
				lastTargetOffset: offset,
				stableFrames: 0
			};
			this._scrollToOffset(offset, {
				adjustments: void 0,
				behavior
			});
			this.scheduleScrollReconcile();
		};
		this.scrollBy = (delta, { behavior = "auto" } = {}) => {
			const offset = this.getScrollOffset() + delta;
			this.scrollState = {
				index: null,
				align: "start",
				behavior,
				startedAt: this.now(),
				lastTargetOffset: offset,
				stableFrames: 0
			};
			this._scrollToOffset(offset, {
				adjustments: void 0,
				behavior
			});
			this.scheduleScrollReconcile();
		};
		this.getTotalSize = () => {
			var _a;
			const measurements = this.getMeasurements();
			let end;
			if (measurements.length === 0) end = this.options.paddingStart;
			else if (this.options.lanes === 1) end = ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0;
			else {
				const endByLane = Array(this.options.lanes).fill(null);
				let endIndex = measurements.length - 1;
				while (endIndex >= 0 && endByLane.some((val) => val === null)) {
					const item = measurements[endIndex];
					if (endByLane[item.lane] === null) endByLane[item.lane] = item.end;
					endIndex--;
				}
				end = Math.max(...endByLane.filter((val) => val !== null));
			}
			return Math.max(end - this.options.scrollMargin + this.options.paddingEnd, 0);
		};
		this._scrollToOffset = (offset, { adjustments, behavior }) => {
			this.options.scrollToFn(offset, {
				behavior,
				adjustments
			}, this);
		};
		this.measure = () => {
			this.itemSizeCache = /* @__PURE__ */ new Map();
			this.laneAssignments = /* @__PURE__ */ new Map();
			this.notify(false);
		};
		this.setOptions(opts);
	}
	scheduleScrollReconcile() {
		if (!this.targetWindow) {
			this.scrollState = null;
			return;
		}
		if (this.rafId != null) return;
		this.rafId = this.targetWindow.requestAnimationFrame(() => {
			this.rafId = null;
			this.reconcileScroll();
		});
	}
	reconcileScroll() {
		if (!this.scrollState) return;
		if (!this.scrollElement) return;
		if (this.now() - this.scrollState.startedAt > 5e3) {
			this.scrollState = null;
			return;
		}
		const offsetInfo = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0;
		const targetOffset = offsetInfo ? offsetInfo[0] : this.scrollState.lastTargetOffset;
		const STABLE_FRAMES = 1;
		const targetChanged = targetOffset !== this.scrollState.lastTargetOffset;
		if (!targetChanged && approxEqual(targetOffset, this.getScrollOffset())) {
			this.scrollState.stableFrames++;
			if (this.scrollState.stableFrames >= STABLE_FRAMES) {
				this.scrollState = null;
				return;
			}
		} else {
			this.scrollState.stableFrames = 0;
			if (targetChanged) {
				this.scrollState.lastTargetOffset = targetOffset;
				this.scrollState.behavior = "auto";
				this._scrollToOffset(targetOffset, {
					adjustments: void 0,
					behavior: "auto"
				});
			}
		}
		this.scheduleScrollReconcile();
	}
};
var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
	while (low <= high) {
		const middle = (low + high) / 2 | 0;
		const currentValue = getCurrentValue(middle);
		if (currentValue < value) low = middle + 1;
		else if (currentValue > value) high = middle - 1;
		else return middle;
	}
	if (low > 0) return low - 1;
	else return 0;
};
function calculateRange({ measurements, outerSize, scrollOffset, lanes }) {
	const lastIndex = measurements.length - 1;
	const getOffset = (index) => measurements[index].start;
	if (measurements.length <= lanes) return {
		startIndex: 0,
		endIndex: lastIndex
	};
	let startIndex = findNearestBinarySearch(0, lastIndex, getOffset, scrollOffset);
	let endIndex = startIndex;
	if (lanes === 1) while (endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize) endIndex++;
	else if (lanes > 1) {
		const endPerLane = Array(lanes).fill(0);
		while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
			const item = measurements[endIndex];
			endPerLane[item.lane] = item.end;
			endIndex++;
		}
		const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
		while (startIndex >= 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
			const item = measurements[startIndex];
			startPerLane[item.lane] = item.start;
			startIndex--;
		}
		startIndex = Math.max(0, startIndex - startIndex % lanes);
		endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
	}
	return {
		startIndex,
		endIndex
	};
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-virtual@3.13.23_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@tanstack/react-virtual/dist/esm/index.js
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React$1.useLayoutEffect : React$1.useEffect;
function useVirtualizerBase({ useFlushSync = true, ...options }) {
	const rerender = React$1.useReducer(() => ({}), {})[1];
	const resolvedOptions = {
		...options,
		onChange: (instance2, sync) => {
			var _a;
			if (useFlushSync && sync) flushSync(rerender);
			else rerender();
			(_a = options.onChange) == null || _a.call(options, instance2, sync);
		}
	};
	const [instance] = React$1.useState(() => new Virtualizer(resolvedOptions));
	instance.setOptions(resolvedOptions);
	useIsomorphicLayoutEffect(() => {
		return instance._didMount();
	}, []);
	useIsomorphicLayoutEffect(() => {
		return instance._willUpdate();
	});
	return instance;
}
function useVirtualizer(options) {
	return useVirtualizerBase({
		observeElementRect,
		observeElementOffset,
		scrollToFn: elementScroll,
		...options
	});
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
function v$1(e) {
	let l$3 = useRef({
		value: "",
		selectionStart: null,
		selectionEnd: null
	});
	return E(e, "blur", (n) => {
		let t = n.target;
		l(t) && (l$3.current = {
			value: t.value,
			selectionStart: t.selectionStart,
			selectionEnd: t.selectionEnd
		});
	}), o(() => {
		if (!d(e) && l(e) && e.isConnected) {
			if (e.focus({ preventScroll: !0 }), e.value !== l$3.current.value) e.setSelectionRange(e.value.length, e.value.length);
			else {
				let { selectionStart: n, selectionEnd: t } = l$3.current;
				n !== null && t !== null && e.setSelectionRange(n, t);
			}
			l$3.current = {
				value: "",
				selectionStart: null,
				selectionEnd: null
			};
		}
	});
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
function F(c, { container: e, accept: t, walk: r }) {
	let o = useRef(t), l = useRef(r);
	useEffect(() => {
		o.current = t, l.current = r;
	}, [t, r]), n(() => {
		if (!e || !c) return;
		let n = l$1(e);
		if (!n) return;
		let f = o.current, p = l.current, i = Object.assign((m) => f(m), { acceptNode: f }), u = n.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, i, !1);
		for (; u.nextNode();) p(u.currentNode);
	}, [
		e,
		c,
		o,
		l
	]);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/components/combobox/combobox-machine.js
var I = Object.defineProperty;
var h = (t, i, e) => i in t ? I(t, i, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: e
}) : t[i] = e;
var f = (t, i, e) => (h(t, typeof i != "symbol" ? i + "" : i, e), e);
var P = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(P || {}), k = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(k || {}), _ = ((n) => (n[n.Pointer = 0] = "Pointer", n[n.Focus = 1] = "Focus", n[n.Other = 2] = "Other", n))(_ || {}), D = ((l) => (l[l.OpenCombobox = 0] = "OpenCombobox", l[l.CloseCombobox = 1] = "CloseCombobox", l[l.GoToOption = 2] = "GoToOption", l[l.SetTyping = 3] = "SetTyping", l[l.RegisterOption = 4] = "RegisterOption", l[l.UnregisterOption = 5] = "UnregisterOption", l[l.DefaultToFirstOption = 6] = "DefaultToFirstOption", l[l.SetActivationTrigger = 7] = "SetActivationTrigger", l[l.UpdateVirtualConfiguration = 8] = "UpdateVirtualConfiguration", l[l.SetInputElement = 9] = "SetInputElement", l[l.SetButtonElement = 10] = "SetButtonElement", l[l.SetOptionsElement = 11] = "SetOptionsElement", l[l.MarkInputAsMoved = 12] = "MarkInputAsMoved", l))(D || {});
function v(t, i = (e) => e) {
	let e = t.activeOptionIndex !== null ? t.options[t.activeOptionIndex] : null, n = i(t.options.slice()), o = n.length > 0 && n[0].dataRef.current.order !== null ? n.sort((u, a) => u.dataRef.current.order - a.dataRef.current.order) : G(n, (u) => u.dataRef.current.domRef.current), r = e ? o.indexOf(e) : null;
	return r === -1 && (r = null), {
		options: o,
		activeOptionIndex: r
	};
}
var j = {
	[1](t) {
		var e;
		if ((e = t.dataRef.current) != null && e.disabled || t.comboboxState === 1) return t;
		let i = t.inputElement ? c$2.Tracked(a$1(t.inputElement)) : t.inputPositionState;
		return {
			...t,
			activeOptionIndex: null,
			comboboxState: 1,
			isTyping: !1,
			activationTrigger: 2,
			inputPositionState: i,
			__demoMode: !1
		};
	},
	[0](t) {
		var i, e;
		if ((i = t.dataRef.current) != null && i.disabled || t.comboboxState === 0) return t;
		if ((e = t.dataRef.current) != null && e.value) {
			let n = t.dataRef.current.calculateIndex(t.dataRef.current.value);
			if (n !== -1) return {
				...t,
				activeOptionIndex: n,
				comboboxState: 0,
				__demoMode: !1,
				inputPositionState: c$2.Idle
			};
		}
		return {
			...t,
			comboboxState: 0,
			inputPositionState: c$2.Idle,
			__demoMode: !1
		};
	},
	[3](t, i) {
		return t.isTyping === i.isTyping ? t : {
			...t,
			isTyping: i.isTyping
		};
	},
	[2](t, i) {
		var r, u, a, s;
		if ((r = t.dataRef.current) != null && r.disabled || t.optionsElement && !((u = t.dataRef.current) != null && u.optionsPropsRef.current.static) && t.comboboxState === 1) return t;
		if (t.virtual) {
			let { options: p, disabled: c } = t.virtual, m = i.focus === c$3.Specific ? i.idx : f$2(i, {
				resolveItems: () => p,
				resolveActiveIndex: () => {
					var l, x;
					return (x = (l = t.activeOptionIndex) != null ? l : p.findIndex((S) => !c(S))) != null ? x : null;
				},
				resolveDisabled: c,
				resolveId() {
					throw new Error("Function not implemented.");
				}
			}), b = (a = i.trigger) != null ? a : 2;
			return t.activeOptionIndex === m && t.activationTrigger === b ? t : {
				...t,
				activeOptionIndex: m,
				activationTrigger: b,
				isTyping: !1,
				__demoMode: !1
			};
		}
		let e = v(t);
		if (e.activeOptionIndex === null) {
			let p = e.options.findIndex((c) => !c.dataRef.current.disabled);
			p !== -1 && (e.activeOptionIndex = p);
		}
		let n = i.focus === c$3.Specific ? i.idx : f$2(i, {
			resolveItems: () => e.options,
			resolveActiveIndex: () => e.activeOptionIndex,
			resolveId: (p) => p.id,
			resolveDisabled: (p) => p.dataRef.current.disabled
		}), o = (s = i.trigger) != null ? s : 2;
		return t.activeOptionIndex === n && t.activationTrigger === o ? t : {
			...t,
			...e,
			isTyping: !1,
			activeOptionIndex: n,
			activationTrigger: o,
			__demoMode: !1
		};
	},
	[4]: (t, i) => {
		var r, u, a, s;
		if ((r = t.dataRef.current) != null && r.virtual) return {
			...t,
			options: [...t.options, i.payload]
		};
		let e = i.payload, n = v(t, (p) => (p.push(e), p));
		t.activeOptionIndex === null && (a = (u = t.dataRef.current).isSelected) != null && a.call(u, i.payload.dataRef.current.value) && (n.activeOptionIndex = n.options.indexOf(e));
		let o = {
			...t,
			...n,
			activationTrigger: 2
		};
		return (s = t.dataRef.current) != null && s.__demoMode && t.dataRef.current.value === void 0 && (o.activeOptionIndex = 0), o;
	},
	[5]: (t, i) => {
		var n;
		if ((n = t.dataRef.current) != null && n.virtual) return {
			...t,
			options: t.options.filter((o) => o.id !== i.id)
		};
		let e = v(t, (o) => {
			let r = o.findIndex((u) => u.id === i.id);
			return r !== -1 && o.splice(r, 1), o;
		});
		return {
			...t,
			...e,
			activationTrigger: 2
		};
	},
	[6]: (t, i) => t.defaultToFirstOption === i.value ? t : {
		...t,
		defaultToFirstOption: i.value
	},
	[7]: (t, i) => t.activationTrigger === i.trigger ? t : {
		...t,
		activationTrigger: i.trigger
	},
	[8]: (t, i) => {
		var n, o;
		if (t.virtual === null) return {
			...t,
			virtual: {
				options: i.options,
				disabled: (n = i.disabled) != null ? n : () => !1
			}
		};
		if (t.virtual.options === i.options && t.virtual.disabled === i.disabled) return t;
		let e = t.activeOptionIndex;
		if (t.activeOptionIndex !== null) {
			let r = i.options.indexOf(t.virtual.options[t.activeOptionIndex]);
			r !== -1 ? e = r : e = null;
		}
		return {
			...t,
			activeOptionIndex: e,
			virtual: {
				options: i.options,
				disabled: (o = i.disabled) != null ? o : () => !1
			}
		};
	},
	[9]: (t, i) => t.inputElement === i.element ? t : {
		...t,
		inputElement: i.element
	},
	[10]: (t, i) => t.buttonElement === i.element ? t : {
		...t,
		buttonElement: i.element
	},
	[11]: (t, i) => t.optionsElement === i.element ? t : {
		...t,
		optionsElement: i.element
	},
	[12](t) {
		return t.inputPositionState.kind !== "Tracked" ? t : {
			...t,
			inputPositionState: c$2.Moved
		};
	}
};
var y = class y extends T {
	constructor(e) {
		super(e);
		f(this, "actions", {
			onChange: (e) => {
				let { onChange: n, compare: o, mode: r, value: u } = this.state.dataRef.current;
				return u$1(r, {
					[0]: () => n == null ? void 0 : n(e),
					[1]: () => {
						let a = u.slice(), s = a.findIndex((p) => o(p, e));
						return s === -1 ? a.push(e) : a.splice(s, 1), n == null ? void 0 : n(a);
					}
				});
			},
			registerOption: (e, n) => (this.send({
				type: 4,
				payload: {
					id: e,
					dataRef: n
				}
			}), () => {
				this.state.activeOptionIndex === this.state.dataRef.current.calculateIndex(n.current.value) && this.send({
					type: 6,
					value: !0
				}), this.send({
					type: 5,
					id: e
				});
			}),
			goToOption: (e, n) => (this.send({
				type: 6,
				value: !1
			}), this.send({
				type: 2,
				...e,
				trigger: n
			})),
			setIsTyping: (e) => {
				this.send({
					type: 3,
					isTyping: e
				});
			},
			closeCombobox: () => {
				var e, n;
				this.send({ type: 1 }), this.send({
					type: 6,
					value: !1
				}), (n = (e = this.state.dataRef.current).onClose) == null || n.call(e);
			},
			openCombobox: () => {
				this.send({ type: 0 }), this.send({
					type: 6,
					value: !0
				});
			},
			setActivationTrigger: (e) => {
				this.send({
					type: 7,
					trigger: e
				});
			},
			selectActiveOption: () => {
				let e = this.selectors.activeOptionIndex(this.state);
				if (e !== null) {
					if (this.actions.setIsTyping(!1), this.state.virtual) this.actions.onChange(this.state.virtual.options[e]);
					else {
						let { dataRef: n } = this.state.options[e];
						this.actions.onChange(n.current.value);
					}
					this.actions.goToOption({
						focus: c$3.Specific,
						idx: e
					});
				}
			},
			setInputElement: (e) => {
				this.send({
					type: 9,
					element: e
				});
			},
			setButtonElement: (e) => {
				this.send({
					type: 10,
					element: e
				});
			},
			setOptionsElement: (e) => {
				this.send({
					type: 11,
					element: e
				});
			}
		});
		f(this, "selectors", {
			activeDescendantId: (e) => {
				var o, r;
				let n = this.selectors.activeOptionIndex(e);
				if (n !== null) return e.virtual ? (r = e.options.find((u) => !u.dataRef.current.disabled && e.dataRef.current.compare(u.dataRef.current.value, e.virtual.options[n]))) == null ? void 0 : r.id : (o = e.options[n]) == null ? void 0 : o.id;
			},
			activeOptionIndex: (e) => {
				if (e.defaultToFirstOption && e.activeOptionIndex === null && (e.virtual ? e.virtual.options.length > 0 : e.options.length > 0)) {
					if (e.virtual) {
						let { options: o, disabled: r } = e.virtual, u = o.findIndex((a) => {
							var s;
							return !((s = r == null ? void 0 : r(a)) != null && s);
						});
						if (u !== -1) return u;
					}
					let n = e.options.findIndex((o) => !o.dataRef.current.disabled);
					if (n !== -1) return n;
				}
				return e.activeOptionIndex;
			},
			activeOption: (e) => {
				var o, r;
				let n = this.selectors.activeOptionIndex(e);
				return n === null ? null : e.virtual ? e.virtual.options[n != null ? n : 0] : (r = (o = e.options[n]) == null ? void 0 : o.dataRef.current.value) != null ? r : null;
			},
			isActive: (e, n, o) => {
				var u;
				let r = this.selectors.activeOptionIndex(e);
				return r === null ? !1 : e.virtual ? r === e.dataRef.current.calculateIndex(n) : ((u = e.options[r]) == null ? void 0 : u.id) === o;
			},
			shouldScrollIntoView: (e, n, o) => !(e.virtual || e.__demoMode || e.comboboxState !== 0 || e.activationTrigger === 0 || !this.selectors.isActive(e, n, o)),
			didInputMove(e) {
				return e.inputPositionState.kind === "Moved";
			}
		});
		{
			let n = this.state.id, o = x.get(null);
			this.disposables.add(o.on(k$1.Push, (r) => {
				!o.selectors.isTop(r, n) && this.state.comboboxState === 0 && this.actions.closeCombobox();
			})), this.on(0, () => o.actions.push(n)), this.on(1, () => o.actions.pop(n));
		}
		this.disposables.group((n) => {
			this.on(1, (o) => {
				o.inputElement && (n.dispose(), n.add(p$3(o.inputElement, o.inputPositionState, () => {
					this.send({ type: 12 });
				})));
			});
		});
	}
	static new({ id: e, virtual: n = null, __demoMode: o = !1 }) {
		var r;
		return new y({
			id: e,
			dataRef: { current: {} },
			comboboxState: o ? 0 : 1,
			isTyping: !1,
			options: [],
			virtual: n ? {
				options: n.options,
				disabled: (r = n.disabled) != null ? r : () => !1
			} : null,
			activeOptionIndex: null,
			activationTrigger: 2,
			inputElement: null,
			buttonElement: null,
			optionsElement: null,
			__demoMode: o,
			inputPositionState: c$2.Idle
		});
	}
	reduce(e, n) {
		return u$1(n.type, j, e, n);
	}
};
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/components/combobox/combobox-machine-glue.js
var u = createContext(null);
function p(n) {
	let o = useContext(u);
	if (o === null) {
		let e = /* @__PURE__ */ new Error(`<${n} /> is missing a parent <Combobox /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(e, b), e;
	}
	return o;
}
function b({ id: n, virtual: o = null, __demoMode: e = !1 }) {
	let t = useMemo(() => y.new({
		id: n,
		virtual: o,
		__demoMode: e
	}), []);
	return c(() => t.dispose()), t;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/components/combobox/combobox.js
var de = createContext(null);
de.displayName = "ComboboxDataContext";
function te(T) {
	let O = useContext(de);
	if (O === null) {
		let e = /* @__PURE__ */ new Error(`<${T} /> is missing a parent <Combobox /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(e, te), e;
	}
	return O;
}
var Le = createContext(null);
function Eo(T) {
	let O = p("VirtualProvider"), { options: o } = te("VirtualProvider").virtual, E = S(O, (a) => a.optionsElement), [R, y] = useMemo(() => {
		let a = E;
		if (!a) return [0, 0];
		let u = window.getComputedStyle(a);
		return [parseFloat(u.paddingBlockStart || u.paddingTop), parseFloat(u.paddingBlockEnd || u.paddingBottom)];
	}, [E]), b = useVirtualizer({
		enabled: o.length !== 0,
		scrollPaddingStart: R,
		scrollPaddingEnd: y,
		count: o.length,
		estimateSize() {
			return 40;
		},
		getScrollElement() {
			return O.state.optionsElement;
		},
		overscan: 12
	}), [h, p$4] = useState(0);
	n(() => {
		p$4((a) => a + 1);
	}, [o]);
	let f = b.getVirtualItems(), n$5 = S(O, (a) => a.activationTrigger === _.Pointer), m = S(O, O.selectors.activeOptionIndex);
	return f.length === 0 ? null : React.createElement(Le.Provider, { value: b }, React.createElement("div", {
		style: {
			position: "relative",
			width: "100%",
			height: `${b.getTotalSize()}px`
		},
		ref: (a) => {
			a && (n$5 || m !== null && o.length > m && b.scrollToIndex(m));
		}
	}, f.map((a) => {
		var u;
		return React.createElement(Fragment, { key: a.key }, React.cloneElement((u = T.children) == null ? void 0 : u.call(T, {
			...T.slot,
			option: o[a.index]
		}), {
			key: `${h}-${a.key}`,
			"data-index": a.index,
			"aria-setsize": o.length,
			"aria-posinset": a.index + 1,
			style: {
				position: "absolute",
				top: 0,
				left: 0,
				transform: `translateY(${a.start}px)`,
				overflowAnchor: "none"
			}
		}));
	})));
}
var ho = Fragment;
function Ao(T, O) {
	let e = r(), o$3 = a(), { value: E, defaultValue: R, onChange: y, form: b$2, name: h, by: p, invalid: f = !1, disabled: n$6 = o$3 || !1, onClose: m, __demoMode: a$2 = !1, multiple: u$8 = !1, immediate: A = !1, virtual: d = null, nullable: X, ...G } = T, C = l$2(R), [x$2 = u$8 ? [] : void 0, v] = b$1(E, y, C), c = b({
		id: e,
		virtual: d,
		__demoMode: a$2
	}), z = useRef({
		static: !1,
		hold: !1
	}), D$1 = u$4(p), K$1 = o((i) => d ? p === null ? d.options.indexOf(i) : d.options.findIndex((M) => D$1(M, i)) : c.state.options.findIndex((M) => D$1(M.dataRef.current.value, i))), W = useCallback((i) => u$1(l.mode, {
		[k.Multi]: () => x$2.some((M) => D$1(M, i)),
		[k.Single]: () => D$1(x$2, i)
	}), [x$2]), S$2 = S(c, (i) => i.virtual), j = o(() => m == null ? void 0 : m()), l = useMemo(() => ({
		__demoMode: a$2,
		immediate: A,
		optionsPropsRef: z,
		value: x$2,
		defaultValue: C,
		disabled: n$6,
		invalid: f,
		mode: u$8 ? k.Multi : k.Single,
		virtual: d ? S$2 : null,
		onChange: v,
		isSelected: W,
		calculateIndex: K$1,
		compare: D$1,
		onClose: j
	}), [
		a$2,
		A,
		z,
		x$2,
		C,
		n$6,
		f,
		u$8,
		d,
		S$2,
		v,
		W,
		K$1,
		D$1,
		j
	]);
	n(() => {
		var i;
		d && c.send({
			type: D.UpdateVirtualConfiguration,
			options: d.options,
			disabled: (i = d.disabled) != null ? i : null
		});
	}, [
		d,
		d == null ? void 0 : d.options,
		d == null ? void 0 : d.disabled
	]), n(() => {
		c.state.dataRef.current = l;
	}, [l]);
	let [k$3, Y, s, U] = S(c, (i) => [
		i.comboboxState,
		i.buttonElement,
		i.inputElement,
		i.optionsElement
	]), $ = x.get(null);
	k$2(S($, useCallback((i) => $.selectors.isTop(i, e), [$, e])), [
		Y,
		s,
		U
	], () => c.actions.closeCombobox());
	let be = S(c, c.selectors.activeOptionIndex), ee = S(c, c.selectors.activeOption), q = n$1({
		open: k$3 === P.Open,
		disabled: n$6,
		invalid: f,
		activeIndex: be,
		activeOption: ee,
		value: x$2
	}), [t, V] = V$1(), P$1 = O === null ? {} : { ref: O }, N = useCallback(() => {
		if (C !== void 0) return v == null ? void 0 : v(C);
	}, [v, C]), g = K();
	return React.createElement(V, {
		value: t,
		props: { htmlFor: s == null ? void 0 : s.id },
		slot: {
			open: k$3 === P.Open,
			disabled: n$6
		}
	}, React.createElement(Ae, null, React.createElement(de.Provider, { value: l }, React.createElement(u.Provider, { value: c }, React.createElement(c$1, { value: u$1(k$3, {
		[P.Open]: i.Open,
		[P.Closed]: i.Closed
	}) }, h != null && React.createElement(j$1, {
		disabled: n$6,
		data: x$2 != null ? { [h]: x$2 } : {},
		form: b$2,
		onReset: N
	}), g({
		ourProps: P$1,
		theirProps: G,
		slot: q,
		defaultTag: ho,
		name: "Combobox"
	}))))));
}
var Io = "input";
function Ro(T, O) {
	var ee, q;
	let e = p("Combobox.Input"), o$4 = te("Combobox.Input"), E = r(), R = u$5(), { id: y = R || `headlessui-combobox-input-${E}`, onChange: b, displayValue: h, disabled: p$5 = o$4.disabled || !1, autoFocus: f = !1, type: n = "text", ...m$1 } = T, a = useRef(null), u = y$1(a, O, Fe(), e.actions.setInputElement), [A, d$1] = S(e, (t) => [t.comboboxState, t.isTyping]), X = p$1(), G = o(() => {
		e.actions.onChange(null), e.state.optionsElement && (e.state.optionsElement.scrollTop = 0), e.actions.goToOption({ focus: c$3.Nothing });
	});
	m(([t, V], [P$2, N]) => {
		if (e.state.isTyping) return;
		let g = a.current;
		g && ((N === P.Open && V === P.Closed || t !== P$2) && (g.value = t), requestAnimationFrame(() => {
			if (e.state.isTyping || !g || d(g)) return;
			let { selectionStart: i, selectionEnd: M } = g;
			Math.abs((M != null ? M : 0) - (i != null ? i : 0)) === 0 && i === 0 && g.setSelectionRange(g.value.length, g.value.length);
		}));
	}, [
		useMemo(() => {
			var t;
			return typeof h == "function" && o$4.value !== void 0 ? (t = h(o$4.value)) != null ? t : "" : typeof o$4.value == "string" ? o$4.value : "";
		}, [o$4.value, h]),
		A,
		d$1
	]), m(([t], [V]) => {
		if (t === P.Open && V === P.Closed) {
			if (e.state.isTyping) return;
			let P = a.current;
			if (!P) return;
			let N = P.value, { selectionStart: g, selectionEnd: i, selectionDirection: M } = P;
			P.value = "", P.value = N, M !== null ? P.setSelectionRange(g, i, M) : P.setSelectionRange(g, i);
		}
	}, [A]);
	let x = useRef(!1), v = o(() => {
		x.current = !0;
	}), c = o(() => {
		X.nextFrame(() => {
			x.current = !1;
		});
	}), z = o((t) => {
		switch (e.actions.setIsTyping(!0), t.key) {
			case o$1.Enter:
				if (e.state.comboboxState !== P.Open || x.current) return;
				if (t.preventDefault(), t.stopPropagation(), e.selectors.activeOptionIndex(e.state) === null) {
					e.actions.closeCombobox();
					return;
				}
				e.actions.selectActiveOption(), o$4.mode === k.Single && e.actions.closeCombobox();
				break;
			case o$1.ArrowDown: return t.preventDefault(), t.stopPropagation(), u$1(e.state.comboboxState, {
				[P.Open]: () => e.actions.goToOption({ focus: c$3.Next }),
				[P.Closed]: () => e.actions.openCombobox()
			});
			case o$1.ArrowUp: return t.preventDefault(), t.stopPropagation(), u$1(e.state.comboboxState, {
				[P.Open]: () => e.actions.goToOption({ focus: c$3.Previous }),
				[P.Closed]: () => {
					flushSync(() => e.actions.openCombobox()), o$4.value || e.actions.goToOption({ focus: c$3.Last });
				}
			});
			case o$1.Home:
				if (e.state.comboboxState === P.Closed || t.shiftKey) break;
				return t.preventDefault(), t.stopPropagation(), e.actions.goToOption({ focus: c$3.First });
			case o$1.PageUp: return t.preventDefault(), t.stopPropagation(), e.actions.goToOption({ focus: c$3.First });
			case o$1.End:
				if (e.state.comboboxState === P.Closed || t.shiftKey) break;
				return t.preventDefault(), t.stopPropagation(), e.actions.goToOption({ focus: c$3.Last });
			case o$1.PageDown: return t.preventDefault(), t.stopPropagation(), e.actions.goToOption({ focus: c$3.Last });
			case o$1.Escape: return e.state.comboboxState !== P.Open ? void 0 : (t.preventDefault(), e.state.optionsElement && !o$4.optionsPropsRef.current.static && t.stopPropagation(), o$4.mode === k.Single && o$4.value === null && G(), e.actions.closeCombobox());
			case o$1.Tab:
				if (e.actions.setIsTyping(!1), e.state.comboboxState !== P.Open) return;
				o$4.mode === k.Single && e.state.activationTrigger !== _.Focus && e.actions.selectActiveOption(), e.actions.closeCombobox();
				break;
		}
	}), D = o((t) => {
		b?.(t), o$4.mode === k.Single && t.target.value === "" && G(), e.actions.openCombobox();
	}), K$2 = o((t) => {
		var P$3, N, g;
		let V = (P$3 = t.relatedTarget) != null ? P$3 : n$2.find((i) => i !== t.currentTarget);
		if (!((N = e.state.optionsElement) != null && N.contains(V)) && !((g = e.state.buttonElement) != null && g.contains(V)) && e.state.comboboxState === P.Open) return t.preventDefault(), o$4.mode === k.Single && o$4.value === null && G(), e.actions.closeCombobox();
	}), W = o((t) => {
		var P$4, N, g;
		let V = (P$4 = t.relatedTarget) != null ? P$4 : n$2.find((i) => i !== t.currentTarget);
		(N = e.state.buttonElement) != null && N.contains(V) || (g = e.state.optionsElement) != null && g.contains(V) || o$4.disabled || o$4.immediate && e.state.comboboxState !== P.Open && X.microTask(() => {
			flushSync(() => e.actions.openCombobox()), e.actions.setActivationTrigger(_.Focus);
		});
	}), S$3 = N$1(), j = w(), { isFocused: l, focusProps: k$4 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: f }), { isHovered: Y, hoverProps: s } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: p$5 }), U = S(e, (t) => t.optionsElement), $ = n$1({
		open: A === P.Open,
		disabled: p$5,
		invalid: o$4.invalid,
		hover: Y,
		focus: l,
		autofocus: f
	}), ne = V({
		ref: u,
		id: y,
		role: "combobox",
		type: n,
		"aria-controls": U == null ? void 0 : U.id,
		"aria-expanded": A === P.Open,
		"aria-activedescendant": S(e, e.selectors.activeDescendantId),
		"aria-labelledby": S$3,
		"aria-describedby": j,
		"aria-autocomplete": "list",
		defaultValue: (q = (ee = T.defaultValue) != null ? ee : o$4.defaultValue !== void 0 ? h == null ? void 0 : h(o$4.defaultValue) : null) != null ? q : o$4.defaultValue,
		disabled: p$5 || void 0,
		autoFocus: f,
		onCompositionStart: v,
		onCompositionEnd: c,
		onKeyDown: z,
		onChange: D,
		onFocus: W,
		onBlur: K$2
	}, k$4, s);
	return K()({
		ourProps: ne,
		theirProps: m$1,
		slot: $,
		defaultTag: Io,
		name: "Combobox.Input"
	});
}
var _o = "button";
function Fo(T, O) {
	let e$1 = p("Combobox.Button"), o$5 = te("Combobox.Button"), [E, R] = useState(null), y = y$1(O, R, e$1.actions.setButtonElement), b = r(), { id: h = `headlessui-combobox-button-${b}`, disabled: p$6 = o$5.disabled || !1, autoFocus: f = !1, ...n } = T, [m, a, u] = S(e$1, (l) => [
		l.comboboxState,
		l.inputElement,
		l.optionsElement
	]), A = v$1(a);
	L(m === P.Open, {
		trigger: E,
		action: useCallback((l) => {
			if (E != null && E.contains(l.target)) return S$1.Ignore;
			if (a != null && a.contains(l.target)) return S$1.Ignore;
			let k = l.target.closest("[role=\"option\"]:not([data-disabled])");
			return n$3(k) ? S$1.Select(k) : u != null && u.contains(l.target) ? S$1.Ignore : S$1.Close;
		}, [
			E,
			a,
			u
		]),
		close: e$1.actions.closeCombobox,
		select: e$1.actions.selectActiveOption
	});
	let X = o((l) => {
		switch (l.key) {
			case o$1.Space:
			case o$1.Enter:
				l.preventDefault(), l.stopPropagation(), e$1.state.comboboxState === P.Closed && flushSync(() => e$1.actions.openCombobox()), A();
				return;
			case o$1.ArrowDown:
				l.preventDefault(), l.stopPropagation(), e$1.state.comboboxState === P.Closed && (flushSync(() => e$1.actions.openCombobox()), e$1.state.dataRef.current.value || e$1.actions.goToOption({ focus: c$3.First })), A();
				return;
			case o$1.ArrowUp:
				l.preventDefault(), l.stopPropagation(), e$1.state.comboboxState === P.Closed && (flushSync(() => e$1.actions.openCombobox()), e$1.state.dataRef.current.value || e$1.actions.goToOption({ focus: c$3.Last })), A();
				return;
			case o$1.Escape:
				if (e$1.state.comboboxState !== P.Open) return;
				l.preventDefault(), e$1.state.optionsElement && !o$5.optionsPropsRef.current.static && l.stopPropagation(), flushSync(() => e$1.actions.closeCombobox()), A();
				return;
			default: return;
		}
	}), G = s$1(() => {
		e$1.state.comboboxState === P.Open ? e$1.actions.closeCombobox() : e$1.actions.openCombobox(), A();
	}), C = N$1([h]), { isFocusVisible: x, focusProps: v } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: f }), { isHovered: c, hoverProps: z } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: p$6 }), { pressed: D, pressProps: K$3 } = w$1({ disabled: p$6 }), W = n$1({
		open: m === P.Open,
		active: D || m === P.Open,
		disabled: p$6,
		invalid: o$5.invalid,
		value: o$5.value,
		hover: c,
		focus: x
	}), S$4 = V({
		ref: y,
		id: h,
		type: e(T, E),
		tabIndex: -1,
		"aria-haspopup": "listbox",
		"aria-controls": u == null ? void 0 : u.id,
		"aria-expanded": m === P.Open,
		"aria-labelledby": C,
		disabled: p$6 || void 0,
		autoFocus: f,
		onKeyDown: X
	}, G, v, z, K$3);
	return K()({
		ourProps: S$4,
		theirProps: n,
		slot: W,
		defaultTag: _o,
		name: "Combobox.Button"
	});
}
var Do = "div", So = A.RenderStrategy | A.Static;
function Mo(T, O) {
	var M, Ce, ve;
	let e = r(), { id: o$6 = `headlessui-combobox-options-${e}`, hold: E = !1, anchor: R, portal: y = !1, modal: b = !0, transition: h = !1, ...p$7 } = T, f = p("Combobox.Options"), n$7 = te("Combobox.Options"), m = ye(R);
	m && (y = !0);
	let [a, u] = Re(m), [A, d] = useState(null), X = Te(), G = y$1(O, m ? a : null, f.actions.setOptionsElement, d), [C, x, v, c, z] = S(f, (_) => [
		_.comboboxState,
		_.inputElement,
		_.buttonElement,
		_.optionsElement,
		_.activationTrigger
	]), D = u$2(x || v), K$4 = u$2(c), W = u$3(), [S$5, j] = N(h, A, W !== null ? (W & i.Open) === i.Open : C === P.Open);
	p$2(S$5, x, f.actions.closeCombobox);
	f$1(n$7.__demoMode ? !1 : b && C === P.Open, K$4);
	y$2(n$7.__demoMode ? !1 : b && C === P.Open, { allowed: useCallback(() => [
		x,
		v,
		c
	], [
		x,
		v,
		c
	]) });
	let s = S(f, f.selectors.didInputMove) ? !1 : S$5;
	n(() => {
		var _;
		n$7.optionsPropsRef.current.static = (_ = T.static) != null ? _ : !1;
	}, [n$7.optionsPropsRef, T.static]), n(() => {
		n$7.optionsPropsRef.current.hold = E;
	}, [n$7.optionsPropsRef, E]), F(C === P.Open, {
		container: c,
		accept(_) {
			return _.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : _.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
		},
		walk(_) {
			_.setAttribute("role", "none");
		}
	});
	let U = N$1([v == null ? void 0 : v.id]), $ = n$1({
		open: C === P.Open,
		option: void 0
	}), ne = o(() => {
		f.actions.setActivationTrigger(_.Pointer);
	}), be = o((_$1) => {
		_$1.preventDefault(), f.actions.setActivationTrigger(_.Pointer);
	}), ee = V(m ? X() : {}, {
		"aria-labelledby": U,
		role: "listbox",
		"aria-multiselectable": n$7.mode === k.Multi ? !0 : void 0,
		id: o$6,
		ref: G,
		style: {
			...p$7.style,
			...u,
			"--input-width": w$2(S$5, x, !0).width,
			"--button-width": w$2(S$5, v, !0).width
		},
		onWheel: z === _.Pointer ? void 0 : ne,
		onMouseDown: be,
		...x$1(j)
	}), q = S$5 && C === P.Closed && !T.static, t = u$6(q, (M = n$7.virtual) == null ? void 0 : M.options), V$2 = u$6(q, n$7.value), P$5 = useCallback((_) => n$7.compare(V$2, _), [n$7.compare, V$2]), N$2 = useMemo(() => {
		if (!n$7.virtual) return n$7;
		if (t === void 0) throw new Error("Missing `options` in virtual mode");
		return t !== n$7.virtual.options ? {
			...n$7,
			virtual: {
				...n$7.virtual,
				options: t
			}
		} : n$7;
	}, [
		n$7,
		t,
		(Ce = n$7.virtual) == null ? void 0 : Ce.options
	]);
	n$7.virtual && Object.assign(p$7, { children: React.createElement(de.Provider, { value: N$2 }, React.createElement(Eo, { slot: $ }, p$7.children)) });
	let g = K(), i$1 = useMemo(() => n$7.mode === k.Multi ? n$7 : {
		...n$7,
		isSelected: P$5
	}, [n$7, P$5]);
	return React.createElement(te$1, {
		enabled: y ? T.static || S$5 : !1,
		ownerDocument: D
	}, React.createElement(de.Provider, { value: i$1 }, g({
		ourProps: ee,
		theirProps: {
			...p$7,
			children: React.createElement(s$2, { freeze: q }, typeof p$7.children == "function" ? (ve = p$7.children) == null ? void 0 : ve.call(p$7, $) : p$7.children)
		},
		slot: $,
		defaultTag: Do,
		features: So,
		visible: s,
		name: "Combobox.Options"
	})));
}
var Lo = "div";
function Vo(T, O) {
	var l, k$5, Y;
	let e = te("Combobox.Option"), o$7 = p("Combobox.Option"), E = r(), { id: R = `headlessui-combobox-option-${E}`, value: y, disabled: b = (Y = (k$5 = (l = e.virtual) == null ? void 0 : l.disabled) == null ? void 0 : k$5.call(l, y)) != null ? Y : !1, order: h = null, ...p$8 } = T, [f] = S(o$7, (s) => [s.inputElement]), n$8 = v$1(f), m = S(o$7, useCallback((s) => o$7.selectors.isActive(s, y, R), [y, R])), a = e.isSelected(y), u = useRef(null), A = s({
		disabled: b,
		value: y,
		domRef: u,
		order: h
	}), d = useContext(Le), X = y$1(O, u, d ? d.measureElement : null), G = o(() => {
		o$7.actions.setIsTyping(!1), o$7.actions.onChange(y);
	});
	n(() => o$7.actions.registerOption(R, A), [A, R]);
	let C = S(o$7, useCallback((s) => o$7.selectors.shouldScrollIntoView(s, y, R), [y, R]));
	n(() => {
		if (C) return o$2().requestAnimationFrame(() => {
			var s, U;
			(U = (s = u.current) == null ? void 0 : s.scrollIntoView) == null || U.call(s, { block: "nearest" });
		});
	}, [C, u]);
	let x = o((s) => {
		s.preventDefault(), s.button === g.Left && (b || (G(), n$4() || requestAnimationFrame(() => n$8()), e.mode === k.Single && o$7.actions.closeCombobox()));
	}), v = o(() => {
		if (b) return o$7.actions.goToOption({ focus: c$3.Nothing });
		let s = e.calculateIndex(y);
		o$7.actions.goToOption({
			focus: c$3.Specific,
			idx: s
		});
	}), c = u$7(), z = o((s) => c.update(s)), D = o((s) => {
		if (!c.wasMoved(s) || b || m && o$7.state.activationTrigger === _.Pointer) return;
		let U = e.calculateIndex(y);
		o$7.actions.goToOption({
			focus: c$3.Specific,
			idx: U
		}, _.Pointer);
	}), K$5 = o((s) => {
		c.wasMoved(s) && (b || m && (e.optionsPropsRef.current.hold || o$7.state.activationTrigger === _.Pointer && o$7.actions.goToOption({ focus: c$3.Nothing })));
	}), W = n$1({
		active: m,
		focus: m,
		selected: a,
		disabled: b
	}), S$6 = {
		id: R,
		ref: X,
		role: "option",
		tabIndex: b === !0 ? void 0 : -1,
		"aria-disabled": b === !0 ? !0 : void 0,
		"aria-selected": a,
		disabled: void 0,
		onMouseDown: x,
		onFocus: v,
		onPointerEnter: z,
		onMouseEnter: z,
		onPointerMove: D,
		onMouseMove: D,
		onPointerLeave: K$5,
		onMouseLeave: K$5
	};
	return K()({
		ourProps: S$6,
		theirProps: p$8,
		slot: W,
		defaultTag: Lo,
		name: "Combobox.Option"
	});
}
var wo = Y(Ao), Bo = Y(Fo), ko = Y(Ro), No = Z, Uo = Y(Mo), Ho = Y(Vo), Ht = Object.assign(wo, {
	Input: ko,
	Button: Bo,
	Label: No,
	Options: Uo,
	Option: Ho
});
//#endregion
//#region app/components/base/select/index.tsx
var defaultItems = [
	{
		value: 1,
		name: "option1"
	},
	{
		value: 2,
		name: "option2"
	},
	{
		value: 3,
		name: "option3"
	},
	{
		value: 4,
		name: "option4"
	},
	{
		value: 5,
		name: "option5"
	},
	{
		value: 6,
		name: "option6"
	},
	{
		value: 7,
		name: "option7"
	}
];
var Select = ({ className, items = defaultItems, defaultValue = 1, disabled = false, onSelect, allowSearch = true, bgClassName = "bg-components-input-bg-normal", overlayClassName, optionClassName, renderOption }) => {
	const [query, setQuery] = useState("");
	const [open, setOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	useEffect(() => {
		let defaultSelect = null;
		defaultSelect = defaultValue && items.find((item) => item.value === defaultValue) || null;
		setSelectedItem(defaultSelect);
	}, [defaultValue, items]);
	const filteredItems = query === "" ? items : items.filter((item) => {
		return item.name.toLowerCase().includes(query.toLowerCase());
	});
	return /* @__PURE__ */ jsx(Ht, {
		as: "div",
		disabled,
		value: selectedItem,
		className,
		onChange: (value) => {
			if (!disabled) {
				setSelectedItem(value);
				setOpen(false);
				onSelect(value);
			}
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("relative"),
			children: [/* @__PURE__ */ jsxs("div", {
				className: "group text-text-secondary",
				children: [allowSearch ? /* @__PURE__ */ jsx(ko, {
					className: `w-full rounded-lg border-0 ${bgClassName} py-1.5 pl-3 pr-10 shadow-sm focus-visible:bg-state-base-hover focus-visible:outline-none group-hover:bg-state-base-hover sm:text-sm sm:leading-6 ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`,
					onChange: (event) => {
						if (!disabled) setQuery(event.target.value);
					},
					displayValue: (item) => item?.name
				}) : /* @__PURE__ */ jsx(Bo, {
					onClick: () => {
						if (!disabled) setOpen(!open);
					},
					className: cn(`flex h-9 w-full items-center rounded-lg border-0 ${bgClassName} py-1.5 pl-3 pr-10 shadow-sm focus-visible:bg-state-base-hover focus-visible:outline-none group-hover:bg-state-base-hover sm:text-sm sm:leading-6`, optionClassName),
					children: /* @__PURE__ */ jsx("div", {
						className: "w-0 grow truncate text-left",
						title: selectedItem?.name,
						children: selectedItem?.name
					})
				}), /* @__PURE__ */ jsx(Bo, {
					className: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
					onClick: () => {
						if (!disabled) setOpen(!open);
					},
					children: open ? /* @__PURE__ */ jsx(ForwardRef$1, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(ForwardRef$2, { className: "h-5 w-5" })
				})]
			}), filteredItems.length > 0 && open && /* @__PURE__ */ jsx(Uo, {
				className: `absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border-[0.5px] border-components-panel-border bg-components-panel-bg-blur px-1 py-1 text-base shadow-lg backdrop-blur-sm focus:outline-none sm:text-sm ${overlayClassName}`,
				children: filteredItems.map((item) => /* @__PURE__ */ jsx(Ho, {
					value: item,
					className: ({ active }) => cn("relative cursor-default select-none rounded-lg py-2 pl-3 pr-9 text-text-secondary hover:bg-state-base-hover", active ? "bg-state-base-hover" : "", optionClassName),
					children: ({ selected }) => /* @__PURE__ */ jsx(Fragment$1, { children: renderOption ? renderOption({
						item,
						selected
					}) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", {
						className: cn("block", selected && "font-normal"),
						children: item.name
					}), selected && /* @__PURE__ */ jsx("span", {
						className: cn("absolute inset-y-0 right-0 flex items-center pr-4 text-text-secondary"),
						children: /* @__PURE__ */ jsx(s7, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})
					})] }) })
				}, item.value))
			})]
		})
	});
};
var SimpleSelect = ({ className, wrapperClassName = "", renderTrigger, items = defaultItems, defaultValue = 1, disabled = false, onSelect, onOpenChange, placeholder, optionWrapClassName, optionClassName, hideChecked, notClearable, renderOption, isLoading = false }) => {
	const { t } = useTranslation();
	const localPlaceholder = placeholder || t("placeholder.select", { ns: "common" });
	const [selectedItem, setSelectedItem] = useState(null);
	useEffect(() => {
		if (!(selectedItem && items.some((item) => item.value === selectedItem.value))) {
			let defaultSelect = null;
			defaultSelect = items.find((item) => item.value === defaultValue) ?? null;
			setSelectedItem(defaultSelect);
		}
	}, [
		defaultValue,
		items,
		selectedItem
	]);
	return /* @__PURE__ */ jsx(Mo$1, {
		ref: useRef(null),
		value: selectedItem,
		onChange: (value) => {
			if (!disabled) {
				setSelectedItem(value);
				onSelect(value);
			}
		},
		children: ({ open }) => /* @__PURE__ */ jsxs("div", {
			className: cn("group/simple-select relative h-9", wrapperClassName),
			children: [
				renderTrigger && /* @__PURE__ */ jsx(Mt, {
					className: "w-full",
					children: renderTrigger(selectedItem, open)
				}),
				!renderTrigger && /* @__PURE__ */ jsxs(Mt, {
					onClick: () => {
						onOpenChange?.(open);
					},
					className: cn(`flex h-full w-full items-center rounded-lg border-0 bg-components-input-bg-normal pl-3 pr-10 focus-visible:bg-state-base-hover-alt focus-visible:outline-none group-hover/simple-select:bg-state-base-hover-alt sm:text-sm sm:leading-6 ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`, className),
					children: [/* @__PURE__ */ jsx("span", {
						className: cn("block truncate text-left text-components-input-text-filled system-sm-regular", !selectedItem?.name && "text-components-input-text-placeholder"),
						children: selectedItem?.name ?? localPlaceholder
					}), /* @__PURE__ */ jsx("span", {
						className: "absolute inset-y-0 right-0 flex items-center pr-2",
						children: isLoading ? /* @__PURE__ */ jsx(Um, { className: "h-3.5 w-3.5 animate-spin text-text-secondary" }) : selectedItem && !notClearable ? /* @__PURE__ */ jsx(ForwardRef, {
							onClick: (e) => {
								e.stopPropagation();
								setSelectedItem(null);
								onSelect({
									name: "",
									value: ""
								});
							},
							className: "h-4 w-4 cursor-pointer text-text-quaternary",
							"aria-hidden": "false"
						}) : open ? /* @__PURE__ */ jsx(ForwardRef$1, {
							className: "h-4 w-4 text-text-quaternary group-hover/simple-select:text-text-secondary",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ jsx(ForwardRef$2, {
							className: "h-4 w-4 text-text-quaternary group-hover/simple-select:text-text-secondary",
							"aria-hidden": "true"
						})
					})]
				}),
				!disabled && /* @__PURE__ */ jsx(Bt, {
					className: cn("absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur px-1 py-1 text-base shadow-lg backdrop-blur-sm focus:outline-none sm:text-sm", optionWrapClassName),
					children: items.map((item) => item.isGroup ? /* @__PURE__ */ jsx("div", {
						className: "select-none px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-text-tertiary",
						children: item.name
					}, item.value) : /* @__PURE__ */ jsx(It, {
						className: cn("relative cursor-pointer select-none rounded-lg py-2 pl-3 pr-9 text-text-secondary hover:bg-state-base-hover", optionClassName),
						value: item,
						disabled: item.disabled || disabled,
						children: ({ selected }) => /* @__PURE__ */ jsx(Fragment$1, { children: renderOption ? renderOption({
							item,
							selected
						}) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", {
							className: cn("block", selected && "font-normal"),
							children: item.name
						}), selected && !hideChecked && /* @__PURE__ */ jsx("span", {
							className: cn("absolute inset-y-0 right-0 flex items-center pr-2 text-text-accent"),
							children: /* @__PURE__ */ jsx(s7, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							})
						})] }) })
					}, item.value))
				})
			]
		})
	});
};
var PortalSelect = ({ value, onSelect, items, placeholder, installedValue, renderTrigger, triggerClassName, triggerClassNameFn, popupClassName, popupInnerClassName, readonly, hideChecked }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const localPlaceholder = placeholder || t("placeholder.select", { ns: "common" });
	const selectedItem = value ? items.find((item) => item.value === value) : void 0;
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-start",
		offset: 4,
		triggerPopupSameWidth: true,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => !readonly && setOpen((v) => !v),
			className: "w-full",
			children: renderTrigger ? renderTrigger(selectedItem) : /* @__PURE__ */ jsxs("div", {
				className: cn(`
                          group flex h-9 items-center justify-between rounded-lg border-0 bg-components-input-bg-normal px-2.5 text-sm hover:bg-state-base-hover-alt ${readonly ? "cursor-not-allowed" : "cursor-pointer"}
                        `, triggerClassName, triggerClassNameFn?.(open)),
				title: selectedItem?.name,
				children: [
					/* @__PURE__ */ jsx("span", {
						className: `
              grow truncate text-text-secondary
              ${!selectedItem?.name && "text-components-input-text-placeholder"}
            `,
						children: selectedItem?.name ?? localPlaceholder
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mx-0.5",
						children: !!(installedValue && selectedItem && selectedItem.value !== installedValue) && /* @__PURE__ */ jsxs(Badge, { children: [
							installedValue,
							" ",
							"->",
							" ",
							selectedItem.value,
							" "
						] })
					}),
					/* @__PURE__ */ jsx(ForwardRef$2, { className: "h-4 w-4 shrink-0 text-text-quaternary group-hover:text-text-secondary" })
				]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: `z-20 ${popupClassName}`,
			children: /* @__PURE__ */ jsx("div", {
				className: cn("max-h-60 overflow-auto rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg px-1 py-1 text-base shadow-lg focus:outline-none sm:text-sm", popupInnerClassName),
				children: items.map((item) => /* @__PURE__ */ jsxs("div", {
					className: `
                flex h-9 cursor-pointer items-center justify-between rounded-lg px-2.5 text-text-secondary hover:bg-state-base-hover
                ${item.value === value && "bg-state-base-hover"}
              `,
					title: item.name,
					onClick: () => {
						onSelect(item);
						setOpen(false);
					},
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "w-0 grow truncate",
							title: item.name,
							children: [/* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: item.name
							}), item.value === installedValue && /* @__PURE__ */ jsx(Badge, {
								uppercase: true,
								className: "ml-1 shrink-0",
								children: "INSTALLED"
							})]
						}),
						!hideChecked && item.value === value && /* @__PURE__ */ jsx(s7, { className: "h-4 w-4 shrink-0 text-text-accent" }),
						item.extra
					]
				}, item.value))
			})
		})]
	});
};
var select_default = React$1.memo(Select);
//#endregion
export { ForwardRef as a, F as i, SimpleSelect as n, ForwardRef$2 as o, select_default as r, PortalSelect as t };
