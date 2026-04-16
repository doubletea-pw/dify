//#region i18n/ro-RO/dataset.json
var allExternalTip = "Când utilizează numai cunoștințe externe, utilizatorul poate alege dacă să activeze modelul Rerank. Dacă nu este activată, bucățile preluate vor fi sortate pe baza scorurilor. Când strategiile de recuperare a diferitelor baze de cunoștințe sunt inconsistente, acestea vor fi inexacte.";
var allKnowledge = "Toate cunoștințele";
var allKnowledgeDescription = "Selectați pentru a afișa toate cunoștințele din acest spațiu de lucru. Doar proprietarul spațiului de lucru poate gestiona toate cunoștințele.";
var appCount = " aplicații conectate";
var connectDataset = "Conectați-vă la o bază de cunoștințe externă";
var createDataset = "Creează Cunoștințe";
var createDatasetIntro = "Importați-vă propriile date text sau scrieți date în timp real prin Webhook pentru îmbunătățirea contextului LLM.";
var createExternalAPI = "Adăugarea unui API de cunoștințe extern";
var createFromPipeline = "Crearea din Knowledge Pipeline";
var createNewExternalAPI = "Creați un nou API de cunoștințe externe";
var datasetDeleteFailed = "Eșec la ștergerea Cunoștințelor";
var datasetDeleted = "Cunoștințe șterse";
var datasetUsedByApp = "Cunoștințele sunt utilizate de unele aplicații. Aplicațiile nu vor mai putea utiliza aceste Cunoștințe, iar toate configurațiile de prompt și jurnalele vor fi șterse definitiv.";
var datasets = "CUNOȘTINȚE";
var datasetsApi = "ACCES API";
var defaultRetrievalTip = "Recuperarea pe mai multe căi este utilizată în mod implicit. Cunoștințele sunt preluate din mai multe baze de cunoștințe și apoi reclasificate.";
var deleteDatasetConfirmContent = "Ștergerea Cunoștințelor este ireversibilă. Utilizatorii nu vor mai putea accesa Cunoștințele, iar toate configurațiile și jurnalele prompt vor fi șterse permanent.";
var deleteDatasetConfirmTitle = "Ștergeți această Cunoștință?";
var didYouKnow = "Știați că?";
var docAllEnabled_one = "Document {{count}} activat";
var docAllEnabled_other = "Toate documentele {{count}} activate";
var docsFailedNotice = "documentele nu au putut fi indexate";
var documentCount = " documente";
var documentsDisabled = "{{num}} documente dezactivate - inactive de peste 30 de zile";
var editExternalAPIFormTitle = "Editarea API-ului de cunoștințe externe";
var editExternalAPITooltipTitle = "CUNOȘTINȚE LEGATE";
var embeddingModelNotAvailable = "Modelul de încorporare nu este disponibil.";
var enable = "Activa";
var externalAPI = "API extern";
var externalAPIPanelDescription = "API-ul de cunoștințe externe este utilizat pentru a se conecta la o bază de cunoștințe din afara Dify și pentru a prelua cunoștințe din acea bază de cunoștințe.";
var externalAPIPanelDocumentation = "Aflați cum să creați un API de cunoștințe externe";
var externalAPIPanelTitle = "API de cunoștințe externe";
var externalKnowledgeBase = "Baza de cunoștințe externă";
var externalKnowledgeDescription = "Descrierea cunoștințelor";
var externalKnowledgeDescriptionPlaceholder = "Descrieți ce este în această bază de cunoștințe (opțional)";
var externalKnowledgeId = "ID de cunoștințe extern";
var externalKnowledgeIdPlaceholder = "Vă rugăm să introduceți ID-ul de cunoștințe";
var externalKnowledgeName = "Nume cunoștințe externe";
var externalKnowledgeNamePlaceholder = "Vă rugăm să introduceți numele bazei de cunoștințe";
var externalTag = "Extern";
var inconsistentEmbeddingModelTip = "Modelul de reclasificare este necesar dacă modelele de încorporare ale bazelor de cunoștințe selectate sunt inconsistente.";
var intro1 = "Cunoștințele pot fi integrate în aplicația Dify ";
var intro2 = "ca un context";
var intro3 = ",";
var intro4 = "sau ele ";
var intro5 = "pot fi create";
var intro6 = " ca un plug-in index ChatGPT standalone pentru publicare";
var knowledge = "Cunoștințe";
var learnHowToWriteGoodKnowledgeDescription = "Aflați cum să scrieți o descriere bună a cunoștințelor";
var localDocs = "Documente locale";
var mixtureHighQualityAndEconomicTip = "Modelul de reclasificare este necesar pentru amestecul de baze de cunoștințe de înaltă calitate și economice.";
var mixtureInternalAndExternalTip = "Modelul Rerank este necesar pentru amestecul de cunoștințe interne și externe.";
var multimodal = "Multimodal";
var nTo1RetrievalLegacy = "Recuperarea N-la-1 va fi oficial depreciată din septembrie. Se recomandă utilizarea celei mai recente recuperări cu căi multiple pentru a obține rezultate mai bune.";
var nTo1RetrievalLegacyLink = "Află mai multe";
var nTo1RetrievalLegacyLinkText = "Recuperarea N-la-1 va fi oficial depreciată în septembrie.";
var noExternalKnowledge = "Nu există încă un API de cunoștințe externe, faceți clic aici pentru a crea";
var partialEnabled_one = "Total de {{count}} documente, {{num}} disponibile";
var partialEnabled_other = "Total de {{count}} documente, {{num}} disponibile";
var preprocessDocument = "{{num}} Procesarea prealabilă a documentelor";
var rerankSettings = "Setări de reclasificare";
var retrievalSettings = "Setări de recuperare";
var retry = "Reîncercați";
var unavailable = "Indisponibil";
var unknownError = "Eroare necunoscută";
var updated = "Actualizat";
var wordCount = " mii de cuvinte";
var dataset_default = {
	allExternalTip,
	allKnowledge,
	allKnowledgeDescription,
	appCount,
	"batchAction.archive": "Arhivă",
	"batchAction.cancel": "Anula",
	"batchAction.delete": "Șterge",
	"batchAction.disable": "Dezactiva",
	"batchAction.download": "Descarcă",
	"batchAction.enable": "Activa",
	"batchAction.reIndex": "Reindexare",
	"batchAction.selected": "Selectat",
	"chunkingMode.general": "General",
	"chunkingMode.graph": "Grafic",
	"chunkingMode.parentChild": "Părinte-copil",
	"chunkingMode.qa": "Întrebări și răspunsuri",
	connectDataset,
	"connectDatasetIntro.content.end": ". Apoi găsiți ID-ul de cunoștințe corespunzător și completați-l în formularul din stânga. Dacă toate informațiile sunt corecte, va sări automat la testul de recuperare din baza de cunoștințe după ce faceți clic pe butonul de conectare.",
	"connectDatasetIntro.content.front": "Pentru a vă conecta la o bază de cunoștințe externă, trebuie mai întâi să creați un API extern. Vă rugăm să citiți cu atenție și să consultați",
	"connectDatasetIntro.content.link": "Aflați cum să creați un API extern",
	"connectDatasetIntro.learnMore": "Află mai multe",
	"connectDatasetIntro.title": "Cum să vă conectați la o bază de cunoștințe externă",
	"connectHelper.helper1": "Conectați-vă la baze de cunoștințe externe prin API și ID-ul bazei de cunoștințe. În prezent,",
	"connectHelper.helper2": "este acceptată doar funcționalitatea de recuperare",
	"connectHelper.helper3": ". Vă recomandăm cu tărie să",
	"connectHelper.helper4": "Citiți documentația de ajutor",
	"connectHelper.helper5": "Cu atenție înainte de a utiliza această caracteristică.",
	"cornerLabel.pipeline": "Conductă",
	"cornerLabel.unavailable": "Indisponibil",
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
	"deleteExternalAPIConfirmWarningContent.content.end": "cunoștințe externe. Ștergerea acestui API le va invalida pe toate. Sunteți sigur că doriți să ștergeți acest API?",
	"deleteExternalAPIConfirmWarningContent.content.front": "Acest API de cunoștințe externe este legat de",
	"deleteExternalAPIConfirmWarningContent.noConnectionContent": "Sunteți sigur că ștergeți acest API?",
	"deleteExternalAPIConfirmWarningContent.title.end": "?",
	"deleteExternalAPIConfirmWarningContent.title.front": "Șterge",
	didYouKnow,
	docAllEnabled_one,
	docAllEnabled_other,
	docsFailedNotice,
	documentCount,
	documentsDisabled,
	"editExternalAPIConfirmWarningContent.end": "cunoștințe externe, iar această modificare va fi aplicată tuturor. Sunteți sigur că doriți să salvați această modificare?",
	"editExternalAPIConfirmWarningContent.front": "Acest API de cunoștințe externe este legat de",
	editExternalAPIFormTitle,
	"editExternalAPIFormWarning.end": "cunoștințe externe",
	"editExternalAPIFormWarning.front": "Acest API extern este legat de",
	editExternalAPITooltipTitle,
	embeddingModelNotAvailable,
	enable,
	externalAPI,
	"externalAPIForm.apiKey": "Cheie API",
	"externalAPIForm.cancel": "Anula",
	"externalAPIForm.edit": "Editare",
	"externalAPIForm.encrypted.end": "Tehnologie.",
	"externalAPIForm.encrypted.front": "Tokenul API va fi criptat și stocat folosind",
	"externalAPIForm.endpoint": "Punct final API",
	"externalAPIForm.name": "Nume",
	"externalAPIForm.save": "Salva",
	externalAPIPanelDescription,
	externalAPIPanelDocumentation,
	externalAPIPanelTitle,
	externalKnowledgeBase,
	externalKnowledgeDescription,
	externalKnowledgeDescriptionPlaceholder,
	"externalKnowledgeForm.cancel": "Anula",
	"externalKnowledgeForm.connect": "Conecta",
	"externalKnowledgeForm.connectedFailed": "Conectarea la baza de cunoștințe externă a eșuat",
	"externalKnowledgeForm.connectedSuccess": "Baza de cunoștințe externă a fost conectată cu succes",
	externalKnowledgeId,
	externalKnowledgeIdPlaceholder,
	externalKnowledgeName,
	externalKnowledgeNamePlaceholder,
	externalTag,
	"imageUploader.browse": "Răsfoiește",
	"imageUploader.button": "Trage și plasează fișierul sau folderul, sau",
	"imageUploader.fileSizeLimitExceeded": "Dimensiunea fișierului depășește limita de {{size}}MB",
	"imageUploader.tip": "{{supportTypes}} (Maxim {{batchCount}}, {{size}}MB fiecare)",
	inconsistentEmbeddingModelTip,
	"indexingMethod.full_text_search": "TEXT COMPLET",
	"indexingMethod.hybrid_search": "HIBRID",
	"indexingMethod.invertedIndex": "INVERSAT",
	"indexingMethod.keyword_search": "CUVÂNT CHEIE",
	"indexingMethod.semantic_search": "VECTOR",
	"indexingTechnique.economy": "ECO",
	"indexingTechnique.high_quality": "IC",
	intro1,
	intro2,
	intro3: ",",
	intro4,
	intro5,
	intro6,
	knowledge,
	learnHowToWriteGoodKnowledgeDescription,
	localDocs,
	"metadata.addMetadata": "Adăugați Metadate",
	"metadata.batchEditMetadata.applyToAllSelectDocument": "Aplică la toate documentele selectate",
	"metadata.batchEditMetadata.applyToAllSelectDocumentTip": "Creează automat toate metadatele editate și noi de mai sus pentru toate documentele selectate, altfel editarea metadatelor se va aplica doar documentelor care au aceste metadate.",
	"metadata.batchEditMetadata.editDocumentsNum": "Editarea {{num}} documente",
	"metadata.batchEditMetadata.editMetadata": "Editează metadatele",
	"metadata.batchEditMetadata.multipleValue": "Valoare multiplă",
	"metadata.checkName.empty": "Numele metadatelor nu poate fi gol",
	"metadata.checkName.invalid": "Numele metadatelor poate conține doar litere mici, cifre și underscore și trebuie să înceapă cu o literă mică.",
	"metadata.checkName.tooLong": "Numele metadatelor nu poate depăși {{max}} caractere",
	"metadata.chooseTime": "Alege o oră...",
	"metadata.createMetadata.back": "Înapoi",
	"metadata.createMetadata.name": "Nume",
	"metadata.createMetadata.namePlaceholder": "Adăugați numele de metadate",
	"metadata.createMetadata.title": "Metadate noi",
	"metadata.createMetadata.type": "Tip",
	"metadata.datasetMetadata.addMetaData": "Adăugați Metadate",
	"metadata.datasetMetadata.builtIn": "Încărcat în",
	"metadata.datasetMetadata.builtInDescription": "Metadatele încorporate sunt extrase și generate automat. Acestea trebuie să fie activate înainte de utilizare și nu pot fi editate.",
	"metadata.datasetMetadata.deleteContent": "Ești sigur că vrei să ștergi metadata „{{name}}”?}",
	"metadata.datasetMetadata.deleteTitle": "Confirmă ștergerea",
	"metadata.datasetMetadata.description": "Puteți gestiona toate metadatele în această cunoaștere aici. Modificările vor fi sincronizate cu fiecare document.",
	"metadata.datasetMetadata.disabled": "Dezactivat",
	"metadata.datasetMetadata.name": "Nume",
	"metadata.datasetMetadata.namePlaceholder": "Numele metadata",
	"metadata.datasetMetadata.rename": "Renumire",
	"metadata.datasetMetadata.values": "{{num}} Valori",
	"metadata.documentMetadata.documentInformation": "Informații despre document",
	"metadata.documentMetadata.metadataToolTip": "Metadata serve ca un filtru critic care îmbunătățește acuratețea și relevanța recuperării informațiilor. Puteți modifica și adăuga metadata pentru acest document aici.",
	"metadata.documentMetadata.startLabeling": "Începe etichetarea",
	"metadata.documentMetadata.technicalParameters": "Parametrii tehnici",
	"metadata.metadata": "Metadate",
	"metadata.selectMetadata.manageAction": "Gestionează",
	"metadata.selectMetadata.newAction": "Metadate noi",
	"metadata.selectMetadata.search": "Căutare metadate",
	mixtureHighQualityAndEconomicTip,
	mixtureInternalAndExternalTip,
	multimodal,
	nTo1RetrievalLegacy,
	nTo1RetrievalLegacyLink,
	nTo1RetrievalLegacyLinkText,
	noExternalKnowledge,
	"parentMode.fullDoc": "Documentar complet",
	"parentMode.paragraph": "Paragraf",
	partialEnabled_one,
	partialEnabled_other,
	preprocessDocument,
	rerankSettings,
	"retrieval.change": "Schimbă",
	"retrieval.changeRetrievalMethod": "Schimbă metoda de recuperare",
	"retrieval.full_text_search.description": "Indexați toți termenii din document, permițând utilizatorilor să caute orice termen și să recupereze bucățile de text relevante care conțin acei termeni.",
	"retrieval.full_text_search.title": "Căutare Full-Text",
	"retrieval.hybrid_search.description": "Executați căutări full-text și căutări vectoriale în același timp, reclasificați pentru a selecta cea mai bună potrivire pentru interogarea utilizatorului. Configurarea API-ului modelului Rerank este necesară.",
	"retrieval.hybrid_search.recommend": "Recomandat",
	"retrieval.hybrid_search.title": "Căutare Hibridă",
	"retrieval.invertedIndex.description": "Indexul inversat este o structură folosită pentru recuperarea eficientă a informațiilor. Organizată după termeni, fiecare termen indică documentele sau paginile web care îl conțin.",
	"retrieval.invertedIndex.title": "Indice inversat",
	"retrieval.keyword_search.description": "Indexul inversat este o structură utilizată pentru o recuperare eficientă. Organizat pe termeni, fiecare termen indică documente sau pagini web care îl conțin.",
	"retrieval.keyword_search.title": "Indice inversat",
	"retrieval.semantic_search.description": "Generați încorporările interogărilor și căutați bucata de text cea mai similară cu reprezentarea sa vectorială.",
	"retrieval.semantic_search.title": "Căutare Vector",
	retrievalSettings,
	retry,
	"selectExternalKnowledgeAPI.placeholder": "Alegeți un API de cunoștințe extern",
	"serviceApi.card.apiKey": "Cheie API",
	"serviceApi.card.apiReference": "Referință API",
	"serviceApi.card.endpoint": "Punct final API de servicii",
	"serviceApi.card.title": "API pentru serviciul backend",
	"serviceApi.disabled": "Dezactivat",
	"serviceApi.enabled": "În serviciu",
	"serviceApi.title": "API de servicii",
	unavailable,
	unknownError,
	updated,
	"weightedScore.customized": "Personalizat",
	"weightedScore.description": "Prin ajustarea ponderilor atribuite, această strategie de reclasificare determină dacă să prioritizeze potrivirea semantică sau pe cea a cuvintelor cheie.",
	"weightedScore.keyword": "Cuvânt cheie",
	"weightedScore.keywordFirst": "Cuvânt cheie primul",
	"weightedScore.semantic": "Semantic",
	"weightedScore.semanticFirst": "Semantic primul",
	"weightedScore.title": "Scor ponderat",
	wordCount
};
//#endregion
export { allExternalTip, allKnowledge, allKnowledgeDescription, appCount, connectDataset, createDataset, createDatasetIntro, createExternalAPI, createFromPipeline, createNewExternalAPI, datasetDeleteFailed, datasetDeleted, datasetUsedByApp, datasets, datasetsApi, dataset_default as default, defaultRetrievalTip, deleteDatasetConfirmContent, deleteDatasetConfirmTitle, didYouKnow, docAllEnabled_one, docAllEnabled_other, docsFailedNotice, documentCount, documentsDisabled, editExternalAPIFormTitle, editExternalAPITooltipTitle, embeddingModelNotAvailable, enable, externalAPI, externalAPIPanelDescription, externalAPIPanelDocumentation, externalAPIPanelTitle, externalKnowledgeBase, externalKnowledgeDescription, externalKnowledgeDescriptionPlaceholder, externalKnowledgeId, externalKnowledgeIdPlaceholder, externalKnowledgeName, externalKnowledgeNamePlaceholder, externalTag, inconsistentEmbeddingModelTip, intro1, intro2, intro3, intro4, intro5, intro6, knowledge, learnHowToWriteGoodKnowledgeDescription, localDocs, mixtureHighQualityAndEconomicTip, mixtureInternalAndExternalTip, multimodal, nTo1RetrievalLegacy, nTo1RetrievalLegacyLink, nTo1RetrievalLegacyLinkText, noExternalKnowledge, partialEnabled_one, partialEnabled_other, preprocessDocument, rerankSettings, retrievalSettings, retry, unavailable, unknownError, updated, wordCount };
