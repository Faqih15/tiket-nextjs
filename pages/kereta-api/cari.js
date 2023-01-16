// import { useRouter } from "next/router";
import { data } from "autoprefixer";
import Head from "next/head";
import NavbarLayan from "../../components/Navbar/NavbarLayan";
import NavbarUser from "../../components/Navbar/NavbarUser";
import { allData } from "../../data/kereta";
// import Home from "../index";

export default function CariKeretaApi() {
  // const { query } = useRouter();
  // console.log(query);
  // console.log(allData.code);
  const dataSt = allData.data.departJourneys.journeys;
  const hasil = dataSt.map((journeys) => ({ value: journeys.originStation }));
  // console.log(hasil, "hasil dataSt");
  const filtered = hasil.find((o, i) => {
    if (o.name === "Yogyakarta") {
      console.log("Yogyakarta ada");
    }
  });

  // filtered();
  // {dataSt.map((item, i) => (
  //   <li key={i}>{/* <p>{item.name}</p> */}</li>
  // ))}
  return (
    <div>
      <Head>
        <title>Home</title>
        <div>
          <NavbarUser />
        </div>
        <div>
          <NavbarLayan />
        </div>
      </Head>
      <div></div>
      CariKeretaApi
      <div></div>
    </div>
  );
}
