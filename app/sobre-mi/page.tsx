export default function SobreMi() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="mx-auto max-w-7xl px-8 pt-28 pb-16">
        <div className="mb-12">
          <p className="mb-5 inline-block rounded-full border border-blue-500/40 px-5 py-2 text-blue-400">
            Perfil profesional
          </p>

          <h1 className="mb-5 text-6xl font-black leading-tight">
            Sobre{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              mí
            </span>
          </h1>

          <p className="max-w-4xl text-xl leading-relaxed text-gray-300">
            Soy David Osorio Laboriano, consultor especializado en Inteligencia
            Artificial, Automatización, Robótica y Transformación Digital.
            Ayudo a convertir ideas complejas en soluciones tecnológicas reales,
            medibles y orientadas al impacto de negocio.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-blue-900/40 bg-slate-900/80 p-8">
            <img
              src="/david.png"
              alt="David Osorio"
              className="mx-auto mb-6 h-52 w-52 rounded-3xl border border-blue-500/20 object-cover shadow-2xl shadow-blue-500/20"
            />

            <h2 className="text-center text-3xl font-black">
              David Osorio Laboriano
            </h2>

            <p className="mb-6 text-center font-semibold text-blue-400">
              AI Consultant · Robotics · Automation · Digital Transformation
            </p>

            <p className="mb-8 leading-relaxed text-gray-300">
              Mi enfoque combina estrategia, tecnología y ejecución. Diseño
              soluciones inteligentes que optimizan procesos, reducen tareas
              repetitivas, mejoran la toma de decisiones y generan eficiencia
              operativa para empresas y equipos.
            </p>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-2xl bg-[#030712] p-4">
                <div className="mb-2 text-2xl">💼</div>
                <h3 className="text-4xl font-black text-blue-400">5+</h3>
                <p className="text-sm text-gray-400">Años de experiencia</p>
              </div>

              <div className="rounded-2xl bg-[#030712] p-4">
                <div className="mb-2 text-2xl">🚀</div>
                <h3 className="text-4xl font-black text-blue-400">20+</h3>
                <p className="text-sm text-gray-400">Proyectos completados</p>
              </div>

              <div className="rounded-2xl bg-[#030712] p-4">
                <div className="mb-2 text-2xl">👥</div>
                <h3 className="text-4xl font-black text-blue-400">10K+</h3>
                <p className="text-sm text-gray-400">Personas alcanzadas</p>
              </div>

              <div className="rounded-2xl bg-[#030712] p-4">
                <div className="mb-2 text-2xl">🌎</div>
                <h3 className="text-4xl font-black text-blue-400">3</h3>
                <p className="text-sm text-gray-400">Países</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-blue-900/40 bg-slate-900/80 p-8">
              <h2 className="mb-4 text-3xl font-black text-blue-400">
                🎓 Estudios
              </h2>
              <p className="leading-relaxed text-gray-300">
                Formación orientada a tecnología, análisis de datos, procesos,
                innovación, inteligencia artificial, automatización y desarrollo
                de soluciones digitales. Me mantengo en aprendizaje constante
                para aplicar herramientas modernas en escenarios reales.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-900/40 bg-slate-900/80 p-8">
              <h2 className="mb-4 text-3xl font-black text-purple-400">
                🏢 Experiencia
              </h2>
              <p className="leading-relaxed text-gray-300">
                He participado en iniciativas de análisis de datos, rediseño de
                journeys end-to-end, optimización de procesos, definición de KPIs,
                automatización operativa, inteligencia artificial aplicada y
                transformación digital con enfoque en resultados medibles.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-900/40 bg-slate-900/80 p-8">
              <h2 className="mb-4 text-3xl font-black text-blue-400">
                🏆 Certificaciones
              </h2>
              <p className="leading-relaxed text-gray-300">
                Desarrollo competencias en tecnologías cloud, automatización,
                metodologías ágiles, inteligencia artificial generativa, agentes
                autónomos, analítica, robótica y herramientas modernas para crear
                soluciones escalables y aplicables al negocio.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-900/40 bg-slate-900/80 p-8">
              <h2 className="mb-4 text-3xl font-black text-purple-400">
                🚀 Mi visión
              </h2>
              <p className="leading-relaxed text-gray-300">
                Construir soluciones que acerquen la inteligencia artificial y la
                robótica a empresas, profesionales y estudiantes. Mi visión es
                crear tecnología útil, práctica y accesible que transforme la forma
                en que trabajamos, aprendemos y tomamos decisiones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}