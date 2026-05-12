import { ClipboardList, MessageCircle, SearchCheck, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const steps = [
  {
    title: "Intake message",
    icon: MessageCircle,
    text: "Patient submits name, phone, selected service, and the concern through the appointment form.",
  },
  {
    title: "Assessment",
    icon: SearchCheck,
    text: "The clinic reviews symptoms, pain location, movement difficulty, and urgency before guiding the next step.",
  },
  {
    title: "Treatment plan",
    icon: ClipboardList,
    text: "Care may include manual therapy, exercise, dry needling, taping, electrotherapy, Pilates, or lifestyle support.",
  },
  {
    title: "Progression",
    icon: TrendingUp,
    text: "Rehab is progressed toward pain reduction, better movement, strength, confidence, and recurrence prevention.",
  },
];

export default function RecoveryProcess() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <SectionHeading
          kicker="Patient journey"
          title="A polished appointment flow from first message to structured recovery."
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
