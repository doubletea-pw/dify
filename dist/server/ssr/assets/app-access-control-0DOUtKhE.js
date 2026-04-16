import { m as __exportAll } from "../index.js";
import { Kn as cc, Kr as sD, S as D, Vt as S7, Wr as s5, fi as x, pr as jm, ui as wV, xt as P7, zr as r2 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as create } from "./react-CHKO_ryu.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { l as post, r as get } from "./base-BuKAg6Le.js";
import { a as useSelector } from "./app-context-BiSzFQEV.js";
import { a as FloatingOverlay, n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as Input } from "./input-BOHL-qYi.js";
import { t as Loading } from "./loading-BryKikzY.js";
import { a as Ke, n as Qe, r as ht, y as M } from "./dialog-DCCIZLOh.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import { n as useQuery, p as useQueryClient, t as useMutation } from "./useMutation-CRBpDOZ8.js";
import { t as useInfiniteQuery } from "./useInfiniteQuery-CNgDC6bG.js";
import { n as useGlobalPublicStore } from "./global-public-context-DpzzsplY.js";
import { n as SubjectType, t as AccessMode } from "./access-control-DY4aAk1X.js";
import { C as getUserCanAccess } from "./share-Bnl8cbPg.js";
import { n as Avatar, t as useDebounce } from "./useDebounce-DsPp7m8L.js";
import { t as Checkbox } from "./checkbox-DTSgkYdc.js";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region service/access-control.ts
var NAME_SPACE = "access-control";
var useAppWhiteListSubjects = (appId, enabled) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"app-whitelist-subjects",
			appId
		],
		queryFn: () => get(`/enterprise/webapp/app/subjects?appId=${appId}`),
		enabled: !!appId && enabled,
		staleTime: 0,
		gcTime: 0
	});
};
var useSearchForWhiteListCandidates = (query, enabled) => {
	return useInfiniteQuery({
		queryKey: [
			NAME_SPACE,
			"app-whitelist-candidates",
			query
		],
		queryFn: ({ pageParam }) => {
			const params = new URLSearchParams();
			Object.keys(query).forEach((key) => {
				const typedKey = key;
				if (query[typedKey]) params.append(key, `${query[typedKey]}`);
			});
			params.append("pageNumber", `${pageParam}`);
			return get(`/enterprise/webapp/app/subject/search?${new URLSearchParams(params).toString()}`);
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			if (lastPage.hasMore) return lastPage.currPage + 1;
		},
		gcTime: 0,
		staleTime: 0,
		enabled
	});
};
var useUpdateAccessMode = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: [NAME_SPACE, "update-access-mode"],
		mutationFn: (params) => {
			return post("/enterprise/webapp/app/access-mode", { body: params });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [NAME_SPACE, "app-whitelist-subjects"] });
		}
	});
};
var useGetUserCanAccessApp = ({ appId, isInstalledApp = true, enabled }) => {
	const systemFeatures = useGlobalPublicStore((s) => s.systemFeatures);
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"user-can-access-app",
			appId,
			systemFeatures.webapp_auth.enabled,
			isInstalledApp
		],
		queryFn: () => {
			if (systemFeatures.webapp_auth.enabled) return getUserCanAccess(appId, isInstalledApp);
			else return { result: true };
		},
		enabled: enabled !== void 0 ? enabled : !!appId,
		staleTime: 0,
		gcTime: 0
	});
};
//#endregion
//#region context/access-control-store.ts
var useAccessControlStore = create((set) => {
	return {
		appId: "",
		setAppId: (appId) => set({ appId }),
		specificGroups: [],
		setSpecificGroups: (specificGroups) => set({ specificGroups }),
		specificMembers: [],
		setSpecificMembers: (specificMembers) => set({ specificMembers }),
		currentMenu: AccessMode.SPECIFIC_GROUPS_MEMBERS,
		setCurrentMenu: (currentMenu) => set({ currentMenu }),
		selectedGroupsForBreadcrumb: [],
		setSelectedGroupsForBreadcrumb: (selectedGroupsForBreadcrumb) => set({ selectedGroupsForBreadcrumb })
	};
});
//#endregion
//#region app/components/app/app-access-control/access-control-dialog.tsx
var AccessControlDialog = ({ className, children, show, onClose }) => {
	const close = useCallback(() => {
		onClose?.();
	}, [onClose]);
	return /* @__PURE__ */ jsx(Ke, {
		appear: true,
		show,
		as: Fragment,
		children: /* @__PURE__ */ jsxs(ht, {
			as: "div",
			open: true,
			className: "relative z-[99]",
			onClose: () => null,
			children: [/* @__PURE__ */ jsx(Ke.Child, {
				as: Fragment,
				enter: "ease-out duration-300",
				enterFrom: "opacity-0",
				enterTo: "opacity-100",
				leave: "ease-in duration-200",
				leaveFrom: "opacity-100",
				leaveTo: "opacity-0",
				children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-background-overlay" })
			}), /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ jsx(Ke.Child, {
					as: Fragment,
					enter: "ease-out duration-300",
					enterFrom: "opacity-0 scale-95",
					enterTo: "opacity-100 scale-100",
					leave: "ease-in duration-200",
					leaveFrom: "opacity-100 scale-100",
					leaveTo: "opacity-0 scale-95",
					children: /* @__PURE__ */ jsxs(ht.Panel, {
						className: cn("relative h-auto min-h-[323px] w-[600px] overflow-y-auto rounded-2xl bg-components-panel-bg p-0 shadow-xl transition-all", className),
						children: [/* @__PURE__ */ jsx("div", {
							onClick: () => close(),
							className: "absolute right-5 top-5 z-10 flex h-8 w-8 cursor-pointer items-center justify-center",
							children: /* @__PURE__ */ jsx(P7, { className: "h-5 w-5 text-text-tertiary" })
						}), children]
					})
				})
			})]
		})
	});
};
//#endregion
//#region app/components/app/app-access-control/access-control-item.tsx
var AccessControlItem = ({ type, children }) => {
	const currentMenu = useAccessControlStore((s) => s.currentMenu);
	const setCurrentMenu = useAccessControlStore((s) => s.setCurrentMenu);
	if (currentMenu !== type) return /* @__PURE__ */ jsx("div", {
		className: "cursor-pointer rounded-[10px] border-[1px]\n      border-components-option-card-option-border bg-components-option-card-option-bg\n      hover:border-components-option-card-option-border-hover hover:bg-components-option-card-option-bg-hover",
		onClick: () => setCurrentMenu(type),
		children
	});
	return /* @__PURE__ */ jsx("div", {
		className: "rounded-[10px] border-[1.5px]\n  border-components-option-card-option-selected-border bg-components-option-card-option-selected-bg shadow-sm",
		children
	});
};
AccessControlItem.displayName = "AccessControlItem";
//#endregion
//#region app/components/app/app-access-control/add-member-or-group-pop.tsx
function AddMemberOrGroupDialog() {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const [keyword, setKeyword] = useState("");
	const selectedGroupsForBreadcrumb = useAccessControlStore((s) => s.selectedGroupsForBreadcrumb);
	const debouncedKeyword = useDebounce(keyword, { wait: 500 });
	const lastAvailableGroup = selectedGroupsForBreadcrumb[selectedGroupsForBreadcrumb.length - 1];
	const { isLoading, isFetchingNextPage, fetchNextPage, data } = useSearchForWhiteListCandidates({
		keyword: debouncedKeyword,
		groupId: lastAvailableGroup?.id,
		resultsPerPage: 10
	}, open);
	const handleKeywordChange = (e) => {
		setKeyword(e.target.value);
	};
	const anchorRef = useRef(null);
	useEffect(() => {
		const hasMore = data?.pages?.[0]?.hasMore ?? false;
		let observer;
		if (anchorRef.current) {
			observer = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && !isLoading && hasMore) fetchNextPage();
			}, { rootMargin: "20px" });
			observer.observe(anchorRef.current);
		}
		return () => observer?.disconnect();
	}, [
		isLoading,
		fetchNextPage,
		anchorRef,
		data
	]);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		offset: { crossAxis: 300 },
		placement: "bottom-end",
		children: [
			/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsxs(Button, {
					variant: "ghost-accent",
					size: "small",
					className: "flex shrink-0 items-center gap-x-0.5",
					onClick: () => setOpen(!open),
					children: [/* @__PURE__ */ jsx(x, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: t("operation.add", { ns: "common" }) })]
				})
			}),
			open && /* @__PURE__ */ jsx(FloatingOverlay, {}),
			/* @__PURE__ */ jsx(PortalToFollowElemContent, {
				className: "z-[100]",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative flex max-h-[400px] w-[400px] flex-col overflow-y-auto rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg backdrop-blur-[5px]",
					children: [/* @__PURE__ */ jsx("div", {
						className: "sticky top-0 z-10 bg-components-panel-bg-blur p-2 pb-0.5 backdrop-blur-[5px]",
						children: /* @__PURE__ */ jsx(Input, {
							value: keyword,
							onChange: handleKeywordChange,
							showLeftIcon: true,
							placeholder: t("accessControlDialog.operateGroupAndMember.searchPlaceholder", { ns: "app" })
						})
					}), isLoading ? /* @__PURE__ */ jsx("div", {
						className: "p-1",
						children: /* @__PURE__ */ jsx(Loading, {})
					}) : (data?.pages?.length ?? 0) > 0 ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex h-7 items-center px-2 py-0.5",
							children: /* @__PURE__ */ jsx(SelectedGroupsBreadCrumb, {})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "p-1",
							children: [renderGroupOrMember(data?.pages ?? []), isFetchingNextPage && /* @__PURE__ */ jsx(Loading, {})]
						}),
						/* @__PURE__ */ jsx("div", {
							ref: anchorRef,
							className: "h-0",
							children: " "
						})
					] }) : /* @__PURE__ */ jsx("div", {
						className: "flex h-7 items-center justify-center px-2 py-0.5",
						children: /* @__PURE__ */ jsx("span", {
							className: "system-xs-regular text-text-tertiary",
							children: t("accessControlDialog.operateGroupAndMember.noResult", { ns: "app" })
						})
					})]
				})
			})
		]
	});
}
function renderGroupOrMember(data) {
	return data?.map((page) => {
		return /* @__PURE__ */ jsx("div", { children: page.subjects?.map((item, index) => {
			if (item.subjectType === SubjectType.GROUP) return /* @__PURE__ */ jsx(GroupItem$1, { group: item.groupData }, index);
			return /* @__PURE__ */ jsx(MemberItem$1, { member: item.accountData }, index);
		}) }, `search_group_member_page_${page.currPage}`);
	}) ?? null;
}
function SelectedGroupsBreadCrumb() {
	const selectedGroupsForBreadcrumb = useAccessControlStore((s) => s.selectedGroupsForBreadcrumb);
	const setSelectedGroupsForBreadcrumb = useAccessControlStore((s) => s.setSelectedGroupsForBreadcrumb);
	const { t } = useTranslation();
	const handleBreadCrumbClick = useCallback((index) => {
		setSelectedGroupsForBreadcrumb(selectedGroupsForBreadcrumb.slice(0, index + 1));
	}, [setSelectedGroupsForBreadcrumb, selectedGroupsForBreadcrumb]);
	const handleReset = useCallback(() => {
		setSelectedGroupsForBreadcrumb([]);
	}, [setSelectedGroupsForBreadcrumb]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-7 items-center gap-x-0.5 px-2 py-0.5",
		children: [/* @__PURE__ */ jsx("span", {
			className: cn("system-xs-regular text-text-tertiary", selectedGroupsForBreadcrumb.length > 0 && "cursor-pointer text-text-accent"),
			onClick: handleReset,
			children: t("accessControlDialog.operateGroupAndMember.allMembers", { ns: "app" })
		}), selectedGroupsForBreadcrumb.map((group, index) => {
			return /* @__PURE__ */ jsxs("div", {
				className: "system-xs-regular flex items-center gap-x-0.5 text-text-tertiary",
				children: [/* @__PURE__ */ jsx("span", { children: "/" }), /* @__PURE__ */ jsx("span", {
					className: index === selectedGroupsForBreadcrumb.length - 1 ? "" : "cursor-pointer text-text-accent",
					onClick: () => handleBreadCrumbClick(index),
					children: group.name
				})]
			}, index);
		})]
	});
}
function GroupItem$1({ group }) {
	const { t } = useTranslation();
	const specificGroups = useAccessControlStore((s) => s.specificGroups);
	const setSpecificGroups = useAccessControlStore((s) => s.setSpecificGroups);
	const selectedGroupsForBreadcrumb = useAccessControlStore((s) => s.selectedGroupsForBreadcrumb);
	const setSelectedGroupsForBreadcrumb = useAccessControlStore((s) => s.setSelectedGroupsForBreadcrumb);
	const isChecked = specificGroups.some((g) => g.id === group.id);
	const handleCheckChange = useCallback(() => {
		if (!isChecked) setSpecificGroups([...specificGroups, group]);
		else setSpecificGroups(specificGroups.filter((g) => g.id !== group.id));
	}, [
		specificGroups,
		setSpecificGroups,
		group,
		isChecked
	]);
	const handleExpandClick = useCallback(() => {
		setSelectedGroupsForBreadcrumb([...selectedGroupsForBreadcrumb, group]);
	}, [
		selectedGroupsForBreadcrumb,
		setSelectedGroupsForBreadcrumb,
		group
	]);
	return /* @__PURE__ */ jsxs(BaseItem$1, { children: [
		/* @__PURE__ */ jsx(Checkbox, {
			checked: isChecked,
			className: "h-4 w-4 shrink-0",
			onCheck: handleCheckChange
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "item-center flex grow",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "mr-2 h-5 w-5 overflow-hidden rounded-full bg-components-icon-bg-blue-solid",
					children: /* @__PURE__ */ jsx("div", {
						className: "bg-access-app-icon-mask-bg flex h-full w-full items-center justify-center",
						children: /* @__PURE__ */ jsx(wV, { className: "h-[14px] w-[14px] text-components-avatar-shape-fill-stop-0" })
					})
				}),
				/* @__PURE__ */ jsx("p", {
					className: "system-sm-medium mr-1 text-text-secondary",
					children: group.name
				}),
				/* @__PURE__ */ jsx("p", {
					className: "system-xs-regular text-text-tertiary",
					children: group.groupSize
				})
			]
		}),
		/* @__PURE__ */ jsxs(Button, {
			size: "small",
			disabled: isChecked,
			variant: "ghost-accent",
			className: "flex shrink-0 items-center justify-between px-1.5 py-1",
			onClick: handleExpandClick,
			children: [/* @__PURE__ */ jsx("span", {
				className: "px-[3px]",
				children: t("accessControlDialog.operateGroupAndMember.expand", { ns: "app" })
			}), /* @__PURE__ */ jsx(r2, { className: "h-4 w-4" })]
		})
	] });
}
function MemberItem$1({ member }) {
	const currentUser = useSelector((s) => s.userProfile);
	const { t } = useTranslation();
	const specificMembers = useAccessControlStore((s) => s.specificMembers);
	const setSpecificMembers = useAccessControlStore((s) => s.setSpecificMembers);
	const isChecked = specificMembers.some((m) => m.id === member.id);
	return /* @__PURE__ */ jsxs(BaseItem$1, {
		className: "pr-3",
		children: [
			/* @__PURE__ */ jsx(Checkbox, {
				checked: isChecked,
				className: "h-4 w-4 shrink-0",
				onCheck: useCallback(() => {
					if (!isChecked) setSpecificMembers([...specificMembers, member]);
					else setSpecificMembers(specificMembers.filter((m) => m.id !== member.id));
				}, [
					specificMembers,
					setSpecificMembers,
					member,
					isChecked
				])
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex grow items-center",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mr-2 h-5 w-5 overflow-hidden rounded-full bg-components-icon-bg-blue-solid",
						children: /* @__PURE__ */ jsx("div", {
							className: "bg-access-app-icon-mask-bg flex h-full w-full items-center justify-center",
							children: /* @__PURE__ */ jsx(Avatar, {
								size: "xxs",
								avatar: null,
								name: member.name
							})
						})
					}),
					/* @__PURE__ */ jsx("p", {
						className: "system-sm-medium mr-1 text-text-secondary",
						children: member.name
					}),
					currentUser.email === member.email && /* @__PURE__ */ jsxs("p", {
						className: "system-xs-regular text-text-tertiary",
						children: [
							"(",
							t("you", { ns: "common" }),
							")"
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "system-xs-regular text-text-quaternary",
				children: member.email
			})
		]
	});
}
function BaseItem$1({ children, className }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex cursor-pointer items-center space-x-2 p-1 pl-2 hover:rounded-lg hover:bg-state-base-hover", className),
		children
	});
}
//#endregion
//#region app/components/app/app-access-control/specific-groups-or-members.tsx
function SpecificGroupsOrMembers() {
	const currentMenu = useAccessControlStore((s) => s.currentMenu);
	const appId = useAccessControlStore((s) => s.appId);
	const setSpecificGroups = useAccessControlStore((s) => s.setSpecificGroups);
	const setSpecificMembers = useAccessControlStore((s) => s.setSpecificMembers);
	const { t } = useTranslation();
	const { isPending, data } = useAppWhiteListSubjects(appId, Boolean(appId) && currentMenu === AccessMode.SPECIFIC_GROUPS_MEMBERS);
	useEffect(() => {
		setSpecificGroups(data?.groups ?? []);
		setSpecificMembers(data?.members ?? []);
	}, [
		data,
		setSpecificGroups,
		setSpecificMembers
	]);
	if (currentMenu !== AccessMode.SPECIFIC_GROUPS_MEMBERS) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center p-3",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex grow items-center gap-x-2",
			children: [/* @__PURE__ */ jsx(jm, { className: "h-4 w-4 text-text-primary" }), /* @__PURE__ */ jsx("p", {
				className: "system-sm-medium text-text-primary",
				children: t("accessControlDialog.accessItems.specific", { ns: "app" })
			})]
		})
	});
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-x-1 p-3",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex grow items-center gap-x-1",
			children: [/* @__PURE__ */ jsx(jm, { className: "h-4 w-4 text-text-primary" }), /* @__PURE__ */ jsx("p", {
				className: "system-sm-medium text-text-primary",
				children: t("accessControlDialog.accessItems.specific", { ns: "app" })
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "flex items-center gap-x-1",
			children: /* @__PURE__ */ jsx(AddMemberOrGroupDialog, {})
		})]
	}), /* @__PURE__ */ jsx("div", {
		className: "px-1 pb-1",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex max-h-[400px] flex-col gap-y-2 overflow-y-auto rounded-lg bg-background-section p-2",
			children: isPending ? /* @__PURE__ */ jsx(Loading, {}) : /* @__PURE__ */ jsx(RenderGroupsAndMembers, {})
		})
	})] });
}
function RenderGroupsAndMembers() {
	const { t } = useTranslation();
	const specificGroups = useAccessControlStore((s) => s.specificGroups);
	const specificMembers = useAccessControlStore((s) => s.specificMembers);
	if (specificGroups.length <= 0 && specificMembers.length <= 0) return /* @__PURE__ */ jsx("div", {
		className: "px-2 pb-1.5 pt-5",
		children: /* @__PURE__ */ jsx("p", {
			className: "system-xs-regular text-center text-text-tertiary",
			children: t("accessControlDialog.noGroupsOrMembers", { ns: "app" })
		})
	});
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx("p", {
			className: "system-2xs-medium-uppercase sticky top-0 text-text-tertiary",
			children: t("accessControlDialog.groups", {
				ns: "app",
				count: specificGroups.length ?? 0
			})
		}),
		/* @__PURE__ */ jsx("div", {
			className: "flex flex-row flex-wrap gap-1",
			children: specificGroups.map((group, index) => /* @__PURE__ */ jsx(GroupItem, { group }, index))
		}),
		/* @__PURE__ */ jsx("p", {
			className: "system-2xs-medium-uppercase sticky top-0 text-text-tertiary",
			children: t("accessControlDialog.members", {
				ns: "app",
				count: specificMembers.length ?? 0
			})
		}),
		/* @__PURE__ */ jsx("div", {
			className: "flex flex-row flex-wrap gap-1",
			children: specificMembers.map((member, index) => /* @__PURE__ */ jsx(MemberItem, { member }, index))
		})
	] });
}
function GroupItem({ group }) {
	const specificGroups = useAccessControlStore((s) => s.specificGroups);
	const setSpecificGroups = useAccessControlStore((s) => s.setSpecificGroups);
	const handleRemoveGroup = useCallback(() => {
		setSpecificGroups(specificGroups.filter((g) => g.id !== group.id));
	}, [
		group,
		setSpecificGroups,
		specificGroups
	]);
	return /* @__PURE__ */ jsxs(BaseItem, {
		icon: /* @__PURE__ */ jsx(wV, { className: "h-[14px] w-[14px] text-components-avatar-shape-fill-stop-0" }),
		onRemove: handleRemoveGroup,
		children: [/* @__PURE__ */ jsx("p", {
			className: "system-xs-regular text-text-primary",
			children: group.name
		}), /* @__PURE__ */ jsx("p", {
			className: "system-xs-regular text-text-tertiary",
			children: group.groupSize
		})]
	});
}
function MemberItem({ member }) {
	const specificMembers = useAccessControlStore((s) => s.specificMembers);
	const setSpecificMembers = useAccessControlStore((s) => s.setSpecificMembers);
	const handleRemoveMember = useCallback(() => {
		setSpecificMembers(specificMembers.filter((m) => m.id !== member.id));
	}, [
		member,
		setSpecificMembers,
		specificMembers
	]);
	return /* @__PURE__ */ jsx(BaseItem, {
		icon: /* @__PURE__ */ jsx(Avatar, {
			size: "xxs",
			avatar: null,
			name: member.name
		}),
		onRemove: handleRemoveMember,
		children: /* @__PURE__ */ jsx("p", {
			className: "system-xs-regular text-text-primary",
			children: member.name
		})
	});
}
function BaseItem({ icon, onRemove, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "group flex flex-row items-center gap-x-1 rounded-full border-[0.5px] bg-components-badge-white-to-dark p-1 pr-1.5 shadow-xs",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "h-5 w-5 overflow-hidden rounded-full bg-components-icon-bg-blue-solid",
				children: /* @__PURE__ */ jsx("div", {
					className: "bg-access-app-icon-mask-bg flex h-full w-full items-center justify-center",
					children: icon
				})
			}),
			children,
			/* @__PURE__ */ jsx("div", {
				className: "flex h-4 w-4 cursor-pointer items-center justify-center",
				onClick: onRemove,
				children: /* @__PURE__ */ jsx(S7, { className: "h-[14px] w-[14px] text-text-quaternary" })
			})
		]
	});
}
function WebAppSSONotEnabledTip() {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(tooltip_default, {
		asChild: false,
		popupContent: t("accessControlDialog.webAppSSONotEnabledTip", { ns: "app" }),
		children: /* @__PURE__ */ jsx(D, { className: "h-4 w-4 shrink-0 text-text-warning-secondary" })
	});
}
//#endregion
//#region app/components/app/app-access-control/index.tsx
var app_access_control_exports = /* @__PURE__ */ __exportAll({ default: () => AccessControl });
function AccessControl(props) {
	const { app, onClose, onConfirm } = props;
	const { t } = useTranslation();
	const systemFeatures = useGlobalPublicStore((s) => s.systemFeatures);
	const setAppId = useAccessControlStore((s) => s.setAppId);
	const specificGroups = useAccessControlStore((s) => s.specificGroups);
	const specificMembers = useAccessControlStore((s) => s.specificMembers);
	const currentMenu = useAccessControlStore((s) => s.currentMenu);
	const setCurrentMenu = useAccessControlStore((s) => s.setCurrentMenu);
	const hideTip = systemFeatures.webapp_auth.enabled && (systemFeatures.webapp_auth.allow_sso || systemFeatures.webapp_auth.allow_email_password_login || systemFeatures.webapp_auth.allow_email_code_login);
	useEffect(() => {
		setAppId(app.id);
		setCurrentMenu(app.access_mode ?? AccessMode.SPECIFIC_GROUPS_MEMBERS);
	}, [
		app,
		setAppId,
		setCurrentMenu
	]);
	const { isPending, mutateAsync: updateAccessMode } = useUpdateAccessMode();
	const handleConfirm = useCallback(async () => {
		const submitData = {
			appId: app.id,
			accessMode: currentMenu
		};
		if (currentMenu === AccessMode.SPECIFIC_GROUPS_MEMBERS) {
			const subjects = [];
			specificGroups.forEach((group) => {
				subjects.push({
					subjectId: group.id,
					subjectType: SubjectType.GROUP
				});
			});
			specificMembers.forEach((member) => {
				subjects.push({
					subjectId: member.id,
					subjectType: SubjectType.ACCOUNT
				});
			});
			submitData.subjects = subjects;
		}
		await updateAccessMode(submitData);
		Toast.notify({
			type: "success",
			message: t("accessControlDialog.updateSuccess", { ns: "app" })
		});
		onConfirm?.();
	}, [
		updateAccessMode,
		app,
		specificGroups,
		specificMembers,
		t,
		onConfirm,
		currentMenu
	]);
	return /* @__PURE__ */ jsx(AccessControlDialog, {
		show: true,
		onClose,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-y-3",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "pb-3 pl-6 pr-14 pt-6",
					children: [/* @__PURE__ */ jsx(Qe, {
						className: "title-2xl-semi-bold text-text-primary",
						children: t("accessControlDialog.title", { ns: "app" })
					}), /* @__PURE__ */ jsx(M, {
						className: "system-xs-regular mt-1 text-text-tertiary",
						children: t("accessControlDialog.description", { ns: "app" })
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-y-1 px-6 pb-3",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "leading-6",
							children: /* @__PURE__ */ jsx("p", {
								className: "system-sm-medium text-text-tertiary",
								children: t("accessControlDialog.accessLabel", { ns: "app" })
							})
						}),
						/* @__PURE__ */ jsx(AccessControlItem, {
							type: AccessMode.ORGANIZATION,
							children: /* @__PURE__ */ jsx("div", {
								className: "flex items-center p-3",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex grow items-center gap-x-2",
									children: [/* @__PURE__ */ jsx(s5, { className: "h-4 w-4 text-text-primary" }), /* @__PURE__ */ jsx("p", {
										className: "system-sm-medium text-text-primary",
										children: t("accessControlDialog.accessItems.organization", { ns: "app" })
									})]
								})
							})
						}),
						/* @__PURE__ */ jsx(AccessControlItem, {
							type: AccessMode.SPECIFIC_GROUPS_MEMBERS,
							children: /* @__PURE__ */ jsx(SpecificGroupsOrMembers, {})
						}),
						/* @__PURE__ */ jsx(AccessControlItem, {
							type: AccessMode.EXTERNAL_MEMBERS,
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center p-3",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex grow items-center gap-x-2",
									children: [/* @__PURE__ */ jsx(sD, { className: "h-4 w-4 text-text-primary" }), /* @__PURE__ */ jsx("p", {
										className: "system-sm-medium text-text-primary",
										children: t("accessControlDialog.accessItems.external", { ns: "app" })
									})]
								}), !hideTip && /* @__PURE__ */ jsx(WebAppSSONotEnabledTip, {})]
							})
						}),
						/* @__PURE__ */ jsx(AccessControlItem, {
							type: AccessMode.PUBLIC,
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-x-2 p-3",
								children: [/* @__PURE__ */ jsx(cc, { className: "h-4 w-4 text-text-primary" }), /* @__PURE__ */ jsx("p", {
									className: "system-sm-medium text-text-primary",
									children: t("accessControlDialog.accessItems.anyone", { ns: "app" })
								})]
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-end gap-x-2 p-6 pt-5",
					children: [/* @__PURE__ */ jsx(Button, {
						onClick: onClose,
						children: t("operation.cancel", { ns: "common" })
					}), /* @__PURE__ */ jsx(Button, {
						disabled: isPending,
						loading: isPending,
						variant: "primary",
						onClick: handleConfirm,
						children: t("operation.confirm", { ns: "common" })
					})]
				})
			]
		})
	});
}
//#endregion
export { useGetUserCanAccessApp as i, app_access_control_exports as n, useAppWhiteListSubjects as r, AccessControl as t };
