import React from 'react'
import '../styles/productsCard.css';

function ProductsCard(props){
    return(
        <div className="product-card">
            <div className="product-img">
                <img src={props.img} width="150" alt="Immagen de Producto"/>
            </div>
            <div className="product-details">
                <h4>{props.title}</h4>
                <p>{props.color}</p>
                <div className="product-price">
                    <p>{props.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard