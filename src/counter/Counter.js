import React, { useState } from "react";

const Counter = () => {
    const [initialCount, setInitialCount] = useState(0);
    const [maxCount, setMaxCount] = useState(1000);
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
      if(name === "initialCount" && Number(value))setInitialCount(value);
      if(name === "maxCount") setMaxCount(value);
    }
    return(
        <>
        <div className="div-counter-wrapper">
            <div className="max-count-container">
                <span className="primary-color">Max Count </span>
                <input className="input-count" type="text" value={maxCount} 
                onChange={handleChange} placeholder="add max value" name="maxCount"/>
            </div>
            <div className="counter-container">
                <button className="btn-count-right" onClick={() => handleClick("subtract")} disabled={initialCount <= 1}>
                    decrease
                </button>
                <input className="input-count" type="text" value={initialCount} onChange={handleChange} name="initialCount" placeholder="add initial counter value"/>
                <button className="btn-count-left" onClick={() => handleClick("add")} disabled={initialCount >= maxCount}>
                    increase
                </button>
           </div>
           {initialCount > maxCount ? 
           <p className="error-msg">
              Note: Initial count can not be greater than max count please reset value
           </p> : null}
        </div>
        </> 
    )
}

export default Counter;
