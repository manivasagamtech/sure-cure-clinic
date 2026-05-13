import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import DoctorProfile from "./components/DoctorProfile.jsx";
import ServiceExplorer from "./components/ServiceExplorer.jsx";
import TreatmentMethods from "./components/TreatmentMethods.jsx";
import AppointmentForm from "./components/AppointmentForm.jsx";
import RecoveryProcess from "./components/RecoveryProcess.jsx";
import Footer from "./components/Footer.jsx";
import BookingModal from "./components/BookingModal.jsx";
import DetailPage from "./components/DetailPage.jsx";
import { detailPages } from "./data/clinicData.js";

const getCurrentDetailPage = () => {
  const [, type, slug] = window.location.hash.match(/^#\/(condition|service)\/(.+)$/) || [];
  return detailPages.find((page) => page.type === type && page.slug === slug) || null;
};

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [detailPage, setDetailPage] = useState(getCurrentDetailPage);
  const openBooking = (service = "") => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };
  const closeBooking = () => setIsBookingOpen(false);

  useEffect(() => {
    const syncRoute = () => {
      const nextDetailPage = getCurrentDetailPage();
      setDetailPage(nextDetailPage);

      if (nextDetailPage) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      window.setTimeout(() => {
        document.querySelector(window.location.hash)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    };

    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  return (
    <div className="app-shell">
      <Header onBook={openBooking} />
      {detailPage ? (
        <DetailPage page={detailPage} />
      ) : (
        <main>
          <Hero onBook={openBooking} />
          <DoctorProfile />
          <ServiceExplorer />
          <TreatmentMethods />
          <RecoveryProcess />
          <AppointmentForm onBook={openBooking} />
        </main>
      )}
      <Footer onBook={openBooking} />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} selectedService={selectedService} />
    </div>
  );
}
