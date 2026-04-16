import React, { Suspense, lazy, useEffect, useState } from "react";
//#region node_modules/.pnpm/vinext@https+++pkg.pr.new+vinext@b6a2cac_1a91bf00ec5f7fb5f0ffb625316f9d01/node_modules/vinext/dist/shims/dynamic.js
/**
* next/dynamic shim
*
* SSR-safe dynamic imports. On the server, uses React.lazy + Suspense so that
* renderToReadableStream suspends until the dynamically-imported component is
* available. On the client, also uses React.lazy for code splitting.
*
* Supports:
* - dynamic(() => import('./Component'))
* - dynamic(() => import('./Component'), { loading: () => <Spinner /> })
* - dynamic(() => import('./Component'), { ssr: false })
*/
/**
* Lightweight error boundary that renders the loading component with the error
* when a dynamic() loader rejects. Without this, loader failures would propagate
* uncaught through React's rendering — this preserves the Next.js behavior where
* the `loading` component can display errors.
*
* Lazily created because React.Component is not available in the RSC environment
* (server components use a slimmed-down React that doesn't include class components).
*/
var DynamicErrorBoundary;
function getDynamicErrorBoundary() {
	if (DynamicErrorBoundary) return DynamicErrorBoundary;
	if (!React.Component) return null;
	DynamicErrorBoundary = class extends React.Component {
		constructor(props) {
			super(props);
			this.state = { error: null };
		}
		static getDerivedStateFromError(error) {
			return { error: error instanceof Error ? error : new Error(String(error)) };
		}
		render() {
			if (this.state.error) return React.createElement(this.props.fallback, {
				isLoading: false,
				pastDelay: true,
				error: this.state.error
			});
			return this.props.children;
		}
	};
	return DynamicErrorBoundary;
}
var isServer = typeof window === "undefined";
function dynamic(loader, options) {
	const { loading: LoadingComponent, ssr = true } = options ?? {};
	if (!ssr) {
		if (isServer) {
			const SSRFalse = (_props) => {
				return LoadingComponent ? React.createElement(LoadingComponent, {
					isLoading: true,
					pastDelay: true,
					error: null
				}) : null;
			};
			SSRFalse.displayName = "DynamicSSRFalse";
			return SSRFalse;
		}
		const LazyComponent = lazy(async () => {
			const mod = await loader();
			if ("default" in mod) return mod;
			return { default: mod };
		});
		const ClientSSRFalse = (props) => {
			const [mounted, setMounted] = useState(false);
			useEffect(() => setMounted(true), []);
			if (!mounted) return LoadingComponent ? React.createElement(LoadingComponent, {
				isLoading: true,
				pastDelay: true,
				error: null
			}) : null;
			const fallback = LoadingComponent ? React.createElement(LoadingComponent, {
				isLoading: true,
				pastDelay: true,
				error: null
			}) : null;
			return React.createElement(Suspense, { fallback }, React.createElement(LazyComponent, props));
		};
		ClientSSRFalse.displayName = "DynamicClientSSRFalse";
		return ClientSSRFalse;
	}
	if (isServer) {
		const LazyServer = lazy(async () => {
			const mod = await loader();
			if ("default" in mod) return mod;
			return { default: mod };
		});
		const ServerDynamic = (props) => {
			const fallback = LoadingComponent ? React.createElement(LoadingComponent, {
				isLoading: true,
				pastDelay: true,
				error: null
			}) : null;
			const lazyElement = React.createElement(LazyServer, props);
			const ErrorBoundary = LoadingComponent ? getDynamicErrorBoundary() : null;
			const content = ErrorBoundary ? React.createElement(ErrorBoundary, { fallback: LoadingComponent }, lazyElement) : lazyElement;
			return React.createElement(Suspense, { fallback }, content);
		};
		ServerDynamic.displayName = "DynamicServer";
		return ServerDynamic;
	}
	const LazyComponent = lazy(async () => {
		const mod = await loader();
		if ("default" in mod) return mod;
		return { default: mod };
	});
	const ClientDynamic = (props) => {
		const fallback = LoadingComponent ? React.createElement(LoadingComponent, {
			isLoading: true,
			pastDelay: true,
			error: null
		}) : null;
		return React.createElement(Suspense, { fallback }, React.createElement(LazyComponent, props));
	};
	ClientDynamic.displayName = "DynamicClient";
	return ClientDynamic;
}
//#endregion
export { dynamic as t };
