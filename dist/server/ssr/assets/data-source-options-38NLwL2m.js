import { t as cn } from "./classnames-LHQnX9lX.js";
import { Ot as BlockEnum } from "./config-Dopncj5R.js";
import { x as useToolIcon, zr as block_icon_default } from "./hooks-Bj_4KA1b.js";
import { t as useDatasourceOptions } from "./hooks-DYOKBJw_.js";
import * as React$1 from "react";
import { useCallback, useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/rag-pipeline/components/panel/test-run/preparation/data-source-options/option-card.tsx
var OptionCard = ({ label, value, selected, nodeData, onClick }) => {
	const toolIcon = useToolIcon(nodeData);
	const handleClickCard = useCallback(() => {
		onClick?.(value);
	}, [value, onClick]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex cursor-pointer flex-col gap-1 rounded-xl border border-components-option-card-option-border bg-components-option-card-option-bg p-2.5 shadow-shadow-shadow-3", selected ? "border-components-option-card-option-selected-border bg-components-option-card-option-selected-bg shadow-xs ring-[0.5px] ring-inset ring-components-option-card-option-selected-border" : "hover:bg-components-option-card-bg-hover hover:border-components-option-card-option-border-hover hover:shadow-xs"),
		onClick: handleClickCard,
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex size-7 shrink-0 items-center justify-center rounded-lg border-[0.5px] border-components-panel-border bg-background-default-dodge p-1",
			children: /* @__PURE__ */ jsx(block_icon_default, {
				type: BlockEnum.DataSource,
				toolIcon
			})
		}), /* @__PURE__ */ jsx("div", {
			className: cn("system-sm-medium line-clamp-2 grow text-text-secondary", selected && "text-text-primary"),
			title: label,
			children: label
		})]
	});
};
var option_card_default = React$1.memo(OptionCard);
//#endregion
//#region app/components/rag-pipeline/components/panel/test-run/preparation/data-source-options/index.tsx
var DataSourceOptions = ({ dataSourceNodeId, onSelect }) => {
	const options = useDatasourceOptions();
	const handelSelect = useCallback((value) => {
		const selectedOption = options.find((option) => option.value === value);
		if (!selectedOption) return;
		onSelect({
			nodeId: selectedOption.value,
			nodeData: selectedOption.data
		});
	}, [onSelect, options]);
	useEffect(() => {
		if (options.length > 0 && !dataSourceNodeId) handelSelect(options[0].value);
	}, []);
	return /* @__PURE__ */ jsx("div", {
		className: "grid w-full grid-cols-4 gap-1",
		children: options.map((option) => /* @__PURE__ */ jsx(option_card_default, {
			label: option.label,
			value: option.value,
			nodeData: option.data,
			selected: dataSourceNodeId === option.value,
			onClick: handelSelect
		}, option.value))
	});
};
//#endregion
export { DataSourceOptions as t };
