import { v as __toESM } from "../index.js";
import { t as clsx } from "./clsx-D-9KtUp9.js";
import { t as require_dayjs_min } from "./dayjs.min-CNlMkMP6.js";
import { t as formEventClient } from "./EventClient-B5hbyI-d.js";
import { t as require_relativeTime } from "./relativeTime-BAkB0A3u.js";
import { A as useContext, D as onMount, E as onCleanup, _ as createMemo, a as ssr, b as createSignal, c as ssrStyleProperty, d as Show, f as Switch, g as createEffect, h as createContext, i as notSup, l as For, m as createComponent, n as escape, o as ssrAttribute, r as memo, u as Match, v as createRenderEffect, w as mergeProps } from "./server-mshjPt2o.js";
import { t as createStore } from "./server-ChDNLTyU.js";
import { C as css, D as ThemeContextProvider, E as u, O as useTheme, c as ErrorCopier, o as CopiedCopier, s as Copier, t as MainPanel, w as useStyles$1 } from "./main-panel-DA_gs2A_.js";
//#region node_modules/.pnpm/@tanstack+devtools-ui@0.5.1_csstype@3.2.3_solid-js@1.9.11/node_modules/@tanstack/devtools-ui/dist/esm/components/tree.js
var import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min(), 1);
var _tmpl$$6 = /* @__PURE__ */ notSup(`<span>`), _tmpl$2$4 = /* @__PURE__ */ notSup(`<span>&quot;<!>&quot;: `), _tmpl$3$1 = /* @__PURE__ */ notSup(`<span>&quot;<!>&quot;`), _tmpl$4 = /* @__PURE__ */ notSup(`<span>null`), _tmpl$5 = /* @__PURE__ */ notSup(`<span>undefined`), _tmpl$6 = /* @__PURE__ */ notSup(`<div>`), _tmpl$7 = /* @__PURE__ */ notSup(`<span>,`), _tmpl$8 = /* @__PURE__ */ notSup(`<span><span>[]`), _tmpl$9 = /* @__PURE__ */ notSup(`<span>...`), _tmpl$0 = /* @__PURE__ */ notSup(`<span><span>[</span><span>]`), _tmpl$1 = /* @__PURE__ */ notSup(`<span>&quot;<!>&quot;: <span> items`), _tmpl$10 = /* @__PURE__ */ notSup(`<span><span>`), _tmpl$11 = /* @__PURE__ */ notSup(`<span><span>\{}`), _tmpl$12 = /* @__PURE__ */ notSup(`<span><span>\{</span><span>}`), _tmpl$13 = /* @__PURE__ */ notSup(`<button title="Copy object to clipboard">`), _tmpl$14 = /* @__PURE__ */ notSup(`<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
function JsonTree(props) {
	return createComponent(JsonValue, {
		isRoot: true,
		get value() {
			return props.value;
		},
		get copyable() {
			return props.copyable;
		},
		depth: 0,
		get defaultExpansionDepth() {
			return props.defaultExpansionDepth ?? 1;
		},
		path: "",
		get collapsePaths() {
			return props.collapsePaths;
		},
		get config() {
			return props.config;
		}
	});
}
function JsonValue(props) {
	const styles = useStyles$1();
	return (() => {
		var _el$ = _tmpl$$6();
		notSup(_el$, (() => {
			var _c$ = memo(() => !!(props.keyName && typeof props.value !== "object" && !Array.isArray(props.value)));
			return () => _c$() && (() => {
				var _el$2 = _tmpl$2$4(), _el$5 = _el$2.firstChild.nextSibling;
				_el$5.nextSibling;
				notSup(_el$2, () => props.keyName, _el$5);
				createRenderEffect(() => notSup(_el$2, styles().tree.valueKey));
				return _el$2;
			})();
		})(), null);
		notSup(_el$, () => {
			if (typeof props.value === "string") return (() => {
				var _el$6 = _tmpl$3$1(), _el$9 = _el$6.firstChild.nextSibling;
				_el$9.nextSibling;
				notSup(_el$6, () => props.value, _el$9);
				createRenderEffect(() => notSup(_el$6, styles().tree.valueString));
				return _el$6;
			})();
			if (typeof props.value === "number") return (() => {
				var _el$0 = _tmpl$$6();
				notSup(_el$0, () => props.value);
				createRenderEffect(() => notSup(_el$0, styles().tree.valueNumber));
				return _el$0;
			})();
			if (typeof props.value === "boolean") return (() => {
				var _el$1 = _tmpl$$6();
				notSup(_el$1, () => String(props.value));
				createRenderEffect(() => notSup(_el$1, styles().tree.valueBoolean));
				return _el$1;
			})();
			if (props.value === null) return (() => {
				var _el$10 = _tmpl$4();
				createRenderEffect(() => notSup(_el$10, styles().tree.valueNull));
				return _el$10;
			})();
			if (props.value === void 0) return (() => {
				var _el$11 = _tmpl$5();
				createRenderEffect(() => notSup(_el$11, styles().tree.valueNull));
				return _el$11;
			})();
			if (typeof props.value === "function") return (() => {
				var _el$12 = _tmpl$$6();
				notSup(_el$12, () => String(props.value));
				createRenderEffect(() => notSup(_el$12, styles().tree.valueFunction));
				return _el$12;
			})();
			if (Array.isArray(props.value)) return createComponent(ArrayValue, {
				get defaultExpansionDepth() {
					return props.defaultExpansionDepth;
				},
				get depth() {
					return props.depth;
				},
				get copyable() {
					return props.copyable;
				},
				get keyName() {
					return props.keyName;
				},
				get value() {
					return props.value;
				},
				get collapsePaths() {
					return props.collapsePaths;
				},
				get path() {
					return props.path;
				},
				get config() {
					return props.config;
				}
			});
			if (typeof props.value === "object") return createComponent(ObjectValue, {
				get defaultExpansionDepth() {
					return props.defaultExpansionDepth;
				},
				get depth() {
					return props.depth;
				},
				get copyable() {
					return props.copyable;
				},
				get keyName() {
					return props.keyName;
				},
				get value() {
					return props.value;
				},
				get collapsePaths() {
					return props.collapsePaths;
				},
				get path() {
					return props.path;
				},
				get config() {
					return props.config;
				}
			});
			return _tmpl$$6();
		}, null);
		notSup(_el$, (() => {
			var _c$2 = memo(() => !!props.copyable);
			return () => _c$2() && (() => {
				var _el$14 = _tmpl$6();
				notSup(_el$14, createComponent(CopyButton, { get value() {
					return props.value;
				} }));
				createRenderEffect(() => notSup(_el$14, clsx(styles().tree.actions, "actions")));
				return _el$14;
			})();
		})(), null);
		notSup(_el$, (() => {
			var _c$3 = memo(() => !!(props.isLastKey || props.isRoot));
			return () => _c$3() ? "" : _tmpl$7();
		})(), null);
		createRenderEffect(() => notSup(_el$, styles().tree.valueContainer(props.isRoot ?? false)));
		return _el$;
	})();
}
var ArrayValue = (props) => {
	const styles = useStyles$1();
	const [expanded, setExpanded] = createSignal(props.depth <= props.defaultExpansionDepth && !props.collapsePaths?.includes(props.path));
	if (props.value.length === 0) return (() => {
		var _el$16 = _tmpl$8(), _el$17 = _el$16.firstChild;
		notSup(_el$16, (() => {
			var _c$4 = memo(() => !!props.keyName);
			return () => _c$4() && (() => {
				var _el$18 = _tmpl$2$4(), _el$21 = _el$18.firstChild.nextSibling;
				_el$21.nextSibling;
				notSup(_el$18, () => props.keyName, _el$21);
				createRenderEffect(() => notSup(_el$18, clsx(styles().tree.valueKey, styles().tree.collapsible)));
				return _el$18;
			})();
		})(), _el$17);
		createRenderEffect((_p$) => {
			var _v$ = styles().tree.expanderContainer, _v$2 = styles().tree.valueBraces;
			_v$ !== _p$.e && notSup(_el$16, _p$.e = _v$);
			_v$2 !== _p$.t && notSup(_el$17, _p$.t = _v$2);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$16;
	})();
	return (() => {
		var _el$22 = _tmpl$0(), _el$23 = _el$22.firstChild, _el$26 = _el$23.nextSibling;
		notSup(_el$22, createComponent(Expander, {
			onClick: () => setExpanded(!expanded()),
			get expanded() {
				return expanded();
			}
		}), _el$23);
		notSup(_el$22, (() => {
			var _c$5 = memo(() => !!props.keyName);
			return () => _c$5() && (() => {
				var _el$27 = _tmpl$1(), _el$33 = _el$27.firstChild.nextSibling, _el$31 = _el$33.nextSibling.nextSibling, _el$32 = _el$31.firstChild;
				_el$27.$$click = (e) => {
					e.stopPropagation();
					e.stopImmediatePropagation();
					setExpanded(!expanded());
				};
				notSup(_el$27, () => props.keyName, _el$33);
				notSup(_el$31, () => props.value.length, _el$32);
				createRenderEffect((_p$) => {
					var _v$6 = clsx(styles().tree.valueKey, styles().tree.collapsible), _v$7 = styles().tree.info;
					_v$6 !== _p$.e && notSup(_el$27, _p$.e = _v$6);
					_v$7 !== _p$.t && notSup(_el$31, _p$.t = _v$7);
					return _p$;
				}, {
					e: void 0,
					t: void 0
				});
				return _el$27;
			})();
		})(), _el$23);
		notSup(_el$22, createComponent(Show, {
			get when() {
				return expanded();
			},
			get children() {
				var _el$24 = _tmpl$$6();
				notSup(_el$24, createComponent(For, {
					get each() {
						return props.value;
					},
					children: (item, i) => {
						return createComponent(JsonValue, {
							get copyable() {
								return props.copyable;
							},
							value: item,
							isLastKey: i() === props.value.length - 1,
							get defaultExpansionDepth() {
								return props.defaultExpansionDepth;
							},
							get depth() {
								return props.depth + 1;
							},
							get collapsePaths() {
								return props.collapsePaths;
							},
							get path() {
								return memo(() => !!props.path)() ? `${props.path}[${i()}]` : `[${i()}]`;
							},
							get config() {
								return props.config;
							}
						});
					}
				}));
				createRenderEffect(() => notSup(_el$24, styles().tree.expandedLine(Boolean(props.keyName))));
				return _el$24;
			}
		}), _el$26);
		notSup(_el$22, createComponent(Show, {
			get when() {
				return !expanded();
			},
			get children() {
				var _el$25 = _tmpl$9();
				_el$25.$$click = (e) => {
					e.stopPropagation();
					e.stopImmediatePropagation();
					setExpanded(!expanded());
				};
				createRenderEffect(() => notSup(_el$25, clsx(styles().tree.valueKey, styles().tree.collapsible)));
				return _el$25;
			}
		}), _el$26);
		createRenderEffect((_p$) => {
			var _v$3 = styles().tree.expanderContainer, _v$4 = styles().tree.valueBraces, _v$5 = styles().tree.valueBraces;
			_v$3 !== _p$.e && notSup(_el$22, _p$.e = _v$3);
			_v$4 !== _p$.t && notSup(_el$23, _p$.t = _v$4);
			_v$5 !== _p$.a && notSup(_el$26, _p$.a = _v$5);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0
		});
		return _el$22;
	})();
};
var ObjectValue = (props) => {
	const styles = useStyles$1();
	const [expanded, setExpanded] = createSignal(props.depth <= props.defaultExpansionDepth && !props.collapsePaths?.includes(props.path));
	const keys = Object.keys(props.value);
	const lastKeyName = keys[keys.length - 1];
	if (props.value instanceof Date) return (() => {
		var _el$34 = _tmpl$10(), _el$35 = _el$34.firstChild;
		notSup(_el$34, (() => {
			var _c$6 = memo(() => !!props.keyName);
			return () => _c$6() && (() => {
				var _el$36 = _tmpl$2$4(), _el$39 = _el$36.firstChild.nextSibling;
				_el$39.nextSibling;
				notSup(_el$36, () => props.keyName, _el$39);
				createRenderEffect(() => notSup(_el$36, clsx(styles().tree.valueKey, styles().tree.collapsible)));
				return _el$36;
			})();
		})(), _el$35);
		notSup(_el$35, () => (0, import_dayjs_min.default)(props.value).format(props.config?.dateFormat ? props.config.dateFormat : "DDMMMYY"));
		createRenderEffect((_p$) => {
			var _v$8 = styles().tree.expanderContainer, _v$9 = styles().tree.valueBraces;
			_v$8 !== _p$.e && notSup(_el$34, _p$.e = _v$8);
			_v$9 !== _p$.t && notSup(_el$35, _p$.t = _v$9);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$34;
	})();
	if (keys.length === 0) return (() => {
		var _el$40 = _tmpl$11(), _el$41 = _el$40.firstChild;
		notSup(_el$40, (() => {
			var _c$7 = memo(() => !!props.keyName);
			return () => _c$7() && (() => {
				var _el$42 = _tmpl$2$4(), _el$45 = _el$42.firstChild.nextSibling;
				_el$45.nextSibling;
				notSup(_el$42, () => props.keyName, _el$45);
				createRenderEffect(() => notSup(_el$42, clsx(styles().tree.valueKey, styles().tree.collapsible)));
				return _el$42;
			})();
		})(), _el$41);
		createRenderEffect((_p$) => {
			var _v$0 = styles().tree.expanderContainer, _v$1 = styles().tree.valueBraces;
			_v$0 !== _p$.e && notSup(_el$40, _p$.e = _v$0);
			_v$1 !== _p$.t && notSup(_el$41, _p$.t = _v$1);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$40;
	})();
	return (() => {
		var _el$46 = _tmpl$12(), _el$47 = _el$46.firstChild, _el$50 = _el$47.nextSibling;
		notSup(_el$46, (() => {
			var _c$8 = memo(() => !!props.keyName);
			return () => _c$8() && createComponent(Expander, {
				onClick: () => setExpanded(!expanded()),
				get expanded() {
					return expanded();
				}
			});
		})(), _el$47);
		notSup(_el$46, (() => {
			var _c$9 = memo(() => !!props.keyName);
			return () => _c$9() && (() => {
				var _el$51 = _tmpl$1(), _el$57 = _el$51.firstChild.nextSibling, _el$55 = _el$57.nextSibling.nextSibling, _el$56 = _el$55.firstChild;
				_el$51.$$click = (e) => {
					e.stopPropagation();
					e.stopImmediatePropagation();
					setExpanded(!expanded());
				};
				notSup(_el$51, () => props.keyName, _el$57);
				notSup(_el$55, () => keys.length, _el$56);
				createRenderEffect((_p$) => {
					var _v$13 = clsx(styles().tree.valueKey, styles().tree.collapsible), _v$14 = styles().tree.info;
					_v$13 !== _p$.e && notSup(_el$51, _p$.e = _v$13);
					_v$14 !== _p$.t && notSup(_el$55, _p$.t = _v$14);
					return _p$;
				}, {
					e: void 0,
					t: void 0
				});
				return _el$51;
			})();
		})(), _el$47);
		notSup(_el$46, createComponent(Show, {
			get when() {
				return expanded();
			},
			get children() {
				var _el$48 = _tmpl$$6();
				notSup(_el$48, createComponent(For, {
					each: keys,
					children: (k) => createComponent(JsonValue, {
						get value() {
							return props.value[k];
						},
						keyName: k,
						isLastKey: lastKeyName === k,
						get copyable() {
							return props.copyable;
						},
						get defaultExpansionDepth() {
							return props.defaultExpansionDepth;
						},
						get depth() {
							return props.depth + 1;
						},
						get collapsePaths() {
							return props.collapsePaths;
						},
						get path() {
							return `${props.path}${props.path ? "." : ""}${k}`;
						},
						get config() {
							return props.config;
						}
					})
				}));
				createRenderEffect(() => notSup(_el$48, styles().tree.expandedLine(Boolean(props.keyName))));
				return _el$48;
			}
		}), _el$50);
		notSup(_el$46, createComponent(Show, {
			get when() {
				return !expanded();
			},
			get children() {
				var _el$49 = _tmpl$9();
				_el$49.$$click = (e) => {
					e.stopPropagation();
					e.stopImmediatePropagation();
					setExpanded(!expanded());
				};
				createRenderEffect(() => notSup(_el$49, clsx(styles().tree.valueKey, styles().tree.collapsible)));
				return _el$49;
			}
		}), _el$50);
		createRenderEffect((_p$) => {
			var _v$10 = styles().tree.expanderContainer, _v$11 = styles().tree.valueBraces, _v$12 = styles().tree.valueBraces;
			_v$10 !== _p$.e && notSup(_el$46, _p$.e = _v$10);
			_v$11 !== _p$.t && notSup(_el$47, _p$.t = _v$11);
			_v$12 !== _p$.a && notSup(_el$50, _p$.a = _v$12);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0
		});
		return _el$46;
	})();
};
var CopyButton = (props) => {
	const styles = useStyles$1();
	const [copyState, setCopyState] = createSignal("NoCopy");
	return (() => {
		var _el$58 = _tmpl$13();
		notSup(_el$58, "click", copyState() === "NoCopy" ? () => {
			navigator.clipboard.writeText(JSON.stringify(props.value, null, 2)).then(() => {
				setCopyState("SuccessCopy");
				setTimeout(() => {
					setCopyState("NoCopy");
				}, 1500);
			}, (err) => {
				console.error("Failed to copy: ", err);
				setCopyState("ErrorCopy");
				setTimeout(() => {
					setCopyState("NoCopy");
				}, 1500);
			});
		} : void 0, true);
		notSup(_el$58, createComponent(Switch, { get children() {
			return [
				createComponent(Match, {
					get when() {
						return copyState() === "NoCopy";
					},
					get children() {
						return createComponent(Copier, {});
					}
				}),
				createComponent(Match, {
					get when() {
						return copyState() === "SuccessCopy";
					},
					get children() {
						return createComponent(CopiedCopier, { theme: "dark" });
					}
				}),
				createComponent(Match, {
					get when() {
						return copyState() === "ErrorCopy";
					},
					get children() {
						return createComponent(ErrorCopier, {});
					}
				})
			];
		} }));
		createRenderEffect((_p$) => {
			var _v$15 = styles().tree.actionButton, _v$16 = `${copyState() === "NoCopy" ? "Copy object to clipboard" : copyState() === "SuccessCopy" ? "Object copied to clipboard" : "Error copying object to clipboard"}`;
			_v$15 !== _p$.e && notSup(_el$58, _p$.e = _v$15);
			_v$16 !== _p$.t && notSup(_el$58, "aria-label", _p$.t = _v$16);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$58;
	})();
};
var Expander = (props) => {
	const styles = useStyles$1();
	return (() => {
		var _el$59 = _tmpl$14();
		notSup(_el$59, "click", props.onClick, true);
		createRenderEffect(() => notSup(_el$59, clsx(styles().tree.expander, css`
          transform: rotate(${props.expanded ? 90 : 0}deg);
        `, props.expanded && css`
            & svg {
              top: -1px;
            }
          `)));
		return _el$59;
	})();
};
notSup(["click"]);
//#endregion
//#region node_modules/.pnpm/@tanstack+devtools-ui@0.5.1_csstype@3.2.3_solid-js@1.9.11/node_modules/@tanstack/devtools-ui/dist/esm/components/header.js
var _tmpl$$5 = /* @__PURE__ */ notSup(`<header>`), _tmpl$2$3 = /* @__PURE__ */ notSup(`<div><button><span>TANSTACK</span><span>`);
function Header({ children, class: className, ...rest }) {
	const styles = useStyles$1();
	return (() => {
		var _el$ = _tmpl$$5();
		notSup(_el$, mergeProps({ get ["class"]() {
			return clsx(styles().header.row, "tsqd-header", className);
		} }, rest), false, true);
		notSup(_el$, children);
		return _el$;
	})();
}
function HeaderLogo({ children, flavor, onClick }) {
	const styles = useStyles$1();
	return (() => {
		var _el$2 = _tmpl$2$3(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling;
		notSup(_el$3, "click", onClick, true);
		notSup(_el$5, children);
		createRenderEffect((_p$) => {
			var _v$ = styles().header.logoAndToggleContainer, _v$2 = clsx(styles().header.logo), _v$3 = clsx(styles().header.tanstackLogo), _v$4 = clsx(styles().header.flavorLogo(flavor.light, flavor.dark));
			_v$ !== _p$.e && notSup(_el$2, _p$.e = _v$);
			_v$2 !== _p$.t && notSup(_el$3, _p$.t = _v$2);
			_v$3 !== _p$.a && notSup(_el$4, _p$.a = _v$3);
			_v$4 !== _p$.o && notSup(_el$5, _p$.o = _v$4);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0
		});
		return _el$2;
	})();
}
notSup(["click"]);
//#endregion
//#region node_modules/.pnpm/@tanstack+form-devtools@0.2.19_@types+react@19.2.14_csstype@3.2.3_react@19.2.4_solid-js@1.9.11/node_modules/@tanstack/form-devtools/dist/components-Cf-o9eLg.js
var import_relativeTime = /* @__PURE__ */ __toESM(require_relativeTime(), 1);
function useProviderValue() {
	const [store, setStore] = createStore([]);
	createEffect(() => {
		onCleanup(formEventClient.on("form-api", (e) => {
			const id = e.payload.id;
			const existingIndex = store.findIndex((item) => item.id === id);
			if (existingIndex > -1) setStore(existingIndex, {
				state: e.payload.state,
				options: e.payload.options,
				date: (0, import_dayjs_min.default)()
			});
			else setStore((prev) => [...prev, {
				id,
				state: e.payload.state,
				options: e.payload.options,
				date: (0, import_dayjs_min.default)(),
				history: []
			}]);
		}));
	});
	createEffect(() => {
		onCleanup(formEventClient.on("form-state", (e) => {
			const id = e.payload.id;
			const existingIndex = store.findIndex((item) => item.id === id);
			if (existingIndex > -1) setStore(existingIndex, {
				state: e.payload.state,
				date: (0, import_dayjs_min.default)()
			});
			else setStore((prev) => [...prev, {
				id,
				state: e.payload.state,
				options: {},
				date: (0, import_dayjs_min.default)(),
				history: []
			}]);
		}));
	});
	createEffect(() => {
		onCleanup(formEventClient.on("form-submission", (e) => {
			const id = e.payload.id;
			const existingIndex = store.findIndex((item) => item.id === id);
			if (existingIndex > -1 && store[existingIndex]) {
				const { id: _, ...rest } = e.payload;
				setStore(existingIndex, "history", [rest, ...store[existingIndex].history].slice(0, 5));
			}
		}));
	});
	createEffect(() => {
		onCleanup(formEventClient.on("form-unmounted", (e) => {
			setStore((prev) => prev.filter((item) => item.id !== e.payload.id));
		}));
	});
	return { store };
}
var FormEventClientContext = createContext(void 0);
var FormEventClientProvider = (props) => {
	const value = useProviderValue();
	return createComponent(FormEventClientContext.Provider, {
		value,
		get children() {
			return props.children;
		}
	});
};
function useFormEventClient() {
	const context = useContext(FormEventClientContext);
	if (context === void 0) throw new Error(`useFormEventClient must be used within a FormEventClientContext`);
	return { store: createMemo(() => context.store) };
}
var tokens = {
	colors: {
		inherit: "inherit",
		current: "currentColor",
		transparent: "transparent",
		black: "#000000",
		white: "#ffffff",
		neutral: {
			50: "#f9fafb",
			100: "#f2f4f7",
			200: "#eaecf0",
			300: "#d0d5dd",
			400: "#98a2b3",
			500: "#667085",
			600: "#475467",
			700: "#344054",
			800: "#1d2939",
			900: "#101828"
		},
		darkGray: {
			50: "#525c7a",
			100: "#49536e",
			200: "#414962",
			300: "#394056",
			400: "#313749",
			500: "#292e3d",
			600: "#212530",
			700: "#191c24",
			800: "#111318",
			900: "#0b0d10"
		},
		gray: {
			50: "#f9fafb",
			100: "#f2f4f7",
			200: "#eaecf0",
			300: "#d0d5dd",
			400: "#98a2b3",
			500: "#667085",
			600: "#475467",
			700: "#344054",
			800: "#1d2939",
			900: "#101828"
		},
		blue: {
			25: "#F5FAFF",
			50: "#EFF8FF",
			100: "#D1E9FF",
			200: "#B2DDFF",
			300: "#84CAFF",
			400: "#53B1FD",
			500: "#2E90FA",
			600: "#1570EF",
			700: "#175CD3",
			800: "#1849A9",
			900: "#194185"
		},
		green: {
			25: "#F6FEF9",
			50: "#ECFDF3",
			100: "#D1FADF",
			200: "#A6F4C5",
			300: "#6CE9A6",
			400: "#32D583",
			500: "#12B76A",
			600: "#039855",
			700: "#027A48",
			800: "#05603A",
			900: "#054F31"
		},
		red: {
			50: "#fef2f2",
			100: "#fee2e2",
			200: "#fecaca",
			300: "#fca5a5",
			400: "#f87171",
			500: "#ef4444",
			600: "#dc2626",
			700: "#b91c1c",
			800: "#991b1b",
			900: "#7f1d1d",
			950: "#450a0a"
		},
		yellow: {
			25: "#FFFCF5",
			50: "#FFFAEB",
			100: "#FEF0C7",
			200: "#FEDF89",
			300: "#FEC84B",
			400: "#FDB022",
			500: "#F79009",
			600: "#DC6803",
			700: "#B54708",
			800: "#93370D",
			900: "#7A2E0E"
		},
		purple: {
			25: "#FAFAFF",
			50: "#F4F3FF",
			100: "#EBE9FE",
			200: "#D9D6FE",
			300: "#BDB4FE",
			400: "#9B8AFB",
			500: "#7A5AF8",
			600: "#6938EF",
			700: "#5925DC",
			800: "#4A1FB8",
			900: "#3E1C96"
		},
		teal: {
			25: "#F6FEFC",
			50: "#F0FDF9",
			100: "#CCFBEF",
			200: "#99F6E0",
			300: "#5FE9D0",
			400: "#2ED3B7",
			500: "#15B79E",
			600: "#0E9384",
			700: "#107569",
			800: "#125D56",
			900: "#134E48"
		},
		pink: {
			25: "#fdf2f8",
			50: "#fce7f3",
			100: "#fbcfe8",
			200: "#f9a8d4",
			300: "#f472b6",
			400: "#ec4899",
			500: "#db2777",
			600: "#be185d",
			700: "#9d174d",
			800: "#831843",
			900: "#500724"
		},
		cyan: {
			25: "#ecfeff",
			50: "#cffafe",
			100: "#a5f3fc",
			200: "#67e8f9",
			300: "#22d3ee",
			400: "#06b6d4",
			500: "#0891b2",
			600: "#0e7490",
			700: "#155e75",
			800: "#164e63",
			900: "#083344"
		}
	},
	alpha: {
		100: "ff",
		90: "e5",
		80: "cc",
		70: "b3",
		60: "99",
		50: "80",
		40: "66",
		30: "4d",
		20: "33",
		10: "1a",
		0: "00"
	},
	font: {
		size: {
			"2xs": "calc(var(--tsrd-font-size) * 0.625)",
			xs: "calc(var(--tsrd-font-size) * 0.75)",
			sm: "calc(var(--tsrd-font-size) * 0.875)",
			md: "var(--tsrd-font-size)",
			lg: "calc(var(--tsrd-font-size) * 1.125)",
			xl: "calc(var(--tsrd-font-size) * 1.25)",
			"2xl": "calc(var(--tsrd-font-size) * 1.5)",
			"3xl": "calc(var(--tsrd-font-size) * 1.875)",
			"4xl": "calc(var(--tsrd-font-size) * 2.25)",
			"5xl": "calc(var(--tsrd-font-size) * 3)",
			"6xl": "calc(var(--tsrd-font-size) * 3.75)",
			"7xl": "calc(var(--tsrd-font-size) * 4.5)",
			"8xl": "calc(var(--tsrd-font-size) * 6)",
			"9xl": "calc(var(--tsrd-font-size) * 8)"
		},
		lineHeight: {
			"3xs": "calc(var(--tsrd-font-size) * 0.75)",
			"2xs": "calc(var(--tsrd-font-size) * 0.875)",
			xs: "calc(var(--tsrd-font-size) * 1)",
			sm: "calc(var(--tsrd-font-size) * 1.25)",
			md: "calc(var(--tsrd-font-size) * 1.5)",
			lg: "calc(var(--tsrd-font-size) * 1.75)",
			xl: "calc(var(--tsrd-font-size) * 2)",
			"2xl": "calc(var(--tsrd-font-size) * 2.25)",
			"3xl": "calc(var(--tsrd-font-size) * 2.5)",
			"4xl": "calc(var(--tsrd-font-size) * 2.75)",
			"5xl": "calc(var(--tsrd-font-size) * 3)",
			"6xl": "calc(var(--tsrd-font-size) * 3.25)",
			"7xl": "calc(var(--tsrd-font-size) * 3.5)",
			"8xl": "calc(var(--tsrd-font-size) * 3.75)",
			"9xl": "calc(var(--tsrd-font-size) * 4)"
		},
		weight: {
			thin: "100",
			extralight: "200",
			light: "300",
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "800",
			black: "900"
		},
		fontFamily: {
			sans: "ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",
			mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`
		}
	},
	breakpoints: {
		xs: "320px",
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		"2xl": "1536px"
	},
	border: { radius: {
		none: "0px",
		xs: "calc(var(--tsrd-font-size) * 0.125)",
		sm: "calc(var(--tsrd-font-size) * 0.25)",
		md: "calc(var(--tsrd-font-size) * 0.375)",
		lg: "calc(var(--tsrd-font-size) * 0.5)",
		xl: "calc(var(--tsrd-font-size) * 0.75)",
		"2xl": "calc(var(--tsrd-font-size) * 1)",
		"3xl": "calc(var(--tsrd-font-size) * 1.5)",
		full: "9999px"
	} },
	size: {
		0: "0px",
		.25: "calc(var(--tsrd-font-size) * 0.0625)",
		.5: "calc(var(--tsrd-font-size) * 0.125)",
		1: "calc(var(--tsrd-font-size) * 0.25)",
		1.5: "calc(var(--tsrd-font-size) * 0.375)",
		2: "calc(var(--tsrd-font-size) * 0.5)",
		2.5: "calc(var(--tsrd-font-size) * 0.625)",
		3: "calc(var(--tsrd-font-size) * 0.75)",
		3.5: "calc(var(--tsrd-font-size) * 0.875)",
		4: "calc(var(--tsrd-font-size) * 1)",
		4.5: "calc(var(--tsrd-font-size) * 1.125)",
		5: "calc(var(--tsrd-font-size) * 1.25)",
		5.5: "calc(var(--tsrd-font-size) * 1.375)",
		6: "calc(var(--tsrd-font-size) * 1.5)",
		6.5: "calc(var(--tsrd-font-size) * 1.625)",
		7: "calc(var(--tsrd-font-size) * 1.75)",
		8: "calc(var(--tsrd-font-size) * 2)",
		9: "calc(var(--tsrd-font-size) * 2.25)",
		10: "calc(var(--tsrd-font-size) * 2.5)",
		11: "calc(var(--tsrd-font-size) * 2.75)",
		12: "calc(var(--tsrd-font-size) * 3)",
		14: "calc(var(--tsrd-font-size) * 3.5)",
		16: "calc(var(--tsrd-font-size) * 4)",
		20: "calc(var(--tsrd-font-size) * 5)",
		24: "calc(var(--tsrd-font-size) * 6)",
		28: "calc(var(--tsrd-font-size) * 7)",
		32: "calc(var(--tsrd-font-size) * 8)",
		36: "calc(var(--tsrd-font-size) * 9)",
		40: "calc(var(--tsrd-font-size) * 10)",
		44: "calc(var(--tsrd-font-size) * 11)",
		48: "calc(var(--tsrd-font-size) * 12)",
		52: "calc(var(--tsrd-font-size) * 13)",
		56: "calc(var(--tsrd-font-size) * 14)",
		60: "calc(var(--tsrd-font-size) * 15)",
		64: "calc(var(--tsrd-font-size) * 16)",
		72: "calc(var(--tsrd-font-size) * 18)",
		80: "calc(var(--tsrd-font-size) * 20)",
		96: "calc(var(--tsrd-font-size) * 24)"
	},
	shadow: {
		xs: (_ = "rgb(0 0 0 / 0.1)") => `0 1px 2px 0 rgb(0 0 0 / 0.05)`,
		sm: (color = "rgb(0 0 0 / 0.1)") => `0 1px 3px 0 ${color}, 0 1px 2px -1px ${color}`,
		md: (color = "rgb(0 0 0 / 0.1)") => `0 4px 6px -1px ${color}, 0 2px 4px -2px ${color}`,
		lg: (color = "rgb(0 0 0 / 0.1)") => `0 10px 15px -3px ${color}, 0 4px 6px -4px ${color}`,
		xl: (color = "rgb(0 0 0 / 0.1)") => `0 20px 25px -5px ${color}, 0 8px 10px -6px ${color}`,
		"2xl": (color = "rgb(0 0 0 / 0.25)") => `0 25px 50px -12px ${color}`,
		inner: (color = "rgb(0 0 0 / 0.05)") => `inset 0 2px 4px 0 ${color}`,
		none: () => `none`
	},
	zIndices: {
		hide: -1,
		auto: "auto",
		base: 0,
		docked: 10,
		dropdown: 1e3,
		sticky: 1100,
		banner: 1200,
		overlay: 1300,
		modal: 1400,
		popover: 1500,
		skipLink: 1600,
		toast: 1700,
		tooltip: 1800
	}
};
var stylesFactory = (theme) => {
	const { colors, font, size, alpha, border } = tokens;
	const { fontFamily, size: fontSize } = font;
	const css = u;
	const t = (light, dark) => theme === "light" ? light : dark;
	return {
		mainContainer: css`
      display: flex;
      flex: 1;
      min-height: 80%;
      overflow: hidden;
      padding: ${size[2]};
    `,
		dragHandle: css`
      width: 8px;
      background: ${t(colors.gray[300], colors.darkGray[600])};
      cursor: col-resize;
      position: relative;
      transition: all 0.2s ease;
      user-select: none;
      pointer-events: all;
      margin: 0 ${size[1]};
      border-radius: 2px;

      &:hover {
        background: ${t(colors.blue[600], colors.blue[500])};
        margin: 0 ${size[1]};
      }

      &.dragging {
        background: ${t(colors.blue[700], colors.blue[600])};
        margin: 0 ${size[1]};
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 2px;
        height: 20px;
        background: ${t(colors.gray[400], colors.darkGray[400])};
        border-radius: 1px;
        pointer-events: none;
      }

      &:hover::after,
      &.dragging::after {
        background: ${t(colors.blue[500], colors.blue[300])};
      }
    `,
		leftPanel: css`
      background: ${t(colors.gray[100], colors.darkGray[800])};
      border-radius: ${border.radius.lg};
      border: 1px solid ${t(colors.gray[200], colors.darkGray[700])};
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-height: 0;
      flex-shrink: 0;
    `,
		rightPanel: css`
      background: ${t(colors.gray[100], colors.darkGray[800])};
      border-radius: ${border.radius.lg};
      border: 1px solid ${t(colors.gray[200], colors.darkGray[700])};
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-height: 0;
      flex: 1;
    `,
		panelHeader: css`
      font-size: ${fontSize.md};
      font-weight: ${font.weight.bold};
      color: ${t(colors.blue[700], colors.blue[400])};
      padding: ${size[2]};
      border-bottom: 1px solid ${t(colors.gray[200], colors.darkGray[700])};
      background: ${t(colors.gray[100], colors.darkGray[800])};
      flex-shrink: 0;
    `,
		utilList: css`
      flex: 1;
      overflow-y: auto;
      padding: ${size[1]};
      min-height: 0;
    `,
		utilGroup: css`
      margin-bottom: ${size[2]};
    `,
		utilGroupHeader: css`
      font-size: ${fontSize.xs};
      font-weight: ${font.weight.semibold};
      color: ${t(colors.gray[600], colors.gray[400])};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: ${size[1]};
      padding: ${size[1]} ${size[2]};
      background: ${t(colors.gray[200], colors.darkGray[700])};
      border-radius: ${border.radius.md};
    `,
		utilRow: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${size[2]};
      margin-bottom: ${size[1]};
      background: ${t(colors.gray[200], colors.darkGray[700])};
      border-radius: ${border.radius.md};
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid transparent;

      &:hover {
        background: ${t(colors.gray[300], colors.darkGray[600])};
        border-color: ${t(colors.gray[400], colors.darkGray[500])};
      }
    `,
		utilRowSelected: css`
      background: ${t(colors.blue[100], colors.blue[900] + alpha[20])};
      border-color: ${t(colors.blue[600], colors.blue[500])};
      box-shadow: 0 0 0 1px
        ${t(colors.blue[600] + alpha[30], colors.blue[500] + alpha[30])};
    `,
		utilKey: css`
      font-family: ${fontFamily.mono};
      font-size: ${fontSize.xs};
      color: ${t(colors.gray[900], colors.gray[100])};
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,
		utilStatus: css`
      font-size: ${fontSize.xs};
      color: ${t(colors.gray[600], colors.gray[400])};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: ${size[1]} ${size[1]};
      background: ${t(colors.gray[300], colors.darkGray[600])};
      border-radius: ${border.radius.sm};
      margin-left: ${size[1]};
    `,
		stateDetails: css`
      flex: 1;
      overflow-y: auto;
      padding: ${size[2]};
      min-height: 0;
    `,
		stateHeader: css`
      margin-bottom: ${size[2]};
      padding-bottom: ${size[2]};
      border-bottom: 1px solid ${t(colors.gray[200], colors.darkGray[700])};
    `,
		stateTitle: css`
      font-size: ${fontSize.md};
      font-weight: ${font.weight.bold};
      color: ${t(colors.blue[700], colors.blue[400])};
      margin-bottom: ${size[1]};
    `,
		stateKey: css`
      font-family: ${fontFamily.mono};
      font-size: ${fontSize.xs};
      color: ${t(colors.gray[600], colors.gray[400])};
      word-break: break-all;
    `,
		stateContent: css`
      background: ${t(colors.gray[100], colors.darkGray[700])};
      border-radius: ${border.radius.md};
      padding: ${size[2]};
      border: 1px solid ${t(colors.gray[300], colors.darkGray[600])};
    `,
		detailsGrid: css`
      display: grid;
      grid-template-columns: 1fr;
      gap: ${size[2]};
      align-items: start;
    `,
		detailSection: css`
      background: ${t(colors.white, colors.darkGray[700])};
      border: 1px solid ${t(colors.gray[300], colors.darkGray[600])};
      border-radius: ${border.radius.md};
      padding: ${size[2]};
    `,
		detailSectionHeader: css`
      font-size: ${fontSize.sm};
      font-weight: ${font.weight.bold};
      color: ${t(colors.gray[800], colors.gray[200])};
      margin-bottom: ${size[1]};
      text-transform: uppercase;
      letter-spacing: 0.04em;
    `,
		actionsRow: css`
      display: flex;
      flex-wrap: wrap;
      gap: ${size[2]};
    `,
		actionButton: css`
      display: inline-flex;
      align-items: center;
      gap: ${size[1]};
      padding: ${size[1]} ${size[2]};
      border-radius: ${border.radius.md};
      border: 1px solid ${t(colors.gray[300], colors.darkGray[500])};
      background: ${t(colors.gray[200], colors.darkGray[600])};
      color: ${t(colors.gray[900], colors.gray[100])};
      font-size: ${fontSize.xs};
      cursor: pointer;
      user-select: none;
      transition:
        background 0.15s,
        border-color 0.15s;
      &:hover {
        background: ${t(colors.gray[300], colors.darkGray[500])};
        border-color: ${t(colors.gray[400], colors.darkGray[400])};
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        &:hover {
          background: ${t(colors.gray[200], colors.darkGray[600])};
          border-color: ${t(colors.gray[300], colors.darkGray[500])};
        }
      }
    `,
		actionDotBlue: css`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${colors.blue[400]};
    `,
		actionDotGreen: css`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${colors.green[400]};
    `,
		actionDotRed: css`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${colors.red[400]};
    `,
		actionDotYellow: css`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${colors.yellow[400]};
    `,
		actionDotOrange: css`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${colors.pink[400]};
    `,
		actionDotPurple: css`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${colors.purple[400]};
    `,
		infoGrid: css`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${size[1]};
      row-gap: ${size[1]};
      align-items: center;
    `,
		infoLabel: css`
      color: ${t(colors.gray[600], colors.gray[400])};
      font-size: ${fontSize.xs};
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `,
		infoValueMono: css`
      font-family: ${fontFamily.mono};
      font-size: ${fontSize.xs};
      color: ${t(colors.gray[900], colors.gray[100])};
      word-break: break-all;
    `,
		noSelection: css`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${t(colors.gray[500], colors.gray[500])};
      font-style: italic;
      text-align: center;
      padding: ${size[4]};
    `,
		sectionContainer: css`
      display: flex;
      flex-wrap: wrap;
      gap: ${size[4]};
    `,
		section: css`
      background: ${t(colors.gray[100], colors.darkGray[800])};
      border-radius: ${border.radius.lg};
      box-shadow: ${tokens.shadow.md(t(colors.gray[400] + alpha[80], colors.black + alpha[80]))};
      padding: ${size[4]};
      margin-bottom: ${size[4]};
      border: 1px solid ${t(colors.gray[200], colors.darkGray[700])};
      min-width: 0;
      max-width: 33%;
      max-height: fit-content;
    `,
		sectionHeader: css`
      font-size: ${fontSize.lg};
      font-weight: ${font.weight.bold};
      margin-bottom: ${size[2]};
      color: ${t(colors.blue[600], colors.blue[400])};
      letter-spacing: 0.01em;
      display: flex;
      align-items: center;
      gap: ${size[2]};
    `,
		sectionEmpty: css`
      color: ${t(colors.gray[500], colors.gray[500])};
      font-size: ${fontSize.sm};
      font-style: italic;
      margin: ${size[2]} 0;
    `,
		instanceList: css`
      display: flex;
      flex-direction: column;
      gap: ${size[2]};
      background: ${t(colors.gray[200], colors.darkGray[700])};
      border: 1px solid ${t(colors.gray[300], colors.darkGray[600])};
    `,
		instanceCard: css`
      background: ${t(colors.gray[200], colors.darkGray[700])};
      border-radius: ${border.radius.md};
      padding: ${size[3]};
      border: 1px solid ${t(colors.gray[300], colors.darkGray[600])};
      font-size: ${fontSize.sm};
      color: ${t(colors.gray[900], colors.gray[100])};
      font-family: ${fontFamily.mono};
      overflow-x: auto;
      transition:
        box-shadow 0.3s,
        background 0.3s;
    `
	};
};
function useStyles() {
	const { theme } = useTheme();
	const [styles, setStyles] = createSignal(stylesFactory(theme()));
	createEffect(() => {
		setStyles(stylesFactory(theme()));
	});
	return styles;
}
var _tmpl$$4 = [
	"<div",
	">",
	"</div>"
], _tmpl$2$2 = [
	"<div",
	"><div",
	">",
	"</div></div>"
];
function UtilList(props) {
	const styles = useStyles();
	const { store } = useFormEventClient();
	return ssr(_tmpl$$4, ssrAttribute("class", escape(styles().utilList, true), false), store().length > 0 && ssr(_tmpl$$4, ssrAttribute("class", escape(styles().utilGroup, true), false), escape(createComponent(For, {
		get each() {
			return store();
		},
		children: (instance) => {
			return ssr(_tmpl$2$2, ssrAttribute("class", escape(clsx(styles().utilRow, props.selectedKey() === instance.id && styles().utilRowSelected), true), false), ssrAttribute("class", escape(styles().utilKey, true), false), escape(instance.id));
		}
	}))));
}
var _tmpl$$3 = [
	"<div",
	"><button",
	"><span",
	"></span>Flush</button><button",
	"><span",
	"></span>Reset</button><button",
	"><span",
	"></span>Submit (-f)</button></div>"
];
function ActionButtons(props) {
	const styles = useStyles();
	return ssr(_tmpl$$3, ssrAttribute("class", escape(styles().actionsRow, true), false), ssrAttribute("class", escape(styles().actionButton, true), false), ssrAttribute("class", escape(styles().actionDotGreen, true), false), ssrAttribute("class", escape(styles().actionButton, true), false), ssrAttribute("class", escape(styles().actionDotRed, true), false), ssrAttribute("class", escape(styles().actionButton, true), false), ssrAttribute("class", escape(styles().actionDotYellow, true), false));
}
var _tmpl$$2 = [
	"<div",
	"><div",
	">Form state</div><div style=\"",
	"\"><div",
	"><div",
	">Key</div><div",
	">",
	"</div><div",
	">Last Updated</div><div",
	">",
	" (",
	")</div></div></div></div>"
];
import_dayjs_min.default.extend(import_relativeTime.default);
function StateHeader(props) {
	const styles = useStyles();
	const [now, setNow] = createSignal((0, import_dayjs_min.default)().unix());
	onMount(() => {
		const interval = setInterval(() => setNow((0, import_dayjs_min.default)().unix()), 1e3);
		onCleanup(() => clearInterval(interval));
	});
	const state = props.selectedInstance;
	const updatedAt = createMemo(() => state()?.date.unix() ?? (0, import_dayjs_min.default)().unix());
	const relativeTimeText = createMemo(() => {
		const diffSeconds = Math.max(now() - updatedAt(), 0);
		if (diffSeconds < 60) return `${diffSeconds} second${diffSeconds !== 1 ? "s" : ""} ago`;
		return import_dayjs_min.default.unix(updatedAt()).fromNow();
	});
	if (!state()) return null;
	return ssr(_tmpl$$2, ssrAttribute("class", escape(styles().stateHeader, true), false), ssrAttribute("class", escape(styles().stateTitle, true), false), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";gap:", "16px"), ssrAttribute("class", escape(styles().infoGrid, true), false), ssrAttribute("class", escape(styles().infoLabel, true), false), ssrAttribute("class", escape(styles().infoValueMono, true), false), escape(state().id), ssrAttribute("class", escape(styles().infoLabel, true), false), ssrAttribute("class", escape(styles().infoValueMono, true), false), escape((/* @__PURE__ */ new Date(updatedAt() * 1e3)).toLocaleTimeString()), escape(relativeTimeText()));
}
var _tmpl$$1 = [
	"<div",
	"><div",
	"><div",
	">Actions</div>",
	"</div><div",
	"><div",
	">Individual Fields</div><div style=\"",
	"\">",
	"</div></div><div",
	"><div",
	">Form values</div><div",
	">",
	"</div></div><div",
	"><div",
	">Form status</div><div",
	">",
	"</div></div><div",
	"><div",
	">Form options</div><div",
	">",
	"</div></div><div",
	"><div",
	">Submission history</div><div",
	">",
	"</div></div></div>"
], _tmpl$2$1 = [
	"<div",
	">",
	"</div>"
], _tmpl$3 = [
	"<div",
	" style=\"",
	"\"><div style=\"",
	"\">",
	"</div>",
	"</div>"
];
function DetailsPanel({ selectedKey }) {
	const styles = useStyles();
	const { store } = useFormEventClient();
	const selectedIndex = createMemo(() => store().findIndex((f) => f.id === selectedKey()));
	const selectedInstance = createMemo(() => selectedIndex() > -1 ? store()[selectedIndex()] : null);
	const state = createMemo(() => selectedInstance()?.state);
	const formStatus = createMemo(() => ({
		canSubmit: state()?.canSubmit,
		isFormValid: state()?.isFormValid,
		isFormValidating: state()?.isFormValidating,
		isSubmitted: state()?.isSubmitted,
		isSubmitting: state()?.isSubmitting,
		isSubmitSuccessful: state()?.isSubmitSuccessful,
		submissionAttempts: state()?.submissionAttempts,
		errors: state()?.errors,
		errorMap: state()?.errorMap
	}));
	const individualFields = createMemo(() => {
		const fields = {};
		const values = state()?.values || {};
		const fieldMeta = state()?.fieldMeta || {};
		Object.keys(values).forEach((key) => {
			fields[key] = {
				value: values[key],
				meta: fieldMeta[key]
			};
		});
		return fields;
	});
	return ssr(_tmpl$2$1, ssrAttribute("class", escape(styles().stateDetails, true), false), escape(createComponent(Show, {
		get when() {
			return selectedInstance();
		},
		get children() {
			return [createComponent(StateHeader, { selectedInstance }), ssr(_tmpl$$1, ssrAttribute("class", escape(styles().detailsGrid, true), false), ssrAttribute("class", escape(styles().detailSection, true), false), ssrAttribute("class", escape(styles().detailSectionHeader, true), false), escape(createComponent(ActionButtons, { selectedInstance })), ssrAttribute("class", escape(styles().detailSection, true), false), ssrAttribute("class", escape(styles().detailSectionHeader, true), false), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";flex-wrap:", "wrap") + ssrStyleProperty(";gap:", "8px"), escape(createComponent(For, {
				get each() {
					return Object.entries(individualFields());
				},
				children: ([fieldName, fieldData]) => ssr(_tmpl$3, ssrAttribute("class", escape(styles().stateContent, true), false), ssrStyleProperty("margin-bottom:", "16px"), ssrStyleProperty("font-weight:", "bold") + ssrStyleProperty(";margin-bottom:", "4px"), escape(fieldName), escape(createComponent(JsonTree, {
					copyable: true,
					value: fieldData
				})))
			})), ssrAttribute("class", escape(styles().detailSection, true), false), ssrAttribute("class", escape(styles().detailSectionHeader, true), false), ssrAttribute("class", escape(styles().stateContent, true), false), escape(createComponent(JsonTree, {
				copyable: true,
				get value() {
					return store()[selectedIndex()].state.values;
				}
			})), ssrAttribute("class", escape(styles().detailSection, true), false), ssrAttribute("class", escape(styles().detailSectionHeader, true), false), ssrAttribute("class", escape(styles().stateContent, true), false), escape(createComponent(JsonTree, {
				copyable: true,
				get value() {
					return formStatus();
				}
			})), ssrAttribute("class", escape(styles().detailSection, true), false), ssrAttribute("class", escape(styles().detailSectionHeader, true), false), ssrAttribute("class", escape(styles().stateContent, true), false), escape(createComponent(JsonTree, {
				copyable: true,
				get value() {
					return store()[selectedIndex()]?.options;
				},
				collapsePaths: ["validators"]
			})), ssrAttribute("class", escape(styles().detailSection, true), false), ssrAttribute("class", escape(styles().detailSectionHeader, true), false), ssrAttribute("class", escape(styles().stateContent, true), false), escape(createComponent(JsonTree, {
				copyable: true,
				get value() {
					return store()[selectedIndex()]?.history;
				}
			})))];
		}
	})));
}
var _tmpl$ = ["<div", ">Details</div>"], _tmpl$2 = [
	"<div",
	"><div",
	" style=\"",
	"\">",
	"</div><div class=\"",
	"\"></div><div",
	" style=\"",
	"\">",
	"</div></div>"
];
function Shell() {
	const styles = useStyles();
	const [leftPanelWidth, setLeftPanelWidth] = createSignal(300);
	const [isDragging, setIsDragging] = createSignal(false);
	const [selectedKey, setSelectedKey] = createSignal(null);
	let dragStartX = 0;
	let dragStartWidth = 0;
	const handleMouseMove = (e) => {
		if (!isDragging()) return;
		e.preventDefault();
		const deltaX = e.clientX - dragStartX;
		setLeftPanelWidth(Math.max(150, Math.min(800, dragStartWidth + deltaX)));
	};
	const handleMouseUp = () => {
		setIsDragging(false);
		document.body.style.cursor = "";
		document.body.style.userSelect = "";
	};
	onMount(() => {
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
	});
	onCleanup(() => {
		document.removeEventListener("mousemove", handleMouseMove);
		document.removeEventListener("mouseup", handleMouseUp);
	});
	return createComponent(MainPanel, { get children() {
		return [createComponent(Header, { get children() {
			return createComponent(HeaderLogo, {
				flavor: {
					light: "#eeaf00",
					dark: "#eeaf00"
				},
				onClick: () => {
					window.open("https://tanstack.com/form/latest/docs/overview", "_blank");
				},
				children: "TanStack Form"
			});
		} }), ssr(_tmpl$2, ssrAttribute("class", escape(styles().mainContainer, true), false), ssrAttribute("class", escape(styles().leftPanel, true), false), ssrStyleProperty("width:", `${escape(leftPanelWidth(), true)}px`) + ssrStyleProperty(";min-width:", "150px") + ssrStyleProperty(";max-width:", "800px"), escape(createComponent(UtilList, {
			selectedKey,
			setSelectedKey
		})), `${escape(styles().dragHandle, true)} ${isDragging() ? "dragging" : ""}`, ssrAttribute("class", escape(styles().rightPanel, true), false), ssrStyleProperty("flex:", 1), escape(createComponent(Show, {
			get when() {
				return selectedKey() != null;
			},
			get children() {
				return [ssr(_tmpl$, ssrAttribute("class", escape(styles().panelHeader, true), false)), createComponent(DetailsPanel, { selectedKey })];
			}
		})))];
	} });
}
function Devtools(props) {
	return createComponent(ThemeContextProvider, {
		get theme() {
			return props.theme;
		},
		get children() {
			return createComponent(FormEventClientProvider, { get children() {
				return createComponent(Shell, {});
			} });
		}
	});
}
//#endregion
export { Devtools as default };
