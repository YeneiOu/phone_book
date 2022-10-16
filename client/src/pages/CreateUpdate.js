import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const initialState = {
  name: "",
  age: "",
  gender: "",
  phone: "",
  position: "",
  status: "",
};
const CreateUpdate = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [state, setState] = useState(initialState);

  const { name, age, gender, phone, position, status } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    // fetch update
    //data[0] เก็บข้อมูลในตัวมันเอง
    axios
      .get(`http://localhost:3001/api/get/${id}`)
      .then((response) => setState({ ...response.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // เช็คว่ามีข้อมูลไหม
    if (!name || !age || !gender || !phone || !position || !status) {
      toast.error("กรุณาใส่ข้อมูลในช่องต่างๆ");
    } else {
      // ถ้ามี id = เพิ่มข้อมูล post ไปหน้าเพิ่มข้อมูล นอกนั้น update
      if (!id) {
        axios
          .post("http://localhost:3001/api/post", {
            name,
            age,
            gender,
            phone,
            position,
            status,
          })
          .then(() => {
            setState({
              name: "",
              age: "",
              gender: "",
              phone: "",
              position: "",
              status: "",
            });
          })
          .catch((err) => toast.error(err.response.data, { theme: "colored" }));
        toast.success("เพิ่มข้อมูลสำเร็จ", { theme: "colored" });
      } else {
        axios
          .put(`http://localhost:3001/api/update/${id}`, {
            name,
            age,
            gender,
            phone,
            position,
            status,
          })
          .then(() => {
            setState({
              name: "",
              age: "",
              gender: "",
              phone: "",
              position: "",
              status: "",
            });
          })
          .catch((err) => toast.error(err.response.data, { theme: "colored" }));
        toast.success("เพิ่มข้อมูลสำเร็จ", { theme: "colored" });
      }

      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };

  return (
    <div className="bg-[#111827] w-full  h-[100vh]">
      <div className="container text-white w-full mx-auto px-4">
        <form className="pt-4" onSubmit={handleSubmit}>
          <h4 className="text-white text-4xl underline">เพิ่มข้อมูล</h4>
          <div className="relative z-0 mb-6 w-full group mt-4">
            <input
              type="text"
              name="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              value={name || ""}
              onChange={handleInputChange}
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ชื่อ-นามสกุล
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="number"
              name="age"
              value={age || ""}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              onChange={handleInputChange}
            />
            <label
              htmlFor="age"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              อายุ
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <label className="sr-only">Underline select</label>
            <select
              htmlFor="gender"
              name="gender"
              value={gender || ""}
              onChange={handleInputChange}
              id="underline_select"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              <option >เพศ</option>
              <option value="Male">ชาย</option>
              <option value="Female">หญิง</option>
            </select>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              name="phone"
              value={phone || ""}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              onChange={handleInputChange}
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              เบอร์โทร
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="position"
              value={position || ""}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              onChange={handleInputChange}
            />
            <label
              htmlFor="position"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ตำแหน่ง
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <label className="sr-only">Underline select</label>
            <select
              htmlFor="status"
              name="status"
              value={status || ""}
              onChange={handleInputChange}
              id="underline_select"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              <option >สเตตัส</option>
              <option value="Active">อยู่</option>
              <option value="Inactive">ไม่อยู่</option>
            </select>
          </div>

          <input
            value={id ? "อัพเดทข้อมูล" : "บันทึก"}
            type="submit"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          />

          <Link
            to="/"
            className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            <input type="button" value="กลับ" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateUpdate;
