import { o as useLatest } from "./useUnmount-LxWHCkGT.js";
import "./i18next-CxGFEMD9.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import "./dist-mUzjAi-W.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { i as FormTypeEnum, t as ConfigurationMethodEnum } from "./declarations-DYMEe7hD.js";
import { S as IS_CE_EDITION } from "./config-Dopncj5R.js";
import "./i18n-config-jsJ9YUFd.js";
import "./base-BuKAg6Le.js";
import "./IconBase-CEF_UoQI.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as confirm_default } from "./confirm-CKQP3hdx.js";
import "./action-button-BK9WUMzU.js";
import { t as switch_default } from "./switch-CFJdYxEh.js";
import { t as Loading } from "./loading-BryKikzY.js";
import "./dialog-DCCIZLOh.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { i as useToastContext } from "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import { A as Indicator, C as ModelIcon, f as useGetModelCredential, m as useUpdateModelLoadBalancingConfig, u as useAuth } from "./credential-item-C22_bUSw.js";
import "./use-base-DLpNl2rR.js";
import "./client-CLQTU2Oi.js";
import "./common-qRxT6xi0.js";
import "./i18n-lDm19WzR.js";
import "./useDebounceFn-Y4NS6c4S.js";
import "./common-fiYzNZ23.js";
import { t as upgrade_btn_default } from "./upgrade-btn-CpSPytX5.js";
import { t as Badge } from "./badge-DnA7gOK5.js";
import "./modal-context-CphlqvPm.js";
import "./config-DUQ_rYOW.js";
import { r as useProviderContextSelector } from "./provider-context-CToT0pwd.js";
import "./other-sSUV3aYW.js";
import "./esm-Cvvoz2PS.js";
import "./fast-deep-equal-T8EktbR5.js";
import { u as useRefreshModel } from "./hooks-BTelimHS.js";
import "./use-common-BJ1aZaXJ.js";
import "./dist-CGvyUAMR.js";
import "./use-theme-3YxPQV4B.js";
import { t as ModelName } from "./model-name-DBTGJc7a.js";
import { t as GridMask } from "./grid-mask-BR99s5KY.js";
import { t as simple_pie_chart_default } from "./simple-pie-chart-B53FWZXx.js";
import { o as add_credential_in_load_balancing_default, t as switch_credential_in_load_balancing_default } from "./model-auth-DmvcMtiT.js";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var style_module_default = { textGradient: "_textGradient_1k9hr_1" };
//#endregion
//#region app/components/header/account-setting/model-provider-page/provider-added-card/cooldown-timer.tsx
var CooldownTimer = ({ secondsRemaining, onFinish }) => {
	const { t } = useTranslation();
	const targetTime = useRef(Date.now());
	const [currentTime, setCurrentTime] = useState(targetTime.current);
	const displayTime = useMemo(() => Math.ceil((targetTime.current - currentTime) / 1e3), [currentTime]);
	const countdownTimeout = useRef(void 0);
	const clearCountdown = useCallback(() => {
		if (countdownTimeout.current) {
			window.clearTimeout(countdownTimeout.current);
			countdownTimeout.current = void 0;
		}
	}, []);
	const onFinishRef = useLatest(onFinish);
	const countdown = useCallback(() => {
		clearCountdown();
		countdownTimeout.current = window.setTimeout(() => {
			if (Date.now() <= targetTime.current) {
				setCurrentTime(Date.now());
				countdown();
			} else {
				onFinishRef.current?.();
				clearCountdown();
			}
		}, 1e3);
	}, [clearCountdown, onFinishRef]);
	useEffect(() => {
		const now = Date.now();
		targetTime.current = now + (secondsRemaining ?? 0) * 1e3;
		setCurrentTime(now);
		countdown();
		return clearCountdown;
	}, [
		clearCountdown,
		countdown,
		secondsRemaining
	]);
	return displayTime ? /* @__PURE__ */ jsx(tooltip_default, {
		popupContent: t("modelProvider.apiKeyRateLimit", {
			ns: "common",
			seconds: displayTime
		}),
		children: /* @__PURE__ */ jsx(simple_pie_chart_default, {
			percentage: Math.round(displayTime / 60 * 100),
			className: "h-3 w-3"
		})
	}) : null;
};
var cooldown_timer_default = memo(CooldownTimer);
//#endregion
//#region app/components/header/account-setting/model-provider-page/provider-added-card/model-load-balancing-configs.tsx
var ModelLoadBalancingConfigs = ({ draftConfig, setDraftConfig, provider, model, configurationMethod, currentCustomConfigurationModelFixedFields: _currentCustomConfigurationModelFixedFields, withSwitch = false, className, modelCredential, onUpdate, onRemove }) => {
	const { t } = useTranslation();
	const providerFormSchemaPredefined = configurationMethod === ConfigurationMethodEnum.predefinedModel;
	const modelLoadBalancingEnabled = useProviderContextSelector((state) => state.modelLoadBalancingEnabled);
	const updateConfigEntry = useCallback((index, modifier) => {
		setDraftConfig((prev) => {
			if (!prev) return prev;
			const newConfigs = [...prev.configs];
			const modifiedConfig = modifier(newConfigs[index]);
			if (modifiedConfig) newConfigs[index] = modifiedConfig;
			else newConfigs.splice(index, 1);
			return {
				...prev,
				configs: newConfigs
			};
		});
	}, [setDraftConfig]);
	const addConfigEntry = useCallback((credential) => {
		setDraftConfig((prev) => {
			if (!prev) return prev;
			return {
				...prev,
				configs: [...prev.configs, {
					credential_id: credential.credential_id,
					enabled: true,
					name: credential.credential_name
				}]
			};
		});
	}, [setDraftConfig]);
	const toggleModalBalancing = useCallback((enabled) => {
		if ((modelLoadBalancingEnabled || !enabled) && draftConfig) setDraftConfig({
			...draftConfig,
			enabled
		});
	}, [
		draftConfig,
		modelLoadBalancingEnabled,
		setDraftConfig
	]);
	const toggleConfigEntryEnabled = useCallback((index, state) => {
		updateConfigEntry(index, (entry) => ({
			...entry,
			enabled: typeof state === "boolean" ? state : !entry.enabled
		}));
	}, [updateConfigEntry]);
	const clearCountdown = useCallback((index) => {
		updateConfigEntry(index, ({ ttl: _, ...entry }) => {
			return {
				...entry,
				in_cooldown: false
			};
		});
	}, [updateConfigEntry]);
	const validDraftConfigList = useMemo(() => {
		if (!draftConfig) return [];
		return draftConfig.configs;
	}, [draftConfig]);
	const handleUpdate = useCallback((payload, formValues) => {
		onUpdate?.(payload, formValues);
	}, [onUpdate]);
	const handleRemove = useCallback((credentialId) => {
		const index = draftConfig?.configs.findIndex((item) => item.credential_id === credentialId && item.name !== "__inherit__");
		if (typeof index === "number" && index > -1) updateConfigEntry(index, () => void 0);
		onRemove?.(credentialId);
	}, [
		draftConfig?.configs,
		updateConfigEntry,
		onRemove
	]);
	if (!draftConfig) return null;
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
		className: cn("min-h-16 rounded-xl border bg-components-panel-bg transition-colors", withSwitch || !draftConfig.enabled ? "border-components-panel-border" : "border-util-colors-blue-blue-600", withSwitch || draftConfig.enabled ? "cursor-default" : "cursor-pointer", className),
		onClick: !withSwitch && !draftConfig.enabled ? () => toggleModalBalancing(true) : void 0,
		"data-testid": "load-balancing-main-panel",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex select-none items-center gap-2 px-[15px] py-3",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex h-8 w-8 shrink-0 grow-0 items-center justify-center rounded-lg border border-util-colors-indigo-indigo-100 bg-util-colors-indigo-indigo-50 text-util-colors-blue-blue-600",
						children: /* @__PURE__ */ jsx("div", { className: "i-custom-vender-line-financeandecommerce-balance h-4 w-4" })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grow",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1 text-sm text-text-primary",
							children: [t("modelProvider.loadBalancing", { ns: "common" }), /* @__PURE__ */ jsx(tooltip_default, {
								popupContent: t("modelProvider.loadBalancingInfo", { ns: "common" }),
								popupClassName: "max-w-[300px]",
								triggerClassName: "w-3 h-3"
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "text-xs text-text-tertiary",
							children: t("modelProvider.loadBalancingDescription", { ns: "common" })
						})]
					}),
					withSwitch && /* @__PURE__ */ jsx(switch_default, {
						value: Boolean(draftConfig.enabled),
						size: "lg",
						className: "ml-3 justify-self-end",
						disabled: !modelLoadBalancingEnabled && !draftConfig.enabled,
						onChange: (value) => toggleModalBalancing(value),
						"data-testid": "load-balancing-switch-main"
					})
				]
			}),
			draftConfig.enabled && /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-1 px-3 pb-3",
				children: [validDraftConfigList.map((config, index) => {
					const isProviderManaged = config.name === "__inherit__";
					const credential = modelCredential.available_credentials.find((c) => c.credential_id === config.credential_id);
					return /* @__PURE__ */ jsxs("div", {
						className: "group flex h-10 items-center rounded-lg border border-components-panel-border bg-components-panel-on-panel-item-bg px-3 shadow-xs",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex grow items-center",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "mr-2 flex h-3 w-3 items-center justify-center",
									children: config.in_cooldown && Boolean(config.ttl) ? /* @__PURE__ */ jsx(cooldown_timer_default, {
										secondsRemaining: config.ttl,
										onFinish: () => clearCountdown(index)
									}) : /* @__PURE__ */ jsx(tooltip_default, {
										popupContent: t("modelProvider.apiKeyStatusNormal", { ns: "common" }),
										children: /* @__PURE__ */ jsx(Indicator, { color: credential?.not_allowed_to_use ? "gray" : "green" })
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mr-1 text-[13px] text-text-secondary",
									children: isProviderManaged ? t("modelProvider.defaultConfig", { ns: "common" }) : config.name
								}),
								isProviderManaged && providerFormSchemaPredefined && /* @__PURE__ */ jsx(Badge, {
									className: "ml-2",
									children: t("modelProvider.providerManaged", { ns: "common" })
								}),
								credential?.from_enterprise && /* @__PURE__ */ jsx(Badge, {
									className: "ml-2",
									children: "Enterprise"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1",
							children: [!isProviderManaged && /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("div", {
								className: "flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100",
								children: /* @__PURE__ */ jsx(tooltip_default, {
									popupContent: t("operation.remove", { ns: "common" }),
									children: /* @__PURE__ */ jsx("span", {
										className: "flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-components-button-secondary-bg text-text-tertiary transition-colors hover:bg-components-button-secondary-bg-hover",
										onClick: () => updateConfigEntry(index, () => void 0),
										"data-testid": `load-balancing-remove-${config.id || index}`,
										children: /* @__PURE__ */ jsx("div", { className: "i-ri-indeterminate-circle-line h-4 w-4" })
									})
								})
							}) }), (config.credential_id || config.name === "__inherit__") && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", { className: "mr-2 h-3 border-r border-r-divider-subtle" }), /* @__PURE__ */ jsx(switch_default, {
								value: credential?.not_allowed_to_use ? false : Boolean(config.enabled),
								size: "md",
								className: "justify-self-end",
								onChange: (value) => toggleConfigEntryEnabled(index, value),
								disabled: credential?.not_allowed_to_use,
								"data-testid": `load-balancing-switch-${config.id || index}`
							})] })]
						})]
					}, config.id || index);
				}), /* @__PURE__ */ jsx(add_credential_in_load_balancing_default, {
					provider,
					model,
					configurationMethod,
					modelCredential,
					onSelectCredential: addConfigEntry,
					onUpdate: handleUpdate,
					onRemove: handleRemove
				})]
			}),
			draftConfig.enabled && validDraftConfigList.length < 2 && /* @__PURE__ */ jsxs("div", {
				className: "flex h-[34px] items-center rounded-b-xl border-t border-t-divider-subtle bg-components-panel-bg px-6 text-xs text-text-secondary",
				children: [/* @__PURE__ */ jsx("div", { className: "i-custom-vender-solid-alertsandfeedback-alert-triangle mr-1 h-3 w-3 text-[#f79009]" }), t("modelProvider.loadBalancingLeastKeyWarning", { ns: "common" })]
			})
		]
	}), !modelLoadBalancingEnabled && !IS_CE_EDITION && /* @__PURE__ */ jsx(GridMask, {
		canvasClassName: "!rounded-xl",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mt-2 flex h-14 items-center justify-between rounded-xl border-[0.5px] border-components-panel-border px-4 shadow-md",
			children: [/* @__PURE__ */ jsx("div", {
				className: cn("text-gradient text-sm font-semibold leading-tight", style_module_default.textGradient),
				children: t("modelProvider.upgradeForLoadBalancing", { ns: "common" })
			}), /* @__PURE__ */ jsx(upgrade_btn_default, {})]
		})
	})] });
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/provider-added-card/model-load-balancing-modal.tsx
var ModelLoadBalancingModal = ({ provider, configurateMethod, currentCustomConfigurationModelFixedFields, model, credential, open = false, onClose, onSave }) => {
	const { t } = useTranslation();
	const { notify } = useToastContext();
	const { doingAction, deleteModel, openConfirmDelete, closeConfirmDelete, handleConfirmDelete } = useAuth(provider, configurateMethod, currentCustomConfigurationModelFixedFields, { isModelCredential: true });
	const [loading, setLoading] = useState(false);
	const providerFormSchemaPredefined = configurateMethod === ConfigurationMethodEnum.predefinedModel;
	const configFrom = providerFormSchemaPredefined ? "predefined-model" : "custom-model";
	const { isLoading, data, refetch } = useGetModelCredential(true, provider.provider, credential?.credential_id, model.model, model.model_type, configFrom);
	const modelCredential = data;
	const { load_balancing, current_credential_id, available_credentials, current_credential_name } = modelCredential ?? {};
	const originalConfig = load_balancing;
	const [draftConfig, setDraftConfig] = useState();
	const originalConfigMap = useMemo(() => {
		if (!originalConfig) return {};
		return originalConfig?.configs.reduce((prev, config) => {
			if (config.id) prev[config.id] = config;
			return prev;
		}, {});
	}, [originalConfig]);
	useEffect(() => {
		if (originalConfig) setDraftConfig(originalConfig);
	}, [originalConfig]);
	const toggleModalBalancing = useCallback((enabled) => {
		if (draftConfig) setDraftConfig({
			...draftConfig,
			enabled
		});
	}, [draftConfig]);
	const extendedSecretFormSchemas = useMemo(() => {
		if (providerFormSchemaPredefined) return provider?.provider_credential_schema?.credential_form_schemas?.filter(({ type }) => type === FormTypeEnum.secretInput) ?? [];
		return provider?.model_credential_schema?.credential_form_schemas?.filter(({ type }) => type === FormTypeEnum.secretInput) ?? [];
	}, [
		provider?.model_credential_schema?.credential_form_schemas,
		provider?.provider_credential_schema?.credential_form_schemas,
		providerFormSchemaPredefined
	]);
	const encodeConfigEntrySecretValues = useCallback((entry) => {
		const result = { ...entry };
		extendedSecretFormSchemas.forEach(({ variable }) => {
			if (entry.id && result.credentials[variable] === originalConfigMap[entry.id]?.credentials?.[variable]) result.credentials[variable] = "[__HIDDEN__]";
		});
		return result;
	}, [extendedSecretFormSchemas, originalConfigMap]);
	const { mutateAsync: updateModelLoadBalancingConfig } = useUpdateModelLoadBalancingConfig(provider.provider);
	const initialCustomModelCredential = useMemo(() => {
		if (!current_credential_id) return void 0;
		return {
			credential_id: current_credential_id,
			credential_name: current_credential_name
		};
	}, [current_credential_id, current_credential_name]);
	const [customModelCredential, setCustomModelCredential] = useState(initialCustomModelCredential);
	const { handleRefreshModel } = useRefreshModel();
	const handleSave = async () => {
		try {
			setLoading(true);
			const res = await updateModelLoadBalancingConfig({
				credential_id: customModelCredential?.credential_id || current_credential_id,
				config_from: configFrom,
				model: model.model,
				model_type: model.model_type,
				load_balancing: {
					...draftConfig,
					configs: draftConfig.configs.map(encodeConfigEntrySecretValues),
					enabled: Boolean(draftConfig?.enabled)
				}
			});
			if (res.result === "success") {
				notify({
					type: "success",
					message: t("actionMsg.modifiedSuccessfully", { ns: "common" })
				});
				handleRefreshModel(provider, currentCustomConfigurationModelFixedFields, false);
				onSave?.(provider.provider);
				onClose?.();
			} else notify({
				type: "error",
				message: res?.error || t("actionMsg.modifiedUnsuccessfully", { ns: "common" })
			});
		} catch (error) {
			notify({
				type: "error",
				message: error instanceof Error ? error.message : t("actionMsg.modifiedUnsuccessfully", { ns: "common" })
			});
		} finally {
			setLoading(false);
		}
	};
	const handleDeleteModel = useCallback(async () => {
		await handleConfirmDelete();
		onClose?.();
	}, [handleConfirmDelete, onClose]);
	const handleUpdate = useCallback(async (payload, formValues) => {
		const available_credentials = (await refetch()).data?.available_credentials || [];
		const credentialName = formValues?.__authorization_name__;
		const modelCredential = payload?.credential;
		if (!available_credentials.length) {
			onClose?.();
			return;
		}
		if (!modelCredential) {
			const currentCredential = available_credentials.find((c) => c.credential_name === credentialName);
			if (currentCredential) setDraftConfig((prev) => {
				if (!prev) return prev;
				return {
					...prev,
					configs: [...prev.configs, {
						credential_id: currentCredential.credential_id,
						enabled: true,
						name: currentCredential.credential_name
					}]
				};
			});
		} else setDraftConfig((prev) => {
			if (!prev) return prev;
			const newConfigs = [...prev.configs];
			const prevIndex = newConfigs.findIndex((item) => item.credential_id === modelCredential.credential_id && item.name !== "__inherit__");
			const newIndex = available_credentials.findIndex((c) => c.credential_id === modelCredential.credential_id);
			if (newIndex > -1 && prevIndex > -1) newConfigs[prevIndex].name = available_credentials[newIndex].credential_name || "";
			return {
				...prev,
				configs: newConfigs
			};
		});
	}, [refetch, onClose]);
	const handleUpdateWhenSwitchCredential = useCallback(async () => {
		if (!((await refetch()).data?.available_credentials || []).length) onClose?.();
	}, [refetch, onClose]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Modal, {
		isShow: Boolean(model) && open,
		onClose,
		wrapperClassName: "z-[1002]",
		className: "w-[640px] max-w-none px-8 pt-8",
		title: /* @__PURE__ */ jsxs("div", {
			className: "pb-3 font-semibold",
			children: [/* @__PURE__ */ jsx("div", {
				className: "h-[30px]",
				children: draftConfig?.enabled ? t("modelProvider.auth.configLoadBalancing", { ns: "common" }) : t("modelProvider.auth.configModel", { ns: "common" })
			}), Boolean(model) && /* @__PURE__ */ jsxs("div", {
				className: "flex h-5 items-center",
				children: [/* @__PURE__ */ jsx(ModelIcon, {
					className: "mr-2 shrink-0",
					provider,
					modelName: model.model
				}), /* @__PURE__ */ jsx(ModelName, {
					className: "grow text-text-secondary system-md-regular",
					modelItem: model,
					showModelType: true,
					showMode: true,
					showContextSize: true
				})]
			})]
		}),
		children: !draftConfig ? /* @__PURE__ */ jsx(Loading, { type: "area" }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
			className: "py-2",
			children: [/* @__PURE__ */ jsx("div", {
				className: cn("min-h-16 rounded-xl border bg-components-panel-bg transition-colors", draftConfig.enabled ? "cursor-pointer border-components-panel-border" : "cursor-default border-util-colors-blue-blue-600"),
				onClick: draftConfig.enabled ? () => toggleModalBalancing(false) : void 0,
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex select-none items-center gap-2 px-[15px] py-3",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex h-8 w-8 shrink-0 grow-0 items-center justify-center rounded-lg border border-components-card-border bg-components-card-bg",
							children: Boolean(model) && /* @__PURE__ */ jsx(ModelIcon, {
								className: "shrink-0",
								provider,
								modelName: model.model
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grow",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-sm text-text-secondary",
								children: providerFormSchemaPredefined ? t("modelProvider.auth.providerManaged", { ns: "common" }) : t("modelProvider.auth.specifyModelCredential", { ns: "common" })
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs text-text-tertiary",
								children: providerFormSchemaPredefined ? t("modelProvider.auth.providerManagedTip", { ns: "common" }) : t("modelProvider.auth.specifyModelCredentialTip", { ns: "common" })
							})]
						}),
						!providerFormSchemaPredefined && /* @__PURE__ */ jsx(switch_credential_in_load_balancing_default, {
							provider,
							customModelCredential: customModelCredential ?? initialCustomModelCredential,
							setCustomModelCredential,
							model,
							credentials: available_credentials,
							onUpdate: handleUpdateWhenSwitchCredential,
							onRemove: handleUpdateWhenSwitchCredential
						})
					]
				})
			}), modelCredential && /* @__PURE__ */ jsx(ModelLoadBalancingConfigs, {
				draftConfig,
				setDraftConfig,
				provider,
				currentCustomConfigurationModelFixedFields: {
					__model_name: model.model,
					__model_type: model.model_type
				},
				configurationMethod: model.fetch_from,
				className: "mt-2",
				modelCredential,
				onUpdate: handleUpdate,
				onRemove: handleUpdateWhenSwitchCredential,
				model: {
					model: model.model,
					model_type: model.model_type
				}
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-6 flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ jsx("div", { children: !providerFormSchemaPredefined && /* @__PURE__ */ jsx(Button, {
				onClick: () => openConfirmDelete(void 0, {
					model: model.model,
					model_type: model.model_type
				}),
				className: "text-components-button-destructive-secondary-text",
				children: t("modelProvider.auth.removeModel", { ns: "common" })
			}) }), /* @__PURE__ */ jsxs("div", {
				className: "space-x-2",
				children: [/* @__PURE__ */ jsx(Button, {
					onClick: onClose,
					children: t("operation.cancel", { ns: "common" })
				}), /* @__PURE__ */ jsx(Button, {
					variant: "primary",
					onClick: handleSave,
					disabled: loading || draftConfig?.enabled && (draftConfig?.configs.filter((config) => config.enabled).length ?? 0) < 2 || isLoading,
					children: t("operation.save", { ns: "common" })
				})]
			})]
		})] })
	}), deleteModel && /* @__PURE__ */ jsx(confirm_default, {
		isShow: true,
		title: t("modelProvider.confirmDelete", { ns: "common" }),
		onCancel: closeConfirmDelete,
		onConfirm: handleDeleteModel,
		isDisabled: doingAction
	})] });
};
var model_load_balancing_modal_default = memo(ModelLoadBalancingModal);
//#endregion
export { model_load_balancing_modal_default as default };
