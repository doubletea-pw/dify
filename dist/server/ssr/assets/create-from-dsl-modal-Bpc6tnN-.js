import { m as __exportAll, s as useRouter } from "../index.js";
import { xt as P7 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as useKeyPress } from "./useKeyPress-DtHtlpBY.js";
import { n as useContext$1 } from "./dist-mUzjAi-W.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { N as NEED_REFRESH_APP_LIST_KEY } from "./config-Dopncj5R.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { i as useAppContext } from "./app-context-BiSzFQEV.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as Input } from "./input-BOHL-qYi.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { r as ToastContext } from "./toast-BY3OifkP.js";
import { h as importDSLConfirm, m as importDSL } from "./apps-b6zqLiv3.js";
import { t as useDebounceFn } from "./useDebounceFn-Y4NS6c4S.js";
import { n as useProviderContext } from "./provider-context-CToT0pwd.js";
import { t as getRedirection } from "./app-redirection-Boof5aoB.js";
import { t as shortcuts_name_default } from "./shortcuts-name-TpjITleC.js";
import { i as trackEvent } from "./amplitude-BnPDazhN.js";
import { n as DSLImportStatus, r as usePluginDependencies, t as DSLImportMode } from "./app-Cb2vpoXO.js";
import { t as uploader_default } from "./uploader-D0ghxGaM.js";
import { t as apps_full_in_dialog_default } from "./apps-full-in-dialog-DzT9xUzV.js";
import { useEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/app/create-from-dsl-modal/index.tsx
var create_from_dsl_modal_exports = /* @__PURE__ */ __exportAll({
	CreateFromDSLModalTab: () => CreateFromDSLModalTab,
	default: () => CreateFromDSLModal
});
var CreateFromDSLModalTab = /* @__PURE__ */ function(CreateFromDSLModalTab) {
	CreateFromDSLModalTab["FROM_FILE"] = "from-file";
	CreateFromDSLModalTab["FROM_URL"] = "from-url";
	return CreateFromDSLModalTab;
}({});
var CreateFromDSLModal = ({ show, onSuccess, onClose, activeTab = CreateFromDSLModalTab.FROM_FILE, dslUrl = "", droppedFile }) => {
	const { push } = useRouter();
	const { t } = useTranslation();
	const { notify } = useContext$1(ToastContext);
	const [currentFile, setDSLFile] = useState(droppedFile);
	const [fileContent, setFileContent] = useState();
	const [currentTab, setCurrentTab] = useState(activeTab);
	const [dslUrlValue, setDslUrlValue] = useState(dslUrl);
	const [showErrorModal, setShowErrorModal] = useState(false);
	const [versions, setVersions] = useState();
	const [importId, setImportId] = useState();
	const { handleCheckPluginDependencies } = usePluginDependencies();
	const readFile = (file) => {
		const reader = new FileReader();
		reader.onload = function(event) {
			const content = event.target?.result;
			setFileContent(content);
		};
		reader.readAsText(file);
	};
	const handleFile = (file) => {
		setDSLFile(file);
		if (file) readFile(file);
		if (!file) setFileContent("");
	};
	const { isCurrentWorkspaceEditor } = useAppContext();
	const { plan, enableBilling } = useProviderContext();
	const isAppsFull = enableBilling && plan.usage.buildApps >= plan.total.buildApps;
	const isCreatingRef = useRef(false);
	useEffect(() => {
		if (droppedFile) handleFile(droppedFile);
	}, [droppedFile]);
	const onCreate = async (_e) => {
		if (currentTab === CreateFromDSLModalTab.FROM_FILE && !currentFile) return;
		if (currentTab === CreateFromDSLModalTab.FROM_URL && !dslUrlValue) return;
		if (isCreatingRef.current) return;
		isCreatingRef.current = true;
		try {
			let response;
			if (currentTab === CreateFromDSLModalTab.FROM_FILE) response = await importDSL({
				mode: DSLImportMode.YAML_CONTENT,
				yaml_content: fileContent || ""
			});
			if (currentTab === CreateFromDSLModalTab.FROM_URL) response = await importDSL({
				mode: DSLImportMode.YAML_URL,
				yaml_url: dslUrlValue || ""
			});
			if (!response) return;
			const { id, status, app_id, app_mode, imported_dsl_version, current_dsl_version } = response;
			if (status === DSLImportStatus.COMPLETED || status === DSLImportStatus.COMPLETED_WITH_WARNINGS) {
				trackEvent("create_app_with_dsl", {
					app_mode,
					creation_method: currentTab === CreateFromDSLModalTab.FROM_FILE ? "dsl_file" : "dsl_url",
					has_warnings: status === DSLImportStatus.COMPLETED_WITH_WARNINGS
				});
				if (onSuccess) onSuccess();
				if (onClose) onClose();
				notify({
					type: status === DSLImportStatus.COMPLETED ? "success" : "warning",
					message: t(status === DSLImportStatus.COMPLETED ? "newApp.appCreated" : "newApp.caution", { ns: "app" }),
					children: status === DSLImportStatus.COMPLETED_WITH_WARNINGS && t("newApp.appCreateDSLWarning", { ns: "app" })
				});
				localStorage.setItem(NEED_REFRESH_APP_LIST_KEY, "1");
				if (app_id) await handleCheckPluginDependencies(app_id);
				getRedirection(isCurrentWorkspaceEditor, {
					id: app_id,
					mode: app_mode
				}, push);
			} else if (status === DSLImportStatus.PENDING) {
				setVersions({
					importedVersion: imported_dsl_version ?? "",
					systemVersion: current_dsl_version ?? ""
				});
				setTimeout(() => {
					setShowErrorModal(true);
				}, 300);
				setImportId(id);
			} else notify({
				type: "error",
				message: t("newApp.appCreateFailed", { ns: "app" })
			});
		} catch (e) {
			notify({
				type: "error",
				message: t("newApp.appCreateFailed", { ns: "app" })
			});
		}
		isCreatingRef.current = false;
	};
	const { run: handleCreateApp } = useDebounceFn(onCreate, { wait: 300 });
	useKeyPress(["meta.enter", "ctrl.enter"], () => {
		if (show && !isAppsFull && (currentTab === CreateFromDSLModalTab.FROM_FILE && currentFile || currentTab === CreateFromDSLModalTab.FROM_URL && dslUrlValue)) handleCreateApp(void 0);
	});
	useKeyPress("esc", () => {
		if (show && !showErrorModal) onClose();
	});
	const onDSLConfirm = async () => {
		try {
			if (!importId) return;
			const { status, app_id, app_mode } = await importDSLConfirm({ import_id: importId });
			if (status === DSLImportStatus.COMPLETED) {
				if (onSuccess) onSuccess();
				if (onClose) onClose();
				notify({
					type: "success",
					message: t("newApp.appCreated", { ns: "app" })
				});
				if (app_id) await handleCheckPluginDependencies(app_id);
				localStorage.setItem(NEED_REFRESH_APP_LIST_KEY, "1");
				getRedirection(isCurrentWorkspaceEditor, {
					id: app_id,
					mode: app_mode
				}, push);
			} else if (status === DSLImportStatus.FAILED) notify({
				type: "error",
				message: t("newApp.appCreateFailed", { ns: "app" })
			});
		} catch (e) {
			notify({
				type: "error",
				message: t("newApp.appCreateFailed", { ns: "app" })
			});
		}
	};
	const tabs = [{
		key: CreateFromDSLModalTab.FROM_FILE,
		label: t("importFromDSLFile", { ns: "app" })
	}, {
		key: CreateFromDSLModalTab.FROM_URL,
		label: t("importFromDSLUrl", { ns: "app" })
	}];
	const buttonDisabled = useMemo(() => {
		if (isAppsFull) return true;
		if (currentTab === CreateFromDSLModalTab.FROM_FILE) return !currentFile;
		if (currentTab === CreateFromDSLModalTab.FROM_URL) return !dslUrlValue;
		return false;
	}, [
		isAppsFull,
		currentTab,
		currentFile,
		dslUrlValue
	]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(Modal, {
		className: "w-[520px] rounded-2xl border-[0.5px] border-components-panel-border bg-components-panel-bg p-0 shadow-xl",
		isShow: show,
		onClose: noop,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between pb-3 pl-6 pr-5 pt-6 text-text-primary title-2xl-semi-bold",
				children: [t("importFromDSL", { ns: "app" }), /* @__PURE__ */ jsx("div", {
					className: "flex h-8 w-8 cursor-pointer items-center",
					onClick: () => onClose(),
					children: /* @__PURE__ */ jsx(P7, { className: "h-5 w-5 text-text-tertiary" })
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex h-9 items-center space-x-6 border-b border-divider-subtle px-6 text-text-tertiary system-md-semibold",
				children: tabs.map((tab) => /* @__PURE__ */ jsxs("div", {
					className: cn("relative flex h-full cursor-pointer items-center", currentTab === tab.key && "text-text-primary"),
					onClick: () => setCurrentTab(tab.key),
					children: [tab.label, currentTab === tab.key && /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 h-[2px] w-full bg-util-colors-blue-brand-blue-brand-600" })]
				}, tab.key))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [currentTab === CreateFromDSLModalTab.FROM_FILE && /* @__PURE__ */ jsx(uploader_default, {
					className: "mt-0",
					file: currentFile,
					updateFile: handleFile
				}), currentTab === CreateFromDSLModalTab.FROM_URL && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "mb-1 text-text-secondary system-md-semibold",
					children: "DSL URL"
				}), /* @__PURE__ */ jsx(Input, {
					placeholder: t("importFromDSLUrlPlaceholder", { ns: "app" }) || "",
					value: dslUrlValue,
					onChange: (e) => setDslUrlValue(e.target.value)
				})] })]
			}),
			isAppsFull && /* @__PURE__ */ jsx("div", {
				className: "px-6",
				children: /* @__PURE__ */ jsx(apps_full_in_dialog_default, {
					className: "mt-0",
					loc: "app-create-dsl"
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex justify-end px-6 py-5",
				children: [/* @__PURE__ */ jsx(Button, {
					className: "mr-2",
					onClick: onClose,
					children: t("newApp.Cancel", { ns: "app" })
				}), /* @__PURE__ */ jsxs(Button, {
					disabled: buttonDisabled,
					variant: "primary",
					onClick: handleCreateApp,
					className: "gap-1",
					children: [/* @__PURE__ */ jsx("span", { children: t("newApp.Create", { ns: "app" }) }), /* @__PURE__ */ jsx(shortcuts_name_default, {
						keys: ["ctrl", "↵"],
						bgColor: "white"
					})]
				})]
			})
		]
	}), /* @__PURE__ */ jsxs(Modal, {
		isShow: showErrorModal,
		onClose: () => setShowErrorModal(false),
		className: "w-[480px]",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-start gap-2 self-stretch pb-4",
			children: [/* @__PURE__ */ jsx("div", {
				className: "text-text-primary title-2xl-semi-bold",
				children: t("newApp.appCreateDSLErrorTitle", { ns: "app" })
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex grow flex-col text-text-secondary system-md-regular",
				children: [
					/* @__PURE__ */ jsx("div", { children: t("newApp.appCreateDSLErrorPart1", { ns: "app" }) }),
					/* @__PURE__ */ jsx("div", { children: t("newApp.appCreateDSLErrorPart2", { ns: "app" }) }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsxs("div", { children: [t("newApp.appCreateDSLErrorPart3", { ns: "app" }), /* @__PURE__ */ jsx("span", {
						className: "system-md-medium",
						children: versions?.importedVersion
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [t("newApp.appCreateDSLErrorPart4", { ns: "app" }), /* @__PURE__ */ jsx("span", {
						className: "system-md-medium",
						children: versions?.systemVersion
					})] })
				]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-start justify-end gap-2 self-stretch pt-6",
			children: [/* @__PURE__ */ jsx(Button, {
				variant: "secondary",
				onClick: () => setShowErrorModal(false),
				children: t("newApp.Cancel", { ns: "app" })
			}), /* @__PURE__ */ jsx(Button, {
				variant: "primary",
				destructive: true,
				onClick: onDSLConfirm,
				children: t("newApp.Confirm", { ns: "app" })
			})]
		})]
	})] });
};
//#endregion
export { create_from_dsl_modal_exports as n, CreateFromDSLModalTab as t };
