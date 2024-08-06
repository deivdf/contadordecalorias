import { useReducer, useEffect, useMemo } from 'react'
import Formulario from './components/Formulario'
import Activitys from './components/Activitys';
import { ActivityReducer, initialState} from './reducers/activity-reducer'
import CaloriTracer from './components/CaloriTracer';

function App() {
// uso de useReducer 
const [state, dispatch] = useReducer(ActivityReducer, initialState);
const canrestApp = () => useMemo(() => state.activities.length, [state.activities])

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
          <button className='bg-gray-800 rounded-lg p-2 text-white fotn-blod text-sm cursor-pointer
           uppercase hover:bg-cyan-400 disabled:opacity-10' disabled={!canrestApp()} onClick={()=> dispatch({type: 'reiniciar-app'})}>
            Reiciciar App
          </button>
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
      <section className='bg-gray-800 p-10'>
        <div className='max-w-4xl mx-auto'>
          <CaloriTracer 
            activities={state.activities}
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
