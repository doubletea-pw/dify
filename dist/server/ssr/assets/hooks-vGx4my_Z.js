import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { b as GITHUB_ACCESS_TOKEN } from "./config-Dopncj5R.js";
import { T as toast } from "./base-BuKAg6Le.js";
import { f as pluginManifestToCardPluginProps, n as getLatestVersion, p as card_default, t as compareVersion } from "./semver-olnXAeJC.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import { n as BadgeState, t as Badge } from "./badge-DnA7gOK5.js";
import { D as useRemoveAutoUpgrade, E as usePluginTaskList, J as uploadGitHub, K as updateFromMarketPlace, _ as useInvalidateReferenceSettings } from "./use-refresh-plugin-list-C8aKRYG-.js";
import { G as TaskStatus } from "./hooks-BTelimHS.js";
import { a as checkTaskStatus } from "./skeleton-Brd40zkS.js";
import { t as useGetIcon } from "./use-get-icon-D8ihnTYG.js";
import { n as DialogCloseButton, o as DialogTitle, r as DialogContent, t as Dialog } from "./dialog-CKL1xdm0.js";
import * as React$1 from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/plugins/update-plugin/downgrade-warning.tsx
var i18nPrefix$1 = "autoUpdate.pluginDowngradeWarning";
var DowngradeWarningModal = ({ onCancel, onJustDowngrade, onExcludeAndDowngrade }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-start gap-2 self-stretch",
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-text-primary title-2xl-semi-bold",
			children: t(`${i18nPrefix$1}.title`, { ns: "plugin" })
		}), /* @__PURE__ */ jsx("div", {
			className: "text-text-secondary system-md-regular",
			children: t(`${i18nPrefix$1}.description`, { ns: "plugin" })
		})]
	}), /* @__PURE__ */ jsxs("div", {
		className: "mt-9 flex items-start justify-end space-x-2 self-stretch",
		children: [
			/* @__PURE__ */ jsx(Button, {
				variant: "secondary",
				onClick: () => onCancel(),
				children: t("newApp.Cancel", { ns: "app" })
			}),
			/* @__PURE__ */ jsx(Button, {
				variant: "secondary",
				destructive: true,
				onClick: onJustDowngrade,
				children: t(`${i18nPrefix$1}.downgrade`, { ns: "plugin" })
			}),
			/* @__PURE__ */ jsx(Button, {
				variant: "primary",
				onClick: onExcludeAndDowngrade,
				children: t(`${i18nPrefix$1}.exclude`, { ns: "plugin" })
			})
		]
	})] });
};
//#endregion
//#region app/components/plugins/update-plugin/from-market-place.tsx
var i18nPrefix = "upgrade";
var UploadStep = /* @__PURE__ */ function(UploadStep) {
	UploadStep["notStarted"] = "notStarted";
	UploadStep["upgrading"] = "upgrading";
	UploadStep["installed"] = "installed";
	return UploadStep;
}(UploadStep || {});
var UpdatePluginModal = ({ payload, pluginId, onSave, onCancel, isShowDowngradeWarningModal }) => {
	const { originalPackageInfo, targetPackageInfo } = payload;
	const { t } = useTranslation();
	const { getIconUrl } = useGetIcon();
	const [icon, setIcon] = useState(originalPackageInfo.payload.icon);
	useEffect(() => {
		(async () => {
			setIcon(await getIconUrl(originalPackageInfo.payload.icon));
		})();
	}, [originalPackageInfo, getIconUrl]);
	const { check, stop } = checkTaskStatus();
	const handleCancel = () => {
		stop();
		onCancel();
	};
	const [uploadStep, setUploadStep] = useState(UploadStep.notStarted);
	const { handleRefetch } = usePluginTaskList(payload.category);
	const configBtnText = useMemo(() => {
		return {
			[UploadStep.notStarted]: t(`${i18nPrefix}.upgrade`, { ns: "plugin" }),
			[UploadStep.upgrading]: t(`${i18nPrefix}.upgrading`, { ns: "plugin" }),
			[UploadStep.installed]: t(`${i18nPrefix}.close`, { ns: "plugin" })
		}[uploadStep];
	}, [t, uploadStep]);
	const handleConfirm = useCallback(async () => {
		if (uploadStep === UploadStep.notStarted) {
			setUploadStep(UploadStep.upgrading);
			try {
				const response = await updateFromMarketPlace({
					original_plugin_unique_identifier: originalPackageInfo.id,
					new_plugin_unique_identifier: targetPackageInfo.id
				});
				if (response.task?.status === TaskStatus.failed) {
					const failedPlugin = response.task.plugins?.find((plugin) => plugin.plugin_unique_identifier === targetPackageInfo.id) ?? response.task.plugins?.[0];
					Toast.notify({
						type: "error",
						message: failedPlugin?.message || t("error", { ns: "common" })
					});
					setUploadStep(UploadStep.notStarted);
					return;
				}
				const { all_installed: isInstalled, task_id: taskId } = response;
				if (isInstalled) {
					onSave();
					return;
				}
				handleRefetch();
				const { status, error } = await check({
					taskId,
					pluginUniqueIdentifier: targetPackageInfo.id
				});
				if (status === TaskStatus.failed) {
					Toast.notify({
						type: "error",
						message: error
					});
					setUploadStep(UploadStep.notStarted);
					return;
				}
				onSave();
			} catch (e) {
				setUploadStep(UploadStep.notStarted);
			}
			return;
		}
		if (uploadStep === UploadStep.installed) onSave();
	}, [
		onSave,
		uploadStep,
		check,
		originalPackageInfo.id,
		handleRefetch,
		t,
		targetPackageInfo.id
	]);
	const { mutateAsync } = useRemoveAutoUpgrade();
	const invalidateReferenceSettings = useInvalidateReferenceSettings();
	const handleExcludeAndDownload = async () => {
		if (pluginId) await mutateAsync({ plugin_id: pluginId });
		invalidateReferenceSettings();
		handleConfirm();
	};
	const doShowDowngradeWarningModal = isShowDowngradeWarningModal && uploadStep === UploadStep.notStarted;
	return /* @__PURE__ */ jsx(Dialog, {
		open: true,
		onOpenChange: () => onCancel(),
		children: /* @__PURE__ */ jsxs(DialogContent, {
			backdropProps: { forceRender: true },
			className: cn("min-w-[560px]", doShowDowngradeWarningModal && "min-w-[640px]"),
			children: [
				/* @__PURE__ */ jsx(DialogCloseButton, {}),
				doShowDowngradeWarningModal && /* @__PURE__ */ jsx(DowngradeWarningModal, {
					onCancel,
					onJustDowngrade: handleConfirm,
					onExcludeAndDowngrade: handleExcludeAndDownload
				}),
				!doShowDowngradeWarningModal && /* @__PURE__ */ jsxs(Fragment$1, { children: [
					/* @__PURE__ */ jsx(DialogTitle, {
						className: "text-text-primary title-2xl-semi-bold",
						children: t(`${i18nPrefix}.${uploadStep === UploadStep.installed ? "successfulTitle" : "title"}`, { ns: "plugin" })
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mb-2 mt-3 text-text-secondary system-md-regular",
						children: t(`${i18nPrefix}.description`, { ns: "plugin" })
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap content-start items-start gap-1 self-stretch rounded-2xl bg-background-section-burn p-2",
						children: /* @__PURE__ */ jsx(card_default, {
							installed: uploadStep === UploadStep.installed,
							payload: pluginManifestToCardPluginProps({
								...originalPackageInfo.payload,
								icon
							}),
							className: "w-full",
							titleLeft: /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(Badge, {
								className: "mx-1",
								size: "s",
								state: BadgeState.Warning,
								children: `${originalPackageInfo.payload.version} -> ${targetPackageInfo.version}`
							}) })
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-end gap-2 self-stretch pt-5",
						children: [uploadStep === UploadStep.notStarted && /* @__PURE__ */ jsx(Button, {
							onClick: handleCancel,
							children: t("operation.cancel", { ns: "common" })
						}), /* @__PURE__ */ jsx(Button, {
							variant: "primary",
							loading: uploadStep === UploadStep.upgrading,
							onClick: handleConfirm,
							disabled: uploadStep === UploadStep.upgrading,
							children: configBtnText
						})]
					})
				] })
			]
		})
	});
};
var from_market_place_default = React$1.memo(UpdatePluginModal);
//#endregion
//#region app/components/plugins/install-plugin/hooks.ts
var formatReleases = (releases) => {
	return releases.map((release) => ({
		tag_name: release.tag_name,
		assets: release.assets.map((asset) => ({
			browser_download_url: asset.browser_download_url,
			name: asset.name
		}))
	}));
};
var useGitHubReleases = () => {
	const fetchReleases = async (owner, repo) => {
		try {
			if (!GITHUB_ACCESS_TOKEN) {
				const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases`);
				if (!res.ok) throw new Error("Failed to fetch repository releases");
				return formatReleases(await res.json());
			} else {
				const bodyJson = await (await fetch(`/repos/${owner}/${repo}/releases`)).json();
				if (bodyJson.status !== 200) throw new Error(bodyJson.data.message);
				return formatReleases(bodyJson.data);
			}
		} catch (error) {
			if (error instanceof Error) toast.error(error.message);
			else toast.error("Failed to fetch repository releases");
			return [];
		}
	};
	const checkForUpdates = (fetchedReleases, currentVersion) => {
		let needUpdate = false;
		const toastProps = {
			type: "info",
			message: "No new version available"
		};
		if (fetchedReleases.length === 0) {
			toastProps.type = "error";
			toastProps.message = "Input releases is empty";
			return {
				needUpdate,
				toastProps
			};
		}
		const latestVersion = getLatestVersion(fetchedReleases.map((release) => release.tag_name));
		try {
			needUpdate = compareVersion(latestVersion, currentVersion) === 1;
			if (needUpdate) toastProps.message = `New version available: ${latestVersion}`;
		} catch {
			needUpdate = false;
			toastProps.type = "error";
			toastProps.message = "Fail to compare versions, please check the version format";
		}
		return {
			needUpdate,
			toastProps
		};
	};
	return {
		fetchReleases,
		checkForUpdates
	};
};
var useGitHubUpload = () => {
	const handleUpload = async (repoUrl, selectedVersion, selectedPackage, onSuccess) => {
		try {
			const response = await uploadGitHub(repoUrl, selectedVersion, selectedPackage);
			const GitHubPackage = {
				manifest: response.manifest,
				unique_identifier: response.unique_identifier
			};
			if (onSuccess) onSuccess(GitHubPackage);
			return GitHubPackage;
		} catch (error) {
			toast.error("Error uploading package");
			throw error;
		}
	};
	return { handleUpload };
};
//#endregion
export { useGitHubUpload as n, from_market_place_default as r, useGitHubReleases as t };
