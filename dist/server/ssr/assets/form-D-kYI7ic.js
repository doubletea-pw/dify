import { B as H7, Gr as s7, N as Fl, Pn as _c, Si as zb, Ut as Sk, dt as NC, ln as W, rr as f1 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { Lt as SupportUploadFileTypes, at as PipelineInputVarType, pt as _enum } from "./config-Dopncj5R.js";
import { cn as NumberFieldDecrement, dn as NumberFieldInput, fn as NumberFieldUnit, ln as NumberFieldGroup, on as NumberField, sn as NumberFieldControls, un as NumberFieldIncrement } from "./hooks-Bj_4KA1b.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as Input } from "./input-BOHL-qYi.js";
import { u as TransferMethod } from "./app-DPjSIfgb.js";
import { n as badge_default } from "./credential-item-C22_bUSw.js";
import { t as Checkbox } from "./checkbox-DTSgkYdc.js";
import { t as Textarea } from "./textarea-Ngtow1st.js";
import { a as concatenatePaths, c as makePathArray, i as useStore, l as createStore, n as useForm, o as functionalUpdate, r as useIsomorphicLayoutEffect, s as getBy, t as PureSelect } from "./pure-Dr1CeacW.js";
import { t as var_reference_picker_default } from "./var-reference-picker-PlAsXjUc.js";
import { i as FileUploaderInAttachmentWrapper } from "./file-uploader-DuOqY7O5.js";
import { n as file_type_item_default, t as input_number_with_slider_default } from "./input-number-with-slider-CP7hkeZs.js";
import { t as config_select_default } from "./config-select-BdPKxz_Z.js";
import { t as option_card_default } from "./option-card-ChUs8MBx.js";
import * as React$1 from "react";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/@tanstack+form-core@1.28.5/node_modules/@tanstack/form-core/dist/esm/FieldGroupApi.js
var FieldGroupApi = class FieldGroupApi {
	/**
	* Constructs a new `FieldGroupApi` instance with the given form options.
	*/
	constructor(opts) {
		this.getFormFieldName = (subfield) => {
			if (typeof this.fieldsMap === "string") return concatenatePaths(this.fieldsMap, subfield);
			const firstAccessor = makePathArray(subfield)[0];
			if (typeof firstAccessor !== "string") return "";
			const restOfPath = subfield.slice(firstAccessor.length);
			const formMappedPath = this.fieldsMap[firstAccessor];
			return concatenatePaths(formMappedPath, restOfPath);
		};
		this.getFormFieldOptions = (props) => {
			const newProps = { ...props };
			const validators = newProps.validators;
			newProps.name = this.getFormFieldName(props.name);
			if (validators && (validators.onChangeListenTo || validators.onBlurListenTo)) {
				const newValidators = { ...validators };
				const remapListenTo = (listenTo) => {
					if (!listenTo) return void 0;
					return listenTo.map((localFieldName) => this.getFormFieldName(localFieldName));
				};
				newValidators.onChangeListenTo = remapListenTo(validators.onChangeListenTo);
				newValidators.onBlurListenTo = remapListenTo(validators.onBlurListenTo);
				newProps.validators = newValidators;
			}
			return newProps;
		};
		this.mount = () => {
			return () => {};
		};
		this.validateArrayFieldsStartingFrom = async (field, index, cause) => {
			return this.form.validateArrayFieldsStartingFrom(this.getFormFieldName(field), index, cause);
		};
		this.validateField = (field, cause) => {
			return this.form.validateField(this.getFormFieldName(field), cause);
		};
		this.getFieldValue = (field) => {
			return this.form.getFieldValue(this.getFormFieldName(field));
		};
		this.getFieldMeta = (field) => {
			return this.form.getFieldMeta(this.getFormFieldName(field));
		};
		this.setFieldMeta = (field, updater) => {
			return this.form.setFieldMeta(this.getFormFieldName(field), updater);
		};
		this.setFieldValue = (field, updater, opts2) => {
			return this.form.setFieldValue(this.getFormFieldName(field), updater, opts2);
		};
		this.deleteField = (field) => {
			return this.form.deleteField(this.getFormFieldName(field));
		};
		this.pushFieldValue = (field, value, opts2) => {
			return this.form.pushFieldValue(this.getFormFieldName(field), value, opts2);
		};
		this.insertFieldValue = async (field, index, value, opts2) => {
			return this.form.insertFieldValue(this.getFormFieldName(field), index, value, opts2);
		};
		this.replaceFieldValue = async (field, index, value, opts2) => {
			return this.form.replaceFieldValue(this.getFormFieldName(field), index, value, opts2);
		};
		this.removeFieldValue = async (field, index, opts2) => {
			return this.form.removeFieldValue(this.getFormFieldName(field), index, opts2);
		};
		this.swapFieldValues = (field, index1, index2, opts2) => {
			return this.form.swapFieldValues(this.getFormFieldName(field), index1, index2, opts2);
		};
		this.moveFieldValues = (field, index1, index2, opts2) => {
			return this.form.moveFieldValues(this.getFormFieldName(field), index1, index2, opts2);
		};
		this.clearFieldValues = (field, opts2) => {
			return this.form.clearFieldValues(this.getFormFieldName(field), opts2);
		};
		this.resetField = (field) => {
			return this.form.resetField(this.getFormFieldName(field));
		};
		this.validateAllFields = (cause) => this.form.validateAllFields(cause);
		if (opts.form instanceof FieldGroupApi) {
			const group = opts.form;
			this.form = group.form;
			if (typeof opts.fields === "string") this.fieldsMap = group.getFormFieldName(opts.fields);
			else {
				const fields = { ...opts.fields };
				for (const key in fields) fields[key] = group.getFormFieldName(fields[key]);
				this.fieldsMap = fields;
			}
		} else {
			this.form = opts.form;
			this.fieldsMap = opts.fields;
		}
		this.store = createStore(() => {
			const currFormStore = this.form.store.get();
			let values;
			if (typeof this.fieldsMap === "string") values = getBy(currFormStore.values, this.fieldsMap);
			else {
				values = {};
				const fields = this.fieldsMap;
				for (const key in fields) values[key] = getBy(currFormStore.values, fields[key]);
			}
			return { values };
		});
	}
	get state() {
		return this.store.state;
	}
	async handleSubmit(submitMeta) {
		return this.form.handleSubmit(submitMeta);
	}
};
//#endregion
//#region node_modules/.pnpm/@tanstack+react-form@1.28.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@tanstack/react-form/dist/esm/useFieldGroup.js
function LocalSubscribe({ lens, selector = (state) => state, children }) {
	return /* @__PURE__ */ jsx(Fragment$1, { children: functionalUpdate(children, useStore(lens.store, selector)) });
}
function useFieldGroup(opts) {
	const [formLensApi] = useState(() => {
		const api = new FieldGroupApi(opts);
		const form = opts.form instanceof FieldGroupApi ? opts.form.form : opts.form;
		const extendedApi = api;
		extendedApi.AppForm = function AppForm(appFormProps) {
			return /* @__PURE__ */ jsx(form.AppForm, { ...appFormProps });
		};
		extendedApi.AppField = function AppField(props) {
			return /* @__PURE__ */ jsx(form.AppField, { ...formLensApi.getFormFieldOptions(props) });
		};
		extendedApi.Field = function Field(props) {
			return /* @__PURE__ */ jsx(form.Field, { ...formLensApi.getFormFieldOptions(props) });
		};
		extendedApi.Subscribe = function Subscribe(props) {
			return /* @__PURE__ */ jsx(LocalSubscribe, {
				lens: formLensApi,
				selector: props.selector,
				children: props.children
			});
		};
		return Object.assign(extendedApi, { ...opts.formComponents });
	});
	useIsomorphicLayoutEffect(formLensApi.mount, [formLensApi]);
	return formLensApi;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-form@1.28.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@tanstack/react-form/dist/esm/createFormHook.js
var fieldContext$1 = createContext(null);
var formContext$1 = createContext(null);
function useFormContext$1() {
	const form = useContext(formContext$1);
	if (!form) throw new Error("`formContext` only works when within a `formComponent` passed to `createFormHook`");
	return form;
}
function createFormHookContexts() {
	function useFieldContext() {
		const field = useContext(fieldContext$1);
		if (!field) throw new Error("`fieldContext` only works when within a `fieldComponent` passed to `createFormHook`");
		return field;
	}
	return {
		fieldContext: fieldContext$1,
		useFieldContext,
		useFormContext: useFormContext$1,
		formContext: formContext$1
	};
}
function createFormHook({ fieldComponents, fieldContext: fieldContext2, formContext: formContext2, formComponents }) {
	function useAppForm(props) {
		const form = useForm(props);
		const AppForm = useMemo(() => {
			return ({ children }) => {
				return /* @__PURE__ */ jsx(formContext2.Provider, {
					value: form,
					children
				});
			};
		}, [form]);
		const AppField = useMemo(() => {
			const AppField2 = (({ children, ...props2 }) => {
				return /* @__PURE__ */ jsx(form.Field, {
					...props2,
					children: (field) => /* @__PURE__ */ jsx(fieldContext2.Provider, {
						value: field,
						children: children(Object.assign(field, fieldComponents))
					})
				});
			});
			return AppField2;
		}, [form]);
		return useMemo(() => {
			return Object.assign(form, {
				AppField,
				AppForm,
				...formComponents
			});
		}, [
			form,
			AppField,
			AppForm
		]);
	}
	function withForm({ render, props }) {
		return function Render(innerProps) {
			return render({
				...props,
				...innerProps
			});
		};
	}
	function withFieldGroup({ render, props, defaultValues }) {
		return function Render(innerProps) {
			const fieldGroupApi = useFieldGroup(useMemo(() => {
				return {
					form: innerProps.form,
					fields: innerProps.fields,
					defaultValues,
					formComponents
				};
			}, [innerProps.form, innerProps.fields]));
			return render({
				...props,
				...innerProps,
				group: fieldGroupApi
			});
		};
	}
	function useTypedAppFormContext(_props) {
		return useFormContext$1();
	}
	return {
		useAppForm,
		withForm,
		withFieldGroup,
		useTypedAppFormContext
	};
}
//#endregion
//#region app/components/base/form/components/field/checkbox.tsx
var CheckboxField = ({ label, labelClassName }) => {
	const field = useFieldContext();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex gap-2",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex h-6 shrink-0 items-center",
			children: /* @__PURE__ */ jsx(Checkbox, {
				id: field.name,
				checked: field.state.value,
				onCheck: () => {
					field.handleChange(!field.state.value);
				}
			})
		}), /* @__PURE__ */ jsx("label", {
			htmlFor: field.name,
			className: cn("system-sm-medium grow cursor-pointer pt-1 text-text-secondary", labelClassName),
			onClick: () => {
				field.handleChange(!field.state.value);
			},
			children: label
		})]
	});
};
//#endregion
//#region app/components/base/select/custom.tsx
var CustomSelect = ({ options, value, onChange, containerProps, triggerProps, popupProps, CustomTrigger, CustomOption }) => {
	const { t } = useTranslation();
	const { open, onOpenChange, placement, offset, triggerPopupSameWidth = true } = containerProps || {};
	const { className: triggerClassName } = triggerProps || {};
	const { wrapperClassName: popupWrapperClassName, className: popupClassName, itemClassName: popupItemClassName } = popupProps || {};
	const [localOpen, setLocalOpen] = useState(false);
	const mergedOpen = open ?? localOpen;
	const handleOpenChange = useCallback((openValue) => {
		onOpenChange?.(openValue);
		setLocalOpen(openValue);
	}, [onOpenChange]);
	const selectedOption = options.find((option) => option.value === value);
	const triggerText = selectedOption?.label || t("placeholder.select", { ns: "common" });
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		placement: placement || "bottom-start",
		offset: offset || 4,
		open: mergedOpen,
		onOpenChange: handleOpenChange,
		triggerPopupSameWidth,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => handleOpenChange(!mergedOpen),
			asChild: true,
			children: /* @__PURE__ */ jsx("div", {
				className: cn("system-sm-regular group flex h-8 cursor-pointer items-center rounded-lg bg-components-input-bg-normal px-2 text-components-input-text-filled hover:bg-state-base-hover-alt", mergedOpen && "bg-state-base-hover-alt", triggerClassName),
				children: CustomTrigger ? CustomTrigger(selectedOption, mergedOpen) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
					className: "grow",
					title: triggerText,
					children: triggerText
				}), /* @__PURE__ */ jsx(f1, { className: cn("h-4 w-4 shrink-0 text-text-quaternary group-hover:text-text-secondary", mergedOpen && "text-text-secondary") })] })
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: cn("z-10", popupWrapperClassName),
			children: /* @__PURE__ */ jsx("div", {
				className: cn("rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-1 shadow-lg shadow-shadow-shadow-5", popupClassName),
				children: options.map((option) => {
					const selected = value === option.value;
					return /* @__PURE__ */ jsx("div", {
						className: cn("system-sm-medium flex h-8 cursor-pointer items-center rounded-lg px-2 text-text-secondary hover:bg-state-base-hover", popupItemClassName),
						title: option.label,
						onClick: () => {
							onChange?.(option.value);
							handleOpenChange(false);
						},
						children: CustomOption ? CustomOption(option, selected) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
							className: "mr-1 grow truncate px-1",
							children: option.label
						}), selected && /* @__PURE__ */ jsx(s7, { className: "h-4 w-4 shrink-0 text-text-accent" })] })
					}, option.value);
				})
			})
		})]
	});
};
//#endregion
//#region app/components/base/form/components/label.tsx
var Label = ({ htmlFor, label, isRequired, showOptional, tooltip, className }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-6 items-center",
		children: [
			/* @__PURE__ */ jsx("label", {
				"data-testid": "label",
				htmlFor,
				className: cn("system-sm-medium text-text-secondary", className),
				children: label
			}),
			!isRequired && showOptional && /* @__PURE__ */ jsx("div", {
				className: "system-xs-regular ml-1 text-text-tertiary",
				children: t("label.optional", { ns: "common" })
			}),
			isRequired && /* @__PURE__ */ jsx("div", {
				className: "system-xs-regular ml-1 text-text-destructive-secondary",
				children: "*"
			}),
			tooltip && /* @__PURE__ */ jsx(tooltip_default, {
				popupContent: /* @__PURE__ */ jsx("div", {
					className: "w-[200px]",
					children: tooltip
				}),
				triggerClassName: "ml-0.5 w-4 h-4",
				triggerTestId: `${htmlFor}-tooltip`
			})
		]
	});
};
//#endregion
//#region app/components/base/form/components/field/custom-select.tsx
var CustomSelectField = ({ label, labelOptions, options, className, ...selectProps }) => {
	const field = useFieldContext();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-y-0.5", className),
		children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: field.name,
			label,
			...labelOptions ?? {}
		}), /* @__PURE__ */ jsx(CustomSelect, {
			value: field.state.value,
			options,
			onChange: (value) => field.handleChange(value),
			...selectProps
		})]
	});
};
//#endregion
//#region app/components/base/form/components/field/file-types.tsx
var FileTypesField = ({ label, labelOptions, className }) => {
	const field = useFieldContext();
	const handleSupportFileTypeChange = useCallback((type) => {
		let newAllowFileTypes = [...field.state.value.allowedFileTypes];
		if (type === SupportUploadFileTypes.custom) if (!newAllowFileTypes.includes(SupportUploadFileTypes.custom)) newAllowFileTypes = [SupportUploadFileTypes.custom];
		else newAllowFileTypes = newAllowFileTypes.filter((v) => v !== type);
		else {
			newAllowFileTypes = newAllowFileTypes.filter((v) => v !== SupportUploadFileTypes.custom);
			if (newAllowFileTypes.includes(type)) newAllowFileTypes = newAllowFileTypes.filter((v) => v !== type);
			else newAllowFileTypes.push(type);
		}
		field.handleChange({
			...field.state.value,
			allowedFileTypes: newAllowFileTypes
		});
	}, [field]);
	const handleCustomFileTypesChange = useCallback((customFileTypes) => {
		field.handleChange({
			...field.state.value,
			allowedFileExtensions: customFileTypes
		});
	}, [field]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-y-0.5", className),
		children: [
			/* @__PURE__ */ jsx(Label, {
				htmlFor: field.name,
				label,
				...labelOptions ?? {}
			}),
			[
				SupportUploadFileTypes.document,
				SupportUploadFileTypes.image,
				SupportUploadFileTypes.audio,
				SupportUploadFileTypes.video
			].map((type) => /* @__PURE__ */ jsx(file_type_item_default, {
				type,
				selected: field.state.value.allowedFileTypes.includes(type),
				onToggle: handleSupportFileTypeChange
			}, type)),
			/* @__PURE__ */ jsx(file_type_item_default, {
				type: SupportUploadFileTypes.custom,
				selected: field.state.value.allowedFileTypes.includes(SupportUploadFileTypes.custom),
				onToggle: handleSupportFileTypeChange,
				customFileTypes: field.state.value.allowedFileExtensions,
				onCustomFileTypesChange: handleCustomFileTypesChange
			})
		]
	});
};
//#endregion
//#region app/components/base/form/components/field/file-uploader.tsx
var FileUploaderField = ({ label, labelOptions, className, ...inputProps }) => {
	const field = useFieldContext();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-y-0.5", className),
		children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: field.name,
			label,
			...labelOptions ?? {}
		}), /* @__PURE__ */ jsx(FileUploaderInAttachmentWrapper, {
			value: field.state.value,
			onChange: (value) => field.handleChange(value),
			...inputProps
		})]
	});
};
//#endregion
//#region app/components/base/form/components/field/input-type-select/types.tsx
var InputTypeEnum = _enum([
	"text-input",
	"paragraph",
	"number",
	"select",
	"checkbox",
	"file",
	"file-list"
]);
//#endregion
//#region app/components/base/form/components/field/input-type-select/hooks.tsx
var i18nFileTypeMap = {
	"text-input": "text-input",
	"paragraph": "paragraph",
	"number": "number",
	"select": "select",
	"checkbox": "checkbox",
	"file": "single-file",
	"file-list": "multi-files"
};
var INPUT_TYPE_ICON = {
	[PipelineInputVarType.textInput]: zb,
	[PipelineInputVarType.paragraph]: W,
	[PipelineInputVarType.number]: _c,
	[PipelineInputVarType.select]: Sk,
	[PipelineInputVarType.checkbox]: H7,
	[PipelineInputVarType.singleFile]: Fl,
	[PipelineInputVarType.multiFiles]: NC
};
var DATA_TYPE = {
	[PipelineInputVarType.textInput]: "string",
	[PipelineInputVarType.paragraph]: "string",
	[PipelineInputVarType.number]: "number",
	[PipelineInputVarType.select]: "string",
	[PipelineInputVarType.checkbox]: "boolean",
	[PipelineInputVarType.singleFile]: "file",
	[PipelineInputVarType.multiFiles]: "array[file]"
};
var useInputTypeOptions = (supportFile) => {
	const { t } = useTranslation();
	return (supportFile ? InputTypeEnum.options : InputTypeEnum.exclude(["file", "file-list"]).options).map((value) => {
		return {
			value,
			label: t(`variableConfig.${i18nFileTypeMap[value]}`, { ns: "appDebug" }),
			Icon: INPUT_TYPE_ICON[value],
			type: DATA_TYPE[value]
		};
	});
};
//#endregion
//#region app/components/base/form/components/field/input-type-select/option.tsx
var Option = ({ option }) => {
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(option.Icon, { className: "h-4 w-4 shrink-0 text-text-tertiary" }),
		/* @__PURE__ */ jsx("span", {
			className: "grow px-1",
			children: option.label
		}),
		/* @__PURE__ */ jsx(badge_default, {
			text: option.type,
			uppercase: false
		})
	] });
};
var option_default = React$1.memo(Option);
//#endregion
//#region app/components/base/form/components/field/input-type-select/trigger.tsx
var Trigger = ({ option, open }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [option ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(option.Icon, { className: "h-4 w-4 shrink-0 text-text-tertiary" }),
		/* @__PURE__ */ jsx("span", {
			className: "grow p-1",
			children: option.label
		}),
		/* @__PURE__ */ jsx("div", {
			className: "pr-0.5",
			children: /* @__PURE__ */ jsx(badge_default, {
				text: option.type,
				uppercase: false
			})
		})
	] }) : /* @__PURE__ */ jsx("span", {
		className: "grow p-1",
		children: t("placeholder.select", { ns: "common" })
	}), /* @__PURE__ */ jsx(f1, { className: cn("h-4 w-4 shrink-0 text-text-quaternary group-hover:text-text-secondary", open && "text-text-secondary") })] });
};
var trigger_default = React$1.memo(Trigger);
//#endregion
//#region app/components/base/form/components/field/input-type-select/index.tsx
var InputTypeSelectField = ({ label, labelOptions, supportFile, className, ...customSelectProps }) => {
	const field = useFieldContext();
	const inputTypeOptions = useInputTypeOptions(supportFile);
	const renderTrigger = useCallback((option, open) => {
		return /* @__PURE__ */ jsx(trigger_default, {
			option,
			open
		});
	}, []);
	const renderOption = useCallback((option) => {
		return /* @__PURE__ */ jsx(option_default, { option });
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-y-0.5", className),
		children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: field.name,
			label,
			...labelOptions ?? {}
		}), /* @__PURE__ */ jsx(CustomSelect, {
			value: field.state.value,
			options: inputTypeOptions,
			onChange: (value) => field.handleChange(value),
			triggerProps: { className: "gap-x-0.5" },
			popupProps: {
				className: "w-[368px]",
				wrapperClassName: "z-[9999999]",
				itemClassName: "gap-x-1"
			},
			CustomTrigger: renderTrigger,
			CustomOption: renderOption,
			...customSelectProps
		})]
	});
};
//#endregion
//#region app/components/base/form/components/field/number-input.tsx
var NumberInputField = ({ label, labelOptions, className, inputClassName, unit, size = "regular", ...props }) => {
	const field = useFieldContext();
	const { value: _value, min, max, step, disabled, readOnly, required, name: _name, id: _id, ...inputProps } = props;
	const emptyValue = min ?? 0;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-y-0.5", className),
		children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: field.name,
			label,
			...labelOptions ?? {}
		}), /* @__PURE__ */ jsx(NumberField, {
			id: field.name,
			name: field.name,
			value: field.state.value,
			min,
			max,
			step,
			disabled,
			readOnly,
			required,
			onValueChange: (value) => field.handleChange(value ?? emptyValue),
			children: /* @__PURE__ */ jsxs(NumberFieldGroup, {
				size,
				children: [
					/* @__PURE__ */ jsx(NumberFieldInput, {
						...inputProps,
						size,
						className: inputClassName,
						onBlur: field.handleBlur
					}),
					Boolean(unit) && /* @__PURE__ */ jsx(NumberFieldUnit, {
						size,
						children: unit
					}),
					/* @__PURE__ */ jsxs(NumberFieldControls, { children: [/* @__PURE__ */ jsx(NumberFieldIncrement, { size }), /* @__PURE__ */ jsx(NumberFieldDecrement, { size })] })
				]
			})
		})]
	});
};
//#endregion
//#region app/components/base/form/components/field/number-slider.tsx
var NumberSliderField = ({ label, labelOptions, description, className, ...InputNumberWithSliderProps }) => {
	const field = useFieldContext();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-y-0.5", className),
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: field.name,
			label,
			...labelOptions ?? {}
		}), description && /* @__PURE__ */ jsx("div", {
			className: "body-xs-regular pb-0.5 text-text-tertiary",
			children: description
		})] }), /* @__PURE__ */ jsx(input_number_with_slider_default, {
			value: field.state.value,
			onChange: (value) => field.handleChange(value),
			...InputNumberWithSliderProps
		})]
	});
};
//#endregion
//#region app/components/base/form/components/field/options.tsx
var OptionsField = ({ label, className, labelOptions }) => {
	const field = useFieldContext();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-y-0.5", className),
		children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: field.name,
			label,
			...labelOptions ?? {}
		}), /* @__PURE__ */ jsx(config_select_default, {
			options: field.state.value,
			onChange: (value) => field.handleChange(value)
		})]
	});
};
//#endregion
//#region app/components/base/form/components/field/select.tsx
var SelectField = ({ label, labelOptions, options, onChange, className, ...selectProps }) => {
	const field = useFieldContext();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-y-0.5", className),
		children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: field.name,
			label,
			...labelOptions ?? {}
		}), /* @__PURE__ */ jsx(PureSelect, {
			value: field.state.value,
			options,
			onChange: (value) => {
				field.handleChange(value);
				onChange?.(value);
			},
			...selectProps
		})]
	});
};
//#endregion
//#region app/components/base/form/components/field/text.tsx
var TextField = ({ label, labelOptions, className, ...inputProps }) => {
	const field = useFieldContext();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-y-0.5", className),
		children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: field.name,
			label,
			...labelOptions ?? {}
		}), /* @__PURE__ */ jsx(Input, {
			id: field.name,
			value: field.state.value,
			onChange: (e) => field.handleChange(e.target.value),
			onBlur: field.handleBlur,
			...inputProps
		})]
	});
};
//#endregion
//#region app/components/base/form/components/field/text-area.tsx
var TextAreaField = ({ label, labelOptions, className, ...inputProps }) => {
	const field = useFieldContext();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-y-0.5", className),
		children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: field.name,
			label,
			...labelOptions ?? {}
		}), /* @__PURE__ */ jsx(Textarea, {
			id: field.name,
			value: field.state.value,
			onChange: (e) => field.handleChange(e.target.value),
			onBlur: field.handleBlur,
			...inputProps
		})]
	});
};
//#endregion
//#region app/components/base/form/components/field/upload-method.tsx
var UploadMethodField = ({ label, labelOptions, className }) => {
	const { t } = useTranslation();
	const field = useFieldContext();
	const { value } = field.state;
	const handleUploadMethodChange = useCallback((method) => {
		field.handleChange(method === TransferMethod.all ? [TransferMethod.local_file, TransferMethod.remote_url] : [method]);
	}, [field]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-y-0.5", className),
		children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: field.name,
			label,
			...labelOptions ?? {}
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-3 gap-2",
			children: [
				/* @__PURE__ */ jsx(option_card_default, {
					title: t("variableConfig.localUpload", { ns: "appDebug" }),
					selected: value.length === 1 && value.includes(TransferMethod.local_file),
					onSelect: handleUploadMethodChange.bind(null, TransferMethod.local_file)
				}),
				/* @__PURE__ */ jsx(option_card_default, {
					title: "URL",
					selected: value.length === 1 && value.includes(TransferMethod.remote_url),
					onSelect: handleUploadMethodChange.bind(null, TransferMethod.remote_url)
				}),
				/* @__PURE__ */ jsx(option_card_default, {
					title: t("variableConfig.both", { ns: "appDebug" }),
					selected: value.includes(TransferMethod.local_file) && value.includes(TransferMethod.remote_url),
					onSelect: handleUploadMethodChange.bind(null, TransferMethod.all)
				})
			]
		})]
	});
};
//#endregion
//#region app/components/base/form/components/field/variable-selector.tsx
var VariableOrConstantInputField = ({ className, label, labelOptions }) => {
	const handleVariableValueChange = () => {
		console.log("Variable value changed");
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-y-0.5", className),
		children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: "variable-or-constant",
			label,
			...labelOptions ?? {}
		}), /* @__PURE__ */ jsx("div", {
			className: "flex items-center",
			children: /* @__PURE__ */ jsx(var_reference_picker_default, {
				className: "grow",
				nodeId: "",
				readonly: false,
				value: [],
				onChange: handleVariableValueChange
			})
		})]
	});
};
//#endregion
//#region app/components/base/form/components/form/actions.tsx
var Actions = ({ CustomActions }) => {
	const { t } = useTranslation();
	const form = useFormContext();
	const [isSubmitting, canSubmit] = useStore(form.store, (state) => [state.isSubmitting, state.canSubmit]);
	if (CustomActions) return CustomActions({
		form,
		isSubmitting,
		canSubmit
	});
	return /* @__PURE__ */ jsx(Button, {
		variant: "primary",
		disabled: isSubmitting || !canSubmit,
		loading: isSubmitting,
		onClick: () => form.handleSubmit(),
		children: t("operation.submit", { ns: "common" })
	});
};
//#endregion
//#region app/components/base/form/index.tsx
var { fieldContext, useFieldContext, formContext, useFormContext } = createFormHookContexts();
var { useAppForm, withForm } = createFormHook({
	fieldComponents: {
		TextField,
		TextAreaField,
		NumberInputField,
		CheckboxField,
		SelectField,
		CustomSelectField,
		OptionsField,
		InputTypeSelectField,
		FileTypesField,
		UploadMethodField,
		NumberSliderField,
		VariableOrConstantInputField,
		FileUploaderField
	},
	formComponents: { Actions },
	fieldContext,
	formContext
});
//#endregion
export { CustomSelect as a, InputTypeEnum as i, useAppForm as n, withForm as r, formContext as t };
