import { getData } from "@/libs/getData";
import React from "react";

const Instructors = async () => {
  const data = await getData();
  const section = data.data.sections;

  const instructorSection = section.find(
    (section) => section.type === "instructors"
  );

  const instructors = instructorSection?.values || [];

  return (
    <div>
      <h1 className="text-xl font-semibold">{instructorSection.name}</h1>
      <div className="mt-5">
        {instructors?.map((instructor, index) => (
          <div key={index}>
            <div className="flex p-6 gap-6 border border-gray-200 items-center rounded-lg ">
              <div className="">
                <img
                  className="rounded-full"
                  width={80}
                  src={instructor.image}
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-xl">{instructor.name}</h1>
                <div
                  className=" prose dark:prose-invert max-w-100  text-gray-600"
                  dangerouslySetInnerHTML={{ __html: instructor.description }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
