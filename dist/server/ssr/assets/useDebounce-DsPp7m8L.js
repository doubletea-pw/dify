import { a as __read } from "./tslib.es6-BSnKF3gl.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { A as useOpenChangeComplete, P as transitionStatusMapping, ht as useTimeout } from "./base-BuKAg6Le.js";
import { b as useStableCallback, d as NOOP, g as formatErrorMessage, t as useRenderElement, v as useIsoLayoutEffect } from "./useRenderElement-BTEjG3-d.js";
import { t as useTransitionStatus } from "./useTransitionStatus-B1Eyjbjd.js";
import { t as useDebounceFn } from "./useDebounceFn-Y4NS6c4S.js";
import * as React$1 from "react";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/avatar/root/AvatarRootContext.js
var AvatarRootContext = /* @__PURE__ */ React$1.createContext(void 0);
function useAvatarRootContext() {
	const context = React$1.useContext(AvatarRootContext);
	if (context === void 0) throw new Error(formatErrorMessage(13));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/avatar/root/stateAttributesMapping.js
var avatarStateAttributesMapping = { imageLoadingStatus: () => null };
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/avatar/root/AvatarRoot.js
/**
* Displays a user's profile picture, initials, or fallback icon.
* Renders a `<span>` element.
*
* Documentation: [Base UI Avatar](https://base-ui.com/react/components/avatar)
*/
var AvatarRoot$1 = /* @__PURE__ */ React$1.forwardRef(function AvatarRoot(componentProps, forwardedRef) {
	const { className, render, ...elementProps } = componentProps;
	const [imageLoadingStatus, setImageLoadingStatus] = React$1.useState("idle");
	const state = { imageLoadingStatus };
	const contextValue = React$1.useMemo(() => ({
		imageLoadingStatus,
		setImageLoadingStatus
	}), [imageLoadingStatus, setImageLoadingStatus]);
	const element = useRenderElement("span", componentProps, {
		state,
		ref: forwardedRef,
		props: elementProps,
		stateAttributesMapping: avatarStateAttributesMapping
	});
	return /* @__PURE__ */ jsx(AvatarRootContext.Provider, {
		value: contextValue,
		children: element
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/avatar/image/useImageLoadingStatus.js
function useImageLoadingStatus(src, { referrerPolicy, crossOrigin }) {
	const [loadingStatus, setLoadingStatus] = React$1.useState("idle");
	useIsoLayoutEffect(() => {
		if (!src) {
			setLoadingStatus("error");
			return NOOP;
		}
		let isMounted = true;
		const image = new window.Image();
		const updateStatus = (status) => () => {
			if (!isMounted) return;
			setLoadingStatus(status);
		};
		setLoadingStatus("loading");
		image.onload = updateStatus("loaded");
		image.onerror = updateStatus("error");
		if (referrerPolicy) image.referrerPolicy = referrerPolicy;
		image.crossOrigin = crossOrigin ?? null;
		image.src = src;
		return () => {
			isMounted = false;
		};
	}, [
		src,
		crossOrigin,
		referrerPolicy
	]);
	return loadingStatus;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/avatar/image/AvatarImage.js
var stateAttributesMapping = {
	...avatarStateAttributesMapping,
	...transitionStatusMapping
};
/**
* The image to be displayed in the avatar.
* Renders an `<img>` element.
*
* Documentation: [Base UI Avatar](https://base-ui.com/react/components/avatar)
*/
var AvatarImage$1 = /* @__PURE__ */ React$1.forwardRef(function AvatarImage(componentProps, forwardedRef) {
	const { className, render, onLoadingStatusChange: onLoadingStatusChangeProp, referrerPolicy, crossOrigin, ...elementProps } = componentProps;
	const context = useAvatarRootContext();
	const imageLoadingStatus = useImageLoadingStatus(componentProps.src, {
		referrerPolicy,
		crossOrigin
	});
	const isVisible = imageLoadingStatus === "loaded";
	const { mounted, transitionStatus, setMounted } = useTransitionStatus(isVisible);
	const imageRef = React$1.useRef(null);
	const handleLoadingStatusChange = useStableCallback((status) => {
		onLoadingStatusChangeProp?.(status);
		context.setImageLoadingStatus(status);
	});
	useIsoLayoutEffect(() => {
		if (imageLoadingStatus !== "idle") handleLoadingStatusChange(imageLoadingStatus);
	}, [imageLoadingStatus, handleLoadingStatusChange]);
	const state = {
		imageLoadingStatus,
		transitionStatus
	};
	useOpenChangeComplete({
		open: isVisible,
		ref: imageRef,
		onComplete() {
			if (!isVisible) setMounted(false);
		}
	});
	const element = useRenderElement("img", componentProps, {
		state,
		ref: [forwardedRef, imageRef],
		props: elementProps,
		stateAttributesMapping,
		enabled: mounted
	});
	if (!mounted) return null;
	return element;
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/avatar/fallback/AvatarFallback.js
/**
* Rendered when the image fails to load or when no image is provided.
* Renders a `<span>` element.
*
* Documentation: [Base UI Avatar](https://base-ui.com/react/components/avatar)
*/
var AvatarFallback$1 = /* @__PURE__ */ React$1.forwardRef(function AvatarFallback(componentProps, forwardedRef) {
	const { className, render, delay, ...elementProps } = componentProps;
	const { imageLoadingStatus } = useAvatarRootContext();
	const [delayPassed, setDelayPassed] = React$1.useState(delay === void 0);
	const timeout = useTimeout();
	React$1.useEffect(() => {
		if (delay !== void 0) timeout.start(delay, () => setDelayPassed(true));
		return timeout.clear;
	}, [timeout, delay]);
	return useRenderElement("span", componentProps, {
		state: { imageLoadingStatus },
		ref: forwardedRef,
		props: elementProps,
		stateAttributesMapping: avatarStateAttributesMapping,
		enabled: imageLoadingStatus !== "loaded" && delayPassed
	});
});
//#endregion
//#region app/components/base/avatar/index.tsx
var avatarSizeClasses = {
	"xxs": {
		root: "size-4",
		text: "text-[7px]"
	},
	"xs": {
		root: "size-5",
		text: "text-[8px]"
	},
	"sm": {
		root: "size-6",
		text: "text-[10px]"
	},
	"md": {
		root: "size-8",
		text: "text-xs"
	},
	"lg": {
		root: "size-9",
		text: "text-sm"
	},
	"xl": {
		root: "size-10",
		text: "text-base"
	},
	"2xl": {
		root: "size-12",
		text: "text-xl"
	},
	"3xl": {
		root: "size-16",
		text: "text-2xl"
	}
};
function AvatarRoot({ size = "md", className, ...props }) {
	return /* @__PURE__ */ jsx(AvatarRoot$1, {
		className: cn("relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-primary-600", avatarSizeClasses[size].root, className),
		...props
	});
}
function AvatarImage({ className, ...props }) {
	return /* @__PURE__ */ jsx(AvatarImage$1, {
		className: cn("absolute inset-0 size-full object-cover", className),
		...props
	});
}
function AvatarFallback({ size = "md", className, ...props }) {
	return /* @__PURE__ */ jsx(AvatarFallback$1, {
		className: cn("flex size-full items-center justify-center font-medium text-white", avatarSizeClasses[size].text, className),
		...props
	});
}
var Avatar = ({ name, avatar, size = "md", className, onLoadingStatusChange }) => {
	return /* @__PURE__ */ jsxs(AvatarRoot, {
		size,
		className,
		children: [avatar && /* @__PURE__ */ jsx(AvatarImage, {
			src: avatar,
			alt: name,
			onLoadingStatusChange
		}), /* @__PURE__ */ jsx(AvatarFallback, {
			size,
			children: name?.[0]?.toLocaleUpperCase()
		})]
	});
};
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/useDebounce/index.js
function useDebounce(value, options) {
	var _a = __read(useState(value), 2), debounced = _a[0], setDebounced = _a[1];
	var run = useDebounceFn(function() {
		setDebounced(value);
	}, options).run;
	useEffect(function() {
		run();
	}, [value]);
	return debounced;
}
//#endregion
export { Avatar as n, useDebounce as t };
