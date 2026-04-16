//#region i18n/ru-RU/dataset-hit-testing.json
var chunkDetail = "Деталь Чанка";
var dateTimeFormat = "DD.MM.YYYY HH:mm";
var desc = "Проверьте эффективность поиска в базе знаний на основе заданного текста запроса.";
var hitChunks = "Попадание {{num}} дочерних чанков";
var keyword = "Ключевые слова";
var noRecentTip = "Здесь нет результатов недавних запросов";
var open = "Открытый";
var records = "Записи";
var settingTitle = "Настройка извлечения";
var title = "Тестирование поиска";
var viewChart = "Посмотреть ВЕКТОРНУЮ ДИАГРАММУ";
var viewDetail = "Подробнее";
var dataset_hit_testing_default = {
	chunkDetail,
	dateTimeFormat,
	desc,
	"hit.emptyTip": "Результаты тестирования поиска будут отображаться здесь",
	"hit.title": "{{num}} найденные абзацы",
	hitChunks,
	"imageUploader.dropZoneTip": "Перетащите файл сюда для загрузки",
	"imageUploader.singleChunkAttachmentLimitTooltip": "Количество одноэлементных вложений не может превышать {{limit}}",
	"imageUploader.tip": "Загрузите или перетащите изображения (Макс. {{batchCount}}, {{size}} МБ каждое)",
	"imageUploader.tooltip": "Загрузите изображения (макс. {{batchCount}}, {{size}} МБ каждое)",
	"input.countWarning": "До 200 символов.",
	"input.indexWarning": "Только база знаний высокого качества.",
	"input.placeholder": "Пожалуйста, введите текст, рекомендуется использовать короткое повествовательное предложение.",
	"input.testing": "Тестирование",
	"input.title": "Исходный текст",
	keyword,
	noRecentTip,
	open,
	records,
	settingTitle,
	"table.header.queryContent": "Содержимое запроса",
	"table.header.source": "Источник",
	"table.header.time": "Время",
	title,
	viewChart,
	viewDetail
};
//#endregion
export { chunkDetail, dateTimeFormat, dataset_hit_testing_default as default, desc, hitChunks, keyword, noRecentTip, open, records, settingTitle, title, viewChart, viewDetail };
