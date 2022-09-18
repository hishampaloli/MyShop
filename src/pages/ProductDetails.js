import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProductsDetails } from '../actions/productsActions.js';
import { addToCart } from '../actions/cartAction.js';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const ProductDetails = ({match}) => {
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const {loading, error, product} = productDetails
    const [qty, setQty] = useState(1);
    console.log(qty);

    useEffect(() => {
        dispatch(getProductsDetails(match.params.id))
    }, [dispatch])

    console.log(productDetails);

    const cartHandler = () => {
        dispatch(addToCart(match.params.id, qty));
    }

  return (
    <div  className="d-flex" >
        <div  style={{width: '300px'}} >
<img className='img-fluid'  style={{width: '400px'}}  src={product?.image} alt="" />
        </div>

        <div className='m-3' style={{width: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <h3  >{product?.name}</h3>
        <p>{product?.description}</p>
        <p><strong>Price: </strong> ${product?.price} </p>

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {product?.countInStock > 0 ? <Link to='/cart' ><button className='btn' onClick={cartHandler} style={{border: '1px solid'}} >Add to cart</button></Link> : <button disabled className='btn' style={{border: '1px solid'}} >Add to cart</button> }
        
        <Form.Select onChange={(e) => setQty(e.target.value) } style={{width: '200px'}} size="md">
        {[...Array(product?.countInStock).keys()].map(x => (
                  <option key={x + 1} value={x+1} >
                    {x+1}
                  </option>
                ))}
      </Form.Select>
    
        </div>
        </div>
    </div>
  )
}

export default ProductDetails