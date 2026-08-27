import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'eln2vs5n',
  dataset: 'production',
  apiVersion: '2026-08-24', // usa a data de hoje, é só um versionamento da API
  useCdn: true, // true = mais rápido (CDN cacheado), ótimo para build-time fetch
})

// Órgãos Sociais — ordenados por cargo, dentro do mandato mais recente
export async function getOrgaosSociais() {
  return client.fetch(`
    *[_type == "orgaoSocial"] | order(ordem asc) {
      _id,
      nome,
      corpo,
      "cargo": coalesce(cargoDirecao, cargoConselhoFiscal, cargoAssembleia),
      ordem,
      mandatoInicio,
      mandatoFim,
      "fotoUrl": foto.asset->url
    }
  `)
}

// Relatório e Contas — mais recente primeiro, com URL do PDF já resolvido
export async function getRelatoriosContas() {
  return client.fetch(`
    *[_type == "relatorioContas"] | order(ano desc) {
      _id,
      ano,
      data,
      "pdfUrl": ficheiro.asset->url,
      "pdfNome": ficheiro.asset->originalFilename
    }
  `)
}

// Relatório de Atividades — mais recente primeiro
export async function getRelatoriosAtividades() {
  return client.fetch(`
    *[_type == "relatorioAtividades"] | order(ano desc) {
      _id,
      ano,
      resumo,
      "pdfUrl": ficheiro.asset->url,
      "pdfNome": ficheiro.asset->originalFilename
    }
  `)
}

export async function getMarcos() {
  return client.fetch(`
    *[_type == "marco"] | order(ordem asc) {
      _id,
      ano,
      texto
    }
  `)
}

export async function getPaginaInicial() {
  return client.fetch(`
    *[_type == "paginaInicial"][0] {
      heroEyebrow,
      estatisticas
    }
  `)
}