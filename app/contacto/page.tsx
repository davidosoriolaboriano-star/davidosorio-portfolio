"use client";

import { useState } from "react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  async function enviarFormulario(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      nombre: formData.get("nombre"),
      correo: formData.get("correo"),
      empresa: formData.get("empresa"),
      ayuda: formData.get("ayuda"),
      mensaje: formData.get("mensaje"),
    };

    await fetch("/api/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setEnviado(true);
    form.reset();
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="mx-auto max-w-7xl px-8 pt-32 pb-20">

        <div className="grid items-start gap-12 md:grid-cols-2">

          {/* IZQUIERDA */}
          <div>

            <p className="mb-6 inline-block rounded-full border border-blue-500/40 px-5 py-2 text-blue-400">
              Hablemos de tu próximo proyecto
            </p>

            <h1 className="mb-8 text-6xl font-black leading-tight">
              Conectemos y{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                trabajemos
              </span>{" "}
              juntos
            </h1>

            <p className="mb-12 text-xl leading-relaxed text-gray-300">
              Si tienes un reto donde la inteligencia artificial,
              la robótica o la automatización pueda generar impacto
              en tu negocio.
            </p>

            <div className="grid gap-6 md:grid-cols-3">

              <a
                href="mailto:davidosoriolaboriano@gmail.com"
                className="group rounded-2xl border border-purple-500/20 bg-slate-900/70 p-5 transition hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <img
                  src="/correo2.png"
                  alt="Correo"
                  className="mx-auto mb-4 h-24 w-24 object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.55)]"
                />

                <h3 className="mb-2 text-center text-lg font-bold">
                  Correo
                </h3>

                <p className="text-center text-sm text-gray-400">
                  Envíame un email
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/david-angel-osorio-laboriano/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-purple-500/20 bg-slate-900/70 p-5 transition hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <img
                  src="/linkedin2.png"
                  alt="LinkedIn"
                  className="mx-auto mb-4 h-24 w-24 object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.55)]"
                />

                <h3 className="mb-2 text-center text-lg font-bold">
                  LinkedIn
                </h3>

                <p className="text-center text-sm text-gray-400">
                  Ver perfil
                </p>
              </a>

              <a
                href="https://github.com/davidosoriolaboriano-star"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-purple-500/20 bg-slate-900/70 p-5 transition hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <img
                  src="/github2.png"
                  alt="GitHub"
                  className="mx-auto mb-4 h-24 w-24 object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.55)]"
                />

                <h3 className="mb-2 text-center text-lg font-bold">
                  GitHub
                </h3>

                <p className="text-center text-sm text-gray-400">
                  Ver repositorios
                </p>
              </a>

            </div>

          </div>

          {/* DERECHA */}
          <div className="rounded-3xl border border-blue-900/40 bg-slate-900/80 p-8 shadow-2xl">

            <h2 className="mb-2 text-3xl font-bold">
              Envíame un mensaje
            </h2>

            <p className="mb-8 text-gray-400">
              Cuéntame sobre tu proyecto y te responderé pronto.
            </p>

            {enviado ? (
              <div className="rounded-2xl border border-green-500/40 bg-green-500/10 p-8 text-center">

                <div className="mb-4 text-5xl">
                  ✅
                </div>

                <h3 className="mb-4 text-3xl font-black text-green-400">
                  ¡Muchas gracias!
                </h3>

                <p className="mb-6 text-gray-300">
                  Tu información fue registrada correctamente.
                  Me pondré en contacto contigo pronto.
                </p>

                <button
                  onClick={() => setEnviado(false)}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-bold"
                >
                  Enviar otro mensaje →
                </button>

              </div>
            ) : (

              <form onSubmit={enviarFormulario} className="space-y-4">

                <div className="grid gap-4 md:grid-cols-2">

                  <input
                    name="nombre"
                    required
                    className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 outline-none focus:border-blue-500"
                    placeholder="Nombre completo"
                  />

                  <input
                    name="correo"
                    type="email"
                    required
                    className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 outline-none focus:border-blue-500"
                    placeholder="Correo electrónico"
                  />

                </div>

                <input
                  name="empresa"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 outline-none focus:border-blue-500"
                  placeholder="Empresa"
                />

                <select
                  name="ayuda"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 outline-none focus:border-blue-500"
                >
                  <option value="">¿En qué puedo ayudarte?</option>
                  <option>Proyecto de IA</option>
                  <option>Automatización de procesos</option>
                  <option>Robótica</option>
                  <option>Consultoría estratégica</option>
                </select>

                <textarea
                  name="mensaje"
                  required
                  className="h-36 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 outline-none focus:border-blue-500"
                  placeholder="Cuéntame más sobre tu proyecto..."
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-bold shadow-lg shadow-blue-600/30"
                >
                  Enviar mensaje →
                </button>

              </form>

            )}

          </div>

        </div>

        <div className="mt-16 rounded-3xl border border-blue-900/40 bg-slate-900/70 p-10">

          <h2 className="mb-8 text-3xl font-black">
            ¿Por qué trabajar conmigo?
          </h2>

            <div className="grid max-w-xl gap-3 md:grid-cols-3">
              
            <div>
              <h3 className="mb-3 text-xl font-bold text-blue-400">
                Soluciones inteligentes
              </h3>

              <p className="text-gray-400">
                Combino IA, Robótica y Automatización para crear soluciones reales.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-purple-400">
                Enfoque en resultados
              </h3>

              <p className="text-gray-400">
                Impacto medible y retorno para el negocio.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-blue-400">
                Tecnología moderna
              </h3>

              <p className="text-gray-400">
                Soluciones escalables utilizando herramientas de vanguardia.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-purple-400">
                Acompañamiento total
              </h3>

              <p className="text-gray-400">
                Desde la idea hasta la implementación final.
              </p>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}