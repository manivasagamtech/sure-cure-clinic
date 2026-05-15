import { ArrowLeft, CalendarCheck } from "lucide-react";
import BookingForm from "./BookingForm.jsx";

export default function DetailPage({ page }) {
  const Icon = page.icon;

  return (
    <main className="detail-page">
      <section className="detail-hero" style={{ "--detail-image": `url(${page.image})` }}>
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
            <div className="detail-hero__thumb">
              <img src={page.image} alt={page.imageAlt} />
            </div>
            <Icon size={34} />
            <strong>Assessment before treatment</strong>
            <span>
              Treatment is suggested after checking the concern, movement limits and recovery goals.
            </span>
          </div>
        </div>
      </section>

      <section className="section detail-content-section">
        <div className="container detail-layout">
          <article className="detail-content">
            <div className="detail-content__image">
              <img src={page.image} alt={page.imageAlt} />
            </div>
            <h2>About {page.title}</h2>
            <p>{page.details}</p>
            <p>
              During the visit, the clinic checks pain level, movement, posture, strength and daily
              activity needs before deciding the right treatment direction.
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
              Treatment may include hands-on therapy, guided exercise, electrotherapy, taping,
              posture correction and home-care advice. The aim is to reduce discomfort and make
              everyday movement easier.
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
