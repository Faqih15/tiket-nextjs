import Head from "next/head";
import { Inter } from "@next/font/google";
import NavbarLayan from "../components/NavbarLayan";
import NavbarUser from "../components/NavbarUser";
import Pesan from "../components/Pesan";
import SwiperKananKiri from "../components/SwiperKananKiri";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <div>
          <NavbarUser />
        </div>
        <div>
          <NavbarLayan />
        </div>
      </Head>
      <div>
        <section className="pb-8">
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
