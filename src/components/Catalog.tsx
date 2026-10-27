import { useEffect, useState } from 'react'
import { drivePreview, episodes as baseEpisodes, show, type Episode } from '../data/episodes'
import { supabase } from '../lib/supabase'
import EpisodeRow from './EpisodeRow'
import Player from './Player'

interface VideoRow {
  episode: number
  low_id: string
  high_id: string
}

interface Props {
  onLogout: () => void
}

export interface Selection {
  episode: Episode
  quality: 'low' | 'high'
}

export default function Catalog({ onLogout }: Props) {
  const [playing, setPlaying] = useState<Selection | null>(null)
  const [episodes, setEpisodes] = useState<Episode[]>(baseEpisodes)
  const [loadError, setLoadError] = useState(false)

  // Los IDs de Drive viven en Supabase (protegidos por RLS); se piden ya con sesión iniciada
  useEffect(() => {
    supabase
      .from('videos')
      .select('episode, low_id, high_id')
      .then(({ data, error }) => {
        if (error) {
          setLoadError(true)
          return
        }
        const byEpisode = new Map((data as VideoRow[]).map((v) => [v.episode, v]))
        setEpisodes(
          baseEpisodes.map((ep) => {
            const v = byEpisode.get(ep.number)
            return v ? { ...ep, lowUrl: drivePreview(v.low_id), highUrl: drivePreview(v.high_id) } : ep
          }),
        )
      })
  }, [])

  return (
    <div className="catalog">
      <nav className="topbar">
        <span className="brand-mark">Hola Tania</span>
        <button className="btn btn-ghost" onClick={onLogout}>
          Cerrar sesión
        </button>
      </nav>

      <section className="hero">
        <div className="hero-bg" aria-hidden />
        <div className="hero-content">
          <p className="hero-kicker">Serie · {show.year}</p>
          <h1 className="hero-title">{show.title}</h1>
          <p className="hero-subtitle">{show.subtitle}</p>
          <div className="hero-meta">
            <span className="match">16 episodios + 2 especiales</span>
            {show.genres.map((g) => (
              <span key={g} className="tag">
                {g}
              </span>
            ))}
          </div>
          <p className="hero-synopsis">{show.synopsis}</p>
          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => setPlaying({ episode: episodes[0], quality: 'high' })}
            >
              ▶ Reproducir T1:E1
            </button>
          </div>
        </div>
      </section>

      <section className="episodes">
        <div className="episodes-head">
          <h2>Episodios</h2>
          <span className="legend">
            <span className="q q-low">SD</span> baja calidad · <span className="q q-ai">✦ IA</span> escalado con IA
          </span>
        </div>
        {loadError && (
          <p className="load-error" role="alert">
            No se pudieron cargar los videos. Recarga la página o vuelve a iniciar sesión.
          </p>
        )}
        <ol className="episode-list">
          {episodes.map((ep) => (
            <EpisodeRow
              key={ep.number}
              episode={ep}
              onPlay={(quality) => setPlaying({ episode: ep, quality })}
            />
          ))}
        </ol>
      </section>

      {playing && <Player selection={playing} onClose={() => setPlaying(null)} />}
    </div>
  )
}
