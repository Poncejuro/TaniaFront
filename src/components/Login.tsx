import { useState, type FormEvent } from 'react'
import { supabase, usernameToEmail } from '../lib/supabase'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    // Si sale bien, App detecta la nueva sesión y muestra el catálogo
    const { error } = await supabase.auth.signInWithPassword({
      email: usernameToEmail(username),
      password,
    })
    setLoading(false)
    if (error) {
      setError(
        error.message === 'Invalid login credentials'
          ? 'Usuario o contraseña incorrectos.'
          : 'No se pudo iniciar sesión. Inténtalo de nuevo.',
      )
    }
  }

  return (
    <div className="login-page">
      <div className="login-glow" aria-hidden />
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
        <label>
          <span>Usuario</span>
          <input
            type="text"
            autoComplete="username"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="tu.usuario"
          />
        </label>
        <label>
          <span>Contraseña</span>
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </label>
        {error && (
          <p className="login-error" role="alert">
            {error}
          </p>
        )}
        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
          {loading ? 'Entrando…' : 'Entrar'}
        </button>
        <p className="login-note">El acceso es privado. Pide tus credenciales al administrador.</p>
      </form>
    </div>
  )
}
