import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { frames, type FrameKind } from "@/data/site";
import { FrameButton, useLightbox } from "@/components/gallery";
import { PageIntro } from "@/components/shell";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Pstyles" },
      {
        name: "description",
        content:
          "Nights, rigs, and portraits from DJ Pstyle and Pstyles — coast sets, garden weddings, Anza Tigoni, and the booth.",
      },
    ],
  }),
  component: WorkPage,
});

const filters: { id: "all" | FrameKind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "night", label: "Nights" },
  { id: "rig", label: "The rig" },
  { id: "portrait", label: "Portraits" },
];

function WorkPage() {
  const [kind, setKind] = useState<(typeof filters)[number]["id"]>("all");
  const visible = kind === "all" ? frames : frames.filter((frame) => frame.kind === kind);
  const { open, lightbox } = useLightbox(visible);

  return (
    <>
      <PageIntro
        kicker="Work"
        title="Rooms the house has already stood in."
        lede="Coast nights, garden receptions, a Limuru anniversary, and the rack that keeps speeches intelligible. Open any frame."
      />
      <div className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter work">
          {filters.map((filter) => {
            const active = kind === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={active}
                onClick={() => setKind(filter.id)}
                className={
                  "inline-flex min-h-11 items-center px-4 text-sm transition-transform duration-150 ease-out active:scale-[0.96] " +
                  (active ? "bg-gold text-ink" : "border border-line text-paper")
                }
              >
                {filter.label}
              </button>
            );
          })}
        </div>
        {visible.length === 0 ? (
          <p className="mt-10 text-sand">Nothing in that drawer.</p>
        ) : (
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((frame) => (
              <FrameButton key={frame.id} frame={frame} onOpen={open} />
            ))}
          </div>
        )}
      </div>
      {lightbox}
    </>
  );
}
