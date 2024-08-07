
type CaloriesProps ={
    calories: number,
    textA: string
    textB: string
}

export default function CaloriesDisplay({calories, textA, textB} : CaloriesProps) {
  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
    {textB}
    <span className="fotn-black text-6xl text-orange-500">{calories}</span>
    {textA}
    </p>
  )
}
