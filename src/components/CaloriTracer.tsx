import CaloriesDisplay from "./CaloriesDisplay"
import { useActivity } from '../hook/useActivity'

/*type Activitisprops= {
    activities: Activity[]
    export default function CaloriTracer({activities}: Activitisprops) 
}*/
export default function CaloriTracer() {
    const {consumoCAlorias, EjerciciConsumoCa, caloriesDiasquem } = useActivity()
    /*
    destructuring para extraer activities de el state
    const {activities} = state
    /* uso de el hook useMemo para diferenciar 
    entre calorias quemadas y calorias Consumidas y 
    se la categorias es estricticamente igual a 1 entences (?) las calorias se suman a total
    (:) de lo contrario total es 0, activity es parametro para acceder a la categoria dentro del arreglo
    //calculo del consumo dependiendo de la categoria
    const consumoCAlorias = useMemo( ()=> activities.reduce((total, activity) => activity.category === 1 ? total + activity.calorias : total, 0), [activities])
    const EjerciciConsumoCa = useMemo ( ()=> activities.reduce((total, activity) => activity.category == 2 ? total + activity.calorias : total, 0), [activities])
    const caloriesDiasquem = useMemo( ()=> consumoCAlorias - EjerciciConsumoCa, [activities])
    
    */

  return (
    <>
        <h2 className="text-white font-black text-center text-4xl">Resumen de el consumo</h2>
        <div className="grid items-center md:grid-rows-1 md:justify-between gap-5 mt-10 grid-cols-3">
            <CaloriesDisplay 
                calories={consumoCAlorias}
                textA={'Consumidas'}
                textB={'Alimentos'}
            />
            <CaloriesDisplay 
                calories={EjerciciConsumoCa}
                textA={'Quemadas'}
                textB={'Ejercicios'}
            />
            <CaloriesDisplay
                calories={caloriesDiasquem}
                textA={'Total'}
                textB={'Calorias por quemar'}
            />
        </div>
        
    </>
  )
}
