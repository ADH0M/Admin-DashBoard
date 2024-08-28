import {motion}from 'framer-motion'
const Cards = ({items}) => {
  const Icon =items.icon
    return (
    <motion.div 
        className="bg-[#632ddf]  dark:bg-[#4c4097c0] mb-3  backdrop-blur-md  shadow-md p-4 rounded-lg border border-[#cdc9f8b6]  bg-opacity-50   " 
        whileHover={{y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"}}
    > 

        <div className='my-2 flex gap-2 items-center text-sm font-medium dark:text-gray-100 text-gray-900'>
            <Icon size={24} style={{color:items.color}}/>
            <p>{items.name}</p>
        </div>
        <p className='mt-1 text-3xl font-semibold dark:text-gray-100 text-gray-900'>{items.value}</p>
    </motion.div>
  )
}

export default Cards
