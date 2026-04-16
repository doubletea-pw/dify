import { n as useContext, r as useContextSelector, t as createContext } from "./dist-mUzjAi-W.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { r as defaultPlan } from "./config-DUQ_rYOW.js";
var ProviderContext = createContext({
	modelProviders: [],
	refreshModelProviders: noop,
	textGenerationModelList: [],
	supportRetrievalMethods: [],
	isAPIKeySet: true,
	plan: defaultPlan,
	isFetchedPlan: false,
	enableBilling: false,
	onPlanInfoChanged: noop,
	enableReplaceWebAppLogo: false,
	modelLoadBalancingEnabled: false,
	datasetOperatorEnabled: false,
	enableEducationPlan: false,
	isEducationWorkspace: false,
	isEducationAccount: false,
	allowRefreshEducationVerify: false,
	educationAccountExpireAt: null,
	isLoadingEducationAccountInfo: false,
	isFetchingEducationAccountInfo: false,
	webappCopyrightEnabled: false,
	licenseLimit: { workspace_members: {
		size: 0,
		limit: 0
	} },
	refreshLicenseLimit: noop,
	isAllowTransferWorkspace: false,
	isAllowPublishAsCustomKnowledgePipelineTemplate: false,
	humanInputEmailDeliveryEnabled: false
});
var useProviderContext = () => useContext(ProviderContext);
var useProviderContextSelector = (selector) => useContextSelector(ProviderContext, selector);
//#endregion
export { useProviderContext as n, useProviderContextSelector as r, ProviderContext as t };
