import { Mr as p, rr as f1 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as PortalSelect } from "./select-C87OPWpf.js";
import { a as useLocale } from "./i18n-lDm19WzR.js";
import { t as Textarea } from "./textarea-Ngtow1st.js";
import { n as ACCOUNT_SETTING_TAB } from "./constants-P0J540jJ.js";
import { n as useModalContext } from "./modal-context-CphlqvPm.js";
import { n as useApiBasedExtensions } from "./use-common-BJ1aZaXJ.js";
import { i as Icon } from "./arrows-fbeBWnky.js";
import { useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/features/new-feature-panel/moderation/form-generation.tsx
var FormGeneration = ({ forms, value, onChange }) => {
	const locale = useLocale();
	const handleFormChange = (type, v) => {
		onChange({
			...value,
			[type]: v
		});
	};
	return /* @__PURE__ */ jsx(Fragment$1, { children: forms.map((form, index) => /* @__PURE__ */ jsxs("div", {
		className: "py-2",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex h-9 items-center text-sm font-medium text-text-primary",
				children: locale === "zh-Hans" ? form.label["zh-Hans"] : form.label["en-US"]
			}),
			form.type === "text-input" && /* @__PURE__ */ jsx("input", {
				value: value?.[form.variable] || "",
				className: "block h-9 w-full appearance-none rounded-lg bg-components-input-bg-normal px-3 text-sm text-text-primary outline-none",
				placeholder: form.placeholder,
				onChange: (e) => handleFormChange(form.variable, e.target.value)
			}),
			form.type === "paragraph" && /* @__PURE__ */ jsx("div", {
				className: "relative",
				children: /* @__PURE__ */ jsx(Textarea, {
					className: "resize-none",
					value: value?.[form.variable] || "",
					placeholder: form.placeholder,
					onChange: (e) => handleFormChange(form.variable, e.target.value)
				})
			}),
			form.type === "select" && /* @__PURE__ */ jsx(PortalSelect, {
				value: value?.[form.variable],
				items: form.options.map((option) => {
					return {
						name: option.label[locale === "zh-Hans" ? "zh-Hans" : "en-US"],
						value: option.value
					};
				}),
				onSelect: (item) => handleFormChange(form.variable, item.value),
				popupClassName: "w-[576px] !z-[102]"
			})
		]
	}, index)) });
};
//#endregion
//#region app/components/header/account-setting/api-based-extension-page/selector.tsx
var ApiBasedExtensionSelector = ({ value, onChange }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const { setShowAccountSettingModal, setShowApiBasedExtensionModal } = useModalContext();
	const { data, refetch: mutate } = useApiBasedExtensions();
	const handleSelect = (id) => {
		onChange(id);
		setOpen(false);
	};
	const currentItem = data?.find((item) => item.id === value);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-start",
		offset: 4,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen((v) => !v),
			className: "w-full",
			children: currentItem ? /* @__PURE__ */ jsxs("div", {
				className: "flex h-9 cursor-pointer items-center justify-between rounded-lg bg-components-input-bg-normal pl-3 pr-2.5",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-sm text-text-primary",
					children: currentItem.name
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center",
					children: [/* @__PURE__ */ jsx("div", {
						className: "mr-1.5 w-[270px] truncate text-right text-xs text-text-quaternary",
						children: currentItem.api_endpoint
					}), /* @__PURE__ */ jsx(f1, { className: `h-4 w-4 text-text-secondary ${!open && "opacity-60"}` })]
				})]
			}) : /* @__PURE__ */ jsxs("div", {
				className: "flex h-9 cursor-pointer items-center justify-between rounded-lg bg-components-input-bg-normal pl-3 pr-2.5 text-sm text-text-quaternary",
				children: [t("apiBasedExtension.selector.placeholder", { ns: "common" }), /* @__PURE__ */ jsx(f1, { className: `h-4 w-4 text-text-secondary ${!open && "opacity-60"}` })]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[1002] w-[calc(100%-32px)] max-w-[576px]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "z-10 w-full rounded-lg border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-lg",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "p-1",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between px-3 pb-1 pt-2",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs font-medium text-text-tertiary",
								children: t("apiBasedExtension.selector.title", { ns: "common" })
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex cursor-pointer items-center text-xs text-text-accent",
								onClick: () => {
									setOpen(false);
									setShowAccountSettingModal({ payload: ACCOUNT_SETTING_TAB.API_BASED_EXTENSION });
								},
								children: [t("apiBasedExtension.selector.manage", { ns: "common" }), /* @__PURE__ */ jsx(Icon, { className: "ml-0.5 h-3 w-3" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "max-h-[250px] overflow-y-auto",
							children: data?.map((item) => /* @__PURE__ */ jsxs("div", {
								className: "w-full cursor-pointer rounded-md px-3 py-1.5 text-left hover:stroke-state-base-hover",
								onClick: () => handleSelect(item.id),
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-sm text-text-primary",
									children: item.name
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-text-tertiary",
									children: item.api_endpoint
								})]
							}, item.id))
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "h-px bg-divider-regular" }),
					/* @__PURE__ */ jsx("div", {
						className: "p-1",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex h-8 cursor-pointer items-center px-3 text-sm text-text-accent",
							onClick: () => {
								setOpen(false);
								setShowApiBasedExtensionModal({
									payload: {},
									onSaveCallback: () => mutate()
								});
							},
							children: [/* @__PURE__ */ jsx(p, { className: "mr-2 h-4 w-4" }), t("operation.add", { ns: "common" })]
						})
					})
				]
			})
		})]
	});
};
//#endregion
export { FormGeneration as n, ApiBasedExtensionSelector as t };
