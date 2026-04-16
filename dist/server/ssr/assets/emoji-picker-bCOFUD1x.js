import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as Divider } from "./divider-DZD56ykp.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { t as EmojiPickerInner } from "./Inner-Cd93zOxF.js";
import { useCallback, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/emoji-picker/index.tsx
var EmojiPicker = ({ isModal = true, onSelect, onClose, className }) => {
	const { t } = useTranslation();
	const [selectedEmoji, setSelectedEmoji] = useState("");
	const [selectedBackground, setSelectedBackground] = useState();
	const handleSelectEmoji = useCallback((emoji, background) => {
		setSelectedEmoji(emoji);
		setSelectedBackground(background);
	}, [setSelectedEmoji, setSelectedBackground]);
	return isModal ? /* @__PURE__ */ jsxs(Modal, {
		onClose: noop,
		isShow: true,
		closable: false,
		wrapperClassName: className,
		className: cn("flex max-h-[552px] flex-col rounded-xl border-[0.5px] border-divider-subtle p-0 shadow-xl"),
		children: [
			/* @__PURE__ */ jsx(EmojiPickerInner, {
				className: "pt-3",
				onSelect: handleSelectEmoji
			}),
			/* @__PURE__ */ jsx(Divider, { className: "mb-0 mt-3" }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex w-full items-center justify-center gap-2 p-3",
				children: [/* @__PURE__ */ jsx(Button, {
					className: "w-full",
					onClick: () => {
						onClose?.();
					},
					children: t("iconPicker.cancel", { ns: "app" })
				}), /* @__PURE__ */ jsx(Button, {
					disabled: selectedEmoji === "" || !selectedBackground,
					variant: "primary",
					className: "w-full",
					onClick: () => {
						onSelect?.(selectedEmoji, selectedBackground);
					},
					children: t("iconPicker.ok", { ns: "app" })
				})]
			})
		]
	}) : /* @__PURE__ */ jsx(Fragment$1, {});
};
//#endregion
export { EmojiPicker as t };
