import React from 'react'

function Fetch() {
  const url =`https://fakestoreapi.com/products`;
  const body ={
    category: "men's clothing",
description: "Your perfect pack for everyday",
image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
price: "109.95",
  }
  const GetDataFromApi =() =>{
    fetch(url,{
      method:'post',
      body:JSON.stringify(body)
    })
    .then(rec => rec.json())
    .then(data => console.log(data))
    .catch(error =>console.log(error));
  }

  GetDataFromApi();
  return (
    <div></div>
  )
}

export default Fetch
