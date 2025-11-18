import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Agentic AI', href: '#agentic-ai' },
    { label: 'Products', href: '#products' },
    { label: 'Customer stories', href: '#customers' },
    { label: 'FAQs', href: '#faqs' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-md bg-slate-900/60 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-lg">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-400 to-amber-400 shadow-[0_0_30px_rgba(99,102,241,0.6)]" />
            <span className="text-white font-semibold tracking-tight">Salesforce</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-200/90 hover:text-white text-sm transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-4 py-2 rounded-lg shadow-[0_0_25px_rgba(168,85,247,0.4)]">
              Get started
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:hidden">
          <div className="mt-2 backdrop-blur-md bg-slate-900/70 border border-white/10 rounded-2xl p-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-200 hover:text-white text-sm" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex justify-center items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-4 py-2 rounded-lg">
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
