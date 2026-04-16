import { t as clsx } from "./clsx-D-9KtUp9.js";
import { A as useContext, b as createSignal, g as createEffect, h as createContext, i as notSup, m as createComponent, v as createRenderEffect } from "./server-mshjPt2o.js";
//#region node_modules/.pnpm/@tanstack+devtools-ui@0.5.1_csstype@3.2.3_solid-js@1.9.11/node_modules/@tanstack/devtools-ui/dist/esm/components/theme.js
var ThemeContext = createContext(void 0);
var ThemeContextProvider = (props) => {
	const [theme, setTheme] = createSignal(props.theme);
	createEffect(() => {
		setTheme(props.theme);
	});
	return createComponent(ThemeContext.Provider, {
		value: {
			theme,
			setTheme
		},
		get children() {
			return props.children;
		}
	});
};
function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("useTheme must be used within a ThemeContextProvider");
	return context;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+devtools-ui@0.5.1_csstype@3.2.3_solid-js@1.9.11/node_modules/@tanstack/devtools-ui/dist/esm/styles/tokens.js
var tokens = {
	colors: {
		inherit: "inherit",
		current: "currentColor",
		transparent: "transparent",
		black: "#000000",
		white: "#ffffff",
		neutral: {
			50: "#f9fafb",
			100: "#f2f4f7",
			200: "#eaecf0",
			300: "#d0d5dd",
			400: "#98a2b3",
			500: "#667085",
			600: "#475467",
			700: "#344054",
			800: "#1d2939",
			900: "#101828"
		},
		darkGray: {
			50: "#525c7a",
			100: "#49536e",
			200: "#414962",
			300: "#394056",
			400: "#313749",
			500: "#292e3d",
			600: "#212530",
			700: "#191c24",
			800: "#111318",
			900: "#0b0d10"
		},
		gray: {
			50: "#f9fafb",
			100: "#f2f4f7",
			200: "#eaecf0",
			300: "#d0d5dd",
			400: "#98a2b3",
			500: "#667085",
			600: "#475467",
			700: "#344054",
			800: "#1d2939",
			900: "#101828"
		},
		blue: {
			25: "#F5FAFF",
			50: "#EFF8FF",
			100: "#D1E9FF",
			200: "#B2DDFF",
			300: "#84CAFF",
			400: "#53B1FD",
			500: "#2E90FA",
			600: "#1570EF",
			700: "#175CD3",
			800: "#1849A9",
			900: "#194185"
		},
		green: {
			25: "#F6FEF9",
			50: "#ECFDF3",
			100: "#D1FADF",
			200: "#A6F4C5",
			300: "#6CE9A6",
			400: "#32D583",
			500: "#12B76A",
			600: "#039855",
			700: "#027A48",
			800: "#05603A",
			900: "#054F31"
		},
		red: {
			50: "#fef2f2",
			100: "#fee2e2",
			200: "#fecaca",
			300: "#fca5a5",
			400: "#f87171",
			500: "#ef4444",
			600: "#dc2626",
			700: "#b91c1c",
			800: "#991b1b",
			900: "#7f1d1d",
			950: "#450a0a"
		},
		yellow: {
			25: "#FFFCF5",
			50: "#FFFAEB",
			100: "#FEF0C7",
			200: "#FEDF89",
			300: "#FEC84B",
			400: "#FDB022",
			500: "#F79009",
			600: "#DC6803",
			700: "#B54708",
			800: "#93370D",
			900: "#7A2E0E"
		},
		purple: {
			25: "#FAFAFF",
			50: "#F4F3FF",
			100: "#EBE9FE",
			200: "#D9D6FE",
			300: "#BDB4FE",
			400: "#9B8AFB",
			500: "#7A5AF8",
			600: "#6938EF",
			700: "#5925DC",
			800: "#4A1FB8",
			900: "#3E1C96"
		},
		teal: {
			25: "#F6FEFC",
			50: "#F0FDF9",
			100: "#CCFBEF",
			200: "#99F6E0",
			300: "#5FE9D0",
			400: "#2ED3B7",
			500: "#15B79E",
			600: "#0E9384",
			700: "#107569",
			800: "#125D56",
			900: "#134E48"
		},
		pink: {
			25: "#fdf2f8",
			50: "#fce7f3",
			100: "#fbcfe8",
			200: "#f9a8d4",
			300: "#f472b6",
			400: "#ec4899",
			500: "#db2777",
			600: "#be185d",
			700: "#9d174d",
			800: "#831843",
			900: "#500724"
		},
		cyan: {
			25: "#ecfeff",
			50: "#cffafe",
			100: "#a5f3fc",
			200: "#67e8f9",
			300: "#22d3ee",
			400: "#06b6d4",
			500: "#0891b2",
			600: "#0e7490",
			700: "#155e75",
			800: "#164e63",
			900: "#083344"
		}
	},
	alpha: {
		100: "ff",
		90: "e5",
		80: "cc",
		70: "b3",
		60: "99",
		50: "80",
		40: "66",
		30: "4d",
		20: "33",
		10: "1a",
		0: "00"
	},
	font: {
		size: {
			"2xs": "calc(var(--tsrd-font-size) * 0.625)",
			xs: "calc(var(--tsrd-font-size) * 0.75)",
			sm: "calc(var(--tsrd-font-size) * 0.875)",
			md: "var(--tsrd-font-size)",
			lg: "calc(var(--tsrd-font-size) * 1.125)",
			xl: "calc(var(--tsrd-font-size) * 1.25)",
			"2xl": "calc(var(--tsrd-font-size) * 1.5)",
			"3xl": "calc(var(--tsrd-font-size) * 1.875)",
			"4xl": "calc(var(--tsrd-font-size) * 2.25)",
			"5xl": "calc(var(--tsrd-font-size) * 3)",
			"6xl": "calc(var(--tsrd-font-size) * 3.75)",
			"7xl": "calc(var(--tsrd-font-size) * 4.5)",
			"8xl": "calc(var(--tsrd-font-size) * 6)",
			"9xl": "calc(var(--tsrd-font-size) * 8)"
		},
		lineHeight: {
			"3xs": "calc(var(--tsrd-font-size) * 0.75)",
			"2xs": "calc(var(--tsrd-font-size) * 0.875)",
			xs: "calc(var(--tsrd-font-size) * 1)",
			sm: "calc(var(--tsrd-font-size) * 1.25)",
			md: "calc(var(--tsrd-font-size) * 1.5)",
			lg: "calc(var(--tsrd-font-size) * 1.75)",
			xl: "calc(var(--tsrd-font-size) * 2)",
			"2xl": "calc(var(--tsrd-font-size) * 2.25)",
			"3xl": "calc(var(--tsrd-font-size) * 2.5)",
			"4xl": "calc(var(--tsrd-font-size) * 2.75)",
			"5xl": "calc(var(--tsrd-font-size) * 3)",
			"6xl": "calc(var(--tsrd-font-size) * 3.25)",
			"7xl": "calc(var(--tsrd-font-size) * 3.5)",
			"8xl": "calc(var(--tsrd-font-size) * 3.75)",
			"9xl": "calc(var(--tsrd-font-size) * 4)"
		},
		weight: {
			thin: "100",
			extralight: "200",
			light: "300",
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "800",
			black: "900"
		},
		fontFamily: {
			sans: "ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",
			mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`
		}
	},
	breakpoints: {
		xs: "320px",
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		"2xl": "1536px"
	},
	border: { radius: {
		none: "0px",
		xs: "calc(var(--tsrd-font-size) * 0.125)",
		sm: "calc(var(--tsrd-font-size) * 0.25)",
		md: "calc(var(--tsrd-font-size) * 0.375)",
		lg: "calc(var(--tsrd-font-size) * 0.5)",
		xl: "calc(var(--tsrd-font-size) * 0.75)",
		"2xl": "calc(var(--tsrd-font-size) * 1)",
		"3xl": "calc(var(--tsrd-font-size) * 1.5)",
		full: "9999px"
	} },
	size: {
		0: "0px",
		.25: "calc(var(--tsrd-font-size) * 0.0625)",
		.5: "calc(var(--tsrd-font-size) * 0.125)",
		1: "calc(var(--tsrd-font-size) * 0.25)",
		1.5: "calc(var(--tsrd-font-size) * 0.375)",
		2: "calc(var(--tsrd-font-size) * 0.5)",
		2.5: "calc(var(--tsrd-font-size) * 0.625)",
		3: "calc(var(--tsrd-font-size) * 0.75)",
		3.5: "calc(var(--tsrd-font-size) * 0.875)",
		4: "calc(var(--tsrd-font-size) * 1)",
		4.5: "calc(var(--tsrd-font-size) * 1.125)",
		5: "calc(var(--tsrd-font-size) * 1.25)",
		5.5: "calc(var(--tsrd-font-size) * 1.375)",
		6: "calc(var(--tsrd-font-size) * 1.5)",
		6.5: "calc(var(--tsrd-font-size) * 1.625)",
		7: "calc(var(--tsrd-font-size) * 1.75)",
		8: "calc(var(--tsrd-font-size) * 2)",
		9: "calc(var(--tsrd-font-size) * 2.25)",
		10: "calc(var(--tsrd-font-size) * 2.5)",
		11: "calc(var(--tsrd-font-size) * 2.75)",
		12: "calc(var(--tsrd-font-size) * 3)",
		14: "calc(var(--tsrd-font-size) * 3.5)",
		16: "calc(var(--tsrd-font-size) * 4)",
		20: "calc(var(--tsrd-font-size) * 5)",
		24: "calc(var(--tsrd-font-size) * 6)",
		28: "calc(var(--tsrd-font-size) * 7)",
		32: "calc(var(--tsrd-font-size) * 8)",
		36: "calc(var(--tsrd-font-size) * 9)",
		40: "calc(var(--tsrd-font-size) * 10)",
		44: "calc(var(--tsrd-font-size) * 11)",
		48: "calc(var(--tsrd-font-size) * 12)",
		52: "calc(var(--tsrd-font-size) * 13)",
		56: "calc(var(--tsrd-font-size) * 14)",
		60: "calc(var(--tsrd-font-size) * 15)",
		64: "calc(var(--tsrd-font-size) * 16)",
		72: "calc(var(--tsrd-font-size) * 18)",
		80: "calc(var(--tsrd-font-size) * 20)",
		96: "calc(var(--tsrd-font-size) * 24)"
	},
	shadow: {
		xs: (_ = "rgb(0 0 0 / 0.1)") => `0 1px 2px 0 rgb(0 0 0 / 0.05)`,
		sm: (color = "rgb(0 0 0 / 0.1)") => `0 1px 3px 0 ${color}, 0 1px 2px -1px ${color}`,
		md: (color = "rgb(0 0 0 / 0.1)") => `0 4px 6px -1px ${color}, 0 2px 4px -2px ${color}`,
		lg: (color = "rgb(0 0 0 / 0.1)") => `0 10px 15px -3px ${color}, 0 4px 6px -4px ${color}`,
		xl: (color = "rgb(0 0 0 / 0.1)") => `0 20px 25px -5px ${color}, 0 8px 10px -6px ${color}`,
		"2xl": (color = "rgb(0 0 0 / 0.25)") => `0 25px 50px -12px ${color}`,
		inner: (color = "rgb(0 0 0 / 0.05)") => `inset 0 2px 4px 0 ${color}`,
		none: () => `none`
	},
	zIndices: {
		hide: -1,
		auto: "auto",
		base: 0,
		docked: 10,
		dropdown: 1e3,
		sticky: 1100,
		banner: 1200,
		overlay: 1300,
		modal: 1400,
		popover: 1500,
		skipLink: 1600,
		toast: 1700,
		tooltip: 1800
	}
}, e = { data: "" }, t = (t) => {
	if ("object" == typeof window) {
		let e = (t ? t.querySelector("#_goober") : window._goober) || Object.assign(document.createElement("style"), {
			innerHTML: " ",
			id: "_goober"
		});
		return e.nonce = window.__nonce__, e.parentNode || (t || document.head).appendChild(e), e.firstChild;
	}
	return t || e;
}, l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, a = /\/\*[^]*?\*\/|  +/g, n = /\n+/g, o = (e, t) => {
	let r = "", l = "", a = "";
	for (let n in e) {
		let c = e[n];
		"@" == n[0] ? "i" == n[1] ? r = n + " " + c + ";" : l += "f" == n[1] ? o(c, n) : n + "{" + o(c, "k" == n[1] ? "" : t) + "}" : "object" == typeof c ? l += o(c, t ? t.replace(/([^,])+/g, (e) => n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t) => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : n) : null != c && (n = /^--/.test(n) ? n : n.replace(/[A-Z]/g, "-$&").toLowerCase(), a += o.p ? o.p(n, c) : n + ":" + c + ";");
	}
	return r + (t && a ? t + "{" + a + "}" : a) + l;
}, c = {}, s = (e) => {
	if ("object" == typeof e) {
		let t = "";
		for (let r in e) t += r + s(e[r]);
		return t;
	}
	return e;
}, i = (e, t, r, i, p) => {
	let u = s(e), d = c[u] || (c[u] = ((e) => {
		let t = 0, r = 11;
		for (; t < e.length;) r = 101 * r + e.charCodeAt(t++) >>> 0;
		return "go" + r;
	})(u));
	if (!c[d]) {
		let t = u !== e ? e : ((e) => {
			let t, r, o = [{}];
			for (; t = l.exec(e.replace(a, ""));) t[4] ? o.shift() : t[3] ? (r = t[3].replace(n, " ").trim(), o.unshift(o[0][r] = o[0][r] || {})) : o[0][t[1]] = t[2].replace(n, " ").trim();
			return o[0];
		})(e);
		c[d] = o(p ? { ["@keyframes " + d]: t } : t, r ? "" : "." + d);
	}
	let f = r && c.g ? c.g : null;
	return r && (c.g = c[d]), ((e, t, r, l) => {
		l ? t.data = t.data.replace(l, e) : -1 === t.data.indexOf(e) && (t.data = r ? e + t.data : t.data + e);
	})(c[d], t, i, f), d;
}, p = (e, t, r) => e.reduce((e, l, a) => {
	let n = t[a];
	if (n && n.call) {
		let e = n(r), t = e && e.props && e.props.className || /^go/.test(e) && e;
		n = t ? "." + t : e && "object" == typeof e ? e.props ? "" : o(e, "") : !1 === e ? "" : e;
	}
	return e + l + (null == n ? "" : n);
}, "");
function u(e) {
	let r = this || {}, l = e.call ? e(r.p) : e;
	return i(l.unshift ? l.raw ? p(l, [].slice.call(arguments, 1), r.p) : l.reduce((e, t) => Object.assign(e, t && t.call ? t(r.p) : t), {}) : l, t(r.target), r.g, r.o, r.k);
}
u.bind({ g: 1 });
var h = u.bind({ k: 1 });
//#endregion
//#region node_modules/.pnpm/@tanstack+devtools-ui@0.5.1_csstype@3.2.3_solid-js@1.9.11/node_modules/@tanstack/devtools-ui/dist/esm/styles/use-styles.js
var buttonVariantColors = {
	primary: {
		bg: {
			light: tokens.colors.gray[900],
			dark: tokens.colors.gray[100]
		},
		hover: {
			light: tokens.colors.gray[800],
			dark: tokens.colors.gray[200]
		},
		active: {
			light: tokens.colors.gray[700],
			dark: tokens.colors.gray[300]
		},
		text: {
			light: "#fff",
			dark: tokens.colors.gray[900]
		},
		border: {
			light: tokens.colors.gray[800],
			dark: tokens.colors.gray[200]
		},
		outline: {
			light: tokens.colors.gray[900],
			dark: tokens.colors.gray[100]
		},
		outlineHover: {
			light: tokens.colors.gray[800],
			dark: tokens.colors.gray[200]
		}
	},
	secondary: {
		bg: {
			light: tokens.colors.gray[100],
			dark: tokens.colors.gray[100]
		},
		hover: {
			light: tokens.colors.gray[200],
			dark: tokens.colors.gray[200]
		},
		active: {
			light: tokens.colors.gray[300],
			dark: tokens.colors.gray[300]
		},
		text: {
			light: tokens.colors.gray[900],
			dark: tokens.colors.gray[900]
		},
		border: {
			light: tokens.colors.gray[300],
			dark: tokens.colors.gray[300]
		},
		outline: {
			light: tokens.colors.gray[700],
			dark: tokens.colors.gray[300]
		},
		outlineHover: {
			light: tokens.colors.gray[800],
			dark: tokens.colors.gray[200]
		}
	},
	info: {
		bg: {
			light: tokens.colors.blue[500],
			dark: tokens.colors.blue[500]
		},
		hover: {
			light: tokens.colors.blue[600],
			dark: tokens.colors.blue[600]
		},
		active: {
			light: tokens.colors.blue[700],
			dark: tokens.colors.blue[700]
		},
		text: {
			light: "#fff",
			dark: "#fff"
		},
		border: {
			light: tokens.colors.blue[500],
			dark: tokens.colors.blue[500]
		},
		outline: {
			light: tokens.colors.blue[700],
			dark: tokens.colors.blue[300]
		},
		outlineHover: {
			light: tokens.colors.blue[600],
			dark: tokens.colors.blue[200]
		}
	},
	warning: {
		bg: {
			light: tokens.colors.yellow[500],
			dark: tokens.colors.yellow[500]
		},
		hover: {
			light: tokens.colors.yellow[600],
			dark: tokens.colors.yellow[600]
		},
		active: {
			light: tokens.colors.yellow[700],
			dark: tokens.colors.yellow[700]
		},
		text: {
			light: "#fff",
			dark: "#fff"
		},
		border: {
			light: tokens.colors.yellow[500],
			dark: tokens.colors.yellow[500]
		},
		outline: {
			light: tokens.colors.yellow[700],
			dark: tokens.colors.yellow[300]
		},
		outlineHover: {
			light: tokens.colors.yellow[600],
			dark: tokens.colors.yellow[200]
		}
	},
	danger: {
		bg: {
			light: tokens.colors.red[500],
			dark: tokens.colors.red[500]
		},
		hover: {
			light: tokens.colors.red[600],
			dark: tokens.colors.red[600]
		},
		active: {
			light: tokens.colors.red[700],
			dark: tokens.colors.red[700]
		},
		text: {
			light: "#fff",
			dark: "#fff"
		},
		border: {
			light: tokens.colors.red[500],
			dark: tokens.colors.red[500]
		},
		outline: {
			light: tokens.colors.red[700],
			dark: tokens.colors.red[300]
		},
		outlineHover: {
			light: tokens.colors.red[600],
			dark: tokens.colors.red[200]
		}
	},
	success: {
		bg: {
			light: tokens.colors.green[500],
			dark: tokens.colors.green[500]
		},
		hover: {
			light: tokens.colors.green[600],
			dark: tokens.colors.green[600]
		},
		active: {
			light: tokens.colors.green[700],
			dark: tokens.colors.green[700]
		},
		text: {
			light: "#fff",
			dark: "#fff"
		},
		border: {
			light: tokens.colors.green[500],
			dark: tokens.colors.green[500]
		},
		outline: {
			light: tokens.colors.green[700],
			dark: tokens.colors.green[300]
		},
		outlineHover: {
			light: tokens.colors.green[600],
			dark: tokens.colors.green[200]
		}
	}
};
var css = u;
var stylesFactory = (theme) => {
	const { colors, font, size, border } = tokens;
	const { fontFamily } = font;
	const t = (light, dark) => theme === "light" ? light : dark;
	const buildButtonVariant = (variant) => {
		const v = buttonVariantColors[variant];
		const outlineColor = t(v.outline.light, v.outline.dark);
		const outlineHoverColor = t(v.outlineHover.light, v.outlineHover.dark);
		const solidBg = t(v.bg.light, v.bg.dark);
		const solidHover = t(v.hover.light, v.hover.dark);
		const solidActive = t(v.active.light, v.active.dark);
		const solidText = t(v.text.light, v.text.dark);
		const solidBorder = t(v.border.light, v.border.dark);
		return {
			ghost: css`
        background: transparent;
        color: ${outlineColor};
        border-color: transparent;
        &:hover {
          background: ${t(colors.gray[100], colors.darkGray[800])};
          color: ${outlineHoverColor};
        }
        &:active {
          background: ${t(colors.gray[200], colors.darkGray[700])};
          color: ${outlineHoverColor};
        }
      `,
			outline: css`
        background: transparent;
        color: ${outlineColor};
        border-color: ${outlineColor};
        &:hover {
          background: ${t(colors.gray[50], colors.darkGray[800])};
          color: ${outlineHoverColor};
          border-color: ${outlineHoverColor};
        }
        &:active {
          background: ${t(colors.gray[100], colors.darkGray[700])};
          color: ${outlineHoverColor};
          border-color: ${outlineHoverColor};
        }
      `,
			solid: css`
        background: ${solidBg};
        color: ${solidText};
        border-color: ${solidBorder};
        &:hover {
          background: ${solidHover};
          border-color: ${solidHover};
          box-shadow: ${t(tokens.shadow.xs("rgb(0 0 0 / 0.12)"), tokens.shadow.xs("rgb(0 0 0 / 0.5)"))};
        }
        &:active {
          background: ${solidActive};
          border-color: ${solidActive};
          box-shadow: ${t(tokens.shadow.inner("rgb(0 0 0 / 0.2)"), tokens.shadow.inner("rgb(0 0 0 / 0.6)"))};
        }
      `
		};
	};
	const buttonVariants = {
		primary: buildButtonVariant("primary"),
		secondary: buildButtonVariant("secondary"),
		info: buildButtonVariant("info"),
		warning: buildButtonVariant("warning"),
		danger: buildButtonVariant("danger"),
		success: buildButtonVariant("success")
	};
	const wrapperSize = 320;
	return {
		logo: css`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      width: ${size[12]};
      height: ${size[12]};
      font-family: ${fontFamily.sans};
      gap: ${tokens.size[.5]};
      padding: 0;
      &:hover {
        opacity: 0.7;
      }
    `,
		selectWrapper: css`
      width: 100%;
      max-width: ${wrapperSize}px;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    `,
		selectContainer: css`
      width: 100%;
    `,
		selectLabel: css`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${t(colors.gray[900], colors.gray[100])};
      text-align: left;
    `,
		selectDescription: css`
      font-size: 0.8rem;
      color: ${t(colors.gray[500], colors.gray[400])};
      margin: 0;
      line-height: 1.3;
      text-align: left;
    `,
		select: css`
      appearance: none;
      width: 100%;
      padding: 0.5rem 3rem 0.5rem 0.75rem;
      border-radius: 0.375rem;
      background-color: ${t(colors.gray[50], colors.darkGray[800])};
      color: ${t(colors.gray[900], colors.gray[100])};
      border: 1px solid ${t(colors.gray[200], colors.gray[800])};
      font-size: 0.875rem;
      transition: all 0.15s ease;
      cursor: pointer;

      /* Custom arrow */
      background-image: url("data:image/svg+xml;utf8,<svg fill='%236b7280' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
      background-size: 1.25rem;

      &:hover {
        border-color: ${t(colors.gray[300], colors.gray[700])};
      }

      &:focus {
        outline: none;
        border-color: ${colors.gray[400]};
        box-shadow: 0 0 0 3px ${t(colors.gray[200], colors.gray[800])};
      }
    `,
		inputWrapper: css`
      width: 100%;
      max-width: ${wrapperSize}px;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    `,
		inputContainer: css`
      width: 100%;
    `,
		inputLabel: css`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${t(colors.gray[900], colors.gray[100])};
      text-align: left;
    `,
		inputDescription: css`
      font-size: 0.8rem;
      color: ${t(colors.gray[500], colors.gray[400])};
      margin: 0;
      line-height: 1.3;
      text-align: left;
    `,
		input: css`
      appearance: none;
      box-sizing: border-box;
      width: 100%;
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      background-color: ${t(colors.gray[50], colors.darkGray[800])};
      color: ${t(colors.gray[900], colors.gray[100])};
      border: 1px solid ${t(colors.gray[200], colors.gray[800])};
      font-size: 0.875rem;
      font-family: ${fontFamily.mono};
      transition: all 0.15s ease;

      &::placeholder {
        color: ${t(colors.gray[400], colors.gray[500])};
      }

      &:hover {
        border-color: ${t(colors.gray[300], colors.gray[700])};
      }

      &:focus {
        outline: none;
        border-color: ${t(colors.gray[400], colors.gray[600])};
        box-shadow: 0 0 0 3px ${t(colors.gray[200], colors.gray[800])};
      }
    `,
		checkboxWrapper: css`
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      cursor: pointer;
      user-select: none;
      padding: 0.375rem;
      border-radius: 0.375rem;
      transition: background-color 0.15s ease;

      &:hover {
        background-color: ${t(colors.gray[50], colors.darkGray[900])};
      }
    `,
		checkboxContainer: css`
      width: 100%;
    `,
		checkboxLabelContainer: css`
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
    `,
		checkbox: css`
      appearance: none;
      width: 1.25rem;
      height: 1.25rem;
      border: 2px solid ${t(colors.gray[300], colors.gray[700])};
      border-radius: 0.25rem;
      background-color: ${t(colors.gray[50], colors.darkGray[800])};
      display: grid;
      place-items: center;
      transition: all 0.15s ease;
      flex-shrink: 0;
      margin-top: 0.125rem;

      &:hover {
        border-color: ${t(colors.gray[400], colors.gray[600])};
      }

      &:checked {
        background-color: ${t(colors.gray[900], colors.gray[100])};
        border-color: ${t(colors.gray[900], colors.gray[100])};
      }

      &:checked::after {
        content: '';
        width: 0.4rem;
        height: 0.6rem;
        border: solid ${t("#fff", colors.gray[900])};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        margin-top: -3px;
      }
    `,
		checkboxLabel: css`
      color: ${t(colors.gray[900], colors.gray[100])};
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.4;
      text-align: left;
    `,
		checkboxDescription: css`
      color: ${t(colors.gray[500], colors.gray[400])};
      font-size: 0.8rem;
      line-height: 1.3;
      text-align: left;
    `,
		button: {
			base: css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: ${tokens.font.fontFamily.sans};
        font-size: 0.8rem;
        font-weight: 500;
        border-radius: 0.375rem;
        padding: 0.375rem 0.75rem;
        cursor: pointer;
        transition:
          background 0.15s,
          color 0.15s,
          border 0.15s,
          box-shadow 0.15s;
        outline: none;
        border-width: 1px;
        border-style: solid;
      `,
			variant(variant, outline, ghost) {
				const v = buttonVariants[variant];
				if (ghost) return v.ghost;
				if (outline) return v.outline;
				return v.solid;
			}
		},
		tag: {
			dot: (color) => css`
        width: ${tokens.size[1.5]};
        height: ${tokens.size[1.5]};
        border-radius: ${tokens.border.radius.full};
        background-color: ${t(tokens.colors[color][500], tokens.colors[color][500])};
      `,
			base: css`
        display: flex;
        gap: ${tokens.size[1.5]};
        box-sizing: border-box;
        height: ${tokens.size[6.5]};
        background: ${t(colors.gray[50], colors.darkGray[500])};
        color: ${t(colors.gray[700], colors.gray[300])};
        border-radius: ${tokens.border.radius.sm};
        font-size: ${font.size.sm};
        padding: ${tokens.size[1]};
        padding-left: ${tokens.size[1.5]};
        align-items: center;
        font-weight: ${font.weight.medium};
        border: ${t("1px solid " + colors.gray[300], "1px solid transparent")};
        user-select: none;
        position: relative;
        &:focus-visible {
          outline-offset: 2px;
          outline: 2px solid ${t(colors.blue[700], colors.blue[800])};
        }
      `,
			label: css`
        font-size: ${font.size.xs};
      `,
			count: css`
        font-size: ${font.size.xs};
        padding: 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${t(colors.gray[500], colors.gray[400])};
        background-color: ${t(colors.gray[200], colors.darkGray[300])};
        border-radius: 2px;
        font-variant-numeric: tabular-nums;
        height: ${tokens.size[4.5]};
      `
		},
		tree: {
			info: css`
        color: ${t(colors.gray[500], colors.gray[500])};
        font-size: ${font.size.xs};
        margin-right: ${size[1]};
      `,
			actionButton: css`
        background-color: transparent;
        color: ${t(colors.gray[500], colors.gray[500])};
        border: none;
        display: inline-flex;
        padding: 0;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: ${size[3]};
        height: ${size[3]};
        position: relative;
        z-index: 1;

        &:hover svg {
          color: ${t(colors.gray[600], colors.gray[400])};
        }

        &:focus-visible {
          border-radius: ${border.radius.xs};
          outline: 2px solid ${t(colors.blue[700], colors.blue[800])};
          outline-offset: 2px;
        }
      `,
			expanderContainer: css`
        position: relative;
      `,
			expander: css`
        position: absolute;
        cursor: pointer;
        left: -16px;
        top: 3px;
        & path {
          stroke: ${t(colors.blue[400], colors.blue[300])};
        }
        & svg {
          width: ${size[3]};
          height: ${size[3]};
        }

        display: inline-flex;
        align-items: center;
        transition: all 0.1s ease;
      `,
			expandedLine: (hasBorder) => css`
        display: block;
        padding-left: 0.75rem;
        margin-left: -0.7rem;
        ${hasBorder ? `border-left: 1px solid ${t(colors.blue[400], colors.blue[300])};` : ""}
      `,
			collapsible: css`
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          background-color: ${t(colors.gray[100], colors.darkGray[700])};
          border-radius: ${tokens.border.radius.sm};
          padding: 0 ${tokens.size[1]};
        }
      `,
			actions: css`
        display: inline-flex;
        margin-left: ${size[2]};
        gap: ${size[2]};
        align-items: center;
        & svg {
          height: 12px;
          width: 12px;
        }
      `,
			valueCollapsed: css`
        color: ${t(colors.gray[500], colors.gray[400])};
      `,
			valueFunction: css`
        color: ${t(colors.cyan[500], colors.cyan[400])};
      `,
			valueString: css`
        color: ${t(colors.green[500], colors.green[400])};
      `,
			valueNumber: css`
        color: ${t(colors.yellow[500], colors.yellow[400])};
      `,
			valueBoolean: css`
        color: ${t(colors.pink[500], colors.pink[400])};
      `,
			valueNull: css`
        color: ${t(colors.gray[500], colors.gray[400])};
        font-style: italic;
      `,
			valueKey: css`
        color: ${t(colors.blue[400], colors.blue[300])};
      `,
			valueBraces: css`
        color: ${colors.gray[500]};
      `,
			valueContainer: (isRoot) => css`
        display: block;
        margin-left: ${isRoot ? "0" : "1rem"};

        &:not(:hover) .actions {
          display: none;
        }

        &:hover .actions {
          display: inline-flex;
        }
      `
		},
		header: {
			row: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${tokens.size[2]} ${tokens.size[2.5]};
        gap: ${tokens.size[2.5]};
        border-bottom: ${t(colors.gray[300], colors.darkGray[500])} 1px solid;
        align-items: center;
      `,
			logoAndToggleContainer: css`
        display: flex;
        gap: ${tokens.size[3]};
        align-items: center;
        & > button {
          padding: 0;
          background: transparent;
          border: none;
          display: flex;
          gap: ${size[.5]};
          flex-direction: column;
        }
      `,
			logo: css`
        cursor: pointer;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        border: none;
        gap: ${tokens.size[.5]};
        padding: 0;
        &:hover {
          opacity: 0.7;
        }
        &:focus-visible {
          outline-offset: 4px;
          border-radius: ${border.radius.xs};
          outline: 2px solid ${colors.blue[800]};
        }
      `,
			tanstackLogo: css`
        font-size: ${font.size.md};
        font-weight: ${font.weight.bold};
        line-height: ${font.lineHeight.xs};
        white-space: nowrap;
        color: ${t(colors.gray[700], colors.gray[300])};
      `,
			flavorLogo: (flavorLight, flavorDark) => css`
        font-weight: ${font.weight.semibold};
        font-size: ${font.size.xs};
        background: linear-gradient(to right, ${t(flavorLight, flavorDark)});
        background-clip: text;
        -webkit-background-clip: text;
        line-height: 1;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
      `
		},
		section: {
			main: css`
        margin-bottom: 1.5rem;
        padding: 1rem;
        background-color: ${t(colors.gray[50], colors.darkGray[800])};
        border: 1px solid ${t(colors.gray[200], colors.gray[800])};
        border-radius: 0.5rem;
        box-shadow: none;
      `,
			title: css`
        font-size: 1rem;
        font-weight: 600;
        color: ${t(colors.gray[900], colors.gray[100])};
        margin: 0 0 0.75rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${t(colors.gray[200], colors.gray[800])};
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-align: left;
      `,
			icon: css`
        height: 18px;
        width: 18px;
        & > svg {
          height: 100%;
          width: 100%;
        }
        color: ${t(colors.gray[700], colors.gray[400])};
      `,
			description: css`
        color: ${t(colors.gray[500], colors.gray[400])};
        font-size: 0.8rem;
        margin: 0 0 1rem 0;
        line-height: 1.4;
        text-align: left;
      `
		},
		mainPanel: { panel: (withPadding) => css`
        padding: ${withPadding ? tokens.size[3] : 0};
        background: ${t(colors.gray[50], colors.darkGray[700])};
        overflow-y: auto;
        height: 100%;
      ` }
	};
};
function useStyles() {
	const { theme } = useTheme();
	const [styles, setStyles] = createSignal(stylesFactory(theme()));
	createEffect(() => {
		setStyles(stylesFactory(theme()));
	});
	return styles;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+devtools-ui@0.5.1_csstype@3.2.3_solid-js@1.9.11/node_modules/@tanstack/devtools-ui/dist/esm/components/icons.js
var _tmpl$$1 = /* @__PURE__ */ notSup(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>`), _tmpl$2 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M8 6h10"></path><path d="M6 12h9"></path><path d="M11 18h7">`), _tmpl$3 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class="lucide lucide-file-search2-icon lucide-file-search-2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx=11.5 cy=14.5 r=2.5></circle><path d="M13.3 16.3 15 18">`), _tmpl$4 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93">`), _tmpl$5 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="m10 9-3 3 3 3"></path><path d="m14 15 3-3-3-3"></path><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719">`), _tmpl$6 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M10 8h.01"></path><path d="M12 12h.01"></path><path d="M14 8h.01"></path><path d="M16 12h.01"></path><path d="M18 8h.01"></path><path d="M6 8h.01"></path><path d="M7 16h10"></path><path d="M8 12h.01"></path><rect width=20 height=16 x=2 y=4 rx=2>`), _tmpl$7 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx=12 cy=10 r=3>`), _tmpl$8 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1=8 x2=16 y1=12 y2=12>`), _tmpl$9 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M18 6 6 18"></path><path d="m6 6 12 12">`), _tmpl$0 = /* @__PURE__ */ notSup(`<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16.5 9.39999L7.5 4.20999M12 17.5L12 3M21 16V7.99999C20.9996 7.64926 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.26999L13 2.26999C12.696 2.09446 12.3511 2.00204 12 2.00204C11.6489 2.00204 11.304 2.09446 11 2.26999L4 6.26999C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64926 3 7.99999V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`), _tmpl$1 = /* @__PURE__ */ notSup(`<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.76489 14.1003 1.98232 16.07 2.85999M22 4L12 14.01L9 11.01"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`), _tmpl$10 = /* @__PURE__ */ notSup(`<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`), _tmpl$11 = /* @__PURE__ */ notSup(`<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 9L12 15L18 9"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`), _tmpl$12 = /* @__PURE__ */ notSup(`<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`), _tmpl$13 = /* @__PURE__ */ notSup(`<svg width=12 height=12 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H11M15 3H21M21 3V9M21 3L10 14"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`), _tmpl$14 = /* @__PURE__ */ notSup(`<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`), _tmpl$15 = /* @__PURE__ */ notSup(`<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M18 6L6 18M6 6L18 18"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`), _tmpl$16 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M2 10h6V4"></path><path d="m2 4 6 6"></path><path d="M21 10V7a2 2 0 0 0-2-2h-7"></path><path d="M3 14v2a2 2 0 0 0 2 2h3"></path><rect x=12 y=14 width=10 height=7 rx=1>`), _tmpl$17 = /* @__PURE__ */ notSup(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`), _tmpl$18 = /* @__PURE__ */ notSup(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
function Copier() {
	return _tmpl$$1();
}
function List() {
	return _tmpl$2();
}
function PageSearch() {
	return _tmpl$3();
}
function Cogs() {
	return _tmpl$4();
}
function SettingsCog() {
	return _tmpl$5();
}
function Keyboard() {
	return _tmpl$6();
}
function GeoTag() {
	return _tmpl$7();
}
function SocialBubble() {
	return _tmpl$5();
}
function Link() {
	return _tmpl$8();
}
function X() {
	return _tmpl$9();
}
function PackageIcon() {
	return _tmpl$0();
}
function CheckCircleIcon() {
	return _tmpl$1();
}
function XCircleIcon() {
	return _tmpl$10();
}
function ChevronDownIcon() {
	return _tmpl$11();
}
function SearchIcon() {
	return _tmpl$12();
}
function ExternalLinkIcon() {
	return _tmpl$13();
}
function SettingsIcon() {
	return _tmpl$14();
}
function CloseIcon() {
	return _tmpl$15();
}
function PiP() {
	return _tmpl$16();
}
function CopiedCopier(props) {
	return (() => {
		var _el$18 = _tmpl$17(), _el$19 = _el$18.firstChild;
		createRenderEffect(() => notSup(_el$19, "stroke", props.theme === "dark" ? "#12B76A" : "#027A48"));
		return _el$18;
	})();
}
function ErrorCopier() {
	return _tmpl$18();
}
//#endregion
//#region node_modules/.pnpm/@tanstack+devtools-ui@0.5.1_csstype@3.2.3_solid-js@1.9.11/node_modules/@tanstack/devtools-ui/dist/esm/components/main-panel.js
var _tmpl$ = /* @__PURE__ */ notSup(`<div>`);
var MainPanel = ({ className: className$1, children, class: classStyles, withPadding }) => {
	const styles = useStyles();
	return (() => {
		var _el$ = _tmpl$();
		notSup(_el$, children);
		createRenderEffect(() => notSup(_el$, clsx(styles().mainPanel.panel(Boolean(withPadding)), className$1, classStyles)));
		return _el$;
	})();
};
//#endregion
export { css as C, ThemeContextProvider as D, u as E, useTheme as O, XCircleIcon as S, h as T, SearchIcon as _, Cogs as a, SocialBubble as b, ErrorCopier as c, Keyboard as d, Link as f, PiP as g, PageSearch as h, CloseIcon as i, ExternalLinkIcon as l, PackageIcon as m, CheckCircleIcon as n, CopiedCopier as o, List as p, ChevronDownIcon as r, Copier as s, MainPanel as t, GeoTag as u, SettingsCog as v, useStyles as w, X as x, SettingsIcon as y };
