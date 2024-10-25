import Navbar from "./Navbar";
import axie from "../tile.jpeg";
import { useLocation, useParams } from 'react-router-dom';
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";
import { GetIpfsUrlFromPinata } from "../utils";

export default function NFTPage (props) {



    return(
        <div style={{"min-height":"100vh"}}>
            <Navbar></Navbar>
            <div className="flex ml-20 mt-20">
                
                <div className="text-xl ml-20 space-y-8 text-white shadow-2xl rounded-lg border-2 p-5">
                    <div>
                        Name: 
                    </div>
                    <div>
                        Description: 
                    </div>
                    <div>
                        Price: <span className=""></span>
                    </div>
                    <div>
                        Owner: <span className="text-sm"></span>
                    </div>
                    <div>
                        Seller: <span className="text-sm"></span>
                    </div>
                    <div>
                    { 
                        <button className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm" >Buy this NFT</button>
                        
                    }
                    
                    <div className="text-green text-center mt-3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}