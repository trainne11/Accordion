import { useState } from "react";

function Accordion({ users }) {
  let [expectedIndex, setExpectedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expectedIndex === nextIndex){
        setExpectedIndex(-1)
    }else{
        setExpectedIndex(nextIndex);
    }
  }

  let renderedItems = users.map((item, index) => {
    
    return (
      <div onClick = {() => handleClick(index)} key={index}>
        <label> {item.label} </label>
        {expectedIndex === index && <div> {item.content} </div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
