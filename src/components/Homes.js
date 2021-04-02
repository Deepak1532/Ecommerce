import React,{useState,useEffect} from 'react'
import Navbar from '../layout/Navbar'
import { getProducts } from './uiApi'
import Card from './Card'

const Homes=()=> {
    const[productsByArrival,setProductsByArrival]=useState([])
    const [error,setError] = useState(false)

    const loadProductsByArrival=()=>{
        getProducts('createdAt').then(data=>{
            if(data.error){
                setError(data.error)
            }else{
                setProductsByArrival(data)
            }
        })
    }
    useEffect(()=>{
       loadProductsByArrival()
       
      },[])


    return (
        <>
        <Navbar/>
        <div class="ads-grid">
		<div class="container">
			
			<h3 class="tittle-w3l">New Arrival
				<span class="heading-style">
					<i></i>
					<i></i>
					<i></i>
				</span>
			</h3>
            
        <div class="agileinfo-ads-display">
                <div class="wrapper">
                {productsByArrival.map((product,i)=>(
                    
                <Card key={i} product={product}/>
            ))}

                    </div>
                    </div>

                    </div>
            </div>
            
        </>
    )
}

export default Homes