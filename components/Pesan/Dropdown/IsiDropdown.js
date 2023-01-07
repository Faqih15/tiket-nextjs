import React, { useState } from "react";
import { Menu } from '@headlessui/react'


export default function IsiDropdown() {
  const [jumlahDw, setJumlahDw] = useState(null);
  const [jumlahAn, setJumlahAn] = useState(null);
  const [count, setCount] = useState(0);
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
  return <Menu>
  <Menu.Button>More</Menu.Button>
  <Menu.Items>
    <Menu.Item>
      {({ active }) => (
        <a
          className={`${active && 'bg-blue-500'}`}
          href="/account-settings"
        >
          Account settings
        </a>
      )}
    </Menu.Item>
    <Menu.Item>
      {({ active }) => (
        <a
          className={`${active && 'bg-blue-500'}`}
          href="/account-settings"
        >
          Documentation
        </a>
      )}
    </Menu.Item>
    <Menu.Item disabled>
      <span className="opacity-75">Invite a friend (coming soon!)</span>
    </Menu.Item>
  </Menu.Items>
</Menu>;
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
