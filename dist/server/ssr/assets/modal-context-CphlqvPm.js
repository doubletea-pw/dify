import { n as useContext, r as useContextSelector, t as createContext } from "./dist-mUzjAi-W.js";
import { t as noop } from "./noop--k6oqy4d.js";
//#region context/modal-context.ts
var ModalContext = createContext({
	setShowAccountSettingModal: noop,
	setShowApiBasedExtensionModal: noop,
	setShowModerationSettingModal: noop,
	setShowExternalDataToolModal: noop,
	setShowPricingModal: noop,
	setShowAnnotationFullModal: noop,
	setShowModelModal: noop,
	setShowExternalKnowledgeAPIModal: noop,
	setShowModelLoadBalancingModal: noop,
	setShowOpeningModal: noop,
	setShowUpdatePluginModal: noop,
	setShowEducationExpireNoticeModal: noop,
	setShowTriggerEventsLimitModal: noop
});
var useModalContext = () => useContext(ModalContext);
var useModalContextSelector = (selector) => useContextSelector(ModalContext, selector);
//#endregion
export { useModalContext as n, useModalContextSelector as r, ModalContext as t };
