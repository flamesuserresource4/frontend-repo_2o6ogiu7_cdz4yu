export default function CustomerStories() {
  const stories = [
    { company: 'IBM', quote: 'We accelerated our sales cycle and improved CSAT with AI-powered automation.' },
    { company: 'Spotify', quote: 'Personalized campaigns at scale with unified, real-time data.' },
    { company: 'Toyota', quote: 'Service resolution time dropped by 40% thanks to agentic workflows.' },
  ]

  return (
    <section id="customers" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Customer stories</h2>
          <p className="mt-3 text-slate-300">See how leading brands grow with the #1 AI CRM.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <div key={s.company} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/10" />
                <h3 className="text-white font-semibold">{s.company}</h3>
              </div>
              <p className="mt-4 text-slate-300">“{s.quote}”</p>
              <a href="#" className="mt-4 inline-block text-sm text-indigo-300 hover:text-indigo-200">Read story →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
