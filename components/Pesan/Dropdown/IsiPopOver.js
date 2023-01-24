import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { VscChevronDown } from "react-icons/vsc";

import { Fragment } from "react";

const customer = [
  {
    name: "Dewasa",
    description: "Usia 3+",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Bayi",
    description: "Di bawah 3",
    href: "##",
    icon: IconOne,
  },
];

export default function PopOver({ dataObj, setdata }) {
  // const [countDewasa, setCountDewasa] = useState(0);
  // const [countAnak, setCountAnak] = useState(0);
  // const [error, setError] = useState(null);
  // console.log(dataObj, "data OBJ");
  // console.log(setdata, "setData");

  const adultPlus = (e) => {
    e.preventDefault();
    // console.log(e, "e.value");
    console.log(dataObj, "dataObj");
    console.log(dataObj.adult, "dataObj.adult");
    if (dataObj.adult < 8) {
      // setdata(dataObj.adult + 1);
      // setdata([...dataObj, (dataObj.adult + 1)]);
      setdata((e) => ({
        ...e,
        adult: e.adult + 1,
      }));
      // console.log(dataObj, "ayam sayur 1");
      console.log(dataObj.adult, "ayam sayur 2");
    } else {
      // setdata({ ...dataObj, adult: e.kota });
      console.log(dataObj, "ERROR TAMBAH");
      // console.log(dataObj, "data OBJ 222");
    }
  };

  const adultMinus = (e) => {
    e.preventDefault();
    if (dataObj.adult > 1) {
      setdata((e) => ({
        ...e,
        adult: e.adult - 1,
      }));
      console.log(dataObj.adult, "minus adult berhasil");
    } else {
      console.log(dataObj, "ERROR KURANG");
    }
  };
  const childPlus = (e) => {
    e.preventDefault();
    if (dataObj.child < 8) {
      setdata((e) => ({
        ...e,
        child: e.child + 1,
      }));
    } else {
      console.log(dataObj, "ERROR TAMBAH");
    }
  };
  const childMinus = (e) => {
    e.preventDefault();
    if (dataObj.child > 0) {
      setdata((e) => ({
        ...e,
        child: e.child - 1,
      }));
      // console.log(dataObj.adult, "minus adult berhasil");
    } else {
      // console.log(dataObj, "ERROR KURANG");
    }
  };

  return (
    <div className="top-16 w-full max-w-sm px-4">
      <Popover className="relative">
        <>
          <Popover.Button className="text-opacity-90">
            <VscChevronDown
              className="
                  ml-2 h-6 w-6 justify-items-end text-blue-700 transition duration-150 ease-in-out group-hover:text-opacity-80"
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-1 w-64 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 ">
              <section className="bg-white overflow-hidden border rounded shadow-lg px-5 py-5">
                <div className="bg-white lg:grid-cols-2">
                  <a
                    key={customer[0].name}
                    href={customer[0].href}
                    className="flex flex-row justify-between "
                  >
                    <div className="">
                      <p className="text-lg text-gray-800">
                        {customer[0].name}
                      </p>
                      <p className="text-md text-gray-500">
                        {customer[0].description}
                      </p>
                    </div>
                    <div className="">
                      <div className="">
                        <button
                          className=" text-blue-700 text-3xl"
                          // style={{
                          //   borderRadius: "25px 0px 0px 25px",
                          // }}
                          onClick={adultMinus}
                        >
                          -
                        </button>
                        <input
                          className="w-10 h-10 justify-center pl-4 text-2xl font-bold"
                          type="text"
                          min="0"
                          max="8"
                          value={dataObj.adult}
                        />
                        <button
                          className=" text-blue-700 text-3xl"
                          // onClick={() => !(count >= 8) && setCount(count + 1)}//
                          // onClick={() => setCount(count >= 8 ? 0 : count + 1)}
                          onClick={adultPlus}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </section>
              <section className="bg-white overflow-hidden border rounded shadow-lg px-5 py-5">
                <div className="bg-white lg:grid-cols-2">
                  <a
                    key={customer[1].name}
                    href={customer[1].href}
                    className="flex flex-row justify-between "
                  >
                    <div className="">
                      <p className="text-lg text-gray-800">
                        {customer[1].name}
                      </p>
                      <p className="text-md text-gray-500">
                        {customer[1].description}
                      </p>
                    </div>
                    <div className="">
                      <div className="">
                        <button
                          className=" text-blue-700 text-3xl"
                          onClick={childMinus}
                        >
                          -
                        </button>
                        <input
                          className="w-10 h-10 justify-center pl-4 text-2xl font-bold text-zinc-900"
                          type="text"
                          min="0"
                          max="8"
                          value={dataObj.child}
                        />
                        <button
                          className=" text-blue-700 text-3xl"
                          // onClick={() => !(count >= 8) && setCount(count + 1)}
                          onClick={childPlus}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </section>
              {({ close }) => (
                <button
                  onClick={async () => {
                    await fetch("/accept-terms", { method: "POST" });
                    close();
                  }}
                >
                  Read and accept
                </button>
              )}
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    </div>
  );
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}
