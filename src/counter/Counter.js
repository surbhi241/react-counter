import React, { useState } from "react";
import { AddIcon, DeleteIcon } from "../Icons";
const Counter = ({maxCount = 1000, initial = 1}) => {
    const [initialCount, setInitialCount] = useState(initial);
    const [isError, setError] = useState(false);
    const handleClick = (type) => {  
      if(type === "add" && initialCount < maxCount){
          const newCount = initialCount + 1;
          setInitialCount(newCount);
      } else if(type === "subtract" && initialCount > 1 ) {
        const newCount = initialCount - 1;
        setInitialCount(newCount);
      }
    }
    const handleChange = (event) => {
      const value = Number(event.target.value);
      const name = event.target.name;
      if(name === "initialCount" && Number(value) && !(event.target.value > maxCount)){
        setInitialCount(value);
        setError(false);
      } if (event.target.value > maxCount){
        setError(true);
      }
    }

    return(
        <>
        <div className="div-counter-wrapper">
            <div className="counter-container">
                <button className="btn-count-right" onClick={() => handleClick("subtract")} disabled={initialCount <= 1}>
                    <DeleteIcon />
                </button>
                <input className="input-count" type="text" value={initialCount} onChange={handleChange} name="initialCount" placeholder="add initial counter value"/>
                <button className="btn-count-left" onClick={() => handleClick("add")} disabled={initialCount >= maxCount}>
                    <AddIcon />
                </button>
           </div>
           {initialCount >= maxCount || isError ? 
           <p className="error-msg">
              Note: Initial count can not be greater than maximum count, you can increase maximum count.
           </p> : null}
        </div>
        </> 
    )
}

export default Counter;
