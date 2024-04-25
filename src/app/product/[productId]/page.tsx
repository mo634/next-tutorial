import React from 'react'

// just for typescript "define type of arg of params"
interface productDetailsProps {
    params: {
        productId: String
    }
}
// generate dynamic metadata 

export async function generateMetadata({ params }: productDetailsProps) {
    return {
        title: `product ${params.productId}`,
    }
}

const PrdouctDetails = ({ params }: productDetailsProps) => {
    return (
        <div>PrdouctDetails {params.productId}</div>
    )
}

export default PrdouctDetails