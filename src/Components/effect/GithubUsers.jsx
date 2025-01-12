import React, { useEffect, useState } from 'react'
import './GithubUsers.css'


function GithubUsers() {
    const [users, setUser] = useState([])
    //============
    useEffect(() => {
        setTimeout(() => {
            fetchUser()
        }, 2000);
     }, [])



    async function fetchUser() {
        try {
            const response = await fetch('https://api.github.com/users')
            const result = await response.json()
           /*  console.log(result) */
            setUser(result)
            //Now data is stored in result
        } catch (error) {
        }
    }
   

    return (
        <div className='users'>
            <h1>GitHubUsers</h1>
            <ul>{
                users.map((user) => {
                    const { id, avatar_url, login,
                        html_url } = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login} />
                            <p>{login}</p>
                            <a href={
                                html_url} target='blank' className='profile-btn'>Profile</a>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default GithubUsers
