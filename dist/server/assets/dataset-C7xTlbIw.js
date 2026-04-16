//#region i18n/ru-RU/dataset.json
var allExternalTip = "При использовании только внешних знаний пользователь может выбрать, следует ли включать модель повторного ранжирования. Если этот параметр не включен, полученные фрагменты будут сортироваться на основе баллов. Когда стратегии извлечения из разных баз знаний несовместимы, они будут неточными.";
var allKnowledge = "Все знания";
var allKnowledgeDescription = "Выберите, чтобы отобразить все знания в этой рабочей области. Только владелец рабочего пространства может управлять всеми знаниями.";
var appCount = " связанных приложений";
var connectDataset = "Подключение к внешней базе знаний";
var createDataset = "Создать базу знаний";
var createDatasetIntro = "Импортируйте свои собственные текстовые данные или записывайте данные в режиме реального времени через Webhook для улучшения контекста LLM.";
var createExternalAPI = "Добавление API внешних знаний";
var createFromPipeline = "Создание из конвейера знаний";
var createNewExternalAPI = "Создание нового API внешних знаний";
var datasetDeleteFailed = "Не удалось удалить базу знаний";
var datasetDeleted = "База знаний удалена";
var datasetUsedByApp = "База знаний используется некоторыми приложениями. Приложения больше не смогут использовать эту базу знаний, и все настройки подсказок и журналы будут безвозвратно удалены.";
var datasets = "БАЗЫ ЗНАНИЙ";
var datasetsApi = "ДОСТУП К API";
var defaultRetrievalTip = "По умолчанию используется многоканальная проверка. Знания извлекаются из нескольких баз знаний, а затем повторно ранжируются.";
var deleteDatasetConfirmContent = "Удаление базы знаний необратимо. Пользователи больше не смогут получить доступ к вашей базе знаний, и все настройки подсказок и журналы будут безвозвратно удалены.";
var deleteDatasetConfirmTitle = "Удалить эту базу знаний?";
var didYouKnow = "Знаете ли вы?";
var docAllEnabled_one = "Документ {{count}} включен";
var docAllEnabled_other = "Все документы {{count}} включены";
var docsFailedNotice = "документов не удалось проиндексировать";
var documentCount = " документов";
var documentsDisabled = "Документы {{num}} отключены - неактивны более 30 дней";
var editExternalAPIFormTitle = "Редактирование API внешних знаний";
var editExternalAPITooltipTitle = "СВЯЗАННЫЕ ЗНАНИЯ";
var embeddingModelNotAvailable = "Модель встраивания недоступна.";
var enable = "Давать возможность";
var externalAPI = "Внешний API";
var externalAPIPanelDescription = "Внешний API базы знаний используется для подключения к базе знаний за пределами Dify и извлечения знаний из этой базы знаний.";
var externalAPIPanelDocumentation = "Узнайте, как создать API внешних знаний";
var externalAPIPanelTitle = "API внешних знаний";
var externalKnowledgeBase = "Внешняя база знаний";
var externalKnowledgeDescription = "Описание знаний";
var externalKnowledgeDescriptionPlaceholder = "Опишите, что входит в эту базу знаний (необязательно)";
var externalKnowledgeId = "Внешний идентификатор базы знаний";
var externalKnowledgeIdPlaceholder = "Пожалуйста, введите идентификатор знаний";
var externalKnowledgeName = "Имя внешнего базы знаний";
var externalKnowledgeNamePlaceholder = "Пожалуйста, введите название базы знаний";
var externalTag = "Внешний";
var inconsistentEmbeddingModelTip = "Модель переранжирования требуется, если модели встраивания выбранных баз знаний несовместимы.";
var intro1 = "Базу знаний можно интегрировать в приложение Dify ";
var intro2 = "в качестве контекста";
var intro3 = ",";
var intro4 = "или ее ";
var intro5 = "можно создать";
var intro6 = " как отдельный плагин индекса ChatGPT для публикации";
var knowledge = "База знаний";
var learnHowToWriteGoodKnowledgeDescription = "Узнайте, как написать хорошее описание знаний";
var localDocs = "Местная документация";
var mixtureHighQualityAndEconomicTip = "Для смешивания высококачественных и экономичных баз знаний требуется модель переранжирования.";
var mixtureInternalAndExternalTip = "Модель Rerank необходима для смешивания внутренних и внешних знаний.";
var multimodal = "Мультимодальный";
var nTo1RetrievalLegacy = "Поиск N-к-1 будет официально прекращен с сентября. Рекомендуется использовать новейший многопутный поиск для получения лучших результатов.";
var nTo1RetrievalLegacyLink = "Узнать больше";
var nTo1RetrievalLegacyLinkText = " Поиск N-к-1 будет официально прекращен в сентябре.";
var noExternalKnowledge = "У нас еще нет External Knowledge API, нажмите здесь, чтобы создать";
var partialEnabled_one = "Всего {{count}} документов, доступно {{num}}";
var partialEnabled_other = "Всего {{count}} документов, доступно {{num}}";
var preprocessDocument = "{{num}} Предварительная обработка документов";
var rerankSettings = "Настройки переранжирования";
var retrievalSettings = "Настройки поиска";
var retry = "Повторить попытку";
var unavailable = "Недоступно";
var unknownError = "Неизвестная ошибка";
var updated = "Обновлено";
var wordCount = " тыс. слов";
var dataset_default = {
	allExternalTip,
	allKnowledge,
	allKnowledgeDescription,
	appCount,
	"batchAction.archive": "Архив",
	"batchAction.cancel": "Отмена",
	"batchAction.delete": "Удалить",
	"batchAction.disable": "Отключить",
	"batchAction.download": "Скачать",
	"batchAction.enable": "Давать возможность",
	"batchAction.reIndex": "Переиндексация",
	"batchAction.selected": "Выбранный",
	"chunkingMode.general": "Общее",
	"chunkingMode.graph": "График",
	"chunkingMode.parentChild": "Родитель-дочерний",
	"chunkingMode.qa": "Вопросы и ответы",
	connectDataset,
	"connectDatasetIntro.content.end": ". Затем найдите соответствующий идентификатор знания и заполните его в форме слева. Если вся информация верна, он автоматически перейдет к тесту извлечения в базе знаний после нажатия кнопки подключения.",
	"connectDatasetIntro.content.front": "Чтобы подключиться к внешней базе знаний, необходимо сначала создать внешний API. Пожалуйста, внимательно прочтите и обратитесь к",
	"connectDatasetIntro.content.link": "Узнайте, как создать внешний API",
	"connectDatasetIntro.learnMore": "Подробнее",
	"connectDatasetIntro.title": "Как подключиться к внешней базе знаний",
	"connectHelper.helper1": "Подключение к внешним базам знаний через API и идентификатор базы знаний. В настоящее время",
	"connectHelper.helper2": "Поддерживается только функция извлечения",
	"connectHelper.helper3": ". Мы настоятельно рекомендуем вам",
	"connectHelper.helper4": "Ознакомьтесь с справочной документацией",
	"connectHelper.helper5": "Будьте внимательны перед использованием этой функции.",
	"cornerLabel.pipeline": "Трубопровод",
	"cornerLabel.unavailable": "Недоступно",
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
	"deleteExternalAPIConfirmWarningContent.content.end": "внешнее знание. Удаление этого API сделает их все недействительными. Вы уверены, что хотите удалить этот API?",
	"deleteExternalAPIConfirmWarningContent.content.front": "Этот API внешних знаний связан с",
	"deleteExternalAPIConfirmWarningContent.noConnectionContent": "Вы уверены, что удалите этот API?",
	"deleteExternalAPIConfirmWarningContent.title.end": "?",
	"deleteExternalAPIConfirmWarningContent.title.front": "Удалить",
	didYouKnow,
	docAllEnabled_one,
	docAllEnabled_other,
	docsFailedNotice,
	documentCount,
	documentsDisabled,
	"editExternalAPIConfirmWarningContent.end": "внешних знаний, и эта модификация будет применена ко всем им. Вы уверены, что хотите сохранить это изменение?",
	"editExternalAPIConfirmWarningContent.front": "Этот API внешних знаний связан с",
	editExternalAPIFormTitle,
	"editExternalAPIFormWarning.end": "Внешние знания",
	"editExternalAPIFormWarning.front": "Этот внешний API связан с",
	editExternalAPITooltipTitle,
	embeddingModelNotAvailable,
	enable,
	externalAPI,
	"externalAPIForm.apiKey": "Ключ API",
	"externalAPIForm.cancel": "Отмена",
	"externalAPIForm.edit": "Редактировать",
	"externalAPIForm.encrypted.end": "Технологии.",
	"externalAPIForm.encrypted.front": "Ваш токен API будет зашифрован и сохранен с помощью",
	"externalAPIForm.endpoint": "Конечная точка API",
	"externalAPIForm.name": "Имя",
	"externalAPIForm.save": "Спасать",
	externalAPIPanelDescription,
	externalAPIPanelDocumentation,
	externalAPIPanelTitle,
	externalKnowledgeBase,
	externalKnowledgeDescription,
	externalKnowledgeDescriptionPlaceholder,
	"externalKnowledgeForm.cancel": "Отмена",
	"externalKnowledgeForm.connect": "Соединять",
	"externalKnowledgeForm.connectedFailed": "Не удалось подключиться к внешней базе знаний",
	"externalKnowledgeForm.connectedSuccess": "Внешняя база знаний успешно подключена",
	externalKnowledgeId,
	externalKnowledgeIdPlaceholder,
	externalKnowledgeName,
	externalKnowledgeNamePlaceholder,
	externalTag,
	"imageUploader.browse": "Просматривать",
	"imageUploader.button": "Перетащите файл или папку, или",
	"imageUploader.fileSizeLimitExceeded": "Размер файла превышает лимит в {{size}} МБ",
	"imageUploader.tip": "{{supportTypes}} (макс. {{batchCount}}, {{size}} МБ каждый)",
	inconsistentEmbeddingModelTip,
	"indexingMethod.full_text_search": "ПОЛНЫЙ ТЕКСТ",
	"indexingMethod.hybrid_search": "ГИБРИД",
	"indexingMethod.invertedIndex": "ИНВЕРТИРОВАННЫЙ",
	"indexingMethod.keyword_search": "КЛЮЧЕВОЕ СЛОВО",
	"indexingMethod.semantic_search": "ВЕКТОР",
	"indexingTechnique.economy": "ECO",
	"indexingTechnique.high_quality": "HQ",
	intro1,
	intro2,
	intro3: ",",
	intro4,
	intro5,
	intro6,
	knowledge,
	learnHowToWriteGoodKnowledgeDescription,
	localDocs,
	"metadata.addMetadata": "Добавить метаданные",
	"metadata.batchEditMetadata.applyToAllSelectDocument": "Применить ко всем выбранным документам",
	"metadata.batchEditMetadata.applyToAllSelectDocumentTip": "Автоматически создайте все вышеуказанные редактируемые и новые метаданные для всех выбранных документов, иначе редактирование метаданных будет применяться только к документам с ними.",
	"metadata.batchEditMetadata.editDocumentsNum": "Редактирование {{num}} документов",
	"metadata.batchEditMetadata.editMetadata": "Редактировать метаданные",
	"metadata.batchEditMetadata.multipleValue": "Множественное значение",
	"metadata.checkName.empty": "Имя метаданных не может быть пустым",
	"metadata.checkName.invalid": "Имя метаданных может содержать только строчные буквы, цифры и знаки нижнего подчеркивания и должно начинаться со строчной буквы.",
	"metadata.checkName.tooLong": "Имя метаданных не может превышать {{max}} символов",
	"metadata.chooseTime": "Выберите время...",
	"metadata.createMetadata.back": "назад",
	"metadata.createMetadata.name": "Имя",
	"metadata.createMetadata.namePlaceholder": "Добавьте имя метаданных",
	"metadata.createMetadata.title": "Новые метаданные",
	"metadata.createMetadata.type": "Тип",
	"metadata.datasetMetadata.addMetaData": "Добавить метаданные",
	"metadata.datasetMetadata.builtIn": "Встроенный",
	"metadata.datasetMetadata.builtInDescription": "Встроенные метаданные автоматически извлекаются и генерируются. Их необходимо активировать перед использованием, и они не подлежат редактированию.",
	"metadata.datasetMetadata.deleteContent": "Вы уверены, что хотите удалить метаданные \"{{name}}\"?",
	"metadata.datasetMetadata.deleteTitle": "Подтвердите удаление",
	"metadata.datasetMetadata.description": "Вы можете управлять всеми метаданными в этих знаниях здесь. Изменения будут синхронизированы с каждым документом.",
	"metadata.datasetMetadata.disabled": "Отключено",
	"metadata.datasetMetadata.name": "Имя",
	"metadata.datasetMetadata.namePlaceholder": "Имя метаданных",
	"metadata.datasetMetadata.rename": "Переименовать",
	"metadata.datasetMetadata.values": "{{num}} Значений",
	"metadata.documentMetadata.documentInformation": "Информация о документе",
	"metadata.documentMetadata.metadataToolTip": "Метаданные служат важным фильтром, который повышает точность и актуальность извлечения информации. Вы можете изменить и добавить метаданные для этого документа здесь.",
	"metadata.documentMetadata.startLabeling": "Начать маркировку",
	"metadata.documentMetadata.technicalParameters": "Технические параметры",
	"metadata.metadata": "Метаданные",
	"metadata.selectMetadata.manageAction": "Управлять",
	"metadata.selectMetadata.newAction": "Новые метаданные",
	"metadata.selectMetadata.search": "Поиск метаданных",
	mixtureHighQualityAndEconomicTip,
	mixtureInternalAndExternalTip,
	multimodal,
	nTo1RetrievalLegacy,
	nTo1RetrievalLegacyLink,
	nTo1RetrievalLegacyLinkText,
	noExternalKnowledge,
	"parentMode.fullDoc": "Полный документ",
	"parentMode.paragraph": "Параграф",
	partialEnabled_one,
	partialEnabled_other,
	preprocessDocument,
	rerankSettings,
	"retrieval.change": "Изменить",
	"retrieval.changeRetrievalMethod": "Изменить метод поиска",
	"retrieval.full_text_search.description": "Индексируйте все термины в документе, позволяя пользователям искать любой термин и извлекать соответствующий фрагмент текста, содержащий эти термины.",
	"retrieval.full_text_search.title": "Полнотекстовый поиск",
	"retrieval.hybrid_search.description": "Выполняйте полнотекстовый поиск и векторный поиск одновременно, переранжируйте, чтобы выбрать наилучшее соответствие запросу пользователя. Пользователи могут выбрать установку весов или настройку модели переранжирования.",
	"retrieval.hybrid_search.recommend": "Рекомендуется",
	"retrieval.hybrid_search.title": "Гибридный поиск",
	"retrieval.invertedIndex.description": "Инверсный индекс — это структура, используемая для эффективного поиска. Организованный по терминам, каждый термин указывает на документы или веб-страницы, содержащие его.",
	"retrieval.invertedIndex.title": "Обратный индекс",
	"retrieval.keyword_search.description": "Инвертированный индекс — это структура, используемая для эффективного извлечения. Каждый термин упорядочен по терминам и указывает на документы или веб-страницы, содержащие его.",
	"retrieval.keyword_search.title": "Инвертированный индекс",
	"retrieval.semantic_search.description": "Создайте встраивания запросов и найдите фрагмент текста, наиболее похожий на его векторное представление.",
	"retrieval.semantic_search.title": "Векторный поиск",
	retrievalSettings,
	retry,
	"selectExternalKnowledgeAPI.placeholder": "Выбор API внешних знаний",
	"serviceApi.card.apiKey": "API ключ",
	"serviceApi.card.apiReference": "Справочник API",
	"serviceApi.card.endpoint": "Конечная точка API сервиса",
	"serviceApi.card.title": "API бэкенд-сервиса",
	"serviceApi.disabled": "Отключено",
	"serviceApi.enabled": "На службе",
	"serviceApi.title": "Сервисный API",
	unavailable,
	unknownError,
	updated,
	"weightedScore.customized": "Настраиваемый",
	"weightedScore.description": "Регулируя назначенные веса, эта стратегия переранжирования определяет, следует ли отдавать приоритет семантическому или ключевому соответствию.",
	"weightedScore.keyword": "Ключевые слова",
	"weightedScore.keywordFirst": "Ключевые слова в первую очередь",
	"weightedScore.semantic": "Семантика",
	"weightedScore.semanticFirst": "Семантика в первую очередь",
	"weightedScore.title": "Взвешенная оценка",
	wordCount
};
//#endregion
export { allExternalTip, allKnowledge, allKnowledgeDescription, appCount, connectDataset, createDataset, createDatasetIntro, createExternalAPI, createFromPipeline, createNewExternalAPI, datasetDeleteFailed, datasetDeleted, datasetUsedByApp, datasets, datasetsApi, dataset_default as default, defaultRetrievalTip, deleteDatasetConfirmContent, deleteDatasetConfirmTitle, didYouKnow, docAllEnabled_one, docAllEnabled_other, docsFailedNotice, documentCount, documentsDisabled, editExternalAPIFormTitle, editExternalAPITooltipTitle, embeddingModelNotAvailable, enable, externalAPI, externalAPIPanelDescription, externalAPIPanelDocumentation, externalAPIPanelTitle, externalKnowledgeBase, externalKnowledgeDescription, externalKnowledgeDescriptionPlaceholder, externalKnowledgeId, externalKnowledgeIdPlaceholder, externalKnowledgeName, externalKnowledgeNamePlaceholder, externalTag, inconsistentEmbeddingModelTip, intro1, intro2, intro3, intro4, intro5, intro6, knowledge, learnHowToWriteGoodKnowledgeDescription, localDocs, mixtureHighQualityAndEconomicTip, mixtureInternalAndExternalTip, multimodal, nTo1RetrievalLegacy, nTo1RetrievalLegacyLink, nTo1RetrievalLegacyLinkText, noExternalKnowledge, partialEnabled_one, partialEnabled_other, preprocessDocument, rerankSettings, retrievalSettings, retry, unavailable, unknownError, updated, wordCount };
