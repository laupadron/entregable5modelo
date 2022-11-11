import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const CarsForm = ({getCars,carSelected,deselectedMovie}) => {
// traigo la libreria(siempre la misma sintaxis)
//la libreria se instalo antes por consola
const {handleSubmit,register,reset}=useForm();
// constante para meter valores iniciales
//la usamos para deseleccionar en el useEffect
const initialValues= {
 brand: "",
  model: "",
  color: "o",
  year: 0,
  price: ""
}

//useeffect para recibir auto seleccionado y 
//imprimirlo en el formulario
useEffect(()=>{
if(carSelected){
 reset(carSelected)
}else{
 reset(initialValues)
}
},[carSelected])

// en elmismo submit meto el put(actualizacion)
const submit=(data)=>{
console.log(data)
if(carSelected){
 axios.put(`http://cars-crud.academlo.tech/cars/${carSelected.id}/`,data)
 .then(()=>{getCars()
  //agrego la F de deseleccionar creada en app
 deselectedMovie()})

 //en este then se puede poner el alert de que se
 //modifico bien
 .catch(error=>console.log(error.response?.data))
}else{
 axios.post('http://cars-crud.academlo.tech/cars/',data)


//este then es el que recibe la F para que 
//imprima en listado sin necesidad de refrescar
//viene desde app.jsx
.then(()=>getCars())
//catch de errores
.catch(error=>console.log(error.response?.data))
}
}
 return (
  //formulario con uso de libreria
  <form className='cars-form'
  onSubmit={handleSubmit(submit)}>
   <div className="input-container">
    <label htmlFor="brand">Brand</label>
    <input {...register("brand")} type="text" id='brand' />
   </div>
   <div className="input-container">
    <label htmlFor="model">Model</label>
    <input {...register("model")}type="text" id='model' />
   </div>
   <div className="input-container">
    <label htmlFor="color">Color</label>
    <input {...register("color")}type="text" id='color' />
   </div>
   <div className="input-container">
    <label htmlFor="year">Year</label>
    <input {...register("year")} type="text" id='year' />
   </div>
   <div className="input-container">
    <label htmlFor="price">Price</label>
    <input {...register("price")}type="text" id='price' />
   </div>
   <button>Submit</button>
  </form>
 );
};

export default CarsForm;