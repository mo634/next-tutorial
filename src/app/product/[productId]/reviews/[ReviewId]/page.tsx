import React from 'react'

interface RviewIDProps {
    params:{
        ReviewId:String,
        productId:String
    }
}
const RviewID = ({params}:RviewIDProps) => {


    // console.log(params)

    return (
        <div>
            <h2>RviewID {params.ReviewId}</h2>
            <h2> productID {params.productId}</h2>
        </div>
    )
}

export default RviewID