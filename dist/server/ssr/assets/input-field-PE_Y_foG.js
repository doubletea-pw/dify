import { Mr as p, b as Ct, bn as Xt, ct as M6, k as Ek, sn as Ve, xt as P7 } from "./react-D5xHzNYo.js";
import "./i18next-CxGFEMD9.js";
import "./Trans-UjBkHktY.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { n as useBoolean, t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { a as useHover_default } from "./app-icon-DPKtAo3e.js";
import "./useKeyPress-DtHtlpBY.js";
import "./store-BCKZaSV6.js";
import "./dist-mUzjAi-W.js";
import "./utils-pMdyvQan.js";
import "./use-breakpoints-Ij85IgkK.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as Divider } from "./divider-DZD56ykp.js";
import { ct as useNodes, h as uniqBy, mt as useStoreApi, rt as getOutgoers } from "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import { Ot as BlockEnum, kt as ChangeType } from "./config-Dopncj5R.js";
import { n as isEqual, t as input_var_type_icon_default } from "./input-var-type-icon-DChWOuig.js";
import { Qn as useStore, V as useNodesSyncDraft, _n as findUsedVarNodes, ir as produce, jn as updateNodeVars, x as useToolIcon, zr as block_icon_default } from "./hooks-Bj_4KA1b.js";
import "./i18n-config-jsJ9YUFd.js";
import "./base-BuKAg6Le.js";
import "./src-BByrOQhU.js";
import "./utils-oRnrO3yr.js";
import "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./workflow-CULNEjcb.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import "./confirm-CKQP3hdx.js";
import { t as ActionButton } from "./action-button-BK9WUMzU.js";
import "./input-BOHL-qYi.js";
import "./switch-CFJdYxEh.js";
import "./loading-BryKikzY.js";
import "./dialog-DCCIZLOh.js";
import "./dayjs.min-CNlMkMP6.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import { n as badge_default } from "./credential-item-C22_bUSw.js";
import "./apps-b6zqLiv3.js";
import "./datasets-hfpkpjNW.js";
import "./use-base-DLpNl2rR.js";
import "./client-CLQTU2Oi.js";
import "./global-public-context-DpzzsplY.js";
import "./common-qRxT6xi0.js";
import "./i18n-lDm19WzR.js";
import "./useDebounceFn-Y4NS6c4S.js";
import "./checkbox-DTSgkYdc.js";
import "./textarea-Ngtow1st.js";
import "./constants-P0J540jJ.js";
import "./modal-context-CphlqvPm.js";
import "./config-DUQ_rYOW.js";
import "./provider-context-CToT0pwd.js";
import "./link-1R-efKLW.js";
import "./use-refresh-plugin-list-C8aKRYG-.js";
import "./use-triggers-DguQxV9N.js";
import "./other-sSUV3aYW.js";
import "./dynamic-6-R69YAE.js";
import "./workflow-Dbk_had1.js";
import "./fast-deep-equal-T8EktbR5.js";
import "./format-BCVnrx09.js";
import { r as Icon } from "./pipeline-EQygYMXw.js";
import "./hooks-BTelimHS.js";
import "./use-common-BJ1aZaXJ.js";
import "./popover-CTEbJchz.js";
import "./model-selector-ahzffqOG.js";
import "./dist-CGvyUAMR.js";
import "./use-theme-3YxPQV4B.js";
import "./model-name-DBTGJc7a.js";
import "./skeleton-Brd40zkS.js";
import "./alert-dialog-_9biHzKe.js";
import "./alertsAndFeedback-BpcdEYpr.js";
import "./amplitude-BnPDazhN.js";
import "./esm-CfW7DN4f.js";
import "./utils-Dh7W533Q.js";
import "./use-workflow-run-event-Bl1EmFYx.js";
import { t as require_dist } from "./dist-BcmQ9DaV.js";
import { t as remove_effect_var_confirm_default } from "./remove-effect-var-confirm-BGYVfUdV.js";
import { o as useInputFieldPanel } from "./hooks-BneekglK.js";
import * as React$1 from "react";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/rag-pipeline/components/panel/input-field/field-list/field-item.tsx
var import_dist = require_dist();
var FieldItem = ({ readonly, payload, index, onClickEdit, onRemove }) => {
	const { t } = useTranslation();
	const ref = useRef(null);
	const isHovering = useHover_default(ref);
	const handleOnClickEdit = useCallback((e) => {
		e.stopPropagation();
		if (readonly) return;
		onClickEdit(payload.variable);
	}, [
		onClickEdit,
		payload.variable,
		readonly
	]);
	const handleRemove = useCallback((e) => {
		e.stopPropagation();
		if (readonly) return;
		onRemove(index);
	}, [
		index,
		onRemove,
		readonly
	]);
	return /* @__PURE__ */ jsxs("div", {
		ref,
		className: cn("handle flex h-8 cursor-pointer items-center justify-between gap-x-1 rounded-lg border border-components-panel-border-subtle bg-components-panel-on-panel-item-bg py-1 pl-2 shadow-xs hover:shadow-sm", isHovering && !readonly ? "cursor-all-scroll pr-1" : "pr-2.5", readonly && "cursor-default"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex grow basis-0 items-center gap-x-1 overflow-hidden",
			children: [
				isHovering && !readonly ? /* @__PURE__ */ jsx(Ek, { className: "size-4 shrink-0 text-text-quaternary" }) : /* @__PURE__ */ jsx(Icon, { className: "size-4 shrink-0 text-text-accent" }),
				/* @__PURE__ */ jsx("div", {
					title: payload.variable,
					className: "system-sm-medium max-w-[130px] shrink-0 truncate text-text-secondary",
					children: payload.variable
				}),
				payload.label && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
					className: "system-xs-regular shrink-0 text-text-quaternary",
					children: "·"
				}), /* @__PURE__ */ jsx("div", {
					title: payload.label,
					className: "system-xs-medium grow truncate text-text-tertiary",
					children: payload.label
				})] })
			]
		}), isHovering && !readonly ? /* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 items-center gap-x-1",
			children: [/* @__PURE__ */ jsx(ActionButton, {
				className: "mr-1",
				onClick: handleOnClickEdit,
				children: /* @__PURE__ */ jsx(Ct, { className: "size-4 text-text-tertiary" })
			}), /* @__PURE__ */ jsx(ActionButton, {
				onClick: handleRemove,
				children: /* @__PURE__ */ jsx(M6, { className: "size-4 text-text-tertiary group-hover:text-text-destructive" })
			})]
		}) : /* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 items-center gap-x-2",
			children: [payload.required && /* @__PURE__ */ jsx(badge_default, { children: t("nodes.start.required", { ns: "workflow" }) }), /* @__PURE__ */ jsx(input_var_type_icon_default, {
				type: payload.type,
				className: "h-3 w-3 text-text-tertiary"
			})]
		})]
	});
};
var field_item_default = React$1.memo(FieldItem);
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/field-list/field-list-container.tsx
var FieldListContainer = ({ className, inputFields, onListSortChange, onRemoveField, onEditField, readonly }) => {
	const list = useMemo(() => {
		return inputFields.map((content) => {
			return {
				id: content.variable,
				chosen: false,
				selected: false,
				...content
			};
		});
	}, [inputFields]);
	const handleListSortChange = useCallback((newList) => {
		if (isEqual(newList, list)) return;
		onListSortChange(newList);
	}, [list, onListSortChange]);
	return /* @__PURE__ */ jsx(import_dist.ReactSortable, {
		className: cn(className),
		list,
		setList: handleListSortChange,
		handle: ".handle",
		ghostClass: "opacity-50",
		animation: 150,
		disabled: readonly,
		children: inputFields?.map((item, index) => /* @__PURE__ */ jsx(field_item_default, {
			index,
			readonly,
			payload: item,
			onRemove: onRemoveField,
			onClickEdit: onEditField
		}, index))
	});
};
var field_list_container_default = memo(FieldListContainer);
//#endregion
//#region app/components/rag-pipeline/hooks/use-pipeline.tsx
var usePipeline = () => {
	const store = useStoreApi();
	const getAllDatasourceNodes = useCallback(() => {
		const { getNodes } = store.getState();
		return getNodes().filter((node) => node.data.type === BlockEnum.DataSource);
	}, [store]);
	const getAllNodesInSameBranch = useCallback((nodeId) => {
		const { getNodes, edges } = store.getState();
		const nodes = getNodes();
		const list = [];
		const traverse = (root, callback) => {
			if (root) {
				const outgoers = getOutgoers(root, nodes, edges);
				if (outgoers.length) outgoers.forEach((node) => {
					callback(node);
					traverse(node, callback);
				});
			}
		};
		if (nodeId === "shared") {
			const allDatasourceNodes = getAllDatasourceNodes();
			if (allDatasourceNodes.length === 0) return [];
			list.push(...allDatasourceNodes);
			allDatasourceNodes.forEach((node) => {
				traverse(node, (childNode) => {
					list.push(childNode);
				});
			});
		} else {
			const currentNode = nodes.find((node) => node.id === nodeId);
			if (!currentNode) return [];
			list.push(currentNode);
			traverse(currentNode, (node) => {
				list.push(node);
			});
		}
		return uniqBy(list, "id");
	}, [getAllDatasourceNodes, store]);
	const isVarUsedInNodes = useCallback((varSelector) => {
		const nodeId = varSelector[1];
		return findUsedVarNodes(varSelector, getAllNodesInSameBranch(nodeId)).length > 0;
	}, [getAllNodesInSameBranch]);
	return {
		handleInputVarRename: useCallback((nodeId, oldValeSelector, newVarSelector) => {
			const { getNodes, setNodes } = store.getState();
			const effectNodes = findUsedVarNodes(oldValeSelector, getAllNodesInSameBranch(nodeId));
			if (effectNodes.length > 0) setNodes(getNodes().map((node) => {
				if (effectNodes.find((n) => n.id === node.id)) return updateNodeVars(node, oldValeSelector, newVarSelector);
				return node;
			}));
		}, [getAllNodesInSameBranch, store]),
		isVarUsedInNodes,
		removeUsedVarInNodes: useCallback((varSelector) => {
			const nodeId = varSelector[1];
			const { getNodes, setNodes } = store.getState();
			const effectNodes = findUsedVarNodes(varSelector, getAllNodesInSameBranch(nodeId));
			if (effectNodes.length > 0) setNodes(getNodes().map((node) => {
				if (effectNodes.find((n) => n.id === node.id)) return updateNodeVars(node, varSelector, []);
				return node;
			}));
		}, [getAllNodesInSameBranch, store])
	};
};
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/field-list/hooks.ts
var VARIABLE_PREFIX = "rag";
var useFieldList = ({ initialInputFields, onInputFieldsChange, nodeId, allVariableNames }) => {
	const { t } = useTranslation();
	const { toggleInputFieldEditPanel } = useInputFieldPanel();
	const [inputFields, setInputFields] = useState(initialInputFields);
	const inputFieldsRef = useRef(inputFields);
	const [removedVar, setRemovedVar] = useState([]);
	const [removedIndex, setRemoveIndex] = useState(0);
	const { handleInputVarRename, isVarUsedInNodes, removeUsedVarInNodes } = usePipeline();
	const [isShowRemoveVarConfirm, { setTrue: showRemoveVarConfirm, setFalse: hideRemoveVarConfirm }] = useBoolean(false);
	const handleInputFieldsChange = useCallback((newInputFields) => {
		setInputFields(newInputFields);
		inputFieldsRef.current = newInputFields;
		onInputFieldsChange(newInputFields);
	}, [onInputFieldsChange]);
	const handleListSortChange = useCallback((list) => {
		handleInputFieldsChange(list.map((item) => {
			const { id: _id, chosen: _chosen, selected: _selected, ...filed } = item;
			return filed;
		}));
	}, [handleInputFieldsChange]);
	const editingFieldIndex = useRef(-1);
	const handleCloseInputFieldEditor = useCallback(() => {
		toggleInputFieldEditPanel?.(null);
		editingFieldIndex.current = -1;
	}, [toggleInputFieldEditPanel]);
	const handleRemoveField = useCallback((index) => {
		const itemToRemove = inputFieldsRef.current[index];
		if (isVarUsedInNodes([
			VARIABLE_PREFIX,
			nodeId,
			itemToRemove.variable || ""
		])) {
			showRemoveVarConfirm();
			setRemovedVar([
				VARIABLE_PREFIX,
				nodeId,
				itemToRemove.variable || ""
			]);
			setRemoveIndex(index);
			return;
		}
		handleInputFieldsChange(inputFieldsRef.current.filter((_, i) => i !== index));
	}, [
		handleInputFieldsChange,
		isVarUsedInNodes,
		nodeId,
		showRemoveVarConfirm
	]);
	const onRemoveVarConfirm = useCallback(() => {
		handleInputFieldsChange(inputFieldsRef.current.filter((_, i) => i !== removedIndex));
		removeUsedVarInNodes(removedVar);
		hideRemoveVarConfirm();
	}, [
		removedIndex,
		handleInputFieldsChange,
		removeUsedVarInNodes,
		removedVar,
		hideRemoveVarConfirm
	]);
	const handleSubmitField = useCallback((data, moreInfo) => {
		if (allVariableNames.some((name) => name === data.variable && name !== inputFieldsRef.current[editingFieldIndex.current]?.variable)) {
			Toast.notify({
				type: "error",
				message: t("inputFieldPanel.error.variableDuplicate", { ns: "datasetPipeline" })
			});
			return;
		}
		handleInputFieldsChange(produce(inputFieldsRef.current, (draft) => {
			const currentIndex = editingFieldIndex.current;
			if (currentIndex === -1) {
				draft.push(data);
				return;
			}
			draft[currentIndex] = data;
		}));
		if (moreInfo?.type === ChangeType.changeVarName) handleInputVarRename(nodeId, [
			VARIABLE_PREFIX,
			nodeId,
			moreInfo.payload?.beforeKey || ""
		], [
			VARIABLE_PREFIX,
			nodeId,
			moreInfo.payload?.afterKey || ""
		]);
		handleCloseInputFieldEditor();
	}, [
		allVariableNames,
		handleCloseInputFieldEditor,
		handleInputFieldsChange,
		handleInputVarRename,
		nodeId,
		t
	]);
	return {
		inputFields,
		handleListSortChange,
		handleRemoveField,
		handleOpenInputFieldEditor: useCallback((id) => {
			const index = inputFieldsRef.current.findIndex((field) => field.variable === id);
			editingFieldIndex.current = index;
			toggleInputFieldEditPanel?.({
				onClose: handleCloseInputFieldEditor,
				onSubmit: handleSubmitField,
				initialData: inputFieldsRef.current[index]
			});
		}, []),
		isShowRemoveVarConfirm,
		hideRemoveVarConfirm,
		onRemoveVarConfirm
	};
};
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/field-list/index.tsx
var FieldList = ({ nodeId, LabelRightContent, inputFields: initialInputFields, handleInputFieldsChange, readonly, labelClassName, allVariableNames }) => {
	const { inputFields, handleListSortChange, handleRemoveField, handleOpenInputFieldEditor, isShowRemoveVarConfirm, hideRemoveVarConfirm, onRemoveVarConfirm } = useFieldList({
		initialInputFields,
		onInputFieldsChange: useCallback((value) => {
			handleInputFieldsChange(nodeId, value);
		}, [handleInputFieldsChange, nodeId]),
		nodeId,
		allVariableNames
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: cn("flex items-center gap-x-2 px-4", labelClassName),
				children: [/* @__PURE__ */ jsx("div", {
					className: "grow",
					children: LabelRightContent
				}), /* @__PURE__ */ jsx(ActionButton, {
					"data-testid": "field-list-add-btn",
					onClick: () => handleOpenInputFieldEditor(),
					disabled: readonly,
					className: cn(readonly && "cursor-not-allowed"),
					children: /* @__PURE__ */ jsx(p, { className: "h-4 w-4 text-text-tertiary" })
				})]
			}),
			/* @__PURE__ */ jsx(field_list_container_default, {
				className: "flex flex-col gap-y-1 px-4 pb-1",
				inputFields,
				onEditField: handleOpenInputFieldEditor,
				onRemoveField: handleRemoveField,
				onListSortChange: handleListSortChange,
				readonly
			}),
			/* @__PURE__ */ jsx(remove_effect_var_confirm_default, {
				isShow: isShowRemoveVarConfirm,
				onCancel: hideRemoveVarConfirm,
				onConfirm: onRemoveVarConfirm
			})
		]
	});
};
var field_list_default = React$1.memo(FieldList);
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/footer-tip.tsx
var FooterTip = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex shrink-0 items-center justify-center gap-x-2 py-4 text-text-quaternary",
		children: [/* @__PURE__ */ jsx(Ve, { className: "size-4" }), /* @__PURE__ */ jsx("span", {
			className: "system-xs-regular",
			children: "Drag to adjust grouping"
		})]
	});
};
var footer_tip_default = React$1.memo(FooterTip);
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/label-right-content/datasource.tsx
var Datasource = ({ nodeData }) => {
	const toolIcon = useToolIcon(nodeData);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-x-1.5",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex size-5 items-center justify-center rounded-md border-[0.5px] border-components-panel-border-subtle bg-background-default",
			children: /* @__PURE__ */ jsx(block_icon_default, {
				className: "size-3.5",
				type: BlockEnum.DataSource,
				toolIcon
			})
		}), /* @__PURE__ */ jsx("span", {
			className: "system-sm-medium text-text-secondary",
			children: nodeData.title
		})]
	});
};
var datasource_default = React$1.memo(Datasource);
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/label-right-content/global-inputs.tsx
var GlobalInputs = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-x-1",
		children: [/* @__PURE__ */ jsx("span", {
			className: "system-sm-semibold-uppercase text-text-secondary",
			children: t("inputFieldPanel.globalInputs.title", { ns: "datasetPipeline" })
		}), /* @__PURE__ */ jsx(tooltip_default, {
			popupContent: t("inputFieldPanel.globalInputs.tooltip", { ns: "datasetPipeline" }),
			popupClassName: "w-[240px]"
		})]
	});
};
var global_inputs_default = React$1.memo(GlobalInputs);
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/index.tsx
var InputFieldPanel = () => {
	const { t } = useTranslation();
	const nodes = useNodes();
	const { closeAllInputFieldPanels, toggleInputFieldPreviewPanel, isPreviewing, isEditing } = useInputFieldPanel();
	const ragPipelineVariables = useStore((state) => state.ragPipelineVariables);
	const setRagPipelineVariables = useStore((state) => state.setRagPipelineVariables);
	const getInputFieldsMap = () => {
		const inputFieldsMap = {};
		ragPipelineVariables?.forEach((variable) => {
			const { belong_to_node_id: nodeId, ...varConfig } = variable;
			if (inputFieldsMap[nodeId]) inputFieldsMap[nodeId].push(varConfig);
			else inputFieldsMap[nodeId] = [varConfig];
		});
		return inputFieldsMap;
	};
	const inputFieldsMap = useRef(getInputFieldsMap());
	const { handleSyncWorkflowDraft } = useNodesSyncDraft();
	const datasourceNodeDataMap = useMemo(() => {
		const datasourceNodeDataMap = {};
		nodes.filter((node) => node.data.type === BlockEnum.DataSource).forEach((node) => {
			const { id, data } = node;
			datasourceNodeDataMap[id] = data;
		});
		return datasourceNodeDataMap;
	}, [nodes]);
	const updateInputFields = useCallback(async (key, value) => {
		inputFieldsMap.current[key] = value;
		const datasourceNodeInputFields = [];
		const globalInputFields = [];
		Object.keys(inputFieldsMap.current).forEach((key) => {
			inputFieldsMap.current[key].forEach((inputField) => {
				if (key === "shared") globalInputFields.push({
					...inputField,
					belong_to_node_id: key
				});
				else datasourceNodeInputFields.push({
					...inputField,
					belong_to_node_id: key
				});
			});
		});
		const newRagPipelineVariables = [...datasourceNodeInputFields, ...globalInputFields];
		setRagPipelineVariables?.(newRagPipelineVariables);
		handleSyncWorkflowDraft();
	}, [setRagPipelineVariables, handleSyncWorkflowDraft]);
	const closePanel = useCallback(() => {
		closeAllInputFieldPanels();
	}, [closeAllInputFieldPanels]);
	const togglePreviewPanel = useCallback(() => {
		toggleInputFieldPreviewPanel();
	}, [toggleInputFieldPreviewPanel]);
	const allVariableNames = useMemo(() => {
		return ragPipelineVariables?.map((variable) => variable.variable) || [];
	}, [ragPipelineVariables]);
	return /* @__PURE__ */ jsxs("div", {
		className: "mr-1 flex h-full w-[400px] flex-col rounded-2xl border-y-[0.5px] border-l-[0.5px] border-components-panel-border bg-components-panel-bg-alt shadow-xl shadow-shadow-shadow-5",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center p-4 pb-0",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "system-xl-semibold grow text-text-primary",
						children: t("inputFieldPanel.title", { ns: "datasetPipeline" })
					}),
					/* @__PURE__ */ jsxs(Button, {
						variant: "ghost",
						size: "small",
						className: cn("shrink-0 gap-x-px px-1.5", isPreviewing && "bg-state-accent-active text-text-accent"),
						onClick: togglePreviewPanel,
						disabled: isEditing,
						children: [/* @__PURE__ */ jsx(Xt, { className: "size-3.5" }), /* @__PURE__ */ jsx("span", {
							className: "px-[3px]",
							children: t("operations.preview", { ns: "datasetPipeline" })
						})]
					}),
					/* @__PURE__ */ jsx(Divider, {
						type: "vertical",
						className: "mx-1 h-3"
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						className: "flex size-6 shrink-0 items-center justify-center p-0.5",
						onClick: closePanel,
						children: /* @__PURE__ */ jsx(P7, { className: "size-4 text-text-tertiary" })
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "system-sm-regular shrink-0 px-4 pb-2 pt-1 text-text-tertiary",
				children: t("inputFieldPanel.description", { ns: "datasetPipeline" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex grow flex-col overflow-y-auto",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex h-6 items-center gap-x-0.5 px-4 pt-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "system-sm-semibold-uppercase text-text-secondary",
							children: t("inputFieldPanel.uniqueInputs.title", { ns: "datasetPipeline" })
						}), /* @__PURE__ */ jsx(tooltip_default, {
							popupContent: t("inputFieldPanel.uniqueInputs.tooltip", { ns: "datasetPipeline" }),
							popupClassName: "max-w-[240px]"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-col gap-y-1 py-1",
						children: Object.keys(datasourceNodeDataMap).map((key) => {
							const inputFields = inputFieldsMap.current[key] || [];
							return /* @__PURE__ */ jsx(field_list_default, {
								nodeId: key,
								LabelRightContent: /* @__PURE__ */ jsx(datasource_default, { nodeData: datasourceNodeDataMap[key] }),
								inputFields,
								readonly: isPreviewing || isEditing,
								labelClassName: "pt-1 pb-1",
								handleInputFieldsChange: updateInputFields,
								allVariableNames
							}, key);
						})
					}),
					/* @__PURE__ */ jsx(field_list_default, {
						nodeId: "shared",
						LabelRightContent: /* @__PURE__ */ jsx(global_inputs_default, {}),
						inputFields: inputFieldsMap.current.shared || [],
						readonly: isPreviewing || isEditing,
						labelClassName: "pt-2 pb-1",
						handleInputFieldsChange: updateInputFields,
						allVariableNames
					})
				]
			}),
			/* @__PURE__ */ jsx(footer_tip_default, {})
		]
	});
};
var input_field_default = memo(InputFieldPanel);
//#endregion
export { input_field_default as default };
