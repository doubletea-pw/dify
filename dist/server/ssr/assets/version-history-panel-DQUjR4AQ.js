import { v as __toESM } from "../index.js";
import { E as Dm, Gr as s7, _ as CH, a as $l, si as wF, ti as uo, xt as P7 } from "./react-D5xHzNYo.js";
import "./i18next-CxGFEMD9.js";
import "./Trans-UjBkHktY.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import "./app-icon-DPKtAo3e.js";
import "./useKeyPress-DtHtlpBY.js";
import "./store-BCKZaSV6.js";
import "./dist-mUzjAi-W.js";
import "./utils-pMdyvQan.js";
import "./use-breakpoints-Ij85IgkK.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as Divider } from "./divider-DZD56ykp.js";
import "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import { Bt as VersionHistoryContextMenuOptions, Ht as WorkflowVersion, Ut as WorkflowVersionFilterOptions } from "./config-Dopncj5R.js";
import { $ as useDSL, $n as useWorkflowStore, Kr as useInvalidAllLastRun, Qn as useStore, Wr as useDeleteWorkflow, ai as useUpdateWorkflow, ci as useWorkflowVersionHistory, d as useWorkflowRefreshDraft, ni as useResetWorkflowVersionHistory, nr as useHooksStore, ri as useRestoreWorkflow, u as useWorkflowRun } from "./hooks-Bj_4KA1b.js";
import "./i18n-config-jsJ9YUFd.js";
import { T as toast } from "./base-BuKAg6Le.js";
import "./src-BByrOQhU.js";
import { a as useSelector } from "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./workflow-CULNEjcb.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import "./action-button-BK9WUMzU.js";
import { t as Input } from "./input-BOHL-qYi.js";
import { t as switch_default } from "./switch-CFJdYxEh.js";
import "./loading-BryKikzY.js";
import "./dialog-DCCIZLOh.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { t as require_dayjs_min } from "./dayjs.min-CNlMkMP6.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import "./credential-item-C22_bUSw.js";
import "./apps-b6zqLiv3.js";
import "./datasets-hfpkpjNW.js";
import "./use-base-DLpNl2rR.js";
import "./client-CLQTU2Oi.js";
import "./global-public-context-DpzzsplY.js";
import "./common-qRxT6xi0.js";
import "./i18n-lDm19WzR.js";
import "./useDebounceFn-Y4NS6c4S.js";
import "./checkbox-DTSgkYdc.js";
import { t as require_copy_to_clipboard } from "./copy-to-clipboard-CEvVSVWT.js";
import { t as Textarea } from "./textarea-Ngtow1st.js";
import "./constants-P0J540jJ.js";
import "./modal-context-CphlqvPm.js";
import "./config-DUQ_rYOW.js";
import "./provider-context-CToT0pwd.js";
import "./link-1R-efKLW.js";
import "./use-refresh-plugin-list-C8aKRYG-.js";
import "./use-triggers-DguQxV9N.js";
import "./other-sSUV3aYW.js";
import "./dynamic-6-R69YAE.js";
import "./fast-deep-equal-T8EktbR5.js";
import "./format-BCVnrx09.js";
import "./hooks-BTelimHS.js";
import "./use-common-BJ1aZaXJ.js";
import "./popover-CTEbJchz.js";
import "./model-selector-ahzffqOG.js";
import "./dist-CGvyUAMR.js";
import "./use-theme-3YxPQV4B.js";
import "./model-name-DBTGJc7a.js";
import "./skeleton-Brd40zkS.js";
import "./alert-dialog-_9biHzKe.js";
import "./alertsAndFeedback-BpcdEYpr.js";
import "./amplitude-BnPDazhN.js";
import "./esm-CfW7DN4f.js";
import * as React$1 from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/app/app-publisher/version-info-modal.tsx
var import_copy_to_clipboard = /* @__PURE__ */ __toESM(require_copy_to_clipboard(), 1);
var TITLE_MAX_LENGTH = 15;
var RELEASE_NOTES_MAX_LENGTH = 100;
var VersionInfoModal = ({ isOpen, versionInfo, onClose, onPublish }) => {
	const { t } = useTranslation();
	const [title, setTitle] = useState(versionInfo?.marked_name || "");
	const [releaseNotes, setReleaseNotes] = useState(versionInfo?.marked_comment || "");
	const [titleError, setTitleError] = useState(false);
	const [releaseNotesError, setReleaseNotesError] = useState(false);
	const handlePublish = () => {
		if (title.length > TITLE_MAX_LENGTH) {
			setTitleError(true);
			Toast.notify({
				type: "error",
				message: t("versionHistory.editField.titleLengthLimit", {
					ns: "workflow",
					limit: TITLE_MAX_LENGTH
				})
			});
			return;
		} else if (titleError) setTitleError(false);
		if (releaseNotes.length > RELEASE_NOTES_MAX_LENGTH) {
			setReleaseNotesError(true);
			Toast.notify({
				type: "error",
				message: t("versionHistory.editField.releaseNotesLengthLimit", {
					ns: "workflow",
					limit: RELEASE_NOTES_MAX_LENGTH
				})
			});
			return;
		} else if (releaseNotesError) setReleaseNotesError(false);
		onPublish({
			title,
			releaseNotes,
			id: versionInfo?.id
		});
		onClose();
	};
	const handleTitleChange = useCallback((e) => {
		setTitle(e.target.value);
	}, []);
	const handleDescriptionChange = useCallback((e) => {
		setReleaseNotes(e.target.value);
	}, []);
	return /* @__PURE__ */ jsxs(Modal, {
		className: "p-0",
		isShow: isOpen,
		onClose,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "relative w-full p-6 pb-4 pr-14",
				children: [/* @__PURE__ */ jsx("div", {
					className: "title-2xl-semi-bold text-text-primary first-letter:capitalize",
					children: versionInfo?.marked_name ? t("versionHistory.editVersionInfo", { ns: "workflow" }) : t("versionHistory.nameThisVersion", { ns: "workflow" })
				}), /* @__PURE__ */ jsx("div", {
					className: "absolute right-5 top-5 flex h-8 w-8 cursor-pointer items-center justify-center p-1.5",
					onClick: onClose,
					children: /* @__PURE__ */ jsx(P7, { className: "h-[18px] w-[18px] text-text-tertiary" })
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-y-4 px-6 py-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-y-1",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-sm-semibold flex h-6 items-center text-text-secondary",
						children: t("versionHistory.editField.title", { ns: "workflow" })
					}), /* @__PURE__ */ jsx(Input, {
						value: title,
						placeholder: `${t("versionHistory.nameThisVersion", { ns: "workflow" })}${t("panel.optional", { ns: "workflow" })}`,
						onChange: handleTitleChange,
						destructive: titleError
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-y-1",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-sm-semibold flex h-6 items-center text-text-secondary",
						children: t("versionHistory.editField.releaseNotes", { ns: "workflow" })
					}), /* @__PURE__ */ jsx(Textarea, {
						value: releaseNotes,
						placeholder: `${t("versionHistory.releaseNotesPlaceholder", { ns: "workflow" })}${t("panel.optional", { ns: "workflow" })}`,
						onChange: handleDescriptionChange,
						destructive: releaseNotesError
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex justify-end p-6 pt-5",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-x-3",
					children: [/* @__PURE__ */ jsx(Button, {
						onClick: onClose,
						children: t("operation.cancel", { ns: "common" })
					}), /* @__PURE__ */ jsx(Button, {
						variant: "primary",
						onClick: handlePublish,
						children: t("common.publish", { ns: "workflow" })
					})]
				})
			})
		]
	});
};
//#endregion
//#region app/components/workflow/panel/version-history-panel/delete-confirm-modal.tsx
var DeleteConfirmModal = ({ isOpen, versionInfo, onClose, onDelete }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Modal, {
		className: "p-0",
		isShow: isOpen,
		onClose,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-y-2 p-6 pb-4 ",
			children: [/* @__PURE__ */ jsx("div", {
				className: "title-2xl-semi-bold text-text-primary",
				children: `${t("operation.delete", { ns: "common" })} ${versionInfo.marked_name || t("versionHistory.defaultName", { ns: "workflow" })}`
			}), /* @__PURE__ */ jsx("p", {
				className: "system-md-regular text-text-secondary",
				children: t("versionHistory.deletionTip", { ns: "workflow" })
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-end gap-x-2 p-6",
			children: [/* @__PURE__ */ jsx(Button, {
				onClick: onClose,
				children: t("operation.cancel", { ns: "common" })
			}), /* @__PURE__ */ jsx(Button, {
				variant: "warning",
				onClick: onDelete.bind(null, versionInfo.id),
				children: t("operation.delete", { ns: "common" })
			})]
		})]
	});
};
//#endregion
//#region app/components/workflow/panel/version-history-panel/empty.tsx
var Empty = ({ onResetFilter }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-5/6 w-full flex-col justify-center gap-y-2",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex justify-center",
				children: /* @__PURE__ */ jsx(uo, { className: "h-10 w-10 text-text-empty-state-icon" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "system-xs-regular flex justify-center text-text-tertiary",
				children: t("versionHistory.filter.empty", { ns: "workflow" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex justify-center",
				children: /* @__PURE__ */ jsx(Button, {
					size: "small",
					onClick: onResetFilter,
					children: t("versionHistory.filter.reset", { ns: "workflow" })
				})
			})
		]
	});
};
var empty_default = React$1.memo(Empty);
//#endregion
//#region app/components/workflow/panel/version-history-panel/filter/filter-item.tsx
var FilterItem = ({ item, isSelected = false, onClick }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex cursor-pointer items-center justify-between gap-x-1 rounded-lg px-2 py-1.5 hover:bg-state-base-hover",
		onClick: () => {
			onClick(item.key);
		},
		children: [/* @__PURE__ */ jsx("div", {
			className: "system-md-regular flex-1 text-text-primary",
			children: item.name
		}), isSelected && /* @__PURE__ */ jsx(s7, { className: "h-4 w-4 shrink-0 text-text-accent" })]
	});
};
var filter_item_default = React$1.memo(FilterItem);
//#endregion
//#region app/components/workflow/panel/version-history-panel/filter/filter-switch.tsx
var FilterSwitch = ({ enabled, handleSwitch }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center p-1",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full items-center gap-x-1 px-2 py-1.5",
			children: [/* @__PURE__ */ jsx("div", {
				className: "system-md-regular flex-1 px-1 text-text-secondary",
				children: t("versionHistory.filter.onlyShowNamedVersions", { ns: "workflow" })
			}), /* @__PURE__ */ jsx(switch_default, {
				value: enabled,
				onChange: (v) => handleSwitch(v),
				size: "md",
				className: "shrink-0"
			})]
		})
	});
};
var filter_switch_default = React$1.memo(FilterSwitch);
//#endregion
//#region app/components/workflow/panel/version-history-panel/filter/use-filter.ts
var useFilterOptions = () => {
	const { t } = useTranslation();
	return [{
		key: WorkflowVersionFilterOptions.all,
		name: t("versionHistory.filter.all", { ns: "workflow" })
	}, {
		key: WorkflowVersionFilterOptions.onlyYours,
		name: t("versionHistory.filter.onlyYours", { ns: "workflow" })
	}];
};
//#endregion
//#region app/components/workflow/panel/version-history-panel/filter/index.tsx
var Filter = ({ filterValue, isOnlyShowNamedVersions, onClickFilterItem, handleSwitch }) => {
	const [open, setOpen] = useState(false);
	const options = useFilterOptions();
	const handleOnClick = useCallback((value) => {
		onClickFilterItem(value);
	}, [onClickFilterItem]);
	const isFiltering = filterValue !== WorkflowVersionFilterOptions.all || isOnlyShowNamedVersions;
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		placement: "bottom-end",
		offset: {
			mainAxis: 4,
			crossAxis: 55
		},
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen((v) => !v),
			children: /* @__PURE__ */ jsx("div", {
				className: cn("flex h-6 w-6 cursor-pointer items-center justify-center rounded-md p-0.5", isFiltering ? "bg-state-accent-active-alt" : "hover:bg-state-base-hover"),
				children: /* @__PURE__ */ jsx($l, { className: cn("h-4 w-4", isFiltering ? "text-text-accent" : " text-text-tertiary") })
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[12]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex w-[248px] flex-col rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg shadow-shadow-shadow-5 backdrop-blur-[5px]",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-col p-1",
						children: options.map((option) => {
							return /* @__PURE__ */ jsx(filter_item_default, {
								item: option,
								isSelected: filterValue === option.key,
								onClick: handleOnClick
							}, option.key);
						})
					}),
					/* @__PURE__ */ jsx(Divider, {
						type: "horizontal",
						className: "my-0 h-px bg-divider-subtle"
					}),
					/* @__PURE__ */ jsx(filter_switch_default, {
						enabled: isOnlyShowNamedVersions,
						handleSwitch
					})
				]
			})
		})]
	});
};
//#endregion
//#region app/components/workflow/panel/version-history-panel/loading/item.tsx
var Item = ({ titleWidth, releaseNotesWidth, isFirst, isLast }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative flex gap-x-1 p-2",
		children: [
			!isLast && /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-6 h-[calc(100%-0.75rem)] w-0.5 bg-divider-subtle" }),
			/* @__PURE__ */ jsx("div", {
				className: " flex h-5 w-[18px] shrink-0 items-center justify-center",
				children: /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-lg border-[2px] border-text-quaternary" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex grow flex-col gap-y-0.5",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-3.5 items-center",
					children: /* @__PURE__ */ jsx("div", { className: cn("h-2 w-full rounded-sm bg-text-quaternary opacity-20", titleWidth) })
				}), !isFirst && /* @__PURE__ */ jsx("div", {
					className: "flex h-3 items-center",
					children: /* @__PURE__ */ jsx("div", { className: cn("h-1.5 w-full rounded-sm bg-text-quaternary opacity-20", releaseNotesWidth) })
				})]
			})
		]
	});
};
var item_default = React$1.memo(Item);
//#endregion
//#region app/components/workflow/panel/version-history-panel/loading/index.tsx
var itemConfig = Array.from({ length: 8 }).map((_, index) => {
	return {
		isFirst: index === 0,
		isLast: index === 7,
		titleWidth: (index + 1) % 2 === 0 ? "w-1/3" : "w-2/5",
		releaseNotesWidth: (index + 1) % 2 === 0 ? "w-3/4" : "w-4/6"
	};
});
var Loading = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative w-full overflow-y-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 z-10 h-full w-full bg-dataset-chunk-list-mask-bg" }), itemConfig.map((config, index) => /* @__PURE__ */ jsx(item_default, { ...config }, index))]
	});
};
//#endregion
//#region app/components/workflow/panel/version-history-panel/restore-confirm-modal.tsx
var RestoreConfirmModal = ({ isOpen, versionInfo, onClose, onRestore }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Modal, {
		className: "p-0",
		isShow: isOpen,
		onClose,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-y-2 p-6 pb-4 ",
			children: [/* @__PURE__ */ jsx("div", {
				className: "title-2xl-semi-bold text-text-primary",
				children: `${t("common.restore", { ns: "workflow" })} ${versionInfo.marked_name || t("versionHistory.defaultName", { ns: "workflow" })}`
			}), /* @__PURE__ */ jsx("p", {
				className: "system-md-regular text-text-secondary",
				children: t("versionHistory.restorationTip", { ns: "workflow" })
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-end gap-x-2 p-6",
			children: [/* @__PURE__ */ jsx(Button, {
				onClick: onClose,
				children: t("operation.cancel", { ns: "common" })
			}), /* @__PURE__ */ jsx(Button, {
				variant: "primary",
				onClick: onRestore.bind(null, versionInfo),
				children: t("common.restore", { ns: "workflow" })
			})]
		})]
	});
};
//#endregion
//#region app/components/workflow/panel/version-history-panel/context-menu/menu-item.tsx
var import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min(), 1);
var MenuItem = ({ item, onClick, isDestructive = false }) => {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex cursor-pointer items-center justify-between rounded-lg px-2 py-1.5 ", isDestructive ? "hover:bg-state-destructive-hover" : "hover:bg-state-base-hover"),
		onClick: () => {
			onClick(item.key);
		},
		children: /* @__PURE__ */ jsx("div", {
			className: cn("system-md-regular flex-1 text-text-primary", isDestructive && "hover:text-text-destructive"),
			children: item.name
		})
	});
};
var menu_item_default = React$1.memo(MenuItem);
//#endregion
//#region app/components/workflow/panel/version-history-panel/context-menu/use-context-menu.ts
var useContextMenu = (props) => {
	const { isNamedVersion } = props;
	const { t } = useTranslation();
	const pipelineId = useStore((s) => s.pipelineId);
	return {
		deleteOperation: {
			key: VersionHistoryContextMenuOptions.delete,
			name: t("operation.delete", { ns: "common" })
		},
		options: useMemo(() => {
			return [
				{
					key: VersionHistoryContextMenuOptions.restore,
					name: t("common.restore", { ns: "workflow" })
				},
				isNamedVersion ? {
					key: VersionHistoryContextMenuOptions.edit,
					name: t("versionHistory.editVersionInfo", { ns: "workflow" })
				} : {
					key: VersionHistoryContextMenuOptions.edit,
					name: t("versionHistory.nameThisVersion", { ns: "workflow" })
				},
				...!pipelineId ? [{
					key: VersionHistoryContextMenuOptions.exportDSL,
					name: t("export", { ns: "app" })
				}] : [],
				{
					key: VersionHistoryContextMenuOptions.copyId,
					name: t("versionHistory.copyId", { ns: "workflow" })
				}
			];
		}, [isNamedVersion, t])
	};
};
//#endregion
//#region app/components/workflow/panel/version-history-panel/context-menu/index.tsx
var ContextMenu = (props) => {
	const { isShowDelete, handleClickMenuItem, open, setOpen } = props;
	const { deleteOperation, options } = useContextMenu(props);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		placement: "bottom-end",
		offset: {
			mainAxis: 4,
			crossAxis: 0
		},
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, { children: /* @__PURE__ */ jsx(Button, {
			size: "small",
			className: "px-1",
			onClick: useCallback((e) => {
				e.stopPropagation();
				setOpen((v) => !v);
			}, [setOpen]),
			children: /* @__PURE__ */ jsx(CH, { className: "h-4 w-4" })
		}) }), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex w-[184px] flex-col rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg shadow-shadow-shadow-5 backdrop-blur-[5px]",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex flex-col p-1",
					children: options.map((option) => {
						return /* @__PURE__ */ jsx(menu_item_default, {
							item: option,
							onClick: handleClickMenuItem.bind(null, option.key)
						}, option.key);
					})
				}), isShowDelete && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Divider, {
					type: "horizontal",
					className: "my-0 h-px bg-divider-subtle"
				}), /* @__PURE__ */ jsx("div", {
					className: "p-1",
					children: /* @__PURE__ */ jsx(menu_item_default, {
						item: deleteOperation,
						isDestructive: true,
						onClick: handleClickMenuItem.bind(null, VersionHistoryContextMenuOptions.delete)
					})
				})] })]
			})
		})]
	});
};
var context_menu_default = React$1.memo(ContextMenu);
//#endregion
//#region app/components/workflow/panel/version-history-panel/version-history-item.tsx
var formatVersion = (versionHistory, latestVersionId) => {
	const { version, id } = versionHistory;
	if (version === WorkflowVersion.Draft) return WorkflowVersion.Draft;
	if (id === latestVersionId) return WorkflowVersion.Latest;
	try {
		const date = new Date(version);
		if (Number.isNaN(date.getTime())) return version;
		return date.toISOString().slice(0, 19).replace("T", " ");
	} catch {
		return version;
	}
};
var VersionHistoryItem = ({ item, currentVersion, latestVersionId, onClick, handleClickMenuItem, isLast }) => {
	const { t } = useTranslation();
	const [isHovering, setIsHovering] = useState(false);
	const [open, setOpen] = useState(false);
	const formatTime = (time) => import_dayjs_min.default.unix(time).format("YYYY-MM-DD HH:mm");
	const formattedVersion = formatVersion(item, latestVersionId);
	const isSelected = item.version === currentVersion?.version;
	const isDraft = formattedVersion === WorkflowVersion.Draft;
	const isLatest = formattedVersion === WorkflowVersion.Latest;
	useEffect(() => {
		if (isDraft) onClick(item);
	}, []);
	const handleClickItem = () => {
		if (isSelected) return;
		onClick(item);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("group relative flex gap-x-1 rounded-lg p-2", isSelected ? "cursor-not-allowed bg-state-accent-active" : "cursor-pointer hover:bg-state-base-hover"),
		onClick: handleClickItem,
		onMouseEnter: () => setIsHovering(true),
		onMouseLeave: () => {
			setIsHovering(false);
			setOpen(false);
		},
		onContextMenu: (e) => {
			e.preventDefault();
			setOpen(true);
		},
		children: [
			!isLast && /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-6 h-[calc(100%-0.75rem)] w-0.5 bg-divider-subtle" }),
			/* @__PURE__ */ jsx("div", {
				className: " flex h-5 w-[18px] shrink-0 items-center justify-center",
				children: /* @__PURE__ */ jsx("div", { className: cn("h-2 w-2 rounded-lg border-[2px]", isSelected ? "border-text-accent" : "border-text-quaternary") })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex grow flex-col gap-y-0.5 overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mr-6 flex h-5 items-center gap-x-1",
						children: [/* @__PURE__ */ jsx("div", {
							className: cn("system-sm-semibold truncate py-[1px]", isSelected ? "text-text-accent" : "text-text-secondary"),
							children: isDraft ? t("versionHistory.currentDraft", { ns: "workflow" }) : item.marked_name || t("versionHistory.defaultName", { ns: "workflow" })
						}), isLatest && /* @__PURE__ */ jsx("div", {
							className: "system-2xs-medium-uppercase flex h-5 shrink-0 items-center rounded-md border border-text-accent-secondary\n            bg-components-badge-bg-dimm px-[5px] text-text-accent-secondary",
							children: t("versionHistory.latest", { ns: "workflow" })
						})]
					}),
					!isDraft && /* @__PURE__ */ jsx("div", {
						className: "system-xs-regular break-words text-text-secondary",
						children: item.marked_comment || ""
					}),
					!isDraft && /* @__PURE__ */ jsx("div", {
						className: "system-xs-regular truncate text-text-tertiary",
						children: `${formatTime(item.created_at)} · ${item.created_by.name}`
					})
				]
			}),
			!isDraft && isHovering && /* @__PURE__ */ jsx("div", {
				className: "absolute right-1 top-1",
				children: /* @__PURE__ */ jsx(context_menu_default, {
					isShowDelete: !isLatest,
					isNamedVersion: !!item.marked_name,
					open,
					setOpen,
					handleClickMenuItem
				})
			})
		]
	});
};
var version_history_item_default = React$1.memo(VersionHistoryItem);
//#endregion
//#region app/components/workflow/panel/version-history-panel/index.tsx
var HISTORY_PER_PAGE = 10;
var INITIAL_PAGE = 1;
var VersionHistoryPanel = ({ getVersionListUrl, deleteVersionUrl, restoreVersionUrl, updateVersionUrl, latestVersionId }) => {
	const [filterValue, setFilterValue] = useState(WorkflowVersionFilterOptions.all);
	const [isOnlyShowNamedVersions, setIsOnlyShowNamedVersions] = useState(false);
	const [operatedItem, setOperatedItem] = useState();
	const [restoreConfirmOpen, setRestoreConfirmOpen] = useState(false);
	const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
	const [editModalOpen, setEditModalOpen] = useState(false);
	const workflowStore = useWorkflowStore();
	const { handleRestoreFromPublishedWorkflow, handleLoadBackupDraft } = useWorkflowRun();
	const { handleRefreshWorkflowDraft } = useWorkflowRefreshDraft();
	const { handleExportDSL } = useDSL();
	const setShowWorkflowVersionHistoryPanel = useStore((s) => s.setShowWorkflowVersionHistoryPanel);
	const currentVersion = useStore((s) => s.currentVersion);
	const setCurrentVersion = useStore((s) => s.setCurrentVersion);
	const userProfile = useSelector((s) => s.userProfile);
	const configsMap = useHooksStore((s) => s.configsMap);
	const invalidAllLastRun = useInvalidAllLastRun(configsMap?.flowType, configsMap?.flowId);
	const { deleteAllInspectVars } = workflowStore.getState();
	const { t } = useTranslation();
	const { data: versionHistory, fetchNextPage, hasNextPage, isFetching } = useWorkflowVersionHistory({
		url: getVersionListUrl || "",
		initialPage: INITIAL_PAGE,
		limit: HISTORY_PER_PAGE,
		userId: filterValue === WorkflowVersionFilterOptions.onlyYours ? userProfile.id : "",
		namedOnly: isOnlyShowNamedVersions
	});
	const handleVersionClick = useCallback((item) => {
		if (item.id !== currentVersion?.id) {
			setCurrentVersion(item);
			if (item.version === WorkflowVersion.Draft) handleLoadBackupDraft();
			else handleRestoreFromPublishedWorkflow(item);
		}
	}, [
		currentVersion?.id,
		setCurrentVersion,
		handleLoadBackupDraft,
		handleRestoreFromPublishedWorkflow
	]);
	const handleNextPage = () => {
		if (hasNextPage) fetchNextPage();
	};
	const handleClose = () => {
		handleLoadBackupDraft();
		workflowStore.setState({ isRestoring: false });
		setShowWorkflowVersionHistoryPanel(false);
	};
	const handleClickFilterItem = useCallback((value) => {
		setFilterValue(value);
	}, []);
	const handleSwitch = useCallback((value) => {
		setIsOnlyShowNamedVersions(value);
	}, []);
	const handleResetFilter = useCallback(() => {
		setFilterValue(WorkflowVersionFilterOptions.all);
		setIsOnlyShowNamedVersions(false);
	}, []);
	const handleClickMenuItem = useCallback((item, operation) => {
		setOperatedItem(item);
		switch (operation) {
			case VersionHistoryContextMenuOptions.restore:
				setRestoreConfirmOpen(true);
				break;
			case VersionHistoryContextMenuOptions.edit:
				setEditModalOpen(true);
				break;
			case VersionHistoryContextMenuOptions.delete:
				setDeleteConfirmOpen(true);
				break;
			case VersionHistoryContextMenuOptions.copyId:
				(0, import_copy_to_clipboard.default)(item.id);
				toast.success(t("versionHistory.action.copyIdSuccess", { ns: "workflow" }));
				break;
			case VersionHistoryContextMenuOptions.exportDSL:
				handleExportDSL?.(false, item.id);
				break;
		}
	}, [t, handleExportDSL]);
	const handleCancel = useCallback((operation) => {
		switch (operation) {
			case VersionHistoryContextMenuOptions.restore:
				setRestoreConfirmOpen(false);
				break;
			case VersionHistoryContextMenuOptions.edit:
				setEditModalOpen(false);
				break;
			case VersionHistoryContextMenuOptions.delete:
				setDeleteConfirmOpen(false);
				break;
		}
	}, []);
	const resetWorkflowVersionHistory = useResetWorkflowVersionHistory();
	const { mutateAsync: restoreWorkflow } = useRestoreWorkflow();
	const handleRestore = useCallback(async (item) => {
		setShowWorkflowVersionHistoryPanel(false);
		try {
			await restoreWorkflow(restoreVersionUrl(item.id));
			setCurrentVersion(item);
			workflowStore.setState({ isRestoring: false });
			workflowStore.setState({ backupDraft: void 0 });
			handleRefreshWorkflowDraft();
			toast.success(t("versionHistory.action.restoreSuccess", { ns: "workflow" }));
			deleteAllInspectVars();
			invalidAllLastRun();
		} catch {
			toast.error(t("versionHistory.action.restoreFailure", { ns: "workflow" }));
		} finally {
			resetWorkflowVersionHistory();
		}
	}, [
		setShowWorkflowVersionHistoryPanel,
		setCurrentVersion,
		workflowStore,
		restoreWorkflow,
		restoreVersionUrl,
		handleRefreshWorkflowDraft,
		deleteAllInspectVars,
		invalidAllLastRun,
		t,
		resetWorkflowVersionHistory
	]);
	const { mutateAsync: deleteWorkflow } = useDeleteWorkflow();
	const handleDelete = useCallback(async (id) => {
		await deleteWorkflow(deleteVersionUrl?.(id) || "", {
			onSuccess: () => {
				setDeleteConfirmOpen(false);
				toast.success(t("versionHistory.action.deleteSuccess", { ns: "workflow" }));
				resetWorkflowVersionHistory();
				deleteAllInspectVars();
				invalidAllLastRun();
			},
			onError: () => {
				toast.error(t("versionHistory.action.deleteFailure", { ns: "workflow" }));
			},
			onSettled: () => {
				setDeleteConfirmOpen(false);
			}
		});
	}, [
		deleteWorkflow,
		t,
		resetWorkflowVersionHistory,
		deleteAllInspectVars,
		invalidAllLastRun,
		deleteVersionUrl
	]);
	const { mutateAsync: updateWorkflow } = useUpdateWorkflow();
	const handleUpdateWorkflow = useCallback(async (params) => {
		const { id, ...rest } = params;
		await updateWorkflow({
			url: updateVersionUrl?.(id || "") || "",
			...rest
		}, {
			onSuccess: () => {
				setEditModalOpen(false);
				toast.success(t("versionHistory.action.updateSuccess", { ns: "workflow" }));
				resetWorkflowVersionHistory();
			},
			onError: () => {
				toast.error(t("versionHistory.action.updateFailure", { ns: "workflow" }));
			},
			onSettled: () => {
				setEditModalOpen(false);
			}
		});
	}, [
		t,
		updateWorkflow,
		resetWorkflowVersionHistory,
		updateVersionUrl
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full w-[268px] flex-col rounded-l-2xl border-y-[0.5px] border-l-[0.5px] border-components-panel-border bg-components-panel-bg shadow-xl shadow-shadow-shadow-5",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-x-2 px-4 pt-3",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "system-xl-semibold flex-1 py-1 text-text-primary",
						children: t("versionHistory.title", { ns: "workflow" })
					}),
					/* @__PURE__ */ jsx(Filter, {
						filterValue,
						isOnlyShowNamedVersions,
						onClickFilterItem: handleClickFilterItem,
						handleSwitch
					}),
					/* @__PURE__ */ jsx(Divider, {
						type: "vertical",
						className: "mx-1 h-3.5"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex h-6 w-6 cursor-pointer items-center justify-center p-0.5",
						onClick: handleClose,
						children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-text-tertiary" })
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex h-0 flex-1 flex-col",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex-1 overflow-y-auto px-3 py-2",
					children: isFetching && !versionHistory?.pages?.length ? /* @__PURE__ */ jsx(Loading, {}) : /* @__PURE__ */ jsxs(Fragment$1, { children: [versionHistory?.pages?.map((page, pageNumber) => page.items?.map((item, idx) => {
						const isLast = pageNumber === versionHistory.pages.length - 1 && idx === page.items.length - 1;
						return /* @__PURE__ */ jsx(version_history_item_default, {
							item,
							currentVersion,
							latestVersionId: latestVersionId || "",
							onClick: handleVersionClick,
							handleClickMenuItem: handleClickMenuItem.bind(null, item),
							isLast
						}, item.id);
					})), !isFetching && (!versionHistory?.pages?.length || !versionHistory.pages[0].items.length) && /* @__PURE__ */ jsx(empty_default, { onResetFilter: handleResetFilter })] })
				}), hasNextPage && /* @__PURE__ */ jsx("div", {
					className: "p-2",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex cursor-pointer items-center gap-x-1",
						onClick: handleNextPage,
						children: [/* @__PURE__ */ jsx("div", {
							className: "item-center flex justify-center p-0.5",
							children: isFetching ? /* @__PURE__ */ jsx(Dm, { className: "h-3.5 w-3.5 animate-spin text-text-accent" }) : /* @__PURE__ */ jsx(wF, { className: "h-3.5 w-3.5 text-text-accent" })
						}), /* @__PURE__ */ jsx("div", {
							className: "system-xs-medium-uppercase py-[1px] text-text-accent",
							children: t("common.loadMore", { ns: "workflow" })
						})]
					})
				})]
			}),
			restoreConfirmOpen && /* @__PURE__ */ jsx(RestoreConfirmModal, {
				isOpen: restoreConfirmOpen,
				versionInfo: operatedItem,
				onClose: handleCancel.bind(null, VersionHistoryContextMenuOptions.restore),
				onRestore: handleRestore
			}),
			deleteConfirmOpen && /* @__PURE__ */ jsx(DeleteConfirmModal, {
				isOpen: deleteConfirmOpen,
				versionInfo: operatedItem,
				onClose: handleCancel.bind(null, VersionHistoryContextMenuOptions.delete),
				onDelete: handleDelete
			}),
			editModalOpen && /* @__PURE__ */ jsx(VersionInfoModal, {
				isOpen: editModalOpen,
				versionInfo: operatedItem,
				onClose: handleCancel.bind(null, VersionHistoryContextMenuOptions.edit),
				onPublish: handleUpdateWorkflow
			})
		]
	});
};
var version_history_panel_default = React$1.memo(VersionHistoryPanel);
//#endregion
export { VersionHistoryPanel, version_history_panel_default as default };
