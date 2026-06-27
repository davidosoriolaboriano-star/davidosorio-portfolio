import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const data = await request.json();

  const filePath = path.join(process.cwd(), "contactos.json");

  const nuevoRegistro = {
    ...data,
    fecha: new Date().toISOString(),
  };

  let registros = [];

  if (fs.existsSync(filePath)) {
    const contenido = fs.readFileSync(filePath, "utf-8");
    registros = contenido ? JSON.parse(contenido) : [];
  }

  registros.push(nuevoRegistro);

  fs.writeFileSync(filePath, JSON.stringify(registros, null, 2));

  return NextResponse.json({ ok: true });
}