// ============================================================
// 100 PROJECTS DATA
// ============================================================
// HOW TO ADD A LIVE LINK:
// 1. Find the project by its id
// 2. Change status to "completed"
// 3. Paste the full URL into the "link" field
// Example:
//   link: "https://yourusername.github.io/todo-app/"
// ============================================================

const projects = [
  {
    id: 1,
    title: "To-Do List App",
    description: "Add, edit, delete and mark tasks as complete with local storage.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather info using OpenWeatherMap API with city search.",
    category: "Dashboard",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 3,
    title: "Calculator",
    description: "Clean scientific calculator with keyboard support.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "https://adityamanav.github.io/clock-project/",
    featured: false
  },
  {
    id: 4,
    title: "Digital Clock",
    description: "Live digital clock with date, timezone and dark mode.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "https://adityamanav.github.io/clock-project/",
    featured: false
  },
  {
    id: 5,
    title: "Password Generator",
    description: "Generate strong passwords with custom length and character options.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 6,
    title: "Quiz App",
    description: "Multiple choice quiz with score tracking and timer.",
    category: "Educational",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 7,
    title: "Tic Tac Toe",
    description: "Classic two-player game with win detection and restart.",
    category: "Game",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 8,
    title: "Snake Game",
    description: "Retro snake game with score and increasing speed.",
    category: "Game",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 9,
    title: "Memory Card Game",
    description: "Flip cards to find matching pairs with move counter.",
    category: "Game",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 10,
    title: "Pomodoro Timer",
    description: "Focus timer with work/break cycles and notifications.",
    category: "Productivity",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 11,
    title: "Expense Tracker",
    description: "Track income and expenses with charts and local storage.",
    category: "Dashboard",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 12,
    title: "Notes App",
    description: "Create, edit and delete notes with search functionality.",
    category: "Productivity",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 13,
    title: "Color Picker Tool",
    description: "Pick colors, generate palettes and copy HEX/RGB codes.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 14,
    title: "Image Slider",
    description: "Responsive image carousel with autoplay and dots.",
    category: "Animation",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 15,
    title: "Form Validator",
    description: "Real-time form validation with custom error messages.",
    category: "Form",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 16,
    title: "Countdown Timer",
    description: "Custom countdown to any date with days, hours, minutes.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 17,
    title: "Random Quote Generator",
    description: "Fetch and display inspirational quotes with share button.",
    category: "Fun",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 18,
    title: "Markdown Previewer",
    description: "Live markdown editor with real-time HTML preview.",
    category: "Tool",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 19,
    title: "Typing Speed Test",
    description: "Measure WPM and accuracy with random text passages.",
    category: "Educational",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 20,
    title: "Drawing Board",
    description: "Canvas-based drawing app with colors and brush sizes.",
    category: "Fun",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 21,
    title: "Music Player",
    description: "Custom audio player with playlist and progress bar.",
    category: "Tool",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 22,
    title: "Kanban Board",
    description: "Drag-and-drop task board with columns and local storage.",
    category: "Productivity",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 23,
    title: "QR Code Generator",
    description: "Generate QR codes from text or URL instantly.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 24,
    title: "Unit Converter",
    description: "Convert length, weight, temperature and more units.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 25,
    title: "Stopwatch",
    description: "Precise stopwatch with lap times and reset.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 26,
    title: "Rock Paper Scissors",
    description: "Play against computer with score tracking.",
    category: "Game",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 27,
    title: "Guess the Number",
    description: "Number guessing game with hints and attempts limit.",
    category: "Game",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 28,
    title: "Currency Converter",
    description: "Convert between currencies using live exchange rates.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 29,
    title: "BMI Calculator",
    description: "Calculate Body Mass Index with category feedback.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 30,
    title: "Age Calculator",
    description: "Calculate exact age in years, months and days.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 31,
    title: "Portfolio Landing Page",
    description: "Modern personal portfolio with smooth scroll and sections.",
    category: "Landing",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 32,
    title: "Product Landing Page",
    description: "SaaS product page with pricing table and CTA.",
    category: "Landing",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 33,
    title: "Restaurant Menu",
    description: "Interactive menu with filters for category and price.",
    category: "Landing",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 34,
    title: "Blog Homepage",
    description: "Clean blog layout with featured posts and sidebar.",
    category: "Landing",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 35,
    title: "E-commerce Product Card",
    description: "Animated product cards with add-to-cart interaction.",
    category: "Landing",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 36,
    title: "Accordion FAQ",
    description: "Smooth expandable FAQ section with accessibility.",
    category: "Component",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 37,
    title: "Modal Popup",
    description: "Reusable accessible modal with keyboard support.",
    category: "Component",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 38,
    title: "Tabs Component",
    description: "Accessible tabbed interface with smooth transitions.",
    category: "Component",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 39,
    title: "Tooltip System",
    description: "Custom tooltips that appear on hover or focus.",
    category: "Component",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 40,
    title: "Progress Bar",
    description: "Animated progress bars with percentage labels.",
    category: "Component",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 41,
    title: "Infinite Scroll Gallery",
    description: "Image gallery that loads more content on scroll.",
    category: "Animation",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 42,
    title: "Parallax Scrolling",
    description: "Smooth parallax effect on hero and content sections.",
    category: "Animation",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 43,
    title: "Scroll Progress Indicator",
    description: "Top progress bar showing how far user has scrolled.",
    category: "Animation",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 44,
    title: "Typing Animation",
    description: "Typewriter effect for headlines and text.",
    category: "Animation",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 45,
    title: "Loading Spinner Collection",
    description: "Multiple pure CSS and JS loading animations.",
    category: "Animation",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 46,
    title: "Dark Mode Toggle",
    description: "System-aware dark/light mode with smooth transition.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 47,
    title: "Custom Select Dropdown",
    description: "Accessible custom dropdown replacing native select.",
    category: "Form",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 48,
    title: "Multi-step Form",
    description: "Wizard-style form with progress steps and validation.",
    category: "Form",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 49,
    title: "File Upload Preview",
    description: "Drag-and-drop file upload with image preview.",
    category: "Form",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 50,
    title: "Tag Input",
    description: "Add and remove tags with keyboard support.",
    category: "Form",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 51,
    title: "Chat UI",
    description: "Modern chat interface with message bubbles and timestamps.",
    category: "Dashboard",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 52,
    title: "Admin Dashboard",
    description: "Clean admin panel layout with sidebar and cards.",
    category: "Dashboard",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 53,
    title: "Analytics Cards",
    description: "KPI cards with numbers, trends and mini charts.",
    category: "Dashboard",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 54,
    title: "Calendar Widget",
    description: "Interactive monthly calendar with event markers.",
    category: "Dashboard",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 55,
    title: "Notification Center",
    description: "Dropdown notification panel with read/unread states.",
    category: "Component",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 56,
    title: "Search Autocomplete",
    description: "Live search suggestions with keyboard navigation.",
    category: "Component",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 57,
    title: "Pagination",
    description: "Accessible pagination component with page numbers.",
    category: "Component",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 58,
    title: "Breadcrumb Navigation",
    description: "Dynamic breadcrumb trail for multi-level pages.",
    category: "Component",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 59,
    title: "Sidebar Navigation",
    description: "Collapsible sidebar with nested menu items.",
    category: "Component",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 60,
    title: "Toast Notifications",
    description: "Non-blocking toast messages with auto-dismiss.",
    category: "Component",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 61,
    title: "Drag and Drop List",
    description: "Reorderable list using native drag and drop API.",
    category: "Tool",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 62,
    title: "Sortable Table",
    description: "Table with clickable headers for sorting columns.",
    category: "Tool",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 63,
    title: "Filterable Table",
    description: "Data table with live search and column filters.",
    category: "Tool",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 64,
    title: "CSV to Table",
    description: "Upload CSV file and render it as an HTML table.",
    category: "Tool",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 65,
    title: "JSON Viewer",
    description: "Pretty-print and collapsible JSON tree viewer.",
    category: "Tool",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 66,
    title: "Code Snippet Highlighter",
    description: "Display code with syntax highlighting (basic).",
    category: "Tool",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 67,
    title: "Clipboard Manager",
    description: "Copy text to clipboard with visual feedback.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 68,
    title: "Local Storage Manager",
    description: "View, edit and clear browser localStorage data.",
    category: "Tool",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 69,
    title: "Theme Color Generator",
    description: "Generate harmonious color palettes from one base color.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 70,
    title: "Gradient Generator",
    description: "Create CSS gradients with live preview and copy code.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 71,
    title: "Box Shadow Generator",
    description: "Visual tool to create and copy CSS box-shadow values.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 72,
    title: "Border Radius Playground",
    description: "Interactive tool for complex border-radius values.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 73,
    title: "Flexbox Playground",
    description: "Visual playground to learn and test Flexbox properties.",
    category: "Educational",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 74,
    title: "CSS Grid Playground",
    description: "Interactive grid builder with live CSS output.",
    category: "Educational",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 75,
    title: "Responsive Tester",
    description: "Preview any URL in different device sizes.",
    category: "Tool",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 76,
    title: "Lorem Ipsum Generator",
    description: "Generate placeholder text with custom length options.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 77,
    title: "Random User Generator",
    description: "Generate fake user profiles using random data.",
    category: "Fun",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 78,
    title: "Dice Roller",
    description: "Roll multiple dice with animation and total score.",
    category: "Fun",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 79,
    title: "Coin Flip",
    description: "Animated coin flip with heads/tails result.",
    category: "Fun",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 80,
    title: "Random Name Picker",
    description: "Pick a random name from a list for giveaways.",
    category: "Fun",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 81,
    title: "Minesweeper",
    description: "Classic minesweeper game with difficulty levels.",
    category: "Game",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 82,
    title: "2048 Game",
    description: "Popular 2048 puzzle with score and best score.",
    category: "Game",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 83,
    title: "Whack-a-Mole",
    description: "Fast-paced game hitting moles as they appear.",
    category: "Game",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 84,
    title: "Pong Game",
    description: "Classic two-player Pong with scoreboard.",
    category: "Game",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 85,
    title: "Breakout Game",
    description: "Break bricks with a bouncing ball and paddle.",
    category: "Game",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 86,
    title: "Hangman",
    description: "Word guessing game with hangman drawing.",
    category: "Game",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 87,
    title: "Word Counter",
    description: "Count words, characters, sentences and reading time.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 88,
    title: "Text Case Converter",
    description: "Convert text between upper, lower, title and camel case.",
    category: "Utility",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 89,
    title: "URL Shortener UI",
    description: "Frontend UI for shortening URLs (mock or real API).",
    category: "Tool",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 90,
    title: "Bookmark Manager",
    description: "Save, organize and search bookmarks with local storage.",
    category: "Productivity",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 91,
    title: "Habit Tracker",
    description: "Track daily habits with streak counters.",
    category: "Productivity",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 92,
    title: "Mood Tracker",
    description: "Log daily mood and view simple statistics.",
    category: "Productivity",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 93,
    title: "Reading List",
    description: "Manage books you want to read with status tags.",
    category: "Productivity",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 94,
    title: "Movie Search App",
    description: "Search movies using OMDb API and show posters.",
    category: "Dashboard",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 95,
    title: "GitHub Profile Finder",
    description: "Search GitHub users and display profile cards.",
    category: "Dashboard",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 96,
    title: "IP Address Tracker",
    description: "Show user IP and approximate location on map.",
    category: "Tool",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 97,
    title: "Random Joke Generator",
    description: "Fetch and display jokes from a public API.",
    category: "Fun",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 98,
    title: "Advice Generator",
    description: "Get random advice slips with nice card design.",
    category: "Fun",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 99,
    title: "Dictionary App",
    description: "Look up word definitions, synonyms and examples.",
    category: "Educational",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: false
  },
  {
    id: 100,
    title: "100 Projects Dashboard",
    description: "This very dashboard you are looking at right now.",
    category: "Dashboard",
    status: "planned",
    tech: ["HTML", "CSS", "JS"],
    link: "",
    featured: true
  }
];
