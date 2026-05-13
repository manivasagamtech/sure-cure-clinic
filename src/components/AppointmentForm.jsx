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
            title="Share your details and the clinic can guide the next step."
            body="Use the form for appointment enquiries, pain concerns, treatment questions, or follow-up planning."
          />
          <div className="appointment-highlight">
            <MessageCircle size={24} />
            <div>
              <strong>Simple appointment enquiry</strong>
              <p>Name and phone are required. Service and message can be added when relevant.</p>
            </div>
          </div>
        </div>

        <BookingForm />
      </div>
    </section>
  );
}
