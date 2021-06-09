import React from 'react';
import carticon from '../assets/carticon.svg'

function CartWidget(props) {
    return (
        <div>
            <img src={carticon} alt="" width="24"/>
        </div>
    );
}

export default CartWidget;