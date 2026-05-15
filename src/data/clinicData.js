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
    label: "Physiotherapist assessing patient movement",
    desktopVideo: "https://assets.mixkit.co/videos/49541/49541-720.mp4",
    mobileVideo: "https://assets.mixkit.co/videos/49541/49541-720.mp4",
    poster: "https://assets.mixkit.co/videos/49541/49541-thumb-360-0.jpg",
  },
  {
    label: "Assisted physical therapy in a clinical room",
    desktopVideo: "https://assets.mixkit.co/videos/5561/5561-720.mp4",
    mobileVideo: "https://assets.mixkit.co/videos/5561/5561-720.mp4",
    poster: "https://assets.mixkit.co/videos/5561/5561-thumb-360-0.jpg",
  },
  {
    label: "Physiotherapist guiding neck therapy",
    desktopVideo: "https://assets.mixkit.co/videos/36393/36393-720.mp4",
    mobileVideo: "https://assets.mixkit.co/videos/36393/36393-720.mp4",
    poster: "https://assets.mixkit.co/videos/36393/36393-thumb-360-0.jpg",
  },
  {
    label: "Clinic treatment explanation with patient",
    desktopVideo: "https://assets.mixkit.co/videos/13164/13164-720.mp4",
    mobileVideo: "https://assets.mixkit.co/videos/13164/13164-720.mp4",
    poster: "https://assets.mixkit.co/videos/13164/13164-thumb-360-0.jpg",
  },
  {
    label: "Rehab equipment training on stationary bike",
    desktopVideo: "https://assets.mixkit.co/videos/50972/50972-720.mp4",
    mobileVideo: "https://assets.mixkit.co/videos/50972/50972-720.mp4",
    poster: "https://assets.mixkit.co/videos/50972/50972-thumb-360-0.jpg",
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
      "Support for long-lasting body pain that affects sleep, work, posture and daily movement.",
    details:
      "Chronic pain needs careful assessment and steady rehabilitation. Treatment may include pain education, mobility work, strengthening and practical home advice to reduce repeated flare-ups.",
  },
  {
    title: "Disc Problems and Sciatica",
    icon: Bone,
    image: "https://images.pexels.com/photos/20860586/pexels-photo-20860586.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Physiotherapist assessing a patient with back pain in a clinic",
    summary:
      "Care for low back pain, leg pain, nerve irritation and difficulty with sitting, bending or walking.",
    details:
      "Disc and sciatic pain can affect routine work, travel and sleep. The treatment plan focuses on reducing pain sensitivity, improving safe movement and rebuilding back and hip strength.",
  },
  {
    title: "Headaches and Migraine",
    icon: Brain,
    image: "https://images.pexels.com/photos/7298881/pexels-photo-7298881.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Person holding the neck area during neck pain and headache discomfort",
    summary:
      "Treatment support for headaches linked with neck tightness, posture strain and muscle tension.",
    details:
      "Headaches and migraine symptoms may be influenced by neck stiffness, screen posture and shoulder tension. Therapy may include neck mobility, trigger-point care, posture correction and ergonomic guidance.",
  },
  {
    title: "Arthritis and Frozen Shoulder",
    icon: StretchHorizontal,
    image: "https://images.pexels.com/photos/30483023/pexels-photo-30483023.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Physiotherapist adjusting a patient's shoulder during therapy",
    summary:
      "Care for joint pain, shoulder stiffness and reduced movement during daily activities.",
    details:
      "Arthritis and frozen shoulder can limit dressing, reaching and lifting. Treatment works on pain control, joint mobility, stretching and strengthening at a comfortable pace.",
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
      "Used for selected trigger points and tight muscles to support pain relief and easier movement.",
  },
  {
    title: "Regeneration Therapy (PRP)",
    icon: Activity,
    image: "https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Clinical consultation before a regenerative therapy plan",
    category: "Recovery support",
    description:
      "A recovery-support option for selected tendon, joint or soft-tissue concerns after clinical review.",
  },
  {
    title: "Joint Mobilizations",
    icon: MoveRight,
    image: "https://images.pexels.com/photos/20860576/pexels-photo-20860576.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Physiotherapist mobilizing a patient's arm and shoulder",
    category: "Mobility care",
    description:
      "Hands-on techniques for stiff joints, restricted movement and pain during daily activity.",
  },
  {
    title: "Osteopathic Joint Analysis and Manipulations",
    icon: Stethoscope,
    image: "https://images.pexels.com/photos/20860605/pexels-photo-20860605.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Physiotherapist performing a neck and joint assessment",
    category: "Movement assessment",
    description:
      "Clinical movement checks with manual correction when joint restriction is suitable for treatment.",
  },
  {
    title: "Sports Taping",
    icon: BadgeCheck,
    image: "https://images.pexels.com/photos/8219160/pexels-photo-8219160.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Therapist applying kinesio tape for supportive therapy",
    category: "Support and stability",
    description:
      "Supportive taping for sports strain, joint overload and return-to-activity guidance.",
  },
  {
    title: "Strength and Conditioning",
    icon: Dumbbell,
    image: "https://images.pexels.com/photos/20860615/pexels-photo-20860615.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Physiotherapist helping a patient with a back exercise",
    category: "Performance rehab",
    description:
      "Exercise-based rehab for strength, balance, stamina and return to work or sport.",
  },
  {
    title: "Nutritional Consultation",
    icon: HeartPulse,
    image: "https://images.pexels.com/photos/15319020/pexels-photo-15319020.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Nutrition consultation with fruits and a health professional",
    category: "Lifestyle support",
    description:
      "Practical food and habit guidance to support recovery, weight goals and musculoskeletal health.",
  },
  {
    title: "Obesity Management",
    icon: Activity,
    image: "https://images.pexels.com/photos/20860615/pexels-photo-20860615.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Guided physiotherapy exercise for safe movement progression",
    category: "Guided movement",
    description:
      "Safe movement planning for weight management, joint comfort, stamina and routine building.",
  },
  {
    title: "Ergonomic Guidance",
    icon: Stethoscope,
    image: "https://images.pexels.com/photos/8376266/pexels-photo-8376266.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Health professional explaining guidance during a desk-based consultation",
    category: "Work and posture",
    description:
      "Workstation and posture advice for neck, back, shoulder and repetitive strain complaints.",
  },
  {
    title: "Aesthetic Management",
    icon: Sparkles,
    image: "https://images.pexels.com/photos/14438367/pexels-photo-14438367.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Clinical aesthetic treatment being performed on a patient's face",
    category: "Extended care",
    description:
      "Selected aesthetic care services offered with Dr. Sujata's medical cosmetology training.",
  },
  {
    title: "Pilates",
    icon: StretchHorizontal,
    image: "https://images.pexels.com/photos/4325466/pexels-photo-4325466.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Pilates-style controlled movement and stretching session",
    category: "Control and balance",
    description:
      "Controlled movement sessions for core strength, posture, breathing, balance and body awareness.",
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
  "Pain or stiffness during daily movement",
  "Difficulty with work, exercise or household activity",
  "Need for assessment before starting treatment",
];

const defaultApproach = [
  "History taking and movement assessment",
  "Treatment selected according to symptoms and comfort",
  "Home advice with gradual progression",
];

const conditionDetails = {
  "Chronic Pain Syndrome": {
    concerns: ["Long-lasting pain that changes daily activity", "Fear of movement or repeated flare-ups", "Sleep disturbance and posture guarding"],
    approach: ["Pain history and movement assessment", "Gentle mobility and graded strengthening", "Advice for pacing, posture and flare-up control"],
  },
  "Disc Problems and Sciatica": {
    concerns: ["Low back pain with leg symptoms", "Tingling, tightness, or nerve irritation", "Difficulty bending, sitting, walking, or lifting"],
    approach: ["Spine and nerve sensitivity assessment", "Pain-calming positions and mobility work", "Core, hip and posture strengthening"],
  },
  "Headaches and Migraine": {
    concerns: ["Repeated headaches linked with neck stiffness", "Shoulder tension and screen-related posture load", "Migraine episodes worsened by muscle tightness"],
    approach: ["Neck, shoulder and posture assessment", "Manual therapy and mobility work", "Ergonomic guidance and home exercises"],
  },
  "Arthritis and Frozen Shoulder": {
    concerns: ["Painful stiffness around shoulder or joints", "Reduced range while dressing, reaching, or lifting", "Arthritic discomfort affecting daily function"],
    approach: ["Joint range and pain assessment", "Mobilization and progressive stretching", "Strengthening for daily function"],
  },
};

const serviceDetails = {
  "Dry Needling Techniques": {
    concerns: ["Trigger point pain", "Muscle tightness limiting movement", "Pain that does not settle with stretching alone"],
    approach: ["Identify sensitive muscle bands", "Apply needling where clinically suitable", "Follow with mobility and strengthening"],
  },
  "Regeneration Therapy (PRP)": {
    concerns: ["Persistent tendon or joint-related complaints", "Recovery cases needing structured follow-up", "Pain where healing support is part of the plan"],
    approach: ["Clinical screening and suitability review", "Recovery planning around the procedure", "Progressive rehabilitation after response"],
  },
  "Joint Mobilizations": {
    concerns: ["Joint stiffness", "Restricted movement range", "Pain with daily movement"],
    approach: ["Movement and joint play assessment", "Targeted mobilization techniques", "Exercise to maintain the gained range"],
  },
  "Sports Taping": {
    concerns: ["Sports strain", "Joint overload", "Need for short-term support during activity"],
    approach: ["Assess activity and support need", "Apply taping for the target area", "Guide safe loading and return to activity"],
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
      "This service is recommended only after assessment. It may be combined with exercise, home advice and follow-up guidance when needed.",
    concerns: serviceDetails[service.title]?.concerns || defaultConcerns,
    approach: serviceDetails[service.title]?.approach || defaultApproach,
  })),
];
