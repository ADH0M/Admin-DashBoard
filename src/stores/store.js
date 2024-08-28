import { createStore ,combineReducers} from "redux";
import home from "./reducers/home";
import products from './reducers/products'
const reducer =combineReducers({
    home , products
}) 
const store = createStore( reducer)
export default store 

