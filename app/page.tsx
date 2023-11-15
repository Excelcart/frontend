import Features from '@/components/Features'
import Footer from '@/components/Footer'
import GetStarted from '@/components/GetStarted'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import UserRoles from '@/components/UserRoles'


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white relative">
      <Header />
      <Hero />
      <Features/>
      <UserRoles/>
      <GetStarted />
      <Testimonials/>
      <Footer/>
    </main>
  )
}
