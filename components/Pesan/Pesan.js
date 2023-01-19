import { IoIosArrowForward, IoMdTrain } from "react-icons/io";
import IsiPesan from "./IsiPesan";

export default function Pesan(props) {
  const IoMdTrainStyle = { color: "white" };

  return (
    <div>
      <section className="flex flex-col mx-20 py-5 -mt-24 border rounded-lg bg-white">
        <section className="flex justify-between px-10">
          <div className="flex justify-center">
            <div className="px-1">
              <div className="fill-white bg-orange-500 rounded rounded-full text-xl p-2 mb-6 content-start">
                <IoMdTrain style={IoMdTrainStyle} />
              </div>
            </div>
            <div className=" text-slate-800 font-semibold text-xl	">
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
