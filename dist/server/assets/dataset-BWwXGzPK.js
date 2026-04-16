//#region i18n/sl-SI/dataset.json
var allExternalTip = "Pri uporabi samo zunanjega znanja lahko uporabnik izbere, ali želi omogočiti model za ponovno razvrščanje. Če ni omogočen, bodo pridobljeni deli razvrščeni glede na ocene. Če so strategije pridobivanja različnih baz znanja neenotne, bo to netočno.";
var allKnowledge = "Vse znanje";
var allKnowledgeDescription = "Izberite, če želite prikazati vse znanje v tem delovnem prostoru. Samo lastnik delovnega prostora lahko upravlja vse znanje.";
var appCount = " povezanih aplikacij";
var connectDataset = "Povežite se z zunanjo bazo znanja";
var createDataset = "Ustvari znanje";
var createDatasetIntro = "Uvozite lastne podatke v besedilni obliki ali v realnem času pišite podatke prek Webhook-a za izboljšanje konteksta LLM.";
var createExternalAPI = "Dodaj zunanji API za znanje";
var createFromPipeline = "Ustvarjanje iz cevovoda znanja";
var createNewExternalAPI = "Ustvari nov zunanji API za znanje";
var datasetDeleteFailed = "Brisanje znanja ni uspelo";
var datasetDeleted = "Znanje izbrisano";
var datasetUsedByApp = "Znanje se uporablja v nekaterih aplikacijah. Aplikacije ne bodo več mogle uporabljati tega znanja, vse nastavitve pozivov in dnevniki bodo trajno izbrisani.";
var datasets = "ZNANJE";
var datasetsApi = "API DOSTOP";
var defaultRetrievalTip = "Privzeto se uporablja večpotno pridobivanje. Znanje se pridobiva iz več baz znanja in nato ponovno razvrsti.";
var deleteDatasetConfirmContent = "Brisanje znanja je nepovratno. Uporabniki do vašega znanja ne bodo več imeli dostopa, vse nastavitve pozivov in dnevniki bodo trajno izbrisani.";
var deleteDatasetConfirmTitle = "Izbrisati to znanje?";
var didYouKnow = "Ali ste vedeli?";
var docAllEnabled_one = "{{count}} dokument omogočen";
var docAllEnabled_other = "Vsi dokumenti {{count}} omogočeni";
var docsFailedNotice = "dokumentov ni bilo mogoče indeksirati";
var documentCount = " dokumentov";
var documentsDisabled = "{{num}} dokumenti onemogočeni - neaktivni več kot 30 dni";
var editExternalAPIFormTitle = "Uredi zunanji API za znanje";
var editExternalAPITooltipTitle = "POVEZANO ZNANJE";
var embeddingModelNotAvailable = "Model za zajemanje ni na voljo.";
var enable = "Omogočiti";
var externalAPI = "Zunanji API";
var externalAPIPanelDescription = "Zunanji API za znanje se uporablja za povezovanje z bazo znanja izven Dify in pridobivanje znanja iz te baze.";
var externalAPIPanelDocumentation = "Naučite se, kako ustvariti zunanji API za znanje";
var externalAPIPanelTitle = "Zunanji API za znanje";
var externalKnowledgeBase = "Zunanja baza znanja";
var externalKnowledgeDescription = "Opis znanja";
var externalKnowledgeDescriptionPlaceholder = "Opišite, kaj je v tej bazi znanja (neobvezno)";
var externalKnowledgeId = "ID zunanjega znanja";
var externalKnowledgeIdPlaceholder = "Prosimo, vnesite ID znanja";
var externalKnowledgeName = "Ime zunanjega znanja";
var externalKnowledgeNamePlaceholder = "Prosimo, vnesite ime baze znanja";
var externalTag = "Zunanje";
var inconsistentEmbeddingModelTip = "Model za ponovno razvrščanje je potreben, če so vdelani modeli izbranih baz znanja neenotni.";
var intro1 = "Znanje je mogoče integrirati v aplikacijo Dify ";
var intro2 = "kot kontekst";
var intro3 = ",";
var intro4 = "ali pa ";
var intro5 = "se lahko ustvari";
var intro6 = " kot samostojni vtičnik ChatGPT za objavo";
var knowledge = "Znanje";
var learnHowToWriteGoodKnowledgeDescription = "Naučite se, kako napisati dober opis znanja";
var localDocs = "Lokalni dokumenti";
var mixtureHighQualityAndEconomicTip = "Model za ponovno razvrščanje je potreben za mešanico baz znanja visoke kakovosti in varčnih baz.";
var mixtureInternalAndExternalTip = "Model za ponovno razvrščanje je potreben za mešanico notranjega in zunanjega znanja.";
var multimodal = "Multimodalen";
var nTo1RetrievalLegacy = "N-to-1 pridobivanje bo uradno ukinjeno septembra. Priporočamo uporabo najnovejšega večpotnega pridobivanja za boljše rezultate.";
var nTo1RetrievalLegacyLink = "Izvedite več";
var nTo1RetrievalLegacyLinkText = "N-to-1 pridobivanje bo uradno ukinjeno septembra.";
var noExternalKnowledge = "Zunanjega API-ja za znanje še ni, kliknite tukaj za ustvarjanje";
var partialEnabled_one = "Skupno {{count}} dokumentov, na voljo {{num}}";
var partialEnabled_other = "Skupno {{count}} dokumentov, na voljo {{num}}";
var preprocessDocument = "{{num}} Predobdelava dokumentov";
var rerankSettings = "Nastavitve za ponovno razvrščanje";
var retrievalSettings = "Nastavitve pridobivanja";
var retry = "Poskusi znova";
var unavailable = "Ni na voljo";
var unknownError = "Neznana napaka";
var updated = "Posodobljene";
var wordCount = " tisoč besed";
var dataset_default = {
	allExternalTip,
	allKnowledge,
	allKnowledgeDescription,
	appCount,
	"batchAction.archive": "Arhiv",
	"batchAction.cancel": "Odpovedati",
	"batchAction.delete": "Izbrisati",
	"batchAction.disable": "Onesposobiti",
	"batchAction.download": "Prenesi",
	"batchAction.enable": "Omogočiti",
	"batchAction.reIndex": "Ponovno indeksiraj",
	"batchAction.selected": "Izbrane",
	"chunkingMode.general": "Splošno",
	"chunkingMode.graph": "Graf",
	"chunkingMode.parentChild": "Starš-otrok",
	"chunkingMode.qa": "Vprašanja in odgovori",
	connectDataset,
	"connectDatasetIntro.content.end": ". Nato poiščite ustrezni ID znanja in ga vnesite v obrazec na levi. Če so vse informacije pravilne, boste po kliku na gumb za povezavo samodejno preusmerjeni na testiranje pridobivanja v bazi znanja.",
	"connectDatasetIntro.content.front": "Za povezavo z zunanjo bazo znanja morate najprej ustvariti zunanji API. Prosimo, natančno preberite in se sklicujte na",
	"connectDatasetIntro.content.link": "Naučite se, kako ustvariti zunanji API",
	"connectDatasetIntro.learnMore": "Izvedite več",
	"connectDatasetIntro.title": "Kako se povezati z zunanjo bazo znanja",
	"connectHelper.helper1": "Povežite se z zunanjimi bazami znanja preko API-ja in ID-ja baze znanja. Trenutno je ",
	"connectHelper.helper2": "podprta le funkcionalnost pridobivanja",
	"connectHelper.helper3": ". Močno priporočamo, da ",
	"connectHelper.helper4": "natančno preberete dokumentacijo za pomoč",
	"connectHelper.helper5": " pred uporabo te funkcije.",
	"cornerLabel.pipeline": "Cevovod",
	"cornerLabel.unavailable": "Ni na voljo",
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
	"deleteExternalAPIConfirmWarningContent.content.end": "zunanjim znanjem. Brisanje tega API-ja bo onemogočilo vse povezane baze znanja. Ali ste prepričani, da želite izbrisati ta API?",
	"deleteExternalAPIConfirmWarningContent.content.front": "Ta zunanji API za znanje je povezan z",
	"deleteExternalAPIConfirmWarningContent.noConnectionContent": "Ali ste prepričani, da želite izbrisati ta API?",
	"deleteExternalAPIConfirmWarningContent.title.end": "?",
	"deleteExternalAPIConfirmWarningContent.title.front": "Izbriši",
	didYouKnow,
	docAllEnabled_one,
	docAllEnabled_other,
	docsFailedNotice,
	documentCount,
	documentsDisabled,
	"editExternalAPIConfirmWarningContent.end": "zunanjim znanjem, in ta sprememba bo vplivala na vse njih. Ali ste prepričani, da želite shraniti to spremembo?",
	"editExternalAPIConfirmWarningContent.front": "Ta zunanji API za znanje je povezan z",
	editExternalAPIFormTitle,
	"editExternalAPIFormWarning.end": "zunanjim znanjem",
	"editExternalAPIFormWarning.front": "Ta zunanji API je povezan z",
	editExternalAPITooltipTitle,
	embeddingModelNotAvailable,
	enable,
	externalAPI,
	"externalAPIForm.apiKey": "API ključ",
	"externalAPIForm.cancel": "Prekliči",
	"externalAPIForm.edit": "Uredi",
	"externalAPIForm.encrypted.end": "tehnologije.",
	"externalAPIForm.encrypted.front": "Vaš API žeton bo šifriran in shranjen z uporabo",
	"externalAPIForm.endpoint": "API Končna točka",
	"externalAPIForm.name": "Ime",
	"externalAPIForm.save": "Shrani",
	externalAPIPanelDescription,
	externalAPIPanelDocumentation,
	externalAPIPanelTitle,
	externalKnowledgeBase,
	externalKnowledgeDescription,
	externalKnowledgeDescriptionPlaceholder,
	"externalKnowledgeForm.cancel": "Prekliči",
	"externalKnowledgeForm.connect": "Poveži",
	"externalKnowledgeForm.connectedFailed": "Povezava z zunanjo bazo znanja ni uspela",
	"externalKnowledgeForm.connectedSuccess": "Zunanja baza znanja je bila uspešno povezana",
	externalKnowledgeId,
	externalKnowledgeIdPlaceholder,
	externalKnowledgeName,
	externalKnowledgeNamePlaceholder,
	externalTag,
	"imageUploader.browse": "Brskaj",
	"imageUploader.button": "Povlecite in spustite datoteko ali mapo, ali",
	"imageUploader.fileSizeLimitExceeded": "Velikost datoteke presega omejitev {{size}} MB",
	"imageUploader.tip": "{{supportTypes}} (maks. {{batchCount}}, {{size}} MB vsak)",
	inconsistentEmbeddingModelTip,
	"indexingMethod.full_text_search": "CELOTNO BESEDILO",
	"indexingMethod.hybrid_search": "HIBRIDNO",
	"indexingMethod.invertedIndex": "INVERZNO",
	"indexingMethod.keyword_search": "KLJUČNA BESEDA",
	"indexingMethod.semantic_search": "VEKTORSKO",
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
	"metadata.addMetadata": "Dodaj metapodatke",
	"metadata.batchEditMetadata.applyToAllSelectDocument": "Uporabi za vse izbrane dokumente",
	"metadata.batchEditMetadata.applyToAllSelectDocumentTip": "Samodejno ustvarite vse zgoraj omenjene urejene in nove metapodatke za vsa izbrana dokumenta, sicer bo urejanje metapodatkov veljalo le za dokumente, ki jih imajo.",
	"metadata.batchEditMetadata.editDocumentsNum": "Urejanje {{num}} dokumentov",
	"metadata.batchEditMetadata.editMetadata": "Uredi metapodatke",
	"metadata.batchEditMetadata.multipleValue": "Več vrednosti",
	"metadata.checkName.empty": "Ime metapodatkov ne more biti prazno",
	"metadata.checkName.invalid": "Ime metapodatkov lahko vsebuje samo male črke, številke in podčrtaje ter se mora začeti z malo črko.",
	"metadata.checkName.tooLong": "Ime metapodatkov ne sme presegati {{max}} znakov",
	"metadata.chooseTime": "Izberi čas...",
	"metadata.createMetadata.back": "Nazaj",
	"metadata.createMetadata.name": "Ime",
	"metadata.createMetadata.namePlaceholder": "Dodajte ime metapodatkov",
	"metadata.createMetadata.title": "Nova metapodatki",
	"metadata.createMetadata.type": "Tip",
	"metadata.datasetMetadata.addMetaData": "Dodaj metapodatke",
	"metadata.datasetMetadata.builtIn": "Vgrajeno",
	"metadata.datasetMetadata.builtInDescription": "Vgrajeni metapodatki so samodejno izvlečeni in ustvarjeni. Morajo biti omogočeni pred uporabo in jih ni mogoče urejati.",
	"metadata.datasetMetadata.deleteContent": "Ali ste prepričani, da želite izbrisati metadata \"{{name}}\"",
	"metadata.datasetMetadata.deleteTitle": "Potrdite, da želite izbrisati",
	"metadata.datasetMetadata.description": "Vse metapodatke lahko upravljate tukaj v tej bazi znanja. Spremembe bodo usklajene z vsakim dokumentom.",
	"metadata.datasetMetadata.disabled": "Onemogočeno",
	"metadata.datasetMetadata.name": "Ime",
	"metadata.datasetMetadata.namePlaceholder": "Ime metapodatkov",
	"metadata.datasetMetadata.rename": "Preimenuj",
	"metadata.datasetMetadata.values": "{{num}} Vrednosti",
	"metadata.documentMetadata.documentInformation": "Informacije o dokumentu",
	"metadata.documentMetadata.metadataToolTip": "Metapodatki služijo kot pomemben filter, ki izboljšuje natančnost in pomembnost iskanja informacij. Tukaj lahko spremenite in dodate metapodatke za ta dokument.",
	"metadata.documentMetadata.startLabeling": "Začni označevanje",
	"metadata.documentMetadata.technicalParameters": "Tehnični parametri",
	"metadata.metadata": "Meta podatki",
	"metadata.selectMetadata.manageAction": "Upravljati",
	"metadata.selectMetadata.newAction": "Nova metapodatki",
	"metadata.selectMetadata.search": "Išči metapodatke",
	mixtureHighQualityAndEconomicTip,
	mixtureInternalAndExternalTip,
	multimodal,
	nTo1RetrievalLegacy,
	nTo1RetrievalLegacyLink,
	nTo1RetrievalLegacyLinkText,
	noExternalKnowledge,
	"parentMode.fullDoc": "Celoten dokument",
	"parentMode.paragraph": "Odstavek",
	partialEnabled_one,
	partialEnabled_other,
	preprocessDocument,
	rerankSettings,
	"retrieval.change": "Spremeni",
	"retrieval.changeRetrievalMethod": "Spremeni metodo pridobivanja",
	"retrieval.full_text_search.description": "Indeksirajte vse izraze v dokumentu, kar uporabnikom omogoča iskanje katerega koli izraza in pridobitev ustreznega odstavka besedila, ki ga vsebuje.",
	"retrieval.full_text_search.title": "Iskanje celotnega besedila",
	"retrieval.hybrid_search.description": "Istočasno izvede iskanje celotnega besedila in vektorsko iskanje ter ponovno razvrsti zadetke, da izbere najboljše ujemanje za uporabnikovo poizvedbo. Uporabniki lahko določijo uteži ali konfigurirajo model za ponovno razvrščanje.",
	"retrieval.hybrid_search.recommend": "Priporočamo",
	"retrieval.hybrid_search.title": "Hibridno iskanje",
	"retrieval.invertedIndex.description": "Inverzni indeks je struktura, uporabljena za učinkovito iskanje. Organiziran po pojmih, vsak pojem kaže na dokumente ali spletne strani, ki ga vsebujejo.",
	"retrieval.invertedIndex.title": "Inverzni indeks",
	"retrieval.keyword_search.description": "Obrnjeni indeks je struktura, ki se uporablja za učinkovito iskanje. Vsak izraz, organiziran po izrazih, kaže na dokumente ali spletne strani, ki ga vsebujejo.",
	"retrieval.keyword_search.title": "Obrnjeni indeks",
	"retrieval.semantic_search.description": "Ustvari vdelke poizvedbe in poišči odstavke besedila, ki so najbolj podobni njegovi vektorski predstavitvi.",
	"retrieval.semantic_search.title": "Vektorsko iskanje",
	retrievalSettings,
	retry,
	"selectExternalKnowledgeAPI.placeholder": "Izberite zunanji API za znanje",
	"serviceApi.card.apiKey": "API ključ",
	"serviceApi.card.apiReference": "API Referenca",
	"serviceApi.card.endpoint": "Vhodna točka API storitve",
	"serviceApi.card.title": "API storitev za zaledje",
	"serviceApi.disabled": "Onemogočeno",
	"serviceApi.enabled": "V storitvi",
	"serviceApi.title": "Storitveni API",
	unavailable,
	unknownError,
	updated,
	"weightedScore.customized": "Prilagojeno",
	"weightedScore.description": "Z nastavljanjem dodeljenih uteži ta strategija za ponovno razvrščanje določa, ali naj se daje prednost semantičnemu ali ključnemu ujemanju.",
	"weightedScore.keyword": "Ključna beseda",
	"weightedScore.keywordFirst": "Ključne besede najprej",
	"weightedScore.semantic": "Semantično",
	"weightedScore.semanticFirst": "Semantično najprej",
	"weightedScore.title": "Utežena ocena",
	wordCount
};
//#endregion
export { allExternalTip, allKnowledge, allKnowledgeDescription, appCount, connectDataset, createDataset, createDatasetIntro, createExternalAPI, createFromPipeline, createNewExternalAPI, datasetDeleteFailed, datasetDeleted, datasetUsedByApp, datasets, datasetsApi, dataset_default as default, defaultRetrievalTip, deleteDatasetConfirmContent, deleteDatasetConfirmTitle, didYouKnow, docAllEnabled_one, docAllEnabled_other, docsFailedNotice, documentCount, documentsDisabled, editExternalAPIFormTitle, editExternalAPITooltipTitle, embeddingModelNotAvailable, enable, externalAPI, externalAPIPanelDescription, externalAPIPanelDocumentation, externalAPIPanelTitle, externalKnowledgeBase, externalKnowledgeDescription, externalKnowledgeDescriptionPlaceholder, externalKnowledgeId, externalKnowledgeIdPlaceholder, externalKnowledgeName, externalKnowledgeNamePlaceholder, externalTag, inconsistentEmbeddingModelTip, intro1, intro2, intro3, intro4, intro5, intro6, knowledge, learnHowToWriteGoodKnowledgeDescription, localDocs, mixtureHighQualityAndEconomicTip, mixtureInternalAndExternalTip, multimodal, nTo1RetrievalLegacy, nTo1RetrievalLegacyLink, nTo1RetrievalLegacyLinkText, noExternalKnowledge, partialEnabled_one, partialEnabled_other, preprocessDocument, rerankSettings, retrievalSettings, retry, unavailable, unknownError, updated, wordCount };
