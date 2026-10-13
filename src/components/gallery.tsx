import { X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Frame } from "@/data/site";

export function FrameButton({
  frame,
  onOpen,
  className = "",
}: {
  frame: Frame;
  onOpen: (frame: Frame) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(frame)}
      className={"group block w-full text-left " + className}
    >
      <span className="block overflow-hidden bg-raise">
        <img
          src={frame.src}
          alt={frame.alt}
          width={frame.width}
          height={frame.height}
          className="aspect-portrait w-full object-cover object-top"
        />
      </span>
      <span className="mt-3 flex items-baseline justify-between gap-3">
        <span className="font-display text-xl text-paper">{frame.title}</span>
        <span className="shrink-0 text-xs tracking-brand text-sand uppercase">{frame.place}</span>
      </span>
      <span className="mt-1 block text-sm leading-relaxed text-sand">{frame.note}</span>
    </button>
  );
}

export function Lightbox({
  frames,
  frame,
  onClose,
  onSelect,
}: {
  frames: Frame[];
  frame: Frame | null;
  onClose: () => void;
  onSelect: (frame: Frame) => void;
}) {
  useEffect(() => {
    if (!frame) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      const index = frames.findIndex((item) => item.id === frame.id);
      if (index < 0) return;
      if (event.key === "ArrowRight") {
        const next = frames[(index + 1) % frames.length];
        if (next) onSelect(next);
      }
      if (event.key === "ArrowLeft") {
        const next = frames[(index - 1 + frames.length) % frames.length];
        if (next) onSelect(next);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [frame, frames, onClose, onSelect]);

  if (!frame) return null;
  const index = frames.findIndex((item) => item.id === frame.id);

  return (
    <div className="fixed inset-0 z-50 bg-ink/95" role="dialog" aria-modal="true" aria-label={frame.title}>
      <button
        type="button"
        className="absolute top-4 right-4 inline-flex size-11 items-center justify-center border border-line text-paper"
        onClick={onClose}
      >
        <span className="sr-only">Close</span>
        <X className="size-5" />
      </button>
      <div className="flex h-full min-h-0 flex-col px-5 pt-16 pb-6">
        <div className="flex min-h-0 flex-1 items-center justify-center">
          <img
            src={frame.src}
            alt={frame.alt}
            width={frame.width}
            height={frame.height}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex w-full max-w-3xl items-end justify-between gap-4">
          <div>
            <p className="font-display text-2xl">{frame.title}</p>
            <p className="text-sm text-sand">{frame.note}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="inline-flex min-h-11 items-center border border-line px-3 text-sm text-paper"
              onClick={() => {
                const next = frames[(index - 1 + frames.length) % frames.length];
                if (next) onSelect(next);
              }}
            >
              Prev
            </button>
            <button
              type="button"
              className="inline-flex min-h-11 items-center border border-line px-3 text-sm text-paper"
              onClick={() => {
                const next = frames[(index + 1) % frames.length];
                if (next) onSelect(next);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function useLightbox(list: Frame[]) {
  const [frame, setFrame] = useState<Frame | null>(null);
  const lightbox = (
    <Lightbox frames={list} frame={frame} onClose={() => setFrame(null)} onSelect={setFrame} />
  );
  return { open: setFrame, lightbox };
}
