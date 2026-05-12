import { useState } from "react";
import { CalendarCheck, ChevronDown, Menu, X } from "lucide-react";
import { clinic, navGroups } from "../data/clinicData.js";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setActiveGroup(null);
  };

  return (
    <header className="site-header">
      <div className="utility-strip">
        <span>{clinic.location}</span>
        <span>Physiotherapy, rehab and pain care</span>
        <a href="#appointment">Book through WhatsApp</a>
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
              <a className="nav-link" href={group.href} onClick={closeMenus}>
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
        </nav>

        <a className="header-appointment" href="#appointment">
          <CalendarCheck size={18} />
          Make Appointment
        </a>

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
