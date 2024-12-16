import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProducts = ({ category, subCategory }) => {
  const { products,backendUrl } = useContext(ShopContext);
  const [Related, setRelated] = useState([]);
  const handlescrolltop = () => {
    window.scrollTo(0, 0);
  };


  useEffect(() => {
    if (products.length > 0) {
      let productscopy = products.slice();
      productscopy = productscopy.filter((item) => item.category === category);
      productscopy = productscopy.filter((item) => item.subCategory === subCategory);
      setRelated(productscopy.slice(0, 5));
    }
  }, [category, subCategory, products]);

  return (
    <div onClick={handlescrolltop} className='my-5'>
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          Related.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={`${backendUrl}${item.image[0]}`}
              name={item.name}
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  );
};

export default RelatedProducts;
