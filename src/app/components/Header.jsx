import { getData } from "@/libs/getData";
import React from "react";

export default async function Header() {
  const data = await getData();
  const course = data.data;

  return (
    <div className="py-10 w-8/12 mx-auto">
      <div className="text-4xl">{course.title}</div>
      <div
        className="prose dark:prose-invert max-w-100 "
        dangerouslySetInnerHTML={{ __html: course.description }}
      />
      <p>{course.instructors}</p>
    </div>
  );
}
