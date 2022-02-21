import Header from '../src/components/molecules/Header'
import Footer from '../src/components/molecules/Footer'
import Hero from '../src/components/organisms/Hero'
import Cta from '../src/components/organisms/Cta'
import CompleteOrder from '../src/components/organisms/CompleteOrder'
import Services from '../src/components/organisms/Services'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Cta />
      <CompleteOrder/>
      <Services/>
      <Footer/>
    </div>
  )
}
