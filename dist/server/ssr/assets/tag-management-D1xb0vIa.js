import { m as __exportAll } from "../index.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as create } from "./react-CHKO_ryu.js";
import { n as useContext$1 } from "./dist-mUzjAi-W.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { l as post, r as get, s as patch, t as del } from "./base-BuKAg6Le.js";
import { t as confirm_default } from "./confirm-CKQP3hdx.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { r as ToastContext } from "./toast-BY3OifkP.js";
import { t as useDebounceFn } from "./useDebounceFn-Y4NS6c4S.js";
import { useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/tag-management/store.ts
var useStore = create((set) => ({
	tagList: [],
	setTagList: (tagList) => set(() => ({ tagList })),
	showTagManagementModal: false,
	setShowTagManagementModal: (showTagManagementModal) => set(() => ({ showTagManagementModal }))
}));
//#endregion
//#region service/tag.ts
var fetchTagList = (type) => {
	return get("/tags", { params: { type } });
};
var createTag = (name, type) => {
	return post("/tags", { body: {
		name,
		type
	} });
};
var updateTag = (tagID, name) => {
	return patch(`/tags/${tagID}`, { body: { name } });
};
var deleteTag = (tagID) => {
	return del(`/tags/${tagID}`);
};
var bindTag = (tagIDList, targetID, type) => {
	return post("/tag-bindings/create", { body: {
		tag_ids: tagIDList,
		target_id: targetID,
		type
	} });
};
var unBindTag = (tagID, targetID, type) => {
	return post("/tag-bindings/remove", { body: {
		tag_id: tagID,
		target_id: targetID,
		type
	} });
};
//#endregion
//#region app/components/base/tag-management/tag-item-editor.tsx
var TagItemEditor = ({ tag }) => {
	const { t } = useTranslation();
	const { notify } = useContext$1(ToastContext);
	const tagList = useStore((s) => s.tagList);
	const setTagList = useStore((s) => s.setTagList);
	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState(tag.name);
	const editTag = async (tagID, name) => {
		if (name === tag.name) {
			setIsEditing(false);
			return;
		}
		if (!name) {
			notify({
				type: "error",
				message: "tag name is empty"
			});
			setName(tag.name);
			setIsEditing(false);
			return;
		}
		try {
			setTagList([...tagList.map((tag) => {
				if (tag.id === tagID) return {
					...tag,
					name
				};
				return tag;
			})]);
			setIsEditing(false);
			await updateTag(tagID, name);
			notify({
				type: "success",
				message: t("actionMsg.modifiedSuccessfully", { ns: "common" })
			});
			setName(name);
		} catch {
			notify({
				type: "error",
				message: t("actionMsg.modifiedUnsuccessfully", { ns: "common" })
			});
			setName(tag.name);
			setTagList([...tagList.map((tag) => {
				if (tag.id === tagID) return {
					...tag,
					name: tag.name
				};
				return tag;
			})]);
			setIsEditing(false);
		}
	};
	const [showRemoveModal, setShowRemoveModal] = useState(false);
	const [pending, setPending] = useState(false);
	const removeTag = async (tagID) => {
		if (pending) return;
		try {
			setPending(true);
			await deleteTag(tagID);
			notify({
				type: "success",
				message: t("actionMsg.modifiedSuccessfully", { ns: "common" })
			});
			setTagList([...tagList.filter((tag) => tag.id !== tagID)]);
			setPending(false);
		} catch {
			notify({
				type: "error",
				message: t("actionMsg.modifiedUnsuccessfully", { ns: "common" })
			});
			setPending(false);
		}
	};
	const { run: handleRemove } = useDebounceFn(() => {
		removeTag(tag.id);
	}, { wait: 200 });
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
		className: cn("flex shrink-0 items-center gap-0.5 rounded-lg border border-components-panel-border py-1 pl-2 pr-1 text-sm leading-5 text-text-secondary"),
		children: [!isEditing && /* @__PURE__ */ jsxs(Fragment$1, { children: [
			/* @__PURE__ */ jsx("div", {
				className: "text-sm leading-5 text-text-secondary",
				children: tag.name
			}),
			/* @__PURE__ */ jsx(tooltip_default, {
				popupContent: /* @__PURE__ */ jsx("div", { children: t("common.tagBound", { ns: "workflow" }) }),
				needsDelay: true,
				children: /* @__PURE__ */ jsx("div", {
					className: "leading-4.5 shrink-0 px-1 text-sm font-medium text-text-tertiary",
					children: tag.binding_count
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "group/edit shrink-0 cursor-pointer rounded-md p-1 hover:bg-state-base-hover",
				onClick: () => setIsEditing(true),
				children: /* @__PURE__ */ jsx("span", {
					className: "i-ri-edit-line h-3 w-3 text-text-tertiary group-hover/edit:text-text-secondary",
					"data-testid": "tag-item-editor-edit-button"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "group/remove shrink-0 cursor-pointer rounded-md p-1 hover:bg-state-base-hover",
				onClick: () => {
					if (tag.binding_count) setShowRemoveModal(true);
					else handleRemove();
				},
				children: /* @__PURE__ */ jsx("span", {
					className: "i-ri-delete-bin-line h-3 w-3 text-text-tertiary group-hover/remove:text-text-secondary",
					"data-testid": "tag-item-editor-remove-button"
				})
			})
		] }), isEditing && /* @__PURE__ */ jsx("input", {
			className: "shrink-0 appearance-none caret-primary-600 outline-none placeholder:text-text-quaternary",
			autoFocus: true,
			value: name,
			onChange: (e) => setName(e.target.value),
			onKeyDown: (e) => e.key === "Enter" && editTag(tag.id, name),
			onBlur: () => editTag(tag.id, name)
		})]
	}), /* @__PURE__ */ jsx(confirm_default, {
		title: `${t("tag.delete", { ns: "common" })} "${tag.name}"`,
		isShow: showRemoveModal,
		content: t("tag.deleteTip", { ns: "common" }),
		onConfirm: () => {
			handleRemove();
			setShowRemoveModal(false);
		},
		onCancel: () => setShowRemoveModal(false)
	})] });
};
//#endregion
//#region app/components/base/tag-management/index.tsx
var tag_management_exports = /* @__PURE__ */ __exportAll({ default: () => TagManagementModal });
var TagManagementModal = ({ show, type }) => {
	const { t } = useTranslation();
	const { notify } = useContext$1(ToastContext);
	const tagList = useStore((s) => s.tagList);
	const setTagList = useStore((s) => s.setTagList);
	const setShowTagManagementModal = useStore((s) => s.setShowTagManagementModal);
	const getTagList = async (type) => {
		setTagList(await fetchTagList(type));
	};
	const [pending, setPending] = useState(false);
	const [name, setName] = useState("");
	const createNewTag = async () => {
		if (!name) return;
		if (pending) return;
		try {
			setPending(true);
			const newTag = await createTag(name, type);
			notify({
				type: "success",
				message: t("tag.created", { ns: "common" })
			});
			setTagList([newTag, ...tagList]);
			setName("");
			setPending(false);
		} catch {
			notify({
				type: "error",
				message: t("tag.failed", { ns: "common" })
			});
			setPending(false);
		}
	};
	useEffect(() => {
		getTagList(type);
	}, [type]);
	return /* @__PURE__ */ jsxs(Modal, {
		className: "!w-[600px] !max-w-[600px] rounded-xl px-8 py-6",
		isShow: show,
		onClose: () => setShowTagManagementModal(false),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "relative pb-2 text-xl font-semibold leading-[30px] text-text-primary",
				children: t("tag.manageTags", { ns: "common" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute right-4 top-4 cursor-pointer p-2",
				onClick: () => setShowTagManagementModal(false),
				children: /* @__PURE__ */ jsx("span", {
					className: "i-ri-close-line h-4 w-4 text-text-tertiary",
					"data-testid": "tag-management-modal-close-button"
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ jsx("input", {
					className: "w-[100px] shrink-0 appearance-none rounded-lg border border-dashed border-divider-regular bg-transparent px-2 py-1 text-sm leading-5 text-text-secondary caret-primary-600 outline-none placeholder:text-text-quaternary focus:border-solid",
					placeholder: t("tag.addNew", { ns: "common" }) || "",
					autoFocus: true,
					value: name,
					onChange: (e) => setName(e.target.value),
					onKeyDown: (e) => e.key === "Enter" && !e.nativeEvent.isComposing && createNewTag(),
					onBlur: createNewTag
				}), tagList.map((tag) => /* @__PURE__ */ jsx(TagItemEditor, { tag }, tag.id))]
			})
		]
	});
};
//#endregion
export { fetchTagList as a, createTag as i, tag_management_exports as n, unBindTag as o, bindTag as r, useStore as s, TagManagementModal as t };
