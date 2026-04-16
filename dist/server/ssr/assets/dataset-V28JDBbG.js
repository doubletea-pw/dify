//#region i18n/uk-UA/dataset.json
var allExternalTip = "При використанні тільки зовнішніх знань користувач може вибрати, чи включати модель Rerank. Якщо цей параметр не увімкнено, отримані фрагменти будуть відсортовані на основі оцінок. Коли стратегії пошуку різних баз знань несумісні, це буде неточно.";
var allKnowledge = "Всі знання";
var allKnowledgeDescription = "Виберіть, щоб відобразити всі знання в цій робочій області. Тільки власник робочої області може керувати всіма знаннями.";
var appCount = " пов'язаних додатків";
var connectDataset = "Підключення до зовнішньої бази знань";
var createDataset = "Створити Знання";
var createDatasetIntro = "Імпортуйте власні текстові дані або записуйте дані в реальному часі через Webhook для покращення LLM-контексту.";
var createExternalAPI = "Додавання зовнішнього API знань";
var createFromPipeline = "Створюйте на основі Knowledge Pipeline";
var createNewExternalAPI = "Створення нового API зовнішніх знань";
var datasetDeleteFailed = "Не вдалося видалити Знання";
var datasetDeleted = "Знання видалено";
var datasetUsedByApp = "Ці знання використовуються деякими додатками. Додатки більше не зможуть використовувати ці Знання, а всі конфігурації підказок та журнали будуть остаточно видалені.";
var datasets = "ЗНАННЯ";
var datasetsApi = "API";
var defaultRetrievalTip = "За замовчуванням використовується отримання кількома шляхами. Знання витягуються з кількох баз знань, а потім заново ранжуються.";
var deleteDatasetConfirmContent = "Видалення \"Знання\" є незворотнім. Користувачі більше не матимуть доступу до Знань, а всі конфігурації підказок і журнали будуть безповоротно видалені.";
var deleteDatasetConfirmTitle = "Видалити це Знання?";
var didYouKnow = "Чи знаєте ви?";
var docAllEnabled_one = "{{count}} документ увімкнено";
var docAllEnabled_other = "Усі документи {{count}} увімкнено";
var docsFailedNotice = "документи не вдалося проіндексувати";
var documentCount = " док.";
var documentsDisabled = "Документи {{num}} вимкнені - неактивні понад 30 днів";
var editExternalAPIFormTitle = "Редагування API зовнішніх знань";
var editExternalAPITooltipTitle = "ПОВ'ЯЗАНІ ЗНАННЯ";
var embeddingModelNotAvailable = "Модель вбудовування недоступна.";
var enable = "Вмикати";
var externalAPI = "Зовнішній API";
var externalAPIPanelDescription = "API зовнішніх знань використовується для підключення до бази знань за межами Dify і отримання знань із цієї бази знань.";
var externalAPIPanelDocumentation = "Дізнайтеся, як створити API зовнішніх знань";
var externalAPIPanelTitle = "API зовнішніх знань";
var externalKnowledgeBase = "Зовнішня база знань";
var externalKnowledgeDescription = "Опис знань";
var externalKnowledgeDescriptionPlaceholder = "Опишіть, що міститься в цій базі знань (необов'язково)";
var externalKnowledgeId = "Зовнішній ідентифікатор знань";
var externalKnowledgeIdPlaceholder = "Будь ласка, введіть Knowledge ID";
var externalKnowledgeName = "Зовнішнє найменування знань";
var externalKnowledgeNamePlaceholder = "Будь ласка, введіть назву бази знань";
var externalTag = "Зовнішній";
var inconsistentEmbeddingModelTip = "Модель перерангування потрібна, якщо моделі вбудовування вибраних баз знань є несумісними.";
var intro1 = "Знання можна інтегрувати до програми Dify ";
var intro2 = "як контекст";
var intro3 = ",";
var intro4 = "або його ";
var intro5 = "можна створити";
var intro6 = " як автономний плагін індексу ChatGPT для публікації";
var knowledge = "Знання";
var learnHowToWriteGoodKnowledgeDescription = "Навчіться писати хороший опис знань";
var localDocs = "Локальні документи";
var mixtureHighQualityAndEconomicTip = "Модель перерангування потрібна для суміші високоякісних та економічних баз знань.";
var mixtureInternalAndExternalTip = "Модель Rerank необхідна для поєднання внутрішніх і зовнішніх знань.";
var multimodal = "Мультимодальний";
var nTo1RetrievalLegacy = "N-до-1 пошук буде офіційно застарілим з вересня. Рекомендується використовувати найновіший багатошляховий пошук для отримання кращих результатів.";
var nTo1RetrievalLegacyLink = "Дізнатися більше";
var nTo1RetrievalLegacyLinkText = "N-до-1 пошук буде офіційно застарілим у вересні.";
var noExternalKnowledge = "API зовнішніх знань поки що не існує, натисніть тут, щоб створити";
var partialEnabled_one = "Всього {{count}} документів, доступно {{num}}";
var partialEnabled_other = "Всього {{count}} документів, доступно {{num}}";
var preprocessDocument = "{{num}} Попередня обробка документів";
var rerankSettings = "Налаштування перерангування";
var retrievalSettings = "Налаштування пошуку";
var retry = "Повторити спробу";
var unavailable = "Недоступно";
var unknownError = "Невідома помилка";
var updated = "Оновлено";
var wordCount = " тис. слів";
var dataset_default = {
	allExternalTip,
	allKnowledge,
	allKnowledgeDescription,
	appCount,
	"batchAction.archive": "Архів",
	"batchAction.cancel": "Скасувати",
	"batchAction.delete": "Видалити",
	"batchAction.disable": "Вимкнути",
	"batchAction.download": "Завантажити",
	"batchAction.enable": "Вмикати",
	"batchAction.reIndex": "Повторно індексувати",
	"batchAction.selected": "Вибрані",
	"chunkingMode.general": "Загальне",
	"chunkingMode.graph": "Графік",
	"chunkingMode.parentChild": "Батьки-діти",
	"chunkingMode.qa": "Питання та відповіді",
	connectDataset,
	"connectDatasetIntro.content.end": ". Потім знайдіть відповідний ідентифікатор знань і заповніть його у формі зліва. Якщо вся інформація вірна, він автоматично перейде до пошукового тесту в базі знань після натискання кнопки підключення.",
	"connectDatasetIntro.content.front": "Щоб підключитися до зовнішньої бази знань, спочатку потрібно створити зовнішній API. Будь ласка, уважно прочитайте та зверніться до",
	"connectDatasetIntro.content.link": "Дізнайтеся, як створити зовнішній API",
	"connectDatasetIntro.learnMore": "Дізнатися більше",
	"connectDatasetIntro.title": "Як підключитися до зовнішньої бази знань",
	"connectHelper.helper1": "Підключайтеся до зовнішніх баз знань через API та ідентифікатор бази знань. Наразі",
	"connectHelper.helper2": "Підтримується лише функція пошуку",
	"connectHelper.helper3": ". Ми настійно рекомендуємо вам",
	"connectHelper.helper4": "Прочитайте довідкову документацію",
	"connectHelper.helper5": "Уважно перед використанням цієї функції.",
	"cornerLabel.pipeline": "Трубопровід",
	"cornerLabel.unavailable": "Немає у наявності",
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
	"deleteExternalAPIConfirmWarningContent.content.end": "зовнішні знання. Видалення цього API призведе до втрати чинності всіх з них. Ви впевнені, що хочете видалити цей API?",
	"deleteExternalAPIConfirmWarningContent.content.front": "Цей API зовнішніх знань пов'язаний з",
	"deleteExternalAPIConfirmWarningContent.noConnectionContent": "Ви впевнені, що видалили цей API?",
	"deleteExternalAPIConfirmWarningContent.title.end": "?",
	"deleteExternalAPIConfirmWarningContent.title.front": "Видалити",
	didYouKnow,
	docAllEnabled_one,
	docAllEnabled_other,
	docsFailedNotice,
	documentCount,
	documentsDisabled,
	"editExternalAPIConfirmWarningContent.end": "зовнішні знання, і ця модифікація буде застосована до всіх них. Ви впевнені, що хочете зберегти цю зміну?",
	"editExternalAPIConfirmWarningContent.front": "Цей API зовнішніх знань пов'язаний з",
	editExternalAPIFormTitle,
	"editExternalAPIFormWarning.end": "Зовнішні знання",
	"editExternalAPIFormWarning.front": "Цей зовнішній API пов'язаний з",
	editExternalAPITooltipTitle,
	embeddingModelNotAvailable,
	enable,
	externalAPI,
	"externalAPIForm.apiKey": "Ключ API",
	"externalAPIForm.cancel": "Скасувати",
	"externalAPIForm.edit": "Редагувати",
	"externalAPIForm.encrypted.end": "Технології.",
	"externalAPIForm.encrypted.front": "Ваш токен API буде зашифровано та збережено за допомогою",
	"externalAPIForm.endpoint": "Кінцева точка API",
	"externalAPIForm.name": "Ім'я",
	"externalAPIForm.save": "Рятувати",
	externalAPIPanelDescription,
	externalAPIPanelDocumentation,
	externalAPIPanelTitle,
	externalKnowledgeBase,
	externalKnowledgeDescription,
	externalKnowledgeDescriptionPlaceholder,
	"externalKnowledgeForm.cancel": "Скасувати",
	"externalKnowledgeForm.connect": "Підключатися",
	"externalKnowledgeForm.connectedFailed": "Не вдалося підключитися до зовнішньої бази знань",
	"externalKnowledgeForm.connectedSuccess": "Зовнішня база знань успішно підключена",
	externalKnowledgeId,
	externalKnowledgeIdPlaceholder,
	externalKnowledgeName,
	externalKnowledgeNamePlaceholder,
	externalTag,
	"imageUploader.browse": "Перегляд",
	"imageUploader.button": "Перетягніть файл або папку, або",
	"imageUploader.fileSizeLimitExceeded": "Розмір файлу перевищує ліміт у {{size}} МБ",
	"imageUploader.tip": "{{supportTypes}} (Макс {{batchCount}}, по {{size}} МБ кожен)",
	inconsistentEmbeddingModelTip,
	"indexingMethod.full_text_search": "ПОВНИЙ ТЕКСТ",
	"indexingMethod.hybrid_search": "ГІБРИД",
	"indexingMethod.invertedIndex": "ІНВЕРТОВАНИЙ",
	"indexingMethod.keyword_search": "КЛЮЧОВЕ СЛОВО",
	"indexingMethod.semantic_search": "ВЕКТОР",
	"indexingTechnique.economy": "ЕКО",
	"indexingTechnique.high_quality": "ВЯ",
	intro1,
	intro2,
	intro3: ",",
	intro4,
	intro5,
	intro6,
	knowledge,
	learnHowToWriteGoodKnowledgeDescription,
	localDocs,
	"metadata.addMetadata": "Додати метадані",
	"metadata.batchEditMetadata.applyToAllSelectDocument": "Застосувати до всіх вибраних документів",
	"metadata.batchEditMetadata.applyToAllSelectDocumentTip": "Автоматично створювати всю редаговану та нову метадані для всіх вибраних документів, інакше редагування метаданих буде застосовуватися тільки до документів, які мають їх.",
	"metadata.batchEditMetadata.editDocumentsNum": "Редагування {{num}} документів",
	"metadata.batchEditMetadata.editMetadata": "Редагувати метадані",
	"metadata.batchEditMetadata.multipleValue": "Кілька значень",
	"metadata.checkName.empty": "Ім'я метаданих не може бути порожнім",
	"metadata.checkName.invalid": "Ім'я метаданих може містити лише малі літери, цифри та підкреслення, і повинно починатися з малої літери",
	"metadata.checkName.tooLong": "Назва метаданих не може перевищувати {{max}} символів",
	"metadata.chooseTime": "Виберіть час...",
	"metadata.createMetadata.back": "Назад",
	"metadata.createMetadata.name": "Ім'я",
	"metadata.createMetadata.namePlaceholder": "Додати назву метаданих",
	"metadata.createMetadata.title": "Нові метадані",
	"metadata.createMetadata.type": "Тип",
	"metadata.datasetMetadata.addMetaData": "Додати метадані",
	"metadata.datasetMetadata.builtIn": "Вбудований",
	"metadata.datasetMetadata.builtInDescription": "Вбудовані метадані автоматично витягуються та генеруються. Вони повинні бути активовані перед використанням і не можуть бути відредаговані.",
	"metadata.datasetMetadata.deleteContent": "Ви впевнені, що хочете видалити метадані \"{{name}}\"?",
	"metadata.datasetMetadata.deleteTitle": "Підтвердьте, щоб видалити",
	"metadata.datasetMetadata.description": "Ви можете керувати всіма метаданими в цьому знанні тут. Модифікації будуть синхронізовані з кожним документом.",
	"metadata.datasetMetadata.disabled": "Вимкнено",
	"metadata.datasetMetadata.name": "Ім'я",
	"metadata.datasetMetadata.namePlaceholder": "Назва метаданих",
	"metadata.datasetMetadata.rename": "Перейменувати",
	"metadata.datasetMetadata.values": "{{num}} Значення",
	"metadata.documentMetadata.documentInformation": "Інформація про документ",
	"metadata.documentMetadata.metadataToolTip": "Метадані слугують критичною фільтрацією, що підвищує точність і актуальність витягування інформації. Ви можете змінити та додати метадані для цього документа тут.",
	"metadata.documentMetadata.startLabeling": "Почати маркування",
	"metadata.documentMetadata.technicalParameters": "Технічні параметри",
	"metadata.metadata": "Метадані",
	"metadata.selectMetadata.manageAction": "Керувати",
	"metadata.selectMetadata.newAction": "Нові метадані",
	"metadata.selectMetadata.search": "Пошукова метаінформація",
	mixtureHighQualityAndEconomicTip,
	mixtureInternalAndExternalTip,
	multimodal,
	nTo1RetrievalLegacy,
	nTo1RetrievalLegacyLink,
	nTo1RetrievalLegacyLinkText,
	noExternalKnowledge,
	"parentMode.fullDoc": "Повний документ",
	"parentMode.paragraph": "Абзац",
	partialEnabled_one,
	partialEnabled_other,
	preprocessDocument,
	rerankSettings,
	"retrieval.change": "Змінити",
	"retrieval.changeRetrievalMethod": "Змінити метод пошуку",
	"retrieval.full_text_search.description": "Індексує всі терміни в документі, дозволяючи користувачам шукати будь-який термін і отримувати відповідний фрагмент тексту, що містить цей термін.",
	"retrieval.full_text_search.title": "Повнотекстовий пошук",
	"retrieval.hybrid_search.description": "Виконуйте повнотекстовий пошук і векторний пошук одночасно, повторно ранжуючи, щоб вибрати найкращу відповідність на запит користувача. Необхідна конфігурація Rerank model API.",
	"retrieval.hybrid_search.recommend": "Рекомендовано",
	"retrieval.hybrid_search.title": "Гібридний пошук",
	"retrieval.invertedIndex.description": "Зворотний індекс — це структура, яка використовується для ефективного пошуку. Він організований за термінами, і кожен термін вказує на документи або веб-сторінки, що його містять.",
	"retrieval.invertedIndex.title": "Перевернутий індекс",
	"retrieval.keyword_search.description": "Перевернутий індекс — це структура, яка використовується для ефективного пошуку. Упорядкований за термінами, кожен термін вказує на документи або веб-сторінки, що містять його.",
	"retrieval.keyword_search.title": "Перевернутий індекс",
	"retrieval.semantic_search.description": "Генерує вбудовування запитів і шукає фрагмент тексту, найбільш схожий на його векторне представлення.",
	"retrieval.semantic_search.title": "Векторний пошук",
	retrievalSettings,
	retry,
	"selectExternalKnowledgeAPI.placeholder": "Виберіть API зовнішніх знань",
	"serviceApi.card.apiKey": "Ключ API",
	"serviceApi.card.apiReference": "Посилання на API",
	"serviceApi.card.endpoint": "Кінцева точка API сервісу",
	"serviceApi.card.title": "API бекенд-сервіс",
	"serviceApi.disabled": "Вимкнено",
	"serviceApi.enabled": "У службі",
	"serviceApi.title": "Сервісний API",
	unavailable,
	unknownError,
	updated,
	"weightedScore.customized": "Налаштований",
	"weightedScore.description": "Регулюючи призначені ваги, ця стратегія перерангування визначає, чи надавати пріоритет семантичному чи ключовому відповідності.",
	"weightedScore.keyword": "Ключове слово",
	"weightedScore.keywordFirst": "Спочатку ключове слово",
	"weightedScore.semantic": "Семантичний",
	"weightedScore.semanticFirst": "Спочатку семантичний",
	"weightedScore.title": "Зважена оцінка",
	wordCount
};
//#endregion
export { allExternalTip, allKnowledge, allKnowledgeDescription, appCount, connectDataset, createDataset, createDatasetIntro, createExternalAPI, createFromPipeline, createNewExternalAPI, datasetDeleteFailed, datasetDeleted, datasetUsedByApp, datasets, datasetsApi, dataset_default as default, defaultRetrievalTip, deleteDatasetConfirmContent, deleteDatasetConfirmTitle, didYouKnow, docAllEnabled_one, docAllEnabled_other, docsFailedNotice, documentCount, documentsDisabled, editExternalAPIFormTitle, editExternalAPITooltipTitle, embeddingModelNotAvailable, enable, externalAPI, externalAPIPanelDescription, externalAPIPanelDocumentation, externalAPIPanelTitle, externalKnowledgeBase, externalKnowledgeDescription, externalKnowledgeDescriptionPlaceholder, externalKnowledgeId, externalKnowledgeIdPlaceholder, externalKnowledgeName, externalKnowledgeNamePlaceholder, externalTag, inconsistentEmbeddingModelTip, intro1, intro2, intro3, intro4, intro5, intro6, knowledge, learnHowToWriteGoodKnowledgeDescription, localDocs, mixtureHighQualityAndEconomicTip, mixtureInternalAndExternalTip, multimodal, nTo1RetrievalLegacy, nTo1RetrievalLegacyLink, nTo1RetrievalLegacyLinkText, noExternalKnowledge, partialEnabled_one, partialEnabled_other, preprocessDocument, rerankSettings, retrievalSettings, retry, unavailable, unknownError, updated, wordCount };
