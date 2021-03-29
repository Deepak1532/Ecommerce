import React,{useState} from 'react'
import {Link , Redirect} from 'react-router-dom';
import Navbar from '../layout/Navbar';
import {signin,authenticate} from '../auth';

const Signin=()=> {
    const[values,setValues]=useState({
        email:'', password:'',error:'',loading:false,redirectToReferrer:false,
       });
       const{email,password,loading,error,redirectToReferrer}=values;
      
       const handleChange=name=>event=>{
         setValues({...values,error:false,[name]:event.target.value});
       }
     
       const clickSubmit=(event)=>{
           event.preventDefault();
           setValues({...values,error:false,loading:true});
           signin({email,password})
           .then(data=>{
               if(data.error){
                   setValues({...values,error:data.error,loading:false})
               }
               else{
                   authenticate(data,()=>{
                    setValues({
                        ...values,
                       redirectToReferrer:true
                     
                    });
                   });
                       
               }
           });
       };
   

       const SigninForm = () => (


		<div className="modal-dialog">
			
			<div className="modal-content">
				
				<div className="modal-body modal-body-sub_agile">
					<div className="main-mailposi">
						<span className="fa fa-envelope-o" aria-hidden="true"></span>
					</div>
                    
                    <div className="modal_body_left modal_body_left1">
            <h3 className="agileinfo_sign">Sign In</h3>
            <form>
               
                <div className="styled-input">
                    <input type="email" placeholder="E-mail" name="Email" required="required" onChange={handleChange('email')} value={email} />
                </div>
                <div className="styled-input">
                    <input type="password" placeholder="Password" name="password" id="password1" required="required" onChange={handleChange('password')} value={password} />
                </div>
               
                <button onClick={clickSubmit} classNameName="btn btn-primary">
                    Sign In
            </button>
            
            
             <Link to ="/forget/password" style={{float:"right"}}>forget Password ?</Link>
            
            </form>
            
        </div>
        </div>
                    
					
				</div>
			</div>
		)

    const showError=()=>(
        <div classNameName="alert alert-danger mb-3" style={{display:error?'':'none'}}>
            {error}
        </div>
    );
    
    const showLoading=()=>
       loading&&(<div classNameName="alert alert-info">
           <h2>Loading....</h2>
       </div>
       );
     const redirectUser=()=>{
         if(redirectToReferrer){
            
         
             return <Redirect to="/" /> 
         }
     }
     
    return (
        <>
        <Navbar/>
           {showLoading()}
            {showError()}
             {SigninForm()}
             {redirectUser()}
      


        </>
    )
}

export default Signin