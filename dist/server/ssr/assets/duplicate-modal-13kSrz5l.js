import { xt as P7 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import { t as app_icon_default } from "./app-icon-DPKtAo3e.js";
import "./dist-mUzjAi-W.js";
import "./navigation-C_u5Brbk.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import "./divider-DZD56ykp.js";
import "./config-Dopncj5R.js";
import "./base-BuKAg6Le.js";
import { t as noop } from "./noop--k6oqy4d.js";
import "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import "./action-button-BK9WUMzU.js";
import { t as Input } from "./input-BOHL-qYi.js";
import "./dialog-DCCIZLOh.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import "./Inner-Cd93zOxF.js";
import "./utils-J89sp7A8.js";
import "./images-D3Uv050C.js";
import { t as AppIconPicker } from "./app-icon-picker-DqnIz_c-.js";
import "./common-fiYzNZ23.js";
import "./upgrade-btn-CpSPytX5.js";
import "./modal-context-CphlqvPm.js";
import "./config-DUQ_rYOW.js";
import { n as useProviderContext } from "./provider-context-CToT0pwd.js";
import "./progress-bar-B_Dpla84.js";
import { t as apps_full_in_dialog_default } from "./apps-full-in-dialog-DzT9xUzV.js";
import * as React$1 from "react";
import { useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/app/duplicate-modal/index.tsx
var DuplicateAppModal = ({ appName, icon_type, icon, icon_background, icon_url, show = false, onConfirm, onHide }) => {
	const { t } = useTranslation();
	const [name, setName] = React$1.useState(appName);
	const [showAppIconPicker, setShowAppIconPicker] = useState(false);
	const [appIcon, setAppIcon] = useState(icon_type === "image" ? {
		type: "image",
		url: icon_url,
		fileId: icon
	} : {
		type: "emoji",
		icon,
		background: icon_background
	});
	const { plan, enableBilling } = useProviderContext();
	const isAppsFull = enableBilling && plan.usage.buildApps >= plan.total.buildApps;
	const submit = () => {
		if (!name.trim()) {
			Toast.notify({
				type: "error",
				message: t("appCustomize.nameRequired", { ns: "explore" })
			});
			return;
		}
		onConfirm({
			name,
			icon_type: appIcon.type,
			icon: appIcon.type === "emoji" ? appIcon.icon : appIcon.fileId,
			icon_background: appIcon.type === "emoji" ? appIcon.background : void 0
		});
		onHide();
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(Modal, {
		isShow: show,
		onClose: noop,
		className: cn("relative !max-w-[480px]", "px-8"),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute right-4 top-4 cursor-pointer p-2",
				onClick: onHide,
				children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-text-tertiary" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative mb-9 mt-3 text-xl font-semibold leading-[30px] text-text-primary",
				children: t("duplicateTitle", { ns: "app" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "system-sm-regular mb-9 text-text-secondary",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "system-md-medium mb-2",
						children: t("appCustomize.subTitle", { ns: "explore" })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between space-x-2",
						children: [/* @__PURE__ */ jsx(app_icon_default, {
							size: "large",
							onClick: () => {
								setShowAppIconPicker(true);
							},
							className: "cursor-pointer",
							iconType: appIcon.type,
							icon: appIcon.type === "image" ? appIcon.fileId : appIcon.icon,
							background: appIcon.type === "image" ? void 0 : appIcon.background,
							imageUrl: appIcon.type === "image" ? appIcon.url : void 0
						}), /* @__PURE__ */ jsx(Input, {
							value: name,
							onChange: (e) => setName(e.target.value),
							className: "h-10"
						})]
					}),
					isAppsFull && /* @__PURE__ */ jsx(apps_full_in_dialog_default, {
						className: "mt-4",
						loc: "app-duplicate-create"
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-row-reverse",
				children: [/* @__PURE__ */ jsx(Button, {
					disabled: isAppsFull,
					className: "ml-2 w-24",
					variant: "primary",
					onClick: submit,
					children: t("duplicate", { ns: "app" })
				}), /* @__PURE__ */ jsx(Button, {
					className: "w-24",
					onClick: onHide,
					children: t("operation.cancel", { ns: "common" })
				})]
			})
		]
	}), showAppIconPicker && /* @__PURE__ */ jsx(AppIconPicker, {
		onSelect: (payload) => {
			setAppIcon(payload);
			setShowAppIconPicker(false);
		},
		onClose: () => {
			setAppIcon(icon_type === "image" ? {
				type: "image",
				url: icon_url,
				fileId: icon
			} : {
				type: "emoji",
				icon,
				background: icon_background
			});
			setShowAppIconPicker(false);
		}
	})] });
};
//#endregion
export { DuplicateAppModal as default };
