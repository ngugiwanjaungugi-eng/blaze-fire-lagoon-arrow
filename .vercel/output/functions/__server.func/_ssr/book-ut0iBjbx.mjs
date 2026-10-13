import { i as __toESM } from "../_runtime.mjs";
import { i as packages, s as whatsappHref, t as faqs } from "./site-DGokqt0M.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check, i as Copy } from "../_libs/lucide-react.mjs";
import { n as Route$3, r as PageIntro } from "./router-Bgw9R-he.mjs";
import { i as startOfDay, n as isBefore, r as format, t as parseISO } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-ut0iBjbx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var events = [
	"Wedding",
	"Private celebration",
	"Corporate",
	"Coast or outdoor",
	"Other"
];
var cities = [
	"Nairobi",
	"Limuru & Kiambu",
	"The Coast",
	"Somewhere further"
];
var guests = [
	"Under 80",
	"80–150",
	"150–300",
	"300+"
];
var STORAGE_KEY = "pstyles-briefs";
function compose(form) {
	const pack = packages.find((item) => item.id === form.packageId);
	let when = form.date;
	try {
		when = format(parseISO(form.date), "d MMMM yyyy");
	} catch {
		when = form.date;
	}
	return [
		"Pstyles booking brief",
		`Name: ${form.name}`,
		`Phone: ${form.phone}`,
		form.email ? `Email: ${form.email}` : "",
		`Event: ${form.event}`,
		`Date: ${when}`,
		`Where: ${form.city}`,
		`Guests: ${form.guests}`,
		`Package: ${pack?.name ?? form.packageId}`,
		form.notes ? `Notes: ${form.notes}` : ""
	].filter(Boolean).join("\n");
}
function validate(form) {
	const errors = {};
	if (form.name.trim().length < 2) errors.name = "Add the name we should ask for.";
	if (form.phone.replace(/\D/g, "").length < 9) errors.phone = "Add a phone number that can take a call or WhatsApp.";
	if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "That email does not look complete.";
	if (!form.date) errors.date = "Add the date, even if it might still move.";
	else if (isBefore(parseISO(form.date), startOfDay(/* @__PURE__ */ new Date()))) errors.date = "That date has already passed.";
	return errors;
}
function BookPage() {
	const search = Route$3.useSearch();
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		event: "Wedding",
		date: "",
		city: "Nairobi",
		guests: "80–150",
		packageId: search.package ?? "house",
		notes: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [brief, setBrief] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	function update(key, value) {
		setForm((current) => ({
			...current,
			[key]: value
		}));
	}
	function onSubmit(event) {
		event.preventDefault();
		const nextErrors = validate(form);
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) return;
		const text = compose(form);
		setBrief(text);
		setCopied(false);
		try {
			const previous = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
			const entry = {
				text,
				at: (/* @__PURE__ */ new Date()).toISOString()
			};
			localStorage.setItem(STORAGE_KEY, JSON.stringify([entry, ...previous].slice(0, 8)));
		} catch {}
	}
	async function copy() {
		if (!brief) return;
		try {
			await navigator.clipboard.writeText(brief);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Book",
		title: "Tell us the date. We’ll price the room.",
		lede: "Build a short brief. Copy it, or open WhatsApp with the text ready. Nothing is sent until you send it — this page does not sit on a hidden inbox."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-5 pb-20 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "space-y-8 lg:col-span-7",
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "font-display text-2xl",
					children: "Package"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: packages.map((item) => {
						const active = form.packageId === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block cursor-pointer border p-4 " + (active ? "border-gold bg-raise" : "border-line"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "package",
									className: "sr-only",
									checked: active,
									onChange: () => update("packageId", item.id)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium text-paper",
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-sand",
									children: item.line
								})
							]
						}, item.id);
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							error: errors.name,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.name,
								onChange: (event) => update("name", event.target.value),
								autoComplete: "name",
								className: inputClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone / WhatsApp",
							error: errors.phone,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.phone,
								onChange: (event) => update("phone", event.target.value),
								autoComplete: "tel",
								inputMode: "tel",
								className: inputClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email, if you use one",
							error: errors.email,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.email,
								onChange: (event) => update("email", event.target.value),
								autoComplete: "email",
								inputMode: "email",
								className: inputClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Event",
							error: errors.event,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.event,
								onChange: (event) => update("event", event.target.value),
								className: inputClass,
								children: events.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Date",
							error: errors.date,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								value: form.date,
								onChange: (event) => update("date", event.target.value),
								className: inputClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Where",
							error: errors.city,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.city,
								onChange: (event) => update("city", event.target.value),
								className: inputClass,
								children: cities.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Guests",
							error: errors.guests,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.guests,
								onChange: (event) => update("guests", event.target.value),
								className: inputClass,
								children: guests.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Anything the desk should know",
					error: errors.notes,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: form.notes,
						onChange: (event) => update("notes", event.target.value),
						rows: 4,
						className: inputClass + " h-auto py-3",
						placeholder: "Venue, family MC, songs that matter, songs that must not play."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "inline-flex min-h-11 items-center bg-gold px-5 text-sm font-medium text-ink transition-transform duration-150 ease-out active:scale-[0.96]",
					children: "Build the brief"
				}),
				brief ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-gold bg-raise p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: "Brief ready."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-sand",
							children: "Saved on this device. Send it yourself — WhatsApp opens with the text filled in. Pick the Pstyles chat."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "mt-4 overflow-x-auto font-sans text-sm leading-relaxed whitespace-pre-wrap text-paper",
							children: brief
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: copy,
								className: "inline-flex min-h-11 items-center gap-2 border border-line px-4 text-sm",
								children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-gold" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), copied ? "Copied" : "Copy brief"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappHref(brief),
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex min-h-11 items-center bg-gold px-4 text-sm font-medium text-ink",
								children: "Open WhatsApp"
							})]
						})
					]
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:col-span-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-line bg-raise p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-brand text-gold uppercase",
					children: "After you send it"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-4",
					children: [
						["01", "The desk reads the date, the ground, and the guest count."],
						["02", "You get a quote for that room, not a number borrowed from another wedding."],
						["03", "If it fits, the date is held and the producer starts the order of the day."]
					].map(([code, line]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[auto_1fr] gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-gold",
							children: code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sand",
							children: line
						})]
					}, code))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group border-t border-line py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "flex min-h-11 cursor-pointer items-center justify-between gap-4 text-lg",
						children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold transition-transform duration-150 group-open:rotate-45",
							children: "+"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-2 pb-2 leading-relaxed text-sand",
						children: item.a
					})]
				}, item.q))
			})]
		})]
	})] });
}
var inputClass = "h-12 w-full border border-line bg-ink px-3 text-base text-paper outline-none placeholder:text-sand";
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-2 block text-sm text-sand",
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 block text-sm text-gold",
				children: error
			}) : null
		]
	});
}
//#endregion
export { BookPage as component };
