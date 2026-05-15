import { ClipboardList, MessageCircle, SearchCheck, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const steps = [
  {
    title: "Send enquiry",
    icon: MessageCircle,
    text: "Share your name, phone number and concern through the appointment form.",
  },
  {
    title: "Clinic review",
    icon: SearchCheck,
    text: "The clinic checks the concern, pain area and urgency before suggesting the next step.",
  },
  {
    title: "Treatment",
    icon: ClipboardList,
    text: "Care may include manual therapy, exercise, dry needling, taping, electrotherapy or Pilates.",
  },
  {
    title: "Follow-up",
    icon: TrendingUp,
    text: "Rehab is progressed with home advice, strength work and review when needed.",
  },
];

export default function RecoveryProcess() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <SectionHeading
          kicker="Patient journey"
          title="From appointment enquiry to recovery plan."
          align="center"
        />
        <div className="process-track">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article className="process-card" key={step.title}>
                <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                <Icon size={24} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
