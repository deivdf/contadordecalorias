import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { Activity } from "../types/type"
import { categoris } from "../data/category"
import { useMemo } from "react"
type Activitysprops = {
    activities: Activity[]
}

export default function Activitys({activities} : Activitysprops) {
//uso de useMemo para pasar el tipo de caloria con nombre en vez de numero accedemos a ella a travez de el arreglo categoris
    const categoriName = useMemo(() => (category: Activity['category'])=> categoris.map( cat => cat.id === category ? cat.name : ''), [activities])
  return (
    <>
        <h2 className="text-4xl font-blod text-slate-600 text-center">Comida y Actividades</h2>
        {activities.map(activiti => (
            <div key={activiti.id} className="text-center bg-zinc-100 rounded-lg px-5 py-10 mt-5 font-bold text-slate-600 text-2xl flex justify-between">
                <div className="space-y-8 relative">
                    <h3>Actividad</h3>
                    <p className={`absolute -top-8 -left-8 px-10 py-2 text-white  uppercase font-bold
                        ${activiti.category === 1 ? 'bg-cyan-400' : ' bg-lime-500'}`}>{categoriName(+activiti.category)}</p>
                    <p className={`${activiti.category === 1 ? 'text-cyan-400': 'text-lime-500' }`}>{activiti.name}</p>
                    <p>{activiti.calorias} Kcal</p>
                </div>
                <div>
                    <h3>Acciones</h3>
                    <div  className="flex gap-5 items-center mt-10">
                          <button>
                              <PencilSquareIcon className="h-8 w-8 text-gray-800"/>
                          </button>
                          <button>
                            <XCircleIcon className=" h-8 w-8 text-red-800"/>
                          </button>
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}
