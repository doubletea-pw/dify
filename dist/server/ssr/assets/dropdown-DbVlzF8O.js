import { Gr as s7, In as a4, Mr as p, Mt as Qm, _ as CH, b as Ct, c as AD, ct as M6, ot as Ky, p as B7, rr as f1 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as create } from "./react-CHKO_ryu.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { l as post, r as get, t as del } from "./base-BuKAg6Le.js";
import { r as isEarlierThanVersion } from "./semver-olnXAeJC.js";
import { i as useAppContext } from "./app-context-BiSzFQEV.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as confirm_default } from "./confirm-CKQP3hdx.js";
import { t as ActionButton } from "./action-button-BK9WUMzU.js";
import { t as Input } from "./input-BOHL-qYi.js";
import { t as Loading } from "./loading-BryKikzY.js";
import { t as useTimestamp } from "./use-timestamp-DPYGivGq.js";
import { i as useToastContext } from "./toast-BY3OifkP.js";
import { A as Indicator, a as FormTypeEnum, n as badge_default } from "./credential-item-C22_bUSw.js";
import { n as useQuery, t as useMutation } from "./useMutation-CRBpDOZ8.js";
import { t as useInvalid } from "./use-base-DLpNl2rR.js";
import { t as Link } from "./link-1R-efKLW.js";
import { A as useVersionListOfPlugin, Mt as useInvalidToolsByType } from "./use-refresh-plugin-list-C8aKRYG-.js";
import { i as PopoverTrigger, r as PopoverContent, t as Popover } from "./popover-CTEbJchz.js";
import { i as useStore, n as useForm } from "./pure-Dr1CeacW.js";
import { r as useRenderI18nObject, t as auth_default } from "./auth-BGs48SaG.js";
import { t as modal_default } from "./modal-C9_LwvXw.js";
import * as React$1 from "react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/@heroicons+react@2.2.0_react@19.2.4/node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js
function ChevronDownIcon({ title, titleId, ...props }, svgRef) {
	return /* @__PURE__ */ React$1.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: 1.5,
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /* @__PURE__ */ React$1.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React$1.createElement("path", {
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "m19.5 8.25-7.5 7.5-7.5-7.5"
	}));
}
var ForwardRef = /* @__PURE__ */ React$1.forwardRef(ChevronDownIcon);
//#endregion
//#region app/components/base/encrypted-bottom/index.tsx
var DEFAULT_FRONT_KEY = "provider.encrypted.front";
var DEFAULT_BACK_KEY = "provider.encrypted.back";
var EncryptedBottom = (props) => {
	const { t } = useTranslation();
	const { frontTextKey = DEFAULT_FRONT_KEY, backTextKey = DEFAULT_BACK_KEY, className } = props;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("system-xs-regular flex items-center justify-center rounded-b-2xl border-t-[0.5px] border-divider-subtle bg-background-soft px-2 py-3 text-text-tertiary", className),
		children: [
			/* @__PURE__ */ jsx(Qm, { className: "mx-1 h-3 w-3 text-text-quaternary" }),
			t(frontTextKey, { ns: "common" }),
			/* @__PURE__ */ jsx(Link, {
				className: "mx-1 text-text-accent",
				target: "_blank",
				rel: "noopener noreferrer",
				href: "https://pycryptodome.readthedocs.io/en/latest/src/cipher/oaep.html",
				children: "PKCS1_OAEP"
			}),
			t(backTextKey, { ns: "common" })
		]
	});
};
//#endregion
//#region app/components/plugins/readme-panel/constants.ts
var BUILTIN_TOOLS_ARRAY = [
	"code",
	"audio",
	"time",
	"webscraper"
];
//#endregion
//#region app/components/plugins/readme-panel/store.ts
var ReadmeShowType = /* @__PURE__ */ function(ReadmeShowType) {
	ReadmeShowType["drawer"] = "drawer";
	ReadmeShowType["modal"] = "modal";
	return ReadmeShowType;
}({});
var useReadmePanelStore = create((set) => ({
	currentPluginDetail: void 0,
	setCurrentPluginDetail: (detail, showType) => set({ currentPluginDetail: !detail ? void 0 : {
		detail,
		showType: showType ?? ReadmeShowType.drawer
	} })
}));
//#endregion
//#region app/components/plugins/readme-panel/entrance.tsx
var ReadmeEntrance = ({ pluginDetail, showType = ReadmeShowType.drawer, className, showShortTip = false }) => {
	const { t } = useTranslation();
	const { setCurrentPluginDetail } = useReadmePanelStore();
	const handleReadmeClick = () => {
		if (pluginDetail) setCurrentPluginDetail(pluginDetail, showType);
	};
	if (!pluginDetail || !pluginDetail?.plugin_unique_identifier || BUILTIN_TOOLS_ARRAY.includes(pluginDetail.id)) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col items-start justify-center gap-2 pb-4 pt-0", showType === ReadmeShowType.drawer && "px-4", className),
		children: [!showShortTip && /* @__PURE__ */ jsx("div", {
			className: "relative h-1 w-8 shrink-0",
			children: /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-divider-regular" })
		}), /* @__PURE__ */ jsxs("button", {
			onClick: handleReadmeClick,
			className: "flex w-full items-center justify-start gap-1 text-text-tertiary transition-opacity hover:text-text-accent-light-mode-only",
			children: [/* @__PURE__ */ jsx("div", {
				className: "relative flex h-3 w-3 items-center justify-center overflow-hidden",
				children: /* @__PURE__ */ jsx(a4, { className: "h-3 w-3" })
			}), /* @__PURE__ */ jsx("span", {
				className: "text-xs font-normal leading-4",
				children: !showShortTip ? t("readmeInfo.needHelpCheckReadme", { ns: "plugin" }) : t("readmeInfo.title", { ns: "plugin" })
			})]
		})]
	});
};
//#endregion
//#region service/use-plugins-auth.ts
var NAME_SPACE = "plugins-auth";
var useGetPluginCredentialInfo = (url) => {
	return useQuery({
		enabled: !!url,
		queryKey: [
			NAME_SPACE,
			"credential-info",
			url
		],
		queryFn: () => get(url),
		staleTime: 0
	});
};
var useInvalidPluginCredentialInfo = (url) => {
	return useInvalid([
		NAME_SPACE,
		"credential-info",
		url
	]);
};
var useSetPluginDefaultCredential = (url) => {
	return useMutation({ mutationFn: (id) => {
		return post(url, { body: { id } });
	} });
};
var useAddPluginCredential = (url) => {
	return useMutation({ mutationFn: (params) => {
		return post(url, { body: params });
	} });
};
var useUpdatePluginCredential = (url) => {
	return useMutation({ mutationFn: (params) => {
		return post(url, { body: params });
	} });
};
var useDeletePluginCredential = (url) => {
	return useMutation({ mutationFn: (params) => {
		return post(url, { body: params });
	} });
};
var useGetPluginCredentialSchema = (url) => {
	return useQuery({
		enabled: !!url,
		queryKey: [
			NAME_SPACE,
			"credential-schema",
			url
		],
		queryFn: () => get(url)
	});
};
var useGetPluginOAuthUrl = (url) => {
	return useMutation({
		mutationKey: [
			NAME_SPACE,
			"oauth-url",
			url
		],
		mutationFn: () => {
			return get(url);
		}
	});
};
var useGetPluginOAuthClientSchema = (url) => {
	return useQuery({
		enabled: !!url,
		queryKey: [
			NAME_SPACE,
			"oauth-client-schema",
			url
		],
		queryFn: () => get(url),
		staleTime: 0
	});
};
var useInvalidPluginOAuthClientSchema = (url) => {
	return useInvalid([
		NAME_SPACE,
		"oauth-client-schema",
		url
	]);
};
var useSetPluginOAuthCustomClient = (url) => {
	return useMutation({ mutationFn: (params) => {
		return post(url, { body: params });
	} });
};
var useDeletePluginOAuthCustomClient = (url) => {
	return useMutation({ mutationFn: () => {
		return del(url);
	} });
};
//#endregion
//#region app/components/plugins/plugin-auth/types.ts
var AuthCategory = /* @__PURE__ */ function(AuthCategory) {
	AuthCategory["tool"] = "tool";
	AuthCategory["datasource"] = "datasource";
	AuthCategory["model"] = "model";
	AuthCategory["trigger"] = "trigger";
	return AuthCategory;
}({});
var CredentialTypeEnum = /* @__PURE__ */ function(CredentialTypeEnum) {
	CredentialTypeEnum["OAUTH2"] = "oauth2";
	CredentialTypeEnum["API_KEY"] = "api-key";
	return CredentialTypeEnum;
}({});
//#endregion
//#region app/components/plugins/plugin-auth/hooks/use-get-api.ts
var useGetApi = ({ category = AuthCategory.tool, provider }) => {
	if (category === AuthCategory.tool) return {
		getCredentialInfo: `/workspaces/current/tool-provider/builtin/${provider}/credential/info`,
		setDefaultCredential: `/workspaces/current/tool-provider/builtin/${provider}/default-credential`,
		getCredentials: `/workspaces/current/tool-provider/builtin/${provider}/credentials`,
		addCredential: `/workspaces/current/tool-provider/builtin/${provider}/add`,
		updateCredential: `/workspaces/current/tool-provider/builtin/${provider}/update`,
		deleteCredential: `/workspaces/current/tool-provider/builtin/${provider}/delete`,
		getCredentialSchema: (credential_type) => `/workspaces/current/tool-provider/builtin/${provider}/credential/schema/${credential_type}`,
		getOauthUrl: `/oauth/plugin/${provider}/tool/authorization-url`,
		getOauthClientSchema: `/workspaces/current/tool-provider/builtin/${provider}/oauth/client-schema`,
		setCustomOauthClient: `/workspaces/current/tool-provider/builtin/${provider}/oauth/custom-client`,
		getCustomOAuthClientValues: `/workspaces/current/tool-provider/builtin/${provider}/oauth/custom-client`,
		deleteCustomOAuthClient: `/workspaces/current/tool-provider/builtin/${provider}/oauth/custom-client`
	};
	if (category === AuthCategory.datasource) return {
		getCredentialInfo: "",
		setDefaultCredential: `/auth/plugin/datasource/${provider}/default`,
		getCredentials: `/auth/plugin/datasource/${provider}`,
		addCredential: `/auth/plugin/datasource/${provider}`,
		updateCredential: `/auth/plugin/datasource/${provider}/update`,
		deleteCredential: `/auth/plugin/datasource/${provider}/delete`,
		getCredentialSchema: () => "",
		getOauthUrl: `/oauth/plugin/${provider}/datasource/get-authorization-url`,
		getOauthClientSchema: "",
		setCustomOauthClient: `/auth/plugin/datasource/${provider}/custom-client`,
		deleteCustomOAuthClient: `/auth/plugin/datasource/${provider}/custom-client`
	};
	return {
		getCredentialInfo: "",
		setDefaultCredential: "",
		getCredentials: "",
		addCredential: "",
		updateCredential: "",
		deleteCredential: "",
		getCredentialSchema: () => "",
		getOauthUrl: "",
		getOauthClientSchema: "",
		setCustomOauthClient: "",
		getCustomOAuthClientValues: "",
		deleteCustomOAuthClient: ""
	};
};
//#endregion
//#region app/components/plugins/plugin-auth/hooks/use-credential.ts
var useGetPluginCredentialInfoHook = (pluginPayload, enable) => {
	const apiMap = useGetApi(pluginPayload);
	return useGetPluginCredentialInfo(enable ? apiMap.getCredentialInfo : "");
};
var useDeletePluginCredentialHook = (pluginPayload) => {
	return useDeletePluginCredential(useGetApi(pluginPayload).deleteCredential);
};
var useInvalidPluginCredentialInfoHook = (pluginPayload) => {
	const invalidPluginCredentialInfo = useInvalidPluginCredentialInfo(useGetApi(pluginPayload).getCredentialInfo);
	const providerType = pluginPayload.providerType;
	const invalidToolsByType = useInvalidToolsByType(providerType);
	return () => {
		invalidPluginCredentialInfo();
		invalidToolsByType();
	};
};
var useSetPluginDefaultCredentialHook = (pluginPayload) => {
	return useSetPluginDefaultCredential(useGetApi(pluginPayload).setDefaultCredential);
};
var useGetPluginCredentialSchemaHook = (pluginPayload, credentialType) => {
	return useGetPluginCredentialSchema(useGetApi(pluginPayload).getCredentialSchema(credentialType));
};
var useAddPluginCredentialHook = (pluginPayload) => {
	return useAddPluginCredential(useGetApi(pluginPayload).addCredential);
};
var useUpdatePluginCredentialHook = (pluginPayload) => {
	return useUpdatePluginCredential(useGetApi(pluginPayload).updateCredential);
};
var useGetPluginOAuthUrlHook = (pluginPayload) => {
	return useGetPluginOAuthUrl(useGetApi(pluginPayload).getOauthUrl);
};
var useGetPluginOAuthClientSchemaHook = (pluginPayload) => {
	return useGetPluginOAuthClientSchema(useGetApi(pluginPayload).getOauthClientSchema);
};
var useInvalidPluginOAuthClientSchemaHook = (pluginPayload) => {
	return useInvalidPluginOAuthClientSchema(useGetApi(pluginPayload).getOauthClientSchema);
};
var useSetPluginOAuthCustomClientHook = (pluginPayload) => {
	return useSetPluginOAuthCustomClient(useGetApi(pluginPayload).setCustomOauthClient);
};
var useDeletePluginOAuthCustomClientHook = (pluginPayload) => {
	return useDeletePluginOAuthCustomClient(useGetApi(pluginPayload).deleteCustomOAuthClient);
};
//#endregion
//#region app/components/plugins/plugin-auth/authorize/api-key-modal.tsx
var ApiKeyModal = ({ pluginPayload, onClose, editValues, onRemove, disabled, onUpdate, formSchemas: formSchemasFromProps = [] }) => {
	const { t } = useTranslation();
	const { notify } = useToastContext();
	const [doingAction, setDoingAction] = useState(false);
	const doingActionRef = useRef(doingAction);
	const handleSetDoingAction = useCallback((value) => {
		doingActionRef.current = value;
		setDoingAction(value);
	}, []);
	const { data = [], isLoading } = useGetPluginCredentialSchemaHook(pluginPayload, CredentialTypeEnum.API_KEY);
	const mergedData = useMemo(() => {
		if (formSchemasFromProps?.length) return formSchemasFromProps;
		return data;
	}, [formSchemasFromProps, data]);
	const formSchemas = useMemo(() => {
		return [{
			type: FormTypeEnum.textInput,
			name: "__name__",
			label: t("auth.authorizationName", { ns: "plugin" }),
			required: false
		}, ...mergedData];
	}, [mergedData, t]);
	const defaultValues = formSchemas.reduce((acc, schema) => {
		if (schema.default) acc[schema.name] = schema.default;
		return acc;
	}, {});
	const { mutateAsync: addPluginCredential } = useAddPluginCredentialHook(pluginPayload);
	const { mutateAsync: updatePluginCredential } = useUpdatePluginCredentialHook(pluginPayload);
	const formRef = useRef(null);
	const handleConfirm = useCallback(async () => {
		if (doingActionRef.current) return;
		const { isCheckValidated, values } = formRef.current?.getFormValues({
			needCheckValidatedValues: true,
			needTransformWhenSecretFieldIsPristine: true
		}) || {
			isCheckValidated: false,
			values: {}
		};
		if (!isCheckValidated) return;
		try {
			const { __name__, __credential_id__, ...restValues } = values;
			handleSetDoingAction(true);
			if (editValues) await updatePluginCredential({
				credentials: restValues,
				credential_id: __credential_id__,
				name: __name__ || ""
			});
			else await addPluginCredential({
				credentials: restValues,
				type: CredentialTypeEnum.API_KEY,
				name: __name__ || ""
			});
			notify({
				type: "success",
				message: t("api.actionSuccess", { ns: "common" })
			});
			onClose?.();
			onUpdate?.();
		} finally {
			handleSetDoingAction(false);
		}
	}, [
		addPluginCredential,
		onClose,
		onUpdate,
		updatePluginCredential,
		notify,
		t,
		editValues,
		handleSetDoingAction
	]);
	return /* @__PURE__ */ jsxs(modal_default, {
		size: "md",
		title: t("auth.useApiAuth", { ns: "plugin" }),
		subTitle: t("auth.useApiAuthDesc", { ns: "plugin" }),
		onClose,
		onCancel: onClose,
		footerSlot: /* @__PURE__ */ jsx("div", {}),
		bottomSlot: /* @__PURE__ */ jsx(EncryptedBottom, {}),
		onConfirm: handleConfirm,
		showExtraButton: !!editValues,
		onExtraButtonClick: onRemove,
		disabled: disabled || isLoading || doingAction,
		clickOutsideNotClose: true,
		wrapperClassName: "!z-[101]",
		children: [
			pluginPayload.detail && /* @__PURE__ */ jsx(ReadmeEntrance, {
				pluginDetail: pluginPayload.detail,
				showType: ReadmeShowType.modal
			}),
			isLoading && /* @__PURE__ */ jsx("div", {
				className: "flex h-40 items-center justify-center",
				children: /* @__PURE__ */ jsx(Loading, {})
			}),
			!isLoading && !!mergedData.length && /* @__PURE__ */ jsx(auth_default, {
				ref: formRef,
				formSchemas,
				defaultValues: editValues || defaultValues,
				disabled
			})
		]
	});
};
var api_key_modal_default = memo(ApiKeyModal);
//#endregion
//#region app/components/plugins/plugin-auth/authorize/add-api-key-button.tsx
var AddApiKeyButton = ({ pluginPayload, buttonVariant = "secondary-accent", buttonText = "Use Api Key", disabled, onUpdate, formSchemas = [] }) => {
	const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Button, {
		className: "w-full",
		variant: buttonVariant,
		onClick: () => setIsApiKeyModalOpen(true),
		disabled,
		children: buttonText
	}), isApiKeyModalOpen && /* @__PURE__ */ jsx(api_key_modal_default, {
		pluginPayload,
		onClose: () => setIsApiKeyModalOpen(false),
		onUpdate,
		formSchemas
	})] });
};
var add_api_key_button_default = memo(AddApiKeyButton);
//#endregion
//#region utils/urlValidation.ts
/**
* Validates that a URL is safe for redirection.
* Only allows HTTP and HTTPS protocols to prevent XSS attacks.
*
* @param url - The URL string to validate
* @throws Error if the URL has an unsafe protocol
*/
function validateRedirectUrl(url) {
	try {
		const parsedUrl = new URL(url);
		if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") throw new Error("Authorization URL must be HTTP or HTTPS");
	} catch (error) {
		if (error instanceof Error && error.message === "Authorization URL must be HTTP or HTTPS") throw error;
		throw new Error(`Invalid URL: ${url}`);
	}
}
/**
* Check if URL is a private/local network address or cloud debug URL
* @param url - The URL string to check
* @returns true if the URL is a private/local address or cloud debug URL
*/
function isPrivateOrLocalAddress(url) {
	try {
		const hostname = new URL(url).hostname.toLowerCase();
		if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1") return true;
		const ipv4Match = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.exec(hostname);
		if (ipv4Match) {
			const [, a, b] = ipv4Match.map(Number);
			if (a === 10) return true;
			if (a === 172 && b >= 16 && b <= 31) return true;
			if (a === 192 && b === 168) return true;
			if (a === 169 && b === 254) return true;
		}
		return hostname.endsWith(".local");
	} catch {
		return false;
	}
}
//#endregion
//#region hooks/use-oauth.ts
var useOAuthCallback = () => {
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const subscriptionId = urlParams.get("subscription_id");
		const error = urlParams.get("error");
		const errorDescription = urlParams.get("error_description");
		if (window.opener) {
			const targetOrigin = window.opener?.origin || "*";
			if (subscriptionId) window.opener.postMessage({
				type: "oauth_callback",
				success: true,
				subscriptionId
			}, targetOrigin);
			else if (error) window.opener.postMessage({
				type: "oauth_callback",
				success: false,
				error,
				errorDescription
			}, targetOrigin);
			else window.opener.postMessage({ type: "oauth_callback" }, targetOrigin);
			window.close();
		}
	}, []);
};
var openOAuthPopup = (url, callback) => {
	const width = 600;
	const height = 600;
	const left = window.screenX + (window.outerWidth - width) / 2;
	const top = window.screenY + (window.outerHeight - height) / 2;
	validateRedirectUrl(url);
	const popup = window.open(url, "OAuth", `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`);
	const handleMessage = (event) => {
		if (event.data?.type === "oauth_callback") {
			window.removeEventListener("message", handleMessage);
			callback(event.data);
		}
	};
	window.addEventListener("message", handleMessage);
	const checkClosed = setInterval(() => {
		if (popup?.closed) {
			clearInterval(checkClosed);
			window.removeEventListener("message", handleMessage);
			callback();
		}
	}, 1e3);
	return popup;
};
//#endregion
//#region app/components/plugins/plugin-auth/authorize/oauth-client-settings.tsx
var OAuthClientSettings = ({ pluginPayload, onClose, editValues, disabled, schemas, onAuth, hasOriginalClientParams, onUpdate }) => {
	const { t } = useTranslation();
	const { notify } = useToastContext();
	const [doingAction, setDoingAction] = useState(false);
	const doingActionRef = useRef(doingAction);
	const handleSetDoingAction = useCallback((value) => {
		doingActionRef.current = value;
		setDoingAction(value);
	}, []);
	const defaultValues = schemas.reduce((acc, schema) => {
		if (schema.default) acc[schema.name] = schema.default;
		return acc;
	}, {});
	const { mutateAsync: setPluginOAuthCustomClient } = useSetPluginOAuthCustomClientHook(pluginPayload);
	const invalidPluginOAuthClientSchema = useInvalidPluginOAuthClientSchemaHook(pluginPayload);
	const formRef = useRef(null);
	const handleConfirm = useCallback(async () => {
		if (doingActionRef.current) return;
		try {
			const { isCheckValidated, values } = formRef.current?.getFormValues({
				needCheckValidatedValues: true,
				needTransformWhenSecretFieldIsPristine: true
			}) || {
				isCheckValidated: false,
				values: {}
			};
			if (!isCheckValidated) throw new Error("error");
			const { __oauth_client__, ...restValues } = values;
			handleSetDoingAction(true);
			await setPluginOAuthCustomClient({
				client_params: restValues,
				enable_oauth_custom_client: __oauth_client__ === "custom"
			});
			notify({
				type: "success",
				message: t("api.actionSuccess", { ns: "common" })
			});
			onClose?.();
			onUpdate?.();
			invalidPluginOAuthClientSchema();
		} finally {
			handleSetDoingAction(false);
		}
	}, [
		onClose,
		onUpdate,
		invalidPluginOAuthClientSchema,
		setPluginOAuthCustomClient,
		notify,
		t,
		handleSetDoingAction
	]);
	const handleConfirmAndAuthorize = useCallback(async () => {
		await handleConfirm();
		if (onAuth) await onAuth();
	}, [handleConfirm, onAuth]);
	const { mutateAsync: deletePluginOAuthCustomClient } = useDeletePluginOAuthCustomClientHook(pluginPayload);
	const handleRemove = useCallback(async () => {
		if (doingActionRef.current) return;
		try {
			handleSetDoingAction(true);
			await deletePluginOAuthCustomClient();
			notify({
				type: "success",
				message: t("api.actionSuccess", { ns: "common" })
			});
			onClose?.();
			onUpdate?.();
			invalidPluginOAuthClientSchema();
		} finally {
			handleSetDoingAction(false);
		}
	}, [
		onUpdate,
		invalidPluginOAuthClientSchema,
		deletePluginOAuthCustomClient,
		notify,
		t,
		handleSetDoingAction,
		onClose
	]);
	const form = useForm({ defaultValues: editValues || defaultValues });
	const __oauth_client__ = useStore(form.store, (s) => s.values.__oauth_client__);
	return /* @__PURE__ */ jsxs(modal_default, {
		title: t("auth.oauthClientSettings", { ns: "plugin" }),
		confirmButtonText: t("auth.saveAndAuth", { ns: "plugin" }),
		cancelButtonText: t("auth.saveOnly", { ns: "plugin" }),
		extraButtonText: t("operation.cancel", { ns: "common" }),
		showExtraButton: true,
		extraButtonVariant: "secondary",
		onExtraButtonClick: onClose,
		onClose,
		onCancel: handleConfirm,
		onConfirm: handleConfirmAndAuthorize,
		disabled: disabled || doingAction,
		footerSlot: __oauth_client__ === "custom" && hasOriginalClientParams && /* @__PURE__ */ jsx("div", {
			className: "grow",
			children: /* @__PURE__ */ jsx(Button, {
				variant: "secondary",
				className: "text-components-button-destructive-secondary-text",
				disabled: disabled || doingAction || !editValues,
				onClick: handleRemove,
				children: t("operation.remove", { ns: "common" })
			})
		}),
		containerClassName: "pt-0",
		wrapperClassName: "!z-[101]",
		clickOutsideNotClose: true,
		children: [pluginPayload.detail && /* @__PURE__ */ jsx(ReadmeEntrance, {
			pluginDetail: pluginPayload.detail,
			showType: ReadmeShowType.modal
		}), /* @__PURE__ */ jsx(auth_default, {
			formFromProps: form,
			ref: formRef,
			formSchemas: schemas,
			defaultValues: editValues || defaultValues,
			disabled
		})]
	});
};
var oauth_client_settings_default = memo(OAuthClientSettings);
//#endregion
//#region app/components/plugins/plugin-auth/authorize/add-oauth-button.tsx
var AddOAuthButton = ({ pluginPayload, buttonVariant = "primary", buttonText = "use oauth", className, buttonLeftClassName, buttonRightClassName, dividerClassName, disabled, onUpdate, oAuthData }) => {
	const { t } = useTranslation();
	const renderI18nObject = useRenderI18nObject();
	const [isOAuthSettingsOpen, setIsOAuthSettingsOpen] = useState(false);
	const { mutateAsync: getPluginOAuthUrl } = useGetPluginOAuthUrlHook(pluginPayload);
	const { data, isLoading } = useGetPluginOAuthClientSchemaHook(pluginPayload);
	const { schema = [], is_oauth_custom_client_enabled, is_system_oauth_params_exists, client_params, redirect_uri } = useMemo(() => {
		if (oAuthData) return oAuthData;
		return data;
	}, [oAuthData, data]) || {};
	const isConfigured = is_system_oauth_params_exists || is_oauth_custom_client_enabled;
	const handleOAuth = useCallback(async () => {
		const { authorization_url } = await getPluginOAuthUrl();
		if (authorization_url) openOAuthPopup(authorization_url, () => onUpdate?.());
	}, [getPluginOAuthUrl, onUpdate]);
	const renderCustomLabel = useCallback((item) => {
		return /* @__PURE__ */ jsxs("div", {
			className: "w-full",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-4 flex rounded-xl bg-background-section-burn p-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "mr-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-[0.5px] border-components-card-border bg-components-card-bg shadow-lg",
					children: /* @__PURE__ */ jsx(Ky, { className: "h-5 w-5 text-text-accent" })
				}), /* @__PURE__ */ jsxs("div", {
					className: "w-0 grow",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-sm-regular mb-1.5",
						children: t("auth.clientInfo", { ns: "plugin" })
					}), redirect_uri && /* @__PURE__ */ jsxs("div", {
						className: "system-sm-medium flex w-full py-0.5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-0 grow break-words break-all",
							children: redirect_uri
						}), /* @__PURE__ */ jsx(ActionButton, {
							className: "shrink-0",
							onClick: () => {
								navigator.clipboard.writeText(redirect_uri || "");
							},
							children: /* @__PURE__ */ jsx(B7, { className: "h-4 w-4" })
						})]
					})]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "system-sm-medium flex h-6 items-center text-text-secondary",
				children: [renderI18nObject(item.label), item.required && /* @__PURE__ */ jsx("span", {
					className: "ml-1 text-text-destructive-secondary",
					children: "*"
				})]
			})]
		});
	}, [
		t,
		redirect_uri,
		renderI18nObject
	]);
	const memorizedSchemas = useMemo(() => {
		const result = schema.map((item, index) => {
			return {
				...item,
				label: index === 0 ? renderCustomLabel(item) : item.label,
				labelClassName: index === 0 ? "h-auto" : void 0
			};
		});
		if (is_system_oauth_params_exists) {
			result.unshift({
				name: "__oauth_client__",
				label: t("auth.oauthClient", { ns: "plugin" }),
				type: FormTypeEnum.radio,
				options: [{
					label: t("auth.default", { ns: "plugin" }),
					value: "default"
				}, {
					label: t("auth.custom", { ns: "plugin" }),
					value: "custom"
				}],
				required: false,
				default: is_oauth_custom_client_enabled ? "custom" : "default"
			});
			result.forEach((item, index) => {
				if (index > 0) {
					item.show_on = [{
						variable: "__oauth_client__",
						value: "custom"
					}];
					if (client_params) item.default = client_params[item.name] || item.default;
				}
			});
		}
		return result;
	}, [
		schema,
		renderCustomLabel,
		t,
		is_system_oauth_params_exists,
		is_oauth_custom_client_enabled,
		client_params
	]);
	const __auth_client__ = useMemo(() => {
		if (isConfigured) {
			if (is_oauth_custom_client_enabled) return "custom";
			return "default";
		} else {
			if (is_system_oauth_params_exists) return "default";
			return "custom";
		}
	}, [
		isConfigured,
		is_oauth_custom_client_enabled,
		is_system_oauth_params_exists
	]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		isConfigured && /* @__PURE__ */ jsxs(Button, {
			variant: buttonVariant,
			className: cn("w-full px-0 py-0 hover:bg-components-button-primary-bg", className),
			disabled,
			onClick: handleOAuth,
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: cn("flex h-full w-0 grow items-center justify-center rounded-l-lg pl-0.5 hover:bg-components-button-primary-bg-hover", buttonLeftClassName),
					children: [/* @__PURE__ */ jsx("div", {
						className: "truncate",
						title: buttonText,
						children: buttonText
					}), is_oauth_custom_client_enabled && /* @__PURE__ */ jsx(badge_default, {
						className: cn("ml-1 mr-0.5", buttonVariant === "primary" && "border-text-primary-on-surface bg-components-badge-bg-dimm text-text-primary-on-surface"),
						children: t("auth.custom", { ns: "plugin" })
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: cn("h-4 w-[1px] shrink-0 bg-text-primary-on-surface opacity-[0.15]", dividerClassName) }),
				/* @__PURE__ */ jsx("div", {
					"data-testid": "oauth-settings-button",
					className: cn("flex h-full w-8 shrink-0 items-center justify-center rounded-r-lg hover:bg-components-button-primary-bg-hover", buttonRightClassName),
					onClick: (e) => {
						e.stopPropagation();
						setIsOAuthSettingsOpen(true);
					},
					children: /* @__PURE__ */ jsx(AD, { className: "h-4 w-4" })
				})
			]
		}),
		!isConfigured && /* @__PURE__ */ jsxs(Button, {
			variant: buttonVariant,
			onClick: () => setIsOAuthSettingsOpen(true),
			disabled,
			className: "w-full",
			children: [/* @__PURE__ */ jsx(AD, { className: "mr-0.5 h-4 w-4" }), t("auth.setupOAuth", { ns: "plugin" })]
		}),
		isOAuthSettingsOpen && /* @__PURE__ */ jsx(oauth_client_settings_default, {
			pluginPayload,
			onClose: () => setIsOAuthSettingsOpen(false),
			disabled: disabled || isLoading,
			schemas: memorizedSchemas,
			onAuth: handleOAuth,
			editValues: {
				...client_params,
				__oauth_client__: __auth_client__
			},
			hasOriginalClientParams: Object.keys(client_params || {}).length > 0,
			onUpdate
		})
	] });
};
var add_oauth_button_default = memo(AddOAuthButton);
//#endregion
//#region app/components/plugins/plugin-auth/authorize/index.tsx
var Authorize = ({ pluginPayload, theme = "primary", showDivider = true, canOAuth, canApiKey, disabled, onUpdate, notAllowCustomCredential }) => {
	const { t } = useTranslation();
	const oAuthButtonProps = useMemo(() => {
		if (theme === "secondary") return {
			buttonText: !canApiKey ? t("auth.useOAuthAuth", { ns: "plugin" }) : t("auth.addOAuth", { ns: "plugin" }),
			buttonVariant: "secondary",
			className: "hover:bg-components-button-secondary-bg",
			buttonLeftClassName: "hover:bg-components-button-secondary-bg-hover",
			buttonRightClassName: "hover:bg-components-button-secondary-bg-hover",
			dividerClassName: "bg-divider-regular opacity-100",
			pluginPayload
		};
		return {
			buttonText: !canApiKey ? t("auth.useOAuthAuth", { ns: "plugin" }) : t("auth.addOAuth", { ns: "plugin" }),
			pluginPayload
		};
	}, [
		canApiKey,
		theme,
		pluginPayload,
		t
	]);
	const apiKeyButtonProps = useMemo(() => {
		if (theme === "secondary") return {
			pluginPayload,
			buttonVariant: "secondary",
			buttonText: !canOAuth ? t("auth.useApiAuth", { ns: "plugin" }) : t("auth.addApi", { ns: "plugin" })
		};
		return {
			pluginPayload,
			buttonText: !canOAuth ? t("auth.useApiAuth", { ns: "plugin" }) : t("auth.addApi", { ns: "plugin" }),
			buttonVariant: !canOAuth ? "primary" : "secondary-accent"
		};
	}, [
		canOAuth,
		theme,
		pluginPayload,
		t
	]);
	const OAuthButton = useMemo(() => {
		const Item = /* @__PURE__ */ jsx("div", {
			className: cn("min-w-0 flex-[1]", notAllowCustomCredential && "opacity-50"),
			children: /* @__PURE__ */ jsx(add_oauth_button_default, {
				...oAuthButtonProps,
				disabled: disabled || notAllowCustomCredential,
				onUpdate
			})
		});
		if (notAllowCustomCredential) return /* @__PURE__ */ jsx(tooltip_default, {
			popupContent: t("auth.credentialUnavailable", { ns: "plugin" }),
			children: Item
		});
		return Item;
	}, [
		notAllowCustomCredential,
		oAuthButtonProps,
		disabled,
		onUpdate,
		t
	]);
	const ApiKeyButton = useMemo(() => {
		const Item = /* @__PURE__ */ jsx("div", {
			className: cn("min-w-0 flex-[1]", notAllowCustomCredential && "opacity-50"),
			children: /* @__PURE__ */ jsx(add_api_key_button_default, {
				...apiKeyButtonProps,
				disabled: disabled || notAllowCustomCredential,
				onUpdate
			})
		});
		if (notAllowCustomCredential) return /* @__PURE__ */ jsx(tooltip_default, {
			popupContent: t("auth.credentialUnavailable", { ns: "plugin" }),
			children: Item
		});
		return Item;
	}, [
		notAllowCustomCredential,
		apiKeyButtonProps,
		disabled,
		onUpdate,
		t
	]);
	return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", {
		className: "flex items-center space-x-1.5",
		children: [
			canOAuth && OAuthButton,
			showDivider && canOAuth && canApiKey && /* @__PURE__ */ jsxs("div", {
				className: "system-2xs-medium-uppercase flex shrink-0 flex-col items-center justify-between text-text-tertiary",
				children: [
					/* @__PURE__ */ jsx("div", { className: "h-2 w-[1px] bg-divider-subtle" }),
					"or",
					/* @__PURE__ */ jsx("div", { className: "h-2 w-[1px] bg-divider-subtle" })
				]
			}),
			canApiKey && ApiKeyButton
		]
	}) });
};
var authorize_default = memo(Authorize);
//#endregion
//#region app/components/plugins/plugin-auth/authorized/item.tsx
var Item = ({ credential, disabled, onDelete, onEdit, onSetDefault, onRename, disableRename, disableEdit, disableDelete, disableSetDefault, onItemClick, showSelectedIcon, selectedCredentialId }) => {
	const { t } = useTranslation();
	const [renaming, setRenaming] = useState(false);
	const [renameValue, setRenameValue] = useState(credential.name);
	const isOAuth = credential.credential_type === CredentialTypeEnum.OAUTH2;
	const showAction = useMemo(() => {
		return !(disableRename && disableEdit && disableDelete && disableSetDefault);
	}, [
		disableRename,
		disableEdit,
		disableDelete,
		disableSetDefault
	]);
	const CredentialItem = /* @__PURE__ */ jsxs("div", {
		className: cn("group flex h-8 items-center rounded-lg p-1 hover:bg-state-base-hover", renaming && "bg-state-base-hover", (disabled || credential.not_allowed_to_use) && "cursor-not-allowed opacity-50"),
		onClick: () => {
			if (credential.not_allowed_to_use || disabled) return;
			onItemClick?.(credential.id === "__workspace_default__" ? "" : credential.id);
		},
		children: [
			renaming && /* @__PURE__ */ jsxs("div", {
				className: "flex w-full items-center space-x-1",
				children: [
					/* @__PURE__ */ jsx(Input, {
						wrapperClassName: "grow rounded-[6px]",
						className: "h-6",
						value: renameValue,
						onChange: (e) => setRenameValue(e.target.value),
						placeholder: t("placeholder.input", { ns: "common" }),
						onClick: (e) => e.stopPropagation()
					}),
					/* @__PURE__ */ jsx(Button, {
						size: "small",
						variant: "primary",
						onClick: (e) => {
							e.stopPropagation();
							onRename?.({
								credential_id: credential.id,
								name: renameValue
							});
							setRenaming(false);
						},
						children: t("operation.save", { ns: "common" })
					}),
					/* @__PURE__ */ jsx(Button, {
						size: "small",
						onClick: (e) => {
							e.stopPropagation();
							setRenaming(false);
						},
						children: t("operation.cancel", { ns: "common" })
					})
				]
			}),
			!renaming && /* @__PURE__ */ jsxs("div", {
				className: "flex w-0 grow items-center space-x-1.5",
				children: [
					showSelectedIcon && /* @__PURE__ */ jsx("div", {
						className: "h-4 w-4",
						children: selectedCredentialId === credential.id && /* @__PURE__ */ jsx(s7, { className: "h-4 w-4 text-text-accent" })
					}),
					/* @__PURE__ */ jsx(Indicator, {
						className: "ml-2 mr-1.5 shrink-0",
						color: credential.not_allowed_to_use ? "gray" : "green"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "system-md-regular truncate text-text-secondary",
						title: credential.name,
						children: credential.name
					}),
					credential.is_default && /* @__PURE__ */ jsx(badge_default, {
						className: "shrink-0",
						children: t("auth.default", { ns: "plugin" })
					})
				]
			}),
			credential.from_enterprise && /* @__PURE__ */ jsx(badge_default, {
				className: "shrink-0",
				children: "Enterprise"
			}),
			showAction && !renaming && /* @__PURE__ */ jsxs("div", {
				className: "ml-2 hidden shrink-0 items-center group-hover:flex",
				children: [
					!credential.is_default && !disableSetDefault && !credential.not_allowed_to_use && /* @__PURE__ */ jsx(Button, {
						size: "small",
						disabled,
						onClick: (e) => {
							e.stopPropagation();
							onSetDefault?.(credential.id);
						},
						children: t("auth.setDefault", { ns: "plugin" })
					}),
					!disableRename && !credential.from_enterprise && !credential.not_allowed_to_use && /* @__PURE__ */ jsx(tooltip_default, {
						popupContent: t("operation.rename", { ns: "common" }),
						children: /* @__PURE__ */ jsx(ActionButton, {
							disabled,
							onClick: (e) => {
								e.stopPropagation();
								setRenaming(true);
								setRenameValue(credential.name);
							},
							children: /* @__PURE__ */ jsx(Ct, { className: "h-4 w-4 text-text-tertiary" })
						})
					}),
					!isOAuth && !disableEdit && !credential.from_enterprise && !credential.not_allowed_to_use && /* @__PURE__ */ jsx(tooltip_default, {
						popupContent: t("operation.edit", { ns: "common" }),
						children: /* @__PURE__ */ jsx(ActionButton, {
							disabled,
							onClick: (e) => {
								e.stopPropagation();
								onEdit?.(credential.id, {
									...credential.credentials,
									__name__: credential.name,
									__credential_id__: credential.id
								});
							},
							children: /* @__PURE__ */ jsx(AD, { className: "h-4 w-4 text-text-tertiary" })
						})
					}),
					!disableDelete && !credential.from_enterprise && /* @__PURE__ */ jsx(tooltip_default, {
						popupContent: t("operation.delete", { ns: "common" }),
						children: /* @__PURE__ */ jsx(ActionButton, {
							className: "hover:bg-transparent",
							disabled,
							onClick: (e) => {
								e.stopPropagation();
								onDelete?.(credential.id);
							},
							children: /* @__PURE__ */ jsx(M6, { className: "h-4 w-4 text-text-tertiary hover:text-text-destructive" })
						})
					})
				]
			})
		]
	}, credential.id);
	if (credential.not_allowed_to_use) return /* @__PURE__ */ jsx(tooltip_default, {
		popupContent: t("auth.customCredentialUnavailable", { ns: "plugin" }),
		children: CredentialItem
	});
	return CredentialItem;
};
var item_default = memo(Item);
//#endregion
//#region app/components/plugins/plugin-auth/authorized/index.tsx
var Authorized = ({ pluginPayload, credentials, canOAuth, canApiKey, disabled, renderTrigger, isOpen, onOpenChange, offset = 8, placement = "bottom-start", triggerPopupSameWidth = true, popupClassName, disableSetDefault, onItemClick, extraAuthorizationItems, showItemSelectedIcon, selectedCredentialId, onUpdate, notAllowCustomCredential }) => {
	const { t } = useTranslation();
	const { notify } = useToastContext();
	const [isLocalOpen, setIsLocalOpen] = useState(false);
	const mergedIsOpen = isOpen ?? isLocalOpen;
	const setMergedIsOpen = useCallback((open) => {
		if (onOpenChange) onOpenChange(open);
		setIsLocalOpen(open);
	}, [onOpenChange]);
	const oAuthCredentials = credentials.filter((credential) => credential.credential_type === CredentialTypeEnum.OAUTH2);
	const apiKeyCredentials = credentials.filter((credential) => credential.credential_type === CredentialTypeEnum.API_KEY);
	const pendingOperationCredentialId = useRef(null);
	const [deleteCredentialId, setDeleteCredentialId] = useState(null);
	const { mutateAsync: deletePluginCredential } = useDeletePluginCredentialHook(pluginPayload);
	const openConfirm = useCallback((credentialId) => {
		if (credentialId) pendingOperationCredentialId.current = credentialId;
		setDeleteCredentialId(pendingOperationCredentialId.current);
	}, []);
	const closeConfirm = useCallback(() => {
		setDeleteCredentialId(null);
		pendingOperationCredentialId.current = null;
	}, []);
	const [doingAction, setDoingAction] = useState(false);
	const doingActionRef = useRef(doingAction);
	const handleSetDoingAction = useCallback((doing) => {
		doingActionRef.current = doing;
		setDoingAction(doing);
	}, []);
	const handleConfirm = useCallback(async () => {
		if (doingActionRef.current) return;
		if (!pendingOperationCredentialId.current) {
			setDeleteCredentialId(null);
			return;
		}
		try {
			handleSetDoingAction(true);
			await deletePluginCredential({ credential_id: pendingOperationCredentialId.current });
			notify({
				type: "success",
				message: t("api.actionSuccess", { ns: "common" })
			});
			onUpdate?.();
			setDeleteCredentialId(null);
			pendingOperationCredentialId.current = null;
		} finally {
			handleSetDoingAction(false);
		}
	}, [
		deletePluginCredential,
		onUpdate,
		notify,
		t,
		handleSetDoingAction
	]);
	const [editValues, setEditValues] = useState(null);
	const handleEdit = useCallback((id, values) => {
		pendingOperationCredentialId.current = id;
		setEditValues(values);
	}, []);
	const handleRemove = useCallback(() => {
		setDeleteCredentialId(pendingOperationCredentialId.current);
	}, []);
	const { mutateAsync: setPluginDefaultCredential } = useSetPluginDefaultCredentialHook(pluginPayload);
	const handleSetDefault = useCallback(async (id) => {
		if (doingActionRef.current) return;
		try {
			handleSetDoingAction(true);
			await setPluginDefaultCredential(id);
			notify({
				type: "success",
				message: t("api.actionSuccess", { ns: "common" })
			});
			onUpdate?.();
		} finally {
			handleSetDoingAction(false);
		}
	}, [
		setPluginDefaultCredential,
		onUpdate,
		notify,
		t,
		handleSetDoingAction
	]);
	const { mutateAsync: updatePluginCredential } = useUpdatePluginCredentialHook(pluginPayload);
	const handleRename = useCallback(async (payload) => {
		if (doingActionRef.current) return;
		try {
			handleSetDoingAction(true);
			await updatePluginCredential(payload);
			notify({
				type: "success",
				message: t("api.actionSuccess", { ns: "common" })
			});
			onUpdate?.();
		} finally {
			handleSetDoingAction(false);
		}
	}, [
		updatePluginCredential,
		notify,
		t,
		handleSetDoingAction,
		onUpdate
	]);
	const unavailableCredentials = credentials.filter((credential) => credential.not_allowed_to_use);
	const unavailableCredential = credentials.find((credential) => credential.not_allowed_to_use && credential.is_default);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsxs(PortalToFollowElem, {
			open: mergedIsOpen,
			onOpenChange: setMergedIsOpen,
			placement,
			offset,
			triggerPopupSameWidth,
			children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
				onClick: () => setMergedIsOpen(!mergedIsOpen),
				asChild: true,
				children: renderTrigger ? renderTrigger(mergedIsOpen) : /* @__PURE__ */ jsxs(Button, {
					className: cn("w-full", isOpen && "bg-components-button-secondary-bg-hover"),
					children: [
						/* @__PURE__ */ jsx(Indicator, {
							className: "mr-2",
							color: unavailableCredential ? "gray" : "green"
						}),
						credentials.length,
						"\xA0",
						credentials.length > 1 ? t("auth.authorizations", { ns: "plugin" }) : t("auth.authorization", { ns: "plugin" }),
						!!unavailableCredentials.length && ` (${unavailableCredentials.length} ${t("auth.unavailable", { ns: "plugin" })})`,
						/* @__PURE__ */ jsx(f1, { className: "ml-0.5 h-4 w-4" })
					]
				})
			}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
				className: "z-[100]",
				children: /* @__PURE__ */ jsxs("div", {
					className: cn("max-h-[360px] overflow-y-auto rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg", popupClassName),
					children: [/* @__PURE__ */ jsxs("div", {
						className: "py-1",
						children: [
							!!extraAuthorizationItems?.length && /* @__PURE__ */ jsx("div", {
								className: "p-1",
								children: extraAuthorizationItems.map((credential) => /* @__PURE__ */ jsx(item_default, {
									credential,
									disabled,
									onItemClick,
									disableRename: true,
									disableEdit: true,
									disableDelete: true,
									disableSetDefault: true,
									showSelectedIcon: showItemSelectedIcon,
									selectedCredentialId
								}, credential.id))
							}),
							!!oAuthCredentials.length && /* @__PURE__ */ jsxs("div", {
								className: "p-1",
								children: [/* @__PURE__ */ jsx("div", {
									className: cn("px-3 pb-0.5 pt-1 text-text-tertiary system-xs-medium", showItemSelectedIcon && "pl-7"),
									children: "OAuth"
								}), oAuthCredentials.map((credential) => /* @__PURE__ */ jsx(item_default, {
									credential,
									disabled,
									disableEdit: true,
									onDelete: openConfirm,
									onSetDefault: handleSetDefault,
									onRename: handleRename,
									disableSetDefault,
									onItemClick,
									showSelectedIcon: showItemSelectedIcon,
									selectedCredentialId
								}, credential.id))]
							}),
							!!apiKeyCredentials.length && /* @__PURE__ */ jsxs("div", {
								className: "p-1",
								children: [/* @__PURE__ */ jsx("div", {
									className: cn("px-3 pb-0.5 pt-1 text-text-tertiary system-xs-medium", showItemSelectedIcon && "pl-7"),
									children: "API Keys"
								}), apiKeyCredentials.map((credential) => /* @__PURE__ */ jsx(item_default, {
									credential,
									disabled,
									onDelete: openConfirm,
									onEdit: handleEdit,
									onSetDefault: handleSetDefault,
									disableSetDefault,
									disableRename: true,
									onItemClick,
									onRename: handleRename,
									showSelectedIcon: showItemSelectedIcon,
									selectedCredentialId
								}, credential.id))]
							})
						]
					}), !notAllowCustomCredential && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-divider-subtle" }), /* @__PURE__ */ jsx("div", {
						className: "p-2",
						children: /* @__PURE__ */ jsx(authorize_default, {
							pluginPayload,
							theme: "secondary",
							showDivider: false,
							canOAuth,
							canApiKey,
							disabled,
							onUpdate
						})
					})] })]
				})
			})]
		}),
		deleteCredentialId && /* @__PURE__ */ jsx(confirm_default, {
			isShow: true,
			title: t("list.delete.title", { ns: "datasetDocuments" }),
			isDisabled: doingAction,
			onCancel: closeConfirm,
			onConfirm: handleConfirm
		}),
		!!editValues && /* @__PURE__ */ jsx(api_key_modal_default, {
			pluginPayload,
			editValues,
			onClose: () => {
				setEditValues(null);
				pendingOperationCredentialId.current = null;
			},
			onRemove: handleRemove,
			disabled: disabled || doingAction,
			onUpdate
		})
	] });
};
var authorized_default = memo(Authorized);
//#endregion
//#region app/components/plugins/plugin-auth/authorized-in-data-source-node.tsx
var AuthorizedInDataSourceNode = ({ authorizationsNum, onJumpToDataSourcePage }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Button, {
		size: "small",
		onClick: onJumpToDataSourcePage,
		children: [
			/* @__PURE__ */ jsx(Indicator, {
				className: "mr-1.5",
				color: "green"
			}),
			authorizationsNum > 1 ? t("auth.authorizations", { ns: "plugin" }) : t("auth.authorization", { ns: "plugin" }),
			/* @__PURE__ */ jsx(AD, { className: cn("h-3.5 w-3.5 text-components-button-ghost-text") })
		]
	});
};
var authorized_in_data_source_node_default = memo(AuthorizedInDataSourceNode);
//#endregion
//#region app/components/plugins/plugin-auth/authorized-in-node.tsx
var AuthorizedInNode = ({ pluginPayload, onAuthorizationItemClick, credentialId }) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const { canApiKey, canOAuth, credentials, disabled, invalidPluginCredentialInfo, notAllowCustomCredential } = usePluginAuth(pluginPayload, true);
	const renderTrigger = useCallback((open) => {
		let label = "";
		let removed = false;
		let unavailable = false;
		let color = "green";
		let defaultUnavailable = false;
		if (!credentialId) {
			label = t("auth.workspaceDefault", { ns: "plugin" });
			if (credentials.find((c) => c.is_default)?.not_allowed_to_use) {
				color = "gray";
				defaultUnavailable = true;
			}
		} else {
			const credential = credentials.find((c) => c.id === credentialId);
			label = credential ? credential.name : t("auth.authRemoved", { ns: "plugin" });
			removed = !credential;
			unavailable = !!credential?.not_allowed_to_use && !credential?.from_enterprise;
			if (removed) color = "red";
			else if (unavailable) color = "gray";
		}
		return /* @__PURE__ */ jsxs(Button, {
			size: "small",
			className: cn(open && !removed && "bg-components-button-ghost-bg-hover", removed && "bg-transparent text-text-destructive"),
			variant: defaultUnavailable || unavailable ? "ghost" : "secondary",
			children: [
				/* @__PURE__ */ jsx(Indicator, {
					className: "mr-1.5",
					color
				}),
				label,
				(unavailable || defaultUnavailable) && /* @__PURE__ */ jsxs(Fragment$1, { children: ["\xA0", t("auth.unavailable", { ns: "plugin" })] }),
				/* @__PURE__ */ jsx(f1, { className: cn("h-3.5 w-3.5 text-components-button-ghost-text", removed && "text-text-destructive") })
			]
		});
	}, [
		credentialId,
		credentials,
		t
	]);
	const defaultUnavailable = credentials.find((c) => c.is_default)?.not_allowed_to_use;
	const extraAuthorizationItems = [{
		id: "__workspace_default__",
		name: t("auth.workspaceDefault", { ns: "plugin" }),
		provider: "",
		is_default: !credentialId,
		isWorkspaceDefault: true,
		not_allowed_to_use: defaultUnavailable
	}];
	return /* @__PURE__ */ jsx(authorized_default, {
		pluginPayload,
		credentials,
		canOAuth,
		canApiKey,
		renderTrigger,
		isOpen,
		onOpenChange: setIsOpen,
		offset: 4,
		placement: "bottom-end",
		triggerPopupSameWidth: false,
		popupClassName: "w-[360px]",
		disabled,
		disableSetDefault: true,
		onItemClick: useCallback((id) => {
			onAuthorizationItemClick(id);
			setIsOpen(false);
		}, [onAuthorizationItemClick, setIsOpen]),
		extraAuthorizationItems,
		showItemSelectedIcon: true,
		selectedCredentialId: credentialId || "__workspace_default__",
		onUpdate: invalidPluginCredentialInfo,
		notAllowCustomCredential
	});
};
var authorized_in_node_default = memo(AuthorizedInNode);
//#endregion
//#region app/components/plugins/plugin-auth/hooks/use-plugin-auth.ts
var usePluginAuth = (pluginPayload, enable) => {
	const { data } = useGetPluginCredentialInfoHook(pluginPayload, enable);
	const { isCurrentWorkspaceManager } = useAppContext();
	const isAuthorized = !!data?.credentials.length;
	const canOAuth = data?.supported_credential_types.includes(CredentialTypeEnum.OAUTH2);
	const canApiKey = data?.supported_credential_types.includes(CredentialTypeEnum.API_KEY);
	const invalidPluginCredentialInfo = useInvalidPluginCredentialInfoHook(pluginPayload);
	return {
		isAuthorized,
		canOAuth,
		canApiKey,
		credentials: data?.credentials || [],
		disabled: !isCurrentWorkspaceManager,
		notAllowCustomCredential: data?.allow_custom_token === false,
		invalidPluginCredentialInfo
	};
};
//#endregion
//#region app/components/plugins/plugin-auth/hooks/use-plugin-auth-action.ts
var usePluginAuthAction = (pluginPayload, onUpdate) => {
	const { t } = useTranslation();
	const { notify } = useToastContext();
	const pendingOperationCredentialId = useRef(null);
	const [deleteCredentialId, setDeleteCredentialId] = useState(null);
	const { mutateAsync: deletePluginCredential } = useDeletePluginCredentialHook(pluginPayload);
	const openConfirm = useCallback((credentialId) => {
		if (credentialId) pendingOperationCredentialId.current = credentialId;
		setDeleteCredentialId(pendingOperationCredentialId.current);
	}, []);
	const closeConfirm = useCallback(() => {
		setDeleteCredentialId(null);
		pendingOperationCredentialId.current = null;
	}, []);
	const [doingAction, setDoingAction] = useState(false);
	const doingActionRef = useRef(doingAction);
	const handleSetDoingAction = useCallback((doing) => {
		doingActionRef.current = doing;
		setDoingAction(doing);
	}, []);
	const [editValues, setEditValues] = useState(null);
	const handleConfirm = useCallback(async () => {
		if (doingActionRef.current) return;
		if (!pendingOperationCredentialId.current) {
			setDeleteCredentialId(null);
			return;
		}
		try {
			handleSetDoingAction(true);
			await deletePluginCredential({ credential_id: pendingOperationCredentialId.current });
			notify({
				type: "success",
				message: t("api.actionSuccess", { ns: "common" })
			});
			onUpdate?.();
			setDeleteCredentialId(null);
			pendingOperationCredentialId.current = null;
			setEditValues(null);
		} finally {
			handleSetDoingAction(false);
		}
	}, [
		deletePluginCredential,
		onUpdate,
		notify,
		t,
		handleSetDoingAction
	]);
	const handleEdit = useCallback((id, values) => {
		pendingOperationCredentialId.current = id;
		setEditValues(values);
	}, []);
	const handleRemove = useCallback(() => {
		setDeleteCredentialId(pendingOperationCredentialId.current);
	}, []);
	const { mutateAsync: setPluginDefaultCredential } = useSetPluginDefaultCredentialHook(pluginPayload);
	const handleSetDefault = useCallback(async (id) => {
		if (doingActionRef.current) return;
		try {
			handleSetDoingAction(true);
			await setPluginDefaultCredential(id);
			notify({
				type: "success",
				message: t("api.actionSuccess", { ns: "common" })
			});
			onUpdate?.();
		} finally {
			handleSetDoingAction(false);
		}
	}, [
		setPluginDefaultCredential,
		onUpdate,
		notify,
		t,
		handleSetDoingAction
	]);
	const { mutateAsync: updatePluginCredential } = useUpdatePluginCredentialHook(pluginPayload);
	return {
		doingAction,
		handleSetDoingAction,
		openConfirm,
		closeConfirm,
		deleteCredentialId,
		setDeleteCredentialId,
		handleConfirm,
		editValues,
		setEditValues,
		handleEdit,
		handleRemove,
		handleSetDefault,
		handleRename: useCallback(async (payload) => {
			if (doingActionRef.current) return;
			try {
				handleSetDoingAction(true);
				await updatePluginCredential(payload);
				notify({
					type: "success",
					message: t("api.actionSuccess", { ns: "common" })
				});
				onUpdate?.();
			} finally {
				handleSetDoingAction(false);
			}
		}, [
			updatePluginCredential,
			notify,
			t,
			handleSetDoingAction,
			onUpdate
		]),
		pendingOperationCredentialId
	};
};
//#endregion
//#region app/components/plugins/plugin-auth/plugin-auth.tsx
var PluginAuth = ({ pluginPayload, children, className }) => {
	const { isAuthorized, canOAuth, canApiKey, credentials, disabled, invalidPluginCredentialInfo, notAllowCustomCredential } = usePluginAuth(pluginPayload, !!pluginPayload.provider);
	return /* @__PURE__ */ jsxs("div", {
		className: cn(!isAuthorized && className),
		children: [
			!isAuthorized && /* @__PURE__ */ jsx(authorize_default, {
				pluginPayload,
				canOAuth,
				canApiKey,
				disabled,
				onUpdate: invalidPluginCredentialInfo,
				notAllowCustomCredential
			}),
			isAuthorized && !children && /* @__PURE__ */ jsx(authorized_default, {
				pluginPayload,
				credentials,
				canOAuth,
				canApiKey,
				disabled,
				onUpdate: invalidPluginCredentialInfo,
				notAllowCustomCredential
			}),
			isAuthorized && children
		]
	});
};
var plugin_auth_default = memo(PluginAuth);
//#endregion
//#region app/components/plugins/plugin-auth/plugin-auth-in-agent.tsx
var PluginAuthInAgent = ({ pluginPayload, credentialId, onAuthorizationItemClick }) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const { isAuthorized, canOAuth, canApiKey, credentials, disabled, invalidPluginCredentialInfo, notAllowCustomCredential } = usePluginAuth(pluginPayload, true);
	const extraAuthorizationItems = [{
		id: "__workspace_default__",
		name: t("auth.workspaceDefault", { ns: "plugin" }),
		provider: "",
		is_default: !credentialId,
		isWorkspaceDefault: true
	}];
	const handleAuthorizationItemClick = useCallback((id) => {
		onAuthorizationItemClick?.(id);
		setIsOpen(false);
	}, [onAuthorizationItemClick, setIsOpen]);
	const renderTrigger = useCallback((isOpen) => {
		let label = "";
		let removed = false;
		let unavailable = false;
		let color = "green";
		if (!credentialId) label = t("auth.workspaceDefault", { ns: "plugin" });
		else {
			const credential = credentials.find((c) => c.id === credentialId);
			label = credential ? credential.name : t("auth.authRemoved", { ns: "plugin" });
			removed = !credential;
			unavailable = !!credential?.not_allowed_to_use && !credential?.from_enterprise;
			if (removed) color = "red";
			else if (unavailable) color = "gray";
		}
		return /* @__PURE__ */ jsxs(Button, {
			className: cn("w-full", isOpen && "bg-components-button-secondary-bg-hover", removed && "text-text-destructive"),
			children: [
				/* @__PURE__ */ jsx(Indicator, {
					className: "mr-2",
					color
				}),
				label,
				unavailable && t("auth.unavailable", { ns: "plugin" }),
				/* @__PURE__ */ jsx(f1, { className: "ml-0.5 h-4 w-4" })
			]
		});
	}, [
		credentialId,
		credentials,
		t
	]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [!isAuthorized && /* @__PURE__ */ jsx(authorize_default, {
		pluginPayload,
		canOAuth,
		canApiKey,
		disabled,
		onUpdate: invalidPluginCredentialInfo,
		notAllowCustomCredential
	}), isAuthorized && /* @__PURE__ */ jsx(authorized_default, {
		pluginPayload,
		credentials,
		canOAuth,
		canApiKey,
		disabled,
		disableSetDefault: true,
		onItemClick: handleAuthorizationItemClick,
		extraAuthorizationItems,
		showItemSelectedIcon: true,
		renderTrigger,
		isOpen,
		onOpenChange: setIsOpen,
		selectedCredentialId: credentialId || "__workspace_default__",
		onUpdate: invalidPluginCredentialInfo,
		notAllowCustomCredential
	})] });
};
var plugin_auth_in_agent_default = memo(PluginAuthInAgent);
//#endregion
//#region app/components/plugins/plugin-auth/plugin-auth-in-datasource-node.tsx
var PluginAuthInDataSourceNode = ({ children, isAuthorized, onJumpToDataSourcePage }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [!isAuthorized && /* @__PURE__ */ jsx("div", {
		className: "px-4 pb-2",
		children: /* @__PURE__ */ jsxs(Button, {
			className: "w-full",
			variant: "primary",
			onClick: onJumpToDataSourcePage,
			children: [/* @__PURE__ */ jsx(p, { className: "mr-1 h-4 w-4" }), t("integrations.connect", { ns: "common" })]
		})
	}), isAuthorized && children] });
};
var plugin_auth_in_datasource_node_default = memo(PluginAuthInDataSourceNode);
//#endregion
//#region app/components/plugins/update-plugin/plugin-version-picker.tsx
var PluginVersionPicker = ({ disabled = false, isShow, onShowChange, pluginID, currentVersion, trigger, placement = "bottom-start", sideOffset = 4, alignOffset = -16, onSelect }) => {
	const { t } = useTranslation();
	const format = t("dateTimeFormat", { ns: "appLog" }).split(" ")[0];
	const { formatDate } = useTimestamp();
	const { data: res } = useVersionListOfPlugin(pluginID);
	const handleSelect = useCallback(({ version, unique_identifier, isDowngrade }) => {
		if (currentVersion === version) return;
		onSelect({
			version,
			unique_identifier,
			isDowngrade
		});
		onShowChange(false);
	}, [
		currentVersion,
		onSelect,
		onShowChange
	]);
	return /* @__PURE__ */ jsxs(Popover, {
		open: isShow,
		onOpenChange: (open) => {
			if (!disabled) onShowChange(open);
		},
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			disabled,
			className: cn("inline-flex cursor-pointer items-center", disabled && "cursor-default"),
			children: trigger
		}), /* @__PURE__ */ jsxs(PopoverContent, {
			placement,
			sideOffset,
			alignOffset,
			popupClassName: "relative w-[209px] bg-components-panel-bg-blur p-1 backdrop-blur-sm",
			children: [/* @__PURE__ */ jsx("div", {
				className: "px-3 pb-0.5 pt-1 text-text-tertiary system-xs-medium-uppercase",
				children: t("detailPanel.switchVersion", { ns: "plugin" })
			}), /* @__PURE__ */ jsx("div", {
				className: "relative max-h-[224px] overflow-y-auto",
				children: res?.data.versions.map((version) => /* @__PURE__ */ jsxs("div", {
					className: cn("flex h-7 cursor-pointer items-center gap-1 rounded-lg px-3 py-1 hover:bg-state-base-hover", currentVersion === version.version && "cursor-default opacity-30 hover:bg-transparent"),
					onClick: () => handleSelect({
						version: version.version,
						unique_identifier: version.unique_identifier,
						isDowngrade: isEarlierThanVersion(version.version, currentVersion)
					}),
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex grow items-center",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-text-secondary system-sm-medium",
							children: version.version
						}), currentVersion === version.version && /* @__PURE__ */ jsx(badge_default, {
							className: "ml-1",
							text: "CURRENT"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "shrink-0 text-text-tertiary system-xs-regular",
						children: formatDate(version.created_at, format)
					})]
				}, version.unique_identifier))
			})]
		})]
	});
};
var plugin_version_picker_default = React$1.memo(PluginVersionPicker);
//#endregion
//#region app/components/base/dropdown/index.tsx
var Dropdown = ({ items, onSelect, secondItems, renderTrigger, triggerProps, popupClassName, itemClassName, secondItemClassName }) => {
	const [open, setOpen] = useState(false);
	const handleSelect = (item) => {
		setOpen(false);
		onSelect(item);
	};
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-end",
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen((v) => !v),
			children: renderTrigger ? renderTrigger(open) : /* @__PURE__ */ jsx(ActionButton, {
				...triggerProps,
				className: cn(open && "bg-divider-regular", triggerProps?.className),
				children: /* @__PURE__ */ jsx(CH, { className: "h-4 w-4 text-text-tertiary" })
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: popupClassName,
			children: /* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border-[0.5px] border-components-panel-border bg-components-panel-bg text-sm text-text-secondary shadow-lg",
				children: [
					!!items.length && /* @__PURE__ */ jsx("div", {
						className: "p-1",
						children: items.map((item) => /* @__PURE__ */ jsx("div", {
							className: cn("flex h-8 cursor-pointer items-center rounded-lg px-3 hover:bg-components-panel-on-panel-item-bg-hover", itemClassName),
							onClick: () => handleSelect(item),
							children: item.text
						}, item.value))
					}),
					!!items.length && !!secondItems?.length && /* @__PURE__ */ jsx("div", { className: "h-px bg-divider-regular" }),
					!!secondItems?.length && /* @__PURE__ */ jsx("div", {
						className: "p-1",
						children: secondItems.map((item) => /* @__PURE__ */ jsx("div", {
							className: cn("flex h-8 cursor-pointer items-center rounded-lg px-3 hover:bg-components-panel-on-panel-item-bg-hover", secondItemClassName),
							onClick: () => handleSelect(item),
							children: item.text
						}, item.value))
					})
				]
			})
		})]
	});
};
//#endregion
export { ReadmeEntrance as _, plugin_auth_default as a, EncryptedBottom as b, authorized_in_data_source_node_default as c, useOAuthCallback as d, isPrivateOrLocalAddress as f, CredentialTypeEnum as g, AuthCategory as h, plugin_auth_in_agent_default as i, add_oauth_button_default as l, api_key_modal_default as m, plugin_version_picker_default as n, usePluginAuthAction as o, add_api_key_button_default as p, plugin_auth_in_datasource_node_default as r, authorized_in_node_default as s, Dropdown as t, openOAuthPopup as u, ReadmeShowType as v, ForwardRef as x, useReadmePanelStore as y };
