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
      <h1 className=" text-4xl">{instructorSection.name}</h1>
      <div className="mt-5">
        {instructors?.map((instructor, index) => (
          <div key={index}>
            <div className="flex border p-8 rounded-lg ">
              <div className="">
                <img
                  className="rounded-full"
                  width={80}
                  src={instructor.image}
                  alt=""
                />
              </div>
              <div className="ml-10">
                <h1 className="text-xl">{instructor.name}</h1>
                <p>MSc (English), University of Oxford (UK)</p>
                <p>BA, MA (English), University of Dhaka</p>
                <p>IELTS: 8.5</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
