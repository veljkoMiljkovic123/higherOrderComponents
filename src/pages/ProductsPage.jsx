import React from 'react'
import useFetch from '../hooks/useFetch'
function ProductsPage() {
    const {data,isLoading} = useFetch()
    console.log(data);
    
  return (
    <div>
        {isLoading?<>
            {data.map((el,i)=>{
            return <div key={i}>Card</div>
        })}
        </>:<h2>Loading</h2>}
    </div>
  )
}

export default ProductsPage