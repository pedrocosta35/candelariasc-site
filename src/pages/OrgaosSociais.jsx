import { useLoaderData } from 'react-router-dom'

const CORPOS = [
  { key: 'assembleiaGeral', label: 'Assembleia Geral' },
  { key: 'direcao', label: 'Direção' },
  { key: 'conselhoFiscal', label: 'Conselho Fiscal' },
]

const LABELS_CARGO = {
  presidente: 'Presidente',
  vicePresidente: 'Vice-Presidente',
  secretarioGeral: 'Secretário Geral',
  secretario: 'Secretário',
  tesoureiro: 'Tesoureiro(a)',
  vogal: 'Vogal',
  suplente: 'Suplente',
}

export default function OrgaosSociais() {
  const membros = useLoaderData()

  return (
    <section>
      <h1>Órgãos Sociais</h1>

      {CORPOS.map(({ key, label }) => {
        const membrosDoCorpo = membros.filter((m) => m.corpo === key)
        if (membrosDoCorpo.length === 0) return null

        return (
          <div className="corpo-social" key={key}>
            <h2 className="corpo-titulo">{label}</h2>
            <div className="orgaos-grid">
              {membrosDoCorpo.map((m) => (
                <div key={m._id} className="orgao-card">
                  {m.fotoUrl && <img src={m.fotoUrl} alt={m.nome} />}
                  <h3>{m.nome}</h3>
                  <p>{LABELS_CARGO[m.cargo] ?? m.cargo}</p>
                  <span>
                    {new Date(m.mandatoInicio).getFullYear()} – {new Date(m.mandatoFim).getFullYear()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}