import React, { useState } from 'react'

function Counter() {
    const [ count,setcount] = useState(0)
    
    return (<>
        <div>
          <h4>Counts: <span>{count}</span> </h4>
          <button onClick={()=>{
            setcount( count + 1)
          }}>Increment</button>
          <button onClick={()=>{
            setcount(count - 1)
          }}>Decrement</button>
          <button onClick={()=>{
             setcount(0)
          }}>Reset</button>
        
         </div>
       
        
         
         
        </>
    )
}

export default Counter
