import {useCalculaterState} from "./CalculaterState"
import React from 'react'
interface Prop {
    type:string,
    value:string
}
export default function Button({type,value}:Prop) {
    const contextStateCalculate = useCalculaterState();
    
    const handleClick = ()=>{
        switch(type){
            case "number":
                contextStateCalculate.addNumber(Number(value))
            case "action":
                contextStateCalculate.resetTotal(value)
                break;
            case "operator":
                contextStateCalculate.operationNumber(value)
                break;
            case "remove":
                contextStateCalculate.removeNumber()
                break;
            default:
        }
    }
  
    return (
    <button className=" shadow-2xl bg-stone-900 text-white w-20 p-2 w-16 rounded-2xl font-bold" onClick={handleClick}>{value}</button>
  )
}
