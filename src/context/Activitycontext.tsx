import { ReactNode, Dispatch, createContext, useReducer, useMemo } from "react"
import { ActivityAction, ActivityReducer, ActivityState, initialState } from "../reducers/activity-reducer"

type ActivityProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState,
    dispatch: Dispatch<ActivityAction>
    consumoCAlorias: number,
    EjerciciConsumoCa: number,
    caloriesDiasquem: number
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
    return(
        <ActivityContext.Provider value={{
            state,
            dispatch,
            consumoCAlorias,
            EjerciciConsumoCa,
            caloriesDiasquem }}>
            {children}
        </ActivityContext.Provider>
    )
}