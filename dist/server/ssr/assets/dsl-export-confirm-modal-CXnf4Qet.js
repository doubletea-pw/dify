import { m as __exportAll } from "../index.js";
import { it as Km, xt as P7 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { t as Checkbox } from "./checkbox-DTSgkYdc.js";
import { a as Icon } from "./others-CYlDNVYO.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow/dsl-export-confirm-modal.tsx
var dsl_export_confirm_modal_exports = /* @__PURE__ */ __exportAll({ default: () => DSLExportConfirmModal });
var DSLExportConfirmModal = ({ envList = [], onConfirm, onClose }) => {
	const { t } = useTranslation();
	const [exportSecrets, setExportSecrets] = useState(false);
	const submit = () => {
		onConfirm(exportSecrets);
		onClose();
	};
	return /* @__PURE__ */ jsxs(Modal, {
		isShow: true,
		onClose: noop,
		className: cn("w-[480px] max-w-[480px]"),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "title-2xl-semi-bold relative pb-6 text-text-primary",
				children: t("env.export.title", { ns: "workflow" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute right-4 top-4 cursor-pointer p-2",
				onClick: onClose,
				children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-text-tertiary" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative",
				children: /* @__PURE__ */ jsxs("table", {
					className: "radius-md w-full border-separate border-spacing-0 border border-divider-regular shadow-xs",
					children: [/* @__PURE__ */ jsx("thead", {
						className: "system-xs-medium-uppercase text-text-tertiary",
						children: /* @__PURE__ */ jsxs("tr", { children: [/* @__PURE__ */ jsx("td", {
							width: 220,
							className: "h-7 border-b border-r border-divider-regular pl-3",
							children: "NAME"
						}), /* @__PURE__ */ jsx("td", {
							className: "h-7 border-b border-divider-regular pl-3",
							children: "VALUE"
						})] })
					}), /* @__PURE__ */ jsx("tbody", { children: envList.map((env, index) => /* @__PURE__ */ jsxs("tr", { children: [/* @__PURE__ */ jsx("td", {
						className: cn("system-xs-medium h-7 border-r pl-3", index + 1 !== envList.length && "border-b"),
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex w-[200px] items-center gap-1",
							children: [
								/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 shrink-0 text-util-colors-violet-violet-600" }),
								/* @__PURE__ */ jsx("div", {
									className: "truncate text-text-primary",
									children: env.name
								}),
								/* @__PURE__ */ jsx("div", {
									className: "shrink-0 text-text-tertiary",
									children: "Secret"
								}),
								/* @__PURE__ */ jsx(Km, { className: "h-3 w-3 shrink-0 text-text-tertiary" })
							]
						})
					}), /* @__PURE__ */ jsx("td", {
						className: cn("h-7 pl-3", index + 1 !== envList.length && "border-b"),
						children: /* @__PURE__ */ jsx("div", {
							className: "system-xs-regular truncate text-text-secondary",
							children: env.value
						})
					})] }, env.name)) })]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-4 flex gap-2",
				children: [/* @__PURE__ */ jsx(Checkbox, {
					className: "shrink-0",
					checked: exportSecrets,
					onCheck: () => setExportSecrets(!exportSecrets)
				}), /* @__PURE__ */ jsx("div", {
					className: "system-sm-medium cursor-pointer text-text-primary",
					onClick: () => setExportSecrets(!exportSecrets),
					children: t("env.export.checkbox", { ns: "workflow" })
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-row-reverse pt-6",
				children: [/* @__PURE__ */ jsx(Button, {
					className: "ml-2",
					variant: "primary",
					onClick: submit,
					children: exportSecrets ? t("env.export.export", { ns: "workflow" }) : t("env.export.ignore", { ns: "workflow" })
				}), /* @__PURE__ */ jsx(Button, {
					onClick: onClose,
					children: t("operation.cancel", { ns: "common" })
				})]
			})
		]
	});
};
//#endregion
export { dsl_export_confirm_modal_exports as n, DSLExportConfirmModal as t };
