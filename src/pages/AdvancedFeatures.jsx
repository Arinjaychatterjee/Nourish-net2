import { Bell, Sprout, Weight } from 'lucide-react'
import { useState } from 'react'
import assets from '../assets/assets'

export default function AdvancedFeatures(){
  const [toast, setToast] = useState(null)
  const ingredients = [
    {
      item: 'Rice',
      amount: 50+'kg',
      price: 1650,
      banner:assets.rice
    },
    {
      item: 'dal',
      amount: 20+'kg',
      price: 750,
      banner:assets.dal
    },
    {
      item: 'Potato',
      amount: 10+'kg',
      price: 400,
      banner:assets.potato
    },
    {
      item: 'Green Onion',
      amount: 10+'kg',
      price: 370,
      banner:assets.green_oni
    }
  ]
  return (
    <div className="container-px max-w-7xl mx-auto py-8">
      <h1 className="font-display text-2xl font-bold">Advanced Features</h1>

      {/* AI Prediction Nudge */}
      <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--nb-green)]/10 text-[var(--nb-green)]">
            <Bell/>
          </div>
          <div>
            <div className="font-semibold">Heads up!</div>
            <p className="text-neutral-700 text-sm mt-1">Based on past rainy Mondays, you might have extra Dal tonight. Tap to pre-schedule a donation.</p>
            <div className="mt-3 flex gap-2">
              <button 
                onClick={() => {
                  setToast('Order is scheduled')
                  setTimeout(() => setToast(null), 2500)
                }}
                className="rounded-xl bg-[var(--nb-orange)] text-white px-4 py-2 text-sm font-semibold"
              >
                Pre-schedule
              </button>
              <button 
                onClick={() => {
                  setToast('We will remind you later tonight')
                  setTimeout(() => setToast(null), 2500)
                }}
                className="rounded-xl border border-neutral-300 px-4 py-2 text-sm"
              >
                Remind me later
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Raw Ingredient Marketplace */}
      <div className="mt-8 rounded-2xl border border-[#d9d2c4] bg-[#fbf8f1] p-6 shadow-sm">
        <div className="flex items-center gap-2">
          <Sprout className="text-[#6b613f]"/>
          <h2 className="font-display text-xl font-bold text-[#6b613f]">Raw Ingredient Marketplace</h2>
        </div>
        <p className="text-[#6b613f] text-sm mt-1">Buy/sell bulk produce from farmers and wholesalers.</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {ingredients.map((item,i) => (
            <div key={i} className="rounded-2xl border border-[#e9e2d3] bg-white p-4">
              <div className="h-24 rounded-xl overflow-hidden">
                <img src={item.banner} alt="rice" className='w-full h-full object-cover'/>
              </div>
              <div className="mt-2 font-semibold text-[#4a432b]">{item.item}</div>
              <div className="text-sm text-[#6b613f]">Rs {item.price}</div>
              <button 
                onClick={() => {
                  setToast('Order is added')
                  setTimeout(() => setToast(null), 2500)
                }}
                className="mt-2 w-full rounded-xl border border-[#d9d2c4] px-3 py-2 text-sm hover:bg-[#f4efe5] cursor-pointer"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[60]">
          <div className="rounded-xl bg-[var(--nb-green)] text-white px-4 py-3 shadow-lg">
            <div className="font-semibold text-sm">{toast}</div>
          </div>
        </div>
      )}
    </div>
  )
}


