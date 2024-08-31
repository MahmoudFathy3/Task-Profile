import Image from "next/image";
import logo from "../../asset/image/e7003b653626b4899b379c517657a039.png";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center z-10 container m-auto">
      <div className="flex flex-col " style={{ width: "616px" }}>
        <div style={{ width: "300px", height: "146" }} className="m-auto">
          <Image
            src={logo}
            width={"100%"}
            height={"100%"}
            alt="Picture logo"
            className="m-auto"
          />
        </div>
        <form className="p-10 border border-gray-300 rounded-xl w-full flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <label>Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              required
              className="p-3.5 border border-gray-300 rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              className="p-3.5 border border-gray-300 rounded-lg w-full"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="bg-black bg-opacity-95 p-3.5 rounded-lg mr-8 ml-8 cursor-pointer text-white font-bold  hover:bg-red-500 transition duration-500"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
