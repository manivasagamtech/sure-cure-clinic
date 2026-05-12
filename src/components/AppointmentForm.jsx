import { MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import BookingForm from "./BookingForm.jsx";

export default function AppointmentForm() {
  return (
    <section className="section appointment-section" id="appointment">
      <div className="container appointment-grid">
        <div className="appointment-copy">
          <SectionHeading
            kicker="Book appointment"
            title="Patients fill the form once. WhatsApp opens with the full message ready."
            body="The clinic number is kept as a single configuration value. Once you provide it, the form will send users directly to the clinic chat."
          />
          <div className="appointment-highlight">
            <MessageCircle size={24} />
            <div>
              <strong>WhatsApp-first booking</strong>
              <p>Name, phone, selected service, and the patient message are all included automatically.</p>
            </div>
          </div>
        </div>

        <BookingForm />
      </div>
    </section>
  );
}
