//#region node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/store/dist/server.js
function isWrappable(obj) {
	return obj != null && typeof obj === "object" && (Object.getPrototypeOf(obj) === Object.prototype || Array.isArray(obj));
}
function setProperty(state, property, value, force) {
	if (!force && state[property] === value) return;
	if (value === void 0) delete state[property];
	else state[property] = value;
}
function mergeStoreNode(state, value, force) {
	const keys = Object.keys(value);
	for (let i = 0; i < keys.length; i += 1) {
		const key = keys[i];
		setProperty(state, key, value[key], force);
	}
}
function updateArray(current, next) {
	if (typeof next === "function") next = next(current);
	if (Array.isArray(next)) {
		if (current === next) return;
		let i = 0, len = next.length;
		for (; i < len; i++) {
			const value = next[i];
			if (current[i] !== value) setProperty(current, i, value);
		}
		setProperty(current, "length", len);
	} else mergeStoreNode(current, next);
}
function updatePath(current, path, traversed = []) {
	let part, next = current;
	if (path.length > 1) {
		part = path.shift();
		const partType = typeof part, isArray = Array.isArray(current);
		if (Array.isArray(part)) {
			for (let i = 0; i < part.length; i++) updatePath(current, [part[i]].concat(path), traversed);
			return;
		} else if (isArray && partType === "function") {
			for (let i = 0; i < current.length; i++) if (part(current[i], i)) updatePath(current, [i].concat(path), traversed);
			return;
		} else if (isArray && partType === "object") {
			const { from = 0, to = current.length - 1, by = 1 } = part;
			for (let i = from; i <= to; i += by) updatePath(current, [i].concat(path), traversed);
			return;
		} else if (path.length > 1) {
			updatePath(current[part], path, [part].concat(traversed));
			return;
		}
		next = current[part];
		traversed = [part].concat(traversed);
	}
	let value = path[0];
	if (typeof value === "function") {
		value = value(next, traversed);
		if (value === next) return;
	}
	if (part === void 0 && value == void 0) return;
	if (part === void 0 || isWrappable(next) && isWrappable(value) && !Array.isArray(value)) mergeStoreNode(next, value);
	else setProperty(current, part, value);
}
function createStore(state) {
	const isArray = Array.isArray(state);
	function setStore(...args) {
		isArray && args.length === 1 ? updateArray(state, args[0]) : updatePath(state, args);
	}
	return [state, setStore];
}
//#endregion
export { createStore as t };
