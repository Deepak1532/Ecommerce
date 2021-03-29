import {API} from '../config';

export const signup =(user) =>{
    return fetch(`http://localhost:7000/api/postuser`,{
        method: 'POST',
        headers: {
            Accept:'application/json',
            "content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    });    
    
};

export const signin =(user) =>{
    return fetch(`http://localhost:7000/api/signin`,{
        method: 'POST',
        headers: {
            Accept:'application/json',
            "content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    });  
    
};

export const forgetpassword =(user) =>{
    return fetch(`http://localhost:7000/api/forgotpassword`,{
        method: 'POST',
        headers: {
            Accept:'application/json',
            "content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    });  
    
};

export const signout=(next)=>{
    if(typeof window !=='undefined'){
        localStorage.removeItem('jwt',JSON.stringify('jwt'));
        next();
        return fetch(`${API}/signout`,{
            method:'GET',
        })
        .then(response=>{
            console.log('signout',response)
        })
        .catch(err=>console.log(err))
    }
}

export const authenticate=(data,next)=>{
    if(typeof window !=='undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
        next();
    }
}

export const isAuthenticated=()=>{
    if(typeof window =='undefined'){
        return false;
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }else{
        return false;
    }
}