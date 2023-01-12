import { IoIosArrowForward, IoMdTrain } from "react-icons/io";
import HeaderPesan from "./HeaderPesan";
import IsiPesan from "./IsiPesan";
import TombolPesan from "./TombolPesan";

export default function Pesan(props) {
  return (
    <div>
      {/* <div className="flex flex-col mx-20 py-5 -mt-24 border border-black rounded-lg bg-white">
        <div>A</div>
        <div className="border-y-2 border-black grid grid-cols-5 px-10">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <div>C</div>
      </div> */}
      <section className="flex flex-col mx-20 py-5 -mt-24 border rounded-lg bg-white">
        <div>
          <HeaderPesan />
        </div>
        <div>
          <IsiPesan />
        </div>
        <div>
          <TombolPesan />
        </div>
      </section>
    </div>
  );
}
