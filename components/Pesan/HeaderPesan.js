import { IoMdTrain, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

export default function HeaderPesan() {
  return (
    <div>
      <section className="flex justify-between pr-2">
        <div className="flex justify-center">
          <div className="px-1">
            <div className="fill-white bg-orange-500 rounded-circle">
              <IoMdTrain />
            </div>
          </div>
          <div className="text-red-500">
            Cari, Reservasi & Pesan Tiket Kereta Api KAI Online
          </div>
        </div>
        <div className="flex justify-center">
          <a href="#" className="">
            Pencarian terakhir
          </a>
          <a className="">
            <IoIosArrowForward />
          </a>
        </div>
      </section>
    </div>
  );
}
