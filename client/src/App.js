import DropDown from "./DropDown";

function App() {
  return (
    <div className="bg-[#111827] w-full  h-[100vh]">
      <div className="container text-white w-full mx-auto px-4">
        <h1 className=" text-4xl underline  ">Phone Books</h1>
        <div className="information mt-5">
          <div className="add-right  w-full flex justify-end">
            {/* <DropDown /> */}
            <button
              type="button"
              class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              เพิ่มข้อมูล
            </button>
          </div>

          <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    ชื่อ-นามสกุล
                  </th>
                  <th scope="col" class="py-3 px-6">
                    อายุ
                  </th>
                  <th scope="col" class="py-3 px-6">
                    เพศ
                  </th>
                  <th scope="col" class="py-3 px-6">
                    เบอร์โทร
                  </th>
                  <th scope="col" class="py-3 px-6">
                    ตำแหน่ง
                  </th>
                  <th scope="col" class="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Atiya
                  </th>
                  <td class="py-4 px-6">18</td>
                  <td class="py-4 px-6">ชาย</td>
                  <td class="py-4 px-6">0899223142</td>
                  <td class="py-4 px-6">programmer</td>
                  <td class="py-4 px-6 flex gap-3 items-center justify-center">
                    <div className="button-box">
                      <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        แก้ไขข้อมูล
                      </button>
                    </div>
                    <div className="button-box">
                      <button
                        type="button"
                        class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                      >
                        ลบข้อมูล
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="employees"></div>
      </div>
    </div>
  );
}

export default App;
