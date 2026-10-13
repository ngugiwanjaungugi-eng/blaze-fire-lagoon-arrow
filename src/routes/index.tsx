import { createFileRoute, Link } from "@tanstack/react-router";
import { frames, marquee, roles, services } from "@/data/site";
import { FrameButton, useLightbox } from "@/components/gallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pstyles — DJ & entertainment house" },
      {
        name: "description",
        content:
          "DJ Pstyle and the Pstyles house. Weddings, private rooms, coast sets, full sound, hosts, and a social team.",
      },
    ],
  }),
  component: Home,
});

const press = "transition-transform duration-150 ease-out active:scale-[0.96]";

function Home() {
  const selected = ["beach", "lawn", "drapes", "decks", "hoodie"].flatMap((id) => {
    const frame = frames.find((item) => item.id === id);
    return frame ? [frame] : [];
  });
  const { open, lightbox } = useLightbox(selected);

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 pt-10 pb-14 lg:grid-cols-12 lg:pt-14 lg:pb-20">
        <div className="lg:col-span-6 lg:pb-8">
          <p className="enter text-xs font-medium tracking-brand text-gold uppercase">
            Entertainment house · To the world
          </p>
          <h1 className="enter enter-2 mt-5 font-display text-5xl leading-display sm:text-6xl lg:text-7xl">
            DJ Pstyle takes the decks.
            <span className="mt-2 block text-gold italic">The house takes the night.</span>
          </h1>
          <p className="enter enter-3 mt-6 max-w-md text-lg leading-relaxed text-sand">
            Weddings, private rooms, and coast sets from a Nairobi desk. Music, ceremony sound, a
            host, and social managers who film the room while it is still happening.
          </p>
          <div className="enter enter-4 mt-8 flex flex-wrap gap-3">
            <Link
              to="/book"
              className={
                "inline-flex min-h-11 items-center bg-gold px-5 text-sm font-medium text-ink " + press
              }
            >
              Book a date
            </Link>
            <Link
              to="/work"
              className={
                "inline-flex min-h-11 items-center border border-line px-5 text-sm text-paper " +
                press
              }
            >
              See the nights
            </Link>
          </div>
        </div>
        <figure className="lg:col-span-6">
          <div className="overflow-hidden bg-raise">
            <img
              src="/media/portrait-sweater.jpg"
              alt="DJ Pstyle in headphones and a black sweater against an orange studio backdrop"
              width={934}
              height={1400}
              className="aspect-portrait w-full object-cover object-top"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between text-xs tracking-brand text-sand uppercase">
            <span>DJ Pstyle · Founder</span>
            <span>Nairobi</span>
          </figcaption>
        </figure>
      </section>

      <div className="overflow-hidden border-y border-line py-4" aria-hidden="true">
        <div className="marquee-track flex w-max gap-8 pr-8">
          {[...marquee, ...marquee].map((item, index) => (
            <span key={item + index} className="flex items-center gap-8 text-sm tracking-brand text-sand uppercase">
              {item}
              <span className="text-gold">·</span>
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="text-xs tracking-brand text-gold uppercase">The job</p>
          <h2 className="mt-4 font-display text-4xl leading-display sm:text-5xl">
            Not a laptop in the corner.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-paper">
            A wedding fails in small ways: a vow no one heard, a speech that feeds back, a dance
            floor that waits too long, photos that miss the only good hour. Pstyles treats those as
            the job.
          </p>
          <p className="mt-4 leading-relaxed text-sand">
            DJ Pstyle on the music. An engineer on the rack. A producer on the order of the day. A
            host on the microphone. Social managers on the floor with a shot list — not a hopeful
            cousin and a dying battery.
          </p>
          <figure className="mt-8">
            <img
              src="/media/live-booth.jpg"
              alt="DJ Pstyle at a laptop and Pioneer controller inside a draped tent"
              width={1200}
              height={1600}
              className="aspect-portrait w-full max-w-md object-cover object-top"
            />
            <figcaption className="mt-3 text-sm text-sand">Load-in, before the room arrives.</figcaption>
          </figure>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-4xl">The tracklist</h2>
            <Link to="/services" className="text-sm text-gold">
              All services
            </Link>
          </div>
          <ol className="mt-8">
            {services.map((service) => (
              <li key={service.id} className="border-t border-line">
                <Link
                  to="/services"
                  hash={service.id}
                  className="grid gap-2 py-5 md:grid-cols-12 md:items-baseline"
                >
                  <span className="text-sm text-gold md:col-span-1">{service.code}</span>
                  <span className="font-display text-2xl md:col-span-4">{service.title}</span>
                  <span className="text-sand md:col-span-7">{service.summary}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-4xl">Selected nights</h2>
            <Link to="/work" className="text-sm text-gold">
              Full record
            </Link>
          </div>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
            {selected.map((frame) => (
              <FrameButton
                key={frame.id}
                frame={frame}
                onOpen={open}
                className="w-64 shrink-0 sm:w-72"
              />
            ))}
          </div>
        </div>
        {lightbox}
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-brand text-gold uppercase">The house</p>
              <h2 className="mt-3 font-display text-4xl">Five desks. One night.</h2>
            </div>
            <Link to="/house" className="text-sm text-gold">
              Meet them
            </Link>
          </div>
          <ol className="mt-10">
            {roles.map((role) => (
              <li
                key={role.code}
                className="grid gap-2 border-t border-line py-5 md:grid-cols-12 md:gap-6"
              >
                <span className="text-sm text-gold md:col-span-1">{role.code}</span>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl">{role.title}</h3>
                  <p className="mt-1 text-sm text-sand">{role.who}</p>
                </div>
                <p className="leading-relaxed text-sand md:col-span-7">{role.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="max-w-xl font-display text-4xl leading-display">
            Pioneer on the booth. The rack when the tent needs it.
          </h2>
          <p className="mt-4 max-w-xl text-sand">
            Serato on the laptop. dbx across the EQ. Peavey and Crest underneath when the ground is
            big enough to ask for them. The gear is part of the promise, not a backdrop.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["/media/rig-decks.jpg", "Pioneer facing the garden"],
              ["/media/rig-rack.jpg", "EQ, crossover, amplifiers"],
              ["/media/rig-booth.jpg", "Mics and playback in one line"],
            ].map(([src, caption]) => (
              <figure key={src}>
                <img src={src} alt={caption} className="aspect-portrait w-full object-cover object-top" />
                <figcaption className="mt-2 text-sm text-sand">{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 lg:grid-cols-2">
          <img
            src="/media/portrait-hoodie.jpg"
            alt="DJ Pstyle in the white Pstyle hoodie against an orange backdrop"
            width={934}
            height={1400}
            className="aspect-portrait w-full object-cover object-top"
          />
          <div>
            <p className="text-xs tracking-brand text-gold uppercase">Hold the date</p>
            <h2 className="mt-4 font-display text-5xl leading-display">
              Tell the desk the date. Get a quote for the room.
            </h2>
            <p className="mt-4 text-sand">
              No printed “from” price. The city, the guest count, and the package decide it. Build
              a brief and send it across.
            </p>
            <Link
              to="/book"
              className={
                "mt-8 inline-flex min-h-11 items-center bg-gold px-5 text-sm font-medium text-ink " +
                press
              }
            >
              Start a brief
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
