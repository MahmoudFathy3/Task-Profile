import Image from "next/image";
import logo from "../../asset/image/e7003b653626b4899b379c517657a039.png";
import { CiDollar } from "react-icons/ci";
import { LiaWalletSolid } from "react-icons/lia";
import { FaAngleDown, FaRegCalendarCheck } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="border border-gray-200 min-h-full rounded-3xl w-11/12 m-auto">
      <div className="items-center justify-center w-4/5 m-auto select-none">
        <Image src={logo} alt="Picture logo" width={"100%"} height={"100%"} />
      </div>

      <div className="pt-16">
        <ul className="flex flex-col gap-10 ">
          <li className="text-lg font-semibold flex items-center gap-5 cursor-pointer w-full pl-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26px"
              height="26px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M2 5a2 2 0 0 1 2-2h6v18H4a2 2 0 0 1-2-2zm12-2h6a2 2 0 0 1 2 2v5h-8zm0 11h8v5a2 2 0 0 1-2 2h-6z"
              />
            </svg>
            Dashboard
          </li>
          <li className="text-lg font-semibold flex items-center gap-5 cursor-pointer w-full p-3 bg-red-100 text-red-500 border-l-4 border-red-500 pl-20 rounded-r-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26px"
              height="26px"
              viewBox="0 0 36 36"
            >
              <path
                fill="currentColor"
                d="M18.42 16.31a5.7 5.7 0 1 1 5.76-5.7a5.74 5.74 0 0 1-5.76 5.7m0-9.4a3.7 3.7 0 1 0 3.76 3.7a3.74 3.74 0 0 0-3.76-3.7"
              />
              <path
                fill="currentColor"
                d="M18.42 16.31a5.7 5.7 0 1 1 5.76-5.7a5.74 5.74 0 0 1-5.76 5.7m0-9.4a3.7 3.7 0 1 0 3.76 3.7a3.74 3.74 0 0 0-3.76-3.7m3.49 10.74a20.6 20.6 0 0 0-13 2a1.77 1.77 0 0 0-.91 1.6v3.56a1 1 0 0 0 2 0v-3.43a18.92 18.92 0 0 1 12-1.68Z"
              />
              <path
                fill="currentColor"
                d="M33 22h-6.7v-1.48a1 1 0 0 0-2 0V22H17a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1m-1 10H18v-8h6.3v.41a1 1 0 0 0 2 0V24H32Z"
              />
              <path
                fill="currentColor"
                d="M21.81 27.42h5.96v1.4h-5.96zM10.84 12.24a18 18 0 0 0-7.95 2A1.67 1.67 0 0 0 2 15.71v3.1a1 1 0 0 0 2 0v-2.9a16 16 0 0 1 7.58-1.67a7.3 7.3 0 0 1-.74-2m22.27 1.99a17.8 17.8 0 0 0-7.12-2a7.5 7.5 0 0 1-.73 2A15.9 15.9 0 0 1 32 15.91v2.9a1 1 0 1 0 2 0v-3.1a1.67 1.67 0 0 0-.89-1.48m-22.45-3.62v-.67a3.07 3.07 0 0 1 .54-6.11a3.15 3.15 0 0 1 2.2.89a8.2 8.2 0 0 1 1.7-1.08a5.13 5.13 0 0 0-9 3.27a5.1 5.1 0 0 0 4.7 5a7.4 7.4 0 0 1-.14-1.3m14.11-8.78a5.17 5.17 0 0 0-3.69 1.55a8 8 0 0 1 1.9 1a3.14 3.14 0 0 1 4.93 2.52a3.09 3.09 0 0 1-1.79 2.77a7 7 0 0 1 .06.93a8 8 0 0 1-.1 1.2a5.1 5.1 0 0 0 3.83-4.9a5.12 5.12 0 0 0-5.14-5.07"
              />
            </svg>
            Employees
            <FaAngleDown size={24} className="text-red-500 ml-10" />
          </li>
          <div className="dropMenu">
            <ul className="pl-32 flex flex-col gap-5">
              <li className="flex gap-3 items-center text-gray-500">
                <CiUser size={25} className="text-gray-500" /> Profile
              </li>
              <li className="flex gap-3 items-center">
                <FaRegCalendarCheck size={25} color="#444" />
                Attendance
              </li>
              <li className="flex gap-3 items-center">
                <IoDocumentTextOutline size={25} color="#444" />
                Tasks
              </li>
            </ul>
          </div>
          <li className="text-lg font-semibold flex items-center gap-5 cursor-pointer w-full pl-20">
            <CiDollar size={26} color="#000" />
            Payroll
          </li>
          <li className="text-lg font-semibold flex items-center gap-5 cursor-pointer w-full pl-20">
            <BiTask size={26} color="#444" />
            Holidays
            <FaChevronRight size={24} color="#444" className="ml-16" />
          </li>
          <li className="text-lg font-semibold flex items-center gap-5 cursor-pointer w-full pl-20">
            <LiaWalletSolid size={26} color="#444" />
            Advanced Payment
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
