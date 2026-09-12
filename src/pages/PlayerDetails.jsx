import { useLoaderData, Link } from 'react-router-dom'

function calcularIdade(dataNascimento) {
  if (!dataNascimento) return null
  const nascimento = new Date(dataNascimento)
  const hoje = new Date()
  let idade = hoje.getFullYear() - nascimento.getFullYear()
  const aindaNaoFezAnos =
    hoje.getMonth() < nascimento.getMonth() ||
    (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate())
  if (aindaNaoFezAnos) idade--
  return idade
}

function calcularAnosClube(periodos) {
  if (!periodos || periodos.length === 0) return null
  const anoAtual = new Date().getFullYear()
  return periodos.reduce((total, p) => total + Math.max(0, (p.anoFim ?? anoAtual) - p.anoInicio), 0)
}

export default function PlayerDetail() {
  const jogador = useLoaderData()
  const idade = calcularIdade(jogador.dataNascimento)
  const anosClube = calcularAnosClube(jogador.periodosClube)
  const stats = jogador.estatisticas ?? {}

  return (
    <article className="player-detail">
      <Link to="/plantel" className="player-detail-voltar">← Voltar ao Plantel</Link>

      <div className="player-detail-hero">
        <img src={jogador.fotoUrl} alt={jogador.nome} className="player-detail-foto" />
        <div className="player-detail-hero-info">
          <div className="player-detail-tags">
            {jogador.capitao && <span className="player-detail-capitao">Capitão de Equipa</span>}
          </div>
          <div className="player-detail-name-row">
            <span className="player-detail-numero">#{jogador.numero}</span>
            <h1>{jogador.nome}</h1>
          </div>
          <p className="player-detail-posicao">{jogador.posicao}</p>

          {jogador.bio && <p className="player-detail-bio-inline">{jogador.bio}</p>}


        </div>
      </div>

      <div className="player-detail-meta">
        {jogador.nacionalidade && (
          <div className="meta-card"><span>Nacionalidade</span><strong>{jogador.nacionalidade}</strong></div>
        )}
        {idade !== null && (
          <div className="meta-card"><span>Idade</span><strong>{idade} anos</strong></div>
        )}
        {anosClube !== null && (
          <div className="meta-card"><span>Anos de Clube</span><strong>{anosClube}</strong></div>
        )}
      </div>

      {(stats.jogos != null || stats.golos != null || stats.assistencias != null) && (
        <div className="player-detail-stats">
          <h2>Estatísticas da Época</h2>
          <div className="stats-grid">
            {stats.jogos != null && <div className="stat-big"><span>{stats.jogos}</span><p>Jogos</p></div>}
            {stats.golos != null && <div className="stat-big"><span>{stats.golos}</span><p>Golos</p></div>}
            {stats.assistencias != null && <div className="stat-big"><span>{stats.assistencias}</span><p>Assistências</p></div>}
          </div>
        </div>
      )}
    </article>
  )
}