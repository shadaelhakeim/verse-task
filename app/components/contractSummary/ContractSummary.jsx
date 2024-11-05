import React from 'react';
import { faCheck, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { faShieldHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./contractSummary.css"
export default function contractSummary() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full mx-auto text-sm font-sans">
      {/* Contract Summary */}
      <div className="mb-4">
        <h2 className="gradient-text font-semibold mb-1">Contract Summary</h2>
        <p className="text-blue-700 font-semibold text-lg">
          This Will Be Service Name & It Can Be Over 2 Lines Based On Your Needs
        </p>
      </div>
      
      {/* Order Info */}
      <div className="space-y-1 text-gray-500">
        <div className="flex justify-between">
          <span>Order ID:</span>
          <span className="text-gray-800 font-medium">#ORDSRV-123</span>
        </div>
        <div className="flex justify-between">
          <span>Tier:</span>
          <span className="text-gray-800 font-medium">Tier Name</span>
        </div>
        <div className="flex justify-between">
          <span>Sold By:</span>
          <span className="text-gray-800 font-medium">&lt;V-Lancer Name&gt;</span>
        </div>
        <div className="flex justify-between">
          <span>Sold To:</span>
          <span className="text-gray-800 font-medium">&lt;V-Client Name&gt;</span>
        </div>
        <div className="flex justify-between">
          <span>Price:</span>
          <span className="text-gray-800 font-medium">$100</span>
        </div>
        <div className="flex justify-between">
          <span>Escrow Amount:</span>
          <span className="text-gray-800 font-medium">$100</span>
        </div>
        <div className="flex justify-between">
          <span>Starting Date:</span>
          <span className="text-gray-800 font-medium">09-Sep-2023 05:45 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Date:</span>
          <span className="text-gray-800 font-medium">15-Sep-2023 05:45 PM</span>
        </div>
      </div>

      {/* Contract Actions */}
      <div className="mt-6 mb-4">
        <button className="w-full py-2 text-white font-semibold rounded-full bg-gradient-to-r from-blue-600 to-red-500 shadow-md hover:from-blue-700 hover:to-red-600">
          Endorse Client
        </button>
      </div>

      {/* Contract Phases */}
<div className=" pt-4 mb-4 relative liner">
     <div className='flex items-center justify-around '>
        <h3 className="gradient-text font-semibold mb-2">Contract Phases</h3>
       <span className="span h-[1px] lg:w-[50%] mb-1 "></span>
        <FontAwesomeIcon  className='w-[10px] mb-1' icon={faAngleUp} />
        </div>
    <ul className="space-y-2 relative"> 
      <li className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faCheck} className=" z-10  contract-icon w-4 h-4 text-white bg-gradient-to-br from-blue-800 via-blue-600 to-blue-950" />
        <span className="text-gray-700">Contract Started</span>
      </li>
      <li className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faCheck} className=" z-10  contract-icon w-4 h-4 text-white bg-gradient-to-br from-blue-800 via-blue-600 to-blue-950" />
        <span className="text-gray-700">Contract Requirements Submitted</span>
      </li>
      <li className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faCheck} className="z-10  contract-icon w-4 h-4 text-white bg-gradient-to-br from-blue-800 via-blue-600 to-blue-950" />
        <span className="text-gray-700">Contract in Progress</span>
      </li>
      <li className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faCheck} className="z-10 contract-icon w-4 h-4 bg-gradient-to-br from-red-600 via-red-800 to-red-800 text-white" />
        <span className="text-gray-700">Contract Closure</span>
      </li>
    </ul>
</div>


      {/* Contract Support */}
          <div className=" pt-4"> 
      <div className='flex items-center justify-around '>
        <h3 className="gradient-text font-semibold mb-2">Contract Support</h3>
       <span className="span h-[1px] lg:w-[50%] mb-1 "></span>
        <FontAwesomeIcon  className='w-[10px] mb-1' icon={faAngleUp} />
        </div>

        
       
        <div className="p-3 mb-2 border border-gray-300 rounded-lg">
          <h4 className="gradient-text font-semibold text-sm">Payment Protection</h4>
          <FontAwesomeIcon icon={faShieldHeart} />
          <p className="text-gray-600 text-xs">
            Money Is Being Held In Escrow Until Successful Delivery Of The Contract
          </p>
        </div>

 
        <div className="p-3 border border-gray-300 rounded-lg">
          <h4 className="gradient-text font-semibold text-sm">Need Help With This Contract?</h4>
          <p className="text-gray-600 text-xs">
            We Are Always Here For You
          </p>
         <button className="w-full py-2 mt-5 text-white font-semibold rounded-full bg-gradient-to-r from-blue-600 to-red-500 shadow-md hover:from-blue-700 hover:to-red-600">
          Visit Help Disk
        </button>
        </div>
      </div>
    </div>
  );
};


