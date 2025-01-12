import React,{useEffect,useRef,useState} from 'react'
import './Login.css'

function Loginform() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const refContainer = useRef(null)

    useEffect(()=>{
        console.log(email);
        console.log(password);
    })


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log({email:email,password:password});
        setEmail('');
        setPassword('')
    }

    return (
        <div className='container'>
            <h1>Login Form</h1>
             <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" ref={refContainer}/>
                <label htmlFor="password">Password</label>
                <input type="text" value={password} onChange={(e)=>
                    {
                        setPassword(e.target.value);
                    }
                } />
                <button className='btn-submit' type='submit'>Login</button>
                </form>           
        </div>
    )
}

export default Loginform
