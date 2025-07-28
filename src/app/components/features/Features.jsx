import { getData } from "@/libs/getData";
import React from "react";

export default async function Features() {
  const data = await getData();
  const featuresSection = data.data.sections;
  const features = featuresSection.find(
    (section) => section.type === "features"
  );
  const featureValue = features?.values || [];

  return (
    <div>
      <h1 className="text-xl font-bold">{features.name}</h1>
      <div
        style={{
          backgroundColor: "#111827",
        }}
        className="grid grid-cols-1 p-4 gap-4 border mt-6 rounded-sm"
      >
        {featureValue?.map((feature, index) => (
          <div key={index} className="">
            <div className="flex gap-2 items-center">
              <img src={feature.icon} alt="" />
              <div className="font-bold  text-white">{feature.title}</div>
            </div>
            <div className="text-white text-sm mt-4">{feature.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
