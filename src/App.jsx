import './App.css'
import { CallToAction } from './components/CTA/CTA'
import { Footer } from './components/Footer/Footer'
import { Form } from './components/Form/Form'
import { Header } from './components/Header/Header'
import { Introduction } from './components/Introduction/Introduction'
import { Stat } from './components/Stat/Stat'


function App() {

  return (
    <>
      <Header/>
      <Introduction/>
      <Form/>
      <Stat/>
      <CallToAction/>
      <Footer/>
    </>
  )
}

export default App
