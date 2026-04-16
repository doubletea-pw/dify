import { m as __exportAll } from "../index.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as EChartsReact } from "./esm-Cvvoz2PS.js";
import { memo, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
var index_module_default = { simplePieChart: "_simplePieChart_1xnqp_1" };
//#endregion
//#region app/components/base/simple-pie-chart/index.tsx
var simple_pie_chart_exports = /* @__PURE__ */ __exportAll({ default: () => simple_pie_chart_default });
var SimplePieChart = ({ percentage = 80, fill = "#fdb022", stroke = "#f79009", size = 12, animationDuration, className }) => {
	return /* @__PURE__ */ jsx(EChartsReact, {
		option: useMemo(() => ({ series: [{
			type: "pie",
			radius: ["83%", "100%"],
			animation: false,
			data: [{
				value: 100,
				itemStyle: { color: stroke }
			}],
			emphasis: { disabled: true },
			labelLine: { show: false },
			cursor: "default"
		}, {
			type: "pie",
			radius: "83%",
			animationDuration: animationDuration ?? 600,
			data: [{
				value: percentage,
				itemStyle: { color: fill }
			}, {
				value: 100 - percentage,
				itemStyle: { color: "#fff" }
			}],
			emphasis: { disabled: true },
			labelLine: { show: false },
			cursor: "default"
		}] }), [
			stroke,
			fill,
			percentage,
			animationDuration
		]),
		className: cn(index_module_default.simplePieChart, className),
		style: {
			"--simple-pie-chart-color": fill,
			"width": size,
			"height": size
		}
	});
};
var simple_pie_chart_default = memo(SimplePieChart);
//#endregion
export { simple_pie_chart_exports as n, simple_pie_chart_default as t };
