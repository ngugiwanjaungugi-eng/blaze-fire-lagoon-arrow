import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/site";
import { PageIntro } from "@/components/shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pstyles" },
      {
        name: "description",
        content:
          "Weddings, private rooms, corporate, coast sets, the full Pstyles house, and social coverage.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageIntro
        kicker="Services"
        title="What the house actually does."
        lede="Six ways to book Pstyles. Most weddings want the full house. Some nights only need the decks, or only the social desk."
      />
      <div className="mx-auto max-w-6xl px-5 pb-20">
        {services.map((service) => (
          <article id={service.id} key={service.id} className="scroll-mt-24 border-t border-line py-12">
            <p className="text-sm text-gold">{service.code}</p>
            <div className="mt-3 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 className="font-display text-4xl">{service.title}</h2>
                <p className="mt-3 text-lg text-sand">{service.summary}</p>
              </div>
              <div className="lg:col-span-7">
                <p className="leading-relaxed">{service.body}</p>
                <ul className="mt-6 space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sand">
                      <span className="text-gold" aria-hidden="true">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  search={{ package: service.packageId }}
                  className="mt-8 inline-flex min-h-11 items-center border border-line px-4 text-sm text-paper transition-transform duration-150 ease-out active:scale-[0.96]"
                >
                  Request this
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
