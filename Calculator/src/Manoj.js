import axios from "axios";
import { useState } from "react"

export default function Manoj()

{
    const [name,setname]=useState('');
    function ok(e){
        e.preventDefault();
        axios.post('http://localhost:1947',{name:name});
        setname('');
    }
    function namesChange(event)
    {
        setname(event.target.value);
    }
    return(
        <>
        <h1>welcome to Gio</h1>

        <form onSubmit={ok}>
            <input type="text" value={name} onChange={namesChange}/>
            <input type="submit"/>
        </form>
        </>
    )
}