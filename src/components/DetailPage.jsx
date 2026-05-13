import { ArrowLeft, CalendarCheck } from "lucide-react";
import BookingForm from "./BookingForm.jsx";

export default function DetailPage({ page }) {
  const Icon = page.icon;

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <div className="container detail-hero__grid">
          <div className="detail-hero__copy">
            <a className="back-link" href="#services">
              <ArrowLeft size={18} />
              Back to services
            </a>
            <span className="section-kicker">{page.category}</span>
            <h1>{page.title}</h1>
            <p>{page.summary || page.description}</p>
          </div>
          <div className="detail-hero__card">
            <Icon size={34} />
            <strong>Personalized assessment first</strong>
            <span>
              The care plan is chosen after understanding symptoms, daily routine, movement limits,
              and recovery goals.
            </span>
          </div>
        </div>
      </section>

      <section className="section detail-content-section">
        <div className="container detail-layout">
          <article className="detail-content">
            <h2>Understanding {page.title}</h2>
            <p>{page.details}</p>
            <p>
              Patients usually need more than one isolated treatment. The clinic looks at pain level,
              movement quality, posture, strength, activity demands, and recovery history before
              deciding the best direction.
            </p>

            <div className="detail-list-grid">
              <div className="detail-list-card">
                <h3>Common concerns</h3>
                <ul>
                  {page.concerns.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-list-card">
                <h3>How treatment may help</h3>
                <ul>
                  {page.approach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h2>Care approach at Sure Cure</h2>
            <p>
              The treatment plan can include hands-on therapy, guided exercises, mobility correction,
              pain-relief modalities, strengthening, taping, ergonomic changes, and home-care advice.
              The aim is to reduce discomfort while improving what the patient can do in real life.
            </p>
          </article>

          <aside className="detail-booking" id="appointment">
            <div className="detail-booking__title">
              <CalendarCheck size={22} />
              <h2>Request appointment</h2>
            </div>
            <BookingForm compact selectedService={page.title} />
          </aside>
        </div>
      </section>
    </main>
  );
}
