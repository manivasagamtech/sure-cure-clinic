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
            title="Request an appointment at Sure Cure."
            body="Share your name and phone number. The clinic will connect with you for timing and treatment guidance."
          />
          <div className="appointment-highlight">
            <MessageCircle size={24} />
            <div>
              <strong>Quick enquiry</strong>
              <p>Name and phone number are required. Service and message are optional.</p>
            </div>
          </div>
        </div>

        <BookingForm />
      </div>
    </section>
  );
}
