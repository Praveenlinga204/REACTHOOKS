import React,{useState,useEffect} from 'react'

function UseEff() {
    const [ count1,setcount1]= useState(0)
    const [ count2,setcount2]= useState(0)
    //==================
     useEffect(()=>{
        console.log(`Component mounted useEffect 1`)
     },[count1])
     useEffect(()=>{
        console.log(`Component mounted useEffect 2`)
     },[count2])
    //================== 
    const IncrHandone = ()=>{
        setcount1 ((preState)=>{
            return preState + 1
        })
    }
    const DecrHandone = ()=>{
        setcount2 ((preState)=>{
            return preState + 1
        })
    }


   

    return (
       <div>
        <h1>Count:{count1}</h1>
        <button onClick={IncrHandone}>Count</button>
      <h1>Count:{count2}</h1>
        <button onClick={DecrHandone}>Count</button>

       </div>
    )
}
export default UseEff