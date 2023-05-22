import { Link } from "react-router-dom";
export const NavLink = (props) => {
  return (
    <li>
      <Link
        to={props.to}
        className={`flex items-center gap-4 p-4 text-gray-500 hover:bg-blue-700 hover:text-white rounded-lg transition-colors font-semibold ${
          props.active ? "bg-blue-200 text-black" : ""
        }`}
      >
        {props.icon}
        {props.text}
      </Link>
    </li>
  );
};
