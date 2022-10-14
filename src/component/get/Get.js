import React from 'react'

function get() {
  const url =`https://fakestoreapi.com/products`;
  const GetDataFromApi =() =>{
    fetch(url)
    .then(rec => rec.json())
    .then(data => console.log(data))
    .catch(error =>console.log(error));
  }
  GetDataFromApi();
}

export default get