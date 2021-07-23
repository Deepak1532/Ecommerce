import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {API} from '../config'
function Search({history}) {

    const [keyword,setKeyword]=useState('')
 const searchHandler=(e)=>{
     e.preventDefault()
     if(keyword.trim){
      history.push(`/showproduct/${keyword}`)
     }else{
         history.push('/')
     }
 }
    return (
        <div>
            {/* <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
               <form className="d-flex" onSubmit={searchHandler}>
                  <input className="form-control "   onChange={(e)=>setKeyword(e.target.value)} type="search" placeholder="Search" aria-label="Search" required/>
                  <button className="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
                  
                </form> 
             </div>   
             </div> */}

             <div className="agileits_search">
              <form action="#" method="post" onSubmit={searchHandler}>
                <input name="Search" onChange={(e)=>setKeyword(e.target.value)} type="search" placeholder="How can we help you today?" required />
                <button type="submit" className="btn btn-default" aria-label="Left Align">
                  <span className="fa fa-search" aria-hidden="true"> </span>
                </button>
              </form>
            </div>


        </div>
    )
}

export default Search
