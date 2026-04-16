//#region app/components/billing/type.ts
var Plan = /* @__PURE__ */ function(Plan) {
	Plan["sandbox"] = "sandbox";
	Plan["professional"] = "professional";
	Plan["team"] = "team";
	Plan["enterprise"] = "enterprise";
	return Plan;
}({});
var Priority = /* @__PURE__ */ function(Priority) {
	Priority["standard"] = "standard";
	Priority["priority"] = "priority";
	Priority["topPriority"] = "top-priority";
	return Priority;
}({});
var SelfHostedPlan = /* @__PURE__ */ function(SelfHostedPlan) {
	SelfHostedPlan["community"] = "community";
	SelfHostedPlan["premium"] = "premium";
	SelfHostedPlan["enterprise"] = "enterprise";
	return SelfHostedPlan;
}({});
var DocumentProcessingPriority = /* @__PURE__ */ function(DocumentProcessingPriority) {
	DocumentProcessingPriority["standard"] = "standard";
	DocumentProcessingPriority["priority"] = "priority";
	DocumentProcessingPriority["topPriority"] = "top-priority";
	return DocumentProcessingPriority;
}({});
//#endregion
//#region app/components/billing/config.ts
var supportModelProviders = "OpenAI/Anthropic/Llama2/Azure OpenAI/Hugging Face/Replicate";
var contactSalesUrl = "https://vikgc6bnu1s.typeform.com/dify-business";
var getStartedWithCommunityUrl = "https://github.com/langgenius/dify";
var getWithPremiumUrl = "https://aws.amazon.com/marketplace/pp/prodview-t22mebxzwjhu6";
var ALL_PLANS = {
	sandbox: {
		level: 1,
		price: 0,
		modelProviders: supportModelProviders,
		teamWorkspace: 1,
		teamMembers: 1,
		buildApps: 5,
		documents: 50,
		vectorSpace: "50MB",
		documentsUploadQuota: 0,
		documentsRequestQuota: 10,
		apiRateLimit: 5e3,
		documentProcessingPriority: Priority.standard,
		messageRequest: 200,
		triggerEvents: 3e3,
		annotatedResponse: 10,
		logHistory: 30
	},
	professional: {
		level: 2,
		price: 59,
		modelProviders: supportModelProviders,
		teamWorkspace: 1,
		teamMembers: 3,
		buildApps: 50,
		documents: 500,
		vectorSpace: "5GB",
		documentsUploadQuota: 0,
		documentsRequestQuota: 100,
		apiRateLimit: -1,
		documentProcessingPriority: Priority.priority,
		messageRequest: 5e3,
		triggerEvents: 2e4,
		annotatedResponse: 2e3,
		logHistory: -1
	},
	team: {
		level: 3,
		price: 159,
		modelProviders: supportModelProviders,
		teamWorkspace: 1,
		teamMembers: 50,
		buildApps: 200,
		documents: 1e3,
		vectorSpace: "20GB",
		documentsUploadQuota: 0,
		documentsRequestQuota: 1e3,
		apiRateLimit: -1,
		documentProcessingPriority: Priority.topPriority,
		messageRequest: 1e4,
		triggerEvents: -1,
		annotatedResponse: 5e3,
		logHistory: -1
	}
};
var defaultPlan = {
	type: Plan.sandbox,
	usage: {
		documents: 50,
		vectorSpace: 1,
		buildApps: 1,
		teamMembers: 1,
		annotatedResponse: 1,
		documentsUploadQuota: 0,
		apiRateLimit: 0,
		triggerEvents: 0
	},
	total: {
		documents: 50,
		vectorSpace: 10,
		buildApps: 10,
		teamMembers: 1,
		annotatedResponse: 10,
		documentsUploadQuota: 0,
		apiRateLimit: ALL_PLANS.sandbox.apiRateLimit,
		triggerEvents: ALL_PLANS.sandbox.triggerEvents
	},
	reset: {
		apiRateLimit: null,
		triggerEvents: null
	}
};
//#endregion
export { getWithPremiumUrl as a, SelfHostedPlan as c, getStartedWithCommunityUrl as i, contactSalesUrl as n, DocumentProcessingPriority as o, defaultPlan as r, Plan as s, ALL_PLANS as t };
