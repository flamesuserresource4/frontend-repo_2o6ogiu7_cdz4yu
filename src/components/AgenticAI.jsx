export default function AgenticAI() {
  const features = [
    {
      title: 'Autonomous Assistance',
      desc: 'Intelligent agents that resolve cases, draft replies, and trigger workflows across your CRM.'
    },
    {
      title: 'Trusted AI',
      desc: 'Ground responses in your data with robust governance, observability, and security.'
    },
    {
      title: 'Omnichannel',
      desc: 'Voice, chat, email, and messaging — agents orchestrate end-to-end across channels.'
    },
  ]

  return (
    <section id="agentic-ai" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Agentic AI</h2>
          <p className="mt-3 text-slate-300">Bring proactive, autonomous AI to every team with grounded responses and full control.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 shadow-[0_0_25px_rgba(168,85,247,0.4)] mb-4" />
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
