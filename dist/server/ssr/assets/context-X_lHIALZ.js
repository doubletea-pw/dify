import { n as useContext, t as createContext } from "./dist-mUzjAi-W.js";
//#region app/components/base/chat/chat/context.ts
var ChatContext = createContext({
	chatList: [],
	readonly: false
});
var useChatContext = () => useContext(ChatContext);
//#endregion
export { useChatContext as n, ChatContext as t };
