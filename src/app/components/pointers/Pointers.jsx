import { getData } from "@/libs/getData";
import React from "react";

export default async function Pointers() {
  const data = await getData();
  const pointersSection = data.data.sections;
  const pointers = pointersSection.find(
    (section) => section.type === "pointers"
  );
  const pointersValue = pointers?.values || [];
  return (
    <div>
      <h1 className="text-3xl">{pointers.name}</h1>

      <div className=" border  rounded-md space-y-4 p-2  border-gray-200 ">
        {pointersValue.map((pointer, index) => (
          <div key={index}>
            <div className="">
              <h3 className="">{pointer.text}</h3>
            </div>
            <div className=""></div>
          </div>
        ))}
      </div>
    </div>
  );
}
