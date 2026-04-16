import { f as __commonJSMin } from "../index.js";
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/plugin/timezone.js
var require_timezone = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(t, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_timezone = e();
	})(exports, (function() {
		"use strict";
		var t = {
			year: 0,
			month: 1,
			day: 2,
			hour: 3,
			minute: 4,
			second: 5
		}, e = {};
		return function(n, i, o) {
			var r, a = function(t, n, i) {
				void 0 === i && (i = {});
				var o = new Date(t);
				return function(t, n) {
					void 0 === n && (n = {});
					var i = n.timeZoneName || "short", o = t + "|" + i, r = e[o];
					return r || (r = new Intl.DateTimeFormat("en-US", {
						hour12: !1,
						timeZone: t,
						year: "numeric",
						month: "2-digit",
						day: "2-digit",
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
						timeZoneName: i
					}), e[o] = r), r;
				}(n, i).formatToParts(o);
			}, u = function(e, n) {
				for (var i = a(e, n), r = [], u = 0; u < i.length; u += 1) {
					var f = i[u], s = f.type, m = f.value, c = t[s];
					c >= 0 && (r[c] = parseInt(m, 10));
				}
				var d = r[3], l = 24 === d ? 0 : d, h = r[0] + "-" + r[1] + "-" + r[2] + " " + l + ":" + r[4] + ":" + r[5] + ":000", v = +e;
				return (o.utc(h).valueOf() - (v -= v % 1e3)) / 6e4;
			}, f = i.prototype;
			f.tz = function(t, e) {
				void 0 === t && (t = r);
				var n, i = this.utcOffset(), a = this.toDate(), u = a.toLocaleString("en-US", { timeZone: t }), f = Math.round((a - new Date(u)) / 1e3 / 60), s = 15 * -Math.round(a.getTimezoneOffset() / 15) - f;
				if (!Number(s)) n = this.utcOffset(0, e);
				else if (n = o(u, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(s, !0), e) {
					var m = n.utcOffset();
					n = n.add(i - m, "minute");
				}
				return n.$x.$timezone = t, n;
			}, f.offsetName = function(t) {
				var e = this.$x.$timezone || o.tz.guess(), n = a(this.valueOf(), e, { timeZoneName: t }).find((function(t) {
					return "timezonename" === t.type.toLowerCase();
				}));
				return n && n.value;
			};
			var s = f.startOf;
			f.startOf = function(t, e) {
				if (!this.$x || !this.$x.$timezone) return s.call(this, t, e);
				var n = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
				return s.call(n, t, e).tz(this.$x.$timezone, !0);
			}, o.tz = function(t, e, n) {
				var i = n && e, a = n || e || r, f = u(+o(), a);
				if ("string" != typeof t) return o(t).tz(a);
				var s = function(t, e, n) {
					var i = t - 60 * e * 1e3, o = u(i, n);
					if (e === o) return [i, e];
					var r = u(i -= 60 * (o - e) * 1e3, n);
					return o === r ? [i, o] : [t - 60 * Math.min(o, r) * 1e3, Math.max(o, r)];
				}(o.utc(t, i).valueOf(), f, a), m = s[0], c = s[1], d = o(m).utcOffset(c);
				return d.$x.$timezone = a, d;
			}, o.tz.guess = function() {
				return Intl.DateTimeFormat().resolvedOptions().timeZone;
			}, o.tz.setDefault = function(t) {
				r = t;
			};
		};
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/plugin/utc.js
var require_utc = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(t, i) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_utc = i();
	})(exports, (function() {
		"use strict";
		var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
		return function(s, f, n) {
			var u = f.prototype;
			n.utc = function(t) {
				return new f({
					date: t,
					utc: !0,
					args: arguments
				});
			}, u.utc = function(i) {
				var e = n(this.toDate(), {
					locale: this.$L,
					utc: !0
				});
				return i ? e.add(this.utcOffset(), t) : e;
			}, u.local = function() {
				return n(this.toDate(), {
					locale: this.$L,
					utc: !1
				});
			};
			var r = u.parse;
			u.parse = function(t) {
				t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), r.call(this, t);
			};
			var o = u.init;
			u.init = function() {
				if (this.$u) {
					var t = this.$d;
					this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds();
				} else o.call(this);
			};
			var a = u.utcOffset;
			u.utcOffset = function(s, f) {
				var n = this.$utils().u;
				if (n(s)) return this.$u ? 0 : n(this.$offset) ? a.call(this) : this.$offset;
				if ("string" == typeof s && (s = function(t) {
					void 0 === t && (t = "");
					var s = t.match(i);
					if (!s) return null;
					var f = ("" + s[0]).match(e) || [
						"-",
						0,
						0
					], n = f[0], u = 60 * +f[1] + +f[2];
					return 0 === u ? 0 : "+" === n ? u : -u;
				}(s), null === s)) return this;
				var u = Math.abs(s) <= 16 ? 60 * s : s;
				if (0 === u) return this.utc(f);
				var r = this.clone();
				if (f) return r.$offset = u, r.$u = !1, r;
				var o = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
				return (r = this.local().add(u + o, t)).$offset = u, r.$x.$localOffset = o, r;
			};
			var h = u.format;
			u.format = function(t) {
				var i = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
				return h.call(this, i);
			}, u.valueOf = function() {
				var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
				return this.$d.valueOf() - 6e4 * t;
			}, u.isUTC = function() {
				return !!this.$u;
			}, u.toISOString = function() {
				return this.toDate().toISOString();
			}, u.toString = function() {
				return this.toDate().toUTCString();
			};
			var l = u.toDate;
			u.toDate = function(t) {
				return "s" === t && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
			};
			var c = u.diff;
			u.diff = function(t, i, e) {
				if (t && this.$u === t.$u) return c.call(this, t, i, e);
				var s = this.local(), f = n(t).local();
				return c.call(s, f, i, e);
			};
		};
	}));
}));
//#endregion
export { require_timezone as n, require_utc as t };
