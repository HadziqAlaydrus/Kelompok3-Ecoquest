import React, { Profiler } from 'react'

const team = [
  {
    title: "Nama Lengkap",
  },
  {
    title: "Email",
  },
  {
    title :"No. Telp/HP",
  },
  {
    title : "Alamat",
  },
  {
    tp : "Tanggal Penjemputan",
  },
  {
    wp : "Waktu Penjemputan",
  },
  {
    ufs : "Upload Foto Sampah",
  },
];
const CardForm = () => {
  
  return (
    <section className='max-w-screen p-14 bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 pt-36 '>
      <div className='bg-gray-300 h-screen grid grid-cols-2'>
        {team.slice(0,4).map((item, index)=> (
          <div
          key={index}
          className='flex justify-between p-10'
          >
            <h2 className="text-left text-black font-bold text-[20px] md:mt-5 p-10">{item.title}</h2>
            
          </div>
        ))}
        <div className="col-span-2 flex flex-wrap justify-center  ">
          {team.slice(4).map((item, index) => (
            <div
            key={index + 4}
            className="p-10"
            >
              <h2>{item.tp}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardForm