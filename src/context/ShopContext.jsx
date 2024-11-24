import { createContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const deliveryCharges = 250;
    const [Search, setSearch] = useState("")
    const [ShowSearch, setShowSearch] = useState(true)
    const value = {
        products, currency, deliveryCharges,
        Search, setSearch, setShowSearch, ShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;