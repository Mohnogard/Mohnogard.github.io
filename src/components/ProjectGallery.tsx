import { useState } from "react";

const isVideo = (src: string) => src.endsWith(".mp4");
// Convention: a video "x.mp4" ships with a still frame "x-poster.jpg" beside it.
const posterOf = (src: string) => src.replace(/\.mp4$/, "-poster.jpg");

function Media({ src, alt, className }: { src: string; alt: string; className: string }) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        poster={posterOf(src)}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt}
      />
    );
  }
  return <img src={src} alt={alt} className={className} loading="lazy" />;
}

export default function ProjectGallery({
  images,
  name,
  position = "top",
}: {
  images: string[];
  name: string;
  position?: "top" | "center";
}) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const objectPos = position === "top" ? "object-top" : "object-center";

  return (
    <>
      <div className="mt-5">
        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="block w-full rounded-lg overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-soft)]"
        >
          <Media
            src={images[active]}
            alt={`${name} — image ${active + 1}`}
            className={`w-full h-48 sm:h-56 object-cover ${objectPos}`}
          />
        </button>

        {images.length > 1 && (
          <div className="mt-2 flex gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                className={`flex-1 h-12 rounded-md overflow-hidden border transition-colors ${
                  i === active ? "border-[var(--color-accent)]" : "border-[var(--color-border)] opacity-70 hover:opacity-100"
                }`}
                aria-label={`Show image ${i + 1}`}
              >
                <img src={isVideo(src) ? posterOf(src) : src} alt="" className={`w-full h-full object-cover ${objectPos}`} loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightbox(false)}
        >
          <Media
            src={images[active]}
            alt={`${name} — image ${active + 1}`}
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          />
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute top-5 right-5 text-white/80 hover:text-white text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
