import { motion } from "framer-motion";
import { connect } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];


const SalesChannelChart = (props) => {
    console.log(props.value);
    
	return (
		<motion.div
			className='bg-[#5b4bb757]  my-1 bg-opacity-50 backdrop-blur-md  shadow-lg rounded-xl p-6 border border-[#cdc9f8b6]'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-lg font-semibolddark:text-gray-100 mb-4 text-gray-900'>Sales by Channel</h2>

			<div className='h-64'>
				<ResponsiveContainer width={'100%'} height={'100%'}>
					<BarChart data={props.value}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey={"value"} fill='#8884d8'>
							{props.value.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};


function data(state){
return{
    value:state.home.SALES_CHANNEL_DATA
}
}
export default connect(data)(SalesChannelChart);
