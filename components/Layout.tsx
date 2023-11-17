import React from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = (
        {children,}: {children: React.ReactNode}
    ) => {
    return (
        <>
            <Header/>
                <main className="min-h-screen w-full bg-white relative">
                    {children}
                </main>
            <Footer/>
        </>
    )
}

export default Layout