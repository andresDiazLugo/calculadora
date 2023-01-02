import React from 'react'
import Button from './Button'
import CalculaterState from './CalculaterState'
import ViewCalculter from './ViewCalculter'
export default function Calculator() {
  return (
    <div className=' shadow-md bg-slate-500 h-fit flex flex-col justify-center items-center gap-5 rounded-xl'>
        <CalculaterState>   
            <ViewCalculter/>
            <div className='grid inline-grid gap-4 grid-cols-4 grid-rows-4 mb-9 ml-3 mr-3 '>
                <Button type='operator' value='%'/>
                <Button type='action' value='C'/>
                <Button type='remove' value='x'/>
                <Button type='operator' value='/'/>

                <Button type='number' value='7'/>
                <Button type='number' value='8'/>
                <Button type='number' value='9'/>
                <Button type='operator' value='*'/>
                
                <Button type='number' value='4'/>
                <Button type='number' value='5'/>
                <Button type='number' value='6'/>
                <Button type='operator' value='+'/>

                <Button type='number' value='1'/>
                <Button type='number' value='2'/>
                <Button type='number' value='3'/>
                <Button type='operator' value='-'/>
            
                <Button type='number' value='0'/>
                <Button type='operator' value='='/>
                {/* <Button type='operator' value='+/-'/> */}
                {/* <Button type='operator' value='.'/> */}

            </div>
         
        </CalculaterState>
    </div>
  )
}
