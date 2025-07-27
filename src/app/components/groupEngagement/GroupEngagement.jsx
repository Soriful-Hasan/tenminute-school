import { getData } from "@/libs/getData";
import React from "react";

export default async function GroupEngagement() {
  const data = await getData();
  const engagementSection = data.data.sections;
  const engagements = engagementSection.find(
    (section) => section.type === "group_join_engagement"
  );
  const engagementsValue = engagements?.values || [];
  console.log(engagementsValue);
  return (
    <div>
      {engagementsValue?.map((engagement) => (
        <div>
          <div
            className="rounded-lg bg-cover bg-center  w-full flex items-center justify-center"
            style={{
              backgroundImage: engagement.background.image
                ? `url(${engagement.background.image})`
                : "none",
            }}
          >
            <div className=" flex-1 p-5 space-y-4">
              <div className="w-80">
                <img src={engagement.top_left_icon_img} alt="" />
              </div>
              <h1 className="text-2xl font-semibold">{engagement.title}</h1>
              <p className="text-sm font-semibold">{engagement.description}</p>
              <button className="font-bold cursor-pointer bg-[#15803D]  py-4 px-3 rounded-md">
                ফ্রি PDF DOWNLOAD করুন
              </button>
            </div>
            <div className="flex-1">
              <div className="w-full p-20">
                <img src={engagement.thumbnail} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
