import { t as EventClient } from "./plugin-BkU7i0I_.js";
//#region node_modules/.pnpm/@tanstack+form-core@1.28.5/node_modules/@tanstack/form-core/dist/esm/EventClient.js
var FormEventClient = class extends EventClient {
	constructor() {
		super({
			pluginId: "form-devtools",
			reconnectEveryMs: 1e3
		});
	}
};
var formEventClient = new FormEventClient();
//#endregion
export { formEventClient as t };
