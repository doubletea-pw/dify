import { n as useContext, t as createContext } from "./dist-mUzjAi-W.js";
//#region context/event-emitter.ts
var EventEmitterContext = createContext({ eventEmitter: null });
var useEventEmitterContextContext = () => useContext(EventEmitterContext);
//#endregion
//#region types/common.ts
var FlowType = /* @__PURE__ */ function(FlowType) {
	FlowType["appFlow"] = "appFlow";
	FlowType["ragPipeline"] = "ragPipeline";
	return FlowType;
}({});
//#endregion
//#region service/utils.ts
var flowPrefixMap = {
	[FlowType.appFlow]: "apps",
	[FlowType.ragPipeline]: "rag/pipelines"
};
var getFlowPrefix = (type) => {
	return flowPrefixMap[type] || flowPrefixMap[FlowType.appFlow];
};
//#endregion
export { useEventEmitterContextContext as i, FlowType as n, EventEmitterContext as r, getFlowPrefix as t };
