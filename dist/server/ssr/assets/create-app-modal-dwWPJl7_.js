import { m as __exportAll } from "../index.js";
import { xt as P7 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as app_icon_default } from "./app-icon-DPKtAo3e.js";
import { t as useKeyPress } from "./useKeyPress-DtHtlpBY.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as Input } from "./input-BOHL-qYi.js";
import { t as switch_default } from "./switch-CFJdYxEh.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import { r as AppModeEnum } from "./app-DPjSIfgb.js";
import { t as useDebounceFn } from "./useDebounceFn-Y4NS6c4S.js";
import { t as AppIconPicker } from "./app-icon-picker-DqnIz_c-.js";
import { t as Textarea } from "./textarea-Ngtow1st.js";
import { n as useProviderContext } from "./provider-context-CToT0pwd.js";
import { t as shortcuts_name_default } from "./shortcuts-name-TpjITleC.js";
import { t as apps_full_in_dialog_default } from "./apps-full-in-dialog-DzT9xUzV.js";
import * as React$1 from "react";
import { useCallback, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/explore/create-app-modal/index.tsx
var create_app_modal_exports = /* @__PURE__ */ __exportAll({ default: () => CreateAppModal });
var CreateAppModal = ({ show = false, isEditModal = false, appIconType, appIcon: _appIcon, appIconBackground, appIconUrl, appName, appDescription, appMode, appUseIconAsAnswerIcon, max_active_requests, onConfirm, confirmDisabled, onHide }) => {
	const { t } = useTranslation();
	const [name, setName] = React$1.useState(appName);
	const [appIcon, setAppIcon] = useState(() => appIconType === "image" ? {
		type: "image",
		fileId: _appIcon,
		url: appIconUrl
	} : {
		type: "emoji",
		icon: _appIcon,
		background: appIconBackground
	});
	const [showAppIconPicker, setShowAppIconPicker] = useState(false);
	const [description, setDescription] = useState(appDescription || "");
	const [useIconAsAnswerIcon, setUseIconAsAnswerIcon] = useState(appUseIconAsAnswerIcon || false);
	const [maxActiveRequestsInput, setMaxActiveRequestsInput] = useState(max_active_requests !== null && max_active_requests !== void 0 ? String(max_active_requests) : "");
	const { plan, enableBilling } = useProviderContext();
	const isAppsFull = enableBilling && plan.usage.buildApps >= plan.total.buildApps;
	const { run: handleSubmit } = useDebounceFn(useCallback(() => {
		if (!name.trim()) {
			Toast.notify({
				type: "error",
				message: t("appCustomize.nameRequired", { ns: "explore" })
			});
			return;
		}
		const isValid = maxActiveRequestsInput.trim() !== "" && !isNaN(Number(maxActiveRequestsInput));
		const payload = {
			name,
			icon_type: appIcon.type,
			icon: appIcon.type === "emoji" ? appIcon.icon : appIcon.fileId,
			icon_background: appIcon.type === "emoji" ? appIcon.background : void 0,
			description,
			use_icon_as_answer_icon: useIconAsAnswerIcon
		};
		if (isValid) payload.max_active_requests = Number(maxActiveRequestsInput);
		onConfirm(payload);
		onHide();
	}, [
		name,
		appIcon,
		description,
		useIconAsAnswerIcon,
		onConfirm,
		onHide,
		t,
		maxActiveRequestsInput
	]), { wait: 300 });
	useKeyPress(["meta.enter", "ctrl.enter"], () => {
		if (show && !(!isEditModal && isAppsFull) && name.trim()) handleSubmit();
	});
	useKeyPress("esc", () => {
		if (show) onHide();
	});
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(Modal, {
		isShow: show,
		onClose: noop,
		className: "relative !max-w-[480px] px-8",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute right-4 top-4 cursor-pointer p-2",
				onClick: onHide,
				children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-text-tertiary" })
			}),
			isEditModal && /* @__PURE__ */ jsx("div", {
				className: "mb-9 text-xl font-semibold leading-[30px] text-text-primary",
				children: t("editAppTitle", { ns: "app" })
			}),
			!isEditModal && /* @__PURE__ */ jsx("div", {
				className: "mb-9 text-xl font-semibold leading-[30px] text-text-primary",
				children: t("appCustomize.title", {
					ns: "explore",
					name: appName
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mb-9",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "pt-2",
						children: [/* @__PURE__ */ jsx("div", {
							className: "py-2 text-sm font-medium leading-[20px] text-text-primary",
							children: t("newApp.captionName", { ns: "app" })
						}), /* @__PURE__ */ jsxs("div", {
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
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "pt-2",
						children: [/* @__PURE__ */ jsx("div", {
							className: "py-2 text-sm font-medium leading-[20px] text-text-primary",
							children: t("newApp.captionDescription", { ns: "app" })
						}), /* @__PURE__ */ jsx(Textarea, {
							className: "resize-none",
							placeholder: t("newApp.appDescriptionPlaceholder", { ns: "app" }) || "",
							value: description,
							onChange: (e) => setDescription(e.target.value)
						})]
					}),
					isEditModal && (appMode === AppModeEnum.CHAT || appMode === AppModeEnum.ADVANCED_CHAT || appMode === AppModeEnum.AGENT_CHAT) && /* @__PURE__ */ jsxs("div", {
						className: "pt-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("div", {
								className: "py-2 text-sm font-medium leading-[20px] text-text-primary",
								children: t("answerIcon.title", { ns: "app" })
							}), /* @__PURE__ */ jsx(switch_default, {
								value: useIconAsAnswerIcon,
								onChange: (v) => setUseIconAsAnswerIcon(v)
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "body-xs-regular text-text-tertiary",
							children: t("answerIcon.descriptionInExplore", { ns: "app" })
						})]
					}),
					isEditModal && /* @__PURE__ */ jsxs("div", {
						className: "pt-2",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-2 mt-2 text-sm font-medium leading-[20px] text-text-primary",
								children: t("maxActiveRequests", { ns: "app" })
							}),
							/* @__PURE__ */ jsx(Input, {
								type: "number",
								min: 1,
								placeholder: t("maxActiveRequestsPlaceholder", { ns: "app" }),
								value: maxActiveRequestsInput,
								onChange: (e) => {
									setMaxActiveRequestsInput(e.target.value);
								},
								className: "h-10 w-full"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "body-xs-regular mb-0 mt-2 text-text-tertiary",
								children: t("maxActiveRequestsTip", { ns: "app" })
							})
						]
					}),
					!isEditModal && isAppsFull && /* @__PURE__ */ jsx(apps_full_in_dialog_default, {
						className: "mt-4",
						loc: "app-explore-create"
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-row-reverse",
				children: [/* @__PURE__ */ jsxs(Button, {
					disabled: !isEditModal && isAppsFull || !name.trim() || confirmDisabled,
					className: "ml-2 w-24 gap-1",
					variant: "primary",
					onClick: handleSubmit,
					children: [/* @__PURE__ */ jsx("span", { children: !isEditModal ? t("operation.create", { ns: "common" }) : t("operation.save", { ns: "common" }) }), /* @__PURE__ */ jsx(shortcuts_name_default, {
						keys: ["ctrl", "↵"],
						bgColor: "white"
					})]
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
			setAppIcon(appIconType === "image" ? {
				type: "image",
				url: appIconUrl,
				fileId: _appIcon
			} : {
				type: "emoji",
				icon: _appIcon,
				background: appIconBackground
			});
			setShowAppIconPicker(false);
		}
	})] });
};
//#endregion
export { create_app_modal_exports as n, CreateAppModal as t };
