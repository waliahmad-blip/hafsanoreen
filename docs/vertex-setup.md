# HAFFU STUDIO — Intelligence Layer Setup

## Prerequisites
1. Cloud account with billing enabled
2. The AI platform API enabled in your project
3. Service account with the platform user role

## Step 1 — Create Service Account
```bash
gcloud iam service-accounts create haffu-intelligence --display-name "HAFFU Intelligence"
gcloud projects add-iam-policy-binding PROJECT_ID --member="serviceAccount:haffu-intelligence@PROJECT_ID.iam.gserviceaccount.com" --role="roles/aiplatform.user"
gcloud iam service-accounts keys create ./service-account.json --iam-account=haffu-intelligence@PROJECT_ID.iam.gserviceaccount.com
```

## Step 2 — The Model Fleet
Every model slot is configured in your private `.env` — **no model ids appear
in code or in this repository**. Open your provider's model dashboard, copy the
id available to your project, and paste it into the matching slot:

| Task | Env var |
|------|---------|
| conversation / reasoning | `VERTEX_AI_MODEL` |
| quick replies | `VERTEX_AI_FAST_MODEL` |
| vision | `VERTEX_AI_VISION_MODEL` |
| image_edit | `VERTEX_AI_IMAGE_MODEL` |
| image_pro | `VERTEX_AI_IMAGE_PRO_MODEL` |
| imagen | `VERTEX_AI_IMAGEN_MODEL` |
| video | `VERTEX_AI_VIDEO_MODEL` |
| music | `VERTEX_AI_MUSIC_MODEL` |
| transcribe | `VERTEX_AI_TRANSCRIBE_MODEL` |
| translate | `VERTEX_AI_TRANSLATE_MODEL` |
| embedding | `VERTEX_AI_EMBEDDING_MODEL` |

To swap any model: edit `.env` — zero code changes required.

## Step 3 — Configure .env
```
VERTEX_AI_PROJECT_ID=your-gcp-project-id
VERTEX_AI_LOCATION=us-central1
VERTEX_AI_CREDENTIALS_PATH=./service-account.json
```
The server sets the credentials env var from `VERTEX_AI_CREDENTIALS_PATH`
automatically at boot.

## Step 4 — Test
```bash
node -e "const {isConfigured}=require('./src/config/vertex'); console.log(isConfigured() ? 'ready' : 'recovery mode (fill .env)')"
```

## How the chat pipeline works
`POST /api/haffu/chat` → orchestrator (conversation model + 30 function tools +
brand-voice sanitizer, 25s timeout) → on any failure the recovery keyword
engine answers instead. Model names never reach clients.

## Notes
- For Canada data residency, use `northamerica-northeast1` where available.
- Conversation transcripts persist to Firestore when configured; otherwise a
  bounded in-memory store keeps each session's thread alive per process.
- The cloud platform is pay-per-token. For a zero-cost development tier, the
  AI Studio free quotas on the Lite family work well for low-volume testing.