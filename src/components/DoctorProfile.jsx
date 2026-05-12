import { Award, GraduationCap } from "lucide-react";
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
            title="Led by Dr. Sujata with a strong musculoskeletal and sports medicine background."
            body="The clinic works with patients who need pain relief, movement restoration, posture correction, activity recovery, and practical guidance for daily life."
          />

          <div className="doctor-card">
            <Award size={22} />
            <div>
              <h3>{clinic.doctor}</h3>
              <p>
                Completed Master's in Physiotherapy from Maharashtra University of Health Sciences,
                Nashik, through M.A.R. College of Physiotherapy and Research, Pune, and has been
                practicing for 15 years.
              </p>
            </div>
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
