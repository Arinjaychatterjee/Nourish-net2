import { useRef } from 'react'
import { PlayCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function LandingPage(){
  const infoRef = useRef(null)
  const navigate = useNavigate()

  const onLearnMore = (e) => {
    e.preventDefault()
    infoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="">
      {/* Hero */}
      <section className="container-px max-w-7xl mx-auto pt-10 sm:pt-14">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm">
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--nb-text)]">NourishNet</h1>
          <p className="mt-3 text-neutral-700">Building a zero-waste food community in Kolkata.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button onClick={()=>navigate('/login')} className="inline-flex items-center justify-center rounded-2xl bg-[var(--nb-green)] text-white px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90">Login</button>
            <button onClick={()=>navigate('/signUp')} className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-50">Sign up</button>
            <a href="#learn" onClick={onLearnMore} className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-50">
              <PlayCircle className="mr-2" size={18}/> Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Features summary */}
      <section className="container-px max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {title:'Donors', desc:'List surplus food in 90 seconds.'},
            {title:'NGOs', desc:'Claim and distribute quickly.'},
            {title:'Runners', desc:'Volunteer pickups along your route.'},
          ].map((f)=> (
            <div key={f.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="font-semibold">{f.title}</div>
              <p className="text-neutral-600 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Info / Contact (acts like page bottom) */}
      <section id="learn" ref={infoRef} className="container-px max-w-7xl mx-auto mt-12 sm:mt-16 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-display text-[var(--nb-green)] font-semibold">NourishNet</div>
            <p className="text-neutral-600 mt-2">Building a zero-waste food community in Kolkata.</p>
          </div>
          <div>
            <div className="font-medium text-neutral-800">Contact</div>
            <p className="text-neutral-600 mt-2">hello@nourishnet.org</p>
          </div>
          <div>
            <div className="font-medium text-neutral-800">Kolkata HQ</div>
            <p className="text-neutral-600 mt-2">West Bengal, India</p>
          </div>
        </div>
      </section>
    </div>
  )
}


