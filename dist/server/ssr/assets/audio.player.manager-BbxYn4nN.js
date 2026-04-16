import { n as useStore, r as createStore } from "./react-CHKO_ryu.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import { c as Resolution, u as TransferMethod } from "./app-DPjSIfgb.js";
import { N as textToAudioStream, t as AppSourceType } from "./share-Bnl8cbPg.js";
import { createContext, useContext, useRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region app/components/base/features/store.ts
var createFeaturesStore = (initProps) => {
	const DEFAULT_PROPS = { features: {
		moreLikeThis: { enabled: false },
		opening: { enabled: false },
		suggested: { enabled: false },
		text2speech: { enabled: false },
		speech2text: { enabled: false },
		citation: { enabled: false },
		moderation: { enabled: false },
		file: { image: {
			enabled: false,
			detail: Resolution.high,
			number_limits: 3,
			transfer_methods: [TransferMethod.local_file, TransferMethod.remote_url]
		} },
		annotationReply: { enabled: false }
	} };
	return createStore()((set) => ({
		...DEFAULT_PROPS,
		...initProps,
		setFeatures: (features) => set(() => ({ features })),
		showFeaturesModal: false,
		setShowFeaturesModal: (showFeaturesModal) => set(() => ({ showFeaturesModal }))
	}));
};
//#endregion
//#region app/components/base/features/context.tsx
var FeaturesContext = createContext(null);
var FeaturesProvider = ({ children, ...props }) => {
	const storeRef = useRef(void 0);
	if (!storeRef.current) storeRef.current = createFeaturesStore(props);
	return /* @__PURE__ */ jsx(FeaturesContext.Provider, {
		value: storeRef.current,
		children
	});
};
//#endregion
//#region app/components/base/features/hooks.ts
function useFeatures(selector) {
	const store = useContext(FeaturesContext);
	if (!store) throw new Error("Missing FeaturesContext.Provider in the tree");
	return useStore(store, selector);
}
function useFeaturesStore() {
	return useContext(FeaturesContext);
}
//#endregion
//#region app/components/base/audio-btn/audio.ts
var AudioPlayer = class {
	mediaSource;
	audio;
	audioContext;
	sourceBuffer;
	cacheBuffers = [];
	pauseTimer = null;
	msgId;
	msgContent = null;
	voice = void 0;
	isLoadData = false;
	url;
	isPublic;
	callback;
	constructor(streamUrl, isPublic, msgId, msgContent, voice, callback) {
		this.audioContext = new AudioContext();
		this.msgId = msgId;
		this.msgContent = msgContent;
		this.url = streamUrl;
		this.isPublic = isPublic;
		this.voice = voice;
		this.callback = callback;
		const MediaSource = window.ManagedMediaSource || window.MediaSource;
		if (!MediaSource) Toast.notify({
			message: "Your browser does not support audio streaming, if you are using an iPhone, please update to iOS 17.1 or later.",
			type: "error"
		});
		this.mediaSource = MediaSource ? new MediaSource() : null;
		this.audio = new Audio();
		this.setCallback(callback);
		if (!window.MediaSource) {
			this.audio.disableRemotePlayback = true;
			this.audio.controls = true;
		}
		this.audio.src = this.mediaSource ? URL.createObjectURL(this.mediaSource) : "";
		this.audio.autoplay = true;
		this.audioContext.createMediaElementSource(this.audio).connect(this.audioContext.destination);
		this.listenMediaSource("audio/mpeg");
	}
	resetMsgId(msgId) {
		this.msgId = msgId;
	}
	listenMediaSource(contentType) {
		this.mediaSource?.addEventListener("sourceopen", () => {
			if (this.sourceBuffer) return;
			this.sourceBuffer = this.mediaSource?.addSourceBuffer(contentType);
		});
	}
	setCallback(callback) {
		this.callback = callback;
		if (callback) {
			this.audio.addEventListener("ended", () => {
				callback("ended");
			}, false);
			this.audio.addEventListener("paused", () => {
				callback("paused");
			}, true);
			this.audio.addEventListener("loaded", () => {
				callback("loaded");
			}, true);
			this.audio.addEventListener("play", () => {
				callback("play");
			}, true);
			this.audio.addEventListener("timeupdate", () => {
				callback("timeupdate");
			}, true);
			this.audio.addEventListener("loadeddate", () => {
				callback("loadeddate");
			}, true);
			this.audio.addEventListener("canplay", () => {
				callback("canplay");
			}, true);
			this.audio.addEventListener("error", () => {
				callback("error");
			}, true);
		}
	}
	async loadAudio() {
		try {
			const audioResponse = await textToAudioStream(this.url, this.isPublic ? AppSourceType.webApp : AppSourceType.installedApp, { content_type: "audio/mpeg" }, {
				message_id: this.msgId,
				streaming: true,
				voice: this.voice,
				text: this.msgContent
			});
			if (audioResponse.status !== 200) {
				this.isLoadData = false;
				if (this.callback) this.callback("error");
			}
			const reader = audioResponse.body.getReader();
			while (true) {
				const { value, done } = await reader.read();
				if (done) {
					this.receiveAudioData(value);
					break;
				}
				this.receiveAudioData(value);
			}
		} catch {
			this.isLoadData = false;
			this.callback?.("error");
		}
	}
	playAudio() {
		if (this.isLoadData) {
			if (this.audioContext.state === "suspended") this.audioContext.resume().then((_) => {
				this.audio.play();
				this.callback?.("play");
			});
			else if (this.audio.ended) {
				this.audio.play();
				this.callback?.("play");
			}
			this.callback?.("play");
		} else {
			this.isLoadData = true;
			this.loadAudio();
		}
	}
	theEndOfStream() {
		const endTimer = setInterval(() => {
			if (!this.sourceBuffer?.updating) {
				this.mediaSource?.endOfStream();
				clearInterval(endTimer);
			}
		}, 10);
	}
	finishStream() {
		const timer = setInterval(() => {
			if (!this.cacheBuffers.length) {
				this.theEndOfStream();
				clearInterval(timer);
			}
			if (this.cacheBuffers.length && !this.sourceBuffer?.updating) {
				const arrayBuffer = this.cacheBuffers.shift();
				this.sourceBuffer?.appendBuffer(arrayBuffer);
			}
		}, 10);
	}
	async playAudioWithAudio(audio, play = true) {
		if (!audio || !audio.length) {
			this.finishStream();
			return;
		}
		const audioContent = Buffer.from(audio, "base64");
		this.receiveAudioData(new Uint8Array(audioContent));
		if (play) {
			this.isLoadData = true;
			if (this.audio.paused) this.audioContext.resume().then((_) => {
				this.audio.play();
				this.callback?.("play");
			});
			else if (this.audio.ended) {
				this.audio.play();
				this.callback?.("play");
			} else if (this.audio.played) {} else {
				this.audio.play();
				this.callback?.("play");
			}
		}
	}
	pauseAudio() {
		this.callback?.("paused");
		this.audio.pause();
		this.audioContext.suspend();
	}
	receiveAudioData(unit8Array) {
		if (!unit8Array) {
			this.finishStream();
			return;
		}
		const audioData = this.byteArrayToArrayBuffer(unit8Array);
		if (!audioData.byteLength) {
			if (this.mediaSource?.readyState === "open") this.finishStream();
			return;
		}
		if (this.sourceBuffer?.updating) this.cacheBuffers.push(audioData);
		else if (this.cacheBuffers.length && !this.sourceBuffer?.updating) {
			this.cacheBuffers.push(audioData);
			const cacheBuffer = this.cacheBuffers.shift();
			this.sourceBuffer?.appendBuffer(cacheBuffer);
		} else this.sourceBuffer?.appendBuffer(audioData);
	}
	byteArrayToArrayBuffer(byteArray) {
		const arrayBuffer = new ArrayBuffer(byteArray.length);
		new Uint8Array(arrayBuffer).set(byteArray);
		return arrayBuffer;
	}
};
//#endregion
//#region app/components/base/audio-btn/audio.player.manager.ts
var AudioPlayerManager = class AudioPlayerManager {
	static instance;
	audioPlayers = null;
	msgId;
	static getInstance() {
		if (!AudioPlayerManager.instance) {
			AudioPlayerManager.instance = new AudioPlayerManager();
			this.instance = AudioPlayerManager.instance;
		}
		return AudioPlayerManager.instance;
	}
	getAudioPlayer(url, isPublic, id, msgContent, voice, callback) {
		if (this.msgId && this.msgId === id && this.audioPlayers) {
			this.audioPlayers.setCallback(callback);
			return this.audioPlayers;
		} else {
			if (this.audioPlayers) try {
				this.audioPlayers.pauseAudio();
				this.audioPlayers.cacheBuffers = [];
				this.audioPlayers.sourceBuffer?.abort();
			} catch {}
			this.msgId = id;
			this.audioPlayers = new AudioPlayer(url, isPublic, id, msgContent, voice, callback);
			return this.audioPlayers;
		}
	}
	resetMsgId(msgId) {
		this.msgId = msgId;
		this.audioPlayers?.resetMsgId(msgId);
	}
};
//#endregion
export { FeaturesProvider as i, useFeatures as n, useFeaturesStore as r, AudioPlayerManager as t };
