import React from "react";

const CardForm = () => {
  return (
    <section className="max-w-screen p-14 bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 pt-36 ">
      <div className="bg-gray-100 h-fit rounded-[50px] p-10 ">
        <h1 className="font-bold text-5xl bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 text-center text-transparent bg-clip-text mb-20">
          Request Pick Up
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-fit mx-auto ">
          <div className="flex">
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

          <div className="flex relative">
            <div className="flex flex-col gap-20">
              <div className=" pl-10  flex flex-col gap-5">
                <label className=" text-black font-bold text-[20px]">
                  Tanggal Pengambilan
                </label>
                <input
                  type="date"
                  className="border shadow-lg border-black font-thin rounded-lg  w-80 p-1"
                />
                <label className=" text-black font-bold text-[20px]">
                  Waktu Pengambilan
                </label>
                <input
                  type="time"
                  className="border shadow-lg border-black font-thin rounded-lg  w-80 p-1"
                />
              </div>
              <div className="flex flex-col pl-10  ">
                <h2 className="border rounded-lg border-black p-2 w-fit">
                  Jenis Sampah yang akan di Pick Up
                </h2>
                <div className="flex gap-5 mt-5">
                  <input type="checkbox" className="z" />
                  <label className="">Organik</label>
                  <input type="checkbox" />
                  <label>Non - Organik</label>
                </div>
                
                  <h2 className="border rounded-lg border-black p-2 w-fit mt-2">
                    Berat Sampah
                  </h2>

                  <div className="flex gap-2 mt-2 ml-5">
                    <input type="checkbox" className="" />
                    <label className="">1Kg - 5kg</label>
                    <input type="checkbox" />
                    <label>5Kg - 10Kg</label>
                    <input type="checkbox" />
                    <label>10Kg - 20Kg</label>
                    <input type="checkbox" />
                    <label>Belum ditimbang</label>
                  </div>
               
              </div>
            </div>

            <div className="absolute  top-0 bottom-0 left-0 bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 w-2"></div>
          </div>
          
        </div>
        <button className="flex  mx-auto border border-black shadow-lg rounded-lg px-10 py-3 my-5  font-bold">Send</button>
      </div>
    </section>
  );
};

export default CardForm;
