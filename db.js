import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gpazmihhssffmeyfmsey.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)

export function dber(name) {
    console.log(`${name} here`, process.env.SUPABASE_KEY)
}