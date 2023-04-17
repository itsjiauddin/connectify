import Link from "next/link";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "@/features/auth/authSlice";
import { toggleMode } from "@/features/mode/modeSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);

  return (
    <div className="flex justify-between items-center bg-primary-1 shadow-md rounded-sm px-4 py-2 dark:bg-secondary-1">
      <div className="flex items-center space-x-4">
        <Link href={`/`}>
          <h1 className="text-h1 font-bold">Connectify</h1>
        </Link>
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-primary-2 px-4 py-2 rounded-full dark:bg-secondary-2"
        />
      </div>
      <div className="flex items-center space-x-10">
        <div onClick={() => dispatch(toggleMode())} className="cursor-pointer">
          {mode === "dark" ? (
            <MdLightMode size={24} />
          ) : (
            <MdOutlineDarkMode size={24} />
          )}
        </div>
        <Link href={`/createpost`}>
          <FiEdit size={24} />
        </Link>
        <button
          onClick={() => dispatch(logout())}
          className="bg-primary-3 px-4 py-2 rounded-md text-primary-1"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
