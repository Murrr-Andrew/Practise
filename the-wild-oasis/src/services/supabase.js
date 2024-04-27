import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qosreibnlkxkkebwcjyk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvc3JlaWJubGt4a2tlYndjanlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyNDM1NTEsImV4cCI6MjAyOTgxOTU1MX0.sPY1iVzGNseHp-3w7w8YDixE92fKazSUziaZ7zw6o_I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
