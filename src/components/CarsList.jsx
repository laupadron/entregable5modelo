import React from 'react';

const CarsList = ({carsList,selectCar,deleteCar}) => {
 return (
  <ul>
   {carsList.map((car)=>(
    <li key={car.id}>
     <h3><b>Brand: </b>{car.brand}</h3>
     <div><b>Model: </b>{car.model}</div>
     <div><b>Color: </b>{car.color}</div>
     <div><b>Year: </b>{car.year}</div>
     <div><b>Price: </b>{car.price}</div>
     <div className="btn">
      <button onClick={()=>selectCar(car)}>Select</button>
      <button onClick={() => deleteCar(car.id)}>Delete</button>
     </div>
     
    </li>
   ))}
  </ul>
 );
};

export default CarsList;