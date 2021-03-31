import React,{useState,useEffect} from 'react';
import {isAuthenticated} from '../auth';
import {Link} from 'react-router-dom';
import { createProduct,getCategories} from './apiAdmin';
import Navbar from '../layout/Navbar';

const AddProduct=()=> {
    const{user,token}=isAuthenticated();
    const [values,setValues]=useState({
        name:'',
        description:'',
        price:'',
        categories:[],
        category:'',
        quantity:'',
        product_image:'',
        loading:false,
        error:'',
        createdProduct:'',
        redirectToProfile:false,
        formData:''
    })
    const {
        name,
        description,
        price,
        categories,
        category,
        quantity,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData

    } =values;

     //load categories and set form data
     const init=()=>{
        getCategories().then(data=>{
            if(data.error){
                setValues({...values,error:data.error})
            } else{
                setValues({...values,categories:data,formData:new FormData});
            }
        })
    }

    //to send form data
     useEffect(()=>{
       init();
     },[])

    const handleChange=name=>event=>{
        const value= name==='product_image' ? event.target.files[0] : event.target.value
        formData.set(name,value)
        setValues({...values,[name]:value})
    }

    const clickSubmit=(event)=>{
        event.preventDefault()
        setValues({...values,error:'',loading:true});
        createProduct(user._id,token,formData)
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error})
            }else{
                setValues({
                   ...values,name:'',description:'',product_image:'',price:'',quantity:'',
                   loading:false,createdProduct:data.name 
                });
            }

        });
    };


    
    const newPostForm=()=>(
       
		<div className="modal-dialog mt-5">
			
        <div className="modal-content">
            
            <div className="modal-body modal-body-sub_agile">
                <div className="main-mailposi">
                    <span className="fa fa-envelope-o" aria-hidden="true"></span>
                </div>
                


                <div className="modal_body_left modal_body_left1">
        <h3 className="agileinfo_sign">Add Product</h3>
        {showError()}
        {showSuccess()}
        <form encType="multipart/form-data">
            <div className="styled-input agile-styled-input-top">
    <input type="text" placeholder="Product Name" name="Name" required="required" onChange={handleChange('name')} value={name} />
            </div>
            <div className="styled-input agile-styled-input-top">
    <input type="text"  placeholder="Product Price" name="price" required="required" onChange={handleChange('price')} value={price} />
            </div>
            <div className="styled-input">
                <input type="text"  placeholder="Product Quantity" name="quantity" required="required" onChange={handleChange('quantity')} value={quantity} />
            </div>
            <div className="styled-input">
                <textarea name="description" className="form-control" placeholder="Product Description" onChange={handleChange('description')}  value={description}></textarea>
            </div>
            <div className="styled-input">
                <input type="file" placeholder="choose Image" name="product_image"  onChange={handleChange('product_image')} type="file" name="product_image" accept="image/*" required="required" />
            </div>
            <div className="styled-input">
            <select onChange={handleChange('category')} className="form-control" >
                   <option>Please select</option>
                   {categories && categories.map((c,i)=>(
                    <option key={i} value={c._id}>{c.category_name}</option>

                   ))}
                    </select>
                   </div>


            <button onClick={clickSubmit} classNameName="btn btn-primary">
                Add product
        </button>
        </form>
      
       
    </div>
    </div>
                
                
            </div>
        </div>
    
    




 
     );
     const adminLinks=()=>{
         return(
     <div className="card">
         <h4 className="card-header">Admin Links</h4>
        <ul className="list-group">
       <li className="list-group-item">
           <Link className="nav-link" to="/create/category">Create Category</Link>
       </li>
       <li className="list-group-item">
           <Link className="nav-link" to="/create/product">Create Products</Link>
       </li>
        </ul>
     </div>
 
 );
         } 
 
 const showError=()=>(
 <div className="alert alert-danger" style={{display: error ? '':'none'}}>
  {error}
 </div>
 
 );
 const showSuccess=()=>(
     <div className="alert alert-info" style={{display:createdProduct ? '':'none'}}>
      <h2>{`${createdProduct}`} is created!</h2>
     </div>
     
     );
 
     const showLoading=()=>(
         loading && (
         <div className="alert alert-success" >
          <h2>Loading....</h2>
         </div>
         )
         
         );
 
 
 

    return (
        <>
        <Navbar/>
           
       <div  className="container">
        <div className="row">
        <div className="col-md-4">
            {adminLinks()}
        
        </div>
        
        <div className="col-md-6">
            
     
            {newPostForm()}
        
         
         </div>
         </div>
         </div>  
        </>
    )
}

export default AddProduct