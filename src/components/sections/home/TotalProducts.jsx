import { motion } from "framer-motion";
import {   StoreIcon } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  YAxis,
} from "recharts";



const dataPro = [
    { name: 'Pro A', uv: 4000, pv: 2400, price: 2400 },
    { name: 'pro B', uv: 3000, pv: 1398, price: 2210 },
    { name: 'pro C', uv: 2000, pv: 9800, price: 2290 },
    { name: 'pro D', uv: 2780, pv: 3908, price: 2000 },
    { name: 'pro E', uv: 1890, pv: 4800, price: 2181 },
    { name: 'pro F', uv: 2390, pv: 3800, price: 2500 },
    { name: 'pro G', uv: 3490, pv: 4300, price: 2100 },
];

const TotalProducts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="bg-[#5b4bb757] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-[#cdc9f8b6]">
        <div className="flex gap-3 mb-3 text-sm font-semibold text-gray-400">
          <StoreIcon size={24} color="#1de4ca" />
          <h4>Tootal Products</h4>
        </div>
        <div className="h-60">
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart data={dataPro}>
                <CartesianGrid stroke="#cdc9f8b6" strokeDasharray={"3 3"} />
                <XAxis dataKey={"uv"} stroke="#9ca3af" />
                <YAxis dataKey={"pv"} stroke="#9ca3af" />
                <Tooltip
                contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    borderColor: "#4B5563",
                }}
                itemStyle={{ color: "#E5E7EB" }}
                />
                <Legend/>
                <Line
                type="monotone"
                dataKey="uv"
                stroke="#00d5dc"
                strokeWidth={3}
                dot={{ fill: "#6366F1", strokeWidth: 1, r: 4 }}
                activeDot={{ r: 6, strokeWidth: 1 }}
                />
                <Line
                type="monotone"
                dataKey="pv"
                stroke="#f3e31c"
                strokeWidth={3}
                dot={{ fill: "#6366F1", strokeWidth: 1, r: 4 }}
                activeDot={{ r: 4, strokeWidth: 1 }}
                />
            </LineChart>
            </ResponsiveContainer>
        </div>
        <p className="text-lg font-semibold cursor-pointer text-[#6366F1]">viwe all</p>
      </div>
    </motion.div>
  );
};

export default TotalProducts;
