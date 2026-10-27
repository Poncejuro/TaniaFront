import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

/** false si falta front/.env; App muestra un aviso en lugar de una página en blanco. */
export const supabaseConfigured = Boolean(url && key)

export const supabase: SupabaseClient = supabaseConfigured
  ? createClient(url!, key!)
  : (null as unknown as SupabaseClient)

const loginDomain = (import.meta.env.VITE_LOGIN_DOMAIN as string | undefined) ?? 'hola-tania.app'

/** "tania.isabel" → "tania.isabel@hola-tania.app". Si ya es un correo, lo deja igual. */
export function usernameToEmail(username: string): string {
  const u = username.trim().toLowerCase()
  return u.includes('@') ? u : `${u}@${loginDomain}`
}
