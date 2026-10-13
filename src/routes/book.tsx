import { createFileRoute } from "@tanstack/react-router";
import { format, isBefore, parseISO, startOfDay } from "date-fns";
import { Check, Copy } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { faqs, packages, whatsappHref, type PackageId } from "@/data/site";
import { PageIntro } from "@/components/shell";

const PACKAGE_IDS = new Set<string>(packages.map((item) => item.id));

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): { package?: PackageId } => {
    const value = search.package;
    if (typeof value === "string" && PACKAGE_IDS.has(value)) {
      return { package: value as PackageId };
    }
    return {};
  },
  head: () => ({
    meta: [
      { title: "Book a date — Pstyles" },
      {
        name: "description",
        content:
          "Send Pstyles a booking brief for a wedding, private room, corporate date, or coast set.",
      },
    ],
  }),
  component: BookPage,
});

const events = ["Wedding", "Private celebration", "Corporate", "Coast or outdoor", "Other"] as const;
const cities = ["Nairobi", "Limuru & Kiambu", "The Coast", "Somewhere further"] as const;
const guests = ["Under 80", "80–150", "150–300", "300+"] as const;

type FormState = {
  name: string;
  phone: string;
  email: string;
  event: (typeof events)[number];
  date: string;
  city: (typeof cities)[number];
  guests: (typeof guests)[number];
  packageId: PackageId;
  notes: string;
};

const STORAGE_KEY = "pstyles-briefs";

function compose(form: FormState) {
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
    form.notes ? `Notes: ${form.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function validate(form: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (form.name.trim().length < 2) errors.name = "Add the name we should ask for.";
  const digits = form.phone.replace(/\D/g, "");
  if (digits.length < 9) errors.phone = "Add a phone number that can take a call or WhatsApp.";
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "That email does not look complete.";
  }
  if (!form.date) errors.date = "Add the date, even if it might still move.";
  else if (isBefore(parseISO(form.date), startOfDay(new Date()))) {
    errors.date = "That date has already passed.";
  }
  return errors;
}

function BookPage() {
  const search = Route.useSearch();
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    event: "Wedding",
    date: "",
    city: "Nairobi",
    guests: "80–150",
    packageId: search.package ?? "house",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [brief, setBrief] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    const text = compose(form);
    setBrief(text);
    setCopied(false);
    try {
      const previous = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
      const entry = { text, at: new Date().toISOString() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify([entry, ...previous].slice(0, 8)));
    } catch {
      /* private mode can block storage; the brief is still on screen */
    }
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

  return (
    <>
      <PageIntro
        kicker="Book"
        title="Tell us the date. We’ll price the room."
        lede="Build a short brief. Copy it, or open WhatsApp with the text ready. Nothing is sent until you send it — this page does not sit on a hidden inbox."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 lg:grid-cols-12">
        <form onSubmit={onSubmit} className="space-y-8 lg:col-span-7" noValidate>
          <fieldset>
            <legend className="font-display text-2xl">Package</legend>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {packages.map((item) => {
                const active = form.packageId === item.id;
                return (
                  <label
                    key={item.id}
                    className={
                      "block cursor-pointer border p-4 " +
                      (active ? "border-gold bg-raise" : "border-line")
                    }
                  >
                    <input
                      type="radio"
                      name="package"
                      className="sr-only"
                      checked={active}
                      onChange={() => update("packageId", item.id)}
                    />
                    <span className="block font-medium text-paper">{item.name}</span>
                    <span className="mt-1 block text-sm text-sand">{item.line}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" error={errors.name}>
              <input
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                autoComplete="name"
                className={inputClass}
              />
            </Field>
            <Field label="Phone / WhatsApp" error={errors.phone}>
              <input
                value={form.phone}
                onChange={(event) => update("phone", event.target.value)}
                autoComplete="tel"
                inputMode="tel"
                className={inputClass}
              />
            </Field>
            <Field label="Email, if you use one" error={errors.email}>
              <input
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                autoComplete="email"
                inputMode="email"
                className={inputClass}
              />
            </Field>
            <Field label="Event" error={errors.event}>
              <select
                value={form.event}
                onChange={(event) => update("event", event.target.value as FormState["event"])}
                className={inputClass}
              >
                {events.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
            <Field label="Date" error={errors.date}>
              <input
                type="date"
                value={form.date}
                onChange={(event) => update("date", event.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Where" error={errors.city}>
              <select
                value={form.city}
                onChange={(event) => update("city", event.target.value as FormState["city"])}
                className={inputClass}
              >
                {cities.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
            <Field label="Guests" error={errors.guests}>
              <select
                value={form.guests}
                onChange={(event) => update("guests", event.target.value as FormState["guests"])}
                className={inputClass}
              >
                {guests.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Anything the desk should know" error={errors.notes}>
            <textarea
              value={form.notes}
              onChange={(event) => update("notes", event.target.value)}
              rows={4}
              className={inputClass + " h-auto py-3"}
              placeholder="Venue, family MC, songs that matter, songs that must not play."
            />
          </Field>

          <button
            type="submit"
            className="inline-flex min-h-11 items-center bg-gold px-5 text-sm font-medium text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            Build the brief
          </button>

          {brief ? (
            <div className="border border-gold bg-raise p-5">
              <p className="font-display text-2xl">Brief ready.</p>
              <p className="mt-2 text-sm text-sand">
                Saved on this device. Send it yourself — WhatsApp opens with the text filled in.
                Pick the Pstyles chat.
              </p>
              <pre className="mt-4 overflow-x-auto font-sans text-sm leading-relaxed whitespace-pre-wrap text-paper">
                {brief}
              </pre>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={copy}
                  className="inline-flex min-h-11 items-center gap-2 border border-line px-4 text-sm"
                >
                  {copied ? <Check className="size-4 text-gold" /> : <Copy className="size-4" />}
                  {copied ? "Copied" : "Copy brief"}
                </button>
                <a
                  href={whatsappHref(brief)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center bg-gold px-4 text-sm font-medium text-ink"
                >
                  Open WhatsApp
                </a>
              </div>
            </div>
          ) : null}
        </form>

        <aside className="lg:col-span-5">
          <div className="border border-line bg-raise p-6">
            <p className="text-xs tracking-brand text-gold uppercase">After you send it</p>
            <ol className="mt-4 space-y-4">
              {[
                ["01", "The desk reads the date, the ground, and the guest count."],
                ["02", "You get a quote for that room, not a number borrowed from another wedding."],
                ["03", "If it fits, the date is held and the producer starts the order of the day."],
              ].map(([code, line]) => (
                <li key={code} className="grid grid-cols-[auto_1fr] gap-3">
                  <span className="text-sm text-gold">{code}</span>
                  <span className="text-sand">{line}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8">
            {faqs.map((item) => (
              <details key={item.q} className="group border-t border-line py-4">
                <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 text-lg">
                  {item.q}
                  <span className="text-gold transition-transform duration-150 group-open:rotate-45">+</span>
                </summary>
                <p className="pt-2 pb-2 leading-relaxed text-sand">{item.a}</p>
              </details>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}

const inputClass =
  "h-12 w-full border border-line bg-ink px-3 text-base text-paper outline-none placeholder:text-sand";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-sand">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm text-gold">{error}</span> : null}
    </label>
  );
}
