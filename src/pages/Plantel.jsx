import { useLoaderData } from 'react-router-dom'
import PlayerCard from '../components/PlayerCard'

export default function Plantel() {
  const jogadores = useLoaderData()

  return (
    <section className="plantel-page">
      <div className="plantel-heading">
        <div>
          <p className="plantel-eyebrow">Equipa sénior</p>
          <h1>Plantel</h1>
        </div>
        <p className="plantel-lead">Época 2026/2027</p>
      </div>
      <div className="plantel-grid">
        {jogadores.map((j) => (
          <PlayerCard key={j._id} jogador={j} />
        ))}
      </div>
    </section>
  )
}