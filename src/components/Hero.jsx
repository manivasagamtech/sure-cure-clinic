import { ArrowRight, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { clinic } from "../data/clinicData.js";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background" aria-hidden="true">
        <img src={clinic.heroImage} alt="" />
      </div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="section-kicker">Pune physiotherapy and rehab clinic</span>
          <h1>{clinic.name}</h1>
          <p>
            A warm, premium physiotherapy experience for pain relief, movement recovery, sports
            rehabilitation, and guided long-term wellness.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#appointment">
              Book appointment
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#services">
              View services
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Clinic highlights">
          <div className="metric-card">
            <HeartPulse size={22} />
            <strong>15+ Years</strong>
            <span>Clinical practice</span>
          </div>
          <div className="metric-card">
            <ShieldCheck size={22} />
            <strong>Masters</strong>
            <span>Musculoskeletal sciences and sports medicine</span>
          </div>
          <div className="metric-card">
            <Sparkles size={22} />
            <strong>Advanced</strong>
            <span>Dry needling, PRP, manual therapy and taping</span>
          </div>
        </div>
      </div>
    </section>
  );
}
