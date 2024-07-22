import { useState, ChangeEvent } from "react"
import { Activity } from "../types/type"
import { categorys } from "../data/category"

export default function Formulario() {
  const [data, setData] = useState<Activity>({
    category: 1,
    name: '',
    calorias: 0
  })
  const handlecange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    const isNumberField = ['category', 'calorias'].includes(e.target.id)
    setData({
      ...data,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value
    })
  }

  return (
    <div>
      <form
      className=" space-y-5 bg-white p-10 rounded-lg shadow"
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
         hover:text-black font-bold uppercase cursor-pointer rounded-lg"
         value={'Guardar'}
        />
      </form>
    </div>
  )
}
