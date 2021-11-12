import axios from 'axios';
import React from 'react'
import { useState } from 'react';

export default function Searchbar() {
    const [query, setQuery] = useState("");
    console.log('query:', query)
   
    function handleChange(e){
        let newQuery = e.target.value;
        newQuery= newQuery.trim().split(" ").join();
       
        setQuery(newQuery)

    }
        
    function getdata() {
        axios.get(`https://dev.to/api/articles/?tags=${query}`)
         .then((res) => {
         console.log(res)
        })
       }

   

    return (
        <div>
            <input onChange={ handleChange} type="text" name="" id="" />
            <button onClick={getdata}>search</button>
        </div>
    )
}

