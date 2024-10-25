import Navbar from "./Navbar";



export default function Profile () {
   

    

    return (
        <div className="profileClass" style={{"min-height":"100vh"}}>
            <Navbar></Navbar>
            <div className="profileClass">
            <div className="flex text-center flex-col mt-11 md:text-2xl text-white">
                <div className="mb-5">
                    <h2 className="font-bold">Wallet Address</h2>  
                   
                </div>
            </div>
            <div className="flex flex-row text-center justify-center mt-10 md:text-2xl text-white">
                    <div>
                        <h2 className="font-bold">No. of NFTs</h2>
                        0
                        
                    </div>
                    <div className="ml-20">
                        <h2 className="font-bold">Total Value</h2>
                        0 ETH
                    </div>
            </div>
            <div className="flex flex-col text-center items-center mt-11 text-white">
                <h2 className="font-bold">Your NFTs</h2>
                <div className="flex justify-center flex-wrap max-w-screen-xl">
                    
                </div>
                <div className="mt-10 text-xl">
                    0
                </div>
            </div>
            </div>
        </div>
    )
};