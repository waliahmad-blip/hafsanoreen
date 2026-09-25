# 🎞️ HAFSA NOREEN PHOTOGRAPHY

**"Capturing the laughter, tenderness, and fleeting beauty of life like scenes from your favourite film."**

> 106 files · 5,000+ lines · WebGL cinematic logo · HAFFU AI assistant

---

## The Studio

Hafsa Noreen is a cinematic natural-light photographer based in Oakville, Ontario, serving Halton Region. This repository contains her complete digital studio — a production-grade website with a WebGL 3D animated logo, an AI-powered chat assistant named **Haffu**, and a full backend API for automated booking, payments, and client management.

---

## Project Structure

```
C:\Haffu\
├── web/                 # THE SITE — Next.js 16 + React Three Fiber (Vercel)
│   ├── app/             # 42 routes: home, shop, story, booking, SEO pages
│   ├── components/      # Nav, Haffu dimension chat, forms, WebGL scenes
│   │   └── three/       # LightCorridor hero, DimensionCanvas backdrop
│   ├── lib/             # products, checkout, story-content (full 15-chapter story)
│   └── out/             # Static export, served by the Express API
├── src/                 # Backend API (Cloud Run / Express)
│   ├── config/          # Vertex AI multi-model fleet, Firebase, Stripe
│   ├── services/haffu/  # AI orchestrator, context builder, 30 tools
│   ├── routes/          # REST endpoints (chat, payments, bookings)
│   └── models/          # Client, Booking, Payment, Conversation (Firestore)
├── public-legacy/       # ARCHIVED first-generation static site (read-only)
├── docs/                # Deployment, Vertex setup, SEO checklist
├── BLUEPRINT.md         # Complete business blueprint
└── .env.example, package.json, vercel.json (web/)
```

> The homepage's one true animation is the **LightCorridor** in `web/`
> (a WebGL corridor of framed photographs you fly through). The archived
> `public-legacy/` build is kept only for reference and is not deployed.

---

## WebGL Animated Logo

- Rotating octahedron diamond (brass metallic, ACES tone mapping)
- 3 orbiting aperture rings + 200 bokeh particles
- 380-point dust ring + 3 constellation wisps
- 4-point cinematic lighting + mouse parallax
- Film grain overlay + light leak effects

---

## HAFFU — The Studio AI

HAFFU greets visitors, answers questions, checks availability, books sessions, sends contracts, and collects retainers. Hafsa only gets notified of confirmed bookings.

- **Chat widget:** quick replies, typing indicators, voice input
- **Full-screen mode:** immersive viewport takeover with WebGL particles
- **Backend orchestrator:** context builder + 7 AI tools + recovery mode

---

## Quick Start

```bash
cd public && npx serve .        # Frontend → localhost:3000
cp .env.example .env && npm i && npm run dev  # Backend
```

## Deploy

- **Frontend:** `vercel --prod`
- **Backend:** `gcloud run deploy haffu-api --source .`

---

## Stack

HTML5 · CSS3 · Vanilla JS · Three.js · GSAP · Lenis · Node.js · Express · Vertex AI · Firestore · Stripe · Google Calendar · Resend · Helmet · Zod

---

*"Art is not what you see, but what you make others see." — Edgar Degas*

**Built for Hafsa. The studio is in Haffu's hands.** ✨