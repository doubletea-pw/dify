import { a as useParams, c as useSearchParams, m as __exportAll, o as usePathname, v as __toESM } from "../index.js";
import { Ar as o2, At as QM, Br as rF, E as Dm, F as GB, Ft as R5, Gr as s7, J as Iv, Ln as aB, Mr as p, Nt as Qr, Pn as _c, Pr as pG, Qr as uI, Rr as qy, Si as zb, Sn as Y0, St as PC, V as HA, Vt as S7, Wn as cB, Wt as Sm, Xn as dG, Z as JS, _ as CH, a as $l, ar as gB, at as Ku, b as Ct, c as AD, ct as M6, d as Af, dr as j1, f as Ao, fi as x, ft as NH, hn as Wt, ir as ft$1, it as Km, jr as oF, k as Ek, kn as _8, kr as nx, mi as xm, mn as Wg, mr as k1, mt as Nc, n as $C, ni as v, nn as Um, p as B7, pt as NN, r as $a, ri as v4, rr as f1, tt as K1, un as WA, ut as Mm, vi as z1, xt as P7, y as Cn, yn as Xs, yt as OA, z as H4, zr as r2 } from "./react-D5xHzNYo.js";
import { o as useLatest, t as useUnmount } from "./useUnmount-LxWHCkGT.js";
import { r as t$1 } from "./i18next-CxGFEMD9.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as useShallow } from "./shallow-CK1lOAji.js";
import { a as __read } from "./tslib.es6-BSnKF3gl.js";
import { n as useBoolean, t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { i as isBrowser } from "./useEffectWithTarget-B62zcRzE.js";
import { a as useHover_default, t as app_icon_default } from "./app-icon-DPKtAo3e.js";
import { t as useKeyPress } from "./useKeyPress-DtHtlpBY.js";
import { n as useStore$1, r as createStore, t as create } from "./react-CHKO_ryu.js";
import { t as useStore$2 } from "./store-BCKZaSV6.js";
import { n as useContext$1, t as createContext$1 } from "./dist-mUzjAi-W.js";
import { i as useEventEmitterContextContext } from "./utils-pMdyvQan.js";
import { n as useBreakpoints, t as MediaType } from "./use-breakpoints-Ij85IgkK.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as cva } from "./dist-1O6DB-eK.js";
import { t as Divider$1 } from "./divider-DZD56ykp.js";
import { A as Type, At as CUSTOM_EDGE, B as BaseEdge, Ct as ToolTypeEnum, Dt as CUSTOM_LOOP_START_NODE, G as ReactFlow, H as Handle$1, Ht as LOOP_PADDING, J as applyEdgeChanges, K as ReactFlowProvider, Lt as ITERATION_CHILDREN_Z_INDEX, Mt as DEFAULT_FILE_UPLOAD_SETTING, Ot as CUSTOM_ITERATION_START_NODE, Q as getBoundsOfRects, U as Panel, W as Position, Y as applyNodeChanges, Z as getBezierPath, c as ComparisonOperator$1, cn as getPlainValue, ct as useNodes, dn as toolCredentialToFormSchemas, fn as toolParametersToFormSchemas, ft as useReactFlow, gn as getKeyboardKeyCodeBySystem, gt as useViewport, h as uniqBy, ht as useUpdateNodeInternals, i as comparisonOperatorNotRequireValue$1, in as addDefaultValue, jt as CUSTOM_NODE, k as ArrayType, ln as getStructureValue, lt as useNodesInitialized, mn as VarKindType, mt as useStoreApi, n as initialNodes, nn as getEdgeColor, nt as getNodesBounds, o as isComparisonOperatorNeedTranslate$1, on as generateFormValue, p as hasErrorHandleNode, pt as useStore$3, q as SelectionMode, s as isEmptyRelatedOperator, t as initialEdges, tt as getNodePositionWithOrigin, vt as shallow$1, w as isExceptionVariable, yt as cc, z as CUSTOM_SIMPLE_NODE } from "./utils-DqpfZ3W-.js";
import { n as AuthType, r as CollectionType, t as AuthHeaderPrefix } from "./types-DzFjbMeE.js";
import { i as FormTypeEnum, l as ModelStatusEnum, o as ModelFeatureEnum, r as CustomConfigurationStatusEnum, t as ConfigurationMethodEnum, u as ModelTypeEnum } from "./declarations-DYMEe7hD.js";
import { C as IS_CLOUD_EDITION, D as MARKETPLACE_API_PREFIX, Ft as NodeRunningStatus, H as TEXT_GENERATION_TIMEOUT_MS, L as PROVIDER_WITH_PRESET_TONE, Lt as SupportUploadFileTypes, Nt as InputVarType, Ot as BlockEnum, U as TONE_LIST, Vt as WorkflowRunningStatus, ct as PromptMode, f as DEFAULT_AGENT_SETTING, i as ANNOTATION_DEFAULT, j as MAX_TOOLS_NUM, kt as ChangeType, lt as PromptRole, m as DEFAULT_COMPLETION_PROMPT_CONFIG, p as DEFAULT_CHAT_PROMPT_CONFIG, z as STOP_PARAMETER_RULE, zt as VarType } from "./config-Dopncj5R.js";
import { M as isTypedArray, N as isPrimitive, t as cloneDeep } from "./cloneDeep-nndvIxet.js";
import { n as isEqual, t as input_var_type_icon_default } from "./input-var-type-icon-DChWOuig.js";
import { $t as score_threshold_item_default, Br as useAppWorkflow, Cn as isConversationVar, Dr as Icon$19, En as isRagVariableVar, Fn as TRANSFER_METHOD, Gt as checkShowMultiModalTip, Kt as isReRankModelSelected, Nn as FILE_TYPE_OPTIONS, On as isSystemVar, Q as NoteTheme, Qn as useStore$4, Qt as top_k_item_default, Sn as inputVarTypeToVarType, Tn as isGlobalVar, Ut as Drawer, Wt as IndexingType, X as CUSTOM_NOTE_NODE, Xt as economical_retrieval_method_config_default, Yt as retrieval_method_config_default, Z as THEME_MAP, ar as setAutoFreeze, cn as NumberFieldDecrement, dn as NumberFieldInput, dt as getFieldType, en as ParamItem, fr as DatasetPermission, ft as getHasChildren, gr as RerankingModeEnum, in as EffectColor, ir as produce, ln as NumberFieldGroup, nn as Slider, on as NumberField, rn as option_card_default, sn as NumberFieldControls, tn as weighted_score_default, un as NumberFieldIncrement, ut as findPropertyWithPath, vn as getNodeInfoById, wn as isENV, wr as Icon$18, zr as block_icon_default } from "./hooks-Bj_4KA1b.js";
import { t as capitalize } from "./capitalize-DDeTGiHs.js";
import { r as changeLanguage } from "./i18n-config-jsJ9YUFd.js";
import { T as toast, cn as escape, h as ssePost, in as correctToolProvider, l as post, m as sseGet, nn as canFindTool, r as get, rn as correctModelProvider, sn as sleep } from "./base-BuKAg6Le.js";
import { S as select_default, n as identity, t as zoom_default, x as pointer_default } from "./src-BByrOQhU.js";
import { a as intersectionBy, n as getMultipleRetrievalConfig, r as getSelectedDatasetsMode } from "./utils-oRnrO3yr.js";
import { a as SelectContent, c as SelectValue, i as Select, o as SelectItem$2, s as SelectTrigger } from "./markdown-utils-D9ZHqkyo.js";
import { $ as hexToRGBA, J as suggested_questions_default, K as PromptLogModal, X as drawer_plus_default, Y as AnswerIcon, _ as HumanInputFormList, a as getProcessedUserVariablesFromUrlParams, c as getThreadMessages, d as chat_default$1, f as ChatInputAreaWrapper, h as AudioBtn, i as getProcessedSystemVariablesFromUrlParams, l as isValidGeneratedAnswer, m as WorkflowProcessItem, n as getLastAnswer, p as FeatureBar, q as AgentLogModal, r as getProcessedInputsFromUrlParams, t as buildChatItemTree, u as CONVERSATION_ID_INFO, v as HumanInputFilledFormList } from "./utils-Dep53bT6.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { S as Icon$20, _ as OrgInfo, f as pluginManifestToCardPluginProps, k as useTags, p as card_default$1, v as Description } from "./semver-olnXAeJC.js";
import { t as v4$1 } from "./v4-C1y4vc1I.js";
import { a as useSelector, i as useAppContext } from "./app-context-BiSzFQEV.js";
import { t as IconBase } from "./IconBase-CEF_UoQI.js";
import { _ as shift, c as useFloating, f as flip, g as offset, n as PortalToFollowElemContent, o as FloatingPortal, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as confirm_default } from "./confirm-CKQP3hdx.js";
import { n as ActionButtonState, t as ActionButton } from "./action-button-BK9WUMzU.js";
import { t as Input$1 } from "./input-BOHL-qYi.js";
import { t as switch_default } from "./switch-CFJdYxEh.js";
import { n as SimpleSelect, o as ForwardRef, r as select_default$1, t as PortalSelect } from "./select-C87OPWpf.js";
import { t as Loading } from "./loading-BryKikzY.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { t as require_dayjs_min } from "./dayjs.min-CNlMkMP6.js";
import { t as useTimestamp } from "./use-timestamp-DPYGivGq.js";
import { i as useToastContext, r as ToastContext, t as Toast } from "./toast-BY3OifkP.js";
import { a as ModelModeType, c as Resolution, n as AgentStrategy, r as AppModeEnum, s as RETRIEVE_TYPE, u as TransferMethod } from "./app-DPjSIfgb.js";
import { a as getNewVarInWorkflow, c as replaceSpaceWithUnderscoreInVarNameInput, f as FILE_EXTS, i as getNewVar, n as checkKeys, o as getVars, r as getMarketplaceUrl, s as hasDuplicateStr, t as basePath } from "./var-DPpHtpXT.js";
import { A as Indicator, C as ModelIcon, n as badge_default } from "./credential-item-C22_bUSw.js";
import { j as updateDatasetSetting } from "./datasets-hfpkpjNW.js";
import { n as useQuery, t as useMutation } from "./useMutation-CRBpDOZ8.js";
import { t as useInvalid } from "./use-base-DLpNl2rR.js";
import { n as consoleQuery, t as consoleClient } from "./client-CLQTU2Oi.js";
import { h as useInfiniteAppList, m as useGenerateRuleTemplate, s as useAppDetail } from "./use-apps-t6Q_ZP4w.js";
import { n as useGlobalPublicStore, r as useIsSystemFeaturesPending } from "./global-public-context-DpzzsplY.js";
import { a as useLocale, l as getLanguage, n as useDocLink, u as languages } from "./i18n-lDm19WzR.js";
import { t as AccessMode } from "./access-control-DY4aAk1X.js";
import { A as stopChatMessageResponding, F as updateFeedback, M as submitHumanInputForm, O as sendCompletionMessage, S as getUrl, a as fetchAppInfo, b as getAppAccessModeByAppCode, c as fetchChatList, h as fetchSuggestedQuestions, j as stopWorkflowMessage, k as sendWorkflowMessage, l as fetchConversations, o as fetchAppMeta, p as fetchMoreLikeThis, s as fetchAppParams, t as AppSourceType, x as getHumanInputForm, y as generationConversationName } from "./share-Bnl8cbPg.js";
import { n as Avatar, t as useDebounce } from "./useDebounce-DsPp7m8L.js";
import { t as useDebounceFn } from "./useDebounceFn-Y4NS6c4S.js";
import { t as Checkbox } from "./checkbox-DTSgkYdc.js";
import { _ as ReadmeEntrance, h as AuthCategory, i as plugin_auth_in_agent_default, n as plugin_version_picker_default, t as Dropdown, x as ForwardRef$1 } from "./dropdown-DbVlzF8O.js";
import { t as require_copy_to_clipboard } from "./copy-to-clipboard-CEvVSVWT.js";
import { i as Mt, n as It, r as Mo, t as Bt } from "./listbox-BDQqoM7N.js";
import { n as BadgeState, t as Badge } from "./badge-DnA7gOK5.js";
import { t as Textarea } from "./textarea-Ngtow1st.js";
import { n as ACCOUNT_SETTING_TAB } from "./constants-P0J540jJ.js";
import { n as useModalContext } from "./modal-context-CphlqvPm.js";
import { n as useProviderContext } from "./provider-context-CToT0pwd.js";
import { t as Link } from "./link-1R-efKLW.js";
import { C as usePluginManifestInfo, Ct as useAllMCPTools, Ft as useInvalidateAllMCPTools, Lt as useInvalidateAllWorkflowTools, Nt as useInvalidateAllBuiltInTools, O as useUpdatePackageFromMarketPlace, Pt as useInvalidateAllCustomTools, S as usePluginInfo, St as useAllCustomTools, Tt as useAllWorkflowTools, a as useFeaturedToolsRecommendations, g as useInvalidateInstalledPluginList, m as useInstalledPluginList, n as useCheckInstalled, p as useInstallPackageFromMarketPlace, s as useFetchDynamicOptions, v as useModelInList, wt as useAllToolProviders, xt as useAllBuiltInTools } from "./use-refresh-plugin-list-C8aKRYG-.js";
import { u as useTriggerPluginDynamicOptions } from "./use-triggers-DguQxV9N.js";
import { c as Icon$22, s as Icon$21 } from "./other-sSUV3aYW.js";
import { m as submitHumanInputForm$1 } from "./workflow-Dbk_had1.js";
import { t as shortcuts_name_default } from "./shortcuts-name-TpjITleC.js";
import { t as DatePicker } from "./date-picker-C_53XOz9.js";
import { c as Icon$23, d as Icon$24 } from "./general-C8w9hIeL.js";
import { $ as Ql, A as b, At as yr, B as Ds, Bt as Icon$25, C as Lt, Ct as re$1, D as U, Dt as we, E as kt, Et as vs, F as Al, G as Ln, H as He, I as As, J as Or, K as Lo, L as Bl, M as $r, N as Ae$1, O as W$1, Ot as wr, P as Ai, Pt as Icon$28, Q as Ps, R as Bo, S as o, St as rc, T as St, Tt as ti, U as Hl, V as Gs, W as Il, X as Pl, Y as Pi, Z as Po, _ as vt, _t as nc, b as x$1, bt as pl, ct as be$1, d as INSERT_VARIABLE_VALUE_BLOCK_COMMAND, dt as ec, et as Ss, f as CustomTextNode, ft as ge$1, g as a, gt as me$1, h as n$1, ht as lr, i as placeholder_default, it as Yi, j as le$1, k as _, kt as yo, lt as bo, m as L, mt as ks, nt as Vi, ot as Zl, p as GeneratorType, pt as gs, q as Oe, r as PROMPT_EDITOR_UPDATE_VALUE_BY_EVENT_EMITTER, st as Zn, t as PromptEditor, tt as Te$1, u as Icon$27, ut as de$1, v as xt$1, vt as ne$1, w as Mt$1, wt as tc, x as f, xt as pr, y as n, yt as oe$1, z as Ct$1, zt as Icon$26 } from "./prompt-editor-PJuCbabP.js";
import { G as TaskStatus$1, H as PluginCategoryEnum, c as useModelListAndDefaultModelAndCurrentProviderAndModel, f as useTextGenerationCurrentProviderAndModelAndModelList, i as useLanguage, l as useModelModalHandler, m as useUpdateModelProviders, n as useDefaultModel, o as useModelList, p as useUpdateModelList, t as useCurrentProviderAndModel } from "./hooks-BTelimHS.js";
import { _ as useModelParameterRules, h as useMembers, s as useFileUploadConfig } from "./use-common-BJ1aZaXJ.js";
import { i as PopoverTrigger, r as PopoverContent, t as Popover } from "./popover-CTEbJchz.js";
import { d as DERIVED_MODEL_STATUS_BADGE_I18N, f as DERIVED_MODEL_STATUS_TOOLTIP_I18N, i as Icon$29, l as useCredentialPanelState, p as deriveModelStatus, t as ModelSelector } from "./model-selector-ahzffqOG.js";
import { t as ModelName } from "./model-name-DBTGJc7a.js";
import { a as checkTaskStatus } from "./skeleton-Brd40zkS.js";
import { t as Icon$30 } from "./alertsAndFeedback-BpcdEYpr.js";
import { i as CheckboxList, r as useRenderI18nObject } from "./auth-BGs48SaG.js";
import { t as Radio } from "./radio-4K5OYxdz.js";
import { t as ui_default } from "./ui-hwb8ZSx9.js";
import { t as useGetIcon } from "./use-get-icon-D8ihnTYG.js";
import { C as ModelParameterModal$1, D as useSessionStorageState, E as ParameterItem, M as prompt_editor_height_resize_wrap_default, O as createUseStorageState, S as stopChatMessageResponding$1, T as PresetsParameter, _ as fetchSuggestedQuestions$1, b as generateRule, c as style_module_default$2, d as res_placeholder_default, f as instruction_editor_in_workflow_default, h as fetchConversationMessages, l as Markdown, m as idea_output_default, o as useGenData, p as instruction_editor_default, s as result_default$1, t as code_editor_default, v as fetchTextGenerationMessage, w as Trigger, x as sendCompletionMessage$1, y as generateBasicAppFirstTimeRule } from "./code-editor-BPvpmrXg.js";
import { c as getProcessedFilesFromResponse, o as getFilesInLogs, s as getProcessedFiles } from "./utils-Dh7W533Q.js";
import { t as CodeLanguage } from "./types-C18Ag7fa.js";
import { I as Icon$32, L as Icon$31 } from "./dropdown-menu-DdKnIBZG.js";
import { n as Icon$33, t as Icon$34 } from "./arrows-fbeBWnky.js";
import { a as useClickAway, b as Icon$36, d as variable_label_in_text_default, f as variable_label_in_select_default, p as variable_label_in_node_default, s as useAvailableVarList, t as var_reference_picker_default, u as var_reference_vars_default, v as Icon$35, x as Icon$37 } from "./var-reference-picker-PlAsXjUc.js";
import { t as ErrorHandleTypeEnum } from "./types-BJj1k75y.js";
import { i as FileUploaderInAttachmentWrapper, t as FileList } from "./file-uploader-DuOqY7O5.js";
import { i as TextGenerationImageUploader, n as processOpeningStatement, r as bool_input_default, t as getProcessedInputs } from "./utils-x6-EORb9.js";
import { a as useMCPToolAvailability, r as mcp_tool_not_support_tooltip_default, t as AllTools, x as SearchBox } from "./all-tools-CeIs_t-g.js";
import { i as useMittContextSelector } from "./install-from-marketplace-xx52t9E_.js";
import { i as FeaturesProvider, n as useFeatures, r as useFeaturesStore, t as AudioPlayerManager } from "./audio.player.manager-BbxYn4nN.js";
import { t as require_dist } from "./dist-BcmQ9DaV.js";
import { t as config_select_default } from "./config-select-BdPKxz_Z.js";
import { t as option_card_default$1 } from "./option-card-ChUs8MBx.js";
import { t as EmojiPicker } from "./emoji-picker-bCOFUD1x.js";
import { n as field_default, t as file_upload_setting_default } from "./file-upload-setting-jLgSbj6D.js";
import { n as useChatContext } from "./context-X_lHIALZ.js";
import { c as Icon$40, i as Icon$39, t as Icon$38 } from "./features-D2eB-UM8.js";
import { t as confirm_add_var_default } from "./confirm-add-var-B3rmLWXj.js";
import { t as AppTypeIcon } from "./type-selector-B_8ndX5u.js";
import * as React$1 from "react";
import React, { Fragment, cloneElement, createContext, memo, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useReducer, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/object/clone.mjs
function clone(obj) {
	if (isPrimitive(obj)) return obj;
	if (Array.isArray(obj) || isTypedArray(obj) || obj instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && obj instanceof SharedArrayBuffer) return obj.slice(0);
	const prototype = Object.getPrototypeOf(obj);
	if (prototype == null) return Object.assign(Object.create(prototype), obj);
	const Constructor = prototype.constructor;
	if (obj instanceof Date || obj instanceof Map || obj instanceof Set) return new Constructor(obj);
	if (obj instanceof RegExp) {
		const newRegExp = new Constructor(obj);
		newRegExp.lastIndex = obj.lastIndex;
		return newRegExp;
	}
	if (obj instanceof DataView) return new Constructor(obj.buffer.slice(0));
	if (obj instanceof Error) {
		let newError;
		if (obj instanceof AggregateError) newError = new Constructor(obj.errors, obj.message, { cause: obj.cause });
		else newError = new Constructor(obj.message, { cause: obj.cause });
		newError.stack = obj.stack;
		Object.assign(newError, obj);
		return newError;
	}
	if (typeof File !== "undefined" && obj instanceof File) return new Constructor([obj], obj.name, {
		type: obj.type,
		lastModified: obj.lastModified
	});
	if (typeof obj === "object") return Object.assign(Object.create(prototype), obj);
	return obj;
}
//#endregion
//#region node_modules/.pnpm/@reactflow+minimap@11.7.14_@types+react@19.2.14_immer@11.1.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@reactflow/minimap/dist/esm/index.mjs
var MiniMapNode = ({ id, x, y, width, height, style, color, strokeColor, strokeWidth, className, borderRadius, shapeRendering, onClick, selected }) => {
	const { background, backgroundColor } = style || {};
	const fill = color || background || backgroundColor;
	return React.createElement("rect", {
		className: cc([
			"react-flow__minimap-node",
			{ selected },
			className
		]),
		x,
		y,
		rx: borderRadius,
		ry: borderRadius,
		width,
		height,
		fill,
		stroke: strokeColor,
		strokeWidth,
		shapeRendering,
		onClick: onClick ? (event) => onClick(event, id) : void 0
	});
};
MiniMapNode.displayName = "MiniMapNode";
var MiniMapNode$1 = memo(MiniMapNode);
var selector$1 = (s) => s.nodeOrigin;
var selectorNodes = (s) => s.getNodes().filter((node) => !node.hidden && node.width && node.height);
var getAttrFunction = (func) => func instanceof Function ? func : () => func;
function MiniMapNodes({ nodeStrokeColor = "transparent", nodeColor = "#e2e2e2", nodeClassName = "", nodeBorderRadius = 5, nodeStrokeWidth = 2, nodeComponent: NodeComponent = MiniMapNode$1, onClick }) {
	const nodes = useStore$3(selectorNodes, shallow$1);
	const nodeOrigin = useStore$3(selector$1);
	const nodeColorFunc = getAttrFunction(nodeColor);
	const nodeStrokeColorFunc = getAttrFunction(nodeStrokeColor);
	const nodeClassNameFunc = getAttrFunction(nodeClassName);
	const shapeRendering = typeof window === "undefined" || !!window.chrome ? "crispEdges" : "geometricPrecision";
	return React.createElement(React.Fragment, null, nodes.map((node) => {
		const { x, y } = getNodePositionWithOrigin(node, nodeOrigin).positionAbsolute;
		return React.createElement(NodeComponent, {
			key: node.id,
			x,
			y,
			width: node.width,
			height: node.height,
			style: node.style,
			selected: node.selected,
			className: nodeClassNameFunc(node),
			color: nodeColorFunc(node),
			borderRadius: nodeBorderRadius,
			strokeColor: nodeStrokeColorFunc(node),
			strokeWidth: nodeStrokeWidth,
			shapeRendering,
			onClick,
			id: node.id
		});
	}));
}
var MiniMapNodes$1 = memo(MiniMapNodes);
var defaultWidth = 200;
var defaultHeight = 150;
var selector$2 = (s) => {
	const nodes = s.getNodes();
	const viewBB = {
		x: -s.transform[0] / s.transform[2],
		y: -s.transform[1] / s.transform[2],
		width: s.width / s.transform[2],
		height: s.height / s.transform[2]
	};
	return {
		viewBB,
		boundingRect: nodes.length > 0 ? getBoundsOfRects(getNodesBounds(nodes, s.nodeOrigin), viewBB) : viewBB,
		rfId: s.rfId
	};
};
var ARIA_LABEL_KEY = "react-flow__minimap-desc";
function MiniMap({ style, className, nodeStrokeColor = "transparent", nodeColor = "#e2e2e2", nodeClassName = "", nodeBorderRadius = 5, nodeStrokeWidth = 2, nodeComponent, maskColor = "rgb(240, 240, 240, 0.6)", maskStrokeColor = "none", maskStrokeWidth = 1, position = "bottom-right", onClick, onNodeClick, pannable = false, zoomable = false, ariaLabel = "React Flow mini map", inversePan = false, zoomStep = 10, offsetScale = 5 }) {
	const store = useStoreApi();
	const svg = useRef(null);
	const { boundingRect, viewBB, rfId } = useStore$3(selector$2, shallow$1);
	const elementWidth = style?.width ?? defaultWidth;
	const elementHeight = style?.height ?? defaultHeight;
	const scaledWidth = boundingRect.width / elementWidth;
	const scaledHeight = boundingRect.height / elementHeight;
	const viewScale = Math.max(scaledWidth, scaledHeight);
	const viewWidth = viewScale * elementWidth;
	const viewHeight = viewScale * elementHeight;
	const offset = offsetScale * viewScale;
	const x = boundingRect.x - (viewWidth - boundingRect.width) / 2 - offset;
	const y = boundingRect.y - (viewHeight - boundingRect.height) / 2 - offset;
	const width = viewWidth + offset * 2;
	const height = viewHeight + offset * 2;
	const labelledBy = `${ARIA_LABEL_KEY}-${rfId}`;
	const viewScaleRef = useRef(0);
	viewScaleRef.current = viewScale;
	useEffect(() => {
		if (svg.current) {
			const selection = select_default(svg.current);
			const zoomHandler = (event) => {
				const { transform, d3Selection, d3Zoom } = store.getState();
				if (event.sourceEvent.type !== "wheel" || !d3Selection || !d3Zoom) return;
				const pinchDelta = -event.sourceEvent.deltaY * (event.sourceEvent.deltaMode === 1 ? .05 : event.sourceEvent.deltaMode ? 1 : .002) * zoomStep;
				const zoom = transform[2] * Math.pow(2, pinchDelta);
				d3Zoom.scaleTo(d3Selection, zoom);
			};
			const panHandler = (event) => {
				const { transform, d3Selection, d3Zoom, translateExtent, width, height } = store.getState();
				if (event.sourceEvent.type !== "mousemove" || !d3Selection || !d3Zoom) return;
				const moveScale = viewScaleRef.current * Math.max(1, transform[2]) * (inversePan ? -1 : 1);
				const position = {
					x: transform[0] - event.sourceEvent.movementX * moveScale,
					y: transform[1] - event.sourceEvent.movementY * moveScale
				};
				const extent = [[0, 0], [width, height]];
				const nextTransform = identity.translate(position.x, position.y).scale(transform[2]);
				const constrainedTransform = d3Zoom.constrain()(nextTransform, extent, translateExtent);
				d3Zoom.transform(d3Selection, constrainedTransform);
			};
			const zoomAndPanHandler = zoom_default().on("zoom", pannable ? panHandler : null).on("zoom.wheel", zoomable ? zoomHandler : null);
			selection.call(zoomAndPanHandler);
			return () => {
				selection.on("zoom", null);
			};
		}
	}, [
		pannable,
		zoomable,
		inversePan,
		zoomStep
	]);
	const onSvgClick = onClick ? (event) => {
		const rfCoord = pointer_default(event);
		onClick(event, {
			x: rfCoord[0],
			y: rfCoord[1]
		});
	} : void 0;
	const onSvgNodeClick = onNodeClick ? (event, nodeId) => {
		onNodeClick(event, store.getState().nodeInternals.get(nodeId));
	} : void 0;
	return React.createElement(Panel, {
		position,
		style,
		className: cc(["react-flow__minimap", className]),
		"data-testid": "rf__minimap"
	}, React.createElement("svg", {
		width: elementWidth,
		height: elementHeight,
		viewBox: `${x} ${y} ${width} ${height}`,
		role: "img",
		"aria-labelledby": labelledBy,
		ref: svg,
		onClick: onSvgClick
	}, ariaLabel && React.createElement("title", { id: labelledBy }, ariaLabel), React.createElement(MiniMapNodes$1, {
		onClick: onSvgNodeClick,
		nodeColor,
		nodeStrokeColor,
		nodeBorderRadius,
		nodeClassName,
		nodeStrokeWidth,
		nodeComponent
	}), React.createElement("path", {
		className: "react-flow__minimap-mask",
		d: `M${x - offset},${y - offset}h${width + offset * 2}v${height + offset * 2}h${-width - offset * 2}z
        M${viewBB.x},${viewBB.y}h${viewBB.width}v${viewBB.height}h${-viewBB.width}z`,
		fill: maskColor,
		fillRule: "evenodd",
		stroke: maskStrokeColor,
		strokeWidth: maskStrokeWidth,
		pointerEvents: "none"
	})));
}
MiniMap.displayName = "MiniMap";
var MiniMap$1 = memo(MiniMap);
//#endregion
//#region node_modules/.pnpm/@reactflow+background@11.3.14_@types+react@19.2.14_immer@11.1.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@reactflow/background/dist/esm/index.mjs
var BackgroundVariant;
(function(BackgroundVariant) {
	BackgroundVariant["Lines"] = "lines";
	BackgroundVariant["Dots"] = "dots";
	BackgroundVariant["Cross"] = "cross";
})(BackgroundVariant || (BackgroundVariant = {}));
function LinePattern({ color, dimensions, lineWidth }) {
	return React.createElement("path", {
		stroke: color,
		strokeWidth: lineWidth,
		d: `M${dimensions[0] / 2} 0 V${dimensions[1]} M0 ${dimensions[1] / 2} H${dimensions[0]}`
	});
}
function DotPattern({ color, radius }) {
	return React.createElement("circle", {
		cx: radius,
		cy: radius,
		r: radius,
		fill: color
	});
}
var defaultColor = {
	[BackgroundVariant.Dots]: "#91919a",
	[BackgroundVariant.Lines]: "#eee",
	[BackgroundVariant.Cross]: "#e2e2e2"
};
var defaultSize = {
	[BackgroundVariant.Dots]: 1,
	[BackgroundVariant.Lines]: 1,
	[BackgroundVariant.Cross]: 6
};
var selector = (s) => ({
	transform: s.transform,
	patternId: `pattern-${s.rfId}`
});
function Background({ id, variant = BackgroundVariant.Dots, gap = 20, size, lineWidth = 1, offset = 2, color, style, className }) {
	const ref = useRef(null);
	const { transform, patternId } = useStore$3(selector, shallow$1);
	const patternColor = color || defaultColor[variant];
	const patternSize = size || defaultSize[variant];
	const isDots = variant === BackgroundVariant.Dots;
	const isCross = variant === BackgroundVariant.Cross;
	const gapXY = Array.isArray(gap) ? gap : [gap, gap];
	const scaledGap = [gapXY[0] * transform[2] || 1, gapXY[1] * transform[2] || 1];
	const scaledSize = patternSize * transform[2];
	const patternDimensions = isCross ? [scaledSize, scaledSize] : scaledGap;
	const patternOffset = isDots ? [scaledSize / offset, scaledSize / offset] : [patternDimensions[0] / offset, patternDimensions[1] / offset];
	return React.createElement("svg", {
		className: cc(["react-flow__background", className]),
		style: {
			...style,
			position: "absolute",
			width: "100%",
			height: "100%",
			top: 0,
			left: 0
		},
		ref,
		"data-testid": "rf__background"
	}, React.createElement("pattern", {
		id: patternId + id,
		x: transform[0] % scaledGap[0],
		y: transform[1] % scaledGap[1],
		width: scaledGap[0],
		height: scaledGap[1],
		patternUnits: "userSpaceOnUse",
		patternTransform: `translate(-${patternOffset[0]},-${patternOffset[1]})`
	}, isDots ? React.createElement(DotPattern, {
		color: patternColor,
		radius: scaledSize / offset
	}) : React.createElement(LinePattern, {
		dimensions: patternDimensions,
		color: patternColor,
		lineWidth
	})), React.createElement("rect", {
		x: "0",
		y: "0",
		width: "100%",
		height: "100%",
		fill: `url(#${patternId + id})`
	}));
}
Background.displayName = "Background";
var Background$1 = memo(Background);
//#endregion
//#region app/components/base/chat/embedded-chatbot/theme/theme-context.ts
var Theme = class {
	chatColorTheme;
	chatColorThemeInverted;
	primaryColor = "#1C64F2";
	backgroundHeaderColorStyle = "backgroundImage: linear-gradient(to right, #2563eb, #0ea5e9)";
	headerBorderBottomStyle = "";
	colorFontOnHeaderStyle = "color: white";
	colorPathOnHeader = "text-text-primary-on-surface";
	backgroundButtonDefaultColorStyle = "backgroundColor: #1C64F2";
	roundedBackgroundColorStyle = "backgroundColor: rgb(245 248 255)";
	chatBubbleColorStyle = "";
	constructor(chatColorTheme = null, chatColorThemeInverted = false) {
		this.chatColorTheme = chatColorTheme;
		this.chatColorThemeInverted = chatColorThemeInverted;
		this.configCustomColor();
		this.configInvertedColor();
	}
	configCustomColor() {
		if (this.chatColorTheme !== null && this.chatColorTheme !== "") {
			this.primaryColor = this.chatColorTheme ?? "#1C64F2";
			this.backgroundHeaderColorStyle = `backgroundColor: ${this.primaryColor}`;
			this.backgroundButtonDefaultColorStyle = `backgroundColor: ${this.primaryColor}; color: ${this.colorFontOnHeaderStyle};`;
			this.roundedBackgroundColorStyle = `backgroundColor: ${hexToRGBA(this.primaryColor, .05)}`;
			this.chatBubbleColorStyle = `backgroundColor: ${hexToRGBA(this.primaryColor, .15)}`;
		}
	}
	configInvertedColor() {
		if (this.chatColorThemeInverted) {
			this.backgroundHeaderColorStyle = "backgroundColor: #ffffff";
			this.colorFontOnHeaderStyle = `color: ${this.primaryColor}`;
			this.headerBorderBottomStyle = "borderBottom: 1px solid #ccc";
			this.colorPathOnHeader = this.primaryColor;
		}
	}
};
var ThemeBuilder = class {
	_theme;
	buildChecker = false;
	get theme() {
		if (this._theme === void 0) {
			this._theme = new Theme();
			return this._theme;
		} else return this._theme;
	}
	buildTheme(chatColorTheme = null, chatColorThemeInverted = false) {
		if (!this.buildChecker) {
			this._theme = new Theme(chatColorTheme, chatColorThemeInverted);
			this.buildChecker = true;
		} else if (this.theme?.chatColorTheme !== chatColorTheme || this.theme?.chatColorThemeInverted !== chatColorThemeInverted) {
			this._theme = new Theme(chatColorTheme, chatColorThemeInverted);
			this.buildChecker = true;
		}
	}
};
var ThemeContext = createContext$1(new ThemeBuilder());
var useThemeContext = () => useContext$1(ThemeContext);
//#endregion
//#region hooks/use-knowledge.ts
var useKnowledge = () => {
	const { t } = useTranslation();
	const formatIndexingTechnique = useCallback((indexingTechnique) => {
		return t(`indexingTechnique.${indexingTechnique}`, { ns: "dataset" });
	}, [t]);
	const formatIndexingMethod = useCallback((indexingMethod, isEco) => {
		if (isEco) return t("indexingMethod.invertedIndex", { ns: "dataset" });
		return t(`indexingMethod.${indexingMethod}`, { ns: "dataset" });
	}, [t]);
	return {
		formatIndexingTechnique,
		formatIndexingMethod,
		formatIndexingTechniqueAndMethod: useCallback((indexingTechnique, indexingMethod) => {
			let result = formatIndexingTechnique(indexingTechnique);
			if (indexingMethod) result += ` · ${formatIndexingMethod(indexingMethod, indexingTechnique === "economy")}`;
			return result;
		}, [formatIndexingTechnique, formatIndexingMethod])
	};
};
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/useFavicon/index.js
var ImgTypeMap = {
	SVG: "image/svg+xml",
	ICO: "image/x-icon",
	GIF: "image/gif",
	PNG: "image/png"
};
var useFavicon = function(href) {
	useEffect(function() {
		if (!href) return;
		var cutUrl = href.split(".");
		var imgSuffix = cutUrl[cutUrl.length - 1].toLocaleUpperCase();
		var link = document.querySelector("link[rel*='icon']") || document.createElement("link");
		link.type = ImgTypeMap[imgSuffix];
		link.href = href;
		link.rel = "shortcut icon";
		document.getElementsByTagName("head")[0].appendChild(link);
	}, [href]);
};
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/useTitle/index.js
var DEFAULT_OPTIONS = { restoreOnUnmount: false };
function useTitle(title, options) {
	if (options === void 0) options = DEFAULT_OPTIONS;
	var titleRef = useRef(isBrowser ? document.title : "");
	useEffect(function() {
		document.title = title;
	}, [title]);
	useUnmount(function() {
		if (options.restoreOnUnmount) document.title = titleRef.current;
	});
}
//#endregion
//#region hooks/use-document-title.ts
function useDocumentTitle(title) {
	const isPending = useIsSystemFeaturesPending();
	const systemFeatures = useGlobalPublicStore((s) => s.systemFeatures);
	const prefix = title ? `${title} - ` : "";
	let titleStr = "";
	let favicon = "";
	if (isPending === false) if (systemFeatures.branding.enabled) {
		titleStr = `${prefix}${systemFeatures.branding.application_title}`;
		favicon = systemFeatures.branding.favicon;
	} else {
		titleStr = `${prefix}Dify`;
		favicon = `${basePath}/favicon.ico`;
	}
	useTitle(titleStr);
	useEffect(() => {
		let apple = null;
		if (systemFeatures.branding.favicon) {
			document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon'], link[rel='mask-icon']").forEach((n) => n.parentNode?.removeChild(n));
			apple = document.createElement("link");
			apple.rel = "apple-touch-icon";
			apple.href = systemFeatures.branding.favicon;
			document.head.appendChild(apple);
		}
		return () => {
			apple?.remove();
		};
	}, [systemFeatures.branding.favicon]);
	useFavicon(favicon);
}
//#endregion
//#region app/components/workflow/nodes/_base/components/collapse/field-collapse.tsx
var FieldCollapse = ({ title, children, collapsed, onCollapse, operations }) => {
	return /* @__PURE__ */ jsx("div", {
		className: "py-4",
		children: /* @__PURE__ */ jsx(Collapse, {
			trigger: /* @__PURE__ */ jsx("div", {
				className: "system-sm-semibold-uppercase flex h-6 cursor-pointer items-center text-text-secondary",
				children: title
			}),
			operations,
			collapsed,
			onCollapse,
			children: /* @__PURE__ */ jsx("div", {
				className: "px-4",
				children
			})
		})
	});
};
//#endregion
//#region app/components/workflow/nodes/_base/components/collapse/index.tsx
var Collapse = ({ disabled, trigger, children, collapsed, onCollapse, operations, hideCollapseIcon }) => {
	const [collapsedLocal, setCollapsedLocal] = useState(true);
	const collapsedMerged = collapsed !== void 0 ? collapsed : collapsedLocal;
	const collapseIcon = useMemo(() => {
		if (disabled) return null;
		return /* @__PURE__ */ jsx(Icon$25, { className: cn("h-4 w-4 cursor-pointer text-text-quaternary group-hover/collapse:text-text-secondary", collapsedMerged && "rotate-[270deg]") });
	}, [collapsedMerged, disabled]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
		className: "group/collapse flex items-center",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "ml-4 flex grow items-center",
			onClick: () => {
				if (!disabled) {
					setCollapsedLocal(!collapsedMerged);
					onCollapse?.(!collapsedMerged);
				}
			},
			children: [typeof trigger === "function" ? trigger(collapseIcon) : trigger, !hideCollapseIcon && /* @__PURE__ */ jsx("div", {
				className: "h-4 w-4 shrink-0",
				children: collapseIcon
			})]
		}), operations]
	}), !collapsedMerged && children] });
};
//#endregion
//#region service/_tools_util.ts
var buildProviderQuery = (collectionName) => {
	const query = new URLSearchParams();
	query.set("provider", collectionName);
	return query.toString();
};
//#endregion
//#region service/tools.ts
var fetchCollectionList = () => {
	return get("/workspaces/current/tool-providers");
};
var fetchBuiltInToolList = (collectionName) => {
	return get(`/workspaces/current/tool-provider/builtin/${collectionName}/tools`);
};
var fetchCustomToolList = (collectionName) => {
	return get(`/workspaces/current/tool-provider/api/tools?${buildProviderQuery(collectionName)}`);
};
var fetchModelToolList = (collectionName) => {
	return get(`/workspaces/current/tool-provider/model/tools?${buildProviderQuery(collectionName)}`);
};
var fetchWorkflowToolList = (appID) => {
	return get(`/workspaces/current/tool-provider/workflow/tools?workflow_tool_id=${appID}`);
};
var fetchBuiltInToolCredentialSchema = (collectionName) => {
	return get(`/workspaces/current/tool-provider/builtin/${collectionName}/credentials_schema`);
};
var fetchBuiltInToolCredential = (collectionName) => {
	return get(`/workspaces/current/tool-provider/builtin/${collectionName}/credentials`);
};
var updateBuiltInToolCredential = (collectionName, credential) => {
	return post(`/workspaces/current/tool-provider/builtin/${collectionName}/update`, { body: { credentials: credential } });
};
var removeBuiltInToolCredential = (collectionName) => {
	return post(`/workspaces/current/tool-provider/builtin/${collectionName}/delete`, { body: {} });
};
var parseParamsSchema = (schema) => {
	return post("/workspaces/current/tool-provider/api/schema", { body: { schema } });
};
var fetchCustomCollection = (collectionName) => {
	return get(`/workspaces/current/tool-provider/api/get?${buildProviderQuery(collectionName)}`);
};
var createCustomCollection = (collection) => {
	return post("/workspaces/current/tool-provider/api/add", { body: { ...collection } });
};
var updateCustomCollection = (collection) => {
	return post("/workspaces/current/tool-provider/api/update", { body: { ...collection } });
};
var removeCustomCollection = (collectionName) => {
	return post("/workspaces/current/tool-provider/api/delete", { body: { provider: collectionName } });
};
var importSchemaFromURL = (url) => {
	return get("/workspaces/current/tool-provider/api/remote", { params: { url } });
};
var testAPIAvailable = (payload) => {
	return post("/workspaces/current/tool-provider/api/test/pre", { body: { ...payload } });
};
var createWorkflowToolProvider = (payload) => {
	return post("/workspaces/current/tool-provider/workflow/create", { body: { ...payload } });
};
var saveWorkflowToolProvider = (payload) => {
	return post("/workspaces/current/tool-provider/workflow/update", { body: { ...payload } });
};
var fetchWorkflowToolDetail = (toolID) => {
	return get(`/workspaces/current/tool-provider/workflow/get?workflow_tool_id=${toolID}`);
};
var deleteWorkflowTool = (toolID) => {
	return post("/workspaces/current/tool-provider/workflow/delete", { body: { workflow_tool_id: toolID } });
};
//#endregion
//#region app/components/base/tab-header/index.tsx
var TabHeader = ({ items, value, itemClassName, itemWrapClassName, activeItemClassName, onChange }) => {
	const renderItem = ({ id, name, icon, extra, disabled }) => /* @__PURE__ */ jsxs("div", {
		"data-testid": `tab-header-item-${id}`,
		className: cn("relative flex cursor-pointer items-center border-b-2 border-transparent pb-2 pt-2.5 system-md-semibold", id === value ? cn("border-components-tab-active text-text-primary", activeItemClassName) : "text-text-tertiary", disabled && "cursor-not-allowed opacity-30", itemWrapClassName),
		onClick: () => !disabled && onChange(id),
		children: [
			icon || "",
			/* @__PURE__ */ jsx("div", {
				className: cn("ml-2", itemClassName),
				children: name
			}),
			extra || ""
		]
	}, id);
	return /* @__PURE__ */ jsxs("div", {
		"data-testid": "tab-header",
		className: "flex justify-between",
		children: [/* @__PURE__ */ jsx("div", {
			"data-testid": "tab-header-left",
			className: "flex space-x-4",
			children: items.filter((item) => !item.isRight).map(renderItem)
		}), /* @__PURE__ */ jsx("div", {
			"data-testid": "tab-header-right",
			className: "flex space-x-4",
			children: items.filter((item) => item.isRight).map(renderItem)
		})]
	});
};
var tab_header_default = React$1.memo(TabHeader);
//#endregion
//#region utils/get-icon.ts
var getIconFromMarketPlace = (plugin_id) => {
	return `${MARKETPLACE_API_PREFIX}/plugins/${plugin_id}/icon`;
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/app-selector/app-inputs-form.tsx
var AppInputsForm = ({ inputsForms, inputs, inputsRef, onFormChange }) => {
	const { t } = useTranslation();
	const handleFormChange = useCallback((variable, value) => {
		onFormChange({
			...inputsRef.current,
			[variable]: value
		});
	}, [onFormChange, inputsRef]);
	const renderField = (form) => {
		const { label, variable, options } = form;
		if (form.type === InputVarType.textInput) return /* @__PURE__ */ jsx(Input$1, {
			value: inputs[variable] || "",
			onChange: (e) => handleFormChange(variable, e.target.value),
			placeholder: label
		});
		if (form.type === InputVarType.number) return /* @__PURE__ */ jsx(Input$1, {
			type: "number",
			value: inputs[variable] || "",
			onChange: (e) => handleFormChange(variable, e.target.value),
			placeholder: label
		});
		if (form.type === InputVarType.paragraph) return /* @__PURE__ */ jsx(Textarea, {
			value: inputs[variable] || "",
			onChange: (e) => handleFormChange(variable, e.target.value),
			placeholder: label
		});
		if (form.type === InputVarType.select) return /* @__PURE__ */ jsx(PortalSelect, {
			popupClassName: "w-[356px] z-[1050]",
			value: inputs[variable] || "",
			items: options.map((option) => ({
				value: option,
				name: option
			})),
			onSelect: (item) => handleFormChange(variable, item.value),
			placeholder: label
		});
		if (form.type === InputVarType.singleFile) return /* @__PURE__ */ jsx(FileUploaderInAttachmentWrapper, {
			value: inputs[variable] ? [inputs[variable]] : [],
			onChange: (files) => handleFormChange(variable, files[0]),
			fileConfig: {
				allowed_file_types: form.allowed_file_types,
				allowed_file_extensions: form.allowed_file_extensions,
				allowed_file_upload_methods: form.allowed_file_upload_methods,
				number_limits: 1,
				fileUploadConfig: form.fileUploadConfig
			}
		});
		if (form.type === InputVarType.multiFiles) return /* @__PURE__ */ jsx(FileUploaderInAttachmentWrapper, {
			value: inputs[variable],
			onChange: (files) => handleFormChange(variable, files),
			fileConfig: {
				allowed_file_types: form.allowed_file_types,
				allowed_file_extensions: form.allowed_file_extensions,
				allowed_file_upload_methods: form.allowed_file_upload_methods,
				number_limits: form.max_length,
				fileUploadConfig: form.fileUploadConfig
			}
		});
	};
	if (!inputsForms.length) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "flex flex-col gap-4 px-4 py-2",
		children: inputsForms.map((form) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
			className: "system-sm-semibold mb-1 flex h-6 items-center gap-1 text-text-secondary",
			children: [/* @__PURE__ */ jsx("div", {
				className: "truncate",
				children: form.label
			}), !form.required && /* @__PURE__ */ jsx("span", {
				className: "system-xs-regular text-text-tertiary",
				children: t("panel.optional", { ns: "workflow" })
			})]
		}), renderField(form)] }, form.variable))
	});
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/app-selector/hooks/use-app-inputs-form-schema.ts
var BASIC_INPUT_TYPE_MAP = {
	"paragraph": "paragraph",
	"number": "number",
	"checkbox": "checkbox",
	"select": "select",
	"file-list": "file-list",
	"file": "file",
	"json_object": "json_object"
};
var FILE_INPUT_TYPES = new Set(["file-list", "file"]);
var WORKFLOW_FILE_VAR_TYPES = new Set([InputVarType.multiFiles, InputVarType.singleFile]);
function isBasicAppMode(mode) {
	return mode !== AppModeEnum.ADVANCED_CHAT && mode !== AppModeEnum.WORKFLOW;
}
function supportsImageUpload(mode) {
	return mode === AppModeEnum.COMPLETION || mode === AppModeEnum.WORKFLOW;
}
function buildFileConfig(fileConfig) {
	return {
		image: {
			detail: fileConfig?.image?.detail || Resolution.high,
			enabled: !!fileConfig?.image?.enabled,
			number_limits: fileConfig?.image?.number_limits || 3,
			transfer_methods: fileConfig?.image?.transfer_methods || ["local_file", "remote_url"]
		},
		enabled: !!(fileConfig?.enabled || fileConfig?.image?.enabled),
		allowed_file_types: fileConfig?.allowed_file_types || [SupportUploadFileTypes.image],
		allowed_file_extensions: fileConfig?.allowed_file_extensions || [...FILE_EXTS[SupportUploadFileTypes.image]].map((ext) => `.${ext}`),
		allowed_file_upload_methods: fileConfig?.allowed_file_upload_methods || fileConfig?.image?.transfer_methods || ["local_file", "remote_url"],
		number_limits: fileConfig?.number_limits || fileConfig?.image?.number_limits || 3
	};
}
function mapBasicAppInputItem(item, fileUploadConfig) {
	for (const [key, type] of Object.entries(BASIC_INPUT_TYPE_MAP)) {
		if (!item[key]) continue;
		const inputData = item[key];
		const needsFileConfig = FILE_INPUT_TYPES.has(key);
		return {
			...inputData,
			type,
			required: false,
			...needsFileConfig && { fileUploadConfig }
		};
	}
	const textInput = item["text-input"];
	if (!textInput) return null;
	return {
		...textInput,
		type: "text-input",
		required: false
	};
}
function mapWorkflowVariable(variable, fileUploadConfig) {
	const needsFileConfig = WORKFLOW_FILE_VAR_TYPES.has(variable.type);
	return {
		...variable,
		type: variable.type,
		required: false,
		...needsFileConfig && { fileUploadConfig }
	};
}
function createImageUploadSchema(basicFileConfig, fileUploadConfig) {
	return {
		label: "Image Upload",
		variable: "#image#",
		type: InputVarType.singleFile,
		required: false,
		...basicFileConfig,
		fileUploadConfig
	};
}
function buildBasicAppSchema(currentApp, fileUploadConfig) {
	const userInputForm = currentApp.model_config?.user_input_form;
	if (!userInputForm) return [];
	return userInputForm.filter((item) => !item.external_data_tool).map((item) => mapBasicAppInputItem(item, fileUploadConfig)).filter((item) => item !== null);
}
function buildWorkflowSchema(workflow, fileUploadConfig) {
	const startNode = workflow.graph?.nodes.find((node) => node.data.type === BlockEnum.Start);
	if (!startNode?.data.variables) return [];
	return startNode.data.variables.map((variable) => mapWorkflowVariable(variable, fileUploadConfig));
}
function useAppInputsFormSchema({ appDetail }) {
	const isBasicApp = isBasicAppMode(appDetail.mode);
	const { data: fileUploadConfig } = useFileUploadConfig();
	const { data: currentApp, isFetching: isAppLoading } = useAppDetail(appDetail.id);
	const { data: currentWorkflow, isFetching: isWorkflowLoading } = useAppWorkflow(isBasicApp ? "" : appDetail.id);
	const isLoading = isAppLoading || isWorkflowLoading;
	return {
		inputFormSchema: useMemo(() => {
			if (!currentApp) return [];
			if (!isBasicApp && !currentWorkflow) return [];
			const baseSchema = isBasicApp ? buildBasicAppSchema(currentApp, fileUploadConfig) : buildWorkflowSchema(currentWorkflow, fileUploadConfig);
			if (!supportsImageUpload(currentApp.mode)) return baseSchema;
			const basicFileConfig = buildFileConfig(isBasicApp ? currentApp.model_config?.file_upload : currentWorkflow?.features?.file_upload);
			if (!basicFileConfig.enabled) return baseSchema;
			return [...baseSchema, createImageUploadSchema(basicFileConfig, fileUploadConfig)];
		}, [
			currentApp,
			currentWorkflow,
			fileUploadConfig,
			isBasicApp
		]),
		isLoading,
		fileUploadConfig
	};
}
//#endregion
//#region app/components/plugins/plugin-detail-panel/app-selector/app-inputs-panel.tsx
var AppInputsPanel = ({ value, appDetail, onFormChange }) => {
	const { t } = useTranslation();
	const inputsRef = useRef(value?.inputs || {});
	const { inputFormSchema, isLoading } = useAppInputsFormSchema({ appDetail });
	const handleFormChange = (newValue) => {
		inputsRef.current = newValue;
		onFormChange(newValue);
	};
	const hasInputs = inputFormSchema.length > 0;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex max-h-[240px] flex-col rounded-b-2xl border-t border-divider-subtle pb-4"),
		children: [
			isLoading && /* @__PURE__ */ jsx("div", {
				className: "pt-3",
				children: /* @__PURE__ */ jsx(Loading, { type: "app" })
			}),
			!isLoading && /* @__PURE__ */ jsx("div", {
				className: "system-sm-semibold mb-2 mt-3 flex h-6 shrink-0 items-center px-4 text-text-secondary",
				children: t("appSelector.params", { ns: "app" })
			}),
			!isLoading && !hasInputs && /* @__PURE__ */ jsx("div", {
				className: "flex h-16 flex-col items-center justify-center",
				children: /* @__PURE__ */ jsx("div", {
					className: "system-sm-regular text-text-tertiary",
					children: t("appSelector.noParams", { ns: "app" })
				})
			}),
			!isLoading && hasInputs && /* @__PURE__ */ jsx("div", {
				className: "grow overflow-y-auto",
				children: /* @__PURE__ */ jsx(AppInputsForm, {
					inputs: value?.inputs || {},
					inputsRef,
					inputsForms: inputFormSchema,
					onFormChange: handleFormChange
				})
			})
		]
	});
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/app-selector/app-picker.tsx
var AppPicker = ({ scope: _scope, disabled, trigger, placement = "right-start", offset = 0, isShow, onShowChange, onSelect, apps, isLoading, hasMore, onLoadMore, searchText, onSearchChange }) => {
	const { t } = useTranslation();
	const observerTargetRef = useRef(null);
	const observerRef = useRef(null);
	const loadingRef = useRef(false);
	const loadingResetTimerIdRef = useRef(void 0);
	const retimeLoadingReset = useCallback((timerId) => {
		if (loadingResetTimerIdRef.current !== void 0) globalThis.clearTimeout(loadingResetTimerIdRef.current);
		loadingResetTimerIdRef.current = timerId;
	}, []);
	const resetLoadingState = useCallback(() => {
		retimeLoadingReset();
		loadingRef.current = false;
	}, [retimeLoadingReset]);
	const disconnectObserver = useCallback(() => {
		if (!observerRef.current) return;
		observerRef.current.disconnect();
		observerRef.current = null;
	}, []);
	const handleIntersection = useCallback((entries) => {
		if (!entries[0].isIntersecting || loadingRef.current || !hasMore || isLoading) return;
		loadingRef.current = true;
		onLoadMore();
		retimeLoadingReset(window.setTimeout(() => {
			loadingRef.current = false;
			retimeLoadingReset();
		}, 500));
	}, [
		hasMore,
		isLoading,
		onLoadMore,
		retimeLoadingReset
	]);
	useEffect(() => {
		if (!isShow) {
			resetLoadingState();
			disconnectObserver();
			return;
		}
		let mutationObserver = null;
		const setupIntersectionObserver = () => {
			if (!observerTargetRef.current) return;
			disconnectObserver();
			observerRef.current = new IntersectionObserver(handleIntersection, {
				root: null,
				rootMargin: "100px",
				threshold: .1
			});
			observerRef.current.observe(observerTargetRef.current);
		};
		mutationObserver = new MutationObserver((_mutations) => {
			if (observerTargetRef.current) {
				setupIntersectionObserver();
				mutationObserver?.disconnect();
			}
		});
		mutationObserver.observe(document.body, {
			childList: true,
			subtree: true
		});
		if (observerTargetRef.current) setupIntersectionObserver();
		return () => {
			resetLoadingState();
			disconnectObserver();
			mutationObserver?.disconnect();
		};
	}, [
		disconnectObserver,
		handleIntersection,
		isShow,
		resetLoadingState
	]);
	const getAppType = (app) => {
		switch (app.mode) {
			case AppModeEnum.ADVANCED_CHAT: return "chatflow";
			case AppModeEnum.AGENT_CHAT: return "agent";
			case AppModeEnum.CHAT: return "chat";
			case AppModeEnum.COMPLETION: return "completion";
			case AppModeEnum.WORKFLOW: return "workflow";
		}
	};
	const handleTriggerClick = () => {
		if (disabled) return;
		onShowChange(true);
	};
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		placement,
		offset,
		open: isShow,
		onOpenChange: onShowChange,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: handleTriggerClick,
			children: trigger
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[1000]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative flex max-h-[400px] min-h-20 w-[356px] flex-col rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg backdrop-blur-sm",
				children: [/* @__PURE__ */ jsx("div", {
					className: "p-2 pb-1",
					children: /* @__PURE__ */ jsx(Input$1, {
						showLeftIcon: true,
						showClearIcon: true,
						value: searchText,
						onChange: (e) => onSearchChange(e.target.value),
						onClear: () => onSearchChange("")
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "min-h-0 flex-1 overflow-y-auto p-1",
					children: [apps.map((app) => /* @__PURE__ */ jsxs("div", {
						className: "flex cursor-pointer items-center gap-3 rounded-lg py-1 pl-2 pr-3 hover:bg-state-base-hover",
						onClick: () => onSelect(app),
						children: [
							/* @__PURE__ */ jsx(app_icon_default, {
								className: "shrink-0",
								size: "xs",
								iconType: app.icon_type,
								icon: app.icon,
								background: app.icon_background,
								imageUrl: app.icon_url
							}),
							/* @__PURE__ */ jsxs("div", {
								title: `${app.name} (${app.id})`,
								className: "grow text-components-input-text-filled system-sm-medium",
								children: [/* @__PURE__ */ jsx("span", {
									className: "mr-1",
									children: app.name
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-text-tertiary",
									children: [
										"(",
										app.id.slice(0, 8),
										")"
									]
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "shrink-0 text-text-tertiary system-2xs-medium-uppercase",
								children: getAppType(app)
							})
						]
					}, app.id)), /* @__PURE__ */ jsx("div", {
						ref: observerTargetRef,
						className: "h-4 w-full",
						children: isLoading && /* @__PURE__ */ jsx("div", {
							className: "flex justify-center py-2",
							children: /* @__PURE__ */ jsx("div", {
								className: "text-sm text-gray-500",
								children: t("loading", { ns: "common" })
							})
						})
					})]
				})]
			})
		})]
	});
};
var app_picker_default = React$1.memo(AppPicker);
//#endregion
//#region app/components/plugins/plugin-detail-panel/app-selector/app-trigger.tsx
var AppTrigger = ({ open, appDetail }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("group flex cursor-pointer items-center rounded-lg bg-components-input-bg-normal p-2 pl-3 hover:bg-state-base-hover-alt", open && "bg-state-base-hover-alt", appDetail && "py-1.5 pl-1.5"),
		children: [
			appDetail && /* @__PURE__ */ jsx(app_icon_default, {
				className: "mr-2",
				size: "xs",
				iconType: appDetail.icon_type,
				icon: appDetail.icon,
				background: appDetail.icon_background,
				imageUrl: appDetail.icon_url
			}),
			appDetail && /* @__PURE__ */ jsx("div", {
				title: appDetail.name,
				className: "system-sm-medium grow text-components-input-text-filled",
				children: appDetail.name
			}),
			!appDetail && /* @__PURE__ */ jsx("div", {
				className: "system-sm-regular grow truncate text-components-input-text-placeholder",
				children: t("appSelector.placeholder", { ns: "app" })
			}),
			/* @__PURE__ */ jsx(f1, { className: cn("ml-0.5 h-4 w-4 shrink-0 text-text-quaternary group-hover:text-text-secondary", open && "text-text-secondary") })
		]
	});
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/app-selector/index.tsx
var PAGE_SIZE = 20;
var AppSelector = ({ value, scope, disabled, placement = "bottom", offset = 4, onSelect }) => {
	const { t } = useTranslation();
	const [isShow, setIsShow] = useState(false);
	const [searchText, setSearchText] = useState("");
	const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteAppList({
		page: 1,
		limit: PAGE_SIZE,
		name: searchText
	});
	const displayedApps = useMemo(() => {
		const pages = data?.pages ?? [];
		if (!pages.length) return [];
		return pages.flatMap(({ data: apps }) => apps);
	}, [data?.pages]);
	const { data: selectedAppDetail } = useAppDetail(value?.app_id || "");
	const currentAppInfo = useMemo(() => {
		if (!value?.app_id) return void 0;
		return selectedAppDetail || displayedApps.find((app) => app.id === value.app_id);
	}, [
		value?.app_id,
		selectedAppDetail,
		displayedApps
	]);
	const appsForPicker = useMemo(() => {
		if (!currentAppInfo) return displayedApps;
		const appIndex = displayedApps.findIndex((a) => a.id === currentAppInfo.id);
		if (appIndex === -1) return [currentAppInfo, ...displayedApps];
		const updatedApps = [...displayedApps];
		updatedApps[appIndex] = currentAppInfo;
		return updatedApps;
	}, [currentAppInfo, displayedApps]);
	const hasMore = hasNextPage ?? true;
	const handleLoadMore = useCallback(async () => {
		if (isFetchingNextPage || !hasMore) return;
		await fetchNextPage();
	}, [
		fetchNextPage,
		hasMore,
		isFetchingNextPage
	]);
	const handleTriggerClick = () => {
		if (disabled) return;
		setIsShow(true);
	};
	const [isShowChooseApp, setIsShowChooseApp] = useState(false);
	const handleSelectApp = (app) => {
		const clearValue = app.id !== value?.app_id;
		onSelect({
			app_id: app.id,
			inputs: clearValue ? {} : value?.inputs || {},
			files: clearValue ? [] : value?.files || []
		});
		setIsShowChooseApp(false);
	};
	const handleFormChange = (inputs) => {
		const newFiles = inputs["#image#"];
		delete inputs["#image#"];
		onSelect({
			app_id: value?.app_id || "",
			inputs,
			files: newFiles ? [newFiles] : value?.files || []
		});
	};
	const formattedValue = useMemo(() => {
		return {
			app_id: value?.app_id || "",
			inputs: {
				...value?.inputs,
				...value?.files?.length ? { "#image#": value.files[0] } : {}
			}
		};
	}, [value]);
	return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs(PortalToFollowElem, {
		placement,
		offset,
		open: isShow,
		onOpenChange: setIsShow,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			className: "w-full",
			onClick: handleTriggerClick,
			children: /* @__PURE__ */ jsx(AppTrigger, {
				open: isShow,
				appDetail: currentAppInfo
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[1000]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative min-h-20 w-[389px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg backdrop-blur-sm",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-1 px-4 py-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-6 items-center text-text-secondary system-sm-semibold",
						children: t("appSelector.label", { ns: "app" })
					}), /* @__PURE__ */ jsx(app_picker_default, {
						placement: "bottom",
						offset,
						trigger: /* @__PURE__ */ jsx(AppTrigger, {
							open: isShowChooseApp,
							appDetail: currentAppInfo
						}),
						isShow: isShowChooseApp,
						onShowChange: setIsShowChooseApp,
						disabled: false,
						onSelect: handleSelectApp,
						scope: scope || "all",
						apps: appsForPicker,
						isLoading: isLoading || isFetchingNextPage,
						hasMore,
						onLoadMore: handleLoadMore,
						searchText,
						onSearchChange: setSearchText
					})]
				}), currentAppInfo && /* @__PURE__ */ jsx(AppInputsPanel, {
					value: formattedValue,
					appDetail: currentAppInfo,
					onFormChange: handleFormChange
				})]
			})
		})]
	}) });
};
var app_selector_default = React$1.memo(AppSelector);
//#endregion
//#region app/components/workflow/nodes/_base/components/install-plugin-button.tsx
var InstallPluginButton = (props) => {
	const { className, uniqueIdentifier, extraIdentifiers = [], onSuccess, ...rest } = props;
	const { t } = useTranslation();
	const identifiers = Array.from(new Set([uniqueIdentifier, ...extraIdentifiers].filter((item) => Boolean(item))));
	const manifest = useCheckInstalled({
		pluginIds: identifiers,
		enabled: identifiers.length > 0
	});
	const install = useInstallPackageFromMarketPlace();
	const [isTracking, setIsTracking] = useState(false);
	const isLoading = manifest.isLoading || install.isPending || isTracking;
	const handleInstall = (e) => {
		e.stopPropagation();
		if (isLoading) return;
		setIsTracking(true);
		install.mutate(uniqueIdentifier, {
			onSuccess: async (response) => {
				const finish = async () => {
					await manifest.refetch();
					onSuccess?.();
					setIsTracking(false);
					install.reset();
				};
				if (!response) {
					await finish();
					return;
				}
				if (response.all_installed) {
					await finish();
					return;
				}
				const { check } = checkTaskStatus();
				try {
					const { status } = await check({
						taskId: response.task_id,
						pluginUniqueIdentifier: uniqueIdentifier
					});
					if (status === TaskStatus$1.failed) {
						setIsTracking(false);
						install.reset();
						return;
					}
					await finish();
				} catch {
					setIsTracking(false);
					install.reset();
				}
			},
			onError: () => {
				setIsTracking(false);
				install.reset();
			}
		});
	};
	if (!manifest.data) return null;
	const identifierSet = new Set(identifiers);
	if (manifest.data.plugins.some((plugin) => identifierSet.has(plugin.id) || plugin.plugin_unique_identifier && identifierSet.has(plugin.plugin_unique_identifier) || plugin.plugin_id && identifierSet.has(plugin.plugin_id))) return null;
	return /* @__PURE__ */ jsxs(Button, {
		variant: "secondary",
		disabled: isLoading,
		...rest,
		onClick: handleInstall,
		className: cn("flex items-center", className),
		children: [!isLoading ? t("nodes.agent.pluginInstaller.install", { ns: "workflow" }) : t("nodes.agent.pluginInstaller.installing", { ns: "workflow" }), !isLoading ? /* @__PURE__ */ jsx($a, { className: "ml-1 size-3.5" }) : /* @__PURE__ */ jsx(Dm, { className: "ml-1 size-3.5 animate-spin" })]
	});
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-parameter-modal/configuration-button.tsx
var ConfigurationButton = ({ modelProvider, handleOpenModal }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Button, {
		size: "small",
		className: "z-[100]",
		onClick: (e) => {
			e.stopPropagation();
			handleOpenModal(modelProvider, ConfigurationMethodEnum.predefinedModel, void 0);
		},
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-center gap-1 px-[3px]",
			children: t("nodes.agent.notAuthorized", { ns: "workflow" })
		}), /* @__PURE__ */ jsx("div", {
			className: "flex h-[14px] w-[14px] items-center justify-center",
			children: /* @__PURE__ */ jsx("div", { className: "h-2 w-2 shrink-0 rounded-[3px] border border-components-badge-status-light-warning-border-inner\n          bg-components-badge-status-light-warning-bg shadow-components-badge-status-light-warning-halo" })
		})]
	});
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-parameter-modal/model-display.tsx
var ModelDisplay = ({ currentModel, modelId }) => {
	return currentModel ? /* @__PURE__ */ jsx(ModelName, {
		className: "flex grow items-center gap-1 px-1 py-[3px]",
		modelItem: currentModel,
		showMode: true,
		showFeatures: true
	}) : /* @__PURE__ */ jsx("div", {
		className: "flex grow items-center gap-1 truncate px-1 py-[3px] opacity-50",
		children: /* @__PURE__ */ jsx("div", {
			className: "system-sm-regular overflow-hidden text-ellipsis text-components-input-text-filled",
			children: modelId
		})
	});
};
//#endregion
//#region app/components/plugins/plugin-mutation-model/index.tsx
var PluginMutationModal = ({ plugin, onCancel, mutation, confirmButtonText, cancelButtonText, modelTitle, description, cardTitleLeft, mutate, modalBottomLeft }) => {
	return /* @__PURE__ */ jsxs(Modal, {
		isShow: true,
		onClose: onCancel,
		className: "min-w-[560px]",
		closable: true,
		title: modelTitle,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "system-md-regular mb-2 mt-3 text-text-secondary",
				children: description
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap content-start items-start gap-1 self-stretch rounded-2xl bg-background-section-burn p-2",
				children: /* @__PURE__ */ jsx(card_default$1, {
					installed: mutation.isSuccess,
					payload: plugin,
					className: "w-full",
					titleLeft: cardTitleLeft
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 self-stretch pt-5",
				children: [/* @__PURE__ */ jsx("div", { children: modalBottomLeft }), /* @__PURE__ */ jsxs("div", {
					className: "ml-auto flex gap-2",
					children: [!mutation.isPending && /* @__PURE__ */ jsx(Button, {
						onClick: onCancel,
						children: cancelButtonText
					}), /* @__PURE__ */ jsx(Button, {
						variant: "primary",
						loading: mutation.isPending,
						onClick: mutate,
						disabled: mutation.isPending,
						children: confirmButtonText
					})]
				})]
			})
		]
	});
};
PluginMutationModal.displayName = "PluginMutationModal";
var plugin_mutation_model_default = memo(PluginMutationModal);
//#endregion
//#region app/components/workflow/nodes/_base/components/switch-plugin-version.tsx
var SwitchPluginVersion = (props) => {
	const { uniqueIdentifier, tooltip, onChange, className } = props;
	const [pluginId] = uniqueIdentifier?.split(":") || [""];
	const [isShow, setIsShow] = useState(false);
	const [isShowUpdateModal, { setTrue: showUpdateModal, setFalse: hideUpdateModal }] = useBoolean(false);
	const [target, setTarget] = useState();
	const pluginDetails = useCheckInstalled({
		pluginIds: [pluginId],
		enabled: true
	});
	const pluginDetail = pluginDetails.data?.plugins.at(0);
	const handleUpdatedFromMarketplace = useCallback(() => {
		hideUpdateModal();
		pluginDetails.refetch();
		onChange?.(target.version);
	}, [
		hideUpdateModal,
		onChange,
		pluginDetails,
		target
	]);
	const { getIconUrl } = useGetIcon();
	const icon = pluginDetail?.declaration.icon ? getIconUrl(pluginDetail.declaration.icon) : void 0;
	const mutation = useUpdatePackageFromMarketPlace();
	const install = () => {
		mutation.mutate({
			new_plugin_unique_identifier: target.pluginUniqueIden,
			original_plugin_unique_identifier: uniqueIdentifier
		}, { onSuccess() {
			handleUpdatedFromMarketplace();
		} });
	};
	const { t } = useTranslation();
	if (!uniqueIdentifier || !pluginId) return null;
	return /* @__PURE__ */ jsx(tooltip_default, {
		popupContent: !isShow && !isShowUpdateModal && tooltip,
		triggerMethod: "hover",
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("flex w-fit items-center justify-center", className),
			onClick: (e) => e.stopPropagation(),
			children: [isShowUpdateModal && pluginDetail && /* @__PURE__ */ jsx(plugin_mutation_model_default, {
				onCancel: hideUpdateModal,
				plugin: pluginManifestToCardPluginProps({
					...pluginDetail.declaration,
					icon
				}),
				mutation,
				mutate: install,
				confirmButtonText: t("nodes.agent.installPlugin.install", { ns: "workflow" }),
				cancelButtonText: t("nodes.agent.installPlugin.cancel", { ns: "workflow" }),
				modelTitle: t("nodes.agent.installPlugin.title", { ns: "workflow" }),
				description: t("nodes.agent.installPlugin.desc", { ns: "workflow" }),
				cardTitleLeft: /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(Badge, {
					className: "mx-1",
					size: "s",
					state: BadgeState.Warning,
					children: `${pluginDetail.version} -> ${target.version}`
				}) }),
				modalBottomLeft: /* @__PURE__ */ jsxs(Link, {
					className: "flex items-center justify-center gap-1",
					href: getMarketplaceUrl(`/plugins/${pluginDetail.declaration.author}/${pluginDetail.declaration.name}`),
					target: "_blank",
					children: [/* @__PURE__ */ jsx("span", {
						className: "system-xs-regular text-xs text-text-accent",
						children: t("nodes.agent.installPlugin.changelog", { ns: "workflow" })
					}), /* @__PURE__ */ jsx(Wt, { className: "size-3 text-text-accent" })]
				})
			}), pluginDetail && /* @__PURE__ */ jsx(plugin_version_picker_default, {
				isShow,
				onShowChange: setIsShow,
				pluginID: pluginId,
				currentVersion: pluginDetail.version,
				onSelect: (state) => {
					setTarget({
						pluginUniqueIden: state.unique_identifier,
						version: state.version
					});
					showUpdateModal();
				},
				trigger: /* @__PURE__ */ jsx(badge_default, {
					className: cn("mx-1 flex hover:bg-state-base-hover", isShow && "bg-state-base-hover"),
					uppercase: true,
					text: /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", { children: pluginDetail.version }), /* @__PURE__ */ jsx(j1, { className: "ml-1 h-3 w-3 text-text-tertiary" })] }),
					hasRedCornerMark: true
				})
			})]
		})
	});
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-parameter-modal/status-indicators.tsx
var StatusIndicators = ({ needsConfiguration, modelProvider, inModelList, disabled, pluginInfo, t }) => {
	const { data: pluginList } = useInstalledPluginList();
	const renderTooltipContent = (title, description, linkText, linkHref) => {
		return /* @__PURE__ */ jsxs("div", {
			className: "flex w-[240px] max-w-[240px] flex-col gap-1 px-1 py-1.5",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "title-xs-semi-bold text-text-primary",
					children: title
				}),
				description && /* @__PURE__ */ jsx("div", {
					className: "body-xs-regular min-w-[200px] text-text-secondary",
					children: description
				}),
				linkText && linkHref && /* @__PURE__ */ jsx("div", {
					className: "body-xs-regular z-[100] cursor-pointer text-text-accent",
					children: /* @__PURE__ */ jsx(Link, {
						href: linkHref,
						onClick: (e) => {
							e.stopPropagation();
						},
						children: linkText
					})
				})
			]
		});
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [!needsConfiguration && modelProvider && disabled && /* @__PURE__ */ jsx(Fragment$1, { children: inModelList ? /* @__PURE__ */ jsx(tooltip_default, {
		popupContent: t("nodes.agent.modelSelectorTooltips.deprecated", { ns: "workflow" }),
		asChild: false,
		needsDelay: false,
		children: /* @__PURE__ */ jsx(ft$1, { className: "h-4 w-4 text-text-destructive" })
	}) : !pluginInfo ? /* @__PURE__ */ jsx(tooltip_default, {
		popupContent: renderTooltipContent(t("nodes.agent.modelNotSupport.title", { ns: "workflow" }), t("nodes.agent.modelNotSupport.desc", { ns: "workflow" }), t("nodes.agent.linkToPlugin", { ns: "workflow" }), "/plugins"),
		asChild: false,
		children: /* @__PURE__ */ jsx(ft$1, { className: "h-4 w-4 text-text-destructive" })
	}) : /* @__PURE__ */ jsx(SwitchPluginVersion, {
		tooltip: renderTooltipContent(t("nodes.agent.modelNotSupport.title", { ns: "workflow" }), t("nodes.agent.modelNotSupport.descForVersionSwitch", { ns: "workflow" })),
		uniqueIdentifier: pluginList?.plugins.find((plugin) => plugin.name === pluginInfo.name)?.plugin_unique_identifier ?? ""
	}) }), !modelProvider && !pluginInfo && /* @__PURE__ */ jsx(tooltip_default, {
		popupContent: renderTooltipContent(t("nodes.agent.modelNotInMarketplace.title", { ns: "workflow" }), t("nodes.agent.modelNotInMarketplace.desc", { ns: "workflow" }), t("nodes.agent.linkToPlugin", { ns: "workflow" }), "/plugins"),
		asChild: false,
		children: /* @__PURE__ */ jsx(ft$1, { className: "h-4 w-4 text-text-destructive" })
	})] });
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-parameter-modal/agent-model-trigger.tsx
var AgentModelTrigger = ({ disabled, currentProvider, currentModel, providerName, modelId, hasDeprecated, scope }) => {
	const { t } = useTranslation();
	const { modelProviders } = useProviderContext();
	const updateModelProviders = useUpdateModelProviders();
	const updateModelList = useUpdateModelList();
	const { modelProvider, needsConfiguration } = useMemo(() => {
		const modelProvider = modelProviders.find((item) => item.provider === providerName);
		return {
			modelProvider,
			needsConfiguration: modelProvider?.custom_configuration.status === CustomConfigurationStatusEnum.noConfigure && !(modelProvider.system_configuration.enabled === true && modelProvider.system_configuration.quota_configurations.find((item) => item.quota_type === modelProvider.system_configuration.current_quota_type))
		};
	}, [modelProviders, providerName]);
	const [installed, setInstalled] = useState(false);
	const invalidateInstalledPluginList = useInvalidateInstalledPluginList();
	const handleOpenModal = useModelModalHandler();
	const { data: inModelList = false } = useModelInList(currentProvider, modelId);
	const { data: pluginInfo, isLoading: isPluginLoading } = usePluginInfo(providerName);
	if (modelId && isPluginLoading) return /* @__PURE__ */ jsx(Loading, {});
	return /* @__PURE__ */ jsx("div", {
		className: cn("group relative flex grow cursor-pointer items-center gap-[2px] rounded-lg bg-components-input-bg-normal p-1 hover:bg-state-base-hover-alt"),
		children: modelId ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
			/* @__PURE__ */ jsx(ModelIcon, {
				className: "p-0.5",
				provider: currentProvider || modelProvider,
				modelName: currentModel?.model || modelId,
				isDeprecated: hasDeprecated
			}),
			/* @__PURE__ */ jsx(ModelDisplay, {
				currentModel,
				modelId
			}),
			needsConfiguration && /* @__PURE__ */ jsx(ConfigurationButton, {
				modelProvider,
				handleOpenModal
			}),
			/* @__PURE__ */ jsx(StatusIndicators, {
				needsConfiguration,
				modelProvider: !!modelProvider,
				inModelList,
				disabled: !!disabled,
				pluginInfo,
				t
			}),
			!installed && !modelProvider && pluginInfo && /* @__PURE__ */ jsx(InstallPluginButton, {
				onClick: (e) => e.stopPropagation(),
				size: "small",
				uniqueIdentifier: pluginInfo.latest_package_identifier,
				onSuccess: () => {
					[
						ModelTypeEnum.textGeneration,
						ModelTypeEnum.textEmbedding,
						ModelTypeEnum.rerank,
						ModelTypeEnum.moderation,
						ModelTypeEnum.speech2text,
						ModelTypeEnum.tts
					].forEach((type) => {
						if (scope?.includes(type)) updateModelList(type);
					});
					updateModelProviders();
					invalidateInstalledPluginList();
					setInstalled(true);
				}
			}),
			modelProvider && !disabled && !needsConfiguration && /* @__PURE__ */ jsx("div", {
				className: "flex items-center pr-1",
				children: /* @__PURE__ */ jsx(AD, { className: "h-4 w-4 text-text-tertiary group-hover:text-text-secondary" })
			})
		] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
			className: "flex grow items-center gap-1 p-1 pl-2",
			children: /* @__PURE__ */ jsx("span", {
				className: "system-sm-regular overflow-hidden text-ellipsis whitespace-nowrap text-components-input-text-placeholder",
				children: t("nodes.agent.configureModel", { ns: "workflow" })
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "flex items-center pr-1",
			children: /* @__PURE__ */ jsx(AD, { className: "h-4 w-4 text-text-tertiary group-hover:text-text-secondary" })
		})] })
	});
};
//#endregion
//#region utils/completion-params.ts
var mergeValidCompletionParams = (oldParams, rules, isAdvancedMode = false) => {
	if (!oldParams || Object.keys(oldParams).length === 0) return {
		params: {},
		removedDetails: {}
	};
	const ruleMap = {};
	rules.forEach((r) => {
		ruleMap[r.name] = r;
	});
	const nextParams = {};
	const removedDetails = {};
	Object.entries(oldParams).forEach(([key, value]) => {
		if (key === "stop" && isAdvancedMode) {
			nextParams[key] = value;
			return;
		}
		const rule = ruleMap[key];
		if (!rule) {
			removedDetails[key] = "unsupported";
			return;
		}
		switch (rule.type) {
			case "int":
			case "float": {
				if (typeof value !== "number") {
					removedDetails[key] = "invalid type";
					return;
				}
				const min = rule.min ?? Number.NEGATIVE_INFINITY;
				const max = rule.max ?? Number.POSITIVE_INFINITY;
				if (value < min || value > max) {
					removedDetails[key] = `out of range (${min}-${max})`;
					return;
				}
				nextParams[key] = value;
				return;
			}
			case "boolean":
				if (typeof value !== "boolean") {
					removedDetails[key] = "invalid type";
					return;
				}
				nextParams[key] = value;
				return;
			case "string":
			case "text":
				if (typeof value !== "string") {
					removedDetails[key] = "invalid type";
					return;
				}
				if (Array.isArray(rule.options) && rule.options.length) {
					if (!rule.options.includes(value)) {
						removedDetails[key] = "unsupported option";
						return;
					}
				}
				nextParams[key] = value;
				return;
			default: removedDetails[key] = `unsupported rule type: ${rule?.type ?? "unknown"}`;
		}
	});
	return {
		params: nextParams,
		removedDetails
	};
};
var fetchAndMergeValidCompletionParams = async (provider, modelId, oldParams, isAdvancedMode = false) => {
	const { fetchModelParameterRules } = await import("./common-qRxT6xi0.js").then((n) => n.o);
	const { data: parameterRules } = await fetchModelParameterRules(`/workspaces/current/model-providers/${provider}/models/parameter-rules?model=${modelId}`);
	return mergeValidCompletionParams(oldParams, parameterRules ?? [], isAdvancedMode);
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/model-selector/llm-params-panel.tsx
var LLMParamsPanel = ({ isAdvancedMode, provider, modelId, completionParams, onCompletionParamsChange }) => {
	const { t } = useTranslation();
	const { data: parameterRulesData, isPending: isLoading } = useModelParameterRules(provider, modelId);
	const parameterRules = useMemo(() => {
		return parameterRulesData?.data || [];
	}, [parameterRulesData]);
	const handleSelectPresetParameter = (toneId) => {
		const tone = TONE_LIST.find((tone) => tone.id === toneId);
		if (tone) onCompletionParamsChange({
			...completionParams,
			...tone.config
		});
	};
	const handleParamChange = (key, value) => {
		onCompletionParamsChange({
			...completionParams,
			[key]: value
		});
	};
	const handleSwitch = (key, value, assignValue) => {
		if (!value) {
			const newCompletionParams = { ...completionParams };
			delete newCompletionParams[key];
			onCompletionParamsChange(newCompletionParams);
		}
		if (value) onCompletionParamsChange({
			...completionParams,
			[key]: assignValue
		});
	};
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "mt-5",
		children: /* @__PURE__ */ jsx(Loading, {})
	});
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
		className: "mb-2 flex items-center justify-between",
		children: [/* @__PURE__ */ jsx("div", {
			className: cn("system-sm-semibold flex h-6 items-center text-text-secondary"),
			children: t("modelProvider.parameters", { ns: "common" })
		}), PROVIDER_WITH_PRESET_TONE.includes(provider) && /* @__PURE__ */ jsx(PresetsParameter, { onSelect: handleSelectPresetParameter })]
	}), !!parameterRules.length && [...parameterRules, ...isAdvancedMode ? [STOP_PARAMETER_RULE] : []].map((parameter) => /* @__PURE__ */ jsx(ParameterItem, {
		parameterRule: parameter,
		value: completionParams?.[parameter.name],
		onChange: (v) => handleParamChange(parameter.name, v),
		onSwitch: (checked, assignValue) => handleSwitch(parameter.name, checked, assignValue),
		isInWorkflow: true
	}, `${modelId}-${parameter.name}`))] });
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/model-selector/tts-params-panel.tsx
var supportedLanguages = languages.filter((item) => item.supported);
var TTSParamsPanel = ({ currentModel, language, voice, onChange }) => {
	const { t } = useTranslation();
	const voiceList = useMemo(() => {
		if (!currentModel) return [];
		return currentModel.model_properties.voices.map((item) => ({
			label: item.name,
			value: item.mode
		}));
	}, [currentModel]);
	const setLanguage = (language) => {
		onChange(language, voice);
	};
	const setVoice = (voice) => {
		onChange(language, voice);
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
		className: "mb-3",
		children: [/* @__PURE__ */ jsx("div", {
			className: "system-sm-semibold mb-1 flex items-center py-1 text-text-secondary",
			children: t("voice.voiceSettings.language", { ns: "appDebug" })
		}), /* @__PURE__ */ jsxs(Select, {
			value: language,
			onValueChange: (value) => {
				if (value == null) return;
				setLanguage(value);
			},
			children: [/* @__PURE__ */ jsx(SelectTrigger, {
				className: "w-full",
				"data-testid": "tts-language-select-trigger",
				"aria-label": t("voice.voiceSettings.language", { ns: "appDebug" }),
				children: /* @__PURE__ */ jsx(SelectValue, {})
			}), /* @__PURE__ */ jsx(SelectContent, {
				popupClassName: "w-[354px]",
				children: supportedLanguages.map((item) => /* @__PURE__ */ jsx(SelectItem$2, {
					value: item.value,
					children: item.name
				}, item.value))
			})]
		})]
	}), /* @__PURE__ */ jsxs("div", {
		className: "mb-3",
		children: [/* @__PURE__ */ jsx("div", {
			className: "system-sm-semibold mb-1 flex items-center py-1 text-text-secondary",
			children: t("voice.voiceSettings.voice", { ns: "appDebug" })
		}), /* @__PURE__ */ jsxs(Select, {
			value: voice,
			onValueChange: (value) => {
				if (value == null) return;
				setVoice(value);
			},
			children: [/* @__PURE__ */ jsx(SelectTrigger, {
				className: "w-full",
				"data-testid": "tts-voice-select-trigger",
				"aria-label": t("voice.voiceSettings.voice", { ns: "appDebug" }),
				children: /* @__PURE__ */ jsx(SelectValue, {})
			}), /* @__PURE__ */ jsx(SelectContent, {
				popupClassName: "w-[354px]",
				children: voiceList.map((item) => /* @__PURE__ */ jsx(SelectItem$2, {
					value: item.value,
					children: item.label
				}, item.value))
			})]
		})]
	})] });
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/model-selector/index.tsx
var ModelParameterModal = ({ popupClassName, isAdvancedMode, value, setModel, renderTrigger, readonly, isInWorkflow, isAgentStrategy, scope = ModelTypeEnum.textGeneration }) => {
	const { t } = useTranslation();
	const { isAPIKeySet } = useProviderContext();
	const [open, setOpen] = useState(false);
	const scopeArray = scope.split("&");
	const scopeFeatures = useMemo(() => {
		if (scopeArray.includes("all")) return [];
		return scopeArray.filter((item) => ![
			ModelTypeEnum.textGeneration,
			ModelTypeEnum.textEmbedding,
			ModelTypeEnum.rerank,
			ModelTypeEnum.moderation,
			ModelTypeEnum.speech2text,
			ModelTypeEnum.tts
		].includes(item)).map((item) => item);
	}, [scopeArray]);
	const { data: textGenerationList } = useModelList(ModelTypeEnum.textGeneration);
	const { data: textEmbeddingList } = useModelList(ModelTypeEnum.textEmbedding);
	const { data: rerankList } = useModelList(ModelTypeEnum.rerank);
	const { data: moderationList } = useModelList(ModelTypeEnum.moderation);
	const { data: sttList } = useModelList(ModelTypeEnum.speech2text);
	const { data: ttsList } = useModelList(ModelTypeEnum.tts);
	const scopedModelList = useMemo(() => {
		const resultList = [];
		if (scopeArray.includes("all")) return [
			...textGenerationList,
			...textEmbeddingList,
			...rerankList,
			...sttList,
			...ttsList,
			...moderationList
		];
		if (scopeArray.includes(ModelTypeEnum.textGeneration)) return textGenerationList;
		if (scopeArray.includes(ModelTypeEnum.textEmbedding)) return textEmbeddingList;
		if (scopeArray.includes(ModelTypeEnum.rerank)) return rerankList;
		if (scopeArray.includes(ModelTypeEnum.moderation)) return moderationList;
		if (scopeArray.includes(ModelTypeEnum.speech2text)) return sttList;
		if (scopeArray.includes(ModelTypeEnum.tts)) return ttsList;
		return resultList;
	}, [
		scopeArray,
		textGenerationList,
		textEmbeddingList,
		rerankList,
		sttList,
		ttsList,
		moderationList
	]);
	const { currentProvider, currentModel } = useMemo(() => {
		const currentProvider = scopedModelList.find((item) => item.provider === value?.provider);
		return {
			currentProvider,
			currentModel: currentProvider?.models.find((model) => model.model === value?.model)
		};
	}, [
		scopedModelList,
		value?.provider,
		value?.model
	]);
	const hasDeprecated = !currentProvider || !currentModel;
	const disabled = !isAPIKeySet || hasDeprecated || currentModel?.status !== ModelStatusEnum.active;
	const handleChangeModel = async ({ provider, model }) => {
		const targetModelItem = scopedModelList.find((modelItem) => modelItem.provider === provider)?.models.find((modelItem) => modelItem.model === model);
		const model_type = targetModelItem?.model_type;
		let nextCompletionParams = {};
		if (model_type === ModelTypeEnum.textGeneration) try {
			const { params: filtered, removedDetails } = await fetchAndMergeValidCompletionParams(provider, model, value?.completion_params, isAdvancedMode);
			nextCompletionParams = filtered;
			const keys = Object.keys(removedDetails || {});
			if (keys.length) toast.warning(`${t("modelProvider.parametersInvalidRemoved", { ns: "common" })}: ${keys.map((k) => `${k} (${removedDetails[k]})`).join(", ")}`);
		} catch {
			toast.error(t("error", { ns: "common" }));
		}
		setModel({
			provider,
			model,
			model_type,
			...model_type === ModelTypeEnum.textGeneration ? {
				mode: targetModelItem?.model_properties.mode,
				completion_params: nextCompletionParams
			} : {}
		});
	};
	const handleLLMParamsChange = (newParams) => {
		const newValue = {
			...value?.completionParams,
			completion_params: newParams
		};
		setModel({
			...value,
			...newValue
		});
	};
	const handleTTSParamsChange = (language, voice) => {
		setModel({
			...value,
			language,
			voice
		});
	};
	return /* @__PURE__ */ jsx(Popover, {
		open,
		onOpenChange: (newOpen) => {
			if (readonly) return;
			setOpen(newOpen);
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsx(PopoverTrigger, { render: /* @__PURE__ */ jsx("button", {
				type: "button",
				className: "block w-full border-none bg-transparent p-0 text-left [color:inherit] [font:inherit]",
				children: renderTrigger ? renderTrigger({
					open,
					currentProvider,
					currentModel,
					providerName: value?.provider,
					modelId: value?.model
				}) : isAgentStrategy ? /* @__PURE__ */ jsx(AgentModelTrigger, {
					disabled,
					hasDeprecated,
					currentProvider,
					currentModel,
					providerName: value?.provider,
					modelId: value?.model,
					scope
				}) : /* @__PURE__ */ jsx(Trigger, {
					isInWorkflow,
					currentProvider,
					currentModel,
					providerName: value?.provider,
					modelId: value?.model
				})
			}) }), /* @__PURE__ */ jsx(PopoverContent, {
				placement: isInWorkflow ? "left" : "bottom-end",
				sideOffset: 4,
				popupClassName: cn(popupClassName, "w-[389px] rounded-2xl"),
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-h-[420px] overflow-y-auto p-4 pt-3",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsx("div", {
								className: "mb-1 flex h-6 items-center text-text-secondary system-sm-semibold",
								children: t("modelProvider.model", { ns: "common" }).toLocaleUpperCase()
							}), /* @__PURE__ */ jsx(ModelSelector, {
								defaultModel: value?.provider || value?.model ? {
									provider: value?.provider,
									model: value?.model
								} : void 0,
								modelList: scopedModelList,
								scopeFeatures,
								onSelect: handleChangeModel
							})]
						}),
						(currentModel?.model_type === ModelTypeEnum.textGeneration || currentModel?.model_type === ModelTypeEnum.tts) && /* @__PURE__ */ jsx("div", { className: "my-3 h-px bg-divider-subtle" }),
						currentModel?.model_type === ModelTypeEnum.textGeneration && /* @__PURE__ */ jsx(LLMParamsPanel, {
							provider: value?.provider,
							modelId: value?.model,
							completionParams: value?.completion_params || {},
							onCompletionParamsChange: handleLLMParamsChange,
							isAdvancedMode
						}),
						currentModel?.model_type === ModelTypeEnum.tts && /* @__PURE__ */ jsx(TTSParamsPanel, {
							currentModel,
							language: value?.language,
							voice: value?.voice,
							onChange: handleTTSParamsChange
						})
					]
				})
			})]
		})
	});
};
//#endregion
//#region app/components/workflow/nodes/_base/components/form-input-boolean.tsx
var FormInputBoolean = ({ value, onChange }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex w-full space-x-1",
		children: [/* @__PURE__ */ jsx("div", {
			className: cn("system-sm-regular flex h-8 grow cursor-default items-center justify-center rounded-md border border-components-option-card-option-border bg-components-option-card-option-bg px-2 text-text-secondary", !value && "cursor-pointer hover:border-components-option-card-option-border-hover hover:bg-components-option-card-option-bg-hover hover:shadow-xs", value && "system-sm-medium border-[1.5px] border-components-option-card-option-selected-border bg-components-option-card-option-selected-bg shadow-xs"),
			onClick: () => onChange(true),
			children: "True"
		}), /* @__PURE__ */ jsx("div", {
			className: cn("system-sm-regular flex h-8 grow cursor-default items-center justify-center rounded-md border border-components-option-card-option-border bg-components-option-card-option-bg px-2 text-text-secondary", value && "cursor-pointer hover:border-components-option-card-option-border-hover hover:bg-components-option-card-option-bg-hover hover:shadow-xs", !value && "system-sm-medium border-[1.5px] border-components-option-card-option-selected-border bg-components-option-card-option-selected-bg shadow-xs"),
			onClick: () => onChange(false),
			children: "False"
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/_base/components/form-input-type-switch.tsx
var FormInputTypeSwitch = ({ value, onChange }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "inline-flex h-8 shrink-0 gap-px rounded-[10px] bg-components-segmented-control-bg-normal p-0.5",
		children: [/* @__PURE__ */ jsx(tooltip_default, {
			popupContent: value === VarKindType.variable ? "" : t("nodes.common.typeSwitch.variable", { ns: "workflow" }),
			children: /* @__PURE__ */ jsx("div", {
				className: cn("cursor-pointer rounded-lg px-2.5 py-1.5 text-text-tertiary hover:bg-state-base-hover", value === VarKindType.variable && "bg-components-segmented-control-item-active-bg text-text-secondary shadow-xs hover:bg-components-segmented-control-item-active-bg"),
				onClick: () => onChange(VarKindType.variable),
				children: /* @__PURE__ */ jsx(Icon$35, { className: "h-4 w-4" })
			})
		}), /* @__PURE__ */ jsx(tooltip_default, {
			popupContent: value === VarKindType.constant ? "" : t("nodes.common.typeSwitch.input", { ns: "workflow" }),
			children: /* @__PURE__ */ jsx("div", {
				className: cn("cursor-pointer rounded-lg px-2.5 py-1.5 text-text-tertiary hover:bg-state-base-hover", value === VarKindType.constant && "bg-components-segmented-control-item-active-bg text-text-secondary shadow-xs hover:bg-components-segmented-control-item-active-bg"),
				onClick: () => onChange(VarKindType.constant),
				children: /* @__PURE__ */ jsx(Ct, { className: "h-4 w-4" })
			})
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/tool/components/mixed-variable-text-input/placeholder.tsx
var Placeholder = ({ disableVariableInsertion = false, hideBadge = false }) => {
	const { t } = useTranslation();
	const [editor] = o();
	const handleInsert = useCallback((text) => {
		editor.update(() => {
			ti([new CustomTextNode(text)]);
		});
		editor.dispatchCommand(He, void 0);
	}, [editor]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("pointer-events-auto flex h-full w-full cursor-text px-2", !hideBadge ? "items-center" : "items-start py-1"),
		onClick: (e) => {
			e.stopPropagation();
			handleInsert("");
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex grow items-center",
			children: [t("nodes.tool.insertPlaceholder1", { ns: "workflow" }), !disableVariableInsertion && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
				className: "system-kbd mx-0.5 flex h-4 w-4 items-center justify-center rounded bg-components-kbd-bg-gray text-text-placeholder",
				children: "/"
			}), /* @__PURE__ */ jsx("div", {
				className: "system-sm-regular cursor-pointer text-components-input-text-placeholder underline decoration-dotted decoration-auto underline-offset-auto hover:text-text-tertiary",
				onMouseDown: ((e) => {
					e.preventDefault();
					e.stopPropagation();
					handleInsert("/");
				}),
				children: t("nodes.tool.insertPlaceholder2", { ns: "workflow" })
			})] })]
		}), !hideBadge && /* @__PURE__ */ jsx(badge_default, {
			className: "shrink-0",
			text: "String",
			uppercase: false
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/tool/components/mixed-variable-text-input/index.tsx
var MixedVariableTextInput = ({ readOnly = false, nodesOutputVars, availableNodes = [], value = "", onChange, showManageInputField, onManageInputField, disableVariableInsertion = false }) => {
	const { t } = useTranslation();
	const controlPromptEditorRerenderKey = useStore$4((s) => s.controlPromptEditorRerenderKey);
	return /* @__PURE__ */ jsx(PromptEditor, {
		wrapperClassName: cn("min-h-8 w-full rounded-lg border border-transparent bg-components-input-bg-normal px-2 py-1", "hover:border-components-input-border-hover hover:bg-components-input-bg-hover", "focus-within:border-components-input-border-active focus-within:bg-components-input-bg-active focus-within:shadow-xs"),
		className: "caret:text-text-accent",
		editable: !readOnly,
		value,
		workflowVariableBlock: {
			show: !disableVariableInsertion,
			variables: nodesOutputVars || [],
			workflowNodesMap: availableNodes.reduce((acc, node) => {
				acc[node.id] = {
					title: node.data.title,
					type: node.data.type
				};
				if (node.data.type === BlockEnum.Start) acc.sys = {
					title: t("blocks.start", { ns: "workflow" }),
					type: BlockEnum.Start
				};
				return acc;
			}, {}),
			showManageInputField,
			onManageInputField
		},
		placeholder: /* @__PURE__ */ jsx(Placeholder, { disableVariableInsertion }),
		onChange
	}, controlPromptEditorRerenderKey);
};
var mixed_variable_text_input_default = memo(MixedVariableTextInput);
//#endregion
//#region node_modules/.pnpm/mitt@3.0.1/node_modules/mitt/dist/mitt.mjs
function mitt_default(n) {
	return {
		all: n = n || /* @__PURE__ */ new Map(),
		on: function(t, e) {
			var i = n.get(t);
			i ? i.push(e) : n.set(t, [e]);
		},
		off: function(t, e) {
			var i = n.get(t);
			i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
		},
		emit: function(t, e) {
			var i = n.get(t);
			i && i.slice().map(function(n) {
				n(e);
			}), (i = n.get("*")) && i.slice().map(function(n) {
				n(t, e);
			});
		}
	};
}
//#endregion
//#region hooks/use-mitt.ts
var merge = (...args) => {
	return Object.assign({}, ...args);
};
var defaultSubscribeOption = { enabled: true };
function useMitt(mitt) {
	const emitterRef = useRef(void 0);
	if (!emitterRef.current) emitterRef.current = mitt ?? mitt_default();
	if (mitt && emitterRef.current !== mitt) {
		emitterRef.current.off("*");
		emitterRef.current = mitt;
	}
	const emitter = emitterRef.current;
	const useSubscribe = (type, handler, option) => {
		const { enabled } = merge(defaultSubscribeOption, option);
		useEffect(() => {
			if (enabled) {
				emitter.on(type, handler);
				return () => emitter.off(type, handler);
			}
		});
	};
	return {
		emit: emitter.emit,
		useSubscribe
	};
}
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/visual-editor/store.ts
var createVisualEditorStore = () => createStore((set) => ({
	hoveringProperty: null,
	setHoveringProperty: (propertyPath) => set({ hoveringProperty: propertyPath }),
	isAddingNewField: false,
	setIsAddingNewField: (isAdding) => set({ isAddingNewField: isAdding }),
	advancedEditing: false,
	setAdvancedEditing: (isEditing) => set({ advancedEditing: isEditing }),
	backupSchema: null,
	setBackupSchema: (schema) => set({ backupSchema: schema })
}));
var useVisualEditorStore = (selector) => {
	const store = useContext(VisualEditorContext);
	if (!store) throw new Error("Missing VisualEditorContext.Provider in the tree");
	return useStore$1(store, selector);
};
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/visual-editor/context.tsx
var VisualEditorContext = createContext(null);
var VisualEditorContextProvider = ({ children }) => {
	const storeRef = useRef(null);
	if (!storeRef.current) storeRef.current = createVisualEditorStore();
	return /* @__PURE__ */ jsx(VisualEditorContext.Provider, {
		value: storeRef.current,
		children
	});
};
var MittContext = createContext({
	emit: noop,
	useSubscribe: noop
});
var MittProvider = ({ children }) => {
	const mitt = useMitt();
	return /* @__PURE__ */ jsx(MittContext.Provider, {
		value: mitt,
		children
	});
};
var useMittContext = () => {
	return useContext(MittContext);
};
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/visual-editor/hooks.ts
var useSchemaNodeOperations = (props) => {
	const { schema: jsonSchema, onChange: doOnChange } = props;
	const { t } = useTranslation();
	const onChange = doOnChange || noop;
	const backupSchema = useVisualEditorStore((state) => state.backupSchema);
	const setBackupSchema = useVisualEditorStore((state) => state.setBackupSchema);
	const isAddingNewField = useVisualEditorStore((state) => state.isAddingNewField);
	const setIsAddingNewField = useVisualEditorStore((state) => state.setIsAddingNewField);
	const advancedEditing = useVisualEditorStore((state) => state.advancedEditing);
	const setAdvancedEditing = useVisualEditorStore((state) => state.setAdvancedEditing);
	const setHoveringProperty = useVisualEditorStore((state) => state.setHoveringProperty);
	const { emit, useSubscribe } = useMittContext();
	useSubscribe("restoreSchema", () => {
		if (backupSchema) {
			onChange(backupSchema);
			setBackupSchema(null);
		}
	});
	useSubscribe("quitEditing", (params) => {
		const { callback } = params;
		callback?.(backupSchema);
		if (backupSchema) {
			onChange(backupSchema);
			setBackupSchema(null);
		}
		if (isAddingNewField) setIsAddingNewField(false);
		if (advancedEditing) setAdvancedEditing(false);
		setHoveringProperty(null);
	});
	useSubscribe("propertyNameChange", (params) => {
		const { parentPath, oldFields, fields } = params;
		const { name: oldName } = oldFields;
		const { name: newName } = fields;
		onChange(produce(jsonSchema, (draft) => {
			if (oldName === newName) return;
			const schema = findPropertyWithPath(draft, parentPath);
			if (schema.type === Type.object) {
				const properties = schema.properties || {};
				if (properties[newName]) {
					toast.error(t("nodes.llm.jsonSchema.fieldNameAlreadyExists", { ns: "workflow" }));
					emit("restorePropertyName");
					return;
				}
				const newProperties = Object.entries(properties).reduce((acc, [key, value]) => {
					acc[key === oldName ? newName : key] = value;
					return acc;
				}, {});
				const newRequired = produce(schema.required || [], (draft) => {
					const index = draft.indexOf(oldName);
					if (index !== -1) draft.splice(index, 1, newName);
				});
				schema.properties = newProperties;
				schema.required = newRequired;
			}
			if (schema.type === Type.array && schema.items && schema.items.type === Type.object) {
				const properties = schema.items.properties || {};
				if (properties[newName]) {
					toast.error(t("nodes.llm.jsonSchema.fieldNameAlreadyExists", { ns: "workflow" }));
					emit("restorePropertyName");
					return;
				}
				const newProperties = Object.entries(properties).reduce((acc, [key, value]) => {
					acc[key === oldName ? newName : key] = value;
					return acc;
				}, {});
				const newRequired = produce(schema.items.required || [], (draft) => {
					const index = draft.indexOf(oldName);
					if (index !== -1) draft.splice(index, 1, newName);
				});
				schema.items.properties = newProperties;
				schema.items.required = newRequired;
			}
		}));
	});
	useSubscribe("propertyTypeChange", (params) => {
		const { path, oldFields, fields } = params;
		const { type: oldType } = oldFields;
		const { type: newType } = fields;
		if (oldType === newType) return;
		onChange(produce(jsonSchema, (draft) => {
			const schema = findPropertyWithPath(draft, path);
			if (schema.type === Type.object) {
				delete schema.properties;
				delete schema.required;
			}
			if (schema.type === Type.array) delete schema.items;
			switch (newType) {
				case Type.object:
					schema.type = Type.object;
					schema.properties = {};
					schema.required = [];
					schema.additionalProperties = false;
					break;
				case ArrayType.string:
					schema.type = Type.array;
					schema.items = { type: Type.string };
					break;
				case ArrayType.number:
					schema.type = Type.array;
					schema.items = { type: Type.number };
					break;
				case ArrayType.object:
					schema.type = Type.array;
					schema.items = {
						type: Type.object,
						properties: {},
						required: [],
						additionalProperties: false
					};
					break;
				default: schema.type = newType;
			}
		}));
	});
	useSubscribe("propertyRequiredToggle", (params) => {
		const { parentPath, fields } = params;
		const { name } = fields;
		onChange(produce(jsonSchema, (draft) => {
			const schema = findPropertyWithPath(draft, parentPath);
			if (schema.type === Type.object) {
				const required = schema.required || [];
				schema.required = required.includes(name) ? required.filter((item) => item !== name) : [...required, name];
			}
			if (schema.type === Type.array && schema.items && schema.items.type === Type.object) {
				const required = schema.items.required || [];
				const newRequired = required.includes(name) ? required.filter((item) => item !== name) : [...required, name];
				schema.items.required = newRequired;
			}
		}));
	});
	useSubscribe("propertyOptionsChange", (params) => {
		const { path, fields } = params;
		onChange(produce(jsonSchema, (draft) => {
			const schema = findPropertyWithPath(draft, path);
			schema.description = fields.description;
			schema.enum = fields.enum;
		}));
	});
	useSubscribe("propertyDelete", (params) => {
		const { parentPath, fields } = params;
		const { name } = fields;
		onChange(produce(jsonSchema, (draft) => {
			const schema = findPropertyWithPath(draft, parentPath);
			if (schema.type === Type.object && schema.properties) {
				delete schema.properties[name];
				schema.required = schema.required?.filter((item) => item !== name);
			}
			if (schema.type === Type.array && schema.items?.properties && schema.items?.type === Type.object) {
				delete schema.items.properties[name];
				schema.items.required = schema.items.required?.filter((item) => item !== name);
			}
		}));
	});
	useSubscribe("addField", (params) => {
		if (advancedEditing) setAdvancedEditing(false);
		setBackupSchema(jsonSchema);
		const { path } = params;
		setIsAddingNewField(true);
		onChange(produce(jsonSchema, (draft) => {
			const schema = findPropertyWithPath(draft, path);
			if (schema.type === Type.object) {
				schema.properties = {
					...schema.properties,
					"": { type: Type.string }
				};
				setHoveringProperty([
					...path,
					"properties",
					""
				].join("."));
			}
			if (schema.type === Type.array && schema.items && schema.items.type === Type.object) {
				schema.items.properties = {
					...schema.items.properties,
					"": { type: Type.string }
				};
				setHoveringProperty([
					...path,
					"items",
					"properties",
					""
				].join("."));
			}
		}));
	});
	useSubscribe("fieldChange", (params) => {
		let samePropertyNameError = false;
		const { parentPath, oldFields, fields } = params;
		const newSchema = produce(jsonSchema, (draft) => {
			const parentSchema = findPropertyWithPath(draft, parentPath);
			const { name: oldName, type: oldType, required: oldRequired } = oldFields;
			const { name: newName, type: newType, required: newRequired } = fields;
			if (parentSchema.type === Type.object && parentSchema.properties) {
				if (oldName !== newName) {
					const properties = parentSchema.properties;
					if (properties[newName]) {
						toast.error(t("nodes.llm.jsonSchema.fieldNameAlreadyExists", { ns: "workflow" }));
						samePropertyNameError = true;
					}
					const newProperties = Object.entries(properties).reduce((acc, [key, value]) => {
						acc[key === oldName ? newName : key] = value;
						return acc;
					}, {});
					const newRequiredProperties = produce(parentSchema.required || [], (draft) => {
						const index = draft.indexOf(oldName);
						if (index !== -1) draft.splice(index, 1, newName);
					});
					parentSchema.properties = newProperties;
					parentSchema.required = newRequiredProperties;
				}
				if (oldRequired !== newRequired) {
					const required = parentSchema.required || [];
					parentSchema.required = required.includes(newName) ? required.filter((item) => item !== newName) : [...required, newName];
				}
				const schema = parentSchema.properties[newName];
				if (oldType !== newType) {
					if (schema.type === Type.object) {
						delete schema.properties;
						delete schema.required;
					}
					if (schema.type === Type.array) delete schema.items;
					switch (newType) {
						case Type.object:
							schema.type = Type.object;
							schema.properties = {};
							schema.required = [];
							schema.additionalProperties = false;
							break;
						case ArrayType.string:
							schema.type = Type.array;
							schema.items = { type: Type.string };
							break;
						case ArrayType.number:
							schema.type = Type.array;
							schema.items = { type: Type.number };
							break;
						case ArrayType.object:
							schema.type = Type.array;
							schema.items = {
								type: Type.object,
								properties: {},
								required: [],
								additionalProperties: false
							};
							break;
						default: schema.type = newType;
					}
				}
				schema.description = fields.description;
				schema.enum = fields.enum;
			}
			if (parentSchema.type === Type.array && parentSchema.items && parentSchema.items.type === Type.object && parentSchema.items.properties) {
				if (oldName !== newName) {
					const properties = parentSchema.items.properties || {};
					if (properties[newName]) {
						toast.error(t("nodes.llm.jsonSchema.fieldNameAlreadyExists", { ns: "workflow" }));
						samePropertyNameError = true;
					}
					const newProperties = Object.entries(properties).reduce((acc, [key, value]) => {
						acc[key === oldName ? newName : key] = value;
						return acc;
					}, {});
					const newRequired = produce(parentSchema.items.required || [], (draft) => {
						const index = draft.indexOf(oldName);
						if (index !== -1) draft.splice(index, 1, newName);
					});
					parentSchema.items.properties = newProperties;
					parentSchema.items.required = newRequired;
				}
				if (oldRequired !== newRequired) {
					const required = parentSchema.items.required || [];
					const newRequired = required.includes(newName) ? required.filter((item) => item !== newName) : [...required, newName];
					parentSchema.items.required = newRequired;
				}
				const schema = parentSchema.items.properties[newName];
				if (oldType !== newType) {
					if (schema.type === Type.object) {
						delete schema.properties;
						delete schema.required;
					}
					if (schema.type === Type.array) delete schema.items;
					switch (newType) {
						case Type.object:
							schema.type = Type.object;
							schema.properties = {};
							schema.required = [];
							schema.additionalProperties = false;
							break;
						case ArrayType.string:
							schema.type = Type.array;
							schema.items = { type: Type.string };
							break;
						case ArrayType.number:
							schema.type = Type.array;
							schema.items = { type: Type.number };
							break;
						case ArrayType.object:
							schema.type = Type.array;
							schema.items = {
								type: Type.object,
								properties: {},
								required: [],
								additionalProperties: false
							};
							break;
						default: schema.type = newType;
					}
				}
				schema.description = fields.description;
				schema.enum = fields.enum;
			}
		});
		if (samePropertyNameError) return;
		onChange(newSchema);
		emit("fieldChangeSuccess");
	});
};
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/visual-editor/add-field.tsx
var AddField = () => {
	const { t } = useTranslation();
	const setIsAddingNewField = useVisualEditorStore((state) => state.setIsAddingNewField);
	const { emit } = useMittContext();
	return /* @__PURE__ */ jsx("div", {
		className: "py-2 pl-5",
		children: /* @__PURE__ */ jsxs(Button, {
			size: "small",
			variant: "secondary-accent",
			className: "flex items-center gap-x-[1px]",
			onClick: useCallback(() => {
				setIsAddingNewField(true);
				setTimeout(() => {
					emit("addField", { path: [] });
				}, 100);
			}, [setIsAddingNewField, emit]),
			children: [/* @__PURE__ */ jsx(x, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", {
				className: "px-[3px]",
				children: t("nodes.llm.jsonSchema.addField", { ns: "workflow" })
			})]
		})
	});
};
var add_field_default = React$1.memo(AddField);
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/visual-editor/card.tsx
var Card = ({ name, type, required, description }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col py-0.5",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex h-6 items-center gap-x-1 pl-1 pr-0.5",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "system-sm-semibold truncate border border-transparent px-1 py-px text-text-primary",
					children: name
				}),
				/* @__PURE__ */ jsx("div", {
					className: "system-xs-medium px-1 py-0.5 text-text-tertiary",
					children: type
				}),
				required && /* @__PURE__ */ jsx("div", {
					className: "system-2xs-medium-uppercase px-1 py-0.5 text-text-warning",
					children: t("nodes.llm.jsonSchema.required", { ns: "workflow" })
				})
			]
		}), description && /* @__PURE__ */ jsx("div", {
			className: "system-xs-regular truncate px-2 pb-1 text-text-tertiary",
			children: description
		})]
	});
};
var card_default = React$1.memo(Card);
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/visual-editor/edit-card/actions.tsx
var Actions = ({ disableAddBtn, onAddChildField, onEdit, onDelete }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-x-0.5",
		children: [
			/* @__PURE__ */ jsx(tooltip_default, {
				popupContent: t("nodes.llm.jsonSchema.addChildField", { ns: "workflow" }),
				children: /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "flex h-6 w-6 items-center justify-center rounded-md text-text-tertiary hover:bg-state-base-hover hover:text-text-secondary disabled:cursor-not-allowed disabled:text-text-disabled",
					onClick: onAddChildField,
					disabled: disableAddBtn,
					children: /* @__PURE__ */ jsx(v, { className: "h-4 w-4" })
				})
			}),
			/* @__PURE__ */ jsx(tooltip_default, {
				popupContent: t("operation.edit", { ns: "common" }),
				children: /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "flex h-6 w-6 items-center justify-center rounded-md text-text-tertiary hover:bg-state-base-hover hover:text-text-secondary",
					onClick: onEdit,
					children: /* @__PURE__ */ jsx(Ct, { className: "h-4 w-4" })
				})
			}),
			/* @__PURE__ */ jsx(tooltip_default, {
				popupContent: t("operation.remove", { ns: "common" }),
				children: /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "flex h-6 w-6 items-center justify-center rounded-md text-text-tertiary hover:bg-state-destructive-hover hover:text-text-destructive",
					onClick: onDelete,
					children: /* @__PURE__ */ jsx(M6, { className: "h-4 w-4" })
				})
			})
		]
	});
};
var actions_default = React$1.memo(Actions);
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/visual-editor/edit-card/advanced-actions.tsx
var AdvancedActions = ({ isConfirmDisabled, onCancel, onConfirm }) => {
	const { t } = useTranslation();
	useKeyPress([`${getKeyboardKeyCodeBySystem("ctrl")}.enter`], (e) => {
		e.preventDefault();
		onConfirm();
	}, {
		exactMatch: true,
		useCapture: true
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-x-1",
		children: [/* @__PURE__ */ jsx(Button, {
			size: "small",
			variant: "secondary",
			onClick: onCancel,
			children: t("operation.cancel", { ns: "common" })
		}), /* @__PURE__ */ jsxs(Button, {
			className: "flex items-center gap-x-1",
			disabled: isConfirmDisabled,
			size: "small",
			variant: "primary",
			onClick: onConfirm,
			children: [/* @__PURE__ */ jsx("span", { children: t("operation.confirm", { ns: "common" }) }), /* @__PURE__ */ jsx(shortcuts_name_default, {
				keys: ["ctrl", "⏎"],
				bgColor: "white"
			})]
		})]
	});
};
var advanced_actions_default = React$1.memo(AdvancedActions);
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/visual-editor/edit-card/advanced-options.tsx
var AdvancedOptions = ({ onChange, options }) => {
	const { t } = useTranslation();
	const [enumValue, setEnumValue] = useState(options.enum);
	const handleEnumChange = useCallback((e) => {
		setEnumValue(e.target.value);
	}, []);
	const handleEnumBlur = useCallback((e) => {
		onChange({ enum: e.target.value });
	}, [onChange]);
	return /* @__PURE__ */ jsx("div", {
		className: "border-t border-divider-subtle",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-y-1 px-2 py-1.5",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex w-full items-center gap-x-2",
				children: [/* @__PURE__ */ jsx("span", {
					className: "system-2xs-medium-uppercase text-text-tertiary",
					children: t("nodes.llm.jsonSchema.stringValidations", { ns: "workflow" })
				}), /* @__PURE__ */ jsx("div", {
					className: "grow",
					children: /* @__PURE__ */ jsx(Divider$1, {
						type: "horizontal",
						className: "my-0 h-px bg-line-divider-bg"
					})
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col",
				children: [/* @__PURE__ */ jsx("div", {
					className: "system-xs-medium flex h-6 items-center text-text-secondary",
					children: "Enum"
				}), /* @__PURE__ */ jsx(Textarea, {
					size: "small",
					className: "min-h-6",
					value: enumValue,
					onChange: handleEnumChange,
					onBlur: handleEnumBlur,
					placeholder: "abcd, 1, 1.5, etc."
				})]
			})]
		})
	});
};
var advanced_options_default = React$1.memo(AdvancedOptions);
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/visual-editor/edit-card/auto-width-input.tsx
var AutoWidthInput = ({ value, placeholder, onChange, onBlur, minWidth = 60, maxWidth = 300, className, ...props }) => {
	const [width, setWidth] = useState(minWidth);
	const textRef = React$1.useRef(null);
	useEffect(() => {
		if (textRef.current) {
			textRef.current.textContent = value || placeholder;
			const textWidth = textRef.current.offsetWidth;
			const newWidth = Math.max(minWidth, Math.min(textWidth + 16, maxWidth));
			if (width !== newWidth) setWidth(newWidth);
		}
	}, [
		value,
		placeholder,
		minWidth,
		maxWidth,
		width
	]);
	const handleKeyUp = (e) => {
		if (e.key === "Enter" && e.currentTarget.blur) e.currentTarget.blur();
		if (props.onKeyUp) props.onKeyUp(e);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "relative inline-flex items-center",
		children: [/* @__PURE__ */ jsx("span", {
			ref: textRef,
			className: "system-sm-semibold invisible absolute left-0 top-0 -z-10 whitespace-pre px-1",
			"aria-hidden": "true",
			children: value || placeholder
		}), /* @__PURE__ */ jsx("input", {
			value,
			className: cn("system-sm-semibold placeholder:system-sm-semibold h-5 rounded-[5px] border border-transparent px-1", "py-px text-text-primary caret-[#295EFF] shadow-shadow-shadow-3 outline-none", "placeholder:text-text-placeholder hover:bg-state-base-hover focus:border-components-input-border-active focus:bg-components-input-bg-active focus:shadow-xs", className),
			style: {
				width: `${width}px`,
				minWidth: `${minWidth}px`,
				maxWidth: `${maxWidth}px`,
				transition: "width 100ms ease-out"
			},
			placeholder,
			onChange,
			onBlur,
			onKeyUp: handleKeyUp,
			...props
		})]
	});
};
var auto_width_input_default = React$1.memo(AutoWidthInput);
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/visual-editor/edit-card/required-switch.tsx
var RequiredSwitch = ({ defaultValue, toggleRequired }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-x-1 rounded-[5px] border border-divider-subtle bg-background-default-lighter px-1.5 py-1",
		children: [/* @__PURE__ */ jsx("span", {
			className: "system-2xs-medium-uppercase text-text-secondary",
			children: t("nodes.llm.jsonSchema.required", { ns: "workflow" })
		}), /* @__PURE__ */ jsx(switch_default, {
			size: "xs",
			value: defaultValue,
			onChange: toggleRequired
		})]
	});
};
var required_switch_default = React$1.memo(RequiredSwitch);
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/visual-editor/edit-card/type-selector.tsx
var TypeSelector$1 = ({ items, currentValue, onSelect, popupClassName }) => {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-start",
		offset: { mainAxis: 4 },
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen((v) => !v),
			children: /* @__PURE__ */ jsxs("div", {
				className: cn("flex items-center rounded-[5px] p-0.5 pl-1 hover:bg-state-base-hover", open && "bg-state-base-hover"),
				children: [/* @__PURE__ */ jsx("span", {
					className: "system-xs-medium text-text-tertiary",
					children: currentValue
				}), /* @__PURE__ */ jsx(f1, { className: "h-4 w-4 text-text-tertiary" })]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: popupClassName,
			children: /* @__PURE__ */ jsx("div", {
				className: "w-40 rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg p-1 shadow-lg shadow-shadow-shadow-5",
				children: items.map((item) => {
					const isSelected = item.value === currentValue;
					return /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-x-1 rounded-lg px-2 py-1 hover:bg-state-base-hover",
						onClick: () => {
							onSelect(item);
							setOpen(false);
						},
						children: [/* @__PURE__ */ jsx("span", {
							className: "system-sm-medium px-1 text-text-secondary",
							children: item.text
						}), isSelected && /* @__PURE__ */ jsx(s7, { className: "h-4 w-4 text-text-accent" })]
					}, item.value);
				})
			})
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/visual-editor/edit-card/index.tsx
var TYPE_OPTIONS = [
	{
		value: Type.string,
		text: "string"
	},
	{
		value: Type.number,
		text: "number"
	},
	{
		value: Type.boolean,
		text: "boolean"
	},
	{
		value: Type.object,
		text: "object"
	},
	{
		value: ArrayType.string,
		text: "array[string]"
	},
	{
		value: ArrayType.number,
		text: "array[number]"
	},
	{
		value: ArrayType.object,
		text: "array[object]"
	}
];
var MAXIMUM_DEPTH_TYPE_OPTIONS = [
	{
		value: Type.string,
		text: "string"
	},
	{
		value: Type.number,
		text: "number"
	},
	{
		value: Type.boolean,
		text: "boolean"
	},
	{
		value: ArrayType.string,
		text: "array[string]"
	},
	{
		value: ArrayType.number,
		text: "array[number]"
	}
];
var EditCard = ({ fields, depth, path, parentPath }) => {
	const { t } = useTranslation();
	const [currentFields, setCurrentFields] = useState(fields);
	const [backupFields, setBackupFields] = useState(null);
	const isAddingNewField = useVisualEditorStore((state) => state.isAddingNewField);
	const setIsAddingNewField = useVisualEditorStore((state) => state.setIsAddingNewField);
	const advancedEditing = useVisualEditorStore((state) => state.advancedEditing);
	const setAdvancedEditing = useVisualEditorStore((state) => state.setAdvancedEditing);
	const { emit, useSubscribe } = useMittContext();
	const blurWithActions = useRef(false);
	const maximumDepthReached = depth === 10;
	const disableAddBtn = maximumDepthReached || currentFields.type !== Type.object && currentFields.type !== ArrayType.object;
	const hasAdvancedOptions = currentFields.type === Type.string || currentFields.type === Type.number;
	const isAdvancedEditing = advancedEditing || isAddingNewField;
	const advancedOptions = useMemo(() => {
		let enumValue = "";
		if (currentFields.type === Type.string || currentFields.type === Type.number) enumValue = (currentFields.enum || []).join(", ");
		return { enum: enumValue };
	}, [currentFields.type, currentFields.enum]);
	useSubscribe("restorePropertyName", () => {
		setCurrentFields((prev) => ({
			...prev,
			name: fields.name
		}));
	});
	useSubscribe("fieldChangeSuccess", () => {
		if (isAddingNewField) setIsAddingNewField(false);
		if (advancedEditing) setAdvancedEditing(false);
	});
	const emitPropertyNameChange = useCallback(() => {
		emit("propertyNameChange", {
			path,
			parentPath,
			oldFields: fields,
			fields: currentFields
		});
	}, [
		fields,
		currentFields,
		path,
		parentPath,
		emit
	]);
	const emitPropertyTypeChange = useCallback((type) => {
		emit("propertyTypeChange", {
			path,
			parentPath,
			oldFields: fields,
			fields: {
				...currentFields,
				type
			}
		});
	}, [
		fields,
		currentFields,
		path,
		parentPath,
		emit
	]);
	const emitPropertyRequiredToggle = useCallback(() => {
		emit("propertyRequiredToggle", {
			path,
			parentPath,
			oldFields: fields,
			fields: currentFields
		});
	}, [
		emit,
		path,
		parentPath,
		fields,
		currentFields
	]);
	const emitPropertyOptionsChange = useCallback((options) => {
		emit("propertyOptionsChange", {
			path,
			parentPath,
			oldFields: fields,
			fields: {
				...currentFields,
				...options
			}
		});
	}, [
		emit,
		path,
		parentPath,
		fields,
		currentFields
	]);
	const emitPropertyDelete = useCallback(() => {
		emit("propertyDelete", {
			path,
			parentPath,
			oldFields: fields,
			fields: currentFields
		});
	}, [
		emit,
		path,
		parentPath,
		fields,
		currentFields
	]);
	const emitPropertyAdd = useCallback(() => {
		emit("addField", { path });
	}, [emit, path]);
	const emitFieldChange = useCallback(() => {
		emit("fieldChange", {
			path,
			parentPath,
			oldFields: fields,
			fields: currentFields
		});
	}, [
		emit,
		path,
		parentPath,
		fields,
		currentFields
	]);
	const handlePropertyNameChange = useCallback((e) => {
		setCurrentFields((prev) => ({
			...prev,
			name: e.target.value?.trim()
		}));
	}, []);
	const handlePropertyNameBlur = useCallback(() => {
		if (isAdvancedEditing) return;
		emitPropertyNameChange();
	}, [isAdvancedEditing, emitPropertyNameChange]);
	const handleTypeChange = useCallback((item) => {
		setCurrentFields((prev) => ({
			...prev,
			type: item.value
		}));
		if (isAdvancedEditing) return;
		emitPropertyTypeChange(item.value);
	}, [isAdvancedEditing, emitPropertyTypeChange]);
	const toggleRequired = useCallback(() => {
		setCurrentFields((prev) => ({
			...prev,
			required: !prev.required
		}));
		if (isAdvancedEditing) return;
		emitPropertyRequiredToggle();
	}, [isAdvancedEditing, emitPropertyRequiredToggle]);
	const handleDescriptionChange = useCallback((e) => {
		setCurrentFields((prev) => ({
			...prev,
			description: e.target.value
		}));
	}, []);
	const handleDescriptionBlur = useCallback(() => {
		if (isAdvancedEditing) return;
		emitPropertyOptionsChange({
			description: currentFields.description,
			enum: currentFields.enum
		});
	}, [
		isAdvancedEditing,
		emitPropertyOptionsChange,
		currentFields
	]);
	const handleAdvancedOptionsChange = useCallback((options) => {
		let enumValue;
		if (options.enum === "") enumValue = void 0;
		else {
			const stringArray = options.enum.replace(/\s/g, "").split(",");
			if (currentFields.type === Type.number) enumValue = stringArray.map((value) => Number(value)).filter((num) => !Number.isNaN(num));
			else enumValue = stringArray;
		}
		setCurrentFields((prev) => ({
			...prev,
			enum: enumValue
		}));
		if (isAdvancedEditing) return;
		emitPropertyOptionsChange({
			description: currentFields.description,
			enum: enumValue
		});
	}, [
		isAdvancedEditing,
		emitPropertyOptionsChange,
		currentFields
	]);
	const handleDelete = useCallback(() => {
		blurWithActions.current = true;
		emitPropertyDelete();
	}, [emitPropertyDelete]);
	const handleAdvancedEdit = useCallback(() => {
		setBackupFields({ ...currentFields });
		setAdvancedEditing(true);
	}, [currentFields, setAdvancedEditing]);
	const handleAddChildField = useCallback(() => {
		blurWithActions.current = true;
		emitPropertyAdd();
	}, [emitPropertyAdd]);
	const handleConfirm = useCallback(() => {
		emitFieldChange();
	}, [emitFieldChange]);
	const handleCancel = useCallback(() => {
		if (isAddingNewField) {
			blurWithActions.current = true;
			emit("restoreSchema");
			setIsAddingNewField(false);
			return;
		}
		if (backupFields) {
			setCurrentFields(backupFields);
			setBackupFields(null);
		}
		setAdvancedEditing(false);
	}, [
		isAddingNewField,
		emit,
		setIsAddingNewField,
		setAdvancedEditing,
		backupFields
	]);
	useUnmount(() => {
		if (isAdvancedEditing || blurWithActions.current) return;
		emitFieldChange();
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col rounded-lg bg-components-panel-bg py-0.5 shadow-sm shadow-shadow-shadow-4",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex h-6 items-center pl-1 pr-0.5",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex grow items-center gap-x-1",
						children: [
							/* @__PURE__ */ jsx(auto_width_input_default, {
								value: currentFields.name,
								placeholder: t("nodes.llm.jsonSchema.fieldNamePlaceholder", { ns: "workflow" }),
								minWidth: 80,
								maxWidth: 300,
								onChange: handlePropertyNameChange,
								onBlur: handlePropertyNameBlur
							}),
							/* @__PURE__ */ jsx(TypeSelector$1, {
								currentValue: currentFields.type,
								items: maximumDepthReached ? MAXIMUM_DEPTH_TYPE_OPTIONS : TYPE_OPTIONS,
								onSelect: handleTypeChange,
								popupClassName: "z-[1000]"
							}),
							currentFields.required && /* @__PURE__ */ jsx("div", {
								className: "system-2xs-medium-uppercase px-1 py-0.5 text-text-warning",
								children: t("nodes.llm.jsonSchema.required", { ns: "workflow" })
							})
						]
					}),
					/* @__PURE__ */ jsx(required_switch_default, {
						defaultValue: currentFields.required,
						toggleRequired
					}),
					/* @__PURE__ */ jsx(Divider$1, {
						type: "vertical",
						className: "h-3"
					}),
					isAdvancedEditing ? /* @__PURE__ */ jsx(advanced_actions_default, {
						isConfirmDisabled: currentFields.name === "",
						onCancel: handleCancel,
						onConfirm: handleConfirm
					}) : /* @__PURE__ */ jsx(actions_default, {
						disableAddBtn,
						onAddChildField: handleAddChildField,
						onDelete: handleDelete,
						onEdit: handleAdvancedEdit
					})
				]
			}),
			(fields.description || isAdvancedEditing) && /* @__PURE__ */ jsx("div", {
				className: cn("flex", isAdvancedEditing ? "p-2 pt-1" : "px-2 pb-1"),
				children: /* @__PURE__ */ jsx("input", {
					value: currentFields.description,
					className: "system-xs-regular placeholder:system-xs-regular h-4 w-full p-0 text-text-tertiary caret-[#295EFF] outline-none placeholder:text-text-placeholder",
					placeholder: t("nodes.llm.jsonSchema.descriptionPlaceholder", { ns: "workflow" }),
					onChange: handleDescriptionChange,
					onBlur: handleDescriptionBlur,
					onKeyUp: (e) => e.key === "Enter" && e.currentTarget.blur()
				})
			}),
			isAdvancedEditing && hasAdvancedOptions && /* @__PURE__ */ jsx(advanced_options_default, {
				options: advancedOptions,
				onChange: handleAdvancedOptionsChange
			})
		]
	});
};
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/visual-editor/schema-node.tsx
var indentPadding = {
	0: "pl-0",
	1: "pl-[20px]",
	2: "pl-[40px]",
	3: "pl-[60px]",
	4: "pl-[80px]",
	5: "pl-[100px]",
	6: "pl-[120px]",
	7: "pl-[140px]",
	8: "pl-[160px]",
	9: "pl-[180px]",
	10: "pl-[200px]"
};
var indentLeft = {
	0: "left-0",
	1: "left-[20px]",
	2: "left-[40px]",
	3: "left-[60px]",
	4: "left-[80px]",
	5: "left-[100px]",
	6: "left-[120px]",
	7: "left-[140px]",
	8: "left-[160px]",
	9: "left-[180px]",
	10: "left-[200px]"
};
var SchemaNode = ({ name, required, schema, path, parentPath, depth, readOnly }) => {
	const [isExpanded, setIsExpanded] = useState(true);
	const hoveringProperty = useVisualEditorStore((state) => state.hoveringProperty);
	const setHoveringProperty = useVisualEditorStore((state) => state.setHoveringProperty);
	const isAddingNewField = useVisualEditorStore((state) => state.isAddingNewField);
	const advancedEditing = useVisualEditorStore((state) => state.advancedEditing);
	const { run: setHoveringPropertyDebounced } = useDebounceFn((path) => {
		setHoveringProperty(path);
	}, { wait: 50 });
	const hasChildren = useMemo(() => getHasChildren(schema), [schema]);
	const type = useMemo(() => getFieldType(schema), [schema]);
	const isHovering = hoveringProperty === path.join(".");
	const handleExpand = () => {
		setIsExpanded(!isExpanded);
	};
	const handleMouseEnter = () => {
		if (readOnly) return;
		if (advancedEditing || isAddingNewField) return;
		setHoveringPropertyDebounced(path.join("."));
	};
	const handleMouseLeave = () => {
		if (readOnly) return;
		if (advancedEditing || isAddingNewField) return;
		setHoveringPropertyDebounced(null);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: cn("relative z-10", indentPadding[depth]),
				children: [depth > 0 && hasChildren && /* @__PURE__ */ jsx("div", {
					className: cn("absolute top-0 z-10 flex h-7 w-5 items-center bg-background-section-burn px-0.5", indentLeft[depth - 1]),
					children: /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: handleExpand,
						className: "py-0.5 text-text-tertiary hover:text-text-accent",
						children: isExpanded ? /* @__PURE__ */ jsx(z1, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(k1, { className: "h-4 w-4" })
					})
				}), /* @__PURE__ */ jsx("div", {
					onMouseEnter: handleMouseEnter,
					onMouseLeave: handleMouseLeave,
					children: isHovering && depth > 0 ? /* @__PURE__ */ jsx(EditCard, {
						fields: {
							name,
							type,
							required,
							description: schema.description,
							enum: schema.enum
						},
						path,
						parentPath,
						depth
					}) : /* @__PURE__ */ jsx(card_default, {
						name,
						type,
						required,
						description: schema.description
					})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: cn("absolute z-0 flex w-5 justify-center", schema.description ? "top-12 h-[calc(100%-3rem)]" : "top-7 h-[calc(100%-1.75rem)]", indentLeft[depth]),
				children: /* @__PURE__ */ jsx(Divider$1, {
					type: "vertical",
					className: cn("mx-0", isHovering ? "bg-divider-deep" : "bg-divider-subtle")
				})
			}),
			isExpanded && hasChildren && depth < 10 && /* @__PURE__ */ jsxs(Fragment$1, { children: [schema.type === Type.object && schema.properties && Object.entries(schema.properties).map(([key, childSchema]) => /* @__PURE__ */ jsx(SchemaNode, {
				name: key,
				required: !!schema.required?.includes(key),
				schema: childSchema,
				path: [
					...path,
					"properties",
					key
				],
				parentPath: path,
				depth: depth + 1
			}, key)), schema.type === Type.array && schema.items && schema.items.type === Type.object && schema.items.properties && Object.entries(schema.items.properties).map(([key, childSchema]) => /* @__PURE__ */ jsx(SchemaNode, {
				name: key,
				required: !!schema.items?.required?.includes(key),
				schema: childSchema,
				path: [
					...path,
					"items",
					"properties",
					key
				],
				parentPath: path,
				depth: depth + 1
			}, key))] }),
			!readOnly && depth === 0 && !isAddingNewField && /* @__PURE__ */ jsx(add_field_default, {})
		]
	});
};
var schema_node_default = React$1.memo(SchemaNode);
//#endregion
//#region app/components/workflow/nodes/llm/components/json-schema-config-modal/visual-editor/index.tsx
var VisualEditor = (props) => {
	const { className, schema, readOnly } = props;
	useSchemaNodeOperations(props);
	return /* @__PURE__ */ jsx("div", {
		className: cn("h-full overflow-auto rounded-xl bg-background-section-burn p-1 pl-2", className),
		children: /* @__PURE__ */ jsx(schema_node_default, {
			name: props.rootName || "structured_output",
			schema,
			required: false,
			path: [],
			depth: 0,
			readOnly
		})
	});
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/tool-selector/components/schema-modal.tsx
var SchemaModal = ({ isShow, schema, rootName, onClose }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(Modal, {
		isShow,
		onClose,
		className: "max-w-[960px] p-0",
		wrapperClassName: "z-[9999]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "pb-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative flex p-6 pb-3 pr-14",
				children: [/* @__PURE__ */ jsx("div", {
					className: "title-2xl-semi-bold grow truncate text-text-primary",
					children: t("nodes.agent.parameterSchema", { ns: "workflow" })
				}), /* @__PURE__ */ jsx("div", {
					className: "absolute right-5 top-5 flex h-8 w-8 items-center justify-center p-1.5",
					onClick: onClose,
					children: /* @__PURE__ */ jsx(P7, { className: "h-[18px] w-[18px] text-text-tertiary" })
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex max-h-[700px] overflow-y-auto px-6 py-2",
				children: /* @__PURE__ */ jsx(MittProvider, { children: /* @__PURE__ */ jsx(VisualEditorContextProvider, { children: /* @__PURE__ */ jsx(VisualEditor, {
					className: "w-full",
					schema,
					rootName,
					readOnly: true
				}) }) })
			})]
		})
	});
};
var schema_modal_default = React$1.memo(SchemaModal);
//#endregion
//#region app/components/plugins/plugin-detail-panel/tool-selector/components/reasoning-config-form.tsx
var ReasoningConfigForm = ({ value, onChange, schemas, nodeOutputVars, availableNodes, nodeId }) => {
	const { t } = useTranslation();
	const language = useLanguage();
	const getVarKindType = (type) => {
		if (type === FormTypeEnum.file || type === FormTypeEnum.files) return VarKindType.variable;
		if (type === FormTypeEnum.select || type === FormTypeEnum.checkbox || type === FormTypeEnum.textNumber || type === FormTypeEnum.array || type === FormTypeEnum.object) return VarKindType.constant;
		if (type === FormTypeEnum.textInput || type === FormTypeEnum.secretInput) return VarKindType.mixed;
	};
	const handleAutomatic = (key, val, type) => {
		onChange({
			...value,
			[key]: {
				value: val ? null : {
					type: getVarKindType(type),
					value: null
				},
				auto: val ? 1 : 0
			}
		});
	};
	const handleTypeChange = useCallback((variable, defaultValue) => {
		return (newType) => {
			onChange(produce(value, (draft) => {
				draft[variable].value = {
					type: newType,
					value: newType === VarKindType.variable ? "" : defaultValue
				};
			}));
		};
	}, [onChange, value]);
	const handleValueChange = useCallback((variable, varType) => {
		return (newValue) => {
			onChange(produce(value, (draft) => {
				draft[variable].value = {
					type: getVarKindType(varType),
					value: newValue
				};
			}));
		};
	}, [onChange, value]);
	const handleAppChange = useCallback((variable) => {
		return (app) => {
			onChange(produce(value, (draft) => {
				draft[variable].value = app;
			}));
		};
	}, [onChange, value]);
	const handleModelChange = useCallback((variable) => {
		return (model) => {
			onChange(produce(value, (draft) => {
				const currentValue = draft[variable].value;
				draft[variable].value = {
					...currentValue,
					...model
				};
			}));
		};
	}, [onChange, value]);
	const handleVariableSelectorChange = useCallback((variable) => {
		return (newValue) => {
			onChange(produce(value, (draft) => {
				draft[variable].value = {
					type: VarKindType.variable,
					value: newValue
				};
			}));
		};
	}, [onChange, value]);
	const [isShowSchema, { setTrue: showSchema, setFalse: hideSchema }] = useBoolean(false);
	const [schema, setSchema] = useState(null);
	const [schemaRootName, setSchemaRootName] = useState("");
	const renderField = (schema, showSchema) => {
		const { default: defaultValue, variable, label, required, tooltip, type, scope, url, input_schema, placeholder, options } = schema;
		const auto = value[variable]?.auto;
		const tooltipContent = tooltip && /* @__PURE__ */ jsx(tooltip_default, {
			popupContent: /* @__PURE__ */ jsx("div", {
				className: "w-[200px]",
				children: tooltip[language] || tooltip.en_US
			}),
			triggerClassName: "ml-0.5 w-4 h-4",
			asChild: false
		});
		const varInput = value[variable].value;
		const isString = type === FormTypeEnum.textInput || type === FormTypeEnum.secretInput;
		const isNumber = type === FormTypeEnum.textNumber;
		const isObject = type === FormTypeEnum.object;
		const isArray = type === FormTypeEnum.array;
		const isShowJSONEditor = isObject || isArray;
		const isFile = type === FormTypeEnum.file || type === FormTypeEnum.files;
		const isBoolean = type === FormTypeEnum.checkbox;
		const isSelect = type === FormTypeEnum.select;
		const isAppSelector = type === FormTypeEnum.appSelector;
		const isModelSelector = type === FormTypeEnum.modelSelector;
		const showTypeSwitch = isNumber || isObject || isArray;
		const isConstant = varInput?.type === VarKindType.constant || !varInput?.type;
		const showVariableSelector = isFile || varInput?.type === VarKindType.variable;
		const targetVarType = () => {
			if (isString) return VarType.string;
			else if (isNumber) return VarType.number;
			else if (type === FormTypeEnum.files) return VarType.arrayFile;
			else if (type === FormTypeEnum.file) return VarType.file;
			else if (isBoolean) return VarType.boolean;
			else if (isObject) return VarType.object;
			else if (isArray) return VarType.arrayObject;
			else return VarType.string;
		};
		const getFilterVar = () => {
			if (isNumber) return (varPayload) => varPayload.type === VarType.number;
			else if (isString) return (varPayload) => [
				VarType.string,
				VarType.number,
				VarType.secret
			].includes(varPayload.type);
			else if (isFile) return (varPayload) => [VarType.file, VarType.arrayFile].includes(varPayload.type);
			else if (isBoolean) return (varPayload) => varPayload.type === VarType.boolean;
			else if (isObject) return (varPayload) => varPayload.type === VarType.object;
			else if (isArray) return (varPayload) => [
				VarType.array,
				VarType.arrayString,
				VarType.arrayNumber,
				VarType.arrayObject
			].includes(varPayload.type);
		};
		return /* @__PURE__ */ jsxs("div", {
			className: "space-y-0.5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "system-sm-semibold flex items-center justify-between py-2 text-text-secondary",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: cn("code-sm-semibold max-w-[140px] truncate text-text-secondary"),
								title: label[language] || label.en_US,
								children: label[language] || label.en_US
							}),
							required && /* @__PURE__ */ jsx("span", {
								className: "ml-1 text-red-500",
								children: "*"
							}),
							tooltipContent,
							/* @__PURE__ */ jsx("span", {
								className: "system-xs-regular mx-1 text-text-quaternary",
								children: "·"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "system-xs-regular text-text-tertiary",
								children: targetVarType()
							}),
							isShowJSONEditor && /* @__PURE__ */ jsx(tooltip_default, {
								popupContent: /* @__PURE__ */ jsx("div", {
									className: "system-xs-medium text-text-secondary",
									children: t("nodes.agent.clickToViewParameterSchema", { ns: "workflow" })
								}),
								asChild: false,
								children: /* @__PURE__ */ jsx("div", {
									className: "ml-0.5 cursor-pointer rounded-[4px] p-px text-text-tertiary hover:bg-state-base-hover hover:text-text-secondary",
									onClick: () => showSchema(input_schema, label[language] || label.en_US),
									children: /* @__PURE__ */ jsx(v4, { className: "size-3.5" })
								})
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex cursor-pointer items-center gap-1 rounded-[6px] border border-divider-subtle bg-background-default-lighter px-2 py-1 hover:bg-state-base-hover",
						onClick: () => handleAutomatic(variable, !auto, type),
						children: [/* @__PURE__ */ jsx("span", {
							className: "system-xs-medium text-text-secondary",
							children: t("detailPanel.toolSelector.auto", { ns: "plugin" })
						}), /* @__PURE__ */ jsx(switch_default, {
							size: "xs",
							value: !!auto,
							onChange: (val) => handleAutomatic(variable, val, type)
						})]
					})]
				}),
				auto === 0 && /* @__PURE__ */ jsxs("div", {
					className: cn("gap-1", !(isShowJSONEditor && isConstant) && "flex"),
					children: [
						showTypeSwitch && /* @__PURE__ */ jsx(FormInputTypeSwitch, {
							value: varInput?.type || VarKindType.constant,
							onChange: handleTypeChange(variable, defaultValue)
						}),
						isString && /* @__PURE__ */ jsx(mixed_variable_text_input_default, {
							value: varInput?.value || "",
							onChange: handleValueChange(variable, type),
							nodesOutputVars: nodeOutputVars,
							availableNodes
						}),
						isNumber && isConstant && /* @__PURE__ */ jsx(Input$1, {
							className: "h-8 grow",
							type: "number",
							value: varInput?.value || "",
							onChange: (e) => handleValueChange(variable, type)(e.target.value),
							placeholder: placeholder?.[language] || placeholder?.en_US
						}),
						isBoolean && /* @__PURE__ */ jsx(FormInputBoolean, {
							value: varInput?.value,
							onChange: handleValueChange(variable, type)
						}),
						isSelect && options && /* @__PURE__ */ jsx(SimpleSelect, {
							wrapperClassName: "h-8 grow",
							defaultValue: varInput?.value,
							items: options.filter((option) => {
								if (option.show_on.length) return option.show_on.every((showOnItem) => value[showOnItem.variable]?.value?.value === showOnItem.value);
								return true;
							}).map((option) => ({
								value: option.value,
								name: option.label[language] || option.label.en_US
							})),
							onSelect: (item) => handleValueChange(variable, type)(item.value),
							placeholder: placeholder?.[language] || placeholder?.en_US
						}),
						isShowJSONEditor && isConstant && /* @__PURE__ */ jsx("div", {
							className: "mt-1 w-full",
							children: /* @__PURE__ */ jsx(code_editor_default, {
								title: "JSON",
								value: varInput?.value,
								isExpand: true,
								isInNode: true,
								height: 100,
								language: CodeLanguage.json,
								onChange: handleValueChange(variable, type),
								className: "w-full",
								placeholder: /* @__PURE__ */ jsx("div", {
									className: "whitespace-pre",
									children: placeholder?.[language] || placeholder?.en_US
								})
							})
						}),
						isAppSelector && /* @__PURE__ */ jsx(app_selector_default, {
							disabled: false,
							scope: scope || "all",
							value: varInput,
							onSelect: handleAppChange(variable)
						}),
						isModelSelector && /* @__PURE__ */ jsx(ModelParameterModal, {
							popupClassName: "!w-[387px]",
							isAdvancedMode: true,
							isInWorkflow: true,
							value: varInput,
							setModel: handleModelChange(variable),
							scope
						}),
						showVariableSelector && /* @__PURE__ */ jsx(var_reference_picker_default, {
							zIndex: 1001,
							className: "h-8 grow",
							readonly: false,
							isShowNodeName: true,
							nodeId,
							value: varInput?.value || [],
							onChange: handleVariableSelectorChange(variable),
							filterVar: getFilterVar(),
							schema,
							valueTypePlaceHolder: targetVarType()
						})
					]
				}),
				url && /* @__PURE__ */ jsxs("a", {
					href: url,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "inline-flex items-center text-xs text-text-accent",
					children: [t("howToGet", { ns: "tools" }), /* @__PURE__ */ jsx(o2, { className: "ml-1 h-3 w-3" })]
				})
			]
		}, variable);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3 px-4 py-2",
		children: [!isShowSchema && schemas.map((schema) => renderField(schema, (s, rootName) => {
			setSchema(s);
			setSchemaRootName(rootName);
			showSchema();
		})), isShowSchema && /* @__PURE__ */ jsx(schema_modal_default, {
			isShow: isShowSchema,
			schema,
			rootName: schemaRootName,
			onClose: hideSchema
		})]
	});
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/tool-selector/components/tool-authorization-section.tsx
var ToolAuthorizationSection = ({ currentProvider, credentialId, onAuthorizationItemClick }) => {
	if (!(currentProvider && currentProvider.type === CollectionType.builtIn && currentProvider.allow_delete)) return null;
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Divider$1, { className: "my-1 w-full" }), /* @__PURE__ */ jsx("div", {
		className: "px-4 py-2",
		children: /* @__PURE__ */ jsx(plugin_auth_in_agent_default, {
			pluginPayload: {
				provider: currentProvider.name,
				category: AuthCategory.tool,
				providerType: currentProvider.type
			},
			credentialId,
			onAuthorizationItemClick
		})
	})] });
};
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/useGetState/index.js
function useGetState(initialState) {
	var _a = __read(useState(initialState), 2), state = _a[0], setState = _a[1];
	var stateRef = useLatest(state);
	return [
		state,
		setState,
		useCallback(function() {
			return stateRef.current;
		}, [])
	];
}
//#endregion
//#region app/components/tools/labels/selector.tsx
var LabelSelector = ({ value, onChange }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const { tags: labelList } = useTags();
	const [keywords, setKeywords] = useState("");
	const [searchKeywords, setSearchKeywords] = useState("");
	const { run: handleSearch } = useDebounceFn(() => {
		setSearchKeywords(keywords);
	}, { wait: 500 });
	const handleKeywordsChange = (value) => {
		setKeywords(value);
		handleSearch();
	};
	const filteredLabelList = useMemo(() => {
		return labelList.filter((label) => label.name.includes(searchKeywords));
	}, [labelList, searchKeywords]);
	const selectedLabels = useMemo(() => {
		return value.map((v) => labelList.find((l) => l.name === v)?.label).join(", ");
	}, [value, labelList]);
	const selectLabel = (label) => {
		if (value.includes(label.name)) onChange(value.filter((v) => v !== label.name));
		else onChange([...value, label.name]);
	};
	return /* @__PURE__ */ jsx(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-start",
		offset: 4,
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
				onClick: () => setOpen((v) => !v),
				className: "block",
				children: /* @__PURE__ */ jsxs("div", {
					className: cn("flex h-10 cursor-pointer items-center gap-1 rounded-lg border-[0.5px] border-transparent bg-components-input-bg-normal px-3 hover:bg-components-input-bg-hover", open && "!hover:bg-components-input-bg-hover hover:bg-components-input-bg-hover"),
					children: [/* @__PURE__ */ jsxs("div", {
						title: value.length > 0 ? selectedLabels : "",
						className: cn("grow truncate text-[13px] leading-[18px] text-text-secondary", !value.length && "!text-text-quaternary"),
						children: [!value.length && t("createTool.toolInput.labelPlaceholder", { ns: "tools" }), !!value.length && selectedLabels]
					}), /* @__PURE__ */ jsx("div", {
						className: "ml-1 shrink-0 text-text-secondary opacity-60",
						children: /* @__PURE__ */ jsx(f1, { className: "h-4 w-4" })
					})]
				})
			}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
				className: "z-[1040]",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative w-[591px] rounded-lg border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg  backdrop-blur-[5px]",
					children: [/* @__PURE__ */ jsx("div", {
						className: "border-b-[0.5px] border-divider-regular p-2",
						children: /* @__PURE__ */ jsx(Input$1, {
							showLeftIcon: true,
							showClearIcon: true,
							value: keywords,
							onChange: (e) => handleKeywordsChange(e.target.value),
							onClear: () => handleKeywordsChange("")
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "max-h-[264px] overflow-y-auto p-1",
						children: [filteredLabelList.map((label) => /* @__PURE__ */ jsxs("div", {
							className: "flex cursor-pointer items-center gap-2 rounded-lg py-[6px] pl-3 pr-2 hover:bg-components-panel-on-panel-item-bg-hover",
							onClick: () => selectLabel(label),
							children: [/* @__PURE__ */ jsx(Checkbox, {
								className: "shrink-0",
								checked: value.includes(label.name),
								onCheck: noop
							}), /* @__PURE__ */ jsx("div", {
								title: label.label,
								className: "grow truncate text-sm leading-5 text-text-secondary",
								children: label.label
							})]
						}, label.name)), !filteredLabelList.length && /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center gap-1 p-3",
							children: [/* @__PURE__ */ jsx(Icon$29, { className: "h-6 w-6 text-text-quaternary" }), /* @__PURE__ */ jsx("div", {
								className: "text-xs leading-[14px] text-text-tertiary",
								children: t("tag.noTag", { ns: "common" })
							})]
						})]
					})]
				})
			})]
		})
	});
};
//#endregion
//#region app/components/tools/edit-custom-collection-modal/config-credentials.tsx
var SelectItem$1 = ({ text, value, isChecked, onClick }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: cn(isChecked ? "border-[2px] border-util-colors-indigo-indigo-600 bg-components-panel-on-panel-item-bg shadow-sm" : "border border-components-card-border", "mb-2 flex h-9 w-[150px] cursor-pointer items-center space-x-2 rounded-xl bg-components-panel-on-panel-item-bg pl-3 hover:bg-components-panel-on-panel-item-bg-hover"),
		onClick: () => onClick(value),
		children: [/* @__PURE__ */ jsx(ui_default, { isChecked }), /* @__PURE__ */ jsx("div", {
			className: "system-sm-regular text-text-primary",
			children: text
		})]
	});
};
var ConfigCredential = ({ positionCenter, credential, onChange, onHide }) => {
	const { t } = useTranslation();
	const [tempCredential, setTempCredential] = React$1.useState(credential);
	return /* @__PURE__ */ jsx(drawer_plus_default, {
		isShow: true,
		positionCenter,
		onHide,
		title: t("createTool.authMethod.title", { ns: "tools" }),
		dialogClassName: "z-[60]",
		dialogBackdropClassName: "z-[70]",
		panelClassName: "mt-2 !w-[520px] h-fit z-[80]",
		maxWidthClassName: "!max-w-[520px]",
		height: "fit-content",
		headerClassName: "!border-b-divider-regular",
		body: /* @__PURE__ */ jsxs("div", {
			className: "px-6 pt-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "system-sm-medium py-2 text-text-primary",
						children: t("createTool.authMethod.type", { ns: "tools" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex space-x-3",
						children: [
							/* @__PURE__ */ jsx(SelectItem$1, {
								text: t("createTool.authMethod.types.none", { ns: "tools" }),
								value: AuthType.none,
								isChecked: tempCredential.auth_type === AuthType.none,
								onClick: (value) => setTempCredential({ auth_type: value })
							}),
							/* @__PURE__ */ jsx(SelectItem$1, {
								text: t("createTool.authMethod.types.api_key_header", { ns: "tools" }),
								value: AuthType.apiKeyHeader,
								isChecked: tempCredential.auth_type === AuthType.apiKeyHeader,
								onClick: (value) => setTempCredential({
									auth_type: value,
									api_key_header: tempCredential.api_key_header || "Authorization",
									api_key_value: tempCredential.api_key_value || "",
									api_key_header_prefix: tempCredential.api_key_header_prefix || AuthHeaderPrefix.custom
								})
							}),
							/* @__PURE__ */ jsx(SelectItem$1, {
								text: t("createTool.authMethod.types.api_key_query", { ns: "tools" }),
								value: AuthType.apiKeyQuery,
								isChecked: tempCredential.auth_type === AuthType.apiKeyQuery,
								onClick: (value) => setTempCredential({
									auth_type: value,
									api_key_query_param: tempCredential.api_key_query_param || "key",
									api_key_value: tempCredential.api_key_value || ""
								})
							})
						]
					})] }),
					tempCredential.auth_type === AuthType.apiKeyHeader && /* @__PURE__ */ jsxs(Fragment$1, { children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "system-sm-medium py-2 text-text-primary",
							children: t("createTool.authHeaderPrefix.title", { ns: "tools" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex space-x-3",
							children: [
								/* @__PURE__ */ jsx(SelectItem$1, {
									text: t("createTool.authHeaderPrefix.types.basic", { ns: "tools" }),
									value: AuthHeaderPrefix.basic,
									isChecked: tempCredential.api_key_header_prefix === AuthHeaderPrefix.basic,
									onClick: (value) => setTempCredential({
										...tempCredential,
										api_key_header_prefix: value
									})
								}),
								/* @__PURE__ */ jsx(SelectItem$1, {
									text: t("createTool.authHeaderPrefix.types.bearer", { ns: "tools" }),
									value: AuthHeaderPrefix.bearer,
									isChecked: tempCredential.api_key_header_prefix === AuthHeaderPrefix.bearer,
									onClick: (value) => setTempCredential({
										...tempCredential,
										api_key_header_prefix: value
									})
								}),
								/* @__PURE__ */ jsx(SelectItem$1, {
									text: t("createTool.authHeaderPrefix.types.custom", { ns: "tools" }),
									value: AuthHeaderPrefix.custom,
									isChecked: tempCredential.api_key_header_prefix === AuthHeaderPrefix.custom,
									onClick: (value) => setTempCredential({
										...tempCredential,
										api_key_header_prefix: value
									})
								})
							]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "system-sm-medium flex items-center py-2 text-text-primary",
							children: [t("createTool.authMethod.key", { ns: "tools" }), /* @__PURE__ */ jsx(tooltip_default, {
								popupContent: /* @__PURE__ */ jsx("div", {
									className: "w-[261px] text-text-tertiary",
									children: t("createTool.authMethod.keyTooltip", { ns: "tools" })
								}),
								triggerClassName: "ml-0.5 w-4 h-4"
							})]
						}), /* @__PURE__ */ jsx(Input$1, {
							value: tempCredential.api_key_header,
							onChange: (e) => setTempCredential({
								...tempCredential,
								api_key_header: e.target.value
							}),
							placeholder: t("createTool.authMethod.types.apiKeyPlaceholder", { ns: "tools" })
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "system-sm-medium py-2 text-text-primary",
							children: t("createTool.authMethod.value", { ns: "tools" })
						}), /* @__PURE__ */ jsx(Input$1, {
							value: tempCredential.api_key_value,
							onChange: (e) => setTempCredential({
								...tempCredential,
								api_key_value: e.target.value
							}),
							placeholder: t("createTool.authMethod.types.apiValuePlaceholder", { ns: "tools" })
						})] })
					] }),
					tempCredential.auth_type === AuthType.apiKeyQuery && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "system-sm-medium flex items-center py-2 text-text-primary",
						children: [t("createTool.authMethod.queryParam", { ns: "tools" }), /* @__PURE__ */ jsx(tooltip_default, {
							popupContent: /* @__PURE__ */ jsx("div", {
								className: "w-[261px] text-text-tertiary",
								children: t("createTool.authMethod.queryParamTooltip", { ns: "tools" })
							}),
							triggerClassName: "ml-0.5 w-4 h-4"
						})]
					}), /* @__PURE__ */ jsx(Input$1, {
						value: tempCredential.api_key_query_param,
						onChange: (e) => setTempCredential({
							...tempCredential,
							api_key_query_param: e.target.value
						}),
						placeholder: t("createTool.authMethod.types.queryParamPlaceholder", { ns: "tools" })
					})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "system-sm-medium py-2 text-text-primary",
						children: t("createTool.authMethod.value", { ns: "tools" })
					}), /* @__PURE__ */ jsx(Input$1, {
						value: tempCredential.api_key_value,
						onChange: (e) => setTempCredential({
							...tempCredential,
							api_key_value: e.target.value
						}),
						placeholder: t("createTool.authMethod.types.apiValuePlaceholder", { ns: "tools" })
					})] })] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-4 flex shrink-0 justify-end space-x-2 py-4",
				children: [/* @__PURE__ */ jsx(Button, {
					onClick: onHide,
					children: t("operation.cancel", { ns: "common" })
				}), /* @__PURE__ */ jsx(Button, {
					variant: "primary",
					onClick: () => {
						onChange(tempCredential);
						onHide();
					},
					children: t("operation.save", { ns: "common" })
				})]
			})]
		})
	});
};
var config_credentials_default = React$1.memo(ConfigCredential);
//#endregion
//#region app/components/tools/edit-custom-collection-modal/examples.ts
var examples = [
	{
		key: "json",
		content: `{
      "openapi": "3.1.0",
      "info": {
        "title": "Get weather data",
        "description": "Retrieves current weather data for a location.",
        "version": "v1.0.0"
      },
      "servers": [
        {
          "url": "https://weather.example.com"
        }
      ],
      "paths": {
        "/location": {
          "get": {
            "description": "Get temperature for a specific location",
            "operationId": "GetCurrentWeather",
            "parameters": [
              {
                "name": "location",
                "in": "query",
                "description": "The city and state to retrieve the weather for",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "deprecated": false
          }
        }
      },
      "components": {
        "schemas": {}
      }
    }`
	},
	{
		key: "yaml",
		content: `# Taken from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml

    openapi: "3.0.0"
    info:
      version: 1.0.0
      title: Swagger Petstore
      license:
        name: MIT
    servers:
      - url: https://petstore.swagger.io/v1
    paths:
      /pets:
        get:
          summary: List all pets
          operationId: listPets
          tags:
            - pets
          parameters:
            - name: limit
              in: query
              description: How many items to return at one time (max 100)
              required: false
              schema:
                type: integer
                maximum: 100
                format: int32
          responses:
            '200':
              description: A paged array of pets
              headers:
                x-next:
                  description: A link to the next page of responses
                  schema:
                    type: string
              content:
                application/json:
                  schema:
                    $ref: "#/components/schemas/Pets"
            default:
              description: unexpected error
              content:
                application/json:
                  schema:
                    $ref: "#/components/schemas/Error"
        post:
          summary: Create a pet
          operationId: createPets
          tags:
            - pets
          responses:
            '201':
              description: Null response
            default:
              description: unexpected error
              content:
                application/json:
                  schema:
                    $ref: "#/components/schemas/Error"
      /pets/{petId}:
        get:
          summary: Info for a specific pet
          operationId: showPetById
          tags:
            - pets
          parameters:
            - name: petId
              in: path
              required: true
              description: The id of the pet to retrieve
              schema:
                type: string
          responses:
            '200':
              description: Expected response to a valid request
              content:
                application/json:
                  schema:
                    $ref: "#/components/schemas/Pet"
            default:
              description: unexpected error
              content:
                application/json:
                  schema:
                    $ref: "#/components/schemas/Error"
    components:
      schemas:
        Pet:
          type: object
          required:
            - id
            - name
          properties:
            id:
              type: integer
              format: int64
            name:
              type: string
            tag:
              type: string
        Pets:
          type: array
          maxItems: 100
          items:
            $ref: "#/components/schemas/Pet"
        Error:
          type: object
          required:
            - code
            - message
          properties:
            code:
              type: integer
              format: int32
            message:
              type: string`
	},
	{
		key: "blankTemplate",
		content: `{
      "openapi": "3.1.0",
      "info": {
        "title": "Untitled",
        "description": "Your OpenAPI specification",
        "version": "v1.0.0"
      },
      "servers": [
        {
          "url": ""
        }
      ],
      "paths": {},
      "components": {
        "schemas": {}
      }
    }`
	}
];
//#endregion
//#region app/components/tools/edit-custom-collection-modal/get-schema.tsx
var GetSchema = ({ onChange }) => {
	const { t } = useTranslation();
	const [showImportFromUrl, setShowImportFromUrl] = useState(false);
	const [importUrl, setImportUrl] = useState("");
	const [isParsing, setIsParsing] = useState(false);
	const handleImportFromUrl = async () => {
		if (!importUrl.startsWith("http://") && !importUrl.startsWith("https://")) {
			toast.error(t("createTool.urlError", { ns: "tools" }));
			return;
		}
		setIsParsing(true);
		try {
			const { schema } = await importSchemaFromURL(importUrl);
			setImportUrl("");
			onChange(schema);
		} finally {
			setIsParsing(false);
			setShowImportFromUrl(false);
		}
	};
	const importURLRef = React$1.useRef(null);
	useClickAway(() => {
		setShowImportFromUrl(false);
	}, importURLRef);
	const [showExamples, setShowExamples] = useState(false);
	const showExamplesRef = React$1.useRef(null);
	useClickAway(() => {
		setShowExamples(false);
	}, showExamplesRef);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative flex w-[224px] justify-end space-x-1",
		children: [/* @__PURE__ */ jsxs("div", {
			ref: importURLRef,
			children: [/* @__PURE__ */ jsxs(Button, {
				size: "small",
				className: "space-x-1 ",
				onClick: () => {
					setShowImportFromUrl(!showImportFromUrl);
				},
				children: [/* @__PURE__ */ jsx(p, { className: "h-3 w-3" }), /* @__PURE__ */ jsx("div", {
					className: "system-xs-medium text-text-secondary",
					children: t("createTool.importFromUrl", { ns: "tools" })
				})]
			}), showImportFromUrl && /* @__PURE__ */ jsx("div", {
				className: " absolute left-[-35px] top-[26px] rounded-lg border border-components-panel-border bg-components-panel-bg p-2 shadow-lg",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx(Input$1, {
						type: "text",
						className: "w-[244px]",
						placeholder: t("createTool.importFromUrlPlaceHolder", { ns: "tools" }),
						value: importUrl,
						onChange: (e) => setImportUrl(e.target.value)
					}), /* @__PURE__ */ jsx(Button, {
						className: "absolute right-1 top-1",
						size: "small",
						variant: "primary",
						disabled: !importUrl,
						onClick: handleImportFromUrl,
						loading: isParsing,
						children: isParsing ? "" : t("operation.ok", { ns: "common" })
					})]
				})
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative -mt-0.5",
			ref: showExamplesRef,
			children: [/* @__PURE__ */ jsxs(Button, {
				size: "small",
				className: "space-x-1",
				onClick: () => {
					setShowExamples(!showExamples);
				},
				children: [/* @__PURE__ */ jsx("div", {
					className: "system-xs-medium text-text-secondary",
					children: t("createTool.examples", { ns: "tools" })
				}), /* @__PURE__ */ jsx(f1, { className: "h-3 w-3" })]
			}), showExamples && /* @__PURE__ */ jsx("div", {
				className: "absolute right-0 top-7 rounded-lg bg-components-panel-bg p-1 shadow-sm",
				children: examples.map((item) => /* @__PURE__ */ jsx("div", {
					onClick: () => {
						onChange(item.content);
						setShowExamples(false);
					},
					className: "system-sm-regular cursor-pointer whitespace-nowrap rounded-lg px-3 py-1.5 leading-5 text-text-secondary hover:bg-components-panel-on-panel-item-bg-hover",
					children: t(`createTool.exampleOptions.${item.key}`, { ns: "tools" })
				}, item.key))
			})]
		})]
	});
};
var get_schema_default = React$1.memo(GetSchema);
//#endregion
//#region app/components/tools/edit-custom-collection-modal/test-api.tsx
var TestApi = ({ positionCenter, customCollection, tool, onHide }) => {
	const { t } = useTranslation();
	const language = getLanguage(useLocale());
	const [credentialsModalShow, setCredentialsModalShow] = useState(false);
	const [tempCredential, setTempCredential] = React$1.useState(customCollection.credentials);
	const [testing, setTesting] = useState(false);
	const [result, setResult] = useState("");
	const { operation_id: toolName, parameters } = tool;
	const [parametersValue, setParametersValue] = useState({});
	const handleTest = async () => {
		if (testing) return;
		setTesting(true);
		const credentials = JSON.parse(JSON.stringify(tempCredential));
		if (credentials.auth_type === AuthType.none) {
			delete credentials.api_key_header_prefix;
			delete credentials.api_key_header;
			delete credentials.api_key_value;
		}
		const res = await testAPIAvailable({
			provider_name: customCollection.provider,
			tool_name: toolName,
			credentials,
			schema_type: customCollection.schema_type,
			schema: customCollection.schema,
			parameters: parametersValue
		});
		setResult(res.error || res.result);
		setTesting(false);
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(drawer_plus_default, {
		isShow: true,
		positionCenter,
		onHide,
		title: `${t("test.title", { ns: "tools" })}  ${toolName}`,
		panelClassName: "mt-2 !w-[600px]",
		maxWidthClassName: "!max-w-[600px]",
		height: "calc(100vh - 16px)",
		headerClassName: "!border-b-divider-regular",
		body: /* @__PURE__ */ jsxs("div", {
			className: "overflow-y-auto px-6 pt-2",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "system-sm-medium py-2 text-text-primary",
						children: t("createTool.authMethod.title", { ns: "tools" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex h-9 cursor-pointer items-center justify-between rounded-lg bg-components-input-bg-normal px-2.5",
						onClick: () => setCredentialsModalShow(true),
						children: [/* @__PURE__ */ jsx("div", {
							className: "system-xs-regular text-text-primary",
							children: t(`createTool.authMethod.types.${tempCredential.auth_type}`, { ns: "tools" })
						}), /* @__PURE__ */ jsx(Iv, { className: "h-4 w-4 text-text-secondary" })]
					})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "system-sm-medium py-2 text-text-primary",
						children: t("test.parametersValue", { ns: "tools" })
					}), /* @__PURE__ */ jsx("div", {
						className: "rounded-lg border border-divider-regular",
						children: /* @__PURE__ */ jsxs("table", {
							className: "system-xs-regular w-full font-normal text-text-secondary",
							children: [/* @__PURE__ */ jsx("thead", {
								className: "uppercase text-text-tertiary",
								children: /* @__PURE__ */ jsxs("tr", {
									className: "border-b border-divider-regular",
									children: [/* @__PURE__ */ jsx("th", {
										className: "p-2 pl-3 font-medium",
										children: t("test.parameters", { ns: "tools" })
									}), /* @__PURE__ */ jsx("th", {
										className: "p-2 pl-3 font-medium",
										children: t("test.value", { ns: "tools" })
									})]
								})
							}), /* @__PURE__ */ jsx("tbody", { children: parameters.map((item, index) => /* @__PURE__ */ jsxs("tr", {
								className: "border-b border-divider-regular last:border-0",
								children: [/* @__PURE__ */ jsx("td", {
									className: "py-2 pl-3 pr-2.5",
									children: item.label[language]
								}), /* @__PURE__ */ jsx("td", {
									className: "",
									children: /* @__PURE__ */ jsx(Input$1, {
										value: parametersValue[item.name] || "",
										onChange: (e) => setParametersValue({
											...parametersValue,
											[item.name]: e.target.value
										}),
										type: "text",
										className: "!hover:border-transparent !hover:bg-transparent !focus:border-transparent !focus:bg-transparent !border-transparent !bg-transparent"
									})
								})]
							}, index)) })]
						})
					})] })]
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "primary",
					className: " mt-4 h-10 w-full",
					loading: testing,
					disabled: testing,
					onClick: handleTest,
					children: t("test.title", { ns: "tools" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center space-x-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "system-xs-semibold text-text-tertiary",
							children: t("test.testResult", { ns: "tools" })
						}), /* @__PURE__ */ jsx("div", { className: "bg-[rgb(243, 244, 246)] h-px w-0 grow" })]
					}), /* @__PURE__ */ jsx("div", {
						className: "system-xs-regular mt-2 h-[200px] overflow-y-auto overflow-x-hidden rounded-lg bg-components-input-bg-normal px-3 py-2 text-text-secondary",
						children: result || /* @__PURE__ */ jsx("span", {
							className: "text-text-quaternary",
							children: t("test.testResultPlaceholder", { ns: "tools" })
						})
					})]
				})
			]
		})
	}), credentialsModalShow && /* @__PURE__ */ jsx(config_credentials_default, {
		positionCenter,
		credential: tempCredential,
		onChange: setTempCredential,
		onHide: () => setCredentialsModalShow(false)
	})] });
};
var test_api_default = React$1.memo(TestApi);
//#endregion
//#region app/components/tools/edit-custom-collection-modal/index.tsx
var EditCustomCollectionModal = ({ positionLeft, dialogClassName = "", payload, onHide, onAdd, onEdit, onRemove }) => {
	const { t } = useTranslation();
	const isAdd = !payload;
	const isEdit = !!payload;
	const [editFirst, setEditFirst] = useState(!isAdd);
	const [paramsSchemas, setParamsSchemas] = useState(payload?.tools || []);
	const [labels, setLabels] = useState(payload?.labels || []);
	const [customCollection, setCustomCollection, getCustomCollection] = useGetState(isAdd ? {
		provider: "",
		credentials: {
			auth_type: AuthType.none,
			api_key_header: "Authorization",
			api_key_header_prefix: AuthHeaderPrefix.basic
		},
		icon: {
			content: "🕵️",
			background: "#FEF7C3"
		},
		schema_type: "",
		schema: ""
	} : payload);
	const originalProvider = isEdit ? payload.provider : "";
	useEffect(() => {
		if (isEdit) {
			setCustomCollection(payload);
			setParamsSchemas(payload.tools || []);
			setLabels(payload.labels || []);
		}
	}, [isEdit, payload]);
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const emoji = customCollection.icon;
	const setEmoji = (emoji) => {
		setCustomCollection(produce(customCollection, (draft) => {
			draft.icon = emoji;
		}));
	};
	const schema = customCollection.schema;
	const debouncedSchema = useDebounce(schema, { wait: 500 });
	const setSchema = (schema) => {
		setCustomCollection(produce(customCollection, (draft) => {
			draft.schema = schema;
		}));
	};
	useEffect(() => {
		if (!debouncedSchema) return;
		if (isEdit && editFirst) {
			setEditFirst(false);
			return;
		}
		(async () => {
			try {
				const { parameters_schema, schema_type } = await parseParamsSchema(debouncedSchema);
				setCustomCollection(produce(getCustomCollection(), (draft) => {
					draft.schema_type = schema_type;
				}));
				setParamsSchemas(parameters_schema);
			} catch {
				setCustomCollection(produce(getCustomCollection(), (draft) => {
					draft.schema_type = "";
				}));
				setParamsSchemas([]);
			}
		})();
	}, [debouncedSchema]);
	const [credentialsModalShow, setCredentialsModalShow] = useState(false);
	const credential = customCollection.credentials;
	const setCredential = (credential) => {
		setCustomCollection(produce(customCollection, (draft) => {
			draft.credentials = credential;
		}));
	};
	const [currTool, setCurrTool] = useState(null);
	const [isShowTestApi, setIsShowTestApi] = useState(false);
	const handleLabelSelect = (value) => {
		setLabels(value);
	};
	const handleSave = () => {
		const postData = produce(customCollection, (draft) => {
			delete draft.tools;
			if (draft.credentials.auth_type === AuthType.none) {
				delete draft.credentials.api_key_header;
				delete draft.credentials.api_key_header_prefix;
				delete draft.credentials.api_key_value;
			}
			draft.labels = labels;
		});
		let errorMessage = "";
		if (!postData.provider) errorMessage = t("errorMsg.fieldRequired", {
			ns: "common",
			field: t("createTool.name", { ns: "tools" })
		});
		if (!postData.schema) errorMessage = t("errorMsg.fieldRequired", {
			ns: "common",
			field: t("createTool.schema", { ns: "tools" })
		});
		if (errorMessage) {
			Toast.notify({
				type: "error",
				message: errorMessage
			});
			return;
		}
		if (isAdd) {
			onAdd?.(postData);
			return;
		}
		onEdit?.({
			...postData,
			original_provider: originalProvider
		});
	};
	const getPath = (url) => {
		if (!url) return "";
		try {
			return decodeURI(new URL(url).pathname) || "";
		} catch {
			return url;
		}
	};
	return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(drawer_plus_default, {
		isShow: true,
		positionCenter: isAdd && !positionLeft,
		onHide,
		title: t(`createTool.${isAdd ? "title" : "editTitle"}`, { ns: "tools" }),
		dialogClassName,
		panelClassName: "mt-2 !w-[640px]",
		maxWidthClassName: "!max-w-[640px]",
		height: "calc(100vh - 16px)",
		headerClassName: "!border-b-divider-regular",
		body: /* @__PURE__ */ jsxs("div", {
			className: "flex h-full flex-col",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "h-0 grow space-y-4 overflow-y-auto px-6 py-3",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "system-sm-medium py-2 text-text-primary",
							children: [
								t("createTool.name", { ns: "tools" }),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "ml-1 text-red-500",
									children: "*"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ jsx(app_icon_default, {
								size: "large",
								onClick: () => {
									setShowEmojiPicker(true);
								},
								className: "cursor-pointer",
								icon: emoji.content,
								background: emoji.background
							}), /* @__PURE__ */ jsx(Input$1, {
								className: "h-10 grow",
								placeholder: t("createTool.toolNamePlaceHolder", { ns: "tools" }),
								value: customCollection.provider,
								onChange: (e) => {
									setCustomCollection(produce(customCollection, (draft) => {
										draft.provider = e.target.value;
									}));
								}
							})]
						})] }),
						/* @__PURE__ */ jsxs("div", {
							className: "select-none",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "system-sm-medium py-2 text-text-primary",
											children: [t("createTool.schema", { ns: "tools" }), /* @__PURE__ */ jsx("span", {
												className: "ml-1 text-red-500",
												children: "*"
											})]
										}),
										/* @__PURE__ */ jsx("div", { className: "mx-2 h-3 w-px bg-divider-regular" }),
										/* @__PURE__ */ jsxs("a", {
											href: "https://swagger.io/specification/",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "flex h-[18px] items-center space-x-1  text-text-accent",
											children: [/* @__PURE__ */ jsx("div", {
												className: "text-xs font-normal",
												children: t("createTool.viewSchemaSpec", { ns: "tools" })
											}), /* @__PURE__ */ jsx(Icon$23, { className: "h-3 w-3" })]
										})
									]
								}), /* @__PURE__ */ jsx(get_schema_default, { onChange: setSchema })]
							}), /* @__PURE__ */ jsx(Textarea, {
								className: "h-[240px] resize-none",
								value: schema,
								onChange: (e) => setSchema(e.target.value),
								placeholder: t("createTool.schemaPlaceHolder", { ns: "tools" })
							})]
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "system-sm-medium py-2 text-text-primary",
							children: t("createTool.availableTools.title", { ns: "tools" })
						}), /* @__PURE__ */ jsx("div", {
							className: "w-full overflow-x-auto rounded-lg border border-divider-regular",
							children: /* @__PURE__ */ jsxs("table", {
								className: "system-xs-regular w-full text-text-secondary",
								children: [/* @__PURE__ */ jsx("thead", {
									className: "uppercase text-text-tertiary",
									children: /* @__PURE__ */ jsxs("tr", {
										className: cn(paramsSchemas.length > 0 && "border-b", "border-divider-regular"),
										children: [
											/* @__PURE__ */ jsx("th", {
												className: "p-2 pl-3 font-medium",
												children: t("createTool.availableTools.name", { ns: "tools" })
											}),
											/* @__PURE__ */ jsx("th", {
												className: "w-[236px] p-2 pl-3 font-medium",
												children: t("createTool.availableTools.description", { ns: "tools" })
											}),
											/* @__PURE__ */ jsx("th", {
												className: "p-2 pl-3 font-medium",
												children: t("createTool.availableTools.method", { ns: "tools" })
											}),
											/* @__PURE__ */ jsx("th", {
												className: "p-2 pl-3 font-medium",
												children: t("createTool.availableTools.path", { ns: "tools" })
											}),
											/* @__PURE__ */ jsx("th", {
												className: "w-[54px] p-2 pl-3 font-medium",
												children: t("createTool.availableTools.action", { ns: "tools" })
											})
										]
									})
								}), /* @__PURE__ */ jsx("tbody", { children: paramsSchemas.map((item, index) => /* @__PURE__ */ jsxs("tr", {
									className: "border-b border-divider-regular last:border-0",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "p-2 pl-3",
											children: item.operation_id
										}),
										/* @__PURE__ */ jsx("td", {
											className: "w-[236px] p-2 pl-3",
											children: item.summary
										}),
										/* @__PURE__ */ jsx("td", {
											className: "p-2 pl-3",
											children: item.method
										}),
										/* @__PURE__ */ jsx("td", {
											className: "p-2 pl-3",
											children: getPath(item.server_url)
										}),
										/* @__PURE__ */ jsx("td", {
											className: "w-[62px] p-2 pl-3",
											children: /* @__PURE__ */ jsx(Button, {
												size: "small",
												onClick: () => {
													setCurrTool(item);
													setIsShowTestApi(true);
												},
												children: t("createTool.availableTools.test", { ns: "tools" })
											})
										})
									]
								}, index)) })]
							})
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "system-sm-medium py-2 text-text-primary",
							children: t("createTool.authMethod.title", { ns: "tools" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex h-9 cursor-pointer items-center justify-between rounded-lg bg-components-input-bg-normal px-2.5",
							onClick: () => setCredentialsModalShow(true),
							children: [/* @__PURE__ */ jsx("div", {
								className: "system-xs-regular text-text-primary",
								children: t(`createTool.authMethod.types.${credential.auth_type}`, { ns: "tools" })
							}), /* @__PURE__ */ jsx(Iv, { className: "h-4 w-4 text-text-secondary" })]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "system-sm-medium py-2 text-text-primary",
							children: t("createTool.toolInput.label", { ns: "tools" })
						}), /* @__PURE__ */ jsx(LabelSelector, {
							value: labels,
							onChange: handleLabelSelect
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "system-sm-medium py-2 text-text-primary",
							children: t("createTool.privacyPolicy", { ns: "tools" })
						}), /* @__PURE__ */ jsx(Input$1, {
							value: customCollection.privacy_policy,
							onChange: (e) => {
								setCustomCollection(produce(customCollection, (draft) => {
									draft.privacy_policy = e.target.value;
								}));
							},
							className: "h-10 grow",
							placeholder: t("createTool.privacyPolicyPlaceholder", { ns: "tools" }) || ""
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "system-sm-medium py-2 text-text-primary",
							children: t("createTool.customDisclaimer", { ns: "tools" })
						}), /* @__PURE__ */ jsx(Input$1, {
							value: customCollection.custom_disclaimer,
							onChange: (e) => {
								setCustomCollection(produce(customCollection, (draft) => {
									draft.custom_disclaimer = e.target.value;
								}));
							},
							className: "h-10 grow",
							placeholder: t("createTool.customDisclaimerPlaceholder", { ns: "tools" }) || ""
						})] })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: cn(isEdit ? "justify-between" : "justify-end", "mt-2 flex shrink-0 rounded-b-[10px] border-t border-divider-regular bg-background-section-burn px-6 py-4"),
					children: [isEdit && /* @__PURE__ */ jsx(Button, {
						variant: "warning",
						onClick: onRemove,
						children: t("operation.delete", { ns: "common" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex space-x-2 ",
						children: [/* @__PURE__ */ jsx(Button, {
							onClick: onHide,
							children: t("operation.cancel", { ns: "common" })
						}), /* @__PURE__ */ jsx(Button, {
							variant: "primary",
							onClick: handleSave,
							children: t("operation.save", { ns: "common" })
						})]
					})]
				}),
				showEmojiPicker && /* @__PURE__ */ jsx(EmojiPicker, {
					onSelect: (icon, icon_background) => {
						setEmoji({
							content: icon,
							background: icon_background
						});
						setShowEmojiPicker(false);
					},
					onClose: () => {
						setShowEmojiPicker(false);
					}
				}),
				credentialsModalShow && /* @__PURE__ */ jsx(config_credentials_default, {
					positionCenter: isAdd,
					credential,
					onChange: setCredential,
					onHide: () => setCredentialsModalShow(false)
				}),
				isShowTestApi && /* @__PURE__ */ jsx(test_api_default, {
					positionCenter: isAdd,
					tool: currTool,
					customCollection,
					onHide: () => setIsShowTestApi(false)
				})
			]
		}),
		isShowMask: true,
		clickOutsideNotOpen: true
	}) });
};
var edit_custom_collection_modal_default = React$1.memo(EditCustomCollectionModal);
//#endregion
//#region app/components/workflow/block-selector/tool-picker.tsx
var ToolPicker = ({ disabled, trigger, placement = "right-start", offset = 0, isShow, onShowChange, onSelect, onSelectMultiple, supportAddCustomTool, scope = "all", selectedTools, panelClassName }) => {
	const { t } = useTranslation();
	const [searchText, setSearchText] = useState("");
	const [tags, setTags] = useState([]);
	const { enable_marketplace } = useGlobalPublicStore((s) => s.systemFeatures);
	const { data: buildInTools } = useAllBuiltInTools();
	const { data: customTools } = useAllCustomTools();
	const invalidateCustomTools = useInvalidateAllCustomTools();
	const { data: workflowTools } = useAllWorkflowTools();
	const { data: mcpTools } = useAllMCPTools();
	const invalidateBuiltInTools = useInvalidateAllBuiltInTools();
	const invalidateWorkflowTools = useInvalidateAllWorkflowTools();
	const invalidateMcpTools = useInvalidateAllMCPTools();
	const { plugins: featuredPlugins = [], isLoading: isFeaturedLoading } = useFeaturedToolsRecommendations(enable_marketplace);
	const { builtinToolList, customToolList, workflowToolList } = useMemo(() => {
		if (scope === "plugins") return {
			builtinToolList: buildInTools,
			customToolList: [],
			workflowToolList: []
		};
		if (scope === "custom") return {
			builtinToolList: [],
			customToolList: customTools,
			workflowToolList: []
		};
		if (scope === "workflow") return {
			builtinToolList: [],
			customToolList: [],
			workflowToolList: workflowTools
		};
		return {
			builtinToolList: buildInTools,
			customToolList: customTools,
			workflowToolList: workflowTools
		};
	}, [
		scope,
		buildInTools,
		customTools,
		workflowTools
	]);
	const handleAddedCustomTool = invalidateCustomTools;
	const handleTriggerClick = () => {
		if (disabled) return;
		onShowChange(true);
	};
	const handleSelect = (_type, tool) => {
		onSelect(tool);
	};
	const handleSelectMultiple = (_type, tools) => {
		onSelectMultiple(tools);
	};
	const [isShowEditCollectionToolModal, { setFalse: hideEditCustomCollectionModal, setTrue: showEditCustomCollectionModal }] = useBoolean(false);
	const doCreateCustomToolCollection = async (data) => {
		await createCustomCollection(data);
		toast.success(t("api.actionSuccess", { ns: "common" }));
		hideEditCustomCollectionModal();
		handleAddedCustomTool();
	};
	if (isShowEditCollectionToolModal) return /* @__PURE__ */ jsx(edit_custom_collection_modal_default, {
		dialogClassName: "bg-background-overlay",
		payload: null,
		onHide: hideEditCustomCollectionModal,
		onAdd: doCreateCustomToolCollection
	});
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		placement,
		offset,
		open: isShow,
		onOpenChange: onShowChange,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: handleTriggerClick,
			children: trigger
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[1002]",
			children: /* @__PURE__ */ jsxs("div", {
				className: cn("relative min-h-20 rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg backdrop-blur-sm", panelClassName),
				children: [/* @__PURE__ */ jsx("div", {
					className: "p-2 pb-1",
					children: /* @__PURE__ */ jsx(SearchBox, {
						search: searchText,
						onSearchChange: setSearchText,
						tags,
						onTagsChange: setTags,
						placeholder: t("searchTools", { ns: "plugin" }),
						supportAddCustomTool,
						onAddedCustomTool: handleAddedCustomTool,
						onShowAddCustomCollectionModal: showEditCustomCollectionModal,
						inputClassName: "grow"
					})
				}), /* @__PURE__ */ jsx(AllTools, {
					className: "mt-1",
					toolContentClassName: "max-w-[100%]",
					tags,
					searchText,
					onSelect: handleSelect,
					onSelectMultiple: handleSelectMultiple,
					buildInTools: builtinToolList || [],
					customTools: customToolList || [],
					workflowTools: workflowToolList || [],
					mcpTools: mcpTools || [],
					selectedTools,
					onTagsChange: setTags,
					featuredPlugins,
					featuredLoading: isFeaturedLoading,
					showFeatured: scope === "all" && enable_marketplace,
					onFeaturedInstallSuccess: async () => {
						invalidateBuiltInTools();
						invalidateCustomTools();
						invalidateWorkflowTools();
						invalidateMcpTools();
					}
				})]
			})
		})]
	});
};
var tool_picker_default = React$1.memo(ToolPicker);
//#endregion
//#region app/components/plugins/plugin-detail-panel/tool-selector/components/tool-trigger.tsx
var ToolTrigger = ({ open, provider, value, isConfigure }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("group flex cursor-pointer items-center rounded-lg bg-components-input-bg-normal p-2 pl-3 hover:bg-state-base-hover-alt", open && "bg-state-base-hover-alt", value?.provider_name && "py-1.5 pl-1.5"),
		children: [
			value?.provider_name && provider && /* @__PURE__ */ jsx("div", {
				className: "mr-1 shrink-0 rounded-lg border border-components-panel-border bg-components-panel-bg p-px",
				children: /* @__PURE__ */ jsx(block_icon_default, {
					className: "!h-4 !w-4",
					type: BlockEnum.Tool,
					toolIcon: provider.icon
				})
			}),
			value?.tool_name && /* @__PURE__ */ jsx("div", {
				className: "system-sm-medium grow text-components-input-text-filled",
				children: value.tool_name
			}),
			!value?.provider_name && /* @__PURE__ */ jsx("div", {
				className: "system-sm-regular grow text-components-input-text-placeholder",
				children: !isConfigure ? t("detailPanel.toolSelector.placeholder", { ns: "plugin" }) : t("detailPanel.configureTool", { ns: "plugin" })
			}),
			isConfigure && /* @__PURE__ */ jsx(AD, { className: cn("ml-0.5 h-4 w-4 shrink-0 text-text-quaternary group-hover:text-text-secondary", open && "text-text-secondary") }),
			!isConfigure && /* @__PURE__ */ jsx(f1, { className: cn("ml-0.5 h-4 w-4 shrink-0 text-text-quaternary group-hover:text-text-secondary", open && "text-text-secondary") })
		]
	});
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/tool-selector/components/tool-base-form.tsx
var ToolBaseForm = ({ value, currentProvider, offset = 4, scope, selectedTools, isShowChooseTool, panelShowState, hasTrigger, onShowChange, onPanelShowStateChange, onSelectTool, onSelectMultipleTool, onDescriptionChange }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-3 px-4 py-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "system-sm-semibold flex h-6 items-center justify-between text-text-secondary",
				children: [t("detailPanel.toolSelector.toolLabel", { ns: "plugin" }), currentProvider?.plugin_unique_identifier && /* @__PURE__ */ jsx(ReadmeEntrance, {
					pluginDetail: currentProvider,
					showShortTip: true,
					className: "pb-0"
				})]
			}), /* @__PURE__ */ jsx(tool_picker_default, {
				placement: "bottom",
				offset,
				trigger: /* @__PURE__ */ jsx(ToolTrigger, {
					open: panelShowState || isShowChooseTool,
					value,
					provider: currentProvider
				}),
				isShow: panelShowState || isShowChooseTool,
				onShowChange: hasTrigger ? onPanelShowStateChange || (() => {}) : onShowChange,
				disabled: false,
				supportAddCustomTool: true,
				onSelect: onSelectTool,
				onSelectMultiple: onSelectMultipleTool,
				scope,
				selectedTools
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ jsx("div", {
				className: "system-sm-semibold flex h-6 items-center text-text-secondary",
				children: t("detailPanel.toolSelector.descriptionLabel", { ns: "plugin" })
			}), /* @__PURE__ */ jsx(Textarea, {
				className: "resize-none",
				placeholder: t("detailPanel.toolSelector.descriptionPlaceholder", { ns: "plugin" }),
				value: value?.extra?.description || "",
				onChange: onDescriptionChange,
				disabled: !value?.provider_name
			})]
		})]
	});
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/tool-selector/components/tool-credentials-form.tsx
var ToolCredentialForm = ({ collection, onCancel, onSaved }) => {
	const getValueFromI18nObject = useRenderI18nObject();
	const { t } = useTranslation();
	const [credentialSchema, setCredentialSchema] = useState(null);
	const { name: collectionName } = collection;
	const [tempCredential, setTempCredential] = React$1.useState({});
	useEffect(() => {
		fetchBuiltInToolCredentialSchema(collectionName).then(async (res) => {
			const toolCredentialSchemas = toolCredentialToFormSchemas(res);
			const credentialValue = await fetchBuiltInToolCredential(collectionName);
			setTempCredential(credentialValue);
			const defaultCredentials = addDefaultValue(credentialValue, toolCredentialSchemas);
			setCredentialSchema(toolCredentialSchemas);
			setTempCredential(defaultCredentials);
		});
	}, []);
	const handleSave = () => {
		if (!credentialSchema) return;
		for (const field of credentialSchema) if (field.required && !tempCredential[field.name]) {
			toast.error(t("errorMsg.fieldRequired", {
				ns: "common",
				field: getValueFromI18nObject(field.label)
			}));
			return;
		}
		onSaved(tempCredential);
	};
	return /* @__PURE__ */ jsx(Fragment$1, { children: !credentialSchema ? /* @__PURE__ */ jsx("div", {
		className: "pt-3",
		children: /* @__PURE__ */ jsx(Loading, { type: "app" })
	}) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
		className: "max-h-[464px] overflow-y-auto px-4",
		children: /* @__PURE__ */ jsx(Form, {
			value: tempCredential,
			onChange: (v) => {
				setTempCredential(v);
			},
			formSchemas: credentialSchema,
			isEditMode: true,
			showOnVariableMap: {},
			validating: false,
			inputClassName: "bg-components-input-bg-normal hover:bg-components-input-bg-hover",
			fieldMoreInfo: (item) => item.url ? /* @__PURE__ */ jsxs("a", {
				href: item.url,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "inline-flex items-center text-xs text-text-accent",
				children: [t("howToGet", { ns: "tools" }), /* @__PURE__ */ jsx(o2, { className: "ml-1 h-3 w-3" })]
			}) : null
		})
	}), /* @__PURE__ */ jsx("div", {
		className: cn("mt-1 flex justify-end px-4"),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex space-x-2",
			children: [/* @__PURE__ */ jsx(Button, {
				onClick: onCancel,
				children: t("operation.cancel", { ns: "common" })
			}), /* @__PURE__ */ jsx(Button, {
				variant: "primary",
				onClick: handleSave,
				children: t("operation.save", { ns: "common" })
			})]
		})
	})] }) });
};
React$1.memo(ToolCredentialForm);
//#endregion
//#region app/components/base/tooltip/content.tsx
var ToolTipContent = ({ title, action, children }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "w-[180px]",
		"data-testid": "tooltip-content",
		children: [
			!!title && /* @__PURE__ */ jsx("div", {
				className: "mb-1.5 font-semibold text-text-secondary",
				"data-testid": "tooltip-content-title",
				children: title
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mb-1.5 text-text-tertiary",
				"data-testid": "tooltip-content-body",
				children
			}),
			!!action && /* @__PURE__ */ jsx("div", {
				className: "cursor-pointer text-text-accent",
				"data-testid": "tooltip-content-action",
				children: action
			})
		]
	});
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/tool-selector/components/tool-item.tsx
var ToolItem = ({ open, icon, isMCPTool, providerShowName, providerName, toolLabel, showSwitch, switchValue, onSwitchChange, onDelete, noAuth, uninstalled, installInfo, onInstall, isError, errorTip, versionMismatch, authRemoved }) => {
	const { t } = useTranslation();
	const { allowed: isMCPToolAllowed } = useMCPToolAvailability();
	const providerNameText = isMCPTool ? providerShowName : providerName?.split("/").pop();
	const isTransparent = uninstalled || versionMismatch || isError;
	const [isDeleting, setIsDeleting] = useState(false);
	const isShowCanNotChooseMCPTip = isMCPTool && !isMCPToolAllowed;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("group flex cursor-default items-center gap-1 rounded-lg border-[0.5px] border-components-panel-border-subtle bg-components-panel-on-panel-item-bg p-1.5 pr-2 shadow-xs hover:bg-components-panel-on-panel-item-bg-hover hover:shadow-sm", open && "bg-components-panel-on-panel-item-bg-hover shadow-sm", isDeleting && "border-state-destructive-border shadow-xs hover:bg-state-destructive-hover"),
		children: [
			icon && /* @__PURE__ */ jsxs("div", {
				className: cn("shrink-0", isTransparent && "opacity-50", isShowCanNotChooseMCPTip && "opacity-30"),
				children: [typeof icon === "string" && /* @__PURE__ */ jsx("div", {
					className: "h-7 w-7 rounded-lg border-[0.5px] border-components-panel-border-subtle bg-background-default-dodge bg-cover bg-center",
					style: { backgroundImage: `url(${icon})` }
				}), typeof icon !== "string" && /* @__PURE__ */ jsx(app_icon_default, {
					className: "h-7 w-7 rounded-lg border-[0.5px] border-components-panel-border-subtle bg-background-default-dodge",
					size: "xs",
					icon: icon?.content,
					background: icon?.background
				})]
			}),
			!icon && /* @__PURE__ */ jsx("div", {
				className: cn("flex h-7 w-7 items-center justify-center rounded-md border-[0.5px] border-components-panel-border-subtle bg-background-default-subtle", isTransparent && "opacity-50", isShowCanNotChooseMCPTip && "opacity-30"),
				children: /* @__PURE__ */ jsx("div", {
					className: "flex h-5 w-5 items-center justify-center opacity-35",
					children: /* @__PURE__ */ jsx(Icon$21, { className: "text-text-tertiary" })
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: cn("grow truncate pl-0.5", isTransparent && "opacity-50", isShowCanNotChooseMCPTip && "opacity-30"),
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-text-tertiary system-2xs-medium-uppercase",
					children: providerNameText
				}), /* @__PURE__ */ jsx("div", {
					className: "text-text-secondary system-xs-medium",
					children: toolLabel
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "hidden items-center gap-1 group-hover:flex",
				children: [!noAuth && !isError && !uninstalled && !versionMismatch && !isShowCanNotChooseMCPTip && /* @__PURE__ */ jsx(ActionButton, { children: /* @__PURE__ */ jsx(AD, { className: "h-4 w-4" }) }), /* @__PURE__ */ jsx("div", {
					className: "cursor-pointer rounded-md p-1 text-text-tertiary hover:text-text-destructive",
					onClick: (e) => {
						e.stopPropagation();
						onDelete?.();
					},
					onMouseOver: () => setIsDeleting(true),
					onMouseLeave: () => setIsDeleting(false),
					children: /* @__PURE__ */ jsx(M6, { className: "h-4 w-4" })
				})]
			}),
			!isError && !uninstalled && !noAuth && !versionMismatch && !isShowCanNotChooseMCPTip && showSwitch && /* @__PURE__ */ jsx("div", {
				className: "mr-1",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ jsx(switch_default, {
					size: "md",
					value: switchValue ?? false,
					onChange: onSwitchChange
				})
			}),
			isShowCanNotChooseMCPTip && /* @__PURE__ */ jsx(mcp_tool_not_support_tooltip_default, {}),
			!isError && !uninstalled && !versionMismatch && noAuth && /* @__PURE__ */ jsxs(Button, {
				variant: "secondary",
				size: "small",
				children: [t("notAuthorized", { ns: "tools" }), /* @__PURE__ */ jsx(Indicator, {
					className: "ml-2",
					color: "orange"
				})]
			}),
			!isError && !uninstalled && !versionMismatch && authRemoved && /* @__PURE__ */ jsxs(Button, {
				variant: "secondary",
				size: "small",
				children: [t("auth.authRemoved", { ns: "plugin" }), /* @__PURE__ */ jsx(Indicator, {
					className: "ml-2",
					color: "red"
				})]
			}),
			!isError && !uninstalled && versionMismatch && installInfo && /* @__PURE__ */ jsx("div", {
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ jsx(SwitchPluginVersion, {
					className: "-mt-1",
					uniqueIdentifier: installInfo,
					tooltip: /* @__PURE__ */ jsx(ToolTipContent, {
						title: t("detailPanel.toolSelector.unsupportedTitle", { ns: "plugin" }),
						children: `${t("detailPanel.toolSelector.unsupportedContent", { ns: "plugin" })} ${t("detailPanel.toolSelector.unsupportedContent2", { ns: "plugin" })}`
					}),
					onChange: () => {
						onInstall?.();
					}
				})
			}),
			!isError && uninstalled && installInfo && /* @__PURE__ */ jsx(InstallPluginButton, {
				onClick: (e) => e.stopPropagation(),
				size: "small",
				uniqueIdentifier: installInfo,
				onSuccess: () => {
					onInstall?.();
				}
			}),
			isError && /* @__PURE__ */ jsx(tooltip_default, {
				popupContent: errorTip,
				children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ft$1, { className: "h-4 w-4 text-text-destructive" }) })
			})
		]
	});
};
//#endregion
//#region app/components/base/tab-slider-plain/index.tsx
var Item$1 = ({ className, isActive, onClick, option, smallItem }) => {
	return /* @__PURE__ */ jsxs("div", {
		"data-testid": `tab-slider-item-${option.value}`,
		className: cn("relative pb-2.5", !isActive && "cursor-pointer", smallItem ? "system-sm-semibold-uppercase" : "system-xl-semibold", className),
		onClick: () => !isActive && onClick(option.value),
		children: [/* @__PURE__ */ jsx("div", {
			"data-testid": "tab-slider-item-text",
			className: cn(isActive ? "text-text-primary" : "text-text-tertiary"),
			children: option.text
		}), isActive && /* @__PURE__ */ jsx("div", {
			"data-testid": "tab-active-indicator",
			className: "absolute bottom-0 left-0 right-0 h-0.5 bg-util-colors-blue-brand-blue-brand-600"
		})]
	}, option.value);
};
var TabSlider = ({ className, value, onChange, options, noBorderBottom, itemClassName, smallItem }) => {
	return /* @__PURE__ */ jsx("div", {
		"data-testid": "tab-slider",
		className: cn(className, !noBorderBottom && "border-b border-divider-subtle", "flex space-x-6"),
		children: options.map((option) => /* @__PURE__ */ jsx(Item$1, {
			isActive: option.value === value,
			option,
			onClick: onChange,
			className: itemClassName,
			smallItem
		}, option.value))
	});
};
var tab_slider_plain_default = React$1.memo(TabSlider);
//#endregion
//#region app/components/workflow/nodes/_base/components/form-input-item.helpers.ts
var optionMatchesValue = (values, showOnItem) => values[showOnItem.variable]?.value === showOnItem.value || values[showOnItem.variable] === showOnItem.value;
var getOptionLabel = (option, language) => {
	if (typeof option.label === "string") return option.label;
	return option.label[language] || option.label.en_US || option.value;
};
var getFormInputState = (schema, varInput) => {
	const { default: defaultValue, multiple = false, options = [], placeholder, scope, type, variable, _type } = schema;
	const isString = type === FormTypeEnum.textInput || type === FormTypeEnum.secretInput;
	const isNumber = type === FormTypeEnum.textNumber;
	const isObject = type === FormTypeEnum.object;
	const isArray = type === FormTypeEnum.array;
	const isShowJSONEditor = isObject || isArray;
	const isFile = type === FormTypeEnum.file || type === FormTypeEnum.files;
	const isFiles = type === FormTypeEnum.files;
	const isBoolean = _type === FormTypeEnum.boolean;
	const isCheckbox = _type === FormTypeEnum.checkbox;
	const isSelect = type === FormTypeEnum.select;
	const isDynamicSelect = type === FormTypeEnum.dynamicSelect;
	const isAppSelector = type === FormTypeEnum.appSelector;
	const isModelSelector = type === FormTypeEnum.modelSelector;
	const showTypeSwitch = isNumber || isBoolean || isObject || isArray || isSelect;
	const isConstant = varInput?.type === VarKindType.constant || !varInput?.type;
	const showVariableSelector = isFile || varInput?.type === VarKindType.variable;
	return {
		defaultValue,
		isAppSelector,
		isArray,
		isBoolean,
		isCheckbox,
		isConstant,
		isDynamicSelect,
		isFile,
		isFiles,
		isModelSelector,
		isMultipleSelect: multiple && (isSelect || isDynamicSelect),
		isNumber,
		isObject,
		isSelect,
		isShowJSONEditor,
		isString,
		options,
		placeholder,
		scope,
		showTypeSwitch,
		showVariableSelector,
		variable
	};
};
var getTargetVarType = (state) => {
	if (state.isString) return VarType.string;
	if (state.isNumber) return VarType.number;
	if (state.isFile) return state.isFiles ? VarType.arrayFile : VarType.file;
	if (state.isSelect) return VarType.string;
	if (state.isBoolean) return VarType.boolean;
	if (state.isObject) return VarType.object;
	if (state.isArray) return VarType.arrayObject;
	return VarType.string;
};
var getFilterVar = (state) => {
	if (state.isNumber) return (varPayload) => varPayload.type === VarType.number;
	if (state.isString) return (varPayload) => [
		VarType.string,
		VarType.number,
		VarType.secret
	].includes(varPayload.type);
	if (state.isFile) return (varPayload) => [VarType.file, VarType.arrayFile].includes(varPayload.type);
	if (state.isBoolean) return (varPayload) => varPayload.type === VarType.boolean;
	if (state.isObject) return (varPayload) => varPayload.type === VarType.object;
	if (state.isArray) return (varPayload) => [
		VarType.array,
		VarType.arrayString,
		VarType.arrayNumber,
		VarType.arrayObject
	].includes(varPayload.type);
};
var getVarKindType = (state) => {
	if (state.isFile) return VarKindType.variable;
	if (state.isSelect || state.isDynamicSelect || state.isBoolean || state.isNumber || state.isArray || state.isObject) return VarKindType.constant;
	if (state.isString) return VarKindType.mixed;
};
var filterVisibleOptions = (options, values) => options.filter((option) => {
	if (option.show_on?.length) return option.show_on.every((showOnItem) => optionMatchesValue(values, showOnItem));
	return true;
});
var mapSelectItems = (options, language) => options.map((option) => ({
	icon: option.icon,
	name: getOptionLabel(option, language),
	value: option.value
}));
var hasOptionIcon = (options) => options.some((option) => !!option.icon);
var getSelectedLabels = (selectedValues, options, language) => {
	if (!selectedValues?.length) return "";
	const selectedOptions = options.filter((option) => selectedValues.includes(option.value));
	if (selectedOptions.length <= 2) return selectedOptions.map((option) => getOptionLabel(option, language)).join(", ");
	return `${selectedOptions.length} selected`;
};
var getCheckboxListOptions = (options, language) => options.map((option) => ({
	label: getOptionLabel(option, language),
	value: option.value
}));
var getCheckboxListValue = (currentValue, defaultValue, availableOptions) => {
	let current = [];
	if (Array.isArray(currentValue)) current = currentValue;
	else if (typeof currentValue === "string") current = [currentValue];
	else if (Array.isArray(defaultValue)) current = defaultValue;
	const allowedValues = new Set(availableOptions.map((option) => option.value));
	return current.filter((item) => allowedValues.has(item));
};
var getNumberInputValue = (currentValue) => {
	if (typeof currentValue === "number") return Number.isNaN(currentValue) ? "" : currentValue;
	if (typeof currentValue === "string") return currentValue;
	return "";
};
var normalizeVariableSelectorValue = (value) => value || "";
//#endregion
//#region app/components/workflow/nodes/_base/components/form-input-item.sections.tsx
var LoadingIndicator = () => /* @__PURE__ */ jsx(Um, { className: "h-3.5 w-3.5 animate-spin text-text-secondary" });
var ToggleIndicator = () => /* @__PURE__ */ jsx(ForwardRef, {
	className: "h-4 w-4 text-text-quaternary group-hover/simple-select:text-text-secondary",
	"aria-hidden": "true"
});
var SelectedMark = () => /* @__PURE__ */ jsx("span", {
	className: "absolute inset-y-0 right-0 flex items-center pr-2 text-text-accent",
	children: /* @__PURE__ */ jsx(s7, {
		className: "h-4 w-4",
		"aria-hidden": "true"
	})
});
var MultiSelectField = ({ disabled, isLoading = false, items, onChange, placeholder, selectedLabel, value }) => {
	const textClassName = cn("block truncate text-left system-sm-regular", isLoading ? "text-components-input-text-placeholder" : value.length > 0 ? "text-components-input-text-filled" : "text-components-input-text-placeholder");
	const renderLabel = () => {
		if (isLoading) return "Loading...";
		return selectedLabel || placeholder || "Select options";
	};
	return /* @__PURE__ */ jsx(Mo, {
		multiple: true,
		value,
		onChange,
		disabled,
		children: /* @__PURE__ */ jsxs("div", {
			className: "group/simple-select relative h-8 grow",
			children: [/* @__PURE__ */ jsxs(Mt, {
				className: "flex h-full w-full cursor-pointer items-center rounded-lg border-0 bg-components-input-bg-normal pl-3 pr-10 focus-visible:bg-state-base-hover-alt focus-visible:outline-none group-hover/simple-select:bg-state-base-hover-alt sm:text-sm sm:leading-6",
				children: [/* @__PURE__ */ jsx("span", {
					className: textClassName,
					children: renderLabel()
				}), /* @__PURE__ */ jsx("span", {
					className: "absolute inset-y-0 right-0 flex items-center pr-2",
					children: isLoading ? /* @__PURE__ */ jsx(LoadingIndicator, {}) : /* @__PURE__ */ jsx(ToggleIndicator, {})
				})]
			}), /* @__PURE__ */ jsx(Bt, {
				className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur px-1 py-1 text-base shadow-lg backdrop-blur-sm focus:outline-none sm:text-sm",
				children: items.map((item) => /* @__PURE__ */ jsx(It, {
					value: item.value,
					className: ({ focus }) => cn("relative cursor-pointer select-none rounded-lg py-2 pl-3 pr-9 text-text-secondary hover:bg-state-base-hover", focus && "bg-state-base-hover"),
					children: ({ selected }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center",
						children: [item.icon && /* @__PURE__ */ jsx("img", {
							src: item.icon,
							alt: "",
							className: "mr-2 h-4 w-4"
						}), /* @__PURE__ */ jsx("span", {
							className: cn("block truncate", selected && "font-normal"),
							children: item.name
						})]
					}), selected && /* @__PURE__ */ jsx(SelectedMark, {})] })
				}, item.value))
			})]
		})
	});
};
var JsonEditorField = ({ onChange, placeholder, value }) => {
	return /* @__PURE__ */ jsx("div", {
		className: "mt-1 w-full",
		children: /* @__PURE__ */ jsx(code_editor_default, {
			title: "JSON",
			value,
			isExpand: true,
			isInNode: true,
			language: CodeLanguage.json,
			onChange,
			className: "w-full",
			placeholder
		})
	});
};
//#endregion
//#region app/components/workflow/nodes/_base/components/form-input-item.tsx
var FormInputItem = ({ readOnly, nodeId, schema, value, onChange, inPanel, currentTool, currentProvider, showManageInputField, onManageInputField, extraParams, providerType, disableVariableInsertion = false }) => {
	const language = useLanguage();
	const [toolsOptions, setToolsOptions] = useState(null);
	const [isLoadingToolsOptions, setIsLoadingToolsOptions] = useState(false);
	const formState = getFormInputState(schema, value[schema.variable]);
	const { defaultValue, isAppSelector, isBoolean, isCheckbox, isConstant, isDynamicSelect, isModelSelector, isMultipleSelect, isNumber, isSelect, isShowJSONEditor, isString, options, placeholder, scope, showTypeSwitch, showVariableSelector, variable } = formState;
	const varInput = value[variable];
	const { availableVars, availableNodesWithParent } = useAvailableVarList(nodeId, {
		onlyLeafNodeVar: false,
		filterVar: (varPayload) => {
			return [
				VarType.string,
				VarType.number,
				VarType.secret
			].includes(varPayload.type);
		}
	});
	const { mutateAsync: fetchDynamicOptions } = useFetchDynamicOptions(currentProvider?.plugin_id || "", currentProvider?.name || "", currentTool?.name || "", variable || "", providerType, extraParams);
	const { data: triggerDynamicOptions, isLoading: isTriggerOptionsLoading } = useTriggerPluginDynamicOptions({
		plugin_id: currentProvider?.plugin_id || "",
		provider: currentProvider?.name || "",
		action: currentTool?.name || "",
		parameter: variable || "",
		extra: extraParams,
		credential_id: currentProvider?.credential_id || ""
	}, isDynamicSelect && providerType === PluginCategoryEnum.trigger && !!currentTool && !!currentProvider);
	const triggerOptions = triggerDynamicOptions?.options;
	const dynamicOptions = providerType === PluginCategoryEnum.trigger ? triggerOptions ?? toolsOptions : toolsOptions;
	const isLoadingOptions = providerType === PluginCategoryEnum.trigger ? isTriggerOptionsLoading || isLoadingToolsOptions : isLoadingToolsOptions;
	useEffect(() => {
		const fetchPanelDynamicOptions = async () => {
			if (isDynamicSelect && currentTool && currentProvider && (providerType === PluginCategoryEnum.tool || providerType === PluginCategoryEnum.trigger)) {
				setIsLoadingToolsOptions(true);
				try {
					setToolsOptions((await fetchDynamicOptions())?.options || []);
				} catch (error) {
					console.error("Failed to fetch dynamic options:", error);
					setToolsOptions([]);
				} finally {
					setIsLoadingToolsOptions(false);
				}
			}
		};
		fetchPanelDynamicOptions();
	}, [
		isDynamicSelect,
		currentTool?.name,
		currentProvider?.name,
		variable,
		extraParams,
		providerType,
		fetchDynamicOptions
	]);
	const handleTypeChange = (newType) => {
		if (newType === VarKindType.variable) onChange({
			...value,
			[variable]: {
				...varInput,
				type: VarKindType.variable,
				value: ""
			}
		});
		else onChange({
			...value,
			[variable]: {
				...varInput,
				type: VarKindType.constant,
				value: defaultValue
			}
		});
	};
	const handleValueChange = (newValue) => {
		onChange({
			...value,
			[variable]: {
				...varInput,
				type: getVarKindType(formState),
				value: isNumber ? Number.parseFloat(newValue) : newValue
			}
		});
	};
	const handleAppOrModelSelect = (newValue) => {
		onChange({
			...value,
			[variable]: {
				...varInput,
				value: newValue
			}
		});
	};
	const handleVariableSelectorChange = (newValue, variable) => {
		onChange({
			...value,
			[variable]: {
				...varInput,
				type: VarKindType.variable,
				value: normalizeVariableSelectorValue(newValue)
			}
		});
	};
	const availableCheckboxOptions = useMemo(() => filterVisibleOptions(options, value), [options, value]);
	const checkboxListOptions = useMemo(() => getCheckboxListOptions(availableCheckboxOptions, language), [availableCheckboxOptions, language]);
	const checkboxListValue = useMemo(() => getCheckboxListValue(varInput?.value, defaultValue, availableCheckboxOptions), [
		availableCheckboxOptions,
		defaultValue,
		varInput?.value
	]);
	const visibleSelectOptions = useMemo(() => filterVisibleOptions(options, value), [options, value]);
	const visibleDynamicOptions = useMemo(() => filterVisibleOptions(dynamicOptions || options || [], value), [
		dynamicOptions,
		options,
		value
	]);
	const staticSelectItems = useMemo(() => mapSelectItems(visibleSelectOptions, language), [language, visibleSelectOptions]);
	const dynamicSelectItems = useMemo(() => mapSelectItems(visibleDynamicOptions, language), [language, visibleDynamicOptions]);
	const selectedLabels = useMemo(() => getSelectedLabels(varInput?.value, isDynamicSelect ? visibleDynamicOptions : visibleSelectOptions, language), [
		isDynamicSelect,
		language,
		varInput?.value,
		visibleDynamicOptions,
		visibleSelectOptions
	]);
	const handleCheckboxListChange = (selected) => {
		onChange({
			...value,
			[variable]: {
				...varInput,
				type: VarKindType.constant,
				value: selected
			}
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("gap-1", !(isShowJSONEditor && isConstant) && "flex"),
		children: [
			showTypeSwitch && /* @__PURE__ */ jsx(FormInputTypeSwitch, {
				value: varInput?.type || VarKindType.constant,
				onChange: handleTypeChange
			}),
			isString && /* @__PURE__ */ jsx(mixed_variable_text_input_default, {
				readOnly,
				value: varInput?.value || "",
				onChange: handleValueChange,
				nodesOutputVars: availableVars,
				availableNodes: availableNodesWithParent,
				showManageInputField,
				onManageInputField,
				disableVariableInsertion
			}),
			isNumber && isConstant && /* @__PURE__ */ jsx(Input$1, {
				className: "h-8 grow",
				type: "number",
				value: getNumberInputValue(varInput?.value),
				onChange: (e) => handleValueChange(e.target.value),
				placeholder: placeholder?.[language] || placeholder?.en_US
			}),
			isCheckbox && isConstant && /* @__PURE__ */ jsx(CheckboxList, {
				title: schema.label?.[language] || schema.label?.en_US || variable,
				value: checkboxListValue,
				onChange: handleCheckboxListChange,
				options: checkboxListOptions,
				disabled: readOnly,
				maxHeight: "200px"
			}),
			isBoolean && isConstant && /* @__PURE__ */ jsx(FormInputBoolean, {
				value: varInput?.value,
				onChange: handleValueChange
			}),
			isSelect && isConstant && !isMultipleSelect && /* @__PURE__ */ jsx(SimpleSelect, {
				wrapperClassName: "h-8 grow",
				disabled: readOnly,
				defaultValue: varInput?.value,
				items: staticSelectItems,
				onSelect: (item) => handleValueChange(item.value),
				placeholder: placeholder?.[language] || placeholder?.en_US,
				renderOption: hasOptionIcon(visibleSelectOptions) ? ({ item }) => /* @__PURE__ */ jsxs("div", {
					className: "flex items-center",
					children: [item.icon && /* @__PURE__ */ jsx("img", {
						src: item.icon,
						alt: "",
						className: "mr-2 h-4 w-4"
					}), /* @__PURE__ */ jsx("span", { children: item.name })]
				}) : void 0
			}),
			isSelect && isConstant && isMultipleSelect && /* @__PURE__ */ jsx(MultiSelectField, {
				disabled: readOnly,
				value: varInput?.value || [],
				items: staticSelectItems,
				onChange: handleValueChange,
				placeholder: placeholder?.[language] || placeholder?.en_US,
				selectedLabel: selectedLabels
			}),
			isDynamicSelect && !isMultipleSelect && /* @__PURE__ */ jsx(SimpleSelect, {
				wrapperClassName: "h-8 grow",
				disabled: readOnly || isLoadingOptions,
				defaultValue: varInput?.value,
				items: dynamicSelectItems,
				onSelect: (item) => handleValueChange(item.value),
				placeholder: isLoadingOptions ? "Loading..." : placeholder?.[language] || placeholder?.en_US,
				renderOption: ({ item }) => /* @__PURE__ */ jsxs("div", {
					className: "flex items-center",
					children: [item.icon && /* @__PURE__ */ jsx("img", {
						src: item.icon,
						alt: "",
						className: "mr-2 h-4 w-4"
					}), /* @__PURE__ */ jsx("span", { children: item.name })]
				})
			}),
			isDynamicSelect && isMultipleSelect && /* @__PURE__ */ jsx(MultiSelectField, {
				disabled: readOnly || isLoadingOptions,
				isLoading: isLoadingOptions,
				value: varInput?.value || [],
				items: dynamicSelectItems,
				onChange: handleValueChange,
				placeholder: placeholder?.[language] || placeholder?.en_US,
				selectedLabel: selectedLabels
			}),
			isShowJSONEditor && isConstant && /* @__PURE__ */ jsx(JsonEditorField, {
				value: varInput?.value || "",
				onChange: handleValueChange,
				placeholder: /* @__PURE__ */ jsx("div", {
					className: "whitespace-pre",
					children: placeholder?.[language] || placeholder?.en_US
				})
			}),
			isAppSelector && /* @__PURE__ */ jsx(app_selector_default, {
				disabled: readOnly,
				scope: scope || "all",
				value: varInput?.value,
				onSelect: handleAppOrModelSelect
			}),
			isModelSelector && isConstant && /* @__PURE__ */ jsx(ModelParameterModal, {
				popupClassName: "!w-[387px]",
				isAdvancedMode: true,
				isInWorkflow: true,
				value: varInput?.value,
				setModel: handleAppOrModelSelect,
				readonly: readOnly,
				scope
			}),
			showVariableSelector && /* @__PURE__ */ jsx(var_reference_picker_default, {
				zIndex: inPanel ? 1e3 : void 0,
				className: "h-8 grow",
				readonly: readOnly,
				isShowNodeName: true,
				nodeId,
				value: varInput?.value || [],
				onChange: (value) => handleVariableSelectorChange(value, variable),
				filterVar: getFilterVar(formState),
				schema,
				valueTypePlaceHolder: getTargetVarType(formState),
				currentTool,
				currentProvider,
				isFilterFileVar: isBoolean
			})
		]
	});
};
//#endregion
//#region app/components/workflow/nodes/tool/components/tool-form/item.tsx
var ToolFormItem = ({ readOnly, nodeId, schema, value, onChange, inPanel, currentTool, currentProvider, showManageInputField, onManageInputField, extraParams, providerType = "tool" }) => {
	const language = useLanguage();
	const { name, label, type, required, tooltip, input_schema } = schema;
	const showSchemaButton = type === FormTypeEnum.object || type === FormTypeEnum.array;
	const showDescription = type === FormTypeEnum.textInput || type === FormTypeEnum.secretInput;
	const [isShowSchema, { setTrue: showSchema, setFalse: hideSchema }] = useBoolean(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-0.5 py-1",
		children: [
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
				className: "flex h-6 items-center",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "system-sm-medium text-text-secondary",
						children: label[language] || label.en_US
					}),
					required && /* @__PURE__ */ jsx("div", {
						className: "system-xs-regular ml-1 text-text-destructive-secondary",
						children: "*"
					}),
					!showDescription && tooltip && /* @__PURE__ */ jsx(tooltip_default, {
						popupContent: /* @__PURE__ */ jsx("div", {
							className: "w-[200px]",
							children: tooltip[language] || tooltip.en_US
						}),
						triggerClassName: "ml-1 w-4 h-4",
						asChild: false
					}),
					showSchemaButton && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
						className: "system-xs-regular ml-1 mr-0.5 text-text-quaternary",
						children: "·"
					}), /* @__PURE__ */ jsxs(Button, {
						variant: "ghost",
						size: "small",
						onClick: showSchema,
						className: "system-xs-regular px-1 text-text-tertiary",
						children: [/* @__PURE__ */ jsx(v4, { className: "mr-1 size-3.5" }), /* @__PURE__ */ jsx("span", { children: "JSON Schema" })]
					})] })
				]
			}), showDescription && tooltip && /* @__PURE__ */ jsx("div", {
				className: "body-xs-regular pb-0.5 text-text-tertiary",
				children: tooltip[language] || tooltip.en_US
			})] }),
			/* @__PURE__ */ jsx(FormInputItem, {
				readOnly,
				nodeId,
				schema,
				value,
				onChange,
				inPanel,
				currentTool,
				currentProvider,
				showManageInputField,
				onManageInputField,
				extraParams,
				providerType
			}),
			isShowSchema && /* @__PURE__ */ jsx(schema_modal_default, {
				isShow: true,
				onClose: hideSchema,
				rootName: name,
				schema: input_schema
			})
		]
	});
};
//#endregion
//#region app/components/workflow/nodes/tool/components/tool-form/index.tsx
var ToolForm = ({ readOnly, nodeId, schema, value, onChange, inPanel, currentTool, currentProvider, showManageInputField, onManageInputField, extraParams }) => {
	return /* @__PURE__ */ jsx("div", {
		className: "space-y-1",
		children: schema.map((schema, index) => /* @__PURE__ */ jsx(ToolFormItem, {
			readOnly,
			nodeId,
			schema,
			value,
			onChange,
			inPanel,
			currentTool,
			currentProvider,
			showManageInputField,
			onManageInputField,
			extraParams,
			providerType: "tool"
		}, index))
	});
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/tool-selector/components/tool-settings-panel.tsx
/**
* Renders the settings/params tips section
*/
var ParamsTips = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "pb-1",
		children: [/* @__PURE__ */ jsx("div", {
			className: "system-xs-regular text-text-tertiary",
			children: t("detailPanel.toolSelector.paramsTip1", { ns: "plugin" })
		}), /* @__PURE__ */ jsx("div", {
			className: "system-xs-regular text-text-tertiary",
			children: t("detailPanel.toolSelector.paramsTip2", { ns: "plugin" })
		})]
	});
};
var ToolSettingsPanel = ({ value, currentProvider, nodeId, currType, settingsFormSchemas, paramsFormSchemas, settingsValue, showTabSlider, userSettingsOnly, reasoningConfigOnly, nodeOutputVars, availableNodes, onCurrTypeChange, onSettingsFormChange, onParamsFormChange }) => {
	const { t } = useTranslation();
	const hasSettings = settingsFormSchemas.length > 0;
	const hasParams = paramsFormSchemas.length > 0;
	const isTeamAuthorized = currentProvider?.is_team_authorization;
	if (!hasSettings && !hasParams || !isTeamAuthorized) return null;
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(Divider$1, { className: "my-1 w-full" }),
		nodeId && showTabSlider && /* @__PURE__ */ jsx(tab_slider_plain_default, {
			className: "mt-1 shrink-0 px-4",
			itemClassName: "py-3",
			noBorderBottom: true,
			smallItem: true,
			value: currType,
			onChange: (v) => {
				if (v === "settings" || v === "params") onCurrTypeChange(v);
			},
			options: [{
				value: "settings",
				text: t("detailPanel.toolSelector.settings", { ns: "plugin" })
			}, {
				value: "params",
				text: t("detailPanel.toolSelector.params", { ns: "plugin" })
			}]
		}),
		nodeId && showTabSlider && currType === "params" && /* @__PURE__ */ jsx("div", {
			className: "px-4 py-2",
			children: /* @__PURE__ */ jsx(ParamsTips, {})
		}),
		userSettingsOnly && /* @__PURE__ */ jsx("div", {
			className: "p-4 pb-1",
			children: /* @__PURE__ */ jsx("div", {
				className: "system-sm-semibold-uppercase text-text-primary",
				children: t("detailPanel.toolSelector.settings", { ns: "plugin" })
			})
		}),
		nodeId && reasoningConfigOnly && /* @__PURE__ */ jsxs("div", {
			className: "mb-1 p-4 pb-1",
			children: [/* @__PURE__ */ jsx("div", {
				className: "system-sm-semibold-uppercase text-text-primary",
				children: t("detailPanel.toolSelector.params", { ns: "plugin" })
			}), /* @__PURE__ */ jsx(ParamsTips, {})]
		}),
		(currType === "settings" || userSettingsOnly) && /* @__PURE__ */ jsx("div", {
			className: "px-4 py-2",
			children: /* @__PURE__ */ jsx(ToolForm, {
				inPanel: true,
				readOnly: false,
				nodeId,
				schema: settingsFormSchemas,
				value: settingsValue,
				onChange: onSettingsFormChange
			})
		}),
		nodeId && (currType === "params" || reasoningConfigOnly) && /* @__PURE__ */ jsx(ReasoningConfigForm, {
			value: value?.parameters || {},
			onChange: onParamsFormChange,
			schemas: paramsFormSchemas,
			nodeOutputVars,
			availableNodes,
			nodeId
		})
	] });
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/tool-selector/hooks/use-plugin-installed-check.ts
var usePluginInstalledCheck = (providerName = "") => {
	const pluginID = providerName?.split("/").splice(0, 2).join("/");
	const { data: manifest } = usePluginManifestInfo(pluginID);
	return {
		inMarketPlace: !!manifest,
		manifest: manifest?.data.plugin,
		pluginID
	};
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/tool-selector/hooks/use-tool-selector-state.ts
/**
* Custom hook for managing tool selector state and computed values.
* Consolidates state management, data fetching, and event handlers.
*/
var useToolSelectorState = ({ value, onSelect, onSelectMultiple }) => {
	const [isShow, setIsShow] = useState(false);
	const [isShowChooseTool, setIsShowChooseTool] = useState(false);
	const [currType, setCurrType] = useState("settings");
	const { data: buildInTools } = useAllBuiltInTools();
	const { data: customTools } = useAllCustomTools();
	const { data: workflowTools } = useAllWorkflowTools();
	const { data: mcpTools } = useAllMCPTools();
	const invalidateAllBuiltinTools = useInvalidateAllBuiltInTools();
	const invalidateInstalledPluginList = useInvalidateInstalledPluginList();
	const { inMarketPlace, manifest, pluginID } = usePluginInstalledCheck(value?.provider_name);
	const currentProvider = useMemo(() => {
		return [
			...buildInTools || [],
			...customTools || [],
			...workflowTools || [],
			...mcpTools || []
		].find((toolWithProvider) => toolWithProvider.id === value?.provider_name);
	}, [
		value,
		buildInTools,
		customTools,
		workflowTools,
		mcpTools
	]);
	const currentTool = useMemo(() => {
		return currentProvider?.tools.find((tool) => tool.name === value?.tool_name);
	}, [currentProvider?.tools, value?.tool_name]);
	const currentToolSettings = useMemo(() => {
		if (!currentProvider) return [];
		return currentProvider.tools.find((tool) => tool.name === value?.tool_name)?.parameters.filter((param) => param.form !== "llm") || [];
	}, [currentProvider, value]);
	const currentToolParams = useMemo(() => {
		if (!currentProvider) return [];
		return currentProvider.tools.find((tool) => tool.name === value?.tool_name)?.parameters.filter((param) => param.form === "llm") || [];
	}, [currentProvider, value]);
	const settingsFormSchemas = useMemo(() => toolParametersToFormSchemas(currentToolSettings), [currentToolSettings]);
	const paramsFormSchemas = useMemo(() => toolParametersToFormSchemas(currentToolParams), [currentToolParams]);
	const showTabSlider = currentToolSettings.length > 0 && currentToolParams.length > 0;
	const userSettingsOnly = currentToolSettings.length > 0 && !currentToolParams.length;
	const reasoningConfigOnly = currentToolParams.length > 0 && !currentToolSettings.length;
	const manifestIcon = useMemo(() => {
		if (!manifest || !pluginID) return "";
		return getIconFromMarketPlace(pluginID);
	}, [manifest, pluginID]);
	const getToolValue = useCallback((tool) => {
		const settingValues = generateFormValue(tool.params, toolParametersToFormSchemas(tool.paramSchemas.filter((param) => param.form !== "llm")));
		const paramValues = generateFormValue(tool.params, toolParametersToFormSchemas(tool.paramSchemas.filter((param) => param.form === "llm")), true);
		return {
			provider_name: tool.provider_id,
			provider_show_name: tool.provider_name,
			tool_name: tool.tool_name,
			tool_label: tool.tool_label,
			tool_description: tool.tool_description,
			settings: settingValues,
			parameters: paramValues,
			enabled: tool.is_team_authorization,
			extra: { description: tool.tool_description },
			type: tool.provider_type
		};
	}, []);
	return {
		isShow,
		setIsShow,
		isShowChooseTool,
		setIsShowChooseTool,
		currType,
		setCurrType,
		currentProvider,
		currentTool,
		currentToolSettings,
		currentToolParams,
		settingsFormSchemas,
		paramsFormSchemas,
		showTabSlider,
		userSettingsOnly,
		reasoningConfigOnly,
		manifestIcon,
		inMarketPlace,
		manifest,
		handleSelectTool: useCallback((tool) => {
			onSelect(getToolValue(tool));
		}, [getToolValue, onSelect]),
		handleSelectMultipleTool: useCallback((tools) => {
			const toolValues = tools.map((item) => getToolValue(item));
			onSelectMultiple?.(toolValues);
		}, [getToolValue, onSelectMultiple]),
		handleDescriptionChange: useCallback((e) => {
			if (!value) return;
			onSelect({
				...value,
				extra: {
					...value.extra,
					description: e.target.value || ""
				}
			});
		}, [value, onSelect]),
		handleSettingsFormChange: useCallback((v) => {
			if (!value) return;
			const newValue = getStructureValue(v);
			onSelect({
				...value,
				settings: newValue
			});
		}, [value, onSelect]),
		handleParamsFormChange: useCallback((v) => {
			if (!value) return;
			onSelect({
				...value,
				parameters: v
			});
		}, [value, onSelect]),
		handleEnabledChange: useCallback((state) => {
			if (!value) return;
			onSelect({
				...value,
				enabled: state
			});
		}, [value, onSelect]),
		handleAuthorizationItemClick: useCallback((id) => {
			if (!value) return;
			onSelect({
				...value,
				credential_id: id
			});
		}, [value, onSelect]),
		handleInstall: useCallback(async () => {
			try {
				await invalidateAllBuiltinTools();
			} catch (error) {
				console.error("Failed to invalidate built-in tools cache", error);
			}
			try {
				await invalidateInstalledPluginList();
			} catch (error) {
				console.error("Failed to invalidate installed plugin list cache", error);
			}
		}, [invalidateAllBuiltinTools, invalidateInstalledPluginList]),
		getSettingsValue: useCallback(() => {
			return getPlainValue(value?.settings || {});
		}, [value?.settings])
	};
};
//#endregion
//#region app/components/plugins/plugin-detail-panel/tool-selector/index.tsx
var ToolSelector = ({ value, selectedTools, isEdit, disabled, placement = "left", offset = 4, onSelect, onSelectMultiple, onDelete, scope, supportEnableSwitch, trigger, controlledState, onControlledStateChange, panelShowState, onPanelShowStateChange, nodeOutputVars, availableNodes, nodeId = "" }) => {
	const { t } = useTranslation();
	const { isShow, setIsShow, isShowChooseTool, setIsShowChooseTool, currType, setCurrType, currentProvider, currentTool, settingsFormSchemas, paramsFormSchemas, showTabSlider, userSettingsOnly, reasoningConfigOnly, manifestIcon, inMarketPlace, manifest, handleSelectTool, handleSelectMultipleTool, handleDescriptionChange, handleSettingsFormChange, handleParamsFormChange, handleEnabledChange, handleAuthorizationItemClick, handleInstall, getSettingsValue } = useToolSelectorState({
		value,
		onSelect,
		onSelectMultiple
	});
	const handleTriggerClick = () => {
		if (disabled) return;
		setIsShow(true);
	};
	const portalOpen = trigger ? controlledState : isShow;
	const onPortalOpenChange = trigger ? onControlledStateChange : setIsShow;
	const renderErrorTip = () => /* @__PURE__ */ jsxs("div", {
		className: "max-w-[240px] space-y-1 text-xs",
		children: [
			/* @__PURE__ */ jsx("h3", {
				className: "font-semibold text-text-primary",
				children: currentTool ? t("detailPanel.toolSelector.uninstalledTitle", { ns: "plugin" }) : t("detailPanel.toolSelector.unsupportedTitle", { ns: "plugin" })
			}),
			/* @__PURE__ */ jsx("p", {
				className: "tracking-tight text-text-secondary",
				children: currentTool ? t("detailPanel.toolSelector.uninstalledContent", { ns: "plugin" }) : t("detailPanel.toolSelector.unsupportedContent", { ns: "plugin" })
			}),
			/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Link, {
				href: "/plugins",
				className: "tracking-tight text-text-accent",
				children: t("detailPanel.toolSelector.uninstalledLink", { ns: "plugin" })
			}) })
		]
	});
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		placement,
		offset,
		open: portalOpen,
		onOpenChange: onPortalOpenChange,
		children: [/* @__PURE__ */ jsxs(PortalToFollowElemTrigger, {
			className: "w-full",
			onClick: () => {
				if (!currentProvider || !currentTool) return;
				handleTriggerClick();
			},
			children: [
				trigger,
				!trigger && !value?.provider_name && /* @__PURE__ */ jsx(ToolTrigger, {
					isConfigure: true,
					open: isShow,
					value,
					provider: currentProvider
				}),
				!trigger && value?.provider_name && /* @__PURE__ */ jsx(ToolItem, {
					open: isShow,
					icon: currentProvider?.icon || manifestIcon,
					isMCPTool: currentProvider?.type === CollectionType.mcp,
					providerName: value.provider_name,
					providerShowName: value.provider_show_name,
					toolLabel: value.tool_label || value.tool_name,
					showSwitch: supportEnableSwitch,
					switchValue: value.enabled,
					onSwitchChange: handleEnabledChange,
					onDelete,
					noAuth: currentProvider && currentTool && !currentProvider.is_team_authorization,
					uninstalled: !currentProvider && inMarketPlace,
					versionMismatch: currentProvider && inMarketPlace && !currentTool,
					installInfo: manifest?.latest_package_identifier,
					onInstall: handleInstall,
					isError: (!currentProvider || !currentTool) && !inMarketPlace,
					errorTip: renderErrorTip()
				})
			]
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: cn("relative max-h-[642px] min-h-20 w-[361px] rounded-xl", "border-[0.5px] border-components-panel-border bg-components-panel-bg-blur", "overflow-y-auto pb-2 pb-4 shadow-lg backdrop-blur-sm"),
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "system-xl-semibold px-4 pb-1 pt-3.5 text-text-primary",
						children: t(`detailPanel.toolSelector.${isEdit ? "toolSetting" : "title"}`, { ns: "plugin" })
					}),
					/* @__PURE__ */ jsx(ToolBaseForm, {
						value,
						currentProvider,
						offset,
						scope,
						selectedTools,
						isShowChooseTool,
						panelShowState,
						hasTrigger: !!trigger,
						onShowChange: setIsShowChooseTool,
						onPanelShowStateChange,
						onSelectTool: handleSelectTool,
						onSelectMultipleTool: handleSelectMultipleTool,
						onDescriptionChange: handleDescriptionChange
					}),
					/* @__PURE__ */ jsx(ToolAuthorizationSection, {
						currentProvider,
						credentialId: value?.credential_id,
						onAuthorizationItemClick: handleAuthorizationItemClick
					}),
					/* @__PURE__ */ jsx(ToolSettingsPanel, {
						value,
						currentProvider,
						nodeId,
						currType,
						settingsFormSchemas,
						paramsFormSchemas,
						settingsValue: getSettingsValue(),
						showTabSlider,
						userSettingsOnly,
						reasoningConfigOnly,
						nodeOutputVars,
						availableNodes,
						onCurrTypeChange: setCurrType,
						onSettingsFormChange: handleSettingsFormChange,
						onParamsFormChange: handleParamsFormChange
					})
				]
			})
		})]
	});
};
var tool_selector_default = React$1.memo(ToolSelector);
//#endregion
//#region app/components/plugins/plugin-detail-panel/multiple-tool-selector/index.tsx
var MultipleToolSelector = ({ disabled, value = [], label, required, tooltip, supportCollapse, scope, onChange, nodeOutputVars, availableNodes, nodeId }) => {
	const { t } = useTranslation();
	const { allowed: isMCPToolAllowed } = useMCPToolAvailability();
	const { data: mcpTools } = useAllMCPTools();
	const enabledCount = value.filter((item) => {
		if (mcpTools?.find((tool) => tool.id === item.provider_name)) return item.enabled && isMCPToolAllowed;
		return item.enabled;
	}).length;
	const [collapse, setCollapse] = React$1.useState(false);
	const handleCollapse = () => {
		if (supportCollapse) setCollapse(!collapse);
	};
	const [open, setOpen] = React$1.useState(false);
	const [panelShowState, setPanelShowState] = React$1.useState(true);
	const handleAdd = (val) => {
		onChange([...value, val].reduce((acc, cur) => {
			if (!acc.find((item) => item.provider_name === cur.provider_name && item.tool_name === cur.tool_name)) acc.push(cur);
			return acc;
		}, []));
		setOpen(false);
	};
	const handleAddMultiple = (val) => {
		onChange([...value, ...val].reduce((acc, cur) => {
			if (!acc.find((item) => item.provider_name === cur.provider_name && item.tool_name === cur.tool_name)) acc.push(cur);
			return acc;
		}, []));
		setOpen(false);
	};
	const handleDelete = (index) => {
		const newValue = [...value];
		newValue.splice(index, 1);
		onChange(newValue);
	};
	const handleConfigure = (val, index) => {
		const newValue = [...value];
		newValue[index] = val;
		onChange(newValue);
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "mb-1 flex items-center",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: cn("relative flex grow items-center gap-0.5", supportCollapse && "cursor-pointer"),
					onClick: handleCollapse,
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "system-sm-semibold-uppercase flex h-6 items-center text-text-secondary",
							children: label
						}),
						required && /* @__PURE__ */ jsx("div", {
							className: "text-red-500",
							children: "*"
						}),
						tooltip && /* @__PURE__ */ jsx(tooltip_default, {
							popupContent: tooltip,
							children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(QM, { className: "h-3.5 w-3.5 text-text-quaternary hover:text-text-tertiary" }) })
						}),
						supportCollapse && /* @__PURE__ */ jsx(Icon$25, { className: cn("h-4 w-4 cursor-pointer text-text-quaternary group-hover/collapse:text-text-secondary", collapse && "rotate-[270deg]") })
					]
				}),
				value.length > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
					className: "system-xs-medium flex items-center gap-1 text-text-tertiary",
					children: [/* @__PURE__ */ jsx("span", { children: `${enabledCount}/${value.length}` }), /* @__PURE__ */ jsx("span", { children: t("agent.tools.enabled", { ns: "appDebug" }) })]
				}), /* @__PURE__ */ jsx(Divider$1, {
					type: "vertical",
					className: "ml-3 mr-1 h-3"
				})] }),
				!disabled && /* @__PURE__ */ jsx(ActionButton, {
					className: "mx-1",
					onClick: () => {
						setCollapse(false);
						setOpen(!open);
						setPanelShowState(true);
					},
					children: /* @__PURE__ */ jsx(p, { className: "h-4 w-4" })
				})
			]
		}),
		!collapse && /* @__PURE__ */ jsxs(Fragment$1, { children: [value.length === 0 && /* @__PURE__ */ jsx("div", {
			className: "system-xs-regular flex justify-center rounded-[10px] bg-background-section p-3 text-text-tertiary",
			children: t("detailPanel.toolSelector.empty", { ns: "plugin" })
		}), value.length > 0 && value.map((item, index) => /* @__PURE__ */ jsx("div", {
			className: "mb-1",
			children: /* @__PURE__ */ jsx(tool_selector_default, {
				nodeId,
				nodeOutputVars,
				availableNodes,
				scope,
				value: item,
				selectedTools: value,
				onSelect: (item) => handleConfigure(item, index),
				onSelectMultiple: handleAddMultiple,
				onDelete: () => handleDelete(index),
				supportEnableSwitch: true,
				isEdit: true
			})
		}, index))] }),
		/* @__PURE__ */ jsx(tool_selector_default, {
			nodeId,
			nodeOutputVars,
			availableNodes,
			scope,
			value: void 0,
			selectedTools: value,
			onSelect: handleAdd,
			controlledState: open,
			onControlledStateChange: setOpen,
			trigger: /* @__PURE__ */ jsx("div", { className: "" }),
			panelShowState,
			onPanelShowStateChange: setPanelShowState,
			isEdit: false,
			onSelectMultiple: handleAddMultiple
		})
	] });
};
//#endregion
//#region app/components/header/account-setting/key-validator/ValidateStatus.tsx
var ValidatingTip = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("div", {
		className: "mt-2 text-xs font-normal text-primary-600",
		children: t("provider.validating", { ns: "common" })
	});
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-modal/Input.tsx
var Input = ({ value, onChange, onFocus, placeholder, validated, className, disabled, type = "text", min, max }) => {
	const toLimit = (v) => {
		const minNum = Number.parseFloat(`${min}`);
		const maxNum = Number.parseFloat(`${max}`);
		if (!isNaN(minNum) && Number.parseFloat(v) < minNum) {
			onChange(`${min}`);
			return;
		}
		if (!isNaN(maxNum) && Number.parseFloat(v) > maxNum) onChange(`${max}`);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx("input", {
			tabIndex: 0,
			className: `
          block h-8 w-full appearance-none rounded-lg border border-transparent bg-components-input-bg-normal px-3 text-sm
          text-components-input-text-filled caret-primary-600 outline-none
          placeholder:text-sm placeholder:text-text-tertiary
          hover:border-components-input-border-hover hover:bg-components-input-bg-hover focus:border-components-input-border-active
          focus:bg-components-input-bg-active focus:shadow-xs
          ${validated ? "pr-[30px]" : ""}
          ${className || ""}
        `,
			placeholder: placeholder || "",
			onChange: (e) => onChange(e.target.value),
			onBlur: (e) => toLimit(e.target.value),
			onFocus,
			value,
			disabled,
			type,
			min,
			max
		}), validated && /* @__PURE__ */ jsx("div", {
			className: "absolute right-2.5 top-2.5",
			children: /* @__PURE__ */ jsx(Icon$26, { className: "h-4 w-4 text-[#039855]" })
		})]
	});
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-modal/Form.tsx
function Form({ className, itemClassName, fieldLabelClassName, value, onChange, formSchemas, validating, validatedSuccess, showOnVariableMap, isEditMode, isAgentStrategy = false, readonly, inputClassName, isShowDefaultValue = false, fieldMoreInfo, customRenderField, override, nodeId, nodeOutputVars, availableNodes }) {
	const language = useLanguage();
	const [changeKey, setChangeKey] = useState("");
	const filteredProps = {
		className,
		itemClassName,
		fieldLabelClassName,
		value,
		onChange,
		formSchemas,
		validating,
		validatedSuccess,
		showOnVariableMap,
		isEditMode,
		readonly,
		inputClassName,
		isShowDefaultValue,
		fieldMoreInfo
	};
	const handleFormChange = (key, val) => {
		if (isEditMode && (key === "__model_type" || key === "__model_name")) return;
		setChangeKey(key);
		const shouldClearVariable = {};
		if (showOnVariableMap[key]?.length) showOnVariableMap[key].forEach((clearVariable) => {
			const schema = formSchemas.find((it) => it.variable === clearVariable);
			shouldClearVariable[clearVariable] = schema ? schema.default : void 0;
		});
		onChange({
			...value,
			[key]: val,
			...shouldClearVariable
		});
	};
	const handleModelChanged = useCallback((key, model) => {
		const newValue = {
			...value[key],
			...model,
			type: FormTypeEnum.modelSelector
		};
		onChange({
			...value,
			[key]: newValue
		});
	}, [onChange, value]);
	const renderField = (formSchema) => {
		const tooltip = formSchema.tooltip;
		const tooltipContent = tooltip && /* @__PURE__ */ jsx(tooltip_default, {
			popupContent: /* @__PURE__ */ jsx("div", {
				className: "w-[200px]",
				children: tooltip[language] || tooltip.en_US
			}),
			triggerClassName: "ml-1 w-4 h-4",
			asChild: false
		});
		if (override) {
			const [overrideTypes, overrideRender] = override;
			if (overrideTypes.includes(formSchema.type)) {
				const node = overrideRender(formSchema, filteredProps);
				if (node) return node;
			}
		}
		if (formSchema.type === FormTypeEnum.textInput || formSchema.type === FormTypeEnum.secretInput || formSchema.type === FormTypeEnum.textNumber) {
			const { variable, label, placeholder, required, show_on } = formSchema;
			if (show_on.length && !show_on.every((showOnItem) => value[showOnItem.variable] === showOnItem.value)) return null;
			const disabled = readonly || isEditMode && (variable === "__model_type" || variable === "__model_name");
			return /* @__PURE__ */ jsxs("div", {
				className: cn(itemClassName, "py-3"),
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: cn(fieldLabelClassName, "flex items-center py-2 text-text-secondary system-sm-semibold"),
						children: [
							label[language] || label.en_US,
							required && /* @__PURE__ */ jsx("span", {
								className: "ml-1 text-red-500",
								children: "*"
							}),
							tooltipContent
						]
					}),
					/* @__PURE__ */ jsx(Input, {
						className: cn(inputClassName, `${disabled && "cursor-not-allowed opacity-60"}`),
						value: isShowDefaultValue && (value[variable] === "" || value[variable] === void 0 || value[variable] === null) ? formSchema.default : value[variable],
						onChange: (val) => handleFormChange(variable, val),
						validated: validatedSuccess,
						placeholder: placeholder?.[language] || placeholder?.en_US,
						disabled,
						type: formSchema.type === FormTypeEnum.secretInput ? "password" : formSchema.type === FormTypeEnum.textNumber ? "number" : "text",
						...formSchema.type === FormTypeEnum.textNumber ? {
							min: formSchema.min,
							max: formSchema.max
						} : {}
					}),
					fieldMoreInfo?.(formSchema),
					validating && changeKey === variable && /* @__PURE__ */ jsx(ValidatingTip, {})
				]
			}, variable);
		}
		if (formSchema.type === FormTypeEnum.radio) {
			const { options, variable, label, show_on, required } = formSchema;
			if (show_on.length && !show_on.every((showOnItem) => value[showOnItem.variable] === showOnItem.value)) return null;
			const disabled = isEditMode && (variable === "__model_type" || variable === "__model_name");
			return /* @__PURE__ */ jsxs("div", {
				className: cn(itemClassName, "py-3"),
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: cn(fieldLabelClassName, "flex items-center py-2 text-text-secondary system-sm-semibold"),
						children: [
							label[language] || label.en_US,
							required && /* @__PURE__ */ jsx("span", {
								className: "ml-1 text-red-500",
								children: "*"
							}),
							tooltipContent
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: cn("grid gap-3", `grid-cols-${options?.length}`),
						children: options.filter((option) => {
							if (option.show_on.length) return option.show_on.every((showOnItem) => value[showOnItem.variable] === showOnItem.value);
							return true;
						}).map((option) => /* @__PURE__ */ jsxs("div", {
							className: `
                    flex cursor-pointer items-center gap-2 rounded-lg border border-components-option-card-option-border bg-components-option-card-option-bg px-3 py-2
                    ${value[variable] === option.value && "border-[1.5px] border-components-option-card-option-selected-border bg-components-option-card-option-selected-bg shadow-sm"}
                    ${disabled && "!cursor-not-allowed opacity-60"}
                  `,
							onClick: () => handleFormChange(variable, option.value),
							children: [/* @__PURE__ */ jsx(ui_default, { isChecked: value[variable] === option.value }), /* @__PURE__ */ jsx("div", {
								className: "text-text-secondary system-sm-regular",
								children: option.label[language] || option.label.en_US
							})]
						}, `${variable}-${option.value}`))
					}),
					fieldMoreInfo?.(formSchema),
					validating && changeKey === variable && /* @__PURE__ */ jsx(ValidatingTip, {})
				]
			}, variable);
		}
		if (formSchema.type === FormTypeEnum.select) {
			const { options, variable, label, show_on, required, placeholder } = formSchema;
			if (show_on.length && !show_on.every((showOnItem) => value[showOnItem.variable] === showOnItem.value)) return null;
			return /* @__PURE__ */ jsxs("div", {
				className: cn(itemClassName, "py-3"),
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: cn(fieldLabelClassName, "flex items-center py-2 text-text-secondary system-sm-semibold"),
						children: [
							label[language] || label.en_US,
							required && /* @__PURE__ */ jsx("span", {
								className: "ml-1 text-red-500",
								children: "*"
							}),
							tooltipContent
						]
					}),
					/* @__PURE__ */ jsx(SimpleSelect, {
						wrapperClassName: "h-8",
						className: cn(inputClassName),
						disabled: readonly,
						defaultValue: isShowDefaultValue && (value[variable] === "" || value[variable] === void 0 || value[variable] === null) ? formSchema.default : value[variable],
						items: options.filter((option) => {
							if (option.show_on.length) return option.show_on.every((showOnItem) => value[showOnItem.variable] === showOnItem.value);
							return true;
						}).map((option) => ({
							value: option.value,
							name: option.label[language] || option.label.en_US
						})),
						onSelect: (item) => handleFormChange(variable, item.value),
						placeholder: placeholder?.[language] || placeholder?.en_US
					}),
					fieldMoreInfo?.(formSchema),
					validating && changeKey === variable && /* @__PURE__ */ jsx(ValidatingTip, {})
				]
			}, variable);
		}
		if (formSchema.type === FormTypeEnum.checkbox) {
			const { variable, label, show_on, required } = formSchema;
			if (show_on.length && !show_on.every((showOnItem) => value[showOnItem.variable] === showOnItem.value)) return null;
			return /* @__PURE__ */ jsxs("div", {
				className: cn(itemClassName, "py-3"),
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between py-2 text-text-secondary system-sm-semibold",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center space-x-2",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: cn(fieldLabelClassName, "flex items-center py-2 text-text-secondary system-sm-semibold"),
								children: label[language] || label.en_US
							}),
							required && /* @__PURE__ */ jsx("span", {
								className: "ml-1 text-red-500",
								children: "*"
							}),
							tooltipContent
						]
					}), /* @__PURE__ */ jsxs(Radio.Group, {
						className: "flex items-center",
						value: value[variable],
						onChange: (val) => handleFormChange(variable, val),
						children: [/* @__PURE__ */ jsx(Radio, {
							value: true,
							className: "!mr-1",
							children: "True"
						}), /* @__PURE__ */ jsx(Radio, {
							value: false,
							children: "False"
						})]
					})]
				}), fieldMoreInfo?.(formSchema)]
			}, variable);
		}
		if (formSchema.type === FormTypeEnum.modelSelector) {
			const { variable, label, required, scope } = formSchema;
			return /* @__PURE__ */ jsxs("div", {
				className: cn(itemClassName, "py-3"),
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: cn(fieldLabelClassName, "flex items-center py-2 text-text-secondary system-sm-semibold"),
						children: [
							label[language] || label.en_US,
							required && /* @__PURE__ */ jsx("span", {
								className: "ml-1 text-red-500",
								children: "*"
							}),
							tooltipContent
						]
					}),
					/* @__PURE__ */ jsx(ModelParameterModal, {
						popupClassName: "!w-[387px]",
						isAdvancedMode: true,
						isInWorkflow: true,
						isAgentStrategy,
						value: value[variable],
						setModel: (model) => handleModelChanged(variable, model),
						readonly,
						scope
					}),
					fieldMoreInfo?.(formSchema),
					validating && changeKey === variable && /* @__PURE__ */ jsx(ValidatingTip, {})
				]
			}, variable);
		}
		if (formSchema.type === FormTypeEnum.toolSelector) {
			const { variable, label, required, scope } = formSchema;
			return /* @__PURE__ */ jsxs("div", {
				className: cn(itemClassName, "py-3"),
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: cn(fieldLabelClassName, "flex items-center py-2 text-text-secondary system-sm-semibold"),
						children: [
							label[language] || label.en_US,
							required && /* @__PURE__ */ jsx("span", {
								className: "ml-1 text-red-500",
								children: "*"
							}),
							tooltipContent
						]
					}),
					/* @__PURE__ */ jsx(tool_selector_default, {
						scope,
						nodeId,
						nodeOutputVars: nodeOutputVars || [],
						availableNodes: availableNodes || [],
						disabled: readonly,
						value: value[variable],
						onSelect: (item) => handleFormChange(variable, item),
						onDelete: () => handleFormChange(variable, null)
					}),
					fieldMoreInfo?.(formSchema),
					validating && changeKey === variable && /* @__PURE__ */ jsx(ValidatingTip, {})
				]
			}, variable);
		}
		if (formSchema.type === FormTypeEnum.multiToolSelector) {
			const { variable, label, tooltip, required, scope } = formSchema;
			return /* @__PURE__ */ jsxs("div", {
				className: cn(itemClassName, "py-3"),
				children: [
					/* @__PURE__ */ jsx(MultipleToolSelector, {
						disabled: readonly,
						nodeId,
						nodeOutputVars: nodeOutputVars || [],
						availableNodes: availableNodes || [],
						scope,
						label: label[language] || label.en_US,
						required,
						tooltip: tooltip?.[language] || tooltip?.en_US,
						value: value[variable] || [],
						onChange: (item) => handleFormChange(variable, item),
						supportCollapse: true
					}),
					fieldMoreInfo?.(formSchema),
					validating && changeKey === variable && /* @__PURE__ */ jsx(ValidatingTip, {})
				]
			}, variable);
		}
		if (formSchema.type === FormTypeEnum.appSelector) {
			const { variable, label, required, scope } = formSchema;
			return /* @__PURE__ */ jsxs("div", {
				className: cn(itemClassName, "py-3"),
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: cn(fieldLabelClassName, "flex items-center py-2 text-text-secondary system-sm-semibold"),
						children: [
							label[language] || label.en_US,
							required && /* @__PURE__ */ jsx("span", {
								className: "ml-1 text-red-500",
								children: "*"
							}),
							tooltipContent
						]
					}),
					/* @__PURE__ */ jsx(app_selector_default, {
						disabled: readonly,
						scope,
						value: value[variable],
						onSelect: (item) => handleFormChange(variable, {
							...item,
							type: FormTypeEnum.appSelector
						})
					}),
					fieldMoreInfo?.(formSchema),
					validating && changeKey === variable && /* @__PURE__ */ jsx(ValidatingTip, {})
				]
			}, variable);
		}
		if (formSchema.type === FormTypeEnum.any) {
			const { variable, label, required, scope } = formSchema;
			return /* @__PURE__ */ jsxs("div", {
				className: cn(itemClassName, "py-3"),
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: cn(fieldLabelClassName, "flex items-center py-2 text-text-secondary system-sm-semibold"),
						children: [
							label[language] || label.en_US,
							required && /* @__PURE__ */ jsx("span", {
								className: "ml-1 text-red-500",
								children: "*"
							}),
							tooltipContent
						]
					}),
					/* @__PURE__ */ jsx(var_reference_picker_default, {
						zIndex: 1001,
						readonly: false,
						isShowNodeName: true,
						nodeId: nodeId || "",
						value: value[variable] || [],
						onChange: (item) => handleFormChange(variable, item),
						filterVar: (varPayload) => {
							if (!scope) return true;
							return scope.split("&").includes(varPayload.type);
						}
					}),
					fieldMoreInfo?.(formSchema),
					validating && changeKey === variable && /* @__PURE__ */ jsx(ValidatingTip, {})
				]
			}, variable);
		}
		if (!Object.values(FormTypeEnum).includes(formSchema.type)) return customRenderField?.(formSchema, filteredProps);
	};
	return /* @__PURE__ */ jsx("div", {
		className,
		children: formSchemas.map((formSchema) => renderField(formSchema))
	});
}
//#endregion
//#region app/components/app/configuration/config/automatic/get-automatic-res.tsx
var i18nPrefix$3 = "generate";
var TryLabel = ({ Icon, text, onClick }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "mr-1 mt-2 flex h-7 shrink-0 cursor-pointer items-center rounded-lg bg-components-button-secondary-bg px-2",
		onClick,
		children: [/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-text-tertiary" }), /* @__PURE__ */ jsx("div", {
			className: "ml-1 text-xs font-medium text-text-secondary",
			children: text
		})]
	});
};
var GetAutomaticRes = ({ mode, isShow, onClose, flowId, nodeId, editorId, currentPrompt, isBasicMode, onFinished }) => {
	const { t } = useTranslation();
	const localModel = localStorage.getItem("auto-gen-model") ? JSON.parse(localStorage.getItem("auto-gen-model")) : null;
	const [model, setModel] = React$1.useState(localModel || {
		name: "",
		provider: "",
		mode,
		completion_params: {}
	});
	const { defaultModel } = useModelListAndDefaultModelAndCurrentProviderAndModel(ModelTypeEnum.textGeneration);
	const tryList = [
		{
			icon: Ku,
			key: "pythonDebugger"
		},
		{
			icon: GB,
			key: "translation"
		},
		{
			icon: HA,
			key: "meetingTakeaways"
		},
		{
			icon: NH,
			key: "writingsPolisher"
		},
		{
			icon: Af,
			key: "professionalAnalyst"
		},
		{
			icon: PC,
			key: "excelFormulaExpert"
		},
		{
			icon: nx,
			key: "travelPlanning"
		},
		{
			icon: _8,
			key: "SQLSorcerer"
		},
		{
			icon: Qr,
			key: "GitGud"
		}
	];
	const [instructionFromSessionStorage, setInstruction] = useSessionStorageState(`improve-instruction-${flowId}${isBasicMode ? "" : `-${nodeId}${editorId ? `-${editorId}` : ""}`}`);
	const instruction = instructionFromSessionStorage || "";
	const [ideaOutput, setIdeaOutput] = useState("");
	const [editorKey, setEditorKey] = useState(`${flowId}-0`);
	const handleChooseTemplate = useCallback((key) => {
		return () => {
			setInstruction(t(`generate.template.${key}.instruction`, { ns: "appDebug" }));
			setEditorKey(`${flowId}-${Date.now()}`);
		};
	}, [t]);
	const { data: instructionTemplate } = useGenerateRuleTemplate(GeneratorType.prompt, isBasicMode);
	useEffect(() => {
		if (!instruction && instructionTemplate) setInstruction(instructionTemplate.data);
		setEditorKey(`${flowId}-${Date.now()}`);
	}, [instructionTemplate]);
	const isValid = () => {
		if (instruction.trim() === "") {
			Toast.notify({
				type: "error",
				message: t("errorMsg.fieldRequired", {
					ns: "common",
					field: t("generate.instruction", { ns: "appDebug" })
				})
			});
			return false;
		}
		return true;
	};
	const [isLoading, { setTrue: setLoadingTrue, setFalse: setLoadingFalse }] = useBoolean(false);
	const { addVersion, current, currentVersionIndex, setCurrentVersionIndex, versions } = useGenData({ storageKey: `${flowId}${isBasicMode ? "" : `-${nodeId}${editorId ? `-${editorId}` : ""}`}` });
	useEffect(() => {
		if (defaultModel) {
			const localModel = localStorage.getItem("auto-gen-model") ? JSON.parse(localStorage.getItem("auto-gen-model") || "") : null;
			if (localModel) setModel(localModel);
			else setModel((prev) => ({
				...prev,
				name: defaultModel.model,
				provider: defaultModel.provider.provider
			}));
		}
	}, [defaultModel]);
	const renderLoading = /* @__PURE__ */ jsxs("div", {
		className: "flex h-full w-0 grow flex-col items-center justify-center space-y-3",
		children: [/* @__PURE__ */ jsx(Loading, {}), /* @__PURE__ */ jsx("div", {
			className: "text-[13px] text-text-tertiary",
			children: t("generate.loading", { ns: "appDebug" })
		})]
	});
	const handleModelChange = useCallback((newValue) => {
		const newModel = {
			...model,
			provider: newValue.provider,
			name: newValue.modelId,
			mode: newValue.mode
		};
		setModel(newModel);
		localStorage.setItem("auto-gen-model", JSON.stringify(newModel));
	}, [model, setModel]);
	const handleCompletionParamsChange = useCallback((newParams) => {
		const newModel = {
			...model,
			completion_params: newParams
		};
		setModel(newModel);
		localStorage.setItem("auto-gen-model", JSON.stringify(newModel));
	}, [model, setModel]);
	const onGenerate = async () => {
		if (!isValid()) return;
		if (isLoading) return;
		setLoadingTrue();
		try {
			let apiRes;
			let hasError = false;
			if (isBasicMode || !currentPrompt) {
				const { error, ...res } = await generateBasicAppFirstTimeRule({
					instruction,
					model_config: model,
					no_variable: false
				});
				apiRes = {
					...res,
					modified: res.prompt
				};
				if (error) {
					hasError = true;
					Toast.notify({
						type: "error",
						message: error
					});
				}
			} else {
				const { error, ...res } = await generateRule({
					flow_id: flowId,
					node_id: nodeId,
					current: currentPrompt,
					instruction,
					ideal_output: ideaOutput,
					model_config: model
				});
				apiRes = res;
				if (error) {
					hasError = true;
					Toast.notify({
						type: "error",
						message: error
					});
				}
			}
			if (!hasError) addVersion(apiRes);
		} finally {
			setLoadingFalse();
		}
	};
	const [isShowConfirmOverwrite, { setTrue: showConfirmOverwrite, setFalse: hideShowConfirmOverwrite }] = useBoolean(false);
	const isShowAutoPromptResPlaceholder = () => {
		return !isLoading && !current;
	};
	return /* @__PURE__ */ jsx(Modal, {
		isShow,
		onClose,
		className: "min-w-[1140px] !p-0",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex h-[680px] flex-wrap",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "h-full w-[570px] shrink-0 overflow-y-auto border-r border-divider-regular p-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-5",
							children: [/* @__PURE__ */ jsx("div", {
								className: `text-lg font-bold leading-[28px] ${style_module_default$2.textGradient}`,
								children: t("generate.title", { ns: "appDebug" })
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-1 text-[13px] font-normal text-text-tertiary",
								children: t("generate.description", { ns: "appDebug" })
							})]
						}),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ModelParameterModal$1, {
							popupClassName: "!w-[520px]",
							isAdvancedMode: true,
							provider: model.provider,
							completionParams: model.completion_params,
							modelId: model.name,
							setModel: handleModelChange,
							onCompletionParamsChange: handleCompletionParamsChange,
							hideDebugWithMultipleModel: true
						}) }),
						isBasicMode && /* @__PURE__ */ jsxs("div", {
							className: "mt-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center",
								children: [/* @__PURE__ */ jsx("div", {
									className: "mr-3 shrink-0 text-xs font-semibold uppercase leading-[18px] text-text-tertiary",
									children: t("generate.tryIt", { ns: "appDebug" })
								}), /* @__PURE__ */ jsx("div", {
									className: "h-px grow",
									style: { background: "linear-gradient(to right, rgba(243, 244, 246, 1), rgba(243, 244, 246, 0))" }
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap",
								children: tryList.map((item) => /* @__PURE__ */ jsx(TryLabel, {
									Icon: item.icon,
									text: t(`generate.template.${item.key}.name`, { ns: "appDebug" }),
									onClick: handleChooseTemplate(item.key)
								}, item.key))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-4",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "system-sm-semibold-uppercase mb-1.5 text-text-secondary",
									children: t("generate.instruction", { ns: "appDebug" })
								}), isBasicMode ? /* @__PURE__ */ jsx(instruction_editor_default, {
									editorKey,
									generatorType: GeneratorType.prompt,
									value: instruction,
									onChange: setInstruction,
									availableVars: [],
									availableNodes: [],
									isShowCurrentBlock: !!currentPrompt,
									isShowLastRunBlock: false
								}) : /* @__PURE__ */ jsx(instruction_editor_in_workflow_default, {
									editorKey,
									generatorType: GeneratorType.prompt,
									value: instruction,
									onChange: setInstruction,
									nodeId: nodeId || "",
									isShowCurrentBlock: !!currentPrompt
								})] }),
								/* @__PURE__ */ jsx(idea_output_default, {
									value: ideaOutput,
									onChange: setIdeaOutput
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-7 flex justify-end space-x-2",
									children: [/* @__PURE__ */ jsx(Button, {
										onClick: onClose,
										children: t(`${i18nPrefix$3}.dismiss`, { ns: "appDebug" })
									}), /* @__PURE__ */ jsxs(Button, {
										className: "flex space-x-1",
										variant: "primary",
										onClick: onGenerate,
										disabled: isLoading,
										children: [/* @__PURE__ */ jsx(Icon$22, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
											className: "text-xs font-semibold",
											children: t("generate.generate", { ns: "appDebug" })
										})]
									})]
								})
							]
						})
					]
				}),
				!isLoading && current && /* @__PURE__ */ jsx("div", {
					className: "h-full w-0 grow bg-background-default-subtle p-6 pb-0",
					children: /* @__PURE__ */ jsx(result_default$1, {
						current,
						isBasicMode,
						nodeId,
						currentVersionIndex: currentVersionIndex || 0,
						setCurrentVersionIndex,
						versions: versions || [],
						onApply: showConfirmOverwrite,
						generatorType: GeneratorType.prompt
					})
				}),
				isLoading && renderLoading,
				isShowAutoPromptResPlaceholder() && /* @__PURE__ */ jsx(res_placeholder_default, {}),
				isShowConfirmOverwrite && /* @__PURE__ */ jsx(confirm_default, {
					title: t("generate.overwriteTitle", { ns: "appDebug" }),
					content: t("generate.overwriteMessage", { ns: "appDebug" }),
					isShow: true,
					onConfirm: () => {
						hideShowConfirmOverwrite();
						onFinished(current);
					},
					onCancel: hideShowConfirmOverwrite
				})
			]
		})
	});
};
var get_automatic_res_default = React$1.memo(GetAutomaticRes);
//#endregion
//#region app/components/workflow/nodes/_base/components/info-panel.tsx
var InfoPanel = ({ title, content }) => {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-y-0.5 rounded-md bg-workflow-block-parma-bg px-[5px] py-[3px]",
		children: [/* @__PURE__ */ jsx("div", {
			className: "system-2xs-semibold-uppercase uppercase text-text-secondary",
			children: title
		}), /* @__PURE__ */ jsx("div", {
			className: "system-xs-regular break-words text-text-tertiary",
			children: content
		})]
	}) });
};
var info_panel_default = React$1.memo(InfoPanel);
var DefaultToolIcon_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "opacity": "0.5" },
			"children": [
				{
					"type": "element",
					"name": "rect",
					"attributes": {
						"width": "24",
						"height": "24",
						"rx": "6",
						"fill": "#E5E7EB"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "rect",
					"attributes": {
						"x": "0.25",
						"y": "0.25",
						"width": "23.5",
						"height": "23.5",
						"rx": "5.75",
						"stroke": "black",
						"stroke-opacity": "0.05",
						"stroke-width": "0.5"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M11.8876 5.30588C11.9601 5.26959 12.019 5.21074 12.0553 5.13817L12.414 4.4208C12.5522 4.1444 12.9466 4.1444 13.0848 4.4208L13.4435 5.13817C13.4797 5.21074 13.5386 5.26959 13.6112 5.30588L14.3285 5.66457C14.6049 5.80276 14.6049 6.19719 14.3285 6.33539L13.6112 6.69407C13.5386 6.73036 13.4797 6.78921 13.4435 6.86178L13.0848 7.57916C12.9466 7.85555 12.5522 7.85555 12.414 7.57916L12.0553 6.86178C12.019 6.78921 11.9601 6.73036 11.8876 6.69407L11.1702 6.33539C10.8938 6.19719 10.8938 5.80276 11.1702 5.66457L11.8876 5.30588Z",
						"fill": "#667085"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M7.88756 6.55588C7.96013 6.51959 8.01898 6.46074 8.05527 6.38817L8.28895 5.9208C8.42715 5.6444 8.82158 5.6444 8.95978 5.9208L9.19346 6.38817C9.22975 6.46074 9.2886 6.51959 9.36117 6.55588L9.82854 6.78956C10.1049 6.92776 10.1049 7.32219 9.82854 7.46039L9.36117 7.69407C9.2886 7.73036 9.22975 7.78921 9.19346 7.86178L8.95978 8.32915C8.82158 8.60555 8.42715 8.60555 8.28895 8.32915L8.05527 7.86178C8.01898 7.78921 7.96013 7.73036 7.88756 7.69407L7.42019 7.46039C7.14379 7.32219 7.14379 6.92776 7.42019 6.78957L7.88756 6.55588Z",
						"fill": "#667085"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						"d": "M17.9417 5.91012C18.1985 6.08504 18.2648 6.43496 18.0899 6.6917L16.0062 9.74998H17.4375C17.7482 9.74998 18 10.0018 18 10.3125V18.1875C18 18.9124 17.4124 19.5 16.6875 19.5H7.3125C6.58763 19.5 6 18.9123 6 18.1875V10.3125C6 10.0018 6.25184 9.74998 6.5625 9.74998H14.6449L17.1601 6.05826C17.3351 5.80152 17.685 5.7352 17.9417 5.91012ZM10.3125 12.75C10.0018 12.75 9.75 13.0018 9.75 13.3125C9.75 13.6231 10.0018 13.875 10.3125 13.875H13.6875C13.9982 13.875 14.25 13.6231 14.25 13.3125C14.25 13.0018 13.9982 12.75 13.6875 12.75H10.3125Z",
						"fill": "#667085"
					},
					"children": []
				}
			]
		}]
	},
	name: "DefaultToolIcon"
};
//#endregion
//#region app/components/base/icons/src/public/other/DefaultToolIcon.tsx
var Icon$17 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: DefaultToolIcon_default
});
Icon$17.displayName = "DefaultToolIcon";
var Icon3Dots_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M5 6.5V5M8.93934 7.56066L10 6.5M10.0103 11.5H11.5103",
				"stroke": "#667085",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			},
			"children": []
		}]
	},
	name: "Icon3Dots"
};
//#endregion
//#region app/components/base/icons/src/public/other/Icon3Dots.tsx
var Icon$16 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Icon3Dots_default
});
Icon$16.displayName = "Icon3Dots";
var Message3Fill_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "message-3-fill" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": {
					"id": "Vector",
					"filter": "url(#filter0_d_1071_49501)"
				},
				"children": [{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM14 11V13H16V11H14ZM8 11V13H10V11H8Z",
						"fill": "url(#paint0_linear_1071_49501)"
					},
					"children": []
				}]
			}]
		}, {
			"type": "element",
			"name": "defs",
			"attributes": {},
			"children": [{
				"type": "element",
				"name": "filter",
				"attributes": {
					"id": "filter0_d_1071_49501",
					"x": "1.5",
					"y": "2.75",
					"width": "21",
					"height": "19",
					"filterUnits": "userSpaceOnUse",
					"color-interpolation-filters": "sRGB"
				},
				"children": [
					{
						"type": "element",
						"name": "feFlood",
						"attributes": {
							"flood-opacity": "0",
							"result": "BackgroundImageFix"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "feColorMatrix",
						"attributes": {
							"in": "SourceAlpha",
							"type": "matrix",
							"values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
							"result": "hardAlpha"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "feOffset",
						"attributes": { "dy": "0.25" },
						"children": []
					},
					{
						"type": "element",
						"name": "feGaussianBlur",
						"attributes": { "stdDeviation": "0.25" },
						"children": []
					},
					{
						"type": "element",
						"name": "feComposite",
						"attributes": {
							"in2": "hardAlpha",
							"operator": "out"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "feColorMatrix",
						"attributes": {
							"type": "matrix",
							"values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "feBlend",
						"attributes": {
							"mode": "normal",
							"in2": "BackgroundImageFix",
							"result": "effect1_dropShadow_1071_49501"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "feBlend",
						"attributes": {
							"mode": "normal",
							"in": "SourceGraphic",
							"in2": "effect1_dropShadow_1071_49501",
							"result": "shape"
						},
						"children": []
					}
				]
			}, {
				"type": "element",
				"name": "linearGradient",
				"attributes": {
					"id": "paint0_linear_1071_49501",
					"x1": "12",
					"y1": "3",
					"x2": "12",
					"y2": "21",
					"gradientUnits": "userSpaceOnUse"
				},
				"children": [{
					"type": "element",
					"name": "stop",
					"attributes": { "stop-color": "#296DFF" },
					"children": []
				}, {
					"type": "element",
					"name": "stop",
					"attributes": {
						"offset": "1",
						"stop-color": "#0BA5EC"
					},
					"children": []
				}]
			}]
		}]
	},
	name: "Message3Fill"
};
//#endregion
//#region app/components/base/icons/src/public/other/Message3Fill.tsx
var Icon$15 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Message3Fill_default
});
Icon$15.displayName = "Message3Fill";
var RowStruct_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "624",
			"height": "48",
			"viewBox": "0 0 624 48",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [
			{
				"type": "element",
				"name": "rect",
				"attributes": {
					"x": "8",
					"y": "7",
					"width": "16",
					"height": "16",
					"rx": "5",
					"fill": "#F2F4F7"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "rect",
				"attributes": {
					"x": "32",
					"y": "10",
					"width": "233",
					"height": "10",
					"rx": "3",
					"fill": "#EAECF0"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "rect",
				"attributes": {
					"x": "32",
					"y": "31",
					"width": "345",
					"height": "6",
					"rx": "3",
					"fill": "#F2F4F7"
				},
				"children": []
			}
		]
	},
	name: "RowStruct"
};
//#endregion
//#region app/components/base/icons/src/public/other/RowStruct.tsx
var Icon$14 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: RowStruct_default
});
Icon$14.displayName = "RowStruct";
var Slack_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "27",
			"height": "27",
			"viewBox": "0 0 27 27",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M9.625 0C9.27992 0.000320434 8.93828 0.0686147 8.6196 0.200983C8.30091 0.333351 8.01142 0.527199 7.76766 0.771458C7.5239 1.01572 7.33064 1.3056 7.19893 1.62456C7.06721 1.94351 6.99962 2.28529 7 2.63037C6.99968 2.97541 7.06732 3.31714 7.19907 3.63603C7.33081 3.95493 7.52408 4.24476 7.76783 4.48897C8.01159 4.73317 8.30105 4.92698 8.61971 5.05932C8.93836 5.19165 9.27996 5.25993 9.625 5.26025H12.25V2.63037C12.2504 2.28529 12.1828 1.94351 12.0511 1.62456C11.9194 1.3056 11.7261 1.01572 11.4823 0.771458C11.2386 0.527199 10.9491 0.333351 10.6304 0.200983C10.3117 0.0686147 9.97008 0.000320434 9.625 0ZM9.625 7.01416H2.625C2.27996 7.01448 1.93836 7.08276 1.61971 7.21509C1.30106 7.34743 1.01159 7.54124 0.767835 7.78544C0.524081 8.02965 0.330814 8.31948 0.199069 8.63838C0.0673241 8.95728 -0.000319124 9.299 1.63476e-06 9.64404C-0.000383292 9.98912 0.0672126 10.3309 0.198929 10.6499C0.330645 10.9688 0.523902 11.2587 0.767662 11.503C1.01142 11.7472 1.30091 11.9411 1.6196 12.0734C1.93828 12.2058 2.27992 12.2741 2.625 12.2744H9.625C9.97008 12.2741 10.3117 12.2058 10.6304 12.0734C10.9491 11.9411 11.2386 11.7472 11.4823 11.503C11.7261 11.2587 11.9194 10.9688 12.0511 10.6499C12.1828 10.3309 12.2504 9.98912 12.25 9.64404C12.2503 9.299 12.1827 8.95728 12.0509 8.63838C11.9192 8.31948 11.7259 8.02965 11.4822 7.78544C11.2384 7.54124 10.9489 7.34743 10.6303 7.21509C10.3116 7.08276 9.97004 7.01448 9.625 7.01416Z",
					"fill": "#44BEDF"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M26.25 9.64404C26.2503 9.299 26.1827 8.95728 26.0509 8.63838C25.9192 8.31948 25.7259 8.02965 25.4822 7.78544C25.2384 7.54124 24.9489 7.34743 24.6303 7.21509C24.3116 7.08276 23.97 7.01448 23.625 7.01416C23.28 7.01448 22.9384 7.08276 22.6197 7.21509C22.3011 7.34743 22.0116 7.54124 21.7678 7.78544C21.5241 8.02965 21.3308 8.31948 21.1991 8.63838C21.0673 8.95728 20.9997 9.299 21 9.64404V12.2744H23.625C23.9701 12.2741 24.3117 12.2058 24.6304 12.0734C24.9491 11.9411 25.2386 11.7472 25.4823 11.503C25.7261 11.2587 25.9194 10.9688 26.0511 10.6499C26.1828 10.3309 26.2504 9.98912 26.25 9.64404ZM19.25 9.64404V2.63037C19.2504 2.28529 19.1828 1.94351 19.0511 1.62456C18.9194 1.3056 18.7261 1.01572 18.4823 0.771458C18.2386 0.527199 17.9491 0.333351 17.6304 0.200983C17.3117 0.0686147 16.9701 0.000320434 16.625 0C16.2799 0.000320434 15.9383 0.0686147 15.6196 0.200983C15.3009 0.333351 15.0114 0.527199 14.7677 0.771458C14.5239 1.01572 14.3306 1.3056 14.1989 1.62456C14.0672 1.94351 13.9996 2.28529 14 2.63037V9.64404C13.9996 9.98912 14.0672 10.3309 14.1989 10.6499C14.3306 10.9688 14.5239 11.2587 14.7677 11.503C15.0114 11.7472 15.3009 11.9411 15.6196 12.0734C15.9383 12.2058 16.2799 12.2741 16.625 12.2744C16.9701 12.2741 17.3117 12.2058 17.6304 12.0734C17.9491 11.9411 18.2386 11.7472 18.4823 11.503C18.7261 11.2587 18.9194 10.9688 19.0511 10.6499C19.1828 10.3309 19.2504 9.98912 19.25 9.64404Z",
					"fill": "#2EB67D"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M16.625 26.302C16.9701 26.3017 17.3117 26.2334 17.6304 26.101C17.9491 25.9686 18.2386 25.7748 18.4823 25.5305C18.7261 25.2863 18.9194 24.9964 19.0511 24.6774C19.1828 24.3585 19.2504 24.0167 19.25 23.6716C19.2503 23.3266 19.1827 22.9849 19.0509 22.666C18.9192 22.3471 18.7259 22.0572 18.4822 21.813C18.2384 21.5688 17.9489 21.375 17.6303 21.2427C17.3116 21.1103 16.97 21.0421 16.625 21.0417H14V23.6716C13.9996 24.0167 14.0672 24.3585 14.1989 24.6774C14.3306 24.9964 14.5239 25.2863 14.7677 25.5305C15.0114 25.7748 15.3009 25.9686 15.6196 26.101C15.9383 26.2334 16.2799 26.3017 16.625 26.302ZM16.625 19.2878H23.625C23.97 19.2875 24.3116 19.2192 24.6303 19.0869C24.9489 18.9546 25.2384 18.7608 25.4822 18.5166C25.7259 18.2723 25.9192 17.9825 26.0509 17.6636C26.1827 17.3447 26.2503 17.003 26.25 16.658C26.2504 16.3129 26.1828 15.9711 26.0511 15.6521C25.9194 15.3332 25.7261 15.0433 25.4823 14.799C25.2386 14.5548 24.9491 14.3609 24.6304 14.2286C24.3117 14.0962 23.9701 14.0279 23.625 14.0276H16.625C16.2799 14.0279 15.9383 14.0962 15.6196 14.2286C15.3009 14.3609 15.0114 14.5548 14.7677 14.799C14.5239 15.0433 14.3306 15.3332 14.1989 15.6521C14.0672 15.9711 13.9996 16.3129 14 16.658C13.9997 17.003 14.0673 17.3447 14.1991 17.6636C14.3308 17.9825 14.5241 18.2723 14.7678 18.5166C15.0116 18.7608 15.3011 18.9546 15.6197 19.0869C15.9384 19.2192 16.28 19.2875 16.625 19.2878Z",
					"fill": "#ECB22E"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M2.22485e-06 16.658C-0.000318534 17.003 0.0673247 17.3447 0.19907 17.6636C0.330815 17.9825 0.524081 18.2723 0.767835 18.5166C1.01159 18.7608 1.30106 18.9546 1.61971 19.0869C1.93836 19.2192 2.27996 19.2875 2.625 19.2878C2.97004 19.2875 3.31164 19.2192 3.63029 19.0869C3.94895 18.9546 4.23841 18.7608 4.48217 18.5166C4.72592 18.2723 4.91919 17.9825 5.05093 17.6636C5.18268 17.3447 5.25032 17.003 5.25 16.658V14.0276H2.625C2.27988 14.0279 1.9382 14.0962 1.61948 14.2286C1.30077 14.361 1.01126 14.5549 0.76749 14.7992C0.523723 15.0435 0.330477 15.3335 0.198789 15.6525C0.0671016 15.9715 -0.000446885 16.3128 2.22485e-06 16.658ZM7 16.658V23.6716C6.99962 24.0167 7.06721 24.3585 7.19893 24.6774C7.33064 24.9964 7.5239 25.2863 7.76766 25.5305C8.01142 25.7748 8.30091 25.9686 8.6196 26.101C8.93828 26.2334 9.27992 26.3017 9.625 26.302C9.97008 26.3017 10.3117 26.2334 10.6304 26.101C10.9491 25.9686 11.2386 25.7748 11.4823 25.5305C11.7261 25.2863 11.9194 24.9964 12.0511 24.6774C12.1828 24.3585 12.2504 24.0167 12.25 23.6716V16.6584C12.2504 16.3134 12.1828 15.9716 12.0511 15.6526C11.9194 15.3337 11.7261 15.0438 11.4823 14.7995C11.2386 14.5553 10.9491 14.3614 10.6304 14.2291C10.3117 14.0967 9.97008 14.0284 9.625 14.0281C9.27992 14.0284 8.93828 14.0967 8.6196 14.2291C8.30091 14.3614 8.01142 14.5553 7.76766 14.7995C7.5239 15.0438 7.33064 15.3337 7.19893 15.6526C7.06721 15.9716 6.99962 16.3129 7 16.658Z",
					"fill": "#E01E5A"
				},
				"children": []
			}
		]
	},
	name: "Slack"
};
//#endregion
//#region app/components/base/icons/src/public/other/Slack.tsx
var Icon$13 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Slack_default
});
Icon$13.displayName = "Slack";
var Teams_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "28",
			"height": "28",
			"viewBox": "0 0 28 28",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "clip-path": "url(#clip0_20307_29670)" },
			"children": [
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"opacity": "0.1",
						"d": "M9.33332 11.8067V20.4167C9.33204 21.432 9.57619 22.4327 10.045 23.3333H15.8783C16.2912 23.305 16.6807 23.1312 16.9776 22.8428C17.2745 22.5545 17.4596 22.1702 17.5 21.7583V10.5H17.1733H10.64C10.2934 10.5 9.96108 10.6377 9.71603 10.8827C9.47098 11.1278 9.33332 11.4601 9.33332 11.8067Z",
						"fill": "black"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"opacity": "0.1",
						"d": "M16.135 7H12.635C12.8805 7.78672 13.3726 8.47355 14.0386 8.9589C14.7047 9.44425 15.5093 9.70234 16.3333 9.695C16.7301 9.68885 17.1235 9.62197 17.5 9.49667V8.33C17.488 7.97504 17.3392 7.63847 17.0849 7.39061C16.8305 7.14276 16.4902 7.00281 16.135 7Z",
						"fill": "black"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M26.6817 10.5H20.8484L19.2267 11.8183V18.34C19.2846 19.4628 19.7715 20.5204 20.5867 21.2946C21.4019 22.0689 22.4833 22.5005 23.6075 22.5005C24.7318 22.5005 25.8131 22.0689 26.6283 21.2946C27.4436 20.5204 27.9304 19.4628 27.9884 18.34V11.8183C27.9899 11.6458 27.9572 11.4746 27.8923 11.3147C27.8273 11.1548 27.7313 11.0094 27.6098 10.8868C27.4883 10.7643 27.3437 10.667 27.1844 10.6006C27.0251 10.5342 26.8543 10.5 26.6817 10.5Z",
						"fill": "#5059C9"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M23.9167 9.33333C25.5275 9.33333 26.8333 8.0275 26.8333 6.41667C26.8333 4.80584 25.5275 3.5 23.9167 3.5C22.3058 3.5 21 4.80584 21 6.41667C21 8.0275 22.3058 9.33333 23.9167 9.33333Z",
						"fill": "#5059C9"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M10.64 10.5H20.86C21.2065 10.5 21.5389 10.6377 21.7839 10.8827C22.029 11.1278 22.1666 11.4601 22.1666 11.8067V20.4167C22.1666 22.1185 21.4906 23.7506 20.2872 24.9539C19.0839 26.1573 17.4518 26.8333 15.75 26.8333C14.0482 26.8333 12.4161 26.1573 11.2127 24.9539C10.0094 23.7506 9.33331 22.1185 9.33331 20.4167V11.8067C9.33331 11.4601 9.47098 11.1278 9.71603 10.8827C9.96107 10.6377 10.2934 10.5 10.64 10.5Z",
						"fill": "#7B83EB"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M16.3333 9.69477C18.4661 9.69477 20.195 7.96584 20.195 5.8331C20.195 3.70036 18.4661 1.97144 16.3333 1.97144C14.2006 1.97144 12.4717 3.70036 12.4717 5.8331C12.4717 7.96584 14.2006 9.69477 16.3333 9.69477Z",
						"fill": "#7B83EB"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"opacity": "0.5",
						"d": "M9.33332 11.8067V20.4167C9.33204 21.432 9.57619 22.4327 10.045 23.3333H15.8783C16.2912 23.305 16.6807 23.1312 16.9776 22.8428C17.2745 22.5545 17.4596 22.1702 17.5 21.7583V10.5H17.1733H10.64C10.2934 10.5 9.96108 10.6377 9.71603 10.8827C9.47098 11.1278 9.33332 11.4601 9.33332 11.8067Z",
						"fill": "black"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"opacity": "0.5",
						"d": "M16.135 7H12.635C12.8805 7.78672 13.3726 8.47355 14.0386 8.9589C14.7047 9.44425 15.5093 9.70234 16.3333 9.695C16.7301 9.68885 17.1235 9.62197 17.5 9.49667V8.33C17.488 7.97504 17.3392 7.63847 17.0849 7.39061C16.8305 7.14276 16.4902 7.00281 16.135 7Z",
						"fill": "black"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M14.9683 5.83325H1.365C0.611131 5.83325 0 6.44438 0 7.19825V20.8016C0 21.5555 0.611131 22.1666 1.365 22.1666H14.9683C15.7222 22.1666 16.3333 21.5555 16.3333 20.8016V7.19825C16.3333 6.44438 15.7222 5.83325 14.9683 5.83325Z",
						"fill": "#4B53BC"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M11.8767 11.1766H9.08833V18.6666H7.25666V11.1766H4.45667V9.33325H11.8767V11.1766Z",
						"fill": "white"
					},
					"children": []
				}
			]
		}, {
			"type": "element",
			"name": "defs",
			"attributes": {},
			"children": [{
				"type": "element",
				"name": "clipPath",
				"attributes": { "id": "clip0_20307_29670" },
				"children": [{
					"type": "element",
					"name": "rect",
					"attributes": {
						"width": "28",
						"height": "28",
						"fill": "white"
					},
					"children": []
				}]
			}]
		}]
	},
	name: "Teams"
};
//#endregion
//#region app/components/base/icons/src/public/other/Teams.tsx
var Icon$12 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Teams_default
});
Icon$12.displayName = "Teams";
//#endregion
//#region app/components/workflow/nodes/if-else/components/condition-files-list-value.tsx
var ConditionValue$1 = ({ condition }) => {
	const { t } = useTranslation();
	const { variable_selector, comparison_operator: operator, sub_variable_condition } = condition;
	const variableSelector = variable_selector;
	const operatorName = isComparisonOperatorNeedTranslate$1(operator) ? t(`nodes.ifElse.comparisonOperator.${operator}`, { ns: "workflow" }) : operator;
	const formatValue = useCallback((c) => {
		if (comparisonOperatorNotRequireValue$1(c.comparison_operator)) return "";
		return c.value.replace(/\{\{#([^#]*)#\}\}/g, (a, b) => {
			const arr = b.split(".");
			if (isSystemVar(arr)) return `{{${b}}}`;
			return `{{${arr.slice(1).join(".")}}}`;
		});
	}, []);
	const isSelect = useCallback((c) => {
		return c.comparison_operator === ComparisonOperator$1.in || c.comparison_operator === ComparisonOperator$1.notIn;
	}, []);
	const selectName = useCallback((c) => {
		if (c.comparison_operator === ComparisonOperator$1.in || c.comparison_operator === ComparisonOperator$1.notIn) {
			const name = [...FILE_TYPE_OPTIONS, ...TRANSFER_METHOD].filter((item) => item.value === (Array.isArray(c.value) ? c.value[0] : c.value))[0];
			return name ? t(`nodes.ifElse.optionName.${name.i18nKey}`, { ns: "workflow" }).replace(/\{\{#([^#]*)#\}\}/g, (a, b) => {
				const arr = b.split(".");
				if (isSystemVar(arr)) return `{{${b}}}`;
				return `{{${arr.slice(1).join(".")}}}`;
			}) : "";
		}
		return "";
	}, [t]);
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-md bg-workflow-block-parma-bg",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex h-6 items-center px-1 ",
			children: [/* @__PURE__ */ jsx(variable_label_in_node_default, {
				className: "w-0 grow",
				variables: variableSelector,
				notShowFullPath: true
			}), /* @__PURE__ */ jsx("div", {
				className: "mx-1 shrink-0 text-xs font-medium text-text-primary",
				title: operatorName,
				children: operatorName
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "ml-[10px] border-l border-divider-regular pl-[10px]",
			children: sub_variable_condition?.conditions.map((c, index) => {
				const comparisonOperator = c.comparison_operator;
				const comparisonOperatorName = comparisonOperator && isComparisonOperatorNeedTranslate$1(comparisonOperator) ? t(`nodes.ifElse.comparisonOperator.${comparisonOperator}`, { ns: "workflow" }) : comparisonOperator;
				return /* @__PURE__ */ jsxs("div", {
					className: "relative flex h-6 items-center space-x-1",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "system-xs-medium text-text-accent",
							children: c.key
						}),
						/* @__PURE__ */ jsx("div", {
							className: "system-xs-medium text-text-primary",
							children: comparisonOperatorName
						}),
						c.comparison_operator && !isEmptyRelatedOperator(c.comparison_operator) && /* @__PURE__ */ jsx("div", {
							className: "system-xs-regular text-text-secondary",
							children: isSelect(c) ? selectName(c) : formatValue(c)
						}),
						index !== sub_variable_condition.conditions.length - 1 && /* @__PURE__ */ jsx("div", {
							className: "absolute bottom-[-10px] right-1 z-10 text-[10px] font-medium uppercase leading-4 text-text-accent",
							children: t(`nodes.ifElse.${sub_variable_condition.logical_operator}`, { ns: "workflow" })
						})
					]
				}, c.id);
			})
		})]
	});
};
var condition_files_list_value_default = memo(ConditionValue$1);
//#endregion
//#region app/components/workflow/nodes/if-else/components/condition-value.tsx
var ConditionValue = ({ variableSelector, labelName, operator, value }) => {
	const { t } = useTranslation();
	const nodes = useNodes();
	const variableName = labelName || (isSystemVar(variableSelector) ? variableSelector.slice(0).join(".") : variableSelector.slice(1).join("."));
	const operatorName = isComparisonOperatorNeedTranslate$1(operator) ? t(`nodes.ifElse.comparisonOperator.${operator}`, { ns: "workflow" }) : operator;
	const notHasValue = comparisonOperatorNotRequireValue$1(operator);
	const node = nodes.find((n) => n.id === variableSelector[0]);
	const isException = isExceptionVariable(variableName, node?.data.type);
	const formatValue = useMemo(() => {
		if (notHasValue) return "";
		if (Array.isArray(value)) return value[0];
		if (value === true || value === false) return value ? "True" : "False";
		return value.replace(/\{\{#([^#]*)#\}\}/g, (a, b) => {
			const arr = b.split(".");
			if (isSystemVar(arr)) return `{{${b}}}`;
			return `{{${arr.slice(1).join(".")}}}`;
		});
	}, [notHasValue, value]);
	const isSelect = operator === ComparisonOperator$1.in || operator === ComparisonOperator$1.notIn;
	const selectName = useMemo(() => {
		if (isSelect) {
			const name = [...FILE_TYPE_OPTIONS, ...TRANSFER_METHOD].filter((item) => item.value === (Array.isArray(value) ? value[0] : value))[0];
			return name ? t(`nodes.ifElse.optionName.${name.i18nKey}`, { ns: "workflow" }).replace(/\{\{#([^#]*)#\}\}/g, (a, b) => {
				const arr = b.split(".");
				if (isSystemVar(arr)) return `{{${b}}}`;
				return `{{${arr.slice(1).join(".")}}}`;
			}) : "";
		}
		return "";
	}, [
		isSelect,
		t,
		value
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-wrap items-center rounded-md bg-workflow-block-parma-bg",
		children: [
			/* @__PURE__ */ jsx(variable_label_in_text_default, {
				className: "flex min-w-0 shrink-0 items-center border-none bg-transparent shadow-none",
				variables: variableSelector,
				nodeTitle: node?.data.title,
				nodeType: node?.data.type,
				isExceptionVariable: isException,
				notShowFullPath: false
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mx-1 shrink-0 text-xs font-medium text-text-primary",
				title: operatorName,
				children: operatorName
			}),
			!notHasValue && /* @__PURE__ */ jsx("div", {
				className: "grow truncate px-1.5 text-xs leading-6 text-text-secondary",
				title: formatValue,
				children: isSelect ? selectName : formatValue
			})
		]
	});
};
var condition_value_default = memo(ConditionValue);
//#endregion
//#region app/components/workflow/nodes/_base/components/variable-tag.tsx
var VariableTag = ({ valueSelector, varType, isShort, availableNodes }) => {
	const nodes = useNodes();
	const isRagVar = isRagVariableVar(valueSelector);
	const node = useMemo(() => {
		if (isSystemVar(valueSelector)) {
			const startNode = availableNodes?.find((n) => n.data.type === BlockEnum.Start);
			if (startNode) return startNode;
		}
		return getNodeInfoById(availableNodes || nodes, isRagVar ? valueSelector[1] : valueSelector[0]);
	}, [
		nodes,
		valueSelector,
		availableNodes,
		isRagVar
	]);
	const isEnv = isENV(valueSelector);
	const isChatVar = isConversationVar(valueSelector);
	const isGlobal = isGlobalVar(valueSelector);
	const isValid = Boolean(node) || isEnv || isChatVar || isRagVar || isGlobal;
	const isException = isExceptionVariable(isSystemVar(valueSelector) ? valueSelector.slice(0).join(".") : valueSelector.slice(1).join("."), node?.data.type);
	const reactflow = useReactFlow();
	const store = useStoreApi();
	const handleVariableJump = useCallback(() => {
		const { clientWidth, clientHeight } = document.getElementById("workflow-container");
		const { setViewport } = reactflow;
		const { transform } = store.getState();
		const zoom = transform[2];
		const position = node.position;
		setViewport({
			x: (clientWidth - 400 - node.width * zoom) / 2 - position.x * zoom,
			y: (clientHeight - node.height * zoom) / 2 - position.y * zoom,
			zoom: transform[2]
		});
	}, [
		node,
		reactflow,
		store
	]);
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(variable_label_in_select_default, {
		variables: valueSelector,
		nodeType: node?.data.type,
		nodeTitle: node?.data.title,
		variableType: !isShort ? varType : void 0,
		onClick: (e) => {
			if (e.metaKey || e.ctrlKey) {
				e.stopPropagation();
				handleVariableJump();
			}
		},
		errorMsg: !isValid ? t("errorMsg.invalidVariable", { ns: "workflow" }) : void 0,
		isExceptionVariable: isException
	});
};
//#endregion
//#region utils/permission.ts
var hasEditPermissionForDataset = (userId, datasetConfig) => {
	const { createdBy, partialMemberList, permission } = datasetConfig;
	if (permission === DatasetPermission.onlyMe) return userId === createdBy;
	if (permission === DatasetPermission.allTeamMembers) return true;
	if (permission === DatasetPermission.partialMembers) return partialMemberList.includes(userId);
	return false;
};
//#endregion
//#region app/components/datasets/settings/index-method/keyword-number.tsx
var MIN_KEYWORD_NUMBER = 0;
var MAX_KEYWORD_NUMBER = 50;
var KeyWordNumber = ({ keywordNumber, onKeywordNumberChange }) => {
	const { t } = useTranslation();
	const handleInputChange = useCallback((value) => {
		onKeywordNumberChange(value ?? MIN_KEYWORD_NUMBER);
	}, [onKeywordNumberChange]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-x-1",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex grow items-center gap-x-0.5",
				children: [/* @__PURE__ */ jsx("div", {
					className: "truncate text-text-secondary system-xs-medium",
					children: t("form.numberOfKeywords", { ns: "datasetSettings" })
				}), /* @__PURE__ */ jsx(tooltip_default, {
					popupContent: t("form.numberOfKeywords", { ns: "datasetSettings" }),
					children: /* @__PURE__ */ jsx("span", { className: "i-ri-question-line h-3.5 w-3.5 text-text-quaternary" })
				})]
			}),
			/* @__PURE__ */ jsx(Slider, {
				className: "mr-3 w-[206px] shrink-0",
				value: keywordNumber,
				min: MIN_KEYWORD_NUMBER,
				max: MAX_KEYWORD_NUMBER,
				onValueChange: onKeywordNumberChange,
				"aria-label": t("form.numberOfKeywords", { ns: "datasetSettings" })
			}),
			/* @__PURE__ */ jsx(NumberField, {
				className: "w-12 shrink-0",
				min: MIN_KEYWORD_NUMBER,
				max: MAX_KEYWORD_NUMBER,
				value: keywordNumber,
				onValueChange: handleInputChange,
				children: /* @__PURE__ */ jsxs(NumberFieldGroup, {
					size: "regular",
					children: [/* @__PURE__ */ jsx(NumberFieldInput, { size: "regular" }), /* @__PURE__ */ jsxs(NumberFieldControls, { children: [/* @__PURE__ */ jsx(NumberFieldIncrement, { size: "regular" }), /* @__PURE__ */ jsx(NumberFieldDecrement, { size: "regular" })] })]
				})
			})
		]
	});
};
var keyword_number_default = React$1.memo(KeyWordNumber);
//#endregion
//#region app/components/datasets/settings/index-method/index.tsx
var IndexMethod = ({ value, onChange, disabled, currentValue, keywordNumber, onKeywordNumberChange }) => {
	const { t } = useTranslation();
	const economyDomRef = useRef(null);
	const isHoveringEconomy = useHover_default(economyDomRef);
	const isEconomyDisabled = currentValue === IndexingType.QUALIFIED;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-y-2"),
		children: [/* @__PURE__ */ jsx(option_card_default, {
			id: IndexingType.QUALIFIED,
			isActive: value === IndexingType.QUALIFIED,
			onClick: onChange,
			icon: /* @__PURE__ */ jsx(Icon$18, { className: "size-[18px]" }),
			iconActiveColor: "text-util-colors-orange-orange-500",
			title: t("stepTwo.qualified", { ns: "datasetCreation" }),
			description: t("form.indexMethodHighQualityTip", { ns: "datasetSettings" }),
			disabled,
			isRecommended: true,
			effectColor: EffectColor.orange,
			showEffectColor: true,
			className: "gap-x-2"
		}), /* @__PURE__ */ jsxs(PortalToFollowElem, {
			open: isHoveringEconomy,
			offset: 4,
			placement: "right",
			children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, { children: /* @__PURE__ */ jsx(option_card_default, {
				ref: economyDomRef,
				id: IndexingType.ECONOMICAL,
				isActive: value === IndexingType.ECONOMICAL,
				onClick: onChange,
				icon: /* @__PURE__ */ jsx(Icon$19, { className: "size-[18px]" }),
				iconActiveColor: "text-util-colors-indigo-indigo-600",
				title: t("form.indexMethodEconomy", { ns: "datasetSettings" }),
				description: t("form.indexMethodEconomyTip", {
					ns: "datasetSettings",
					count: keywordNumber
				}),
				disabled: disabled || isEconomyDisabled,
				effectColor: EffectColor.indigo,
				showEffectColor: true,
				showChildren: true,
				className: "gap-x-2",
				children: /* @__PURE__ */ jsx(keyword_number_default, {
					keywordNumber,
					onKeywordNumberChange
				})
			}) }), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
				style: { zIndex: 60 },
				children: /* @__PURE__ */ jsx("div", {
					className: "rounded-lg border-components-panel-border bg-components-tooltip-bg p-3 text-xs font-medium text-text-secondary shadow-lg",
					children: t("form.indexMethodChangeToEconomyDisabledTip", { ns: "datasetSettings" })
				})
			})]
		})]
	});
};
//#endregion
//#region app/components/datasets/settings/permission-selector/member-item.tsx
var MemberItem = ({ leftIcon, name, email, isSelected, isMe = false, onClick }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex cursor-pointer items-center gap-2 rounded-lg py-1 pl-2 pr-[10px] hover:bg-state-base-hover",
		onClick,
		children: [
			leftIcon,
			/* @__PURE__ */ jsxs("div", {
				className: "grow",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "system-sm-medium truncate text-text-secondary",
					children: [name, isMe && /* @__PURE__ */ jsx("span", {
						className: "system-xs-regular text-text-tertiary",
						children: t("form.me", { ns: "datasetSettings" })
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "system-xs-regular truncate text-text-tertiary",
					children: email
				})]
			}),
			isSelected && /* @__PURE__ */ jsx(s7, { className: cn("size-4 shrink-0 text-text-accent", isMe && "opacity-30") })
		]
	});
};
var member_item_default = React$1.memo(MemberItem);
//#endregion
//#region app/components/datasets/settings/permission-selector/permission-item.tsx
var PermissionItem = ({ leftIcon, text, onClick, isSelected }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex cursor-pointer items-center gap-x-1 rounded-lg px-2 py-1 hover:bg-state-base-hover",
		onClick,
		children: [
			leftIcon,
			/* @__PURE__ */ jsx("div", {
				className: "system-md-regular grow px-1 text-text-secondary",
				children: text
			}),
			isSelected && /* @__PURE__ */ jsx(s7, { className: "size-4 text-text-accent" })
		]
	});
};
var permission_item_default = React$1.memo(PermissionItem);
//#endregion
//#region app/components/datasets/settings/permission-selector/index.tsx
var PermissionSelector = ({ disabled, permission, value, memberList, onChange, onMemberSelect }) => {
	const { t } = useTranslation();
	const userProfile = useSelector((state) => state.userProfile);
	const [open, setOpen] = useState(false);
	const [keywords, setKeywords] = useState("");
	const [searchKeywords, setSearchKeywords] = useState("");
	const { run: handleSearch } = useDebounceFn(() => {
		setSearchKeywords(keywords);
	}, { wait: 500 });
	const handleKeywordsChange = (value) => {
		setKeywords(value);
		handleSearch();
	};
	const selectMember = useCallback((member) => {
		if (value.includes(member.id)) onMemberSelect(value.filter((v) => v !== member.id));
		else onMemberSelect([...value, member.id]);
	}, [value, onMemberSelect]);
	const selectedMembers = useMemo(() => {
		return [userProfile, ...memberList.filter((member) => member.id !== userProfile.id).filter((member) => value.includes(member.id))];
	}, [
		userProfile,
		value,
		memberList
	]);
	const showMe = useMemo(() => {
		return userProfile.name.includes(searchKeywords) || userProfile.email.includes(searchKeywords);
	}, [searchKeywords, userProfile]);
	const filteredMemberList = useMemo(() => {
		return memberList.filter((member) => (member.name.includes(searchKeywords) || member.email.includes(searchKeywords)) && member.id !== userProfile.id && [
			"owner",
			"admin",
			"editor",
			"dataset_operator"
		].includes(member.role));
	}, [
		memberList,
		searchKeywords,
		userProfile
	]);
	const onSelectOnlyMe = useCallback(() => {
		onChange(DatasetPermission.onlyMe);
		setOpen(false);
	}, [onChange]);
	const onSelectAllMembers = useCallback(() => {
		onChange(DatasetPermission.allTeamMembers);
		setOpen(false);
	}, [onChange]);
	const onSelectPartialMembers = useCallback(() => {
		onChange(DatasetPermission.partialMembers);
		onMemberSelect([userProfile.id]);
	}, [
		onChange,
		onMemberSelect,
		userProfile
	]);
	const isOnlyMe = permission === DatasetPermission.onlyMe;
	const isAllTeamMembers = permission === DatasetPermission.allTeamMembers;
	const isPartialMembers = permission === DatasetPermission.partialMembers;
	const selectedMemberNames = selectedMembers.map((member) => member.name).join(", ");
	return /* @__PURE__ */ jsx(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-start",
		offset: 4,
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
				onClick: () => !disabled && setOpen((v) => !v),
				className: "block",
				children: /* @__PURE__ */ jsxs("div", {
					className: cn("flex cursor-pointer items-center gap-x-0.5 rounded-lg bg-components-input-bg-normal px-2 py-1 hover:bg-state-base-hover-alt", open && "bg-state-base-hover-alt", disabled && "!cursor-not-allowed !bg-components-input-bg-disabled hover:!bg-components-input-bg-disabled"),
					children: [
						isOnlyMe && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
							className: "flex size-6 shrink-0 items-center justify-center",
							children: /* @__PURE__ */ jsx(Avatar, {
								avatar: userProfile.avatar_url,
								name: userProfile.name,
								size: "xs"
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "system-sm-regular grow p-1 text-components-input-text-filled",
							children: t("form.permissionsOnlyMe", { ns: "datasetSettings" })
						})] }),
						isAllTeamMembers && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
							className: "flex size-6 shrink-0 items-center justify-center",
							children: /* @__PURE__ */ jsx(Nc, { className: "size-4 text-text-secondary" })
						}), /* @__PURE__ */ jsx("div", {
							className: "system-sm-regular grow p-1 text-components-input-text-filled",
							children: t("form.permissionsAllMember", { ns: "datasetSettings" })
						})] }),
						isPartialMembers && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
							className: "relative flex size-6 shrink-0 items-center justify-center",
							children: [selectedMembers.length === 1 && /* @__PURE__ */ jsx(Avatar, {
								avatar: selectedMembers[0].avatar_url,
								name: selectedMembers[0].name,
								size: "xs"
							}), selectedMembers.length >= 2 && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Avatar, {
								avatar: selectedMembers[0].avatar_url,
								name: selectedMembers[0].name,
								className: "absolute left-0 top-0 z-0",
								size: "xxs"
							}), /* @__PURE__ */ jsx(Avatar, {
								avatar: selectedMembers[1].avatar_url,
								name: selectedMembers[1].name,
								className: "absolute bottom-0 right-0 z-10",
								size: "xxs"
							})] })]
						}), /* @__PURE__ */ jsx("div", {
							title: selectedMemberNames,
							className: "system-sm-regular grow truncate p-1 text-components-input-text-filled",
							children: selectedMemberNames
						})] }),
						/* @__PURE__ */ jsx(f1, { className: cn("h-4 w-4 shrink-0 text-text-quaternary group-hover:text-text-secondary", open && "text-text-secondary", disabled && "!text-components-input-text-placeholder") })
					]
				})
			}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
				className: "z-[1002]",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative w-[480px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg shadow-shadow-shadow-5",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "p-1",
						children: [
							/* @__PURE__ */ jsx(permission_item_default, {
								leftIcon: /* @__PURE__ */ jsx(Avatar, {
									avatar: userProfile.avatar_url,
									name: userProfile.name,
									className: "shrink-0",
									size: "sm"
								}),
								text: t("form.permissionsOnlyMe", { ns: "datasetSettings" }),
								onClick: onSelectOnlyMe,
								isSelected: isOnlyMe
							}),
							/* @__PURE__ */ jsx(permission_item_default, {
								leftIcon: /* @__PURE__ */ jsx("div", {
									className: "flex size-6 shrink-0 items-center justify-center",
									children: /* @__PURE__ */ jsx(Nc, { className: "size-4 text-text-secondary" })
								}),
								text: t("form.permissionsAllMember", { ns: "datasetSettings" }),
								onClick: onSelectAllMembers,
								isSelected: isAllTeamMembers
							}),
							/* @__PURE__ */ jsx(permission_item_default, {
								leftIcon: /* @__PURE__ */ jsx("div", {
									className: "flex size-6 shrink-0 items-center justify-center",
									children: /* @__PURE__ */ jsx(Km, { className: "size-4 text-text-secondary" })
								}),
								text: t("form.permissionsInvitedMembers", { ns: "datasetSettings" }),
								onClick: onSelectPartialMembers,
								isSelected: isPartialMembers
							})
						]
					}), isPartialMembers && /* @__PURE__ */ jsxs("div", {
						className: "max-h-[360px] overflow-y-auto border-t-[1px] border-divider-regular pb-1 pl-1 pr-1",
						children: [/* @__PURE__ */ jsx("div", {
							className: "sticky left-0 top-0 z-10 bg-components-panel-on-panel-item-bg p-2 pb-1",
							children: /* @__PURE__ */ jsx(Input$1, {
								showLeftIcon: true,
								showClearIcon: true,
								value: keywords,
								onChange: (e) => handleKeywordsChange(e.target.value),
								onClear: () => handleKeywordsChange("")
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col p-1",
							children: [
								showMe && /* @__PURE__ */ jsx(member_item_default, {
									leftIcon: /* @__PURE__ */ jsx(Avatar, {
										avatar: userProfile.avatar_url,
										name: userProfile.name,
										className: "shrink-0",
										size: "sm"
									}),
									name: userProfile.name,
									email: userProfile.email,
									isSelected: true,
									isMe: true
								}),
								filteredMemberList.map((member) => /* @__PURE__ */ jsx(member_item_default, {
									leftIcon: /* @__PURE__ */ jsx(Avatar, {
										avatar: member.avatar_url,
										name: member.name,
										className: "shrink-0",
										size: "sm"
									}),
									name: member.name,
									email: member.email,
									isSelected: value.includes(member.id),
									onClick: selectMember.bind(null, member)
								})),
								!showMe && filteredMemberList.length === 0 && /* @__PURE__ */ jsx("div", {
									className: "system-xs-regular flex items-center justify-center whitespace-pre-wrap px-1 py-6 text-center text-text-tertiary",
									children: t("form.onSearchResults", { ns: "datasetSettings" })
								})
							]
						})]
					})]
				})
			})]
		})
	});
};
//#endregion
//#region app/components/datasets/external-knowledge-base/create/RetrievalSettings.tsx
var RetrievalSettings = ({ topK, scoreThreshold, scoreThresholdEnabled, onChange, isInHitTesting = false, isInRetrievalSetting = false }) => {
	const { t } = useTranslation();
	const handleScoreThresholdChange = (enabled) => {
		onChange({ score_threshold_enabled: enabled });
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-2 self-stretch", isInRetrievalSetting && "w-full max-w-[480px]"),
		children: [!isInHitTesting && !isInRetrievalSetting && /* @__PURE__ */ jsx("div", {
			className: "flex h-7 flex-col gap-2 self-stretch pt-1",
			children: /* @__PURE__ */ jsx("label", {
				className: "system-sm-semibold text-text-secondary",
				children: t("retrievalSettings", { ns: "dataset" })
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: cn("flex gap-4 self-stretch", {
				"flex-col": isInHitTesting,
				"flex-row": isInRetrievalSetting,
				"flex-col sm:flex-row": !isInHitTesting && !isInRetrievalSetting
			}),
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex grow flex-col gap-1",
				children: /* @__PURE__ */ jsx(top_k_item_default, {
					className: "grow",
					value: topK,
					onChange: (_key, v) => onChange({ top_k: v }),
					enable: true
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "flex grow flex-col gap-1",
				children: /* @__PURE__ */ jsx(score_threshold_item_default, {
					className: "grow",
					value: scoreThreshold,
					onChange: (_key, v) => onChange({ score_threshold: v }),
					enable: scoreThresholdEnabled,
					hasSwitch: true,
					onSwitchChange: (_key, v) => handleScoreThresholdChange(v)
				})
			})]
		})]
	});
};
//#endregion
//#region app/components/app/configuration/dataset-config/settings-modal/retrieval-section.tsx
var ExternalRetrievalSection = ({ rowClass, labelClass, t, topK, scoreThreshold, scoreThresholdEnabled, onExternalSettingChange, currentDataset }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
	/* @__PURE__ */ jsx("div", {
		className: rowClass,
		children: /* @__PURE__ */ jsx(Divider$1, {})
	}),
	/* @__PURE__ */ jsxs("div", {
		className: rowClass,
		children: [/* @__PURE__ */ jsx("div", {
			className: labelClass,
			children: /* @__PURE__ */ jsx("div", {
				className: "system-sm-semibold text-text-secondary",
				children: t("form.retrievalSetting.title", { ns: "datasetSettings" })
			})
		}), /* @__PURE__ */ jsx(RetrievalSettings, {
			topK,
			scoreThreshold,
			scoreThresholdEnabled,
			onChange: onExternalSettingChange,
			isInRetrievalSetting: true
		})]
	}),
	/* @__PURE__ */ jsx("div", {
		className: rowClass,
		children: /* @__PURE__ */ jsx(Divider$1, {})
	}),
	/* @__PURE__ */ jsxs("div", {
		className: rowClass,
		children: [/* @__PURE__ */ jsx("div", {
			className: labelClass,
			children: /* @__PURE__ */ jsx("div", {
				className: "system-sm-semibold text-text-secondary",
				children: t("form.externalKnowledgeAPI", { ns: "datasetSettings" })
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "w-full max-w-[480px]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex h-full items-center gap-1 rounded-lg bg-components-input-bg-normal px-3 py-2",
				children: [
					/* @__PURE__ */ jsx(Icon$36, { className: "h-4 w-4 text-text-secondary" }),
					/* @__PURE__ */ jsx("div", {
						className: "system-sm-medium overflow-hidden text-ellipsis text-text-secondary",
						children: currentDataset?.external_knowledge_info.external_knowledge_api_name
					}),
					/* @__PURE__ */ jsx("div", {
						className: "system-xs-regular text-text-tertiary",
						children: "·"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "system-xs-regular text-text-tertiary",
						children: currentDataset?.external_knowledge_info.external_knowledge_api_endpoint
					})
				]
			})
		})]
	}),
	/* @__PURE__ */ jsxs("div", {
		className: rowClass,
		children: [/* @__PURE__ */ jsx("div", {
			className: labelClass,
			children: /* @__PURE__ */ jsx("div", {
				className: "system-sm-semibold text-text-secondary",
				children: t("form.externalKnowledgeID", { ns: "datasetSettings" })
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "w-full max-w-[480px]",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex h-full items-center gap-1 rounded-lg bg-components-input-bg-normal px-3 py-2",
				children: /* @__PURE__ */ jsx("div", {
					className: "system-xs-regular text-text-tertiary",
					children: currentDataset?.external_knowledge_info.external_knowledge_id
				})
			})
		})]
	}),
	/* @__PURE__ */ jsx("div", {
		className: rowClass,
		children: /* @__PURE__ */ jsx(Divider$1, {})
	})
] });
var InternalRetrievalSection = ({ rowClass, labelClass, t, indexMethod, retrievalConfig, showMultiModalTip, onRetrievalConfigChange, docLink }) => /* @__PURE__ */ jsxs("div", {
	className: rowClass,
	children: [/* @__PURE__ */ jsx("div", {
		className: cn(labelClass, "w-auto min-w-[168px]"),
		children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
			className: "system-sm-semibold text-text-secondary",
			children: t("form.retrievalSetting.title", { ns: "datasetSettings" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "text-xs font-normal leading-[18px] text-text-tertiary",
			children: [/* @__PURE__ */ jsx("a", {
				target: "_blank",
				rel: "noopener noreferrer",
				href: docLink("/use-dify/knowledge/create-knowledge/setting-indexing-methods"),
				className: "text-text-accent",
				children: t("form.retrievalSetting.learnMore", { ns: "datasetSettings" })
			}), t("form.retrievalSetting.description", { ns: "datasetSettings" })]
		})] })
	}), /* @__PURE__ */ jsx("div", { children: indexMethod === IndexingType.QUALIFIED ? /* @__PURE__ */ jsx(retrieval_method_config_default, {
		value: retrievalConfig,
		onChange: onRetrievalConfigChange,
		showMultiModalTip
	}) : /* @__PURE__ */ jsx(economical_retrieval_method_config_default, {
		value: retrievalConfig,
		onChange: onRetrievalConfigChange
	}) })]
});
var RetrievalSection = (props) => {
	if (props.isExternal) {
		const { rowClass, labelClass, t, topK, scoreThreshold, scoreThresholdEnabled, onExternalSettingChange, currentDataset } = props;
		return /* @__PURE__ */ jsx(ExternalRetrievalSection, {
			rowClass,
			labelClass,
			t,
			topK,
			scoreThreshold,
			scoreThresholdEnabled,
			onExternalSettingChange,
			currentDataset
		});
	}
	const { rowClass, labelClass, t, indexMethod, retrievalConfig, showMultiModalTip, onRetrievalConfigChange, docLink } = props;
	return /* @__PURE__ */ jsx(InternalRetrievalSection, {
		rowClass,
		labelClass,
		t,
		indexMethod,
		retrievalConfig,
		showMultiModalTip,
		onRetrievalConfigChange,
		docLink
	});
};
var RetrievalChangeTip = ({ visible, message, onDismiss }) => {
	if (!visible) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "absolute bottom-[76px] left-[30px] right-[30px] z-10 flex h-10 items-center justify-between rounded-lg border border-[#FEF0C7] bg-[#FFFAEB] px-3 shadow-lg",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center",
			children: [/* @__PURE__ */ jsx(Icon$30, { className: "mr-1 h-3 w-3 text-[#F79009]" }), /* @__PURE__ */ jsx("div", {
				className: "text-xs font-medium leading-[18px] text-gray-700",
				children: message
			})]
		}), /* @__PURE__ */ jsx("button", {
			type: "button",
			className: "cursor-pointer p-1",
			onClick: (event) => {
				onDismiss();
				event.stopPropagation();
			},
			"aria-label": "close-retrieval-change-tip",
			children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-gray-500" })
		})]
	});
};
//#endregion
//#region app/components/app/configuration/dataset-config/settings-modal/index.tsx
var rowClass = `
  flex justify-between py-4 flex-wrap gap-y-2
`;
var labelClass = `
  flex w-[168px] shrink-0
`;
var SettingsModal = ({ currentDataset, onCancel, onSave }) => {
	const { data: embeddingModelList } = useModelList(ModelTypeEnum.textEmbedding);
	const { data: rerankModelList } = useModelList(ModelTypeEnum.rerank);
	const { t } = useTranslation();
	const docLink = useDocLink();
	const { notify } = useToastContext();
	const ref = useRef(null);
	const isExternal = currentDataset.provider === "external";
	const { setShowAccountSettingModal } = useModalContext();
	const [loading, setLoading] = useState(false);
	const { isCurrentWorkspaceDatasetOperator } = useAppContext();
	const [localeCurrentDataset, setLocaleCurrentDataset] = useState({ ...currentDataset });
	const [topK, setTopK] = useState(localeCurrentDataset?.external_retrieval_model.top_k ?? 2);
	const [scoreThreshold, setScoreThreshold] = useState(localeCurrentDataset?.external_retrieval_model.score_threshold ?? .5);
	const [scoreThresholdEnabled, setScoreThresholdEnabled] = useState(localeCurrentDataset?.external_retrieval_model.score_threshold_enabled ?? false);
	const [selectedMemberIDs, setSelectedMemberIDs] = useState(currentDataset.partial_member_list || []);
	const [memberList, setMemberList] = useState([]);
	const { data: membersData } = useMembers();
	const [indexMethod, setIndexMethod] = useState(currentDataset.indexing_technique);
	const [retrievalConfig, setRetrievalConfig] = useState(localeCurrentDataset?.retrieval_model_dict);
	const [keywordNumber, setKeywordNumber] = useState(currentDataset.keyword_number ?? 10);
	const handleValueChange = (type, value) => {
		setLocaleCurrentDataset({
			...localeCurrentDataset,
			[type]: value
		});
	};
	const [isHideChangedTip, setIsHideChangedTip] = useState(false);
	const isRetrievalChanged = !isEqual(retrievalConfig, localeCurrentDataset?.retrieval_model_dict) || indexMethod !== localeCurrentDataset?.indexing_technique;
	const handleSettingsChange = (data) => {
		if (data.top_k !== void 0) setTopK(data.top_k);
		if (data.score_threshold !== void 0) setScoreThreshold(data.score_threshold);
		if (data.score_threshold_enabled !== void 0) setScoreThresholdEnabled(data.score_threshold_enabled);
		setLocaleCurrentDataset({
			...localeCurrentDataset,
			external_retrieval_model: {
				...localeCurrentDataset?.external_retrieval_model,
				...data
			}
		});
	};
	const handleSave = async () => {
		if (loading) return;
		if (!localeCurrentDataset.name?.trim()) {
			notify({
				type: "error",
				message: t("form.nameError", { ns: "datasetSettings" })
			});
			return;
		}
		if (!isReRankModelSelected({
			rerankModelList,
			retrievalConfig,
			indexMethod
		})) {
			notify({
				type: "error",
				message: t("datasetConfig.rerankModelRequired", { ns: "appDebug" })
			});
			return;
		}
		try {
			setLoading(true);
			const { id, name, description, permission } = localeCurrentDataset;
			const requestParams = {
				datasetId: id,
				body: {
					name,
					description,
					permission,
					indexing_technique: indexMethod,
					keyword_number: keywordNumber,
					retrieval_model: {
						...retrievalConfig,
						score_threshold: retrievalConfig.score_threshold_enabled ? retrievalConfig.score_threshold : 0
					},
					embedding_model: localeCurrentDataset.embedding_model,
					embedding_model_provider: localeCurrentDataset.embedding_model_provider,
					...isExternal && {
						external_knowledge_id: currentDataset.external_knowledge_info.external_knowledge_id,
						external_knowledge_api_id: currentDataset.external_knowledge_info.external_knowledge_api_id,
						external_retrieval_model: {
							top_k: topK,
							score_threshold: scoreThreshold,
							score_threshold_enabled: scoreThresholdEnabled
						}
					}
				}
			};
			if (permission === DatasetPermission.partialMembers) requestParams.body.partial_member_list = selectedMemberIDs.map((id) => {
				return {
					user_id: id,
					role: memberList.find((member) => member.id === id)?.role
				};
			});
			await updateDatasetSetting(requestParams);
			notify({
				type: "success",
				message: t("actionMsg.modifiedSuccessfully", { ns: "common" })
			});
			onSave({
				...localeCurrentDataset,
				indexing_technique: indexMethod,
				retrieval_model_dict: retrievalConfig
			});
		} catch {
			notify({
				type: "error",
				message: t("actionMsg.modifiedUnsuccessfully", { ns: "common" })
			});
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		if (!membersData?.accounts) setMemberList([]);
		else setMemberList(membersData.accounts);
	}, [membersData]);
	const showMultiModalTip = useMemo(() => {
		return checkShowMultiModalTip({
			embeddingModel: {
				provider: localeCurrentDataset.embedding_model_provider,
				model: localeCurrentDataset.embedding_model
			},
			rerankingEnable: retrievalConfig.reranking_enable,
			rerankModel: {
				rerankingProviderName: retrievalConfig.reranking_model.reranking_provider_name,
				rerankingModelName: retrievalConfig.reranking_model.reranking_model_name
			},
			indexMethod,
			embeddingModelList,
			rerankModelList
		});
	}, [
		localeCurrentDataset.embedding_model,
		localeCurrentDataset.embedding_model_provider,
		retrievalConfig.reranking_enable,
		retrievalConfig.reranking_model,
		indexMethod,
		embeddingModelList,
		rerankModelList
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex w-full flex-col overflow-hidden rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-xl",
		style: { height: "calc(100vh - 72px)" },
		ref,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex h-14 shrink-0 items-center justify-between border-b border-divider-regular pl-6 pr-5",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex flex-col text-base font-semibold text-text-primary",
					children: /* @__PURE__ */ jsx("div", {
						className: "leading-6",
						children: t("title", { ns: "datasetSettings" })
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "flex items-center",
					children: /* @__PURE__ */ jsx("div", {
						onClick: onCancel,
						className: "flex h-6 w-6 cursor-pointer items-center justify-center",
						children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-text-tertiary" })
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "overflow-y-auto border-b border-divider-regular p-6 pb-[68px] pt-5",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: cn(rowClass, "items-center"),
						children: [/* @__PURE__ */ jsx("div", {
							className: labelClass,
							children: /* @__PURE__ */ jsx("div", {
								className: "text-text-secondary system-sm-semibold",
								children: t("form.name", { ns: "datasetSettings" })
							})
						}), /* @__PURE__ */ jsx(Input$1, {
							value: localeCurrentDataset.name,
							onChange: (e) => handleValueChange("name", e.target.value),
							className: "block h-9",
							placeholder: t("form.namePlaceholder", { ns: "datasetSettings" }) || ""
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: cn(rowClass),
						children: [/* @__PURE__ */ jsx("div", {
							className: labelClass,
							children: /* @__PURE__ */ jsx("div", {
								className: "text-text-secondary system-sm-semibold",
								children: t("form.desc", { ns: "datasetSettings" })
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "w-full",
							children: /* @__PURE__ */ jsx(Textarea, {
								value: localeCurrentDataset.description || "",
								onChange: (e) => handleValueChange("description", e.target.value),
								className: "resize-none",
								placeholder: t("form.descPlaceholder", { ns: "datasetSettings" }) || ""
							})
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: rowClass,
						children: [/* @__PURE__ */ jsx("div", {
							className: labelClass,
							children: /* @__PURE__ */ jsx("div", {
								className: "text-text-secondary system-sm-semibold",
								children: t("form.permissions", { ns: "datasetSettings" })
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "w-full",
							children: /* @__PURE__ */ jsx(PermissionSelector, {
								disabled: !localeCurrentDataset?.embedding_available || isCurrentWorkspaceDatasetOperator,
								permission: localeCurrentDataset.permission,
								value: selectedMemberIDs,
								onChange: (v) => handleValueChange("permission", v),
								onMemberSelect: setSelectedMemberIDs,
								memberList
							})
						})]
					}),
					!!(currentDataset && currentDataset.indexing_technique) && /* @__PURE__ */ jsxs("div", {
						className: cn(rowClass),
						children: [/* @__PURE__ */ jsx("div", {
							className: labelClass,
							children: /* @__PURE__ */ jsx("div", {
								className: "text-text-secondary system-sm-semibold",
								children: t("form.indexMethod", { ns: "datasetSettings" })
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "grow",
							children: /* @__PURE__ */ jsx(IndexMethod, {
								disabled: !localeCurrentDataset?.embedding_available,
								value: indexMethod,
								onChange: setIndexMethod,
								currentValue: currentDataset.indexing_technique,
								keywordNumber,
								onKeywordNumberChange: setKeywordNumber
							})
						})]
					}),
					indexMethod === IndexingType.QUALIFIED && /* @__PURE__ */ jsxs("div", {
						className: cn(rowClass),
						children: [/* @__PURE__ */ jsx("div", {
							className: labelClass,
							children: /* @__PURE__ */ jsx("div", {
								className: "text-text-secondary system-sm-semibold",
								children: t("form.embeddingModel", { ns: "datasetSettings" })
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "w-full",
							children: [/* @__PURE__ */ jsx("div", {
								className: "h-8 w-full rounded-lg bg-components-input-bg-normal opacity-60",
								children: /* @__PURE__ */ jsx(ModelSelector, {
									readonly: true,
									defaultModel: {
										provider: localeCurrentDataset.embedding_model_provider,
										model: localeCurrentDataset.embedding_model
									},
									modelList: embeddingModelList
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-2 w-full text-xs leading-6 text-text-tertiary",
								children: [t("form.embeddingModelTip", { ns: "datasetSettings" }), /* @__PURE__ */ jsx("span", {
									className: "cursor-pointer text-text-accent",
									onClick: () => setShowAccountSettingModal({ payload: ACCOUNT_SETTING_TAB.PROVIDER }),
									children: t("form.embeddingModelTipLink", { ns: "datasetSettings" })
								})]
							})]
						})]
					}),
					isExternal ? /* @__PURE__ */ jsx(RetrievalSection, {
						isExternal: true,
						rowClass,
						labelClass,
						t,
						topK,
						scoreThreshold,
						scoreThresholdEnabled,
						onExternalSettingChange: handleSettingsChange,
						currentDataset
					}) : /* @__PURE__ */ jsx(RetrievalSection, {
						isExternal: false,
						rowClass,
						labelClass,
						t,
						indexMethod,
						retrievalConfig,
						showMultiModalTip,
						onRetrievalConfigChange: setRetrievalConfig,
						docLink
					})
				]
			}),
			/* @__PURE__ */ jsx(RetrievalChangeTip, {
				visible: isRetrievalChanged && !isHideChangedTip,
				message: t("datasetConfig.retrieveChangeTip", { ns: "appDebug" }),
				onDismiss: () => setIsHideChangedTip(true)
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "sticky bottom-0 z-[5] flex w-full justify-end border-t border-divider-regular bg-background-section px-6 py-4",
				children: [/* @__PURE__ */ jsx(Button, {
					onClick: onCancel,
					className: "mr-2",
					children: t("operation.cancel", { ns: "common" })
				}), /* @__PURE__ */ jsx(Button, {
					variant: "primary",
					disabled: loading,
					onClick: handleSave,
					children: t("operation.save", { ns: "common" })
				})]
			})
		]
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/types.ts
var LogicalOperator = /* @__PURE__ */ function(LogicalOperator) {
	LogicalOperator["and"] = "and";
	LogicalOperator["or"] = "or";
	return LogicalOperator;
}({});
var ComparisonOperator = /* @__PURE__ */ function(ComparisonOperator) {
	ComparisonOperator["contains"] = "contains";
	ComparisonOperator["notContains"] = "not contains";
	ComparisonOperator["startWith"] = "start with";
	ComparisonOperator["endWith"] = "end with";
	ComparisonOperator["is"] = "is";
	ComparisonOperator["isNot"] = "is not";
	ComparisonOperator["empty"] = "empty";
	ComparisonOperator["notEmpty"] = "not empty";
	ComparisonOperator["equal"] = "=";
	ComparisonOperator["notEqual"] = "≠";
	ComparisonOperator["largerThan"] = ">";
	ComparisonOperator["lessThan"] = "<";
	ComparisonOperator["largerThanOrEqual"] = "≥";
	ComparisonOperator["lessThanOrEqual"] = "≤";
	ComparisonOperator["isNull"] = "is null";
	ComparisonOperator["isNotNull"] = "is not null";
	ComparisonOperator["in"] = "in";
	ComparisonOperator["notIn"] = "not in";
	ComparisonOperator["allOf"] = "all of";
	ComparisonOperator["exists"] = "exists";
	ComparisonOperator["notExists"] = "not exists";
	ComparisonOperator["before"] = "before";
	ComparisonOperator["after"] = "after";
	return ComparisonOperator;
}({});
var MetadataFilteringModeEnum = /* @__PURE__ */ function(MetadataFilteringModeEnum) {
	MetadataFilteringModeEnum["disabled"] = "disabled";
	MetadataFilteringModeEnum["automatic"] = "automatic";
	MetadataFilteringModeEnum["manual"] = "manual";
	return MetadataFilteringModeEnum;
}({});
var MetadataFilteringVariableType = /* @__PURE__ */ function(MetadataFilteringVariableType) {
	MetadataFilteringVariableType["string"] = "string";
	MetadataFilteringVariableType["number"] = "number";
	MetadataFilteringVariableType["time"] = "time";
	MetadataFilteringVariableType["select"] = "select";
	return MetadataFilteringVariableType;
}({});
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/metadata-icon.tsx
var MetadataIcon = ({ type, className }) => {
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		(type === MetadataFilteringVariableType.string || type === MetadataFilteringVariableType.select) && /* @__PURE__ */ jsx(zb, { className: cn("h-3.5 w-3.5", className) }),
		type === MetadataFilteringVariableType.number && /* @__PURE__ */ jsx(_c, { className: cn("h-3.5 w-3.5", className) }),
		type === MetadataFilteringVariableType.time && /* @__PURE__ */ jsx(gB, { className: cn("h-3.5 w-3.5", className) })
	] });
};
var metadata_icon_default = memo(MetadataIcon);
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/add-condition.tsx
var AddCondition = ({ metadataList, handleAddCondition }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const [searchText, setSearchText] = useState("");
	const filteredMetadataList = useMemo(() => {
		return metadataList?.filter((metadata) => metadata.name.includes(searchText));
	}, [metadataList, searchText]);
	const handleAddConditionWrapped = useCallback((item) => {
		handleAddCondition?.(item);
		setOpen(false);
	}, [handleAddCondition]);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-start",
		offset: {
			mainAxis: 3,
			crossAxis: 0
		},
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen(!open),
			children: /* @__PURE__ */ jsxs(Button, {
				size: "small",
				variant: "secondary",
				children: [/* @__PURE__ */ jsx(p, { className: "h-3.5 w-3.5" }), t("nodes.knowledgeRetrieval.metadata.panel.add", { ns: "workflow" })]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "w-[320px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg",
				children: [/* @__PURE__ */ jsx("div", {
					className: "p-2 pb-1",
					children: /* @__PURE__ */ jsx(Input$1, {
						showLeftIcon: true,
						placeholder: t("nodes.knowledgeRetrieval.metadata.panel.search", { ns: "workflow" }),
						value: searchText,
						onChange: (e) => setSearchText(e.target.value)
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "p-1",
					children: filteredMetadataList?.map((metadata) => /* @__PURE__ */ jsxs("div", {
						className: "system-sm-medium flex h-6 cursor-pointer items-center rounded-md px-3 text-text-secondary hover:bg-state-base-hover",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mr-1 p-[1px]",
								children: /* @__PURE__ */ jsx(metadata_icon_default, { type: metadata.type })
							}),
							/* @__PURE__ */ jsx("div", {
								className: "grow truncate",
								title: metadata.name,
								onClick: () => handleAddConditionWrapped(metadata),
								children: metadata.name
							}),
							/* @__PURE__ */ jsx("div", {
								className: "system-xs-regular shrink-0 text-text-tertiary",
								children: metadata.type
							})
						]
					}, metadata.name))
				})]
			})
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/condition-list/condition-date.tsx
var import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min(), 1);
var ConditionDate = ({ value, onChange }) => {
	const { t } = useTranslation();
	const { userProfile: { timezone } } = useAppContext();
	const handleDateChange = useCallback((date) => {
		if (date) onChange(date.unix());
		else onChange();
	}, [onChange]);
	const renderTrigger = useCallback(({ handleClickTrigger }) => {
		return /* @__PURE__ */ jsxs("div", {
			className: "group flex items-center",
			onClick: handleClickTrigger,
			children: [
				/* @__PURE__ */ jsx("div", {
					className: cn("system-sm-regular mr-0.5 flex h-6 grow cursor-pointer items-center px-1", value ? "text-text-secondary" : "text-text-tertiary"),
					children: value ? (0, import_dayjs_min.default)(value * 1e3).tz(timezone).format("MMMM DD YYYY HH:mm A") : t("nodes.knowledgeRetrieval.metadata.panel.datePlaceholder", { ns: "workflow" })
				}),
				!!value && /* @__PURE__ */ jsx(S7, {
					className: cn("hidden h-4 w-4 shrink-0 cursor-pointer hover:text-components-input-text-filled group-hover:block", value && "text-text-quaternary"),
					onClick: (e) => {
						e.stopPropagation();
						handleDateChange();
					}
				}),
				/* @__PURE__ */ jsx(R5, { className: cn("block h-4 w-4 shrink-0", value ? "text-text-quaternary" : "text-text-tertiary", value && "group-hover:hidden") })
			]
		});
	}, [
		value,
		handleDateChange,
		timezone,
		t
	]);
	return /* @__PURE__ */ jsx("div", {
		className: "h-8 px-2 py-1",
		children: /* @__PURE__ */ jsx(DatePicker, {
			timezone,
			value: value ? (0, import_dayjs_min.default)(value * 1e3) : void 0,
			onChange: handleDateChange,
			onClear: handleDateChange,
			renderTrigger
		})
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/condition-list/condition-common-variable-selector.tsx
var ConditionCommonVariableSelector = ({ variables = [], value, onChange, varType }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const selected = variables.find((v) => v.value === value);
	const handleChange = useCallback((v) => {
		onChange(v);
		setOpen(false);
	}, [onChange]);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-start",
		offset: {
			mainAxis: 4,
			crossAxis: 0
		},
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			asChild: true,
			onClick: () => {
				if (!variables.length) return;
				setOpen(!open);
			},
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex h-6 grow cursor-pointer items-center",
				children: [selected && /* @__PURE__ */ jsxs("div", {
					className: "system-xs-medium inline-flex h-6 items-center rounded-md border-[0.5px] border-components-panel-border-subtle bg-components-badge-white-to-dark pl-[5px] pr-1.5 text-text-secondary shadow-xs",
					children: [/* @__PURE__ */ jsx(Icon$35, { className: "mr-1 h-3.5 w-3.5 text-text-accent" }), selected.value]
				}), !selected && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
					className: "system-sm-regular flex grow items-center text-components-input-text-placeholder",
					children: [/* @__PURE__ */ jsx(Icon$35, { className: "mr-1 h-4 w-4" }), t("nodes.knowledgeRetrieval.metadata.panel.select", { ns: "workflow" })]
				}), /* @__PURE__ */ jsx("div", {
					className: "system-2xs-medium flex h-5 shrink-0 items-center rounded-[5px] border border-divider-deep px-[5px] text-text-tertiary",
					children: varType
				})] })]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[1000]",
			children: /* @__PURE__ */ jsx("div", {
				className: "w-[200px] rounded-lg border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-1 shadow-lg",
				children: variables.map((v) => /* @__PURE__ */ jsxs("div", {
					className: "system-xs-medium flex h-6 cursor-pointer items-center rounded-md px-2 text-text-secondary hover:bg-state-base-hover",
					onClick: () => handleChange(v.value),
					children: [/* @__PURE__ */ jsx(Icon$35, { className: "mr-1 h-4 w-4 text-text-accent" }), v.value]
				}, v.value))
			})
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/condition-list/condition-value-method.tsx
var options = ["variable", "constant"];
var ConditionValueMethod = ({ valueMethod = "variable", onValueMethodChange }) => {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-start",
		offset: {
			mainAxis: 4,
			crossAxis: 0
		},
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			asChild: true,
			onClick: () => setOpen((v) => !v),
			children: /* @__PURE__ */ jsxs(Button, {
				className: "shrink-0",
				variant: "ghost",
				size: "small",
				children: [capitalize(valueMethod), /* @__PURE__ */ jsx(f1, { className: "ml-[1px] h-3.5 w-3.5" })]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[1000]",
			children: /* @__PURE__ */ jsx("div", {
				className: "w-[112px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-1 shadow-lg",
				children: options.map((option) => /* @__PURE__ */ jsx("div", {
					className: cn("flex h-7 cursor-pointer items-center rounded-md px-3 hover:bg-state-base-hover", "text-[13px] font-medium text-text-secondary", valueMethod === option && "bg-state-base-hover"),
					onClick: () => {
						if (valueMethod === option) return;
						onValueMethodChange(option);
						setOpen(false);
					},
					children: capitalize(option)
				}, option))
			})
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/condition-list/condition-variable-selector.tsx
var ConditionVariableSelector = ({ valueSelector = [], varType = VarType.string, availableNodes = [], nodesOutputVars = [], onChange }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const handleChange = useCallback((valueSelector, varItem) => {
		onChange(valueSelector, varItem);
		setOpen(false);
	}, [onChange]);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-start",
		offset: {
			mainAxis: 4,
			crossAxis: 0
		},
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			asChild: true,
			onClick: () => setOpen(!open),
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex h-6 grow cursor-pointer items-center",
				children: [!!valueSelector.length && /* @__PURE__ */ jsx(VariableTag, {
					valueSelector,
					varType,
					availableNodes,
					isShort: true
				}), !valueSelector.length && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
					className: "system-sm-regular flex grow items-center text-components-input-text-placeholder",
					children: [/* @__PURE__ */ jsx(Icon$35, { className: "mr-1 h-4 w-4" }), t("nodes.knowledgeRetrieval.metadata.panel.select", { ns: "workflow" })]
				}), /* @__PURE__ */ jsx("div", {
					className: "system-2xs-medium flex h-5 shrink-0 items-center rounded-[5px] border border-divider-deep px-[5px] text-text-tertiary",
					children: varType
				})] })]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[1000]",
			children: /* @__PURE__ */ jsx("div", {
				className: "w-[296px] rounded-lg border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg",
				children: /* @__PURE__ */ jsx(var_reference_vars_default, {
					vars: nodesOutputVars,
					isSupportFileVar: true,
					onChange: handleChange
				})
			})
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/condition-list/condition-number.tsx
var ConditionNumber = ({ value, onChange, valueMethod, onValueMethodChange, nodesOutputVars, availableNodes, isCommonVariable, commonVariables }) => {
	const { t } = useTranslation();
	const handleVariableValueChange = useCallback((v) => {
		onChange(`{{#${v.join(".")}#}}`);
	}, [onChange]);
	const handleCommonVariableValueChange = useCallback((v) => {
		onChange(`{{${v}}}`);
	}, [onChange]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-8 items-center pl-1 pr-2",
		children: [
			/* @__PURE__ */ jsx(ConditionValueMethod, {
				valueMethod,
				onValueMethodChange
			}),
			/* @__PURE__ */ jsx("div", { className: "ml-1 mr-1.5 h-4 w-[1px] bg-divider-regular" }),
			valueMethod === "variable" && !isCommonVariable && /* @__PURE__ */ jsx(ConditionVariableSelector, {
				valueSelector: value ? value.split(".") : [],
				onChange: handleVariableValueChange,
				nodesOutputVars,
				availableNodes,
				varType: VarType.number
			}),
			valueMethod === "variable" && isCommonVariable && /* @__PURE__ */ jsx(ConditionCommonVariableSelector, {
				variables: commonVariables,
				value,
				onChange: handleCommonVariableValueChange,
				varType: VarType.number
			}),
			valueMethod === "constant" && /* @__PURE__ */ jsx(Input$1, {
				className: "border-none bg-transparent outline-none hover:bg-transparent focus:bg-transparent focus:shadow-none",
				value,
				onChange: (e) => {
					const v = e.target.value;
					onChange(v ? Number(e.target.value) : void 0);
				},
				placeholder: t("nodes.knowledgeRetrieval.metadata.panel.placeholder", { ns: "workflow" }),
				type: "number"
			})
		]
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/condition-list/utils.ts
var notTranslateKey = [
	ComparisonOperator.equal,
	ComparisonOperator.notEqual,
	ComparisonOperator.largerThan,
	ComparisonOperator.largerThanOrEqual,
	ComparisonOperator.lessThan,
	ComparisonOperator.lessThanOrEqual
];
function isComparisonOperatorNeedTranslate(operator) {
	if (!operator) return false;
	return !notTranslateKey.includes(operator);
}
var getOperators = (type) => {
	switch (type) {
		case MetadataFilteringVariableType.string:
		case MetadataFilteringVariableType.select: return [
			ComparisonOperator.is,
			ComparisonOperator.isNot,
			ComparisonOperator.contains,
			ComparisonOperator.notContains,
			ComparisonOperator.startWith,
			ComparisonOperator.endWith,
			ComparisonOperator.empty,
			ComparisonOperator.notEmpty,
			ComparisonOperator.in,
			ComparisonOperator.notIn
		];
		case MetadataFilteringVariableType.number: return [
			ComparisonOperator.equal,
			ComparisonOperator.notEqual,
			ComparisonOperator.largerThan,
			ComparisonOperator.lessThan,
			ComparisonOperator.largerThanOrEqual,
			ComparisonOperator.lessThanOrEqual,
			ComparisonOperator.empty,
			ComparisonOperator.notEmpty
		];
		default: return [
			ComparisonOperator.is,
			ComparisonOperator.before,
			ComparisonOperator.after,
			ComparisonOperator.empty,
			ComparisonOperator.notEmpty
		];
	}
};
var comparisonOperatorNotRequireValue = (operator) => {
	if (!operator) return false;
	return [
		ComparisonOperator.empty,
		ComparisonOperator.notEmpty,
		ComparisonOperator.isNull,
		ComparisonOperator.isNotNull,
		ComparisonOperator.exists,
		ComparisonOperator.notExists
	].includes(operator);
};
var VARIABLE_REGEX = /\{\{(#[\w-]{1,50}(\.[a-z_]\w{0,29}){1,10}#)\}\}/gi;
var COMMON_VARIABLE_REGEX = /\{\{([\w-]{1,50})\}\}/g;
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/condition-list/condition-operator.tsx
var i18nPrefix$2 = "nodes.ifElse";
var ConditionOperator = ({ className, disabled, variableType, value, onSelect }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const options = useMemo(() => {
		return getOperators(variableType).map((o) => {
			return {
				label: isComparisonOperatorNeedTranslate(o) ? t(`${i18nPrefix$2}.comparisonOperator.${o}`, { ns: "workflow" }) : o,
				value: o
			};
		});
	}, [t, variableType]);
	const selectedOption = options.find((o) => Array.isArray(value) ? o.value === value[0] : o.value === value);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-end",
		offset: {
			mainAxis: 4,
			crossAxis: 0
		},
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen((v) => !v),
			children: /* @__PURE__ */ jsxs(Button, {
				className: cn("shrink-0", !selectedOption && "opacity-50", className),
				size: "small",
				variant: "ghost",
				disabled,
				children: [selectedOption ? selectedOption.label : t(`${i18nPrefix$2}.select`, { ns: "workflow" }), /* @__PURE__ */ jsx(f1, { className: "ml-1 h-3.5 w-3.5" })]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-10",
			children: /* @__PURE__ */ jsx("div", {
				className: "rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-1 shadow-lg",
				children: options.map((option) => /* @__PURE__ */ jsx("div", {
					className: "flex h-7 cursor-pointer items-center rounded-lg px-3 py-1.5 text-[13px] font-medium text-text-secondary hover:bg-state-base-hover",
					onClick: () => {
						onSelect(option.value);
						setOpen(false);
					},
					children: option.label
				}, option.value))
			})
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/condition-list/condition-string.tsx
var ConditionString = ({ value, onChange, valueMethod = "constant", onValueMethodChange, nodesOutputVars, availableNodes, isCommonVariable, commonVariables }) => {
	const { t } = useTranslation();
	const handleVariableValueChange = useCallback((v) => {
		onChange(`{{#${v.join(".")}#}}`);
	}, [onChange]);
	const handleCommonVariableValueChange = useCallback((v) => {
		onChange(`{{${v}}}`);
	}, [onChange]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-8 items-center pl-1 pr-2",
		children: [
			/* @__PURE__ */ jsx(ConditionValueMethod, {
				valueMethod,
				onValueMethodChange
			}),
			/* @__PURE__ */ jsx("div", { className: "ml-1 mr-1.5 h-4 w-[1px] bg-divider-regular" }),
			valueMethod === "variable" && !isCommonVariable && /* @__PURE__ */ jsx(ConditionVariableSelector, {
				valueSelector: value ? value.split(".") : [],
				onChange: handleVariableValueChange,
				nodesOutputVars,
				availableNodes,
				varType: VarType.string
			}),
			valueMethod === "variable" && isCommonVariable && /* @__PURE__ */ jsx(ConditionCommonVariableSelector, {
				variables: commonVariables,
				value,
				onChange: handleCommonVariableValueChange,
				varType: VarType.string
			}),
			valueMethod === "constant" && /* @__PURE__ */ jsx(Input$1, {
				className: "border-none bg-transparent outline-none hover:bg-transparent focus:bg-transparent focus:shadow-none",
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder: t("nodes.knowledgeRetrieval.metadata.panel.placeholder", { ns: "workflow" })
			})
		]
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/condition-list/condition-item.tsx
var ConditionItem = ({ className, disabled, condition, onRemoveCondition, onUpdateCondition, metadataList = [], availableStringVars = [], availableStringNodesWithParent = [], availableNumberVars = [], availableNumberNodesWithParent = [], isCommonVariable, availableCommonStringVars = [], availableCommonNumberVars = [] }) => {
	const [isHovered, setIsHovered] = useState(false);
	const canChooseOperator = useMemo(() => {
		if (disabled) return false;
		return true;
	}, [disabled]);
	const doRemoveCondition = useCallback(() => {
		onRemoveCondition?.(condition.id);
	}, [onRemoveCondition, condition.id]);
	const currentMetadata = useMemo(() => {
		if (condition.metadata_id) {
			const found = metadataList.find((metadata) => metadata.id === condition.metadata_id);
			if (found) return found;
		}
		return metadataList.find((metadata) => metadata.name === condition.name);
	}, [
		metadataList,
		condition.metadata_id,
		condition.name
	]);
	const handleConditionOperatorChange = useCallback((operator) => {
		onUpdateCondition?.(condition.id, {
			...condition,
			value: comparisonOperatorNotRequireValue(condition.comparison_operator) ? void 0 : condition.value,
			comparison_operator: operator
		});
	}, [onUpdateCondition, condition]);
	const valueAndValueMethod = useMemo(() => {
		if ((currentMetadata?.type === MetadataFilteringVariableType.string || currentMetadata?.type === MetadataFilteringVariableType.number || currentMetadata?.type === MetadataFilteringVariableType.select) && typeof condition.value === "string") {
			const regex = isCommonVariable ? COMMON_VARIABLE_REGEX : VARIABLE_REGEX;
			const matchedStartNumber = isCommonVariable ? 2 : 3;
			const matched = condition.value.match(regex);
			if (matched?.length) return {
				value: matched[0].slice(matchedStartNumber, -matchedStartNumber),
				valueMethod: "variable"
			};
			else return {
				value: condition.value,
				valueMethod: "constant"
			};
		}
		return {
			value: condition.value,
			valueMethod: "constant"
		};
	}, [
		currentMetadata,
		condition.value,
		isCommonVariable
	]);
	const [localValueMethod, setLocalValueMethod] = useState(valueAndValueMethod.valueMethod);
	const handleValueMethodChange = useCallback((v) => {
		setLocalValueMethod(v);
		onUpdateCondition?.(condition.id, {
			...condition,
			value: void 0
		});
	}, [condition, onUpdateCondition]);
	const handleValueChange = useCallback((v) => {
		onUpdateCondition?.(condition.id, {
			...condition,
			value: v
		});
	}, [condition, onUpdateCondition]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("mb-1 flex last-of-type:mb-0", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("grow rounded-lg bg-components-input-bg-normal", isHovered && "bg-state-destructive-hover"),
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center p-1",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "w-0 grow",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex h-6 min-w-0 items-center rounded-md border-[0.5px] border-components-panel-border-subtle bg-components-badge-white-to-dark pl-1 pr-1.5 shadow-xs",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "mr-0.5 p-[1px]",
									children: /* @__PURE__ */ jsx(metadata_icon_default, {
										type: currentMetadata?.type,
										className: "h-3 w-3"
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "system-xs-medium mr-0.5 min-w-0 flex-1 truncate text-text-secondary",
									children: currentMetadata?.name
								}),
								/* @__PURE__ */ jsx("div", {
									className: "system-xs-regular text-text-tertiary",
									children: currentMetadata?.type
								})
							]
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "mx-1 h-3 w-[1px] bg-divider-regular" }),
					/* @__PURE__ */ jsx(ConditionOperator, {
						disabled: !canChooseOperator,
						variableType: currentMetadata?.type || MetadataFilteringVariableType.string,
						value: condition.comparison_operator,
						onSelect: handleConditionOperatorChange
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "border-t border-t-divider-subtle",
				children: [
					!comparisonOperatorNotRequireValue(condition.comparison_operator) && (currentMetadata?.type === MetadataFilteringVariableType.string || currentMetadata?.type === MetadataFilteringVariableType.select) && /* @__PURE__ */ jsx(ConditionString, {
						valueMethod: localValueMethod,
						onValueMethodChange: handleValueMethodChange,
						nodesOutputVars: availableStringVars,
						availableNodes: availableStringNodesWithParent,
						value: valueAndValueMethod.value,
						onChange: handleValueChange,
						isCommonVariable,
						commonVariables: availableCommonStringVars
					}),
					!comparisonOperatorNotRequireValue(condition.comparison_operator) && currentMetadata?.type === MetadataFilteringVariableType.number && /* @__PURE__ */ jsx(ConditionNumber, {
						valueMethod: localValueMethod,
						onValueMethodChange: handleValueMethodChange,
						nodesOutputVars: availableNumberVars,
						availableNodes: availableNumberNodesWithParent,
						value: valueAndValueMethod.value,
						onChange: handleValueChange,
						isCommonVariable,
						commonVariables: availableCommonNumberVars
					}),
					!comparisonOperatorNotRequireValue(condition.comparison_operator) && currentMetadata?.type === MetadataFilteringVariableType.time && /* @__PURE__ */ jsx(ConditionDate, {
						value: condition.value,
						onChange: handleValueChange
					})
				]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "ml-1 mt-1 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-lg text-text-tertiary hover:bg-state-destructive-hover hover:text-text-destructive",
			onMouseEnter: () => setIsHovered(true),
			onMouseLeave: () => setIsHovered(false),
			onClick: doRemoveCondition,
			children: /* @__PURE__ */ jsx(M6, { className: "h-4 w-4" })
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/condition-list/index.tsx
var ConditionList = ({ disabled, metadataList = [], metadataFilteringConditions = {
	conditions: [],
	logical_operator: LogicalOperator.and
}, handleRemoveCondition, handleToggleConditionLogicalOperator, handleUpdateCondition, availableStringVars, availableStringNodesWithParent, availableNumberVars, availableNumberNodesWithParent, isCommonVariable, availableCommonNumberVars, availableCommonStringVars }) => {
	const { conditions, logical_operator } = metadataFilteringConditions;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative"),
		children: [conditions.length > 1 && /* @__PURE__ */ jsxs("div", {
			className: cn("absolute bottom-0 left-0 top-0 w-[44px]"),
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute bottom-4 right-1 top-4 w-2.5 rounded-l-[8px] border border-r-0 border-divider-deep" }),
				/* @__PURE__ */ jsx("div", { className: "absolute right-0 top-1/2 h-[29px] w-4 -translate-y-1/2 bg-components-panel-bg" }),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute right-1 top-1/2 flex h-[21px] -translate-y-1/2 cursor-pointer select-none items-center rounded-md border-[0.5px] border-components-button-secondary-border bg-components-button-secondary-bg px-1 text-[10px] font-semibold text-text-accent-secondary shadow-xs",
					onClick: () => handleToggleConditionLogicalOperator(),
					children: [logical_operator.toUpperCase(), /* @__PURE__ */ jsx(JS, { className: "ml-0.5 h-3 w-3" })]
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: cn(conditions.length > 1 && "pl-[44px]"),
			children: conditions.map((condition) => /* @__PURE__ */ jsx(ConditionItem, {
				disabled,
				condition,
				onUpdateCondition: handleUpdateCondition,
				onRemoveCondition: handleRemoveCondition,
				metadataList,
				availableStringVars,
				availableStringNodesWithParent,
				availableNumberVars,
				availableNumberNodesWithParent,
				isCommonVariable,
				availableCommonStringVars,
				availableCommonNumberVars
			}, `${condition.id}`))
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/metadata-panel.tsx
var MetadataPanel = ({ metadataFilteringConditions, metadataList, onCancel, handleAddCondition, ...restProps }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "w-[420px] rounded-2xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-2xl",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative px-3 pt-3.5",
			children: [/* @__PURE__ */ jsx("div", {
				className: "system-xl-semibold text-text-primary",
				children: t("nodes.knowledgeRetrieval.metadata.panel.title", { ns: "workflow" })
			}), /* @__PURE__ */ jsx("div", {
				className: "absolute bottom-0 right-2.5 flex h-8 w-8 cursor-pointer items-center justify-center",
				onClick: onCancel,
				children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-text-tertiary" })
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "px-1 py-2",
			children: /* @__PURE__ */ jsxs("div", {
				className: "px-3 py-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "pb-2",
					children: /* @__PURE__ */ jsx(ConditionList, {
						metadataList,
						metadataFilteringConditions,
						...restProps
					})
				}), /* @__PURE__ */ jsx(AddCondition, {
					metadataList,
					handleAddCondition
				})]
			})
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/metadata-trigger.tsx
var MetadataTrigger = ({ metadataFilteringConditions, metadataList = [], handleRemoveCondition, selectedDatasetsLoaded, ...restProps }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const conditions = metadataFilteringConditions?.conditions || [];
	useEffect(() => {
		if (selectedDatasetsLoaded) conditions.forEach((condition) => {
			const foundById = condition.metadata_id && metadataList.find((metadata) => metadata.id === condition.metadata_id);
			const foundByName = !condition.metadata_id && metadataList.find((metadata) => metadata.name === condition.name);
			if (!foundById && !foundByName) handleRemoveCondition(condition.id);
		});
	}, [
		metadataFilteringConditions,
		metadataList,
		handleRemoveCondition,
		selectedDatasetsLoaded
	]);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		placement: "left",
		offset: 4,
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen(!open),
			children: /* @__PURE__ */ jsxs(Button, {
				variant: "secondary-accent",
				size: "small",
				children: [
					/* @__PURE__ */ jsx($l, { className: "mr-1 h-3.5 w-3.5" }),
					t("nodes.knowledgeRetrieval.metadata.panel.conditions", { ns: "workflow" }),
					/* @__PURE__ */ jsx("div", {
						className: "system-2xs-medium-uppercase ml-1 flex items-center rounded-[5px] border border-divider-deep px-1 text-text-tertiary",
						children: metadataFilteringConditions?.conditions.length || 0
					})
				]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-10",
			children: /* @__PURE__ */ jsx(MetadataPanel, {
				metadataFilteringConditions,
				onCancel: () => setOpen(false),
				metadataList,
				handleRemoveCondition,
				...restProps
			})
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/metadata-filter/metadata-filter-selector.tsx
var MetadataFilterSelector = ({ value = MetadataFilteringModeEnum.disabled, onSelect }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const options = [
		{
			key: MetadataFilteringModeEnum.disabled,
			value: t("nodes.knowledgeRetrieval.metadata.options.disabled.title", { ns: "workflow" }),
			desc: t("nodes.knowledgeRetrieval.metadata.options.disabled.subTitle", { ns: "workflow" })
		},
		{
			key: MetadataFilteringModeEnum.automatic,
			value: t("nodes.knowledgeRetrieval.metadata.options.automatic.title", { ns: "workflow" }),
			desc: t("nodes.knowledgeRetrieval.metadata.options.automatic.subTitle", { ns: "workflow" })
		},
		{
			key: MetadataFilteringModeEnum.manual,
			value: t("nodes.knowledgeRetrieval.metadata.options.manual.title", { ns: "workflow" }),
			desc: t("nodes.knowledgeRetrieval.metadata.options.manual.subTitle", { ns: "workflow" })
		}
	];
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		placement: "bottom-end",
		offset: {
			mainAxis: 4,
			crossAxis: 0
		},
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: (e) => {
				e.stopPropagation();
				setOpen(!open);
			},
			asChild: true,
			children: /* @__PURE__ */ jsxs(Button, {
				variant: "secondary",
				size: "small",
				children: [options.find((option) => option.key === value).value, /* @__PURE__ */ jsx(f1, { className: "h-3.5 w-3.5" })]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-10",
			children: /* @__PURE__ */ jsx("div", {
				className: "w-[280px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-1 shadow-lg",
				children: options.map((option) => /* @__PURE__ */ jsxs("div", {
					className: "flex cursor-pointer rounded-lg p-2 pr-3 hover:bg-state-base-hover",
					onClick: () => {
						onSelect(option.key);
						setOpen(false);
					},
					children: [/* @__PURE__ */ jsx("div", {
						className: "w-4 shrink-0",
						children: option.key === value && /* @__PURE__ */ jsx(s7, { className: "h-4 w-4 text-text-accent" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "grow",
						children: [/* @__PURE__ */ jsx("div", {
							className: "system-sm-semibold text-text-secondary",
							children: option.value
						}), /* @__PURE__ */ jsx("div", {
							className: "system-xs-regular text-text-tertiary",
							children: option.desc
						})]
					})]
				}, option.key))
			})
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/components/metadata/metadata-filter/index.tsx
var MetadataFilter = ({ metadataFilterMode = MetadataFilteringModeEnum.disabled, handleMetadataFilterModeChange, metadataModelConfig, handleMetadataModelChange, handleMetadataCompletionParamsChange, ...restProps }) => {
	const { t } = useTranslation();
	const [collapsed, setCollapsed] = useState(true);
	const handleMetadataFilterModeChangeWrapped = useCallback((mode) => {
		if (mode === MetadataFilteringModeEnum.automatic) setCollapsed(false);
		handleMetadataFilterModeChange(mode);
	}, [handleMetadataFilterModeChange]);
	return /* @__PURE__ */ jsx(Collapse, {
		disabled: metadataFilterMode === MetadataFilteringModeEnum.disabled || metadataFilterMode === MetadataFilteringModeEnum.manual,
		collapsed,
		onCollapse: setCollapsed,
		hideCollapseIcon: true,
		trigger: (collapseIcon) => /* @__PURE__ */ jsxs("div", {
			className: "flex grow items-center justify-between pr-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "system-sm-semibold-uppercase mr-0.5 text-text-secondary",
						children: t("nodes.knowledgeRetrieval.metadata.title", { ns: "workflow" })
					}),
					/* @__PURE__ */ jsx(tooltip_default, { popupContent: /* @__PURE__ */ jsx("div", {
						className: "w-[200px]",
						children: t("nodes.knowledgeRetrieval.metadata.tip", { ns: "workflow" })
					}) }),
					collapseIcon
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center",
				children: [/* @__PURE__ */ jsx(MetadataFilterSelector, {
					value: metadataFilterMode,
					onSelect: handleMetadataFilterModeChangeWrapped
				}), metadataFilterMode === MetadataFilteringModeEnum.manual && /* @__PURE__ */ jsx("div", {
					className: "ml-1",
					children: /* @__PURE__ */ jsx(MetadataTrigger, { ...restProps })
				})]
			})]
		}),
		children: /* @__PURE__ */ jsx(Fragment$1, { children: metadataFilterMode === MetadataFilteringModeEnum.automatic && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
			className: "body-xs-regular px-4 text-text-tertiary",
			children: t("nodes.knowledgeRetrieval.metadata.options.automatic.desc", { ns: "workflow" })
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-1 px-4",
			children: /* @__PURE__ */ jsx(ModelParameterModal$1, {
				popupClassName: "!w-[387px]",
				isInWorkflow: true,
				isAdvancedMode: true,
				provider: metadataModelConfig?.provider || "",
				completionParams: metadataModelConfig?.completion_params || { temperature: .7 },
				modelId: metadataModelConfig?.name || "",
				setModel: handleMetadataModelChange || noop,
				onCompletionParamsChange: handleMetadataCompletionParamsChange || noop,
				hideDebugWithMultipleModel: true,
				debugWithMultipleModel: false
			})
		})] }) })
	});
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/hooks.ts
var useSelectedDatasetsMode = (datasets) => {
	return useMemo(() => {
		return getSelectedDatasetsMode(datasets);
	}, [datasets]);
};
//#endregion
//#region app/components/app/configuration/dataset-config/params-config/config-content.tsx
var noopModelChange = () => {};
var noopParamsChange = () => {};
var ConfigContent = ({ datasetConfigs, onChange, isInWorkflow, singleRetrievalModelConfig: singleRetrievalConfig = {}, onSingleRetrievalModelChange = noopModelChange, onSingleRetrievalModelParamsChange = noopParamsChange, selectedDatasets = [] }) => {
	const { t } = useTranslation();
	const selectedDatasetsMode = useSelectedDatasetsMode(selectedDatasets);
	const type = datasetConfigs.retrieval_model;
	useEffect(() => {
		if (type === RETRIEVE_TYPE.oneWay) onChange({
			...datasetConfigs,
			retrieval_model: RETRIEVE_TYPE.multiWay
		}, isInWorkflow);
	}, [
		type,
		datasetConfigs,
		isInWorkflow,
		onChange
	]);
	const { modelList: rerankModelList, currentModel: validDefaultRerankModel, currentProvider: validDefaultRerankProvider } = useModelListAndDefaultModelAndCurrentProviderAndModel(ModelTypeEnum.rerank);
	/**
	* If reranking model is set and is valid, use the reranking model
	* Otherwise, check if the default reranking model is valid
	*/
	const { currentModel: currentRerankModel } = useCurrentProviderAndModel(rerankModelList, {
		provider: datasetConfigs.reranking_model?.reranking_provider_name || validDefaultRerankProvider?.provider || "",
		model: datasetConfigs.reranking_model?.reranking_model_name || validDefaultRerankModel?.model || ""
	});
	const rerankModel = useMemo(() => {
		return {
			provider_name: datasetConfigs.reranking_model?.reranking_provider_name ?? "",
			model_name: datasetConfigs.reranking_model?.reranking_model_name ?? ""
		};
	}, [datasetConfigs.reranking_model]);
	const handleParamChange = (key, value) => {
		if (key === "top_k") onChange({
			...datasetConfigs,
			top_k: value
		});
		else if (key === "score_threshold") onChange({
			...datasetConfigs,
			score_threshold: value
		});
	};
	const handleSwitch = (key, enable) => {
		if (key === "top_k") return;
		onChange({
			...datasetConfigs,
			score_threshold_enabled: enable
		});
	};
	const handleWeightedScoreChange = (value) => {
		onChange({
			...datasetConfigs,
			weights: {
				...datasetConfigs.weights,
				vector_setting: {
					...datasetConfigs.weights.vector_setting,
					vector_weight: value.value[0]
				},
				keyword_setting: { keyword_weight: value.value[1] }
			}
		});
	};
	const handleRerankModeChange = (mode) => {
		if (mode === datasetConfigs.reranking_mode) return;
		if (mode === RerankingModeEnum.RerankingModel && !currentRerankModel) Toast.notify({
			type: "error",
			message: t("errorMsg.rerankModelRequired", { ns: "workflow" })
		});
		onChange({
			...datasetConfigs,
			reranking_mode: mode
		});
	};
	const model = singleRetrievalConfig;
	const rerankingModeOptions = [{
		value: RerankingModeEnum.WeightedScore,
		label: t("weightedScore.title", { ns: "dataset" }),
		tips: t("weightedScore.description", { ns: "dataset" })
	}, {
		value: RerankingModeEnum.RerankingModel,
		label: t("modelProvider.rerankModel.key", { ns: "common" }),
		tips: t("modelProvider.rerankModel.tip", { ns: "common" })
	}];
	const showWeightedScore = selectedDatasetsMode.allHighQuality && !selectedDatasetsMode.inconsistentEmbeddingModel;
	const showWeightedScorePanel = showWeightedScore && datasetConfigs.reranking_mode === RerankingModeEnum.WeightedScore && datasetConfigs.weights;
	const selectedRerankMode = datasetConfigs.reranking_mode || RerankingModeEnum.RerankingModel;
	const canManuallyToggleRerank = useMemo(() => {
		return selectedDatasetsMode.allInternal && selectedDatasetsMode.allEconomic || selectedDatasetsMode.allExternal;
	}, [
		selectedDatasetsMode.allEconomic,
		selectedDatasetsMode.allExternal,
		selectedDatasetsMode.allInternal
	]);
	const showRerankModel = useMemo(() => {
		if (!canManuallyToggleRerank) return true;
		return datasetConfigs.reranking_enable;
	}, [datasetConfigs.reranking_enable, canManuallyToggleRerank]);
	const handleManuallyToggleRerank = useCallback((enable) => {
		if (!currentRerankModel && enable) Toast.notify({
			type: "error",
			message: t("errorMsg.rerankModelRequired", { ns: "workflow" })
		});
		onChange({
			...datasetConfigs,
			reranking_enable: enable
		});
	}, [
		currentRerankModel,
		datasetConfigs,
		onChange
	]);
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("div", {
			className: "text-text-primary system-xl-semibold",
			children: t("retrievalSettings", { ns: "dataset" })
		}),
		/* @__PURE__ */ jsx("div", {
			className: "text-text-tertiary system-xs-regular",
			children: t("defaultRetrievalTip", { ns: "dataset" })
		}),
		type === RETRIEVE_TYPE.multiWay && /* @__PURE__ */ jsxs(Fragment$1, { children: [
			/* @__PURE__ */ jsxs("div", {
				className: "my-2 flex flex-col items-center py-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "mb-2 mr-2 shrink-0 text-text-secondary system-xs-semibold-uppercase",
					children: t("rerankSettings", { ns: "dataset" })
				}), /* @__PURE__ */ jsx(Divider$1, {
					bgStyle: "gradient",
					className: "m-0 !h-px"
				})]
			}),
			selectedDatasetsMode.inconsistentEmbeddingModel && /* @__PURE__ */ jsx("div", {
				className: "mt-4 text-text-warning system-xs-medium",
				children: t("inconsistentEmbeddingModelTip", { ns: "dataset" })
			}),
			selectedDatasetsMode.mixtureInternalAndExternal && /* @__PURE__ */ jsx("div", {
				className: "mt-4 text-text-warning system-xs-medium",
				children: t("mixtureInternalAndExternalTip", { ns: "dataset" })
			}),
			selectedDatasetsMode.allExternal && /* @__PURE__ */ jsx("div", {
				className: "mt-4 text-text-warning system-xs-medium",
				children: t("allExternalTip", { ns: "dataset" })
			}),
			selectedDatasetsMode.mixtureHighQualityAndEconomic && /* @__PURE__ */ jsx("div", {
				className: "mt-4 text-text-warning system-xs-medium",
				children: t("mixtureHighQualityAndEconomicTip", { ns: "dataset" })
			}),
			showWeightedScore && /* @__PURE__ */ jsx("div", {
				className: "flex items-center justify-between",
				children: rerankingModeOptions.map((option) => /* @__PURE__ */ jsxs("div", {
					className: cn("flex h-8 w-[calc((100%-8px)/2)] cursor-pointer items-center justify-center rounded-lg border border-components-option-card-option-border bg-components-option-card-option-bg text-text-secondary system-sm-medium", selectedRerankMode === option.value && "border-[1.5px] border-components-option-card-option-selected-border bg-components-option-card-option-selected-bg text-text-primary"),
					onClick: () => handleRerankModeChange(option.value),
					children: [/* @__PURE__ */ jsx("div", {
						className: "truncate",
						children: option.label
					}), /* @__PURE__ */ jsx(tooltip_default, {
						popupContent: /* @__PURE__ */ jsx("div", {
							className: "w-[200px]",
							children: option.tips
						}),
						popupClassName: "ml-0.5",
						triggerClassName: "ml-0.5 w-3.5 h-3.5"
					})]
				}, option.value))
			}),
			!showWeightedScorePanel && /* @__PURE__ */ jsxs("div", {
				className: "mt-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center",
					children: [
						canManuallyToggleRerank && /* @__PURE__ */ jsx(switch_default, {
							size: "md",
							value: showRerankModel ?? false,
							onChange: handleManuallyToggleRerank
						}),
						/* @__PURE__ */ jsx("div", {
							className: "ml-1 leading-[32px] text-text-secondary system-sm-semibold",
							children: t("modelProvider.rerankModel.key", { ns: "common" })
						}),
						/* @__PURE__ */ jsx(tooltip_default, {
							popupContent: /* @__PURE__ */ jsx("div", {
								className: "w-[200px]",
								children: t("modelProvider.rerankModel.tip", { ns: "common" })
							}),
							popupClassName: "ml-1",
							triggerClassName: "ml-1 w-4 h-4"
						})
					]
				}), showRerankModel && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ModelSelector, {
					defaultModel: rerankModel && {
						provider: rerankModel?.provider_name,
						model: rerankModel?.model_name
					},
					onSelect: (v) => {
						onChange({
							...datasetConfigs,
							reranking_model: {
								reranking_provider_name: v.provider,
								reranking_model_name: v.model
							}
						});
					},
					modelList: rerankModelList
				}) })]
			}),
			showWeightedScorePanel && /* @__PURE__ */ jsxs("div", {
				className: "mt-2 space-y-4",
				children: [
					/* @__PURE__ */ jsx(weighted_score_default, {
						value: { value: [datasetConfigs.weights.vector_setting.vector_weight, datasetConfigs.weights.keyword_setting.keyword_weight] },
						onChange: handleWeightedScoreChange
					}),
					/* @__PURE__ */ jsx(top_k_item_default, {
						value: datasetConfigs.top_k,
						onChange: handleParamChange,
						enable: true
					}),
					/* @__PURE__ */ jsx(score_threshold_item_default, {
						value: datasetConfigs.score_threshold,
						onChange: handleParamChange,
						enable: datasetConfigs.score_threshold_enabled,
						hasSwitch: true,
						onSwitchChange: handleSwitch
					})
				]
			}),
			!showWeightedScorePanel && /* @__PURE__ */ jsxs("div", {
				className: "mt-4 space-y-4",
				children: [/* @__PURE__ */ jsx(top_k_item_default, {
					value: datasetConfigs.top_k,
					onChange: handleParamChange,
					enable: true
				}), showRerankModel && /* @__PURE__ */ jsx(score_threshold_item_default, {
					value: datasetConfigs.score_threshold,
					onChange: handleParamChange,
					enable: datasetConfigs.score_threshold_enabled,
					hasSwitch: true,
					onSwitchChange: handleSwitch
				})]
			})
		] }),
		isInWorkflow && type === RETRIEVE_TYPE.oneWay && /* @__PURE__ */ jsxs("div", {
			className: "mt-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center space-x-0.5",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-[13px] font-medium leading-[32px] text-text-primary",
					children: t("modelProvider.systemReasoningModel.key", { ns: "common" })
				}), /* @__PURE__ */ jsx(tooltip_default, { popupContent: t("modelProvider.systemReasoningModel.tip", { ns: "common" }) })]
			}), /* @__PURE__ */ jsx(ModelParameterModal$1, {
				isInWorkflow,
				popupClassName: "!w-[387px]",
				isAdvancedMode: true,
				provider: model?.provider,
				completionParams: model?.completion_params,
				modelId: model?.name,
				setModel: onSingleRetrievalModelChange,
				onCompletionParamsChange: onSingleRetrievalModelParamsChange,
				hideDebugWithMultipleModel: true,
				debugWithMultipleModel: false
			})]
		})
	] });
};
var config_content_default = memo(ConfigContent);
//#endregion
//#region context/debug-configuration.ts
var DebugConfigurationContext = createContext$1({
	readonly: false,
	appId: "",
	isAPIKeySet: false,
	isTrailFinished: false,
	mode: AppModeEnum.CHAT,
	modelModeType: ModelModeType.chat,
	promptMode: PromptMode.simple,
	setPromptMode: noop,
	isAdvancedMode: false,
	isAgent: false,
	isFunctionCall: false,
	isOpenAI: false,
	collectionList: [],
	canReturnToSimpleMode: false,
	setCanReturnToSimpleMode: noop,
	chatPromptConfig: DEFAULT_CHAT_PROMPT_CONFIG,
	completionPromptConfig: DEFAULT_COMPLETION_PROMPT_CONFIG,
	currentAdvancedPrompt: [],
	showHistoryModal: noop,
	conversationHistoriesRole: {
		user_prefix: "user",
		assistant_prefix: "assistant"
	},
	setConversationHistoriesRole: noop,
	setCurrentAdvancedPrompt: noop,
	hasSetBlockStatus: {
		context: false,
		history: false,
		query: false
	},
	conversationId: "",
	setConversationId: noop,
	introduction: "",
	setIntroduction: noop,
	suggestedQuestions: [],
	setSuggestedQuestions: noop,
	controlClearChatMessage: 0,
	setControlClearChatMessage: noop,
	prevPromptConfig: {
		prompt_template: "",
		prompt_variables: []
	},
	setPrevPromptConfig: noop,
	moreLikeThisConfig: { enabled: false },
	setMoreLikeThisConfig: noop,
	suggestedQuestionsAfterAnswerConfig: { enabled: false },
	setSuggestedQuestionsAfterAnswerConfig: noop,
	speechToTextConfig: { enabled: false },
	setSpeechToTextConfig: noop,
	textToSpeechConfig: {
		enabled: false,
		voice: "",
		language: ""
	},
	setTextToSpeechConfig: noop,
	citationConfig: { enabled: false },
	setCitationConfig: noop,
	moderationConfig: { enabled: false },
	annotationConfig: {
		id: "",
		enabled: false,
		score_threshold: ANNOTATION_DEFAULT.score_threshold,
		embedding_model: {
			embedding_model_name: "",
			embedding_provider_name: ""
		}
	},
	setAnnotationConfig: noop,
	setModerationConfig: noop,
	externalDataToolsConfig: [],
	setExternalDataToolsConfig: noop,
	formattingChanged: false,
	setFormattingChanged: noop,
	inputs: {},
	setInputs: noop,
	query: "",
	setQuery: noop,
	completionParams: {
		max_tokens: 16,
		temperature: 1,
		top_p: 1,
		presence_penalty: 1,
		frequency_penalty: 1
	},
	setCompletionParams: noop,
	modelConfig: {
		provider: "OPENAI",
		model_id: "gpt-3.5-turbo",
		mode: ModelModeType.unset,
		configs: {
			prompt_template: "",
			prompt_variables: []
		},
		chat_prompt_config: DEFAULT_CHAT_PROMPT_CONFIG,
		completion_prompt_config: DEFAULT_COMPLETION_PROMPT_CONFIG,
		more_like_this: null,
		opening_statement: "",
		suggested_questions: [],
		sensitive_word_avoidance: null,
		speech_to_text: null,
		text_to_speech: null,
		file_upload: null,
		suggested_questions_after_answer: null,
		retriever_resource: null,
		annotation_reply: null,
		external_data_tools: [],
		system_parameters: {
			audio_file_size_limit: 0,
			file_size_limit: 0,
			image_file_size_limit: 0,
			video_file_size_limit: 0,
			workflow_file_upload_limit: 0
		},
		dataSets: [],
		agentConfig: DEFAULT_AGENT_SETTING
	},
	setModelConfig: noop,
	dataSets: [],
	showSelectDataSet: noop,
	setDataSets: noop,
	datasetConfigs: {
		retrieval_model: RETRIEVE_TYPE.multiWay,
		reranking_model: {
			reranking_provider_name: "",
			reranking_model_name: ""
		},
		top_k: 4,
		score_threshold_enabled: false,
		score_threshold: .7,
		datasets: { datasets: [] }
	},
	datasetConfigsRef: { current: null },
	setDatasetConfigs: noop,
	hasSetContextVar: false,
	isShowVisionConfig: false,
	visionConfig: {
		enabled: false,
		number_limits: 2,
		detail: Resolution.low,
		transfer_methods: [TransferMethod.remote_url]
	},
	setVisionConfig: noop,
	isAllowVideoUpload: false,
	isShowDocumentConfig: false,
	isShowAudioConfig: false,
	rerankSettingModalOpen: false,
	setRerankSettingModalOpen: noop
});
var useDebugConfigurationContext = () => useContext$1(DebugConfigurationContext);
//#endregion
//#region app/components/app/configuration/config-var/config-string/index.tsx
var ConfigString = ({ value, onChange, maxLength }) => {
	useEffect(() => {
		if (value && value > maxLength) onChange(maxLength);
	}, [
		value,
		maxLength,
		onChange
	]);
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Input$1, {
		type: "number",
		max: maxLength,
		min: 1,
		value: value || "",
		onChange: (e) => {
			let value = Number.parseInt(e.target.value, 10);
			if (value > maxLength) value = maxLength;
			else if (value < 1) value = 1;
			onChange(value);
		}
	}) });
};
var config_string_default = React$1.memo(ConfigString);
//#endregion
//#region app/components/app/configuration/config-var/modal-foot.tsx
var ModalFoot = ({ onConfirm, onCancel }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex justify-end gap-2",
		children: [/* @__PURE__ */ jsx(Button, {
			onClick: onCancel,
			children: t("operation.cancel", { ns: "common" })
		}), /* @__PURE__ */ jsx(Button, {
			variant: "primary",
			onClick: onConfirm,
			children: t("operation.save", { ns: "common" })
		})]
	});
};
var modal_foot_default = React$1.memo(ModalFoot);
//#endregion
//#region app/components/app/configuration/config-var/config-modal/config.ts
var jsonConfigPlaceHolder = JSON.stringify({
	type: "object",
	properties: {
		foo: { type: "string" },
		bar: {
			type: "object",
			properties: { sub: { type: "number" } },
			required: [],
			additionalProperties: true
		}
	},
	required: [],
	additionalProperties: true
}, null, 2);
//#endregion
//#region app/components/app/configuration/config-var/config-modal/type-select.tsx
var TypeSelector = ({ value, onSelect, items, popupInnerClassName, readonly }) => {
	const [open, setOpen] = useState(false);
	const selectedItem = value ? items.find((item) => item.value === value) : void 0;
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-start",
		offset: 4,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => !readonly && setOpen((v) => !v),
			className: "w-full",
			children: /* @__PURE__ */ jsxs("div", {
				className: cn(`group flex h-9 items-center justify-between rounded-lg border-0 bg-components-input-bg-normal px-2 text-sm hover:bg-state-base-hover-alt ${readonly ? "cursor-not-allowed" : "cursor-pointer"}`),
				title: selectedItem?.name,
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center",
					children: [/* @__PURE__ */ jsx(input_var_type_icon_default, {
						type: selectedItem?.value,
						className: "size-4 shrink-0 text-text-secondary"
					}), /* @__PURE__ */ jsx("span", {
						className: `
              ml-1.5 text-components-input-text-filled ${!selectedItem?.name && "text-components-input-text-placeholder"}
            `,
						children: selectedItem?.name
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center space-x-1",
					children: [/* @__PURE__ */ jsx(badge_default, {
						uppercase: false,
						children: inputVarTypeToVarType(selectedItem?.value)
					}), /* @__PURE__ */ jsx(ForwardRef, { className: cn("h-4 w-4 shrink-0 text-text-quaternary group-hover:text-text-secondary", open && "text-text-secondary") })]
				})]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[61]",
			children: /* @__PURE__ */ jsx("div", {
				className: cn("w-[432px] rounded-md border-[0.5px] border-components-panel-border bg-components-panel-bg px-1 py-1 text-base shadow-lg focus:outline-none sm:text-sm", popupInnerClassName),
				children: items.map((item) => /* @__PURE__ */ jsxs("div", {
					className: "flex h-9 cursor-pointer items-center justify-between rounded-lg px-2 text-text-secondary hover:bg-state-base-hover",
					title: item.name,
					onClick: () => {
						onSelect(item);
						setOpen(false);
					},
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center space-x-2",
						children: [/* @__PURE__ */ jsx(input_var_type_icon_default, {
							type: item.value,
							className: "size-4 shrink-0 text-text-secondary"
						}), /* @__PURE__ */ jsx("span", {
							title: item.name,
							children: item.name
						})]
					}), /* @__PURE__ */ jsx(badge_default, {
						uppercase: false,
						children: inputVarTypeToVarType(item.value)
					})]
				}, item.value))
			})
		})]
	});
};
//#endregion
//#region app/components/app/configuration/config-var/config-modal/index.tsx
var TEXT_MAX_LENGTH = 256;
var CHECKBOX_DEFAULT_TRUE_VALUE = "true";
var CHECKBOX_DEFAULT_FALSE_VALUE = "false";
var getCheckboxDefaultSelectValue = (value) => {
	if (typeof value === "boolean") return value ? CHECKBOX_DEFAULT_TRUE_VALUE : CHECKBOX_DEFAULT_FALSE_VALUE;
	if (typeof value === "string") return value.toLowerCase() === CHECKBOX_DEFAULT_TRUE_VALUE ? CHECKBOX_DEFAULT_TRUE_VALUE : CHECKBOX_DEFAULT_FALSE_VALUE;
	return CHECKBOX_DEFAULT_FALSE_VALUE;
};
var parseCheckboxSelectValue = (value) => value === CHECKBOX_DEFAULT_TRUE_VALUE;
var normalizeSelectDefaultValue = (inputVar) => {
	if (inputVar.type === InputVarType.select && inputVar.default === "") return {
		...inputVar,
		default: void 0
	};
	return inputVar;
};
var ConfigModal = ({ isCreate, payload, isShow, onClose, onConfirm, supportFile }) => {
	const { modelConfig } = useContext$1(DebugConfigurationContext);
	const { t } = useTranslation();
	const [tempPayload, setTempPayload] = useState(() => normalizeSelectDefaultValue(payload || getNewVarInWorkflow("")));
	const { type, label, variable, options, max_length } = tempPayload;
	const modalRef = useRef(null);
	const appDetail = useStore$2((state) => state.appDetail);
	const isBasicApp = appDetail?.mode !== AppModeEnum.ADVANCED_CHAT && appDetail?.mode !== AppModeEnum.WORKFLOW;
	const jsonSchemaStr = useMemo(() => {
		if (!(type === InputVarType.jsonObject) || !tempPayload.json_schema) return "";
		try {
			return tempPayload.json_schema;
		} catch {
			return "";
		}
	}, [tempPayload.json_schema]);
	useEffect(() => {
		if (isShow) modalRef.current?.focus();
	}, [isShow]);
	const isStringInput = type === InputVarType.textInput || type === InputVarType.paragraph;
	const checkVariableName = useCallback((value, canBeEmpty) => {
		const { isValid, errorMessageKey } = checkKeys([value], canBeEmpty);
		if (!isValid) {
			Toast.notify({
				type: "error",
				message: t(`varKeyError.${errorMessageKey}`, {
					ns: "appDebug",
					key: t("variableConfig.varName", { ns: "appDebug" })
				})
			});
			return false;
		}
		return true;
	}, [t]);
	const handlePayloadChange = useCallback((key) => {
		return (value) => {
			setTempPayload((prev) => {
				const newPayload = {
					...prev,
					[key]: value
				};
				if (key === "options" && prev.default) {
					if (!(Array.isArray(value) ? value : []).includes(prev.default)) newPayload.default = void 0;
				}
				return newPayload;
			});
		};
	}, []);
	const handleJSONSchemaChange = useCallback((value) => {
		if (value == null || value.trim() === "") {
			handlePayloadChange("json_schema")(void 0);
			return null;
		}
		try {
			const v = JSON.parse(value);
			handlePayloadChange("json_schema")(JSON.stringify(v, null, 2));
		} catch {
			return null;
		}
	}, [handlePayloadChange]);
	const selectOptions = [
		{
			name: t("variableConfig.text-input", { ns: "appDebug" }),
			value: InputVarType.textInput
		},
		{
			name: t("variableConfig.paragraph", { ns: "appDebug" }),
			value: InputVarType.paragraph
		},
		{
			name: t("variableConfig.select", { ns: "appDebug" }),
			value: InputVarType.select
		},
		{
			name: t("variableConfig.number", { ns: "appDebug" }),
			value: InputVarType.number
		},
		{
			name: t("variableConfig.checkbox", { ns: "appDebug" }),
			value: InputVarType.checkbox
		},
		...supportFile ? [{
			name: t("variableConfig.single-file", { ns: "appDebug" }),
			value: InputVarType.singleFile
		}, {
			name: t("variableConfig.multi-files", { ns: "appDebug" }),
			value: InputVarType.multiFiles
		}] : [],
		...!isBasicApp ? [{
			name: t("variableConfig.json", { ns: "appDebug" }),
			value: InputVarType.jsonObject
		}] : []
	];
	const handleTypeChange = useCallback((item) => {
		const type = item.value;
		setTempPayload(produce(tempPayload, (draft) => {
			draft.type = type;
			if (type === InputVarType.select) draft.default = void 0;
			if ([InputVarType.singleFile, InputVarType.multiFiles].includes(type)) {
				Object.keys(DEFAULT_FILE_UPLOAD_SETTING).forEach((key) => {
					if (key !== "max_length") draft[key] = DEFAULT_FILE_UPLOAD_SETTING[key];
				});
				if (type === InputVarType.multiFiles) draft.max_length = DEFAULT_FILE_UPLOAD_SETTING.max_length;
			}
		}));
	}, [tempPayload]);
	const handleVarKeyBlur = useCallback((e) => {
		const varName = e.target.value;
		if (!checkVariableName(varName, true) || tempPayload.label) return;
		setTempPayload((prev) => {
			return {
				...prev,
				label: varName
			};
		});
	}, [checkVariableName, tempPayload.label]);
	const handleVarNameChange = useCallback((e) => {
		replaceSpaceWithUnderscoreInVarNameInput(e.target);
		const value = e.target.value;
		const { isValid, errorKey, errorMessageKey } = checkKeys([value], true);
		if (!isValid) {
			Toast.notify({
				type: "error",
				message: t(`varKeyError.${errorMessageKey}`, {
					ns: "appDebug",
					key: errorKey
				})
			});
			return;
		}
		handlePayloadChange("variable")(e.target.value);
	}, [handlePayloadChange, t]);
	const checkboxDefaultSelectValue = useMemo(() => getCheckboxDefaultSelectValue(tempPayload.default), [tempPayload.default]);
	const isJsonSchemaEmpty = (value) => {
		if (value === null || value === void 0) return true;
		if (typeof value !== "string") return false;
		return value.trim() === "";
	};
	const handleConfirm = () => {
		const jsonSchemaValue = tempPayload.json_schema;
		const isSchemaEmpty = isJsonSchemaEmpty(jsonSchemaValue);
		const normalizedJsonSchema = isSchemaEmpty ? void 0 : jsonSchemaValue;
		const payloadToSave = tempPayload.type === InputVarType.jsonObject && isSchemaEmpty ? {
			...tempPayload,
			json_schema: void 0
		} : tempPayload;
		const moreInfo = tempPayload.variable === payload?.variable ? void 0 : {
			type: ChangeType.changeVarName,
			payload: {
				beforeKey: payload?.variable || "",
				afterKey: tempPayload.variable
			}
		};
		if (!checkVariableName(tempPayload.variable)) return;
		if (!tempPayload.label) {
			Toast.notify({
				type: "error",
				message: t("variableConfig.errorMsg.labelNameRequired", { ns: "appDebug" })
			});
			return;
		}
		if (isStringInput || type === InputVarType.number) onConfirm(payloadToSave, moreInfo);
		else if (type === InputVarType.select) {
			if (options?.length === 0) {
				Toast.notify({
					type: "error",
					message: t("variableConfig.errorMsg.atLeastOneOption", { ns: "appDebug" })
				});
				return;
			}
			const obj = {};
			let hasRepeatedItem = false;
			options?.forEach((o) => {
				if (obj[o]) {
					hasRepeatedItem = true;
					return;
				}
				obj[o] = true;
			});
			if (hasRepeatedItem) {
				Toast.notify({
					type: "error",
					message: t("variableConfig.errorMsg.optionRepeat", { ns: "appDebug" })
				});
				return;
			}
			onConfirm(payloadToSave, moreInfo);
		} else if ([InputVarType.singleFile, InputVarType.multiFiles].includes(type)) {
			if (tempPayload.allowed_file_types?.length === 0) {
				const errorMessages = t("errorMsg.fieldRequired", {
					ns: "workflow",
					field: t("variableConfig.file.supportFileTypes", { ns: "appDebug" })
				});
				Toast.notify({
					type: "error",
					message: errorMessages
				});
				return;
			}
			if (tempPayload.allowed_file_types?.includes(SupportUploadFileTypes.custom) && !tempPayload.allowed_file_extensions?.length) {
				const errorMessages = t("errorMsg.fieldRequired", {
					ns: "workflow",
					field: t("variableConfig.file.custom.name", { ns: "appDebug" })
				});
				Toast.notify({
					type: "error",
					message: errorMessages
				});
				return;
			}
			onConfirm(payloadToSave, moreInfo);
		} else if (type === InputVarType.jsonObject) {
			if (!isSchemaEmpty && typeof normalizedJsonSchema === "string") try {
				if (JSON.parse(normalizedJsonSchema)?.type !== "object") {
					Toast.notify({
						type: "error",
						message: t("variableConfig.errorMsg.jsonSchemaMustBeObject", { ns: "appDebug" })
					});
					return;
				}
			} catch {
				Toast.notify({
					type: "error",
					message: t("variableConfig.errorMsg.jsonSchemaInvalid", { ns: "appDebug" })
				});
				return;
			}
			onConfirm(payloadToSave, moreInfo);
		} else onConfirm(payloadToSave, moreInfo);
	};
	return /* @__PURE__ */ jsxs(Modal, {
		title: t(`variableConfig.${isCreate ? "addModalTitle" : "editModalTitle"}`, { ns: "appDebug" }),
		isShow,
		onClose,
		children: [/* @__PURE__ */ jsx("div", {
			className: "mb-8",
			ref: modalRef,
			tabIndex: -1,
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ jsx(field_default, {
						title: t("variableConfig.fieldType", { ns: "appDebug" }),
						children: /* @__PURE__ */ jsx(TypeSelector, {
							value: type,
							items: selectOptions,
							onSelect: handleTypeChange
						})
					}),
					/* @__PURE__ */ jsx(field_default, {
						title: t("variableConfig.varName", { ns: "appDebug" }),
						children: /* @__PURE__ */ jsx(Input$1, {
							value: variable,
							onChange: handleVarNameChange,
							onBlur: handleVarKeyBlur,
							placeholder: t("variableConfig.inputPlaceholder", { ns: "appDebug" })
						})
					}),
					/* @__PURE__ */ jsx(field_default, {
						title: t("variableConfig.labelName", { ns: "appDebug" }),
						children: /* @__PURE__ */ jsx(Input$1, {
							value: label,
							onChange: (e) => handlePayloadChange("label")(e.target.value),
							placeholder: t("variableConfig.inputPlaceholder", { ns: "appDebug" })
						})
					}),
					isStringInput && /* @__PURE__ */ jsx(field_default, {
						title: t("variableConfig.maxLength", { ns: "appDebug" }),
						children: /* @__PURE__ */ jsx(config_string_default, {
							maxLength: type === InputVarType.textInput ? TEXT_MAX_LENGTH : Infinity,
							modelId: modelConfig.model_id,
							value: max_length,
							onChange: handlePayloadChange("max_length")
						})
					}),
					type === InputVarType.textInput && /* @__PURE__ */ jsx(field_default, {
						title: t("variableConfig.defaultValue", { ns: "appDebug" }),
						children: /* @__PURE__ */ jsx(Input$1, {
							value: tempPayload.default || "",
							onChange: (e) => handlePayloadChange("default")(e.target.value || void 0),
							placeholder: t("variableConfig.inputPlaceholder", { ns: "appDebug" })
						})
					}),
					type === InputVarType.paragraph && /* @__PURE__ */ jsx(field_default, {
						title: t("variableConfig.defaultValue", { ns: "appDebug" }),
						children: /* @__PURE__ */ jsx(Textarea, {
							value: String(tempPayload.default ?? ""),
							onChange: (e) => handlePayloadChange("default")(e.target.value || void 0),
							placeholder: t("variableConfig.inputPlaceholder", { ns: "appDebug" })
						})
					}),
					type === InputVarType.number && /* @__PURE__ */ jsx(field_default, {
						title: t("variableConfig.defaultValue", { ns: "appDebug" }),
						children: /* @__PURE__ */ jsx(Input$1, {
							type: "number",
							value: tempPayload.default || "",
							onChange: (e) => handlePayloadChange("default")(e.target.value || void 0),
							placeholder: t("variableConfig.inputPlaceholder", { ns: "appDebug" })
						})
					}),
					type === InputVarType.checkbox && /* @__PURE__ */ jsx(field_default, {
						title: t("variableConfig.defaultValue", { ns: "appDebug" }),
						children: /* @__PURE__ */ jsx(SimpleSelect, {
							className: "w-full",
							optionWrapClassName: "max-h-[140px] overflow-y-auto",
							items: [{
								value: CHECKBOX_DEFAULT_TRUE_VALUE,
								name: t("variableConfig.startChecked", { ns: "appDebug" })
							}, {
								value: CHECKBOX_DEFAULT_FALSE_VALUE,
								name: t("variableConfig.noDefaultSelected", { ns: "appDebug" })
							}],
							defaultValue: checkboxDefaultSelectValue,
							onSelect: (item) => handlePayloadChange("default")(parseCheckboxSelectValue(String(item.value))),
							placeholder: t("variableConfig.selectDefaultValue", { ns: "appDebug" }),
							allowSearch: false
						})
					}),
					type === InputVarType.select && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(field_default, {
						title: t("variableConfig.options", { ns: "appDebug" }),
						children: /* @__PURE__ */ jsx(config_select_default, {
							options: options || [],
							onChange: handlePayloadChange("options")
						})
					}), options && options.length > 0 && /* @__PURE__ */ jsx(field_default, {
						title: t("variableConfig.defaultValue", { ns: "appDebug" }),
						children: /* @__PURE__ */ jsx(SimpleSelect, {
							className: "w-full",
							optionWrapClassName: "max-h-[140px] overflow-y-auto",
							items: [{
								value: "",
								name: t("variableConfig.noDefaultValue", { ns: "appDebug" })
							}, ...options.filter((opt) => opt.trim() !== "").map((option) => ({
								value: option,
								name: option
							}))],
							defaultValue: tempPayload.default || "",
							onSelect: (item) => handlePayloadChange("default")(item.value === "" ? void 0 : item.value),
							placeholder: t("variableConfig.selectDefaultValue", { ns: "appDebug" }),
							allowSearch: false
						}, `default-select-${options.join("-")}`)
					})] }),
					[InputVarType.singleFile, InputVarType.multiFiles].includes(type) && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(file_upload_setting_default, {
						payload: tempPayload,
						onChange: (p) => setTempPayload(p),
						isMultiple: type === InputVarType.multiFiles
					}), /* @__PURE__ */ jsx(field_default, {
						title: t("variableConfig.defaultValue", { ns: "appDebug" }),
						children: /* @__PURE__ */ jsx(FileUploaderInAttachmentWrapper, {
							value: type === InputVarType.singleFile ? tempPayload.default ? [tempPayload.default] : [] : tempPayload.default || [],
							onChange: (files) => {
								if (type === InputVarType.singleFile) handlePayloadChange("default")(files?.[0] || void 0);
								else handlePayloadChange("default")(files || void 0);
							},
							fileConfig: {
								allowed_file_types: tempPayload.allowed_file_types || [SupportUploadFileTypes.document],
								allowed_file_extensions: tempPayload.allowed_file_extensions || [],
								allowed_file_upload_methods: tempPayload.allowed_file_upload_methods || [TransferMethod.remote_url],
								number_limits: type === InputVarType.singleFile ? 1 : tempPayload.max_length || 5
							}
						})
					})] }),
					type === InputVarType.jsonObject && /* @__PURE__ */ jsx(field_default, {
						title: t("variableConfig.jsonSchema", { ns: "appDebug" }),
						isOptional: true,
						children: /* @__PURE__ */ jsx(code_editor_default, {
							language: CodeLanguage.json,
							value: jsonSchemaStr,
							onChange: handleJSONSchemaChange,
							noWrapper: true,
							className: "bg h-[80px] overflow-y-auto rounded-[10px] bg-components-input-bg-normal p-1",
							placeholder: /* @__PURE__ */ jsx("div", {
								className: "whitespace-pre",
								children: jsonConfigPlaceHolder
							})
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "!mt-5 flex h-6 items-center space-x-2",
						children: [/* @__PURE__ */ jsx(Checkbox, {
							checked: tempPayload.required,
							disabled: tempPayload.hide,
							onCheck: () => handlePayloadChange("required")(!tempPayload.required)
						}), /* @__PURE__ */ jsx("span", {
							className: "system-sm-semibold text-text-secondary",
							children: t("variableConfig.required", { ns: "appDebug" })
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "!mt-5 flex h-6 items-center space-x-2",
						children: [/* @__PURE__ */ jsx(Checkbox, {
							checked: tempPayload.hide,
							disabled: tempPayload.required,
							onCheck: () => handlePayloadChange("hide")(!tempPayload.hide)
						}), /* @__PURE__ */ jsx("span", {
							className: "system-sm-semibold text-text-secondary",
							children: t("variableConfig.hide", { ns: "appDebug" })
						})]
					})
				]
			})
		}), /* @__PURE__ */ jsx(modal_foot_default, {
			onConfirm: handleConfirm,
			onCancel: onClose
		})]
	});
};
var config_modal_default = React$1.memo(ConfigModal);
//#endregion
//#region node_modules/.pnpm/@lexical+link@0.42.0/node_modules/@lexical/link/LexicalLink.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var w = new Set([
	"http:",
	"https:",
	"mailto:",
	"sms:",
	"tel:"
]);
var M = class M extends Ai {
	__url;
	__target;
	__rel;
	__title;
	static getType() {
		return "link";
	}
	static clone(t) {
		return new M(t.__url, {
			rel: t.__rel,
			target: t.__target,
			title: t.__title
		}, t.__key);
	}
	constructor(t = "", e = {}, n) {
		super(n);
		const { target: r = null, rel: i = null, title: s = null } = e;
		this.__url = t, this.__target = r, this.__rel = i, this.__title = s;
	}
	afterCloneFrom(t) {
		super.afterCloneFrom(t), this.__url = t.__url, this.__rel = t.__rel, this.__target = t.__target, this.__title = t.__title;
	}
	createDOM(e) {
		const n = document.createElement("a");
		return this.updateLinkDOM(null, n, e), ec(n, e.theme.link), n;
	}
	updateLinkDOM(t, n, r) {
		if (As(n)) {
			t && t.__url === this.__url || (n.href = this.sanitizeUrl(this.__url));
			for (const e of [
				"target",
				"rel",
				"title"
			]) {
				const r = `__${e}`, i = this[r];
				t && t[r] === i || (i ? n[e] = i : n.removeAttribute(e));
			}
		}
	}
	updateDOM(t, e, n) {
		return this.updateLinkDOM(t, e, n), !1;
	}
	static importDOM() {
		return { a: (t) => ({
			conversion: B,
			priority: 1
		}) };
	}
	static importJSON(t) {
		return K().updateFromJSON(t);
	}
	updateFromJSON(t) {
		return super.updateFromJSON(t).setURL(t.url).setRel(t.rel || null).setTarget(t.target || null).setTitle(t.title || null);
	}
	sanitizeUrl(t) {
		t = V$1(t);
		try {
			const e = new URL(V$1(t));
			if (!w.has(e.protocol)) return "about:blank";
		} catch (e) {
			return t;
		}
		return t;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			rel: this.getRel(),
			target: this.getTarget(),
			title: this.getTitle(),
			url: this.getURL()
		};
	}
	getURL() {
		return this.getLatest().__url;
	}
	setURL(t) {
		const e = this.getWritable();
		return e.__url = t, e;
	}
	getTarget() {
		return this.getLatest().__target;
	}
	setTarget(t) {
		const e = this.getWritable();
		return e.__target = t, e;
	}
	getRel() {
		return this.getLatest().__rel;
	}
	setRel(t) {
		const e = this.getWritable();
		return e.__rel = t, e;
	}
	getTitle() {
		return this.getLatest().__title;
	}
	setTitle(t) {
		const e = this.getWritable();
		return e.__title = t, e;
	}
	insertNewAfter(t, e = !0) {
		const n = vs(this);
		return this.insertAfter(n, e), n;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !1;
	}
	canBeEmpty() {
		return !1;
	}
	isInline() {
		return !0;
	}
	extractWithChild(t, e, n) {
		if (!wr(e)) return !1;
		const r = e.anchor.getNode(), i = e.focus.getNode();
		return this.isParentOf(r) && this.isParentOf(i) && e.getTextContent().length > 0;
	}
	isEmailURI() {
		return this.__url.startsWith("mailto:");
	}
	isWebSiteURI() {
		return this.__url.startsWith("https://") || this.__url.startsWith("http://");
	}
	shouldMergeAdjacentLink(t) {
		return this.getType() === t.getType() && this.__url === t.__url && this.__target === t.__target && this.__rel === t.__rel && this.__title === t.__title;
	}
};
function F(t) {
	const e = Al(t, "next");
	return [e, e.getFlipped()];
}
function J(t, e) {
	for (const n of e) if (n.origin.isAttached()) {
		Pl(t, Bl(n));
		return;
	}
}
function W(t) {
	const e = $r();
	let n = null, i = null;
	function s() {
		wr(e) && (J(e.anchor, n), J(e.focus, i), Ct$1(e));
	}
	wr(e) && (n = F(e.anchor), i = F(e.focus));
	let l = !1;
	for (const e of pl(t, "next")) {
		const n = e.origin;
		if (Pi(n) && !n.isInline()) {
			const i = n.getChildren();
			if (i.length > 0) {
				const e = vs(t);
				e.append(...i), n.append(e), l = !0;
			}
			Lt(n, Il(e), { $shouldSplit: () => !1 });
		}
	}
	if (t.isAttached()) {
		const e = t.getPreviousSibling();
		if ($(e) && e.shouldMergeAdjacentLink(t)) return e.append(...t.getChildren()), t.remove(), void s();
		const n = t.getNextSibling();
		$(n) && t.shouldMergeAdjacentLink(n) && (t.append(...n.getChildren()), n.remove(), l = !0);
	}
	if (l) {
		if (!t.canBeEmpty() && t.isEmpty()) {
			const e = t.getParent();
			t.remove(), e && e.isEmpty() && e.remove();
		}
		s();
	}
}
function B(t) {
	let n = null;
	if (As(t)) {
		const e = t.textContent;
		(null !== e && "" !== e || t.children.length > 0) && (n = K(t.getAttribute("href") || "", {
			rel: t.getAttribute("rel"),
			target: t.getAttribute("target"),
			title: t.getAttribute("title")
		}));
	}
	return { node: n };
}
function K(t = "", e) {
	return ks(new M(t, e));
}
function $(t) {
	return t instanceof M;
}
var z$1 = class z$1 extends M {
	__isUnlinked;
	constructor(t = "", e = {}, n) {
		super(t, e, n), this.__isUnlinked = void 0 !== e.isUnlinked && null !== e.isUnlinked && e.isUnlinked;
	}
	afterCloneFrom(t) {
		super.afterCloneFrom(t), this.__isUnlinked = t.__isUnlinked;
	}
	static getType() {
		return "autolink";
	}
	static clone(t) {
		return new z$1(t.__url, {
			isUnlinked: t.__isUnlinked,
			rel: t.__rel,
			target: t.__target,
			title: t.__title
		}, t.__key);
	}
	shouldMergeAdjacentLink(t) {
		return !1;
	}
	getIsUnlinked() {
		return this.__isUnlinked;
	}
	setIsUnlinked(t) {
		const e = this.getWritable();
		return e.__isUnlinked = t, e;
	}
	createDOM(t) {
		return this.__isUnlinked ? document.createElement("span") : super.createDOM(t);
	}
	updateDOM(t, e, n) {
		return super.updateDOM(t, e, n) || t.__isUnlinked !== this.__isUnlinked;
	}
	static importJSON(t) {
		return j$1().updateFromJSON(t);
	}
	updateFromJSON(t) {
		return super.updateFromJSON(t).setIsUnlinked(t.isUnlinked || !1);
	}
	static importDOM() {
		return null;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			isUnlinked: this.__isUnlinked
		};
	}
	insertNewAfter(t, e = !0) {
		const n = j$1(this.__url, {
			isUnlinked: this.__isUnlinked,
			rel: this.__rel,
			target: this.__target,
			title: this.__title
		});
		return this.insertAfter(n, e), n;
	}
};
function j$1(t = "", e) {
	return ks(new z$1(t, e));
}
function H$1(t) {
	return t instanceof z$1;
}
var G$1 = ne$1("TOGGLE_LINK_COMMAND");
function Z$1(t, e) {
	if ("element" === t.type) {
		const n = t.getNode();
		Pi(n) || function(t, ...e) {
			const n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
			r.append("code", t);
			for (const t of e) r.append("v", t);
			throw n.search = r.toString(), Error(`Minified Lexical error #${t}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
		}(252);
		return n.getChildren()[t.offset + e] || null;
	}
	return null;
}
function q$1(t, e = {}) {
	let r;
	if (t && "object" == typeof t) {
		const { url: n, ...i } = t;
		r = n, e = {
			...i,
			...e
		};
	} else r = t;
	const { target: i, title: s } = e, l = void 0 === e.rel ? "noreferrer" : e.rel, a = $r();
	if (null === a || !wr(a) && !Or(a)) return;
	if (Or(a)) {
		const t = a.getNodes();
		if (0 === t.length) return;
		t.forEach((t) => {
			if (null === r) {
				const e = Gs(t, (t) => !H$1(t) && $(t));
				e && (e.insertBefore(t), 0 === e.getChildren().length && e.remove());
			} else {
				const e = Gs(t, (t) => !H$1(t) && $(t));
				if (e) e.setURL(r), void 0 !== i && e.setTarget(i), void 0 !== l && e.setRel(l);
				else {
					const e = K(r, {
						rel: l,
						target: i
					});
					t.insertBefore(e), e.append(t);
				}
			}
		});
		return;
	}
	if (a.isCollapsed() && null === r) for (const t of a.getNodes()) {
		const e = Gs(t, (t) => !H$1(t) && $(t));
		null !== e && (e.getChildren().forEach((t) => {
			e.insertBefore(t);
		}), e.remove());
		return;
	}
	const c = a.extract();
	if (null === r) {
		const t = /* @__PURE__ */ new Set();
		c.forEach((e) => {
			const r = Gs(e, (t) => !H$1(t) && $(t));
			if (null !== r) {
				const e = r.getKey();
				if (t.has(e)) return;
				(function(t, e) {
					const n = new Set(e.filter((e) => t.isParentOf(e)).map((t) => t.getKey())), r = t.getChildren(), i = (r) => n.has(r.getKey()) || Pi(r) && e.some((e) => t.isParentOf(e) && r.isParentOf(e)), s = r.filter(i);
					if (s.length === r.length) return r.forEach((e) => t.insertBefore(e)), void t.remove();
					const l = r.findIndex(i), u = r.findLastIndex(i), a = 0 === l, c = u === r.length - 1;
					if (a) s.forEach((e) => t.insertBefore(e));
					else if (c) for (let e = s.length - 1; e >= 0; e--) t.insertAfter(s[e]);
					else {
						for (let e = s.length - 1; e >= 0; e--) t.insertAfter(s[e]);
						const e = r.slice(u + 1);
						if (e.length > 0) {
							const n = vs(t);
							s[s.length - 1].insertAfter(n), e.forEach((t) => n.append(t));
						}
					}
				})(r, c), t.add(e);
			}
		});
		return;
	}
	const _ = /* @__PURE__ */ new Set(), m = (t) => {
		_.has(t.getKey()) || (_.add(t.getKey()), t.setURL(r), void 0 !== i && t.setTarget(i), void 0 !== l && t.setRel(l), void 0 !== s && t.setTitle(s));
	};
	if (1 === c.length) {
		const t = c[0], e = Gs(t, $);
		if (null !== e) return m(e);
	}
	(function(t) {
		const e = $r();
		if (!wr(e)) return t();
		const n = Ct$1(e), r = n.isBackward(), i = Z$1(n.anchor, r ? -1 : 0), s = Z$1(n.focus, r ? 0 : -1);
		t();
		if (i || s) {
			const t = $r();
			if (wr(t)) {
				const e = t.clone();
				if (i) {
					const t = i.getParent();
					t && e.anchor.set(t.getKey(), i.getIndexWithinParent() + (r ? 1 : 0), "element");
				}
				if (s) {
					const t = s.getParent();
					t && e.focus.set(t.getKey(), s.getIndexWithinParent() + (r ? 0 : 1), "element");
				}
				Bo(Ct$1(e));
			}
		}
	})(() => {
		let t = null;
		for (const e of c) {
			if (!e.isAttached()) continue;
			const o = Gs(e, $);
			if (o) {
				m(o);
				continue;
			}
			if (Pi(e)) {
				if (!e.isInline()) continue;
				if ($(e)) {
					if (!(H$1(e) || null !== t && t.getParentOrThrow().isParentOf(e))) {
						m(e), t = e;
						continue;
					}
					for (const t of e.getChildren()) e.insertBefore(t);
					e.remove();
					continue;
				}
			}
			const u = e.getPreviousSibling();
			$(u) && u.is(t) ? u.append(e) : (t = K(r, {
				rel: l,
				target: i,
				title: s
			}), e.insertAfter(t), t.append(e));
		}
	});
}
var Q$1 = /^\+?[0-9\s()-]{5,}$/;
function V$1(t) {
	return t.match(/^[a-z][a-z0-9+.-]*:/i) || t.match(/^[/#.]/) ? t : t.includes("@") ? `mailto:${t}` : Q$1.test(t) ? `tel:${t}` : `https://${t}`;
}
function X$1(t, e) {
	return rc(t.registerNodeTransform(M, W), t.registerCommand(G$1, (t) => {
		const n = e.validateUrl.peek(), r = e.attributes.peek();
		if (null === t) return q$1(null), !0;
		if ("string" == typeof t) return !(void 0 !== n && !n(t)) && (q$1(t, r), !0);
		{
			const { url: e, target: n, rel: i, title: s } = t;
			return q$1(e, {
				...r,
				rel: i,
				target: n,
				title: s
			}), !0;
		}
	}, 0), vt(() => {
		const n = e.validateUrl.value;
		if (!n) return;
		const r = e.attributes.value;
		return t.registerCommand(ge$1, (e) => {
			const i = $r();
			if (!wr(i) || i.isCollapsed() || !Mt$1(e, ClipboardEvent)) return !1;
			if (null === e.clipboardData) return !1;
			const l = e.clipboardData.getData("text");
			return !!n(l) && !i.getNodes().some((t) => Pi(t)) && (t.dispatchCommand(G$1, {
				...r,
				url: l
			}), e.preventDefault(), !0);
		}, 1);
	}));
}
var Y$1 = Hl({
	build: (t, e, n) => xt$1(e),
	config: {
		attributes: void 0,
		validateUrl: void 0
	},
	mergeConfig(t, e) {
		const n = Zl(t, e);
		return t.attributes && (n.attributes = Zl(t.attributes, n.attributes)), n;
	},
	name: "@lexical/link/Link",
	nodes: () => [M],
	register: (t, e, n) => X$1(t, n.getOutput())
});
function tt(t, r, i = {}) {
	const s = (i) => {
		const s = i.target;
		if (!Ds(s)) return;
		const l = yo(s);
		if (null === l) return;
		let o = null, a = null;
		if (l.update(() => {
			const t = Lo(s);
			if (null !== t) {
				const i = Gs(t, Pi);
				if (!r.disabled.peek()) if ($(i)) o = i.sanitizeUrl(i.getURL()), a = i.getTarget();
				else {
					const t = function(t, e) {
						let n = t;
						for (; null != n;) {
							if (e(n)) return n;
							n = n.parentNode;
						}
						return null;
					}(s, As);
					null !== t && (o = t.href, a = t.target);
				}
			}
		}), null === o || "" === o) return;
		const c = t.getEditorState().read($r);
		if (wr(c) && !c.isCollapsed()) return void i.preventDefault();
		const f = "auxclick" === i.type && 1 === i.button;
		window.open(o, r.newTab.peek() || f || i.metaKey || i.ctrlKey || "_blank" === a ? "_blank" : "_self"), i.preventDefault();
	}, l = (t) => {
		1 === t.button && s(t);
	};
	return t.registerRootListener((t) => {
		if (t) return t.addEventListener("click", s, i), t.addEventListener("mouseup", l, i), () => {
			t.removeEventListener("click", s), t.removeEventListener("mouseup", l);
		};
	});
}
Hl({
	build: (t, e, n) => xt$1(e),
	config: Ql({
		disabled: !1,
		newTab: !1
	}),
	dependencies: [Y$1],
	name: "@lexical/link/ClickableLink",
	register: (t, e, n) => tt(t, n.getOutput())
});
function rt(t, e) {
	for (let n = 0; n < e.length; n++) {
		const r = e[n](t);
		if (r) return r;
	}
	return null;
}
var it = /[.,;\s]/;
function st(t) {
	return it.test(t);
}
function lt(t) {
	return st(t[t.length - 1]);
}
function ot(t) {
	return st(t[0]);
}
function ut(t) {
	let e = t.getPreviousSibling();
	return Pi(e) && (e = e.getLastDescendant()), null === e || Zn(e) || yr(e) && lt(e.getTextContent());
}
function at(t) {
	let e = t.getNextSibling();
	return Pi(e) && (e = e.getFirstDescendant()), null === e || Zn(e) || yr(e) && ot(e.getTextContent());
}
function ct(t, e, n, r) {
	if (!(t > 0 ? st(n[t - 1]) : ut(r[0]))) return !1;
	return e < n.length ? st(n[e]) : at(r[r.length - 1]);
}
function gt(t, e, n) {
	const r = [], i = [], s = [];
	let l = 0, o = 0;
	const u = [...t];
	for (; u.length > 0;) {
		const t = u[0], a = t.getTextContent().length, c = o;
		o + a <= e ? (r.push(t), l += a) : c >= n ? s.push(t) : i.push(t), o += a, u.shift();
	}
	return [
		l,
		r,
		i,
		s
	];
}
function ft(t, e, n, r) {
	const i = j$1(r.url, r.attributes);
	if (1 === t.length) {
		let s, l = t[0];
		0 === e ? [s, l] = l.splitText(n) : [, s, l] = l.splitText(e, n);
		const o = pr(r.text);
		return o.setFormat(s.getFormat()), o.setDetail(s.getDetail()), o.setStyle(s.getStyle()), i.append(o), s.replace(i), l;
	}
	if (t.length > 1) {
		const r = t[0];
		let s, l = r.getTextContent().length;
		0 === e ? s = r : [, s] = r.splitText(e);
		const o = [];
		let a;
		for (let e = 1; e < t.length; e++) {
			const r = t[e], i = r.getTextContent().length, s = l;
			if (s < n) if (l + i <= n) o.push(r);
			else {
				const [t, e] = r.splitText(n - s);
				o.push(t), a = e;
			}
			l += i;
		}
		const c = $r(), d = c ? c.getNodes().find(yr) : void 0, h = pr(s.getTextContent());
		return h.setFormat(s.getFormat()), h.setDetail(s.getDetail()), h.setStyle(s.getStyle()), i.append(h, ...o), d && d === s && (wr(c) ? h.select(c.anchor.offset, c.focus.offset) : Or(c) && h.select(0, h.getTextContent().length)), s.replace(i), a;
	}
}
function dt(t, e, n) {
	const r = t.getChildren(), i = r.length;
	for (let e = 0; e < i; e++) {
		const i = r[e];
		if (!yr(i) || !i.isSimpleText()) return ht(t), void n(null, t.getURL());
	}
	const s = t.getTextContent(), l = rt(s, e);
	if (null === l || l.text !== s) return ht(t), void n(null, t.getURL());
	if (!ut(t) || !at(t)) return ht(t), void n(null, t.getURL());
	const o = t.getURL();
	if (o !== l.url && (t.setURL(l.url), n(l.url, o)), l.attributes) {
		const e = t.getRel();
		e !== l.attributes.rel && (t.setRel(l.attributes.rel || null), n(l.attributes.rel || null, e));
		const r = t.getTarget();
		r !== l.attributes.target && (t.setTarget(l.attributes.target || null), n(l.attributes.target || null, r));
	}
}
function ht(t) {
	const e = t.getChildren();
	for (let n = e.length - 1; n >= 0; n--) t.insertAfter(e[n]);
	return t.remove(), e.map((t) => t.getLatest());
}
var _t = {
	changeHandlers: [],
	excludeParents: [],
	matchers: []
};
function pt(t, e = _t) {
	const { matchers: n, changeHandlers: r, excludeParents: s } = e, l = (t, e) => {
		for (const n of r) n(t, e);
	};
	return rc(t.registerNodeTransform(lr, (t) => {
		const e = t.getParentOrThrow(), r = t.getPreviousSibling();
		if (H$1(e)) dt(e, n, l);
		else if (!$(e) && !s.some((t) => t(e))) {
			if (t.isSimpleText() && (ot(t.getTextContent()) || !H$1(r))) (function(t, e, n) {
				for (const e of t) {
					const t = e.getParent();
					if (H$1(t) && !t.getIsUnlinked()) return;
				}
				let r = [...t];
				const i = r.map((t) => t.getTextContent()).join("");
				let s, l = i, o = 0;
				for (; (s = rt(l, e)) && null !== s;) {
					const t = s.index, e = t + s.length;
					if (ct(o + t, o + e, i, r)) {
						const [i, , u, a] = gt(r, o + t, o + e);
						let c = !1;
						for (const t of u) {
							const e = t.getParent();
							if (H$1(e) && !e.getIsUnlinked()) {
								c = !0;
								break;
							}
						}
						if (c) {
							o += e, l = l.substring(e);
							continue;
						}
						const g = ft(u, o + t - i, o + e - i, s);
						r = g ? [g, ...a] : a, n(s.url, null), o = 0;
					} else o += e;
					l = l.substring(e);
				}
			})(function(t) {
				const e = [t];
				let n = t.getNextSibling();
				for (; null !== n && yr(n) && n.isSimpleText() && (e.push(n), !/[\s]/.test(n.getTextContent()));) n = n.getNextSibling();
				return e;
			}(t), n, l);
			(function(t, e, n) {
				const r = t.getParent(), i = t.getPreviousSibling(), s = t.getNextSibling(), l = t.getTextContent();
				if (!H$1(r) || r.getIsUnlinked()) {
					if (H$1(i) && !i.getIsUnlinked() && i.is(t.getPreviousSibling()) && t.getParent() === i.getParent()) {
						if (!ot(l)) return ht(i), void n(null, i.getURL());
						if (o = l, i.isEmailURI() ? /^\.[a-zA-Z]{2,}/.test(o) : /^\.[a-zA-Z0-9]{1,}/.test(o)) {
							const r = i.getTextContent() + l, s = rt(r, e);
							null !== s && s.text === r && (i.append(t), dt(i, e, n), n(null, i.getURL()));
						}
					}
					var o;
					!H$1(s) || s.getIsUnlinked() || lt(l) || s.is(t.getNextSibling()) && t.getParent() === s.getParent() && (ht(s), n(null, s.getURL()));
				}
			})(t, n, l);
		}
	}), t.registerCommand(G$1, (t) => {
		const e = $r();
		if (null !== t || !wr(e)) return !1;
		return e.extract().forEach((t) => {
			const e = t.getParent();
			H$1(e) && (e.setIsUnlinked(!e.getIsUnlinked()), e.markDirty());
		}), !1;
	}, 1));
}
Hl({
	config: _t,
	dependencies: [Y$1],
	mergeConfig(t, e) {
		const n = Zl(t, e);
		for (const r of [
			"matchers",
			"changeHandlers",
			"excludeParents"
		]) {
			const i = e[r];
			Array.isArray(i) && (n[r] = [...t[r], ...i]);
		}
		return n;
	},
	name: "@lexical/link/AutoLink",
	nodes: [z$1],
	register: pt
});
//#endregion
//#region node_modules/.pnpm/@lexical+list@0.42.0/node_modules/@lexical/list/LexicalList.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function V(e, ...t) {
	const n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (const e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function z(e) {
	let t = 1, n = e.getParent();
	for (; null != n;) {
		if (ue(n)) {
			const e = n.getParent();
			if (_e(e)) {
				t++, n = e.getParent();
				continue;
			}
			V(40);
		}
		return t;
	}
	return t;
}
function X(e) {
	let t = e.getParent();
	_e(t) || V(40);
	let n = t;
	for (; null !== n;) n = n.getParent(), _e(n) && (t = n);
	return t;
}
function j(e) {
	let t = [];
	const n = e.getChildren().filter(ue);
	for (let e = 0; e < n.length; e++) {
		const r = n[e], i = r.getFirstChild();
		_e(i) ? t = t.concat(j(i)) : t.push(r);
	}
	return t;
}
function q(e) {
	return ue(e) && _e(e.getFirstChild());
}
function H(e) {
	return ae().append(e);
}
function G(e, t) {
	return ue(e) && (0 === t.length || 1 === t.length && e.is(t[0]) && 0 === e.getChildrenSize());
}
function Q(e) {
	const t = $r();
	if (null !== t) {
		let n = t.getNodes();
		if (wr(t)) {
			const r = t.getStartEndPoints();
			null === r && V(143);
			const [i] = r, s = i.getNode(), o = s.getParent();
			if (Ss(s)) {
				const e = s.getFirstChild();
				if (e) n = e.selectStart().getNodes();
				else {
					const e = Vi();
					s.append(e), n = e.select().getNodes();
				}
			} else if (G(s, n)) {
				const t = me(e);
				if (Ss(o)) {
					s.replace(t);
					const e = ae();
					Pi(s) && (e.setFormat(s.getFormatType()), e.setIndent(s.getIndent())), t.append(e);
				} else if (ue(s)) {
					const e = s.getParentOrThrow();
					Y(t, e.getChildren()), e.replace(t);
				}
				return;
			}
		}
		const r = /* @__PURE__ */ new Set();
		for (let t = 0; t < n.length; t++) {
			const i = n[t];
			if (Pi(i) && i.isEmpty() && !ue(i) && !r.has(i.getKey())) {
				Z(i, e);
				continue;
			}
			let s = bo(i) ? i.getParent() : ue(i) && i.isEmpty() ? i : null;
			for (; null != s;) {
				const t = s.getKey();
				if (_e(s)) {
					if (!r.has(t)) {
						const n = me(e);
						Y(n, s.getChildren()), s.replace(n), r.add(t);
					}
					break;
				}
				{
					const n = s.getParent();
					if (Ss(n) && !r.has(t)) {
						r.add(t), Z(s, e);
						break;
					}
					s = n;
				}
			}
		}
	}
}
function Y(e, t) {
	e.splice(e.getChildrenSize(), 0, t);
}
function Z(e, t) {
	if (_e(e)) return e;
	const n = e.getPreviousSibling(), r = e.getNextSibling(), i = ae();
	let s;
	if (Y(i, e.getChildren()), _e(n) && t === n.getListType()) n.append(i), _e(r) && t === r.getListType() && (Y(n, r.getChildren()), r.remove()), s = n;
	else if (_e(r) && t === r.getListType()) r.getFirstChildOrThrow().insertBefore(i), s = r;
	else {
		const n = me(t);
		n.append(i), e.replace(n), s = n;
	}
	i.setFormat(e.getFormatType()), i.setIndent(e.getIndent());
	const o = $r();
	return wr(o) && (s.getKey() === o.anchor.key && o.anchor.set(i.getKey(), o.anchor.offset, "element"), s.getKey() === o.focus.key && o.focus.set(i.getKey(), o.focus.offset, "element")), e.remove(), s;
}
function ee(e, t) {
	const n = e.getLastChild(), r = t.getFirstChild();
	n && r && q(n) && q(r) && (ee(n.getFirstChild(), r.getFirstChild()), r.remove());
	const i = t.getChildren();
	i.length > 0 && e.append(...i), t.remove();
}
function te() {
	const e = $r();
	if (wr(e)) {
		const t = /* @__PURE__ */ new Set(), r = e.getNodes(), i = e.anchor.getNode();
		if (G(i, r)) t.add(X(i));
		else for (let e = 0; e < r.length; e++) {
			const i = r[e];
			if (bo(i)) {
				const e = St(i, oe);
				null != e && t.add(X(e));
			}
		}
		for (const n of t) {
			let t = n;
			const r = j(n);
			for (const n of r) {
				const r = Vi().setTextStyle(e.style).setTextFormat(e.format);
				Y(r, n.getChildren()), t.insertAfter(r), t = r, n.__key === e.anchor.key && Pl(e.anchor, Bl(pl(r, "next"))), n.__key === e.focus.key && Pl(e.focus, Bl(pl(r, "next"))), n.remove();
			}
			n.remove();
		}
	}
}
function ne(e) {
	const t = "check" !== e.getListType();
	let n = e.getStart();
	for (const r of e.getChildren()) ue(r) && (r.getValue() !== n && r.setValue(n), t && null != r.getLatest().__checked && r.setChecked(void 0), _e(r.getFirstChild()) || n++);
}
function re(e) {
	const t = /* @__PURE__ */ new Set();
	if (q(e) || t.has(e.getKey())) return;
	const n = e.getParent(), r = e.getNextSibling(), i = e.getPreviousSibling();
	if (q(r) && q(i)) {
		const n = i.getFirstChild();
		if (_e(n)) {
			n.append(e);
			const i = r.getFirstChild();
			if (_e(i)) Y(n, i.getChildren()), r.remove(), t.add(r.getKey());
		}
	} else if (q(r)) {
		const t = r.getFirstChild();
		if (_e(t)) {
			const n = t.getFirstChild();
			null !== n && n.insertBefore(e);
		}
	} else if (q(i)) {
		const t = i.getFirstChild();
		_e(t) && t.append(e);
	} else if (_e(n)) {
		const t = vs(e), s = vs(n);
		t.append(s), s.append(e), i ? i.insertAfter(t) : r ? r.insertBefore(t) : n.append(t);
	}
}
function ie(e) {
	if (q(e)) return;
	const t = e.getParent(), n = t ? t.getParent() : void 0;
	if (_e(n ? n.getParent() : void 0) && ue(n) && _e(t)) {
		const r = t ? t.getFirstChild() : void 0, i = t ? t.getLastChild() : void 0;
		if (e.is(r)) n.insertBefore(e), t.isEmpty() && n.remove();
		else if (e.is(i)) n.insertAfter(e), t.isEmpty() && n.remove();
		else {
			const r = vs(e), i = vs(t);
			r.append(i), e.getPreviousSiblings().forEach((e) => i.append(e));
			const s = vs(e), o = vs(t);
			s.append(o), Y(o, e.getNextSiblings()), n.insertBefore(r), n.insertAfter(s), n.replace(e);
		}
	}
}
function se(e = !1) {
	const t = $r();
	if (!wr(t) || !t.isCollapsed()) return !1;
	const n = t.anchor.getNode();
	let r = null;
	if (ue(n) && 0 === n.getChildrenSize()) r = n;
	else if (yr(n)) {
		const e = n.getParent();
		ue(e) && e.getChildren().every((e) => yr(e) && "" === e.getTextContent().trim()) && (r = e);
	}
	if (null === r) return !1;
	const i = X(r), s = r.getParent();
	_e(s) || V(40);
	const o = s.getParent();
	let l;
	if (Ss(o)) l = Vi(), i.insertAfter(l);
	else {
		if (!ue(o)) return !1;
		l = vs(o), o.insertAfter(l);
	}
	l.setTextStyle(t.style).setTextFormat(t.format).select();
	const c = r.getNextSiblings();
	if (c.length > 0) {
		const t = e ? function(e, t) {
			return e.getStart() + t.getIndexWithinParent();
		}(s, r) : 1, n = vs(s).setStart(t);
		if (ue(l)) {
			const e = vs(l);
			e.append(n), l.insertAfter(e);
		} else l.insertAfter(n);
		n.append(...c);
	}
	return function(e) {
		let t = e;
		for (; null == t.getNextSibling() && null == t.getPreviousSibling();) {
			const e = t.getParent();
			if (null == e || !ue(e) && !_e(e)) break;
			t = e;
		}
		t.remove();
	}(r), !0;
}
var oe = class extends Ai {
	__value;
	__checked;
	$config() {
		return this.config("listitem", {
			$transform: (e) => {
				if (null == e.__checked) return;
				const t = e.getParent();
				_e(t) && "check" !== t.getListType() && null != e.getChecked() && e.setChecked(void 0);
			},
			extends: Ai,
			importDOM: Ln({ li: () => ({
				conversion: le,
				priority: 0
			}) })
		});
	}
	constructor(e = 1, t = void 0, n) {
		super(n), this.__value = void 0 === e ? 1 : e, this.__checked = t;
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__value = e.__value, this.__checked = e.__checked;
	}
	createDOM(e) {
		const t = document.createElement("li");
		return this.updateListItemDOM(null, t, e), t;
	}
	updateListItemDOM(e, t, n) {
		(function(e, t, n) {
			const r = t.getParent();
			!_e(r) || "check" !== r.getListType() || _e(t.getFirstChild()) ? (e.removeAttribute("role"), e.removeAttribute("tabIndex"), e.removeAttribute("aria-checked")) : (e.setAttribute("role", "checkbox"), e.setAttribute("tabIndex", "-1"), n && t.__checked === n.__checked || e.setAttribute("aria-checked", t.getChecked() ? "true" : "false"));
		})(t, this, e), t.value = this.__value, function(e, t, n) {
			const s = [], o = [], l = t.list, c = l ? l.listitem : void 0;
			let a;
			l && l.nested && (a = l.nested.listitem);
			void 0 !== c && s.push(...tc(c));
			if (l) {
				const e = n.getParent(), t = _e(e) && "check" === e.getListType(), r = n.getChecked();
				t && !r || o.push(l.listitemUnchecked), t && r || o.push(l.listitemChecked), t && s.push(r ? l.listitemChecked : l.listitemUnchecked);
			}
			if (void 0 !== a) {
				const e = tc(a);
				n.getChildren().some((e) => _e(e)) ? s.push(...e) : o.push(...e);
			}
			o.length > 0 && nc(e, ...o);
			s.length > 0 && ec(e, ...s);
		}(t, n.theme, this);
		const s = e ? e.__style : "", o = this.__style;
		s !== o && ("" === o ? t.removeAttribute("style") : t.style.cssText = o), function(e, t, n) {
			const r = b(t.__textStyle);
			for (const t in r) e.style.setProperty(`--listitem-marker-${t}`, r[t]);
			if (n) for (const t in b(n.__textStyle)) t in r || e.style.removeProperty(`--listitem-marker-${t}`);
		}(t, this, e);
	}
	updateDOM(e, t, n) {
		const r = t;
		return this.updateListItemDOM(e, r, n), !1;
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setValue(e.value).setChecked(e.checked);
	}
	exportDOM(e) {
		const t = this.createDOM(e._config), n = this.getFormatType();
		n && (t.style.textAlign = n);
		const r = this.getDirection();
		return r && (t.dir = r), { element: t };
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			checked: this.getChecked(),
			value: this.getValue()
		};
	}
	append(...e) {
		for (let t = 0; t < e.length; t++) {
			const n = e[t];
			if (Pi(n) && this.canMergeWith(n)) {
				const e = n.getChildren();
				this.append(...e), n.remove();
			} else super.append(n);
		}
		return this;
	}
	replace(e, t) {
		if (ue(e)) return super.replace(e);
		this.setIndent(0);
		const n = this.getParentOrThrow();
		if (!_e(n)) return e;
		if (n.__first === this.getKey()) n.insertBefore(e);
		else if (n.__last === this.getKey()) n.insertAfter(e);
		else {
			const t = vs(n);
			let r = this.getNextSibling();
			for (; r;) {
				const e = r;
				r = r.getNextSibling(), t.append(e);
			}
			n.insertAfter(e), e.insertAfter(t);
		}
		return t && (Pi(e) || V(139), this.getChildren().forEach((t) => {
			e.append(t);
		})), this.remove(), 0 === n.getChildrenSize() && n.remove(), e;
	}
	insertAfter(e, t = !0) {
		const n = this.getParentOrThrow();
		if (_e(n) || V(39), ue(e)) return super.insertAfter(e, t);
		const r = this.getNextSiblings();
		if (n.insertAfter(e, t), 0 !== r.length) {
			const i = vs(n);
			r.forEach((e) => i.append(e)), e.insertAfter(i, t);
		}
		return e;
	}
	remove(e) {
		const t = this.getPreviousSibling(), n = this.getNextSibling();
		super.remove(e), t && n && q(t) && q(n) && (ee(t.getFirstChild(), n.getFirstChild()), n.remove());
	}
	resetOnCopyNodeFrom(e) {
		super.resetOnCopyNodeFrom(e), e.getChecked() && this.setChecked(!1);
	}
	insertNewAfter(e, t = !0) {
		const n = vs(this);
		return this.insertAfter(n, t), n;
	}
	collapseAtStart(e) {
		const t = Vi();
		this.getChildren().forEach((e) => t.append(e));
		const n = this.getParentOrThrow(), r = n.getParentOrThrow(), i = ue(r);
		if (1 === n.getChildrenSize()) if (i) n.remove(), r.select();
		else {
			n.insertBefore(t), n.remove();
			const r = e.anchor, i = e.focus, s = t.getKey();
			"element" === r.type && r.getNode().is(this) && r.set(s, r.offset, "element"), "element" === i.type && i.getNode().is(this) && i.set(s, i.offset, "element");
		}
		else n.insertBefore(t), this.remove();
		return !0;
	}
	getValue() {
		return this.getLatest().__value;
	}
	setValue(e) {
		const t = this.getWritable();
		return t.__value = e, t;
	}
	getChecked() {
		const e = this.getLatest();
		let t;
		const n = this.getParent();
		return _e(n) && (t = n.getListType()), "check" === t ? Boolean(e.__checked) : void 0;
	}
	setChecked(e) {
		const t = this.getWritable();
		return t.__checked = e, t;
	}
	toggleChecked() {
		const e = this.getWritable();
		return e.setChecked(!e.__checked);
	}
	getIndent() {
		const e = this.getParent();
		if (null === e || !this.isAttached()) return this.getLatest().__indent;
		let t = e.getParentOrThrow(), n = 0;
		for (; ue(t);) t = t.getParentOrThrow().getParentOrThrow(), n++;
		return n;
	}
	setIndent(e) {
		"number" != typeof e && V(117), (e = Math.floor(e)) >= 0 || V(199);
		let t = this.getIndent();
		for (; t !== e;) t < e ? (re(this), t++) : (ie(this), t--);
		return this;
	}
	canInsertAfter(e) {
		return ue(e);
	}
	canReplaceWith(e) {
		return ue(e);
	}
	canMergeWith(e) {
		return ue(e) || Yi(e);
	}
	extractWithChild(e, t) {
		if (!wr(t)) return !1;
		const n = t.anchor.getNode(), r = t.focus.getNode();
		return this.isParentOf(n) && this.isParentOf(r) && this.getTextContent().length === t.getTextContent().length;
	}
	isParentRequired() {
		return !0;
	}
	createParentElementNode() {
		return me("bullet");
	}
	canMergeWhenEmpty() {
		return !0;
	}
};
function le(e) {
	if (e.classList.contains("task-list-item")) {
		for (const t of e.children) if ("INPUT" === t.tagName) return ce(t);
	}
	if (e.classList.contains("joplin-checkbox")) {
		for (const t of e.children) if (t.classList.contains("checkbox-wrapper") && t.children.length > 0 && "INPUT" === t.children[0].tagName) return ce(t.children[0]);
	}
	const t = e.getAttribute("aria-checked");
	return { node: ae("true" === t || "false" !== t && void 0) };
}
function ce(e) {
	if (!("checkbox" === e.getAttribute("type"))) return { node: null };
	return { node: ae(e.hasAttribute("checked")) };
}
function ae(e) {
	return ks(new oe(void 0, e));
}
function ue(e) {
	return e instanceof oe;
}
var ge = class extends Ai {
	__tag;
	__start;
	__listType;
	$config() {
		return this.config("list", {
			$transform: (e) => {
				(function(e) {
					const t = e.getNextSibling();
					_e(t) && e.getListType() === t.getListType() && ee(e, t);
				})(e), ne(e);
			},
			extends: Ai,
			importDOM: Ln({
				ol: () => ({
					conversion: fe,
					priority: 0
				}),
				ul: () => ({
					conversion: fe,
					priority: 0
				})
			})
		});
	}
	constructor(e = "number", t = 1, n) {
		super(n);
		const r = pe[e] || e;
		this.__listType = r, this.__tag = "number" === r ? "ol" : "ul", this.__start = t;
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__listType = e.__listType, this.__tag = e.__tag, this.__start = e.__start;
	}
	getTag() {
		return this.getLatest().__tag;
	}
	setListType(e) {
		const t = this.getWritable();
		return t.__listType = e, t.__tag = "number" === e ? "ol" : "ul", t;
	}
	getListType() {
		return this.getLatest().__listType;
	}
	getStart() {
		return this.getLatest().__start;
	}
	setStart(e) {
		const t = this.getWritable();
		return t.__start = e, t;
	}
	createDOM(e, t) {
		const n = this.__tag, r = document.createElement(n);
		return 1 !== this.__start && r.setAttribute("start", String(this.__start)), r.__lexicalListType = this.__listType, he(r, e.theme, this), r;
	}
	updateDOM(e, t, n) {
		return e.__tag !== this.__tag || e.__listType !== this.__listType || (he(t, n.theme, this), e.__start !== this.__start && t.setAttribute("start", String(this.__start)), !1);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setListType(e.listType).setStart(e.start);
	}
	exportDOM(e) {
		const t = this.createDOM(e._config, e);
		return Ps(t) && (1 !== this.__start && t.setAttribute("start", String(this.__start)), "check" === this.__listType && t.setAttribute("__lexicalListType", "check")), { element: t };
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			listType: this.getListType(),
			start: this.getStart(),
			tag: this.getTag()
		};
	}
	canBeEmpty() {
		return !1;
	}
	canIndent() {
		return !1;
	}
	splice(e, t, n) {
		const r = n.find(ue) ?? this.getChildren().find(ue), i = r ? () => vs(r) : ae;
		let s = n;
		for (let e = 0; e < n.length; e++) {
			const t = n[e];
			ue(t) || (s === n && (s = [...n]), s[e] = i().append(!Pi(t) || _e(t) || t.isInline() ? t : pr(t.getTextContent())));
		}
		return super.splice(e, t, s);
	}
	extractWithChild(e) {
		return ue(e);
	}
};
function he(e, t, n) {
	const s = [], o = [], l = t.list;
	if (void 0 !== l) {
		const e = l[`${n.__tag}Depth`] || [], t = z(n) - 1, r = t % e.length, i = e[r], c = l[n.__tag];
		let a;
		const u = l.nested, g = l.checklist;
		if (void 0 !== u && u.list && (a = u.list), void 0 !== c && s.push(c), void 0 !== g && "check" === n.__listType && s.push(g), void 0 !== i) {
			s.push(...tc(i));
			for (let t = 0; t < e.length; t++) t !== r && o.push(n.__tag + t);
		}
		if (void 0 !== a) {
			const e = tc(a);
			t > 1 ? s.push(...e) : o.push(...e);
		}
	}
	o.length > 0 && nc(e, ...o), s.length > 0 && ec(e, ...s);
}
function de(e) {
	const t = [];
	for (let n = 0; n < e.length; n++) {
		const r = e[n];
		if (ue(r)) {
			t.push(r);
			const e = r.getChildren();
			e.length > 1 && e.forEach((e) => {
				_e(e) && t.push(H(e));
			});
		} else t.push(H(r));
	}
	return t;
}
function fe(e) {
	const t = e.nodeName.toLowerCase();
	let n = null;
	if ("ol" === t) n = me("number", e.start);
	else "ul" === t && (n = function(e) {
		if ("check" === e.getAttribute("__lexicallisttype") || e.classList.contains("contains-task-list") || "1" === e.getAttribute("data-is-checklist")) return !0;
		for (const t of e.childNodes) if (Ps(t) && t.hasAttribute("aria-checked")) return !0;
		return !1;
	}(e) ? me("check") : me("bullet"));
	return {
		after: de,
		node: n
	};
}
var pe = {
	ol: "number",
	ul: "bullet"
};
function me(e = "number", t = 1) {
	return ks(new ge(e, t));
}
function _e(e) {
	return e instanceof ge;
}
var Ce = ne$1("INSERT_CHECK_LIST_COMMAND");
function ye(e, t) {
	const n = t && t.disableTakeFocusOnClick || !1, r = "boolean" == typeof n ? () => n : n.peek.bind(n), i = (e) => {
		(function(e, t) {
			ve(e, () => {
				if (Ps(e.target)) {
					const n = e.target, r = yo(n);
					null != r && r.isEditable() && r.update(() => {
						const e = Lo(n);
						ue(e) && (t ? (gs("skip-selection-focus"), gs("skip-dom-selection")) : n.focus(), e.toggleChecked());
					});
				}
			});
		})(e, r());
	}, c = (e) => {
		(function(e, t) {
			ve(e, () => {
				e.preventDefault(), t && e.stopPropagation();
			});
		})(e, r());
	};
	return rc(e.registerCommand(Ce, () => (Q("check"), !0), 1), e.registerCommand(we, (t) => Se(t, e, !1), 1), e.registerCommand(be$1, (t) => Se(t, e, !0), 1), e.registerCommand(Ae$1, () => {
		if (null != Te()) return e.getRootElement()?.focus(), !0;
		return !1;
	}, 1), e.registerCommand(Oe, (t) => {
		const n = Te();
		return !(null == n || !e.isEditable()) && (e.update(() => {
			const e = Lo(n);
			ue(e) && (t.preventDefault(), e.toggleChecked());
		}), !0);
	}, 1), e.registerCommand(Te$1, (t) => e.getEditorState().read(() => {
		const n = $r();
		if (wr(n) && n.isCollapsed()) {
			const { anchor: r } = n, i = "element" === r.type;
			if (i || 0 === r.offset) {
				const n = r.getNode(), s = Gs(n, (e) => Pi(e) && !e.isInline());
				if (ue(s)) {
					const r = s.getParent();
					if (_e(r) && "check" === r.getListType() && (i || s.getFirstDescendant() === n)) {
						const n = e.getElementByKey(s.__key);
						if (null != n && document.activeElement !== n) return n.focus(), t.preventDefault(), !0;
					}
				}
			}
		}
		return !1;
	}), 1), e.registerRootListener((e) => {
		if (null !== e) return e.addEventListener("click", i), e.addEventListener("pointerdown", c, { capture: !0 }), e.addEventListener("mousedown", c, { capture: !0 }), e.addEventListener("touchstart", c, {
			capture: !0,
			passive: !1
		}), () => {
			e.removeEventListener("click", i), e.removeEventListener("pointerdown", c, { capture: !0 }), e.removeEventListener("mousedown", c, { capture: !0 }), e.removeEventListener("touchstart", c, { capture: !0 });
		};
	}));
}
function ve(e, t) {
	const n = e.target;
	if (!Ps(n)) return;
	const r = n.firstChild;
	if (Ps(r) && ("UL" === r.tagName || "OL" === r.tagName)) return;
	const i = n.parentNode;
	if (!i || "check" !== i.__lexicalListType) return;
	let o = null, l = null;
	if ("clientX" in e) o = e.clientX;
	else if ("touches" in e) {
		const t = e.touches;
		t.length > 0 && (o = t[0].clientX, l = "touch");
	}
	if (null == o) return;
	const a = n.getBoundingClientRect(), u = o / kt(n), g = window.getComputedStyle ? window.getComputedStyle(n, "::before") : { width: "0px" }, h = parseFloat(g.width), d = "touch" === l || "touch" === e.pointerType ? 32 : 0;
	("rtl" === n.dir ? u < a.right + d && u > a.right - h - d : u > a.left - d && u < a.left + h + d) && t();
}
function Te() {
	const e = document.activeElement;
	return Ps(e) && "LI" === e.tagName && null != e.parentNode && "check" === e.parentNode.__lexicalListType ? e : null;
}
function Se(e, t, n) {
	const r = Te();
	return null != r && t.update(() => {
		const i = Lo(r);
		if (!ue(i)) return;
		const s = function(e, t) {
			let n = t ? e.getPreviousSibling() : e.getNextSibling(), r = e;
			for (; null == n && ue(r);) r = r.getParentOrThrow().getParent(), null != r && (n = t ? r.getPreviousSibling() : r.getNextSibling());
			for (; ue(n);) {
				const e = t ? n.getLastChild() : n.getFirstChild();
				if (!_e(e)) return n;
				n = t ? e.getLastChild() : e.getFirstChild();
			}
			return null;
		}(i, n);
		if (null != s) {
			s.selectStart();
			const n = t.getElementByKey(s.__key);
			null != n && (e.preventDefault(), setTimeout(() => {
				n.focus();
			}, 0));
		}
	}), !1;
}
var ke = ne$1("UPDATE_LIST_START_COMMAND"), be = ne$1("INSERT_UNORDERED_LIST_COMMAND"), xe = ne$1("INSERT_ORDERED_LIST_COMMAND"), Ne = ne$1("REMOVE_LIST_COMMAND");
function Le(e, t) {
	return rc(e.registerCommand(xe, () => (Q("number"), !0), 1), e.registerCommand(ke, (e) => {
		const { listNodeKey: t, newStart: n } = e, r = Po(t);
		return !!_e(r) && ("number" === r.getListType() && (r.setStart(n), ne(r)), !0);
	}, 1), e.registerCommand(be, () => (Q("bullet"), !0), 1), e.registerCommand(Ne, () => (te(), !0), 1), e.registerCommand(de$1, () => se(!!(t && t.restoreNumbering)), 1), e.registerNodeTransform(oe, (e) => {
		const t = e.getFirstChild();
		if (t) {
			if (yr(t)) {
				const n = t.getStyle(), r = t.getFormat();
				e.getTextStyle() !== n && e.setTextStyle(n), e.getTextFormat() !== r && e.setTextFormat(r);
			}
		} else {
			const t = $r();
			wr(t) && (t.style !== e.getTextStyle() || t.format !== e.getTextFormat()) && t.isCollapsed() && e.is(t.anchor.getNode()) && e.setTextStyle(t.style).setTextFormat(t.format);
		}
	}), e.registerNodeTransform(lr, (e) => {
		const t = e.getParent();
		if (ue(t) && e.is(t.getFirstChild())) {
			const n = e.getStyle(), r = e.getFormat();
			n === t.getTextStyle() && r === t.getTextFormat() || t.setTextStyle(n).setTextFormat(r);
		}
	}));
}
function Pe(e) {
	const t = (e) => {
		const t = e.getParent();
		if (_e(e.getFirstChild()) || !_e(t)) return;
		const n = Gs(e, (e) => ue(e) && _e(e.getParent()) && ue(e.getPreviousSibling()));
		if (null === n && e.getIndent() > 0) e.setIndent(0);
		else if (ue(n)) {
			const r = n.getPreviousSibling();
			if (ue(r)) {
				const i = function(e) {
					let t = e, n = t.getFirstChild();
					for (; _e(n);) {
						const e = n.getLastChild();
						if (!ue(e)) break;
						t = e, n = t.getFirstChild();
					}
					return t;
				}(r).getParent();
				if (_e(i)) {
					const n = z(i);
					n + 1 < z(t) && e.setIndent(n);
				}
			}
		}
	};
	return e.registerNodeTransform(ge, (e) => {
		const n = [e];
		for (; n.length > 0;) {
			const e = n.shift();
			if (_e(e)) {
				for (const r of e.getChildren()) if (ue(r)) {
					t(r);
					const e = r.getFirstChild();
					_e(e) && n.push(e);
				}
			}
		}
	});
}
var Ae = Hl({
	build: (e, n, r) => xt$1(n),
	config: Ql({
		hasStrictIndent: !1,
		shouldPreserveNumbering: !1
	}),
	name: "@lexical/list/List",
	nodes: () => [ge, oe],
	register(t, n, r) {
		const i = r.getOutput();
		return rc(vt(() => Le(t, { restoreNumbering: i.shouldPreserveNumbering.value })), vt(() => i.hasStrictIndent.value ? Pe(t) : void 0));
	}
});
Hl({
	build: (e, n) => xt$1(n),
	config: Ql({ disableTakeFocusOnClick: !1 }),
	dependencies: [Ae],
	name: "@lexical/list/CheckList",
	register: (e, t, n) => ye(e, n.getOutput())
});
//#endregion
//#region app/components/workflow/note-node/note-editor/store.ts
var createNoteEditorStore = () => {
	return createStore((set) => ({
		linkAnchorElement: null,
		setLinkAnchorElement: (open) => {
			if (open) setTimeout(() => {
				const nativeSelection = window.getSelection();
				if (nativeSelection?.focusNode) {
					const parent = nativeSelection.focusNode.parentElement;
					set(() => ({ linkAnchorElement: parent }));
				}
			});
			else set(() => ({ linkAnchorElement: null }));
		},
		linkOperatorShow: false,
		setLinkOperatorShow: (linkOperatorShow) => set(() => ({ linkOperatorShow })),
		selectedIsBold: false,
		setSelectedIsBold: (selectedIsBold) => set(() => ({ selectedIsBold })),
		selectedIsItalic: false,
		setSelectedIsItalic: (selectedIsItalic) => set(() => ({ selectedIsItalic })),
		selectedIsStrikeThrough: false,
		setSelectedIsStrikeThrough: (selectedIsStrikeThrough) => set(() => ({ selectedIsStrikeThrough })),
		selectedLinkUrl: "",
		setSelectedLinkUrl: (selectedLinkUrl) => set(() => ({ selectedLinkUrl })),
		selectedIsLink: false,
		setSelectedIsLink: (selectedIsLink) => set(() => ({ selectedIsLink })),
		selectedIsBullet: false,
		setSelectedIsBullet: (selectedIsBullet) => set(() => ({ selectedIsBullet }))
	}));
};
function useStore(selector) {
	const store = useContext(NoteEditorContext);
	if (!store) throw new Error("Missing NoteEditorContext.Provider in the tree");
	return useStore$1(store, selector);
}
var useNoteEditorStore = () => {
	return useContext(NoteEditorContext);
};
//#endregion
//#region app/components/workflow/note-node/note-editor/theme/index.ts
var theme = {
	paragraph: "note-editor-theme_paragraph",
	list: {
		ul: "note-editor-theme_list-ul",
		listitem: "note-editor-theme_list-li"
	},
	link: "note-editor-theme_link",
	text: {
		italic: "note-editor-theme_text-italic",
		strikethrough: "note-editor-theme_text-strikethrough"
	}
};
//#endregion
//#region app/components/workflow/note-node/note-editor/context.tsx
var NoteEditorContext = createContext(null);
var NoteEditorContextProvider = memo(({ value, children, editable = true }) => {
	const storeRef = useRef(void 0);
	if (!storeRef.current) storeRef.current = createNoteEditorStore();
	let initialValue = null;
	try {
		initialValue = JSON.parse(value);
	} catch {}
	const initialConfig = {
		namespace: "note-editor",
		nodes: [
			M,
			ge,
			oe
		],
		editorState: !initialValue?.root.children.length ? null : JSON.stringify(initialValue),
		onError: (error) => {
			throw error;
		},
		theme,
		editable
	};
	return /* @__PURE__ */ jsx(NoteEditorContext.Provider, {
		value: storeRef.current,
		children: /* @__PURE__ */ jsx(f, {
			initialConfig: { ...initialConfig },
			children
		})
	});
});
NoteEditorContextProvider.displayName = "NoteEditorContextProvider";
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/LexicalClickableLinkPlugin.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function t({ newTab: t = !0, disabled: l = !1 }) {
	const [n] = o();
	return useEffect(() => tt(n, xt$1({
		disabled: l,
		newTab: t
	})), [
		n,
		t,
		l
	]), null;
}
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/LexicalLinkPlugin.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function l$1({ validateUrl: l, attributes: n }) {
	const [a] = o();
	return useEffect(() => {
		if (!a.hasNodes([M])) throw new Error("LinkPlugin: LinkNode not registered on editor");
	}), useEffect(() => X$1(a, xt$1({
		attributes: n,
		validateUrl: l
	})), [
		a,
		l,
		n
	]), null;
}
//#endregion
//#region node_modules/.pnpm/@lexical+react@0.42.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_yjs@13.6.30/node_modules/@lexical/react/LexicalListPlugin.prod.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function l({ hasStrictIndent: l = !1, shouldPreserveNumbering: m = !1 }) {
	const [c] = o();
	return useEffect(() => {
		if (!c.hasNodes([ge, oe])) throw new Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
	}, [c]), useEffect(() => rc(Le(c, { restoreNumbering: m }), l ? Pe(c) : () => {}), [
		c,
		l,
		m
	]), function(e) {
		useEffect(() => Le(e), [e]);
	}(c), null;
}
//#endregion
//#region app/components/workflow/note-node/note-editor/utils.ts
function getSelectedNode(selection) {
	const anchor = selection.anchor;
	const focus = selection.focus;
	const anchorNode = selection.anchor.getNode();
	const focusNode = selection.focus.getNode();
	if (anchorNode === focusNode) return anchorNode;
	if (selection.isBackward()) return _(focus) ? anchorNode : focusNode;
	else return _(anchor) ? anchorNode : focusNode;
}
var urlRegExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-]*)?\??[-+=&;%@.\w]*#?\w*)?)/;
//#endregion
//#region app/components/workflow/note-node/note-editor/plugins/format-detector-plugin/hooks.ts
var useFormatDetector = () => {
	const [editor] = o();
	const noteEditorStore = useNoteEditorStore();
	const handleFormat = useCallback(() => {
		editor.getEditorState().read(() => {
			if (editor.isComposing()) return;
			const selection = $r();
			if (wr(selection)) {
				const node = getSelectedNode(selection);
				const { setSelectedIsBold, setSelectedIsItalic, setSelectedIsStrikeThrough, setSelectedLinkUrl, setSelectedIsLink, setSelectedIsBullet } = noteEditorStore.getState();
				setSelectedIsBold(selection.hasFormat("bold"));
				setSelectedIsItalic(selection.hasFormat("italic"));
				setSelectedIsStrikeThrough(selection.hasFormat("strikethrough"));
				const parent = node.getParent();
				if ($(parent) || $(node)) {
					setSelectedLinkUrl(($(parent) ? parent : node).getURL());
					setSelectedIsLink(true);
				} else {
					setSelectedLinkUrl("");
					setSelectedIsLink(false);
				}
				if (ue(parent) || ue(node)) setSelectedIsBullet(true);
				else setSelectedIsBullet(false);
			}
		});
	}, [editor, noteEditorStore]);
	useEffect(() => {
		document.addEventListener("selectionchange", handleFormat);
		return () => {
			document.removeEventListener("selectionchange", handleFormat);
		};
	}, [handleFormat]);
	useEffect(() => {
		return rc(editor.registerUpdateListener(() => {
			handleFormat();
		}));
	}, [editor, handleFormat]);
	return { handleFormat };
};
//#endregion
//#region app/components/workflow/note-node/note-editor/plugins/format-detector-plugin/index.tsx
var FormatDetectorPlugin = () => {
	useFormatDetector();
	return null;
};
//#endregion
//#region app/components/workflow/note-node/note-editor/plugins/link-editor-plugin/hooks.ts
var useOpenLink = () => {
	const [editor] = o();
	const noteEditorStore = useNoteEditorStore();
	useEffect(() => {
		return rc(editor.registerUpdateListener(() => {
			setTimeout(() => {
				const { selectedLinkUrl, selectedIsLink, setLinkAnchorElement, setLinkOperatorShow } = noteEditorStore.getState();
				if (selectedIsLink) {
					setLinkAnchorElement(true);
					if (selectedLinkUrl) setLinkOperatorShow(true);
					else setLinkOperatorShow(false);
				} else {
					setLinkAnchorElement();
					setLinkOperatorShow(false);
				}
			});
		}), editor.registerCommand(oe$1, (payload) => {
			setTimeout(() => {
				const { selectedLinkUrl, selectedIsLink, setLinkAnchorElement, setLinkOperatorShow } = noteEditorStore.getState();
				if (selectedIsLink) {
					if ((payload.metaKey || payload.ctrlKey) && selectedLinkUrl) {
						window.open(selectedLinkUrl, "_blank");
						return true;
					}
					setLinkAnchorElement(true);
					if (selectedLinkUrl) setLinkOperatorShow(true);
					else setLinkOperatorShow(false);
				} else {
					setLinkAnchorElement();
					setLinkOperatorShow(false);
				}
			});
			return false;
		}, 1));
	}, [editor, noteEditorStore]);
};
var useLink = () => {
	const { t } = useTranslation();
	const [editor] = o();
	const noteEditorStore = useNoteEditorStore();
	const { notify } = useToastContext();
	return {
		handleSaveLink: useCallback((url) => {
			if (url && !urlRegExp.test(url)) {
				notify({
					type: "error",
					message: t("nodes.note.editor.invalidUrl", { ns: "workflow" })
				});
				return;
			}
			editor.dispatchCommand(G$1, escape(url));
			const { setLinkAnchorElement } = noteEditorStore.getState();
			setLinkAnchorElement();
		}, [
			editor,
			noteEditorStore,
			notify,
			t
		]),
		handleUnlink: useCallback(() => {
			editor.dispatchCommand(G$1, null);
			const { setLinkAnchorElement } = noteEditorStore.getState();
			setLinkAnchorElement();
		}, [editor, noteEditorStore])
	};
};
//#endregion
//#region app/components/workflow/note-node/note-editor/plugins/link-editor-plugin/component.tsx
var LinkEditorComponent = ({ containerElement }) => {
	const { t } = useTranslation();
	const { handleSaveLink, handleUnlink } = useLink();
	const selectedLinkUrl = useStore((s) => s.selectedLinkUrl);
	const linkAnchorElement = useStore((s) => s.linkAnchorElement);
	const linkOperatorShow = useStore((s) => s.linkOperatorShow);
	const setLinkAnchorElement = useStore((s) => s.setLinkAnchorElement);
	const setLinkOperatorShow = useStore((s) => s.setLinkOperatorShow);
	const [url, setUrl] = useState(selectedLinkUrl);
	const { refs, floatingStyles, elements } = useFloating({
		placement: "top",
		middleware: [
			offset(4),
			shift(),
			flip()
		]
	});
	useClickAway(() => {
		setLinkAnchorElement();
	}, linkAnchorElement);
	useEffect(() => {
		setUrl(selectedLinkUrl);
	}, [selectedLinkUrl]);
	useEffect(() => {
		if (linkAnchorElement) refs.setReference(linkAnchorElement);
	}, [linkAnchorElement, refs]);
	return /* @__PURE__ */ jsx(Fragment$1, { children: elements.reference && /* @__PURE__ */ jsx(FloatingPortal, {
		root: containerElement,
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("nodrag nopan z-10 inline-flex w-max items-center rounded-md border-[0.5px] border-components-actionbar-border bg-components-actionbar-bg", !linkOperatorShow && "p-1 shadow-md", linkOperatorShow && "system-xs-medium p-0.5 text-text-tertiary shadow-sm"),
			style: floatingStyles,
			ref: refs.setFloating,
			children: [!linkOperatorShow && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("input", {
				className: "mr-0.5 h-6 w-[196px] appearance-none rounded-sm bg-transparent p-1 text-[13px] text-components-input-text-filled outline-none",
				value: url,
				onChange: (e) => setUrl(e.target.value),
				placeholder: t("nodes.note.editor.enterUrl", { ns: "workflow" }) || "",
				autoFocus: true
			}), /* @__PURE__ */ jsx(Button, {
				variant: "primary",
				size: "small",
				disabled: !url,
				onClick: () => handleSaveLink(url),
				children: t("operation.ok", { ns: "common" })
			})] }), linkOperatorShow && /* @__PURE__ */ jsxs(Fragment$1, { children: [
				/* @__PURE__ */ jsxs("a", {
					className: "flex h-6 items-center rounded-md px-2 hover:bg-state-base-hover",
					href: escape(url),
					target: "_blank",
					rel: "noreferrer",
					children: [
						/* @__PURE__ */ jsx(Wt, { className: "mr-1 h-3 w-3" }),
						/* @__PURE__ */ jsx("div", {
							className: "mr-1",
							children: t("nodes.note.editor.openLink", { ns: "workflow" })
						}),
						/* @__PURE__ */ jsx("div", {
							title: escape(url),
							className: "max-w-[140px] truncate text-text-accent",
							children: escape(url)
						})
					]
				}),
				/* @__PURE__ */ jsx("div", { className: "mx-1 h-3.5 w-[1px] bg-divider-regular" }),
				/* @__PURE__ */ jsxs("div", {
					className: "mr-0.5 flex h-6 cursor-pointer items-center rounded-md px-2 hover:bg-state-base-hover",
					onClick: (e) => {
						e.stopPropagation();
						setLinkOperatorShow(false);
					},
					children: [/* @__PURE__ */ jsx(Ct, { className: "mr-1 h-3 w-3" }), t("operation.edit", { ns: "common" })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex h-6 cursor-pointer items-center rounded-md px-2 hover:bg-state-base-hover",
					onClick: handleUnlink,
					children: [/* @__PURE__ */ jsx(Mm, { className: "mr-1 h-3 w-3" }), t("nodes.note.editor.unlink", { ns: "workflow" })]
				})
			] })]
		})
	}) });
};
var component_default = memo(LinkEditorComponent);
//#endregion
//#region app/components/workflow/note-node/note-editor/plugins/link-editor-plugin/index.tsx
var LinkEditorPlugin = ({ containerElement }) => {
	useOpenLink();
	if (!useStore((s) => s.linkAnchorElement)) return null;
	return /* @__PURE__ */ jsx(component_default, { containerElement });
};
var link_editor_plugin_default = memo(LinkEditorPlugin);
//#endregion
//#region app/components/workflow/note-node/note-editor/editor.tsx
var Editor = ({ placeholder = "write you note...", onChange, containerElement, setShortcutsEnabled }) => {
	const handleEditorChange = useCallback((editorState) => {
		onChange?.(editorState);
	}, [onChange]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ jsx(L, {
				contentEditable: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(x$1, {
					onFocus: () => setShortcutsEnabled?.(false),
					onBlur: () => setShortcutsEnabled?.(true),
					spellCheck: false,
					className: "h-full w-full text-text-secondary caret-primary-600 outline-none"
				}) }),
				placeholder: /* @__PURE__ */ jsx(placeholder_default, {
					value: placeholder,
					compact: true
				}),
				ErrorBoundary: n
			}),
			/* @__PURE__ */ jsx(t, { disabled: true }),
			/* @__PURE__ */ jsx(l$1, {}),
			/* @__PURE__ */ jsx(l, {}),
			/* @__PURE__ */ jsx(link_editor_plugin_default, { containerElement }),
			/* @__PURE__ */ jsx(FormatDetectorPlugin, {}),
			/* @__PURE__ */ jsx(a, {}),
			/* @__PURE__ */ jsx(n$1, { onChange: handleEditorChange })
		]
	});
};
var editor_default = memo(Editor);
//#endregion
//#region app/components/workflow/note-node/note-editor/toolbar/color-picker.tsx
var COLOR_LIST = [
	{
		key: NoteTheme.blue,
		inner: THEME_MAP[NoteTheme.blue].title,
		outer: THEME_MAP[NoteTheme.blue].outer
	},
	{
		key: NoteTheme.cyan,
		inner: THEME_MAP[NoteTheme.cyan].title,
		outer: THEME_MAP[NoteTheme.cyan].outer
	},
	{
		key: NoteTheme.green,
		inner: THEME_MAP[NoteTheme.green].title,
		outer: THEME_MAP[NoteTheme.green].outer
	},
	{
		key: NoteTheme.yellow,
		inner: THEME_MAP[NoteTheme.yellow].title,
		outer: THEME_MAP[NoteTheme.yellow].outer
	},
	{
		key: NoteTheme.pink,
		inner: THEME_MAP[NoteTheme.pink].title,
		outer: THEME_MAP[NoteTheme.pink].outer
	},
	{
		key: NoteTheme.violet,
		inner: THEME_MAP[NoteTheme.violet].title,
		outer: THEME_MAP[NoteTheme.violet].outer
	}
];
var ColorPicker = ({ theme, onThemeChange }) => {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "top",
		offset: 4,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen(!open),
			children: /* @__PURE__ */ jsx("div", {
				className: cn("flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:bg-black/5", open && "bg-black/5"),
				children: /* @__PURE__ */ jsx("div", { className: cn("h-4 w-4 rounded-full border border-black/5", THEME_MAP[theme].title) })
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, { children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-3 grid-rows-2 gap-0.5 rounded-lg border-[0.5px] border-components-actionbar-border bg-components-actionbar-bg p-0.5 shadow-lg",
			children: COLOR_LIST.map((color) => /* @__PURE__ */ jsxs("div", {
				className: "group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md",
				onClick: (e) => {
					e.stopPropagation();
					onThemeChange(color.key);
					setOpen(false);
				},
				children: [/* @__PURE__ */ jsx("div", { className: cn("absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] group-hover:block", color.outer) }), /* @__PURE__ */ jsx("div", { className: cn("absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5", color.inner) })]
			}, color.key))
		}) })]
	});
};
var color_picker_default = memo(ColorPicker);
//#endregion
//#region app/components/workflow/note-node/note-editor/toolbar/hooks.ts
var DEFAULT_FONT_SIZE = "12px";
var updateFontSizeFromSelection = (setFontSize) => {
	const selection = $r();
	if (wr(selection)) setFontSize(le$1(selection, "font-size", DEFAULT_FONT_SIZE));
};
var toggleLink = (editor, noteEditorStore) => {
	editor.update(() => {
		const selection = $r();
		if (!wr(selection)) return;
		const node = getSelectedNode(selection);
		const parent = node.getParent();
		const { setLinkAnchorElement } = noteEditorStore.getState();
		if ($(parent) || $(node)) {
			editor.dispatchCommand(G$1, null);
			setLinkAnchorElement();
			return;
		}
		editor.dispatchCommand(G$1, "");
		setLinkAnchorElement(true);
	});
};
var toggleBullet = (editor, selectedIsBullet) => {
	if (!selectedIsBullet) {
		editor.dispatchCommand(be, void 0);
		return;
	}
	editor.update(() => {
		const selection = $r();
		if (wr(selection)) W$1(selection, () => Vi());
	});
};
var useCommand = () => {
	const [editor] = o();
	const noteEditorStore = useNoteEditorStore();
	return { handleCommand: useCallback((type) => {
		if (type === "bold" || type === "italic" || type === "strikethrough") {
			editor.dispatchCommand(me$1, type);
			return;
		}
		if (type === "link") {
			toggleLink(editor, noteEditorStore);
			return;
		}
		if (type === "bullet") toggleBullet(editor, noteEditorStore.getState().selectedIsBullet);
	}, [editor, noteEditorStore]) };
};
var useFontSize = () => {
	const [editor] = o();
	const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
	const [fontSizeSelectorShow, setFontSizeSelectorShow] = useState(false);
	const handleFontSize = useCallback((fontSize) => {
		editor.update(() => {
			const selection = $r();
			if (wr(selection)) U(selection, { "font-size": fontSize });
		});
	}, [editor]);
	const handleOpenFontSizeSelector = useCallback((newFontSizeSelectorShow) => {
		if (newFontSizeSelectorShow) editor.update(() => {
			const selection = $r();
			if (wr(selection)) Bo(selection.clone());
		});
		setFontSizeSelectorShow(newFontSizeSelectorShow);
	}, [editor]);
	useEffect(() => {
		return rc(editor.registerUpdateListener(() => {
			editor.getEditorState().read(() => {
				updateFontSizeFromSelection(setFontSize);
			});
		}), editor.registerCommand(re$1, () => {
			updateFontSizeFromSelection(setFontSize);
			return false;
		}, 4));
	}, [editor]);
	return {
		fontSize,
		handleFontSize,
		fontSizeSelectorShow,
		handleOpenFontSizeSelector
	};
};
//#endregion
//#region app/components/workflow/note-node/note-editor/toolbar/command.tsx
var Command = ({ type }) => {
	const { t } = useTranslation();
	const selectedIsBold = useStore((s) => s.selectedIsBold);
	const selectedIsItalic = useStore((s) => s.selectedIsItalic);
	const selectedIsStrikeThrough = useStore((s) => s.selectedIsStrikeThrough);
	const selectedIsLink = useStore((s) => s.selectedIsLink);
	const selectedIsBullet = useStore((s) => s.selectedIsBullet);
	const { handleCommand } = useCommand();
	const icon = useMemo(() => {
		switch (type) {
			case "bold": return /* @__PURE__ */ jsx(Y0, { className: cn("h-4 w-4", selectedIsBold && "text-primary-600") });
			case "italic": return /* @__PURE__ */ jsx(Cn, { className: cn("h-4 w-4", selectedIsItalic && "text-primary-600") });
			case "strikethrough": return /* @__PURE__ */ jsx(NN, { className: cn("h-4 w-4", selectedIsStrikeThrough && "text-primary-600") });
			case "link": return /* @__PURE__ */ jsx(xm, { className: cn("h-4 w-4", selectedIsLink && "text-primary-600") });
			case "bullet": return /* @__PURE__ */ jsx(Sm, { className: cn("h-4 w-4", selectedIsBullet && "text-primary-600") });
		}
	}, [
		type,
		selectedIsBold,
		selectedIsItalic,
		selectedIsStrikeThrough,
		selectedIsLink,
		selectedIsBullet
	]);
	return /* @__PURE__ */ jsx(tooltip_default, {
		popupContent: useMemo(() => {
			switch (type) {
				case "bold": return t("nodes.note.editor.bold", { ns: "workflow" });
				case "italic": return t("nodes.note.editor.italic", { ns: "workflow" });
				case "strikethrough": return t("nodes.note.editor.strikethrough", { ns: "workflow" });
				case "link": return t("nodes.note.editor.link", { ns: "workflow" });
				case "bullet": return t("nodes.note.editor.bulletList", { ns: "workflow" });
			}
		}, [type, t]),
		children: /* @__PURE__ */ jsx("div", {
			className: cn("flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-text-tertiary hover:bg-state-accent-active hover:text-text-accent", type === "bold" && selectedIsBold && "bg-state-accent-active", type === "italic" && selectedIsItalic && "bg-state-accent-active", type === "strikethrough" && selectedIsStrikeThrough && "bg-state-accent-active", type === "link" && selectedIsLink && "bg-state-accent-active", type === "bullet" && selectedIsBullet && "bg-state-accent-active"),
			onClick: () => handleCommand(type),
			children: icon
		})
	});
};
var command_default = memo(Command);
//#endregion
//#region app/components/workflow/note-node/note-editor/toolbar/divider.tsx
var Divider = () => {
	return /* @__PURE__ */ jsx("div", { className: "mx-1 h-3.5 w-[1px] bg-divider-regular" });
};
//#endregion
//#region app/components/workflow/note-node/note-editor/toolbar/font-size-selector.tsx
var FontSizeSelector = () => {
	const { t } = useTranslation();
	const FONT_SIZE_LIST = [
		{
			key: "12px",
			value: t("nodes.note.editor.small", { ns: "workflow" })
		},
		{
			key: "14px",
			value: t("nodes.note.editor.medium", { ns: "workflow" })
		},
		{
			key: "16px",
			value: t("nodes.note.editor.large", { ns: "workflow" })
		}
	];
	const { fontSizeSelectorShow, handleOpenFontSizeSelector, fontSize, handleFontSize } = useFontSize();
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open: fontSizeSelectorShow,
		onOpenChange: handleOpenFontSizeSelector,
		placement: "bottom-start",
		offset: 2,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => handleOpenFontSizeSelector(!fontSizeSelectorShow),
			children: /* @__PURE__ */ jsxs("div", {
				className: cn("flex h-8 cursor-pointer items-center rounded-md pl-2 pr-1.5 text-[13px] font-medium text-text-tertiary hover:bg-state-base-hover hover:text-text-secondary", fontSizeSelectorShow && "bg-state-base-hover text-text-secondary"),
				children: [/* @__PURE__ */ jsx(Xs, { className: "mr-1 h-4 w-4" }), FONT_SIZE_LIST.find((font) => font.key === fontSize)?.value || t("nodes.note.editor.small", { ns: "workflow" })]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, { children: /* @__PURE__ */ jsx("div", {
			className: "w-[120px] rounded-md border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-1 text-text-secondary shadow-xl",
			children: FONT_SIZE_LIST.map((font) => /* @__PURE__ */ jsxs("div", {
				className: "flex h-8 cursor-pointer items-center justify-between rounded-md pl-3 pr-2 hover:bg-state-base-hover",
				onClick: (e) => {
					e.stopPropagation();
					handleFontSize(font.key);
					handleOpenFontSizeSelector(false);
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: { fontSize: font.key },
					children: font.value
				}), fontSize === font.key && /* @__PURE__ */ jsx(Icon$24, { className: "h-4 w-4 text-text-accent" })]
			}, font.key))
		}) })]
	});
};
var font_size_selector_default = memo(FontSizeSelector);
//#endregion
//#region app/components/workflow/note-node/note-editor/toolbar/operator.tsx
var Operator = ({ onCopy, onDelete, onDuplicate, showAuthor, onShowAuthorChange }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-end",
		offset: 4,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen(!open),
			children: /* @__PURE__ */ jsx("div", {
				className: cn("flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-text-tertiary hover:bg-state-base-hover hover:text-text-secondary", open && "bg-state-base-hover text-text-secondary"),
				children: /* @__PURE__ */ jsx(CH, { className: "h-4 w-4" })
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, { children: /* @__PURE__ */ jsxs("div", {
			className: "min-w-[192px] rounded-md border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-xl",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "p-1",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex h-8 cursor-pointer items-center justify-between rounded-md px-3 text-sm text-text-secondary hover:bg-state-base-hover",
						onClick: () => {
							onCopy();
							setOpen(false);
						},
						children: [t("common.copy", { ns: "workflow" }), /* @__PURE__ */ jsx(shortcuts_name_default, { keys: ["ctrl", "c"] })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex h-8 cursor-pointer items-center justify-between rounded-md px-3 text-sm text-text-secondary hover:bg-state-base-hover",
						onClick: () => {
							onDuplicate();
							setOpen(false);
						},
						children: [t("common.duplicate", { ns: "workflow" }), /* @__PURE__ */ jsx(shortcuts_name_default, { keys: ["ctrl", "d"] })]
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "h-px bg-divider-subtle" }),
				/* @__PURE__ */ jsx("div", {
					className: "p-1",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex h-8 cursor-pointer items-center justify-between rounded-md px-3 text-sm text-text-secondary hover:bg-state-base-hover",
						onClick: (e) => e.stopPropagation(),
						children: [/* @__PURE__ */ jsx("div", { children: t("nodes.note.editor.showAuthor", { ns: "workflow" }) }), /* @__PURE__ */ jsx(switch_default, {
							size: "lg",
							value: showAuthor,
							onChange: onShowAuthorChange
						})]
					})
				}),
				/* @__PURE__ */ jsx("div", { className: "h-px bg-divider-subtle" }),
				/* @__PURE__ */ jsx("div", {
					className: "p-1",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex h-8 cursor-pointer items-center justify-between rounded-md px-3 text-sm text-text-secondary hover:bg-state-destructive-hover hover:text-text-destructive",
						onClick: () => {
							onDelete();
							setOpen(false);
						},
						children: [t("operation.delete", { ns: "common" }), /* @__PURE__ */ jsx(shortcuts_name_default, { keys: ["del"] })]
					})
				})
			]
		}) })]
	});
};
var operator_default = memo(Operator);
//#endregion
//#region app/components/workflow/note-node/note-editor/toolbar/index.tsx
var Toolbar = ({ theme, onThemeChange, onCopy, onDuplicate, onDelete, showAuthor, onShowAuthorChange }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "inline-flex items-center rounded-lg border-[0.5px] border-components-actionbar-border bg-components-actionbar-bg p-0.5 shadow-sm",
		children: [
			/* @__PURE__ */ jsx(color_picker_default, {
				theme,
				onThemeChange
			}),
			/* @__PURE__ */ jsx(Divider, {}),
			/* @__PURE__ */ jsx(font_size_selector_default, {}),
			/* @__PURE__ */ jsx(Divider, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center space-x-0.5",
				children: [
					/* @__PURE__ */ jsx(command_default, { type: "bold" }),
					/* @__PURE__ */ jsx(command_default, { type: "italic" }),
					/* @__PURE__ */ jsx(command_default, { type: "strikethrough" }),
					/* @__PURE__ */ jsx(command_default, { type: "link" }),
					/* @__PURE__ */ jsx(command_default, { type: "bullet" })
				]
			}),
			/* @__PURE__ */ jsx(Divider, {}),
			/* @__PURE__ */ jsx(operator_default, {
				onCopy,
				onDuplicate,
				onDelete,
				showAuthor,
				onShowAuthorChange
			})
		]
	});
};
var toolbar_default = memo(Toolbar);
//#endregion
//#region app/components/workflow/custom-connection-line.tsx
var CustomConnectionLine = ({ fromX, fromY, toX, toY }) => {
	const [edgePath] = getBezierPath({
		sourceX: fromX,
		sourceY: fromY,
		sourcePosition: Position.Right,
		targetX: toX,
		targetY: toY,
		targetPosition: Position.Left,
		curvature: .16
	});
	return /* @__PURE__ */ jsxs("g", { children: [/* @__PURE__ */ jsx("path", {
		fill: "none",
		stroke: "#D0D5DD",
		strokeWidth: 2,
		d: edgePath
	}), /* @__PURE__ */ jsx("rect", {
		x: toX,
		y: toY - 4,
		width: 2,
		height: 8,
		fill: "#2970FF"
	})] });
};
var custom_connection_line_default = memo(CustomConnectionLine);
//#endregion
//#region app/components/workflow/custom-edge-linear-gradient-render.tsx
var CustomEdgeLinearGradientRender = ({ id, startColor, stopColor, position }) => {
	const { x1, x2, y1, y2 } = position;
	return /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
		id,
		gradientUnits: "userSpaceOnUse",
		x1,
		y1,
		x2,
		y2,
		children: [/* @__PURE__ */ jsx("stop", {
			offset: "0%",
			style: {
				stopColor: startColor,
				stopOpacity: 1
			}
		}), /* @__PURE__ */ jsx("stop", {
			offset: "100%",
			style: {
				stopColor,
				stopOpacity: 1
			}
		})]
	}) });
};
//#endregion
//#region app/components/workflow/operator/tip-popup.tsx
var TipPopup = ({ title, children, shortcuts }) => {
	return /* @__PURE__ */ jsx(tooltip_default, {
		needsDelay: false,
		offset: 4,
		popupClassName: "p-0 bg-transparent",
		popupContent: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1 rounded-lg border-[0.5px] border-components-panel-border bg-components-tooltip-bg p-1.5 shadow-lg backdrop-blur-[5px]",
			children: [/* @__PURE__ */ jsx("span", {
				className: "system-xs-medium text-text-secondary",
				children: title
			}), shortcuts && /* @__PURE__ */ jsx(shortcuts_name_default, { keys: shortcuts })]
		}),
		children
	});
};
var tip_popup_default = memo(TipPopup);
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/useLocalStorageState/index.js
var useLocalStorageState = createUseStorageState(function() {
	return isBrowser ? localStorage : void 0;
});
//#endregion
//#region app/components/app/configuration/config/agent/agent-tools/setting-built-in-tool.tsx
var SettingBuiltInTool = ({ showBackButton = false, collection, isBuiltIn = true, isModel = true, toolName, setting = {}, readonly, onHide, onSave, credentialId, onAuthorizationItemClick }) => {
	const language = getLanguage(useLocale());
	const { t } = useTranslation();
	const passedTools = collection.tools;
	const hasPassedTools = passedTools?.length > 0;
	const [isLoading, setIsLoading] = useState(!hasPassedTools);
	const [tools, setTools] = useState(hasPassedTools ? passedTools : []);
	const currTool = tools.find((tool) => tool.name === toolName);
	const formSchemas = currTool ? toolParametersToFormSchemas(currTool.parameters) : [];
	const infoSchemas = formSchemas.filter((item) => item.form === "llm");
	const settingSchemas = formSchemas.filter((item) => item.form !== "llm");
	const hasSetting = settingSchemas.length > 0;
	const [tempSetting, setTempSetting] = useState(setting);
	const [currType, setCurrType] = useState("info");
	const isInfoActive = currType === "info";
	useEffect(() => {
		if (!collection || hasPassedTools) return;
		(async () => {
			setIsLoading(true);
			try {
				setTools(await new Promise((resolve) => {
					(async function() {
						if (isModel) resolve(await fetchModelToolList(collection.name));
						else if (isBuiltIn) resolve(await fetchBuiltInToolList(collection.name));
						else if (collection.type === CollectionType.workflow) resolve(await fetchWorkflowToolList(collection.id));
						else resolve(await fetchCustomToolList(collection.name));
					})();
				}));
			} catch {}
			setIsLoading(false);
		})();
	}, [
		collection?.name,
		collection?.id,
		collection?.type
	]);
	useEffect(() => {
		setCurrType(!readonly && hasSetting ? "setting" : "info");
	}, [hasSetting]);
	const isValid = (() => {
		let valid = true;
		settingSchemas.forEach((item) => {
			if (item.required && !tempSetting[item.name]) valid = false;
		});
		return valid;
	})();
	const getType = (type) => {
		if (type === "number-input") return t("setBuiltInTools.number", { ns: "tools" });
		if (type === "text-input") return t("setBuiltInTools.string", { ns: "tools" });
		if (type === "checkbox") return "boolean";
		if (type === "file") return t("setBuiltInTools.file", { ns: "tools" });
		return type;
	};
	const infoUI = /* @__PURE__ */ jsx("div", {
		className: "",
		children: infoSchemas.length > 0 && /* @__PURE__ */ jsx("div", {
			className: "space-y-1 py-2",
			children: infoSchemas.map((item, index) => /* @__PURE__ */ jsxs("div", {
				className: "py-1",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "code-sm-semibold text-text-secondary",
							children: item.label[language]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "system-xs-regular text-text-tertiary",
							children: getType(item.type)
						}),
						item.required && /* @__PURE__ */ jsx("div", {
							className: "system-xs-medium text-text-warning-secondary",
							children: t("setBuiltInTools.required", { ns: "tools" })
						})
					]
				}), item.human_description && /* @__PURE__ */ jsx("div", {
					className: "system-xs-regular mt-0.5 text-text-tertiary",
					children: item.human_description?.[language]
				})]
			}, index))
		})
	});
	const settingUI = /* @__PURE__ */ jsx(Form, {
		value: tempSetting,
		onChange: setTempSetting,
		formSchemas: settingSchemas,
		isEditMode: false,
		showOnVariableMap: {},
		validating: false,
		readonly
	});
	return /* @__PURE__ */ jsx(Drawer, {
		isOpen: true,
		clickOutsideNotOpen: false,
		onClose: onHide,
		footer: null,
		mask: false,
		positionCenter: false,
		panelClassName: cn("mb-2 mr-2 mt-[64px] !w-[420px] !max-w-[420px] justify-start rounded-2xl border-[0.5px] border-components-panel-border !bg-components-panel-bg !p-0 shadow-xl"),
		children: /* @__PURE__ */ jsxs(Fragment$1, { children: [isLoading && /* @__PURE__ */ jsx(Loading, { type: "app" }), !isLoading && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
			className: "relative border-b border-divider-subtle p-4 pb-3",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute right-3 top-3",
					children: /* @__PURE__ */ jsx(ActionButton, {
						onClick: onHide,
						children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4" })
					})
				}),
				showBackButton && /* @__PURE__ */ jsxs("div", {
					className: "system-xs-semibold-uppercase mb-2 flex cursor-pointer items-center gap-1 text-text-accent-secondary",
					onClick: onHide,
					children: [/* @__PURE__ */ jsx(K1, { className: "h-4 w-4" }), t("detailPanel.operation.back", { ns: "plugin" })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ jsx(Icon$20, {
						size: "tiny",
						className: "h-6 w-6",
						src: collection.icon
					}), /* @__PURE__ */ jsx(OrgInfo, {
						packageNameClassName: "w-auto",
						orgName: collection.author,
						packageName: collection.name.split("/").pop() || ""
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "system-md-semibold mt-1 text-text-primary",
					children: currTool?.label[language]
				}),
				!!currTool?.description[language] && /* @__PURE__ */ jsx(Description, {
					className: "mb-2 mt-3 h-auto",
					text: currTool.description[language],
					descriptionLineRows: 2
				}),
				collection.allow_delete && collection.type === CollectionType.builtIn && /* @__PURE__ */ jsx(plugin_auth_in_agent_default, {
					pluginPayload: {
						provider: collection.name,
						category: AuthCategory.tool,
						providerType: collection.type,
						detail: collection
					},
					credentialId,
					onAuthorizationItemClick
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "h-full",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex h-full flex-col",
				children: [
					hasSetting && !readonly ? /* @__PURE__ */ jsx(tab_slider_plain_default, {
						className: "mt-1 shrink-0 px-4",
						itemClassName: "py-3",
						noBorderBottom: true,
						value: currType,
						onChange: (value) => {
							setCurrType(value);
						},
						options: [{
							value: "info",
							text: t("setBuiltInTools.parameters", { ns: "tools" })
						}, {
							value: "setting",
							text: t("setBuiltInTools.setting", { ns: "tools" })
						}]
					}) : /* @__PURE__ */ jsx("div", {
						className: "system-sm-semibold-uppercase p-4 pb-1 text-text-primary",
						children: t("setBuiltInTools.parameters", { ns: "tools" })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "h-0 grow overflow-y-auto px-4",
						children: [isInfoActive ? infoUI : settingUI, !readonly && !isInfoActive && /* @__PURE__ */ jsxs("div", {
							className: "flex shrink-0 justify-end space-x-2 rounded-b-[10px] bg-components-panel-bg py-2",
							children: [/* @__PURE__ */ jsx(Button, {
								className: "flex h-8 items-center !px-3 !text-[13px] font-medium ",
								onClick: onHide,
								children: t("operation.cancel", { ns: "common" })
							}), /* @__PURE__ */ jsx(Button, {
								className: "flex h-8 items-center !px-3 !text-[13px] font-medium",
								variant: "primary",
								disabled: !isValid,
								onClick: () => onSave?.(tempSetting),
								children: t("operation.save", { ns: "common" })
							})]
						})]
					}),
					/* @__PURE__ */ jsx(ReadmeEntrance, {
						pluginDetail: collection,
						className: "mt-auto"
					})
				]
			})
		})] })] })
	});
};
var setting_built_in_tool_default = React$1.memo(SettingBuiltInTool);
//#endregion
//#region app/components/tools/utils/index.ts
var getToolType = (type) => {
	switch (type) {
		case "builtin": return ToolTypeEnum.BuiltIn;
		case "api": return ToolTypeEnum.Custom;
		case "workflow": return ToolTypeEnum.Workflow;
		case "mcp": return ToolTypeEnum.MCP;
		default: return ToolTypeEnum.BuiltIn;
	}
};
var sortAgentSorts = (list) => {
	if (!list) return list;
	if (list.some((item) => item.position === void 0)) return list;
	const temp = [...list];
	temp.sort((a, b) => a.position - b.position);
	return temp;
};
var addFileInfos = (list, messageFiles) => {
	if (!list || !messageFiles) return list;
	return list.map((item) => {
		if (item.files && item.files?.length > 0) return {
			...item,
			message_files: item.files.map((fileId) => messageFiles.find((file) => file.id === fileId))
		};
		return item;
	});
};
//#endregion
//#region service/use-share.ts
var NAME_SPACE = "webapp";
var shareQueryKeys = {
	appAccessMode: (code) => [
		NAME_SPACE,
		"appAccessMode",
		code
	],
	appInfo: [NAME_SPACE, "appInfo"],
	appParams: [NAME_SPACE, "appParams"],
	appMeta: [NAME_SPACE, "appMeta"],
	conversations: [NAME_SPACE, "conversations"],
	conversationList: (params) => [
		NAME_SPACE,
		"conversations",
		params
	],
	chatList: (params) => [
		NAME_SPACE,
		"chatList",
		params
	],
	conversationName: (params) => [
		NAME_SPACE,
		"conversationName",
		params
	],
	humanInputForm: (token) => [
		NAME_SPACE,
		"humanInputForm",
		token
	]
};
var useGetWebAppAccessModeByCode = (code) => {
	return useQuery({
		queryKey: shareQueryKeys.appAccessMode(code),
		queryFn: () => getAppAccessModeByAppCode(code),
		enabled: !!code,
		staleTime: 0,
		gcTime: 0
	});
};
var useGetWebAppInfo = () => {
	return useQuery({
		queryKey: shareQueryKeys.appInfo,
		queryFn: () => {
			return fetchAppInfo();
		}
	});
};
var useGetWebAppParams = () => {
	return useQuery({
		queryKey: shareQueryKeys.appParams,
		queryFn: () => {
			return fetchAppParams(AppSourceType.webApp);
		}
	});
};
var useGetWebAppMeta = () => {
	return useQuery({
		queryKey: shareQueryKeys.appMeta,
		queryFn: () => {
			return fetchAppMeta(AppSourceType.webApp);
		}
	});
};
var useShareConversations = (params, options = {}) => {
	const { enabled = true, refetchOnReconnect, refetchOnWindowFocus } = options;
	const isEnabled = enabled && params.appSourceType !== AppSourceType.tryApp && (params.appSourceType !== AppSourceType.installedApp || !!params.appId);
	return useQuery({
		queryKey: shareQueryKeys.conversationList(params),
		queryFn: () => fetchConversations(params.appSourceType, params.appId, params.lastId, params.pinned, params.limit),
		enabled: isEnabled,
		refetchOnReconnect,
		refetchOnWindowFocus
	});
};
var useShareChatList = (params, options = {}) => {
	const { enabled = true, refetchOnReconnect, refetchOnWindowFocus } = options;
	const isEnabled = enabled && params.appSourceType !== AppSourceType.tryApp && (params.appSourceType !== AppSourceType.installedApp || !!params.appId) && !!params.conversationId;
	return useQuery({
		queryKey: shareQueryKeys.chatList(params),
		queryFn: () => fetchChatList(params.conversationId, params.appSourceType, params.appId),
		enabled: isEnabled,
		refetchOnReconnect,
		refetchOnWindowFocus,
		staleTime: 0
	});
};
var useShareConversationName = (params, options = {}) => {
	const { enabled = true, refetchOnReconnect, refetchOnWindowFocus } = options;
	const isEnabled = enabled && (params.appSourceType !== AppSourceType.installedApp || !!params.appId) && !!params.conversationId;
	return useQuery({
		queryKey: shareQueryKeys.conversationName(params),
		queryFn: () => generationConversationName(params.appSourceType, params.appId, params.conversationId),
		enabled: isEnabled,
		refetchOnReconnect,
		refetchOnWindowFocus
	});
};
var useInvalidateShareConversations = () => {
	return useInvalid(shareQueryKeys.conversations);
};
var HumanInputFormError = class extends Error {
	code;
	status;
	constructor(code, message, status) {
		super(message);
		this.name = "HumanInputFormError";
		this.code = code;
		this.status = status;
	}
};
var useGetHumanInputForm = (token, options = {}) => {
	const { enabled = true, refetchOnReconnect, refetchOnWindowFocus } = options;
	return useQuery({
		queryKey: shareQueryKeys.humanInputForm(token),
		queryFn: async () => {
			try {
				return await getHumanInputForm(token);
			} catch (error) {
				const response = error;
				if (response.status && response.json) {
					const errorData = await response.json();
					throw new HumanInputFormError(errorData.code, errorData.message, response.status);
				}
				throw error;
			}
		},
		enabled: enabled && !!token,
		refetchOnReconnect,
		refetchOnWindowFocus,
		retry: false
	});
};
var useSubmitHumanInputForm = () => {
	return useMutation({
		mutationKey: [NAME_SPACE, "submit-human-input-form"],
		mutationFn: ({ token, data }) => {
			return submitHumanInputForm(token, data);
		}
	});
};
//#endregion
//#region utils/model-config.ts
var userInputsFormToPromptVariables = (useInputs, dataset_query_variable) => {
	if (!useInputs) return [];
	const promptVariables = [];
	useInputs.forEach((item) => {
		const isParagraph = !!item.paragraph;
		const [type, content] = (() => {
			if (isParagraph) return ["paragraph", item.paragraph];
			if (item["text-input"]) return ["string", item["text-input"]];
			if (item.number) return ["number", item.number];
			if (item.checkbox) return ["boolean", item.checkbox];
			if (item.file) return ["file", item.file];
			if (item["file-list"]) return ["file-list", item["file-list"]];
			if (item.external_data_tool) return [item.external_data_tool.type, item.external_data_tool];
			if (item.json_object) return ["json_object", item.json_object];
			return ["select", item.select || {}];
		})();
		const is_context_var = dataset_query_variable === content?.variable;
		if (type === "string" || type === "paragraph") promptVariables.push({
			key: content.variable,
			name: content.label,
			required: content.required,
			type,
			max_length: content.max_length,
			options: [],
			is_context_var,
			hide: content.hide,
			default: content.default
		});
		else if (type === "number") promptVariables.push({
			key: content.variable,
			name: content.label,
			required: content.required,
			type,
			options: [],
			hide: content.hide,
			default: content.default
		});
		else if (type === "boolean") promptVariables.push({
			key: content.variable,
			name: content.label,
			required: content.required,
			type: "checkbox",
			options: [],
			hide: content.hide,
			default: content.default
		});
		else if (type === "select") promptVariables.push({
			key: content.variable,
			name: content.label,
			required: content.required,
			type: "select",
			options: content.options,
			is_context_var,
			hide: content.hide,
			default: content.default
		});
		else if (type === "file") promptVariables.push({
			key: content.variable,
			name: content.label,
			required: content.required,
			type,
			config: {
				allowed_file_types: content.allowed_file_types,
				allowed_file_extensions: content.allowed_file_extensions,
				allowed_file_upload_methods: content.allowed_file_upload_methods,
				number_limits: 1
			},
			hide: content.hide,
			default: content.default
		});
		else if (type === "file-list") promptVariables.push({
			key: content.variable,
			name: content.label,
			required: content.required,
			type,
			config: {
				allowed_file_types: content.allowed_file_types,
				allowed_file_extensions: content.allowed_file_extensions,
				allowed_file_upload_methods: content.allowed_file_upload_methods,
				number_limits: content.max_length
			},
			hide: content.hide,
			default: content.default
		});
		else promptVariables.push({
			key: content.variable,
			name: content.label,
			required: content.required,
			type: content.type,
			enabled: content.enabled,
			config: content.config,
			icon: content.icon,
			icon_background: content.icon_background,
			is_context_var,
			hide: content.hide
		});
	});
	return promptVariables;
};
var promptVariablesToUserInputsForm = (promptVariables) => {
	const userInputs = [];
	promptVariables.filter(({ key, name }) => {
		return key && key.trim() && name && name.trim();
	}).forEach((item) => {
		if (item.type === "string" || item.type === "paragraph") {
			userInputs.push({ [item.type === "string" ? "text-input" : "paragraph"]: {
				label: item.name,
				variable: item.key,
				required: item.required !== false,
				max_length: item.max_length,
				default: "",
				hide: item.hide
			} });
			return;
		}
		if (item.type === "number" || item.type === "checkbox") userInputs.push({ [item.type]: {
			label: item.name,
			variable: item.key,
			required: item.required !== false,
			default: "",
			hide: item.hide
		} });
		else if (item.type === "select") userInputs.push({ select: {
			label: item.name,
			variable: item.key,
			required: item.required !== false,
			options: item.options,
			default: item.default ?? "",
			hide: item.hide
		} });
		else userInputs.push({ external_data_tool: {
			label: item.name,
			variable: item.key,
			enabled: item.enabled,
			type: item.type,
			config: item.config,
			required: item.required,
			icon: item.icon,
			icon_background: item.icon_background,
			hide: item.hide
		} });
	});
	return userInputs;
};
var formatBooleanInputs = (useInputs, inputs) => {
	if (!useInputs) return inputs;
	const res = { ...inputs };
	useInputs.forEach((item) => {
		if (item.type === "checkbox") res[item.key] = !!res[item.key];
	});
	return res;
};
//#endregion
//#region app/components/base/chat/chat/hooks.ts
var useChat = (config, formSettings, prevChatTree, stopChat, clearChatList, clearChatListCallback) => {
	const { t } = useTranslation();
	const { formatTime } = useTimestamp();
	const { notify } = useToastContext();
	const conversationIdRef = useRef("");
	const hasStopRespondedRef = useRef(false);
	const [isResponding, setIsResponding] = useState(false);
	const isRespondingRef = useRef(false);
	const taskIdRef = useRef("");
	const pausedStateRef = useRef(false);
	const [suggestedQuestions, setSuggestedQuestions] = useState([]);
	const conversationMessagesAbortControllerRef = useRef(null);
	const suggestedQuestionsAbortControllerRef = useRef(null);
	const workflowEventsAbortControllerRef = useRef(null);
	const params = useParams();
	const pathname = usePathname();
	const [chatTree, setChatTree] = useState(prevChatTree || []);
	const chatTreeRef = useRef(chatTree);
	const [targetMessageId, setTargetMessageId] = useState();
	const threadMessages = useMemo(() => getThreadMessages(chatTree, targetMessageId), [chatTree, targetMessageId]);
	const getIntroduction = useCallback((str) => {
		return processOpeningStatement(str, formSettings?.inputs || {}, formSettings?.inputsForm || []);
	}, [formSettings?.inputs, formSettings?.inputsForm]);
	const processedOpeningContent = config?.opening_statement ? getIntroduction(config.opening_statement) : void 0;
	const processedSuggestionsKey = config?.suggested_questions ? JSON.stringify(config.suggested_questions.map((q) => getIntroduction(q))) : void 0;
	const openingStatementItem = useMemo(() => {
		if (!processedOpeningContent) return null;
		return {
			id: "opening-statement",
			content: processedOpeningContent,
			isAnswer: true,
			isOpeningStatement: true,
			suggestedQuestions: processedSuggestionsKey ? JSON.parse(processedSuggestionsKey) : void 0
		};
	}, [processedOpeningContent, processedSuggestionsKey]);
	const threadOpener = useMemo(() => threadMessages.find((item) => item.isOpeningStatement) ?? null, [threadMessages]);
	const mergedOpeningItem = useMemo(() => {
		if (!threadOpener || !openingStatementItem) return null;
		return {
			...threadOpener,
			content: openingStatementItem.content,
			suggestedQuestions: openingStatementItem.suggestedQuestions
		};
	}, [threadOpener, openingStatementItem]);
	/** Final chat list that will be rendered */
	const chatList = useMemo(() => {
		const ret = [...threadMessages];
		if (openingStatementItem) {
			const index = threadMessages.findIndex((item) => item.isOpeningStatement);
			if (index > -1 && mergedOpeningItem) ret[index] = mergedOpeningItem;
			else if (index === -1) ret.unshift(openingStatementItem);
		}
		return ret;
	}, [
		threadMessages,
		openingStatementItem,
		mergedOpeningItem
	]);
	useEffect(() => {
		setAutoFreeze(false);
		return () => {
			setAutoFreeze(true);
		};
	}, []);
	/** Find the target node by bfs and then operate on it */
	const produceChatTreeNode = useCallback((targetId, operation) => {
		return produce(chatTreeRef.current, (draft) => {
			const queue = [...draft];
			while (queue.length > 0) {
				const current = queue.shift();
				if (current.id === targetId) {
					operation(current);
					break;
				}
				if (current.children) queue.push(...current.children);
			}
		});
	}, []);
	const updateChatTreeNode = useCallback((id, fieldsOrUpdate) => {
		const nextState = produceChatTreeNode(id, (node) => {
			if (typeof fieldsOrUpdate === "function") fieldsOrUpdate(node);
			else Object.keys(fieldsOrUpdate).forEach((key) => {
				node[key] = fieldsOrUpdate[key];
			});
		});
		setChatTree(nextState);
		chatTreeRef.current = nextState;
	}, [produceChatTreeNode]);
	const handleResponding = useCallback((isResponding) => {
		setIsResponding(isResponding);
		isRespondingRef.current = isResponding;
	}, []);
	const handleStop = useCallback(() => {
		hasStopRespondedRef.current = true;
		handleResponding(false);
		if (stopChat && taskIdRef.current && !pausedStateRef.current) stopChat(taskIdRef.current);
		if (conversationMessagesAbortControllerRef.current) conversationMessagesAbortControllerRef.current.abort();
		if (suggestedQuestionsAbortControllerRef.current) suggestedQuestionsAbortControllerRef.current.abort();
		if (workflowEventsAbortControllerRef.current) workflowEventsAbortControllerRef.current.abort();
	}, [stopChat, handleResponding]);
	const handleRestart = useCallback((cb) => {
		conversationIdRef.current = "";
		taskIdRef.current = "";
		handleStop();
		setChatTree([]);
		setSuggestedQuestions([]);
		cb?.();
	}, [handleStop]);
	const createAudioPlayerManager = useCallback(() => {
		let ttsUrl = "";
		let ttsIsPublic = false;
		if (params.token) {
			ttsUrl = "/text-to-audio";
			ttsIsPublic = true;
		} else if (params.appId) if (pathname.search("explore/installed") > -1) ttsUrl = `/installed-apps/${params.appId}/text-to-audio`;
		else ttsUrl = `/apps/${params.appId}/text-to-audio`;
		let player = null;
		const getOrCreatePlayer = () => {
			if (!player) player = AudioPlayerManager.getInstance().getAudioPlayer(ttsUrl, ttsIsPublic, v4$1(), "none", "none", noop);
			return player;
		};
		return getOrCreatePlayer;
	}, [
		params.token,
		params.appId,
		pathname
	]);
	const handleResume = useCallback(async (messageId, workflowRunId, { onGetSuggestedQuestions, onConversationComplete, isPublicAPI }) => {
		const getOrCreatePlayer = createAudioPlayerManager();
		const url = `/workflow/${workflowRunId}/events?include_state_snapshot=true`;
		const otherOptions = {
			isPublicAPI,
			getAbortController: (abortController) => {
				workflowEventsAbortControllerRef.current = abortController;
			},
			onData: (message, isFirstMessage, { conversationId: newConversationId, messageId, taskId }) => {
				updateChatTreeNode(messageId, (responseItem) => {
					if (!(responseItem.agent_thoughts && responseItem.agent_thoughts.length > 0)) responseItem.content = responseItem.content + message;
					else {
						const lastThought = responseItem.agent_thoughts?.[responseItem.agent_thoughts?.length - 1];
						if (lastThought) lastThought.thought = lastThought.thought + message;
					}
					if (messageId) responseItem.id = messageId;
				});
				if (isFirstMessage && newConversationId) conversationIdRef.current = newConversationId;
				if (taskId) taskIdRef.current = taskId;
			},
			async onCompleted(hasError) {
				handleResponding(false);
				if (hasError) return;
				if (onConversationComplete) onConversationComplete(conversationIdRef.current);
				if (config?.suggested_questions_after_answer?.enabled && !hasStopRespondedRef.current && onGetSuggestedQuestions) try {
					const { data } = await onGetSuggestedQuestions(messageId, (newAbortController) => suggestedQuestionsAbortControllerRef.current = newAbortController);
					setSuggestedQuestions(data);
				} catch (e) {
					setSuggestedQuestions([]);
				}
			},
			onFile(file) {
				const fileType = file.type || "image";
				const baseFile = "transferMethod" in file ? file : null;
				const convertedFile = {
					id: baseFile?.id || file.id,
					type: baseFile?.type || (fileType === "image" ? "image/png" : fileType === "video" ? "video/mp4" : fileType === "audio" ? "audio/mpeg" : "application/octet-stream"),
					transferMethod: baseFile?.transferMethod || (fileType === "image" ? "remote_url" : "local_file"),
					uploadedId: baseFile?.uploadedId || file.id,
					supportFileType: baseFile?.supportFileType || (fileType === "image" ? "image" : fileType === "video" ? "video" : fileType === "audio" ? "audio" : "document"),
					progress: baseFile?.progress ?? 100,
					name: baseFile?.name || `generated_${fileType}.${fileType === "image" ? "png" : fileType === "video" ? "mp4" : fileType === "audio" ? "mp3" : "bin"}`,
					url: baseFile?.url || file.url,
					size: baseFile?.size ?? 0
				};
				updateChatTreeNode(messageId, (responseItem) => {
					const lastThought = responseItem.agent_thoughts?.[responseItem.agent_thoughts?.length - 1];
					if (lastThought) responseItem.agent_thoughts.at(-1).message_files = [...lastThought.message_files, convertedFile];
					else responseItem.message_files = [...responseItem.message_files ?? [], convertedFile];
				});
			},
			onThought(thought) {
				updateChatTreeNode(messageId, (responseItem) => {
					if (thought.message_id) responseItem.id = thought.message_id;
					if (thought.conversation_id) responseItem.conversationId = thought.conversation_id;
					if (!responseItem.agent_thoughts) responseItem.agent_thoughts = [];
					if (responseItem.agent_thoughts.length === 0) responseItem.agent_thoughts.push(thought);
					else {
						const lastThought = responseItem.agent_thoughts.at(-1);
						if (lastThought?.id === thought.id) {
							thought.thought = lastThought.thought;
							thought.message_files = lastThought.message_files;
							responseItem.agent_thoughts[responseItem.agent_thoughts.length - 1] = thought;
						} else responseItem.agent_thoughts.push(thought);
					}
				});
			},
			onMessageEnd: (messageEnd) => {
				updateChatTreeNode(messageId, (responseItem) => {
					if (messageEnd.metadata?.annotation_reply) {
						responseItem.annotation = {
							id: messageEnd.metadata.annotation_reply.id,
							authorName: messageEnd.metadata.annotation_reply.account.name
						};
						return;
					}
					responseItem.citation = messageEnd.metadata?.retriever_resources || [];
					const processedFilesFromResponse = getProcessedFilesFromResponse(messageEnd.files || []);
					responseItem.allFiles = uniqBy([...responseItem.allFiles || [], ...processedFilesFromResponse || []], "id");
				});
			},
			onMessageReplace: (messageReplace) => {
				updateChatTreeNode(messageId, (responseItem) => {
					responseItem.content = messageReplace.answer;
				});
			},
			onError() {
				handleResponding(false);
			},
			onWorkflowStarted: ({ workflow_run_id, task_id }) => {
				handleResponding(true);
				hasStopRespondedRef.current = false;
				updateChatTreeNode(messageId, (responseItem) => {
					if (responseItem.workflowProcess && responseItem.workflowProcess.tracing.length > 0) responseItem.workflowProcess.status = WorkflowRunningStatus.Running;
					else {
						taskIdRef.current = task_id;
						responseItem.workflow_run_id = workflow_run_id;
						responseItem.workflowProcess = {
							status: WorkflowRunningStatus.Running,
							tracing: []
						};
					}
				});
			},
			onWorkflowFinished: ({ data: workflowFinishedData }) => {
				updateChatTreeNode(messageId, (responseItem) => {
					if (responseItem.workflowProcess) responseItem.workflowProcess.status = workflowFinishedData.status;
				});
			},
			onIterationStart: ({ data: iterationStartedData }) => {
				updateChatTreeNode(messageId, (responseItem) => {
					if (!responseItem.workflowProcess) return;
					if (!responseItem.workflowProcess.tracing) responseItem.workflowProcess.tracing = [];
					responseItem.workflowProcess.tracing.push({
						...iterationStartedData,
						status: WorkflowRunningStatus.Running
					});
				});
			},
			onIterationFinish: ({ data: iterationFinishedData }) => {
				updateChatTreeNode(messageId, (responseItem) => {
					if (!responseItem.workflowProcess?.tracing) return;
					const tracing = responseItem.workflowProcess.tracing;
					const iterationIndex = tracing.findIndex((item) => item.node_id === iterationFinishedData.node_id && (item.execution_metadata?.parallel_id === iterationFinishedData.execution_metadata?.parallel_id || item.parallel_id === iterationFinishedData.execution_metadata?.parallel_id));
					if (iterationIndex > -1) tracing[iterationIndex] = {
						...tracing[iterationIndex],
						...iterationFinishedData,
						status: WorkflowRunningStatus.Succeeded
					};
				});
			},
			onNodeStarted: ({ data: nodeStartedData }) => {
				updateChatTreeNode(messageId, (responseItem) => {
					if (!responseItem.workflowProcess) return;
					if (!responseItem.workflowProcess.tracing) responseItem.workflowProcess.tracing = [];
					const currentIndex = responseItem.workflowProcess.tracing.findIndex((item) => item.node_id === nodeStartedData.node_id);
					if (currentIndex > -1) responseItem.workflowProcess.tracing[currentIndex] = {
						...nodeStartedData,
						status: NodeRunningStatus.Running
					};
					else {
						if (nodeStartedData.iteration_id) return;
						responseItem.workflowProcess.tracing.push({
							...nodeStartedData,
							status: WorkflowRunningStatus.Running
						});
					}
				});
			},
			onNodeFinished: ({ data: nodeFinishedData }) => {
				updateChatTreeNode(messageId, (responseItem) => {
					if (!responseItem.workflowProcess?.tracing) return;
					if (nodeFinishedData.iteration_id) return;
					const currentIndex = responseItem.workflowProcess.tracing.findIndex((item) => {
						if (!item.execution_metadata?.parallel_id) return item.id === nodeFinishedData.id;
						return item.id === nodeFinishedData.id && item.execution_metadata?.parallel_id === nodeFinishedData.execution_metadata?.parallel_id;
					});
					if (currentIndex > -1) responseItem.workflowProcess.tracing[currentIndex] = nodeFinishedData;
				});
			},
			onTTSChunk: (messageId, audio) => {
				if (!audio || audio === "") return;
				const audioPlayer = getOrCreatePlayer();
				if (audioPlayer) {
					audioPlayer.playAudioWithAudio(audio, true);
					AudioPlayerManager.getInstance().resetMsgId(messageId);
				}
			},
			onTTSEnd: (messageId, audio) => {
				const audioPlayer = getOrCreatePlayer();
				if (audioPlayer) audioPlayer.playAudioWithAudio(audio, false);
			},
			onLoopStart: ({ data: loopStartedData }) => {
				updateChatTreeNode(messageId, (responseItem) => {
					if (!responseItem.workflowProcess) return;
					if (!responseItem.workflowProcess.tracing) responseItem.workflowProcess.tracing = [];
					responseItem.workflowProcess.tracing.push({
						...loopStartedData,
						status: WorkflowRunningStatus.Running
					});
				});
			},
			onLoopFinish: ({ data: loopFinishedData }) => {
				updateChatTreeNode(messageId, (responseItem) => {
					if (!responseItem.workflowProcess?.tracing) return;
					const tracing = responseItem.workflowProcess.tracing;
					const loopIndex = tracing.findIndex((item) => item.node_id === loopFinishedData.node_id && (item.execution_metadata?.parallel_id === loopFinishedData.execution_metadata?.parallel_id || item.parallel_id === loopFinishedData.execution_metadata?.parallel_id));
					if (loopIndex > -1) tracing[loopIndex] = {
						...tracing[loopIndex],
						...loopFinishedData,
						status: WorkflowRunningStatus.Succeeded
					};
				});
			},
			onHumanInputRequired: ({ data: humanInputRequiredData }) => {
				updateChatTreeNode(messageId, (responseItem) => {
					if (!responseItem.humanInputFormDataList) responseItem.humanInputFormDataList = [humanInputRequiredData];
					else {
						const currentFormIndex = responseItem.humanInputFormDataList.findIndex((item) => item.node_id === humanInputRequiredData.node_id);
						if (currentFormIndex > -1) responseItem.humanInputFormDataList[currentFormIndex] = humanInputRequiredData;
						else responseItem.humanInputFormDataList.push(humanInputRequiredData);
					}
					if (responseItem.workflowProcess?.tracing) {
						const currentTracingIndex = responseItem.workflowProcess.tracing.findIndex((item) => item.node_id === humanInputRequiredData.node_id);
						if (currentTracingIndex > -1) responseItem.workflowProcess.tracing[currentTracingIndex].status = NodeRunningStatus.Paused;
					}
				});
			},
			onHumanInputFormFilled: ({ data: humanInputFilledFormData }) => {
				updateChatTreeNode(messageId, (responseItem) => {
					if (responseItem.humanInputFormDataList?.length) {
						const currentFormIndex = responseItem.humanInputFormDataList.findIndex((item) => item.node_id === humanInputFilledFormData.node_id);
						if (currentFormIndex > -1) responseItem.humanInputFormDataList.splice(currentFormIndex, 1);
					}
					if (!responseItem.humanInputFilledFormDataList) responseItem.humanInputFilledFormDataList = [humanInputFilledFormData];
					else responseItem.humanInputFilledFormDataList.push(humanInputFilledFormData);
				});
			},
			onHumanInputFormTimeout: ({ data: humanInputFormTimeoutData }) => {
				updateChatTreeNode(messageId, (responseItem) => {
					if (responseItem.humanInputFormDataList?.length) {
						const currentFormIndex = responseItem.humanInputFormDataList.findIndex((item) => item.node_id === humanInputFormTimeoutData.node_id);
						responseItem.humanInputFormDataList[currentFormIndex].expiration_time = humanInputFormTimeoutData.expiration_time;
					}
				});
			},
			onWorkflowPaused: ({ data: workflowPausedData }) => {
				const resumeUrl = `/workflow/${workflowPausedData.workflow_run_id}/events`;
				pausedStateRef.current = true;
				sseGet(resumeUrl, {}, otherOptions);
				updateChatTreeNode(messageId, (responseItem) => {
					responseItem.workflowProcess.status = WorkflowRunningStatus.Paused;
				});
			}
		};
		if (workflowEventsAbortControllerRef.current) workflowEventsAbortControllerRef.current.abort();
		sseGet(url, {}, otherOptions);
	}, [
		updateChatTreeNode,
		handleResponding,
		createAudioPlayerManager,
		config?.suggested_questions_after_answer
	]);
	const updateCurrentQAOnTree = useCallback(({ parentId, responseItem, placeholderQuestionId, questionItem }) => {
		let nextState;
		const currentQA = {
			...questionItem,
			children: [{
				...responseItem,
				children: []
			}]
		};
		if (!parentId && !chatTree.some((item) => [placeholderQuestionId, questionItem.id].includes(item.id))) nextState = produce(chatTree, (draft) => {
			draft.push(currentQA);
		});
		else nextState = produceChatTreeNode(parentId, (parentNode) => {
			const questionNodeIndex = parentNode.children.findIndex((item) => [placeholderQuestionId, questionItem.id].includes(item.id));
			if (questionNodeIndex === -1) parentNode.children.push(currentQA);
			else parentNode.children[questionNodeIndex] = currentQA;
		});
		setChatTree(nextState);
		chatTreeRef.current = nextState;
	}, [chatTree, produceChatTreeNode]);
	const handleSend = useCallback(async (url, data, { onGetConversationMessages, onGetSuggestedQuestions, onConversationComplete, isPublicAPI }) => {
		setSuggestedQuestions([]);
		if (isRespondingRef.current) {
			notify({
				type: "info",
				message: t("errorMessage.waitForResponse", { ns: "appDebug" })
			});
			return false;
		}
		const parentMessage = threadMessages.find((item) => item.id === data.parent_message_id);
		const placeholderQuestionId = `question-${Date.now()}`;
		const questionItem = {
			id: placeholderQuestionId,
			content: data.query,
			isAnswer: false,
			message_files: data.files,
			parentMessageId: data.parent_message_id
		};
		const placeholderAnswerId = `answer-placeholder-${Date.now()}`;
		const placeholderAnswerItem = {
			id: placeholderAnswerId,
			content: "",
			isAnswer: true,
			parentMessageId: questionItem.id,
			siblingIndex: parentMessage?.children?.length ?? chatTree.length
		};
		setTargetMessageId(parentMessage?.id);
		updateCurrentQAOnTree({
			parentId: data.parent_message_id,
			responseItem: placeholderAnswerItem,
			placeholderQuestionId,
			questionItem
		});
		const responseItem = {
			id: placeholderAnswerId,
			content: "",
			agent_thoughts: [],
			message_files: [],
			isAnswer: true,
			parentMessageId: questionItem.id,
			siblingIndex: parentMessage?.children?.length ?? chatTree.length
		};
		handleResponding(true);
		hasStopRespondedRef.current = false;
		const { query, files, inputs, ...restData } = data;
		const bodyParams = {
			response_mode: "streaming",
			conversation_id: conversationIdRef.current,
			files: getProcessedFiles(files || []),
			query,
			inputs: getProcessedInputs(inputs || {}, formSettings?.inputsForm || []),
			...restData
		};
		if (bodyParams?.files?.length) bodyParams.files = bodyParams.files.map((item) => {
			if (item.transfer_method === TransferMethod.local_file) return {
				...item,
				url: ""
			};
			return item;
		});
		let isAgentMode = false;
		let hasSetResponseId = false;
		const getOrCreatePlayer = createAudioPlayerManager();
		const otherOptions = {
			isPublicAPI,
			getAbortController: (abortController) => {
				workflowEventsAbortControllerRef.current = abortController;
			},
			onData: (message, isFirstMessage, { conversationId: newConversationId, messageId, taskId }) => {
				if (!isAgentMode) responseItem.content = responseItem.content + message;
				else {
					const lastThought = responseItem.agent_thoughts?.[responseItem.agent_thoughts?.length - 1];
					if (lastThought) lastThought.thought = lastThought.thought + message;
				}
				if (messageId && !hasSetResponseId) {
					questionItem.id = `question-${messageId}`;
					responseItem.id = messageId;
					responseItem.parentMessageId = questionItem.id;
					hasSetResponseId = true;
				}
				if (isFirstMessage && newConversationId) conversationIdRef.current = newConversationId;
				taskIdRef.current = taskId;
				if (messageId) responseItem.id = messageId;
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			async onCompleted(hasError) {
				handleResponding(false);
				if (hasError) return;
				if (onConversationComplete) onConversationComplete(conversationIdRef.current);
				if (conversationIdRef.current && !hasStopRespondedRef.current && onGetConversationMessages) {
					const { data } = await onGetConversationMessages(conversationIdRef.current, (newAbortController) => conversationMessagesAbortControllerRef.current = newAbortController);
					const newResponseItem = data.find((item) => item.id === responseItem.id);
					if (!newResponseItem) return;
					const isUseAgentThought = newResponseItem.agent_thoughts?.length > 0 && newResponseItem.agent_thoughts[newResponseItem.agent_thoughts?.length - 1].thought === newResponseItem.answer;
					updateChatTreeNode(responseItem.id, {
						content: isUseAgentThought ? "" : newResponseItem.answer,
						log: [...newResponseItem.message, ...newResponseItem.message.at(-1).role !== "assistant" ? [{
							role: "assistant",
							text: newResponseItem.answer,
							files: newResponseItem.message_files?.filter((file) => file.belongs_to === "assistant") || []
						}] : []],
						more: {
							time: formatTime(newResponseItem.created_at, "hh:mm A"),
							tokens: newResponseItem.answer_tokens + newResponseItem.message_tokens,
							latency: newResponseItem.provider_response_latency.toFixed(2),
							tokens_per_second: newResponseItem.provider_response_latency > 0 ? (newResponseItem.answer_tokens / newResponseItem.provider_response_latency).toFixed(2) : void 0
						},
						conversationId: conversationIdRef.current,
						input: {
							inputs: newResponseItem.inputs,
							query: newResponseItem.query
						}
					});
				}
				if (config?.suggested_questions_after_answer?.enabled && !hasStopRespondedRef.current && onGetSuggestedQuestions) try {
					const { data } = await onGetSuggestedQuestions(responseItem.id, (newAbortController) => suggestedQuestionsAbortControllerRef.current = newAbortController);
					setSuggestedQuestions(data);
				} catch (e) {
					setSuggestedQuestions([]);
				}
			},
			onFile(file) {
				const fileType = file.type || "image";
				const baseFile = "transferMethod" in file ? file : null;
				const convertedFile = {
					id: baseFile?.id || file.id,
					type: baseFile?.type || (fileType === "image" ? "image/png" : fileType === "video" ? "video/mp4" : fileType === "audio" ? "audio/mpeg" : "application/octet-stream"),
					transferMethod: baseFile?.transferMethod || (fileType === "image" ? "remote_url" : "local_file"),
					uploadedId: baseFile?.uploadedId || file.id,
					supportFileType: baseFile?.supportFileType || (fileType === "image" ? "image" : fileType === "video" ? "video" : fileType === "audio" ? "audio" : "document"),
					progress: baseFile?.progress ?? 100,
					name: baseFile?.name || `generated_${fileType}.${fileType === "image" ? "png" : fileType === "video" ? "mp4" : fileType === "audio" ? "mp3" : "bin"}`,
					url: baseFile?.url || file.url,
					size: baseFile?.size ?? 0
				};
				const lastThought = responseItem.agent_thoughts?.[responseItem.agent_thoughts?.length - 1];
				if (lastThought) {
					const thought = lastThought;
					responseItem.agent_thoughts.at(-1).message_files = [...thought.message_files ?? [], convertedFile];
				} else responseItem.message_files = [...responseItem.message_files ?? [], convertedFile];
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			onThought(thought) {
				isAgentMode = true;
				const response = responseItem;
				if (thought.message_id && !hasSetResponseId) response.id = thought.message_id;
				if (thought.conversation_id) response.conversationId = thought.conversation_id;
				if (response.agent_thoughts.length === 0) response.agent_thoughts.push(thought);
				else {
					const lastThought = response.agent_thoughts.at(-1);
					if (lastThought.id === thought.id) {
						thought.thought = lastThought.thought;
						thought.message_files = lastThought.message_files;
						responseItem.agent_thoughts[response.agent_thoughts.length - 1] = thought;
					} else responseItem.agent_thoughts.push(thought);
				}
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			onMessageEnd: (messageEnd) => {
				if (messageEnd.metadata?.annotation_reply) {
					responseItem.id = messageEnd.id;
					responseItem.annotation = {
						id: messageEnd.metadata.annotation_reply.id,
						authorName: messageEnd.metadata.annotation_reply.account.name
					};
					updateCurrentQAOnTree({
						placeholderQuestionId,
						questionItem,
						responseItem,
						parentId: data.parent_message_id
					});
					handleResponding(false);
					return;
				}
				responseItem.citation = messageEnd.metadata?.retriever_resources || [];
				const processedFilesFromResponse = getProcessedFilesFromResponse(messageEnd.files || []);
				responseItem.allFiles = uniqBy([...responseItem.allFiles || [], ...processedFilesFromResponse || []], "id");
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			onMessageReplace: (messageReplace) => {
				responseItem.content = messageReplace.answer;
			},
			onError() {
				handleResponding(false);
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			onWorkflowStarted: ({ workflow_run_id, task_id, conversation_id, message_id }) => {
				if (conversation_id) conversationIdRef.current = conversation_id;
				if (message_id && !hasSetResponseId) {
					questionItem.id = `question-${message_id}`;
					responseItem.id = message_id;
					responseItem.parentMessageId = questionItem.id;
					hasSetResponseId = true;
				}
				if (responseItem.workflowProcess && responseItem.workflowProcess.tracing.length > 0) responseItem.workflowProcess.status = WorkflowRunningStatus.Running;
				else {
					taskIdRef.current = task_id;
					responseItem.workflow_run_id = workflow_run_id;
					responseItem.workflowProcess = {
						status: WorkflowRunningStatus.Running,
						tracing: []
					};
				}
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			onWorkflowFinished: ({ data: workflowFinishedData }) => {
				if (pausedStateRef.current) pausedStateRef.current = false;
				responseItem.workflowProcess.status = workflowFinishedData.status;
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			onIterationStart: ({ data: iterationStartedData }) => {
				responseItem.workflowProcess.tracing.push({
					...iterationStartedData,
					status: WorkflowRunningStatus.Running
				});
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			onIterationFinish: ({ data: iterationFinishedData }) => {
				const tracing = responseItem.workflowProcess.tracing;
				const iterationIndex = tracing.findIndex((item) => item.node_id === iterationFinishedData.node_id && (item.execution_metadata?.parallel_id === iterationFinishedData.execution_metadata?.parallel_id || item.parallel_id === iterationFinishedData.execution_metadata?.parallel_id));
				tracing[iterationIndex] = {
					...tracing[iterationIndex],
					...iterationFinishedData,
					status: WorkflowRunningStatus.Succeeded
				};
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			onNodeStarted: ({ data: nodeStartedData }) => {
				if (!responseItem.workflowProcess) return;
				if (!responseItem.workflowProcess.tracing) responseItem.workflowProcess.tracing = [];
				const currentIndex = responseItem.workflowProcess.tracing.findIndex((item) => item.node_id === nodeStartedData.node_id);
				if (currentIndex > -1) responseItem.workflowProcess.tracing[currentIndex] = {
					...nodeStartedData,
					status: NodeRunningStatus.Running
				};
				else {
					if (nodeStartedData.iteration_id) return;
					if (data.loop_id) return;
					responseItem.workflowProcess.tracing.push({
						...nodeStartedData,
						status: WorkflowRunningStatus.Running
					});
				}
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			onNodeFinished: ({ data: nodeFinishedData }) => {
				if (nodeFinishedData.iteration_id) return;
				if (data.loop_id) return;
				const currentIndex = responseItem.workflowProcess.tracing.findIndex((item) => {
					if (!item.execution_metadata?.parallel_id) return item.id === nodeFinishedData.id;
					return item.id === nodeFinishedData.id && item.execution_metadata?.parallel_id === nodeFinishedData.execution_metadata?.parallel_id;
				});
				responseItem.workflowProcess.tracing[currentIndex] = nodeFinishedData;
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			onTTSChunk: (messageId, audio) => {
				if (!audio || audio === "") return;
				const audioPlayer = getOrCreatePlayer();
				if (audioPlayer) {
					audioPlayer.playAudioWithAudio(audio, true);
					AudioPlayerManager.getInstance().resetMsgId(messageId);
				}
			},
			onTTSEnd: (messageId, audio) => {
				const audioPlayer = getOrCreatePlayer();
				if (audioPlayer) audioPlayer.playAudioWithAudio(audio, false);
			},
			onLoopStart: ({ data: loopStartedData }) => {
				responseItem.workflowProcess.tracing.push({
					...loopStartedData,
					status: WorkflowRunningStatus.Running
				});
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			onLoopFinish: ({ data: loopFinishedData }) => {
				const tracing = responseItem.workflowProcess.tracing;
				const loopIndex = tracing.findIndex((item) => item.node_id === loopFinishedData.node_id && (item.execution_metadata?.parallel_id === loopFinishedData.execution_metadata?.parallel_id || item.parallel_id === loopFinishedData.execution_metadata?.parallel_id));
				tracing[loopIndex] = {
					...tracing[loopIndex],
					...loopFinishedData,
					status: WorkflowRunningStatus.Succeeded
				};
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			onHumanInputRequired: ({ data: humanInputRequiredData }) => {
				if (!responseItem.humanInputFormDataList) responseItem.humanInputFormDataList = [humanInputRequiredData];
				else {
					const currentFormIndex = responseItem.humanInputFormDataList.findIndex((item) => item.node_id === humanInputRequiredData.node_id);
					if (currentFormIndex > -1) responseItem.humanInputFormDataList[currentFormIndex] = humanInputRequiredData;
					else responseItem.humanInputFormDataList.push(humanInputRequiredData);
				}
				const currentTracingIndex = responseItem.workflowProcess.tracing.findIndex((item) => item.node_id === humanInputRequiredData.node_id);
				if (currentTracingIndex > -1) {
					responseItem.workflowProcess.tracing[currentTracingIndex].status = NodeRunningStatus.Paused;
					updateCurrentQAOnTree({
						placeholderQuestionId,
						questionItem,
						responseItem,
						parentId: data.parent_message_id
					});
				}
			},
			onHumanInputFormFilled: ({ data: humanInputFilledFormData }) => {
				if (responseItem.humanInputFormDataList?.length) {
					const currentFormIndex = responseItem.humanInputFormDataList.findIndex((item) => item.node_id === humanInputFilledFormData.node_id);
					responseItem.humanInputFormDataList.splice(currentFormIndex, 1);
				}
				if (!responseItem.humanInputFilledFormDataList) responseItem.humanInputFilledFormDataList = [humanInputFilledFormData];
				else responseItem.humanInputFilledFormDataList.push(humanInputFilledFormData);
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			onHumanInputFormTimeout: ({ data: humanInputFormTimeoutData }) => {
				if (responseItem.humanInputFormDataList?.length) {
					const currentFormIndex = responseItem.humanInputFormDataList.findIndex((item) => item.node_id === humanInputFormTimeoutData.node_id);
					responseItem.humanInputFormDataList[currentFormIndex].expiration_time = humanInputFormTimeoutData.expiration_time;
				}
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			},
			onWorkflowPaused: ({ data: workflowPausedData }) => {
				const url = `/workflow/${workflowPausedData.workflow_run_id}/events`;
				pausedStateRef.current = true;
				sseGet(url, {}, otherOptions);
				responseItem.workflowProcess.status = WorkflowRunningStatus.Paused;
				updateCurrentQAOnTree({
					placeholderQuestionId,
					questionItem,
					responseItem,
					parentId: data.parent_message_id
				});
			}
		};
		if (workflowEventsAbortControllerRef.current) workflowEventsAbortControllerRef.current.abort();
		ssePost(url, { body: bodyParams }, otherOptions);
		return true;
	}, [
		t,
		chatTree.length,
		threadMessages,
		config?.suggested_questions_after_answer,
		updateCurrentQAOnTree,
		updateChatTreeNode,
		notify,
		handleResponding,
		formatTime,
		createAudioPlayerManager,
		formSettings
	]);
	const handleAnnotationEdited = useCallback((query, answer, index) => {
		const targetQuestionId = chatList[index - 1].id;
		const targetAnswerId = chatList[index].id;
		updateChatTreeNode(targetQuestionId, { content: query });
		updateChatTreeNode(targetAnswerId, {
			content: answer,
			annotation: {
				...chatList[index].annotation,
				logAnnotation: void 0
			}
		});
	}, [chatList, updateChatTreeNode]);
	const handleAnnotationAdded = useCallback((annotationId, authorName, query, answer, index) => {
		const targetQuestionId = chatList[index - 1].id;
		const targetAnswerId = chatList[index].id;
		updateChatTreeNode(targetQuestionId, { content: query });
		updateChatTreeNode(targetAnswerId, {
			content: chatList[index].content,
			annotation: {
				id: annotationId,
				authorName,
				logAnnotation: {
					content: answer,
					account: {
						id: "",
						name: authorName,
						email: ""
					}
				}
			}
		});
	}, [chatList, updateChatTreeNode]);
	const handleAnnotationRemoved = useCallback((index) => {
		const targetAnswerId = chatList[index].id;
		updateChatTreeNode(targetAnswerId, {
			content: chatList[index].content,
			annotation: {
				...chatList[index].annotation,
				id: ""
			}
		});
	}, [chatList, updateChatTreeNode]);
	const handleSwitchSibling = useCallback((siblingMessageId, callbacks) => {
		setTargetMessageId(siblingMessageId);
		const findMessageInTree = (nodes, targetId) => {
			for (const node of nodes) {
				if (node.id === targetId) return node;
				if (node.children) {
					const found = findMessageInTree(node.children, targetId);
					if (found) return found;
				}
			}
		};
		const targetMessage = findMessageInTree(chatTreeRef.current, siblingMessageId);
		if (targetMessage?.workflow_run_id && targetMessage.humanInputFormDataList && targetMessage.humanInputFormDataList.length > 0) handleResume(targetMessage.id, targetMessage.workflow_run_id, callbacks);
	}, [setTargetMessageId, handleResume]);
	useEffect(() => {
		if (clearChatList) handleRestart(() => clearChatListCallback?.(false));
	}, [
		clearChatList,
		clearChatListCallback,
		handleRestart
	]);
	return {
		chatList,
		setTargetMessageId,
		isResponding,
		setIsResponding,
		handleSend,
		handleResume,
		handleSwitchSibling,
		suggestedQuestions,
		handleRestart,
		handleStop,
		handleAnnotationEdited,
		handleAnnotationAdded,
		handleAnnotationRemoved
	};
};
//#endregion
//#region context/web-app-context.tsx
var useWebAppStore = create((set) => ({
	shareCode: null,
	updateShareCode: (shareCode) => set(() => ({ shareCode })),
	appInfo: null,
	updateAppInfo: (appInfo) => set(() => ({ appInfo })),
	appParams: null,
	updateAppParams: (appParams) => set(() => ({ appParams })),
	webAppAccessMode: AccessMode.SPECIFIC_GROUPS_MEMBERS,
	updateWebAppAccessMode: (accessMode) => set(() => ({ webAppAccessMode: accessMode })),
	appMeta: null,
	updateWebAppMeta: (appMeta) => set(() => ({ appMeta })),
	userCanAccessApp: false,
	updateUserCanAccessApp: (canAccess) => set(() => ({ userCanAccessApp: canAccess })),
	embeddedUserId: null,
	updateEmbeddedUserId: (userId) => set(() => ({ embeddedUserId: userId })),
	embeddedConversationId: null,
	updateEmbeddedConversationId: (conversationId) => set(() => ({ embeddedConversationId: conversationId }))
}));
var getShareCodeFromRedirectUrl = (redirectUrl) => {
	if (!redirectUrl || redirectUrl.length === 0) return null;
	return new URL(`${window.location.origin}${decodeURIComponent(redirectUrl)}`).pathname.split("/").pop() || null;
};
var getShareCodeFromPathname = (pathname) => {
	const code = pathname.split("/").pop() || null;
	if (code === "webapp-signin") return null;
	return code;
};
var WebAppStoreProvider = ({ children }) => {
	const isGlobalPending = useIsSystemFeaturesPending();
	const updateWebAppAccessMode = useWebAppStore((state) => state.updateWebAppAccessMode);
	const updateShareCode = useWebAppStore((state) => state.updateShareCode);
	const updateEmbeddedUserId = useWebAppStore((state) => state.updateEmbeddedUserId);
	const updateEmbeddedConversationId = useWebAppStore((state) => state.updateEmbeddedConversationId);
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const redirectUrlParam = searchParams.get("redirect_url");
	const searchParamsString = searchParams.toString();
	const shareCode = getShareCodeFromRedirectUrl(redirectUrlParam) || getShareCodeFromPathname(pathname);
	useEffect(() => {
		updateShareCode(shareCode);
	}, [shareCode, updateShareCode]);
	useEffect(() => {
		let cancelled = false;
		const syncEmbeddedUserId = async () => {
			try {
				const { user_id, conversation_id } = await getProcessedSystemVariablesFromUrlParams();
				if (!cancelled) {
					updateEmbeddedUserId(user_id || null);
					updateEmbeddedConversationId(conversation_id || null);
				}
			} catch {
				if (!cancelled) {
					updateEmbeddedUserId(null);
					updateEmbeddedConversationId(null);
				}
			}
		};
		syncEmbeddedUserId();
		return () => {
			cancelled = true;
		};
	}, [
		searchParamsString,
		updateEmbeddedUserId,
		updateEmbeddedConversationId
	]);
	const { isLoading, data: accessModeResult } = useGetWebAppAccessModeByCode(shareCode);
	useEffect(() => {
		if (accessModeResult?.accessMode) updateWebAppAccessMode(accessModeResult.accessMode);
	}, [
		accessModeResult,
		updateWebAppAccessMode,
		shareCode
	]);
	if (isGlobalPending || isLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full w-full items-center justify-center",
		children: /* @__PURE__ */ jsx(Loading, {})
	});
	return /* @__PURE__ */ jsx(Fragment$1, { children });
};
//#endregion
//#region app/components/base/app-unavailable.tsx
var AppUnavailable = ({ code = 404, isUnknownReason, unknownReason, className }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-screen w-screen items-center justify-center", className),
		children: [/* @__PURE__ */ jsx("h1", {
			className: "mr-5 h-[50px] shrink-0 pr-5 text-[24px] font-medium leading-[50px]",
			style: { borderRight: "1px solid rgba(0,0,0,.3)" },
			children: code
		}), /* @__PURE__ */ jsx("div", {
			className: "text-sm",
			children: unknownReason || (isUnknownReason ? t("common.appUnknownError", { ns: "share" }) : t("common.appUnavailable", { ns: "share" }))
		})]
	});
};
var app_unavailable_default = React$1.memo(AppUnavailable);
//#endregion
//#region app/components/base/chat/embedded-chatbot/context.ts
var EmbeddedChatbotContext = createContext$1({
	appData: null,
	appMeta: null,
	appParams: null,
	appChatListDataLoading: false,
	currentConversationId: "",
	appPrevChatList: [],
	pinnedConversationList: [],
	conversationList: [],
	newConversationInputs: {},
	newConversationInputsRef: { current: {} },
	handleNewConversationInputsChange: noop,
	inputsForms: [],
	handleNewConversation: noop,
	handleStartChat: noop,
	handleChangeConversation: noop,
	handleNewConversationCompleted: noop,
	chatShouldReloadKey: "",
	isMobile: false,
	appSourceType: AppSourceType.webApp,
	isInstalledApp: false,
	allowResetChat: true,
	handleFeedback: noop,
	currentChatInstanceRef: { current: { handleStop: noop } },
	clearChatList: false,
	setClearChatList: noop,
	isResponding: false,
	setIsResponding: noop,
	currentConversationInputs: {},
	setCurrentConversationInputs: noop,
	allInputsHidden: false,
	initUserVariables: {}
});
var useEmbeddedChatbotContext = () => useContext$1(EmbeddedChatbotContext);
//#endregion
//#region app/components/base/chat/embedded-chatbot/inputs-form/content.tsx
var InputsFormContent = ({ showTip }) => {
	const { t } = useTranslation();
	const { appParams, inputsForms, currentConversationId, currentConversationInputs, setCurrentConversationInputs, newConversationInputs, newConversationInputsRef, handleNewConversationInputsChange } = useEmbeddedChatbotContext();
	const inputsFormValue = currentConversationId ? currentConversationInputs : newConversationInputs;
	const handleFormChange = useCallback((variable, value) => {
		setCurrentConversationInputs({
			...currentConversationInputs,
			[variable]: value
		});
		handleNewConversationInputsChange({
			...newConversationInputsRef.current,
			[variable]: value
		});
	}, [
		newConversationInputsRef,
		handleNewConversationInputsChange,
		currentConversationInputs,
		setCurrentConversationInputs
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [inputsForms.filter((form) => form.hide !== true).map((form) => /* @__PURE__ */ jsxs("div", {
			className: "space-y-1",
			"data-testid": `inputs-form-item-${form.variable}`,
			children: [
				form.type !== InputVarType.checkbox && /* @__PURE__ */ jsxs("div", {
					className: "flex h-6 items-center gap-1",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-text-secondary system-md-semibold",
						children: form.label
					}), !form.required && /* @__PURE__ */ jsx("div", {
						className: "text-text-tertiary system-xs-regular",
						children: t("panel.optional", { ns: "workflow" })
					})]
				}),
				form.type === InputVarType.textInput && /* @__PURE__ */ jsx(Input$1, {
					value: inputsFormValue?.[form.variable] || "",
					onChange: (e) => handleFormChange(form.variable, e.target.value),
					placeholder: form.label
				}),
				form.type === InputVarType.number && /* @__PURE__ */ jsx(Input$1, {
					type: "number",
					value: inputsFormValue?.[form.variable] || "",
					onChange: (e) => handleFormChange(form.variable, e.target.value),
					placeholder: form.label
				}),
				form.type === InputVarType.paragraph && /* @__PURE__ */ jsx(Textarea, {
					value: inputsFormValue?.[form.variable] || "",
					onChange: (e) => handleFormChange(form.variable, e.target.value),
					placeholder: form.label
				}),
				form.type === InputVarType.checkbox && /* @__PURE__ */ jsx(bool_input_default, {
					name: form.label,
					value: inputsFormValue?.[form.variable],
					required: form.required,
					onChange: (value) => handleFormChange(form.variable, value)
				}),
				form.type === InputVarType.select && /* @__PURE__ */ jsx(PortalSelect, {
					popupClassName: "w-[200px]",
					value: inputsFormValue?.[form.variable] ?? form.default ?? "",
					items: form.options.map((option) => ({
						value: option,
						name: option
					})),
					onSelect: (item) => handleFormChange(form.variable, item.value),
					placeholder: form.label
				}),
				form.type === InputVarType.singleFile && /* @__PURE__ */ jsx(FileUploaderInAttachmentWrapper, {
					value: inputsFormValue?.[form.variable] ? [inputsFormValue?.[form.variable]] : [],
					onChange: (files) => handleFormChange(form.variable, files[0]),
					fileConfig: {
						allowed_file_types: form.allowed_file_types,
						allowed_file_extensions: form.allowed_file_extensions,
						allowed_file_upload_methods: form.allowed_file_upload_methods,
						number_limits: 1,
						fileUploadConfig: appParams.system_parameters
					}
				}),
				form.type === InputVarType.multiFiles && /* @__PURE__ */ jsx(FileUploaderInAttachmentWrapper, {
					value: inputsFormValue?.[form.variable] || [],
					onChange: (files) => handleFormChange(form.variable, files),
					fileConfig: {
						allowed_file_types: form.allowed_file_types,
						allowed_file_extensions: form.allowed_file_extensions,
						allowed_file_upload_methods: form.allowed_file_upload_methods,
						number_limits: form.max_length,
						fileUploadConfig: appParams.system_parameters
					}
				}),
				form.type === InputVarType.jsonObject && /* @__PURE__ */ jsx(code_editor_default, {
					language: CodeLanguage.json,
					value: inputsFormValue?.[form.variable] || "",
					onChange: (v) => handleFormChange(form.variable, v),
					noWrapper: true,
					className: "h-[80px] overflow-y-auto rounded-[10px] bg-components-input-bg-normal p-1",
					placeholder: /* @__PURE__ */ jsx("div", {
						className: "whitespace-pre",
						children: form.json_schema
					})
				})
			]
		}, form.variable)), showTip && /* @__PURE__ */ jsx("div", {
			className: "text-text-tertiary system-xs-regular",
			children: t("chat.chatFormTip", { ns: "share" })
		})]
	});
};
var content_default = memo(InputsFormContent);
//#endregion
//#region app/components/base/chat/embedded-chatbot/inputs-form/index.tsx
var InputsFormNode = ({ collapsed, setCollapsed }) => {
	const { t } = useTranslation();
	const { appSourceType, isMobile, currentConversationId, themeBuilder, handleStartChat, allInputsHidden, inputsForms } = useEmbeddedChatbotContext();
	const isTryApp = appSourceType === AppSourceType.tryApp;
	if (allInputsHidden || inputsForms.length === 0) return null;
	return /* @__PURE__ */ jsxs("div", {
		"data-testid": "inputs-form-node",
		className: cn("mb-6 flex flex-col items-center px-4 pt-6", isMobile && "mb-4 pt-4", isTryApp && "mb-0 px-0"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("w-full max-w-[672px] rounded-2xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-md", collapsed && "border border-components-card-border bg-components-card-bg shadow-none", isTryApp && "max-w-[auto]"),
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: cn("flex items-center gap-3 rounded-t-2xl px-6 py-4", !collapsed && "border-b border-divider-subtle", isMobile && "px-4 py-3"),
					children: [
						/* @__PURE__ */ jsx("div", { className: "i-custom-public-other-message-3-fill h-6 w-6 shrink-0" }),
						/* @__PURE__ */ jsx("div", {
							className: "grow text-text-secondary system-xl-semibold",
							children: t("chat.chatSettingsTitle", { ns: "share" })
						}),
						collapsed && /* @__PURE__ */ jsx(Button, {
							className: "uppercase text-text-tertiary",
							size: "small",
							variant: "ghost",
							onClick: () => setCollapsed(false),
							"data-testid": "inputs-form-edit-button",
							children: t("operation.edit", { ns: "common" })
						}),
						!collapsed && currentConversationId && /* @__PURE__ */ jsx(Button, {
							className: "uppercase text-text-tertiary",
							size: "small",
							variant: "ghost",
							onClick: () => setCollapsed(true),
							"data-testid": "inputs-form-close-button",
							children: t("operation.close", { ns: "common" })
						})
					]
				}),
				!collapsed && /* @__PURE__ */ jsx("div", {
					className: cn("p-6", isMobile && "p-4"),
					children: /* @__PURE__ */ jsx(content_default, {})
				}),
				!collapsed && !currentConversationId && /* @__PURE__ */ jsx("div", {
					className: cn("p-6", isMobile && "p-4"),
					children: /* @__PURE__ */ jsx(Button, {
						variant: "primary",
						className: "w-full",
						onClick: () => handleStartChat(() => setCollapsed(true)),
						"data-testid": "inputs-form-start-chat-button",
						style: themeBuilder?.theme ? { backgroundColor: themeBuilder?.theme.primaryColor } : {},
						children: t("chat.startChat", { ns: "share" })
					})
				})
			]
		}), collapsed && /* @__PURE__ */ jsxs("div", {
			className: "flex w-full max-w-[720px] items-center py-4",
			children: [/* @__PURE__ */ jsx(Divider$1, {
				bgStyle: "gradient",
				className: "h-px basis-1/2 rotate-180"
			}), /* @__PURE__ */ jsx(Divider$1, {
				bgStyle: "gradient",
				className: "h-px basis-1/2"
			})]
		})]
	});
};
//#endregion
//#region app/components/base/logo/logo-embedded-chat-avatar.tsx
var LogoEmbeddedChatAvatar = ({ className }) => {
	return /* @__PURE__ */ jsx("img", {
		src: `${basePath}/logo/logo-embedded-chat-avatar.png`,
		className: `block h-10 w-10 ${className}`,
		alt: "logo"
	});
};
//#endregion
//#region app/components/base/chat/embedded-chatbot/utils.ts
var isDify = () => {
	return document.referrer.includes("dify.ai");
};
//#endregion
//#region app/components/base/chat/embedded-chatbot/chat-wrapper.tsx
var ChatWrapper = () => {
	const { appData, appParams, appPrevChatList, currentConversationId, currentConversationItem, currentConversationInputs, inputsForms, newConversationInputs, newConversationInputsRef, handleNewConversationCompleted, isMobile, isInstalledApp, appId, appMeta, disableFeedback, handleFeedback, currentChatInstanceRef, themeBuilder, clearChatList, setClearChatList, setIsResponding, allInputsHidden, initUserVariables, appSourceType } = useEmbeddedChatbotContext();
	const sendOnEnter = useMemo(() => {
		if (typeof window === "undefined") return true;
		return new URLSearchParams(window.location.search).get("sendOnEnter") !== "false";
	}, []);
	const appConfig = useMemo(() => {
		const config = appParams || {};
		return {
			...config,
			file_upload: {
				...config.file_upload,
				fileUploadConfig: config.system_parameters
			},
			supportFeedback: true,
			opening_statement: currentConversationItem?.introduction || config.opening_statement
		};
	}, [appParams, currentConversationItem?.introduction]);
	const { chatList, handleSend, handleStop, handleSwitchSibling, isResponding: respondingState, suggestedQuestions } = useChat(appConfig, {
		inputs: currentConversationId ? currentConversationInputs : newConversationInputs,
		inputsForm: inputsForms
	}, appPrevChatList, (taskId) => stopChatMessageResponding("", taskId, appSourceType, appId), clearChatList, setClearChatList);
	const inputsFormValue = currentConversationId ? currentConversationInputs : newConversationInputsRef?.current;
	const inputDisabled = useMemo(() => {
		if (allInputsHidden) return false;
		let hasEmptyInput = "";
		let fileIsUploading = false;
		const requiredVars = inputsForms.filter(({ required, type }) => required && type !== InputVarType.checkbox);
		if (requiredVars.length) requiredVars.forEach(({ variable, label, type }) => {
			if (hasEmptyInput) return;
			if (fileIsUploading) return;
			if (!inputsFormValue?.[variable]) hasEmptyInput = label;
			if ((type === InputVarType.singleFile || type === InputVarType.multiFiles) && inputsFormValue?.[variable]) {
				const files = inputsFormValue[variable];
				if (Array.isArray(files)) fileIsUploading = files.find((item) => item.transferMethod === TransferMethod.local_file && !item.uploadedId);
				else fileIsUploading = files.transferMethod === TransferMethod.local_file && !files.uploadedId;
			}
		});
		if (hasEmptyInput) return true;
		if (fileIsUploading) return true;
		return false;
	}, [
		inputsFormValue,
		inputsForms,
		allInputsHidden
	]);
	useEffect(() => {
		if (currentChatInstanceRef.current) currentChatInstanceRef.current.handleStop = handleStop;
	}, [currentChatInstanceRef, handleStop]);
	useEffect(() => {
		setIsResponding(respondingState);
	}, [respondingState, setIsResponding]);
	useEffect(() => {
		if (!appPrevChatList || appPrevChatList.length === 0) return;
		let lastPausedNode;
		const findLastPausedWorkflow = (nodes) => {
			nodes.forEach((node) => {
				if (node.children && node.children.length > 0) findLastPausedWorkflow(node.children);
				if (node.isAnswer && node.workflow_run_id && node.humanInputFormDataList && node.humanInputFormDataList.length > 0) lastPausedNode = node;
			});
		};
		findLastPausedWorkflow(appPrevChatList);
		if (lastPausedNode) handleSwitchSibling(lastPausedNode.id, {
			onGetSuggestedQuestions: (responseItemId) => fetchSuggestedQuestions(responseItemId, appSourceType, appId),
			onConversationComplete: currentConversationId ? void 0 : handleNewConversationCompleted,
			isPublicAPI: appSourceType === AppSourceType.webApp
		});
	}, []);
	const doSend = useCallback((message, files, isRegenerate = false, parentAnswer = null) => {
		const data = {
			query: message,
			files,
			inputs: currentConversationId ? currentConversationInputs : newConversationInputs,
			conversation_id: currentConversationId,
			parent_message_id: (isRegenerate ? parentAnswer?.id : getLastAnswer(chatList)?.id) || null
		};
		handleSend(getUrl("chat-messages", appSourceType, appId || ""), data, {
			onGetSuggestedQuestions: (responseItemId) => fetchSuggestedQuestions(responseItemId, appSourceType, appId),
			onConversationComplete: currentConversationId ? void 0 : handleNewConversationCompleted,
			isPublicAPI: appSourceType === AppSourceType.webApp
		});
	}, [
		currentConversationId,
		currentConversationInputs,
		newConversationInputs,
		chatList,
		handleSend,
		appSourceType,
		appId,
		handleNewConversationCompleted
	]);
	const doRegenerate = useCallback((chatItem, editedQuestion) => {
		const question = editedQuestion ? chatItem : chatList.find((item) => item.id === chatItem.parentMessageId);
		const parentAnswer = chatList.find((item) => item.id === question.parentMessageId);
		doSend(editedQuestion ? editedQuestion.message : question.content, editedQuestion ? editedQuestion.files : question.message_files, true, isValidGeneratedAnswer(parentAnswer) ? parentAnswer : null);
	}, [chatList, doSend]);
	const doSwitchSibling = useCallback((siblingMessageId) => {
		handleSwitchSibling(siblingMessageId, {
			onGetSuggestedQuestions: (responseItemId) => fetchSuggestedQuestions(responseItemId, appSourceType, appId),
			onConversationComplete: currentConversationId ? void 0 : handleNewConversationCompleted,
			isPublicAPI: appSourceType === AppSourceType.webApp
		});
	}, [
		handleSwitchSibling,
		appSourceType,
		appId,
		currentConversationId,
		handleNewConversationCompleted
	]);
	const messageList = useMemo(() => {
		if (currentConversationId || chatList.length > 1) return chatList;
		return chatList.filter((item) => !item.isOpeningStatement);
	}, [chatList, currentConversationId]);
	const isTryApp = appSourceType === AppSourceType.tryApp;
	const [collapsed, setCollapsed] = useState(!!currentConversationId && !isTryApp);
	const chatNode = useMemo(() => {
		if (allInputsHidden || !inputsForms.length) return null;
		if (isMobile) {
			if (!currentConversationId) return /* @__PURE__ */ jsx(InputsFormNode, {
				collapsed,
				setCollapsed
			});
			return /* @__PURE__ */ jsx("div", { className: "mb-4" });
		} else return /* @__PURE__ */ jsx(InputsFormNode, {
			collapsed,
			setCollapsed
		});
	}, [
		inputsForms.length,
		isMobile,
		currentConversationId,
		collapsed,
		allInputsHidden
	]);
	const handleSubmitHumanInputForm = useCallback(async (formToken, formData) => {
		if (isInstalledApp) await submitHumanInputForm$1(formToken, formData);
		else await submitHumanInputForm(formToken, formData);
	}, [isInstalledApp]);
	const welcome = useMemo(() => {
		const welcomeMessage = chatList.find((item) => item.isOpeningStatement);
		if (respondingState) return null;
		if (currentConversationId) return null;
		if (!welcomeMessage) return null;
		if (!collapsed && inputsForms.length > 0 && !allInputsHidden) return null;
		if (!appData?.site) return null;
		if (welcomeMessage.suggestedQuestions && welcomeMessage.suggestedQuestions?.length > 0) return /* @__PURE__ */ jsx("div", {
			className: cn("flex items-center justify-center px-4 py-12", isMobile ? "min-h-[30vh] py-0" : "h-[50vh]"),
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex max-w-[720px] grow gap-4",
				children: [/* @__PURE__ */ jsx(app_icon_default, {
					size: "xl",
					iconType: appData?.site.icon_type,
					icon: appData?.site.icon,
					background: appData?.site.icon_background,
					imageUrl: appData?.site.icon_url
				}), /* @__PURE__ */ jsxs("div", {
					className: "grow rounded-2xl bg-chat-bubble-bg px-4 py-3 text-text-primary body-lg-regular",
					children: [/* @__PURE__ */ jsx(Markdown, { content: welcomeMessage.content }), /* @__PURE__ */ jsx(suggested_questions_default, { item: welcomeMessage })]
				})]
			})
		});
		return /* @__PURE__ */ jsxs("div", {
			className: cn("flex min-h-[50vh] flex-col items-center justify-center gap-3 py-12", isMobile ? "min-h-[30vh] py-0" : "h-[50vh]"),
			children: [/* @__PURE__ */ jsx(app_icon_default, {
				size: "xl",
				iconType: appData?.site.icon_type,
				icon: appData?.site.icon,
				background: appData?.site.icon_background,
				imageUrl: appData?.site.icon_url
			}), /* @__PURE__ */ jsx("div", {
				className: "max-w-[768px] px-4",
				children: /* @__PURE__ */ jsx(Markdown, {
					className: "!text-text-tertiary !body-2xl-regular",
					content: welcomeMessage.content
				})
			})]
		});
	}, [
		chatList,
		respondingState,
		currentConversationId,
		collapsed,
		inputsForms.length,
		allInputsHidden,
		appData?.site,
		isMobile
	]);
	const answerIcon = isDify() ? /* @__PURE__ */ jsx(LogoEmbeddedChatAvatar, { className: "relative shrink-0" }) : appData?.site && appData.site.use_icon_as_answer_icon ? /* @__PURE__ */ jsx(AnswerIcon, {
		iconType: appData.site.icon_type,
		icon: appData.site.icon,
		background: appData.site.icon_background,
		imageUrl: appData.site.icon_url
	}) : null;
	return /* @__PURE__ */ jsx(chat_default$1, {
		isTryApp,
		appData: appData || void 0,
		config: appConfig,
		chatList: messageList,
		isResponding: respondingState,
		chatContainerInnerClassName: cn("mx-auto w-full max-w-full px-4", messageList.length && "pt-4"),
		chatFooterClassName: cn("pb-4", !isMobile && "rounded-b-2xl"),
		chatFooterInnerClassName: cn("mx-auto w-full max-w-full px-4", isMobile && "px-2"),
		onSend: doSend,
		inputs: currentConversationId ? currentConversationInputs : newConversationInputs,
		inputsForm: inputsForms,
		onRegenerate: doRegenerate,
		onStopResponding: handleStop,
		onHumanInputFormSubmit: handleSubmitHumanInputForm,
		chatNode: /* @__PURE__ */ jsxs(Fragment$1, { children: [chatNode, welcome] }),
		allToolIcons: appMeta?.tool_icons || {},
		disableFeedback,
		onFeedback: handleFeedback,
		suggestedQuestions,
		answerIcon,
		hideProcessDetail: true,
		themeBuilder,
		switchSibling: doSwitchSibling,
		inputDisabled,
		sendOnEnter,
		questionIcon: initUserVariables?.avatar_url ? /* @__PURE__ */ jsx(Avatar, {
			avatar: initUserVariables.avatar_url,
			name: initUserVariables.name || "user",
			size: "xl"
		}) : void 0
	});
};
//#endregion
//#region app/components/base/chat/embedded-chatbot/inputs-form/view-form-dropdown.tsx
var ViewFormDropdown = ({ iconColor }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-end",
		offset: {
			mainAxis: 4,
			crossAxis: 4
		},
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen((v) => !v),
			children: /* @__PURE__ */ jsx(ActionButton, {
				size: "l",
				state: open ? ActionButtonState.Hover : ActionButtonState.Default,
				"data-testid": "view-form-dropdown-trigger",
				children: /* @__PURE__ */ jsx("div", { className: cn("i-ri-chat-settings-line h-[18px] w-[18px] shrink-0", iconColor) })
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[99]",
			children: /* @__PURE__ */ jsxs("div", {
				"data-testid": "view-form-dropdown-content",
				className: "w-[400px] rounded-2xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-lg backdrop-blur-sm",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 rounded-t-2xl border-b border-divider-subtle px-6 py-4",
					children: [/* @__PURE__ */ jsx("div", { className: "i-custom-public-other-message-3-fill h-6 w-6 shrink-0" }), /* @__PURE__ */ jsx("div", {
						className: "grow text-text-secondary system-xl-semibold",
						children: t("chat.chatSettingsTitle", { ns: "share" })
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "p-6",
					children: /* @__PURE__ */ jsx(content_default, {})
				})]
			})
		})]
	});
};
//#endregion
//#region service/try-app.ts
var fetchTryAppInfo = (appId) => {
	return consoleClient.trialApps.info({ params: { appId } });
};
var fetchTryAppDatasets = (appId, ids) => {
	return consoleClient.trialApps.datasets({
		params: { appId },
		query: { ids }
	});
};
var fetchTryAppFlowPreview = (appId) => {
	return consoleClient.trialApps.workflows({ params: { appId } }).then((res) => res);
};
var fetchTryAppParams = (appId) => {
	return consoleClient.trialApps.parameters({ params: { appId } });
};
//#endregion
//#region service/use-try-app.ts
var useGetTryAppInfo = (appId) => {
	return useQuery({
		queryKey: consoleQuery.trialApps.info.queryKey({ input: { params: { appId } } }),
		queryFn: () => {
			return fetchTryAppInfo(appId);
		},
		enabled: !!appId
	});
};
var useGetTryAppParams = (appId) => {
	return useQuery({
		queryKey: consoleQuery.trialApps.parameters.queryKey({ input: { params: { appId } } }),
		queryFn: () => {
			return fetchTryAppParams(appId);
		},
		enabled: !!appId
	});
};
var useGetTryAppDataSets = (appId, ids) => {
	return useQuery({
		queryKey: consoleQuery.trialApps.datasets.queryKey({ input: {
			params: { appId },
			query: { ids }
		} }),
		queryFn: () => {
			return fetchTryAppDatasets(appId, ids);
		},
		enabled: ids.length > 0
	});
};
var useGetTryAppFlowPreview = (appId, disabled) => {
	return useQuery({
		queryKey: consoleQuery.trialApps.workflows.queryKey({ input: { params: { appId } } }),
		enabled: !disabled,
		queryFn: () => {
			return fetchTryAppFlowPreview(appId);
		}
	});
};
//#endregion
//#region app/components/base/chat/embedded-chatbot/hooks.tsx
function getFormattedChatList(messages) {
	const newChatList = [];
	messages.forEach((item) => {
		const questionFiles = item.message_files?.filter((file) => file.belongs_to === "user") || [];
		newChatList.push({
			id: `question-${item.id}`,
			content: item.query,
			isAnswer: false,
			message_files: getProcessedFilesFromResponse(questionFiles.map((item) => ({
				...item,
				related_id: item.id
			}))),
			parentMessageId: item.parent_message_id || void 0
		});
		const answerFiles = item.message_files?.filter((file) => file.belongs_to === "assistant") || [];
		newChatList.push({
			id: item.id,
			content: item.answer,
			agent_thoughts: addFileInfos(item.agent_thoughts ? sortAgentSorts(item.agent_thoughts) : item.agent_thoughts, item.message_files),
			feedback: item.feedback,
			isAnswer: true,
			citation: item.retriever_resources,
			message_files: getProcessedFilesFromResponse(answerFiles.map((item) => ({
				...item,
				related_id: item.id
			}))),
			parentMessageId: `question-${item.id}`
		});
	});
	return newChatList;
}
var useEmbeddedChatbot = (appSourceType, tryAppId) => {
	const isInstalledApp = false;
	const isTryApp = appSourceType === AppSourceType.tryApp;
	const { data: tryAppInfo } = useGetTryAppInfo(isTryApp ? tryAppId : "");
	const webAppInfo = useWebAppStore((s) => s.appInfo);
	const appInfo = isTryApp ? tryAppInfo : webAppInfo;
	const appMeta = useWebAppStore((s) => s.appMeta);
	const { data: tryAppParams } = useGetTryAppParams(isTryApp ? tryAppId : "");
	const webAppParams = useWebAppStore((s) => s.appParams);
	const appParams = isTryApp ? tryAppParams : webAppParams;
	const appId = useMemo(() => {
		return isTryApp ? tryAppId : appInfo?.app_id;
	}, [
		appInfo,
		isTryApp,
		tryAppId
	]);
	const embeddedConversationId = useWebAppStore((s) => s.embeddedConversationId);
	const embeddedUserId = useWebAppStore((s) => s.embeddedUserId);
	const [userId, setUserId] = useState();
	const [conversationId, setConversationId] = useState();
	useEffect(() => {
		if (isTryApp) return;
		getProcessedSystemVariablesFromUrlParams().then(({ user_id, conversation_id }) => {
			setUserId(user_id);
			setConversationId(conversation_id);
		});
	}, []);
	useEffect(() => {
		setUserId(embeddedUserId || void 0);
	}, [embeddedUserId]);
	useEffect(() => {
		setConversationId(embeddedConversationId || void 0);
	}, [embeddedConversationId]);
	useEffect(() => {
		if (isTryApp) return;
		const setLanguageFromParams = async () => {
			const localeParam = new URLSearchParams(window.location.search).get("locale");
			const localeFromSysVar = (await getProcessedSystemVariablesFromUrlParams()).locale;
			if (localeParam) await changeLanguage(localeParam);
			else if (localeFromSysVar) await changeLanguage(localeFromSysVar);
			else if (appInfo?.site?.default_language) await changeLanguage(appInfo.site?.default_language);
		};
		setLanguageFromParams();
	}, [appInfo]);
	const [conversationIdInfo, setConversationIdInfo] = useLocalStorageState(CONVERSATION_ID_INFO, { defaultValue: {} });
	const removeConversationIdInfo = useCallback((appId) => {
		setConversationIdInfo((prev) => {
			const newInfo = { ...prev };
			delete newInfo[appId];
			return newInfo;
		});
	}, [setConversationIdInfo]);
	const allowResetChat = !conversationId;
	const currentConversationId = useMemo(() => conversationIdInfo?.[appId || ""]?.[userId || "DEFAULT"] || conversationId || "", [
		appId,
		conversationIdInfo,
		userId,
		conversationId
	]);
	const handleConversationIdInfoChange = useCallback((changeConversationId) => {
		if (appId) {
			let prevValue = conversationIdInfo?.[appId || ""];
			if (typeof prevValue === "string") prevValue = {};
			setConversationIdInfo({
				...conversationIdInfo,
				[appId || ""]: {
					...prevValue,
					[userId || "DEFAULT"]: changeConversationId
				}
			});
		}
	}, [
		appId,
		conversationIdInfo,
		setConversationIdInfo,
		userId
	]);
	const [newConversationId, setNewConversationId] = useState("");
	const chatShouldReloadKey = useMemo(() => {
		if (currentConversationId === newConversationId) return "";
		return currentConversationId;
	}, [currentConversationId, newConversationId]);
	const { data: appPinnedConversationData } = useShareConversations({
		appSourceType,
		appId,
		pinned: true,
		limit: 100
	});
	const { data: appConversationData, isLoading: appConversationDataLoading } = useShareConversations({
		appSourceType,
		appId,
		pinned: false,
		limit: 100
	});
	const { data: appChatListData, isLoading: appChatListDataLoading } = useShareChatList({
		conversationId: chatShouldReloadKey,
		appSourceType,
		appId
	});
	const invalidateShareConversations = useInvalidateShareConversations();
	const [clearChatList, setClearChatList] = useState(false);
	const [isResponding, setIsResponding] = useState(false);
	const appPrevChatList = useMemo(() => currentConversationId && appChatListData?.data.length ? buildChatItemTree(getFormattedChatList(appChatListData.data)) : [], [appChatListData, currentConversationId]);
	const [showNewConversationItemInList, setShowNewConversationItemInList] = useState(false);
	const pinnedConversationList = useMemo(() => {
		return appPinnedConversationData?.data || [];
	}, [appPinnedConversationData]);
	const { t } = useTranslation();
	const newConversationInputsRef = useRef({});
	const [newConversationInputs, setNewConversationInputs] = useState({});
	const [initInputs, setInitInputs] = useState({});
	const [initUserVariables, setInitUserVariables] = useState({});
	const handleNewConversationInputsChange = useCallback((newInputs) => {
		newConversationInputsRef.current = newInputs;
		setNewConversationInputs(newInputs);
	}, []);
	const inputsForms = useMemo(() => {
		return (appParams?.user_input_form || []).filter((item) => !item.external_data_tool).map((item) => {
			if (item.paragraph) {
				let value = initInputs[item.paragraph.variable];
				if (value && item.paragraph.max_length && value.length > item.paragraph.max_length) value = value.slice(0, item.paragraph.max_length);
				return {
					...item.paragraph,
					default: value || item.default || item.paragraph.default,
					type: "paragraph"
				};
			}
			if (item.number) {
				const convertedNumber = Number(initInputs[item.number.variable]);
				return {
					...item.number,
					default: convertedNumber || item.default || item.number.default,
					type: "number"
				};
			}
			if (item.checkbox) {
				const preset = initInputs[item.checkbox.variable] === true;
				return {
					...item.checkbox,
					default: preset || item.default || item.checkbox.default,
					type: "checkbox"
				};
			}
			if (item.select) {
				const isInputInOptions = item.select.options.includes(initInputs[item.select.variable]);
				return {
					...item.select,
					default: (isInputInOptions ? initInputs[item.select.variable] : void 0) || item.select.default,
					type: "select"
				};
			}
			if (item["file-list"]) return {
				...item["file-list"],
				type: "file-list"
			};
			if (item.file) return {
				...item.file,
				type: "file"
			};
			if (item.json_object) return {
				...item.json_object,
				type: "json_object"
			};
			let value = initInputs[item["text-input"].variable];
			if (value && item["text-input"].max_length && value.length > item["text-input"].max_length) value = value.slice(0, item["text-input"].max_length);
			return {
				...item["text-input"],
				default: value || item.default || item["text-input"].default,
				type: "text-input"
			};
		});
	}, [initInputs, appParams]);
	const allInputsHidden = useMemo(() => {
		return inputsForms.length > 0 && inputsForms.every((item) => item.hide === true);
	}, [inputsForms]);
	useEffect(() => {
		(async () => {
			if (isTryApp) return;
			const inputs = await getProcessedInputsFromUrlParams();
			const userVariables = await getProcessedUserVariablesFromUrlParams();
			setInitInputs(inputs);
			setInitUserVariables(userVariables);
		})();
	}, []);
	useEffect(() => {
		const conversationInputs = {};
		inputsForms.forEach((item) => {
			conversationInputs[item.variable] = item.default || null;
		});
		handleNewConversationInputsChange(conversationInputs);
	}, [handleNewConversationInputsChange, inputsForms]);
	const { data: newConversation } = useShareConversationName({
		conversationId: newConversationId,
		appSourceType,
		appId
	}, {
		refetchOnWindowFocus: false,
		enabled: !isTryApp
	});
	const [originConversationList, setOriginConversationList] = useState([]);
	useEffect(() => {
		if (appConversationData?.data && !appConversationDataLoading) setOriginConversationList(appConversationData?.data);
	}, [appConversationData, appConversationDataLoading]);
	const conversationList = useMemo(() => {
		const data = originConversationList.slice();
		if (showNewConversationItemInList && data[0]?.id !== "") data.unshift({
			id: "",
			name: t("chat.newChatDefaultName", { ns: "share" }),
			inputs: {},
			introduction: ""
		});
		return data;
	}, [
		originConversationList,
		showNewConversationItemInList,
		t
	]);
	useEffect(() => {
		if (newConversation) setOriginConversationList(produce((draft) => {
			const index = draft.findIndex((item) => item.id === newConversation.id);
			if (index > -1) draft[index] = newConversation;
			else draft.unshift(newConversation);
		}));
	}, [newConversation]);
	const currentConversationItem = useMemo(() => {
		let conversationItem = conversationList.find((item) => item.id === currentConversationId);
		if (!conversationItem && pinnedConversationList.length) conversationItem = pinnedConversationList.find((item) => item.id === currentConversationId);
		return conversationItem;
	}, [
		conversationList,
		currentConversationId,
		pinnedConversationList
	]);
	const currentConversationLatestInputs = useMemo(() => {
		if (!currentConversationId || !appChatListData?.data.length) return newConversationInputsRef.current || {};
		return appChatListData.data.slice().pop().inputs || {};
	}, [appChatListData, currentConversationId]);
	const [currentConversationInputs, setCurrentConversationInputs] = useState(currentConversationLatestInputs || {});
	useEffect(() => {
		if (currentConversationItem && !isTryApp) setCurrentConversationInputs(currentConversationLatestInputs || {});
	}, [currentConversationItem, currentConversationLatestInputs]);
	const { notify } = useToastContext();
	const checkInputsRequired = useCallback((silent) => {
		if (allInputsHidden) return true;
		let hasEmptyInput = "";
		let fileIsUploading = false;
		const requiredVars = inputsForms.filter(({ required, type }) => required && type !== InputVarType.checkbox);
		if (requiredVars.length) requiredVars.forEach(({ variable, label, type }) => {
			if (hasEmptyInput) return;
			if (fileIsUploading) return;
			if (!newConversationInputsRef.current[variable] && !silent) hasEmptyInput = label;
			if ((type === InputVarType.singleFile || type === InputVarType.multiFiles) && newConversationInputsRef.current[variable] && !silent) {
				const files = newConversationInputsRef.current[variable];
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
	}, [
		inputsForms,
		notify,
		t,
		allInputsHidden
	]);
	const handleStartChat = useCallback((callback) => {
		if (checkInputsRequired()) {
			setShowNewConversationItemInList(true);
			callback?.();
		}
	}, [setShowNewConversationItemInList, checkInputsRequired]);
	const currentChatInstanceRef = useRef({ handleStop: noop });
	const handleChangeConversation = useCallback((conversationId) => {
		currentChatInstanceRef.current.handleStop();
		setNewConversationId("");
		handleConversationIdInfoChange(conversationId);
		if (conversationId) setClearChatList(false);
	}, [handleConversationIdInfoChange, setClearChatList]);
	const handleNewConversation = useCallback(async () => {
		if (isTryApp) {
			setClearChatList(true);
			return;
		}
		currentChatInstanceRef.current.handleStop();
		setShowNewConversationItemInList(true);
		handleChangeConversation("");
		handleNewConversationInputsChange(await getProcessedInputsFromUrlParams());
		setClearChatList(true);
	}, [
		isTryApp,
		setShowNewConversationItemInList,
		handleNewConversationInputsChange,
		setClearChatList
	]);
	const handleNewConversationCompleted = useCallback((newConversationId) => {
		setNewConversationId(newConversationId);
		handleConversationIdInfoChange(newConversationId);
		setShowNewConversationItemInList(false);
		invalidateShareConversations();
	}, [handleConversationIdInfoChange, invalidateShareConversations]);
	const handleFeedback = useCallback(async (messageId, feedback) => {
		await updateFeedback({
			url: `/messages/${messageId}/feedbacks`,
			body: {
				rating: feedback.rating,
				content: feedback.content
			}
		}, appSourceType, appId);
		notify({
			type: "success",
			message: t("api.success", { ns: "common" })
		});
	}, [
		appSourceType,
		appId,
		t,
		notify
	]);
	return {
		appSourceType,
		isInstalledApp,
		allowResetChat,
		appId,
		currentConversationId,
		currentConversationItem,
		removeConversationIdInfo,
		handleConversationIdInfoChange,
		appData: appInfo,
		appParams: appParams || {},
		appMeta,
		appPinnedConversationData,
		appConversationData,
		appConversationDataLoading,
		appChatListData,
		appChatListDataLoading,
		appPrevChatList,
		pinnedConversationList,
		conversationList,
		setShowNewConversationItemInList,
		newConversationInputs,
		newConversationInputsRef,
		handleNewConversationInputsChange,
		inputsForms,
		handleNewConversation,
		handleStartChat,
		handleChangeConversation,
		handleNewConversationCompleted,
		newConversationId,
		chatShouldReloadKey,
		handleFeedback,
		currentChatInstanceRef,
		clearChatList,
		setClearChatList,
		isResponding,
		setIsResponding,
		currentConversationInputs,
		setCurrentConversationInputs,
		allInputsHidden,
		initUserVariables
	};
};
//#endregion
//#region app/components/app/configuration/base/feature-panel/index.tsx
var FeaturePanel = ({ className, headerIcon, title, headerRight, hasHeaderBottomBorder, noBodySpacing, children }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("rounded-xl border-l-[0.5px] border-t-[0.5px] border-effects-highlight bg-background-section-burn pb-3", noBodySpacing && "pb-0", className),
		children: [/* @__PURE__ */ jsx("div", {
			className: cn("px-3 pt-2", hasHeaderBottomBorder && "border-b border-divider-subtle"),
			"data-testid": "feature-panel-header",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex h-8 items-center justify-between",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 items-center space-x-1",
					children: [!!headerIcon && /* @__PURE__ */ jsx("div", {
						className: "flex h-6 w-6 items-center justify-center",
						children: headerIcon
					}), /* @__PURE__ */ jsx("div", {
						className: "system-sm-semibold text-text-secondary",
						children: title
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-2",
					children: !!headerRight && /* @__PURE__ */ jsx("div", { children: headerRight })
				})]
			})
		}), !!children && /* @__PURE__ */ jsx("div", {
			className: cn(!noBodySpacing && "mt-1 px-3"),
			"data-testid": "feature-panel-body",
			children
		})]
	});
};
var feature_panel_default = React$1.memo(FeaturePanel);
//#endregion
//#region app/components/app/configuration/base/operation-btn/index.tsx
var iconMap = {
	add: /* @__PURE__ */ jsx(p, { className: "h-3.5 w-3.5" }),
	edit: /* @__PURE__ */ jsx(Ct, { className: "h-3.5 w-3.5" })
};
var OperationBtn = ({ className, type, actionName, onClick = noop }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-7 cursor-pointer select-none items-center space-x-1 rounded-md px-3 text-text-secondary hover:bg-state-base-hover", className),
		onClick,
		children: [/* @__PURE__ */ jsx("div", { children: iconMap[type] }), /* @__PURE__ */ jsx("div", {
			className: "text-xs font-medium",
			children: actionName || t(`operation.${type}`, { ns: "common" })
		})]
	});
};
var operation_btn_default = React$1.memo(OperationBtn);
//#endregion
//#region app/components/app/configuration/config-var/select-var-type.tsx
var SelectItem = ({ text, type, value, Icon, onClick }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-8 cursor-pointer items-center rounded-lg px-3 hover:bg-state-base-hover",
		onClick: () => onClick(value),
		children: [Icon ? /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-text-secondary" }) : /* @__PURE__ */ jsx(input_var_type_icon_default, {
			type,
			className: "h-4 w-4 text-text-secondary"
		}), /* @__PURE__ */ jsx("div", {
			className: "ml-2 truncate text-xs text-text-primary",
			children: text
		})]
	});
};
var SelectVarType = ({ onChange }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const handleChange = (value) => {
		onChange(value);
		setOpen(false);
	};
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-end",
		offset: {
			mainAxis: 8,
			crossAxis: -2
		},
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen((v) => !v),
			children: /* @__PURE__ */ jsx(operation_btn_default, { type: "add" })
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			style: { zIndex: 1e3 },
			children: /* @__PURE__ */ jsxs("div", {
				className: "min-w-[192px] rounded-lg border border-components-panel-border bg-components-panel-bg-blur shadow-lg backdrop-blur-sm",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "p-1",
						children: [
							/* @__PURE__ */ jsx(SelectItem, {
								type: InputVarType.textInput,
								value: "string",
								text: t("variableConfig.string", { ns: "appDebug" }),
								onClick: handleChange
							}),
							/* @__PURE__ */ jsx(SelectItem, {
								type: InputVarType.paragraph,
								value: "paragraph",
								text: t("variableConfig.paragraph", { ns: "appDebug" }),
								onClick: handleChange
							}),
							/* @__PURE__ */ jsx(SelectItem, {
								type: InputVarType.select,
								value: "select",
								text: t("variableConfig.select", { ns: "appDebug" }),
								onClick: handleChange
							}),
							/* @__PURE__ */ jsx(SelectItem, {
								type: InputVarType.number,
								value: "number",
								text: t("variableConfig.number", { ns: "appDebug" }),
								onClick: handleChange
							}),
							/* @__PURE__ */ jsx(SelectItem, {
								type: InputVarType.checkbox,
								value: "checkbox",
								text: t("variableConfig.checkbox", { ns: "appDebug" }),
								onClick: handleChange
							})
						]
					}),
					/* @__PURE__ */ jsx("div", { className: "h-px border-t border-components-panel-border" }),
					/* @__PURE__ */ jsx("div", {
						className: "p-1",
						children: /* @__PURE__ */ jsx(SelectItem, {
							Icon: Icon$37,
							value: "api",
							text: t("variableConfig.apiBasedVar", { ns: "appDebug" }),
							onClick: handleChange
						})
					})
				]
			})
		})]
	});
};
var select_var_type_default = React$1.memo(SelectVarType);
//#endregion
//#region app/components/app/configuration/config-var/input-type-icon.tsx
var IconMap = (type, className) => {
	const classNames = `w-3.5 h-3.5 ${className}`;
	return {
		string: /* @__PURE__ */ jsx(input_var_type_icon_default, {
			type: InputVarType.textInput,
			className: classNames
		}),
		paragraph: /* @__PURE__ */ jsx(input_var_type_icon_default, {
			type: InputVarType.paragraph,
			className: classNames
		}),
		select: /* @__PURE__ */ jsx(input_var_type_icon_default, {
			type: InputVarType.select,
			className: classNames
		}),
		number: /* @__PURE__ */ jsx(input_var_type_icon_default, {
			type: InputVarType.number,
			className: classNames
		}),
		api: /* @__PURE__ */ jsx(Icon$37, { className: classNames })
	}[type];
};
var InputTypeIcon = ({ type, className }) => {
	return IconMap(type, className);
};
var input_type_icon_default = React$1.memo(InputTypeIcon);
//#endregion
//#region app/components/app/configuration/config-var/var-item.tsx
var VarItem$1 = ({ className, readonly, name, label, required, type, onEdit, onRemove, canDrag }) => {
	const [isDeleting, setIsDeleting] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("group relative mb-1 flex h-[34px] w-full items-center rounded-lg border-[0.5px] border-components-panel-border-subtle bg-components-panel-on-panel-item-bg pl-2.5 pr-3 shadow-xs last-of-type:mb-0 hover:bg-components-panel-on-panel-item-bg-hover hover:shadow-sm", isDeleting && "border-state-destructive-border hover:bg-state-destructive-hover", readonly && "cursor-not-allowed", className),
		children: [
			/* @__PURE__ */ jsx(Icon$27, { className: cn("mr-1 h-4 w-4 shrink-0 text-text-accent", canDrag && "group-hover:opacity-0") }),
			canDrag && /* @__PURE__ */ jsx(Ek, { className: "absolute left-3 top-3 hidden h-3 w-3 cursor-pointer text-text-tertiary group-hover:block" }),
			/* @__PURE__ */ jsx("div", {
				className: "flex w-0 grow items-center",
				children: /* @__PURE__ */ jsxs("div", {
					className: "truncate",
					title: `${name} · ${label}`,
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "system-sm-medium text-text-secondary",
							children: name
						}),
						/* @__PURE__ */ jsx("span", {
							className: "system-xs-regular px-1 text-text-quaternary",
							children: "·"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "system-xs-medium text-text-tertiary",
							children: label
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "shrink-0",
				children: [/* @__PURE__ */ jsxs("div", {
					className: cn("flex items-center", !readonly && "group-hover:hidden"),
					children: [
						required && /* @__PURE__ */ jsx(badge_default, { text: "required" }),
						/* @__PURE__ */ jsx("span", {
							className: "system-xs-regular pl-2 pr-1 text-text-tertiary",
							children: type
						}),
						/* @__PURE__ */ jsx(input_type_icon_default, {
							type,
							className: "text-text-tertiary"
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: cn("hidden items-center justify-end rounded-lg", !readonly && "group-hover:flex"),
					children: [/* @__PURE__ */ jsx("div", {
						className: "mr-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-md hover:bg-black/5",
						onClick: onEdit,
						children: /* @__PURE__ */ jsx(Ct, { className: "h-4 w-4 text-text-tertiary" })
					}), /* @__PURE__ */ jsx("div", {
						"data-testid": "var-item-delete-btn",
						className: "flex h-6 w-6 cursor-pointer items-center  justify-center text-text-tertiary hover:text-text-destructive",
						onClick: onRemove,
						onMouseOver: () => setIsDeleting(true),
						onMouseLeave: () => setIsDeleting(false),
						children: /* @__PURE__ */ jsx(M6, { className: "h-4 w-4" })
					})]
				})]
			})
		]
	});
};
//#endregion
//#region app/components/app/configuration/config-var/index.tsx
var import_dist = require_dist();
var ADD_EXTERNAL_DATA_TOOL = "ADD_EXTERNAL_DATA_TOOL";
var BASIC_INPUT_TYPES = new Set([
	"string",
	"paragraph",
	"select",
	"number",
	"checkbox"
]);
var toInputVar = (item) => ({
	...item,
	label: item.name,
	variable: item.key,
	type: item.type === "string" ? InputVarType.textInput : item.type,
	required: item.required ?? false
});
var buildPromptVariableFromInput = (payload) => {
	const { variable, label, type, ...rest } = payload;
	const nextType = type === InputVarType.textInput ? "string" : type;
	const nextItem = {
		...rest,
		type: nextType,
		key: variable,
		name: label
	};
	if (payload.type !== InputVarType.select) delete nextItem.options;
	return nextItem;
};
var getDuplicateError = (list) => {
	if (hasDuplicateStr(list.map((item) => item.key))) return {
		errorMsgKey: "varKeyError.keyAlreadyExists",
		typeName: "variableConfig.varName"
	};
	if (hasDuplicateStr(list.map((item) => item.name))) return {
		errorMsgKey: "varKeyError.keyAlreadyExists",
		typeName: "variableConfig.labelName"
	};
	return null;
};
var ConfigVar = ({ promptVariables, readonly, onPromptVariablesChange }) => {
	const { t } = useTranslation();
	const { mode, dataSets } = useContext$1(DebugConfigurationContext);
	const { eventEmitter } = useEventEmitterContextContext();
	const hasVar = promptVariables.length > 0;
	const [currIndex, setCurrIndex] = useState(-1);
	const currItem = currIndex !== -1 ? promptVariables[currIndex] : null;
	const currItemToEdit = useMemo(() => {
		if (!currItem) return null;
		return toInputVar(currItem);
	}, [currItem]);
	const updatePromptVariableItem = useCallback((payload) => {
		const newPromptVariables = produce(promptVariables, (draft) => {
			draft[currIndex] = buildPromptVariableFromInput(payload);
		});
		const duplicateError = getDuplicateError(newPromptVariables);
		if (duplicateError) {
			Toast.notify({
				type: "error",
				message: t(duplicateError.errorMsgKey, {
					ns: "appDebug",
					key: t(duplicateError.typeName, { ns: "appDebug" })
				})
			});
			return false;
		}
		onPromptVariablesChange?.(newPromptVariables);
		return true;
	}, [
		currIndex,
		onPromptVariablesChange,
		promptVariables,
		t
	]);
	const { setShowExternalDataToolModal } = useModalContext();
	const handleOpenExternalDataToolModal = useCallback(({ key, type, index, name, config, icon, icon_background }, oldPromptVariables) => {
		setShowExternalDataToolModal({
			payload: {
				type,
				variable: key,
				label: name,
				config,
				icon,
				icon_background
			},
			onSaveCallback: (newExternalDataTool) => {
				if (!newExternalDataTool) return;
				const newPromptVariables = oldPromptVariables.map((item, i) => {
					if (i === index) return {
						key: newExternalDataTool.variable,
						name: newExternalDataTool.label,
						enabled: newExternalDataTool.enabled,
						type: newExternalDataTool.type,
						config: newExternalDataTool.config,
						required: item.required,
						icon: newExternalDataTool.icon,
						icon_background: newExternalDataTool.icon_background
					};
					return item;
				});
				onPromptVariablesChange?.(newPromptVariables);
			},
			onCancelCallback: () => {
				if (!key) onPromptVariablesChange?.(promptVariables.filter((_, i) => i !== index));
			},
			onValidateBeforeSaveCallback: (newExternalDataTool) => {
				for (let i = 0; i < promptVariables.length; i++) if (promptVariables[i].key === newExternalDataTool.variable && i !== index) {
					Toast.notify({
						type: "error",
						message: t("varKeyError.keyAlreadyExists", {
							ns: "appDebug",
							key: promptVariables[i].key
						})
					});
					return false;
				}
				return true;
			}
		});
	}, [
		onPromptVariablesChange,
		promptVariables,
		setShowExternalDataToolModal,
		t
	]);
	const handleAddVar = useCallback((type) => {
		const newVar = getNewVar("", type);
		const newPromptVariables = [...promptVariables, newVar];
		onPromptVariablesChange?.(newPromptVariables);
		if (type === "api") handleOpenExternalDataToolModal({
			type,
			key: newVar.key,
			name: newVar.name,
			index: promptVariables.length
		}, newPromptVariables);
	}, [
		handleOpenExternalDataToolModal,
		onPromptVariablesChange,
		promptVariables
	]);
	eventEmitter?.useSubscription((v) => {
		if (v.type === "ADD_EXTERNAL_DATA_TOOL") {
			const payload = v.payload;
			onPromptVariablesChange?.([...promptVariables, {
				key: payload.variable,
				name: payload.label,
				enabled: payload.enabled,
				type: payload.type,
				config: payload.config,
				required: true,
				icon: payload.icon,
				icon_background: payload.icon_background
			}]);
		}
	});
	const [isShowDeleteContextVarModal, { setTrue: showDeleteContextVarModal, setFalse: hideDeleteContextVarModal }] = useBoolean(false);
	const [removeIndex, setRemoveIndex] = useState(null);
	const didRemoveVar = useCallback((index) => {
		onPromptVariablesChange?.(promptVariables.filter((_, i) => i !== index));
	}, [onPromptVariablesChange, promptVariables]);
	const handleRemoveVar = useCallback((index) => {
		const removeVar = promptVariables[index];
		if (mode === AppModeEnum.COMPLETION && dataSets.length > 0 && removeVar.is_context_var) {
			showDeleteContextVarModal();
			setRemoveIndex(index);
			return;
		}
		didRemoveVar(index);
	}, [
		dataSets.length,
		didRemoveVar,
		mode,
		promptVariables,
		showDeleteContextVarModal
	]);
	const [isShowEditModal, { setTrue: showEditModal, setFalse: hideEditModal }] = useBoolean(false);
	const handleConfig = useCallback(({ key, type, index, name, config, icon, icon_background }) => {
		setCurrIndex(index);
		if (!BASIC_INPUT_TYPES.has(type)) {
			handleOpenExternalDataToolModal({
				key,
				type,
				index,
				name,
				config,
				icon,
				icon_background
			}, promptVariables);
			return;
		}
		showEditModal();
	}, [
		handleOpenExternalDataToolModal,
		promptVariables,
		showEditModal
	]);
	const promptVariablesWithIds = useMemo(() => promptVariables.map((item) => {
		return {
			id: item.key,
			variable: { ...item }
		};
	}), [promptVariables]);
	const canDrag = !readonly && promptVariables.length > 1;
	return /* @__PURE__ */ jsxs(feature_panel_default, {
		className: "mt-2",
		title: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center",
			children: [/* @__PURE__ */ jsx("div", {
				className: "mr-1",
				children: t("variableTitle", { ns: "appDebug" })
			}), !readonly && /* @__PURE__ */ jsx(tooltip_default, { popupContent: /* @__PURE__ */ jsx("div", {
				className: "w-[180px]",
				children: t("variableTip", { ns: "appDebug" })
			}) })]
		}),
		headerRight: !readonly ? /* @__PURE__ */ jsx(select_var_type_default, { onChange: handleAddVar }) : null,
		noBodySpacing: true,
		children: [
			!hasVar && /* @__PURE__ */ jsx("div", {
				className: "mt-1 px-3 pb-3",
				children: /* @__PURE__ */ jsx("div", {
					className: "pb-1 pt-2 text-xs text-text-tertiary",
					children: t("notSetVar", { ns: "appDebug" })
				})
			}),
			hasVar && /* @__PURE__ */ jsx("div", {
				className: cn("mt-1 grid px-3 pb-3"),
				children: /* @__PURE__ */ jsx(import_dist.ReactSortable, {
					className: cn("grid-col-1 grid space-y-1", readonly && "grid-cols-2 gap-1 space-y-0"),
					list: promptVariablesWithIds,
					setList: (list) => {
						onPromptVariablesChange?.(list.map((item) => item.variable));
					},
					handle: ".handle",
					ghostClass: "opacity-50",
					animation: 150,
					children: promptVariablesWithIds.map((item, index) => {
						const { key, name, type, required, config, icon, icon_background } = item.variable;
						return /* @__PURE__ */ jsx(VarItem$1, {
							className: cn(canDrag && "handle"),
							readonly,
							name: key,
							label: name,
							required: !!required,
							type,
							onEdit: () => handleConfig({
								type,
								key,
								index,
								name,
								config,
								icon,
								icon_background
							}),
							onRemove: () => handleRemoveVar(index),
							canDrag
						}, key);
					})
				})
			}),
			isShowEditModal && /* @__PURE__ */ jsx(config_modal_default, {
				payload: currItemToEdit,
				isShow: isShowEditModal,
				onClose: hideEditModal,
				onConfirm: (item) => {
					if (!updatePromptVariableItem(item)) return;
					hideEditModal();
				},
				varKeys: promptVariables.map((v) => v.key)
			}),
			isShowDeleteContextVarModal && /* @__PURE__ */ jsx(confirm_default, {
				isShow: isShowDeleteContextVarModal,
				title: t("feature.dataSet.queryVariable.deleteContextVarTitle", {
					ns: "appDebug",
					varName: promptVariables[removeIndex]?.name
				}),
				content: t("feature.dataSet.queryVariable.deleteContextVarTip", { ns: "appDebug" }),
				onConfirm: () => {
					didRemoveVar(removeIndex);
					hideDeleteContextVarModal();
				},
				onCancel: hideDeleteContextVarModal
			})
		]
	});
};
var config_var_default = React$1.memo(ConfigVar);
//#endregion
//#region app/components/app/configuration/config-prompt/message-type-selector.tsx
var allTypes = [
	PromptRole.system,
	PromptRole.user,
	PromptRole.assistant
];
var MessageTypeSelector = ({ value, onChange }) => {
	const [showOption, { setFalse: setHide, toggle: toggleShow }] = useBoolean(false);
	const ref = React$1.useRef(null);
	useClickAway(() => {
		setHide();
	}, ref);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative left-[-8px]",
		ref,
		children: [/* @__PURE__ */ jsxs("div", {
			onClick: toggleShow,
			className: cn(showOption && "bg-indigo-100", "flex h-7 cursor-pointer items-center space-x-0.5 rounded-lg pl-1.5 pr-1 text-indigo-800"),
			children: [/* @__PURE__ */ jsx("div", {
				className: "text-sm font-semibold uppercase",
				children: value
			}), /* @__PURE__ */ jsx(Icon$33, { className: "h-3 w-3 " })]
		}), showOption && /* @__PURE__ */ jsx("div", {
			className: "absolute top-[30px] z-10 rounded-lg border border-components-panel-border bg-components-panel-bg p-1 shadow-lg",
			children: allTypes.map((type) => /* @__PURE__ */ jsx("div", {
				onClick: () => {
					setHide();
					onChange(type);
				},
				className: "flex h-9 min-w-[44px] cursor-pointer items-center rounded-lg px-3 text-sm font-medium uppercase text-text-secondary hover:bg-state-base-hover",
				children: type
			}, type))
		})]
	});
};
var message_type_selector_default = React$1.memo(MessageTypeSelector);
var style_module_default$1 = {
	gradientBorder: "_gradientBorder_hnjxs_1",
	warningBorder: "_warningBorder_hnjxs_17",
	optionWrap: "_optionWrap_hnjxs_22",
	boxHeader: "_boxHeader_hnjxs_26"
};
//#endregion
//#region app/components/app/configuration/config-prompt/advanced-prompt-input.tsx
var import_copy_to_clipboard = /* @__PURE__ */ __toESM(require_copy_to_clipboard(), 1);
var AdvancedPromptInput = ({ type, isChatMode, value, onChange, onTypeChange, canDelete, onDelete, promptVariables, isContextMissing, onHideContextMissingTip, noResize }) => {
	const { t } = useTranslation();
	const { eventEmitter } = useEventEmitterContextContext();
	const { mode, hasSetBlockStatus, modelConfig, setModelConfig, conversationHistoriesRole, showHistoryModal, dataSets, showSelectDataSet, externalDataToolsConfig } = useContext$1(DebugConfigurationContext);
	const { notify } = useToastContext();
	const { setShowExternalDataToolModal } = useModalContext();
	const handleOpenExternalDataToolModal = () => {
		setShowExternalDataToolModal({
			payload: {},
			onSaveCallback: (newExternalDataTool) => {
				if (!newExternalDataTool) return;
				eventEmitter?.emit({
					type: ADD_EXTERNAL_DATA_TOOL,
					payload: newExternalDataTool
				});
				eventEmitter?.emit({
					type: INSERT_VARIABLE_VALUE_BLOCK_COMMAND,
					payload: newExternalDataTool.variable
				});
			},
			onValidateBeforeSaveCallback: (newExternalDataTool) => {
				for (let i = 0; i < promptVariables.length; i++) if (promptVariables[i].key === newExternalDataTool.variable) {
					notify({
						type: "error",
						message: t("varKeyError.keyAlreadyExists", {
							ns: "appDebug",
							key: promptVariables[i].key
						})
					});
					return false;
				}
				return true;
			}
		});
	};
	const isChatApp = mode !== AppModeEnum.COMPLETION;
	const [isCopied, setIsCopied] = React$1.useState(false);
	const promptVariablesObj = (() => {
		const obj = {};
		promptVariables.forEach((item) => {
			obj[item.key] = true;
		});
		return obj;
	})();
	const [newPromptVariables, setNewPromptVariables] = React$1.useState(promptVariables);
	const [isShowConfirmAddVar, { setTrue: showConfirmAddVar, setFalse: hideConfirmAddVar }] = useBoolean(false);
	const handlePromptChange = (newValue) => {
		if (value === newValue) return;
		onChange(newValue);
	};
	const handleBlur = () => {
		const newPromptVariables = getVars(value).filter((key) => !(key in promptVariablesObj) && !externalDataToolsConfig.find((item) => item.variable === key)).map((key) => getNewVar(key, ""));
		if (newPromptVariables.length > 0) {
			setNewPromptVariables(newPromptVariables);
			showConfirmAddVar();
		}
	};
	const handleAutoAdd = (isAdd) => {
		return () => {
			if (isAdd) setModelConfig(produce(modelConfig, (draft) => {
				draft.configs.prompt_variables = [...draft.configs.prompt_variables, ...newPromptVariables];
			}));
			hideConfirmAddVar();
		};
	};
	const minHeight = 102;
	const [editorHeight, setEditorHeight] = React$1.useState(isChatMode ? 200 : 508);
	const contextMissing = /* @__PURE__ */ jsxs("div", {
		className: "flex h-11 items-center justify-between rounded-tl-xl rounded-tr-xl pb-1 pl-4 pr-3 pt-2",
		style: { background: "linear-gradient(180deg, #FEF0C7 0%, rgba(254, 240, 199, 0) 100%)" },
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center pr-2",
			children: [/* @__PURE__ */ jsx(ft$1, { className: "mr-1 h-4 w-4 text-[#F79009]" }), /* @__PURE__ */ jsx("div", {
				className: "text-[13px] font-medium leading-[18px] text-[#DC6803]",
				children: t("promptMode.contextMissing", { ns: "appDebug" })
			})]
		}), /* @__PURE__ */ jsx(Button, {
			size: "small",
			variant: "secondary-accent",
			onClick: onHideContextMissingTip,
			children: t("operation.ok", { ns: "common" })
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: `rounded-xl bg-gradient-to-r from-components-input-border-active-prompt-1 to-components-input-border-active-prompt-2 p-0.5 shadow-xs ${!isContextMissing ? "" : style_module_default$1.warningBorder}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "rounded-xl bg-background-default",
			children: [isContextMissing ? contextMissing : /* @__PURE__ */ jsxs("div", {
				className: cn(style_module_default$1.boxHeader, "flex h-11 items-center justify-between rounded-tl-xl rounded-tr-xl bg-background-default pb-1 pl-4 pr-3 pt-2 hover:shadow-xs"),
				children: [isChatMode ? /* @__PURE__ */ jsx(message_type_selector_default, {
					value: type,
					onChange: onTypeChange
				}) : /* @__PURE__ */ jsxs("div", {
					className: "flex items-center space-x-1",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-sm font-semibold uppercase text-indigo-800",
						children: t("pageTitle.line1", { ns: "appDebug" })
					}), /* @__PURE__ */ jsx(tooltip_default, { popupContent: /* @__PURE__ */ jsx("div", {
						className: "w-[180px]",
						children: t("promptTip", { ns: "appDebug" })
					}) })]
				}), /* @__PURE__ */ jsxs("div", {
					className: cn(style_module_default$1.optionWrap, "items-center space-x-1"),
					children: [canDelete && /* @__PURE__ */ jsx(M6, {
						onClick: onDelete,
						className: "h-6 w-6 cursor-pointer p-1 text-text-tertiary"
					}), !isCopied ? /* @__PURE__ */ jsx(Icon$31, {
						className: "h-6 w-6 cursor-pointer p-1 text-text-tertiary",
						onClick: () => {
							(0, import_copy_to_clipboard.default)(value);
							setIsCopied(true);
						}
					}) : /* @__PURE__ */ jsx(Icon$32, { className: "h-6 w-6 p-1 text-text-tertiary" })]
				})]
			}), /* @__PURE__ */ jsx(prompt_editor_height_resize_wrap_default, {
				className: "min-h-[102px] overflow-y-auto px-4 text-sm text-text-secondary",
				height: editorHeight,
				minHeight,
				onHeightChange: setEditorHeight,
				footer: /* @__PURE__ */ jsx("div", {
					className: "flex pb-2 pl-4",
					children: /* @__PURE__ */ jsx("div", {
						className: "h-[18px] rounded-md bg-divider-regular px-1 text-xs leading-[18px] text-text-tertiary",
						children: value.length
					})
				}),
				hideResize: noResize,
				children: /* @__PURE__ */ jsx(PromptEditor, {
					className: "min-h-[84px]",
					value,
					contextBlock: {
						show: true,
						selectable: !hasSetBlockStatus.context,
						datasets: dataSets.map((item) => ({
							id: item.id,
							name: item.name,
							type: item.data_source_type
						})),
						onAddContext: showSelectDataSet
					},
					variableBlock: {
						show: true,
						variables: modelConfig.configs.prompt_variables.filter((item) => item.type !== "api" && item.key && item.key.trim() && item.name && item.name.trim()).map((item) => ({
							name: item.name,
							value: item.key
						}))
					},
					externalToolBlock: {
						externalTools: modelConfig.configs.prompt_variables.filter((item) => item.type === "api").map((item) => ({
							name: item.name,
							variableName: item.key,
							icon: item.icon,
							icon_background: item.icon_background
						})),
						onAddExternalTool: handleOpenExternalDataToolModal
					},
					historyBlock: {
						show: !isChatMode && isChatApp,
						selectable: !hasSetBlockStatus.history,
						history: {
							user: conversationHistoriesRole?.user_prefix,
							assistant: conversationHistoriesRole?.assistant_prefix
						},
						onEditRole: showHistoryModal
					},
					queryBlock: {
						show: !isChatMode && isChatApp,
						selectable: !hasSetBlockStatus.query
					},
					onChange: handlePromptChange,
					onBlur: handleBlur
				})
			})]
		}), isShowConfirmAddVar && /* @__PURE__ */ jsx(confirm_add_var_default, {
			varNameArr: newPromptVariables.map((v) => v.name),
			onConfirm: handleAutoAdd(true),
			onCancel: handleAutoAdd(false),
			onHide: hideConfirmAddVar
		})]
	});
};
var advanced_prompt_input_default = React$1.memo(AdvancedPromptInput);
//#endregion
//#region app/components/app/configuration/config/automatic/automatic-btn.tsx
var AutomaticBtn = ({ onClick }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Button, {
		variant: "secondary-accent",
		size: "small",
		onClick,
		children: [/* @__PURE__ */ jsx(WA, { className: "mr-1 h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", {
			className: "",
			children: t("operation.automatic", { ns: "appDebug" })
		})]
	});
};
var automatic_btn_default = React$1.memo(AutomaticBtn);
//#endregion
//#region app/components/app/configuration/config-prompt/simple-prompt-input.tsx
var Prompt$1 = ({ mode, promptTemplate, promptVariables, readonly = false, onChange, noTitle, editorHeight: initEditorHeight, noResize }) => {
	const { t } = useTranslation();
	const isMobile = useBreakpoints() === MediaType.mobile;
	const { features, setFeatures } = useFeaturesStore().getState();
	const { eventEmitter } = useEventEmitterContextContext();
	const { appId, modelConfig, dataSets, setModelConfig, setPrevPromptConfig, setIntroduction, hasSetBlockStatus, showSelectDataSet, externalDataToolsConfig } = useContext$1(DebugConfigurationContext);
	const { notify } = useToastContext();
	const { setShowExternalDataToolModal } = useModalContext();
	const handleOpenExternalDataToolModal = () => {
		setShowExternalDataToolModal({
			payload: {},
			onSaveCallback: (newExternalDataTool) => {
				if (!newExternalDataTool) return;
				eventEmitter?.emit({
					type: ADD_EXTERNAL_DATA_TOOL,
					payload: newExternalDataTool
				});
				eventEmitter?.emit({
					type: INSERT_VARIABLE_VALUE_BLOCK_COMMAND,
					payload: newExternalDataTool.variable
				});
			},
			onValidateBeforeSaveCallback: (newExternalDataTool) => {
				for (let i = 0; i < promptVariables.length; i++) if (promptVariables[i].key === newExternalDataTool.variable) {
					notify({
						type: "error",
						message: t("varKeyError.keyAlreadyExists", {
							ns: "appDebug",
							key: promptVariables[i].key
						})
					});
					return false;
				}
				return true;
			}
		});
	};
	const [newPromptVariables, setNewPromptVariables] = React$1.useState(promptVariables);
	const [newTemplates, setNewTemplates] = React$1.useState("");
	const [isShowConfirmAddVar, { setTrue: showConfirmAddVar, setFalse: hideConfirmAddVar }] = useBoolean(false);
	const handleChange = (newTemplates, keys) => {
		const newPromptVariables = keys.filter((key) => {
			if (externalDataToolsConfig.find((item) => item.variable === key)) return false;
			const existingVar = promptVariables.find((item) => item.key === key);
			if (!existingVar) return true;
			return !existingVar.name || !existingVar.name.trim() || !existingVar.key || !existingVar.key.trim();
		}).map((key) => getNewVar(key, ""));
		if (newPromptVariables.length > 0) {
			setNewPromptVariables(newPromptVariables);
			setNewTemplates(newTemplates);
			showConfirmAddVar();
			return;
		}
		onChange?.(newTemplates, []);
	};
	const handleAutoAdd = (isAdd) => {
		return () => {
			onChange?.(newTemplates, isAdd ? newPromptVariables : []);
			hideConfirmAddVar();
		};
	};
	const [showAutomatic, { setTrue: showAutomaticTrue, setFalse: showAutomaticFalse }] = useBoolean(false);
	const handleAutomaticRes = (res) => {
		eventEmitter?.emit({
			type: PROMPT_EDITOR_UPDATE_VALUE_BY_EVENT_EMITTER,
			payload: res.modified
		});
		setModelConfig(produce(modelConfig, (draft) => {
			draft.configs.prompt_template = res.modified;
			draft.configs.prompt_variables = (res.variables || []).map((key) => ({
				key,
				name: key,
				type: "string",
				required: true
			}));
		}));
		setPrevPromptConfig(modelConfig.configs);
		if (mode !== AppModeEnum.COMPLETION) {
			setIntroduction(res.opening_statement || "");
			setFeatures(produce(features, (draft) => {
				draft.opening = {
					...draft.opening,
					enabled: !!res.opening_statement,
					opening_statement: res.opening_statement
				};
			}));
		}
		showAutomaticFalse();
	};
	const minHeight = initEditorHeight || 228;
	const [editorHeight, setEditorHeight] = useState(minHeight);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative rounded-xl bg-gradient-to-r from-components-input-border-active-prompt-1 to-components-input-border-active-prompt-2 p-0.5 shadow-xs"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl bg-background-section-burn",
				children: [!noTitle && /* @__PURE__ */ jsxs("div", {
					className: "flex h-11 items-center justify-between pl-3 pr-2.5",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center space-x-1",
						children: [/* @__PURE__ */ jsx("div", {
							className: "h2 text-text-secondary system-sm-semibold-uppercase",
							children: mode !== AppModeEnum.COMPLETION ? t("chatSubTitle", { ns: "appDebug" }) : t("completionSubTitle", { ns: "appDebug" })
						}), !readonly && /* @__PURE__ */ jsx(tooltip_default, { popupContent: /* @__PURE__ */ jsx("div", {
							className: "w-[180px]",
							children: t("promptTip", { ns: "appDebug" })
						}) })]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex items-center",
						children: !readonly && !isMobile && /* @__PURE__ */ jsx(automatic_btn_default, { onClick: showAutomaticTrue })
					})]
				}), /* @__PURE__ */ jsx(prompt_editor_height_resize_wrap_default, {
					className: "min-h-[228px] rounded-t-xl bg-background-default px-4 pt-2 text-sm text-text-secondary",
					height: editorHeight,
					minHeight,
					onHeightChange: setEditorHeight,
					hideResize: noResize,
					footer: /* @__PURE__ */ jsx("div", {
						className: "flex rounded-b-xl bg-background-default pb-2 pl-4",
						children: /* @__PURE__ */ jsx("div", {
							className: "h-[18px] rounded-md bg-components-badge-bg-gray-soft px-1 text-xs leading-[18px] text-text-tertiary",
							children: promptTemplate.length
						})
					}),
					children: /* @__PURE__ */ jsx(PromptEditor, {
						className: "min-h-[210px]",
						compact: true,
						value: promptTemplate,
						contextBlock: {
							show: false,
							selectable: !hasSetBlockStatus.context,
							datasets: dataSets.map((item) => ({
								id: item.id,
								name: item.name,
								type: item.data_source_type
							})),
							onAddContext: showSelectDataSet
						},
						variableBlock: {
							show: true,
							variables: modelConfig.configs.prompt_variables.filter((item) => item.type !== "api" && item.key && item.key.trim() && item.name && item.name.trim()).map((item) => ({
								name: item.name,
								value: item.key
							}))
						},
						externalToolBlock: {
							show: true,
							externalTools: modelConfig.configs.prompt_variables.filter((item) => item.type === "api").map((item) => ({
								name: item.name,
								variableName: item.key,
								icon: item.icon,
								icon_background: item.icon_background
							})),
							onAddExternalTool: handleOpenExternalDataToolModal
						},
						historyBlock: {
							show: false,
							selectable: false,
							history: {
								user: "",
								assistant: ""
							},
							onEditRole: noop
						},
						queryBlock: {
							show: false,
							selectable: !hasSetBlockStatus.query
						},
						onChange: (value) => {
							if (handleChange) handleChange(value, []);
						},
						onBlur: () => {
							handleChange(promptTemplate, getVars(promptTemplate));
						},
						editable: !readonly
					})
				})]
			}),
			isShowConfirmAddVar && /* @__PURE__ */ jsx(confirm_add_var_default, {
				varNameArr: newPromptVariables.map((v) => v.name),
				onConfirm: handleAutoAdd(true),
				onCancel: handleAutoAdd(false),
				onHide: hideConfirmAddVar
			}),
			showAutomatic && /* @__PURE__ */ jsx(get_automatic_res_default, {
				flowId: appId,
				mode,
				isShow: showAutomatic,
				onClose: showAutomaticFalse,
				onFinished: handleAutomaticRes,
				currentPrompt: promptTemplate,
				isBasicMode: true
			})
		]
	});
};
var simple_prompt_input_default = React$1.memo(Prompt$1);
//#endregion
//#region app/components/app/configuration/config-prompt/index.tsx
var Prompt = ({ mode, promptTemplate, promptVariables, noTitle, gradientBorder, readonly = false, editorHeight, noResize, onChange }) => {
	const { t } = useTranslation();
	const { isAdvancedMode, currentAdvancedPrompt, setCurrentAdvancedPrompt, modelModeType, dataSets, hasSetBlockStatus } = useContext$1(DebugConfigurationContext);
	const handleMessageTypeChange = (index, role) => {
		setCurrentAdvancedPrompt(produce(currentAdvancedPrompt, (draft) => {
			draft[index].role = role;
		}));
	};
	const handleValueChange = (value, index) => {
		if (modelModeType === ModelModeType.chat) setCurrentAdvancedPrompt(produce(currentAdvancedPrompt, (draft) => {
			draft[index].text = value;
		}), true);
		else setCurrentAdvancedPrompt({
			...currentAdvancedPrompt,
			text: value
		}, true);
	};
	const handleAddMessage = () => {
		const currentAdvancedPromptList = currentAdvancedPrompt;
		if (currentAdvancedPromptList.length === 0) {
			setCurrentAdvancedPrompt([{
				role: PromptRole.system,
				text: ""
			}]);
			return;
		}
		const appendMessage = {
			role: currentAdvancedPromptList[currentAdvancedPromptList.length - 1]?.role === PromptRole.user ? PromptRole.assistant : PromptRole.user,
			text: ""
		};
		setCurrentAdvancedPrompt([...currentAdvancedPromptList, appendMessage]);
	};
	const handlePromptDelete = (index) => {
		setCurrentAdvancedPrompt(produce(currentAdvancedPrompt, (draft) => {
			draft.splice(index, 1);
		}));
	};
	const isContextMissing = dataSets.length > 0 && !hasSetBlockStatus.context;
	const [isHideContextMissTip, setIsHideContextMissTip] = React$1.useState(false);
	if (!isAdvancedMode) return /* @__PURE__ */ jsx(simple_prompt_input_default, {
		mode,
		promptTemplate,
		promptVariables,
		readonly,
		onChange,
		noTitle,
		gradientBorder,
		editorHeight,
		noResize
	});
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
		className: "space-y-3",
		children: modelModeType === ModelModeType.chat ? currentAdvancedPrompt.map((item, index) => /* @__PURE__ */ jsx(advanced_prompt_input_default, {
			isChatMode: true,
			type: item.role,
			value: item.text,
			onTypeChange: (type) => handleMessageTypeChange(index, type),
			canDelete: currentAdvancedPrompt.length > 1,
			onDelete: () => handlePromptDelete(index),
			onChange: (value) => handleValueChange(value, index),
			promptVariables,
			isContextMissing: isContextMissing && !isHideContextMissTip,
			onHideContextMissingTip: () => setIsHideContextMissTip(true),
			noResize
		}, index)) : /* @__PURE__ */ jsx(advanced_prompt_input_default, {
			type: currentAdvancedPrompt.role,
			isChatMode: false,
			value: currentAdvancedPrompt.text,
			onTypeChange: (type) => handleMessageTypeChange(0, type),
			canDelete: false,
			onDelete: () => handlePromptDelete(0),
			onChange: (value) => handleValueChange(value),
			promptVariables,
			isContextMissing: isContextMissing && !isHideContextMissTip,
			onHideContextMissingTip: () => setIsHideContextMissTip(true),
			noResize
		})
	}), modelModeType === ModelModeType.chat && currentAdvancedPrompt.length < 10 && /* @__PURE__ */ jsxs(Button, {
		onClick: handleAddMessage,
		className: "mt-3 w-full",
		children: [/* @__PURE__ */ jsx(p, { className: "mr-2 h-4 w-4" }), /* @__PURE__ */ jsx("div", { children: t("promptMode.operation.addMessage", { ns: "appDebug" }) })]
	})] });
};
var config_prompt_default = React$1.memo(Prompt);
//#endregion
//#region app/components/app/configuration/config-prompt/conversation-history/history-panel.tsx
var HistoryPanel = ({ showWarning, onShowEditModal }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(feature_panel_default, {
		className: "mt-2",
		title: /* @__PURE__ */ jsx("div", {
			className: "flex items-center gap-2",
			children: /* @__PURE__ */ jsx("div", { children: t("feature.conversationHistory.title", { ns: "appDebug" }) })
		}),
		headerIcon: /* @__PURE__ */ jsx("div", {
			className: "rounded-md p-1 shadow-xs",
			children: /* @__PURE__ */ jsx(Icon$28, { className: "h-4 w-4 text-[#DD2590]" })
		}),
		headerRight: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "text-xs text-text-tertiary",
					children: t("feature.conversationHistory.description", { ns: "appDebug" })
				}),
				/* @__PURE__ */ jsx("div", { className: "ml-3 h-[14px] w-[1px] bg-divider-regular" }),
				/* @__PURE__ */ jsx(operation_btn_default, {
					type: "edit",
					onClick: onShowEditModal
				})
			]
		}),
		noBodySpacing: true,
		children: showWarning && /* @__PURE__ */ jsx("div", {
			className: "flex justify-between rounded-b-xl bg-background-section-burn px-3 py-2 text-xs text-text-secondary",
			children: /* @__PURE__ */ jsx("div", { children: t("feature.conversationHistory.tip", { ns: "appDebug" }) })
		})
	});
};
var history_panel_default = React$1.memo(HistoryPanel);
//#endregion
//#region app/components/app/configuration/config-vision/param-config-content.tsx
var MIN = 1;
var MAX = 6;
var ParamConfigContent = () => {
	const { t } = useTranslation();
	const file = useFeatures((s) => s.features.file);
	const featuresStore = useFeaturesStore();
	const handleChange = useCallback((data) => {
		const { features, setFeatures } = featuresStore.getState();
		setFeatures(produce(features, (draft) => {
			draft.file = {
				...draft.file,
				allowed_file_upload_methods: data.allowed_file_upload_methods,
				number_limits: data.number_limits,
				image: {
					enabled: data.enabled,
					detail: data.image?.detail,
					transfer_methods: data.allowed_file_upload_methods,
					number_limits: data.number_limits
				}
			};
		}));
	}, [featuresStore]);
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
		className: "text-base font-semibold leading-6 text-text-primary",
		children: t("vision.visionSettings.title", { ns: "appDebug" })
	}), /* @__PURE__ */ jsxs("div", {
		className: "space-y-6 pt-3",
		children: [
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-2 flex items-center  space-x-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-[13px] font-semibold leading-[18px] text-text-secondary",
					children: t("vision.visionSettings.resolution", { ns: "appDebug" })
				}), /* @__PURE__ */ jsx(tooltip_default, { popupContent: /* @__PURE__ */ jsx("div", {
					className: "w-[180px]",
					children: t("vision.visionSettings.resolutionTooltip", { ns: "appDebug" }).split("\n").map((item) => /* @__PURE__ */ jsx("div", { children: item }, item))
				}) })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ jsx(option_card_default$1, {
					className: "grow",
					title: t("vision.visionSettings.high", { ns: "appDebug" }),
					selected: file?.image?.detail === Resolution.high,
					onSelect: () => handleChange({
						...file,
						image: { detail: Resolution.high }
					})
				}), /* @__PURE__ */ jsx(option_card_default$1, {
					className: "grow",
					title: t("vision.visionSettings.low", { ns: "appDebug" }),
					selected: file?.image?.detail === Resolution.low,
					onSelect: () => handleChange({
						...file,
						image: { detail: Resolution.low }
					})
				})]
			})] }),
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
				className: "mb-2 text-[13px] font-semibold leading-[18px] text-text-secondary",
				children: t("vision.visionSettings.uploadMethod", { ns: "appDebug" })
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ jsx(option_card_default$1, {
						className: "grow",
						title: t("vision.visionSettings.both", { ns: "appDebug" }),
						selected: !!file?.allowed_file_upload_methods?.includes(TransferMethod.local_file) && !!file?.allowed_file_upload_methods?.includes(TransferMethod.remote_url),
						onSelect: () => handleChange({
							...file,
							allowed_file_upload_methods: [TransferMethod.local_file, TransferMethod.remote_url]
						})
					}),
					/* @__PURE__ */ jsx(option_card_default$1, {
						className: "grow",
						title: t("vision.visionSettings.localUpload", { ns: "appDebug" }),
						selected: !!file?.allowed_file_upload_methods?.includes(TransferMethod.local_file) && file?.allowed_file_upload_methods?.length === 1,
						onSelect: () => handleChange({
							...file,
							allowed_file_upload_methods: [TransferMethod.local_file]
						})
					}),
					/* @__PURE__ */ jsx(option_card_default$1, {
						className: "grow",
						title: t("vision.visionSettings.url", { ns: "appDebug" }),
						selected: !!file?.allowed_file_upload_methods?.includes(TransferMethod.remote_url) && file?.allowed_file_upload_methods?.length === 1,
						onSelect: () => handleChange({
							...file,
							allowed_file_upload_methods: [TransferMethod.remote_url]
						})
					})
				]
			})] }),
			/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ParamItem, {
				id: "upload_limit",
				className: "",
				name: t("vision.visionSettings.uploadLimit", { ns: "appDebug" }),
				noTooltip: true,
				default: 2,
				step: 1,
				min: MIN,
				max: MAX,
				value: file?.number_limits || 3,
				enable: true,
				onChange: (_key, value) => {
					if (!value) return;
					handleChange({
						...file,
						number_limits: value
					});
				}
			}) })
		]
	})] });
};
var param_config_content_default = React$1.memo(ParamConfigContent);
//#endregion
//#region app/components/app/configuration/config-vision/param-config.tsx
var ParamsConfig$1 = () => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-end",
		offset: { mainAxis: 4 },
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen((v) => !v),
			children: /* @__PURE__ */ jsxs(Button, {
				variant: "ghost",
				size: "small",
				className: cn(""),
				children: [/* @__PURE__ */ jsx(Iv, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("div", {
					className: "ml-1",
					children: t("voice.settings", { ns: "appDebug" })
				})]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			style: { zIndex: 50 },
			children: /* @__PURE__ */ jsx("div", {
				className: "w-80 space-y-3 rounded-lg border-[0.5px] border-components-panel-border bg-components-panel-bg p-4 shadow-lg sm:w-[412px]",
				children: /* @__PURE__ */ jsx(param_config_content_default, {})
			})
		})]
	});
};
var param_config_default = memo(ParamsConfig$1);
//#endregion
//#region app/components/app/configuration/config-vision/index.tsx
var ConfigVision = () => {
	const { t } = useTranslation();
	const { isShowVisionConfig, isAllowVideoUpload, readonly } = useContext$1(DebugConfigurationContext);
	const file = useFeatures((s) => s.features.file);
	const featuresStore = useFeaturesStore();
	const isImageEnabled = file?.allowed_file_types?.includes(SupportUploadFileTypes.image) ?? false;
	const handleChange = useCallback((value) => {
		const { features, setFeatures } = featuresStore.getState();
		setFeatures(produce(features, (draft) => {
			if (value) draft.file.allowed_file_types = Array.from(new Set([
				...draft.file?.allowed_file_types || [],
				SupportUploadFileTypes.image,
				...isAllowVideoUpload ? [SupportUploadFileTypes.video] : []
			]));
			else draft.file.allowed_file_types = draft.file.allowed_file_types?.filter((type) => type !== SupportUploadFileTypes.image && (isAllowVideoUpload ? type !== SupportUploadFileTypes.video : true));
			if (draft.file) {
				draft.file.enabled = (draft.file.allowed_file_types?.length ?? 0) > 0;
				draft.file.image = {
					...draft.file.image,
					enabled: value
				};
			}
		}));
	}, [featuresStore, isAllowVideoUpload]);
	if (!isShowVisionConfig || readonly && !isImageEnabled) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-2 flex items-center gap-2 rounded-xl border-l-[0.5px] border-t-[0.5px] border-effects-highlight bg-background-section-burn p-2",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "shrink-0 p-1",
				children: /* @__PURE__ */ jsx("div", {
					className: "rounded-lg border-[0.5px] border-divider-subtle bg-util-colors-indigo-indigo-600 p-1 shadow-xs",
					children: /* @__PURE__ */ jsx(Icon$38, { className: "h-4 w-4 text-text-primary-on-surface" })
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex grow items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "system-sm-semibold mr-1 text-text-secondary",
					children: t("vision.name", { ns: "appDebug" })
				}), /* @__PURE__ */ jsx(tooltip_default, { popupContent: /* @__PURE__ */ jsx("div", {
					className: "w-[180px]",
					children: t("vision.description", { ns: "appDebug" })
				}) })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex shrink-0 items-center",
				children: readonly ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
					className: "mr-2 flex items-center gap-0.5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-xs-medium-uppercase text-text-tertiary",
						children: t("vision.visionSettings.resolution", { ns: "appDebug" })
					}), /* @__PURE__ */ jsx(tooltip_default, { popupContent: /* @__PURE__ */ jsx("div", {
						className: "w-[180px]",
						children: t("vision.visionSettings.resolutionTooltip", { ns: "appDebug" }).split("\n").map((item) => /* @__PURE__ */ jsx("div", { children: item }, item))
					}) })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ jsx(option_card_default$1, {
						title: t("vision.visionSettings.high", { ns: "appDebug" }),
						selected: file?.image?.detail === Resolution.high,
						onSelect: noop,
						className: cn("cursor-not-allowed rounded-lg px-3  hover:shadow-none", file?.image?.detail !== Resolution.high && "hover:border-components-option-card-option-border")
					}), /* @__PURE__ */ jsx(option_card_default$1, {
						title: t("vision.visionSettings.low", { ns: "appDebug" }),
						selected: file?.image?.detail === Resolution.low,
						onSelect: noop,
						className: cn("cursor-not-allowed rounded-lg px-3  hover:shadow-none", file?.image?.detail !== Resolution.low && "hover:border-components-option-card-option-border")
					})]
				})] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
					/* @__PURE__ */ jsx(param_config_default, {}),
					/* @__PURE__ */ jsx("div", { className: "ml-1 mr-3 h-3.5 w-[1px] bg-divider-regular" }),
					/* @__PURE__ */ jsx(switch_default, {
						value: isImageEnabled,
						onChange: handleChange,
						size: "md"
					})
				] })
			})
		]
	});
};
var config_vision_default = React$1.memo(ConfigVision);
//#endregion
//#region app/components/app/configuration/debug/types.ts
var APP_CHAT_WITH_MULTIPLE_MODEL = "APP_CHAT_WITH_MULTIPLE_MODEL";
var APP_CHAT_WITH_MULTIPLE_MODEL_RESTART = "APP_CHAT_WITH_MULTIPLE_MODEL_RESTART";
var ORCHESTRATE_CHANGED = "ORCHESTRATE_CHANGED";
//#endregion
//#region app/components/app/configuration/debug/hooks.tsx
var useDebugWithSingleOrMultipleModel = (appId) => {
	const localeDebugWithSingleOrMultipleModelConfigs = localStorage.getItem("app-debug-with-single-or-multiple-models");
	const debugWithSingleOrMultipleModelConfigs = useRef({});
	if (localeDebugWithSingleOrMultipleModelConfigs) try {
		debugWithSingleOrMultipleModelConfigs.current = JSON.parse(localeDebugWithSingleOrMultipleModelConfigs) || {};
	} catch (e) {
		console.error(e);
	}
	const [debugWithMultipleModel, setDebugWithMultipleModel] = useState(debugWithSingleOrMultipleModelConfigs.current[appId]?.multiple || false);
	const [multipleModelConfigs, setMultipleModelConfigs] = useState(debugWithSingleOrMultipleModelConfigs.current[appId]?.configs || []);
	return {
		debugWithMultipleModel,
		multipleModelConfigs,
		handleMultipleModelConfigsChange: useCallback((multiple, modelConfigs) => {
			const value = {
				multiple,
				configs: modelConfigs
			};
			debugWithSingleOrMultipleModelConfigs.current[appId] = value;
			localStorage.setItem("app-debug-with-single-or-multiple-models", JSON.stringify(debugWithSingleOrMultipleModelConfigs.current));
			setDebugWithMultipleModel(value.multiple);
			setMultipleModelConfigs(value.configs);
		}, [appId])
	};
};
var useConfigFromDebugContext = () => {
	const { isAdvancedMode, modelConfig, appId, promptMode, speechToTextConfig, introduction, suggestedQuestions: openingSuggestedQuestions, suggestedQuestionsAfterAnswerConfig, citationConfig, moderationConfig, chatPromptConfig, completionPromptConfig, dataSets, datasetConfigs, visionConfig, annotationConfig, textToSpeechConfig, isFunctionCall } = useDebugConfigurationContext();
	const postDatasets = dataSets.map(({ id }) => ({ dataset: {
		enabled: true,
		id
	} }));
	const contextVar = modelConfig.configs.prompt_variables.find((item) => item.is_context_var)?.key;
	return {
		pre_prompt: !isAdvancedMode ? modelConfig.configs.prompt_template : "",
		prompt_type: promptMode,
		chat_prompt_config: isAdvancedMode ? chatPromptConfig : cloneDeep(DEFAULT_CHAT_PROMPT_CONFIG),
		completion_prompt_config: isAdvancedMode ? completionPromptConfig : cloneDeep(DEFAULT_COMPLETION_PROMPT_CONFIG),
		user_input_form: promptVariablesToUserInputsForm(modelConfig.configs.prompt_variables),
		dataset_query_variable: contextVar || "",
		opening_statement: introduction,
		more_like_this: modelConfig.more_like_this ?? { enabled: false },
		suggested_questions: openingSuggestedQuestions,
		suggested_questions_after_answer: suggestedQuestionsAfterAnswerConfig ?? { enabled: false },
		text_to_speech: textToSpeechConfig,
		speech_to_text: speechToTextConfig,
		retriever_resource: citationConfig,
		sensitive_word_avoidance: moderationConfig,
		agent_mode: {
			...modelConfig.agentConfig,
			strategy: isFunctionCall ? AgentStrategy.functionCall : AgentStrategy.react
		},
		dataset_configs: {
			...datasetConfigs,
			datasets: { datasets: [...postDatasets] }
		},
		file_upload: {
			image: visionConfig,
			allowed_file_upload_methods: visionConfig.transfer_methods ?? [],
			allowed_file_types: [SupportUploadFileTypes.image],
			max_length: visionConfig.number_limits ?? 0,
			number_limits: visionConfig.number_limits
		},
		annotation_reply: annotationConfig,
		system_parameters: modelConfig.system_parameters,
		supportAnnotation: true,
		appId,
		supportCitationHitInfo: true
	};
};
var useFormattingChangedDispatcher = () => {
	const { eventEmitter } = useEventEmitterContextContext();
	return useCallback(() => {
		eventEmitter?.emit({ type: ORCHESTRATE_CHANGED });
	}, [eventEmitter]);
};
var useFormattingChangedSubscription = (chatList) => {
	const { formattingChanged, setFormattingChanged } = useDebugConfigurationContext();
	const { eventEmitter } = useEventEmitterContextContext();
	eventEmitter?.useSubscription((v) => {
		if (v.type === "ORCHESTRATE_CHANGED") {
			if (chatList.some((item) => item.isAnswer) && !formattingChanged) setFormattingChanged(true);
		}
	});
};
//#endregion
//#region app/components/app/configuration/dataset-config/card-item/index.tsx
var Item = ({ config, onSave, onRemove, readonly = false, editable = true }) => {
	const isMobile = useBreakpoints() === MediaType.mobile;
	const [showSettingsModal, setShowSettingsModal] = useState(false);
	const { formatIndexingTechniqueAndMethod } = useKnowledge();
	const { t } = useTranslation();
	const handleSave = (newDataset) => {
		onSave(newDataset);
		setShowSettingsModal(false);
	};
	const [isDeleting, setIsDeleting] = useState(false);
	const iconInfo = config.icon_info || {
		icon: "📙",
		icon_type: "emoji",
		icon_background: "#FFF4ED",
		icon_url: ""
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("group relative mb-1 flex h-10 w-full cursor-pointer items-center justify-between rounded-lg border-[0.5px] border-components-panel-border-subtle bg-components-panel-on-panel-item-bg px-2 last-of-type:mb-0 hover:bg-components-panel-on-panel-item-bg-hover", isDeleting && "border-state-destructive-border hover:bg-state-destructive-hover", readonly && "cursor-not-allowed"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex w-0 grow items-center space-x-1.5",
				children: [/* @__PURE__ */ jsx(app_icon_default, {
					size: "tiny",
					iconType: iconInfo.icon_type,
					icon: iconInfo.icon,
					background: iconInfo.icon_type === "image" ? void 0 : iconInfo.icon_background,
					imageUrl: iconInfo.icon_type === "image" ? iconInfo.icon_url : void 0
				}), /* @__PURE__ */ jsx("div", {
					className: "system-sm-medium w-0 grow truncate text-text-secondary",
					title: config.name,
					children: config.name
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "ml-2 hidden shrink-0 items-center space-x-1 group-hover:flex",
				children: [editable && !readonly && /* @__PURE__ */ jsx(ActionButton, {
					onClick: (e) => {
						e.stopPropagation();
						setShowSettingsModal(true);
					},
					children: /* @__PURE__ */ jsx(Ct, { className: "h-4 w-4 shrink-0 text-text-tertiary" })
				}), !readonly && /* @__PURE__ */ jsx(ActionButton, {
					onClick: () => onRemove(config.id),
					state: isDeleting ? ActionButtonState.Destructive : ActionButtonState.Default,
					onMouseEnter: () => setIsDeleting(true),
					onMouseLeave: () => setIsDeleting(false),
					children: /* @__PURE__ */ jsx(M6, { className: cn("h-4 w-4 shrink-0 text-text-tertiary", isDeleting && "text-text-destructive") })
				})]
			}),
			!!config.indexing_technique && /* @__PURE__ */ jsx(badge_default, {
				className: "shrink-0 group-hover:hidden",
				text: formatIndexingTechniqueAndMethod(config.indexing_technique, config.retrieval_model_dict?.search_method)
			}),
			config.provider === "external" && /* @__PURE__ */ jsx(badge_default, {
				className: "shrink-0 group-hover:hidden",
				text: t("externalTag", { ns: "dataset" })
			}),
			/* @__PURE__ */ jsx(Drawer, {
				isOpen: showSettingsModal,
				onClose: () => setShowSettingsModal(false),
				footer: null,
				mask: isMobile,
				panelClassName: "mt-16 mx-2 sm:mr-2 mb-3 !p-0 !max-w-[640px] rounded-xl",
				children: showSettingsModal && /* @__PURE__ */ jsx(SettingsModal, {
					currentDataset: config,
					onCancel: () => setShowSettingsModal(false),
					onSave: handleSave
				})
			})
		]
	});
};
//#endregion
//#region app/components/app/configuration/dataset-config/context-var/var-picker.tsx
var VarItem = ({ item }) => /* @__PURE__ */ jsxs("div", {
	className: "flex h-[18px] items-center space-x-1 rounded bg-[#EFF8FF] px-1",
	children: [/* @__PURE__ */ jsx(input_type_icon_default, {
		type: item.type,
		className: "text-[#1570EF]"
	}), /* @__PURE__ */ jsxs("div", {
		className: "flex text-xs font-medium text-[#1570EF]",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "opacity-60",
				children: "{{"
			}),
			/* @__PURE__ */ jsx("span", {
				className: "max-w-[150px] truncate",
				children: item.value
			}),
			/* @__PURE__ */ jsx("span", {
				className: "opacity-60",
				children: "}}"
			})
		]
	})]
});
var VarPicker = ({ triggerClassName, className, value, options, onChange, notSelectedVarTip }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const currItem = options.find((item) => item.value === value);
	const notSetVar = !currItem;
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-end",
		offset: { mainAxis: 8 },
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			className: cn(triggerClassName),
			onClick: () => setOpen((v) => !v),
			children: /* @__PURE__ */ jsxs("div", {
				className: cn(className, notSetVar ? "border-[#FEDF89] bg-[#FFFCF5] text-[#DC6803]" : " border-components-button-secondary-border text-text-accent hover:bg-components-button-secondary-bg", open ? "bg-components-button-secondary-bg" : "bg-transparent", `
          flex h-8 cursor-pointer items-center justify-center space-x-1 rounded-lg border  px-2 text-[13px]
          font-medium  shadow-xs
          `),
				children: [/* @__PURE__ */ jsx("div", { children: value ? /* @__PURE__ */ jsx(VarItem, { item: currItem }) : /* @__PURE__ */ jsx("div", { children: notSelectedVarTip || t("feature.dataSet.queryVariable.choosePlaceholder", { ns: "appDebug" }) }) }), /* @__PURE__ */ jsx(ForwardRef$1, { className: cn(open && "rotate-180 text-text-tertiary", "h-3.5 w-3.5") })]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			style: { zIndex: 1e3 },
			children: options.length > 0 ? /* @__PURE__ */ jsx("div", {
				className: "max-h-[50vh] w-[240px] overflow-y-auto rounded-lg  border border-components-panel-border bg-components-panel-bg p-1 shadow-lg",
				children: options.map(({ name, value, type }, index) => /* @__PURE__ */ jsx("div", {
					className: "flex cursor-pointer rounded-lg px-3 py-1 hover:bg-state-base-hover",
					onClick: () => {
						onChange(value);
						setOpen(false);
					},
					children: /* @__PURE__ */ jsx(VarItem, { item: {
						name,
						value,
						type
					} })
				}, index))
			}) : /* @__PURE__ */ jsxs("div", {
				className: "w-[240px] rounded-lg border border-components-panel-border bg-components-panel-bg p-6 shadow-lg",
				children: [/* @__PURE__ */ jsx("div", {
					className: "mb-1 text-sm font-medium text-text-secondary",
					children: t("feature.dataSet.queryVariable.noVar", { ns: "appDebug" })
				}), /* @__PURE__ */ jsx("div", {
					className: "text-xs leading-normal text-text-tertiary",
					children: t("feature.dataSet.queryVariable.noVarTip", { ns: "appDebug" })
				})]
			})
		})]
	});
};
var var_picker_default = React$1.memo(VarPicker);
//#endregion
//#region app/components/app/configuration/dataset-config/context-var/index.tsx
var ContextVar = (props) => {
	const { t } = useTranslation();
	const { value, options } = props;
	return /* @__PURE__ */ jsxs("div", {
		className: cn(!options.find((item) => item.value === value) ? "rounded-bl-xl rounded-br-xl border-[#FEF0C7] bg-[#FEF0C7]" : "border-components-panel-border-subtle", "flex h-12 items-center justify-between border-t px-3 "),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 items-center space-x-1",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "p-1",
					children: /* @__PURE__ */ jsx(Icon$27, { className: "h-4 w-4 text-text-accent" })
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mr-1 text-sm font-medium text-text-secondary",
					children: t("feature.dataSet.queryVariable.title", { ns: "appDebug" })
				}),
				/* @__PURE__ */ jsx(tooltip_default, { popupContent: /* @__PURE__ */ jsx("div", {
					className: "w-[180px]",
					children: t("feature.dataSet.queryVariable.tip", { ns: "appDebug" })
				}) })
			]
		}), /* @__PURE__ */ jsx(var_picker_default, { ...props })]
	});
};
var context_var_default = React$1.memo(ContextVar);
//#endregion
//#region app/components/app/configuration/dataset-config/params-config/index.tsx
var ParamsConfig = ({ disabled, selectedDatasets }) => {
	const { t } = useTranslation();
	const { datasetConfigs, setDatasetConfigs, rerankSettingModalOpen, setRerankSettingModalOpen } = useContext$1(DebugConfigurationContext);
	const [tempDataSetConfigs, setTempDataSetConfigs] = useState(datasetConfigs);
	useEffect(() => {
		setTempDataSetConfigs(datasetConfigs);
	}, [datasetConfigs]);
	const { modelList: rerankModelList, currentModel: rerankDefaultModel, currentProvider: rerankDefaultProvider } = useModelListAndDefaultModelAndCurrentProviderAndModel(ModelTypeEnum.rerank);
	const { currentModel: isCurrentRerankModelValid } = useCurrentProviderAndModel(rerankModelList, {
		provider: tempDataSetConfigs.reranking_model?.reranking_provider_name ?? "",
		model: tempDataSetConfigs.reranking_model?.reranking_model_name ?? ""
	});
	const isValid = () => {
		let errMsg = "";
		if (tempDataSetConfigs.retrieval_model === RETRIEVE_TYPE.multiWay) {
			if (tempDataSetConfigs.reranking_enable && tempDataSetConfigs.reranking_mode === RerankingModeEnum.RerankingModel && !isCurrentRerankModelValid) errMsg = t("datasetConfig.rerankModelRequired", { ns: "appDebug" });
		}
		if (errMsg) toast.error(errMsg);
		return !errMsg;
	};
	const handleSave = () => {
		if (!isValid()) return;
		setDatasetConfigs(tempDataSetConfigs);
		setRerankSettingModalOpen(false);
	};
	const handleSetTempDataSetConfigs = (newDatasetConfigs) => {
		const { datasets, retrieval_model, score_threshold_enabled, ...restConfigs } = newDatasetConfigs;
		const retrievalConfig = getMultipleRetrievalConfig({
			top_k: restConfigs.top_k,
			score_threshold: restConfigs.score_threshold,
			reranking_model: restConfigs.reranking_model && {
				provider: restConfigs.reranking_model.reranking_provider_name,
				model: restConfigs.reranking_model.reranking_model_name
			},
			reranking_mode: restConfigs.reranking_mode,
			weights: restConfigs.weights,
			reranking_enable: restConfigs.reranking_enable
		}, selectedDatasets, selectedDatasets, {
			provider: rerankDefaultProvider?.provider,
			model: rerankDefaultModel?.model
		});
		setTempDataSetConfigs({
			...retrievalConfig,
			reranking_model: {
				reranking_provider_name: retrievalConfig.reranking_model?.provider || "",
				reranking_model_name: retrievalConfig.reranking_model?.model || ""
			},
			retrieval_model,
			score_threshold_enabled,
			datasets
		});
	};
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs(Button, {
		variant: "ghost",
		size: "small",
		className: cn("h-7", rerankSettingModalOpen && "bg-components-button-ghost-bg-hover"),
		onClick: () => {
			setRerankSettingModalOpen(true);
		},
		disabled,
		children: [/* @__PURE__ */ jsx(AD, { className: "mr-1 h-3.5 w-3.5" }), t("retrievalSettings", { ns: "dataset" })]
	}), rerankSettingModalOpen && /* @__PURE__ */ jsxs(Modal, {
		isShow: rerankSettingModalOpen,
		onClose: () => {
			setRerankSettingModalOpen(false);
		},
		className: "sm:min-w-[528px]",
		children: [/* @__PURE__ */ jsx(config_content_default, {
			datasetConfigs: tempDataSetConfigs,
			onChange: handleSetTempDataSetConfigs,
			selectedDatasets
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-6 flex justify-end",
			children: [/* @__PURE__ */ jsx(Button, {
				className: "mr-2 shrink-0",
				onClick: () => {
					setTempDataSetConfigs(datasetConfigs);
					setRerankSettingModalOpen(false);
				},
				children: t("operation.cancel", { ns: "common" })
			}), /* @__PURE__ */ jsx(Button, {
				variant: "primary",
				className: "shrink-0",
				onClick: handleSave,
				children: t("operation.save", { ns: "common" })
			})]
		})]
	})] });
};
var params_config_default = memo(ParamsConfig);
//#endregion
//#region app/components/app/configuration/dataset-config/index.tsx
var DatasetConfig = ({ readonly, hideMetadataFilter }) => {
	const { t } = useTranslation();
	const userProfile = useSelector((s) => s.userProfile);
	const { mode, dataSets: dataSet, setDataSets: setDataSet, modelConfig, setModelConfig, showSelectDataSet, isAgent, datasetConfigs, datasetConfigsRef, setDatasetConfigs, setRerankSettingModalOpen } = useContext$1(DebugConfigurationContext);
	const formattingChangedDispatcher = useFormattingChangedDispatcher();
	const hasData = dataSet.length > 0;
	const { currentModel: currentRerankModel, currentProvider: currentRerankProvider } = useModelListAndDefaultModelAndCurrentProviderAndModel(ModelTypeEnum.rerank);
	const onRemove = (id) => {
		const filteredDataSets = dataSet.filter((item) => item.id !== id);
		setDataSet(filteredDataSets);
		const { datasets, retrieval_model, score_threshold_enabled, ...restConfigs } = datasetConfigs;
		const { top_k, score_threshold, reranking_model, reranking_mode, weights, reranking_enable } = restConfigs;
		const retrievalConfig = getMultipleRetrievalConfig({
			top_k,
			score_threshold,
			reranking_model: reranking_model && reranking_model.reranking_provider_name && reranking_model.reranking_model_name ? {
				provider: reranking_model.reranking_provider_name,
				model: reranking_model.reranking_model_name
			} : void 0,
			reranking_mode,
			weights,
			reranking_enable
		}, filteredDataSets, dataSet, {
			provider: currentRerankProvider?.provider,
			model: currentRerankModel?.model
		});
		setDatasetConfigs({
			...datasetConfigsRef.current,
			...retrievalConfig,
			reranking_model: {
				reranking_provider_name: retrievalConfig?.reranking_model?.provider || "",
				reranking_model_name: retrievalConfig?.reranking_model?.model || ""
			},
			retrieval_model,
			score_threshold_enabled,
			datasets
		});
		const { allExternal, allInternal, mixtureInternalAndExternal, mixtureHighQualityAndEconomic, inconsistentEmbeddingModel } = getSelectedDatasetsMode(filteredDataSets);
		if (allInternal && (mixtureHighQualityAndEconomic || inconsistentEmbeddingModel) || mixtureInternalAndExternal || allExternal) setRerankSettingModalOpen(true);
		formattingChangedDispatcher();
	};
	const handleSave = (newDataset) => {
		const index = dataSet.findIndex((item) => item.id === newDataset.id);
		setDataSet([
			...dataSet.slice(0, index),
			newDataset,
			...dataSet.slice(index + 1)
		]);
		formattingChangedDispatcher();
	};
	const promptVariables = modelConfig.configs.prompt_variables;
	const promptVariablesToSelect = promptVariables.map((item) => ({
		name: item.name,
		type: item.type,
		value: item.key
	}));
	const selectedContextVar = promptVariables?.find((item) => item.is_context_var);
	const handleSelectContextVar = (selectedValue) => {
		setModelConfig(produce(modelConfig, (draft) => {
			draft.configs.prompt_variables = modelConfig.configs.prompt_variables.map((item) => {
				return {
					...item,
					is_context_var: item.key === selectedValue
				};
			});
		}));
	};
	const formattedDataset = useMemo(() => {
		return dataSet.map((item) => {
			const datasetConfig = {
				createdBy: item.created_by,
				partialMemberList: item.partial_member_list || [],
				permission: item.permission
			};
			return {
				...item,
				editable: hasEditPermissionForDataset(userProfile?.id || "", datasetConfig)
			};
		});
	}, [dataSet, userProfile?.id]);
	const metadataList = useMemo(() => {
		return intersectionBy(...formattedDataset.filter((dataset) => {
			return !!dataset.doc_metadata;
		}).map((dataset) => {
			return dataset.doc_metadata;
		}), "name");
	}, [formattedDataset]);
	const handleMetadataFilterModeChange = useCallback((newMode) => {
		setDatasetConfigs(produce(datasetConfigsRef.current, (draft) => {
			draft.metadata_filtering_mode = newMode;
		}));
	}, [setDatasetConfigs, datasetConfigsRef]);
	const handleAddCondition = useCallback(({ id, name, type }) => {
		let operator = ComparisonOperator.is;
		if (type === MetadataFilteringVariableType.number) operator = ComparisonOperator.equal;
		const newCondition = {
			id: v4$1(),
			metadata_id: id,
			name,
			comparison_operator: operator
		};
		setDatasetConfigs(produce(datasetConfigsRef.current, (draft) => {
			if (draft.metadata_filtering_conditions) draft.metadata_filtering_conditions.conditions.push(newCondition);
			else draft.metadata_filtering_conditions = {
				logical_operator: LogicalOperator.and,
				conditions: [newCondition]
			};
		}));
	}, [setDatasetConfigs, datasetConfigsRef]);
	const handleRemoveCondition = useCallback((id) => {
		const index = (datasetConfigsRef.current.metadata_filtering_conditions?.conditions || []).findIndex((c) => c.id === id);
		setDatasetConfigs(produce(datasetConfigsRef.current, (draft) => {
			if (index > -1) draft.metadata_filtering_conditions?.conditions.splice(index, 1);
		}));
	}, [setDatasetConfigs, datasetConfigsRef]);
	const handleUpdateCondition = useCallback((id, newCondition) => {
		const index = (datasetConfigsRef.current.metadata_filtering_conditions?.conditions || []).findIndex((c) => c.id === id);
		setDatasetConfigs(produce(datasetConfigsRef.current, (draft) => {
			if (index > -1) draft.metadata_filtering_conditions.conditions[index] = newCondition;
		}));
	}, [setDatasetConfigs, datasetConfigsRef]);
	const handleToggleConditionLogicalOperator = useCallback(() => {
		const newLogicalOperator = datasetConfigsRef.current.metadata_filtering_conditions?.logical_operator === LogicalOperator.and ? LogicalOperator.or : LogicalOperator.and;
		setDatasetConfigs(produce(datasetConfigsRef.current, (draft) => {
			draft.metadata_filtering_conditions.logical_operator = newLogicalOperator;
		}));
	}, [setDatasetConfigs, datasetConfigsRef]);
	const handleMetadataModelChange = useCallback((model) => {
		setDatasetConfigs(produce(datasetConfigsRef.current, (draft) => {
			draft.metadata_model_config = {
				provider: model.provider,
				name: model.modelId,
				mode: model.mode || AppModeEnum.CHAT,
				completion_params: draft.metadata_model_config?.completion_params || { temperature: .7 }
			};
		}));
	}, [setDatasetConfigs, datasetConfigsRef]);
	const handleMetadataCompletionParamsChange = useCallback((newParams) => {
		setDatasetConfigs(produce(datasetConfigsRef.current, (draft) => {
			draft.metadata_model_config = {
				...draft.metadata_model_config,
				completion_params: newParams
			};
		}));
	}, [setDatasetConfigs, datasetConfigsRef]);
	return /* @__PURE__ */ jsxs(feature_panel_default, {
		className: "mt-2",
		title: t("feature.dataSet.title", { ns: "appDebug" }),
		headerRight: !readonly && /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1",
			children: [!isAgent && /* @__PURE__ */ jsx(params_config_default, {
				disabled: !hasData,
				selectedDatasets: dataSet
			}), /* @__PURE__ */ jsx(operation_btn_default, {
				type: "add",
				onClick: showSelectDataSet
			})]
		}),
		hasHeaderBottomBorder: !hasData,
		noBodySpacing: true,
		children: [
			hasData ? /* @__PURE__ */ jsx("div", {
				className: cn("mt-1 grid grid-cols-1 px-3 pb-3", readonly && "grid-cols-2 gap-1"),
				children: formattedDataset.map((item) => /* @__PURE__ */ jsx(Item, {
					config: item,
					onRemove,
					onSave: handleSave,
					editable: item.editable,
					readonly
				}, item.id))
			}) : /* @__PURE__ */ jsx("div", {
				className: "mt-1 px-3 pb-3",
				children: /* @__PURE__ */ jsx("div", {
					className: "pb-1 pt-2 text-xs text-text-tertiary",
					children: t("feature.dataSet.noData", { ns: "appDebug" })
				})
			}),
			!hideMetadataFilter && /* @__PURE__ */ jsx("div", {
				className: "border-t border-t-divider-subtle py-2",
				children: /* @__PURE__ */ jsx(MetadataFilter, {
					metadataList,
					selectedDatasetsLoaded: true,
					metadataFilterMode: datasetConfigs.metadata_filtering_mode,
					metadataFilteringConditions: datasetConfigs.metadata_filtering_conditions,
					handleAddCondition,
					handleMetadataFilterModeChange,
					handleRemoveCondition,
					handleToggleConditionLogicalOperator,
					handleUpdateCondition,
					metadataModelConfig: datasetConfigs.metadata_model_config,
					handleMetadataModelChange,
					handleMetadataCompletionParamsChange,
					isCommonVariable: true,
					availableCommonStringVars: promptVariablesToSelect.filter((item) => item.type === MetadataFilteringVariableType.string || item.type === MetadataFilteringVariableType.select),
					availableCommonNumberVars: promptVariablesToSelect.filter((item) => item.type === MetadataFilteringVariableType.number)
				})
			}),
			!readonly && mode === AppModeEnum.COMPLETION && dataSet.length > 0 && /* @__PURE__ */ jsx(context_var_default, {
				value: selectedContextVar?.key,
				options: promptVariablesToSelect,
				onChange: handleSelectContextVar
			})
		]
	});
};
var dataset_config_default = React$1.memo(DatasetConfig);
//#endregion
//#region app/components/app/configuration/config/agent/agent-tools/index.tsx
var AgentTools = () => {
	const { t } = useTranslation();
	const [isShowChooseTool, setIsShowChooseTool] = useState(false);
	const { readonly, modelConfig, setModelConfig } = useContext$1(DebugConfigurationContext);
	const { data: buildInTools } = useAllBuiltInTools();
	const { data: customTools } = useAllCustomTools();
	const { data: workflowTools } = useAllWorkflowTools();
	const { data: mcpTools } = useAllMCPTools();
	const collectionList = useMemo(() => {
		return [
			...buildInTools || [],
			...customTools || [],
			...workflowTools || [],
			...mcpTools || []
		];
	}, [
		buildInTools,
		customTools,
		workflowTools,
		mcpTools
	]);
	const formattingChangedDispatcher = useFormattingChangedDispatcher();
	const [currentTool, setCurrentTool] = useState(null);
	const [isShowSettingTool, setIsShowSettingTool] = useState(false);
	const tools = (modelConfig?.agentConfig?.tools || []).map((item) => {
		const collection = collectionList.find((collection) => canFindTool(collection.id, item.provider_id) && collection.type === item.provider_type);
		const icon = collection?.icon;
		return {
			...item,
			icon,
			collection
		};
	});
	useMittContextSelector((s) => s.useSubscribe)("plugin:install:success", useCallback((installedPluginNames) => {
		setModelConfig(produce(modelConfig, (draft) => {
			draft.agentConfig.tools.forEach((item) => {
				if (item.isDeleted && installedPluginNames.includes(item.provider_id)) item.isDeleted = false;
			});
		}));
	}, [modelConfig, setModelConfig]));
	const handleToolSettingChange = (value) => {
		setModelConfig(produce(modelConfig, (draft) => {
			const tool = draft.agentConfig.tools.find((item) => item.provider_id === currentTool?.collection?.id && item.tool_name === currentTool?.tool_name);
			if (tool) tool.tool_parameters = value;
		}));
		setIsShowSettingTool(false);
		formattingChangedDispatcher();
	};
	const [isDeleting, setIsDeleting] = useState(-1);
	const getToolValue = (tool) => {
		const currToolWithConfigs = collectionList.find((c) => c.id === tool.provider_id)?.tools.find((t) => t.name === tool.tool_name);
		const formSchemas = currToolWithConfigs ? toolParametersToFormSchemas(currToolWithConfigs.parameters) : [];
		const paramsWithDefaultValue = addDefaultValue(tool.params, formSchemas);
		return {
			provider_id: tool.provider_id,
			provider_type: tool.provider_type,
			provider_name: tool.provider_name,
			tool_name: tool.tool_name,
			tool_label: tool.tool_label,
			tool_parameters: paramsWithDefaultValue,
			notAuthor: !tool.is_team_authorization,
			enabled: true,
			type: tool.provider_type
		};
	};
	const handleSelectTool = (tool) => {
		setModelConfig(produce(modelConfig, (draft) => {
			draft.agentConfig.tools.push(getToolValue(tool));
		}));
	};
	const handleSelectMultipleTool = (tool) => {
		setModelConfig(produce(modelConfig, (draft) => {
			draft.agentConfig.tools.push(...tool.map(getToolValue));
		}));
	};
	const getProviderShowName = (item) => {
		if (item.provider_type === CollectionType.builtIn) return item.provider_name.split("/").pop();
		return item.provider_name;
	};
	const handleAuthorizationItemClick = useCallback((credentialId) => {
		const newModelConfig = produce(modelConfig, (draft) => {
			const tool = draft.agentConfig.tools.find((item) => item.provider_id === currentTool?.provider_id);
			if (tool) tool.credential_id = credentialId;
		});
		setCurrentTool({
			...currentTool,
			credential_id: credentialId
		});
		setModelConfig(newModelConfig);
		formattingChangedDispatcher();
	}, [
		currentTool,
		modelConfig,
		setModelConfig,
		formattingChangedDispatcher
	]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(feature_panel_default, {
		className: cn("mt-2", tools.length === 0 && "pb-2"),
		noBodySpacing: tools.length === 0,
		title: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center",
			children: [/* @__PURE__ */ jsx("div", {
				className: "mr-1",
				children: t("agent.tools.name", { ns: "appDebug" })
			}), /* @__PURE__ */ jsx(tooltip_default, { popupContent: /* @__PURE__ */ jsx("div", {
				className: "w-[180px]",
				children: t("agent.tools.description", { ns: "appDebug" })
			}) })]
		}),
		headerRight: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-xs font-normal leading-[18px] text-text-tertiary",
				children: [
					tools.filter((item) => !!item.enabled).length,
					"/",
					tools.length,
					"\xA0",
					t("agent.tools.enabled", { ns: "appDebug" })
				]
			}), tools.length < MAX_TOOLS_NUM && !readonly && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", { className: "ml-3 mr-1 h-3.5 w-px bg-divider-regular" }), /* @__PURE__ */ jsx(tool_picker_default, {
				trigger: /* @__PURE__ */ jsx(operation_btn_default, { type: "add" }),
				isShow: isShowChooseTool,
				onShowChange: setIsShowChooseTool,
				disabled: false,
				supportAddCustomTool: true,
				onSelect: handleSelectTool,
				onSelectMultiple: handleSelectMultipleTool,
				selectedTools: tools
			})] })]
		}),
		children: /* @__PURE__ */ jsx("div", {
			className: cn("grid grid-cols-1 items-center gap-1 2xl:grid-cols-2", readonly && "cursor-not-allowed grid-cols-2"),
			children: tools.map((item, index) => /* @__PURE__ */ jsxs("div", {
				className: cn("cursor group relative flex w-full items-center justify-between rounded-lg border-[0.5px] border-components-panel-border-subtle bg-components-panel-on-panel-item-bg p-1.5 pr-2 shadow-xs last-of-type:mb-0 hover:bg-components-panel-on-panel-item-bg-hover hover:shadow-sm", isDeleting === index && "border-state-destructive-border hover:bg-state-destructive-hover"),
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex w-0 grow items-center",
					children: [
						item.isDeleted && /* @__PURE__ */ jsx(Icon$17, { className: "h-5 w-5" }),
						!item.isDeleted && /* @__PURE__ */ jsxs("div", {
							className: cn((item.notAuthor || !item.enabled) && "shrink-0 opacity-50"),
							children: [typeof item.icon === "string" && /* @__PURE__ */ jsx("div", {
								className: "h-5 w-5 rounded-md bg-cover bg-center",
								style: { backgroundImage: `url(${item.icon})` }
							}), typeof item.icon !== "string" && /* @__PURE__ */ jsx(app_icon_default, {
								className: "rounded-md",
								size: "xs",
								icon: item.icon?.content,
								background: item.icon?.background
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: cn("system-xs-regular ml-1.5 flex w-0 grow items-center truncate", item.isDeleted || item.notAuthor || !item.enabled ? "opacity-50" : ""),
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "system-xs-medium pr-1.5 text-text-secondary",
									children: getProviderShowName(item)
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-text-tertiary",
									children: item.tool_label
								}),
								!item.isDeleted && !readonly && /* @__PURE__ */ jsx(tooltip_default, {
									popupContent: /* @__PURE__ */ jsxs("div", {
										className: "w-[180px]",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "mb-1.5 text-text-secondary",
												children: item.tool_name
											}),
											/* @__PURE__ */ jsx("div", {
												className: "mb-1.5 text-text-tertiary",
												children: t("toolNameUsageTip", { ns: "tools" })
											}),
											/* @__PURE__ */ jsx("div", {
												className: "cursor-pointer text-text-accent",
												onClick: () => (0, import_copy_to_clipboard.default)(item.tool_name),
												children: t("copyToolName", { ns: "tools" })
											})
										]
									}),
									children: /* @__PURE__ */ jsx("div", {
										className: "h-4 w-4",
										children: /* @__PURE__ */ jsx("div", {
											className: "ml-0.5 hidden group-hover:inline-block",
											"data-testid": "tool-info-tooltip",
											children: /* @__PURE__ */ jsx(qy, { className: "h-4 w-4 text-text-tertiary" })
										})
									})
								})
							]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "ml-1 flex shrink-0 items-center",
					children: [
						item.isDeleted && /* @__PURE__ */ jsxs("div", {
							className: "mr-2 flex items-center",
							children: [/* @__PURE__ */ jsx(tooltip_default, {
								popupContent: t("toolRemoved", { ns: "tools" }),
								children: /* @__PURE__ */ jsx("div", {
									className: "mr-1 cursor-pointer rounded-md p-1 hover:bg-black/5",
									children: /* @__PURE__ */ jsx(Icon$30, { className: "h-4 w-4 text-[#F79009]" })
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "cursor-pointer rounded-md p-1 text-text-tertiary hover:text-text-destructive",
								onClick: () => {
									setModelConfig(produce(modelConfig, (draft) => {
										draft.agentConfig.tools.splice(index, 1);
									}));
									formattingChangedDispatcher();
								},
								onMouseOver: () => setIsDeleting(index),
								onMouseLeave: () => setIsDeleting(-1),
								children: /* @__PURE__ */ jsx(M6, { className: "h-4 w-4" })
							})]
						}),
						!item.isDeleted && !readonly && /* @__PURE__ */ jsxs("div", {
							className: "mr-2 hidden items-center gap-1 group-hover:flex",
							children: [!item.notAuthor && /* @__PURE__ */ jsx(tooltip_default, {
								popupContent: t("setBuiltInTools.infoAndSetting", { ns: "tools" }),
								needsDelay: false,
								children: /* @__PURE__ */ jsx("div", {
									className: "cursor-pointer rounded-md p-1  hover:bg-black/5",
									onClick: () => {
										setCurrentTool(item);
										setIsShowSettingTool(true);
									},
									children: /* @__PURE__ */ jsx(AD, { className: "h-4 w-4 text-text-tertiary" })
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "cursor-pointer rounded-md p-1 text-text-tertiary hover:text-text-destructive",
								onClick: () => {
									setModelConfig(produce(modelConfig, (draft) => {
										draft.agentConfig.tools.splice(index, 1);
									}));
									formattingChangedDispatcher();
								},
								onMouseOver: () => setIsDeleting(index),
								onMouseLeave: () => setIsDeleting(-1),
								"data-testid": "delete-removed-tool",
								children: /* @__PURE__ */ jsx(M6, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: cn(item.isDeleted && "opacity-50"),
							children: [!item.notAuthor && /* @__PURE__ */ jsx(switch_default, {
								value: item.isDeleted ? false : item.enabled,
								disabled: item.isDeleted || readonly,
								size: "md",
								onChange: (enabled) => {
									setModelConfig(produce(modelConfig, (draft) => {
										draft.agentConfig.tools[index].enabled = enabled;
									}));
									formattingChangedDispatcher();
								}
							}), item.notAuthor && /* @__PURE__ */ jsxs(Button, {
								variant: "secondary",
								disabled: readonly,
								size: "small",
								onClick: () => {
									setCurrentTool(item);
									setIsShowSettingTool(true);
								},
								children: [t("notAuthorized", { ns: "tools" }), /* @__PURE__ */ jsx(Indicator, {
									className: "ml-2",
									color: "orange"
								})]
							})]
						})
					]
				})]
			}, index))
		})
	}), isShowSettingTool && /* @__PURE__ */ jsx(setting_built_in_tool_default, {
		toolName: currentTool?.tool_name,
		setting: currentTool?.tool_parameters,
		collection: currentTool?.collection,
		isModel: currentTool?.collection?.type === CollectionType.model,
		onSave: handleToolSettingChange,
		onHide: () => setIsShowSettingTool(false),
		credentialId: currentTool?.credential_id,
		onAuthorizationItemClick: handleAuthorizationItemClick
	})] });
};
var agent_tools_default = React$1.memo(AgentTools);
//#endregion
//#region app/components/app/configuration/config/config-audio.tsx
var ConfigAudio = () => {
	const { t } = useTranslation();
	const file = useFeatures((s) => s.features.file);
	const featuresStore = useFeaturesStore();
	const { isShowAudioConfig, readonly } = useContext$1(DebugConfigurationContext);
	const isAudioEnabled = file?.allowed_file_types?.includes(SupportUploadFileTypes.audio) ?? false;
	const handleChange = useCallback((value) => {
		const { features, setFeatures } = featuresStore.getState();
		setFeatures(produce(features, (draft) => {
			if (value) draft.file.allowed_file_types = Array.from(new Set([...draft.file?.allowed_file_types || [], SupportUploadFileTypes.audio]));
			else draft.file.allowed_file_types = draft.file.allowed_file_types?.filter((type) => type !== SupportUploadFileTypes.audio);
			if (draft.file) draft.file.enabled = (draft.file.allowed_file_types?.length ?? 0) > 0;
		}));
	}, [featuresStore]);
	if (!isShowAudioConfig || readonly && !isAudioEnabled) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-2 flex items-center gap-2 rounded-xl border-l-[0.5px] border-t-[0.5px] bg-background-section-burn p-2",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "shrink-0 p-1",
				children: /* @__PURE__ */ jsx("div", {
					className: "rounded-lg border-[0.5px] border-divider-subtle bg-util-colors-violet-violet-600 p-1 shadow-xs",
					children: /* @__PURE__ */ jsx(Icon$39, { className: "h-4 w-4 text-text-primary-on-surface" })
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex grow items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "system-sm-semibold mr-1 text-text-secondary",
					children: t("feature.audioUpload.title", { ns: "appDebug" })
				}), /* @__PURE__ */ jsx(tooltip_default, { popupContent: /* @__PURE__ */ jsx("div", {
					className: "w-[180px]",
					children: t("feature.audioUpload.description", { ns: "appDebug" })
				}) })]
			}),
			!readonly && /* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center",
				children: [/* @__PURE__ */ jsx("div", { className: "ml-1 mr-3 h-3.5 w-[1px] bg-divider-subtle" }), /* @__PURE__ */ jsx(switch_default, {
					value: isAudioEnabled,
					onChange: handleChange,
					size: "md"
				})]
			})
		]
	});
};
var config_audio_default = React$1.memo(ConfigAudio);
//#endregion
//#region app/components/app/configuration/config/config-document.tsx
var ConfigDocument = () => {
	const { t } = useTranslation();
	const file = useFeatures((s) => s.features.file);
	const featuresStore = useFeaturesStore();
	const { isShowDocumentConfig, readonly } = useContext$1(DebugConfigurationContext);
	const isDocumentEnabled = file?.allowed_file_types?.includes(SupportUploadFileTypes.document) ?? false;
	const handleChange = useCallback((value) => {
		const { features, setFeatures } = featuresStore.getState();
		setFeatures(produce(features, (draft) => {
			if (value) draft.file.allowed_file_types = Array.from(new Set([...draft.file?.allowed_file_types || [], SupportUploadFileTypes.document]));
			else draft.file.allowed_file_types = draft.file.allowed_file_types?.filter((type) => type !== SupportUploadFileTypes.document);
			if (draft.file) draft.file.enabled = (draft.file.allowed_file_types?.length ?? 0) > 0;
		}));
	}, [featuresStore]);
	if (!isShowDocumentConfig || readonly && !isDocumentEnabled) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-2 flex items-center gap-2 rounded-xl border-l-[0.5px] border-t-[0.5px] bg-background-section-burn p-2",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "shrink-0 p-1",
				children: /* @__PURE__ */ jsx("div", {
					className: "rounded-lg border-[0.5px] border-divider-subtle bg-util-colors-indigo-indigo-600 p-1 shadow-xs",
					children: /* @__PURE__ */ jsx(Icon$40, { className: "h-4 w-4 text-text-primary-on-surface" })
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex grow items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "system-sm-semibold mr-1 text-text-secondary",
					children: t("feature.documentUpload.title", { ns: "appDebug" })
				}), /* @__PURE__ */ jsx(tooltip_default, { popupContent: /* @__PURE__ */ jsx("div", {
					className: "w-[180px]",
					children: t("feature.documentUpload.description", { ns: "appDebug" })
				}) })]
			}),
			!readonly && /* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center",
				children: [/* @__PURE__ */ jsx("div", { className: "ml-1 mr-3 h-3.5 w-[1px] bg-divider-subtle" }), /* @__PURE__ */ jsx(switch_default, {
					value: isDocumentEnabled,
					onChange: handleChange,
					size: "md"
				})]
			})
		]
	});
};
var config_document_default = React$1.memo(ConfigDocument);
//#endregion
//#region app/components/app/configuration/config/index.tsx
var Config = () => {
	const { readonly, mode, isAdvancedMode, modelModeType, isAgent, hasSetBlockStatus, showHistoryModal, modelConfig, setModelConfig, setPrevPromptConfig, dataSets } = useContext$1(DebugConfigurationContext);
	const isChatApp = [
		AppModeEnum.ADVANCED_CHAT,
		AppModeEnum.AGENT_CHAT,
		AppModeEnum.CHAT
	].includes(mode);
	const formattingChangedDispatcher = useFormattingChangedDispatcher();
	const promptTemplate = modelConfig.configs.prompt_template;
	const promptVariables = modelConfig.configs.prompt_variables;
	const handlePromptChange = (newTemplate, newVariables) => {
		const newModelConfig = produce(modelConfig, (draft) => {
			draft.configs.prompt_template = newTemplate;
			draft.configs.prompt_variables = [...draft.configs.prompt_variables, ...newVariables];
		});
		if (modelConfig.configs.prompt_template !== newTemplate) formattingChangedDispatcher();
		setPrevPromptConfig(modelConfig.configs);
		setModelConfig(newModelConfig);
	};
	const handlePromptVariablesNameChange = (newVariables) => {
		setPrevPromptConfig(modelConfig.configs);
		setModelConfig(produce(modelConfig, (draft) => {
			draft.configs.prompt_variables = newVariables;
		}));
	};
	return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", {
		className: "relative h-0 grow overflow-y-auto px-6 pb-[50px]",
		children: [
			/* @__PURE__ */ jsx(config_prompt_default, {
				mode,
				promptTemplate,
				promptVariables,
				onChange: handlePromptChange,
				readonly
			}),
			!(readonly && promptVariables.length === 0) && /* @__PURE__ */ jsx(config_var_default, {
				promptVariables,
				onPromptVariablesChange: handlePromptVariablesNameChange,
				readonly
			}),
			!(readonly && dataSets.length === 0) && /* @__PURE__ */ jsx(dataset_config_default, {
				readonly,
				hideMetadataFilter: readonly
			}),
			isAgent && !(readonly && modelConfig.agentConfig.tools.length === 0) && /* @__PURE__ */ jsx(agent_tools_default, {}),
			/* @__PURE__ */ jsx(config_vision_default, {}),
			/* @__PURE__ */ jsx(config_document_default, {}),
			/* @__PURE__ */ jsx(config_audio_default, {}),
			!readonly && isAdvancedMode && isChatApp && modelModeType === ModelModeType.completion && /* @__PURE__ */ jsx(history_panel_default, {
				showWarning: !hasSetBlockStatus.history,
				onShowEditModal: showHistoryModal
			})
		]
	}) });
};
var config_default = React$1.memo(Config);
//#endregion
//#region app/components/app/configuration/debug/chat-user-input.tsx
var ChatUserInput = ({ inputs }) => {
	const { t } = useTranslation();
	const { modelConfig, setInputs, readonly } = useContext$1(DebugConfigurationContext);
	const promptVariables = modelConfig.configs.prompt_variables.filter(({ key, name }) => {
		return key && key?.trim() && name && name?.trim();
	});
	const promptVariableObj = (() => {
		const obj = {};
		promptVariables.forEach((input) => {
			obj[input.key] = true;
		});
		return obj;
	})();
	useEffect(() => {
		const newInputs = { ...inputs };
		let hasChanges = false;
		promptVariables.forEach((variable) => {
			const { key, default: defaultValue } = variable;
			if (defaultValue !== void 0 && defaultValue !== null && defaultValue !== "" && (inputs[key] === void 0 || inputs[key] === null || inputs[key] === "")) {
				newInputs[key] = defaultValue;
				hasChanges = true;
			}
		});
		if (hasChanges) setInputs(newInputs);
	}, [
		promptVariables,
		inputs,
		setInputs
	]);
	const handleInputValueChange = (key, value) => {
		if (!(key in promptVariableObj)) return;
		const newInputs = { ...inputs };
		promptVariables.forEach((input) => {
			if (input.key === key) newInputs[key] = value;
		});
		setInputs(newInputs);
	};
	if (!promptVariables.length) return null;
	return /* @__PURE__ */ jsx("div", {
		className: cn("z-[1] rounded-xl border-[0.5px] border-components-panel-border-subtle bg-components-panel-on-panel-item-bg shadow-xs"),
		children: /* @__PURE__ */ jsx("div", {
			className: "px-4 pb-4 pt-3",
			children: promptVariables.map(({ key, name, type, options, max_length, required }, index) => /* @__PURE__ */ jsx("div", {
				className: "mb-4 last-of-type:mb-0",
				children: /* @__PURE__ */ jsxs("div", { children: [type !== "checkbox" && /* @__PURE__ */ jsxs("div", {
					className: "system-sm-semibold mb-1 flex h-6 items-center gap-1 text-text-secondary",
					children: [/* @__PURE__ */ jsx("div", {
						className: "truncate",
						children: name || key
					}), !required && /* @__PURE__ */ jsx("span", {
						className: "system-xs-regular text-text-tertiary",
						children: t("panel.optional", { ns: "workflow" })
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grow",
					children: [
						type === "string" && /* @__PURE__ */ jsx(Input$1, {
							value: inputs[key] ? `${inputs[key]}` : "",
							onChange: (e) => {
								handleInputValueChange(key, e.target.value);
							},
							placeholder: name,
							autoFocus: index === 0,
							maxLength: max_length,
							readOnly: readonly
						}),
						type === "paragraph" && /* @__PURE__ */ jsx(Textarea, {
							className: "h-[120px] grow",
							placeholder: name,
							value: inputs[key] ? `${inputs[key]}` : "",
							onChange: (e) => {
								handleInputValueChange(key, e.target.value);
							},
							readOnly: readonly
						}),
						type === "select" && /* @__PURE__ */ jsx(select_default$1, {
							className: "w-full",
							defaultValue: inputs[key],
							onSelect: (i) => {
								handleInputValueChange(key, i.value);
							},
							items: (options || []).map((i) => ({
								name: i,
								value: i
							})),
							allowSearch: false,
							disabled: readonly
						}),
						type === "number" && /* @__PURE__ */ jsx(Input$1, {
							type: "number",
							value: inputs[key] ? `${inputs[key]}` : "",
							onChange: (e) => {
								handleInputValueChange(key, e.target.value);
							},
							placeholder: name,
							autoFocus: index === 0,
							maxLength: max_length,
							readOnly: readonly
						}),
						type === "checkbox" && /* @__PURE__ */ jsx(bool_input_default, {
							name: name || key,
							value: !!inputs[key],
							required,
							onChange: (value) => {
								handleInputValueChange(key, value);
							},
							readonly
						})
					]
				})] })
			}, key))
		})
	});
};
//#endregion
//#region app/components/app/configuration/prompt-value-panel/index.tsx
var PromptValuePanel = ({ appType, onSend, inputs, visionConfig, onVisionFilesChange }) => {
	const { t } = useTranslation();
	const { readonly, modelModeType, modelConfig, setInputs, mode, isAdvancedMode, completionPromptConfig, chatPromptConfig } = useContext$1(DebugConfigurationContext);
	const [userInputFieldCollapse, setUserInputFieldCollapse] = useState(false);
	const promptVariables = modelConfig.configs.prompt_variables.filter(({ key, name }) => {
		return key && key?.trim() && name && name?.trim();
	});
	const promptVariableObj = useMemo(() => {
		const obj = {};
		promptVariables.forEach((input) => {
			obj[input.key] = true;
		});
		return obj;
	}, [promptVariables]);
	useEffect(() => {
		const newInputs = { ...inputs };
		let hasChanges = false;
		promptVariables.forEach((variable) => {
			const { key, default: defaultValue } = variable;
			if (defaultValue !== void 0 && defaultValue !== null && defaultValue !== "" && (inputs[key] === void 0 || inputs[key] === null || inputs[key] === "")) {
				newInputs[key] = defaultValue;
				hasChanges = true;
			}
		});
		if (hasChanges) setInputs(newInputs);
	}, [
		promptVariables,
		inputs,
		setInputs
	]);
	const canNotRun = useMemo(() => {
		if (mode !== AppModeEnum.COMPLETION) return true;
		if (isAdvancedMode) {
			if (modelModeType === ModelModeType.chat) return chatPromptConfig?.prompt.every(({ text }) => !text);
			return !completionPromptConfig.prompt?.text;
		} else return !modelConfig.configs.prompt_template;
	}, [
		chatPromptConfig?.prompt,
		completionPromptConfig.prompt?.text,
		isAdvancedMode,
		mode,
		modelConfig.configs.prompt_template,
		modelModeType
	]);
	const handleInputValueChange = (key, value) => {
		if (!(key in promptVariableObj)) return;
		const newInputs = { ...inputs };
		promptVariables.forEach((input) => {
			if (input.key === key) newInputs[key] = value;
		});
		setInputs(newInputs);
	};
	const onClear = () => {
		const newInputs = {};
		promptVariables.forEach((item) => {
			newInputs[item.key] = "";
		});
		setInputs(newInputs);
	};
	const setShowAppConfigureFeaturesModal = useStore$2((s) => s.setShowAppConfigureFeaturesModal);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
		className: "relative z-[1] mx-3 rounded-xl border-[0.5px] border-components-panel-border-subtle bg-components-panel-on-panel-item-bg shadow-md",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: cn("px-4 pt-3", userInputFieldCollapse ? "pb-3" : "pb-1"),
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex cursor-pointer items-center gap-0.5 py-0.5",
					onClick: () => setUserInputFieldCollapse(!userInputFieldCollapse),
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "system-md-semibold-uppercase text-text-secondary",
							children: t("inputs.userInputField", { ns: "appDebug" })
						}),
						userInputFieldCollapse && /* @__PURE__ */ jsx(r2, { className: "h-4 w-4 text-text-secondary" }),
						!userInputFieldCollapse && /* @__PURE__ */ jsx(f1, { className: "h-4 w-4 text-text-secondary" })
					]
				}), !userInputFieldCollapse && /* @__PURE__ */ jsx("div", {
					className: "system-xs-regular mt-1 text-text-tertiary",
					children: t("inputs.completionVarTip", { ns: "appDebug" })
				})]
			}),
			!userInputFieldCollapse && promptVariables.length > 0 && /* @__PURE__ */ jsxs("div", {
				className: "px-4 pb-4 pt-3",
				children: [promptVariables.map(({ key, name, type, options, max_length, required }, index) => /* @__PURE__ */ jsx("div", {
					className: "mb-4 last-of-type:mb-0",
					children: /* @__PURE__ */ jsxs("div", { children: [type !== "checkbox" && /* @__PURE__ */ jsxs("div", {
						className: "system-sm-semibold mb-1 flex h-6 items-center gap-1 text-text-secondary",
						children: [/* @__PURE__ */ jsx("div", {
							className: "truncate",
							children: name || key
						}), !required && /* @__PURE__ */ jsx("span", {
							className: "system-xs-regular text-text-tertiary",
							children: t("panel.optional", { ns: "workflow" })
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "grow",
						children: [
							type === "string" && /* @__PURE__ */ jsx(Input$1, {
								value: inputs[key] ? `${inputs[key]}` : "",
								onChange: (e) => {
									handleInputValueChange(key, e.target.value);
								},
								placeholder: name,
								autoFocus: index === 0,
								maxLength: max_length,
								readOnly: readonly
							}),
							type === "paragraph" && /* @__PURE__ */ jsx(Textarea, {
								className: "h-[120px] grow",
								placeholder: name,
								value: inputs[key] ? `${inputs[key]}` : "",
								onChange: (e) => {
									handleInputValueChange(key, e.target.value);
								},
								readOnly: readonly
							}),
							type === "select" && /* @__PURE__ */ jsx(select_default$1, {
								className: "w-full",
								defaultValue: inputs[key],
								onSelect: (i) => {
									handleInputValueChange(key, i.value);
								},
								items: (options || []).map((i) => ({
									name: i,
									value: i
								})),
								allowSearch: false,
								bgClassName: "bg-gray-50",
								disabled: readonly
							}),
							type === "number" && /* @__PURE__ */ jsx(Input$1, {
								type: "number",
								value: inputs[key] ? `${inputs[key]}` : "",
								onChange: (e) => {
									handleInputValueChange(key, e.target.value);
								},
								placeholder: name,
								autoFocus: index === 0,
								maxLength: max_length,
								readOnly: readonly
							}),
							type === "checkbox" && /* @__PURE__ */ jsx(bool_input_default, {
								name: name || key,
								value: !!inputs[key],
								required,
								onChange: (value) => {
									handleInputValueChange(key, value);
								},
								readonly
							})
						]
					})] })
				}, key)), visionConfig?.enabled && /* @__PURE__ */ jsxs("div", {
					className: "mt-3 justify-between xl:flex",
					children: [/* @__PURE__ */ jsx("div", {
						className: "mr-1 w-[120px] shrink-0 py-2 text-sm text-text-primary",
						children: t("imageUploader.imageUpload", { ns: "common" })
					}), /* @__PURE__ */ jsx("div", {
						className: "grow",
						children: /* @__PURE__ */ jsx(TextGenerationImageUploader, {
							settings: visionConfig,
							onFilesChange: (files) => onVisionFilesChange(files.filter((file) => file.progress !== -1).map((fileItem) => ({
								type: "image",
								transfer_method: fileItem.type,
								url: fileItem.url,
								upload_file_id: fileItem.fileId
							}))),
							disabled: readonly
						})
					})]
				})]
			}),
			!userInputFieldCollapse && /* @__PURE__ */ jsxs("div", {
				className: "flex justify-between border-t border-divider-subtle p-4 pt-3",
				children: [
					/* @__PURE__ */ jsx(Button, {
						className: "w-[72px]",
						disabled: readonly,
						onClick: onClear,
						children: t("operation.clear", { ns: "common" })
					}),
					canNotRun && /* @__PURE__ */ jsx(tooltip_default, {
						popupContent: t("otherError.promptNoBeEmpty", { ns: "appDebug" }),
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "primary",
							disabled: canNotRun || readonly,
							onClick: () => onSend?.(),
							className: "w-[96px]",
							children: [/* @__PURE__ */ jsx(dG, {
								className: "mr-0.5 h-4 w-4 shrink-0",
								"aria-hidden": "true"
							}), t("inputs.run", { ns: "appDebug" })]
						})
					}),
					!canNotRun && /* @__PURE__ */ jsxs(Button, {
						variant: "primary",
						disabled: canNotRun || readonly,
						onClick: () => onSend?.(),
						className: "w-[96px]",
						children: [/* @__PURE__ */ jsx(dG, {
							className: "mr-0.5 h-4 w-4 shrink-0",
							"aria-hidden": "true"
						}), t("inputs.run", { ns: "appDebug" })]
					})
				]
			})
		]
	}), /* @__PURE__ */ jsx("div", {
		className: "mx-3",
		children: /* @__PURE__ */ jsx(FeatureBar, {
			showFileUpload: false,
			isChatMode: appType !== AppModeEnum.COMPLETION,
			onFeatureBarClick: setShowAppConfigureFeaturesModal,
			disabled: readonly,
			hideEditEntrance: readonly
		})
	})] });
};
var prompt_value_panel_default = React$1.memo(PromptValuePanel);
//#endregion
//#region app/components/app/text-generate/item/result-tab.tsx
var ResultTab = ({ data, content, currentTab }) => {
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [currentTab === "RESULT" && /* @__PURE__ */ jsxs("div", {
		className: "space-y-3 p-4",
		children: [data?.resultText && /* @__PURE__ */ jsx(Markdown, { content: data?.resultText || "" }), !!data?.files?.length && /* @__PURE__ */ jsx("div", {
			className: "flex flex-col gap-2",
			children: data?.files.map((item) => /* @__PURE__ */ jsxs("div", {
				className: "system-xs-regular flex flex-col gap-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "py-1 text-text-tertiary ",
					children: item.varName
				}), /* @__PURE__ */ jsx(FileList, {
					files: item.list,
					showDeleteAction: false,
					showDownloadAction: true,
					canPreview: true
				})]
			}, item.varName))
		})]
	}), currentTab === "DETAIL" && content && /* @__PURE__ */ jsx("div", {
		className: "p-4",
		children: /* @__PURE__ */ jsx(code_editor_default, {
			readOnly: true,
			title: /* @__PURE__ */ jsx("div", { children: "JSON OUTPUT" }),
			language: CodeLanguage.json,
			value: content,
			isJSONStringifyBeauty: true
		})
	})] });
};
var result_tab_default = memo(ResultTab);
//#endregion
//#region app/components/app/text-generate/item/index.tsx
var MAX_DEPTH = 3;
var GenerationItem = ({ isWorkflow, workflowProcessData, className, isError, onRetry, content, messageId, isLoading, isResponding, moreLikeThis, isInWebApp = false, feedback, onFeedback, onSave, depth = 1, isMobile, appSourceType, installedAppId, taskId, controlClearMoreLikeThis, supportFeedback, isShowTextToSpeech, hideProcessDetail, siteInfo, inSidePanel }) => {
	const { t } = useTranslation();
	const params = useParams();
	const isTop = depth === 1;
	const isTryApp = appSourceType === AppSourceType.tryApp;
	const [completionRes, setCompletionRes] = useState("");
	const [childMessageId, setChildMessageId] = useState(null);
	const [childFeedback, setChildFeedback] = useState({ rating: null });
	const { config } = useChatContext();
	const setCurrentLogItem = useStore$2((s) => s.setCurrentLogItem);
	const setShowPromptLogModal = useStore$2((s) => s.setShowPromptLogModal);
	const handleFeedback = async (childFeedback) => {
		await updateFeedback({
			url: `/messages/${childMessageId}/feedbacks`,
			body: { rating: childFeedback.rating }
		}, appSourceType, installedAppId);
		setChildFeedback(childFeedback);
	};
	const [isQuerying, { setTrue: startQuerying, setFalse: stopQuerying }] = useBoolean(false);
	const childProps = {
		isInWebApp,
		content: completionRes,
		messageId: childMessageId,
		depth: depth + 1,
		moreLikeThis: true,
		onFeedback: handleFeedback,
		isLoading: isQuerying,
		feedback: childFeedback,
		onSave,
		isShowTextToSpeech,
		isMobile,
		appSourceType,
		installedAppId,
		controlClearMoreLikeThis,
		isWorkflow,
		siteInfo,
		taskId
	};
	const handleMoreLikeThis = async () => {
		if (isQuerying || !messageId) {
			Toast.notify({
				type: "warning",
				message: t("errorMessage.waitForResponse", { ns: "appDebug" })
			});
			return;
		}
		startQuerying();
		const res = await fetchMoreLikeThis(messageId, appSourceType, installedAppId);
		setCompletionRes(res.answer);
		setChildFeedback({ rating: null });
		setChildMessageId(res.id);
		stopQuerying();
	};
	useEffect(() => {
		if (controlClearMoreLikeThis) {
			setChildMessageId(null);
			setCompletionRes("");
		}
	}, [controlClearMoreLikeThis]);
	useEffect(() => {
		if (isLoading) setChildMessageId(null);
	}, [isLoading]);
	const handleOpenLogModal = async () => {
		const data = await fetchTextGenerationMessage({
			appId: params.appId,
			messageId
		});
		setCurrentLogItem(Array.isArray(data.message) ? {
			...data,
			log: [...data.message, ...data.message[data.message.length - 1].role !== "assistant" ? [{
				role: "assistant",
				text: data.answer,
				files: data.message_files?.filter((file) => file.belongs_to === "assistant") || []
			}] : []]
		} : {
			...data,
			log: [typeof data.message === "string" ? { text: data.message } : data.message]
		});
		setShowPromptLogModal(true);
	};
	const [currentTab, setCurrentTab] = useState("DETAIL");
	const showResultTabs = !!workflowProcessData?.resultText || !!workflowProcessData?.files?.length || workflowProcessData?.humanInputFormDataList && workflowProcessData?.humanInputFormDataList.length > 0 || workflowProcessData?.humanInputFilledFormDataList && workflowProcessData?.humanInputFilledFormDataList.length > 0;
	const switchTab = async (tab) => {
		setCurrentTab(tab);
	};
	useEffect(() => {
		if (workflowProcessData?.resultText || !!workflowProcessData?.files?.length || workflowProcessData?.humanInputFormDataList && workflowProcessData?.humanInputFormDataList.length > 0 || workflowProcessData?.humanInputFilledFormDataList && workflowProcessData?.humanInputFilledFormDataList.length > 0) switchTab("RESULT");
		else switchTab("DETAIL");
	}, [
		workflowProcessData?.files?.length,
		workflowProcessData?.resultText,
		workflowProcessData?.humanInputFormDataList,
		workflowProcessData?.humanInputFilledFormDataList
	]);
	const handleSubmitHumanInputForm = useCallback(async (formToken, formData) => {
		if (appSourceType === AppSourceType.installedApp) await submitHumanInputForm$1(formToken, formData);
		else await submitHumanInputForm(formToken, formData);
	}, [appSourceType]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
		className: cn("relative", !isTop && "mt-3", className),
		children: [isLoading && /* @__PURE__ */ jsx("div", {
			className: cn("flex h-10 items-center", !inSidePanel && "rounded-2xl border-t border-divider-subtle bg-chat-bubble-bg"),
			children: /* @__PURE__ */ jsx(Loading, { type: "area" })
		}), !isLoading && /* @__PURE__ */ jsxs(Fragment$1, { children: [
			/* @__PURE__ */ jsxs("div", {
				className: cn("relative", !inSidePanel && "rounded-2xl border-t border-divider-subtle bg-chat-bubble-bg"),
				children: [
					workflowProcessData && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
						className: cn("p-3", showResultTabs && "border-b border-divider-subtle"),
						children: [
							taskId && /* @__PURE__ */ jsxs("div", {
								className: cn("system-2xs-medium-uppercase mb-2 flex items-center text-text-accent-secondary", isError && "text-text-destructive"),
								children: [
									/* @__PURE__ */ jsx(Wg, { className: "mr-1 h-3 w-3" }),
									/* @__PURE__ */ jsx("span", { children: t("generation.execution", { ns: "share" }) }),
									/* @__PURE__ */ jsx("span", {
										className: "px-1",
										children: "·"
									}),
									/* @__PURE__ */ jsx("span", { children: taskId })
								]
							}),
							siteInfo && workflowProcessData && /* @__PURE__ */ jsx(WorkflowProcessItem, {
								data: workflowProcessData,
								expand: workflowProcessData.expand,
								hideProcessDetail,
								hideInfo: hideProcessDetail,
								readonly: !siteInfo.show_workflow_steps
							}),
							showResultTabs && /* @__PURE__ */ jsxs("div", {
								className: "flex items-center space-x-6 px-1",
								children: [/* @__PURE__ */ jsx("div", {
									className: cn("system-sm-semibold-uppercase cursor-pointer border-b-2 border-transparent py-3 text-text-tertiary", currentTab === "RESULT" && "border-util-colors-blue-brand-blue-brand-600 text-text-primary"),
									onClick: () => switchTab("RESULT"),
									children: t("result", { ns: "runLog" })
								}), /* @__PURE__ */ jsx("div", {
									className: cn("system-sm-semibold-uppercase cursor-pointer border-b-2 border-transparent py-3 text-text-tertiary", currentTab === "DETAIL" && "border-util-colors-blue-brand-blue-brand-600 text-text-primary"),
									onClick: () => switchTab("DETAIL"),
									children: t("detail", { ns: "runLog" })
								})]
							})
						]
					}), !isError && /* @__PURE__ */ jsxs(Fragment$1, { children: [
						currentTab === "RESULT" && workflowProcessData.humanInputFormDataList && workflowProcessData.humanInputFormDataList.length > 0 && /* @__PURE__ */ jsx("div", {
							className: "px-4 pt-4",
							children: /* @__PURE__ */ jsx(HumanInputFormList, {
								humanInputFormDataList: workflowProcessData.humanInputFormDataList,
								onHumanInputFormSubmit: handleSubmitHumanInputForm
							})
						}),
						currentTab === "RESULT" && workflowProcessData.humanInputFilledFormDataList && workflowProcessData.humanInputFilledFormDataList.length > 0 && /* @__PURE__ */ jsx("div", {
							className: "px-4 pt-4",
							children: /* @__PURE__ */ jsx(HumanInputFilledFormList, { humanInputFilledFormDataList: workflowProcessData.humanInputFilledFormDataList })
						}),
						/* @__PURE__ */ jsx(result_tab_default, {
							data: workflowProcessData,
							content,
							currentTab
						})
					] })] }),
					!workflowProcessData && taskId && /* @__PURE__ */ jsxs("div", {
						className: cn("system-2xs-medium-uppercase sticky left-0 top-0 flex w-full items-center rounded-t-2xl bg-components-actionbar-bg p-4 pb-3 text-text-accent-secondary", isError && "text-text-destructive"),
						children: [
							/* @__PURE__ */ jsx(Wg, { className: "mr-1 h-3 w-3" }),
							/* @__PURE__ */ jsx("span", { children: t("generation.execution", { ns: "share" }) }),
							/* @__PURE__ */ jsx("span", {
								className: "px-1",
								children: "·"
							}),
							/* @__PURE__ */ jsx("span", { children: `${taskId}${depth > 1 ? `-${depth - 1}` : ""}` })
						]
					}),
					isError && /* @__PURE__ */ jsx("div", {
						className: "body-lg-regular p-4 pt-0 text-text-quaternary",
						children: t("generation.batchFailed.outputPlaceholder", { ns: "share" })
					}),
					!workflowProcessData && !isError && typeof content === "string" && /* @__PURE__ */ jsx("div", {
						className: cn("p-4", taskId && "pt-0"),
						children: /* @__PURE__ */ jsx(Markdown, { content })
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: cn("system-xs-regular relative mt-1 h-4 px-4 text-text-quaternary", isMobile && (childMessageId || isQuerying) && depth < 3 && "pl-10"),
				children: [!isWorkflow && /* @__PURE__ */ jsxs("span", { children: [
					content?.length,
					" ",
					t("unit.char", { ns: "common" })
				] }), /* @__PURE__ */ jsxs("div", {
					className: "absolute bottom-1 right-2 flex items-center",
					children: [
						!isInWebApp && appSourceType !== AppSourceType.installedApp && !isResponding && /* @__PURE__ */ jsx("div", {
							className: "ml-1 flex items-center gap-0.5 rounded-[10px] border-[0.5px] border-components-actionbar-border bg-components-actionbar-bg p-0.5 shadow-md backdrop-blur-sm",
							children: /* @__PURE__ */ jsx(ActionButton, {
								disabled: isError || !messageId,
								onClick: handleOpenLogModal,
								children: /* @__PURE__ */ jsx($C, { className: "h-4 w-4" })
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "ml-1 flex items-center gap-0.5 rounded-[10px] border-[0.5px] border-components-actionbar-border bg-components-actionbar-bg p-0.5 shadow-md backdrop-blur-sm",
							children: [
								moreLikeThis && !isTryApp && /* @__PURE__ */ jsx(ActionButton, {
									state: depth === MAX_DEPTH ? ActionButtonState.Disabled : ActionButtonState.Default,
									disabled: depth === MAX_DEPTH,
									onClick: handleMoreLikeThis,
									children: /* @__PURE__ */ jsx(OA, { className: "h-4 w-4" })
								}),
								isShowTextToSpeech && !isTryApp && /* @__PURE__ */ jsx(AudioBtn, {
									id: messageId,
									voice: config?.text_to_speech?.voice
								}),
								(currentTab === "RESULT" && workflowProcessData?.resultText || !isWorkflow) && /* @__PURE__ */ jsx(ActionButton, {
									disabled: isError || !messageId,
									onClick: () => {
										const copyContent = isWorkflow ? workflowProcessData?.resultText : content;
										if (typeof copyContent === "string") (0, import_copy_to_clipboard.default)(copyContent);
										else (0, import_copy_to_clipboard.default)(JSON.stringify(copyContent));
										Toast.notify({
											type: "success",
											message: t("actionMsg.copySuccessfully", { ns: "common" })
										});
									},
									children: /* @__PURE__ */ jsx(B7, { className: "h-4 w-4" })
								}),
								isInWebApp && isError && /* @__PURE__ */ jsx(ActionButton, {
									onClick: onRetry,
									children: /* @__PURE__ */ jsx(uI, { className: "h-4 w-4" })
								}),
								isInWebApp && !isWorkflow && !isTryApp && /* @__PURE__ */ jsx(ActionButton, {
									disabled: isError || !messageId,
									onClick: () => {
										onSave?.(messageId);
									},
									children: /* @__PURE__ */ jsx(H4, { className: "h-4 w-4" })
								})
							]
						}),
						(supportFeedback || isInWebApp) && !isWorkflow && !isTryApp && !isError && messageId && /* @__PURE__ */ jsxs("div", {
							className: "ml-1 flex items-center gap-0.5 rounded-[10px] border-[0.5px] border-components-actionbar-border bg-components-actionbar-bg p-0.5 shadow-md backdrop-blur-sm",
							children: [
								!feedback?.rating && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(ActionButton, {
									onClick: () => onFeedback?.({ rating: "like" }),
									children: /* @__PURE__ */ jsx(aB, { className: "h-4 w-4" })
								}), /* @__PURE__ */ jsx(ActionButton, {
									onClick: () => onFeedback?.({ rating: "dislike" }),
									children: /* @__PURE__ */ jsx(cB, { className: "h-4 w-4" })
								})] }),
								feedback?.rating === "like" && /* @__PURE__ */ jsx(ActionButton, {
									state: ActionButtonState.Active,
									onClick: () => onFeedback?.({ rating: null }),
									children: /* @__PURE__ */ jsx(aB, { className: "h-4 w-4" })
								}),
								feedback?.rating === "dislike" && /* @__PURE__ */ jsx(ActionButton, {
									state: ActionButtonState.Destructive,
									onClick: () => onFeedback?.({ rating: null }),
									children: /* @__PURE__ */ jsx(cB, { className: "h-4 w-4" })
								})
							]
						})
					]
				})]
			}),
			!isTop && /* @__PURE__ */ jsxs("div", {
				className: cn("absolute top-[-32px] flex h-[33px] w-4 justify-center", isMobile ? "left-[17px]" : "left-[50%] translate-x-[-50%]"),
				children: [/* @__PURE__ */ jsx("div", { className: "h-full w-0.5 bg-divider-regular" }), /* @__PURE__ */ jsx("div", {
					className: cn("absolute left-0 flex h-4 w-4 items-center justify-center rounded-2xl border-[0.5px] border-divider-subtle bg-util-colors-blue-blue-500 shadow-xs", isMobile ? "top-[3.5px]" : "top-2"),
					children: /* @__PURE__ */ jsx(WA, { className: "h-3 w-3 text-text-primary-on-surface" })
				})]
			})
		] })]
	}), (childMessageId || isQuerying) && depth < 3 && /* @__PURE__ */ jsx(GenerationItem, { ...childProps })] });
};
var item_default = React$1.memo(GenerationItem);
//#endregion
//#region app/components/app/configuration/base/group-name/index.tsx
var GroupName = ({ name }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-1 flex items-center",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mr-3 text-xs font-semibold uppercase leading-[18px] text-text-tertiary",
			children: name
		}), /* @__PURE__ */ jsx("div", {
			className: "h-px grow",
			style: { background: "linear-gradient(270deg, rgba(243, 244, 246, 0) 0%, #F3F4F6 100%)" }
		})]
	});
};
var group_name_default = React$1.memo(GroupName);
var style_module_default = {
	mask: "_mask_1krq0_1",
	icon: "_icon_1krq0_5"
};
//#endregion
//#region app/components/app/configuration/base/warning-mask/index.tsx
var warningIcon = /* @__PURE__ */ jsx("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 20 20",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ jsx("path", {
		d: "M9.99996 13.3334V10.0001M9.99996 6.66675H10.0083M18.3333 10.0001C18.3333 14.6025 14.6023 18.3334 9.99996 18.3334C5.39759 18.3334 1.66663 14.6025 1.66663 10.0001C1.66663 5.39771 5.39759 1.66675 9.99996 1.66675C14.6023 1.66675 18.3333 5.39771 18.3333 10.0001Z",
		stroke: "#F79009",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
});
var WarningMask = ({ title, description, footer }) => {
	return /* @__PURE__ */ jsx("div", {
		className: `${style_module_default.mask} absolute inset-0 z-10 bg-components-panel-bg-blur pt-16`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto px-10",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: `${style_module_default.icon} flex h-11 w-11 items-center justify-center rounded-xl bg-components-panel-bg`,
					children: warningIcon
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-4 text-[24px] font-semibold leading-normal text-text-primary",
					children: title
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-3 text-base text-text-secondary",
					children: description
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: footer
				})
			]
		})
	});
};
var warning_mask_default = React$1.memo(WarningMask);
//#endregion
//#region app/components/app/configuration/base/warning-mask/cannot-query-dataset.tsx
var FormattingChanged$1 = ({ onConfirm }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(warning_mask_default, {
		title: t("feature.dataSet.queryVariable.unableToQueryDataSet", { ns: "appDebug" }),
		description: t("feature.dataSet.queryVariable.unableToQueryDataSetTip", { ns: "appDebug" }),
		footer: /* @__PURE__ */ jsx("div", {
			className: "flex space-x-2",
			children: /* @__PURE__ */ jsx(Button, {
				variant: "primary",
				className: "flex !w-[96px] justify-start",
				onClick: onConfirm,
				children: /* @__PURE__ */ jsx("span", {
					className: "text-[13px] font-medium",
					children: t("feature.dataSet.queryVariable.ok", { ns: "appDebug" })
				})
			})
		})
	});
};
var cannot_query_dataset_default = React$1.memo(FormattingChanged$1);
//#endregion
//#region app/components/app/configuration/base/warning-mask/formatting-changed.tsx
var icon$12 = /* @__PURE__ */ jsx("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ jsx("path", {
		d: "M1.33337 6.66667C1.33337 6.66667 2.67003 4.84548 3.75593 3.75883C4.84183 2.67218 6.34244 2 8.00004 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8.00004 14C5.26465 14 2.95678 12.1695 2.23455 9.66667M1.33337 6.66667V2.66667M1.33337 6.66667H5.33337",
		stroke: "white",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
});
var FormattingChanged = ({ onConfirm, onCancel }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(warning_mask_default, {
		title: t("formattingChangedTitle", { ns: "appDebug" }),
		description: t("formattingChangedText", { ns: "appDebug" }),
		footer: /* @__PURE__ */ jsxs("div", {
			className: "flex space-x-2",
			children: [/* @__PURE__ */ jsxs(Button, {
				variant: "primary",
				className: "flex space-x-2",
				onClick: onConfirm,
				children: [icon$12, /* @__PURE__ */ jsx("span", { children: t("operation.refresh", { ns: "common" }) })]
			}), /* @__PURE__ */ jsx(Button, {
				onClick: onCancel,
				children: t("operation.cancel", { ns: "common" })
			})]
		})
	});
};
var formatting_changed_default = React$1.memo(FormattingChanged);
//#endregion
//#region app/components/app/configuration/base/warning-mask/has-not-set-api.tsx
var HasNotSetAPI = ({ onSetting }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("div", {
		className: "flex grow flex-col items-center justify-center pb-[120px]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full max-w-[400px] flex-col gap-2 px-4 py-4",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex h-10 w-10 items-center justify-center rounded-[10px]",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex h-full w-full items-center justify-center overflow-hidden rounded-[10px] border-[0.5px] border-components-card-border bg-components-card-bg p-1 shadow-lg backdrop-blur-[5px]",
						children: /* @__PURE__ */ jsx("span", { className: "i-ri-brain-2-line h-5 w-5 text-text-tertiary" })
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-text-secondary system-md-semibold",
						children: t("noModelProviderConfigured", { ns: "appDebug" })
					}), /* @__PURE__ */ jsx("div", {
						className: "text-text-tertiary system-xs-regular",
						children: t("noModelProviderConfiguredTip", { ns: "appDebug" })
					})]
				}),
				/* @__PURE__ */ jsxs("button", {
					type: "button",
					className: "flex w-fit items-center gap-1 rounded-lg border-[0.5px] border-components-button-secondary-border bg-components-button-secondary-bg px-3 py-2 shadow-xs backdrop-blur-[5px]",
					onClick: onSetting,
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-components-button-secondary-accent-text system-sm-medium",
						children: t("manageModels", { ns: "appDebug" })
					}), /* @__PURE__ */ jsx("span", { className: "i-ri-arrow-right-line h-4 w-4 text-components-button-secondary-accent-text" })]
				})
			]
		})
	});
};
var has_not_set_api_default = React$1.memo(HasNotSetAPI);
//#endregion
//#region app/components/app/configuration/debug/debug-with-multiple-model/context.ts
var DebugWithMultipleModelContext = createContext$1({
	multipleModelConfigs: [],
	onMultipleModelConfigsChange: noop,
	onDebugWithMultipleModelChange: noop
});
var useDebugWithMultipleModelContext = () => useContext$1(DebugWithMultipleModelContext);
//#endregion
//#region app/components/app/configuration/debug/debug-with-multiple-model/context-provider.tsx
var DebugWithMultipleModelContextProvider = ({ children, onMultipleModelConfigsChange, multipleModelConfigs, onDebugWithMultipleModelChange, checkCanSend }) => {
	return /* @__PURE__ */ jsx(DebugWithMultipleModelContext.Provider, {
		value: {
			onMultipleModelConfigsChange,
			multipleModelConfigs,
			onDebugWithMultipleModelChange,
			checkCanSend
		},
		children
	});
};
//#endregion
//#region app/components/app/configuration/debug/debug-with-multiple-model/chat-item.tsx
var ChatItem = ({ modelAndParameter }) => {
	const { userProfile } = useAppContext();
	const { modelConfig, appId, inputs, collectionList } = useDebugConfigurationContext();
	const { textGenerationModelList } = useProviderContext();
	const features = useFeatures((s) => s.features);
	const configTemplate = useConfigFromDebugContext();
	const config = useMemo(() => {
		return {
			...configTemplate,
			more_like_this: features.moreLikeThis,
			opening_statement: features.opening?.enabled ? features.opening?.opening_statement || "" : "",
			suggested_questions: features.opening?.enabled ? features.opening?.suggested_questions || [] : [],
			sensitive_word_avoidance: features.moderation,
			speech_to_text: features.speech2text,
			text_to_speech: features.text2speech,
			file_upload: features.file,
			suggested_questions_after_answer: features.suggested,
			retriever_resource: features.citation,
			annotation_reply: features.annotationReply
		};
	}, [configTemplate, features]);
	const { chatList, isResponding, handleSend, suggestedQuestions, handleRestart } = useChat(config, {
		inputs,
		inputsForm: useMemo(() => {
			return modelConfig.configs.prompt_variables.filter((item) => item.type !== "api").map((item) => ({
				...item,
				label: item.name,
				variable: item.key
			}));
		}, [modelConfig.configs.prompt_variables])
	}, [], (taskId) => stopChatMessageResponding$1(appId, taskId));
	useFormattingChangedSubscription(chatList);
	const doSend = useCallback((message, files) => {
		const currentModel = textGenerationModelList.find((item) => item.provider === modelAndParameter.provider)?.models.find((model) => model.model === modelAndParameter.model);
		const supportVision = currentModel?.features?.includes(ModelFeatureEnum.vision);
		const data = {
			query: message,
			inputs,
			model_config: {
				...config,
				model: {
					provider: modelAndParameter.provider,
					name: modelAndParameter.model,
					mode: currentModel?.model_properties.mode,
					completion_params: modelAndParameter.parameters
				}
			},
			parent_message_id: getLastAnswer(chatList)?.id || null
		};
		if (config.file_upload.enabled && files?.length && supportVision) data.files = files;
		handleSend(`apps/${appId}/chat-messages`, data, {
			onGetConversationMessages: (conversationId, getAbortController) => fetchConversationMessages(appId, conversationId, getAbortController),
			onGetSuggestedQuestions: (responseItemId, getAbortController) => fetchSuggestedQuestions$1(appId, responseItemId, getAbortController)
		});
	}, [
		appId,
		chatList,
		config,
		handleSend,
		inputs,
		modelAndParameter.model,
		modelAndParameter.parameters,
		modelAndParameter.provider,
		textGenerationModelList
	]);
	const { eventEmitter } = useEventEmitterContextContext();
	eventEmitter?.useSubscription((v) => {
		if (v.type === "APP_CHAT_WITH_MULTIPLE_MODEL") doSend(v.payload.message, v.payload.files);
		if (v.type === "APP_CHAT_WITH_MULTIPLE_MODEL_RESTART") handleRestart();
	});
	const allToolIcons = useMemo(() => {
		const icons = {};
		modelConfig.agentConfig.tools?.forEach((item) => {
			icons[item.tool_name] = collectionList.find((collection) => canFindTool(collection.id, item.provider_id))?.icon;
		});
		return icons;
	}, [collectionList, modelConfig.agentConfig.tools]);
	if (!chatList.length) return null;
	return /* @__PURE__ */ jsx(chat_default$1, {
		config,
		chatList,
		isResponding,
		noChatInput: true,
		noStopResponding: true,
		chatContainerClassName: "p-4",
		chatFooterClassName: "p-4 pb-0",
		suggestedQuestions,
		onSend: doSend,
		showPromptLog: true,
		questionIcon: /* @__PURE__ */ jsx(Avatar, {
			avatar: userProfile.avatar_url,
			name: userProfile.name,
			size: "xl"
		}),
		allToolIcons,
		hideLogModal: true,
		noSpacing: true
	});
};
var chat_item_default = memo(ChatItem);
//#endregion
//#region app/components/app/configuration/debug/debug-with-multiple-model/model-parameter-trigger.tsx
var ModelParameterTrigger = ({ modelAndParameter }) => {
	const { t } = useTranslation();
	const { isAdvancedMode } = useDebugConfigurationContext();
	const { multipleModelConfigs, onMultipleModelConfigsChange, onDebugWithMultipleModelChange } = useDebugWithMultipleModelContext();
	const { modelProviders } = useProviderContext();
	const index = multipleModelConfigs.findIndex((v) => v.id === modelAndParameter.id);
	const providerMeta = modelProviders.find((provider) => provider.provider === modelAndParameter.provider);
	const credentialState = useCredentialPanelState(providerMeta);
	const handleSelectModel = ({ modelId, provider }) => {
		const newModelConfigs = [...multipleModelConfigs];
		newModelConfigs[index] = {
			...newModelConfigs[index],
			model: modelId,
			provider
		};
		onMultipleModelConfigsChange(true, newModelConfigs);
	};
	const handleParamsChange = (params) => {
		const newModelConfigs = [...multipleModelConfigs];
		newModelConfigs[index] = {
			...newModelConfigs[index],
			parameters: params
		};
		onMultipleModelConfigsChange(true, newModelConfigs);
	};
	return /* @__PURE__ */ jsx(ModelParameterModal$1, {
		isAdvancedMode,
		provider: modelAndParameter.provider,
		modelId: modelAndParameter.model,
		completionParams: modelAndParameter.parameters,
		onCompletionParamsChange: handleParamsChange,
		setModel: handleSelectModel,
		debugWithMultipleModel: true,
		onDebugWithMultipleModelChange: () => onDebugWithMultipleModelChange(modelAndParameter),
		renderTrigger: ({ open, currentProvider, currentModel }) => {
			const status = deriveModelStatus(modelAndParameter.model, modelAndParameter.provider, providerMeta, currentModel ?? void 0, credentialState);
			const iconProvider = currentProvider || providerMeta;
			const statusLabelKey = DERIVED_MODEL_STATUS_BADGE_I18N[status];
			const statusTooltipKey = DERIVED_MODEL_STATUS_TOOLTIP_I18N[status];
			const isEmpty = status === "empty";
			const isActive = status === "active";
			return /* @__PURE__ */ jsxs("div", {
				className: `
              flex h-8 max-w-[200px] cursor-pointer items-center rounded-lg px-2
              ${open && "bg-state-base-hover"}
              ${!isEmpty && !isActive && "!bg-[#FFFAEB]"}
            `,
				children: [
					iconProvider && !isEmpty && /* @__PURE__ */ jsx(ModelIcon, {
						className: "mr-1 !h-4 !w-4",
						provider: iconProvider,
						modelName: currentModel?.model || modelAndParameter.model
					}),
					(!iconProvider || isEmpty) && /* @__PURE__ */ jsx("div", {
						className: "mr-1 flex h-4 w-4 items-center justify-center rounded",
						children: /* @__PURE__ */ jsx("span", { className: "i-custom-vender-line-shapes-cube-outline h-4 w-4 text-text-accent" })
					}),
					currentModel && /* @__PURE__ */ jsx(ModelName, {
						className: "mr-0.5 text-text-secondary",
						modelItem: currentModel
					}),
					!currentModel && !isEmpty && /* @__PURE__ */ jsx("div", {
						className: "mr-0.5 truncate text-[13px] font-medium text-text-secondary",
						children: modelAndParameter.model
					}),
					isEmpty && /* @__PURE__ */ jsx("div", {
						className: "mr-0.5 truncate text-[13px] font-medium text-text-accent",
						children: t("modelProvider.selectModel", { ns: "common" })
					}),
					/* @__PURE__ */ jsx("span", { className: `i-ri-arrow-down-s-line h-3 w-3 ${isEmpty ? "text-text-accent" : "text-text-tertiary"}` }),
					!isEmpty && !isActive && statusLabelKey && /* @__PURE__ */ jsx(tooltip_default, {
						popupContent: t(statusTooltipKey || statusLabelKey, { ns: "common" }),
						children: /* @__PURE__ */ jsx("span", { className: "i-custom-vender-line-alertsAndFeedback-alert-triangle h-4 w-4 text-[#F79009]" })
					})
				]
			});
		}
	});
};
var model_parameter_trigger_default = memo(ModelParameterTrigger);
//#endregion
//#region app/components/base/text-generation/hooks.ts
var useTextGeneration = () => {
	const { t } = useTranslation();
	const { notify } = useToastContext();
	const [isResponding, setIsResponding] = useState(false);
	const [completion, setCompletion] = useState("");
	const [messageId, setMessageId] = useState(null);
	const handleSend = async (url, data) => {
		if (isResponding) {
			notify({
				type: "info",
				message: t("errorMessage.waitForResponse", { ns: "appDebug" })
			});
			return false;
		}
		setIsResponding(true);
		setCompletion("");
		setMessageId("");
		let res = [];
		ssePost(url, { body: {
			response_mode: "streaming",
			...data
		} }, {
			onData: (data, _isFirstMessage, { messageId }) => {
				res.push(data);
				setCompletion(res.join(""));
				setMessageId(messageId);
			},
			onMessageReplace: (messageReplace) => {
				res = [messageReplace.answer];
				setCompletion(res.join(""));
			},
			onCompleted() {
				setIsResponding(false);
			},
			onError() {
				setIsResponding(false);
			}
		});
		return true;
	};
	return {
		completion,
		isResponding,
		setIsResponding,
		handleSend,
		messageId
	};
};
//#endregion
//#region app/components/app/configuration/debug/debug-with-multiple-model/text-generation-item.tsx
var TextGenerationItem = ({ modelAndParameter }) => {
	const { isAdvancedMode, modelConfig, appId, inputs, promptMode, speechToTextConfig, introduction, suggestedQuestionsAfterAnswerConfig, citationConfig, externalDataToolsConfig, chatPromptConfig, completionPromptConfig, dataSets, datasetConfigs } = useDebugConfigurationContext();
	const { textGenerationModelList } = useProviderContext();
	const features = useFeatures((s) => s.features);
	const postDatasets = dataSets.map(({ id }) => ({ dataset: {
		enabled: true,
		id
	} }));
	const contextVar = modelConfig.configs.prompt_variables.find((item) => item.is_context_var)?.key;
	const config = {
		pre_prompt: !isAdvancedMode ? modelConfig.configs.prompt_template : "",
		prompt_type: promptMode,
		chat_prompt_config: isAdvancedMode ? chatPromptConfig : cloneDeep(DEFAULT_CHAT_PROMPT_CONFIG),
		completion_prompt_config: isAdvancedMode ? completionPromptConfig : cloneDeep(DEFAULT_COMPLETION_PROMPT_CONFIG),
		user_input_form: promptVariablesToUserInputsForm(modelConfig.configs.prompt_variables),
		dataset_query_variable: contextVar || "",
		more_like_this: features.moreLikeThis,
		sensitive_word_avoidance: features.moderation,
		text_to_speech: features.text2speech,
		file_upload: features.file,
		opening_statement: introduction,
		speech_to_text: speechToTextConfig,
		suggested_questions_after_answer: suggestedQuestionsAfterAnswerConfig,
		retriever_resource: citationConfig,
		external_data_tools: externalDataToolsConfig,
		agent_mode: {
			enabled: false,
			tools: []
		},
		dataset_configs: {
			...datasetConfigs,
			datasets: { datasets: [...postDatasets] }
		},
		system_parameters: modelConfig.system_parameters
	};
	const { completion, handleSend, isResponding, messageId } = useTextGeneration();
	const doSend = (message, files) => {
		const currentModel = textGenerationModelList.find((item) => item.provider === modelAndParameter.provider)?.models.find((model) => model.model === modelAndParameter.model);
		const data = {
			inputs,
			model_config: {
				...config,
				model: {
					provider: modelAndParameter.provider,
					name: modelAndParameter.model,
					mode: currentModel?.model_properties.mode,
					completion_params: modelAndParameter.parameters
				}
			}
		};
		if (config.file_upload.enabled && files && files?.length > 0) data.files = files.map((item) => {
			if (item.transfer_method === TransferMethod.local_file) return {
				...item,
				url: ""
			};
			return item;
		});
		handleSend(`apps/${appId}/completion-messages`, data);
	};
	const { eventEmitter } = useEventEmitterContextContext();
	eventEmitter?.useSubscription((v) => {
		if (v.type === "APP_CHAT_WITH_MULTIPLE_MODEL") doSend(v.payload.message, v.payload.files);
	});
	return /* @__PURE__ */ jsx(item_default, {
		appSourceType: AppSourceType.webApp,
		className: "flex h-full flex-col overflow-y-auto border-none",
		content: completion,
		isLoading: !completion && isResponding,
		isResponding,
		siteInfo: null,
		messageId,
		isError: false,
		onRetry: noop,
		inSidePanel: true
	});
};
var text_generation_item_default = memo(TextGenerationItem);
//#endregion
//#region app/components/app/configuration/debug/debug-with-multiple-model/debug-item.tsx
var DebugItem = ({ modelAndParameter, className, style }) => {
	const { t } = useTranslation();
	const { mode } = useDebugConfigurationContext();
	const { multipleModelConfigs, onMultipleModelConfigsChange, onDebugWithMultipleModelChange } = useDebugWithMultipleModelContext();
	const { textGenerationModelList } = useProviderContext();
	const index = multipleModelConfigs.findIndex((v) => v.id === modelAndParameter.id);
	const currentProvider = textGenerationModelList.find((item) => item.provider === modelAndParameter.provider);
	const currentModel = currentProvider?.models.find((item) => item.model === modelAndParameter.model);
	const handleSelect = (item) => {
		if (item.value === "duplicate") {
			if (multipleModelConfigs.length >= 4) return;
			onMultipleModelConfigsChange(true, [
				...multipleModelConfigs.slice(0, index + 1),
				{
					...modelAndParameter,
					id: `${Date.now()}`
				},
				...multipleModelConfigs.slice(index + 1)
			]);
		}
		if (item.value === "debug-as-single-model") onDebugWithMultipleModelChange(modelAndParameter);
		if (item.value === "remove") onMultipleModelConfigsChange(true, multipleModelConfigs.filter((item) => item.id !== modelAndParameter.id));
	};
	return /* @__PURE__ */ jsxs("div", {
		className: `flex min-w-[320px] flex-col rounded-xl bg-background-section-burn ${className}`,
		style,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex h-10 shrink-0 items-center justify-between border-b-[0.5px] border-divider-regular px-3",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex h-5 w-6 items-center justify-center font-medium italic text-text-tertiary",
					children: ["#", index + 1]
				}),
				/* @__PURE__ */ jsx(model_parameter_trigger_default, { modelAndParameter }),
				/* @__PURE__ */ jsx(Dropdown, {
					onSelect: handleSelect,
					items: [...multipleModelConfigs.length <= 3 ? [{
						value: "duplicate",
						text: t("duplicateModel", { ns: "appDebug" })
					}] : [], ...modelAndParameter.provider && modelAndParameter.model ? [{
						value: "debug-as-single-model",
						text: t("debugAsSingleModel", { ns: "appDebug" })
					}] : []],
					secondItems: multipleModelConfigs.length > 2 ? [{
						value: "remove",
						text: t("operation.remove", { ns: "common" })
					}] : void 0
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			style: { height: "calc(100% - 40px)" },
			children: [(mode === AppModeEnum.CHAT || mode === AppModeEnum.AGENT_CHAT) && currentProvider && currentModel && currentModel.status === ModelStatusEnum.active && /* @__PURE__ */ jsx(chat_item_default, { modelAndParameter }), mode === AppModeEnum.COMPLETION && currentProvider && currentModel && currentModel.status === ModelStatusEnum.active && /* @__PURE__ */ jsx(text_generation_item_default, { modelAndParameter })]
		})]
	});
};
var debug_item_default = memo(DebugItem);
//#endregion
//#region app/components/app/configuration/debug/debug-with-multiple-model/index.tsx
var DebugWithMultipleModel = () => {
	const { mode, inputs, modelConfig } = useDebugConfigurationContext();
	const speech2text = useFeatures((s) => s.features.speech2text);
	const file = useFeatures((s) => s.features.file);
	const { multipleModelConfigs, checkCanSend } = useDebugWithMultipleModelContext();
	const { eventEmitter } = useEventEmitterContextContext();
	const isChatMode = mode === AppModeEnum.CHAT || mode === AppModeEnum.AGENT_CHAT;
	const handleSend = useCallback((message, files) => {
		if (checkCanSend && !checkCanSend()) return;
		eventEmitter?.emit({
			type: APP_CHAT_WITH_MULTIPLE_MODEL,
			payload: {
				message,
				files
			}
		});
	}, [eventEmitter, checkCanSend]);
	const twoLine = multipleModelConfigs.length === 2;
	const threeLine = multipleModelConfigs.length === 3;
	const fourLine = multipleModelConfigs.length === 4;
	const size = useMemo(() => {
		let width = "";
		let height = "";
		if (twoLine) {
			width = "calc(50% - 4px - 24px)";
			height = "100%";
		}
		if (threeLine) {
			width = "calc(33.3% - 5.33px - 16px)";
			height = "100%";
		}
		if (fourLine) {
			width = "calc(50% - 4px - 24px)";
			height = "calc(50% - 4px)";
		}
		return {
			width,
			height
		};
	}, [
		twoLine,
		threeLine,
		fourLine
	]);
	const position = useCallback((idx) => {
		let translateX = "0";
		let translateY = "0";
		if (twoLine && idx === 1) translateX = "calc(100% + 8px)";
		if (threeLine && idx === 1) translateX = "calc(100% + 8px)";
		if (threeLine && idx === 2) translateX = "calc(200% + 16px)";
		if (fourLine && idx === 1) translateX = "calc(100% + 8px)";
		if (fourLine && idx === 2) translateY = "calc(100% + 8px)";
		if (fourLine && idx === 3) {
			translateX = "calc(100% + 8px)";
			translateY = "calc(100% + 8px)";
		}
		return {
			translateX,
			translateY
		};
	}, [
		twoLine,
		threeLine,
		fourLine
	]);
	const setShowAppConfigureFeaturesModal = useStore$2((s) => s.setShowAppConfigureFeaturesModal);
	const inputsForm = modelConfig.configs.prompt_variables.filter((item) => item.type !== "api").map((item) => ({
		...item,
		label: item.name,
		variable: item.key,
		hide: item.hide ?? false,
		required: item.required ?? false
	}));
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col",
		children: [/* @__PURE__ */ jsx("div", {
			className: `
          relative mb-3 grow overflow-auto px-6
        `,
			style: { height: isChatMode ? "calc(100% - 60px)" : "100%" },
			children: multipleModelConfigs.map((modelConfig, index) => /* @__PURE__ */ jsx(debug_item_default, {
				modelAndParameter: modelConfig,
				className: `
                absolute left-6 top-0 min-h-[200px]
                ${twoLine && index === 0 && "mr-2"}
                ${threeLine && (index === 0 || index === 1) && "mr-2"}
                ${fourLine && (index === 0 || index === 2) && "mr-2"}
                ${fourLine && (index === 0 || index === 1) && "mb-2"}
              `,
				style: {
					width: size.width,
					height: size.height,
					transform: `translateX(${position(index).translateX}) translateY(${position(index).translateY})`
				}
			}, modelConfig.id))
		}), isChatMode && /* @__PURE__ */ jsx("div", {
			className: "shrink-0 px-6 pb-0",
			children: /* @__PURE__ */ jsx(ChatInputAreaWrapper, {
				botName: "Bot",
				showFeatureBar: true,
				showFileUpload: false,
				onFeatureBarClick: setShowAppConfigureFeaturesModal,
				onSend: handleSend,
				speechToTextConfig: speech2text,
				visionConfig: file,
				inputs,
				inputsForm
			})
		})]
	});
};
var DebugWithMultipleModelMemoed = memo(DebugWithMultipleModel);
var DebugWithMultipleModelWrapper = ({ onMultipleModelConfigsChange, multipleModelConfigs, onDebugWithMultipleModelChange, checkCanSend }) => {
	return /* @__PURE__ */ jsx(DebugWithMultipleModelContextProvider, {
		onMultipleModelConfigsChange,
		multipleModelConfigs,
		onDebugWithMultipleModelChange,
		checkCanSend,
		children: /* @__PURE__ */ jsx(DebugWithMultipleModelMemoed, {})
	});
};
var debug_with_multiple_model_default = memo(DebugWithMultipleModelWrapper);
//#endregion
//#region app/components/app/configuration/debug/debug-with-single-model/index.tsx
var DebugWithSingleModel = ({ ref, checkCanSend }) => {
	const { userProfile } = useAppContext();
	const { readonly, modelConfig, appId, inputs, collectionList, completionParams } = useDebugConfigurationContext();
	const { textGenerationModelList } = useProviderContext();
	const features = useFeatures((s) => s.features);
	const configTemplate = useConfigFromDebugContext();
	const config = useMemo(() => {
		return {
			...configTemplate,
			more_like_this: features.moreLikeThis,
			opening_statement: features.opening?.enabled ? features.opening?.opening_statement || "" : "",
			suggested_questions: features.opening?.enabled ? features.opening?.suggested_questions || [] : [],
			sensitive_word_avoidance: features.moderation,
			speech_to_text: features.speech2text,
			text_to_speech: features.text2speech,
			file_upload: features.file,
			suggested_questions_after_answer: features.suggested,
			retriever_resource: features.citation,
			annotation_reply: features.annotationReply
		};
	}, [configTemplate, features]);
	const inputsForm = useMemo(() => {
		return modelConfig.configs.prompt_variables.filter((item) => item.type !== "api").map((item) => ({
			...item,
			label: item.name,
			variable: item.key
		}));
	}, [modelConfig.configs.prompt_variables]);
	const { chatList, setTargetMessageId, isResponding, handleSend, suggestedQuestions, handleStop, handleRestart, handleAnnotationAdded, handleAnnotationEdited, handleAnnotationRemoved } = useChat(config, {
		inputs,
		inputsForm
	}, [], (taskId) => stopChatMessageResponding$1(appId, taskId));
	useFormattingChangedSubscription(chatList);
	const doSend = useCallback((message, files, isRegenerate = false, parentAnswer = null) => {
		if (checkCanSend && !checkCanSend()) return;
		const supportVision = (textGenerationModelList.find((item) => item.provider === modelConfig.provider)?.models.find((model) => model.model === modelConfig.model_id))?.features?.includes(ModelFeatureEnum.vision);
		const data = {
			query: message,
			inputs,
			model_config: {
				...config,
				model: {
					provider: modelConfig.provider,
					name: modelConfig.model_id,
					mode: modelConfig.mode,
					completion_params: completionParams
				}
			},
			parent_message_id: (isRegenerate ? parentAnswer?.id : getLastAnswer(chatList)?.id) || null
		};
		if (config.file_upload?.enabled && files?.length && supportVision) data.files = files;
		handleSend(`apps/${appId}/chat-messages`, data, {
			onGetConversationMessages: (conversationId, getAbortController) => fetchConversationMessages(appId, conversationId, getAbortController),
			onGetSuggestedQuestions: (responseItemId, getAbortController) => fetchSuggestedQuestions$1(appId, responseItemId, getAbortController)
		});
	}, [
		appId,
		chatList,
		checkCanSend,
		completionParams,
		config,
		handleSend,
		inputs,
		modelConfig.mode,
		modelConfig.model_id,
		modelConfig.provider,
		textGenerationModelList
	]);
	const doRegenerate = useCallback((chatItem, editedQuestion) => {
		const question = editedQuestion ? chatItem : chatList.find((item) => item.id === chatItem.parentMessageId);
		const parentAnswer = chatList.find((item) => item.id === question.parentMessageId);
		doSend(editedQuestion ? editedQuestion.message : question.content, editedQuestion ? editedQuestion.files : question.message_files, true, isValidGeneratedAnswer(parentAnswer) ? parentAnswer : null);
	}, [chatList, doSend]);
	const allToolIcons = useMemo(() => {
		const icons = {};
		modelConfig.agentConfig.tools?.forEach((item) => {
			icons[item.tool_name] = collectionList.find((collection) => canFindTool(collection.id, item.provider_id))?.icon;
		});
		return icons;
	}, [collectionList, modelConfig.agentConfig.tools]);
	useImperativeHandle(ref, () => {
		return { handleRestart };
	}, [handleRestart]);
	return /* @__PURE__ */ jsx(chat_default$1, {
		readonly,
		config,
		chatList,
		isResponding,
		chatContainerClassName: "px-3 pt-6",
		chatFooterClassName: "px-3 pt-10 pb-0",
		showFeatureBar: true,
		showFileUpload: false,
		onFeatureBarClick: useStore$2((s) => s.setShowAppConfigureFeaturesModal),
		suggestedQuestions,
		onSend: doSend,
		inputs,
		inputsForm,
		onRegenerate: doRegenerate,
		switchSibling: (siblingMessageId) => setTargetMessageId(siblingMessageId),
		onStopResponding: handleStop,
		showPromptLog: true,
		questionIcon: /* @__PURE__ */ jsx(Avatar, {
			avatar: userProfile.avatar_url,
			name: userProfile.name,
			size: "xl"
		}),
		allToolIcons,
		onAnnotationEdited: handleAnnotationEdited,
		onAnnotationAdded: handleAnnotationAdded,
		onAnnotationRemoved: handleAnnotationRemoved,
		noSpacing: true
	});
};
DebugWithSingleModel.displayName = "DebugWithSingleModel";
var debug_with_single_model_default = memo(DebugWithSingleModel);
//#endregion
//#region app/components/app/configuration/debug/index.tsx
var Debug = ({ isAPIKeySet = true, onSetting, inputs, modelParameterParams, debugWithMultipleModel, multipleModelConfigs, onMultipleModelConfigsChange }) => {
	const { t } = useTranslation();
	const { readonly, appId, mode, modelModeType, hasSetBlockStatus, isAdvancedMode, promptMode, chatPromptConfig, completionPromptConfig, introduction, suggestedQuestionsAfterAnswerConfig, speechToTextConfig, textToSpeechConfig, citationConfig, formattingChanged, setFormattingChanged, dataSets, modelConfig, completionParams, hasSetContextVar, datasetConfigs, externalDataToolsConfig } = useContext$1(DebugConfigurationContext);
	const { eventEmitter } = useEventEmitterContextContext();
	const { data: text2speechDefaultModel } = useDefaultModel(ModelTypeEnum.textEmbedding);
	useEffect(() => {
		setAutoFreeze(false);
		return () => {
			setAutoFreeze(true);
		};
	}, []);
	const [isResponding, { setTrue: setRespondingTrue, setFalse: setRespondingFalse }] = useBoolean(false);
	const [isShowFormattingChangeConfirm, setIsShowFormattingChangeConfirm] = useState(false);
	const [isShowCannotQueryDataset, setShowCannotQueryDataset] = useState(false);
	useEffect(() => {
		if (formattingChanged) setIsShowFormattingChangeConfirm(true);
	}, [formattingChanged]);
	const debugWithSingleModelRef = React$1.useRef(null);
	const handleClearConversation = () => {
		debugWithSingleModelRef.current?.handleRestart();
	};
	const clearConversation = async () => {
		if (debugWithMultipleModel) {
			eventEmitter?.emit({ type: APP_CHAT_WITH_MULTIPLE_MODEL_RESTART });
			return;
		}
		handleClearConversation();
	};
	const handleConfirm = () => {
		clearConversation();
		setIsShowFormattingChangeConfirm(false);
		setFormattingChanged(false);
	};
	const handleCancel = () => {
		setIsShowFormattingChangeConfirm(false);
		setFormattingChanged(false);
	};
	const { notify } = useContext$1(ToastContext);
	const logError = useCallback((message) => {
		notify({
			type: "error",
			message
		});
	}, [notify]);
	const [completionFiles, setCompletionFiles] = useState([]);
	const checkCanSend = useCallback(() => {
		if (isAdvancedMode && mode !== AppModeEnum.COMPLETION) {
			if (modelModeType === ModelModeType.completion) {
				if (!hasSetBlockStatus.history) {
					notify({
						type: "error",
						message: t("otherError.historyNoBeEmpty", { ns: "appDebug" })
					});
					return false;
				}
				if (!hasSetBlockStatus.query) {
					notify({
						type: "error",
						message: t("otherError.queryNoBeEmpty", { ns: "appDebug" })
					});
					return false;
				}
			}
		}
		let hasEmptyInput = "";
		modelConfig.configs.prompt_variables.filter(({ key, name, required, type }) => {
			if (type !== "string" && type !== "paragraph" && type !== "select" && type !== "number") return false;
			return !key || !key.trim() || !name || !name.trim() || required || required === void 0 || required === null;
		}).forEach(({ key, name }) => {
			if (hasEmptyInput) return;
			if (!inputs[key]) hasEmptyInput = name;
		});
		if (hasEmptyInput) {
			logError(t("errorMessage.valueOfVarRequired", {
				ns: "appDebug",
				key: hasEmptyInput
			}));
			return false;
		}
		if (completionFiles.find((item) => item.transfer_method === TransferMethod.local_file && !item.upload_file_id)) {
			notify({
				type: "info",
				message: t("errorMessage.waitForFileUpload", { ns: "appDebug" })
			});
			return false;
		}
		return !hasEmptyInput;
	}, [
		completionFiles,
		hasSetBlockStatus.history,
		hasSetBlockStatus.query,
		inputs,
		isAdvancedMode,
		mode,
		modelConfig.configs.prompt_variables,
		t,
		logError,
		notify,
		modelModeType
	]);
	const [completionRes, setCompletionRes] = useState("");
	const [messageId, setMessageId] = useState(null);
	const features = useFeatures((s) => s.features);
	const featuresStore = useFeaturesStore();
	const sendTextCompletion = async () => {
		if (isResponding) {
			notify({
				type: "info",
				message: t("errorMessage.waitForResponse", { ns: "appDebug" })
			});
			return false;
		}
		if (dataSets.length > 0 && !hasSetContextVar) {
			setShowCannotQueryDataset(true);
			return true;
		}
		if (!checkCanSend()) return;
		const postDatasets = dataSets.map(({ id }) => ({ dataset: {
			enabled: true,
			id
		} }));
		const contextVar = modelConfig.configs.prompt_variables.find((item) => item.is_context_var)?.key;
		const postModelConfig = {
			pre_prompt: !isAdvancedMode ? modelConfig.configs.prompt_template : "",
			prompt_type: promptMode,
			chat_prompt_config: isAdvancedMode ? chatPromptConfig : cloneDeep(DEFAULT_CHAT_PROMPT_CONFIG),
			completion_prompt_config: isAdvancedMode ? completionPromptConfig : cloneDeep(DEFAULT_COMPLETION_PROMPT_CONFIG),
			user_input_form: promptVariablesToUserInputsForm(modelConfig.configs.prompt_variables),
			dataset_query_variable: contextVar || "",
			dataset_configs: {
				...datasetConfigs,
				datasets: { datasets: [...postDatasets] }
			},
			agent_mode: {
				enabled: false,
				tools: []
			},
			model: {
				provider: modelConfig.provider,
				name: modelConfig.model_id,
				mode: modelConfig.mode,
				completion_params: completionParams
			},
			more_like_this: features.moreLikeThis,
			sensitive_word_avoidance: features.moderation,
			text_to_speech: features.text2speech,
			file_upload: features.file,
			opening_statement: introduction,
			suggested_questions_after_answer: suggestedQuestionsAfterAnswerConfig,
			speech_to_text: speechToTextConfig,
			retriever_resource: citationConfig,
			system_parameters: modelConfig.system_parameters,
			external_data_tools: externalDataToolsConfig
		};
		const data = {
			inputs: formatBooleanInputs(modelConfig.configs.prompt_variables, inputs),
			model_config: postModelConfig
		};
		if (features.file.enabled && completionFiles && completionFiles?.length > 0) data.files = completionFiles.map((item) => {
			if (item.transfer_method === TransferMethod.local_file) return {
				...item,
				url: ""
			};
			return item;
		});
		setCompletionRes("");
		setMessageId("");
		let res = [];
		setRespondingTrue();
		sendCompletionMessage$1(appId, data, {
			onData: (data, _isFirstMessage, { messageId }) => {
				res.push(data);
				setCompletionRes(res.join(""));
				setMessageId(messageId);
			},
			onMessageReplace: (messageReplace) => {
				res = [messageReplace.answer];
				setCompletionRes(res.join(""));
			},
			onCompleted() {
				setRespondingFalse();
			},
			onError() {
				setRespondingFalse();
			}
		});
	};
	const handleSendTextCompletion = () => {
		if (debugWithMultipleModel) {
			eventEmitter?.emit({
				type: APP_CHAT_WITH_MULTIPLE_MODEL,
				payload: {
					message: "",
					files: completionFiles
				}
			});
			return;
		}
		sendTextCompletion();
	};
	const varList = modelConfig.configs.prompt_variables.map((item) => {
		return {
			label: item.key,
			value: inputs[item.key]
		};
	});
	const { textGenerationModelList } = useProviderContext();
	const handleChangeToSingleModel = (item) => {
		const currentModel = textGenerationModelList.find((modelItem) => modelItem.provider === item.provider)?.models.find((model) => model.model === item.model);
		modelParameterParams.setModel({
			modelId: item.model,
			provider: item.provider,
			mode: currentModel?.model_properties.mode,
			features: currentModel?.features
		});
		modelParameterParams.onCompletionParamsChange(item.parameters);
		onMultipleModelConfigsChange(false, []);
	};
	const handleVisionConfigInMultipleModel = useCallback(() => {
		if (debugWithMultipleModel && mode) {
			const supportedVision = multipleModelConfigs.some((modelConfig) => {
				return (textGenerationModelList.find((modelItem) => modelItem.provider === modelConfig.provider)?.models.find((model) => model.model === modelConfig.model))?.features?.includes(ModelFeatureEnum.vision);
			});
			const { features, setFeatures } = featuresStore.getState();
			setFeatures(produce(features, (draft) => {
				draft.file = {
					...draft.file,
					enabled: supportedVision
				};
			}));
		}
	}, [
		debugWithMultipleModel,
		featuresStore,
		mode,
		multipleModelConfigs,
		textGenerationModelList
	]);
	useEffect(() => {
		handleVisionConfigInMultipleModel();
	}, [
		multipleModelConfigs,
		mode,
		handleVisionConfigInMultipleModel
	]);
	const { currentLogItem, setCurrentLogItem, showPromptLogModal, setShowPromptLogModal, showAgentLogModal, setShowAgentLogModal } = useStore$2(useShallow((state) => ({
		currentLogItem: state.currentLogItem,
		setCurrentLogItem: state.setCurrentLogItem,
		showPromptLogModal: state.showPromptLogModal,
		setShowPromptLogModal: state.setShowPromptLogModal,
		showAgentLogModal: state.showAgentLogModal,
		setShowAgentLogModal: state.setShowAgentLogModal
	})));
	const [width, setWidth] = useState(0);
	const ref = useRef(null);
	const adjustModalWidth = () => {
		if (ref.current) setWidth(document.body.clientWidth - (ref.current?.clientWidth + 16) - 8);
	};
	useEffect(() => {
		adjustModalWidth();
	}, []);
	const [expanded, setExpanded] = useState(true);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "shrink-0",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between px-4 pb-2 pt-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-text-primary system-xl-semibold",
						children: t("inputs.title", { ns: "appDebug" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center",
						children: [debugWithMultipleModel ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(Button, {
							variant: "ghost-accent",
							onClick: () => onMultipleModelConfigsChange(true, [...multipleModelConfigs, {
								id: `${Date.now()}`,
								model: "",
								provider: "",
								parameters: {}
							}]),
							disabled: multipleModelConfigs.length >= 4,
							children: [
								/* @__PURE__ */ jsx(p, { className: "mr-1 h-3.5 w-3.5" }),
								t("modelProvider.addModel", { ns: "common" }),
								"(",
								multipleModelConfigs.length,
								"/4)"
							]
						}), /* @__PURE__ */ jsx("div", { className: "mx-2 h-[14px] w-[1px] bg-divider-regular" })] }) : null, mode !== AppModeEnum.COMPLETION && /* @__PURE__ */ jsxs(Fragment$1, { children: [!readonly && /* @__PURE__ */ jsx(tooltip_default, {
							popupContent: t("operation.refresh", { ns: "common" }),
							children: /* @__PURE__ */ jsx(ActionButton, {
								onClick: clearConversation,
								children: /* @__PURE__ */ jsx(Icon$34, { className: "h-4 w-4" })
							})
						}), varList.length > 0 && /* @__PURE__ */ jsxs("div", {
							className: "relative ml-1 mr-2",
							children: [/* @__PURE__ */ jsx(tooltip_default, {
								popupContent: t("panel.userInputField", { ns: "workflow" }),
								children: /* @__PURE__ */ jsx(ActionButton, {
									state: expanded ? ActionButtonState.Active : void 0,
									onClick: () => !readonly && setExpanded(!expanded),
									children: /* @__PURE__ */ jsx(AD, { className: "h-4 w-4" })
								})
							}), expanded && /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-14px] right-[5px] z-10 h-3 w-3 rotate-45 border-l-[0.5px] border-t-[0.5px] border-components-panel-border-subtle bg-components-panel-on-panel-item-bg" })]
						})] })]
					})]
				}),
				mode !== AppModeEnum.COMPLETION && expanded && /* @__PURE__ */ jsx("div", {
					className: "mx-3",
					children: /* @__PURE__ */ jsx(ChatUserInput, { inputs })
				}),
				mode === AppModeEnum.COMPLETION && /* @__PURE__ */ jsx(prompt_value_panel_default, {
					appType: mode,
					onSend: handleSendTextCompletion,
					inputs,
					visionConfig: {
						...features.file,
						transfer_methods: features.file.allowed_file_upload_methods || [],
						image_file_size_limit: features.file?.fileUploadConfig?.image_file_size_limit
					},
					onVisionFilesChange: setCompletionFiles
				})
			]
		}),
		debugWithMultipleModel && /* @__PURE__ */ jsxs("div", {
			className: "mt-3 grow overflow-hidden",
			ref,
			children: [
				/* @__PURE__ */ jsx(debug_with_multiple_model_default, {
					multipleModelConfigs,
					onMultipleModelConfigsChange,
					onDebugWithMultipleModelChange: handleChangeToSingleModel,
					checkCanSend
				}),
				showPromptLogModal && /* @__PURE__ */ jsx(PromptLogModal, {
					width,
					currentLogItem,
					onCancel: () => {
						setCurrentLogItem();
						setShowPromptLogModal(false);
					}
				}),
				showAgentLogModal && /* @__PURE__ */ jsx(AgentLogModal, {
					width,
					currentLogItem,
					onCancel: () => {
						setCurrentLogItem();
						setShowAgentLogModal(false);
					}
				})
			]
		}),
		!debugWithMultipleModel && /* @__PURE__ */ jsxs("div", {
			className: "flex grow flex-col",
			ref,
			children: [
				(!modelConfig.provider || !isAPIKeySet) && /* @__PURE__ */ jsx(has_not_set_api_default, { onSetting }),
				modelConfig.provider && isAPIKeySet && !modelConfig.model_id && /* @__PURE__ */ jsx("div", {
					className: "flex grow flex-col items-center justify-center pb-[120px]",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex w-full max-w-[400px] flex-col gap-2 px-4 py-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-[10px]",
							children: /* @__PURE__ */ jsx("div", {
								className: "flex h-full w-full items-center justify-center overflow-hidden rounded-[10px] border-[0.5px] border-components-card-border bg-components-card-bg p-1 shadow-lg backdrop-blur-[5px]",
								children: /* @__PURE__ */ jsx("span", { className: "i-ri-brain-2-line h-5 w-5 text-text-tertiary" })
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-1",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-text-secondary system-md-semibold",
								children: t("noModelSelected", { ns: "appDebug" })
							}), /* @__PURE__ */ jsx("div", {
								className: "text-text-tertiary system-xs-regular",
								children: t("noModelSelectedTip", { ns: "appDebug" })
							})]
						})]
					})
				}),
				mode !== AppModeEnum.COMPLETION && /* @__PURE__ */ jsx("div", {
					className: "h-0 grow overflow-hidden",
					children: /* @__PURE__ */ jsx(debug_with_single_model_default, {
						ref: debugWithSingleModelRef,
						checkCanSend
					})
				}),
				mode === AppModeEnum.COMPLETION && /* @__PURE__ */ jsxs(Fragment$1, { children: [(completionRes || isResponding) && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
					className: "mx-4 mt-3",
					children: /* @__PURE__ */ jsx(group_name_default, { name: t("result", { ns: "appDebug" }) })
				}), /* @__PURE__ */ jsx("div", {
					className: "mx-3 mb-8",
					children: /* @__PURE__ */ jsx(item_default, {
						appSourceType: AppSourceType.webApp,
						className: "mt-2",
						content: completionRes,
						isLoading: !completionRes && isResponding,
						isShowTextToSpeech: textToSpeechConfig.enabled && !!text2speechDefaultModel,
						isResponding,
						messageId,
						isError: false,
						onRetry: noop,
						siteInfo: null
					})
				})] }), !completionRes && !isResponding && /* @__PURE__ */ jsxs("div", {
					className: "flex grow flex-col items-center justify-center gap-2",
					children: [/* @__PURE__ */ jsx(WA, { className: "h-12 w-12 text-text-empty-state-icon" }), /* @__PURE__ */ jsx("div", {
						className: "text-text-quaternary system-sm-regular",
						children: t("noResult", { ns: "appDebug" })
					})]
				})] }),
				mode === AppModeEnum.COMPLETION && showPromptLogModal && /* @__PURE__ */ jsx(PromptLogModal, {
					width,
					currentLogItem,
					onCancel: () => {
						setCurrentLogItem();
						setShowPromptLogModal(false);
					}
				}),
				isShowCannotQueryDataset && /* @__PURE__ */ jsx(cannot_query_dataset_default, { onConfirm: () => setShowCannotQueryDataset(false) })
			]
		}),
		isShowFormattingChangeConfirm && /* @__PURE__ */ jsx(formatting_changed_default, {
			onConfirm: handleConfirm,
			onCancel: handleCancel
		})
	] });
};
var debug_default = React$1.memo(Debug);
//#endregion
//#region app/components/workflow/workflow-preview/components/custom-edge.tsx
var CustomEdge = ({ id, data, sourceHandleId, sourceX, sourceY, targetX, targetY, selected }) => {
	const [edgePath] = getBezierPath({
		sourceX: sourceX - 8,
		sourceY,
		sourcePosition: Position.Right,
		targetX: targetX + 8,
		targetY,
		targetPosition: Position.Left,
		curvature: .16
	});
	const { _sourceRunningStatus, _targetRunningStatus } = data;
	const linearGradientId = useMemo(() => {
		if ((_sourceRunningStatus === NodeRunningStatus.Succeeded || _sourceRunningStatus === NodeRunningStatus.Failed || _sourceRunningStatus === NodeRunningStatus.Exception) && (_targetRunningStatus === NodeRunningStatus.Succeeded || _targetRunningStatus === NodeRunningStatus.Failed || _targetRunningStatus === NodeRunningStatus.Exception || _targetRunningStatus === NodeRunningStatus.Running)) return id;
	}, [
		_sourceRunningStatus,
		_targetRunningStatus,
		id
	]);
	const stroke = useMemo(() => {
		if (selected) return getEdgeColor(NodeRunningStatus.Running);
		if (linearGradientId) return `url(#${linearGradientId})`;
		if (data?._connectedNodeIsHovering) return getEdgeColor(NodeRunningStatus.Running, sourceHandleId === ErrorHandleTypeEnum.failBranch);
		return getEdgeColor();
	}, [
		data._connectedNodeIsHovering,
		linearGradientId,
		selected,
		sourceHandleId
	]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [linearGradientId && /* @__PURE__ */ jsx(CustomEdgeLinearGradientRender, {
		id: linearGradientId,
		startColor: getEdgeColor(_sourceRunningStatus),
		stopColor: getEdgeColor(_targetRunningStatus),
		position: {
			x1: sourceX,
			y1: sourceY,
			x2: targetX,
			y2: targetY
		}
	}), /* @__PURE__ */ jsx(BaseEdge, {
		id,
		path: edgePath,
		style: {
			stroke,
			strokeWidth: 2,
			opacity: data._waitingRun ? .7 : 1
		}
	})] });
};
var custom_edge_default = memo(CustomEdge);
//#endregion
//#region app/components/workflow/workflow-preview/components/node-handle.tsx
var NodeTargetHandle = memo(({ data, handleId, handleClassName }) => {
	const connected = data._connectedTargetHandleIds?.includes(handleId);
	return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(Handle$1, {
		id: handleId,
		type: "target",
		position: Position.Left,
		className: cn("z-[1] !h-4 !w-4 !rounded-none !border-none !bg-transparent !outline-none", "after:absolute after:left-1.5 after:top-1 after:h-2 after:w-0.5 after:bg-workflow-link-line-handle", "transition-all hover:scale-125", !connected && "after:opacity-0", (data.type === BlockEnum.Start || data.type === BlockEnum.TriggerWebhook || data.type === BlockEnum.TriggerSchedule || data.type === BlockEnum.TriggerPlugin) && "opacity-0", handleClassName)
	}) });
});
NodeTargetHandle.displayName = "NodeTargetHandle";
var NodeSourceHandle = memo(({ data, handleId, handleClassName }) => {
	const connected = data._connectedSourceHandleIds?.includes(handleId);
	return /* @__PURE__ */ jsx(Handle$1, {
		id: handleId,
		type: "source",
		position: Position.Right,
		className: cn("group/handle z-[1] !h-4 !w-4 !rounded-none !border-none !bg-transparent !outline-none", "after:absolute after:right-1.5 after:top-1 after:h-2 after:w-0.5 after:bg-workflow-link-line-handle", "transition-all hover:scale-125", !connected && "after:opacity-0", handleClassName)
	});
});
NodeSourceHandle.displayName = "NodeSourceHandle";
//#endregion
//#region app/components/workflow/workflow-preview/components/error-handle-on-node.tsx
var ErrorHandleOnNode = ({ id, data }) => {
	const { t } = useTranslation();
	const { error_strategy } = data;
	const updateNodeInternals = useUpdateNodeInternals();
	useEffect(() => {
		if (error_strategy === ErrorHandleTypeEnum.failBranch) updateNodeInternals(id);
	}, [
		error_strategy,
		id,
		updateNodeInternals
	]);
	if (!error_strategy) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "relative px-3 pb-2 pt-1",
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("relative flex h-6 items-center justify-between rounded-md bg-workflow-block-parma-bg px-[5px]", data._runningStatus === NodeRunningStatus.Exception && "border-[0.5px] border-components-badge-status-light-warning-halo bg-state-warning-hover"),
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "system-xs-medium-uppercase text-text-tertiary",
					children: t("common.onFailure", { ns: "workflow" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: cn("system-xs-medium text-text-secondary", data._runningStatus === NodeRunningStatus.Exception && "text-text-warning"),
					children: [error_strategy === ErrorHandleTypeEnum.defaultValue && t("nodes.common.errorHandle.defaultValue.output", { ns: "workflow" }), error_strategy === ErrorHandleTypeEnum.failBranch && t("nodes.common.errorHandle.failBranch.title", { ns: "workflow" })]
				}),
				error_strategy === ErrorHandleTypeEnum.failBranch && /* @__PURE__ */ jsx(NodeSourceHandle, {
					id,
					data,
					handleId: ErrorHandleTypeEnum.failBranch,
					handleClassName: "!top-1/2 !-right-[21px] !-translate-y-1/2 after:!bg-workflow-link-line-failure-button-bg"
				})
			]
		})
	});
};
//#endregion
//#region app/components/workflow/workflow-preview/components/nodes/base.tsx
var BaseCard = ({ id, data, children }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex rounded-2xl border-[2px] border-transparent"),
		style: {
			width: data.type === BlockEnum.Iteration || data.type === BlockEnum.Loop ? data.width : "auto",
			height: data.type === BlockEnum.Iteration || data.type === BlockEnum.Loop ? data.height : "auto"
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("group relative pb-1 shadow-xs", "rounded-[15px] border border-transparent", "bg-workflow-block-bg hover:shadow-lg"),
			style: {
				width: data.type === BlockEnum.Iteration || data.type === BlockEnum.Loop ? data.width : "240px",
				height: data.type === BlockEnum.Iteration || data.type === BlockEnum.Loop ? data.height : "auto"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: cn("flex items-center rounded-t-2xl px-3 pb-2 pt-3"),
					children: [
						/* @__PURE__ */ jsx(NodeTargetHandle, {
							id,
							data,
							handleClassName: "!top-4 !-left-[9px] !translate-y-0",
							handleId: "target"
						}),
						data.type !== BlockEnum.IfElse && data.type !== BlockEnum.QuestionClassifier && data.type !== BlockEnum.HumanInput && /* @__PURE__ */ jsx(NodeSourceHandle, {
							id,
							data,
							handleClassName: "!top-4 !-right-[9px] !translate-y-0",
							handleId: "source"
						}),
						/* @__PURE__ */ jsx(block_icon_default, {
							className: "mr-2 shrink-0",
							type: data.type,
							size: "md"
						}),
						/* @__PURE__ */ jsxs("div", {
							title: data.title,
							className: "system-sm-semibold-uppercase mr-1 flex grow items-center truncate text-text-primary",
							children: [/* @__PURE__ */ jsx("div", { children: data.title }), data.type === BlockEnum.Iteration && data.is_parallel && /* @__PURE__ */ jsx(tooltip_default, {
								popupContent: /* @__PURE__ */ jsxs("div", {
									className: "w-[180px]",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-extrabold",
										children: t("nodes.iteration.parallelModeEnableTitle", { ns: "workflow" })
									}), t("nodes.iteration.parallelModeEnableDesc", { ns: "workflow" })]
								}),
								children: /* @__PURE__ */ jsx("div", {
									className: "system-2xs-medium-uppercase ml-1 flex items-center justify-center rounded-[5px] border-[1px] border-text-warning px-[5px] py-[3px] text-text-warning ",
									children: t("nodes.iteration.parallelModeUpper", { ns: "workflow" })
								})
							})]
						})
					]
				}),
				data.type !== BlockEnum.Iteration && data.type !== BlockEnum.Loop && children && cloneElement(children, {
					id,
					data
				}),
				(data.type === BlockEnum.Iteration || data.type === BlockEnum.Loop) && children && /* @__PURE__ */ jsx("div", {
					className: "h-[calc(100%-42px)] w-full grow pb-1 pl-1 pr-1",
					children: cloneElement(children, {
						id,
						data
					})
				}),
				hasErrorHandleNode(data.type) && /* @__PURE__ */ jsx(ErrorHandleOnNode, {
					id,
					data
				}),
				data.desc && data.type !== BlockEnum.Iteration && data.type !== BlockEnum.Loop && /* @__PURE__ */ jsx("div", {
					className: "system-xs-regular whitespace-pre-line break-words px-3 pb-2 pt-1 text-text-tertiary",
					children: data.desc
				})
			]
		})
	});
};
var base_default = memo(BaseCard);
//#endregion
//#region app/components/workflow/workflow-preview/components/nodes/if-else/node.tsx
var i18nPrefix$1 = "nodes.ifElse";
var IfElseNode = (props) => {
	const { data } = props;
	const { t } = useTranslation();
	const { cases } = data;
	const casesLength = cases.length;
	const checkIsConditionSet = useCallback((condition) => {
		if (!condition.variable_selector || condition.variable_selector.length === 0) return false;
		if (condition.sub_variable_condition) return condition.sub_variable_condition.conditions.every((c) => {
			if (!c.comparison_operator) return false;
			if (isEmptyRelatedOperator(c.comparison_operator)) return true;
			return !!c.value;
		});
		else {
			if (isEmptyRelatedOperator(condition.comparison_operator)) return true;
			return !!condition.value;
		}
	}, []);
	const conditionNotSet = /* @__PURE__ */ jsx("div", {
		className: "flex h-6 items-center space-x-1 rounded-md bg-workflow-block-parma-bg px-1 text-xs font-normal text-text-secondary",
		children: t(`${i18nPrefix$1}.conditionNotSetup`, { ns: "workflow" })
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "px-3",
		children: [cases.map((caseItem, index) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
			className: "relative flex h-6 items-center px-1",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex w-full items-center justify-between",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-[10px] font-semibold text-text-tertiary",
					children: casesLength > 1 && `CASE ${index + 1}`
				}), /* @__PURE__ */ jsx("div", {
					className: "text-[12px] font-semibold text-text-secondary",
					children: index === 0 ? "IF" : "ELIF"
				})]
			}), /* @__PURE__ */ jsx(NodeSourceHandle, {
				...props,
				handleId: caseItem.case_id,
				handleClassName: "!top-1/2 !-right-[21px] !-translate-y-1/2"
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "space-y-0.5",
			children: caseItem.conditions.map((condition, i) => /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [checkIsConditionSet(condition) ? !isEmptyRelatedOperator(condition.comparison_operator) && condition.sub_variable_condition ? /* @__PURE__ */ jsx(condition_files_list_value_default, { condition }) : /* @__PURE__ */ jsx(condition_value_default, {
					variableSelector: condition.variable_selector,
					operator: condition.comparison_operator,
					value: condition.value
				}) : conditionNotSet, i !== caseItem.conditions.length - 1 && /* @__PURE__ */ jsx("div", {
					className: "absolute bottom-[-10px] right-1 z-10 text-[10px] font-medium uppercase leading-4 text-text-accent",
					children: t(`${i18nPrefix$1}.${caseItem.logical_operator}`, { ns: "workflow" })
				})]
			}, condition.id))
		})] }, caseItem.case_id)), /* @__PURE__ */ jsxs("div", {
			className: "relative flex h-6 items-center px-1",
			children: [/* @__PURE__ */ jsx("div", {
				className: "w-full text-right text-xs font-semibold text-text-secondary",
				children: "ELSE"
			}), /* @__PURE__ */ jsx(NodeSourceHandle, {
				...props,
				handleId: "false",
				handleClassName: "!top-1/2 !-right-[21px] !-translate-y-1/2"
			})]
		})]
	});
};
var node_default$3 = React$1.memo(IfElseNode);
//#endregion
//#region app/components/workflow/workflow-preview/components/nodes/iteration/node.tsx
var Node$2 = ({ id }) => {
	const { zoom } = useViewport();
	return /* @__PURE__ */ jsx("div", {
		className: cn("relative h-full min-h-[90px] w-full min-w-[240px] rounded-2xl bg-workflow-canvas-workflow-bg"),
		children: /* @__PURE__ */ jsx(Background$1, {
			id: `iteration-background-${id}`,
			className: "!z-0 rounded-2xl",
			gap: [14 / zoom, 14 / zoom],
			size: 2 / zoom,
			color: "var(--color-workflow-canvas-workflow-dot-color)"
		})
	});
};
var node_default$2 = memo(Node$2);
//#endregion
//#region app/components/workflow/workflow-preview/components/nodes/loop/hooks.ts
var useNodeLoopInteractions = () => {
	const store = useStoreApi();
	return { handleNodeLoopRerender: useCallback((nodeId) => {
		const { getNodes, setNodes } = store.getState();
		const nodes = getNodes();
		const currentNode = nodes.find((n) => n.id === nodeId);
		const childrenNodes = nodes.filter((n) => n.parentId === nodeId);
		let rightNode;
		let bottomNode;
		childrenNodes.forEach((n) => {
			if (rightNode) {
				if (n.position.x + n.width > rightNode.position.x + rightNode.width) rightNode = n;
			} else rightNode = n;
			if (bottomNode) {
				if (n.position.y + n.height > bottomNode.position.y + bottomNode.height) bottomNode = n;
			} else bottomNode = n;
		});
		const widthShouldExtend = rightNode && currentNode.width < rightNode.position.x + rightNode.width;
		const heightShouldExtend = bottomNode && currentNode.height < bottomNode.position.y + bottomNode.height;
		if (widthShouldExtend || heightShouldExtend) setNodes(produce(nodes, (draft) => {
			draft.forEach((n) => {
				if (n.id === nodeId) {
					if (widthShouldExtend) {
						n.data.width = rightNode.position.x + rightNode.width + LOOP_PADDING.right;
						n.width = rightNode.position.x + rightNode.width + LOOP_PADDING.right;
					}
					if (heightShouldExtend) {
						n.data.height = bottomNode.position.y + bottomNode.height + LOOP_PADDING.bottom;
						n.height = bottomNode.position.y + bottomNode.height + LOOP_PADDING.bottom;
					}
				}
			});
		}));
	}, [store]) };
};
//#endregion
//#region app/components/workflow/workflow-preview/components/nodes/loop/node.tsx
var Node$1 = ({ id, data: _data }) => {
	const { zoom } = useViewport();
	const nodesInitialized = useNodesInitialized();
	const { handleNodeLoopRerender } = useNodeLoopInteractions();
	useEffect(() => {
		if (nodesInitialized) handleNodeLoopRerender(id);
	}, [
		nodesInitialized,
		id,
		handleNodeLoopRerender
	]);
	return /* @__PURE__ */ jsx("div", {
		className: cn("relative h-full min-h-[90px] w-full min-w-[240px] rounded-2xl bg-workflow-canvas-workflow-bg"),
		children: /* @__PURE__ */ jsx(Background$1, {
			id: `loop-background-${id}`,
			className: "!z-0 rounded-2xl",
			gap: [14 / zoom, 14 / zoom],
			size: 2 / zoom,
			color: "var(--color-workflow-canvas-workflow-dot-color)"
		})
	});
};
var node_default$1 = memo(Node$1);
//#endregion
//#region app/components/workflow/workflow-preview/components/nodes/question-classifier/node.tsx
var i18nPrefix = "nodes.questionClassifiers";
var Node = (props) => {
	const { t } = useTranslation();
	const { data } = props;
	const topics = data.classes;
	return /* @__PURE__ */ jsx("div", {
		className: "mb-1 px-3 py-1",
		children: !!topics.length && /* @__PURE__ */ jsx("div", {
			className: "mt-2 space-y-0.5",
			children: topics.map((topic, index) => /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx(info_panel_default, {
					title: `${t(`${i18nPrefix}.class`, { ns: "workflow" })} ${index + 1}`,
					content: ""
				}), /* @__PURE__ */ jsx(NodeSourceHandle, {
					...props,
					handleId: topic.id,
					handleClassName: "!top-1/2 !-translate-y-1/2 !-right-[21px]"
				})]
			}, index))
		})
	});
};
var node_default = React$1.memo(Node);
//#endregion
//#region app/components/workflow/workflow-preview/components/nodes/constants.ts
var NodeComponentMap = {
	[BlockEnum.QuestionClassifier]: node_default,
	[BlockEnum.IfElse]: node_default$3,
	[BlockEnum.Iteration]: node_default$2,
	[BlockEnum.Loop]: node_default$1
};
//#endregion
//#region app/components/workflow/workflow-preview/components/nodes/index.tsx
var CustomNode = (props) => {
	const NodeComponent = NodeComponentMap[props.data.type];
	return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(base_default, {
		...props,
		children: NodeComponent && /* @__PURE__ */ jsx(NodeComponent, {})
	}) });
};
//#endregion
//#region app/components/workflow/workflow-preview/components/nodes/iteration-start/index.tsx
var IterationStartNode = ({ id, data }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "nodrag group mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-workflow-block-border bg-workflow-block-bg shadow-xs",
		children: [/* @__PURE__ */ jsx(tooltip_default, {
			popupContent: t("blocks.iteration-start", { ns: "workflow" }),
			asChild: false,
			children: /* @__PURE__ */ jsx("div", {
				className: "flex h-6 w-6 items-center justify-center rounded-full border-[0.5px] border-components-panel-border-subtle bg-util-colors-blue-brand-blue-brand-500",
				children: /* @__PURE__ */ jsx(Ao, { className: "h-3 w-3 text-text-primary-on-surface" })
			})
		}), /* @__PURE__ */ jsx(NodeSourceHandle, {
			id,
			data,
			handleClassName: "!top-1/2 !-right-[9px] !-translate-y-1/2",
			handleId: "source"
		})]
	});
};
var iteration_start_default = memo(IterationStartNode);
//#endregion
//#region app/components/workflow/workflow-preview/components/nodes/loop-start/index.tsx
var LoopStartNode = ({ id, data }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "nodrag group mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-workflow-block-border bg-workflow-block-bg",
		children: [/* @__PURE__ */ jsx(tooltip_default, {
			popupContent: t("blocks.loop-start", { ns: "workflow" }),
			asChild: false,
			children: /* @__PURE__ */ jsx("div", {
				className: "flex h-6 w-6 items-center justify-center rounded-full border-[0.5px] border-components-panel-border-subtle bg-util-colors-blue-brand-blue-brand-500",
				children: /* @__PURE__ */ jsx(Ao, { className: "h-3 w-3 text-text-primary-on-surface" })
			})
		}), /* @__PURE__ */ jsx(NodeSourceHandle, {
			id,
			data,
			handleClassName: "!top-1/2 !-right-[9px] !-translate-y-1/2",
			handleId: "source"
		})]
	});
};
var loop_start_default = memo(LoopStartNode);
//#endregion
//#region app/components/workflow/workflow-preview/components/note-node/index.tsx
var NoteNode = ({ data }) => {
	const { t } = useTranslation();
	const ref = useRef(null);
	const theme = data.theme;
	return /* @__PURE__ */ jsx("div", {
		className: cn("relative flex flex-col rounded-md border shadow-xs hover:shadow-md", THEME_MAP[theme].bg, data.selected ? THEME_MAP[theme].border : "border-black/5"),
		style: {
			width: data.width,
			height: data.height
		},
		ref,
		children: /* @__PURE__ */ jsx(NoteEditorContextProvider, {
			value: data.text,
			editable: false,
			children: /* @__PURE__ */ jsxs(Fragment$1, { children: [
				/* @__PURE__ */ jsx("div", { className: cn("h-2 shrink-0 rounded-t-md opacity-50", THEME_MAP[theme].title) }),
				/* @__PURE__ */ jsx("div", {
					className: "grow overflow-y-auto px-3 py-2.5",
					children: /* @__PURE__ */ jsx("div", {
						className: cn(data.selected && "nodrag nopan nowheel cursor-text"),
						children: /* @__PURE__ */ jsx(editor_default, {
							containerElement: ref.current,
							placeholder: t("nodes.note.editor.placeholder", { ns: "workflow" }) || ""
						})
					})
				}),
				data.showAuthor && /* @__PURE__ */ jsx("div", {
					className: "p-3 pt-0 text-xs text-text-tertiary",
					children: data.author
				})
			] })
		})
	});
};
var note_node_default = memo(NoteNode);
//#endregion
//#region app/components/workflow/workflow-preview/components/zoom-in-out.tsx
var ZoomType = /* @__PURE__ */ function(ZoomType) {
	ZoomType["zoomIn"] = "zoomIn";
	ZoomType["zoomOut"] = "zoomOut";
	ZoomType["zoomToFit"] = "zoomToFit";
	ZoomType["zoomTo25"] = "zoomTo25";
	ZoomType["zoomTo50"] = "zoomTo50";
	ZoomType["zoomTo75"] = "zoomTo75";
	ZoomType["zoomTo100"] = "zoomTo100";
	ZoomType["zoomTo200"] = "zoomTo200";
	return ZoomType;
}(ZoomType || {});
var ZoomInOut = () => {
	const { t } = useTranslation();
	const { zoomIn, zoomOut, zoomTo, fitView } = useReactFlow();
	const { zoom } = useViewport();
	const [open, setOpen] = useState(false);
	const ZOOM_IN_OUT_OPTIONS = [[
		{
			key: ZoomType.zoomTo200,
			text: "200%"
		},
		{
			key: ZoomType.zoomTo100,
			text: "100%"
		},
		{
			key: ZoomType.zoomTo75,
			text: "75%"
		},
		{
			key: ZoomType.zoomTo50,
			text: "50%"
		},
		{
			key: ZoomType.zoomTo25,
			text: "25%"
		}
	], [{
		key: ZoomType.zoomToFit,
		text: t("operator.zoomToFit", { ns: "workflow" })
	}]];
	const handleZoom = (type) => {
		if (type === ZoomType.zoomToFit) fitView();
		if (type === ZoomType.zoomTo25) zoomTo(.25);
		if (type === ZoomType.zoomTo50) zoomTo(.5);
		if (type === ZoomType.zoomTo75) zoomTo(.75);
		if (type === ZoomType.zoomTo100) zoomTo(1);
		if (type === ZoomType.zoomTo200) zoomTo(2);
	};
	const handleTrigger = useCallback(() => {
		setOpen((v) => !v);
	}, []);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		placement: "top-start",
		open,
		onOpenChange: setOpen,
		offset: {
			mainAxis: 4,
			crossAxis: -2
		},
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx("div", {
				className: cn("h-9 cursor-pointer rounded-lg border-[0.5px] border-components-actionbar-border bg-components-actionbar-bg", "p-0.5 text-[13px] shadow-lg backdrop-blur-[5px]", "hover:bg-state-base-hover"),
				children: /* @__PURE__ */ jsxs("div", {
					className: cn("flex h-8 w-[98px] items-center justify-between rounded-lg"),
					children: [
						/* @__PURE__ */ jsx(tip_popup_default, {
							title: t("operator.zoomOut", { ns: "workflow" }),
							shortcuts: ["ctrl", "-"],
							children: /* @__PURE__ */ jsx("div", {
								className: `flex h-8 w-8 items-center justify-center rounded-lg ${zoom <= .25 ? "cursor-not-allowed" : "cursor-pointer hover:bg-black/5"}`,
								onClick: (e) => {
									if (zoom <= .25) return;
									e.stopPropagation();
									zoomOut();
								},
								children: /* @__PURE__ */ jsx(oF, { className: "h-4 w-4 text-text-tertiary hover:text-text-secondary" })
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							onClick: handleTrigger,
							className: cn("system-sm-medium w-[34px] text-text-tertiary hover:text-text-secondary"),
							children: [Number.parseFloat(`${zoom * 100}`).toFixed(0), "%"]
						}),
						/* @__PURE__ */ jsx(tip_popup_default, {
							title: t("operator.zoomIn", { ns: "workflow" }),
							shortcuts: ["ctrl", "+"],
							children: /* @__PURE__ */ jsx("div", {
								className: `flex h-8 w-8 items-center justify-center rounded-lg ${zoom >= 2 ? "cursor-not-allowed" : "cursor-pointer hover:bg-black/5"}`,
								onClick: (e) => {
									if (zoom >= 2) return;
									e.stopPropagation();
									zoomIn();
								},
								children: /* @__PURE__ */ jsx(rF, { className: "h-4 w-4 text-text-tertiary hover:text-text-secondary" })
							})
						})
					]
				})
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-10",
			children: /* @__PURE__ */ jsx("div", {
				className: "w-[145px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg backdrop-blur-[5px]",
				children: ZOOM_IN_OUT_OPTIONS.map((options, i) => /* @__PURE__ */ jsxs(Fragment, { children: [i !== 0 && /* @__PURE__ */ jsx(Divider$1, { className: "m-0" }), /* @__PURE__ */ jsx("div", {
					className: "p-1",
					children: options.map((option) => /* @__PURE__ */ jsxs("div", {
						className: "system-md-regular flex h-8 cursor-pointer items-center justify-between space-x-1 rounded-lg py-1.5 pl-3 pr-2 text-text-secondary hover:bg-state-base-hover",
						onClick: () => handleZoom(option.key),
						children: [/* @__PURE__ */ jsx("span", { children: option.text }), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center space-x-0.5",
							children: [
								option.key === ZoomType.zoomToFit && /* @__PURE__ */ jsx(shortcuts_name_default, { keys: ["ctrl", "1"] }),
								option.key === ZoomType.zoomTo50 && /* @__PURE__ */ jsx(shortcuts_name_default, { keys: ["shift", "5"] }),
								option.key === ZoomType.zoomTo100 && /* @__PURE__ */ jsx(shortcuts_name_default, { keys: ["shift", "1"] })
							]
						})]
					}, option.key))
				})] }, i))
			})
		})]
	});
};
var zoom_in_out_default = memo(ZoomInOut);
//#endregion
//#region app/components/workflow/workflow-preview/index.tsx
var nodeTypes = {
	[CUSTOM_NODE]: CustomNode,
	[CUSTOM_NOTE_NODE]: note_node_default,
	[CUSTOM_SIMPLE_NODE]: CustomNode,
	[CUSTOM_ITERATION_START_NODE]: iteration_start_default,
	[CUSTOM_LOOP_START_NODE]: loop_start_default
};
var edgeTypes = { [CUSTOM_EDGE]: custom_edge_default };
var WorkflowPreview = ({ nodes, edges, viewport, className, miniMapToRight }) => {
	const [nodesData, setNodesData] = useState(() => initialNodes(nodes, edges));
	const [edgesData, setEdgesData] = useState(() => initialEdges(edges, nodes));
	const onNodesChange = useCallback((changes) => setNodesData((nds) => applyNodeChanges(changes, nds)), []);
	const onEdgesChange = useCallback((changes) => setEdgesData((eds) => applyEdgeChanges(changes, eds)), []);
	return /* @__PURE__ */ jsxs("div", {
		id: "workflow-container",
		className: cn("relative h-full w-full", className),
		children: [/* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(MiniMap$1, {
			pannable: true,
			zoomable: true,
			style: {
				width: 102,
				height: 72
			},
			maskColor: "var(--color-workflow-minimap-bg)",
			className: cn("!absolute !bottom-14 z-[9] !m-0 !h-[72px] !w-[102px] !rounded-lg !border-[0.5px] !border-divider-subtle !bg-background-default-subtle !shadow-md !shadow-shadow-shadow-5", miniMapToRight ? "!right-4" : "!left-4")
		}), /* @__PURE__ */ jsx("div", {
			className: "absolute bottom-4 left-4 z-[9] mt-1 flex items-center gap-2",
			children: /* @__PURE__ */ jsx(zoom_in_out_default, {})
		})] }), /* @__PURE__ */ jsx(ReactFlow, {
			nodeTypes,
			edgeTypes,
			nodes: nodesData,
			onNodesChange,
			edges: edgesData,
			onEdgesChange,
			connectionLineComponent: custom_connection_line_default,
			connectionLineContainerStyle: { zIndex: ITERATION_CHILDREN_Z_INDEX },
			defaultViewport: viewport,
			multiSelectionKeyCode: null,
			deleteKeyCode: null,
			nodesDraggable: true,
			nodesConnectable: false,
			nodesFocusable: false,
			edgesFocusable: false,
			panOnScroll: false,
			selectionKeyCode: null,
			selectionMode: SelectionMode.Partial,
			minZoom: .25,
			children: /* @__PURE__ */ jsx(Background$1, {
				gap: [14, 14],
				size: 2,
				className: "bg-workflow-canvas-workflow-bg",
				color: "var(--color-workflow-canvas-workflow-dot-color)"
			})
		})]
	});
};
var WorkflowPreviewWrapper = (props) => {
	return /* @__PURE__ */ jsx(ReactFlowProvider, { children: /* @__PURE__ */ jsx(WorkflowPreview, { ...props }) });
};
//#endregion
//#region app/components/base/alert.tsx
var bgVariants = cva("", { variants: { type: { info: "from-components-badge-status-light-normal-halo to-background-gradient-mask-transparent" } } });
var Alert = ({ type = "info", message, onHide, className }) => {
	return /* @__PURE__ */ jsx("div", {
		className: cn("pointer-events-none w-full", className),
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative flex space-x-1 overflow-hidden rounded-xl border border-components-panel-border bg-components-panel-bg-blur p-3 shadow-lg",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: cn("pointer-events-none absolute inset-0 bg-gradient-to-r opacity-[0.4]", bgVariants({ type })),
					"data-testid": "alert-gradient"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex h-6 w-6 items-center justify-center",
					children: /* @__PURE__ */ jsx("span", {
						className: "i-ri-information-2-fill text-text-accent",
						"data-testid": "info-icon"
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "p-1",
					children: /* @__PURE__ */ jsx("div", {
						className: "text-text-secondary system-xs-regular",
						"data-testid": "msg-container",
						children: message
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "pointer-events-auto flex h-6 w-6 cursor-pointer items-center justify-center",
					onClick: onHide,
					children: /* @__PURE__ */ jsx("span", {
						className: "i-ri-close-line h-4 w-4 text-text-tertiary",
						"data-testid": "close-icon"
					})
				})
			]
		})
	});
};
var alert_default = memo(Alert);
//#endregion
//#region app/components/explore/try-app/app/chat.tsx
var TryApp$2 = ({ appId, appDetail, className }) => {
	const { t } = useTranslation();
	const isMobile = useBreakpoints() === MediaType.mobile;
	const themeBuilder = useThemeContext();
	const { removeConversationIdInfo, ...chatData } = useEmbeddedChatbot(AppSourceType.tryApp, appId);
	const currentConversationId = chatData.currentConversationId;
	const inputsForms = chatData.inputsForms;
	useEffect(() => {
		if (appId) removeConversationIdInfo(appId);
	}, [appId]);
	const [isHideTryNotice, { setTrue: hideTryNotice }] = useBoolean(false);
	const handleNewConversation = () => {
		removeConversationIdInfo(appId);
		chatData.handleNewConversation();
	};
	return /* @__PURE__ */ jsx(EmbeddedChatbotContext.Provider, {
		value: {
			...chatData,
			disableFeedback: true,
			isMobile,
			themeBuilder
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("flex h-full flex-col rounded-2xl bg-background-section-burn", className),
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 justify-between p-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex grow items-center space-x-2",
					children: [/* @__PURE__ */ jsx(app_icon_default, {
						size: "large",
						iconType: appDetail.site.icon_type,
						icon: appDetail.site.icon,
						background: appDetail.site.icon_background,
						imageUrl: appDetail.site.icon_url
					}), /* @__PURE__ */ jsx("div", {
						className: "system-md-semibold grow truncate text-text-primary",
						title: appDetail.name,
						children: appDetail.name
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1",
					children: [currentConversationId && /* @__PURE__ */ jsx(tooltip_default, {
						popupContent: t("chat.resetChat", { ns: "share" }),
						children: /* @__PURE__ */ jsx(ActionButton, {
							size: "l",
							onClick: handleNewConversation,
							children: /* @__PURE__ */ jsx(uI, { className: "h-[18px] w-[18px]" })
						})
					}), currentConversationId && inputsForms.length > 0 && /* @__PURE__ */ jsx(ViewFormDropdown, {})]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mx-auto mt-4 flex h-[0] w-[769px] grow flex-col",
				children: [!isHideTryNotice && /* @__PURE__ */ jsx(alert_default, {
					className: "mb-4 shrink-0",
					message: t("tryApp.tryInfo", { ns: "explore" }),
					onHide: hideTryNotice
				}), /* @__PURE__ */ jsx(ChatWrapper, {})]
			})]
		})
	});
};
var chat_default = React$1.memo(TryApp$2);
//#endregion
//#region app/components/share/text-generation/no-data/index.tsx
var NoData = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full w-full flex-col items-center justify-center",
		children: [/* @__PURE__ */ jsx(WA, { className: "h-12 w-12 text-text-empty-state-icon" }), /* @__PURE__ */ jsx("div", {
			className: "system-sm-regular mt-2 text-text-quaternary",
			children: t("generation.noData", { ns: "share" })
		})]
	});
};
var no_data_default = React$1.memo(NoData);
//#endregion
//#region app/components/share/text-generation/result/hooks/use-result-run-state.ts
var runControlReducer = (state, action) => {
	switch (action.type) {
		case "reset": return {
			currentTaskId: null,
			isStopping: false
		};
		case "setCurrentTaskId": return {
			...state,
			currentTaskId: typeof action.value === "function" ? action.value(state.currentTaskId) : action.value
		};
		case "setIsStopping": return {
			...state,
			isStopping: typeof action.value === "function" ? action.value(state.isStopping) : action.value
		};
	}
};
var useResultRunState = ({ appId, appSourceType, controlStopResponding, isWorkflow, notify, onRunControlChange }) => {
	const [isResponding, { setTrue: setRespondingTrue, setFalse: setRespondingFalse }] = useBoolean(false);
	const [completionResState, setCompletionResState] = useState("");
	const completionResRef = useRef("");
	const [workflowProcessDataState, setWorkflowProcessDataState] = useState();
	const workflowProcessDataRef = useRef(void 0);
	const [messageId, setMessageId] = useState(null);
	const [feedback, setFeedback] = useState({ rating: null });
	const [controlClearMoreLikeThis, setControlClearMoreLikeThis] = useState(0);
	const abortControllerRef = useRef(null);
	const [{ currentTaskId, isStopping }, dispatchRunControl] = useReducer(runControlReducer, {
		currentTaskId: null,
		isStopping: false
	});
	const setCurrentTaskId = useCallback((value) => {
		dispatchRunControl({
			type: "setCurrentTaskId",
			value
		});
	}, []);
	const setIsStopping = useCallback((value) => {
		dispatchRunControl({
			type: "setIsStopping",
			value
		});
	}, []);
	const setCompletionRes = useCallback((res) => {
		completionResRef.current = res;
		setCompletionResState(res);
	}, []);
	const getCompletionRes = useCallback(() => completionResRef.current, []);
	const setWorkflowProcessData = useCallback((data) => {
		workflowProcessDataRef.current = data;
		setWorkflowProcessDataState(data);
	}, []);
	const getWorkflowProcessData = useCallback(() => workflowProcessDataRef.current, []);
	const resetRunState = useCallback(() => {
		dispatchRunControl({ type: "reset" });
		abortControllerRef.current = null;
		onRunControlChange?.(null);
	}, [onRunControlChange]);
	const prepareForNewRun = useCallback(() => {
		setMessageId(null);
		setFeedback({ rating: null });
		setCompletionRes("");
		setWorkflowProcessData(void 0);
		resetRunState();
	}, [
		resetRunState,
		setCompletionRes,
		setWorkflowProcessData
	]);
	const handleFeedback = useCallback(async (nextFeedback) => {
		await updateFeedback({
			url: `/messages/${messageId}/feedbacks`,
			body: {
				rating: nextFeedback.rating,
				content: nextFeedback.content
			}
		}, appSourceType, appId);
		setFeedback(nextFeedback);
	}, [
		appId,
		appSourceType,
		messageId
	]);
	const handleStop = useCallback(async () => {
		if (!currentTaskId || isStopping) return;
		setIsStopping(true);
		try {
			if (isWorkflow) await stopWorkflowMessage(appId, currentTaskId, appSourceType, appId || "");
			else await stopChatMessageResponding(appId, currentTaskId, appSourceType, appId || "");
			abortControllerRef.current?.abort();
		} catch (error) {
			notify({
				type: "error",
				message: error instanceof Error ? error.message : String(error)
			});
		} finally {
			setIsStopping(false);
		}
	}, [
		appId,
		appSourceType,
		currentTaskId,
		isStopping,
		isWorkflow,
		notify,
		setIsStopping
	]);
	const clearMoreLikeThis = useCallback(() => {
		setControlClearMoreLikeThis(Date.now());
	}, []);
	useEffect(() => {
		const abortCurrentRequest = () => {
			abortControllerRef.current?.abort();
		};
		if (controlStopResponding) {
			abortCurrentRequest();
			setRespondingFalse();
			resetRunState();
		}
		return abortCurrentRequest;
	}, [
		controlStopResponding,
		resetRunState,
		setRespondingFalse
	]);
	useEffect(() => {
		if (!onRunControlChange) return;
		if (isResponding && currentTaskId) {
			onRunControlChange({
				onStop: handleStop,
				isStopping
			});
			return;
		}
		onRunControlChange(null);
	}, [
		currentTaskId,
		handleStop,
		isResponding,
		isStopping,
		onRunControlChange
	]);
	return {
		abortControllerRef,
		clearMoreLikeThis,
		completionRes: completionResState,
		controlClearMoreLikeThis,
		currentTaskId,
		feedback,
		getCompletionRes,
		getWorkflowProcessData,
		handleFeedback,
		handleStop,
		isResponding,
		isStopping,
		messageId,
		prepareForNewRun,
		resetRunState,
		setCompletionRes,
		setCurrentTaskId,
		setIsStopping,
		setMessageId,
		setRespondingFalse,
		setRespondingTrue,
		setWorkflowProcessData,
		workflowProcessData: workflowProcessDataState
	};
};
//#endregion
//#region app/components/share/text-generation/result/result-request.ts
var isMissingRequiredInput = (variable, value) => {
	if (value === void 0 || value === null) return true;
	if (variable.type === "file-list") return !Array.isArray(value) || value.length === 0;
	if ([
		"string",
		"paragraph",
		"number",
		"json_object",
		"select"
	].includes(variable.type)) return typeof value !== "string" ? false : value.trim() === "";
	return false;
};
var hasPendingLocalFiles = (completionFiles) => {
	return completionFiles.some((item) => item.transfer_method === TransferMethod.local_file && !item.upload_file_id);
};
var validateResultRequest = ({ completionFiles, inputs, isCallBatchAPI, promptConfig, t }) => {
	if (isCallBatchAPI) return { canSend: true };
	const promptVariables = promptConfig?.prompt_variables;
	if (!promptVariables?.length) {
		if (hasPendingLocalFiles(completionFiles)) return {
			canSend: false,
			notification: {
				type: "info",
				message: t("errorMessage.waitForFileUpload", { ns: "appDebug" })
			}
		};
		return { canSend: true };
	}
	const missingRequiredVariable = promptVariables.filter(({ key, name, required, type }) => {
		if (type === "boolean" || type === "checkbox") return false;
		return !key || !key.trim() || !name || !name.trim() || required === void 0 || required === null || required;
	}).find((variable) => isMissingRequiredInput(variable, inputs[variable.key]))?.name;
	if (missingRequiredVariable) return {
		canSend: false,
		notification: {
			type: "error",
			message: t("errorMessage.valueOfVarRequired", {
				ns: "appDebug",
				key: missingRequiredVariable
			})
		}
	};
	if (hasPendingLocalFiles(completionFiles)) return {
		canSend: false,
		notification: {
			type: "info",
			message: t("errorMessage.waitForFileUpload", { ns: "appDebug" })
		}
	};
	return { canSend: true };
};
var buildResultRequestData = ({ completionFiles, inputs, promptConfig, visionConfig }) => {
	const processedInputs = { ...formatBooleanInputs(promptConfig?.prompt_variables, inputs) };
	promptConfig?.prompt_variables.forEach((variable) => {
		const value = processedInputs[variable.key];
		if (variable.type === "file" && value && typeof value === "object" && !Array.isArray(value)) {
			processedInputs[variable.key] = getProcessedFiles([value])[0];
			return;
		}
		if (variable.type === "file-list" && Array.isArray(value) && value.length > 0) processedInputs[variable.key] = getProcessedFiles(value);
	});
	return {
		inputs: processedInputs,
		...visionConfig.enabled && completionFiles.length > 0 ? { files: completionFiles.map((item) => {
			if (item.transfer_method === TransferMethod.local_file) return {
				...item,
				url: ""
			};
			return item;
		}) } : {}
	};
};
//#endregion
//#region app/components/share/text-generation/result/workflow-stream-handlers.ts
var createInitialWorkflowProcess = () => ({
	status: WorkflowRunningStatus.Running,
	tracing: [],
	expand: false,
	resultText: ""
});
var updateWorkflowProcess = (current, updater) => {
	return produce(current ?? createInitialWorkflowProcess(), updater);
};
var matchParallelTrace = (trace, data) => {
	return trace.node_id === data.node_id && (trace.execution_metadata?.parallel_id === data.execution_metadata?.parallel_id || trace.parallel_id === data.execution_metadata?.parallel_id);
};
var ensureParallelTraceDetails = (details) => {
	return details?.length ? details : [[]];
};
var appendParallelStart = (current, data) => {
	return updateWorkflowProcess(current, (draft) => {
		draft.expand = true;
		draft.tracing.push({
			...data,
			details: ensureParallelTraceDetails(data.details),
			status: NodeRunningStatus.Running,
			expand: true
		});
	});
};
var appendParallelNext = (current, data) => {
	return updateWorkflowProcess(current, (draft) => {
		draft.expand = true;
		const trace = draft.tracing.find((item) => matchParallelTrace(item, data));
		if (!trace) return;
		trace.details = ensureParallelTraceDetails(trace.details);
		trace.details.push([]);
	});
};
var finishParallelTrace = (current, data) => {
	return updateWorkflowProcess(current, (draft) => {
		draft.expand = true;
		const traceIndex = draft.tracing.findIndex((item) => matchParallelTrace(item, data));
		if (traceIndex > -1) draft.tracing[traceIndex] = {
			...data,
			expand: !!data.error
		};
	});
};
var upsertWorkflowNode = (current, data) => {
	if (data.iteration_id || data.loop_id) return current;
	return updateWorkflowProcess(current, (draft) => {
		draft.expand = true;
		const currentIndex = draft.tracing.findIndex((item) => item.node_id === data.node_id);
		const nextTrace = {
			...data,
			status: NodeRunningStatus.Running,
			expand: true
		};
		if (currentIndex > -1) draft.tracing[currentIndex] = nextTrace;
		else draft.tracing.push(nextTrace);
	});
};
var finishWorkflowNode = (current, data) => {
	if (data.iteration_id || data.loop_id) return current;
	return updateWorkflowProcess(current, (draft) => {
		const currentIndex = draft.tracing.findIndex((trace) => matchParallelTrace(trace, data));
		if (currentIndex > -1) draft.tracing[currentIndex] = {
			...draft.tracing[currentIndex].extras ? { extras: draft.tracing[currentIndex].extras } : {},
			...data,
			expand: !!data.error
		};
	});
};
var markNodesStopped = (traces) => {
	if (!traces) return;
	const markTrace = (trace) => {
		if ([NodeRunningStatus.Running, NodeRunningStatus.Waiting].includes(trace.status)) trace.status = NodeRunningStatus.Stopped;
		trace.details?.forEach((detailGroup) => detailGroup.forEach(markTrace));
		trace.retryDetail?.forEach(markTrace);
		trace.parallelDetail?.children?.forEach(markTrace);
	};
	traces.forEach(markTrace);
};
var applyWorkflowFinishedState = (current, status) => {
	return updateWorkflowProcess(current, (draft) => {
		draft.status = status;
		if ([WorkflowRunningStatus.Stopped, WorkflowRunningStatus.Failed].includes(status)) markNodesStopped(draft.tracing);
	});
};
var applyWorkflowOutputs = (current, outputs) => {
	return updateWorkflowProcess(current, (draft) => {
		draft.status = WorkflowRunningStatus.Succeeded;
		draft.files = getFilesInLogs(outputs || []);
	});
};
var appendResultText = (current, text) => {
	return updateWorkflowProcess(current, (draft) => {
		draft.resultText = `${draft.resultText || ""}${text}`;
	});
};
var replaceResultText = (current, text) => {
	return updateWorkflowProcess(current, (draft) => {
		draft.resultText = text;
	});
};
var updateHumanInputRequired = (current, data) => {
	return updateWorkflowProcess(current, (draft) => {
		if (!draft.humanInputFormDataList) draft.humanInputFormDataList = [data];
		else {
			const currentFormIndex = draft.humanInputFormDataList.findIndex((item) => item.node_id === data.node_id);
			if (currentFormIndex > -1) draft.humanInputFormDataList[currentFormIndex] = data;
			else draft.humanInputFormDataList.push(data);
		}
		const currentIndex = draft.tracing.findIndex((item) => item.node_id === data.node_id);
		if (currentIndex > -1) draft.tracing[currentIndex].status = NodeRunningStatus.Paused;
	});
};
var updateHumanInputFilled = (current, data) => {
	return updateWorkflowProcess(current, (draft) => {
		if (draft.humanInputFormDataList?.length) {
			const currentFormIndex = draft.humanInputFormDataList.findIndex((item) => item.node_id === data.node_id);
			if (currentFormIndex > -1) draft.humanInputFormDataList.splice(currentFormIndex, 1);
		}
		if (!draft.humanInputFilledFormDataList) draft.humanInputFilledFormDataList = [data];
		else draft.humanInputFilledFormDataList.push(data);
	});
};
var updateHumanInputTimeout = (current, data) => {
	return updateWorkflowProcess(current, (draft) => {
		if (!draft.humanInputFormDataList?.length) return;
		const currentFormIndex = draft.humanInputFormDataList.findIndex((item) => item.node_id === data.node_id);
		if (currentFormIndex > -1) draft.humanInputFormDataList[currentFormIndex].expiration_time = data.expiration_time;
	});
};
var applyWorkflowPaused = (current) => {
	return updateWorkflowProcess(current, (draft) => {
		draft.expand = false;
		draft.status = WorkflowRunningStatus.Paused;
	});
};
var serializeWorkflowOutputs = (outputs) => {
	if (outputs === void 0 || outputs === null) return "";
	if (typeof outputs === "string") return outputs;
	try {
		return JSON.stringify(outputs) ?? "";
	} catch {
		return String(outputs);
	}
};
var createWorkflowStreamHandlers = ({ getCompletionRes, getWorkflowProcessData, isPublicAPI, isTimedOut, markEnded, notify, onCompleted, resetRunState, setCompletionRes, setCurrentTaskId, setIsStopping, setMessageId, setRespondingFalse, setWorkflowProcessData, t, taskId }) => {
	let tempMessageId = "";
	const finishWithFailure = () => {
		setRespondingFalse();
		resetRunState();
		onCompleted(getCompletionRes(), taskId, false);
		markEnded();
	};
	const finishWithSuccess = () => {
		setRespondingFalse();
		resetRunState();
		setMessageId(tempMessageId);
		onCompleted(getCompletionRes(), taskId, true);
		markEnded();
	};
	const otherOptions = {
		isPublicAPI,
		onWorkflowStarted: ({ workflow_run_id, task_id }) => {
			const workflowProcessData = getWorkflowProcessData();
			if (workflowProcessData?.tracing.length) {
				setWorkflowProcessData(updateWorkflowProcess(workflowProcessData, (draft) => {
					draft.expand = true;
					draft.status = WorkflowRunningStatus.Running;
				}));
				return;
			}
			tempMessageId = workflow_run_id;
			setCurrentTaskId(task_id || null);
			setIsStopping(false);
			setWorkflowProcessData(createInitialWorkflowProcess());
		},
		onIterationStart: ({ data }) => {
			setWorkflowProcessData(appendParallelStart(getWorkflowProcessData(), data));
		},
		onIterationNext: ({ data }) => {
			setWorkflowProcessData(appendParallelNext(getWorkflowProcessData(), data));
		},
		onIterationFinish: ({ data }) => {
			setWorkflowProcessData(finishParallelTrace(getWorkflowProcessData(), data));
		},
		onLoopStart: ({ data }) => {
			setWorkflowProcessData(appendParallelStart(getWorkflowProcessData(), data));
		},
		onLoopNext: ({ data }) => {
			setWorkflowProcessData(appendParallelNext(getWorkflowProcessData(), data));
		},
		onLoopFinish: ({ data }) => {
			setWorkflowProcessData(finishParallelTrace(getWorkflowProcessData(), data));
		},
		onNodeStarted: ({ data }) => {
			setWorkflowProcessData(upsertWorkflowNode(getWorkflowProcessData(), data));
		},
		onNodeFinished: ({ data }) => {
			setWorkflowProcessData(finishWorkflowNode(getWorkflowProcessData(), data));
		},
		onWorkflowFinished: ({ data }) => {
			if (isTimedOut()) {
				notify({
					type: "warning",
					message: t("warningMessage.timeoutExceeded", { ns: "appDebug" })
				});
				return;
			}
			if (data.status === WorkflowRunningStatus.Stopped) {
				setWorkflowProcessData(applyWorkflowFinishedState(getWorkflowProcessData(), WorkflowRunningStatus.Stopped));
				finishWithFailure();
				return;
			}
			if (data.error) {
				notify({
					type: "error",
					message: data.error
				});
				setWorkflowProcessData(applyWorkflowFinishedState(getWorkflowProcessData(), WorkflowRunningStatus.Failed));
				finishWithFailure();
				return;
			}
			setWorkflowProcessData(applyWorkflowOutputs(getWorkflowProcessData(), data.outputs));
			setCompletionRes(serializeWorkflowOutputs(data.outputs));
			if (data.outputs) {
				const outputKeys = Object.keys(data.outputs);
				if (outputKeys.length === 1 && typeof data.outputs[outputKeys[0]] === "string") setWorkflowProcessData(updateWorkflowProcess(getWorkflowProcessData(), (draft) => {
					draft.resultText = data.outputs[outputKeys[0]];
				}));
			}
			finishWithSuccess();
		},
		onTextChunk: ({ data: { text } }) => {
			setWorkflowProcessData(appendResultText(getWorkflowProcessData(), text));
		},
		onTextReplace: ({ data: { text } }) => {
			setWorkflowProcessData(replaceResultText(getWorkflowProcessData(), text));
		},
		onHumanInputRequired: ({ data }) => {
			setWorkflowProcessData(updateHumanInputRequired(getWorkflowProcessData(), data));
		},
		onHumanInputFormFilled: ({ data }) => {
			setWorkflowProcessData(updateHumanInputFilled(getWorkflowProcessData(), data));
		},
		onHumanInputFormTimeout: ({ data }) => {
			setWorkflowProcessData(updateHumanInputTimeout(getWorkflowProcessData(), data));
		},
		onWorkflowPaused: ({ data }) => {
			tempMessageId = data.workflow_run_id;
			sseGet(`/workflow/${data.workflow_run_id}/events`, {}, otherOptions);
			setWorkflowProcessData(applyWorkflowPaused(getWorkflowProcessData()));
		}
	};
	return otherOptions;
};
//#endregion
//#region app/components/share/text-generation/result/hooks/use-result-sender.ts
var logRequestError = (notify, error) => {
	notify({
		type: "error",
		message: error instanceof Error ? error.message : String(error)
	});
};
var useResultSender = ({ appId, appSourceType, completionFiles, controlRetry, controlSend, inputs, isCallBatchAPI, isPC, isWorkflow, notify, onCompleted, onRunStart, onShowRes, promptConfig, runState, t, taskId, visionConfig }) => {
	const { clearMoreLikeThis } = runState;
	const handleSend = useCallback(async () => {
		if (runState.isResponding) {
			notify({
				type: "info",
				message: t("errorMessage.waitForResponse", { ns: "appDebug" })
			});
			return false;
		}
		const validation = validateResultRequest({
			completionFiles,
			inputs,
			isCallBatchAPI,
			promptConfig,
			t
		});
		if (!validation.canSend) {
			notify(validation.notification);
			return false;
		}
		const data = buildResultRequestData({
			completionFiles,
			inputs,
			promptConfig,
			visionConfig
		});
		runState.prepareForNewRun();
		if (!isPC) {
			onShowRes();
			onRunStart();
		}
		runState.setRespondingTrue();
		let isEnd = false;
		let isTimeout = false;
		let completionChunks = [];
		let tempMessageId = "";
		(async () => {
			await sleep(TEXT_GENERATION_TIMEOUT_MS);
			if (!isEnd) {
				runState.setRespondingFalse();
				onCompleted(runState.getCompletionRes(), taskId, false);
				runState.resetRunState();
				isTimeout = true;
			}
		})();
		if (isWorkflow) {
			sendWorkflowMessage(data, createWorkflowStreamHandlers({
				getCompletionRes: runState.getCompletionRes,
				getWorkflowProcessData: runState.getWorkflowProcessData,
				isPublicAPI: appSourceType === AppSourceType.webApp,
				isTimedOut: () => isTimeout,
				markEnded: () => {
					isEnd = true;
				},
				notify,
				onCompleted,
				resetRunState: runState.resetRunState,
				setCompletionRes: runState.setCompletionRes,
				setCurrentTaskId: runState.setCurrentTaskId,
				setIsStopping: runState.setIsStopping,
				setMessageId: runState.setMessageId,
				setRespondingFalse: runState.setRespondingFalse,
				setWorkflowProcessData: runState.setWorkflowProcessData,
				t,
				taskId
			}), appSourceType, appId).catch((error) => {
				runState.setRespondingFalse();
				runState.resetRunState();
				logRequestError(notify, error);
			});
			return true;
		}
		sendCompletionMessage(data, {
			onData: (chunk, _isFirstMessage, { messageId, taskId: nextTaskId }) => {
				tempMessageId = messageId;
				if (nextTaskId && nextTaskId.trim() !== "") runState.setCurrentTaskId((prev) => prev ?? nextTaskId);
				completionChunks.push(chunk);
				runState.setCompletionRes(completionChunks.join(""));
			},
			onCompleted: () => {
				if (isTimeout) {
					notify({
						type: "warning",
						message: t("warningMessage.timeoutExceeded", { ns: "appDebug" })
					});
					return;
				}
				runState.setRespondingFalse();
				runState.resetRunState();
				runState.setMessageId(tempMessageId);
				onCompleted(runState.getCompletionRes(), taskId, true);
				isEnd = true;
			},
			onMessageReplace: (messageReplace) => {
				completionChunks = [messageReplace.answer];
				runState.setCompletionRes(completionChunks.join(""));
			},
			onError: () => {
				if (isTimeout) {
					notify({
						type: "warning",
						message: t("warningMessage.timeoutExceeded", { ns: "appDebug" })
					});
					return;
				}
				runState.setRespondingFalse();
				runState.resetRunState();
				onCompleted(runState.getCompletionRes(), taskId, false);
				isEnd = true;
			},
			getAbortController: (abortController) => {
				runState.abortControllerRef.current = abortController;
			}
		}, appSourceType, appId);
		return true;
	}, [
		appId,
		appSourceType,
		completionFiles,
		inputs,
		isCallBatchAPI,
		isPC,
		isWorkflow,
		notify,
		onCompleted,
		onRunStart,
		onShowRes,
		promptConfig,
		runState,
		t,
		taskId,
		visionConfig
	]);
	const handleSendRef = useRef(handleSend);
	useEffect(() => {
		handleSendRef.current = handleSend;
	}, [handleSend]);
	useEffect(() => {
		if (!controlSend) return;
		handleSendRef.current();
		clearMoreLikeThis();
	}, [clearMoreLikeThis, controlSend]);
	useEffect(() => {
		if (!controlRetry) return;
		handleSendRef.current();
	}, [controlRetry]);
	return { handleSend };
};
//#endregion
//#region app/components/share/text-generation/result/index.tsx
var Result = ({ isWorkflow, isCallBatchAPI, isPC, isMobile, appSourceType, appId, isError, isShowTextToSpeech, promptConfig, moreLikeThisEnabled, inputs, controlSend, controlRetry, controlStopResponding, onShowRes, handleSaveMessage, taskId, onCompleted, visionConfig, completionFiles, siteInfo, onRunStart, onRunControlChange, hideInlineStopButton = false }) => {
	const { notify } = Toast;
	const runState = useResultRunState({
		appId,
		appSourceType,
		controlStopResponding,
		isWorkflow,
		notify,
		onRunControlChange
	});
	const { handleSend } = useResultSender({
		appId,
		appSourceType,
		completionFiles,
		controlRetry,
		controlSend,
		inputs,
		isCallBatchAPI,
		isPC,
		isWorkflow,
		notify,
		onCompleted,
		onRunStart,
		onShowRes,
		promptConfig,
		runState,
		t: t$1,
		taskId,
		visionConfig
	});
	const isNoData = !runState.completionRes;
	const renderTextGenerationRes = () => /* @__PURE__ */ jsxs(Fragment$1, { children: [!hideInlineStopButton && runState.isResponding && runState.currentTaskId && /* @__PURE__ */ jsx("div", {
		className: `mb-3 flex ${isPC ? "justify-end" : "justify-center"}`,
		children: /* @__PURE__ */ jsxs(Button, {
			variant: "secondary",
			disabled: runState.isStopping,
			onClick: runState.handleStop,
			children: [runState.isStopping ? /* @__PURE__ */ jsx("span", {
				"aria-hidden": true,
				className: "i-ri-loader-2-line mr-[5px] h-3.5 w-3.5 animate-spin"
			}) : /* @__PURE__ */ jsx("span", {
				"aria-hidden": true,
				className: "i-ri-stop-circle-fill mr-[5px] h-3.5 w-3.5"
			}), /* @__PURE__ */ jsx("span", {
				className: "text-xs font-normal",
				children: t$1("operation.stopResponding", { ns: "appDebug" })
			})]
		})
	}), /* @__PURE__ */ jsx(item_default, {
		isWorkflow,
		workflowProcessData: runState.workflowProcessData,
		isError,
		onRetry: handleSend,
		content: runState.completionRes,
		messageId: runState.messageId,
		isInWebApp: true,
		moreLikeThis: moreLikeThisEnabled,
		onFeedback: runState.handleFeedback,
		feedback: runState.feedback,
		onSave: handleSaveMessage,
		isMobile,
		appSourceType,
		installedAppId: appId,
		isLoading: false,
		taskId: isCallBatchAPI ? taskId < 10 ? `0${taskId}` : `${taskId}` : void 0,
		controlClearMoreLikeThis: runState.controlClearMoreLikeThis,
		isShowTextToSpeech,
		hideProcessDetail: true,
		siteInfo
	})] });
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		!isCallBatchAPI && !isWorkflow && (runState.isResponding && !runState.completionRes ? /* @__PURE__ */ jsx("div", {
			className: "flex h-full w-full items-center justify-center",
			children: /* @__PURE__ */ jsx(Loading, { type: "area" })
		}) : /* @__PURE__ */ jsx(Fragment$1, { children: isNoData ? /* @__PURE__ */ jsx(no_data_default, {}) : renderTextGenerationRes() })),
		!isCallBatchAPI && isWorkflow && (runState.isResponding && !runState.workflowProcessData ? /* @__PURE__ */ jsx("div", {
			className: "flex h-full w-full items-center justify-center",
			children: /* @__PURE__ */ jsx(Loading, { type: "area" })
		}) : !runState.workflowProcessData ? /* @__PURE__ */ jsx(no_data_default, {}) : renderTextGenerationRes()),
		isCallBatchAPI && renderTextGenerationRes()
	] });
};
var result_default = React$1.memo(Result);
//#endregion
//#region app/components/share/text-generation/types.ts
var TaskStatus = /* @__PURE__ */ function(TaskStatus) {
	TaskStatus["pending"] = "pending";
	TaskStatus["running"] = "running";
	TaskStatus["completed"] = "completed";
	TaskStatus["failed"] = "failed";
	return TaskStatus;
}({});
var AudioSupportIcon_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"xmlns": "http://www.w3.org/2000/svg",
			"width": "12",
			"height": "12",
			"viewBox": "0 0 12 12",
			"fill": "none"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M10.3567 3.56405L10.2334 3.84689C10.1432 4.05396 9.8568 4.05396 9.76655 3.84689L9.6433 3.56405C9.42355 3.05973 9.02775 2.6582 8.53385 2.43854L8.154 2.26961C7.94865 2.17826 7.94865 1.8794 8.154 1.78806L8.5126 1.62857C9.0192 1.40325 9.4221 0.986865 9.63805 0.465414L9.76465 0.159767C9.8529 -0.0532556 10.1471 -0.0532556 10.2353 0.159767L10.3619 0.465414C10.5779 0.986865 10.9808 1.40325 11.4874 1.62857L11.846 1.78806C12.0514 1.8794 12.0514 2.17826 11.846 2.26961L11.4662 2.43854C10.9723 2.6582 10.5764 3.05973 10.3567 3.56405ZM4.25 3H3.25V9H4.25V3ZM2 5H1V7H2V5ZM6.5 1H5.5V11H6.5V1ZM8.75 4H7.75V9H8.75V4ZM11 5H10V7H11V5Z",
				"fill": "currentColor"
			},
			"children": []
		}]
	},
	name: "AudioSupportIcon"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/mediaAndDevices/AudioSupportIcon.tsx
var Icon$11 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: AudioSupportIcon_default
});
Icon$11.displayName = "AudioSupportIcon";
var DocumentSupportIcon_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"xmlns": "http://www.w3.org/2000/svg",
			"width": "12",
			"height": "12",
			"viewBox": "0 0 12 12",
			"fill": "none"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M10.5 4V10.4966C10.5 10.7751 10.2776 11 10.0033 11H1.9967C1.72248 11 1.5 10.778 1.5 10.5041V1.4959C1.5 1.22766 1.72435 1 2.00111 1H7.4984L10.5 4ZM9.5 4.5H7V2H2.5V10H9.5V4.5ZM4 3.5H5.5V4.5H4V3.5ZM4 5.5H8V6.5H4V5.5ZM4 7.5H8V8.5H4V7.5Z",
				"fill": "currentColor"
			},
			"children": []
		}]
	},
	name: "DocumentSupportIcon"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/mediaAndDevices/DocumentSupportIcon.tsx
var Icon$10 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: DocumentSupportIcon_default
});
Icon$10.displayName = "DocumentSupportIcon";
var MagicBox_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "12",
			"height": "12",
			"viewBox": "0 0 12 12",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "box-sparkle, magic box" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Icon" },
				"children": [
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							"d": "M9.76205 2.07424C9.99723 2.21897 10.0706 2.52694 9.92583 2.76212L8.85632 4.50007H9.5C9.77614 4.50007 10 4.72393 10 5.00007V9.00007C10 10.1046 9.10457 11.0001 8 11.0001H4C2.89543 11.0001 2 10.1046 2 9.00007V5.00007C2 4.72393 2.22386 4.50007 2.5 4.50007H7.68214L9.07417 2.23802C9.2189 2.00284 9.52687 1.92952 9.76205 2.07424ZM5 6.50007C4.72386 6.50007 4.5 6.72393 4.5 7.00007C4.5 7.27621 4.72386 7.50007 5 7.50007H7C7.27614 7.50007 7.5 7.27621 7.5 7.00007C7.5 6.72393 7.27614 6.50007 7 6.50007H5Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M5.92504 1.53733C5.97342 1.51314 6.01265 1.47391 6.03684 1.42553L6.27597 0.947279C6.3681 0.763016 6.63105 0.763017 6.72318 0.947279L6.96231 1.42553C6.9865 1.47391 7.02573 1.51314 7.07411 1.53733L7.55236 1.77646C7.73663 1.86859 7.73663 2.13154 7.55236 2.22367L7.07411 2.4628C7.02573 2.48699 6.9865 2.52622 6.96231 2.5746L6.72318 3.05285C6.63105 3.23711 6.3681 3.23711 6.27597 3.05285L6.03684 2.5746C6.01265 2.52622 5.97342 2.48699 5.92504 2.4628L5.44679 2.22367C5.26253 2.13154 5.26253 1.86859 5.44679 1.77646L5.92504 1.53733Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M3.25837 2.37067C3.30676 2.34648 3.34599 2.30724 3.37018 2.25886L3.52597 1.94728C3.6181 1.76302 3.88105 1.76302 3.97318 1.94728L4.12898 2.25886C4.15317 2.30724 4.1924 2.34648 4.24078 2.37067L4.55236 2.52646C4.73662 2.61859 4.73663 2.88154 4.55236 2.97367L4.24078 3.12946C4.1924 3.15365 4.15317 3.19289 4.12898 3.24127L3.97318 3.55285C3.88105 3.73711 3.6181 3.73711 3.52597 3.55285L3.37018 3.24127C3.34599 3.19289 3.30676 3.15365 3.25837 3.12946L2.94679 2.97367C2.76253 2.88154 2.76253 2.61859 2.94679 2.52646L3.25837 2.37067Z",
							"fill": "currentColor"
						},
						"children": []
					}
				]
			}]
		}]
	},
	name: "MagicBox"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/mediaAndDevices/MagicBox.tsx
var Icon$9 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: MagicBox_default
});
Icon$9.displayName = "MagicBox";
var MagicEyes_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "12",
			"height": "12",
			"viewBox": "0 0 12 12",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "eye-sparkle, magic eyes" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M11.0338 5.05688C9.75366 3.05335 7.90203 1.99999 6.00017 2C4.09831 2.00001 2.24669 3.05341 0.966566 5.05693C0.599687 5.63113 0.599686 6.36892 0.966566 6.94312C2.24669 8.94665 4.09832 10 6.00018 10C7.90204 9.99999 9.75366 8.94659 11.0338 6.94307C11.4007 6.36887 11.4007 5.63108 11.0338 5.05688ZM5.77639 4.44721L5.3706 5.2588C5.34641 5.30718 5.30718 5.34641 5.2588 5.3706L4.44721 5.77639C4.26295 5.86852 4.26295 6.13148 4.44721 6.22361L5.2588 6.6294C5.30718 6.65359 5.34641 6.69282 5.3706 6.7412L5.77639 7.55279C5.86852 7.73705 6.13148 7.73705 6.22361 7.55279L6.6294 6.7412C6.65359 6.69282 6.69282 6.65359 6.7412 6.6294L7.55279 6.22361C7.73705 6.13148 7.73705 5.86852 7.55279 5.77639L6.7412 5.3706C6.69282 5.34641 6.65359 5.30718 6.6294 5.2588L6.22361 4.44721C6.13148 4.26295 5.86852 4.26295 5.77639 4.44721Z",
					"fill": "currentColor"
				},
				"children": []
			}]
		}]
	},
	name: "MagicEyes"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/mediaAndDevices/MagicEyes.tsx
var Icon$8 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: MagicEyes_default
});
Icon$8.displayName = "MagicEyes";
var MagicWand_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "12",
			"height": "12",
			"viewBox": "0 0 12 12",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "magic-wand-2, magic stick, star" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Icon" },
				"children": [
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							"d": "M8.27056 1.77151C8.811 1.23107 9.68723 1.23107 10.2277 1.77151C10.7681 2.31195 10.7681 3.18818 10.2277 3.72862L3.72767 10.2286C3.18723 10.7691 2.31101 10.7691 1.77056 10.2286C1.23012 9.68818 1.23012 8.81195 1.77056 8.27151L8.27056 1.77151ZM9.52056 2.47862C9.37065 2.3287 9.12759 2.3287 8.97767 2.47862L8.08122 3.37506L8.62412 3.91796L9.52056 3.02151C9.67048 2.87159 9.67048 2.62853 9.52056 2.47862Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M4.92504 1.03733C4.97342 1.01314 5.01265 0.973911 5.03684 0.92553L5.27597 0.447279C5.3681 0.263016 5.63105 0.263017 5.72318 0.447279L5.96231 0.92553C5.9865 0.973911 6.02573 1.01314 6.07411 1.03733L6.55236 1.27646C6.73663 1.36859 6.73663 1.63154 6.55236 1.72367L6.07411 1.9628C6.02573 1.98699 5.9865 2.02622 5.96231 2.0746L5.72318 2.55285C5.63105 2.73711 5.3681 2.73711 5.27597 2.55285L5.03684 2.0746C5.01265 2.02622 4.97342 1.98699 4.92504 1.9628L4.44679 1.72367C4.26253 1.63154 4.26253 1.36859 4.44679 1.27646L4.92504 1.03733Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M9.42504 6.53733C9.47342 6.51314 9.51265 6.47391 9.53684 6.42553L9.77597 5.94728C9.8681 5.76302 10.1311 5.76302 10.2232 5.94728L10.4623 6.42553C10.4865 6.47391 10.5257 6.51314 10.5741 6.53733L11.0524 6.77646C11.2366 6.86859 11.2366 7.13154 11.0524 7.22367L10.5741 7.4628C10.5257 7.48699 10.4865 7.52622 10.4623 7.5746L10.2232 8.05285C10.1311 8.23711 9.8681 8.23711 9.77597 8.05285L9.53684 7.5746C9.51265 7.52622 9.47342 7.48699 9.42504 7.4628L8.94679 7.22367C8.76253 7.13154 8.76253 6.86859 8.94679 6.77646L9.42504 6.53733Z",
							"fill": "currentColor"
						},
						"children": []
					},
					{
						"type": "element",
						"name": "path",
						"attributes": {
							"d": "M2.42504 3.53733C2.47342 3.51314 2.51265 3.47391 2.53684 3.42553L2.77597 2.94728C2.8681 2.76302 3.13105 2.76302 3.22318 2.94728L3.46231 3.42553C3.4865 3.47391 3.52573 3.51314 3.57411 3.53733L4.05236 3.77646C4.23663 3.86859 4.23663 4.13154 4.05236 4.22367L3.57411 4.4628C3.52573 4.48699 3.4865 4.52622 3.46231 4.5746L3.22318 5.05285C3.13105 5.23711 2.8681 5.23711 2.77597 5.05285L2.53684 4.5746C2.51265 4.52622 2.47342 4.48699 2.42504 4.4628L1.94679 4.22367C1.76253 4.13154 1.76253 3.86859 1.94679 3.77646L2.42504 3.53733Z",
							"fill": "currentColor"
						},
						"children": []
					}
				]
			}]
		}]
	},
	name: "MagicWand"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/mediaAndDevices/MagicWand.tsx
var Icon$7 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: MagicWand_default
});
Icon$7.displayName = "MagicWand";
var Microphone01_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "microphone-01" },
			"children": [{
				"type": "element",
				"name": "g",
				"attributes": { "id": "Solid" },
				"children": [{
					"type": "element",
					"name": "path",
					"attributes": {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						"d": "M8.00008 0.666016C6.52732 0.666016 5.33341 1.85992 5.33341 3.33268V7.99935C5.33341 9.47211 6.52732 10.666 8.00008 10.666C9.47284 10.666 10.6667 9.47211 10.6667 7.99935V3.33268C10.6667 1.85992 9.47284 0.666016 8.00008 0.666016Z",
						"fill": "currentColor"
					},
					"children": []
				}, {
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M4.00008 6.66602C4.00008 6.29783 3.7016 5.99935 3.33341 5.99935C2.96522 5.99935 2.66675 6.29783 2.66675 6.66602V7.99935C2.66675 10.7195 4.70319 12.9641 7.33466 13.2916C7.33384 13.3052 7.33341 13.3189 7.33341 13.3327V13.9993H5.33341C4.96522 13.9993 4.66675 14.2978 4.66675 14.666C4.66675 15.0342 4.96522 15.3327 5.33341 15.3327H10.6667C11.0349 15.3327 11.3334 15.0342 11.3334 14.666C11.3334 14.2978 11.0349 13.9993 10.6667 13.9993H8.66675V13.3327C8.66675 13.3189 8.66633 13.3052 8.6655 13.2916C11.297 12.9641 13.3334 10.7195 13.3334 7.99935V6.66602C13.3334 6.29783 13.0349 5.99935 12.6667 5.99935C12.2986 5.99935 12.0001 6.29783 12.0001 6.66602V7.99935C12.0001 10.2085 10.2092 11.9993 8.00008 11.9993C5.79094 11.9993 4.00008 10.2085 4.00008 7.99935V6.66602Z",
						"fill": "currentColor"
					},
					"children": []
				}]
			}]
		}]
	},
	name: "Microphone01"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/mediaAndDevices/Microphone01.tsx
var Icon$6 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Microphone01_default
});
Icon$6.displayName = "Microphone01";
var Play_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "12",
			"height": "12",
			"viewBox": "0 0 12 12",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "play" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Solid",
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M4.00312 1.40109C4.0091 1.40508 4.0151 1.40907 4.02111 1.41309L9.29548 4.92933C9.44809 5.03105 9.58959 5.12537 9.69827 5.21301C9.81168 5.30448 9.94538 5.43132 10.0223 5.61687C10.124 5.86212 10.124 6.13775 10.0223 6.38301C9.94538 6.56856 9.81168 6.6954 9.69827 6.78686C9.5896 6.8745 9.44811 6.96881 9.2955 7.07053L4.00314 10.5988C3.8166 10.7232 3.64886 10.835 3.50652 10.9121C3.36409 10.9893 3.16859 11.0775 2.9404 11.0639C2.64852 11.0465 2.3789 10.9022 2.20249 10.669C2.06458 10.4867 2.02952 10.2751 2.01474 10.1138C1.99997 9.95254 1.99999 9.75094 2 9.52674L2 2.49475C2 2.48752 2 2.48031 2 2.47313C1.99999 2.24893 1.99997 2.04733 2.01474 1.88612C2.02952 1.72479 2.06458 1.5132 2.20249 1.33089C2.3789 1.0977 2.64852 0.953401 2.9404 0.935973C3.16859 0.922349 3.36409 1.01055 3.50652 1.08774C3.64885 1.16488 3.81659 1.27672 4.00312 1.40109Z",
					"fill": "currentColor"
				},
				"children": []
			}]
		}]
	},
	name: "Play"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/mediaAndDevices/Play.tsx
var Icon$5 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Play_default
});
Icon$5.displayName = "Play";
var Robot_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "12",
			"height": "12",
			"viewBox": "0 0 12 12",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "robot, bot" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M6 0.5C6.27614 0.5 6.5 0.723858 6.5 1V1.5H8.5C9.32843 1.5 10 2.17157 10 3V5.5C10 5.94425 9.80688 6.34339 9.5 6.61805V7.29289L10.3536 8.14645C10.5488 8.34171 10.5488 8.65829 10.3536 8.85355C10.1583 9.04882 9.84171 9.04882 9.64645 8.85355L9.34052 8.54762C8.89526 9.96884 7.56805 11 6 11C4.43195 11 3.10474 9.96884 2.65948 8.54762L2.35355 8.85355C2.15829 9.04882 1.84171 9.04882 1.64645 8.85355C1.45118 8.65829 1.45118 8.34171 1.64645 8.14645L2.5 7.29289V6.61805C2.19313 6.34339 2 5.94425 2 5.5V3C2 2.17157 2.67157 1.5 3.5 1.5H5.5V1C5.5 0.723858 5.72386 0.5 6 0.5ZM3.5 2.5C3.22386 2.5 3 2.72386 3 3V5.5C3 5.77614 3.22386 6 3.5 6H8.5C8.77614 6 9 5.77614 9 5.5V3C9 2.72386 8.77614 2.5 8.5 2.5H3.5ZM4.5 3.5C4.77614 3.5 5 3.72386 5 4V4.5C5 4.77614 4.77614 5 4.5 5C4.22386 5 4 4.77614 4 4.5V4C4 3.72386 4.22386 3.5 4.5 3.5ZM7.5 3.5C7.77614 3.5 8 3.72386 8 4V4.5C8 4.77614 7.77614 5 7.5 5C7.22386 5 7 4.77614 7 4.5V4C7 3.72386 7.22386 3.5 7.5 3.5Z",
					"fill": "currentColor"
				},
				"children": []
			}]
		}]
	},
	name: "Robot"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/mediaAndDevices/Robot.tsx
var Icon$4 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Robot_default
});
Icon$4.displayName = "Robot";
var Sliders02_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M5 2C5.55228 2 6 2.44772 6 3V7C6 7.55228 5.55228 8 5 8C4.44772 8 4 7.55228 4 7V3C4 2.44772 4.44772 2 5 2Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M6 15.8293C7.16519 15.4175 8 14.3062 8 13C8 11.3431 6.65685 10 5 10C3.34315 10 2 11.3431 2 13C2 14.3062 2.83481 15.4175 4 15.8293L4 21C4 21.5523 4.44772 22 5 22C5.55229 22 6 21.5523 6 21L6 15.8293Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V15Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M12 2C12.5523 2 13 2.44772 13 3V6.17071C14.1652 6.58254 15 7.69378 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.69378 9.83481 6.58254 11 6.17071V3C11 2.44772 11.4477 2 12 2Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M22 15C22 16.3062 21.1652 17.4175 20 17.8293V21C20 21.5523 19.5523 22 19 22C18.4477 22 18 21.5523 18 21V17.8293C16.8348 17.4175 16 16.3062 16 15C16 13.3431 17.3431 12 19 12C20.6569 12 22 13.3431 22 15Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M19 2C19.5523 2 20 2.44772 20 3V9C20 9.55228 19.5523 10 19 10C18.4477 10 18 9.55228 18 9V3C18 2.44772 18.4477 2 19 2Z",
					"fill": "currentColor"
				},
				"children": []
			}
		]
	},
	name: "Sliders02"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/mediaAndDevices/Sliders02.tsx
var Icon$3 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Sliders02_default
});
Icon$3.displayName = "Sliders02";
var Speaker_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "clip-path": "url(#clip0_109_6694)" },
			"children": [
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						"d": "M0 2.86666C0 2.05664 0.656649 1.39999 1.46667 1.39999H5.86667C6.67668 1.39999 7.33333 2.05664 7.33333 2.86666C7.33333 3.27167 7.00501 3.59999 6.6 3.59999C6.19499 3.59999 5.86667 3.27167 5.86667 2.86666H4.4V7.99999C4.80501 7.99999 5.13333 8.32831 5.13333 8.73332C5.13333 9.13833 4.80501 9.46666 4.4 9.46666H2.93333C2.52832 9.46666 2.2 9.13833 2.2 8.73332C2.2 8.32831 2.52832 7.99999 2.93333 7.99999V2.86666H1.46667C1.46667 3.27167 1.13834 3.59999 0.733333 3.59999C0.328324 3.59999 0 3.27167 0 2.86666Z",
						"fill": "currentColor"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M13.8205 0.782296C13.7434 0.62811 13.5233 0.62811 13.4462 0.782296C12.9664 1.74206 12.8754 1.83302 11.9156 2.3129C11.7615 2.39 11.7615 2.61003 11.9156 2.68712C12.8754 3.167 12.9664 3.25797 13.4462 4.21773C13.5233 4.37191 13.7434 4.37191 13.8205 4.21773C14.3003 3.25797 14.3913 3.167 15.3511 2.68712C15.5053 2.61003 15.5053 2.39 15.3511 2.3129C14.3913 1.83302 14.3003 1.74206 13.8205 0.782296Z",
						"fill": "currentColor"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M9.79394 2.25319C9.71404 2.09337 9.48596 2.09337 9.40605 2.25319C9.04994 2.96543 8.96544 3.04993 8.2532 3.40605C8.09338 3.48595 8.09338 3.71402 8.2532 3.79393C8.96544 4.15005 9.04994 4.23455 9.40606 4.94679C9.48596 5.10661 9.71404 5.10661 9.79394 4.94679C10.1501 4.23455 10.2346 4.15005 10.9468 3.79393C11.1066 3.71402 11.1066 3.48595 10.9468 3.40605C10.2346 3.04993 10.1501 2.96543 9.79394 2.25319Z",
						"fill": "currentColor"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M2.75377 11.049C2.67668 10.8948 2.45665 10.8948 2.37956 11.049C1.89969 12.0087 1.80872 12.0997 0.848971 12.5796C0.694788 12.6566 0.694787 12.8767 0.848971 12.9538C1.80872 13.4336 1.89969 13.5246 2.37956 14.4844C2.45665 14.6385 2.67668 14.6385 2.75377 14.4844C3.23365 13.5246 3.32461 13.4336 4.28436 12.9538C4.43855 12.8767 4.43855 12.6566 4.28436 12.5796C3.32461 12.0997 3.23365 12.0087 2.75377 11.049Z",
						"fill": "currentColor"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						"d": "M14.6741 8.65106C14.8886 8.50146 15.1837 8.55405 15.3333 8.76853C15.7614 9.38226 16.0125 10.1292 16.0125 10.9333C16.0125 11.7375 15.7614 12.4844 15.3333 13.0981C15.1837 13.3126 14.8886 13.3652 14.6741 13.2156C14.4596 13.066 14.407 12.7708 14.5567 12.5564C14.8775 12.0964 15.0656 11.5375 15.0656 10.9333C15.0656 10.3291 14.8775 9.77025 14.5567 9.31028C14.407 9.09581 14.4596 8.80066 14.6741 8.65106Z",
						"fill": "currentColor"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						"d": "M12.5674 6.53771C12.794 6.51987 13.0155 6.61161 13.1632 6.78449C13.2954 6.93929 13.3164 7.12549 13.3244 7.21587C13.3334 7.31718 13.3334 7.44301 13.3333 7.57103C13.3333 7.57691 13.3333 7.58278 13.3333 7.58866L13.3333 14.3C13.3334 14.428 13.3334 14.5539 13.3244 14.6552C13.3164 14.7455 13.2954 14.9317 13.1632 15.0865C13.0155 15.2594 12.794 15.3512 12.5674 15.3333C12.3644 15.3173 12.2179 15.2005 12.1484 15.1423C12.0704 15.077 11.9814 14.988 11.8909 14.8975L10.3795 13.3861C10.3357 13.3423 10.3137 13.3205 10.2971 13.3053L10.2958 13.3041L10.2941 13.3041C10.2716 13.303 10.2407 13.3029 10.1787 13.3029L9.34101 13.3029C9.22151 13.3029 9.10513 13.3029 9.00657 13.2949C8.89833 13.286 8.77062 13.2652 8.6421 13.1997C8.46392 13.1089 8.31906 12.964 8.22827 12.7859C8.16279 12.6574 8.14192 12.5296 8.13308 12.4214C8.12503 12.3228 8.12504 12.2065 8.12505 12.087V9.79916C8.12505 9.79413 8.12505 9.78909 8.12505 9.78406C8.12504 9.66456 8.12503 9.54819 8.13308 9.44963C8.14192 9.34139 8.16279 9.21368 8.22827 9.08517C8.31906 8.90699 8.46392 8.76212 8.6421 8.67133C8.77062 8.60585 8.89833 8.58498 9.00657 8.57614C9.10512 8.56809 9.2215 8.5681 9.341 8.56812C9.34603 8.56812 9.35106 8.56812 9.3561 8.56812H10.1787C10.2407 8.56812 10.2716 8.56801 10.2941 8.56698L10.2958 8.5669L10.2971 8.56575C10.3137 8.55058 10.3357 8.52877 10.3795 8.48491L11.8784 6.98602C11.8826 6.98186 11.8867 6.97771 11.8909 6.97355C11.9814 6.88302 12.0704 6.79403 12.1484 6.72874C12.2179 6.67049 12.3644 6.55368 12.5674 6.53771Z",
						"fill": "currentColor"
					},
					"children": []
				}
			]
		}, {
			"type": "element",
			"name": "defs",
			"attributes": {},
			"children": [{
				"type": "element",
				"name": "clipPath",
				"attributes": { "id": "clip0_109_6694" },
				"children": [{
					"type": "element",
					"name": "rect",
					"attributes": {
						"width": "16",
						"height": "16",
						"fill": "white"
					},
					"children": []
				}]
			}]
		}]
	},
	name: "Speaker"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/mediaAndDevices/Speaker.tsx
var Icon$2 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Speaker_default
});
Icon$2.displayName = "Speaker";
var StopCircle_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "20",
			"height": "20",
			"viewBox": "0 0 20 20",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "stop-circle" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Solid",
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M9.99992 0.833984C4.93731 0.833984 0.833252 4.93804 0.833252 10.0007C0.833252 15.0633 4.93731 19.1673 9.99992 19.1673C15.0625 19.1673 19.1666 15.0633 19.1666 10.0007C19.1666 4.93804 15.0625 0.833984 9.99992 0.833984ZM6.75741 7.12232C6.66658 7.30058 6.66658 7.53394 6.66658 8.00065V12.0006C6.66658 12.4674 6.66658 12.7007 6.75741 12.879C6.83731 13.0358 6.96479 13.1633 7.12159 13.2432C7.29985 13.334 7.53321 13.334 7.99992 13.334H11.9999C12.4666 13.334 12.7 13.334 12.8782 13.2432C13.035 13.1633 13.1625 13.0358 13.2424 12.879C13.3333 12.7007 13.3333 12.4674 13.3333 12.0006V8.00065C13.3333 7.53394 13.3333 7.30058 13.2424 7.12232C13.1625 6.96552 13.035 6.83804 12.8782 6.75814C12.7 6.66732 12.4666 6.66732 11.9999 6.66732H7.99992C7.53321 6.66732 7.29985 6.66732 7.12159 6.75814C6.96479 6.83804 6.83731 6.96552 6.75741 7.12232Z",
					"fill": "currentColor"
				},
				"children": []
			}]
		}]
	},
	name: "StopCircle"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/mediaAndDevices/StopCircle.tsx
var Icon$1 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: StopCircle_default
});
Icon$1.displayName = "StopCircle";
var VideoSupportIcon_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"xmlns": "http://www.w3.org/2000/svg",
			"width": "12",
			"height": "12",
			"viewBox": "0 0 12 12",
			"fill": "none"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M10.2334 4.3469L10.3567 4.06406C10.5764 3.55974 10.9723 3.15821 11.4662 2.93854L11.846 2.76961C12.0514 2.67827 12.0514 2.37941 11.846 2.28806L11.4874 2.12857C10.9808 1.90326 10.5779 1.48687 10.3619 0.965415L10.2353 0.659765C10.1471 0.446745 9.8529 0.446745 9.76465 0.659765L9.63805 0.965415C9.4221 1.48687 9.0192 1.90326 8.5126 2.12857L8.154 2.28806C7.94865 2.37941 7.94865 2.67827 8.154 2.76961L8.53385 2.93854C9.02775 3.15821 9.42355 3.55974 9.6433 4.06406L9.76655 4.3469C9.8568 4.55396 10.1432 4.55396 10.2334 4.3469ZM1.4959 1.5H7V2.5H4V9.5H8V4.5H9V5.5H10H11V10.0033C11 10.2776 10.7723 10.5 10.5041 10.5H1.4959C1.22203 10.5 1 10.2775 1 10.0033V1.9967C1 1.72238 1.22766 1.5 1.4959 1.5ZM2 2.5V3.5H3V2.5H2ZM2 4.5V5.5H3V4.5H2ZM2 6.5V7.5H3V6.5H2ZM9 6.5V7.5H10V6.5H9ZM2 8.5V9.5H3V8.5H2ZM9 8.5V9.5H10V8.5H9Z",
				"fill": "currentColor"
			},
			"children": []
		}]
	},
	name: "VideoSupportIcon"
};
//#endregion
//#region app/components/base/icons/src/vender/solid/mediaAndDevices/VideoSupportIcon.tsx
var Icon = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: VideoSupportIcon_default
});
Icon.displayName = "VideoSupportIcon";
//#endregion
//#region app/components/share/text-generation/run-once/index.tsx
var RunOnce = ({ promptConfig, inputs, inputsRef, onInputsChange, onSend, visionConfig, onVisionFilesChange, runControl }) => {
	const { t } = useTranslation();
	const isPC = useBreakpoints() === MediaType.pc;
	const [isInitialized, setIsInitialized] = useState(false);
	const onClear = () => {
		const newInputs = {};
		promptConfig.prompt_variables.forEach((item) => {
			if (item.type === "string" || item.type === "paragraph") newInputs[item.key] = "";
			else if (item.type === "number") newInputs[item.key] = "";
			else if (item.type === "checkbox") newInputs[item.key] = false;
			else newInputs[item.key] = void 0;
		});
		onInputsChange(newInputs);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		onSend();
	};
	const isRunning = !!runControl;
	const stopLabel = t("generation.stopRun", {
		ns: "share",
		defaultValue: "Stop Run"
	});
	const handlePrimaryClick = useCallback((e) => {
		if (!isRunning) return;
		e.preventDefault();
		runControl?.onStop?.();
	}, [isRunning, runControl]);
	const handleInputsChange = useCallback((newInputs) => {
		onInputsChange(newInputs);
		inputsRef.current = newInputs;
	}, [onInputsChange, inputsRef]);
	useEffect(() => {
		if (isInitialized) return;
		const newInputs = {};
		promptConfig.prompt_variables.forEach((item) => {
			if (item.type === "select") newInputs[item.key] = item.default;
			else if (item.type === "string" || item.type === "paragraph") newInputs[item.key] = item.default || "";
			else if (item.type === "number") newInputs[item.key] = item.default ?? "";
			else if (item.type === "checkbox") newInputs[item.key] = item.default || false;
			else if (item.type === "file") newInputs[item.key] = void 0;
			else if (item.type === "file-list") newInputs[item.key] = [];
			else newInputs[item.key] = void 0;
		});
		onInputsChange(newInputs);
		setIsInitialized(true);
	}, [promptConfig.prompt_variables, onInputsChange]);
	return /* @__PURE__ */ jsx("div", {
		className: "",
		children: /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("form", {
			onSubmit,
			children: [
				inputs === null || inputs === void 0 || Object.keys(inputs).length === 0 || !isInitialized ? null : promptConfig.prompt_variables.filter((item) => item.hide !== true).map((item) => /* @__PURE__ */ jsxs("div", {
					className: "mt-4 w-full",
					children: [item.type !== "checkbox" && /* @__PURE__ */ jsxs("div", {
						className: "system-md-semibold flex h-6 items-center gap-1 text-text-secondary",
						children: [/* @__PURE__ */ jsx("div", {
							className: "truncate",
							children: item.name
						}), !item.required && /* @__PURE__ */ jsx("span", {
							className: "system-xs-regular text-text-tertiary",
							children: t("panel.optional", { ns: "workflow" })
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-1",
						children: [
							item.type === "select" && /* @__PURE__ */ jsx(select_default$1, {
								className: "w-full",
								defaultValue: inputs[item.key],
								onSelect: (i) => {
									handleInputsChange({
										...inputsRef.current,
										[item.key]: i.value
									});
								},
								items: (item.options || []).map((i) => ({
									name: i,
									value: i
								})),
								allowSearch: false
							}),
							item.type === "string" && /* @__PURE__ */ jsx(Input$1, {
								type: "text",
								placeholder: item.name,
								value: inputs[item.key],
								onChange: (e) => {
									handleInputsChange({
										...inputsRef.current,
										[item.key]: e.target.value
									});
								},
								maxLength: item.max_length
							}),
							item.type === "paragraph" && /* @__PURE__ */ jsx(Textarea, {
								className: "h-[104px] sm:text-xs",
								placeholder: item.name,
								value: inputs[item.key],
								onChange: (e) => {
									handleInputsChange({
										...inputsRef.current,
										[item.key]: e.target.value
									});
								}
							}),
							item.type === "number" && /* @__PURE__ */ jsx(Input$1, {
								type: "number",
								placeholder: item.name,
								value: inputs[item.key],
								onChange: (e) => {
									handleInputsChange({
										...inputsRef.current,
										[item.key]: e.target.value
									});
								}
							}),
							item.type === "checkbox" && /* @__PURE__ */ jsx(bool_input_default, {
								name: item.name || item.key,
								value: !!inputs[item.key],
								required: item.required,
								onChange: (value) => {
									handleInputsChange({
										...inputsRef.current,
										[item.key]: value
									});
								}
							}),
							item.type === "file" && /* @__PURE__ */ jsx(FileUploaderInAttachmentWrapper, {
								value: inputs[item.key] && typeof inputs[item.key] === "object" && !Array.isArray(inputs[item.key]) ? [inputs[item.key]] : [],
								onChange: (files) => {
									handleInputsChange({
										...inputsRef.current,
										[item.key]: files[0]
									});
								},
								fileConfig: {
									...item.config,
									fileUploadConfig: visionConfig.fileUploadConfig
								}
							}),
							item.type === "file-list" && /* @__PURE__ */ jsx(FileUploaderInAttachmentWrapper, {
								value: Array.isArray(inputs[item.key]) ? inputs[item.key] : [],
								onChange: (files) => {
									handleInputsChange({
										...inputsRef.current,
										[item.key]: files
									});
								},
								fileConfig: {
									...item.config,
									fileUploadConfig: visionConfig.fileUploadConfig
								}
							}),
							item.type === "json_object" && /* @__PURE__ */ jsx(code_editor_default, {
								language: CodeLanguage.json,
								value: inputs[item.key],
								onChange: (value) => {
									handleInputsChange({
										...inputsRef.current,
										[item.key]: value
									});
								},
								noWrapper: true,
								className: "bg h-[80px] overflow-y-auto rounded-[10px] bg-components-input-bg-normal p-1",
								placeholder: /* @__PURE__ */ jsx("div", {
									className: "whitespace-pre",
									children: typeof item.json_schema === "string" ? item.json_schema : JSON.stringify(item.json_schema || "", null, 2)
								})
							})
						]
					})]
				}, item.key)),
				visionConfig?.enabled && /* @__PURE__ */ jsxs("div", {
					className: "mt-4 w-full",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-md-semibold flex h-6 items-center text-text-secondary",
						children: t("imageUploader.imageUpload", { ns: "common" })
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-1",
						children: /* @__PURE__ */ jsx(TextGenerationImageUploader, {
							settings: visionConfig,
							onFilesChange: (files) => onVisionFilesChange(files.filter((file) => file.progress !== -1).map((fileItem) => ({
								type: "image",
								transfer_method: fileItem.type,
								url: fileItem.url,
								upload_file_id: fileItem.fileId
							})))
						})
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mb-3 mt-6 w-full",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ jsx(Button, {
							onClick: onClear,
							disabled: false,
							children: /* @__PURE__ */ jsx("span", {
								className: "text-[13px]",
								children: t("operation.clear", { ns: "common" })
							})
						}), /* @__PURE__ */ jsx(Button, {
							className: cn(!isPC && "grow"),
							type: isRunning ? "button" : "submit",
							variant: isRunning ? "secondary" : "primary",
							disabled: isRunning && runControl?.isStopping,
							onClick: handlePrimaryClick,
							"data-testid": isRunning ? "stop-button" : "run-button",
							children: isRunning ? /* @__PURE__ */ jsxs(Fragment$1, { children: [runControl?.isStopping ? /* @__PURE__ */ jsx(Dm, {
								className: "mr-1 h-4 w-4 shrink-0 animate-spin",
								"aria-hidden": "true"
							}) : /* @__PURE__ */ jsx(Icon$1, {
								className: "mr-1 h-4 w-4 shrink-0",
								"aria-hidden": "true"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[13px]",
								children: stopLabel
							})] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(pG, {
								className: "mr-1 h-4 w-4 shrink-0",
								"aria-hidden": "true"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[13px]",
								children: t("generation.run", { ns: "share" })
							})] })
						})]
					})
				})
			]
		}) })
	});
};
var run_once_default = React$1.memo(RunOnce);
//#endregion
//#region app/components/explore/try-app/app/text-generation.tsx
var TextGeneration = ({ appId, className, isWorkflow, appData }) => {
	const { t } = useTranslation();
	const isPC = useBreakpoints() === MediaType.pc;
	const [inputs, doSetInputs] = useState({});
	const inputsRef = useRef(inputs);
	const setInputs = useCallback((newInputs) => {
		doSetInputs(newInputs);
		inputsRef.current = newInputs;
	}, []);
	const updateAppInfo = useWebAppStore((s) => s.updateAppInfo);
	const { data: tryAppParams } = useGetTryAppParams(appId);
	const updateAppParams = useWebAppStore((s) => s.updateAppParams);
	const appParams = useWebAppStore((s) => s.appParams);
	const [siteInfo, setSiteInfo] = useState(null);
	const [promptConfig, setPromptConfig] = useState(null);
	const [customConfig, setCustomConfig] = useState(null);
	const [moreLikeThisConfig, setMoreLikeThisConfig] = useState(null);
	const [textToSpeechConfig, setTextToSpeechConfig] = useState(null);
	const [controlSend, setControlSend] = useState(0);
	const [visionConfig, setVisionConfig] = useState({
		enabled: false,
		number_limits: 2,
		detail: Resolution.low,
		transfer_methods: [TransferMethod.local_file]
	});
	const [completionFiles, setCompletionFiles] = useState([]);
	const [isShowResultPanel, { setTrue: doShowResultPanel, setFalse: hideResultPanel }] = useBoolean(false);
	const showResultPanel = () => {
		setTimeout(() => {
			doShowResultPanel();
		}, 0);
	};
	const handleSend = () => {
		setControlSend(Date.now());
		showResultPanel();
	};
	const [resultExisted, setResultExisted] = useState(false);
	useEffect(() => {
		if (!appData) return;
		updateAppInfo(appData);
	}, [appData, updateAppInfo]);
	useEffect(() => {
		if (!tryAppParams) return;
		updateAppParams(tryAppParams);
	}, [tryAppParams, updateAppParams]);
	useEffect(() => {
		(async () => {
			if (!appData || !appParams) return;
			const { site: siteInfo, custom_config } = appData;
			setSiteInfo(siteInfo);
			setCustomConfig(custom_config);
			const { user_input_form, more_like_this, file_upload, text_to_speech } = appParams;
			setVisionConfig({
				...file_upload,
				transfer_methods: file_upload?.allowed_file_upload_methods || file_upload?.allowed_upload_methods,
				image_file_size_limit: appParams?.system_parameters.image_file_size_limit,
				fileUploadConfig: appParams?.system_parameters
			});
			setPromptConfig({
				prompt_template: "",
				prompt_variables: userInputsFormToPromptVariables(user_input_form)
			});
			setMoreLikeThisConfig(more_like_this);
			setTextToSpeechConfig(text_to_speech);
		})();
	}, [appData, appParams]);
	const [isCompleted, setIsCompleted] = useState(false);
	const handleCompleted = useCallback(() => {
		setIsCompleted(true);
	}, []);
	const [isHideTryNotice, { setTrue: hideTryNotice }] = useBoolean(false);
	const renderRes = (task) => /* @__PURE__ */ jsx(result_default, {
		isWorkflow: !!isWorkflow,
		isCallBatchAPI: false,
		isPC,
		isMobile: !isPC,
		appSourceType: AppSourceType.tryApp,
		appId,
		isError: task?.status === TaskStatus.failed,
		promptConfig,
		moreLikeThisEnabled: !!moreLikeThisConfig?.enabled,
		inputs,
		controlSend,
		onShowRes: showResultPanel,
		handleSaveMessage: noop,
		taskId: task?.id,
		onCompleted: handleCompleted,
		visionConfig,
		completionFiles,
		isShowTextToSpeech: !!textToSpeechConfig?.enabled,
		siteInfo,
		onRunStart: () => setResultExisted(true)
	}, task?.id);
	const renderResWrap = /* @__PURE__ */ jsx("div", {
		className: cn("relative flex h-full flex-col", "rounded-r-2xl bg-chatbot-bg"),
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("flex h-0 grow flex-col overflow-y-auto p-6"),
			children: [isCompleted && !isHideTryNotice && /* @__PURE__ */ jsx(alert_default, {
				className: "mb-3 shrink-0",
				message: t("tryApp.tryInfo", { ns: "explore" }),
				onHide: hideTryNotice
			}), renderRes()]
		})
	});
	if (!siteInfo || !promptConfig) return /* @__PURE__ */ jsx("div", {
		className: cn("flex h-screen items-center", className),
		children: /* @__PURE__ */ jsx(Loading, { type: "app" })
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn("rounded-2xl border border-components-panel-border bg-background-section-burn", isPC && "flex", !isPC && "flex-col", "h-full rounded-2xl shadow-md", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("relative flex h-full shrink-0 flex-col", isPC && "w-[600px] max-w-[50%]", "rounded-l-2xl bg-components-panel-bg"),
			children: [/* @__PURE__ */ jsxs("div", {
				className: cn("shrink-0 space-y-4 pb-2", isPC ? " p-8 pb-0" : "p-4 pb-0"),
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx(app_icon_default, {
						size: isPC ? "large" : "small",
						iconType: siteInfo.icon_type,
						icon: siteInfo.icon,
						background: siteInfo.icon_background || "#D5F5F6",
						imageUrl: siteInfo.icon_url
					}), /* @__PURE__ */ jsx("div", {
						className: "system-md-semibold grow truncate text-text-secondary",
						children: siteInfo.title
					})]
				}), siteInfo.description && /* @__PURE__ */ jsx("div", {
					className: "system-xs-regular text-text-tertiary",
					children: siteInfo.description
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: cn("h-0 grow overflow-y-auto", isPC ? "px-8" : "px-4", !isPC && resultExisted && customConfig?.remove_webapp_brand && "rounded-b-2xl border-b-[0.5px] border-divider-regular"),
				children: /* @__PURE__ */ jsx(run_once_default, {
					siteInfo,
					inputs,
					inputsRef,
					onInputsChange: setInputs,
					promptConfig,
					onSend: handleSend,
					visionConfig,
					onVisionFilesChange: setCompletionFiles
				})
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: cn("h-full w-0 grow"),
			children: [!isPC && /* @__PURE__ */ jsx("div", {
				className: cn(isShowResultPanel ? "flex items-center justify-center p-2 pt-6" : "absolute left-0 top-0 z-10 flex w-full items-center justify-center px-2 pb-[57px] pt-[3px]"),
				onClick: () => {
					if (isShowResultPanel) hideResultPanel();
					else showResultPanel();
				},
				children: /* @__PURE__ */ jsx("div", { className: "h-1 w-8 cursor-grab rounded bg-divider-solid" })
			}), renderResWrap]
		})]
	});
};
var text_generation_default = React$1.memo(TextGeneration);
//#endregion
//#region app/components/explore/try-app/app/index.tsx
var TryApp$1 = ({ appId, appDetail }) => {
	const mode = appDetail?.mode;
	const isChat = [
		"chat",
		"advanced-chat",
		"agent-chat"
	].includes(mode);
	const isCompletion = !isChat;
	useDocumentTitle(appDetail?.site?.title || "");
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full w-full",
		children: [isChat && /* @__PURE__ */ jsx(chat_default, {
			appId,
			appDetail,
			className: "h-full grow"
		}), isCompletion && /* @__PURE__ */ jsx(text_generation_default, {
			appId,
			className: "h-full grow",
			isWorkflow: mode === "workflow",
			appData: {
				app_id: appId,
				custom_config: {},
				...appDetail
			}
		})]
	});
};
var app_default = React$1.memo(TryApp$1);
//#endregion
//#region app/components/explore/try-app/app-info/use-get-requirements.ts
var PROVIDER_PLUGIN_ALIASES = {
	model: { google: "gemini" },
	tool: {
		stepfun: "stepfun_tool",
		jina: "jina_tool",
		siliconflow: "siliconflow_tool",
		gitee_ai: "gitee_ai_tool"
	}
};
var parseProviderId = (providerId) => {
	const segments = providerId.split("/").filter(Boolean);
	if (!segments.length) return null;
	if (segments.length === 1) return {
		organization: "langgenius",
		providerName: segments[0]
	};
	return {
		organization: segments[0],
		providerName: segments[1]
	};
};
var getPluginName = (providerName, type) => {
	return PROVIDER_PLUGIN_ALIASES[type][providerName] || providerName;
};
var getIconUrl = (providerId, type) => {
	const parsed = parseProviderId(providerId);
	if (!parsed) return "";
	return `${MARKETPLACE_API_PREFIX}/plugins/${encodeURIComponent(parsed.organization)}/${encodeURIComponent(getPluginName(parsed.providerName, type))}/icon`;
};
var useGetRequirements = ({ appDetail, appId }) => {
	const isBasic = [
		"chat",
		"completion",
		"agent-chat"
	].includes(appDetail.mode);
	const isAgent = appDetail.mode === "agent-chat";
	const isAdvanced = !isBasic;
	const { data: flowData } = useGetTryAppFlowPreview(appId, isBasic);
	const requirements = [];
	if (isBasic) {
		const modelProvider = appDetail.model_config.model.provider;
		const name = appDetail.model_config.model.provider.split("/").pop() || "";
		requirements.push({
			name,
			iconUrl: getIconUrl(modelProvider, "model")
		});
	}
	if (isAgent) requirements.push(...appDetail.model_config.agent_mode.tools.filter((data) => data.enabled).map((data) => {
		const tool = data;
		return {
			name: tool.tool_label,
			iconUrl: getIconUrl(tool.provider_id, "tool")
		};
	}));
	if (isAdvanced && flowData && flowData?.graph?.nodes?.length > 0) {
		const nodes = flowData.graph.nodes;
		const llmNodes = nodes.filter((node) => node.data.type === BlockEnum.LLM);
		requirements.push(...llmNodes.map((node) => {
			const data = node.data;
			return {
				name: data.model.name,
				iconUrl: getIconUrl(data.model.provider, "model")
			};
		}));
		const toolNodes = nodes.filter((node) => node.data.type === BlockEnum.Tool);
		requirements.push(...toolNodes.map((node) => {
			const data = node.data;
			return {
				name: data.tool_label,
				iconUrl: getIconUrl(data.provider_id, "tool")
			};
		}));
	}
	return { requirements: uniqBy(requirements, "name") };
};
//#endregion
//#region app/components/explore/try-app/app-info/index.tsx
var headerClassName = "system-sm-semibold-uppercase text-text-secondary mb-3";
var requirementIconSize = 20;
var RequirementIcon = ({ iconUrl }) => {
	const [failedSource, setFailedSource] = React$1.useState(null);
	if (!iconUrl || failedSource === iconUrl) return /* @__PURE__ */ jsx("div", {
		className: "flex size-5 items-center justify-center overflow-hidden rounded-[6px] border-[0.5px] border-components-panel-border-subtle bg-background-default-dodge",
		children: /* @__PURE__ */ jsx("div", { className: "i-custom-public-other-default-tool-icon size-3 text-text-tertiary" })
	});
	return /* @__PURE__ */ jsx("img", {
		className: "size-5 rounded-md object-cover shadow-xs",
		src: iconUrl,
		alt: "",
		"aria-hidden": "true",
		width: requirementIconSize,
		height: requirementIconSize,
		onError: () => setFailedSource(iconUrl)
	});
};
var AppInfo = ({ appId, className, category, appDetail, onCreate }) => {
	const { t } = useTranslation();
	const mode = appDetail?.mode;
	const { requirements } = useGetRequirements({
		appDetail,
		appId
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-full flex-col px-4 pt-2", className),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 grow-0 items-center gap-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative shrink-0",
					children: [/* @__PURE__ */ jsx(app_icon_default, {
						size: "large",
						iconType: appDetail.site.icon_type,
						icon: appDetail.site.icon,
						background: appDetail.site.icon_background,
						imageUrl: appDetail.site.icon_url
					}), /* @__PURE__ */ jsx(AppTypeIcon, {
						wrapperClassName: "absolute -bottom-0.5 -right-0.5 w-4 h-4 shadow-sm",
						className: "h-3 w-3",
						type: mode
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "w-0 grow py-[1px]",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex items-center text-sm font-semibold leading-5 text-text-secondary",
						children: /* @__PURE__ */ jsx("div", {
							className: "truncate",
							title: appDetail.name,
							children: appDetail.name
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center text-[10px] font-medium leading-[18px] text-text-tertiary",
						children: [
							mode === "advanced-chat" && /* @__PURE__ */ jsx("div", {
								className: "truncate",
								children: t("types.advanced", { ns: "app" }).toUpperCase()
							}),
							mode === "chat" && /* @__PURE__ */ jsx("div", {
								className: "truncate",
								children: t("types.chatbot", { ns: "app" }).toUpperCase()
							}),
							mode === "agent-chat" && /* @__PURE__ */ jsx("div", {
								className: "truncate",
								children: t("types.agent", { ns: "app" }).toUpperCase()
							}),
							mode === "workflow" && /* @__PURE__ */ jsx("div", {
								className: "truncate",
								children: t("types.workflow", { ns: "app" }).toUpperCase()
							}),
							mode === "completion" && /* @__PURE__ */ jsx("div", {
								className: "truncate",
								children: t("types.completion", { ns: "app" }).toUpperCase()
							})
						]
					})]
				})]
			}),
			appDetail.description && /* @__PURE__ */ jsx("div", {
				className: "mt-[14px] shrink-0 text-text-secondary system-sm-regular",
				children: appDetail.description
			}),
			/* @__PURE__ */ jsxs(Button, {
				variant: "primary",
				className: "mt-3 flex w-full max-w-full",
				onClick: onCreate,
				children: [/* @__PURE__ */ jsx("span", { className: "i-ri-add-line mr-1 size-4 shrink-0" }), /* @__PURE__ */ jsx("span", {
					className: "truncate",
					children: t("tryApp.createFromSampleApp", { ns: "explore" })
				})]
			}),
			category && /* @__PURE__ */ jsxs("div", {
				className: "mt-6 shrink-0",
				children: [/* @__PURE__ */ jsx("div", {
					className: headerClassName,
					children: t("tryApp.category", { ns: "explore" })
				}), /* @__PURE__ */ jsx("div", {
					className: "text-text-secondary system-md-regular",
					children: category
				})]
			}),
			requirements.length > 0 && /* @__PURE__ */ jsxs("div", {
				className: "mt-5 grow overflow-y-auto",
				children: [/* @__PURE__ */ jsx("div", {
					className: headerClassName,
					children: t("tryApp.requirements", { ns: "explore" })
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-0.5",
					children: requirements.map((item) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-center space-x-2 py-1",
						children: [/* @__PURE__ */ jsx(RequirementIcon, { iconUrl: item.iconUrl }), /* @__PURE__ */ jsx("div", {
							className: "w-0 grow truncate text-text-secondary system-md-regular",
							children: item.name
						})]
					}, item.name))
				})]
			})
		]
	});
};
var app_info_default = React$1.memo(AppInfo);
//#endregion
//#region app/components/explore/try-app/preview/basic-app-preview.tsx
var defaultModelConfig = {
	provider: "langgenius/openai/openai",
	model_id: "gpt-3.5-turbo",
	mode: ModelModeType.unset,
	configs: {
		prompt_template: "",
		prompt_variables: []
	},
	more_like_this: null,
	opening_statement: "",
	suggested_questions: [],
	sensitive_word_avoidance: null,
	speech_to_text: null,
	text_to_speech: null,
	file_upload: null,
	suggested_questions_after_answer: null,
	retriever_resource: null,
	annotation_reply: null,
	dataSets: [],
	agentConfig: DEFAULT_AGENT_SETTING
};
var BasicAppPreview = ({ appId }) => {
	const isMobile = useBreakpoints() === MediaType.mobile;
	const { data: appDetail, isLoading: isLoadingAppDetail } = useGetTryAppInfo(appId);
	const { data: collectionListFromServer, isLoading: isLoadingToolProviders } = useAllToolProviders();
	const collectionList = collectionListFromServer?.map((item) => {
		return {
			...item,
			icon: basePath && typeof item.icon == "string" && !item.icon.includes(basePath) ? `${basePath}${item.icon}` : item.icon
		};
	});
	const { data: dataSetData, isLoading: isLoadingDatasets } = useGetTryAppDataSets(appId, (() => {
		if (isLoadingAppDetail) return [];
		const modelConfig = appDetail?.model_config;
		if (!modelConfig) return [];
		let datasets = null;
		if (modelConfig.agent_mode?.tools?.find(({ dataset }) => dataset?.enabled)) datasets = modelConfig.agent_mode?.tools.filter(({ dataset }) => dataset?.enabled);
		else if (modelConfig.dataset_configs.datasets?.datasets?.length > 0) datasets = modelConfig.dataset_configs?.datasets?.datasets;
		if (datasets?.length && datasets?.length > 0) return datasets.map(({ dataset }) => dataset.id);
		return [];
	})());
	const dataSets = dataSetData?.data || [];
	const isLoading = isLoadingAppDetail || isLoadingDatasets || isLoadingToolProviders;
	const modelConfig = ((modelConfig) => {
		if (isLoading || !modelConfig) return defaultModelConfig;
		const model = modelConfig.model;
		return {
			provider: correctModelProvider(model.provider),
			model_id: model.name,
			mode: model.mode,
			configs: {
				prompt_template: modelConfig.pre_prompt || "",
				prompt_variables: userInputsFormToPromptVariables([...modelConfig.user_input_form, ...modelConfig.external_data_tools?.length ? modelConfig.external_data_tools.map((item) => {
					return { external_data_tool: {
						variable: item.variable,
						label: item.label,
						enabled: item.enabled,
						type: item.type,
						config: item.config,
						required: true,
						icon: item.icon,
						icon_background: item.icon_background
					} };
				}) : []], modelConfig.dataset_query_variable)
			},
			more_like_this: modelConfig.more_like_this,
			opening_statement: modelConfig.opening_statement,
			suggested_questions: modelConfig.suggested_questions,
			sensitive_word_avoidance: modelConfig.sensitive_word_avoidance,
			speech_to_text: modelConfig.speech_to_text,
			text_to_speech: modelConfig.text_to_speech,
			file_upload: modelConfig.file_upload,
			suggested_questions_after_answer: modelConfig.suggested_questions_after_answer,
			retriever_resource: modelConfig.retriever_resource,
			annotation_reply: modelConfig.annotation_reply,
			external_data_tools: modelConfig.external_data_tools,
			dataSets,
			agentConfig: appDetail?.mode === "agent-chat" ? {
				max_iteration: DEFAULT_AGENT_SETTING.max_iteration,
				...modelConfig.agent_mode,
				enabled: true,
				tools: modelConfig.agent_mode?.tools.filter((tool) => {
					return !tool.dataset;
				}).map((tool) => {
					const toolInCollectionList = collectionList?.find((c) => tool.provider_id === c.id);
					return {
						...tool,
						isDeleted: appDetail?.deleted_tools?.some((deletedTool) => deletedTool.id === tool.id && deletedTool.tool_name === tool.tool_name),
						notAuthor: toolInCollectionList?.is_team_authorization === false,
						...tool.provider_type === "builtin" ? {
							provider_id: correctToolProvider(tool.provider_name, !!toolInCollectionList),
							provider_name: correctToolProvider(tool.provider_name, !!toolInCollectionList)
						} : {}
					};
				})
			} : DEFAULT_AGENT_SETTING
		};
	})(appDetail?.model_config);
	const mode = appDetail?.mode;
	const promptMode = modelConfig?.prompt_type === PromptMode.advanced ? PromptMode.advanced : PromptMode.simple;
	const isAdvancedMode = promptMode === PromptMode.advanced;
	const isAgent = mode === "agent-chat";
	const chatPromptConfig = isAdvancedMode ? modelConfig?.chat_prompt_config || clone(DEFAULT_CHAT_PROMPT_CONFIG) : void 0;
	const suggestedQuestions = modelConfig?.suggested_questions || [];
	const moreLikeThisConfig = modelConfig?.more_like_this || { enabled: false };
	const suggestedQuestionsAfterAnswerConfig = modelConfig?.suggested_questions_after_answer || { enabled: false };
	const speechToTextConfig = modelConfig?.speech_to_text || { enabled: false };
	const textToSpeechConfig = modelConfig?.text_to_speech || {
		enabled: false,
		voice: "",
		language: ""
	};
	const citationConfig = modelConfig?.retriever_resource || { enabled: false };
	const annotationConfig = modelConfig?.annotation_reply || {
		id: "",
		enabled: false,
		score_threshold: ANNOTATION_DEFAULT.score_threshold,
		embedding_model: {
			embedding_provider_name: "",
			embedding_model_name: ""
		}
	};
	const moderationConfig = modelConfig?.sensitive_word_avoidance || { enabled: false };
	const completionPromptConfig = modelConfig?.completion_prompt_config || clone(DEFAULT_COMPLETION_PROMPT_CONFIG);
	const inputs = {};
	const query = "";
	const completionParams = useState({});
	const { currentModel: currModel } = useTextGenerationCurrentProviderAndModelAndModelList({
		provider: modelConfig.provider,
		model: modelConfig.model_id
	});
	const isShowVisionConfig = !!currModel?.features?.includes(ModelFeatureEnum.vision);
	const isShowDocumentConfig = !!currModel?.features?.includes(ModelFeatureEnum.document);
	const isShowAudioConfig = !!currModel?.features?.includes(ModelFeatureEnum.audio);
	const isAllowVideoUpload = !!currModel?.features?.includes(ModelFeatureEnum.video);
	const visionConfig = {
		enabled: false,
		number_limits: 2,
		detail: Resolution.low,
		transfer_methods: [TransferMethod.local_file]
	};
	const featuresData = useMemo(() => {
		return {
			moreLikeThis: modelConfig.more_like_this || { enabled: false },
			opening: {
				enabled: !!modelConfig.opening_statement,
				opening_statement: modelConfig.opening_statement || "",
				suggested_questions: modelConfig.suggested_questions || []
			},
			moderation: modelConfig.sensitive_word_avoidance || { enabled: false },
			speech2text: modelConfig.speech_to_text || { enabled: false },
			text2speech: modelConfig.text_to_speech || { enabled: false },
			file: {
				image: {
					detail: modelConfig.file_upload?.image?.detail || Resolution.high,
					enabled: !!modelConfig.file_upload?.image?.enabled,
					number_limits: modelConfig.file_upload?.image?.number_limits || 3,
					transfer_methods: modelConfig.file_upload?.image?.transfer_methods || ["local_file", "remote_url"]
				},
				enabled: !!(modelConfig.file_upload?.enabled || modelConfig.file_upload?.image?.enabled),
				allowed_file_types: modelConfig.file_upload?.allowed_file_types || [],
				allowed_file_extensions: modelConfig.file_upload?.allowed_file_extensions || [...FILE_EXTS[SupportUploadFileTypes.image], ...FILE_EXTS[SupportUploadFileTypes.video]].map((ext) => `.${ext}`),
				allowed_file_upload_methods: modelConfig.file_upload?.allowed_file_upload_methods || modelConfig.file_upload?.image?.transfer_methods || ["local_file", "remote_url"],
				number_limits: modelConfig.file_upload?.number_limits || modelConfig.file_upload?.image?.number_limits || 3,
				fileUploadConfig: {}
			},
			suggested: modelConfig.suggested_questions_after_answer || { enabled: false },
			citation: modelConfig.retriever_resource || { enabled: false },
			annotationReply: modelConfig.annotation_reply || { enabled: false }
		};
	}, [modelConfig]);
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsx(Loading, { type: "area" })
	});
	const value = {
		readonly: true,
		appId,
		isAPIKeySet: true,
		isTrailFinished: false,
		mode,
		modelModeType: "",
		promptMode,
		isAdvancedMode,
		isAgent,
		isOpenAI: false,
		isFunctionCall: false,
		collectionList: [],
		setPromptMode: noop,
		canReturnToSimpleMode: false,
		setCanReturnToSimpleMode: noop,
		chatPromptConfig,
		completionPromptConfig,
		currentAdvancedPrompt: "",
		setCurrentAdvancedPrompt: noop,
		conversationHistoriesRole: completionPromptConfig.conversation_histories_role,
		showHistoryModal: false,
		setConversationHistoriesRole: noop,
		hasSetBlockStatus: true,
		conversationId: "",
		introduction: "",
		setIntroduction: noop,
		suggestedQuestions,
		setSuggestedQuestions: noop,
		setConversationId: noop,
		controlClearChatMessage: false,
		setControlClearChatMessage: noop,
		prevPromptConfig: {},
		setPrevPromptConfig: noop,
		moreLikeThisConfig,
		setMoreLikeThisConfig: noop,
		suggestedQuestionsAfterAnswerConfig,
		setSuggestedQuestionsAfterAnswerConfig: noop,
		speechToTextConfig,
		setSpeechToTextConfig: noop,
		textToSpeechConfig,
		setTextToSpeechConfig: noop,
		citationConfig,
		setCitationConfig: noop,
		annotationConfig,
		setAnnotationConfig: noop,
		moderationConfig,
		setModerationConfig: noop,
		externalDataToolsConfig: {},
		setExternalDataToolsConfig: noop,
		formattingChanged: false,
		setFormattingChanged: noop,
		inputs,
		setInputs: noop,
		query,
		setQuery: noop,
		completionParams,
		setCompletionParams: noop,
		modelConfig,
		setModelConfig: noop,
		showSelectDataSet: noop,
		dataSets,
		setDataSets: noop,
		datasetConfigs: [],
		datasetConfigsRef: {},
		setDatasetConfigs: noop,
		hasSetContextVar: true,
		isShowVisionConfig,
		visionConfig,
		setVisionConfig: noop,
		isAllowVideoUpload,
		isShowDocumentConfig,
		isShowAudioConfig,
		rerankSettingModalOpen: false,
		setRerankSettingModalOpen: noop
	};
	return /* @__PURE__ */ jsx(DebugConfigurationContext.Provider, {
		value,
		children: /* @__PURE__ */ jsx(FeaturesProvider, {
			features: featuresData,
			children: /* @__PURE__ */ jsx("div", {
				className: "flex h-full w-full flex-col bg-components-panel-on-panel-item-bg",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative flex h-[200px] grow",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-full w-full shrink-0 flex-col sm:w-1/2",
						children: /* @__PURE__ */ jsx(config_default, {})
					}), !isMobile && /* @__PURE__ */ jsx("div", {
						className: "relative flex h-full w-1/2 grow flex-col overflow-y-auto ",
						style: { borderColor: "rgba(0, 0, 0, 0.02)" },
						children: /* @__PURE__ */ jsx("div", {
							className: "flex grow flex-col rounded-tl-2xl border-l-[0.5px] border-t-[0.5px] border-components-panel-border bg-chatbot-bg ",
							children: /* @__PURE__ */ jsx(debug_default, {
								isAPIKeySet: true,
								onSetting: noop,
								inputs,
								modelParameterParams: {
									setModel: noop,
									onCompletionParamsChange: noop
								},
								debugWithMultipleModel: false,
								multipleModelConfigs: [],
								onMultipleModelConfigsChange: noop
							})
						})
					})]
				})
			})
		})
	});
};
var basic_app_preview_default = React$1.memo(BasicAppPreview);
//#endregion
//#region app/components/explore/try-app/preview/flow-app-preview.tsx
var FlowAppPreview = ({ appId, className }) => {
	const { data, isLoading } = useGetTryAppFlowPreview(appId);
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsx(Loading, { type: "area" })
	});
	if (!data) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "h-full w-full",
		children: /* @__PURE__ */ jsx(WorkflowPreviewWrapper, {
			...data.graph,
			className: cn(className),
			miniMapToRight: true
		})
	});
};
var flow_app_preview_default = React$1.memo(FlowAppPreview);
//#endregion
//#region app/components/explore/try-app/preview/index.tsx
var Preview = ({ appId, appDetail }) => {
	return /* @__PURE__ */ jsx("div", {
		className: "h-full w-full",
		children: [
			"agent-chat",
			"chat",
			"completion"
		].includes(appDetail.mode) ? /* @__PURE__ */ jsx(basic_app_preview_default, { appId }) : /* @__PURE__ */ jsx(flow_app_preview_default, {
			appId,
			className: "h-full"
		})
	});
};
var preview_default = React$1.memo(Preview);
//#endregion
//#region app/components/explore/try-app/tab.tsx
var TypeEnum = /* @__PURE__ */ function(TypeEnum) {
	TypeEnum["TRY"] = "try";
	TypeEnum["DETAIL"] = "detail";
	return TypeEnum;
}({});
var Tab = ({ value, onChange, disableTry }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(tab_header_default, {
		items: React$1.useMemo(() => {
			return [IS_CLOUD_EDITION ? {
				id: TypeEnum.TRY,
				name: t("tryApp.tabHeader.try", { ns: "explore" }),
				disabled: disableTry
			} : null, {
				id: TypeEnum.DETAIL,
				name: t("tryApp.tabHeader.detail", { ns: "explore" })
			}].filter((item) => item !== null);
		}, [t, disableTry]),
		value,
		onChange,
		itemClassName: "ml-0 system-md-semibold-uppercase",
		itemWrapClassName: "pt-2",
		activeItemClassName: "border-util-colors-blue-brand-blue-brand-500"
	});
};
var tab_default = React$1.memo(Tab);
//#endregion
//#region app/components/explore/try-app/index.tsx
var try_app_exports = /* @__PURE__ */ __exportAll({ default: () => try_app_default });
var TryApp = ({ appId, app, category, onClose, onCreate }) => {
	const { systemFeatures } = useGlobalPublicStore();
	const isTrialApp = !!(app && app.can_trial && systemFeatures.enable_trial_app);
	const canUseTryTab = IS_CLOUD_EDITION && (app ? isTrialApp : true);
	const [type, setType] = useState(() => canUseTryTab ? TypeEnum.TRY : TypeEnum.DETAIL);
	const activeType = canUseTryTab ? type : TypeEnum.DETAIL;
	const { data: appDetail, isLoading, isError, error } = useGetTryAppInfo(appId);
	return /* @__PURE__ */ jsx(Modal, {
		isShow: true,
		onClose,
		className: "h-[calc(100vh-32px)] min-w-[1280px] max-w-[calc(100vw-32px)] overflow-x-auto p-2",
		children: isLoading ? /* @__PURE__ */ jsx("div", {
			className: "flex h-full items-center justify-center",
			children: /* @__PURE__ */ jsx(Loading, { type: "area" })
		}) : isError ? /* @__PURE__ */ jsx("div", {
			className: "flex h-full items-center justify-center",
			children: /* @__PURE__ */ jsx(app_unavailable_default, {
				className: "h-auto w-auto",
				isUnknownReason: !error,
				unknownReason: error instanceof Error ? error.message : void 0
			})
		}) : !appDetail ? /* @__PURE__ */ jsx("div", {
			className: "flex h-full items-center justify-center",
			children: /* @__PURE__ */ jsx(app_unavailable_default, {
				className: "h-auto w-auto",
				isUnknownReason: true
			})
		}) : /* @__PURE__ */ jsxs("div", {
			className: "flex h-full flex-col",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 justify-between pl-4",
				children: [/* @__PURE__ */ jsx(tab_default, {
					value: activeType,
					onChange: setType,
					disableTry: app ? !isTrialApp : false
				}), /* @__PURE__ */ jsx(Button, {
					size: "large",
					variant: "tertiary",
					className: "flex size-7 items-center justify-center rounded-[10px] p-0 text-components-button-tertiary-text",
					onClick: onClose,
					children: /* @__PURE__ */ jsx("span", { className: "i-ri-close-line size-5" })
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-2 flex h-0 grow justify-between space-x-2",
				children: [activeType === TypeEnum.TRY ? /* @__PURE__ */ jsx(app_default, {
					appId,
					appDetail
				}) : /* @__PURE__ */ jsx(preview_default, {
					appId,
					appDetail
				}), /* @__PURE__ */ jsx(app_info_default, {
					className: "w-[360px] shrink-0",
					appDetail,
					appId,
					category,
					onCreate
				})]
			})]
		})
	});
};
var try_app_default = React$1.memo(TryApp);
//#endregion
export { SettingsModal as $, FieldCollapse as $t, useInvalidateShareConversations as A, Placeholder as At, tip_popup_default as B, fetchBuiltInToolCredentialSchema as Bt, formatBooleanInputs as C, schema_modal_default as Ct, useGetWebAppInfo as D, useMittContext as Dt, useGetHumanInputForm as E, VisualEditorContextProvider as Et, addFileInfos as F, tab_header_default as Ft, NoteEditorContextProvider as G, fetchModelToolList as Gt, custom_connection_line_default as H, fetchCollectionList as Ht, getToolType as I, createCustomCollection as It, config_content_default as J, removeCustomCollection as Jt, config_modal_default as K, fetchWorkflowToolDetail as Kt, sortAgentSorts as L, createWorkflowToolProvider as Lt, useShareConversationName as M, SwitchPluginVersion as Mt, useShareConversations as N, InstallPluginButton as Nt, useGetWebAppMeta as O, useVisualEditorStore as Ot, useSubmitHumanInputForm as P, getIconFromMarketPlace as Pt, MetadataFilteringVariableType as Q, Collapse as Qt, setting_built_in_tool_default as R, deleteWorkflowTool as Rt, useChat as S, useGetState as St, userInputsFormToPromptVariables as T, MittProvider as Tt, toolbar_default as U, fetchCustomCollection as Ut, CustomEdgeLinearGradientRender as V, fetchBuiltInToolList as Vt, editor_default as W, fetchCustomToolList as Wt, ComparisonOperator as X, updateBuiltInToolCredential as Xt, MetadataFilter as Y, saveWorkflowToolProvider as Yt, LogicalOperator as Z, updateCustomCollection as Zt, EmbeddedChatbotContext as _, FormInputItem as _t, TaskStatus as a, clone as an, condition_value_default as at, WebAppStoreProvider as b, edit_custom_collection_modal_default as bt, debug_default as c, Icon$13 as ct, useDebugWithSingleOrMultipleModel as d, info_panel_default as dt, useDocumentTitle as en, RetrievalSettings as et, useFormattingChangedDispatcher as f, get_automatic_res_default as ft, isDify as g, ToolForm as gt, ChatWrapper as h, tool_selector_default as ht, Icon$9 as i, MiniMap$1 as in, VariableTag as it, useShareChatList as j, fetchAndMergeValidCompletionParams as jt, useGetWebAppParams as k, useMitt as kt, item_default as l, Icon$14 as lt, ViewFormDropdown as m, MultipleToolSelector as mt, try_app_exports as n, useThemeContext as nn, IndexMethod as nt, result_default as o, condition_files_list_value_default as ot, useEmbeddedChatbot as p, Form as pt, DebugConfigurationContext as q, removeBuiltInToolCredential as qt, run_once_default as r, Background$1 as rn, hasEditPermissionForDataset as rt, WorkflowPreviewWrapper as s, Icon$12 as st, try_app_default as t, useKnowledge as tn, PermissionSelector as tt, config_default as u, Icon$15 as ut, useEmbeddedChatbotContext as v, tab_slider_plain_default as vt, promptVariablesToUserInputsForm as w, VisualEditor as wt, useWebAppStore as x, LabelSelector as xt, app_unavailable_default as y, ToolTipContent as yt, useLocalStorageState as z, fetchBuiltInToolCredential as zt };
