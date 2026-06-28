
import { useMediaQuery } from 'react-responsive';
import Navbar from './component/Navbar'
import ParticleCanvas from './component/ParticleCanvas'
const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <ParticleCanvas />
      <main className='w-full min-h-screen relative overflow-x-hidden text-[#131313]'>
        <Navbar isMobile={isMobile}/>

      </main>
    </>
  )
}

export default App