import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import logo from './assets/logo.png'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function Layout() {
  return (
    <div className="site-wrapper">
      <ScrollToTop />
      <header className="site-header">
        <div className="header-inner">
          <NavLink to="/" className="logo" aria-label="Candelária Sport Clube">
            <img src={logo} alt="Candelária Sport Clube" />
            <span className="logo-name">
              <strong>Candelária</strong>
              <span>Sport Clube</span>
            </span>
          </NavLink>

          <nav className="main-nav">
            <NavLink
              to="/plantel"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Plantel
            </NavLink>
            <NavLink
              to="/orgaos-sociais"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Órgãos Sociais
            </NavLink>
            <NavLink
              to="/relatorio-contas"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Relatório e Contas
            </NavLink>
            <NavLink
              to="/relatorio-atividades"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Relatório de Atividades
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="site-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Candelária SC. Todos os direitos reservados.</p>

          <div className="footer-links">
            <a href="mailto:candelariahoquei@gmail.com">candelariahoquei@gmail.com</a>

            <div className="footer-socials">
              <span>Candelária SC</span>
              <a href="https://www.instagram.com/candelariasportclube/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.facebook.com/people/Candel%C3%A1ria-Sport-Clube/100063231489377/?__cft__[0]=AZYFgGIZOYfZN8JoPBeUPmcjNJaEB1p8PVMpCoGHCGVvSwGcKax_HOqtlGMCr5we7dLkv5kThFdov9s2W-MFubKvaJtNJ-QtEYApQxaTzEfvLg1GNcz2Ku6ppErDG22gqmiXJvY3_o9CpXBHadjXsJkhqKeiwFqCAH5Evdna0rD7Diw08mYCEAk8la2IYGzpinOo37V3R_2qRAUYjdpars76Hlo31BM4Jz19v-d4JIg3Ix57Ok6yfwYNSEMiV4W1e0Y&__tn__=-UC%2CP-R" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>

            <div className="footer-socials">
              <span>Armada Verde</span>
              <a href="https://www.instagram.com/armadaverde/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.facebook.com/people/Armada-Verde/61565694785122/?__cft__[0]=AZamsZ784mCwOGCMcq7Sjj4tNRPUS8oW4A-0ZCMIXw7MxJS9HvRRR0mZPXTbO0zyE7MOvgyuqjou99yiGykxVSKYBvDYICPWuI7O9nrbEJqxgOu8f-QxAf7ulJZXXkwXE8rxbSBwmQKUR8Z_sQRbgFOfcI2X-3pp4hKb_6A1zACK9DpvcvyG5huzFjziQR_g7r1m6lyPPeI58py0w842Xd_v&__tn__=-UC%2CP-R" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
