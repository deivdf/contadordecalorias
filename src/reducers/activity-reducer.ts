import { Activity } from "../types/type"

export type ActivityAction =
    //aqui se guarda el arreglo en el payload
    { type: 'save-activity', payload: { newActivity: Activity } }|
    { type: 'save-activiId', payload: { id: Activity['id'] } }
// este taype ejecuta el activity es la actividad que se utiliza
type ActivityState = {
    activities: Activity[]
    activiId: Activity['id']
}
//el initial estate guarda las actividaes
export const initialState: ActivityState = {
    activities: [],
    activiId: ''
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
            //copia de los datos
            ...state,
            //se guarda el registro en el arreglo
            activities: [...state.activities, action.payload.newActivity]
        }
    }
    if(action.type === 'save-activiId'){
        return {
            //copia de los datos
            ...state,
            //solo es obtener el id del arreglo
            activiId: action.payload.id
        }
    }
    //retorna el state global
    return state
}