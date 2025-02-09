import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [Title, setTitle] = useState("");
  const [Memos, setMemos] = useState("");
  const [searchParams, setsearchParams] = useSearchParams();
  const memoId = searchParams.get("memoId");

  return (
    <div>
      <div className="flex justify-center mt-5 gap-4">
        <div>
          <input
            type="text"
            placeholder="Title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            className="border outline-none border-gray-400 py-3 pl-4 w-[200px] sm:w-[700px] mt-2 rounded-2xl bg-gray-800 text-white focus:outline-none "
          />
        </div>
        <button className=" py-3 px-1 sm:py-3 sm:px-5  m-2  rounded-xl cursor-pointer border border-gray-600  shadow-lg transition-all duration-200 bg-gray-700 sm:hover:bg-gray-800 hover:bg-gray-800 ">
          {memoId ? "Update Memo" : "Add Memo"}
        </button>
      </div>

      <div className=" flex justify-center mt-5">
        <div className="relative">
        <button className="  absolute z-10 cursor-pointer mt-4 right-4" >copy</button>
        <textarea
          value={Memos}
          onChange={(e) => setMemos(e.target.value)}
          placeholder="Enter your code here"
          rows={22}
          className="  border outline-none border-gray-400 py-3 pl-4 w-[350px] sm:w-[860px] mt-2 rounded-l bg-gray-800 text-white focus:outline-none "
        />
        </div>
      </div>

    </div>
  );
};

export default Home;
