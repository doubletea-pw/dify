import "./src-BByrOQhU.js";
import "./dayjs.min-CNlMkMP6.js";
import { n as __name, r as log } from "./src-Cs0BVng3.js";
import { c as configureSvgSize } from "./chunk-7R4GIKGN-BePrRbZt.js";
import { t as selectSvgElement } from "./chunk-HHEYEP7N-BFwvZyBl.js";
import "./chunk-XZSTWKYB-Du4OyF9x.js";
import "./chunk-R5LLSJPH-CNVgdckT.js";
import "./chunk-7E7YKBS2-CW54HvMs.js";
import "./chunk-EGIJ26TM-DTuRhEuz.js";
import "./chunk-C72U2L5F-DVbmiVwO.js";
import "./chunk-XIRO2GV7-71I8qof1.js";
import "./chunk-L3YUKLVL-B9pud4Y9.js";
import "./chunk-OZEHJAEY-DZblWhYy.js";
import { t as parse } from "./mermaid-parser.core-DC0q5KOL.js";
//#region node_modules/.pnpm/mermaid@11.13.0/node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-LFFYTUFH.mjs
var parser = { parse: /* @__PURE__ */ __name(async (input) => {
	const ast = await parse("info", input);
	log.debug(ast);
}, "parse") };
var DEFAULT_INFO_DB = { version: "11.13.0" };
var diagram = {
	parser,
	db: { getVersion: /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion") },
	renderer: { draw: /* @__PURE__ */ __name((text, id, version) => {
		log.debug("rendering info diagram\n" + text);
		const svg = selectSvgElement(id);
		configureSvgSize(svg, 100, 400, true);
		svg.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
	}, "draw") }
};
//#endregion
export { diagram };
