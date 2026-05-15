import SectionHeading from "./SectionHeading.jsx";
import { treatmentMethods } from "../data/clinicData.js";

export default function TreatmentMethods() {
  return (
    <section className="section methods-section">
      <div className="container methods-grid">
        <SectionHeading
          kicker="Clinic treatments"
          title="Hands-on therapy, machines and guided rehab."
          body="Treatment is selected after assessment, based on pain, movement limits and recovery goals."
        />
        <div className="method-board">
          {treatmentMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div className="method-chip" key={method.label}>
                <Icon size={18} />
                <span>{method.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
