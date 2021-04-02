import {API} from '../config';
//to fetch product by arrival date
 export const getProducts=(sortBy)=>{
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`,{
        method:'GET'
    })
    .then(response=>{
     return response.json() ;
  })
  .catch(error=>
      console.log(error));
    
}

//to fetch categories
export const getCategories=()=>{
    return fetch(`${API}/getcategory`,{
        method:'GET'
    })
    .then(response=>{
     return response.json() ;
  })
  .catch(err=>{
      console.log(err);
  });
    
}

//to filter products by category and price range
export const getFilteredProducts=(skip,limit,filters={})=>{
    let data={limit,skip,filters}

    return fetch(`${API}/products/by/search`,{
     method:"POST",
     headers:{
         Accept:'application/json',
         "Content-Type":"application/json",
     },
     body:JSON.stringify(data)
    })
    .then(response=>{
       return response.json() ;
    })
    .catch(error=>{
        console.log(error);
    });
   };