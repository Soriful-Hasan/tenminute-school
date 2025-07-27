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
      <h1 className="text-3xl">{features.name}</h1>
      <div className="grid grid-cols-4 p-4 gap-4 border mt-6 rounded-sm">
        {featureValue?.map((feature) => (
            <div className="">
            <div className="">
              <img src={feature.icon} alt="" />
            </div>
            <div className="">{feature.subtitle}</div>
            <div className="">{feature.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
