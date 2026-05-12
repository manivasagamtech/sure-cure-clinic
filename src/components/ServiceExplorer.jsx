import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { conditions, services } from "../data/clinicData.js";

const tabs = [
  { id: "conditions", label: "Conditions Treated" },
  { id: "services", label: "Therapy Services" },
];

export default function ServiceExplorer() {
  const [activeTab, setActiveTab] = useState("conditions");
  const content = activeTab === "conditions" ? conditions : services;

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
              <article className="service-card" key={item.title} style={{ "--delay": `${index * 55}ms` }}>
                <div className="service-icon">
                  <Icon size={24} />
                </div>
                <span>{item.category || "Condition care"}</span>
                <h3>{item.title}</h3>
                <p>{item.summary || item.description}</p>
                {"details" in item ? <small>{item.details}</small> : null}
                <a href="#appointment" aria-label={`Book appointment for ${item.title}`}>
                  Enquire now
                  <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
