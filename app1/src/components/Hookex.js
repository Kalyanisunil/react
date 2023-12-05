
import  React, { useState } from "react";
function Hookex()
{

    const [thing, setThing] = useState("lipstick");

  return (
      <div> 
           <>
      <h1>My fav thing is {thing}</h1>
      <button onClick={() => setThing("laptop")}>
        Click Me
      </button>
      <button onClick={() =>setThing("chocolate")}>
        Click Me
      </button>
      <button onClick={() => setThing("bags")}>
        Click Me
      </button>
    </>
   </div>
  );
  }

export default Hookex;