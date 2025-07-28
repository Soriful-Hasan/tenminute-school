import { getData } from "@/libs/getData";
import React from "react";

export default async function GroupEngagement() {
  const data = await getData();
  const engagementSection = data.data.sections;
  const engagements = engagementSection.find(
    (section) => section.type === "group_join_engagement"
  );
  const engagementsValue = engagements?.values || [];
  return (
    <div>
      {engagementsValue?.map((engagement, index) => (
        <div key={index}>
          <div
            className="rounded-lg bg-cover bg-center  w-full flex flex-col lg:flex-row items-center justify-center"
            style={{
              backgroundImage: engagement.background.image
                ? `url(${engagement.background.image})`
                : "none",
            }}
          >
            <div className=" flex-1 py-10 px-6 space-y-4 text-white">
              <div className="w-40">
                <img src={engagement.top_left_icon_img} alt="" />
              </div>
              <h1 className="text-xl font-semibold">{engagement.title}</h1>
              <p className="text-sm text-gray-300 font-semibold">
                {engagement.description}
              </p>
              <button className="font-bold text-white cursor-pointer bg-[#25964e]  py-4 px-3 rounded-md">
                ফ্রি PDF DOWNLOAD করুন
              </button>
            </div>
            <div className="flex-1">
              <div className="w-full  lg:w-80">
                <img src={engagement.thumbnail} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
