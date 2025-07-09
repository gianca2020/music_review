import React from "react";

const Feature = () => {
    return (
        <>
        {/* i might just remove the A chance to log your opinon thing */}
        <div className="items-center text-2xl sanserif font-bold text-center p-4 text-gray-500">
        <h1>A chance to log your opions</h1>
        </div>
        <div className="text-center bg-[#0A121F] text-white px-6 py-8 max-w-2xl mx-auto border rounded-2xl">
        <h3 className="text-[32px]">Be an annoying music fan</h3>
        <h4 className="text-[21px] text-[#A1CFFF]">Web app for my music taste</h4>
        <div className="text-[#A1CFFF]">
        <div className="text-[18px] font-semibold mt-4 grid grid-cols-2 gap-4">
        <a>Discover new music</a>
        <a>Share with friends</a>
        <a className="col-span-2 text-center">idc</a>
        </div>
        </div>
        </div>
        </>
    )
}

export default Feature;