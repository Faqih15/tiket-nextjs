import { IoMdTrain, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

export default function HeaderPesan() {
  const IoMdTrainStyle = { color: "white" };
  return (
    <div>
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
    </div>
  );
}
