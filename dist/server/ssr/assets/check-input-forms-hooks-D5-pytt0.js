import { f as __commonJSMin, v as __toESM } from "../index.js";
import { t as Trans } from "./Trans-UjBkHktY.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as Divider } from "./divider-DZD56ykp.js";
import { Nt as InputVarType, Ot as BlockEnum } from "./config-Dopncj5R.js";
import { zr as block_icon_default } from "./hooks-Bj_4KA1b.js";
import { a as useSelector } from "./app-context-BiSzFQEV.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as require_dayjs_min } from "./dayjs.min-CNlMkMP6.js";
import { t as require_utc } from "./utc-CCXXQ2Pp.js";
import { i as useToastContext } from "./toast-BY3OifkP.js";
import { u as TransferMethod } from "./app-DPjSIfgb.js";
import { a as useLocale } from "./i18n-lDm19WzR.js";
import { t as Textarea } from "./textarea-Ngtow1st.js";
import { b as require_nl, c as require_zh_cn, y as require_ja } from "./format-BCVnrx09.js";
import { l as Markdown } from "./code-editor-BPvpmrXg.js";
import { t as require_relativeTime } from "./relativeTime-BAkB0A3u.js";
import * as React$1 from "react";
import { memo, useCallback, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/chat/chat/answer/human-input-content/content-item.tsx
var ContentItem = ({ content, formInputFields, inputs, onInputChange }) => {
	const isInputField = (field) => {
		return /\{\{#\$output\.[^#]+#\}\}/.test(field);
	};
	const extractFieldName = (str) => {
		const match = /\{\{#\$output\.([^#]+)#\}\}/.exec(str);
		return match ? match[1] : "";
	};
	const fieldName = useMemo(() => {
		return extractFieldName(content);
	}, [content]);
	const formInputField = useMemo(() => {
		return formInputFields.find((field) => field.output_variable_name === fieldName);
	}, [formInputFields, fieldName]);
	if (!isInputField(content)) return /* @__PURE__ */ jsx(Markdown, { content });
	if (!formInputField) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "py-3",
		children: formInputField.type === "paragraph" && /* @__PURE__ */ jsx(Textarea, {
			className: "h-[104px] sm:text-xs",
			value: inputs[fieldName],
			onChange: (e) => {
				onInputChange(fieldName, e.target.value);
			},
			"data-testid": "content-item-textarea"
		})
	});
};
var content_item_default = React$1.memo(ContentItem);
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/plugin/isSameOrAfter.js
var require_isSameOrAfter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, t) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrAfter = t();
	})(exports, (function() {
		"use strict";
		return function(e, t) {
			t.prototype.isSameOrAfter = function(e, t) {
				return this.isSame(e, t) || this.isAfter(e, t);
			};
		};
	}));
}));
//#endregion
//#region app/components/workflow/nodes/human-input/types.ts
var DeliveryMethodType = /* @__PURE__ */ function(DeliveryMethodType) {
	DeliveryMethodType["WebApp"] = "webapp";
	DeliveryMethodType["Email"] = "email";
	DeliveryMethodType["Slack"] = "slack";
	DeliveryMethodType["Teams"] = "teams";
	DeliveryMethodType["Discord"] = "discord";
	return DeliveryMethodType;
}({});
var UserActionButtonType = /* @__PURE__ */ function(UserActionButtonType) {
	UserActionButtonType["Primary"] = "primary";
	UserActionButtonType["Default"] = "default";
	UserActionButtonType["Accent"] = "accent";
	UserActionButtonType["Ghost"] = "ghost";
	return UserActionButtonType;
}({});
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/en.js
var require_en = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, n) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_en = n();
	})(exports, (function() {
		"use strict";
		return {
			name: "en",
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			ordinal: function(e) {
				var n = [
					"th",
					"st",
					"nd",
					"rd"
				], t = e % 100;
				return "[" + e + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
			}
		};
	}));
}));
//#endregion
//#region app/components/base/chat/chat/answer/human-input-content/utils.ts
var import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min(), 1);
var import_isSameOrAfter = /* @__PURE__ */ __toESM(require_isSameOrAfter(), 1);
var import_relativeTime = /* @__PURE__ */ __toESM(require_relativeTime(), 1);
var import_utc = /* @__PURE__ */ __toESM(require_utc(), 1);
require_en();
require_zh_cn();
require_ja();
require_nl();
import_dayjs_min.default.extend(import_utc.default);
import_dayjs_min.default.extend(import_relativeTime.default);
import_dayjs_min.default.extend(import_isSameOrAfter.default);
var getButtonStyle = (style) => {
	if (style === UserActionButtonType.Primary) return "primary";
	if (style === UserActionButtonType.Default) return "secondary";
	if (style === UserActionButtonType.Accent) return "secondary-accent";
	if (style === UserActionButtonType.Ghost) return "ghost";
};
var splitByOutputVar = (content) => {
	return content.split(/(\{\{#\$output\.[^#]+#\}\})/g).filter((part) => part.length > 0);
};
var initializeInputs = (formInputs, defaultValues = {}) => {
	const initialInputs = {};
	formInputs.forEach((item) => {
		if (item.type === "text-input" || item.type === "paragraph") initialInputs[item.output_variable_name] = item.default.type === "variable" ? defaultValues[item.output_variable_name] || "" : item.default.value;
		else initialInputs[item.output_variable_name] = void 0;
	});
	return initialInputs;
};
var localeMap = {
	"en-US": "en",
	"zh-Hans": "zh-cn",
	"ja-JP": "ja",
	"nl-NL": "nl"
};
var getRelativeTime = (utcTimestamp, locale = "en-US") => {
	const dayjsLocale = localeMap[locale] ?? "en";
	return import_dayjs_min.default.utc(utcTimestamp).locale(dayjsLocale).fromNow();
};
var isRelativeTimeSameOrAfter = (utcTimestamp) => {
	return import_dayjs_min.default.utc(utcTimestamp).isSameOrAfter((0, import_dayjs_min.default)());
};
//#endregion
//#region app/components/base/chat/chat/answer/human-input-content/expiration-time.tsx
var ExpirationTime = ({ expirationTime }) => {
	const { t } = useTranslation();
	const relativeTime = getRelativeTime(expirationTime, useLocale());
	const isSameOrAfter = isRelativeTimeSameOrAfter(expirationTime);
	return /* @__PURE__ */ jsx("div", {
		"data-testid": "expiration-time",
		className: cn("mt-1 flex items-center gap-x-1 text-text-tertiary system-xs-regular", !isSameOrAfter && "text-text-warning"),
		children: isSameOrAfter ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", { className: "i-ri-time-line size-3.5" }), /* @__PURE__ */ jsx("span", { children: t("humanInput.expirationTimeNowOrFuture", {
			relativeTime,
			ns: "share"
		}) })] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", { className: "i-ri-alert-fill size-3.5" }), /* @__PURE__ */ jsx("span", { children: t("humanInput.expiredTip", { ns: "share" }) })] })
	});
};
//#endregion
//#region app/components/base/chat/chat/answer/human-input-content/content-wrapper.tsx
var ContentWrapper = ({ nodeTitle, children, showExpandIcon = false, className, expanded = false }) => {
	const [isExpanded, setIsExpanded] = useState(expanded);
	const handleToggleExpand = useCallback(() => {
		setIsExpanded(!isExpanded);
	}, [isExpanded]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("rounded-2xl border-[0.5px] border-components-panel-border bg-background-section p-2 shadow-md", className),
		"data-testid": "content-wrapper",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 p-2",
			children: [
				/* @__PURE__ */ jsx(block_icon_default, {
					type: BlockEnum.HumanInput,
					className: "shrink-0"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grow truncate text-text-primary system-sm-semibold-uppercase",
					title: nodeTitle,
					children: nodeTitle
				}),
				showExpandIcon && /* @__PURE__ */ jsx("div", {
					className: "shrink-0 cursor-pointer",
					onClick: handleToggleExpand,
					"data-testid": "expand-icon",
					children: isExpanded ? /* @__PURE__ */ jsx("div", { className: "i-ri-arrow-down-s-line size-4" }) : /* @__PURE__ */ jsx("div", { className: "i-ri-arrow-right-s-line size-4" })
				})
			]
		}), (!showExpandIcon || isExpanded) && /* @__PURE__ */ jsx("div", {
			className: "px-2 py-1",
			children
		})]
	});
};
//#endregion
//#region app/components/base/chat/chat/answer/human-input-content/executed-action.tsx
var ExecutedAction = ({ executedAction }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-y-1 py-1",
		"data-testid": "executed-action",
		children: [/* @__PURE__ */ jsx(Divider, { className: "mb-2 mt-1 w-[30px]" }), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-x-1 text-text-tertiary system-xs-regular",
			children: [/* @__PURE__ */ jsx("div", { className: "i-custom-vender-workflow-trigger-all size-3.5 shrink-0" }), /* @__PURE__ */ jsx(Trans, {
				i18nKey: "nodes.humanInput.userActions.triggered",
				ns: "workflow",
				components: { strong: /* @__PURE__ */ jsx("span", { className: "text-text-secondary system-xs-medium" }) },
				values: { actionName: executedAction.id }
			})]
		})]
	});
};
var executed_action_default = memo(ExecutedAction);
//#endregion
//#region app/components/base/chat/chat/answer/human-input-content/submitted-content.tsx
var SubmittedContent = ({ content }) => {
	return /* @__PURE__ */ jsx("div", {
		"data-testid": "submitted-content",
		children: /* @__PURE__ */ jsx(Markdown, { content })
	});
};
var submitted_content_default = React$1.memo(SubmittedContent);
//#endregion
//#region app/components/base/chat/chat/answer/human-input-content/submitted.tsx
var SubmittedHumanInputContent = ({ formData }) => {
	const { rendered_content, action_id, action_text } = formData;
	const executedAction = useMemo(() => {
		return {
			id: action_id,
			title: action_text
		};
	}, [action_id, action_text]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(submitted_content_default, { content: rendered_content }), /* @__PURE__ */ jsx(executed_action_default, { executedAction })] });
};
//#endregion
//#region app/components/base/chat/chat/answer/human-input-content/human-input-form.tsx
var HumanInputForm = ({ formData, onSubmit }) => {
	const formToken = formData.form_token;
	const defaultInputs = initializeInputs(formData.inputs, formData.resolved_default_values || {});
	const contentList = splitByOutputVar(formData.form_content);
	const [inputs, setInputs] = useState(defaultInputs);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const handleInputsChange = useCallback((name, value) => {
		setInputs((prev) => ({
			...prev,
			[name]: value
		}));
	}, []);
	const submit = async (formToken, actionID, inputs) => {
		setIsSubmitting(true);
		await onSubmit?.(formToken, {
			inputs,
			action: actionID
		});
		setIsSubmitting(false);
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [contentList.map((content, index) => /* @__PURE__ */ jsx(content_item_default, {
		content,
		formInputFields: formData.inputs,
		inputs,
		onInputChange: handleInputsChange
	}, index)), /* @__PURE__ */ jsx("div", {
		className: "flex flex-wrap gap-1 py-1",
		children: formData.actions.map((action) => /* @__PURE__ */ jsx(Button, {
			disabled: isSubmitting,
			variant: getButtonStyle(action.button_style),
			onClick: () => submit(formToken, action.id, inputs),
			"data-testid": "action-button",
			children: action.title
		}, action.id))
	})] });
};
var human_input_form_default = React$1.memo(HumanInputForm);
//#endregion
//#region app/components/base/chat/chat/answer/human-input-content/tips.tsx
var Tips = ({ showEmailTip, isEmailDebugMode, showDebugModeTip }) => {
	const { t } = useTranslation();
	const email = useSelector((s) => s.userProfile.email);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Divider, { className: "!my-2 w-[30px]" }), /* @__PURE__ */ jsxs("div", {
		className: "space-y-1 pt-1",
		"data-testid": "tips",
		children: [
			showEmailTip && !isEmailDebugMode && /* @__PURE__ */ jsx("div", {
				className: "text-text-secondary system-xs-regular",
				children: t("common.humanInputEmailTip", { ns: "workflow" })
			}),
			showEmailTip && isEmailDebugMode && /* @__PURE__ */ jsx("div", {
				className: "text-text-secondary system-xs-regular",
				children: /* @__PURE__ */ jsx(Trans, {
					i18nKey: "common.humanInputEmailTipInDebugMode",
					ns: "workflow",
					components: { email: /* @__PURE__ */ jsx("span", { className: "system-xs-semibold" }) },
					values: { email }
				})
			}),
			showDebugModeTip && /* @__PURE__ */ jsx("div", {
				className: "text-text-warning system-xs-medium",
				children: t("common.humanInputWebappTip", { ns: "workflow" })
			})
		]
	})] });
};
var tips_default = memo(Tips);
//#endregion
//#region app/components/base/chat/chat/answer/human-input-content/unsubmitted.tsx
var UnsubmittedHumanInputContent = ({ formData, showEmailTip = false, isEmailDebugMode = false, showDebugModeTip = false, onSubmit }) => {
	const { expiration_time } = formData;
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(human_input_form_default, {
			formData,
			onSubmit
		}),
		(showEmailTip || showDebugModeTip) && /* @__PURE__ */ jsx(tips_default, {
			showEmailTip,
			isEmailDebugMode,
			showDebugModeTip
		}),
		typeof expiration_time === "number" && /* @__PURE__ */ jsx(ExpirationTime, { expirationTime: expiration_time * 1e3 })
	] });
};
//#endregion
//#region app/components/base/chat/chat/check-input-forms-hooks.ts
var useCheckInputsForms = () => {
	const { t } = useTranslation();
	const { notify } = useToastContext();
	return { checkInputsForm: useCallback((inputs, inputsForm) => {
		let hasEmptyInput = "";
		let fileIsUploading = false;
		const requiredVars = inputsForm.filter(({ required, type }) => required && type !== InputVarType.checkbox);
		if (requiredVars?.length) requiredVars.forEach(({ variable, label, type }) => {
			if (hasEmptyInput) return;
			if (fileIsUploading) return;
			if (!inputs[variable]) hasEmptyInput = label;
			if ((type === InputVarType.singleFile || type === InputVarType.multiFiles) && inputs[variable]) {
				const files = inputs[variable];
				if (Array.isArray(files)) fileIsUploading = files.find((item) => item.transferMethod === TransferMethod.local_file && !item.uploadedId);
				else fileIsUploading = files.transferMethod === TransferMethod.local_file && !files.uploadedId;
			}
		});
		if (hasEmptyInput) {
			notify({
				type: "error",
				message: t("errorMessage.valueOfVarRequired", {
					ns: "appDebug",
					key: hasEmptyInput
				})
			});
			return false;
		}
		if (fileIsUploading) {
			notify({
				type: "info",
				message: t("errorMessage.waitForFileUpload", { ns: "appDebug" })
			});
			return;
		}
		return true;
	}, [notify, t]) };
};
//#endregion
export { ExpirationTime as a, splitByOutputVar as c, content_item_default as d, ContentWrapper as i, DeliveryMethodType as l, UnsubmittedHumanInputContent as n, getButtonStyle as o, SubmittedHumanInputContent as r, initializeInputs as s, useCheckInputsForms as t, UserActionButtonType as u };
