import { IoIosArrowForward, IoMdTrain } from "react-icons/io";
import HeaderPesan from "./Pesan/HeaderPesan";
import IsiPesan from "./Pesan/IsiPesan";
import TombolPesan from "./Pesan/TombolPesan";

export default function Pesan(props) {
  return (
    <div className="">
      <section className="mx-20 px-10 py-5 -mt-24 border border-black rounded-lg bg-white">
        <div>
          <HeaderPesan />
        </div>
        <div className="">
          <IsiPesan />
        </div>
        <div>
          <TombolPesan />
        </div>
      </section>
    </div>
  );
}
