import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Landing = () => {
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
    setAmount('')
    setNote('')
  }

  return (
    <>
      <div className="landing-container">
        <div className="hero-section bg-gradient-to-r from-green-400 to-blue-500 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Make a Difference Today</h1>
            <p className="text-xl mb-8">Support those in need with your contribution</p>
            <Link 
              to="/login" 
              className="bg-white text-green-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>

        <div className="lower-section bg-white py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/login" 
                className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                Login / Register
              </Link>
              <Link 
                to="/learn-more" 
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing


