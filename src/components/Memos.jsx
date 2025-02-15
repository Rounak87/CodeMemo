import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pencil,Trash2,Eye,Copy } from 'lucide-react';
import { deleteMemo, updateMemo } from "../Redux/MemoSlice";


const Memos = () => {

  const memos=useSelector((state)=>state.memo.memos);
  const dispatch=useDispatch();
  const [searchTerm,setsearchTerm]=useState("");
  const filterData=memos.filter((memo)=>memo.title.toLowerCase().includes(searchTerm.toLowerCase()));
  
  



  return (
    <div>
      <div className="flex justify-center text-3xl m-2">
        <h1>All Memos</h1>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search Snippet"
          value={searchTerm}
          onChange={(e)=>setsearchTerm(e.target.value)}
          className="border outline-none border-gray-400 py-3 pl-4  mt-2 rounded-2xl w-[300px] sm:w-[800px] bg-gray-800 text-white focus:outline-none "
        />
      </div>
      <div className="flex justify-center mt-2">
        <div
          className="card 
       sm:w-[800px]  mt-2 w-[300px]"
        >
          <div className="allcards flex gap-2 flex-col   ">

            {filterData.length>0?(filterData.map((memo)=>(
              <div
              key={memo?._id}  className="border border-gray-600 p-2 sm:flex rounded-xl sm:justify-between place-items-start bg-gray-800 ">
              <div>
                <h4 className="font-semibold">{memo.title}</h4>
                <h5 className="font-normal line-clamp-3  w-[250px] sm:w-[470px] text-gray-300">{memo.content} </h5>
              </div>
              <div className="flex gap-2 ">
                <button  className="cursor-pointer border border-gray-500 bg-gray-700 hover:bg-gray-600 p-1 rounded-lg flex items-center justify-center">
                <Pencil size={15} 
                
                strokeWidth={1}
                className="text-gray-300 sm:size-5 hover:text-white"
                />
                
                </button>
                <button  className="cursor-pointer border border-gray-500 bg-gray-700 hover:bg-gray-600 p-1 rounded-lg flex items-center justify-center">
                <Trash2 size={15} 
                
                strokeWidth={1}
                className="text-gray-300 sm:size-5 hover:text-white"
                />
                
                </button>
                <button className="cursor-pointer border border-gray-500 bg-gray-700 hover:bg-gray-600 p-1 rounded-lg flex items-center justify-center">
                <Eye size={15} 
                
                strokeWidth={1}
                className="text-gray-300 sm:size-5 hover:text-white"
                />
                
                </button>
                <button className="cursor-pointer border border-gray-500 bg-gray-700 hover:bg-gray-600 p-1 rounded-lg flex items-center justify-center">
                <Copy size={15} 
                
                strokeWidth={1}
                className="text-gray-300 sm:size-5 hover:text-white"
                />
                
                </button>
               
              </div>
            </div>
            ))):(
              <div className="text-2xl text-center w-full text-chileanFire-500">
                No Snippets Found
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memos;
