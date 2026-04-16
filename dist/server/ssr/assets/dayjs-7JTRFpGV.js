import { v as __toESM } from "../index.js";
import { t as require_dayjs_min } from "./dayjs.min-CNlMkMP6.js";
import { n as require_timezone, t as require_utc } from "./utc-CCXXQ2Pp.js";
import { t as timezone_default } from "./timezone-BcESyynj.js";
//#region app/components/base/date-and-time-picker/utils/dayjs.ts
var import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min(), 1);
var import_timezone = /* @__PURE__ */ __toESM(require_timezone(), 1);
var import_utc = /* @__PURE__ */ __toESM(require_utc(), 1);
import_dayjs_min.default.extend(import_utc.default);
import_dayjs_min.default.extend(import_timezone.default);
var dayjs_default = import_dayjs_min.default;
var monthMaps = {};
var DEFAULT_OFFSET_STR = "UTC+0";
var TIME_ONLY_REGEX = /^(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?$/;
var TIME_ONLY_12H_REGEX = /^(\d{1,2}):(\d{2})(?::(\d{2}))?\s?(AM|PM)$/i;
var COMMON_PARSE_FORMATS = [
	"YYYY-MM-DD",
	"YYYY/MM/DD",
	"DD-MM-YYYY",
	"DD/MM/YYYY",
	"MM-DD-YYYY",
	"MM/DD/YYYY",
	"YYYY-MM-DDTHH:mm:ss.SSSZ",
	"YYYY-MM-DDTHH:mm:ssZ",
	"YYYY-MM-DD HH:mm:ss",
	"YYYY-MM-DDTHH:mm",
	"YYYY-MM-DDTHH:mmZ",
	"YYYY-MM-DDTHH:mm:ss",
	"YYYY-MM-DDTHH:mm:ss.SSS"
];
var cloneTime = (targetDate, sourceDate) => {
	return targetDate.clone().set("hour", sourceDate.hour()).set("minute", sourceDate.minute());
};
var getDaysInMonth = (currentDate) => {
	const key = currentDate.format("YYYY-MM");
	if (monthMaps[key]) return monthMaps[key];
	const daysInCurrentMonth = currentDate.daysInMonth();
	const firstDay = currentDate.startOf("month").day();
	const lastDay = currentDate.endOf("month").day();
	const lastDayInLastMonth = currentDate.clone().subtract(1, "month").endOf("month");
	const firstDayInNextMonth = currentDate.clone().add(1, "month").startOf("month");
	const days = [];
	const daysInOneWeek = 7;
	const totalLines = 6;
	for (let i = firstDay - 1; i >= 0; i--) {
		const date = cloneTime(lastDayInLastMonth.subtract(i, "day"), currentDate);
		days.push({
			date,
			isCurrentMonth: false
		});
	}
	for (let i = 1; i <= daysInCurrentMonth; i++) {
		const date = cloneTime(currentDate.startOf("month").add(i - 1, "day"), currentDate);
		days.push({
			date,
			isCurrentMonth: true
		});
	}
	const needAdditionalLine = Math.ceil((daysInCurrentMonth - (daysInOneWeek - firstDay + lastDay + 1)) / 7) + 2 < totalLines;
	for (let i = 0; lastDay + i < (needAdditionalLine ? 2 * daysInOneWeek - 1 : daysInOneWeek - 1); i++) {
		const date = cloneTime(firstDayInNextMonth.add(i, "day"), currentDate);
		days.push({
			date,
			isCurrentMonth: false
		});
	}
	monthMaps[key] = days;
	return days;
};
var clearMonthMapCache = () => {
	for (const key in monthMaps) delete monthMaps[key];
};
var getHourIn12Hour = (date) => {
	const hour = date.hour();
	return hour === 0 ? 12 : hour >= 12 ? hour - 12 : hour;
};
var getDateWithTimezone = ({ date, timezone }) => {
	if (!timezone) return (date ?? (0, import_dayjs_min.default)()).clone();
	return date ? import_dayjs_min.default.tz(date, timezone) : (0, import_dayjs_min.default)().tz(timezone);
};
var convertTimezoneToOffsetStr = (timezone) => {
	if (!timezone) return DEFAULT_OFFSET_STR;
	const tzItem = timezone_default.find((item) => item.value === timezone);
	if (!tzItem) return DEFAULT_OFFSET_STR;
	const offsetMatch = /^([+-]?\d{1,2}):(\d{2})/.exec(tzItem.name);
	/* v8 ignore next 2 -- timezone.json entries are normalized to "{offset} {name}"; this protects against malformed data only. */
	if (!offsetMatch) return DEFAULT_OFFSET_STR;
	const hours = Number.parseInt(offsetMatch[1], 10);
	const minutes = Number.parseInt(offsetMatch[2], 10);
	const sign = hours >= 0 ? "+" : "";
	return minutes !== 0 ? `UTC${sign}${hours}:${offsetMatch[2]}` : `UTC${sign}${hours}`;
};
var isDayjsObject = (value) => import_dayjs_min.default.isDayjs(value);
var warnParseFailure = (value) => {};
var normalizeMillisecond = (value) => {
	if (!value) return 0;
	if (value.length === 3) return Number(value);
	/* v8 ignore next 2 -- TIME_ONLY_REGEX allows at most 3 fractional digits, so >3 can only occur after future regex changes. */
	if (value.length > 3) return Number(value.slice(0, 3));
	return Number(value.padEnd(3, "0"));
};
var applyTimezone = (date, timezone) => {
	return timezone ? getDateWithTimezone({
		date,
		timezone
	}) : date;
};
var toDayjs = (value, options = {}) => {
	if (!value) return void 0;
	const { timezone: tzName, format, formats } = options;
	if (isDayjsObject(value)) return applyTimezone(value, tzName);
	if (typeof value !== "string") return void 0;
	const trimmed = value.trim();
	if (format) {
		const parsedWithFormat = tzName ? (0, import_dayjs_min.default)(trimmed, format, true).tz(tzName, true) : (0, import_dayjs_min.default)(trimmed, format, true);
		if (parsedWithFormat.isValid()) return parsedWithFormat;
	}
	const timeMatch = TIME_ONLY_REGEX.exec(trimmed);
	if (timeMatch) {
		const base = applyTimezone((0, import_dayjs_min.default)(), tzName).startOf("day");
		const rawHour = Number(timeMatch[1]);
		const minute = Number(timeMatch[2]);
		const second = timeMatch[3] ? Number(timeMatch[3]) : 0;
		const millisecond = normalizeMillisecond(timeMatch[4]);
		return base.set("hour", rawHour).set("minute", minute).set("second", second).set("millisecond", millisecond);
	}
	const timeMatch12h = TIME_ONLY_12H_REGEX.exec(trimmed);
	if (timeMatch12h) {
		const base = applyTimezone((0, import_dayjs_min.default)(), tzName).startOf("day");
		let hour = Number(timeMatch12h[1]) % 12;
		if (timeMatch12h[4]?.toUpperCase() === "PM") hour += 12;
		const minute = Number(timeMatch12h[2]);
		const second = timeMatch12h[3] ? Number(timeMatch12h[3]) : 0;
		return base.set("hour", hour).set("minute", minute).set("second", second).set("millisecond", 0);
	}
	const candidateFormats = formats ?? COMMON_PARSE_FORMATS;
	for (const fmt of candidateFormats) {
		const parsed = tzName ? (0, import_dayjs_min.default)(trimmed, fmt, true).tz(tzName, true) : (0, import_dayjs_min.default)(trimmed, fmt, true);
		if (parsed.isValid()) return parsed;
	}
	const fallbackParsed = tzName ? import_dayjs_min.default.tz(trimmed, tzName) : (0, import_dayjs_min.default)(trimmed);
	if (fallbackParsed.isValid()) return fallbackParsed;
	warnParseFailure(value);
};
var formatDateForOutput = (date, includeTime = false, _locale = "en-US") => {
	if (!date || !date.isValid()) return "";
	if (includeTime) return date.format("YYYY-MM-DDTHH:mm:ss.SSSZ");
	else return date.format("YYYY-MM-DD");
};
//#endregion
export { formatDateForOutput as a, getHourIn12Hour as c, dayjs_default as i, isDayjsObject as l, cloneTime as n, getDateWithTimezone as o, convertTimezoneToOffsetStr as r, getDaysInMonth as s, clearMonthMapCache as t, toDayjs as u };
