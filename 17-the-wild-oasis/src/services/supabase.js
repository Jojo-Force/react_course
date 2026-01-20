import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kuhfgdtsuxrbvfuctjjm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1aGZnZHRzdXhyYnZmdWN0amptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4OTE3OTEsImV4cCI6MjA4NDQ2Nzc5MX0.4k_YxD3QP647RM9084r-Qxgz1j1hM1TV5p_TZWA7-58";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
