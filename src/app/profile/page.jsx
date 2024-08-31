import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { FaAngleRight } from "react-icons/fa";
import Avatar from "../../asset/image/avatar.jpg";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { MdBusinessCenter } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { SiPrivateinternetaccess } from "react-icons/si";

const Profile = () => {
  return (
    <div className="flex">
      <div className="w-1/5 min-h-screen pt-10 pb-10 mr-10 ml-10">
        <Sidebar />
      </div>
      <div className="w-4/5 min-h-screen pt-10">
        <Header />

        {/* Path */}
        <div className="pb-5">
          <h2 className="flex items-center gap-2 font-semibold text-base">
            Employees <FaAngleRight size={20} /> Profile
          </h2>
        </div>

        {/* information */}
        <div className="flex  justify-between mr-10  pb-10 border-b ">
          <div className="flex gap-5 items-center w-full">
            <Image src={Avatar} alt="Avatar" className="w-28 h-28 rounded-xl" />
            <div className="flex flex-col gap-2 ">
              <h1 className="font-bold text-2xl">Mahmoud Fathy</h1>
              <p className="flex items-center gap-2 text-base font-light text-black ">
                <MdBusinessCenter size={24} color="#666" />
                Front-end Developer
              </p>
              <p className="flex items-center gap-2 text-base font-light text-black">
                <HiOutlineMail size={24} color="#666" />
                MahmoudFathy1997@hotmail.com
              </p>
            </div>
          </div>
          <div className="flex  w-full self-end">
            <button className="bg-black opacity-95 p-5 pt-3 pb-3 rounded-xl text-white flex item-center gap-3">
              <CiEdit size={24} color="#fff" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* information Form */}
        <div className="pt-7">
          {/* List Tabbar */}
          <div className="flex items-center gap-8 border-b w-fit">
            <h3 className="text-red-500 flex items-center gap-2 pb-3 border-b-2 border-red-500">
              <FaUser size={20} className="text-red-500" /> Personal Information
            </h3>
            <h3 className="flex items-center gap-2 pb-3">
              <MdBusinessCenter size={24} color="#888" />
              Professional Information
            </h3>
            <h3 className="flex items-center gap-2 pb-3">
              <IoDocumentText size={24} color="#888" />
              Documents
            </h3>
            <h3 className="flex items-center gap-2 pb-3">
              <SiPrivateinternetaccess size={24} color="#888" />
              Account Access
            </h3>
          </div>

          {/* Personal Information */}
          <div className="flex flex-col gap-5 pt-3 mr-10">
            <div className="flex justify-between gap-5">
              <div className="w-2/4 border-b pb-2 flex flex-col gap-2">
                <span className="text-gray-400 text-sm font-light select-none">
                  First Name
                </span>
                <h3 className="text-base font-light">Mahmoud</h3>
              </div>
              <div className="w-2/4 border-b pb-2 flex flex-col gap-2">
                <span className="text-gray-400 text-sm font-light select-none">
                  Last Name
                </span>
                <h3 className="text-base font-light">Fathy</h3>
              </div>
            </div>

            <div className="flex justify-between gap-5">
              <div className="w-2/4 border-b pb-2 flex flex-col gap-2">
                <span className="text-gray-400 text-sm font-light select-none">
                  Mobile Number
                </span>
                <h3 className="text-base font-light">01001387292</h3>
              </div>
              <div className="w-2/4 border-b pb-2 flex flex-col gap-2">
                <span className="text-gray-400 text-sm font-light select-none">
                  Email Address
                </span>
                <h3 className="text-base font-light">
                  MahmoudFathy1997@hotmail.com
                </h3>
              </div>
            </div>

            <div className="flex justify-between gap-5">
              <div className="w-2/4 border-b pb-2 flex flex-col gap-2">
                <span className="text-gray-400 text-sm font-light select-none">
                  Date of Birth
                </span>
                <h3 className="text-base font-light">April 28, 1997</h3>
              </div>
              <div className="w-2/4 border-b pb-2 flex flex-col gap-2">
                <span className="text-gray-400 text-sm font-light select-none">
                  Martial Status
                </span>
                <h3 className="text-base font-light">Single</h3>
              </div>
            </div>

            <div className="flex justify-between gap-5">
              <div className="w-2/4 border-b pb-2 flex flex-col gap-2">
                <span className="text-gray-400 text-sm font-light select-none">
                  Gender
                </span>
                <h3 className="text-base font-light">Male</h3>
              </div>
              <div className="w-2/4 border-b pb-2 flex flex-col gap-2">
                <span className="text-gray-400 text-sm font-light select-none">
                  Nationality
                </span>
                <h3 className="text-base font-light">Egypt</h3>
              </div>
            </div>

            <div className="flex justify-between gap-5">
              <div className="w-2/4 border-b pb-2 flex flex-col gap-2">
                <span className="text-gray-400 text-sm font-light select-none">
                  Address
                </span>
                <h3 className="text-base font-light">Shibin El-Qanater</h3>
              </div>
              <div className="w-2/4 border-b pb-2 flex flex-col gap-2">
                <span className="text-gray-400 text-sm font-light select-none">
                  City
                </span>
                <h3 className="text-base font-light">Qalyubia</h3>
              </div>
            </div>

            <div className="flex justify-between gap-5">
              <div className="w-2/4 flex flex-col gap-2">
                <span className="text-gray-400 text-sm font-light select-none">
                  State
                </span>
                <h3 className="text-base font-light">Qalyubia</h3>
              </div>
              <div className="w-2/4 flex flex-col gap-2">
                <span className="text-gray-400 text-sm font-light select-none">
                  Zip Code
                </span>
                <h3 className="text-base font-light">13891</h3>
              </div>
            </div>

            <div className="flex justify-between gap-5">
              <div className="w-2/6 flex flex-col gap-2">
                <span className="text-gray-400 text-sm font-light select-none">
                  Work's hours
                </span>
                <h3 className="text-base font-light">180 hours</h3>
              </div>
              <div className="w-2/6 flex flex-col gap-2">
                <span className="text-gray-400 text-sm font-light select-none">
                  Salary/hour
                </span>
                <h3 className="text-base font-light">300 EGP</h3>
              </div>
              <div className="w-2/6 flex flex-col gap-2">
                <span className="text-red-500 text-sm font-bold select-none">
                  Total Salary
                </span>
                <h3 className="text-base font-light">54000 EGP</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
