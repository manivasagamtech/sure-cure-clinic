import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { conditions, services } from "../data/clinicData.js";

const tabs = [
  { id: "conditions", label: "Conditions Treated" },
  { id: "services", label: "Therapy Services" },
];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ServiceExplorer({ onBook }) {
  const [activeTab, setActiveTab] = useState("conditions");
  const content = activeTab === "conditions" ? conditions : services;

  useEffect(() => {
    const syncTabWithHash = () => {
      const hash = window.location.hash;

      if (hash.startsWith("#service-")) {
        setActiveTab("services");
      }

      if (hash.startsWith("#condition-")) {
        setActiveTab("conditions");
      }

      if (hash.startsWith("#service-") || hash.startsWith("#condition-")) {
        window.setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 80);
      }
    };

    syncTabWithHash();
    window.addEventListener("hashchange", syncTabWithHash);

    return () => window.removeEventListener("hashchange", syncTabWithHash);
  }, []);

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="services-topline">
          <SectionHeading
            kicker="Service portfolio"
            title="Clear service categories with detailed explanations for every patient need."
            body="The layout separates conditions from therapy methods so visitors can find either their symptom area or the exact treatment they are looking for."
          />
          <div className="tab-switcher" role="tablist" aria-label="Service categories">
            {tabs.map((tab) => (
              <button
                className={activeTab === tab.id ? "tab-button tab-button--active" : "tab-button"}
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="service-grid">
          {content.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                className="service-card"
                id={`${activeTab === "conditions" ? "condition" : "service"}-${slugify(item.title)}`}
                key={item.title}
                style={{ "--delay": `${index * 55}ms` }}
              >
                <div className="service-icon">
                  <Icon size={24} />
                </div>
                <span>{item.category || "Condition care"}</span>
                <h3>{item.title}</h3>
                <p>{item.summary || item.description}</p>
                {"details" in item ? <small>{item.details}</small> : null}
                <button type="button" onClick={onBook} aria-label={`Book appointment for ${item.title}`}>
                  Enquire now
                  <ArrowUpRight size={17} />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
