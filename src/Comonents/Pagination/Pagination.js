import React, { useEffect, useState } from 'react'
import './Pagination.css'

function Pagination() {

    const[products,setProducts] = useState([]);
    const[page,setpage] = useState(1);

    const fetchdata = async()=>{
        let response = await fetch('https://dummyjson.com/products?limit=100')
        let data = await response.json();
        if(data && data.products){
            setProducts(data.products)
        }
    }

    useEffect(()=>{
          fetchdata();
    },[])

    const handlepage = (selectedpage)=>{
        if(selectedpage>=1 &&
            selectedpage<products.length &&
            selectedpage!==page
        ){
            setpage(selectedpage)
        }
    }
  return (
    <div>

        {products && products.length> 0 &&(

                <div className='products'>
                    {
                        products.slice(page*10-10,page*10).map((prod)=>{
                            return(

                                <span className='products__single'>
                                <span> {prod.title}</span>
                                <img src={prod.thumbnail}alt ={prod.title}/>
                            </span>

                            )

                        })
                    }
                   
                   
                   
                </div>
            )
        }

{
products.length>0 && (
    <div className='pagination'>

<span onClick={()=>handlepage(page-1)} className={page>1?"":"page__disable"}>Prev</span>
{
    [...Array(products.length/10)].map((_,i)=>{
        return(
            <span onClick={()=>handlepage(i+1)} className={page===i+1?"selected__page":""} key={i}>{i+1}</span>
        )

    })
}
<span onClick={()=>handlepage(page+1)} className={page<products.length/10?"":"page__disable"}> Next</span>
       
       
        </div>
)
}

      
    </div>
  )
}

export default Pagination
