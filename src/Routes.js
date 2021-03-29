import React from 'react'
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom'
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'

import Homes from './components/Homes'
import AdminDashboard from './user/AdminDashboard'
import ChangePassword from './user/ChangePassword'
import Confirm from './user/Confirm'
import Forgetpassword from './user/ForgetPassword'
import Resetpassword from './user/Resetpassword'
import Signin from './user/Signin'
import Signup from './user/Signup'
import Userdashboard from './user/UserDashboard'

const Routes=()=> {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Homes} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signup" component={Signup} />

                    <Route exact path="/email/confirmation/:token" component={Confirm} />
                    <Route exact path="/forget/password" component={Forgetpassword} />
                    <Route exact path="/reset/password/:token" component={Resetpassword} />

                    <PrivateRoute exact path="/user/dashboard" component={Userdashboard} />
                    <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
                    {/* <Route exact path="/change/password/:token" component={ChangePassword} /> */}

                </Switch>
            </Router>
        </div>
    )
}

export default Routes
