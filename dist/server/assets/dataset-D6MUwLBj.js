//#region i18n/id-ID/dataset.json
var allExternalTip = "Saat hanya menggunakan pengetahuan eksternal, pengguna dapat memilih apakah akan mengaktifkan model Rerank. Jika tidak diaktifkan, potongan yang diambil akan diurutkan berdasarkan skor. Ketika strategi pengambilan dari basis pengetahuan yang berbeda tidak konsisten, itu akan menjadi tidak akurat.";
var allKnowledge = "Semua Pengetahuan";
var allKnowledgeDescription = "Pilih untuk menampilkan semua pengetahuan di ruang kerja ini. Hanya Pemilik Ruang Kerja yang dapat mengelola semua pengetahuan.";
var appCount = "Aplikasi tertaut";
var connectDataset = "Menyambungkan ke Basis Pengetahuan Eksternal";
var createDataset = "Ciptakan Pengetahuan";
var createDatasetIntro = "Impor data teks Anda sendiri atau tulis data secara real-time melalui Webhook untuk peningkatan konteks LLM.";
var createExternalAPI = "Menambahkan API Pengetahuan Eksternal";
var createFromPipeline = "Membuat dari Knowledge Pipeline";
var createNewExternalAPI = "Membuat API Pengetahuan Eksternal baru";
var datasetDeleteFailed = "Gagal menghapus Pengetahuan";
var datasetDeleted = "Pengetahuan dihapus";
var datasetUsedByApp = "Pengetahuan tersebut digunakan oleh beberapa aplikasi. Aplikasi tidak akan lagi dapat menggunakan Pengetahuan ini, dan semua konfigurasi prompt serta log akan dihapus secara permanen.";
var datasets = "PENGETAHUAN";
var datasetsApi = "AKSES API";
var defaultRetrievalTip = "Pengambilan multi-jalur digunakan secara default. Pengetahuan diambil dari beberapa basis pengetahuan dan kemudian diberi peringkat ulang.";
var deleteDatasetConfirmContent = "Menghapus Pengetahuan tidak dapat diubah. Pengguna tidak akan lagi dapat mengakses Pengetahuan Anda, dan semua konfigurasi prompt dan log akan dihapus secara permanen.";
var deleteDatasetConfirmTitle = "Hapus Pengetahuan ini?";
var didYouKnow = "Tahukah Anda?";
var docAllEnabled_one = "dokumen {{count}} diaktifkan";
var docAllEnabled_other = "Semua dokumen {{count}} diaktifkan";
var docsFailedNotice = "Dokumen yang diindeks gagal";
var documentCount = "Docs";
var documentsDisabled = "{{num}} dokumen dinonaktifkan - tidak aktif lebih dari 30 hari";
var editExternalAPIFormTitle = "Mengedit API Pengetahuan Eksternal";
var editExternalAPITooltipTitle = "PENGETAHUAN TERKAIT";
var embeddingModelNotAvailable = "Model penyematan tidak tersedia.";
var enable = "Mengaktifkan";
var externalAPI = "API Eksternal";
var externalAPIPanelDescription = "API pengetahuan eksternal digunakan untuk terhubung ke pangkalan pengetahuan di luar Dify dan mengambil pengetahuan dari basis pengetahuan tersebut.";
var externalAPIPanelDocumentation = "Pelajari cara membuat API Pengetahuan Eksternal";
var externalAPIPanelTitle = "API Pengetahuan Eksternal";
var externalKnowledgeBase = "Basis Pengetahuan Eksternal";
var externalKnowledgeDescription = "Deskripsi Pengetahuan";
var externalKnowledgeDescriptionPlaceholder = "Menjelaskan apa yang ada di Basis Pengetahuan ini (opsional)";
var externalKnowledgeId = "ID Pengetahuan Eksternal";
var externalKnowledgeIdPlaceholder = "Silakan masukkan ID Pengetahuan";
var externalKnowledgeName = "Nama Pengetahuan Eksternal";
var externalKnowledgeNamePlaceholder = "Silakan masukkan nama basis pengetahuan";
var externalTag = "Eksternal";
var inconsistentEmbeddingModelTip = "Model Rerank diperlukan jika model Penyematan dari basis pengetahuan yang dipilih tidak konsisten.";
var intro1 = "Pengetahuan dapat diintegrasikan ke dalam aplikasi Dify";
var intro2 = "sebagai konteks";
var intro3 = ",";
var intro4 = "atau itu";
var intro5 = "dapat dibuat";
var intro6 = "sebagai plug-in indeks ChatGPT mandiri untuk dipublikasikan";
var knowledge = "Pengetahuan";
var learnHowToWriteGoodKnowledgeDescription = "Pelajari cara menulis deskripsi pengetahuan yang baik";
var localDocs = "Dokumen Lokal";
var mixtureHighQualityAndEconomicTip = "Model Rerank diperlukan untuk campuran basis pengetahuan berkualitas tinggi dan ekonomis.";
var mixtureInternalAndExternalTip = "Model Rerank diperlukan untuk campuran pengetahuan internal dan eksternal.";
var multimodal = "Multimodal";
var nTo1RetrievalLegacy = "Pengambilan N-to-1 akan secara resmi tidak digunakan lagi mulai September. Disarankan untuk menggunakan pengambilan Multi-jalur terbaru untuk mendapatkan hasil yang lebih baik.";
var nTo1RetrievalLegacyLink = "Pelajari lebih lanjut";
var nTo1RetrievalLegacyLinkText = "Pengambilan N-to-1 akan secara resmi tidak digunakan lagi pada bulan September.";
var noExternalKnowledge = "Belum ada API Pengetahuan Eksternal, klik di sini untuk membuat";
var partialEnabled_one = "Total {{count}} dokumen, {{num}} tersedia";
var partialEnabled_other = "Total {{count}} dokumen, {{num}} tersedia";
var preprocessDocument = "{{num}} Prasekolah Dokumen";
var rerankSettings = "Pengaturan Peringkat Ulang";
var retrievalSettings = "Pengaturan Pengambilan";
var retry = "Pengulangan";
var unavailable = "Tidak tersedia";
var unknownError = "Kesalahan tidak diketahui";
var updated = "Diperbarui";
var wordCount = "K Kata-kata";
var dataset_default = {
	allExternalTip,
	allKnowledge,
	allKnowledgeDescription,
	appCount,
	"batchAction.archive": "Mengarsipkan",
	"batchAction.cancel": "Membatalkan",
	"batchAction.delete": "Menghapus",
	"batchAction.disable": "Menonaktifkan",
	"batchAction.download": "Unduh",
	"batchAction.enable": "Mengaktifkan",
	"batchAction.reIndex": "Indeks ulang",
	"batchAction.selected": "Dipilih",
	"chunkingMode.general": "Umum",
	"chunkingMode.graph": "Grafik",
	"chunkingMode.parentChild": "Orang tua-anak",
	"chunkingMode.qa": "Tanya Jawab",
	connectDataset,
	"connectDatasetIntro.content.end": ". Kemudian temukan ID pengetahuan yang sesuai dan isi di formulir di sebelah kiri. Jika semua informasi sudah benar, itu akan secara otomatis melompat ke tes pengambilan di pangkalan pengetahuan setelah mengklik tombol hubungkan.",
	"connectDatasetIntro.content.front": "Untuk terhubung ke basis pengetahuan eksternal, Anda perlu membuat API eksternal terlebih dahulu. Harap baca dengan seksama dan lihat",
	"connectDatasetIntro.content.link": "Pelajari cara membuat API eksternal",
	"connectDatasetIntro.learnMore": "Pelajari lebih lanjut",
	"connectDatasetIntro.title": "Cara Terhubung ke Basis Pengetahuan Eksternal",
	"connectHelper.helper1": "Hubungkan ke pangkalan pengetahuan eksternal melalui API dan ID pangkalan pengetahuan. Saat ini,",
	"connectHelper.helper2": "hanya fungsionalitas pengambilan yang didukung",
	"connectHelper.helper3": ". Kami sangat menyarankan agar Anda",
	"connectHelper.helper4": "Baca dokumentasi bantuan",
	"connectHelper.helper5": "hati-hati sebelum menggunakan fitur ini.",
	"cornerLabel.pipeline": "Saluran pipa",
	"cornerLabel.unavailable": "Tidak tersedia",
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
	"deleteExternalAPIConfirmWarningContent.content.end": "pengetahuan eksternal. Menghapus API ini akan membatalkan semuanya. Apakah Anda yakin ingin menghapus API ini?",
	"deleteExternalAPIConfirmWarningContent.content.front": "API Pengetahuan Eksternal ini ditautkan ke",
	"deleteExternalAPIConfirmWarningContent.noConnectionContent": "Apakah Anda yakin akan menghapus API ini?",
	"deleteExternalAPIConfirmWarningContent.title.end": "?",
	"deleteExternalAPIConfirmWarningContent.title.front": "Menghapus",
	didYouKnow,
	docAllEnabled_one,
	docAllEnabled_other,
	docsFailedNotice,
	documentCount,
	documentsDisabled,
	"editExternalAPIConfirmWarningContent.end": "pengetahuan eksternal, dan modifikasi ini akan diterapkan pada semuanya. Apakah Anda yakin ingin menyimpan perubahan ini?",
	"editExternalAPIConfirmWarningContent.front": "API Pengetahuan Eksternal ini ditautkan ke",
	editExternalAPIFormTitle,
	"editExternalAPIFormWarning.end": "pengetahuan eksternal",
	"editExternalAPIFormWarning.front": "API Eksternal ini ditautkan ke",
	editExternalAPITooltipTitle,
	embeddingModelNotAvailable,
	enable,
	externalAPI,
	"externalAPIForm.apiKey": "Kunci API",
	"externalAPIForm.cancel": "Membatalkan",
	"externalAPIForm.edit": "Mengedit",
	"externalAPIForm.encrypted.end": "Teknologi.",
	"externalAPIForm.encrypted.front": "Token API Anda akan dienkripsi dan disimpan menggunakan",
	"externalAPIForm.endpoint": "Titik Akhir API",
	"externalAPIForm.name": "Nama",
	"externalAPIForm.save": "Simpan",
	externalAPIPanelDescription,
	externalAPIPanelDocumentation,
	externalAPIPanelTitle,
	externalKnowledgeBase,
	externalKnowledgeDescription,
	externalKnowledgeDescriptionPlaceholder,
	"externalKnowledgeForm.cancel": "Membatalkan",
	"externalKnowledgeForm.connect": "Sambung",
	"externalKnowledgeForm.connectedFailed": "Gagal terhubung ke Basis Pengetahuan Eksternal",
	"externalKnowledgeForm.connectedSuccess": "Basis Pengetahuan Eksternal Berhasil Terhubung",
	externalKnowledgeId,
	externalKnowledgeIdPlaceholder,
	externalKnowledgeName,
	externalKnowledgeNamePlaceholder,
	externalTag,
	"imageUploader.browse": "Telusuri",
	"imageUploader.button": "Seret dan lepas file atau folder, atau",
	"imageUploader.fileSizeLimitExceeded": "Ukuran file melebihi batas {{size}}MB",
	"imageUploader.tip": "{{supportTypes}} (Maks {{batchCount}}, {{size}}MB masing-masing)",
	inconsistentEmbeddingModelTip,
	"indexingMethod.full_text_search": "TEKS LENGKAP",
	"indexingMethod.hybrid_search": "HIBRIDA",
	"indexingMethod.invertedIndex": "TERBALIK",
	"indexingMethod.keyword_search": "KATA KUNCI",
	"indexingMethod.semantic_search": "VEKTOR",
	"indexingTechnique.economy": "EKO",
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
	"metadata.addMetadata": "Tambahkan Metadata",
	"metadata.batchEditMetadata.applyToAllSelectDocument": "Terapkan ke semua dokumen yang dipilih",
	"metadata.batchEditMetadata.applyToAllSelectDocumentTip": "Secara otomatis membuat semua metadata yang diedit di atas dan baru untuk semua dokumen yang dipilih, jika tidak, mengedit metadata hanya akan berlaku untuk dokumen yang dengannya.",
	"metadata.batchEditMetadata.editDocumentsNum": "Mengedit dokumen {{num}}",
	"metadata.batchEditMetadata.editMetadata": "Edit Metadata",
	"metadata.batchEditMetadata.multipleValue": "Beberapa Nilai",
	"metadata.checkName.empty": "Nama metadata tidak boleh kosong",
	"metadata.checkName.invalid": "Nama metadata hanya dapat berisi huruf kecil, angka, dan garis bawah dan harus dimulai dengan huruf kecil",
	"metadata.checkName.tooLong": "Nama metadata tidak boleh melebihi {{max}} karakter",
	"metadata.chooseTime": "Pilih waktu...",
	"metadata.createMetadata.back": "Belakang",
	"metadata.createMetadata.name": "Nama",
	"metadata.createMetadata.namePlaceholder": "Tambahkan nama metadata",
	"metadata.createMetadata.title": "Metadata Baru",
	"metadata.createMetadata.type": "Jenis",
	"metadata.datasetMetadata.addMetaData": "Tambahkan Metadata",
	"metadata.datasetMetadata.builtIn": "Bawaan",
	"metadata.datasetMetadata.builtInDescription": "Metadata bawaan secara otomatis diekstrak dan dihasilkan. Itu harus diaktifkan sebelum digunakan dan tidak dapat diedit.",
	"metadata.datasetMetadata.deleteContent": "Apakah Anda yakin ingin menghapus metadata \"{{name}}\"",
	"metadata.datasetMetadata.deleteTitle": "Konfirmasi untuk menghapus",
	"metadata.datasetMetadata.description": "Anda dapat mengelola semua metadata dalam pengetahuan ini di sini. Modifikasi akan disinkronkan ke setiap dokumen.",
	"metadata.datasetMetadata.disabled": "Nonaktif",
	"metadata.datasetMetadata.name": "Nama",
	"metadata.datasetMetadata.namePlaceholder": "Nama metadata",
	"metadata.datasetMetadata.rename": "Ubah nama",
	"metadata.datasetMetadata.values": "Nilai {{num}}",
	"metadata.documentMetadata.documentInformation": "Informasi Dokumen",
	"metadata.documentMetadata.metadataToolTip": "Metadata berfungsi sebagai filter penting yang meningkatkan akurasi dan relevansi pengambilan informasi. Anda dapat memodifikasi dan menambahkan metadata untuk dokumen ini di sini.",
	"metadata.documentMetadata.startLabeling": "Mulai Pelabelan",
	"metadata.documentMetadata.technicalParameters": "Parameter teknis",
	"metadata.metadata": "Metadata",
	"metadata.selectMetadata.manageAction": "Urus",
	"metadata.selectMetadata.newAction": "Metadata Baru",
	"metadata.selectMetadata.search": "Metadata pencarian",
	mixtureHighQualityAndEconomicTip,
	mixtureInternalAndExternalTip,
	multimodal,
	nTo1RetrievalLegacy,
	nTo1RetrievalLegacyLink,
	nTo1RetrievalLegacyLinkText,
	noExternalKnowledge,
	"parentMode.fullDoc": "Dokumen lengkap",
	"parentMode.paragraph": "Paragraf",
	partialEnabled_one,
	partialEnabled_other,
	preprocessDocument,
	rerankSettings,
	"retrieval.change": "Ubah",
	"retrieval.changeRetrievalMethod": "Ubah metode pengambilan",
	"retrieval.full_text_search.description": "Indeks semua istilah dalam dokumen, memungkinkan pengguna untuk mencari istilah apa pun dan mengambil potongan teks yang relevan yang berisi istilah tersebut.",
	"retrieval.full_text_search.title": "Pencarian Teks Lengkap",
	"retrieval.hybrid_search.description": "Jalankan pencarian teks lengkap dan pencarian vektor secara bersamaan, peringkatkan ulang untuk memilih kecocokan terbaik untuk kueri pengguna. Pengguna dapat memilih untuk mengatur bobot atau mengonfigurasi ke model Rerank.",
	"retrieval.hybrid_search.recommend": "Merekomendasikan",
	"retrieval.hybrid_search.title": "Pencarian Hibrida",
	"retrieval.invertedIndex.description": "Indeks Terbalik adalah sebuah struktur yang digunakan untuk pengambilan data secara efisien. Diatur berdasarkan istilah, setiap istilah menunjuk ke dokumen atau halaman web yang memuatnya.",
	"retrieval.invertedIndex.title": "Indeks Terbalik",
	"retrieval.keyword_search.description": "Indeks Terbalik adalah struktur yang digunakan untuk pengambilan yang efisien. Diatur berdasarkan istilah, setiap istilah menunjuk ke dokumen atau halaman web yang berisinya.",
	"retrieval.keyword_search.title": "Indeks Terbalik",
	"retrieval.semantic_search.description": "Hasilkan penyematan kueri dan cari potongan teks yang paling mirip dengan representasi vektornya.",
	"retrieval.semantic_search.title": "Pencarian Vektor",
	retrievalSettings,
	retry,
	"selectExternalKnowledgeAPI.placeholder": "Pilih API Pengetahuan Eksternal",
	"serviceApi.card.apiKey": "Kunci API",
	"serviceApi.card.apiReference": "Referensi API",
	"serviceApi.card.endpoint": "Titik Akhir API Layanan",
	"serviceApi.card.title": "API layanan backend",
	"serviceApi.disabled": "Dinonaktifkan",
	"serviceApi.enabled": "Sedang Beroperasi",
	"serviceApi.title": "API Layanan",
	unavailable,
	unknownError,
	updated,
	"weightedScore.customized": "Disesuaikan",
	"weightedScore.description": "Dengan menyesuaikan bobot yang ditetapkan, strategi rerank ini menentukan apakah akan memprioritaskan pencocokan semantik atau kata kunci.",
	"weightedScore.keyword": "Kata kunci",
	"weightedScore.keywordFirst": "Kata kunci pertama",
	"weightedScore.semantic": "Semantik",
	"weightedScore.semanticFirst": "Semantik pertama",
	"weightedScore.title": "Skor Tertimbang",
	wordCount
};
//#endregion
export { allExternalTip, allKnowledge, allKnowledgeDescription, appCount, connectDataset, createDataset, createDatasetIntro, createExternalAPI, createFromPipeline, createNewExternalAPI, datasetDeleteFailed, datasetDeleted, datasetUsedByApp, datasets, datasetsApi, dataset_default as default, defaultRetrievalTip, deleteDatasetConfirmContent, deleteDatasetConfirmTitle, didYouKnow, docAllEnabled_one, docAllEnabled_other, docsFailedNotice, documentCount, documentsDisabled, editExternalAPIFormTitle, editExternalAPITooltipTitle, embeddingModelNotAvailable, enable, externalAPI, externalAPIPanelDescription, externalAPIPanelDocumentation, externalAPIPanelTitle, externalKnowledgeBase, externalKnowledgeDescription, externalKnowledgeDescriptionPlaceholder, externalKnowledgeId, externalKnowledgeIdPlaceholder, externalKnowledgeName, externalKnowledgeNamePlaceholder, externalTag, inconsistentEmbeddingModelTip, intro1, intro2, intro3, intro4, intro5, intro6, knowledge, learnHowToWriteGoodKnowledgeDescription, localDocs, mixtureHighQualityAndEconomicTip, mixtureInternalAndExternalTip, multimodal, nTo1RetrievalLegacy, nTo1RetrievalLegacyLink, nTo1RetrievalLegacyLinkText, noExternalKnowledge, partialEnabled_one, partialEnabled_other, preprocessDocument, rerankSettings, retrievalSettings, retry, unavailable, unknownError, updated, wordCount };
