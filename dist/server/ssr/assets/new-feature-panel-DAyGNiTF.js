import { o as usePathname, s as useRouter } from "../index.js";
import { At as QM, b as Ct, c as AD, hn as Wt, or as ga, ot as Ky, un as WA, xt as P7 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { n as useBoolean, t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { u as ModelTypeEnum } from "./declarations-DYMEe7hD.js";
import { Lt as SupportUploadFileTypes, i as ANNOTATION_DEFAULT, kt as ChangeType } from "./config-Dopncj5R.js";
import { F as useInspectVarsCrud, G as useNodesReadOnly, H as useIsChatMode, K as useWorkflow, P as useNodeDataUpdate, ir as produce, nn as Slider } from "./hooks-Bj_4KA1b.js";
import { T as toast, sn as sleep } from "./base-BuKAg6Le.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as switch_default } from "./switch-CFJdYxEh.js";
import { a as Ke, i as ze, o as Oe, r as ht } from "./dialog-DCCIZLOh.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import { d as TtsAutoPlay } from "./app-DPjSIfgb.js";
import { f as FILE_EXTS, s as hasDuplicateStr } from "./var-DPpHtpXT.js";
import { n as badge_default } from "./credential-item-C22_bUSw.js";
import { a as useLocale, u as languages } from "./i18n-lDm19WzR.js";
import { n as useModalContext } from "./modal-context-CphlqvPm.js";
import { n as useProviderContext } from "./provider-context-CToT0pwd.js";
import { c as useModelListAndDefaultModelAndCurrentProviderAndModel, n as useDefaultModel } from "./hooks-BTelimHS.js";
import { r as useCodeBasedExtensions } from "./use-common-BJ1aZaXJ.js";
import { t as ModelSelector } from "./model-selector-ahzffqOG.js";
import { i as FeatureEnum } from "./tag-input-9kTFEfAj.js";
import { n as useFeatures, r as useFeaturesStore } from "./audio.player.manager-BbxYn4nN.js";
import { t as file_upload_setting_default } from "./file-upload-setting-jLgSbj6D.js";
import { h as updateAnnotationStatus, p as queryAnnotationJobStatus } from "./annotation-D2xI61pO.js";
import { a as Icon, d as voice_settings_default, i as Icon$6, l as Icon$5, n as Icon$4, o as Icon$2, r as Icon$7, s as Icon$3, u as Icon$1 } from "./features-D2eB-UM8.js";
import { t as modal_default } from "./modal-ERomWYuW.js";
import * as React$1 from "react";
import { Fragment, memo, useCallback, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow/nodes/_base/hooks/use-node-crud.ts
var useNodeCrud = (id, data) => {
	const { handleNodeDataUpdateWithSyncDraft } = useNodeDataUpdate();
	const setInputs = (newInputs) => {
		handleNodeDataUpdateWithSyncDraft({
			id,
			data: newInputs
		});
	};
	return {
		inputs: data,
		setInputs
	};
};
//#endregion
//#region app/components/workflow/nodes/start/use-config.ts
var useConfig = (id, payload) => {
	const { t } = useTranslation();
	const { nodesReadOnly: readOnly } = useNodesReadOnly();
	const { handleOutVarRenameChange, isVarUsedInNodes, removeUsedVarInNodes } = useWorkflow();
	const isChatMode = useIsChatMode();
	const { inputs, setInputs } = useNodeCrud(id, payload);
	const { deleteNodeInspectorVars, renameInspectVarName, nodesWithInspectVars, deleteInspectVar } = useInspectVarsCrud();
	const [isShowAddVarModal, { setTrue: showAddVarModal, setFalse: hideAddVarModal }] = useBoolean(false);
	const [isShowRemoveVarConfirm, { setTrue: showRemoveVarConfirm, setFalse: hideRemoveVarConfirm }] = useBoolean(false);
	const [removedVar, setRemovedVar] = useState([]);
	const [removedIndex, setRemoveIndex] = useState(0);
	const handleVarListChange = useCallback((newList, moreInfo) => {
		if (moreInfo?.payload?.type === ChangeType.remove) {
			const varId = nodesWithInspectVars.find((node) => node.nodeId === id)?.vars.find((varItem) => {
				return varItem.name === moreInfo?.payload?.payload?.beforeKey;
			})?.id;
			if (varId) deleteInspectVar(id, varId);
			if (isVarUsedInNodes([id, moreInfo?.payload?.payload?.beforeKey || ""])) {
				showRemoveVarConfirm();
				setRemovedVar([id, moreInfo?.payload?.payload?.beforeKey || ""]);
				setRemoveIndex(moreInfo?.index);
				return;
			}
		}
		setInputs(produce(inputs, (draft) => {
			draft.variables = newList;
		}));
		if (moreInfo?.payload?.type === ChangeType.changeVarName) {
			const changedVar = newList[moreInfo.index];
			handleOutVarRenameChange(id, [id, inputs.variables[moreInfo.index].variable], [id, changedVar.variable]);
			renameInspectVarName(id, inputs.variables[moreInfo.index].variable, changedVar.variable);
		} else if (moreInfo?.payload?.type !== ChangeType.remove) deleteNodeInspectorVars(id);
	}, [
		deleteInspectVar,
		deleteNodeInspectorVars,
		handleOutVarRenameChange,
		id,
		inputs,
		isVarUsedInNodes,
		nodesWithInspectVars,
		renameInspectVarName,
		setInputs,
		showRemoveVarConfirm
	]);
	const removeVarInNode = useCallback(() => {
		setInputs(produce(inputs, (draft) => {
			draft.variables.splice(removedIndex, 1);
		}));
		removeUsedVarInNodes(removedVar);
		hideRemoveVarConfirm();
	}, [
		hideRemoveVarConfirm,
		inputs,
		removeUsedVarInNodes,
		removedIndex,
		removedVar,
		setInputs
	]);
	return {
		readOnly,
		isChatMode,
		inputs,
		isShowAddVarModal,
		showAddVarModal,
		hideAddVarModal,
		handleVarListChange,
		handleAddVariable: useCallback((payload) => {
			const newInputs = produce(inputs, (draft) => {
				draft.variables.push(payload);
			});
			const newList = newInputs.variables;
			let errorMsgKey = "";
			let typeName = "";
			if (hasDuplicateStr(newList.map((item) => item.variable))) {
				errorMsgKey = "varKeyError.keyAlreadyExists";
				typeName = "variableConfig.varName";
			} else if (hasDuplicateStr(newList.map((item) => item.label))) {
				errorMsgKey = "varKeyError.keyAlreadyExists";
				typeName = "variableConfig.labelName";
			}
			if (errorMsgKey && typeName) {
				toast.error(t(errorMsgKey, {
					ns: "appDebug",
					key: t(typeName, { ns: "appDebug" })
				}));
				return false;
			}
			setInputs(newInputs);
			return true;
		}, [inputs, setInputs]),
		isShowRemoveVarConfirm,
		hideRemoveVarConfirm,
		onRemoveVarConfirm: removeVarInNode
	};
};
//#endregion
//#region app/components/base/features/new-feature-panel/annotation-reply/config-param.tsx
var Item = ({ title, tooltip, children }) => {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
		className: "mb-1 flex items-center space-x-1",
		children: [/* @__PURE__ */ jsx("div", {
			className: "py-1 text-text-secondary system-sm-semibold",
			children: title
		}), /* @__PURE__ */ jsx(tooltip_default, { popupContent: /* @__PURE__ */ jsx("div", {
			className: "max-w-[200px] text-text-secondary system-sm-regular",
			children: tooltip
		}) })]
	}), /* @__PURE__ */ jsx("div", { children })] });
};
//#endregion
//#region app/components/base/features/new-feature-panel/annotation-reply/score-slider/index.tsx
var clamp = (value, min, max) => {
	if (!Number.isFinite(value)) return min;
	return Math.min(Math.max(value, min), max);
};
var ScoreSlider = ({ className, value, onChange }) => {
	const { t } = useTranslation();
	const safeValue = clamp(value, 80, 100);
	return /* @__PURE__ */ jsxs("div", {
		className,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative mt-[14px]",
			children: [/* @__PURE__ */ jsx(Slider, {
				className: "w-full",
				value: safeValue,
				min: 80,
				max: 100,
				step: 1,
				onValueChange: onChange,
				"aria-label": t("feature.annotation.scoreThreshold.title", { ns: "appDebug" })
			}), /* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute top-[-16px] text-text-primary system-sm-semibold",
				style: {
					left: `calc(4px + ${(safeValue - 80) / 20} * (100% - 8px))`,
					transform: "translateX(-50%)"
				},
				children: (safeValue / 100).toFixed(2)
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-[10px] flex items-center justify-between system-xs-semibold-uppercase",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex space-x-1 text-util-colors-cyan-cyan-500",
				children: [
					/* @__PURE__ */ jsx("div", { children: "0.8" }),
					/* @__PURE__ */ jsx("div", { children: "·" }),
					/* @__PURE__ */ jsx("div", { children: t("feature.annotation.scoreThreshold.easyMatch", { ns: "appDebug" }) })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex space-x-1 text-util-colors-blue-blue-500",
				children: [
					/* @__PURE__ */ jsx("div", { children: "1.0" }),
					/* @__PURE__ */ jsx("div", { children: "·" }),
					/* @__PURE__ */ jsx("div", { children: t("feature.annotation.scoreThreshold.accurateMatch", { ns: "appDebug" }) })
				]
			})]
		})]
	});
};
var score_slider_default = React$1.memo(ScoreSlider);
//#endregion
//#region app/components/base/features/new-feature-panel/annotation-reply/config-param-modal.tsx
var ConfigParamModal = ({ isShow, onHide: doHide, onSave, isInit, annotationConfig: oldAnnotationConfig }) => {
	const { t } = useTranslation();
	const { modelList: embeddingsModelList, defaultModel: embeddingsDefaultModel, currentModel: isEmbeddingsDefaultModelValid } = useModelListAndDefaultModelAndCurrentProviderAndModel(ModelTypeEnum.textEmbedding);
	const [annotationConfig, setAnnotationConfig] = useState(oldAnnotationConfig);
	const [isLoading, setLoading] = useState(false);
	const [embeddingModel, setEmbeddingModel] = useState(oldAnnotationConfig.embedding_model ? {
		providerName: oldAnnotationConfig.embedding_model.embedding_provider_name,
		modelName: oldAnnotationConfig.embedding_model.embedding_model_name
	} : embeddingsDefaultModel ? {
		providerName: embeddingsDefaultModel.provider.provider,
		modelName: embeddingsDefaultModel.model
	} : void 0);
	const onHide = () => {
		if (!isLoading) doHide();
	};
	const handleSave = async () => {
		if (!embeddingModel || !embeddingModel.modelName || embeddingModel.modelName === embeddingsDefaultModel?.model && !isEmbeddingsDefaultModelValid) {
			Toast.notify({
				message: t("modelProvider.embeddingModel.required", { ns: "common" }),
				type: "error"
			});
			return;
		}
		setLoading(true);
		await onSave({
			embedding_provider_name: embeddingModel.providerName,
			embedding_model_name: embeddingModel.modelName
		}, annotationConfig.score_threshold);
		setLoading(false);
	};
	return /* @__PURE__ */ jsxs(Modal, {
		isShow,
		onClose: onHide,
		className: "!mt-14 !w-[640px] !max-w-none !p-6",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mb-2 text-text-primary title-2xl-semi-bold",
				children: t(`initSetup.${isInit ? "title" : "configTitle"}`, { ns: "appAnnotation" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 space-y-3",
				children: [/* @__PURE__ */ jsx(Item, {
					title: t("feature.annotation.scoreThreshold.title", { ns: "appDebug" }),
					tooltip: t("feature.annotation.scoreThreshold.description", { ns: "appDebug" }),
					children: /* @__PURE__ */ jsx(score_slider_default, {
						className: "mt-1",
						value: (annotationConfig.score_threshold || ANNOTATION_DEFAULT.score_threshold) * 100,
						onChange: (val) => {
							setAnnotationConfig({
								...annotationConfig,
								score_threshold: val / 100
							});
						}
					})
				}), /* @__PURE__ */ jsx(Item, {
					title: t("modelProvider.embeddingModel.key", { ns: "common" }),
					tooltip: t("embeddingModelSwitchTip", { ns: "appAnnotation" }),
					children: /* @__PURE__ */ jsx("div", {
						className: "pt-1",
						children: /* @__PURE__ */ jsx(ModelSelector, {
							defaultModel: embeddingModel && {
								provider: embeddingModel.providerName,
								model: embeddingModel.modelName
							},
							modelList: embeddingsModelList,
							onSelect: (val) => {
								setEmbeddingModel({
									providerName: val.provider,
									modelName: val.model
								});
							}
						})
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 flex justify-end gap-2",
				children: [/* @__PURE__ */ jsx(Button, {
					onClick: onHide,
					children: t("operation.cancel", { ns: "common" })
				}), /* @__PURE__ */ jsxs(Button, {
					variant: "primary",
					onClick: handleSave,
					loading: isLoading,
					children: [/* @__PURE__ */ jsx("div", {}), /* @__PURE__ */ jsx("div", { children: t(`initSetup.${isInit ? "confirmBtn" : "configConfirmBtn"}`, { ns: "appAnnotation" }) })]
				})]
			})
		]
	});
};
var config_param_modal_default = React$1.memo(ConfigParamModal);
//#endregion
//#region app/components/app/annotation/type.ts
var AnnotationEnableStatus = /* @__PURE__ */ function(AnnotationEnableStatus) {
	AnnotationEnableStatus["enable"] = "enable";
	AnnotationEnableStatus["disable"] = "disable";
	return AnnotationEnableStatus;
}({});
var JobStatus = /* @__PURE__ */ function(JobStatus) {
	JobStatus["waiting"] = "waiting";
	JobStatus["processing"] = "processing";
	JobStatus["completed"] = "completed";
	return JobStatus;
}({});
//#endregion
//#region app/components/base/features/new-feature-panel/annotation-reply/use-annotation-config.ts
var useAnnotationConfig = ({ appId, annotationConfig, setAnnotationConfig }) => {
	const { plan, enableBilling } = useProviderContext();
	const isAnnotationFull = enableBilling && plan.usage.annotatedResponse >= plan.total.annotatedResponse;
	const [isShowAnnotationFullModal, setIsShowAnnotationFullModal] = useState(false);
	const [isShowAnnotationConfigInit, doSetIsShowAnnotationConfigInit] = React$1.useState(false);
	const setIsShowAnnotationConfigInit = (isShow) => {
		if (isShow) {
			if (isAnnotationFull) {
				setIsShowAnnotationFullModal(true);
				return;
			}
		}
		doSetIsShowAnnotationConfigInit(isShow);
	};
	const ensureJobCompleted = async (jobId, status) => {
		let isCompleted = false;
		while (!isCompleted) {
			isCompleted = (await queryAnnotationJobStatus(appId, status, jobId)).job_status === JobStatus.completed;
			if (isCompleted) break;
			await sleep(2e3);
		}
	};
	const handleEnableAnnotation = async (embeddingModel, score) => {
		if (isAnnotationFull) return;
		const { job_id: jobId } = await updateAnnotationStatus(appId, AnnotationEnableStatus.enable, embeddingModel, score);
		await ensureJobCompleted(jobId, AnnotationEnableStatus.enable);
		setAnnotationConfig(produce(annotationConfig, (draft) => {
			draft.enabled = true;
			draft.embedding_model = embeddingModel;
			if (!draft.score_threshold) draft.score_threshold = ANNOTATION_DEFAULT.score_threshold;
		}));
	};
	const setScore = (score, embeddingModel) => {
		setAnnotationConfig(produce(annotationConfig, (draft) => {
			draft.score_threshold = score;
			if (embeddingModel) draft.embedding_model = embeddingModel;
		}));
	};
	const handleDisableAnnotation = async (embeddingModel) => {
		if (!annotationConfig.enabled) return;
		await updateAnnotationStatus(appId, AnnotationEnableStatus.disable, embeddingModel);
		setAnnotationConfig(produce(annotationConfig, (draft) => {
			draft.enabled = false;
		}));
	};
	return {
		handleEnableAnnotation,
		handleDisableAnnotation,
		isShowAnnotationConfigInit,
		setIsShowAnnotationConfigInit,
		isShowAnnotationFullModal,
		setIsShowAnnotationFullModal,
		setScore
	};
};
//#endregion
//#region app/components/base/features/new-feature-panel/feature-card.tsx
var FeatureCard = ({ icon, title, tooltip, value, description, children, disabled, onChange, onMouseEnter, onMouseLeave }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-1 rounded-xl border-l-[0.5px] border-t-[0.5px] border-effects-highlight bg-background-section-burn p-3",
		onMouseEnter,
		onMouseLeave,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mb-2 flex items-center gap-2",
				children: [
					icon,
					/* @__PURE__ */ jsxs("div", {
						className: "system-sm-semibold flex grow items-center text-text-secondary",
						children: [title, tooltip && /* @__PURE__ */ jsx(tooltip_default, {
							popupContent: tooltip,
							children: /* @__PURE__ */ jsx("div", {
								className: "ml-0.5 p-px",
								children: /* @__PURE__ */ jsx(QM, { className: "h-3.5 w-3.5 text-text-quaternary" })
							})
						})]
					}),
					/* @__PURE__ */ jsx(switch_default, {
						disabled,
						className: "shrink-0",
						onChange: (state) => onChange?.(state),
						value
					})
				]
			}),
			description && /* @__PURE__ */ jsx("div", {
				className: "system-xs-regular line-clamp-2 min-h-8 text-text-tertiary",
				children: description
			}),
			children
		]
	});
};
//#endregion
//#region app/components/base/features/new-feature-panel/annotation-reply/index.tsx
var AnnotationReply = ({ disabled, onChange }) => {
	const { t } = useTranslation();
	const router = useRouter();
	const pathname = usePathname();
	const matched = /\/app\/([^/]+)/.exec(pathname);
	const appId = matched?.length && matched[1] ? matched[1] : "";
	const featuresStore = useFeaturesStore();
	const annotationReply = useFeatures((s) => s.features.annotationReply);
	const updateAnnotationReply = useCallback((newConfig) => {
		const { features, setFeatures } = featuresStore.getState();
		const newFeatures = produce(features, (draft) => {
			draft.annotationReply = newConfig;
		});
		setFeatures(newFeatures);
		if (onChange) onChange(newFeatures);
	}, [featuresStore, onChange]);
	const { handleEnableAnnotation, handleDisableAnnotation, isShowAnnotationConfigInit, setIsShowAnnotationConfigInit, isShowAnnotationFullModal, setIsShowAnnotationFullModal } = useAnnotationConfig({
		appId,
		annotationConfig: annotationReply || {
			id: "",
			enabled: false,
			score_threshold: ANNOTATION_DEFAULT.score_threshold,
			embedding_model: {
				embedding_provider_name: "",
				embedding_model_name: ""
			}
		},
		setAnnotationConfig: updateAnnotationReply
	});
	const handleSwitch = useCallback((enabled) => {
		if (enabled) setIsShowAnnotationConfigInit(true);
		else handleDisableAnnotation(annotationReply?.embedding_model);
	}, [
		annotationReply?.embedding_model,
		handleDisableAnnotation,
		setIsShowAnnotationConfigInit
	]);
	const [isHovering, setIsHovering] = useState(false);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(FeatureCard, {
			icon: /* @__PURE__ */ jsx("div", {
				className: "shrink-0 rounded-lg border-[0.5px] border-divider-subtle bg-util-colors-indigo-indigo-600 p-1 shadow-xs",
				children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-text-primary-on-surface" })
			}),
			title: t("feature.annotation.title", { ns: "appDebug" }),
			value: !!annotationReply?.enabled,
			onChange: (state) => handleSwitch(state),
			onMouseEnter: () => setIsHovering(true),
			onMouseLeave: () => setIsHovering(false),
			disabled,
			children: /* @__PURE__ */ jsxs(Fragment$1, { children: [!annotationReply?.enabled && /* @__PURE__ */ jsx("div", {
				className: "line-clamp-2 min-h-8 text-text-tertiary system-xs-regular",
				children: t("feature.annotation.description", { ns: "appDebug" })
			}), !!annotationReply?.enabled && /* @__PURE__ */ jsxs(Fragment$1, { children: [!isHovering && /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-4 pt-0.5",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "",
						children: [/* @__PURE__ */ jsx("div", {
							className: "mb-0.5 text-text-tertiary system-2xs-medium-uppercase",
							children: t("feature.annotation.scoreThreshold.title", { ns: "appDebug" })
						}), /* @__PURE__ */ jsx("div", {
							className: "text-text-secondary system-xs-regular",
							children: annotationReply.score_threshold || "-"
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "h-[27px] w-px rotate-12 bg-divider-subtle" }),
					/* @__PURE__ */ jsxs("div", {
						className: "",
						children: [/* @__PURE__ */ jsx("div", {
							className: "mb-0.5 text-text-tertiary system-2xs-medium-uppercase",
							children: t("modelProvider.embeddingModel.key", { ns: "common" })
						}), /* @__PURE__ */ jsx("div", {
							className: "text-text-secondary system-xs-regular",
							children: annotationReply.embedding_model?.embedding_model_name
						})]
					})
				]
			}), isHovering && /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsxs(Button, {
					className: "w-[178px]",
					onClick: () => setIsShowAnnotationConfigInit(true),
					disabled,
					children: [/* @__PURE__ */ jsx(AD, { className: "mr-1 h-4 w-4" }), t("operation.params", { ns: "common" })]
				}), /* @__PURE__ */ jsxs(Button, {
					className: "w-[178px]",
					onClick: () => {
						router.push(`/app/${appId}/annotations`);
					},
					children: [/* @__PURE__ */ jsx(Wt, { className: "mr-1 h-4 w-4" }), t("feature.annotation.cacheManagement", { ns: "appDebug" })]
				})]
			})] })] })
		}),
		/* @__PURE__ */ jsx(config_param_modal_default, {
			appId,
			isInit: true,
			isShow: isShowAnnotationConfigInit,
			onHide: () => {
				setIsShowAnnotationConfigInit(false);
			},
			onSave: async (embeddingModel, score) => {
				await handleEnableAnnotation(embeddingModel, score);
				setIsShowAnnotationConfigInit(false);
			},
			annotationConfig: annotationReply
		}),
		isShowAnnotationFullModal && /* @__PURE__ */ jsx(modal_default, {
			show: isShowAnnotationFullModal,
			onHide: () => setIsShowAnnotationFullModal(false)
		})
	] });
};
//#endregion
//#region app/components/base/features/new-feature-panel/citation.tsx
var Citation = ({ disabled, onChange }) => {
	const { t } = useTranslation();
	const features = useFeatures((s) => s.features);
	const featuresStore = useFeaturesStore();
	const handleChange = useCallback((type, enabled) => {
		const { features, setFeatures } = featuresStore.getState();
		const newFeatures = produce(features, (draft) => {
			draft[type] = {
				...draft[type],
				enabled
			};
		});
		setFeatures(newFeatures);
		if (onChange) onChange(newFeatures);
	}, [featuresStore, onChange]);
	return /* @__PURE__ */ jsx(FeatureCard, {
		icon: /* @__PURE__ */ jsx("div", {
			className: "shrink-0 rounded-lg border-[0.5px] border-divider-subtle bg-util-colors-warning-warning-500 p-1 shadow-xs",
			children: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 text-text-primary-on-surface" })
		}),
		title: t("feature.citation.title", { ns: "appDebug" }),
		value: !!features.citation?.enabled,
		description: t("feature.citation.description", { ns: "appDebug" }),
		onChange: (state) => handleChange(FeatureEnum.citation, state),
		disabled
	});
};
//#endregion
//#region app/components/base/features/new-feature-panel/conversation-opener/index.tsx
var ConversationOpener = ({ disabled, onChange, promptVariables, workflowVariables, onAutoAddPromptVariable }) => {
	const { t } = useTranslation();
	const { setShowOpeningModal } = useModalContext();
	const opening = useFeatures((s) => s.features.opening);
	const featuresStore = useFeaturesStore();
	const [isHovering, setIsHovering] = useState(false);
	const handleOpenOpeningModal = useCallback(() => {
		/* v8 ignore next -- guarded path is not reachable in tests with a real disabled button because click is prevented at DOM level. @preserve */
		if (disabled) return;
		const { features, setFeatures } = featuresStore.getState();
		setShowOpeningModal({
			payload: {
				...opening,
				promptVariables,
				workflowVariables,
				onAutoAddPromptVariable
			},
			onSaveCallback: (newOpening) => {
				setFeatures(produce(features, (draft) => {
					draft.opening = newOpening;
				}));
				if (onChange) onChange();
			},
			onCancelCallback: () => {
				if (onChange) onChange();
			}
		});
	}, [
		disabled,
		featuresStore,
		onAutoAddPromptVariable,
		onChange,
		opening,
		promptVariables,
		setShowOpeningModal
	]);
	const handleChange = useCallback((type, enabled) => {
		const { features, setFeatures } = featuresStore.getState();
		setFeatures(produce(features, (draft) => {
			draft[type] = {
				...draft[type],
				enabled
			};
		}));
		if (onChange) onChange();
	}, [featuresStore, onChange]);
	return /* @__PURE__ */ jsx(FeatureCard, {
		icon: /* @__PURE__ */ jsx("div", {
			className: "shrink-0 rounded-lg border-[0.5px] border-divider-subtle bg-util-colors-blue-light-blue-light-500 p-1 shadow-xs",
			children: /* @__PURE__ */ jsx(Icon$2, { className: "h-4 w-4 text-text-primary-on-surface" })
		}),
		title: t("feature.conversationOpener.title", { ns: "appDebug" }),
		value: !!opening?.enabled,
		onChange: (state) => handleChange(FeatureEnum.opening, state),
		onMouseEnter: () => setIsHovering(true),
		onMouseLeave: () => setIsHovering(false),
		disabled,
		children: /* @__PURE__ */ jsxs(Fragment$1, { children: [!opening?.enabled && /* @__PURE__ */ jsx("div", {
			className: "line-clamp-2 min-h-8 text-text-tertiary system-xs-regular",
			children: t("feature.conversationOpener.description", { ns: "appDebug" })
		}), !!opening?.enabled && /* @__PURE__ */ jsxs(Fragment$1, { children: [!isHovering && /* @__PURE__ */ jsx("div", {
			className: "line-clamp-2 min-h-8 text-text-tertiary system-xs-regular",
			children: opening.opening_statement || t("openingStatement.placeholder", { ns: "appDebug" })
		}), isHovering && /* @__PURE__ */ jsxs(Button, {
			className: "w-full",
			onClick: handleOpenOpeningModal,
			disabled,
			children: [/* @__PURE__ */ jsx(Ct, { className: "mr-1 h-4 w-4" }), t("openingStatement.writeOpener", { ns: "appDebug" })]
		})] })] })
	});
};
//#endregion
//#region app/components/base/features/new-feature-panel/dialog-wrapper.tsx
var DialogWrapper = ({ className, children, show, onClose, inWorkflow = true }) => {
	return /* @__PURE__ */ jsx(Ke, {
		appear: true,
		show,
		as: Fragment,
		children: /* @__PURE__ */ jsxs(ht, {
			as: "div",
			className: "relative z-40",
			onClose: useCallback(() => onClose?.(), [onClose]),
			children: [/* @__PURE__ */ jsx(Oe, { children: /* @__PURE__ */ jsx("div", { className: cn("fixed inset-0 bg-black/25", "data-[closed]:opacity-0", "data-[enter]:opacity-100 data-[enter]:duration-300 data-[enter]:ease-out", "data-[leave]:opacity-0 data-[leave]:duration-200 data-[leave]:ease-in") }) }), /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0",
				children: /* @__PURE__ */ jsx("div", {
					className: cn("flex min-h-full flex-col items-end justify-center pb-2", inWorkflow ? "pt-[112px]" : "pr-2 pt-[64px]"),
					"data-testid": "dialog-layout-container",
					children: /* @__PURE__ */ jsx(Oe, { children: /* @__PURE__ */ jsx(ze, {
						className: cn("relative flex h-0 w-[420px] grow flex-col overflow-hidden border-components-panel-border bg-components-panel-bg-alt p-0 text-left align-middle shadow-xl transition-all", inWorkflow ? "rounded-l-2xl border-b-[0.5px] border-l-[0.5px] border-t-[0.5px]" : "rounded-2xl border-[0.5px]", "data-[closed]:scale-95 data-[closed]:opacity-0", "data-[enter]:scale-100 data-[enter]:opacity-100 data-[enter]:duration-300 data-[enter]:ease-out", "data-[leave]:scale-95 data-[leave]:opacity-0 data-[leave]:duration-200 data-[leave]:ease-in", className),
						children
					}) })
				})
			})]
		})
	});
};
//#endregion
//#region app/components/base/features/new-feature-panel/file-upload/setting-content.tsx
var SettingContent = ({ imageUpload, onClose, onChange }) => {
	const { t } = useTranslation();
	const featuresStore = useFeaturesStore();
	const file = useFeatures((state) => state.features.file);
	const [tempPayload, setTempPayload] = useState(useMemo(() => {
		return {
			allowed_file_upload_methods: file?.allowed_file_upload_methods || ["local_file", "remote_url"],
			allowed_file_types: file?.allowed_file_types || [SupportUploadFileTypes.image],
			allowed_file_extensions: file?.allowed_file_extensions || FILE_EXTS[SupportUploadFileTypes.image],
			max_length: file?.number_limits || 3
		};
	}, [file]));
	const handleChange = useCallback(() => {
		const { features, setFeatures } = featuresStore.getState();
		setFeatures(produce(features, (draft) => {
			draft.file = {
				...draft.file,
				allowed_file_upload_methods: tempPayload.allowed_file_upload_methods,
				number_limits: tempPayload.max_length,
				allowed_file_types: tempPayload.allowed_file_types,
				allowed_file_extensions: tempPayload.allowed_file_extensions
			};
		}));
		if (onChange) onChange();
	}, [
		featuresStore,
		onChange,
		tempPayload
	]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "mb-4 flex items-center justify-between",
			children: [/* @__PURE__ */ jsx("div", {
				className: "text-text-primary system-xl-semibold",
				children: !imageUpload ? t("feature.fileUpload.modalTitle", { ns: "appDebug" }) : t("feature.imageUpload.modalTitle", { ns: "appDebug" })
			}), /* @__PURE__ */ jsx("div", {
				className: "cursor-pointer p-1",
				onClick: onClose,
				"data-testid": "close-setting-modal",
				role: "button",
				tabIndex: 0,
				onKeyDown: (e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						onClose();
					}
				},
				children: /* @__PURE__ */ jsx("span", { className: "i-ri-close-line h-4 w-4 text-text-tertiary" })
			})]
		}),
		/* @__PURE__ */ jsx(file_upload_setting_default, {
			isMultiple: true,
			inFeaturePanel: true,
			hideSupportFileType: imageUpload,
			payload: tempPayload,
			onChange: (p) => setTempPayload(p)
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "mt-4 flex items-center justify-end",
			children: [/* @__PURE__ */ jsx(Button, {
				onClick: onClose,
				className: "mr-2",
				children: t("operation.cancel", { ns: "common" })
			}), /* @__PURE__ */ jsx(Button, {
				variant: "primary",
				onClick: handleChange,
				disabled: tempPayload.allowed_file_types.length === 0,
				children: t("operation.save", { ns: "common" })
			})]
		})
	] });
};
var setting_content_default = React$1.memo(SettingContent);
//#endregion
//#region app/components/base/features/new-feature-panel/file-upload/setting-modal.tsx
var FileUploadSettings = ({ open, onOpen, onChange, disabled, children, imageUpload }) => {
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: onOpen,
		placement: "left",
		offset: { mainAxis: 32 },
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			className: "flex",
			onClick: () => !disabled && onOpen((open) => !open),
			children
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			style: { zIndex: 50 },
			children: /* @__PURE__ */ jsx("div", {
				className: "max-h-[calc(100vh-20px)] w-[360px] overflow-y-auto rounded-2xl border-[0.5px] border-components-panel-border bg-components-panel-bg p-4 shadow-2xl",
				children: /* @__PURE__ */ jsx(setting_content_default, {
					imageUpload,
					onClose: () => onOpen(false),
					onChange: (v) => {
						onChange?.(v);
						onOpen(false);
					}
				})
			})
		})]
	});
};
var setting_modal_default = memo(FileUploadSettings);
//#endregion
//#region app/components/base/features/new-feature-panel/file-upload/index.tsx
var FileUpload$1 = ({ disabled, onChange }) => {
	const { t } = useTranslation();
	const file = useFeatures((s) => s.features.file);
	const featuresStore = useFeaturesStore();
	const [modalOpen, setModalOpen] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const supportedTypes = useMemo(() => {
		return file?.allowed_file_types?.join(",") || "-";
	}, [file?.allowed_file_types]);
	const handleChange = useCallback((type, enabled) => {
		const { features, setFeatures } = featuresStore.getState();
		setFeatures(produce(features, (draft) => {
			draft[type] = {
				...draft[type],
				enabled,
				image: { enabled }
			};
		}));
		if (onChange) onChange();
	}, [featuresStore, onChange]);
	return /* @__PURE__ */ jsx(FeatureCard, {
		icon: /* @__PURE__ */ jsx("div", {
			className: "shrink-0 rounded-lg border-[0.5px] border-divider-subtle bg-util-colors-blue-blue-600 p-1 shadow-xs",
			children: /* @__PURE__ */ jsx(Icon$3, { className: "h-4 w-4 text-text-primary-on-surface" })
		}),
		title: t("feature.fileUpload.title", { ns: "appDebug" }),
		value: file?.enabled,
		onChange: (state) => handleChange(FeatureEnum.file, state),
		onMouseEnter: () => setIsHovering(true),
		onMouseLeave: () => setIsHovering(false),
		disabled,
		children: /* @__PURE__ */ jsxs(Fragment$1, { children: [!file?.enabled && /* @__PURE__ */ jsx("div", {
			className: "system-xs-regular line-clamp-2 min-h-8 text-text-tertiary",
			children: t("feature.fileUpload.description", { ns: "appDebug" })
		}), file?.enabled && /* @__PURE__ */ jsxs(Fragment$1, { children: [!isHovering && !modalOpen && /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-4 pt-0.5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-2xs-medium-uppercase mb-0.5 text-text-tertiary",
						children: t("feature.fileUpload.supportedTypes", { ns: "appDebug" })
					}), /* @__PURE__ */ jsx("div", {
						className: "system-xs-regular text-text-secondary",
						children: supportedTypes
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "h-[27px] w-px rotate-12 bg-divider-subtle" }),
				/* @__PURE__ */ jsxs("div", {
					className: "",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-2xs-medium-uppercase mb-0.5 text-text-tertiary",
						children: t("feature.fileUpload.numberLimit", { ns: "appDebug" })
					}), /* @__PURE__ */ jsx("div", {
						className: "system-xs-regular text-text-secondary",
						children: file?.number_limits
					})]
				})
			]
		}), (isHovering || modalOpen) && /* @__PURE__ */ jsx(setting_modal_default, {
			open: modalOpen && !disabled,
			onOpen: (v) => {
				setModalOpen(v);
				setIsHovering(v);
			},
			onChange,
			children: /* @__PURE__ */ jsxs(Button, {
				className: "w-full",
				disabled,
				children: [/* @__PURE__ */ jsx(AD, { className: "mr-1 h-4 w-4" }), t("operation.settings", { ns: "common" })]
			})
		})] })] })
	});
};
//#endregion
//#region app/components/base/features/new-feature-panel/follow-up.tsx
var FollowUp = ({ disabled, onChange }) => {
	const { t } = useTranslation();
	const features = useFeatures((s) => s.features);
	const featuresStore = useFeaturesStore();
	const handleChange = useCallback((type, enabled) => {
		const { features, setFeatures } = featuresStore.getState();
		const newFeatures = produce(features, (draft) => {
			draft[type] = {
				...draft[type],
				enabled
			};
		});
		setFeatures(newFeatures);
		if (onChange) onChange(newFeatures);
	}, [featuresStore, onChange]);
	return /* @__PURE__ */ jsx(FeatureCard, {
		icon: /* @__PURE__ */ jsx("div", {
			className: "shrink-0 rounded-lg border-[0.5px] border-divider-subtle bg-util-colors-blue-light-blue-light-500 p-1 shadow-xs",
			children: /* @__PURE__ */ jsx(Icon$4, { className: "h-4 w-4 text-text-primary-on-surface" })
		}),
		title: t("feature.suggestedQuestionsAfterAnswer.title", { ns: "appDebug" }),
		value: !!features.suggested?.enabled,
		description: t("feature.suggestedQuestionsAfterAnswer.description", { ns: "appDebug" }),
		onChange: (state) => handleChange(FeatureEnum.suggested, state),
		disabled
	});
};
//#endregion
//#region app/components/base/features/new-feature-panel/image-upload/index.tsx
var FileUpload = ({ disabled, onChange }) => {
	const { t } = useTranslation();
	const file = useFeatures((s) => s.features.file);
	const featuresStore = useFeaturesStore();
	const [modalOpen, setModalOpen] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const supportedTypes = useMemo(() => {
		return file?.allowed_file_types?.join(",") || "-";
	}, [file?.allowed_file_types]);
	const handleChange = useCallback((type, enabled) => {
		const { features, setFeatures } = featuresStore.getState();
		setFeatures(produce(features, (draft) => {
			draft[type] = {
				...draft[type],
				enabled,
				image: { enabled }
			};
		}));
		if (onChange) onChange();
	}, [featuresStore, onChange]);
	return /* @__PURE__ */ jsx(FeatureCard, {
		icon: /* @__PURE__ */ jsx("div", {
			className: "shrink-0 rounded-lg border-[0.5px] border-divider-subtle bg-util-colors-indigo-indigo-600 p-1 shadow-xs",
			children: /* @__PURE__ */ jsx(ga, { className: "h-4 w-4 text-text-primary-on-surface" })
		}),
		title: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center",
			children: [t("feature.imageUpload.title", { ns: "appDebug" }), /* @__PURE__ */ jsx(badge_default, {
				text: "LEGACY",
				className: "mx-1 shrink-0 border-text-accent-secondary text-text-accent-secondary"
			})]
		}),
		value: file?.enabled,
		onChange: (state) => handleChange(FeatureEnum.file, state),
		onMouseEnter: () => setIsHovering(true),
		onMouseLeave: () => setIsHovering(false),
		disabled,
		children: /* @__PURE__ */ jsxs(Fragment$1, { children: [!file?.enabled && /* @__PURE__ */ jsx("div", {
			className: "system-xs-regular line-clamp-2 min-h-8 text-text-tertiary",
			children: t("feature.imageUpload.description", { ns: "appDebug" })
		}), file?.enabled && /* @__PURE__ */ jsxs(Fragment$1, { children: [!isHovering && !modalOpen && /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-4 pt-0.5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-2xs-medium-uppercase mb-0.5 text-text-tertiary",
						children: t("feature.imageUpload.supportedTypes", { ns: "appDebug" })
					}), /* @__PURE__ */ jsx("div", {
						className: "system-xs-regular text-text-secondary",
						children: supportedTypes
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "h-[27px] w-px rotate-12 bg-divider-subtle" }),
				/* @__PURE__ */ jsxs("div", {
					className: "",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-2xs-medium-uppercase mb-0.5 text-text-tertiary",
						children: t("feature.imageUpload.numberLimit", { ns: "appDebug" })
					}), /* @__PURE__ */ jsx("div", {
						className: "system-xs-regular text-text-secondary",
						children: file?.number_limits
					})]
				})
			]
		}), (isHovering || modalOpen) && /* @__PURE__ */ jsx(setting_modal_default, {
			imageUpload: true,
			open: modalOpen && !disabled,
			onOpen: (v) => {
				setModalOpen(v);
				setIsHovering(v);
			},
			onChange,
			children: /* @__PURE__ */ jsxs(Button, {
				className: "w-full",
				disabled,
				children: [/* @__PURE__ */ jsx(AD, { className: "mr-1 h-4 w-4" }), t("operation.settings", { ns: "common" })]
			})
		})] })] })
	});
};
//#endregion
//#region app/components/base/features/new-feature-panel/moderation/index.tsx
var Moderation = ({ disabled, onChange }) => {
	const { t } = useTranslation();
	const { setShowModerationSettingModal } = useModalContext();
	const locale = useLocale();
	const featuresStore = useFeaturesStore();
	const moderation = useFeatures((s) => s.features.moderation);
	const { data: codeBasedExtensionList } = useCodeBasedExtensions("moderation");
	const [isHovering, setIsHovering] = useState(false);
	const handleOpenModerationSettingModal = () => {
		/* v8 ignore next -- guarded path is not reachable in tests with a real disabled button because click is prevented at DOM level. @preserve */
		if (disabled) return;
		const { features, setFeatures } = featuresStore.getState();
		setShowModerationSettingModal({
			payload: moderation,
			onSaveCallback: (newModeration) => {
				const newFeatures = produce(features, (draft) => {
					draft.moderation = newModeration;
				});
				setFeatures(newFeatures);
				if (onChange) onChange(newFeatures);
			},
			onCancelCallback: () => {
				if (onChange) onChange();
			}
		});
	};
	const handleChange = useCallback((type, enabled) => {
		const { features, setFeatures } = featuresStore.getState();
		if (enabled && !features.moderation?.type && type === FeatureEnum.moderation) setShowModerationSettingModal({
			payload: {
				enabled: true,
				type: "keywords",
				config: {
					keywords: "",
					inputs_config: {
						enabled: true,
						preset_response: ""
					}
				}
			},
			onSaveCallback: (newModeration) => {
				const newFeatures = produce(features, (draft) => {
					draft.moderation = newModeration;
				});
				setFeatures(newFeatures);
				if (onChange) onChange(newFeatures);
			},
			onCancelCallback: () => {
				setFeatures(produce(features, (draft) => {
					draft.moderation = { enabled: false };
				}));
				if (onChange) onChange();
			}
		});
		if (!enabled) {
			const newFeatures = produce(features, (draft) => {
				draft.moderation = { enabled: false };
			});
			setFeatures(newFeatures);
			if (onChange) onChange(newFeatures);
		}
	}, [
		featuresStore,
		onChange,
		setShowModerationSettingModal
	]);
	const providerContent = useMemo(() => {
		if (moderation?.type === "openai_moderation") return t("feature.moderation.modal.provider.openai", { ns: "appDebug" });
		else if (moderation?.type === "keywords") return t("feature.moderation.modal.provider.keywords", { ns: "appDebug" });
		else if (moderation?.type === "api") return t("apiBasedExtension.selector.title", { ns: "common" });
		else return codeBasedExtensionList?.data.find((item) => item.name === moderation?.type)?.label[locale] || "-";
	}, [
		codeBasedExtensionList?.data,
		locale,
		moderation?.type,
		t
	]);
	const enableContent = useMemo(() => {
		if (moderation?.config?.inputs_config?.enabled && moderation.config?.outputs_config?.enabled) return t("feature.moderation.allEnabled", { ns: "appDebug" });
		else if (moderation?.config?.inputs_config?.enabled) return t("feature.moderation.inputEnabled", { ns: "appDebug" });
		else if (moderation?.config?.outputs_config?.enabled) return t("feature.moderation.outputEnabled", { ns: "appDebug" });
	}, [
		moderation?.config?.inputs_config?.enabled,
		moderation?.config?.outputs_config?.enabled,
		t
	]);
	return /* @__PURE__ */ jsx(FeatureCard, {
		icon: /* @__PURE__ */ jsx("div", {
			className: "shrink-0 rounded-lg border-[0.5px] border-divider-subtle bg-text-success p-1 shadow-xs",
			children: /* @__PURE__ */ jsx(Icon$5, { className: "h-4 w-4 text-text-primary-on-surface" })
		}),
		title: t("feature.moderation.title", { ns: "appDebug" }),
		value: !!moderation?.enabled,
		onChange: (state) => handleChange(FeatureEnum.moderation, state),
		onMouseEnter: () => setIsHovering(true),
		onMouseLeave: () => setIsHovering(false),
		disabled,
		children: /* @__PURE__ */ jsxs(Fragment$1, { children: [!moderation?.enabled && /* @__PURE__ */ jsx("div", {
			className: "line-clamp-2 min-h-8 text-text-tertiary system-xs-regular",
			children: t("feature.moderation.description", { ns: "appDebug" })
		}), !!moderation?.enabled && /* @__PURE__ */ jsxs(Fragment$1, { children: [!isHovering && /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-4 pt-0.5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "",
					children: [/* @__PURE__ */ jsx("div", {
						className: "mb-0.5 text-text-tertiary system-2xs-medium-uppercase",
						children: t("feature.moderation.modal.provider.title", { ns: "appDebug" })
					}), /* @__PURE__ */ jsx("div", {
						className: "text-text-secondary system-xs-regular",
						children: providerContent
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "h-[27px] w-px rotate-12 bg-divider-subtle" }),
				/* @__PURE__ */ jsxs("div", {
					className: "",
					children: [/* @__PURE__ */ jsx("div", {
						className: "mb-0.5 text-text-tertiary system-2xs-medium-uppercase",
						children: t("feature.moderation.contentEnableLabel", { ns: "appDebug" })
					}), /* @__PURE__ */ jsx("div", {
						className: "text-text-secondary system-xs-regular",
						children: enableContent
					})]
				})
			]
		}), isHovering && /* @__PURE__ */ jsxs(Button, {
			className: "w-full",
			onClick: handleOpenModerationSettingModal,
			disabled,
			children: [/* @__PURE__ */ jsx(AD, { className: "mr-1 h-4 w-4" }), t("operation.settings", { ns: "common" })]
		})] })] })
	});
};
//#endregion
//#region app/components/base/features/new-feature-panel/more-like-this.tsx
var MoreLikeThis = ({ disabled, onChange }) => {
	const { t } = useTranslation();
	const features = useFeatures((s) => s.features);
	const featuresStore = useFeaturesStore();
	const handleChange = useCallback((type, enabled) => {
		const { features, setFeatures } = featuresStore.getState();
		setFeatures(produce(features, (draft) => {
			draft[type] = {
				...draft[type],
				enabled
			};
		}));
		if (onChange) onChange();
	}, [featuresStore, onChange]);
	return /* @__PURE__ */ jsx(FeatureCard, {
		icon: /* @__PURE__ */ jsx("div", {
			className: "shrink-0 rounded-lg border-[0.5px] border-divider-subtle bg-util-colors-blue-light-blue-light-500 p-1 shadow-xs",
			children: /* @__PURE__ */ jsx(WA, { className: "h-4 w-4 text-text-primary-on-surface" })
		}),
		title: t("feature.moreLikeThis.title", { ns: "appDebug" }),
		tooltip: t("feature.moreLikeThis.tip", { ns: "appDebug" }),
		value: !!features.moreLikeThis?.enabled,
		description: t("feature.moreLikeThis.description", { ns: "appDebug" }),
		onChange: (state) => handleChange(FeatureEnum.moreLikeThis, state),
		disabled
	});
};
//#endregion
//#region app/components/base/features/new-feature-panel/speech-to-text.tsx
var SpeechToText = ({ disabled, onChange }) => {
	const { t } = useTranslation();
	const features = useFeatures((s) => s.features);
	const featuresStore = useFeaturesStore();
	const handleChange = useCallback((type, enabled) => {
		const { features, setFeatures } = featuresStore.getState();
		setFeatures(produce(features, (draft) => {
			draft[type] = {
				...draft[type],
				enabled
			};
		}));
		if (onChange) onChange();
	}, [featuresStore, onChange]);
	return /* @__PURE__ */ jsx(FeatureCard, {
		icon: /* @__PURE__ */ jsx("div", {
			className: "shrink-0 rounded-lg border-[0.5px] border-divider-subtle bg-util-colors-violet-violet-600 p-1 shadow-xs",
			children: /* @__PURE__ */ jsx(Icon$6, { className: "h-4 w-4 text-text-primary-on-surface" })
		}),
		title: t("feature.speechToText.title", { ns: "appDebug" }),
		value: !!features.speech2text?.enabled,
		description: t("feature.speechToText.description", { ns: "appDebug" }),
		onChange: (state) => handleChange(FeatureEnum.speech2text, state),
		disabled
	});
};
//#endregion
//#region app/components/base/features/new-feature-panel/text-to-speech/index.tsx
var TextToSpeech = ({ disabled, onChange }) => {
	const { t } = useTranslation();
	const textToSpeech = useFeatures((s) => s.features.text2speech);
	const languageInfo = languages.find((i) => i.value === textToSpeech?.language);
	const [modalOpen, setModalOpen] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const features = useFeatures((s) => s.features);
	const featuresStore = useFeaturesStore();
	const handleChange = useCallback((type, enabled) => {
		const { features, setFeatures } = featuresStore.getState();
		setFeatures(produce(features, (draft) => {
			draft[type] = {
				...draft[type],
				enabled
			};
		}));
		if (onChange) onChange();
	}, [featuresStore, onChange]);
	return /* @__PURE__ */ jsx(FeatureCard, {
		icon: /* @__PURE__ */ jsx("div", {
			className: "shrink-0 rounded-lg border-[0.5px] border-divider-subtle bg-util-colors-violet-violet-600 p-1 shadow-xs",
			children: /* @__PURE__ */ jsx(Icon$7, { className: "h-4 w-4 text-text-primary-on-surface" })
		}),
		title: t("feature.textToSpeech.title", { ns: "appDebug" }),
		value: !!features.text2speech?.enabled,
		onChange: (state) => handleChange(FeatureEnum.text2speech, state),
		onMouseEnter: () => setIsHovering(true),
		onMouseLeave: () => setIsHovering(false),
		disabled,
		children: /* @__PURE__ */ jsxs(Fragment$1, { children: [!features.text2speech?.enabled && /* @__PURE__ */ jsx("div", {
			className: "system-xs-regular line-clamp-2 min-h-8 text-text-tertiary",
			children: t("feature.textToSpeech.description", { ns: "appDebug" })
		}), !!features.text2speech?.enabled && /* @__PURE__ */ jsxs(Fragment$1, { children: [!isHovering && !modalOpen && /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-4 pt-0.5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-2xs-medium-uppercase mb-0.5 text-text-tertiary",
						children: t("voice.voiceSettings.language", { ns: "appDebug" })
					}), /* @__PURE__ */ jsx("div", {
						className: "system-xs-regular text-text-secondary",
						children: languageInfo?.name || "-"
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "h-[27px] w-px rotate-12 bg-divider-subtle" }),
				/* @__PURE__ */ jsxs("div", {
					className: "",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-2xs-medium-uppercase mb-0.5 text-text-tertiary",
						children: t("voice.voiceSettings.voice", { ns: "appDebug" })
					}), /* @__PURE__ */ jsx("div", {
						className: "system-xs-regular text-text-secondary",
						children: features.text2speech?.voice || t("voice.defaultDisplay", { ns: "appDebug" })
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "h-[27px] w-px rotate-12 bg-divider-subtle" }),
				/* @__PURE__ */ jsxs("div", {
					className: "",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-2xs-medium-uppercase mb-0.5 text-text-tertiary",
						children: t("voice.voiceSettings.autoPlay", { ns: "appDebug" })
					}), /* @__PURE__ */ jsx("div", {
						className: "system-xs-regular text-text-secondary",
						children: features.text2speech?.autoPlay === TtsAutoPlay.enabled ? t("voice.voiceSettings.autoPlayEnabled", { ns: "appDebug" }) : t("voice.voiceSettings.autoPlayDisabled", { ns: "appDebug" })
					})]
				})
			]
		}), (isHovering || modalOpen) && /* @__PURE__ */ jsx(voice_settings_default, {
			open: modalOpen && !disabled,
			onOpen: setModalOpen,
			onChange,
			children: /* @__PURE__ */ jsxs(Button, {
				className: "w-full",
				disabled,
				children: [/* @__PURE__ */ jsx(AD, { className: "mr-1 h-4 w-4" }), t("voice.voiceSettings.title", { ns: "appDebug" })]
			})
		})] })] })
	});
};
//#endregion
//#region app/components/base/features/new-feature-panel/index.tsx
var NewFeaturePanel = ({ show, isChatMode, disabled, onChange, onClose, inWorkflow = true, showFileUpload = true, promptVariables, workflowVariables, onAutoAddPromptVariable }) => {
	const { t } = useTranslation();
	const { data: speech2textDefaultModel } = useDefaultModel(ModelTypeEnum.speech2text);
	const { data: text2speechDefaultModel } = useDefaultModel(ModelTypeEnum.tts);
	return /* @__PURE__ */ jsx(DialogWrapper, {
		show,
		onClose,
		inWorkflow,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex h-full grow flex-col",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 justify-between p-4 pb-3",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "system-xl-semibold text-text-primary",
					children: t("common.features", { ns: "workflow" })
				}), /* @__PURE__ */ jsx("div", {
					className: "body-xs-regular text-text-tertiary",
					children: t("common.featuresDescription", { ns: "workflow" })
				})] }), /* @__PURE__ */ jsx("div", {
					className: "h-8 w-8 cursor-pointer p-2",
					onClick: onClose,
					children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-text-tertiary" })
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grow basis-0 overflow-y-auto px-4 pb-4",
				children: [
					showFileUpload && /* @__PURE__ */ jsxs("div", {
						className: "relative mb-1 rounded-xl border border-components-panel-border p-2 shadow-xs",
						children: [/* @__PURE__ */ jsx("div", {
							className: "absolute left-0 top-0 h-full w-full rounded-xl opacity-40",
							style: { background: "linear-gradient(92deg, rgba(11, 165, 236, 0.25) 18.12%, rgba(255, 255, 255, 0.00) 167.31%)" }
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative flex h-full w-full items-start",
							children: [/* @__PURE__ */ jsx("div", {
								className: "mr-0.5 shrink-0 p-0.5",
								children: /* @__PURE__ */ jsx(Ky, { className: "h-5 w-5 text-text-accent" })
							}), /* @__PURE__ */ jsx("div", {
								className: "system-xs-medium p-1 text-text-primary",
								children: /* @__PURE__ */ jsx("span", { children: isChatMode ? t("common.fileUploadTip", { ns: "workflow" }) : t("common.ImageUploadLegacyTip", { ns: "workflow" }) })
							})]
						})]
					}),
					!isChatMode && !inWorkflow && /* @__PURE__ */ jsx(MoreLikeThis, {
						disabled,
						onChange
					}),
					isChatMode && /* @__PURE__ */ jsx(ConversationOpener, {
						disabled,
						onChange,
						promptVariables,
						workflowVariables,
						onAutoAddPromptVariable
					}),
					isChatMode && /* @__PURE__ */ jsx(FollowUp, {
						disabled,
						onChange
					}),
					text2speechDefaultModel && (isChatMode || !inWorkflow) && /* @__PURE__ */ jsx(TextToSpeech, {
						disabled,
						onChange
					}),
					isChatMode && speech2textDefaultModel && /* @__PURE__ */ jsx(SpeechToText, {
						disabled,
						onChange
					}),
					showFileUpload && isChatMode && /* @__PURE__ */ jsx(FileUpload$1, {
						disabled,
						onChange
					}),
					showFileUpload && !isChatMode && /* @__PURE__ */ jsx(FileUpload, {
						disabled,
						onChange
					}),
					isChatMode && /* @__PURE__ */ jsx(Citation, {
						disabled,
						onChange
					}),
					(isChatMode || !inWorkflow) && /* @__PURE__ */ jsx(Moderation, {
						disabled,
						onChange
					}),
					!inWorkflow && isChatMode && /* @__PURE__ */ jsx(AnnotationReply, {
						disabled,
						onChange
					})
				]
			})]
		})
	});
};
//#endregion
export { useConfig as a, config_param_modal_default as i, AnnotationEnableStatus as n, useNodeCrud as o, JobStatus as r, NewFeaturePanel as t };
