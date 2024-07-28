import { Activity } from "../types/type"

export type ActivityAction = 
{ type: 'save-activity', payload: {newActivity: Activity}}
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
    //state es el estado global de la aplicacion
    state: ActivityState = initialState,
    //el action es la accion que se ejecuta en la pagina 
    action: ActivityAction
) =>{
    if(action.type === 'save-activity'){
        //maneja la logica para manejar el state
        console.log('desde el type save-activity')
    }
    //retorna el state global
    return state
}