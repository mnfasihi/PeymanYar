import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://fycyznoykgxpaatjsawi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5Y3l6bm95a2d4cGFhdGpzYXdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2MDM0MjYsImV4cCI6MjA4NzE3OTQyNn0.fZQfDuaUW6jxQOF0be8eaK16mD-lHfPnyYht-0ryQSQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)