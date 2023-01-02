import {createContext, useState, useContext} from 'react'

interface Prop{
    children:React.ReactNode
}
interface Context{
    // memory : number | string,
    total : number | string,
    addNumber:(value:number)=>{},
    resetTotal:()=>{},
    operationNumber: (simbol:string)=>{},
    removeNumber:()=>{}
}
const Contexto= createContext({
    // memory : "0",
    total : "0",
    addNumber:(value:number)=>{},
    resetTotal:(simbol:string)=>{},
    operationNumber: (simbol:string)=>{},
    removeNumber:()=>{}
}) 

export default function CalculaterState({children}:Prop) {
    const [confirmOperation, setConfirmOperation] = useState<boolean>(false)
    const [removeNumber,setRemoverNumber] = useState<number>(0)
    const [adictionXsustraction , setAdictionXsustraction] = useState<Number>(1)
    const [total, setTotal] = useState<string>("---") 
    const handleAddNumber = (value:number)=>{

        if(total === "---" || total === "SYNTAX ERROR" || confirmOperation=== true){
            setTotal(String(value))
            setConfirmOperation(false)

        }else{
            setTotal(total+value)
        }
    }
    const handleResetTotal = (simbol:string)=>{
        if(simbol === "C"){
            setTotal("---")
        }
    }
    const handleRemoveNumber = ()=>{
        let remove = 1
        if(total !== "---"){
            if(total[total.length-1] === " "){
                remove = 2
            }else{
                remove = 1
            }            
            setTotal(total.substring(0,total.length-(removeNumber + remove)))
            
        }
        if(total.length === 1){
            setTotal("---")
        }
    }

    const comparationSimbol = (simbol:string, resolve:string)=>{
    
    }


    const operation = (simbol:string)=>{
        if(simbol !=="=" &&  total !== "---" ){
            setTotal(total +" "+simbol+" ")
        }
        const checkedSizeArray = total.split(" ")
        if(checkedSizeArray.length ===3){
                if(simbol === "="){
                    setConfirmOperation(true)
                    if(checkedSizeArray[1] === "-" ){ 
                        setTotal(String(Number(checkedSizeArray[0]) - Number(checkedSizeArray[2])))
                    }else
                    if(checkedSizeArray[1] === "*" ){ 
                        setTotal(String(Number(checkedSizeArray[0]) * Number(checkedSizeArray[2])))
                    }else
                    if(checkedSizeArray[1] === "/" ){ 
                        if(isNaN(Number(checkedSizeArray[0]) / Number(checkedSizeArray[2]))){
                             setTotal("SYNTAX ERROR")
                        }else{
                            setTotal(String(Number(checkedSizeArray[0]) / Number(checkedSizeArray[2])))
        
                        }
                    }else
                    if(checkedSizeArray[1] === "+"){ 
                        setTotal(String(Number(checkedSizeArray[0]) + Number(checkedSizeArray[2])))
                    }else 
                    if(checkedSizeArray[1] === "%"){
                        setTotal(String((Number(checkedSizeArray[0])*100) / Number(checkedSizeArray[2])))
                    }
                   
                }
            if( simbol !== checkedSizeArray[1] ){
                if(simbol !== "="){
                    
                    checkedSizeArray[1] = simbol
                    setTotal(checkedSizeArray.join(" "))
                }
            }else
            if(checkedSizeArray[1] === "-" ){ 
                setTotal(String(Number(checkedSizeArray[0]) - Number(checkedSizeArray[2])))
                setConfirmOperation(true)

            }else
            if(checkedSizeArray[1] === "*" ){ 
                setTotal(String(Number(checkedSizeArray[0]) * Number(checkedSizeArray[2])))
                setConfirmOperation(true)

            }else
            if(checkedSizeArray[1] === "/" ){ 
                if(isNaN(Number(checkedSizeArray[0]) / Number(checkedSizeArray[2]))){
                     setTotal("SYNTAX ERROR")
                     setConfirmOperation(true)
                }else{
                    setTotal(String(Number(checkedSizeArray[0]) / Number(checkedSizeArray[2])))
                    setConfirmOperation(true)
                }

            }else
            if(checkedSizeArray[1] === "+"){ 

                setTotal(String(Number(checkedSizeArray[0]) + Number(checkedSizeArray[2])))
                setConfirmOperation(true)
            } else 
            if(checkedSizeArray[1] === "%"){
                setTotal(String((Number(checkedSizeArray[0])*100) / Number(checkedSizeArray[2])))
                setConfirmOperation(true)
            }
            
        }
            
        
        }


    const handleOperationNumber = (simbol:string)=>{
        setConfirmOperation(false)

        switch(simbol){
            case "+": 
                operation(simbol)
                break;
            case "-":
                operation(simbol)
                break;
            case "*":
                operation(simbol)
                break;
            case "/":
                operation(simbol)
                break;
            case "%":
                operation(simbol)
                break;
            case "+/-":
                operation(simbol)
                break;
            case "=":
                operation(simbol)
                break;
        }
    }
    return (
    <Contexto.Provider value={{
        // memory,
        total,
        addNumber: handleAddNumber,
        resetTotal:handleResetTotal,
        operationNumber:handleOperationNumber,
        removeNumber:handleRemoveNumber,
    }}>
        {children}
    </Contexto.Provider>
  )
}

export const useCalculaterState = ()=>{
    return useContext(Contexto)
}