import { v as __toESM } from "../index.js";
import { i as useAppContext } from "./app-context-BiSzFQEV.js";
import { t as require_dayjs_min } from "./dayjs.min-CNlMkMP6.js";
import { n as require_timezone, t as require_utc } from "./utc-CCXXQ2Pp.js";
import { useCallback } from "react";
//#region hooks/use-timestamp.ts
var import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min(), 1);
var import_timezone = /* @__PURE__ */ __toESM(require_timezone(), 1);
var import_utc = /* @__PURE__ */ __toESM(require_utc(), 1);
import_dayjs_min.default.extend(import_utc.default);
import_dayjs_min.default.extend(import_timezone.default);
var useTimestamp = () => {
	const { userProfile: { timezone } } = useAppContext();
	return {
		formatTime: useCallback((value, format) => {
			return import_dayjs_min.default.unix(value).tz(timezone).format(format);
		}, [timezone]),
		formatDate: useCallback((value, format) => {
			return (0, import_dayjs_min.default)(value).tz(timezone).format(format);
		}, [timezone])
	};
};
//#endregion
export { useTimestamp as t };
