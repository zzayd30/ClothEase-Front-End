import { createContext } from "react";
// import { products } from "../assets/assets";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const deliveryCharges = 25;
    const [Search, setSearch] = useState("")
    const [ShowSearch, setShowSearch] = useState(true)
    const [CartItem, setCartItem] = useState({})
    const [products, setProducts] = useState([])
    const [token, setToken] = useState("")
    const Navigate = useNavigate()
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
        setCartItem(CartData)
        if (token) {
            try {
                await axios.post("http://localhost:4000/api/cart/add", { itemId, size }, {
                    headers:
                        { Authorization: `Bearer ${token}` }
                });
                toast.success("Product added to cart");
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    }
    const GetCartCount = () => {
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
    const UpdateQuantity = async (itemId, size, quantity) => {
        let CartData = structuredClone(CartItem)

        CartData[itemId][size] = quantity;
        setCartItem(CartData)

        if (token) {
            try {
                await axios.post("http://localhost:4000/api/cart/update", { itemId, size, quantity }, {
                    headers:
                        { Authorization: `Bearer ${token}` }
                });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }

    }

    const GetCartAmount = () => {
        let amount = 0
        for (const items in CartItem) {
            for (const item in CartItem[items]) {
                try {
                    if (CartItem[items][item] > 0) {
                        const productData = products.find((product) => product._id === items);
                        amount += productData.price * CartItem[items][item]
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return amount;
    }

    const getProductData = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/product/list");
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);

        }
    }

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(
                "http://localhost:4000/api/cart/get",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.data.success) {
                setCartItem(response.data.cartData);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };


    useEffect(() => {
        getProductData()
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
            getUserCart(localStorage.getItem("token"))
        }
    }, [])



    const value = {
        products, currency, deliveryCharges,
        Search, setSearch, setShowSearch, ShowSearch,
        CartItem, setCartItem,AddToCart, Navigate,
        GetCartCount, UpdateQuantity, GetCartAmount,
        token, setToken
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;