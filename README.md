# 100 Projects Dashboard

A clean, production-ready pure **HTML + CSS + JavaScript** portfolio dashboard that holds 100 projects.

## How to add a live preview link

1. Open `js/data.js`
2. Find the project by its `id`
3. Change:
   ```js
   status: "planned",
   link: "",
   ```
   to:
   ```js
   status: "completed",   // or "in-progress"
   link: "https://your-username.github.io/project-name/",
   ```
4. Save the file and refresh the page.

The **Preview Project →** button will automatically become clickable and open the live link in a new tab.

## Features

- 100 ready-named projects
- Live search
- Category chips
- Status filters (All / Completed / In Progress / Planned)
- Progress bar (X / 100 completed)
- Dark / Light mode (system preference + toggle)
- Fully responsive
- Accessible (keyboard + ARIA)
- Zero dependencies

## Project List (1–100)

| #   | Project Name                  | Category     |
|-----|-------------------------------|--------------|
| 001 | To-Do List App                | Utility      |
| 002 | Weather Dashboard             | Dashboard    |
| 003 | Calculator                    | Utility      |
| 004 | Digital Clock                 | Utility      |
| 005 | Password Generator            | Utility      |
| 006 | Quiz App                      | Educational  |
| 007 | Tic Tac Toe                   | Game         |
| 008 | Snake Game                    | Game         |
| 009 | Memory Card Game              | Game         |
| 010 | Pomodoro Timer                | Productivity |
| 011 | Expense Tracker               | Dashboard    |
| 012 | Notes App                     | Productivity |
| 013 | Color Picker Tool             | Utility      |
| 014 | Image Slider                  | Animation    |
| 015 | Form Validator                | Form         |
| 016 | Countdown Timer               | Utility      |
| 017 | Random Quote Generator        | Fun          |
| 018 | Markdown Previewer            | Tool         |
| 019 | Typing Speed Test             | Educational  |
| 020 | Drawing Board                 | Fun          |
| 021 | Music Player                  | Tool         |
| 022 | Kanban Board                  | Productivity |
| 023 | QR Code Generator             | Utility      |
| 024 | Unit Converter                | Utility      |
| 025 | Stopwatch                     | Utility      |
| 026 | Rock Paper Scissors           | Game         |
| 027 | Guess the Number              | Game         |
| 028 | Currency Converter            | Utility      |
| 029 | BMI Calculator                | Utility      |
| 030 | Age Calculator                | Utility      |
| 031 | Portfolio Landing Page        | Landing      |
| 032 | Product Landing Page          | Landing      |
| 033 | Restaurant Menu               | Landing      |
| 034 | Blog Homepage                 | Landing      |
| 035 | E-commerce Product Card       | Landing      |
| 036 | Accordion FAQ                 | Component    |
| 037 | Modal Popup                   | Component    |
| 038 | Tabs Component                | Component    |
| 039 | Tooltip System                | Component    |
| 040 | Progress Bar                  | Component    |
| 041 | Infinite Scroll Gallery       | Animation    |
| 042 | Parallax Scrolling            | Animation    |
| 043 | Scroll Progress Indicator     | Animation    |
| 044 | Typing Animation              | Animation    |
| 045 | Loading Spinner Collection    | Animation    |
| 046 | Dark Mode Toggle              | Utility      |
| 047 | Custom Select Dropdown        | Form         |
| 048 | Multi-step Form               | Form         |
| 049 | File Upload Preview           | Form         |
| 050 | Tag Input                     | Form         |
| 051 | Chat UI                       | Dashboard    |
| 052 | Admin Dashboard               | Dashboard    |
| 053 | Analytics Cards               | Dashboard    |
| 054 | Calendar Widget               | Dashboard    |
| 055 | Notification Center           | Component    |
| 056 | Search Autocomplete           | Component    |
| 057 | Pagination                    | Component    |
| 058 | Breadcrumb Navigation         | Component    |
| 059 | Sidebar Navigation            | Component    |
| 060 | Toast Notifications           | Component    |
| 061 | Drag and Drop List            | Tool         |
| 062 | Sortable Table                | Tool         |
| 063 | Filterable Table              | Tool         |
| 064 | CSV to Table                  | Tool         |
| 065 | JSON Viewer                   | Tool         |
| 066 | Code Snippet Highlighter      | Tool         |
| 067 | Clipboard Manager             | Utility      |
| 068 | Local Storage Manager         | Tool         |
| 069 | Theme Color Generator         | Utility      |
| 070 | Gradient Generator            | Utility      |
| 071 | Box Shadow Generator          | Utility      |
| 072 | Border Radius Playground      | Utility      |
| 073 | Flexbox Playground            | Educational  |
| 074 | CSS Grid Playground           | Educational  |
| 075 | Responsive Tester             | Tool         |
| 076 | Lorem Ipsum Generator         | Utility      |
| 077 | Random User Generator         | Fun          |
| 078 | Dice Roller                   | Fun          |
| 079 | Coin Flip                     | Fun          |
| 080 | Random Name Picker            | Fun          |
| 081 | Minesweeper                   | Game         |
| 082 | 2048 Game                     | Game         |
| 083 | Whack-a-Mole                  | Game         |
| 084 | Pong Game                     | Game         |
| 085 | Breakout Game                 | Game         |
| 086 | Hangman                       | Game         |
| 087 | Word Counter                  | Utility      |
| 088 | Text Case Converter           | Utility      |
| 089 | URL Shortener UI              | Tool         |
| 090 | Bookmark Manager              | Productivity |
| 091 | Habit Tracker                 | Productivity |
| 092 | Mood Tracker                  | Productivity |
| 093 | Reading List                  | Productivity |
| 094 | Movie Search App              | Dashboard    |
| 095 | GitHub Profile Finder         | Dashboard    |
| 096 | IP Address Tracker            | Tool         |
| 097 | Random Joke Generator         | Fun          |
| 098 | Advice Generator              | Fun          |
| 099 | Dictionary App                | Educational  |
| 100 | 100 Projects Dashboard        | Dashboard    |

## File Structure

```
project-dashboard/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── layout.css
│   ├── components.css
│   ├── utilities.css
│   └── theme.css
├── js/
│   ├── data.js          ← edit this to add links
│   ├── utils.js
│   ├── render.js
│   ├── filters.js
│   ├── theme.js
│   └── main.js
└── README.md
```

Just open `index.html` in any modern browser to start.
