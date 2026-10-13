import { a as roles } from "./site-DGokqt0M.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as PageIntro } from "./router-Bgw9R-he.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/house-CNR4tFu7.js
var import_jsx_runtime = require_jsx_runtime();
var portraits = [
	{
		src: "/media/portrait-call.jpg",
		alt: "DJ Pstyle in a black shirt and headphones making a call-me gesture",
		caption: "Olive room"
	},
	{
		src: "/media/portrait-gaze.jpg",
		alt: "DJ Pstyle looking off-camera in a black shirt, hands crossed",
		caption: "Between sets"
	},
	{
		src: "/media/portrait-hoodie.jpg",
		alt: "DJ Pstyle in the white hoodie that reads Pstyle, To The World",
		caption: "To the world"
	}
];
function HousePage() {
	const [founder, ...desks] = roles;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "The house",
			title: "A founder on the decks. Four desks around him.",
			lede: "Pstyles is DJ Pstyle’s company. He is CEO and lead DJ. The night is shared with a social team, a technical director, an event producer, and a resident MC."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 pb-16 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/portrait-sweater.jpg",
					alt: "Portrait of DJ Pstyle, founder of Pstyles, in headphones against orange",
					width: 934,
					height: 1400,
					className: "aspect-portrait w-full object-cover object-top"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-sm text-sand",
					children: "DJ Pstyle · Founder & CEO"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7 lg:pt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-gold",
						children: founder?.code
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: founder?.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sand",
						children: founder?.who
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg leading-relaxed",
						children: founder?.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-2",
						children: founder?.duties.map((duty) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sand",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								"aria-hidden": "true",
								children: "—"
							}), duty]
						}, duty))
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-5 py-12 sm:grid-cols-3",
				children: portraits.map((shot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: shot.src,
					alt: shot.alt,
					className: "aspect-portrait w-full object-cover object-top"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-2 text-sm text-sand",
					children: shot.caption
				})] }, shot.src))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl",
						children: "The other four"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-sand",
						children: "Social, sound, the running order, and the microphone. Book the full house, or ask for the desks the date actually needs."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-12",
						children: desks.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "grid gap-6 border-t border-line pt-10 lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-gold",
										children: role.code
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-3xl",
										children: role.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sand",
										children: role.who
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg leading-relaxed",
									children: role.body
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 grid gap-2 sm:grid-cols-2",
									children: role.duties.map((duty) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "border border-line bg-raise px-4 py-3 text-sm text-sand",
										children: duty
									}, duty))
								})]
							})]
						}, role.code))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						search: { package: "house" },
						className: "mt-12 inline-flex min-h-11 items-center bg-gold px-5 text-sm font-medium text-ink transition-transform duration-150 ease-out active:scale-[0.96]",
						children: "Book the full house"
					})
				]
			})
		})
	] });
}
//#endregion
export { HousePage as component };
