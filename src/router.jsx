import { createBrowserRouter } from 'react-router-dom'
import { getOrgaosSociais, getRelatoriosContas, getRelatoriosAtividades } from './lib/sanityClient'
import OrgaosSociais from './pages/OrgaosSociais'
import RelatorioContas from './pages/RelatorioContas'
import RelatorioAtividades from './pages/RelatorioAtividades'
import Layout from './Layout'
import Home from './pages/Home'
import { getMarcos, getPaginaInicial } from './lib/sanityClient'
import Plantel from './pages/Plantel'
import { getPlantel, getJogador } from './lib/sanityClient'
import PlayerDetails from './pages/PlayerDetails'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const [marcos, paginaInicial] = await Promise.all([getMarcos(), getPaginaInicial()])
          return { marcos, paginaInicial }
        },
      },
      {
        path: 'orgaos-sociais',
        element: <OrgaosSociais />,
        loader: () => getOrgaosSociais(),
      },
      {
        path: 'relatorio-contas',
        element: <RelatorioContas />,
        loader: () => getRelatoriosContas(),
      },
      {
        path: 'relatorio-atividades',
        element: <RelatorioAtividades />,
        loader: () => getRelatoriosAtividades(),
      },
      {
        path: 'plantel',
        element: <Plantel />,
        loader: () => getPlantel(),
      },
      {
        path: 'plantel/:slug',
        element: <PlayerDetails />,
        loader: ({ params }) => getJogador(params.slug),
      },
    ],
  },
])