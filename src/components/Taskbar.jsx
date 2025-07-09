import React from "react";
//consider adding the genre feature here
const Taskbar = () => {
    return(
        <>
        <div className="text-[#C9D4F2] bg-[#26273C] grid grid-cols-2 items-center p-4">
        <a>logo</a>
        <div className="flex gap-4 justify-end ">
        <a href="link" className="hover:text-white">Home</a>
        <a href="link" className="hover:text-white">Search</a>
        <a href="link" className="hover:text-white">login</a>
        <a href="link" className="hover:text-white">sign up</a>
        </div>
        </div>
        </>
    )

};

export default Taskbar;