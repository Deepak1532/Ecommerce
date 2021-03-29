import React, { Fragment } from 'react'
import {Link,withRouter} from 'react-router-dom'

import {signout,isAuthenticated} from '../auth';

const Navbar=({history})=> {
    return (
        <div>
            <div className="header-bot">
        <div className="header-bot_inner_wthreeinfo_header_mid">
          {/* header-bot*/}
          <div className="col-md-4 logo_agile">
            <h1>
              <Link to="index.html">
                <span>E</span>commerce
                
                <img src="images/logo2.png" alt=" " />
              </Link>
            </h1>
          </div>
          {/* header-bot */}
          <div className="col-md-8 header">
            {/* header lists */}
            <ul>
              
              <li>
                <span className="fa fa-phone" aria-hidden="true" /> 9847563008
              </li>

              {!isAuthenticated()&&(
                <Fragment>
                  <li>
                <Link to="/signin">
                  <span className="fa fa-unlock-alt" aria-hidden="true" /> Sign In </Link>
              </li>
              <li>
                <Link to="/signup">
                  <span className="fa fa-pencil-square-o" aria-hidden="true" /> Sign Up </Link>
              </li>
                </Fragment>
              )}

              {isAuthenticated() && isAuthenticated().user.role===0 && (
                <li>
                <Link to="/user/dashboard">
                 Profile</Link>
              </li>
              )}

{isAuthenticated() && isAuthenticated().user.role===1 && (
                <li>
                <Link to="/admin/dashboard">
                 Admin Dashboard</Link>
              </li>
              )}
              
              {isAuthenticated()&&(
                <Fragment>
                  <li>
                <button className="btn btn-primary" style={{cursor:'pointer'}} onClick={()=>signout(()=>{history.push('/');
              })}>Sign Out</button>
              </li>
                </Fragment>
              )}

              
            </ul>
            {/* //header lists */}
            {/* search */}
            <div className="agileits_search">
              <form action="#" method="post">
                <input name="Search" type="search" placeholder="How can we help you today?" required />
                <button type="submit" className="btn btn-default" aria-label="Left Align">
                  <span className="fa fa-search" aria-hidden="true"> </span>
                </button>
              </form>
            </div>
            {/* //search */}
            {/* cart details */}
            <div className="top_nav_right">
              <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                <form action="#" method="post" className="last">
                  <input type="hidden" name="cmd" defaultValue="_cart" />
                  <input type="hidden" name="display" defaultValue={1} />
                  <button className="w3view-cart" type="submit" name="submit" value>
                    <i className="fa fa-cart-arrow-down" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
            {/* //cart details */}
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div>
      </div>
        </div>
    )
}

export default withRouter (Navbar)
