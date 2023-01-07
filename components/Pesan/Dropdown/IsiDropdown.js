import React, { useState } from "react";
// import { Dropdown } from "flowbite-react";

export default function IsiDropdown() {
  const [jumlahDw, setJumlahDw] = useState(null);
  const [jumlahAn, setJumlahAn] = useState(null);
  const [error, setError] = useState(null);

  function SubmitQty(e) {
    e.preventDefault();
    if (count !== 0 && count !== null) {
      // props.onAdd(count);
      setError("Items Added to Cart");
      setCount("");
    } else {
      setError("Please Enter a Valid Number");
    }
    /* Delete setCount if u want the selected Quantity to show up.. Set it "0" 
          if required it to get cleared*/
  }
  const handlePlus = () => {
    if (count === null || count === "") {
      setCount(1);
    } else {
      setCount(count + 1);
      setError(null);
    }
  };
  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
      setError(null);
    } else {
      setError("Please Enter a Valid Number");
    }
  };
  
  const handleValueChange = (e) => {
    e.preventDefault();
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      const x = Number(e.target.value);
      setCount(x);
      setError("Qty updated");
    } else {
      setError("Your input is not valid");
    }
  };
  return (
    <div>
      <div>
        {/* <Dropdown
          inline
          label="Dropdown button"
          className="bg-white"
          dismissOnClick={false}
        >
          <Dropdown.Header>
            <span className="text-sm font-extrabold">Penumpang</span>
          </Dropdown.Header>
          <Dropdown.Divider />
          <div className="flex gap-3 hover:bg-green-200">
            Dewasa
            <div className="flex gap-2">
              <button
                onClick={() => !(jumlahDw == 0) && setJumlahDw(jumlahDw - 1)}
                className="text-2xl font-extrabold"
              >
                -
              </button>
              <input
                type="number"
                // min="0"
                // max="8"
                value={jumlahDw}
                onChange={handleValueChange}
                className="!p-0 px-2 w-10"
              />
              <button
                onClick={() => !(jumlahDw >= 8) && setJumlahDw(jumlahDw + 1)}
                className="text-2xl font-extrabold"
              >
                +
              </button>
            </div>
          </div>
          <Dropdown.Divider />

          <div className="flex gap-3 hover:bg-green-200">
            Anak
            <div className="flex gap-2">
              <button
                onClick={() => !(jumlahAn >= 8) && setJumlahAn(jumlahAn + 1)}
                className="text-2xl font-extrabold"
              >
                -
              </button>
              <input
                type="number"
                // min="0"
                // max="8"
                value={jumlahAn}
                onChange={handleValueChange}
                className="!p-0 px-2 w-10"
              />
              <button
                onClick={() => !(jumlahAn >= 8) && setJumlahDw(jumlahAn + 1)}
                className="text-2xl font-extrabold"
              >
                +
              </button>
            </div>
          </div>
        </Dropdown> */}
      </div>
    </div>
  );
}

{
  /* <button
  className=""
  style={{
    borderRadius: "0px 25px 25px 0px",
  }}
  onClick={SubmitQty}
>
  Add
</button>; */
}
