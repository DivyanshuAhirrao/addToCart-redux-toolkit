import data from "../data.json";
// import { Card } from "@mui/material";

// const Cards = () => {
 

//   return (
//     <div className="w-[100%] flex justify-evenly gap-3">
//       {data.map((e) => {
//         return (
//          <Card prop={e}/>
//         );
//       })}
//     </div>
//   );
// };

// export default Cards;


import React from 'react';
import Card from './Card';


const ParentComponent: React.FC = () => {
  return (
    <div className="w-[100%] flex justify-evenly gap-3 flex-wrap">
      {data.map((e) => (
        <Card key={e.id} prop={e} />
      ))}
    </div>
  );
};

export default ParentComponent;
