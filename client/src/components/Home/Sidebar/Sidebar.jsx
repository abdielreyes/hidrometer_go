import {
  BiArrowFromRight,
  BiHomeAlt,
  BiUserVoice,
  BiLogOut,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const menus = [
    {
      title: "Home",
      to: "/home",
      icon: <BiHomeAlt size="1.5em" />,
    },
    {
      title: "Usuarios",
      to: "/users",
      icon: <BiUserVoice size="1.5em" />,
    },
    {
      title: "Salir",
      to: "/logout",
      icon: <BiLogOut size="1.5em" />,
    },
  ];
  return (
    <div
      className={`${
        open ? "w-72" : "w-24 "
      } duration-300 relative bg-blue-900 h-full p-5 pt-8`}
    >
      <BiArrowFromRight
        className={`absolute  cursor-pointer -right-6 top-9  bg-white p-2 hover:bg-blue-900 hover:text-white transition-colors ${
          !open && "rotate-180 "
        } duration-300`}
        size="3em"
        onClick={() => setOpen(!open)}
      />
      <div className=" flex gap-x-4 items-center text-white">
        <img src="/water-white.png" className={` cursor-pointer w-11 h-11`} />
        <h1
          className={`font-bold text-xl duration-100 ${!open ? "scale-0" : ""}`}
        >
          HidroMeter
        </h1>
      </div>
      <ul className="pt-6 ">
        {menus.map((menu, index) => {
          return (
            <li
              key={menu.toString()}
              className=" flex items-center  cursor-pointer text-white hover:bg-white hover:text-black"
            >
              <NavLink to={menu.to}>
                <span className="flex items-center p-4 gap-x-4">
                  {menu.icon}
                  <span className={`${open ? "" : "hidden"}`}>
                    {menu.title}
                  </span>
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
