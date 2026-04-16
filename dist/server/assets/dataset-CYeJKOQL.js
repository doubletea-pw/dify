//#region i18n/ja-JP/dataset.json
var allExternalTip = "外部ナレッジベースのみを使用する場合、Rerank モデルを有効にするかを選択できます。有効にしない場合、検索結果はスコアに基づいてソートされます。異なるナレッジベースで検索戦略が一貫していないと、結果が不正確になる可能性があります。";
var allKnowledge = "ナレッジベース全体";
var allKnowledgeDescription = "このワークスペースにナレッジベース全体を表示する場合に選択します。ワークスペースのオーナーのみがすべてのナレッジベースを管理できます。";
var appCount = " リンクされたアプリ";
var connectDataset = "外部ナレッジベースと連携";
var createDataset = "ナレッジベースを作成";
var createDatasetIntro = "独自のテキストデータをインポートするか、LLM コンテキストの強化のために Webhook を介してリアルタイムでデータを書き込むことができます。";
var createExternalAPI = "外部ナレッジベース連携 API を追加";
var createFromPipeline = "知識パイプラインから作成する";
var createNewExternalAPI = "新しい外部ナレッジベース連携 API を作成";
var datasetDeleteFailed = "ナレッジベースの削除に失敗しました";
var datasetDeleted = "ナレッジベースが削除されました";
var datasetUsedByApp = "このナレッジベースは一部のアプリによって使用されています。アプリはこのナレッジベースを使用できなくなり、すべてのプロンプト設定とログは永久に削除されます。";
var datasets = "ナレッジベース";
var datasetsApi = "API アクセス";
var defaultRetrievalTip = "デフォルトでは、マルチパス検索が使用されます。複数のナレッジベースから情報を取得した後、再ランキングを行います。";
var deleteDatasetConfirmContent = "ナレッジベースを削除すると元に戻すことはできません。ユーザーはもはやあなたのナレッジベースにアクセスできず、すべてのプロンプトの設定とログが永久に削除されます。";
var deleteDatasetConfirmTitle = "このナレッジベースを削除しますか？";
var didYouKnow = "ご存知ですか？";
var docAllEnabled_one = "{{count}} 件のドキュメントが有効";
var docAllEnabled_other = "すべての {{count}} 件のドキュメントが有効";
var docsFailedNotice = "ドキュメントのインデックス作成に失敗しました";
var documentCount = " ドキュメント";
var documentsDisabled = "{{num}}件のドキュメントが無効 - 30 日以上非アクティブ";
var editExternalAPIFormTitle = "外部ナレッジベース連携 API を編集";
var editExternalAPITooltipTitle = "連携中のナレッジベース";
var embeddingModelNotAvailable = "Embedding モデルを利用できません。";
var enable = "有効化";
var externalAPI = "外部 API";
var externalAPIPanelDescription = "外部ナレッジベース連携 API は、Dify 外のナレッジベースと連携し、そこからナレッジベースを取得するために使用します。";
var externalAPIPanelDocumentation = "外部ナレッジベース連携 API の作成方法";
var externalAPIPanelTitle = "外部ナレッジベース連携 API";
var externalKnowledgeBase = "外部知識ベース";
var externalKnowledgeDescription = "ナレッジベースの説明";
var externalKnowledgeDescriptionPlaceholder = "このナレッジベースの説明（任意）";
var externalKnowledgeId = "外部ナレッジベース ID";
var externalKnowledgeIdPlaceholder = "ナレッジベース ID を入力";
var externalKnowledgeName = "外部ナレッジベース名";
var externalKnowledgeNamePlaceholder = "ナレッジベース名を入力";
var externalTag = "外部";
var inconsistentEmbeddingModelTip = "選択されたナレッジベースの埋め込みモデルに一貫性がない場合、Rerank モデルが必要です。";
var intro1 = "ナレッジベースは Dify アプリケーションに統合することができます";
var intro2 = "コンテキストとして";
var intro3 = "、";
var intro4 = "または";
var intro5 = "公開することができます";
var intro6 = "独立したサービスとして";
var knowledge = "ナレッジベース";
var learnHowToWriteGoodKnowledgeDescription = "効果的なナレッジベースの説明の書き方";
var localDocs = "ローカルドキュメント";
var mixtureHighQualityAndEconomicTip = "高品質なナレッジベースとコスト重視のナレッジベースを混在させるには、Rerank モデルが必要です。";
var mixtureInternalAndExternalTip = "内部と外部のナレッジベースを混在させる場合、Rerank モデルが必要です。";
var multimodal = "マルチモーダル";
var nTo1RetrievalLegacy = "N-to-1 Retrieval は 9 月に正式に廃止される予定です。より良い結果のために最新のマルチパス検索の利用を推奨します。";
var nTo1RetrievalLegacyLink = "詳細はこちら";
var nTo1RetrievalLegacyLinkText = " N-to-1 Retrieval は 9 月に正式に廃止されます。";
var noExternalKnowledge = "外部ナレッジベース連携 API がありません。ここをクリックして作成してください";
var partialEnabled_one = "合計 {{count}} 件のドキュメント、{{num}} 件が利用可能";
var partialEnabled_other = "合計 {{count}} 件のドキュメント、{{num}} 件が利用可能";
var preprocessDocument = "{{num}}件のドキュメントを前処理";
var rerankSettings = "Rerank 設定";
var retrievalSettings = "検索設定";
var retry = "再試行";
var unavailable = "利用不可";
var unknownError = "不明なエラー";
var updated = "更新された";
var wordCount = " k 単語";
var dataset_default = {
	allExternalTip,
	allKnowledge,
	allKnowledgeDescription,
	appCount,
	"batchAction.archive": "アーカイブ",
	"batchAction.cancel": "キャンセル",
	"batchAction.delete": "削除",
	"batchAction.disable": "無効にする",
	"batchAction.download": "ダウンロード",
	"batchAction.enable": "有効にする",
	"batchAction.reIndex": "再インデックス",
	"batchAction.selected": "選択済み",
	"chunkingMode.general": "汎用",
	"chunkingMode.graph": "グラフ",
	"chunkingMode.parentChild": "親子",
	"chunkingMode.qa": "Q&A",
	connectDataset,
	"connectDatasetIntro.content.end": "をご確認ください。次に、対応するナレッジベース ID を左側のフォームに入力してください。すべての情報が正しければ、連携ボタンをクリックすると、自動的にナレッジベースの検索テストに移動します。",
	"connectDatasetIntro.content.front": "外部ナレッジベースと連携するには、まず外部 API を作成する必要があります。以下の手順を参照し、",
	"connectDatasetIntro.content.link": "外部 API の作成方法",
	"connectDatasetIntro.learnMore": "詳細はこちら",
	"connectDatasetIntro.title": "外部ナレッジベースとの連携方法",
	"connectHelper.helper1": "API とナレッジベース ID を使って外部ナレッジベースと連携します。現在、",
	"connectHelper.helper2": "検索機能のみがサポートされています。",
	"connectHelper.helper3": "この機能を使用する前に、",
	"connectHelper.helper4": "ヘルプドキュメント",
	"connectHelper.helper5": "をよくお読みください。",
	"cornerLabel.pipeline": "パイプライン",
	"cornerLabel.unavailable": "利用不可",
	createDataset,
	createDatasetIntro,
	createExternalAPI,
	createFromPipeline,
	createNewExternalAPI,
	datasetDeleteFailed,
	datasetDeleted,
	datasetUsedByApp,
	datasets,
	datasetsApi,
	defaultRetrievalTip,
	deleteDatasetConfirmContent,
	deleteDatasetConfirmTitle,
	"deleteExternalAPIConfirmWarningContent.content.end": "件の外部ナレッジベースと連携しています。この API を削除すると、すべて無効になります。この API を削除しますか？",
	"deleteExternalAPIConfirmWarningContent.content.front": "この外部ナレッジベース連携 API は",
	"deleteExternalAPIConfirmWarningContent.noConnectionContent": "この API を削除しますか？",
	"deleteExternalAPIConfirmWarningContent.title.end": "しますか？",
	"deleteExternalAPIConfirmWarningContent.title.front": "削除",
	didYouKnow,
	docAllEnabled_one,
	docAllEnabled_other,
	docsFailedNotice,
	documentCount,
	documentsDisabled,
	"editExternalAPIConfirmWarningContent.end": "件の外部ナレッジベースと連携しており、この変更はすべてに適用されます。変更を保存しますか？",
	"editExternalAPIConfirmWarningContent.front": "この外部ナレッジベース連携 API は",
	editExternalAPIFormTitle,
	"editExternalAPIFormWarning.end": "件の外部ナレッジベースと連携しています",
	"editExternalAPIFormWarning.front": "この外部 API は",
	editExternalAPITooltipTitle,
	embeddingModelNotAvailable,
	enable,
	externalAPI,
	"externalAPIForm.apiKey": "API キー",
	"externalAPIForm.cancel": "キャンセル",
	"externalAPIForm.edit": "編集",
	"externalAPIForm.encrypted.end": "技術で暗号化され、安全に保存されます。",
	"externalAPIForm.encrypted.front": "API トークンは",
	"externalAPIForm.endpoint": "API エンドポイント",
	"externalAPIForm.name": "名前",
	"externalAPIForm.save": "保存",
	externalAPIPanelDescription,
	externalAPIPanelDocumentation,
	externalAPIPanelTitle,
	externalKnowledgeBase,
	externalKnowledgeDescription,
	externalKnowledgeDescriptionPlaceholder,
	"externalKnowledgeForm.cancel": "キャンセル",
	"externalKnowledgeForm.connect": "連携",
	"externalKnowledgeForm.connectedFailed": "外部ナレッジベースへの接続に失敗しました",
	"externalKnowledgeForm.connectedSuccess": "外部ナレッジベースが正常に接続されました",
	externalKnowledgeId,
	externalKnowledgeIdPlaceholder,
	externalKnowledgeName,
	externalKnowledgeNamePlaceholder,
	externalTag,
	"imageUploader.browse": "閲覧",
	"imageUploader.button": "ファイルまたはフォルダをドラッグアンドドロップ、または",
	"imageUploader.fileSizeLimitExceeded": "ファイルサイズが {{size}}MB の制限を超えています",
	"imageUploader.tip": "{{supportTypes}}（最大 {{batchCount}}、各 {{size}}MB）",
	inconsistentEmbeddingModelTip,
	"indexingMethod.full_text_search": "フルテキスト検索",
	"indexingMethod.hybrid_search": "ハイブリッド検索",
	"indexingMethod.invertedIndex": "転置",
	"indexingMethod.keyword_search": "キーワード",
	"indexingMethod.semantic_search": "ベクトル検索",
	"indexingTechnique.economy": "経済",
	"indexingTechnique.high_quality": "高品質",
	intro1,
	intro2,
	intro3: "、",
	intro4,
	intro5,
	intro6,
	knowledge,
	learnHowToWriteGoodKnowledgeDescription,
	localDocs,
	"metadata.addMetadata": "メタデータを追加",
	"metadata.batchEditMetadata.applyToAllSelectDocument": "選択したすべてのドキュメントに適用",
	"metadata.batchEditMetadata.applyToAllSelectDocumentTip": "上記の編集と新しいメタデータを選択したすべてのドキュメントに自動的に適用します。チェックしない場合、既にメタデータを持つドキュメントにのみ編集が適用されます。",
	"metadata.batchEditMetadata.editDocumentsNum": "{{num}}件のドキュメントを編集",
	"metadata.batchEditMetadata.editMetadata": "メタデータを編集",
	"metadata.batchEditMetadata.multipleValue": "複数の値",
	"metadata.checkName.empty": "メタデータ名を入力してください",
	"metadata.checkName.invalid": "メタデータ名は小文字、数字、アンダースコアのみを使用し、小文字で始める必要があります",
	"metadata.checkName.tooLong": "メタデータ名は {{max}} 文字を超えることはできません",
	"metadata.chooseTime": "時間を選択",
	"metadata.createMetadata.back": "戻る",
	"metadata.createMetadata.name": "名称",
	"metadata.createMetadata.namePlaceholder": "メタデータ名を入力",
	"metadata.createMetadata.title": "新規メタデータ",
	"metadata.createMetadata.type": "タイプ",
	"metadata.datasetMetadata.addMetaData": "メタデータを追加",
	"metadata.datasetMetadata.builtIn": "組み込み",
	"metadata.datasetMetadata.builtInDescription": "組み込みメタデータはシステムによって事前定義されたメタデータです。ここで組み込みメタデータの表示と管理ができます。",
	"metadata.datasetMetadata.deleteContent": "メタデータ「{{name}}」を削除してもよろしいですか？",
	"metadata.datasetMetadata.deleteTitle": "削除の確認",
	"metadata.datasetMetadata.description": "メタデータはドキュメントに関する情報で、ドキュメントの属性を説明するために使用されます。メタデータを活用することで、ドキュメントをより効率的に整理・管理できます。",
	"metadata.datasetMetadata.disabled": "無効",
	"metadata.datasetMetadata.name": "名称",
	"metadata.datasetMetadata.namePlaceholder": "メタデータ名",
	"metadata.datasetMetadata.rename": "名前変更",
	"metadata.datasetMetadata.values": "{{num}}個の値",
	"metadata.documentMetadata.documentInformation": "ドキュメント情報",
	"metadata.documentMetadata.metadataToolTip": "メタデータはドキュメントに関する情報で、ドキュメントの属性を説明するために使用されます。メタデータを活用することで、ドキュメントをより効率的に整理・管理できます。",
	"metadata.documentMetadata.startLabeling": "ラベリングを開始",
	"metadata.documentMetadata.technicalParameters": "技術パラメータ",
	"metadata.metadata": "メタデータ",
	"metadata.selectMetadata.manageAction": "管理",
	"metadata.selectMetadata.newAction": "新規メタデータ",
	"metadata.selectMetadata.search": "メタデータを検索",
	mixtureHighQualityAndEconomicTip,
	mixtureInternalAndExternalTip,
	multimodal,
	nTo1RetrievalLegacy,
	nTo1RetrievalLegacyLink,
	nTo1RetrievalLegacyLinkText,
	noExternalKnowledge,
	"parentMode.fullDoc": "全体",
	"parentMode.paragraph": "段落",
	partialEnabled_one,
	partialEnabled_other,
	preprocessDocument,
	rerankSettings,
	"retrieval.change": "変更",
	"retrieval.changeRetrievalMethod": "検索方法の変更",
	"retrieval.full_text_search.description": "ドキュメント内のすべての用語をインデックス化し、ユーザーが任意の用語を検索してそれに関連するテキストチャンクを取得できるようにします。",
	"retrieval.full_text_search.title": "全文検索",
	"retrieval.hybrid_search.description": "全文検索とベクトル検索を同時に実行し、ユーザーのクエリに最適なマッチを選択するために Rerank 付けを行います。Rerank モデル API の設定が必要です。",
	"retrieval.hybrid_search.recommend": "推奨",
	"retrieval.hybrid_search.title": "ハイブリッド検索",
	"retrieval.invertedIndex.description": "転置インデックスは、効率的な検索のための構造です。用語ごとに整理され、各用語はそれを含むドキュメントまたはWebページを指します。",
	"retrieval.invertedIndex.title": "転置インデックス",
	"retrieval.keyword_search.description": "逆インデックスは効率的な検索のために使用される構造です。用語によって整理されており、各用語はそれを含む文書やウェブページを指し示します。",
	"retrieval.keyword_search.title": "逆インデックス",
	"retrieval.semantic_search.description": "クエリの埋め込みを生成し、そのベクトル表現に最も類似したテキストチャンクを検索します。",
	"retrieval.semantic_search.title": "ベクトル検索",
	retrievalSettings,
	retry,
	"selectExternalKnowledgeAPI.placeholder": "外部ナレッジベース連携 API を選択",
	"serviceApi.card.apiKey": "APIキー",
	"serviceApi.card.apiReference": "APIリファレンス",
	"serviceApi.card.endpoint": "サービスAPIエンドポイント",
	"serviceApi.card.title": "バックエンドサービスAPI",
	"serviceApi.disabled": "無効",
	"serviceApi.enabled": "サービス中",
	"serviceApi.title": "サービスAPI",
	unavailable,
	unknownError,
	updated,
	"weightedScore.customized": "カスタマイズ",
	"weightedScore.description": "重みを調整することで、並べ替え戦略はセマンティックマッチングとキーワードマッチングのどちらを優先するかを決定します。",
	"weightedScore.keyword": "キーワード",
	"weightedScore.keywordFirst": "キーワード優先",
	"weightedScore.semantic": "セマンティクス",
	"weightedScore.semanticFirst": "セマンティック優先",
	"weightedScore.title": "ウェイト設定",
	wordCount
};
//#endregion
export { allExternalTip, allKnowledge, allKnowledgeDescription, appCount, connectDataset, createDataset, createDatasetIntro, createExternalAPI, createFromPipeline, createNewExternalAPI, datasetDeleteFailed, datasetDeleted, datasetUsedByApp, datasets, datasetsApi, dataset_default as default, defaultRetrievalTip, deleteDatasetConfirmContent, deleteDatasetConfirmTitle, didYouKnow, docAllEnabled_one, docAllEnabled_other, docsFailedNotice, documentCount, documentsDisabled, editExternalAPIFormTitle, editExternalAPITooltipTitle, embeddingModelNotAvailable, enable, externalAPI, externalAPIPanelDescription, externalAPIPanelDocumentation, externalAPIPanelTitle, externalKnowledgeBase, externalKnowledgeDescription, externalKnowledgeDescriptionPlaceholder, externalKnowledgeId, externalKnowledgeIdPlaceholder, externalKnowledgeName, externalKnowledgeNamePlaceholder, externalTag, inconsistentEmbeddingModelTip, intro1, intro2, intro3, intro4, intro5, intro6, knowledge, learnHowToWriteGoodKnowledgeDescription, localDocs, mixtureHighQualityAndEconomicTip, mixtureInternalAndExternalTip, multimodal, nTo1RetrievalLegacy, nTo1RetrievalLegacyLink, nTo1RetrievalLegacyLinkText, noExternalKnowledge, partialEnabled_one, partialEnabled_other, preprocessDocument, rerankSettings, retrievalSettings, retry, unavailable, unknownError, updated, wordCount };
