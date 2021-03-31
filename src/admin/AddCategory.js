import { Link } from '@material-ui/core'
import React, { useState } from 'react'
import { isAuthenticated } from '../auth'
import Navbar from '../layout/Navbar'
import { createCategory } from './apiAdmin'

const AddCategory=()=> {

    const[category_name,setName]=useState('')
    const[error,setError]=useState(false)
    const[success,setSuccess]=useState(false)

    const{user,token}=isAuthenticated()
    const handleChange=(e)=>{
        setError('')
        setName(e.target.value)
    }

    const clickSubmit=(e)=>{
        e.preventDefault()
        setError('')
        setSuccess(false)
        createCategory(user._id,token,{category_name})
        .then(data=>{
            if(data.error){
                setError(true);
            }
            else{
                setError("");
                setSuccess(true);
            }
        })
    }

    const newCategoryForm=()=>(
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body modal-body-sub_agile">



                    <div className="modal-modal_body_left modal-modal_body_left1">
                        <h3 className="agileinfo_sign">Add Category</h3>

                        {showError()}
                        {showSuccess()}

                        <form>
                            <div className="styled-input">

                                <input type="text" placeholder="category Name" required="required" onChange={handleChange} value={category_name} />

                            </div>
                            <button onClick={clickSubmit} className="btn btn-primary">Add</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

    const adminLinks=()=>{
        return(
            <div className="card">
                <h4 className="card-header">Admin Links</h4>
                <ul className='list-group'>
                    <li className="list-group-item">
                        <Link className="navbar-link" to="/create/category">Create Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="navbar-link" to="/create/product">Create product</Link>
                    </li>
                </ul>
            </div>
        )
    }



    const showSuccess=()=>{
        if(success){
            return <h4 className="text-success">Category is Added</h4>
        }
    }

    const showError=()=>{
        if(error){
            return <h4 className="text-success">Category should be unique</h4>
        }
    }
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 shadow-lg">
                        {adminLinks()}
                    </div>
                    <div className="col-md-6">
                        {newCategoryForm()}
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default AddCategory
