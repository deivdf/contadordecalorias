import { useReducer } from 'react'
import Formulario from './components/Formulario'
import { ActivityReducer, initialState} from './reducers/activity-reducer'

function App() {
// uso de useReducer 
const [state, dispatch] = useReducer(ActivityReducer, initialState);
  return (
    <>
      <header className='bg-orange-600 py-5'>
        <div className='max-w-4xl mx-auto flex justify-between'>
          <h1 className='text-lg font-bold text-white uppercase'>
            Contador de calorias
          </h1>
        </div>
      </header>

      <section className='bg-orange-500 py-20 px-5'>
        <div className='max-w-4xl mx-auto'>
          <Formulario
          dispatch={dispatch}
          />
        </div>
      </section>
    </>
  )
}

export default App
