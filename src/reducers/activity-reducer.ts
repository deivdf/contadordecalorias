import { Activity } from "../types/type"

export type ActivityAction =
    //aqui se guarda el arreglo en el payload
    { type: 'save-activity', payload: { newActivity: Activity } }
// este taype ejecuta el activity es la actividad que se utiliza
type ActivityState = {
    activities: Activity[]
}
//el initial estate guarda las actividaes
export const initialState = {
    activities: []
}

// funcion para uso de useReducer monitorea la actividad en la pagina encaso de uso
export const ActivityReducer = (
    //state es el estado global de la aplicacion parametros
    state: ActivityState = initialState,
    //el action es la accion que se ejecuta en la pagina on parametro 
    action: ActivityAction
) => {
    //condicional para ejecutar la logica si el action type cumple
    if (action.type === 'save-activity') {
        //maneja la logica para actualizar el state
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }
    //retorna el state global
    return state
}