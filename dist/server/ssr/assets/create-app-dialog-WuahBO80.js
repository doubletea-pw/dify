import { s as useRouter } from "../index.js";
import { Ln as aB, Rr as qy, dn as WP, er as db } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import { t as app_icon_default } from "./app-icon-DPKtAo3e.js";
import { t as useKeyPress } from "./useKeyPress-DtHtlpBY.js";
import { r as useContextSelector } from "./dist-mUzjAi-W.js";
import "./navigation-C_u5Brbk.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as Divider } from "./divider-DZD56ykp.js";
import "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import { N as NEED_REFRESH_APP_LIST_KEY } from "./config-Dopncj5R.js";
import { T as toast } from "./base-BuKAg6Le.js";
import "./src-BByrOQhU.js";
import { i as useAppContext } from "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import "./action-button-BK9WUMzU.js";
import { t as Input } from "./input-BOHL-qYi.js";
import "./switch-CFJdYxEh.js";
import { f as ForwardRef, n as useExploreAppList, t as AppListContext, u as fetchAppDetail } from "./app-list-context-DUkamvVt.js";
import { t as Loading } from "./loading-BryKikzY.js";
import "./dialog-DCCIZLOh.js";
import "./modal-9VFVByDR.js";
import "./toast-BY3OifkP.js";
import { r as AppModeEnum } from "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import { m as importDSL } from "./apps-b6zqLiv3.js";
import "./use-base-DLpNl2rR.js";
import "./client-CLQTU2Oi.js";
import { n as useGlobalPublicStore } from "./global-public-context-DpzzsplY.js";
import "./common-qRxT6xi0.js";
import "./i18n-lDm19WzR.js";
import { t as useDebounceFn } from "./useDebounceFn-Y4NS6c4S.js";
import "./Inner-Cd93zOxF.js";
import "./utils-J89sp7A8.js";
import "./images-D3Uv050C.js";
import "./app-icon-picker-DqnIz_c-.js";
import "./common-fiYzNZ23.js";
import "./upgrade-btn-CpSPytX5.js";
import "./textarea-Ngtow1st.js";
import "./modal-context-CphlqvPm.js";
import "./config-DUQ_rYOW.js";
import "./provider-context-CToT0pwd.js";
import "./use-refresh-plugin-list-C8aKRYG-.js";
import "./use-triggers-DguQxV9N.js";
import "./dynamic-6-R69YAE.js";
import { t as getRedirection } from "./app-redirection-Boof5aoB.js";
import "./shortcuts-name-TpjITleC.js";
import "./hooks-BTelimHS.js";
import "./use-common-BJ1aZaXJ.js";
import "./popover-CTEbJchz.js";
import { i as trackEvent } from "./amplitude-BnPDazhN.js";
import "./esm-CfW7DN4f.js";
import { r as usePluginDependencies, t as DSLImportMode } from "./app-Cb2vpoXO.js";
import "./progress-bar-B_Dpla84.js";
import "./communication-BPZjiuBr.js";
import { n as AppTypeLabel, r as AppTypeSelector, t as AppTypeIcon } from "./type-selector-B_8ndX5u.js";
import "./apps-full-in-dialog-DzT9xUzV.js";
import { t as CreateAppModal } from "./create-app-modal-dwWPJl7_.js";
import { t as FullScreenModal } from "./fullscreen-modal-BtLtfr79.js";
import * as React$1 from "react";
import { useCallback, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/app/create-app-dialog/app-card/index.tsx
var AppCard = ({ app, canCreate, onCreate }) => {
	const { t } = useTranslation();
	const { app: appBasicInfo } = app;
	const { systemFeatures } = useGlobalPublicStore();
	const isTrialApp = app.can_trial && systemFeatures.enable_trial_app;
	const setShowTryAppPanel = useContextSelector(AppListContext, (ctx) => ctx.setShowTryAppPanel);
	const showTryAPPPanel = useCallback((appId) => {
		return () => {
			setShowTryAppPanel?.(true, {
				appId,
				app
			});
		};
	}, [setShowTryAppPanel, app.category]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("group relative flex h-[132px] cursor-pointer flex-col overflow-hidden rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-on-panel-item-bg p-4  shadow-xs hover:shadow-lg"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 grow-0 items-center gap-3 pb-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative shrink-0",
					children: [/* @__PURE__ */ jsx(app_icon_default, {
						size: "large",
						iconType: appBasicInfo.icon_type,
						icon: appBasicInfo.icon,
						background: appBasicInfo.icon_background,
						imageUrl: appBasicInfo.icon_url
					}), /* @__PURE__ */ jsx(AppTypeIcon, {
						wrapperClassName: "absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-[4px] border border-divider-regular outline outline-components-panel-on-panel-item-bg",
						className: "h-3 w-3",
						type: appBasicInfo.mode
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex grow flex-col gap-1",
					children: [/* @__PURE__ */ jsx("div", {
						className: "line-clamp-1",
						children: /* @__PURE__ */ jsx("span", {
							className: "system-md-semibold text-text-secondary",
							title: appBasicInfo.name,
							children: appBasicInfo.name
						})
					}), /* @__PURE__ */ jsx(AppTypeLabel, {
						className: "system-2xs-medium-uppercase text-text-tertiary",
						type: app.app.mode
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "system-xs-regular py-1 text-text-tertiary",
				children: /* @__PURE__ */ jsx("div", {
					className: "line-clamp-3",
					children: app.description
				})
			}),
			(canCreate || isTrialApp) && /* @__PURE__ */ jsx("div", {
				className: cn("absolute bottom-0 left-0 right-0 hidden bg-gradient-to-t from-components-panel-gradient-2 from-[60.27%] to-transparent p-4 pt-8 group-hover:flex"),
				children: /* @__PURE__ */ jsxs("div", {
					className: cn("grid h-8 w-full grid-cols-1 items-center space-x-2", canCreate && "grid-cols-2"),
					children: [canCreate && /* @__PURE__ */ jsxs(Button, {
						variant: "primary",
						onClick: () => onCreate(),
						children: [/* @__PURE__ */ jsx(ForwardRef, { className: "mr-1 h-4 w-4" }), /* @__PURE__ */ jsx("span", {
							className: "text-xs",
							children: t("newApp.useTemplate", { ns: "app" })
						})]
					}), /* @__PURE__ */ jsxs(Button, {
						onClick: showTryAPPPanel(app.app_id),
						children: [/* @__PURE__ */ jsx(qy, { className: "mr-1 size-4" }), /* @__PURE__ */ jsx("span", { children: t("appCard.try", { ns: "explore" }) })]
					})]
				})
			})
		]
	});
};
//#endregion
//#region app/components/app/create-app-dialog/app-list/sidebar.tsx
var AppCategories = /* @__PURE__ */ function(AppCategories) {
	AppCategories["RECOMMENDED"] = "Recommended";
	return AppCategories;
}({});
function Sidebar({ current, categories, onClick, onCreateFromBlank }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full w-full flex-col",
		children: [
			/* @__PURE__ */ jsx("ul", {
				className: "pt-0.5",
				children: /* @__PURE__ */ jsx(CategoryItem, {
					category: AppCategories.RECOMMENDED,
					active: current === AppCategories.RECOMMENDED,
					onClick
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "system-xs-medium-uppercase mb-0.5 mt-3 px-3 pb-1 pt-2 text-text-tertiary",
				children: t("newAppFromTemplate.byCategories", { ns: "app" })
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "flex grow flex-col gap-0.5",
				children: categories.map((category) => /* @__PURE__ */ jsx(CategoryItem, {
					category,
					active: current === category,
					onClick
				}, category))
			}),
			/* @__PURE__ */ jsx(Divider, { bgStyle: "gradient" }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex cursor-pointer items-center gap-1 px-3 py-1 text-text-tertiary",
				onClick: onCreateFromBlank,
				children: [/* @__PURE__ */ jsx(db, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", {
					className: "system-xs-regular",
					children: t("newApp.startFromBlank", { ns: "app" })
				})]
			})
		]
	});
}
function CategoryItem({ category, active, onClick }) {
	return /* @__PURE__ */ jsxs("li", {
		className: cn("group flex h-8 cursor-pointer items-center gap-2 rounded-lg p-1 pl-3 hover:bg-state-base-hover [&.active]:bg-state-base-active", active && "active"),
		onClick: () => {
			onClick?.(category);
		},
		children: [category === AppCategories.RECOMMENDED && /* @__PURE__ */ jsx("div", {
			className: "inline-flex h-5 w-5 items-center justify-center rounded-md",
			children: /* @__PURE__ */ jsx(aB, { className: "h-4 w-4 text-components-menu-item-text group-[.active]:text-components-menu-item-text-active" })
		}), /* @__PURE__ */ jsx(AppCategoryLabel, {
			category,
			className: cn("system-sm-medium text-components-menu-item-text group-hover:text-components-menu-item-text-hover group-[.active]:text-components-menu-item-text-active", active && "system-sm-semibold")
		})]
	});
}
function AppCategoryLabel({ category, className }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("span", {
		className,
		children: category === AppCategories.RECOMMENDED ? t("newAppFromTemplate.sidebar.Recommended", { ns: "app" }) : category
	});
}
//#endregion
//#region app/components/app/create-app-dialog/app-list/index.tsx
var Apps = ({ onSuccess, onCreateFromBlank }) => {
	const { t } = useTranslation();
	const { isCurrentWorkspaceEditor } = useAppContext();
	const { push } = useRouter();
	const allCategoriesEn = AppCategories.RECOMMENDED;
	const [keywords, setKeywords] = useState("");
	const [searchKeywords, setSearchKeywords] = useState("");
	const { run: handleSearch } = useDebounceFn(() => {
		setSearchKeywords(keywords);
	}, { wait: 500 });
	const handleKeywordsChange = (value) => {
		setKeywords(value);
		handleSearch();
	};
	const [currentType, setCurrentType] = useState([]);
	const [currCategory, setCurrCategory] = useState(allCategoriesEn);
	const { data, isLoading } = useExploreAppList();
	const filteredList = useMemo(() => {
		if (!data) return [];
		const { allList } = data;
		const filteredByCategory = allList.filter((item) => {
			if (currCategory === allCategoriesEn) return true;
			return item.category === currCategory;
		});
		if (currentType.length === 0) return filteredByCategory;
		return filteredByCategory.filter((item) => {
			if (currentType.includes(AppModeEnum.CHAT) && item.app.mode === AppModeEnum.CHAT) return true;
			if (currentType.includes(AppModeEnum.ADVANCED_CHAT) && item.app.mode === AppModeEnum.ADVANCED_CHAT) return true;
			if (currentType.includes(AppModeEnum.AGENT_CHAT) && item.app.mode === AppModeEnum.AGENT_CHAT) return true;
			if (currentType.includes(AppModeEnum.COMPLETION) && item.app.mode === AppModeEnum.COMPLETION) return true;
			if (currentType.includes(AppModeEnum.WORKFLOW) && item.app.mode === AppModeEnum.WORKFLOW) return true;
			return false;
		});
	}, [
		currentType,
		currCategory,
		allCategoriesEn,
		data
	]);
	const searchFilteredList = useMemo(() => {
		if (!searchKeywords || !filteredList || filteredList.length === 0) return filteredList;
		const lowerCaseSearchKeywords = searchKeywords.toLowerCase();
		return filteredList.filter((item) => item.app && item.app.name && item.app.name.toLowerCase().includes(lowerCaseSearchKeywords));
	}, [searchKeywords, filteredList]);
	const [currApp, setCurrApp] = React$1.useState(null);
	const [isShowCreateModal, setIsShowCreateModal] = React$1.useState(false);
	const { handleCheckPluginDependencies } = usePluginDependencies();
	const onCreate = async ({ name, icon_type, icon, icon_background, description }) => {
		const { export_data, mode } = await fetchAppDetail(currApp?.app.id);
		try {
			const app = await importDSL({
				mode: DSLImportMode.YAML_CONTENT,
				yaml_content: export_data,
				name,
				icon_type,
				icon,
				icon_background,
				description
			});
			trackEvent("create_app_with_template", {
				app_mode: mode,
				template_id: currApp?.app.id,
				template_name: currApp?.app.name,
				description
			});
			setIsShowCreateModal(false);
			toast.success(t("newApp.appCreated", { ns: "app" }));
			if (onSuccess) onSuccess();
			if (app.app_id) await handleCheckPluginDependencies(app.app_id);
			localStorage.setItem(NEED_REFRESH_APP_LIST_KEY, "1");
			getRedirection(isCurrentWorkspaceEditor, {
				id: app.app_id,
				mode
			}, push);
		} catch {
			toast.error(t("newApp.appCreateFailed", { ns: "app" }));
		}
	};
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center",
		children: /* @__PURE__ */ jsx(Loading, { type: "area" })
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between border-b border-divider-burn py-3",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "min-w-[180px] pl-5",
						children: /* @__PURE__ */ jsx("span", {
							className: "title-xl-semi-bold text-text-primary",
							children: t("newApp.startFromTemplate", { ns: "app" })
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex max-w-[548px] flex-1 items-center rounded-xl border border-components-panel-border bg-components-panel-bg-blur p-1.5 shadow-md",
						children: [
							/* @__PURE__ */ jsx(AppTypeSelector, {
								value: currentType,
								onChange: setCurrentType
							}),
							/* @__PURE__ */ jsx("div", {
								className: "h-[14px]",
								children: /* @__PURE__ */ jsx(Divider, { type: "vertical" })
							}),
							/* @__PURE__ */ jsx(Input, {
								showClearIcon: true,
								wrapperClassName: "w-full flex-1",
								className: "bg-transparent hover:border-transparent hover:bg-transparent focus:border-transparent focus:bg-transparent focus:shadow-none",
								placeholder: t("newAppFromTemplate.searchAllTemplate", { ns: "app" }),
								value: keywords,
								onChange: (e) => handleKeywordsChange(e.target.value),
								onClear: () => handleKeywordsChange("")
							})
						]
					}),
					/* @__PURE__ */ jsx("div", { className: "h-8 w-[180px]" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative flex flex-1 overflow-y-auto",
				children: [!searchKeywords && /* @__PURE__ */ jsx("div", {
					className: "h-full w-[200px] p-4",
					children: /* @__PURE__ */ jsx(Sidebar, {
						current: currCategory,
						categories: data?.categories || [],
						onClick: (category) => {
							setCurrCategory(category);
						},
						onCreateFromBlank
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "h-full flex-1 shrink-0 grow overflow-auto border-l border-divider-burn p-6 pt-2",
					children: [searchFilteredList && searchFilteredList.length > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
						className: "pb-1 pt-4",
						children: searchKeywords ? /* @__PURE__ */ jsx("p", {
							className: "title-md-semi-bold text-text-tertiary",
							children: searchFilteredList.length > 1 ? t("newApp.foundResults", {
								ns: "app",
								count: searchFilteredList.length
							}) : t("newApp.foundResult", {
								ns: "app",
								count: searchFilteredList.length
							})
						}) : /* @__PURE__ */ jsx("div", {
							className: "flex h-[22px] items-center",
							children: /* @__PURE__ */ jsx(AppCategoryLabel, {
								category: currCategory,
								className: "title-md-semi-bold text-text-primary"
							})
						})
					}), /* @__PURE__ */ jsx("div", {
						className: cn("grid shrink-0 grid-cols-1 content-start gap-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 2k:grid-cols-6"),
						children: searchFilteredList.map((app) => /* @__PURE__ */ jsx(AppCard, {
							app,
							canCreate: isCurrentWorkspaceEditor,
							onCreate: () => {
								setCurrApp(app);
								setIsShowCreateModal(true);
							}
						}, app.app_id))
					})] }), (!searchFilteredList || searchFilteredList.length === 0) && /* @__PURE__ */ jsx(NoTemplateFound, {})]
				})]
			}),
			isShowCreateModal && /* @__PURE__ */ jsx(CreateAppModal, {
				appIconType: currApp?.app.icon_type || "emoji",
				appIcon: currApp?.app.icon || "",
				appIconBackground: currApp?.app.icon_background || "",
				appIconUrl: currApp?.app.icon_url,
				appName: currApp?.app.name || "",
				appDescription: currApp?.app.description || "",
				show: isShowCreateModal,
				onConfirm: onCreate,
				onHide: () => setIsShowCreateModal(false)
			})
		]
	});
};
var app_list_default = React$1.memo(Apps);
function NoTemplateFound() {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full rounded-lg bg-workflow-process-bg p-4",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-components-card-bg shadow-lg",
				children: /* @__PURE__ */ jsx(WP, { className: "h-5 w-5 text-text-tertiary" })
			}),
			/* @__PURE__ */ jsx("p", {
				className: "title-md-semi-bold text-text-primary",
				children: t("newApp.noTemplateFound", { ns: "app" })
			}),
			/* @__PURE__ */ jsx("p", {
				className: "system-sm-regular text-text-tertiary",
				children: t("newApp.noTemplateFoundTip", { ns: "app" })
			})
		]
	});
}
//#endregion
//#region app/components/app/create-app-dialog/index.tsx
var CreateAppTemplateDialog = ({ show, onSuccess, onClose, onCreateFromBlank }) => {
	useKeyPress("esc", useCallback(() => {
		if (show) onClose();
	}, [show, onClose]));
	return /* @__PURE__ */ jsx(FullScreenModal, {
		open: show,
		closable: true,
		onClose,
		children: /* @__PURE__ */ jsx(app_list_default, {
			onCreateFromBlank,
			onSuccess: () => {
				onSuccess();
				onClose();
			}
		})
	});
};
//#endregion
export { CreateAppTemplateDialog as default };
