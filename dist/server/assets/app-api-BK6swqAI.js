//#region i18n/sl-SI/app-api.json
var apiKey = "API Ključ";
var apiServer = "API Strežnik";
var copied = "Kopirano";
var copy = "Kopiraj";
var disabled = "Onemogočeno";
var loading = "Nalaganje";
var never = "Nikoli";
var ok = "V uporabi";
var pause = "Premor";
var play = "Predvajaj";
var playing = "Predvajanje";
var regenerate = "Regeneriraj";
var status = "Status";
var app_api_default = {
	"actionMsg.deleteConfirmTips": "To dejanje ni mogoče razveljaviti.",
	"actionMsg.deleteConfirmTitle": "Izbrisati ta skrivni ključ?",
	"actionMsg.ok": "V redu",
	apiKey,
	"apiKeyModal.apiSecretKey": "API Skrivni ključ",
	"apiKeyModal.apiSecretKeyTips": "Da bi preprečili zlorabo API-ja, zaščitite svoj API ključ. Izogibajte se uporabi v navadnem besedilu v sprednji kodi. :)",
	"apiKeyModal.createNewSecretKey": "Ustvari nov skrivni ključ",
	"apiKeyModal.created": "USTVARJENO",
	"apiKeyModal.generateTips": "Hranite ta ključ na varnem in dostopnem mestu.",
	"apiKeyModal.lastUsed": "ZADNJA UPORABA",
	"apiKeyModal.secretKey": "Skrivni ključ",
	apiServer,
	"chatMode.blocking": "Vrsta blokiranja, čakanje na dokončanje izvajanja in vračanje rezultatov. (Zahteve se lahko prekinejo, če je postopek dolg)",
	"chatMode.chatMsgHistoryApi": "Pridobi zgodovino klepetnih sporočil",
	"chatMode.chatMsgHistoryApiTip": "Prva stran vrne najnovejše `limit` zapise, ki so v obratnem vrstnem redu.",
	"chatMode.chatMsgHistoryConversationIdTip": "ID pogovora",
	"chatMode.chatMsgHistoryFirstId": "ID prvega klepeta na trenutni strani. Privzeto ni.",
	"chatMode.chatMsgHistoryLimit": "Koliko klepetov je vrnjenih na eno zahtevo",
	"chatMode.conversationIdTip": "(Neobvezno) ID pogovora: pustite prazno za prvi pogovor; prenesite conversation_id iz konteksta, da nadaljujete dialog.",
	"chatMode.conversationRenamingApi": "Preimenovanje pogovora",
	"chatMode.conversationRenamingApiTip": "Preimenujte pogovore; ime je prikazano v večsejnih odjemalskih vmesnikih.",
	"chatMode.conversationRenamingNameTip": "Novo ime",
	"chatMode.conversationsListApi": "Pridobi seznam pogovorov",
	"chatMode.conversationsListApiTip": "Pridobi seznam sej trenutnega uporabnika. Privzeto je vrnjenih zadnjih 20 sej.",
	"chatMode.conversationsListFirstIdTip": "ID zadnjega zapisa na trenutni strani, privzeto ni.",
	"chatMode.conversationsListLimitTip": "Koliko klepetov je vrnjenih na eno zahtevo",
	"chatMode.createChatApi": "Ustvari klepetno sporočilo",
	"chatMode.createChatApiTip": "Ustvari novo pogovorno sporočilo ali nadaljuj obstoječi pogovor.",
	"chatMode.info": "Za vsestranske pogovorne aplikacije, ki uporabljajo obliko vprašanj in odgovorov, pokličite API za klepetna sporočila, da začnete dialog. Ohranite tekoče pogovore tako, da prenesete vrnjeni conversation_id. Parametri odgovorov in predloge so odvisni od nastavitev Dify Prompt Eng.",
	"chatMode.inputsTips": "(Neobvezno) Navedite vnosna polja uporabnikov kot ključ-vrednost pare, ki ustrezajo spremenljivkam v Prompt Eng. Ključ je ime spremenljivke, vrednost pa vrednost parametra. Če je vrsta polja Izberi, mora biti posredovana vrednost ena izmed vnaprej določenih možnosti.",
	"chatMode.messageFeedbackApi": "Povratne informacije končnih uporabnikov o sporočilu, všeč",
	"chatMode.messageFeedbackApiTip": "Ocenite prejeta sporočila v imenu končnih uporabnikov z všečki ali nevšečki. Ti podatki so vidni na strani Dnevniki in opombe ter se uporabljajo za nadaljnje fino prilagajanje modela.",
	"chatMode.messageIDTip": "ID sporočila",
	"chatMode.parametersApi": "Pridobite informacije o parametrih aplikacije",
	"chatMode.parametersApiTip": "Pridobite konfigurirane vhodne parametre, vključno z imeni spremenljivk, imeni polj, vrstami in privzetimi vrednostmi. Običajno se uporablja za prikaz teh polj v obrazcu ali izpolnjevanje privzetih vrednosti po nalaganju odjemalca.",
	"chatMode.queryTips": "Vsebina vnosa/uporabniškega vprašanja",
	"chatMode.ratingTip": "všeč ali nevšeč, null je preklic",
	"chatMode.streaming": "streaming povratki. Implementacija povratkov pretakanja na podlagi SSE (Server-Sent Events).",
	"chatMode.title": "API za klepet aplikacije",
	"completionMode.blocking": "Vrsta blokiranja, čakanje na dokončanje izvajanja in vračanje rezultatov. (Zahteve se lahko prekinejo, če je postopek dolg)",
	"completionMode.createCompletionApi": "Ustvari sporočilo o dokončanju",
	"completionMode.createCompletionApiTip": "Ustvari sporočilo o dokončanju za podporo načinu vprašanj in odgovorov.",
	"completionMode.info": "Za visokokakovostno generiranje besedil, kot so članki, povzetki in prevodi, uporabite API za dokončanje sporočil z vnosom uporabnika. Generiranje besedil temelji na parametrih modela in predlogah pozivov, določenih v Dify Prompt Engineering.",
	"completionMode.inputsTips": "(Neobvezno) Navedite vnosna polja uporabnikov kot ključ-vrednost pare, ki ustrezajo spremenljivkam v Prompt Eng. Ključ je ime spremenljivke, vrednost pa vrednost parametra. Če je vrsta polja Izberi, mora biti posredovana vrednost ena izmed vnaprej določenih možnosti.",
	"completionMode.messageFeedbackApi": "Povratne informacije o sporočilih (všeč)",
	"completionMode.messageFeedbackApiTip": "Ocenite prejeta sporočila v imenu končnih uporabnikov z všečki ali nevšečki. Ti podatki so vidni na strani Dnevniki in opombe ter se uporabljajo za nadaljnje fino prilagajanje modela.",
	"completionMode.messageIDTip": "ID sporočila",
	"completionMode.parametersApi": "Pridobite informacije o parametrih aplikacije",
	"completionMode.parametersApiTip": "Pridobite konfigurirane vhodne parametre, vključno z imeni spremenljivk, imeni polj, vrstami in privzetimi vrednostmi. Običajno se uporablja za prikaz teh polj v obrazcu ali izpolnjevanje privzetih vrednosti po nalaganju odjemalca.",
	"completionMode.queryTips": "Vsebina besedila vnosa uporabnika.",
	"completionMode.ratingTip": "všeč ali nevšeč, null je preklic",
	"completionMode.streaming": "streaming povratki. Implementacija povratkov pretakanja na podlagi SSE (Server-Sent Events).",
	"completionMode.title": "API za dokončanje aplikacije",
	copied,
	copy,
	"develop.noContent": "Brez vsebine",
	"develop.pathParams": "Parametri poti",
	"develop.query": "Poizvedba",
	"develop.requestBody": "Telo zahteve",
	"develop.toc": "Vsebino",
	disabled,
	loading,
	"merMaid.rerender": "Ponovno izrisi",
	never,
	ok,
	pause,
	play,
	playing,
	regenerate,
	status
};
//#endregion
export { apiKey, apiServer, copied, copy, app_api_default as default, disabled, loading, never, ok, pause, play, playing, regenerate, status };
