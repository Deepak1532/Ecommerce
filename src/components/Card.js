import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({product}) => {
    return (
        <>
                        <div className="col-md-4 product-men">
                            <div className="men-pro-item simpleCart_shelfItem">
                                <div className="men-thumb-item">
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
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="submit" name="submit" value="Add to cart" className="button" />
                                                </fieldset>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
           
            
            
        </>
    )
}

export default Card