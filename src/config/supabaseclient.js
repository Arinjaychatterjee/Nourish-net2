import { createClient } from '@supabase/supabase-js'

// 👇 replace with your Supabase project details
const supabaseUrl = "https://fdfojfyrbvdmitmzdqbg.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZm9qZnlyYnZkbWl0bXpkcWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMDQ1NjksImV4cCI6MjA3MzY4MDU2OX0.5rO6Q3WBjDC0LgdHebsEGKiJRg6l82GlY8fpls-bUWk"

export const supabase = createClient(supabaseUrl, supabaseKey)
