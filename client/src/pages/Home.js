import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Home = () => {
  // เก็บเป็น array มีหลายตัว
  const [data, setData] = useState([]);

  //thenรับข้อมูล
  const loadData = async () => {
    const response = await axios.get("http://localhost:3001/api/get");
    setData(response.data);
  };
  //method confirm
  const deleteContact = (id) => {
    if (window.confirm("แน่ใจที่จะลบหรือไม่?")) {
      axios.delete(`http://localhost:3001/api/remove/${id}`);
      toast.success("ลบข้อมูลสำเร็จ", { theme: "colored" });
      setTimeout(() => loadData(), 500);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="bg-[#111827] w-full h-full pb-20">
      <div className="container text-white w-full mx-auto px-4">
        <h1 className=" text-4xl underline  pt-4">Phone Books</h1>
        <div className="information mt-5">
          <div className="add-right  w-full flex  justify-end">
            <Link
              type="button"
              to="/create"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              เพิ่มข้อมูล
            </Link>
          </div>

          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    ลำดับ
                  </th>
                  <th scope="col" className="py-3 px-6">
                    ชื่อ-นามสกุล
                  </th>
                  <th scope="col" className="py-3 px-6">
                    อายุ
                  </th>
                  <th scope="col" className="py-3 px-6">
                    เพศ
                  </th>
                  <th scope="col" className="py-3 px-6">
                    เบอร์โทร
                  </th>
                  <th scope="col" className="py-3 px-6">
                    ตำแหน่ง
                  </th>
                  <th scope="col" className="py-3 px-6">
                    สเตตัส
                  </th>
                  <th scope="col" className="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, key) => {
                  return (
                    <>
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={item.id}
                      >
                        <th
                          scope="row" 
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {key + 1}
                        </th>
                        <td className="py-4 px-6">{item.name}</td>
                        <td className="py-4 px-6">{item.age}</td>
                        <td className="py-4 px-6">{item.gender}</td>
                        <td className="py-4 px-6">{item.phone}</td>
                        <td className="py-4 px-6">{item.position}</td>
                        <td className="py-4 px-6">{item.status}</td>
                        <td className="py-4 px-6 flex gap-3 items-center justify-center">
                          <div className="button-box">
                            <Link
                              to={`/update/${item.id}`}
                              type="button"
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                              แก้ไขข้อมูล
                            </Link>
                          </div>
                          <div className="button-box">
                            <button
                              onClick={() => deleteContact(item.id)}
                              type="button"
                              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                            >
                              ลบข้อมูล
                            </button>
                          </div>
                          <div className="button-box">
                            <Link
                              to={`/view/${item.id}`}
                              type="button"
                              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                            >
                              ดูข้อมูล
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
