import Image from "next/image";
import Avatar from "../../asset/image/avatar.jpg";
import { RiNotificationLine } from "react-icons/ri";
const Header = () => {
  return (
    <div className="w-full pr-10 pb-10">
      <div className="flex items-center justify-end gap-9">
        <div
          className="p-3 rounded-lg cursor-pointer"
          style={{ background: "rgba(162, 161, 168, 0.1)" }}
        >
          <RiNotificationLine size={25} color="#333" />
        </div>
        <div className="w-16 h-16 rounded-full border-2 cursor-pointer">
          <Image
            src={Avatar}
            alt="Avatar"
            className="rounded-full w-16 h-16 "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
