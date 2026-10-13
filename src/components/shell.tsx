import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { WHATSAPP } from "@/data/site";

const nav = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/house", label: "The house" },
] as const;

const press = "transition-transform duration-150 ease-out active:scale-[0.96]";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="13.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="3.25" fill="currentColor" />
    </svg>
  );
}

function deskHref() {
  if (!WHATSAPP) return "/book";
  return `https://wa.me/${WHATSAPP}`;
}

export function Header() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex items-center gap-2 text-paper">
          <Mark className="size-7 text-gold" />
          <span className="font-display text-xl leading-none">Pstyles</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={
                  "text-sm tracking-wide " + (active ? "text-gold" : "text-sand hover:text-paper")
                }
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/book"
            className={
              "inline-flex min-h-11 items-center bg-gold px-4 text-sm font-medium text-ink " + press
            }
          >
            Book a date
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-line text-paper md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-ink px-5 py-6 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.to} className="border-b border-line">
                <Link
                  to={item.to}
                  className="flex min-h-12 items-center font-display text-3xl text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-5">
              {WHATSAPP ? (
                <a
                  href={deskHref()}
                  className="text-sm tracking-brand text-gold uppercase"
                >
                  WhatsApp the desk
                </a>
              ) : (
                <p className="text-sm text-sand">Nairobi · Limuru · the Coast</p>
              )}
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <Mark className="size-8 text-gold" />
            <p className="font-display text-3xl">Pstyles</p>
          </div>
          <p className="mt-4 max-w-xs text-sand">
            DJ Pstyle’s entertainment house. Music, sound, hosts, and a social team. To the world.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs tracking-brand text-gold uppercase">Visit</p>
          <ul className="mt-4 space-y-2 text-paper">
            <li>
              <Link to="/work" className="hover:text-gold">
                Work
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/house" className="hover:text-gold">
                The house
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:text-gold">
                Book a date
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs tracking-brand text-gold uppercase">Ground</p>
          <p className="mt-4 text-paper">Nairobi · Limuru & Kiambu · the Coast</p>
          <p className="mt-2 text-sand">Weddings, private rooms, brands, and outdoor nights.</p>
          {WHATSAPP ? (
            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="mt-4 inline-flex min-h-11 items-center text-gold"
            >
              WhatsApp the desk
            </a>
          ) : (
            <Link to="/book" className="mt-4 inline-flex min-h-11 items-center text-gold">
              Send a booking brief
            </Link>
          )}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-sm text-sand sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Pstyles. DJ Pstyle, founder.</p>
          <p>To the world.</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-clip bg-ink text-paper">
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </div>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="mx-auto max-w-6xl px-5 pb-8 pt-12 lg:pt-16">
      <p className="text-xs font-medium tracking-brand text-gold uppercase">{kicker}</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl leading-display sm:text-6xl">{title}</h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand">{lede}</p>
    </header>
  );
}

export function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24">
      <p className="text-xs tracking-brand text-gold uppercase">Missing</p>
      <h1 className="mt-4 font-display text-5xl leading-display">That page is not on the record.</h1>
      <Link
        to="/"
        className={
          "mt-8 inline-flex min-h-11 items-center bg-gold px-4 text-sm font-medium text-ink " + press
        }
      >
        Back to the house
      </Link>
    </div>
  );
}
