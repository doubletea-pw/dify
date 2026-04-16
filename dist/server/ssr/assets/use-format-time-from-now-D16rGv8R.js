import { v as __toESM } from "../index.js";
import { t as require_dayjs_min } from "./dayjs.min-CNlMkMP6.js";
import { a as useLocale, d as localeMap } from "./i18n-lDm19WzR.js";
import { C as require_hi, D as require_de, E as require_es, S as require_id, T as require_fa, _ as require_pl, b as require_nl, c as require_zh_cn, d as require_tr, f as require_th, g as require_pt_br, h as require_ro, l as require_vi, m as require_ru, p as require_sl, s as require_zh_tw, u as require_uk, v as require_ko, w as require_fr, x as require_it, y as require_ja } from "./format-BCVnrx09.js";
import { t as require_relativeTime } from "./relativeTime-BAkB0A3u.js";
import { useCallback } from "react";
//#region hooks/use-format-time-from-now.ts
var import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min(), 1);
var import_relativeTime = /* @__PURE__ */ __toESM(require_relativeTime(), 1);
require_de();
require_es();
require_fa();
require_fr();
require_hi();
require_id();
require_it();
require_nl();
require_ja();
require_ko();
require_pl();
require_pt_br();
require_ro();
require_ru();
require_sl();
require_th();
require_tr();
require_uk();
require_vi();
require_zh_cn();
require_zh_tw();
import_dayjs_min.default.extend(import_relativeTime.default);
var useFormatTimeFromNow = () => {
	const locale = useLocale();
	return { formatTimeFromNow: useCallback((time) => {
		const dayjsLocale = localeMap[locale] ?? "en";
		return (0, import_dayjs_min.default)(time).locale(dayjsLocale).fromNow();
	}, [locale]) };
};
//#endregion
export { useFormatTimeFromNow as t };
