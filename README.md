# 🏏 IPL Akinator: AI-Powered IPL Cricketer Deduction Game

An advanced, modern IPL-themed deduction game inspired by Akinator, powered by OpenAI’s large language models.

Think of any IPL cricketer from past or present, and the AI intelligently narrows down your player through strategic yes/no questions before making its final prediction.

Originally engineered using Bayesian Inference and Shannon Entropy, this project has now evolved into a far more dynamic **LLM-driven Chain of Thought (CoT) reasoning engine** using OpenAI’s `gpt-4o-mini`, enabling deeper logical deduction, adaptability, and significantly enhanced gameplay.

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-cyan)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT_4o_Mini-green)

---

## 👨‍💻 Created By Team HackSmith

### **HackSmith**
- **Vagisha**
- **Sohail**

Built during hackathon innovation with a focus on:
- AI reasoning
- Interactive user experience
- Modern frontend architecture
- IPL data intelligence

---

## ✨ Core Features

### 🧠 AI Deduction Engine
- Powered by OpenAI’s advanced language models
- Dynamically generates intelligent, context-aware questions
- Avoids repetitive questioning patterns
- Continuously adapts based on user responses

### 🔍 Chain of Thought Prompting
- Forces structured reasoning before every move
- Estimates eliminated players mathematically
- Maintains strategic deduction accuracy
- Simulates advanced logical narrowing

### 📊 Live Probability Tracking
- Real-time top 5 candidate predictions
- Dynamic confidence graph updates
- Visualized probability shifts after every answer

### 🖼️ Wikipedia Integration
- Automatically fetches real player images
- Provides authentic final reveal experience
- Enhances immersion and realism

### 🔁 Persistent Error Correction
- Incorrect guesses are fed back into the system
- AI learns and adjusts instantly
- Gameplay continues seamlessly

### 🏏 Massive IPL Database
- Simulated pool of 350+ IPL players
- Includes:
  - Legends
  - Current stars
  - Emerging talents
  - Domestic players
  - Overseas icons

---

## 🛠️ Tech Stack

### Frontend
- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Lucide React**

### APIs
- **OpenAI API** → Core reasoning and deduction
- **Wikipedia API** → Player images and metadata

### Architecture Highlights
- Strict JSON response system
- Prompt-engineered reasoning loops
- SPA deployment compatibility
- LocalStorage API key management

---

## 🚀 Getting Started

## Prerequisites
Ensure you have:

- [Node.js](https://nodejs.org/)
- OpenAI API Key

---

### Installation Steps

### 1️⃣ Clone Repository
```bash
git clone <your-repo-url>
cd ai-ipl-player-guessing-game
2️⃣ Install Dependencies
npm install
3️⃣ Start Development Server
npm run dev
4️⃣ Launch Game
Open localhost URL
Click Insert Key
Paste your OpenAI API key
Start playing instantly
🔐 Security
API key stored locally in browser
No backend server required
Direct communication with OpenAI
Fully client-side architecture
📦 Production Build

Generate optimized deployment files:

npm run build

Preview production build locally:

npm run preview
🌍 Deployment Options

Because this is a static SPA, it can be deployed on:

Vercel
Netlify
GitHub Pages
Firebase Hosting
Cloudflare Pages
🧠 Under the Hood
Step 1: User Input

The user answers yes/no questions.

Step 2: OpenAI Processing

The system sends:

Previous answers
Game history
Prompt constraints
Candidate pool logic
Step 3: AI Output

The model returns:

reasoning
action
eliminatedCount
topCandidates
Step 4: Strategic Deduction

AI either:

Asks another optimized question
Makes a final guess
Step 5: Reveal System
Wikipedia thumbnail fetched
Final guess displayed
Retry if incorrect
🎯 Why This Project Stands Out
Compared to Traditional Akinator Systems:
Feature	Traditional Logic	IPL Akinator
Static Questions	❌	✅
Dynamic Reasoning	❌	✅
Live Probability Graph	❌	✅
Error Recovery	❌	✅
LLM Creativity	❌	✅
📈 Future Enhancements
Multiplayer mode
Leaderboards
Expanded cricket database
Voice interaction
Regional language support
Mobile app deployment
Fantasy team integration
🏆 Hackathon Vision

This project demonstrates:

Practical LLM implementation
Sports-tech innovation
Prompt engineering excellence
Frontend optimization
Real-world AI gaming applications
📜 License

This project is developed for:

Educational purposes
Hackathon innovation
Entertainment

All player data, names, and images belong to their respective owners and Wikipedia.

🏏 Think. Play. Challenge the AI.
Built with innovation by Team HackSmith — Vagisha & Sohail
