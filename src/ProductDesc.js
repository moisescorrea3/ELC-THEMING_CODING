import React from 'react';

import caret from './images/caret.svg';

export const ProductDesc = ({ name, description, rating, features, shade }) => (
  <section className='product-description'>
    <h2 className='typography typography--title'>{name}</h2>
    <p className='typography'>{description}</p>
    <figure className='product-description__rating'>
      <img className='img img--xs' src={rating} alt="Product Rating" />
      <img className='icon icon--xs' src={caret} alt="View All Ratings" />
    </figure>
    <section className='product-description__features'>
      <div>
        <h4 className='typography typography--subtitle'>Benefits</h4>
        <p className='typography'>{features.benefits}</p>
      </div>
      <div>
        <h4 className='typography typography--subtitle'>Finish</h4>
        <p className='typography'>{features.finish}</p>
      </div>
      <div>
        <h4 className='typography typography--subtitle'>Coverage</h4>
        <p className='typography'>{features.coverage}</p>
      </div>
      <div>
        <h4 className='typography typography--subtitle'>Key Ingredients</h4>
        <p className='typography'>
          {features.keyIngredients} <a href="http://www.clinique.com">More</a>
        </p>
      </div>
      <section className='product-description__shade'>
        <span className='typography typography--subtitle'>{shade.name}</span>
        <div style={{ background: shade.color }}></div>
      </section>
    </section>
  </section>
);
