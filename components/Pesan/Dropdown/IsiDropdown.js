import React, { useState } from "react";
import { Dropdown } from "flowbite-react";

export default function IsiDropdown() {
  const [count, setCount] = useState(null);
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
        <Dropdown label="Dropdown button" className="bg-white">
          <Dropdown.Header>
            <span className="block text-sm">Penumpang</span>
          </Dropdown.Header>
          <Dropdown.Divider />
          <div className="flex justify-between w-44 pl-4 pr-4 pt-3 pb-3">
            <div> Dewasa</div>

            <div className="">
              <div className="">
                <button
                  style={{
                    borderRadius: "25px 0px 0px 25px",
                  }}
                  onClick={handleMinus}
                >
                  -
                </button>
                <input
                  className="w-10 h-10 p-2"
                  type="text"
                  min="0"
                  value={count}
                  onClick={() => setCount(null)}
                  onChange={handleValueChange}
                />
                <button onClick={handlePlus}>+</button>
              </div>
            </div>
          </div>
          <Dropdown.Divider />

          <Dropdown.Item>Anak</Dropdown.Item>
        </Dropdown>
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
