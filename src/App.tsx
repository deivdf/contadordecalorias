import { useReducer } from 'react'
import Formulario from './components/Formulario'
import Activitys from './components/Activitys';
import { ActivityReducer, initialState} from './reducers/activity-reducer'

function App() {
// uso de useReducer 
const [state, dispatch] = useReducer(ActivityReducer, initialState);
//dispatch llama a las acciones del reducer
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
      <section className='p-10 mx-auto max-w-4xl'>
        <Activitys activities={state.activities}/>
      </section>
    </>
  )
}

export default App
