# 🚀 RetroPrep

RetroPrep is a premium, SaaS-style web application designed to solve the fragmentation of college life. It provides engineering students with a centralized, dark-mode workspace that merges dynamic syllabus tracking, daily execution planning, AI-powered tutoring, and a safe community forum into one cohesive platform.

🌐 Live Demo: https://edutrack-nitkkr-912.vercel.app/

![RetroPrep Banner](screenshot.png)
*(Note: Replace this link with an actual screenshot of your dashboard)*

---

## ✨ Key Features

### 📚 Dynamic Curriculum Engine

* **Context-Aware:** Automatically filters subjects, units, and topics based on the user's specific Branch and Semester.
* **Unified Resources:** Direct access to PDF notes, Previous Year Questions (PYQs), and curated YouTube lectures right next to the relevant topics.
* **Gamified Progress:** Granular checkbox tracking that feeds into satisfying, dynamic circular progress rings.

### 📝 Exam Planner

* **Mid-Sem & End-Sem Focus:** Plan specifically for upcoming exams by selecting subject-wise and unit-wise topics.
* **Custom Topic Selection:** Choose only the topics included in your exam syllabus.
* **Progress Tracking:** Monitor preparation progress separately for Mid-Sem and End-Sem exams.
* **Smart Prioritization:** Helps students focus on high-weightage and relevant topics.

### ✅ Daily Execution Planner

* **Slide-out Sidebar:** A persistent, glass-morphic daily task manager accessible from any page without breaking focus.
* **Momentum Tracking:** Built-in "Show-up Streak" to encourage daily consistency.
* **Frictionless Workflow:** One-click "Copy Yesterday's Tasks" functionality.

### 🤖 AI Tutor & Evaluator

* **Zero-Latency LLM:** Powered by the Groq API (Llama 3.1) for lightning-fast responses.
* **Mock Exam Generator:** Generates custom practice papers based on specific subjects and exam types.
* **Instant Grader:** Students can type answers to complex questions and receive a score out of 100, complete with specific strengths and areas for improvement.

### 💚 Safe Space Community

* **Anonymous Support:** A secure forum where students can vent, ask for advice, and support peers without stigma.
* **AI Comfort:** An automated, empathetic AI companion that ensures no cry for help goes unanswered.
* **Compassion Leaderboard:** A gamified system that rewards students with points when their advice is liked by the community.

### ⚙️ Secure Admin Portal

* **Live Database Mutations:** PIN-protected portal for college admins to dynamically inject new Branches, Subjects, and Units.
* **Cloud Storage:** Seamless drag-and-drop interface for uploading PDFs directly to Supabase Storage buckets.

---

## 🛠 Tech Stack

### Frontend

* React.js (Initialized with Vite)
* Tailwind CSS (Custom Dark Theme & Glassmorphism)
* Framer Motion (Smooth layout animations)
* Lucide React (Premium iconography)
* React Router DOM (Client-side routing)

### Backend & BaaS

* Supabase (PostgreSQL Database)
* Supabase Authentication
* Supabase Storage (PDF/PYQ hosting)
* Supabase RPC (Remote Procedure Calls for Leaderboard logic)

### Artificial Intelligence

* Groq API running *Llama-3.1-8b-instant*

### Deployment

* Vercel

---

## 📁 Project Structure

```
retroprep/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components (Cards, Inputs, Buttons)
│   │   └── layout/         # MainLayout, Sidebar, Navbar
│   ├── features/           # Feature-based modules
│   │   ├── ai-tutor/       # AI Generation & Evaluation logic
│   │   ├── auth/           # Supabase Auth hooks & pages
│   │   ├── community/      # Safe Space forum components
│   │   ├── daily-planner/  # Planner context & slide-out sidebar
│   │   └── syllabus/       # Curriculum fetching & progress tracking
│   ├── hooks/              # Global custom React hooks
│   ├── lib/                # Supabase client initialization
│   ├── pages/              # Top-level route components (Dashboard, Profile, Admin)
│   ├── App.jsx             # Global routing and layout wrapper
│   └── main.jsx            # React entry point
├── .env                    # Environment variables (ignored by Git)
├── tailwind.config.js      # Tailwind theme configuration
└── package.json            # Project dependencies
```

---

## 🚀 Getting Started

Follow these steps to run RetroPrep locally on your machine.

### Prerequisites

* Node.js (v18 or higher)
* A Supabase Account
* A Groq API Key

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/akash-912/college-companion
cd college-companion
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GROQ_API_KEY=your_groq_api_key
```

4. **Run the development server**

```bash
npm run dev
```

---

## 🔐 Environment Variables

| Variable               | Description                  |
| ---------------------- | ---------------------------- |
| VITE_SUPABASE_URL      | Supabase project URL         |
| VITE_SUPABASE_ANON_KEY | Supabase public anon key     |
| VITE_GROQ_API_KEY      | Groq API key for AI features |

---

## 🌟 Future Improvements

* Mobile app version
* Smart AI study planner (auto timetable generation)
* Collaborative study rooms
* Offline mode support

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Acknowledgements

Built with passion to simplify student life and improve academic productivity.
