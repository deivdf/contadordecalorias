import { useMemo } from "react"
import { Activity } from "../types/type"

type Activitisprops= {
    activities: Activity[]
}
export default function CaloriTracer({activities}: Activitisprops) {
    const consumoCAlorias = useMemo( ()=> activities.reduce((total, activity) => activity.category === 1 ? total + activity.calorias : total, 0), [activities])
    const EjerciciConsumoCa = useMemo ( ()=> activities.reduce((total, activity) => activity.category == 2 ? total + activity.calorias : total, 0), [activities])
  return (
    <>
        <h2 className="text-white font-black text-center text-4xl">Resumen de el consumo</h2>
        <div className="grid items-center md:grid-rows-1 md:justify-between gap-5 mt-10 grid-cols-2">
            <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                    Alimentos
                    <span className="fotn-black text-6xl text-orange-500">{consumoCAlorias}</span>
                    Consumidas
            </p>
            <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                    Ejercicio
                    <span className="fotn-black text-6xl text-orange-500">{EjerciciConsumoCa}</span>
                    Consumidas
            </p>
        </div>
        
    </>
  )
}
