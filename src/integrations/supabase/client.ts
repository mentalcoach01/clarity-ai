// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://toqrmvmhvxeeenzyilxd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvcXJtdm1odnhlZWVuenlpbHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTUzOTgsImV4cCI6MjA1NTc5MTM5OH0.4EckZTnUFxz32pVA4no4Of-mZJLIjC8mUuw_7lHqf0Q";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);