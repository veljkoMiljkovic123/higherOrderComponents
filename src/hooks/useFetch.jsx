import React, { useEffect, useState } from 'react'
import ProductService from '../services/productsService'

function useFetch() {

    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        ProductService.getAllProduct()
        .then(res=>{
            setData(res.data.products)
            console.log(data);
            
            setIsLoading(true)
        })
        .catch(err=>console.log(err)
        )
    },[])
  return {data,isLoading}

  
}

export default useFetch