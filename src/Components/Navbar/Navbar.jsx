import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiPlus, HiStar, HiTv,  } from "react-icons/hi2";
import logo from "../../assets/Images/logo.png"
import NavItem from "./NavItem";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const Menu = [
    {
      name: "HOME",
      icon: HiHome
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass
    },
    {
      name: "WATCH LIST",
      icon: HiPlus
    },
    {
      name: "ORIGINALS",
      icon: HiStar
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle
    },
    {
      name: "SERIES",
      icon: HiTv
    }
  ]
  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex items-center gap-8">
      <img src={logo} alt="logo" className="w-[80px] md:w-[115px] object-cover" />
      <div className="hidden md:flex items-center gap-8 ">
      {Menu.map((item, index) => <NavItem key={index} name={item.name} Icon={item.icon}></NavItem>)}
      </div>
      <div className="md:hidden flex items-center gap-8 ">
      {Menu.map((item, index) => index <3 && <NavItem key={index} name={''} Icon={item.icon}></NavItem>)}
      </div>
      <div className="md:hidden" onClick={()=> setToggle(!toggle)}>
      <NavItem name={''} Icon={HiDotsVertical}></NavItem>
      {toggle && <div className=" absolute mt-3 bg-[#121212] border-[1px] p-1 md:p-3 ">
        {Menu.map((item, index) => index >2 && <NavItem key={index} name={item.name} Icon={item.icon}></NavItem>)}
      </div>}
      </div>
    </div>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="user-logo" className="w-[40px]" />
    </div>
  );
};

export default Navbar;
