#!/bin/bash
# HAFFU STUDIO — One-Command Deploy to Cloud Run
set -e

PROJECT_ID="${GCP_PROJECT_ID:-haffu-studio}"
SERVICE="haffu-api"
REGION="us-central1"

echo "Building and deploying $SERVICE to $REGION..."
gcloud builds submit --tag "gcr.io/$PROJECT_ID/$SERVICE"
gcloud run deploy "$SERVICE" \
  --image "gcr.io/$PROJECT_ID/$SERVICE" \
  --platform managed \
  --region "$REGION" \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --set-env-vars "NODE_ENV=production"

echo "Deploying frontend to Vercel..."
cd public && vercel --prod

echo "Deploy complete! API: $(gcloud run services describe $SERVICE --region $REGION --format='value(status.url)')"