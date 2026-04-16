//#region i18n/zh-Hant/dataset.json
var allExternalTip = "僅使用外部知識時，用戶可以選擇是否啟用 Rerank 模型。如果未啟用，則檢索到的數據塊將根據分數進行排序。當不同知識庫的檢索策略不一致時，就會不準確。";
var allKnowledge = "所有知識";
var allKnowledgeDescription = "選擇以顯示此工作區中的所有知識。只有 Workspace 擁有者可以管理所有知識。";
var appCount = " 關聯應用";
var connectDataset = "連接到外部知識庫";
var createDataset = "建立知識庫";
var createDatasetIntro = "匯入您自己的文字資料或透過 Webhook 實時寫入資料以增強 LLM 的上下文。";
var createExternalAPI = "新增外部知識 API";
var createFromPipeline = "從知識管線建立";
var createNewExternalAPI = "創建新的外部知識 API";
var datasetDeleteFailed = "刪除知識庫失敗";
var datasetDeleted = "知識庫已刪除";
var datasetUsedByApp = "這些知識正被一些應用程序使用。應用程序將無法再使用這些知識，所有提示配置和日誌將被永久刪除。";
var datasets = "知識庫";
var datasetsApi = "API";
var defaultRetrievalTip = "默認情況下，使用多路徑檢索。從多個知識庫中檢索知識，然後重新排名。";
var deleteDatasetConfirmContent = "刪除知識庫是不可逆的。使用者將無法再訪問您的知識庫，所有的提示配置和日誌將被永久刪除。";
var deleteDatasetConfirmTitle = "要刪除知識庫嗎？";
var didYouKnow = "你知道嗎？";
var docAllEnabled_one = "{{count}} 文件已啟用";
var docAllEnabled_other = "所有 {{count}} 文件已啟用";
var docsFailedNotice = "文件無法被索引";
var documentCount = " 文件";
var documentsDisabled = "已禁用 {{num}} 個文檔 - 處於非活動狀態超過 30 天";
var editExternalAPIFormTitle = "編輯外部知識 API";
var editExternalAPITooltipTitle = "關聯知識";
var embeddingModelNotAvailable = "嵌入模型無法使用。";
var enable = "使";
var externalAPI = "外部 API";
var externalAPIPanelDescription = "外部知識 API 用於連接到 Dify 外部的知識庫，並從該知識庫中檢索知識。";
var externalAPIPanelDocumentation = "瞭解如何創建外部知識 API";
var externalAPIPanelTitle = "外部知識 API";
var externalKnowledgeBase = "外部知識庫";
var externalKnowledgeDescription = "知識描述";
var externalKnowledgeDescriptionPlaceholder = "描述此知識庫中的內容（選擇）";
var externalKnowledgeId = "外部知識 ID";
var externalKnowledgeIdPlaceholder = "請輸入 Knowledge ID";
var externalKnowledgeName = "外部知識名稱";
var externalKnowledgeNamePlaceholder = "請輸入知識庫的名稱";
var externalTag = "外部";
var inconsistentEmbeddingModelTip = "如果選定知識庫的嵌入模型不一致，則需要重新排序模型。";
var intro1 = "知識庫可以被整合到 Dify 應用中";
var intro2 = "作為上下文";
var intro3 = ",";
var intro4 = "或可以";
var intro5 = "建立";
var intro6 = "為獨立的 ChatGPT 外掛釋出使用";
var knowledge = "知識庫";
var learnHowToWriteGoodKnowledgeDescription = "瞭解如何編寫良好的知識描述";
var localDocs = "本地文件";
var mixtureHighQualityAndEconomicTip = "混合高品質和經濟知識庫需要重新排序模型。";
var mixtureInternalAndExternalTip = "Rerank 模型是內部和外部知識的混合所必需的。";
var multimodal = "多模態";
var nTo1RetrievalLegacy = "N 對 1 檢索將從 9 月起正式棄用。建議使用最新的多路徑檢索以獲得更好的結果。";
var nTo1RetrievalLegacyLink = "了解更多";
var nTo1RetrievalLegacyLinkText = "N 對 1 檢索將於 9 月正式棄用。";
var noExternalKnowledge = "目前還沒有外部知識 API，按兩下此處創建";
var partialEnabled_one = "共 {{count}} 份文件，{{num}} 份可用";
var partialEnabled_other = "共 {{count}} 份文件，{{num}} 份可用";
var preprocessDocument = "{{num}}預處理文件";
var rerankSettings = "重新排序設置";
var retrievalSettings = "檢索設置";
var retry = "重試";
var unavailable = "不可用";
var unknownError = "未知錯誤";
var updated = "更新時間";
var wordCount = " 千字元";
var dataset_default = {
	allExternalTip,
	allKnowledge,
	allKnowledgeDescription,
	appCount,
	"batchAction.archive": "檔案",
	"batchAction.cancel": "取消",
	"batchAction.delete": "刪除",
	"batchAction.disable": "禁用",
	"batchAction.download": "下載",
	"batchAction.enable": "使",
	"batchAction.reIndex": "重新建立索引",
	"batchAction.selected": "選擇",
	"chunkingMode.general": "常規",
	"chunkingMode.graph": "圖形",
	"chunkingMode.parentChild": "父子",
	"chunkingMode.qa": "問與答",
	connectDataset,
	"connectDatasetIntro.content.end": ".然後找到對應的知識 ID 並在左側的表單中填寫。如果資訊全部正確，點擊連接按鈕后，會自動跳轉到知識庫中的檢索測試。",
	"connectDatasetIntro.content.front": "要連接到外部知識庫，您需要先創建外部 API。請仔細閱讀並參考",
	"connectDatasetIntro.content.link": "瞭解如何創建外部 API",
	"connectDatasetIntro.learnMore": "瞭解更多資訊",
	"connectDatasetIntro.title": "如何連接到外部知識庫",
	"connectHelper.helper1": "通過 API 和知識庫 ID 連接到外部知識庫。目前，",
	"connectHelper.helper2": "僅支援檢索功能",
	"connectHelper.helper3": ".我們強烈建議您",
	"connectHelper.helper4": "閱讀幫助文件",
	"connectHelper.helper5": "使用此功能前請小心。",
	"cornerLabel.pipeline": "管道",
	"cornerLabel.unavailable": "無法使用",
	createDataset,
	createDatasetIntro,
	createExternalAPI,
	createFromPipeline,
	createNewExternalAPI,
	datasetDeleteFailed,
	datasetDeleted,
	datasetUsedByApp,
	datasets,
	datasetsApi: "API",
	defaultRetrievalTip,
	deleteDatasetConfirmContent,
	deleteDatasetConfirmTitle,
	"deleteExternalAPIConfirmWarningContent.content.end": "外部知識。刪除此 API 將使所有這些 API 失效。是否確實要刪除此 API？",
	"deleteExternalAPIConfirmWarningContent.content.front": "此外部知識 API 連結到",
	"deleteExternalAPIConfirmWarningContent.noConnectionContent": "您確定要刪除此 API 嗎？",
	"deleteExternalAPIConfirmWarningContent.title.end": "?",
	"deleteExternalAPIConfirmWarningContent.title.front": "刪除",
	didYouKnow,
	docAllEnabled_one,
	docAllEnabled_other,
	docsFailedNotice,
	documentCount,
	documentsDisabled,
	"editExternalAPIConfirmWarningContent.end": "external knowledge，並且此修改將應用於所有這些 Knowledge。是否確實要保存此更改？",
	"editExternalAPIConfirmWarningContent.front": "此外部知識 API 連結到",
	editExternalAPIFormTitle,
	"editExternalAPIFormWarning.end": "外部知識",
	"editExternalAPIFormWarning.front": "此外部 API 連結到",
	editExternalAPITooltipTitle,
	embeddingModelNotAvailable,
	enable: "使",
	externalAPI,
	"externalAPIForm.apiKey": "API 金鑰",
	"externalAPIForm.cancel": "取消",
	"externalAPIForm.edit": "編輯",
	"externalAPIForm.encrypted.end": "科技。",
	"externalAPIForm.encrypted.front": "您的 API 令牌將使用",
	"externalAPIForm.endpoint": "API 終端節點",
	"externalAPIForm.name": "名字",
	"externalAPIForm.save": "救",
	externalAPIPanelDescription,
	externalAPIPanelDocumentation,
	externalAPIPanelTitle,
	externalKnowledgeBase,
	externalKnowledgeDescription,
	externalKnowledgeDescriptionPlaceholder,
	"externalKnowledgeForm.cancel": "取消",
	"externalKnowledgeForm.connect": "連接",
	"externalKnowledgeForm.connectedFailed": "連接外部知識庫失敗",
	"externalKnowledgeForm.connectedSuccess": "外部知識庫連接成功",
	externalKnowledgeId,
	externalKnowledgeIdPlaceholder,
	externalKnowledgeName,
	externalKnowledgeNamePlaceholder,
	externalTag,
	"imageUploader.browse": "瀏覽",
	"imageUploader.button": "拖放檔案或資料夾，或",
	"imageUploader.fileSizeLimitExceeded": "檔案大小超過 {{size}}MB 限制",
	"imageUploader.tip": "{{supportTypes}}（最多 {{batchCount}}，每個 {{size}}MB）",
	inconsistentEmbeddingModelTip,
	"indexingMethod.full_text_search": "全文",
	"indexingMethod.hybrid_search": "混合",
	"indexingMethod.invertedIndex": "倒排索引",
	"indexingMethod.keyword_search": "關鍵字",
	"indexingMethod.semantic_search": "向量",
	"indexingTechnique.economy": "經濟",
	"indexingTechnique.high_quality": "高品質",
	intro1,
	intro2,
	intro3: ",",
	intro4,
	intro5,
	intro6,
	knowledge,
	learnHowToWriteGoodKnowledgeDescription,
	localDocs,
	"metadata.addMetadata": "新增元數據",
	"metadata.batchEditMetadata.applyToAllSelectDocument": "應用於所有選定的文件",
	"metadata.batchEditMetadata.applyToAllSelectDocumentTip": "自動為所有選定文檔創建上述所有編輯和新元數據，否則編輯元數據將僅適用於具有該元數據的文檔。",
	"metadata.batchEditMetadata.editDocumentsNum": "編輯 {{num}} 份文件",
	"metadata.batchEditMetadata.editMetadata": "編輯元資料",
	"metadata.batchEditMetadata.multipleValue": "多重價值",
	"metadata.checkName.empty": "元數據名稱不能為空",
	"metadata.checkName.invalid": "元數據名稱只能包含小寫字母、數字和底線，並且必須以小寫字母開頭",
	"metadata.checkName.tooLong": "元數據名稱不能超過 {{max}} 個字符",
	"metadata.chooseTime": "選擇一個時間...",
	"metadata.createMetadata.back": "返回",
	"metadata.createMetadata.name": "名字",
	"metadata.createMetadata.namePlaceholder": "新增元數據名稱",
	"metadata.createMetadata.title": "新元數據",
	"metadata.createMetadata.type": "類型",
	"metadata.datasetMetadata.addMetaData": "新增元數據",
	"metadata.datasetMetadata.builtIn": "內建的",
	"metadata.datasetMetadata.builtInDescription": "內建的元數據會自動提取和生成。在使用之前必須啟用，且無法編輯。",
	"metadata.datasetMetadata.deleteContent": "您確定要刪除元數據 \"{{name}}\" 嗎？",
	"metadata.datasetMetadata.deleteTitle": "確認刪除",
	"metadata.datasetMetadata.description": "您可以在這裡管理所有的元數據。對所有文件的修改將會同步。",
	"metadata.datasetMetadata.disabled": "禁用",
	"metadata.datasetMetadata.name": "名字",
	"metadata.datasetMetadata.namePlaceholder": "元數據名稱",
	"metadata.datasetMetadata.rename": "重新命名",
	"metadata.datasetMetadata.values": "{{num}} 值",
	"metadata.documentMetadata.documentInformation": "文件資訊",
	"metadata.documentMetadata.metadataToolTip": "元數據作為一個關鍵的過濾器，提高了信息檢索的準確性和相關性。您可以在此處修改和新增此文檔的元數據。",
	"metadata.documentMetadata.startLabeling": "開始標記",
	"metadata.documentMetadata.technicalParameters": "技術參數",
	"metadata.metadata": "元數據",
	"metadata.selectMetadata.manageAction": "管理",
	"metadata.selectMetadata.newAction": "新元數據",
	"metadata.selectMetadata.search": "搜尋元數據",
	mixtureHighQualityAndEconomicTip,
	mixtureInternalAndExternalTip,
	multimodal,
	nTo1RetrievalLegacy,
	nTo1RetrievalLegacyLink,
	nTo1RetrievalLegacyLinkText,
	noExternalKnowledge,
	"parentMode.fullDoc": "完整文件",
	"parentMode.paragraph": "段",
	partialEnabled_one,
	partialEnabled_other,
	preprocessDocument,
	rerankSettings,
	"retrieval.change": "更改",
	"retrieval.changeRetrievalMethod": "更改檢索方法",
	"retrieval.full_text_search.description": "索引文件中的所有詞彙，從而允許使用者查詢任意詞彙，並返回包含這些詞彙的文字片段",
	"retrieval.full_text_search.title": "全文檢索",
	"retrieval.hybrid_search.description": "同時執行全文檢索和向量檢索，並應用重排序步驟，從兩類查詢結果中選擇匹配使用者問題的最佳結果，需配置 Rerank 模型 API",
	"retrieval.hybrid_search.recommend": "推薦",
	"retrieval.hybrid_search.title": "混合檢索",
	"retrieval.invertedIndex.description": "倒排索引是一種用於高效檢索的結構。它以詞彙為組織，每個詞彙指向包含該詞彙的文檔或網頁。",
	"retrieval.invertedIndex.title": "反向索引",
	"retrieval.keyword_search.description": "倒掛索引是一種用於高效檢索的結構。依字詞組織，每個字詞都指向包含它的文件或網頁。",
	"retrieval.keyword_search.title": "倒掛索引",
	"retrieval.semantic_search.description": "透過生成查詢嵌入並查詢與其向量表示最相似的文字分段",
	"retrieval.semantic_search.title": "向量檢索",
	retrievalSettings,
	retry,
	"selectExternalKnowledgeAPI.placeholder": "選擇外部知識 API",
	"serviceApi.card.apiKey": "API 金鑰",
	"serviceApi.card.apiReference": "API 參考",
	"serviceApi.card.endpoint": "服務 API 端點",
	"serviceApi.card.title": "後端服務 API",
	"serviceApi.disabled": "已停用",
	"serviceApi.enabled": "使用中",
	"serviceApi.title": "服務 API",
	unavailable,
	unknownError,
	updated,
	"weightedScore.customized": "自定義",
	"weightedScore.description": "通過調整分配的權重，此重新排序策略決定是優先考慮語義匹配還是關鍵詞匹配。",
	"weightedScore.keyword": "關鍵詞",
	"weightedScore.keywordFirst": "關鍵詞優先",
	"weightedScore.semantic": "語義",
	"weightedScore.semanticFirst": "語義優先",
	"weightedScore.title": "加權分數",
	wordCount
};
//#endregion
export { allExternalTip, allKnowledge, allKnowledgeDescription, appCount, connectDataset, createDataset, createDatasetIntro, createExternalAPI, createFromPipeline, createNewExternalAPI, datasetDeleteFailed, datasetDeleted, datasetUsedByApp, datasets, datasetsApi, dataset_default as default, defaultRetrievalTip, deleteDatasetConfirmContent, deleteDatasetConfirmTitle, didYouKnow, docAllEnabled_one, docAllEnabled_other, docsFailedNotice, documentCount, documentsDisabled, editExternalAPIFormTitle, editExternalAPITooltipTitle, embeddingModelNotAvailable, enable, externalAPI, externalAPIPanelDescription, externalAPIPanelDocumentation, externalAPIPanelTitle, externalKnowledgeBase, externalKnowledgeDescription, externalKnowledgeDescriptionPlaceholder, externalKnowledgeId, externalKnowledgeIdPlaceholder, externalKnowledgeName, externalKnowledgeNamePlaceholder, externalTag, inconsistentEmbeddingModelTip, intro1, intro2, intro3, intro4, intro5, intro6, knowledge, learnHowToWriteGoodKnowledgeDescription, localDocs, mixtureHighQualityAndEconomicTip, mixtureInternalAndExternalTip, multimodal, nTo1RetrievalLegacy, nTo1RetrievalLegacyLink, nTo1RetrievalLegacyLinkText, noExternalKnowledge, partialEnabled_one, partialEnabled_other, preprocessDocument, rerankSettings, retrievalSettings, retry, unavailable, unknownError, updated, wordCount };
