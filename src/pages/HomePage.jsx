import { PlayCircle, Leaf, Truck, HandHeart, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function HomePage(){
  const [donateOpen, setDonateOpen] = useState(false)
  const [amount, setAmount] = useState('')
  const [note, setNote] = useState('')
  const [confirmOpen, setConfirmOpen] = useState(false)

  const openDonation = (e) => {
    e.preventDefault()
    setDonateOpen(true)
  }

  const submitDonation = (e) => {
    e.preventDefault()
    setDonateOpen(false)
    setConfirmOpen(true)
  }

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
              <a href="#donate" onClick={openDonation} className="inline-flex items-center justify-center rounded-2xl bg-[var(--nb-green)] text-white px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--nb-green)]">List a Donation</a>
              <a href="#how" className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-50">
                <PlayCircle className="mr-2" size={18}/> How it works
              </a>
            </div>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-200">
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="/public/kolkata.jpg">
              <source src="" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      {donateOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true">
          <div className="w-full sm:max-w-2xl rounded-2xl bg-white shadow-lg">
            <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
              <div>
                <div className="font-display text-lg font-bold">Enter Donation Details</div>
                <div className="text-sm text-neutral-600">Share a few details to help us process your donation.</div>
              </div>
              <button onClick={()=>setDonateOpen(false)} className="h-9 w-9 rounded-lg border border-neutral-200 flex items-center justify-center text-lg text-neutral-600 hover:text-neutral-900" aria-label="Close">✕</button>
            </div>
            <form className="p-6 grid gap-5" onSubmit={submitDonation}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-neutral-800">Full Name</label>
                  <input className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="Your name" required />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-neutral-800">Email</label>
                  <input type="email" className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="you@example.com" required />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-neutral-800">Phone</label>
                  <input type="tel" className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-neutral-800">City</label>
                  <input className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="Kolkata" />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-neutral-800">Amount (INR)</label>
                  <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" min="1" required className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="e.g., 500" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-neutral-800">Frequency</label>
                  <select className="rounded-xl border border-neutral-300 px-3 py-2">
                    <option>One-time</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-neutral-800">Purpose</label>
                  <select className="rounded-xl border border-neutral-300 px-3 py-2">
                    <option>Meals for Today</option>
                    <option>Logistics Support</option>
                    <option>General Fund</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-neutral-800">Payment Method</label>
                  <select className="rounded-xl border border-neutral-300 px-3 py-2">
                    <option>UPI</option>
                    <option>Card</option>
                    <option>Net Banking</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-neutral-800">PAN (optional)</label>
                  <input className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="ABCDE1234F" />
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-neutral-800">Message (optional)</label>
                <textarea value={note} onChange={(e)=>setNote(e.target.value)} className="rounded-xl border border-neutral-300 px-3 py-2" rows="3" placeholder="Any instructions or dedication"></textarea>
              </div>

              <div className="flex items-start gap-2 text-sm">
                <input id="agree" type="checkbox" required className="mt-1 h-4 w-4 rounded border-neutral-300" />
                <label htmlFor="agree" className="text-neutral-700">I agree to the terms and understand this is a charitable donation.</label>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={()=>setDonateOpen(false)} className="rounded-xl border border-neutral-300 px-4 py-2 text-sm">Cancel</button>
                <button type="submit" className="rounded-xl bg-[var(--nb-green)] text-white px-5 py-2 text-sm font-semibold">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="alertdialog" aria-modal="true">
          <div className="w-full sm:max-w-sm rounded-2xl bg-white shadow-lg p-6 text-center">
            <div className="text-lg font-semibold">Order submitted</div>
            <p className="text-sm text-neutral-600 mt-2">Thank you for your contribution.</p>
            <div className="mt-4 flex justify-center">
              <button onClick={()=>setConfirmOpen(false)} className="rounded-xl bg-[var(--nb-green)] text-white px-4 py-2 text-sm font-semibold">OK</button>
            </div>
          </div>
        </div>
      )}

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
                <div className="h-12 w-12 rounded-full bg-neutral-200" />
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
      <section className="container-px max-w-7xl mx-auto mt-12 sm:mt-16 mb-16">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Live Kolkata map</h2>
        <div className="mt-4 relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4">
          <div className="aspect-video w-full rounded-xl bg-[url('https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png')] bg-neutral-100 flex items-center justify-center text-neutral-500">
            <MapPin className="text-[var(--nb-orange)] mr-1"/> Recent donation hotspots
          </div>
        </div>
      </section>
    </div>
  )
}


