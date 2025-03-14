import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RealatedProducts from '../Components/RelatedProducts/RealatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  
  // Convert productId to a number
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      {product ? <Breadcrum product={product} /> : <p>Product not found</p>}
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RealatedProducts />
    </div>
  );
};

export default Product;

