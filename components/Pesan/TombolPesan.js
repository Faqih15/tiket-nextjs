import Link from "next/link";
import React from "react";

export default function TombolPesan() {
  return (
    <div className="px-10 text-right">
      <button className="my-4 px-4 py-2 font-semibold text-blue-600 border rounded-full bg-yellow-300">
        <Link href="./kereta-api/cari">CARI KERETA API</Link>
      </button>
      {/* <button className="px-4 py-2 font-semibold text-blue-600 border rounded-full bg-yellow-300">
        <Link href="/carikereta/cari">cari kereta/cari</Link>
      </button> */}
      {/* <button className="px-4 py-2 font-semibold text-blue-600 border rounded-full bg-yellow-300">
        <Link href="/find">find</Link>
      </button> */}
    </div>
  );
}
