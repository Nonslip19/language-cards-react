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






// const Card = () => {
//   const [change, setChange] = useState(true);

//   const clickHandler = () => {
//     setChange((change) => !change);
//     console.log(change);
//   };
//   return (
//     <div className="card-container">
//       {categories.map((card, index) => {
//         return (
//           <div onClick={clickHandler} className="card" key={index}>
//             {change ? (
//               <div>
//                 <img src={card.img} alt={card.name} />
//                 <p className="p">{card.name}</p>
//               </div>
//             ) : (
//               <div>
//                   {CardInfo()}
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };


// const CardInfo = () => {
//     return (
//       <ul>
//         {categories.map((info, index) => (
//           <li key={index}>{info.options[{index}]}</li>
//         ))}
//       </ul>
//     );
//   }



// export default Card;
