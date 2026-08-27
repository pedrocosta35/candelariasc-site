import { useLoaderData } from 'react-router-dom'

export default function RelatorioContas() {
  const relatorios = useLoaderData()

  return (
    <section>
      <h1>Relatório e Contas</h1>
      <ul className="relatorios-lista">
        {relatorios.map((r) => (
          <li key={r._id}>
            <span>{r.ano}</span>
            <p>Aprovado em {new Date(r.data).toLocaleDateString('pt-PT')}</p>
            <a href={r.pdfUrl} target="_blank" rel="noreferrer" download>
              Descarregar PDF
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}