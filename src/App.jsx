import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import DoctorProfile from "./components/DoctorProfile.jsx";
import ServiceExplorer from "./components/ServiceExplorer.jsx";
import TreatmentMethods from "./components/TreatmentMethods.jsx";
import AppointmentForm from "./components/AppointmentForm.jsx";
import RecoveryProcess from "./components/RecoveryProcess.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <DoctorProfile />
        <ServiceExplorer />
        <TreatmentMethods />
        <RecoveryProcess />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  );
}
