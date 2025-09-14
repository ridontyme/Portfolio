export const projects = [
    {
        id: "ai-command-executor",
        title: "AI Command Executor",
        category: "Security & AI",
        description: "A modern Windows application that translates natural human language into executable system commands.",
        tech: ["C#", ".NET", "Hugging Face API", "Windows PowerShell"],
        problem: "System administration through command-line interfaces like PowerShell is incredibly powerful but presents a significant barrier to entry for many users. The complex syntax and steep learning curve mean that most people cannot efficiently manage their own systems, leaving powerful capabilities untapped.",
        solution: "The AI Command Executor was developed as a modern Windows application that translates natural human language into executable system commands. Users can simply type requests in plain English, such as \"Find all PDF files in my documents folder\" or \"Turn off Wi-Fi.\" The application securely integrates with Hugging Face LLMs to accurately interpret user intent, convert it into the appropriate PowerShell command, and execute it seamlessly.",
        impact: "This project makes advanced system control accessible to users of all technical levels. It dramatically improves user experience and productivity by removing the need to memorize complex commands, demonstrating a powerful application of AI in bridging the gap between human language and machine control."
    },
    {
        id: "logistics-optimization",
        title: "Logistics Optimization Platform",
        category: "AI & Automation",
        description: "An AI-powered platform that automates the entire freight procurement lifecycle by integrating directly with DAT's API.",
        tech: ["Machine Learning", "API Integration", "Data Analytics", "Fleet Management"],
        problem: "The freight procurement industry has long been hampered by manual, time-consuming processes. Dispatchers and logistics managers spend countless hours screening load boards, calculating profitability, and negotiating rates, leading to operational inefficiencies and missed revenue opportunities in a highly competitive market.",
        solution: "This AI-powered platform automates the entire freight procurement lifecycle by integrating directly with DAT's API. It employs machine learning models to ingest and analyze thousands of load data points in real-time, automatically screening, ranking, and selecting the most profitable freight. The system also provides intelligent rate negotiation insights to empower data-driven decision-making.",
        impact: "The platform proved to be transformative, increasing operational efficiency by achieving a 233% reduction in manual load review time. By effectively managing over 10 daily trucks, it drove a significant improvement in overall profitability, revolutionizing the traditional freight management process."
    },
    {
        id: "automated-job-search",
        title: "Automated Job Search Tool",
        category: "AI & Automation",
        description: "A specialized tool built to automate the discovery of hard-to-find job opportunities on corporate career pages.",
        tech: ["Python", "Web Scraping", "Google Search Operators", "Automation Frameworks"],
        problem: "The most visible job postings on mainstream boards are often saturated with thousands of applicants. Meanwhile, countless high-quality opportunities remain \"hidden\" on corporate career pages and application tracking systems (ATS), which are incredibly tedious and time-consuming to find and monitor manually.",
        solution: "This specialized tool was built to automate the discovery of these hard-to-find job opportunities. It systematically uses advanced Google search operators and web scraping techniques to scan corporate career pages and ATS platforms like ADP. The tool intelligently filters and aggregates listings that are not typically found on major job boards.",
        impact: "By automating the discovery process, this tool provides users with a significant competitive advantage in their job search. It saves countless hours of manual effort and reveals roles that receive far fewer applicants, increasing the user's chances of securing a position."
    },
    {
        id: "crewai-gui",
        title: "CrewAI Graphical User Interface",
        category: "Security & AI",
        description: "An intuitive graphical user interface (GUI) for the CrewAI framework, simplifying the creation and management of agent teams.",
        tech: ["CrewAI Framework", "Python", "Model Context Protocol (MCP)"],
        problem: "While the CrewAI framework is powerful for creating autonomous AI agent teams, its reliance on code and command-line interfaces can be complex and unintuitive. This creates a barrier for managing, deploying, and scaling sophisticated multi-agent systems, limiting the framework's full potential for broader applications.",
        solution: "This project delivers a clean, intuitive graphical user interface (GUI) for the CrewAI framework, simplifying the entire process of creating and managing agent teams. A core feature is the integration of the Model Context Protocol (MCP), which enables CrewAI agents to seamlessly interface with external tools, APIs, and data sources, vastly expanding their capabilities beyond their built-in functions.",
        impact: "The GUI makes orchestrating complex AI agent workflows significantly more accessible and manageable. It enhances the power and flexibility of the CrewAI framework, enabling users to build, maintain, and deploy more sophisticated and practical autonomous systems with ease."
    },
    {
        id: "winget-ui",
        title: "WinGet UI",
        category: "AI & Automation",
        description: "A clean and modern graphical user interface (GUI) built on top of the WinGet command-line tool.",
        tech: ["C#", ".NET", "WinGet CLI", "WinUI/WPF"],
        problem: "The Windows Package Manager (WinGet) is a robust tool for streamlining software installation and management, but its command-line-only nature makes it inaccessible or inefficient for the majority of Windows users who are accustomed to graphical interfaces.",
        solution: "To bridge this usability gap, this project provides a clean and modern graphical user interface (GUI) built on top of the WinGet command-line tool. The desktop application allows users to visually search, install, update, and uninstall applications from the vast WinGet repository with just a few clicks, eliminating the need to interact with a terminal.",
        impact: "This application makes the power of WinGet accessible to Windows users of all technical levels. It dramatically simplifies software management, enhances productivity for developers and power users, and provides a much more intuitive and user-friendly experience for maintaining a system's software suite."
    }
];
