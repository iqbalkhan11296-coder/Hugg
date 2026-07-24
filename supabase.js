const SUPABASE_URL = "https://sshxlhximkhquyzvwqyw.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzaHhsaHhpbWtocXV5enZ3cXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4ODU4ODksImV4cCI6MjEwMDQ2MTg4OX0.nlWwcGHSZhlUE1noVMbJnkaRvNiarCJjQvoqtAtlRQ4";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
