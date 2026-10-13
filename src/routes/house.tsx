import { createFileRoute, Link } from "@tanstack/react-router";
import { roles } from "@/data/site";
import { PageIntro } from "@/components/shell";

export const Route = createFileRoute("/house")({
  head: () => ({
    meta: [
      { title: "The house — Pstyles" },
      {
        name: "description",
        content:
          "DJ Pstyle is founder and CEO. Around him: a social desk, a technical director, an event producer, and a resident MC.",
      },
    ],
  }),
  component: HousePage,
});

const portraits = [
  {
    src: "/media/portrait-call.jpg",
    alt: "DJ Pstyle in a black shirt and headphones making a call-me gesture",
    caption: "Olive room",
  },
  {
    src: "/media/portrait-gaze.jpg",
    alt: "DJ Pstyle looking off-camera in a black shirt, hands crossed",
    caption: "Between sets",
  },
  {
    src: "/media/portrait-hoodie.jpg",
    alt: "DJ Pstyle in the white hoodie that reads Pstyle, To The World",
    caption: "To the world",
  },
];

function HousePage() {
  const [founder, ...desks] = roles;

  return (
    <>
      <PageIntro
        kicker="The house"
        title="A founder on the decks. Four desks around him."
        lede="Pstyles is DJ Pstyle’s company. He is CEO and lead DJ. The night is shared with a social team, a technical director, an event producer, and a resident MC."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 lg:grid-cols-12">
        <figure className="lg:col-span-5">
          <img
            src="/media/portrait-sweater.jpg"
            alt="Portrait of DJ Pstyle, founder of Pstyles, in headphones against orange"
            width={934}
            height={1400}
            className="aspect-portrait w-full object-cover object-top"
          />
          <figcaption className="mt-3 text-sm text-sand">DJ Pstyle · Founder & CEO</figcaption>
        </figure>
        <div className="lg:col-span-7 lg:pt-6">
          <p className="text-sm text-gold">{founder?.code}</p>
          <h2 className="mt-2 font-display text-4xl">{founder?.title}</h2>
          <p className="mt-1 text-sand">{founder?.who}</p>
          <p className="mt-6 text-lg leading-relaxed">{founder?.body}</p>
          <ul className="mt-6 space-y-2">
            {founder?.duties.map((duty) => (
              <li key={duty} className="flex gap-3 text-sand">
                <span className="text-gold" aria-hidden="true">
                  —
                </span>
                {duty}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-12 sm:grid-cols-3">
          {portraits.map((shot) => (
            <figure key={shot.src}>
              <img src={shot.src} alt={shot.alt} className="aspect-portrait w-full object-cover object-top" />
              <figcaption className="mt-2 text-sm text-sand">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-4xl">The other four</h2>
          <p className="mt-3 max-w-xl text-sand">
            Social, sound, the running order, and the microphone. Book the full house, or ask for
            the desks the date actually needs.
          </p>
          <div className="mt-10 space-y-12">
            {desks.map((role) => (
              <article key={role.code} className="grid gap-6 border-t border-line pt-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="text-sm text-gold">{role.code}</p>
                  <h3 className="mt-2 font-display text-3xl">{role.title}</h3>
                  <p className="mt-1 text-sand">{role.who}</p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg leading-relaxed">{role.body}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {role.duties.map((duty) => (
                      <li key={duty} className="border border-line bg-raise px-4 py-3 text-sm text-sand">
                        {duty}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <Link
            to="/book"
            search={{ package: "house" }}
            className="mt-12 inline-flex min-h-11 items-center bg-gold px-5 text-sm font-medium text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            Book the full house
          </Link>
        </div>
      </section>
    </>
  );
}
