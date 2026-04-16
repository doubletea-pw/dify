import { t as cn } from "./classnames-LHQnX9lX.js";
import { sn as sleep } from "./base-BuKAg6Le.js";
import { B as checkTaskStatus$1 } from "./use-refresh-plugin-list-C8aKRYG-.js";
import { G as TaskStatus } from "./hooks-BTelimHS.js";
import { jsx } from "react/jsx-runtime";
//#region app/components/plugins/install-plugin/base/check-task-status.ts
var INTERVAL = 10 * 1e3;
function checkTaskStatus() {
	let nextStatus = TaskStatus.running;
	let isStop = false;
	const doCheckStatus = async ({ taskId, pluginUniqueIdentifier }) => {
		if (isStop) return { status: TaskStatus.success };
		const { plugins } = (await checkTaskStatus$1(taskId)).task;
		const plugin = plugins.find((p) => p.plugin_unique_identifier === pluginUniqueIdentifier);
		if (!plugin) {
			nextStatus = TaskStatus.failed;
			return {
				status: TaskStatus.failed,
				error: "Plugin package not found"
			};
		}
		nextStatus = plugin.status;
		if (nextStatus === TaskStatus.running) {
			await sleep(INTERVAL);
			return await doCheckStatus({
				taskId,
				pluginUniqueIdentifier
			});
		}
		if (nextStatus === TaskStatus.failed) return {
			status: TaskStatus.failed,
			error: plugin.message
		};
		return { status: TaskStatus.success };
	};
	return {
		check: doCheckStatus,
		stop: () => {
			isStop = true;
		}
	};
}
//#endregion
//#region app/components/base/skeleton/index.tsx
var SkeletonContainer = (props) => {
	const { className, children, ...rest } = props;
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-col gap-1", className),
		...rest,
		children
	});
};
var SkeletonRow = (props) => {
	const { className, children, ...rest } = props;
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex items-center gap-2", className),
		...rest,
		children
	});
};
var SkeletonRectangle = (props) => {
	const { className, children, ...rest } = props;
	return /* @__PURE__ */ jsx("div", {
		className: cn("my-1 h-2 rounded-sm bg-text-quaternary opacity-20", className),
		...rest,
		children
	});
};
var SkeletonPoint = (props) => {
	const { className, ...rest } = props;
	return /* @__PURE__ */ jsx("div", {
		className: cn("text-xs font-medium text-text-quaternary", className),
		...rest,
		children: "·"
	});
};
/**
* Usage
* <SkeletonContainer>
*  <SkeletonRow>
*    <SkeletonRectangle className="w-96" />
*    <SkeletonPoint />
*    <SkeletonRectangle className="w-96" />
*  </SkeletonRow>
*  <SkeletonRow>
*    <SkeletonRectangle className="w-96" />
*  </SkeletonRow>
* <SkeletonRow>
*/
//#endregion
export { checkTaskStatus as a, SkeletonRow as i, SkeletonPoint as n, SkeletonRectangle as r, SkeletonContainer as t };
