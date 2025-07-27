import { getData } from "@/libs/getData";
import React from "react";

export default async function Header() {
  const data = await getData();
  const heading = data.data;

  return (
    <div>
      <div className="">{heading.title}</div>
      <div className="">{heading.description}</div>
    </div>
  );
}
