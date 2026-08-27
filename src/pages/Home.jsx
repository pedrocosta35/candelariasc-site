import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import heroBg from '../assets/hero-bg.jpeg'
import armadaLogo from '../assets/armada-verde.png'
import armadaBg from '../assets/armada-bg.jpg'
import bola from '../assets/bola.png'
import stick from '../assets/stick.png.png'

function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <img src={stick} alt="" />
    </div>
  )
}

export default function Home() {
  const { marcos, paginaInicial } = useLoaderData()
  const [mostrarTodosOsMarcos, setMostrarTodosOsMarcos] = useState(false)
  const { heroEyebrow, estatisticas } = paginaInicial


  const destaques = [
    'Fundado em 24 de janeiro de 1990',
    'Clube dedicado exclusivamente ao hóquei em patins',
    'Campeão Açoriano de seniores em várias ocasiões',
    'Primeiro clube açoriano a alcançar a I Divisão Nacional',
    'Regresso ao Campeonato PLACARD em 2026/2027',
    'Forte aposta na formação de jovens atletas',
  ]

  return (
    <>
      <section className="hero" style={{ '--hero-bg': `url(${heroBg})` }}>
        <div className="hero-content">
          <span className="hero-eyebrow">{heroEyebrow}</span>
          <h1>Candelária Sport Clube</h1>
          <p className="hero-lead">
            Desde 1990 a formar atletas e a levar o nome da Candelária, do concelho da
            Madalena e da ilha do Pico ao panorama nacional e mundial do hóquei em patins.
          </p>
        </div>
      </section>

      <section className="stats-strip">
        {estatisticas.map((s) => (
          <div className="stat" key={s.legenda}>
            <span>{s.valor}</span>
            <p>{s.legenda}</p>
          </div>
        ))}
      </section>

      <SectionDivider />

      <section className="sobre" id="historia">
        <p className="section-label">A nossa origem</p>
        <div className="sobre-content">
          <h2>Uma paixão que nasceu na Candelária.</h2>
          <p>
            A patinagem chegou à freguesia no início da década de 1980, impulsionada pelo
            sucesso internacional do hóquei em patins português e pela conquista do
            Campeonato do Mundo de 1982. Em 1984, quatro patinadores da Candelária
            integraram a primeira Seleção do Pico. Dinamizada inicialmente pelo Agrupamento
            808 do Corpo Nacional de Escutas, essa paixão deu origem ao Candelária Sport
            Clube, fundado a 24 de janeiro de 1990 — hoje uma referência desportiva da
            ilha do Pico.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="timeline">
        <div className="section-heading">
          <p className="section-label">Em movimento</p>
          <h2>História</h2>
        </div>
        <div className={`timeline-list${!mostrarTodosOsMarcos ? ' timeline-list--collapsed' : ''}`}>
          {marcos.map((m, index) => (
            <div
              className={`timeline-item${!mostrarTodosOsMarcos && index === 3 ? ' timeline-item--fade' : ''}`}
              key={`${m.ano}-${index}`}
            >
              <div className="timeline-meta">
                <img src={bola} alt="" className="timeline-bola" />
                <span className="timeline-ano">{m.ano}</span>
              </div>
              <p>{m.texto}</p>
            </div>
          ))}
        </div>
        <button
          className="timeline-toggle"
          type="button"
          aria-expanded={mostrarTodosOsMarcos}
          onClick={() => setMostrarTodosOsMarcos((mostrar) => !mostrar)}
        >
          {mostrarTodosOsMarcos
            ? 'Ocultar marcos'
            : `Ver os restantes ${marcos.length - 3} marcos`}
        </button>
      </section>

      <SectionDivider />

      <section className="armada"
        style={{ '--armada-bg': `url(${armadaBg})` }}
      >
        <div className="armada-header">
          <img src={armadaLogo} alt="Armada Verde" className="armada-logo" />
          <div>
            <h2>Armada Verde</h2>
            <p className="armada-lead">
              A claque oficial de apoio ao Candelária Sport Clube, e o grande motor de apoio
              e animação nas bancadas do Pavilhão de Desportos da Candelária bem como em todos os
              pavilhões pelo país.
            </p>
          </div>
        </div>

        <blockquote className="armada-lema">
          “A nossa paixão não tem divisão!”
        </blockquote>

        <div className="armada-features">
          <div className="armada-feature">
            <h3>O Lema de União</h3>
            <p>
              Uma frase que ganhou ainda mais força durante os sete anos em que o clube
              esteve afastado do escalão máximo, com os adeptos a continuarem a encher
              o pavilhão na II Divisão.
            </p>
          </div>
          <div className="armada-feature">
            <h3>"Na Candelária ninguém passa"</h3>
            <p>
              Os principais responsáveis por transformar o pavilhão num dos
              ambientes mais difíceis e intimidantes do país para os adversários,
              empurrando a equipa rumo às vitórias.
            </p>
          </div>
          <div className="armada-feature">
            <h3>Presença Digital Ativa</h3>
            <p>
              Partilham iniciativas
              como o "Candelária pelo Mundo" na página oficial da Armada Verde.
            </p>
          </div>
        </div>


      </section>

    </>
  )
}
