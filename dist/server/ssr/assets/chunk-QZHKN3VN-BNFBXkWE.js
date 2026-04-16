import { n as __name } from "./src-Cs0BVng3.js";
//#region node_modules/.pnpm/mermaid@11.13.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-QZHKN3VN.mjs
var ImperativeState = class {
	/**
	* @param init - Function that creates the default state.
	*/
	constructor(init) {
		this.init = init;
		this.records = this.init();
	}
	static {
		__name(this, "ImperativeState");
	}
	reset() {
		this.records = this.init();
	}
};
//#endregion
export { ImperativeState as t };
