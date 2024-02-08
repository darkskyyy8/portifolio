import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaDiscord, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Typed from "typed.js";
import Header from "../components/header";
import Link from "next/link";

const texts = ["UI UX Desain", "Front End"];

function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Inisialisasi instance Typed.js pada mount komponen
    const options = {
      strings: [texts[currentIndex]],
      typeSpeed: 50, // Kecepatan ketik (ms)
      backSpeed: 50, // Kecepatan penghapusan (ms)
      loop: false, // Mengaktifkan mode loop
    };

    const typed = new Typed(".text-typing", options);

    // Atur interval untuk mengganti teks setelah beberapa detik
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      typed.reset(); // Reset animasi Typed.js
    }, 1300); // Ubah angka ini untuk mengatur durasi antara perpindahan teks

    return () => {
      clearInterval(intervalId);
      typed.destroy(); // Hentikan Typed.js pada unmount
    };
  }, [currentIndex]);

  return (
    <>
      <Header />
      {/*beranda*/}
      <section
        id="beranda"
        className="text-center flex flex-col justify-center items-center"
      >
        <div className="pt-[56px] items-center">
          <Image
            src="/images/darkskyyy.png"
            width={250}
            height={250}
            alt="Photo"
          />
        </div>
        <div className="pt-[125px]">
          <h1 className="font-inter font-semibold text-white text-2xl">
            Hallo, saya
          </h1>
          <h1 className="font-inter font-semibold text-white text-2xl">
            Mochamad Dilla Maulana
          </h1>
          <div className="flex items-center pl-16 gap-2">
            <p
              className="font-inter font-semibold text-white text-2xl"
              style={{ position: "relative" }}
            >
              A
            </p>
            <p className="font-semibold text-typing text-[#00B586] text-2xl font-inter "></p>
          </div>
        </div>
        <div className="flex flex-row py-6 gap-5 text-white">
          <div className="relative group">
            <a
              href="https://discord.gg/YhzrRqKMsP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="text-3xl transition-transform transform group-hover:scale-150 group-hover:text-[#6a5acd]" />
              <div className="absolute inset-0 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </a>
          </div>
          <div className="relative group">
            <a
              href="https://www.instagram.com/dillamaulana_18/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl transition-transform transform group-hover:scale-150 group-hover:text-[#ff1493]" />
              <div className="absolute inset-0 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </a>
          </div>
          <div className="relative group">
            <a
              href="https://www.whatsapp.com/087747962252/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-3xl transition-transform transform group-hover:scale-150 group-hover:text-[#25D366]" />
              <div className="absolute inset-0 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </a>
          </div>
          <div className="relative group">
            <a
              href="https://discord.gg/YhzrRqKMsP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl transition-transform transform group-hover:scale-150 group-hover:text-[#663399]" />
              <div className="absolute inset-0 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </a>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#00B586] text-white px-10 py-1 rounded-lg hover:bg-[#2c6e5b] font-inter transition duration-500"
          >
            Unduh CV
          </button>
        </div>
      </section>
      {/*end beranda*/}
      {/* tentang saya*/}
      <section
        id="tentang"
        className="text-white font-inter pt-[50px] sm:px-[550px] px-6"
      >
        <div className="pb-[22px]">
          <h1 className="font-semibold text-2xl text-center">Tentang Saya</h1>
        </div>
        <div className="font-normal text-lg text-center">
          <p>
            Hallo, saya mahasiswa Institut Teknologi Garut, Jurusan Teknik yang
            bertanggung jawab, kreatif, pekerja keras dan disiplin. Informatika
            dan saya meiliki keahlian di bidang Web Development front end
          </p>
          <p className="pt-3">
            Pengembangan web yang berfokus pada bagian tampilan dan interaksi
            pengguna. Pengembangan front-end memainkan peran penting dalam
            menciptakan antarmuka pengguna yang menarik dan berfungsi dengan
            baik. Memerlukan kombinasi keterampilan pemrograman, desain, dan
            pengalaman pengguna untuk menciptakan pengalaman online yang positif
            bagi pengguna.
          </p>
        </div>
      </section>
      {/* end tentang saya*/}
      {/* portofolio*/}
      <section
        id="portofolio"
        className="text-white text-center font-inter py-[22px] px-4"
      >
        <div className="font-semibold text-2xl">Portofolio</div>
        <div className="sm:flex sm:flex-row sm:items-start gap-6 justify-center pt-[22px] items-center flex flex-col  ">
          <div className="bg-[#303030] p-4 rounded-lg sm:w-[235px] h-full hover:scale-105 transform transition-transform ">
            <Image
              src="/images/Villa-balli-paradise.png"
              width={400}
              height={250}
              alt="Photo"
            />
            <h3 className="font-semibold text-sm pt-4 pb-2">
              Villa Bali Paradise
            </h3>
            <p className="font-medium text-xs ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.{" "}
            </p>
          </div>
          <div className="bg-[#303030] p-4 rounded-lg sm:w-[235px] h-full hover:scale-105 transform transition-transform">
            <Image
              src="/images/gvr.png"
              width={235}
              height={225}
              alt="Photo"
              className="flex items-center"
            />
            <h3 className="font-semibold text-sm pt-4 pb-2">
              Garut Virtual Tour
            </h3>
            <p className="font-medium text-xs ">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
          <div className="bg-[#303030] p-4 rounded-lg sm:w-[235px] h-full hover:scale-105 transform transition-transform">
            <Image
              src="/images/image-porto.png"
              width={235}
              height={275}
              alt="Photo"
            />
            <h3 className="font-semibold text-sm pt-4 pb-2">Lorem Ipsum</h3>
            <p className="font-medium text-xs ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
      </section>
      {/* end portofolio */}
      {/* kontak */}
      <section
        id="kontak"
        className="text-white font-inter py-[22px] text-center"
      >
        <div className="font-semibold text-2xl text-center">Kontak</div>
        <form className="mx-auto pt-[22px] sm:px-[550px] px-6 text-start">
          <div className="mb-4 text-base font-inter">
            <label className="block mb-2 text-white text-lg font-inter px-2">
              Nama Lengkap :
            </label>
            <input
              type="text"
              placeholder="Nama Lengkap"
              name="fullName"
              className="w-full px-3 py-2 text-gray-700 rounded-lg border focus:outline-none focus:border-[#00B586]"
            />
          </div>
          <div className="mb-4 text-base font-inter">
            <label
              htmlFor="email"
              className="block mb-2 text-white text-lg font-inter px-2"
            >
              Email :
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full px-3 py-2 text-gray-700 rounded-lg border focus:outline-none focus:border-[#00B586]"
            />
          </div>
          <div className="mb-4 text-base font-inter">
            <label
              htmlFor="message"
              className="block mb-2 text-white text-lg font-inter px-2"
            >
              Pesan :
            </label>
            <textarea
              name="message"
              placeholder="Pesan"
              rows="2"
              className="w-full px-3 py-2 text-gray-700 rounded-lg border focus:outline-none focus:border-[#00B586]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#00B586] text-white px-10 py-1 rounded-lg hover:bg-[#2c6e5b] "
          >
            Kirim
          </button>
        </form>
      </section>
      {/* end kontak */}
      <footer className="flex flex-col items-center justify-center text-center">
        <Link href="/">
          <div className="hover:scale-110 pb-2">
            <Image src="/images/Ds.png" width={30} height={30} />
          </div>
        </Link>
        <p className="text-white">
          Created by
          <a href="/">
            <span className=" pl-1 hover:text-[#00B586] cursor-pointer">
              Dilla Maulana
            </span>
          </a>
        </p>
      </footer>
    </>
  );
}

export default Homepage;
