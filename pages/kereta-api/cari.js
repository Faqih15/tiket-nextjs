import React from "react";
import { useRouter } from "next/router";
import data from "../../data/kereta";

export default function CariKeretaApi() {
  //   const data = data;
  const { query } = useRouter();
    console.log(query);
  console.log(data.data.parameter.originCode);
  return <div>CariKeretaApi</div>;
}
