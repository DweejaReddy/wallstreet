import Image from 'next/image'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Wallstreet from '@/components/Wallstreet'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='bg-black'>
      <Navbar />
      <Wallstreet />
      <Contact />
      <Footer />
    </div>
  )
}
