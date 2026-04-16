import { f as __commonJSMin, g as __require, v as __toESM } from "../index.js";
import { bn as Xt, ct as M6, di as we } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { Lt as SupportUploadFileTypes } from "./config-Dopncj5R.js";
import { Nt as file_type_icon_default } from "./hooks-Bj_4KA1b.js";
import { t as ActionButton } from "./action-button-BK9WUMzU.js";
import { n as downloadUrl } from "./download-Cg9gmIRx.js";
import { i as useToastContext } from "./toast-BY3OifkP.js";
import { n as Icon } from "./other-sSUV3aYW.js";
import { t as formatFileSize } from "./format-BCVnrx09.js";
import { i as getFileExtension, r as getFileAppearanceType, t as fileIsUploaded } from "./utils-Dh7W533Q.js";
import { t as ImagePreview } from "./image-preview-D0J1Go0B.js";
import { t as require_prop_types } from "./prop-types-Bbg4EUiL.js";
import { memo, useCallback, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/file-uploader/file-image-render.tsx
var FileImageRender = ({ imageUrl, className, alt, onLoad, onError, showDownloadAction }) => {
	return /* @__PURE__ */ jsx("div", {
		className: cn("border-[2px] border-effects-image-frame shadow-xs", className),
		children: /* @__PURE__ */ jsx("img", {
			className: cn("h-full w-full object-cover", showDownloadAction && "cursor-pointer"),
			alt: alt || "Preview",
			onLoad,
			onError,
			src: imageUrl
		})
	});
};
//#endregion
//#region app/components/base/features/types.ts
var PreviewMode = /* @__PURE__ */ function(PreviewMode) {
	PreviewMode["NewPage"] = "new_page";
	PreviewMode["CurrentPage"] = "current_page";
	return PreviewMode;
}({});
var FeatureEnum = /* @__PURE__ */ function(FeatureEnum) {
	FeatureEnum["moreLikeThis"] = "moreLikeThis";
	FeatureEnum["opening"] = "opening";
	FeatureEnum["suggested"] = "suggested";
	FeatureEnum["text2speech"] = "text2speech";
	FeatureEnum["speech2text"] = "speech2text";
	FeatureEnum["citation"] = "citation";
	FeatureEnum["moderation"] = "moderation";
	FeatureEnum["file"] = "file";
	FeatureEnum["annotationReply"] = "annotationReply";
	return FeatureEnum;
}({});
//#endregion
//#region app/components/base/progress-bar/progress-circle.tsx
var ProgressCircle = ({ className, percentage = 0, size = 12, circleStrokeWidth = 1, circleStrokeColor = "stroke-components-progress-brand-border", circleFillColor = "fill-components-progress-brand-bg", sectorFillColor = "fill-components-progress-brand-progress" }) => {
	const radius = size / 2;
	const center = size / 2;
	const radians = percentage / 101 * 360 * Math.PI / 180;
	const x = center + radius * Math.cos(radians - Math.PI / 2);
	const y = center + radius * Math.sin(radians - Math.PI / 2);
	const largeArcFlag = percentage > 50 ? 1 : 0;
	const pathData = `
    M ${center},${center}
    L ${center},${center - radius}
    A ${radius},${radius} 0 ${largeArcFlag} 1 ${x},${y}
    Z
  `;
	return /* @__PURE__ */ jsxs("svg", {
		width: size + circleStrokeWidth,
		height: size + circleStrokeWidth,
		viewBox: `0 0 ${size + circleStrokeWidth} ${size + circleStrokeWidth}`,
		className,
		children: [/* @__PURE__ */ jsx("circle", {
			className: cn(circleFillColor, circleStrokeColor),
			cx: center + circleStrokeWidth / 2,
			cy: center + circleStrokeWidth / 2,
			r: radius,
			strokeWidth: circleStrokeWidth
		}), /* @__PURE__ */ jsx("path", {
			className: cn(sectorFillColor),
			d: pathData,
			transform: `translate(${circleStrokeWidth / 2}, ${circleStrokeWidth / 2})`
		})]
	});
};
var progress_circle_default = memo(ProgressCircle);
//#endregion
//#region app/components/base/file-uploader/file-uploader-in-attachment/file-item.tsx
var FileInAttachmentItem = ({ file, showDeleteAction, showDownloadAction = true, onRemove, onReUpload, canPreview, previewMode = PreviewMode.CurrentPage }) => {
	const { id, name, type, progress, supportFileType, base64Url, url, isRemote } = file;
	const ext = getFileExtension(name, type, isRemote);
	const isImageFile = supportFileType === SupportUploadFileTypes.image;
	const [imagePreviewUrl, setImagePreviewUrl] = useState("");
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
		className: cn("flex h-12 items-center rounded-lg border-[0.5px] border-components-panel-border bg-components-panel-on-panel-item-bg pr-3 shadow-xs", progress === -1 && "border-state-destructive-border bg-state-destructive-hover", canPreview && previewMode === PreviewMode.NewPage && "cursor-pointer"),
		onClick: () => {
			if (canPreview && previewMode === PreviewMode.NewPage) window.open(url || base64Url || "", "_blank");
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex h-12 w-12 items-center justify-center",
				children: [isImageFile && /* @__PURE__ */ jsx(FileImageRender, {
					className: "h-8 w-8",
					imageUrl: base64Url || url || ""
				}), !isImageFile && /* @__PURE__ */ jsx(file_type_icon_default, {
					type: getFileAppearanceType(name, type),
					size: "xl"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mr-1 w-0 grow",
				children: [/* @__PURE__ */ jsx("div", {
					className: "system-xs-medium mb-0.5 flex items-center truncate text-text-secondary",
					title: file.name,
					children: /* @__PURE__ */ jsx("div", {
						className: "truncate",
						children: name
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "system-2xs-medium-uppercase flex items-center text-text-tertiary",
					children: [
						ext && /* @__PURE__ */ jsx("span", { children: ext.toLowerCase() }),
						ext && /* @__PURE__ */ jsx("span", {
							className: "system-2xs-medium mx-1",
							children: "•"
						}),
						!!file.size && /* @__PURE__ */ jsx("span", { children: formatFileSize(file.size) })
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center",
				children: [
					progress >= 0 && !fileIsUploaded(file) && /* @__PURE__ */ jsx(progress_circle_default, {
						className: "mr-2.5",
						percentage: progress
					}),
					progress === -1 && /* @__PURE__ */ jsx(ActionButton, {
						className: "mr-1",
						onClick: () => onReUpload?.(id),
						children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-text-tertiary" })
					}),
					showDeleteAction && /* @__PURE__ */ jsx(ActionButton, {
						onClick: () => onRemove?.(id),
						children: /* @__PURE__ */ jsx(M6, { className: "h-4 w-4" })
					}),
					canPreview && isImageFile && /* @__PURE__ */ jsx(ActionButton, {
						className: "mr-1",
						onClick: () => setImagePreviewUrl(url || ""),
						children: /* @__PURE__ */ jsx(Xt, { className: "h-4 w-4" })
					}),
					showDownloadAction && /* @__PURE__ */ jsx(ActionButton, {
						onClick: (e) => {
							e.stopPropagation();
							downloadUrl({
								url: url || base64Url || "",
								fileName: name,
								target: "_blank"
							});
						},
						children: /* @__PURE__ */ jsx(we, { className: "h-4 w-4" })
					})
				]
			})
		]
	}), imagePreviewUrl && canPreview && /* @__PURE__ */ jsx(ImagePreview, {
		title: name,
		url: imagePreviewUrl,
		onCancel: () => setImagePreviewUrl("")
	})] });
};
var file_item_default = memo(FileInAttachmentItem);
//#endregion
//#region app/components/base/tag-input/index.tsx
var import_AutosizeInput = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var _extends = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	var _createClass = function() {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function(Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _react = __require("react");
	var _react2 = _interopRequireDefault(_react);
	var _propTypes2 = _interopRequireDefault(require_prop_types());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function _objectWithoutProperties(obj, keys) {
		var target = {};
		for (var i in obj) {
			if (keys.indexOf(i) >= 0) continue;
			if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
			target[i] = obj[i];
		}
		return target;
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
			value: subClass,
			enumerable: false,
			writable: true,
			configurable: true
		} });
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var sizerStyle = {
		position: "absolute",
		top: 0,
		left: 0,
		visibility: "hidden",
		height: 0,
		overflow: "scroll",
		whiteSpace: "pre"
	};
	var INPUT_PROPS_BLACKLIST = [
		"extraWidth",
		"injectStyles",
		"inputClassName",
		"inputRef",
		"inputStyle",
		"minWidth",
		"onAutosize",
		"placeholderIsMinWidth"
	];
	var cleanInputProps = function cleanInputProps(inputProps) {
		INPUT_PROPS_BLACKLIST.forEach(function(field) {
			return delete inputProps[field];
		});
		return inputProps;
	};
	var copyStyles = function copyStyles(styles, node) {
		node.style.fontSize = styles.fontSize;
		node.style.fontFamily = styles.fontFamily;
		node.style.fontWeight = styles.fontWeight;
		node.style.fontStyle = styles.fontStyle;
		node.style.letterSpacing = styles.letterSpacing;
		node.style.textTransform = styles.textTransform;
	};
	var isIE = typeof window !== "undefined" && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;
	var generateId = function generateId() {
		return isIE ? "_" + Math.random().toString(36).substr(2, 12) : void 0;
	};
	var AutosizeInput = function(_Component) {
		_inherits(AutosizeInput, _Component);
		_createClass(AutosizeInput, null, [{
			key: "getDerivedStateFromProps",
			value: function getDerivedStateFromProps(props, state) {
				var id = props.id;
				return id !== state.prevId ? {
					inputId: id || generateId(),
					prevId: id
				} : null;
			}
		}]);
		function AutosizeInput(props) {
			_classCallCheck(this, AutosizeInput);
			var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));
			_this.inputRef = function(el) {
				_this.input = el;
				if (typeof _this.props.inputRef === "function") _this.props.inputRef(el);
			};
			_this.placeHolderSizerRef = function(el) {
				_this.placeHolderSizer = el;
			};
			_this.sizerRef = function(el) {
				_this.sizer = el;
			};
			_this.state = {
				inputWidth: props.minWidth,
				inputId: props.id || generateId(),
				prevId: props.id
			};
			return _this;
		}
		_createClass(AutosizeInput, [
			{
				key: "componentDidMount",
				value: function componentDidMount() {
					this.mounted = true;
					this.copyInputStyles();
					this.updateInputWidth();
				}
			},
			{
				key: "componentDidUpdate",
				value: function componentDidUpdate(prevProps, prevState) {
					if (prevState.inputWidth !== this.state.inputWidth) {
						if (typeof this.props.onAutosize === "function") this.props.onAutosize(this.state.inputWidth);
					}
					this.updateInputWidth();
				}
			},
			{
				key: "componentWillUnmount",
				value: function componentWillUnmount() {
					this.mounted = false;
				}
			},
			{
				key: "copyInputStyles",
				value: function copyInputStyles() {
					if (!this.mounted || !window.getComputedStyle) return;
					var inputStyles = this.input && window.getComputedStyle(this.input);
					if (!inputStyles) return;
					copyStyles(inputStyles, this.sizer);
					if (this.placeHolderSizer) copyStyles(inputStyles, this.placeHolderSizer);
				}
			},
			{
				key: "updateInputWidth",
				value: function updateInputWidth() {
					if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === "undefined") return;
					var newInputWidth = void 0;
					if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
					else newInputWidth = this.sizer.scrollWidth + 2;
					var extraWidth = this.props.type === "number" && this.props.extraWidth === void 0 ? 16 : parseInt(this.props.extraWidth) || 0;
					newInputWidth += extraWidth;
					if (newInputWidth < this.props.minWidth) newInputWidth = this.props.minWidth;
					if (newInputWidth !== this.state.inputWidth) this.setState({ inputWidth: newInputWidth });
				}
			},
			{
				key: "getInput",
				value: function getInput() {
					return this.input;
				}
			},
			{
				key: "focus",
				value: function focus() {
					this.input.focus();
				}
			},
			{
				key: "blur",
				value: function blur() {
					this.input.blur();
				}
			},
			{
				key: "select",
				value: function select() {
					this.input.select();
				}
			},
			{
				key: "renderStyles",
				value: function renderStyles() {
					var injectStyles = this.props.injectStyles;
					return isIE && injectStyles ? _react2.default.createElement("style", { dangerouslySetInnerHTML: { __html: "input#" + this.state.inputId + "::-ms-clear {display: none;}" } }) : null;
				}
			},
			{
				key: "render",
				value: function render() {
					var sizerValue = [
						this.props.defaultValue,
						this.props.value,
						""
					].reduce(function(previousValue, currentValue) {
						if (previousValue !== null && previousValue !== void 0) return previousValue;
						return currentValue;
					});
					var wrapperStyle = _extends({}, this.props.style);
					if (!wrapperStyle.display) wrapperStyle.display = "inline-block";
					var inputStyle = _extends({
						boxSizing: "content-box",
						width: this.state.inputWidth + "px"
					}, this.props.inputStyle);
					var inputProps = _objectWithoutProperties(this.props, []);
					cleanInputProps(inputProps);
					inputProps.className = this.props.inputClassName;
					inputProps.id = this.state.inputId;
					inputProps.style = inputStyle;
					return _react2.default.createElement("div", {
						className: this.props.className,
						style: wrapperStyle
					}, this.renderStyles(), _react2.default.createElement("input", _extends({}, inputProps, { ref: this.inputRef })), _react2.default.createElement("div", {
						ref: this.sizerRef,
						style: sizerStyle
					}, sizerValue), this.props.placeholder ? _react2.default.createElement("div", {
						ref: this.placeHolderSizerRef,
						style: sizerStyle
					}, this.props.placeholder) : null);
				}
			}
		]);
		return AutosizeInput;
	}(_react.Component);
	AutosizeInput.propTypes = {
		className: _propTypes2.default.string,
		defaultValue: _propTypes2.default.any,
		extraWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
		id: _propTypes2.default.string,
		injectStyles: _propTypes2.default.bool,
		inputClassName: _propTypes2.default.string,
		inputRef: _propTypes2.default.func,
		inputStyle: _propTypes2.default.object,
		minWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
		onAutosize: _propTypes2.default.func,
		onChange: _propTypes2.default.func,
		placeholder: _propTypes2.default.string,
		placeholderIsMinWidth: _propTypes2.default.bool,
		style: _propTypes2.default.object,
		value: _propTypes2.default.any
	};
	AutosizeInput.defaultProps = {
		minWidth: 1,
		injectStyles: true
	};
	exports.default = AutosizeInput;
})))(), 1);
var AutosizeInput = "default" in import_AutosizeInput.default ? import_AutosizeInput.default.default : import_AutosizeInput.default;
var TagInput = ({ items, onChange, disableAdd, disableRemove, customizedConfirmKey = "Enter", isInWorkflow, placeholder, required = false, inputClassName }) => {
	const { t } = useTranslation();
	const { notify } = useToastContext();
	const [value, setValue] = useState("");
	const [focused, setFocused] = useState(false);
	const isSpecialMode = customizedConfirmKey === "Tab";
	const handleRemove = (index) => {
		const copyItems = [...items];
		copyItems.splice(index, 1);
		onChange(copyItems);
	};
	const handleNewTag = useCallback((value) => {
		const valueTrimmed = value.trim();
		if (!valueTrimmed) {
			if (required) notify({
				type: "error",
				message: t("segment.keywordEmpty", { ns: "datasetDocuments" })
			});
			return;
		}
		if (items.find((item) => item === valueTrimmed)) {
			notify({
				type: "error",
				message: t("segment.keywordDuplicate", { ns: "datasetDocuments" })
			});
			return;
		}
		if (valueTrimmed.length > 20) {
			notify({
				type: "error",
				message: t("segment.keywordError", { ns: "datasetDocuments" })
			});
			return;
		}
		onChange([...items, valueTrimmed]);
		setTimeout(() => {
			setValue("");
		});
	}, [
		items,
		onChange,
		notify,
		t,
		required
	]);
	const handleKeyDown = (e) => {
		if (isSpecialMode && e.key === "Enter") setValue(`${value}↵`);
		if (e.key === customizedConfirmKey) {
			if (isSpecialMode) e.preventDefault();
			handleNewTag(value);
		}
	};
	const handleBlur = () => {
		handleNewTag(value);
		setFocused(false);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-wrap", !isInWorkflow && "min-w-[200px]", isSpecialMode ? "rounded-lg bg-components-input-bg-normal pb-1 pl-1" : ""),
		children: [(items || []).map((item, index) => /* @__PURE__ */ jsxs("div", {
			className: cn("mr-1 mt-1 flex items-center rounded-md border border-divider-deep bg-components-badge-white-to-dark py-1 pl-1.5 pr-1 text-text-secondary system-xs-regular"),
			children: [item, !disableRemove && /* @__PURE__ */ jsx("div", {
				className: "flex h-4 w-4 cursor-pointer items-center justify-center",
				onClick: () => handleRemove(index),
				children: /* @__PURE__ */ jsx("span", {
					className: "i-ri-close-line ml-0.5 h-3.5 w-3.5 text-text-tertiary",
					"data-testid": "remove-tag"
				})
			})]
		}, item)), !disableAdd && /* @__PURE__ */ jsxs("div", {
			className: cn("group/tag-add mt-1 flex items-center gap-x-0.5", !isSpecialMode ? "rounded-md border border-dashed border-divider-deep px-1.5" : ""),
			children: [!isSpecialMode && !focused && /* @__PURE__ */ jsx("span", { className: "i-ri-add-line h-3.5 w-3.5 text-text-placeholder group-hover/tag-add:text-text-secondary" }), /* @__PURE__ */ jsx(AutosizeInput, {
				inputClassName: cn("appearance-none text-text-primary caret-[#295EFF] outline-none placeholder:text-text-placeholder group-hover/tag-add:placeholder:text-text-secondary", isSpecialMode ? "bg-transparent" : "", inputClassName),
				className: cn(!isInWorkflow && "max-w-[300px]", isInWorkflow && "max-w-[146px]", "overflow-hidden rounded-md py-1 system-xs-regular", isSpecialMode && "border border-transparent px-1.5", focused && isSpecialMode && "border-dashed border-divider-deep"),
				onFocus: () => setFocused(true),
				onBlur: handleBlur,
				value,
				onChange: (e) => {
					setValue(e.target.value);
				},
				onKeyDown: handleKeyDown,
				placeholder: placeholder || (isSpecialMode ? t("model.params.stop_sequencesPlaceholder", { ns: "common" }) : t("segment.addKeyWord", { ns: "datasetDocuments" }))
			})]
		})]
	});
};
//#endregion
export { PreviewMode as a, FeatureEnum as i, file_item_default as n, FileImageRender as o, progress_circle_default as r, TagInput as t };
