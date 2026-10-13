import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CsYls-LY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FrameButton({ frame, onOpen, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onOpen(frame),
		className: "group block w-full text-left " + className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block overflow-hidden bg-raise",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: frame.src,
					alt: frame.alt,
					width: frame.width,
					height: frame.height,
					className: "aspect-portrait w-full object-cover object-top"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-3 flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xl text-paper",
					children: frame.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 text-xs tracking-brand text-sand uppercase",
					children: frame.place
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-sm leading-relaxed text-sand",
				children: frame.note
			})
		]
	});
}
function Lightbox({ frames, frame, onClose, onSelect }) {
	(0, import_react.useEffect)(() => {
		if (!frame) return;
		const onKey = (event) => {
			if (event.key === "Escape") {
				onClose();
				return;
			}
			const index = frames.findIndex((item) => item.id === frame.id);
			if (index < 0) return;
			if (event.key === "ArrowRight") {
				const next = frames[(index + 1) % frames.length];
				if (next) onSelect(next);
			}
			if (event.key === "ArrowLeft") {
				const next = frames[(index - 1 + frames.length) % frames.length];
				if (next) onSelect(next);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		frame,
		frames,
		onClose,
		onSelect
	]);
	if (!frame) return null;
	const index = frames.findIndex((item) => item.id === frame.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 bg-ink/95",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": frame.title,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "absolute top-4 right-4 inline-flex size-11 items-center justify-center border border-line text-paper",
			onClick: onClose,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full min-h-0 flex-col px-5 pt-16 pb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-h-0 flex-1 items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: frame.src,
					alt: frame.alt,
					width: frame.width,
					height: frame.height,
					className: "max-h-full max-w-full object-contain"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full max-w-3xl items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: frame.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-sand",
					children: frame.note
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center border border-line px-3 text-sm text-paper",
						onClick: () => {
							const next = frames[(index - 1 + frames.length) % frames.length];
							if (next) onSelect(next);
						},
						children: "Prev"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center border border-line px-3 text-sm text-paper",
						onClick: () => {
							const next = frames[(index + 1) % frames.length];
							if (next) onSelect(next);
						},
						children: "Next"
					})]
				})]
			})]
		})]
	});
}
function useLightbox(list) {
	const [frame, setFrame] = (0, import_react.useState)(null);
	return {
		open: setFrame,
		lightbox: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			frames: list,
			frame,
			onClose: () => setFrame(null),
			onSelect: setFrame
		})
	};
}
//#endregion
export { useLightbox as n, FrameButton as t };
