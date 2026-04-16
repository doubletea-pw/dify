import { i as native_default, n as $7adb23b0109cc36a$export$2cd8252107eb640b, r as $c4d155af13ad4d4b$export$2e2bcd8739ae039 } from "./app-icon-DPKtAo3e.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as Divider } from "./divider-DZD56ykp.js";
import { t as Input } from "./input-BOHL-qYi.js";
import * as React$1 from "react";
import { useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/@heroicons+react@2.2.0_react@19.2.4/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js
function MagnifyingGlassIcon({ title, titleId, ...props }, svgRef) {
	return /* @__PURE__ */ React$1.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: 1.5,
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /* @__PURE__ */ React$1.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React$1.createElement("path", {
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
	}));
}
var ForwardRef = /* @__PURE__ */ React$1.forwardRef(MagnifyingGlassIcon);
//#endregion
//#region utils/emoji.ts
async function searchEmoji(value) {
	return (await $c4d155af13ad4d4b$export$2e2bcd8739ae039.search(value) || []).map((emoji) => {
		return emoji.skins[0].native;
	});
}
//#endregion
//#region app/components/base/emoji-picker/Inner.tsx
$7adb23b0109cc36a$export$2cd8252107eb640b({ data: native_default });
var backgroundColors = [
	"#FFEAD5",
	"#E4FBCC",
	"#D3F8DF",
	"#E0F2FE",
	"#E0EAFF",
	"#EFF1F5",
	"#FBE8FF",
	"#FCE7F6",
	"#FEF7C3",
	"#E6F4D7",
	"#D5F5F6",
	"#D1E9FF",
	"#D1E0FF",
	"#D5D9EB",
	"#ECE9FE",
	"#FFE4E8"
];
var EmojiPickerInner = ({ onSelect, className }) => {
	const { categories } = native_default;
	const [selectedEmoji, setSelectedEmoji] = useState("");
	const [selectedBackground, setSelectedBackground] = useState(backgroundColors[0]);
	const [showStyleColors, setShowStyleColors] = useState(false);
	const [searchedEmojis, setSearchedEmojis] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	React$1.useEffect(() => {
		if (selectedEmoji) {
			setShowStyleColors(true);
			/* v8 ignore next 2 - @preserve */
			if (selectedBackground) onSelect?.(selectedEmoji, selectedBackground);
		}
	}, [
		onSelect,
		selectedEmoji,
		selectedBackground
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn(className, "flex flex-col"),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex w-full flex-col items-center px-3 pb-2",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative w-full",
					children: [/* @__PURE__ */ jsx("div", {
						className: "pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-3",
						children: /* @__PURE__ */ jsx(ForwardRef, {
							className: "h-5 w-5 text-text-quaternary",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ jsx(Input, {
						className: "pl-10",
						type: "search",
						id: "search",
						placeholder: "Search emojis...",
						onChange: async (e) => {
							if (e.target.value === "") setIsSearching(false);
							else {
								setIsSearching(true);
								setSearchedEmojis(await searchEmoji(e.target.value));
							}
						}
					})]
				})
			}),
			/* @__PURE__ */ jsx(Divider, { className: "my-3" }),
			/* @__PURE__ */ jsxs("div", {
				className: "max-h-[200px] w-full overflow-y-auto overflow-x-hidden px-3",
				children: [isSearching && /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ jsx("p", {
						className: "mb-1 text-text-primary system-xs-medium-uppercase",
						children: "Search"
					}), /* @__PURE__ */ jsx("div", {
						className: "grid h-full w-full grid-cols-8 gap-1",
						children: searchedEmojis.map((emoji, index) => {
							return /* @__PURE__ */ jsx("div", {
								className: "inline-flex h-10 w-10 items-center justify-center rounded-lg",
								onClick: () => {
									setSelectedEmoji(emoji);
								},
								children: /* @__PURE__ */ jsx("div", {
									className: "flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg p-1 ring-components-input-border-hover ring-offset-1 hover:ring-1",
									"data-testid": `emoji-search-result-${emoji}`,
									children: /* @__PURE__ */ jsx("em-emoji", { id: emoji })
								})
							}, `emoji-search-${index}`);
						})
					})]
				}, "category-search") }), categories.map((category, index) => {
					return /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ jsx("p", {
							className: "mb-1 text-text-primary system-xs-medium-uppercase",
							children: category.id
						}), /* @__PURE__ */ jsx("div", {
							className: "grid h-full w-full grid-cols-8 gap-1",
							children: category.emojis.map((emoji, index) => {
								return /* @__PURE__ */ jsx("div", {
									className: "inline-flex h-10 w-10 items-center justify-center rounded-lg",
									onClick: () => {
										setSelectedEmoji(emoji);
									},
									children: /* @__PURE__ */ jsx("div", {
										className: "flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg p-1 ring-components-input-border-hover ring-offset-1 hover:ring-1",
										"data-testid": `emoji-container-${emoji}`,
										children: /* @__PURE__ */ jsx("em-emoji", { id: emoji })
									})
								}, `emoji-${index}`);
							})
						})]
					}, `category-${index}`);
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: cn("flex items-center justify-between p-3 pb-0"),
				children: [/* @__PURE__ */ jsx("p", {
					className: "mb-2 text-text-primary system-xs-medium-uppercase",
					children: "Choose Style"
				}), showStyleColors ? /* @__PURE__ */ jsx("span", {
					className: "i-heroicons-chevron-down h-4 w-4 cursor-pointer text-text-quaternary",
					onClick: () => setShowStyleColors(!showStyleColors),
					"data-testid": "toggle-colors"
				}) : /* @__PURE__ */ jsx("span", {
					className: "i-heroicons-chevron-up h-4 w-4 cursor-pointer text-text-quaternary",
					onClick: () => setShowStyleColors(!showStyleColors),
					"data-testid": "toggle-colors"
				})]
			}),
			showStyleColors && /* @__PURE__ */ jsx("div", {
				className: "grid w-full grid-cols-8 gap-1 px-3",
				children: backgroundColors.map((color) => {
					return /* @__PURE__ */ jsx("div", {
						className: cn("cursor-pointer", "ring-offset-1 hover:ring-1", "inline-flex h-10 w-10 items-center justify-center rounded-lg", color === selectedBackground ? "ring-1 ring-components-input-border-hover" : ""),
						onClick: () => {
							setSelectedBackground(color);
						},
						children: /* @__PURE__ */ jsx("div", {
							className: cn("flex h-8 w-8 items-center justify-center rounded-lg p-1"),
							style: { background: color },
							children: selectedEmoji !== "" && /* @__PURE__ */ jsx("em-emoji", { id: selectedEmoji })
						})
					}, color);
				})
			})
		]
	});
};
//#endregion
export { searchEmoji as n, EmojiPickerInner as t };
