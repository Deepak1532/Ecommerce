import React, { useState, useEffect } from 'react'
import Navbar from '../layout/Navbar'
import { getProducts,getFilteredProducts } from './uiApi';
import Card from './Card';
import Checkbox from './Checkbox';
import { getCategories } from './uiApi';
import RadioBox from './RadioBox';
import {prices} from './fixedPrice';

const Products = () => {


    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });

    const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)
    const [limit,setLimit]=useState(6)
    const [skip,setSkip]=useState(0)
    const [filteredResults,setFilteredResults]=useState([]);


    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setCategories(data)
            }
        })
    }
    useEffect(() => {
        init()
        loadFilteredResults(skip,limit,myFilters.filters)

    }, []);
    const handleFilters = (filters, filterBy) => {
        //console.log("PRODUCTS",filters,filterBy);
        const newFilters = { ...myFilters }
        newFilters.filters[filterBy] = filters

        if(filterBy==="product_price"){
            let priceValues=handlePrice(filters);
            newFilters.filters[filterBy]=priceValues
        }
        loadFilteredResults(myFilters.filters)

        setMyFilters(newFilters)


    }
    const handlePrice=value=>{
        const data=prices
        let array=[];
        for(let key in data){
            if(data[key]._id===parseInt(value)){
                array=data[key].array;
            }
        }
        return array;
    }

    const loadFilteredResults=(newFilters)=>{
        getFilteredProducts(skip,limit,newFilters)
        .then(data=>{
            if(data.error){
                setError(data.error);
            }else{
                setFilteredResults(data.data);
                
            }
        })
}

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                <div class="side-bar col-md-3">
                    <div class="left-side">
                        <h3 class="agileits-sear-head">Filter By Categories</h3>
                        <ul>
                            <Checkbox categories={categories}
                                handleFilters={filters => handleFilters(filters, 'category')}
                            />
                        </ul>
                        <h3 class="agileits-sear-head" >Filter by Price Range</h3>
             <ul>
                 <RadioBox prices={prices}
                 handleFilters={filters=>handleFilters(filters,'product_price')}
                 />
             </ul>
                    </div>
                    </div>

                    <div class="agileinfo-ads-display col-md-9">
                   
                <div class="wrapper">
                {filteredResults.map((product,i)=>(
                    
                <Card key={i} product={product}/>
            ))}

                    </div>
                    </div>
                    </div>
              
            </div>

        </>
    )
}

export default Products