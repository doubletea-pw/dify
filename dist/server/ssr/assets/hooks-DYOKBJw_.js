import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { n as useStore, r as createStore } from "./react-CHKO_ryu.js";
import { ct as useNodes } from "./utils-DqpfZ3W-.js";
import { Ot as BlockEnum, ot as VAR_TYPE_MAP, st as BaseFieldType } from "./config-Dopncj5R.js";
import { sr as CrawlStep } from "./hooks-Bj_4KA1b.js";
import { i as useStore$1 } from "./pure-Dr1CeacW.js";
import { r as withForm } from "./form-D-kYI7ic.js";
import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx } from "react/jsx-runtime";
//#region app/components/datasets/documents/create-from-pipeline/data-source/store/provider.tsx
var DataSourceContext = createContext(null);
var DataSourceProvider = ({ children }) => {
	const storeRef = useRef(null);
	if (!storeRef.current) storeRef.current = createDataSourceStore();
	return /* @__PURE__ */ jsx(DataSourceContext.Provider, {
		value: storeRef.current,
		children
	});
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/store/slices/common.ts
var createCommonSlice = (set) => {
	return {
		currentNodeIdRef: { current: "" },
		currentCredentialId: "",
		setCurrentCredentialId: (credentialId) => {
			set({ currentCredentialId: credentialId });
		},
		currentCredentialIdRef: { current: "" }
	};
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/store/slices/local-file.ts
var createLocalFileSlice = (set, get) => {
	return {
		localFileList: [],
		setLocalFileList: (fileList) => {
			set(() => ({ localFileList: fileList }));
			const { previewLocalFileRef } = get();
			previewLocalFileRef.current = fileList[0]?.file;
		},
		currentLocalFile: void 0,
		setCurrentLocalFile: (file) => set(() => ({ currentLocalFile: file })),
		previewLocalFileRef: { current: void 0 }
	};
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/store/slices/online-document.ts
var createOnlineDocumentSlice = (set, get) => {
	return {
		documentsData: [],
		setDocumentsData: (documentsData) => set(() => ({ documentsData })),
		searchValue: "",
		setSearchValue: (searchValue) => set(() => ({ searchValue })),
		onlineDocuments: [],
		setOnlineDocuments: (documents) => {
			set(() => ({ onlineDocuments: documents }));
			const { previewOnlineDocumentRef } = get();
			previewOnlineDocumentRef.current = documents[0];
		},
		currentDocument: void 0,
		setCurrentDocument: (document) => set(() => ({ currentDocument: document })),
		selectedPagesId: /* @__PURE__ */ new Set(),
		setSelectedPagesId: (selectedPagesId) => set(() => ({ selectedPagesId })),
		previewOnlineDocumentRef: { current: void 0 }
	};
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/store/slices/online-drive.ts
var createOnlineDriveSlice = (set, get) => {
	return {
		breadcrumbs: [],
		setBreadcrumbs: (breadcrumbs) => set(() => ({ breadcrumbs })),
		prefix: [],
		setPrefix: (prefix) => set(() => ({ prefix })),
		keywords: "",
		setKeywords: (keywords) => set(() => ({ keywords })),
		selectedFileIds: [],
		setSelectedFileIds: (selectedFileIds) => {
			set(() => ({ selectedFileIds }));
			const id = selectedFileIds[0];
			const { onlineDriveFileList, previewOnlineDriveFileRef } = get();
			previewOnlineDriveFileRef.current = onlineDriveFileList.find((file) => file.id === id);
		},
		onlineDriveFileList: [],
		setOnlineDriveFileList: (onlineDriveFileList) => set(() => ({ onlineDriveFileList })),
		bucket: "",
		setBucket: (bucket) => set(() => ({ bucket })),
		nextPageParameters: {},
		currentNextPageParametersRef: { current: {} },
		setNextPageParameters: (nextPageParameters) => set(() => ({ nextPageParameters })),
		isTruncated: { current: false },
		previewOnlineDriveFileRef: { current: void 0 },
		hasBucket: false,
		setHasBucket: (hasBucket) => set(() => ({ hasBucket }))
	};
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/store/slices/website-crawl.ts
var createWebsiteCrawlSlice = (set, get) => {
	return {
		websitePages: [],
		setWebsitePages: (pages) => {
			set(() => ({ websitePages: pages }));
			const { previewWebsitePageRef } = get();
			previewWebsitePageRef.current = pages[0];
		},
		currentWebsite: void 0,
		setCurrentWebsite: (website) => set(() => ({ currentWebsite: website })),
		crawlResult: void 0,
		setCrawlResult: (result) => set(() => ({ crawlResult: result })),
		step: CrawlStep.init,
		setStep: (step) => set(() => ({ step })),
		previewIndex: -1,
		setPreviewIndex: (index) => set(() => ({ previewIndex: index })),
		previewWebsitePageRef: { current: void 0 }
	};
};
//#endregion
//#region app/components/datasets/documents/create-from-pipeline/data-source/store/index.ts
var createDataSourceStore = () => {
	return createStore((...args) => ({
		...createCommonSlice(...args),
		...createLocalFileSlice(...args),
		...createOnlineDocumentSlice(...args),
		...createWebsiteCrawlSlice(...args),
		...createOnlineDriveSlice(...args)
	}));
};
var useDataSourceStoreWithSelector = (selector) => {
	const store = useContext(DataSourceContext);
	if (!store) throw new Error("Missing DataSourceContext.Provider in the tree");
	return useStore(store, selector);
};
var useDataSourceStore = () => {
	const store = useContext(DataSourceContext);
	if (!store) throw new Error("Missing DataSourceContext.Provider in the tree");
	return store;
};
//#endregion
//#region app/components/base/form/form-scenarios/base/field.tsx
var BaseField = ({ initialData, config }) => withForm({
	defaultValues: initialData,
	render: function Render({ form }) {
		const { type, label, placeholder, variable, tooltip, showConditions, max, min, options, required, showOptional, popupProps, allowedFileExtensions, allowedFileTypes, allowedFileUploadMethods, maxLength, unit } = config;
		if (!useStore$1(form.store, (state) => {
			const fieldValues = state.values;
			if (!showConditions.length) return true;
			return showConditions.every((condition) => {
				const { variable, value } = condition;
				return fieldValues[variable] === value;
			});
		})) return /* @__PURE__ */ jsx(Fragment$1, {});
		if (type === BaseFieldType.textInput) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			children: (field) => /* @__PURE__ */ jsx(field.TextField, {
				label,
				labelOptions: {
					tooltip,
					isRequired: required,
					showOptional
				},
				placeholder
			})
		});
		if (type === BaseFieldType.paragraph) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			children: (field) => /* @__PURE__ */ jsx(field.TextAreaField, {
				label,
				labelOptions: {
					tooltip,
					isRequired: required,
					showOptional
				},
				placeholder
			})
		});
		if (type === BaseFieldType.numberInput) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			children: (field) => /* @__PURE__ */ jsx(field.NumberInputField, {
				label,
				labelOptions: {
					tooltip,
					isRequired: required,
					showOptional
				},
				placeholder,
				max,
				min,
				unit
			})
		});
		if (type === BaseFieldType.checkbox) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			children: (field) => /* @__PURE__ */ jsx(field.CheckboxField, { label })
		});
		if (type === BaseFieldType.select) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			children: (field) => /* @__PURE__ */ jsx(field.SelectField, {
				label,
				labelOptions: {
					tooltip,
					isRequired: required,
					showOptional
				},
				options,
				popupProps
			})
		});
		if (type === BaseFieldType.file) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			children: (field) => /* @__PURE__ */ jsx(field.FileUploaderField, {
				label,
				labelOptions: {
					tooltip,
					isRequired: required,
					showOptional
				},
				fileConfig: {
					allowed_file_extensions: allowedFileExtensions,
					allowed_file_types: allowedFileTypes,
					allowed_file_upload_methods: allowedFileUploadMethods,
					number_limits: 1
				}
			})
		});
		if (type === BaseFieldType.fileList) return /* @__PURE__ */ jsx(form.AppField, {
			name: variable,
			children: (field) => /* @__PURE__ */ jsx(field.FileUploaderField, {
				label,
				labelOptions: {
					tooltip,
					isRequired: required,
					showOptional
				},
				fileConfig: {
					allowed_file_extensions: allowedFileExtensions,
					allowed_file_types: allowedFileTypes,
					allowed_file_upload_methods: allowedFileUploadMethods,
					number_limits: maxLength
				}
			})
		});
		return /* @__PURE__ */ jsx(Fragment$1, {});
	}
});
//#endregion
//#region app/components/rag-pipeline/hooks/use-input-fields.ts
var useInitialData = (variables, lastRunInputData) => {
	return useMemo(() => {
		return variables.reduce((acc, item) => {
			const type = VAR_TYPE_MAP[item.type];
			const variableName = item.variable;
			const defaultValue = lastRunInputData?.[variableName] || item.default_value;
			if ([
				BaseFieldType.textInput,
				BaseFieldType.paragraph,
				BaseFieldType.select
			].includes(type)) acc[variableName] = defaultValue ?? "";
			if (type === BaseFieldType.numberInput) acc[variableName] = defaultValue ?? 0;
			if (type === BaseFieldType.checkbox) acc[variableName] = defaultValue ?? false;
			if ([BaseFieldType.file, BaseFieldType.fileList].includes(type)) acc[variableName] = defaultValue ?? [];
			return acc;
		}, {});
	}, [lastRunInputData, variables]);
};
var useConfigurations = (variables) => {
	return useMemo(() => {
		const configurations = [];
		variables.forEach((item) => {
			configurations.push({
				type: VAR_TYPE_MAP[item.type],
				variable: item.variable,
				label: item.label,
				required: item.required,
				maxLength: item.max_length,
				options: item.options?.map((option) => ({
					label: option,
					value: option
				})),
				showConditions: [],
				placeholder: item.placeholder,
				tooltip: item.tooltips,
				unit: item.unit,
				allowedFileTypes: item.allowed_file_types,
				allowedFileExtensions: item.allowed_file_extensions,
				allowedFileUploadMethods: item.allowed_file_upload_methods
			});
		});
		return configurations;
	}, [variables]);
};
//#endregion
//#region app/components/rag-pipeline/components/panel/test-run/types.ts
var TestRunStep = /* @__PURE__ */ function(TestRunStep) {
	TestRunStep["dataSource"] = "dataSource";
	TestRunStep["documentProcessing"] = "documentProcessing";
	return TestRunStep;
}({});
//#endregion
//#region app/components/rag-pipeline/components/panel/test-run/preparation/hooks.ts
var useTestRunSteps = () => {
	const { t } = useTranslation();
	const [currentStep, setCurrentStep] = useState(1);
	const handleNextStep = useCallback(() => {
		setCurrentStep((preStep) => preStep + 1);
	}, []);
	const handleBackStep = useCallback(() => {
		setCurrentStep((preStep) => preStep - 1);
	}, []);
	return {
		steps: [{
			label: t("testRun.steps.dataSource", { ns: "datasetPipeline" }),
			value: TestRunStep.dataSource
		}, {
			label: t("testRun.steps.documentProcessing", { ns: "datasetPipeline" }),
			value: TestRunStep.documentProcessing
		}],
		currentStep,
		handleNextStep,
		handleBackStep
	};
};
var useDatasourceOptions = () => {
	const datasourceNodes = useNodes().filter((node) => node.data.type === BlockEnum.DataSource);
	return useMemo(() => {
		const options = [];
		datasourceNodes.forEach((node) => {
			const label = node.data.title;
			options.push({
				label,
				value: node.id,
				data: node.data
			});
		});
		return options;
	}, [datasourceNodes]);
};
var useOnlineDocument = () => {
	const dataSourceStore = useDataSourceStore();
	return { clearOnlineDocumentData: useCallback(() => {
		const { setDocumentsData, setSearchValue, setSelectedPagesId, setOnlineDocuments, setCurrentDocument } = dataSourceStore.getState();
		setDocumentsData([]);
		setSearchValue("");
		setSelectedPagesId(/* @__PURE__ */ new Set());
		setOnlineDocuments([]);
		setCurrentDocument(void 0);
	}, [dataSourceStore]) };
};
var useWebsiteCrawl = () => {
	const dataSourceStore = useDataSourceStore();
	return { clearWebsiteCrawlData: useCallback(() => {
		const { setStep, setCrawlResult, setWebsitePages, setPreviewIndex, setCurrentWebsite } = dataSourceStore.getState();
		setStep(CrawlStep.init);
		setCrawlResult(void 0);
		setCurrentWebsite(void 0);
		setWebsitePages([]);
		setPreviewIndex(-1);
	}, [dataSourceStore]) };
};
var useOnlineDrive = () => {
	const dataSourceStore = useDataSourceStore();
	return { clearOnlineDriveData: useCallback(() => {
		const { setOnlineDriveFileList, setBucket, setPrefix, setKeywords, setSelectedFileIds } = dataSourceStore.getState();
		setOnlineDriveFileList([]);
		setBucket("");
		setPrefix([]);
		setKeywords("");
		setSelectedFileIds([]);
	}, [dataSourceStore]) };
};
//#endregion
export { useWebsiteCrawl as a, BaseField as c, DataSourceProvider as d, useTestRunSteps as i, useDataSourceStore as l, useOnlineDocument as n, useConfigurations as o, useOnlineDrive as r, useInitialData as s, useDatasourceOptions as t, useDataSourceStoreWithSelector as u };
