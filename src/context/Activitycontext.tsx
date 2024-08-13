import { ReactNode, Dispatch, createContext, useReducer, useMemo } from "react"
import { ActivityAction, ActivityReducer, ActivityState, initialState } from "../reducers/activity-reducer"
import { categoris } from "../data/category"
import { Activity } from "../types/type"

type ActivityProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState,
    dispatch: Dispatch<ActivityAction>
    consumoCAlorias: number,
    EjerciciConsumoCa: number,
    caloriesDiasquem: number,
    IsemptyActivities: boolean,
    categoriName: (category: Activity['category']) => string[]
}
// poniendo {} dentro del contex se quita el resaldado de error
export const ActivityContext = createContext<ActivityContextProps>({} as ActivityContextProps)


export const Activityprovaider = ({children}: ActivityProps) => {
    //aqui va el reducer se hace el llamado
    //pasamos la logica para calcular el consumo y las calorias quemadas para que se calculen desde el context
    const [state, dispatch] = useReducer(ActivityReducer, initialState)
    const consumoCAlorias = useMemo( ()=> state.activities.reduce((total, activity) => activity.category === 1 ? total + activity.calorias : total, 0), [state.activities])
    const EjerciciConsumoCa = useMemo ( ()=> state.activities.reduce((total, activity) => activity.category == 2 ? total + activity.calorias : total, 0), [state.activities])
    const caloriesDiasquem = useMemo( ()=> consumoCAlorias - EjerciciConsumoCa, [state.activities])
    const categoriName = useMemo(() => (category: Activity['category'])=> categoris.map( cat => cat.id === category ? cat.name : ''), [state.activities])
    const IsemptyActivities = useMemo(()=>state.activities.length === 0, [state.activities])
    return(
        <ActivityContext.Provider value={{
            state,
            dispatch,
            consumoCAlorias,
            EjerciciConsumoCa,
            caloriesDiasquem,
            categoriName,
            IsemptyActivities
            }}>
            {children}
        </ActivityContext.Provider>
    )
}