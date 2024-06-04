import React from "react";

const CardForm = () => {
  return (
    <section className="max-w-screen p-14 bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 pt-36 ">
      <div className="bg-gray-100 h-fit rounded-[50px] p-10 ">
        <h1 className="font-bold text-5xl bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 text-center text-transparent bg-clip-text mb-20">
          Request Pick Up
        </h1>
        <div className="grid grid-cols-2 ml-3 ">
          <div className="flex ml-40">
            <div className=" flex flex-col gap-5">
              <label className=" text-black font-bold text-[20px]">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="border shadow-lg border-black font-thin rounded-lg mx-auto w-80 p-1"
              />
              <label className=" text-black font-bold text-[20px]">Email</label>
              <input
                type="text"
                className="border shadow-lg border-black font-thin rounded-lg mx-auto w-80 p-1"
              />
              <label className=" text-black font-bold text-[20px]">
                No. Telp/HP
              </label>
              <input
                type="text"
                className="border shadow-lg border-black font-thin rounded-lg mx-auto w-80 p-1"
              />
              <label className=" text-black font-bold text-[20px]">
                Alamat Lengkap
              </label>
              <input
                type="text"
                className="border shadow-lg border-black font-thin rounded-lg mx-auto w-80 p-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 relative">
            <div className="flex flex-col gap-20">
              <div className="border-l-2 pl-10  flex flex-col gap-5">
                <label className=" text-black font-bold text-[20px]">
                  Tanggal Pengambilan
                </label>
                <input
                  type="text"
                  className="border shadow-lg border-black font-thin rounded-lg mx-auto w-80 p-1"
                />
                <label className=" text-black font-bold text-[20px]">
                  Waktu Pengambilan
                </label>
                <input
                  type="text"
                  className="border shadow-lg border-black font-thin rounded-lg mx-auto w-80 p-1"
                />
                <label className=" text-black font-bold text-[20px]">
                  Upload Foto Sampah
                </label>
                <input
                  type="file"
                  className="border shadow-lg border-black font-thin rounded-lg mx-auto w-80 p-1"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h2 className="border rounded-lg border-red-400 p-2 w-fit">
                  Jenis Sampah yang akan di Pick Up
                </h2>
                <div className="flex gap-5 mt-3">
                  <input type="checkbox" className="z"/>
                  <label className="">Organik</label>
                  <input type="checkbox" />
                  <label>Non - Organik</label>
                </div>
              </div>
            </div>

            <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 w-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardForm;
