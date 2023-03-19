import React,{useState} from 'react'
import Axios from 'axios'

import './Create.css'


export default function Create() {
    const[name1,setName]=useState(null);
    const[age1,setAge]=useState(null);
    const[city1,setCity]=useState(null);
    const[country1,setCountry]=useState(null);

    const postData=()=>{
        const data={
            name:name1,
            age:age1,
            city:city1,
            country:country1
        }
        Axios.post("http://localhost:5000/create",data).then((res)=>{
            window.location.reload()
        })
    }
    

    return (
        <div className='card'>
            <div className="container">
                <p>Name{} <input value={name1} onChange={(e)=>setName(e.target.value)}/></p>
                <p>Age <input value={age1} onChange={(e)=>setAge(e.target.value)}/></p>
                <p>City <input value={city1} onChange={(e)=>setCity(e.target.value)}/></p>
                <p>Country <input value={country1} onChange={(e)=>setCountry(e.target.value)}/></p>
                <button onClick={()=>postData()}>Submit</button>
            </div>
        </div>
    )
}
