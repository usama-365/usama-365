const SKILLS = {
  "Front-End Development": [
    // Frameworks
    "Next.js",
    "React.js",
    // "Gatsby",
    // "Nuxt.js",
    // "Vue.js",
    // "Angular",
    // "Svelte",

    // State Management
    "Redux",
    // "MobX",
    // "Zustand",
    "Context API",
    // "Recoil",
    // "Jotai",

    // DataFetching
    "React Query",
    "Apollo Client",
    // "SWR",
    // "Remix Suspense",
    // "React Fetch",

    // Routing
    "React Router",
    // "Reach Router",
    // "React Navigation",
    // "Remix Routes",

    // Animation
    "Lottie Animation",
    "GSAP",
    "Framer Motion",
    "CSS Animations",
    // "Anime.js",

    // Styling
    "Tailwind CSS",
    "Sass",
    // "Less",
    "Styled Components",
    "CSS Modules",
    "HTML",
    "CSS",

    // Core web languages
    "JavaScript",
    "TypeScript",

    // Responsive Design
    // "Responsive Web Design",
    "Bootstrap",
    // "Foundation",
    // "Tailwind UI",

    // New Front-End Technologies
    "Astro",
    "Vite",
    // "Solid.js",
    // "Alpine.js",

    // Testing
    "Jest",
    // "React Testing Library",
    // "Cypress",
    // "Playwright",

    // Design/UX
    "Figma",
    // "Sketch",
    // "Zeplin",
    // "Design Thinking",
    // "User Interface (UI) Design",
    // "User Experience (UX) Research",

    // Performance
    "PWA",
    // "Service Workers",
    // "Code Splitting",
    // "Lazy Loading",
    // "Critical CSS",
    // "Font Optimization",
    // "Image Optimization",

    // Front-End Package Managers
    "NPM",
    "Yarn",
    "PNPM",

    // WebAssembly (Wasm)
    // "AssemblyScript",
    // "Wasmtime",

    // Progressive Web Apps (PWAs)
    // "Workbox",
    // "App Manifest",
    // "Push Notifications",
    // "Web App Manifest",

    // New Front-End Techniques
    // "Hybrid Rendering",
    // "Element Queries",
    // "Motion UI",
    // "WebAssembly Studio",

    // Performance Measurement
    "Lighthouse",
    // "WebPageTest",
    // "GTmetrix",
    // "PageSpeed Insights",

    // Front-End Architecture
    // "Micro-Frontends",
    "Components Architecture",
    // "Atomic Design",
    "BEM Methodology",
    "Server Components",

    // Accessibility
    // "WCAG Guidelines",
    // "ARIA Compliance",
    // "A11y Project",
    // "Axe DevTools",
  ],
  "Back-End Development": [
    // Server-Side Rendering (SSR)
    "Next.js",
    // "Gatsby",
    // "Nuxt.js",
    // "Remix",

    // Javascript backend ecosystem
    "Javascript",
    "Node.js",
    "Express.js",
    // "Fastify",
    // "Koa.js",

    // Python backend ecosystem
    "Python",
    "Django",
    "Flask",
    "FastAPI",

    // PHP backend ecosystem
    "PHP",
    "Laravel",

    // Ruby backend ecosystem
    // "Ruby",
    // "Rails",

    // Go backend ecosystem
    // "Go",
    // "Gin",
    // "Echo",

    // Databases
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "Redis",
    // "Cassandra",
    // "Elasticsearch",

    // Backend as a Service (BaaS)
    "Firebase",
    "Supabase",
    "Appwrite",

    // APIs
    "RESTful APIs",
    "GraphQL",

    // Authentication
    "OAuth",
    "JWT",
    "Passport.js",
    "NextAuth",

    // Infrastructure
    "Docker",
    // "Kubernetes",
    "AWS",
    "Google Cloud",
    "Azure",
    "Heroku",
    "Netlify",
    "Vercel",

    // Continuous Integration/Continuous Delivery (CI/CD)
    // "Jenkins",
    // "CircleCI",
    // "Travis CI",

    // Monitoring
    // "Prometheus",
    // "Grafana",
    // "Datadog",

    // Serverless Computing
    // "AWS Lambda",
    // "Azure Functions",
    "Serverless Functions",

    // Backend Testing
    "Postman",
    // "Insomnia",

    // API Documentation
    // "Swagger",
    // "Redoc",

    // New Back-End Technologies
    "Deno",
    // "Rust",
    // "Swift",

    // New Back-End Techniques
    // "Server-Sent Events",
    // "GraphQL Subscriptions",
    "WebSockets",
    "Microservices",

    // Back-End Security
    // "OpenID Connect",
    // "Content Security Policy (CSP)",
  ],
  "Software Development": [
    // Version Control
    "Git",
    "GitHub",
    // "GitLab",

    // Build Tools
    "Webpack",
    "Parcel",
    // "Rollup",

    // Debugging
    // "Node Inspector",
    "Browser DevTools",

    // Infrastructure as Code (IaC)
    // "Terraform",
    // "Ansible",

    // Deployment Tools
    // "Capistrano",
    // "AWS CodeDeploy",

    // Security
    "OWASP Top 10",
    // "Pen Testing",
    "Secure Coding",

    // Continuous Monitoring
    // "ELK Stack",
    // "Splunk",

    // Container Orchestration
    // "OpenShift",
    // "Rancher",

    // Load Balancing
    // "NGINX",
    // "HAProxy",

    // Configuration Management
    // "Chef",
    // "Puppet",

    // CI/CD Orchestration
    // "GitLab CI",
    "GitHub Actions",

    // Virtualization
    "VirtualBox",
    "VMware",

    // New DevOps & Tooling
    // "Kubernetes Operators",
    // "Helm",
    // "Argo CD",

    // New DevOps Techniques
    // "Chaos Engineering",
    // "Site Reliability Engineering (SRE)",
    // "Observability",
    // "GitOps",

    // DevOps Culture
    // "Collaborative Culture",
    // "Continuous Learning",
    "Automation",
    // "Infrastructure as Code (IaC)",

    // Agile Methodology
    "Scrum",
    // "Kanban",

    // Project Management
    // "Asana",
    // "Jira",
    // "Trello",
    "Testiny",
    "Linear",

    // Cloud Storage
    // "Amazon S3",
    // "Azure Blob Storage",

    // Versioning
    "Semantic Versioning",
    // "CalVer",

    // Code Review
    "Pull Requests",
    "Code Reviews",

    // Remote Collaboration Tools
    "Zoom",
    "MS Teams",
    "Skype",
    // "Slack",

    // Soft Skills
    "Communication",
    "Teamwork",
    "Problem-Solving",
    "Time Management",

    // Presentation Skills
    // "Public Speaking",
    // "PowerPoint",

    // New Additional Skills
    "Emotional Intelligence",
    // "Conflict Resolution",
    // "Leadership",
    "Adaptability",

    // New Soft Skills
    // "Empathy",
    // "Resilience",
    "Critical Thinking",
    // "Decision Making",

    // Project Collaboration
    "Cross-Functionality",
    // "Agile Ceremonies",
    // "Team Building",
    // "Remote Team Management",
  ],
};

export default SKILLS;

type SkillsType = typeof SKILLS;

export type SkillKeyType = keyof SkillsType;
