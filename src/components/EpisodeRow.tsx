import { episodeLabel, type Episode } from '../data/episodes'

interface Props {
  episode: Episode
  onPlay: (quality: 'low' | 'high') => void
}

export default function EpisodeRow({ episode, onPlay }: Props) {
  const label = episodeLabel(episode)

  return (
    <li className={episode.special ? 'episode episode-special' : 'episode'}>
      <span className="episode-num">{label}</span>
      <div className="episode-thumb" aria-hidden>
        {episode.thumb ? (
          <img src={episode.thumb} alt="" loading="lazy" />
        ) : (
          <span>{episode.special ? label : label.padStart(2, '0')}</span>
        )}
      </div>
      <div className="episode-body">
        <h3>{episode.title}</h3>
        <p>{episode.summary}</p>
        <div className="episode-actions">
          <button className="btn btn-quality" onClick={() => onPlay('low')}>
            ▶ <span className="q q-low">SD</span> Baja calidad
          </button>
          <button className="btn btn-quality btn-quality-high" onClick={() => onPlay('high')}>
            ▶ <span className="q q-ai">✦ IA</span> Escalado con IA
          </button>
        </div>
      </div>
    </li>
  )
}
