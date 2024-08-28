import {motion} from 'framer-motion'
import Headers from '../common/Headers'
import Cards from '../common/Cards'
import { connect } from 'react-redux';
import ProductList from '../sections/products/ProductList';

const Products = (props) => {  
  return (
    <div className=" z-10 w-full  ">
        <Headers title={'Products'}/>
        <main className='mx-6 my-4'>

        <motion.div  
          initial ={{opacity:0 , y : 30 }}
          animate={{opacity:1  , y : 0}}
          transition={{delay:0.4}}
          >
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mb-6'>
               {props.value.map((item, index) => (
                 <Cards key={index} items={item} />
                ))}
            </div>
              
            <div>
                <ProductList list={props.list}/>
            </div>
        </motion.div>
      </main>

    </div>

  )
}

const stateProducts = (state)=>{
  return {
    value:state.products.cards,
    list :state.products.productList
  }
}

export default connect(stateProducts)(Products)
