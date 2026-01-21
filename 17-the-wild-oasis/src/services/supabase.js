import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kuhfgdtsuxrbvfuctjjm.supabase.co";
const supabaseKey = "sb_publishable_31zJc9dxREAmtjv_4bRAPQ_o-QvtJ7Z";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
