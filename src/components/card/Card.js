import react, { useState } from "react";

const Card = (props) => {
  const {name, img, options} = props
  const [change, setChange] = useState(true);
  
  return ( 
    <div className="card" onClick={()=>setChange(!change)}>
    {change ? ( <>
      <img src={img} alt={name} />
       <p className="p">{name}</p> 
    </>
    ): <ul className="options">
          <li>{options[0]}</li>
          <li>{options[1]}</li>
          <li>{options[2]}</li>
       </ul>
    }
       
    </div>
  )
}

export default Card;


const CardInfo = (props) =>{
  
}
CardInfo();

