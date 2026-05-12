import { useMemo, useState } from "react";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { appointmentOptions, clinic } from "../data/clinicData.js";

const initialForm = {
  name: "",
  phone: "",
  service: "",
  message: "",
};

export default function BookingForm({ compact = false }) {
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
    <form className={compact ? "appointment-form appointment-form--compact" : "appointment-form"} onSubmit={submitForm}>
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
          rows={compact ? "4" : "5"}
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
  );
}
