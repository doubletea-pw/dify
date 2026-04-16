import { t as create } from "./react-CHKO_ryu.js";
//#region app/components/app/store.ts
var useStore = create((set) => ({
	appDetail: void 0,
	setAppDetail: (appDetail) => set(() => ({ appDetail })),
	appSidebarExpand: "",
	setAppSidebarExpand: (appSidebarExpand) => set(() => ({ appSidebarExpand })),
	currentLogItem: void 0,
	currentLogModalActiveTab: "DETAIL",
	setCurrentLogItem: (currentLogItem) => set(() => ({ currentLogItem })),
	setCurrentLogModalActiveTab: (currentLogModalActiveTab) => set(() => ({ currentLogModalActiveTab })),
	showPromptLogModal: false,
	setShowPromptLogModal: (showPromptLogModal) => set(() => ({ showPromptLogModal })),
	showAgentLogModal: false,
	setShowAgentLogModal: (showAgentLogModal) => set(() => ({ showAgentLogModal })),
	showMessageLogModal: false,
	setShowMessageLogModal: (showMessageLogModal) => set(() => {
		if (showMessageLogModal) return { showMessageLogModal };
		else return {
			showMessageLogModal,
			currentLogModalActiveTab: "DETAIL"
		};
	}),
	showAppConfigureFeaturesModal: false,
	setShowAppConfigureFeaturesModal: (showAppConfigureFeaturesModal) => set(() => ({ showAppConfigureFeaturesModal }))
}));
//#endregion
export { useStore as t };
