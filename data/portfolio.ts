export const profile = {
  name: "Kollipara Jyothi Swaroop Sai",
  shortName: "Swaroop",
  location: "Vijayawada, Andhra Pradesh, India",
  education: "B.Tech — Data Science",
  institution: "Prasad V. Potluri Siddhartha Institute of Technology",
  period: "2023 — 2027",
  headline: "Engineering ideas into intelligent solutions.",
  intro: "I build practical software, explore intelligent systems, and turn complex problems into clear, usable products. My interests span software engineering, AI, data engineering, and full-stack development.",
  email: "jyothiswaroopsai.kollipara@gmail.com",
  github: "https://github.com/SwaroopSai23",
  linkedin: "https://www.linkedin.com/in/kollipara-jyothi-swaroop-sai",
  resume: "/Swaroop-Resume.pdf"
};

export const skillGroups = [
  { title: "Programming", note: "Languages for problem-solving and application logic.", items: ["Java", "Python", "JavaScript"] },
  { title: "Frontend", note: "Interfaces designed to be clear, responsive, and useful.", items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend & APIs", note: "Application services, integration, and server-side development.", items: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "MERN Stack"] },
  { title: "AI & Data Science", note: "Data workflows and emerging intelligent application patterns.", items: ["Pandas", "NumPy", "Scikit-learn", "Machine Learning", "LLMs", "RAG", "Embeddings", "Agentic AI", "ChromaDB", "LLM APIs"] },
  { title: "Data & Analytics", note: "Working with data to surface useful information.", items: ["SQL", "Power BI", "Data Analysis", "Data Visualization"] },
];

export const experiences = [
  { role: "Google AI-ML Internship", org: "Google program", date: "Jul 2025 — Sep 2025", summary: "AI and machine learning internship experience.", details: ["Add the program/provider name and project title.", "Document the models, datasets, tools, and workflows you personally used.", "Add a concrete outcome only when you can verify it."], tags: ["AI", "Machine Learning"], status: "Details to complete" },
  { role: "IT Intern", org: "DTCC", date: "May 2025 — Jul 2025", summary: "Contributed to a Position and Reconciliation System project in a financial technology context.", details: ["Project name and internship association are provided; implementation specifics need confirmation.", "Add your exact modules, responsibilities, technologies, and individual contributions.", "Add system workflow, validation logic, test coverage, and outcomes only after verifying them."], tags: ["Financial Technology", "Position & Reconciliation"], status: "Project details to complete" },
  { role: "MERN Stack Development Internship", org: "Organization to confirm", date: "Mar 2025 — May 2025", summary: "Full-stack development internship.", details: ["Add the organization and application/project name.", "Specify frontend, backend, database, and API work you personally completed.", "Add verified delivery outcomes."], tags: ["MongoDB", "Express", "React", "Node.js"], status: "Details to complete" },
  { role: "AWS Data Engineering Internship", org: "Organization to confirm", date: "Jan 2025 — Mar 2025", summary: "Data engineering internship focused on cloud and data workflows.", details: ["Add the provider/organization and project name.", "Specify AWS services, data sources, transformations, and pipeline responsibilities.", "Add verified outcomes or learning deliverables."], tags: ["AWS", "Data Engineering"], status: "Details to complete" }
];

export const projects = [
  { id: "security-alert-assistant", number: "01", name: "AI Security Alert Assistant", type: "AI / Security", status: "Featured", description: "An AI-powered assistant concept for analysing and interpreting security alerts.", problem: "Security alerts can be noisy and difficult to interpret quickly. The project focuses on making alert context easier to understand.", solution: "An AI-assisted workflow for presenting alert information and supporting investigation. Replace this summary with the actual implemented workflow.", contribution: "Add your specific design, implementation, prompt, retrieval, integration, and evaluation contributions.", stack: ["AI", "LLM APIs", "Add verified tools"], architecture: ["Alert input", "Processing layer", "AI interpretation", "Analyst-facing output"], challenge: "Document a real technical challenge and the approach you used to address it.", outcome: "Add verified results; no performance or accuracy claims are assumed.", repo: "", live: "" },
  { id: "position-reconciliation", number: "02", name: "Position and Reconciliation System", type: "FinTech / Internship", status: "DTCC internship project", description: "A financial technology project associated with the DTCC IT internship (May–July 2025).", problem: "Position and reconciliation workflows are important to financial operations. Add the specific business problem and user workflow from your project brief.", solution: "Describe the actual system workflow, components, and reconciliation logic implemented by the team.", contribution: "Clearly list your own modules, code contributions, testing, collaboration, and decisions. Do not attribute team-wide work to yourself.", stack: ["Add verified technologies"], architecture: ["Input / source data", "Validation & processing", "Reconciliation workflow", "Exceptions / results"], challenge: "Add a real issue you encountered and how you helped resolve it.", outcome: "Add verified outcomes only. Do not publish confidential DTCC information.", repo: "", live: "" },
  { id: "timetide", number: "03", name: "TimeTide", type: "Productivity", status: "Project", description: "A productivity and time-management application.", problem: "Add the specific planning or time-management friction this application was built to address.", solution: "Describe the actual user flows and features implemented.", contribution: "Add your role, features built, and technical decisions.", stack: ["Add verified technologies"], architecture: ["User interface", "Application logic", "Data storage"], challenge: "Add a real implementation challenge.", outcome: "Add verified results.", repo: "", live: "" },
  { id: "fema-analytics", number: "04", name: "FEMA Analytics", type: "Data / Analytics", status: "Project", description: "A data analytics project focused on disaster-related datasets and insights.", problem: "Disaster datasets can be large and difficult to interpret without careful analysis and visualization.", solution: "Describe the dataset, analytical questions, transformations, and visual outputs actually completed.", contribution: "Add your data cleaning, analysis, visualization, and interpretation work.", stack: ["Add verified tools"], architecture: ["Dataset", "Cleaning & transformation", "Analysis", "Visual insights"], challenge: "Add a real data-quality or analytical challenge.", outcome: "Add verified findings; avoid unsupported impact claims.", repo: "", live: "" },
  { id: "busbuddy", number: "05", name: "BusBuddy", type: "Mobility", status: "Project", description: "A transportation-focused application.", problem: "Add the specific transport problem and target users.", solution: "Describe the implemented journey and features.", contribution: "Add your individual frontend, backend, data, or integration work.", stack: ["Add verified technologies"], architecture: ["User interface", "Service / API layer", "Data source"], challenge: "Add a real technical challenge.", outcome: "Add verified results.", repo: "", live: "" },
  { id: "flip-a-coin", number: "06", name: "Flip a Coin", type: "Frontend", status: "Project", description: "An interactive web application demonstrating frontend development and application logic.", problem: "A small interactive experience for demonstrating state, user input, and interface feedback.", solution: "Describe the actual interaction, randomization logic, and UI behavior.", contribution: "Add your implementation details and design decisions.", stack: ["Add verified technologies"], architecture: ["User action", "Application logic", "Result display"], challenge: "Add a real implementation challenge.", outcome: "Add verified results.", repo: "", live: "" }
];

export const processSteps = [
  ["01", "Understand", "Clarify the user, constraints, and actual problem before choosing a solution."],
  ["02", "Model", "Break the problem into components, data flows, and system boundaries."],
  ["03", "Build", "Implement in small, understandable increments with maintainability in mind."],
  ["04", "Validate", "Test behavior, edge cases, and assumptions against expected outcomes."],
  ["05", "Improve", "Use feedback and evidence to refine the product and engineering decisions."]
];