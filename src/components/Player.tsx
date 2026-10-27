import { useEffect, useRef } from 'react'
import type { Selection } from './Catalog'

interface Props {
  selection: Selection
  onClose: () => void
}

export default function Player({ selection, onClose }: Props) {
  const { episode, quality } = selection
  const url = quality === 'high' ? episode.highUrl : episode.lowUrl
  const screenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Esc sale primero de pantalla completa (lo hace el navegador); si no está activa, cierra
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && !document.fullscreenElement && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Pantalla completa del contenedor (no del reproductor de Drive), así no se sale de la página
  async function enterFullscreen() {
    const el = screenRef.current
    if (!el) return
    try {
      await el.requestFullscreen()
      // En Android gira a horizontal; en otros navegadores simplemente no hace nada
      const orientation = screen.orientation as ScreenOrientation & { lock?: (o: string) => Promise<void> }
      await orientation.lock?.('landscape').catch(() => {})
    } catch {
      // El navegador no permite pantalla completa: el video sigue en la ventana
    }
  }

  return (
    <div className="player-overlay" onClick={onClose}>
      <div className="player" onClick={(e) => e.stopPropagation()}>
        <header className="player-head">
          <div>
            <p className="player-kicker">
              {episode.special ? `Especial ${episode.special}` : `Episodio ${episode.number}`} ·{' '}
              {quality === 'high' ? '✦ Escalado con IA' : 'Baja calidad'}
            </p>
            <h2>{episode.title}</h2>
          </div>
          <div className="player-tools">
            {url && (
              <>
                <button className="btn btn-ghost" onClick={enterFullscreen} aria-label="Pantalla completa">
                  ⛶ <span className="player-tool-label">Pantalla completa</span>
                </button>
                <a
                  className="btn btn-ghost"
                  href={url.replace(/\/preview$/, '/view')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir en Drive"
                >
                  ↗ <span className="player-tool-label">Abrir en Drive</span>
                </a>
              </>
            )}
            <button className="btn btn-ghost" onClick={onClose} aria-label="Cerrar">
              ✕
            </button>
          </div>
        </header>
        <div className="player-screen" ref={screenRef}>
          {url ? (
            <iframe src={url} title={episode.title} allow="autoplay; fullscreen" allowFullScreen />
          ) : (
            <p className="player-empty">Este video todavía no está disponible.</p>
          )}
        </div>
      </div>
    </div>
  )
}
