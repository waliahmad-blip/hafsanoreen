# HAFFU STUDIO — System Architecture

```
┌──────────────────────────────────────────────────────┐
│                   CLIENT BROWSER                      │
│  ┌──────────┐  ┌───────────┐  ┌───────────────────┐ │
│  │ WebGL    │  │ HAFFU Chat│  │ Static Pages      │ │
│  │ Logo     │  │ Widget    │  │ (19 HTML pages)   │ │
│  │ (Three)  │  │ (WebSocket│  │ (CSS + JS)        │ │
│  └──────────┘  │ / REST)   │  └───────────────────┘ │
│                 └─────┬─────┘                         │
└───────────────────────┼──────────────────────────────┘
                        │ HTTPS
┌───────────────────────┼──────────────────────────────┐
│              VERCEL / CLOUDFLARE                      │
│  ┌────────────────────▼───────────────────────────┐  │
│  │              Static Site Hosting                │  │
│  │         (hafsanoreen.com — CDN edge)           │  │
│  └────────────────────────────────────────────────┘  │
│  ┌────────────────────┐                              │
│  │   API Rewrites     │ → /api/* → Cloud Run        │
│  └────────────────────┘                              │
└───────────────────────┬──────────────────────────────┘
                        │
┌───────────────────────▼──────────────────────────────┐
│              GOOGLE CLOUD RUN                         │
│  ┌────────────────────────────────────────────────┐  │
│  │           Express API Server                    │  │
│  │  ┌──────────┐ ┌──────────┐ ┌───────────────┐  │  │
│  │  │ Routes   │ │Middleware│ │ Services      │  │  │
│  │  │ /haffu   │ │ auth     │ │ Stripe        │  │  │
│  │  │ /booking │ │ validate │ │ Calendar      │  │  │
│  │  │ /payment │ │ sanitize │ │ Email         │  │  │
│  │  │ /admin   │ │ rate-lmt │ │ Analytics     │  │  │
│  │  └──────────┘ └──────────┘ └───────┬───────┘  │  │
│  │                                     │          │  │
│  │  ┌──────────────────────────────────▼────────┐ │  │
│  │  │        HAFFU Orchestrator                 │ │  │
│  │  │  Context Builder → Tool Registry          │ │  │
│  │  │  → Intelligence Layer → Sanitize         │ │  │
│  │  └────────────────────┬──────────────────────┘ │  │
│  └───────────────────────┼────────────────────────┘  │
└──────────────────────────┼───────────────────────────┘
                           │
┌──────────────────────────┼───────────────────────────┐
│              GOOGLE CLOUD SERVICES                    │
│  ┌───────────────────────▼──────────────────────┐    │
│  │            Vertex AI                         │    │
│  │     Configured conversation model           │    │
│  │     Recovery engine (automatic fallback)    │    │
│  └──────────────────────────────────────────────┘    │
│  ┌──────────────────┐  ┌────────────────────────┐    │
│  │    Firestore      │  │   Cloud Storage        │    │
│  │  Clients, Bookings│  │   Contracts, Images    │    │
│  │  Conversations,   │  │                        │    │
│  │  Payments, Stats  │  │                        │    │
│  └──────────────────┘  └────────────────────────┘    │
│  ┌──────────────────┐  ┌────────────────────────┐    │
│  │  Google Calendar  │  │   Stripe (Payments)    │    │
│  │  Availability     │  │   Checkout Sessions    │    │
│  └──────────────────┘  └────────────────────────┘    │
└──────────────────────────────────────────────────────┘
```

## Data Flow
1. User visits → Static HTML served from CDN edge (sub-100ms)
2. HAFFU chat opens → WebSocket/REST to Cloud Run API
3. API routes through Express middleware (auth, validation, rate limiting)
4. HAFFU Orchestrator builds context → calls the configured intelligence layer
5. HAFFU Orchestrator builds context → calls AI → returns response
6. Tool calls (booking, payment, calendar) → Firestore/Stripe/Google APIs
7. Response returned to browser → rendered in chat widget