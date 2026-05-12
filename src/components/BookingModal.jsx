import { useEffect } from "react";
import { X } from "lucide-react";
import BookingForm from "./BookingForm.jsx";

export default function BookingModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
      <button className="booking-modal__backdrop" type="button" aria-label="Close appointment popup" onClick={onClose} />
      <div className="booking-modal__panel">
        <button className="booking-modal__close" type="button" aria-label="Close appointment popup" onClick={onClose}>
          <X size={22} />
        </button>
        <div className="booking-modal__intro">
          <span className="section-kicker">Book appointment</span>
          <h2 id="booking-modal-title">Send your appointment request through WhatsApp.</h2>
          <p>Fill the details and the next step opens WhatsApp with your message already prepared.</p>
        </div>
        <BookingForm compact />
      </div>
    </div>
  );
}
