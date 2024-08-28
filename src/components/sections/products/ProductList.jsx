import { Search } from "lucide-react";
import { useState } from "react";

const ProductList = ({ list }) => {
  const [filter, setfilter] = useState("");
  const [product, setProducts] = useState(list);
    const handler   = (e)=>{
        const tirm  = e.target.value ;
        setfilter(tirm)
        const newList =list.filter(item=>(
            item.name.includes(tirm)
        ))
        setProducts(newList)
    }
  return (
    <div className="bg-gray-800">
      <header className="flex justify-between m-4   ">
        <h3>prodcut list</h3>
        <p className="flex rounded-md  relative">
          <Search
            size={18}
            className=" ml-2  absolute top-[50%] translate-y-[-50%] text-gray-400 "
          />
          <input
            type="text"
            placeholder="Search Prodcut . . ."
            className="py-1 pl-8 outline-none bg-slate-500 text-white tracking-wide rounded-md my-2"
            value={filter}
            onChange={handler}
          />
        </p>
      </header>
      <table className="w-full">
        <thead>
          <tr>
            <th>img</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>STOCK</th>
            <th>SALES</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww"
                  alt="Product img"
                  className="size-10 rounded-full"
                />{" "}
              </td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
