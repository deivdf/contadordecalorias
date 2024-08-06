import { Activity } from "../types/type"

export type ActivityAction =
    //aqui se guarda el arreglo en el payload
    { type: 'save-activity', payload: { newActivity: Activity } }|
    { type: 'save-activiId', payload: { id: Activity['id'] } } |
    { type: 'delete-activity', payload: { id: Activity['id'] }}
// este taype ejecuta el activity es la actividad que se utiliza
export type ActivityState = {
    activities: Activity[]
    activiId: Activity['id']
}
//funcion para mandar el local storage a guardar en el activities
const localStorage = () : Activity[] => {
    //ts se escribe window para acceder a la funcinalidad localStoragef
    const activities = window.localStorage.getItem('activities')
    return activities ? JSON.parse(activities) :[]

}
//el initial estate guarda las actividaes
export const initialState: ActivityState = {
    activities: localStorage(),
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
        // se declara una variable para guardar las actividades que se vayan a editar o guardar una nueva dependiendo el caso
        let updateActivities: Activity[] = []
        if(state.activiId){
            //se edita el registro ya existente si el id esta guardado
            updateActivities = state.activities.map(activty => activty.id === state.activiId ? action.payload.newActivity : activty)
        }else{
            //si el id no se encuantra genera un nuevo registro
            updateActivities = [...state.activities, action.payload.newActivity]
        }
        return {
            //copia de los datos
            ...state,
            //se guarda el registro en el arreglo
            activities: updateActivities,
            //se envia el id para que no se vuelva a editar el registro
            activiId: ''
        }
    }
    //condicional para obtener el id y editarlo
    if(action.type === 'save-activiId'){

        return {
            //copia de los datos
            ...state,
            //solo es obtener el id del arreglo
            activiId: action.payload.id
        }
    }
    //condicional para eliminar por id
    if(action.type === 'delete-activity'){
        return {
            //copia del state
            ...state,
            //obtiene el id y lo filtra
            activities: state.activities.filter(activity => activity.id !== action.payload.id)
        }
    }
    //retorna el state global
    return state
}