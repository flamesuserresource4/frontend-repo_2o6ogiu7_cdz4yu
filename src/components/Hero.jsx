import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 animate-pulse" />
            New: Agentic AI for every customer moment
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            The Customer Company
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200/90">
            Unify sales, service, marketing, and data on the #1 AI CRM. Turn every interaction into a trusted, connected experience.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition">
              Start free trial
            </a>
            <a href="#products" className="inline-flex items-center justify-center rounded-lg border border-white/15 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
              Explore products
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
