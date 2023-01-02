import React from 'react'
import {useCalculaterState} from './CalculaterState'
export default function ViewCalculter() {
    const stateInfoCalculate = useCalculaterState()
    return (
    <div className=" bg-lime-900 flex justify-center mt-8 p-4 w-72 border-zinc-900 border-2">
        <div>
            <span className='font-bold text-lg'>{stateInfoCalculate.total}</span>
        </div>
    </div>
  )
}
