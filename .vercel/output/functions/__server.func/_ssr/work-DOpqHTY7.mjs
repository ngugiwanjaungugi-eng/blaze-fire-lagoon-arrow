import { i as __toESM } from "../_runtime.mjs";
import { n as frames } from "./site-DGokqt0M.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as PageIntro } from "./router-Bgw9R-he.mjs";
import { n as useLightbox, t as FrameButton } from "./gallery-CsYls-LY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-DOpqHTY7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "night",
		label: "Nights"
	},
	{
		id: "rig",
		label: "The rig"
	},
	{
		id: "portrait",
		label: "Portraits"
	}
];
function WorkPage() {
	const [kind, setKind] = (0, import_react.useState)("all");
	const visible = kind === "all" ? frames : frames.filter((frame) => frame.kind === kind);
	const { open, lightbox } = useLightbox(visible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Work",
			title: "Rooms the house has already stood in.",
			lede: "Coast nights, garden receptions, a Limuru anniversary, and the rack that keeps speeches intelligible. Open any frame."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Filter work",
				children: filters.map((filter) => {
					const active = kind === filter.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": active,
						onClick: () => setKind(filter.id),
						className: "inline-flex min-h-11 items-center px-4 text-sm transition-transform duration-150 ease-out active:scale-[0.96] " + (active ? "bg-gold text-ink" : "border border-line text-paper"),
						children: filter.label
					}, filter.id);
				})
			}), visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-sand",
				children: "Nothing in that drawer."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: visible.map((frame) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FrameButton, {
					frame,
					onOpen: open
				}, frame.id))
			})]
		}),
		lightbox
	] });
}
//#endregion
export { WorkPage as component };
