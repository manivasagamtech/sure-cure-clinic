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

export const clinic = {
  name: "Sure Cure Physiotherapy and Rehab Clinic",
  location: "Pune, Maharashtra",
  doctor: "Dr. Sujata",
  whatsappNumber: "",
  heroImage:
    "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1600",
  studioImage:
    "https://images.pexels.com/photos/6111627/pexels-photo-6111627.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

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
      { label: "Chronic pain syndrome", href: "#condition-chronic-pain-syndrome" },
      { label: "Disc problems and sciatica", href: "#condition-disc-problems-and-sciatica" },
      { label: "Headaches and migraine", href: "#condition-headaches-and-migraine" },
      { label: "Arthritis and frozen shoulder", href: "#condition-arthritis-and-frozen-shoulder" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    items: [
      { label: "Dry needling", href: "#service-dry-needling-techniques" },
      { label: "Regeneration therapy", href: "#service-regeneration-therapy-prp" },
      { label: "Manual therapy", href: "#service-joint-mobilizations" },
      { label: "Sports taping", href: "#service-sports-taping" },
      { label: "Pilates", href: "#service-pilates" },
    ],
  },
  {
    label: "Contact",
    href: "#appointment",
    items: [
      { label: "Book appointment", href: "#appointment" },
      { label: "WhatsApp enquiry", href: "#appointment" },
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
    summary:
      "Care for persistent pain patterns that affect sleep, posture, movement confidence, and daily routines.",
    details:
      "The clinic combines assessment, mobility work, strengthening, and symptom management so patients can reduce flare-ups and regain practical control.",
  },
  {
    title: "Disc Problems and Sciatica",
    icon: Bone,
    summary:
      "Rehabilitation for back pain, radiating leg pain, nerve irritation, and spine-related movement restriction.",
    details:
      "Treatment focuses on reducing irritability, improving movement tolerance, and rebuilding strength without forcing painful positions.",
  },
  {
    title: "Headaches and Migraine",
    icon: Brain,
    summary:
      "Support for recurring headaches where neck tension, posture load, and muscle restriction may contribute.",
    details:
      "Therapy may include neck mobility, trigger point work, postural correction, relaxation strategies, and ergonomic changes.",
  },
  {
    title: "Arthritis and Frozen Shoulder",
    icon: StretchHorizontal,
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
    category: "Pain modulation",
    description:
      "Targets tight trigger points and overactive muscles to support pain relief, better mobility, and smoother rehabilitation work.",
  },
  {
    title: "Regeneration Therapy (PRP)",
    icon: Activity,
    category: "Recovery support",
    description:
      "Used in selected cases where tissue healing support and recovery planning are important parts of the treatment path.",
  },
  {
    title: "Joint Mobilizations",
    icon: MoveRight,
    category: "Mobility care",
    description:
      "Hands-on techniques to improve restricted joints, reduce stiffness, and help patients move with more comfort.",
  },
  {
    title: "Osteopathic Joint Analysis and Manipulations",
    icon: Stethoscope,
    category: "Movement assessment",
    description:
      "A structured approach to evaluate movement restrictions and apply targeted manual correction where appropriate.",
  },
  {
    title: "Sports Taping",
    icon: BadgeCheck,
    category: "Support and stability",
    description:
      "Taping support for overloaded or recovering areas, helping patients manage strain while returning to activity.",
  },
  {
    title: "Strength and Conditioning",
    icon: Dumbbell,
    category: "Performance rehab",
    description:
      "Progressive exercise plans that rebuild capacity, improve resilience, and support long-term return to function.",
  },
  {
    title: "Nutritional Consultation",
    icon: HeartPulse,
    category: "Lifestyle support",
    description:
      "Practical guidance around recovery habits, body weight goals, and routines that support musculoskeletal health.",
  },
  {
    title: "Obesity Management",
    icon: Activity,
    category: "Guided movement",
    description:
      "Movement planning that considers joint load, stamina, confidence, and safe progression for long-term consistency.",
  },
  {
    title: "Ergonomic Guidance",
    icon: Stethoscope,
    category: "Work and posture",
    description:
      "Workstation and daily posture guidance for patients dealing with neck, back, shoulder, or repetitive strain issues.",
  },
  {
    title: "Aesthetic Management",
    icon: Sparkles,
    category: "Extended care",
    description:
      "A supportive service area connected to the clinic's wider care skillset and medical cosmetology training.",
  },
  {
    title: "Pilates",
    icon: StretchHorizontal,
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
