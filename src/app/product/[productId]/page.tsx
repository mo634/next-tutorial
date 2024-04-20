import React from 'react'

// just for typescript "define type of arg of params"
interface PrdouctDetailsProps {
    params:{
        productId:String
    }
}
const PrdouctDetails = ({params}:PrdouctDetailsProps) => {
    return (
        <div>PrdouctDetails {params.productId}</div>
    )
}

export default PrdouctDetails