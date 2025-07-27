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
      <div className="">
        {engagementsValue?.map((engagement) => (
          <div className="">
            <img src={engagement.background.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
