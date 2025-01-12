import React, { useState } from 'react'

function Toggle() {
    const[toggel,useToggle]= useState(false)
    console.log(`Timmer toggle mounted,,,,,`)
    return (
        <div>
            <h1>Timmers</h1>
            <button onClick={()=>{
                useToggle(!toggel)
            }}>Click Me</button>
           {console.log({toggel})}
        </div>
    )
}

export default Toggle
