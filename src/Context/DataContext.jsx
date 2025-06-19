import axios from "axios";
import { createContext, useState, useContext } from "react";


export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data, setData] = useState()

    // fetching all products from api
    const fetchAllProducts = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.in/api/products?limit=150")
            
            const productsData = res.data.products;
            setData(productsData)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const getUniqueCategory = (data, property) => {
        let newVAL =data?.map((curElem) => {
            return curElem[property]
        })
        return ["All",...new Set(newVAL)]
    }

    const categoryOnlyData = getUniqueCategory(data, 'category')
    const brandOnlyData = getUniqueCategory(data, 'brand')

    return <DataContext.Provider value={{data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData}}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext);