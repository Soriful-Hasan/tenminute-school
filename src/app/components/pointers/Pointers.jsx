import { chunkArray } from "@/app/utility/utility";
import { getData } from "@/libs/getData";
import React from "react";
import { FaCheck } from "react-icons/fa";

export default async function Pointers() {
  const data = await getData();
  const pointersSection = data.data.sections;
  const pointers = pointersSection.find(
    (section) => section.type === "pointers"
  );

  const pointersValue = pointers?.values || [];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4 ">
        What you will learn by doing the course
      </h1>

      <div className="space-y-4 mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {pointersValue.map((value) => (
          <div className="flex items-center gap-4">
            <FaCheck className="shrink-0 w-10 h-5" color="#6294F8" />
            <h1 className="text-lg text-gray-500">{value.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
