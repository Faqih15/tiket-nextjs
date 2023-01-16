import Head from "next/head";
import NavbarLayan from "../components/Navbar/NavbarLayan";
import NavbarUser from "../components/Navbar/NavbarUser";
import Pesan from "../components/Pesan/Pesan";
import SwiperKananKiri from "../components/Swiper/SwiperKananKiri";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <div>
          <NavbarUser />
        </div>
        <div>
          <NavbarLayan />
        </div>
      </Head>
      <div>
        <section className="">
          <SwiperKananKiri />
        </section>
        <section>
          <Pesan />
        </section>

        <div className="mt-96 pt-96 text-red-600 text-8xl font-bold">
          AKHIR PAGE !!
        </div>
      </div>
    </>
  );
}
