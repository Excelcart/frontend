import Features from "@/components/landingPage/Features";
import GetStarted from "@/components/landingPage/GetStarted";
import Hero from "@/components/landingPage/Hero";
import Testimonials from "@/components/landingPage/Testimonials";
import UserRoles from "@/components/landingPage/UserRoles";
import Layout from "@/components/Layout";



export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features/>
      <UserRoles/>
      <GetStarted />
      <Testimonials/>
    </Layout>
  )
}
