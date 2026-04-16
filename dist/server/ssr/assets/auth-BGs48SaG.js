import { Fr as pv, Vt as S7 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as renderI18nObject } from "./i18n-config-jsJ9YUFd.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as Input } from "./input-BOHL-qYi.js";
import { i as useToastContext } from "./toast-BY3OifkP.js";
import { a as FormTypeEnum, i as FormItemValidateStatusEnum, n as badge_default } from "./credential-item-C22_bUSw.js";
import { t as Checkbox } from "./checkbox-DTSgkYdc.js";
import { u as useTriggerPluginDynamicOptions } from "./use-triggers-DguQxV9N.js";
import { i as useLanguage } from "./hooks-BTelimHS.js";
import { i as useStore, n as useForm, t as PureSelect } from "./pure-Dr1CeacW.js";
import { t as Radio } from "./radio-4K5OYxdz.js";
import { t as ui_default } from "./ui-hwb8ZSx9.js";
import { isValidElement, memo, useCallback, useImperativeHandle, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/search-input/index.tsx
var SearchInput = ({ placeholder, className, value, onChange, white }) => {
	const { t } = useTranslation();
	const inputRef = useRef(null);
	const [focus, setFocus] = useState(false);
	const isComposing = useRef(false);
	const [compositionValue, setCompositionValue] = useState("");
	return /* @__PURE__ */ jsxs("div", {
		className: cn("group flex h-8 items-center overflow-hidden rounded-lg border-none bg-components-input-bg-normal px-2 hover:bg-components-input-bg-hover", focus && "!bg-components-input-bg-active", white && "!border-gray-300 !bg-white shadow-xs hover:!border-gray-300 hover:!bg-white", className),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none mr-1.5 flex h-4 w-4 shrink-0 items-center justify-center",
				children: /* @__PURE__ */ jsx(pv, {
					className: "h-4 w-4 text-components-input-text-placeholder",
					"aria-hidden": "true"
				})
			}),
			/* @__PURE__ */ jsx("input", {
				ref: inputRef,
				type: "text",
				name: "query",
				className: cn("system-sm-regular caret-#295EFF block h-[18px] grow appearance-none border-0 bg-transparent text-components-input-text-filled outline-none placeholder:text-components-input-text-placeholder", white && "!bg-white placeholder:!text-gray-400 hover:!bg-white group-hover:!bg-white"),
				placeholder: placeholder || t("operation.search", { ns: "common" }),
				value: isComposing.current ? compositionValue : value,
				onChange: (e) => {
					const newValue = e.target.value;
					if (isComposing.current) setCompositionValue(newValue);
					else onChange(newValue);
				},
				onCompositionStart: () => {
					isComposing.current = true;
					setCompositionValue(value);
				},
				onCompositionEnd: (e) => {
					isComposing.current = false;
					setCompositionValue("");
					onChange(e.currentTarget.value);
				},
				onFocus: () => setFocus(true),
				onBlur: () => setFocus(false),
				autoComplete: "off"
			}),
			value && /* @__PURE__ */ jsx("button", {
				type: "button",
				"aria-label": t("operation.clear", { ns: "common" }),
				className: "group/clear flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center border-none bg-transparent p-0",
				onClick: () => {
					onChange("");
					inputRef.current?.focus();
				},
				children: /* @__PURE__ */ jsx(S7, { className: "h-4 w-4 text-text-quaternary group-hover/clear:text-text-tertiary" })
			})
		]
	});
};
//#endregion
//#region assets/search-menu.svg
var search_menu_default = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28.0049%2016C28.0049%2020.4183%2024.4231%2024%2020.0049%2024C15.5866%2024%2012.0049%2020.4183%2012.0049%2016C12.0049%2011.5817%2015.5866%208%2020.0049%208C24.4231%208%2028.0049%2011.5817%2028.0049%2016Z'%20stroke='%23676F83'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4.00488%2016H6.67155'%20stroke='%23676F83'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4.00488%209.33301H8.00488'%20stroke='%23676F83'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4.00488%2022.667H8.00488'%20stroke='%23676F83'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M26%2022L29.3333%2025.3333'%20stroke='%23676F83'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
//#endregion
//#region app/components/base/checkbox-list/index.tsx
var CheckboxList = ({ title = "", label, description, options, value = [], onChange, disabled = false, containerClassName, showSelectAll = true, showCount = true, showSearch = true, maxHeight }) => {
	const { t } = useTranslation();
	const [searchQuery, setSearchQuery] = useState("");
	const filteredOptions = useMemo(() => {
		if (!searchQuery?.trim()) return options;
		const query = searchQuery.toLowerCase();
		return options.filter((option) => option.label.toLowerCase().includes(query) || option.value.toLowerCase().includes(query));
	}, [options, searchQuery]);
	const selectedCount = value.length;
	const isAllSelected = useMemo(() => {
		const selectableOptions = options.filter((option) => !option.disabled);
		return selectableOptions.length > 0 && selectableOptions.every((option) => value.includes(option.value));
	}, [options, value]);
	const isIndeterminate = useMemo(() => {
		const selectableOptions = options.filter((option) => !option.disabled);
		const selectedCount = selectableOptions.filter((option) => value.includes(option.value)).length;
		return selectedCount > 0 && selectedCount < selectableOptions.length;
	}, [options, value]);
	const handleSelectAll = useCallback(() => {
		if (disabled) return;
		if (isAllSelected) onChange?.([]);
		else {
			const allValues = options.filter((option) => !option.disabled).map((option) => option.value);
			onChange?.(allValues);
		}
	}, [
		isAllSelected,
		options,
		onChange,
		disabled
	]);
	const handleToggleOption = useCallback((optionValue) => {
		if (disabled) return;
		const newValue = value.includes(optionValue) ? value.filter((v) => v !== optionValue) : [...value, optionValue];
		onChange?.(newValue);
	}, [
		value,
		onChange,
		disabled
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex w-full flex-col gap-1", containerClassName),
		children: [
			label && /* @__PURE__ */ jsx("div", {
				className: "text-text-secondary system-sm-medium",
				children: label
			}),
			description && /* @__PURE__ */ jsx("div", {
				className: "text-text-tertiary body-xs-regular",
				children: description
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border border-components-panel-border bg-components-panel-bg",
				children: [(showSelectAll || title || showSearch) && /* @__PURE__ */ jsxs("div", {
					className: "relative flex items-center gap-2 border-b border-divider-subtle px-3 py-2",
					children: [
						!searchQuery && showSelectAll && /* @__PURE__ */ jsx(Checkbox, {
							checked: isAllSelected,
							indeterminate: isIndeterminate,
							onCheck: handleSelectAll,
							disabled,
							id: "selectAll"
						}),
						!searchQuery ? /* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 flex-1 items-center gap-1",
							children: [title && /* @__PURE__ */ jsx("span", {
								className: "truncate leading-5 text-text-secondary system-xs-semibold-uppercase",
								children: title
							}), showCount && selectedCount > 0 && /* @__PURE__ */ jsx(badge_default, {
								uppercase: true,
								children: t("operation.selectCount", {
									ns: "common",
									count: selectedCount
								})
							})]
						}) : /* @__PURE__ */ jsx("div", {
							className: "flex-1 leading-6 text-text-secondary system-sm-medium-uppercase",
							children: filteredOptions.length > 0 ? t("operation.searchCount", {
								ns: "common",
								count: filteredOptions.length,
								content: title
							}) : t("operation.noSearchCount", {
								ns: "common",
								content: title
							})
						}),
						showSearch && /* @__PURE__ */ jsx(SearchInput, {
							value: searchQuery,
							onChange: setSearchQuery,
							placeholder: t("placeholder.search", { ns: "common" }),
							className: "w-40"
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "p-1",
					style: maxHeight ? {
						maxHeight,
						overflowY: "auto"
					} : {},
					"data-testid": "options-container",
					children: !filteredOptions.length ? /* @__PURE__ */ jsx("div", {
						className: "px-3 py-6 text-center text-sm text-text-tertiary",
						children: searchQuery ? /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center justify-center gap-2",
							children: [
								/* @__PURE__ */ jsx("img", {
									alt: "search menu",
									src: search_menu_default.src,
									width: 32
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-text-secondary system-sm-regular",
									children: t("operation.noSearchResults", {
										ns: "common",
										content: title
									})
								}),
								/* @__PURE__ */ jsx(Button, {
									variant: "secondary-accent",
									size: "small",
									onClick: () => setSearchQuery(""),
									children: t("operation.resetKeywords", { ns: "common" })
								})
							]
						}) : t("noData", { ns: "common" })
					}) : filteredOptions.map((option) => {
						const selected = value.includes(option.value);
						return /* @__PURE__ */ jsxs("div", {
							"data-testid": "option-item",
							className: cn("flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-state-base-hover", option.disabled && "cursor-not-allowed opacity-50"),
							onClick: () => {
								if (!option.disabled && !disabled) handleToggleOption(option.value);
							},
							children: [/* @__PURE__ */ jsx(Checkbox, {
								checked: selected,
								onCheck: () => {
									if (!option.disabled && !disabled) handleToggleOption(option.value);
								},
								disabled: option.disabled || disabled,
								id: option.value
							}), /* @__PURE__ */ jsx("div", {
								className: "flex-1 truncate text-text-secondary system-sm-medium",
								title: option.label,
								children: option.label
							})]
						}, option.value);
					})
				})]
			})
		]
	});
};
//#endregion
//#region hooks/use-i18n.ts
var useRenderI18nObject = () => {
	const language = useLanguage();
	return (obj) => {
		return renderI18nObject(obj, language);
	};
};
//#endregion
//#region app/components/base/form/components/base/base-field.tsx
var getExtraProps = (type) => {
	switch (type) {
		case FormTypeEnum.secretInput: return {
			type: "password",
			autoComplete: "new-password"
		};
		case FormTypeEnum.textNumber: return { type: "number" };
		default: return { type: "text" };
	}
};
var getTranslatedContent = ({ content, render }) => {
	if (isValidElement(content) || typeof content === "string") return content;
	if (typeof content === "object" && content !== null) return render(content);
	return "";
};
var VALIDATE_STATUS_STYLE_MAP = {
	[FormItemValidateStatusEnum.Error]: {
		componentClassName: "border-components-input-border-destructive focus:border-components-input-border-destructive",
		textClassName: "text-text-destructive",
		infoFieldName: "errors"
	},
	[FormItemValidateStatusEnum.Warning]: {
		componentClassName: "border-components-input-border-warning focus:border-components-input-border-warning",
		textClassName: "text-text-warning",
		infoFieldName: "warnings"
	},
	[FormItemValidateStatusEnum.Success]: {
		componentClassName: "",
		textClassName: "",
		infoFieldName: ""
	},
	[FormItemValidateStatusEnum.Validating]: {
		componentClassName: "",
		textClassName: "",
		infoFieldName: ""
	}
};
var BaseField = ({ fieldClassName, labelClassName, inputContainerClassName, inputClassName, formSchema, field, disabled: propsDisabled, onChange, fieldState }) => {
	const renderI18nObject = useRenderI18nObject();
	const { t } = useTranslation();
	const { name, label, required, placeholder, options, labelClassName: formLabelClassName, disabled: formSchemaDisabled, type: formItemType, dynamicSelectParams, multiple = false, tooltip, showCopy, description, url, help } = formSchema;
	const disabled = propsDisabled || formSchemaDisabled;
	const [translatedLabel, translatedPlaceholder, translatedTooltip, translatedDescription, translatedHelp] = useMemo(() => {
		const results = [
			label,
			placeholder,
			tooltip,
			description,
			help
		].map((v) => getTranslatedContent({
			content: v,
			render: renderI18nObject
		}));
		if (!results[1]) results[1] = t("placeholder.input", { ns: "common" });
		return results;
	}, [
		label,
		placeholder,
		tooltip,
		description,
		help,
		renderI18nObject
	]);
	const watchedVariables = useMemo(() => {
		const variables = /* @__PURE__ */ new Set();
		for (const option of options || []) for (const condition of option.show_on || []) variables.add(condition.variable);
		return Array.from(variables);
	}, [options]);
	const watchedValues = useStore(field.form.store, (s) => {
		const result = {};
		for (const variable of watchedVariables) result[variable] = s.values[variable];
		return result;
	});
	const memorizedOptions = useMemo(() => {
		return options?.filter((option) => {
			if (!option.show_on?.length) return true;
			return option.show_on.every((condition) => {
				return watchedValues[condition.variable] === condition.value;
			});
		}).map((option) => {
			return {
				label: getTranslatedContent({
					content: option.label,
					render: renderI18nObject
				}),
				value: option.value
			};
		}) || [];
	}, [
		options,
		renderI18nObject,
		watchedValues
	]);
	const value = useStore(field.form.store, (s) => s.values[field.name]);
	const { data: dynamicOptionsData, isLoading: isDynamicOptionsLoading, error: dynamicOptionsError } = useTriggerPluginDynamicOptions(dynamicSelectParams || {
		plugin_id: "",
		provider: "",
		action: "",
		parameter: "",
		credential_id: ""
	}, formItemType === FormTypeEnum.dynamicSelect);
	const dynamicOptions = useMemo(() => {
		if (!dynamicOptionsData?.options) return [];
		return dynamicOptionsData.options.map((option) => ({
			label: getTranslatedContent({
				content: option.label,
				render: renderI18nObject
			}),
			value: option.value
		}));
	}, [dynamicOptionsData, renderI18nObject]);
	const handleChange = useCallback((value) => {
		field.handleChange(value);
		onChange?.(field.name, value);
	}, [field, onChange]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: cn(fieldClassName),
			children: [/* @__PURE__ */ jsxs("div", {
				className: cn(labelClassName, formLabelClassName),
				children: [
					translatedLabel,
					required && !isValidElement(label) && /* @__PURE__ */ jsx("span", {
						className: "ml-1 text-text-destructive-secondary",
						children: "*"
					}),
					tooltip && /* @__PURE__ */ jsx(tooltip_default, {
						triggerTestId: "base-field-tooltip-trigger",
						popupContent: /* @__PURE__ */ jsx("div", {
							className: "w-[200px]",
							children: translatedTooltip
						}),
						triggerClassName: "ml-0.5 w-4 h-4"
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: cn(inputContainerClassName),
				children: [
					[
						FormTypeEnum.textInput,
						FormTypeEnum.secretInput,
						FormTypeEnum.textNumber
					].includes(formItemType) && /* @__PURE__ */ jsx(Input, {
						id: field.name,
						name: field.name,
						className: cn(inputClassName, VALIDATE_STATUS_STYLE_MAP[fieldState?.validateStatus]?.componentClassName),
						value: value || "",
						onChange: (e) => {
							handleChange(e.target.value);
						},
						onBlur: field.handleBlur,
						disabled,
						placeholder: translatedPlaceholder,
						...getExtraProps(formItemType),
						showCopyIcon: showCopy
					}),
					formItemType === FormTypeEnum.select && !multiple && /* @__PURE__ */ jsx(PureSelect, {
						value,
						onChange: (v) => handleChange(v),
						disabled,
						placeholder: translatedPlaceholder,
						options: memorizedOptions,
						triggerPopupSameWidth: true,
						popupProps: { className: "max-h-[320px] overflow-y-auto" }
					}),
					formItemType === FormTypeEnum.checkbox && /* @__PURE__ */ jsx(CheckboxList, {
						title: name,
						value,
						onChange: (v) => field.handleChange(v),
						options: memorizedOptions,
						maxHeight: "200px"
					}),
					formItemType === FormTypeEnum.dynamicSelect && /* @__PURE__ */ jsx(PureSelect, {
						options: dynamicOptions,
						value,
						onChange: field.handleChange,
						disabled: disabled || isDynamicOptionsLoading,
						placeholder: isDynamicOptionsLoading ? t("dynamicSelect.loading", { ns: "common" }) : translatedPlaceholder,
						...dynamicOptionsError ? { popupProps: {
							title: t("dynamicSelect.error", { ns: "common" }),
							titleClassName: "text-text-destructive-secondary"
						} } : !dynamicOptions.length ? { popupProps: { title: t("dynamicSelect.noData", { ns: "common" }) } } : {},
						triggerPopupSameWidth: true,
						multiple
					}),
					formItemType === FormTypeEnum.radio && /* @__PURE__ */ jsx("div", {
						className: cn(memorizedOptions.length < 3 ? "flex items-center space-x-2" : "space-y-2"),
						"data-testid": "radio-group",
						children: memorizedOptions.map((option) => /* @__PURE__ */ jsxs("div", {
							className: cn("hover:bg-components-option-card-option-hover-bg hover:border-components-option-card-option-hover-border flex h-8 flex-[1] grow cursor-pointer items-center justify-center gap-2 rounded-lg border border-components-option-card-option-border bg-components-option-card-option-bg p-2 text-text-secondary system-sm-regular", value === option.value && "border-components-option-card-option-selected-border bg-components-option-card-option-selected-bg text-text-primary shadow-xs", disabled && "cursor-not-allowed opacity-50", inputClassName),
							onClick: () => !disabled && handleChange(option.value),
							children: [formSchema.showRadioUI && /* @__PURE__ */ jsx(ui_default, {
								className: "mr-2",
								isChecked: value === option.value
							}), option.label]
						}, option.value))
					}),
					formItemType === FormTypeEnum.boolean && /* @__PURE__ */ jsxs(Radio.Group, {
						className: "flex w-fit items-center",
						value,
						onChange: (v) => field.handleChange(v),
						children: [/* @__PURE__ */ jsx(Radio, {
							value: true,
							className: "!mr-1",
							children: "True"
						}), /* @__PURE__ */ jsx(Radio, {
							value: false,
							children: "False"
						})]
					}),
					fieldState?.validateStatus && [FormItemValidateStatusEnum.Error, FormItemValidateStatusEnum.Warning].includes(fieldState?.validateStatus) && /* @__PURE__ */ jsx("div", {
						className: cn("mt-1 px-0 py-[2px] system-xs-regular", VALIDATE_STATUS_STYLE_MAP[fieldState?.validateStatus].textClassName),
						children: fieldState?.[VALIDATE_STATUS_STYLE_MAP[fieldState?.validateStatus].infoFieldName]
					})
				]
			})]
		}),
		description && /* @__PURE__ */ jsx("div", {
			className: "mt-4 text-text-tertiary system-xs-regular",
			children: translatedDescription
		}),
		url && /* @__PURE__ */ jsxs("a", {
			className: "mt-4 flex items-center text-text-accent system-xs-regular",
			href: url,
			target: "_blank",
			children: [/* @__PURE__ */ jsx("span", {
				className: "break-all",
				children: translatedHelp
			}), /* @__PURE__ */ jsx("div", { className: "i-ri-external-link-line ml-1 h-3 w-3 shrink-0" })]
		})
	] });
};
var base_field_default = memo(BaseField);
//#endregion
//#region app/components/base/form/hooks/use-check-validated.ts
var useCheckValidated = (form, FormSchemas) => {
	const { notify } = useToastContext();
	return { checkValidated: useCallback(() => {
		const allError = form?.getAllErrors();
		const values = form.state.values;
		if (allError) {
			const fields = allError.fields;
			const errorArray = Object.keys(fields).reduce((acc, key) => {
				const { show_on = [] } = FormSchemas.find((schema) => schema.name === key) || {};
				const showOnValues = show_on.reduce((acc, condition) => {
					acc[condition.variable] = values[condition.variable];
					return acc;
				}, {});
				const errors = show_on?.every((condition) => {
					return showOnValues[condition.variable] === condition.value;
				}) ? fields[key].errors : [];
				return [...acc, ...errors];
			}, []);
			if (errorArray.length) {
				notify({
					type: "error",
					message: errorArray[0]
				});
				return false;
			}
			return true;
		}
		return true;
	}, [
		form,
		notify,
		FormSchemas
	]) };
};
//#endregion
//#region app/components/base/form/utils/secret-input/index.ts
var transformFormSchemasSecretInput = (isPristineSecretInputNames, values) => {
	const transformedValues = { ...values };
	isPristineSecretInputNames.forEach((name) => {
		if (transformedValues[name]) transformedValues[name] = "[__HIDDEN__]";
	});
	return transformedValues;
};
var getTransformedValuesWhenSecretInputPristine = (formSchemas, form) => {
	const values = form?.store.state.values || {};
	const isPristineSecretInputNames = [];
	for (let i = 0; i < formSchemas.length; i++) {
		const schema = formSchemas[i];
		if (schema.type === FormTypeEnum.secretInput) {
			if ((form?.getFieldMeta(schema.name))?.isPristine) isPristineSecretInputNames.push(schema.name);
		}
	}
	return transformFormSchemasSecretInput(isPristineSecretInputNames, values);
};
//#endregion
//#region app/components/base/form/hooks/use-get-form-values.ts
var useGetFormValues = (form, formSchemas) => {
	const { checkValidated } = useCheckValidated(form, formSchemas);
	return { getFormValues: useCallback(({ needCheckValidatedValues = true, needTransformWhenSecretFieldIsPristine }) => {
		const values = form?.store.state.values || {};
		if (!needCheckValidatedValues) return {
			values,
			isCheckValidated: true
		};
		if (checkValidated()) return {
			values: needTransformWhenSecretFieldIsPristine ? getTransformedValuesWhenSecretInputPristine(formSchemas, form) : values,
			isCheckValidated: true
		};
		else return {
			values: {},
			isCheckValidated: false
		};
	}, [
		form,
		checkValidated,
		formSchemas
	]) };
};
//#endregion
//#region app/components/base/form/hooks/use-get-validators.ts
var useGetValidators = () => {
	const { t } = useTranslation();
	const renderI18nObject = useRenderI18nObject();
	const getLabel = useCallback((label) => {
		if (isValidElement(label)) return "";
		if (typeof label === "string") return label;
		if (typeof label === "object" && label !== null) return renderI18nObject(label);
	}, []);
	return { getValidators: useCallback((formSchema) => {
		const { name, validators, required, label } = formSchema;
		let mergedValidators = validators;
		const memorizedLabel = getLabel(label);
		if (required && !validators) mergedValidators = {
			onMount: ({ value }) => {
				if (!value) return t("errorMsg.fieldRequired", {
					ns: "common",
					field: memorizedLabel || name
				});
			},
			onChange: ({ value }) => {
				if (!value) return t("errorMsg.fieldRequired", {
					ns: "common",
					field: memorizedLabel || name
				});
			},
			onBlur: ({ value }) => {
				if (!value) return t("errorMsg.fieldRequired", {
					ns: "common",
					field: memorizedLabel
				});
			}
		};
		return mergedValidators;
	}, [t, getLabel]) };
};
//#endregion
//#region app/components/base/form/components/base/base-form.tsx
var BaseForm = ({ formSchemas = [], defaultValues, formClassName, fieldClassName, labelClassName, inputContainerClassName, inputClassName, ref, disabled, formFromProps, onChange, onSubmit, preventDefaultSubmit = false }) => {
	const formFromHook = useForm({ defaultValues: useMemo(() => {
		if (defaultValues) return defaultValues;
		return formSchemas.reduce((acc, schema) => {
			if (schema.default) acc[schema.name] = schema.default;
			return acc;
		}, {});
	}, [defaultValues]) });
	const form = formFromProps || formFromHook;
	const { getFormValues } = useGetFormValues(form, formSchemas);
	const { getValidators } = useGetValidators();
	const [fieldStates, setFieldStates] = useState({});
	const showOnValues = useStore(form.store, (s) => {
		const result = {};
		formSchemas.forEach((schema) => {
			const { show_on } = schema;
			if (show_on?.length) show_on.forEach((condition) => {
				result[condition.variable] = s.values[condition.variable];
			});
		});
		return result;
	});
	const setFields = useCallback((fields) => {
		const newFieldStates = { ...fieldStates };
		for (const field of fields) {
			const { name, value, errors, warnings, validateStatus, help } = field;
			if (value !== void 0) form.setFieldValue(name, value);
			let finalValidateStatus = validateStatus;
			if (!finalValidateStatus) {
				if (errors && errors.length > 0) finalValidateStatus = FormItemValidateStatusEnum.Error;
				else if (warnings && warnings.length > 0) finalValidateStatus = FormItemValidateStatusEnum.Warning;
			}
			newFieldStates[name] = {
				validateStatus: finalValidateStatus,
				help,
				errors,
				warnings
			};
		}
		setFieldStates(newFieldStates);
	}, [form, fieldStates]);
	useImperativeHandle(ref, () => {
		return {
			getForm() {
				return form;
			},
			getFormValues: (option) => {
				return getFormValues(option);
			},
			setFields
		};
	}, [
		form,
		getFormValues,
		setFields
	]);
	const renderField = useCallback((field) => {
		const formSchema = formSchemas?.find((schema) => schema.name === field.name);
		if (formSchema) return /* @__PURE__ */ jsx(base_field_default, {
			field,
			formSchema,
			fieldClassName: fieldClassName ?? formSchema.fieldClassName,
			labelClassName: labelClassName ?? formSchema.labelClassName,
			inputContainerClassName,
			inputClassName,
			disabled,
			onChange,
			fieldState: fieldStates[field.name]
		});
		return null;
	}, [
		formSchemas,
		fieldClassName,
		labelClassName,
		inputContainerClassName,
		inputClassName,
		disabled,
		onChange,
		fieldStates
	]);
	const renderFieldWrapper = useCallback((formSchema) => {
		const validators = getValidators(formSchema);
		const { name, show_on = [] } = formSchema;
		if (!show_on?.every((condition) => {
			return showOnValues[condition.variable] === condition.value;
		})) return null;
		return /* @__PURE__ */ jsx(form.Field, {
			name,
			validators,
			children: renderField
		}, name);
	}, [
		renderField,
		form,
		getValidators,
		showOnValues
	]);
	if (!formSchemas?.length) return null;
	const handleSubmit = (e) => {
		if (preventDefaultSubmit) {
			e.preventDefault();
			e.stopPropagation();
		}
		onSubmit?.(e);
	};
	return /* @__PURE__ */ jsx("form", {
		className: cn(formClassName),
		onSubmit: handleSubmit,
		children: formSchemas.map(renderFieldWrapper)
	});
};
var base_form_default = memo(BaseForm);
//#endregion
//#region app/components/base/form/form-scenarios/auth/index.tsx
var AuthForm = ({ formSchemas = [], defaultValues, ref, formFromProps, ...rest }) => {
	return /* @__PURE__ */ jsx(base_form_default, {
		ref,
		formSchemas,
		defaultValues,
		formClassName: "space-y-4",
		labelClassName: "h-6 flex items-center mb-1 system-sm-medium text-text-secondary",
		formFromProps,
		...rest
	});
};
var auth_default = memo(AuthForm);
//#endregion
export { SearchInput as a, CheckboxList as i, base_form_default as n, useRenderI18nObject as r, auth_default as t };
