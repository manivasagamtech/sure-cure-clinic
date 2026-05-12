import { useMemo, useState } from "react";
import { CalendarCheck, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { appointmentOptions, clinic } from "../data/clinicData.js";

const initialForm = {
  name: "",
  phone: "",
  service: "",
  message: "",
};

export default function AppointmentForm() {
  const [form, setForm] = useState(initialForm);
  const [feedback, setFeedback] = useState("");

  const whatsappUrl = useMemo(() => {
    const text = [
      "Hello Sure Cure Clinic,",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Message: ${form.message}`,
    ].join("\n");

    const phone = clinic.whatsappNumber.replace(/\D/g, "");
    return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(text)}` : `https://wa.me/?text=${encodeURIComponent(text)}`;
  }, [form]);

  const updateField = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    const hasMissingField = Object.values(form).some((value) => !value.trim());

    if (hasMissingField) {
      setFeedback("Please fill every field before continuing to WhatsApp.");
      return;
    }

    setFeedback("Opening WhatsApp with the appointment message prepared.");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

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

        <form className="appointment-form" onSubmit={submitForm}>
          <div className="form-title">
            <CalendarCheck size={22} />
            <h3>Request appointment</h3>
          </div>

          <label>
            <span>Name</span>
            <input name="name" value={form.name} onChange={updateField} placeholder="Patient name" autoComplete="name" />
          </label>

          <label>
            <span>Phone number</span>
            <input name="phone" value={form.phone} onChange={updateField} placeholder="+91" autoComplete="tel" />
          </label>

          <label>
            <span>Service required</span>
            <select name="service" value={form.service} onChange={updateField}>
              <option value="">Choose a service</option>
              {appointmentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              rows="5"
              placeholder="Tell us about the pain area, duration, symptoms, or treatment you want."
            />
          </label>

          <button className="primary-button primary-button--full" type="submit">
            Continue to WhatsApp
            <MessageCircle size={18} />
          </button>
          <p className="form-feedback" role="status" aria-live="polite">
            {feedback}
          </p>
        </form>
      </div>
    </section>
  );
}
