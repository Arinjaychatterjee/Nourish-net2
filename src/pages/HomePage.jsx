import { PlayCircle, Leaf, Truck, HandHeart, MapPin, User, ShieldCheck, Eye, Zap } from 'lucide-react'
import { useState } from 'react'
import MapComp from '../components/MapComp'
import supabase from '../config/supabase'

export default function HomePage(){
  const [donateOpen, setDonateOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)

  const [form, setForm] = useState({
      foodName: '',
      quantity: '',
      foodType: '',
      pickupLocation: '',
      readyBy: '',
      bestBefore: '',
      notes: '',
    })
  const [errors, setErrors] = useState({}) 
  const updateField = (field) => (e) => {
    setForm(prev => ({...prev, [field]: e.target.value}))
    setErrors(prev => ({...prev, [field]: ''}))
  }

  const validate = () => {
    const next = {}
    if(!form.foodName.trim()) next.foodName = 'Food name is required'
    const qty = Number(form.quantity)
    if(!form.quantity || Number.isNaN(qty) || qty <= 0) next.quantity = 'Enter a valid quantity'
    if(!form.foodType.trim()) next.foodType = 'Food type is required'
    if(!form.pickupLocation.trim()) next.pickupLocation = 'Pickup location is required'
    if(!form.readyBy.trim()) next.readyBy = 'Ready by time is required'
    if(!form.bestBefore.trim()) next.bestBefore = 'Best before time is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onPublish = async () => {
    if(!validate()) return

    const { data, error } = await supabase
      .from("Donors")
      .insert([
        {
          food_name: form.foodName,
          food_type: form.foodType,
          quantity: form.quantity,
          notes: form.notes,
          pickup_location: form.pickupLocation,
          ready_by: form.readyBy,
          best_before: form.bestBefore,
        },
      ])
    if (error) {
      console.error("Error inserting donation:", error)
      alert("Something went wrong!")
      return
    }
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
              <a href="#donate" onClick={()=>setDonateOpen(!donateOpen)} className="inline-flex items-center justify-center rounded-2xl bg-[var(--nb-green)] text-white px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--nb-green)]">Donate Now</a>
              <a href="#how" className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-50">
                <PlayCircle className="mr-2" size={18}/> How it works
              </a>
            </div>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-red-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent">
              <img src="/homepage_banner.png" alt="homepagebanner" className='w-full h-full object-cover'/>
            </div>
          </div>
        </div>
      </section>
      
      {/* donation form */}
      {donateOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true">
          <div className="w-full sm:max-w-lg rounded-2xl bg-white shadow-lg max-h-[90vh] flex flex-col">
            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
              <div className="font-display font-bold">90-Second Donation</div>
              <button onClick={()=>setOpen(false)} className="text-neutral-500 hover:text-neutral-800">✕</button>
            </div>
            <div className="p-5 grid gap-4 overflow-y-auto">
              <div className="text-sm text-neutral-600">Step 1 · Food Details</div>
              <div className="grid gap-3">
                <input value={form.foodName} onChange={updateField('foodName')} className={`rounded-xl border px-3 py-2 ${errors.foodName? 'border-red-500' : 'border-neutral-300'}`} placeholder="Food name (e.g., Veg Pulao)"/>
                {errors.foodName && <div className="text-xs text-red-600">{errors.foodName}</div>}
                <div className="grid grid-cols-2 gap-3">
                  <input value={form.quantity} onChange={updateField('quantity')} className={`rounded-xl border px-3 py-2 ${errors.quantity? 'border-red-500' : 'border-neutral-300'}`} placeholder="Quantity (servings)"/>
                  <input value={form.foodType} onChange={updateField('foodType')} className={`rounded-xl border px-3 py-2 ${errors.foodType? 'border-red-500' : 'border-neutral-300'}`} placeholder="Food type (veg/non-veg)"/>
                </div>
                {errors.quantity && <div className="text-xs text-red-600">{errors.quantity}</div>}
                {errors.foodType && <div className="text-xs text-red-600">{errors.foodType}</div>}
                <textarea value={form.notes} onChange={updateField('notes')} className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="Allergens/Notes"></textarea>
              </div>
              <div className="text-sm text-neutral-600">Step 2 · Logistics</div>
              <div className="grid gap-3">
                <input value={form.pickupLocation} onChange={updateField('pickupLocation')} className={`rounded-xl border px-3 py-2 ${errors.pickupLocation? 'border-red-500' : 'border-neutral-300'}`} placeholder="Pickup location"/>
                <div className="grid grid-cols-2 gap-3">
                  <input value={form.readyBy} onChange={updateField('readyBy')} className={`rounded-xl border px-3 py-2 ${errors.readyBy? 'border-red-500' : 'border-neutral-300'}`} placeholder="Ready by (time)"/>
                  <input value={form.bestBefore} onChange={updateField('bestBefore')} className={`rounded-xl border px-3 py-2 ${errors.bestBefore? 'border-red-500' : 'border-neutral-300'}`} placeholder="Best before (time)"/>
                </div>
              </div>
              {(errors.pickupLocation || errors.readyBy || errors.bestBefore) && (
                <div className="text-xs text-red-600">
                  {errors.pickupLocation && <div>{errors.pickupLocation}</div>}
                  {errors.readyBy && <div>{errors.readyBy}</div>}
                  {errors.bestBefore && <div>{errors.bestBefore}</div>}
                </div>
              )}
              <div className="text-sm text-neutral-600">Step 3 · Confirm</div>
              <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3 text-sm text-neutral-700">
                We will notify nearby NGOs and Food Runners instantly.
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button onClick={()=>setOpen(false)} className="rounded-xl border border-neutral-300 px-4 py-2 text-sm">Cancel</button>
                <button onClick={onPublish} className="rounded-xl bg-[var(--nb-orange)] text-white px-4 py-2 text-sm font-semibold">Publish Donation</button>
              </div>
            </div>
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

      {/* Features */}
      <section className="container-px max-w-7xl mx-auto mt-12 sm:mt-16">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Why donate with us</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {icon: ShieldCheck, title: 'Secure Payments', desc: 'Trusted and safe donation experience.'},
            {icon: Eye, title: 'Transparent Impact', desc: 'Track how your donation helps.'},
            {icon: Zap, title: 'Simple & Fast', desc: 'Donate in under a minute.'},
          ].map((f)=> (
            <div key={f.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--nb-green)]/10 text-[var(--nb-green)]">
                <f.icon size={18} />
              </div>
              <div className="mt-3 font-semibold">{f.title}</div>
              <p className="text-neutral-600 text-sm mt-1">{f.desc}</p>
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

      {/* Call to Action */}
      <section className="container-px max-w-7xl mx-auto mt-12 sm:mt-16">
           <div className="rounded-2xl border border-neutral-200 bg-white p-8 sm:p-10 text-center shadow-sm">
          <h3 className="font-display text-xl sm:text-2xl font-bold">Make a Difference with Every Donation</h3>
          <p className="text-neutral-700 mt-2 max-w-2xl mx-auto">Join our community to reduce food waste and serve more meals across Kolkata.</p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={()=>setDonateOpen(!donateOpen)} className="inline-flex items-center justify-center rounded-2xl bg-[var(--nb-green)] text-white px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90">Donate Now</button>
          </div>
        </div>
      </section>

      {/* Live Map (stylized placeholder) */}
      <section className="container-px max-w-7xl mx-auto mt-12 sm:mt-16 mb-1 z-1 relative">
        <MapComp/>
      </section>
    </div>
  )
}


