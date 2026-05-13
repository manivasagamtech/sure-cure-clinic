import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import DoctorProfile from "./components/DoctorProfile.jsx";
import ServiceExplorer from "./components/ServiceExplorer.jsx";
import TreatmentMethods from "./components/TreatmentMethods.jsx";
import AppointmentForm from "./components/AppointmentForm.jsx";
import RecoveryProcess from "./components/RecoveryProcess.jsx";
import Footer from "./components/Footer.jsx";
import BookingModal from "./components/BookingModal.jsx";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const openBooking = (service = "") => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="app-shell">
      <Header onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <DoctorProfile />
        <ServiceExplorer onBook={openBooking} />
        <TreatmentMethods />
        <RecoveryProcess />
        <AppointmentForm onBook={openBooking} />
      </main>
      <Footer onBook={openBooking} />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} selectedService={selectedService} />
    </div>
  );
}
