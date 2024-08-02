import { useState, ChangeEvent, FormEvent, Dispatch} from "react"
import {v4 as uuidv4 } from "uuid"
import { Activity } from "../types/type"
import { categorys } from "../data/category"
import { ActivityAction } from "../reducers/activity-reducer"
// uso de taype para nicializar el dispatch
type Formsprop ={
  dispatch: Dispatch<ActivityAction>
}
/*estaforma tambie se usa dentro del state
  const [data, setData] = useState<Activity>({
  category: 1,
  name: '',
  calorias: 0
})
*/
const initialState: Activity = {
  // se asigna un id en el arreglo
  id: uuidv4(),
  category: 1,
  name: '',
  calorias: 0
}
//se le pasa a la funcion el prop de dispatch que contiene el useReducer
export default function Formulario({dispatch}: Formsprop) {
  //uso de useState con el type de activitys para darle la estructura de los datos
  const [data, setData] = useState<Activity>(initialState)
  // funcion handle para determinar si el id del selector
  const handlecange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    //parsea el dato y si es un numero lo envia a data para guardarlo en el state
    const isNumberField = ['category', 'calorias'].includes(e.target.id)
    setData({
      //...data guarda una copia de el state
      ...data,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value
    })
  }
  //funcion para validar las actividades
  const isValidActivity = () =>{
    //accede a los datos de data
    const {name, calorias} = data
    //console.log(name.trim() !== '' && calorias >0)
    //valida que esos dos campos no esten vacions y no sean iguales a 0
    return name.trim() !== '' && calorias > 0
  }
  // funcion que se ejecuta el guardar los datos 
  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    //funcion e para que este atento de cuando se guarden los datos solo escucha
    e.preventDefault()
    //llamado a dispatch que es el promp para enviar los datos del formulario a activity reducer y al App.tsx
    dispatch({type: 'save-activity', payload: {newActivity: data}});
    //se limpian los datos en el formulario enviado en el setData
    setData({
      //guarda un una copia del state con el idd
      ...initialState,
      //asigna un id nuevo del que lla esta gurdo en la copia para que no se repita
      id: uuidv4()
    });
  }


  return (
    <div>
      <form
      className=" space-y-5 bg-white p-10 rounded-lg shadow"
      onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria:</label>
            <select name="category" id="category" 
            className="border border-slate-300 
            p-2 rounded-lg w-full bg-white"
            value={data.category}
            onChange={handlecange}
            >
                {categorys.map(category => (
                    <option 
                    key={category.id}
                    value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className="font-bold">Actividad:</label>
            <input 
            className="border border-slate-300 rounded-lg w-full bg-white p-2" 
            type="text"
            name="name" 
            id="name"
            placeholder="Ej. pasta, pesas, cardio, jugo"
            value={data.name}
            onChange={handlecange}
            />
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calorias" className="font-bold">Calorias:</label>
            <input 
            className="border border-slate-300 rounded-lg w-full bg-white p-2" 
            type="number"
            name="calorias" 
            id="calorias"
            placeholder="Ej. 300, 500, 200, 100"
            value={data.calorias}
            onChange={handlecange}
            />
        </div>

        <input type="submit"
        className="bg-gray-800 hover:bg-gray-200 w-full p-2 text-white
         hover:text-black font-bold uppercase cursor-pointer rounded-lg disabled:opacity-10"
         value={data.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
         disabled={!isValidActivity()}
        />
        
      </form>
    </div>
  )
}
