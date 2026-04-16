import { Mr as p } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { ir as produce } from "./hooks-Bj_4KA1b.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { r as remove_button_default } from "./var-reference-picker-PlAsXjUc.js";
import { t as option_card_default } from "./option-card-ChUs8MBx.js";
import * as React$1 from "react";
import { useCallback } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow/panel/chat-variable-panel/components/bool-value.tsx
var BoolValue = ({ value, onChange }) => {
	const booleanValue = value;
	const handleChange = useCallback((newValue) => {
		return () => {
			onChange(newValue);
		};
	}, [onChange]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex w-full space-x-1",
		children: [/* @__PURE__ */ jsx(option_card_default, {
			className: "grow",
			selected: booleanValue,
			title: "True",
			onSelect: handleChange(true)
		}), /* @__PURE__ */ jsx(option_card_default, {
			className: "grow",
			selected: !booleanValue,
			title: "False",
			onSelect: handleChange(false)
		})]
	});
};
var bool_value_default = React$1.memo(BoolValue);
//#endregion
//#region app/components/workflow/panel/chat-variable-panel/components/array-bool-list.tsx
var ArrayValueList = ({ className, list, onChange }) => {
	const { t } = useTranslation();
	const handleChange = useCallback((index) => {
		return (value) => {
			onChange(produce(list, (draft) => {
				draft[index] = value;
			}));
		};
	}, [list, onChange]);
	const handleItemRemove = useCallback((index) => {
		return () => {
			onChange(produce(list, (draft) => {
				draft.splice(index, 1);
			}));
		};
	}, [list, onChange]);
	const handleItemAdd = useCallback(() => {
		onChange(produce(list, (draft) => {
			draft.push(false);
		}));
	}, [list, onChange]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("w-full space-y-2", className),
		children: [list.map((item, index) => /* @__PURE__ */ jsxs("div", {
			className: "flex items-center space-x-1",
			children: [/* @__PURE__ */ jsx(bool_value_default, {
				value: item,
				onChange: handleChange(index)
			}), /* @__PURE__ */ jsx(remove_button_default, {
				className: "!bg-gray-100 !p-2 hover:!bg-gray-200",
				onClick: handleItemRemove(index)
			})]
		}, index)), /* @__PURE__ */ jsxs(Button, {
			variant: "tertiary",
			className: "w-full",
			onClick: handleItemAdd,
			children: [/* @__PURE__ */ jsx(p, { className: "mr-1 h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: t("chatVariable.modal.addArrayValue", { ns: "workflow" }) })]
		})]
	});
};
var array_bool_list_default = React$1.memo(ArrayValueList);
//#endregion
//#region app/components/workflow/panel/chat-variable-panel/utils.ts
var objectPlaceholder = `#  example
#  {
#     "name": "ray",
#     "age": 20
#  }`;
var arrayStringPlaceholder = `#  example
#  [
#     "value1",
#     "value2"
#  ]`;
var arrayNumberPlaceholder = `#  example
#  [
#     100,
#     200
#  ]`;
var arrayObjectPlaceholder = `#  example
#  [
#     {
#       "name": "ray",
#       "age": 20
#     },
#     {
#       "name": "lily",
#       "age": 18
#     }
#  ]`;
var arrayBoolPlaceholder = `#  example
#  [
#     "True",
#     "False"
#  ]`;
//#endregion
export { objectPlaceholder as a, arrayStringPlaceholder as i, arrayNumberPlaceholder as n, array_bool_list_default as o, arrayObjectPlaceholder as r, bool_value_default as s, arrayBoolPlaceholder as t };
