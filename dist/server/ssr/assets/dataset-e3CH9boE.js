//#region i18n/de-DE/dataset.json
var allExternalTip = "Wenn nur externes Wissen verwendet wird, kann der Benutzer auswählen, ob das Rerank-Modell aktiviert werden soll. Wenn diese Option nicht aktiviert ist, werden die abgerufenen Blöcke basierend auf den Punktzahlen sortiert. Wenn die Abrufstrategien verschiedener Wissensdatenbanken inkonsistent sind, ist dies ungenau.";
var allKnowledge = "Alles Wissen";
var allKnowledgeDescription = "Wählen Sie diese Option aus, um das gesamte Wissen in diesem Arbeitsbereich anzuzeigen. Nur der Workspace-Besitzer kann das gesamte Wissen verwalten.";
var appCount = " verknüpfte Apps";
var connectDataset = "Herstellen einer Verbindung mit einer externen Wissensdatenbank";
var createDataset = "Wissen erstellen";
var createDatasetIntro = "Importiere deine eigenen Textdaten oder schreibe Daten in Echtzeit über Webhook für die LLM-Kontextverbesserung.";
var createExternalAPI = "Hinzufügen einer externen Knowledge-API";
var createFromPipeline = "Aus Wissenspipeline erstellen";
var createNewExternalAPI = "Erstellen einer neuen API für externes Wissen";
var datasetDeleteFailed = "Löschen des Wissens fehlgeschlagen";
var datasetDeleted = "Wissen gelöscht";
var datasetUsedByApp = "Das Wissen wird von einigen Apps verwendet. Apps werden dieses Wissen nicht mehr nutzen können, und alle Prompt-Konfigurationen und Protokolle werden dauerhaft gelöscht.";
var datasets = "WISSEN";
var datasetsApi = "API";
var defaultRetrievalTip = "Standardmäßig wird der Multi-Path-Abruf verwendet. Das Wissen wird aus mehreren Wissensdatenbanken abgerufen und dann neu eingestuft.";
var deleteDatasetConfirmContent = "Das Löschen des Wissens ist unwiderruflich. Benutzer werden nicht mehr auf Ihr Wissen zugreifen können und alle Eingabeaufforderungen, Konfigurationen und Protokolle werden dauerhaft gelöscht.";
var deleteDatasetConfirmTitle = "Dieses Wissen löschen?";
var didYouKnow = "Wusstest du schon?";
var docAllEnabled_one = "{{count}} Dokument aktiviert";
var docAllEnabled_other = "Alle {{count}} Dokumente aktiviert";
var docsFailedNotice = "Dokumente konnten nicht indiziert werden";
var documentCount = " Dokumente";
var documentsDisabled = "{{num}} Dokumente deaktiviert - seit über 30 Tagen inaktiv";
var editExternalAPIFormTitle = "Bearbeiten der API für externes Wissen";
var editExternalAPITooltipTitle = "VERKNÜPFTES WISSEN";
var embeddingModelNotAvailable = "Das Einbettungsmodell ist nicht verfügbar.";
var enable = "Ermöglichen";
var externalAPI = "Externe API";
var externalAPIPanelDescription = "Die API für externes Wissen wird verwendet, um eine Verbindung zu einer Wissensdatenbank außerhalb von Dify herzustellen und Wissen aus dieser Wissensdatenbank abzurufen.";
var externalAPIPanelDocumentation = "Erfahren Sie, wie Sie eine API für externes Wissen erstellen";
var externalAPIPanelTitle = "API für externes Wissen";
var externalKnowledgeBase = "Externe Wissensdatenbank";
var externalKnowledgeDescription = "Wissen Beschreibung";
var externalKnowledgeDescriptionPlaceholder = "Beschreiben Sie, was in dieser Wissensdatenbank enthalten ist (optional)";
var externalKnowledgeId = "ID für externes Wissen";
var externalKnowledgeIdPlaceholder = "Bitte geben Sie die Knowledge ID ein";
var externalKnowledgeName = "Name des externen Wissens";
var externalKnowledgeNamePlaceholder = "Bitte geben Sie den Namen der Wissensdatenbank ein.";
var externalTag = "Äußerlich";
var inconsistentEmbeddingModelTip = "Das Rerank-Modell ist erforderlich, wenn die Embedding-Modelle der ausgewählten Wissensbasen inkonsistent sind.";
var intro1 = "Das Wissen kann in die Dify-Anwendung ";
var intro2 = "als Kontext";
var intro3 = ",";
var intro4 = "oder es ";
var intro5 = "kann erstellt werden";
var intro6 = " als ein eigenständiges ChatGPT-Index-Plugin zum Veröffentlichen";
var knowledge = "Wissen";
var learnHowToWriteGoodKnowledgeDescription = "Erfahren Sie, wie Sie eine gute Wissensbeschreibung schreiben";
var localDocs = "Lokale Dokumente";
var mixtureHighQualityAndEconomicTip = "Für die Mischung von hochwertigen und wirtschaftlichen Wissensbasen ist das Rerank-Modell erforderlich.";
var mixtureInternalAndExternalTip = "Das Rerank-Modell ist für die Mischung von internem und externem Wissen erforderlich.";
var multimodal = "Multimodal";
var nTo1RetrievalLegacy = "N-zu-1-Abruf wird ab September offiziell eingestellt. Es wird empfohlen, den neuesten Multi-Pfad-Abruf zu verwenden, um bessere Ergebnisse zu erzielen.";
var nTo1RetrievalLegacyLink = "Mehr erfahren";
var nTo1RetrievalLegacyLinkText = "N-zu-1-Abruf wird im September offiziell eingestellt.";
var noExternalKnowledge = "Es gibt noch keine External Knowledge API, klicken Sie hier, um zu erstellen";
var partialEnabled_one = "Insgesamt {{count}} Dokumente, {{num}} verfügbar";
var partialEnabled_other = "Insgesamt {{count}} Dokumente, {{num}} verfügbar";
var preprocessDocument = "{{num}} Vorverarbeiten von Dokumenten";
var rerankSettings = "Rerank-Einstellungen";
var retrievalSettings = "Abrufeinstellungen";
var retry = "Wiederholen";
var unavailable = "Nicht verfügbar";
var unknownError = "Unbekannter Fehler";
var updated = "Aktualisierte";
var wordCount = " k Wörter";
var dataset_default = {
	allExternalTip,
	allKnowledge,
	allKnowledgeDescription,
	appCount,
	"batchAction.archive": "Archiv",
	"batchAction.cancel": "Abbrechen",
	"batchAction.delete": "Löschen",
	"batchAction.disable": "Abschalten",
	"batchAction.download": "Herunterladen",
	"batchAction.enable": "Ermöglichen",
	"batchAction.reIndex": "Neu indexieren",
	"batchAction.selected": "Ausgewählt",
	"chunkingMode.general": "Allgemein",
	"chunkingMode.graph": "Graph",
	"chunkingMode.parentChild": "Eltern-Kind",
	"chunkingMode.qa": "Fragen und Antworten",
	connectDataset,
	"connectDatasetIntro.content.end": ". Suchen Sie dann die entsprechende Wissens-ID und füllen Sie diese in das Formular links aus. Wenn alle Informationen korrekt sind, wird nach dem Klicken auf die Schaltfläche \"Verbinden\" automatisch zum Abruftest in der Wissensdatenbank gesprungen.",
	"connectDatasetIntro.content.front": "Um eine Verbindung zu einer externen Wissensdatenbank herzustellen, müssen Sie zuerst eine externe API erstellen. Bitte lesen Sie diese sorgfältig durch und beziehen Sie sich auf",
	"connectDatasetIntro.content.link": "Erfahren Sie, wie Sie eine externe API erstellen",
	"connectDatasetIntro.learnMore": "Weitere Informationen",
	"connectDatasetIntro.title": "So stellen Sie eine Verbindung zu einer externen Wissensdatenbank her",
	"connectHelper.helper1": "Verbinden Sie sich mit externen Wissensdatenbanken über API und Wissensdatenbank-ID.",
	"connectHelper.helper2": "Es wird nur die Retrieval-Funktionalität unterstützt",
	"connectHelper.helper3": ". Wir empfehlen Ihnen dringend,",
	"connectHelper.helper4": "Lesen Sie die Hilfedokumentation",
	"connectHelper.helper5": "bevor Sie diese Funktion verwenden.",
	"cornerLabel.pipeline": "Pipeline",
	"cornerLabel.unavailable": "Nicht verfügbar",
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
	"deleteExternalAPIConfirmWarningContent.content.end": "externes Wissen. Wenn Sie diese API löschen, werden alle ungültig. Sind Sie sicher, dass Sie diese API löschen möchten?",
	"deleteExternalAPIConfirmWarningContent.content.front": "Diese External Knowledge API ist verknüpft mit",
	"deleteExternalAPIConfirmWarningContent.noConnectionContent": "Sind Sie sicher, dass Sie diese API löschen möchten?",
	"deleteExternalAPIConfirmWarningContent.title.end": "?",
	"deleteExternalAPIConfirmWarningContent.title.front": "Löschen",
	didYouKnow,
	docAllEnabled_one,
	docAllEnabled_other,
	docsFailedNotice,
	documentCount,
	documentsDisabled,
	"editExternalAPIConfirmWarningContent.end": "externes Wissen, und diese Modifikation wird auf alle angewendet. Sind Sie sicher, dass Sie diese Änderung speichern möchten?",
	"editExternalAPIConfirmWarningContent.front": "Diese External Knowledge API ist verknüpft mit",
	editExternalAPIFormTitle,
	"editExternalAPIFormWarning.end": "externes Wissen",
	"editExternalAPIFormWarning.front": "Diese externe API ist verknüpft mit",
	editExternalAPITooltipTitle,
	embeddingModelNotAvailable,
	enable,
	externalAPI,
	"externalAPIForm.apiKey": "API-Schlüssel",
	"externalAPIForm.cancel": "Abbrechen",
	"externalAPIForm.edit": "Redigieren",
	"externalAPIForm.encrypted.end": "Technologie.",
	"externalAPIForm.encrypted.front": "Ihr API-Token wird verschlüsselt und gespeichert mit",
	"externalAPIForm.endpoint": "API-Endpunkt",
	"externalAPIForm.name": "Name",
	"externalAPIForm.save": "Retten",
	externalAPIPanelDescription,
	externalAPIPanelDocumentation,
	externalAPIPanelTitle,
	externalKnowledgeBase,
	externalKnowledgeDescription,
	externalKnowledgeDescriptionPlaceholder,
	"externalKnowledgeForm.cancel": "Abbrechen",
	"externalKnowledgeForm.connect": "Verbinden",
	"externalKnowledgeForm.connectedFailed": "Verbindung zur externen Wissensbasis fehlgeschlagen",
	"externalKnowledgeForm.connectedSuccess": "Externe Wissensbasis erfolgreich verbunden",
	externalKnowledgeId,
	externalKnowledgeIdPlaceholder,
	externalKnowledgeName,
	externalKnowledgeNamePlaceholder,
	externalTag,
	"imageUploader.browse": "Durchsuchen",
	"imageUploader.button": "Datei oder Ordner ziehen und ablegen, oder",
	"imageUploader.fileSizeLimitExceeded": "Die Dateigröße überschreitet das Limit von {{size}} MB",
	"imageUploader.tip": "{{supportTypes}} (Max {{batchCount}}, je {{size}}MB)",
	inconsistentEmbeddingModelTip,
	"indexingMethod.full_text_search": "VOLLTEXT",
	"indexingMethod.hybrid_search": "HYBRID",
	"indexingMethod.invertedIndex": "INVERTIERT",
	"indexingMethod.keyword_search": "SCHLÜSSELWORT",
	"indexingMethod.semantic_search": "VEKTOR",
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
	"metadata.addMetadata": "Metadaten hinzufügen",
	"metadata.batchEditMetadata.applyToAllSelectDocument": "Auf alle ausgewählten Dokumente anwenden",
	"metadata.batchEditMetadata.applyToAllSelectDocumentTip": "Erstellen Sie automatisch alle oben bearbeiteten und neuen Metadaten für alle ausgewählten Dokumente, andernfalls wird die Bearbeitung der Metadaten nur auf Dokumente angewendet, die bereits Metadaten enthalten.",
	"metadata.batchEditMetadata.editDocumentsNum": "Bearbeiten von {{num}} Dokumenten",
	"metadata.batchEditMetadata.editMetadata": "Metadaten bearbeiten",
	"metadata.batchEditMetadata.multipleValue": "Mehrwert",
	"metadata.checkName.empty": "Der Metadatenname darf nicht leer sein.",
	"metadata.checkName.invalid": "Der Metadatenname darf nur Kleinbuchstaben, Zahlen und Unterstriche enthalten und muss mit einem Kleinbuchstaben beginnen.",
	"metadata.checkName.tooLong": "Der Metadatenname darf {{max}} Zeichen nicht überschreiten.",
	"metadata.chooseTime": "Wählen Sie eine Zeit...",
	"metadata.createMetadata.back": "Zurück",
	"metadata.createMetadata.name": "Name",
	"metadata.createMetadata.namePlaceholder": "Metadatenname hinzufügen",
	"metadata.createMetadata.title": "Neue Metadaten",
	"metadata.createMetadata.type": "Art",
	"metadata.datasetMetadata.addMetaData": "Metadaten hinzufügen",
	"metadata.datasetMetadata.builtIn": "Eingebaut",
	"metadata.datasetMetadata.builtInDescription": "Integrierte Metadaten werden automatisch extrahiert und generiert. Sie müssen vor der Verwendung aktiviert werden und können nicht bearbeitet werden.",
	"metadata.datasetMetadata.deleteContent": "Bist du sicher, dass du die Metadaten \"{{name}}\" löschen möchtest?",
	"metadata.datasetMetadata.deleteTitle": "Bestätigen Sie das Löschen",
	"metadata.datasetMetadata.description": "Sie können alle Metadaten in diesem Wissen hier verwalten. Änderungen werden mit jedem Dokument synchronisiert.",
	"metadata.datasetMetadata.disabled": "Deaktiviert",
	"metadata.datasetMetadata.name": "Name",
	"metadata.datasetMetadata.namePlaceholder": "Metadatenname",
	"metadata.datasetMetadata.rename": "Umbenennen",
	"metadata.datasetMetadata.values": "{{num}} Werte",
	"metadata.documentMetadata.documentInformation": "Dokumentinformationen",
	"metadata.documentMetadata.metadataToolTip": "Metadaten dienen als ein entscheidender Filter, der die Genauigkeit und Relevanz der Informationsbeschaffung verbessert. Sie können die Metadaten für dieses Dokument hier ändern und hinzufügen.",
	"metadata.documentMetadata.startLabeling": "Labeling starten",
	"metadata.documentMetadata.technicalParameters": "Technische Parameter",
	"metadata.metadata": "Metadaten",
	"metadata.selectMetadata.manageAction": "Verwalten",
	"metadata.selectMetadata.newAction": "Neue Metadaten",
	"metadata.selectMetadata.search": "Metadaten durchsuchen",
	mixtureHighQualityAndEconomicTip,
	mixtureInternalAndExternalTip,
	multimodal,
	nTo1RetrievalLegacy,
	nTo1RetrievalLegacyLink,
	nTo1RetrievalLegacyLinkText,
	noExternalKnowledge,
	"parentMode.fullDoc": "Vollständiges Dokument",
	"parentMode.paragraph": "Absatz",
	partialEnabled_one,
	partialEnabled_other,
	preprocessDocument,
	rerankSettings,
	"retrieval.change": "Ändern",
	"retrieval.changeRetrievalMethod": "Abfragemethode ändern",
	"retrieval.full_text_search.description": "Indiziere alle Begriffe im Dokument, sodass Benutzer jeden Begriff suchen und den relevanten Textabschnitt finden können, der diese Begriffe enthält.",
	"retrieval.full_text_search.title": "Volltextsuche",
	"retrieval.hybrid_search.description": "Führe Volltextsuche und Vektorsuchen gleichzeitig aus, ordne neu, um die beste Übereinstimmung für die Abfrage des Benutzers auszuwählen. Konfiguration des Rerank-Modell-APIs ist notwendig.",
	"retrieval.hybrid_search.recommend": "Empfehlen",
	"retrieval.hybrid_search.title": "Hybridsuche",
	"retrieval.invertedIndex.description": "Ein invertierter Index ist eine Struktur, die für eine effiziente Abrufung verwendet wird. Nach Begriffen organisiert, verweist jeder Begriff auf Dokumente oder Webseiten, die ihn enthalten.",
	"retrieval.invertedIndex.title": "Invertierter Index",
	"retrieval.keyword_search.description": "Der invertierte Index ist eine Struktur, die für einen effizienten Abruf verwendet wird. Jeder Begriff ist nach Begriffen geordnet und verweist auf Dokumente oder Webseiten, die ihn enthalten.",
	"retrieval.keyword_search.title": "Invertierter Index",
	"retrieval.semantic_search.description": "Erzeuge Abfrage-Einbettungen und suche nach dem Textstück, das seiner Vektorrepräsentation am ähnlichsten ist.",
	"retrieval.semantic_search.title": "Vektorsuche",
	retrievalSettings,
	retry,
	"selectExternalKnowledgeAPI.placeholder": "Auswählen einer externen Wissens-API",
	"serviceApi.card.apiKey": "API-Schlüssel",
	"serviceApi.card.apiReference": "API Referenz",
	"serviceApi.card.endpoint": "Service-API-Endpunkt",
	"serviceApi.card.title": "Backend-Dienst-API",
	"serviceApi.disabled": "Behindert",
	"serviceApi.enabled": "Im Dienst",
	"serviceApi.title": "Service-API",
	unavailable,
	unknownError,
	updated,
	"weightedScore.customized": "Angepasst",
	"weightedScore.description": "Durch Anpassung der zugewiesenen Gewichte bestimmt diese Rerank-Strategie, ob semantische oder Schlüsselwort-Übereinstimmung priorisiert werden soll.",
	"weightedScore.keyword": "Schlüsselwort",
	"weightedScore.keywordFirst": "Schlüsselwort zuerst",
	"weightedScore.semantic": "Semantisch",
	"weightedScore.semanticFirst": "Semantik zuerst",
	"weightedScore.title": "Gewichtete Bewertung",
	wordCount
};
//#endregion
export { allExternalTip, allKnowledge, allKnowledgeDescription, appCount, connectDataset, createDataset, createDatasetIntro, createExternalAPI, createFromPipeline, createNewExternalAPI, datasetDeleteFailed, datasetDeleted, datasetUsedByApp, datasets, datasetsApi, dataset_default as default, defaultRetrievalTip, deleteDatasetConfirmContent, deleteDatasetConfirmTitle, didYouKnow, docAllEnabled_one, docAllEnabled_other, docsFailedNotice, documentCount, documentsDisabled, editExternalAPIFormTitle, editExternalAPITooltipTitle, embeddingModelNotAvailable, enable, externalAPI, externalAPIPanelDescription, externalAPIPanelDocumentation, externalAPIPanelTitle, externalKnowledgeBase, externalKnowledgeDescription, externalKnowledgeDescriptionPlaceholder, externalKnowledgeId, externalKnowledgeIdPlaceholder, externalKnowledgeName, externalKnowledgeNamePlaceholder, externalTag, inconsistentEmbeddingModelTip, intro1, intro2, intro3, intro4, intro5, intro6, knowledge, learnHowToWriteGoodKnowledgeDescription, localDocs, mixtureHighQualityAndEconomicTip, mixtureInternalAndExternalTip, multimodal, nTo1RetrievalLegacy, nTo1RetrievalLegacyLink, nTo1RetrievalLegacyLinkText, noExternalKnowledge, partialEnabled_one, partialEnabled_other, preprocessDocument, rerankSettings, retrievalSettings, retry, unavailable, unknownError, updated, wordCount };
