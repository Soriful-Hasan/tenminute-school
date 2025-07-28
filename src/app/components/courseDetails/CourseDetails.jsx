import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function CourseDetails() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Course details</h1>
      <div className="border rounded-md space-y-4 p-7  border-gray-200 ">
        <div className="flex gap-4">
          <FaCheck color="#6294F8" size={22} />
          <h1>ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)</h1>
        </div>
        <div className="flex gap-4">
          <FaCheck color="#6294F8" size={22} />
          <h1>স্মার্টফোন অথবা পিসি</h1>
        </div>
      </div>
    </div>
  );
}
