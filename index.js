// Zenetrix - II BCA A Database and Scripting System

// 1. Student Database
const studentsData = [
  { register_no: "25UBC101", name: "AARUSH MANOJ", email: "aarush.25ubc101@mariancollege.org", bio: "Tech enthusiast and community leader. Active in value education and mentoring.", achievements: ["Value Education Class Leader"] },
  { register_no: "25UBC102", name: "ABHINANDHU T R", email: "abhinandhu.25ubc102@mariancollege.org", bio: "Passionate computer applications student, sportsman, and tech analyst.", achievements: ["MSL Football Champion - Team PSG (1st Prize)", "Quantum Heist 2nd Prize - Astra 10.0 Tech Fest"] },
  { register_no: "25UBC103", name: "AKSA ELIZABETH BINU", email: "aksa.25ubc103@mariancollege.org", bio: "Academic high-achiever with a deep interest in software engineering and logic design.", achievements: ["A+ Grade Holder (Semester I)"] },
  { register_no: "25UBC104", name: "ALAN ROBIN", email: "alan.25ubc104@mariancollege.org", bio: "Developer and problem-solver interested in programming languages and algorithms." },
  { register_no: "25UBC105", name: "ALEENA BINOY", email: "aleena.25ubc105@mariancollege.org", bio: "Engaged in campus activities and leadership. Enthusiastic about computing and tech innovation.", achievements: ["A Grade Holder (Semester I)", "CSM Representative"] },
  { register_no: "25UBC106", name: "AMRUTHA RATHEESH", email: "amrutha.25ubc106@mariancollege.org", bio: "Dedicated learner focused on software applications and databases." },
  { register_no: "25UBC107", name: "ANGEL ROSE SHAIBU", email: "angel.25ubc107@mariancollege.org", bio: "A grade student passionate about design, UI/UX, and front-end development.", achievements: ["A Grade Holder (Semester I)"] },
  { register_no: "25UBC108", name: "ANON JOSEPH", email: "anon.25ubc108@mariancollege.org", bio: "Tech enthusiast with strong analytical capabilities.", achievements: ["Treasure Hunt Participant - Astra 10.0 Tech Fest"] },
  { register_no: "25UBC109", name: "ARJUN S KUMAR", email: "arjun.25ubc109@mariancollege.org", bio: "Musician, sportsperson, and organizer. Passionate about web development.", achievements: ["IQAC Documentation Representative", "Marian Music Band Guitarist - Paattumaram", "Inferno Sports Day - Badminton Champion (1st Prize)", "Badminton Representative"] },
  { register_no: "25UBC110", name: "ARUNIMA BABU", email: "arunima.25ubc110@mariancollege.org", bio: "Detail-oriented programming student exploring data structures." },
  { register_no: "25UBC111", name: "ASHA BENNY", email: "asha.25ubc111@mariancollege.org", bio: "Active participant in departmental seminars and computer workshops." },
  { register_no: "25UBC112", name: "ASWIN SUDHAKARAN", email: "aswin.25ubc112@mariancollege.org", bio: "Aspiring software developer with keen interest in system architecture." },
  { register_no: "25UBC113", name: "ATHIRA ANIL", email: "athira.25ubc113@mariancollege.org", bio: "Fascinated by tech ecosystems and database designs." },
  { register_no: "25UBC114", name: "ATHIRA DAS", email: "athira.25ubc114@mariancollege.org", bio: "Analytical thinker focused on computer fundamentals and application programming." },
  { register_no: "25UBC116", name: "BEN GEORGE SABU", email: "ben.25ubc116@mariancollege.org", bio: "Academic topper and class leader. Always striving for academic excellence.", achievements: ["A+ Grade Holder (Semester I)", "Association Representative (MACS)"] },
  { register_no: "25UBC117", name: "BINITHA WILSON", email: "binitha.25ubc117@mariancollege.org", bio: "Natural leader, organizer, and class coordinator.", achievements: ["Class Representative (Girl Rep)"] },
  { register_no: "25UBC118", name: "CIS MARIA VARGHESE", email: "cis.25ubc118@mariancollege.org", bio: "Outstanding speaker and writer. Interested in public speaking and language arts.", achievements: ["A Grade Holder (Semester I)", "Malayalam Elocution - 2nd Prize (Arts Day Srishti 2025)", "Pattumala Pilgrimage Coordinator"] },
  { register_no: "25UBC119", name: "DEENA SONEY", email: "deena.25ubc119@mariancollege.org", bio: "Eco-conscious student, active in environmental campaigns.", achievements: ["Greening India's Wasteland - 1st Prize (NCC)"] },
  { register_no: "25UBC120", name: "DELLA ANN JOSHI", email: "della.25ubc120@mariancollege.org", bio: "Enthusiastic developer focusing on logic building and data management." },
  { register_no: "25UBC121", name: "DELNA BENOY", email: "delna.25ubc121@mariancollege.org", bio: "Gifted vocalist and academic topper. Active member of campus cultural teams.", achievements: ["A+ Grade Holder (Semester I)", "Group Song - 1st Prize (Arts Day Srishti 2025)", "Marian Music Band Vocalist - Paattumaram", "Light Music Participant - Causerie SB College"] },
  { register_no: "25UBC122", name: "DEVADATH SIJU", email: "devadath.25ubc122@mariancollege.org", bio: "Forever in our hearts. A talented athlete and a beloved classmate who brought joy and competitive spirit to Zenetrix.", achievements: ["MG University Roller Sports - 3rd Prize (Overall Champions Team)"], isMemorial: true },
  { register_no: "25UBC123", name: "DEVARSH S", email: "devarsh.25ubc123@mariancollege.org", bio: "All-rounder with great interest in quizzes, sports, and technical events.", achievements: ["A Grade Holder (Semester I)", "Screen Sleuths Film Quiz - 1st Prize", "Marian Quiz Club Film Quiz - 2nd Prize", "Inferno Sports Day - Carrom (Boys) Runner-Up (2nd Prize)", "Internal Navigator Carrom Champion (1st Prize)", "Finance Game Participant - Astra 10.0"] },
  { register_no: "25UBC124", name: "DHANYA LATHESH", email: "dhanya.25ubc124@mariancollege.org", bio: "Hardworking student interested in coding, system design, and mathematics." },
  { register_no: "25UBC125", name: "DHANYA V", email: "dhanya.25ubc125@mariancollege.org", bio: "Aspiring coder focusing on logic development and databases." },
  { register_no: "25UBC126", name: "ELAINE MARIA GEORGE", email: "elaine.25ubc126@mariancollege.org", bio: "Class topper, star athlete, and dancer. Represents Zenetrix at intercollegiate fests.", achievements: ["A+ Grade Holder (Semester I) - GPA 9.61", "Association Representative (MACS)", "Inferno Sports Day - 1500m Champion (1st Prize)", "Inferno Sports Day - 400m Champion (1st Prize)", "Inferno Sports Day - 4x100m Mixed Relay Champion (1st Prize)", "Inferno Sports Day - 4x100m Relay Girls Runner-Up (2nd Prize)", "Intercollegiate Dance Participant - Rajagiri College"] },
  { register_no: "25UBC127", name: "FEBI SUSAN SAJAN", email: "febi.25ubc127@mariancollege.org", bio: "A grade student and hobby photographer. Active in campus events.", achievements: ["A Grade Holder (Semester I)", "Spot Photography Participant - Causerie SB College"] },
  { register_no: "25UBC128", name: "HARINI S", email: "harini.25ubc128@mariancollege.org", bio: "Passionate about computer programming, logic design, and web tools." },
  { register_no: "25UBC129", name: "IRIS DAIN", email: "iris.25ubc129@mariancollege.org", bio: "Exceptional leader, orator, and academic topper. Active in student governance.", achievements: ["A+ Grade Holder (Semester I)", "Class Representative (Boy Rep)", "Malayalam Extempore - 3rd Prize (Srishti 2025)", "Collage Making - 2nd Prize (Srishti 2025)", "IDCC Treasurer", "Finance Game Participant - Astra 10.0", "Vision 2031 Tourism Seminar Delegate"] },
  { register_no: "25UBC130", name: "JENISHA M", email: "jenisha.25ubc130@mariancollege.org", bio: "Active organizer and member of campus student clubs.", achievements: ["Phoenix Club - First Year Representative"] },
  { register_no: "25UBC131", name: "JERIT GEORGE", email: "jerit.25ubc131@mariancollege.org", bio: "Keen movie enthusiast and programmer, passionate about logic gates and quizzes.", achievements: ["Screen Sleuths Film Quiz - 1st Prize"] },
  { register_no: "25UBC132", name: "JIBIN BENNY", email: "jibin.25ubc132@mariancollege.org", bio: "Avid football player with strong analytical and communication skills.", achievements: ["MSL Football Representative - Team AC Milan"] },
  { register_no: "25UBC133", name: "JISNA BINOY", email: "jisna.25ubc133@mariancollege.org", bio: "A grade student enthusiastic about computing concepts.", achievements: ["A Grade Holder (Semester I)"] },
  { register_no: "25UBC134", name: "JOSEPH ALEN SAJEEV", email: "joseph.25ubc134@mariancollege.org", bio: "Creative artist, mime actor, and football player. Actively represents the class in fests.", achievements: ["MSL Football Runner-Up - Team Inter Milan (2nd Prize)", "Quantum Heist 2nd Prize - Astra 10.0 Tech Fest", "CSM Kalotsavam Mime Performer", "CSM Night Camp Participant"] },
  { register_no: "25UBC135", name: "JOYAL JOSE", email: "joyal.25ubc135@mariancollege.org", bio: "Interested in networks, systems administration, and adventure activities.", achievements: ["Treasure Hunt Participant - Astra 10.0 Tech Fest"] },
  { register_no: "25UBC136", name: "KARTHIKA JAYAN", email: "karthika.25ubc136@mariancollege.org", bio: "A grade student focusing on algorithmic development.", achievements: ["A Grade Holder (Semester I)"] },
  { register_no: "25UBC137", name: "KEERTHANA HARIKUMAR", email: "keerthana.25ubc137@mariancollege.org", bio: "High academic standard. Excellent indoor sports skills.", achievements: ["A Grade Holder (Semester I)", "Inferno Sports Day - Carrom (Girls) Champion (1st Prize)"] },
  { register_no: "25UBC138", name: "LIYA LUKOSE", email: "liya.25ubc138@mariancollege.org", bio: "Fastest runner in class, dominating track events.", achievements: ["Inferno Sports Day - 100m Champion (1st Prize)", "Inferno Sports Day - 4x100m Mixed Relay Champion (1st Prize)"] },
  { register_no: "25UBC139", name: "MATHEWS BASIL", email: "mathews.25ubc139@mariancollege.org", bio: "A grade student passionate about hardware and networking systems.", achievements: ["A Grade Holder (Semester I)", "Treasure Hunt Participant - Astra 10.0 Tech Fest"] },
  { register_no: "25UBC140", name: "MIBIN SIBY", email: "mibin.25ubc140@mariancollege.org", bio: "Interested in front-end technologies and database projects." },
  { register_no: "25UBC141", name: "MOHAMED NUHAN", email: "mohamed.25ubc141@mariancollege.org", bio: "Fascinated by tech fests, coding challenges, and open-source applications." },
  { register_no: "25UBC142", name: "MUHAMMED NEBIL", email: "muhammed.25ubc142@mariancollege.org", bio: "A grade student exploring hardware diagnostics and operating systems.", achievements: ["A Grade Holder (Semester I)"] },
  { register_no: "25UBC143", name: "NADIA JALEEL", email: "nadia.25ubc143@mariancollege.org", bio: "Topper with high analytical skills, specializing in programming logic.", achievements: ["A+ Grade Holder (Semester I)"] },
  { register_no: "25UBC144", name: "NAVYA M", email: "navya.25ubc144@mariancollege.org", bio: "Diligent student with a strong focus on coding languages and software models." },
  { register_no: "25UBC145", name: "NEHA", email: "neha.25ubc145@mariancollege.org", bio: "Enthusiastic about web technologies, cloud databases, and digital platforms." },
  { register_no: "25UBC146", name: "NEHA VINOD", email: "neha.25ubc146@mariancollege.org", bio: "Creative designer, photographer, and active environmentalist.", achievements: ["A Grade Holder (Semester I)", "Sustainable Bag Making - 1st Prize", "Green Photography - 1st Prize", "Nail Art - 3rd Prize (Arts Day Srishti 2025)", "IQAC Documentation Representative", "FDSJ Treasurer"] },
  { register_no: "25UBC147", name: "RIYA ROSE MANOJ", email: "riya.25ubc147@mariancollege.org", bio: "Highly creative content developer and athlete. Excelled in state/college level events.", achievements: ["Reel Making Competition - 1st Prize", "Slogan Making - 1st Prize (Gender Equality Cell)", "Inferno Sports Day - Disc Throw Champion (1st Prize)", "Spot Photography - 2nd Prize (Causerie SB College)", "CSM Kalotsavam Group Song Performer", "CSM Night Camp Participant", "Badminton Representative"] },
  { register_no: "25UBC148", name: "SEBASTIAN GEORGE P G", email: "sebastian.25ubc148@mariancollege.org", bio: "A grade student, active volunteer, and leader in social services.", achievements: ["A Grade Holder (Semester I)", "Finance Game Participant - Astra 10.0", "CSM Representative", "Pattumala Pilgrimage Coordinator"] },
  { register_no: "25UBC149", name: "SHARON SABU", email: "sharon.25ubc149@mariancollege.org", bio: "A analytical programmer with exceptional logical reasoning abilities.", achievements: ["Quantum Heist 2nd Prize - Astra 10.0 Tech Fest"] },
  { register_no: "25UBC150", name: "SHERIN THOMAS", email: "sherin.25ubc150@mariancollege.org", bio: "Fascinated by computer algorithms, databases, and structural coding." },
  { register_no: "25UBC152", name: "SIVANANDHITHA ARUN", email: "sivanandhitha.25ubc152@mariancollege.org", bio: "Academic high-performer focusing on system coding and tech documentation.", achievements: ["A Grade Holder (Semester I)"] },
  { register_no: "25UBC153", name: "SRAVYALAKSHMI SUNIL", email: "sravyalakshmi.25ubc153@mariancollege.org", bio: "A grade student active in class seminars and presentations.", achievements: ["A Grade Holder (Semester I)"] },
  { register_no: "25UBC154", name: "SREELAKSHMI S NAIR", email: "sreelakshmi.25ubc154@mariancollege.org", bio: "Academic high achiever interested in statistics and software designs.", achievements: ["A Grade Holder (Semester I)"] },
  { register_no: "25UBC155", name: "STEEV TOM BIJU", email: "steev.25ubc155@mariancollege.org", bio: "Talented coder, gamer, and coordinator. Represents class in technical fests.", achievements: ["Internal Navigator BGMI Runner-Up (2nd Prize)", "Finance Game Participant - Astra 10.0"] },
  { register_no: "25UBC156", name: "SUBHALEKSHMI P", email: "subhalekshmi.25ubc156@mariancollege.org", bio: "Committed leader active in mentoring and value education sessions.", achievements: ["Value Education Session Leader"] },
  { register_no: "25UBC157", name: "SWATHIKA S NARAYAN", email: "swathika.25ubc157@mariancollege.org", bio: "Passionate about application development, cloud concepts, and tech fests." },
  { register_no: "25UBC158", name: "TERES ANNA ANTONY", email: "teres.25ubc158@mariancollege.org", bio: "Enthusiastic about web designs, front-end architecture, and visual models." },
  { register_no: "25UBC159", name: "VIVEK JOBY", email: "vivek.25ubc159@mariancollege.org", bio: "Strong analytical skill, active chess player, and football player.", achievements: ["MSL Football Representative - Team Real Madrid", "Inferno Sports Day - Chess (Boys) 3rd Place"] },
  { register_no: "25UBC160", name: "Y DANY EMMANUEL", email: "dany.25ubc160@mariancollege.org", bio: "Passionate about technology infrastructure, computer hardware, and diagnostics.", achievements: ["Treasure Hunt Participant - Astra 10.0 Tech Fest"] },
  { register_no: "25UBC161", name: "ANEETA JUSTINE", email: "aneeta.25ubc161@mariancollege.org", bio: "Technically skilled and active organizer. Key member of college tech clubs.", achievements: ["IDCC Technical Committee Member", "Inferno Sports Day - 4x100m Relay Girls Runner-Up (2nd Prize)"] }
];

// 2. Faculty Database
const currentFaculty = [
  {
    name: "Ms. Amruth K John",
    role: "Head of the Department (HOD)",
    qualifications: "MCA, M.Phil",
    specialization: "Data Science, Machine Learning, Java Technologies",
    email: "amruth.k.john@mariancollege.org",
    phone: "+91 94467 XXXXX",
    photo: "assets/images/faculty/amruth_k_john.jpeg",
    link: "https://www.mcka.in/faculty/profile.php?scode=dkoyMVJkY0dQT3gvYlExYWw5My91dz09"
  },
  {
    name: "Dr. Benymol Jose",
    role: "Vice Principal (Academics) & Faculty Advisor",
    qualifications: "MCA, Ph.D in Computer Science",
    specialization: "Software Engineering, Database Management Systems, System Architecture",
    email: "benymol.jose@mariancollege.org",
    phone: "+91 94951 XXXXX",
    photo: "assets/images/faculty/benymol_jose.jpeg",
    link: "https://www.mcka.in/faculty/profile.php?scode=M01hdE1xU2RuMXRlcWhHTy9hNHJDdz09"
  },
  {
    name: "Dr. Lumy Joseph",
    role: "Class Teacher (2nd Year) & Faculty Mentor",
    qualifications: "M.Sc Computer Science, Ph.D",
    specialization: "Cyber Security, Data Communications & Networks, Cryptography",
    email: "lumy.jose@mariancollege.org",
    phone: "+91 94478 XXXXX",
    photo: "assets/images/faculty/lumy_jose.jpeg",
    link: "https://www.mcka.in/faculty/profile.php?scode=VGM2RlVxeFhOUTY5NnhDN1lJYmVKZz09"
  },
  {
    name: "Prof. Dr. Binu Thomas",
    role: "Professor & Senior Faculty Member",
    qualifications: "M.Tech, Ph.D in Computer Science",
    specialization: "Advanced Algorithms, Machine Learning, Digital Image Processing",
    email: "binu.thomas@mariancollege.org",
    phone: "+91 94461 XXXXX",
    photo: "assets/images/faculty/binu_thomas.jpeg",
    link: "https://www.mcka.in/faculty/profile.php?scode=ZlJOYmxZQkZicDNYSisweXpWcDVtZz09"
  },
  {
    name: "Dr. Juby George",
    role: "Associate Professor & Faculty Member",
    qualifications: "MCA, Ph.D",
    specialization: "Data Mining, Big Data Analytics, Python Programming",
    email: "juby.george@mariancollege.org",
    phone: "+91 94475 XXXXX",
    photo: "assets/images/faculty/juby_george.jpeg",
    link: "https://www.mcka.in/faculty/profile.php?scode=QWZ4bXhFVGJMSGJ5VFVaRkpMV0JZQT09"
  },
  {
    name: "Mr. Santo Cherian",
    role: "Assistant Professor & Faculty Member",
    qualifications: "MCA, NET",
    specialization: "Web Technologies (HTML, CSS, JS), Cloud Computing, Virtualization",
    email: "santo.cherian@mariancollege.org",
    phone: "+91 94958 XXXXX",
    photo: "assets/images/faculty/santo_cherian.jpeg",
    link: "https://www.mcka.in/faculty/profile.php?scode=bitJSmdPZ3RjcnhvRVIwQWhWN2svUT09"
  },
  {
    name: "Mr. Jyothish V.R",
    role: "Assistant Professor & Tech Lead",
    qualifications: "M.Tech in CS, NET",
    specialization: "Internet of Things (IoT), Embedded Systems, Core Hardware Programming",
    email: "jyothish.vr@mariancollege.org",
    phone: "+91 97442 XXXXX",
    photo: "assets/images/faculty/jyothish_vr.jpeg",
    link: "https://www.mcka.in/faculty/profile.php?scode=OFhGSm9LTXY5OWRpNURITDFsWWNCUT09"
  }
];

const formerFaculty = {
  name: "Ms. Aswathy S Nair",
  role: "Former Faculty Mentor",
  qualifications: "MCA, M.Tech",
  specialization: "Programming Concepts, Data Structures & Logic Optimization",
  email: "aswathy.s.nair@mariancollege.org",
  phone: "N/A",
  photo: "assets/images/faculty/aswathy_s_nair.jpeg",
  link: "#"
};

const legacyLeader = {
  name: "Dr. Rajimol A",
  role: "Former Head of Department (HOD) - Retired",
  qualifications: "MCA, Ph.D in Computer Science",
  specialization: "Departmental Governance, Higher Education Quality Benchmarks",
  email: "rajimol@mariancollege.org",
  phone: "N/A",
  photo: "assets/images/faculty/rajimol_a.jpeg",
  link: "#"
};

// 3. Timeline / Journey Data
const timelineData = [
  { date: "July 1, 2025", title: "FYUG Programme Inauguration", desc: "The academic year commenced with the Inauguration of the Four-Year Undergraduate Programme, officially welcoming freshers to Marian College Kuttikkanam (Autonomous). Students gained clarity about the structure.", img: "assets/images/events/report_p6_img1.jpeg" },
  { date: "July 2, 2025", title: "Welcoming Freshers - BCA Department", desc: "Faculty members and senior students of the BCA department welcomed the first-year students, introducing the department, academic framework, and student-led activities.", img: "assets/images/events/report_p6_img3.jpeg" },
  { date: "July 4, 2025", title: "Orientation on Campus Life", desc: "An interactive orientation session familiarized students with campus facilities, clubs, departmental activities, digital portals, and student support services.", img: "assets/images/events/report_p7_img1.jpeg" },
  { date: "July 5, 2025", title: "Alumni Digital Skills Session", desc: "Alumni conducted a hands-on session guiding students on essential digital tools such as Canva, LinkedIn, Figma, Google Workspace, Sheets, Forms, and Drive.", img: "assets/images/events/report_p7_img2.jpeg" },
  { date: "July 7-10, 2025", title: "Set Sail 2025 Induction", desc: "A college-level induction programme introducing students to the vision, mission, core values, best practices, clubs, and support systems of Marian College Kuttikkanam Autonomous.", img: "assets/images/events/report_p8_img2.jpeg" },
  { date: "July 11, 2025", title: "Hardware Workshop", desc: "A hands-on workshop led by Mr. John Joseph provided students with foundational knowledge of computer hardware components, their functions, and basic assembly.", img: "assets/images/events/report_p8_img4.jpeg" },
  { date: "July 11, 2025", title: "Physical Wellness & Recreation", desc: "Organized by the Department of Physical Education, this session focused on physical wellness through recreational activities, fitness, relaxation, and stress management.", img: "assets/images/events/report_p9_img1.jpeg" },
  { date: "July 14, 2025", title: "The Road Ahead", desc: "An insightful guidance session by Dr. Brijeah George John and Mr. Krishnaraj S on academic planning, career pathways, goal setting, and personal development.", img: "assets/images/events/report_p9_img2.jpeg" },
  { date: "August 1, 2025", title: "Class Representative Election", desc: "To promote democratic values, the class conducted a democratic election process. Iris Dain and Binitha Wilson were elected class representatives.", img: "assets/images/events/report_p15_img1.jpeg" },
  { date: "August 5, 2025", title: "Zenetrix Name Launch & Cake Cutting", desc: "The official launch of the class name ZENETRIX was celebrated through a cake-cutting ceremony, symbolizing unity, identity, and the formal beginning of I BCA A's journey.", img: "assets/images/events/report_p16_img2.jpeg" },
  { date: "August 21-25, 2025", title: "Ring Toss Game - Onam Celebrations", desc: "As part of college-level Onam celebrations, Zenetrix organized the 'Ring Toss returns' game for students across various departments, enhancing organizational skills.", img: "assets/images/events/report_p17_img1.jpeg" },
  { date: "Aug-Sep, 2025", title: "Green Audit Activities", desc: "Students conducted a comprehensive green audit across the campus, surveying infrastructure (windows, doors, lighting, plumbing) to promote environmental sustainability.", img: "assets/images/events/report_p18_img1.jpeg" }
];

// 4. Media Gallery Data
const galleryData = [
  { img: "assets/images/events/report_p6_img1.jpeg", title: "FYUG Inauguration Stage", cat: "events" },
  { img: "assets/images/events/report_p6_img3.jpeg", title: "Welcoming Freshers", cat: "group" },
  { img: "assets/images/events/report_p7_img2.jpeg", title: "Digital Skills Lab Session", cat: "events" },
  { img: "assets/images/events/report_p8_img2.jpeg", title: "Set Sail 2025 - College Hall", cat: "events" },
  { img: "assets/images/events/report_p8_img4.jpeg", title: "Hardware Workshop Board", cat: "events" },
  { img: "assets/images/events/report_p12_img2.jpeg", title: "Freshers' Day Group Photo", cat: "group" },
  { img: "assets/images/events/report_p13_img1.jpeg", title: "Freshers Day Dance", cat: "achievements" },
  { img: "assets/images/events/report_p16_img2.jpeg", title: "Zenetrix Name Launch Cake", cat: "events" },
  { img: "assets/images/events/report_p16_img3.jpeg", title: "Cake Cutting Ceremony", cat: "events" },
  { img: "assets/images/events/report_p20_img1.jpeg", title: "Zenetrix Class Group Photo", cat: "group" },
  { img: "assets/images/events/report_p22_img3.jpeg", title: "Mentoring & Value Education", cat: "events" },
  { img: "assets/images/events/report_p29_img1.jpeg", title: "Walking Pilgrimage to Pattumala", cat: "events" },
  { img: "assets/images/events/report_p30_img3.jpeg", title: "Onam Pookalam Floral Art", cat: "events" },
  { img: "assets/images/events/report_p35_img1.jpeg", title: "Solamanum Shoshannayum Ride", cat: "events" },
  { img: "assets/images/events/report_p36_img1.jpeg", title: "Zenetrix Football Team", cat: "achievements" },
  { img: "assets/images/events/report_p37_img3.jpeg", title: "Marian Super League Players", cat: "achievements" },
  { img: "assets/images/events/report_p43_img1.jpeg", title: "Astra 10.0 Tech Fest Team at SJCET", cat: "group" },
  { img: "assets/images/events/report_p46_img2.jpeg", title: "CSM Kalotsavam Mime Group", cat: "achievements" },
  { img: "assets/images/events/report_p53_img2.jpeg", title: "Kayaking - Adventure Sports", cat: "events" },
  { img: "assets/images/events/report_p56_img1.jpeg", title: "Parishkari - Ethnic Day Wear", cat: "group" }
];

// 5. Achievements Data
const achievementsData = [
  { title: "Academic Topper Sem I", type: "academic", winner: "Elaine Maria George (9.61 GPA)", desc: "Secured the highest academic SGPA in the first semester among the entire batch.", img: "assets/images/events/report_p15_img1.jpeg" },
  { title: "Academic Excellence A+", type: "academic", winner: "Delna Benoy, Iris Dain, Aksa Elizabeth, Ben George, Nadia Jaleel", desc: "Achieved the prestigious A+ grade with outstanding SGPA scores above 9.0 in Semester I.", img: "assets/images/events/report_p15_img1.jpeg" },
  { title: "Sustainable Bag Making", type: "events", winner: "Neha Vinod (1st Prize)", desc: "Secured First Prize in the Sustainable Bag Making competition organized by the BBA department.", img: "assets/images/events/report_p25_img1.jpeg" },
  { title: "Green Photography Competition", type: "events", winner: "Neha Vinod (1st Prize)", desc: "Secured First Prize in the Green Photography competition to reflect environmental sustainability.", img: "assets/images/events/report_p26_img1.jpeg" },
  { title: "Screen Sleuths Film Quiz", type: "events", winner: "Devarsh S & Jerit George (1st Prize)", desc: "Won First Prize in the inter-departmental film quiz organized by II BCA.", img: "assets/images/events/report_p26_img2.jpeg" },
  { title: "Quantum Heist 2.0 (Astra 10.0)", type: "events", winner: "Abhinandhu T R, Joseph Alen, Sharon Sabu (2nd Prize)", desc: "Bagged the Second Prize in the technical fest hosted by SJCET Palai.", img: "assets/images/events/report_p43_img2.jpeg" },
  { title: "Causerie Spot Photography", type: "events", winner: "Riya Rose Manoj (2nd Prize)", desc: "Secured Second Prize in Spot Photography in the All Kerala Intercollegiate Fest at SB College.", img: "assets/images/events/report_p49_img1.jpeg" },
  { title: "MG University Roller Sports", type: "sports", winner: "Devadath Siju (3rd Prize & Team Champions)", desc: "Represented Marian College and won overall championship, securing Third Prize individually.", img: "assets/images/events/report_p45_img1.jpeg" },
  { title: "Inferno Sports Day Topper", type: "sports", winner: "Elaine Maria George (1st in 1500m & 400m)", desc: "Dominated the athletics events on annual sports day, securing multiple gold medals.", img: "assets/images/events/report_p38_img1.jpeg" },
  { title: "Onam Song Competition", type: "arts", winner: "Zenetrix Team (1st Prize)", desc: "Won First Prize in the college-wide Onam group song competition organized by MCSC.", img: "assets/images/events/report_p30_img1.jpeg" },
  { title: "Arts Day Srishti Group Song", type: "arts", winner: "Delna Benoy & Team (1st Prize)", desc: "Secured First Prize in the Group Song competition, showcasing musical harmony.", img: "assets/images/events/report_p40_img1.jpeg" },
  { title: "Reel Making Competition", type: "arts", winner: "Riya Rose Manoj (1st Prize)", desc: "Secured First Prize in Reel Making organized by III BCA A to promote digital creativity.", img: "assets/images/events/report_p27_img2.jpeg" }
];

// Document Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Sticky Navbar background change on scroll
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    // Update active nav link based on scroll section
    highlightNavOnScroll();
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mainNav = document.getElementById("main-nav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      mainNav.classList.toggle("active");
    });
    // Close nav on click of links
    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        mainNav.classList.remove("active");
      });
    });
  }

  // Initial Counter Setup
  animateCounters();

  // Dynamic Content Renderers
  renderTimeline();
  renderGallery();
  renderAchievements();
  renderStudentDirectory();
  renderFacultyDirectory();

  // Setup Lightbox for Gallery
  setupLightbox();

  // Modal Setup
  setupModals();
});

// Counter Animation Logic
function animateCounters() {
  const statsSection = document.getElementById("statistics");
  if (!statsSection) return;

  const counters = document.querySelectorAll(".stats-num");
  const speed = 200; // time in ms

  const observerOptions = {
    root: null,
    threshold: 0.3
  };

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => {
          const animate = () => {
            const target = parseInt(counter.getAttribute("data-target"));
            const count = parseInt(counter.innerText);
            const increment = Math.ceil(target / speed);

            if (count < target) {
              counter.innerText = count + increment > target ? target : count + increment;
              setTimeout(animate, 10);
            } else {
              counter.innerText = target;
            }
          };
          animate();
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  statsObserver.observe(statsSection);
}

// Nav Link Highlight Logic on Scroll
function highlightNavOnScroll() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPosition = window.scrollY + 120; // offset

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const activeLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
      if (activeLink) {
        document.querySelectorAll("nav ul li").forEach(li => li.classList.remove("active"));
        activeLink.parentElement.classList.add("active");
      }
    }
  });
}

// Render Timeline / Our Journey
function renderTimeline() {
  const timelineContainer = document.getElementById("timeline-container");
  if (!timelineContainer) return;

  timelineContainer.innerHTML = "";
  timelineData.forEach((item, index) => {
    const itemHTML = `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content glass-panel">
          ${item.img ? `<img src="${item.img}" alt="${item.title}" class="timeline-img" loading="lazy">` : ""}
          <span class="timeline-date">${item.date}</span>
          <h3 class="timeline-title">${item.title}</h3>
          <p class="timeline-desc">${item.desc}</p>
        </div>
      </div>
    `;
    timelineContainer.insertAdjacentHTML("beforeend", itemHTML);
  });
}

// Render Media Gallery
function renderGallery(filter = "all") {
  const galleryGrid = document.getElementById("gallery-grid");
  if (!galleryGrid) return;

  galleryGrid.innerHTML = "";
  const filteredData = filter === "all" ? galleryData : galleryData.filter(item => item.cat === filter);

  filteredData.forEach(item => {
    const itemHTML = `
      <div class="gallery-item" data-src="${item.img}">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <h4 class="gallery-title">${item.title}</h4>
          <span class="gallery-cat">${item.cat}</span>
        </div>
      </div>
    `;
    galleryGrid.insertAdjacentHTML("beforeend", itemHTML);
  });
}

// Gallery Lightbox Controller
function setupLightbox() {
  const galleryGrid = document.getElementById("gallery-grid");
  const lightbox = document.getElementById("lightbox");
  if (!galleryGrid || !lightbox) return;

  const lightboxImg = lightbox.querySelector(".lightbox-img");
  const lightboxCaption = lightbox.querySelector(".lightbox-caption");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  galleryGrid.addEventListener("click", e => {
    const item = e.target.closest(".gallery-item");
    if (!item) return;

    const src = item.getAttribute("data-src");
    const captionText = item.querySelector(".gallery-title").innerText;

    lightboxImg.src = src;
    lightboxCaption.innerText = captionText;
    lightbox.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.querySelector(".lightbox-backdrop").addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
}

// Filter Gallery logic called in index.html buttons
window.filterGallery = function(category, button) {
  // Update active tab styles
  const buttons = button.parentElement.querySelectorAll(".tab-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  renderGallery(category);
};

// Render Achievements
function renderAchievements(filter = "all") {
  const achievementsGrid = document.getElementById("achievements-grid");
  if (!achievementsGrid) return;

  achievementsGrid.innerHTML = "";
  const filteredData = filter === "all" ? achievementsData : achievementsData.filter(item => item.type === filter);

  filteredData.forEach(item => {
    const itemHTML = `
      <div class="achievement-card glass-panel">
        ${item.img ? `<img src="${item.img}" alt="${item.title}" class="achievement-card-img" loading="lazy">` : ""}
        <div class="achievement-header">
          <h3 class="achievement-title">${item.title}</h3>
          <span class="badge badge-gold">${item.type}</span>
        </div>
        <div class="achievement-meta">
          <span>Winner/Recipient:</span>
        </div>
        <div class="achievement-winner">
          <i class="fas fa-trophy text-gold"></i>
          <span>${item.winner}</span>
        </div>
        <p class="achievement-desc" style="margin-top: 1rem;">${item.desc}</p>
      </div>
    `;
    achievementsGrid.insertAdjacentHTML("beforeend", itemHTML);
  });
}

// Filter Achievements logic called in index.html buttons
window.filterAchievements = function(type, button) {
  const buttons = button.parentElement.querySelectorAll(".tab-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  renderAchievements(type);
};

// Render Student Directory
let currentSearch = "";
let currentSort = "alphabetical";

function renderStudentDirectory() {
  const directoryGrid = document.getElementById("student-directory-grid");
  if (!directoryGrid) return;

  directoryGrid.innerHTML = "";

  // Apply Search Filter
  let filtered = studentsData.filter(student => {
    const searchStr = `${student.name} ${student.register_no} ${student.email}`.toLowerCase();
    return searchStr.includes(currentSearch.toLowerCase());
  });

  // Apply Sorting
  if (currentSort === "alphabetical") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === "register") {
    filtered.sort((a, b) => a.register_no.localeCompare(b.register_no));
  } else if (currentSort === "achievements") {
    filtered.sort((a, b) => {
      const aLen = a.achievements ? a.achievements.length : 0;
      const bLen = b.achievements ? b.achievements.length : 0;
      return bLen - aLen; // Descending
    });
  }

  if (filtered.length === 0) {
    directoryGrid.innerHTML = `<div class="glass-panel" style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No students found matching "${currentSearch}"</div>`;
    return;
  }

  filtered.forEach(student => {
    const initials = student.name.split(" ").slice(0, 2).map(n => n[0]).join("");
    const isMemorial = student.isMemorial ? "memorial-profile" : "";
    const cardHTML = `
      <div class="student-card glass-panel ${isMemorial}" data-reg="${student.register_no}">
        <div class="avatar-wrapper">
          <div class="avatar-initials">${initials}</div>
        </div>
        <h3>${student.name}</h3>
        <div class="student-reg">${student.register_no}</div>
        <button class="student-card-btn">View Profile</button>
      </div>
    `;
    directoryGrid.insertAdjacentHTML("beforeend", cardHTML);
  });
}

// Student Search & Filter Events
window.handleStudentSearch = function(value) {
  currentSearch = value;
  renderStudentDirectory();
};

window.handleStudentSort = function(value) {
  currentSort = value;
  renderStudentDirectory();
};

// Render Faculty Directory
function renderFacultyDirectory() {
  const facultyGrid = document.getElementById("faculty-grid");
  const formerFacultyContainer = document.getElementById("former-faculty-container");
  const legacyLeaderContainer = document.getElementById("legacy-leader-container");

  // Current Faculty
  if (facultyGrid) {
    facultyGrid.innerHTML = "";
    currentFaculty.forEach(fac => {
      const facHTML = `
        <div class="faculty-card glass-panel" data-name="${fac.name}">
          <div class="faculty-photo-wrapper">
            <img src="${fac.photo}" alt="${fac.name}" class="faculty-photo" loading="lazy">
          </div>
          <h3 class="faculty-name">${fac.name}</h3>
          <div class="faculty-role">${fac.role}</div>
          <div class="faculty-email">${fac.email}</div>
        </div>
      `;
      facultyGrid.insertAdjacentHTML("beforeend", facHTML);
    });
  }

  // Former Faculty
  if (formerFacultyContainer) {
    formerFacultyContainer.innerHTML = `
      <div class="faculty-card glass-panel" data-name="${formerFaculty.name}" style="max-width: 320px; margin: 0 auto;">
        <div class="faculty-photo-wrapper">
          <img src="${formerFaculty.photo}" alt="${formerFaculty.name}" class="faculty-photo" loading="lazy">
        </div>
        <h3 class="faculty-name">${formerFaculty.name}</h3>
        <div class="faculty-role">${formerFaculty.role}</div>
        <div class="faculty-email">${formerFaculty.email}</div>
      </div>
    `;
  }

  // Legacy Leader HOD (Hall of Legacy)
  if (legacyLeaderContainer) {
    legacyLeaderContainer.innerHTML = `
      <div class="faculty-card glass-panel legacy-card" data-name="${legacyLeader.name}">
        <div class="faculty-photo-wrapper">
          <img src="${legacyLeader.photo}" alt="${legacyLeader.name}" class="faculty-photo" loading="lazy">
        </div>
        <h3 class="faculty-name" style="font-size: 1.4rem; color: var(--accent-gold);">${legacyLeader.name}</h3>
        <div class="faculty-role" style="font-size: 1rem; color: var(--text-light); margin-bottom: 0.75rem;">${legacyLeader.role}</div>
        <p style="font-size: 0.9rem; margin-bottom: 1.25rem; font-style: italic;">
          "Guiding the Department of Computer Applications through foundational growth and establishing an algorithm of academic excellence."
        </p>
        <div class="faculty-email" style="font-weight: 550;">Ex-Head of Department</div>
      </div>
    `;
  }
}

// Modal Systems Setup
function setupModals() {
  const modal = document.getElementById("profile-modal");
  if (!modal) return;

  const closeBtn = modal.querySelector(".modal-close");
  const modalName = modal.querySelector(".modal-name");
  const modalSub = modal.querySelector(".modal-sub");
  const modalEmail = modal.querySelector(".modal-email-val");
  const modalBio = modal.querySelector(".modal-bio-val");
  const modalAchievements = modal.querySelector(".modal-ach-val");
  const modalAvatar = modal.querySelector(".modal-avatar-initials");
  const linkedinBtn = modal.querySelector(".linkedin-link");

  // Listen to student directory card clicks
  document.getElementById("student-directory-grid").addEventListener("click", e => {
    const card = e.target.closest(".student-card");
    if (!card) return;

    const reg = card.getAttribute("data-reg");
    const student = studentsData.find(s => s.register_no === reg);
    if (!student) return;

    // Fill student modal
    const initials = student.name.split(" ").slice(0, 2).map(n => n[0]).join("");
    modalAvatar.innerText = initials;
    modalName.innerText = student.name;
    modalSub.innerText = `${student.register_no} | II BCA A`;
    modalEmail.innerText = student.email;
    modalBio.innerText = student.bio || "Computer Applications student at Marian College Kuttikkanam (Autonomous), batch of 2025-2029.";

    if (student.achievements && student.achievements.length > 0) {
      modalAchievements.innerHTML = student.achievements.map(ach => `<li><i class="fas fa-award text-gold" style="margin-right: 8px;"></i>${ach}</li>`).join("");
    } else {
      modalAchievements.innerHTML = "<li>No specific achievements logged yet.</li>";
    }

    if (student.isMemorial) {
      modalAvatar.style.background = "linear-gradient(135deg, #1f2d3d 0%, #0d1620 100%)";
      modalAvatar.style.color = "var(--accent-gold)";
      modalSub.innerText = `${student.register_no} | In Memoriam`;
    } else {
      modalAvatar.style.background = "linear-gradient(135deg, var(--secondary-blue) 0%, var(--accent-crimson) 100%)";
      modalAvatar.style.color = "var(--text-light)";
    }

    // Dynamic LinkedIn Link
    const formattedName = student.name.toLowerCase().replace(/\s+/g, "-");
    linkedinBtn.href = `https://www.linkedin.com/in/${formattedName}`;

    modal.classList.add("active");
  });

  // Listen to faculty card clicks
  const handleFacultyClick = (facObj) => {
    modalAvatar.innerText = facObj.name.split(" ").filter(n => !n.includes(".")).slice(0, 2).map(n => n[0]).join("");
    modalName.innerText = facObj.name;
    modalSub.innerText = facObj.role;
    modalEmail.innerText = facObj.email;
    modalBio.innerText = `Qualification: ${facObj.qualifications}\nSpecialization: ${facObj.specialization}`;
    modalAchievements.innerHTML = `
      <li><i class="fas fa-phone text-gold" style="margin-right: 8px;"></i>Phone: ${facObj.phone}</li>
      ${facObj.link && facObj.link !== "#" ? `<li><i class="fas fa-external-link-alt text-gold" style="margin-right: 8px;"></i><a href="${facObj.link}" target="_blank" style="color: var(--accent-gold); text-decoration: underline;">View Academic Profile</a></li>` : ""}
    `;
    modalAvatar.style.background = "linear-gradient(135deg, var(--secondary-blue) 0%, var(--accent-gold) 100%)";
    modalAvatar.style.color = "var(--primary-navy)";
    linkedinBtn.href = facObj.link;
    modal.classList.add("active");
  };

  // Bind faculty grid clicks
  document.getElementById("faculty-grid").addEventListener("click", e => {
    const card = e.target.closest(".faculty-card");
    if (!card) return;
    const name = card.getAttribute("data-name");
    const facObj = currentFaculty.find(f => f.name === name);
    if (facObj) handleFacultyClick(facObj);
  });

  // Bind former faculty clicks
  document.getElementById("former-faculty-container").addEventListener("click", e => {
    const card = e.target.closest(".faculty-card");
    if (!card) return;
    handleFacultyClick(formerFaculty);
  });

  // Bind legacy leader clicks
  document.getElementById("legacy-leader-container").addEventListener("click", e => {
    const card = e.target.closest(".faculty-card");
    if (!card) return;
    handleFacultyClick(legacyLeader);
  });

  // Modal Closing events
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.querySelector(".modal-backdrop").addEventListener("click", () => {
    modal.classList.remove("active");
  });
}

// 6. Dynamic Hero Background Collage Slideshow
const heroSlides = [
  "assets/images/events/report_p12_img2.jpeg", // Freshers day group photo
  "assets/images/events/report_p20_img1.jpeg", // Class group photo
  "assets/images/events/report_p30_img3.jpeg", // Onam Pookalam floral
  "assets/images/events/report_p43_img1.jpeg", // SJCET Palai team photo
  "assets/images/events/report_p56_img1.jpeg"  // Parishkari Ethnic wear group photo
];

function initializeHeroSlideshow() {
  const slideshowContainer = document.getElementById("hero-slideshow");
  if (!slideshowContainer) return;

  slideshowContainer.innerHTML = "";
  heroSlides.forEach((src, idx) => {
    const slide = document.createElement("div");
    slide.className = `hero-slide ${idx === 0 ? "active" : ""}`;
    slide.style.backgroundImage = `url('${src}')`;
    slideshowContainer.appendChild(slide);
  });

  let currentIdx = 0;
  setInterval(() => {
    const slides = slideshowContainer.querySelectorAll(".hero-slide");
    if (slides.length === 0) return;

    slides[currentIdx].classList.remove("active");
    currentIdx = (currentIdx + 1) % slides.length;
    slides[currentIdx].classList.add("active");
  }, 5000); // changes every 5 seconds
}

// Initialize slideshow once images are ready
document.addEventListener("DOMContentLoaded", () => {
  initializeHeroSlideshow();
});
