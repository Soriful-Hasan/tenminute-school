import { getData } from "@/libs/getData";
import React from "react";

export default async function Header() {
  const data = await getData();
  const course = data.data;

  return (
    <div className="border p-10 ">
      <div className="">{course.title}</div>
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: course.description }}
      />
      <p>{course.instructors}</p>
    </div>
  );
}
