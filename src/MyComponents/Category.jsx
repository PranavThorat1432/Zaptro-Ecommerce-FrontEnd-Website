import React, { useContext, useEffect } from 'react'
import { getData } from '../Context/DataContext'

const Category = () => {
    const {categoryOnlyData} = getData()

    
  return (
    <div className='bg-[#101829]'>
        <div className='max-w-7xl mx-auto flex gap-4 items-center justify-around py-7 px-4'>
            {
                categoryOnlyData.map((item, index) => {
                    return <div key={index}>
                        <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2 transition-transform duration-300 transform hover:scale-105 hover:from-red-600 hover:to-purple-600 shadow-md hover:shadow-lg uppercase">{item}</button>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Category
