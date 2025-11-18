export default function Products() {
  const products = [
    { name: 'Sales Cloud', desc: 'Sell faster with AI, automation, and a complete view of every deal.' },
    { name: 'Service Cloud', desc: 'Resolve issues with AI-powered service across every channel.' },
    { name: 'Marketing Cloud', desc: 'Personalize at scale with data + AI across email, mobile, and web.' },
    { name: 'Data Cloud', desc: 'Unify and activate your customer data in real time.' },
    { name: 'Slack', desc: 'Where work flows. Collaborate, automate, and connect systems.' },
    { name: 'Tableau', desc: 'Analytics everyone loves, powered by trusted data.' },
  ]

  return (
    <section id="products" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Salesforce products</h2>
          <p className="mt-3 text-slate-300">A complete suite to grow customer relationships, powered by AI + Data + CRM.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 mb-4" />
              <h3 className="text-white font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <a href="#" className="mt-4 inline-block text-sm text-indigo-300 hover:text-indigo-200">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
