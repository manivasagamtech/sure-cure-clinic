import { Award, GraduationCap, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { certifications, clinic } from "../data/clinicData.js";

export default function DoctorProfile() {
  return (
    <section className="section profile-section" id="profile">
      <div className="container profile-grid">
        <div className="profile-media">
          <img src={clinic.studioImage} alt="Physiotherapy clinic treatment room" />
          <div className="floating-note">
            <GraduationCap size={20} />
            <span>Master's in Physiotherapy, MUHS Nashik</span>
          </div>
        </div>

        <div className="profile-copy">
          <SectionHeading
            kicker="Doctor profile"
            title="Meet Dr. Sujata Pardeshi Sure."
            body="Consultant physiotherapist with 15 years of clinical experience in orthopaedic physiotherapy, sports rehab and pain management."
          />

          <div className="doctor-card">
            <Award size={22} />
            <div>
              <h3>{clinic.doctor}</h3>
              <strong>{clinic.doctorCredentials}</strong>
              <p>
                Completed Master's in Physiotherapy from Maharashtra University of Health Sciences,
                Nashik, through M.A.R. College of Physiotherapy and Research, Pune. She treats
                patients for pain relief, mobility, posture correction and rehabilitation.
              </p>
            </div>
          </div>

          <div className="contact-card">
            <div>
              <MapPin size={22} />
              <div>
                <h3>Clinic address</h3>
                <address>
                  {clinic.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </div>
            </div>
            <a href={clinic.phoneHref}>
              <Phone size={18} />
              Call {clinic.phoneDisplay}
            </a>
          </div>

          <div className="certification-grid" id="certifications">
            {certifications.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
