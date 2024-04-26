"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
const Order = () => {
    const router = useRouter()
    const handleClick = () => {
        console.log('clicked')
        // router.push("/blog") when click back => go to the previous page 
        // router.replace("/blog") when click back => go to the home page 
        // router.back() => back one step 
        // router.forward() => go one step
    }
    return (
        <div>
            <button
            onClick={handleClick}
            > click me</button>
        </div>
    )
}

export default Order