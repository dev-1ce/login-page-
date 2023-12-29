import React from "react";
import {useState} from "react"
import { Link } from "react-router-dom";
import axios from "axios"


export default function Register(){

    const [user,setUser] = useState({
        email:"",
        password:"",
        number:""
    })
    function handle(event){
        const {name,value} = event.target;
        setUser((prev)=>{
            return {...prev,
                [name]:value
            }
        })
        console.log(user)
    }
    function register(){
        const {email,password,number} = user
        if(number && email && password){
            
            axios.post("http://localhost:8000/register",user)
            .then(res=>{
                console.log(res)
            })
        }else{
            alert("invalid ")
        }
        
    }

    return <div>
        <input type="text" name="email"  value={user.email}  onChange ={handle} placeholder="email"/>
        <input type="password"name="password"value={user.password} onChange ={handle} placeholder="password"/>
        <input type="text"name="number" value={user.number} onChange={handle} placeholder="number" />
        <button onClick={register}> Register</button>
        or
        <button><Link to="/">Login</Link></button>
    </div>
}