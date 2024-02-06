import React, { useState, useEffect } from 'react';
import Nav from "./Components/Nav"
import NewsBoard from "./Components/NewsBoard"

const  App = ()=>{
  const[category,setCategory] = useState("general");
  return(
    <div>
      <Nav setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App