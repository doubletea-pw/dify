import { C as identity, _ as uniqBy, g as ary, v as isArrayLikeObject, x as property, y as iteratee } from "./utils-DqpfZ3W-.js";
import { u as DATASET_DEFAULT } from "./config-Dopncj5R.js";
import { Ei as uniq, _r as WeightedScoreEnum, cr as DEFAULT_WEIGHTED_SCORE, gr as RerankingModeEnum } from "./hooks-Bj_4KA1b.js";
import { n as isArrayLike } from "./isArguments-BGmqhzfG.js";
import { o as RETRIEVE_METHOD } from "./app-DPjSIfgb.js";
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/_internal/toArray.mjs
function toArray(value) {
	return Array.isArray(value) ? value : Array.from(value);
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/array/difference.mjs
function difference(firstArr, secondArr) {
	const secondSet = new Set(secondArr);
	return firstArr.filter((item) => !secondSet.has(item));
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/array/last.mjs
function last$1(arr) {
	return arr[arr.length - 1];
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/array/last.mjs
function last(array) {
	if (!isArrayLike(array)) return;
	return last$1(toArray(array));
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/array/differenceBy.mjs
function differenceBy$1(firstArr, secondArr, mapper) {
	const mappedSecondSet = new Set(secondArr.map((item) => mapper(item)));
	return firstArr.filter((item) => {
		return !mappedSecondSet.has(mapper(item));
	});
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/_internal/flattenArrayLike.mjs
function flattenArrayLike(values) {
	const result = [];
	for (let i = 0; i < values.length; i++) {
		const arrayLike = values[i];
		if (!isArrayLikeObject(arrayLike)) continue;
		for (let j = 0; j < arrayLike.length; j++) result.push(arrayLike[j]);
	}
	return result;
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/array/differenceBy.mjs
function differenceBy(arr, ..._values) {
	if (!isArrayLikeObject(arr)) return [];
	const iteratee$1 = last(_values);
	const values = flattenArrayLike(_values);
	if (isArrayLikeObject(iteratee$1)) return difference(Array.from(arr), values);
	return differenceBy$1(Array.from(arr), values, iteratee(iteratee$1));
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/array/intersectionBy.mjs
function intersectionBy$1(firstArr, secondArr, mapper) {
	const result = [];
	const mappedSecondSet = new Set(secondArr.map(mapper));
	for (let i = 0; i < firstArr.length; i++) {
		const item = firstArr[i];
		const mappedItem = mapper(item);
		if (mappedSecondSet.has(mappedItem)) {
			result.push(item);
			mappedSecondSet.delete(mappedItem);
		}
	}
	return result;
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/array/intersectionBy.mjs
function intersectionBy(array, ...values) {
	if (!isArrayLikeObject(array)) return [];
	const lastValue = last$1(values);
	if (lastValue === void 0) return Array.from(array);
	let result = uniq(Array.from(array));
	const count = isArrayLikeObject(lastValue) ? values.length : values.length - 1;
	for (let i = 0; i < count; ++i) {
		const value = values[i];
		if (!isArrayLikeObject(value)) return [];
		if (isArrayLikeObject(lastValue)) result = intersectionBy$1(result, Array.from(value), identity);
		else if (typeof lastValue === "function") result = intersectionBy$1(result, Array.from(value), (value) => lastValue(value));
		else if (typeof lastValue === "string") result = intersectionBy$1(result, Array.from(value), property(lastValue));
	}
	return result;
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/array/unionBy.mjs
function unionBy(...values) {
	const lastValue = last$1(values);
	const flattened = flattenArrayLike(values);
	if (isArrayLikeObject(lastValue) || lastValue == null) return uniq(flattened);
	return uniqBy(flattened, ary(iteratee(lastValue), 1));
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/array/windowed.mjs
function windowed(arr, size, step = 1, { partialWindows = false } = {}) {
	if (size <= 0 || !Number.isInteger(size)) throw new Error("Size must be a positive integer.");
	if (step <= 0 || !Number.isInteger(step)) throw new Error("Step must be a positive integer.");
	const result = [];
	const end = partialWindows ? arr.length : arr.length - size + 1;
	for (let i = 0; i < end; i += step) result.push(arr.slice(i, i + size));
	return result;
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/array/xorBy.mjs
function xorBy(...values) {
	const lastValue = last(values);
	let mapper = identity;
	if (!isArrayLikeObject(lastValue) && lastValue != null) {
		mapper = iteratee(lastValue);
		values = values.slice(0, -1);
	}
	const arrays = values.filter(isArrayLikeObject);
	return differenceBy(unionBy(...arrays, mapper), unionBy(...windowed(arrays, 2).map(([arr1, arr2]) => intersectionBy(arr1, arr2, mapper)), mapper), mapper);
}
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/utils.ts
var getSelectedDatasetsMode = (datasets = []) => {
	if (datasets === null) datasets = [];
	let allHighQuality = true;
	let allHighQualityVectorSearch = true;
	let allHighQualityFullTextSearch = true;
	let allEconomic = true;
	let mixtureHighQualityAndEconomic = true;
	let allExternal = true;
	let allInternal = true;
	let mixtureInternalAndExternal = true;
	let inconsistentEmbeddingModel = false;
	if (!datasets.length) {
		allHighQuality = false;
		allHighQualityVectorSearch = false;
		allHighQualityFullTextSearch = false;
		allEconomic = false;
		mixtureHighQualityAndEconomic = false;
		allExternal = false;
		allInternal = false;
		mixtureInternalAndExternal = false;
	}
	datasets.forEach((dataset) => {
		if (dataset.indexing_technique === "economy") {
			allHighQuality = false;
			allHighQualityVectorSearch = false;
			allHighQualityFullTextSearch = false;
		}
		if (dataset.indexing_technique === "high_quality") {
			allEconomic = false;
			if (dataset.retrieval_model_dict.search_method !== RETRIEVE_METHOD.semantic) allHighQualityVectorSearch = false;
			if (dataset.retrieval_model_dict.search_method !== RETRIEVE_METHOD.fullText) allHighQualityFullTextSearch = false;
		}
		if (dataset.provider !== "external") allExternal = false;
		else {
			allInternal = false;
			allHighQuality = false;
			allHighQualityVectorSearch = false;
			allHighQualityFullTextSearch = false;
			mixtureHighQualityAndEconomic = false;
		}
	});
	if (allExternal || allInternal) mixtureInternalAndExternal = false;
	if (allHighQuality || allEconomic) mixtureHighQualityAndEconomic = false;
	if (allHighQuality) inconsistentEmbeddingModel = uniq(datasets.map((item) => item.embedding_model)).length > 1;
	return {
		allHighQuality,
		allHighQualityVectorSearch,
		allHighQualityFullTextSearch,
		allEconomic,
		mixtureHighQualityAndEconomic,
		allInternal,
		allExternal,
		mixtureInternalAndExternal,
		inconsistentEmbeddingModel
	};
};
var getMultipleRetrievalConfig = (multipleRetrievalConfig, selectedDatasets, originalDatasets, fallbackRerankModel) => {
	const isDatasetsChanged = xorBy(selectedDatasets, originalDatasets, "id").length > 0;
	const isFallbackRerankModelValid = !!(fallbackRerankModel?.provider && fallbackRerankModel?.model);
	const { allHighQuality, allHighQualityVectorSearch, allHighQualityFullTextSearch, allEconomic, mixtureHighQualityAndEconomic, allInternal, allExternal, mixtureInternalAndExternal, inconsistentEmbeddingModel } = getSelectedDatasetsMode(selectedDatasets);
	const { top_k = DATASET_DEFAULT.top_k, score_threshold, reranking_mode, reranking_model, weights, reranking_enable } = multipleRetrievalConfig || { top_k: DATASET_DEFAULT.top_k };
	const result = {
		top_k,
		score_threshold,
		reranking_mode,
		reranking_model,
		weights,
		reranking_enable
	};
	const setDefaultWeights = () => {
		result.weights = {
			weight_type: WeightedScoreEnum.Customized,
			vector_setting: {
				vector_weight: allHighQualityVectorSearch ? DEFAULT_WEIGHTED_SCORE.allHighQualityVectorSearch.semantic : allHighQualityFullTextSearch ? DEFAULT_WEIGHTED_SCORE.allHighQualityFullTextSearch.semantic : DEFAULT_WEIGHTED_SCORE.other.semantic,
				embedding_provider_name: selectedDatasets[0].embedding_model_provider,
				embedding_model_name: selectedDatasets[0].embedding_model
			},
			keyword_setting: { keyword_weight: allHighQualityVectorSearch ? DEFAULT_WEIGHTED_SCORE.allHighQualityVectorSearch.keyword : allHighQualityFullTextSearch ? DEFAULT_WEIGHTED_SCORE.allHighQualityFullTextSearch.keyword : DEFAULT_WEIGHTED_SCORE.other.keyword }
		};
	};
	/**
	* In this case, user can manually toggle reranking
	* So should keep the reranking_enable value
	* But the default reranking_model should be set
	*/
	if (allEconomic && allInternal || allExternal) {
		result.reranking_mode = RerankingModeEnum.RerankingModel;
		if ((!result.reranking_model?.provider || !result.reranking_model?.model) && isFallbackRerankModelValid) result.reranking_model = {
			provider: fallbackRerankModel.provider || "",
			model: fallbackRerankModel.model || ""
		};
		result.reranking_enable = reranking_enable;
	}
	/**
	* In this case, reranking_enable must be true
	* And if rerank model is not set, should set the default rerank model
	*/
	if (mixtureHighQualityAndEconomic || inconsistentEmbeddingModel || mixtureInternalAndExternal) {
		result.reranking_mode = RerankingModeEnum.RerankingModel;
		if ((!result.reranking_model?.provider || !result.reranking_model?.model) && isFallbackRerankModelValid) result.reranking_model = {
			provider: fallbackRerankModel.provider || "",
			model: fallbackRerankModel.model || ""
		};
		result.reranking_enable = true;
	}
	/**
	* In this case, user can choose to use weighted score or rerank model
	* But if the reranking_mode is not initialized, should set the default rerank model and reranking_enable to true
	* and set reranking_mode to reranking_model
	*/
	if (allHighQuality && !inconsistentEmbeddingModel && allInternal) {
		if (!reranking_mode) if (isFallbackRerankModelValid) {
			result.reranking_mode = RerankingModeEnum.RerankingModel;
			result.reranking_enable = true;
			result.reranking_model = {
				provider: fallbackRerankModel.provider || "",
				model: fallbackRerankModel.model || ""
			};
		} else {
			result.reranking_mode = RerankingModeEnum.WeightedScore;
			result.reranking_enable = false;
			setDefaultWeights();
		}
		if (reranking_mode === RerankingModeEnum.WeightedScore) {
			result.reranking_enable = false;
			if (!weights) setDefaultWeights();
		}
		if (reranking_mode === RerankingModeEnum.RerankingModel) {
			if ((!result.reranking_model?.provider || !result.reranking_model?.model) && isFallbackRerankModelValid) result.reranking_model = {
				provider: fallbackRerankModel.provider || "",
				model: fallbackRerankModel.model || ""
			};
			result.reranking_enable = true;
		}
		if (reranking_mode === RerankingModeEnum.WeightedScore && weights && isDatasetsChanged) if (result.reranking_model?.provider && result.reranking_model?.model || isFallbackRerankModelValid) {
			result.reranking_mode = RerankingModeEnum.RerankingModel;
			result.reranking_enable = true;
			if ((!result.reranking_model?.provider || !result.reranking_model?.model) && isFallbackRerankModelValid) result.reranking_model = {
				provider: fallbackRerankModel.provider || "",
				model: fallbackRerankModel.model || ""
			};
		} else setDefaultWeights();
		if (reranking_mode === RerankingModeEnum.RerankingModel && (!result.reranking_model?.provider || !result.reranking_model?.model) && !isFallbackRerankModelValid && isDatasetsChanged) {
			result.reranking_mode = RerankingModeEnum.WeightedScore;
			result.reranking_enable = false;
			setDefaultWeights();
		}
	}
	return result;
};
var checkoutRerankModelConfiguredInRetrievalSettings = (datasets, multipleRetrievalConfig) => {
	if (!multipleRetrievalConfig) return true;
	const { allEconomic, allExternal, allInternal } = getSelectedDatasetsMode(datasets);
	const { reranking_enable, reranking_mode, reranking_model } = multipleRetrievalConfig;
	if (reranking_mode === RerankingModeEnum.RerankingModel && (!reranking_model?.provider || !reranking_model?.model)) return (allEconomic && allInternal || allExternal) && !reranking_enable;
	return true;
};
//#endregion
export { intersectionBy as a, unionBy as i, getMultipleRetrievalConfig as n, getSelectedDatasetsMode as r, checkoutRerankModelConfiguredInRetrievalSettings as t };
