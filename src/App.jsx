import './App.css'
import BackTop from './BackTop'

function App() {


  return (

    <div className="h-full w-full overflow-x-hidden">

      <BackTop />
      <section className=' bg-gray-900 text-white'>Scroll Down ⬇</section>
      <section className=' bg-indigo-500  text-white'>Click on bottom right button ⬆️</section>
      <section className=' bg-gray-900 text-white'>yeah! thats it.😉</section>
      <section className=' bg-indigo-500 text-white'>
        If you liked this, give it a star 🌟 on &nbsp;
        <a href="https://github.com/JayashTripathy" target="_blank" className='bg-black p-1  px-4 rounded'>
         Github
        </a>
      </section>

    </div>

  )
}

export default App
