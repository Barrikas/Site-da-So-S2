import { useState } from 'react'
import { Icon } from './Icon'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [['Início', 'home'], ['Portfólio', 'portfolio'], ['Encomendas', 'encomendas'], ['Sobre', 'sobre']]
  const navigate = (id) => { setIsOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-slate-50/90 backdrop-blur-md"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"><button onClick={() => navigate('home')} className="font-serif text-xl tracking-tight text-gray-800" aria-label="Ir para o início">Sophia Barchi<span className="text-stone-400">.</span></button><nav className="hidden md:block" aria-label="Navegação principal"><ul className="flex items-center gap-9 text-sm text-gray-600">{links.map(([label, id]) => <li key={id}><button onClick={() => navigate(id)} className="transition-colors hover:text-gray-900">{label}</button></li>)}</ul></nav><button className="text-gray-800 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}><Icon name={isOpen ? 'close' : 'menu'} /></button></div>{isOpen && <nav className="border-t border-stone-200 bg-slate-50 px-6 py-5 md:hidden" aria-label="Navegação mobile"><ul className="space-y-4 text-center text-sm text-gray-600">{links.map(([label, id]) => <li key={id}><button onClick={() => navigate(id)}>{label}</button></li>)}</ul></nav>}</header>
}
