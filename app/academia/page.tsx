const cursos = [
  {
    titulo: "1. IA para Principiantes",
    descripcion:
      "Aprende los fundamentos de la Inteligencia Artificial y comienza a crear soluciones desde cero.",
    imagen: "/curso-ia.png",
    duracion: "6 semanas",
    nivel: "Principiante",
  },
  {
    titulo: "2. Automatización con IA",
    descripcion:
      "Automatiza procesos repetitivos y aumenta la productividad de tu negocio con IA.",
    imagen: "/curso-automatizacion.png",
    duracion: "6 semanas",
    nivel: "Intermedio",
  },
  {
    titulo: "3. Construcción de Agentes IA",
    descripcion:
      "Crea agentes inteligentes que toman decisiones y realizan tareas de forma autónoma.",
    imagen: "/curso-agentes.png",
    duracion: "8 semanas",
    nivel: "Avanzado",
  },
  {
    titulo: "4. Robótica Aplicada",
    descripcion:
      "Aprende robótica desde cero y construye proyectos aplicados al mundo real.",
    imagen: "/curso-robotica.png",
    duracion: "8 semanas",
    nivel: "Intermedio",
  },
];

export default function Academia() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
  
<section
  className="relative grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-8 overflow-hidden px-0 pt-24 pb-0 md:grid-cols-[0.85fr_1.15fr]"
>
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(37,99,235,0.25),transparent_35%),radial-gradient(circle_at_25%_25%,rgba(147,51,234,0.15),transparent_30%)]" />
    <div className="absolute right-0 top-20 h-[500px] w-[700px] rounded-full bg-blue-600/10 blur-3xl" />
    <div className="absolute left-20 top-32 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-3xl" />
  </div>

  <div className="pl-8 md:pl-24">
    <p className="mb-6 inline-block rounded-full border border-blue-500/50 px-5 py-2 text-sm font-bold text-blue-400">
      ACADEMIA
    </p>

    <h1 className="mb-6 max-w-3xl text-5xl font-black leading-tight md:text-7xl">
      Aprende{" "}
      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent">
        IA, Automatización y Robótica
      </span>{" "}
      Aplicada
    </h1>

    <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
      Programas grupales en vivo diseñados para que desarrolles habilidades
      prácticas y construyas soluciones reales con acompañamiento experto.
    </p>

    <div className="mb-10 grid max-w-2xl grid-cols-2 gap-4 text-sm text-gray-300 md:grid-cols-4">
      <p>👥 Clases en vivo grupales</p>
      <p>🚀 Proyectos prácticos</p>
      <p>📘 Material descargable</p>
      <p>🏅 Certificado incluido</p>
    </div>

    <div className="flex flex-wrap gap-4">
      <a
        href="/contacto"
        className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-bold shadow-lg shadow-blue-600/30"
      >
        Reservar mi plaza →
      </a>

      <a
        href="/contacto"
        className="rounded-xl border border-blue-500/50 px-8 py-4 font-bold"
      >
        Hablar con un asesor
      </a>
    </div>
  </div>

  <div className="relative flex min-h-[620px] items-end justify-center overflow-hidden">
    <img
      src="/academia-bg.png"
      alt="Academia IA"
      className="absolute inset-0 h-full w-full object-cover object-center opacity-100"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/20 to-transparent" />
  </div>
</section>

      <section className="mx-auto max-w-7xl px-8 pt-8 pb-20">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-4xl font-black">Nuestros cursos</h2>
          <p className="text-gray-400">
            Elige el programa que mejor se adapte a tus objetivos profesionales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {cursos.map((curso) => (
            <div
              key={curso.titulo}
              className="overflow-hidden rounded-2xl border border-blue-900/40 bg-slate-900/80 shadow-xl transition hover:-translate-y-2 hover:border-blue-500"
            >
              <img
                src={curso.imagen}
                alt={curso.titulo}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold">{curso.titulo}</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-300">
                  {curso.descripcion}
                </p>

                <div className="mb-6 space-y-2 text-sm text-gray-400">
                  <p>📅 {curso.duracion}</p>
                  <p>🎯 Nivel: {curso.nivel}</p>
                  <p>👥 Grupal en vivo</p>
                </div>

                <a
                  href="/contacto"
                  className="block rounded-lg border border-blue-500/50 px-4 py-3 text-center font-bold text-blue-400 hover:bg-blue-600 hover:text-white"
                >
                  Ver programa →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 pb-20">
        <div className="rounded-3xl border border-blue-900/40 bg-slate-900/70 p-10">
          <h2 className="mb-10 text-center text-3xl font-black">
            ¿Por qué estudiar en nuestra academia?
          </h2>

          <div className="grid gap-6 md:grid-cols-5">
            {[
              ["🚀", "Aprendizaje práctico", "Proyectos reales desde la primera clase."],
              ["📚", "Recursos exclusivos", "Material actualizado y plantillas listas."],
              ["👥", "Comunidad privada", "Acceso a estudiantes y egresados."],
              ["🏅", "Certificado incluido", "Obtén tu certificado al finalizar."],
              ["🎧", "Soporte continuo", "Acompañamiento durante el proceso."],
            ].map((item) => (
              <div
                key={item[1]}
                className="rounded-2xl border border-blue-900/40 bg-[#030712]/70 p-6 text-center"
              >
                <div className="mb-4 text-3xl">{item[0]}</div>
                <h3 className="mb-3 font-bold">{item[1]}</h3>
                <p className="text-sm text-gray-400">{item[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 pb-20">
        <div className="rounded-3xl border border-purple-500/40 bg-gradient-to-r from-blue-700 to-purple-700 p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="mb-3 text-3xl font-black">
                ¿Listo para transformar tu futuro?
              </h2>
              <p className="text-gray-200">
                Únete a nuestra comunidad y adquiere habilidades de alto valor.
              </p>
            </div>

            <a
              href="/contacto"
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700"
            >
              Reservar mi plaza →
            </a>
          </div>

          <p className="mt-5 text-sm text-gray-200">
            🔒 Cupos limitados por grupo
          </p>
        </div>
      </section>
    </main>
  );
}