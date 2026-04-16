import { a as R$1, r as Li, t as At } from "./chunk-BO2N2NFS-Y3asTZ1B.js";
import { useContext, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region node_modules/.pnpm/streamdown@2.5.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/streamdown/dist/highlighted-body-OFNGDK62.js
var R = ({ code: s, language: e, raw: t, className: h, startLine: d, lineNumbers: m, ...p }) => {
	let { shikiTheme: l } = useContext(R$1), o = Li(), [a, i] = useState(t);
	return useEffect(() => {
		if (!o) {
			i(t);
			return;
		}
		let r = o.highlight({
			code: s,
			language: e,
			themes: l
		}, (c) => {
			i(c);
		});
		r && i(r);
	}, [
		s,
		e,
		l,
		o,
		t
	]), jsx(At, {
		className: h,
		language: e,
		lineNumbers: m,
		result: a,
		startLine: d,
		...p
	});
};
//#endregion
export { R as HighlightedCodeBlockBody };
