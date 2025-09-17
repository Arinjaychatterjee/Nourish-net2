import { BrowserRouter as Router, Routes, Route , useLocation, NavLink} from 'react-router-dom';
import { useState } from 'react'
import { Menu, UtensilsCrossed, HandHeart, MapPin, Award, Home, User } from 'lucide-react'
import HomePage from './pages/HomePage.jsx'
import Landing from './pages/Landing.jsx'
import DonorDashboard from './pages/DonorDashboard.jsx'
import NGODashboard from './pages/NGODashboard.jsx'
import AdvancedFeatures from './pages/AdvancedFeatures.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import LearnMore from './pages/learnmore.jsx';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const close = () => setMobileOpen(false)
  const linkClass = ({isActive})=>`flex items-center gap-2 rounded-xl px-3 py-2 ${isActive? 'text-[var(--nb-green)] font-semibold bg-[var(--nb-green)]/5':'text-neutral-800 hover:text-[var(--nb-green)] hover:bg-neutral-50'}`
  const location = useLocation()
  const isLogin = location.pathname === '/login'
  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
        <nav className="container-px max-w-7xl mx-auto h-16 flex items-center justify-between">
          <div className={`flex items-center gap-2 transition-opacity ${mobileOpen ? 'opacity-20' : 'opacity-100'}`}>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--nb-green)] text-white font-bold">NN</span>
            <span className="font-display text-lg font-bold text-[var(--nb-green)]">NourishNet</span>
          </div>
          {!isLogin && (
            <>
              <div className="hidden sm:flex items-center gap-6 text-sm">
                <NavLink to="/" className={linkClass}><Home size={18}/> Home</NavLink>
                <NavLink to="/landing" className={linkClass}><Award size={18}/> Landing</NavLink>
                <NavLink to="/donor" className={linkClass}><UtensilsCrossed size={18}/> Donor</NavLink>
                <NavLink to="/ngo" className={linkClass}><HandHeart size={18}/> NGO</NavLink>
                <NavLink to="/advanced" className={linkClass}><Award size={18}/> Advanced</NavLink>
                <NavLink to="/profile" className={'bg-gray-500/40 rounded-full p-3'}>
                  <User/>
                </NavLink>
              </div>
              <button
                className="sm:hidden p-2 rounded-xl border border-neutral-200"
                aria-label="Open menu"
                aria-controls="mobile-nav"
                aria-expanded={mobileOpen}
                onClick={()=>setMobileOpen(true)}
              >
                <Menu />
              </button>
            </>
          )}
        </nav>
      </header>

      {/* Mobile sidebar / shutter */}
      {!isLogin && (
        <div className={`sm:hidden fixed inset-0 z-50 ${mobileOpen ? '' : 'pointer-events-none'}`}>
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={close}
            aria-hidden="true"
          />
          {/* Panel */}
          <div
            id="mobile-nav"
            className={`absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-xl border-l border-neutral-200 transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
            role="dialog"
            aria-modal="true"
          >
            <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
              <span className="font-display font-bold text-[var(--nb-green)]">NourishNet</span>
              <button onClick={close} aria-label="Close menu" className="rounded-lg border border-neutral-200 h-8 w-8 flex items-center justify-center text-lg">✕</button>
            </div>
            <div className="p-2">
              <nav className="grid gap-1 text-sm">
                <NavLink to="/" className={linkClass} onClick={close}><Home size={18}/> Home</NavLink>
                <NavLink to="/landing" className={linkClass} onClick={close}><Award size={18}/> Landing</NavLink>
                <NavLink to="/donor" className={linkClass} onClick={close}><UtensilsCrossed size={18}/> Donor</NavLink>
                <NavLink to="/ngo" className={linkClass} onClick={close}><HandHeart size={18}/> NGO</NavLink>
                <NavLink to="/advanced" className={linkClass} onClick={close}><Award size={18}/> Advanced</NavLink>
              </nav>
              <div className="p-3 mt-3">
                <NavLink to="/donor" onClick={close} className="inline-flex w-full items-center justify-center rounded-2xl bg-[var(--nb-green)] text-white px-4 py-2 text-sm font-semibold">List a Donation</NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="container-px max-w-7xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
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
          <p className="text-neutral-600 mt-2 flex items-center gap-1"><MapPin size={16}/> West Bengal, India</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-dvh flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/donor" element={<DonorDashboard />} />
            <Route path="/ngo" element={<NGODashboard />} />
            <Route path="/advanced" element={<AdvancedFeatures />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/learn-more" element={<LearnMore />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
