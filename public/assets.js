
import img6 from "../public/casepics/oil-vessel.jpg";
import cs1 from "../public/casepics/cs1.jpg";
import cs2 from "../public/casepics/cs2.jpg";
import csnew from "../public/casepics/csnew.jpg";
import cs4 from "../public/casepics/cs4.jpg";
import cs5 from "../public/casepics/cs5.jpg";
import cs7 from "../public/casepics/cs7.jpg";
import cs5new from "../public/casepics/bangchak-petroleum-s-oil-refinery-phra-khanong-di-2024-10-18-08-24-16-utc.jpg"
import cs6new from "../public/casepics/chef-doing-flambe-2025-02-22-05-15-15-utc.jpg"

import bg1 from "../public/bgimages/bg1.jpg";
import bg8 from "../public/bgimages/bg8.jpg";
import bg9 from "../public/bgimages/bg9.png";
import bg10 from "../public/bgimages/bg10.jpg";
import bg11 from "../public/bgimages/bg11.png";
import bg12 from "../public/bgimages/bg12.jpg";

export const bgimages = [
  { image: bg1 },
  { image: bg8 },
  { image: bg9 },
  { image: bg10 },
  { image: bg11 },
  { image: bg12 },
];

const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Removes all special characters except letters, numbers, spaces, and hyphens.
    .replace(/\s+/g, '-') // Replaces one or more spaces with a single hyphen.
    .replace(/--+/g, '-'); // Replaces multiple hyphens with a single one.
};

export const caseData = [
  {
    id: 1,
    heading: "ONGC – High Performance Computing Cluster Solution",
    slug: createSlug("ONGC [High-Performance Computing Cluster (HPCC) Solution]"),
    image: "/casepics/cs1.jpg",
    challenge: "ONGC faced significant hurdles in processing enormous volumes of seismic, geophysical, and reservoir simulation data essential to accelerating its oil and gas exploration efforts. The existing IT infrastructure was unable to meet the demands of advanced modelling due to insufficient scalability and performance, leading to costly delays in exploration decisions and inefficiencies throughout their operations.",
    solution: "To address these obstacles, Cygnus Information Solutions engineered and implemented a High Performance Computing (HPC) cluster tailored to ONGC’s unique needs. This solution brought together scalable compute nodes interconnected with high-speed InfiniBand, and the Lustre parallel file system was enhanced with disk shelf redundancy to manage ever-increasing data volumes and accommodate four years of projected storage growth. The software environment was rigorously optimized for seismic processing and reservoir simulations, while a centralized suite of monitoring and management tools ensured high system uptime and operational visibility.",
    result: "As a result of this engagement, ONGC witnessed processing speeds surge by over tenfold, allowing seismic data analysis that previously required weeks to be completed within days. Decision-making for exploration activities became more accurate and efficient, and the new HPC cluster offered the scalability to support foreseeable increases in computational load. The comprehensive consolidation of resources into a single, robust HPC environment also contributed to substantial reductions in total cost of ownership.",
  },
  {
    id: 2,
    heading: "Saregama – Data Centre Optimization",
    slug: createSlug("Saregama (Data Centre Optimization) [2022]"),
    image: "/casepics/cs2.jpg",
    challenge: "Saregama, renowned for its expansive music and content portfolio, struggled with an aging and fragmented data centre infrastructure that could not keep pace with escalating demands for digital distribution, content management, and streaming. Persistent inefficiencies led to high operational costs and serious challenges around scalability and resource management.",
    solution: "Cygnus responded by consolidating Saregama’s legacy servers into a modern hyperconverged infrastructure built on Dell EMC VxRail. Business workloads were migrated to a virtualized, software-defined data centre, supported by newly deployed energy-efficient compute, storage, and networking components. The initiative also encompassed disaster recovery and backup solutions to ensure business continuity, with centralized oversight and lifecycle management enabled via VxRail Manager.",
    result: "This transformation resulted in a remarkable 40% reduction in operational and energy expenses, accompanied by a doubling in content delivery speed and overall system performance. Saregama gained the ability to scale seamlessly with digital platforms and OTT services, while VxRail’s integrated disaster recovery and automation capabilities enhanced operational resilience and simplified ongoing management.",
  },
  {
    id: 3,
    heading: "Oil Vessel – Installation & Implementation of Small Data Centre",
    slug: createSlug("Oil Vessel (Installation & Implementation of small Data Centre) [2022]"),
    image: "/casepics/oil-vessel.jpg",
    challenge: "Managing offshore oil vessels presented notable challenges for operational continuity and crew safety. Limited manpower on board and the inherent risks of assigning rig personnel to constant monitoring and management duties further complicated operations, especially during emergencies when swift disaster response was critical to protect both assets and staff.",
    solution: "Cygnus designed and deployed a compact, on-vessel data centre featuring redundant compute, storage, and networking capabilities tailored for harsh marine environments. Remote management and monitoring functionalities were introduced, allowing vessel operations to be controlled from onshore data centres. Integrated systems for oil flow control, vessel monitoring, and automated safety alerts minimized the necessity for constant human presence. Disaster recovery workflows were established to enable flexible redeployment of manpower in the event of emergencies, and secure, reliable connectivity between the vessels and onshore command centers was ensured.",
    result: "Through this deployment, the client achieved a substantial reduction in reliance on rig-based manpower for everyday monitoring tasks and gained the ability to view vessel operations in real time, including critical oil flow and safety systems. Crew members benefitted from improved safety as exposure to hazardous conditions was minimized, and the vessel’s operational continuity was firmly safeguarded, with the infrastructure enabling a much faster and coordinated disaster response when needed.",
  },
  {
    id: 4,
    heading: "NSDL – Storage Upgradation",
    slug: createSlug("NSDL (Storage Up gradation) [2019-2022]"),
    image: "/casepics/cs4.jpg",
    challenge: "As regulatory, business, and transactional growth accelerated, NSDL found its legacy storage infrastructure increasingly strained by capacity limits, slower response times, and rising maintenance requirements. These issues threatened the availability, performance, and compliance essential for handling burgeoning volumes of financial and securities data.",
    solution: "To overcome these challenges, Cygnus upgraded NSDL’s storage systems with a next-generation enterprise storage platform engineered for significantly higher capacity and throughput. A tiered storage strategy was employed to optimize cost and responsiveness, distinguishing between critical and archival data needs. Advanced data replication, snapshot, and backup features were implemented to strengthen compliance and business continuity, while a seamless integration with existing applications and databases ensured smooth data migration. Unified management and monitoring tools were provided for continual operational efficiency.",
    result: "The upgraded storage environment delivered a threefold improvement in performance for transaction-intensive workloads. It provided the scalability necessary to meet future data growth without disruption to ongoing services, while also boosting data security and compliance in line with financial industry regulations. Simplified system management and a reduction in maintenance overheads led to significantly lower operational costs for NSDL.",
  },
  {
    id: 5,
    heading: "ONGC – Data Centre Relocation",
    slug: createSlug("ONGC (Data Centre Relocation) [2020-2021]"),
    image: "/casepics/bangchak-petroleum-s-oil-refinery-phra-khanong-di-2024-10-18-08-24-16-utc.jpg",
    challenge: "ONGC was confronted with the complex task of relocating its data centre to a new facility—an initiative that involved critical operations such as seismic data processing, reservoir simulations, ERP, and key business applications. The primary challenge was to execute this move while ensuring zero data loss, minimum operational downtime, and strict business continuity, despite numerous dependencies across servers, storage, and networks.",
    solution: "Cygnus approached this engagement with a thorough assessment and meticulous migration plan, addressing each layer of ONGC’s application, infrastructure, and network landscape. Before the final migration, a temporary parallel environment was established to validate and test workloads. Leveraging robust data replication and synchronization solutions, the actual relocation was carefully phased to minimize disruption. For resilience, disaster recovery and backup mechanisms were set up at the new site, fortifying ONGC’s infrastructure against unforeseen risks.",
    result: "This methodical approach enabled ONGC to accomplish its data centre move with no unplanned downtime and without a single instance of data loss. Reliability and efficiency at the new location saw marked improvements, offering the scalability required for ONGC’s forward-looking digital initiatives. The company’s disaster recovery and business continuity postures were significantly strengthened for long-term resilience.",
  },
  {
    id: 6,
    heading: "Central Bank Of India",
    slug: createSlug("Central Bank Of India (Digital Documentation) [2016-17]"),
    image: "/casepics/csnew.jpg",
    challenge: "The Central Bank of India grappled with inefficiencies in handling thousands of Customer Application Forms (CAFs) that existed in physical format. This reliance on paper-based processes resulted in delayed form processing, elevated risks of human error, difficult retrieval, and increased storage overheads, all of which negatively impacted the speed and efficiency of customer onboarding and regulatory audits.",
    solution: "To remedy this, Cygnus implemented a comprehensive CAF digitization system, converting paper forms into secure digital records. This system incorporated advanced scanning, optical character recognition (OCR), and workflow automation techniques to ensure accurate data capture. Digitized CAFs were systematically integrated with the core banking system for smooth processing, and a centralized digital repository was introduced to facilitate fast retrieval and audit readiness.",
    result: "The transformation reduced CAF processing times by 50–70%, drastically minimizing incidents of manual data entry errors. These improvements led to significantly faster customer onboarding, higher customer satisfaction, and streamlined storage management, making retrieval and auditing highly efficient.",
  },
  {
    id: 7,
    heading: "Allahabad High Court – Digital Documentation",
    slug: createSlug("Allahabad High Court ( Digital Documentation ) [2015]"),
    image:"/casepics/cs5.jpg",
    challenge: "Allahabad High Court faced unprecedented inefficiency stemming from manually handling its repository of over 50 lakh physical files. Locating and tracking case records proved to be a daunting, error-prone process, causing delays that impeded judicial functions and hampered case management effectiveness.",
    solution: "Taking on this large-scale digitization challenge, Cygnus undertook the conversion of the Court’s entire backlog into electronic records. A state-of-the-art Help E-Court solution was implemented, granting secure digital access to case files for judges, lawyers, and support staff. A robust document management and workflow automation suite streamlined the filing, tracking, and retrieval process, with advanced security ensuring strict access controls for sensitive case information.",
    result: "Post-implementation, all digital case files were accessible efficiently, which drastically reduced processing times and heightened transparency and accountability within the judicial workflow. Physical storage requirements and costs were dramatically lowered, empowering staff and legal professionals through the digital Help E-Court platform and leading to a measurable improvement in judicial productivity.",
  },
  {
    id: 8,
    heading: "Food TV Channel of Sanjeev Kapoor – Complete IT Infrastructure Support",
    slug: createSlug("Food TV Channel of Sanjeev Kapoor ( Complete IT Infrastructure Support ) [2013-14]"),
    image: "/casepics/chef-doing-flambe-2025-02-22-05-15-15-utc.jpg",
    challenge: "Food Food TV Channel faced operational bottlenecks caused by outdated IT infrastructure, resulting in unreliable broadcast operations, sluggish video storage, and delays in content delivery for both live programming and post-production activities. Such instability threatened overall broadcasting quality and the efficiency of content workflows.",
    solution: "Cygnus delivered a comprehensive IT infrastructure overhaul by upgrading servers, storage solutions, and networking systems. The new setup featured high-performance storage and backup infrastructure optimized for large video assets, and robust monitoring systems were established to maintain broadcast continuity. Ongoing IT support and maintenance was provided to ensure flawless production and broadcast workflow operations.",
    result: "The upgrade enhanced the channel’s broadcast reliability by virtually eliminating downtime, while content storage, retrieval, and editing became significantly faster. Streamlined production and post-production processes, paired with continuous IT support, allowed the channel to focus on creative content delivery and audience engagement without technical hindrance.",
  },
  {
    id: 9,
    heading: "Bank of Maharashtra – Audit Automation",
    slug: createSlug("Bank Of Maharashtra (Audit Automation i.e. Manual Audit to Online Audit)"),
    image: "/casepics/cs7.jpg",
    challenge: "Manual audit procedures at Bank of Maharashtra were proving to be slow, error-prone, and lacked the real-time transparency needed for modern regulatory compliance. The process of generating audit reports and monitoring adherence across numerous branches suffered from inefficiency, endangering both data accuracy and management oversight.",
    solution: "Cygnus introduced an advanced audit automation system that digitized and streamlined the entire lifecycle of audit activities. New monitoring tools and real-time reporting capabilities enabled centralized tracking of transactions and compliance metrics. Automated workflows delivered timely alerts for discrepancies, and comprehensive training was provided to bank staff to ensure smooth adoption and value realization from the system.",
    result: "This initiative succeeded in cutting audit processing times by 50–60%, drastically reducing errors associated with manual entry and greatly improving overall data accuracy. Enhanced transparency and compliance capabilities now span all branches, while management gains real-time insights into audit and regulatory status, supporting faster, more confident decision-making.",
  },
];