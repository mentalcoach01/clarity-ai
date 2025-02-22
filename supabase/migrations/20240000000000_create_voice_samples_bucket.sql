
INSERT INTO storage.buckets (id, name, public)
VALUES ('voice-samples', 'voice-samples', true);

-- Set up CORS policy for the bucket
UPDATE storage.buckets
SET cors_origins = array['*']
WHERE id = 'voice-samples';

-- Create permissive policies for the bucket
CREATE POLICY "Public access all voice samples"
  ON storage.objects FOR ALL
  USING (bucket_id = 'voice-samples');
