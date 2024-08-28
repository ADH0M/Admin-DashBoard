import { motion } from "framer-motion";
import {   Camera } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";



const data = [
  { name: "Jul",visit: 2150 },
  { name: "Aug",visit: 3100 },
  { name: "Sep",visit: 4500 },
  { name: "Oct",visit: 600 },
  { name: "Nov",visit: 1800 },
  { name: "Dec",visit: 1700 },
  { name: "Jan",visit: 3300 },
];

const TotalVisit = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="bg-[#5b4bb757] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6  border border-[#cdc9f8b6]">
        <div className="flex gap-3 mb-3 text-sm font-semibold dark:text-gray-100 text-gray-900">
          <Camera size={24} color="#f73ee7" />
          <h4>Tootal Viste</h4>
        </div>
        <div className="h-60">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart data={data}>
              <XAxis dataKey={"name"} stroke="#9ca3af" />
			  <CartesianGrid strokeDasharray='0 0' stroke='' />

              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  borderColor: "#4B5563",
                }}
                itemStyle={{ color: "#E5E7EB" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="visit"
                stroke="#5faab1"
                strokeWidth={3}
                dot={{ fill: "#6366F1", strokeWidth: 2, r: 4 }}
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

export default TotalVisit;
