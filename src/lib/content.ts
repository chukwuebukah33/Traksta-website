export const APP_STORE_URL = "https://apps.apple.com/app/traksta/id6778127655";
export const SHOP_URL = "https://traksta-apparels.myshopify.com/";
export const SUPPORT_EMAIL = "hello@traksta.app";

export const SITE = {
  name: "Traksta",
  description:
    "The elite route-generation tool for runners and walkers that transforms any distance into a perfectly optimized, instantly navigable path.",
  tagline:
    "Traksta creates smart running, walking, and cycling routes based on your selected distance — instantly.",
} as const;

export const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Preview", href: "/#preview" },
  { label: "Shop", href: SHOP_URL, external: true },
] as const;

export const footerLinks = [
  { label: "Shop", href: SHOP_URL, external: true },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Support", href: "/support" },
] as const;

export const heroStats = [
  { value: "10K+", label: "Routes Generated" },
  { value: "4.9★", label: "App Store Rating" },
  { value: "<3s", label: "Generation Time" },
] as const;

export const steps = [
  {
    num: "01",
    icon: "MapPin",
    title: "Choose Distance",
    description:
      "Select how far you want to go — from a quick 2K to a marathon distance.",
    ref: "SYS::DIST_INPUT",
    color: "#0CCFDF",
  },
  {
    num: "02",
    icon: "Route",
    title: "Generate Route",
    description:
      "Traksta creates an optimised loop or path instantly based on your current location.",
    ref: "SYS::ROUTE_GEN",
    color: "#39D353",
  },
  {
    num: "03",
    icon: "Play",
    title: "Start Moving",
    description:
      "Follow the route and track your progress in real time with live metrics.",
    ref: "SYS::LIVE_TRACK",
    color: "#AAFF00",
  },
] as const;

export const features = [
  {
    icon: "Compass",
    ref: "REF: 001 // GENERATION",
    title: "Smart Route Generation",
    description:
      "Algorithmically generates optimised routes that follow real roads, trails, and paths in your area.",
    span: "lg:col-span-2",
    accent: "#0CCFDF",
  },
  {
    icon: "Target",
    ref: "REF: 002 // ACCURACY",
    title: "Distance Accuracy",
    description:
      "Precise route distances calibrated to within 2% of your selection every time.",
    span: "",
    accent: "#39D353",
  },
  {
    icon: "RotateCcw",
    ref: "REF: 003 // LOOPS",
    title: "Loop Routes",
    description:
      "Every route brings you back to your starting point — no stranded detours.",
    span: "",
    accent: "#AAFF00",
  },
  {
    icon: "MapPin",
    ref: "REF: 004 // LOCATION",
    title: "Location-Based Mapping",
    description:
      "Routes generated from your current GPS position, tailored to local streets and trails.",
    span: "",
    accent: "#0CCFDF",
  },
  {
    icon: "Zap",
    ref: "REF: 005 // SPEED",
    title: "Fast & Simple UI",
    description:
      "Open, set distance, go. Under 3 seconds from launch to generated route.",
    span: "lg:col-span-2",
    accent: "#39D353",
  },
] as const;

export const screens = [
  {
    label: "Distance Selector",
    ref: "SCR::001",
    image: "/images/preview-home.jpeg",
  },
  {
    label: "Route Map",
    ref: "SCR::002",
    image: "/images/preview-route.jpeg",
  },
  {
    label: "Live Tracking",
    ref: "SCR::003",
    image: "/images/preview-satellite.jpeg",
  },
  {
    label: "Completion Stats",
    ref: "SCR::004",
    image: "/images/preview-activity.jpeg",
  },
  {
    label: "App Icon",
    ref: "SCR::005",
    image: "/images/icon.png",
  },
] as const;

export const reasons = [
  { text: "No planning needed", color: "#0CCFDF" },
  { text: "No complicated setup", color: "#39D353" },
  { text: "Built for runners, walkers, and cyclists", color: "#0CCFDF" },
  { text: "Saves time every day", color: "#AAFF00" },
] as const;

export const useCases = [
  {
    icon: "Footprints",
    title: "Daily Runs",
    desc: "Your morning or evening ritual, perfected.",
    color: "#0CCFDF",
  },
  {
    icon: "HeartPulse",
    title: "Cardio Training",
    desc: "Hit your distance targets with precision.",
    color: "#39D353",
  },
  {
    icon: "Timer",
    title: "Evening Walks",
    desc: "Explore your neighbourhood, stress-free.",
    color: "#AAFF00",
  },
  {
    icon: "Bike",
    title: "Cycling Routes",
    desc: "Find the perfect loop for your next ride.",
    color: "#0CCFDF",
  },
] as const;

export const watchStats = [
  { label: "Route Generation", value: "On-Wrist" },
  { label: "Live Tracking", value: "Real-Time" },
  { label: "Works Without", value: "iPhone" },
] as const;

export const privacyUpdated = "July 2026";

export const privacySections = [
  {
    id: "information-collected",
    icon: "Database",
    title: "Information We Collect",
    color: "#0CCFDF",
    content: [
      {
        subtitle: "Location Data",
        text: "Traksta collects your device's GPS location data when you use the app. This is used exclusively to generate running and walking routes near your current position. Location data is processed in real time and is not retained on our servers after your session ends.",
      },
      {
        subtitle: "Usage Data",
        text: "We may collect anonymous usage data such as session duration, distance preferences selected, and feature interactions. This data helps us improve the app experience and does not identify you personally.",
      },
      {
        subtitle: "Device Information",
        text: "We collect basic device information including device model, operating system version, and app version for the purpose of troubleshooting and compatibility. This information does not include personal identifiers.",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: "Eye",
    title: "How We Use Your Information",
    color: "#39D353",
    content: [
      {
        subtitle: "Route Generation",
        text: "Your location data is used solely to calculate and display personalised running or walking routes. Routes are generated client-side or via secure server calls; your exact location is never stored permanently.",
      },
      {
        subtitle: "App Improvement",
        text: "Aggregated, anonymous usage statistics help us understand which features are most valuable. No individual user behaviour is profiled or sold.",
      },
      {
        subtitle: "Advertising",
        text: "Traksta displays ads served by Google AdMob to keep core features free. We do not sell or share your personal data with advertisers. See the Advertising section below for full details.",
      },
    ],
  },
  {
    id: "location",
    icon: "MapPin",
    title: "Location Data Details",
    color: "#AAFF00",
    content: [
      {
        subtitle: "When Location is Accessed",
        text: "Location is accessed only while you are actively using the app to generate or follow a route. We request 'While Using the App' permission on iOS and do not request background location unless you explicitly enable live tracking.",
      },
      {
        subtitle: "How Location is Stored",
        text: "Real-time GPS coordinates used for route generation are ephemeral — they exist only for the duration of the computation and are not written to persistent storage on our servers.",
      },
      {
        subtitle: "Revoking Access",
        text: "You may revoke location permissions at any time via iOS Settings → Privacy & Security → Location Services → Traksta. Note that revoking location access will prevent core route generation functionality from working.",
      },
    ],
  },
  {
    id: "data-security",
    icon: "Lock",
    title: "Data Security",
    color: "#0CCFDF",
    content: [
      {
        subtitle: "Encryption",
        text: "All data transmitted between the Traksta app and our servers is encrypted using industry-standard TLS 1.2 or higher. We do not transmit sensitive personal data in plain text.",
      },
      {
        subtitle: "Access Controls",
        text: "Access to any server-side data is strictly limited to authorised Traksta personnel. We employ role-based access controls and audit logging.",
      },
      {
        subtitle: "Security Incidents",
        text: "In the unlikely event of a data breach that affects your personal information, we will notify you as required by applicable law within the appropriate timeframe.",
      },
    ],
  },
  {
    id: "third-parties",
    icon: "Globe",
    title: "Third-Party Services",
    color: "#39D353",
    content: [
      {
        subtitle: "Mapping Services",
        text: "Traksta uses mapping APIs to render routes. These services may receive your approximate area (bounding box) to serve map tiles but do not receive your precise coordinates or any identifiable information from us.",
      },
      {
        subtitle: "Analytics",
        text: "We may use privacy-focused, cookieless analytics tools to understand aggregate usage patterns. These tools are configured to anonymise all data before transmission.",
      },
      {
        subtitle: "Apple App Store",
        text: "Traksta is distributed via the Apple App Store. Apple's own privacy practices govern data they collect as part of the distribution and payment process. Please refer to Apple's Privacy Policy for details.",
      },
      {
        subtitle: "Google AdMob",
        text: "Traksta uses Google AdMob to serve in-app advertising. AdMob is a third-party service governed by Google's Privacy Policy. See the Advertising section below for details on what is collected and how you can control it.",
      },
    ],
  },
  {
    id: "advertising",
    icon: "Megaphone",
    title: "Advertising",
    color: "#AAFF00",
    content: [
      {
        subtitle: "Google AdMob",
        text: "Traksta uses Google AdMob to display ads within the app. AdMob may collect certain device and usage information — such as a device advertising identifier, IP address, and coarse location — to serve, measure, and report on ads, including limited personalisation where permitted by your device settings. This information is collected and processed by Google under Google's privacy practices, not Traksta.",
      },
      {
        subtitle: "Controlling Ad Personalisation",
        text: "You can limit or reset ad personalisation at any time. On iOS, open Settings → Privacy & Security → Apple Advertising to limit ad tracking, or reset your advertising identifier. On Android, go to Settings → Privacy → Ads to opt out of ad personalisation or reset your advertising ID. You can also manage your preferences directly via Google's Ads Settings page.",
      },
      {
        subtitle: "What We Do Not Share",
        text: "Traksta does not share your precise location, generated routes, or personal information with AdMob or any other ad network for ad targeting. Ads are served based on Google's own signals and device settings — not your activity within Traksta.",
      },
    ],
  },
  {
    id: "your-rights",
    icon: "Shield",
    title: "Your Rights",
    color: "#AAFF00",
    content: [
      {
        subtitle: "Access & Portability",
        text: "You have the right to request a copy of any personal data we hold about you. To make such a request, contact us at the email address below.",
      },
      {
        subtitle: "Deletion",
        text: "You may request the deletion of your data at any time. Because Traksta does not require account creation, there is typically no persistent personal data held on our servers to delete. Anonymous usage statistics cannot be individually identified or deleted.",
      },
      {
        subtitle: "Objection",
        text: "You have the right to object to the processing of your data. You can withdraw consent for location access at any time via your device settings.",
      },
    ],
  },
  {
    id: "data-retention",
    icon: "Trash2",
    title: "Data Retention",
    color: "#0CCFDF",
    content: [
      {
        subtitle: "Location Data",
        text: "Real-time location data is not retained. Once used for route computation, it is discarded immediately.",
      },
      {
        subtitle: "Anonymous Analytics",
        text: "Aggregated, anonymous usage data is retained for up to 24 months to understand long-term trends, then permanently deleted.",
      },
      {
        subtitle: "Support Correspondence",
        text: "If you contact us via email, we retain your correspondence for up to 12 months to ensure continuity of support, then delete it.",
      },
    ],
  },
  {
    id: "children",
    icon: "Bell",
    title: "Children's Privacy",
    color: "#39D353",
    content: [
      {
        subtitle: "Age Requirement",
        text: "Traksta is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided personal information to us, please contact us immediately and we will delete it.",
      },
    ],
  },
  {
    id: "contact",
    icon: "Mail",
    title: "Contact Us",
    color: "#0CCFDF",
    content: [
      {
        subtitle: "Privacy Questions",
        text: "If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:",
      },
    ],
    contactEmail: SUPPORT_EMAIL,
  },
] as const;

export const termsUpdated = "June 2025";

export const termsSections = [
  {
    title: "Acceptance of Terms",
    text: "By downloading, installing, or using Traksta, you agree to be bound by these Terms of Service. If you do not agree to all terms, please do not use the application.",
  },
  {
    title: "Use of Service",
    text: "Traksta provides AI-assisted route generation for running and walking activities. Routes are generated algorithmically and should always be used with your own personal judgment regarding safety, terrain, and local conditions.",
  },
  {
    title: "Safety Disclaimer",
    text: "Routes generated by Traksta are provided for informational and recreational purposes only. Traksta does not guarantee the safety, accessibility, legal permissibility, or suitability of any generated route. Always check local regulations, weather conditions, and your own fitness level before following any route.",
  },
  {
    title: "Intellectual Property",
    text: "The Traksta name, logo, app design, and all associated content are the intellectual property of Traksta and are protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without explicit written permission.",
  },
  {
    title: "Limitation of Liability",
    text: "To the fullest extent permitted by applicable law, Traksta shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from: (a) your use of or inability to use the app; (b) injuries or accidents while following a generated route; (c) inaccuracies in route distance or navigation.",
  },
  {
    title: "Modifications to the Service",
    text: "Traksta reserves the right to modify, suspend, or discontinue any aspect of the service at any time without prior notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation.",
  },
  {
    title: "Changes to Terms",
    text: "We may revise these Terms of Service at any time. Updated terms will be made available within the app and on this page with a revised effective date. Continued use of the app after changes constitutes acceptance of the new terms.",
  },
  {
    title: "Governing Law",
    text: "These Terms shall be governed by and construed in accordance with applicable law. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the relevant courts.",
  },
  {
    title: "Contact",
    text: "For questions about these Terms, please contact us at hello@traksta.app.",
    hasEmail: true,
  },
] as const;

export const supportChannels = [
  {
    icon: "Mail",
    title: "Email us",
    value: SUPPORT_EMAIL,
    href: `mailto:${SUPPORT_EMAIL}`,
  },
  {
    icon: "Smartphone",
    title: "Get the app",
    value: "Available on iOS",
    href: APP_STORE_URL,
    external: true,
  },
  {
    icon: "Clock",
    title: "Response time",
    value: "Within 48 hours",
    href: null,
  },
] as const;

export const faqs = [
  {
    q: "What is Traksta?",
    a: "Traksta is a route-generation app that turns any distance into a perfectly optimized, instantly navigable path for running, walking, and cycling.",
  },
  {
    q: "Where can I download Traksta?",
    a: "Traksta is available on the App Store for iPhone. Tap Available on iOS anywhere on this site to open the listing.",
  },
  {
    q: "Does Traksta work on Apple Watch?",
    a: "Yes. Traksta supports watchOS so you can generate routes and track activities from your wrist — your iPhone can stay in your pocket.",
  },
  {
    q: "How does route generation work?",
    a: "Pick your distance and Traksta builds an optimized loop on real roads, trails, and paths near you, typically within about 2% of your target distance.",
  },
  {
    q: "Is Traksta free?",
    a: "Core route generation is free to use. Some features may include advertising; see our Privacy Policy for how ads are handled.",
  },
  {
    q: "How do I contact support?",
    a: `Email us at ${SUPPORT_EMAIL}. We aim to reply within 48 hours on business days.`,
  },
] as const;
