import { Link } from "react-router-dom";

export function Title({ text }) {
  return (
    <header className="pt-10 pb-8 mb-12 border-b border-[rgba(0,0,0,.2)]">
      <nav className="flex justify-between items-center">
        <Link to='/' className="border border-white bg-[rgba(0,0,0,.3)] px-10 py-2 rounded-lg font-bold hover:bg-[rgba(0,0,0,.4)]">Volver</Link>
        <Link to='/' className="uppercase font-bold">React Games</Link>
      </nav>
      <h2 className="text-5xl font-extrabold mt-6 uppercase">{text}</h2>
    </header>
  )
}