import React, { useState } from 'react'

function One() {
    const [users,setusers] = useState([])
async function fetchUser() {
    try{
        const response = await fetch('https://api.github.com/users')
        console.log(response)
        const result = await response.json()
        console.log(result)
    }catch(error){

    }

    
}
fetchUser();

    return (
        <div>GitHubUsers</div>
    )
}

export default One
