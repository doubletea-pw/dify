import * as React$1 from "react";
//#region hooks/use-breakpoints.ts
var MediaType = {
	mobile: "mobile",
	tablet: "tablet",
	pc: "pc"
};
var useBreakpoints = () => {
	const [width, setWidth] = React$1.useState(globalThis.innerWidth);
	const media = (() => {
		if (width <= 640) return MediaType.mobile;
		if (width <= 768) return MediaType.tablet;
		return MediaType.pc;
	})();
	React$1.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);
	return media;
};
//#endregion
export { useBreakpoints as n, MediaType as t };
