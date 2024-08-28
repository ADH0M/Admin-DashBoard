import {  motion } from "framer-motion";
import { connect } from "react-redux";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  CartesianGrid,
} from "recharts";


const SalesHomeChart = (props) => {
  return (
    <motion.div 
			className='bg-[#5b4bb757] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-[#cdc9f8b6]'
        transition={{delay:0.2}}
    >
        <h2 className="text-lg font-medium mb-6 dark:text-gray-100 text-gray-900">Sales Overview</h2>
        <div className=" flex flex-col">
        <div className="h-[374px] w-[auto] ">
            <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart data={props.value}>
                <CartesianGrid stroke="#cdc9f8b6" strokeDasharray={"3 3"} />
                <XAxis dataKey={"name"} stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    borderColor: "#4B5563",
                }}
                itemStyle={{ color: "#E5E7EB" }}
                />
                <Line
                type="monotone"
                dataKey="sales"
                stroke="#6366F1"
                strokeWidth={3}
                dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, strokeWidth: 2 }}
                />
            </LineChart>
            </ResponsiveContainer>
        </div>
        
        </div>
    </motion.div>
  );
};

function state(state) {
  return {
    value: state.home.salesHomeChart,
    valueStart: state.home.salesStarts,
  };
}

export default connect(state)(SalesHomeChart);
