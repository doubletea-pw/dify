import { s as useRouter } from "../index.js";
import { Bn as bb, lr as i2, zr as r2 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import { t as app_icon_default } from "./app-icon-DPKtAo3e.js";
import { t as useKeyPress } from "./useKeyPress-DtHtlpBY.js";
import { n as useContext$1 } from "./dist-mUzjAi-W.js";
import "./navigation-C_u5Brbk.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as Divider } from "./divider-DZD56ykp.js";
import "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import { N as NEED_REFRESH_APP_LIST_KEY } from "./config-Dopncj5R.js";
import "./base-BuKAg6Le.js";
import "./src-BByrOQhU.js";
import { i as useAppContext } from "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import "./action-button-BK9WUMzU.js";
import { t as Input } from "./input-BOHL-qYi.js";
import "./dialog-DCCIZLOh.js";
import "./modal-9VFVByDR.js";
import { r as ToastContext } from "./toast-BY3OifkP.js";
import { r as AppModeEnum } from "./app-DPjSIfgb.js";
import { t as basePath } from "./var-DPpHtpXT.js";
import { i as createApp } from "./apps-b6zqLiv3.js";
import { t as useDebounceFn } from "./useDebounceFn-Y4NS6c4S.js";
import "./Inner-Cd93zOxF.js";
import "./utils-J89sp7A8.js";
import "./images-D3Uv050C.js";
import { t as AppIconPicker } from "./app-icon-picker-DqnIz_c-.js";
import "./common-fiYzNZ23.js";
import "./upgrade-btn-CpSPytX5.js";
import { t as Textarea } from "./textarea-Ngtow1st.js";
import "./modal-context-CphlqvPm.js";
import "./config-DUQ_rYOW.js";
import { n as useProviderContext } from "./provider-context-CToT0pwd.js";
import "./dynamic-6-R69YAE.js";
import { t as getRedirection } from "./app-redirection-Boof5aoB.js";
import { t as shortcuts_name_default } from "./shortcuts-name-TpjITleC.js";
import "./dist-CGvyUAMR.js";
import { t as useTheme } from "./use-theme-3YxPQV4B.js";
import { i as trackEvent } from "./amplitude-BnPDazhN.js";
import "./esm-CfW7DN4f.js";
import "./progress-bar-B_Dpla84.js";
import { a as Icon$1, n as Icon$2, o as Icon, r as Icon$3 } from "./communication-BPZjiuBr.js";
import { t as apps_full_in_dialog_default } from "./apps-full-in-dialog-DzT9xUzV.js";
import { t as FullScreenModal } from "./fullscreen-modal-BtLtfr79.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/app/create-app-modal/index.tsx
function CreateApp({ onClose, onSuccess, onCreateFromTemplate, defaultAppMode }) {
	const { t } = useTranslation();
	const { push } = useRouter();
	const { notify } = useContext$1(ToastContext);
	const [appMode, setAppMode] = useState(defaultAppMode || AppModeEnum.ADVANCED_CHAT);
	const [appIcon, setAppIcon] = useState({
		type: "emoji",
		icon: "🤖",
		background: "#FFEAD5"
	});
	const [showAppIconPicker, setShowAppIconPicker] = useState(false);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [isAppTypeExpanded, setIsAppTypeExpanded] = useState(false);
	const { plan, enableBilling } = useProviderContext();
	const isAppsFull = enableBilling && plan.usage.buildApps >= plan.total.buildApps;
	const { isCurrentWorkspaceEditor } = useAppContext();
	const isCreatingRef = useRef(false);
	useEffect(() => {
		if (appMode === AppModeEnum.CHAT || appMode === AppModeEnum.AGENT_CHAT || appMode === AppModeEnum.COMPLETION) setIsAppTypeExpanded(true);
	}, [appMode]);
	const { run: handleCreateApp } = useDebounceFn(useCallback(async () => {
		if (!appMode) {
			notify({
				type: "error",
				message: t("newApp.appTypeRequired", { ns: "app" })
			});
			return;
		}
		if (!name.trim()) {
			notify({
				type: "error",
				message: t("newApp.nameNotEmpty", { ns: "app" })
			});
			return;
		}
		if (isCreatingRef.current) return;
		isCreatingRef.current = true;
		try {
			const app = await createApp({
				name,
				description,
				icon_type: appIcon.type,
				icon: appIcon.type === "emoji" ? appIcon.icon : appIcon.fileId,
				icon_background: appIcon.type === "emoji" ? appIcon.background : void 0,
				mode: appMode
			});
			trackEvent("create_app", {
				app_mode: appMode,
				description
			});
			notify({
				type: "success",
				message: t("newApp.appCreated", { ns: "app" })
			});
			onSuccess();
			onClose();
			localStorage.setItem(NEED_REFRESH_APP_LIST_KEY, "1");
			getRedirection(isCurrentWorkspaceEditor, app, push);
		} catch (e) {
			notify({
				type: "error",
				message: e.message || t("newApp.appCreateFailed", { ns: "app" })
			});
		}
		isCreatingRef.current = false;
	}, [
		name,
		notify,
		t,
		appMode,
		appIcon,
		description,
		onSuccess,
		onClose,
		push,
		isCurrentWorkspaceEditor
	]), { wait: 300 });
	useKeyPress(["meta.enter", "ctrl.enter"], () => {
		if (isAppsFull) return;
		handleCreateApp();
	});
	return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", {
		className: "flex h-full justify-center overflow-y-auto overflow-x-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex flex-1 shrink-0 justify-end",
			children: /* @__PURE__ */ jsxs("div", {
				className: "px-10",
				children: [
					/* @__PURE__ */ jsx("div", { className: "h-6 w-full 2xl:h-[139px]" }),
					/* @__PURE__ */ jsx("div", {
						className: "pb-6 pt-1",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-text-primary title-2xl-semi-bold",
							children: t("newApp.startFromBlank", { ns: "app" })
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mb-2 leading-6",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-text-secondary system-sm-semibold",
							children: t("newApp.chooseAppType", { ns: "app" })
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex w-[660px] flex-col gap-4",
						children: [
							/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", {
								className: "flex flex-row gap-2",
								children: [/* @__PURE__ */ jsx(AppTypeCard, {
									active: appMode === AppModeEnum.WORKFLOW,
									title: t("types.workflow", { ns: "app" }),
									description: t("newApp.workflowShortDescription", { ns: "app" }),
									icon: /* @__PURE__ */ jsx("div", {
										className: "flex h-6 w-6 items-center justify-center rounded-md bg-components-icon-bg-indigo-solid",
										children: /* @__PURE__ */ jsx(bb, { className: "h-4 w-4 text-components-avatar-shape-fill-stop-100" })
									}),
									onClick: () => {
										setAppMode(AppModeEnum.WORKFLOW);
									}
								}), /* @__PURE__ */ jsx(AppTypeCard, {
									active: appMode === AppModeEnum.ADVANCED_CHAT,
									title: t("types.advanced", { ns: "app" }),
									description: t("newApp.advancedShortDescription", { ns: "app" }),
									icon: /* @__PURE__ */ jsx("div", {
										className: "flex h-6 w-6 items-center justify-center rounded-md bg-components-icon-bg-blue-light-solid",
										children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-components-avatar-shape-fill-stop-100" })
									}),
									onClick: () => {
										setAppMode(AppModeEnum.ADVANCED_CHAT);
									}
								})]
							}) }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "mb-2 flex items-center",
								children: /* @__PURE__ */ jsxs("button", {
									type: "button",
									className: "flex cursor-pointer items-center border-0 bg-transparent p-0",
									onClick: () => setIsAppTypeExpanded(!isAppTypeExpanded),
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-text-tertiary system-2xs-medium-uppercase",
										children: t("newApp.forBeginners", { ns: "app" })
									}), /* @__PURE__ */ jsx(r2, { className: `ml-1 h-4 w-4 text-text-tertiary transition-transform ${isAppTypeExpanded ? "rotate-90" : ""}` })]
								})
							}), isAppTypeExpanded && /* @__PURE__ */ jsxs("div", {
								className: "flex flex-row gap-2",
								children: [
									/* @__PURE__ */ jsx(AppTypeCard, {
										active: appMode === AppModeEnum.CHAT,
										title: t("types.chatbot", { ns: "app" }),
										description: t("newApp.chatbotShortDescription", { ns: "app" }),
										icon: /* @__PURE__ */ jsx("div", {
											className: "flex h-6 w-6 items-center justify-center rounded-md bg-components-icon-bg-blue-solid",
											children: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 text-components-avatar-shape-fill-stop-100" })
										}),
										onClick: () => {
											setAppMode(AppModeEnum.CHAT);
										}
									}),
									/* @__PURE__ */ jsx(AppTypeCard, {
										active: appMode === AppModeEnum.AGENT_CHAT,
										title: t("types.agent", { ns: "app" }),
										description: t("newApp.agentShortDescription", { ns: "app" }),
										icon: /* @__PURE__ */ jsx("div", {
											className: "flex h-6 w-6 items-center justify-center rounded-md bg-components-icon-bg-violet-solid",
											children: /* @__PURE__ */ jsx(Icon$2, { className: "h-4 w-4 text-components-avatar-shape-fill-stop-100" })
										}),
										onClick: () => {
											setAppMode(AppModeEnum.AGENT_CHAT);
										}
									}),
									/* @__PURE__ */ jsx(AppTypeCard, {
										active: appMode === AppModeEnum.COMPLETION,
										title: t("newApp.completeApp", { ns: "app" }),
										description: t("newApp.completionShortDescription", { ns: "app" }),
										icon: /* @__PURE__ */ jsx("div", {
											className: "flex h-6 w-6 items-center justify-center rounded-md bg-components-icon-bg-teal-solid",
											children: /* @__PURE__ */ jsx(Icon$3, { className: "h-4 w-4 text-components-avatar-shape-fill-stop-100" })
										}),
										onClick: () => {
											setAppMode(AppModeEnum.COMPLETION);
										}
									})
								]
							})] }),
							/* @__PURE__ */ jsx(Divider, { style: { margin: 0 } }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center space-x-3",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ jsx("div", {
											className: "mb-1 flex h-6 items-center",
											children: /* @__PURE__ */ jsx("label", {
												className: "text-text-secondary system-sm-semibold",
												children: t("newApp.captionName", { ns: "app" })
											})
										}), /* @__PURE__ */ jsx(Input, {
											value: name,
											onChange: (e) => setName(e.target.value),
											placeholder: t("newApp.appNamePlaceholder", { ns: "app" }) || ""
										})]
									}),
									/* @__PURE__ */ jsx(app_icon_default, {
										iconType: appIcon.type,
										icon: appIcon.type === "emoji" ? appIcon.icon : appIcon.fileId,
										background: appIcon.type === "emoji" ? appIcon.background : void 0,
										imageUrl: appIcon.type === "image" ? appIcon.url : void 0,
										size: "xxl",
										className: "cursor-pointer rounded-2xl",
										onClick: () => {
											setShowAppIconPicker(true);
										}
									}),
									showAppIconPicker && /* @__PURE__ */ jsx(AppIconPicker, {
										onSelect: (payload) => {
											setAppIcon(payload);
											setShowAppIconPicker(false);
										},
										onClose: () => {
											setShowAppIconPicker(false);
										}
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
								className: "mb-1 flex h-6 items-center",
								children: [/* @__PURE__ */ jsx("label", {
									className: "text-text-secondary system-sm-semibold",
									children: t("newApp.captionDescription", { ns: "app" })
								}), /* @__PURE__ */ jsxs("span", {
									className: "ml-1 text-text-tertiary system-xs-regular",
									children: [
										"(",
										t("newApp.optional", { ns: "app" }),
										")"
									]
								})]
							}), /* @__PURE__ */ jsx(Textarea, {
								className: "resize-none",
								placeholder: t("newApp.appDescriptionPlaceholder", { ns: "app" }) || "",
								value: description,
								onChange: (e) => setDescription(e.target.value)
							})] })
						]
					}),
					isAppsFull && /* @__PURE__ */ jsx(apps_full_in_dialog_default, {
						className: "mt-4",
						loc: "app-create"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between pb-10 pt-5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex cursor-pointer items-center gap-1 text-text-tertiary system-xs-regular",
							onClick: onCreateFromTemplate,
							children: [/* @__PURE__ */ jsx("span", { children: t("newApp.noIdeaTip", { ns: "app" }) }), /* @__PURE__ */ jsx("div", {
								className: "p-[1px]",
								children: /* @__PURE__ */ jsx(i2, { className: "h-3.5 w-3.5" })
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx(Button, {
								onClick: onClose,
								children: t("newApp.Cancel", { ns: "app" })
							}), /* @__PURE__ */ jsxs(Button, {
								disabled: isAppsFull || !name,
								className: "gap-1",
								variant: "primary",
								onClick: handleCreateApp,
								children: [/* @__PURE__ */ jsx("span", { children: t("newApp.Create", { ns: "app" }) }), /* @__PURE__ */ jsx(shortcuts_name_default, {
									keys: ["ctrl", "↵"],
									bgColor: "white"
								})]
							})]
						})]
					})
				]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative flex h-full flex-1 shrink justify-start overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 top-0 h-6 border-b border-b-divider-subtle 2xl:h-[139px]" }), /* @__PURE__ */ jsxs("div", {
				className: "max-w-[760px] border-x border-x-divider-subtle",
				children: [
					/* @__PURE__ */ jsx("div", { className: "h-6 2xl:h-[139px]" }),
					/* @__PURE__ */ jsx(AppPreview, { mode: appMode }),
					/* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 border-b border-b-divider-subtle" }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex h-[448px] w-[664px] items-center justify-center",
						style: { background: "repeating-linear-gradient(135deg, transparent, transparent 2px, rgba(16,24,40,0.04) 4px,transparent 3px, transparent 6px)" },
						children: [
							/* @__PURE__ */ jsx(AppScreenShot, {
								show: appMode === AppModeEnum.CHAT,
								mode: AppModeEnum.CHAT
							}),
							/* @__PURE__ */ jsx(AppScreenShot, {
								show: appMode === AppModeEnum.ADVANCED_CHAT,
								mode: AppModeEnum.ADVANCED_CHAT
							}),
							/* @__PURE__ */ jsx(AppScreenShot, {
								show: appMode === AppModeEnum.AGENT_CHAT,
								mode: AppModeEnum.AGENT_CHAT
							}),
							/* @__PURE__ */ jsx(AppScreenShot, {
								show: appMode === AppModeEnum.COMPLETION,
								mode: AppModeEnum.COMPLETION
							}),
							/* @__PURE__ */ jsx(AppScreenShot, {
								show: appMode === AppModeEnum.WORKFLOW,
								mode: AppModeEnum.WORKFLOW
							})
						]
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 border-b border-b-divider-subtle" })
				]
			})]
		})]
	}) });
}
var CreateAppModal = ({ show, onClose, onSuccess, onCreateFromTemplate, defaultAppMode }) => {
	return /* @__PURE__ */ jsx(FullScreenModal, {
		overflowVisible: true,
		closable: true,
		open: show,
		onClose,
		children: /* @__PURE__ */ jsx(CreateApp, {
			onClose,
			onSuccess,
			onCreateFromTemplate,
			defaultAppMode
		})
	});
};
function AppTypeCard({ icon, title, description, active, onClick }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn(`relative box-content h-[84px] w-[191px] cursor-pointer rounded-xl
      border-[0.5px] border-components-option-card-option-border
      bg-components-panel-on-panel-item-bg p-3 shadow-xs hover:shadow-md`, active ? "shadow-md outline outline-[1.5px] outline-components-option-card-option-selected-border" : ""),
		onClick,
		children: [
			icon,
			/* @__PURE__ */ jsx("div", {
				className: "mb-0.5 mt-2 text-text-secondary system-sm-semibold",
				children: title
			}),
			/* @__PURE__ */ jsx("div", {
				className: "line-clamp-2 text-text-tertiary system-xs-regular",
				title: description,
				children: description
			})
		]
	});
}
function AppPreview({ mode }) {
	const { t } = useTranslation();
	const previewInfo = {
		[AppModeEnum.CHAT]: {
			title: t("types.chatbot", { ns: "app" }),
			description: t("newApp.chatbotUserDescription", { ns: "app" })
		},
		[AppModeEnum.ADVANCED_CHAT]: {
			title: t("types.advanced", { ns: "app" }),
			description: t("newApp.advancedUserDescription", { ns: "app" })
		},
		[AppModeEnum.AGENT_CHAT]: {
			title: t("types.agent", { ns: "app" }),
			description: t("newApp.agentUserDescription", { ns: "app" })
		},
		[AppModeEnum.COMPLETION]: {
			title: t("newApp.completeApp", { ns: "app" }),
			description: t("newApp.completionUserDescription", { ns: "app" })
		},
		[AppModeEnum.WORKFLOW]: {
			title: t("types.workflow", { ns: "app" }),
			description: t("newApp.workflowUserDescription", { ns: "app" })
		}
	}[mode];
	return /* @__PURE__ */ jsxs("div", {
		className: "px-8 py-4",
		children: [/* @__PURE__ */ jsx("h4", {
			className: "text-text-secondary system-sm-semibold-uppercase",
			children: previewInfo.title
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-1 min-h-8 max-w-96 text-text-tertiary system-xs-regular",
			children: /* @__PURE__ */ jsx("span", { children: previewInfo.description })
		})]
	});
}
function AppScreenShot({ mode, show }) {
	const { theme } = useTheme();
	const modeToImageMap = {
		[AppModeEnum.CHAT]: "Chatbot",
		[AppModeEnum.ADVANCED_CHAT]: "Chatflow",
		[AppModeEnum.AGENT_CHAT]: "Agent",
		[AppModeEnum.COMPLETION]: "TextGenerator",
		[AppModeEnum.WORKFLOW]: "Workflow"
	};
	return /* @__PURE__ */ jsxs("picture", { children: [
		/* @__PURE__ */ jsx("source", {
			media: "(resolution: 1x)",
			srcSet: `${basePath}/screenshots/${theme}/${modeToImageMap[mode]}.png`
		}),
		/* @__PURE__ */ jsx("source", {
			media: "(resolution: 2x)",
			srcSet: `${basePath}/screenshots/${theme}/${modeToImageMap[mode]}@2x.png`
		}),
		/* @__PURE__ */ jsx("source", {
			media: "(resolution: 3x)",
			srcSet: `${basePath}/screenshots/${theme}/${modeToImageMap[mode]}@3x.png`
		}),
		/* @__PURE__ */ jsx("img", {
			className: show ? "" : "hidden",
			src: `${basePath}/screenshots/${theme}/${modeToImageMap[mode]}.png`,
			alt: "App Screen Shot",
			width: 664,
			height: 448
		})
	] });
}
//#endregion
export { CreateAppModal as default };
