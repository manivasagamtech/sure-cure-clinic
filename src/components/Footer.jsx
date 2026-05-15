import { clinic } from "../data/clinicData.js";

export default function Footer({ onBook }) {
  const handleBook = () => {
    if (typeof onBook === "function") {
      onBook();
      return;
    }

    window.location.hash = "appointment-modal";
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{clinic.name}</strong>
          <p>{clinic.addressLines.join(", ")}</p>
          <a href={clinic.phoneHref}>Call {clinic.phoneDisplay}</a>
        </div>
        <button className="footer-appointment-button" type="button" onClick={handleBook}>
          Book appointment
        </button>
      </div>
    </footer>
  );
}
