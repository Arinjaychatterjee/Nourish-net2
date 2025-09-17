import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if(!name.trim() || !password.trim()){
      setError('Please enter both Name/ID and Password')
      return
    }
    navigate('/')
  }

  return (
    <div className="container-px max-w-7xl mx-auto py-10">
      <div className="max-w-md mx-auto rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h1 className="font-display text-2xl font-bold text-center">Login</h1>
        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <div className="grid gap-2">
            <label className="text-sm font-medium text-neutral-800">Name / ID</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="Enter your name or ID" required />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-neutral-800">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="Enter password" required />
          </div>
          <button type="submit" className="mt-2 rounded-xl bg-[var(--nb-green)] text-white px-4 py-2 text-sm font-semibold">Submit</button>
        </form>
      </div>
    </div>
  )
}


