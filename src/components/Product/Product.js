import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
            </div>
            
        </div>
    );
};

export default Product;