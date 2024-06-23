import React, { useState } from "react";
import axios from "axios";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import InputMask from "react-input-mask";

const CardForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    no_telp: '',
    alamat: '',
    tanggal_pengambilan:'',
    waktu_pengambilan:'',
    jenis_sampah:'',
    berat_sampah:''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'no_telp') {
      const numericValue = value.replace(/[^\d+]/g, '');
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://3.107.21.244:3000/pickup', formData);
      console.log(response.data);
      setTimeout(()=> {
        window.location.reload();
      }, 1000);
      

    }catch (error){
      console.error('There was an error submitting the form!', error)
    }
  }

  useEffect(() => {
    aos.init({
      duration: 1200, // Durasi animasi dalam milidetik
      easing: 'ease-in-out', // Jenis easing untuk animasi
      once: true, // Animasi hanya berjalan sekali
      delay: 100, // Penundaan sebelum animasi dimulai dalam milidetik
    });
  }, []);

  return (
    <section className="max-w-screen p-14 bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 pt-36 ">
      
      <div className="bg-gray-100 h-fit rounded-[50px] p-10 text-black " data-aos="fade-up">
        <h1 className="font-bold text-5xl bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 text-center text-transparent bg-clip-text mb-20">
          Request Pick Up
        </h1>
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 w-fit mx-auto ">
          <div className="flex">
            <div className=" flex flex-col gap-5">
              <label className=" text-black font-bold text-[20px]">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className="border shadow-lg border-black bg-white font-thin rounded-lg mx-auto w-80 p-1"
                placeholder="Nama"
                required
              />

              <label className=" text-black font-bold text-[20px]">
                No. Telp/HP
              </label>
              <input
                mask="+62 999-9999-9999"
                maskChar={null}
                name="no_telp"
                value={formData.no_telp}
                onChange={handleChange}
                className="border shadow-lg border-black bg-white font-thin rounded-lg mx-auto w-80 p-1"
                placeholder="Nomor yang dapat dihubungi"
                required
                maxLength={13}
              />
              <label className=" text-black font-bold text-[20px]">
                Alamat Lengkap
              </label>
              <input
                type="text"
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                className="border shadow-lg border-black bg-white font-thin rounded-lg mx-auto w-80 p-1"
                placeholder="Alamat Detail"
                required
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
                  name="tanggal_pengambilan"
                  value={formData.tanggal_pengambilan}
                  onChange={handleChange}
                  className="border shadow-lg  border-black font-thin rounded-lg  w-80 p-1"
                  required
                />
                <label className=" text-black font-bold text-[20px]">
                  Waktu Pengambilan
                </label>
                <select className="border shadow-lg border-black bg-white font-thin rounded-lg  w-80 p-1" 
                required
                name="waktu_pengambilan" 
                value={formData.waktu_pengambilan}
                onChange={handleChange}>
                  
                  <option value="">Pilih Waktu</option>
                  <option value="Pagi">Pagi</option>
                  <option value="Sore">Sore</option>
                </select>
              </div>
              <div className="flex flex-col pl-10  -mt-10">
                <h2 className="border rounded-lg border-black p-2 w-fit">
                  Jenis Sampah yang akan di Pick Up
                </h2>
                <div className="flex gap-5 mt-5 ">
                  <input 
                  type="radio" 
                  name="jenis_sampah" 
                  value="organik" 
                  checked={formData.jenis_sampah === 'organik'}
                  onChange={handleChange}
                  required
                  />
                  <label>Organik</label>
                  <input type="radio" 
                  name="jenis_sampah" 
                  value="non-organik"
                  checked={formData.jenis_sampah === 'non-organik'}
                  onChange={handleChange}
                  required
                  />
                  <label>Non - Organik</label>
                </div>

                <label className=" text-black font-bold text-[20px] mt-5">
                  Berat Sampah
                </label>
                <input
                  type="text"
                  name="berat_sampah"
                  value={formData.berat_sampah}
                  onChange={handleChange}
                  className="border shadow-lg border-black bg-white font-thin rounded-lg mx-auto w-80 p-1"
                  placeholder="Berat Sampah (G, KG)"
                  required
                />
              
              </div>
            </div>

            <div className="absolute  top-0 bottom-0 left-0 bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 w-2"></div>
          </div>
        </div>
        <button type="submit" className="flex  mx-auto border border-black shadow-lg rounded-lg px-10 py-3 my-5  font-bold">
          Send
        </button>
        </form>
      </div>
    </section>
  );
};

export default CardForm;
