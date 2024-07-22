import './App.css'
import Formulario from './components/Formulario'

function App() {


  return (
    <>
      <header className=' bg-orange-600 py-3'>
        <div className='max-w-4xl mx-auto flex justify-between'>
          <h1 className='text-center text-lg font-bold text-white uppercase'>
            Contador de calorias
          </h1>
        </div>
      </header>

      <section className='bg-orange-500 py-20 px-5'>
        <div className='max-w-4xl mx-auto'>
          <Formulario />
        </div>
      </section>
    </>
  )
}

export default App
