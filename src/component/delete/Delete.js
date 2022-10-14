import React from 'react'

function Delete() {

  const url =`https://fakestoreapi.com/products/6`;
  const GetDataFromApi =() =>{
    fetch(url,{method:'delete',})
    .then(rec => rec.json())
    .then(data => console.log(data))
    .catch(error =>console.log(error));
  }

  GetDataFromApi();
  return (
    <div></div>
  )
}

export default Delete
