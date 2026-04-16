import { s as useRouter } from "../index.js";
import { hn as Wt } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./dist-mUzjAi-W.js";
import "./navigation-C_u5Brbk.js";
import "./config-Dopncj5R.js";
import "./base-BuKAg6Le.js";
import "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import "./action-button-BK9WUMzU.js";
import "./dialog-DCCIZLOh.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import "./dayjs.min-CNlMkMP6.js";
import "./utc-CCXXQ2Pp.js";
import { t as useTimestamp } from "./use-timestamp-DPYGivGq.js";
import "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import "./use-base-DLpNl2rR.js";
import { n as useDocLink } from "./i18n-lDm19WzR.js";
import { t as Icon } from "./common-fiYzNZ23.js";
import { r as useModalContextSelector } from "./modal-context-CphlqvPm.js";
import { t as Link } from "./link-1R-efKLW.js";
import { i as useEducationVerify } from "./use-education-B-YFbBGE.js";
import * as React$1 from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/education-apply/expire-notice-modal.tsx
var i18nPrefix = "notice";
var ExpireNoticeModal = ({ expireAt, expired, onClose }) => {
	const { t } = useTranslation();
	const eduDocLink = useDocLink()("/use-dify/workspace/subscription-management#dify-for-education");
	const { formatTime } = useTimestamp();
	const setShowPricingModal = useModalContextSelector((s) => s.setShowPricingModal);
	const { mutateAsync } = useEducationVerify();
	const router = useRouter();
	const handleVerify = async () => {
		const { token } = await mutateAsync();
		if (token) router.push(`/education-apply?token=${token}`);
	};
	const handleConfirm = async () => {
		await handleVerify();
		onClose();
	};
	return /* @__PURE__ */ jsxs(Modal, {
		isShow: true,
		onClose,
		title: expired ? t(`${i18nPrefix}.expired.title`, { ns: "education" }) : t(`${i18nPrefix}.isAboutToExpire.title`, {
			ns: "education",
			date: formatTime(expireAt, t(`${i18nPrefix}.dateFormat`, { ns: "education" })),
			interpolation: { escapeValue: false }
		}),
		closable: true,
		className: "max-w-[600px]",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "body-md-regular mt-5 space-y-5 text-text-secondary",
			children: [
				/* @__PURE__ */ jsx("div", { children: expired ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", { children: t(`${i18nPrefix}.expired.summary.line1`, { ns: "education" }) }), /* @__PURE__ */ jsx("div", { children: t(`${i18nPrefix}.expired.summary.line2`, { ns: "education" }) })] }) : t(`${i18nPrefix}.isAboutToExpire.summary`, { ns: "education" }) }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", {
					className: "title-md-semi-bold block",
					children: t(`${i18nPrefix}.stillInEducation.title`, { ns: "education" })
				}), t(`${i18nPrefix}.stillInEducation.${expired ? "expired" : "isAboutToExpire"}`, { ns: "education" })] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", {
					className: "title-md-semi-bold block",
					children: t(`${i18nPrefix}.alreadyGraduated.title`, { ns: "education" })
				}), t(`${i18nPrefix}.alreadyGraduated.${expired ? "expired" : "isAboutToExpire"}`, { ns: "education" })] })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-7 flex items-center justify-between space-x-2",
			children: [/* @__PURE__ */ jsxs(Link, {
				className: "system-xs-regular flex items-center space-x-1 text-text-accent",
				href: eduDocLink,
				target: "_blank",
				rel: "noopener noreferrer",
				children: [/* @__PURE__ */ jsx("div", { children: t("learn", { ns: "education" }) }), /* @__PURE__ */ jsx(Wt, { className: "size-3" })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex space-x-2",
				children: [expired ? /* @__PURE__ */ jsxs(Button, {
					onClick: () => {
						onClose();
						setShowPricingModal();
					},
					className: "flex items-center space-x-1",
					children: [/* @__PURE__ */ jsx(Icon, { className: "size-4" }), /* @__PURE__ */ jsx("div", {
						className: "text-components-button-secondary-accent-text",
						children: t(`${i18nPrefix}.action.upgrade`, { ns: "education" })
					})]
				}) : /* @__PURE__ */ jsx(Button, {
					onClick: onClose,
					children: t(`${i18nPrefix}.action.dismiss`, { ns: "education" })
				}), /* @__PURE__ */ jsx(Button, {
					variant: "primary",
					onClick: handleConfirm,
					children: t(`${i18nPrefix}.action.reVerify`, { ns: "education" })
				})]
			})]
		})]
	});
};
var expire_notice_modal_default = React$1.memo(ExpireNoticeModal);
//#endregion
export { expire_notice_modal_default as default };
