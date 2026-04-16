//#region i18n/tr-TR/dataset.json
var allExternalTip = "Yalnızca harici bilgileri kullanırken, kullanıcı Yeniden Sıralama modelinin etkinleştirilip etkinleştirilmeyeceğini seçebilir. Etkinleştirilmezse, alınan parçalar puanlara göre sıralanır. Farklı bilgi tabanlarının erişim stratejileri tutarsız olduğunda, yanlış olacaktır.";
var allKnowledge = "Tüm Bilgiler";
var allKnowledgeDescription = "Bu çalışma alanındaki tüm bilgileri görüntülemek için seçin. Yalnızca Çalışma Alanı Sahibi tüm bilgileri yönetebilir.";
var appCount = " bağlı uygulamalar";
var connectDataset = "Harici bir bilgi bankasına bağlanın";
var createDataset = "Bilgi Oluştur";
var createDatasetIntro = "Kendi metin verilerinizi içe aktarın veya Webhook aracılığıyla gerçek zamanlı olarak veri yazın, LLM bağlamını geliştirin.";
var createExternalAPI = "Harici bilgi API'si ekleme";
var createFromPipeline = "Bilgi İşlem Hattından Oluşturun";
var createNewExternalAPI = "Yeni bir Harici Bilgi API'si oluşturma";
var datasetDeleteFailed = "Bilgi silinemedi";
var datasetDeleted = "Bilgi silindi";
var datasetUsedByApp = "Bilgi bazı uygulamalar tarafından kullanılıyor. Uygulamalar artık bu Bilgiyi kullanamayacak ve tüm prompt yapılandırmaları ve günlükler kalıcı olarak silinecektir.";
var datasets = "BİLGİ";
var datasetsApi = "API ERİŞİMİ";
var defaultRetrievalTip = "Varsayılan olarak çok alma kullanılır. Bilgi, birden fazla bilgi tabanından alınır ve ardından yeniden sıralanır.";
var deleteDatasetConfirmContent = "Bilginin silinmesi geri alınamaz. Kullanıcılar artık Bilginize erişemeyecek ve tüm prompt yapılandırmaları ve günlükler kalıcı olarak silinecektir.";
var deleteDatasetConfirmTitle = "Bu Bilgi'yi silmek istiyor musunuz?";
var didYouKnow = "Biliyor muydunuz?";
var docAllEnabled_one = "{{count}} belgesi etkinleştirildi";
var docAllEnabled_other = "Tüm {{count}} belgeleri etkinleştirildi";
var docsFailedNotice = "belgeler dizine eklenemedi";
var documentCount = " belge";
var documentsDisabled = "{{num}} belge devre dışı - 30 günden uzun süre etkin değil";
var editExternalAPIFormTitle = "Harici Bilgi API'sini düzenleme";
var editExternalAPITooltipTitle = "BAĞLANTILI BİLGİ";
var embeddingModelNotAvailable = "Gömme modeli mevcut değil.";
var enable = "Etkinleştir";
var externalAPI = "Harici API";
var externalAPIPanelDescription = "Harici bilgi API'si, Dify dışındaki bir bilgi bankasına bağlanmak ve bu bilgi bankasından bilgi almak için kullanılır.";
var externalAPIPanelDocumentation = "Harici Bilgi API'sinin nasıl oluşturulacağını öğrenin";
var externalAPIPanelTitle = "Harici Bilgi API'si";
var externalKnowledgeBase = "Harici Bilgi Bankası";
var externalKnowledgeDescription = "Bilgi Açıklaması";
var externalKnowledgeDescriptionPlaceholder = "Bu Bilgi Bankası'nda neler olduğunu açıklayın (isteğe bağlı)";
var externalKnowledgeId = "Harici Bilgi Kimliği";
var externalKnowledgeIdPlaceholder = "Lütfen Bilgi Kimliğini girin";
var externalKnowledgeName = "Dış Bilgi Adı";
var externalKnowledgeNamePlaceholder = "Lütfen bilgi bankasının adını giriniz";
var externalTag = "Dış";
var inconsistentEmbeddingModelTip = "Seçilen bilgi tabanlarının Yerleştirme modelleri tutarsızsa Yeniden Sıralama modeli gereklidir.";
var intro1 = "Bilgi, Dify uygulamasına ";
var intro2 = "bağlam olarak";
var intro3 = " entegre edilebilir,";
var intro4 = "veya ";
var intro5 = "bağımsız bir ChatGPT dizin eklentisi olarak oluşturulabilir";
var intro6 = " ve yayınlanabilir.";
var knowledge = "Bilgi";
var learnHowToWriteGoodKnowledgeDescription = "İyi bir bilgi açıklamasının nasıl yazılacağını öğrenin";
var localDocs = "Yerel Dokümanlar";
var mixtureHighQualityAndEconomicTip = "Yüksek kaliteli ve ekonomik bilgi tabanlarının karışımı için Yeniden Sıralama modeli gereklidir.";
var mixtureInternalAndExternalTip = "Yeniden Sıralama modeli, iç ve dış bilgilerin karışımı için gereklidir.";
var multimodal = "Çok Modlu";
var nTo1RetrievalLegacy = "Geri alım stratejisinin optimizasyonu ve yükseltilmesi nedeniyle, N-to-1 geri alımı Eylül ayında resmi olarak kullanım dışı kalacaktır. O zamana kadar normal şekilde kullanabilirsiniz.";
var nTo1RetrievalLegacyLink = "Daha fazla bilgi edin";
var nTo1RetrievalLegacyLinkText = "N-1 geri alma Eylül ayında resmi olarak kullanımdan kaldırılacaktır.";
var noExternalKnowledge = "Henüz Harici Bilgi API'si yok, oluşturmak için buraya tıklayın";
var partialEnabled_one = "Toplam {{count}} belge, {{num}} mevcut";
var partialEnabled_other = "Toplam {{count}} belge, {{num}} mevcut";
var preprocessDocument = "{{num}} Belgeleri Ön İşleme";
var rerankSettings = "Yeniden Sıralama Ayarı";
var retrievalSettings = "Geri Alım Ayarı";
var retry = "Yeniden Dene";
var unavailable = "Kullanılamıyor";
var unknownError = "Bilinmeyen hata";
var updated = "Güncellendi";
var wordCount = " k kelime";
var dataset_default = {
	allExternalTip,
	allKnowledge,
	allKnowledgeDescription,
	appCount,
	"batchAction.archive": "Arşiv",
	"batchAction.cancel": "İptal",
	"batchAction.delete": "Sil",
	"batchAction.disable": "Devre Dışı Bırak",
	"batchAction.download": "İndir",
	"batchAction.enable": "Etkinleştir",
	"batchAction.reIndex": "Yeniden dizinle",
	"batchAction.selected": "Seçilmiş",
	"chunkingMode.general": "Genel",
	"chunkingMode.graph": "Grafik",
	"chunkingMode.parentChild": "Ebeveyn-çocuk",
	"chunkingMode.qa": "Soru-Cevap",
	connectDataset,
	"connectDatasetIntro.content.end": ". Ardından ilgili bilgi kimliğini bulun ve soldaki forma doldurun. Tüm bilgiler doğruysa, bağlan düğmesine tıkladıktan sonra otomatik olarak bilgi tabanındaki alma testine atlayacaktır.",
	"connectDatasetIntro.content.front": "Harici bir bilgi bankasına bağlanmak için önce harici bir API oluşturmanız gerekir. Lütfen dikkatlice okuyun ve bakınız",
	"connectDatasetIntro.content.link": "Harici API oluşturmayı öğrenin",
	"connectDatasetIntro.learnMore": "Daha fazla bilgi edinin",
	"connectDatasetIntro.title": "Harici bir bilgi bankasına nasıl bağlanılır",
	"connectHelper.helper1": "API ve bilgi bankası kimliği aracılığıyla harici bilgi bankalarına bağlanın. Şu anda,",
	"connectHelper.helper2": "Yalnızca alma işlevi desteklenir",
	"connectHelper.helper3": ". Şunları yapmanızı şiddetle tavsiye ederiz",
	"connectHelper.helper4": "Yardım belgelerini okuyun",
	"connectHelper.helper5": "Bu özelliği kullanmadan önce dikkatlice kullanın.",
	"cornerLabel.pipeline": "Boruhattı",
	"cornerLabel.unavailable": "Mevcut değil",
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
	"deleteExternalAPIConfirmWarningContent.content.end": "dış bilgi. Bu API'yi silmek hepsini geçersiz kılacaktır. Bu API'yi silmek istediğinizden emin misiniz?",
	"deleteExternalAPIConfirmWarningContent.content.front": "Bu Harici Bilgi API'si aşağıdakilerle bağlantılıdır",
	"deleteExternalAPIConfirmWarningContent.noConnectionContent": "Bu API'yi sildiğinizden emin misiniz?",
	"deleteExternalAPIConfirmWarningContent.title.end": "?",
	"deleteExternalAPIConfirmWarningContent.title.front": "Sil",
	didYouKnow,
	docAllEnabled_one,
	docAllEnabled_other,
	docsFailedNotice,
	documentCount,
	documentsDisabled,
	"editExternalAPIConfirmWarningContent.end": "Dışsal bilgi ve bu değişiklik hepsine uygulanacaktır. Bu değişikliği kaydetmek istediğinizden emin misiniz?",
	"editExternalAPIConfirmWarningContent.front": "Bu Harici Bilgi API'si aşağıdakilerle bağlantılıdır",
	editExternalAPIFormTitle,
	"editExternalAPIFormWarning.end": "Dış bilgi",
	"editExternalAPIFormWarning.front": "Bu Harici API aşağıdakilere bağlıdır:",
	editExternalAPITooltipTitle,
	embeddingModelNotAvailable,
	enable,
	externalAPI,
	"externalAPIForm.apiKey": "API Anahtarı",
	"externalAPIForm.cancel": "İptal",
	"externalAPIForm.edit": "Düzenle",
	"externalAPIForm.encrypted.end": "Teknoloji.",
	"externalAPIForm.encrypted.front": "API Token'ınız kullanılarak şifrelenecek ve saklanacaktır.",
	"externalAPIForm.endpoint": "API Uç Noktası",
	"externalAPIForm.name": "Ad",
	"externalAPIForm.save": "Kaydet",
	externalAPIPanelDescription,
	externalAPIPanelDocumentation,
	externalAPIPanelTitle,
	externalKnowledgeBase,
	externalKnowledgeDescription,
	externalKnowledgeDescriptionPlaceholder,
	"externalKnowledgeForm.cancel": "İptal",
	"externalKnowledgeForm.connect": "Bağla",
	"externalKnowledgeForm.connectedFailed": "Harici Bilgi Tabanına bağlanılamadı",
	"externalKnowledgeForm.connectedSuccess": "Harici Bilgi Tabanı başarıyla bağlandı",
	externalKnowledgeId,
	externalKnowledgeIdPlaceholder,
	externalKnowledgeName,
	externalKnowledgeNamePlaceholder,
	externalTag,
	"imageUploader.browse": "Gözat",
	"imageUploader.button": "Dosya veya klasörü sürükleyip bırakın, veya",
	"imageUploader.fileSizeLimitExceeded": "Dosya boyutu {{size}}MB sınırını aşıyor",
	"imageUploader.tip": "{{supportTypes}} (Her biri Maks. {{batchCount}}, {{size}}MB)",
	inconsistentEmbeddingModelTip,
	"indexingMethod.full_text_search": "TAM METİN",
	"indexingMethod.hybrid_search": "HİBRİT",
	"indexingMethod.invertedIndex": "TERS",
	"indexingMethod.keyword_search": "ANAHTAR KELİME",
	"indexingMethod.semantic_search": "VEKTÖR",
	"indexingTechnique.economy": "Ekonomi",
	"indexingTechnique.high_quality": "Yüksek Kalite",
	intro1,
	intro2,
	intro3,
	intro4,
	intro5,
	intro6,
	knowledge,
	learnHowToWriteGoodKnowledgeDescription,
	localDocs,
	"metadata.addMetadata": "Meta Verileri Ekle",
	"metadata.batchEditMetadata.applyToAllSelectDocument": "Seçilen tüm belgelere uygula",
	"metadata.batchEditMetadata.applyToAllSelectDocumentTip": "Seçilen tüm belgeler için yukarıda düzenlenmiş ve yeni olan tüm meta verileri otomatik olarak oluşturun, aksi takdirde meta verileri düzenlemek yalnızca bununla ilgili belgelere uygulanacaktır.",
	"metadata.batchEditMetadata.editDocumentsNum": "{{num}} belge düzenleniyor",
	"metadata.batchEditMetadata.editMetadata": "Meta Verileri Düzenle",
	"metadata.batchEditMetadata.multipleValue": "Birden Fazla Değer",
	"metadata.checkName.empty": "Meta veri adı boş olamaz",
	"metadata.checkName.invalid": "Meta verisi adı yalnızca küçük harfler, sayılar ve alt çizgiler içerebilir ve küçük bir harfle başlamalıdır.",
	"metadata.checkName.tooLong": "Meta veri adı {{max}} karakteri geçemez",
	"metadata.chooseTime": "Bir zaman seçin...",
	"metadata.createMetadata.back": "Geri",
	"metadata.createMetadata.name": "İsim",
	"metadata.createMetadata.namePlaceholder": "Meta veri adı ekleyin",
	"metadata.createMetadata.title": "Yeni Veriler",
	"metadata.createMetadata.type": "Yaz",
	"metadata.datasetMetadata.addMetaData": "Meta Verileri Ekle",
	"metadata.datasetMetadata.builtIn": "Yerleşik",
	"metadata.datasetMetadata.builtInDescription": "Yerleşik meta veriler otomatik olarak çıkarılır ve oluşturulur. Kullanımdan önce etkinleştirilmesi gerekir ve düzenlenemez.",
	"metadata.datasetMetadata.deleteContent": "Bu {{name}} meta verisini silmek istediğinizden emin misiniz?",
	"metadata.datasetMetadata.deleteTitle": "Silmek için onayla",
	"metadata.datasetMetadata.description": "Bu bilgideki tüm meta verileri yönetebilirsiniz. Değişiklikler her belgeye senkronize edilecektir.",
	"metadata.datasetMetadata.disabled": "Devre Dışı",
	"metadata.datasetMetadata.name": "İsim",
	"metadata.datasetMetadata.namePlaceholder": "Meta veri adı",
	"metadata.datasetMetadata.rename": "Yeniden Adlandır",
	"metadata.datasetMetadata.values": "{{num}} Değerler",
	"metadata.documentMetadata.documentInformation": "Belge Bilgisi",
	"metadata.documentMetadata.metadataToolTip": "Meta veriler, bilgi alma doğruluğunu ve geçerliliğini artıran önemli bir filtre görevi görür. Bu belgede meta verileri burada değiştirebilir ve ekleyebilirsiniz.",
	"metadata.documentMetadata.startLabeling": "Etiketlemeye Başla",
	"metadata.documentMetadata.technicalParameters": "Teknik Parametreler",
	"metadata.metadata": "Veri Seti",
	"metadata.selectMetadata.manageAction": "Yönet",
	"metadata.selectMetadata.newAction": "Yeni Veriler",
	"metadata.selectMetadata.search": "Arama meta verileri",
	mixtureHighQualityAndEconomicTip,
	mixtureInternalAndExternalTip,
	multimodal,
	nTo1RetrievalLegacy,
	nTo1RetrievalLegacyLink,
	nTo1RetrievalLegacyLinkText,
	noExternalKnowledge,
	"parentMode.fullDoc": "Tam doküman",
	"parentMode.paragraph": "Paragraf",
	partialEnabled_one,
	partialEnabled_other,
	preprocessDocument,
	rerankSettings,
	"retrieval.change": "Değiştir",
	"retrieval.changeRetrievalMethod": "Geri alma yöntemini değiştir",
	"retrieval.full_text_search.description": "Belgelerdeki tüm terimleri dizinleyerek, kullanıcıların herhangi bir terimi aramasına ve bu terimleri içeren ilgili metin parçasını geri almasına olanak tanır.",
	"retrieval.full_text_search.title": "Tam Metin Arama",
	"retrieval.hybrid_search.description": "Tam metin arama ve vektör aramalarını aynı anda çalıştırın, kullanıcı sorgusu için en iyi eşleşmeyi seçmek için yeniden sıralayın. Kullanıcılar ağırlıklar ayarlayabilir veya bir Yeniden Sıralama modeli yapılandırabilir.",
	"retrieval.hybrid_search.recommend": "Önerilir",
	"retrieval.hybrid_search.title": "Hibrit Arama",
	"retrieval.invertedIndex.description": "Ters indeks, verimli erişim için kullanılan bir yapıdır. Terimlere göre düzenlenmiş olan bu yapı, her bir terimin bulunduğu belgeleri veya web sayfalarını gösterir.",
	"retrieval.invertedIndex.title": "Ters İndeks",
	"retrieval.keyword_search.description": "Ters İndeks, verimli erişim için kullanılan bir yapıdır. Terimlere göre düzenlenen her terim, onu içeren belgelere veya web sayfalarına işaret eder.",
	"retrieval.keyword_search.title": "Ters Çevrilmiş İndeks",
	"retrieval.semantic_search.description": "Sorgu yerleştirmelerini oluşturun ve vektör temsiline en benzeyen metin parçasını arayın.",
	"retrieval.semantic_search.title": "Vektör Arama",
	retrievalSettings,
	retry,
	"selectExternalKnowledgeAPI.placeholder": "Bir Harici Bilgi API'si seçin",
	"serviceApi.card.apiKey": "API Anahtarı",
	"serviceApi.card.apiReference": "API Referansı",
	"serviceApi.card.endpoint": "Hizmet API Uç Noktası",
	"serviceApi.card.title": "Backend servis api",
	"serviceApi.disabled": "Devre Dışı",
	"serviceApi.enabled": "Etkin",
	"serviceApi.title": "Servis API'si",
	unavailable,
	unknownError,
	updated,
	"weightedScore.customized": "Özelleştirilmiş",
	"weightedScore.description": "Verilen ağırlıkları ayarlayarak bu yeniden sıralama stratejisi, anlamsal mı yoksa anahtar kelime eşleştirmesini mi önceliklendireceğini belirler.",
	"weightedScore.keyword": "Anahtar Kelime",
	"weightedScore.keywordFirst": "Anahtar Kelime Öncelikli",
	"weightedScore.semantic": "Anlamsal",
	"weightedScore.semanticFirst": "Anlamsal Öncelikli",
	"weightedScore.title": "Ağırlıklı Puan",
	wordCount
};
//#endregion
export { allExternalTip, allKnowledge, allKnowledgeDescription, appCount, connectDataset, createDataset, createDatasetIntro, createExternalAPI, createFromPipeline, createNewExternalAPI, datasetDeleteFailed, datasetDeleted, datasetUsedByApp, datasets, datasetsApi, dataset_default as default, defaultRetrievalTip, deleteDatasetConfirmContent, deleteDatasetConfirmTitle, didYouKnow, docAllEnabled_one, docAllEnabled_other, docsFailedNotice, documentCount, documentsDisabled, editExternalAPIFormTitle, editExternalAPITooltipTitle, embeddingModelNotAvailable, enable, externalAPI, externalAPIPanelDescription, externalAPIPanelDocumentation, externalAPIPanelTitle, externalKnowledgeBase, externalKnowledgeDescription, externalKnowledgeDescriptionPlaceholder, externalKnowledgeId, externalKnowledgeIdPlaceholder, externalKnowledgeName, externalKnowledgeNamePlaceholder, externalTag, inconsistentEmbeddingModelTip, intro1, intro2, intro3, intro4, intro5, intro6, knowledge, learnHowToWriteGoodKnowledgeDescription, localDocs, mixtureHighQualityAndEconomicTip, mixtureInternalAndExternalTip, multimodal, nTo1RetrievalLegacy, nTo1RetrievalLegacyLink, nTo1RetrievalLegacyLinkText, noExternalKnowledge, partialEnabled_one, partialEnabled_other, preprocessDocument, rerankSettings, retrievalSettings, retry, unavailable, unknownError, updated, wordCount };
