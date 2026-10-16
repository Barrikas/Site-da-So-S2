import { Icon } from './Icon'
export function Footer() {
  return <footer className="bg-gray-800 px-6 py-10 text-stone-300 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm sm:flex-row"><p>© 2026 Sophia Barchi</p><div className="flex items-center gap-5"><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" /></a><a href="mailto:oi@sophiabarchi.com" aria-label="Enviar e-mail"><Icon name="mail" /></a></div></div></footer>
}
