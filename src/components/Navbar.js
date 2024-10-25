import logo from '../logo_3.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

function Navbar() {



    return (
      <div className="">
        <nav className="w-screen">
          <ul className='flex items-end justify-between py-3 bg-transparent text-white pr-5'>
          
          <li className='flex items-end ml-5 pb-2'>
            <Link to="/">
            
            <div className='inline-block font-bold text-xl ml-2'>
              PixelMint
            </div>
            </Link>
          </li>
          <li className='w-2/6'>
            <ul className='lg:flex justify-between font-bold mr-10 text-lg'>
              
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/">Marketplace</Link>
              </li>
                          
              
              
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/sellNFT">List My NFT</Link>
              </li>
                         
                          
              
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/profile">Profile</Link>
              </li>
              
                         
               
              <li>
                <button className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm" >Connect Wallet</button>
              </li>
            </ul>
          </li>
          </ul>
        </nav>
        <div className='text-white text-bold text-right mr-10 text-sm'>
          
        </div>
      </div>
    );
  }

  export default Navbar;