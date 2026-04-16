//#region node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js
var ERROR = Symbol("error");
function castError(err) {
	if (err instanceof Error) return err;
	return new Error(typeof err === "string" ? err : "Unknown error", { cause: err });
}
function handleError(err, owner = Owner) {
	const fns = owner && owner.context && owner.context[ERROR];
	const error = castError(err);
	if (!fns) throw error;
	try {
		for (const f of fns) f(error);
	} catch (e) {
		handleError(e, owner && owner.owner || null);
	}
}
var UNOWNED = {
	context: null,
	owner: null,
	owned: null,
	cleanups: null
};
var Owner = null;
function createOwner() {
	const o = {
		owner: Owner,
		context: Owner ? Owner.context : null,
		owned: null,
		cleanups: null
	};
	if (Owner) if (!Owner.owned) Owner.owned = [o];
	else Owner.owned.push(o);
	return o;
}
function createRoot(fn, detachedOwner) {
	const owner = Owner, current = detachedOwner === void 0 ? owner : detachedOwner, root = fn.length === 0 ? UNOWNED : {
		context: current ? current.context : null,
		owner: current,
		owned: null,
		cleanups: null
	};
	Owner = root;
	let result;
	try {
		result = fn(fn.length === 0 ? () => {} : () => cleanNode(root));
	} catch (err) {
		handleError(err);
	} finally {
		Owner = owner;
	}
	return result;
}
function createSignal(value, options) {
	return [() => value, (v) => {
		return value = typeof v === "function" ? v(value) : v;
	}];
}
function createComputed(fn, value) {
	Owner = createOwner();
	try {
		fn(value);
	} catch (err) {
		handleError(err);
	} finally {
		Owner = Owner.owner;
	}
}
var createRenderEffect = createComputed;
function createEffect(fn, value) {}
function createMemo(fn, value) {
	Owner = createOwner();
	let v;
	try {
		v = fn(value);
	} catch (err) {
		handleError(err);
	} finally {
		Owner = Owner.owner;
	}
	return () => v;
}
function batch(fn) {
	return fn();
}
var untrack = batch;
function on(deps, fn, options = {}) {
	const isArray = Array.isArray(deps);
	const defer = options.defer;
	return () => {
		if (defer) return void 0;
		let value;
		if (isArray) {
			value = [];
			for (let i = 0; i < deps.length; i++) value.push(deps[i]());
		} else value = deps();
		return fn(value);
	};
}
function onMount(fn) {}
function onCleanup(fn) {
	if (Owner) if (!Owner.cleanups) Owner.cleanups = [fn];
	else Owner.cleanups.push(fn);
	return fn;
}
function cleanNode(node) {
	if (node.owned) {
		for (let i = 0; i < node.owned.length; i++) cleanNode(node.owned[i]);
		node.owned = null;
	}
	if (node.cleanups) {
		for (let i = 0; i < node.cleanups.length; i++) node.cleanups[i]();
		node.cleanups = null;
	}
}
function getListener() {
	return null;
}
function createContext(defaultValue) {
	const id = Symbol("context");
	return {
		id,
		Provider: createProvider(id),
		defaultValue
	};
}
function useContext(context) {
	return Owner && Owner.context && Owner.context[context.id] !== void 0 ? Owner.context[context.id] : context.defaultValue;
}
function getOwner() {
	return Owner;
}
function children(fn) {
	const memo = createMemo(() => resolveChildren(fn()));
	memo.toArray = () => {
		const c = memo();
		return Array.isArray(c) ? c : c != null ? [c] : [];
	};
	return memo;
}
function resolveChildren(children) {
	if (typeof children === "function" && !children.length) return resolveChildren(children());
	if (Array.isArray(children)) {
		const results = [];
		for (let i = 0; i < children.length; i++) {
			const result = resolveChildren(children[i]);
			Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
		}
		return results;
	}
	return children;
}
function createProvider(id) {
	return function provider(props) {
		return createMemo(() => {
			Owner.context = {
				...Owner.context,
				[id]: props.value
			};
			return children(() => props.children);
		});
	};
}
var sharedConfig = {
	context: void 0,
	getContextId() {
		if (!this.context) throw new Error(`getContextId cannot be used under non-hydrating context`);
		return getContextId(this.context.count);
	},
	getNextContextId() {
		if (!this.context) throw new Error(`getNextContextId cannot be used under non-hydrating context`);
		return getContextId(this.context.count++);
	}
};
function getContextId(count) {
	const num = String(count), len = num.length - 1;
	return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
}
function setHydrateContext(context) {
	sharedConfig.context = context;
}
function nextHydrateContext() {
	return sharedConfig.context ? {
		...sharedConfig.context,
		id: sharedConfig.getNextContextId(),
		count: 0
	} : void 0;
}
function createComponent(Comp, props) {
	if (sharedConfig.context && !sharedConfig.context.noHydrate) {
		const c = sharedConfig.context;
		setHydrateContext(nextHydrateContext());
		const r = Comp(props || {});
		setHydrateContext(c);
		return r;
	}
	return Comp(props || {});
}
function mergeProps(...sources) {
	const target = {};
	for (let i = 0; i < sources.length; i++) {
		let source = sources[i];
		if (typeof source === "function") source = source();
		if (source) {
			const descriptors = Object.getOwnPropertyDescriptors(source);
			for (const key in descriptors) {
				if (key in target) continue;
				Object.defineProperty(target, key, {
					enumerable: true,
					get() {
						for (let i = sources.length - 1; i >= 0; i--) {
							let v, s = sources[i];
							if (typeof s === "function") s = s();
							v = (s || {})[key];
							if (v !== void 0) return v;
						}
					}
				});
			}
		}
	}
	return target;
}
function simpleMap(props, wrap) {
	const list = props.each || [], len = list.length, fn = props.children;
	if (len) {
		let mapped = Array(len);
		for (let i = 0; i < len; i++) mapped[i] = wrap(fn, list[i], i);
		return mapped;
	}
	return props.fallback;
}
function For(props) {
	return simpleMap(props, (fn, item, i) => fn(item, () => i));
}
function Show(props) {
	let c;
	return props.when ? typeof (c = props.children) === "function" ? c(props.keyed ? props.when : () => props.when) : c : props.fallback || "";
}
function Switch(props) {
	let conditions = props.children;
	Array.isArray(conditions) || (conditions = [conditions]);
	for (let i = 0; i < conditions.length; i++) {
		const w = conditions[i].when;
		if (w) {
			const c = conditions[i].children;
			return typeof c === "function" ? c(conditions[i].keyed ? w : () => w) : c;
		}
	}
	return props.fallback || "";
}
function Match(props) {
	return props;
}
var SuspenseContext = createContext();
function lazy(fn) {
	let p;
	let load = (id) => {
		if (!p) {
			p = fn();
			p.then((mod) => p.resolved = mod.default);
			if (id) sharedConfig.context.lazy[id] = p;
		}
		return p;
	};
	const contexts = /* @__PURE__ */ new Set();
	const wrap = (props) => {
		const id = sharedConfig.context.id;
		let ref = sharedConfig.context.lazy[id];
		if (ref) p = ref;
		else load(id);
		if (p.resolved) return p.resolved(props);
		const ctx = useContext(SuspenseContext);
		const track = {
			_loading: true,
			error: void 0
		};
		if (ctx) {
			ctx.resources.set(id, track);
			contexts.add(ctx);
		}
		if (sharedConfig.context.async) sharedConfig.context.block(p.then(() => {
			track._loading = false;
			notifySuspense(contexts);
		}));
		return "";
	};
	wrap.preload = load;
	return wrap;
}
function suspenseComplete(c) {
	for (const r of c.resources.values()) if (r._loading) return false;
	return true;
}
function notifySuspense(contexts) {
	for (const c of contexts) {
		if (!suspenseComplete(c)) continue;
		c.completed();
		contexts.delete(c);
	}
}
//#endregion
//#region node_modules/.pnpm/seroval@1.5.1/node_modules/seroval/dist/esm/production/index.mjs
var L$1 = ((i) => (i[i.AggregateError = 1] = "AggregateError", i[i.ArrowFunction = 2] = "ArrowFunction", i[i.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", i[i.ObjectAssign = 8] = "ObjectAssign", i[i.BigIntTypedArray = 16] = "BigIntTypedArray", i[i.RegExp = 32] = "RegExp", i))(L$1 || {}), v$1 = Symbol.asyncIterator, C = Symbol.iterator, o$1 = void 0;
Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY;
function c$1(e, r, t, n, a, s, i, u, l, g, S, d) {
	return {
		t: e,
		i: r,
		s: t,
		c: n,
		m: a,
		p: s,
		e: i,
		a: u,
		f: l,
		b: g,
		o: S,
		l: d
	};
}
function F(e) {
	return c$1(2, o$1, e, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
F(2);
F(3);
F(1);
F(0);
F(4);
F(5);
F(6);
F(7);
var U = "__SEROVAL_REFS__", j = /* @__PURE__ */ new Map();
typeof globalThis != "undefined" ? Object.defineProperty(globalThis, U, {
	value: j,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof window != "undefined" ? Object.defineProperty(window, U, {
	value: j,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof self != "undefined" ? Object.defineProperty(self, U, {
	value: j,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof global != "undefined" && Object.defineProperty(global, U, {
	value: j,
	configurable: !0,
	writable: !1,
	enumerable: !1
});
var { toString: ys } = Object.prototype, re = () => {
	let e = {
		p: 0,
		s: 0,
		f: 0
	};
	return e.p = new Promise((r, t) => {
		e.s = r, e.f = t;
	}), e;
}, vn = (e, r) => {
	e.s(r), e.p.s = 1, e.p.v = r;
}, Cn = (e, r) => {
	e.f(r), e.p.s = 2, e.p.v = r;
};
re.toString();
vn.toString();
Cn.toString();
var Rr = () => {
	let e = [], r = [], t = !0, n = !1, a = 0, s = (l, g, S) => {
		for (S = 0; S < a; S++) r[S] && r[S][g](l);
	}, i = (l, g, S, d) => {
		for (g = 0, S = e.length; g < S; g++) d = e[g], !t && g === S - 1 ? l[n ? "return" : "throw"](d) : l.next(d);
	}, u = (l, g) => (t && (g = a++, r[g] = l), i(l), () => {
		t && (r[g] = r[a], r[a--] = void 0);
	});
	return {
		__SEROVAL_STREAM__: !0,
		on: (l) => u(l),
		next: (l) => {
			t && (e.push(l), s(l, "next"));
		},
		throw: (l) => {
			t && (e.push(l), s(l, "throw"), t = !1, n = !1, r.length = 0);
		},
		return: (l) => {
			t && (e.push(l), s(l, "return"), t = !1, n = !0, r.length = 0);
		}
	};
};
Rr.toString();
var Pr = (e) => (r) => () => {
	let t = 0, n = {
		[e]: () => n,
		next: () => {
			if (t > r.d) return {
				done: !0,
				value: void 0
			};
			let a = t++, s = r.v[a];
			if (a === r.t) throw s;
			return {
				done: a === r.d,
				value: s
			};
		}
	};
	return n;
};
Pr.toString();
var xr = (e, r) => (t) => () => {
	let n = 0, a = -1, s = !1, i = [], u = [], l = (S = 0, d = u.length) => {
		for (; S < d; S++) u[S].s({
			done: !0,
			value: void 0
		});
	};
	t.on({
		next: (S) => {
			let d = u.shift();
			d && d.s({
				done: !1,
				value: S
			}), i.push(S);
		},
		throw: (S) => {
			let d = u.shift();
			d && d.f(S), l(), a = i.length, s = !0, i.push(S);
		},
		return: (S) => {
			let d = u.shift();
			d && d.s({
				done: !0,
				value: S
			}), l(), a = i.length, i.push(S);
		}
	});
	let g = {
		[e]: () => g,
		next: () => {
			if (a === -1) {
				let K = n++;
				if (K >= i.length) {
					let et = r();
					return u.push(et), et.p;
				}
				return {
					done: !1,
					value: i[K]
				};
			}
			if (n > a) return {
				done: !0,
				value: void 0
			};
			let S = n++, d = i[S];
			if (S !== a) return {
				done: !1,
				value: d
			};
			if (s) throw d;
			return {
				done: !0,
				value: d
			};
		}
	};
	return g;
};
xr.toString();
var Or = (e) => {
	let r = atob(e), t = r.length, n = new Uint8Array(t);
	for (let a = 0; a < t; a++) n[a] = r.charCodeAt(a);
	return n.buffer;
};
Or.toString();
Pr(C);
function te$1() {
	return Rr();
}
xr(v$1, re);
var ae = ((t) => (t[t.Vanilla = 1] = "Vanilla", t[t.Cross = 2] = "Cross", t))(ae || {});
function ni(e) {
	return e;
}
var Eo = () => T, Io = Eo.toString();
/=>/.test(Io);
//#endregion
//#region node_modules/.pnpm/seroval-plugins@1.5.1_seroval@1.5.1/node_modules/seroval-plugins/dist/esm/production/web.mjs
var u = (e) => {
	let r = new AbortController(), a = r.abort.bind(r);
	return e.then(a, a), r;
};
function E(e) {
	e(this.reason);
}
function D(e) {
	this.addEventListener("abort", E.bind(this, e), { once: !0 });
}
function c(e) {
	return new Promise(D.bind(e));
}
var i = {};
ni({
	tag: "seroval-plugins/web/AbortSignal",
	extends: [ni({
		tag: "seroval-plugins/web/AbortControllerFactoryPlugin",
		test(e) {
			return e === i;
		},
		parse: {
			sync() {
				return i;
			},
			async async() {
				return await Promise.resolve(i);
			},
			stream() {
				return i;
			}
		},
		serialize() {
			return u.toString();
		},
		deserialize() {
			return u;
		}
	})],
	test(e) {
		return typeof AbortSignal == "undefined" ? !1 : e instanceof AbortSignal;
	},
	parse: {
		sync(e, r) {
			return e.aborted ? { reason: r.parse(e.reason) } : {};
		},
		async async(e, r) {
			if (e.aborted) return { reason: await r.parse(e.reason) };
			let a = await c(e);
			return { reason: await r.parse(a) };
		},
		stream(e, r) {
			if (e.aborted) return { reason: r.parse(e.reason) };
			let a = c(e);
			return {
				factory: r.parse(i),
				controller: r.parse(a)
			};
		}
	},
	serialize(e, r) {
		return e.reason ? "AbortSignal.abort(" + r.serialize(e.reason) + ")" : e.controller && e.factory ? "(" + r.serialize(e.factory) + ")(" + r.serialize(e.controller) + ").signal" : "(new AbortController).signal";
	},
	deserialize(e, r) {
		return e.reason ? AbortSignal.abort(r.deserialize(e.reason)) : e.controller ? u(r.deserialize(e.controller)).signal : new AbortController().signal;
	}
});
ni({
	tag: "seroval-plugins/web/Blob",
	test(e) {
		return typeof Blob == "undefined" ? !1 : e instanceof Blob;
	},
	parse: { async async(e, r) {
		return {
			type: await r.parse(e.type),
			buffer: await r.parse(await e.arrayBuffer())
		};
	} },
	serialize(e, r) {
		return "new Blob([" + r.serialize(e.buffer) + "],{type:" + r.serialize(e.type) + "})";
	},
	deserialize(e, r) {
		return new Blob([r.deserialize(e.buffer)], { type: r.deserialize(e.type) });
	}
});
function d(e) {
	return {
		detail: e.detail,
		bubbles: e.bubbles,
		cancelable: e.cancelable,
		composed: e.composed
	};
}
ni({
	tag: "seroval-plugins/web/CustomEvent",
	test(e) {
		return typeof CustomEvent == "undefined" ? !1 : e instanceof CustomEvent;
	},
	parse: {
		sync(e, r) {
			return {
				type: r.parse(e.type),
				options: r.parse(d(e))
			};
		},
		async async(e, r) {
			return {
				type: await r.parse(e.type),
				options: await r.parse(d(e))
			};
		},
		stream(e, r) {
			return {
				type: r.parse(e.type),
				options: r.parse(d(e))
			};
		}
	},
	serialize(e, r) {
		return "new CustomEvent(" + r.serialize(e.type) + "," + r.serialize(e.options) + ")";
	},
	deserialize(e, r) {
		return new CustomEvent(r.deserialize(e.type), r.deserialize(e.options));
	}
});
ni({
	tag: "seroval-plugins/web/DOMException",
	test(e) {
		return typeof DOMException == "undefined" ? !1 : e instanceof DOMException;
	},
	parse: {
		sync(e, r) {
			return {
				name: r.parse(e.name),
				message: r.parse(e.message)
			};
		},
		async async(e, r) {
			return {
				name: await r.parse(e.name),
				message: await r.parse(e.message)
			};
		},
		stream(e, r) {
			return {
				name: r.parse(e.name),
				message: r.parse(e.message)
			};
		}
	},
	serialize(e, r) {
		return "new DOMException(" + r.serialize(e.message) + "," + r.serialize(e.name) + ")";
	},
	deserialize(e, r) {
		return new DOMException(r.deserialize(e.message), r.deserialize(e.name));
	}
});
function f(e) {
	return {
		bubbles: e.bubbles,
		cancelable: e.cancelable,
		composed: e.composed
	};
}
ni({
	tag: "seroval-plugins/web/Event",
	test(e) {
		return typeof Event == "undefined" ? !1 : e instanceof Event;
	},
	parse: {
		sync(e, r) {
			return {
				type: r.parse(e.type),
				options: r.parse(f(e))
			};
		},
		async async(e, r) {
			return {
				type: await r.parse(e.type),
				options: await r.parse(f(e))
			};
		},
		stream(e, r) {
			return {
				type: r.parse(e.type),
				options: r.parse(f(e))
			};
		}
	},
	serialize(e, r) {
		return "new Event(" + r.serialize(e.type) + "," + r.serialize(e.options) + ")";
	},
	deserialize(e, r) {
		return new Event(r.deserialize(e.type), r.deserialize(e.options));
	}
});
var m = ni({
	tag: "seroval-plugins/web/File",
	test(e) {
		return typeof File == "undefined" ? !1 : e instanceof File;
	},
	parse: { async async(e, r) {
		return {
			name: await r.parse(e.name),
			options: await r.parse({
				type: e.type,
				lastModified: e.lastModified
			}),
			buffer: await r.parse(await e.arrayBuffer())
		};
	} },
	serialize(e, r) {
		return "new File([" + r.serialize(e.buffer) + "]," + r.serialize(e.name) + "," + r.serialize(e.options) + ")";
	},
	deserialize(e, r) {
		return new File([r.deserialize(e.buffer)], r.deserialize(e.name), r.deserialize(e.options));
	}
});
function y(e) {
	let r = [];
	return e.forEach((a, t) => {
		r.push([t, a]);
	}), r;
}
var o = {}, v = (e, r = new FormData(), a = 0, t = e.length, s) => {
	for (; a < t; a++) s = e[a], r.append(s[0], s[1]);
	return r;
};
ni({
	tag: "seroval-plugins/web/FormData",
	extends: [m, ni({
		tag: "seroval-plugins/web/FormDataFactory",
		test(e) {
			return e === o;
		},
		parse: {
			sync() {
				return o;
			},
			async async() {
				return await Promise.resolve(o);
			},
			stream() {
				return o;
			}
		},
		serialize() {
			return v.toString();
		},
		deserialize() {
			return o;
		}
	})],
	test(e) {
		return typeof FormData == "undefined" ? !1 : e instanceof FormData;
	},
	parse: {
		sync(e, r) {
			return {
				factory: r.parse(o),
				entries: r.parse(y(e))
			};
		},
		async async(e, r) {
			return {
				factory: await r.parse(o),
				entries: await r.parse(y(e))
			};
		},
		stream(e, r) {
			return {
				factory: r.parse(o),
				entries: r.parse(y(e))
			};
		}
	},
	serialize(e, r) {
		return "(" + r.serialize(e.factory) + ")(" + r.serialize(e.entries) + ")";
	},
	deserialize(e, r) {
		return v(r.deserialize(e.entries));
	}
});
function g(e) {
	let r = [];
	return e.forEach((a, t) => {
		r.push([t, a]);
	}), r;
}
var l = ni({
	tag: "seroval-plugins/web/Headers",
	test(e) {
		return typeof Headers == "undefined" ? !1 : e instanceof Headers;
	},
	parse: {
		sync(e, r) {
			return { value: r.parse(g(e)) };
		},
		async async(e, r) {
			return { value: await r.parse(g(e)) };
		},
		stream(e, r) {
			return { value: r.parse(g(e)) };
		}
	},
	serialize(e, r) {
		return "new Headers(" + r.serialize(e.value) + ")";
	},
	deserialize(e, r) {
		return new Headers(r.deserialize(e.value));
	}
});
ni({
	tag: "seroval-plugins/web/ImageData",
	test(e) {
		return typeof ImageData == "undefined" ? !1 : e instanceof ImageData;
	},
	parse: {
		sync(e, r) {
			return {
				data: r.parse(e.data),
				width: r.parse(e.width),
				height: r.parse(e.height),
				options: r.parse({ colorSpace: e.colorSpace })
			};
		},
		async async(e, r) {
			return {
				data: await r.parse(e.data),
				width: await r.parse(e.width),
				height: await r.parse(e.height),
				options: await r.parse({ colorSpace: e.colorSpace })
			};
		},
		stream(e, r) {
			return {
				data: r.parse(e.data),
				width: r.parse(e.width),
				height: r.parse(e.height),
				options: r.parse({ colorSpace: e.colorSpace })
			};
		}
	},
	serialize(e, r) {
		return "new ImageData(" + r.serialize(e.data) + "," + r.serialize(e.width) + "," + r.serialize(e.height) + "," + r.serialize(e.options) + ")";
	},
	deserialize(e, r) {
		return new ImageData(r.deserialize(e.data), r.deserialize(e.width), r.deserialize(e.height), r.deserialize(e.options));
	}
});
var n = {}, P = (e) => new ReadableStream({ start: (r) => {
	e.on({
		next: (a) => {
			try {
				r.enqueue(a);
			} catch (t) {}
		},
		throw: (a) => {
			r.error(a);
		},
		return: () => {
			try {
				r.close();
			} catch (a) {}
		}
	});
} }), x = ni({
	tag: "seroval-plugins/web/ReadableStreamFactory",
	test(e) {
		return e === n;
	},
	parse: {
		sync() {
			return n;
		},
		async async() {
			return await Promise.resolve(n);
		},
		stream() {
			return n;
		}
	},
	serialize() {
		return P.toString();
	},
	deserialize() {
		return n;
	}
});
function w(e) {
	let r = te$1(), a = e.getReader();
	async function t() {
		try {
			let s = await a.read();
			s.done ? r.return(s.value) : (r.next(s.value), await t());
		} catch (s) {
			r.throw(s);
		}
	}
	return t().catch(() => {}), r;
}
var p = ni({
	tag: "seroval/plugins/web/ReadableStream",
	extends: [x],
	test(e) {
		return typeof ReadableStream == "undefined" ? !1 : e instanceof ReadableStream;
	},
	parse: {
		sync(e, r) {
			return {
				factory: r.parse(n),
				stream: r.parse(te$1())
			};
		},
		async async(e, r) {
			return {
				factory: await r.parse(n),
				stream: await r.parse(w(e))
			};
		},
		stream(e, r) {
			return {
				factory: r.parse(n),
				stream: r.parse(w(e))
			};
		}
	},
	serialize(e, r) {
		return "(" + r.serialize(e.factory) + ")(" + r.serialize(e.stream) + ")";
	},
	deserialize(e, r) {
		return P(r.deserialize(e.stream));
	}
});
function N(e, r) {
	return {
		body: r,
		cache: e.cache,
		credentials: e.credentials,
		headers: e.headers,
		integrity: e.integrity,
		keepalive: e.keepalive,
		method: e.method,
		mode: e.mode,
		redirect: e.redirect,
		referrer: e.referrer,
		referrerPolicy: e.referrerPolicy
	};
}
ni({
	tag: "seroval-plugins/web/Request",
	extends: [p, l],
	test(e) {
		return typeof Request == "undefined" ? !1 : e instanceof Request;
	},
	parse: {
		async async(e, r) {
			return {
				url: await r.parse(e.url),
				options: await r.parse(N(e, e.body && !e.bodyUsed ? await e.clone().arrayBuffer() : null))
			};
		},
		stream(e, r) {
			return {
				url: r.parse(e.url),
				options: r.parse(N(e, e.body && !e.bodyUsed ? e.clone().body : null))
			};
		}
	},
	serialize(e, r) {
		return "new Request(" + r.serialize(e.url) + "," + r.serialize(e.options) + ")";
	},
	deserialize(e, r) {
		return new Request(r.deserialize(e.url), r.deserialize(e.options));
	}
});
function h(e) {
	return {
		headers: e.headers,
		status: e.status,
		statusText: e.statusText
	};
}
ni({
	tag: "seroval-plugins/web/Response",
	extends: [p, l],
	test(e) {
		return typeof Response == "undefined" ? !1 : e instanceof Response;
	},
	parse: {
		async async(e, r) {
			return {
				body: await r.parse(e.body && !e.bodyUsed ? await e.clone().arrayBuffer() : null),
				options: await r.parse(h(e))
			};
		},
		stream(e, r) {
			return {
				body: r.parse(e.body && !e.bodyUsed ? e.clone().body : null),
				options: r.parse(h(e))
			};
		}
	},
	serialize(e, r) {
		return "new Response(" + r.serialize(e.body) + "," + r.serialize(e.options) + ")";
	},
	deserialize(e, r) {
		return new Response(r.deserialize(e.body), r.deserialize(e.options));
	}
});
ni({
	tag: "seroval-plugins/web/URL",
	test(e) {
		return typeof URL == "undefined" ? !1 : e instanceof URL;
	},
	parse: {
		sync(e, r) {
			return { value: r.parse(e.href) };
		},
		async async(e, r) {
			return { value: await r.parse(e.href) };
		},
		stream(e, r) {
			return { value: r.parse(e.href) };
		}
	},
	serialize(e, r) {
		return "new URL(" + r.serialize(e.value) + ")";
	},
	deserialize(e, r) {
		return new URL(r.deserialize(e.value));
	}
});
ni({
	tag: "seroval-plugins/web/URLSearchParams",
	test(e) {
		return typeof URLSearchParams == "undefined" ? !1 : e instanceof URLSearchParams;
	},
	parse: {
		sync(e, r) {
			return { value: r.parse(e.toString()) };
		},
		async async(e, r) {
			return { value: await r.parse(e.toString()) };
		},
		stream(e, r) {
			return { value: r.parse(e.toString()) };
		}
	},
	serialize(e, r) {
		return "new URLSearchParams(" + r.serialize(e.value) + ")";
	},
	deserialize(e, r) {
		return new URLSearchParams(r.deserialize(e.value));
	}
});
var memo = (fn) => createMemo(() => fn());
L$1.AggregateError | L$1.BigIntTypedArray;
function ssr(t, ...nodes) {
	if (nodes.length) {
		let result = "";
		for (let i = 0; i < nodes.length; i++) {
			result += t[i];
			const node = nodes[i];
			if (node !== void 0) result += resolveSSRNode(node);
		}
		t = result + t[nodes.length];
	}
	return { t };
}
function ssrStyle(value) {
	if (!value) return "";
	if (typeof value === "string") return escape(value, true);
	let result = "";
	const k = Object.keys(value);
	for (let i = 0; i < k.length; i++) {
		const s = k[i];
		const v = value[s];
		if (v != void 0) {
			if (i) result += ";";
			const r = escape(v, true);
			if (r != void 0 && r !== "undefined") result += `${s}:${r}`;
		}
	}
	return result;
}
function ssrStyleProperty(name, value) {
	return value != null ? name + value : "";
}
function ssrAttribute(key, value, isBoolean) {
	return isBoolean ? value ? " " + key : "" : value != null ? ` ${key}="${value}"` : "";
}
function escape(s, attr) {
	const t = typeof s;
	if (t !== "string") {
		if (!attr && t === "function") return escape(s());
		if (!attr && Array.isArray(s)) {
			s = s.slice();
			for (let i = 0; i < s.length; i++) s[i] = escape(s[i]);
			return s;
		}
		if (attr && t === "boolean") return String(s);
		return s;
	}
	const delim = attr ? "\"" : "<";
	const escDelim = attr ? "&quot;" : "&lt;";
	let iDelim = s.indexOf(delim);
	let iAmp = s.indexOf("&");
	if (iDelim < 0 && iAmp < 0) return s;
	let left = 0, out = "";
	while (iDelim >= 0 && iAmp >= 0) if (iDelim < iAmp) {
		if (left < iDelim) out += s.substring(left, iDelim);
		out += escDelim;
		left = iDelim + 1;
		iDelim = s.indexOf(delim, left);
	} else {
		if (left < iAmp) out += s.substring(left, iAmp);
		out += "&amp;";
		left = iAmp + 1;
		iAmp = s.indexOf("&", left);
	}
	if (iDelim >= 0) do {
		if (left < iDelim) out += s.substring(left, iDelim);
		out += escDelim;
		left = iDelim + 1;
		iDelim = s.indexOf(delim, left);
	} while (iDelim >= 0);
	else while (iAmp >= 0) {
		if (left < iAmp) out += s.substring(left, iAmp);
		out += "&amp;";
		left = iAmp + 1;
		iAmp = s.indexOf("&", left);
	}
	return left < s.length ? out + s.substring(left) : out;
}
function resolveSSRNode(node, top) {
	const t = typeof node;
	if (t === "string") return node;
	if (node == null || t === "boolean") return "";
	if (Array.isArray(node)) {
		let prev = {};
		let mapped = "";
		for (let i = 0, len = node.length; i < len; i++) {
			if (!top && typeof prev !== "object" && typeof node[i] !== "object") mapped += `<!--!$-->`;
			mapped += resolveSSRNode(prev = node[i]);
		}
		return mapped;
	}
	if (t === "object") return node.t;
	if (t === "function") return resolveSSRNode(node());
	return String(node);
}
function notSup() {
	throw new Error("Client-only API called on the server side. Run client-only code in onMount, or conditionally run client-only component with <Show>.");
}
function Portal(props) {
	return "";
}
//#endregion
export { useContext as A, lazy as C, onMount as D, onCleanup as E, sharedConfig as O, getOwner as S, on as T, createMemo as _, ssr as a, createSignal as b, ssrStyleProperty as c, Show as d, Switch as f, createEffect as g, createContext as h, notSup as i, untrack as k, For as l, createComponent as m, escape as n, ssrAttribute as o, batch as p, memo as r, ssrStyle as s, Portal as t, Match as u, createRenderEffect as v, mergeProps as w, getListener as x, createRoot as y };
