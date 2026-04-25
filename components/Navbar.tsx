import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-700 p-4 flex justify-between">
      <h1 className="font-bold">A<span className="text-blue-500">z</span></h1>
      <div className="space-x-4">
        <Link href="/">Lobby</Link>
        <Link href="/projects">Proyectos / Experiencia</Link>
        <Link href="/about">Sobre mí</Link>
        <Link href="/contact">Contacto</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}