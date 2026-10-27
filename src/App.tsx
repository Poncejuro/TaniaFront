import { useEffect, useState } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase, supabaseConfigured } from './lib/supabase'
import Login from './components/Login'
import Catalog from './components/Catalog'

export default function App() {
  if (!supabaseConfigured) return <MissingConfig />
  return <AuthGate />
}

function MissingConfig() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Falta configurar Supabase</h1>
        <p className="login-note" style={{ textAlign: 'left', fontSize: '0.95rem' }}>
          Crea el archivo <code>front/.env</code> (copia <code>.env.example</code>) con
          <code> VITE_SUPABASE_URL</code> y <code>VITE_SUPABASE_ANON_KEY</code>, y reinicia
          <code> npm run dev</code>.
        </p>
      </div>
    </div>
  )
}

function AuthGate() {
  // undefined = todavía revisando si hay una sesión guardada
  const [session, setSession] = useState<Session | null | undefined>(undefined)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data } = supabase.auth.onAuthStateChange((_event, s) => setSession(s))
    return () => data.subscription.unsubscribe()
  }, [])

  if (session === undefined) return <div className="splash" aria-busy />

  return session ? <Catalog onLogout={() => supabase.auth.signOut()} /> : <Login />
}
