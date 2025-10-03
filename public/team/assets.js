
import img6 from "../assets/casepics/oil-vessel.jpg";
import cs1 from "../assets/casepics/cs1.jpg";
import cs2 from "../assets/casepics/cs2.jpg";
import csnew from "../assets/casepics/csnew.jpg";
import cs4 from "../assets/casepics/cs4.jpg";
import cs5 from "../assets/casepics/cs5.jpg";
import cs7 from "../assets/casepics/cs7.jpg";
import cs5new from "../assets/casepics/bangchak-petroleum-s-oil-refinery-phra-khanong-di-2024-10-18-08-24-16-utc.jpg"
import cs6new from "../assets/casepics/chef-doing-flambe-2025-02-22-05-15-15-utc.jpg"

import bg1 from "../assets/bgimages/bg1.jpg";
import bg8 from "../assets/bgimages/bg8.jpg";
import bg9 from "../assets/bgimages/bg9.png";
import bg10 from "../assets/bgimages/bg10.jpg";
import bg11 from "../assets/bgimages/bg11.png";
import bg12 from "../assets/bgimages/bg12.jpg";

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
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
};

export const caseData = [
  {
    id: 1,
    heading: "ONGC [High-Performance Computing Cluster (HPCC) Solution]",
    slug: createSlug("ONGC [High-Performance Computing Cluster (HPCC) Solution]"),
    image: cs1,
    challenge: "Data handling was slow which further reduced day to day efficiency. There was a challenge for them to properly handle the geophysical data.",
    solution: "We have provided them Lustre parallel file system and GPFS (General Parallel File System). The Lustre/GPFS architecture separates out metadata services and data services to deliver parallel file access and improve performance.",
    result: "Geophysical data handling improved gradually with the help of the provided technology solution.",
  },
  {
    id: 2,
    heading: "Saregama (Data Centre Optimization) [2022]",
    slug: createSlug("Saregama (Data Centre Optimization) [2022]"),
    image: cs2,
    challenge: "Difficulty in managing more number of physical servers. Multiple servers resulted in more power consumption in terms of various aspects such as cooling, space, etc. which was increasing the overall manufacturing cost.",
    solution: "We have given Hyper-converged infrastructure to optimize their usage with respect to their applications.",
    result: "All applications are successfully running with optimized loose ends such as power consumption and cooling requirements.",
  },
  {
    id: 3,
    heading: "Oil Vessel (Installation & Implementation of small Data Centre) [2022]",
    slug: createSlug("Oil Vessel (Installation & Implementation of small Data Centre) [2022]"),
    image: img6,
    challenge: "Shortage of space for maintaining and installing a normal setup data centre and weight restrictions from the vessel’s load allowance.",
    solution: "Proper operational planning of each equipment and installation of rack placement with devices. Deploying the device and  structured cabling & labelling with network Penta scanning & OTDR and then handing over the complete OT (operation technology) solution to the vessel’s team for further application integration.",
    result: "After the successful implementation of the entire Data center they can now use the application for oil leakage, pressure check, fire alarm. In short the entire data collection in a seamless and efficient way.",
  },
  {
    id: 4,
    heading: "NSDL (Storage Up gradation) [2019-2022]",
    slug: createSlug("NSDL (Storage Up gradation) [2019-2022]"),
    image: cs4,
    challenge: "NSDL faced the challenge of data integrity and data security due to the old architecture setup.",
    solution: "Cygnus helped in upgrading NSDL’s old IBM storage systems to new Dell storage systems to reduce the risk of data loss. With the help of an experienced team, Cygnus developed a data storage design for the company with increased and reliable security features.",
    result: "The customized Dell storage systems made the company store its data in a safe, reliable, and highly responsive data storage environment.",
  },
  {
    id: 5,
    heading: "ONGC (Data Centre Relocation) [2020-2021]",
    slug: createSlug("ONGC (Data Centre Relocation) [2020-2021]"),
    image: cs5new,
    challenge: "ONGC Panvel needed to be shifted to the ONGC Bandra-Kurla Complex (BKC). It was a tough task for a company as huge as ONGC and the pandemic made it even worse with the limited access to resources.",
    solution: "Cygnus helped complete the relocation with the help of an efficient team, end-to-end flexible solutions, and a requirement-based approach. With the implementation of the best industry practices, this high accountability Government project was a huge success with minimal loss of data.",
    result: "The successful relocation to a new place with new IT infrastructure made the functioning of the company quite smooth and efficient. Our high-performance solutions, constant monitoring, and support ensured seamless access to data without any interruption.",
  },
  {
    id: 6,
    heading: "Central Bank Of India (Digital Documentation) [2016-17]",
    slug: createSlug("Central Bank Of India (Digital Documentation) [2016-17]"),
    image: csnew,
    challenge: "All the bank data was on paper. It was difficult and time-consuming to access this data. That resulted in slower and erroneous bank operations.",
    solution: "Cygnus partnered with Stock Holding Document Management System to digitize all the bank paperwork, hard copies, and all other bank records.",
    result: "With digitization, the bank was able to organize and access the data quite easily. The digital documentation reduced human errors which resulted in faster, more efficient, and accurate bank functioning and improved customer experience.",
  },
  {
    id: 7,
    heading: "Allahabad High Court ( Digital Documentation ) [2015]",
    slug: createSlug("Allahabad High Court ( Digital Documentation ) [2015]"),
    image: cs5,
    challenge: "Huge stacks of papers made it difficult for the administration of Allahabad and Lucknow High courts to function faster and effectively. This slower functioning affected the overall judiciary system.",
    solution: "Cygnus partnered with Stock Holding Document Management System to convert hard copies into digital format in what can be called our first digitization project in India. As part of this digitization project, we digitized all the files of both these courts, i.e., cases, files, reports, and other paperwork.",
    result: "The entire administrative systems of both the courts were able to manage data faster and efficiently. This improved the overall functioning of the judiciary system as well.",
  },
  {
    id: 8,
    heading: "Food TV Channel of Sanjeev Kapoor ( Complete IT Infrastructure Support ) [2013-14]",
    slug: createSlug("Food TV Channel of Sanjeev Kapoor ( Complete IT Infrastructure Support ) [2013-14]"),
    image: cs6new,
    challenge: "It was a huge challenge for a newly launched Indian food and lifestyle channel Food Food to build a dependable IT setup from scratch.",
    solution: "Cygnus provided the channel with complete IT infrastructure and hardware setup. Our customized IT solutions and structured approach made sure the smooth broadcasting and functioning of the channel.",
    result: "With our dedicated and complete backend IT support, the channel has been able to broadcast with reduced downtime.",
  },
  {
    id: 9,
    heading: "Bank Of Maharashtra (Audit Automation i.e. Manual Audit to Online Audit)",
    slug: createSlug("Bank Of Maharashtra (Audit Automation i.e. Manual Audit to Online Audit)"),
    image: cs7,
    challenge: "It was overwhelming to manage the complex audits through manual processes. The bank was facing huge challenges of human errors and unnecessary delays.",
    solution: "Cygnus provided the bank with audit automation software that digitized manual auditing. The online auditing processes enabled the bank to reduce the complexity of the auditing problems.",
    result: "There were fewer human errors in the complex auditing processes. The faster and more efficient functioning of digital auditing helped them save a lot of their time and resources.",
  },
];