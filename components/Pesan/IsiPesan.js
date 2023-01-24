import Select from "react-select";
import { TbTrain } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";
import PopOver from "./Dropdown/IsiPopOver";
import { useState } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";

export default function IsiPesan() {
  const stasiun = [
    {
      value: "yogyakarta",
      kota: "Yogyakarta",
      label: "Yogyakarta, Lempuyangan",
      kode: "LPY",
    },
    {
      value: "yogyakarta",
      kota: "Yogyakarta",
      label: "Yogyakarta, Yogyakarta",
      kode: "YGY",
    },
    {
      value: "yogyakarta",
      kota: "Yogyakarta",
      label: "Yogyakarta, Wates",
      kode: "WAT",
    },
    {
      value: "semarang",
      kota: "Semarang",
      label: "Semarang, Semarangponcol",
      kode: "SPC",
    },
    {
      value: "semarang",
      kota: "Semarang",
      label: "Semarang, Semarangtawang",
      kode: "STW",
    },
    {
      value: "surabaya",
      kota: "Surabaya",
      label: "Surabaya, Pasarturi",
      kode: "PTR",
    },
    {
      value: "surabaya",
      kota: "Surabaya",
      label: "Surabaya, Gubeng",
      kode: "GBG",
    },
    {
      value: "surabaya",
      kota: "Surabaya",
      label: "Surabaya, Wonokromo",
      kode: "WNK",
    },
    {
      value: "jakarta",
      kota: "Jakarta",
      label: "Jakarta, Gambir",
      kode: "GBR",
    },
    {
      value: "jakarta",
      kota: "Jakarta",
      label: "Jakarta, Tanah Abang,",
      kode: "TAB",
    },
    {
      value: "jakarta",
      kota: "Jakarta",
      label: "Jakarta, Pasar Senen,",
      kode: "PSN",
    },
    {
      value: "bandung",
      kota: "Bandung",
      label: "Bandung, Bandung",
      kode: "BDG",
    },
    {
      value: "bandung",
      kota: "Bandung",
      label: "Bandung, Cimahi",
      kode: "CMH",
    },
    {
      value: "bandung",
      kota: "Bandung",
      label: "Bandung, Padalarang",
      kode: "PDL",
    },
    { value: "malang", kota: "Malang", label: "Malang, Lawang", kode: "LWG" },
    {
      value: "malang",
      kota: "Malang",
      label: "Malang, Kepanjeng",
      kode: "KPJ",
    },
    { value: "malang", kota: "Malang", label: "Malang, Malang", kode: "MLG" },
    { value: "solo", kota: "Solo", label: "Solo, Purwosari", kode: "PWS" },
    { value: "solo", kota: "Solo", label: "Solo, Solobalapan", kode: "SBL" },
    { value: "solo", kota: "Solo", label: "Solo, Solojebres", kode: "SJB" },
  ];
  // const [departureStation, setdepartureStation] = useState({});
  // const [arrivalStation, setarrivalStation] = useState({});
  // console.log(departureStation, "cityDEP", arrivalStation, "cityARR");
  //mengganti state data statiun departure dan arrival sudah jadi
  // const [departureDate, setdepartureDate] = useState({});
  // const [arrivalDate, setarrivalDate] = useState({});
  // console.log(departureDate, "dateDEP", arrivalDate, "dateARR");

  // const router = useRouter();
  // const data = router.query;
  // console.log(data);
  // // console.log(router, "routerpertama");
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   router.push("./kereta-api/cari");
  //   // console.log(router, "router setelah diklik");//
  // };
  const [data, setdata] = useState({
    depStation: "",
    arrStation: "",
    depDate: "",
    arrDate: "",
    adult: 1,
    child: 0,
  });
  // console.log(data, "data isipesan baris 113");
  const getdepartureStation = (e) => {
    setdata({ ...data, depStation: e.kota });
    // console.log(e.value, "adalah e e e e");
  };
  const getarrivalStation = (e) => {
    setdata({ ...data, arrStation: e.kota });
    // console.log(data, e.value, "adalah e e e e");
  };

  const customOption = (props) => {
    props.preventDefault;
    // console.log(props);

    const { data, innerProps } = props;
    return (
      <div
        {...innerProps}
        className="flex flex-row justify-between px-2 py-2 hover:bg-slate-300"
      >
        <section className="flex flex-row">
          <div className="m-2">
            <BsBuilding className="fill-blue-700" />
          </div>
          <div className="mx-2">
            <strong>{data.kota}</strong>
            <footer className="">{data.label}</footer>
          </div>
        </section>
        <div className="self-start px-3 bg-gray-200">{data.kode}</div>
      </div>
    );
  };

  const menuStyle = {
    menu: (base) => ({
      ...base,
      width: 350,
    }),
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? "white" : "white",
    }),
    menuList: (base) => ({
      ...base,

      "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#888",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    }),
  };
  const biru = { color: "blue" };
  const tampilAnak = () => {
    if (data.child > 0) {
      {
        data.child;
      }
    }
  };

  return (
    <div className="">
      <div className="border-y grid grid-cols-5 px-10 divide-x">
        <section className="flex-initial pr-2 pt-3">
          <div>
            <label className="text-slate-500 font-light">Dari</label>
          </div>
          <div className="flex">
            <div className="flex-none content-center">
              <TbTrain className="text-blue-600 text-2xl mt-2" />
            </div>
            <div className="grow w-44">
              <Select
                placeholder="Pilih Kota"
                options={stasiun} // options bawaan
                components={{
                  Option: customOption,
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }} // custom option
                styles={menuStyle}
                onChange={getdepartureStation}
                // value={data.depStation}
                // onChange={(event) =>
                //   setdata({
                //     depStation: event.target.value,
                //   })
                // }
              />
            </div>
          </div>
        </section>
        <></>
        <section className="flex-initial px-2 py-3">
          <div>
            <label className="text-slate-500 font-light">Ke</label>
          </div>
          <div className="flex">
            <div className="flex-none">
              <TbTrain className="text-blue-600 text-2xl mt-2" />
            </div>
            <div className="grow w-44">
              <Select
                placeholder="Pilih Kota"
                options={stasiun} // options bawaan
                components={{
                  Option: customOption,
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }} // custom option
                styles={menuStyle}
                onChange={getarrivalStation}
              />
            </div>
          </div>
        </section>

        <section className="flex-initial px-2 py-3 mx-2 ">
          <div>
            <label className="text-slate-500 font-light">Pergi</label>
          </div>
          <div className="flex">
            <div className="flex-none">
              <IoCalendarOutline className="text-blue-600 text-xl mt-2" />
            </div>
            <div className="grow w-36 mt-2 ml-2">
              <input
                type="date"
                onChange={(e) => setdata({ ...data, depDate: e.target.value })}
                placeholder="Date"
                id="start"
                name="trip-start"
                className="input-no-border"
                required
              ></input>
            </div>
          </div>
        </section>
        <section className="flex-initial px-2 py-3 mx-2">
          <div>
            <label className="text-slate-500 font-light">Pulang</label>
          </div>
          <div className="flex">
            <div className="flex-none">
              <IoCalendarOutline className="text-blue-600 text-xl mt-2" />
            </div>
            <div className="grow w-36 mt-2 ml-2">
              <input
                type="date"
                onChange={(e) => setdata({ ...data, arrDate: e.target.value })}
                placeholder="Date"
                id="start"
                name="trip-start"
                className="input-no-border"
                required
              ></input>
            </div>
          </div>
        </section>
        <></>

        <section className="px-2 py-3 mx-3">
          <div className="">
            <label className="text-slate-500 font-light">Penumpang</label>
          </div>
          <div>
            <p>
              {data.adult} Dewasa, {tampilAnak}
            </p>
          </div>
          <div className="ml-32 stroke-2 justify-center">
            <PopOver dataObj={data} setdata={setdata} />
          </div>
        </section>
      </div>
      <div className="px-10 text-right">
        <button className="my-4 px-4 py-2 font-semibold text-blue-600 border rounded-full bg-yellow-300">
          <Link
            // onClick={handleClick}
            href={{
              pathname: "./kereta-api/cari",
              query: data, // the data
            }}
          >
            CARI KERETA API
          </Link>
        </button>
      </div>
    </div>
  );
}
