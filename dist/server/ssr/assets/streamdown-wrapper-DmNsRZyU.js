import { r as t } from "./i18next-CxGFEMD9.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import "./dist-mUzjAi-W.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import "./declarations-DYMEe7hD.js";
import { D as MARKETPLACE_API_PREFIX, g as ENABLE_SINGLE_DOLLAR_LATEX, n as ALLOW_UNSAFE_DATA_SCHEME } from "./config-Dopncj5R.js";
import "./base-BuKAg6Le.js";
import { a as SelectContent, c as SelectValue, i as Select, o as SelectItem, s as SelectTrigger, t as customUrlTransform } from "./markdown-utils-D9ZHqkyo.js";
import "./app-context-BiSzFQEV.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import "./action-button-BK9WUMzU.js";
import { t as Input } from "./input-BOHL-qYi.js";
import "./loading-BryKikzY.js";
import "./dayjs.min-CNlMkMP6.js";
import "./utc-CCXXQ2Pp.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import { l as Theme } from "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import "./use-base-DLpNl2rR.js";
import "./client-CLQTU2Oi.js";
import "./global-public-context-DpzzsplY.js";
import "./common-qRxT6xi0.js";
import "./i18n-lDm19WzR.js";
import "./useDebounceFn-Y4NS6c4S.js";
import { t as Checkbox } from "./checkbox-DTSgkYdc.js";
import { t as Textarea } from "./textarea-Ngtow1st.js";
import "./modal-context-CphlqvPm.js";
import "./config-DUQ_rYOW.js";
import "./provider-context-CToT0pwd.js";
import { T as usePluginReadmeAsset } from "./use-refresh-plugin-list-C8aKRYG-.js";
import "./use-triggers-DguQxV9N.js";
import { t as dynamic } from "./dynamic-6-R69YAE.js";
import "./esm-Cvvoz2PS.js";
import "./fast-deep-equal-T8EktbR5.js";
import { t as DatePicker } from "./date-picker-C_53XOz9.js";
import { a as formatDateForOutput, u as toDayjs } from "./dayjs-7JTRFpGV.js";
import "./hooks-BTelimHS.js";
import "./use-common-BJ1aZaXJ.js";
import "./dist-CGvyUAMR.js";
import { t as useTheme } from "./use-theme-3YxPQV4B.js";
import "./dist-DV9-MooO2.js";
import { t as ImagePreview } from "./image-preview-D0J1Go0B.js";
import { t as TimePicker } from "./dist-B80P3w3R.js";
import { n as useChatContext } from "./context-X_lHIALZ.js";
import "./copy-icon-CFJi8vfV.js";
import { C as SKIP, T as convert, _ as factorySpace, c as VFile, d as findAndReplace, f as parse, h as visit, i as Qs, l as VFileMessage, m as fromParse5, n as Ks, p as parseFragment, s as xt, u as longestStreak, v as markdownLineEnding, w as visitParents } from "./chunk-BO2N2NFS-Y3asTZ1B.js";
import "./code-block-Clz9Kp_p.js";
import { t as katex } from "./katex-Bx-9ThzI.js";
import * as React$1 from "react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/hast-util-from-html@2.0.3/node_modules/hast-util-from-html/lib/errors.js
/**
* @typedef ErrorInfo
*   Info on a `parse5` error.
* @property {string} reason
*   Reason of error.
* @property {string} description
*   More info on error.
* @property {false} [url]
*   Turn off if this is not documented in the html5 spec (optional).
*/
var errors = {
	abandonedHeadElementChild: {
		reason: "Unexpected metadata element after head",
		description: "Unexpected element after head. Expected the element before `</head>`",
		url: false
	},
	abruptClosingOfEmptyComment: {
		reason: "Unexpected abruptly closed empty comment",
		description: "Unexpected `>` or `->`. Expected `-->` to close comments"
	},
	abruptDoctypePublicIdentifier: {
		reason: "Unexpected abruptly closed public identifier",
		description: "Unexpected `>`. Expected a closing `\"` or `'` after the public identifier"
	},
	abruptDoctypeSystemIdentifier: {
		reason: "Unexpected abruptly closed system identifier",
		description: "Unexpected `>`. Expected a closing `\"` or `'` after the identifier identifier"
	},
	absenceOfDigitsInNumericCharacterReference: {
		reason: "Unexpected non-digit at start of numeric character reference",
		description: "Unexpected `%c`. Expected `[0-9]` for decimal references or `[0-9a-fA-F]` for hexadecimal references"
	},
	cdataInHtmlContent: {
		reason: "Unexpected CDATA section in HTML",
		description: "Unexpected `<![CDATA[` in HTML. Remove it, use a comment, or encode special characters instead"
	},
	characterReferenceOutsideUnicodeRange: {
		reason: "Unexpected too big numeric character reference",
		description: "Unexpectedly high character reference. Expected character references to be at most hexadecimal 10ffff (or decimal 1114111)"
	},
	closingOfElementWithOpenChildElements: {
		reason: "Unexpected closing tag with open child elements",
		description: "Unexpectedly closing tag. Expected other tags to be closed first",
		url: false
	},
	controlCharacterInInputStream: {
		reason: "Unexpected control character",
		description: "Unexpected control character `%x`. Expected a non-control code point, 0x00, or ASCII whitespace"
	},
	controlCharacterReference: {
		reason: "Unexpected control character reference",
		description: "Unexpectedly control character in reference. Expected a non-control code point, 0x00, or ASCII whitespace"
	},
	disallowedContentInNoscriptInHead: {
		reason: "Disallowed content inside `<noscript>` in `<head>`",
		description: "Unexpected text character `%c`. Only use text in `<noscript>`s in `<body>`",
		url: false
	},
	duplicateAttribute: {
		reason: "Unexpected duplicate attribute",
		description: "Unexpectedly double attribute. Expected attributes to occur only once"
	},
	endTagWithAttributes: {
		reason: "Unexpected attribute on closing tag",
		description: "Unexpected attribute. Expected `>` instead"
	},
	endTagWithTrailingSolidus: {
		reason: "Unexpected slash at end of closing tag",
		description: "Unexpected `%c-1`. Expected `>` instead"
	},
	endTagWithoutMatchingOpenElement: {
		reason: "Unexpected unopened end tag",
		description: "Unexpected end tag. Expected no end tag or another end tag",
		url: false
	},
	eofBeforeTagName: {
		reason: "Unexpected end of file",
		description: "Unexpected end of file. Expected tag name instead"
	},
	eofInCdata: {
		reason: "Unexpected end of file in CDATA",
		description: "Unexpected end of file. Expected `]]>` to close the CDATA"
	},
	eofInComment: {
		reason: "Unexpected end of file in comment",
		description: "Unexpected end of file. Expected `-->` to close the comment"
	},
	eofInDoctype: {
		reason: "Unexpected end of file in doctype",
		description: "Unexpected end of file. Expected a valid doctype (such as `<!doctype html>`)"
	},
	eofInElementThatCanContainOnlyText: {
		reason: "Unexpected end of file in element that can only contain text",
		description: "Unexpected end of file. Expected text or a closing tag",
		url: false
	},
	eofInScriptHtmlCommentLikeText: {
		reason: "Unexpected end of file in comment inside script",
		description: "Unexpected end of file. Expected `-->` to close the comment"
	},
	eofInTag: {
		reason: "Unexpected end of file in tag",
		description: "Unexpected end of file. Expected `>` to close the tag"
	},
	incorrectlyClosedComment: {
		reason: "Incorrectly closed comment",
		description: "Unexpected `%c-1`. Expected `-->` to close the comment"
	},
	incorrectlyOpenedComment: {
		reason: "Incorrectly opened comment",
		description: "Unexpected `%c`. Expected `<!--` to open the comment"
	},
	invalidCharacterSequenceAfterDoctypeName: {
		reason: "Invalid sequence after doctype name",
		description: "Unexpected sequence at `%c`. Expected `public` or `system`"
	},
	invalidFirstCharacterOfTagName: {
		reason: "Invalid first character in tag name",
		description: "Unexpected `%c`. Expected an ASCII letter instead"
	},
	misplacedDoctype: {
		reason: "Misplaced doctype",
		description: "Unexpected doctype. Expected doctype before head",
		url: false
	},
	misplacedStartTagForHeadElement: {
		reason: "Misplaced `<head>` start tag",
		description: "Unexpected start tag `<head>`. Expected `<head>` directly after doctype",
		url: false
	},
	missingAttributeValue: {
		reason: "Missing attribute value",
		description: "Unexpected `%c-1`. Expected an attribute value or no `%c-1` instead"
	},
	missingDoctype: {
		reason: "Missing doctype before other content",
		description: "Expected a `<!doctype html>` before anything else",
		url: false
	},
	missingDoctypeName: {
		reason: "Missing doctype name",
		description: "Unexpected doctype end at `%c`. Expected `html` instead"
	},
	missingDoctypePublicIdentifier: {
		reason: "Missing public identifier in doctype",
		description: "Unexpected `%c`. Expected identifier for `public` instead"
	},
	missingDoctypeSystemIdentifier: {
		reason: "Missing system identifier in doctype",
		description: "Unexpected `%c`. Expected identifier for `system` instead (suggested: `\"about:legacy-compat\"`)"
	},
	missingEndTagName: {
		reason: "Missing name in end tag",
		description: "Unexpected `%c`. Expected an ASCII letter instead"
	},
	missingQuoteBeforeDoctypePublicIdentifier: {
		reason: "Missing quote before public identifier in doctype",
		description: "Unexpected `%c`. Expected `\"` or `'` instead"
	},
	missingQuoteBeforeDoctypeSystemIdentifier: {
		reason: "Missing quote before system identifier in doctype",
		description: "Unexpected `%c`. Expected `\"` or `'` instead"
	},
	missingSemicolonAfterCharacterReference: {
		reason: "Missing semicolon after character reference",
		description: "Unexpected `%c`. Expected `;` instead"
	},
	missingWhitespaceAfterDoctypePublicKeyword: {
		reason: "Missing whitespace after public identifier in doctype",
		description: "Unexpected `%c`. Expected ASCII whitespace instead"
	},
	missingWhitespaceAfterDoctypeSystemKeyword: {
		reason: "Missing whitespace after system identifier in doctype",
		description: "Unexpected `%c`. Expected ASCII whitespace instead"
	},
	missingWhitespaceBeforeDoctypeName: {
		reason: "Missing whitespace before doctype name",
		description: "Unexpected `%c`. Expected ASCII whitespace instead"
	},
	missingWhitespaceBetweenAttributes: {
		reason: "Missing whitespace between attributes",
		description: "Unexpected `%c`. Expected ASCII whitespace instead"
	},
	missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: {
		reason: "Missing whitespace between public and system identifiers in doctype",
		description: "Unexpected `%c`. Expected ASCII whitespace instead"
	},
	nestedComment: {
		reason: "Unexpected nested comment",
		description: "Unexpected `<!--`. Expected `-->`"
	},
	nestedNoscriptInHead: {
		reason: "Unexpected nested `<noscript>` in `<head>`",
		description: "Unexpected `<noscript>`. Expected a closing tag or a meta element",
		url: false
	},
	nonConformingDoctype: {
		reason: "Unexpected non-conforming doctype declaration",
		description: "Expected `<!doctype html>` or `<!doctype html system \"about:legacy-compat\">`",
		url: false
	},
	nonVoidHtmlElementStartTagWithTrailingSolidus: {
		reason: "Unexpected trailing slash on start tag of non-void element",
		description: "Unexpected `/`. Expected `>` instead"
	},
	noncharacterCharacterReference: {
		reason: "Unexpected noncharacter code point referenced by character reference",
		description: "Unexpected code point. Do not use noncharacters in HTML"
	},
	noncharacterInInputStream: {
		reason: "Unexpected noncharacter character",
		description: "Unexpected code point `%x`. Do not use noncharacters in HTML"
	},
	nullCharacterReference: {
		reason: "Unexpected NULL character referenced by character reference",
		description: "Unexpected code point. Do not use NULL characters in HTML"
	},
	openElementsLeftAfterEof: {
		reason: "Unexpected end of file",
		description: "Unexpected end of file. Expected closing tag instead",
		url: false
	},
	surrogateCharacterReference: {
		reason: "Unexpected surrogate character referenced by character reference",
		description: "Unexpected code point. Do not use lone surrogate characters in HTML"
	},
	surrogateInInputStream: {
		reason: "Unexpected surrogate character",
		description: "Unexpected code point `%x`. Do not use lone surrogate characters in HTML"
	},
	unexpectedCharacterAfterDoctypeSystemIdentifier: {
		reason: "Invalid character after system identifier in doctype",
		description: "Unexpected character at `%c`. Expected `>`"
	},
	unexpectedCharacterInAttributeName: {
		reason: "Unexpected character in attribute name",
		description: "Unexpected `%c`. Expected whitespace, `/`, `>`, `=`, or probably an ASCII letter"
	},
	unexpectedCharacterInUnquotedAttributeValue: {
		reason: "Unexpected character in unquoted attribute value",
		description: "Unexpected `%c`. Quote the attribute value to include it"
	},
	unexpectedEqualsSignBeforeAttributeName: {
		reason: "Unexpected equals sign before attribute name",
		description: "Unexpected `%c`. Add an attribute name before it"
	},
	unexpectedNullCharacter: {
		reason: "Unexpected NULL character",
		description: "Unexpected code point `%x`. Do not use NULL characters in HTML"
	},
	unexpectedQuestionMarkInsteadOfTagName: {
		reason: "Unexpected question mark instead of tag name",
		description: "Unexpected `%c`. Expected an ASCII letter instead"
	},
	unexpectedSolidusInTag: {
		reason: "Unexpected slash in tag",
		description: "Unexpected `%c-1`. Expected it followed by `>` or in a quoted attribute value"
	},
	unknownNamedCharacterReference: {
		reason: "Unexpected unknown named character reference",
		description: "Unexpected character reference. Expected known named character references"
	}
};
//#endregion
//#region node_modules/.pnpm/hast-util-from-html@2.0.3/node_modules/hast-util-from-html/lib/index.js
/**
* @import {Root} from 'hast'
* @import {ParserError} from 'parse5'
* @import {Value} from 'vfile'
* @import {ErrorCode, Options} from './types.js'
*/
var base = "https://html.spec.whatwg.org/multipage/parsing.html#parse-error-";
var dashToCamelRe = /-[a-z]/g;
var formatCRe = /%c(?:([-+])(\d+))?/g;
var formatXRe = /%x/g;
var fatalities = {
	2: true,
	1: false,
	0: null
};
/** @type {Readonly<Options>} */
var emptyOptions$2 = {};
/**
* Turn serialized HTML into a hast tree.
*
* @param {VFile | Value} value
*   Serialized HTML to parse.
* @param {Readonly<Options> | null | undefined} [options]
*   Configuration (optional).
* @returns {Root}
*   Tree.
*/
function fromHtml(value, options) {
	const settings = options || emptyOptions$2;
	const onerror = settings.onerror;
	const file = value instanceof VFile ? value : new VFile(value);
	const parseFunction = settings.fragment ? parseFragment : parse;
	const document = String(file);
	return fromParse5(parseFunction(document, {
		sourceCodeLocationInfo: true,
		onParseError: settings.onerror ? internalOnerror : null,
		scriptingEnabled: false
	}), {
		file,
		space: settings.space,
		verbose: settings.verbose
	});
	/**
	* Handle a parse error.
	*
	* @param {ParserError} error
	*   Parse5 error.
	* @returns {undefined}
	*   Nothing.
	*/
	function internalOnerror(error) {
		const code = error.code;
		const name = camelcase(code);
		const setting = settings[name];
		const config = setting === null || setting === void 0 ? true : setting;
		const level = typeof config === "number" ? config : config ? 1 : 0;
		if (level) {
			const info = errors[name];
			const message = new VFileMessage(format(info.reason), {
				place: {
					start: {
						line: error.startLine,
						column: error.startCol,
						offset: error.startOffset
					},
					end: {
						line: error.endLine,
						column: error.endCol,
						offset: error.endOffset
					}
				},
				ruleId: code,
				source: "hast-util-from-html"
			});
			if (file.path) {
				message.file = file.path;
				message.name = file.path + ":" + message.name;
			}
			message.fatal = fatalities[level];
			message.note = format(info.description);
			message.url = info.url === false ? void 0 : base + code;
			onerror(message);
		}
		/**
		* Format a human readable string about an error.
		*
		* @param {string} value
		*   Value to format.
		* @returns {string}
		*   Formatted.
		*/
		function format(value) {
			return value.replace(formatCRe, formatC).replace(formatXRe, formatX);
			/**
			* Format the character.
			*
			* @param {string} _
			*   Match.
			* @param {string} $1
			*   Sign (`-` or `+`, optional).
			* @param {string} $2
			*   Offset.
			* @returns {string}
			*   Formatted.
			*/
			function formatC(_, $1, $2) {
				const offset = ($2 ? Number.parseInt($2, 10) : 0) * ($1 === "-" ? -1 : 1);
				return visualizeCharacter(document.charAt(error.startOffset + offset));
			}
			/**
			* Format the character code.
			*
			* @returns {string}
			*   Formatted.
			*/
			function formatX() {
				return visualizeCharacterCode(document.charCodeAt(error.startOffset));
			}
		}
	}
}
/**
* @param {string} value
*   Error code in dash case.
* @returns {ErrorCode}
*   Error code in camelcase.
*/
function camelcase(value) {
	return value.replace(dashToCamelRe, dashToCamel);
}
/**
* @param {string} $0
*   Match.
* @returns {string}
*   Camelcased.
*/
function dashToCamel($0) {
	return $0.charAt(1).toUpperCase();
}
/**
* @param {string} char
*   Character.
* @returns {string}
*   Formatted.
*/
function visualizeCharacter(char) {
	return char === "`" ? "` ` `" : char;
}
/**
* @param {number} charCode
*   Character code.
* @returns {string}
*   Formatted.
*/
function visualizeCharacterCode(charCode) {
	return "0x" + charCode.toString(16).toUpperCase();
}
//#endregion
//#region node_modules/.pnpm/unist-util-remove-position@5.0.0/node_modules/unist-util-remove-position/lib/index.js
/**
* @typedef {import('unist').Node} Node
*/
/**
* @typedef Options
*   Configuration.
* @property {boolean | null | undefined} [force=false]
*   Whether to use `delete` to remove `position` fields.
*
*   The default is to set them to `undefined`.
*/
/**
* Remove the `position` field from a tree.
*
* @param {Node} tree
*   Tree to clean.
* @param {Options | null | undefined} [options={force: false}]
*   Configuration (default: `{force: false}`).
* @returns {undefined}
*   Nothing.
*/
function removePosition(tree, options) {
	const force = (options || {}).force || false;
	visit(tree, remove);
	/**
	* @param {Node} node
	*/
	function remove(node) {
		if (force) delete node.position;
		else node.position = void 0;
	}
}
//#endregion
//#region node_modules/.pnpm/hast-util-from-html-isomorphic@2.0.0/node_modules/hast-util-from-html-isomorphic/lib/index.js
/**
* @typedef {import('hast').Root} Root
*
* @typedef {Pick<import('hast-util-from-html').Options, 'fragment'>} Options
*/
/**
* Turn HTML into a syntax tree, using browser APIs when available, so it has
* a smaller bundle size there.
*
* @param {string} value
*   Serialized HTML to parse.
* @param {Options | null | undefined} [options]
*   Configuration (optional).
* @returns {Root}
*   Tree.
*/
function fromHtmlIsomorphic(value, options) {
	const tree = fromHtml(value, options);
	removePosition(tree, { force: true });
	delete tree.data;
	return tree;
}
//#endregion
//#region node_modules/.pnpm/unist-util-find-after@5.0.0/node_modules/unist-util-find-after/lib/index.js
/**
* @typedef {import('unist').Node} UnistNode
* @typedef {import('unist').Parent} UnistParent
*/
/**
* @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
*   Test from `unist-util-is`.
*
*   Note: we have remove and add `undefined`, because otherwise when generating
*   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
*   which doesn’t work when publishing on npm.
*/
/**
* @typedef {(
*   Fn extends (value: any) => value is infer Thing
*   ? Thing
*   : Fallback
* )} Predicate
*   Get the value of a type guard `Fn`.
* @template Fn
*   Value; typically function that is a type guard (such as `(x): x is Y`).
* @template Fallback
*   Value to yield if `Fn` is not a type guard.
*/
/**
* @typedef {(
*   Check extends null | undefined // No test.
*   ? Value
*   : Value extends {type: Check} // String (type) test.
*   ? Value
*   : Value extends Check // Partial test.
*   ? Value
*   : Check extends Function // Function test.
*   ? Predicate<Check, Value> extends Value
*     ? Predicate<Check, Value>
*     : never
*   : never // Some other test?
* )} MatchesOne
*   Check whether a node matches a primitive check in the type system.
* @template Value
*   Value; typically unist `Node`.
* @template Check
*   Value; typically `unist-util-is`-compatible test, but not arrays.
*/
/**
* @typedef {(
*   Check extends Array<any>
*   ? MatchesOne<Value, Check[keyof Check]>
*   : MatchesOne<Value, Check>
* )} Matches
*   Check whether a node matches a check in the type system.
* @template Value
*   Value; typically unist `Node`.
* @template Check
*   Value; typically `unist-util-is`-compatible test.
*/
/**
* @typedef {(
*   Kind extends {children: Array<infer Child>}
*   ? Child
*   : never
* )} Child
*   Collect nodes that can be parents of `Child`.
* @template {UnistNode} Kind
*   All node types.
*/
/**
* Find the first node in `parent` after another `node` or after an index,
* that passes `test`.
*
* @param parent
*   Parent node.
* @param index
*   Child node or index.
* @param [test=undefined]
*   Test for child to look for (optional).
* @returns
*   A child (matching `test`, if given) or `undefined`.
*/
var findAfter = (function(parent, index, test) {
	const is = convert(test);
	if (!parent || !parent.type || !parent.children) throw new Error("Expected parent node");
	if (typeof index === "number") {
		if (index < 0 || index === Number.POSITIVE_INFINITY) throw new Error("Expected positive finite number as index");
	} else {
		index = parent.children.indexOf(index);
		if (index < 0) throw new Error("Expected child node or index");
	}
	while (++index < parent.children.length) if (is(parent.children[index], index, parent)) return parent.children[index];
});
//#endregion
//#region node_modules/.pnpm/hast-util-is-element@3.0.0/node_modules/hast-util-is-element/lib/index.js
/**
* Generate a check from a test.
*
* Useful if you’re going to test many nodes, for example when creating a
* utility where something else passes a compatible test.
*
* The created function is a bit faster because it expects valid input only:
* an `element`, `index`, and `parent`.
*
* @param test
*   A test for a specific element.
* @returns
*   A check.
*/
var convertElement = (function(test) {
	if (test === null || test === void 0) return element;
	if (typeof test === "string") return tagNameFactory(test);
	if (typeof test === "object") return anyFactory(test);
	if (typeof test === "function") return castFactory(test);
	throw new Error("Expected function, string, or array as `test`");
});
/**
* Handle multiple tests.
*
* @param {Array<TestFunction | string>} tests
* @returns {Check}
*/
function anyFactory(tests) {
	/** @type {Array<Check>} */
	const checks = [];
	let index = -1;
	while (++index < tests.length) checks[index] = convertElement(tests[index]);
	return castFactory(any);
	/**
	* @this {unknown}
	* @type {TestFunction}
	*/
	function any(...parameters) {
		let index = -1;
		while (++index < checks.length) if (checks[index].apply(this, parameters)) return true;
		return false;
	}
}
/**
* Turn a string into a test for an element with a certain type.
*
* @param {string} check
* @returns {Check}
*/
function tagNameFactory(check) {
	return castFactory(tagName);
	/**
	* @param {Element} element
	* @returns {boolean}
	*/
	function tagName(element) {
		return element.tagName === check;
	}
}
/**
* Turn a custom test into a test for an element that passes that test.
*
* @param {TestFunction} testFunction
* @returns {Check}
*/
function castFactory(testFunction) {
	return check;
	/**
	* @this {unknown}
	* @type {Check}
	*/
	function check(value, index, parent) {
		return Boolean(looksLikeAnElement(value) && testFunction.call(this, value, typeof index === "number" ? index : void 0, parent || void 0));
	}
}
/**
* Make sure something is an element.
*
* @param {unknown} element
* @returns {element is Element}
*/
function element(element) {
	return Boolean(element && typeof element === "object" && "type" in element && element.type === "element" && "tagName" in element && typeof element.tagName === "string");
}
/**
* @param {unknown} value
* @returns {value is Element}
*/
function looksLikeAnElement(value) {
	return value !== null && typeof value === "object" && "type" in value && "tagName" in value;
}
//#endregion
//#region node_modules/.pnpm/hast-util-to-text@4.0.2/node_modules/hast-util-to-text/lib/index.js
/**
* @typedef {import('hast').Comment} Comment
* @typedef {import('hast').Element} Element
* @typedef {import('hast').Nodes} Nodes
* @typedef {import('hast').Parents} Parents
* @typedef {import('hast').Text} Text
* @typedef {import('hast-util-is-element').TestFunction} TestFunction
*/
/**
* @typedef {'normal' | 'nowrap' | 'pre' | 'pre-wrap'} Whitespace
*   Valid and useful whitespace values (from CSS).
*
* @typedef {0 | 1 | 2} BreakNumber
*   Specific break:
*
*   *   `0` — space
*   *   `1` — line ending
*   *   `2` — blank line
*
* @typedef {'\n'} BreakForce
*   Forced break.
*
* @typedef {boolean} BreakValue
*   Whether there was a break.
*
* @typedef {BreakNumber | BreakValue | undefined} BreakBefore
*   Any value for a break before.
*
* @typedef {BreakForce | BreakNumber | BreakValue | undefined} BreakAfter
*   Any value for a break after.
*
* @typedef CollectionInfo
*   Info on current collection.
* @property {BreakAfter} breakAfter
*   Whether there was a break after.
* @property {BreakBefore} breakBefore
*   Whether there was a break before.
* @property {Whitespace} whitespace
*   Current whitespace setting.
*
* @typedef Options
*   Configuration.
* @property {Whitespace | null | undefined} [whitespace='normal']
*   Initial CSS whitespace setting to use (default: `'normal'`).
*/
var searchLineFeeds = /\n/g;
var searchTabOrSpaces = /[\t ]+/g;
var br = convertElement("br");
var cell = convertElement(isCell);
var p = convertElement("p");
var row = convertElement("tr");
var notRendered = convertElement([
	"datalist",
	"head",
	"noembed",
	"noframes",
	"noscript",
	"rp",
	"script",
	"style",
	"template",
	"title",
	hidden$1,
	closedDialog
]);
var blockOrCaption = convertElement([
	"address",
	"article",
	"aside",
	"blockquote",
	"body",
	"caption",
	"center",
	"dd",
	"dialog",
	"dir",
	"dl",
	"dt",
	"div",
	"figure",
	"figcaption",
	"footer",
	"form,",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"header",
	"hgroup",
	"hr",
	"html",
	"legend",
	"li",
	"listing",
	"main",
	"menu",
	"nav",
	"ol",
	"p",
	"plaintext",
	"pre",
	"section",
	"ul",
	"xmp"
]);
/**
* Get the plain-text value of a node.
*
* ###### Algorithm
*
* *   if `tree` is a comment, returns its `value`
* *   if `tree` is a text, applies normal whitespace collapsing to its
*     `value`, as defined by the CSS Text spec
* *   if `tree` is a root or element, applies an algorithm similar to the
*     `innerText` getter as defined by HTML
*
* ###### Notes
*
* > 👉 **Note**: the algorithm acts as if `tree` is being rendered, and as if
* > we’re a CSS-supporting user agent, with scripting enabled.
*
* *   if `tree` is an element that is not displayed (such as a `head`), we’ll
*     still use the `innerText` algorithm instead of switching to `textContent`
* *   if descendants of `tree` are elements that are not displayed, they are
*     ignored
* *   CSS is not considered, except for the default user agent style sheet
* *   a line feed is collapsed instead of ignored in cases where Fullwidth, Wide,
*     or Halfwidth East Asian Width characters are used, the same goes for a case
*     with Chinese, Japanese, or Yi writing systems
* *   replaced elements (such as `audio`) are treated like non-replaced elements
*
* @param {Nodes} tree
*   Tree to turn into text.
* @param {Readonly<Options> | null | undefined} [options]
*   Configuration (optional).
* @returns {string}
*   Serialized `tree`.
*/
function toText(tree, options) {
	const options_ = options || {};
	const children = "children" in tree ? tree.children : [];
	const block = blockOrCaption(tree);
	const whitespace = inferWhitespace(tree, {
		whitespace: options_.whitespace || "normal",
		breakBefore: false,
		breakAfter: false
	});
	/** @type {Array<BreakNumber | string>} */
	const results = [];
	if (tree.type === "text" || tree.type === "comment") results.push(...collectText(tree, {
		whitespace,
		breakBefore: true,
		breakAfter: true
	}));
	let index = -1;
	while (++index < children.length) results.push(...renderedTextCollection(children[index], tree, {
		whitespace,
		breakBefore: index ? void 0 : block,
		breakAfter: index < children.length - 1 ? br(children[index + 1]) : block
	}));
	/** @type {Array<string>} */
	const result = [];
	/** @type {number | undefined} */
	let count;
	index = -1;
	while (++index < results.length) {
		const value = results[index];
		if (typeof value === "number") {
			if (count !== void 0 && value > count) count = value;
		} else if (value) {
			if (count !== void 0 && count > -1) result.push("\n".repeat(count) || " ");
			count = -1;
			result.push(value);
		}
	}
	return result.join("");
}
/**
* <https://html.spec.whatwg.org/multipage/dom.html#rendered-text-collection-steps>
*
* @param {Nodes} node
* @param {Parents} parent
* @param {CollectionInfo} info
* @returns {Array<BreakNumber | string>}
*/
function renderedTextCollection(node, parent, info) {
	if (node.type === "element") return collectElement(node, parent, info);
	if (node.type === "text") return info.whitespace === "normal" ? collectText(node, info) : collectPreText(node);
	return [];
}
/**
* Collect an element.
*
* @param {Element} node
*   Element node.
* @param {Parents} parent
* @param {CollectionInfo} info
*   Info on current collection.
* @returns {Array<BreakNumber | string>}
*/
function collectElement(node, parent, info) {
	const whitespace = inferWhitespace(node, info);
	const children = node.children || [];
	let index = -1;
	/** @type {Array<BreakNumber | string>} */
	let items = [];
	if (notRendered(node)) return items;
	/** @type {BreakNumber | undefined} */
	let prefix;
	/** @type {BreakForce | BreakNumber | undefined} */
	let suffix;
	if (br(node)) suffix = "\n";
	else if (row(node) && findAfter(parent, node, row)) suffix = "\n";
	else if (p(node)) {
		prefix = 2;
		suffix = 2;
	} else if (blockOrCaption(node)) {
		prefix = 1;
		suffix = 1;
	}
	while (++index < children.length) items = items.concat(renderedTextCollection(children[index], node, {
		whitespace,
		breakBefore: index ? void 0 : prefix,
		breakAfter: index < children.length - 1 ? br(children[index + 1]) : suffix
	}));
	if (cell(node) && findAfter(parent, node, cell)) items.push("	");
	if (prefix) items.unshift(prefix);
	if (suffix) items.push(suffix);
	return items;
}
/**
* 4.  If node is a Text node, then for each CSS text box produced by node,
*     in content order, compute the text of the box after application of the
*     CSS `white-space` processing rules and `text-transform` rules, set
*     items to the list of the resulting strings, and return items.
*     The CSS `white-space` processing rules are slightly modified:
*     collapsible spaces at the end of lines are always collapsed, but they
*     are only removed if the line is the last line of the block, or it ends
*     with a br element.
*     Soft hyphens should be preserved.
*
*     Note: See `collectText` and `collectPreText`.
*     Note: we don’t deal with `text-transform`, no element has that by
*     default.
*
* See: <https://drafts.csswg.org/css-text/#white-space-phase-1>
*
* @param {Comment | Text} node
*   Text node.
* @param {CollectionInfo} info
*   Info on current collection.
* @returns {Array<BreakNumber | string>}
*   Result.
*/
function collectText(node, info) {
	const value = String(node.value);
	/** @type {Array<string>} */
	const lines = [];
	/** @type {Array<BreakNumber | string>} */
	const result = [];
	let start = 0;
	while (start <= value.length) {
		searchLineFeeds.lastIndex = start;
		const match = searchLineFeeds.exec(value);
		const end = match && "index" in match ? match.index : value.length;
		lines.push(trimAndCollapseSpacesAndTabs(value.slice(start, end).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""), start === 0 ? info.breakBefore : true, end === value.length ? info.breakAfter : true));
		start = end + 1;
	}
	let index = -1;
	/** @type {BreakNumber | undefined} */
	let join;
	while (++index < lines.length) if (lines[index].charCodeAt(lines[index].length - 1) === 8203 || index < lines.length - 1 && lines[index + 1].charCodeAt(0) === 8203) {
		result.push(lines[index]);
		join = void 0;
	} else if (lines[index]) {
		if (typeof join === "number") result.push(join);
		result.push(lines[index]);
		join = 0;
	} else if (index === 0 || index === lines.length - 1) result.push(0);
	return result;
}
/**
* Collect a text node as “pre” whitespace.
*
* @param {Text} node
*   Text node.
* @returns {Array<BreakNumber | string>}
*   Result.
*/
function collectPreText(node) {
	return [String(node.value)];
}
/**
* 3.  Every collapsible tab is converted to a collapsible space (U+0020).
* 4.  Any collapsible space immediately following another collapsible
*     space—even one outside the boundary of the inline containing that
*     space, provided both spaces are within the same inline formatting
*     context—is collapsed to have zero advance width. (It is invisible,
*     but retains its soft wrap opportunity, if any.)
*
* @param {string} value
*   Value to collapse.
* @param {BreakBefore} breakBefore
*   Whether there was a break before.
* @param {BreakAfter} breakAfter
*   Whether there was a break after.
* @returns {string}
*   Result.
*/
function trimAndCollapseSpacesAndTabs(value, breakBefore, breakAfter) {
	/** @type {Array<string>} */
	const result = [];
	let start = 0;
	/** @type {number | undefined} */
	let end;
	while (start < value.length) {
		searchTabOrSpaces.lastIndex = start;
		const match = searchTabOrSpaces.exec(value);
		end = match ? match.index : value.length;
		if (!start && !end && match && !breakBefore) result.push("");
		if (start !== end) result.push(value.slice(start, end));
		start = match ? end + match[0].length : end;
	}
	if (start !== end && !breakAfter) result.push("");
	return result.join(" ");
}
/**
* Figure out the whitespace of a node.
*
* We don’t support void elements here (so `nobr wbr` -> `normal` is ignored).
*
* @param {Nodes} node
*   Node (typically `Element`).
* @param {CollectionInfo} info
*   Info on current collection.
* @returns {Whitespace}
*   Applied whitespace.
*/
function inferWhitespace(node, info) {
	if (node.type === "element") {
		const properties = node.properties || {};
		switch (node.tagName) {
			case "listing":
			case "plaintext":
			case "xmp": return "pre";
			case "nobr": return "nowrap";
			case "pre": return properties.wrap ? "pre-wrap" : "pre";
			case "td":
			case "th": return properties.noWrap ? "nowrap" : info.whitespace;
			case "textarea": return "pre-wrap";
			default:
		}
	}
	return info.whitespace;
}
/**
* @type {TestFunction}
* @param {Element} node
* @returns {node is {properties: {hidden: true}}}
*/
function hidden$1(node) {
	return Boolean((node.properties || {}).hidden);
}
/**
* @type {TestFunction}
* @param {Element} node
* @returns {node is {tagName: 'td' | 'th'}}
*/
function isCell(node) {
	return node.tagName === "td" || node.tagName === "th";
}
/**
* @type {TestFunction}
*/
function closedDialog(node) {
	return node.tagName === "dialog" && !(node.properties || {}).open;
}
//#endregion
//#region node_modules/.pnpm/rehype-katex@7.0.1/node_modules/rehype-katex/lib/index.js
/**
* @import {ElementContent, Root} from 'hast'
* @import {KatexOptions} from 'katex'
* @import {VFile} from 'vfile'
*/
/**
* @typedef {Omit<KatexOptions, 'displayMode' | 'throwOnError'>} Options
*/
/** @type {Readonly<Options>} */
var emptyOptions$1 = {};
/** @type {ReadonlyArray<unknown>} */
var emptyClasses = [];
/**
* Render elements with a `language-math` (or `math-display`, `math-inline`)
* class with KaTeX.
*
* @param {Readonly<Options> | null | undefined} [options]
*   Configuration (optional).
* @returns
*   Transform.
*/
function rehypeKatex(options) {
	const settings = options || emptyOptions$1;
	/**
	* Transform.
	*
	* @param {Root} tree
	*   Tree.
	* @param {VFile} file
	*   File.
	* @returns {undefined}
	*   Nothing.
	*/
	return function(tree, file) {
		visitParents(tree, "element", function(element, parents) {
			const classes = Array.isArray(element.properties.className) ? element.properties.className : emptyClasses;
			const languageMath = classes.includes("language-math");
			const mathDisplay = classes.includes("math-display");
			const mathInline = classes.includes("math-inline");
			let displayMode = mathDisplay;
			if (!languageMath && !mathDisplay && !mathInline) return;
			let parent = parents[parents.length - 1];
			let scope = element;
			if (element.tagName === "code" && languageMath && parent && parent.type === "element" && parent.tagName === "pre") {
				scope = parent;
				parent = parents[parents.length - 2];
				displayMode = true;
			}
			/* c8 ignore next -- verbose to test. */
			if (!parent) return;
			const value = toText(scope, { whitespace: "pre" });
			/** @type {Array<ElementContent> | string | undefined} */
			let result;
			try {
				result = katex.renderToString(value, {
					...settings,
					displayMode,
					throwOnError: true
				});
			} catch (error) {
				const cause = error;
				const ruleId = cause.name.toLowerCase();
				file.message("Could not render math with KaTeX", {
					ancestors: [...parents, element],
					cause,
					place: element.position,
					ruleId,
					source: "rehype-katex"
				});
				try {
					result = katex.renderToString(value, {
						...settings,
						displayMode,
						strict: "ignore",
						throwOnError: false
					});
				} catch {
					result = [{
						type: "element",
						tagName: "span",
						properties: {
							className: ["katex-error"],
							style: "color:" + (settings.errorColor || "#cc0000"),
							title: String(error)
						},
						children: [{
							type: "text",
							value
						}]
					}];
				}
			}
			if (typeof result === "string") result = fromHtmlIsomorphic(result, { fragment: true }).children;
			const index = parent.children.indexOf(scope);
			parent.children.splice(index, 1, ...result);
			return SKIP;
		});
	};
}
//#endregion
//#region node_modules/.pnpm/mdast-util-math@3.0.0/node_modules/mdast-util-math/lib/index.js
/**
* @typedef {import('hast').Element} HastElement
* @typedef {import('hast').ElementContent} HastElementContent
* @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext
* @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
* @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
* @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
* @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
* @typedef {import('../index.js').InlineMath} InlineMath
* @typedef {import('../index.js').Math} Math
*
* @typedef ToOptions
*   Configuration.
* @property {boolean | null | undefined} [singleDollarTextMath=true]
*   Whether to support math (text) with a single dollar (default: `true`).
*
*   Single dollars work in Pandoc and many other places, but often interfere
*   with “normal” dollars in text.
*   If you turn this off, you can still use two or more dollars for text math.
*/
/**
* Create an extension for `mdast-util-from-markdown`.
*
* @returns {FromMarkdownExtension}
*   Extension for `mdast-util-from-markdown`.
*/
function mathFromMarkdown() {
	return {
		enter: {
			mathFlow: enterMathFlow,
			mathFlowFenceMeta: enterMathFlowMeta,
			mathText: enterMathText
		},
		exit: {
			mathFlow: exitMathFlow,
			mathFlowFence: exitMathFlowFence,
			mathFlowFenceMeta: exitMathFlowMeta,
			mathFlowValue: exitMathData,
			mathText: exitMathText,
			mathTextData: exitMathData
		}
	};
	/**
	* @this {CompileContext}
	* @type {FromMarkdownHandle}
	*/
	function enterMathFlow(token) {
		this.enter({
			type: "math",
			meta: null,
			value: "",
			data: {
				hName: "pre",
				hChildren: [{
					type: "element",
					tagName: "code",
					properties: { className: ["language-math", "math-display"] },
					children: []
				}]
			}
		}, token);
	}
	/**
	* @this {CompileContext}
	* @type {FromMarkdownHandle}
	*/
	function enterMathFlowMeta() {
		this.buffer();
	}
	/**
	* @this {CompileContext}
	* @type {FromMarkdownHandle}
	*/
	function exitMathFlowMeta() {
		const data = this.resume();
		const node = this.stack[this.stack.length - 1];
		node.type;
		node.meta = data;
	}
	/**
	* @this {CompileContext}
	* @type {FromMarkdownHandle}
	*/
	function exitMathFlowFence() {
		if (this.data.mathFlowInside) return;
		this.buffer();
		this.data.mathFlowInside = true;
	}
	/**
	* @this {CompileContext}
	* @type {FromMarkdownHandle}
	*/
	function exitMathFlow(token) {
		const data = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
		const node = this.stack[this.stack.length - 1];
		node.type;
		this.exit(token);
		node.value = data;
		const code = node.data.hChildren[0];
		code.type;
		code.tagName;
		code.children.push({
			type: "text",
			value: data
		});
		this.data.mathFlowInside = void 0;
	}
	/**
	* @this {CompileContext}
	* @type {FromMarkdownHandle}
	*/
	function enterMathText(token) {
		this.enter({
			type: "inlineMath",
			value: "",
			data: {
				hName: "code",
				hProperties: { className: ["language-math", "math-inline"] },
				hChildren: []
			}
		}, token);
		this.buffer();
	}
	/**
	* @this {CompileContext}
	* @type {FromMarkdownHandle}
	*/
	function exitMathText(token) {
		const data = this.resume();
		const node = this.stack[this.stack.length - 1];
		node.type;
		this.exit(token);
		node.value = data;
		node.data.hChildren.push({
			type: "text",
			value: data
		});
	}
	/**
	* @this {CompileContext}
	* @type {FromMarkdownHandle}
	*/
	function exitMathData(token) {
		this.config.enter.data.call(this, token);
		this.config.exit.data.call(this, token);
	}
}
/**
* Create an extension for `mdast-util-to-markdown`.
*
* @param {ToOptions | null | undefined} [options]
*   Configuration (optional).
* @returns {ToMarkdownExtension}
*   Extension for `mdast-util-to-markdown`.
*/
function mathToMarkdown(options) {
	let single = (options || {}).singleDollarTextMath;
	if (single === null || single === void 0) single = true;
	inlineMath.peek = inlineMathPeek;
	return {
		unsafe: [
			{
				character: "\r",
				inConstruct: "mathFlowMeta"
			},
			{
				character: "\n",
				inConstruct: "mathFlowMeta"
			},
			{
				character: "$",
				after: single ? void 0 : "\\$",
				inConstruct: "phrasing"
			},
			{
				character: "$",
				inConstruct: "mathFlowMeta"
			},
			{
				atBreak: true,
				character: "$",
				after: "\\$"
			}
		],
		handlers: {
			math,
			inlineMath
		}
	};
	/**
	* @type {ToMarkdownHandle}
	* @param {Math} node
	*/
	function math(node, _, state, info) {
		const raw = node.value || "";
		const tracker = state.createTracker(info);
		const sequence = "$".repeat(Math.max(longestStreak(raw, "$") + 1, 2));
		const exit = state.enter("mathFlow");
		let value = tracker.move(sequence);
		if (node.meta) {
			const subexit = state.enter("mathFlowMeta");
			value += tracker.move(state.safe(node.meta, {
				after: "\n",
				before: value,
				encode: ["$"],
				...tracker.current()
			}));
			subexit();
		}
		value += tracker.move("\n");
		if (raw) value += tracker.move(raw + "\n");
		value += tracker.move(sequence);
		exit();
		return value;
	}
	/**
	* @type {ToMarkdownHandle}
	* @param {InlineMath} node
	*/
	function inlineMath(node, _, state) {
		let value = node.value || "";
		let size = 1;
		if (!single) size++;
		while (new RegExp("(^|[^$])" + "\\$".repeat(size) + "([^$]|$)").test(value)) size++;
		const sequence = "$".repeat(size);
		if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^\$|\$$/.test(value))) value = " " + value + " ";
		let index = -1;
		while (++index < state.unsafe.length) {
			const pattern = state.unsafe[index];
			if (!pattern.atBreak) continue;
			const expression = state.compilePattern(pattern);
			/** @type {RegExpExecArray | null} */
			let match;
			while (match = expression.exec(value)) {
				let position = match.index;
				if (value.codePointAt(position) === 10 && value.codePointAt(position - 1) === 13) position--;
				value = value.slice(0, position) + " " + value.slice(match.index + 1);
			}
		}
		return sequence + value + sequence;
	}
	/**
	* @returns {string}
	*/
	function inlineMathPeek() {
		return "$";
	}
}
//#endregion
//#region node_modules/.pnpm/micromark-extension-math@3.1.0/node_modules/micromark-extension-math/lib/math-flow.js
/**
* @import {Construct, State, TokenizeContext, Tokenizer} from 'micromark-util-types'
*/
/** @type {Construct} */
var mathFlow = {
	tokenize: tokenizeMathFenced,
	concrete: true,
	name: "mathFlow"
};
/** @type {Construct} */
var nonLazyContinuation = {
	tokenize: tokenizeNonLazyContinuation,
	partial: true
};
/**
* @this {TokenizeContext}
* @type {Tokenizer}
*/
function tokenizeMathFenced(effects, ok, nok) {
	const self = this;
	const tail = self.events[self.events.length - 1];
	const initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
	let sizeOpen = 0;
	return start;
	/**
	* Start of math.
	*
	* ```markdown
	* > | $$
	*     ^
	*   | \frac{1}{2}
	*   | $$
	* ```
	*
	* @type {State}
	*/
	function start(code) {
		effects.enter("mathFlow");
		effects.enter("mathFlowFence");
		effects.enter("mathFlowFenceSequence");
		return sequenceOpen(code);
	}
	/**
	* In opening fence sequence.
	*
	* ```markdown
	* > | $$
	*      ^
	*   | \frac{1}{2}
	*   | $$
	* ```
	*
	* @type {State}
	*/
	function sequenceOpen(code) {
		if (code === 36) {
			effects.consume(code);
			sizeOpen++;
			return sequenceOpen;
		}
		if (sizeOpen < 2) return nok(code);
		effects.exit("mathFlowFenceSequence");
		return factorySpace(effects, metaBefore, "whitespace")(code);
	}
	/**
	* In opening fence, before meta.
	*
	* ```markdown
	* > | $$asciimath
	*       ^
	*   | x < y
	*   | $$
	* ```
	*
	* @type {State}
	*/
	function metaBefore(code) {
		if (code === null || markdownLineEnding(code)) return metaAfter(code);
		effects.enter("mathFlowFenceMeta");
		effects.enter("chunkString", { contentType: "string" });
		return meta(code);
	}
	/**
	* In meta.
	*
	* ```markdown
	* > | $$asciimath
	*        ^
	*   | x < y
	*   | $$
	* ```
	*
	* @type {State}
	*/
	function meta(code) {
		if (code === null || markdownLineEnding(code)) {
			effects.exit("chunkString");
			effects.exit("mathFlowFenceMeta");
			return metaAfter(code);
		}
		if (code === 36) return nok(code);
		effects.consume(code);
		return meta;
	}
	/**
	* After meta.
	*
	* ```markdown
	* > | $$
	*       ^
	*   | \frac{1}{2}
	*   | $$
	* ```
	*
	* @type {State}
	*/
	function metaAfter(code) {
		effects.exit("mathFlowFence");
		if (self.interrupt) return ok(code);
		return effects.attempt(nonLazyContinuation, beforeNonLazyContinuation, after)(code);
	}
	/**
	* After eol/eof in math, at a non-lazy closing fence or content.
	*
	* ```markdown
	*   | $$
	* > | \frac{1}{2}
	*     ^
	* > | $$
	*     ^
	* ```
	*
	* @type {State}
	*/
	function beforeNonLazyContinuation(code) {
		return effects.attempt({
			tokenize: tokenizeClosingFence,
			partial: true
		}, after, contentStart)(code);
	}
	/**
	* Before math content, definitely not before a closing fence.
	*
	* ```markdown
	*   | $$
	* > | \frac{1}{2}
	*     ^
	*   | $$
	* ```
	*
	* @type {State}
	*/
	function contentStart(code) {
		return (initialSize ? factorySpace(effects, beforeContentChunk, "linePrefix", initialSize + 1) : beforeContentChunk)(code);
	}
	/**
	* Before math content, after optional prefix.
	*
	* ```markdown
	*   | $$
	* > | \frac{1}{2}
	*     ^
	*   | $$
	* ```
	*
	* @type {State}
	*/
	function beforeContentChunk(code) {
		if (code === null) return after(code);
		if (markdownLineEnding(code)) return effects.attempt(nonLazyContinuation, beforeNonLazyContinuation, after)(code);
		effects.enter("mathFlowValue");
		return contentChunk(code);
	}
	/**
	* In math content.
	*
	* ```markdown
	*   | $$
	* > | \frac{1}{2}
	*      ^
	*   | $$
	* ```
	*
	* @type {State}
	*/
	function contentChunk(code) {
		if (code === null || markdownLineEnding(code)) {
			effects.exit("mathFlowValue");
			return beforeContentChunk(code);
		}
		effects.consume(code);
		return contentChunk;
	}
	/**
	* After math (ha!).
	*
	* ```markdown
	*   | $$
	*   | \frac{1}{2}
	* > | $$
	*       ^
	* ```
	*
	* @type {State}
	*/
	function after(code) {
		effects.exit("mathFlow");
		return ok(code);
	}
	/** @type {Tokenizer} */
	function tokenizeClosingFence(effects, ok, nok) {
		let size = 0;
		/**
		* Before closing fence, at optional whitespace.
		*
		* ```markdown
		*   | $$
		*   | \frac{1}{2}
		* > | $$
		*     ^
		* ```
		*/
		return factorySpace(effects, beforeSequenceClose, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
		/**
		* In closing fence, after optional whitespace, at sequence.
		*
		* ```markdown
		*   | $$
		*   | \frac{1}{2}
		* > | $$
		*     ^
		* ```
		*
		* @type {State}
		*/
		function beforeSequenceClose(code) {
			effects.enter("mathFlowFence");
			effects.enter("mathFlowFenceSequence");
			return sequenceClose(code);
		}
		/**
		* In closing fence sequence.
		*
		* ```markdown
		*   | $$
		*   | \frac{1}{2}
		* > | $$
		*      ^
		* ```
		*
		* @type {State}
		*/
		function sequenceClose(code) {
			if (code === 36) {
				size++;
				effects.consume(code);
				return sequenceClose;
			}
			if (size < sizeOpen) return nok(code);
			effects.exit("mathFlowFenceSequence");
			return factorySpace(effects, afterSequenceClose, "whitespace")(code);
		}
		/**
		* After closing fence sequence, after optional whitespace.
		*
		* ```markdown
		*   | $$
		*   | \frac{1}{2}
		* > | $$
		*       ^
		* ```
		*
		* @type {State}
		*/
		function afterSequenceClose(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("mathFlowFence");
				return ok(code);
			}
			return nok(code);
		}
	}
}
/**
* @this {TokenizeContext}
* @type {Tokenizer}
*/
function tokenizeNonLazyContinuation(effects, ok, nok) {
	const self = this;
	return start;
	/** @type {State} */
	function start(code) {
		if (code === null) return ok(code);
		effects.enter("lineEnding");
		effects.consume(code);
		effects.exit("lineEnding");
		return lineStart;
	}
	/** @type {State} */
	function lineStart(code) {
		return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
	}
}
//#endregion
//#region node_modules/.pnpm/micromark-extension-math@3.1.0/node_modules/micromark-extension-math/lib/math-text.js
/**
* @import {Options} from 'micromark-extension-math'
* @import {Construct, Previous, Resolver, State, Token, TokenizeContext, Tokenizer} from 'micromark-util-types'
*/
/**
* @param {Options | null | undefined} [options={}]
*   Configuration (default: `{}`).
* @returns {Construct}
*   Construct.
*/
function mathText(options) {
	let single = (options || {}).singleDollarTextMath;
	if (single === null || single === void 0) single = true;
	return {
		tokenize: tokenizeMathText,
		resolve: resolveMathText,
		previous,
		name: "mathText"
	};
	/**
	* @this {TokenizeContext}
	* @type {Tokenizer}
	*/
	function tokenizeMathText(effects, ok, nok) {
		let sizeOpen = 0;
		/** @type {number} */
		let size;
		/** @type {Token} */
		let token;
		return start;
		/**
		* Start of math (text).
		*
		* ```markdown
		* > | $a$
		*     ^
		* > | \$a$
		*      ^
		* ```
		*
		* @type {State}
		*/
		function start(code) {
			effects.enter("mathText");
			effects.enter("mathTextSequence");
			return sequenceOpen(code);
		}
		/**
		* In opening sequence.
		*
		* ```markdown
		* > | $a$
		*     ^
		* ```
		*
		* @type {State}
		*/
		function sequenceOpen(code) {
			if (code === 36) {
				effects.consume(code);
				sizeOpen++;
				return sequenceOpen;
			}
			if (sizeOpen < 2 && !single) return nok(code);
			effects.exit("mathTextSequence");
			return between(code);
		}
		/**
		* Between something and something else.
		*
		* ```markdown
		* > | $a$
		*      ^^
		* ```
		*
		* @type {State}
		*/
		function between(code) {
			if (code === null) return nok(code);
			if (code === 36) {
				token = effects.enter("mathTextSequence");
				size = 0;
				return sequenceClose(code);
			}
			if (code === 32) {
				effects.enter("space");
				effects.consume(code);
				effects.exit("space");
				return between;
			}
			if (markdownLineEnding(code)) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				return between;
			}
			effects.enter("mathTextData");
			return data(code);
		}
		/**
		* In data.
		*
		* ```markdown
		* > | $a$
		*      ^
		* ```
		*
		* @type {State}
		*/
		function data(code) {
			if (code === null || code === 32 || code === 36 || markdownLineEnding(code)) {
				effects.exit("mathTextData");
				return between(code);
			}
			effects.consume(code);
			return data;
		}
		/**
		* In closing sequence.
		*
		* ```markdown
		* > | `a`
		*       ^
		* ```
		*
		* @type {State}
		*/
		function sequenceClose(code) {
			if (code === 36) {
				effects.consume(code);
				size++;
				return sequenceClose;
			}
			if (size === sizeOpen) {
				effects.exit("mathTextSequence");
				effects.exit("mathText");
				return ok(code);
			}
			token.type = "mathTextData";
			return data(code);
		}
	}
}
/** @type {Resolver} */
function resolveMathText(events) {
	let tailExitIndex = events.length - 4;
	let headEnterIndex = 3;
	/** @type {number} */
	let index;
	/** @type {number | undefined} */
	let enter;
	if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
		index = headEnterIndex;
		while (++index < tailExitIndex) if (events[index][1].type === "mathTextData") {
			events[tailExitIndex][1].type = "mathTextPadding";
			events[headEnterIndex][1].type = "mathTextPadding";
			headEnterIndex += 2;
			tailExitIndex -= 2;
			break;
		}
	}
	index = headEnterIndex - 1;
	tailExitIndex++;
	while (++index <= tailExitIndex) if (enter === void 0) {
		if (index !== tailExitIndex && events[index][1].type !== "lineEnding") enter = index;
	} else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
		events[enter][1].type = "mathTextData";
		if (index !== enter + 2) {
			events[enter][1].end = events[index - 1][1].end;
			events.splice(enter + 2, index - enter - 2);
			tailExitIndex -= index - enter - 2;
			index = enter + 2;
		}
		enter = void 0;
	}
	return events;
}
/**
* @this {TokenizeContext}
* @type {Previous}
*/
function previous(code) {
	return code !== 36 || this.events[this.events.length - 1][1].type === "characterEscape";
}
//#endregion
//#region node_modules/.pnpm/micromark-extension-math@3.1.0/node_modules/micromark-extension-math/lib/syntax.js
/**
* @import {Options} from 'micromark-extension-math'
* @import {Extension} from 'micromark-util-types'
*/
/**
* Create an extension for `micromark` to enable math syntax.
*
* @param {Options | null | undefined} [options={}]
*   Configuration (default: `{}`).
* @returns {Extension}
*   Extension for `micromark` that can be passed in `extensions`, to
*   enable math syntax.
*/
function math(options) {
	return {
		flow: { [36]: mathFlow },
		text: { [36]: mathText(options) }
	};
}
//#endregion
//#region node_modules/.pnpm/remark-math@6.0.0/node_modules/remark-math/lib/index.js
/**
* @typedef {import('mdast').Root} Root
* @typedef {import('mdast-util-math').ToOptions} Options
* @typedef {import('unified').Processor<Root>} Processor
*/
/** @type {Readonly<Options>} */
var emptyOptions = {};
/**
* Add support for math.
*
* @param {Readonly<Options> | null | undefined} [options]
*   Configuration (optional).
* @returns {undefined}
*   Nothing.
*/
function remarkMath(options) {
	const self = this;
	const settings = options || emptyOptions;
	const data = self.data();
	const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = []);
	const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);
	const toMarkdownExtensions = data.toMarkdownExtensions || (data.toMarkdownExtensions = []);
	micromarkExtensions.push(math(settings));
	fromMarkdownExtensions.push(mathFromMarkdown());
	toMarkdownExtensions.push(mathToMarkdown(settings));
}
//#endregion
//#region node_modules/.pnpm/@streamdown+math@1.0.2_react@19.2.4/node_modules/@streamdown/math/dist/index.js
function g(e = {}) {
	var t, r;
	return {
		name: "katex",
		type: "math",
		remarkPlugin: [remarkMath, { singleDollarTextMath: (t = e.singleDollarTextMath) != null ? t : false }],
		rehypePlugin: [rehypeKatex, { errorColor: (r = e.errorColor) != null ? r : "var(--color-muted-foreground)" }],
		getStyles() {
			return "katex/dist/katex.min.css";
		}
	};
}
g();
//#endregion
//#region node_modules/.pnpm/mdast-util-newline-to-break@2.0.0/node_modules/mdast-util-newline-to-break/lib/index.js
/**
* @typedef {import('mdast').Nodes} Nodes
* @typedef {import('mdast-util-find-and-replace').ReplaceFunction} ReplaceFunction
*/
/**
* Turn normal line endings into hard breaks.
*
* @param {Nodes} tree
*   Tree to change.
* @returns {undefined}
*   Nothing.
*/
function newlineToBreak(tree) {
	findAndReplace(tree, [/\r?\n|\r/g, replace]);
}
/**
* Replace line endings.
*
* @type {ReplaceFunction}
*/
function replace() {
	return { type: "break" };
}
//#endregion
//#region node_modules/.pnpm/remark-breaks@4.0.0/node_modules/remark-breaks/lib/index.js
/**
* @typedef {import('mdast').Root} Root
*/
/**
* Support hard breaks without needing spaces or escapes (turns enters into
* `<br>`s).
*
* @returns
*   Transform.
*/
function remarkBreaks() {
	/**
	* Transform.
	*
	* @param {Root} tree
	*   Tree.
	* @returns {undefined}
	*   Nothing.
	*/
	return function(tree) {
		newlineToBreak(tree);
	};
}
//#endregion
//#region app/components/base/audio-gallery/AudioPlayer.tsx
var AudioPlayer = ({ src, srcs }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [waveformData, setWaveformData] = useState([]);
	const [bufferedTime, setBufferedTime] = useState(0);
	const audioRef = useRef(null);
	const canvasRef = useRef(null);
	const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
	const [hoverTime, setHoverTime] = useState(0);
	const [isAudioAvailable, setIsAudioAvailable] = useState(true);
	const { theme } = useTheme();
	useEffect(() => {
		const audio = audioRef.current;
		/* v8 ignore next 2 - @preserve */
		if (!audio) return;
		const handleError = () => {
			setIsAudioAvailable(false);
		};
		const setAudioData = () => {
			setDuration(audio.duration);
		};
		const setAudioTime = () => {
			setCurrentTime(audio.currentTime);
		};
		const handleProgress = () => {
			if (audio.buffered.length > 0) setBufferedTime(audio.buffered.end(audio.buffered.length - 1));
		};
		const handleEnded = () => {
			setIsPlaying(false);
		};
		audio.addEventListener("loadedmetadata", setAudioData);
		audio.addEventListener("timeupdate", setAudioTime);
		audio.addEventListener("progress", handleProgress);
		audio.addEventListener("ended", handleEnded);
		audio.addEventListener("error", handleError);
		audio.load();
		const primarySrc = srcs?.[0] || src;
		if (primarySrc) {
			const timer = setTimeout(generateWaveformData, 1e3, primarySrc);
			return () => {
				audio.removeEventListener("loadedmetadata", setAudioData);
				audio.removeEventListener("timeupdate", setAudioTime);
				audio.removeEventListener("progress", handleProgress);
				audio.removeEventListener("ended", handleEnded);
				audio.removeEventListener("error", handleError);
				clearTimeout(timer);
			};
		}
	}, [src, srcs]);
	const generateWaveformData = async (audioSrc) => {
		if (!window.AudioContext && !window.webkitAudioContext) {
			setIsAudioAvailable(false);
			Toast.notify({
				type: "error",
				message: "Web Audio API is not supported in this browser"
			});
			return null;
		}
		const primarySrc = srcs?.[0] || src;
		const url = primarySrc ? new URL(primarySrc) : null;
		if (!(url ? url.protocol === "http:" || url.protocol === "https:" : false)) {
			setIsAudioAvailable(false);
			return null;
		}
		const audioContext = new (window.AudioContext || window.webkitAudioContext)();
		const samples = 70;
		try {
			const response = await fetch(audioSrc, { mode: "cors" });
			if (!response || !response.ok) {
				setIsAudioAvailable(false);
				return null;
			}
			const arrayBuffer = await response.arrayBuffer();
			const channelData = (await audioContext.decodeAudioData(arrayBuffer)).getChannelData(0);
			const blockSize = Math.floor(channelData.length / samples);
			const waveformData = [];
			for (let i = 0; i < samples; i++) {
				let sum = 0;
				for (let j = 0; j < blockSize; j++) sum += Math.abs(channelData[i * blockSize + j]);
				waveformData.push(sum / blockSize * 5);
			}
			const maxAmplitude = Math.max(...waveformData);
			setWaveformData(waveformData.map((amp) => amp / maxAmplitude));
			setIsAudioAvailable(true);
		} catch {
			const waveform = [];
			let prevValue = Math.random();
			for (let i = 0; i < samples; i++) {
				const interpolatedValue = prevValue + (Math.random() - prevValue) * .3;
				waveform.push(interpolatedValue);
				prevValue = interpolatedValue;
			}
			const maxAmplitude = Math.max(...waveform);
			setWaveformData(waveform.map((amp) => amp / maxAmplitude));
			setIsAudioAvailable(true);
		} finally {
			await audioContext.close();
		}
	};
	const togglePlay = useCallback(() => {
		const audio = audioRef.current;
		if (audio && isAudioAvailable) {
			if (isPlaying) {
				setHasStartedPlaying(false);
				audio.pause();
			} else {
				setHasStartedPlaying(true);
				audio.play().catch((error) => console.error("Error playing audio:", error));
			}
			setIsPlaying(!isPlaying);
		} else {
			Toast.notify({
				type: "error",
				message: "Audio element not found"
			});
			setIsAudioAvailable(false);
		}
	}, [isAudioAvailable, isPlaying]);
	const handleCanvasInteraction = useCallback((e) => {
		e.preventDefault();
		const getClientX = (event) => {
			if ("touches" in event) return event.touches[0].clientX;
			return event.clientX;
		};
		const updateProgress = (clientX) => {
			const canvas = canvasRef.current;
			const audio = audioRef.current;
			if (!canvas || !audio) return;
			const rect = canvas.getBoundingClientRect();
			const newTime = Math.min(Math.max(0, clientX - rect.left), rect.width) / rect.width * duration;
			audio.currentTime = newTime;
			setCurrentTime(newTime);
			if (!isPlaying) {
				setIsPlaying(true);
				audio.play().catch((error) => {
					Toast.notify({
						type: "error",
						message: `Error playing audio: ${error}`
					});
					setIsPlaying(false);
				});
			}
		};
		updateProgress(getClientX(e));
	}, [duration, isPlaying]);
	const formatTime = (time) => {
		return `${Math.floor(time / 60)}:${Math.floor(time % 60).toString().padStart(2, "0")}`;
	};
	const drawWaveform = useCallback(() => {
		const canvas = canvasRef.current;
		/* v8 ignore next 2 - @preserve */
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const width = canvas.width;
		const height = canvas.height;
		const data = waveformData;
		ctx.clearRect(0, 0, width, height);
		const barWidth = width / data.length;
		const playedWidth = currentTime / duration * width;
		const cornerRadius = 2;
		data.forEach((value, index) => {
			let color;
			if (index * barWidth <= playedWidth) color = theme === Theme.light ? "#296DFF" : "#84ABFF";
			else if (index * barWidth / width * duration <= hoverTime) color = theme === Theme.light ? "rgba(21,90,239,.40)" : "rgba(200, 206, 218, 0.28)";
			else color = theme === Theme.light ? "rgba(21,90,239,.20)" : "rgba(200, 206, 218, 0.14)";
			const barHeight = value * height;
			const rectX = index * barWidth;
			const rectY = (height - barHeight) / 2;
			const rectWidth = barWidth * .5;
			const rectHeight = barHeight;
			ctx.lineWidth = 1;
			ctx.fillStyle = color;
			if (ctx.roundRect) {
				ctx.beginPath();
				ctx.roundRect(rectX, rectY, rectWidth, rectHeight, cornerRadius);
				ctx.fill();
			} else ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
		});
	}, [
		currentTime,
		duration,
		hoverTime,
		theme,
		waveformData
	]);
	useEffect(() => {
		drawWaveform();
	}, [
		drawWaveform,
		bufferedTime,
		hasStartedPlaying
	]);
	const handleMouseMove = useCallback((e) => {
		const canvas = canvasRef.current;
		const audio = audioRef.current;
		if (!canvas || !audio) return;
		const clientX = "touches" in e ? e.touches[0]?.clientX ?? e.changedTouches[0]?.clientX : e.clientX;
		if (clientX === void 0) return;
		const rect = canvas.getBoundingClientRect();
		const time = Math.min(Math.max(0, clientX - rect.left), rect.width) / rect.width * duration;
		for (let i = 0; i < audio.buffered.length; i++) if (time >= audio.buffered.start(i) && time <= audio.buffered.end(i)) {
			setHoverTime(time);
			break;
		}
	}, [duration]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-9 min-w-[240px] max-w-[420px] items-center gap-2 rounded-[10px] border border-components-panel-border-subtle bg-components-chat-input-audio-bg-alt p-2 shadow-xs backdrop-blur-sm",
		children: [
			/* @__PURE__ */ jsx("audio", {
				ref: audioRef,
				src,
				preload: "auto",
				"data-testid": "audio-player",
				children: srcs && srcs.map((srcUrl, index) => /* @__PURE__ */ jsx("source", { src: srcUrl }, index))
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				"data-testid": "play-pause-btn",
				className: "inline-flex shrink-0 cursor-pointer items-center justify-center border-none text-text-accent transition-all hover:text-text-accent-secondary disabled:text-components-button-primary-bg-disabled",
				onClick: togglePlay,
				disabled: !isAudioAvailable,
				children: isPlaying ? /* @__PURE__ */ jsx("div", { className: "i-ri-pause-circle-fill h-5 w-5" }) : /* @__PURE__ */ jsx("div", { className: "i-ri-play-large-fill h-5 w-5" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: cn(isAudioAvailable && "grow"),
				hidden: !isAudioAvailable,
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex h-8 items-center justify-center",
					children: [/* @__PURE__ */ jsx("canvas", {
						ref: canvasRef,
						"data-testid": "waveform-canvas",
						className: "relative flex h-6 w-full grow cursor-pointer items-center justify-center",
						onClick: handleCanvasInteraction,
						onMouseMove: handleMouseMove,
						onMouseDown: handleCanvasInteraction,
						onTouchMove: handleMouseMove,
						onTouchStart: handleCanvasInteraction
					}), /* @__PURE__ */ jsx("div", {
						className: "inline-flex min-w-[50px] items-center justify-center text-text-accent-secondary system-xs-medium",
						children: /* @__PURE__ */ jsx("span", {
							className: "rounded-[10px] px-0.5 py-1",
							children: formatTime(duration)
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute left-0 top-0 flex h-full w-full items-center justify-center text-text-quaternary",
				hidden: isAudioAvailable,
				children: t("operation.audioSourceUnavailable", { ns: "common" })
			})
		]
	});
};
//#endregion
//#region app/components/base/audio-gallery/index.tsx
var AudioGallery = ({ srcs }) => {
	const validSrcs = srcs.filter((src) => src);
	if (validSrcs.length === 0) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "my-3",
		children: /* @__PURE__ */ jsx(AudioPlayer, { srcs: validSrcs })
	});
};
var audio_gallery_default = React$1.memo(AudioGallery);
//#endregion
//#region app/components/base/markdown-blocks/audio-block.tsx
var AudioBlock = memo(({ node }) => {
	const srcs = node.children.filter((child) => "properties" in child).map((child) => child.properties.src);
	if (srcs.length === 0) {
		const src = node.properties?.src;
		if (src) return /* @__PURE__ */ jsx(audio_gallery_default, { srcs: [src] }, src);
		return null;
	}
	return /* @__PURE__ */ jsx(audio_gallery_default, { srcs }, srcs.join());
});
AudioBlock.displayName = "AudioBlock";
//#endregion
//#region app/components/base/markdown-blocks/utils.ts
var hasImageChild = (children) => {
	return children?.some((child) => {
		if (child.tagName === "img") return true;
		return child.children ? hasImageChild(child.children) : false;
	}) ?? false;
};
var isValidUrl = (url) => {
	const validPrefixes = [
		"http:",
		"https:",
		"//",
		"mailto:"
	];
	if (ALLOW_UNSAFE_DATA_SCHEME) validPrefixes.push("data:");
	return validPrefixes.some((prefix) => url.startsWith(prefix));
};
var getMarkdownImageURL = (url, pathname) => {
	const regex = /(^\.\/_assets|^_assets)/;
	if (regex.test(url)) return `${MARKETPLACE_API_PREFIX}${MARKETPLACE_API_PREFIX.endsWith("/") ? "" : "/"}plugins/${pathname ?? ""}${url.replace(regex, "/_assets")}`;
	return url;
};
//#endregion
//#region app/components/base/markdown-blocks/button.tsx
var MarkdownButton = ({ node }) => {
	const { onSend } = useChatContext();
	const variant = node.properties.dataVariant;
	const message = node.properties.dataMessage;
	const link = node.properties.dataLink;
	const size = node.properties.dataSize;
	return /* @__PURE__ */ jsx(Button, {
		variant,
		size,
		className: cn("!h-auto min-h-8 select-none whitespace-normal !px-3"),
		onClick: () => {
			if (link && isValidUrl(link)) {
				window.open(link, "_blank");
				return;
			}
			if (!message) return;
			onSend?.(message);
		},
		children: /* @__PURE__ */ jsx("span", {
			className: "text-[13px]",
			children: node.children[0]?.value || ""
		})
	});
};
MarkdownButton.displayName = "MarkdownButton";
//#endregion
//#region app/components/base/markdown-blocks/form.tsx
var DATA_FORMAT = /* @__PURE__ */ function(DATA_FORMAT) {
	DATA_FORMAT["TEXT"] = "text";
	DATA_FORMAT["JSON"] = "json";
	return DATA_FORMAT;
}(DATA_FORMAT || {});
var SUPPORTED_TAGS = /* @__PURE__ */ function(SUPPORTED_TAGS) {
	SUPPORTED_TAGS["LABEL"] = "label";
	SUPPORTED_TAGS["INPUT"] = "input";
	SUPPORTED_TAGS["TEXTAREA"] = "textarea";
	SUPPORTED_TAGS["BUTTON"] = "button";
	return SUPPORTED_TAGS;
}(SUPPORTED_TAGS || {});
var SUPPORTED_TYPES = /* @__PURE__ */ function(SUPPORTED_TYPES) {
	SUPPORTED_TYPES["TEXT"] = "text";
	SUPPORTED_TYPES["PASSWORD"] = "password";
	SUPPORTED_TYPES["EMAIL"] = "email";
	SUPPORTED_TYPES["NUMBER"] = "number";
	SUPPORTED_TYPES["DATE"] = "date";
	SUPPORTED_TYPES["TIME"] = "time";
	SUPPORTED_TYPES["DATETIME"] = "datetime";
	SUPPORTED_TYPES["CHECKBOX"] = "checkbox";
	SUPPORTED_TYPES["SELECT"] = "select";
	SUPPORTED_TYPES["HIDDEN"] = "hidden";
	return SUPPORTED_TYPES;
}(SUPPORTED_TYPES || {});
var SUPPORTED_TYPES_SET = new Set(Object.values(SUPPORTED_TYPES));
var SAFE_NAME_RE = /^[a-z][\w-]*$/i;
var PROTOTYPE_POISON_KEYS = new Set([
	"__proto__",
	"constructor",
	"prototype"
]);
function isSafeName(name) {
	return typeof name === "string" && name.length > 0 && name.length <= 128 && SAFE_NAME_RE.test(name) && !PROTOTYPE_POISON_KEYS.has(name);
}
var VALID_BUTTON_VARIANTS = new Set([
	"primary",
	"warning",
	"secondary",
	"secondary-accent",
	"ghost",
	"ghost-accent",
	"tertiary"
]);
var VALID_BUTTON_SIZES = new Set([
	"small",
	"medium",
	"large"
]);
function getTextContent(node) {
	return node.children.find((c) => c.type === "text")?.value ?? "";
}
function str(val) {
	if (val == null) return "";
	return String(val);
}
function computeInitialFormValues(children) {
	const init = Object.create(null);
	for (const child of children) {
		if (child.tagName !== SUPPORTED_TAGS.INPUT && child.tagName !== SUPPORTED_TAGS.TEXTAREA) continue;
		const name = child.properties.name;
		if (!isSafeName(name)) continue;
		const type = child.tagName === SUPPORTED_TAGS.INPUT ? str(child.properties.type) : "";
		if (type === SUPPORTED_TYPES.HIDDEN) init[name] = str(child.properties.value);
		else if (type === SUPPORTED_TYPES.DATE || type === SUPPORTED_TYPES.DATETIME || type === SUPPORTED_TYPES.TIME) {
			const raw = child.properties.value;
			init[name] = raw != null ? toDayjs(String(raw)) : void 0;
		} else if (type === SUPPORTED_TYPES.CHECKBOX) {
			const { checked, value } = child.properties;
			init[name] = !!checked || value === true || value === "true";
		} else init[name] = child.properties.value != null ? str(child.properties.value) : void 0;
	}
	return init;
}
function getElementKey(child, index) {
	const tag = child.tagName;
	const name = str(child.properties.name);
	const htmlFor = str(child.properties.htmlFor);
	const type = str(child.properties.type);
	if (tag === SUPPORTED_TAGS.LABEL) return `label-${index}-${htmlFor || name}`;
	if (tag === SUPPORTED_TAGS.INPUT) return `input-${index}-${type}-${name}`;
	if (tag === SUPPORTED_TAGS.TEXTAREA) return `textarea-${index}-${name}`;
	if (tag === SUPPORTED_TAGS.BUTTON) return `button-${index}-${getTextContent(child)}`;
	return `${tag}-${index}`;
}
var MarkdownForm = ({ node }) => {
	const typedNode = node;
	const { onSend } = useChatContext();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const elementChildren = useMemo(() => typedNode.children.filter((c) => c.type === "element"), [typedNode.children]);
	const baseFormValues = useMemo(() => computeInitialFormValues(elementChildren), [elementChildren]);
	const [editState, setEditState] = useState(() => ({
		source: elementChildren,
		edits: {}
	}));
	const formValues = useMemo(() => {
		if (editState.source === elementChildren) return {
			...baseFormValues,
			...editState.edits
		};
		return baseFormValues;
	}, [
		editState,
		baseFormValues,
		elementChildren
	]);
	const updateValue = useCallback((name, value) => {
		if (!isSafeName(name)) return;
		setEditState((prev) => ({
			source: elementChildren,
			edits: {
				...prev.source === elementChildren ? prev.edits : {},
				[name]: value
			}
		}));
	}, [elementChildren]);
	const getFormOutput = useCallback(() => {
		const out = Object.create(null);
		for (const child of elementChildren) {
			if (child.tagName !== SUPPORTED_TAGS.INPUT && child.tagName !== SUPPORTED_TAGS.TEXTAREA) continue;
			const name = child.properties.name;
			if (!isSafeName(name)) continue;
			let value = formValues[name];
			if (child.tagName === SUPPORTED_TAGS.INPUT && (child.properties.type === SUPPORTED_TYPES.DATE || child.properties.type === SUPPORTED_TYPES.DATETIME) && value != null && typeof value === "object" && "format" in value) {
				const includeTime = child.properties.type === SUPPORTED_TYPES.DATETIME;
				value = formatDateForOutput(value, includeTime);
			}
			if (typeof value === "boolean") out[name] = value;
			else out[name] = value != null ? String(value) : void 0;
		}
		return out;
	}, [elementChildren, formValues]);
	const onSubmit = useCallback((e) => {
		e.preventDefault();
		if (isSubmitting) return;
		setIsSubmitting(true);
		try {
			const format = str(typedNode.properties.dataFormat) || DATA_FORMAT.TEXT;
			const result = getFormOutput();
			if (format === DATA_FORMAT.JSON) onSend?.(JSON.stringify(result));
			else {
				const textResult = Object.entries(result).map(([key, value]) => `${key}: ${value}`).join("\n");
				onSend?.(textResult);
			}
		} catch {
			setIsSubmitting(false);
		}
	}, [
		isSubmitting,
		typedNode.properties.dataFormat,
		getFormOutput,
		onSend
	]);
	return /* @__PURE__ */ jsx("form", {
		autoComplete: "off",
		className: "flex flex-col self-stretch",
		"data-testid": "markdown-form",
		onSubmit: (e) => {
			e.preventDefault();
			e.stopPropagation();
		},
		children: elementChildren.map((child, index) => {
			const key = getElementKey(child, index);
			if (child.tagName === SUPPORTED_TAGS.LABEL) return /* @__PURE__ */ jsx("label", {
				htmlFor: str(child.properties.htmlFor || child.properties.name),
				className: "my-2 text-text-secondary system-md-semibold",
				"data-testid": "label-field",
				children: getTextContent(child)
			}, key);
			if (child.tagName === SUPPORTED_TAGS.INPUT && SUPPORTED_TYPES_SET.has(str(child.properties.type))) {
				const name = str(child.properties.name);
				if (!isSafeName(name)) return null;
				const type = str(child.properties.type);
				if (type === SUPPORTED_TYPES.DATE || type === SUPPORTED_TYPES.DATETIME) return /* @__PURE__ */ jsx(DatePicker, {
					value: formValues[name],
					needTimePicker: type === SUPPORTED_TYPES.DATETIME,
					onChange: (date) => updateValue(name, date),
					onClear: () => updateValue(name, void 0)
				}, key);
				if (type === SUPPORTED_TYPES.TIME) return /* @__PURE__ */ jsx(TimePicker, {
					value: formValues[name],
					onChange: (time) => updateValue(name, time),
					onClear: () => updateValue(name, void 0)
				}, key);
				if (type === SUPPORTED_TYPES.CHECKBOX) return /* @__PURE__ */ jsxs("div", {
					className: "mt-2 flex h-6 items-center space-x-2",
					children: [/* @__PURE__ */ jsx(Checkbox, {
						checked: !!formValues[name],
						onCheck: () => updateValue(name, !formValues[name]),
						id: name
					}), /* @__PURE__ */ jsx("span", { children: str(child.properties.dataTip || child.properties["data-tip"]) })]
				}, key);
				if (type === SUPPORTED_TYPES.SELECT) {
					const rawOptions = child.properties.dataOptions || child.properties["data-options"] || [];
					let options = [];
					if (typeof rawOptions === "string") try {
						const parsed = JSON.parse(rawOptions);
						if (Array.isArray(parsed)) options = parsed.filter((o) => typeof o === "string");
					} catch (error) {
						console.error("Failed to parse data-options JSON:", rawOptions, error);
						options = [];
					}
					else if (Array.isArray(rawOptions)) options = rawOptions.filter((o) => typeof o === "string");
					return /* @__PURE__ */ jsxs(Select, {
						defaultValue: formValues[name],
						onValueChange: (val) => updateValue(name, val),
						children: [/* @__PURE__ */ jsx(SelectTrigger, {
							className: "w-full",
							children: /* @__PURE__ */ jsx(SelectValue, {})
						}), /* @__PURE__ */ jsx(SelectContent, { children: options.map((option) => /* @__PURE__ */ jsx(SelectItem, {
							value: option,
							children: option
						}, option)) })]
					}, key);
				}
				if (type === SUPPORTED_TYPES.HIDDEN) return /* @__PURE__ */ jsx("input", {
					type: "hidden",
					name,
					value: str(formValues[name] ?? child.properties.value)
				}, key);
				return /* @__PURE__ */ jsx(Input, {
					type,
					name,
					placeholder: str(child.properties.placeholder),
					value: str(formValues[name]),
					onChange: (e) => updateValue(name, e.target.value)
				}, key);
			}
			if (child.tagName === SUPPORTED_TAGS.TEXTAREA) {
				const name = str(child.properties.name);
				if (!isSafeName(name)) return null;
				return /* @__PURE__ */ jsx(Textarea, {
					name,
					placeholder: str(child.properties.placeholder),
					value: str(formValues[name]),
					onChange: (e) => updateValue(name, e.target.value)
				}, key);
			}
			if (child.tagName === SUPPORTED_TAGS.BUTTON) {
				const rawVariant = str(child.properties.dataVariant);
				const rawSize = str(child.properties.dataSize);
				return /* @__PURE__ */ jsx(Button, {
					variant: VALID_BUTTON_VARIANTS.has(rawVariant) ? rawVariant : void 0,
					size: VALID_BUTTON_SIZES.has(rawSize) ? rawSize : void 0,
					className: "mt-4",
					disabled: isSubmitting,
					onClick: onSubmit,
					children: /* @__PURE__ */ jsx("span", {
						className: "text-[13px]",
						children: getTextContent(child)
					})
				}, key);
			}
			return /* @__PURE__ */ jsxs("p", { children: ["Unsupported tag:", child.tagName] }, key);
		})
	});
};
MarkdownForm.displayName = "MarkdownForm";
var style_module_default = {
	item: "_item_kjd0p_1",
	"img-2": "_img-2_kjd0p_15",
	"img-4": "_img-4_kjd0p_16"
};
//#endregion
//#region app/components/base/image-gallery/index.tsx
var getWidthStyle = (imgNum) => {
	if (imgNum === 1) return { maxWidth: "100%" };
	if (imgNum === 2 || imgNum === 4) return { width: "calc(50% - 4px)" };
	return { width: "calc(33.3333% - 5.3333px)" };
};
var ImageGallery = ({ srcs }) => {
	const [imagePreviewUrl, setImagePreviewUrl] = useState("");
	const imgNum = srcs.length;
	const imgStyle = getWidthStyle(imgNum);
	return /* @__PURE__ */ jsxs("div", {
		className: cn(style_module_default[`img-${imgNum}`], "flex flex-wrap"),
		"data-testid": "image-gallery",
		children: [srcs.map((src, index) => !src ? null : /* @__PURE__ */ jsx("img", {
			className: style_module_default.item,
			style: imgStyle,
			src,
			alt: "",
			"data-testid": "gallery-image",
			onClick: () => setImagePreviewUrl(src),
			onError: (e) => e.currentTarget.remove()
		}, index)), imagePreviewUrl && /* @__PURE__ */ jsx(ImagePreview, {
			url: imagePreviewUrl,
			onCancel: () => setImagePreviewUrl(""),
			title: ""
		})]
	});
};
var image_gallery_default = React$1.memo(ImageGallery);
//#endregion
//#region app/components/base/markdown-blocks/img.tsx
/**
* @fileoverview Img component for rendering <img> tags in Markdown.
* Extracted from the main markdown renderer for modularity.
* Uses the ImageGallery component to display images.
*/
var Img = memo(({ src }) => {
	return /* @__PURE__ */ jsx("div", {
		className: "markdown-img-wrapper",
		children: /* @__PURE__ */ jsx(image_gallery_default, { srcs: useMemo(() => [src], [src]) })
	});
});
//#endregion
//#region app/components/base/markdown-blocks/link.tsx
var Link = ({ node, children, ...props }) => {
	const { onSend } = useChatContext();
	const commonClassName = "cursor-pointer underline !decoration-primary-700 decoration-dashed";
	if (node.properties?.href && node.properties.href?.toString().startsWith("abbr")) {
		const hidden_text = decodeURIComponent(node.properties.href.toString().split("abbr:")[1]);
		return /* @__PURE__ */ jsx("abbr", {
			className: commonClassName,
			onClick: () => onSend?.(hidden_text),
			title: node.children[0]?.value || "",
			children: node.children[0]?.value || ""
		});
	} else {
		const href = props.href || node.properties?.href;
		if (href && /^#[\w-]+$/.test(href.toString())) {
			const handleClick = (e) => {
				e.preventDefault();
				const answerContainer = e.currentTarget.closest(".chat-answer-container");
				if (answerContainer) {
					const targetId = CSS.escape(href.toString().substring(1));
					const targetElement = answerContainer.querySelector(`[id="${targetId}"]`);
					if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
				}
			};
			return /* @__PURE__ */ jsx("a", {
				href,
				onClick: handleClick,
				className: commonClassName,
				children: children || "ScrollView"
			});
		}
		if (!href || !isValidUrl(href)) return /* @__PURE__ */ jsx("span", { children });
		return /* @__PURE__ */ jsx("a", {
			href,
			target: "_blank",
			rel: "noopener noreferrer",
			className: commonClassName,
			children: children || "Download"
		});
	}
};
//#endregion
//#region app/components/base/markdown-blocks/paragraph.tsx
var Paragraph = (paragraph) => {
	const { node } = paragraph;
	const children_node = node.children;
	if (hasImageChild(children_node)) {
		if (children_node[0]?.tagName === "img") return /* @__PURE__ */ jsxs("div", {
			className: "markdown-img-wrapper",
			children: [/* @__PURE__ */ jsx(image_gallery_default, { srcs: [children_node[0].properties.src] }), Array.isArray(paragraph.children) && paragraph.children.length > 1 ? /* @__PURE__ */ jsx("div", {
				className: "mt-2",
				children: paragraph.children.slice(1)
			}) : null]
		});
		return /* @__PURE__ */ jsx("div", {
			className: "markdown-p",
			children: paragraph.children
		});
	}
	return /* @__PURE__ */ jsx("p", { children: paragraph.children });
};
//#endregion
//#region app/components/base/markdown-blocks/plugin-img.tsx
/**
* @fileoverview Img component for rendering <img> tags in Markdown.
* Extracted from the main markdown renderer for modularity.
* Uses the ImageGallery component to display images.
*/
var PluginImg = memo(({ src, pluginInfo }) => {
	const { pluginUniqueIdentifier, pluginId } = pluginInfo || {};
	const { data: assetData } = usePluginReadmeAsset({
		plugin_unique_identifier: pluginUniqueIdentifier,
		file_name: src
	});
	const [blobUrl, setBlobUrl] = useState();
	useEffect(() => {
		if (!assetData) {
			setBlobUrl(void 0);
			return;
		}
		const objectUrl = URL.createObjectURL(assetData);
		setBlobUrl(objectUrl);
		return () => {
			URL.revokeObjectURL(objectUrl);
		};
	}, [assetData]);
	const imageUrl = useMemo(() => {
		if (blobUrl) return blobUrl;
		return getMarkdownImageURL(src, pluginId);
	}, [
		blobUrl,
		pluginId,
		src
	]);
	return /* @__PURE__ */ jsx("div", {
		className: "markdown-img-wrapper",
		children: /* @__PURE__ */ jsx(image_gallery_default, { srcs: useMemo(() => [imageUrl], [imageUrl]) })
	});
});
//#endregion
//#region app/components/base/markdown-blocks/plugin-paragraph.tsx
var PluginParagraph = ({ pluginInfo, node, children }) => {
	const { pluginUniqueIdentifier, pluginId } = pluginInfo || {};
	const childrenNode = node?.children;
	const firstChild = childrenNode?.[0];
	const isImageParagraph = firstChild?.tagName === "img";
	const imageSrc = isImageParagraph ? firstChild?.properties?.src : void 0;
	const { data: assetData } = usePluginReadmeAsset({
		plugin_unique_identifier: pluginUniqueIdentifier,
		file_name: isImageParagraph && imageSrc ? imageSrc : ""
	});
	const [blobUrl, setBlobUrl] = useState();
	useEffect(() => {
		if (!assetData) {
			setBlobUrl(void 0);
			return;
		}
		const objectUrl = URL.createObjectURL(assetData);
		setBlobUrl(objectUrl);
		return () => {
			URL.revokeObjectURL(objectUrl);
		};
	}, [assetData]);
	const imageUrl = useMemo(() => {
		if (blobUrl) return blobUrl;
		if (isImageParagraph && imageSrc) return getMarkdownImageURL(imageSrc, pluginId);
		return "";
	}, [
		blobUrl,
		imageSrc,
		isImageParagraph,
		pluginId
	]);
	if (isImageParagraph) {
		const remainingChildren = Array.isArray(children) && children.length > 1 ? children.slice(1) : void 0;
		return /* @__PURE__ */ jsxs("div", {
			className: "markdown-img-wrapper",
			"data-testid": "image-paragraph-wrapper",
			children: [/* @__PURE__ */ jsx(image_gallery_default, { srcs: [imageUrl] }), remainingChildren && /* @__PURE__ */ jsx("div", {
				className: "mt-2",
				"data-testid": "remaining-children",
				children: remainingChildren
			})]
		});
	}
	if (hasImageChild(childrenNode)) return /* @__PURE__ */ jsx("div", {
		className: "markdown-p",
		"data-testid": "image-fallback-paragraph",
		children
	});
	return /* @__PURE__ */ jsx("p", {
		"data-testid": "standard-paragraph",
		children
	});
};
//#endregion
//#region app/components/base/markdown-blocks/think-block.tsx
var hasEndThink = (children) => {
	if (typeof children === "string") return children.includes("[ENDTHINKFLAG]");
	if (Array.isArray(children)) return children.some((child) => hasEndThink(child));
	if (children?.props?.children) return hasEndThink(children.props.children);
	return false;
};
var removeEndThink = (children) => {
	if (typeof children === "string") return children.replace("[ENDTHINKFLAG]", "");
	if (Array.isArray(children)) return children.map((child) => removeEndThink(child));
	if (children?.props?.children) return React$1.cloneElement(children, {
		...children.props,
		children: removeEndThink(children.props.children)
	});
	return children;
};
var useThinkTimer = (children) => {
	const { isResponding } = useChatContext();
	const endThinkDetected = hasEndThink(children);
	const [startTime] = useState(() => Date.now());
	const [elapsedTime, setElapsedTime] = useState(0);
	const [isComplete, setIsComplete] = useState(() => endThinkDetected);
	const timerRef = useRef(null);
	useEffect(() => {
		if (isComplete) return;
		timerRef.current = setInterval(() => {
			setElapsedTime(Math.floor((Date.now() - startTime) / 100) / 10);
		}, 100);
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [startTime, isComplete]);
	useEffect(() => {
		if (endThinkDetected || !isResponding) setIsComplete(true);
	}, [endThinkDetected, isResponding]);
	return {
		elapsedTime,
		isComplete
	};
};
var ThinkBlock = ({ children, ...props }) => {
	const { elapsedTime, isComplete } = useThinkTimer(children);
	const displayContent = removeEndThink(children);
	const { t } = useTranslation();
	const { "data-think": isThink = false, className, open, ...rest } = props;
	if (!isThink) return /* @__PURE__ */ jsx("details", {
		...props,
		children
	});
	return /* @__PURE__ */ jsxs("details", {
		...rest,
		"data-think": isThink,
		className: cn("group", className),
		open: isComplete ? open : true,
		children: [/* @__PURE__ */ jsx("summary", {
			className: "flex cursor-pointer select-none list-none items-center whitespace-nowrap pl-2 font-bold text-text-secondary",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center",
				children: [/* @__PURE__ */ jsx("svg", {
					className: "mr-2 h-3 w-3 transition-transform duration-500 group-open:rotate-90",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ jsx("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M9 5l7 7-7 7"
					})
				}), isComplete ? `${t("chat.thought", { ns: "common" })}(${elapsedTime.toFixed(1)}s)` : `${t("chat.thinking", { ns: "common" })}(${elapsedTime.toFixed(1)}s)`]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "ml-2 border-l border-components-panel-border bg-components-panel-bg-alt p-3 text-text-secondary",
			children: displayContent
		})]
	});
};
var VideoPlayer_module_default = {
	videoPlayer: "_videoPlayer_yb9h8_1",
	video: "_video_yb9h8_1",
	controls: "_controls_yb9h8_15",
	hidden: "_hidden_yb9h8_28",
	visible: "_visible_yb9h8_32",
	overlay: "_overlay_yb9h8_36",
	progressBarContainer: "_progressBarContainer_yb9h8_43",
	controlsContent: "_controlsContent_yb9h8_48",
	leftControls: "_leftControls_yb9h8_54",
	rightControls: "_rightControls_yb9h8_54",
	playPauseButton: "_playPauseButton_yb9h8_59",
	muteButton: "_muteButton_yb9h8_59",
	fullscreenButton: "_fullscreenButton_yb9h8_59",
	time: "_time_yb9h8_76",
	volumeControl: "_volumeControl_yb9h8_82",
	volumeSlider: "_volumeSlider_yb9h8_88",
	volumeLevel: "_volumeLevel_yb9h8_98",
	progressBar: "_progressBar_yb9h8_43",
	progress: "_progress_yb9h8_43",
	hoverTimeIndicator: "_hoverTimeIndicator_yb9h8_128",
	smallSize: "_smallSize_yb9h8_153"
};
//#endregion
//#region app/components/base/video-gallery/VideoPlayer.tsx
var PlayIcon = () => /* @__PURE__ */ jsx("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ jsx("path", {
		d: "M8 5V19L19 12L8 5Z",
		fill: "currentColor"
	})
});
var PauseIcon = () => /* @__PURE__ */ jsx("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ jsx("path", {
		d: "M6 19H10V5H6V19ZM14 5V19H18V5H14Z",
		fill: "currentColor"
	})
});
var MuteIcon = () => /* @__PURE__ */ jsx("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ jsx("path", {
		d: "M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z",
		fill: "currentColor"
	})
});
var UnmuteIcon = () => /* @__PURE__ */ jsx("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ jsx("path", {
		d: "M4.34 2.93L2.93 4.34L7.29 8.7L7 9H3V15H7L12 20V13.41L16.18 17.59C15.69 17.96 15.16 18.27 14.58 18.5V20.58C15.94 20.22 17.15 19.56 18.13 18.67L19.66 20.2L21.07 18.79L4.34 2.93ZM10 15.17L7.83 13H5V11H7.83L10 8.83V15.17ZM19 12C19 12.82 18.85 13.61 18.59 14.34L20.12 15.87C20.68 14.7 21 13.39 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM12 4L10.12 5.88L12 7.76V4ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12Z",
		fill: "currentColor"
	})
});
var FullscreenIcon = () => /* @__PURE__ */ jsx("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ jsx("path", {
		d: "M7 14H5V19H10V17H7V14ZM5 10H7V7H10V5H5V10ZM17 17H14V19H19V14H17V17ZM14 5V7H17V10H19V5H14Z",
		fill: "currentColor"
	})
});
var VideoPlayer = ({ src, srcs }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isMuted, setIsMuted] = useState(false);
	const [volume, setVolume] = useState(1);
	const [isDragging, setIsDragging] = useState(false);
	const [isControlsVisible, setIsControlsVisible] = useState(true);
	const [hoverTime, setHoverTime] = useState(null);
	const videoRef = useRef(null);
	const progressRef = useRef(null);
	const volumeRef = useRef(null);
	const controlsTimeoutRef = useRef(null);
	const [isSmallSize, setIsSmallSize] = useState(false);
	const containerRef = useRef(null);
	useEffect(() => {
		const video = videoRef.current;
		/* v8 ignore next 2 -- video element is expected post-mount; null guard protects against lifecycle timing during mount/unmount. @preserve */
		if (!video) return;
		const setVideoData = () => {
			setDuration(video.duration);
			setVolume(video.volume);
		};
		const setVideoTime = () => {
			setCurrentTime(video.currentTime);
		};
		const handleEnded = () => {
			setIsPlaying(false);
		};
		video.addEventListener("loadedmetadata", setVideoData);
		video.addEventListener("timeupdate", setVideoTime);
		video.addEventListener("ended", handleEnded);
		return () => {
			video.removeEventListener("loadedmetadata", setVideoData);
			video.removeEventListener("timeupdate", setVideoTime);
			video.removeEventListener("ended", handleEnded);
		};
	}, [src, srcs]);
	useEffect(() => {
		return () => {
			if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
		};
	}, []);
	const showControls = useCallback(() => {
		setIsControlsVisible(true);
		if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
		controlsTimeoutRef.current = setTimeout(() => setIsControlsVisible(false), 3e3);
	}, []);
	const togglePlayPause = useCallback(() => {
		const video = videoRef.current;
		/* v8 ignore next -- click handler can race with unmount in tests/runtime; guard prevents calling methods on a detached video node. @preserve */
		if (video) {
			if (isPlaying) video.pause();
			else video.play().catch((error) => console.error("Error playing video:", error));
			setIsPlaying(!isPlaying);
		}
	}, [isPlaying]);
	const toggleMute = useCallback(() => {
		const video = videoRef.current;
		/* v8 ignore next -- defensive null-check for ref lifecycle edges before mutating media properties. @preserve */
		if (video) {
			const newMutedState = !video.muted;
			video.muted = newMutedState;
			setIsMuted(newMutedState);
			setVolume(newMutedState ? 0 : video.volume > 0 ? video.volume : 1);
			video.volume = newMutedState ? 0 : video.volume > 0 ? video.volume : 1;
		}
	}, []);
	const toggleFullscreen = useCallback(() => {
		const video = videoRef.current;
		/* v8 ignore next -- defensive null-check so fullscreen calls are skipped if video ref is detached. @preserve */
		if (video) if (document.fullscreenElement) document.exitFullscreen();
		else video.requestFullscreen();
	}, []);
	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
	};
	const updateVideoProgress = useCallback((clientX, updateTime = false) => {
		const progressBar = progressRef.current;
		const video = videoRef.current;
		/* v8 ignore next -- progress callbacks may fire while refs are not yet attached or already torn down; guard avoids invalid DOM access. @preserve */
		if (progressBar && video) {
			const rect = progressBar.getBoundingClientRect();
			const newTime = (clientX - rect.left) / rect.width * video.duration;
			if (newTime >= 0 && newTime <= video.duration) {
				setHoverTime(newTime);
				if (isDragging || updateTime) video.currentTime = newTime;
			}
		}
	}, [isDragging]);
	const handleMouseMove = useCallback((e) => {
		updateVideoProgress(e.clientX);
	}, [updateVideoProgress]);
	const handleMouseLeave = useCallback(() => {
		if (!isDragging) setHoverTime(null);
	}, [isDragging]);
	const handleProgressClick = useCallback((e) => {
		e.preventDefault();
		updateVideoProgress(e.clientX, true);
	}, [updateVideoProgress]);
	const handleMouseDown = useCallback((e) => {
		e.preventDefault();
		setIsDragging(true);
		updateVideoProgress(e.clientX, true);
	}, [updateVideoProgress]);
	useEffect(() => {
		const handleGlobalMouseMove = (e) => {
			/* v8 ignore next -- global mousemove listener remains registered briefly; skip updates once dragging has ended. @preserve */
			if (isDragging) updateVideoProgress(e.clientX);
		};
		const handleGlobalMouseUp = () => {
			setIsDragging(false);
			setHoverTime(null);
		};
		if (isDragging) {
			document.addEventListener("mousemove", handleGlobalMouseMove);
			document.addEventListener("mouseup", handleGlobalMouseUp);
		}
		return () => {
			document.removeEventListener("mousemove", handleGlobalMouseMove);
			document.removeEventListener("mouseup", handleGlobalMouseUp);
		};
	}, [isDragging, updateVideoProgress]);
	const checkSize = useCallback(() => {
		/* v8 ignore next 2 -- container ref may be null before first paint or after unmount while resize events are in flight. @preserve */
		if (containerRef.current) setIsSmallSize(containerRef.current.offsetWidth < 400);
	}, []);
	useEffect(() => {
		checkSize();
		window.addEventListener("resize", checkSize);
		return () => window.removeEventListener("resize", checkSize);
	}, [checkSize]);
	const handleVolumeChange = useCallback((e) => {
		const volumeBar = volumeRef.current;
		const video = videoRef.current;
		/* v8 ignore next -- defensive check for ref availability during drag/click lifecycle transitions. @preserve */
		if (volumeBar && video) {
			const rect = volumeBar.getBoundingClientRect();
			const newVolume = (e.clientX - rect.left) / rect.width;
			const clampedVolume = Math.max(0, Math.min(1, newVolume));
			video.volume = clampedVolume;
			setVolume(clampedVolume);
			setIsMuted(clampedVolume === 0);
		}
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		ref: containerRef,
		className: VideoPlayer_module_default.videoPlayer,
		onMouseMove: showControls,
		onMouseEnter: showControls,
		"data-testid": "video-player-container",
		children: [/* @__PURE__ */ jsx("video", {
			ref: videoRef,
			src,
			className: VideoPlayer_module_default.video,
			"data-testid": "video-element",
			children: srcs && srcs.map((srcUrl, index) => /* @__PURE__ */ jsx("source", { src: srcUrl }, index))
		}), /* @__PURE__ */ jsx("div", {
			className: `${VideoPlayer_module_default.controls} ${isControlsVisible ? VideoPlayer_module_default.visible : VideoPlayer_module_default.hidden} ${isSmallSize ? VideoPlayer_module_default.smallSize : ""}`,
			"data-testid": "video-controls",
			"data-is-visible": isControlsVisible,
			children: /* @__PURE__ */ jsxs("div", {
				className: VideoPlayer_module_default.overlay,
				children: [/* @__PURE__ */ jsx("div", {
					className: VideoPlayer_module_default.progressBarContainer,
					children: /* @__PURE__ */ jsxs("div", {
						ref: progressRef,
						className: VideoPlayer_module_default.progressBar,
						onClick: handleProgressClick,
						onMouseMove: handleMouseMove,
						onMouseLeave: handleMouseLeave,
						onMouseDown: handleMouseDown,
						"data-testid": "video-progress-bar",
						children: [/* @__PURE__ */ jsx("div", {
							className: VideoPlayer_module_default.progress,
							style: { width: `${currentTime / duration * 100}%` }
						}), hoverTime !== null && /* @__PURE__ */ jsx("div", {
							className: VideoPlayer_module_default.hoverTimeIndicator,
							style: { left: `${hoverTime / duration * 100}%` },
							"data-testid": "video-hover-time",
							children: formatTime(hoverTime)
						})]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: VideoPlayer_module_default.controlsContent,
					children: [/* @__PURE__ */ jsxs("div", {
						className: VideoPlayer_module_default.leftControls,
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							className: VideoPlayer_module_default.playPauseButton,
							onClick: togglePlayPause,
							"data-testid": "video-play-pause-button",
							children: isPlaying ? /* @__PURE__ */ jsx(PauseIcon, {}) : /* @__PURE__ */ jsx(PlayIcon, {})
						}), !isSmallSize && /* @__PURE__ */ jsxs("span", {
							className: VideoPlayer_module_default.time,
							"data-testid": "video-time-display",
							children: [
								formatTime(currentTime),
								" ",
								"/",
								" ",
								formatTime(duration)
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: VideoPlayer_module_default.rightControls,
						children: [
							/* @__PURE__ */ jsx("button", {
								type: "button",
								className: VideoPlayer_module_default.muteButton,
								onClick: toggleMute,
								"data-testid": "video-mute-button",
								children: isMuted ? /* @__PURE__ */ jsx(UnmuteIcon, {}) : /* @__PURE__ */ jsx(MuteIcon, {})
							}),
							!isSmallSize && /* @__PURE__ */ jsx("div", {
								className: VideoPlayer_module_default.volumeControl,
								children: /* @__PURE__ */ jsx("div", {
									ref: volumeRef,
									className: VideoPlayer_module_default.volumeSlider,
									onClick: handleVolumeChange,
									onMouseDown: (e) => {
										handleVolumeChange(e);
										const handleMouseMove = (e) => handleVolumeChange(e);
										const handleMouseUp = () => {
											document.removeEventListener("mousemove", handleMouseMove);
											document.removeEventListener("mouseup", handleMouseUp);
										};
										document.addEventListener("mousemove", handleMouseMove);
										document.addEventListener("mouseup", handleMouseUp);
									},
									"data-testid": "video-volume-slider",
									children: /* @__PURE__ */ jsx("div", {
										className: VideoPlayer_module_default.volumeLevel,
										style: { width: `${volume * 100}%` }
									})
								})
							}),
							/* @__PURE__ */ jsx("button", {
								type: "button",
								className: VideoPlayer_module_default.fullscreenButton,
								onClick: toggleFullscreen,
								"data-testid": "video-fullscreen-button",
								children: /* @__PURE__ */ jsx(FullscreenIcon, {})
							})
						]
					})]
				})]
			})
		})]
	});
};
//#endregion
//#region app/components/base/video-gallery/index.tsx
var VideoGallery = ({ srcs }) => {
	const validSrcs = srcs.filter((src) => src);
	if (validSrcs.length === 0) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "my-3",
		"data-testid": "video-gallery-container",
		children: /* @__PURE__ */ jsx(VideoPlayer, { srcs: validSrcs })
	});
};
var video_gallery_default = React$1.memo(VideoGallery);
//#endregion
//#region app/components/base/markdown-blocks/video-block.tsx
var VideoBlock = memo(({ node }) => {
	const srcs = node.children.filter((child) => "properties" in child).map((child) => child.properties.src);
	if (srcs.length === 0) {
		const src = node.properties?.src;
		if (src) return /* @__PURE__ */ jsx(video_gallery_default, { srcs: [src] }, src);
		return null;
	}
	return /* @__PURE__ */ jsx(video_gallery_default, { srcs }, srcs.join());
});
VideoBlock.displayName = "VideoBlock";
//#endregion
//#region app/components/base/markdown/streamdown-wrapper.tsx
var CodeBlock = dynamic(() => import("./code-block-Clz9Kp_p.js").then((n) => n.t), { ssr: false });
var mathPlugin = g({ singleDollarTextMath: ENABLE_SINGLE_DOLLAR_LATEX });
/**
* Allowed HTML tags and their permitted data attributes for rehype-sanitize.
* Keys = tag names to allow; values = attribute names in **hast** property format
* (camelCase, e.g. `dataThink` for `data-think`).
*
* Prefer explicit attribute lists over wildcards (e.g. `data*`) to
* minimise the attack surface when LLM-generated content is rendered.
*/
var ALLOWED_TAGS = {
	button: [
		"dataVariant",
		"dataSize",
		"dataMessage",
		"dataLink"
	],
	form: ["dataFormat"],
	input: [
		"type",
		"name",
		"value",
		"placeholder",
		"checked",
		"dataTip",
		"dataOptions"
	],
	textarea: [
		"name",
		"placeholder",
		"value"
	],
	label: ["htmlFor"],
	details: ["dataThink"],
	video: ["src"],
	audio: ["src"],
	source: ["src"],
	mark: [],
	sub: [],
	sup: [],
	kbd: [],
	variable: ["dataPath"],
	section: ["dataName"]
};
/**
* Build a rehype plugin list that includes the default raw → sanitize → harden
* pipeline with `ALLOWED_TAGS` baked into the sanitize schema, plus any extra
* plugins the caller provides.
*
* This sidesteps the streamdown `allowedTags` prop, which only takes effect
* when `rehypePlugins` is the exact default reference (identity check).
*/
function buildRehypePlugins(extraPlugins) {
	const [sanitizePlugin, defaultSanitizeSchema] = xt.sanitize;
	const tagNamesSet = new Set([...defaultSanitizeSchema.tagNames ?? [], ...Object.keys(ALLOWED_TAGS)]);
	const mergedAttributes = { ...defaultSanitizeSchema.attributes ?? {} };
	for (const tag of Object.keys(ALLOWED_TAGS)) {
		const existing = mergedAttributes[tag];
		if (existing) {
			const overrideNames = new Set(ALLOWED_TAGS[tag]);
			mergedAttributes[tag] = [...existing.filter((entry) => {
				const name = typeof entry === "string" ? entry : entry[0];
				return !overrideNames.has(name);
			}), ...ALLOWED_TAGS[tag]];
		} else mergedAttributes[tag] = ALLOWED_TAGS[tag];
	}
	const { input: _inputRequired, ...requiredRest } = defaultSanitizeSchema.required ?? {};
	const clobber = (defaultSanitizeSchema.clobber ?? []).filter((k) => k !== "name");
	const customSchema = {
		...defaultSanitizeSchema,
		tagNames: [...tagNamesSet],
		attributes: mergedAttributes,
		required: requiredRest,
		clobber
	};
	return [
		xt.raw,
		...extraPlugins ?? [],
		[sanitizePlugin, customSchema],
		xt.harden
	];
}
var StreamdownWrapper = (props) => {
	const { customComponents, latexContent, pluginInfo, isAnimating, className, mode = "streaming" } = props;
	return /* @__PURE__ */ jsx(Qs, {
		className,
		remarkPlugins: useMemo(() => [
			[Array.isArray(Ks.gfm) ? Ks.gfm[0] : Ks.gfm, { singleTilde: false }],
			remarkBreaks,
			...props.remarkPlugins ?? []
		], [props.remarkPlugins]),
		rehypePlugins: useMemo(() => buildRehypePlugins(props.rehypePlugins ?? void 0), [props.rehypePlugins]),
		plugins: useMemo(() => ({ math: mathPlugin }), []),
		urlTransform: customUrlTransform,
		disallowedElements: useMemo(() => [
			"iframe",
			"head",
			"html",
			"meta",
			"link",
			"style",
			"body",
			...props.customDisallowedElements || []
		], [props.customDisallowedElements]),
		components: useMemo(() => ({
			code: CodeBlock,
			img: (imgProps) => pluginInfo ? /* @__PURE__ */ jsx(PluginImg, {
				src: String(imgProps.src ?? ""),
				pluginInfo
			}) : /* @__PURE__ */ jsx(Img, { src: String(imgProps.src ?? "") }),
			video: VideoBlock,
			audio: AudioBlock,
			a: Link,
			p: (pProps) => pluginInfo ? /* @__PURE__ */ jsx(PluginParagraph, {
				...pProps,
				pluginInfo
			}) : /* @__PURE__ */ jsx(Paragraph, { ...pProps }),
			button: MarkdownButton,
			form: MarkdownForm,
			details: ThinkBlock,
			...customComponents
		}), [pluginInfo, customComponents]),
		isAnimating,
		mode,
		children: latexContent
	});
};
var streamdown_wrapper_default = memo(StreamdownWrapper);
//#endregion
export { streamdown_wrapper_default as default };
