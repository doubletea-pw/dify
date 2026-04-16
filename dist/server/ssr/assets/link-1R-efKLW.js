import { i as withBasePath, n as toBrowserNavigationHref, r as toSameOriginAppPath, t as resolveRelativeHref } from "./url-utils-ZoRYEckm.js";
import { d as notifyAppRouterTransitionStart, i as toRscUrl, n as getPrefetchedUrls, r as storePrefetchResponse } from "../index.js";
import { a as getDomainLocaleUrl, i as addLocalePrefix, n as appendSearchParamsToUrl, r as urlQueryToSearchParams } from "./query-BwuhKQ55.js";
import React, { createContext, forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region node_modules/.pnpm/vinext@https+++pkg.pr.new+vinext@b6a2cac_1a91bf00ec5f7fb5f0ffb625316f9d01/node_modules/vinext/dist/shims/url-safety.js
/**
* Shared URL safety utilities for Link, Form, and navigation shims.
*
* Centralizes dangerous URI scheme detection so all components and
* navigation functions use the same validation logic.
*/
/**
* Detect dangerous URI schemes that should never be navigated to.
* Strips leading whitespace and zero-width characters before testing,
* since browsers ignore these when interpreting the scheme.
*/
var DANGEROUS_SCHEME_RE = /^[\s\u200B\uFEFF]*(javascript|data|vbscript)\s*:/i;
function isDangerousScheme(url) {
	return DANGEROUS_SCHEME_RE.test(url);
}
//#endregion
//#region node_modules/.pnpm/vinext@https+++pkg.pr.new+vinext@b6a2cac_1a91bf00ec5f7fb5f0ffb625316f9d01/node_modules/vinext/dist/shims/i18n-context.js
var _getI18nContext = () => {
	if (globalThis.__VINEXT_DEFAULT_LOCALE__ == null && globalThis.__VINEXT_LOCALE__ == null) return null;
	return {
		locale: globalThis.__VINEXT_LOCALE__,
		locales: globalThis.__VINEXT_LOCALES__,
		defaultLocale: globalThis.__VINEXT_DEFAULT_LOCALE__,
		domainLocales: globalThis.__VINEXT_DOMAIN_LOCALES__,
		hostname: globalThis.__VINEXT_HOSTNAME__
	};
};
function getI18nContext() {
	return _getI18nContext();
}
//#endregion
//#region node_modules/.pnpm/vinext@https+++pkg.pr.new+vinext@b6a2cac_1a91bf00ec5f7fb5f0ffb625316f9d01/node_modules/vinext/dist/shims/link.js
/**
* next/link shim
*
* Renders an <a> tag with client-side navigation support.
* On click, prevents full page reload and triggers client-side
* page swap via the router's navigation system.
*/
var LinkStatusContext = createContext({ pending: false });
/** basePath from next.config.js, injected by the plugin at build time */
var __basePath = "";
function resolveHref(href) {
	if (typeof href === "string") return href;
	let url = href.pathname ?? "/";
	if (href.query) {
		const params = urlQueryToSearchParams(href.query);
		url = appendSearchParamsToUrl(url, params);
	}
	return url;
}
/**
* Check if a href is only a hash change (same pathname, different/added hash).
* Handles relative hashes like "#foo" and "?query#foo".
*/
function isHashOnlyChange(href) {
	if (href.startsWith("#")) return true;
	try {
		const current = new URL(window.location.href);
		const next = new URL(href, window.location.href);
		return current.pathname === next.pathname && current.search === next.search && next.hash !== "";
	} catch {
		return false;
	}
}
/**
* Scroll to a hash target element, or to the top if no hash.
*/
function scrollToHash(hash) {
	if (!hash || hash === "#") {
		window.scrollTo(0, 0);
		return;
	}
	const id = hash.slice(1);
	const element = document.getElementById(id);
	if (element) element.scrollIntoView({ behavior: "auto" });
}
/**
* Prefetch a URL for faster navigation.
*
* For App Router (RSC): fetches the .rsc payload in the background and
* stores it in an in-memory cache for instant use during navigation.
* For Pages Router: injects a <link rel="prefetch"> for the page module.
*
* Uses `requestIdleCallback` (or `setTimeout` fallback) to avoid blocking
* the main thread during initial page load.
*/
function prefetchUrl(href) {
	if (typeof window === "undefined") return;
	let prefetchHref = href;
	if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//")) {
		const localPath = toSameOriginAppPath(href, __basePath);
		if (localPath == null) return;
		prefetchHref = localPath;
	}
	const fullHref = toBrowserNavigationHref(prefetchHref, window.location.href, __basePath);
	const rscUrl = toRscUrl(fullHref);
	const prefetched = getPrefetchedUrls();
	if (prefetched.has(rscUrl)) return;
	prefetched.add(rscUrl);
	(window.requestIdleCallback ?? ((fn) => setTimeout(fn, 100)))(() => {
		if (typeof window.__VINEXT_RSC_NAVIGATE__ === "function") fetch(rscUrl, {
			headers: { Accept: "text/x-component" },
			credentials: "include",
			priority: "low",
			purpose: "prefetch"
		}).then((response) => {
			if (response.ok) storePrefetchResponse(rscUrl, response);
			else prefetched.delete(rscUrl);
		}).catch(() => {
			prefetched.delete(rscUrl);
		});
		else if (window.__NEXT_DATA__?.__vinext?.pageModuleUrl) {
			const link = document.createElement("link");
			link.rel = "prefetch";
			link.href = fullHref;
			link.as = "document";
			document.head.appendChild(link);
		}
	});
}
/**
* Shared IntersectionObserver for viewport-based prefetching.
* All Link elements use the same observer to minimize resource usage.
*/
var sharedObserver = null;
var observerCallbacks = /* @__PURE__ */ new WeakMap();
function getSharedObserver() {
	if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return null;
	if (sharedObserver) return sharedObserver;
	sharedObserver = new IntersectionObserver((entries) => {
		for (const entry of entries) if (entry.isIntersecting) {
			const callback = observerCallbacks.get(entry.target);
			if (callback) {
				callback();
				sharedObserver?.unobserve(entry.target);
				observerCallbacks.delete(entry.target);
			}
		}
	}, { rootMargin: "250px" });
	return sharedObserver;
}
function getDefaultLocale() {
	if (typeof window !== "undefined") return window.__VINEXT_DEFAULT_LOCALE__;
	return getI18nContext()?.defaultLocale;
}
function getDomainLocales() {
	if (typeof window !== "undefined") return window.__NEXT_DATA__?.domainLocales;
	return getI18nContext()?.domainLocales;
}
function getCurrentHostname() {
	if (typeof window !== "undefined") return window.location.hostname;
	return getI18nContext()?.hostname;
}
function getDomainLocaleHref(href, locale) {
	return getDomainLocaleUrl(href, locale, {
		basePath: __basePath,
		currentHostname: getCurrentHostname(),
		domainItems: getDomainLocales()
	});
}
/**
* Apply locale prefix to a URL path based on the locale prop.
* - locale="fr" → prepend /fr (unless it already has a locale prefix)
* - locale={false} → use the href as-is (no locale prefix, link to default)
* - locale=undefined → use current locale (href as-is in most cases)
*/
function applyLocaleToHref(href, locale) {
	if (locale === false) return href;
	if (locale === void 0) return href;
	if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//")) return href;
	const domainLocaleHref = getDomainLocaleHref(href, locale);
	if (domainLocaleHref) return domainLocaleHref;
	return addLocalePrefix(href, locale, getDefaultLocale() ?? "");
}
var Link = forwardRef(function Link({ href, as, replace = false, prefetch: prefetchProp, scroll = true, children, onClick, onNavigate, ...rest }, forwardedRef) {
	const { locale, ...restWithoutLocale } = rest;
	const resolvedHref = as ?? resolveHref(href);
	const isDangerous = typeof resolvedHref === "string" && isDangerousScheme(resolvedHref);
	const localizedHref = applyLocaleToHref(isDangerous ? "/" : resolvedHref, locale);
	const fullHref = withBasePath(localizedHref, __basePath);
	const [pending, setPending] = useState(false);
	const mountedRef = useRef(true);
	useEffect(() => {
		mountedRef.current = true;
		return () => {
			mountedRef.current = false;
		};
	}, []);
	const internalRef = useRef(null);
	const shouldPrefetch = prefetchProp !== false && !isDangerous;
	const setRefs = useCallback((node) => {
		internalRef.current = node;
		if (typeof forwardedRef === "function") forwardedRef(node);
		else if (forwardedRef) forwardedRef.current = node;
	}, [forwardedRef]);
	useEffect(() => {
		if (!shouldPrefetch || typeof window === "undefined") return;
		const node = internalRef.current;
		if (!node) return;
		let hrefToPrefetch = localizedHref;
		if (localizedHref.startsWith("http://") || localizedHref.startsWith("https://") || localizedHref.startsWith("//")) {
			const localPath = toSameOriginAppPath(localizedHref, __basePath);
			if (localPath == null) return;
			hrefToPrefetch = localPath;
		}
		const observer = getSharedObserver();
		if (!observer) return;
		observerCallbacks.set(node, () => prefetchUrl(hrefToPrefetch));
		observer.observe(node);
		return () => {
			observer.unobserve(node);
			observerCallbacks.delete(node);
		};
	}, [shouldPrefetch, localizedHref]);
	const handleClick = async (e) => {
		if (onClick) onClick(e);
		if (e.defaultPrevented) return;
		if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
		if (e.currentTarget.target && e.currentTarget.target !== "_self") return;
		let navigateHref = localizedHref;
		if (resolvedHref.startsWith("http://") || resolvedHref.startsWith("https://") || resolvedHref.startsWith("//")) {
			const localPath = toSameOriginAppPath(resolvedHref, __basePath);
			if (localPath == null) return;
			navigateHref = localPath;
		}
		e.preventDefault();
		const absoluteHref = resolveRelativeHref(navigateHref, window.location.href, __basePath);
		const absoluteFullHref = toBrowserNavigationHref(navigateHref, window.location.href, __basePath);
		if (onNavigate) try {
			const navUrl = new URL(absoluteFullHref, window.location.origin);
			let prevented = false;
			const navEvent = {
				url: navUrl,
				preventDefault() {
					prevented = true;
				},
				get defaultPrevented() {
					return prevented;
				}
			};
			onNavigate(navEvent);
			if (navEvent.defaultPrevented) return;
		} catch {}
		if (!replace) {
			const state = window.history.state ?? {};
			window.history.replaceState({
				...state,
				__vinext_scrollX: window.scrollX,
				__vinext_scrollY: window.scrollY
			}, "");
		}
		if (typeof window !== "undefined" && isHashOnlyChange(absoluteFullHref)) {
			const hash = absoluteFullHref.includes("#") ? absoluteFullHref.slice(absoluteFullHref.indexOf("#")) : "";
			if (replace) window.history.replaceState(null, "", absoluteFullHref);
			else window.history.pushState(null, "", absoluteFullHref);
			if (scroll) scrollToHash(hash);
			return;
		}
		const hashIdx = absoluteFullHref.indexOf("#");
		const hash = hashIdx !== -1 ? absoluteFullHref.slice(hashIdx) : "";
		if (typeof window.__VINEXT_RSC_NAVIGATE__ === "function") {
			notifyAppRouterTransitionStart(absoluteFullHref, replace ? "replace" : "push");
			if (replace) window.history.replaceState(null, "", absoluteFullHref);
			else window.history.pushState(null, "", absoluteFullHref);
			setPending(true);
			try {
				await window.__VINEXT_RSC_NAVIGATE__(absoluteFullHref);
			} finally {
				if (mountedRef.current) setPending(false);
			}
		} else try {
			const Router = (await import("./router-BxeR7DVN.js")).default;
			if (replace) await Router.replace(absoluteHref, void 0, { scroll });
			else await Router.push(absoluteHref, void 0, { scroll });
		} catch {
			if (replace) window.history.replaceState({}, "", absoluteFullHref);
			else window.history.pushState({}, "", absoluteFullHref);
			window.dispatchEvent(new PopStateEvent("popstate"));
		}
		if (scroll) if (hash) scrollToHash(hash);
		else window.scrollTo(0, 0);
	};
	const { passHref: _p, ...anchorProps } = restWithoutLocale;
	const linkStatusValue = React.useMemo(() => ({ pending }), [pending]);
	if (isDangerous) return /* @__PURE__ */ jsx("a", {
		...anchorProps,
		children
	});
	return /* @__PURE__ */ jsx(LinkStatusContext.Provider, {
		value: linkStatusValue,
		children: /* @__PURE__ */ jsx("a", {
			ref: setRefs,
			href: fullHref,
			onClick: handleClick,
			...anchorProps,
			children
		})
	});
});
//#endregion
export { Link as t };
