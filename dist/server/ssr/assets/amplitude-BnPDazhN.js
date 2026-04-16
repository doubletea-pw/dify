import { et as isAmplitudeEnabled } from "./config-Dopncj5R.js";
import { t as dynamic } from "./dynamic-6-R69YAE.js";
import { S as Identify, a as setUserId$1, i as reset, n as identify, o as track } from "./esm-CfW7DN4f.js";
import { jsx } from "react/jsx-runtime";
//#region app/components/base/amplitude/lazy-amplitude-provider.tsx
var AmplitudeProvider = dynamic(() => import("./AmplitudeProvider-BRLStJvP.js"), { ssr: false });
var LazyAmplitudeProvider = (props) => /* @__PURE__ */ jsx(AmplitudeProvider, { ...props });
//#endregion
//#region app/components/base/amplitude/utils.ts
/**
* Track custom event
* @param eventName Event name
* @param eventProperties Event properties (optional)
*/
var trackEvent = (eventName, eventProperties) => {
	if (!isAmplitudeEnabled) return;
	track(eventName, eventProperties);
};
/**
* Set user ID
* @param userId User ID
*/
var setUserId = (userId) => {
	if (!isAmplitudeEnabled) return;
	setUserId$1(userId);
};
/**
* Set user properties
* @param properties User properties
*/
var setUserProperties = (properties) => {
	if (!isAmplitudeEnabled) return;
	const identifyEvent = new Identify();
	Object.entries(properties).forEach(([key, value]) => {
		identifyEvent.set(key, value);
	});
	identify(identifyEvent);
};
/**
* Reset user (e.g., when user logs out)
*/
var resetUser = () => {
	if (!isAmplitudeEnabled) return;
	reset();
};
//#endregion
export { LazyAmplitudeProvider as a, trackEvent as i, setUserId as n, setUserProperties as r, resetUser as t };
