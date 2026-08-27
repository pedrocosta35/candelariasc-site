import { useLoaderData } from 'react-router-dom'

export default function RelatorioAtividades() {
  const relatorios = useLoaderData()

  return (
    <section>
      <h1>Relatório de Atividades</h1>
      <ul className="relatorios-lista">
        {relatorios.map((r) => (
          <li key={r._id}>
            <span>{r.ano}</span>
            <p>Atividades do ano {r.ano}</p>
            <a href={r.pdfUrl} target="_blank" rel="noreferrer" download>
              Descarregar PDF
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}