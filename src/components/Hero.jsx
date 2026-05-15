import { ArrowRight, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { clinic } from "../data/clinicData.js";
import HeroMedia from "./HeroMedia.jsx";

export default function Hero({ onBook }) {
  return (
    <section className="hero-section" id="home">
      <HeroMedia />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="section-kicker">Pune physiotherapy and rehab clinic</span>
          <h1>{clinic.name}</h1>
          <p>
            Physiotherapy care for pain relief, sports rehab, posture problems, joint stiffness and
            movement recovery in Pune.
          </p>
          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={onBook}>
              Book appointment
              <ArrowRight size={18} />
            </button>
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
