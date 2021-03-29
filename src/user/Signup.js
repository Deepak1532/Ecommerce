import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import {signup} from '../auth';





const Signup = () => {
    const [values, setValues] = useState({
        name: '', email: '', password: '', error: '', success: false
    });

    const { name, email, password, success, error } = values;


    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }





    const clickSubmit = (event) => {
        event.preventDefault();

        setValues({ ...values, error: false });
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                }
                else {
                    setValues({
                        ...values,
                        name: '', email: '', password: '', error: '', success: true
                    })
                }
            })
    }



    const SignupForm = () => (


		<div className="modal-dialog mt-5">
			
			<div className="modal-content">
				
				<div className="modal-body modal-body-sub_agile">
					<div className="main-mailposi">
						<span className="fa fa-envelope-o" aria-hidden="true"></span>
					</div>
                    


                    <div className="modal_body_left modal_body_left1">
            <h3 className="agileinfo_sign">Sign Up</h3>
            {showError()}
            {showSuccess()}
            <form>
                <div className="styled-input agile-styled-input-top">
                    <input type="text" placeholder="Name" name="Name" required="required" onChange={handleChange('name')} value={name} />
                </div>
                <div className="styled-input">
                    <input type="email" placeholder="E-mail" name="Email" required="required" onChange={handleChange('email')} value={email} />
                </div>
                <div className="styled-input">
                    <input type="password" placeholder="Password" name="password" id="password1" required="required" onChange={handleChange('password')} value={password} />
                </div>
                <div className="styled-input">
                    <input type="password" placeholder="Confirm Password" name="Confirm Password" id="password2" required="required" />
                </div>
                <button onClick={clickSubmit} classNameName="btn btn-primary">
                    Sign Up
            </button>
            </form>
            <p>
                <Link to="#">By clicking register, I agree to your terms</Link>
            </p>
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
            Congrats New Account is created you can sign in to continue .......
        </div>
     
    );

    return (
        <>
       <Navbar/>
          
        {SignupForm()}

        </>
    )
}

export default Signup