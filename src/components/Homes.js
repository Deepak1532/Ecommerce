import React,{useState,useEffect} from 'react'
import Navbar from '../layout/Navbar'
import { getProducts } from './uiApi'
import Card from './Card'

const Homes=()=> {
    const [visible,setVisible]=useState(3)

    const showMoreItems=()=>{
        setVisible((prevValue)=>prevValue+3)
    }          
    
    const loadMore=()=>{
        return (
            visible<productsByArrival.length && 
            <div style={{textAlign:'center',paddingBottom:'50px'}}>
      <button style={{width:'200px',backgroundColor:'orange',border:'none',borderRadius:'10px',height:'40px',color:'white',outline:'none'}} onClick={showMoreItems}>Load More</button>

            </div>
        )
    }
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
                {productsByArrival.slice(0,visible).map((product,i)=>(
                    
                <Card key={i} product={product}/>
            ))}
                
                    </div>
                    
                    </div>

                    </div>
            </div>
            {loadMore()}
        </>
    )
}

export default Homes