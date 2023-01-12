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
    name: "Anak-anak",
    description: "Di bawah 3 th",
    href: "##",
    icon: IconOne,
  },
];

export default function PopOver() {
  const [countDewasa, setCountDewasa] = useState(0);
  const [countAnak, setCountAnak] = useState(0);
  const [error, setError] = useState(null);

  const handleDewasa = (e) => {
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
  const handleAnak = (e) => {
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
    <div className="top-16 w-full max-w-sm px-4">
      <Popover className="relative">
        <>
          <Popover.Button className="text-opacity-90">
            <VscChevronDown
              className="
                  ml-2 h-5 w-5 justify-items-end text-blue-700 transition duration-150 ease-in-out group-hover:text-opacity-80"
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
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 ">
              <section className="overflow-hidden border rounded shadow-lg ">
                <div className="bg-white p-7 lg:grid-cols-2">
                  <a
                    key={customer[0].name}
                    href={customer[0].href}
                    className="-m-3 flex items-centerrounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                      <item.icon aria-hidden="true" />
                    </div> */}
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {customer[0].name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {customer[0].description}
                      </p>
                    </div>
                    <div className="">
                      <div className="">
                        <button
                          style={{
                            borderRadius: "25px 0px 0px 25px",
                          }}
                          onClick={() =>
                            !(countDewasa == 0) &&
                            setCountDewasa(countDewasa - 1)
                          }
                        >
                          -
                        </button>
                        <input
                          className="w-10 h-10 p-2"
                          type="text"
                          min="0"
                          max="8"
                          value={countDewasa}
                          onClick={() => setCountDewasa(null)}
                          onChange={handleDewasa}
                        />
                        <button
                          // onClick={() => !(count >= 8) && setCount(count + 1)}//
                          // onClick={() => setCount(count >= 8 ? 0 : count + 1)}
                          onClick={() =>
                            setCountDewasa(countDewasa ? countDewasa + 1 : 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </section>
              <section className="overflow-hidden border rounded shadow-lg ">
                <div className="bg-white p-7 lg:grid-cols-2">
                  <a
                    key={customer[1].name}
                    href={customer[1].href}
                    className="-m-3 flex items-centerrounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                      <item.icon aria-hidden="true" />
                    </div> */}
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {customer[1].name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {customer[1].description}
                      </p>
                    </div>
                    <div className="">
                      <div className="">
                        <button
                          style={{
                            borderRadius: "25px 0px 0px 25px",
                          }}
                          onClick={() =>
                            !(countAnak == 0) && setCountAnak(countAnak - 1)
                          }
                        >
                          -
                        </button>
                        <input
                          className="w-10 h-10 p-2"
                          type="text"
                          min="0"
                          max="8"
                          value={countAnak}
                          onClick={() => setCountAnak(null)}
                          onChange={handleAnak}
                        />
                        <button
                          // onClick={() => !(count >= 8) && setCount(count + 1)}//
                          // onClick={() => setCount(count >= 8 ? 0 : count + 1)}
                          onClick={() =>
                            setCountAnak(countAnak ? countAnak + 1 : 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </section>
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
