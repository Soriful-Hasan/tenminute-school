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
      <div className=" gap-4 border p-4 mt-6">
        {pointersValue.map((pointer) => (
          <div>
            <div className="">
              <img src={pointer.icon} alt="" />
            </div>
            <div className="">
              <h3>{pointer.text}</h3>
            </div>
            <div className=""></div>
          </div>
        ))}
      </div>
    </div>
  );
}
