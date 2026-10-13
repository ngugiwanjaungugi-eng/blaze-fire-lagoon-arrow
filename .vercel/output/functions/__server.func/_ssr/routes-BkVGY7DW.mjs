import { a as roles, n as frames, o as services, r as marquee } from "./site-DGokqt0M.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useLightbox, t as FrameButton } from "./gallery-CsYls-LY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BkVGY7DW.js
var import_jsx_runtime = require_jsx_runtime();
var press = "transition-transform duration-150 ease-out active:scale-[0.96]";
function Home() {
	const selected = [
		"beach",
		"lawn",
		"drapes",
		"decks",
		"hoodie"
	].flatMap((id) => {
		const frame = frames.find((item) => item.id === id);
		return frame ? [frame] : [];
	});
	const { open, lightbox } = useLightbox(selected);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-end gap-10 px-5 pt-10 pb-14 lg:grid-cols-12 lg:pt-14 lg:pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6 lg:pb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "enter text-xs font-medium tracking-brand text-gold uppercase",
						children: "Entertainment house · To the world"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "enter enter-2 mt-5 font-display text-5xl leading-display sm:text-6xl lg:text-7xl",
						children: ["DJ Pstyle takes the decks.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-gold italic",
							children: "The house takes the night."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "enter enter-3 mt-6 max-w-md text-lg leading-relaxed text-sand",
						children: "Weddings, private rooms, and coast sets from a Nairobi desk. Music, ceremony sound, a host, and social managers who film the room while it is still happening."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "enter enter-4 mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "inline-flex min-h-11 items-center bg-gold px-5 text-sm font-medium text-ink " + press,
							children: "Book a date"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/work",
							className: "inline-flex min-h-11 items-center border border-line px-5 text-sm text-paper " + press,
							children: "See the nights"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "lg:col-span-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden bg-raise",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/portrait-sweater.jpg",
						alt: "DJ Pstyle in headphones and a black sweater against an orange studio backdrop",
						width: 934,
						height: 1400,
						className: "aspect-portrait w-full object-cover object-top"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-3 flex items-center justify-between text-xs tracking-brand text-sand uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DJ Pstyle · Founder" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nairobi" })]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden border-y border-line py-4",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track flex w-max gap-8 pr-8",
				children: [...marquee, ...marquee].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-8 text-sm tracking-brand text-sand uppercase",
					children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "·"
					})]
				}, item + index))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-12 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-brand text-gold uppercase",
					children: "The job"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl leading-display sm:text-5xl",
					children: "Not a laptop in the corner."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-paper",
						children: "A wedding fails in small ways: a vow no one heard, a speech that feeds back, a dance floor that waits too long, photos that miss the only good hour. Pstyles treats those as the job."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-sand",
						children: "DJ Pstyle on the music. An engineer on the rack. A producer on the order of the day. A host on the microphone. Social managers on the floor with a shot list — not a hopeful cousin and a dying battery."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/media/live-booth.jpg",
							alt: "DJ Pstyle at a laptop and Pioneer controller inside a draped tent",
							width: 1200,
							height: 1600,
							className: "aspect-portrait w-full max-w-md object-cover object-top"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "mt-3 text-sm text-sand",
							children: "Load-in, before the room arrives."
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl",
						children: "The tracklist"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "text-sm text-gold",
						children: "All services"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8",
					children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-t border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							hash: service.id,
							className: "grid gap-2 py-5 md:grid-cols-12 md:items-baseline",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-gold md:col-span-1",
									children: service.code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl md:col-span-4",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sand md:col-span-7",
									children: service.summary
								})
							]
						})
					}, service.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl",
						children: "Selected nights"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work",
						className: "text-sm text-gold",
						children: "Full record"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex gap-4 overflow-x-auto pb-4",
					children: selected.map((frame) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FrameButton, {
						frame,
						onOpen: open,
						className: "w-64 shrink-0 sm:w-72"
					}, frame.id))
				})]
			}), lightbox]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-brand text-gold uppercase",
						children: "The house"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl",
						children: "Five desks. One night."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/house",
						className: "text-sm text-gold",
						children: "Meet them"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10",
					children: roles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-2 border-t border-line py-5 md:grid-cols-12 md:gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-gold md:col-span-1",
								children: role.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl",
									children: role.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-sand",
									children: role.who
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "leading-relaxed text-sand md:col-span-7",
								children: role.summary
							})
						]
					}, role.code))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-xl font-display text-4xl leading-display",
						children: "Pioneer on the booth. The rack when the tent needs it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sand",
						children: "Serato on the laptop. dbx across the EQ. Peavey and Crest underneath when the ground is big enough to ask for them. The gear is part of the promise, not a backdrop."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-3",
						children: [
							["/media/rig-decks.jpg", "Pioneer facing the garden"],
							["/media/rig-rack.jpg", "EQ, crossover, amplifiers"],
							["/media/rig-booth.jpg", "Mics and playback in one line"]
						].map(([src, caption]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: caption,
							className: "aspect-portrait w-full object-cover object-top"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "mt-2 text-sm text-sand",
							children: caption
						})] }, src))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/portrait-hoodie.jpg",
					alt: "DJ Pstyle in the white Pstyle hoodie against an orange backdrop",
					width: 934,
					height: 1400,
					className: "aspect-portrait w-full object-cover object-top"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-brand text-gold uppercase",
						children: "Hold the date"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-5xl leading-display",
						children: "Tell the desk the date. Get a quote for the room."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sand",
						children: "No printed “from” price. The city, the guest count, and the package decide it. Build a brief and send it across."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						className: "mt-8 inline-flex min-h-11 items-center bg-gold px-5 text-sm font-medium text-ink " + press,
						children: "Start a brief"
					})
				] })]
			})
		})
	] });
}
//#endregion
export { Home as component };
