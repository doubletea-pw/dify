import { f as __commonJSMin } from "../index.js";
import { t as require_dayjs_min } from "./dayjs.min-CNlMkMP6.js";
import { d as localeMap } from "./i18n-lDm19WzR.js";
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/de.js
var require_de = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, n) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = n(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_de = n(e.dayjs);
	})(exports, (function(e) {
		"use strict";
		function n(e) {
			return e && "object" == typeof e && "default" in e ? e : { default: e };
		}
		var t = n(e), a = {
			s: "ein paar Sekunden",
			m: ["eine Minute", "einer Minute"],
			mm: "%d Minuten",
			h: ["eine Stunde", "einer Stunde"],
			hh: "%d Stunden",
			d: ["ein Tag", "einem Tag"],
			dd: ["%d Tage", "%d Tagen"],
			M: ["ein Monat", "einem Monat"],
			MM: ["%d Monate", "%d Monaten"],
			y: ["ein Jahr", "einem Jahr"],
			yy: ["%d Jahre", "%d Jahren"]
		};
		function i(e, n, t) {
			var i = a[t];
			return Array.isArray(i) && (i = i[n ? 0 : 1]), i.replace("%d", e);
		}
		var r = {
			name: "de",
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),
			ordinal: function(e) {
				return e + ".";
			},
			weekStart: 1,
			yearStart: 4,
			formats: {
				LTS: "HH:mm:ss",
				LT: "HH:mm",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: i,
				m: i,
				mm: i,
				h: i,
				hh: i,
				d: i,
				dd: i,
				M: i,
				MM: i,
				y: i,
				yy: i
			}
		};
		return t.default.locale(r, null, !0), r;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/es.js
var require_es = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, o) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = o(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], o) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_es = o(e.dayjs);
	})(exports, (function(e) {
		"use strict";
		function o(e) {
			return e && "object" == typeof e && "default" in e ? e : { default: e };
		}
		var s = o(e), d = {
			name: "es",
			monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			weekStart: 1,
			formats: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY H:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			ordinal: function(e) {
				return e + "º";
			}
		};
		return s.default.locale(d, null, !0), d;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/fa.js
var require_fa = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(_, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], e) : (_ = "undefined" != typeof globalThis ? globalThis : _ || self).dayjs_locale_fa = e(_.dayjs);
	})(exports, (function(_) {
		"use strict";
		function e(_) {
			return _ && "object" == typeof _ && "default" in _ ? _ : { default: _ };
		}
		var t = e(_), d = {
			name: "fa",
			weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
			weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
			weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
			weekStart: 6,
			months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
			monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
			ordinal: function(_) {
				return _;
			},
			formats: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			relativeTime: {
				future: "در %s",
				past: "%s پیش",
				s: "چند ثانیه",
				m: "یک دقیقه",
				mm: "%d دقیقه",
				h: "یک ساعت",
				hh: "%d ساعت",
				d: "یک روز",
				dd: "%d روز",
				M: "یک ماه",
				MM: "%d ماه",
				y: "یک سال",
				yy: "%d سال"
			}
		};
		return t.default.locale(d, null, !0), d;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/fr.js
var require_fr = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, n) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = n(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_fr = n(e.dayjs);
	})(exports, (function(e) {
		"use strict";
		function n(e) {
			return e && "object" == typeof e && "default" in e ? e : { default: e };
		}
		var t = n(e), i = {
			name: "fr",
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			weekStart: 1,
			yearStart: 4,
			formats: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinal: function(e) {
				return "" + e + (1 === e ? "er" : "");
			}
		};
		return t.default.locale(i, null, !0), i;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/hi.js
var require_hi = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(_, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], e) : (_ = "undefined" != typeof globalThis ? globalThis : _ || self).dayjs_locale_hi = e(_.dayjs);
	})(exports, (function(_) {
		"use strict";
		function e(_) {
			return _ && "object" == typeof _ && "default" in _ ? _ : { default: _ };
		}
		var t = e(_), d = {
			name: "hi",
			weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
			months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
			weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
			monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
			weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
			ordinal: function(_) {
				return _;
			},
			formats: {
				LT: "A h:mm बजे",
				LTS: "A h:mm:ss बजे",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm बजे",
				LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
			},
			relativeTime: {
				future: "%s में",
				past: "%s पहले",
				s: "कुछ ही क्षण",
				m: "एक मिनट",
				mm: "%d मिनट",
				h: "एक घंटा",
				hh: "%d घंटे",
				d: "एक दिन",
				dd: "%d दिन",
				M: "एक महीने",
				MM: "%d महीने",
				y: "एक वर्ष",
				yy: "%d वर्ष"
			}
		};
		return t.default.locale(d, null, !0), d;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/id.js
var require_id = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, a) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = a(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], a) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_id = a(e.dayjs);
	})(exports, (function(e) {
		"use strict";
		function a(e) {
			return e && "object" == typeof e && "default" in e ? e : { default: e };
		}
		var t = a(e), _ = {
			name: "id",
			weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
			weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
			weekStart: 1,
			formats: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lalu",
				s: "beberapa detik",
				m: "semenit",
				mm: "%d menit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			ordinal: function(e) {
				return e + ".";
			}
		};
		return t.default.locale(_, null, !0), _;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/it.js
var require_it = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, o) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = o(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], o) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_it = o(e.dayjs);
	})(exports, (function(e) {
		"use strict";
		function o(e) {
			return e && "object" == typeof e && "default" in e ? e : { default: e };
		}
		var t = o(e), n = {
			name: "it",
			weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
			weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
			weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
			months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
			weekStart: 1,
			monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
			formats: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			relativeTime: {
				future: "tra %s",
				past: "%s fa",
				s: "qualche secondo",
				m: "un minuto",
				mm: "%d minuti",
				h: "un'ora",
				hh: "%d ore",
				d: "un giorno",
				dd: "%d giorni",
				M: "un mese",
				MM: "%d mesi",
				y: "un anno",
				yy: "%d anni"
			},
			ordinal: function(e) {
				return e + "º";
			}
		};
		return t.default.locale(n, null, !0), n;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/nl.js
var require_nl = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, a) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = a(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], a) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_nl = a(e.dayjs);
	})(exports, (function(e) {
		"use strict";
		function a(e) {
			return e && "object" == typeof e && "default" in e ? e : { default: e };
		}
		var d = a(e), n = {
			name: "nl",
			weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
			weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
			weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
			months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
			ordinal: function(e) {
				return "[" + e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") + "]";
			},
			weekStart: 1,
			yearStart: 4,
			formats: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			relativeTime: {
				future: "over %s",
				past: "%s geleden",
				s: "een paar seconden",
				m: "een minuut",
				mm: "%d minuten",
				h: "een uur",
				hh: "%d uur",
				d: "een dag",
				dd: "%d dagen",
				M: "een maand",
				MM: "%d maanden",
				y: "een jaar",
				yy: "%d jaar"
			}
		};
		return d.default.locale(n, null, !0), n;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/ja.js
var require_ja = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, _) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = _(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], _) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_ja = _(e.dayjs);
	})(exports, (function(e) {
		"use strict";
		function _(e) {
			return e && "object" == typeof e && "default" in e ? e : { default: e };
		}
		var t = _(e), d = {
			name: "ja",
			weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
			weekdaysShort: "日_月_火_水_木_金_土".split("_"),
			weekdaysMin: "日_月_火_水_木_金_土".split("_"),
			months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			ordinal: function(e) {
				return e + "日";
			},
			formats: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日 dddd HH:mm",
				l: "YYYY/MM/DD",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日(ddd) HH:mm"
			},
			meridiem: function(e) {
				return e < 12 ? "午前" : "午後";
			},
			relativeTime: {
				future: "%s後",
				past: "%s前",
				s: "数秒",
				m: "1分",
				mm: "%d分",
				h: "1時間",
				hh: "%d時間",
				d: "1日",
				dd: "%d日",
				M: "1ヶ月",
				MM: "%dヶ月",
				y: "1年",
				yy: "%d年"
			}
		};
		return t.default.locale(d, null, !0), d;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/ko.js
var require_ko = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, _) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = _(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], _) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_ko = _(e.dayjs);
	})(exports, (function(e) {
		"use strict";
		function _(e) {
			return e && "object" == typeof e && "default" in e ? e : { default: e };
		}
		var d = _(e), t = {
			name: "ko",
			weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
			weekdaysShort: "일_월_화_수_목_금_토".split("_"),
			weekdaysMin: "일_월_화_수_목_금_토".split("_"),
			months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			ordinal: function(e) {
				return e + "일";
			},
			formats: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "YYYY.MM.DD.",
				LL: "YYYY년 MMMM D일",
				LLL: "YYYY년 MMMM D일 A h:mm",
				LLLL: "YYYY년 MMMM D일 dddd A h:mm",
				l: "YYYY.MM.DD.",
				ll: "YYYY년 MMMM D일",
				lll: "YYYY년 MMMM D일 A h:mm",
				llll: "YYYY년 MMMM D일 dddd A h:mm"
			},
			meridiem: function(e) {
				return e < 12 ? "오전" : "오후";
			},
			relativeTime: {
				future: "%s 후",
				past: "%s 전",
				s: "몇 초",
				m: "1분",
				mm: "%d분",
				h: "한 시간",
				hh: "%d시간",
				d: "하루",
				dd: "%d일",
				M: "한 달",
				MM: "%d달",
				y: "일 년",
				yy: "%d년"
			}
		};
		return d.default.locale(t, null, !0), t;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/pl.js
var require_pl = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, t) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = t(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_pl = t(e.dayjs);
	})(exports, (function(e) {
		"use strict";
		function t(e) {
			return e && "object" == typeof e && "default" in e ? e : { default: e };
		}
		var i = t(e);
		function a(e) {
			return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
		}
		function n(e, t, i) {
			var n = e + " ";
			switch (i) {
				case "m": return t ? "minuta" : "minutę";
				case "mm": return n + (a(e) ? "minuty" : "minut");
				case "h": return t ? "godzina" : "godzinę";
				case "hh": return n + (a(e) ? "godziny" : "godzin");
				case "MM": return n + (a(e) ? "miesiące" : "miesięcy");
				case "yy": return n + (a(e) ? "lata" : "lat");
			}
		}
		var r = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), _ = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), s = /D MMMM/, d = function(e, t) {
			return s.test(t) ? r[e.month()] : _[e.month()];
		};
		d.s = _, d.f = r;
		var o = {
			name: "pl",
			weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
			weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
			weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
			months: d,
			monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
			ordinal: function(e) {
				return e + ".";
			},
			weekStart: 1,
			yearStart: 4,
			relativeTime: {
				future: "za %s",
				past: "%s temu",
				s: "kilka sekund",
				m: n,
				mm: n,
				h: n,
				hh: n,
				d: "1 dzień",
				dd: "%d dni",
				M: "miesiąc",
				MM: n,
				y: "rok",
				yy: n
			},
			formats: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			}
		};
		return i.default.locale(o, null, !0), o;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/pt-br.js
var require_pt_br = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, o) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = o(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], o) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_pt_br = o(e.dayjs);
	})(exports, (function(e) {
		"use strict";
		function o(e) {
			return e && "object" == typeof e && "default" in e ? e : { default: e };
		}
		var a = o(e), s = {
			name: "pt-br",
			weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
			weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
			weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
			months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
			monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
			ordinal: function(e) {
				return e + "º";
			},
			formats: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
			},
			relativeTime: {
				future: "em %s",
				past: "há %s",
				s: "poucos segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			}
		};
		return a.default.locale(s, null, !0), s;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/ro.js
var require_ro = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, i) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = i(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_ro = i(e.dayjs);
	})(exports, (function(e) {
		"use strict";
		function i(e) {
			return e && "object" == typeof e && "default" in e ? e : { default: e };
		}
		var t = i(e), _ = {
			name: "ro",
			weekdays: "Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă".split("_"),
			weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
			weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
			months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"),
			monthsShort: "Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split("_"),
			weekStart: 1,
			formats: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			relativeTime: {
				future: "peste %s",
				past: "acum %s",
				s: "câteva secunde",
				m: "un minut",
				mm: "%d minute",
				h: "o oră",
				hh: "%d ore",
				d: "o zi",
				dd: "%d zile",
				M: "o lună",
				MM: "%d luni",
				y: "un an",
				yy: "%d ani"
			},
			ordinal: function(e) {
				return e;
			}
		};
		return t.default.locale(_, null, !0), _;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/ru.js
var require_ru = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(_, t) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = t(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], t) : (_ = "undefined" != typeof globalThis ? globalThis : _ || self).dayjs_locale_ru = t(_.dayjs);
	})(exports, (function(_) {
		"use strict";
		function t(_) {
			return _ && "object" == typeof _ && "default" in _ ? _ : { default: _ };
		}
		var e = t(_), n = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), s = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), r = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), o = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"), i = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
		function d(_, t, e) {
			var n, s;
			return "m" === e ? t ? "минута" : "минуту" : _ + " " + (n = +_, s = {
				mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
				hh: "час_часа_часов",
				dd: "день_дня_дней",
				MM: "месяц_месяца_месяцев",
				yy: "год_года_лет"
			}[e].split("_"), n % 10 == 1 && n % 100 != 11 ? s[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? s[1] : s[2]);
		}
		var u = function(_, t) {
			return i.test(t) ? n[_.month()] : s[_.month()];
		};
		u.s = s, u.f = n;
		var a = function(_, t) {
			return i.test(t) ? r[_.month()] : o[_.month()];
		};
		a.s = o, a.f = r;
		var m = {
			name: "ru",
			weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
			weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"),
			weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
			months: u,
			monthsShort: a,
			weekStart: 1,
			yearStart: 4,
			formats: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., H:mm",
				LLLL: "dddd, D MMMM YYYY г., H:mm"
			},
			relativeTime: {
				future: "через %s",
				past: "%s назад",
				s: "несколько секунд",
				m: d,
				mm: d,
				h: "час",
				hh: d,
				d: "день",
				dd: d,
				M: "месяц",
				MM: d,
				y: "год",
				yy: d
			},
			ordinal: function(_) {
				return _;
			},
			meridiem: function(_) {
				return _ < 4 ? "ночи" : _ < 12 ? "утра" : _ < 17 ? "дня" : "вечера";
			}
		};
		return e.default.locale(m, null, !0), m;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/sl.js
var require_sl = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, n) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = n(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_sl = n(e.dayjs);
	})(exports, (function(e) {
		"use strict";
		function n(e) {
			return e && "object" == typeof e && "default" in e ? e : { default: e };
		}
		var t = n(e);
		function r(e) {
			return e % 100 == 2;
		}
		function a(e) {
			return e % 100 == 3 || e % 100 == 4;
		}
		function s(e, n, t, s) {
			var m = e + " ";
			switch (t) {
				case "s": return n || s ? "nekaj sekund" : "nekaj sekundami";
				case "m": return n ? "ena minuta" : "eno minuto";
				case "mm": return r(e) ? m + (n || s ? "minuti" : "minutama") : a(e) ? m + (n || s ? "minute" : "minutami") : m + (n || s ? "minut" : "minutami");
				case "h": return n ? "ena ura" : "eno uro";
				case "hh": return r(e) ? m + (n || s ? "uri" : "urama") : a(e) ? m + (n || s ? "ure" : "urami") : m + (n || s ? "ur" : "urami");
				case "d": return n || s ? "en dan" : "enim dnem";
				case "dd": return r(e) ? m + (n || s ? "dneva" : "dnevoma") : m + (n || s ? "dni" : "dnevi");
				case "M": return n || s ? "en mesec" : "enim mesecem";
				case "MM": return r(e) ? m + (n || s ? "meseca" : "mesecema") : a(e) ? m + (n || s ? "mesece" : "meseci") : m + (n || s ? "mesecev" : "meseci");
				case "y": return n || s ? "eno leto" : "enim letom";
				case "yy": return r(e) ? m + (n || s ? "leti" : "letoma") : a(e) ? m + (n || s ? "leta" : "leti") : m + (n || s ? "let" : "leti");
			}
		}
		var m = {
			name: "sl",
			weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
			months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
			weekStart: 1,
			weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
			weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
			ordinal: function(e) {
				return e + ".";
			},
			formats: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm",
				l: "D. M. YYYY"
			},
			relativeTime: {
				future: "čez %s",
				past: "pred %s",
				s,
				m: s,
				mm: s,
				h: s,
				hh: s,
				d: s,
				dd: s,
				M: s,
				MM: s,
				y: s,
				yy: s
			}
		};
		return t.default.locale(m, null, !0), m;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/th.js
var require_th = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(_, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], e) : (_ = "undefined" != typeof globalThis ? globalThis : _ || self).dayjs_locale_th = e(_.dayjs);
	})(exports, (function(_) {
		"use strict";
		function e(_) {
			return _ && "object" == typeof _ && "default" in _ ? _ : { default: _ };
		}
		var t = e(_), d = {
			name: "th",
			weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
			weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
			weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
			months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
			monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
			formats: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY เวลา H:mm",
				LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
			},
			relativeTime: {
				future: "อีก %s",
				past: "%sที่แล้ว",
				s: "ไม่กี่วินาที",
				m: "1 นาที",
				mm: "%d นาที",
				h: "1 ชั่วโมง",
				hh: "%d ชั่วโมง",
				d: "1 วัน",
				dd: "%d วัน",
				M: "1 เดือน",
				MM: "%d เดือน",
				y: "1 ปี",
				yy: "%d ปี"
			},
			ordinal: function(_) {
				return _ + ".";
			}
		};
		return t.default.locale(d, null, !0), d;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/tr.js
var require_tr = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(a, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], e) : (a = "undefined" != typeof globalThis ? globalThis : a || self).dayjs_locale_tr = e(a.dayjs);
	})(exports, (function(a) {
		"use strict";
		function e(a) {
			return a && "object" == typeof a && "default" in a ? a : { default: a };
		}
		var t = e(a), _ = {
			name: "tr",
			weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
			weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
			weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
			months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
			monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
			weekStart: 1,
			formats: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s önce",
				s: "birkaç saniye",
				m: "bir dakika",
				mm: "%d dakika",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir ay",
				MM: "%d ay",
				y: "bir yıl",
				yy: "%d yıl"
			},
			ordinal: function(a) {
				return a + ".";
			}
		};
		return t.default.locale(_, null, !0), _;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/uk.js
var require_uk = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(_, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], e) : (_ = "undefined" != typeof globalThis ? globalThis : _ || self).dayjs_locale_uk = e(_.dayjs);
	})(exports, (function(_) {
		"use strict";
		function e(_) {
			return _ && "object" == typeof _ && "default" in _ ? _ : { default: _ };
		}
		var t = e(_), s = "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), n = "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"), o = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
		function d(_, e, t) {
			var s, n;
			return "m" === t ? e ? "хвилина" : "хвилину" : "h" === t ? e ? "година" : "годину" : _ + " " + (s = +_, n = {
				ss: e ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
				mm: e ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
				hh: e ? "година_години_годин" : "годину_години_годин",
				dd: "день_дні_днів",
				MM: "місяць_місяці_місяців",
				yy: "рік_роки_років"
			}[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? n[1] : n[2]);
		}
		var i = function(_, e) {
			return o.test(e) ? s[_.month()] : n[_.month()];
		};
		i.s = n, i.f = s;
		var r = {
			name: "uk",
			weekdays: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
			weekdaysShort: "ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			months: i,
			monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
			weekStart: 1,
			relativeTime: {
				future: "за %s",
				past: "%s тому",
				s: "декілька секунд",
				m: d,
				mm: d,
				h: d,
				hh: d,
				d: "день",
				dd: d,
				M: "місяць",
				MM: d,
				y: "рік",
				yy: d
			},
			ordinal: function(_) {
				return _;
			},
			formats: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY р.",
				LLL: "D MMMM YYYY р., HH:mm",
				LLLL: "dddd, D MMMM YYYY р., HH:mm"
			}
		};
		return t.default.locale(r, null, !0), r;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/vi.js
var require_vi = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(t, n) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = n(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], n) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_locale_vi = n(t.dayjs);
	})(exports, (function(t) {
		"use strict";
		function n(t) {
			return t && "object" == typeof t && "default" in t ? t : { default: t };
		}
		var h = n(t), _ = {
			name: "vi",
			weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
			months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
			weekStart: 1,
			weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
			weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			ordinal: function(t) {
				return t;
			},
			formats: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM [năm] YYYY",
				LLL: "D MMMM [năm] YYYY HH:mm",
				LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
				l: "DD/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			relativeTime: {
				future: "%s tới",
				past: "%s trước",
				s: "vài giây",
				m: "một phút",
				mm: "%d phút",
				h: "một giờ",
				hh: "%d giờ",
				d: "một ngày",
				dd: "%d ngày",
				M: "một tháng",
				MM: "%d tháng",
				y: "một năm",
				yy: "%d năm"
			}
		};
		return h.default.locale(_, null, !0), _;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/zh-cn.js
var require_zh_cn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, _) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = _(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], _) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_zh_cn = _(e.dayjs);
	})(exports, (function(e) {
		"use strict";
		function _(e) {
			return e && "object" == typeof e && "default" in e ? e : { default: e };
		}
		var t = _(e), d = {
			name: "zh-cn",
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			ordinal: function(e, _) {
				return "W" === _ ? e + "周" : e + "日";
			},
			weekStart: 1,
			yearStart: 4,
			formats: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日Ah点mm分",
				LLLL: "YYYY年M月D日ddddAh点mm分",
				l: "YYYY/M/D",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			relativeTime: {
				future: "%s内",
				past: "%s前",
				s: "几秒",
				m: "1 分钟",
				mm: "%d 分钟",
				h: "1 小时",
				hh: "%d 小时",
				d: "1 天",
				dd: "%d 天",
				M: "1 个月",
				MM: "%d 个月",
				y: "1 年",
				yy: "%d 年"
			},
			meridiem: function(e, _) {
				var t = 100 * e + _;
				return t < 600 ? "凌晨" : t < 900 ? "早上" : t < 1100 ? "上午" : t < 1300 ? "中午" : t < 1800 ? "下午" : "晚上";
			}
		};
		return t.default.locale(d, null, !0), d;
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/locale/zh-tw.js
var require_zh_tw = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(_, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], e) : (_ = "undefined" != typeof globalThis ? globalThis : _ || self).dayjs_locale_zh_tw = e(_.dayjs);
	})(exports, (function(_) {
		"use strict";
		function e(_) {
			return _ && "object" == typeof _ && "default" in _ ? _ : { default: _ };
		}
		var t = e(_), d = {
			name: "zh-tw",
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			ordinal: function(_, e) {
				return "W" === e ? _ + "週" : _ + "日";
			},
			formats: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日dddd HH:mm",
				l: "YYYY/M/D",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			relativeTime: {
				future: "%s內",
				past: "%s前",
				s: "幾秒",
				m: "1 分鐘",
				mm: "%d 分鐘",
				h: "1 小時",
				hh: "%d 小時",
				d: "1 天",
				dd: "%d 天",
				M: "1 個月",
				MM: "%d 個月",
				y: "1 年",
				yy: "%d 年"
			},
			meridiem: function(_, e) {
				var t = 100 * _ + e;
				return t < 600 ? "凌晨" : t < 900 ? "早上" : t < 1100 ? "上午" : t < 1300 ? "中午" : t < 1800 ? "下午" : "晚上";
			}
		};
		return t.default.locale(d, null, !0), d;
	}));
}));
require_de();
require_es();
require_fa();
require_fr();
require_hi();
require_id();
require_it();
require_nl();
require_ja();
require_ko();
require_pl();
require_pt_br();
require_ro();
require_ru();
require_sl();
require_th();
require_tr();
require_uk();
require_vi();
require_zh_cn();
require_zh_tw();
/**
* Formats a number with comma separators.
* @example formatNumber(1234567) will return '1,234,567'
* @example formatNumber(1234567.89) will return '1,234,567.89'
* @example formatNumber(0.0000008) will return '0.0000008'
*/
var formatNumber = (num) => {
	if (!num) return num;
	const n = typeof num === "string" ? Number(num) : num;
	let numStr;
	if (Math.abs(n) < .001 && n !== 0) {
		const str = n.toString();
		const match = /e-(\d+)$/.exec(str);
		let precision;
		if (match) precision = Number.parseInt(match[1], 10) + (str.split("e")[0].split(".")[1]?.length || 0);
		else precision = str.split(".")[1]?.length || 0;
		numStr = n.toFixed(precision);
	} else numStr = n.toString();
	const parts = numStr.split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
};
/**
* Format file size into standard string format.
* @param fileSize file size (Byte)
* @example formatFileSize(1024) will return '1.00 KB'
* @example formatFileSize(1024 * 1024) will return '1.00 MB'
*/
var formatFileSize = (fileSize) => {
	if (!fileSize) return fileSize;
	const units = [
		"",
		"K",
		"M",
		"G",
		"T",
		"P"
	];
	let index = 0;
	while (fileSize >= 1024 && index < units.length) {
		fileSize = fileSize / 1024;
		index++;
	}
	if (index === 0) return `${fileSize.toFixed(2)} bytes`;
	return `${fileSize.toFixed(2)} ${units[index]}B`;
};
/**
* Format time into standard string format.
* @example formatTime(60) will return '1.00 min'
* @example formatTime(60 * 60) will return '1.00 h'
*/
var formatTime = (seconds) => {
	if (!seconds) return seconds;
	const units = [
		"sec",
		"min",
		"h"
	];
	let index = 0;
	while (seconds >= 60 && index < units.length) {
		seconds = seconds / 60;
		index++;
	}
	return `${seconds.toFixed(2)} ${units[index]}`;
};
/**
* Formats a number into a readable string using "k", "M", or "B" suffix.
* @example
* 950     => "950"
* 1200    => "1.2k"
* 1500000 => "1.5M"
* 2000000000 => "2B"
*
* @param {number} num - The number to format
* @returns {string} - The formatted number string
*/
var formatNumberAbbreviated = (num) => {
	if (num < 1e3) return num.toString();
	const units = [
		{
			value: 1e9,
			symbol: "B"
		},
		{
			value: 1e6,
			symbol: "M"
		},
		{
			value: 1e3,
			symbol: "k"
		}
	];
	for (let i = 0; i < units.length; i++) if (num >= units[i].value) {
		const value = num / units[i].value;
		let rounded = Math.round(value * 10) / 10;
		let unitIndex = i;
		if (rounded >= 1e3 && i > 0) {
			rounded = rounded / 1e3;
			unitIndex = i - 1;
		}
		const formatted = rounded.toFixed(1);
		return formatted.endsWith(".0") ? `${Number.parseInt(formatted)}${units[unitIndex].symbol}` : `${formatted}${units[unitIndex].symbol}`;
	}
	return num.toString();
};
var formatToLocalTime = (time, local, format) => {
	return time.locale(localeMap[local] ?? "en").format(format);
};
/**
* Get file extension from file name.
* @param fileName file name
* @example getFileExtension('document.pdf') will return 'pdf'
* @example getFileExtension('archive.tar.gz') will return 'gz'
* @example getFileExtension('.gitignore') will return '' (hidden file with no extension)
* @example getFileExtension('.hidden.txt') will return 'txt'
*/
var getFileExtension = (fileName) => {
	if (!fileName) return "";
	const dotIndex = fileName.indexOf(".", fileName.startsWith(".") ? 1 : 0);
	if (dotIndex === -1 || dotIndex === fileName.length - 1) return "";
	return fileName.slice(dotIndex + 1).split(".").pop()?.toLowerCase() ?? "";
};
//#endregion
export { require_hi as C, require_de as D, require_es as E, require_id as S, require_fa as T, require_pl as _, formatToLocalTime as a, require_nl as b, require_zh_cn as c, require_tr as d, require_th as f, require_pt_br as g, require_ro as h, formatTime as i, require_vi as l, require_ru as m, formatNumber as n, getFileExtension as o, require_sl as p, formatNumberAbbreviated as r, require_zh_tw as s, formatFileSize as t, require_uk as u, require_ko as v, require_fr as w, require_it as x, require_ja as y };
