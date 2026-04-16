import { ar as gB, in as V2, rr as f1 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { c as getHourIn12Hour, i as dayjs_default, n as cloneTime, o as getDateWithTimezone, s as getDaysInMonth, t as clearMonthMapCache } from "./dayjs-7JTRFpGV.js";
import * as React$1 from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/date-and-time-picker/types.ts
var ViewType = /* @__PURE__ */ function(ViewType) {
	ViewType["date"] = "date";
	ViewType["yearMonth"] = "yearMonth";
	ViewType["time"] = "time";
	return ViewType;
}({});
var Period = /* @__PURE__ */ function(Period) {
	Period["AM"] = "AM";
	Period["PM"] = "PM";
	return Period;
}({});
//#endregion
//#region app/components/base/date-and-time-picker/hooks.ts
var YEAR_RANGE = 100;
var daysInWeek = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
var useDaysOfWeek = () => {
	const { t } = useTranslation();
	return daysInWeek.map((day) => t(`daysInWeek.${day}`, { ns: "time" }));
};
var monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
var useMonths = () => {
	const { t } = useTranslation();
	return monthNames.map((month) => t(`months.${month}`, { ns: "time" }));
};
var useYearOptions = () => {
	return Array.from({ length: 200 }, (_, i) => dayjs_default().year() - YEAR_RANGE / 2 + i);
};
var useTimeOptions = () => {
	return {
		hourOptions: Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")),
		minuteOptions: Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0")),
		periodOptions: [Period.AM, Period.PM]
	};
};
//#endregion
//#region app/components/base/date-and-time-picker/calendar/days-of-week.tsx
var DaysOfWeek = () => {
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-7 gap-x-0.5 border-b-[0.5px] border-divider-regular p-2",
		children: useDaysOfWeek().map((day) => /* @__PURE__ */ jsx("div", {
			className: "system-2xs-medium flex items-center justify-center text-text-tertiary",
			children: day
		}, day))
	});
};
React$1.memo(DaysOfWeek);
//#endregion
//#region app/components/base/date-and-time-picker/calendar/item.tsx
var Item = ({ day, selectedDate, onClick, isDisabled }) => {
	const { date, isCurrentMonth } = day;
	const isSelected = selectedDate?.isSame(date, "date");
	const isToday = date.isSame(dayjs_default(), "date");
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		onClick: () => !isDisabled && onClick(date),
		className: cn("system-sm-medium relative flex items-center justify-center rounded-lg px-1 py-2", isCurrentMonth ? "text-text-secondary" : "text-text-quaternary hover:text-text-secondary", isSelected ? "system-sm-medium bg-components-button-primary-bg text-components-button-primary-text" : "hover:bg-state-base-hover", isDisabled && "cursor-not-allowed text-text-quaternary hover:bg-transparent"),
		children: [date.date(), isToday && /* @__PURE__ */ jsx("div", { className: "absolute bottom-1 mx-auto h-1 w-1 rounded-full bg-components-button-primary-bg" })]
	});
};
var item_default = React$1.memo(Item);
//#endregion
//#region app/components/base/date-and-time-picker/calendar/index.tsx
var Calendar = ({ days, selectedDate, onDateClick, wrapperClassName, getIsDateDisabled }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: wrapperClassName,
		children: [/* @__PURE__ */ jsx(DaysOfWeek, {}), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-7 gap-0.5 p-2",
			children: days.map((day) => /* @__PURE__ */ jsx(item_default, {
				day,
				selectedDate,
				onClick: onDateClick,
				isDisabled: getIsDateDisabled ? getIsDateDisabled(day.date) : false
			}, day.date.format("YYYY-MM-DD")))
		})]
	});
};
//#endregion
//#region app/components/base/date-and-time-picker/time-picker/header.tsx
var Header$2 = ({ title }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("div", {
		className: "flex flex-col border-b-[0.5px] border-divider-regular",
		children: /* @__PURE__ */ jsx("div", {
			className: "system-md-semibold flex items-center px-2 py-1.5 text-text-primary",
			children: title || t("title.pickTime", { ns: "time" })
		})
	});
};
var header_default$2 = React$1.memo(Header$2);
//#endregion
//#region app/components/base/date-and-time-picker/common/option-list-item.tsx
var OptionListItem = ({ isSelected, onClick, noAutoScroll, children }) => {
	const listItemRef = useRef(null);
	useEffect(() => {
		if (isSelected && !noAutoScroll) listItemRef.current?.scrollIntoView({ behavior: "instant" });
	}, []);
	return /* @__PURE__ */ jsx("li", {
		ref: listItemRef,
		className: cn("system-xs-medium flex cursor-pointer items-center justify-center rounded-md px-1.5 py-1 text-components-button-ghost-text", isSelected ? "bg-components-button-ghost-bg-hover" : "hover:bg-components-button-ghost-bg-hover"),
		onClick: () => {
			listItemRef.current?.scrollIntoView({ behavior: "smooth" });
			onClick();
		},
		children
	});
};
var option_list_item_default = React$1.memo(OptionListItem);
//#endregion
//#region app/components/base/date-and-time-picker/time-picker/options.tsx
var Options$1 = ({ selectedTime, minuteFilter, handleSelectHour, handleSelectMinute, handleSelectPeriod }) => {
	const { hourOptions, minuteOptions, periodOptions } = useTimeOptions();
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-3 gap-x-1 p-2",
		children: [
			/* @__PURE__ */ jsx("ul", {
				className: "no-scrollbar flex h-[208px] flex-col gap-y-0.5 overflow-y-auto pb-[184px]",
				children: hourOptions.map((hour) => {
					return /* @__PURE__ */ jsx(option_list_item_default, {
						isSelected: selectedTime?.format("hh") === hour,
						onClick: handleSelectHour.bind(null, hour),
						children: hour
					}, hour);
				})
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "no-scrollbar flex h-[208px] flex-col gap-y-0.5 overflow-y-auto pb-[184px]",
				children: (minuteFilter ? minuteFilter(minuteOptions) : minuteOptions).map((minute) => {
					return /* @__PURE__ */ jsx(option_list_item_default, {
						isSelected: selectedTime?.format("mm") === minute,
						onClick: handleSelectMinute.bind(null, minute),
						children: minute
					}, minute);
				})
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "no-scrollbar flex h-[208px] flex-col gap-y-0.5 overflow-y-auto pb-[184px]",
				children: periodOptions.map((period) => {
					return /* @__PURE__ */ jsx(option_list_item_default, {
						isSelected: selectedTime?.format("A") === period,
						onClick: handleSelectPeriod.bind(null, period),
						noAutoScroll: true,
						children: period
					}, period);
				})
			})
		]
	});
};
var options_default$1 = React$1.memo(Options$1);
//#endregion
//#region app/components/base/date-and-time-picker/year-and-month-picker/footer.tsx
var Footer$1 = ({ handleYearMonthCancel, handleYearMonthConfirm }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-2 gap-x-1 p-2",
		children: [/* @__PURE__ */ jsx(Button, {
			size: "small",
			onClick: handleYearMonthCancel,
			children: t("operation.cancel", { ns: "time" })
		}), /* @__PURE__ */ jsx(Button, {
			variant: "primary",
			size: "small",
			onClick: handleYearMonthConfirm,
			children: t("operation.ok", { ns: "time" })
		})]
	});
};
var footer_default$1 = React$1.memo(Footer$1);
//#endregion
//#region app/components/base/date-and-time-picker/year-and-month-picker/header.tsx
var Header$1 = ({ selectedYear, selectedMonth, onClick }) => {
	return /* @__PURE__ */ jsx("div", {
		className: "flex border-b-[0.5px] border-divider-regular p-2 pb-1",
		children: /* @__PURE__ */ jsxs("button", {
			type: "button",
			onClick,
			className: "system-md-semibold flex items-center gap-x-0.5 rounded-lg px-2 py-1.5 text-text-primary hover:bg-state-base-hover",
			children: [/* @__PURE__ */ jsx("span", { children: `${useMonths()[selectedMonth]} ${selectedYear}` }), /* @__PURE__ */ jsx(V2, { className: "h-4 w-4 text-text-tertiary" })]
		})
	});
};
var header_default$1 = React$1.memo(Header$1);
//#endregion
//#region app/components/base/date-and-time-picker/year-and-month-picker/options.tsx
var Options = ({ selectedMonth, selectedYear, handleMonthSelect, handleYearSelect }) => {
	const months = useMonths();
	const yearOptions = useYearOptions();
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-2 gap-x-1 p-2",
		children: [/* @__PURE__ */ jsx("ul", {
			className: "no-scrollbar flex h-[208px] flex-col gap-y-0.5 overflow-y-auto pb-[184px]",
			children: months.map((month, index) => {
				return /* @__PURE__ */ jsx(option_list_item_default, {
					isSelected: selectedMonth === index,
					onClick: handleMonthSelect.bind(null, index),
					children: month
				}, month);
			})
		}), /* @__PURE__ */ jsx("ul", {
			className: "no-scrollbar flex h-[208px] flex-col gap-y-0.5 overflow-y-auto pb-[184px]",
			children: yearOptions.map((year) => {
				return /* @__PURE__ */ jsx(option_list_item_default, {
					isSelected: selectedYear === year,
					onClick: handleYearSelect.bind(null, year),
					children: year
				}, year);
			})
		})]
	});
};
var options_default = React$1.memo(Options);
//#endregion
//#region app/components/base/date-and-time-picker/date-picker/footer.tsx
var Footer = ({ needTimePicker, displayTime, view, handleClickTimePicker, handleSelectCurrentDate, handleConfirmDate }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center justify-between border-t-[0.5px] border-divider-regular p-2", !needTimePicker && "justify-end"),
		children: [needTimePicker && /* @__PURE__ */ jsxs("button", {
			type: "button",
			className: "system-xs-medium flex items-center gap-x-[1px] rounded-md border-[0.5px] border-components-button-secondary-border bg-components-button-secondary-bg px-1.5\n                      py-1 text-components-button-secondary-accent-text shadow-xs shadow-shadow-shadow-3 backdrop-blur-[5px]",
			onClick: handleClickTimePicker,
			children: [
				/* @__PURE__ */ jsx(gB, { className: "h-3.5 w-3.5" }),
				view === ViewType.date && /* @__PURE__ */ jsx("span", { children: displayTime }),
				view === ViewType.time && /* @__PURE__ */ jsx("span", { children: t("operation.pickDate", { ns: "time" }) })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-x-1",
			children: [/* @__PURE__ */ jsx("button", {
				type: "button",
				className: "system-xs-medium flex items-center justify-center px-1.5 py-1 text-components-button-secondary-accent-text",
				onClick: handleSelectCurrentDate,
				children: /* @__PURE__ */ jsx("span", {
					className: "px-[3px]",
					children: t("operation.now", { ns: "time" })
				})
			}), /* @__PURE__ */ jsx(Button, {
				variant: "primary",
				size: "small",
				className: "w-16 px-1.5 py-1",
				onClick: handleConfirmDate,
				children: t("operation.ok", { ns: "time" })
			})]
		})]
	});
};
var footer_default = React$1.memo(Footer);
//#endregion
//#region app/components/base/date-and-time-picker/date-picker/header.tsx
var Header = ({ handleOpenYearMonthPicker, currentDate, onClickNextMonth, onClickPrevMonth }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-2 mt-2 flex items-center",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex-1",
				children: /* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: handleOpenYearMonthPicker,
					className: "system-md-semibold flex items-center gap-x-0.5 rounded-lg px-2 py-1.5 text-text-primary hover:bg-state-base-hover",
					children: [/* @__PURE__ */ jsx("span", { children: `${useMonths()[currentDate.month()]} ${currentDate.year()}` }), /* @__PURE__ */ jsx(f1, { className: "h-4 w-4 text-text-tertiary" })]
				})
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onClickPrevMonth,
				className: "rounded-lg p-1.5 hover:bg-state-base-hover",
				children: /* @__PURE__ */ jsx(V2, { className: "h-[18px] w-[18px] text-text-secondary" })
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onClickNextMonth,
				className: "rounded-lg p-1.5 hover:bg-state-base-hover",
				children: /* @__PURE__ */ jsx(f1, { className: "h-[18px] w-[18px] text-text-secondary" })
			})
		]
	});
};
var header_default = React$1.memo(Header);
//#endregion
//#region app/components/base/date-and-time-picker/date-picker/index.tsx
var DatePicker = ({ value, timezone, onChange, onClear, placeholder, needTimePicker = true, renderTrigger, triggerWrapClassName, popupZIndexClassname = "z-[11]", noConfirm, getIsDateDisabled }) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [view, setView] = useState(ViewType.date);
	const containerRef = useRef(null);
	const isInitial = useRef(true);
	const normalizedValue = useMemo(() => {
		if (!value) return void 0;
		return dayjs_default.isDayjs(value) ? value.tz(timezone) : dayjs_default(value).tz(timezone);
	}, [value, timezone]);
	const inputValue = useRef(normalizedValue).current;
	const defaultValue = useRef(getDateWithTimezone({ timezone })).current;
	const [currentDate, setCurrentDate] = useState(inputValue || defaultValue);
	const [selectedDate, setSelectedDate] = useState(inputValue);
	const [selectedMonth, setSelectedMonth] = useState(() => (inputValue || defaultValue).month());
	const [selectedYear, setSelectedYear] = useState(() => (inputValue || defaultValue).year());
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (containerRef.current && !containerRef.current.contains(event.target)) {
				setIsOpen(false);
				setView(ViewType.date);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	useEffect(() => {
		if (isInitial.current) {
			isInitial.current = false;
			return;
		}
		clearMonthMapCache();
		if (normalizedValue) {
			const newValue = getDateWithTimezone({
				date: normalizedValue,
				timezone
			});
			setCurrentDate(newValue);
			setSelectedDate(newValue);
			onChange(newValue);
		} else {
			setCurrentDate((prev) => getDateWithTimezone({
				date: prev,
				timezone
			}));
			setSelectedDate((prev) => prev ? getDateWithTimezone({
				date: prev,
				timezone
			}) : void 0);
		}
	}, [timezone]);
	const handleClickTrigger = (e) => {
		e.stopPropagation();
		if (isOpen) {
			setIsOpen(false);
			return;
		}
		setView(ViewType.date);
		setIsOpen(true);
		if (normalizedValue) {
			setCurrentDate(normalizedValue);
			setSelectedDate(normalizedValue);
		}
	};
	const handleClear = (e) => {
		e.stopPropagation();
		setSelectedDate(void 0);
		if (!isOpen) onClear();
	};
	const days = useMemo(() => {
		return getDaysInMonth(currentDate);
	}, [currentDate]);
	const handleClickNextMonth = useCallback(() => {
		setCurrentDate(currentDate.clone().add(1, "month"));
	}, [currentDate]);
	const handleClickPrevMonth = useCallback(() => {
		setCurrentDate(currentDate.clone().subtract(1, "month"));
	}, [currentDate]);
	const handleConfirmDate = useCallback((passedInSelectedDate) => {
		const nextDate = dayjs_default.isDayjs(passedInSelectedDate) ? passedInSelectedDate : selectedDate;
		onChange(nextDate ? nextDate.tz(timezone) : void 0);
		setIsOpen(false);
	}, [
		selectedDate,
		onChange,
		timezone
	]);
	const handleDateSelect = useCallback((day) => {
		const newDate = cloneTime(day, selectedDate || getDateWithTimezone({ timezone }));
		setCurrentDate(newDate);
		setSelectedDate(newDate);
		if (noConfirm) handleConfirmDate(newDate);
	}, [
		selectedDate,
		timezone,
		noConfirm,
		handleConfirmDate
	]);
	const handleSelectCurrentDate = () => {
		const newDate = getDateWithTimezone({ timezone });
		setCurrentDate(newDate);
		setSelectedDate(newDate);
		onChange(newDate);
		setIsOpen(false);
	};
	const handleClickTimePicker = () => {
		if (view === ViewType.date) {
			setView(ViewType.time);
			return;
		}
		if (view === ViewType.time) setView(ViewType.date);
	};
	const handleTimeSelect = (hour, minute, period) => {
		const newTime = cloneTime(dayjs_default(), dayjs_default(`1/1/2000 ${hour}:${minute} ${period}`));
		setSelectedDate((prev) => {
			return prev ? cloneTime(prev, newTime) : newTime;
		});
	};
	const handleSelectHour = useCallback((hour) => {
		const selectedTime = selectedDate || getDateWithTimezone({ timezone });
		handleTimeSelect(hour, selectedTime.minute().toString().padStart(2, "0"), selectedTime.format("A"));
	}, [selectedDate, timezone]);
	const handleSelectMinute = useCallback((minute) => {
		const selectedTime = selectedDate || getDateWithTimezone({ timezone });
		handleTimeSelect(getHourIn12Hour(selectedTime).toString().padStart(2, "0"), minute, selectedTime.format("A"));
	}, [selectedDate, timezone]);
	const handleSelectPeriod = useCallback((period) => {
		const selectedTime = selectedDate || getDateWithTimezone({ timezone });
		handleTimeSelect(getHourIn12Hour(selectedTime).toString().padStart(2, "0"), selectedTime.minute().toString().padStart(2, "0"), period);
	}, [selectedDate, timezone]);
	const handleOpenYearMonthPicker = () => {
		setSelectedMonth(currentDate.month());
		setSelectedYear(currentDate.year());
		setView(ViewType.yearMonth);
	};
	const handleCloseYearMonthPicker = useCallback(() => {
		setView(ViewType.date);
	}, []);
	const handleMonthSelect = useCallback((month) => {
		setSelectedMonth(month);
	}, []);
	const handleYearSelect = useCallback((year) => {
		setSelectedYear(year);
	}, []);
	const handleYearMonthCancel = useCallback(() => {
		setView(ViewType.date);
	}, []);
	const handleYearMonthConfirm = () => {
		setCurrentDate((prev) => prev.clone().month(selectedMonth).year(selectedYear));
		setView(ViewType.date);
	};
	const timeFormat = needTimePicker ? t("dateFormats.displayWithTime", { ns: "time" }) : t("dateFormats.display", { ns: "time" });
	const displayValue = normalizedValue?.format(timeFormat) || "";
	const displayTime = selectedDate?.format("hh:mm A") || "--:-- --";
	const placeholderDate = isOpen && selectedDate ? selectedDate.format(timeFormat) : placeholder || t("defaultPlaceholder", { ns: "time" });
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open: isOpen,
		onOpenChange: setIsOpen,
		placement: "bottom-end",
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			className: triggerWrapClassName,
			children: renderTrigger ? renderTrigger({
				value: normalizedValue,
				selectedDate,
				isOpen,
				handleClear,
				handleClickTrigger
			}) : /* @__PURE__ */ jsxs("div", {
				className: "group flex w-[252px] cursor-pointer items-center gap-x-0.5 rounded-lg bg-components-input-bg-normal px-2 py-1 hover:bg-state-base-hover-alt",
				onClick: handleClickTrigger,
				"data-testid": "date-picker-trigger",
				children: [
					/* @__PURE__ */ jsx("input", {
						className: "flex-1 cursor-pointer appearance-none truncate bg-transparent p-1 text-components-input-text-filled\n            outline-none system-xs-regular placeholder:text-components-input-text-placeholder",
						readOnly: true,
						value: isOpen ? "" : displayValue,
						placeholder: placeholderDate
					}),
					/* @__PURE__ */ jsx("span", { className: cn("i-ri-calendar-line h-4 w-4 shrink-0 text-text-quaternary", isOpen ? "text-text-secondary" : "group-hover:text-text-secondary", (displayValue || isOpen && selectedDate) && "group-hover:hidden") }),
					/* @__PURE__ */ jsx("span", {
						className: cn("i-ri-close-circle-fill hidden h-4 w-4 shrink-0 text-text-quaternary", (displayValue || isOpen && selectedDate) && "hover:text-text-secondary group-hover:inline-block"),
						onClick: handleClear,
						"data-testid": "date-picker-clear-button"
					})
				]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: popupZIndexClassname,
			children: /* @__PURE__ */ jsxs("div", {
				className: "mt-1 w-[252px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-lg shadow-shadow-shadow-5",
				children: [
					view === ViewType.date ? /* @__PURE__ */ jsx(header_default, {
						handleOpenYearMonthPicker,
						currentDate,
						onClickNextMonth: handleClickNextMonth,
						onClickPrevMonth: handleClickPrevMonth
					}) : view === ViewType.yearMonth ? /* @__PURE__ */ jsx(header_default$1, {
						selectedYear,
						selectedMonth,
						onClick: handleCloseYearMonthPicker
					}) : /* @__PURE__ */ jsx(header_default$2, {}),
					view === ViewType.date ? /* @__PURE__ */ jsx(Calendar, {
						days,
						selectedDate,
						onDateClick: handleDateSelect,
						getIsDateDisabled
					}) : view === ViewType.yearMonth ? /* @__PURE__ */ jsx(options_default, {
						selectedMonth,
						selectedYear,
						handleMonthSelect,
						handleYearSelect
					}) : /* @__PURE__ */ jsx(options_default$1, {
						selectedTime: selectedDate,
						handleSelectHour,
						handleSelectMinute,
						handleSelectPeriod
					}),
					[ViewType.date, ViewType.time].includes(view) && !noConfirm && /* @__PURE__ */ jsx(footer_default, {
						needTimePicker,
						displayTime,
						view,
						handleClickTimePicker,
						handleSelectCurrentDate,
						handleConfirmDate
					}),
					![ViewType.date, ViewType.time].includes(view) && /* @__PURE__ */ jsx(footer_default$1, {
						handleYearMonthCancel,
						handleYearMonthConfirm
					})
				]
			})
		})]
	});
};
//#endregion
export { Period as i, options_default$1 as n, header_default$2 as r, DatePicker as t };
