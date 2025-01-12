import React, { useCallback, useEffect, useState } from 'react'

function CallBack() {
    const [count,setCount]=useState(0)
    const [text,setText]= useState('')

    const IncCount = useCallback(()=>{
        setCount((prevalue)=> prevalue + 1)
    },[]);
    useEffect(()=>{
        console.log('Handle Click Function Changed,,,,')
    },[IncCount])

    return (
        <div>
            <h1>Use callBack Hook</h1>
            <p>Count :{count}</p>
            <button onClick={IncCount}>Increment</button><br />
            <input type="text" value={text} onChange={(t)=>{
                setText(t.target.value)
            }} placeholder='Type here' />
            <p>Text :{text}</p>
        </div>
    )
}

export default CallBack
