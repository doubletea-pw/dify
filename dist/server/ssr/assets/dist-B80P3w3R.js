import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { i as Period, n as options_default, r as header_default } from "./date-picker-C_53XOz9.js";
import { c as getHourIn12Hour, i as dayjs_default, l as isDayjsObject, o as getDateWithTimezone, r as convertTimezoneToOffsetStr, u as toDayjs } from "./dayjs-7JTRFpGV.js";
import * as React$1 from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/timezone-label/index.tsx
/**
* TimezoneLabel component displays timezone information in UTC offset format.
*
* @example
* // Standard display
* <TimezoneLabel timezone="Asia/Shanghai" />
* // Output: UTC+8
*
* @example
* // Inline mode with lighter color
* <TimezoneLabel timezone="America/New_York" inline />
* // Output: UTC-5
*
* @example
* // Custom styling
* <TimezoneLabel timezone="Europe/London" className="text-xs font-bold" />
*/
var TimezoneLabel = ({ timezone, className, inline = false }) => {
	const offsetStr = useMemo(() => convertTimezoneToOffsetStr(timezone), [timezone]);
	return /* @__PURE__ */ jsx("span", {
		className: cn("text-text-tertiary system-sm-regular", inline && "text-text-quaternary", className),
		title: `Timezone: ${timezone} (${offsetStr})`,
		"data-testid": "timezone-label",
		children: offsetStr
	});
};
var timezone_label_default = React$1.memo(TimezoneLabel);
//#endregion
//#region app/components/base/date-and-time-picker/time-picker/footer.tsx
var Footer = ({ handleSelectCurrentTime, handleConfirm }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between border-t-[0.5px] border-divider-regular p-2",
		children: [/* @__PURE__ */ jsx(Button, {
			variant: "secondary-accent",
			size: "small",
			className: "mr-1 flex-1",
			onClick: handleSelectCurrentTime,
			children: t("operation.now", { ns: "time" })
		}), /* @__PURE__ */ jsx(Button, {
			variant: "primary",
			size: "small",
			className: "ml-1 flex-1",
			onClick: handleConfirm.bind(null),
			children: t("operation.ok", { ns: "time" })
		})]
	});
};
var footer_default = React$1.memo(Footer);
//#endregion
//#region app/components/base/date-and-time-picker/time-picker/index.tsx
var to24Hour = (hour12, period) => {
	const normalized = Number.parseInt(hour12, 10) % 12;
	return period === Period.PM ? normalized + 12 : normalized;
};
var TimePicker = ({ value, timezone, placeholder, onChange, onClear, renderTrigger, title, minuteFilter, popupClassName, notClearable = false, triggerFullWidth = false, showTimezone = false, placement = "bottom-start" }) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef(null);
	const isInitial = useRef(true);
	const [selectedTime, setSelectedTime] = useState(() => {
		return toDayjs(value, { timezone });
	});
	useEffect(() => {
		const handleClickOutside = (event) => {
			/* v8 ignore next 2 -- outside-click closing is handled by PortalToFollowElem; this local ref guard is a defensive fallback. */
			if (containerRef.current && !containerRef.current.contains(event.target)) setIsOpen(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	const prevValueRef = useRef(value);
	const prevTimezoneRef = useRef(timezone);
	useEffect(() => {
		if (isInitial.current) {
			isInitial.current = false;
			prevValueRef.current = value;
			prevTimezoneRef.current = timezone;
			return;
		}
		const valueChanged = prevValueRef.current !== value;
		const timezoneChanged = prevTimezoneRef.current !== timezone;
		prevValueRef.current = value;
		prevTimezoneRef.current = timezone;
		if (!timezoneChanged && !valueChanged) return;
		if (value !== void 0 && value !== null) {
			const dayjsValue = toDayjs(value, { timezone });
			if (!dayjsValue) return;
			setSelectedTime(dayjsValue);
			if (timezoneChanged && !valueChanged) onChange(dayjsValue);
			return;
		}
		setSelectedTime((prev) => {
			if (!isDayjsObject(prev)) return void 0;
			return timezone ? getDateWithTimezone({
				date: prev,
				timezone
			}) : prev;
		});
	}, [
		timezone,
		value,
		onChange
	]);
	const handleClickTrigger = (e) => {
		e.stopPropagation();
		if (isOpen) {
			setIsOpen(false);
			return;
		}
		setIsOpen(true);
		if (value) {
			const dayjsValue = toDayjs(value, { timezone });
			if (dayjsValue && (!selectedTime || !isDayjsObject(selectedTime) || !dayjsValue.isSame(selectedTime, "minute"))) setSelectedTime(dayjsValue);
		}
	};
	const handleClear = (e) => {
		e.stopPropagation();
		setSelectedTime(void 0);
		if (!isOpen) onClear();
	};
	const handleTimeSelect = (hour, minute, period) => {
		const periodAdjustedHour = to24Hour(hour, period);
		const nextMinute = Number.parseInt(minute, 10);
		setSelectedTime((prev) => {
			return (isDayjsObject(prev) ? prev : (timezone ? getDateWithTimezone({ timezone }) : dayjs_default()).startOf("minute")).set("hour", periodAdjustedHour).set("minute", nextMinute).set("second", 0).set("millisecond", 0);
		});
	};
	const getSafeTimeObject = useCallback(() => {
		if (isDayjsObject(selectedTime)) return selectedTime;
		return (timezone ? getDateWithTimezone({ timezone }) : dayjs_default()).startOf("day");
	}, [selectedTime, timezone]);
	const handleSelectHour = useCallback((hour) => {
		const time = getSafeTimeObject();
		handleTimeSelect(hour, time.minute().toString().padStart(2, "0"), time.format("A"));
	}, [getSafeTimeObject]);
	const handleSelectMinute = useCallback((minute) => {
		const time = getSafeTimeObject();
		handleTimeSelect(getHourIn12Hour(time).toString().padStart(2, "0"), minute, time.format("A"));
	}, [getSafeTimeObject]);
	const handleSelectPeriod = useCallback((period) => {
		const time = getSafeTimeObject();
		handleTimeSelect(getHourIn12Hour(time).toString().padStart(2, "0"), time.minute().toString().padStart(2, "0"), period);
	}, [getSafeTimeObject]);
	const handleSelectCurrentTime = useCallback(() => {
		const newDate = getDateWithTimezone({ timezone });
		setSelectedTime(newDate);
		onChange(newDate);
		setIsOpen(false);
	}, [timezone, onChange]);
	const handleConfirm = useCallback(() => {
		onChange(isDayjsObject(selectedTime) ? selectedTime : void 0);
		setIsOpen(false);
	}, [selectedTime, onChange]);
	const timeFormat = "hh:mm A";
	const displayValue = useCallback((timeValue) => {
		if (!timeValue) return "";
		return toDayjs(timeValue, { timezone })?.format(timeFormat) || "";
	}, [timezone])(value);
	const placeholderDate = isOpen && isDayjsObject(selectedTime) ? selectedTime.format(timeFormat) : placeholder || t("defaultPlaceholder", { ns: "time" });
	const inputElem = /* @__PURE__ */ jsx("input", {
		className: "flex-1 cursor-pointer select-none appearance-none truncate bg-transparent p-1 text-components-input-text-filled\n            outline-none system-xs-regular placeholder:text-components-input-text-placeholder",
		readOnly: true,
		value: isOpen ? "" : displayValue,
		placeholder: placeholderDate
	});
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open: isOpen,
		onOpenChange: setIsOpen,
		placement,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			className: triggerFullWidth ? "!block w-full" : void 0,
			children: renderTrigger ? renderTrigger({
				inputElem,
				onClick: handleClickTrigger,
				isOpen
			}) : /* @__PURE__ */ jsxs("div", {
				className: cn("group flex cursor-pointer items-center gap-x-0.5 rounded-lg bg-components-input-bg-normal px-2 py-1 hover:bg-state-base-hover-alt", triggerFullWidth ? "w-full min-w-0" : "w-[252px]"),
				onClick: handleClickTrigger,
				"data-testid": "time-picker-trigger",
				children: [
					inputElem,
					showTimezone && timezone && /* @__PURE__ */ jsx(timezone_label_default, {
						timezone,
						inline: true,
						className: "shrink-0 select-none text-xs"
					}),
					/* @__PURE__ */ jsx("span", { className: cn("i-ri-time-line h-4 w-4 shrink-0 text-text-quaternary", isOpen ? "text-text-secondary" : "group-hover:text-text-secondary", (displayValue || isOpen && selectedTime) && !notClearable && "group-hover:hidden") }),
					/* @__PURE__ */ jsx("span", {
						className: cn("i-ri-close-circle-fill hidden h-4 w-4 shrink-0 text-text-quaternary", (displayValue || isOpen && selectedTime) && !notClearable && "hover:text-text-secondary group-hover:inline-block"),
						role: "button",
						"aria-label": t("operation.clear", { ns: "common" }),
						onClick: handleClear
					})
				]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: cn("z-50", popupClassName),
			children: /* @__PURE__ */ jsxs("div", {
				className: "mt-1 w-[252px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-lg shadow-shadow-shadow-5",
				children: [
					/* @__PURE__ */ jsx(header_default, { title }),
					/* @__PURE__ */ jsx(options_default, {
						selectedTime,
						minuteFilter,
						handleSelectHour,
						handleSelectMinute,
						handleSelectPeriod
					}),
					/* @__PURE__ */ jsx(footer_default, {
						handleSelectCurrentTime,
						handleConfirm
					})
				]
			})
		})]
	});
};
//#endregion
export { TimePicker as t };
