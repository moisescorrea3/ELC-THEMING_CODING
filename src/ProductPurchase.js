import React from 'react';

import caret from './images/caret.svg';
import minus from './images/minus.png';
import plus from './images/plus.png';

export const ProductPurchase = ({ price }) =>
  <section className='product-purchase'>
    <div className='product-purchase__control'>
      <p className='typography typography--subtitle'>Quantity</p>
      <img src={minus} alt="Decrease Quantity" /> 1 <img src={plus} alt="Increase Quantity" />
    </div>
    <div className='product-purchase__control'>
      <p className='typography typography--subtitle'>One Time Purchase</p>
      <img className='icon icon--xs' src={caret} alt="Select Frequency" />
    </div>
    <p className='typography typography--title'>{price}</p>
    <button className='button button--primary' name="AddToBag">Add To Bag</button>
  </section>