import { s as useRouter } from "../index.js";
import { xt as P7 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import { t as app_icon_default } from "./app-icon-DPKtAo3e.js";
import { t as useStore } from "./store-BCKZaSV6.js";
import { n as useContext$1 } from "./dist-mUzjAi-W.js";
import "./navigation-C_u5Brbk.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import "./divider-DZD56ykp.js";
import { N as NEED_REFRESH_APP_LIST_KEY } from "./config-Dopncj5R.js";
import "./base-BuKAg6Le.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { i as useAppContext } from "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as confirm_default } from "./confirm-CKQP3hdx.js";
import "./action-button-BK9WUMzU.js";
import { t as Input } from "./input-BOHL-qYi.js";
import "./dialog-DCCIZLOh.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { r as ToastContext } from "./toast-BY3OifkP.js";
import { r as AppModeEnum } from "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import { _ as switchApp, o as deleteApp } from "./apps-b6zqLiv3.js";
import { t as Checkbox } from "./checkbox-DTSgkYdc.js";
import "./Inner-Cd93zOxF.js";
import "./utils-J89sp7A8.js";
import "./images-D3Uv050C.js";
import { t as AppIconPicker } from "./app-icon-picker-DqnIz_c-.js";
import "./common-fiYzNZ23.js";
import "./upgrade-btn-CpSPytX5.js";
import "./modal-context-CphlqvPm.js";
import "./config-DUQ_rYOW.js";
import { n as useProviderContext } from "./provider-context-CToT0pwd.js";
import { t as getRedirection } from "./app-redirection-Boof5aoB.js";
import { t as Icon } from "./alertsAndFeedback-BpcdEYpr.js";
import "./progress-bar-B_Dpla84.js";
import { t as apps_full_in_dialog_default } from "./apps-full-in-dialog-DzT9xUzV.js";
import { useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/app/switch-app-modal/index.tsx
var SwitchAppModal = ({ show, appDetail, inAppDetail = false, onSuccess, onClose }) => {
	const { push, replace } = useRouter();
	const { t } = useTranslation();
	const { notify } = useContext$1(ToastContext);
	const setAppDetail = useStore((s) => s.setAppDetail);
	const { isCurrentWorkspaceEditor } = useAppContext();
	const { plan, enableBilling } = useProviderContext();
	const isAppsFull = enableBilling && plan.usage.buildApps >= plan.total.buildApps;
	const [showAppIconPicker, setShowAppIconPicker] = useState(false);
	const [appIcon, setAppIcon] = useState(appDetail.icon_type === "image" ? {
		type: "image",
		url: appDetail.icon_url,
		fileId: appDetail.icon
	} : {
		type: "emoji",
		icon: appDetail.icon,
		background: appDetail.icon_background
	});
	const [name, setName] = useState(`${appDetail.name}(copy)`);
	const [removeOriginal, setRemoveOriginal] = useState(false);
	const [showConfirmDelete, setShowConfirmDelete] = useState(false);
	const goStart = async () => {
		try {
			const { new_app_id: newAppID } = await switchApp({
				appID: appDetail.id,
				name,
				icon_type: appIcon.type,
				icon: appIcon.type === "emoji" ? appIcon.icon : appIcon.fileId,
				icon_background: appIcon.type === "emoji" ? appIcon.background : void 0
			});
			if (onSuccess) onSuccess();
			if (onClose) onClose();
			notify({
				type: "success",
				message: t("newApp.appCreated", { ns: "app" })
			});
			if (inAppDetail) setAppDetail();
			if (removeOriginal) await deleteApp(appDetail.id);
			localStorage.setItem(NEED_REFRESH_APP_LIST_KEY, "1");
			getRedirection(isCurrentWorkspaceEditor, {
				id: newAppID,
				mode: appDetail.mode === AppModeEnum.COMPLETION ? AppModeEnum.WORKFLOW : AppModeEnum.ADVANCED_CHAT
			}, removeOriginal ? replace : push);
		} catch {
			notify({
				type: "error",
				message: t("newApp.appCreateFailed", { ns: "app" })
			});
		}
	};
	useEffect(() => {
		if (removeOriginal) setShowConfirmDelete(true);
	}, [removeOriginal]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(Modal, {
		className: cn("w-[600px] max-w-[600px] p-8"),
		isShow: show,
		onClose: noop,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute right-4 top-4 cursor-pointer p-2",
				onClick: onClose,
				children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-text-tertiary" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "h-12 w-12 rounded-xl border-[0.5px] border-divider-regular bg-background-default-burn p-3 shadow-xl",
				children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 text-[rgb(247,144,9)]" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative mt-3 text-xl font-semibold leading-[30px] text-text-primary",
				children: t("switch", { ns: "app" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "my-1 text-sm leading-5 text-text-tertiary",
				children: [
					/* @__PURE__ */ jsx("span", { children: t("switchTipStart", { ns: "app" }) }),
					/* @__PURE__ */ jsx("span", {
						className: "font-medium text-text-secondary",
						children: t("switchTip", { ns: "app" })
					}),
					/* @__PURE__ */ jsx("span", { children: t("switchTipEnd", { ns: "app" }) })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "pb-4",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "py-2 text-sm font-medium leading-[20px] text-text-primary",
						children: t("switchLabel", { ns: "app" })
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
							placeholder: t("newApp.appNamePlaceholder", { ns: "app" }) || "",
							className: "h-10 grow"
						})]
					}),
					showAppIconPicker && /* @__PURE__ */ jsx(AppIconPicker, {
						onSelect: (payload) => {
							setAppIcon(payload);
							setShowAppIconPicker(false);
						},
						onClose: () => {
							setAppIcon(appDetail.icon_type === "image" ? {
								type: "image",
								url: appDetail.icon_url,
								fileId: appDetail.icon
							} : {
								type: "emoji",
								icon: appDetail.icon,
								background: appDetail.icon_background
							});
							setShowAppIconPicker(false);
						}
					})
				]
			}),
			isAppsFull && /* @__PURE__ */ jsx(apps_full_in_dialog_default, { loc: "app-switch" }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between pt-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center",
					children: [/* @__PURE__ */ jsx(Checkbox, {
						className: "shrink-0",
						checked: removeOriginal,
						onCheck: () => setRemoveOriginal(!removeOriginal)
					}), /* @__PURE__ */ jsx("div", {
						className: "ml-2 cursor-pointer text-sm leading-5 text-text-secondary",
						onClick: () => setRemoveOriginal(!removeOriginal),
						children: t("removeOriginal", { ns: "app" })
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center",
					children: [/* @__PURE__ */ jsx(Button, {
						className: "mr-2",
						onClick: onClose,
						children: t("newApp.Cancel", { ns: "app" })
					}), /* @__PURE__ */ jsx(Button, {
						className: "border-red-700",
						disabled: isAppsFull || !name,
						variant: "warning",
						onClick: goStart,
						children: t("switchStart", { ns: "app" })
					})]
				})]
			})
		]
	}), showConfirmDelete && /* @__PURE__ */ jsx(confirm_default, {
		title: t("deleteAppConfirmTitle", { ns: "app" }),
		content: t("deleteAppConfirmContent", { ns: "app" }),
		isShow: showConfirmDelete,
		onConfirm: () => setShowConfirmDelete(false),
		onCancel: () => {
			setShowConfirmDelete(false);
			setRemoveOriginal(false);
		}
	})] });
};
//#endregion
export { SwitchAppModal as default };
