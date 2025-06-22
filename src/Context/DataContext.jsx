import axios from "axios";
import { createContext, useState, useContext } from "react";


export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    // fetching all products from api
    const fetchAllProducts = async () => {
        setLoading(true)
        try {
            const res = await axios.get("https://fakestoreapi.in/api/products?limit=150")
            console.log(res);
            const productsData = res.data.products;
            setData(productsData)
            
        } catch (error) {
            console.log(error);
            
        } finally {
            setLoading(false)
        }
    }

    const getUniqueCategory = (data, property) => {
        let newVAL = data?.map((curElem) => {
            return curElem[property]
        })
        return ["All",...new Set(newVAL)]
    }

    const categoryOnlyData = getUniqueCategory(data, 'category')
    const brandOnlyData = getUniqueCategory(data, 'brand')

    return <DataContext.Provider value={{data, loading, setData, fetchAllProducts, categoryOnlyData, brandOnlyData}}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext);