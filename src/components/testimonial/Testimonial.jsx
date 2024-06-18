import React from "react";

function Testimonial() {
  return (
    <div className="flex justify-center items-center w-[70%] h-[70%] text-black  border border-slate-300  rounded-2xl">
      <div className=" bg-white bg-opacity-75 p-10 m-24 md:m-0 grid grid-rows-3 gap-8">
        <h1 className="text-[#006BC4] text-3xl font-bold">Testimonials</h1>
        <p>
          {" "}
          <span className="text-[#FFF852] text-5xl">“</span> Et officiis omnis
          unde suscipit rem et omnis rem laboriosam iure{" "}
          <span className="text-[#FFF852] text-5xl">”</span>
        </p>
        <p>- Melanie Watsica</p>
      </div>
    </div>
  );
}

export default Testimonial;
