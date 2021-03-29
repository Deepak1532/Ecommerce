import React,{useState} from 'react'
import {Link , Redirect} from 'react-router-dom';
import Navbar from '../layout/Navbar';
import {forgetpassword} from '../auth';

const Forgetpassword=()=>{
    const[values,setValues]=useState({
        email:'',error:'',loading:false,success:false
       });
       const{email,loading,error,success}=values;
      
       const handleChange=name=>event=>{
         setValues({...values,error:false,[name]:event.target.value});
       }
     
       const clickSubmit=(event)=>{
           event.preventDefault();
           setValues({...values,error:false,loading:true});
           forgetpassword({email})
           .then(data=>{
               if(data.error){
                   setValues({...values,error:data.error,loading:false,success: false})
               }
               else{
                   
                setValues({
                    ...values,
                     email: '',  error: '', success: true
                })
               }
           });
       };
   



    const ForgetPasswordForm = () => (


		<div className="modal-dialog">
			
			<div className="modal-content">
				
				<div className="modal-body modal-body-sub_agile">
					<div className="main-mailposi">
						<span className="fa fa-envelope-o" aria-hidden="true"></span>
					</div>
                    


                    <div className="modal_body_left modal_body_left1">
            <h4 className="agileinfo_sign">Forget Password ?</h4>
            <h5 style={{marginTop:'10px',marginBottom:'10px'}}>Please enter the account that you want to reset password</h5>
            {showError()}
            {showSuccess()}
            <form>
               
                <div className="styled-input">
                    <input type="email" placeholder="E-mail" name="Email" required="required" onChange={handleChange('email')} value={email} />
                </div>
               
               
                <button onClick={clickSubmit} className="btn btn-primary">
                    Send Password Reset Link
            </button>
            
          
            
            </form>
            
        </div>
        </div>
                    
					
				</div>
			</div>
		
		
	




    )

    const showError=()=>(
        <div className="alert alert-danger mb-3" style={{display:error?'':'none'}}>
            {error}
        </div>
    );
    
    const showLoading=()=>
       loading&&(<div className="alert alert-info">
           <h2>Loading....</h2>
       </div>
       );
       const showSuccess=()=>(
     
        <div className="alert alert-success" style={{display:success?'':'none'}}>
          password reset verification link has been sent to your email
        </div>
     
    );


    
    return (
        <>
            <Navbar/>
            
            {showLoading()}
            
            {ForgetPasswordForm ()}
        </>
    )
}

export default Forgetpassword