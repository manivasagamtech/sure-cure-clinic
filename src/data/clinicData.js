import {
  Activity,
  BadgeCheck,
  Bone,
  Brain,
  Dumbbell,
  Flame,
  HeartPulse,
  MoveRight,
  Sparkles,
  Stethoscope,
  StretchHorizontal,
  Zap,
} from "lucide-react";

export const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const clinic = {
  name: "Sure Cure Physiotherapy and Rehab Clinic",
  shortName: "Sure Cure Physio",
  location: "Bebwewadi-Kondhwa Road, Pune",
  doctor: "Dr. Sujata Pardeshi Sure",
  doctorCredentials: "B.PTh., M.PTh. (ORTHO), M.I.A.P.",
  phoneDisplay: "8446398070",
  phoneHref: "tel:+918446398070",
  whatsappNumber: "918446398070",
  addressLines: [
    "Suryaprabha Garden Buldg. No. C",
    "Flat No.: 3, Bebwewadi-Kondhwa Road",
    "Behind Pune Adda, Opposite HDFC Bank",
    "Pune - 411037",
  ],
  heroImage:
    "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1600",
  studioImage:
    "https://images.pexels.com/photos/6111627/pexels-photo-6111627.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const heroMediaSlides = [
  {
    label: "Back pain physiotherapy session",
    desktopVideo: "https://assets.mixkit.co/videos/13059/13059-720.mp4",
    mobileVideo: "https://assets.mixkit.co/videos/5356/5356-720.mp4",
    poster: clinic.heroImage,
  },
  {
    label: "Shoulder physiotherapy treatment",
    desktopVideo: "https://assets.mixkit.co/videos/13039/13039-720.mp4",
    mobileVideo: "https://assets.mixkit.co/videos/1321/1321-720.mp4",
    poster:
      "https://images.pexels.com/photos/30483023/pexels-photo-30483023.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    label: "Guided recovery and strengthening",
    desktopVideo: "https://assets.mixkit.co/videos/18265/18265-720.mp4",
    mobileVideo: "https://assets.mixkit.co/videos/52080/52080-720.mp4",
    poster:
      "https://images.pexels.com/photos/20860615/pexels-photo-20860615.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export const navGroups = [
  {
    label: "Home",
    href: "#home",
    items: [
      { label: "Clinic overview", href: "#home" },
      { label: "Why Sure Cure", href: "#profile" },
      { label: "Booking flow", href: "#appointment" },
    ],
  },
  {
    label: "About",
    href: "#profile",
    items: [
      { label: "Doctor profile", href: "#profile" },
      { label: "Certifications", href: "#certifications" },
      { label: "Care philosophy", href: "#process" },
    ],
  },
  {
    label: "Conditions",
    href: "#services",
    items: [
      { label: "Chronic pain syndrome", href: "#/condition/chronic-pain-syndrome" },
      { label: "Disc problems and sciatica", href: "#/condition/disc-problems-and-sciatica" },
      { label: "Headaches and migraine", href: "#/condition/headaches-and-migraine" },
      { label: "Arthritis and frozen shoulder", href: "#/condition/arthritis-and-frozen-shoulder" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    items: [
      { label: "Dry needling", href: "#/service/dry-needling-techniques" },
      { label: "Regeneration therapy", href: "#/service/regeneration-therapy-prp" },
      { label: "Manual therapy", href: "#/service/joint-mobilizations" },
      { label: "Sports taping", href: "#/service/sports-taping" },
      { label: "Pilates", href: "#/service/pilates" },
    ],
  },
  {
    label: "Contact",
    href: "#appointment",
    items: [
      { label: "Book appointment", href: "#appointment" },
      { label: "Appointment enquiry", href: "#appointment" },
    ],
  },
];

export const certifications = [
  "Master's in Physiotherapy from Maharashtra University of Health Sciences, Nashik",
  "Specialization in Musculoskeletal Sciences and Sports Medicine",
  "Certified in Myofascial Dry Needling from South Africa",
  "Certified in Manual Therapy",
  "Certified in Regeneration Therapy (PRP) from the U.K.",
  "Certified in Cupping Therapy",
  "Certified in Osteopathic Joint Manipulation and Analysis",
  "Certified in Interventional Pain Management Therapy from the U.K.",
  "Certified in Sports Taping",
  "Fellowship in Medical Cosmetology from Germany",
];

export const conditions = [
  {
    title: "Chronic Pain Syndrome",
    icon: HeartPulse,
    image: "https://images.pexels.com/photos/7298893/pexels-photo-7298893.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Person holding their lower back to show chronic pain discomfort",
    summary:
      "Care for persistent pain patterns that affect sleep, posture, movement confidence, and daily routines.",
    details:
      "The clinic combines assessment, mobility work, strengthening, and symptom management so patients can reduce flare-ups and regain practical control.",
  },
  {
    title: "Disc Problems and Sciatica",
    icon: Bone,
    image: "https://images.pexels.com/photos/20860586/pexels-photo-20860586.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Physiotherapist assessing a patient with back pain in a clinic",
    summary:
      "Rehabilitation for back pain, radiating leg pain, nerve irritation, and spine-related movement restriction.",
    details:
      "Treatment focuses on reducing irritability, improving movement tolerance, and rebuilding strength without forcing painful positions.",
  },
  {
    title: "Headaches and Migraine",
    icon: Brain,
    image: "https://images.pexels.com/photos/7298881/pexels-photo-7298881.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Person holding the neck area during neck pain and headache discomfort",
    summary:
      "Support for recurring headaches where neck tension, posture load, and muscle restriction may contribute.",
    details:
      "Therapy may include neck mobility, trigger point work, postural correction, relaxation strategies, and ergonomic changes.",
  },
  {
    title: "Arthritis and Frozen Shoulder",
    icon: StretchHorizontal,
    image: "https://images.pexels.com/photos/30483023/pexels-photo-30483023.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Physiotherapist adjusting a patient's shoulder during therapy",
    summary:
      "Mobility-focused treatment for joint stiffness, pain, shoulder restriction, and reduced functional range.",
    details:
      "The plan gradually improves range, strength, and usable movement while respecting pain sensitivity and tissue stage.",
  },
];

export const services = [
  {
    title: "Dry Needling Techniques",
    icon: Sparkles,
    image: "https://images.pexels.com/photos/20860599/pexels-photo-20860599.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Physiotherapist working on neck muscle pain in a clinic setting",
    category: "Pain modulation",
    description:
      "Targets tight trigger points and overactive muscles to support pain relief, better mobility, and smoother rehabilitation work.",
  },
  {
    title: "Regeneration Therapy (PRP)",
    icon: Activity,
    image: "https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Clinical consultation before a regenerative therapy plan",
    category: "Recovery support",
    description:
      "Used in selected cases where tissue healing support and recovery planning are important parts of the treatment path.",
  },
  {
    title: "Joint Mobilizations",
    icon: MoveRight,
    image: "https://images.pexels.com/photos/20860576/pexels-photo-20860576.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Physiotherapist mobilizing a patient's arm and shoulder",
    category: "Mobility care",
    description:
      "Hands-on techniques to improve restricted joints, reduce stiffness, and help patients move with more comfort.",
  },
  {
    title: "Osteopathic Joint Analysis and Manipulations",
    icon: Stethoscope,
    image: "https://images.pexels.com/photos/20860605/pexels-photo-20860605.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Physiotherapist performing a neck and joint assessment",
    category: "Movement assessment",
    description:
      "A structured approach to evaluate movement restrictions and apply targeted manual correction where appropriate.",
  },
  {
    title: "Sports Taping",
    icon: BadgeCheck,
    image: "https://images.pexels.com/photos/8219160/pexels-photo-8219160.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Therapist applying kinesio tape for supportive therapy",
    category: "Support and stability",
    description:
      "Taping support for overloaded or recovering areas, helping patients manage strain while returning to activity.",
  },
  {
    title: "Strength and Conditioning",
    icon: Dumbbell,
    image: "https://images.pexels.com/photos/20860615/pexels-photo-20860615.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Physiotherapist helping a patient with a back exercise",
    category: "Performance rehab",
    description:
      "Progressive exercise plans that rebuild capacity, improve resilience, and support long-term return to function.",
  },
  {
    title: "Nutritional Consultation",
    icon: HeartPulse,
    image: "https://images.pexels.com/photos/15319020/pexels-photo-15319020.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Nutrition consultation with fruits and a health professional",
    category: "Lifestyle support",
    description:
      "Practical guidance around recovery habits, body weight goals, and routines that support musculoskeletal health.",
  },
  {
    title: "Obesity Management",
    icon: Activity,
    image: "https://images.pexels.com/photos/20860615/pexels-photo-20860615.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Guided physiotherapy exercise for safe movement progression",
    category: "Guided movement",
    description:
      "Movement planning that considers joint load, stamina, confidence, and safe progression for long-term consistency.",
  },
  {
    title: "Ergonomic Guidance",
    icon: Stethoscope,
    image: "https://images.pexels.com/photos/8376266/pexels-photo-8376266.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Health professional explaining guidance during a desk-based consultation",
    category: "Work and posture",
    description:
      "Workstation and daily posture guidance for patients dealing with neck, back, shoulder, or repetitive strain issues.",
  },
  {
    title: "Aesthetic Management",
    icon: Sparkles,
    image: "https://images.pexels.com/photos/14438367/pexels-photo-14438367.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Clinical aesthetic treatment being performed on a patient's face",
    category: "Extended care",
    description:
      "A supportive service area connected to the clinic's wider care skillset and medical cosmetology training.",
  },
  {
    title: "Pilates",
    icon: StretchHorizontal,
    image: "https://images.pexels.com/photos/4325466/pexels-photo-4325466.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Pilates-style controlled movement and stretching session",
    category: "Control and balance",
    description:
      "Controlled movement training for core strength, posture, breathing, alignment, balance, and body awareness.",
  },
];

export const treatmentMethods = [
  { label: "Dry needling", icon: Sparkles },
  { label: "Digital ultrasound", icon: Zap },
  { label: "Kinesio taping", icon: BadgeCheck },
  { label: "Interferential therapy", icon: Activity },
  { label: "Ion power", icon: Zap },
  { label: "TENS", icon: HeartPulse },
  { label: "Hot fermentation", icon: Flame },
];

export const appointmentOptions = [
  ...conditions.map((condition) => condition.title),
  ...services.map((service) => service.title),
  ...treatmentMethods.map((method) => method.label),
];

const defaultConcerns = [
  "Pain or stiffness affecting everyday movement",
  "Reduced confidence while working, exercising, or doing daily activities",
  "Symptoms that need a structured assessment before treatment starts",
];

const defaultApproach = [
  "Detailed history and movement assessment",
  "Treatment selected according to symptoms, tolerance, and recovery stage",
  "Home guidance and progression plan for lasting improvement",
];

const conditionDetails = {
  "Chronic Pain Syndrome": {
    concerns: ["Long-lasting pain that changes daily activity", "Fear of movement or repeated flare-ups", "Sleep disturbance and posture guarding"],
    approach: ["Pain history and movement assessment", "Gentle mobility and graded strengthening", "Education for pacing, posture, and recurrence control"],
  },
  "Disc Problems and Sciatica": {
    concerns: ["Low back pain with leg symptoms", "Tingling, tightness, or nerve irritation", "Difficulty bending, sitting, walking, or lifting"],
    approach: ["Spine and nerve sensitivity assessment", "Pain-calming positions and mobility drills", "Core, hip, and posture strengthening progression"],
  },
  "Headaches and Migraine": {
    concerns: ["Repeated headaches linked with neck stiffness", "Shoulder tension and screen-related posture load", "Migraine episodes worsened by muscle tightness"],
    approach: ["Neck, shoulder, and posture assessment", "Manual therapy and mobility restoration", "Ergonomic guidance and home exercises"],
  },
  "Arthritis and Frozen Shoulder": {
    concerns: ["Painful stiffness around shoulder or joints", "Reduced range while dressing, reaching, or lifting", "Arthritic discomfort affecting daily function"],
    approach: ["Joint range and irritability assessment", "Mobilization and progressive stretching", "Strengthening for function and long-term support"],
  },
};

const serviceDetails = {
  "Dry Needling Techniques": {
    concerns: ["Trigger point pain", "Muscle tightness limiting movement", "Pain that does not settle with stretching alone"],
    approach: ["Identify sensitive muscle bands", "Apply needling where clinically suitable", "Follow with mobility and strengthening work"],
  },
  "Regeneration Therapy (PRP)": {
    concerns: ["Persistent tendon or joint-related complaints", "Recovery cases needing structured follow-up", "Pain where healing support is part of the plan"],
    approach: ["Clinical screening and suitability review", "Recovery planning around the procedure", "Progressive rehabilitation after symptom response"],
  },
  "Joint Mobilizations": {
    concerns: ["Joint stiffness", "Restricted movement range", "Pain with daily movement"],
    approach: ["Movement and joint play assessment", "Targeted mobilization techniques", "Exercise to maintain the gained range"],
  },
  "Sports Taping": {
    concerns: ["Sports strain", "Joint overload", "Need for short-term support during activity"],
    approach: ["Assess activity and support need", "Apply taping for the target area", "Guide safe loading and return to movement"],
  },
  Pilates: {
    concerns: ["Poor core control", "Postural imbalance", "Need for gentle strength and mobility work"],
    approach: ["Assess control and breathing patterns", "Guided Pilates-based movement", "Progress balance, strength, and posture"],
  },
};

export const detailPages = [
  ...conditions.map((condition) => ({
    ...condition,
    type: "condition",
    slug: slugify(condition.title),
    category: "Condition care",
    description: condition.summary,
    concerns: conditionDetails[condition.title]?.concerns || defaultConcerns,
    approach: conditionDetails[condition.title]?.approach || defaultApproach,
  })),
  ...services.map((service) => ({
    ...service,
    type: "service",
    slug: slugify(service.title),
    summary: service.description,
    details:
      "This therapy is selected after assessment and combined with exercise, education, and follow-up guidance so the treatment supports a complete recovery plan.",
    concerns: serviceDetails[service.title]?.concerns || defaultConcerns,
    approach: serviceDetails[service.title]?.approach || defaultApproach,
  })),
];
