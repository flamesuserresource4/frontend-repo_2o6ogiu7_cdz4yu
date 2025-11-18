export default function FAQs() {
  const faqs = [
    { q: 'What is Salesforce?', a: 'The #1 AI CRM that unifies customer data, AI, and trusted apps.' },
    { q: 'How does Agentic AI work?', a: 'Agents reason over your data and trigger automations to resolve tasks end-to-end.' },
    { q: 'Is my data secure?', a: 'Yes. Enterprise-grade security, governance, and trust are built in.' },
    { q: 'Can I try it free?', a: 'Start with a free trial and explore products with guided setup.' },
  ]

  return (
    <section id="faqs" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">FAQs</h2>
          <p className="mt-3 text-slate-300">Answers to common questions about Salesforce and AI.</p>
        </div>

        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6">
              <summary className="list-none cursor-pointer text-white font-medium flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-slate-300 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-2 text-slate-300">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
