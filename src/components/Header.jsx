import { useState } from "react";
import { CalendarCheck, ChevronDown, Menu, Phone, X } from "lucide-react";
import { clinic, navGroups } from "../data/clinicData.js";

export default function Header({ onBook }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);

  const openBooking = () => {
    if (typeof onBook === "function") {
      onBook();
      return;
    }

    window.location.hash = "appointment-modal";
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setActiveGroup(null);
  };

  return (
    <header className="site-header">
      <div className="utility-strip">
        <span>{clinic.location}</span>
        <span>Advanced physiotherapy and rehabilitation care</span>
        <a href={clinic.phoneHref}>Call {clinic.phoneDisplay}</a>
        <button type="button" onClick={openBooking}>
          Book appointment
        </button>
      </div>

      <div className="nav-shell">
        <a className="brand-lockup" href="#home" onClick={closeMenus}>
          <span className="brand-mark">SC</span>
          <span>
            <strong>Sure Cure</strong>
            <small>Physiotherapy and Rehab Clinic</small>
          </span>
        </a>

        <nav
          className={isMenuOpen ? "primary-nav primary-nav--open" : "primary-nav"}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {navGroups.map((group) => (
            <div
              className="nav-item"
              key={group.label}
              onMouseEnter={() => setActiveGroup(group.label)}
              onMouseLeave={() => setActiveGroup(null)}
            >
              <a
                className={activeGroup === group.label ? "nav-link nav-link--active" : "nav-link"}
                href={group.href}
                onClick={closeMenus}
                onFocus={() => setActiveGroup(group.label)}
              >
                {group.label}
                <ChevronDown size={15} strokeWidth={2.4} />
              </a>
              <div className={activeGroup === group.label ? "nav-dropdown nav-dropdown--visible" : "nav-dropdown"}>
                {group.items.map((item) => (
                  <a key={item.label} href={item.href} onClick={closeMenus}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div className="mobile-nav-actions">
            <a href={clinic.phoneHref} onClick={closeMenus}>
              <Phone size={18} />
              Call Now
            </a>
            <button
              type="button"
              onClick={() => {
                closeMenus();
                openBooking();
              }}
            >
              <CalendarCheck size={18} />
              Make Appointment
            </button>
          </div>
        </nav>

        <div className="header-actions">
          <a className="header-call" href={clinic.phoneHref}>
            <Phone size={18} />
            Call Now
          </a>
          <button className="header-appointment" type="button" onClick={openBooking}>
            <CalendarCheck size={18} />
            Make Appointment
          </button>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
