import {API} from '../config'

export const createCategory=(userId,token,category)=>{
    return fetch(`${API}/postcategory/${userId}`,{

        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
body:JSON.stringify(category)
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    });
};

export const createProduct=(userId,token,product)=>{
    return fetch(`${API}/postProduct/${userId}`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            Authorization:`Bearer ${token}`
        },
        body:product
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    });
};

export const getCategories=()=>{
    return fetch(`${API}/getcategory`,{
        method:'GET'
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err)
    });
}