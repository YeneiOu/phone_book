import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Avatar from "react-avatar";

const View = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();
  useEffect(() => {
    // fetch ดูข้อมูล
    //data[0] ดูข้อมูลในตัวมันเอง
    axios
      .get(`http://localhost:3001/api/get/${id}`)
      .then((response) => setUser({ ...response.data[0] }));
  }, [id]);
  return (
    <div className="bg-[#111827] w-full  h-[100vh]">
      <div className="container text-white w-full mx-auto px-4">
        <h1 className=" text-4xl underline  pt-4">ดูข้อมูล</h1>

        <div className="w-96  mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div className="flex items-center justify-start">
           <h2 className="text-white font-bold text-2xl tracking-wide">ลำดับ {id}</h2>
            
          </div>
          <div className="mt-6 w-fit mx-auto">
            <Avatar  facebookId="100008343750912" className="rounded-full w-28" />
          </div>

          <div className="mt-5 ">
            <h2 className="text-gray-400 font-bold text-lg tracking-wide">
                ชื่อ:
            </h2>
            <p className="text-white font-bold text-xl tracking-wide">{user.name}</p>
          </div>
          <div className="mt-4 ">
            <h2 className="text-gray-400 font-bold text-lg tracking-wide">
              อายุ:
            </h2>
            <p className="text-white font-bold text-xl tracking-wide">{user.age}</p>
          </div>
          <div className="mt-4 ">
            <h2 className="text-gray-400 font-bold text-lg tracking-wide">
              เพศ:
            </h2>
            <p className="text-white font-bold text-xl tracking-wide">{user.gender}</p>
          </div>
          <div className="mt-4 ">
            <h2 className="text-gray-400 font-bold text-lg tracking-wide">
              เบอร์โทร:
            </h2>
            <p className="text-white font-bold text-xl tracking-wide">{user.phone}</p>
          </div>
          <div className="mt-4 ">
            <h2 className="text-gray-400 font-bold text-lg tracking-wide">
              ตำแหน่ง:
            </h2>
            <p className="text-white font-bold text-xl tracking-wide">{user.position}</p>
          </div>
          <div className="mt-4  mb-6">
            <h2 className="text-gray-400 font-bold text-lg tracking-wide">
             สเตตัส:
            </h2>
            <p className="text-white font-bold text-xl tracking-wide">{user.status}</p>
          </div>
          
            <Link to="/">
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full">กลับ</button>
            </Link>
        
          </div>
        </div>
      </div>
  
  );
};

export default View;
