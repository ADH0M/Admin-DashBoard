import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react';
const initialState ={
    
        cards:[
            {name:'Total Products'   , icon: Package      , value: 1234       , color:'#6366F1' },
            {name:'Top Selling'      , icon: TrendingUp   , value: 89         , color:'#10B981'},
            {name:'Low Stock'        , icon: AlertTriangle, value: 23         , color:'#F59E0B'},
            {name:'Total Revenue'    , icon: DollarSign   , value: '$543,210' , color:'#EF4444'}
        ],
        
        productList : [
            { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
            { id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
            { id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
            { id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
            { id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
        ]
        
    
    }





const reducer = (state = initialState ,action)=>{
    switch(action.type){
        default :return state
    }
}


export default reducer