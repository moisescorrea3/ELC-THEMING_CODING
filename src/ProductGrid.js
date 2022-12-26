import React from 'react';
import { ProductImage } from './ProductImage';

export const ProductGrid = ({ heading, cta1, p1Name, p1Img, p1Price, p2Name, p2Img, p2Price, p3Name, p3Img, p3Price, p4Name, p4Img, p4Price }) =>
  <section className='product-grid'>
    <h2 className='typography typography--title'>{heading}</h2>
    <div className='product-grid__items'>
      <div>
        <div className='product-grid__image'>
          <ProductImage className='img img--md' image={p1Img} />
        </div>
        <div className='product-grid__details'>
          <h1 className='typography'>{p1Name}</h1>
          <h4 className='typography typography--secondary'>{p1Price}</h4>
        </div>
        <button className='button button--secondary'>{cta1}</button>
      </div>
      <div>
        <div className='product-grid__image'>
          <ProductImage className='img img--md' image={p2Img} />
        </div>
        <div className='product-grid__details'>
          <h1 className='typography'>{p2Name}</h1>
          <h4 className='typography typography--secondary'>{p2Price}</h4>
        </div>
        <button className='button button--secondary'>{cta1}</button>
      </div>
      <div>
        <div className='product-grid__image'>
          <ProductImage className='img img--md' image={p3Img} />
        </div>
        <div className='product-grid__details'>
          <h1 className='typography'>{p3Name}</h1>
          <h4 className='typography typography--secondary'>{p3Price}</h4>
        </div>
        <button className='button button--secondary'>{cta1}</button>
      </div>
      <div>
        <div className='product-grid__image'>
          <ProductImage className='img img--md' image={p4Img} />
        </div>
        <div className='product-grid__details'>
          <h1 className='typography'>{p4Name}</h1>
          <h4 className='typography typography--secondary'>{p4Price}</h4>
        </div>
        <button className='button button--secondary'>{cta1}</button>
      </div>
    </div>
  </section>
