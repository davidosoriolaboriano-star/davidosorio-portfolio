const projects = [
  {
    title: "Robot Vision System",
    description: "Sistema de visión artificial para detección y clasificación de objetos con IA.",
    image: "/robot.png",
    tags: ["Python", "OpenCV", "YOLO", "ROS"],
  },
  {
    title: "AI Sales Agent",
    description: "Agente de ventas autónomo que interactúa con clientes y genera oportunidades.",
    image: "/ai-agent.png",
    tags: ["OpenAI", "LangChain", "FastAPI", "React"],
  },
  {
    title: "Business Automation Platform",
    description: "Plataforma de automatización de procesos empresariales con IA.",
    image: "/dashboard.png",
    tags: ["Python", "RPA", "Docker", "PostgreSQL"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">

      <section
        id="inicio"
        className="relative grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-8 overflow-hidden px-0 pt-24 pb-0 md:grid-cols-[0.85fr_1.15fr]">
              <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(37,99,235,0.35),transparent_35%),radial-gradient(circle_at_25%_25%,rgba(147,51,234,0.15),transparent_30%)]" />
            <div className="absolute right-0 top-20 h-[500px] w-[700px] rounded-full bg-blue-600/10 blur-3xl" />
            <div className="absolute left-20 top-32 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-3xl" />
            </div>

            <div className="pl-8 md:pl-24">
              <h1 className="mb-4 text-5xl font-black leading-tight md:text-7xl">
                David Osorio Laboriano
              </h1>

             <h2 className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Consultor en AI y Robótica
              </h2>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
            Construyo soluciones inteligentes que combinan{" "}
            <span className="font-bold text-blue-400">Inteligencia Artificial</span>,{" "}
            <span className="font-bold text-blue-400">Robótica</span> y{" "}
            <span className="font-bold text-purple-400">Automatización</span>{" "}
            para resolver problemas del mundo real.
          </p>

          <div className="mb-12 flex gap-4">
            <a
              href="#proyectos"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold shadow-lg shadow-blue-600/30"
            >
              Ver proyectos →
            </a>

            <a
              href="#contacto"
              className="rounded-xl border border-gray-600 px-8 py-4 font-bold"
            >
              Contactarme
            </a>
          </div>

        </div>

            <div className="relative flex min-h-[620px] items-end justify-center overflow-hidden">
              <img
                src="/hero-bg.png"
                alt="Fondo IA y robótica"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/20 to-transparent" />

              <img
                src="/david-hero.png"
                alt="David Osorio"
                className="relative z-10 h-[600px] w-auto translate-x-20 object-contain drop-shadow-[0_0_45px_rgba(37,99,235,0.55)]"
              />
            </div>
      </section>

      <section id="proyectos" className="scroll-mt-24 mx-auto max-w-7xl px-8 py-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl font-black">Proyectos Destacados</h2>
          <a href="#" className="text-blue-400">Ver todos los proyectos →</a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-blue-900/40 bg-slate-900/70 shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
                <p className="mb-5 text-gray-400">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-blue-900/60 px-3 py-1 text-xs text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="sobre-mi"
        className="mx-auto mb-20 grid max-w-7xl gap-8 rounded-3xl border border-blue-900/40 bg-slate-900/70 px-8 py-10 md:grid-cols-3"
      >
        <div className="flex gap-6">
          <img
            src="/david.png"
            alt="David Osorio"
            className="h-36 w-36 rounded-2xl object-cover"
          />
          <div>
            <h2 className="mb-4 text-2xl font-bold">Sobre mí</h2>
              <p className="text-gray-300 leading-relaxed">
                Impulso la innovación mediante Inteligencia Artificial,
                Robótica y Automatización, creando soluciones que
                generan impacto real en empresas.
              </p>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Áreas de enfoque</h2>
          <ul className="space-y-3 text-gray-300">
            <li>🧠 Inteligencia Artificial</li>
            <li>🤖 Robótica</li>
            <li>⚙️ Agentes de IA Autónomos</li>
            <li>👁️ Transformación Digital</li>
            <li>🚀 Negocios</li>
          </ul>
        </div>

          <div id="contacto" className="rounded-2xl border border-purple-500/30 p-8 pt-6">
            <h2 className="mb-3 text-3xl font-black">
              ¿Listo para transformar tu futuro?
            </h2>
            <p className="mb-6 text-gray-300">
              Hablemos sobre proyectos, oportunidades o ideas en IA, Robótica y Automatización.
            </p>

            <a
              href="/contacto"
              className="block rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-center font-bold shadow-lg shadow-blue-600/30 transition hover:scale-105"
            >
              Contactarme →
            </a>

            <p className="mt-4 text-center text-sm text-gray-400">
              🔒 Respondo lo antes posible
            </p>
          </div>
      </section>
    </main>
  );
}
