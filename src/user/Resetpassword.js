import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../layout/Navbar';
import {API} from '../config';

const Resetpassword=({match})=> {

    const [values, setValues] = useState({
        email:'',password:'',cpassword:'',error: '', success: false
       });
   
       const {email,password,cpassword,success, error } = values;
    
       const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }
    
    const clickSubmit = (event) => {
        event.preventDefault();

        setValues({ ...values, error: false });
        const token = match.params.token
         
       fetch(`${API}/passwordreset/${token}`,{
           method:"PUT",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(values)
       })
       .then(res => res.json())
         .then(data => {
   
           if (data.error) {
               setValues({ ...values, error: data.error, success: false })
           }
           else {
               setValues({
                   ...values,
                   error:'', success: true
               })
           }
   
           
         })
         .catch(err => console.log(err))
        
   
    }


      


       const ResetPasswordForm = () => (


		<div className="modal-dialog">
			
			<div className="modal-content">
				
				<div className="modal-body modal-body-sub_agile">
					<div className="main-mailposi">
						<span className="fa fa-envelope-o" aria-hidden="true"></span>
					</div>
                    


                    <div className="modal_body_left modal_body_left1">
            <h3 className="agileinfo_sign">Reset Password </h3>
            
            {showError()}
            {showSuccess()}
            <form>
            <div className="styled-input">
                    <input type="email" placeholder="Email" name="Email" required="required" onChange={handleChange('email')} value={email} />
                </div>
                <div className="styled-input">
                    <input type="password" placeholder="Password" name="Password" required="required" onChange={handleChange('password')} value={password} />
                </div>
                <div className="styled-input">
                    <input type="password" placeholder=" Confirm Password" name="CPassword" required="required" onChange={handleChange('cpassword')} value={cpassword} />
                </div>
               
               
                <button onClick={clickSubmit} className="btn btn-primary">
                    Reset Password
            </button>
            
            {/* <Link to ="/signin" style={{float:"right"}}>Back to SignIn ?</Link> */}
            
            </form>
            
        </div>
        </div>
                    
					
				</div>
			</div>
		
		
	




    )
   
       const showError=()=>(
           
           <div className="alert alert-danger" style={{display:error?'':'none'}}>
               {error}
           </div>
          
       );
      
       const showSuccess=()=>(
        
           <div className="alert alert-success" style={{display:success?'':'none'}}>
              Password has been reset successfully you can login to continue
           </div>
        
       );


    return (
        <>
        <Navbar/>
        {ResetPasswordForm()}

            
        </>
    )
}

export default Resetpassword