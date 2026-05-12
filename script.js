const clinicData = {
  whatsappNumber: "",
  certifications: [
    "Certified in Myofascial Dry Needling from South Africa",
    "Certified in Manual Therapy",
    "Certified in Regeneration Therapy (PRP) from the U.K. in November 2022",
    "Certified in Cupping Therapy",
    "Certified in Osteopathic Joint Manipulation and Analysis",
    "Certified in Interventional Pain Management Therapy from the U.K. in November 2022",
    "Certified in Sports Taping",
    "Fellowship in Medical Cosmetology from Germany",
  ],
  specializations: [
    "Dry needling techniques",
    "Regeneration therapy (PRP - Platelet Rich Plasma)",
    "Joint mobilizations",
    "Osteopathic joint analysis and manipulations",
    "Sports taping",
    "Strength and conditioning",
    "Nutritional consultation",
    "Obesity management",
    "Ergonomic guidance",
    "Aesthetic management",
    "Pilates",
  ],
  conditions: [
    {
      title: "Chronic Pain Syndrome",
      description:
        "Structured physiotherapy support for long-lasting pain patterns that affect movement, sleep, posture, and day-to-day comfort.",
    },
    {
      title: "Disc Problems and Sciatica",
      description:
        "Rehabilitation focused on back pain, nerve irritation, posture correction, and restoring safer movement with less flare-up risk.",
    },
    {
      title: "Headaches and Migraine",
      description:
        "Therapy that looks at neck tension, movement restriction, posture load, and musculoskeletal contributors to recurring head pain.",
    },
    {
      title: "Arthritis and Frozen Shoulder",
      description:
        "Mobility-led treatment to reduce stiffness, ease joint discomfort, and improve shoulder or limb function progressively.",
    },
  ],
  therapies: [
    {
      title: "Dry Needling Techniques",
      tag: "Pain modulation",
      description:
        "Used to release tight trigger points, reduce muscular pain, and improve movement quality in targeted areas.",
    },
    {
      title: "Regeneration Therapy (PRP)",
      tag: "Recovery support",
      description:
        "A regenerative approach that can be used in selected cases where tissue healing and recovery support are priorities.",
    },
    {
      title: "Joint Mobilizations",
      tag: "Mobility restoration",
      description:
        "Hands-on techniques to improve joint motion, reduce stiffness, and help patients move more freely and comfortably.",
    },
    {
      title: "Osteopathic Joint Analysis and Manipulations",
      tag: "Movement assessment",
      description:
        "A detailed structural and movement-focused approach for identifying restrictions and improving functional alignment.",
    },
    {
      title: "Sports Taping",
      tag: "Support and stability",
      description:
        "Applied to support injured or overloaded areas, reduce strain, and assist safe return to activity.",
    },
    {
      title: "Strength and Conditioning",
      tag: "Performance rehab",
      description:
        "Progressive exercise programming for resilience, movement confidence, and better physical capacity after pain or injury.",
    },
    {
      title: "Nutritional Consultation",
      tag: "Recovery habits",
      description:
        "Supportive guidance around recovery, weight management, and habits that influence long-term musculoskeletal health.",
    },
    {
      title: "Obesity Management",
      tag: "Lifestyle support",
      description:
        "Movement planning and guided routines that consider joint load, function, stamina, and safe progression.",
    },
    {
      title: "Ergonomic Guidance",
      tag: "Daily function",
      description:
        "Advice for workstation setup, posture habits, and movement adjustments that reduce recurring strain during work and home routines.",
    },
    {
      title: "Aesthetic Management",
      tag: "Adjunct care",
      description:
        "An extended service area aligned to appearance-focused care where clinical judgment and supportive therapy methods intersect.",
    },
    {
      title: "Pilates",
      tag: "Control and balance",
      description:
        "Controlled movement sessions that improve core strength, alignment, breathing, balance, and postural awareness.",
    },
  ],
  methods: [
    "Dry needling",
    "Digital ultrasound",
    "Kinesio taping",
    "Interferential therapy",
    "Ion power",
    "TENS",
    "Hot fermentation",
  ],
};

const byId = (id) => document.getElementById(id);

function populateList(targetId, items) {
  const target = byId(targetId);
  if (!target) return;
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function populateConditions() {
  const target = byId("condition-grid");
  if (!target) return;

  target.innerHTML = clinicData.conditions
    .map(
      (item) => `
        <article class="condition-card" data-reveal>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function populateTherapies() {
  const target = byId("therapy-grid");
  const select = byId("service-select");
  if (!target || !select) return;

  target.innerHTML = clinicData.therapies
    .map(
      (item) => `
        <article class="therapy-card" data-reveal>
          <span class="therapy-card__tag">${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");

  select.innerHTML =
    '<option value="">Select a service</option>' +
    [...clinicData.conditions.map((item) => item.title), ...clinicData.therapies.map((item) => item.title)]
      .map((name) => `<option value="${name}">${name}</option>`)
      .join("");
}

function populateMethods() {
  const target = byId("method-chips");
  if (!target) return;

  target.innerHTML = clinicData.methods
    .map((method) => `<span class="method-chip" data-reveal>${method}</span>`)
    .join("");
}

function setFeedback(message, state = "") {
  const feedback = byId("form-feedback");
  if (!feedback) return;
  feedback.textContent = message;
  if (state) {
    feedback.dataset.state = state;
  } else {
    delete feedback.dataset.state;
  }
}

function openWhatsApp(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);

  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !phone || !service || !message) {
    setFeedback("Please complete all fields before continuing.", "error");
    return;
  }

  const prefilledMessage = [
    "Hello Sure Cure Clinic,",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service interested in: ${service}`,
    `Message: ${message}`,
  ].join("\n");

  const text = encodeURIComponent(prefilledMessage);
  const phoneDigits = clinicData.whatsappNumber.replace(/\D/g, "");
  const whatsappUrl = phoneDigits
    ? `https://wa.me/${phoneDigits}?text=${text}`
    : `https://wa.me/?text=${text}`;

  setFeedback("Opening WhatsApp with your prefilled appointment message.", "success");
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupReveal() {
  const elements = document.querySelectorAll("[data-reveal]");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((element) => observer.observe(element));
}

function init() {
  populateList("specialization-list", clinicData.specializations);
  populateList("certification-list", clinicData.certifications);
  populateConditions();
  populateTherapies();
  populateMethods();
  setupMenu();
  setupReveal();

  const form = byId("appointment-form");
  if (form) {
    form.addEventListener("submit", openWhatsApp);
  }
}

document.addEventListener("DOMContentLoaded", init);
