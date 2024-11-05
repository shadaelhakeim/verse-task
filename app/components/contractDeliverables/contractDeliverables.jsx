import React from "react";
import { faAngleUp, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages,  faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faVideo, faHeadphonesSimple, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import "./contractDelivery.css"
const ContractDeliverables = () => {
  return (
      <div className="bg-white rounded-lg shadow py-6 px-2 mt-5">    
      <div className='flex items-center justify-around '>
      <h2 className="text-lg font-semibold text-blue-800 mr-3 ">
                  Contract Deliverables</h2>
       <span className="span h-[1px] lg:w-[75%] "></span>
        <FontAwesomeIcon  className='w-[15px] none hidden lg:block' icon={faAngleUp} />
        </div>
        
          <div className="flex justify-between "> 
              <FontAwesomeIcon className='w-[20px] border rounded-full p-4 mr-5' icon={faFileInvoice}/>
      <div className="space-y-4 p-3 border border-gray-200 rounded w-full ">
        <div className="flex justify-between items-center border-b border-gray-300  p-2">
                      <h3 className="text-blue-800 title">Delivery-1</h3>   
                      <div className="flex items-center">
                          <p className="text-gray-500 dates">09-Sep-2023 05:45 PM</p>
                          <button className="btn">Declined</button>
                      </div>           
       </div>
    <p className="text-gray-500 desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quibusdam ipsum nisi ut molestiae animi veritatis iusto architecto impedit placeat. Sunt optio, atque quaerat inventore cupiditate provident quis? Eos, aliquid.</p>

    <div className='flex items-center'>
      <p className="border border-gray-300 rounded-2xl p-[0.3rem] w-[105px] flex justify-around text-gray-500">
                  8 Files <FontAwesomeIcon  className='w-[15px] text-blue-500' icon={faAngleUp} /> </p>
              <span className=" h-[1px] w-[90%] bg-slate-300 ml-3 "></span>
              
                  </div>
                  
<div className="cards grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
    <div className="card1 colored ">
        <FontAwesomeIcon className="menu-card" icon={faEllipsisVertical} />
        <FontAwesomeIcon className="w-9 text-white" icon={faImages} />
    </div>
    <div className="card1 colored ">
        <FontAwesomeIcon className="menu-card" icon={faEllipsisVertical} />
        <FontAwesomeIcon className="w-9 text-white" icon={faVideo} />
    </div>
    <div className="card1 colored ">
        <FontAwesomeIcon className="menu-card" icon={faEllipsisVertical} />
        <FontAwesomeIcon className="w-9 text-white" icon={faHeadphonesSimple} />
    </div>
    <div className="card1 border border-gray-300 ">
        <FontAwesomeIcon className="menu-card border border-gray-300" icon={faEllipsisVertical} />
        <img className="w-9 mx-auto relative top-10" src="pdf.png" alt="pdf" />
    </div>
    <div className="card1 border border-gray-300 ">
        <FontAwesomeIcon className="menu-card border border-gray-300" icon={faEllipsisVertical} />
        <img className="w-9 mx-auto relative top-10" src="slide.png" alt="slide" />
    </div>
    <div className="card1 border border-gray-300 ">
        <FontAwesomeIcon className="menu-card border border-gray-300" icon={faEllipsisVertical} />
        <img className="w-9 mx-auto relative top-10" src="office.png" alt="word" />
    </div>
    <div className="card1 border border-gray-300 flex ">
        <FontAwesomeIcon className="menu-card border border-gray-300" icon={faEllipsisVertical} />
        <img className="w-9 mx-auto relative top-10" src="excel.png" alt="excel" />
    </div>
    <div className="card1 border border-gray-300 ">
        <FontAwesomeIcon className="menu-card border border-gray-300" icon={faEllipsisVertical} />
        <FontAwesomeIcon className="w-9 text-blue-400" icon={faFileLines} />
    </div>
</div>
       
      </div>
      </div>
    </div>
  );
};

export default ContractDeliverables;
