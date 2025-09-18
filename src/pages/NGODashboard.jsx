import { Filter, Search, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import MapComp from "../components/MapComp";
import supabase from "../config/supabase";

export default function NGODashboard() {
  const [selected, setSelected] = useState(null);
  const [donations, setdonations] = useState([]);
  const [claimedIds, setClaimedIds] = useState([]);
  const [toast, setToast] = useState(null);
  
  const fetch_donations = async () => {
    const { data, error } = await supabase.from("Donors").select("*");
    if (data) {
      setdonations(data);
      // data structure update the select option with the keys from shown in the example below >
      // allergens: null;
      // best_before: "2025-09-18T17:45:12";
      // created_at: "2025-09-18T13:16:36.162152+00:00";
      // food_name: "dal";
      // food_type: "dal";
      // id: 2;
      // notes: "dal gug ugaga";
      // pickup_location: "dal gug ugaga";
      // quantity: 1;
      // ready_by: "2025-09-18T17:45:12";
    }
    if (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch_donations();
  }, []);

  const visibleDonations = donations.filter((d) => !claimedIds.includes(d.id));

  const onClaim = () => {
    if(!selected) return
    setClaimedIds(prev => prev.includes(selected.id) ? prev : [...prev, selected.id])
    setSelected(null)
    setToast('Donation accepted')
    window.setTimeout(()=> setToast(null), 2500)
  }

  return (
    <div className="container-px max-w-7xl mx-auto py-6">
      <div className="flex items-center justify-between gap-3">
        <h1 className="font-display text-2xl font-bold">NGO Operations</h1>
        <div className="flex items-center gap-2">
          <button className="rounded-xl border border-neutral-300 px-3 py-2 text-sm inline-flex items-center gap-2">
            <Filter size={16} /> Filters
          </button>
        </div>
      </div>

      <div className="mt-4 grid lg:grid-cols-3 gap-4">
        {/* Map */}
        <div className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white p-3 overflow-hidden z-1">
          <MapComp />
        </div>

        {/* List */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-3">
          <div className="flex items-center gap-2 border border-neutral-300 rounded-xl px-3 py-2">
            <Search size={16} className="text-neutral-500" />
            <input
              className="w-full outline-none text-sm"
              placeholder="Search by food, distance, availability"
            />
          </div>
          <div className="mt-3 divide-y divide-neutral-200">
            {visibleDonations.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelected(d)}
                className="w-full text-left hover:bg-neutral-50 rounded-xl p-3 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{d.food_name}</div>
                    <div className="text-xs text-neutral-600">
                      {d.quantity} • {d.pickup_location}
                    </div>
                  </div>
                  <ChevronRight className="text-neutral-400" />
                </div>
                <div className="text-xs text-neutral-600 mt-1">{d.ready_by}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Details slide-in */}
      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
          <div className="h-full w-full sm:max-w-md bg-white shadow-xl p-5">
            <div className="flex items-center justify-between">
              <div className="font-display font-bold">{selected.food_name}</div>
              <button
                onClick={() => setSelected(null)}
                className="text-neutral-500 hover:text-neutral-800 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="mt-3 text-sm text-neutral-700">
              <div>Quantity: {selected.quantity}</div>
              <div className="mt-1">Pickup location: {selected.pickup_location}</div>
              <div className="mt-1">Ready by: {selected.ready_by}</div>
              <div className="mt-3 rounded-xl bg-neutral-50 border border-neutral-200 p-3">
                Prepared by verified donor. Properly packed and labeled.
              </div>
            </div>
            <button onClick={onClaim} className="mt-4 w-full rounded-2xl bg-[var(--nb-orange)] text-white px-4 py-3 text-sm font-semibold cursor-pointer">CLAIM DONATION</button>
          </div>
        </div>
      )}

      {/* Pipeline */}
      <div className="mt-8">
        <h2 className="font-display text-xl font-bold">My Pickups</h2>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          {[
            { title: "Claimed" },
            { title: "Pickup in Progress" },
            { title: "Completed" },
          ].map((col) => (
            <div
              key={col.title}
              className="rounded-2xl border border-neutral-200 bg-white p-3 min-h-[200px]"
            >
              <div className="font-semibold">{col.title}</div>
              <div className="mt-2 grid gap-2">
                <div className="rounded-xl border border-neutral-200 p-3">
                  Donation card
                </div>
                <div className="rounded-xl border border-neutral-200 p-3">
                  Donation card
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* App toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[60]">
          <div className="rounded-xl bg-[var(--nb-green)] text-white px-4 py-3 shadow-lg">
            <div className="font-semibold text-sm">{toast}</div>
          </div>
        </div>
      )}
    </div>
  );
}
