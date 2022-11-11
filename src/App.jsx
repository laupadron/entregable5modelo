
import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import CarsForm from './components/CarsForm';
import CarsList from './components/CarsList';

function App() {
 const [carsList,setCarsList]= useState([]);
 // estado para enviar selectCar a formulario
 const[carSelected,setCarSelected]=useState(null)

 useEffect(()=>{
axios.get("http://cars-crud.academlo.tech/cars/")
.then((res)=>setCarsList(res.data))
 },[])
//F para que imprima en listado sin necesidad de refrescar
 const getCars =()=>{
  axios.get("http://cars-crud.academlo.tech/cars/")
.then((res)=>setCarsList(res.data))
 }
 // F para seleccionar car
 const selectCar=(car)=>{
  setCarSelected(car)
 }
 //F para delete
 //con props se pasa a car list
 const deleteCar = (id) => {
  axios
    .delete(`http://cars-crud.academlo.tech/cars/${id}/`)
    .then(() => getCars());
};


// F para volver al Null luego de actualizar

const deselectedMovie=()=>{
setCarSelected(null)
}
  

  return (
    <div className="App">
     <CarsForm  getCars={getCars} carSelected={carSelected} deselectedMovie={deselectedMovie}/>
     <CarsList carsList={carsList} selectCar={selectCar} deleteCar={deleteCar} /> 
    </div>
  )
}

export default App
