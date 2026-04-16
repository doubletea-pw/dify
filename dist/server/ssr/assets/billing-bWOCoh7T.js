import { r as get } from "./base-BuKAg6Le.js";
//#region service/billing.ts
var fetchCurrentPlanInfo = () => {
	return get("/features");
};
var fetchSubscriptionUrls = (plan, interval) => {
	return get(`/billing/subscription?plan=${plan}&interval=${interval}`);
};
//#endregion
export { fetchSubscriptionUrls as n, fetchCurrentPlanInfo as t };
