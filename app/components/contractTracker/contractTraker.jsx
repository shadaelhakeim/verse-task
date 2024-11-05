// components/ContractTracker.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faFileAlt,faAngleUp } from '@fortawesome/free-solid-svg-icons';
import "./contractTraker.css"

export default function ContractTracker() {
  return (
      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 mb-6">
          <div className='flex items-center justify-around '>
      <h2 className="text-lg font-semibold gradient-text mr-3 ">
                  Contract Tracker</h2>
              <span className="span h-[1px] lg:w-[75%] "></span>
              <FontAwesomeIcon  className='w-[15px]' icon={faAngleUp} />
              </div>
      <div className="space-y-4">

        {/* Contract Started */}
        <div className="flex items-center justify-between p-4  border-b-[1px] border-gray-200">
          <div className=" flex items-center space-x-3">
            <div className=' gradient-text'>
                          <FontAwesomeIcon icon={faFileAlt} size='sm' className=" gradient-border contract-icon w-6 h-6 border text" />
                          </div>
            <div>
              <p className="traker-p text-md font-medium text-gray-500 ">
                Your Contract Started With &lt;V-Client Name&gt;
              </p>
            </div>
          </div>
                  <div>
                        <span className=" dates text-xs text-gray-500">09-Sep-2023 05:45 PM</span>
                   <a href="#" className="text-xs ml-5 text-blue-600 underline gradient-text">View Requirements</a>
                </div>
        </div>

        {/* Funds Held in Escrow */}
        <div className="flex items-center justify-between p-4  border-b-[1px] border-gray-200">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faCheck} className="contract-icon w-6 h-6 border border-gray-500" />
            <p className="traker-p  text-md font-medium text-gray-500">
              Contract Funds Are Being Held in Escrow
            </p>
          </div>
          <span className=" dates text-xs text-gray-500">11-Sep-2024 11:35 AM</span>
        </div>

        {/* Delivery Submitted */}
        <div className="flex items-center justify-between p-4   border-b-[1px] border-gray-200">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faCheck} className=" contract-icon w-6 h-6 border border-gray-500" />
            <p className=" traker-p text-md font-medium text-gray-500">
              You Submitted a Delivery to &lt;V-Client Name&gt;
            </p>
          </div>
          <span className="dates text-xs text-gray-500">11-Sep-2024 11:35 AM</span>
        </div>

        {/* Delivery Declined */}
        <div className="flex items-center justify-between p-4   border-b-[1px] border-gray-200">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faTimes} className=" contract-icon w-6 h-6 border border-gray-500" />
            <p className="traker-p text-md font-medium text-gray-500">
              &lt;V-Client Name&gt; Declined The Delivery
            </p>
          </div>
          <span className="traker-p dates  text-xs text-gray-500">11-Sep-2024 02:00 PM</span>
        </div>

        {/* Another Delivery Submitted */}
        <div className="flex items-center justify-between p-4   border-b-[1px] border-gray-200">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faCheck} className=" contract-icon w-6 h-6 border border-gray-500" />
            <p className=" traker-p text-md font-medium text-gray-500">
              You Submitted a Delivery to &lt;V-Client Name&gt;
            </p>
          </div>
          <span className="dates text-xs text-gray-500">12-Sep-2024 07:45 PM</span>
        </div>

        {/* Contract Cancelled */}
        <div className="flex items-center justify-between p-4   border-b-[1px] border-gray-200">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faTimes} className=" contract-icon w-6 h-6 border border-gray-500" />
            <p className=" traker-p text-md font-medium text-gray-500">
              Your Contract Was Cancelled By &lt;V-Client Name&gt;
            </p>
          </div>
          <span className="dates text-xs text-gray-500">12-Sep-2024 08:15 PM</span>
        </div>

      </div>
    </div>
  );
}
