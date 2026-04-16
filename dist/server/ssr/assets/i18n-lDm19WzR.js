import { b as useTranslation$1 } from "./floating-ui.utils.dom-B62kDwTz.js";
import { useCallback } from "react";
//#region i18n-config/lib.client.ts
function useTranslation(ns) {
	return useTranslation$1(ns);
}
//#endregion
//#region i18n-config/language.ts
var languages = { languages: [
	{
		value: "en-US",
		name: "English (United States)",
		prompt_name: "English",
		example: "Hello, Dify!",
		supported: true
	},
	{
		value: "zh-Hans",
		name: "简体中文",
		prompt_name: "Chinese Simplified",
		example: "你好，Dify！",
		supported: true
	},
	{
		value: "zh-Hant",
		name: "繁體中文",
		prompt_name: "Chinese Traditional",
		example: "你好，Dify！",
		supported: true
	},
	{
		value: "pt-BR",
		name: "Português (Brasil)",
		prompt_name: "Portuguese",
		example: "Olá, Dify!",
		supported: true
	},
	{
		value: "es-ES",
		name: "Español (España)",
		prompt_name: "Spanish",
		example: "¡Hola, Dify!",
		supported: true
	},
	{
		value: "fr-FR",
		name: "Français (France)",
		prompt_name: "French",
		example: "Bonjour, Dify!",
		supported: true
	},
	{
		value: "de-DE",
		name: "Deutsch (Deutschland)",
		prompt_name: "German",
		example: "Hallo, Dify!",
		supported: true
	},
	{
		value: "ja-JP",
		name: "日本語 (日本)",
		prompt_name: "Japanese",
		example: "こんにちは、Dify!",
		supported: true
	},
	{
		value: "ko-KR",
		name: "한국어 (대한민국)",
		prompt_name: "Korean",
		example: "안녕하세요, Dify!",
		supported: true
	},
	{
		value: "ru-RU",
		name: "Русский (Россия)",
		prompt_name: "Russian",
		example: " Привет, Dify!",
		supported: true
	},
	{
		value: "it-IT",
		name: "Italiano (Italia)",
		prompt_name: "Italian",
		example: "Ciao, Dify!",
		supported: true
	},
	{
		value: "th-TH",
		name: "ไทย (ประเทศไทย)",
		prompt_name: "Thai",
		example: "สวัสดี Dify!",
		supported: true
	},
	{
		value: "uk-UA",
		name: "Українська (Україна)",
		prompt_name: "Ukrainian",
		example: "Привет, Dify!",
		supported: true
	},
	{
		value: "vi-VN",
		name: "Tiếng Việt (Việt Nam)",
		prompt_name: "Vietnamese",
		example: "Xin chào, Dify!",
		supported: true
	},
	{
		value: "ro-RO",
		name: "Română (România)",
		prompt_name: "Romanian",
		example: "Salut, Dify!",
		supported: true
	},
	{
		value: "pl-PL",
		name: "Polski (Polish)",
		prompt_name: "Polish",
		example: "Cześć, Dify!",
		supported: true
	},
	{
		value: "hi-IN",
		name: "Hindi (India)",
		prompt_name: "Hindi",
		example: "नमस्ते, Dify!",
		supported: true
	},
	{
		value: "tr-TR",
		name: "Türkçe",
		prompt_name: "Türkçe",
		example: "Selam!",
		supported: true
	},
	{
		value: "fa-IR",
		name: "Farsi (Iran)",
		prompt_name: "Farsi",
		example: "سلام, دیفای!",
		supported: true
	},
	{
		value: "sl-SI",
		name: "Slovensko (Slovenija)",
		prompt_name: "Slovensko",
		example: "Zdravo, Dify!",
		supported: true
	},
	{
		value: "id-ID",
		name: "Bahasa Indonesia",
		prompt_name: "Indonesian",
		example: "Halo, Dify!",
		supported: true
	},
	{
		value: "nl-NL",
		name: "Nederlands (Nederland)",
		prompt_name: "Dutch",
		example: "Hallo, Dify!",
		supported: true
	},
	{
		value: "ar-TN",
		name: "العربية (تونس)",
		prompt_name: "Tunisian Arabic",
		example: "مرحبا، Dify!",
		supported: true
	}
] }.languages;
var LanguagesSupported = languages.filter((item) => item.supported).map((item) => item.value);
var getLanguage = (locale) => {
	if (["zh-Hans", "ja-JP"].includes(locale)) return locale.replace("-", "_");
	return LanguagesSupported[0].replace("-", "_");
};
var DOC_LANGUAGE = {
	"zh-Hans": "zh",
	"ja-JP": "ja",
	"en-US": "en"
};
var localeMap = {
	"en-US": "en",
	"en_US": "en",
	"zh-Hans": "zh-cn",
	"zh_Hans": "zh-cn",
	"zh-Hant": "zh-tw",
	"pt-BR": "pt-br",
	"es-ES": "es",
	"fr-FR": "fr",
	"de-DE": "de",
	"ja-JP": "ja",
	"ja_JP": "ja",
	"ko-KR": "ko",
	"ru-RU": "ru",
	"it-IT": "it",
	"th-TH": "th",
	"id-ID": "id",
	"nl-NL": "nl",
	"uk-UA": "uk",
	"vi-VN": "vi",
	"ro-RO": "ro",
	"pl-PL": "pl",
	"hi-IN": "hi",
	"tr-TR": "tr",
	"fa-IR": "fa",
	"sl-SI": "sl",
	"ar-TN": "ar"
};
var getDocLanguage = (locale) => {
	return DOC_LANGUAGE[locale] || "en";
};
var PRICING_PAGE_LANGUAGE = { "ja-JP": "jp" };
var getPricingPageLanguage = (locale) => {
	return PRICING_PAGE_LANGUAGE[locale] || "";
};
var NOTICE_I18N = {
	title: {
		en_US: "Important Notice",
		zh_Hans: "重要公告",
		zh_Hant: "重要公告",
		pt_BR: "Aviso Importante",
		es_ES: "Aviso Importante",
		fr_FR: "Avis important",
		de_DE: "Wichtiger Hinweis",
		ja_JP: "重要なお知らせ",
		ko_KR: "중요 공지",
		ru_RU: "Важное Уведомление",
		it_IT: "Avviso Importante",
		th_TH: "ประกาศสำคัญ",
		id_ID: "Pengumuman Penting",
		uk_UA: "Важливе повідомлення",
		vi_VN: "Thông báo quan trọng",
		ro_RO: "Anunț Important",
		pl_PL: "Ważne ogłoszenie",
		hi_IN: "महत्वपूर्ण सूचना",
		tr_TR: "Önemli Duyuru",
		fa_IR: "هشدار مهم",
		sl_SI: "Pomembno obvestilo",
		ar_TN: "إشعار مهم"
	},
	desc: {
		en_US: "Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.",
		zh_Hans: "为了有效提升数据检索能力及稳定性，Dify 将于 2023 年 8 月 29 日 03:00 至 08:00 期间进行服务升级，届时 Dify 云端版及应用将无法访问。感谢您的耐心与支持。",
		pt_BR: "Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.",
		es_ES: "Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.",
		fr_FR: "Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.",
		de_DE: "Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.",
		ja_JP: "Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.",
		ko_KR: "시스템이 업그레이드를 위해 UTC 시간대로 8 월 28 일 19:00 ~ 24:00 에 사용 불가될 예정입니다. 질문이 있으시면 지원 팀에 연락주세요 (support@dify.ai). 최선을 다해 답변해드리겠습니다.",
		pl_PL: "Nasz system będzie niedostępny od 19:00 do 24:00 UTC 28 sierpnia w celu aktualizacji. W przypadku pytań prosimy o kontakt z naszym zespołem wsparcia (support@dify.ai). Doceniamy Twoją cierpliwość.",
		uk_UA: "Наша система буде недоступна з 19:00 до 24:00 UTC 28 серпня для оновлення. Якщо у вас виникнуть запитання, будь ласка, зв’яжіться з нашою службою підтримки (support@dify.ai). Дякуємо за терпіння.",
		ru_RU: "Наша система будет недоступна с 19:00 до 24:00 UTC 28 августа для обновления. По вопросам, пожалуйста, обращайтесь в нашу службу поддержки (support@dify.ai). Спасибо за ваше терпение",
		vi_VN: "Hệ thống của chúng tôi sẽ ngừng hoạt động từ 19:00 đến 24:00 UTC vào ngày 28 tháng 8 để nâng cấp. Nếu có thắc mắc, vui lòng liên hệ với nhóm hỗ trợ của chúng tôi (support@dify.ai). Chúng tôi đánh giá cao sự kiên nhẫn của bạn.",
		id_ID: "Sistem kami tidak akan tersedia dari 19:00 hingga 24:00 UTC pada 28 Agustus untuk pemutakhiran. Untuk pertanyaan, silakan hubungi tim dukungan kami (support@dify.ai). Kami menghargai kesabaran Anda.",
		tr_TR: "Sistemimiz, 28 Ağustos'ta 19:00 ile 24:00 UTC saatleri arasında güncelleme nedeniyle kullanılamayacaktır. Sorularınız için lütfen destek ekibimizle iletişime geçin (support@dify.ai). Sabrınız için teşekkür ederiz.",
		fa_IR: "سیستم ما از ساعت 19:00 تا 24:00 UTC در تاریخ 28 اوت برای ارتقاء در دسترس نخواهد بود. برای سؤالات، لطفاً با تیم پشتیبانی ما (support@dify.ai) تماس بگیرید. ما برای صبر شما ارزش قائلیم.",
		sl_SI: "Naš sistem ne bo na voljo od 19:00 do 24:00 UTC 28. avgusta zaradi nadgradnje. Za vprašanja se obrnite na našo skupino za podporo (support@dify.ai). Cenimo vašo potrpežljivost.",
		th_TH: "ระบบของเราจะไม่สามารถใช้งานได้ตั้งแต่เวลา 19:00 ถึง 24:00 UTC ในวันที่ 28 สิงหาคม เพื่อทำการอัปเกรด หากมีคำถามใดๆ กรุณาติดต่อทีมสนับสนุนของเรา (support@dify.ai) เราขอขอบคุณในความอดทนของท่าน",
		ar_TN: "سيكون نظامنا غير متاح من الساعة 19:00 إلى 24:00 بالتوقيت العالمي المنسق في 28 أغسطس لإجراء ترقية. للأسئلة، يرجى الاتصال بفريق الدعم لدينا (support@dify.ai). نحن نقدر صبرك."
	},
	href: "#"
};
//#endregion
//#region types/doc-paths.ts
var apiReferencePathTranslations = {
	"/api-reference/annotations/configure-annotation-reply": {
		zh: "/api-reference/标注管理/配置标注回复",
		ja: "/api-reference/アノテーション管理/アノテーション返信を設定"
	},
	"/api-reference/annotations/create-annotation": {
		zh: "/api-reference/标注管理/创建标注",
		ja: "/api-reference/アノテーション管理/アノテーションを作成"
	},
	"/api-reference/annotations/delete-annotation": {
		zh: "/api-reference/标注管理/删除标注",
		ja: "/api-reference/アノテーション管理/アノテーションを削除"
	},
	"/api-reference/annotations/get-annotation-reply-job-status": {
		zh: "/api-reference/标注管理/查询标注回复配置任务状态",
		ja: "/api-reference/アノテーション管理/アノテーション返信の初期設定タスクステータスを取得"
	},
	"/api-reference/annotations/list-annotations": {
		zh: "/api-reference/标注管理/获取标注列表",
		ja: "/api-reference/アノテーション管理/アノテーションリストを取得"
	},
	"/api-reference/annotations/update-annotation": {
		zh: "/api-reference/标注管理/更新标注",
		ja: "/api-reference/アノテーション管理/アノテーションを更新"
	},
	"/api-reference/applications/get-app-info": {
		zh: "/api-reference/应用配置/获取应用基本信息",
		ja: "/api-reference/アプリケーション設定/アプリケーションの基本情報を取得"
	},
	"/api-reference/applications/get-app-meta": {
		zh: "/api-reference/应用配置/获取应用元数据",
		ja: "/api-reference/アプリケーション設定/アプリケーションのメタ情報を取得"
	},
	"/api-reference/applications/get-app-parameters": {
		zh: "/api-reference/应用配置/获取应用参数",
		ja: "/api-reference/アプリケーション設定/アプリケーションのパラメータ情報を取得"
	},
	"/api-reference/applications/get-app-webapp-settings": {
		zh: "/api-reference/应用配置/获取应用-webapp-设置",
		ja: "/api-reference/アプリケーション設定/アプリの-webapp-設定を取得"
	},
	"/api-reference/chats/get-next-suggested-questions": {
		zh: "/api-reference/对话消息/获取下一轮建议问题列表",
		ja: "/api-reference/チャットメッセージ/次の推奨質問を取得"
	},
	"/api-reference/chats/send-chat-message": {
		zh: "/api-reference/对话消息/发送对话消息",
		ja: "/api-reference/チャットメッセージ/チャットメッセージを送信"
	},
	"/api-reference/chats/stop-chat-message-generation": {
		zh: "/api-reference/对话消息/停止响应",
		ja: "/api-reference/チャットメッセージ/生成を停止"
	},
	"/api-reference/chunks/create-child-chunk": {
		zh: "/api-reference/分段/创建子分段",
		ja: "/api-reference/チャンク/子チャンクを作成"
	},
	"/api-reference/chunks/create-chunks": {
		zh: "/api-reference/分段/向文档添加分段",
		ja: "/api-reference/チャンク/ドキュメントにチャンクを追加"
	},
	"/api-reference/chunks/delete-child-chunk": {
		zh: "/api-reference/分段/删除子分段",
		ja: "/api-reference/チャンク/子チャンクを削除"
	},
	"/api-reference/chunks/delete-chunk": {
		zh: "/api-reference/分段/删除文档中的分段",
		ja: "/api-reference/チャンク/ドキュメント内のチャンクを削除"
	},
	"/api-reference/chunks/get-chunk": {
		zh: "/api-reference/分段/获取文档中的分段详情",
		ja: "/api-reference/チャンク/ドキュメント内のチャンク詳細を取得"
	},
	"/api-reference/chunks/list-child-chunks": {
		zh: "/api-reference/分段/获取子分段",
		ja: "/api-reference/チャンク/子チャンク一覧を取得"
	},
	"/api-reference/chunks/list-chunks": {
		zh: "/api-reference/分段/从文档获取分段",
		ja: "/api-reference/チャンク/チャンク一覧を取得"
	},
	"/api-reference/chunks/update-child-chunk": {
		zh: "/api-reference/分段/更新子分段",
		ja: "/api-reference/チャンク/子チャンクを更新"
	},
	"/api-reference/chunks/update-chunk": {
		zh: "/api-reference/分段/更新文档中的分段",
		ja: "/api-reference/チャンク/ドキュメント内のチャンクを更新"
	},
	"/api-reference/completions/send-completion-message": {
		zh: "/api-reference/文本生成/发送消息",
		ja: "/api-reference/完了メッセージ/完了メッセージを送信"
	},
	"/api-reference/completions/stop-completion-message-generation": {
		zh: "/api-reference/文本生成/停止响应",
		ja: "/api-reference/完了メッセージ/生成を停止"
	},
	"/api-reference/conversations/delete-conversation": {
		zh: "/api-reference/会话管理/删除会话",
		ja: "/api-reference/会話管理/会話を削除"
	},
	"/api-reference/conversations/list-conversation-messages": {
		zh: "/api-reference/会话管理/获取会话历史消息",
		ja: "/api-reference/会話管理/会話履歴メッセージ一覧を取得"
	},
	"/api-reference/conversations/list-conversation-variables": {
		zh: "/api-reference/会话管理/获取对话变量",
		ja: "/api-reference/会話管理/会話変数の取得"
	},
	"/api-reference/conversations/list-conversations": {
		zh: "/api-reference/会话管理/获取会话列表",
		ja: "/api-reference/会話管理/会話一覧を取得"
	},
	"/api-reference/conversations/rename-conversation": {
		zh: "/api-reference/会话管理/重命名会话",
		ja: "/api-reference/会話管理/会話の名前を変更"
	},
	"/api-reference/conversations/update-conversation-variable": {
		zh: "/api-reference/会话管理/更新对话变量",
		ja: "/api-reference/会話管理/会話変数を更新"
	},
	"/api-reference/documents/create-document-by-file": {
		zh: "/api-reference/文档/从文件创建文档",
		ja: "/api-reference/ドキュメント/ファイルからドキュメントを作成"
	},
	"/api-reference/documents/create-document-by-text": {
		zh: "/api-reference/文档/从文本创建文档",
		ja: "/api-reference/ドキュメント/テキストからドキュメントを作成"
	},
	"/api-reference/documents/delete-document": {
		zh: "/api-reference/文档/删除文档",
		ja: "/api-reference/ドキュメント/ドキュメントを削除"
	},
	"/api-reference/documents/download-document": {
		zh: "/api-reference/文档/下载文档",
		ja: "/api-reference/ドキュメント/ドキュメントをダウンロード"
	},
	"/api-reference/documents/download-documents-as-zip": {
		zh: "/api-reference/文档/批量下载文档（zip）",
		ja: "/api-reference/ドキュメント/ドキュメントを一括ダウンロード（zip）"
	},
	"/api-reference/documents/get-document": {
		zh: "/api-reference/文档/获取文档详情",
		ja: "/api-reference/ドキュメント/ドキュメント詳細を取得"
	},
	"/api-reference/documents/get-document-indexing-status": {
		zh: "/api-reference/文档/获取文档嵌入状态（进度）",
		ja: "/api-reference/ドキュメント/ドキュメント埋め込みステータス（進捗）を取得"
	},
	"/api-reference/documents/list-documents": {
		zh: "/api-reference/文档/获取知识库的文档列表",
		ja: "/api-reference/ドキュメント/ナレッジベースのドキュメントリストを取得"
	},
	"/api-reference/documents/update-document-by-file": {
		zh: "/api-reference/文档/用文件更新文档",
		ja: "/api-reference/ドキュメント/ファイルでドキュメントを更新"
	},
	"/api-reference/documents/update-document-by-text": {
		zh: "/api-reference/文档/用文本更新文档",
		ja: "/api-reference/ドキュメント/テキストでドキュメントを更新"
	},
	"/api-reference/documents/update-document-status-in-batch": {
		zh: "/api-reference/文档/批量更新文档状态",
		ja: "/api-reference/ドキュメント/ドキュメントステータスを一括更新"
	},
	"/api-reference/end-users/get-end-user-info": {
		zh: "/api-reference/终端用户/获取终端用户",
		ja: "/api-reference/エンドユーザー/エンドユーザー取得"
	},
	"/api-reference/feedback/list-app-feedbacks": {
		zh: "/api-reference/消息反馈/获取应用的消息反馈",
		ja: "/api-reference/メッセージフィードバック/アプリのフィードバック一覧を取得"
	},
	"/api-reference/feedback/submit-message-feedback": {
		zh: "/api-reference/消息反馈/提交消息反馈",
		ja: "/api-reference/メッセージフィードバック/メッセージフィードバックを送信"
	},
	"/api-reference/files/download-file": {
		zh: "/api-reference/文件操作/下载文件",
		ja: "/api-reference/ファイル操作/ファイルをダウンロード"
	},
	"/api-reference/files/upload-file": {
		zh: "/api-reference/文件操作/上传文件",
		ja: "/api-reference/ファイル操作/ファイルをアップロード"
	},
	"/api-reference/knowledge-bases/create-an-empty-knowledge-base": {
		zh: "/api-reference/知识库/创建空知识库",
		ja: "/api-reference/データセット/空のナレッジベースを作成"
	},
	"/api-reference/knowledge-bases/delete-knowledge-base": {
		zh: "/api-reference/知识库/删除知识库",
		ja: "/api-reference/データセット/ナレッジベースを削除"
	},
	"/api-reference/knowledge-bases/get-knowledge-base": {
		zh: "/api-reference/知识库/获取知识库详情",
		ja: "/api-reference/データセット/ナレッジベース詳細を取得"
	},
	"/api-reference/knowledge-bases/list-knowledge-bases": {
		zh: "/api-reference/知识库/获取知识库列表",
		ja: "/api-reference/データセット/ナレッジベースリストを取得"
	},
	"/api-reference/knowledge-bases/retrieve-chunks-from-a-knowledge-base-/-test-retrieval": {
		zh: "/api-reference/知识库/从知识库检索分段-/-测试检索",
		ja: "/api-reference/データセット/ナレッジベースからチャンクを取得-/-テスト検索"
	},
	"/api-reference/knowledge-bases/update-knowledge-base": {
		zh: "/api-reference/知识库/更新知识库",
		ja: "/api-reference/データセット/ナレッジベースを更新"
	},
	"/api-reference/knowledge-pipeline/list-datasource-plugins": {
		zh: "/api-reference/知识流水线/获取数据源插件列表",
		ja: "/api-reference/ナレッジパイプライン/データソースプラグインリストを取得"
	},
	"/api-reference/knowledge-pipeline/run-datasource-node": {
		zh: "/api-reference/知识流水线/执行数据源节点",
		ja: "/api-reference/ナレッジパイプライン/データソースノードを実行"
	},
	"/api-reference/knowledge-pipeline/run-pipeline": {
		zh: "/api-reference/知识流水线/运行流水线",
		ja: "/api-reference/ナレッジパイプライン/パイプラインを実行"
	},
	"/api-reference/knowledge-pipeline/upload-pipeline-file": {
		zh: "/api-reference/知识流水线/上传流水线文件",
		ja: "/api-reference/ナレッジパイプライン/パイプラインファイルをアップロード"
	},
	"/api-reference/metadata/create-metadata-field": {
		zh: "/api-reference/元数据/创建元数据字段",
		ja: "/api-reference/メタデータ/メタデータフィールドを作成"
	},
	"/api-reference/metadata/delete-metadata-field": {
		zh: "/api-reference/元数据/删除元数据字段",
		ja: "/api-reference/メタデータ/メタデータフィールドを削除"
	},
	"/api-reference/metadata/get-built-in-metadata-fields": {
		zh: "/api-reference/元数据/获取内置元数据字段",
		ja: "/api-reference/メタデータ/組み込みメタデータフィールドを取得"
	},
	"/api-reference/metadata/list-metadata-fields": {
		zh: "/api-reference/元数据/获取元数据字段列表",
		ja: "/api-reference/メタデータ/メタデータフィールドリストを取得"
	},
	"/api-reference/metadata/update-built-in-metadata-field": {
		zh: "/api-reference/元数据/更新内置元数据字段",
		ja: "/api-reference/メタデータ/組み込みメタデータフィールドを更新"
	},
	"/api-reference/metadata/update-document-metadata-in-batch": {
		zh: "/api-reference/元数据/批量更新文档元数据",
		ja: "/api-reference/メタデータ/ドキュメントメタデータを一括更新"
	},
	"/api-reference/metadata/update-metadata-field": {
		zh: "/api-reference/元数据/更新元数据字段",
		ja: "/api-reference/メタデータ/メタデータフィールドを更新"
	},
	"/api-reference/models/get-available-models": {
		zh: "/api-reference/模型/获取可用模型",
		ja: "/api-reference/モデル/利用可能なモデルを取得"
	},
	"/api-reference/tags/create-knowledge-tag": {
		zh: "/api-reference/标签/创建知识库标签",
		ja: "/api-reference/タグ管理/ナレッジベースタグを作成"
	},
	"/api-reference/tags/create-tag-binding": {
		zh: "/api-reference/标签/绑定标签到知识库",
		ja: "/api-reference/タグ管理/タグをデータセットにバインド"
	},
	"/api-reference/tags/delete-knowledge-tag": {
		zh: "/api-reference/标签/删除知识库标签",
		ja: "/api-reference/タグ管理/ナレッジベースタグを削除"
	},
	"/api-reference/tags/delete-tag-binding": {
		zh: "/api-reference/标签/解除标签与知识库的绑定",
		ja: "/api-reference/タグ管理/タグとデータセットのバインドを解除"
	},
	"/api-reference/tags/get-knowledge-base-tags": {
		zh: "/api-reference/标签/获取知识库绑定的标签",
		ja: "/api-reference/タグ管理/ナレッジベースにバインドされたタグを取得"
	},
	"/api-reference/tags/list-knowledge-tags": {
		zh: "/api-reference/标签/获取知识库标签列表",
		ja: "/api-reference/タグ管理/ナレッジベースタグリストを取得"
	},
	"/api-reference/tags/update-knowledge-tag": {
		zh: "/api-reference/标签/修改知识库标签",
		ja: "/api-reference/タグ管理/ナレッジベースタグを変更"
	},
	"/api-reference/tts/convert-audio-to-text": {
		zh: "/api-reference/语音与文字转换/语音转文字",
		ja: "/api-reference/音声・テキスト変換/音声をテキストに変換"
	},
	"/api-reference/tts/convert-text-to-audio": {
		zh: "/api-reference/语音与文字转换/文字转语音",
		ja: "/api-reference/音声・テキスト変換/テキストを音声に変換"
	},
	"/api-reference/workflow-runs/get-workflow-run-detail": {
		zh: "/api-reference/工作流执行/获取工作流执行情况",
		ja: "/api-reference/ワークフロー実行/ワークフロー実行詳細を取得"
	},
	"/api-reference/workflow-runs/list-workflow-logs": {
		zh: "/api-reference/工作流执行/获取工作流日志",
		ja: "/api-reference/ワークフロー実行/ワークフローログ一覧を取得"
	},
	"/api-reference/workflows/get-workflow-run-detail": {
		zh: "/api-reference/工作流/获取工作流执行情况",
		ja: "/api-reference/ワークフロー/ワークフロー実行詳細を取得"
	},
	"/api-reference/workflows/list-workflow-logs": {
		zh: "/api-reference/工作流/获取工作流日志",
		ja: "/api-reference/ワークフロー/ワークフローログ一覧を取得"
	},
	"/api-reference/workflows/run-workflow": {
		zh: "/api-reference/工作流/执行工作流",
		ja: "/api-reference/ワークフロー/ワークフローを実行"
	},
	"/api-reference/workflows/run-workflow-by-id": {
		zh: "/api-reference/工作流/按-id-执行工作流",
		ja: "/api-reference/ワークフロー/id-でワークフローを実行"
	},
	"/api-reference/workflows/stop-workflow-task": {
		zh: "/api-reference/工作流/停止工作流任务",
		ja: "/api-reference/ワークフロー/ワークフロータスクを停止"
	}
};
//#endregion
//#region context/i18n.ts
var useLocale = () => {
	const { i18n } = useTranslation();
	return i18n.language;
};
var useGetLanguage = () => {
	return getLanguage(useLocale());
};
var useGetPricingPageLanguage = () => {
	return getPricingPageLanguage(useLocale());
};
var defaultDocBaseUrl = "https://docs.dify.ai";
var useDocLink = (baseUrl) => {
	let baseDocUrl = baseUrl || "https://docs.dify.ai";
	baseDocUrl = baseDocUrl.endsWith("/") ? baseDocUrl.slice(0, -1) : baseDocUrl;
	const locale = useLocale();
	return useCallback((path, pathMap) => {
		const docLanguage = getDocLanguage(locale);
		const pathUrl = path || "";
		let targetPath = pathMap ? pathMap[locale] || pathUrl : pathUrl;
		let languagePrefix = `/${docLanguage}`;
		if (targetPath.startsWith("/api-reference/")) {
			languagePrefix = "";
			if (docLanguage !== "en") {
				const translatedPath = apiReferencePathTranslations[targetPath]?.[docLanguage];
				if (translatedPath) targetPath = translatedPath;
			}
		}
		return `${baseDocUrl}${languagePrefix}${targetPath}`;
	}, [baseDocUrl, locale]);
};
//#endregion
export { useLocale as a, getDocLanguage as c, localeMap as d, useTranslation as f, useGetPricingPageLanguage as i, getLanguage as l, useDocLink as n, LanguagesSupported as o, useGetLanguage as r, NOTICE_I18N as s, defaultDocBaseUrl as t, languages as u };
