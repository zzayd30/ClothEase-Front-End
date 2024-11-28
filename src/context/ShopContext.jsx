import { createContext } from "react";
import { products } from "../assets/assets";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Cart from "../pages/Cart";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const deliveryCharges = 250;
    const [Search, setSearch] = useState("")
    const [ShowSearch, setShowSearch] = useState(true)
    const [CartItem, setCartItem] = useState({})
    const AddToCart = async (itemId, size) => {

        if (!size) {
            toast.error("Please select product size", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true
            })
            return
        }

        let CartData = structuredClone(CartItem)
        if (CartData[itemId]) {
            if (CartData[itemId][size]) {
                CartData[itemId][size] += 1
            } else {
                CartData[itemId][size] = 1
            }
        }
        else {
            CartData[itemId] = {}
            CartData[itemId][size] = 1
        }
        console.log(CartData)
        setCartItem(CartData)
    }
    const GetCartCount = () =>{
        let count = 0
        for (const items in CartItem) {
            for (const item in CartItem[items]) {
                try {
                    if (CartItem[items][item] > 0) {
                        count += CartItem[items][item]
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return count;
    }


    const value = {
        products, currency, deliveryCharges,
        Search, setSearch, setShowSearch, ShowSearch,
        CartItem, AddToCart,
        GetCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;