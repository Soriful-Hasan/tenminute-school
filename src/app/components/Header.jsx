import { getData } from "@/libs/getData";
import React from "react";
import { FaStar } from "react-icons/fa";
import PlayVideo from "./sidebar/PlayVideo";
export default async function Header() {
  const data = await getData();
  const course = data.data;

  return (
    <div className="space-y-2  p-10 lg:py-10 w-full xl:w-7/12 mx-auto">
      <div className="xl:hidden">
        <PlayVideo />
      </div>
      <div className="text-4xl">{course.title}</div>
      <div className="flex gap-2">
        <div className="flex">
          <FaStar size={20} color="#FFA500" />
          <FaStar size={20} color="#FFA500" />
          <FaStar size={20} color="#FFA500" />
          <FaStar size={20} color="#FFA500" />
        </div>
        <h3> (81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</h3>
      </div>

      <div
        className="prose font-semibold text-gray-400 dark:prose-invert max-w-160 "
        dangerouslySetInnerHTML={{ __html: course.description }}
      />
      <p>{course.instructors}</p>
    </div>
  );
}
