import { Award, PlusCircle, Trophy, Clock } from 'lucide-react'
import { useState } from 'react'

export default function DonorDashboard(){
  const [open, setOpen] = useState(false)

  return (
    <div className="container-px max-w-7xl mx-auto py-8">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold">Donor Dashboard</h1>
        <button onClick={()=>setOpen(true)} className="inline-flex items-center gap-2 rounded-2xl bg-[var(--nb-green)] text-white px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90">
          <PlusCircle size={18}/> List a Donation
        </button>
      </div>

      {/* Summary cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {label:'Total Karma Points', value:'3,420'},
          {label:'Community Rank', value:'#12'},
          {label:'Active Listings', value:'2'},
        ].map(card => (
          <div key={card.label} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="text-3xl font-extrabold text-[var(--nb-green)]">{card.value}</div>
            <div className="text-neutral-700 mt-1">{card.label}</div>
          </div>
        ))}
      </div>

      {/* Karma & Rewards */}
      <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="font-display text-xl font-bold">Karma & Rewards</div>
          <button className="rounded-xl border border-neutral-300 px-3 py-2 text-sm hover:bg-neutral-50">Download Monthly Impact Report (CSR)</button>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1,2,3].map(b=> (
            <div key={b} className="rounded-xl border border-dashed border-neutral-300 p-4 flex items-center gap-3">
              <Trophy className="text-amber-600"/>
              <div>
                <div className="font-semibold">Digital Badge {b}</div>
                <div className="text-neutral-600 text-sm">Unlock at 1,000 points</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 90-second donation modal (3-step) */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true">
          <div className="w-full sm:max-w-lg rounded-2xl bg-white shadow-lg">
            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
              <div className="font-display font-bold">90-Second Donation</div>
              <button onClick={()=>setOpen(false)} className="text-neutral-500 hover:text-neutral-800">✕</button>
            </div>
            <div className="p-5 grid gap-4">
              <div className="text-sm text-neutral-600">Step 1 · Food Details</div>
              <div className="grid gap-3">
                <input className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="Food name (e.g., Veg Pulao)"/>
                <div className="grid grid-cols-2 gap-3">
                  <input className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="Quantity (servings)"/>
                  <input className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="Food type (veg/non-veg)"/>
                </div>
                <textarea className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="Allergens/Notes"></textarea>
              </div>
              <div className="text-sm text-neutral-600">Step 2 · Logistics</div>
              <div className="grid gap-3">
                <input className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="Pickup location"/>
                <div className="grid grid-cols-2 gap-3">
                  <input className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="Ready by (time)"/>
                  <input className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="Best before (time)"/>
                </div>
              </div>
              <div className="text-sm text-neutral-600">Step 3 · Confirm</div>
              <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3 text-sm text-neutral-700">
                We will notify nearby NGOs and Food Runners instantly.
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button onClick={()=>setOpen(false)} className="rounded-xl border border-neutral-300 px-4 py-2 text-sm">Cancel</button>
                <button className="rounded-xl bg-[var(--nb-orange)] text-white px-4 py-2 text-sm font-semibold">Publish Donation</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


