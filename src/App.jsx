import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AgenticAI from './components/AgenticAI'
import Products from './components/Products'
import CustomerStories from './components/CustomerStories'
import FAQs from './components/FAQs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Background aura */}
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_0,rgba(236,72,153,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(251,191,36,0.08),transparent_40%)]" />

      <Navbar />
      <main>
        <Hero />
        <AgenticAI />
        <Products />
        <CustomerStories />
        <section id="cta" className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Ready to transform your customer relationships?</h3>
            <p className="mt-3 text-slate-300">Try Salesforce free and see how AI + Data + CRM helps every team do more with less.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition">
                Start free trial
              </a>
              <a href="#products" className="inline-flex items-center justify-center rounded-lg border border-white/15 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
                Explore products
              </a>
            </div>
          </div>
        </section>
        <FAQs />
      </main>
      <Footer />
    </div>
  )
}

export default App
