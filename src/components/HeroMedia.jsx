import { heroMediaSlides } from "../data/clinicData.js";

export default function HeroMedia() {
  return (
    <div
      className="hero-background hero-background--video"
      style={{ "--slide-count": heroMediaSlides.length }}
      aria-hidden="true"
    >
      {heroMediaSlides.map((slide, index) => (
        <video
          className="hero-video-slide"
          style={{ "--slide-index": index }}
          key={slide.label}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={slide.poster}
        >
          <source media="(max-width: 720px)" src={slide.mobileVideo} type="video/mp4" />
          <source src={slide.desktopVideo} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}
