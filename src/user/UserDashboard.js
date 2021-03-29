import React from 'react'
import { isAuthenticate } from '../auth'
import Navbar from '../component/Navbar'

function Userdashboard() {
    const {user:{name,email,role}} = isAuthenticate()
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-6">
                        <div className="card mb-5">
                            <h3 className="card-header">User Information</h3>
                            <ul className="list-group">
                                <li className="list-group-item">{name}</li>
                                <li className="list-group-item">{email}</li>
                                <li className="list-group-item">{role===1?'Admin':'Registered User'}</li>
                            </ul>
                        </div>
                        <div className="card md-5">
                            <h3 className="card-header">Purchase History</h3>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">History</li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userdashboard