// import { FiChevronDown } from "react-icons/fi";
import NavbarLayan from "../components/NavbarLayan";
import NavbarUser from "../components/NavbarUser";
// import Carousel from "../components/Carousel";
import Slider from "../components/Slider";
export default function Home() {
  // console.log(NavbarUser);
  return (
    <div>
      <div>
        <NavbarUser />
      </div>
      <div>
        <NavbarLayan />
      </div>
      <div>
        {/* <Carousel /> */}
        <Slider />
      </div>
      <section>
        <h1 className="mt-96 text-3xl font-bold underline text-blue-600">
          Akhir Page cui !
        </h1>
      </section>
    </div>
  );
}
