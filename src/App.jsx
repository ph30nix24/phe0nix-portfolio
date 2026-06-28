
import { useMediaQuery } from 'react-responsive';
import Navbar from './component/Navbar'
import ParticleCanvas from './component/ParticleCanvas'
import Hero from './component/Hero';
import About from './component/About';
import Work from './component/Work';


const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <ParticleCanvas />
      <main className='w-full min-h-screen relative overflow-x-hidden text-[#131313] max-lg:px-5'>
        <Navbar isMobile={isMobile}/>
        <Hero isMobile={isMobile}/>
        <About isMobile={isMobile}/>
        <Work isMobile={isMobile}/>
      </main>
    </>
  )
}

export default App