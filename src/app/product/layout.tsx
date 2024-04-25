import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <p>common to product</p>
            {children}
            <p>common to product</p>
        </div>
    )
}

export default Layout