import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import Headers from "../common/Headers";
import Cards from "../common/Cards";
import SalesHomeChart from "../sections/home/SalesHomeChart";
import SalesChannelChart from "../sections/home/SalesChannelChart";
import CategoryChart from "../sections/home/CategoryChart";
import TotalVisit from "../sections/home/TotalVisit";
import TotalProducts from "../sections/home/TotalProducts";
const data = [
  { name: "Total Sales", icon: Zap, value: "$12,345", color: "#6366F1" },
  { name: "New Users", icon: Users, value: "1,234", color: "#8B5CF6" },
  { name: "Total Products", icon: ShoppingBag, value: "567", color: "#EC4899" },
  {
    name: "Conversion Rate",
    icon: BarChart2,
    value: "12.5%",
    color: "#10B981",
  },
];

const Overviwe = () => {
  return (
    <div className="relative  overflow-auto  flex-1 w-full   z-10">

      <Headers title="Home" />

      <div className="max-w-7xl  mx-auto py-6 px-4 lg:px-8">
      <motion.div
        className="grid grid-cols-1 gap-5  lg:grid-cols-4 mb-8"


        initial={{ opacity: 0, y: 19 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
>

  <div className='  lg:h-[374px]  md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 '> 
     {data.map((item, index) => (
      <Cards key={index} items={item} />
    ))}
  </div>
  <div className='md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3   '> 
    <SalesHomeChart/>  
  </div>
  <div className='md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2    '> 
    <CategoryChart/>  
  </div>
  
  <div className='md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-4   '> 
    <SalesChannelChart/>  
  </div>
  
  <div className='md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4   '> 
    <TotalVisit/>  
  </div>
  
  <div className='md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4   '> 
    <TotalProducts/>  
  </div>
  
</motion.div>

      
      </div>

            
    </div>
  );
};

export default Overviwe;
