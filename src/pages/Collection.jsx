import React, { useEffect, useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { Search, ShowSearch, products } = useContext(ShopContext)
  const [ShowFilter, setShowFilter] = useState(false)
  const [FilterProduct, setFilterProduct] = useState([])
  const [category, setcategory] = useState([])
  const [subcategory, setsubcategory] = useState([])
  const [SortType, setSortType] = useState("relevant")
  console.log(products);
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory(category.filter((item) => item !== e.target.value))
    } else {
      setcategory([...category, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setsubcategory(subcategory.filter((item) => item !== e.target.value))
    } else {
      setsubcategory([...subcategory, e.target.value])
    }
  }

  const ApplyFilter = () => {
    let filteredProducts = products.slice();

    if (Search && ShowSearch) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(Search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subcategory.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        subcategory.includes(item.subCategory)
      );
    }
    setFilterProduct(filteredProducts);
  };

  const sortProduct = () =>{
    let sortedProduct = FilterProduct.slice();
    switch (SortType) {
      case "low-high":
        setFilterProduct(sortedProduct.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProduct(sortedProduct.sort((a, b) => b.price - a.price));
        break;
      default:
        ApplyFilter();
        break;
    }
  }
  useEffect(() => {
    sortProduct();
  }, [SortType])
  
  useEffect(() => {
    ApplyFilter()
  }, [category, subcategory, Search, ShowSearch, products])

  useEffect(() => {
    setFilterProduct(products)
  }, [])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p onClick={() => { setShowFilter(!ShowFilter) }} className='my-2 text-xl flex items-center gap-2 cursor-pointer'>FILTERS</p>
        <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${ShowFilter ? 'rotate-90' : ''}`} alt="Dropdown Icon" />
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ShowFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Men"} onClick={toggleCategory} />MEN
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Women"} onClick={toggleCategory} />WOMEN
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Kids"} onClick={toggleCategory} />KIDS
            </p>
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${ShowFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Topwear"} onClick={toggleSubCategory} />TOPWEAR
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Bottomwear"} onClick={toggleSubCategory} />BOTTOMWEAR
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Winterwear"} onClick={toggleSubCategory} />WINTERWEAR
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"COLLECTION"} />
          <select onClick={(e)=>{setSortType(e.target.value)}} className='border-2 border-gray-300 px-2 text-sm'>
            <option value="relevant">Sort by: Relevance</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            FilterProduct.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={`http://localhost:4000${item.image}`}
                // image={"http://localhost:4000" + item.image}
                name={item.name}
                price={item.price}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
