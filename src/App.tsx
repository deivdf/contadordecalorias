import { useReducer, useEffect } from 'react'
import Formulario from './components/Formulario'
import Activitys from './components/Activitys';
import { ActivityReducer, initialState} from './reducers/activity-reducer'

function App() {
// uso de useReducer 
const [state, dispatch] = useReducer(ActivityReducer, initialState);

//local storage para gurdado dinamico en el navegador
useEffect(()=>{
  localStorage.setItem('activities',JSON.stringify(state.activities))
},[state.activities])
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
          state={state}
          />
        </div>
      </section>
      <section className='p-10 mx-auto max-w-4xl'>
        <Activitys 
          activities={state.activities}
          dispatch={dispatch}/>
      </section>
    </>
  )
}

export default App
