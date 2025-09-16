import { PlayCircle, Leaf, Truck, HandHeart, MapPin, User } from 'lucide-react'
import MapComp from '../components/MapComp'

export default function HomePage(){
  return (
    <div className="">
      {/* Hero */}
      <section className="container-px max-w-7xl mx-auto pt-8 sm:pt-12">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--nb-text)]">
              Where Surplus Food Finds Its Purpose
            </h1>
            <p className="mt-3 text-neutral-700">
              Connect restaurants, NGOs, and volunteer Food Runners to build a zero-waste food community in Kolkata.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white border border-neutral-200 shadow-sm px-4 py-2 text-sm">
              <span className="text-amber-600">✨</span>
              <span className="font-medium">1,250+ Meals Served in Kolkata This Month</span>
              <span className="text-amber-600">✨</span>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="/donor" className="inline-flex items-center justify-center rounded-2xl bg-[var(--nb-green)] text-white px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--nb-green)]">List a Donation</a>
              <a href="#how" className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-50">
                <PlayCircle className="mr-2" size={18}/> How it works
              </a>
            </div>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-200">
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="/public/kolkata.jpg">
              <source src="" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent">
              <img src="/homepage_banner.png" alt="homepagebanner" className='w-full h-full object-cover'/>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="container-px max-w-7xl mx-auto mt-12 sm:mt-16">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">How it works</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {icon: Leaf, title: 'Donors', desc: 'List surplus food in 90 seconds.'},
            {icon: HandHeart, title: 'NGOs', desc: 'Claim and distribute quickly.'},
            {icon: Truck, title: 'Food Runners', desc: 'Volunteer pickups on your route.'},
          ].map((step)=> (
            <div key={step.title} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--nb-green)]/10 text-[var(--nb-green)]">
                <step.icon size={18} />
              </div>
              <div className="mt-3 font-semibold">{step.title}</div>
              <p className="text-neutral-600 text-sm mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="container-px max-w-7xl mx-auto mt-12 sm:mt-16">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Our impact</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {label:'Total Meals Served', value:'24,580'},
            {label:'Kgs of Food Saved', value:'12,340'},
            {label:'CO2 Emissions Prevented', value:'18.5t'},
          ].map((m)=> (
            <div key={m.label} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-3xl font-extrabold text-[var(--nb-green)]">{m.value}</div>
              <div className="text-neutral-700 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Heroes */}
      <section className="container-px max-w-7xl mx-auto mt-12 sm:mt-16">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Community Heroes</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-neutral-200 flex justify-center items-center" >
                  <User/>
                </div>
                <div>
                  <div className="font-semibold">Partner Chef #{i}</div>
                  <div className="text-neutral-600 text-sm">Kolkata, WB</div>
                </div>
              </div>
              <p className="text-neutral-700 text-sm mt-3">“Together we ensure good food never goes to waste.”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Map (stylized placeholder) */}
      <section className="container-px max-w-7xl mx-auto mt-12 sm:mt-16 mb-1">
        <MapComp/>
      </section>
    </div>
  )
}


