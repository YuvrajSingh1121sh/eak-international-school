// Fictional data repository for EAK International School
// "Where Curiosity Becomes Excellence"

export const schoolInfo = {
  name: "EAK International School",
  shortName: "EAK",
  tagline: "Where Curiosity Becomes Excellence",
  established: 1998,
  motto: "Sapientia, Virtus, Veritas (Wisdom, Virtue, Truth)",
  affiliation: "Cambridge International (IGCSE & A-Levels) & IB World School Candidate",
  boardAffiliationId: "CIE-INT-89421 / IB-004918",
  address: {
    street: "142 Royal Palm Boulevard, Oakridge Hills",
    city: "Metropolis",
    state: "State of Serenia",
    postalCode: "FC 90210",
    country: "Fictional Commonwealth",
  },
  contact: {
    mainPhone: "+1 (800) 555-0199",
    admissionsPhone: "+1 (800) 555-0142",
    emergencyPhone: "+1 (800) 555-0911",
    generalEmail: "info@eak-international.edu",
    admissionsEmail: "admissions@eak-international.edu",
    principalEmail: "principal.office@eak-international.edu",
    officeHours: "Monday – Friday: 8:00 AM – 4:30 PM | Saturday: 9:00 AM – 1:00 PM (By Appointment)",
    visitingHours: "Tuesday & Thursday: 9:30 AM – 11:30 AM & 2:00 PM – 3:30 PM",
  },
  socials: {
    facebook: "https://facebook.com/eak-international-school",
    instagram: "https://instagram.com/eak_international",
    linkedin: "https://linkedin.com/school/eak-international",
    youtube: "https://youtube.com/@eak_internationalschool",
    x: "https://x.com/eak_school",
  },
  accreditations: [
    { name: "Cambridge Assessment International Education", code: "Curricular Pathway (Illustrative)" },
    { name: "International Baccalaureate (IB) Candidate", code: "PYP & DP Stream" },
    { name: "Council of International Schools (CIS)", code: "Member School" },
    { name: "Eco-Schools Green Flag Award", code: "Excellence in Sustainability" },
  ],
  stats: [
    { label: "Years of Heritage", value: "28+", desc: "Nurturing global changemakers since 1998" },
    { label: "Student-Faculty Ratio", value: "1:10", desc: "Personalized mentorship and tailored support" },
    { label: "University Placement Rate", value: "98%", desc: "Acceptances across premier international & national universities" },
    { label: "Lush Green Campus", value: "18 Acres", desc: "Eco-certified sustainable sports & learning spaces" },
    { label: "Student Nationalities", value: "38+", desc: "A vibrant multi-cultural learning community" },
    { label: "Clubs & Activities", value: "45+", desc: "From AI Robotics and Model UN to Equestrian Sports" }
  ]
};

export const whyChooseUs = [
  {
    id: "academic-rigor",
    icon: "GraduationCap",
    title: "Dual International Curricula",
    summary: "Seamless integration of Cambridge IGCSE / A-Levels and IB frameworks, designed to develop deep inquiry, analytical reasoning, and global fluency.",
    badge: "Academics"
  },
  {
    id: "faculty-excellence",
    icon: "Award",
    title: "World-Class Mentorship",
    summary: "Over 85% of our faculty hold advanced master’s or doctoral degrees from premier universities, with certified international educator training.",
    badge: "Faculty"
  },
  {
    id: "holistic-spaces",
    icon: "Trees",
    title: "18-Acre Green Campus",
    summary: "Purpose-built architecture featuring solar-powered energy, outdoor learning amphitheaters, and biodiverse botanical research gardens.",
    badge: "Campus"
  },
  {
    id: "future-skills",
    icon: "Cpu",
    title: "STEAM & AI Innovation Labs",
    summary: "Hands-on robotics, IoT, 3D rapid prototyping, and algorithmic thinking introduced progressively from primary through senior grades.",
    badge: "Technology"
  },
  {
    id: "pastoral-care",
    icon: "HeartHandshake",
    title: "Pastoral Care & Well-being",
    summary: "Structured emotional intelligence counseling, dedicated house masters, and individualized student welfare frameworks.",
    badge: "Wellbeing"
  },
  {
    id: "global-pathways",
    icon: "Globe",
    title: "Dedicated University Counseling",
    summary: "Full-time college counselors guide students through portfolio development, standardized test mastery, and international scholarship applications.",
    badge: "Future Ready"
  }
];

export const academicStages = [
  {
    id: "primary",
    name: "Primary Years",
    grades: "Grades 1 – 5",
    ageRange: "Ages 6 to 11 Years",
    tagline: "Igniting Wonder, Foundational Fluency & Joy of Learning",
    heroImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    description: "Our Primary curriculum fosters foundational mastery in language literacy, mathematical problem solving, scientific discovery, and expressive arts through active, inquiry-based play and guided exploration.",
    curriculumFramework: "Cambridge Primary & Inquiry-Driven Exploratory Curriculum",
    focusAreas: [
      "Phonics, Creative Writing & Multilingual Foundations",
      "Singapore-style Concrete-Pictorial-Abstract Mathematics",
      "Hands-on Nature & Discovery Science Labs",
      "Visual Arts, Oratory, Choir & World Percussion",
      "Early Computational Logic & Digital Literacy"
    ],
    studentLife: "Junior Athletics Day, Discovery Science Fair, Annual Storyteller’s Guild, and Community Clean-up Drives.",
    assessment: "Formative milestones, observational portfolios, and celebratory student-led conferences without high-stakes testing anxiety."
  },
  {
    id: "middle",
    name: "Middle School",
    grades: "Grades 6 – 8",
    ageRange: "Ages 11 to 14 Years",
    tagline: "Bridging Curiosity to Critical Inquiry & Independence",
    heroImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    description: "Middle school marks the crucial transition to rigorous discipline-specific conceptual learning, collaborative team research, analytical writing, and self-directed personal accountability.",
    curriculumFramework: "Cambridge Lower Secondary & Interdisciplinary STEAM Modules",
    focusAreas: [
      "Discrete Sciences: Physics, Chemistry & Cell Biology",
      "Advanced Algebraic Reasoning, Geometry & Data Analytics",
      "World History, Comparative Geography & Civic Studies",
      "Second Language Fluency (French, Spanish, Mandarin, or German)",
      "Design Technology, Microcontrollers & Algorithmic Thinking"
    ],
    studentLife: "Junior Model UN, Inter-House Debates, Robotics League, Orchestra, and Eco-Field Expeditions.",
    assessment: "Continuous criterion-referenced rubrics, investigative lab reports, and term-end Cambridge checkpoint assessments."
  },
  {
    id: "secondary",
    name: "Secondary School",
    grades: "Grades 9 – 10",
    ageRange: "Ages 14 to 16 Years",
    tagline: "Intellectual Rigor, Subject Mastery & IGCSE Excellence",
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    description: "Students undertake the globally recognized Cambridge International General Certificate of Secondary Education (IGCSE), combining core disciplines with personalized elective specializations.",
    curriculumFramework: "Cambridge IGCSE (10 Subject Pathways)",
    focusAreas: [
      "Extended Pure Mathematics & Additional Mathematics",
      "Triple Laboratory Sciences (Physics, Chemistry, Biology)",
      "Economics, Business Studies, Accounting & Global Perspectives",
      "Computer Science with Python & Data Structures",
      "English First Language, World Literature & Modern Languages"
    ],
    studentLife: "Duke of Edinburgh Award, National Youth Parliament, TEDxYouth@EAK, and Varsity Sports Teams.",
    assessment: "External Cambridge International Board Examinations with rigorous internal mock assessments and moderation."
  },
  {
    id: "senior",
    name: "Senior Secondary",
    grades: "Grades 11 – 12",
    ageRange: "Ages 16 to 18 Years",
    tagline: "Pre-University Distinction, Leadership & Global Destiny",
    heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    description: "A transformative pre-university collegiate program preparing graduates for premier worldwide institutions through rigorous Cambridge International A-Levels and IB Diploma pathways.",
    curriculumFramework: "Cambridge International A-Levels / Pre-University Advanced Track",
    focusAreas: [
      "Higher Level STEM: Advanced Calculus, Mechanics, Molecular Biology",
      "Humanities & Commerce: Macroeconomics, International Relations, Psychology",
      "Independent Extended Research Project (Cap-Stone Thesis)",
      "University Seminar Series & Guest Lectures with Global Scholars",
      "SAT / ACT / IELTS & Specialized University Entrance Test Coaching"
    ],
    studentLife: "Student Council Executive, Lead MUN Secretariat, Senior Capstone Symposium, and Social Impact Fellowships.",
    assessment: "Final Cambridge A-Level certifications, predicted grade portfolios, and global university admissions transcripts."
  }
];

export const facilitiesData = [
  {
    id: "smart-classrooms",
    title: "Interactive Smart Classrooms",
    category: "Learning Spaces",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Ergonomic, sunlit spaces fitted with 86-inch 4K interactive digital touch panels and modular collaborative seating.",
    fullDesc: "All 64 classrooms across our campus are engineered for participatory learning. High-speed optical mesh WiFi, anti-glare interactive Clevertouch panels, acoustic dampening wall panels, and dynamic furniture allow instructors to toggle instantly between lectures, circle discussions, and small-group breakout pods.",
    capacity: "24 Students per Classroom",
    features: ["86-inch 4K UHD Interactive Panels", "Modular Ergonomic Desks", "Circadian LED Lighting", "Integrated Audio Amplification"]
  },
  {
    id: "science-labs",
    title: "Advanced Science Laboratories",
    category: "Laboratories",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Three university-grade laboratories for Physics, Chemistry, and Biology equipped with advanced sensor technology.",
    fullDesc: "Our science complex adheres to international safety standards with emergency deluge showers, eye-wash stations, and laminar fume hoods. Students engage in practical molecular biology, analytical titration, spectroscopy, and mechanics investigations under professional supervision.",
    capacity: "32 Workstations per Lab",
    features: ["Digital Vernier Caliper Probes & Sensors", "Laminar Fume Extraction Hoods", "Compound Binocular Microscopes", "Dedicated Chemical Storage Vault"]
  },
  {
    id: "computer-robotics",
    title: "Innovation Hub & Robotics Lab",
    category: "Laboratories",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "A state-of-the-art makerspace featuring 3D rapid printers, Arduino/Raspberry Pi workbenches, and AI rendering stations.",
    fullDesc: "Designed to turn ideas into prototypes, our Innovation Hub immerses students in coding, robotics engineering, and CAD modeling. From primary Lego WeDo to senior VEX Robotics and drone avionics, students build real solutions for sustainable challenges.",
    capacity: "36 Workstations",
    features: ["Dual-Extrusion 3D Printers", "VEX & FIRST Robotics Arenas", "VR/AR Spatial Computing Kits", "Dedicated Gigabit Fibre Network"]
  },
  {
    id: "library-media",
    title: "Athenaeum Central Library & Media Centre",
    category: "Learning Spaces",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "A quiet haven holding 35,000+ volumes, access to JSTOR & EBSCO digital databases, and private study carrels.",
    fullDesc: "The two-story Athenaeum library is the intellectual heart of EAK. It combines traditional physical literature with cutting-edge academic repository subscriptions. Dedicated junior reading corners, sound-isolated media recording booths, and research librarians assist students in citation and archival studies.",
    capacity: "180 Readers Simultaneous",
    features: ["35,000+ Curated Print Titles", "JSTOR & Britannica Digital Subscriptions", "Quiet Individual Study Carrels", "Podcasting & Media Production Studio"]
  },
  {
    id: "sports-complex",
    title: "Olympic-Standard Sports Arena",
    category: "Sports & Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "FIFA-standard turf pitch, 400m synthetic running track, 3 indoor maple wood basketball courts, and tennis courts.",
    fullDesc: "Physical vitality is vital for intellectual sharpness. Our multi-sport arena is staffed by certified NIS national coaches for athletics, soccer, basketball, lawn tennis, and badminton. Floodlit courts enable evening inter-school leagues and seasonal tournaments.",
    capacity: "1,200 Spectator Bleachers",
    features: ["FIFA 2-Star Synthetic Soccer Turf", "400m All-Weather Polyurethane Track", "3 Hardcourt Tennis Courts", "Maple-Floored Indoor Badminton Pavilion"]
  },
  {
    id: "aquatic-centre",
    title: "Heated Indoor Aquatic Centre",
    category: "Sports & Fitness",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "A semi-Olympic 25-meter 8-lane heated swimming pool with ozone purification and dedicated learn-to-swim splash pools.",
    fullDesc: "Swimming is mandatory across the primary curriculum and a premier varsity sport for senior athletes. Our aquatic facility boasts year-round climate control, non-chlorine ozone filtration for sensitive skin, and full-time certified lifeguards and swim trainers.",
    capacity: "8 Competition Lanes",
    features: ["Ozone Eco-Purification System", "Sub-surface Touch Timing Pads", "Separate Junior Safety Pool", "On-deck First Aid Station"]
  },
  {
    id: "auditorium",
    title: "800-Seat Grand Performing Arts Hall",
    category: "Arts & Culture",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Acoustically calibrated auditorium hosting symphonic concerts, theatrical productions, Model UNs, and guest lectures.",
    fullDesc: "Equipped with professional Meyer Sound acoustic arrays, computerized LED moving head lighting, automated stage rigging, and backstage green rooms, our auditorium provides a real-world stage for student orators, musicians, and thespians.",
    capacity: "800 Tiered Velvet Seats",
    features: ["Motorized Fly Lofts & Stage Rigging", "Steinway Concert Grand Piano", "Broadcast-Grade 4K Projection", "Individual Green Rooms & Wardrobe"]
  },
  {
    id: "cafeteria",
    title: "The Oasis Farm-to-Table Dining Hall",
    category: "Campus Living",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Nutritionally balanced, hygienic multi-cuisine dining designed by registered pediatric clinical nutritionists.",
    fullDesc: "Serving wholesome breakfast, hot buffet lunches, and afternoon snacks. We source fresh organic greens directly from our student-tended hydroponic gardens and local farm partners. Strict allergen separation, ISO-22000 certified hygiene kitchens, and rotational world menus keep dining joyful and healthy.",
    capacity: "550 Students per Sitting",
    features: ["Certified Nut-Free & Halal Options", "Daily Fresh Salad & Fruit Bars", "Hydroponic Garden Kitchen Source", "HACCP Certified Food Preparation"]
  },
  {
    id: "medical-infirmary",
    title: "Sanitas 24/7 Campus Medical Care Unit",
    category: "Campus Living",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "A fully staffed healthcare facility with registered nurses, visiting pediatricians, and an on-campus ambulance.",
    fullDesc: "Student wellness is our highest imperative. The Sanitas unit features 6 observation beds, oxygen concentrators, automated external defibrillators (AEDs), and secure digital health record management to track immunizations and dietary sensitivities seamlessly.",
    capacity: "6 Recovery Observation Beds",
    features: ["Full-time Certified Pediatric Nurses", "Visiting Consultant Pediatricians", "On-campus Emergency Transport", "Digital Health & Allergy Tracking"]
  },
  {
    id: "transport-fleet",
    title: "GPS-Monitored Safe Transit Fleet",
    category: "Campus Living",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "38 air-conditioned, speed-governed buses covering all major metropolitan and suburban corridors.",
    fullDesc: "Parents enjoy real-time peace of mind via the school bus tracking mobile application. Each vehicle is equipped with dual CCTV cameras, fire extinguishers, first aid kits, speed limiters, seatbelts on every chair, and a verified female attendant on every route.",
    capacity: "38 Modern Coach Buses",
    features: ["Real-time Parent Mobile App Tracking", "CCTV & RFID Card Tap Systems", "Verified Female Route Attendant", "Strict Speed Governors (Max 40 km/h)"]
  },
  {
    id: "hostel-proposed",
    title: "The Pavilion Boarding House (Fictional Proposed Facility)",
    category: "Campus Living",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "[Proposed Phase II Expansion] Architectural master plan for a 120-bed residential lodge for senior secondary scholars.",
    fullDesc: "Please Note: This is an architectural proposal under consideration for Phase II campus expansion and is not yet operational. The planned concept includes twin-sharing ensuite suites, communal study lounges, resident pastoral faculty quarters, and weekend experiential excursions.",
    capacity: "120 Residential Scholars (Proposed)",
    features: ["Fictional Proposed Concept Only", "Architectural Phase II Plan", "Twin-Sharing Study Suites", "Resident Faculty Mentors"],
    isProposed: true
  }
];

export const achievements = [
  {
    metric: "94.8%",
    title: "Cambridge IGCSE Distinction",
    desc: "Of all exam entries achieved A* or A grades in the June 2025 examinations series."
  },
  {
    metric: "1st Place",
    title: "National Youth STEM Conclave",
    desc: "Awarded top honors for our Senior Robotics Team's automated ocean filtration prototype."
  },
  {
    metric: "$4.2M",
    title: "Merit Scholarships Earned",
    desc: "Awarded to the graduating Class of 2025 across prestigious global universities."
  },
  {
    metric: "12 Medals",
    title: "Regional Interschool Athletics",
    desc: "Golden finishes in track 100m, high jump, 4x100m relay, and senior tennis doubles."
  },
  {
    metric: "Best Delegation",
    title: "International Model United Nations",
    desc: "Outstanding diplomat awards conferred at Geneva Global Youth Assembly 2025."
  },
  {
    metric: "Gold Honors",
    title: "Regional Youth Math Challenge",
    desc: "Six EAK scholars placed with distinction in the Regional Mathematics Invitational."
  }
];

export const leadershipTeam = [
  {
    name: "Dr. Elizabeth Vance",
    role: "Head of School & Principal",
    qualifications: "D.Phil. in Education (Oxford), M.Ed. (Harvard), B.Sc. (Bristol)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    message: "At EAK International School, we consider education not as an accumulation of facts, but as the kindling of a flame that never ceases to burn. Our community champions intellectual bravery tempered with boundless compassion. Here, children do not merely memorize the world; they prepare to shape it with courage and integrity.",
    bio: "With over 24 years of international school leadership across the United Kingdom, Switzerland, and Singapore, Dr. Vance has championed inquiry-based pedagogical reform, student well-being paradigms, and world-class faculty development."
  },
  {
    name: "Marcus Aurelius Thorne",
    role: "Dean of Academics & IGCSE Coordinator",
    qualifications: "M.Sc. Physics (Imperial College London), PGCE (Cambridge)",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    bio: "Marcus oversees curriculum coherence across all four academic stages, ensuring rigorous Cambridge assessment standards while fostering creative problem-solving across disciplines."
  },
  {
    name: "Dr. Ananya Roy",
    role: "Head of Primary Years & Early Learning",
    qualifications: "Ph.D. Developmental Psychology, M.A. Elementary Education (Columbia)",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80",
    bio: "A renowned advocate for experiential learning, Dr. Roy crafts primary environments where every young learner feels safe to take creative risks and discover their unique voice."
  },
  {
    name: "David Sterling",
    role: "Director of Student Life & Pastoral Care",
    qualifications: "M.A. Counseling Psychology (Melbourne), B.Ed. (Toronto)",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "David anchors our school-wide mentorship and emotional well-being frameworks, ensuring every pupil is supported socially, emotionally, and physically."
  }
];

export const eventsAndNotices = [
  {
    id: "CIRC-2026-089",
    type: "notice",
    category: "Academic",
    title: "Mid-Term Examination Schedule & Syllabus Blueprint (Grades 6–12)",
    date: "2026-10-18",
    displayDate: "October 18, 2026",
    summary: "Comprehensive timetable, laboratory practical schedules, and revision materials for the upcoming Mid-Term assessments.",
    content: "All parents and students of Grades 6 to 12 are requested to download the Mid-Term Assessment Schedule. Examinations commence on Monday, November 3, 2026. Hall tickets will be issued through the student portal by October 25. Students requiring study carrels in the Athenaeum library may reserve slots through their house masters.",
    targetAudience: "Grades 6–12 Parents & Students",
    attachmentName: "MidTerm_Exam_Schedule_2026.pdf",
    pinned: true
  },
  {
    id: "EVT-2026-104",
    type: "event",
    category: "Cultural",
    title: "Annual Autumn Symphony & Theatrical Gala: 'A Midsummer Dream'",
    date: "2026-10-24",
    displayDate: "October 24, 2026",
    time: "5:30 PM – 8:30 PM",
    venue: "Grand Performing Arts Auditorium",
    summary: "Our 60-piece student orchestra and Senior Drama Troupe present an evening of Shakespearean comedy and classical concerto.",
    content: "Join us for our flagship cultural evening celebrating the performing arts. Complimentary passes can be reserved through the school reception. Refreshments curated by the student culinary club will be served in the courtyard during intermission.",
    targetAudience: "All School Families & Guests",
    pinned: true
  },
  {
    id: "CIRC-2026-088",
    type: "notice",
    category: "Admissions",
    title: "Admissions Cycle 2026–2027: Priority Window for Siblings & Early Applications",
    date: "2026-10-12",
    displayDate: "October 12, 2026",
    summary: "Priority seat allocations for existing siblings and early applicants are now open for Nursery through Grade 11.",
    content: "Admissions for the 2026–2027 academic session are officially underway. Existing families seeking admission for younger siblings must submit digital forms before November 15 to secure priority placement. Open campus tour dates have been announced on the admissions portal.",
    targetAudience: "Prospective & Current Parents",
    attachmentName: "Admissions_Guide_2026_27.pdf",
    pinned: false
  },
  {
    id: "EVT-2026-105",
    type: "event",
    category: "Sports",
    title: "Inter-School Invitational Aquatic Championship 2026",
    date: "2026-11-05",
    displayDate: "November 05, 2026",
    time: "8:00 AM – 4:00 PM",
    venue: "Heated Indoor Aquatic Centre",
    summary: "Over 18 international schools compete across 50m freestyle, backstroke, breaststroke, and medley relays.",
    content: "Cheer on the EAK Dolphins swim team as we host the 14th Annual Regional Swimming Gala. Electronic touch-pad timing and live scoreboard streaming will be active throughout the day.",
    targetAudience: "Sports Enthusiasts & EAK Community",
    pinned: false
  },
  {
    id: "CIRC-2026-087",
    type: "notice",
    category: "Holiday",
    title: "Mid-Term Autumn Break & Campus Maintenance Closure",
    date: "2026-10-08",
    displayDate: "October 08, 2026",
    summary: "School remains closed for students from October 27 through November 1 for the seasonal autumn holiday break.",
    content: "The school will observe Autumn Break starting Monday, October 27, 2026. Normal instructional classes will resume on Monday, November 2, 2026. Administrative offices will remain open from 9:00 AM to 1:00 PM for admissions inquiries.",
    targetAudience: "Entire School Community",
    attachmentName: "Academic_Calendar_Term1.pdf",
    pinned: false
  },
  {
    id: "EVT-2026-106",
    type: "event",
    category: "Academic",
    title: "STEAM Innovation Conclave & Robotics Expo 2026",
    date: "2026-11-14",
    displayDate: "November 14, 2026",
    time: "9:00 AM – 3:30 PM",
    venue: "Innovation Hub & Academic Quad",
    summary: "Student demonstrations of AI vision projects, autonomous rovers, hydroponics monitors, and sustainable architectural models.",
    content: "EAK scholars from Grades 4 through 12 showcase original interdisciplinary inventions. Guest keynote address by Dr. Samantha Chen, Senior Research Scientist at the Global Aerospace Institute.",
    targetAudience: "Students, Parents, Industry Mentors",
    pinned: false
  },
  {
    id: "CIRC-2026-086",
    type: "notice",
    category: "Circulars",
    title: "Mandatory Seasonal Health Advisory & Winter Uniform Transition",
    date: "2026-10-02",
    displayDate: "October 02, 2026",
    summary: "Guidelines regarding annual influenza inoculations and transition to the formal winter blazer uniform starting November 10.",
    content: "As temperatures decline, students are expected to transition to the winter blazer and tie uniform by Tuesday, November 10. The Sanitas Medical Unit is offering complimentary seasonal flu vaccinations for all registered students from next week with parental consent.",
    targetAudience: "All Parents",
    attachmentName: "Uniform_Code_Health_Advisory.pdf",
    pinned: false
  },
  {
    id: "EVT-2026-107",
    type: "event",
    category: "Academic",
    title: "Cambridge A-Level & University Pathways Parent Seminar",
    date: "2026-11-20",
    displayDate: "November 20, 2026",
    time: "6:00 PM – 7:45 PM",
    venue: "Athenaeum Central Library Conference Room",
    summary: "Strategic insight into subject selection, UCAS applications, Common App essays, and early decision timelines.",
    content: "Hosted by our Dean of Academics and Senior College Counseling Team. Designed for families of Grade 10 and 11 students preparing for university applications in the US, UK, Canada, and Europe.",
    targetAudience: "Grade 10 & 11 Parents",
    pinned: false
  },
  {
    id: "CIRC-2026-085",
    type: "notice",
    category: "Circulars",
    title: "Revised School Bus Routes & Real-Time Tracking App Update",
    date: "2026-09-28",
    displayDate: "September 28, 2026",
    summary: "Route optimization for Corridor 4 & Corridor 7 with enhanced geo-fenced parent notification alerts.",
    content: "To improve pickup punctuality, bus routes 12, 14, and 22 have been recalibrated. Parents are requested to update the EAK SafeTransit mobile app to version 3.4 for enhanced live telemetry.",
    targetAudience: "Bus Commuter Families",
    attachmentName: "Transport_Route_Guide_Oct2026.pdf",
    pinned: false
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Moving our children across continents was daunting, but EAK made the transition seamless. The teachers recognized our daughter's fascination with astrophysics on week one and connected her to the senior robotics mentors. The warmth and intellectual standard here are truly peerless.",
    author: "Elena Rostova & Dr. Vikram Mehta",
    role: "Parents of Grade 7 & Grade 11 Scholars",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    quote: "EAK doesn't just teach you how to pass an exam; it teaches you how to think, question assumptions, and debate with empathy. Leading the Model UN delegation gave me the confidence to stand before international leaders and advocate for environmental policy.",
    author: "Kavya S. Narang",
    role: "Head Prefect, Class of 2025 (Matriculating at Stanford University)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    quote: "What sets EAK apart is the balance. My son trains for competitive national swimming four mornings a week, yet his academic mentors ensure he never falls behind in his Cambridge sciences. It’s an environment that champions the whole child.",
    author: "Robert Sterling",
    role: "Parent of Grade 9 Scholar & Athletic Team Captain",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];

export const admissionsSteps = [
  {
    step: "01",
    name: "Enquiry & Campus Discovery",
    desc: "Submit an online enquiry or schedule a guided walking tour of our 18-acre green campus with an admissions counselor.",
    action: "Schedule Campus Visit"
  },
  {
    step: "02",
    name: "Online Application & Records",
    desc: "Complete the online application form and upload previous academic transcripts, birth verification, and teacher recommendations.",
    action: "Submit Application"
  },
  {
    step: "03",
    name: "Interaction & Assessment",
    desc: "Informal interactive readiness dialogue for Primary Years, or age-appropriate diagnostic assessment in English & Mathematics for Grades 6–11.",
    action: "Readiness Assessment"
  },
  {
    step: "04",
    name: "Selection & Offer of Place",
    desc: "The Admissions Committee reviews the applicant's holistic portfolio and issues a formal letter of acceptance within 5 business days.",
    action: "Admissions Offer"
  },
  {
    step: "05",
    name: "Enrollment & Orientation",
    desc: "Finalize document verification, complete enrollment formalities, and attend the welcoming New Scholar Induction Program.",
    action: "Welcome to EAK"
  }
];

export const eligibilityCriteria = [
  {
    stage: "Early Years / Kindergarten",
    ageCutoff: "3 to 5 Years as of September 1",
    requirements: "Developmental readiness, basic communicative expression, friendly interactive play session."
  },
  {
    stage: "Primary Years (Grades 1 – 5)",
    ageCutoff: "6 to 10 Years as of September 1",
    requirements: "Past 2 years academic progress reports, foundational literacy and numeracy assessment, student-family interaction."
  },
  {
    stage: "Middle School (Grades 6 – 8)",
    ageCutoff: "11 to 13 Years as of September 1",
    requirements: "Prior school transcripts, standardized Cambridge diagnostic test in English, Mathematics, and General Science."
  },
  {
    stage: "Secondary School (Grades 9 – 10)",
    ageCutoff: "14 to 15 Years as of September 1",
    requirements: "Minimum 75% aggregate or equivalent in Grade 8/9, Cambridge entrance assessment, personal statement essay."
  },
  {
    stage: "Senior Secondary (Grades 11 – 12)",
    ageCutoff: "16+ Years as of September 1",
    requirements: "Official IGCSE / Board examination results with minimum 5 A*-B grades, interview with Dean of Academics, portfolio review."
  }
];

export const requiredDocuments = [
  "Official Birth Certificate or Passport Bio-Data page copy",
  "Official academic transcripts and report cards for the preceding 2 academic years",
  "Transfer / Migration Certificate from previous accredited school (at time of joining)",
  "Confidential teacher recommendation or conduct certificate from current school principal",
  "Comprehensive immunization and medical fitness record with blood group declaration",
  "Four recent passport-sized color photographs of the student and two of each parent/guardian",
  "Proof of residential address (utility bill, lease deed, or consular residence proof)"
];

export const admissionDates = [
  {
    event: "Admissions Portal Opens for Academic Year 2026–2027",
    date: "October 1, 2026",
    status: "Active"
  },
  {
    event: "Priority Sibling & Early-Bird Registration Deadline",
    date: "November 15, 2026",
    status: "Upcoming"
  },
  {
    event: "First Round of Student Readiness Interactions & Assessments",
    date: "December 05 – 12, 2026",
    status: "Upcoming"
  },
  {
    event: "First List of Selected Scholars Released",
    date: "January 10, 2027",
    status: "Upcoming"
  },
  {
    event: "General Admissions & Campus Open House Day",
    date: "January 24, 2027",
    status: "Upcoming"
  },
  {
    event: "New Scholar Welcome & Academic Orientation Day",
    date: "August 18, 2027",
    status: "Scheduled"
  }
];

export const admissionFaqs = [
  {
    q: "What is the primary medium of instruction and curriculum framework?",
    a: "English is the sole medium of instruction across all academic disciplines. We offer the Cambridge Assessment International Education curriculum from Primary through Senior Secondary (IGCSE and International A-Levels), supplemented with STEAM interdisciplinary learning modules."
  },
  {
    q: "How does EAK support students who are non-native English speakers?",
    a: "We maintain a dedicated English as an Additional Language (EAL) department. Specialized language specialists provide targeted small-group pull-out and in-class scaffolding until scholars reach native academic fluency."
  },
  {
    q: "What is the average class size and student-to-teacher ratio?",
    a: "We cap primary classrooms at 20-22 pupils and secondary classes at 24. With co-teachers and specialist faculty, our overall student-to-teacher ratio across the campus is an enviable 1:10."
  },
  {
    q: "Are merit-based scholarships or financial fee concessions available?",
    a: "Yes. EAK awards 'The Founder's Crest Scholarship' to candidates entering Grades 9 and 11 who demonstrate extraordinary academic merit, national-level athletic distinction, or exceptional creative artistry. Scholarships cover between 25% and 75% of tuition fees."
  },
  {
    q: "Is school transportation compulsory, and how safe is it?",
    a: "School bus transportation is optional. All 38 school coaches feature speed governors, seatbelts, dual CCTV surveillance, GPS live tracking via a parent smartphone app, and a verified female attendant on board."
  },
  {
    q: "Does EAK provide residential or boarding facilities for outstation students?",
    a: "EAK is currently a day school with extended day enrichment programs. A proposed 120-bed residential lodge ('The Pavilion') is under architectural review as part of our fictional Phase II campus masterplan, but is not yet operational."
  }
];

export const schoolTimeline = [
  { year: "1998", title: "Founding Vision", desc: "Established with 4 heritage classrooms and 48 founding scholars with a commitment to inquiry-driven learning." },
  { year: "2005", title: "Cambridge Accreditation", desc: "Received official Cambridge International Examination Centre status and inaugurated the dedicated science wing." },
  { year: "2012", title: "18-Acre Green Campus Expansion", desc: "Relocated to the state-of-the-art Oakridge Hills campus, introducing the Olympic sports complex and Athenaeum library." },
  { year: "2019", title: "STEAM & Robotics Innovation Hub", desc: "Launched university-grade makerspaces, 3D prototyping labs, and solar-paneled green campus infrastructure." },
  { year: "2024", title: "Silver Jubilee Celebration", desc: "Celebrated 25 years of educational distinction, alumni achievements, and sustainable learning innovation." },
  { year: "2026", title: "Future-Ready Next Generation", desc: "Pioneering AI literacy, ethical leadership, and sustainable campus development for 1,450+ scholars." }
];
