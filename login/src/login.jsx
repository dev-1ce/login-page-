import React from "react";
import "./App.css"
import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"




export default function Login(){
    let auth = false
    const [user,setUser] = useState({
        email:"",
        password:""
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
    
    function login(){
        const {email,password,} = user
        if( email && password){
            
            axios.post("http://localhost:8000/",user)
            .then(res=>{
                alert(res.data.msg)
            })
        }else{
            alert("invalid ")
        }
    }
    return <div>
        <input type="text" name="email" value={user.email}  onChange={handle}placeholder="email"/>
        <input type="password" name="password" value={user.password} onChange={handle} placeholder="password"/>
        <button onClick={login}>Login</button>
        or
        <button><Link to="/register">Register</Link></button>
    </div>
}