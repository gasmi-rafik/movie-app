import React, { useState } from "react";
import Rate from "./Rate"

const Recherche = ({setInputValue , setRatingsearch , ratingSearch}) =>{



return (
    <div>
 <input type="text" placeholder="search" onChange={(event)=>setInputValue(event.target.value) } />
 <Rate starIndex ={setRatingsearch} rating={ratingSearch} />
    </div>
);

}




export default Recherche ;