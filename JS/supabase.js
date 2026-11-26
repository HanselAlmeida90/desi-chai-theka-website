const SUPABASE_URL = "https://oyubltvemowuxsdomoxf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_RLFE4fH025WNq-YyyEDIxQ_gwu5nTrw";

const { createClient } = window.supabase;

window.db = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("Supabase connection client initialized.");