import { IoIosArrowForward, IoMdTrain } from "react-icons/io";
import IsiPesan from "./IsiPesan";

export default function Pesan(props) {
  return (
    <div>
      <section className="flex flex-col mx-20 py-5 -mt-24 border rounded-lg bg-white">
        <section className="flex justify-between px-10">
          <div className="flex justify-center">
            <div className="px-1">
              <div className="mb-6">
                <div className="">
                  <IoMdTrain className="p-1 text-white bg-orange-500 text-2xl rounded rounded-[12px]" />
                </div>
              </div>
            </div>
            <div className=" text-slate-800 font-semibold text-xl	">
              Cari, Reservasi & Pesan Tiket Kereta Api KAI Online
            </div>
          </div>
          <div className="flex justify-center">
            <a href="#" className=" text-blue-700 font-semibold">
              Pencarian terakhir
            </a>
            <a>
              <IoIosArrowForward className="text-blue-600 text-xl mt-1" />
            </a>
          </div>
        </section>
        <div>
          <IsiPesan />
        </div>
        {/* <div>
          <TombolPesan />
        </div> */}
      </section>
    </div>
  );
}
