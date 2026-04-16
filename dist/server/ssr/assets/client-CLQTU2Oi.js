import { D as MARKETPLACE_API_PREFIX, a as API_PREFIX, dt as isClient, o as APP_VERSION, w as IS_MARKETPLACE } from "./config-Dopncj5R.js";
import { p as request } from "./base-BuKAg6Le.js";
import { x as skipToken } from "./utils-BfPR7I0w.js";
//#region node_modules/.pnpm/@orpc+shared@1.13.9/node_modules/@orpc/shared/dist/index.mjs
function resolveMaybeOptionalOptions(rest) {
	return rest[0] ?? {};
}
function toArray(value) {
	return Array.isArray(value) ? value : value === void 0 || value === null ? [] : [value];
}
var ORPC_NAME = "orpc";
var ORPC_SHARED_PACKAGE_NAME = "@orpc/shared";
var ORPC_SHARED_PACKAGE_VERSION = "1.13.9";
var AbortError = class extends Error {
	constructor(...rest) {
		super(...rest);
		this.name = "AbortError";
	}
};
function once(fn) {
	let cached;
	return () => {
		if (cached) return cached.result;
		const result = fn();
		cached = { result };
		return result;
	};
}
function sequential(fn) {
	let lastOperationPromise = Promise.resolve();
	return (...args) => {
		return lastOperationPromise = lastOperationPromise.catch(() => {}).then(() => {
			return fn(...args);
		});
	};
}
var SPAN_ERROR_STATUS = 2;
var GLOBAL_OTEL_CONFIG_KEY = `__${ORPC_SHARED_PACKAGE_NAME}@${ORPC_SHARED_PACKAGE_VERSION}/otel/config__`;
function getGlobalOtelConfig() {
	return globalThis[GLOBAL_OTEL_CONFIG_KEY];
}
function startSpan(name, options = {}, context) {
	return (getGlobalOtelConfig()?.tracer)?.startSpan(name, options, context);
}
function setSpanError(span, error, options = {}) {
	if (!span) return;
	const exception = toOtelException(error);
	span.recordException(exception);
	if (!options.signal?.aborted || options.signal.reason !== error) span.setStatus({
		code: SPAN_ERROR_STATUS,
		message: exception.message
	});
}
function toOtelException(error) {
	if (error instanceof Error) {
		const exception = {
			message: error.message,
			name: error.name,
			stack: error.stack
		};
		if ("code" in error && (typeof error.code === "string" || typeof error.code === "number")) exception.code = error.code;
		return exception;
	}
	return { message: String(error) };
}
async function runWithSpan({ name, context, ...options }, fn) {
	const tracer = getGlobalOtelConfig()?.tracer;
	if (!tracer) return fn();
	const callback = async (span) => {
		try {
			return await fn(span);
		} catch (e) {
			setSpanError(span, e, options);
			throw e;
		} finally {
			span.end();
		}
	};
	if (context) return tracer.startActiveSpan(name, options, context, callback);
	else return tracer.startActiveSpan(name, options, callback);
}
async function runInSpanContext(span, fn) {
	const otelConfig = getGlobalOtelConfig();
	if (!span || !otelConfig) return fn();
	const ctx = otelConfig.trace.setSpan(otelConfig.context.active(), span);
	return otelConfig.context.with(ctx, fn);
}
function isAsyncIteratorObject(maybe) {
	if (!maybe || typeof maybe !== "object") return false;
	return "next" in maybe && typeof maybe.next === "function" && Symbol.asyncIterator in maybe && typeof maybe[Symbol.asyncIterator] === "function";
}
var asyncDisposeSymbol = Symbol.asyncDispose ?? Symbol.for("asyncDispose");
var AsyncIteratorClass = class {
	#isDone = false;
	#isExecuteComplete = false;
	#cleanup;
	#next;
	constructor(next, cleanup) {
		this.#cleanup = cleanup;
		this.#next = sequential(async () => {
			if (this.#isDone) return {
				done: true,
				value: void 0
			};
			try {
				const result = await next();
				if (result.done) this.#isDone = true;
				return result;
			} catch (err) {
				this.#isDone = true;
				throw err;
			} finally {
				if (this.#isDone && !this.#isExecuteComplete) {
					this.#isExecuteComplete = true;
					await this.#cleanup("next");
				}
			}
		});
	}
	next() {
		return this.#next();
	}
	async return(value) {
		this.#isDone = true;
		if (!this.#isExecuteComplete) {
			this.#isExecuteComplete = true;
			await this.#cleanup("return");
		}
		return {
			done: true,
			value
		};
	}
	async throw(err) {
		this.#isDone = true;
		if (!this.#isExecuteComplete) {
			this.#isExecuteComplete = true;
			await this.#cleanup("throw");
		}
		throw err;
	}
	/**
	* asyncDispose symbol only available in esnext, we should fallback to Symbol.for('asyncDispose')
	*/
	async [asyncDisposeSymbol]() {
		this.#isDone = true;
		if (!this.#isExecuteComplete) {
			this.#isExecuteComplete = true;
			await this.#cleanup("dispose");
		}
	}
	[Symbol.asyncIterator]() {
		return this;
	}
};
function asyncIteratorWithSpan({ name, ...options }, iterator) {
	let span;
	return new AsyncIteratorClass(async () => {
		span ??= startSpan(name);
		try {
			const result = await runInSpanContext(span, () => iterator.next());
			span?.addEvent(result.done ? "completed" : "yielded");
			return result;
		} catch (err) {
			setSpanError(span, err, options);
			throw err;
		}
	}, async (reason) => {
		try {
			if (reason !== "next") await runInSpanContext(span, () => iterator.return?.());
		} catch (err) {
			setSpanError(span, err, options);
			throw err;
		} finally {
			span?.end();
		}
	});
}
function onError(callback) {
	return async (options, ...rest) => {
		try {
			return await options.next();
		} catch (error) {
			await callback(error, options, ...rest);
			throw error;
		}
	};
}
function intercept(interceptors, options, main) {
	const next = (options2, index) => {
		const interceptor = interceptors[index];
		if (!interceptor) return main(options2);
		return interceptor({
			...options2,
			next: (newOptions = options2) => next(newOptions, index + 1)
		});
	};
	return next(options, 0);
}
function parseEmptyableJSON(text) {
	if (!text) return;
	return JSON.parse(text);
}
function stringifyJSON(value) {
	return JSON.stringify(value);
}
function getConstructor(value) {
	if (!isTypescriptObject(value)) return null;
	return Object.getPrototypeOf(value)?.constructor;
}
function isObject(value) {
	if (!value || typeof value !== "object") return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || !proto || !proto.constructor;
}
function isTypescriptObject(value) {
	return !!value && (typeof value === "object" || typeof value === "function");
}
function get(object, path) {
	let current = object;
	for (const key of path) {
		if (!isTypescriptObject(current)) return;
		current = current[key];
	}
	return current;
}
var NullProtoObj = /* @__PURE__ */ (() => {
	const e = function() {};
	e.prototype = /* @__PURE__ */ Object.create(null);
	Object.freeze(e.prototype);
	return e;
})();
function value(value2, ...args) {
	if (typeof value2 === "function") return value2(...args);
	return value2;
}
function preventNativeAwait(target) {
	return new Proxy(target, { get(target2, prop, receiver) {
		const value2 = Reflect.get(target2, prop, receiver);
		if (prop !== "then" || typeof value2 !== "function") return value2;
		return new Proxy(value2, { apply(targetFn, thisArg, args) {
			if (args.length !== 2 || args.some((arg) => !isNativeFunction(arg))) return Reflect.apply(targetFn, thisArg, args);
			let shouldOmit = true;
			args[0].call(thisArg, preventNativeAwait(new Proxy(target2, { get: (target3, prop2, receiver2) => {
				if (shouldOmit && prop2 === "then") {
					shouldOmit = false;
					return;
				}
				return Reflect.get(target3, prop2, receiver2);
			} })));
		} });
	} });
}
var NATIVE_FUNCTION_REGEX = /^\s*function\s*\(\)\s*\{\s*\[native code\]\s*\}\s*$/;
function isNativeFunction(fn) {
	return typeof fn === "function" && NATIVE_FUNCTION_REGEX.test(fn.toString());
}
function tryDecodeURIComponent(value) {
	try {
		return decodeURIComponent(value);
	} catch {
		return value;
	}
}
//#endregion
//#region node_modules/.pnpm/@orpc+client@1.13.9/node_modules/@orpc/client/dist/shared/client.Bgxs8zrP.mjs
var ORPC_CLIENT_PACKAGE_NAME = "@orpc/client";
var ORPC_CLIENT_PACKAGE_VERSION = "1.13.9";
var COMMON_ORPC_ERROR_DEFS = {
	BAD_REQUEST: {
		status: 400,
		message: "Bad Request"
	},
	UNAUTHORIZED: {
		status: 401,
		message: "Unauthorized"
	},
	FORBIDDEN: {
		status: 403,
		message: "Forbidden"
	},
	NOT_FOUND: {
		status: 404,
		message: "Not Found"
	},
	METHOD_NOT_SUPPORTED: {
		status: 405,
		message: "Method Not Supported"
	},
	NOT_ACCEPTABLE: {
		status: 406,
		message: "Not Acceptable"
	},
	TIMEOUT: {
		status: 408,
		message: "Request Timeout"
	},
	CONFLICT: {
		status: 409,
		message: "Conflict"
	},
	PRECONDITION_FAILED: {
		status: 412,
		message: "Precondition Failed"
	},
	PAYLOAD_TOO_LARGE: {
		status: 413,
		message: "Payload Too Large"
	},
	UNSUPPORTED_MEDIA_TYPE: {
		status: 415,
		message: "Unsupported Media Type"
	},
	UNPROCESSABLE_CONTENT: {
		status: 422,
		message: "Unprocessable Content"
	},
	TOO_MANY_REQUESTS: {
		status: 429,
		message: "Too Many Requests"
	},
	CLIENT_CLOSED_REQUEST: {
		status: 499,
		message: "Client Closed Request"
	},
	INTERNAL_SERVER_ERROR: {
		status: 500,
		message: "Internal Server Error"
	},
	NOT_IMPLEMENTED: {
		status: 501,
		message: "Not Implemented"
	},
	BAD_GATEWAY: {
		status: 502,
		message: "Bad Gateway"
	},
	SERVICE_UNAVAILABLE: {
		status: 503,
		message: "Service Unavailable"
	},
	GATEWAY_TIMEOUT: {
		status: 504,
		message: "Gateway Timeout"
	}
};
function fallbackORPCErrorStatus(code, status) {
	return status ?? COMMON_ORPC_ERROR_DEFS[code]?.status ?? 500;
}
function fallbackORPCErrorMessage(code, message) {
	return message || COMMON_ORPC_ERROR_DEFS[code]?.message || code;
}
var GLOBAL_ORPC_ERROR_CONSTRUCTORS_SYMBOL = Symbol.for(`__${ORPC_CLIENT_PACKAGE_NAME}@${ORPC_CLIENT_PACKAGE_VERSION}/error/ORPC_ERROR_CONSTRUCTORS__`);
globalThis[GLOBAL_ORPC_ERROR_CONSTRUCTORS_SYMBOL] ??= /* @__PURE__ */ new WeakSet();
var globalORPCErrorConstructors = globalThis[GLOBAL_ORPC_ERROR_CONSTRUCTORS_SYMBOL];
var ORPCError = class extends Error {
	defined;
	code;
	status;
	data;
	constructor(code, ...rest) {
		const options = resolveMaybeOptionalOptions(rest);
		if (options.status !== void 0 && !isORPCErrorStatus(options.status)) throw new Error("[ORPCError] Invalid error status code.");
		const message = fallbackORPCErrorMessage(code, options.message);
		super(message, options);
		this.code = code;
		this.status = fallbackORPCErrorStatus(code, options.status);
		this.defined = options.defined ?? false;
		this.data = options.data;
	}
	toJSON() {
		return {
			defined: this.defined,
			code: this.code,
			status: this.status,
			message: this.message,
			data: this.data
		};
	}
	/**
	* Workaround for Next.js where different contexts use separate
	* dependency graphs, causing multiple ORPCError constructors existing and breaking
	* `instanceof` checks across contexts.
	*
	* This is particularly problematic with "Optimized SSR", where orpc-client
	* executes in one context but is invoked from another. When an error is thrown
	* in the execution context, `instanceof ORPCError` checks fail in the
	* invocation context due to separate class constructors.
	*
	* @todo Remove this and related code if Next.js resolves the multiple dependency graph issue.
	*/
	static [Symbol.hasInstance](instance) {
		if (globalORPCErrorConstructors.has(this)) {
			const constructor = getConstructor(instance);
			if (constructor && globalORPCErrorConstructors.has(constructor)) return true;
		}
		return super[Symbol.hasInstance](instance);
	}
};
globalORPCErrorConstructors.add(ORPCError);
function toORPCError(error) {
	return error instanceof ORPCError ? error : new ORPCError("INTERNAL_SERVER_ERROR", {
		message: "Internal server error",
		cause: error
	});
}
function isORPCErrorStatus(status) {
	return status < 200 || status >= 400;
}
function isORPCErrorJson(json) {
	if (!isObject(json)) return false;
	const validKeys = [
		"defined",
		"code",
		"status",
		"message",
		"data"
	];
	if (Object.keys(json).some((k) => !validKeys.includes(k))) return false;
	return "defined" in json && typeof json.defined === "boolean" && "code" in json && typeof json.code === "string" && "status" in json && typeof json.status === "number" && isORPCErrorStatus(json.status) && "message" in json && typeof json.message === "string";
}
function createORPCErrorFromJson(json, options = {}) {
	return new ORPCError(json.code, {
		...options,
		...json
	});
}
//#endregion
//#region node_modules/.pnpm/@orpc+standard-server@1.13.9/node_modules/@orpc/standard-server/dist/index.mjs
var EventEncoderError = class extends TypeError {};
var EventDecoderError = class extends TypeError {};
var ErrorEvent = class extends Error {
	data;
	constructor(options) {
		super(options?.message ?? "An error event was received", options);
		this.data = options?.data;
	}
};
function decodeEventMessage(encoded) {
	const lines = encoded.replace(/\n+$/, "").split(/\n/);
	const message = {
		data: void 0,
		event: void 0,
		id: void 0,
		retry: void 0,
		comments: []
	};
	for (const line of lines) {
		const index = line.indexOf(":");
		const key = index === -1 ? line : line.slice(0, index);
		const value = index === -1 ? "" : line.slice(index + 1).replace(/^\s/, "");
		if (index === 0) message.comments.push(value);
		else if (key === "data") {
			message.data ??= "";
			message.data += `${value}
`;
		} else if (key === "event") message.event = value;
		else if (key === "id") message.id = value;
		else if (key === "retry") {
			const maybeInteger = Number.parseInt(value);
			if (Number.isInteger(maybeInteger) && maybeInteger >= 0 && maybeInteger.toString() === value) message.retry = maybeInteger;
		}
	}
	message.data = message.data?.replace(/\n$/, "");
	return message;
}
var EventDecoder = class {
	constructor(options = {}) {
		this.options = options;
	}
	incomplete = "";
	feed(chunk) {
		this.incomplete += chunk;
		const lastCompleteIndex = this.incomplete.lastIndexOf("\n\n");
		if (lastCompleteIndex === -1) return;
		const completes = this.incomplete.slice(0, lastCompleteIndex).split(/\n\n/);
		this.incomplete = this.incomplete.slice(lastCompleteIndex + 2);
		for (const encoded of completes) {
			const message = decodeEventMessage(`${encoded}

`);
			if (this.options.onEvent) this.options.onEvent(message);
		}
	}
	end() {
		if (this.incomplete) throw new EventDecoderError("Event Iterator ended before complete");
	}
};
var EventDecoderStream = class extends TransformStream {
	constructor() {
		let decoder;
		super({
			start(controller) {
				decoder = new EventDecoder({ onEvent: (event) => {
					controller.enqueue(event);
				} });
			},
			transform(chunk) {
				decoder.feed(chunk);
			},
			flush() {
				decoder.end();
			}
		});
	}
};
function assertEventId(id) {
	if (id.includes("\n")) throw new EventEncoderError("Event's id must not contain a newline character");
}
function assertEventName(event) {
	if (event.includes("\n")) throw new EventEncoderError("Event's event must not contain a newline character");
}
function assertEventRetry(retry) {
	if (!Number.isInteger(retry) || retry < 0) throw new EventEncoderError("Event's retry must be a integer and >= 0");
}
function assertEventComment(comment) {
	if (comment.includes("\n")) throw new EventEncoderError("Event's comment must not contain a newline character");
}
function encodeEventData(data) {
	const lines = data?.split(/\n/) ?? [];
	let output = "";
	for (const line of lines) output += `data: ${line}
`;
	return output;
}
function encodeEventComments(comments) {
	let output = "";
	for (const comment of comments ?? []) {
		assertEventComment(comment);
		output += `: ${comment}
`;
	}
	return output;
}
function encodeEventMessage(message) {
	let output = "";
	output += encodeEventComments(message.comments);
	if (message.event !== void 0) {
		assertEventName(message.event);
		output += `event: ${message.event}
`;
	}
	if (message.retry !== void 0) {
		assertEventRetry(message.retry);
		output += `retry: ${message.retry}
`;
	}
	if (message.id !== void 0) {
		assertEventId(message.id);
		output += `id: ${message.id}
`;
	}
	output += encodeEventData(message.data);
	output += "\n";
	return output;
}
var EVENT_SOURCE_META_SYMBOL = Symbol("ORPC_EVENT_SOURCE_META");
function withEventMeta(container, meta) {
	if (meta.id === void 0 && meta.retry === void 0 && !meta.comments?.length) return container;
	if (meta.id !== void 0) assertEventId(meta.id);
	if (meta.retry !== void 0) assertEventRetry(meta.retry);
	if (meta.comments !== void 0) for (const comment of meta.comments) assertEventComment(comment);
	return new Proxy(container, { get(target, prop, receiver) {
		if (prop === EVENT_SOURCE_META_SYMBOL) return meta;
		return Reflect.get(target, prop, receiver);
	} });
}
function getEventMeta(container) {
	return isTypescriptObject(container) ? Reflect.get(container, EVENT_SOURCE_META_SYMBOL) : void 0;
}
function generateContentDisposition(filename) {
	return `inline; filename="${filename.replace(/"/g, "\\\"")}"; filename*=utf-8''${encodeURIComponent(filename).replace(/['()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`).replace(/%(7C|60|5E)/g, (str, hex) => String.fromCharCode(Number.parseInt(hex, 16)))}`;
}
function getFilenameFromContentDisposition(contentDisposition) {
	const encodedFilenameStarMatch = contentDisposition.match(/filename\*=(UTF-8'')?([^;]*)/i);
	if (encodedFilenameStarMatch && typeof encodedFilenameStarMatch[2] === "string") return tryDecodeURIComponent(encodedFilenameStarMatch[2]);
	const encodedFilenameMatch = contentDisposition.match(/filename="((?:\\"|[^"])*)"/i);
	if (encodedFilenameMatch && typeof encodedFilenameMatch[1] === "string") return encodedFilenameMatch[1].replace(/\\"/g, "\"");
}
function mergeStandardHeaders(a, b) {
	const merged = { ...a };
	for (const key in b) if (Array.isArray(b[key])) merged[key] = [...toArray(merged[key]), ...b[key]];
	else if (b[key] !== void 0) if (Array.isArray(merged[key])) merged[key] = [...merged[key], b[key]];
	else if (merged[key] !== void 0) merged[key] = [merged[key], b[key]];
	else merged[key] = b[key];
	return merged;
}
//#endregion
//#region node_modules/.pnpm/@orpc+client@1.13.9/node_modules/@orpc/client/dist/shared/client.BLtwTQUg.mjs
function mapEventIterator(iterator, maps) {
	const mapError = async (error) => {
		let mappedError = await maps.error(error);
		if (mappedError !== error) {
			const meta = getEventMeta(error);
			if (meta && isTypescriptObject(mappedError)) mappedError = withEventMeta(mappedError, meta);
		}
		return mappedError;
	};
	return new AsyncIteratorClass(async () => {
		const { done, value } = await (async () => {
			try {
				return await iterator.next();
			} catch (error) {
				throw await mapError(error);
			}
		})();
		let mappedValue = await maps.value(value, done);
		if (mappedValue !== value) {
			const meta = getEventMeta(value);
			if (meta && isTypescriptObject(mappedValue)) mappedValue = withEventMeta(mappedValue, meta);
		}
		return {
			done,
			value: mappedValue
		};
	}, async () => {
		try {
			await iterator.return?.();
		} catch (error) {
			throw await mapError(error);
		}
	});
}
//#endregion
//#region node_modules/.pnpm/@orpc+client@1.13.9/node_modules/@orpc/client/dist/index.mjs
function resolveFriendlyClientOptions(options) {
	return {
		...options,
		context: options.context ?? {}
	};
}
function createORPCClient(link, options = {}) {
	const path = options.path ?? [];
	const procedureClient = async (...[input, options2 = {}]) => {
		return await link.call(path, input, resolveFriendlyClientOptions(options2));
	};
	return preventNativeAwait(new Proxy(procedureClient, { get(target, key) {
		if (typeof key !== "string") return Reflect.get(target, key);
		return createORPCClient(link, {
			...options,
			path: [...path, key]
		});
	} }));
}
//#endregion
//#region node_modules/.pnpm/@orpc+standard-server-fetch@1.13.9/node_modules/@orpc/standard-server-fetch/dist/index.mjs
function toEventIterator(stream, options = {}) {
	const reader = (stream?.pipeThrough(new TextDecoderStream()).pipeThrough(new EventDecoderStream()))?.getReader();
	let span;
	let isCancelled = false;
	return new AsyncIteratorClass(async () => {
		span ??= startSpan("consume_event_iterator_stream");
		try {
			while (true) {
				if (reader === void 0) return {
					done: true,
					value: void 0
				};
				const { done, value } = await runInSpanContext(span, () => reader.read());
				if (done) {
					if (isCancelled) throw new AbortError("Stream was cancelled");
					return {
						done: true,
						value: void 0
					};
				}
				switch (value.event) {
					case "message": {
						let message = parseEmptyableJSON(value.data);
						if (isTypescriptObject(message)) message = withEventMeta(message, value);
						span?.addEvent("message");
						return {
							done: false,
							value: message
						};
					}
					case "error": {
						let error = new ErrorEvent({ data: parseEmptyableJSON(value.data) });
						error = withEventMeta(error, value);
						span?.addEvent("error");
						throw error;
					}
					case "done": {
						let done2 = parseEmptyableJSON(value.data);
						if (isTypescriptObject(done2)) done2 = withEventMeta(done2, value);
						span?.addEvent("done");
						return {
							done: true,
							value: done2
						};
					}
					default: span?.addEvent("maybe_keepalive");
				}
			}
		} catch (e) {
			if (!(e instanceof ErrorEvent)) setSpanError(span, e, options);
			throw e;
		}
	}, async (reason) => {
		try {
			if (reason !== "next") {
				isCancelled = true;
				span?.addEvent("cancelled");
			}
			await runInSpanContext(span, () => reader?.cancel());
		} catch (e) {
			setSpanError(span, e, options);
			throw e;
		} finally {
			span?.end();
		}
	});
}
function toEventStream(iterator, options = {}) {
	const keepAliveEnabled = options.eventIteratorKeepAliveEnabled ?? true;
	const keepAliveInterval = options.eventIteratorKeepAliveInterval ?? 5e3;
	const keepAliveComment = options.eventIteratorKeepAliveComment ?? "";
	const initialCommentEnabled = options.eventIteratorInitialCommentEnabled ?? true;
	const initialComment = options.eventIteratorInitialComment ?? "";
	let cancelled = false;
	let timeout;
	let span;
	return new ReadableStream({
		start(controller) {
			span = startSpan("stream_event_iterator");
			if (initialCommentEnabled) controller.enqueue(encodeEventMessage({ comments: [initialComment] }));
		},
		async pull(controller) {
			try {
				if (keepAliveEnabled) timeout = setInterval(() => {
					controller.enqueue(encodeEventMessage({ comments: [keepAliveComment] }));
					span?.addEvent("keepalive");
				}, keepAliveInterval);
				const value = await runInSpanContext(span, () => iterator.next());
				clearInterval(timeout);
				if (cancelled) return;
				const meta = getEventMeta(value.value);
				if (!value.done || value.value !== void 0 || meta !== void 0) {
					const event = value.done ? "done" : "message";
					controller.enqueue(encodeEventMessage({
						...meta,
						event,
						data: stringifyJSON(value.value)
					}));
					span?.addEvent(event);
				}
				if (value.done) {
					controller.close();
					span?.end();
				}
			} catch (err) {
				clearInterval(timeout);
				if (cancelled) return;
				if (err instanceof ErrorEvent) {
					controller.enqueue(encodeEventMessage({
						...getEventMeta(err),
						event: "error",
						data: stringifyJSON(err.data)
					}));
					span?.addEvent("error");
					controller.close();
				} else {
					setSpanError(span, err);
					controller.error(err);
				}
				span?.end();
			}
		},
		async cancel() {
			try {
				cancelled = true;
				clearInterval(timeout);
				span?.addEvent("cancelled");
				await runInSpanContext(span, () => iterator.return?.());
			} catch (e) {
				setSpanError(span, e);
				throw e;
			} finally {
				span?.end();
			}
		}
	}).pipeThrough(new TextEncoderStream());
}
function toStandardBody(re, options = {}) {
	return runWithSpan({
		name: "parse_standard_body",
		signal: options.signal
	}, async () => {
		const contentDisposition = re.headers.get("content-disposition");
		if (typeof contentDisposition === "string") {
			const fileName = getFilenameFromContentDisposition(contentDisposition) ?? "blob";
			const blob2 = await re.blob();
			return new File([blob2], fileName, { type: blob2.type });
		}
		const contentType = re.headers.get("content-type");
		if (!contentType || contentType.startsWith("application/json")) return parseEmptyableJSON(await re.text());
		if (contentType.startsWith("multipart/form-data")) return await re.formData();
		if (contentType.startsWith("application/x-www-form-urlencoded")) {
			const text = await re.text();
			return new URLSearchParams(text);
		}
		if (contentType.startsWith("text/event-stream")) return toEventIterator(re.body, options);
		if (contentType.startsWith("text/plain")) return await re.text();
		const blob = await re.blob();
		return new File([blob], "blob", { type: blob.type });
	});
}
function toFetchBody(body, headers, options = {}) {
	const currentContentDisposition = headers.get("content-disposition");
	headers.delete("content-type");
	headers.delete("content-disposition");
	if (body === void 0) return;
	if (body instanceof Blob) {
		headers.set("content-type", body.type);
		headers.set("content-length", body.size.toString());
		headers.set("content-disposition", currentContentDisposition ?? generateContentDisposition(body instanceof File ? body.name : "blob"));
		return body;
	}
	if (body instanceof FormData) return body;
	if (body instanceof URLSearchParams) return body;
	if (isAsyncIteratorObject(body)) {
		headers.set("content-type", "text/event-stream");
		return toEventStream(body, options);
	}
	headers.set("content-type", "application/json");
	return stringifyJSON(body);
}
function toStandardHeaders$1(headers, standardHeaders = {}) {
	headers.forEach((value, key) => {
		if (Array.isArray(standardHeaders[key])) standardHeaders[key].push(value);
		else if (standardHeaders[key] !== void 0) standardHeaders[key] = [standardHeaders[key], value];
		else standardHeaders[key] = value;
	});
	return standardHeaders;
}
function toFetchHeaders(headers, fetchHeaders = new Headers()) {
	for (const [key, value] of Object.entries(headers)) if (Array.isArray(value)) for (const v of value) fetchHeaders.append(key, v);
	else if (value !== void 0) fetchHeaders.append(key, value);
	return fetchHeaders;
}
function toFetchRequest(request, options = {}) {
	const headers = toFetchHeaders(request.headers);
	const body = toFetchBody(request.body, headers, options);
	return new Request(request.url, {
		signal: request.signal,
		method: request.method,
		headers,
		body
	});
}
function toStandardLazyResponse(response, options = {}) {
	return {
		body: once(() => toStandardBody(response, options)),
		status: response.status,
		get headers() {
			const headers = toStandardHeaders$1(response.headers);
			Object.defineProperty(this, "headers", {
				value: headers,
				writable: true
			});
			return headers;
		},
		set headers(value) {
			Object.defineProperty(this, "headers", {
				value,
				writable: true
			});
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@orpc+client@1.13.9/node_modules/@orpc/client/dist/shared/client.TRDYYcFE.mjs
var CompositeStandardLinkPlugin = class {
	plugins;
	constructor(plugins = []) {
		this.plugins = [...plugins].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
	}
	init(options) {
		for (const plugin of this.plugins) plugin.init?.(options);
	}
};
var StandardLink = class {
	constructor(codec, sender, options = {}) {
		this.codec = codec;
		this.sender = sender;
		new CompositeStandardLinkPlugin(options.plugins).init(options);
		this.interceptors = toArray(options.interceptors);
		this.clientInterceptors = toArray(options.clientInterceptors);
	}
	interceptors;
	clientInterceptors;
	call(path, input, options) {
		return runWithSpan({
			name: `${ORPC_NAME}.${path.join("/")}`,
			signal: options.signal
		}, (span) => {
			span?.setAttribute("rpc.system", ORPC_NAME);
			span?.setAttribute("rpc.method", path.join("."));
			if (isAsyncIteratorObject(input)) input = asyncIteratorWithSpan({
				name: "consume_event_iterator_input",
				signal: options.signal
			}, input);
			return intercept(this.interceptors, {
				...options,
				path,
				input
			}, async ({ path: path2, input: input2, ...options2 }) => {
				const otelConfig = getGlobalOtelConfig();
				let otelContext;
				const currentSpan = otelConfig?.trace.getActiveSpan() ?? span;
				if (currentSpan && otelConfig) otelContext = otelConfig?.trace.setSpan(otelConfig.context.active(), currentSpan);
				const request = await runWithSpan({
					name: "encode_request",
					context: otelContext
				}, () => this.codec.encode(path2, input2, options2));
				const response = await intercept(this.clientInterceptors, {
					...options2,
					input: input2,
					path: path2,
					request
				}, ({ input: input3, path: path3, request: request2, ...options3 }) => {
					return runWithSpan({
						name: "send_request",
						signal: options3.signal,
						context: otelContext
					}, () => this.sender.call(request2, options3, path3, input3));
				});
				const output = await runWithSpan({
					name: "decode_response",
					context: otelContext
				}, () => this.codec.decode(response, options2, path2, input2));
				if (isAsyncIteratorObject(output)) return asyncIteratorWithSpan({
					name: "consume_event_iterator_output",
					signal: options2.signal
				}, output);
				return output;
			});
		});
	}
};
function toHttpPath(path) {
	return `/${path.map(encodeURIComponent).join("/")}`;
}
function toStandardHeaders(headers) {
	if (typeof headers.forEach === "function") return toStandardHeaders$1(headers);
	return headers;
}
function getMalformedResponseErrorCode(status) {
	return Object.entries(COMMON_ORPC_ERROR_DEFS).find(([, def]) => def.status === status)?.[0] ?? "MALFORMED_ORPC_ERROR_RESPONSE";
}
//#endregion
//#region node_modules/.pnpm/@orpc+client@1.13.9/node_modules/@orpc/client/dist/adapters/fetch/index.mjs
var CompositeLinkFetchPlugin = class extends CompositeStandardLinkPlugin {
	initRuntimeAdapter(options) {
		for (const plugin of this.plugins) plugin.initRuntimeAdapter?.(options);
	}
};
var LinkFetchClient = class {
	fetch;
	toFetchRequestOptions;
	adapterInterceptors;
	constructor(options) {
		new CompositeLinkFetchPlugin(options.plugins).initRuntimeAdapter(options);
		this.fetch = options.fetch ?? globalThis.fetch.bind(globalThis);
		this.toFetchRequestOptions = options;
		this.adapterInterceptors = toArray(options.adapterInterceptors);
	}
	async call(standardRequest, options, path, input) {
		const request = toFetchRequest(standardRequest, this.toFetchRequestOptions);
		return toStandardLazyResponse(await intercept(this.adapterInterceptors, {
			...options,
			request,
			path,
			input,
			init: { redirect: "manual" }
		}, ({ request: request2, path: path2, input: input2, init, ...options2 }) => this.fetch(request2, init, options2, path2, input2)), { signal: request.signal });
	}
};
//#endregion
//#region node_modules/.pnpm/@orpc+contract@1.13.9/node_modules/@orpc/contract/dist/shared/contract.D_dZrO__.mjs
function mergeErrorMap(errorMap1, errorMap2) {
	return {
		...errorMap1,
		...errorMap2
	};
}
var ContractProcedure = class {
	/**
	* This property holds the defined options for the contract procedure.
	*/
	"~orpc";
	constructor(def) {
		if (def.route?.successStatus && isORPCErrorStatus(def.route.successStatus)) throw new Error("[ContractProcedure] Invalid successStatus.");
		if (Object.values(def.errorMap).some((val) => val && val.status && !isORPCErrorStatus(val.status))) throw new Error("[ContractProcedure] Invalid error status code.");
		this["~orpc"] = def;
	}
};
function isContractProcedure(item) {
	if (item instanceof ContractProcedure) return true;
	return (typeof item === "object" || typeof item === "function") && item !== null && "~orpc" in item && typeof item["~orpc"] === "object" && item["~orpc"] !== null && "errorMap" in item["~orpc"] && "route" in item["~orpc"] && "meta" in item["~orpc"];
}
//#endregion
//#region node_modules/.pnpm/@orpc+contract@1.13.9/node_modules/@orpc/contract/dist/index.mjs
function mergeMeta(meta1, meta2) {
	return {
		...meta1,
		...meta2
	};
}
function mergeRoute(a, b) {
	return {
		...a,
		...b
	};
}
function prefixRoute(route, prefix) {
	if (!route.path) return route;
	return {
		...route,
		path: `${prefix}${route.path}`
	};
}
function unshiftTagRoute(route, tags) {
	return {
		...route,
		tags: [...tags, ...route.tags ?? []]
	};
}
function mergePrefix(a, b) {
	return a ? `${a}${b}` : b;
}
function mergeTags(a, b) {
	return a ? [...a, ...b] : b;
}
function enhanceRoute(route, options) {
	let router = route;
	if (options.prefix) router = prefixRoute(router, options.prefix);
	if (options.tags?.length) router = unshiftTagRoute(router, options.tags);
	return router;
}
function enhanceContractRouter(router, options) {
	if (isContractProcedure(router)) return new ContractProcedure({
		...router["~orpc"],
		errorMap: mergeErrorMap(options.errorMap, router["~orpc"].errorMap),
		route: enhanceRoute(router["~orpc"].route, options)
	});
	const enhanced = {};
	for (const key in router) enhanced[key] = enhanceContractRouter(router[key], options);
	return enhanced;
}
var oc = new class ContractBuilder extends ContractProcedure {
	constructor(def) {
		super(def);
		this["~orpc"].prefix = def.prefix;
		this["~orpc"].tags = def.tags;
	}
	/**
	* Sets or overrides the initial meta.
	*
	* @see {@link https://orpc.dev/docs/metadata Metadata Docs}
	*/
	$meta(initialMeta) {
		return new ContractBuilder({
			...this["~orpc"],
			meta: initialMeta
		});
	}
	/**
	* Sets or overrides the initial route.
	* This option is typically relevant when integrating with OpenAPI.
	*
	* @see {@link https://orpc.dev/docs/openapi/routing OpenAPI Routing Docs}
	* @see {@link https://orpc.dev/docs/openapi/input-output-structure OpenAPI Input/Output Structure Docs}
	*/
	$route(initialRoute) {
		return new ContractBuilder({
			...this["~orpc"],
			route: initialRoute
		});
	}
	/**
	* Sets or overrides the initial input schema.
	*
	* @see {@link https://orpc.dev/docs/procedure#initial-configuration Initial Procedure Configuration Docs}
	*/
	$input(initialInputSchema) {
		return new ContractBuilder({
			...this["~orpc"],
			inputSchema: initialInputSchema
		});
	}
	/**
	* Adds type-safe custom errors to the contract.
	* The provided errors are spared-merged with any existing errors in the contract.
	*
	* @see {@link https://orpc.dev/docs/error-handling#type%E2%80%90safe-error-handling Type-Safe Error Handling Docs}
	*/
	errors(errors) {
		return new ContractBuilder({
			...this["~orpc"],
			errorMap: mergeErrorMap(this["~orpc"].errorMap, errors)
		});
	}
	/**
	* Sets or updates the metadata for the contract.
	* The provided metadata is spared-merged with any existing metadata in the contract.
	*
	* @see {@link https://orpc.dev/docs/metadata Metadata Docs}
	*/
	meta(meta) {
		return new ContractBuilder({
			...this["~orpc"],
			meta: mergeMeta(this["~orpc"].meta, meta)
		});
	}
	/**
	* Sets or updates the route definition for the contract.
	* The provided route is spared-merged with any existing route in the contract.
	* This option is typically relevant when integrating with OpenAPI.
	*
	* @see {@link https://orpc.dev/docs/openapi/routing OpenAPI Routing Docs}
	* @see {@link https://orpc.dev/docs/openapi/input-output-structure OpenAPI Input/Output Structure Docs}
	*/
	route(route) {
		return new ContractBuilder({
			...this["~orpc"],
			route: mergeRoute(this["~orpc"].route, route)
		});
	}
	/**
	* Defines the input validation schema for the contract.
	*
	* @see {@link https://orpc.dev/docs/procedure#input-output-validation Input Validation Docs}
	*/
	input(schema) {
		return new ContractBuilder({
			...this["~orpc"],
			inputSchema: schema
		});
	}
	/**
	* Defines the output validation schema for the contract.
	*
	* @see {@link https://orpc.dev/docs/procedure#input-output-validation Output Validation Docs}
	*/
	output(schema) {
		return new ContractBuilder({
			...this["~orpc"],
			outputSchema: schema
		});
	}
	/**
	* Prefixes all procedures in the contract router.
	* The provided prefix is post-appended to any existing router prefix.
	*
	* @note This option does not affect procedures that do not define a path in their route definition.
	*
	* @see {@link https://orpc.dev/docs/openapi/routing#route-prefixes OpenAPI Route Prefixes Docs}
	*/
	prefix(prefix) {
		return new ContractBuilder({
			...this["~orpc"],
			prefix: mergePrefix(this["~orpc"].prefix, prefix)
		});
	}
	/**
	* Adds tags to all procedures in the contract router.
	* This helpful when you want to group procedures together in the OpenAPI specification.
	*
	* @see {@link https://orpc.dev/docs/openapi/openapi-specification#operation-metadata OpenAPI Operation Metadata Docs}
	*/
	tag(...tags) {
		return new ContractBuilder({
			...this["~orpc"],
			tags: mergeTags(this["~orpc"].tags, tags)
		});
	}
	/**
	* Applies all of the previously defined options to the specified contract router.
	*
	* @see {@link https://orpc.dev/docs/router#extending-router Extending Router Docs}
	*/
	router(router) {
		return enhanceContractRouter(router, this["~orpc"]);
	}
}({
	errorMap: {},
	route: {},
	meta: {}
});
var DEFAULT_CONFIG = {
	defaultMethod: "POST",
	defaultSuccessStatus: 200,
	defaultSuccessDescription: "OK",
	defaultInputStructure: "compact",
	defaultOutputStructure: "compact"
};
function fallbackContractConfig(key, value) {
	if (value === void 0) return DEFAULT_CONFIG[key];
	return value;
}
function type(...[map]) {
	return { "~standard": {
		vendor: "custom",
		version: 1,
		async validate(value) {
			if (map) return { value: await map(value) };
			return { value };
		}
	} };
}
//#endregion
//#region node_modules/.pnpm/@orpc+openapi-client@1.13.9/node_modules/@orpc/openapi-client/dist/shared/openapi-client.t9fCAe3x.mjs
var StandardBracketNotationSerializer = class {
	maxArrayIndex;
	constructor(options = {}) {
		this.maxArrayIndex = options.maxBracketNotationArrayIndex ?? 9999;
	}
	serialize(data, segments = [], result = []) {
		if (Array.isArray(data)) data.forEach((item, i) => {
			this.serialize(item, [...segments, i], result);
		});
		else if (isObject(data)) for (const key in data) this.serialize(data[key], [...segments, key], result);
		else result.push([this.stringifyPath(segments), data]);
		return result;
	}
	deserialize(serialized) {
		if (serialized.length === 0) return {};
		const arrayPushStyles = /* @__PURE__ */ new WeakSet();
		const ref = { value: [] };
		for (const [path, value] of serialized) {
			const segments = this.parsePath(path);
			let currentRef = ref;
			let nextSegment = "value";
			segments.forEach((segment, i) => {
				if (!Array.isArray(currentRef[nextSegment]) && !isObject(currentRef[nextSegment])) currentRef[nextSegment] = [];
				if (i !== segments.length - 1) {
					if (Array.isArray(currentRef[nextSegment]) && !isValidArrayIndex(segment, this.maxArrayIndex)) if (arrayPushStyles.has(currentRef[nextSegment])) {
						arrayPushStyles.delete(currentRef[nextSegment]);
						currentRef[nextSegment] = pushStyleArrayToObject(currentRef[nextSegment]);
					} else currentRef[nextSegment] = arrayToObject(currentRef[nextSegment]);
				} else if (Array.isArray(currentRef[nextSegment])) {
					if (segment === "") {
						if (currentRef[nextSegment].length && !arrayPushStyles.has(currentRef[nextSegment])) currentRef[nextSegment] = arrayToObject(currentRef[nextSegment]);
					} else if (arrayPushStyles.has(currentRef[nextSegment])) {
						arrayPushStyles.delete(currentRef[nextSegment]);
						currentRef[nextSegment] = pushStyleArrayToObject(currentRef[nextSegment]);
					} else if (!isValidArrayIndex(segment, this.maxArrayIndex)) currentRef[nextSegment] = arrayToObject(currentRef[nextSegment]);
				}
				currentRef = currentRef[nextSegment];
				nextSegment = segment;
			});
			if (Array.isArray(currentRef) && nextSegment === "") {
				arrayPushStyles.add(currentRef);
				currentRef.push(value);
			} else if (nextSegment in currentRef) if (Array.isArray(currentRef[nextSegment])) currentRef[nextSegment].push(value);
			else currentRef[nextSegment] = [currentRef[nextSegment], value];
			else currentRef[nextSegment] = value;
		}
		return ref.value;
	}
	stringifyPath(segments) {
		return segments.map((segment) => {
			return segment.toString().replace(/[\\[\]]/g, (match) => {
				switch (match) {
					case "\\": return "\\\\";
					case "[": return "\\[";
					case "]": return "\\]";
					default: return match;
				}
			});
		}).reduce((result, segment, i) => {
			if (i === 0) return segment;
			return `${result}[${segment}]`;
		}, "");
	}
	parsePath(path) {
		const segments = [];
		let inBrackets = false;
		let currentSegment = "";
		let backslashCount = 0;
		for (let i = 0; i < path.length; i++) {
			const char = path[i];
			const nextChar = path[i + 1];
			if (inBrackets && char === "]" && (nextChar === void 0 || nextChar === "[") && backslashCount % 2 === 0) {
				if (nextChar === void 0) inBrackets = false;
				segments.push(currentSegment);
				currentSegment = "";
				i++;
			} else if (segments.length === 0 && char === "[" && backslashCount % 2 === 0) {
				inBrackets = true;
				segments.push(currentSegment);
				currentSegment = "";
			} else if (char === "\\") backslashCount++;
			else {
				currentSegment += "\\".repeat(backslashCount / 2) + char;
				backslashCount = 0;
			}
		}
		return inBrackets || segments.length === 0 ? [path] : segments;
	}
};
function isValidArrayIndex(value, maxIndex) {
	return /^0$|^[1-9]\d*$/.test(value) && Number(value) <= maxIndex;
}
function arrayToObject(array) {
	const obj = new NullProtoObj();
	array.forEach((item, i) => {
		obj[i] = item;
	});
	return obj;
}
function pushStyleArrayToObject(array) {
	const obj = new NullProtoObj();
	obj[""] = array.length === 1 ? array[0] : array;
	return obj;
}
//#endregion
//#region node_modules/.pnpm/@orpc+openapi-client@1.13.9/node_modules/@orpc/openapi-client/dist/shared/openapi-client.B2Q9qU5m.mjs
var StandardOpenAPIJsonSerializer = class {
	customSerializers;
	constructor(options = {}) {
		this.customSerializers = options.customJsonSerializers ?? [];
	}
	serialize(data, hasBlobRef = { value: false }) {
		for (const custom of this.customSerializers) if (custom.condition(data)) return this.serialize(custom.serialize(data), hasBlobRef);
		if (data instanceof Blob) {
			hasBlobRef.value = true;
			return [data, hasBlobRef.value];
		}
		if (data instanceof Set) return this.serialize(Array.from(data), hasBlobRef);
		if (data instanceof Map) return this.serialize(Array.from(data.entries()), hasBlobRef);
		if (Array.isArray(data)) return [data.map((v) => v === void 0 ? null : this.serialize(v, hasBlobRef)[0]), hasBlobRef.value];
		if (isObject(data)) {
			const json = {};
			for (const k in data) {
				if (k === "toJSON" && typeof data[k] === "function") continue;
				json[k] = this.serialize(data[k], hasBlobRef)[0];
			}
			return [json, hasBlobRef.value];
		}
		if (typeof data === "bigint" || data instanceof RegExp || data instanceof URL) return [data.toString(), hasBlobRef.value];
		if (data instanceof Date) return [Number.isNaN(data.getTime()) ? null : data.toISOString(), hasBlobRef.value];
		if (Number.isNaN(data)) return [null, hasBlobRef.value];
		return [data, hasBlobRef.value];
	}
};
function standardizeHTTPPath(path) {
	return `/${path.replace(/\/{2,}/g, "/").replace(/^\/|\/$/g, "")}`;
}
function getDynamicParams(path) {
	return path ? standardizeHTTPPath(path).match(/\/\{[^}]+\}/g)?.map((v) => ({
		raw: v,
		name: v.match(/\{\+?([^}]+)\}/)[1]
	})) : void 0;
}
var StandardOpenapiLinkCodec = class {
	constructor(contract, serializer, options) {
		this.contract = contract;
		this.serializer = serializer;
		this.baseUrl = options.url;
		this.headers = options.headers ?? {};
		this.customErrorResponseBodyDecoder = options.customErrorResponseBodyDecoder;
	}
	baseUrl;
	headers;
	customErrorResponseBodyDecoder;
	async encode(path, input, options) {
		let headers = toStandardHeaders(await value(this.headers, options, path, input));
		if (options.lastEventId !== void 0) headers = mergeStandardHeaders(headers, { "last-event-id": options.lastEventId });
		const baseUrl = await value(this.baseUrl, options, path, input);
		const procedure = get(this.contract, path);
		if (!isContractProcedure(procedure)) throw new Error(`[StandardOpenapiLinkCodec] expect a contract procedure at ${path.join(".")}`);
		return fallbackContractConfig("defaultInputStructure", procedure["~orpc"].route.inputStructure) === "compact" ? this.#encodeCompact(procedure, path, input, options, baseUrl, headers) : this.#encodeDetailed(procedure, path, input, options, baseUrl, headers);
	}
	#encodeCompact(procedure, path, input, options, baseUrl, headers) {
		let httpPath = standardizeHTTPPath(procedure["~orpc"].route.path ?? toHttpPath(path));
		let httpBody = input;
		const dynamicParams = getDynamicParams(httpPath);
		if (dynamicParams?.length) {
			if (!isObject(input)) throw new TypeError(`[StandardOpenapiLinkCodec] Invalid input shape for "compact" structure when has dynamic params at ${path.join(".")}.`);
			const body = { ...input };
			for (const param of dynamicParams) {
				const value2 = input[param.name];
				httpPath = httpPath.replace(param.raw, `/${encodeURIComponent(`${this.serializer.serialize(value2)}`)}`);
				delete body[param.name];
			}
			httpBody = Object.keys(body).length ? body : void 0;
		}
		const method = fallbackContractConfig("defaultMethod", procedure["~orpc"].route.method);
		const url = new URL(baseUrl);
		url.pathname = `${url.pathname.replace(/\/$/, "")}${httpPath}`;
		if (method === "GET") {
			const serialized = this.serializer.serialize(httpBody, { outputFormat: "URLSearchParams" });
			for (const [key, value2] of serialized) url.searchParams.append(key, value2);
			return {
				url,
				method,
				headers,
				body: void 0,
				signal: options.signal
			};
		}
		return {
			url,
			method,
			headers,
			body: this.serializer.serialize(httpBody),
			signal: options.signal
		};
	}
	#encodeDetailed(procedure, path, input, options, baseUrl, headers) {
		let httpPath = standardizeHTTPPath(procedure["~orpc"].route.path ?? toHttpPath(path));
		const dynamicParams = getDynamicParams(httpPath);
		if (!isObject(input) && input !== void 0) throw new TypeError(`[StandardOpenapiLinkCodec] Invalid input shape for "detailed" structure at ${path.join(".")}.`);
		if (dynamicParams?.length) {
			if (!isObject(input?.params)) throw new TypeError(`[StandardOpenapiLinkCodec] Invalid input.params shape for "detailed" structure when has dynamic params at ${path.join(".")}.`);
			for (const param of dynamicParams) {
				const value2 = input.params[param.name];
				httpPath = httpPath.replace(param.raw, `/${encodeURIComponent(`${this.serializer.serialize(value2)}`)}`);
			}
		}
		let mergedHeaders = headers;
		if (input?.headers !== void 0) {
			if (!isObject(input.headers)) throw new TypeError(`[StandardOpenapiLinkCodec] Invalid input.headers shape for "detailed" structure at ${path.join(".")}.`);
			mergedHeaders = mergeStandardHeaders(input.headers, headers);
		}
		const method = fallbackContractConfig("defaultMethod", procedure["~orpc"].route.method);
		const url = new URL(baseUrl);
		url.pathname = `${url.pathname.replace(/\/$/, "")}${httpPath}`;
		if (input?.query !== void 0) {
			const query = this.serializer.serialize(input.query, { outputFormat: "URLSearchParams" });
			for (const [key, value2] of query) url.searchParams.append(key, value2);
		}
		if (method === "GET") return {
			url,
			method,
			headers: mergedHeaders,
			body: void 0,
			signal: options.signal
		};
		return {
			url,
			method,
			headers: mergedHeaders,
			body: this.serializer.serialize(input?.body),
			signal: options.signal
		};
	}
	async decode(response, _options, path) {
		const isOk = !isORPCErrorStatus(response.status);
		const deserialized = await (async () => {
			let isBodyOk = false;
			try {
				const body = await response.body();
				isBodyOk = true;
				return this.serializer.deserialize(body);
			} catch (error) {
				if (!isBodyOk) throw new Error("Cannot parse response body, please check the response body and content-type.", { cause: error });
				throw new Error("Invalid OpenAPI response format.", { cause: error });
			}
		})();
		if (!isOk) {
			const error = this.customErrorResponseBodyDecoder?.(deserialized, response);
			if (error !== null && error !== void 0) throw error;
			if (isORPCErrorJson(deserialized)) throw createORPCErrorFromJson(deserialized);
			throw new ORPCError(getMalformedResponseErrorCode(response.status), {
				status: response.status,
				data: {
					...response,
					body: deserialized
				}
			});
		}
		const procedure = get(this.contract, path);
		if (!isContractProcedure(procedure)) throw new Error(`[StandardOpenapiLinkCodec] expect a contract procedure at ${path.join(".")}`);
		if (fallbackContractConfig("defaultOutputStructure", procedure["~orpc"].route.outputStructure) === "compact") return deserialized;
		return {
			status: response.status,
			headers: response.headers,
			body: deserialized
		};
	}
};
var StandardOpenAPISerializer = class {
	constructor(jsonSerializer, bracketNotation) {
		this.jsonSerializer = jsonSerializer;
		this.bracketNotation = bracketNotation;
	}
	serialize(data, options = {}) {
		if (isAsyncIteratorObject(data) && !options.outputFormat) return mapEventIterator(data, {
			value: async (value) => this.#serialize(value, { outputFormat: "plain" }),
			error: async (e) => {
				return new ErrorEvent({
					data: this.#serialize(toORPCError(e).toJSON(), { outputFormat: "plain" }),
					cause: e
				});
			}
		});
		return this.#serialize(data, options);
	}
	#serialize(data, options) {
		const [json, hasBlob] = this.jsonSerializer.serialize(data);
		if (options.outputFormat === "plain") return json;
		if (options.outputFormat === "URLSearchParams") {
			const params = new URLSearchParams();
			for (const [path, value] of this.bracketNotation.serialize(json)) if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") params.append(path, value.toString());
			return params;
		}
		if (json instanceof Blob || json === void 0 || !hasBlob) return json;
		const form = new FormData();
		for (const [path, value] of this.bracketNotation.serialize(json)) if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") form.append(path, value.toString());
		else if (value instanceof Blob) form.append(path, value);
		return form;
	}
	deserialize(data) {
		if (data instanceof URLSearchParams || data instanceof FormData) return this.bracketNotation.deserialize(Array.from(data.entries()));
		if (isAsyncIteratorObject(data)) return mapEventIterator(data, {
			value: async (value) => value,
			error: async (e) => {
				if (e instanceof ErrorEvent && isORPCErrorJson(e.data)) return createORPCErrorFromJson(e.data, { cause: e });
				return e;
			}
		});
		return data;
	}
};
var StandardOpenAPILink = class extends StandardLink {
	constructor(contract, linkClient, options) {
		const linkCodec = new StandardOpenapiLinkCodec(contract, new StandardOpenAPISerializer(new StandardOpenAPIJsonSerializer(options), new StandardBracketNotationSerializer({ maxBracketNotationArrayIndex: 4294967294 })), options);
		super(linkCodec, linkClient, options);
	}
};
//#endregion
//#region node_modules/.pnpm/@orpc+openapi-client@1.13.9/node_modules/@orpc/openapi-client/dist/adapters/fetch/index.mjs
var OpenAPILink = class extends StandardOpenAPILink {
	constructor(contract, options) {
		const linkClient = new LinkFetchClient(options);
		super(contract, linkClient, options);
	}
};
//#endregion
//#region node_modules/.pnpm/@orpc+tanstack-query@1.13.9_@orpc+client@1.13.9_@tanstack+query-core@5.95.0/node_modules/@orpc/tanstack-query/dist/index.mjs
function generateOperationKey(path, state = {}) {
	return [path, {
		...state.input !== void 0 ? { input: state.input } : {},
		...state.type !== void 0 ? { type: state.type } : {},
		...state.fnOptions !== void 0 ? { fnOptions: state.fnOptions } : {}
	}];
}
function createGeneralUtils(path) {
	return { key(options) {
		return generateOperationKey(path, options);
	} };
}
function experimental_liveQuery(queryFn) {
	return async (context) => {
		const stream = await queryFn(context);
		let last;
		for await (const chunk of stream) {
			if (context.signal.aborted) throw context.signal.reason;
			last = { chunk };
			context.client.setQueryData(context.queryKey, chunk);
		}
		if (!last) throw new Error(`Live query for ${stringifyJSON(context.queryKey)} did not yield any data. Ensure the query function returns an AsyncIterable with at least one chunk.`);
		return last.chunk;
	};
}
function experimental_serializableStreamedQuery(queryFn, { refetchMode = "reset", maxChunks = Number.POSITIVE_INFINITY } = {}) {
	return async (context) => {
		const query = context.client.getQueryCache().find({
			queryKey: context.queryKey,
			exact: true
		});
		const hasPreviousData = !!query && query.state.data !== void 0;
		if (hasPreviousData) if (refetchMode === "reset") query.setState({
			status: "pending",
			data: void 0,
			error: null,
			fetchStatus: "fetching"
		});
		else context.client.setQueryData(context.queryKey, (prev = []) => limitArraySize(prev, maxChunks));
		let result = [];
		const stream = await queryFn(context);
		const shouldUpdateCacheDuringStream = !hasPreviousData || refetchMode !== "replace";
		context.client.setQueryData(context.queryKey, (prev = []) => limitArraySize(prev, maxChunks));
		for await (const chunk of stream) {
			if (context.signal.aborted) throw context.signal.reason;
			result.push(chunk);
			result = limitArraySize(result, maxChunks);
			if (shouldUpdateCacheDuringStream) context.client.setQueryData(context.queryKey, (prev = []) => limitArraySize([...prev, chunk], maxChunks));
		}
		if (!shouldUpdateCacheDuringStream) context.client.setQueryData(context.queryKey, result);
		const cachedData = context.client.getQueryData(context.queryKey);
		if (cachedData) return limitArraySize(cachedData, maxChunks);
		return result;
	};
}
function limitArraySize(items, maxSize) {
	if (items.length <= maxSize) return items;
	return items.slice(items.length - maxSize);
}
var OPERATION_CONTEXT_SYMBOL = Symbol("ORPC_OPERATION_CONTEXT");
function createProcedureUtils(client, options) {
	const utils = {
		call: client,
		queryKey(...[optionsIn = {}]) {
			optionsIn = {
				...options.experimental_defaults?.queryKey,
				...optionsIn
			};
			return optionsIn.queryKey ?? generateOperationKey(options.path, {
				type: "query",
				input: optionsIn.input
			});
		},
		queryOptions(...[optionsIn = {}]) {
			optionsIn = {
				...options.experimental_defaults?.queryOptions,
				...optionsIn
			};
			const queryKey = utils.queryKey(optionsIn);
			return {
				queryFn: ({ signal }) => {
					if (optionsIn.input === skipToken) throw new Error("queryFn should not be called with skipToken used as input");
					return client(optionsIn.input, {
						signal,
						context: {
							[OPERATION_CONTEXT_SYMBOL]: {
								key: queryKey,
								type: "query"
							},
							...optionsIn.context
						}
					});
				},
				...optionsIn.input === skipToken ? { enabled: false } : {},
				...optionsIn,
				queryKey
			};
		},
		experimental_streamedKey(...[optionsIn = {}]) {
			optionsIn = {
				...options.experimental_defaults?.experimental_streamedKey,
				...optionsIn
			};
			return optionsIn.queryKey ?? generateOperationKey(options.path, {
				type: "streamed",
				input: optionsIn.input,
				fnOptions: optionsIn.queryFnOptions
			});
		},
		experimental_streamedOptions(...[optionsIn = {}]) {
			optionsIn = {
				...options.experimental_defaults?.experimental_streamedOptions,
				...optionsIn
			};
			const queryKey = utils.experimental_streamedKey(optionsIn);
			return {
				queryFn: experimental_serializableStreamedQuery(async ({ signal }) => {
					if (optionsIn.input === skipToken) throw new Error("queryFn should not be called with skipToken used as input");
					const output = await client(optionsIn.input, {
						signal,
						context: {
							[OPERATION_CONTEXT_SYMBOL]: {
								key: queryKey,
								type: "streamed"
							},
							...optionsIn.context
						}
					});
					if (!isAsyncIteratorObject(output)) throw new Error("streamedQuery requires an event iterator output");
					return output;
				}, optionsIn.queryFnOptions),
				...optionsIn.input === skipToken ? { enabled: false } : {},
				...optionsIn,
				queryKey
			};
		},
		experimental_liveKey(...[optionsIn = {}]) {
			optionsIn = {
				...options.experimental_defaults?.experimental_liveKey,
				...optionsIn
			};
			return optionsIn.queryKey ?? generateOperationKey(options.path, {
				type: "live",
				input: optionsIn.input
			});
		},
		experimental_liveOptions(...[optionsIn = {}]) {
			optionsIn = {
				...options.experimental_defaults?.experimental_liveOptions,
				...optionsIn
			};
			const queryKey = utils.experimental_liveKey(optionsIn);
			return {
				queryFn: experimental_liveQuery(async ({ signal }) => {
					if (optionsIn.input === skipToken) throw new Error("queryFn should not be called with skipToken used as input");
					const output = await client(optionsIn.input, {
						signal,
						context: {
							[OPERATION_CONTEXT_SYMBOL]: {
								key: queryKey,
								type: "live"
							},
							...optionsIn.context
						}
					});
					if (!isAsyncIteratorObject(output)) throw new Error("liveQuery requires an event iterator output");
					return output;
				}),
				...optionsIn.input === skipToken ? { enabled: false } : {},
				...optionsIn,
				queryKey
			};
		},
		infiniteKey(optionsIn) {
			optionsIn = {
				...options.experimental_defaults?.infiniteKey,
				...optionsIn
			};
			return optionsIn.queryKey ?? generateOperationKey(options.path, {
				type: "infinite",
				input: optionsIn.input === skipToken ? skipToken : optionsIn.input(optionsIn.initialPageParam)
			});
		},
		infiniteOptions(optionsIn) {
			optionsIn = {
				...options.experimental_defaults?.infiniteOptions,
				...optionsIn
			};
			const queryKey = utils.infiniteKey(optionsIn);
			return {
				queryFn: ({ pageParam, signal }) => {
					if (optionsIn.input === skipToken) throw new Error("queryFn should not be called with skipToken used as input");
					return client(optionsIn.input(pageParam), {
						signal,
						context: {
							[OPERATION_CONTEXT_SYMBOL]: {
								key: queryKey,
								type: "infinite"
							},
							...optionsIn.context
						}
					});
				},
				...optionsIn.input === skipToken ? { enabled: false } : {},
				...optionsIn,
				queryKey
			};
		},
		mutationKey(...[optionsIn = {}]) {
			optionsIn = {
				...options.experimental_defaults?.mutationKey,
				...optionsIn
			};
			return optionsIn.mutationKey ?? generateOperationKey(options.path, { type: "mutation" });
		},
		mutationOptions(...[optionsIn = {}]) {
			optionsIn = {
				...options.experimental_defaults?.mutationOptions,
				...optionsIn
			};
			const mutationKey = utils.mutationKey(optionsIn);
			return {
				mutationFn: (input) => client(input, { context: {
					[OPERATION_CONTEXT_SYMBOL]: {
						key: mutationKey,
						type: "mutation"
					},
					...optionsIn.context
				} }),
				...optionsIn,
				mutationKey
			};
		}
	};
	return utils;
}
function createRouterUtils(client, options = {}) {
	const path = toArray(options.path);
	const generalUtils = createGeneralUtils(path);
	const procedureUtils = createProcedureUtils(client, {
		path,
		experimental_defaults: options.experimental_defaults
	});
	return new Proxy({
		...generalUtils,
		...procedureUtils
	}, { get(target, prop) {
		const value = Reflect.get(target, prop);
		if (typeof prop !== "string") return value;
		const nextUtils = createRouterUtils(client[prop], {
			...options,
			path: [...path, prop],
			experimental_defaults: get(options.experimental_defaults, [prop])
		});
		if (typeof value !== "function") return nextUtils;
		return new Proxy(value, { get(_, prop2) {
			return Reflect.get(nextUtils, prop2);
		} });
	} });
}
//#endregion
//#region contract/base.ts
var base = oc.$route({ inputStructure: "detailed" });
//#endregion
//#region contract/console/apps.ts
var appDeleteContract = base.route({
	path: "/apps/{appId}",
	method: "DELETE"
}).input(type()).output(type());
//#endregion
//#region contract/console/billing.ts
var invoicesContract = base.route({
	path: "/billing/invoices",
	method: "GET"
}).input(type()).output(type());
var bindPartnerStackContract = base.route({
	path: "/billing/partners/{partnerKey}/tenants",
	method: "PUT"
}).input(type()).output(type());
//#endregion
//#region contract/console/explore.ts
var exploreAppsContract = base.route({
	path: "/explore/apps",
	method: "GET"
}).input(type()).output(type());
var exploreAppDetailContract = base.route({
	path: "/explore/apps/{id}",
	method: "GET"
}).input(type()).output(type());
var exploreInstalledAppsContract = base.route({
	path: "/installed-apps",
	method: "GET"
}).input(type()).output(type());
var exploreInstalledAppUninstallContract = base.route({
	path: "/installed-apps/{id}",
	method: "DELETE"
}).input(type()).output(type());
var exploreInstalledAppPinContract = base.route({
	path: "/installed-apps/{id}",
	method: "PATCH"
}).input(type()).output(type());
var exploreInstalledAppAccessModeContract = base.route({
	path: "/enterprise/webapp/app/access-mode",
	method: "GET"
}).input(type()).output(type());
var exploreInstalledAppParametersContract = base.route({
	path: "/installed-apps/{appId}/parameters",
	method: "GET"
}).input(type()).output(type());
var exploreInstalledAppMetaContract = base.route({
	path: "/installed-apps/{appId}/meta",
	method: "GET"
}).input(type()).output(type());
var exploreBannersContract = base.route({
	path: "/explore/banners",
	method: "GET"
}).input(type()).output(type());
//#endregion
//#region contract/console/model-providers.ts
var modelProvidersModelsContract = base.route({
	path: "/workspaces/current/model-providers/{provider}/models",
	method: "GET"
}).input(type()).output(type());
var changePreferredProviderTypeContract = base.route({
	path: "/workspaces/current/model-providers/{provider}/preferred-provider-type",
	method: "POST"
}).input(type()).output(type());
//#endregion
//#region contract/console/notification.ts
var notificationContract = base.route({
	path: "/notification",
	method: "GET"
}).output(type());
var notificationDismissContract = base.route({
	path: "/notification/dismiss",
	method: "POST"
}).input(type()).output(type());
//#endregion
//#region contract/console/plugins.ts
var pluginCheckInstalledContract = base.route({
	path: "/workspaces/current/plugin/list/installations/ids",
	method: "POST"
}).input(type()).output(type());
var pluginLatestVersionsContract = base.route({
	path: "/workspaces/current/plugin/list/latest-versions",
	method: "POST"
}).input(type()).output(type());
//#endregion
//#region contract/console/system.ts
var systemFeaturesContract = base.route({
	path: "/system-features",
	method: "GET"
}).input(type()).output(type());
//#endregion
//#region contract/console/trigger.ts
var triggersContract = base.route({
	path: "/workspaces/current/triggers",
	method: "GET"
}).input(type()).output(type());
var triggerProviderInfoContract = base.route({
	path: "/workspaces/current/trigger-provider/{provider}/info",
	method: "GET"
}).input(type()).output(type());
var triggerSubscriptionsContract = base.route({
	path: "/workspaces/current/trigger-provider/{provider}/subscriptions/list",
	method: "GET"
}).input(type()).output(type());
var triggerSubscriptionBuilderCreateContract = base.route({
	path: "/workspaces/current/trigger-provider/{provider}/subscriptions/builder/create",
	method: "POST"
}).input(type()).output(type());
var triggerSubscriptionBuilderUpdateContract = base.route({
	path: "/workspaces/current/trigger-provider/{provider}/subscriptions/builder/update/{subscriptionBuilderId}",
	method: "POST"
}).input(type()).output(type());
var triggerSubscriptionBuilderVerifyUpdateContract = base.route({
	path: "/workspaces/current/trigger-provider/{provider}/subscriptions/builder/verify-and-update/{subscriptionBuilderId}",
	method: "POST"
}).input(type()).output(type());
var triggerSubscriptionVerifyContract = base.route({
	path: "/workspaces/current/trigger-provider/{provider}/subscriptions/verify/{subscriptionId}",
	method: "POST"
}).input(type()).output(type());
var triggerSubscriptionBuildContract = base.route({
	path: "/workspaces/current/trigger-provider/{provider}/subscriptions/builder/build/{subscriptionBuilderId}",
	method: "POST"
}).input(type()).output(type());
var triggerSubscriptionDeleteContract = base.route({
	path: "/workspaces/current/trigger-provider/{subscriptionId}/subscriptions/delete",
	method: "POST"
}).input(type()).output(type());
var triggerSubscriptionUpdateContract = base.route({
	path: "/workspaces/current/trigger-provider/{subscriptionId}/subscriptions/update",
	method: "POST"
}).input(type()).output(type());
var triggerSubscriptionBuilderLogsContract = base.route({
	path: "/workspaces/current/trigger-provider/{provider}/subscriptions/builder/logs/{subscriptionBuilderId}",
	method: "GET"
}).input(type()).output(type());
var triggerOAuthConfigContract = base.route({
	path: "/workspaces/current/trigger-provider/{provider}/oauth/client",
	method: "GET"
}).input(type()).output(type());
var triggerOAuthConfigureContract = base.route({
	path: "/workspaces/current/trigger-provider/{provider}/oauth/client",
	method: "POST"
}).input(type()).output(type());
var triggerOAuthDeleteContract = base.route({
	path: "/workspaces/current/trigger-provider/{provider}/oauth/client",
	method: "DELETE"
}).input(type()).output(type());
var triggerOAuthInitiateContract = base.route({
	path: "/workspaces/current/trigger-provider/{provider}/subscriptions/oauth/authorize",
	method: "GET"
}).input(type()).output(type());
//#endregion
//#region contract/console/try-app.ts
var trialAppInfoContract = base.route({
	path: "/trial-apps/{appId}",
	method: "GET"
}).input(type()).output(type());
var trialAppDatasetsContract = base.route({
	path: "/trial-apps/{appId}/datasets",
	method: "GET"
}).input(type()).output(type());
var trialAppWorkflowsContract = base.route({
	path: "/trial-apps/{appId}/workflows",
	method: "GET"
}).input(type()).output(type());
var trialAppParametersContract = base.route({
	path: "/trial-apps/{appId}/parameters",
	method: "GET"
}).input(type()).output(type());
//#endregion
//#region contract/router.ts
var marketplaceRouterContract = {
	collections: base.route({
		path: "/collections",
		method: "GET"
	}).input(type()).output(type()),
	collectionPlugins: base.route({
		path: "/collections/{collectionId}/plugins",
		method: "POST"
	}).input(type()).output(type()),
	searchAdvanced: base.route({
		path: "/{kind}/search/advanced",
		method: "POST"
	}).input(type()).output(type())
};
var consoleRouterContract = {
	systemFeatures: systemFeaturesContract,
	apps: { deleteApp: appDeleteContract },
	explore: {
		apps: exploreAppsContract,
		appDetail: exploreAppDetailContract,
		installedApps: exploreInstalledAppsContract,
		uninstallInstalledApp: exploreInstalledAppUninstallContract,
		updateInstalledApp: exploreInstalledAppPinContract,
		appAccessMode: exploreInstalledAppAccessModeContract,
		installedAppParameters: exploreInstalledAppParametersContract,
		installedAppMeta: exploreInstalledAppMetaContract,
		banners: exploreBannersContract
	},
	trialApps: {
		info: trialAppInfoContract,
		datasets: trialAppDatasetsContract,
		parameters: trialAppParametersContract,
		workflows: trialAppWorkflowsContract
	},
	modelProviders: {
		models: modelProvidersModelsContract,
		changePreferredProviderType: changePreferredProviderTypeContract
	},
	plugins: {
		checkInstalled: pluginCheckInstalledContract,
		latestVersions: pluginLatestVersionsContract
	},
	billing: {
		invoices: invoicesContract,
		bindPartnerStack: bindPartnerStackContract
	},
	notification: notificationContract,
	notificationDismiss: notificationDismissContract,
	triggers: {
		list: triggersContract,
		providerInfo: triggerProviderInfoContract,
		subscriptions: triggerSubscriptionsContract,
		subscriptionBuilderCreate: triggerSubscriptionBuilderCreateContract,
		subscriptionBuilderUpdate: triggerSubscriptionBuilderUpdateContract,
		subscriptionBuilderVerifyUpdate: triggerSubscriptionBuilderVerifyUpdateContract,
		subscriptionVerify: triggerSubscriptionVerifyContract,
		subscriptionBuild: triggerSubscriptionBuildContract,
		subscriptionDelete: triggerSubscriptionDeleteContract,
		subscriptionUpdate: triggerSubscriptionUpdateContract,
		subscriptionBuilderLogs: triggerSubscriptionBuilderLogsContract,
		oauthConfig: triggerOAuthConfigContract,
		oauthConfigure: triggerOAuthConfigureContract,
		oauthDelete: triggerOAuthDeleteContract,
		oauthInitiate: triggerOAuthInitiateContract
	}
};
//#endregion
//#region service/client.ts
var getMarketplaceHeaders = () => new Headers({ "X-Dify-Version": !IS_MARKETPLACE ? APP_VERSION : "999.0.0" });
function isURL(path) {
	try {
		new URL(path);
		return true;
	} catch {
		return false;
	}
}
function getBaseURL(path) {
	const url = new URL(path, isURL(path) ? void 0 : isClient ? window.location.origin : "http://localhost");
	if (!isClient && !isURL(path)) console.warn("Using localhost as base URL in server environment, please configure accordingly.");
	if (url.protocol !== "http:" && url.protocol !== "https:") console.warn(`Unexpected protocol for API requests, expected http or https. Current protocol: ${url.protocol}. Please configure accordingly.`);
	return url;
}
var marketplaceClient = createORPCClient(new OpenAPILink(marketplaceRouterContract, {
	url: MARKETPLACE_API_PREFIX,
	headers: () => getMarketplaceHeaders(),
	fetch: (request, init) => {
		return globalThis.fetch(request, {
			...init,
			cache: "no-store"
		});
	},
	interceptors: [onError((error) => {
		console.error(error);
	})]
}));
var marketplaceQuery = createRouterUtils(marketplaceClient, { path: ["marketplace"] });
var consoleClient = createORPCClient(new OpenAPILink(consoleRouterContract, {
	url: getBaseURL(API_PREFIX),
	fetch: (input, init) => {
		return request(input.url, init, {
			fetchCompat: true,
			request: input
		});
	},
	interceptors: [onError((error) => {
		console.error(error);
	})]
}));
var consoleQuery = createRouterUtils(consoleClient, { path: ["console"] });
//#endregion
export { marketplaceQuery as i, consoleQuery as n, marketplaceClient as r, consoleClient as t };
