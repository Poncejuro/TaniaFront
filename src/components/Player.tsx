import { useEffect } from 'react'
import type { Selection } from './Catalog'

interface Props {
  selection: Selection
  onClose: () => void
}

export default function Player({ selection, onClose }: Props) {
  const { episode, quality } = selection
  const url = quality === 'high' ? episode.highUrl : episode.lowUrl

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="player-overlay" onClick={onClose}>
      <div className="player" onClick={(e) => e.stopPropagation()}>
        <header className="player-head">
          <div>
            <p className="player-kicker">
              {episode.special ? `Especial ${episode.special}` : `Episodio ${episode.number}`} ·{quality === 'high' ? '✦ Escalado con IA' : 'Baja calidad'}
            </p>
            <h2>{episode.title}</h2>
          </div>
          <button className="btn btn-ghost" onClick={onClose} aria-label="Cerrar">
            ✕
          </button>
        </header>
        <div className="player-screen">
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
