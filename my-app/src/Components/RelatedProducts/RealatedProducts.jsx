import React from 'react';
import './RelatedProducts.css'; // Fixed file name
import data_product from '../Assets/data'; // Fixed variable name
import Item from '../Item/Item';

const RelatedProducts = () => { // Fixed component name
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className='relatedproducts-itm'>
        {data_product.map((item,) => ( // Fixed variable name
          <Item 
            key={item.id} // Use item.id instead of index for keys
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

