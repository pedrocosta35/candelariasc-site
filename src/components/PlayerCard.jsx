import { Link } from 'react-router-dom'

export default function PlayerCard({ jogador }) {
  return (
    <Link
      to={`/plantel/${jogador.slug}`}
      className={`player-card${jogador.capitao ? ' player-card--capitao' : ''}`}
    >
      {jogador.capitao && <span className="player-capitao-badge">C</span>}
      <img src={jogador.fotoUrl} alt={jogador.nome} className="player-foto" />
      <div className="player-info">
        <h3 title={jogador.nome}>{jogador.nome}</h3>
        <p>{jogador.posicao}</p>
      </div>
    </Link>
  )
}