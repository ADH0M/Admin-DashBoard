import { motion } from "framer-motion";
import { Edit, Search, Trash } from "lucide-react";
import {  useState } from "react";

const ProductList = ({ list }) => {
const [inputValue ,setInputValue] =useState('')
const [currentProducts ,setCurrentProducts] =useState(list)
const handdler = (e)=>{
  const value  = e.target.value.toLowerCase();
  setInputValue(value);
  const tableData = list.filter((item)=> item.name.toLowerCase().includes(value) 
  
)
setCurrentProducts(tableData)
}


return (
    <div className="dark:bg-[#41368ac0] border outline-none rounded-lg py-2 px-3 border-[#41368ac0] dark:text-gray-50 dark:border-[#cdc9f8b6] ">
      <header className="flex justify-between m-4  items-center  ">
        <h3>prodcut list</h3>
        <p className="flex rounded-md   relative">
          <Search
            size={18}
            className=" ml-2  absolute top-[50%] translate-y-[-50%] text-white  dark:text-gray-700 "
          />
          <input
            type="text"
            placeholder="Search Prodcut . . ."
            className="bg-gray-700 dark:bg-white text-white dark:text-blue-500 placeholder-gray-100 dark:placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={inputValue}
            onChange={handdler}
          />
        </p>
      </header>
      <table className="w-full table-fixed text-left  border-collapse">
        <thead className=" ">
          <tr >
            <th className="p-3 font-bold  capitalize  dark:text-gray-200 leading-4 tracking-widest ">img</th>
            <th className="p-3 font-bold  capitalize  dark:text-gray-200 leading-4 tracking-widest ">NAME</th>
            <th className="p-3 font-bold  capitalize  dark:text-gray-200 leading-4 tracking-widest ">CATEGORY</th>
            <th className="p-3 font-bold  capitalize  dark:text-gray-200 leading-4 tracking-widest ">PRICE</th>
            <th className="p-3 font-bold  capitalize  dark:text-gray-200 leading-4 tracking-widest ">STOCK</th>
            <th className="p-3 font-bold  capitalize  dark:text-gray-200 leading-4 tracking-widest ">SALES</th>
            <th className="p-3 font-bold  capitalize  dark:text-gray-200 leading-4 tracking-widest ">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((item) => (
            <motion.tr
              initial={{opacity:0 ,width:0 , x:10}}
              animate={{opacity:1 ,width:1 ,x:0}}
              transition={{delay:0.4}}
            key={item.id}>
              <td className="border-t border-slate-600 p-3">
                <img
                  src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww"
                  alt="Product img"
                  className="size-10 rounded-full"
                />{" "}
              </td>
              <td className="border-t border-slate-600 p-3"> {item.name}</td>
              <td className="border-t border-slate-600 p-3">{item.category}</td>
              <td className="border-t border-slate-600 p-3">{item.price}</td>
              <td className="border-t border-slate-600 p-3">{item.stock}</td>
              <td className="border-t border-slate-600 p-3">{item.sales}</td>
              <td className="border-t  border-slate-600 p-3 flex gap-2">
                <button className="text-red-500 ml-2">
                  <Edit /> 
                </button>
                <button className="text-green-500">

                <Trash />
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
