import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Timeline from './components/Timeline'
import Proposals from './components/Proposals'
import Roadmap from './components/Roadmap'
import Candidates from './components/Candidates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return <>
    <Header />
    <main>
      <Hero />
      <Profile />
      <Timeline />
      <Proposals />
      <Roadmap />
      <Candidates />
      <Contact />
    </main>
    <Footer />
  </>
}
