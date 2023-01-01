import Select from "react-select";
import { TbTrain } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";

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
  const customOption = (props) => {
    console.log(props);

    const { data, innerProps } = props;
    return (
      <div {...innerProps} className="d-flex justify-content-between">
        <div className="mx-2 text-primary">
          <BsBuilding />
        </div>
        <div className="row mx-2 ">
          <div className="col">
            <strong>{data.kota}</strong>
          </div>
          <footer className="blockquote-footer">{data.label}</footer>
        </div>
        <div className="mx-2">{data.kode}</div>
      </div>
    );
  };
  return (
    <div className="">
      <div className="flex ">
        <></>
        <section className="flex-initial w-64 mx-2 border border-orange-500">
          <div>
            <label>Dari</label>
          </div>
          <div className="d-flex flex-row justify-content-around">
            <div>
              <TbTrain />
            </div>
            <div className="">
              <Select
                placeholder="Pilih Kota"
                options={stasiun} // options bawaan
                components={{ Option: customOption }} // custom option
                //   styles={menuStyle}
              />
            </div>
          </div>
        </section>
        <></>
        <section className="flex-initial w-64 mx-2">
          <div>
            <label>Ke</label>
          </div>
          <div className="d-flex flex-row justify-content-around">
            <div>
              <TbTrain />
            </div>
            <div className="">
              <Select
                placeholder="Pilih Kota"
                options={stasiun} // options bawaan
                components={{ Option: customOption }} // custom option
                //   styles={menuStyle}
              />
            </div>
          </div>
        </section>
        <section className="flex-initial w-50 mx-2">
          Pergi
          <div className="">
            <div>
              <IoCalendarOutline />
            </div>
            <div>
              <input
                type="date"
                onfocus="(this.type='date')"
                placeholder="Date"
                id="start"
                name="trip-start"
                className="input-no-border"
                required
              ></input>
            </div>
          </div>
        </section>
        <section className="">
          Pulang
          <div className="">
            <div>
              <IoCalendarOutline />
            </div>
            <div>
              <input
                type="date"
                onfocus="(this.type='date')"
                placeholder="Date"
                id="start"
                name="trip-start"
                className="input-no-border"
                required
              ></input>
            </div>
          </div>
        </section>
      </div>
      <h2>ayam</h2>
    </div>
  );
}
