//#region i18n/fr-FR/dataset.json
var allExternalTip = "Lorsqu'il utilise uniquement des connaissances externes, l'utilisateur peut choisir d'activer ou non le modèle Rerank. S'il n'est pas activé, les morceaux récupérés seront triés en fonction des scores. Lorsque les stratégies de récupération des différentes bases de connaissances sont incohérentes, elles seront inexactes.";
var allKnowledge = "Toutes les connaissances";
var allKnowledgeDescription = "Sélectionnez cette option pour afficher toutes les connaissances dans cet espace de travail. Seul le propriétaire de l’espace de travail peut gérer toutes les connaissances.";
var appCount = " applications liées";
var connectDataset = "Se connecter à une base de connaissances externe";
var createDataset = "Créer des Connaissances";
var createDatasetIntro = "Importez vos propres données textuelles ou écrivez des données en temps réel via Webhook pour l'amélioration du contexte LLM.";
var createExternalAPI = "Ajouter une API de connaissances externe";
var createFromPipeline = "Créer à partir du pipeline de connaissances";
var createNewExternalAPI = "Créer une API de connaissances externe";
var datasetDeleteFailed = "Échec de la suppression de la Connaissance";
var datasetDeleted = "Connaissance supprimée";
var datasetUsedByApp = "La connaissance est utilisée par certaines applications. Les applications ne pourront plus utiliser cette Connaissance, et toutes les configurations de prompts et les journaux seront définitivement supprimés.";
var datasets = "CONNAISSANCE";
var datasetsApi = "API";
var defaultRetrievalTip = "La récupération à chemins multiples est utilisée par défaut. Les connaissances sont extraites de plusieurs bases de connaissances, puis reclassées.";
var deleteDatasetConfirmContent = "La suppression de la Connaissance est irréversible. Les utilisateurs ne pourront plus accéder à votre Savoir, et toutes les configurations de prompt et les journaux seront supprimés de façon permanente.";
var deleteDatasetConfirmTitle = "Supprimer cette Connaissance ?";
var didYouKnow = "Saviez-vous ?";
var docAllEnabled_one = "Document {{count}} activé";
var docAllEnabled_other = "Tous les documents {{count}} activés";
var docsFailedNotice = "Les documents n'ont pas pu être indexés";
var documentCount = " documents";
var documentsDisabled = "{{num}} documents désactivés - inactifs depuis plus de 30 jours";
var editExternalAPIFormTitle = "Modifier l’API de connaissances externes";
var editExternalAPITooltipTitle = "CONNAISSANCES ASSOCIÉES";
var embeddingModelNotAvailable = "Le modèle d'embedding n'est pas disponible.";
var enable = "Activer";
var externalAPI = "API externe";
var externalAPIPanelDescription = "L’API de connaissances externe est utilisée pour se connecter à une base de connaissances en dehors de Dify et récupérer des connaissances de cette base de connaissances.";
var externalAPIPanelDocumentation = "Découvrez comment créer une API de connaissances externe";
var externalAPIPanelTitle = "API de connaissances externes";
var externalKnowledgeBase = "Base de connaissances externe";
var externalKnowledgeDescription = "Description des connaissances";
var externalKnowledgeDescriptionPlaceholder = "Décrivez le contenu de cette base de connaissances (facultatif)";
var externalKnowledgeId = "Identification des connaissances externes";
var externalKnowledgeIdPlaceholder = "Entrez l’ID de connaissances";
var externalKnowledgeName = "Nom de la connaissance externe";
var externalKnowledgeNamePlaceholder = "Entrez le nom de la base de connaissances";
var externalTag = "Externe";
var inconsistentEmbeddingModelTip = "Le modèle de reclassement est nécessaire si les modèles d'incorporation des bases de connaissances sélectionnées sont incohérents.";
var intro1 = "La Connaissance peut être intégrée dans l'application Dify";
var intro2 = "comme un contexte";
var intro3 = ",";
var intro4 = "ou ça ";
var intro5 = "peut être créé";
var intro6 = "comme un plug-in d'index ChatGPT autonome à publier";
var knowledge = "Connaissance";
var learnHowToWriteGoodKnowledgeDescription = "Apprenez à rédiger une bonne description des connaissances";
var localDocs = "Docs locaux";
var mixtureHighQualityAndEconomicTip = "Le modèle de reclassement est nécessaire pour le mélange de bases de connaissances de haute qualité et économiques.";
var mixtureInternalAndExternalTip = "Le modèle Rerank est nécessaire pour mélanger les connaissances internes et externes.";
var multimodal = "Multimodal";
var nTo1RetrievalLegacy = "La récupération N-à-1 sera officiellement obsolète à partir de septembre. Il est recommandé d'utiliser la dernière récupération multi-chemins pour obtenir de meilleurs résultats.";
var nTo1RetrievalLegacyLink = "En savoir plus";
var nTo1RetrievalLegacyLinkText = "La récupération N-à-1 sera officiellement obsolète en septembre.";
var noExternalKnowledge = "Il n’y a pas encore d’API de connaissances externes, cliquez ici pour créer";
var partialEnabled_one = "Total de {{count}} documents, {{num}} disponibles";
var partialEnabled_other = "Total de {{count}} documents, {{num}} disponibles";
var preprocessDocument = "{{num}} Prétraiter les documents";
var rerankSettings = "Paramètres de reclassement";
var retrievalSettings = "Paramètres de récupération";
var retry = "Réessayer";
var unavailable = "Indisponible";
var unknownError = "Erreur inconnue";
var updated = "Actualisé";
var wordCount = " k mots";
var dataset_default = {
	allExternalTip,
	allKnowledge,
	allKnowledgeDescription,
	appCount,
	"batchAction.archive": "Archiver",
	"batchAction.cancel": "Annuler",
	"batchAction.delete": "Supprimer",
	"batchAction.disable": "Désactiver",
	"batchAction.download": "Télécharger",
	"batchAction.enable": "Activer",
	"batchAction.reIndex": "Réindexer",
	"batchAction.selected": "Sélectionné",
	"chunkingMode.general": "Généralités",
	"chunkingMode.graph": "Graphique",
	"chunkingMode.parentChild": "Parent-enfant",
	"chunkingMode.qa": "Q&R",
	connectDataset,
	"connectDatasetIntro.content.end": ". Trouvez ensuite l’ID de connaissances correspondant et remplissez-le dans le formulaire sur la gauche. Si toutes les informations sont correctes, il passera automatiquement au test de récupération dans la base de connaissances après avoir cliqué sur le bouton de connexion.",
	"connectDatasetIntro.content.front": "Pour vous connecter à une base de connaissances externe, vous devez d’abord créer une API externe. Veuillez lire attentivement et vous référer à",
	"connectDatasetIntro.content.link": "Découvrez comment créer une API externe",
	"connectDatasetIntro.learnMore": "Pour en savoir plus",
	"connectDatasetIntro.title": "Comment se connecter à une base de connaissances externe",
	"connectHelper.helper1": "Connectez-vous à des bases de connaissances externes via l’API et l’ID de base de connaissances.",
	"connectHelper.helper2": "Seule la fonctionnalité de récupération est prise en charge",
	"connectHelper.helper3": ". Nous vous recommandons vivement de",
	"connectHelper.helper4": "Lire la documentation d’aide",
	"connectHelper.helper5": "soigneusement avant d’utiliser cette fonctionnalité.",
	"cornerLabel.pipeline": "Pipeline",
	"cornerLabel.unavailable": "Indisponible",
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
	"deleteExternalAPIConfirmWarningContent.content.end": "connaissances externes. La suppression de cette API les invalidera toutes. Êtes-vous sûr de vouloir supprimer cette API ?",
	"deleteExternalAPIConfirmWarningContent.content.front": "Cette API de connaissances externes est liée à",
	"deleteExternalAPIConfirmWarningContent.noConnectionContent": "Êtes-vous sûr de supprimer cette API ?",
	"deleteExternalAPIConfirmWarningContent.title.end": "?",
	"deleteExternalAPIConfirmWarningContent.title.front": "Supprimer",
	didYouKnow,
	docAllEnabled_one,
	docAllEnabled_other,
	docsFailedNotice,
	documentCount,
	documentsDisabled,
	"editExternalAPIConfirmWarningContent.end": "connaissances externes, et cette modification sera appliquée à tous. Êtes-vous sûr de vouloir enregistrer cette modification ?",
	"editExternalAPIConfirmWarningContent.front": "Cette API de connaissances externes est liée à",
	editExternalAPIFormTitle,
	"editExternalAPIFormWarning.end": "Connaissances externes",
	"editExternalAPIFormWarning.front": "Cette API externe est liée à",
	editExternalAPITooltipTitle,
	embeddingModelNotAvailable,
	enable,
	externalAPI,
	"externalAPIForm.apiKey": "Clé API",
	"externalAPIForm.cancel": "Annuler",
	"externalAPIForm.edit": "Éditer",
	"externalAPIForm.encrypted.end": "Technologie.",
	"externalAPIForm.encrypted.front": "Votre jeton API sera chiffré et stocké à l’aide de",
	"externalAPIForm.endpoint": "Point de terminaison de l’API",
	"externalAPIForm.name": "Nom",
	"externalAPIForm.save": "Sauvegarder",
	externalAPIPanelDescription,
	externalAPIPanelDocumentation,
	externalAPIPanelTitle,
	externalKnowledgeBase,
	externalKnowledgeDescription,
	externalKnowledgeDescriptionPlaceholder,
	"externalKnowledgeForm.cancel": "Annuler",
	"externalKnowledgeForm.connect": "Relier",
	"externalKnowledgeForm.connectedFailed": "Échec de la connexion à la base de connaissances externe",
	"externalKnowledgeForm.connectedSuccess": "Base de connaissances externe connectée avec succès",
	externalKnowledgeId,
	externalKnowledgeIdPlaceholder,
	externalKnowledgeName,
	externalKnowledgeNamePlaceholder,
	externalTag,
	"imageUploader.browse": "Parcourir",
	"imageUploader.button": "Faites glisser et déposez un fichier ou un dossier, ou",
	"imageUploader.fileSizeLimitExceeded": "La taille du fichier dépasse la limite de {{size}} Mo",
	"imageUploader.tip": "{{supportTypes}} (Max {{batchCount}}, {{size}} Mo chacun)",
	inconsistentEmbeddingModelTip,
	"indexingMethod.full_text_search": "TEXTE INTÉGRAL",
	"indexingMethod.hybrid_search": "HYBRIDE",
	"indexingMethod.invertedIndex": "INVERSÉ",
	"indexingMethod.keyword_search": "MOT-CLÉ",
	"indexingMethod.semantic_search": "VECTEUR",
	"indexingTechnique.economy": "ÉCO",
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
	"metadata.addMetadata": "Ajouter des métadonnées",
	"metadata.batchEditMetadata.applyToAllSelectDocument": "Appliquer à tous les documents sélectionnés",
	"metadata.batchEditMetadata.applyToAllSelectDocumentTip": "Créez automatiquement toutes les métadonnées modifiées et nouvelles pour tous les documents sélectionnés, sinon l'édition des métadonnées ne s'appliquera qu'aux documents qui en ont.",
	"metadata.batchEditMetadata.editDocumentsNum": "Édition de {{num}} documents",
	"metadata.batchEditMetadata.editMetadata": "Modifier les métadonnées",
	"metadata.batchEditMetadata.multipleValue": "Valeur multiple",
	"metadata.checkName.empty": "Le nom des métadonnées ne peut pas être vide",
	"metadata.checkName.invalid": "Le nom des métadonnées ne peut contenir que des lettres minuscules, des chiffres et des tirets bas et doit commencer par une lettre minuscule.",
	"metadata.checkName.tooLong": "Le nom des métadonnées ne peut pas dépasser {{max}} caractères",
	"metadata.chooseTime": "Choisissez un moment...",
	"metadata.createMetadata.back": "Retour",
	"metadata.createMetadata.name": "Nom",
	"metadata.createMetadata.namePlaceholder": "Ajouter le nom des métadonnées",
	"metadata.createMetadata.title": "Nouveaux Métadonnées",
	"metadata.createMetadata.type": "Type",
	"metadata.datasetMetadata.addMetaData": "Ajouter des métadonnées",
	"metadata.datasetMetadata.builtIn": "Intégré",
	"metadata.datasetMetadata.builtInDescription": "Les métadonnées intégrées sont automatiquement extraites et générées. Elles doivent être activées avant utilisation et ne peuvent pas être modifiées.",
	"metadata.datasetMetadata.deleteContent": "Êtes-vous sûr de vouloir supprimer les métadonnées \"{{name}}\" ?",
	"metadata.datasetMetadata.deleteTitle": "Confirmer la suppression",
	"metadata.datasetMetadata.description": "Vous pouvez gérer toutes les métadonnées dans cette connaissance ici. Les modifications seront synchronisées avec chaque document.",
	"metadata.datasetMetadata.disabled": "Désactivé",
	"metadata.datasetMetadata.name": "Nom",
	"metadata.datasetMetadata.namePlaceholder": "Nom de métadonnées",
	"metadata.datasetMetadata.rename": "Renommer",
	"metadata.datasetMetadata.values": "{{num}} Valeurs",
	"metadata.documentMetadata.documentInformation": "Informations du document",
	"metadata.documentMetadata.metadataToolTip": "Les métadonnées servent de filtre essentiel qui améliore l'exactitude et la pertinence de la recherche d'informations. Vous pouvez modifier et ajouter des métadonnées pour ce document ici.",
	"metadata.documentMetadata.startLabeling": "Commencer l'étiquetage",
	"metadata.documentMetadata.technicalParameters": "Paramètres techniques",
	"metadata.metadata": "Métadonnées",
	"metadata.selectMetadata.manageAction": "Gérer",
	"metadata.selectMetadata.newAction": "Nouveaux métadonnées",
	"metadata.selectMetadata.search": "Rechercher des métadonnées",
	mixtureHighQualityAndEconomicTip,
	mixtureInternalAndExternalTip,
	multimodal,
	nTo1RetrievalLegacy,
	nTo1RetrievalLegacyLink,
	nTo1RetrievalLegacyLinkText,
	noExternalKnowledge,
	"parentMode.fullDoc": "Doc complet",
	"parentMode.paragraph": "Paragraphe",
	partialEnabled_one,
	partialEnabled_other,
	preprocessDocument,
	rerankSettings,
	"retrieval.change": "Changer",
	"retrieval.changeRetrievalMethod": "Changer la méthode de récupération",
	"retrieval.full_text_search.description": "Indexez tous les termes dans le document, permettant aux utilisateurs de rechercher n'importe quel terme et de récupérer le fragment de texte pertinent contenant ces termes.",
	"retrieval.full_text_search.title": "Recherche en Texte Intégral",
	"retrieval.hybrid_search.description": "Exécutez une recherche en texte intégral et des recherches vectorielles en même temps, réorganisez pour sélectionner la meilleure correspondance pour la requête de l'utilisateur. La configuration de l'API du modèle de réorganisation est nécessaire.",
	"retrieval.hybrid_search.recommend": "Recommander",
	"retrieval.hybrid_search.title": "Recherche Hybride",
	"retrieval.invertedIndex.description": "L'index inversé est une structure utilisée pour une récupération efficace. Organisé par termes, chaque terme pointe vers des documents ou des pages web le contenant.",
	"retrieval.invertedIndex.title": "Index inversé",
	"retrieval.keyword_search.description": "L’indice inversé est une structure utilisée pour une récupération efficace. Organisé par termes, chaque terme pointe vers des documents ou des pages web qui le contiennent.",
	"retrieval.keyword_search.title": "Index inversé",
	"retrieval.semantic_search.description": "Générez des embeddings de requête et recherchez le morceau de texte le plus similaire à sa représentation vectorielle.",
	"retrieval.semantic_search.title": "Recherche Vectorielle",
	retrievalSettings,
	retry,
	"selectExternalKnowledgeAPI.placeholder": "Choisir une API de connaissances externe",
	"serviceApi.card.apiKey": "Clé API",
	"serviceApi.card.apiReference": "Référence API",
	"serviceApi.card.endpoint": "Point de terminaison de l'API",
	"serviceApi.card.title": "API du service backend",
	"serviceApi.disabled": "désactivé",
	"serviceApi.enabled": "En service",
	"serviceApi.title": "API de service",
	unavailable,
	unknownError,
	updated,
	"weightedScore.customized": "Personnalisé",
	"weightedScore.description": "En ajustant les poids attribués, cette stratégie de reclassement détermine s'il faut prioriser la correspondance sémantique ou par mots-clés.",
	"weightedScore.keyword": "Mot-clé",
	"weightedScore.keywordFirst": "Mot-clé d'abord",
	"weightedScore.semantic": "Sémantique",
	"weightedScore.semanticFirst": "Sémantique d'abord",
	"weightedScore.title": "Score pondéré",
	wordCount
};
//#endregion
export { allExternalTip, allKnowledge, allKnowledgeDescription, appCount, connectDataset, createDataset, createDatasetIntro, createExternalAPI, createFromPipeline, createNewExternalAPI, datasetDeleteFailed, datasetDeleted, datasetUsedByApp, datasets, datasetsApi, dataset_default as default, defaultRetrievalTip, deleteDatasetConfirmContent, deleteDatasetConfirmTitle, didYouKnow, docAllEnabled_one, docAllEnabled_other, docsFailedNotice, documentCount, documentsDisabled, editExternalAPIFormTitle, editExternalAPITooltipTitle, embeddingModelNotAvailable, enable, externalAPI, externalAPIPanelDescription, externalAPIPanelDocumentation, externalAPIPanelTitle, externalKnowledgeBase, externalKnowledgeDescription, externalKnowledgeDescriptionPlaceholder, externalKnowledgeId, externalKnowledgeIdPlaceholder, externalKnowledgeName, externalKnowledgeNamePlaceholder, externalTag, inconsistentEmbeddingModelTip, intro1, intro2, intro3, intro4, intro5, intro6, knowledge, learnHowToWriteGoodKnowledgeDescription, localDocs, mixtureHighQualityAndEconomicTip, mixtureInternalAndExternalTip, multimodal, nTo1RetrievalLegacy, nTo1RetrievalLegacyLink, nTo1RetrievalLegacyLinkText, noExternalKnowledge, partialEnabled_one, partialEnabled_other, preprocessDocument, rerankSettings, retrievalSettings, retry, unavailable, unknownError, updated, wordCount };
