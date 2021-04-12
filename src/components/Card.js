import React,{useState,useEffect} from 'react'
import {Link,Redirect} from 'react-router-dom'
import {addItem} from './cartApi'

const Card = ({product}) => {
    const [redirect,setRedirect] =useState(false)

    const addToCart =()=>{
        addItem(product,setRedirect(true))

    }

    const shouldRedirect=(redirect)=>{
        if(redirect){
            return <Redirect to="/cart"/>
        }
    };
    return (
        <>
                        <div className="col-md-4 product-men">
                            <div className="men-pro-item simpleCart_shelfItem">
                                <div className="men-thumb-item">
                                    {shouldRedirect(redirect)}
                                <img src={`http://localhost:7000/public/uploads/${product.product_image}`} width="250" style={{height:'180px'}}/>
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <Link to="" className="link-product-add-cart">Quick View</Link>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>
								</div>
                                    <div className="item-info-product ">
                                        <h4>
                                            <Link to="">{product.product_name}</Link>
                                        </h4>
                                        <div className="info-product-price">
                                            <span className="item_price">Rs {product.product_price}</span>
                                            
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                            
                                                    <button onClick={addToCart} className="btn btn-info"> Add to Cart </button>
                                               
                                        </div>

                                    </div>
                                </div>
                            </div>
           
            
            
        </>
    )
}

export default Card