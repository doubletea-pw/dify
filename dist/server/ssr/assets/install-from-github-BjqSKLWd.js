import { E as Dm } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { T as toast } from "./base-BuKAg6Le.js";
import { a as useCheckInstalled, c as installed_default, f as pluginManifestToCardPluginProps, l as convertRepoToUrl, o as version_default, p as card_default, s as useHideLogic, u as parseGitHubUrl } from "./semver-olnXAeJC.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as PortalSelect } from "./select-C87OPWpf.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { E as usePluginTaskList, G as updateFromGitHub, d as useInstallPackageFromGitHub, t as useRefreshPluginList } from "./use-refresh-plugin-list-C8aKRYG-.js";
import { B as InstallStepFromGitHub, G as TaskStatus } from "./hooks-BTelimHS.js";
import { a as checkTaskStatus } from "./skeleton-Brd40zkS.js";
import { t as useGetIcon } from "./use-get-icon-D8ihnTYG.js";
import { n as useGitHubUpload, t as useGitHubReleases } from "./hooks-vGx4my_Z.js";
import * as React$1 from "react";
import { useCallback, useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/plugins/install-plugin/install-from-github/steps/loaded.tsx
var i18nPrefix$2 = "installModal";
var Loaded = ({ updatePayload, uniqueIdentifier, payload, repoUrl, selectedVersion, selectedPackage, onBack, onStartToInstall, onInstalled, onFailed }) => {
	const { t } = useTranslation();
	const toInstallVersion = payload.version;
	const pluginId = payload.plugin_id;
	const { installedInfo, isLoading } = useCheckInstalled({
		pluginIds: [pluginId],
		enabled: !!pluginId
	});
	const installedInfoPayload = installedInfo?.[pluginId];
	const installedVersion = installedInfoPayload?.installedVersion;
	const hasInstalled = !!installedVersion;
	const [isInstalling, setIsInstalling] = React$1.useState(false);
	const { mutateAsync: installPackageFromGitHub } = useInstallPackageFromGitHub();
	const { handleRefetch } = usePluginTaskList(payload.category);
	const { check } = checkTaskStatus();
	useEffect(() => {
		if (hasInstalled && uniqueIdentifier === installedInfoPayload.uniqueIdentifier) onInstalled();
	}, [hasInstalled]);
	const handleInstall = async () => {
		if (isInstalling) return;
		setIsInstalling(true);
		onStartToInstall?.();
		try {
			const { owner, repo } = parseGitHubUrl(repoUrl);
			let taskId;
			let isInstalled;
			if (updatePayload) {
				const { all_installed, task_id } = await updateFromGitHub(`${owner}/${repo}`, selectedVersion, selectedPackage, updatePayload.originalPackageInfo.id, uniqueIdentifier);
				taskId = task_id;
				isInstalled = all_installed;
			} else if (hasInstalled) {
				const { all_installed, task_id } = await updateFromGitHub(`${owner}/${repo}`, selectedVersion, selectedPackage, installedInfoPayload.uniqueIdentifier, uniqueIdentifier);
				taskId = task_id;
				isInstalled = all_installed;
			} else {
				const { all_installed, task_id } = await installPackageFromGitHub({
					repoUrl: `${owner}/${repo}`,
					selectedVersion,
					selectedPackage,
					uniqueIdentifier
				});
				taskId = task_id;
				isInstalled = all_installed;
			}
			if (isInstalled) {
				onInstalled();
				return;
			}
			handleRefetch();
			const { status, error } = await check({
				taskId,
				pluginUniqueIdentifier: uniqueIdentifier
			});
			if (status === TaskStatus.failed) {
				onFailed(error);
				return;
			}
			onInstalled(true);
		} catch (e) {
			if (typeof e === "string") {
				onFailed(e);
				return;
			}
			onFailed();
		} finally {
			setIsInstalling(false);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx("div", {
			className: "system-md-regular text-text-secondary",
			children: /* @__PURE__ */ jsx("p", { children: t(`${i18nPrefix$2}.readyToInstall`, { ns: "plugin" }) })
		}),
		/* @__PURE__ */ jsx("div", {
			className: "flex flex-wrap content-start items-start gap-1 self-stretch rounded-2xl bg-background-section-burn p-2",
			children: /* @__PURE__ */ jsx(card_default, {
				className: "w-full",
				payload: pluginManifestToCardPluginProps(payload),
				titleLeft: !isLoading && /* @__PURE__ */ jsx(version_default, {
					hasInstalled,
					installedVersion,
					toInstallVersion
				})
			})
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "mt-4 flex items-center justify-end gap-2 self-stretch",
			children: [!isInstalling && /* @__PURE__ */ jsx(Button, {
				variant: "secondary",
				className: "min-w-[72px]",
				onClick: onBack,
				children: t("installModal.back", { ns: "plugin" })
			}), /* @__PURE__ */ jsxs(Button, {
				variant: "primary",
				className: "flex min-w-[72px] space-x-0.5",
				onClick: handleInstall,
				disabled: isInstalling || isLoading,
				children: [isInstalling && /* @__PURE__ */ jsx(Dm, { className: "h-4 w-4 animate-spin-slow" }), /* @__PURE__ */ jsx("span", { children: t(`${i18nPrefix$2}.${isInstalling ? "installing" : "install"}`, { ns: "plugin" }) })]
			})]
		})
	] });
};
//#endregion
//#region app/components/plugins/install-plugin/install-from-github/steps/selectPackage.tsx
var i18nPrefix$1 = "installFromGitHub";
var SelectPackage = ({ updatePayload, repoUrl, selectedVersion, versions, onSelectVersion, selectedPackage, packages, onSelectPackage, onUploaded, onFailed, onBack }) => {
	const { t } = useTranslation();
	const isEdit = Boolean(updatePayload);
	const [isUploading, setIsUploading] = React$1.useState(false);
	const { handleUpload } = useGitHubUpload();
	const handleUploadPackage = async () => {
		if (isUploading) return;
		setIsUploading(true);
		try {
			await handleUpload(repoUrl.replace("https://github.com/", ""), selectedVersion, selectedPackage, (GitHubPackage) => {
				onUploaded({
					uniqueIdentifier: GitHubPackage.unique_identifier,
					manifest: GitHubPackage.manifest
				});
			});
		} catch (e) {
			if (e.response?.message) onFailed(e.response?.message);
			else onFailed(t(`${i18nPrefix$1}.uploadFailed`, { ns: "plugin" }));
		} finally {
			setIsUploading(false);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx("label", {
			htmlFor: "version",
			className: "flex flex-col items-start justify-center self-stretch text-text-secondary",
			children: /* @__PURE__ */ jsx("span", {
				className: "system-sm-semibold",
				children: t(`${i18nPrefix$1}.selectVersion`, { ns: "plugin" })
			})
		}),
		/* @__PURE__ */ jsx(PortalSelect, {
			value: selectedVersion,
			onSelect: onSelectVersion,
			items: versions,
			installedValue: updatePayload?.originalPackageInfo.version,
			placeholder: t(`${i18nPrefix$1}.selectVersionPlaceholder`, { ns: "plugin" }) || "",
			popupClassName: "w-[512px] z-[1001]",
			triggerClassName: "text-components-input-text-filled"
		}),
		/* @__PURE__ */ jsx("label", {
			htmlFor: "package",
			className: "flex flex-col items-start justify-center self-stretch text-text-secondary",
			children: /* @__PURE__ */ jsx("span", {
				className: "system-sm-semibold",
				children: t(`${i18nPrefix$1}.selectPackage`, { ns: "plugin" })
			})
		}),
		/* @__PURE__ */ jsx(PortalSelect, {
			value: selectedPackage,
			onSelect: onSelectPackage,
			items: packages,
			readonly: !selectedVersion,
			placeholder: t(`${i18nPrefix$1}.selectPackagePlaceholder`, { ns: "plugin" }) || "",
			popupClassName: "w-[512px] z-[1001]",
			triggerClassName: "text-components-input-text-filled"
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "mt-4 flex items-center justify-end gap-2 self-stretch",
			children: [!isEdit && /* @__PURE__ */ jsx(Button, {
				variant: "secondary",
				className: "min-w-[72px]",
				onClick: onBack,
				disabled: isUploading,
				children: t("installModal.back", { ns: "plugin" })
			}), /* @__PURE__ */ jsx(Button, {
				variant: "primary",
				className: "min-w-[72px]",
				onClick: handleUploadPackage,
				disabled: !selectedVersion || !selectedPackage || isUploading,
				children: t("installModal.next", { ns: "plugin" })
			})]
		})
	] });
};
//#endregion
//#region app/components/plugins/install-plugin/install-from-github/steps/setURL.tsx
var SetURL = ({ repoUrl, onChange, onNext, onCancel }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx("label", {
			htmlFor: "repoUrl",
			className: "flex flex-col items-start justify-center self-stretch text-text-secondary",
			children: /* @__PURE__ */ jsx("span", {
				className: "system-sm-semibold",
				children: t("installFromGitHub.gitHubRepo", { ns: "plugin" })
			})
		}),
		/* @__PURE__ */ jsx("input", {
			type: "url",
			id: "repoUrl",
			name: "repoUrl",
			value: repoUrl,
			onChange: (e) => onChange(e.target.value),
			className: "shadows-shadow-xs system-sm-regular flex grow items-center gap-[2px]\n          self-stretch overflow-hidden text-ellipsis rounded-lg border border-components-input-border-active\n          bg-components-input-bg-active p-2 text-components-input-text-filled",
			placeholder: "Please enter GitHub repo URL"
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "mt-4 flex items-center justify-end gap-2 self-stretch",
			children: [/* @__PURE__ */ jsx(Button, {
				variant: "secondary",
				className: "min-w-[72px]",
				onClick: onCancel,
				children: t("installModal.cancel", { ns: "plugin" })
			}), /* @__PURE__ */ jsx(Button, {
				variant: "primary",
				className: "min-w-[72px]",
				onClick: onNext,
				disabled: !repoUrl.trim(),
				children: t("installModal.next", { ns: "plugin" })
			})]
		})
	] });
};
//#endregion
//#region app/components/plugins/install-plugin/install-from-github/index.tsx
var i18nPrefix = "installFromGitHub";
var InstallFromGitHub = ({ updatePayload, onClose, onSuccess }) => {
	const { t } = useTranslation();
	const { getIconUrl } = useGetIcon();
	const { fetchReleases } = useGitHubReleases();
	const { refreshPluginList } = useRefreshPluginList();
	const { modalClassName, foldAnimInto, setIsInstalling, handleStartToInstall } = useHideLogic(onClose);
	const [state, setState] = useState({
		step: updatePayload ? InstallStepFromGitHub.selectPackage : InstallStepFromGitHub.setUrl,
		repoUrl: updatePayload?.originalPackageInfo?.repo ? convertRepoToUrl(updatePayload.originalPackageInfo.repo) : "",
		selectedVersion: "",
		selectedPackage: "",
		releases: updatePayload ? updatePayload.originalPackageInfo.releases : []
	});
	const [uniqueIdentifier, setUniqueIdentifier] = useState(null);
	const [manifest, setManifest] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const versions = state.releases.map((release) => ({
		value: release.tag_name,
		name: release.tag_name
	}));
	const packages = state.selectedVersion ? state.releases.find((release) => release.tag_name === state.selectedVersion)?.assets.map((asset) => ({
		value: asset.name,
		name: asset.name
	})) || [] : [];
	const getTitle = useCallback(() => {
		if (state.step === InstallStepFromGitHub.installed) return t(`${i18nPrefix}.installedSuccessfully`, { ns: "plugin" });
		if (state.step === InstallStepFromGitHub.installFailed) return t(`${i18nPrefix}.installFailed`, { ns: "plugin" });
		return updatePayload ? t(`${i18nPrefix}.updatePlugin`, { ns: "plugin" }) : t(`${i18nPrefix}.installPlugin`, { ns: "plugin" });
	}, [
		state.step,
		t,
		updatePayload
	]);
	const handleUrlSubmit = async () => {
		const { isValid, owner, repo } = parseGitHubUrl(state.repoUrl);
		if (!isValid || !owner || !repo) {
			toast.error(t("error.inValidGitHubUrl", { ns: "plugin" }));
			return;
		}
		try {
			const fetchedReleases = await fetchReleases(owner, repo);
			if (fetchedReleases.length > 0) setState((prevState) => ({
				...prevState,
				releases: fetchedReleases,
				step: InstallStepFromGitHub.selectPackage
			}));
			else toast.error(t("error.noReleasesFound", { ns: "plugin" }));
		} catch {
			toast.error(t("error.fetchReleasesError", { ns: "plugin" }));
		}
	};
	const handleError = (e, isInstall) => {
		setErrorMsg(e?.response?.message || t("installModal.installFailedDesc", { ns: "plugin" }));
		setState((prevState) => ({
			...prevState,
			step: isInstall ? InstallStepFromGitHub.installFailed : InstallStepFromGitHub.uploadFailed
		}));
	};
	const handleUploaded = async (GitHubPackage) => {
		try {
			const icon = await getIconUrl(GitHubPackage.manifest.icon);
			setManifest({
				...GitHubPackage.manifest,
				icon
			});
			setUniqueIdentifier(GitHubPackage.uniqueIdentifier);
			setState((prevState) => ({
				...prevState,
				step: InstallStepFromGitHub.readyToInstall
			}));
		} catch (e) {
			handleError(e, false);
		}
	};
	const handleUploadFail = useCallback((errorMsg) => {
		setErrorMsg(errorMsg);
		setState((prevState) => ({
			...prevState,
			step: InstallStepFromGitHub.uploadFailed
		}));
	}, []);
	const handleInstalled = useCallback((notRefresh) => {
		setState((prevState) => ({
			...prevState,
			step: InstallStepFromGitHub.installed
		}));
		if (!notRefresh) refreshPluginList(manifest);
		setIsInstalling(false);
		onSuccess();
	}, [
		manifest,
		onSuccess,
		refreshPluginList,
		setIsInstalling
	]);
	const handleFailed = useCallback((errorMsg) => {
		setState((prevState) => ({
			...prevState,
			step: InstallStepFromGitHub.installFailed
		}));
		setIsInstalling(false);
		if (errorMsg) setErrorMsg(errorMsg);
	}, [setIsInstalling]);
	const handleBack = () => {
		setState((prevState) => {
			switch (prevState.step) {
				case InstallStepFromGitHub.selectPackage: return {
					...prevState,
					step: InstallStepFromGitHub.setUrl
				};
				case InstallStepFromGitHub.readyToInstall: return {
					...prevState,
					step: InstallStepFromGitHub.selectPackage
				};
				default: return prevState;
			}
		});
	};
	return /* @__PURE__ */ jsxs(Modal, {
		isShow: true,
		onClose: foldAnimInto,
		className: cn(modalClassName, `shadows-shadow-xl flex min-w-[560px] flex-col items-start rounded-2xl border-[0.5px]
        border-components-panel-border bg-components-panel-bg p-0`),
		closable: true,
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex items-start gap-2 self-stretch pb-3 pl-6 pr-14 pt-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex grow flex-col items-start gap-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "self-stretch text-text-primary title-2xl-semi-bold",
					children: getTitle()
				}), /* @__PURE__ */ jsx("div", {
					className: "self-stretch text-text-tertiary system-xs-regular",
					children: ![
						InstallStepFromGitHub.uploadFailed,
						InstallStepFromGitHub.installed,
						InstallStepFromGitHub.installFailed
					].includes(state.step) && t("installFromGitHub.installNote", { ns: "plugin" })
				})]
			})
		}), [
			InstallStepFromGitHub.uploadFailed,
			InstallStepFromGitHub.installed,
			InstallStepFromGitHub.installFailed
		].includes(state.step) ? /* @__PURE__ */ jsx(installed_default, {
			payload: manifest,
			isFailed: [InstallStepFromGitHub.uploadFailed, InstallStepFromGitHub.installFailed].includes(state.step),
			errMsg: errorMsg,
			onCancel: onClose
		}) : /* @__PURE__ */ jsxs("div", {
			className: `flex flex-col items-start justify-center self-stretch px-6 py-3 ${state.step === InstallStepFromGitHub.installed ? "gap-2" : "gap-4"}`,
			children: [
				state.step === InstallStepFromGitHub.setUrl && /* @__PURE__ */ jsx(SetURL, {
					repoUrl: state.repoUrl,
					onChange: (value) => setState((prevState) => ({
						...prevState,
						repoUrl: value
					})),
					onNext: handleUrlSubmit,
					onCancel: onClose
				}),
				state.step === InstallStepFromGitHub.selectPackage && /* @__PURE__ */ jsx(SelectPackage, {
					updatePayload,
					repoUrl: state.repoUrl,
					selectedVersion: state.selectedVersion,
					versions,
					onSelectVersion: (item) => setState((prevState) => ({
						...prevState,
						selectedVersion: item.value
					})),
					selectedPackage: state.selectedPackage,
					packages,
					onSelectPackage: (item) => setState((prevState) => ({
						...prevState,
						selectedPackage: item.value
					})),
					onUploaded: handleUploaded,
					onFailed: handleUploadFail,
					onBack: handleBack
				}),
				state.step === InstallStepFromGitHub.readyToInstall && /* @__PURE__ */ jsx(Loaded, {
					updatePayload,
					uniqueIdentifier,
					payload: manifest,
					repoUrl: state.repoUrl,
					selectedVersion: state.selectedVersion,
					selectedPackage: state.selectedPackage,
					onBack: handleBack,
					onStartToInstall: handleStartToInstall,
					onInstalled: handleInstalled,
					onFailed: handleFailed
				})
			]
		})]
	});
};
//#endregion
export { InstallFromGitHub as t };
