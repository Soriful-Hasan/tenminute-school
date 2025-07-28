import { getData } from "@/libs/getData";
import React from "react";
import { FaCheck } from "react-icons/fa6";

export default async function ExclusiveFeature() {
  const data = await getData();
  const exclusiveFeaturesSection = data.data.sections;
  const exclusiveFeatures = exclusiveFeaturesSection.find(
    (section) => section.type === "feature_explanations"
  );
  const exclusiveFeatureValue = exclusiveFeatures?.values || [];
  return (
    <div className="">
      <h1 className="text-xl font-semibold mb-4 ">Course Exclusive Feature</h1>
      <div className="border rounded-md space-y-4 p-2  border-gray-200">
        {exclusiveFeatureValue.map((exclusive, index) => (
          <div
            key={index}
            className={`p-4 ${
              index !== exclusiveFeatureValue.length - 1
                ? "border-b border-gray-200"
                : ""
            }`}
          >
            <h1 className="font-semibold text-gray-500">{exclusive.title}</h1>
            <div className="flex flex-col lg:flex-row gap-4 justify-between p-2 ">
              <div className="space-y-4 ">
                {exclusive.checklist.map((check, index) => (
                  <div key={index} className="flex gap-2">
                    <FaCheck color="#6294F8" size={22} />
                    <h1 className="text-gray-500">{check}</h1>
                  </div>
                ))}
              </div>
              <div className="w-50 ">
                
                <img src={exclusive.file_url} alt={exclusive.file_type} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
