import { f as __commonJSMin } from "../index.js";
import { createContext, createElement, useContext, useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";
//#region node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/cjs/scheduler.production.js
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_scheduler_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	function push(heap, node) {
		var index = heap.length;
		heap.push(node);
		a: for (; 0 < index;) {
			var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
			if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
			else break a;
		}
	}
	function peek(heap) {
		return 0 === heap.length ? null : heap[0];
	}
	function pop(heap) {
		if (0 === heap.length) return null;
		var first = heap[0], last = heap.pop();
		if (last !== first) {
			heap[0] = last;
			a: for (var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;) {
				var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
				if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
				else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
				else break a;
			}
		}
		return first;
	}
	function compare(a, b) {
		var diff = a.sortIndex - b.sortIndex;
		return 0 !== diff ? diff : a.id - b.id;
	}
	exports.unstable_now = void 0;
	if ("object" === typeof performance && "function" === typeof performance.now) {
		var localPerformance = performance;
		exports.unstable_now = function() {
			return localPerformance.now();
		};
	} else {
		var localDate = Date, initialTime = localDate.now();
		exports.unstable_now = function() {
			return localDate.now() - initialTime;
		};
	}
	var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = !1, isHostCallbackScheduled = !1, isHostTimeoutScheduled = !1, needsPaint = !1, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
	function advanceTimers(currentTime) {
		for (var timer = peek(timerQueue); null !== timer;) {
			if (null === timer.callback) pop(timerQueue);
			else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
			else break;
			timer = peek(timerQueue);
		}
	}
	function handleTimeout(currentTime) {
		isHostTimeoutScheduled = !1;
		advanceTimers(currentTime);
		if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
		else {
			var firstTimer = peek(timerQueue);
			null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
		}
	}
	var isMessageLoopRunning = !1, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
	function shouldYieldToHost() {
		return needsPaint ? !0 : exports.unstable_now() - startTime < frameInterval ? !1 : !0;
	}
	function performWorkUntilDeadline() {
		needsPaint = !1;
		if (isMessageLoopRunning) {
			var currentTime = exports.unstable_now();
			startTime = currentTime;
			var hasMoreWork = !0;
			try {
				a: {
					isHostCallbackScheduled = !1;
					isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
					isPerformingWork = !0;
					var previousPriorityLevel = currentPriorityLevel;
					try {
						b: {
							advanceTimers(currentTime);
							for (currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());) {
								var callback = currentTask.callback;
								if ("function" === typeof callback) {
									currentTask.callback = null;
									currentPriorityLevel = currentTask.priorityLevel;
									var continuationCallback = callback(currentTask.expirationTime <= currentTime);
									currentTime = exports.unstable_now();
									if ("function" === typeof continuationCallback) {
										currentTask.callback = continuationCallback;
										advanceTimers(currentTime);
										hasMoreWork = !0;
										break b;
									}
									currentTask === peek(taskQueue) && pop(taskQueue);
									advanceTimers(currentTime);
								} else pop(taskQueue);
								currentTask = peek(taskQueue);
							}
							if (null !== currentTask) hasMoreWork = !0;
							else {
								var firstTimer = peek(timerQueue);
								null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
								hasMoreWork = !1;
							}
						}
						break a;
					} finally {
						currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
					}
					hasMoreWork = void 0;
				}
			} finally {
				hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
			}
		}
	}
	var schedulePerformWorkUntilDeadline;
	if ("function" === typeof localSetImmediate) schedulePerformWorkUntilDeadline = function() {
		localSetImmediate(performWorkUntilDeadline);
	};
	else if ("undefined" !== typeof MessageChannel) {
		var channel = new MessageChannel(), port = channel.port2;
		channel.port1.onmessage = performWorkUntilDeadline;
		schedulePerformWorkUntilDeadline = function() {
			port.postMessage(null);
		};
	} else schedulePerformWorkUntilDeadline = function() {
		localSetTimeout(performWorkUntilDeadline, 0);
	};
	function requestHostTimeout(callback, ms) {
		taskTimeoutID = localSetTimeout(function() {
			callback(exports.unstable_now());
		}, ms);
	}
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;
	exports.unstable_cancelCallback = function(task) {
		task.callback = null;
	};
	exports.unstable_forceFrameRate = function(fps) {
		0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
	};
	exports.unstable_getCurrentPriorityLevel = function() {
		return currentPriorityLevel;
	};
	exports.unstable_next = function(eventHandler) {
		switch (currentPriorityLevel) {
			case 1:
			case 2:
			case 3:
				var priorityLevel = 3;
				break;
			default: priorityLevel = currentPriorityLevel;
		}
		var previousPriorityLevel = currentPriorityLevel;
		currentPriorityLevel = priorityLevel;
		try {
			return eventHandler();
		} finally {
			currentPriorityLevel = previousPriorityLevel;
		}
	};
	exports.unstable_requestPaint = function() {
		needsPaint = !0;
	};
	exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
		switch (priorityLevel) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: priorityLevel = 3;
		}
		var previousPriorityLevel = currentPriorityLevel;
		currentPriorityLevel = priorityLevel;
		try {
			return eventHandler();
		} finally {
			currentPriorityLevel = previousPriorityLevel;
		}
	};
	exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
		var currentTime = exports.unstable_now();
		"object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
		switch (priorityLevel) {
			case 1:
				var timeout = -1;
				break;
			case 2:
				timeout = 250;
				break;
			case 5:
				timeout = 1073741823;
				break;
			case 4:
				timeout = 1e4;
				break;
			default: timeout = 5e3;
		}
		timeout = options + timeout;
		priorityLevel = {
			id: taskIdCounter++,
			callback,
			priorityLevel,
			startTime: options,
			expirationTime: timeout,
			sortIndex: -1
		};
		options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline())));
		return priorityLevel;
	};
	exports.unstable_shouldYield = shouldYieldToHost;
	exports.unstable_wrapCallback = function(callback) {
		var parentPriorityLevel = currentPriorityLevel;
		return function() {
			var previousPriorityLevel = currentPriorityLevel;
			currentPriorityLevel = parentPriorityLevel;
			try {
				return callback.apply(this, arguments);
			} finally {
				currentPriorityLevel = previousPriorityLevel;
			}
		};
	};
}));
//#endregion
//#region node_modules/.pnpm/use-context-selector@2.0.0_react@19.2.4_scheduler@0.27.0/node_modules/use-context-selector/dist/index.js
var import_scheduler = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_scheduler_production();
})))();
var CONTEXT_VALUE = Symbol();
var ORIGINAL_PROVIDER = Symbol();
var useIsomorphicLayoutEffect = typeof window === "undefined" || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent) ? useEffect : useLayoutEffect;
var runWithNormalPriority = import_scheduler.unstable_runWithPriority ? (fn) => {
	try {
		(0, import_scheduler.unstable_runWithPriority)(import_scheduler.unstable_NormalPriority, fn);
	} catch (e) {
		if (e.message === "Not implemented.") fn();
		else throw e;
	}
} : (fn) => fn();
var createProvider = (ProviderOrig) => {
	const ContextProvider = ({ value, children }) => {
		const valueRef = useRef(value);
		const versionRef = useRef(0);
		const [resolve, setResolve] = useState(null);
		if (resolve) {
			resolve(value);
			setResolve(null);
		}
		const contextValue = useRef();
		if (!contextValue.current) {
			const listeners = /* @__PURE__ */ new Set();
			const update = (fn, options) => {
				versionRef.current += 1;
				const action = { n: versionRef.current };
				if (options === null || options === void 0 ? void 0 : options.suspense) {
					action.n *= -1;
					action.p = new Promise((r) => {
						setResolve(() => (v) => {
							action.v = v;
							delete action.p;
							r(v);
						});
					});
				}
				listeners.forEach((listener) => listener(action));
				fn();
			};
			contextValue.current = { [CONTEXT_VALUE]: {
				v: valueRef,
				n: versionRef,
				l: listeners,
				u: update
			} };
		}
		useIsomorphicLayoutEffect(() => {
			valueRef.current = value;
			versionRef.current += 1;
			runWithNormalPriority(() => {
				contextValue.current[CONTEXT_VALUE].l.forEach((listener) => {
					listener({
						n: versionRef.current,
						v: value
					});
				});
			});
		}, [value]);
		return createElement(ProviderOrig, { value: contextValue.current }, children);
	};
	return ContextProvider;
};
var identity = (x) => x;
/**
* This creates a special context for `useContextSelector`.
*
* @example
* import { createContext } from 'use-context-selector';
*
* const PersonContext = createContext({ firstName: '', familyName: '' });
*/
function createContext$1(defaultValue) {
	const context = createContext({ [CONTEXT_VALUE]: {
		v: { current: defaultValue },
		n: { current: -1 },
		l: /* @__PURE__ */ new Set(),
		u: (f) => f()
	} });
	context[ORIGINAL_PROVIDER] = context.Provider;
	context.Provider = createProvider(context.Provider);
	delete context.Consumer;
	return context;
}
/**
* This hook returns context selected value by selector.
*
* It will only accept context created by `createContext`.
* It will trigger re-render if only the selected value is referentially changed.
*
* The selector should return referentially equal result for same input for better performance.
*
* @example
* import { useContextSelector } from 'use-context-selector';
*
* const firstName = useContextSelector(PersonContext, (state) => state.firstName);
*/
function useContextSelector(context, selector) {
	const { v: { current: value }, n: { current: version }, l: listeners } = useContext(context)[CONTEXT_VALUE];
	const selected = selector(value);
	const [state, dispatch] = useReducer((prev, action) => {
		if (!action) return [value, selected];
		if ("p" in action) throw action.p;
		if (action.n === version) {
			if (Object.is(prev[1], selected)) return prev;
			return [value, selected];
		}
		try {
			if ("v" in action) {
				if (Object.is(prev[0], action.v)) return prev;
				const nextSelected = selector(action.v);
				if (Object.is(prev[1], nextSelected)) return prev;
				return [action.v, nextSelected];
			}
		} catch (_e) {}
		return [...prev];
	}, [value, selected]);
	if (!Object.is(state[1], selected)) dispatch();
	useIsomorphicLayoutEffect(() => {
		listeners.add(dispatch);
		return () => {
			listeners.delete(dispatch);
		};
	}, [listeners]);
	return state[1];
}
/**
* This hook returns the entire context value.
* Use this instead of React.useContext for consistent behavior.
*
* @example
* import { useContext } from 'use-context-selector';
*
* const person = useContext(PersonContext);
*/
function useContext$1(context) {
	return useContextSelector(context, identity);
}
//#endregion
export { useContext$1 as n, useContextSelector as r, createContext$1 as t };
