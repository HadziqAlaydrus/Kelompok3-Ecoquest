import React from "react";

const Faq = () => {
  return (
    <section id='faq'>
      <div  className="bg-transparent h-full">
        <div className="collapse collapse-arrow bg-white rounded-none">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-bold text-gray-600">
            Apa itu EcoQuest?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              EcoQuest adalah aplikasi yang didedikasikan untuk mempromosikan
              praktik berkelanjutan dan kesadaran lingkungan. Platform ini
              menyediakan ruang kerja kolaboratif bagi pengguna untuk menangani
              dan memecahkan masalah lingkungan di dunia nyata.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white rounded-none">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-bold text-gray-600">
          Bagaimana cara kerja bank sampah di EcoQuest?
          </div>
          <div className="collapse-content text-gray-600">
            <p>Bank sampah di EcoQuest memungkinkan pengguna untuk mengumpulkan dan mengelola sampah secara bertanggung jawab. Pengguna dapat menyetor sampah yang dapat didaur ulang dan memperoleh poin yang dapat ditukar dengan berbagai hadiah atau manfaat.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white rounded-none">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-bold text-gray-600">
          Apakah saya perlu mendaftar untuk menggunakan EcoQuest?

          </div>
          <div className="collapse-content text-gray-600">
            <p>Tidak, Anda tidak perlu mendaftar untuk menggunakan EcoQuest. Cukup isi formulir yang disediakan di situs web kami dengan informasi yang diperlukan, dan tim EcoQuest akan menghubungi Anda untuk konfirmasi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
