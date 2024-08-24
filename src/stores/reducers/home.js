const initialState ={
    salesHomeChart:[
        { name: "Jul", sales: 4200 },
        { name: "Aug", sales: 3800 },
        { name: "Sep", sales: 5100 },
        { name: "Oct", sales: 4600 },
        { name: "Nov", sales: 5400 },
        { name: "Dec", sales: 7200 },
        { name: "Jan", sales: 6100 },
        { name: "Feb", sales: 5900 },
        { name: "Mar", sales: 6800 },
        { name: "Apr", sales: 6300 },
        { name: "May", sales: 7100 },
        { name: "Jun", sales: 7500 },
    ]

    ,
    salesStarts:[
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
      ],
      SALES_CHANNEL_DATA:[
        { name: "Website", value: 45600 },
        { name: "Mobile App", value: 38200 },
        { name: "Marketplace", value: 29800 },
        { name: "Social Media", value: 18700 },
    ]
} ;

const reducer = ( state = initialState ,aciton )=>{
    switch ( aciton.type ){
        default:
            return { ...state  }
    }
}

export default reducer



