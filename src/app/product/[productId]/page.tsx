import React from 'react'

// just for typescript "define type of arg of params"
interface productDetailsProps {
    params: {
        productId: String
    }
}

export const metadata = {
    title: {
        absolute: "this is product page"
    }
}


const PrdouctDetails = ({ params }: productDetailsProps) => {
    return (
        <div>PrdouctDetails {params.productId}</div>
    )
}

export default PrdouctDetails