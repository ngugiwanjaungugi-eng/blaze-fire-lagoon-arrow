import { o as services } from "./site-DGokqt0M.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as PageIntro } from "./router-Bgw9R-he.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-IL1zvBRv.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Services",
		title: "What the house actually does.",
		lede: "Six ways to book Pstyles. Most weddings want the full house. Some nights only need the decks, or only the social desk."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-5 pb-20",
		children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			id: service.id,
			className: "scroll-mt-24 border-t border-line py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-gold",
				children: service.code
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl",
						children: service.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg text-sand",
						children: service.summary
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "leading-relaxed",
							children: service.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-2",
							children: service.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sand",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									"aria-hidden": "true",
									children: "—"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							search: { package: service.packageId },
							className: "mt-8 inline-flex min-h-11 items-center border border-line px-4 text-sm text-paper transition-transform duration-150 ease-out active:scale-[0.96]",
							children: "Request this"
						})
					]
				})]
			})]
		}, service.id))
	})] });
}
//#endregion
export { ServicesPage as component };
