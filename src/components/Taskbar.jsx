import React from "react";
import { CiSearch } from "react-icons/ci";
//consider adding the genre feature here
const Taskbar = () => {
    return(
        <>
        <div className="text-[#C9D4F2] bg-[#26273C] grid grid-cols-3 items-center p-4">
        <a>logo</a>
        <a href="link" className="hover:text-white text-center justify-self-center">Search</a>
        <div className="flex gap-4 justify-end ">
        <a href="link" className="hover:text-white">Home</a>
        <a href="link" className="hover:text-white">login</a>
        <a href="link" className="hover:text-white">sign up</a>
        </div>
        </div>
        </>
    )

};

export default Taskbar;